import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PaginaInicial from '../Pages/PaginaInicial'
import PaginaLogin from '../Pages/PaginaLogin'
import PaginaCadastro from '../Pages/PaginaCadastro'
import PaginaHome from '../Pages/PaginaHome'
import PaginaMensagem from '../Pages/PaginaMensagem'
import PaginaPerfil from '../Pages/PaginaPerfil'
import RotaPrivada from './RotaPrivada/RotaPrivada'
import { ContextProvider } from '../hooks/useContext'

function Rotas() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route path='/' element={<PaginaInicial />} />
          <Route path='/Login' element={<PaginaLogin />} />
          <Route path='/Cadastrar' element={<PaginaCadastro />} />

          <Route path='/Home' element={<PaginaHome />}/>
          <Route path='/Mensagem' element={<PaginaMensagem />}/>
          <Route path='/Perfil' element={ <PaginaPerfil />}/>
        </Routes>
      </ContextProvider>

    </BrowserRouter>
  )
}

export default Rotas
