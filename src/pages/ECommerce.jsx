import { BsCurrencyDollar } from "react-icons/bs";
import { GoDot } from "react-icons/go";
import { IoIosMore } from "react-icons/io";
import { DropDownListComponent } from "@syncfusion/ej2-react-dropdowns";
import Container from "../components/util/Container";

const ECommerce = () => {
	return (
		<Container className={"p-10 h-full w-full"}>
			{/* hero */}
			<div
				className={
					"h-48 w-full p-8 rounded-lg bg-white  bg-hero-pattern bg-no-repeat bg-cover bg-center dark:text-gray-200 dark:bg-secondary-dark-bg"
				}>
				<p className={"flex flex-col gap-y-2"}>
					<span className={"text-lg text-gray-400 font-bold"}>Earnings</span>
					<span className={"text-2xl font-bold"}>$75,445.87</span>
				</p>
			</div>
		</Container>
	);
};

export default ECommerce;
