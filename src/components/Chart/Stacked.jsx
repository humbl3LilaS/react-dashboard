import { Bar, BarChart, Legend, Tooltip, XAxis, YAxis } from "recharts";

import { stackedChartData } from "../../data/Data";

const Stacked = ({ height, width }) => {
	return (
		<BarChart
			width={width}
			height={height}
			data={stackedChartData}>
			<XAxis dataKey={"x"} />
			<YAxis />
			<Tooltip />
			<Legend />
			<Bar dataKey={"Budget"} />
			<Bar
				dataKey={"Expense"}
				fill="#82ca9d"
			/>
		</BarChart>
	);
};

export default Stacked;
