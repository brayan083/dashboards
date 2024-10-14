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
  { landing: '/home', oldPosition: 3, newPosition: 1, change: 2 },
  { landing: '/products', oldPosition: 7, newPosition: 5, change: 2 },
  { landing: '/blog', oldPosition: 12, newPosition: 8, change: 4 },
  { landing: '/about', oldPosition: 15, newPosition: 10, change: 5 },
  { landing: '/contact', oldPosition: 20, newPosition: 18, change: 2 },
];

const LandingPositionTable: React.FC = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Landing Page</TableHead>
          <TableHead>Old Position</TableHead>
          <TableHead>New Position</TableHead>
          <TableHead>Change</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.landing}>
            <TableCell>{row.landing}</TableCell>
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

export default LandingPositionTable;