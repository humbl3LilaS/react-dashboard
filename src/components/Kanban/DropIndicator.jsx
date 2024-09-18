const DropIndicator = ({ beforeId, column }) => {
	return (
		<div
			className={"w-full h-0.5 my-0.5 bg-violet-400 opacity-0"}
			data-before={beforeId || "-1"}
			data-column={column}
		/>
	);
};

export default DropIndicator;
