import React, { ReactElement, useEffect, useState } from "react";
import useWindowDimensions from "../config/getDimensions";
import { MenuAppBar } from "../components/NavbarElements";
import background from "../public/fundo.png";
import { TextField, Typography } from "@mui/material";
import { AuthStoreImpl } from "../stores/authStore";
import { useParams } from "react-router-dom";

import { useAuthStore } from "../StoresContext";
import { observer } from "mobx-react";
interface Props {
  authStore: AuthStoreImpl;
}

export const EditProfile = observer( () => {
  const authStore = useAuthStore();
  const { height, width } = useWindowDimensions();
  const [user, setUser] = useState({user: null})

  useEffect(() => {
    authStore.findUser(id);
  }, [authStore.auth]);
    console.log(authStore.viewingUser.online)

  const openModal = true;
 
    const { id }: any = useParams();
   
  let isSameUser = authStore.viewingUser.usuario == authStore.currentUser.usuario




  let imgSrc;
  if(authStore.viewingUser && authStore.viewingUser.foto){
      if(authStore.viewingUser.foto.startsWith('i')){
          imgSrc = `data:image/png;base64,${authStore.viewingUser.foto}`
      } 
      else{
          imgSrc = `data:image/jpg;base64,${authStore.viewingUser.foto}`
      }
  }
  return (
    <>
      <div style={{ backgroundImage: `url('${background}')` }} />

      <div
        className="home-image"
        style={
          width < 686
            ? { height: "auto", ...styles.image }
            : { height: "-webkit-fill-available", ...styles.image }
        }
      >
        <header className="teste">
          <MenuAppBar />
        </header>


        <div
          style={{  textAlign: 'center' }}
        >
          <div style={styles.container}>
          
          </div>

          <div style={styles.container}>
          {authStore.viewingUser.foto && (
          <>
          <div  style={{width: '100%'}}>
            <div style={{alignItems: 'center'}}>
            <img width='200px' className='test2' height='200px' style={{...styles.photo}} src={imgSrc}/>
            { (authStore.viewingUser.online && !isSameUser) && ( <div style={{color: '#16e000', fontWeight: '400'}}>Online</div>)}
           
              
          </div>
            </div>
          
              
          <Typography style={styles.user}>
            {`${authStore.viewingUser.usuario}`}
          </Typography>
          </>
          )}
      

          </div>
            {(authStore.authStatus && isSameUser)? (
            <>
              <div style={styles.container}>
            <div style={styles.inputRow}>
              <div style={styles.inputContainer}>
              <label style={{paddingLeft: '2rem', color: 'white'}}>
              Email
            </label>
            <input
              type={"text"}
              className="search"
              onFocus={() => {}}
              onChange={(e) => {}}
              value={`${authStore.currentUser.email}`}
              placeholder={`${"value"}`}
              style={styles.input}
            />
              </div>
            

              <div style={styles.inputContainer}>
              <label style={{paddingLeft: '2rem', color: 'white'}}>
              Nome Completo
            </label>
            <input
              type={"text"}
              className="search"
              onFocus={() => {}}
              onChange={(e) => {}}
              value={`${authStore.currentUser.usuario}`}
              placeholder={`${"value"}`}
              style={styles.input}
            />
              </div>
            
            </div>

            <div style={styles.inputRow}>
              <div style={styles.inputContainer}>
              <label style={{paddingLeft: '2rem', color: 'white'}}>
              Senha
            </label>
            <input
              type={"password"}
              className="search"
              onFocus={() => {}}
              onChange={(e) => {}}
              value={`${authStore.currentUser.email}`}
              placeholder={`${"value"}`}
              style={styles.input}
            />
              </div>

              <div style={styles.inputContainer}>
              <label style={{paddingLeft: '2rem', color: 'white'}}>
              Confirmar Nova Senha
            </label>
            <input
              type={"password"}
              className="search"
              onFocus={() => {}}
              onChange={(e) => {}}
              value={`${authStore.currentUser.email}`}
              placeholder={`${"value"}`}
              style={styles.input}
            />
              </div>
         
            
            </div> 
          
          </div>
            </>): (<></>)}
        
        </div>

        <div
          style={{ display: "flex", flexDirection: "row", padding: "0 6rem" }}
        >
          {/* <div style={styles.container}>
            <input
              type={"text"}
              className="search"
              onFocus={() => {}}
              onChange={(e) => {}}
              value={"value"}
              placeholder={`${"value"}`}
              style={styles.input}
            />

            <input
              type={"text"}
              className="search"
              onFocus={() => {}}
              onChange={(e) => {}}
              value={"value"}
              placeholder={`${"value"}`}
              style={styles.input}
            />
            <input
              type={"text"}
              className="search"
              onFocus={() => {}}
              onChange={(e) => {}}
              value={"value"}
              placeholder={`${"value"}`}
              style={styles.input}
            />
          </div>

          <div style={styles.container}>
            <input
              type={"text"}
              className="search"
              onFocus={() => {}}
              onChange={(e) => {}}
              value={"value"}
              placeholder={`${"value"}`}
              style={styles.input}
            />

            <input
              type={"text"}
              className="search"
              onFocus={() => {}}
              onChange={(e) => {}}
              value={"value"}
              placeholder={`${"value"}`}
              style={styles.input}
            />
            <input
              type={"text"}
              className="search"
              onFocus={() => {}}
              onChange={(e) => {}}
              value={"value"}
              placeholder={`${"value"}`}
              style={styles.input}
            />
          </div> */}

          {/* <div style={styles.container}>
            <input
              type={"text"}
              className="search"
              onFocus={() => {}}
              onChange={(e) => {}}
              value={"value"}
              placeholder={`${"value"}`}
              style={styles.input}
            />
          </div> */}
        </div>
      </div>
    </>
  );
})

