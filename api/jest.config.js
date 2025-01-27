/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
module.exports = {
  // preset: 'ts-jest',
  // testEnvironment: 'node',
  globals: {
    "ts-jest": {
      tsconfig: "tsconfig.json",
    },
  },
  moduleFileExtensions: ["ts", "js"],
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  testMatch: ["**/test/*.test.(ts|js)"],
  testEnvironment: "node",
};
