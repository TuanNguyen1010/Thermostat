$( document ).ready(function() {
  var thermostat = new Thermostat();

  $( '#Thermostat').text(thermostat.temperature);

  $( "#up" ).click(function( event ) {

      thermostat.up();
      $( '#Thermostat').text(thermostat.temperature);

  });

  $( "#down" ).click(function( event ) {

    thermostat.down();
    $( '#Thermostat').text(thermostat.temperature);

  });



});
