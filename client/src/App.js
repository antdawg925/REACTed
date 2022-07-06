import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './views/Main';
import Post from './views/Post';
import ViewOne from './views/ViewOne';

function App() {
  return (
      <Routes>
        <Route path="/" element={ <Main/> }/>
        <Route path="/post" element={ <Post/> }/>
        <Route path="/trade/:id" element={ <ViewOne/> }/>
      </Routes>

  );
}

export default App;
