import { useNavigate } from 'react-router-dom';

export default function NewPostButton () {

  const navigate = useNavigate()

  const toCreateForm = () => {
    navigate('/posts/new')
  }

  return (
    <button className='btn new-post-btn' onClick={toCreateForm}>Новый пост</button>
  )
}