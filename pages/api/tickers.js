import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  if (req.method === 'POST') {
    const data = getData()
    const newData = req.body
    setData({ ...data, ...newData })
    res.status(200).json({ message: 'Data updated' })
  }
  else if (req.method === 'GET') {
    const data = getData()
    res.status(200).json(data)
  } 
  else {
    res.status(400).json({ message: 'Method not allowed' })
  }
}


function getData() {
  const filePath = path.join(process.cwd(), 'data.json')
  const fileContents = fs.readFileSync('data.txt', 'utf8')
  return JSON.parse(fileContents)
}

function setData(data) {
  const filePath = path.join(process.cwd(), 'data.json')
  const fileContents = JSON.stringify(data)
  fs.writeFileSync('data.txt', fileContents, 'utf8')
}
