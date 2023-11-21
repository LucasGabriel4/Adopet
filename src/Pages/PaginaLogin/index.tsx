import {useEffect} from 'react'
import Logo from '../../../public/imagens/Logo-azul.png'
import Input from '../../componentes/input'
import Button from '../../componentes/Button/Button'
import './PaginaLogin.css'
import useForm from '../../hooks/useForm'
import Erro from '../../componentes/Erro/erro'
import http from '../../axios/http'
import { useContextStorage } from '../../hooks/useContext'
import { useNavigate } from 'react-router-dom'
import AdopetLayout from '../../componentes/adopetLayout/adopetLayout'


function PaginaLogin() {
  const email = useForm('email')
  const senha = useForm('senha')
  const {setLogado} = useContextStorage()
  const  navegacao = useNavigate()

  const fazerLoginUsuario:React.FormEventHandler<HTMLFormElement> = async (event) => {
       event.preventDefault()
       let dadosLogin

       if(email.validate() && senha.validate()){
          dadosLogin = {
             email: email.value,
             password: senha.value
          }

          try{
             const response = await http.post('/login', dadosLogin)
             setLogado(true)
             localStorage.setItem('Token', response.data.accessToken)
             navegacao('/home')
          }
          catch(erro){
              console.log(erro)
          }
       }
   }





  
  return (
    <AdopetLayout background='white' patasImagem={true}>
        <div className='login'>
            <img className='login-logo' src={Logo} alt='Logo da Adopet'/>
            <p className='login-texto'>Já tem conta? Faça seu login:</p>
            
            <form className='login-form' onSubmit={fazerLoginUsuario}>
               <Input 
               type='email' 
               label='Email' 
               placeholder='Digite seu melhor email' 
               width='100%' 
               height='2.5rem'
               onChange={email.onChange}
               onBlur={email.onBlur}
               value={email.value} 
               erro={email.erro}
               />
              <Erro erro={email.erro}/>

               <Input 
               type='password' 
               label='Senha' 
               placeholder='Crie uma senha' 
               width='22.625rem' 
               height='2.5rem'
               onChange={senha.onChange}
               onBlur={senha.onBlur}
               value={senha.value}
               erro={senha.erro}
               />
              <Erro erro={senha.erro}/>

              <a href='' className='login-recuperar_senha'>Esqueci minha senha.</a>
              <Button width='10.875rem' height='2.5rem'>Entrar</Button>
            </form>
            
        </div>
    </AdopetLayout>
  )
}

export default PaginaLogin
