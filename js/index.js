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





// Footer Animation --------
const animations = [
  {
    selector: ".path1",
    keyframes: [
      { d: "path('M 0 250 C 600 450 650 100 1300 250 L 1300 550 L 0 550 L 0 250')" },
      { d: "path('M 0 250 C 600 100 650 450 1300 250 L 1300 550 L 0 550 L 0 250')" },
      { d: "path('M 0 250 C 600 450 650 100 1300 250 L 1300 550 L 0 550 L 0 250')" }
    ],
    options: { duration: 5000, iterations: Infinity, delay: 1000 }
  },
  {
    selector: ".path2",
    keyframes: [
      { d: "path('M 0 250 C 600 100 650 450 1300 250 L 1300 550 L 0 550 L 0 250')" },
      { d: "path('M 0 250 C 600 450 650 100 1300 250 L 1300 550 L 0 550 L 0 250')" },
      { d: "path('M 0 250 C 600 100 650 450 1300 250 L 1300 550 L 0 550 L 0 250')" }
    ],
    options: { duration: 5000, iterations: Infinity }
  },
  {
    selector: ".path3",
    keyframes: [
      { d: "path('M 0 250 C 950 350 950 150 1300 250 L 1300 550 L 0 550 L 0 250')" },
      { d: "path('M 0 250 C 350 150 350 350 1300 250 L 1300 550 L 0 550 L 0 250')" },
      { d: "path('M 0 250 C 950 350 950 150 1300 250 L 1300 550 L 0 550 L 0 250')" }
    ],
    options: { duration: 5000, iterations: Infinity, delay: 2000 }
  },
  {
    selector: ".path4",
    keyframes: [
      { d: "path('M 0 250 C 350 150 350 350 1300 250 L 1300 550 L 0 550 L 0 250')" },
      { d: "path('M 0 250 C 950 350 950 150 1300 250 L 1300 550 L 0 550 L 0 250')" },
      { d: "path('M 0 250 C 350 150 350 350 1300 250 L 1300 550 L 0 550 L 0 250')" }
    ],
    options: { duration: 5000, iterations: Infinity }
  }
];

// Run animations
animations.forEach(anim => {
  document.querySelector(anim.selector).animate(anim.keyframes, anim.options);
});
//---------------





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
let ticking = false;

// Generating Cards DOM
for (let i=0; i< (visibleCardRows + (buffer*2)) * totalColumns; i++) {
  
  const div = document.createElement("div");
  div.className = "gridItem";
  div.addEventListener("click",() => {
    cardDetail(rgbaToHexa(div.style.backgroundColor));
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
      //color = [hex, name] newsystem
      const row = Math.floor(itemIndex / totalColumns);
      const col = itemIndex % totalColumns;
      
      items[i].style.backgroundColor = color[0];
      items[i].style.width = cardWidth + "px";
      items[i].style.transform = `translate(${col * (cardWidth + gapX)}px, ${row * (cardHeight + gapY)}px )`;
      items[i].style.display = "block";
      
      items[i].children[0].textContent = 
      color[1];
      items[i].children[0].style.color = getTextColor(color[0]);
      
      items[i].children[1].textContent = 
      color[0];
      items[i].children[1].style.color = getTextColor(color[0]);
      
    } else {
      items[i].style.display = "none";
    }
  }
}

let updater = null;
let gridHead = document.getElementById("grid-head");
let gridPara = document.getElementById("grid-para");
let gridToolbar = document.getElementById("grid-toolbar");
let gridBottom = document.getElementById("grid-bottom");
let similarDiv = document.getElementById("similar-button");
let similarRadius = document.getElementById("similar-radius");
let similarStep = document.getElementById("similar-step");
let similarLimit = document.getElementById("similar-limit");
const sortHandlers = new Map();
let similarHandler = null;

function displayCards(length, callback, head, para, toolbar = false, bottom) {
  totalCards = length;
  totalRows = Math.ceil(totalCards / totalColumns);
  container.style.height = totalRows * (cardHeight + gapY) + "px";
  
  if (updater) window.removeEventListener("scroll", updater);
  if (head) head(gridHead); else gridHead.innerHTML = "";
  if (para) para(gridPara); else gridPara.innerHTML = "";
  if (bottom) bottom(gridBottom); else gridBottom.innerHTML = "";
  if (toolbar) {
    gridToolbar.classList.remove("hidden");
    if (similarHandler) similarDiv.removeEventListener("click", similarHandler);
    similarHandler = () => filter(length, callback, head, para, toolbar,"similar", bottom, [parseInt(similarRadius.value), parseInt(similarStep.value), parseInt(similarLimit.value)]);
    similarDiv.addEventListener("click", similarHandler);

    document.querySelectorAll("#sort-options > div").forEach((el) => {
      if (sortHandlers.has(el)) {
        el.removeEventListener("click", sortHandlers.get(el));
      }
      const handler = () => filter(length, callback, head, para, toolbar, el.dataset.value, bottom);
      sortHandlers.set(el, handler);
      el.addEventListener("click", handler);
    });
  } else {
    gridToolbar.classList.add("hidden");
  }

  update(callback);
  
  updater = () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        update(callback);
        ticking = false;
      });
      ticking = true;
    }
  };
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
  const name = hexToName(hex, "");
  return [hex, name];
}

