// Initialiser les popovers Bootstrap
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]'); // Sélectionnez tous les éléments avec un attribut data-bs-toggle de valeur "popover"
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl)); // Initialisez les popovers Bootstrap pour chaque élément



    document.addEventListener('DOMContentLoaded', function () {
        // Initialize the map after the page is fully loaded
        var map = L.map('map').setView([47.640102365283845, 2.8309687788479425], 5);

        // Set up the tile layer (OpenStreetMap tiles)
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 18
        }).addTo(map);

        // Ajout marqueur lesayec
        var marker1 = L.marker([47.79207920789612, -3.321391545725276]).addTo(map);
        marker1.bindPopup("Le Sayec");

        // ajout marqueur 4 gourmet
        var marker2 = L.marker([45.9185929285806, 6.144412844362112]).addTo(map);
        marker2.bindPopup("4 Gourmet");

        // ajout marqueur SOMFY
        var marker3 = L.marker([45.928301465868564, 6.1638413383936586]).addTo(map);
        marker3.bindPopup("SOMFY");

    });

