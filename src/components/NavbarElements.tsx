import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Alert, Button, DialogActions, Drawer, List, Modal, TextField } from "@mui/material";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import Search from "./Search";
import AccountMenu from "./AccountMenu";
import Notifications from "./Notifications";
import { AuthStoreImpl } from '../stores/authStore';
import { observer } from "mobx-react";
import { useAuthStore } from "../StoresContext";
import CustomizedDialogs from "./CustomDialog";
import LinearProgress from '@mui/material/LinearProgress';
interface Props {
  authStore: AuthStoreImpl;
}




type Anchor = "left";

export const MenuAppBar = observer(() => {
  
  const authStore = useAuthStore()

  const [state, setState] = React.useState({
    left: true,
    modalopen: false,
    email: '',
    senha: '',
    loading: false,
  });

  const useStyles = makeStyles({
    root: {}, // uma regra de estilo
    drawer: { borderRight: "0" }, // uma regra de estilo aninhada
  });
  const classes = useStyles();

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event &&
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };




  const modalClose = () => {
   
    setState({...state, modalopen: false, loading: false})
  };

  

  const list = (anchor: Anchor) => (
    <Box
      className={"test2"}
      boxShadow={0}
      style={{
        backgroundColor: "transparent",
        borderRight: "0.5px solid #D96221",
      }}
      sx={{
        width: 70,
        background: "linear-gradient(360deg, #09080f 100.00%, #0b0b24 0.00%)",
        height: "140%",
        color: "#FFF",
        fontWeight: "bold",
        overflowX: "hidden",
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, true)}
    >
      <List style={{}}>
        {["Home", "Marketplace", "Blog", "Cursos", "Mais", ""].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <Link to={"/Home"}>
                  {" "}
                  {index === 1 && (
                    <img
                      src={process.env.PUBLIC_URL + "/HomeButtonActive.svg"}
                    />
                  )}
                </Link>
                <Link to={"/Marketplace"}>
                  {" "}
                  {index === 2 && (
                    <img
                      style={{ marginLeft: "10px" }}
                      src={process.env.PUBLIC_URL + "/Marketplace.svg"}
                    />
                  )}
                </Link>
                <Link to={"/Blog"}>
                  {" "}
                  {index === 3 && (
                    <img
                      style={{ marginLeft: "10px" }}
                      src={process.env.PUBLIC_URL + "/Blog.svg"}
                    />
                  )}
                </Link>
                <Link to={"/Cursos"}>
                  {" "}
                  {index === 4 && (
                    <img
                      style={{ marginLeft: "10px" }}
                      src={process.env.PUBLIC_URL + "/Cursos.svg"}
                    />
                  )}
                </Link>
                <Link to={"/Mais"}>
                  {" "}
                  {index === 5 && (
                    <img
                      style={{ marginLeft: "10px" }}
                      src={process.env.PUBLIC_URL + "/Mais.svg"}
                    />
                  )}
                </Link>
              </ListItemIcon>
              <ListItemText color="#FFF" primary={text} />
            </ListItem>
          )
        )}
      </List>
    </Box>
  );

  return (
    <Box boxShadow={0} style={{ borderRight: 0 }} sx={{ flexGrow: 1 }}>
    
      {(["left"] as const).map((anchor) => (
        <div>
          <SwipeableDrawer
            className={""}
            variant="persistent"
            style={{
              backgroundColor: "rgba(0,0,0,0)",
              zIndex: 0,
              pointerEvents: "all",
              borderRight: "1.5px solid #D96221",
              outline: 0,
            }}
            anchor={anchor}
            sx={{ backgroundColor: "transparent", pointerEvents: "none" }}
            open={state.left}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </div>
      ))}
      {/* Appbar */}
      <AppBar
        position="static"
        style={{
          backgroundColor: "transparent",
          backdropFilter: "blur(25px)",
          borderBottom: "1.5px solid #D96221",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ ml: 5 }}
          >
            <MenuIcon
              onClick={() => {
                console.log("click");
                setState({...state, left: true });
              }}
            />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 5 }}>
            <img src={process.env.PUBLIC_URL + "/Logo.svg"} />
          </Typography>
          {authStore.auth ? (
            <div
              style={{
                alignItems: 'center',
                display: "flex",
                flexDirection: "row",
              }}
            >
              <Search />
              <Notifications/>
              <AccountMenu />
            </div>
          ) : (
            <div>
              <div
                style={{ display: "inline" }}
                onClick={() => {
                  console.log('click')
                  setState( { ...state, modalopen: true} )

                  console.log(state.modalopen)
    
                }}
              >
                {`Login`}
              </div>
            </div>
          )}
        </Toolbar>
      </AppBar>
      <CustomizedDialogs open={state.modalopen} onClose={modalClose}>
        <div style={{display: 'flex', flexDirection: 'column', width: '25vw', padding: '2rem 1rem', justifyContent: 'space-between'}}>
        <TextField 
            id="standard-basic"
            label="Email" variant="standard" 
            onChange={(e) => setState({...state, email: e.target.value})}
            type={'email'}
            value={state.email} />
              {/* <input 

                placeholder="email" 
                style={{margin: '1.5rem 0', width: 300, height: 25}} 
                
               
                type={'email'}/>
          */}
      
          <TextField 
            id="standard-basic"
            label="Senha" variant="standard" 
            onChange={(e) => setState({...state, senha: e.target.value})}
            type={'password'}
            value={state.senha} />
          
          
          </div>

          <DialogActions>
          <Button autoFocus onClick={ async () => {
               
                setState({...state, loading: true})
                await authStore.login(state.email, state.senha)
                setTimeout(() => {
                  modalClose()
                }, 7000);
              
          } 
          }>
            Entrar
          </Button>
        </DialogActions>

        {authStore.error.error && <Alert severity="error">{`${authStore.error.error}`}</Alert>}

        { ( state.loading && !authStore.error.error) &&  <LinearProgress color="inherit" style={{backgroundColor: '#D96221'}} />}
      </CustomizedDialogs>
    </Box>
    
  );
})

const styles = {
  BackdropProps: {
    background: "transparent",
  },
};
