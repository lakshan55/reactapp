import React from "react";
import { Route, Switch } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Drawer, CssBaseline } from "@material-ui/core";

import SingUp from "./SingUp";
import PhoneVerification from "./PhoneVerification/PhoneVerification";
import IdVerification from "./IdVerification/IdVerification";
import DrawerButton from "../CommonComponet/DrawerButton";
import backgroundImage from "../../img/backgroundImage.png";

const useStyles = makeStyles((theme) => ({
  landingContainer: {
    backgroundImage: `url(${backgroundImage})`,
    width: "100%",
    height: " 100%",
    backgroundSize: "cover",
    backgroundPosition: "center ",
    position: "absolute",
    top: "0px",
    right: "0px",
    background: "#21282a",
    overflow: "auto",
    flexGrow: 1,
    //  display: "flex",
    // flexDirection: "column",
  },
}));

function StartDrawer(props) {
  const classesBackgrond = useStyles();
  const { classes } = props;
  return (
    <div className={classesBackgrond.landingContainer}>
      <CssBaseline />
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <Grid container spacing={0} style={{ marginTop: "8rem" }}>
          <Grid container item xs={12} justify="center">
            <DrawerButton
              classes={classes}
              drawerButtonName={"Sing In"}
              linkPath={"/singin"}
            />
          </Grid>
          <Grid container item xs={12} justify="center">
            <DrawerButton
              classes={classes}
              drawerButtonName={" Sing Up"}
              linkPath={"/start/singup"}
            />
          </Grid>
          <Grid container item xs={12} justify="center">
            <DrawerButton
              classes={classes}
              drawerButtonName={"Phone Verification"}
              linkPath={"/start/phoneVerification"}
            />
          </Grid>
          <Grid container item xs={12} justify="center">
            <DrawerButton
              classes={classes}
              drawerButtonName={"ID Verification"}
              linkPath={"/start/idVerification"}
            />
          </Grid>
        </Grid>
      </Drawer>
      <main className={classes.content}>
        <Switch>
          <Route
            //  exact
            path="/start/singup"
            render={(props) => <SingUp {...props} classes={classes} />}
          />
          <Route
            //  exact
            path="/start/phoneVerification"
            render={(props) => (
              <PhoneVerification {...props} classes={classes} />
            )}
          />
          <Route
            //  exact
            path="/start/idVerification"
            render={(props) => <IdVerification {...props} classes={classes} />}
          />
        </Switch>
      </main>
    </div>
  );
}

export default StartDrawer;
