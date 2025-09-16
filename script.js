const symbols = ["🍒", "🍋", "7"];
const spinBtn = document.getElementById("spinBtn");
const resultP = document.getElementById("result");

spinBtn.addEventListener("click", () => {
    const reel1 = symbols[Math.floor(Math.random() * symbols.length)];
    const reel2 = symbols[Math.floor(Math.random() * symbols.length)];
    const reel3 = symbols[Math.floor(Math.random() * symbols.length)];

    resultP.textContent = `${reel1} | ${reel2} | ${reel3}`;

    if (reel1 === reel2 && reel2 === reel3) {
        resultP.textContent += " - Jackpot!";
    }
});
