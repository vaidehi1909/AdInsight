import React, { useState, useMemo } from 'react';
import { Table, TableHead, TableBody, TableRow, TableCell, TableSortLabel } from '@mui/material';

export const formatNumber = (number) => {
  return new Intl.NumberFormat(undefined, { maximumFractionDigits: 2 }).format(number);
}
const DynamicTable = ({ data, columns, showTotalRow=false, defaultTotalRowData={} }) => {
  const [sortColumn, setSortColumn] = useState(null);
  const [sortDirection, setSortDirection] = useState('asc');

  const handleSortChange = (column) => {
    if (sortColumn === column) {
      const newSortDirection = sortDirection === 'asc' ? 'desc' : 'asc';
      setSortDirection(newSortDirection);
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  };

  const sortedData = useMemo(() => {
    const sorted = [...data].sort((a, b) => {
      if (sortColumn) {
        const column = columns.find((col) => col.key === sortColumn);
        if (sortDirection === 'asc') {
          return column?.compare?.(a, b) || (a[column.key] - b[column.key]);
        } else {
          return column?.compare?.(b, a) || (b[column.key] - a[column.key]);
        }
      } else {
        return 0;
      }
    });
    return sorted;
  }, [data, sortColumn, sortDirection, columns]);

  const totalRow = useMemo(() => {
    const row = { ...defaultTotalRowData};
    columns.forEach((column) => {
      if(column.type === 'number')
      row[column.key] = 0;
    });
    data.forEach((item) => {
      columns.forEach((column) => {
        if(column.type === 'number')
        row[column.key] += item[column.key];
      });
    });
    return row;
  }, [data, columns]);

  return (
    <Table>
      <TableHead>
        <TableRow>
          {columns.map((column) => (
            <TableCell key={column.key} sx={{ fontWeight: 'bold' }}>
              <TableSortLabel
                active={sortColumn === column.key}
                direction={sortColumn === column.key ? sortDirection : 'asc'}
                onClick={() => handleSortChange(column.key)}
              >
                {column.label}
              </TableSortLabel>
            </TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {sortedData.map((item, index) => (
          <TableRow key={index}>
            {columns.map((column) => (
              <TableCell key={column.key}>
                {column?.render?.(item) || item[column.key] }
              </TableCell>
            ))}
          </TableRow>
        ))}
         {showTotalRow && <TableRow key='total-row'>
          <TableCell key={'total-column'}>
            <strong>Total</strong>
          </TableCell>
            {columns.slice(1).map((column) => (
              <TableCell key={column.key}>
                {column?.render?.(totalRow) || totalRow[column.key] }
              </TableCell>
            ))}
          </TableRow> }
      </TableBody>
    </Table>
  );
};

export default DynamicTable;
