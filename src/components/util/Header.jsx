import { cn } from "../../util/util";

const Header = ({ className, children }) => {
	return <div className={cn(className)}>{children}</div>;
};

export default Header;
