import React, { useEffect, useState } from 'react'
import Forma_01 from '../../../public/imagens/Forma 1.png'
import Forma_02 from '../../../public/imagens/Forma 2.png'
import Forma_03 from '../../../public/imagens/Forma_3.png'
import Perfil from '../../../public/imagens/perfil.png'
import Header from '../Header/Header'
import IconeUsuario from '../../../public/imagens/Usuário.png'
import PatasImagem from '../../../public/imagens/Patas.png'
import {Link, useLocation} from 'react-router-dom'
import './adopetLayout.css'

interface BgLayoutProps {
    children: React.ReactNode,
    background?: string,
    iconeUsuario?: boolean,
    iconePerfil?: boolean,
    patasImagem?: boolean
}

function AdopetLayout({children, background, iconeUsuario = false, iconePerfil = false, patasImagem = false}: BgLayoutProps) {

   const [mobile , setMobile] = useState(false)
   const [tablet, setTablet] = useState(false)
   const location = useLocation()

  useEffect(() => {

    function verificaDispositivo(){
      const mobile = matchMedia('(max-width: 759px)')
      const tablet = matchMedia('(max-width: 980px)')
      setMobile(mobile.matches)
      setTablet(tablet.matches)
    }
    verificaDispositivo()
     window.addEventListener('resize', verificaDispositivo)
  }, [mobile, tablet])

  
  return (
    <section className='adopet-layout' style={{backgroundColor: background}}>
       <img src={Forma_01} className='adopet-layout-figure_1'/>  
       <img 
       src={Forma_02} 
       className={`adopet-layout-figure_2 
       ${mobile && location.pathname === '/'? 'active' : ''} 
       ${tablet && location.pathname === '/Home' ? 'hidden' : ''}`}/>
       {mobile && (location.pathname === '/Login' || location.pathname === '/Cadastrar') ? 
          <img src={Forma_03} className='absolute top-[70%] ' />
          : 
          ''
       }
      
       <Header/>
       {iconeUsuario && 
           <Link to='/Perfil' className='adopet-layout-icone_usuario'>
              <img src={IconeUsuario} alt='Icone Usuário'/>
           </Link>  
       }
       {iconePerfil && 
          <div className='adopet-layout-icone_perfil'>
              <img src={Perfil} className='adopet-layout-icone-perfil_img'/>
          </div>
       }

       {patasImagem && 
            <figure 
            style={{backgroundImage: `url(${PatasImagem})`}} 
            className='adopet-layout-patas_imagem'/>
       }

           
          
      {children}
    </section>
  )
}

export default AdopetLayout
