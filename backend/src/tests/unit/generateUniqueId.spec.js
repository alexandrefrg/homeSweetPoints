const generateUniqueId = require('../../utils/generateUniqueId');
const validator = require('uuid-random');

describe('Generate Unique ID', () => {
  it('should generate an unique ID correctly', () => {
    const id = generateUniqueId();

    expect(validator.test(id)).toBeTruthy();
    expect(id).toHaveLength(36);
  });
});
