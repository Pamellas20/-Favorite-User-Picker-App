import { useFavoriteUser } from './FavoriteUserContext';

const UserDisplay = () => {
  const { favoriteUser, clearFavoriteUser } = useFavoriteUser();

  if (!favoriteUser) {
    return (
      <div className="user-display">
        <h2>Favorite User</h2>
        <p>No user selected yet. Pick one below.</p>
      </div>
    );
  }

  return (
    <div className="user-display">
      <h2>Favorite User</h2>
      <p>
        <strong>{favoriteUser.name}</strong> <br />
        {favoriteUser.email}
      </p>
      <button onClick={clearFavoriteUser}>Clear</button>
    </div>
  );
};

export default UserDisplay;