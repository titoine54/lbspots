function theMap(city) {
  if (city == null)
    city = "montreal";

  switch (city) {
    case "montreal":
      var latitude = 45.5017;
      var longitude = -73.5673;
      break;
    case "quebec":
      var latitude = 46.8139;
      var longitude = -71.2080;
      break;
    case "sherbrooke":
      var latitude = 45.4010;
      var longitude = -71.8824;
      break;
  }
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(latitude, longitude),
    zoom: 11
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);
}

function getCity() {
  var city = $("#citySelector option:selected").val();
  theMap(city);
}

$(function() {
    var defaultCity="montreal";
    $("#citySelector").val(defaultCity);

    var city = $("#citySelector option:selected").val();

    theMap(city);

});
