import Home from './Home';
import Contact from './Contact';
import About from './About';
import Service from './Service';
import{Routes,Route} from "react-router-dom";
import './App.css';
import Navbar from './Navbar';

function App() {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/service' element={<Service/>}/>
      </Routes>
    </>
  );
}

export default App;
