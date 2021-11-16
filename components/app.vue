<template>
  <div class="app white">
    <queryBox
      @querySubmitted="handleSubmittedQuery()"
      :tableItems="tableItems"
    />
    <div class="dataBox mt-n3">
      <queryViewOptions @viewchanged="changeView" :view="view" />
      <queryTable
        v-if="view === 'table'"
        :height="dataBoxHeight"
        :tableItems="itemsWithIndex"
        :headers="headers"
        :loading="loading"
      />
      <queryCanvas
        v-if="view === 'graph'"
        :height="dataBoxHeight"
        :config="neoVizConfig"
        :loading="loading"
      />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    tableItems: [],
    headers: [],
    view: "table",
    windowHeight: window.innerHeight,
    loading: false,
    tableIndex: {
      text: "",
      value: "itemIndex",
      class: "blue-grey lighten-5 subtitle-2 text-center",
      sortable: false,
    },
  }),
  computed: {
    cypherQueryData() {
      return this.$store.state.cypherQueryData;
    },
    neoVizConfig() {
      return this.$store.state.neoVizConfig;
    },
    dataBoxHeight() {
      return this.windowHeight - 280;
    },
    itemsWithIndex() {
      return this.tableItems.map((tableItems, index) => ({
        itemIndex: index + 1,
        ...tableItems,
      }));
    },
  },
  methods: {
    changeView(view) {
      this.view = view;
      this.handleSubmittedQuery();
    },
    handleSubmittedQuery() {
      this.loading = true;
      this.$store
        .dispatch("runCypherQuery")
        .then(() => {
          this.prepareTableData();
        })
        .then(() => {
          this.$store.dispatch("getNeoVizConfig");
        })
        .then(() => {
          this.loading = false;
        });
    },
    prepareTableData() {
      if (this.cypherQueryData.length === 0) return;
      this.buildTableItems();
      this.buildHeaders();
    },
    buildTableItems() {
      this.tableItems = [];
      this.tableItems = this.cypherQueryData.records.map((item) => {
        var obj = {};
        for (let i = 0; i < item.keys.length; i++) {
          obj[item.keys[i]] = item._fields[i];
        }
        return obj;
      });
    },
    buildHeaders() {
      this.headers = [];
      this.headers.push(this.tableIndex);
      for (let i = 0; i < this.cypherQueryData.records[0].keys.length; i++) {
        this.headers.push({
          text: this.cypherQueryData.records[0].keys[i],
          value: this.cypherQueryData.records[0].keys[i],
          class: "blue-grey lighten-5 subtitle-2 text-center",
        });
      }
    },
    isObject(obj) {
      return obj != null && obj.constructor.name === "Object";
    },
    isArray(array) {
      return array != null && Array.isArray(array);
    },
  },
  watch: {},
  mounted() {},
};
</script>

<style >
.dataBox {
  display: grid;
  grid-template-columns: 5% 95%;
}
</style>