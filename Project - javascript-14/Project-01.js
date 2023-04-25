const quizSelector = document.getElementById("quiz-selector");
const quizContainer = document.getElementById("quiz-container");
const resultsContainer = document.getElementById("results-container");
const questionContainer = document.getElementById("question-container");
const answerButtonContainer = document.getElementById("answer-buttons-container");

class Quiz {
    constructor(questions){
        this.questions = Quiz.shuffleArray(questions);
        this.currentQuestionIndex = 0;
        this.score = 0;
        // this.displayQuestion();
    };


    displayQuestion(){
        console.log("here it is")
    answerButtonContainer.innerHTML = "";   
    const currentQuestion = this.questions[this.currentQuestionIndex];
    questionContainer.style.fontSize = "22px";
    questionContainer.textContent = currentQuestion.question;
    const answers = Quiz.shuffleArray(currentQuestion.answers);

    answers.forEach((answer) => {
        const button = document.createElement("button");
        button.classList = ["answer-button"];
        button.textContent = answer;
        button.addEventListener("click", this.checkAnswer.bind(this));
        answerButtonContainer.appendChild(button);
    });

    };
    checkAnswer(event){
        
        console.log("select", this.questions,this.currentQuestionIndex);
        const selectedAnswer = event.target.textContent;
        const currentQuestion = this.questions[this.currentQuestionIndex];

        if(selectedAnswer === currentQuestion.correctAnswer){
            this.score++;
        }
        this.currentQuestionIndex++;

        if(this.currentQuestionIndex < this.questions.length){
            this.displayQuestion(); 

        }else{

            this.showResult();
        };

    };

    showResult(){
        quizContainer.style.display = "none";
        resultsContainer.style.display = "block";
        resultsContainer.innerHTML =
                                    `<h2>Quiz Result</h2>
                                    <p> You scored ${this.score} Out of ${this.questions.length} Questions</p>
                                    <button id="reload-quiz"> Reload All Quizzes </button>`
                                    ;
        document.getElementById("reload-quiz").addEventListener("click", () => {
            quizContainer.style.display = "none";
            resultsContainer.style.display = "none";
            quizSelector.style.display = "flex"; 
        });                            

    };

    static shuffleArray(arr){
        return [...arr].sort(()=>Math.random()-0.5);

    };
};

const loadQuiz = (questions) => {
    const quiz = new Quiz(questions);
    quiz.displayQuestion(); 
    quizContainer.style.display = "block";
    quizSelector.style.display = "none";
};

const loadAllQuiz = async() => {
    const response =  await fetch("./quizzes.json" );
    const quizzes = await response.json();

    quizzes.forEach((quiz, index) => {
        const quizCard = document.createElement("div");
        quizCard.classList = ["quiz-card"];
        quizCard.innerText = "Quiz" + (index+1);
        quizCard.addEventListener("click", () => loadQuiz(quiz));
        quizSelector.appendChild(quizCard);
    });
};
loadAllQuiz();


