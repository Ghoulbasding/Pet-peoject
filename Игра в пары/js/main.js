
let game = document.getElementById('game');
let card;
let chechCard;
let button;



function newCard(number) {

    card = document.createElement('div');
    card.classList.add('card');
    card.textContent = number;

    game.addEventListener('click', function (e) {
        e.target.classList.add('open');
    })

    game.append(card);
    return card;

};

// Этап 1. Создайте функцию, генерирующую массив парных чисел. Пример массива, который должна возвратить функция: [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8].count - количество пар.

let randomNambers = [];

function createNumbersArray(count) {
    for (let i = 1; i <= count / 2; i++) {
        randomNambers.push(i);
        randomNambers.push(i);
    }
}

// Этап 2. Создайте функцию перемешивания массива.Функция принимает в аргументе исходный массив и возвращает перемешанный массив. array - массив чисел

function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
};

function restartGame(){
    button = document.createElement('button');
    button.classList.add('btn__restart');
    button.textContent = 'Начать ззаново'
    document.querySelector('.container').append(button)
    button.addEventListener('click', ()=>{
        game.innerHTML = '';
        startGame()
        firstCard = null;
        secondCard = null;
        button.remove();
    })
};

// Этап 3. Используйте две созданные функции для создания массива перемешанными номерами. На основе этого массива вы можете создать DOM-элементы карточек. У каждой карточки будет свой номер из массива произвольных чисел. Вы также можете создать для этого специальную функцию. count - количество пар.

function startGame(count) {
    
    let firstCard = null;
    let secondCard = null;
    

    createNumbersArray(count);
    shuffle(randomNambers);
    for (const item of randomNambers) {
        newCard(item);
    }

    game.addEventListener('click', function (event) {

        if (firstCard !== null && secondCard !== null) {
            if (firstCard.textContent !== secondCard.textContent) {
                firstCard.classList.remove('open')
                secondCard.classList.remove('open')
                firstCard = null;
                secondCard = null;
            }
        }

        if (firstCard == null) {
            firstCard = event.target;
            console.log(firstCard.textContent);
        } else {
            if (secondCard == null) {
                secondCard = event.target;
                console.log(secondCard.textContent);
            }
        }

        if (firstCard !== null && secondCard !== null) {
            if (firstCard.textContent == secondCard.textContent) {
                firstCard.classList.add('succesed')
                secondCard.classList.add('succesed')
                firstCard = null;
                secondCard = null;
            }
        }

        chechCard = document.querySelectorAll('.card.succesed');
        if (chechCard.length == count) {
             restartGame();
        }

    }) 

    
}

startGame(16)







