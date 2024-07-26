"use client"
import { useState } from 'react';

export default function Register() {
  const [email, setEmail] = useState('');
  const [fullname, setFullname] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validate input
    if (!email || !password || !fullname) {
      setError('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch('https://66a37ab344aa6370458157c2.mockapi.io/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email, fullname, password }),
      });

      if (!response.ok) {
        throw new Error('Failed to register');
      }

      const data = await response.json();
      setSuccess('User registered successfully');
      setEmail('');
      setFullname('');
      setPassword('');
    } catch (error) {
      setError((error as Error).message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        {success && <p className="text-green-500 mb-4">{success}</p>}
        <form onSubmit={handleRegister}>
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
          <div className="mb-4">
            <label htmlFor="fullName" className="block text-gray-700">
              Fullname
            </label>
            <input
              type="string"
              id="fullname"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
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
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
