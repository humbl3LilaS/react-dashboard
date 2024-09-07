import { memo } from "react";
import NavBtn from "../NavBar/NavBtn";
import { FiShoppingCart } from "react-icons/fi";
import { useApplicationState } from "../../store/applicationState";

const CartToggle = () => {
	const { isCartActive, setCartActive } = useApplicationState();

	return (
		<NavBtn handler={() => setCartActive(!isCartActive)}>
			<FiShoppingCart />
		</NavBtn>
	);
};

export default CartToggle;
