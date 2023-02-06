import styled from "styled-components";
import especial from './../assets/4.png';
import bg from './../assets/1.png';
import afilado from './../assets/magnetic knive.jpg';

const Price = () => {
    return (
        <ContainAll>
        <h1 className="h1">Precios</h1>
        <Contain>
            <div className="card">
                <div className="content">
                    <div className="imgBx">
                        <img src={especial} alt="" />
                    </div>
                    <div className="contentBx">
                        <h3>Cualquier afilado de cuchillo: </h3>
                        <br /><span>2,50€/Unidad</span>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="content">
                    <div className="imgBx">
                        <img src={afilado} alt="" />
                    </div>
                    <div className="contentBx">
                        <h3>Para un servicio especial, o especifico: </h3>
                        <br /><span>Bajo Presupuesto</span>
                    </div>
                </div>
            </div>
        </Contain>
        </ContainAll>
    );
}
const ContainAll = styled.section`
height:100vh;
display: flex;
justify-content: center;
align-items: center;
flex-flow: column nowrap;
gap:150px;
margin:auto;
&::before{
    content:'';
    position:absolute;
    top:0;
    left:0;
    height:100%;
    width:100%;
    background: linear-gradient(#a71616,#db7878);
    clip-path:circle(30% at right 70%);
}
&::after{
    content:'';
    position:absolute;
    top:0;
    left:0;
    height:100%;
    width:100%;
    background: linear-gradient(#f00,#db7878);
    clip-path:circle(20% at 10% 10%);
}
.h1{
    font-size: 50px;
    color:white;
    text-shadow: 3px 3px 6px #fff;
}
`;
const Contain = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
margin: 0 10px 0 90px;
gap:15px;
position:relative;
z-index:1;
.card{
    position:relative; 
    width:800px;
    height:400px;
    background:rgba(255, 255, 255, 0.05);
    margin:20px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.2);
    border-radius: 15px;
    display:flex;
    justify-content: center;
    align-items:center;
    backdrop-filter:blur(10px);
    .content{
        width:90%;
        position:relative; 
        display:flex;
        justify-content: center;
        align-items:center;
        gap:20px;
        .imgBx{
            max-width:350px;
            img{
            border-radius:15px;
            }
        }
        .contentBx{
        h3{
            color: beige;
            text-transform:uppercase;
            letter-spacing:2px;
            font-weight:bold;
            font-size:18px;
        }
        span{
            color: #a71616;
            text-transform:capitalize;
            font-size:25px;
            background:bisque;
            border-radius:25px;
            padding:10px;
            box-shadow: 0 4px 35px bisque;
        }
        }
    }
}
`;
export default Price;