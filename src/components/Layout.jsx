import { useState } from "react";
import NavBar from "./NavBar";
import SettingBtn from "./SettingBtn";
import SideBar from "./SideBar";
import { Outlet } from "react-router-dom";
import { cn } from "../util/util";

const Layout = () => {
	const [active, setActive] = useState(true);
	return (
		<section>
			<SideBar />
			<div
				className={cn(
					"min-h-screen w-full bg-main-bg dark:bg-main-dark-bg md:ml-27",
					active ? "md:ml-72" : "flex-2",
				)}>
				<NavBar />
				<Outlet />
			</div>
			<SettingBtn />
		</section>
	);
};

export default Layout;
