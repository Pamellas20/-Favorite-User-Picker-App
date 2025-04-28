import './App.css';
import { FavoriteUserProvider } from './componets/FavoriteUserContext';
import UserPicker from './componets/UserPicker';
import UserDisplay from './componets/UserDisplay';

function App() {
  return (
    <FavoriteUserProvider>
      <div className="app">
        <h1>Favorite User Picker</h1>
        <UserDisplay />
        <UserPicker />
      </div>
    </FavoriteUserProvider>
  );
}

export default App;
