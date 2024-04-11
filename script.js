const deck = document.querySelectorAll(".memory-card");
const again = document.querySelector(".again");
const startTimer = 10;
// const timeBox = document.querySelector("#timer")
// timeBox.innerText = 0 
let timesHamerCLicked = 0
let firstCard, secondCard;
let hasFlippedCard = false;
let time = startTimer * 0;
console.log("jel")
// Random shuffle.
function shuffle() {
    // let srcImg = []
  deck.forEach((card) => { 
    let blackbox = document.createElement("img");
    blackbox.classList = "blkbox";
    blackbox.src = "./images/blackbox.png";
    card.appendChild(blackbox);
    //   srcImg.push(card.src.split("images")[1])
    let randomPos = Math.floor(Math.random() * 15);
      card.style.order = randomPos;
    });
    // console.log(srcImg)
};
shuffle()

deck.forEach((card) => card.addEventListener("click", flipCard));

function flipCard() {
  console.log(this.querySelector("img").src)
  this.querySelector("img").classList.remove("hidden");
  this.querySelector(".blkbox").classList.add("hidden");
  this.classList.add("face");
  //this.querySelector("img").src = "./images/blackbox.png";
  //console.log()
  // this.style.backgroundColor = "#FFFFFF";
  console.log(this.querySelector("img").alt,'alt')
  if(this.querySelector("img").alt ==="hammer") timesHamerCLicked++
  if (this === firstCard) return;
  this.classList.add("flip");

  if (!hasFlippedCard) {
    // first click
    hasFlippedCard = true;
    firstCard = this;
    // startTime();
    return;
  }
  secondCard = this;
  checkForMatch();

  if (timesHamerCLicked === 2) {
     endLevelSection.classList.replace("hidden", "show");
  }
}

function checkForMatch() {
  console.log("jj")
  let isMatch = firstCard.src === secondCard.src;
  isMatch ? disableCards() : unFlipCards();
}

function disableCards() {
  // if true
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
  gameWon();
}

function unFlipCards() {
  // if false/ not a match
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");
  };

function gameWon() {
  console.log(timesHamerCLicked)
  // let click = -1;
  // if (click < 1) {
  //   firstCard = etarget;
  // }
    if (document.getElementsByClassName("flip").length === 5) {
    endLevelSection.classList.replace("hidden", "show");
  }
  click = 0;
}

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


again.addEventListener("click", function () {
  endLevelSection.classList.replace("show", "hidden");
    window.location.reload();
       // document.getElementById("endLevelSection").style.display = "none";
    //display block when i want to call again.
});
