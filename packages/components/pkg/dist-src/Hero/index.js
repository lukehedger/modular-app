import React from "react";
import { Button, H1 } from "@modular-app/primitives";
import { colors } from "@modular-app/tokens";
export const Hero = ({
  buttonText,
  headingText
}) => {
  return React.createElement(React.Fragment, null, React.createElement(H1, {
    style: {
      color: colors.blush
    }
  }, headingText), React.createElement(Button, null, buttonText));
};