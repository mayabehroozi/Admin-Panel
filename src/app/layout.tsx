
// 'use client';

// import { ReactNode, useState } from 'react';

// import FixedSidebar from '../components/Sidebar'
// import Header from '../components/Header';
// import { Box } from '@mui/material';

// const drawerWidth = 240;

// export default function AdminLayout({ children }: { children: ReactNode }) {
//   const [headerHeight, setHeaderHeight] = useState(64); // مقدار پیش‌فرض

//   return (
//     <Box >
    
//       <Header/>
   
//       <FixedSidebar/>

//       <Box
//         component="main"
//         sx={{
//           marginTop: `${headerHeight}px`,
//           marginLeft: `${drawerWidth}px`,
//           padding: 2,
//         }}
//       >
//         {children}
//       </Box>
//     </Box>
//   );
// }
// //////////////
'use client';

import { ReactNode, useState } from 'react';
import FixedSidebar from '../components/Sidebar';
import Header from '../components/Header';
import { Box } from '@mui/material';
import { ThemeModeProvider } from '../app/context/theme-context'; // مسیر رو درست بذار
import CssBaseline from '@mui/material/CssBaseline';

const drawerWidth = 240;

export default function AdminLayout({ children }: { children: ReactNode }) {
  const [headerHeight, setHeaderHeight] = useState(64); // مقدار پیش‌فرض

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
            marginLeft: `${drawerWidth}px`,
            padding: 2,
          }}
        >
          {children}
        </Box>
      </Box>
    </ThemeModeProvider>
  );
}
