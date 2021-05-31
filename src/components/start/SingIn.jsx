import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Grid, Typography, Button, TextField } from "@material-ui/core";

import backgroundImage from "../../img/backgroundImage.png";
import logoJPG from "../../img/logoJPG.JPG";

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
  },
}));

function SingIn(props) {
  const classesBackgrond = useStyles();
  const { classes } = props;
  return (
    <div className={classesBackgrond.landingContainer}>
      <div
        style={{
          height: " 100%",
          width: "25rem",
          display: "flex",
          alignItems: "center",
          marginLeft: "10rem",
        }}
      >
        <Grid container item xs={12} spacing={2}>
          <Grid item xs={12}>
            <Typography className={classes.normalText}>Sign In</Typography>
          </Grid>
          <Grid item xs={12}>
            <img className={classes.logoImage} src={logoJPG} alt="logo-image" />
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.textFieldLabel}>ID</Typography>
            <TextField
              fullWidth
              type="text"
              id="client-id"
              variant="outlined"
              placeholder="Enter your ID"
              className={classes.formTextField}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.textFieldLabel}>Password</Typography>
            <TextField
              fullWidth
              type="password"
              id="client-password"
              variant="outlined"
              placeholder="Password"
              className={classes.formTextField}
            />
            <Typography
              style={{ textAlign: "right" }}
              className={classes.redColorText}
            >
              Forgot Password
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Link
              to="/client/profile"
              style={{
                textDecoration: "none",
              }}
            >
              {" "}
              <Button
                style={{ width: "100%", marginTop: "2rem" }}
                className={classes.mainBtn}
              >
                Sing In
              </Button>
            </Link>
          </Grid>
          <Grid container item xs={12} justify="center">
            <Typography
              style={{ marginRight: "1rem" }}
              className={classes.smallText}
            >
              Don't have an account ?
            </Typography>
            <Link
              to="/start/singup"
              style={{
                textDecoration: "none",
              }}
            >
              <Typography className={classes.redColorText}>
                Sing Up here
              </Typography>
            </Link>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default SingIn;
