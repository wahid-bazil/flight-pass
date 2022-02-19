import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { User } from '../type';


export interface InitialAuthState {
    isAuthenticated: boolean,
    firstName: string | null,
    lastName: string | null
}
const initialAuthState: InitialAuthState = {
    isAuthenticated: false,
    firstName: null,
    lastName: null
};

const authSlice = createSlice({
    name: 'authentication',
    initialState: initialAuthState,
    reducers: {
        login(state, action: PayloadAction<User>) {
            state.isAuthenticated = true;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
        },


        logout(state) {
            state.isAuthenticated = false;
        },
        authCheck(state, action) {
            state.isAuthenticated = action.payload.isAuthenticated
        }
    },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;