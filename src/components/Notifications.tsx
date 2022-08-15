import * as React from "react";

import { makeStyles } from "@mui/styles";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import IconButton from "@mui/material/IconButton";
import { textAlign } from "@mui/system";

export default function Notifications() {
  //   const [auth, setAuth] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [notification, setNotificationNumber] = React.useState(10);

  //   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //     setAuth(event.target.checked);
  //   };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const notificationHandler = () => {
    setNotificationNumber(1);
  };

  const useStyles = makeStyles({
    root: {}, // uma regra de estilo
    drawer: { borderRight: "0" }, // uma regra de estilo aninhada
  });
  const classes = useStyles();

  return (
    <div style={{ paddingRight: "25px" }}>
      <div>
        {notification == 0 ? (
          <>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
            >
              <NotificationsIcon fontSize="large" />
            </IconButton>
          </>
        ) : (
          <>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => {
                setNotificationNumber(notification + 1);
              }}
              color="inherit"
            >
              <div style={{ ...styles.notificationCounter }}>
                {`${notification}`}
              </div>
              <NotificationsIcon fontSize="large" />
            </IconButton>
          </>
        )}
      </div>

      {/* <Menu
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
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
      </Menu> */}
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
  notificationCounter: {
    width: "12.2px",
    height: "11px",
    backgroundColor: "red",
    fontSize: "8px",
    marginBottom: "20px",
    marginRight: "8px",
    borderRadius: "1000px",
    position: "absolute" as "absolute",
  },
};

/* */
