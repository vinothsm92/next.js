'use client';
import { createTheme } from '@mui/material/styles';

const theme = (mode: 'light' | 'dark') => createTheme({
  typography: {
    fontFamily: 'var(--font-roboto)',
  },
  palette: {
    mode, // dynamically set the mode
  },
  cssVariables: true,
});

export default theme;
