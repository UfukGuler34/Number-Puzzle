const puzzle_number = document.querySelectorAll('#puzzle_number');
const tip_number = document.querySelectorAll(".tip-number");
var puzzle_hidden = [0, 0, 0, 0];
var counter = 0;
var green = 0;

const puzzle_generator = (place) => {
    for (var i = 0; i < place.length; i++) {
        place[i] = Math.floor(Math.random() * 10)
    }
    return place
}
puzzle_hidden = puzzle_generator(puzzle_hidden)
console.log(puzzle_hidden)

const number_generator = (place) => {
    place.innerHTML = Math.floor(Math.random() * 10)
}
for (let i = 0; i < tip_number.length; i++) {
    number_generator(tip_number[i])
}
for (j = 0; j < 4; j++) {
    for (let i = 0; i < 16; i++) {
        if (puzzle_hidden[j] != tip_number[i].textContent) {
            counter++;
        }
    }
    if (counter == 16) {
        tip_number[j].textContent = puzzle_hidden[j]
    }
    counter = 0
}


for (let j = 0; j < 4; j++) {
    for (let i = j; i < 16; i++) {
        if (puzzle_hidden[j] == tip_number[i].textContent) {
            if (i % 4 == j) {
                tip_number[i].classList.toggle("active")
            }
            else {
                tip_number[i].classList.toggle("wrong_place")
            }
        }
    }
}
const check = (i) => {
    if (parseInt(puzzle_number[i].value) == puzzle_hidden[i]) {
        console.log(puzzle_number[i].value)
        puzzle_number[i].classList.toggle("active")
        green++;
    }
    if (green == 4) {
        window.location.reload();
    }
}
