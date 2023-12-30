import React, { useState }  from "react";
import { Card, CardContent, CardHeader, CardActions, Typography, Select, MenuItem, Stack, Switch  } from '@mui/material';
import DonutPieChart from "../../components/DonutPieChart";
import DynamicTable, { formatNumber } from "../../components/DynamicTable";

const chartMetricData = {
  'clicks': [{name: 'Male', value: 40}, {name: 'Female', value: 35}, {name: 'Unknown', value: 25}],
  'cost': [{name: 'Male', value: 20}, {name: 'Female', value: 60}, {name: 'Unknown', value: 20}],
  'conversions': [{name: 'Male', value: 35}, {name: 'Female', value: 45}, {name: 'Unknown', value: 20}],
  'revenue': [{name: 'Male', value: 45}, {name: 'Female', value: 32}, {name: 'Unknown', value: 23}],
}

const tableColumns = [
  {
    label: 'Gender',
    key: 'gender',
    type: 'string',
  },
  {
    label: 'Clicks',
    key: 'clicks',
    type: 'number',
    render: (item) => `${formatNumber(item.clicks)}`,
  },
  {
    label: 'Cost',
    key: 'cost',
    type: 'number',
    render: (item) => `${item.currency} ${formatNumber(item.cost)}`,
  },
  {
    label: 'Conversions',
    key: 'conversions',
    type: 'number',
    render: (item) => `${formatNumber(item.conversions)}`,
  },
  {
    label: 'Revenue',
    key: 'revenue',
    type: 'number',
    render: (item) => `${item.currency} ${formatNumber(item.cost)}`,
  }
]

const getData = () => {
  const data = [];
  ['Male', 'Female', 'Unknown'].forEach((gender) => {
    let row = { gender, currency: 'USD'};
    Object.keys(chartMetricData).forEach((key) => {
      row[key] = chartMetricData[key].find((item) => item.name === gender)?.value
    })
    data.push(row);
  })
  return data
} 

const colors = ['#FF8042', '#0088FE', '#00C49F']

const AdInsightMetricPieChart = () => {

  const [selectedOption, setSelectedOption] = useState('clicks');
  const [toggle, setToggle] = useState(false);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const onToggleChange = () => {
    setToggle(!toggle);
  }

  return (
    <Card variant="outlined">
    <CardHeader 
      title={
        <Typography variant="h6" >
          Ad Insights
        </Typography>
      }
      sx={{ borderBottom: '1px solid #e0e0e0' }}
      action={
        <CardActions>
          {!toggle && <Select
            value={selectedOption}
            onChange={handleOptionChange}
            inputProps={{ 'aria-label': 'Select Metric' }}
            sx={{ height: 25, width: 140 }} // Set height and width here
          >
            <MenuItem value="" disabled>
              Select Metric
            </MenuItem>
            <MenuItem value="clicks">Clicks</MenuItem>
            <MenuItem value="cost">Cost</MenuItem>
            <MenuItem value="conversions">Conversions</MenuItem>
            <MenuItem value="revenue">Revenue</MenuItem>
          </Select> }
        </CardActions>
      } 
      />
       <CardContent>
        {toggle ? <DynamicTable columns={tableColumns} data={getData()} /> : <DonutPieChart data={chartMetricData[selectedOption]} colors={colors}/>}
        <Stack direction="row" spacing={1} alignItems="center" justifyContent="flex-end">
          <Switch checked={toggle} onChange={onToggleChange} />
        </Stack>
       </CardContent>
      </Card>
  )
}

export default AdInsightMetricPieChart;
