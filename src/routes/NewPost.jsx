import { useNavigate } from 'react-router-dom'
import './NewPost.css'
import { useState } from 'react'
import blogFetch from '../axios/config'

const NewPost = () => {
  const navigate = useNavigate()

  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  const createPost = async (e) =>{ 
    e.preventDefault()

    const post = {title, body, userId:1}

    await blogFetch.post('/posts', {
      body: post,
    })
    // console.log('teste')
  }

  return (
    <div className="new-post">
      <h2>Inserir novo Post</h2>
      <form onSubmit={(e) => createPost(e)}>
        <div className="form-control">
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            name='title'
            placeholder='Digite o titulo'
            id='title'
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <div className="form-control">
          <label htmlFor="body">Conteudo:</label>
          <textarea name='body' id='body' placeholder='Digite o conteudo'
          ></textarea>
          <input 
          type='submit' 
          value='Criar Post' 
          className='btn' 
          onChange={(e) => setBody(e.target.value)}/>
        </div>
      </form>
    </div>

  )
}

export default NewPost