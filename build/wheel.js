const wheel = document.getElementById('wheel');
const spinButton = document.getElementById('spinButton');
const resultModal = document.getElementById('resultModal');
const resultText = document.getElementById('resultText');
const closeModal = document.querySelector('.close');

const options = [
    { text: "Watch a movie at home and have popcorn", color: "#FF5733" },
    { text: "Go to a park", color: "#33FF57" },
    { text: "Make a special dinner", color: "#3357FF" },
    { text: "Visit grandma", color: "#FF33A1" },
    { text: "Invent a game at home", color: "#FFBF00" },
    { text: "Go for a walk around the city", color: "#00BFFF" }
];


const angleStep = 360 / options.length;
const colorStops = options.map((option, index) => `${option.color} ${index * (100 / options.length)}% ${((index + 1) * (100 / options.length))}%`).join(", ");

wheel.style.background = `conic-gradient(${colorStops})`;

function spinWheel() {
    const randomIndex = Math.floor(Math.random() * options.length);
    const targetDeg = 360 * 3 + (randomIndex * angleStep);
    gsap.to(wheel, {
        duration: 3,
        rotation: targetDeg,
        ease: 'power4.out',
        onComplete: () => {
            const option = options[options.length - Math.floor((targetDeg % 360) / angleStep) - 1];
            resultText.innerHTML = `¡Te toca hacer: ${option.text}!`;
            resultModal.style.display = 'block';
        }
    });
}

spinButton.addEventListener('click', spinWheel);
wheel.addEventListener('click', spinWheel);

closeModal.onclick = () => {
    resultModal.style.display = 'none';
}

window.onclick = (event) => {
    if (event.target === resultModal) {
        resultModal.style.display = 'none';
    }
}
