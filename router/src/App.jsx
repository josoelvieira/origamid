import { Routes,Route } from 'react-router-dom'
import './App.css'
import Home from './Components/Home';
import Sobre from './Components/Sobre';
import Error from './Components/Error';
import Header from './Components/Header';
import Login from './Components/Login';
import Produto from './Components/Produtos/Produto';


function App() {

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/produto/:id/*" element={<Produto/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
    </div>
  )
}

export default App
