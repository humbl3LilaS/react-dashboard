import Container from "../components/util/Container";
import Header from "../components/util/Header";
import { useCustomTable } from "../hooks/useCustomTable";

import { customersData } from "../data/Data";
import { customersColumns } from "../columns/customersColums";
const Customers = () => {
	const table = useCustomTable(customersData, customersColumns, {
		paginationSize: 7,
		filterInclude: true,
		filterKey: "CustomerName",
	});

	return (
		<Container className={"p-10 h-full w-full overflow-y-scroll"}>
			<Header className={"mb-5"}>
				<span className={"text-lg text-gray-400"}>Page</span>
				<h1
					className={
						"mt-1 text-3xl font-extrabold tracking-tight text-slate-900"
					}>
					Customers
				</h1>
			</Header>
			{table}
		</Container>
	);
};

export default Customers;
