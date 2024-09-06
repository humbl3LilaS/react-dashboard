import { useState } from "react";
import { cn } from "../util/util";

const SideBar = () => {
	const [active, setActive] = useState(true);
	return (
		<div
			className={cn(
				"w-72 fixed shadow-sideBar bg-white dark:bg-secondary-dark-bg md:z-50",
				!active && "hidden",
			)}>
			<h1>side bar</h1>
		</div>
	);
};

export default SideBar;
