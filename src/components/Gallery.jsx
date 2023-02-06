import styled from "styled-components";
import knife from './../assets/4.png';
import knife2 from './../assets/5.png';
import knife3 from './../assets/6.png';
import knife4 from './../assets/7.png';
import knife5 from './../assets/8.png';
import knife6 from './../assets/9.png';
import knife7 from './../assets/10.png';
import knife8 from './../assets/11.png';
import knife9 from './../assets/12.png';
import knife10 from './../assets/13.png';

const Gallery = () => {
    return ( 
         <ContainAll>
         <h1 className="h1">Galeria de fotos</h1>
        <Contain>
           <div class="container-file">
            <div class="container-file-1-3">
               <div class="container-file-small">
                  <img src={knife} alt=""/>
               </div>
               <div class="container-file-small">
                  <img src={knife2} alt=""/>
               </div>
            </div>
            <div class="container-file-2-3">
               <div class="container-file-normal">
                  <img src={knife3} alt=""/>
               </div>
            </div>
         </div>
         <div class="container-file">
            <div class="container-file-2-3">
               <div class="container-file">
                  <div class="container-column-50">
                     <div class="container-file-large">
                        <img src={knife4} alt=""/>
                     </div>
                  </div>
                  <div class="container-column-50">
                     <div class="container-file-small">
                        <img src={knife5} alt=""/>
                     </div>
                     <div class="container-file-small">
                        <img src={knife6} alt=""/>
                     </div>
                  </div>
               </div>
               <div class="container-file-normal">
                  <img src={knife7} alt=""/>
               </div>
            </div>
            <div class="container-file-1-3">
               <div class="container-file-small">
                  <img src={knife8} alt=""/>
               </div>
               <div class="container-file-large">
                  <img src={knife9} alt=""/>
               </div>
               <div class="container-file-small">
                  <img src={knife10} alt=""/>
               </div>
         </div>
         </div>
        </Contain>
        </ContainAll>
     );
}

const ContainAll = styled.section`

display: flex;
justify-content: center;
align-items: center;
flex-flow: column nowrap;
gap:150px;
margin:auto;
.h1{
    margin-top:50px;
    font-size: 50px;
    color:white;
    text-shadow: 3px 3px 6px #fff;
}
`;
const Contain = styled.div`

.container-file img{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.container-column-50{
  width: 50%;
}

.container-file-small, .container-file-normal, .container-file-large{
  padding: .5rem;
}

.container-file-small{
  height: 24rem;
}

.container-file-normal, .container-file-large{
  height: 48rem;
}


.container-file-1-3{
  width: 33.33%;
}

.container-file-2-3{
  width: 66.66%;
}

.container-file{
  display: flex;

}
`;
export default Gallery;