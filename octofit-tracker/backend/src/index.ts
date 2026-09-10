import express from 'express'
import mongoose from 'mongoose'

const app = express()
const port = Number(process.env.PORT ?? 8000)
const host = process.env.HOST ?? '0.0.0.0'
const codespaceName = process.env.CODESPACE_NAME
export const apiBaseUrl = codespaceName
  ? `https://octofit-fit-8000.app.github.dev`
  : 'http://localhost:8000'
const mongoUri = process.env.MONGODB_URI ?? 'mongodb://127.0.0.1:27017/octofit_db'

app.use(express.json())

app.get('/api/health', (_request, response) => {
  response.json({ status: 'ok', service: 'octofit-tracker-api' })
})

app.get('/api/users', (_request, response) => {
  response.json([])
})

app.get('/api/activities', (_request, response) => {
  response.json([])
})

mongoose
  .connect(mongoUri)
  .then(() => {
    app.listen(port, host, () => {
      console.log(`OctoFit API listening at ${apiBaseUrl}`)
    })
  })
  .catch((error: unknown) => {
    console.error('Unable to connect to MongoDB', error)
    process.exitCode = 1
  })