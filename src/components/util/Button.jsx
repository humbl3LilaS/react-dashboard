import { cn } from "../../util/util";

const Button = ({ children, type, className, handler }) => {
	return (
		<button
			type={type}
			className={cn(className)}
			onClick={handler}>
			{children}
		</button>
	);
};

export default Button;
