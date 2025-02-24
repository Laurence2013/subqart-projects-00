import type { Config } from 'jest';

const config: Config = {
	preset: 'ts-jest',
  testEnvironment: 'node',
	testMatch: ["**/?(*.)+(spec|test).[jt]s?(x)"], 
	coverageDirectory: 'coverage', 
	collectCoverage: true, 
	/*moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1'
	}*/
};
export default config;
