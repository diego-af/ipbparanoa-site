

import * as S from './Footer.styles'
import { FaEnvelope, FaMapMarkerAlt, FaInstagramSquare, FaYoutube, FaBook, FaBookMedical,FaPray } from 'react-icons/fa'
import Liturgia from '../../files/liturgiaa.pdf'
import CFW from '../../files/confissao_de_westminster.pdf'

const Footer = () => {
 return (
  <S.Footer>

   <S.Contact>
    <S.Title>Contate-nos </S.Title>
    <div className='flex '>
     <FaEnvelope color="#ffff" />
     <span>ipbparanoa@gmail.com</span>

    </div>
    <div className='flex '>
     <FaMapMarkerAlt color="#ffff" />
     <span>Quadra 20 conjunto B lote 06</span>

    </div>
    <div className='flex '>
     <FaPray color="#ffff" />
     <a href="https://forms.gle/dAHBjPaHMn5yvhHM7" target='_BLANK' rel="noreferr">Pedidos de oração</a>

    </div>
   </S.Contact>
   <S.Medias>
    <S.Title>Redes Sociais</S.Title>
     <div className='flex '>
     <FaInstagramSquare color="#ffff" />
     <a href="https://www.instagram.com/ipbparanoa/">Instagram </a>

    </div>
    <div className='flex '>

     <FaYoutube color="#ffff" />
     <a href="https://www.youtube.com/@ipparanoa1">Youtube </a>

    </div>
   </S.Medias>
   <S.PdfDownloads>
     <S.Title>Downloads</S.Title>
     <div className='flex '>
     <FaBookMedical color="#ffff" />
     <a href={CFW} download>Confissão de Fé de Westimnster </a>

    </div>
    <div className='flex '>

     <FaBook color="#ffff" />
     <a href={Liturgia} download>Liturgia </a>

    </div>
   </S.PdfDownloads>
   
  </S.Footer>
 )
}

export default Footer
