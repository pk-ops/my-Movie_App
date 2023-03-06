import React, { useContext } from 'react';
import CommonContext from './context/commonContext';

function logout(props) {

    const {isLoggedIn,setLoggedIn}=useContext(CommonContext)

    return (
        <div>
            
        </div>
    );
}

export default logout;