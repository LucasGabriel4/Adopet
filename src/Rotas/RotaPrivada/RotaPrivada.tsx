import React from 'react'
import { useContextStorage } from '../../hooks/useContext'
import { Navigate } from 'react-router-dom'

function RotaPrivada({children}: {children: React.ReactNode}) {
  const {logado} = useContextStorage()
  
  console.log(logado)
  if(logado === true){
    return children
    
  }else if (logado === false){
    return <Navigate to={'/login'}/>
    
  }else{
    return <></>
    
  }
}

export default RotaPrivada
