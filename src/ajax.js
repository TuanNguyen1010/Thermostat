function weatherSelector(city = 'london,uk'){
  $.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=357a681114dd79d8efab624598eb3c09&units=metric`, function(data){
      $('#current-temperature').text(data.main.temp);
  });
};
