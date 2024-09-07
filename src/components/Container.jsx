/* eslint-disable react/prop-types */
import { cn } from "../util/util";

const Container = ({ children, className }) => {
	return (
		<div
			className={cn(
				"min-h-screen w-full bg-main-bg dark:bg-main-dark-bg",
				className,
			)}>
			{children}
		</div>
	);
};

export default Container;
