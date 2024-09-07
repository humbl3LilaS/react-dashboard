import CartPopup from "./CartPopup";
import CartToggle from "./CartToggle";

const Cart = () => {
	return (
		<li className="relative">
			<CartToggle />
			<CartPopup />
		</li>
	);
};

export default Cart;
