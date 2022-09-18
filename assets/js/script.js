
 var currentDate = moment().format("dddd, MMMM Do YYYY");

    $("#search").click(function() {
 
  var userSearch = $("#search-input").val()


  $("#search-history").append('<button type="button">' + userSearch + '</button>');
  localStorage.setItem("SearchHistory", userSearch);
  $("search-history").append('<button type="button">' + localStorage.getItem("SearchHistory") + '</button>');
  function getApi() {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + userSearch + '&appid=30bfc0639100aaca12ace8ac4db0ea98&units=imperial';
  
    fetch(requestUrl)
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
      var currentWeather = data;
      $(".currentImage").css("background-image", "url(http://openweathermap.org/img/wn/" + currentWeather.weather[0].icon + "@2x.png)");
      $("#cityName").html(currentWeather.name + " " + currentDate)
      $(".currentTemp").append(currentWeather.main.temp)
      $(".currentWind").append(currentWeather.wind.speed)
      $(".currentHumidity").append(currentWeather.main.humidity)

      var coLongitude = currentWeather.coord.lon;
      var coLatitude = currentWeather.coord.lat;
      var weatherRequestUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + coLatitude + "&lon=" + coLongitude +"&exclude=minutely,hourly&appid=30bfc0639100aaca12ace8ac4db0ea98&units=imperial";
  
          fetch(weatherRequestUrl)
          .then(function (weatherResponse) {
            return weatherResponse.json();
          })
          .then(function (weatherData) {
            var currentUV = weatherData.current.uvi;
            $(".currentUV span").append(weatherData.current.uvi)

            if(currentUV < 2) {
              $(".currentUV span").css("background-color", "green");
            } else if ( currentUV < 6) {
              $(".currentUV span").css("background-color", "yellow");
            } else {
              $(".currentUV span").css("background-color", "red");
            }
            
            // Day 5
            $("#img5").css("background-image", "url(http://openweathermap.org/img/wn/" + weatherData.daily[4].weather[0].icon + "@2x.png)");
            $("#temperature5").append(weatherData.daily[4].temp.day)
            $("#wind5").append(weatherData.daily[4].wind_speed)
            $("#humidity5").append(weatherData.daily[4].humidity)
            $("#UV5").append(weatherData.daily[4].uvi)
            

            // Day 4
            $("#img4").css("background-image", "url(http://openweathermap.org/img/wn/" + weatherData.daily[3].weather[0].icon + "@2x.png)");
            $("#temperature4").append(weatherData.daily[3].temp.day)
            $("#wind4").append(weatherData.daily[3].wind_speed)
            $("#humidity4").append(weatherData.daily[3].humidity)
            $("#UV4").append(weatherData.daily[3].uvi)


            // Day 3
            $("#img3").css("background-image", "url(http://openweathermap.org/img/wn/" + weatherData.daily[2].weather[0].icon + "@2x.png)");
            $("#temperature3").append(weatherData.daily[2].temp.day)
            $("#wind3").append(weatherData.daily[2].wind_speed)
            $("#humidity3").append(weatherData.daily[2].humidity)
            $("#UV3").append(weatherData.daily[2].uvi)


            // Day 2
            $("#img2").css("background-image", "url(http://openweathermap.org/img/wn/" + weatherData.daily[1].weather[0].icon + "@2x.png)");
            $("#temperature2").append(weatherData.daily[1].temp.day)
            $("#wind2").append(weatherData.daily[1].wind_speed)
            $("#humidity2").append(weatherData.daily[1].humidity)
            $("#UV2").append(weatherData.daily[1].uvi)
            
  
            // Day 1
            $("#img1").css("background-image", "url(http://openweathermap.org/img/wn/" + weatherData.daily[0].weather[0].icon + "@2x.png)");
            $("#temperature1").append(weatherData.daily[0].temp.day)
            $("#wind1").append(weatherData.daily[0].wind_speed)
            $("#humidity1").append(weatherData.daily[0].humidity)
            $("#UV1").append(weatherData.daily[0].uvi)
  
          
              
          });
          
      });
  }
  getApi();
 })

