module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    "^@server/(.*)$": "<rootDir>/server/$1",
  },
  setupFiles: ["<rootDir>/testSetup.js"],
};
