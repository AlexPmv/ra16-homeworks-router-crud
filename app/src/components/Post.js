import { useContext, useEffect } from "react";
import { useMatch } from "react-router-dom";
import PostsContext from "./PostsContext";
import PostCard from "./PostCard";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import CancelButton from "./CancelButton";
import useFetchData from "./useFetchData";

export default function Post () {

  const match = useMatch('/posts/:id');
  const {posts, setPosts} = useContext(PostsContext);
  const [data] = useFetchData('http://localhost:7777/posts');

  useEffect(() => {
    setPosts(data)
  }, [data])

  if (posts.length === 0) {
    return (null)
  }

  const post = posts.find(p => p.id == match.params.id);

  return (
    <div className="post">
      <PostCard {...post} />
      <div className='controls post-controls'>
        <DeleteButton {...post} />
        <EditButton {...post} />
        <CancelButton />
      </div>
    </div>
  );
}