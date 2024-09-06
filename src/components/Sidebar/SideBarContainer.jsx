import { Link } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { useApplicationState } from "../../store/applicationState";
import { cn } from "../../util/util";

export const SideBarContainer = ({ children }) => {
	const { isSideBarActive, setSideBarActive } = useApplicationState();
	return (
		<div
			className={cn(
				"w-72 fixed shadow-sideBar bg-white overflow-visible dark:bg-secondary-dark-bg md:z-50",
				!isSideBarActive && "hidden",
			)}>
			<div className="ml-3 pb-10 h-screen md:overflow-hidden overflow-auto md:hover:overflow-auto">
				<div className="p-5 flex items-center justify-between">
					<Link
						to={"/"}
						className=" flex items-center gap-x-4">
						<SiShopware className="text-xl" />
						<span className="text-xl font-extrabold tracking-tight dark:text-white">
							Edelshop
						</span>
					</Link>
					<button
						type="button"
						className="text-3xl"
						onClick={() => setSideBarActive(!isSideBarActive)}>
						<MdOutlineCancel />
					</button>
				</div>
				{children}
			</div>
		</div>
	);
};
