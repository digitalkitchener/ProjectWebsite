import { useState, useEffect } from 'react'
import axios from 'axios'
import { Auth } from 'aws-amplify'

function Admin() {
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
  const [errorMsg, setErrorMsg] = useState('');


  const validateDate = (dateString) => {
    const pattern = /^\d{4}-\d{2}-\d{2}$/;
    if (!pattern.test(dateString)) {
      setErrorMsg('Date should be in format YYYY-MM-DD');
      return false;
    }
    return true;
  };  

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
    event.preventDefault();
  
    const formData = new FormData(event.target);
    const title = formData.get("title");
    const date = formData.get("date");
    const tags = formData
      .get("tags")
      .split(",")
      .map((tag) => tag.trim());
    const draft = formData.get("draft") === "on";
    const content = formData.get("content");
    const summary = formData.get("summary");
  
    if (!validateDate(date)) {
      return;
    }
  
    const data = {
      title,
      date,
      tags,
      draft,
      content,
      summary,
    };
  
    await axios.post("/api/create-blog", data);
    alert("Form submitted");
  };
  
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
        <label style={{ fontWeight: 'bold', paddingBottom: '10px' }}>
          Title:
          <input type="text" name="title" style={{ paddingLeft: '10px' }} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br />
        <label style={{ fontWeight: 'bold', paddingBottom: '10px' }}>
          Description:
          <textarea
            name="description"
            rows={4}
            cols={50}
            style={{ paddingLeft: '10px' }}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </label>
        <br />
        <label style={{ fontWeight: 'bold', paddingBottom: '10px' }}>
          Image source:
          <input type="text" name="imgSrc" style={{ paddingLeft: '10px' }} onChange={(e) => setImgSrc(e.target.value)} />
        </label>
        <br />
        <label style={{ fontWeight: 'bold', paddingBottom: '10px' }}>
          Link (Has to link to an existing blog post):
          <input type="text" name="href" style={{ paddingLeft: '10px' }} onChange={(e) => setHref(e.target.value)} />
        </label>
        <br />
        <button
          type="submit"
          style={{
            backgroundColor: '#01796f',
            color: '#FFFFFF',
            borderRadius: '20px',
            padding: '10px 20px',
            border: 'none',
            cursor: 'pointer',
            marginTop: '10px',
          }}
        >
          Submit
        </button>
      </form>
    </div>
    <div style={{ width: '48%' }}>
  <h2>Create new blog post</h2>
  <form onSubmit={handleSubmitBlog}>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <label style={{ fontWeight: 'bold' }}>
        Title:
        <input type="text" name="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      </label>
      <label style={{ fontWeight: 'bold' }}>
  Date:
  <input type="text" name="date" value={date} onChange={(e) => setDate(e.target.value)} />
</label>
{errorMsg && <div style={{ color: 'red' }}>{errorMsg}</div>}
      <label style={{ fontWeight: 'bold' }}>
        Tags:
        <input type="text" name="tags" value={tags} onChange={(e) => setTags(e.target.value)} />
      </label>
      <label style={{ fontWeight: 'bold' }}>
        Draft:
        <input type="checkbox" name="draft" checked={draft} onChange={(e) => setDraft(e.target.checked)} />
      </label>
      <label style={{ fontWeight: 'bold' }}>
        Summary:
        <input type="text" name="summary" value={summary} onChange={(e) => setSummary(e.target.value)} />
      </label>
      <label style={{ fontWeight: 'bold' }}>
        Content:
        <textarea name="content"             rows={4}
            cols={50} value={content} onChange={(e) => setContent(e.target.value)}></textarea>
      </label>
      <button
        type="submit"
        style={{
          backgroundColor: '#01796f',
          color: '#FFFFFF',
          borderRadius: '20px',
          padding: '10px 20px',
          border: 'none',
          cursor: 'pointer',
          width: '100px'
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
