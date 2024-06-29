import { Children, createContext } from "react";
import { auth } from "./firebase/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = () => {
    return auth.currentUser !== null ? auth.currentUser : null;
  };
  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
