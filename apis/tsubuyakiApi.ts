import { Tsubuyaki, TsubuyakiResponse } from "../types/models/tsubuyaki";
import { $axios } from "../plugins/axios-accessor";
export const tsubuyakiApi = {
  list: getTsubuyakies
};

const LIST_URL = "https://script.google.com/macros/s/AKfycbwHfBLyjO4SzqkF5l5V2MYTe8rDGyGSLXpUfvNDl47tVe9OTWE/exec";

async function getTsubuyakies(): Promise<Tsubuyaki[]> {
  let tsubuyakiesResponse: TsubuyakiResponse[] = [];
  try {
    tsubuyakiesResponse = await $axios.$get<TsubuyakiResponse[]>(LIST_URL, {
      params: {
        sheetName: "tsubuyaki"
      }
    });
  } catch (e) {
    console.error(e);
  }
  return tsubuyakiesResponse.map(mapToTsubuyaki);
}
function mapToTsubuyaki(response: TsubuyakiResponse): Tsubuyaki {
  return {
    id: Number(response.id),
    content: response.content.replace(/\r?\n/g, "<br>"),
    createdAt: Date.parse(response.createdAt),
    deletedAt: response.deletedAt
  };
}
