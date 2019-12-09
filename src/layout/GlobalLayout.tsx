import React from 'react';
import {ThemeProvider, DefaultTheme} from 'styled-components';
import { GlobalStyles } from '../other/GlobalStyles';
import { Theme } from '../theme';

export interface GlobalLayoutProps {
  theme: Theme;
  beforeGlobalStyles?: React.ReactNode;
  afterGlobalStyles?: React.ReactNode;
  afterChildren?: React.ReactNode;
}

export const GlobalLayout: React.FC<GlobalLayoutProps> = ({theme, beforeGlobalStyles = null, afterGlobalStyles = null, afterChildren = null, children}) => {
  return <ThemeProvider theme={theme}>
    {beforeGlobalStyles}
    <GlobalStyles />
    {afterGlobalStyles}
    {children}
    {afterChildren}
  </ThemeProvider>
};