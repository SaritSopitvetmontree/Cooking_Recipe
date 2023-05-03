module.exports = {
    testEnvironment: 'jsdom',
    testPathIgnorePatterns: ['/node_modules/', '/.next/'],
    transform: {
      '^.+\\.(js|jsx|ts|tsx)$': '<rootDir>/node_modules/babel-jest',
    },
    moduleNameMapper: {
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
    },
    setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  };