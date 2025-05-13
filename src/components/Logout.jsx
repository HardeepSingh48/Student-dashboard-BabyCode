import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const Logout = ({ setUser }) => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);  // Clear the user info in your app state
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <button
      onClick={handleLogout}
      className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
    >
      Logout
    </button>
  );
};

export default Logout;
