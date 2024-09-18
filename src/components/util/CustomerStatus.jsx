import { cn } from "../../util/util";

const CustomerStatus = ({ status }) => {
	return (
		<div className={"flex justify-start items-center gap-x-4"}>
			<div className={cn("w-3 h-3 rounded-full", statusParser(status))}>
				&nbsp;
			</div>
			<span>{status}</span>
		</div>
	);
};

const statusParser = (status) => {
	switch (status.toLowerCase()) {
		case "active":
			return "bg-[#8BE78B]";
		case "pending":
			return "bg-[#FEC90F]";
		case "completed":
			return "bg-[#8BE78B]";
		case "cancel":
			return "bg-red-400";
	}
};

export default CustomerStatus;
