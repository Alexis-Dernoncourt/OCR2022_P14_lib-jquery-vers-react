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

import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { useState } from "react"
import { DebouncedInput } from "./DebounceInput"

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [itemsPerPage, setItemsperPage] = useState(10)
  const [pageIndex, setPageIndex] = useState(0)
  const [sorting, setSorting] = useState<SortingState>([])
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
  const [globalFilter, setGlobalFilter] = useState("")

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onGlobalFilterChange: setGlobalFilter,
    // globalFilterFn: "fuzzy",
    autoResetPageIndex: false,
    state: {
      sorting,
      columnFilters,
      globalFilter,
    },
  })

  return (
    <>
      <div className="w-full flex flex-row justify-between items-center mb-6">
        <div>
          Show{" "}
          <select
            value={table.getState().pagination.pageSize}
            disabled={table.getPrePaginationRowModel().rows.length < 10}
            onChange={e => {
              table.setPageSize(Number(e.target.value))
              setItemsperPage(Number(e.target.value))
            }}>
            {[10, 20, 30, 40, 50].map(pageSize => (
              <option key={pageSize} value={pageSize}>
                {pageSize}
              </option>
            ))}
          </select>{" "}
          entries
        </div>
        <div>
          <Label className="flex gap-4 items-center !m-0">
            Search:
            <DebouncedInput
              value={globalFilter ?? ""}
              onChange={value => setGlobalFilter(String(value))}
              className="p-2 font-lg shadow border border-block"
              placeholder="Search all columns..."
            />
          </Label>
        </div>
      </div>
      <div className="rounded-md border w-full">
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map(headerGroup => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map(header => {
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
              table.getRowModel().rows.map(row => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}>
                  {row.getVisibleCells().map(cell => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-left lg:text-center">
                  No data available in table
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <div className="flex flex-wrap w-full items-center justify-between space-x-2 py-4">
        <div className="!m-0 pb-4">
          <p className="text-xs text-slate-500 m-0">
            Showing
            {!columnFilters.length
              ? `
              ${pageIndex + 1} to
              ${table.getPrePaginationRowModel().rows.length > pageIndex + 1 * itemsPerPage ? pageIndex + 1 * itemsPerPage : table.getPrePaginationRowModel().rows.length} of
              ${table.getPrePaginationRowModel().rows.length}
            `
              : `
              ${Number(table.getRowModel().rows.length) || 0}
            `}
            entries.
          </p>
          <p className="text-xs text-slate-500 m-0">
            Page {table.getState().pagination.pageIndex + 1} sur{" "}
            {table.getPageCount()}
          </p>
        </div>
        <div className="flex space-x-10">
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              table.previousPage()
              setPageIndex(pageIndex - itemsPerPage)
            }}
            disabled={!table.getCanPreviousPage()}>
            Previous
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => {
              table.nextPage()
              setPageIndex(pageIndex + itemsPerPage)
            }}
            disabled={!table.getCanNextPage()}>
            Next
          </Button>
        </div>
      </div>
    </>
  )
}
