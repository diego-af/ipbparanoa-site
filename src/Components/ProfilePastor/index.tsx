import * as S from './ProfilePastor.styles'
import pastor from '../../assets/pastor.png'

const ProfilePastor = () => {
  return (
    <>
      <S.TitlePastor>Pastor</S.TitlePastor>
   <S.Profile>
   <S.Image src={pastor} />
   
   <S.PastorInfo>
    <S.PastorName>Carlos Eduardo</S.PastorName>
    <S.PastorDescription>Pastor há cerca de 10 anos, Carlos Eduardo é casado com Érika Sikeira e eles tem duas filhas. </S.PastorDescription>
   </S.PastorInfo>
      </S.Profile>
      </>
 )
}

export default ProfilePastor
