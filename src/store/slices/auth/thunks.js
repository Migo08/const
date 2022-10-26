import { connectApi } from "../../../api/conectApi";
import { setLogin, startLogin, logout } from "./authSlice";


export const checkingAuthentication = ( email, password ) => {
    
}

export const startGoogleSingIn = ( email, password ) => {
    
}

export const onAuthStateChanged = () => {

}

export const startLoginWithEmailPassword = ({ email, password }) => { //{ email, password }
    return async(dispatch, getState) => {
        dispatch( startLogin() );
        
        const token = '123456789';  
        dispatch( setLogin({token: token, displayName: 'Miguel', role: 'Admin', email: email }) );
    }    
}

export const startLogout = () => {
    return async(dispatch, getState) => {      
        dispatch( logout() );
    }    
}
