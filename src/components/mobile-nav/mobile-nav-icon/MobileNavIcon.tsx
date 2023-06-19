import React from "react";
import { MobileNavIconProps } from "./MobileNavIcon.types";

export const MobileNavIcon = ({ icon }: MobileNavIconProps) => {
  return (
    <>
      {React.cloneElement(icon, {
        fontSize: "medium",
        sx: {
          color: "grey.700",
          width: 120,
        },
      })}
    </>
  );
};
