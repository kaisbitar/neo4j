
import axios from 'axios'
import Vue from 'vue'

export function fetchQueryData(query) {
  return axios.get('api/run-cypher-query/' + query)
    .then(response => {
      Vue.notify({
        title: 'Query succeeded!',
        type: 'success',
      });
      return response.data
    })
    .catch(error => {
      Vue.notify({
        title: error.response.data.name,
        text: error.response.data.code,
        type: 'error',
      });
  })
}

export function fetchNeoVizObj(query) {
  return axios.get('api/get-neo-obj/' + query).then(response => {
    return response.data
  })
}