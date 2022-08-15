import { useLocalStore } from "mobx-react";
import React from "react";
import { AuthStoreImpl } from "./stores/authStore";

// @ts-ignore
export const AuthContext = React.createContext({});

export const AuthProvider = ({ children }) => {
  const authStore: any = useLocalStore(() => new AuthStoreImpl());
  console.log(authStore.currentUser.photo);
  return (
    <AuthContext.Provider value={authStore}>{children} </AuthContext.Provider>
  );
};

export const useAuthStore = (): any => React.useContext(AuthContext);
