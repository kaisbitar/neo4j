<template>
  <div class="d-flex appQueryBox">
    <!-- {{tableItems}} -->
    <v-textarea
      label="neo4j$"
      v-model="cypherQueryLocal"
      placeholder="Enter Cypher query.."
      hint=""
      no-resize
      class="QueryTextArea pl-4 pt-4 pb-4"
      dense
      spellcheck="false"
    ></v-textarea>
    <div class="pt-6 pr-1 pl-1">
      <v-btn class="white" elevation="0" @click="submitQuery()">
        <v-icon color="blue" large>mdi-play</v-icon>
      </v-btn>
      <v-btn class="white" elevation="0">
        <download-excel :data="tableItems">
          <v-icon color="grey darken-2">mdi-download</v-icon>
        </download-excel>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "appQueryBox",
  props: ["tableItems"],
  components: {},
  data: () => ({
    cypherQueryLocal: "",
  }),
  methods: {
    submitQuery() {
      this.$store.commit("setCypherQuery", this.cypherQueryLocal);
      this.$emit("querySubmitted");
    },
  },
  computed: {
    cypherQuery() {
      return this.$store.state.cypherQuery;
    },
  },
  created() {
    this.cypherQueryLocal = this.cypherQuery;
  },
  mounted() {
    this.submitQuery();
  },
};
</script>

<style>
.QueryTextArea .v-text-field__slot {
  height: 60px;
}
.QueryTextArea textarea {
  font-family: monospace;
}
.appQueryBox {
  border: 1px solid #0000001f;
}
.theme--light.v-text-field > .v-input__control > .v-input__slot:before {
  border-color: rgb(0 0 0 / 0%);
}
</style>
