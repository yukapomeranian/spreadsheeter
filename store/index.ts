import { Store } from "vuex";
import { initialiseTsubuyakiStores } from "~/store/tsubuyaki/tsubuyaki-accessor";
import { initialiseMemoStores } from "~/store/memo/memo-accessor";

const tsubuyakiInitializer = (store: Store<any>): void => initialiseTsubuyakiStores(store);
const memoInitializer = (store: Store<any>): void => initialiseMemoStores(store);

export const plugins = [tsubuyakiInitializer, memoInitializer];
export { tsubuyakiesStore } from "~/store/tsubuyaki/tsubuyaki-accessor";
export { memosStore } from "~/store/memo/memo-accessor";
