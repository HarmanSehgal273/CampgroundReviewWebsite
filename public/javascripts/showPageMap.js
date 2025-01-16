maptilersdk.config.apiKey = maptilerApiKey;
const map = new maptilersdk.Map({
    container: 'map',
    style: maptilersdk.MapStyle.BRIGHT,
    center: campground.geometry.coordinates,
    // center: [-103.59179687498357, 40.66995747013945],
    zoom: 10
});

new maptilersdk.Marker()
    .setLngLat(campground.geometry.coordinates)
    //.setLngLat([-103.59179687498357, 40.66995747013945])
    .setPopup(
        new maptilersdk.Popup({ offset: 25 })
        .setHTML(
            `<h3>${campground.title}</h3><p>${campground.location}</p>`
        )
    )
    .addTo(map)