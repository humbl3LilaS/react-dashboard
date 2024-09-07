import SideBarToggle from "../Sidebar/SideBarToggle";
import Chat from "../Chat/Chat";
import Notification from "../Notification/Notification";

import Cart from "../Cart/Cart";
import Profile from "../Profile/Profile";

const NavBar = () => {
	return (
		<div className="p-2 relative md:px-4">
			<nav>
				<ul className="flex justify-end items-center gap-x-4">
					<li className="mr-auto">
						<SideBarToggle />
					</li>

					<Cart />

					<Chat />

					<Notification />

					<Profile />
				</ul>
			</nav>
		</div>
	);
};

export default NavBar;
