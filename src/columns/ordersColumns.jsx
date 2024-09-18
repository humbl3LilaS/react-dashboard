import { createColumnHelper } from "@tanstack/react-table";
import Status from "../components/util/Status";

const columnHelper = createColumnHelper();

export const orderColumns = [
	columnHelper.accessor("ProductImage", {
		header: () => <span>Image</span>,
		cell: (info) => (
			<img
				src={info.getValue()}
				alt={"product image"}
				className={"aspect-square w-16 rounded-md"}
			/>
		),
	}),

	columnHelper.accessor("OrderItems", {
		header: () => <span>Order Item</span>,
		cell: (info) => <span>{info.getValue()}</span>,
	}),
	columnHelper.accessor("CustomerName", {
		header: () => <span>Customer Name</span>,
		cell: (info) => <span>{info.getValue()}</span>,
	}),
	columnHelper.accessor("TotalAmount", {
		header: () => <span>Total Amount</span>,
		cell: (info) => <span>{info.getValue()}</span>,
	}),
	columnHelper.accessor("Status", {
		header: () => <span>Status</span>,
		cell: (info) => (
			<Status
				status={info.getValue()}
				bgColor={info.row.original.StatusBg}
			/>
		),
	}),
	columnHelper.accessor("OrderID", {
		header: () => <span>Order ID</span>,
		cell: (info) => <span>{info.getValue()}</span>,
	}),
	columnHelper.accessor("Location", {
		header: () => <span>Location</span>,
		cell: (info) => <span>{info.getValue()}</span>,
	}),
];
