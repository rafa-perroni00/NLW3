const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZoom: false,
    zoomControl: false
}

const spanLat = document.querySelector('span[data-lat]').dataset.lat
const spanLng = document.querySelector('span[data-lng]').dataset.lng
//create map
const map = L.map('mapid',options).setView([spanLat, spanLng], 15);
//create and add tilelayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58,68],
    iconAnchor: [29,68],
    popupAnchor: [170,2]
})

L.marker([spanLat, spanLng],{icon}).addTo(map)

function selectImage(event){
    const button = event.currentTarget

    const buttons = document.querySelectorAll(".images button") //remover active
    buttons.forEach((button) => {button.classList.remove('active')})

    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img") //iamgem clicada

    imageContainer.src = image.src

    button.classList.add('active')
}

