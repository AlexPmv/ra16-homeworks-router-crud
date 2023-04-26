import formatDistance from 'date-fns/formatDistance'
import ruLocale from 'date-fns/locale/ru'

export default function PostCard (props) {

  const date = formatDistance(Date.now(), props.created, {locale: ruLocale})

  return (
    <div className="post-card__wrapper">
      <div className='user-info'>
        <img className='user-avatar' src='https://ionicframework.com/docs/img/demos/avatar.svg'></img>
        <span className='user-name'>User</span>
      </div>
      <p className='post-content'>{props.content}</p>
      <span className='post-timestamp'>Опубликовано: {date} назад</span>
    </div>
  )
}