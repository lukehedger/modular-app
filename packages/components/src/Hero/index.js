import React from "react";
import { Button, H1 } from "@modular-app/primitives";
import { colors } from "@modular-app/tokens";

export const Hero = ({ buttonText, headingText }) => {
  return (
    <React.Fragment>
      <H1 style={{ color: colors.blush }}>{headingText}</H1>

      <Button>{buttonText}</Button>
    </React.Fragment>
  );
};
