const express = require('express')
const fs = require('fs')
const path = require('path')
const cors = require('cors')

const app = express()
const PORT = 3001
app.use(cors())
app.use(express.json())

const wordsFile = path.join(__dirname, 'words.json')

app.get('/api/words', (req, res) => {
  const data = JSON.parse(fs.readFileSync(wordsFile, 'utf-8'))
  res.json(data)
})

app.post('/api/words', (req, res) => {
  const { uz, en } = req.body
  if (!uz || !en) return res.status(400).send('Missing fields')

  const data = JSON.parse(fs.readFileSync(wordsFile, 'utf-8'))
  data.push({ uz, en })
  fs.writeFileSync(wordsFile, JSON.stringify(data, null, 2))
  res.status(200).send('Added successfully')
})

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`))
