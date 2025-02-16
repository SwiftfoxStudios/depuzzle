'use client'

import { useState } from 'react';

export default function Home() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User subscribed with email:', email);
  };

  return (
    <div className="bg-gray-50 h-screen flex flex-col justify-between">
      <header className="bg-white shadow w-full py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="flex items-center">
            {/* Placeholder for logo */}
            <div className="h-10 w-10 bg-gray-200 rounded-full"></div>
            <h1 className="text-xl font-bold text-gray-800 ml-3">Depuzzle</h1>
          </div>
          <div className="flex space-x-4">
            <button className="text-gray-800 hover:text-indigo-500">Login</button>
            <button className="text-gray-800 hover:text-indigo-500">Sign Up</button>
          </div>
        </div>
      </header>

      <main className="flex-grow flex flex-col justify-center items-center text-center px-6">
        <div className="max-w-3xl w-full">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">Master Your Puzzle-Solving Skills</h1>
          <p className="text-xl text-gray-500 mb-6">Get better at Cryptic Crosswords, Logic Puzzles, Word Games, and more with our interactive lessons.</p>
          <form onSubmit={handleSubmit} className="flex justify-center space-x-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 p-3 rounded-lg w-full md:w-2/3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your email"
              required
            />
            <button
              type="submit"
              className="bg-indigo-500 text-white p-3 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Notify Me
            </button>
          </form>
        </div>
      </main>

      <footer className="bg-gray-800 py-4">
        <div className="container mx-auto text-center text-white">
          <p>© 2025 Depuzzle.</p>
        </div>
      </footer>
    </div>
  );
}
