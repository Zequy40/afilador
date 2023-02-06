import styled from "styled-components";
import knife from './../assets/5.png';
import map from './../assets/MAP1.jpg';
import machine from './../assets/pexels-luis-quintero-1659749.jpg';
import colle from './../assets/cuchillos.jpg';

const Product = () => {
    const cards = [{
        id:1,
        img:map,
        title:"Nos desplazamos",
        parraf:"Te vamos ahorrar de tiempo ya que afilar cuchillos puede requerir mucho tiempo y esfuerzo. Contratar nuestro servicio de desplazamiento te permite ahorrar tiempo y dedicarlo a otras tareas. Otra razón es que nuestro servicio llega a ti, lo que significa que no tienes que desplazarte para afilar tus cuchillos, lo que conlleva un ahorro ecónomico a tu bolsillo."
    },
    {
        id:2,
        img:knife,
        title:"Afilamos inSitus",
        parraf:"Al afilar los cuchillos in-situs, tenemos el control total sobre el proceso y podemos ajustar el ángulo de afilado según tus preferencias personales. Al hacerlo de esta forma, permite de ver el resultado y saber si están al gusto de cada cliente, con la posibilidad de retocar el cuchillo si no ha quedado al gusto del cliente. "
    },
    {
        id:3,
        img:machine,
        title:"Un servicio Profesional Garantizado",
        parraf:"Afilar cuchillos requiere habilidades especializadas y años de experiencia. Tenemos esa experiencia y los conocimientos necesarios para afilar el cuchillo de la manera más efectiva y precisa. Utilizamos herramientas especializadas y técnicas para asegurarnos de que los cuchillos estén afilados de manera uniforme y precisa. Afilar cuchillos puede ser peligroso si no se tienen las habilidades y herramientas adecuadas. Nuestro servicio proporciona esa solución segura y eficiente"
    }]
    return ( 
        <Contain>
            <div className="contain">
                <h2 className="h2">Afilado profesional de todo tipo de cuchillos</h2>
                <div className="cardsContain">
                {cards.map(({id, img, title, parraf}) => (
                <div className="card" key={id}>
                <div className="div">
                    <img src={img} alt="" className="img" />
                    <div className="parts">
                    <h3 className="h3">{title}</h3>
                    <p className="p">{parraf}</p>
                    </div>
                </div>
                </div>
                ))}
                </div>
            </div>
        </Contain>
     );
}
const Contain = styled.div`
height:100vh;
padding: 40px 0px;
margin-left:90px;
max-width:1200px;
margin:auto;
.h2{
    font-size: 48px;
    line-height:48px;
    margin-bottom:15px;
}
.cardsContain{
width: 100%;
display:flex;
flex-flow: column nowrap;
gap:20px;
height:100%;
padding-bottom: 20px;
}

.card{
    background:linear-gradient(to top right, #a71616 0%, #ff6767 100%);
    padding: 5px;
    border-radius :20px;
    position:relative;
    transition: all .7s ease;
    
}


.div{
    padding:1rem;
    background:#333;
    border-radius: 16px;
    display:flex;
    .parts{
        display:flex;
        flex-flow: column nowrap;
        .h3{
    font-size:25px;
    margin-top: 10px;
    padding: 20px;
    color:#a71616;
    font-weight:bold;
}
.p{
    margin-top: 20px;
    padding: 15px;
    font-size:18px;
    color:#888; 
}
    }
}

.img{
    width:50%;
    border-radius: 16px;
    border:none;
}
`;
export default Product;