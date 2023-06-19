import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { Paper } from "@mui/material";
import { TabMenuProps } from "./TabMenu.types";

export const tabs = {
  explorePage: ["Top", "Latest", "People", "Media"],
  bookmarksPage: ["Tweets", "Tweets & replies", "Media", "Likes"],
};

export const TabMenu = ({ variant }: TabMenuProps) => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Paper sx={{ py: 3 }}>
      <Tabs
        orientation="vertical"
        onChange={handleChange}
        value={value}
        TabIndicatorProps={{ hidden: true }}
        sx={{
          "& button": {
            alignItems: "flex-start",
            minHeight: 32,
            px: 2,
            py: 0.5,
            my: 0.5,
            borderLeft: "3px solid transparent",
          },
          "& button.Mui-selected": {
            borderColor: "primary.main",
            transition: " 0.5s",
          },
        }}
      >
        {tabs[variant].map((tab) => (
          <Tab disableRipple label={tab} />
        ))}
      </Tabs>
    </Paper>
  );
};
