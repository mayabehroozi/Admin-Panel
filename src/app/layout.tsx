'use client';

import { ReactNode, useState, useEffect } from 'react';
import FixedSidebar from '../components/Sidebar';
import Header from '../components/Header';
import { Box, useMediaQuery } from '@mui/material';
import { ThemeModeProvider } from '../app/context/theme-context';
import CssBaseline from '@mui/material/CssBaseline';
import { useTheme } from '@mui/material/styles';
import LoginPage from '../app/login/page';

const drawerWidth = 250;

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [headerHeight, setHeaderHeight] = useState(64);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const status = sessionStorage.getItem('isLoggedIn') === 'true';
    setIsLoggedIn(status);
    setLoading(false);
  }, []);

  if (loading) {
    // قبل از چک کردن وضعیت لاگین، چیزی رندر نشه
    return null;
  }

  if (!isLoggedIn) {
    return <LoginPage />;
  }

  return (
    <ThemeModeProvider>
      <CssBaseline />
      <Box>
        <Header />
        <FixedSidebar />
        <Box
          component="main"
          sx={{
            marginTop: `${headerHeight}px`,
            marginLeft: isMobile ? 0 : `${drawerWidth}px`,
            padding: 2,
          }}
        >
          {children}
        </Box>
      </Box>
    </ThemeModeProvider>
  );
}
