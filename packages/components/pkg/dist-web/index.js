import React from 'react';
import { H1, Button } from '@modular-app/primitives';
import { colors } from '@modular-app/tokens';

const Hero = (_ref) => {
  let buttonText = _ref.buttonText,
      headingText = _ref.headingText;
  return React.createElement(React.Fragment, null, React.createElement(H1, {
    style: {
      color: colors.blush
    }
  }, headingText), React.createElement(Button, null, buttonText));
};

export { Hero };
