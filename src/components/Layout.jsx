import NavBar from "./NavBar";
import SettingBtn from "./SettingBtn";
import SideBar from "./Sidebar/SideBar";
import { Outlet } from "react-router-dom";
import Container from "./Container";

const Layout = () => {
	return (
		<section>
			<SideBar />
			<Container>
				<NavBar />
				<Outlet />
			</Container>
			<SettingBtn />
		</section>
	);
};

export default Layout;
