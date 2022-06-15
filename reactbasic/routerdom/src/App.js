
import './App.css';
import {BrowserRouter,Navigate,Route,Routes} from 'react-router-dom';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Error from './components/Error';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Post from './components/Post';
import Services from './components/Services';
function App() {
  const isLogIn=false;
  return (
    <>
      <BrowserRouter>
         <Navbar/>
         <Routes>
            <Route exact path="/" component={Home}/>
            <Route exact path="/about" component={About}/>
            <Route exact path="/services">
                 <Services number="5"/>
            </Route>
            <Route exact path="/posts/:category/:topic" component={Post}/>
            <Route exact path="/dashboard" component={Dashboard}/>

            <Route exact path="/login">
                 {isLogIn? <Navigate replace to="/dashboard"/> : <Home/>}
            </Route>
            <Route component={Error}/>
         </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
