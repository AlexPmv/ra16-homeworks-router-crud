import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PostsList from './components/PostsList';
import PostForm from './components/PostForm';
import PostsProvider from './components/PostsProvider';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
      <div className='containter'>
        <PostsProvider>
          <Router>
              <Routes>
                <Route path='/' exact element={<PostsList />} />
                <Route path='/posts/new' element={<PostForm />} />
                <Route path='/posts/:id' element={<Post />} />
                <Route path='*' element={null} />
              </Routes>
            </Router>
        </PostsProvider>
      </div>
    </div>
  );
}

export default App;
