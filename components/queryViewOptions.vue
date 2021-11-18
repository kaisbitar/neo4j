<template>
  <div class="queryOptions">
    <v-card
      v-for="(item, key) in options"
      :key="key"
      :class="{ 'grey white--text': view === item.value }"
      @click="$emit('viewchanged', item.value)"
      class="pt-3 pb-3 text-center"
      tile
      flat
    >
      <v-icon
        :class="{ 'white--text': view === item.value }"
        class="viewIcon"
        >{{ item.icon }}</v-icon
      >
      <div class="caption">{{ item.text }}</div>
    </v-card>
  </div>
</template>
        
 
<script>
export default {
  props: ["view"],
  data: () => ({
    options: [
      { text: "Graph", value: "graph", icon: "mdi-chart-bubble" },
      { text: "Table", value: "table", icon: "mdi-table" },
    ],
  }),
  computed: {},
  methods: {},
  mounted() {},
  watch: {},
};
</script>

<style scoped>
.viewIcon {
  width: 35px;
}
.queryOptions {
  border-top: 1px solid #0000001f;
  border-bottom: 1px solid #0000001f;
  border-left: 1px solid #0000001f;
}
</style>