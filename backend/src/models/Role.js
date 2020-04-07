function Role(title) {
  this.title = title;
}

Role.prototype.getTitle = function () {
  return this.title;
};

Role.prototype.setTitle = function (title) {
  this.title = title;
};

module.exports = Role;
