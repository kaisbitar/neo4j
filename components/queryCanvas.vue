<template>
  <div>
    <div class="viz" id="viz" :style="{ height: height + 'px' }"></div>
    <v-overlay :absolute="false" :opacity="0.6" color="white" :value="loading">
      <v-progress-circular color="indigo" indeterminate></v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
import neoVis from "neovis.js";

export default {
  props: ["config", "height", "loading"],
  data: () => ({
    viz: null,
  }),
  methods: {
    draw() {
      this.viz = new neoVis(this.config);
      this.viz.render()
    },
  },
  computed: {},
  mounted() {},
  watch: {
    config() {
      this.draw();
    },
  },
};
</script>

<style >
canvas {
  background: #fafbfd;
  border: 1px solid #0000001f;
}
</style>
