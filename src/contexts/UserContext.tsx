import React, { createContext, useContext, useState } from "react";

const UserContext = createContext({
  firstName: "John",
  lastName: "Doe",
  profileImage: "/images/profile-picture.png",
});

export const useUser = () => {
  return useContext(UserContext);
};

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState({
    firstName: "John",
    lastName: "Doe",
    profileImage: "/images/profile-picture.png",
  });

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserContext;
