let body = document.body;
let container = document.getElementById("container");



// Theme ----
let systemTheme = localStorage.getItem("theme") || (window.matchMedia("(prefers-color-scheme:light)").matches ? "light":"dark");

function themeChange(systemTheme) {
  let themeIcon = document.getElementById("theme-icon");
  let html = document.documentElement;
  if (systemTheme==="light") {
    themeIcon.innerHTML = "dark_mode";
    if (html.classList.contains("dark")) {
      html.classList.replace("dark", "light");
    }
  } else {
    themeIcon.innerHTML = "light_mode";
    if (html.classList.contains("light")) {
      html.classList.replace("light", "dark");
    }
  }
  localStorage.setItem("theme", systemTheme);
}

function toggleTheme() {
  if (systemTheme === "light") {
    systemTheme = "dark";
  } else {
    systemTheme = "light";
  }
  themeChange(systemTheme);
}

document.documentElement.className = "light";
themeChange(systemTheme);
// -----



// Virtual Scrolling ---------------
let totalCards = 256*256*256;
let minCardWidth = 100; //px
let gapX = 10; //px
let gapY = 20; //px
let containerWidth = container.clientWidth;
totalColumns = Math.max(1, Math.floor((containerWidth + gapX) / (minCardWidth + gapX)));
let totalRows =Math.ceil(totalCards/totalColumns);
let cardHeight = 140; //px
let cardWidth = (containerWidth - (totalColumns - 1) * gapX) / totalColumns;
let buffer = 4;    //4 Rows
let visibleCardRows = Math.ceil(window.innerHeight/cardHeight);
let items = [];

// Variable Changing on resize 
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  }
}
window.addEventListener("resize", debounce(() => {
  containerWidth = container.clientWidth;
  totalColumns = Math.max(1, Math.floor((containerWidth + gapX) / (minCardWidth + gapX)));
  cardWidth = (containerWidth - (totalColumns - 1) * gapX) / totalColumns;
  totalRows = Math.ceil(totalCards / totalColumns);
  container.style.height = totalRows * (cardHeight + gapY) + "px";
  visibleCardRows = Math.ceil(window.innerHeight / cardHeight);
  update();
}, 100));

container.style.height = totalRows * (cardHeight+gapY) + "px";

// Generating Cards
for (let i=0; i< (visibleCardRows + (buffer*2)) * totalColumns; i++) {
  
  const div = document.createElement("div");
  div.className = "gridItem";
  div.addEventListener("click",() => {
    if (div.id) cardDetail(div.id);
  });
  const h4 = document.createElement("h4");
  div.appendChild(h4);
  container.appendChild(div);
  items.push(div);
}

//Updating Cards on Scroll ----
function update() {
  const scrollTop = window.scrollY;
  const startRow = Math.max(Math.floor(scrollTop/(cardHeight+gapY)) - buffer, 0);
  const startIndex = Math.max(startRow * totalColumns, 0);
  
  for (let i=0; i<items.length; i++) {
    const itemIndex = startIndex + i;
    
    if (itemIndex >= 0 && itemIndex < totalCards) {
      const color = colorAtIndex(itemIndex);
      const row = Math.floor(itemIndex / totalColumns);
      const col = itemIndex % totalColumns;
      
      items[i].id = color[1];
      items[i].style.backgroundColor = color[0];
      items[i].style.width = cardWidth + "px";
      items[i].style.transform = `translate(${col * (cardWidth + gapX)}px, ${row * (cardHeight + gapY)}px )`;
      items[i].style.display = "block";
      
      items[i].firstChild.textContent = 
      color[1].toUpperCase();
      items[i].firstChild.style.color = getTextColor(color[1]);
      
    } else {
      items[i].style.display = "none";
    }
  }
}

let ticking = false;
window.addEventListener("scroll", () => {
  if (!ticking) {
    requestAnimationFrame(() => {
      update();
      ticking = false;
    });
    ticking = true;
  }
});
update() //For initial Cards
//---------------



function colorAtIndex(index) {
  const r = Math.floor(index / (256 * 256));
  const g = Math.floor((index / 256) % 256);
  const b = index % 256;
  const rgb = `rgb(${r},${g},${b})`;
  const hex  = "#" + 
    r.toString(16).padStart(2, "0") + 
    g.toString(16).padStart(2, "0") + 
    b.toString(16).padStart(2, "0");
  const color = [rgb, hex];
  return color;
}

function getTextColor(bgHex) {
  const r = parseInt(bgHex.substr(1, 2), 16);
  const g = parseInt(bgHex.substr(3, 2), 16);
  const b = parseInt(bgHex.substr(5, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 150 ? '#000' : '#FFF';
}



// Card Modal ----
function cardDetail(color) {
  // here color in Hex e.g, #01ACD7
  const modal = document.getElementById("color-modal");
  const modalContent = document.getElementById("color-modal-content");
  modalContent.innerHTML = "";
  
  const closeBtn = document.createElement("div");
  closeBtn.id = "modal-content-close";
  closeBtn.className = "material-symbols-outlined";
  closeBtn.textContent = "close";
  closeBtn.onclick = () => modal.classList.add("hidden");
  
  modalContent.appendChild(closeBtn);
  const mainCard = document.createElement("div");
  let otherCard = document.createElement("div");
  mainCard.style.backgroundColor = color;
  mainCard.className = "color-card-main";
  otherCard.className = "color-card-other";
  
  for (let i = 1; i<10; i++) {
    const div = document.createElement("div");
    div.style.backgroundColor = color;
    div.style.opacity = `0.${i}`;
    div.className = "color-card-nine";
    otherCard.appendChild(div);
    
  }
  
  modalContent.appendChild(mainCard);
  modalContent.appendChild(otherCard);
  modal.classList.remove("hidden");
}

document.getElementById("color-modal").addEventListener("click", function (e) {
  if (e.target.id === "color-modal") {
    this.classList.add("hidden");
  }
});
//------



// Back to Top ----
window.onscroll = function () {
  const button = document.getElementById("back-to-top");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
    }
};

document.getElementById("back-to-top").onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
//-----