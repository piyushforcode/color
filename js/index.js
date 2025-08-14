let bookmarkArray = JSON.parse(localStorage.getItem("bookmarks")) || [];
let searchHistory = JSON.parse(sessionStorage.getItem("history")) || [];
const colorNameArray = [
  ["AliceBlue","#F0F8FF","rgb(240,248,255)","hsl(208,100%,97%)"],
  ["AntiqueWhite","#FAEBD7","rgb(250,235,215)","hsl(34,78%,91%)"],
  ["Aqua","#00FFFF","rgb(0,255,255)","hsl(180,100%,50%)"],
  ["Aquamarine","#7FFFD4","rgb(127,255,212)","hsl(160,100%,75%)"],
  ["Azure","#F0FFFF","rgb(240,255,255)","hsl(180,100%,97%)"],
  ["Beige","#F5F5DC","rgb(245,245,220)","hsl(60,56%,91%)"],
  ["Bisque","#FFE4C4","rgb(255,228,196)","hsl(33,100%,88%)"],
  ["Black","#000000","rgb(0,0,0)","hsl(0,0%,0%)"],
  ["BlanchedAlmond","#FFEBCD","rgb(255,235,205)","hsl(36,100%,90%)"],
  ["Blue","#0000FF","rgb(0,0,255)","hsl(240,100%,50%)"],
  ["BlueViolet","#8A2BE2","rgb(138,43,226)","hsl(271,76%,53%)"],
  ["Brown","#A52A2A","rgb(165,42,42)","hsl(0,59%,41%)"],
  ["BurlyWood","#DEB887","rgb(222,184,135)","hsl(34,57%,70%)"],
  ["CadetBlue","#5F9EA0","rgb(95,158,160)","hsl(182,25%,50%)"],
  ["Chartreuse","#7FFF00","rgb(127,255,0)","hsl(90,100%,50%)"],
  ["Chocolate","#D2691E","rgb(210,105,30)","hsl(25,75%,47%)"],
  ["Coral","#FF7F50","rgb(255,127,80)","hsl(16,100%,66%)"],
  ["CornflowerBlue","#6495ED","rgb(100,149,237)","hsl(219,79%,66%)"],
  ["Cornsilk","#FFF8DC","rgb(255,248,220)","hsl(48,100%,93%)"],
  ["Crimson","#DC143C","rgb(220,20,60)","hsl(348,83%,47%)"],
  ["Cyan","#00FFFF","rgb(0,255,255)","hsl(180,100%,50%)"],
  ["DarkBlue","#00008B","rgb(0,0,139)","hsl(240,100%,27%)"],
  ["DarkCyan","#008B8B","rgb(0,139,139)","hsl(180,100%,27%)"],
  ["DarkGoldenRod","#B8860B","rgb(184,134,11)","hsl(43,89%,38%)"],
  ["DarkGray","#A9A9A9","rgb(169,169,169)","hsl(0,0%,66%)"],
  ["DarkGreen","#006400","rgb(0,100,0)","hsl(120,100%,20%)"],
  ["DarkKhaki","#BDB76B","rgb(189,183,107)","hsl(56,38%,58%)"],
  ["DarkMagenta","#8B008B","rgb(139,0,139)","hsl(300,100%,27%)"],
  ["DarkOliveGreen","#556B2F","rgb(85,107,47)","hsl(82,39%,30%)"],
  ["DarkOrange","#FF8C00","rgb(255,140,0)","hsl(32,100%,50%)"],
  ["DarkOrchid","#9932CC","rgb(153,50,204)","hsl(280,61%,50%)"],
  ["DarkRed","#8B0000","rgb(139,0,0)","hsl(0,100%,27%)"],
  ["DarkSalmon","#E9967A","rgb(233,150,122)","hsl(15,72%,70%)"],
  ["DarkSeaGreen","#8FBC8F","rgb(143,188,143)","hsl(120,25%,60%)"],
  ["DarkSlateBlue","#483D8B","rgb(72,61,139)","hsl(248,39%,39%)"],
  ["DarkSlateGray","#2F4F4F","rgb(47,79,79)","hsl(180,25%,25%)"],
  ["DarkTurquoise","#00CED1","rgb(0,206,209)","hsl(181,100%,41%)"],
  ["DarkViolet","#9400D3","rgb(148,0,211)","hsl(282,100%,41%)"],
  ["DeepPink","#FF1493","rgb(255,20,147)","hsl(328,100%,54%)"],
  ["DeepSkyBlue","#00BFFF","rgb(0,191,255)","hsl(195,100%,50%)"],
  ["DimGray","#696969","rgb(105,105,105)","hsl(0,0%,41%)"],
  ["DodgerBlue","#1E90FF","rgb(30,144,255)","hsl(210,100%,56%)"],
  ["FireBrick","#B22222","rgb(178,34,34)","hsl(0,68%,42%)"],
  ["FloralWhite","#FFFAF0","rgb(255,250,240)","hsl(40,100%,97%)"],
  ["ForestGreen","#228B22","rgb(34,139,34)","hsl(120,61%,34%)"],
  ["Fuchsia","#FF00FF","rgb(255,0,255)","hsl(300,100%,50%)"],
  ["Gainsboro","#DCDCDC","rgb(220,220,220)","hsl(0,0%,86%)"],
  ["GhostWhite","#F8F8FF","rgb(248,248,255)","hsl(240,100%,99%)"],
  ["Gold","#FFD700","rgb(255,215,0)","hsl(51,100%,50%)"],
  ["GoldenRod","#DAA520","rgb(218,165,32)","hsl(43,74%,49%)"],
  ["Gray","#808080","rgb(128,128,128)","hsl(0,0%,50%)"],
  ["Green","#008000","rgb(0,128,0)","hsl(120,100%,25%)"],
  ["GreenYellow","#ADFF2F","rgb(173,255,47)","hsl(84,100%,59%)"],
  ["HoneyDew","#F0FFF0","rgb(240,255,240)","hsl(120,100%,97%)"],
  ["HotPink","#FF69B4","rgb(255,105,180)","hsl(330,100%,71%)"],
  ["IndianRed","#CD5C5C","rgb(205,92,92)","hsl(0,53%,58%)"],
  ["Indigo","#4B0082","rgb(75,0,130)","hsl(275,100%,25%)"],
  ["Ivory","#FFFFF0","rgb(255,255,240)","hsl(60,100%,97%)"],
  ["Khaki","#F0E68C","rgb(240,230,140)","hsl(54,77%,75%)"],
  ["Lavender","#E6E6FA","rgb(230,230,250)","hsl(240,67%,94%)"],
  ["LavenderBlush","#FFF0F5","rgb(255,240,245)","hsl(340,100%,97%)"],
  ["LawnGreen","#7CFC00","rgb(124,252,0)","hsl(90,100%,49%)"],
  ["LemonChiffon","#FFFACD","rgb(255,250,205)","hsl(54,100%,90%)"],
  ["LightBlue","#ADD8E6","rgb(173,216,230)","hsl(195,53%,79%)"],
  ["LightCoral","#F08080","rgb(240,128,128)","hsl(0,79%,72%)"],
  ["LightCyan","#E0FFFF","rgb(224,255,255)","hsl(180,100%,94%)"],
  ["LightGoldenRodYellow","#FAFAD2","rgb(250,250,210)","hsl(60,80%,90%)"],
  ["LightGray","#D3D3D3","rgb(211,211,211)","hsl(0,0%,83%)"],
  ["LightGreen","#90EE90","rgb(144,238,144)","hsl(120,73%,75%)"],
  ["LightPink","#FFB6C1","rgb(255,182,193)","hsl(351,100%,86%)"],
  ["LightSalmon","#FFA07A","rgb(255,160,122)","hsl(17,100%,74%)"],
  ["LightSeaGreen","#20B2AA","rgb(32,178,170)","hsl(177,70%,41%)"],
  ["LightSkyBlue","#87CEFA","rgb(135,206,250)","hsl(203,92%,75%)"],
  ["LightSlateGray","#778899","rgb(119,136,153)","hsl(210,14%,53%)"],
  ["LightSteelBlue","#B0C4DE","rgb(176,196,222)","hsl(214,41%,78%)"],
  ["LightYellow","#FFFFE0","rgb(255,255,224)","hsl(60,100%,94%)"],
  ["Lime","#00FF00","rgb(0,255,0)","hsl(120,100%,50%)"],
  ["LimeGreen","#32CD32","rgb(50,205,50)","hsl(120,61%,50%)"],
  ["Linen","#FAF0E6","rgb(250,240,230)","hsl(30,67%,94%)"],
  ["Magenta","#FF00FF","rgb(255,0,255)","hsl(300,100%,50%)"],
  ["Maroon","#800000","rgb(128,0,0)","hsl(0,100%,25%)"],
  ["MediumAquaMarine","#66CDAA","rgb(102,205,170)","hsl(160,51%,60%)"],
  ["MediumBlue","#0000CD","rgb(0,0,205)","hsl(240,100%,40%)"],
  ["MediumOrchid","#BA55D3","rgb(186,85,211)","hsl(288,59%,58%)"],
  ["MediumPurple","#9370DB","rgb(147,112,219)","hsl(260,60%,65%)"],
  ["MediumSeaGreen","#3CB371","rgb(60,179,113)","hsl(147,50%,47%)"],
  ["MediumSlateBlue","#7B68EE","rgb(123,104,238)","hsl(249,80%,66%)"],
  ["MediumSpringGreen","#00FA9A","rgb(0,250,154)","hsl(157,100%,49%)"],
  ["MediumTurquoise","#48D1CC","rgb(72,209,204)","hsl(178,60%,55%)"],
  ["MediumVioletRed","#C71585","rgb(199,21,133)","hsl(322,81%,43%)"],
  ["MidnightBlue","#191970","rgb(25,25,112)","hsl(240,64%,27%)"],
  ["MintCream","#F5FFFA","rgb(245,255,250)","hsl(150,100%,98%)"],
  ["MistyRose","#FFE4E1","rgb(255,228,225)","hsl(6,100%,94%)"],
  ["Moccasin","#FFE4B5","rgb(255,228,181)","hsl(38,100%,85%)"],
  ["NavajoWhite","#FFDEAD","rgb(255,222,173)","hsl(36,100%,84%)"],
  ["Navy","#000080","rgb(0,0,128)","hsl(240,100%,25%)"],
  ["OldLace","#FDF5E6","rgb(253,245,230)","hsl(39,85%,94%)"],
  ["Olive","#808000","rgb(128,128,0)","hsl(60,100%,25%)"],
  ["OliveDrab","#6B8E23","rgb(107,142,35)","hsl(80,60%,35%)"],
  ["Orange","#FFA500","rgb(255,165,0)","hsl(39,100%,50%)"],
  ["OrangeRed","#FF4500","rgb(255,69,0)","hsl(16,100%,50%)"],
  ["Orchid","#DA70D6","rgb(218,112,214)","hsl(302,59%,65%)"],
  ["PaleGoldenRod","#EEE8AA","rgb(238,232,170)","hsl(55,67%,80%)"],
  ["PaleGreen","#98FB98","rgb(152,251,152)","hsl(120,93%,79%)"],
  ["PaleTurquoise","#AFEEEE","rgb(175,238,238)","hsl(180,65%,81%)"],
  ["PaleVioletRed","#DB7093","rgb(219,112,147)","hsl(340,59%,65%)"],
  ["PapayaWhip","#FFEFD5","rgb(255,239,213)","hsl(37,100%,92%)"],
  ["PeachPuff","#FFDAB9","rgb(255,218,185)","hsl(28,100%,86%)"],
  ["Peru","#CD853F","rgb(205,133,63)","hsl(30,59%,53%)"],
  ["Pink","#FFC0CB","rgb(255,192,203)","hsl(350,100%,88%)"],
  ["Plum","#DDA0DD","rgb(221,160,221)","hsl(300,47%,75%)"],
  ["PowderBlue","#B0E0E6","rgb(176,224,230)","hsl(187,52%,80%)"],
  ["Purple","#800080","rgb(128,0,128)","hsl(300,100%,25%)"],
  ["RebeccaPurple","#663399","rgb(102,51,153)","hsl(270,50%,40%)"],
  ["Red","#FF0000","rgb(255,0,0)","hsl(0,100%,50%)"],
  ["RosyBrown","#BC8F8F","rgb(188,143,143)","hsl(0,25%,65%)"],
  ["RoyalBlue","#4169E1","rgb(65,105,225)","hsl(225,73%,57%)"],
  ["SaddleBrown","#8B4513","rgb(139,69,19)","hsl(25,76%,31%)"],
  ["Salmon","#FA8072","rgb(250,128,114)","hsl(6,93%,71%)"],
  ["SandyBrown","#F4A460","rgb(244,164,96)","hsl(28,87%,67%)"],
  ["SeaGreen","#2E8B57","rgb(46,139,87)","hsl(146,50%,36%)"],
  ["SeaShell","#FFF5EE","rgb(255,245,238)","hsl(25,100%,96%)"],
  ["Sienna","#A0522D","rgb(160,82,45)","hsl(19,56%,40%)"],
  ["Silver","#C0C0C0","rgb(192,192,192)","hsl(0,0%,75%)"],
  ["SkyBlue","#87CEEB","rgb(135,206,235)","hsl(197,71%,73%)"],
  ["SlateBlue","#6A5ACD","rgb(106,90,205)","hsl(248,53%,58%)"],
  ["SlateGray","#708090","rgb(112,128,144)","hsl(210,13%,50%)"],
  ["Snow","#FFFAFA","rgb(255,250,250)","hsl(0,100%,99%)"],
  ["SpringGreen","#00FF7F","rgb(0,255,127)","hsl(150,100%,50%)"],
  ["SteelBlue","#4682B4","rgb(70,130,180)","hsl(207,44%,49%)"],
  ["Tan","#D2B48C","rgb(210,180,140)","hsl(34,44%,69%)"],
  ["Teal","#008080","rgb(0,128,128)","hsl(180,100%,25%)"],
  ["Thistle","#D8BFD8","rgb(216,191,216)","hsl(300,24%,79%)"],
  ["Tomato","#FF6347","rgb(255,99,71)","hsl(9,100%,64%)"],
  ["Turquoise","#40E0D0","rgb(64,224,208)","hsl(174,72%,56%)"],
  ["Violet","#EE82EE","rgb(238,130,238)","hsl(300,76%,72%)"],
  ["Wheat","#F5DEB3","rgb(245,222,179)","hsl(39,77%,83%)"],
  ["White","#FFFFFF","rgb(255,255,255)","hsl(0,0%,100%)"],
  ["WhiteSmoke","#F5F5F5","rgb(245,245,245)","hsl(0,0%,96%)"],
  ["Yellow","#FFFF00","rgb(255,255,0)","hsl(60,100%,50%)"],
  ["YellowGreen","#9ACD32","rgb(154,205,50)","hsl(80,60%,50%)"]
];
// In this Js, HEX value of color is main





