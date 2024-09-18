import DropIndicator from "./DropIndicator";
import { motion } from "framer-motion";

const Card = ({ title, id, column, handleDragStart }) => {
	return (
		<>
			<DropIndicator
				beforeId={id}
				column={column}
			/>
			<motion.div
				layout
				layoutId={id}
				draggable={true}
				onDragStart={(e) => handleDragStart(e, { title, id, column })}
				className={
					"p-3 rounded border border-neutral-700 cursor-grab active:cursor-grabbing"
				}>
				<p className={"text-sm dark:text-neutral-100"}>{title}</p>
			</motion.div>
		</>
	);
};

export default Card;
