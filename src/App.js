import { BrowserRouter,Routes,Route } from 'react-router-dom';
import logo from './logo.svg';

import LandingPage from './pages/LandingPage/LandingPage';

import RegisterPage from './pages/registerPage/RegisterPage';
import LoginPage from './pages/LoginPage/LoginPage';
import HomePage from './pages/HomePage/HomePage';


function App() {
  return (
    <div>
      <BrowserRouter>
     
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={ <LoginPage/>} />
        <Route path='/register' element={<RegisterPage/>}/>
        <Route path='/home' element={<HomePage/>}/>
       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
