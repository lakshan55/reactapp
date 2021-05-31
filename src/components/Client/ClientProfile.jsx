import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import {
  Grid,
  Typography,
  Button,
  Divider,
  TextField,
} from "@material-ui/core";
import FormikInput from "../CommonComponet/FormikInput";
import logoJPG from "../../img/logoJPG.JPG";
function ClientProfile(props) {
  const { classes } = props;

  const initialValuesProfile = {
    name: "",
    customerID: "",
    phoneNumber: "",
    emailAddress: "",
  };

  const validationSchemaProfile = Yup.object({
    name: Yup.string().required("Required"),
    customerID: Yup.string().required("Required"),
    phoneNumber: Yup.string().required("Required"),
    emailAddress: Yup.string().required("Required"),
  });
  const onSubmitProfile = (values, submitProps) => {
    submitProps.setSubmitting(false);
    submitProps.resetForm();
  };

  const initialValuesSettings = {
    kkkk: "",
    hhhh: "",
  };

  const validationSchemaSettings = Yup.object({
    kkkk: Yup.string().required("Required"),
    hhhh: Yup.string().required("Required"),
  });
  const onSubmitSettings = (values, submitProps) => {
    submitProps.setSubmitting(false);
    submitProps.resetForm();
  };

  return (
    <div
      style={{
        height: " 100%",
        //width: "100%",
        display: "flex",
        alignItems: "flex-start",
        marginLeft: "25rem",
        //  justifyContent: "center",
      }}
    >
      <Grid container spacing={4}>
        <Grid style={{ marginTop: "2rem" }} item xs={12}>
          <img className={classes.logoImage} src={logoJPG} alt="logo-image" />
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Grid
            style={{ marginBottom: "2rem" }}
            container
            item
            xs={12}
            alignItems="center"
          >
            <Typography variant="h5" className={classes.dialogTitle}>
              Profile
            </Typography>
            <Divider
              variant="middle"
              style={{ width: "50%", height: "2px", backgroundColor: "#000" }}
            />
          </Grid>

          <Formik
            initialValues={initialValuesProfile}
            validationSchema={validationSchemaProfile}
            onSubmit={onSubmitProfile}
          >
            {(formik) => {
              return (
                <Form noValidate>
                  <Grid container spacing={1}>
                    <Grid item xs={10}>
                      <Typography className={classes.textFieldLabel}>
                        Name
                      </Typography>
                      <FormikInput
                        classes={classes}
                        error={formik.errors.name && formik.touched.name}
                        name="name"
                        type="text"
                        placeholder="Name"
                      />
                    </Grid>
                    <Grid item xs={10}>
                      <Typography className={classes.textFieldLabel}>
                        Customer ID
                      </Typography>
                      <FormikInput
                        classes={classes}
                        error={
                          formik.errors.customerID && formik.touched.customerID
                        }
                        name="customerID"
                        placeholder="Customer ID"
                        type="text"
                      />
                    </Grid>
                    <Grid item xs={10}>
                      <Typography className={classes.textFieldLabel}>
                        Phone Number
                      </Typography>
                      <FormikInput
                        classes={classes}
                        error={
                          formik.errors.phoneNumber &&
                          formik.touched.phoneNumber
                        }
                        name="phoneNumber"
                        placeholder="Phone Number"
                        type="text"
                      />
                    </Grid>
                    <Grid item xs={10}>
                      <Typography className={classes.textFieldLabel}>
                        Email Address
                      </Typography>
                      <FormikInput
                        classes={classes}
                        error={
                          formik.errors.emailAddress &&
                          formik.touched.emailAddress
                        }
                        name="emailAddress"
                        placeholder="Email Address"
                        type="text"
                      />
                    </Grid>

                    <Grid item xs={10}>
                      <Button
                        style={{ width: "100%", marginTop: "2rem" }}
                        className={classes.mainBtn}
                        type="submit"
                      >
                        Save
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              );
            }}
          </Formik>
        </Grid>
        <Grid item xs={12} md={6} lg={6}>
          <Grid
            style={{ marginBottom: "2rem" }}
            container
            item
            xs={12}
            alignItems="center"
          >
            <Typography variant="h5" className={classes.dialogTitle}>
              Privacy Settings
            </Typography>
            <Divider
              variant="middle"
              style={{ width: "40%", height: "2px", backgroundColor: "#000" }}
            />
          </Grid>
          <Formik
            initialValues={initialValuesSettings}
            validationSchema={validationSchemaSettings}
            onSubmit={onSubmitSettings}
          >
            {(formik) => {
              return (
                <Form noValidate>
                  <Grid container spacing={1}>
                    <Grid item xs={10}>
                      <Typography className={classes.textFieldLabel}>
                        Test
                      </Typography>
                      <FormikInput
                        classes={classes}
                        error={formik.errors.kkkk && formik.touched.kkkk}
                        name="kkkk"
                        type="text"
                        placeholder="test"
                      />
                    </Grid>
                    <Grid item xs={10}>
                      <Typography className={classes.textFieldLabel}>
                        Test 2
                      </Typography>
                      <FormikInput
                        classes={classes}
                        error={formik.errors.hhhh && formik.touched.hhhh}
                        name="hhhh"
                        placeholder="test2"
                        type="text"
                      />
                    </Grid>

                    <Grid item xs={10}>
                      <Button
                        style={{ width: "100%", marginTop: "2rem" }}
                        className={classes.mainBtn}
                        type="submit"
                      >
                        Save
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              );
            }}
          </Formik>
        </Grid>
      </Grid>
    </div>
  );
}

export default ClientProfile;
