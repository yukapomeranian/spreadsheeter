<template>
  <b-container>
    <h1 class="py-3">
      Tsubuyaki
    </h1>
    <div v-for="item in tsubuyakiItems" :key="item.id">
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
  computed: {
    tsubuyakiItems(): Tsubuyaki[] {
      console.log("computed()");
      return tsubuyakiesStore.allTsubuyakies;
    }
  },
  async mounted() {
    // mountedはクライアントサイドでのみ動いてる
    // asyncだと、明示的に返り値を指定しなくてもPromiseがreturnされる。
    console.log("mounted()");
    await tsubuyakiesStore.fetchMany();
  }
});
</script>
