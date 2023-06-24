import * as S from './Header.styles'
import Logo from '../../assets/01_branco.png'

const Header = () => {
 return (
  <S.HeaderContent>
   <S.Logo src={Logo} />
   <S.TitleName>Bem-vindo(a)</S.TitleName>
  </S.HeaderContent>
 )
}


export default Header
