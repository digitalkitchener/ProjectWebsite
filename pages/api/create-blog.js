export default function handler(req, res) {
  if (req.method === 'POST') {
    const { title, date, tags, draft, content, summary, q1, q2, q3, q4, images } = req.body
    const formattedTitle = title.replace(/\s+/g, '-')

    // Create new blog post with the received data
    const fs = require('fs')

    const post = `---
title: '${title}'
date: '${date}'
tags: [${tags.map((tag) => `'${tag}'`).join(', ')}]
draft: ${draft}
summary: ${summary}
q1: [${q1.map((q1s) => `'${q1s}'`).join(', ')}]
q2: [${q2.map((q2s) => `'${q2s}'`).join(', ')}]
q3: [${q3.map((q3s) => `'${q3s}'`).join(', ')}]
q4: [${q4.map((q4s) => `'${q4s}'`).join(', ')}]
images: [${images}]
---

${content}
`

    fs.writeFile(`./data/blog/${formattedTitle}.mdx`, post, (err) => {
      if (err) {
        console.error(err)
        res.status(500).json({ message: 'Error creating blog post.' })
      } else {
        res.status(200).json({ message: 'Blog post created successfully!' })
      }
    })

    res.status(200).json({ message: 'Blog post created successfully!' })
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).json({ message: `Method ${req.method} Not Allowed` })
  }
}
