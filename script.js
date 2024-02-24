const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
let delay = 0;

function hideButtons() {
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
}

yesBtn.addEventListener("click", () => {
  question.innerHTML = "I love you too! 😘";
  gif.src = "https://media.giphy.com/media/XdwYIsIZC4ebXmRPIE/giphy.gif";
  hideButtons();
});

noBtn.addEventListener("click", () => {
  question.innerHTML = "I hate U";
  gif.src = "https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcmhnbjVzbW5xMGNxMnRmaTB2ZGF3OHR3eG9oNzJxOTQ1ZmNldGkzaiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/kFgzrTt798d2w/giphy.gif";
  hideButtons();
});

noBtn.addEventListener("mouseover", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  setTimeout(() => {
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
  }, delay);

  delay += 0.5;
});
