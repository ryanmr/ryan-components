import React from 'react';
import {ThemeProvider, DefaultTheme} from 'styled-components';
import { GlobalStyles } from '../other/GlobalStyles';
import { Theme } from '../theme';

export interface GlobalLayoutProps {
  theme: Theme;
}

export const GlobalLayout = ({theme, children}) => {
  return <ThemeProvider theme={theme}>
    <GlobalStyles />
    {children}
  </ThemeProvider>
};