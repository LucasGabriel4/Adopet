import React from 'react'
import Card from './Card'
import { Pets } from '../../Mocks/Pets'
import AdopetLayout from '../../componentes/adopetLayout/adopetLayout'
import './PaginaHome.css'

function PaginaHome() {
  return (
    <AdopetLayout background='white' iconeUsuario={true}>
     
        <div className='pets'>
            <h2 className='pets-texto'>Olá! Veja os amigos disponíveis para adoção!</h2>
            <div className='pets-cards'>
                {Pets.map((pet) => (
                  <Card key={pet.nomePet} {...pet}/>
                ))}
            </div>
           
        </div>
    
      
    </AdopetLayout>
  )
}

export default PaginaHome
