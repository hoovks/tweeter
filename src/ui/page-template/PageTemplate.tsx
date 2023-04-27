import Stack from "@mui/material/Stack/Stack";
import { PageTemplateProps } from "./PageTemplate.types";

export const PageTemplate = ({ children }: PageTemplateProps) => {
  return (
    <Stack direction="row" justifyContent="center" spacing={3}>
      {children}
    </Stack>
  );
};
