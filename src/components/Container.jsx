import { useApplicationState } from "../store/applicationState";
import { cn } from "../util/util";

const Container = ({ children }) => {
	const { isSideBarActive, setSideBarActive } = useApplicationState();
	return (
		<div
			className={cn(
				"min-h-screen w-full bg-main-bg dark:bg-main-dark-bg md:ml-27",
				isSideBarActive ? "md:ml-72" : "flex-2",
			)}>
			{children}
			<button
				type="button"
				onClick={() => setSideBarActive(!isSideBarActive)}>
				Toggle
			</button>
		</div>
	);
};

export default Container;
