// ProfileContext.js
import React, { createContext, useContext, useState } from 'react';
const ProfileContext = createContext();
export const ProfileProvider = ({ children }) => {
  const [profileData, setProfileData] = useState({});
  const updateProfileData = (data) => {
    setProfileData(data);
  };
  return (
    <ProfileContext.Provider value={{ profileData, updateProfileData }}>
      {children}
    </ProfileContext.Provider>
  );
};
export const useProfile = () => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};