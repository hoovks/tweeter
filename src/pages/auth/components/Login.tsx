import { ChangeEvent, useState } from "react";
import {
  Button,
  Box,
  Typography,
  InputAdornment,
  TextField,
} from "@mui/material";
import { AccountCircle, Lock } from "@mui/icons-material";
import { Form } from "./Form";
import { InputField } from "./InputField";

export const Login = ({ toggleForm }: any) => {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const passHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value);
  };

  return (
    <Form header="Login" btnText="Sign in">
      <InputField placeholder="Email" value={email} onChange={emailHandler} />
      <InputField
        placeholder="Password"
        type="password"
        value={pass}
        onChange={passHandler}
      />

      <Button
        onClick={() => toggleForm("register")}
        sx={{ fontSize: 12, "&:hover": { bgcolor: "transparent" } }}
      >
        First time here? Sign up!
      </Button>
    </Form>
  );
};
