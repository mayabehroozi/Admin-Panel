// dashboard/page.tsx
'use client'

import ApexChart from '../../components/charts/sampleChart'
import ScatterChart from '../../components/charts/scatterChart'
import DonutChart from '../../components/charts/dounatChart'
import PageStatisticsChart from '../../components/charts/PageStatisticsChart'
import CustomCard from '../../components/cards/card1'

// import { Box } from '@mui/material';
import { Box, Grid, Paper } from '@mui/material';


export default function Dashboard() {

  return (
    <Box sx={{ bgcolor: 'background.default', minHeight: '100vh', p: 2 }}>
      <h1>Dashboard</h1>
      <div>
        <h2>Sales Report</h2>
        <Box sx={{

          width: '100%',
          display: 'flex', // ← این درستشه
          gap: 2,          // فاصله بین دو باکس (اختیاری)
          justifyContent: 'space-between', // اگه بخوای فاصله‌شون زیاد شه
          flexWrap: 'wrap',

        }}>
         <Box sx={{ width: '100%',
          display: 'flex', // ← این درستشه
          gap: 2,          // فاصله بین دو باکس (اختیاری)
          justifyContent: 'space-between', // اگه بخوای فاصله‌شون زیاد شه
          flexWrap: 'wrap',
          
         }}>
           <CustomCard
            title="Weekly sales"
            number={243}
            trendingNumber={1.7}
            trendingPositive={true}
            backgroundColor="#d5ecfe"
              chartData={[5, 9, 7, 14, 20, 18]}
            avatarSrc="./Weekly sales.webp" // اگر عکسی داری، آدرس بده
          />
          <CustomCard
            title="New users"
            number={1340}
            trendingNumber={12}
            trendingPositive={true}
            backgroundColor="#eed8ff"
              chartData={[2,3,4,2,4,1,7]}
            avatarSrc="./New users.webp" // اگر عکسی داری، آدرس بده
          />
          <CustomCard
            title="Purchase orders"
            number={100}
            trendingNumber={8.3}
            trendingPositive={true}
            backgroundColor='#fff3cf'
              chartData={[5, 9,3, 7, 5, 2, 1.8]}
            avatarSrc="./Purchase orders.webp" // اگر عکسی داری، آدرس بده
          />
          <CustomCard
            title="Messages"
            number={1500}
            trendingNumber={132}
            trendingPositive={true}
            backgroundColor='#ffe4d5'
              chartData={[5, 9, 7, 14, 20, 18]}
            avatarSrc="./Messages.webp" // اگر عکسی داری، آدرس بده
          />
         </Box>
          <Box
            sx={{
              width: '45%',
              borderRadius: '10px',
              boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)', // سطح پایین سایه (مقدار بین 1 تا 24)
              bgcolor: '#fff', // پس‌زمینه سفید (اختیاری)
              p: 2, // Padding داخلی
              mx: 'auto', // وسط‌چین افقی
              my: 2, // فاصله عمودی (اختیاری)
            }}
          >

            <ApexChart />
          </Box>
          <Box
            sx={{
              width: '45%',
              borderRadius: '10px',
              boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)', // سطح پایین سایه (مقدار بین 1 تا 24)
              bgcolor: '#fff', // پس‌زمینه سفید (اختیاری)
              p: 2, // Padding داخلی
              mx: 'auto', // وسط‌چین افقی
              my: 2, // فاصله عمودی (اختیاری)
            }}
          >

            <ScatterChart />
          </Box>

        </Box>

        <Box sx={{

          width: '100%',
          display: 'flex', // ← این درستشه
          gap: 2,          // فاصله بین دو باکس (اختیاری)
          justifyContent: 'space-between', // اگه بخوای فاصله‌شون زیاد شه
          flexWrap: 'wrap'
        }}>
          <Box
            sx={{
              width: '35%',
              borderRadius: '10px',
              boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)', // سطح پایین سایه (مقدار بین 1 تا 24)
              bgcolor: '#fff', // پس‌زمینه سفید (اختیاری)
              p: 2, // Padding داخلی
              mx: 'auto', // وسط‌چین افقی
              my: 2, // فاصله عمودی (اختیاری)
            }}
          >

            < DonutChart />
          </Box>
          <Box
            sx={{
              width: '55%',
              borderRadius: '10px',
              boxShadow: '0 0 8px rgba(0, 0, 0, 0.2)', // سطح پایین سایه (مقدار بین 1 تا 24)
              bgcolor: '#fff', // پس‌زمینه سفید (اختیاری)
              p: 2, // Padding داخلی
              mx: 'auto', // وسط‌چین افقی
              my: 2, // فاصله عمودی (اختیاری)
            }}
          >

            <PageStatisticsChart />
          </Box>

        </Box>

      </div>

    </Box>)
}


{/* // #f9fafb */ }