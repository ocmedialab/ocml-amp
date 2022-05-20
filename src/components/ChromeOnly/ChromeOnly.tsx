import React from 'react';
import { ChromeOnlyStyles } from './ChromeOnly.styles';

const ChromeOnly = () => {
  return (
    <ChromeOnlyStyles>
      <h1>OCML Amp</h1>
      <p>Can only be used in Chrome Browser</p>
      <p>
        Visit: <a href="https://ocmedialab.com">ocmedialab.com</a>
      </p>
    </ChromeOnlyStyles>
  );
};

export default ChromeOnly;
