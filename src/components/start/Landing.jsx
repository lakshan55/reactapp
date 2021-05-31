import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { Grid, Typography, Button } from "@material-ui/core";

import backgroundImage from "../../img/backgroundwithlogo.png";
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
    background: "#21282a",
    overflow: "auto",
  },
}));

function Landing(props) {
  const classesBackgrond = useStyles();
  const { classes } = props;
  return (
    <div className={classesBackgrond.landingContainer}>
      <Grid
        container
        spacing={2}
        style={{
          width: "100%",
          height: " 100%",
        }}
      >
        <Grid
          alignContent="center"
          style={{ marginLeft: "10rem" }}
          container
          item
          xs={12}
        >
          <Grid item xs={12}>
            <img className={classes.logoImage} src={logoJPG} alt="logo-image" />
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.welcomeText}>Welcome</Typography>
          </Grid>
          <Grid item xs={12}>
            {" "}
            <Typography className={classes.secondTextLanding}>
              It's faster! It's Improved
            </Typography>
          </Grid>
          <Grid item xs={12}>
            {" "}
            <Link
              exact
              to="/singin"
              style={{
                textDecoration: "none",
              }}
            >
              <Button
                style={{
                  width: "10rem",
                  marginTop: "2rem",
                  textDecoration: "none",
                }}
                className={classes.mainBtn}
              >
                Sing In
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Landing;
