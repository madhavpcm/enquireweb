let que;
let all_answer;
let correct_answer;
let input;
const api_url = "https://opentdb.com/api.php?amount=1&type=multiple";
async function catchquestion() {
    console.log("Getting Question...");
    const response = await fetch(api_url);
    const data = await response.json();
    que = data.results[0].question;
    correct_answer = data.results[0].correct_answer;
    data.results[0].incorrect_answers.push(correct_answer);
    all_answer = data.results[0].incorrect_answers;
    all_answer.sort();
    document.getElementById("ans").innerHTML = '<button type="button" class="list-group-item" id="answer0" onclick="input = this.innerHTML; takeinput();"></button><button type="button" class="list-group-item" id="answer1" onclick="input = this.innerHTML; takeinput();"></button><button type="button" class="list-group-item" id="answer2" onclick="input = this.innerHTML; takeinput();"></button><button type="button" class="list-group-item" id="answer3" onclick="input = this.innerHTML; takeinput();"></button>';
    document.getElementById("question").innerHTML = que;
    document.getElementById("answer0").innerHTML = all_answer[0];
    document.getElementById("answer1").innerHTML = all_answer[1];
    document.getElementById("answer2").innerHTML = all_answer[2];
    document.getElementById("answer3").innerHTML = all_answer[3];

}
function cor() {
    return correct_answer;
}
catchquestion()
    .then(response => {
        console.log('Questions got');
    })
    .catch(error => {
        console.error(error);
    });
function takeinput() {
    console.log(input);
    if (input == correct_answer) {

        document.getElementById("ans").style.backgroundColor = '#9bfc55';
        document.getElementById("ans").innerHTML = '<p>That was correct!<p>';
        document.getElementById("ans").innerHTML += '<h6 onclick="catchquestion()">Try again?</h6>';
    }
    else {
        document.getElementById("ans").style.backgroundColor = '#fc7455';
        document.getElementById("ans").innerHTML = '<p>That was wrong!<p>';
        document.getElementById("ans").innerHTML += '<p>' + correct_answer + " was the correct answer <p>";
        document.getElementById("ans").innerHTML += '<h6 onclick="catchquestion()">Try again?</h6>';

    }
}