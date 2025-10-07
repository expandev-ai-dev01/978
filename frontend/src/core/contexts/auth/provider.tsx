import React, { ReactNode, useEffect, useState } from 'react';
import { AuthContext, User, AuthContextValue } from './context';

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initialize = async () => {
      // Lightweight initialization: read token and optionally validate
      try {
        const token = localStorage.getItem('auth_token');
        if (token) {
          // In a real app we would validate the token and fetch user
          setUser({ id: 'system', name: 'System User' });
        }
      } finally {
        setIsLoading(false);
      }
    };
    initialize();
  }, []);

  const login = async (email: string, password: string) => {
    setIsLoading(true);
    try {
      // TODO: call auth service -> authService.login
      localStorage.setItem('auth_token', 'fake-token');
      setUser({ id: 'system', name: 'System User' });
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    setIsLoading(true);
    try {
      localStorage.removeItem('auth_token');
      setUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  const value: AuthContextValue = {
    user,
    isAuthenticated: !!user,
    isLoading,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
