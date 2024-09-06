import { MdKeyboardArrowDown } from "react-icons/md";

import avatar from "../../assets/images/avatar.jpg";
import SideBarToggle from "./SideBarToggle";
import CartToggle from "./CartToggle";
import ChatToggle from "./ChatToggle";
import NotificationToggle from "./NotificationToggle";
import ProfileToggle from "./ProfileToggle";

const NavBar = () => {
	return (
		<div className="p-2 relative md:px-4">
			<nav>
				<ul className="flex justify-end items-center gap-x-4">
					<li>
						<SideBarToggle />
					</li>
					<li>
						<CartToggle />
					</li>
					<li>
						<ChatToggle />
					</li>
					<li>
						<NotificationToggle />
					</li>
					<ProfileToggle />
				</ul>
			</nav>
		</div>
	);
};

export default NavBar;
