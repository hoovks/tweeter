import { FeedProps } from "./Feed.types";
import Stack from "@mui/material/Stack/Stack";

export const Feed = ({ children }: FeedProps) => {
  return (
    <Stack spacing={3} maxWidth={745}>
      {children}
    </Stack>
  );
};
