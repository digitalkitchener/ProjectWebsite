const form = document.querySelector('#create-blog-form')
form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
  event.preventDefault()

  const formData = new FormData(event.target)
  const title = formData.get('title')
  const date = formData.get('date')
  const tags = formData
    .get('tags')
    .split(',')
    .map((tag) => tag.trim())
  const draft = formData.get('draft') === 'true'
  const content = formData.get('content')
  const summary = formData.get('summary')

  const data = {
    title,
    date,
    tags,
    draft,
    content,
    summary,
  }

  try {
    const response = await fetch('/api/create-blog', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    if (response.ok) {
      const result = await response.json()
      console.log(result)
      alert('Blog post created successfully!')
    } else {
      const error = await response.json()
      console.error(error)
      alert('Failed to create blog post.')
    }
  } catch (error) {
    console.error(error)
    alert('An error occurred while creating blog post.')
  }
}
