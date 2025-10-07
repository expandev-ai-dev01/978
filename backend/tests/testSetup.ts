// Global test setup configuration
// This file contains shared test environment setup

export const setupTestEnvironment = (): void => {
  process.env.NODE_ENV = 'test';
  process.env.PORT = '3001';
  process.env.API_VERSION = 'v1';
};

export const teardownTestEnvironment = (): void => {
  // Cleanup logic if needed
};
