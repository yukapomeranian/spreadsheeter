<template>
  <b-card>
    <b-card-sub-title align="right">
      <small class="text-muted">{{ tsubuyaki.createdAt | moment("YYYY/MM/DD ddd. hh:mm") }}</small>
    </b-card-sub-title>
    <b-card-text>
      <small v-html="tsubuyaki.content" />
    </b-card-text>
  </b-card>
</template>
<script lang="ts">
import Vue, { PropOptions } from "vue";
import { Tsubuyaki } from "../../../types/models/tsubuyaki";
export default Vue.extend({
  name: "TsubuyakiCard",
  props: {
    tsubuyaki: {
      type: Object,
      required: true
    } as PropOptions<Tsubuyaki>
  }
});
</script>
