const FRONT = "card_front";
const BACK = "card_back";
const CARD = "card";
const ICON = "icon";


startGame()

function startGame() {
    // game.createCardFromTechs()
    initializeCards( game.createCardFromTechs());
}

function initializeCards(cards) {
    let gameBoard = document.getElementById("gameBoard");
    
    game.cards.forEach(card => {

        let cardElement = document.createElement("div");
        cardElement.id = card.id
        cardElement.classList.add(CARD)
        cardElement.dataset.icon = card.icon

        createCardContent(card, cardElement)

        cardElement.addEventListener('click', flipCard);
        gameBoard.appendChild(cardElement);
    })
}

function createCardContent(card, cardElement) {

    createCardFace(FRONT, card, cardElement)
    createCardFace(BACK, card, cardElement)
}

function createCardFace(face, card, element) {

    let cardElementFace = document.createElement('div')
    cardElementFace.classList.add(face)

    if(face === FRONT) {
        let iconEelement = document.createElement('img')
        iconEelement.classList.add(ICON)
        iconEelement.src = "./assets/images/" + card.icon + ".png"
        cardElementFace.appendChild(iconEelement)
    }else {
        cardElementFace.innerHTML = "&lt/&gt";
    }
    element.appendChild(cardElementFace)
}


function flipCard() {

    if(game.setCard(this.id)) {
        this.classList.add('flip');
        if(game.checkMatch()) {
            game.clearCrads();
        } else {
            setTimeout(() => {

                let firstCardView = document.getElementById(game.firstCard.id);
                let secondCardView = document.getElementById(game.secondCard.id);
    
                firstCardView.classList.remove('flip');
                secondCardView.classList.add('flip');

            }, 1000);

        };
    }

    this.classList.add("flip")
}