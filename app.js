let questionButtons = document.querySelectorAll(".question-btn")
let mainButton = document.getElementById("#play-btn")
let mainText = document.querySelector(".main-text")
//get a random question from the opentdb api
async function fetchData() {
    let url = "https://opentdb.com/api.php?amount=1";

    try{
        let response = await axios.get(url);
        let data = response.data
        let question = data.results[0].question
        let correctAnswer = data.results[0].correct_answer
        let wrongAnswers = data.results[0].incorrect_answers
        let allAnswers = [correctAnswer, ...wrongAnswers]
        let fullQuestion = data.results[0]
        allAnswers.forEach((e) => {
            questionButtons.innerText = JSON.stringify(e);


        })
        console.log(allAnswers)
    }catch(error){
        console.log(error)
    }
};
fetchData()
// function startGame() {
//     mainButton.addEventListener("click", fetchData());
// }
// startGame()
// function setNextQuestion() {
// }









//when clicking the begin button, load the next question 