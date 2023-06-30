
import { FaFemale, FaMale, FaChild } from "react-icons/fa";


import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import * as S from './Departaments.styles'
import { SwiperMySlide } from '../Information/Information.styles';
const Departaments = () => {
const depart = [
 { id: 1, name: "Departamento dos Homens", abrev: "UPH", icon: <FaMale size={ 50} color="#217d1e"/>},
 {id:2, name:"Sociedade Auxiliadora Feminina ", abrev:"SAF", icon:<FaFemale size={ 50} color="#217d1e"/>},
 {id:3, name:"Departamento Infantil", abrev:"Dep. Infantil", icon:<FaChild size={50} color="#217d1e"/>},
 {id:4, name:"Departemnto da Mocidade", abrev:"UMP", icon:<FaMale size={ 50} color="#217d1e"/>},
 {id:5, name:" Adolescentes", abrev:"UCP", icon:<FaMale size={ 50} color="#217d1e"/>},
]


 return (
  <S.DepartamentsContainer>

   <S.Title>Departamentos</S.Title>

   <S.SwiperContent
      
      slidesPerView={1}
      spaceBetween={15}
      pagination={{ clickable: true }}
     
   >
    {depart.map((item) => (

     <SwiperMySlide>
     <S.DepartItemsContent key={item.id}>
      <span>{item.abrev}</span>
      {item.icon}
       <h3>{item.name}</h3>
       
   
      </S.DepartItemsContent>
      </SwiperMySlide>
    ))}
       
   
   </S.SwiperContent>
   
  </S.DepartamentsContainer>
 )
}




export default Departaments
