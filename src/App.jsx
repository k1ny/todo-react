import { Counter } from './components/counter.jsx'
import { InputEditor } from './components/input-editor.jsx'
import './styles/app.css'
import { PostItem } from './components/post-item.jsx'
import { useRef, useState } from 'react'
import { PostList } from './components/post-list.jsx'
import { MyButton } from './components/ui/button/myButton.jsx'
import { MyInput } from './components/ui/input/my-input.jsx'
import { MyForm } from './components/myForm.jsx'
import { MySelect } from './components/ui/select/mySelect.jsx'



export function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Javascript', body: 'Javascript is the best lang' },
    { id: 2, title: 'Java', body: 'Java is the best lang' },
    { id: 3, title: 'Typescript', body: 'Typescript is the best lang' },
  ])
  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) =>{
    setPosts(posts.filter(p=> p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
  }
  return (
    <div className="App">
      <MyForm create={createPost} setPosts={setPosts} />

      <hr style={{ margin: '15px 0' }} />

      <div>
        <MyInput
          placeholder='Поиск'
          value={searchQuery}
          onChange={(event) => setSearchQuery(event.target.value)}
        />
        <MySelect
          value={selectedSort}
          onChange={sortPosts}
          defaultValue='Сортировка по'
          options={[
            {value: 'title', name: 'По названию'},
            {value: 'body', name: 'По описанию'}
          ]}
        />
      </div>
      {posts.length !== 0 ? (
        <PostList remove={removePost} posts={posts} title={'Список постов 1'} />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
      )}
    </div>
  )
}
