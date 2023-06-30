import { Swiper} from 'swiper/react';
import * as S from './Information.styles'
import { slidesPreview } from './constants';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useEffect, useState } from 'react';

const Information = () => {


 const [slidePertView, setSlidePerview] = useState(3)
 

 useEffect(() => {
  const loadPerview = () => {
   if (window.innerWidth > 1200) {
    setSlidePerview(3)
    
   }
   if (window.innerWidth > 920) {
    setSlidePerview(3)
   }
   if (window.innerWidth > 720) {
    setSlidePerview(2)
   }
   if (window.innerWidth < 720) {
    setSlidePerview(1)
   }
  }
  loadPerview()

  window.addEventListener('resize', loadPerview)

  return () => {
   window.removeEventListener('resize', loadPerview)
  }
 }, []);
 return (
  <S.InfoContainer>
   <S.Title>Atividades</S.Title>
   
  
     <Swiper
      
      slidesPerView={slidePertView}
      spaceBetween={20}
      pagination={{ clickable: true }}
      navigation
      
    >
    {slidesPreview.map((item) => (
     <S.SwiperMySlide key={item.id}>
      <S.Image src={item.img} />

      <S.Title>{item.title}</S.Title>
      </S.SwiperMySlide>
      
   
     
    ))}
    
      
    </Swiper>

  </S.InfoContainer>
  
 )
}



export default Information
