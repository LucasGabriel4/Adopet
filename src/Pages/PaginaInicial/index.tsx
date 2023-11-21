import React from 'react'
import Logo from '../../../public/imagens/Logo.png'
import Button from '../../componentes/Button/Button'
import AdopetIlustracao from '../../../public/imagens/Ilustração.png'
import { useNavigate } from 'react-router-dom'
import './PaginaInicial.css'
import AdopetLayout from '../../componentes/adopetLayout/adopetLayout'

function PaginaInicial() {

    const Navigate = useNavigate()
    return (
        <AdopetLayout background='#3772FF'>
            <div className='pagina-inicial'>
                <div className='pagina-inicial-conteudo'>
                    <img src={Logo} className='pagina-inicial-conteudo_logo' />
                    <h2 className='pagina-inicial-conteudo_titulo'>Boas-vindas!</h2>
                    <p className='pagina-inicial-conteudo_texto'>
                        Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!</p>
                    <Button width='22.625rem' height='3rem' shadow='2px 2px 4px 0px #00000040' onClick={() => Navigate('/Login')}>Já tenho conta</Button>
                    <Button width='22.625rem' height='3rem' shadow='2px 2px 4px 0px #00000040' onClick={() => Navigate('/Cadastrar')}>Quero me cadastrar</Button>
                </div>

                <figure
                    style={{ backgroundImage: `url(${AdopetIlustracao})` }}
                    className='pagina-inicial-adopet_imagem' />
            </div>
        </AdopetLayout>
    )
}

export default PaginaInicial
