
import React, { ReactElement } from 'react';
import useWindowDimensions from '../config/getDimensions';
import background from '../public/fundo.png'
import { Typography } from '@mui/material';
import { AuthStoreImpl } from '../stores/authStore';

import { useAuthStore } from '../StoresContext';
import { NavbarWithSidebar } from '../components/NavHeader';
import { LatestNews } from '../components/LatestNews';
interface Props {
  authStore: AuthStoreImpl;
}


function Home(): any{
  const { height, width } = useWindowDimensions();
  const openModal = true
  const authStore = useAuthStore()

  // authStore.login();

  console.log(width)
  
  console.log(authStore.currentUser.usuario);
  return (
    <>
    
    <div style={{backgroundImage: `url('${background}')`}}/>
    
    <div className="home-image" style={ (width < 686? {height:'auto', ...styles.image} : { height: '-webkit-fill-available',  ...styles.image })  }>
     <NavbarWithSidebar/>
      <div style={styles.container}>
        <Typography style={{fontSize: '75px', color: '#CCCCCC', marginLeft: 130, fontFamily: 'Ubuntu', lineHeight: '57px', letterSpacing: '0px', fontWeight: 800}}>
        O site favorito dos DJs e Produtores Musicais!
        </Typography>


        
      </div>
   

      <div style={styles.container}>
      <Typography style={{fontSize: '40px', color: '#E6E6E6', marginLeft: 130,  fontFamily: 'Ubuntu', lineHeight: '50px', fontWeight: 400}}>
      Só aqui você fica por dentro das maiores <br/>tendências do mundo do Audio Design e Produção musical!
      </Typography>
      </div>
      <LatestNews/>
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

export default Home;



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