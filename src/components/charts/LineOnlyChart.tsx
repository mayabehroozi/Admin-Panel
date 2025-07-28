
'use client';

import React, { useEffect, useRef } from 'react';
import ApexCharts from 'apexcharts';

interface LineOnlyChartProps {
  data: number[];
}

const LineOnlyChart = ({ data }: LineOnlyChartProps) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const options: ApexCharts.ApexOptions = {
      series: [{ data }],
      chart: {
        type: 'line',
        height: 200,
        toolbar: { show: false },
        zoom: { enabled: false },
      },
      stroke: {
        width: 3,
        curve: 'smooth', // <--- اینجا نرمش کردیم
        colors: ['#0077ff'],
      },
      markers: {
        size: 3,
        colors: ['#0077ff'],
        strokeColors: '#fff',
        strokeWidth: 2,
      },
      grid: { show: false },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        labels: { show: false },
        axisBorder: { show: false },
        axisTicks: { show: false },
      },
      yaxis: { show: false },
      legend: { show: false },
      dataLabels: { enabled: false },
    };

    const chart = new ApexCharts(chartRef.current!, options);
    chart.render();

    return () => chart.destroy();
  }, [data]);

  return (
    <div
      ref={chartRef}
      style={{
        width: '100%',
        maxWidth: '320px',
        margin: 'auto',
      }}
    />
  );
};

export default LineOnlyChart;
