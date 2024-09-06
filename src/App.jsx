import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/Layout";

const routes = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				index: true,
				element: <h1>hello</h1>,
			},
			{
				path: "ecommerce",
				element: <h1>ECommerce</h1>,
			},

			// pages
			{
				path: "orders",
				element: <h1>Orders</h1>,
			},
			{
				path: "employees",
				element: <h1>Employees</h1>,
			},
			{
				path: "customers",
				element: <h1>customers</h1>,
			},

			// apps
			{
				path: "kanban",
				element: <h1>kanban</h1>,
			},
			{
				path: "editor",
				element: <h1>editor</h1>,
			},
			{
				path: "calendar",
				element: <h1>Calendar</h1>,
			},
			{
				path: "color-picker",
				element: <h1>Color Picker</h1>,
			},

			// charts
			{
				path: "line",
				element: <h1>Line chart</h1>,
			},
			{
				path: "area",
				element: <h1>Area Chart</h1>,
			},
			{
				path: "pie",
				element: <h1>Pie Chart</h1>,
			},
			{
				path: "financial",
				element: <h1>Financial Chart</h1>,
			},
			{
				path: "color-mapping",
				element: <h1>Color Mapping</h1>,
			},
			{
				path: "pyramid",
				element: <h1>Pyramid Chart</h1>,
			},
			{
				path: "stacked",
				element: <h1>Stacked Chart</h1>,
			},
		],
	},
]);

function App() {
	return <RouterProvider router={routes} />;
}

export default App;
