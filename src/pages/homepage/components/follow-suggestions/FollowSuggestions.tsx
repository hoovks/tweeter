import { Divider, Paper, Stack } from "@mui/material";
import { Account } from "./account/Account";
import { CardTitle } from "../../../../ui/card-title/CardTitle";
export const FollowSuggestions = () => {
  return (
    <Paper sx={{ paddingX: 2.5, paddingY: 1.5 }}>
      <CardTitle>Who to follow</CardTitle>
      <Divider />

      <Stack spacing={2.4} sx={{ paddingY: 3 }}>
        <Account />
      </Stack>
    </Paper>
  );
};
