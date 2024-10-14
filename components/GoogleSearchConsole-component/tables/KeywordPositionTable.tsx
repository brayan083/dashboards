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
  { keyword: 'SEO', oldPosition: 5, newPosition: 2, change: 3 },
  { keyword: 'Marketing', oldPosition: 10, newPosition: 7, change: 3 },
  { keyword: 'Analytics', oldPosition: 15, newPosition: 12, change: 3 },
  { keyword: 'PPC', oldPosition: 8, newPosition: 6, change: 2 },
  { keyword: 'Content', oldPosition: 20, newPosition: 15, change: 5 },
];

const KeywordPositionTable: React.FC = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Keyword</TableHead>
          <TableHead>Old Position</TableHead>
          <TableHead>New Position</TableHead>
          <TableHead>Change</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.keyword}>
            <TableCell>{row.keyword}</TableCell>
            <TableCell>{row.oldPosition}</TableCell>
            <TableCell>{row.newPosition}</TableCell>
            <TableCell className={row.change > 0 ? 'text-green-600' : 'text-red-600'}>
              {row.change > 0 ? `+${row.change}` : row.change}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default KeywordPositionTable;