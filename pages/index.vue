<template>
  <b-container>
    <h1>
      Tsubuyaki
    </h1>
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
  asyncData() {
    console.log("asyncData()");
  },
  computed: {
    tsubuyakiItems(): Tsubuyaki[] {
      console.log("computed()");
      return tsubuyakiesStore.allTsubuyakies;
    }
  },
  async beforeCreate() {
    // beforeCreateはサーバサイド、クライアントサイドの両方で動く
    console.log("beforeCreate()");
    await tsubuyakiesStore.fetchMany();
  },
  mounted() {
    // mountedはクライアントサイドでのみ動いてる
    // asyncだと、明示的に返り値を指定しなくてもPromiseがreturnされる。
    console.log("mounted()");
  }
});
</script>
