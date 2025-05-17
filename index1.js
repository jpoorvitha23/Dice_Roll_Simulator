
document.getElementById('roll-button').addEventListener('click', function() {
    // Dice faces represented as Unicode characters (one for each side of a die)
    const diceFaces = ['&#9856;', '&#9857;', '&#9858;', '&#9859;', '&#9860;', '&#9861;'];

    // Generate a random index between 0 and 5 (since we have 6 dice faces)
    const randomIndex = Math.floor(Math.random() * 6);

    // Get the dice element and update its innerHTML with the random dice face
    document.getElementById('dice').innerHTML = diceFaces[randomIndex];

    // Get the roll history list and add a new roll entry
    const rollHistory = document.getElementById('roll-history');
    const newRoll = document.createElement('li');
    newRoll.innerHTML = `Roll ${rollHistory.children.length + 1}: <span>${diceFaces[randomIndex]}</span>`;
    rollHistory.appendChild(newRoll);
});
