import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import {  Grid, Typography, Box  } from '@mui/material';

const percentageValue = (value, totalValue) => {
  if(!totalValue) return '-'
  return Math.round((value / totalValue) * 100);
}

const DonutPieChart = ({data, colors}) => {

  const totalValue = data.reduce((acc, item) => acc + item.value, 0);

  return (
    <Grid container spacing={2} alignItems="center" justifyContent="center">
      <Grid item xs={12} sm={6}>
        <ResponsiveContainer width="100%" height={390}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={120}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </Grid>
      <Grid item xs={12} sm={6}> 
        <Box display="flex" flexDirection="column">
          {data.map((entry, index) => (
            <Box display="flex" alignItems="center" key={`legend-${index}`} marginBottom="30px">
              <Box
                width={50}
                height={15}
                borderRadius="20%"
                marginRight={1}
                bgcolor={colors[index % colors.length]}
              />
              <Typography variant="h7">{`${percentageValue(entry.value, totalValue)}% ${entry.name}`}</Typography>
            </Box>
          ))}
        </Box>
      </Grid>
    </Grid>
  );
};

export default DonutPieChart;
