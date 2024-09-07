import { AiOutlineMenu } from "react-icons/ai";

import { useApplicationState } from "../../store/applicationState";
import NavBtn from "../NavBar/NavBtn";

const SideBarToggle = () => {
	const { isSideBarActive, setSideBarActive } = useApplicationState();

	return (
		<NavBtn
			handler={() => setSideBarActive(!isSideBarActive)}
			hidden={isSideBarActive}>
			<AiOutlineMenu />
		</NavBtn>
	);
};

export default SideBarToggle;
