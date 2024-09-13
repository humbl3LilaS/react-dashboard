import {
	CartesianGrid,
	Legend,
	Line,
	LineChart,
	Tooltip,
	XAxis,
	YAxis,
} from "recharts";

const SparkLineChart = ({ height, width, data }) => {
	return (
		<LineChart
			width={width}
			height={height}
			data={data}
			margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
			<Tooltip />
			<Line
				type={"monotone"}
				dataKey={"yval"}
				stroke="#8884d8"
			/>
		</LineChart>
	);
};

export default SparkLineChart;
