import fs from 'fs'
import path from 'path'

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { name } = req.body
    res.status(200).json({ message: `Hello, ${name}!` })
  } else {
    res.status(400).json({ message: 'Method not allowed' })
  }
}
