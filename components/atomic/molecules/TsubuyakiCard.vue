<template>
  <b-card>
    <b-card-sub-title>
      {{ tsubuyaki.createdAt | moment("YYYY/MM/DD ddd. hh:mm") }}
    </b-card-sub-title>
    <br>
    <b-card-text>
      {{ tsubuyaki.content }}
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
