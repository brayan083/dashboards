"use client"

import * as React from "react"
import {
  ColumnDef,
  ColumnFiltersState,
  SortingState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table"
import { ArrowUpDown, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const data = [
  {
    page: "/home",
    clicks: 1234,
    impressions: 56789,
    ctr: "2.17%",
    position: 3.2,
  },
  {
    page: "/products",
    clicks: 987,
    impressions: 45678,
    ctr: "2.16%",
    position: 4.5,
  },
  {
    page: "/about",
    clicks: 765,
    impressions: 34567,
    ctr: "2.21%",
    position: 5.1,
  },
  {
    page: "/blog",
    clicks: 543,
    impressions: 23456,
    ctr: "2.31%",
    position: 6.3,
  },
  {
    page: "/contact",
    clicks: 321,
    impressions: 12345,
    ctr: "2.60%",
    position: 7.8,
  },
]

export type SearchConsoleData = {
  page: string
  clicks: number
  impressions: number
  ctr: string
  position: number
}

export const columns: ColumnDef<SearchConsoleData>[] = [
  {
    accessorKey: "page",
    header: "Page",
    cell: ({ row }) => <div className="capitalize">{row.getValue("page")}</div>,
  },
  {
    accessorKey: "clicks",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Clicks
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="text-right">{row.getValue("clicks")}</div>,
  },
  {
    accessorKey: "impressions",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Impressions
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="text-right">{row.getValue("impressions")}</div>,
  },
  {
    accessorKey: "ctr",
    header: "CTR",
    cell: ({ row }) => <div className="text-right">{row.getValue("ctr")}</div>,
  },
  {
    accessorKey: "position",
    header: "Avg. Position",
    cell: ({ row }) => <div className="text-right">{row.getValue("position")}</div>,
  },
]

export function SearchConsoleTable() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
    },
  })

  return (
    <div className="w-full">
      <div className="flex items-center py-4">
        <Input
          placeholder="Filter pages..."
          value={(table.getColumn("page")?.getFilterValue() as string) ?? ""}
          onChange={(event) =>
            table.getColumn("page")?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
      </div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24 text-center">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  )
}