import React, { useContext } from "react";

//AuthContext
export const AuthContext = React.createContext({
  auth: false,
  login: () => {},
  logout: () => {},
});

//Login.tsx
export const LogIn = () => {
  const auth = useContext(AuthContext);
  return (
    <>
      <button onClick={auth.login}>Login</button>
    </>
  );
};

//Login.tsx
export const LogOut = () => {
  const auth = useContext(AuthContext);
  return (
    <>
      <button onClick={auth.logout}>Logout</button>
    </>
  );
};
