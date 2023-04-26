import { useState } from "react"

export default function FormTextarea (props) {

  const [text, setText] = useState(props.content);

  return (
    <textarea className='form__textarea'
    value={text}
    onChange={(e) => setText(e.target.value)}
    rows="7" cols="40" required></textarea>
  )
}