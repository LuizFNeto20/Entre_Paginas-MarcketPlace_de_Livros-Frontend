import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UserState {
    login: string;
    isLoggedIn: boolean;
}

const initialState: UserState = {
    login: '',
    isLoggedIn: false,
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        changeLogin(state, action: PayloadAction<string>) {
            return { ...state, login: action.payload, isLoggedIn: true };
        },
        logout(state) {
            return { ...state, login: '', isLoggedIn: false };
        },
    },
});

export const { changeLogin, logout } = userSlice.actions;

export const selectUser = (state: { user: UserState }) => state.user; 

export default userSlice.reducer;
