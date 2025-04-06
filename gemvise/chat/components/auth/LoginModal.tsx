'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

interface LoginModalProps {
  onClose: () => void;
  onLogin: () => void;
}

const LoginModal = ({ onClose, onLogin }: LoginModalProps) => {
  const [apiKey, setApiKey] = useState('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, validate API key here
    onLogin();
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-midnight-800 rounded-xl p-6 w-full max-w-md relative">
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-grey-500 hover:text-grey-700 dark:text-grey-400 dark:hover:text-grey-300"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2 text-grey-900 dark:text-grey-50">Welcome to GemVise</h2>
          <p className="text-grey-600 dark:text-grey-400">Connect with unique gems and personalities</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="apiKey" className="block text-sm font-medium text-grey-700 dark:text-grey-300 mb-1">
              API Key
            </label>
            <input
              type="password"
              id="apiKey"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full px-3 py-2 border border-grey-300 dark:border-grey-700 rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-white dark:bg-midnight-700 text-grey-900 dark:text-grey-50"
              placeholder="Enter your API key"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-button-primary text-background hover:bg-button-primary-hover px-4 py-2 rounded-md transition-colors"
          >
            Connect
          </button>
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-grey-600 dark:text-grey-400">
            Don't have an API key?{' '}
            <a href="/get-started" className="text-primary hover:text-primary-hover">
              Get started
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
