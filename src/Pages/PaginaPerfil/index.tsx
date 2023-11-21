import React from 'react'
import Input from '../../componentes/input'
import Button from '../../componentes/Button/Button'
import AdopetLayout from '../../componentes/adopetLayout/adopetLayout'
import Perfil from '../../../public/imagens/perfil.png'
import './PaginaPerfil.css'

function PaginaPerfil() {
  return (
    <AdopetLayout background='white' iconePerfil={true}>
        <div className='perfil'>
       
            <h2 className='perfil-texto'>
               Esse é o perfil que aparece para responsáveis ou ONGs que recebem sua mensagem.
            </h2>
            <form className='perfil-form'>
                <h2 className='perfil-form_titulo'>Perfil</h2>
                <label className='perfil-form-foto_label'>
                    Foto
                </label>

                <div className='perfil-foto_usuario'>
                      <img src={Perfil} className='perfil-foto_imagem'/>
                      <label className='perfil-foto_alterarImagem'>
                         Clique na foto para editar
                      </label>
                </div>

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
                label='Cidade' 
                placeholder='São Paulo' 
                width='100%' 
                height='3rem' 
                align='left'
                bgInput='white'
                colorLabel='#3772FF'/>

                <label className='perfil-form-sobre_label'>
                   Sobre
                </label>
                <textarea 
                className='perfil-form-sobre_mensagem' 
                placeholder='Escreva sua mensagem...'></textarea>

                <div className='perfil-form-botao_salvar'>
                <Button width='10.25rem' height='2.5rem'>Salvar</Button>
                </div>
               
            </form>
        </div>
    </AdopetLayout>
  )
}

export default PaginaPerfil
