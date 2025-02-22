'use client';
import React, { useState, useMemo, Fragment } from "react";
import "./globals.css";
import Header from "@/layout/Header";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import theme from '../theme';



const MUI = ({children}: {children: React.ReactNode}) => {
  console.log('mui')
     // State to control theme mode
  const [mode, setMode] = useState<'light' | 'dark'>('dark');

  // Memoize the theme to avoid re-rendering unnecessarily
  const currentTheme = useMemo(() => theme(mode), [mode]);

  // Toggle theme mode
  const toggleTheme = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
  };

  return (
    <Fragment> <AppRouterCacheProvider options={{ key: 'css' }}>
    <ThemeProvider theme={currentTheme}>
      <Header toggleTheme={toggleTheme} mode={mode} />
      {children}
    </ThemeProvider>
  </AppRouterCacheProvider></Fragment>
  )
}

export default MUI