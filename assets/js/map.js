const $address = document.querySelector("#address");

var map = L.map('map').setView([46.90296, 1.90925], 6);

var stamenToner = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: 'Map tiles by Stamen Design, CC BY 3.0 — Map data © OpenStreetMap',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 20,
    ext: 'png'
});

map.addLayer(stamenToner);


const address = [
    {
        lat: -26.1943713,
        long: 28.2802928,
        city:  "Johannesburg",
        address1: "99 Skew Road,",
        address2: "1459, Boksburg, Gauteng",
    },
    {
        lat: -33.8705849,
        long: 18.7012091,
        city:  "Cape Town",
        address1: "111 Kruis Road, Brackenfell, ",
        address2: "7560, Cape Town, Western Cape",
    },
    {
        lat: -29.760786647203016,
        long: 31.026833253972082,
        city:  "Durban",
        address1: "Unit 4b, 50 Moreland Drive, Rinaldo Industrial Park,",
        address2: "Redhill 4071, Durban, KZN",
    }
];
const mergeAddress = []


address.forEach(element => {

    var customIcon = L.icon({
        iconUrl: 'assets/images/marker.png',
    
        iconSize:     [38, 38], // size of the icon
        iconAnchor:   [22, 22], // point of the icon which will correspond to marker's location
    });

    const marker = L.marker([element.lat, element.long], {icon: customIcon}).addTo(map); 
    marker.bindPopup("Agence "+ element.city)
    mergeAddress.push(marker)


    $address.insertAdjacentHTML("beforeend",
      `
        <div class="card__map-style">
            <span class="card__map_style-title">${element.city}</span>
            <span>${element.address1}</span>
            <span>${element.address2}</span>
        </div>
      `
    )
});

var group = new L.featureGroup(mergeAddress);

map.fitBounds(group.getBounds());