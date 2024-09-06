import { useState } from "react";
import { cn } from "../util/util";
import { useSideBarState } from "../store/sideBarState";
import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "./Data";

const SideBar = () => {
	const { active, setActive } = useSideBarState();
	return (
		<div
			className={cn(
				"w-72 fixed shadow-sideBar bg-white overflow-visible dark:bg-secondary-dark-bg md:z-50",
				!active && "hidden",
			)}>
			<div className="ml-3 pb-10 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto">
				<div className="p-5 flex items-center justify-between">
					<Link
						to={"/"}
						className=" flex items-center gap-x-4">
						<SiShopware className="text-xl" />{" "}
						<span className="text-xl font-extrabold tracking-tight dark:text-white">
							Edelshop
						</span>
					</Link>
					<button
						type="button"
						className="text-3xl"
						onClick={() => setActive(!active)}>
						<MdOutlineCancel />
					</button>
				</div>
				<nav className="">
					{links.map((item) => (
						<div key={item.title}>
							<span className="mx-3 my-4 block text-gray-400 uppercase">
								{item.title}
							</span>
							<ul>
								{item.links.map((link) => (
									<li key={link.name}>
										<NavLink
											to={`${link.name}`}
											className={({ isActive }) =>
												cn(
													"flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-md m-2",
													isActive
														? "text-emerald-500"
														: "text-gray-700 dark:text-gray-200 dark:hover:bg-light-gray",
												)
											}>
											{link.icon}
											<span className="capitalize">{link.name}</span>
										</NavLink>
									</li>
								))}
							</ul>
						</div>
					))}
				</nav>
			</div>
		</div>
	);
};

export default SideBar;
