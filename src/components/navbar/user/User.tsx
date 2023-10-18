import React from "react";
import { IconButton, Link, Stack } from "@mui/material";
import { ArrowDropDown } from "@mui/icons-material";
import { Avatar } from "../../../ui/avatar/Avatar";
import { UserDropdown } from "../user-dropdown/UserDropdown";
import { useUser } from "../../../contexts/UserContext";

export const User = () => {
  const user = useUser();

  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(
    null
  );
  const handleOpenUserMenu = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(e.currentTarget);
  };

  return (
    <Stack direction="row" alignItems="center" spacing={1.25}>
      <IconButton disableRipple sx={{ p: 0 }}>
        <Avatar src={user.profileImage} />
      </IconButton>
      <Link
        href="/user"
        sx={{
          display: { xs: "none", sm: "block" },
          textDecoration: "none",
          fontFamily: "Noto Sans",
          fontWeight: "fontWeightBold",
          fontSize: 12,
          color: "grey.900",
        }}
      >
        {`${user.firstName} ${user.lastName}`}
      </Link>

      <IconButton onClick={handleOpenUserMenu}>
        <ArrowDropDown
          fontSize="medium"
          sx={{
            display: { xs: "none", sm: "block" },
            color: "grey.900",
          }}
        />
      </IconButton>
      <UserDropdown
        anchorElUser={anchorElUser}
        setAnchorElUser={setAnchorElUser}
      />
    </Stack>
  );
};
