import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import { OcmlAmp } from './OcmlAmp';

describe('OcmlAmp', () => {
  it('renders all amp controls', () => {
    render(<OcmlAmp />);

    expect(screen.getByRole('slider', { name: /volume/i })).toBeInTheDocument();
    expect(screen.getByRole('slider', { name: /bass/i })).toBeInTheDocument();
    expect(screen.getByRole('slider', { name: /mid/i })).toBeInTheDocument();
    expect(screen.getByRole('slider', { name: /treble/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /over drive/i })).toBeInTheDocument();
  });
});
