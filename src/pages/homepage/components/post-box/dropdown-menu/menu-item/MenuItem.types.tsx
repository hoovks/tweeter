import { MouseEventHandler } from "react";

export interface MenuItemProps {
  text: string;
  icon: JSX.Element;
  onClick: MouseEventHandler<HTMLLIElement>;
}
