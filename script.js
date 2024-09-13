// Données des joueurs
const players = [
    { nom: 'Soufiane', prenom: 'Rahimi', club: 'El Ain', age: '27 ans', poste: 'Attaquant', president: 'Raja de Casablanca', totalButs: 86, butsSaison: 16 },
    { nom: 'Omar', prenom: 'Najdi', club: 'wac', age: '22 ans', poste: 'Attaquant', president: 'Raja de Casablanca', totalButs: 46, butsSaison: 6 },
    { nom: 'Soufiane', prenom: 'el aloudi', club: 'El Ain', age: '27 ans', poste: 'Attaquant', president: 'Raja de Casablanca', totalButs: 86, butsSaison: 13 },
    { nom: 'Zakaria', prenom: 'El Hachimi', club: 'Raja de casablanca', age: '22 ans', poste: 'Attaquant', president: 'wac de Casablanca', totalButs: 11, butsSaison: 12 },
    { nom: 'Soufiane', prenom: 'Boufetini', club: 'Beni Mellal', age: '24 ans', poste: 'Attaquant', president: 'OCK', totalButs: 22, butsSaison: 10 },
    { nom: 'Taoufik', prenom: 'ijrouten', club: 'Kac', age: '26 ans', poste: 'Attaquant', president: 'Berkan', totalButs: 26, butsSaison: 9 },
    { nom: 'khalid', prenom: 'ait orekhan', club: 'Youssoufia de berchid', age: '25 ans', poste: 'Attaquant', president: 'Hassania Agadir', totalButs: 16, butsSaison: 6 },
    { nom: 'Hamza', prenom: 'Khaba', club: 'Zemamra', age: '27 ans', poste: 'Attaquant', president: 'Raja de Casablanca', totalButs: 33, butsSaison: 16 },
];

// Fonction pour créer le tableau
function createTable() {
    const tableBody = document.querySelector('#playersTable tbody');
    
    players.forEach(player => {
        const row = document.createElement('tr');
        
        row.innerHTML = `
            <td><a href="#" class="player-name">${player.nom}</a></td>
            <td>${player.prenom}</td>
            <td>${player.club}</td>
            <td>${player.age}</td>
            <td>${player.poste}</td>
        `;
        
        tableBody.appendChild(row);
    });
}

// Fonction pour afficher les détails du joueur
function showPlayerDetails(player) {
    const popup = document.getElementById('playerDetails');
    const playerInfo = document.getElementById('playerInfo');
    
    playerInfo.innerHTML = `
        <strong>Club Président :</strong> ${player.president}<br>
        <strong>Buts Totaux :</strong> ${player.totalButs}<br>
        <strong>Buts Saison Actuel :</strong> ${player.butsSaison}
    `;
    
    popup.style.display = 'block';
}

// Fonction pour fermer la popup
function closePopup() {
    document.getElementById('playerDetails').style.display = 'none';
}

// Initialiser la page
document.addEventListener('DOMContentLoaded', () => {
    createTable();
    
    // Événement de clic pour afficher les détails
    document.querySelector('#playersTable').addEventListener('click', event => {
        if (event.target.classList.contains('player-name')) {
            event.preventDefault();
            const playerName = event.target.textContent;
            const player = players.find(p => p.nom === playerName);
            showPlayerDetails(player);
        }
    });
    
    // Événement de clic pour fermer la popup
    document.querySelector('.close').addEventListener('click', closePopup);
    
    // Fermer la popup en cliquant en dehors
    window.addEventListener('click', event => {
        if (event.target === document.getElementById('playerDetails')) {
            closePopup();
        }
    });
});
