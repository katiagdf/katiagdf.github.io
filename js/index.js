


//bar de progression
// Obtenez le contexte de l'élément canvas
var ctx = document.getElementById('competences'); // Sélectionnez l'élément canvas avec l'ID "competences"
console.log(ctx); // Affichez l'élément canvas dans la console
ctx.getContext('2d'); // Obtenez le contexte 2D de l'élément canvas


// Créez le graphique de progression des compétences
var competencyChart = new Chart(ctx, {
    type: 'bar', // Utilisez un graphique à barres pour représenter la progression
    data: {
        labels: ['Python', 'HTML', 'R', 'Gestion de projet'], // Étiquettes pour chaque compétence
        datasets: [{
            label: 'Niveau de compétence', // Étiquette pour le jeu de données
            data: [60, 70, 20, 80], // Les pourcentages de compétence (par exemple, 90% pour JavaScript)
            backgroundColor: [
                '#4caf50', // Vert pour Python
                '#f44336', // Rouge pour HTML
                '#2196f3', // Bleu pour R
                '#9c27b0'  // Violet pour la gestion de projet
            ], // Couleurs des barres
            borderColor: [
                '#4caf50', '#f44336', '#2196f3', '#9c27b0'
            ], // Couleur de la bordure de chaque barre
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y', // Barres horizontales
        responsive: true, // Rendre le graphique réactif
        scales: {
            x: {
                beginAtZero: true, // Commencez l'axe des x à 0
                max: 100, // La valeur maximale doit être de 100% pour chaque compétence
                ticks: {
                    stepSize: 10 // Définir la taille des pas pour les graduations
                }
            },
            y: {
                ticks: { 
                    font: {
                        weight: 'bold' // Étiquettes en gras pour les compétences
                    }
                }
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.raw + '%'; // Afficher le pourcentage au survol
                    }
                }
            }
        }
    }
});





//langues

// créer un graphique pour niveau de langue
var languageCtx = document.getElementById('langues').getContext('2d');
var languageChart = new Chart(languageCtx, {
    type: 'bar', // Utilisez un graphique à barres pour représenter la progression
    data: {
        labels: ['Français', 'Anglais', 'Russe', 'Espagnol'], // Étiquettes pour chaque langue
        datasets: [{
            label: 'Niveau de langues', // Étiquette pour le jeu de données
            data: [100, 68, 35, 25], // Les pourcentages de compétence
            backgroundColor: [
                '#007bff', // Bleu (Français)
                '#dc3545', // Rouge (Anglais)
                '#6f42c1', // Violet (Russe)
                '#fd7e14'  // Orange (Espagnol)
            ],
            borderColor: [
                '#0056b3', '#a71d2a', '#4c2b91', '#b35a09'
            ],
            borderWidth: 1
        }]
    },
    options: {
        indexAxis: 'y', // Barres horizontales
        responsive: true,
        scales: {
            x: {
                beginAtZero: true, // Commencez l'axe des x à 0
                max: 100, // La valeur maximale doit être de 100% pour chaque compétence
                ticks: {
                    stepSize: 10 // Définir la taille des pas pour les graduations
                }
            },
            y: {
                ticks: {
                    font: {
                        weight: 'bold' // Étiquettes en gras pour les compétences
                    }
                }
            }
        },
        plugins: {
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return tooltipItem.raw + '%'; // Afficher le pourcentage au survol
                    }
                }
            }
        }
    }
});