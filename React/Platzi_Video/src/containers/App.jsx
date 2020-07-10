import React, {useState, useEffect} from 'react'; {/* useState puedo manejar los estados y con UseEffects hago las transmisiones, puedo hacer peticiones una api
o algun evento que se trasmita a nuestros componentes  escuchar algun cambioque se realice en ellos*/}
import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carrusell from '../components/Carrusell';
import CarrusellItem from '../components/CarrusellItem';
import Footer from '../components/Footer';
import '../assets/style/App.scss';

const App =() => {
  const [videos, setVideos] = useState([]); /*recibe elementos para inicializar,c omo string, boolean, number, objeto u arreglo*/
  
  useEffect(() => {
    fetch('http://localhost:3000/initalState')
    .then(response => response.json()) /* se debe conbertit en un elemtnoq ue se pueda opcuopar en la aplicacion, por eso se pasa a .json*/
    .then(data => setVideos(data)); /* se hace otro llamado, permite pasar la info que tenemos a la funncion setVideos y este transmite la info*/
  }, []); /* USEEFFECT RECIBE OTRO PARAMETRO EL QUE SE ENCARGA DE ESCUCHAR ALGUN CAMBIO, SI NO LE COLOCAMOS UN ARRAY VACIO, ESTE HARIA UN LOOPS INFITITO*/
 
  console.log(videos);    
 
  return(
    <div className= "App">
        <Header />
        <Search />
        <Categories title="Mi Lista">    {/* pasamos por categoria categoria, luego como carrusel esta bajo categoria se damos 
                            una etiqueta, que es carrrusel, y carrusllItem es el ultimo item */ }
         <Carrusell>
         <CarrusellItem/> {/* como son varios item lo dejamos asi para poder ocuparlos*/}
         <CarrusellItem/>
         <CarrusellItem/>
         <CarrusellItem/>
          </Carrusell>
        </Categories>
       
        <Categories title="Tendencias">   
         <Carrusell>
         <CarrusellItem/> 
         <CarrusellItem/>
         <CarrusellItem/> 
         <CarrusellItem/> 
          </Carrusell>
        </Categories>

        <Categories title="Originales">   
         <Carrusell>
         <CarrusellItem/> 
         <CarrusellItem/> 
         <CarrusellItem/> 
         <CarrusellItem/> 
          </Carrusell>
        </Categories>

        <Footer/>

    </div>
  )
}
export default App;