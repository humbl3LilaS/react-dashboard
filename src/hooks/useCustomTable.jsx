import {
	getCoreRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
	flexRender,
	getFilteredRowModel,
} from "@tanstack/react-table";

import {
	Table,
	TableBody,
	TableHeader,
	TableHead,
	TableRow,
	TableCell,
} from "../components/ui/Table";
import { useState } from "react";

export const useCustomTable = (
	data,
	columns,
	{ paginationSize, filterInclude, filterKey } = {
		filterInclude: false,
		paginationSize: 5,
		filterKey: undefined,
	},
) => {
	const [sorting, setSorting] = useState([]);
	const [pagination, setPagination] = useState({
		pageIndex: 0,
		pageSize: paginationSize,
	});

	const [rowSelection, setRowSelection] = useState({});

	const [columnFilters, setColumnFilters] = useState([]);

	const table = useReactTable({
		data,
		columns,
		getCoreRowModel: getCoreRowModel(),
		getSortedRowModel: getSortedRowModel(),
		getPaginationRowModel: getPaginationRowModel(),
		getFilteredRowModel: getFilteredRowModel(),
		onPaginationChange: setPagination,
		onSortingChange: setSorting,
		onColumnFiltersChange: setColumnFilters,
		onRowSelectionChange: setRowSelection,
		filterFns: {},
		state: {
			sorting,
			pagination,
			columnFilters,
			rowSelection,
		},
	});

	return (
		<div className="rounded-md border">
			<div className={"py-2 px-4 flex justify-end"}>
				{filterInclude && (
					<input
						type={"text"}
						onChange={(evt) => {
							table.getColumn(filterKey)?.setFilterValue(evt.target.value);
						}}
						placeholder={`filter using ${filterKey.toLowerCase()}....`}
						className={
							"py-2 px-4 bg-gray-200 rounded-md border border-gray-500 focus:outline-none"
						}
					/>
				)}
			</div>
			<Table>
				<TableHeader>
					{table.getHeaderGroups().map((headerGroup) => (
						<TableRow key={headerGroup.id}>
							{headerGroup.headers.map((header) => {
								return (
									<TableHead
										key={header.id}
										onClick={header.column.getToggleSortingHandler()}
										className={"cursor-pointer"}>
										{header.isPlaceholder
											? null
											: flexRender(
													header.column.columnDef.header,
													header.getContext(),
											  )}
									</TableHead>
								);
							})}
						</TableRow>
					))}
				</TableHeader>
				<TableBody>
					{table.getRowModel().rows?.length ? (
						table.getRowModel().rows.map((row) => (
							<TableRow
								key={row.id}
								data-state={row.getIsSelected() && "selected"}>
								{row.getVisibleCells().map((cell) => (
									<TableCell key={cell.id}>
										{flexRender(cell.column.columnDef.cell, cell.getContext())}
									</TableCell>
								))}
							</TableRow>
						))
					) : (
						<TableRow>
							<TableCell
								colSpan={data.length}
								className="h-24 text-center">
								No results.
							</TableCell>
						</TableRow>
					)}
				</TableBody>
			</Table>
			<div className={"mb-5 flex justify-center items-center gap-x-4"}>
				<button
					className={
						"py-2 px-4 bg-slate-800 text-white font-bold rounded-lg cursor-pointer disabled:bg-gray-400"
					}
					onClick={() => table.previousPage()}
					disabled={!table.getCanPreviousPage()}
					type={"button"}>
					Previous
				</button>
				<button
					className={
						"py-2 px-4 bg-slate-800 text-white font-bold rounded-lg cursor-pointer disabled:bg-gray-400"
					}
					onClick={() => table.nextPage()}
					disabled={!table.getCanNextPage()}>
					Next
				</button>
			</div>
		</div>
	);
};
