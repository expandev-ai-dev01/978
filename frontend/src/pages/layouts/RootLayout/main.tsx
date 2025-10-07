import React from 'react';

export const RootLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-white shadow py-4">
        <div className="max-w-5xl mx-auto px-4">Calculadora de Soma</div>
      </header>
      <main className="flex-1 max-w-5xl mx-auto px-4 py-6">{children}</main>
      <footer className="py-4 text-center text-sm text-gray-500">© Calculadora de Soma</footer>
    </div>
  );
};

export default RootLayout;
