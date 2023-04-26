import { useNavigate, useLocation } from 'react-router-dom';
import CancelButton from './CancelButton';
import FormTextarea from './FormTextarea';

export default function PostForm() {

  const navigate = useNavigate();
  const dataToForm = useLocation();
  const currentData = dataToForm.state ? dataToForm.state : {id: 0, content: ''};
  const submit = async (e) => {
    e.preventDefault();
    const body = {id: currentData.id, content: e.target[0].value};
    const result = await fetch('http://localhost:7777/posts', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
      }, 
      body: JSON.stringify(body)
    })
    
    if (result.status !== 204) {
      throw new Error(result.statusText);
    }

    e.target.reset();
    navigate('/');
  }

  return (
    <form className="post-form" onSubmit={submit}>
      <FormTextarea {...currentData} />
      <div className='controls form-controls'>
        <button className='btn form__btn'>Записать</button>
        <CancelButton />
      </div>
    </form>
  )
}