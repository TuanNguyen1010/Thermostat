describe("Thermostat", function() {

  var thermostat

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", function() {
    expect(thermostat.temperature).toEqual(20);

  });

  it('has a minimum temperature set at 10', function(){
    let thermostat = new Thermostat(10)
  
    expect(function() {
      thermostat.down();
    }).toThrowError('Temperature already at minimum');
  });

  describe('up', function (){
    it("increase the temperature by 1", function(){
    thermostat.up()
    expect(thermostat.temperature).toEqual(21);
    });
  });

  describe('down', function() {
    it('decrease the temperature by 1', function(){
      thermostat.down()
      expect(thermostat.temperature).toEqual(19);
    });
  });

  describe('in power saver mode', function(){
    it('default setting is on power saver mode ', function(){
      expect(thermostat.powerSaverMode).toEqual(true);
    });
    
    it('has a maximum temperature of 25', function(){
      let thermostat = new Thermostat(25)
      expect(function(){
        thermostat.up();
      }).toThrowError('Temperature already at maximum')
    });
  });
});
