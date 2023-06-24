import styled from 'styled-components'





export const Footer = styled.div`
width: 100;
height: 30rem;
padding: 1rem 2rem;

display: flex;
gap:1rem;
justify-content: space-evenly;
flex-wrap: wrap;

background-color: #060506;

@media (max-width:576px){
 display: flex;

gap:1rem;
justify-content: flex-start;
}

`
export const Contact = styled.div`
 display: flex;
 flex-direction: column;
 gap:1rem;

 .flex{
  display: flex;
  align-items: center;
  gap: 1rem;

  span{
   color:#ffff;
   font-size: 1rem;
    opacity: 0.7;
  font-family: "Roboto Condensed";
  font-weight: 400;
  }
  a{
     color:#ffff;
    font-size: 1rem;
    opacity: 0.7;
   font-family: "Roboto Condensed";
   font-weight: 400;
   cursor: pointer;
  }


 }
`
export const Medias = styled.div`
 display: flex;
 flex-direction: column;
 gap:1rem;

 .flex{
  display: flex;
  align-items: center;
  gap: 1rem;

  a{
   color:#ffff;
   opacity: 0.7;
   font-size: 1rem;
   font-family: "Roboto Condensed";
   font-weight: 400;
   cursor: pointer;
  }


 }
`
export const PdfDownloads  = styled.div`
display: flex;
 flex-direction: column;
 gap:1rem;

 .flex{
  display: flex;
  align-items: center;
  gap: 1rem;

  a{
   color:#ffff;
   opacity: 0.7;
   font-size: 1rem;
   font-family: "Roboto Condensed";
   font-weight: 400;
   cursor: pointer;
  }


 }
`
export const Title  = styled.h3`
   color:#ffff;
   font-size: 1.4rem;
   font-family: "Roboto Condensed";
   font-weight: 600;
`
