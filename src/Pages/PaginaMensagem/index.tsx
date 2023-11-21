import React from 'react'
import Input from '../../componentes/input'
import Button from '../../componentes/Button/Button'
import AdopetLayout from '../../componentes/adopetLayout/adopetLayout'
import './PaginaMensagem.css'

function PaginaMensagem() {

  return (
    <AdopetLayout background='white' iconeUsuario={true}>
        <div className='mensagem'>
            <h2 className='mensagem-texto'>
                Envie uma mensagem para a pessoa ou instituição que está cuidando do animal:
            </h2>
            <form className='mensagem-form'>
                <Input 
                type='text' 
                label='Nome' 
                placeholder='Insira seu nome completo' 
                width='100%' 
                height='3rem' 
                align='left'
                bgInput='white'
                colorLabel='#3772FF'/>

                <Input 
                type='number' 
                label='Telefone' 
                placeholder='Insira seu telefone e/ou whatsapp' 
                width='100%' 
                height='3rem' 
                align='left'
                bgInput='white'
                colorLabel='#3772FF'/>

               <Input 
                type='text' 
                label='Nome do animal' 
                placeholder='Por qual animal você se interessou?' 
                width='100%' 
                height='3rem' 
                align='left'
                bgInput='white'
                colorLabel='#3772FF'/>

                <label className='mensagem-form_label'>
                   Mensagem
                </label>
                <textarea 
                className='mensagem-form-escreva-sua_mensagem' 
                placeholder='Escreva sua mensagem...'></textarea>

                <div className='mensagem-botao_enviar'>
                <Button width='10.25rem' height='2.5rem'>Enviar</Button>
                </div>
               
            </form>
        </div>
    </AdopetLayout>
  )
}

export default PaginaMensagem
