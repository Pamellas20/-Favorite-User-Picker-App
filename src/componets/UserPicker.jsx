import { useState, useEffect } from 'react';
import { useFavoriteUser } from './FavoriteUserContext';

const UserPicker = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { updateFavoriteUser, favoriteUser } = useFavoriteUser();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        
        const data = await response.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">Error: {error}</div>;

  return (
    <div className="user-picker">
      <h2>Select User</h2>
      <ul className="user-list">
        {users.map(user => (
          <li 
            key={user.id} 
            className={favoriteUser?.id === user.id ? 'selected' : ''}
            onClick={() => updateFavoriteUser({
              id: user.id,
              name: user.name,
              email: user.email
            })}
          >
            <strong>{user.name}</strong>
            <span>{user.email}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserPicker;