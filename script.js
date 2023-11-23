let scores = [0, 0];

function rollDice() {
    const dice1 = document.getElementById("dice1");
    const dice2 = document.getElementById("dice2");
    const scoreDisplay1 = document.getElementById("score1");
    const scoreDisplay2 = document.getElementById("score2");
    const winnerDisplay = document.getElementById("winner");

    // Add roll animation class
    dice1.classList.add("roll-animation");
    dice2.classList.add("roll-animation");

    // Remove previous dots
    dice1.innerHTML = '<div class="dot-container"></div>';
    dice2.innerHTML = '<div class="dot-container"></div>';

    setTimeout(() => {
        const rollResult1 = Math.floor(Math.random() * 6) + 1;
        const rollResult2 = Math.floor(Math.random() * 6) + 1;

        updateDice(dice1, rollResult1);
        updateDice(dice2, rollResult2);

        scores[0] = rollResult1;
        scores[1] = rollResult2;

        // Reset animation class after rolling
        dice1.classList.remove("roll-animation");
        dice2.classList.remove("roll-animation");

        scoreDisplay1.textContent = scores[0];
        scoreDisplay2.textContent = scores[1];

        if (scores[0] > scores[1]) {
            winnerDisplay.textContent = "Player 1 wins!";
        } else if (scores[1] > scores[0]) {
            winnerDisplay.textContent = "Player 2 wins!";
        } else {
            winnerDisplay.textContent = "It's a tie!";
        }

        disableButton();
    }, 1000); // Wait for 1 second for the animation to complete
}

function updateDice(diceElement, value) {
    const dotContainer = diceElement.querySelector('.dot-container');

    for (let i = 0; i < value; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        dotContainer.appendChild(dot);
    }
}

function disableButton() {
    const button = document.querySelector("button");
    button.disabled = true;

    // Refresh the page after a delay
    setTimeout(() => {
        location.reload();
    }, 1000); // Refresh after 3 seconds
}
