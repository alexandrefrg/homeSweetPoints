function Resident(
  uniqueToken,
  email,
  name,
  totalPoints,
  role,
  house_uniqueToken
) {
  this.uniqueToken = uniqueToken || null;
  this.email = email || null;
  this.name = name || null;
  this.totalPoints = totalPoints || null;
  this.role = role || null;
  this.house_uniqueToken = house_uniqueToken || null;
}

Resident.prototype.getUniqueToken = function () {
  return this.uniqueToken;
};

Resident.prototype.getEmail = function () {
  return this.email;
};

Resident.prototype.setEmail = function (email) {
  this.email = email;
};
Resident.prototype.getName = function () {
  return this.name;
};

Resident.prototype.setName = function (name) {
  this.name = name;
};

Resident.prototype.getTotalPoints = function () {
  return this.totalPoints;
};

Resident.prototype.setTotalPoints = function (totalPoints) {
  this.totalPoints = totalPoints;
};

Resident.prototype.getRole = function () {
  return this.role;
};

Resident.prototype.setRole = function (role) {
  this.role = role;
};

Resident.prototype.getHouse_uniqueToken = function () {
  return this.house_uniqueToken;
};

Resident.prototype.setHouse_uniqueToken = function (house_uniqueToken) {
  this.house_uniqueToken = house_uniqueToken;
};

module.exports = Resident;
