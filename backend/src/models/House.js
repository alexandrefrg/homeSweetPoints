function House(uniqueToken, familyName) {
  this.uniqueToken = uniqueToken || null;
  this.familyName = familyName || null;
}

function House(familyName) {
  this.familyName = familyName || null;
}

House.prototype.getUniqueToken = function () {
  return this.uniqueToken;
};

House.prototype.getFamilyName = function () {
  return this.familyName;
};

House.prototype.setFamilyName = function (familyName) {
  this.familyName = familyName;
};

module.exports = House;
