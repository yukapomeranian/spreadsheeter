import { Store } from "vuex";
import { getModule } from "vuex-module-decorators";
import TsubuyakiStore from "~/store/tsubuyaki/tsubuyaki";

// eslint-disable-next-line import/no-mutable-exports
let tsubuyakiesStore: TsubuyakiStore;

function initialiseStores(store: Store<any>): void {
  tsubuyakiesStore = getModule(TsubuyakiStore, store);
}

export { initialiseStores, tsubuyakiesStore };
