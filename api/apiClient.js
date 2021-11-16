
import axios from 'axios'

export function fetchQueryData(query) {
  return axios.get('api/run-cypher-query/' + query).then(response => {
    return response.data
  })
}

export function fetchNeoVizObj(query) {
  return axios.get('api/get-neo-obj/' + query).then(response => {
    return response.data
  })
}