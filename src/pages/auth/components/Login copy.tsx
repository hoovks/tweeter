import { ChangeEvent, useState } from "react";
import {
  Button,
  Box,
  Typography,
  InputAdornment,
  TextField,
  Paper,
} from "@mui/material";
import { AccountCircle, Lock } from "@mui/icons-material";

export const Login = ({ toggleForm }: any) => {
  const [email, setEmail] = useState<string>("");
  const [pass, setPass] = useState<string>("");

  function signIn() {
    console.warn(email, pass);
  }

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(email);
  };

  return (
    <Box component="form" width="40em" onSubmit={handleSubmit} action="">
      <Paper>
        <Box
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent="center"
          gap={1}
          p={6}
          mx="20px"
        >
          <Typography variant="h3" padding={4}>
            Login
          </Typography>
          <TextField
            fullWidth
            placeholder="Email"
            type={"email"}
            value={email}
            sx={{ fontSize: 16 }}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle />
                </InputAdornment>
              ),
            }}
          />
          <TextField
            fullWidth
            placeholder="Password"
            type={"password"}
            value={pass}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              setPass(e.target.value)
            }
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Lock />
                </InputAdornment>
              ),
            }}
          />

          <Button
            variant="contained"
            disableElevation
            onClick={signIn}
            type="submit"
            size="large"
            sx={{ mt: 2, fontSize: 14 }}
          >
            Sign in
          </Button>
          <Button
            onClick={() => toggleForm("register")}
            sx={{ fontSize: 12, "&:hover": { bgcolor: "transparent" } }}
          >
            First time here? Sign up!
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};
