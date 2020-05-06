<template>
  <b-container>
    <h1>MemoPage</h1>
    <div v-for="item in memoItems" :key="item.id" class="pt-3">
      <b-card>
        <b-card-text>
          {{ item.content }}
        </b-card-text>
      </b-card>
    </div>
  </b-container>
</template>
<script lang="ts">
import Vue from "vue";
import { Memo } from "../types/models/memo";
import { memosStore } from "~/store/memo/memo-accessor";
export default Vue.extend({
  computed: {
    memoItems(): Memo[] {
      console.log("computed()");
      return memosStore.allMemos;
    }
  },
  async beforeCreate() {
    console.log("beforeCreate()");
    await memosStore.fetchMany();
  }
});
</script>
