'use client';

import { ReactNode, useState } from 'react';
import FixedSidebar from '../components/Sidebar';
import Header from '../components/Header';
import { Box, useMediaQuery } from '@mui/material';
import { ThemeModeProvider } from '../app/context/theme-context';
import CssBaseline from '@mui/material/CssBaseline';
import { useTheme } from '@mui/material/styles';

const drawerWidth = 250;

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [headerHeight, setHeaderHeight] = useState(64);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
            marginLeft: isMobile ? 0 : `${drawerWidth}px`, // ✅ فقط وقتی دسکتاپه
            padding: 2,
          }}
        >
          {children}
        </Box>
      </Box>
    </ThemeModeProvider>
  );
}
