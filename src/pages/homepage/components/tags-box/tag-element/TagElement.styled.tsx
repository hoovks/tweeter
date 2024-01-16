import { Link, Stack, Box, Typography } from "@mui/material";
import { TagElementProps } from "./TagElement.types";
import { formatCompactNumber } from "../../../../../utils";

export const TagElement = ({ tag, number }: TagElementProps) => {
  const compactNum = formatCompactNumber(number);
  return (
    <Box>
      <Stack spacing={0.8}>
        <Link
          href="/"
          underline="none"
          sx={{
            wordWrap: "break-word",
            fontFamily: "Noto Sans",
            fontWeight: "fontWeightMedium",
            fontSize: 16,
            color: "grey.900",
          }}
        >
          {tag}
        </Link>

        <Typography
          variant="subtitle2"
          sx={{
            color: "grey.700",
          }}
        >
          {compactNum} Tweets
        </Typography>
      </Stack>
    </Box>
  );
};
