let depth = [
    "",
    "",
    "Black",
    "Dark brown",
    "Medium brown",
    "Light brown",
    "Dark blonde",
    "Medium blonde",
    "Light blonde",
    "Very light blonde",
    "Lightest blonde"
]

let tone = [
    "Natural",
    "Ash",
    "Cool ash",
    "Gold",
    "Red",
    "Mahogany",
    "Violet",
    "Brunette",
    "Pearl",
    "Cendre"
]

let questionDepthCount = 1;
let questionToneCount = 1;
let firstDepth = generateDepth();
let secondDepth = generateDepth();
let firstTone = generateTone();
let secondTone = generateTone();

function generateDepth() {
    let number = Math.floor(Math.random() * 10);
    if (number == 0) {
        number = 5
    }
    if (number == 1) {
        number = 3
    }
    return number 
}

function generateTone() {
    let number = Math.floor(Math.random() * 10);
    if (number == 10) {
        number = 5
    }
    return number
}

function displayQuestion() {
    firstDepth = generateDepth();
    secondDepth = generateDepth();
    firstTone = generateTone();
    secondTone = generateTone();
    let depthCount = Math.floor(Math.random() * 10);
    let toneCount = Math.floor(Math.random() * 10);
    let depth = '';
    let tone = '';
    
    if (depthCount > 5) {
        depth = `${firstDepth} ${secondDepth}`;
        questionDepthCount = 2;
    } else {
        depth = `${firstDepth}`;
        questionDepthCount = 1;
    }
    
    if (toneCount > 5) {
        tone = `${firstTone} ${secondTone}`;
        questionToneCount = 2;
    } else {
        tone = `${firstTone}`;
        questionToneCount = 1;
    }
    
    let question = `${depth} / ${tone}`;
    
    questionContainer.innerHTML = question;
}

function getAnswer() {
    let answerDepth = "";
    let answerTone = "";
    if (questionDepthCount == 1) {
        answerDepth = `${depth[firstDepth]}`;
    } else {
        answerDepth = `${depth[firstDepth]} ${depth[secondDepth]}`;
    }

    if (questionToneCount == 1) {
        answerTone = `${tone[firstTone]}`;
    } else {
        answerTone = `${tone[firstTone]} ${tone[secondTone]}`;
    }

    let answer = `${answerDepth} / ${answerTone}`;
    return answer.toLowerCase().replace(/ /g, "");
}

function displayAnswer() {
    answerContainer.innerHTML = getAnswer();
}

function checkAnswer() {    
    const userInput = document.querySelector('#userInput').value.toLowerCase().replace(/ /g, "");
    if (userInput == getAnswer()) {
        answerContainer.innerHTML = "Correct. <button class='btn btn-success m-2' onclick='location.reload()'>Again</button>";
        setTimeout(console.log("print"), 5000);
    } else {
        answerContainer.innerHTML = "";
    }
}

const questionContainer = document.querySelector('#questionContainer');
const answerContainer = document.querySelector('#answerContainer');

displayQuestion();