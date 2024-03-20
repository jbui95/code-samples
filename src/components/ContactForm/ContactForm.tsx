import { Button, Typography } from "@mui/material";
import { Form, Field } from "react-final-form";
import * as EmailValidator from "email-validator";
import {
  ButtonContainer,
  FormContainer,
  TextFieldStyled,
} from "./ContactForm.styles";

export const ContactForm = (): JSX.Element => {
  const onSubmit = (values: any) => {
    console.log(values);
  };
  const onValidate = (values: any) => {
    const errors: any = {};
    if (!values.name) {
      errors.name = "Name is required";
    }
    if (values.email && !EmailValidator.validate(values.email)) {
      errors.email = "Invalid email address";
    }
    return errors;
  };
  return (
    <FormContainer>
      <Form
        onSubmit={onSubmit}
        onValidate={onValidate}
        render={({ handleSubmit, form, pristine, submitting }) => (
          <form onSubmit={handleSubmit}>
            <Typography>Contact Me</Typography>
            <Field name="name">
              {({ input, meta }) => (
                <>
                  <TextFieldStyled required id="name" label="Name" {...input} />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </>
              )}
            </Field>
            <Field name="email">
              {({ input, meta }) => (
                <>
                  <TextFieldStyled
                    required
                    id="email"
                    label="Email"
                    error={
                      (meta.touched && meta.error) ||
                      EmailValidator.validate(input.value)
                    }
                    {...input}
                  />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </>
              )}
            </Field>
            <Field name="message">
              {({ input, meta }) => (
                <>
                  <TextFieldStyled
                    required
                    id="message"
                    label="Message"
                    multiline
                    rows={4}
                    {...input}
                  />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </>
              )}
            </Field>
            <ButtonContainer>
              <Button
                variant="outlined"
                disabled={pristine}
                onClick={form.reset}
              >
                Reset
              </Button>
              <Button
                type="submit"
                variant="contained"
                disabled={pristine || submitting}
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </ButtonContainer>
          </form>
        )}
      />
    </FormContainer>
  );
};
