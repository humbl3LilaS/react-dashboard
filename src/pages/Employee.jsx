import Container from "../components/util/Container";
import Header from "../components/util/Header";
import { useCustomTable } from "../hooks/useCustomTable";
import { employeesData } from "../data/Data";
import { employeesColumns } from "../columns/emplyoeesColumns";

const Employee = () => {
	const table = useCustomTable(employeesData, employeesColumns, {
		paginationSize: 10,
		filterInclude: true,
		filterKey: "Name",
	});

	return (
		<Container className={"p-10 h-full w-full overflow-y-scroll"}>
			<Header className={"mb-5"}>
				<span className={"text-lg text-gray-400"}>Page</span>
				<h1
					className={
						"mt-1 text-3xl font-extrabold tracking-tight text-slate-900"
					}>
					Employees
				</h1>
			</Header>
			{table}
		</Container>
	);
};

export default Employee;
