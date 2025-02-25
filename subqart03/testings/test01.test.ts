import {test00} from '../src/index';

describe('add function', () => {
  it('should add two numbers correctly', () => {
    expect(test00(1, 49)).toBe(50);
  });
});