// Theme --------
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

document.documentElement.className = systemTheme;
themeChange(systemTheme);
// ---------------





// Virtual Scrolling --------
let container = document.getElementById("container");
let totalCards, totalRows;
let minCardWidth = 100; //px
let gapX = 10; //px
let gapY = 20; //px
let containerWidth = container.clientWidth;
let totalColumns = Math.max(1, Math.floor((containerWidth + gapX) / (minCardWidth + gapX)));
let cardHeight = 140; //px
let cardWidth = (containerWidth - (totalColumns - 1) * gapX) / totalColumns;
let buffer = 4;    //4 Rows
let visibleCardRows = Math.ceil(window.innerHeight/cardHeight);
let items = [];

// Generating Cards DOM
for (let i=0; i< (visibleCardRows + (buffer*2)) * totalColumns; i++) {
  
  const div = document.createElement("div");
  div.className = "gridItem";
  div.addEventListener("click",() => {
    if (div.id) cardDetail(div.id);
  });
  const h41 = document.createElement("h4");
  const h42 = document.createElement("h4");
  div.appendChild(h41);
  div.appendChild(h42);
  container.appendChild(div);
  items.push(div);
}

//Updating Cards on Scroll -
function update(callback) {
  const scrollTop = window.scrollY;
  const startRow = Math.max(Math.floor(scrollTop/(cardHeight+gapY)) - buffer, 0);
  const startIndex = Math.max(startRow * totalColumns, 0);
  
  for (let i=0; i<items.length; i++) {
    const itemIndex = startIndex + i;
    
    if (itemIndex >= 0 && itemIndex < totalCards) {
      const color = callback(itemIndex);
      //color = [rgb, hex, name]
      const row = Math.floor(itemIndex / totalColumns);
      const col = itemIndex % totalColumns;
      
      items[i].id = color[1];
      items[i].style.backgroundColor = color[0];
      items[i].style.width = cardWidth + "px";
      items[i].style.transform = `translate(${col * (cardWidth + gapX)}px, ${row * (cardHeight + gapY)}px )`;
      items[i].style.display = "block";
      
      items[i].children[0].textContent = 
      color[2];
      items[i].children[0].style.color = getTextColor(color[1]);
      
      items[i].children[1].textContent = 
      color[1];
      items[i].children[1].style.color = getTextColor(color[1]);
      
    } else {
      items[i].style.display = "none";
    }
  }
}

