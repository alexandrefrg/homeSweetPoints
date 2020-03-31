const uuid = require('uuid-random');

module.exports = function generateUniqueId() {
  return uuid();
}
