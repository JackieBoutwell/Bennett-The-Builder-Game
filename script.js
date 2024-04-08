const deck = document.querySelectorAll(".memory-card");
const again = document.querySelector(".again");

let firstCard, secondCard;

// Random shuffle.
function shuffle() {
    // let srcImg = []
    deck.forEach((card) => { 
    //   srcImg.push(card.src.split("images")[1])
    let randomPos = Math.floor(Math.random() * 15);
    card.style.order = randomPos;
    });
    // console.log(srcImg)
};
shuffle()

deck.forEach((card) => card.addEventListener("click", flipCard));

function flipCard() {
  if (this === firstCard) return;
  this.classList.add("flip");

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;
    startTime();
    return;
  }
  //second click
  secondCard = this;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.id === secondCard.dataset.id;
  isMatch ? disableCards() : unFlipCards();
}

// cards.forEach((card) => card.addEventListener("click", flipCard));


// document.getElementById('bbbbbb').addEventListener("click", function () {
//     document.getElementById('bbbbbb').src="./images/level.png";
//     this.style.backgroundColor = "#FFFFFF";
// });


// document.querySelector('container').addEventListener("click", function (event) {
//     event.target
    
//     // document.getElementById('level').src="./images/level.png";
//     // this.style.backgroundColor = "#FFFFFF";
// });

// document.addEventListener('click', function (card) {
//     console.log(card.target);

// });


// again.addEventListener("click", function () {
//   endLevelSection.classList.replace("show", "hidden");
//   location.reload();
// });

// console.log()