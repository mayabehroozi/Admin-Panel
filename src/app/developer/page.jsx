'use client';

import React from 'react';
import NextLink from 'next/link';
import { Box, Typography, Link as MuiLink, Stack, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

export default function AboutDeveloper() {
  return (
    <Box
      sx={{
        maxWidth: 600,
        mx: 'auto',
        mt: 6,
        p: 4,
        bgcolor: 'background.paper',
        borderRadius: 3,
        boxShadow: 4,
        textAlign: 'center',
      }}
    >
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        About the Developer
      </Typography>

      <Typography variant="body1" sx={{ mb: 3 }}>
        Hi! I'm Maya Behroozi, a passionate developer who loves building beautiful and functional web apps.
      </Typography>

      <Stack direction="row" spacing={3} justifyContent="center" alignItems="center" mb={3}>
        <IconButton
          component="a"
          href="https://github.com/mayabehroozi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          color="inherit"
        >
          <GitHubIcon fontSize="large" />
        </IconButton>

        <IconButton
          component="a"
          href="https://linkedin.com/in/maya-behroozi-5b27a425b"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          color="primary"
        >
          <LinkedInIcon fontSize="large" />
        </IconButton>

        <IconButton
          component="a"
          href="https://instagram.com/maya_behroozi"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          color="secondary"
        >
          <InstagramIcon fontSize="large" />
        </IconButton>
      </Stack>

      <Stack direction="column" spacing={2} alignItems="center">
        <MuiLink
          href="mailto:your.mahnazbehroozi9@gmail.com"
          underline="none"
          color="inherit"
          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
        >
          <EmailIcon />
          mahnazbehroozi9@gmail.com
        </MuiLink>

        <MuiLink
          href="tel:+989123663995"
          underline="none"
          color="inherit"
          sx={{ display: 'flex', alignItems: 'center', gap: 1 }}
        >
          <PhoneIcon />
          tel:(+98)9123663995
        </MuiLink>

        {/* لینک داخلی به صفحه دیگر به شکل صحیح */}
        <NextLink href="/dashboard" passHref>
          <MuiLink underline="hover" sx={{ mt: 2 }}>
            Go to Dashboard
          </MuiLink>
        </NextLink>
      </Stack>
    </Box>
  );
}
