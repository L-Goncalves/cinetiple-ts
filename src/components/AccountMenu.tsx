import * as React from "react";
import { makeStyles } from "@mui/styles";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import IconButton from "@mui/material/IconButton";
import { useAuthStore } from "../StoresContext";
import { Link } from "react-router-dom";
export default function AccountMenu() {
  const authStore = useAuthStore();
  console.log(authStore.currentUser.foto);
  const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth(event.target.checked);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const useStyles = makeStyles({
    root: {}, // uma regra de estilo
    drawer: { borderRight: "0" }, // uma regra de estilo aninhada
  });
  const classes = useStyles();
  let imgSrc;
  if (authStore.auth === true) {
    if (authStore.currentUser.foto.startsWith("i")) {
      imgSrc = `data:image/png;base64,${authStore.currentUser.foto}`;
    } else {
      imgSrc = `data:image/jpg;base64,${authStore.currentUser.foto}`;
    }
  }

  const handleLogOut = () => {
    authStore.setAuth(false);
  };

  return (
    <div style={{ paddingRight: "0px" }}>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleMenu}
        color="inherit"
      >
        <img
          width="40px"
          className="test2"
          height="40px"
          style={{ ...styles.photo }}
          src={imgSrc}
        />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={() => {}}>
          <Link to={`/users/${authStore.currentUser.id}`}>Minha Conta</Link>
        </MenuItem>
        <MenuItem onClick={() => handleLogOut()}>Logout</MenuItem>
      </Menu>
    </div>
  );
}

const styles = {
  BackdropProps: {
    background: "transparent",
  },
  photo: {
    border: "1px solid #DB4129",
    borderRadius: "100px",
  },
};

/* */
