import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadState } from "../localStorage";
import { logout, onAuthStateChanged, setLogin } from "../store/slices/auth";

export const useCheckAuth = () => {
    const { status } = useSelector( state => state.auth );
    const dispatch = useDispatch();
  
    useEffect(() => {
      onAuthStateChanged( loadState(), async( user )=>{        
        if( !user ) return dispatch( logout() );  
        const { uid, email, displayName } = user;
  
        dispatch( setLogin( { uid, email, displayName } ) );  
      } );
    }, []);

    return {
        status
    }
}
