import { TextField, styled, Box } from "@mui/material";

export const FormContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "40%",
  margin: "20px",
  border: "1px solid black",
  borderRadius: 10,
  padding: "20px",
});

export const TextFieldStyled = styled(TextField)({
  width: "100%",
  margin: 20,
  display: "flex",
});

export const ButtonContainer = styled(Box)({
  display: "flex",
  justifyContent: "space-around",
  width: "100%",
  margin: 20,
});
