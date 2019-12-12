$( document ).ready(function() {
  var thermostat = new Thermostat();

  $( '#Thermostat').text(thermostat.temperature);

  $( '#power-saving-status').text(thermostat.powerSaverStatus());

  $( "#up" ).click(function( event ) {

      thermostat.up();
      $( '#Thermostat').text(thermostat.temperature);

  });

  $( "#down" ).click(function( event ) {

    thermostat.down();
    $( '#Thermostat').text(thermostat.temperature);

  });

  $( "#reset" ).click(function( event ) {

    thermostat.reset();
    $( '#Thermostat').text(thermostat.temperature);

  });

  // $( "#power-saving-status" ).click(function( event ) {

  //   $( '#power-saving-status').text(thermostat.powerSaverStatus());

  // });

  $( "#powerSaverSwitch" ).click(function( event ) {

    thermostat.powerSaverSwitch();

    $( '#power-saving-status').text(thermostat.powerSaverStatus());

  });



});
