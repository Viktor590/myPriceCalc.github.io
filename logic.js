const input = document.querySelector('.input');
const output = document.querySelector('.output-res');
const list = document.querySelector('.list')
const showBtn = document.querySelector('.show')


showBtn.addEventListener('click', () => {
  showBtn.classList.contains('active') ?
    hiddenMenu() : showMenu()
})

let usd = 106;

const arr = [
  { "name": "50 Years", "price": "0.10", "region": "A", "data": "11/21", "status": "" },
  { "name": "Aery - Dreamscape", "price": "0.20", "region": "A", "data": "11/21", "status": "GOLD" },
  { "name": "Alone in the Dark", "price": "10.03", "region": "A", "data": "1/16/", "status": "" },
  { "name": "Alone in the Dark - Digital Deluxe Edition", "price": "11.57", "region": "A", "data": "1/16/", "status": "" },
  { "name": "Alpha Particle", "price": "5.28", "region": "J", "data": "11/16", "status": "" },
  { "name": "Alterity Experience", "price": "0.16", "region": "A", "data": "11/21", "status": "GOLD" },
  { "name": "Amabilly", "price": "0.16", "region": "A", "data": "11/18", "status": "" },
  { "name": "American Fugitive", "price": "0.08", "region": "A", "data": "11/17", "status": "" },
  { "name": "Anima: Gate of Memories - Arcane Edition", "price": "0.17", "region": "A", "data": "11/21", "status": "" },
  { "name": "Anno 1800™ Console Edition", "price": "6.43", "region": "A", "data": "11/16", "status": "" },
  { "name": "Attack of the Earthlings", "price": "0.33", "region": "A", "data": "11/21", "status": "" },
  { "name": "Awarded Platformer Bundle", "price": "0.47", "region": "A", "data": "12/31", "status": "" },
  { "name": "Ball laB", "price": "0.08", "region": "A", "data": "11/21", "status": "" },
  { "name": "Best Month Ever!", "price": "0.45", "region": "A", "data": "11/21", "status": "GOLD" },
  { "name": "Bit Orchard: Animal Valley", "price": "0.05", "region": "A", "data": "11/21", "status": "" },
  { "name": "Bob the Elementalist", "price": "0.16", "region": "A", "data": "11/25", "status": "" },
  { "name": "Bomber Crew", "price": "0.29", "region": "A", "data": "11/17", "status": "" },
  { "name": "Bomber Crew Deluxe Edition", "price": "0.69", "region": "A", "data": "11/17", "status": "" },
  { "name": "Bright Paw: Definitive Edition", "price": "1.32", "region": "A", "data": "11/21", "status": "GOLD" },
  { "name": "Bus Simulator", "price": "0.57", "region": "A", "data": "11/17", "status": "" },
  { "name": "Bus Simulator 21 Next Stop - Gold Edition", "price": "9.35", "region": "E", "data": "11/17", "status": "" },
  { "name": "Castle of no Escape", "price": "0.08", "region": "A", "data": "11/21", "status": "" },
  { "name": "Castle of no Escape 1+2 Bundle", "price": "0.16", "region": "A", "data": "11/21", "status": "GOLD" },
  { "name": "Castle of no Escape 2", "price": "0.13", "region": "A", "data": "11/21", "status": "" },
  { "name": "Chenso Club", "price": "0.34", "region": "A", "data": "11/17", "status": "" },
  { "name": "Clunky Hero", "price": "0.67", "region": "T", "data": "11/21", "status": "GOLD" },
  { "name": "Colorful Colore", "price": "0.12", "region": "A", "data": "11/21", "status": "" },
  { "name": "Construction Simulator", "price": "6.80", "region": "A", "data": "11/17", "status": "" },
  { "name": "Construction Simulator - Extended Edition", "price": "8.00", "region": "A", "data": "11/17", "status": "" },
  { "name": "Construction Simulator 2 US - Console Edition", "price": "0.17", "region": "A", "data": "11/17", "status": "" },
  { "name": "Construction Simulator 3 - Console Edition", "price": "0.31", "region": "A", "data": "11/17", "status": "" },
  { "name": "Crimson Spires", "price": "0.28", "region": "A", "data": "11/21", "status": "GOLD" },
  { "name": "Cyanide & Happiness - Freakpocalypse (Episode 1)", "price": "0.41", "region": "A", "data": "11/21", "status": "" },
  { "name": "CyberHive", "price": "0.09", "region": "A", "data": "11/21", "status": "" },
  { "name": "Dou", "price": "0.04", "region": "A", "data": "11/25", "status": "" },
  { "name": "Drizzlepath: Deja Vu", "price": "0.11", "region": "A", "data": "11/21", "status": "" },
  { "name": "Dust & Neon", "price": "0.41", "region": "A", "data": "11/21", "status": "GOLD" },
  { "name": "EA Play", "price": "0.71", "region": "J", "data": "11/17", "status": "" },
  { "name": "EA SPORTS FC™ 24 Standard Edition Xbox One & Xbox Series X|S", "price": "34.23", "region": "T", "data": "12/31", "status": "" },
  { "name": "Effie", "price": "0.24", "region": "A", "data": "11/21", "status": "" },
  { "name": "Embr", "price": "0.20", "region": "A", "data": "11/17", "status": "" },
  { "name": "Envasion", "price": "0.05", "region": "A", "data": "11/21", "status": "" },
  { "name": "Escape Dead Island", "price": "0.11", "region": "A", "data": "12/31", "status": "" },
  { "name": "Excessive Trim", "price": "2.59", "region": "I", "data": "11/23", "status": "" },
  { "name": "Exoprimal", "price": "24.95", "region": "T", "data": "11/16", "status": "" },
  { "name": "Exoprimal Deluxe Edition", "price": "29.49", "region": "T", "data": "11/16", "status": "" },
  { "name": "Far Cry Classic", "price": "0.08", "region": "A", "data": "11/21", "status": "GOLD" },
  { "name": "Far Cry® 3 Blood Dragon Classic Edition", "price": "2.14", "region": "A", "data": "11/21", "status": "GOLD" },
  { "name": "Fin and the Ancient Mystery", "price": "0.07", "region": "A", "data": "11/21", "status": "" },
  { "name": "Finis", "price": "0.38", "region": "A", "data": "11/17", "status": "" },
  { "name": "Firefighting Simulator - The Squad", "price": "4.71", "region": "A", "data": "11/17", "status": "" },
  { "name": "Fishing: Barents Sea Complete Edition", "price": "0.49", "region": "A", "data": "11/17", "status": "" },
  { "name": "Five Dates", "price": "0.32", "region": "A", "data": "11/21", "status": "GOLD" },
  { "name": "Flashback", "price": "0.43", "region": "A", "data": "11/21", "status": "GOLD" },
  { "name": "GreedFall - Gold Edition", "price": "2.99", "region": "T", "data": "11/21", "status": "GOLD" },
  { "name": "GreedFall - Gold Edition (Windows 10)", "price": "1.88", "region": "A", "data": "11/21", "status": "" },
  { "name": "Heart&Slash", "price": "0.11", "region": "A", "data": "11/21", "status": "" },
  { "name": "Help Will Come Tomorrow", "price": "0.16", "region": "A", "data": "11/21", "status": "" },
  { "name": "Hollow", "price": "0.08", "region": "A", "data": "11/21", "status": "" },
  { "name": "Homebody", "price": "0.41", "region": "A", "data": "11/21", "status": "GOLD" },
  { "name": "Hood: Outlaws & Legends", "price": "1.13", "region": "A", "data": "11/21", "status": "GOLD" },
  { "name": "Hotshot Racing", "price": "0.08", "region": "A", "data": "11/17", "status": "" },
  { "name": "I Am Dead", "price": "0.32", "region": "A", "data": "11/21", "status": "GOLD" },
  { "name": "I Am Fish", "price": "0.24", "region": "A", "data": "11/16", "status": "" },
  { "name": "Infinity Runner", "price": "0.10", "region": "A", "data": "11/21", "status": "" },
  { "name": "Iris and the Giant", "price": "1.80", "region": "A", "data": "11/21", "status": "GOLD" },
  { "name": "Iris and the Giant Deluxe Soundtrack Edition", "price": "2.06", "region": "A", "data": "11/21", "status": "GOLD" },
  { "name": "Isonzo", "price": "3.04", "region": "A", "data": "11/22", "status": "" },
  { "name": "Isonzo: Collector's Edition", "price": "1.23", "region": "A", "data": "11/22", "status": "" },
  { "name": "Isonzo: Deluxe Edition", "price": "0.74", "region": "A", "data": "11/22", "status": "" },
  { "name": "Jagged Alliance 3", "price": "16.77", "region": "T", "data": "11/14", "status": "" },
  { "name": "Journey of the Broken Circle", "price": "0.32", "region": "A", "data": "11/21", "status": "" },
  { "name": "Joy Ball Adventure", "price": "0.04", "region": "A", "data": "11/25", "status": "" },
  { "name": "King Leo", "price": "1.52", "region": "A", "data": "11/21", "status": "" },
  { "name": "Kung Fu Fighting", "price": "0.04", "region": "A", "data": "11/18", "status": "" },
  { "name": "LISA: The Joyful - Definitive Edition", "price": "0.32", "region": "A", "data": "11/21", "status": "GOLD" },
  { "name": "LISA: The Painful - Definitive Edition", "price": "0.65", "region": "A", "data": "11/21", "status": "GOLD" },
  { "name": "Lifeless Planet: Premier Edition", "price": "0.11", "region": "A", "data": "11/21", "status": "" },
  { "name": "Liftoff: Drone Racing", "price": "0.41", "region": "A", "data": "11/17", "status": "" },
  { "name": "Liftoff: Drone Racing Deluxe Edition", "price": "0.49", "region": "A", "data": "11/17", "status": "" },
  { "name": "Light & Dark Bundle", "price": "4.56", "region": "A", "data": "11/2/", "status": "" },
  { "name": "Lotus Reverie: First Nexus", "price": "0.17", "region": "A", "data": "11/21", "status": "GOLD" },
  { "name": "Madden NFL 19", "price": "29.37", "region": "C", "data": "12/30", "status": "" },
  { "name": "Madden NFL 23 Xbox One", "price": "14.63", "region": "A", "data": "12/31", "status": "" },
  { "name": "Madden NFL 23 Xbox Series X|S", "price": "17.14", "region": "A", "data": "12/31", "status": "" },
  { "name": "Madden NFL 24", "price": "17.14", "region": "A", "data": "12/1/", "status": "" },
  { "name": "Madden NFL 24 Deluxe Edition Xbox Series X|S & Xbox One", "price": "25.14", "region": "A", "data": "12/1/", "status": "" },
  { "name": "Manual Samuel", "price": "0.03", "region": "A", "data": "11/17", "status": "" },
  { "name": "Mech Armada", "price": "0.32", "region": "A", "data": "11/21", "status": "GOLD" },
  { "name": "Memory Link", "price": "0.61", "region": "A", "data": "11/21", "status": "" },
  { "name": "Mia and the Dragon Princess", "price": "0.40", "region": "A", "data": "11/21", "status": "GOLD" },
  { "name": "Microsoft 365 Family", "price": "0.00", "region": "U", "data": "12/1/", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.00", "region": "U", "data": "12/1/", "status": "" },
  { "name": "Motorcycle Mechanic Simulator 2021", "price": "0.73", "region": "A", "data": "11/23", "status": "" },
  { "name": "MyMaitê", "price": "0.12", "region": "A", "data": "11/21", "status": "" },
  { "name": "NARUTO TO BORUTO: SHINOBI STRIKER", "price": "0.53", "region": "S", "data": "11/21", "status": "GOLD" },
  { "name": "NARUTO TO BORUTO: SHINOBI STRIKER Ultimate Edition", "price": "18.48", "region": "C", "data": "11/21", "status": "GOLD" },
  { "name": "Narcos: Rise of the Cartels", "price": "0.12", "region": "A", "data": "11/17", "status": "" },
  { "name": "Neversong", "price": "0.18", "region": "A", "data": "11/21", "status": "" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.10", "region": "A", "data": "5/31/", "status": "" },
  { "name": "Nirvana: Pilot Yume", "price": "0.11", "region": "A", "data": "11/21", "status": "" },
  { "name": "Obsurity", "price": "0.10", "region": "A", "data": "11/21", "status": "" },
  { "name": "Outbreak Platinum Collection", "price": "0.97", "region": "A", "data": "11/21", "status": "" },
  { "name": "Outbreak: Lost Hope Definitive Edition", "price": "0.15", "region": "A", "data": "11/21", "status": "GOLD" },
  { "name": "Outbreak: Lost Hope Definitive Edition", "price": "0.15", "region": "A", "data": "11/21", "status": "GOLD" },
  { "name": "Paper Flight - Beyond Time", "price": "0.30", "region": "A", "data": "11/21", "status": "" },
  { "name": "Police Simulator: Patrol Officers", "price": "8.57", "region": "A", "data": "11/17", "status": "" },
  { "name": "Protocol", "price": "0.20", "region": "A", "data": "11/21", "status": "" },
  { "name": "Pumped BMX Pro", "price": "0.09", "region": "A", "data": "11/17", "status": "" },
  { "name": "Renzo Racer", "price": "2.53", "region": "A", "data": "11/21", "status": "" },
  { "name": "Retro Tank Arcade", "price": "0.04", "region": "A", "data": "11/15", "status": "" },
  { "name": "Risk of Rain 1 + 2 Bundle", "price": "0.89", "region": "A", "data": "11/15", "status": "" },
  { "name": "Risk of Rain 2", "price": "0.75", "region": "A", "data": "11/15", "status": "" },
  { "name": "Risk of Rain 2 & Survivors of the Void Bundle", "price": "3.32", "region": "A", "data": "11/15", "status": "" },
  { "name": "Rooten", "price": "0.07", "region": "A", "data": "11/21", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "3.66", "region": "A", "data": "12/31", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "4.88", "region": "A", "data": "1/1/2", "status": "" },
  { "name": "Serial Cleaner", "price": "0.04", "region": "A", "data": "11/17", "status": "" },
  { "name": "Shadow Gangs", "price": "4.17", "region": "E", "data": "11/21", "status": "" },
  { "name": "Shadowblade Odyssey", "price": "0.04", "region": "A", "data": "11/26", "status": "" },
  { "name": "Smoots Pinball", "price": "0.22", "region": "A", "data": "11/16", "status": "" },
  { "name": "SongPop Party", "price": "2.91", "region": "E", "data": "11/28", "status": "" },
  { "name": "Space Crew: Legendary Edition", "price": "0.51", "region": "A", "data": "11/17", "status": "" },
  { "name": "Sparkle Bundle", "price": "0.36", "region": "A", "data": "12/31", "status": "" },
  { "name": "Spirittea", "price": "0.73", "region": "A", "data": "11/27", "status": "" },
  { "name": "SteamWorld Build", "price": "5.47", "region": "A", "data": "12/1/", "status": "" },
  { "name": "SteamWorld Build & Dig Bundle", "price": "5.63", "region": "A", "data": "12/1/", "status": "" },
  { "name": "Sugar Tanks", "price": "0.30", "region": "A", "data": "11/21", "status": "" },
  { "name": "Super Impossible Road", "price": "0.41", "region": "A", "data": "11/21", "status": "GOLD" },
  { "name": "Super Pixel Kid", "price": "0.04", "region": "A", "data": "11/17", "status": "" },
  { "name": "Teratopia", "price": "0.12", "region": "A", "data": "11/21", "status": "GOLD" },
  { "name": "The Childs Sight", "price": "0.04", "region": "A", "data": "11/21", "status": "" },
  { "name": "The Council - Complete Season", "price": "0.59", "region": "A", "data": "11/21", "status": "GOLD" },
  { "name": "The Darkest Tales", "price": "2.53", "region": "A", "data": "11/21", "status": "" },
  { "name": "The Escapists: Supermax Edition", "price": "0.72", "region": "A", "data": "4/30/", "status": "" },
  { "name": "The Great Perhaps", "price": "0.12", "region": "A", "data": "11/21", "status": "" },
  { "name": "The Jackbox Party Quadpack", "price": "1.61", "region": "A", "data": "12/31", "status": "" },
  { "name": "The Life and Suffering of Sir Brante", "price": "0.51", "region": "A", "data": "11/21", "status": "" },
  { "name": "The Pillar: Puzzle Escape", "price": "0.10", "region": "A", "data": "11/21", "status": "GOLD" },
  { "name": "The Walking Dead: Destinies", "price": "29.47", "region": "I", "data": "11/16", "status": "" },
  { "name": "The end is nahual: If I may say so", "price": "0.43", "region": "A", "data": "11/21", "status": "GOLD" },
  { "name": "Timothy vs the Aliens", "price": "0.17", "region": "A", "data": "11/21", "status": "GOLD" },
  { "name": "Tiny Hands Adventure", "price": "0.05", "region": "A", "data": "11/21", "status": "" },
  { "name": "Tom Clancy’s The Division® Franchise Bundle", "price": "2.00", "region": "A", "data": "11/21", "status": "GOLD" },
  { "name": "Tomb Raider I-III Remastered Starring Lara Croft", "price": "1.10", "region": "A", "data": "2/13/", "status": "" },
  { "name": "Transference™", "price": "0.25", "region": "A", "data": "11/21", "status": "GOLD" },
  { "name": "True Virus", "price": "0.30", "region": "A", "data": "11/23", "status": "" },
  { "name": "Tycoon Bundle", "price": "0.45", "region": "A", "data": "11/21", "status": "" },
  { "name": "Under Leaves", "price": "0.19", "region": "A", "data": "11/21", "status": "GOLD" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "0.39", "region": "A", "data": "12/30", "status": "" },
  { "name": "Vermintide - Digital Value Pack", "price": "1.14", "region": "A", "data": "3/7/2", "status": "" },
  { "name": "Virgo Versus The Zodiac", "price": "3.60", "region": "T", "data": "11/21", "status": "GOLD" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "1.82", "region": "A", "data": "8/31/", "status": "" },
  { "name": "Warhammer Age of Sigmar: Storm Ground", "price": "1.69", "region": "A", "data": "11/21", "status": "GOLD" },
  { "name": "Worldless", "price": "0.73", "region": "A", "data": "11/21", "status": "" },
  { "name": "YOHANE THE PARHELION -BLAZE in the DEEPBLUE-", "price": "1.10", "region": "A", "data": "11/16", "status": "" },
  { "name": "ZooKeeper", "price": "0.36", "region": "A", "data": "11/25", "status": "" }
]



console.log(arr.length);
const sortArr = arr.sort(function (a, b) {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
});

function floor(price) {
  let enterPrice = Number(price)
  const lastNum = Number(enterPrice.toString().split('').pop())

  switch (lastNum) {
    case 1:
      enterPrice += 4
      break;
    case 2:
      enterPrice += 3
      break;
    case 3:
      enterPrice += 2
      break;
    case 4:
      enterPrice += 1
      break;
    case 6:
      enterPrice += 4
      break;
    case 7:
      enterPrice += 3
      break;
    case 8:
      enterPrice += 2
      break;
    case 9:
      enterPrice += 1
      break;
    default:
      enterPrice
      break;
  }
  return enterPrice;
}

function result() {
  const value = Number(input.value) + .1
  const res = value * usd
  const finishRes = res + resSwitсh(input.value)
  output.innerHTML = floor(finishRes.toFixed())
}

function resultFromList(price) {
  const value = Number(price) + .1
  const res = value * usd + 40
  const finishRes = res + resSwitсh(price)
  return floor(finishRes.toFixed())
}

function resSwitсh(value) {
  let a;
  if (value <= 1) {
    a = 60
  } else if (value > 1 && value <= 5) {
    a = 75
  } else if (value > 5 && value <= 10) {
    a = 90
  } else if (value > 10 && value <= 15) {
    a = 125
  } else if (value > 15 && value <= 20) {
    a = 145
  } else if (value > 20 && value <= 25) {
    a = 190
  } else if (value > 25) {
    a = 210
  }
  return a
}

input.oninput = result


sortArr.map((a) => {
  const item = document.createElement('li')
  const arrData = a.data.split('/').reverse('').join('/')
  let res;
  let flag;
  if (a.region == 'A') {
    res = resultFromList(a.price)
    flag = "🇦🇷"
  } else if (a.region == 'T') {
    res = resultFromList(a.price)
    flag = "🇹🇷"
  } else {
    res = 'Уточнить стоимость в ЛС'
  }

  item.innerHTML = res == 'Уточнить стоимость в ЛС' ? `${a.name}: ${res} до:${arrData}` : `${a.name}:${res}&#8381; ${flag}  до:${arrData}${a.status}`
  // &#8381; ${ flag } до:${ arrData }${ a.status }
  list.append(item)
})
// 
function showMenu() {
  showBtn.classList.add('active')
  list.classList.add('active');
  showBtn.innerHTML = 'Скрыть Список'
  showBtn.style.background = 'red'

}

function hiddenMenu() {
  showBtn.classList.remove('active')
  list.classList.remove('active');
  showBtn.innerHTML = 'Показать Список'
  showBtn.style.background = 'greenyellow'
}
