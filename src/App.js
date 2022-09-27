import logo from './logo.svg';
import './App.css';
import {BrowserRouter,Routes,Route,Link,} from "react-router-dom";

import Rotas from './routes';
import Sistema from './Pages/Sistema/sistema';
import Home from './Pages/PageHome/home';
import Cadastro from './Pages/Cadastro/cadastroAtual';
import PageInicial from './Pages/PageInicial/login';


function App() {
  return (

    <BrowserRouter>
        <Routes>
          <Route path='/' element={<PageInicial/>}/>
          <Route path="/Home" element={<Home />} />
          <Route path='/cadastro' element={<Cadastro/>} />
          <Route path='/Sistema' element={<Sistema/>}/> 
         
        </Routes>
    </BrowserRouter>


   


  );
}

export default App;
