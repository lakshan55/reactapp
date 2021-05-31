import React from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import { Grid, Typography, Button, Dialog, Slide } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function LivePicture(props) {
  const { classes, profiePicDialogState, setProfiePicDialogState } = props;

  const handleProfilePicDialogClose = () => {
    setProfiePicDialogState(false);
  };
  const [image, setImage] = React.useState(null);
  const handleTakePhoto = (dataUri) => {
    // Do stuff with the photo...
    setImage(dataUri);
    // console.log(dataUri);
  };
  function handleCameraStop() {
    console.log("handleCameraStop");
  }
  return (
    <Dialog
      classes={{ paper: classes.rootDialog }}
      maxWidth="md"
      open={profiePicDialogState}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleProfilePicDialogClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      scroll="body"
    >
      <div className={classes.divDialog}>
        <Grid container>
          <Grid container item xs={12} justify="center">
            <Typography variant="h4" className={classes.dialogTitle}>
              Take a Photo
            </Typography>
          </Grid>
          <Grid container item xs={12} justify="center">
            <Camera
              style={{ width: "20rem", height: "20rem" }}
              onTakePhoto={(dataUri) => {
                handleTakePhoto(dataUri);
              }}
              onCameraStop={() => {
                handleCameraStop();
              }}
              isFullscreen={false}
            />
          </Grid>
          <Grid
            container
            style={{ height: "20rem", width: "20rem" }}
            item
            xs={12}
            justify="center"
          >
            {image && (
              <img
                style={{ height: "20rem", width: "20rem" }}
                src={image}
                alt="image"
              />
            )}
          </Grid>
        </Grid>

        <Grid container item xs={12} justify="flex-end">
          <Button
            onClick={handleProfilePicDialogClose}
            style={{ width: "20rem", marginTop: "2rem" }}
            className={classes.mainBtn}
          >
            Submit
          </Button>
        </Grid>
      </div>
    </Dialog>
  );
}

export default LivePicture;
