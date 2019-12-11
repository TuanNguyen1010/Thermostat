describe("Thermostat", function() {

  var thermostat

  beforeEach(function(){
    thermostat = new Thermostat();
  });

  it("starts at 20 degrees", function() {
    expect(thermostat.currentTemp()).toEqual(20);

  });

  it('has a minimum temperature set at 10', function(){
    do { thermostat.down()} while (thermostat.currentTemp() > 10);
  
    expect(function() {
      thermostat.down();
    }).toThrowError('Temperature already at minimum');
  });

  describe('up', function (){
    it("increase the temperature by 1", function(){
    thermostat.up()
    expect(thermostat.currentTemp()).toEqual(21);
    });
  });

  describe('down', function() {
    it('decrease the temperature by 1', function(){
      thermostat.down()
      expect(thermostat.currentTemp()).toEqual(19);
    });
  });
});
