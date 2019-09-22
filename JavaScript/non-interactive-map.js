initMap()

function initMap() {

    mapboxgl.accessToken = 'pk.eyJ1IjoibWFyY2sxMDAiLCJhIjoiY2p6OXpxbXM3MDBxajNjbzY1MmUwYnZvdCJ9.NPdJb6VUzIOu6n1ch6s4Mg';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/marck100/cjza1k4sw09e71co3zy3dgm2j',
        center: [9.117928, 39.226831],
        zoom: '16',
        minZoom: '12',
        maxZoom: '19',
        interactive: false
    });

    var popup = new mapboxgl.Popup()
    popup.innerHTML = '<h1>Casa Kiki</h1>';
    var marker = new mapboxgl.Marker({ color: "red" })
    marker.setLngLat({ lng: 9.117928, lat: 39.226831 });
    marker.addTo(map);
    marker.setPopup(popup)


}