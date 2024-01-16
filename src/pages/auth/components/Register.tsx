import { useState } from "react";
import { Form } from "./Form";
import { InputField } from "./InputField";
import { Button } from "@mui/material";

export const Register = ({ toggleForm }: any) => {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  function signUp() {
    console.warn(email, pass);
  }

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
  };

  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const passHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPass(e.target.value);
  };

  return (
    <Form header="Register" btnText="Sign up">
      <InputField placeholder="Email" value={email} onChange={emailHandler} />
      <InputField
        placeholder="Password"
        type="password"
        value={pass}
        onChange={passHandler}
      />

      <InputField
        placeholder="Confirm Password"
        type="password"
        value={pass}
        onChange={() => {}}
      />

      <Button
        onClick={() => toggleForm("login")}
        sx={{ fontSize: 12, "&:hover": { bgcolor: "transparent" } }}
      >
        Already have an account? Sign in!
      </Button>
    </Form>
  );
};
