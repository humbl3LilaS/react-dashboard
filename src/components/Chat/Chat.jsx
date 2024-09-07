import ChatPopup from "./ChatPopup";
import ChatToggle from "./ChatToggle";

const Chat = () => {
	return (
		<li className="relative">
			<ChatToggle />
			<ChatPopup />
		</li>
	);
};

export default Chat;
