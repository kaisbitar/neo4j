import { fetchQueryData, fetchNeoVizObj } from '../api/apiClient'


export const getters = () => ({
    cypherQuery: state => state.cypherQuery,
    cypherQueryData: state => state.cypherQuery,
    neoVizConfig: state => state.neoVizConfig
})

export const state = () => ({
    cypherQuery: 'MATCH (m0:ICETYPE {name:"DWL_WallSetType-t"})-[r:yDimension]->(v0:ICEVALUE {name:"4.0"})  MATCH (m0)-->(o0:ICEOPTION)-->(p0:ICETYPE)-->(q0:ICEOPTION {name:"DWL_SubWall-o"})  RETURN m0.name, o0._id, v0.name, toString(count(v0)) as v0Count limit 50',
    cypherQueryData: [],
    neoVizConfig: []
})

export const mutations = {
    setCypherQuery(state, cypherQuery) {
        state.cypherQuery = cypherQuery
    },
    setCypherQueryData(state, cypherQueryData) {
        state.cypherQueryData = cypherQueryData
    },
    setNeoVizConfig(state, neoVizConfig){
        state.neoVizConfig = neoVizConfig
    }
}

export const actions = {
    runCypherQuery({ commit, state }) {
        return new Promise((resolve, reject) => {
            fetchQueryData(state.cypherQuery)
                .then(data => {
                    commit('setCypherQueryData', data)
                    resolve (data)
            })
        })
    },
    getNeoVizConfig({ commit, state}) {
        return new Promise ((resolve, reject) => {
            fetchNeoVizObj(state.cypherQuery)
                .then(data => {
                    commit('setNeoVizConfig', data)
                    resolve(data)
                })
        })
    }
}