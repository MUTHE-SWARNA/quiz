let score = 0; 
let correctAnswer; 

function generateQuestion() {
    const num1 = Math.floor(Math.random() * 10) + 1; 
    const num2 = Math.floor(Math.random() * 10) + 1; 
    correctAnswer = num1 * num2; 
    document.getElementById("question").innerText = `Q. What is ${num1} Multiply by ${num2}?`;
}

function submitAnswer(event) {
    event.preventDefault(); 

    const userAnswer = Number(document.getElementById("input").value);
    
    if (userAnswer === correctAnswer) {
        score++; 
        document.getElementById("feedback").innerText = "Correct "; 
        document.getElementById("score").innerText = score; 
        document.getElementById("input").value = ""; 
        generateQuestion(); 
    } else {
        score--; 
        document.getElementById("feedback").innerText = `Incorrect! The correct answer is ${correctAnswer}.`; 
        document.getElementById("score").innerText = score; 
        document.getElementById("input").value = ""; 
        generateQuestion(); 
    }
}


window.onload = generateQuestion;
