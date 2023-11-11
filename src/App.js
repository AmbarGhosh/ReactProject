import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sign_up from './Component/Auth/Signup/Sign_up';
import Login from './Component/Auth/Login/Login';
import Otp from './Component/Auth/Otp/Otp';
import Sidebar from './Component/User/common/Sidebar';
import Account_Verify from './Component/Auth/AccountVerify/Account_Verify';

function App() {
  return (
    <div className="App">
      <Router>

      <Routes>
       <Route path='/' element={<Sign_up/>}/>
       <Route path='/login' element={<Login/>}/>
       <Route path='/otp' element={<Otp/>}/>
       <Route path='/accountverify' element={<Account_Verify/>}/>
       </Routes>
       </Router>
    </div>
  );
}

export default App;
