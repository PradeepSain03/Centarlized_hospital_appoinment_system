import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './pages/LogIn';
import Appointment from './component/Appointments';
import Book from './component/Book';
import Register from './pages/Register';
import { useSelector } from 'react-redux';
import Spinner from "./component/Spinner"
import ProtectedRoute from './component/ProtectedRoute';
import PublicRoute from './component/PublicRoute';
import "./styles/Book.css";
import Token from './component/Token';

function App() {
  const { loading } = useSelector(state => state.alerts)
  return (
    <>
      <BrowserRouter>
        {loading ? <Spinner /> :
          (
            <Routes>
              <Route path='/' element={  <HomePage /> } />
                <Route path='/appointments' element={<Appointment />}></Route>
                <Route path='/book' element={<Book />}></Route>
                <Route path='/Token' element={<Token />}></Route>
              <Route path='/login' element={  <Login />  } />
              <Route path='/register' element={  <Register />} />
            </Routes>
          )
        }
      </BrowserRouter>
    </>
  );
}

export default App;
