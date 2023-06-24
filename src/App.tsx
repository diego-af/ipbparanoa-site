
import * as S from './App.styles'
import Departaments from './Components/Departaments'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Information from './Components/Information'
import ProfilePastor from './Components/ProfilePastor'

function App() {
 

  return (
    <S.Container>
      <Header />
      <Information />
      <Departaments />
      <ProfilePastor/>
      <Footer/>
    </S.Container>
    
  )
}

export default App