let updater = null;
function displayCards(length, callback) {
  if (updater) window.removeEventListener("scroll", updater);
  totalCards = length;
  totalRows =Math.ceil(totalCards/totalColumns);
  container.style.height = totalRows * (cardHeight+gapY) + "px";
  update(callback);
  updater = () => update(callback);
  window.addEventListener("scroll", updater);
}
//---------------





// Colors --------
function colorAtIndex(index) {
  const r = Math.floor(index / (256 * 256));
  const g = Math.floor((index / 256) % 256);
  const b = index % 256;
  const rgb = `rgb(${r},${g},${b})`;
  const hex  = "#" + 
    r.toString(16).padStart(2, "0").toUpperCase() + 
    g.toString(16).padStart(2, "0").toUpperCase() + 
    b.toString(16).padStart(2, "0").toUpperCase();
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

function hexToHexa(hex, opacity=1) {
  if (opacity == 1) {
    return hex;
  } else {
    const hexa = hex + Math.round(opacity * 255).toString(16).padStart(2, "0").toUpperCase();
    return hexa;
  }
}

function hexToRgba(hex, opacity=1) {
  hex = hex.replace(/^#/, '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  let a = opacity;
  if (hex.length > 7) {
    a = parseInt(hex.substring(6, 8), 16)/100;
  }
  if (a == 1) {
    return `rgb(${r}, ${g}, ${b})`;
  } else {
    return `rgb(${r}, ${g}, ${b}, ${a})`;
  }
}

function rgbaToHexa(rgb) {
  const [r, g, b, a = 1] = rgb.match(/\d+(\.\d+)?/g).map(Number);
  const toHex = v => v.toString(16).padStart(2, "0");

  if (a === 1) {
    return "#" + [r, g, b].map(toHex).join("");
  } else {
    return "#" + [r, g, b, Math.round(a * 255)].map(toHex).join("");
  }
}
// ---------------





// Card Modal --------
function cardDetail(color) {
  // here color is in Hex e.g, #01ACD7
  const modal = document.getElementById("color-modal");
  const displayCard = document.getElementsByClassName("color-card-display")[0];
  let bookmarkIcon = document.getElementById("update-bookmark-icon");
  bookmarkIcon.style.color = getTextColor(color);
  const otherCard = document.getElementsByClassName("color-card-other")[0];
  const divRgb = document.getElementsByClassName("color-card-rgb")[0];
  const divHex = document.getElementsByClassName("color-card-hex")[0];
  const slider = document.getElementById("color-card-slider");
  const display = document.getElementById("color-card-slider-display");
  divHex.innerHTML = color;
  divRgb.innerHTML = hexToRgba(color);
  displayCard.style.backgroundColor = color;
  otherCard.innerHTML = "";
  
  for (let i = 1; i<10; i++) {
    const div = document.createElement("div");
    const icon = document.createElement("div");
    icon.className = "color-card-nine-bookmark-icon material-symbols-outlined"
    icon.innerHTML = "bookmark"
    div.style.backgroundColor = color;
    div.style.opacity = `0.${i}`;
    div.className = "color-card-nine";
    otherCard.appendChild(div);
  }
  
  function commitValue() {
    let val = parseInt(display.textContent.trim(), 10);
    if (isNaN(val)) val = slider.min;
    val = Math.max(slider.min, Math.min(slider.max, val));
    slider.value = val;
    display.textContent = val;
    divHex.textContent = hexToHexa(color, (val/100));
    divRgb.textContent = hexToRgba(color, (val/100));
    displayCard.style.backgroundColor = hexToHexa(color, (val/100));
    updateBookmarkIcon(bookmarkIcon, hexToHexa(color, (val/100)));
  }
  
  slider.addEventListener("input", () => {
    display.textContent = slider.value;
    divHex.textContent = hexToHexa(color, (slider.value/100));
    divRgb.textContent = hexToRgba(color, (slider.value/100));
    displayCard.style.backgroundColor = hexToHexa(color, (slider.value/100));
    updateBookmarkIcon(bookmarkIcon, hexToHexa(color, (slider.value/100)));

  });
  display.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
    e.preventDefault();
      commitValue();
      display.blur();
    }
  });

  display.addEventListener("blur",commitValue);
  
  updateBookmarkIcon(bookmarkIcon, color);
  modal.classList.remove("hidden");
}

