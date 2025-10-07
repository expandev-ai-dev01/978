import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Welcome page - allowed base page for initial app
 */
export const WelcomePage: React.FC = () => {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-xl w-full p-8 bg-white shadow rounded">
        <h1 className="text-2xl font-bold">Calculadora de Soma</h1>
        <p className="mt-2 text-gray-600">
          Uma base frontend pronta para implementação das features de soma.
        </p>

        <ul className="mt-4 list-disc list-inside text-sm text-gray-700">
          <li>Inserção de números</li>
          <li>Realização de soma</li>
          <li>Exibição de resultado</li>
          <li>Limpar dados</li>
        </ul>

        <div className="mt-6">
          <Link to="/app" className="px-4 py-2 bg-blue-600 text-white rounded">
            Open App (placeholder)
          </Link>
        </div>
      </div>
    </main>
  );
};

export default WelcomePage;
