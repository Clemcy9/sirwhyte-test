import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import IndexPage from './full_page';
import { BrowserRouter , Route, Routes} from 'react-router-dom';
import Projects from './full_page/projects';

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<IndexPage/>}></Route>
      <Route path='project' element={<Projects/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
