import './App.css';
import {Route,Routes} from "react-router-dom";
import About from './About';
import Contact from './Contact';
import Error from './Error';
import Name from './Name';
import Nav from './Nav';
function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<About/>}/>
      <Route exact path="/contact" element={<Contact/>}/>
      <Route path="/contact/name" element={<Name/>}/>
      <Route path='*' element={<Error/>}/>
    </Routes>
    {/* <About/>
    <Contact/> */}
   
    </>
  );
}

export default App;
