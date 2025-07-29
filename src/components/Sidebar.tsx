'use client'

import * as React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer,
  IconButton,
  useMediaQuery,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'

// آیکون‌ها
import MenuIcon from '@mui/icons-material/Menu'
import TroubleshootIcon from '@mui/icons-material/Troubleshoot'
import PersonIcon from '@mui/icons-material/Person'
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits'
import LoginIcon from '@mui/icons-material/Login'
import Face4Icon from '@mui/icons-material/Face4'

const navItems = [
  { label: 'Dashboard', path: '/dashboard', icon: <TroubleshootIcon /> },
  { label: 'Products', path: '/products', icon: <ProductionQuantityLimitsIcon /> },
  { label: 'Users', path: '/users', icon: <PersonIcon /> },
  { label: 'Developer', path: '/developer', icon: <Face4Icon /> },
  { label: 'Login', path: '/login', icon: <LoginIcon /> },
]

export default function Sidebar() {
  const pathname = usePathname()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [open, setOpen] = React.useState(false)

  const toggleDrawer = (value: boolean) => () => {
    setOpen(value)
  }

  const sidebarContent = (
    <Box sx={{ width: 250, px: 2, py: 3 }}>
      <List>
        {navItems.map(({ label, path, icon }) => {
          const isActive = pathname === path

          return (
            <ListItem key={path} disablePadding sx={{ mb: 1 }}>
              <Link href={path} style={{ textDecoration: 'none', width: '100%' }}>
                <ListItemButton
                  onClick={isMobile ? toggleDrawer(false) : undefined}
                  sx={{
                    backgroundColor: isActive ? theme.palette.action.selected : 'transparent',
                    borderRadius: '10px',
                    '&:hover': {
                      backgroundColor: isActive
                        ? theme.palette.action.selected
                        : theme.palette.action.hover,
                    },
                  }}
                >
                  <ListItemIcon sx={{ color: theme.palette.text.primary }}>
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={label}
                    primaryTypographyProps={{
                      color: theme.palette.text.primary,
                    }}
                  />
                </ListItemButton>
              </Link>
            </ListItem>
          )
        })}
      </List>
    </Box>
  )

  return (
    <>
      {/* موبایل: فقط آیکون */}
      {isMobile ? (
        <>
          <IconButton
            onClick={toggleDrawer(true)}
            sx={{
              position: 'fixed',
              top: 20,
              left: 20,
              zIndex: 2000,
              backgroundColor: theme.palette.background.paper,
              boxShadow: 1,
            }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
            {sidebarContent}
          </Drawer>
        </>
      ) : (
        // دسکتاپ: سایدبار کامل
        <Box
          sx={{
            width: 250,
            height: '100vh',
            position: 'fixed',
            top: 73,
            left: 0,
            bgcolor: theme.palette.background.default,
            borderRight: `1px solid ${theme.palette.divider}`,
          }}
        >
          {sidebarContent}
        </Box>
      )}
    </>
  )
}
