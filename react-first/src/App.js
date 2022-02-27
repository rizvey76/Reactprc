
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import * as myApp from'./components/DateTime';
import Card from './components/Card';
import Props from './components/Props';
import Img from './images/pro.jpg';
import JsonCard from './components/JsonCard';
import Hooks from './components/Hooks';
import Thook from './components/Thook';
import BgHooks from './components/BgHooks';
import FormJs from './components/FormJs';
import FormHooks from './components/FormHooks';
import ReactForm from './components/ReactForm';
function App() {
  return (
    <>
    <div className='container-fluid'>
      <Navbar/>
      <Card/>
      <Carousel/> 
      <Props imgsrc={Img}/>
      <JsonCard/>
      <div className=''>
      <p>{myApp.maxCore}</p>  
      <p>{myApp.dateTime()}</p>  
      <p>{myApp.comName()}</p>  
      </div>
     <Hooks/>
     <Thook/>
     <BgHooks/>
     <FormJs/>
     <FormHooks/>
     <ReactForm/>
      </div>
      

    
    
    </>
  
  );
}

export default App;
