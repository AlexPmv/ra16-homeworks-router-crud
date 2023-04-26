import { useEffect, useContext } from 'react';
import PostItem from './PostItem';
import NewPostButton from './NewPostButton';
import PostsContext from './PostsContext';
import useFetchData from './useFetchData';

export default function PostsList() {

  const {posts, setPosts} = useContext(PostsContext);
  const [data] = useFetchData('http://localhost:7777/posts');

  useEffect(() => {
    setPosts(data)
  }, [data, setPosts])

  if (posts.length === 0) {
    return (
      <div className='posts__wrapper'>
        <NewPostButton />
      </div>
    )
  }

  return(
    <div className='posts__wrapper'>
      <ul className='posts-list'>
        {posts.map(p => <PostItem {...p} key={p.id}/>)}
      </ul>
      <NewPostButton />
    </div>
  )
}