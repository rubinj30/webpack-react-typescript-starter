module.exports = {
  preset: 'ts-jest',
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.tsx?$': 'ts-jest',
  },
  setupFilesAfterEnv: ['<rootDir>/src/testUtils/setupTests.js'],
  globals: {
    'ts-jest': {
      diagnostics: false,
      tsconfig: './tsconfig.json',
    },
  },
  testEnvironment: 'jsdom',
  testRegex: '(/src/.*.(test|spec)).(jsx?|tsx?)$',
  moduleNameMapper: {
    // Will need this for tests if you want to use CSS or SCSS
    // '\\.(scss|css)$': 'identity-obj-proxy',
  },
  setupFiles: [],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  collectCoverage: true,
  coveragePathIgnorePatterns: ['(tests/.*.mock).(jsx?|tsx?)$', '/src/testUtils/'],
  verbose: true,
};
