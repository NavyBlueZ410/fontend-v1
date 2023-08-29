import './App.css';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './pages/authen/Login';
import Register from './pages/authen/Register';
import Dashboard from './pages/dashboard/Dashboard';
import ResetPassword from './pages/authen/ResetPassword';
import { ToastContainer} from 'react-toastify';
function App() {
  return (
    <>
        <ToastContainer/>
         <BrowserRouter>
          <Routes>
              <Route path='/' element={<Login />} />
              <Route path='/register' element={<Register />} />
              <Route path='/dashboard' element={<Dashboard />} />
              <Route path='/resetPassword' element={<ResetPassword />} />
          </Routes>
        </BrowserRouter>
    </>
  );
}

export default App;
