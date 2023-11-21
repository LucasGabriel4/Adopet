import React from 'react'
import Logo from '../../../public/imagens/Logo.png'
import CasaIcone from '../../../public/imagens/Casa.svg'
import MensagemIcone from '../../../public/imagens/Mensagens.svg'
import {Link} from 'react-router-dom'
import './Header.css'

function Header() {
    return (
        <header className='header'>
            <Link to='/'>
              <img src={Logo} alt='Logo da Adopet' className='logo' />
            </Link>
           
            <ul className='nav-header'>
                <li>
                    <Link to='/Home'>
                        <img src={CasaIcone} className='nav-header_home' />
                    </Link>
                </li>
                <li>
                    <Link to='/Mensagem'>
                        <img src={MensagemIcone} className='nav-header-mensagem' />
                    </Link>
                </li>
            </ul>
        </header>
    )
}

export default Header
