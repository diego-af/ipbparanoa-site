import styled from 'styled-components'



export const HeaderContent = styled.div`
width: 100%;
display: flex;
align-items: center;
justify-content: space-between;
background-color: #1a4f13;
height:max-content;
padding: 2rem;

@media (max-width:576px){
 padding: 1rem;
}

`
export const Logo = styled.img`
width: 10rem;

@media (max-width:576px){
 width: 7rem;
}

`
export const TitleName  = styled.h3`
color: #ffff;
font-weight: 700;
opacity: 0.8;
font-size: 1.6rem;
font-family: "Roboto Condensed";
@media (max-width:576px){
 font-size: 1rem;
}
`
