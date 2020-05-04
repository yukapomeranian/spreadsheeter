import { Store } from "vuex";
import { initialiseStores } from "~/store/tsubuyaki/tsubuyaki-accessor";

const initializer = (store: Store<any>): void => initialiseStores(store);

export const plugins = [initializer];
export * from "~/store/tsubuyaki/tsubuyaki-accessor";
