export interface TextProps {
  as?: "span" | "p";
  align?: "center" | "inherit" | "justify" | "left" | "right";
  size: "xs" | "sm" | "m" | "l" | "xl";
  children?: React.ReactNode;
}
