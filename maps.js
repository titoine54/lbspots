function theMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(45.5017, -73.5673),
    zoom: 10
  }
  var map = new google.maps.Map(mapCanvas, mapOptions);
}
