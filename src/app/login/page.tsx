"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // Updated import for useRouter

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter(); // Using the new import for useRouter

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validate input
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch(`https://66a37ab344aa6370458157c2.mockapi.io/users`);
      const users = await response.json();

      const user = users.find((user: { email: string, password: string }) => user.email === email && user.password === password);

      if (!user) {
        throw new Error('Invalid email or password');
      }

      // Redirect or set authenticated state
      router.push('/'); // redirect to home or dashboard
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-md"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}