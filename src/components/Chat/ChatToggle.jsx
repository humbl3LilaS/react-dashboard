import { useApplicationState } from "../../store/applicationState";
import NavBtn from "../NavBar/NavBtn";
import { BsChatLeft } from "react-icons/bs";

const ChatToggle = () => {
	const { isChatActive, setChatActive } = useApplicationState();

	return (
		<NavBtn handler={() => setChatActive(!isChatActive)}>
			<BsChatLeft />
		</NavBtn>
	);
};

export default ChatToggle;
