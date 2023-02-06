import styled from "styled-components";
import { NavLink } from 'react-router-dom';
import { useState} from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faImages, faEnvelope
, faTag,  faUserGroup, faCutlery } from "@fortawesome/free-solid-svg-icons";
import logo from './../assets/logo solo.png'




const NavBar = () => {
    const [activeId, setActiveId] = useState(1);
    const [list, setList] = useState([{ name: "Inicio", id: 1, icon:"homeSvg", nav:"/" }, { name: "Precios", id: 2, icon:"priceSvg", nav:"precios" }, { name: "Quienes somos", id: 3, icon:"productSvg", nav:"productos" },{ name: "Galería", id: 4, icon:"galerySvg", nav:"galeria" },{ name: "Producto", id: 5, icon:"knifeSvg", nav:"product" },{ name: "Contacto", id: 6, icon:"contactSvg", nav:"contacto" }]);
    const icons = {
        homeSvg: faHome,
        priceSvg: faTag,
        productSvg: faUserGroup,
        galerySvg:faImages,
        contactSvg:faEnvelope,
        knifeSvg:faCutlery

      }
      
      
    function handleClick(id) {
        setActiveId(id);
        
      }
    
    return (
        <Navigation>
            
            <ul>
            <li className="list">
                    
                    <a href="#">
                    <img src={logo} className="iconLogo" />
                        <span className="title">EL AFILADOR</span>
                    </a>
                </li>
            {list.map((item) => (
                <><li key={item.id} className={`list ${item.id === activeId ? 'active' : ''}`}
                    onClick={() => handleClick(item.id)}
                >
                    
                    <NavLink to={item.nav} className="a">
                    <FontAwesomeIcon className="icon" icon={icons[item.icon]} />
                        <span className="title">{item.name}</span>
                    </NavLink>
                </li></>
                ))}
            </ul>
            
        </Navigation>
    );
}


const Navigation = styled.div`
position:fixed;
top:0;
left:0;
height:100vh;
width:70px;
background: #2b343b;
box-shadow:10px 0 0 #a71616;
border-left:10px solid #2b343b;
overflow-x:hidden;
transition: width 0.7s;
z-index:3;
&:hover{
    width:300px;
}
div{
    display:flex;
    flex-direction:column;
    justify-content: flex-end;
    align-items:center;
    span{
        padding:20px 0;
    }
}
h1{
    opacity:0;
    visibility:hidden;
    transition: all 0.3s;
    transition-delay: 0.5s;
    font-size:20px;
}
&:hover h1{
    opacity:1;
    visibility:visible;
}
ul{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    padding-left:5px;
    padding-top:100px;
    
}
.active{
            background:#a71616;
            a::before{
                content:'';
                position:absolute;
                top:-30px;
                right:0;
                width:30px;
                height:30px;
                
                border-radius:50%;
                box-shadow:15px 15px 0 #a71616;
            }
            a::after{
                content:'';
                position:absolute;
                bottom:-30px;
                right:0;
                width:30px;
                height:30px;
                
                border-radius:50%;
                box-shadow:15px -15px 0 #a71616;
            }
        }
.list{
        position:relative;
        list-style:none;
        width:100%;
        border-top-left-radius:20px;
        border-bottom-left-radius:20px;
        .a{

        border-top-left-radius:20px;
        border-bottom-left-radius:20px;
        }
        a{
        position:relative;
        text-decoration:none;
        display:block;
        width:100%;
        display:flex;
        justify-content: flex-start;
        align-items:center;
        color:whitesmoke;
        
        .icon{
            position:relative;
            display:flex;
            justify-content: flex-end;
            align-items:center;
            max-width:70px;
            height: 20px;
            text-align: center;
            padding:0 20px;
        }
        .iconLogo{
            max-width:55px;
        }
        }
        .title{
                position:relative;
                display:flex;
                justify-content: center;
                align-items:flex-end;
                padding-left:10px;
                height:60px;
                line-height:60px;
                white-space: nowrap;
            }
    }
`;

export default NavBar;