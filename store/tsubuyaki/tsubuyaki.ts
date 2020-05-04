import {
  Module,
  VuexModule,
  Mutation,
  Action
} from "vuex-module-decorators";
import { Tsubuyaki } from "../../types/models/tsubuyaki";
import { tsubuyakiApi } from "~/apis/tsubuyakiApi";

@Module({
  name: "tsubuyaki/tsubuyaki",
  stateFactory: true,
  namespaced: true
})
export default class TsubuyakiStore extends VuexModule {
  private tsubuyakies: Tsubuyaki[] = [];

  @Mutation
  private addTsubuyaki(tsubuyaki: Tsubuyaki): void {
    this.tsubuyakies.push(tsubuyaki);
  }

  @Mutation
  private setTsubuyakies(tsubuyakies: Tsubuyaki[]): void {
    this.tsubuyakies = tsubuyakies;
  }

  @Action({ commit: "setTsubuyakies", rawError: true })
  public async fetchMany(): Promise<Tsubuyaki[]> {
    if (this.allTsubuyakies.length > 0) {
      return await Promise.resolve([]);
    }
    return await tsubuyakiApi.list();
  }

  public get allTsubuyakies(): Tsubuyaki[] {
    return this.tsubuyakies;
  }
}
