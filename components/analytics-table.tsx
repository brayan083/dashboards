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
    pageviews: 12345,
    uniquePageviews: 10000,
    avgTimeOnPage: "00:02:30",
    bounceRate: "35%",
  },
  {
    page: "/products",
    pageviews: 9876,
    uniquePageviews: 8000,
    avgTimeOnPage: "00:03:15",
    bounceRate: "40%",
  },
  {
    page: "/about",
    pageviews: 7654,
    uniquePageviews: 6000,
    avgTimeOnPage: "00:01:45",
    bounceRate: "45%",
  },
  {
    page: "/blog",
    pageviews: 5432,
    uniquePageviews: 4000,
    avgTimeOnPage: "00:04:00",
    bounceRate: "30%",
  },
  {
    page: "/contact",
    pageviews: 3210,
    uniquePageviews: 2500,
    avgTimeOnPage: "00:01:30",
    bounceRate: "50%",
  },
]

export type AnalyticsData = {
  page: string
  pageviews: number
  uniquePageviews: number
  avgTimeOnPage: string
  bounceRate: string
}

export const columns: ColumnDef<AnalyticsData>[] = [
  {
    accessorKey: "page",
    header: "Page",
    cell: ({ row }) => <div className="capitalize">{row.getValue("page")}</div>,
  },
  {
    accessorKey: "pageviews",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Pageviews
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      )
    },
    cell: ({ row }) => <div className="text-right">{row.getValue("pageviews")}</div>,
  },
  {
    accessorKey: "uniquePageviews",
    header: "Unique Pageviews",
    cell: ({ row }) => <div className="text-right">{row.getValue("uniquePageviews")}</div>,
  },
  {
    accessorKey: "avgTimeOnPage",
    header: "Avg. Time on Page",
    cell: ({ row }) => <div className="text-right">{row.getValue("avgTimeOnPage")}</div>,
  },
  {
    accessorKey: "bounceRate",
    header: "Bounce Rate",
    cell: ({ row }) => <div className="text-right">{row.getValue("bounceRate")}</div>,
  },
]

export function AnalyticsTable() {
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