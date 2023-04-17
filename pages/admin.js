import { useState, useEffect } from 'react'
import axios from 'axios'
import { Auth } from 'aws-amplify'

export default function Admin() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [imgSrc, setImgSrc] = useState('')
  const [href, setHref] = useState('')
  const [type, setType] = useState('')
  const [date, setDate] = useState('')
  const [tags, setTags] = useState('')
  const [draft, setDraft] = useState(false)
  const [summary, setSummary] = useState('')
  const [content, setContent] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    async function checkAuth() {
      try {
        await Auth.currentAuthenticatedUser()
        setLoggedIn(true)
      } catch {
        setLoggedIn(false)
      }
    }
    checkAuth()
  }, [])

  const handleSubmitProjects = async (event) => {
    event.preventDefault()
    const data = { title, description, imgSrc, href }
    await axios.post('/api/update-data', data)
    alert('Form submitted')
  }

  const handleSubmitBlog = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const title = formData.get('title')
    const date = formData.get('date')
    const tags = formData
      .get('tags')
      .split(',')
      .map((tag) => tag.trim())
    const draft = formData.get('draft') === 'on'
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

    await axios.post('/api/create-blog', data)
    alert('Form submitted')
  }

  async function handleSignOut() {
    try {
      await Auth.signOut()
      setLoggedIn(false)
    } catch (error) {
      console.log('error signing out: ', error)
    }
  }

  if (!loggedIn) {
    return <button onClick={() => Auth.federatedSignIn()}>Sign in</button>
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ width: '48%' }}>
        <h2>Add project</h2>
        <form onSubmit={handleSubmitProjects}>
          <label>
            Title:
            <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} />
          </label>
          <br />
          <label>
            Description:
            <textarea
              name="description"
              rows={4}
              cols={50}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </label>
          <br />
          <label>
            Image source:
            <input type="text" name="imgSrc" onChange={(e) => setImgSrc(e.target.value)} />
          </label>
          <br />
          <label>
            Link(Has to link to an existing blog post):
            <input type="text" name="href" onChange={(e) => setHref(e.target.value)} />
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
      <div style={{ width: '48%' }}>
        <h2>Create new blog post</h2>
        <form onSubmit={handleSubmitBlog}>
          <label>
            Title:
            <input type="text" name="title" onChange={(e) => setTitle(e.target.value)} />
          </label>
          <br />
          <label>
            Date:
            <input type="text" name="date" onChange={(e) => setDate(e.target.value)} />
          </label>
          <br />
          <label>
            Tags:
            <input type="text" name="tags" onChange={(e) => setTags(e.target.value)} />
          </label>
          <br />
          <label>
            Draft:
            <input type="checkbox" name="draft" onChange={(e) => setDraft(e.target.checked)} />
          </label>
          <br />
          <label>
            Summary:
            <input type="text" name="summary" onChange={(e) => setSummary(e.target.value)} />
          </label>
          <br />
          <label>
            Content:
            <textarea name="content" onChange={(e) => setContent(e.target.value)}></textarea>
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}
