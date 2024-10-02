import * as React from 'react';
import Box from '@mui/material/Box';
import { BarChart } from '@mui/x-charts';


export default function BarAnimation() {
  const [seriesNb, setSeriesNb] = React.useState(2);
  const [itemNb, setItemNb] = React.useState(5);

 

  return (
    <Box sx={{ width: '100%' }}>
      <BarChart
        height={250}
        series={series
          .slice(0, seriesNb)
          .map((s) => ({ ...s, data: s.data.slice(0, itemNb) }))}

      />
     
     
     
    </Box>
  );
}

const highlightScope = {
  highlight: 'series',
  fade: 'global',
};

const series = [
  {
    label: 'Last Week',
    data: [
      2423, 2210, 764, 1879, 1478
    ],
  },
  {
    label: 'This week',
    data: [
      2362, 2254, 1962, 1336, 586
    ],
  }
 
].map((s) => ({ ...s, highlightScope }));
