import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import { hours } from '../utils/constant';
export default function ChartsOverviewDemo() {
  // const Atul =  <img alt="Profile picture of Alena Gouse" height="40" src="https://storage.googleapis.com/a1aa/image/ssItUqqvrV5ffEelR9eLu0RrYFGjTEpeLepyLqKKfvwRepfFnA.jpg" width="40"/>
  return (
    <BarChart
    
      series={[
        { data: [(hours.LastWeek.Atul ),
           (hours.LastWeek.Nitin),
        (hours.LastWeek.Ani),
             (hours.LastWeek.Golu),
             (hours.LastWeek.Kaku),
             (hours.LastWeek.Raju),
             (hours.LastWeek.Hira)] },
        { data: [(hours.ThisWeek.Atul ),
          (hours.ThisWeek.Nitin),
       (hours.ThisWeek.Ani),
            (hours.ThisWeek.Golu),
            (hours.ThisWeek.Kaku),
            (hours.ThisWeek.Raju),
            (hours.ThisWeek.Hira)] }
      ]}
      height={200}
      xAxis={[{ data: ['Atul', 'Nitin', 'Ani', 'Golu','kaku','Raju','Hira'], scaleType: 'band' }]}
      margin={{ top: 10, bottom: 30, left: 40, right: 10 }}
    />
  );
}
