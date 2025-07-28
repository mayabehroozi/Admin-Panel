'use client';

import React from 'react';
import { Box, Typography, Avatar } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import LineOnlyChart from '../charts/LineOnlyChart'

type CardProps = {
    title: string;
    number: number;
    trendingNumber: number;
    trendingPositive?: boolean;
    avatarSrc?: string; // عکس کوچک سمت چپ
    backgroundColor?: string;
    chartData: number[]; 
};

export default function CustomCard({
    title,
    number,
    trendingNumber,
    trendingPositive = true,
    avatarSrc,
    backgroundColor = 'background.paper',
    chartData
}: CardProps) {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'space-between',

                // p: 2,
                borderRadius: 2,
                boxShadow: 3,
                position: 'relative',
                // width: 350,
                width:250,
                // height: 200,
                height:170,
                bgcolor: backgroundColor,
           

            }}
        >
            {/* سمت چپ - آواتار + عنوان و عدد */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 ,color:'black'}}>
                <Avatar
                    src={avatarSrc}
                    sx={{ width: 50, height: 50, mb: 'auto' }}
                    alt={title}
                />
                <Box>
                    <Typography variant="subtitle1" fontWeight="bold">
                        {title}
                    </Typography>
                    <Typography variant="h5" fontWeight="bold">
                        {number.toLocaleString()}
                    </Typography>
                </Box>
            </Box>

            {/* سمت راست - عدد و آیکون trending */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 0.5,
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    color: trendingPositive ? 'success.main' : 'error.main',
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                }}
            >
                <TrendingUpIcon fontSize="small" />
                <Typography>{trendingNumber}%</Typography>
            </Box>

            {/* سمت راست پایین - چارت کوچک */}
            <Box
                sx={{
                    // position: 'absolute',
                    //   bottom: 12,
                    top: 18,
                    right: 16,
                    width: 80,
                    height:20,
                  
                    color:"black"

                }}
            >
                <LineOnlyChart data={chartData} />


            </Box>
        </Box>
    );
}
