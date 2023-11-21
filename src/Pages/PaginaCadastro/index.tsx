import React from 'react'
import Input from '../../componentes/input'
import Button from '../../componentes/Button/Button'
import Logo from '../../../public/imagens/Logo-azul.png'
import './PaginaCadastro.css'
import useForm from '../../hooks/useForm'
import Erro from '../../componentes/Erro/erro'
import http from '../../axios/http'
import AdopetLayout from '../../componentes/adopetLayout/adopetLayout'
import { Axios, AxiosError, AxiosResponse } from 'axios'
 




function PaginaCadastro() {
  const email = useForm('email')
  const senha = useForm('senha')
  const nome = useForm('')
  const confirmarSenha = useForm('senha')

  
  const cadastrarNovoUsuario:React.FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault()
    let dados
       if(senha.value != confirmarSenha.value){
            confirmarSenha.setErro('As duas senhas precisam ser iguais!')
            return false
       }

       if(email.validate() && senha.validate() && nome.validate() && confirmarSenha.validate()){
            dados = {
              email: email.value,
              password: senha.value,
            }

           try{
             await http.post('/register', dados)
             alert('cadastrado com sucesso!')
           }
           catch(erro){
              console.log(erro)
           }

        
       }
    }
  

  return (
    <AdopetLayout background='white' patasImagem={true}>
        <div className='cadastro'>
            <img className='cadastro-logo' src={Logo} alt='Logo da Adopet'/>
            <p className='cadastro-texto'>Ainda não tem cadastro?</p>
            <p className='cadastro-texto_2'>
             Então, antes de buscar seu melhor amigo, precisamos de alguns dados:
            </p>
            
            <form className='cadastro-form' onSubmit={cadastrarNovoUsuario}>
               <Input 
               type='text' 
               label='Nome' 
               placeholder='Digite seu nome completo' 
               width='100%' 
               height='2.5rem'
               onChange={nome.onChange}
               onBlur={nome.onBlur}
               value={nome.value}
               />
               <Erro erro={nome.erro}/>

               <Input 
               type='email' 
               label='Email' 
               placeholder='Digite seu melhor email' 
               width='100%' 
               height='2.5rem'
               onChange={email.onChange}
               onBlur={email.onBlur}
               value={email.value}
               />
               <Erro erro={email.erro} />
               
               <Input 
               type='password' 
               label='Senha' 
               placeholder='Crie uma senha' 
               width='22.625rem' 
               height='2.5rem'
               onChange={senha.onChange}
               onBlur={senha.onBlur}
               value={senha.value}
               />
               <Erro erro={senha.erro} />


               <Input 
               type='password' 
               label='Confirma sua senha' 
               placeholder='Repita a senha criada' 
               width='22.625rem' 
               height='2.5rem'
               onChange={confirmarSenha.onChange}
               onBlur={confirmarSenha.onBlur}
               value={confirmarSenha.value}
               />
                 <Erro erro={confirmarSenha.erro}/>
               <Button width='10.875rem' height='2.5rem'>Cadastrar!</Button>
            </form>
            
        </div>
    </AdopetLayout>
  )
}

export default PaginaCadastro
