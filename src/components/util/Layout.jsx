import NavBar from "../NavBar/NavBar";
import SettingBtn from "./SettingBtn";
import SideBar from "../Sidebar/SideBar";
import { Outlet } from "react-router-dom";
import Container from "./Container";

const Layout = () => {
	return (
		<section className="flex w-screen h-screen">
			<SideBar />
			<Container className={"flex flex-col"}>
				<NavBar />
				<Outlet />
			</Container>
			<SettingBtn />
		</section>
	);
};

export default Layout;
