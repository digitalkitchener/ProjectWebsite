import { useState, useEffect } from 'react'
import axios from 'axios'
import { Auth } from 'aws-amplify'

import dynamic from 'next/dynamic'

const JoditEditor = dynamic(() => import('jodit-react'), { ssr: false })

import ReactDOM from 'react-dom'
import { useRef, useMemo } from 'react'
// import JoditEditor from 'jodit-react';      //try doing lazy loading
import HTMLReactParser from 'html-react-parser'

function Admin() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState('')
  const [date, setDate] = useState('')
  const [tags, setTags] = useState('')
  const [draft, setDraft] = useState(false)
  const [summary, setSummary] = useState('')
  const [content, setContent] = useState('')
  const [loggedIn, setLoggedIn] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [q1, setQ1] = useState('')
  const [q2, setQ2] = useState('')
  const [q3, setQ3] = useState('')
  const [q4, setQ4] = useState('')
  const [images, setImages] = useState('')

  // const editor = useRef(null)
  // const [newcontent, setNewcontent] = useState('')
  // const config = {}

  const validateDate = (dateString) => {
    const pattern = /^\d{4}-\d{2}-\d{2}$/
    if (!pattern.test(dateString)) {
      setErrorMsg('Date should be in format YYYY-MM-DD')
      return false
    }
    return true
  }

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
    console.log(content)
    const summary = formData.get('summary')
    const q1 = formData
      .get('q1')
      .split('\\n')
      .map((q1s) => q1s.trim())
    const q2 = formData
      .get('q2')
      .split('\\n')
      .map((q2s) => q2s.trim())
    const q3 = formData
      .get('q3')
      .split('\\n')
      .map((q3s) => q3s.trim())
    const q4 = formData
      .get('q4')
      .split('\\n')
      .map((q4s) => q4s.trim())
    const images = formData.get('images').split(' ')

    if (!validateDate(date)) {
      return
    }

    const data = {
      title,
      date,
      tags,
      draft,
      content,
      summary,
      q1,
      q2,
      q3,
      q4,
      images,
    }

    await axios.post('/api/create-blog', data)

    const formattedTitle = title.replace(/\s+/g, '-')
    const href = `/blog/${formattedTitle}`
    // const description = formData.get('newcontent')
    const description = formData.get('summary')
    const data1 = { title, description, imgSrc, href }
    await axios.post('/api/update-data', data1)

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
        <h2 class="mb-3 text-3xl font-bold leading-8 tracking-tight">Create new blog post</h2>
        <form onSubmit={handleSubmitBlog}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <label
              style={{ fontWeight: 'bold' }}
              class="mb-3 text-2xl font-bold leading-8 tracking-tight"
            >
              Title:
              <input
                class="w-full appearance-none rounded-md py-2 pl-10 text-sm leading-6 text-slate-900 placeholder-slate-400 shadow-sm ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </label>
            <label
              style={{ fontWeight: 'bold' }}
              class="mb-3 text-2xl font-bold leading-8 tracking-tight"
            >
              Date:
              <input
                class="w-45 appearance-none rounded-md py-2 pl-10 text-sm leading-6 text-slate-900 placeholder-slate-400 shadow-sm ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="date"
                name="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </label>
            {errorMsg && <div style={{ color: 'red' }}>{errorMsg}</div>}
            <label
              style={{ fontWeight: 'bold' }}
              class="mb-3 text-2xl font-bold leading-8 tracking-tight"
            >
              Tags:
              <input
                class="w-full appearance-none rounded-md py-2 pl-10 text-sm leading-6 text-slate-900 placeholder-slate-400 shadow-sm ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                name="tags"
                value={tags}
                multiple
                onChange={(e) => setTags(e.target.value)}
              />
            </label>
            <label
              style={{ fontWeight: 'bold' }}
              class="mb-3 text-2xl font-bold leading-8 tracking-tight"
            >
              Draft:
              <input
                class="appearance-none rounded-md py-2 pl-10 text-sm leading-6 text-slate-900 placeholder-slate-400 shadow-sm ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="checkbox"
                name="draft"
                checked={draft}
                onChange={(e) => setDraft(e.target.checked)}
              />
            </label>
            <label
              style={{ fontWeight: 'bold' }}
              class="mb-3 text-2xl font-bold leading-8 tracking-tight"
            >
              Summary:
              <input
                class="w-full appearance-none rounded-md py-2 pl-10 text-sm leading-6 text-slate-900 placeholder-slate-400 shadow-sm ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                name="summary"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
              />
            </label>
            <label
              style={{ fontWeight: 'bold' }}
              class="mb-3 text-2xl font-bold leading-8 tracking-tight"
            >
              What we did:
              <textarea
                class="w-full appearance-none rounded-md py-2 pl-10 text-sm leading-6 text-slate-900 placeholder-slate-400 shadow-sm ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="q1"
                rows={4}
                cols={50}
                value={q1}
                onChange={(e) => setQ1(e.target.value)}
              ></textarea>
            </label>
            <label
              style={{ fontWeight: 'bold' }}
              class="mb-3 text-2xl font-bold leading-8 tracking-tight"
            >
              Why we did it:
              <textarea
                class="w-full appearance-none rounded-md py-2 pl-10 text-sm leading-6 text-slate-900 placeholder-slate-400 shadow-sm ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="q2"
                rows={4}
                cols={50}
                value={q2}
                onChange={(e) => setQ2(e.target.value)}
              ></textarea>
            </label>
            <label
              style={{ fontWeight: 'bold' }}
              class="mb-3 text-2xl font-bold leading-8 tracking-tight"
            >
              What tech we used:
              <textarea
                class="w-full appearance-none rounded-md py-2 pl-10 text-sm leading-6 text-slate-900 placeholder-slate-400 shadow-sm ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="q3"
                rows={4}
                cols={50}
                value={q3}
                onChange={(e) => setQ3(e.target.value)}
              ></textarea>
            </label>
            <label
              style={{ fontWeight: 'bold' }}
              class="mb-3 text-2xl font-bold leading-8 tracking-tight"
            >
              What we learned:
              <textarea
                class="w-full appearance-none rounded-md py-2 pl-10 text-sm leading-6 text-slate-900 placeholder-slate-400 shadow-sm ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="q4"
                rows={4}
                cols={50}
                value={q4}
                onChange={(e) => setQ4(e.target.value)}
              ></textarea>
            </label>
            <label
              style={{ fontWeight: 'bold', paddingBottom: '10px' }}
              class="mb-3 text-2xl font-bold leading-8 tracking-tight"
            >
              Images source for blog:
              <input
                class="w-full appearance-none rounded-md py-2 pl-10 text-sm leading-6 text-slate-900 placeholder-slate-400 shadow-sm ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                name="images"
                style={{ paddingLeft: '10px' }}
                onChange={(e) => setImages(e.target.value)}
              />
            </label>
            <label
              style={{ fontWeight: 'bold' }}
              class="mb-3 text-2xl font-bold leading-8 tracking-tight"
            >
              Additional Content:
              <textarea
                class="w-full appearance-none rounded-md py-2 pl-10 text-sm leading-6 text-slate-900 placeholder-slate-400 shadow-sm ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="content"
                rows={4}
                cols={50}
                value={content}
                onChange={(e) => setContent(e.target.value)}
              ></textarea>
            </label>
            <label
              style={{ fontWeight: 'bold', paddingBottom: '10px' }}
              class="mb-3 text-2xl font-bold leading-8 tracking-tight"
            >
              Image source for Thumbnail:
              <input
                class="w-full appearance-none rounded-md py-2 pl-10 text-sm leading-6 text-slate-900 placeholder-slate-400 shadow-sm ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="text"
                name="imgSrc"
                style={{ paddingLeft: '10px' }}
                onChange={(e) => setImgSrc(e.target.value)}
              />
            </label>
            {/* <label  style={{ fontWeight: 'bold' }} class="mb-3 text-2xl font-bold leading-8 tracking-tight">
              JODIT EDITOR
              <JoditEditor
                ref={editor}
                value={newcontent}
                config={config}
                onChange={(NewContent) => setNewcontent(NewContent)}
              />
            </label>
             */}
            <button
              type="submit"
              style={{
                backgroundColor: '#01796f',
                color: '#FFFFFF',
                borderRadius: '20px',
                padding: '10px 20px',
                border: 'none',
                cursor: 'pointer',
                width: '100px',
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Admin