function modalclose() {
  document.getElementById("color-modal").classList.add("hidden");
}

function copyTextFallback(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.select();
  try {
    document.execCommand("copy");
  } catch (err) {
  }
  document.body.removeChild(textarea);
}

function copyText(textNode) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(textNode.textContent)
      .then(() => {
        textNode.classList.add("copy-animation");
        textNode.addEventListener("animationend", () => { 
          textNode.classList.remove("copy-animation");
        }, {once: true});
      })
      .catch(err => {
        copyTextFallback(textNode.textContent);
      });
  } else {
    copyTextFallback(textNode.textContent);
  }
}

document.getElementById("color-modal").addEventListener("click", function (e) {
  if (e.target.id === "color-modal") {
    this.classList.add("hidden");
  }
});

document.documentElement.style.setProperty('--vh', window.innerHeight * 0.01 + 'px');
// ---------------





// Back to Top --------
window.onscroll = function () {
  const button = document.getElementById("back-to-top");
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    button.style.display = "block";
  } else {
    button.style.display = "none";
    }
};

document.getElementById("back-to-top").onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
//---------------





// Bookmark --------
const bookmarkClickHandler = function (f) {
  if (f.target.id === "bookmark-modal") {
    closeBookmark();
  }
};

function updateBookmarkIcon(iconNode, hex) {
  if (bookmarkArray.includes(hex)) {
    iconNode.innerHTML = "bookmark_added";
  } else {
    iconNode.innerHTML = "bookmark_add";
  }
}

