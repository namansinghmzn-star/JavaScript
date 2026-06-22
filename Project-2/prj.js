let questions = [
    {
        question: "What is 2 + 2?",
        answer: "4"
    },
    {
        question: "What color is the sky?",
        answer: "blue"
    },
    {
        question: "JavaScript is a ____ language.",
        answer: "programming"
    }
];

let answers = [
    "4",
    "blue",
    "programming"
];

let score = 0;

for (let i = 0; i < questions.length; i++) {

    if (answers[i] === questions[i].answer) {
        score++;
    }

}

console.log("Final Score:", score);