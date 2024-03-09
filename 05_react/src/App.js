import './App.css';
import {Route , Routes} from 'react-router-dom'; 
import NotFound from './component/NotFound';
import Labs from './component/Labs';
import About from './component/About';
import Support from './component/Support';
import Home from './component/Home';
import {Link,NavLink} from 'react-router-dom';
import MainHeader from './component/MainHeader';

function App() {
  return (
    <div className='App'>
      <nav>
        <ul className='flex flex-row justify-items-center	justify-center	'>
          <li className='m-2'>
            <NavLink to="/">Home</NavLink>
          </li>
          <li className='m-2'>
          <NavLink to="/about">About</NavLink>
          </li>
          <li className='m-2'>
          <NavLink to="/labs">Labs</NavLink>
          </li>
          <li className='m-2'>
          <NavLink to="/support">Support</NavLink>
          </li>

        </ul>
      </nav>


      <Routes>
        <Route path="/" element={<div><MainHeader/></div>}>
        <Route index element = {<Home/>}/>
        <Route path="/support" element={<div><Support/></div>} />
        <Route path="/about" element={<div><About/></div>} />
        <Route path="/labs" element={<div><Labs/></div>} />
        <Route path="*" element={<div><NotFound/></div>} />
        </Route>

      </Routes>
    </div>
  );
}

export default App;
