import { BsCurrencyDollar } from "react-icons/bs";
import { GoDot } from "react-icons/go";
import { IoIosMore } from "react-icons/io";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import Container from "../components/util/Container";
import Button from "../components/util/Button";
import { earningData, SparklineAreaData } from "../data/Data";
import SparkLineChart from "../components/Chart/SparkLine";

const ECommerce = () => {
	return (
		<Container className={"p-10 h-full w-full overflow-y-scroll"}>
			{/* hero */}
			<div
				className={
					"h-48 w-full p-8 rounded-lg bg-white  bg-hero-pattern bg-no-repeat bg-cover bg-center dark:text-gray-200 dark:bg-secondary-dark-bg"
				}>
				<p className={"flex flex-col gap-y-2"}>
					<span className={"text-lg text-gray-400 font-bold"}>Earnings</span>
					<span className={"text-2xl font-bold"}>$75,445.87</span>
				</p>
				<Button
					className={
						"mt-3 py-2 px-4 bg-blue-600 text-white rounded-lg font-semibold hover:drop-shadow-xl"
					}>
					Download
				</Button>
			</div>

			{/* earning */}
			<div
				className={
					"w-full my-3 flex flex-wrap justify-center items-center gap-2 lg:gap-4"
				}>
				{earningData.map((item) => (
					<div
						key={item.title}
						className={
							"h-48 w-[45%] p-4 pt-9 rounded-2xl bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56"
						}>
						<button
							type={"button"}
							style={{ color: item.iconColor, backgroundColor: item.iconBg }}
							className={
								"p-4 rounded-full opacity-90 text-2xl hover:drop-shadow-xl"
							}>
							{item.icon}
						</button>
						<p className={"mt-2"}>
							<span className={"text-lg font-semibold"}>{item.amount}</span>
							<span className={`text-sm text-${item.pcColor}`}>
								{item.percentage}
							</span>
						</p>
						<p className={"mt-1 text-sm text-gray-400"}>{item.title}</p>
					</div>
				))}
			</div>

			{/* Revenue Updates */}
			<div className={"flex flex-wrap justify-center gap-10 "}>
				<div
					className={
						"m-3 p-4 rounded-2xl bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-780"
					}>
					<div className={"flex justify-between"}>
						<p className={"text-xl font-semibold"}>Revenue Updates</p>
						<div className={"flex items-center gap-4"}>
							<p className="flex items-center gap-2 text-gray-600 hover:drop-shadow-xl">
								<span>
									<GoDot />
								</span>
								<span>Expense</span>
							</p>
							<p className="flex items-center gap-2 text-green-400 hover:drop-shadow-xl">
								<span>
									<GoDot />
								</span>
								<span>Budget</span>
							</p>
						</div>
					</div>
				</div>
				<div className="w-full mt-5 flex gap-10 flex-wrap justify-center">
					<div className=" border-r-1 border-color m-4 pr-10">
						<div>
							<p>
								<span className="text-3xl font-semibold">$93,438</span>
								<span className="p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs">
									23%
								</span>
							</p>
							<p className="text-gray-500 mt-1">Budget</p>
						</div>
						<div className="mt-8">
							<p className="text-3xl font-semibold">$48,487</p>

							<p className="text-gray-500 mt-1">Expense</p>
						</div>
					</div>
					<div className={"mt-5 h-full "}>
						<SparkLineChart
							height={250}
							width={400}
							data={SparklineAreaData}
						/>
					</div>
				</div>
			</div>
		</Container>
	);
};

export default ECommerce;
