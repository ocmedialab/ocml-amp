import React, { StrictMode } from 'react';
import { createRoot, Root } from 'react-dom/client';
import OcmlAmp from './components/OcmlAmp/OcmlAmp';

const el = document.getElementById('ocml-amp');

if (el !== null) {
  const root = createRoot(el) as Root;
  root.render(
    <StrictMode>
      <OcmlAmp />
    </StrictMode>
  );
}
