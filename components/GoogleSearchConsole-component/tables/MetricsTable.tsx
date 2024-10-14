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
  { keyword: 'SEO', clicks: 1000, impressions: 10000, position: 2.5 },
  { keyword: 'Marketing', clicks: 800, impressions: 8000, position: 3.2 },
  { keyword: 'Analytics', clicks: 600, impressions: 6000, position: 4.1 },
  { keyword: 'PPC', clicks: 400, impressions: 4000, position: 5.3 },
  { keyword: 'Content', clicks: 200, impressions: 2000, position: 6.7 },
];

const MetricsTable: React.FC = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Keyword</TableHead>
          <TableHead>Clicks</TableHead>
          <TableHead>Impressions</TableHead>
          <TableHead>Position</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.keyword}>
            <TableCell>{row.keyword}</TableCell>
            <TableCell>{row.clicks}</TableCell>
            <TableCell>{row.impressions}</TableCell>
            <TableCell>{row.position.toFixed(1)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default MetricsTable;