import express from 'express'
import { fetchFromDataBase, fetchNeoVisObjFromDataBase } from '../controllers/neo4jController'

const app = express()

app.get('/run-cypher-query/:query', async (req, res, next) => {
 try { 
   const result = await fetchFromDataBase(req.params.query)
   res.json(result) 
  }
  catch(err) { 
    res.status(500).json(err) 
  } 
})

app.get('/get-neo-obj/:query', async (req, res) => {
  const result = await fetchNeoVisObjFromDataBase(req.params.query)
  res.json(result)
})

export default app