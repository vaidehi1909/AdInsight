import React from 'react';
import { Grid } from '@mui/material';
import AdInsightTable from './AdInsightTable';
import AdInsightMetricPieChart from './AdInsightMetricPieChart';

const Layout = () => {

  return (
    <Grid container spacing={2}>
      <Grid item xs={12} md={6}>
        <AdInsightTable />
      </Grid>
      <Grid item xs={12} md={6}>
        <AdInsightMetricPieChart />
      </Grid>
    </Grid>
  );
};

export default Layout;
