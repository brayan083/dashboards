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
  { keyword: 'SEO', currentClicks: 1000, previousClicks: 800, currentImpressions: 10000, previousImpressions: 8000, currentPosition: 2.5, previousPosition: 3.2 },
  { keyword: 'Marketing', currentClicks: 800, previousClicks: 700, currentImpressions: 8000, previousImpressions: 7000, currentPosition: 3.2, previousPosition: 3.5 },
  { keyword: 'Analytics', currentClicks: 600, previousClicks: 500, currentImpressions: 6000, previousImpressions: 5000, currentPosition: 4.1, previousPosition: 4.5 },
  { keyword: 'PPC', currentClicks: 400, previousClicks: 300, currentImpressions: 4000, previousImpressions: 3000, currentPosition: 5.3, previousPosition: 5.8 },
  { keyword: 'Content', currentClicks: 200, previousClicks: 150, currentImpressions: 2000, previousImpressions: 1500, currentPosition: 6.7, previousPosition: 7.2 },
];

const ComparisonMetricsTable: React.FC = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Keyword</TableHead>
          <TableHead>Current Clicks</TableHead>
          <TableHead>Previous Clicks</TableHead>
          <TableHead>Current Impressions</TableHead>
          <TableHead>Previous Impressions</TableHead>
          <TableHead>Current Position</TableHead>
          <TableHead>Previous Position</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.keyword}>
            <TableCell>{row.keyword}</TableCell>
            <TableCell>{row.currentClicks}</TableCell>
            <TableCell>{row.previousClicks}</TableCell>
            <TableCell>{row.currentImpressions}</TableCell>
            <TableCell>{row.previousImpressions}</TableCell>
            <TableCell>{row.currentPosition.toFixed(1)}</TableCell>
            <TableCell>{row.previousPosition.toFixed(1)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default ComparisonMetricsTable;