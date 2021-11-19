document.getElementById('play_set').addEventListener('contextmenu', function (event){
    event.preventDefault();
});

let box = document.querySelectorAll('section button');
let a = 1;
let playerTurn = document.getElementById('player_turn');
let b;

console.log(box);

for (let i = 0; i < box.length; i++) {
    box[i].addEventListener('mouseup', function (e) {

        // draw X
        function left() {
            box[i].innerHTML = 'X';
        }

        //draw O
        function right() {
            box[i].innerHTML = 'O';
        }

        // right or left click, player turn
        function chooseRgtLft() {
            switch (e.button){
                case 0:
                    if (a % 2 === 1 && box[i].innerHTML !== 'X' && box[i].innerHTML !== 'O') {
                        left();
                        playerTurn.innerText = "Tour du joueur O";
                        a++;
                    }
                    break;
                case 2:
                    if (a % 2 === 0 && box[i].innerHTML !== 'X' && box[i].innerHTML !== 'O') {
                        right();
                        playerTurn.innerText = "Tour du joueur X";
                        a++;
                    }
                    break;
            }
        }

        chooseRgtLft();
        winCondition();
    });
}

// test if someone won
function winCondition() {
   //line 1
   if (box[0].innerHTML === box[1].innerHTML && box[1].innerHTML=== box[2].innerHTML){
        b = box[0].innerHTML;
        win()
   }
   // line 2
   else if (box[3].innerHTML === box[4].innerHTML && box[4].innerHTML=== box[5].innerHTML) {
        b = box[3].innerHTML;
        win();
   }
   // line 3
   else if (box[6].innerHTML === box[7].innerHTML && box[7].innerHTML=== box[8].innerHTML) {
        b = box[6].innerHTML;
        win();
   }

   // column 1
   else if (box[0].innerHTML === box[3].innerHTML && box[3].innerHTML=== box[6].innerHTML) {
       b = box[0].innerHTML;
       win();
   }

   //column 2
   else if (box[1].innerHTML === box[4].innerHTML && box[4].innerHTML=== box[7].innerHTML) {
       b = box[1].innerHTML;
       win();
   }

   // column 3
   else if (box[2].innerHTML === box[5].innerHTML && box[5].innerHTML=== box[8].innerHTML) {
       b = box[2].innerHTML;
       win();
   }

   // diagonal up left, down right
   else if (box[0].innerHTML === box[4].innerHTML && box[4].innerHTML=== box[8].innerHTML) {
       b = box[0].innerHTML;
       win();
   }

   // diagonal up right, down left
   else if (box[2].innerHTML === box[4].innerHTML && box[4].innerHTML=== box[6].innerHTML) {
       b = box[2].innerHTML;
       win();
   }
}

// What to do if someone win
function win() {
    if (b === 'X') {
        playerTurn.innerText = 'Joueur X à gagné !'
        playerTurn.style.fontSize = '1.5rem';
    } else if (b === 'O') {
        playerTurn.innerText = 'Joueur O à gagné !'
        playerTurn.style.fontSize = '1.5rem';
    }
}

