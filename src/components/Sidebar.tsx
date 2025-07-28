

// 'use client'

// import * as React from 'react'
// import { usePathname } from 'next/navigation'
// import Link from 'next/link'
// import Box from '@mui/material/Box'
// import List from '@mui/material/List'
// import ListItem from '@mui/material/ListItem'
// import ListItemButton from '@mui/material/ListItemButton'
// import ListItemIcon from '@mui/material/ListItemIcon'
// import ListItemText from '@mui/material/ListItemText'
// import { useTheme } from '@mui/material/styles'
// import Developer from "../app/About the Developer/page"

// // آیکون‌ها
// import TroubleshootIcon from '@mui/icons-material/Troubleshoot'
// import PersonIcon from '@mui/icons-material/Person'
// import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits'
// import LoginIcon from '@mui/icons-material/Login'

// // مسیرها و آیکون‌ها
// const navItems = [
//   { label: 'Dashboard', path: '/dashboard', icon: <TroubleshootIcon /> },
//   { label: 'Products', path: '/products', icon: <ProductionQuantityLimitsIcon /> },
//   { label: 'Users', path: '/users', icon: <PersonIcon /> },
//   { label: 'Login', path: '/login', icon: <LoginIcon /> },
// ]

// export default function Sidebar() {
//   const pathname = usePathname()
//   const theme = useTheme()

//   return (
//     <Box
//       sx={{
//         width: 250,
//         height: '100vh',
//         position: 'fixed',
//         top: 73,
//         left: 0,
//         bgcolor: theme.palette.background.default,
//         px: 2,
//         py: 3,
//         borderRight: `1px solid ${theme.palette.divider}`,
//       }}
//     >
//       <List>
//         {navItems.map(({ label, path, icon }) => {
//           const isActive = pathname === path

//           return (
//             <ListItem key={path} disablePadding sx={{ mb: 1 }}>
//               <Link
//                 href={path}
//                 style={{ textDecoration: 'none', width: '100%' }}
//               >
//                 <ListItemButton
//                   sx={{
//                     backgroundColor: isActive
//                       ? theme.palette.action.selected
//                       : 'transparent',
//                     borderRadius: '10px',
//                     '&:hover': {
//                       backgroundColor: isActive
//                         ? theme.palette.action.selected
//                         : theme.palette.action.hover,
//                     },
//                   }}
//                 >
//                   <ListItemIcon sx={{ color: theme.palette.text.primary }}>
//                     {icon}
//                   </ListItemIcon>
//                   <ListItemText
//                     primary={label}
//                     primaryTypographyProps={{
//                       color: theme.palette.text.primary,
//                     }}
//                   />
//                 </ListItemButton>
//               </Link>
//             </ListItem>
//           )
//         })}
//       </List>
//     </Box>
//   )
// }

'use client'

import * as React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { useTheme } from '@mui/material/styles'

// آیکون‌ها
import TroubleshootIcon from '@mui/icons-material/Troubleshoot'
import PersonIcon from '@mui/icons-material/Person'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits'
import LoginIcon from '@mui/icons-material/Login'
import Face4Icon from '@mui/icons-material/Face4'  // آیکون جدید برای Developer

// مسیرها و آیکون‌ها — Developer جای Login عوض شده
const navItems = [
  { label: 'Dashboard', path: '/dashboard', icon: <TroubleshootIcon /> },
  { label: 'Products', path: '/products', icon: <ProductionQuantityLimitsIcon /> },
  { label: 'Users', path: '/users', icon: <PersonIcon /> },
  { label: 'Developer', path: '/developer', icon: <Face4Icon /> },  // آیکون جدید و جایگاه تغییر یافته
  { label: 'Login', path: '/login', icon: <LoginIcon /> },
]

export default function Sidebar() {
  const pathname = usePathname()
  const theme = useTheme()

  return (
    <Box
      sx={{
        width: 250,
        height: '100vh',
        position: 'fixed',
        top: 73,
        left: 0,
        bgcolor: theme.palette.background.default,
        px: 2,
        py: 3,
        borderRight: `1px solid ${theme.palette.divider}`,
      }}
    >
      <List>
        {navItems.map(({ label, path, icon }) => {
          const isActive = pathname === path

          return (
            <ListItem key={path} disablePadding sx={{ mb: 1 }}>
              <Link href={path} style={{ textDecoration: 'none', width: '100%' }}>
                <ListItemButton
                  sx={{
                    backgroundColor: isActive ? theme.palette.action.selected : 'transparent',
                    borderRadius: '10px',
                    '&:hover': {
                      backgroundColor: isActive ? theme.palette.action.selected : theme.palette.action.hover,
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: theme.palette.text.primary }}>
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={label}
                    primaryTypographyProps={{ color: theme.palette.text.primary }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          )
        })}
      </List>
    </Box>
  )
}
