import { AiOutlineMenu } from "react-icons/ai";

import { useApplicationState } from "../../store/applicationState";
import NavBtn from "./NavBtn";

const SideBarToggle = () => {
	const { isSideBarActive, setSideBarActive } = useApplicationState();

	return (
		<NavBtn
			handler={() => setSideBarActive(!isSideBarActive)}
			hidden={isSideBarActive}
			className={"mr-auto"}>
			<AiOutlineMenu />
		</NavBtn>
	);
};

export default SideBarToggle;
