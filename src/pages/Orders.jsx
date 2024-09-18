import Container from "../components/util/Container";
import Header from "../components/util/Header";

import { ordersData } from "../data/Data";
import { orderColumns } from "../columns/ordersColumns";
import { useCustomTable } from "../hooks/useCustomTable";

const Orders = () => {
	const table = useCustomTable(ordersData, orderColumns, {
		paginationSize: 10,
	});

	return (
		<Container className={"p-10 h-full w-full overflow-y-scroll"}>
			<Header className={"mb-5"}>
				<span className={"text-lg text-gray-400"}>Page</span>
				<h1
					className={
						"mt-1 text-3xl font-extrabold tracking-tight text-slate-900"
					}>
					Order
				</h1>
			</Header>

			{/* {Todo: refactor the table into hooks} */}
			{/* <div className="rounded-md border">
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
											{flexRender(
												cell.column.columnDef.cell,
												cell.getContext(),
											)}
										</TableCell>
									))}
								</TableRow>
							))
						) : (
							<TableRow>
								<TableCell
									colSpan={ordersData.length}
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
							"py-2 px-4 bg-slate-800 text-white font-bold rounded-lg cursor-pointer"
						}
						onClick={() => table.nextPage()}
						disabled={!table.getCanNextPage()}>
						Next
					</button>
				</div>
			</div> */}
			{table}
		</Container>
	);
};

export default Orders;
