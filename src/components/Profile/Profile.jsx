import ProfilePopup from "./ProfilePopup";
import ProfileToggle from "./ProfileToggle";

const Profile = () => {
	return (
		<li className="relative">
			<ProfileToggle />
			<ProfilePopup />
		</li>
	);
};

export default Profile;
