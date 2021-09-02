//buttons
let questionButtons = document.querySelectorAll(".question-btn");
let mainButton = document.getElementById("play-btn");
let nextButton = document.querySelectorAll(".next-btn");
let wizButton = document.querySelector(".wiz-btn");
let mainText = document.querySelector(".main-text");
let playAgain = document.querySelectorAll(".try-again-btn");
let rulesBtn = document.querySelector(".rules-btn");
let closeBtn = document.querySelector(".close-btn");

//content containers
let mainContent = document.querySelector(".main-container");
let playerScore = document.querySelector(".score");
let character = document.querySelector(".character");
let howToPlay = document.querySelector(".rules");
//dropdowns
let categoryDropdown = document.getElementById("categories");


let difficultyDropdown = document.getElementById("difficulty");
let catValue;
let difficultyValue;
const catSelected = () => {
  catValue = categoryDropdown.options[categoryDropdown.selectedIndex].value;

}
const diffSelected = () => {
 difficultyValue = difficultyDropdown.options[difficultyDropdown.selectedIndex].value;
}
categoryDropdown.addEventListener("change", catSelected);
  // console.log(catValue)


  difficultyDropdown.addEventListener("change", diffSelected);
  // console.log(difficultyValue)





//modals
let wrongModal = document.getElementById("wrongModal");
let correctModal = document.getElementById("correctModal");
let wizModal = document.getElementById("wizModal");
let gameOver = document.getElementById("deadModal");
let winModal = document.getElementById("winModal");
let rulesModal = document.getElementById("rulesModal");
let correctModalContent = document.querySelector(".correct-content");
let wrongModalContent = document.querySelector(".wrong-content");
let wizModalContent = document.querySelector(".wiz-content");
let gameOverContent = document.querySelector(".dead-content");
let winContent = document.querySelector(".win-content");
let rulesContent = document.querySelector(".rules-content");
//rules modal trigger
function rulesModalDisplay() {  
  rulesModal.style.display = "block";
  rulesContent.classList.remove("hide");
}
function rulesModalClose() {
  rulesModal.style.display = "none";
  rulesContent.classList.add("hide");
}
rulesBtn.addEventListener("click", rulesModalDisplay, console.log("clicked"));
closeBtn.addEventListener("click", rulesModalClose);

//score counters and health counters
// console.log(wrongModal)
let score = 0;
let health = 3;
let wizCounter = 0;
playerScore.innerText = score;
//get a random question from the opentdb api
let correctAnswer;
//array shuffler
let shuffle = (a) => {
  a.sort(() => Math.random() - 0.5);
}
async function fetchData() {
  
  let url = `https://opentdb.com/api.php?amount=1&category=${catValue}&difficulty=${difficultyValue}&encode=base64`;

  try {
    let response = await axios.get(url);
    let data = response.data;
    let fullQuestion = data.results[0];
    let question = atob(data.results[0].question);
    correctAnswer = data.results[0].correct_answer;
    let wrongAnswers = data.results[0].incorrect_answers;
    let allAnswers = [correctAnswer, ...wrongAnswers];
    shuffle(allAnswers);
    // console.log(fullQuestion);
    allAnswers.forEach((item, index) => {    
      mainText.innerText = question;
      // console.log(question);
      questionButtons[index].classList.remove("hide");
      questionButtons[index].innerText = atob(item);
      questionButtons[index]++;
    });

    // console.log(question); 

    checkAnswer();
    // console.log(url);
    // console.log(atob(correctAnswer));
  } catch (error) {
    console.log(error);
  }
}


