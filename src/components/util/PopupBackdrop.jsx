import { cn } from "../../util/util";

const PopupBackdrop = ({ handler, className }) => {
	return (
		<div
			className={cn("w-screen h-screen top-0 left-0 fixed  z-40", className)}
			onClick={handler}
		/>
	);
};

export default PopupBackdrop;
