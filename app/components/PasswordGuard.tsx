'use client';

import { useEffect, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

const PASSWORD = 'alohazamna';

export default function PasswordGuard({ children }: Props) {
  const [authorized, setAuthorized] = useState(false);
  const [password, setPassword] = useState('');

  useEffect(() => {
    const stored = localStorage.getItem('authorized');
    if (stored === 'true') {
      setAuthorized(true);
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === PASSWORD) {
      setAuthorized(true);
      localStorage.setItem('authorized', 'true');
    } else {
      alert('Incorrect password');
    }
  };

  if (!authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-white">
        <form onSubmit={handleSubmit} className="glass p-8 rounded-xl w-full max-w-sm shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-center">Enter Password</h2>
          <input
            type="password"
            className="w-full px-4 py-2 mb-4 rounded-md bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#ea384c] placeholder-gray-300"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            type="submit"
            className="w-full py-2 bg-[#ea384c] hover:bg-[#d12d40] rounded-md transition-colors font-semibold"
          >
            Unlock
          </button>
        </form>
      </div>
    );
  }

  return <>{children}</>;
} 