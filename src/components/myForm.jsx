import { useState } from 'react'
import { MyInput } from './ui/input/my-input.jsx'
import { MyButton } from './ui/button/myButton.jsx'

export const MyForm = ({ create }) => {
  const [post, setPost] = useState({title:'',body:''})
  const addNewPost = (event) => {
    event.preventDefault()
    const newPost = {
      ...post, id:Date.now()
    }
    create(newPost)
    setPost({...post, title: '', body: ''})
  }
  return (
    <form onSubmit={addNewPost}>
      <MyInput
        value={post.title}
        onChange={(event) => setPost({...post, title:event.target.value})}
        type="text"
        placeholder="Название поста"
      />

      <MyInput
        value={post.body}
        onChange={(event) => setPost({...post, body:event.target.value})}
        type="text"
        placeholder="Описание поста"
      />
      <MyButton>Создать пост</MyButton>
    </form>
  )
}


