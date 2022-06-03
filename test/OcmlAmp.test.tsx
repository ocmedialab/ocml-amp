import * as React from 'react';
import { render } from '@testing-library/react';
import { OcmlAmp } from '../src/';

describe('it', () => {
  it('renders default props', () => {
    render(<OcmlAmp />);
  });

  it('renders with manual', () => {
    render(<OcmlAmp withManual />);
  });
});
