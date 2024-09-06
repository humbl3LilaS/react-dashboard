import SettingBtn from "./SettingBtn";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";

const Layout = () => {
	return (
		<section>
			<SideBar />
			<SettingBtn />
			<Outlet />
		</section>
	);
};

export default Layout;
