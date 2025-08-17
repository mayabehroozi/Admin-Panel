'use client'

import React, { useState } from 'react'
import {
  Box,
  Button,
  TextField,
  Typography,
  Paper,
  Divider,
  IconButton,
  Link,
  Alert,
} from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram'
import GitHubIcon from '@mui/icons-material/GitHub'
import XIcon from '@mui/icons-material/X'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const router = useRouter()

  const [email, setEmail] = useState('mahnazbehroozi9@gmail.com')
  const [password, setPassword] = useState('1234')
  const [error, setError] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (email === 'mahnazbehroozi9@gmail.com' && password === '1234') {
      // ذخیره وضعیت لاگین در localStorage
      sessionStorage.setItem('isLoggedIn', 'true')
     window.location.href = '/dashboard';
    } else {
      setError('Invalid email or password')
    }
  }

  return (
    <Box
      sx={{
        minHeight: '100vh',
        bgcolor: 'background.default',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        p: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          width: '100%',
          maxWidth: 400,
          borderRadius: 3,
          textAlign: 'center',
        }}
      >
        <Typography variant="h5" mb={2} fontWeight="bold">
          Sign in to your account
        </Typography>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            label="Email"
            type="email"
            fullWidth
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
          />

          <TextField
            label="Password"
            type="password"
            fullWidth
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            margin="normal"
          />

          {error && (
            <Alert severity="error" sx={{ mt: 1, mb: 1 }}>
              {error}
            </Alert>
          )}

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>

        <Typography variant="body2" sx={{ mb: 2 }}>
          Don’t have an account?{' '}
          <Link href="/register" underline="hover" fontWeight="bold">
            Get started
          </Link>
        </Typography>

        <Divider>OR</Divider>

        <Box mt={2} display="flex" justifyContent="center" gap={2}>
          <IconButton color="primary">
            <InstagramIcon />
          </IconButton>
          <IconButton color="primary">
            <GitHubIcon />
          </IconButton>
          <IconButton color="primary">
            <XIcon />
          </IconButton>
        </Box>
      </Paper>
    </Box>
  )
}
