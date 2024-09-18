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
			{table}
		</Container>
	);
};

export default Orders;
