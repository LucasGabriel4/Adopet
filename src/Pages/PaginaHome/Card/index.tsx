import React from 'react'
import IconeMensagem from '../../../../public/imagens/ícone mensagem.png'
import './Card.css'

interface CardProps {
    nomePet: string,
    petImagem: string,
    sobre: string,
    localizacao: string
}


function Card({nomePet, petImagem, sobre, localizacao}: CardProps) {
  return (
    <div className='card'>
       <img className='card-imagem' src={petImagem} alt='imagem do animal'/>
       <div>
          <h3 className='card-nome_pet'>{nomePet}</h3>    
          <p className='card-sobre_pet'>{sobre}</p>
          <p className='card-localizacao_pet'>{localizacao}</p>
          <div className='card-contato-responsavel_pet'>
             <img src={IconeMensagem} alt='icone mensagem'/>
             <span className='card-contato-responsavel-pet_texto'>Falar com responsável</span>
          </div>
       </div>
    </div>
  )
}

export default Card
