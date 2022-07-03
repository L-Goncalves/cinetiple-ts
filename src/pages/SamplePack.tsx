
import React, { ReactElement } from 'react';
import useWindowDimensions from '../config/getDimensions';
import {MenuAppBar}  from '../components/NavbarElements';
import background from '../public/fundo.png'
import { Typography } from '@mui/material';
import { AuthStoreImpl } from '../stores/authStore';

import { useAuthStore } from '../StoresContext';
import { NavbarWithSidebar } from '../components/NavHeader';
import { LatestNews } from '../components/LatestNews';
interface Props {
  authStore: AuthStoreImpl;
}


export default function SamplePack(): any{
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
        
        <img src={process.env.PUBLIC_URL + '/icesamplepack.png'}/>       
      </div>
   

      <div style={styles.container}>
     
      </div>
     
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