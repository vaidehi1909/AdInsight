import React, { memo } from 'react';
import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import DynamicTable, { formatNumber } from '../../components/DynamicTable';


const columns = [
  {
    key: 'campaign',
    label: 'Campaigns',
    type: 'string',
    compare: (a, b) => a.campaign.localeCompare(b.campaign),
  },
  {
    key: 'clicks',
    label: 'Clicks',
    type: 'number',
    render: (item) => `${formatNumber(item.clicks)}`,
  },
  {
    key: 'cost',
    label: 'Cost',
    type: 'number',
    render: (item) => `${item.currency} ${formatNumber(item.cost)}`,
  },
  {
    key: 'conversions',
    label: 'Conversions',
    type: 'number',
    render: (item) => `${formatNumber(item.conversions)}`,
  },
  {
    key: 'revenue',
    label: 'Revenue',
    type: 'number',
    render: (item) => `${item.currency} ${formatNumber(item.revenue)}`,
  }
]

const data = [
  {
    campaign: 'Campaign 1',
    clicks: 100,
    cost: 1000,
    conversions: 10,
    revenue: 10000,
    currency: 'USD',
  },
  {
    campaign: 'Campaign 2',
    clicks: 200,
    cost: 2000,
    conversions: 20,
    revenue: 20000,
    currency: 'USD',
  },
  {
    campaign: 'Campaign 3',
    clicks: 300,
    cost: 3000,
    conversions: 30,
    revenue: 30000,
    currency: 'USD',
  },
  {
    campaign: 'Campaign 4',
    clicks: 400,
    cost: 4000,
    conversions: 40,
    revenue: 40000,
    currency: 'USD',
  },
  {
    campaign: 'Campaign 5',
    clicks: 500,
    cost: 5000,
    conversions: 50,
    revenue: 50000,
    currency: 'USD',
  },
  {
    campaign: 'Campaign 6',
    clicks: 600,
    cost: 6000,
    conversions: 60,
    revenue: 60000,
    currency: 'USD',
  }

];


const AdInsightTable = memo(() => {

  return (
    <Card variant="outlined">
      <CardHeader 
        title={
          <Typography variant="h6" >
            Ad Insights
          </Typography>
        }
        sx={{ borderBottom: '1px solid #e0e0e0' }}
      />
      <CardContent>
        <DynamicTable 
          columns={columns} 
          data={data} 
          showTotalRow={data.length > 0}
          defaultTotalRowData={{currency: 'USD'}} />
      </CardContent>
    </Card>
  );
});

export default AdInsightTable;
