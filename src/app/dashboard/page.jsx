'use client';

import dynamic from 'next/dynamic';
import { Box } from '@mui/material';

// ⛔ این‌ها از SSR پشتیبانی نمی‌کنن
const ApexChart = dynamic(() => import('../../components/charts/sampleChart'), { ssr: false });
const ScatterChart = dynamic(() => import('../../components/charts/scatterChart'), { ssr: false });
const DonutChart = dynamic(() => import('../../components/charts/dounatChart'), { ssr: false });
const PageStatisticsChart = dynamic(() => import('../../components/charts/PageStatisticsChart'), { ssr: false });
const CustomCard = dynamic(() => import('../../components/cards/card1'), { ssr: false });

export default function Dashboard() {
  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', p: 2 }}>
      <h1>Dashboard</h1>
      <div>
        <h2>Sales Report</h2>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            gap: 2,
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              gap: 2,
              justifyContent: 'space-between',
              flexWrap: 'wrap',
            }}
          >
            <CustomCard
              title="Weekly sales"
              number={243}
              trendingNumber={1.7}
              trendingPositive={true}
              backgroundColor="#d5ecfe"
              chartData={[5, 9, 7, 14, 20, 18]}
              avatarSrc="./Weekly sales.webp"
            />
            <CustomCard
              title="New users"
              number={1340}
              trendingNumber={12}
              trendingPositive={true}
              backgroundColor="#eed8ff"
              chartData={[2, 3, 4, 2, 4, 1, 7]}
              avatarSrc="./New users.webp"
            />
            <CustomCard
              title="Purchase orders"
              number={100}
              trendingNumber={8.3}
              trendingPositive={true}
              backgroundColor="#fff3cf"
              chartData={[5, 9, 3, 7, 5, 2, 1.8]}
              avatarSrc="./Purchase orders.webp"
            />
            <CustomCard
              title="Messages"
              number={1500}
              trendingNumber={132}
              trendingPositive={true}
              backgroundColor="#ffe4d5"
              chartData={[5, 9, 7, 14, 20, 18]}
              avatarSrc="./Messages.webp"
            />
          </Box>

          <Box
            sx={{
              width: '45%',
              borderRadius: '10px',
              boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)',
              bgcolor: '#fff',
              p: 2,
              mx: 'auto',
              my: 2,
            }}
          >
            <ApexChart />
          </Box>
          <Box
            sx={{
              width: '45%',
              borderRadius: '10px',
              boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)',
              bgcolor: '#fff',
              p: 2,
              mx: 'auto',
              my: 2,
            }}
          >
            <ScatterChart />
          </Box>
        </Box>

        <Box
          sx={{
            width: '100%',
            display: 'flex',
            gap: 2,
            justifyContent: 'space-between',
            flexWrap: 'wrap',
          }}
        >
          <Box
            sx={{
              width: '35%',
              borderRadius: '10px',
              boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)',
              bgcolor: '#fff',
              p: 2,
              mx: 'auto',
              my: 2,
            }}
          >
            <DonutChart />
          </Box>
          <Box
            sx={{
              width: '55%',
              borderRadius: '10px',
              boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)',
              bgcolor: '#fff',
              p: 2,
              mx: 'auto',
              my: 2,
            }}
          >
            <PageStatisticsChart />
          </Box>
        </Box>
      </div>
    </Box>
  );
}
