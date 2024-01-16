import { CardTitle } from "../../../../ui/card-title/CardTitle";
import { TagElement } from "./tag-element/TagElement.styled";
import { Divider, Stack, Paper } from "@mui/material";

export const TagsBox = () => {
  return (
    <Paper sx={{ paddingX: 2.5, paddingY: 1.5 }}>
      <CardTitle>Trends for you</CardTitle>
      <Divider />

      <Stack spacing={2.4} sx={{ paddingY: 3 }}>
        <TagElement tag="#programming" number={38776} />
        <TagElement tag="#cooking" number={38656} />
        <TagElement tag="#programming" number={3865} />
        <TagElement tag="#programming" number={3866666} />
        <TagElement tag="#programming" number={38666} />
      </Stack>
    </Paper>
  );
};
