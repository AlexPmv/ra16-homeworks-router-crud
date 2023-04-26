import { useNavigate } from 'react-router-dom';
import PostForm from './PostForm'

export default function EditButton (props) {

  const navigate = useNavigate();

  const editPost = () => {
    navigate('/posts/new', {state: {...props}})

    return (
      <PostForm {...props} />
    )
  }

  return (
    <button className='btn edit-post-btn' onClick={editPost}>Изменить</button>
  )
}