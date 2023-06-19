import { AsideProps } from "./Aside.types";
import Stack from "@mui/material/Stack/Stack";

export const Aside = ({ children }: AsideProps) => {
  return (
    <Stack width={1} spacing={3} flexShrink={2} minWidth={250} maxWidth={306}>
      {children}
    </Stack>
  );
};
