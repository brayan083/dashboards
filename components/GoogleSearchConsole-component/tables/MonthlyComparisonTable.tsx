"use client"

import React from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const data = [
  { month: 'January', clicks: 1000, impressions: 10000, ctr: 10, position: 2.5 },
  { month: 'February', clicks: 1200, impressions: 12000, ctr: 10, position: 2.3 },
  { month: 'March', clicks: 1500, impressions: 15000, ctr: 10, position: 2.1 },
  { month: 'April', clicks: 1800, impressions: 18000, ctr: 10, position: 1.9 },
  { month: 'May', clicks: 2000, impressions: 20000, ctr: 10, position: 1.8 },
];

const MonthlyComparisonTable: React.FC = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Month</TableHead>
          <TableHead>Clicks</TableHead>
          <TableHead>Impressions</TableHead>
          <TableHead>CTR (%)</TableHead>
          <TableHead>Position</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.month}>
            <TableCell>{row.month}</TableCell>
            <TableCell>{row.clicks}</TableCell>
            <TableCell>{row.impressions}</TableCell>
            <TableCell>{row.ctr.toFixed(2)}%</TableCell>
            <TableCell>{row.position.toFixed(1)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MonthlyComparisonTable;