var RetiredForagerBee = function() {
  ForagerBee.call(this);
  this.age = 40;
  this.job = "gamble";
  this.canFly = false;
  this.color = "grey";
};

RetiredForagerBee.prototype = Object.create(ForagerBee);
RetiredForagerBee.prototype.constructor = RetiredForagerBee;

RetiredForagerBee.prototype.forage = function() {
  return "I am too old, let me play cards instead";
};

RetiredForagerBee.prototype.eat = function() {
  Grub.prototype.eat.call(this);
}

RetiredForagerBee.prototype.gamble = function(treasure) {
  ForagerBee.prototype.forage.call(this);
  this.forage(treasure);
}

