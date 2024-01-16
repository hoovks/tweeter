import { Button, Box, Typography, Paper } from "@mui/material";
interface FormProps {
  children?: React.ReactNode;
  header: string;
  btnText: string;
}

export const Form = ({ children, header, btnText }: FormProps) => {
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <Box component="form" onSubmit={handleSubmit} action="">
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
            {header}
          </Typography>
          {children}

          {/* <Button variant="contained"
            disableElevation
            // onClick={signIn}
            type="submit"
            size="large"
            sx={{ mt: 2, fontSize: 14 }}
          >
            Sign in
          </Button>
          <Button
            // onClick={() => toggleForm("register")}
            sx={{ fontSize: 12, "&:hover": { bgcolor: "transparent" } }}
          >
            First time here? Sign up!
          </Button> */}
          <Button
            variant="contained"
            disableElevation
            // onClick={signIn}
            type="submit"
            size="large"
            sx={{ mt: 2, fontSize: 14 }}
          >
            {btnText}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};
