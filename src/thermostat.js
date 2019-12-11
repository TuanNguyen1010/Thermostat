const MIN_TEMP =10


function Thermostat(temperature = 20) {
  this.temperature = temperature;
  this.powerSaverMode = true
};

Thermostat.prototype.up = function(){
  if (this.temperature >= this.maxTemp()) throw new Error('Temperature already at maximum')
  this.temperature += 1
};

Thermostat.prototype.down = function(){
  if (this.temperature <= MIN_TEMP) throw new Error('Temperature already at minimum');
  this.temperature --
};

Thermostat.prototype.maxTemp = function(){
  if (this.powerSaverMode) return 25;
  return 32
};
