import { useApplicationState } from "../../store/applicationState";
import PopupBackdrop from "../util/PopupBackdrop";

const CartPopup = () => {
	const { isCartActive, setCartActive } = useApplicationState();

	return (
		<>
			{isCartActive && (
				<>
					<PopupBackdrop handler={() => setCartActive(false)} />

					<div className={"absolute z-50"}>
						<h1>cart</h1>
					</div>
				</>
			)}
		</>
	);
};

export default CartPopup;
