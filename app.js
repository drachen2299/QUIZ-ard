let questionButtons = document.querySelectorAll(".question-btn");
let mainButton = document.getElementById("play-btn");
let nextButton = document.querySelectorAll(".next-btn");
let mainText = document.querySelector(".main-text");
let hearts = document.getElementsByClassName(".hearts");
//get a random question from the opentdb api
let correctAnswer;
async function fetchData() {
  let url = "https://opentdb.com/api.php?amount=1";

  try {
    let response = await axios.get(url);
    let data = response.data;
    let fullQuestion = data.results[0];
    let question = data.results[0].question;
    correctAnswer = data.results[0].correct_answer;
    let wrongAnswers = data.results[0].incorrect_answers;
    let allAnswers = [correctAnswer, ...wrongAnswers];
    console.log(fullQuestion);
    allAnswers.forEach((item, index) => {
      mainText.innerText = question;
      console.log(question);
      questionButtons[index].classList.remove("hide");
      questionButtons[index].innerText = item;
      questionButtons[index]++;
    });

    checkAnswer();
    console.log(correctAnswer);
  } catch (error) {
    console.log(error);
  }
}

let wrongModal = document.getElementById("wrongModal");
let correctModal = document.getElementById("correctModal");
let correctModalContent = document.querySelector(".correct-content");
let wrongModalContent = document.querySelector(".wrong-content");
const questionHandler = (e) => {
  console.log(e.target.innerText);
  console.log(correctAnswer);
  if (e.target.innerText === correctAnswer) {
    console.log("logging the modal ", correctModal);
    correctModal.style.display = "block";
    correctModalContent.classList.remove("hide");
  } else {
    wrongModal.style.display = "block";
    wrongModalContent.classList.remove("hide");
  }
};

const toggleHandler = () => {
  if (correctModal.style.display === "block") {
    console.log("logging modal") 
    correctModal.style.display = "none";
    correctModalContent.classList.add("hide");
    }else {
      wrongModal.style.display = "none";
      wrongModalContent.classList.add("none");
    }
    mainButton.style.display = "none";
    fetchData()
}

function checkModal() {
  console.log("checkmodal running")
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
console.log(nextButton)
function startGame() {
  mainButton.addEventListener("click", () => {
    fetchData();
    console.log(questionButtons);
    mainButton.innerText = "Next Question";
    checkModal();
  });
  
  //for each button
  //add event listener
  //toggle hide on the events target classList
}

startGame();
//when clicking the begin button, load the next question
// let next question button remove styling and display next question
// let nextQuestion = (e) => {
//   switch (e.style.display === "block"){
//    add even listener to remove styleing and go to next question
//     e.target.addEventListener("click", () => {
//       correctModal.style.display = "none";
//       correctModalContent.classList.add("hide");
//      })
//   }else {
//     e.target.addEventListener("click", () => {
//     same just reveresed
//   }
//return(nextQuestion())
// }
