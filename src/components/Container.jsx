import { useSideBarState } from "../store/sideBarState";
import { cn } from "../util/util";

const Container = ({ children }) => {
	const { active, setActive } = useSideBarState();
	return (
		<div
			className={cn(
				"min-h-screen w-full bg-main-bg dark:bg-main-dark-bg md:ml-27",
				active ? "md:ml-72" : "flex-2",
			)}>
			{children}
			<button
				type="button"
				onClick={() => setActive(!active)}>
				Toggle
			</button>
		</div>
	);
};

export default Container;
