import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../../theme";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const meta: Meta<typeof Button> = {
  component: Button,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const TextButton: Story = {
  args: {
    children: "Primary",
  },
};

export const IconButton: Story = {
  args: {
    children: "Secondary",
    startIcon: <PersonAddIcon />,
  },
};
