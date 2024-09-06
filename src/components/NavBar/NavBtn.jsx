import { cn } from "../../util/util";

const NavBtn = ({ children, handler, className, hidden }) => {
	return (
		<button
			className={cn(
				"p-3 relative rounded-full text-xl hover:bg-light-gray",
				hidden && "hidden",
				className,
			)}
			onClick={handler}>
			<span
				className={"h-2 w-2 absolute right-2 top-2 inline-flex rounded-full"}
			/>
			{children}
		</button>
	);
};

export default NavBtn;
