'use strict';

const MIN_TEMP =10

var city = "london,uk"

function weatherSelector(city = 'london,uk'){
  city = $("#city").val();
  $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=357a681114dd79d8efab624598eb3c09&units=metric`, function(data){
      $('#current-temperature').text(data.main.temp);
  });
};

function Thermostat(temperature = 20) {
  this.temperature = temperature;
  this.powerSaverMode = true
};

Thermostat.prototype.up = function(){
  if (this.temperature >= this.maxTemp()) throw new Error('Temperature already at maximum')
  this.temperature ++
};

Thermostat.prototype.down = function(){
  if (this.temperature <= MIN_TEMP) throw new Error('Temperature already at minimum');
  this.temperature --
};

Thermostat.prototype.maxTemp = function(){
  if (this.powerSaverMode) return 25;
  return 32
};

Thermostat.prototype.powerSaverSwitch = function(){
 this.powerSaverMode = !this.powerSaverMode

 if (this.powerSaverMode) this.temperature = this.maxTemp()
};

Thermostat.prototype.reset = function(){
  this.temperature = 20
};

Thermostat.prototype.usage = function(){
  if (this.temperature < 18) {
    return 'low-usage'
  }
  else if (this.temperature < 25) {
    return 'medium-usage'
  }
  return 'high-usage'
};

Thermostat.prototype.powerSaverStatus = function() {
  if (this.powerSaverMode) return "on"
  return "off"
};



weatherSelector(city);
