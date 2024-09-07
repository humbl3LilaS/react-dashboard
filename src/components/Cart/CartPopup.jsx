import { useApplicationState } from "../../store/applicationState";

const CartPopup = () => {
	const { isCartActive } = useApplicationState();

	return (
		<>
			{isCartActive && (
				<div className="absolute">
					<h1>cart content</h1>
				</div>
			)}
		</>
	);
};

export default CartPopup;
