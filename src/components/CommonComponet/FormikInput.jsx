import React from "react";
import { Field, ErrorMessage } from "formik";
import { TextField } from "@material-ui/core";
import TextError from "./TextError";
function FormikInput(props) {
  const { classes, placeholder, type, name, error, ...rest } = props;
  return (
    <Field name={name}>
      {({ field, form }) => (
        <>
          <TextField
            fullWidth
            error={error}
            margin="dense"
            variant="outlined"
            placeholder={placeholder}
            id={name}
            {...rest}
            {...field}
            type={type}
            className={classes.formTextField}
          />
          <ErrorMessage component={TextError} name={name} />
        </>
      )}
    </Field>
  );
}

export default FormikInput;
