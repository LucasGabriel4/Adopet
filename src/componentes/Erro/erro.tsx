import React from 'react'
import './erro.css'

interface ErroProps {
    erro: string | null,
}
function Erro({erro}: ErroProps) {
  if(!erro) return null
  return (
    
       <span className='erro'>{erro}</span>
  )
}

export default Erro
