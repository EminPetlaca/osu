const point = document.getElementById("point");
const startGame = document.getElementById("startGame");

let pointInterval;


startGame.onclick = () => {
    startGame.style.display = "none";
    startPointInterval()
}

const movePoint = (element, x, y) => {
    element.style.top = `${y}px`
    element.style.left = `${x}px`
}

const startPointInterval = () => {
    clearInterval(pointInterval);
    setPointClick(point);  
    pointInterval = setInterval(() => {
        setSize(point, getRandomNumber(50,100));
        movePoint(point, getRandomNumber(100,1000), getRandomNumber(100,1000));
    }, 2500);
};


const getRandomNumber = (minimum, maximum) => (Math.random() * (maximum - minimum + 1)) << 0

const setPointClick = (element) => {
    element.onclick = () => {
        element.innerText++;
    }
}

const setSize = (element, size) => {
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
}

