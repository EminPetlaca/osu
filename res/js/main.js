const point = document.getElementById("point");
const startGame = document.getElementById("startGame");
const timeInfo = document.getElementById("timeInfo");

let pointInterval;


startGame.onclick = () => {
    
    startGame.style.display = "none";
    startPointInterval();
    timeInfo
};

const movePoint = (element, x, y) => {
    element.style.top = `${y}px`
    element.style.left = `${x}px`
    console.log(parseFloat(element.style.width));
};

const startPointInterval = () => {
    clearInterval(pointInterval);
    setPointClick(point);  
    pointInterval = setInterval(() => {
        setSize(point, getRandomNumber(40,90));
        movePoint(point, getRandomNumber(0,window.innerWidth - parseFloat(point.style.width)), getRandomNumber(0,window.innerHeight - parseFloat(point.style.height)));
    }, 900);
};


const getRandomNumber = (min, max) => Math.floor(min + Math.random()*(max - min + 1));

let timeStart = 0;
const setPointClick = (element) => {
    element.onclick = () => {
        if (timeStart == 0){
            timeStart = performance.now();
        } else{
            let timeEnd = performance.now();
            let result = timeEnd - timeStart;
            timeInfo.innerText = `Time: ${Math.round(result)}ms`
            timeStart = performance.now();
        }
        element.innerText++;
        movePoint(element, getRandomNumber(0, window.innerWidth - parseFloat(element.style.width)), getRandomNumber(0,window.innerHeight - parseFloat(element.style.width)))
    }
};

const setSize = (element, size) => {
    element.style.width = `${size}px`;
    element.style.height = `${size}px`;
};

