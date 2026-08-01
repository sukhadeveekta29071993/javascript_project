let secretNo = Math.trunc(Math.random() * 20)+1;
console.log(secretNo);

let score = 20;
let highScored = 0;

const displayMassage  = function(msg){
    document.querySelector('.message').textContent = msg;
}

document.querySelector('.check').addEventListener("click", function(){
    const guess = Number(document.querySelector('.guess').value)
    if (!guess) {
        displayMassage("No number guess");
    } else if (guess === secretNo) {
        displayMassage("Thats correct");
        document.querySelector('.number').textContent = secretNo;
        document.querySelector('body').style.backgroundColor = '#60b347';
        if (score > highScored) {
            highScored = score;
            document.querySelector('.highScore').textContent = highScored;
        }
    } else if (guess !== secretNo) {
        if (score > 1) {
            displayMassage(guess >secretNo ? 'Too High !' : 'Too Low');
            score--;
            document.querySelector('.score').textContent = score;
        }
       
    } 
     else{
            displayMassage('You lost the game');
             document.querySelector('.score').textContent = 0;
        }
})

