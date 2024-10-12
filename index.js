const users = [];
let currentMatch = null;

document.getElementById('user-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const gender = document.getElementById('gender').value;
    const instagram = document.getElementById('instagram').value;
    const snapchat = document.getElementById('snapchat').value;

    users.push({ name, gender, instagram, snapchat });
    matchUsers();
});

function matchUsers() {
    const males = users.filter(user => user.gender === 'male');
    const females = users.filter(user => user.gender === 'female');

    if (males.length > 0 && females.length > 0) {
        const maleMatch = males[Math.floor(Math.random() * males.length)];
        const femaleMatch = females[Math.floor(Math.random() * females.length)];

        currentMatch = { male: maleMatch, female: femaleMatch };

        displayMatch(currentMatch);
    }
}

function displayMatch(match) {
    const matchesDiv = document.getElementById('matches');
    matchesDiv.innerHTML = `
        <h2>Matched:</h2>
        <p>${match.male.name} (Male) - Instagram: ${match.male.instagram}, Snapchat: ${match.male.snapchat}</p>
        <p>${match.female.name} (Female) - Instagram: ${match.female.instagram}, Snapchat: ${match.female.snapchat}</p>
    `;
    document.getElementById('chat').style.display = 'block';
}

document.getElementById('send').addEventListener('click', function() {
    const message = document.getElementById('message').value;
    const chatWindow = document.getElementById('chat-window');
    if (message) {
        chatWindow.innerHTML += `<p>${message}</p>`;
        document.getElementById('message').value = '';
    }
});
