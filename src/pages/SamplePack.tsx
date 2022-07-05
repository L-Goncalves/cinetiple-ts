import useWindowDimensions from '../config/getDimensions';
import background from '../public/fundo.png'
import { useAuthStore } from '../StoresContext';
import { ProductDetailsAndPayment } from '../components/Product';



export default function SamplePack(): any{
  const { width } = useWindowDimensions();

  const authStore = useAuthStore()

  // authStore.login();

  console.log(width)
  
  console.log(authStore.currentUser.usuario);
  return (
    <>
    
    <div  style={{backgroundImage: `url('${background}')`}}/>
    
    <div className="home-image" style={ {overflowX: 'hidden', height:'100%', ...styles.image}}>

     <ProductDetailsAndPayment/>
     
        
    </div>

    
    </>
  );
}


const styles = {
  image:{
    backgroundImage: `url('${background}'),linear-gradient(45deg, #0F0F1A 0.00%, #131326 100.00%)`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    width:'100%'
  },

  container:{
    marginTop: 100,
    maxWidth: '50%'
  }
  

}


// .topnav a {

//   color: 
  
//   padding: 14px 16px;
//   text-decoration: none;
//   font-size: 17px;
// }

/* Change the color of links on hover */
// .topnav a:hover {
//   background-color: #ddd;
//   color: black;
// }

// /* Add a color to the active/current link */
// .topnav a.active {
//   background-color: #04AA6D;
//   color: white;
// }