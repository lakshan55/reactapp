import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Drawer,
  CssBaseline,
  Avatar,
  Typography,
} from "@material-ui/core";

import ClientProfile from "./ClientProfile";
// import PhoneVerification from "./PhoneVerification/PhoneVerification";
// import IdVerification from "./IdVerification/IdVerification";
import DrawerButton from "../CommonComponet/DrawerButton";
import backgroundImage from "../../img/backgroundImage.png";
import avatarProfile from "../../img/avatarProfile.png";

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

function ClientDrawer(props) {
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
        <Grid container spacing={0} style={{ marginTop: "2rem" }}>
          <Grid container item xs={12} justify="center">
            <Avatar
              alt="Remy Sharp"
              src={avatarProfile}
              className={classes.drawerAvatar}
            />
          </Grid>
          <Grid
            style={{ marginTop: "1rem" }}
            container
            item
            xs={12}
            justify="center"
          >
            <Typography variant="h5" className={classes.dialogTitle}>
              Elizabeth Grft
            </Typography>
          </Grid>
          <Grid container item xs={12} justify="center">
            <DrawerButton
              classes={classes}
              drawerButtonName={"Profile"}
              linkPath={"/client/profile"}
            />
          </Grid>
          <Grid container item xs={12} justify="center">
            <DrawerButton
              classes={classes}
              drawerButtonName={"Send"}
              linkPath={"/client/send"}
            />
          </Grid>
          <Grid container item xs={12} justify="center">
            <DrawerButton
              classes={classes}
              drawerButtonName={"Help"}
              linkPath={"/client/help"}
            />
          </Grid>
          <Grid container item xs={12} justify="center">
            <DrawerButton
              classes={classes}
              drawerButtonName={"Customer Support"}
              linkPath={"/client/customersupport"}
            />
          </Grid>
          <Grid container item xs={12} justify="center">
            <DrawerButton
              classes={classes}
              drawerButtonName={"Rate Us"}
              linkPath={"/client/rateus"}
            />
          </Grid>
          <Grid
            style={{ marginTop: "2rem" }}
            container
            item
            xs={12}
            justify="center"
          >
            <Link
              to="/"
              style={{
                color: "#000",
                textDecoration: "none",
              }}
            >
              <Typography className={classes.textFieldLabel}>
                Log Out
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </Drawer>
      <main className={classes.content}>
        <Switch>
          <Route
            //  exact
            path="/client/profile"
            render={(props) => <ClientProfile {...props} classes={classes} />}
          />
          {/* <Route
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
          /> */}
        </Switch>
      </main>
    </div>
  );
}

export default ClientDrawer;