function updateBookmarkArray(iconNode, rgba) {
  const hex = rgbaToHexa(rgba);
  const index = bookmarkArray.indexOf(hex);
  if (index >= 0) {
    bookmarkArray.splice(index, 1);
  } else {
    bookmarkArray.push(hex);
  }
  updateBookmarkIcon(iconNode, hex);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarkArray));
}

function removeBookmark(index) {
  const div = document.getElementById(`bookmark_${index+1}`);
  const width = getComputedStyle(document.getElementById("bookmark")).width;

  div.style.transform = `translateX(${width})`;
  bookmarkArray.splice(index, 1);
  localStorage.setItem("bookmarks", JSON.stringify(bookmarkArray));
  setTimeout(() => {
    div.classList.add("removing");
  }, 400);
  setTimeout(() => {
    createBookmarkDiv();
  }, 800);
}

function createBookmarkDiv(array=bookmarkArray) {
  let bookmarkDiv = document.getElementById("bookmark");
  bookmarkDiv.innerHTML = "";
  const h3 = document.createElement("h3");
  h3.innerHTML = "Bookmark";
  bookmarkDiv.appendChild(h3);
  array.forEach((color, index) => {
    const div = document.createElement("div");
    const indexDiv = document.createElement("div");
    const colorDiv = document.createElement("div");
    const removeDiv = document.createElement("div");
    const hexDiv = document.createElement("div");
    const rgbDiv = document.createElement("div");
    div.className = "bookmark-card";
    div.id = `bookmark_${index+1}`;
    indexDiv.innerHTML = (index + 1);
    indexDiv.className = "bookmark-card-index";
    colorDiv.className = "bookmark-card-color";
    colorDiv.style.backgroundColor = color;
    removeDiv.className = "remove-bookmark-icon material-symbols-outlined";
    removeDiv.innerHTML = "bookmark_remove";
    removeDiv.addEventListener("click", () => removeBookmark(index));
    hexDiv.id = `bookmark_hex_${index+1}`;
    hexDiv.className = "bookmark-card-hex";
    hexDiv.innerHTML = color;
    hexDiv.addEventListener("click", function(){copyText(this);});
    rgbDiv.id = `bookmark_rgb_${index+1}`;
    rgbDiv.className = "bookmark-card-rgb";
    rgbDiv.innerHTML = hexToRgba(color);
    rgbDiv.addEventListener("click", function() {copyText(this);});
    div.appendChild(indexDiv);
    div.appendChild(colorDiv);
    div.appendChild(removeDiv);
    div.appendChild(hexDiv);
    div.appendChild(rgbDiv);
    bookmarkDiv.appendChild(div);
  })
}

