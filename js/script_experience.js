// On attend que la page soit chargée pour initialiser la carte
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. Initialisation de la carte (centrée sur l'Europe pour voir tous les points)
    var map = L.map('map').setView([49.0, 10.0], 4);

    // 2. Ajout du fond de carte (style de base OpenStreetMap)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // 3. Définition de tes points géographiques (Coordonnées Latitude / Longitude)
    var locations = [
        // Tes expériences et formations principales
        { 
            name: "SOMFY & IAE", 
            city: "Annecy, France", 
            lat: 45.8992, lng: 6.1294, 
            desc: "Alternance actuelle et Études" 
        },
        { 
            name: "LE SAYEC", 
            city: "Lorient, France", 
            lat: 47.7483, lng: -3.3702, 
            desc: "Expériences en Qualité et Administratif" 
        },
        { 
            name: "Savonia University", 
            city: "Kuopio, Finlande", 
            lat: 62.8924, lng: 27.6770, 
            desc: "Semestre d'études Erasmus+" 
        },
        
        // Les différents sites SOMFY / SIMU
        { 
            name: "SOMFY - Site de Production", 
            city: "Niepołomice, Pologne", 
            lat: 50.0333, lng: 20.2167, 
            desc: "Découverte / Mobilité groupe" 
        },
        { 
            name: "SOMFY - Site de Production", 
            city: "Felgueiras, Portugal", 
            lat: 41.3667, lng: -8.2000, 
            desc: "Découverte / Mobilité groupe" 
        },
        { 
            name: "SIMU (Groupe SOMFY)", 
            city: "Gray, France", 
            lat: 47.4470, lng: 5.5900, 
            desc: "Découverte / Mobilité groupe" 
        },
        { 
            name: "SOMFY", 
            city: "Genève, Suisse", 
            lat: 46.2044, lng: 6.1432, 
            desc: "Site et opérations suisses" 
        },
        // Tu peux ajouter d'autres lieux importants pour toi ici
        { 
            name: "SOMFY - Nantes", 
            city: "Nantes, France", 
            lat: 47.276350749415755, lng: -1.5102930653123376, 
            desc: "changement d'un switch" 
        }
    ];

    // 4. Boucle pour ajouter tous les marqueurs sur la carte
    locations.forEach(function(loc) {
        // Création du marqueur
        var marker = L.marker([loc.lat, loc.lng]).addTo(map);
        
        // Création de l'infobulle (popup) qui s'affiche au clic
        var popupContent = `
            <div style="font-family: 'Poppins', sans-serif;">
                <h6 style="color: #0056b3; margin-bottom: 2px; font-weight: bold;">${loc.name}</h6>
                <span style="font-size: 0.9em; font-weight: 600;">${loc.city}</span><br>
                <span style="font-size: 0.85em; color: #6c757d;">${loc.desc}</span>
            </div>
        `;
        
        marker.bindPopup(popupContent);
    });

});