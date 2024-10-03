import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function ChartsOverviewDemo() {
  return (
    <BarChart
      series={[
        { data: [35, 44, 24, 34,22,45,32] },
        { data: [51, 6, 49, 30,23,9,28] }
      ]}
      height={200}
      xAxis={[{ data: ['Atul', 'Nitin', 'Ani', 'Golu','kaku','Raju','Hira'], scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
  );
}
