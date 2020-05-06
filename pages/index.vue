<template>
  <b-container>
    <h1 class="pt-3">
      Tsubuyaki
    </h1>
    <div class="text-right">
      <b-button
        variant="outline-primary"
        size="sm"
        target="_blank"
        rel="noopener noreferrer"
        href="https://github.com/yukapomeranian/spreadsheeter/issues"
      >
        Issues Prease!
      </b-button>
    </div>
    <div v-for="item in tsubuyakiItems" :key="item.id" class="pt-3">
      <b-card>
        <b-card-sub-title>
          {{ item.createdAt }}
        </b-card-sub-title>
        <br>
        <b-card-text>
          {{ item.content }}
        </b-card-text>
      </b-card>
    </div>
  </b-container>
</template>

<script lang="ts">
import Vue from "vue";
import { Tsubuyaki } from "../types/models/tsubuyaki";
// import Logo from "~/components/Logo.vue";
import { tsubuyakiesStore } from "~/store/tsubuyaki/tsubuyaki-accessor";

export default Vue.extend({
  components: {
    // Logo
  },
  fetch() {
    // fetchはサーバサイドでのみ動いてる
    console.log("fetch()");
  },
  async asyncData() {
    console.log("asyncData()");
    await tsubuyakiesStore.fetchMany();
  },
  computed: {
    tsubuyakiItems(): Tsubuyaki[] {
      console.log("computed()");
      return tsubuyakiesStore.allTsubuyakies;
    }
  },
  mounted() {
    // mountedはクライアントサイドでのみ動いてる
    // asyncだと、明示的に返り値を指定しなくてもPromiseがreturnされる。
    console.log("mounted()");
  }
});
</script>
