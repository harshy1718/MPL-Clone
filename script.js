let balance = 100;
let moneyUsed = 0;
let username = '';

function playGame(gameName) {
    alert(`Starting ${gameName}!`);
}

function showWallet() {
    document.getElementById('wallet-popup').style.display = 'flex';
}

function showProfile() {
    document.getElementById('profile-popup').style.display = 'flex';
    document.getElementById('money-used').textContent = moneyUsed;
    document.getElementById('profile-username').textContent = username;
}

function showGameOptions(gameName) {
    document.getElementById('game-title').textContent = gameName + ' Options';
    document.getElementById('game-options-popup').style.display = 'flex';
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = 'none';
}

function enterGame(option) {
    let entryFee = option.includes('₹6') ? 6 : option.includes('₹12') ? 12 : 2;
    if (balance >= entryFee) {
        balance -= entryFee;
        moneyUsed += entryFee;
        document.getElementById('balance').textContent = balance;
        alert(`Entered game with option: ${option}`);
    } else {
        alert('Insufficient balance to enter the game');
    }
}

function deposit() {
    const amount = prompt('Enter amount to deposit:');
    if (amount) {
        balance += parseFloat(amount);
        document.getElementById('balance').textContent = balance;
    }
}

function withdraw() {
    const amount = prompt('Enter amount to withdraw:');
    if (amount && parseFloat(amount) <= balance) {
        balance -= parseFloat(amount);
        document.getElementById('balance').textContent = balance;
    } else {
        alert('Insufficient balance or invalid amount');
    }
}

window.onload = function() {
    username = prompt('Please enter your username:');
    if (username) {
        document.getElementById('welcome-message').textContent = `Welcome, ${username}! Enjoy your favorite games and win rewards!`;
    } else {
        username = 'Guest';
        document.getElementById('welcome-message').textContent = 'Welcome, Guest! Enjoy your favorite games and win rewards!';
    }
}
