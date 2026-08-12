// Entry point for the backend. Right now this just proves the server actually
// runs — real routes/middleware get added feature by feature from here, not
// all at once.

import express from 'express'
import { config } from '@/config'

const app = express()

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.listen(config.PORT, () => {
  console.log(`doot-backend listening on http://localhost:${config.PORT}`)
})
