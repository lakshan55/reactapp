import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import backgroundImage from "../../img/backgroundImage.png";

const useStyles = makeStyles((theme) => ({
  landingContainer: {
    backgroundImage: `url(${backgroundImage})`,
    width: "100%",
    height: " 100%",
    backgroundSize: "cover",
    backgroundPosition: "center ",
    position: "fixed",
    top: "0px",
    right: "0px",
    background: "#21282a",
    overflow: "auto",
    flexGrow: 1,
  },
}));

function NotFound() {
  const classesBackgrond = useStyles();
  return (
    <div className={classesBackgrond.landingContainer}>
      <h1>Page Not Found</h1>
      <p>Sorry, this page does not exist</p>
    </div>
  );
}

export default NotFound;
