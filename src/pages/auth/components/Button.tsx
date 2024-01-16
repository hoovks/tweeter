import { Button, Box, Typography } from "@mui/material";
interface BtnProps {
  children?: React.ReactNode;
  btnText: string;
}

export const PrimaryButton = ({ children, btnText }: BtnProps) => {
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
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
  );
};

export const SecondaryButton: React.FC<BtnProps> = ({}) => {
  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <Button
      // onClick={() => toggleForm("register")}
      sx={{ fontSize: 12, "&:hover": { bgcolor: "transparent" } }}
    >
      First time here? Sign up!
    </Button>
  );
};
