import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	navOpen: false,
};
export const appSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		toggle: (state) => {
			state.navOpen = !state.navOpen;
		},
		toggleOff: (state) => {
			state.navOpen = false;
		},
	},
});
export const { toggle, toggleOff } = appSlice.actions;

export default appSlice.reducer;
