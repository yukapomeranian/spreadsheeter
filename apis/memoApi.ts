import { Memo, MemoResponse } from "../types/models/memo";
import { $axios } from "../plugins/axios-accessor";
export const memoApi = {
  list: getMemos
};

const LIST_URL = "https://script.google.com/macros/s/AKfycbwHfBLyjO4SzqkF5l5V2MYTe8rDGyGSLXpUfvNDl47tVe9OTWE/exec?&sheetName=memo";

async function getMemos(): Promise<Memo[]> {
  let memosResponse: MemoResponse[] = [];
  try {
    memosResponse = await $axios.$get<MemoResponse[]>(LIST_URL);
  } catch (e) {
    console.error(e);
  }
  return memosResponse.map(mapToTsubuyaki);
}
function mapToTsubuyaki(response: MemoResponse): Memo {
  return {
    id: Number(response.id),
    content: response.content,
    deletedAt: response.deletedAt
  };
}
