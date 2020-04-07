function Transaction(
  uniqueToken,
  points,
  date,
  house_uniqueToken,
  resident_uniqueToken,
  task_uniqueToken
) {
  this.uniqueToken = uniqueToken || null;
  this.points = points || null;
  this.date = date || null;
  this.house_uniqueToken = house_uniqueToken || null;
  this.resident_uniqueToken = resident_uniqueToken || null;
  this.task_uniqueToken = task_uniqueToken || null;
}

Transaction.prototype.getUniqueToken = function () {
  return this.uniqueToken;
};

Transaction.prototype.getPoints = function () {
  return this.points;
};

Transaction.prototype.setPoints = function (points) {
  this.points = points;
};
Transaction.prototype.getDate = function () {
  return this.date;
};

Transaction.prototype.setDate = function (date) {
  this.date = date;
};

Transaction.prototype.getHouse_uniqueToken = function () {
  return this.house_uniqueToken;
};

Transaction.prototype.setHouse_uniqueToken = function (house_uniqueToken) {
  this.house_uniqueToken = house_uniqueToken;
};

Transaction.prototype.getResident_uniqueToken = function () {
  return this.resident_uniqueToken;
};

Transaction.prototype.setResident_uniqueToken = function (
  resident_uniqueToken
) {
  this.resident_uniqueToken = resident_uniqueToken;
};

Transaction.prototype.getTask_uniqueToken = function () {
  return this.task_uniqueToken;
};

Transaction.prototype.setTask_uniqueToken = function (task_uniqueToken) {
  this.task_uniqueToken = task_uniqueToken;
};

module.exports = Transaction;
