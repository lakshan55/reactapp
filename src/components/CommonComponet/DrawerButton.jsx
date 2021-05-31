import React from "react";
import { Link } from "react-router-dom";
import { Typography } from "@material-ui/core";

function DrawerButton(props) {
  const { classes, linkPath, drawerButtonName } = props;
  return (
    <Link
      to={linkPath}
      style={{
        textDecoration: "none",
        color: "#000",
      }}
    >
      <div className={classes.drawerButton}>
        <div className={classes.drawerButtonLine}></div>
        <div
          style={{
            width: 195,
          }}
        >
          <Typography className={classes.drawerButtonText}>
            {drawerButtonName}
          </Typography>
        </div>
      </div>
    </Link>
  );
}

export default DrawerButton;
