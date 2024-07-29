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
import { useMemo } from 'react'
import { PostFilter } from './components/postFilter.jsx'

export function App() {
  const [posts, setPosts] = useState([
    { id: 3, title: 'Typescript', body: 'Typescript is the best lang' },
    { id: 2, title: 'Aava', body: 'lava is the best lang' },
    { id: 1, title: 'Javascript', body: 'Javascript is the best lang' },
  ])
  const [filter, setFilter] = useState({ sort: '', query: '' })
  const sortedPosts = useMemo(() => {
    console.log('dsldks')
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort]),
      )
    } else return posts
  }, [filter.sort, posts])

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query),
    )
  }, [filter.query, sortedPosts])

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id))
  }

  return (
    <div className="App">
      <MyForm create={createPost} />

      <hr style={{ margin: '15px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      {sortedAndSearchedPosts.length !== 0 ? (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title={'Список постов 1'}
        />
      ) : (
        <h1 style={{ textAlign: 'center' }}>Посты не найдены</h1>
      )}
    </div>
  )
}
