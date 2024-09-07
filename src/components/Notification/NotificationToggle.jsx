import { useApplicationState } from "../../store/applicationState";
import NavBtn from "../NavBar/NavBtn";
import { RiNotification3Line } from "react-icons/ri";

const NotificationToggle = () => {
	const { isNotificationActive, setNotificationActive } = useApplicationState();
	return (
		<NavBtn handler={() => setNotificationActive(!isNotificationActive)}>
			<RiNotification3Line />
		</NavBtn>
	);
};

export default NotificationToggle;
