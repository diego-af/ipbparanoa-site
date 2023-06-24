import styled from 'styled-components'
import { SwiperSlide } from 'swiper/react';




export const InfoContainer = styled.div`
padding: 2rem 2rem;
width: 100%;




`
export const Title = styled.h3`
font-size: 1.6rem;
color:#121012;
font-family: "Roboto Condensed";
font-weight: 600;
margin-bottom: 1.6rem;
`
export const Image = styled.img`
width: 400px;
height: 550px;
object-fit: cover;
@media (max-width:576px){
 width: 100%;
 height: 600px;
}

`
export const InfoTitle = styled.span`
color:#121012;
`
export const SwiperMySlide = styled(SwiperSlide)`
width: 450px !important;
margin-right:10px !important;

@media (max-width:576px){
 width: 103%  !important;
 height: 600px;
}
`
