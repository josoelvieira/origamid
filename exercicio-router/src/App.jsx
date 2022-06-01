import './App.css'
import { Routes, Route} from 'react-router-dom';
import Header from './Components/Header';
import Produtos from './Components/Produtos';
import Contato from './Components/Contato';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='content'>
      <Routes>
        <Route path="/" element={<Produtos/>} />
        <Route path="/contato" element={<Contato/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
      </div>
      <Footer/>
    </div>
  )
}

export default App
