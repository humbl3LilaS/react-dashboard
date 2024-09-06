/* eslint-disable react/prop-types */
import { useApplicationState } from "../store/applicationState";
import { cn } from "../util/util";

const Container = ({ children }) => {
	const { isSideBarActive } = useApplicationState();
	return (
		<div
			className={cn(
				"min-h-screen w-full bg-main-bg dark:bg-main-dark-bg",
				isSideBarActive ? "w-4/5" : "flex-2",
			)}>
			{children}
		</div>
	);
};

export default Container;
