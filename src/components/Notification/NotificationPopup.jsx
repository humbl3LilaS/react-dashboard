import { useApplicationState } from "../../store/applicationState";

const NotificationPopup = () => {
	const { isNotificationActive } = useApplicationState();
	return (
		<>
			{isNotificationActive && (
				<div className="absolute">
					<h1>Notification popup</h1>
				</div>
			)}
		</>
	);
};

export default NotificationPopup;
