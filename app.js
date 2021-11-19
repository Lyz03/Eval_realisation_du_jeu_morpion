document.getElementById('play_set').addEventListener('contextmenu', function (event){
    event.preventDefault();
});

let box = document.querySelectorAll('section button');
let a = 1;

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

        // Is that a right or a left click ?
        function chooseRgtLft() {
            switch (e.button){
                case 0:
                    if (a % 2 === 1) {
                        left();
                        a++
                    }
                    break;
                case 2:
                    if (a % 2 === 0) {
                        right();
                        a++
                    }
                    break;
            }
        }

        chooseRgtLft();
    });
}

function winCondition() {

}

/*
    let a;
    switch (e.button){
        case 0:
            a = 'gauche';
            console.log(a)
            break;
        case 2:
            a = 'droite'
            console.log(a)
            break;
    }
 */