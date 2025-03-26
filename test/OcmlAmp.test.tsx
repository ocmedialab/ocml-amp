import { render, waitFor } from '@testing-library/react';
import React from 'react';
import OcmlAmp from '../src/components/Amp/Amp';

describe('OcmlAmp', () => {
  it('renders without crashing', async () => {
    render(<OcmlAmp />);

    // If the component involves some async behavior, wait for it to finish.
    await waitFor(() => expect(true).toBe(true)); // Replace with your actual async check.
  });
});
