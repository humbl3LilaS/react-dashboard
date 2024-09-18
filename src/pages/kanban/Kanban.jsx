import Board from "../../components/Kanban/Board";
import Container from "../../components/util/Container";
import Header from "../../components/util/Header";
const Kanban = () => {
	return (
		<Container className={"p-10 h-full w-full overflow-y-scroll"}>
			<Header className={"mb-5"}>
				<span className={"text-lg text-gray-400"}>App</span>
				<h1
					className={
						"mt-1 text-3xl font-extrabold tracking-tight text-slate-900"
					}>
					Kanban
				</h1>
			</Header>
			<Board />
		</Container>
	);
};

export default Kanban;
