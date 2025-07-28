


'use client';

import { createTheme, ThemeProvider } from '@mui/material/styles';
import { createContext, useContext, useMemo, useState } from 'react';
import { CssBaseline } from '@mui/material';

type ThemeMode = 'light' | 'dark';

const ThemeModeContext = createContext({
  toggleColorMode: () => {},
  mode: 'light' as ThemeMode,
});

export const useThemeMode = () => useContext(ThemeModeContext);

// 🎨 تم روشن
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    background: {
      default: '#f9fafb',
      paper: '#ffffff',
    },
    text: {
      primary: '#000000',
    },
  },
});

// 🌙 تم تیره با رنگ سفارشی #212121
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    background: {
      default: '#212121',
      paper: '#2a2a2a', // کمی روشن‌تر برای card و boxها
    },
    text: {
      primary: '#ffffff',
    },
  },
});

export function ThemeModeProvider({ children }: { children: React.ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>('light');

  const theme = useMemo(() => (mode === 'light' ? lightTheme : darkTheme), [mode]);

  const toggleColorMode = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeModeContext.Provider value={{ toggleColorMode, mode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}
