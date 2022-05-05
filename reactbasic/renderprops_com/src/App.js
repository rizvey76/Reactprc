import './App.css';
import ClickCounter from './components/CilckCounter';
import HoverCounter from './components/HoverCounter';
import Counter from './components/Counter';
function App() {
  return (
    <>
    <Counter>
      {(counter,incrementCount)=>(<ClickCounter count={counter} incrementCount={incrementCount}/>)}
    </Counter>


    <Counter>
      {(counter,incrementCount)=>(<HoverCounter count={counter} incrementCount={incrementCount}/>)}
    </Counter>
    </>
 );
}

export default App;

