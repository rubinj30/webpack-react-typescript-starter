module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
  globals: {
    'ts-jest': {
      diagnostics: false,
      tsconfig: './tsconfig.json',
    },
  },
  testEnvironment: 'jsdom',
  testRegex: '(/src/.*.(test|spec)).(jsx?|tsx?)$',
  moduleNameMapper: {
    // '\\.(scss|css)$': 'identity-obj-proxy',
  },
  setupFiles: [],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  coveragePathIgnorePatterns: ['(tests/.*.mock).(jsx?|tsx?)$', '/src/testUtils/'],
  verbose: true,
};