function getTextColor(bgHex) {
  const r = parseInt(bgHex.substr(1, 2), 16);
  const g = parseInt(bgHex.substr(3, 2), 16);
  const b = parseInt(bgHex.substr(5, 2), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 150 ? '#000' : '#FFF';
}

function hexToHexa(hex, opacity=1) {
  hex = hex.replace(/^#/, '');
  if (opacity == 1) {
    return "#" + hex;
  } else {
    hex = hex.slice(0,6);
    const hexa = "#" + hex + Math.round(opacity * 255).toString(16).padStart(2, "0").toUpperCase();
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
    a = Math.round(parseInt(hex.substring(6, 8), 16)/255 * 100)/100;
  }
  if (a == 1) {
    return `rgb(${r}, ${g}, ${b})`;
  } else {
    return `rgba(${r}, ${g}, ${b}, ${a})`;
  }
}

function hexToRgbaArray(hex, a=1) {
  hex = hex.replace(/^#/, '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  
  if (hex.length > 7) {
    a = Math.round(parseInt(hex.substring(6, 8), 16)/255 *100)/100;
  }
  return [r,g,b,a];
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

function hexToName(hex, other=null) {
  const found = colorNameArray.find(array => { return array[1].toUpperCase() == hex.toUpperCase(); });
  return found ? found[0] : other;
}

function nameToHex(name, other=null) {
  const found = colorNameArray.find(array => { 
    return array[0].toLowerCase() == name.toLowerCase();
  });
  return found ? found[1] : other;
}

function hexToHsl(hex) {
  hex = hex.replace(/^#/, '').toLowerCase();

  if (hex.length === 3 || hex.length === 4) {
    hex = hex.split('').map(x => x + x).join('');
  }

  let r = parseInt(hex.substring(0, 2), 16) / 255;
  let g = parseInt(hex.substring(2, 4), 16) / 255;
  let b = parseInt(hex.substring(4, 6), 16) / 255;
  let a = hex.length === 8 ? parseInt(hex.substring(6, 8), 16) / 255 : null;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // gray
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  h = Math.round(h * 360);
  s = Math.round(s * 100);
  l = Math.round(l * 100);

  return a !== null
    ? `hsla(${h},${s}%,${l}%,${+a.toFixed(2)})`
    : `hsl(${h},${s}%,${l}%)`;
}

function hexToHslObject(hex) {
  hex = hex.replace(/^#/, '');

  if (hex.length === 3) {
    hex = hex.split('').map(x => x + x).join('');
  }

  let r = parseInt(hex.substring(0, 2), 16) / 255;
  let g = parseInt(hex.substring(2, 4), 16) / 255;
  let b = parseInt(hex.substring(4, 6), 16) / 255;

  let max = Math.max(r, g, b);
  let min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0; // achromatic
  } else {
    let d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }

    h *= 60;
  }
  if (hex.length > 7) {
    let a = Math.round(parseInt(hex.substring(6,8), 16))/100;
    return {
    h: Math.round(h),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
    a: a
  };
  }
  return {
    h: Math.round(h),
    s: Math.round(s * 100),
    l: Math.round(l * 100)
  };
}

function hslToHex(hslStr) {
  let str = hslStr.toLowerCase().replace(/\s+/g, '');


  const parts = str.match(/[\d.]+/g).map(Number);
  let [h, s, l, a] = parts;
  
  h = (h % 360 + 360) % 360; // normalize hue
  let S = s / 100;
  let L = l / 100;

  const c = (1 - Math.abs(2 * L - 1)) * S;
  const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
  const m = L - c / 2;

  let r = 0, g = 0, b = 0;

  if (0 <= h && h < 60) { r = c; g = x; b = 0; }
  else if (60 <= h && h < 120) { r = x; g = c; b = 0; }
  else if (120 <= h && h < 180) { r = 0; g = c; b = x; }
  else if (180 <= h && h < 240) { r = 0; g = x; b = c; }
  else if (240 <= h && h < 300) { r = x; g = 0; b = c; }
  else if (300 <= h && h < 360) { r = c; g = 0; b = x; }

  r = Math.round((r + m) * 255);
  g = Math.round((g + m) * 255);
  b = Math.round((b + m) * 255);

  let hex =
    "#" +
    r.toString(16).padStart(2, "0") +
    g.toString(16).padStart(2, "0") +
    b.toString(16).padStart(2, "0");

  if (a) {
    let alpha = Math.round(a * 255);
    hex += alpha.toString(16).padStart(2, "0");
  }
  return hex;
}
// ---------------





// Filter ----------
// --- Sort Color by Lightness
function srgbToLinear(c) {
  c = c / 255; // convert 0–255 to 0–1
  return (c <= 0.04045) ? (c / 12.92) : Math.pow((c + 0.055) / 1.055, 2.4);
}

function rgbToXyz(r, g, b) {
  const R = srgbToLinear(r);
  const G = srgbToLinear(g);
  const B = srgbToLinear(b);

  const X = 0.4124564*R + 0.3575761*G + 0.1804375*B;
  const Y = 0.2126729*R + 0.7151522*G + 0.0721750*B;
  const Z = 0.0193339*R + 0.1191920*G + 0.9503041*B;
  return [X, Y, Z];
}

function xyzToLstar(X, Y, Z) {
  const Xn = 0.95047, Yn = 1.00000, Zn = 1.08883;
  const delta = 6 / 29;
  const f = t => (t > Math.pow(delta, 3)) ? Math.cbrt(t) : (t / (3*delta*delta) + 4/29);
  const fy = f(Y / Yn);
  return 116 * fy - 16; // L* value 0–100
}

// --- Master function ---
function sortColorsByLightness(colors) {
  //colors = [[hex, name], [hex, name]..]
  let list = [];
  colors.forEach((c) => {
    const [r, g, b, a] = hexToRgbaArray(c[0]);
    const [X, Y, Z] = rgbToXyz(r, g, b);
    const L = xyzToLstar(X, Y, Z);
    list.push([c[0], c[1], +L.toFixed(4)]);
  });

  list.sort((a, b) => a[2] - b[2]);
  return list;
  // list = [[hex, name, L]....]
}
// ---



// --- Group Similar Colors
/*function hexToHslValues(hex) {
  let hslStr = hexToHsl(hex);
  let parts = hslStr.match(/[\d.]+/g).map(Number);
  return parts; // [h, s, l, (a optional)]
}*/

// --- Master Function ---
/*function sortColorsByHueAndLightness(colors) {
  return colors.slice().sort((a, b) => {
    let [ha, sa, la] = hexToHslValues(a[0]);
    let [hb, sb, lb] = hexToHslValues(b[0]);

    if (ha !== hb) return ha - hb;   // sort by Hue
    return la - lb;                  // if same Hue, sort by Lightness
  });
}*/


function getGroup(hex) {
  const { h, s, l } = hexToHslObject(hex);

  // Handle neutrals first
  if (s < 10) {
    if (l >= 90) return "White";
    if (l <= 10) return "Black";
    return "Gray";
  }

  // Otherwise classify by hue
  const groups = [
    "Red", "Orange", "Yellow",
    "Green", "Cyan", "Blue",
    "Purple", "Pink"
  ];
  // Shift hue so reds center at 0°
  const index = Math.floor(((h + 15) % 360) / 45);
  return groups[index];
}
// ---



// --- Generate Colors similar to given color
function hexToRgb(hex) {
  hex = hex.replace(/^#/, "");
  if (hex.length === 3) {
    hex = hex.split("").map(c => c + c).join("");
  }
  const bigint = parseInt(hex, 16);
  return {
    r: (bigint >> 16) & 255,
    g: (bigint >> 8) & 255,
    b: bigint & 255
  };
}

function rgbToLab({ r, g, b }) {
  let [R, G, B] = [r/255, g/255, b/255];

  [R, G, B] = [R, G, B].map(v =>
    v > 0.04045 ? Math.pow((v + 0.055)/1.055, 2.4) : v/12.92
  );

  let X = (R*0.4124 + G*0.3576 + B*0.1805) / 0.95047;
  let Y = (R*0.2126 + G*0.7152 + B*0.0722) / 1.00000;
  let Z = (R*0.0193 + G*0.1192 + B*0.9505) / 1.08883;

  [X, Y, Z] = [X, Y, Z].map(v =>
    v > 0.008856 ? Math.pow(v, 1/3) : (7.787*v) + 16/116
  );

  return {
    L: (116*Y) - 16,
    a: 500*(X - Y),
    b: 200*(Y - Z)
  };
}

function deltaE(lab1, lab2) {
  return Math.sqrt(
    Math.pow(lab1.L - lab2.L, 2) +
    Math.pow(lab1.a - lab2.a, 2) +
    Math.pow(lab1.b - lab2.b, 2)
  );
}

function labToHex(L, a, b) {
  let Y = (L + 16) / 116;
  let X = a / 500 + Y;
  let Z = Y - b / 200;

  [X, Y, Z] = [X, Y, Z].map((v, i) => {
    let val = v*v*v;
    if (val <= 0.008856) val = (v - 16/116) / 7.787;
    return val * [0.95047, 1.00000, 1.08883][i];
  });

  let R = X* 3.2406 + Y*-1.5372 + Z*-0.4986;
  let G = X*-0.9689 + Y* 1.8758 + Z* 0.0415;
  let B = X* 0.0557 + Y*-0.2040 + Z* 1.0570;

  [R, G, B] = [R, G, B].map(v =>
    v > 0.0031308
      ? 1.055*Math.pow(v, 1/2.4) - 0.055
      : 12.92*v
  );

  R = Math.min(Math.max(0, R), 1);
  G = Math.min(Math.max(0, G), 1);
  B = Math.min(Math.max(0, B), 1);

  let toHex = x => Math.round(x*255).toString(16).padStart(2, "0");
  return `#${toHex(R)}${toHex(G)}${toHex(B)}`;
}

// --- Master Function ---
function generateSimilarColorsLab(hex, radius = 20, step = 5, limit = 50) {
  const seedLab = rgbToLab(hexToRgb(hex));
  const seen = new Set();
  let results = [];

  for (let L = 0; L <= 100; L += step) {
    for (let a = -128; a <= 127; a += step) {
      for (let b = -128; b <= 127; b += step) {
        const d = deltaE(seedLab, {L, a, b});
        if (d <= radius) {
          const hexColor = labToHex(L, a, b).toUpperCase();
          if (!seen.has(hexColor)) {
            seen.add(hexColor);
            results.push({ hex: hexColor, dist: d });
          }
        }
      }
    }
  }

  // Sort by closeness
  results.sort((c1, c2) => c1.dist - c2.dist);
  return results.slice(0, limit);
}
//---




let filterColorTemp, filterColorPerm, filterColorStorage;
function filter(length, callback, head=null, para=null, toolbar=null, type=null, bottom=null, similarArray=null) {
  // callback = [hex, name] at given index 
  // e.g, callback(index);
  switch (type) {
    case null:
      displayCards(length, callback, head, para, toolbar, bottom);
      break;
    case "similar":
      filterColorTemp = [];
      filterColorStorage = similarArray;
      for (let i=0; i<length; i++) {
        generateSimilarColorsLab(callback(i)[0], filterColorStorage[0], filterColorStorage[1], filterColorStorage[2]).forEach(obj => filterColorTemp.push([obj.hex]));
      };
      filterColorPerm = filterColorTemp;
      displayCards(filterColorPerm.length, i => filterColorPerm[i], head, para, toolbar, bottom);
      break;
    case "name":
      filterColorTemp = [];
      filterColorStorage = [];
      for (let i=0; i<length; i++) {
        let a = callback(i);
        if (a[1]) {
          filterColorTemp.push(callback(i));
        } else {
          filterColorStorage.push(callback(i));
        }
      }
      filterColorTemp.sort((b,a) => b[1].localeCompare(a[1]));
      filterColorStorage.sort((b,a) => b[0].localeCompare(a[0]));
      filterColorPerm = [...filterColorTemp, ...filterColorStorage];
      displayCards(filterColorPerm.length, i => filterColorPerm[i], head, para, toolbar, bottom);
      break;
    case "lightness":
      filterColorTemp = [];
      for (let i=0; i<length; i++) {
        filterColorTemp.push(callback(i));
      }
      filterColorPerm = sortColorsByLightness(filterColorTemp);
      displayCards(filterColorPerm.length, i => filterColorPerm[i], head, para, toolbar, bottom);
      break;
    case "group":
      const grouped = {};

      for (let i = 0; i < length; i++) {
        const [hex, name=""] = callback(i);
        const group = getGroup(hex);
        if (!grouped[group]) grouped[group] = [];
        grouped[group].push([hex, name]);
      }

      const order = ["Black", "Gray", "White", "Red", "Orange", "Yellow", "Green", "Cyan", "Blue", "Purple", "Pink"];
      filterColorPerm = [];
      order.forEach(g => {
          if (grouped[g]) {
            grouped[g].forEach(c => filterColorPerm.push(c));
          }
      });
      
      displayCards(filterColorPerm.length, i => filterColorPerm[i], head, para, toolbar, bottom);
      break;
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
  const divName = document.getElementsByClassName("color-card-name")[0];
  const slider = document.getElementById("color-card-slider");
  const display = document.getElementById("color-card-slider-display");
  divHex.innerHTML = color.toUpperCase();
  divRgb.innerHTML = hexToRgba(color).toLowerCase();
  divName.innerHTML = hexToName(color, "");
  divName.style.color = getTextColor(color);
  const [r,g,b,a] = hexToRgbaArray(color);
  slider.value = a*100;
  display.textContent = a*100;
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
    divHex.textContent = hexToHexa(color, (val/100)).toUpperCase();
    divRgb.textContent = hexToRgba(color, (val/100));
    displayCard.style.backgroundColor = hexToHexa(color, (val/100));
    updateBookmarkIcon(bookmarkIcon, hexToHexa(color, (val/100)));
  }
  
  slider.addEventListener("input", () => {
    display.textContent = slider.value;
    divHex.textContent = hexToHexa(color, (slider.value/100)).toUpperCase();
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
    if (e.key === "ArrowUp") {
      slider.value = Math.min(100, parseInt(slider.value) + 1);
      slider.dispatchEvent(new Event("input"));
    }
    if (e.key === "ArrowDown") {
      slider.value = Math.max(0, parseInt(slider.value) - 1);
      slider.dispatchEvent(new Event("input"));
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

function copyText(textNode=null, text=null) {
  if (navigator.clipboard && window.isSecureContext) {
    if (textNode) {
      navigator.clipboard.writeText(text)
      .then(() => {
        textNode.classList.add("copy-animation");
        textNode.addEventListener("animationend", () => { 
          textNode.classList.remove("copy-animation");
        }, {once: true});
      })
      .catch(err => {
        copyTextFallback(text);
      });
    } 
    if (text) navigator.clipboard.writeText(text);
  } else {
    if (textNode) copyTextFallback(textNode.text);
    if (text) copyTextFallback(text);
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
  if (bookmarkArray.includes(hex.toLowerCase())) {
    iconNode.innerHTML = "bookmark_added";
  } else {
    iconNode.innerHTML = "bookmark_add";
  }
}

function updateBookmarkArray(iconNode, rgba) {
  const hex = rgbaToHexa(rgba).toLowerCase();
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
  }, 300);
  setTimeout(() => {
    createBookmarkDiv();
  }, 600);
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
    colorDiv.addEventListener("click",() => { cardDetail(color); });
    removeDiv.className = "remove-bookmark-icon material-symbols-outlined";
    removeDiv.innerHTML = "bookmark_remove";
    removeDiv.addEventListener("click", () => removeBookmark(index));
    hexDiv.id = `bookmark_hex_${index+1}`;
    hexDiv.className = "bookmark-card-hex";
    hexDiv.innerHTML = color.toUpperCase();
    hexDiv.addEventListener("click", function(){copyText(this, this.textContent.toLowerCase());});
    rgbDiv.id = `bookmark_rgb_${index+1}`;
    rgbDiv.className = "bookmark-card-rgb";
    rgbDiv.innerHTML = hexToRgba(color);
    rgbDiv.addEventListener("click", function() {copyText(this, this.textContent.toLowerCase());});
    if (hexToName(color)) {
      const nameDiv = document.createElement("div");
      nameDiv.id= `bookmark_name_${index+1}`;
      nameDiv.className="bookmark-card-name";
      nameDiv.innerHTML= hexToName(color);
      nameDiv.addEventListener("click", function() {copyText(this, this.textContent);});
      div.appendChild(nameDiv);
    }
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
let searchOpen = false;
let searchBoxOpen = false;
let searchSuggestionBoxOpen = false;
let searchModal = document.getElementById("search-modal");
let searchBox = document.getElementById("search-box");
let searchSuggestionBox = document.getElementById("search-suggestion-box");
let suggestionDiv = [];
let suggestionText = [];
let searchTimeout;

searchBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      searchBox.blur();
      search(searchBox.value, () => displaySearch(searchBox.value));
    }
 });
searchModal.addEventListener("click", function (e) {
  if (e.target.id === "search-modal") {
    searchBox.blur();
  }
});

function searchIcon() {
  if (searchOpen) {
    hideSearchSuggestionBox();
    hideSearchBox();
    searchOpen = false;
  } else { 
    showSearchBox();
    showSearchSuggestionBox();
    search(searchBox.value, displaySearchSuggestionText); //To display history
    searchOpen = true;
  }
}

function showSearchBox() {
  searchModal.classList.remove("hidden");
  searchBox.style.display = "block";
  searchBox.style.width = "0%";
  requestAnimationFrame(() => {
    searchBox.style.width = "77%";
    searchBox.style.opacity = "1";
  });
  searchBox.focus(); // Open keyboard
  searchBoxOpen = true;
}

function hideSearchBox() {
  searchBox.blur()
  searchBox.style.width = "0%";
  searchBox.style.opacity = "0";
  hideSearchSuggestionBox();
  if (!searchModal.classList.contains("hidden")) setTimeout(() => searchModal.classList.add("hidden"), 300);
  searchBox.value=""; //Clear Search Text
  search(searchBox.value); // Clear Suggestions
  searchBoxOpen = false;
}

function showSearchSuggestionBox() {
  searchSuggestionBox.style.display ="block";
  searchSuggestionBox.style.maxHeight = "0%";
  searchSuggestionBox.style.width = "0%";
  requestAnimationFrame(() => {
    searchSuggestionBox.style.maxHeight = "400px";
    searchSuggestionBox.style.width = "67%";
    searchSuggestionBox.style.opacity = "1";
  });
  searchSuggestionBoxOpen = true;
}

function hideSearchSuggestionBox() {
  searchSuggestionBox.style.maxHeight = "0%";
  searchSuggestionBox.style.width = "0%";
  searchSuggestionBox.style.opacity = "0";
  searchSuggestionBoxOpen = false;
}

function debounceSearch(value, callback) {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    search(value, callback);
  }, 200);
}

function search(text, callback) {
  suggestionText = [];
  searchSuggestionBox.classList.remove("hidden"); //already removed in 1.
  searchSuggestionBox.innerHTML = "";
  if (text === "" && searchHistory.length == 0) {
    searchSuggestionBox.classList.add("hidden");
    return;
  } else if (text === "" && searchHistory.length !== 0) {
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
  
    if (suggestionText.length <= 200) {
      const patterns = {
        hex: /#?[A-Fa-f0-9]{3,8}\b/g,
        rgb: /rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)/gi,
        rgba: /rgba\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*,\s*(?:0|1|0?\.\d+)\s*\)/gi,
        hsl: /hsl\(\s*\d+\s*,\s*\d+%?\s*,\s*\d+%?\s*\)/gi,
        hsla: /hsla\(\s*\d+\s*,\s*\d+%?\s*,\s*\d+%?\s*,\s*(?:0|1|0?\.\d+)\s*\)/gi,
        named: /\b[a-zA-Z]+\b/g
      };
      let results = [];
      for (let key in patterns) {
        const matches = text.match(patterns[key]);
        if (matches) results.push(...matches);
      }
      let normalized = results.map(c => {
        if (/^#?[A-Fa-f0-9]{3,8}$/i.test(c)) {
          let hex = c.startsWith("#") ? c : "#" + c;

        // Expand shorthand (#abc → #aabbcc, #abcd → #aabbccdd)
          if (hex.length === 4 || hex.length === 5) {
            hex = "#" + hex.slice(1).split("").map(ch => ch + ch).join("");
          }
          return hex.toLowerCase();
        }
        if (c.startsWith("rgb(") || c.startsWith("rgba(")) {
          return rgbaToHexa(c).toLowerCase();
        }
        if (c.startsWith("hsl(") || c.startsWith("hsla(")) {
          return hslToHex(c).toLowerCase();
        }
        return nameToHex(c) || null;
      }).filter(Boolean);
      let final =  [...new Set(normalized)];
      suggestionText.push(...final);
    }
  }
  if (callback) callback();
}

function displaySearch(text) {
  let displayColor = [];
  suggestionText.forEach((el) => {
    let found = false;
    colorNameArray.forEach((array) => {
      array.forEach((t) => {
        if (el==t) {
          const color = [array[1], array[0]];
          displayColor.push(color);
          found = true;
        }
      });
    });
    if (!found) displayColor.push([el]);
  });
  
  filter(displayColor.length, i => displayColor[i],null, null, "true", null); // To display cards
  
  if (text !== "" && !searchHistory.includes(text)) searchHistory.unshift(text);
  sessionStorage.setItem("history", JSON.stringify(searchHistory));
  
  searchIcon(); //To close Search Bar
}

function displaySearchSuggestionText() {
  suggestionText.forEach((name) => {
    const div = document.createElement("div");
    div.className = "suggestion-text";
    div.innerHTML = `<span onclick="suggestionToSearch('${name}')">${name}</span><span onclick="suggestionToSearchText('${name}')">+↑</span>`;
    searchSuggestionBox.appendChild(div);
  });
}

function suggestionToSearch(text) {
  search(text);
  displaySearch(text);
}

function suggestionToSearchText(text) {
  searchBox.value += text;
  search(searchBox.value, displaySearchSuggestionText);
  searchBox.focus();
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
    filter(colorNameArray.length,
    i =>{
      const [n,hx] = colorNameArray[i];
      return [hx, n];
    },
    i => i.innerHTML="HTML Named Colors",
    i => i.innerHTML="HTML supports 141 named colors—predefined words like <code>crimson</code>, <code>lavender</code>, and <code>royalBlue</code> that browsers instantly recognize without needing hex codes or RGB values.", true, null,
    i=> i.innerHTML="In these colors live sunsets you haven’t seen yet,<br> mornings you still dream about,<br>and quiet evenings you wish would last forever.<br><br> Take the one that feels like your heart, and let it paint your world.");
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
    displayCards(256*256*256, colorAtIndex, i => i.innerHTML="The Entire Spectrum — 16,777,216 Colors", i => i.innerHTML="In 24-bit color, each pixel can mix red, green, and blue values between 0 and 255, creating 256 × 256 × 256 = 16,777,216 possible colors.", false, null, i => i.innerHTML="Tip: Staring at every single one might take you a while. Don’t worry — your favorites will find you first. ");
    dashboardIconOpen = true;
  }
}
// ---------------





// Main Page ----------
let nameNode = document.getElementById("name-input");
let hexNode = document.getElementById("hex-input");
let rgbNode = document.getElementById("rgb-input");
let hslNode = document.getElementById("hsl-input");
let colorNode = document.getElementById("color-input");
let rNode = document.getElementById("red-slider");
let gNode = document.getElementById("green-slider");
let bNode = document.getElementById("blue-slider");
let output = document.getElementById("color-output");
let mainPage = document.getElementById("main-page");
let mainPageOpen = false;
let hex,r,g,b;
let paletteType = {complementary: "complementary-color-output", analogous:"analogous-color-output", triadic:"triadic-color-output", tetradic:"tetradic-color-output", monochrome:"monochrome-color-output", stt: "stt-color-output", aesthetic:"aesthetic-color-output", theme:"theme-color-output"};
let themeText = ["Primary Text", "Secondary Text", "Highlight", "Border", "Accent"];

function mainIcon() {
  if (mainPageOpen) {
    mainPage.classList.add("hidden");
    mainPageOpen = false;
  } else {
    mainPage.classList.remove("hidden");
    mainPageOpen = true;
  }
}

function convert(id, text) {
  switch (id) {
    case ("name-input"):
      hex = nameToHex(text);
      if (hex) {
        hexNode.value = hex;
        rgbNode.value = hexToRgba(hex);
        hslNode.value = hexToHsl(hex);
        colorNode.value = hex;
        rNode.value = hexToRgbaArray(hex)[0];
        gNode.value = hexToRgbaArray(hex)[1];
        bNode.value = hexToRgbaArray(hex)[2];
        output.style.backgroundColor = hex;
      }
      break;
    case ("hex-input"):
      hex = text;
      nameNode.value = hexToName(hex, "");
      rgbNode.value = hexToRgba(hex);
      hslNode.value = hexToHsl(hex);
      colorNode.value = hex;
      rNode.value = hexToRgbaArray(hex)[0];
      gNode.value = hexToRgbaArray(hex)[1];
      bNode.value = hexToRgbaArray(hex)[2];
      output.style.backgroundColor = hex;
      break;
    case ("rgb-input"):
      hex = rgbaToHexa(text);
      nameNode.value = hexToName(hex, "");
      hexNode.value = hex;
      hslNode.value = hexToHsl(hex);
      colorNode.value = hex;
      rNode.value = hexToRgbaArray(hex)[0];
      gNode.value = hexToRgbaArray(hex)[1];
      bNode.value = hexToRgbaArray(hex)[2];
      output.style.backgroundColor = hex;
      break;
    case ("hsl-input"):
      hex = hslToHex(text);
      nameNode.value = hexToName(hex, "");
      hexNode.value = hex;
      rgbNode.value = hexToRgba(hex);
      colorNode.value = hex;
      rNode.value = hexToRgbaArray(hex)[0];
      gNode.value = hexToRgbaArray(hex)[1];
      bNode.value = hexToRgbaArray(hex)[2];
      output.style.backgroundColor = hex;
      break;
    case ("color-input"):
      hex = text;
      nameNode.value = hexToName(hex, "");
      hexNode.value = hex;
      rgbNode.value = hexToRgba(hex);
      hslNode.value = hexToHsl(hex);
      rNode.value = hexToRgbaArray(hex)[0];
      gNode.value = hexToRgbaArray(hex)[1];
      bNode.value = hexToRgbaArray(hex)[2];
      output.style.backgroundColor = hex;
      break;
    case ("red-slider"):
      r = text;
      g = gNode.value;
      b = bNode.value;
      hex = rgbaToHexa(`rgb(${r},${g},${b})`)
      nameNode.value = hexToName(hex, "");
      hexNode.value = hex;
      rgbNode.value = hexToRgba(hex);
      hslNode.value = hexToHsl(hex);
      colorNode.value = hex;
      output.style.backgroundColor = hex;
      break;
    case ("green-slider"):
      r = rNode.value;
      g = text;
      b = bNode.value;
      hex = rgbaToHexa(`rgb(${r},${g},${b})`)
      nameNode.value = hexToName(hex, "");
      hexNode.value = hex;
      rgbNode.value = hexToRgba(hex);
      hslNode.value = hexToHsl(hex);
      colorNode.value = hex;
      output.style.backgroundColor = hex;
      break;
    case ("blue-slider"):
      r = rNode.value;
      g = gNode.value;
      b = text;
      hex = rgbaToHexa(`rgb(${r},${g},${b})`)
      nameNode.value = hexToName(hex, "");
      hexNode.value = hex;
      rgbNode.value = hexToRgba(hex);
      hslNode.value = hexToHsl(hex);
      colorNode.value = hex;
      output.style.backgroundColor = hex;
      break;
  }
  if (hex) {
  updateBookmarkIcon(output.firstElementChild, hex);
  output.firstElementChild.style.color = getTextColor(hex);
  updatePalette(hex);
  }
}

function updatePalette(hex, type = paletteType) {
  let count = 0;
  let hsl = hexToHslObject(hex);
  for (let i in type) {
    let palette = generatePalette(hsl, i);
    let preview = document.getElementById(type[i]);
    preview.innerHTML = "";
    palette.forEach(color => {
    let swatch = document.createElement("div");
    let p = document.createElement("p");
    swatch.style.backgroundColor = color;
    swatch.id = `${i}-palette`;
    p.textContent = hslToHex(color).toUpperCase();
    p.className = "palette-text";
    p.style.color = getTextColor(hslToHex(color));
    p.addEventListener("click", function(){copyText(this, this.textContent.toLowerCase());});
    console.log(i);
    if (i == "theme") {
      let p2= document.createElement("p");
      p2.textContent = themeText[count];
      console.log("jdjd",themeText[count]);
      p2.className = "theme-palette-text";
      p2.style.color = getTextColor(hslToHex(color));
      count += 1;
      swatch.appendChild(p2);
    }
    swatch.title = color;
    swatch.appendChild(p);
    preview.appendChild(swatch);
  });
  }
}

function generatePalette(hsl, type) {
  let { h, s, l } = hsl;
  let colors = [];

  switch(type) {
    case "complementary":
      colors = [
        {h, s, l},
        {h: (h + 180) % 360, s, l}
      ];
      break;
    case "analogous":
      colors = [
        {h: (h - 30 + 360) % 360, s, l},
        {h, s, l},
        {h: (h + 30) % 360, s, l}
      ];
      break;
    case "triadic":
      colors = [
        {h, s, l},
        {h: (h + 120) % 360, s, l},
        {h: (h + 240) % 360, s, l}
      ];
      break;
    case "tetradic":
      colors = [
        {h, s, l},
        {h: (h + 90) % 360, s, l},
        {h: (h + 180) % 360, s, l},
        {h: (h + 270) % 360, s, l}
      ];
      break;
    case "monochrome":
      colors = [
        {h, s, l: Math.max(0, l - 40)},
        {h, s, l: Math.max(0, l - 20)},
        {h, s, l},
        {h, s, l: Math.min(100, l + 20)},
        {h, s, l: Math.min(100, l + 40)}
      ];
      break;
    case "stt":
      colors = [
        {h, s, l: Math.max(0, l - 40)},
        {h, s, l: Math.max(0, l - 20)},
        {h, s, l: Math.min(100, l + 20)},
        {h, s, l: Math.min(100, l + 40)},
        {h, s: Math.max(0, s - 20), l}
      ];
      break;
    case "aesthetic":
      colors = generateAestheticPalette(hsl);
      break;
    case "theme":
      colors = generateThemeFromBg(hsl);
      break;
  }
  return colors.map(c => {
    if (c.a) return `hsl(${c.h}, ${c.s}%, ${c.l}%, ${c.a}`
    return `hsl(${c.h}, ${c.s}%, ${c.l}%)`
    });
}

function generateAestheticPalette(hsl, count = 5) {
  let { h, s, l } = hsl;
  let colors = [];
  colors.push({ h, s, l });

  // lighter tints (soft)
  for (let i = 1; i <= Math.floor((count - 1) / 2); i++) {
    colors.push({
      h,
      s: Math.max(0, s - i * 5), // desaturate slightly
      l: Math.min(100, l + i * (20 / count) * 2) // lighten in small steps
    });
  }

  // darker shades (rich)
  for (let i = 1; colors.length < count; i++) {
    colors.push({
      h,
      s: Math.min(100, s + i * 5),
      l: Math.max(0, l - i * (20 / count) * 2)
    });
  }

  // Step 4: Shuffle neutrals & accents
  let neutrals = [
    { h, s: Math.max(0, s - 60), l: 95 },
    { h, s: Math.max(0, s - 40), l: 20 }
  ];

  colors = colors.concat(neutrals);

  let step = Math.max(1, Math.floor(colors.length / count));
  let finalColors = colors.filter((_, i) => i % step === 0).slice(0, count);

  return finalColors
}

function generateThemeFromBg(hsl) {
 // const hsl = hexToHslObject(hex);
  const hex = hslToHex(`hsl(${hsl.h}, ${hsl.s}, ${hsl.l})`);
  const light = (getTextColor(hex) == "#000");
  
  const primaryText = light ? {h:0,s:0,l:7} : {h:0,s:0,l:100};
  const secondaryText = light ? {h:0, s:0, l:0, a:0.7} : {h:0, s:0, l:100, a:0.7};

  // Highlight = complementary
  const highlight = {
    h: (hsl.h+180)%360,
    s: Math.min((hsl.s+10),100),
    l: hsl.l
    };

  // Border = adjust lightness
  const border = {
  h: hsl.h,
  s: hsl.s, 
  l: light ? Math.max((hsl.l-20),0) : Math.min((hsl.l+20),100)
  };

  // Accent = triadic
  const accent = {
  h: (hsl.h+120)%360,
  s: hsl.s,
  l: hsl.l
  };
  
  return [primaryText, secondaryText, highlight, border, accent];

//  return { bg: hex, primaryText, secondaryText, highlight, border, accent };
}


let holdInterval;
let holdSpeed = 300;
let acceleration = 20;
let minInterval = 50;
function startSliderHold(sliderNode, step) {
  sliderNode.value = parseInt(sliderNode.value) + step;
  convert(sliderNode.id, sliderNode.value);
  let speed = holdSpeed;

  function repeat() {
    sliderNode.value = parseInt(sliderNode.value) + step;
    convert(sliderNode.id, sliderNode.value);
    speed = Math.max(minInterval, speed - acceleration);
    clearInterval(holdInterval);
    holdInterval = setInterval(repeat, speed);
  }
  holdInterval = setInterval(repeat, speed);
}

function stopSliderHold() {
  clearInterval(holdInterval);
}

document.querySelectorAll('.slider-btn').forEach(btn => {
  const sliderNode = document.getElementById(btn.dataset.slider);
  const step = parseInt(btn.dataset.step);

  btn.addEventListener('mousedown', () => startSliderHold(sliderNode, step));
  btn.addEventListener('mouseup', stopSliderHold);
  btn.addEventListener('mouseleave', stopSliderHold);
  btn.addEventListener('touchstart', e => {
    e.preventDefault();
    startSliderHold(sliderNode, step);
  });
  btn.addEventListener('touchend', stopSliderHold);
  btn.addEventListener('touchcancel', stopSliderHold);
});
// ---------------





// Bottom Icons ----------
let ic = null; // icon
function bottomIcon(icon) {
  window.scrollTo(0,0);
  if (icon.id === "search-icon") {
    if (ic) {
      ic.classList.remove("clicked");
      if (ic.id !== "search-icon") ic.click();
    }
    icon.classList.add("clicked");
    ic = icon;
    return;
  }
  if (ic === icon) {
    // same button is clicked
    icon.classList.remove("clicked");
    ic = null;
    return;
  } else if (ic !== null && ic !== icon) {
    // not the first clicked button
    ic.classList.remove("clicked");
    if (ic.id !== "search-icon") {
      ic.click();
    } else {
      if (searchOpen) searchIcon();
      displayCards(0);
    }
    icon.classList.add("clicked");
    ic = icon;
  } else if (ic === null) {
    // clicked first button
    icon.classList.add("clicked");
    ic = icon;
  }
} 
// ---------------
document.getElementById("main-icon").click();