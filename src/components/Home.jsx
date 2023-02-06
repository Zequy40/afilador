import styled from "styled-components";
import { useState} from 'react'
import portada from './../assets/2.png';

const Home = () => {
    return ( 
        <Contain>
            <h1 className="h1">Afilamos</h1>
            <h2 className="h2">Cuchillos - Tijeras - Hachas de cocina</h2>
        </Contain>
     );
}

const Contain = styled.div`
display:flex;
padding-top:50px;
flex-direction: column;
justify-content:flex-start;
align-items: center;
width:100%;
height:100vh;
max-height: 100vh;
position:relative;
gap:50px;
background-image: url(${portada});
background-position: bottom;
background-repeat: no-repeat;
background-size:cover;
.h1{

    font-size:80px;
    color:#000;
}
.h2{
    font-size:30px;
    color:#a71616;
}
`;
 
export default Home;