import { cn } from "../../util/util";
import { Link, NavLink } from "react-router-dom";
import { links } from "../../data/Data";

const SideBarNav = () => {
	return (
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
									to={link.path}
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
	);
};

export default SideBarNav;
