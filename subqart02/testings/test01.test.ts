import {test00} from '../src/index';

/*test('adds 1 + 2 to equal 3', () => {
  expect(test00(1, 2)).toBe(3);
});*/

describe('add function', () => {
  it('should add two numbers correctly', () => {
    expect(test00(1, 49)).toBe(50);
  });
});
