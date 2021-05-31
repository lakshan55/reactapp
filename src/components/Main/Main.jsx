import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import Landing from "../start/Landing";
import SingIn from "../start/SingIn";

import StartDrawer from "../start/StartDrawer";

import ClientDrawer from "../Client/ClientDrawer";
import NotFound from "../start/NotFound";
const drawerWidth = 280;
const colorObject = {
  buttonColor: "#F58C0F",
};
const globalFontSize = {
  size1: "4rem",
  size2: "3rem",
  size3: "2.5rem",
  size4: "2rem",
  size5: "1.5rem",
  size6: "1rem",
  size7: "0.8rem",
  size8: "0.7rem",
};

const useStyles = makeStyles((theme) => ({
  logoImage: {
    width: "8rem",
    height: " 4rem",
  },
  welcomeText: {
    fontSize: globalFontSize.size1,
    fontWeight: "600",
  },
  secondTextLanding: {
    fontSize: globalFontSize.size4,
  },
  normalText: {
    fontSize: globalFontSize.size4,
  },
  mainBtn: {
    backgroundColor: colorObject.buttonColor,
    color: "#fff",
    textTransform: "none",
    padding: "0.1rem 1rem 0.1rem 1rem",
    fontSize: globalFontSize.size5,
    boxShadow: "0px 3px 6px #00000029",
    "&:hover": {
      backgroundColor: "#a8e289",
    },
  },
  whiteBtn: {
    backgroundColor: "#fff",
    color: "#000",
    textTransform: "none",
    padding: "0.1rem 1rem 0.1rem 1rem",
    fontSize: globalFontSize.size5,
    boxShadow: "0px 3px 6px #00000029",
    "&:hover": {
      backgroundColor: "#fff",
    },
  },
  formTextField: {
    backgroundColor: "#fff",
  },
  textFieldLabel: {
    fontSize: globalFontSize.size6,
    fontWeight: "600",
  },
  redColorText: {
    fontSize: globalFontSize.size7,
    color: "#f95335",
  },
  smallText: {
    fontSize: globalFontSize.size7,
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    boxShadow: "0px 3px 6px #00000029",
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    width: "90%",
    height: " 100%",
    //  marginLeft: drawerWidth + 100,
  },
  drawerButton: {
    display: "flex",
    boxShadow: "0px 3px 6px #00000029",
    height: "3.5rem",
    alignItems: "center",
    width: 230,
    cursor: "pointer",
    textAlign: "center",
    marginTop: "1rem",
  },
  drawerButtonLine: {
    width: 5,
    height: "100%",
    backgroundColor: "#EB984E",
  },
  drawerButtonLineActive: {
    width: 5,
    height: "100%",
    backgroundColor: "#D35400",
  },
  drawerButtonText: {
    fontWeight: "550",
  },
  rootDialog: {
    borderRadius: "2rem",
  },
  divDialog: {
    padding: "5rem 2rem 5rem 2rem",
    borderRadius: "2rem",
  },
  dialogTitle: {
    fontWeight: "600",
  },
  phoneResend: {
    fontWeight: "600",
    marginLeft: "0.5rem",
    color: "#f95335",
    opacity: "0.8",
  },
  selectFileAddIcon: {
    fontSize: "5rem",
    opacity: "0.8",
    borderStyle: "solid",
    margin: "2rem 0rem",
    cursor: "pointer",
  },
  drawerAvatar: {
    width: "10rem",
    height: "10rem",
  },
}));

function Main() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => <Landing {...props} classes={classes} />}
        />

        <Route
          exact
          path="/singin"
          render={(props) => <SingIn {...props} classes={classes} />}
        />

        <Route
          path="/start"
          render={(props) => <StartDrawer {...props} classes={classes} />}
        />
        <Route
          path="/client"
          render={(props) => <ClientDrawer {...props} classes={classes} />}
        />

        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Main;
