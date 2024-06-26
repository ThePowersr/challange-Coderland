module.exports = {
  preset: 'react-native',
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  transform: {
    '^.+\\.(js|jsx|ts|tsx)$': 'babel-jest',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-navigation|@react-navigation|react-redux|@react-redux|expo-modules-core)/)',
  ],
  setupFiles: [
    "<rootDir>/__tests__/setup-jest.ts"
  ],
  testPathIgnorePatterns: [
    '<rootDir>/__tests__/setup.jest.ts',
  ],
};
