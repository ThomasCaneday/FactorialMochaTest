var assert = require("assert");
var Calculate =  require('../index.js')

describe('Calculate', () => {
  describe('.factorial', () => {
    it('returns 120 from 5!', () => {
      const expected = 120;
      const input = 5;

      const result = Calculate.factorial(input);

      assert.strictEqual(result, expected);
    });

    it('returns 6 from 3!', () => {
      const expected = 6;
      const input = 3;

      const result = Calculate.factorial(input);

      assert.strictEqual(result, expected);
    });

    it('return 1 from 0!', () => {
      const expected = 1;
      const input = 0;

      const result = Calculate.factorial(input);

      assert.strictEqual(result, expected);
    });
  });
});