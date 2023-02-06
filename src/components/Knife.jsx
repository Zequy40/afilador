import styled from "styled-components";
import c1 from './../assets/1.svg';
import c2 from './../assets/2.svg';
import c3 from './../assets/3.svg';
import c4 from './../assets/4.svg';


const Price = () => {
    const knife = [{
        id:1,
        title:"Cuchillo Chef",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, iusto obcaecati. Animi, ipsa assumenda quis ratione error unde odit fuga?",
        img:c1
    },
    {
        id:2,
        title:"Cuchillo",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, iusto obcaecati. Animi, ipsa assumenda quis ratione error unde odit fuga?",
        img:c2
    },
    {
        id:3,
        title:"Cuchillo",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, iusto obcaecati. Animi, ipsa assumenda quis ratione error unde odit fuga?",
        img:c3
    },
    {
        id:4,
        title:"Cuchillo",
        content:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, iusto obcaecati. Animi, ipsa assumenda quis ratione error unde odit fuga?",
        img:c4
    }
]
    return (
        <ContainAll>
        <h1 className="h1">Los cuchillos y sus caracteristicas</h1>
        <Contain>
        {knife.map(item => 
            <div className="card" key={item.id}>
                <div className="circle">
                        <div className="textBx">{item.title}</div>
                </div>
                <div className="content">
                    <h2>{item.title}</h2>
                    <p>{item.content}</p>   
                </div>
                <img src={item.img} alt="" className="productImg" />
            </div>
           )}
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
    clip-path:circle(40% at right 80%);
}
&::after{
    content:'';
    position:absolute;
    top:0;
    left:0;
    height:100%;
    width:100%;
    background: linear-gradient(#f00,#db7878);
    clip-path:circle(20% at 30% 10%);
}
.h1{
    font-size: 50px;
    color:white;
    text-shadow: 3px 3px 6px #fff;
    position:relative;
    z-index:1;
}
`;
const Contain = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-flow: row wrap;
margin: 0 10px 0 90px;
gap:35px;
position:relative;
z-index:1;
.card{
    position:relative; 
    width:350px;
    height:350px;
    
    border-radius: 20px;
    display:flex;
    justify-content: center;
    align-items:center;
    transition-delay:0s;
   &:hover{
    width:600px;
    transition-delay:0.5s;
    .circle::before{
        width:100%;
        height:100%;
        background: #a71616;
        border-radius: 20px;
        transition-delay: .5s;
    }
    &:hover .textBx{
            transform: scale(0);
            transition-delay:0s;
        }
   }
    .circle{
        position:absolute; 
        width:100%;
        height:100%;
        top:0;
        left:0;
        display:flex;
        justify-content: center;
        align-items:center;
        &::before{
            content:'';
            position:absolute;
            top:0;
            left:0;
            width:350px;
            height:350px;
            background: #191919;
            border: 8px solid #a71616;
            border-radius: 50%;
            filter:drop-shadow(0 0 10px #a71616) drop-shadow(0 0 60px #a71616);
            transition: 0.5s, background .5s;
            transition-delay: .75s, 1s;
        }
        .textBx{
            position:relative;
            witdh:250px;
            font-size:30px;
            display:flex;
            justify-content:center;
            align-items:center;
            transition:0.5s;
            transition-delay:0.5s;
        }
    
        
    }
    .productImg{
        position:absolute;
        top:50%;
        left:50%;
        transform: translate(-50%, -50%) scale(0) rotate(315deg);
        height:350px;
        transition: 0.5s ease-in-out;
    }
    &:hover .productImg{
        top:25%;
        left:72%;
        transform: translate(-50%, -50%) scale(1) rotate(15deg);
    }

    .content{
        position:absolute;
        padding-left:20px;
        width:50%;
        left:20%;
        padding: 20px 20xp 20px 40px;
        transition:.5s;
        opacity:0;
        visibilty:hidden;
        h2{
            color:white;
            text-transform:capitalize;
            font-size:2.5em;
            line-height:1em;
        }
        p{

        }
    }
    &:hover .content{
        transition-delay: 0.75s;
        opacity:1;
        cicibility:visible;
        left:0;
    }
}
`;
export default Price;