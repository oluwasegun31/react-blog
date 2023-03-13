import { Routes, Route } from 'react-router-dom';
import './App.css';
import BlogDetails from './component/BlogDetails';
import CreateBlog from './component/Create';
import Error404 from './component/Error404';
import Home from './component/Home';
import Navbar from './component/Navbar';

function App() {
  return (
    <Routes>
      <Route path = '/'
      element ={
        <div>
          <Navbar />
          <Home />
        </div>
      }
      />
      <Route path = '/create'
      element ={
        <div>
          <Navbar />
          <CreateBlog />
        </div>
      }
      />

      <Route path = '/blogs/:id'
      element ={
        <div>
          <Navbar />
          <BlogDetails />
        </div>
      }
      />

      <Route path = '*'
      element ={
        <div>
          <Navbar />
          <Error404 />
        </div>
      }
      />
    </Routes>
  );
}

export default App;
