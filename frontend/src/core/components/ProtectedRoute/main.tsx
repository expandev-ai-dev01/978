import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '@/core/contexts/auth/context';
import { LoadingSpinner } from '../LoadingSpinner/main';

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const auth = useAuth();
  const location = useLocation();

  if (!auth) return <LoadingSpinner />;

  if (auth.isLoading) return <LoadingSpinner />;

  if (!auth.isAuthenticated) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};
