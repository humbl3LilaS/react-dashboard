import { MdKeyboardArrowDown } from "react-icons/md";

import avatar from "../../assets/images/avatar.jpg";
import { useApplicationState } from "../../store/applicationState";

const ProfileToggle = () => {
	const { isProfileActive, setProfileActive } = useApplicationState();

	return (
		<li
			className="p-1 flex items-center gap-2 cursor-pointer rounded-lg hover:bg-light-gray"
			onClick={() => setProfileActive(!isProfileActive)}>
			<img
				src={avatar}
				alt="profile image"
				className="rounded-full w-8 h-8"
			/>
			<p className={"text-gray-400 text-14"}>
				<span>Hi, </span>
				<span className="ml-1 font-bold">Michel</span>
			</p>
			<MdKeyboardArrowDown className="text-14 text-gray-400" />
		</li>
	);
};

export default ProfileToggle;
