import { useNavigate } from 'react-router-dom';

export default function CancelButton () {

  const navigate = useNavigate()

  const toPostsList = () => {
    navigate('/')
  }

  return (
    <button className='btn cancel-btn' onClick={toPostsList}>Закрыть</button>
  )
}