import React from "react";
import Camera from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import { Grid, Typography, Button, Dialog, Slide } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function UploadDocument(props) {
  const {
    classes,
    uploadDocumentDialogState,
    setUploadDocumentDialogState,
    uploadFile,
    handleProfilePicDialogOpen,
  } = props;

  const fileInputRef = React.createRef();

  const [imageFile, setImageFile] = React.useState(null);
  const handleUploadDocumentDialogClose = () => {
    setUploadDocumentDialogState(false);
  };

  const fileSelecterHandler = (event) => {
    setImageFile(event.target.files[0]);
  };

  let inputFile = "";
  const selectImage = () => {
    console.log(inputFile);
    inputFile.click();
  };

  return (
    <Dialog
      classes={{ paper: classes.rootDialog }}
      maxWidth="sm"
      open={uploadDocumentDialogState}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleUploadDocumentDialogClose}
      aria-labelledby="alert-dialog-slide-title"
      aria-describedby="alert-dialog-slide-description"
      scroll="body"
    >
      <div style={{ padding: "5rem 4rem 5rem 4rem", borderRadius: "2rem" }}>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h4" className={classes.dialogTitle}>
              Document Upload
            </Typography>
          </Grid>
          <Grid style={{ marginTop: "2rem" }} item xs={12}>
            <Typography className={classes.textFieldLabel}>
              Select from divice
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <input
              hidden={true}
              ref={(input) => {
                // assigns a reference so we can trigger it later
                inputFile = input;
              }}
              type="file"
              onChange={fileSelecterHandler}
            />
            <AddIcon
              className={classes.selectFileAddIcon}
              onClick={selectImage}
            />
          </Grid>
          <Grid container item xs={12} justify="center">
            <Button
              onClick={uploadFile}
              style={{ width: "100%", marginTop: "2rem" }}
              className={classes.mainBtn}
            >
              Upload
            </Button>
          </Grid>
          <Grid container item xs={12} justify="center">
            <Button
              onClick={handleProfilePicDialogOpen}
              style={{ width: "100%", marginTop: "2rem" }}
              className={classes.whiteBtn}
            >
              Live Picture
            </Button>
          </Grid>
        </Grid>
      </div>
    </Dialog>
  );
}

export default UploadDocument;
