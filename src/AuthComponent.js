import React, { useState } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from './firebase';
import { LogOut } from 'lucide-react';

const AuthComponent = ({ onAuthSuccess, currentUser }) => {
  const [isSignup, setIsSignup] = useState(true);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const checkUsernameExists = async (name) => {
    try {
      const userDoc = await getDoc(doc(db, 'users', name.toLowerCase()));
      return userDoc.exists();
    } catch (err) {
      console.error('Error checking username:', err);
      return false;
    }
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Check if username already exists
      const usernameExists = await checkUsernameExists(username);
      if (usernameExists) {
        setError('Username already taken. Please try another username.');
        setLoading(false);
        return;
      }

      if (username.length < 3) {
        setError('Username must be at least 3 characters long.');
        setLoading(false);
        return;
      }

      if (password.length < 6) {
        setError('Password must be at least 6 characters long.');
        setLoading(false);
        return;
      }

      // Create auth user with email (username@iitme.local)
      const email = `${username.toLowerCase()}@iitme.local`;
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // Store username in Firestore
      await setDoc(doc(db, 'users', username.toLowerCase()), {
        username: username,
        email: email,
        uid: userCredential.user.uid,
        createdAt: new Date(),
        displayName: username
      });

      setUsername('');
      setPassword('');
      onAuthSuccess();
    } catch (err) {
      console.error('Signup error:', err);
      if (err.code === 'auth/email-already-in-use') {
        setError('This username is already registered.');
      } else {
        setError(err.message || 'Signup failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      const email = `${username.toLowerCase()}@iitme.local`;
      await signInWithEmailAndPassword(auth, email, password);
      setUsername('');
      setPassword('');
      onAuthSuccess();
    } catch (err) {
      console.error('Login error:', err);
      if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
        setError('Invalid username or password.');
      } else {
        setError(err.message || 'Login failed. Please try again.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = async () => {
    try {
      await auth.signOut();
      onAuthSuccess();
    } catch (err) {
      setError('Logout failed');
    }
  };

  if (currentUser) {
    return (
      <div className="flex items-center justify-between mb-4 p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg border border-blue-200">
        <div>
          <p className="text-sm text-gray-600">Logged in as</p>
          <p className="text-lg font-semibold text-gray-800">{currentUser.displayName || currentUser.email?.split('@')[0]}</p>
        </div>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-2">IITime</h1>
          <p className="text-center text-gray-600">Calendar Timetable Management</p>
        </div>

        <form onSubmit={isSignup ? handleSignup : handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter your username"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              disabled={loading}
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
              disabled={loading}
            />
          </div>

          {error && (
            <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 px-4 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition disabled:bg-gray-400"
          >
            {loading ? 'Please wait...' : isSignup ? 'Sign Up' : 'Login'}
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-gray-600 text-sm">
            {isSignup ? 'Already have an account? ' : "Don't have an account? "}
            <button
              onClick={() => {
                setIsSignup(!isSignup);
                setError('');
                setUsername('');
                setPassword('');
              }}
              className="text-blue-600 font-medium hover:underline"
            >
              {isSignup ? 'Login' : 'Sign Up'}
            </button>
          </p>
        </div>

        <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
          <p className="text-xs text-gray-600">
            <strong>Note:</strong> {isSignup ? 'Create a unique username to sign up. Your data will be securely stored.' : 'Use your username and password to login.'}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthComponent;
