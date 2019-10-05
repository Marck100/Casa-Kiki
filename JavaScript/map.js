initMap()

function initMap() {

    mapboxgl.accessToken = 'pk.eyJ1IjoibWFyY2sxMDAiLCJhIjoiY2p6OXpxbXM3MDBxajNjbzY1MmUwYnZvdCJ9.NPdJb6VUzIOu6n1ch6s4Mg';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/marck100/cjza1k4sw09e71co3zy3dgm2j',
        center: [9.117928, 39.226831],
        zoom: '14',
        minZoom: '12',
        maxZoom: '19'
    });


    var marker = new mapboxgl.Marker({ color: "red" })
    marker.setLngLat({ lng: 9.117928, lat: 39.226831 });
    marker.addTo(map);

    // var first = document.createElement("div")
    // first.className = "marker-1"

    // var firstMarker = new mapboxgl.Marker(first)
    // firstMarker.setLngLat({ lng: 9.116493, lat: 39.216038 });
    // firstMarker.addTo(map);

    // var second = document.createElement("div")
    // second.className = "marker-2"

    // var secondMarker = new mapboxgl.Marker(second)
    // secondMarker.setLngLat({ lng: 9.166641, lat: 39.207433 });
    // secondMarker.addTo(map);

    // var third = document.createElement("div")
    // third.className = "marker-3"

    // var thirdMarker = new mapboxgl.Marker(third)
    // thirdMarker.setLngLat({ lng: 9.125174, lat: 39.208684 });
    // thirdMarker.addTo(map);



}