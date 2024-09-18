import { createColumnHelper } from "@tanstack/react-table";

const columnHelper = createColumnHelper();

export const employeesColumns = [
	columnHelper.accessor("Name", {
		header: () => <span>Employee</span>,
		cell: (info) => (
			<div>
				<img
					src={info.row.original.EmployeeImage}
					alt={"Employee Image"}
					className={"aspect-square w-8 rounded-full inline-block mr-3"}
				/>
				<span>{info.getValue()}</span>
			</div>
		),
	}),
	columnHelper.accessor("Title", {
		header: () => <span>Designation</span>,
		cell: (info) => <span>{info.getValue()}</span>,
	}),
	columnHelper.accessor("Country", {
		header: () => <span>Country</span>,
		cell: (info) => <span>{info.getValue()}</span>,
	}),
	columnHelper.accessor("HireDate", {
		header: () => <span>Hire Date</span>,
		cell: (info) => <span>{info.getValue()}</span>,
	}),
	columnHelper.accessor("ReportsTo", {
		header: () => <span>Reports To</span>,
		cell: (info) => <span>{info.getValue()}</span>,
	}),
	columnHelper.accessor("EmployeeID", {
		header: () => <span>ID</span>,
		cell: (info) => <span>{info.getValue()}</span>,
	}),
];
