import { useNavigate } from 'react-router-dom';
import PostCard from './PostCard';

export default function PostItem(props) {

  const navigate = useNavigate();

  const toPost = (e) => {
    navigate(`/posts/${e.currentTarget.id}`)
  }

  return (
    <li className='post-item' id={props.id} onClick={toPost}>
      <PostCard {...props} />
    </li>
  )
}