function Task(uniqueToken, name, description, points, house_uniqueToken) {
  this.uniqueToken = uniqueToken || null;
  this.name = name || null;
  this.description = description || null;
  this.points = points || null;
  this.house_uniqueToken = house_uniqueToken || null;
}

Task.prototype.getUniqueToken = function () {
  return this.uniqueToken;
};

Task.prototype.getName = function () {
  return this.name;
};

Task.prototype.setName = function (name) {
  this.name = name;
};
Task.prototype.getDescription = function () {
  return this.description;
};

Task.prototype.setDescription = function (description) {
  this.description = description;
};
Task.prototype.getPoints = function () {
  return this.points;
};

Task.prototype.setPoints = function (points) {
  this.points = points;
};
Task.prototype.getHouse_uniqueToken = function () {
  return this.house_uniqueToken;
};

Task.prototype.setHouse_uniqueToken = function (house_uniqueToken) {
  this.house_uniqueToken = house_uniqueToken;
};

module.exports = Task;
