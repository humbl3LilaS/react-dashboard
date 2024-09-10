import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/util/Layout";
import ECommerce from "./pages/ECommerce";
import Orders from "./pages/Orders";
import Employee from "./pages/Employee";
import Customers from "./pages/Customers";
import Kanban from "./pages/Kanban";
import Editor from "./pages/Editor";
import Calendar from "./pages/Calendar";
import ColorPicker from "./pages/ColorPicker";
import LineChart from "./pages/charts/LineChart";
import AreaChart from "./pages/charts/AreaChart";
import FinancialChart from "./pages/charts/FinancialChart";
import ColorMapping from "./pages/charts/ColorMapping";
import Pyramid from "./pages/charts/Pyramid";
import StackedChart from "./pages/charts/StackedChart";
import PieChart from "./pages/charts/PieChart";
import BarChart from "./pages/charts/BarChart";

const routes = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <ECommerce />,
			},

			// pages
			{
				path: "orders",
				element: <Orders />,
			},
			{
				path: "employees",
				element: <Employee />,
			},
			{
				path: "customers",
				element: <Customers />,
			},

			// apps
			{
				path: "kanban",
				element: <Kanban />,
			},
			{
				path: "editor",
				element: <Editor />,
			},
			{
				path: "calendar",
				element: <Calendar />,
			},
			{
				path: "color-picker",
				element: <ColorPicker />,
			},

			// charts
			{
				path: "line",
				element: <LineChart />,
			},
			{
				path: "area",
				element: <AreaChart />,
			},
			{
				path: "pie",
				element: <PieChart />,
			},
			{
				path: "bar",
				element: <BarChart />,
			},
			{
				path: "financial",
				element: <FinancialChart />,
			},
			{
				path: "color-mapping",
				element: <ColorMapping />,
			},
			{
				path: "pyramid",
				element: <Pyramid />,
			},
			{
				path: "stacked",
				element: <StackedChart />,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={routes} />;
}

export default App;
