<template class="bg-yellow">
  <b-container>
    <page-title :title="pageTitle" />
    <div v-for="item in tsubuyakiItems" :key="item.id" class="pt-3">
      <tsubuyaki-card :tsubuyaki="item" />
    </div>
  </b-container>
</template>

<script lang="ts">
import Vue from "vue";
import { Tsubuyaki } from "../types/models/tsubuyaki";
import { tsubuyakiesStore } from "~/store/tsubuyaki/tsubuyaki-accessor";
import PageTitle from "~/components/atomic/atoms/PageTitle.vue";
import TsubuyakiCard from "~/components/atomic/molecules/TsubuyakiCard.vue";
export default Vue.extend({
  components: {
    PageTitle,
    TsubuyakiCard
  },
  fetch() {
    // fetchはサーバサイドでのみ動いてる
    console.log("fetch()");
  },
  asyncData() {
    console.log("asyncData()");
  },
  data() {
    return {
      pageTitle: "つぶやき"
    };
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
