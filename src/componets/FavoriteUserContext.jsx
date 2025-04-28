import { createContext, useContext, useState, useEffect } from 'react';


const FavoriteUserContext = createContext();


export const useFavoriteUser = () => {
  return useContext(FavoriteUserContext);
};


export const FavoriteUserProvider = ({ children }) => {
  const [favoriteUser, setFavoriteUser] = useState(null);

  
  useEffect(() => {
    const savedUser = localStorage.getItem('favoriteUser');
    if (savedUser) {
      setFavoriteUser(JSON.parse(savedUser));
    }
  }, []);

  
  useEffect(() => {
    if (favoriteUser) {
      localStorage.setItem('favoriteUser', JSON.stringify(favoriteUser));
    } else {
      localStorage.removeItem('favoriteUser');
    }
  }, [favoriteUser]);

  
  const updateFavoriteUser = (user) => {
    setFavoriteUser(user);
  };

  
  const clearFavoriteUser = () => {
    setFavoriteUser(null);
  };

  
  const value = {
    favoriteUser,
    updateFavoriteUser,
    clearFavoriteUser
  };

  return (
    <FavoriteUserContext.Provider value={value}>
      {children}
    </FavoriteUserContext.Provider>
  );
};