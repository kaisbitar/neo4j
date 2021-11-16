<template>
  <div class="dataTableWraper">
    <v-data-table
      class="dataTable"
      outlined
      :headers="headers"
      :items="tableItems"
      :height="height"
      :loading="loading"
      fixed-header
    >
      <template v-slot:item="props">
        <!-- <div class="ml-1 caption mb-n12">{{props.item.itemIndex}}</div> -->
        <tr>
          <td class="pa-4 text-center" v-for="anItem in props.item">
            <!-- {{props.item}} -->
            {{ anItem}}
          </td>
        </tr>
      </template>
    </v-data-table>
  </div>
</template>
        
 
<script>
export default {
  props: ["tableItems", "headers", "height", "loading"],
  data: () => ({}),
  computed: {},
  methods: {},
  mounted() {},
  watch: {},
};
</script>

<style>
.dataTableWraper {
  border: 1px solid #0000001f;
}
.dataTable td {
  color: #767676;
  background: #e8eaf633 !important;
}
td.text-start {
  padding: 8px !important;
}
textarea {
  color: #767676 !important;
}
</style>