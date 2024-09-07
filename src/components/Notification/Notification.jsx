import NotificationPopup from "./NotificationPopup";
import NotificationToggle from "./NotificationToggle";

const Notification = () => {
	return (
		<li className="relative">
			<NotificationToggle />
			<NotificationPopup />
		</li>
	);
};

export default Notification;
