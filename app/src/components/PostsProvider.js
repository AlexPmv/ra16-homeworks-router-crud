import { useState } from 'react';
import PostsContext from './PostsContext';

export default function PostsProvider (props) {
   
  const [posts, setPosts] = useState([]);

  return (
    <PostsContext.Provider value={{posts, setPosts}}>
      {props.children}
    </PostsContext.Provider>
  )
}