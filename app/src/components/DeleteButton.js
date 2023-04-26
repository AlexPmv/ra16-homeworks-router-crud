import { useNavigate } from 'react-router-dom';

export default function DeleteButton (props) {

  const navigate = useNavigate();

  const deletePost = async (e) => {
      e.preventDefault();
      const result = await fetch(`http://localhost:7777/posts/${props.id}`, {
        method: 'DELETE', 
      })
      
      if (result.status !== 204) {
        throw new Error(result.statusText);
      }
  
      navigate('/');
  }

  return (
    <button className='btn delete-post-btn' onClick={deletePost}>Удалить</button>
  )
}