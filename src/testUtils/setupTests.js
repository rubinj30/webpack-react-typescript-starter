// If you have something you want to be setup globally for all tests it can be done in this file

global.console = {
  // console.errors will be ignored in tests
  error: jest.fn(),
  // Keep native behavior for other methods, use those to print out things in your own tests
  log: console.log,
  warn: console.warn,
  info: console.info,
  debug: console.debug,
};

// You can also have a function run before or after all tests
beforeEach(() => {
  // maybe you want to set something in localStorage before each test
  localStorage.setItem('access-token', 'mock-token');
});

afterEach(() => {
  // and clear it out after each test is ran
  localStorage.clear();
});
