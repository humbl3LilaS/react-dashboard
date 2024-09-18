import { cn } from "../../util/util";

const Status = ({ status, bgColor }) => {
	return (
		<span
			className={cn(
				"block py-2 text-center text-white rounded-lg capitalize",
				statusColorParser(status),
			)}>
			{status}
		</span>
	);
};

const statusColorParser = (status) => {
	switch (status) {
		case "pending":
			return "bg-[#FB9678]";
		case "complete":
			return "bg-[#8BE78B]";
		case "active":
			return "bg-[#03C9D7]";
		case "canceled":
			return "bg-[#FF5C8E]";
		case "rejected":
			return "bg-red-500";
	}
};

export default Status;
