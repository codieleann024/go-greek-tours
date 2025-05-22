// converting default px to rems
let text14px = 14 / 16 + "rem";
console.log(text14px); // 0.875rem

let text16px = 16 / 16 + "rem";
console.log(text16px); // 1rem

let text18px = 18 / 16 + "rem";
console.log(text18px); // 1.125rem

let text22px = 22 / 16 + "rem";
console.log(text22px); // 1.375rem

let text26px = 26 / 16 + "rem";
console.log(text26px); // 1.625rem

let text34px = 34 / 16 + "rem";
console.log(text34px); // 2.125rem

let text40px = 40 / 16 + "rem";
console.log(text40px); // 2.5rem


// Default Sizing Buttons
const textSizing = document.getElementById("textSizing");
textSizing.setAttribute("aria-hidden", "true")

const defaultSizingBtn = document.createElement("button");
defaultSizingBtn.innerText = "A";
defaultSizingBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.style.fontSize = ".875rem";
  document.querySelector("h2").style.fontSize = "1rem";
  document.querySelector("span").style.fontSize =  "1.125rem";
  document.getElementById("travel").style.fontSize = "1.375rem";
  document.getElementById("explore").style.fontSize = "1.625rem";
  document.querySelector("blockquote").style.fontSize = "2.125rem";
  document.getElementById("h1").style.fontSize = "2.5rem";
  defaultSizingBtn.style.outline = "2px solid #000";
});
textSizing.appendChild(defaultSizingBtn);


// Medium Sizing Button
const increaseSizingBtn = document.createElement("button");
increaseSizingBtn.innerText = "A";
increaseSizingBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.style.fontSize = "1rem";
  document.querySelector("h2").style.fontSize = "1.25rem";
  document.querySelector("span").style.fontSize =  "1.4rem";
  document.getElementById("travel").style.fontSize = "1.6rem";
  document.getElementById("explore").style.fontSize = "1.85rem";
  document.querySelector("blockquote").style.fontSize =  "2.25rem";
  document.getElementById("h1").style.fontSize = "2.75rem";
});
textSizing.appendChild(increaseSizingBtn);


// Large Sizing Button
const increaseMoreSizingBtn = document.createElement("button");
increaseMoreSizingBtn.innerText = "A";
increaseMoreSizingBtn.addEventListener("click", (e) => {
  e.preventDefault();
  document.body.style.fontSize = "1.25rem";
  document.querySelector("h2").style.fontSize = "1.5rem";
  document.querySelector("span").style.fontSize =  "1.65rem";
  document.getElementById("travel").style.fontSize = "1.85rem";
  document.getElementById("explore").style.fontSize = "2.1rem";
  document.querySelector("blockquote").style.fontSize = "2.5rem";
  document.getElementById("h1").style.fontSize = "3rem";
});
textSizing.appendChild(increaseMoreSizingBtn);


// controls position and style
document.getElementById('controls').style.position = 'absolute';
document.getElementById('controls').style.top = '0';
document.getElementById('controls').style.right = '0';

document.getElementById("controls").style.padding = "10px";
document.getElementById("controls").style.background = "rgba(255,255,255,.5)";


// Button styling
const buttons = document.querySelectorAll("#textSizing button");

let currentButton = 0;

buttons[currentButton].style.outline = "2px solid #000";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    buttons[currentButton].style.outline = "none";
    currentButton = Array.from(buttons).indexOf(e.target);
    buttons[currentButton].style.outline = "2px solid #000";
  });
});


// title tags for text sizing buttons
defaultSizingBtn.setAttribute("title", "Regular Text Size");
increaseSizingBtn.setAttribute("title", "Larger Text Size");
increaseMoreSizingBtn.setAttribute("title", "Largest Text Size");


// Dark to light theme
 const themeButton = document.querySelector('#themeButton');
 const body = document.querySelector('body');
 const footerLinks = document.querySelectorAll('.footer a');
 const joinButton = document.querySelector('.btn-join');


  let theme = 'Light';

  themeButton.innerHTML = 'Dark Theme';
  themeButton.style.cursor = 'pointer';
  themeButton.style.padding = '10px';
  themeButton.addEventListener('click', toggleTheme);

  function toggleTheme() {
    if (theme === 'Light') {
      theme = 'Dark';
      themeButton.innerHTML = 'Light Theme';
      themeButton.style.background = '#ccc';
      themeButton.style.color = '#000';
      body.style.background = '#000';
      document.querySelector('blockquote').style.color = '#fff';
      footerLinks.forEach(link => {
        link.style.color = '#fff';
        link.style.hover = '#ccc';
        link.style.focus = '#ccc';
      });
      joinButton.style.color = '#000';
      joinButton.style.background = '#ccc';
      joinButton.style.hover = '#000';
      joinButton.style.focus = '#000';
    } else {
      theme = 'Light';
      themeButton.innerHTML = 'Dark Theme';
      themeButton.style.background = '#000';
      themeButton.style.color = '#fff';
      body.style.background = '#fff';
      document.querySelector('blockquote').style.color = '#000';
      footerLinks.forEach(link => {
        link.style.color = '#000';
        link.style.hover = '#000';
        link.style.focus = '#000';
      });
      joinButton.style.color = '#fff';
      joinButton.style.background = '#000';
      joinButton.style.hover = '#ccc';
      joinButton.style.focus = '#ccc';
    }
  }


// Breakpoints
function showHideElements() {
  const themeButton = document.getElementById('themeButton');
  const controls = document.getElementById('controls');

  if (window.innerWidth <= 1010) {
    themeButton.style.display = 'none';
  } else {
    themeButton.style.display = 'block';
  }

  if (window.innerWidth <= 600) {
    controls.style.display = 'none';
  } else {
    controls.style.display = 'block';
  }
}

window.addEventListener('resize', showHideElements);