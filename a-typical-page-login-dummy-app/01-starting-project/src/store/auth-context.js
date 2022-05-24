import React from "react";

const AuthContext = React.createContext({
    //AuthContext is gonna be an Object that contains components
    isLoggedIn: false,
});

export default AuthContext;