const styles = {
  image: {
    backgroundImage: `url('${background}'),linear-gradient(45deg, #0F0F1A 0.00%, #131326 100.00%)`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
  },

  container: {
    display: "flex",
    flexDirection: "column" as "column",
    justifyContent: "space-between",
    margin: 'auto',
    width: '65%',
    // border: '3px solid green',
    padding: '10px'
  },

  input: {
    background:
      "linear-gradient(45deg,rgba(255, 255, 255, 0.1) 0.02%, rgba(255, 255, 255, 0.1) 100%)",
    height: 30,
    opacity: 1,
    borderRadius: 5,
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    marginRight: 200,
    width: 400,
    margin: '1rem 2rem',
    border: "0px",
    backdropFilter: "blur(25px)",
    fontFamily: "Roboto",
    padding: "5px",
    color: "#CCC",
  },
  inputPlaceholder: {
    background:
      "linear-gradient(45deg,rgba(255, 255, 255, 0.15) 0.02%, rgba(255, 255, 255, 0.15) 100%)",
    height: 30,
    opacity: 1,
    backdropFilter: "blur(25px)",
    borderRadius: "4px",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
    marginRight: 200,
    padding: "5px",
    fontWeight: "normal",
    fontFamily: "Roboto",
    border: "0px solid red",
    color: "rgba(204, 204, 204, 1)",
  },
  photo:{
    border: '4px solid #DB4129',
    borderRadius: '100px',
    margin: 'auto',
    
    
},
// online:{
//   position: 'absolute' as 'absolute', 

//   marginLeft: '30%',
//   marginBottom: '30%',
//   // border: '3px solid green',

//   borderRadius: '100px',
//   backgroundColor: 'green',
//   width: 5,
//   height: 5,
// },
user:{
  fontSize: '2rem', 
  color: '#CCCCCC', 
  fontFamily: 'Ubuntu', 
  lineHeight: '57px', 
  letterSpacing: '0px', 
  fontWeight: 800
},

inputRow:{
  display: "flex",
    flexDirection: "row" as "row",
    justifyContent: "space-between",
    margin: 'auto',
    width: '80%',

    padding: '10px'
},
inputContainer:{
  display: "flex",
  flexDirection: "column" as "column",
  textAlign: 'left' as 'left'
},
online: {
  width: "12.2px",
  height: "11px",
  backgroundColor: "red",
  fontSize: "8px",
  marginBottom: '20px',
  marginRight: "8px",
  borderRadius: "1000px",
  position: "absolute" as "absolute",
},

};

export default EditProfile;

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
