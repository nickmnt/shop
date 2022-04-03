import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UserState {
    loginOpen: boolean;
    registerOpen: boolean;
}

const initialState: UserState = {
    loginOpen: false,
    registerOpen: false
};

export const dialogSlice = createSlice({
    name: 'dialog',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        // Use the PayloadAction type to declare the contents of `action.payload`
        setLoginOpen: (state, action: PayloadAction<boolean>) => {
            state.loginOpen = action.payload;
        },
        setRegisterOpen: (state, action: PayloadAction<boolean>) => {
            state.registerOpen = action.payload;
        }
    }
});

export const { setLoginOpen, setRegisterOpen } = dialogSlice.actions;

export default dialogSlice.reducer;
