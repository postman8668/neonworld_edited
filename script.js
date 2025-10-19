const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');

const cards = document.querySelectorAll('.card');
let currentCardIndex = Math.floor(cards.length / 2);

function updateCards() {
    for (const [index, card] of Object.entries(cards)) {
        let i = parseInt(index);

        const delta = i - currentCardIndex;

        // translateX(100%) scale(0.9)
        card.style.transform = `translateX(${delta}00%)` + (i != currentCardIndex ? " scale(0.8)" : "");
    }
}

function updateButtons() {
    prevButton.disabled = currentCardIndex == 0;
    nextButton.disabled = currentCardIndex == cards.length - 1;
}

updateCards();

nextButton.addEventListener("click", () => {
    currentCardIndex++;
    if (currentCardIndex > cards.length - 1)
        currentCardIndex--;

    updateCards();
    updateButtons();
});

prevButton.addEventListener("click", () => {
    currentCardIndex--;
    if (currentCardIndex < 0)
        currentCardIndex++;

    updateCards();
    updateButtons();
});