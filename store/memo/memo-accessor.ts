import { Store } from "vuex";
import { getModule } from "vuex-module-decorators";
import MemoStore from "~/store/memo/memo";

// eslint-disable-next-line import/no-mutable-exports
let memosStore: MemoStore;

function initialiseMemoStores(store: Store<any>): void {
  memosStore = getModule(MemoStore, store);
}

export { initialiseMemoStores, memosStore };