import {
  Module,
  VuexModule,
  Mutation,
  Action
} from "vuex-module-decorators";
import { Memo } from "~/types/models/memo";
import { memoApi } from "~/apis/memoApi";

@Module({
  name: "memo/memo",
  stateFactory: true,
  namespaced: true
})
export default class MemoStore extends VuexModule {
  private memos: Memo[] = [];

  @Mutation
  private setMemos(memos: Memo[]): void {
    this.memos = memos;
  }

  @Action({ commit: "setMemos", rawError: true })
  public async fetchMany(): Promise<Memo[]> {
    if (this.allMemos.length > 0) {
      return await Promise.resolve([]);
    }
    return await memoApi.list();
  }

  public get allMemos(): Memo[] {
    return this.memos;
  }
}
