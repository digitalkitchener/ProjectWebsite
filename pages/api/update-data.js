import fs from 'fs'
import path from 'path'
import projectsData from '../../data/projectsData.js'

export default function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ message: 'Method not allowed' })
    return
  }

  const filePath = path.join(process.cwd(), 'data', 'projectsData.js')
  const { title, description, imgSrc, href } = req.body
  const formattedTitle = title.replace(/\s+/g, '-')
  const weblink = `./data/blog/${formattedTitle}`

  // Append the new data to the existing data
  projectsData.push({ title, description, imgSrc, href })

  // Write the updated data back to the file
  fs.writeFileSync(filePath, `export default ${JSON.stringify(projectsData)};`)

  res.status(200).json({ success: true })
}
