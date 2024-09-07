import { useApplicationState } from "../../store/applicationState";

const ChatPopup = () => {
	const { isChatActive } = useApplicationState();
	return (
		<>
			{isChatActive && (
				<div className="absolute">
					<h1>Chat</h1>
				</div>
			)}
		</>
	);
};

export default ChatPopup;
