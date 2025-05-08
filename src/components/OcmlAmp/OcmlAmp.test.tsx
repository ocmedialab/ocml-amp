import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { OcmlAmp } from './OcmlAmp';

describe('OcmlAmp', () => {
  it('Renders', () => {
    const { container } = render(<OcmlAmp />);
    expect(container).toBeTruthy();
  });
});
