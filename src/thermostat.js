const MIN_TEMP =10


function Thermostat() {
  this.temperature = 20;
  this.powerSaverMode = true
};

Thermostat.prototype.up = function(){
  this.temperature += 1
};

Thermostat.prototype.down = function(){
  if (this.temperature <= MIN_TEMP) throw new Error('Temperature already at minimum');
  this.temperature --
};
