import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Rectangle from './components/rectangle';
import NaviBar from './components/naviBar';
import Landing from './components/landing';
import Card from './components/card';
import Services from './pages/services';
import Rounded from './components/rounded';
import About from './pages/about';

function App() {
  return (
    
    <div>
      <Rectangle></Rectangle>
      {/* <hr></hr> */}
      {/* <NaviBar></NaviBar> */}
      <Landing></Landing>
      <hr></hr>
      {/* <Card heading = 'Rework' content ='your business Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi a magnam ducimus cupiditate dolorem beatae repellendus nobis ea, expedita exercitationem.'></Card> */}
      <Services></Services>
      <hr></hr>
      {/* <Rounded></Rounded> */}
      <About></About>
    </div>
    

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
