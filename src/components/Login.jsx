import { useState } from 'react';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../firebase';

const Login = ({ setUser }) => {
  const [error, setError] = useState(null);

  const handleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setUser(user);
    } catch (err) {
      setError("Login failed. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="max-w-xs mx-auto p-4 border rounded shadow text-center space-y-4">
      {error && <p className="text-red-600">{error}</p>}
      <button
        onClick={handleLogin}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
      >
        Login with Google
      </button>
    </div>
  );
};

export default Login;
