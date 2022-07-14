import * as jose from 'jose'

import { configureStore, createSlice } from "@reduxjs/toolkit";
// create slice want three params name , initial value and reducer function
const initialState = { id: "", name: "", mobile: "", createdAt: "", email: "",login:false ,role:"user"};

    const token=localStorage.getItem('token');
    if (token) {
        
        // This is the whole object which is being converted to jwt
        const decodedJwt = jose.decodeJwt(token)
        // console.log(decodedJwt)
        const userDataRecieve = decodedJwt.data;
        initialState.name = userDataRecieve.name;
        initialState.login = true;
        initialState.createdAt=userDataRecieve.createdAt;
        initialState.id=userDataRecieve.id;
        initialState.mobile=userDataRecieve.mobile;
        initialState.email=userDataRecieve.email;
        initialState.role=userDataRecieve.role;
        if (!decodedJwt) {
            localStorage.removeItem(token);
           
        }
    }
    
const userData = createSlice({
    name: "users",
    initialState,
    reducers:{
        setid: (state, action) => void(state.id = action.payload),
        setname: (state, action) => void(state.name = action.payload),
        setmobile: (state, action) => void(state.mobile = action.payload),
        setcreatedAt: (state, action) => void(state.createdAt = action.payload),
        setemail: (state, action) => void(state.email = action.payload),
        setrole: (state, action) => void(state.role = action.payload),
        setlogin: (state, action) => void (state.login = action.payload)
        
    }
});
const store = configureStore({reducer:{users:userData.reducer}});
// export default userData.actions;
// export const actions = userData.actions;
export const { setid, setname, setmobile, setcreatedAt, setemail, setlogin,setrole } = userData.actions;
export default store;
// export default {store,action:userData.actions};


