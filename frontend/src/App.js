
import './App.css';
import Home from './pages/home/Home';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/menu/Menu';
import Products from './pages/products/Products';
import Detail from './pages/detail/Detail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path="/" element={<Menu />}>
            <Route path="register" element={<Register />} />
            <Route path="login" element={<Login />} />
            <Route path='products' element={<Products />} />
            <Route path=':id' element={<Detail />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
