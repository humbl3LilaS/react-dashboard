import { create } from "zustand";
import { immer } from "zustand/middleware/immer";

export const useSideBarState = create()(
	immer((set) => ({
		active: true,
		setActive: (value) =>
			set((state) => {
				state.active = value;
			}),
	})),
);
