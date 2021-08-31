let questionButtons = document.querySelectorAll(".question-btn");
let mainButton = document.getElementById("play-btn");
let nextButton = document.getElementById("next-btn");
let mainText = document.querySelector(".main-text");
let hearts = document.getElementsByClassName(".hearts");
//get a random question from the opentdb api
let correctAnswer ;
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
    
    checkAnswer()
    // nextQuestion()
    console.log(correctAnswer);
  } catch (error) {
    console.log(error);
  }
}

let wrongModal = document.getElementById("wrongModal");
let correctModal = document.getElementById("correctModal");
let correctModalContent = document.querySelector(".correct-content")
let wrongModalContent = document.querySelector(".wrong-content")
const questionHandler = (e) => {
    console.log(e.target.innerText)
    console.log(correctAnswer)
    if (e.target.innerText === correctAnswer) {        
        console.log("logging the modal ", correctModal);
        correctModal.style.display = "block";
        correctModalContent.classList.remove("hide");
        // setTimeout((e) => {e.target.addEventListener("click", startGame())}, 5000);
      } else {
        wrongModal.style.display = "block";
        wrongModalContent.classList.remove("hide");
        // setTimeout(() => {modal.style.display = "none";},() => {wrongModal.classList.add("hide")}, fetchData, 5000)
      }}

    function checkAnswer() {
        questionButtons.forEach((e) => {e.removeEventListener("click", questionHandler)})
        questionButtons.forEach((e) => {e.addEventListener("click", questionHandler)})
    }

  // function nextQuestion() {
  //   nextButton.forEach((e) => {e.removeEventListener("click", questionHandler)})
  //   nextButton.forEach((e) => {e.addEventListener("click", questionHandler)})
  // }


// fetchData()
function startGame() {
  mainButton.addEventListener("click", () => {
    fetchData();
    console.log(questionButtons);
    mainButton.innerText = "Next Question";
  });
}

startGame();
//when clicking the begin button, load the next question
