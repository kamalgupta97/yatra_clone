import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MoreIcon from "@material-ui/icons/MoreVert";

import { useHistory } from "react-router-dom";
import Myprofile from "./Myprofile";

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
    position: "relative",
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: "none",
    fontSize: "14px",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  rightTitle: {
    marginLeft: "15px",
    fontSize: "14px",
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
  header: {
    background: "#ffffff",
    boxShadow: " 0px 0px 5px 3px #dddcdc",
    color: "#000000",
    display: "flex",
    alignItems: "center",
  },
  navData: {
    flexGrow: 1,
    width: "100%",
    maxWidth: "1300px",
  },
  icon: {
    textAlign: "center",
    opacity: 0.6,
    margin: "auto 15px",
    cursor: "pointer",
    "&:hover": {
      color: "#CE2A35",
      opacity: 1,
      // borderBottom: "3px solid #CE2A35 ",
    },
    "&$selected": {
      color: "#CE2A35",
      opacity: 1,
      borderBottom: "3px solid #CE2A35 ",
    },
  },

  iconsNav: {
    display: "flex",
    margin: "auto 5vw",
  },

  more: {
    fontSize: "14px",
    padding: "0px 10px",
    "&:hover": {
      color: "#ffffff",
      backgroundColor: "#CE2A35",
      fontSize: "14px",
      borderRadius: "30px",
    },
  },

  buses: {
    color: "#CE2A35",
    opacity: "1.0 !important",
    fontSize: "14px",
    borderBottom: "3px solid #CE2A35 ",
    textAlign: "center",
  },
}));

export default function Navbar2() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: "top", horizontal: "right" }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Typography className={classes.title} variant="h6" noWrap>
          My Account
        </Typography>
      </MenuItem>
      <MenuItem>
        <Typography className={classes.title} variant="h6" noWrap>
          Support
        </Typography>
      </MenuItem>
      <MenuItem>
        <Typography className={classes.title} variant="h6" noWrap>
          Offers
        </Typography>
      </MenuItem>
      <MenuItem>
        <Typography className={classes.title} variant="h6" noWrap>
          Yatra for Business
        </Typography>
      </MenuItem>
    </Menu>
  );

  const history = useHistory();

  const [dropProfile, setDropProfile] = useState(false);

  return (
    <div className={classes.grow}>
      <AppBar className={classes.header}>
        <Toolbar className={classes.navData}>
          <img
            width="88px"
            height="35px"
            style={{ cursor: "pointer" }}
            src="https://cdn.freelogovectors.net/wp-content/uploads/2019/02/yatra_logo.png"
            alt="yatra_logo"
            onClick={() => history.push("/")}
          />

          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Typography
              className={(classes.title, classes.rightTitle)}
              variant="h6"
              noWrap
              style={{ cursor: "default" }}
              onMouseEnter={() => setDropProfile(true)}
            >
              My Account
            </Typography>
            {/* <Badge badgeContent={"new"} color="secondary"> */}
            <Typography
              className={(classes.title, classes.rightTitle)}
              variant="h6"
              noWrap
              style={{ cursor: "pointer" }}
            >
              Support
            </Typography>
            {/* </Badge> */}
            <Typography
              className={(classes.title, classes.rightTitle)}
              variant="h6"
              noWrap
              style={{ cursor: "pointer" }}
            >
              Offers
            </Typography>
            <Typography
              className={(classes.title, classes.rightTitle)}
              variant="h6"
              noWrap
              style={{ cursor: "pointer" }}
            >
              Yatra for Business
            </Typography>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <Typography className={classes.title} variant="h6" noWrap>
                <MoreIcon />
              </Typography>
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}

      {dropProfile && (
        <div
          style={{
            marginTop: "0vh",
            position: "absolute",
            zIndex: 1,
            right: "25%",
            background: "#ffffff",
          }}
          onMouseLeave={() => setDropProfile(false)}
        >
          <Myprofile />
        </div>
      )}
    </div>
  );
}
