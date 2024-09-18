import { createColumnHelper } from "@tanstack/react-table";
import CustomerStatus from "../components/util/CustomerStatus";

const columnHelper = createColumnHelper();

export const customersColumns = [
	columnHelper.accessor("CustomerID", {
		header: ({ table }) => (
			<input
				type={"checkbox"}
				checked={table.getIsAllPageRowsSelected()}
				onChange={(evt) =>
					table.toggleAllPageRowsSelected(!!evt.target.checked)
				}
			/>
		),
		cell: ({ row }) => (
			<input
				type={"checkbox"}
				checked={row.getIsSelected()}
				onChange={(evt) => {
					row.toggleSelected(!!evt.target.checked);
					console.log(evt.target);
				}}
			/>
		),
		enableSorting: false,
	}),
	columnHelper.accessor("CustomerName", {
		header: () => <span>Name</span>,
		cell: (info) => (
			<div>
				<img
					src={info.row.original.CustomerImage}
					alt={"Customer Image"}
					className={"aspect-square w-8 rounded-full inline-block mr-3"}
				/>
				<span>{info.getValue()}</span>
			</div>
		),
	}),
	columnHelper.accessor("ProjectName", {
		header: () => <span>Project Name</span>,
		cell: (info) => <span>{info.getValue()}</span>,
	}),
	columnHelper.accessor("Status", {
		header: () => <span>Status</span>,
		cell: (info) => <CustomerStatus status={info.getValue()} />,
	}),
	columnHelper.accessor("Weeks", {
		header: () => <span>Weeks</span>,
		cell: (info) => <span>{info.getValue()}</span>,
	}),
	columnHelper.accessor("Budget", {
		header: () => <span>Budget</span>,
		cell: (info) => <span>{info.getValue()}</span>,
	}),
	columnHelper.accessor("Location", {
		header: () => <span>Location</span>,
		cell: (info) => <span>{info.getValue()}</span>,
	}),
];
