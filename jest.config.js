module.exports = {
  transform: {
    '^.+\\.tsx?$': 'babel-jest', // Ensure Babel is used for .tsx files
  },
  setupFiles: ['<rootDir>/setupTests.js'],
  testEnvironment: 'jsdom',
};
