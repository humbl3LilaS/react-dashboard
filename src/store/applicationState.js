import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useApplicationState = create()(
	immer((set) => ({
		isSideBarActive: true,
		isChatActive: false,
		isCartActive: false,
		isProfileActive: false,
		setSideBarActive: (value) =>
			set((state) => {
				state.isSideBarActive = value;
			}),
		setChatActive: (value) =>
			set((state) => {
				state.isCartActive = value;
			}),
		setCartActive: (value) =>
			set((state) => {
				state.isCartActive = value;
			}),
		setProfileActive: (value) =>
			set((state) => {
				state.isProfileActive = value;
			}),
	})),
);
