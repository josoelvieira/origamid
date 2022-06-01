import './App.css'
import { Routes, Route, BrowserRouter} from 'react-router';
import Header from './Components/Header';
import Contato from './Components/Contato';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<Produtos/>} />
        <Route path="/contato" element={<Contato/>} />
      </Routes>
    </div>
  )
}

export default App
