import styled from "styled-components";
import { TextProps } from "./Text.types";

const fontSizes = {
  xs: "1.2rem",
  sm: "1.4rem",
  m: "1.6rem",
  l: "1.8rem",
  xl: "2.4rem",
};

const StyledText = styled.span<TextProps>`
  text-align: ${(props) => props.align};
  font-size: ${(props) => fontSizes[props.size]};
  text-align: ${(props) => props.align};
`;

export const Text = ({ as = "span", align, size, children }: TextProps) => {
  return (
    <StyledText as={as} align={align} size={size}>
      {children}
    </StyledText>
  );
};
