<template>
  <h1 class="wf-nicomoji">
    {{ title }}
  </h1>
</template>
<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "PageTitle",
  props: {
    title: {
      type: String,
      required: true
    }
  }
});
</script>
<style>
.wf-nicomoji { font-family: "Nico Moji"; }
</style>
