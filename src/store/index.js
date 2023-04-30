import { configureStore, createSlice } from "@reduxjs/toolkit"

const initialAuth = {
    isAuthenticated: false,
}

const authSlice = createSlice({
    name: 'auth', 
    initialState: initialAuth, 
    reducers: {
        login(state){
            state.isAuthenticated=true;
        },
        logout(state){
            state.isAuthenticated=false;
        }
    }
});


const store = configureStore({
    reducer: {auth : authSlice.reducer} 
});

export const authActions = authSlice.actions;
export default store;
