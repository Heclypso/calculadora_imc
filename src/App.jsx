// 1. Importação 
// 2. Código do componente
import { useState } from "react";

import Perfil from "./components/Perfil";
import ReposList from "./components/ReposList";

function App() {
 const [nomeUsuario, setNomeUsuario ] = useState('');

 return (
  <>
  <input type="text" placeholder="Digite um nome de usuario do GitHub" onBlur={(e) => setNomeUsuario(e.target.value)} />
  {nomeUsuario.length > 4 && (
    <>
    <Perfil nomeUsuario={nomeUsuario}/>
    <ReposList nomeUsuario={nomeUsuario}/>
    </>
  )} 
  </>

 )
}

export default App

