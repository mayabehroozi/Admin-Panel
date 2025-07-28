"use client";

import React from "react";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

export default function PageStatisticsChart() {
  const options: ApexOptions = {
    chart: {
      height: 350,
      type: "line",  // اینجا دقیق "line" باشه
      zoom: {
        enabled: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: [5, 7, 5],
      curve: "straight",
      dashArray: [0, 8, 5],
    },
    title: {
      text: "Page Statistics",
      align: "left",
    },
    legend: {
      tooltipHoverFormatter: function (val, opts) {
        const value = opts.w.globals.series[opts.seriesIndex][opts.dataPointIndex];
        return val + " - <strong>" + value + "</strong>";
      },
    },
    markers: {
      size: 0,
      hover: {
        sizeOffset: 6,
      },
    },
    xaxis: {
      categories: [
        "01 Jan",
        "02 Jan",
        "03 Jan",
        "04 Jan",
        "05 Jan",
        "06 Jan",
        "07 Jan",
        "08 Jan",
        "09 Jan",
        "10 Jan",
        "11 Jan",
        "12 Jan",
      ],
    },
    tooltip: {
      y: [
        {
          title: {
            formatter: (val) => val + " (mins)",
          },
        },
        {
          title: {
            formatter: (val) => val + " per session",
          },
        },
        {
          title: {
            formatter: (val) => val,
          },
        },
      ],
    },
    grid: {
      borderColor: "#f1f1f1",
    },
    colors: ["#008FFB", "#00E396", "#FEB019"],
  };

  const series = [
    {
      name: "Session Duration",
      data: [45, 52, 38, 24, 33, 26, 21, 20, 6, 8, 15, 10],
    },
    {
      name: "Page Views",
      data: [35, 41, 62, 42, 13, 18, 29, 37, 36, 51, 32, 35],
    },
    {
      name: "Total Visits",
      data: [87, 57, 74, 99, 75, 38, 62, 47, 82, 56, 45, 47],
    },
  ];

  return (
    <div style={{ maxWidth: 900, margin: "0 auto" }}>
      <Chart options={options} series={series} type="line" height={350} />
    </div>
  );
}
