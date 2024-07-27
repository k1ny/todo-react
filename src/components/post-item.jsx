import { MyButton } from './ui/button/myButton.jsx'

export const PostItem = (props) => {
  return (
    <div>
      <div className="post">
        <div className="post__content">
          <strong>{props.number}. {props.post.title}</strong>
          <div>
            {props.post.body}
          </div>
        </div>
        <MyButton onClick={()=>props.remove(props.post)}>Удалить</MyButton>
      </div>
    </div>
  )
}
