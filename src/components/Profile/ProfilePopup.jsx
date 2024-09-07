import { useApplicationState } from "../../store/applicationState";

const ProfilePopup = () => {
	const { isProfileActive } = useApplicationState();
	return (
		<>
			{isProfileActive && (
				<div className="relative">
					<h1>Profile pop up</h1>
				</div>
			)}
		</>
	);
};

export default ProfilePopup;
