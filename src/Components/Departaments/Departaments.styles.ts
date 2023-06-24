import styled from 'styled-components'
import { SwiperSlide , Swiper} from 'swiper/react';





export const DepartamentsContainer = styled.div`
width: 100%;
padding: 1rem 2rem;

`
export const DepartItemsContent = styled.div`
 background-color: #fafafafa;
 width: 100%;
 height: 10rem;
 padding: 1rem;
 display: flex;
flex-direction: column;
gap:20px;
border-radius: 10px;

span{
 font-size: 1rem;
 color:#121012;
 font-family: "Roboto Condensed";
 font-weight: bold;
 
}

h3{
 font-size: 1.6rem;
 color:#121012;
 font-family: "Roboto Condensed";
 font-weight: 600;
}

`
export const Title = styled.h3`
font-size: 1.6rem;
color:#121012;
font-family: "Roboto Condensed";
font-weight: 600;
margin-bottom: 1.6rem;

`
export const SwiperMySlide = styled(SwiperSlide)`
width: 250px !important;
height: 200px;
margin-right:10px !important;
background-color: red !important;

@media (max-width:576px){
 width: 103%  !important;
 height: 600px;
}

.swiper-slide{
  height: 250px !important;
}
`
export const SwiperContent = styled(Swiper)`

height: 190px;
margin-right:10px !important;
.swiper-slide{
  height: 250px !important;
}

@media (max-width:576px){
 width: 103%  !important;
 
}
`
