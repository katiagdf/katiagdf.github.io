// Données pour la frise chronologique
var items = new vis.DataSet([
    {id: 1, content: 'Baccalauréat', start: '', end: '2020-06-30', className: 'orange'},
    {id: 2, content: 'Licence', start: '2022-09-01', end: '2025-04-01', className: 'violet'},
    {id: 3, content: 'stage', start: '2025-04-07', end: '2025-06-30', className: 'bleu'},
]);

// Configuration de la frise chronologique
var options = {
    // zoom de départ 
    start: '2020-01-01',
    end: '2025-12-31',
    //taille de la frise
    width: '100%', // remplissage largeur
    height: '200px',
    margin: {
        item: 20
    }
};

// Création de la frise chronologique
var timeline = new vis.Timeline(document.getElementById('timeline'), items, options);