function openBookmark() {
  const bookmarkModal = document.getElementById("bookmark-modal");
  const bookmarkIcon = document.getElementById("bookmark-icon");
  createBookmarkDiv(bookmarkArray);
  bookmarkModal.style.width = "100%";
  bookmarkModal.addEventListener("click", bookmarkClickHandler);
  bookmarkIcon.style.setProperty("font-variation-settings", "'FILL' 1, 'wght' 700, 'GRAD' 50, 'opsz' 72" );
}

function closeBookmark() {
  const bookmarkModal = document.getElementById("bookmark-modal");
  const bookmarkIcon = document.getElementById("bookmark-icon");
  bookmarkModal.removeEventListener("click", bookmarkClickHandler);
  bookmarkModal.style.width = "0px";
  bookmarkIcon.style.removeProperty("font-variation-settings");
}

function toggleBookmark() {
  const bookmarkModal = document.getElementById("bookmark-modal");
  const modalWidth = getComputedStyle(bookmarkModal).width;
  if (modalWidth !== "0px") {
    closeBookmark();
  } else {
    openBookmark();
  }
}
// ---------------





// Search --------
let searchBoxOpen = false;
let searchModal = document.getElementById("search-modal");
let searchBox = document.getElementById("search-box");
let searchSuggestionBox = document.getElementById("search-suggestion-box");
let suggestionDiv = [];
let suggestionText = [];

searchBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      searchBox.blur();
      doSearch();
    }
 });
searchModal.addEventListener("click", function (e) {
  if (e.target.id === "search-modal") {
    searchBox.blur();
  }
});

function searchIcon() {
  if (searchBoxOpen) {
    searchBox.blur()
    searchBox.style.width = "0%";
    searchSuggestionBox.style.maxHeight = "0%";
    searchSuggestionBox.style.width = "0%";
    searchBox.style.opacity = "0";
    searchSuggestionBox.style.opacity = "0";
    if (!searchModal.classList.contains("hidden")) setTimeout(() => searchModal.classList.add("hidden"), 300);
    searchBox.value=""; //Clear Search Text
    searching(searchBox.value); // Clear Suggestions
    searchBoxOpen = false;
  } else { 
    searchModal.classList.remove("hidden");
    searchBox.style.display = "block";
    searchSuggestionBox.style.display = "block";
    searchBox.style.width = "0%";
    searchSuggestionBox.style.maxHeight = "0%";
    searchSuggestionBox.style.width = "0%";
    requestAnimationFrame(() => {
      searchBox.style.width = "90%";
      searchSuggestionBox.style.maxHeight = "400px";
      searchSuggestionBox.style.width = "77%";
      searchBox.style.opacity = "1";
      searchSuggestionBox.style.opacity = "1";
    });
    searchBox.focus();
    searching(searchBox.value, displaySearchSuggestionText); //To display history
    searchBoxOpen = true;
  }
}

