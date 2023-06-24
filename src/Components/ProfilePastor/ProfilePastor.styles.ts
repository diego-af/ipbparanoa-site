import styled from 'styled-components'



export const Profile = styled.div`
 width: 100%;
 display: flex;
 align-items: center;
 gap:0.8rem;
 padding: 1rem 2rem ;
 @media (max-width:576px){
  display: flex;
  flex-direction: column;
  width: 100%;
}

`
export const PastorInfo = styled.div`

 display: flex;
 
 flex-direction: column;
 gap:0.4rem

`
export const Image = styled.img`
width: 20rem;
height: 20rem;
border-radius:20rem;

@media (max-width:576px){
 width: 100%;
 border-radius:2rem;
}
`
export const PastorName = styled.h3`
 font-size: 1.6rem;
color:#121012;
font-family: "Roboto Condensed";
font-weight: bold;

`
export const PastorDescription = styled.p`
 font-size: 1rem;
color:#121012;
font-family: "Roboto Condensed";
font-weight: 600;
max-width: 20rem;
`
export const TitlePastor = styled.h3`
margin-left: 2.5rem;
    font-size: 1.6rem;
    color: #121012;
    font-family: "Roboto Condensed";
    font-weight: 600;
    

`
