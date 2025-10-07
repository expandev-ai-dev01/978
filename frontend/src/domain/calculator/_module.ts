/**
 * @module calculator
 * @summary Calculator domain manifest - placeholder for future calculator features
 * @domain functional
 * @version 0.1.0
 */

// Public exports for the calculator domain will be added here.

export const moduleMetadata = {
  name: 'calculator',
  domain: 'functional',
  version: '0.1.0',
  publicComponents: [],
  publicHooks: [],
  publicServices: [],
  publicStores: [],
  dependencies: {
    internal: ['@/core/components', '@/core/hooks'],
    external: ['react'],
  },
  exports: {},
} as const;
