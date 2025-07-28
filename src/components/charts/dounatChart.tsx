'use client';

import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ApexOptions } from 'apexcharts';

export default function DonutChart() {
  const [series, setSeries] = useState([44, 55, 13, 33]);

  const options: ApexOptions = {
    chart: {
      type: 'donut',
      width: 380,
    },
    dataLabels: {
      enabled: false,
    },
    responsive: [
      {
        breakpoint: 480,
        options: {
          chart: {
            width: 250,
          },
          legend: {
            show: false,
          },
        },
      },
    ],
    legend: {
      position: 'right',
      offsetY: 0,
      height: 230,
    },
    labels: ['Item 1', 'Item 2', 'Item 3', 'Item 4'],
    colors: ['#1976d2', '#4caf50', '#ff9800', '#e91e63'],
  };

  const appendData = () => {
    setSeries([...series, Math.floor(Math.random() * 100) + 1]);
  };

  const removeData = () => {
    if (series.length > 1) {
      setSeries(series.slice(0, -1));
    }
  };

  const randomize = () => {
    setSeries(series.map(() => Math.floor(Math.random() * 100) + 1));
  };

  const reset = () => {
    setSeries([44, 55, 13, 33]);
  };

  return (
    <div className="flex flex-col items-center p-6">
      <ReactApexChart options={options} series={series} type="donut" width={380} />

      <div className="mt-6 flex flex-wrap gap-4 justify-center">
        <button
          onClick={appendData}
          className="bg-blue-600 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-700 transition"
        >
          + ADD
        </button>
        <button
          onClick={removeData}
          className="bg-red-600 text-white px-4 py-2 rounded-xl shadow hover:bg-red-700 transition"
        >
          - REMOVE
        </button>
        <button
          onClick={randomize}
          className="bg-yellow-500 text-white px-4 py-2 rounded-xl shadow hover:bg-yellow-600 transition"
        >
          RANDOMIZE
        </button>
        <button
          onClick={reset}
          className="bg-gray-600 text-white px-4 py-2 rounded-xl shadow hover:bg-gray-700 transition"
        >
          RESET
        </button>
      </div>
    </div>
  );
}
