import * as React from 'react';
import { render } from '@testing-library/react';
import { OcmlAmp } from '../src/';

// In your test setup file
// globalThis.IS_REACT_ACT_ENVIRONMENT = true;

describe('it', () => {
  it('renders default props', () => {
    render(<OcmlAmp />);
  });

  it('renders with manual', () => {
    render(<OcmlAmp userManual />);
  });
});