const questionHandler = (e) => {
  // console.log(e.target.innerText);
  // console.log(correctAnswer);
  if (e.target.innerText === atob(correctAnswer)) {
    // console.log("logging the modal ", correctModal);
    correctModal.style.display = "block";
    correctModalContent.classList.remove("hide");
    score += 1;
    playerScore.innerText++;
  } else {
    wrongModal.style.display = "block";
    wrongModalContent.classList.remove("hide");
    health -= 1;
  }
  // console.log(score, health)
  if (score === 5 && health != 0) {
    // console.log("logging the modal ", wizModal);
    wizModal.style.display = "block";
    wizModalContent.classList.remove("hide");
    document.body.style.backgroundColor = "black"; 
    document.querySelector("footer").style.color = "white";   
  } else if (health === 0) {
    gameOver.style.display = "block";
    gameOverContent.classList.remove("hide");
    toggleHandler();
    } else if (score === 7 && health !=0) {
     winModal.style.display = "block";
     winContent.classList.remove("hide");
   }
};
const toggleHandler = () => {
  if (correctModal.style.display === "block") {
    // console.log("logging modal") 
    correctModal.style.display = "none";
    correctModalContent.classList.add("hide");
    questionButtons.forEach((item, index) => {questionButtons[index].classList.add("hide");})
    }else {
      wrongModal.style.display = "none";
      wrongModalContent.classList.add("none");
      questionButtons.forEach((item, index) => {questionButtons[index].classList.add("hide");})
    }
    fetchData()
}

function clearQuestions () {
    correctModal.style.display = "none";
    correctModalContent.classList.add("none");
    wrongModal.style.display = "none";
    wrongModalContent.classList.add("none");
    wizModal.style.display = "none";
    wizModalContent.classList.add("none");
}

function clearWinLoss() {
    gameOver.style.display = "none";
    gameOverContent.classList.add("none");
    winModal.style.display = "none";
    winContent.classList.add("none");
}

const wizBattle = () => {
    clearQuestions();
    questionButtons.forEach((item, index) => {questionButtons[index].classList.add("hide");})
    mainButton.classList.remove("hide");
    mainContent.style.backgroundImage = "url('assets/space.jpg')";
    mainText.style.color = "white";
    playerScore.style.color = "white";
    mainText.innerText = "The time has come! defeat the evil QUIZ-ard and save the universe! but remember, if you don't answer 2 questions correct - the Universe will be destroyed! Good luck!";
    character.src = "assets/evil-wiz.png";
    mainButton.innerText = "Begin";
}


  wizButton.addEventListener("click", wizBattle);


function checkModal() {
  // console.log("checkmodal running")
  nextButton.forEach((e) => {
    e.addEventListener("click", toggleHandler);
  })
}

function checkAnswer() {
  questionButtons.forEach((e) => {
    e.removeEventListener("click", questionHandler);
  });
  questionButtons.forEach((e) => {
    e.addEventListener("click", questionHandler);
  });
}

  function restartGame() {
    // mainText.innerText = "Do you think you have what it takes to defeat the time QUIZ-ard and save the realm?";
    // clearQuestions();
    // clearWinLoss();
    // questionButtons.forEach((e, i) => {
    //   questionButtons[i].classList.add("hide");
    // })
    // mainButton.classList.remove("hide");
    // console.log("restart")
    location.reload();
  }
  function playTheGameAgain() {
    playAgain.forEach((e) => {
      e.removeEventListener("click", restartGame);
    })
    playAgain.forEach((e) => {
      e.addEventListener("click", restartGame);
    })
    
  }
  
// console.log(nextButton)

function startGame() {
  mainButton.addEventListener("click", () => {
    if (catValue != null && difficultyValue != null) {
      categoryDropdown.style.display = "none";
      difficultyDropdown.style.display = "none";
      fetchData();
    // console.log(questionButtons);    
    mainButton.classList.add("hide");
    checkModal();
    playTheGameAgain();
    } else {
      alert("Please choose a category and difficulty");
    }
    
    // console.log(fetchData)
  });}

  startGame();

//if category selected && difficulty selected pass values of these too url and start game
//






//you have 2 chances of 3 to win, if you click wrongANswer more than twice lose the game 
//[true, true, false]
//wiz = 3 
//if correctQuess <= 2 display win card
//else if correctQuess > 2 display death card
// | x x  = 


//option = number
//when user selects an option, pass that value to the url when the start button is clicked





