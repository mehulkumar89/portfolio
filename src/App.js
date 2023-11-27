import './App.css';
import {BrowserRouter,Route,Routes} from 'react-router-dom'
import Home from './Home';
import About from './about';
import Education from './education';
import Project from './project';
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/education' element={<Education/>}></Route>
      <Route path='/project' element={<Project/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
