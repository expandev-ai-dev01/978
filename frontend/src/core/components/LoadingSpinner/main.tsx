import React from 'react';

export const LoadingSpinner = ({ size = 'md' }: { size?: 'sm' | 'md' | 'lg' }) => {
  const dim = size === 'sm' ? 4 : size === 'lg' ? 12 : 6;
  return (
    <div className="flex items-center justify-center p-4">
      <div
        className="animate-spin rounded-full border-4 border-t-transparent border-blue-600"
        style={{ width: `${dim}rem`, height: `${dim}rem` }}
      />
    </div>
  );
};
