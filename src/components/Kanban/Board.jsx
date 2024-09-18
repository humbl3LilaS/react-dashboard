import { useState } from "react";
import Column from "./Column";

const DEFAULT_CARDS = [
	// BACKLOG

	{ title: "Look into render bug in dashboard", id: "1", column: "backlog" },

	{ title: "SOX compliance checklist", id: "2", column: "backlog" },

	{ title: "[SPIKE] Migrate to Azure", id: "3", column: "backlog" },

	{ title: "Document Notifications service", id: "4", column: "backlog" },

	// TODO

	{
		title: "Research DB options for new microservice",

		id: "5",

		column: "todo",
	},

	{ title: "Postmortem for outage", id: "6", column: "todo" },

	{ title: "Sync with product on Q3 roadmap", id: "7", column: "todo" },

	// DOING

	{
		title: "Refactor context providers to use Zustand",

		id: "8",

		column: "doing",
	},

	{ title: "Add logging to daily CRON", id: "9", column: "doing" },

	// DONE

	{
		title: "Set up DD dashboards for Lambda listener",

		id: "10",

		column: "done",
	},
];

const Board = () => {
	const [cards, setCards] = useState(DEFAULT_CARDS);

	return (
		<div
			className={
				"p-12 flex h-full w-full justify-center gap-x-20 overflow-scroll"
			}>
			<Column
				title={"Todo"}
				column={"todo"}
				headingColor={"text-yellow-500"}
				cards={cards}
				setCards={setCards}
			/>
			<Column
				title={"In progress"}
				column={"doing"}
				headingColor={"text-blue-500"}
				cards={cards}
				setCards={setCards}
			/>
			<Column
				title={"Complete"}
				column={"done"}
				headingColor={"text-emerald-500"}
				cards={cards}
				setCards={setCards}
			/>
		</div>
	);
};

export default Board;