function searching(text, callback) {
  suggestionText = [];
  searchSuggestionBox.classList.remove("hidden");
  searchSuggestionBox.innerHTML = "";
  if (text === "" && searchHistory.length == 0) {
    searchSuggestionBox.classList.add("hidden");
    return;
  } else if (text === "" & searchHistory.length !== 0) {
    suggestionText = searchHistory;
  } else {
    // check for starts with.
    colorNameArray.forEach((array) => {
    array.forEach((t) => {
      const newText = t.replace(/^(#|rgb|hsl)/i, "");
      let regex = new RegExp('^' + text, 'i');
      if (regex.test(newText)) { 
        suggestionText.push(t);
      }
    });
  });
  
    // test for include.
    if (suggestionText.length <= 100) {
    colorNameArray.forEach((array) => {
      array.forEach((t) => {
        const newText = t.replace(/^(#|rgb|hsl)/i, "");
        let regex = new RegExp(text, 'i');
        if (regex.test(newText)) {
          if (!suggestionText.includes(t)) {
            suggestionText.push(t);
          }
        }
      });
    });
  }
  
    if (suggestionText.length <= 200) {
    colorNameArray.forEach((array) => {
      array.forEach((t) => {
        const newText = t.replace(/^(#|rgb|hsl)/i, "");
        let regex = new RegExp(newText, 'i');
        if (regex.test(text)) {
          if (!suggestionText.includes(t)) {
            suggestionText.push(t);
          }
        }
      });
    });
  }
  }
  if (callback) callback();
}

function doSearch() {
  let displayColor = [];
  suggestionText.forEach((el) => {
    colorNameArray.forEach((array) => {
      array.forEach((text) => {
        if (el==text) {
          const color = [array[2], array[1], array[0]];
          displayColor.push(color);
        }
      });
    });
  });
  
  displayCards(displayColor.length, i => displayColor[i]); // To display cards
  
  if (searchBox.value !== "" && !searchHistory.includes(searchBox.value)) searchHistory.unshift(searchBox.value);
  sessionStorage.setItem("history", JSON.stringify(searchHistory));
  
  searchIcon();// To close search bar
  searchBoxOpen = true; // To not open again when click() event of buttomIcon triggers
}

function displaySearchSuggestionText() {
  suggestionText.forEach((name) => {
    div = document.createElement("div");
    div.className = "suggestion-text";
    div.innerHTML = `<span onclick="suggestionToSearch('${name}')">${name}</span><span onclick="suggestionToSearchText('${name}')">+↑</span>`;
    searchSuggestionBox.appendChild(div);
  });
}

function suggestionToSearch(text) {
  searching(text);
  doSearch();
}

function suggestionToSearchText(text) {
  searchBox.value += text;
  searching(searchBox.value, displaySearchSuggestionText);
}
//---------------





// Display Named Colors --------
let textFormatIconOpen = false;
function textFormatIcon() {
  if (textFormatIconOpen) {
    displayCards(0);
    textFormatIconOpen = false;
  } else {
    textFormatIconOpen = true;
    displayCards(colorNameArray.length,i =>{
      const [n,hx,r,hs] = colorNameArray[i];
      return [r, hx, n];
    });
  }
}
//---------------






// Display All Colours ----------
let dashboardIconOpen = false;
function dashboardIcon() {
  if (dashboardIconOpen) {
    displayCards(0);
    dashboardIconOpen = false;
  } else {
    displayCards(256*256*256, colorAtIndex);
    dashboardIconOpen = true;
  }
}
// ---------------





// Bottom Icons ----------
let ic = null;
function bottomIcon(icon) {
   if (ic == icon) {
     // same button is clicked
     icon.classList.remove("clicked");
     ic = null;
     return;
   } else if (ic !== null && ic !== icon) {
     // not the first clicked button
     ic.classList.remove("clicked");
     ic.click();
     icon.classList.add("clicked");
     ic = icon;
   } else if (ic == null) {
     // clicked first button
     icon.classList.add("clicked");
     ic = icon;
   }
   window.scrollTo(0,0);
}