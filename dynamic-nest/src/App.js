
import { Route } from 'react-router-dom';
import './App.css';
import Home from './Home';
import User from './User';
import Users from './Users';
import {Routes,NavLink} from 'react-router-dom';

function App() {
  const users = [
    { id: '1', fullName: 'Robin Wieruch' },
    { id: '2', fullName: 'Sarah Finnley' },
    { id: '3', fullName: 'Sarah Loren' },
  ];

  return (
    <>
    <nav>
    <NavLink to="/">home</NavLink>
    <NavLink to="users">users</NavLink>
    </nav>

      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='users' element={<Users users={users}/>}>
              <Route path=':userId' element={<User/>}/>
          </Route>  
      </Routes>
    </>
  );
}

export default App;
