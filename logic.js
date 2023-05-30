const input = document.querySelector('.input');
const output = document.querySelector('.output-res');
const list = document.querySelector('.list')
const showBtn = document.querySelector('.show')


showBtn.addEventListener('click', () => {
  showBtn.classList.contains('active') ?
    hiddenMenu() : showMenu()
})

let usd = 90;

const arr = [
  { "name": "2 Synchro Hedgehogs (for Windows 10)", "price": "0.18", "region": "A", "data": "6/6/", "status": "" },
  { "name": "50 Years (for Windows 10)", "price": "0.18", "region": "A", "data": "6/6/", "status": "" },
  { "name": "ABZU", "price": "0.29", "region": "A", "data": "6/6/", "status": "" },
  { "name": "AO Tennis 2", "price": "0.36", "region": "A", "data": "6/6/", "status": "" },
  { "name": "ARCADE GAME SERIES 3-in-1 Pack", "price": "0.25", "region": "A", "data": "6/6/", "status": "" },
  { "name": "ARCADE GAME SERIES: GALAGA", "price": "0.12", "region": "A", "data": "6/6/", "status": "" },
  { "name": "ARCADE GAME SERIES: Ms. PAC-MAN", "price": "0.12", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Action Arcade Wrestling", "price": "0.54", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Adam's Venture: Origins", "price": "0.44", "region": "E", "data": "6/6/", "status": "" },
  { "name": "Aery - Calm Mind", "price": "0.39", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "Aground", "price": "0.54", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Alan Wake Remastered", "price": "2.01", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Aliens: Fireteam Elite Into the Hive Edition", "price": "6.89", "region": "E", "data": "6/6/", "status": "GOLD" },
  { "name": "All-Star Fruit Racing", "price": "0.17", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Alone in the Dark", "price": "14.69", "region": "A", "data": "10/2", "status": "" },
  { "name": "Alone in the Dark - Digital Deluxe Edition", "price": "16.95", "region": "A", "data": "10/2", "status": "" },
  { "name": "Alwa's Awakening", "price": "0.18", "region": "A", "data": "6/6/", "status": "" },
  { "name": "America’s Greatest Game Shows: Wheel of Fortune® & Jeopar...", "price": "0.57", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Ankora: Lost Days", "price": "0.71", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin's Creed Antiquity Pack", "price": "3.35", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin's Creed Chronicles – Trilogy", "price": "0.31", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin's Creed IV Black Flag", "price": "0.87", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin's Creed Legendary Collection", "price": "7.85", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin's Creed Triple Pack: Black Flag, Unity, Syndicate", "price": "0.94", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin's Creed Unity", "price": "1.04", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin's Creed® Bundle: Assassin's Creed® Valhalla, Ass...", "price": "10.47", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin's Creed® Chronicles: China", "price": "0.27", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin's Creed® Chronicles: India", "price": "0.17", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin's Creed® Chronicles: Russia", "price": "0.17", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin's Creed® III Remastered", "price": "1.36", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin's Creed® Odyssey", "price": "1.44", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin's Creed® Odyssey - DELUXE EDITION", "price": "2.51", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin's Creed® Odyssey - GOLD EDITION", "price": "3.14", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin's Creed® Odyssey - ULTIMATE EDITION", "price": "3.77", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin's Creed® Origins", "price": "0.96", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin's Creed® Origins - DELUXE EDITION", "price": "2.30", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin's Creed® Origins - GOLD EDITION", "price": "3.14", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin's Creed® Rogue", "price": "0.50", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin's Creed® Syndicate", "price": "1.95", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin's Creed® The Ezio Collection", "price": "2.26", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin's Creed® Valhalla", "price": "3.77", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin's Creed® Valhalla Complete Edition", "price": "12.56", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin's Creed® Valhalla Deluxe Edition", "price": "5.23", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin's Creed® Valhalla Ragnarök Edition", "price": "8.79", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin’s Creed® Rogue Remastered", "price": "1.04", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin’s Creed® Valhalla + Immortals Fenyx Rising™ Bundle", "price": "6.80", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin’s Creed® Valhalla + Watch Dogs®: Legion Bundle", "price": "6.80", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assetto Corsa Ultimate Edition", "price": "0.58", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Astalon: Tears of the Earth", "price": "0.59", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Awarded Platformer Bundle", "price": "0.69", "region": "A", "data": "12/3", "status": "" },
  { "name": "Batman: Return to Arkham", "price": "1.05", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Battlefleet Gothic: Armada", "price": "0.34", "region": "A", "data": "6/2/", "status": "" },
  { "name": "Battlefleet Gothic: Armada 2 - Windows 10", "price": "1.25", "region": "A", "data": "6/2/", "status": "" },
  { "name": "Bee Simulator", "price": "0.24", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Ben 10 Bundle", "price": "9.42", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Ben 10: Power Trip", "price": "4.29", "region": "E", "data": "6/6/", "status": "" },
  { "name": "Big Buck Hunter Arcade", "price": "0.21", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Black The Fall", "price": "0.36", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Blood Bowl 2", "price": "0.31", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "Blood Bowl 2 - Legendary Edition", "price": "0.78", "region": "A", "data": "6/2/", "status": "" },
  { "name": "Blood Bowl 3 - Brutal Edition", "price": "17.58", "region": "A", "data": "6/2/", "status": "" },
  { "name": "Boggle", "price": "0.15", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Borderlands 3: Next Level Edition", "price": "2.02", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "Borderlands 3: Ultimate Edition", "price": "5.65", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "Bratz™: Flaunt your fashion", "price": "7.12", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "Bravery and Greed", "price": "2.82", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Brick Breaker", "price": "0.21", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "Brick Breaker - Xbox Series X|S", "price": "0.30", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "British Horror Bundle", "price": "1.08", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "Brothers: a Tale of Two Sons", "price": "0.37", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Bug Fables: The Everlasting Sapling", "price": "0.75", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Butterfly (for Windows 10)", "price": "0.18", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Butterfly 2 (for Windows 10)", "price": "0.18", "region": "A", "data": "6/6/", "status": "" },
  { "name": "CATAN® - Console Edition", "price": "1.00", "region": "A", "data": "6/6/", "status": "" },
  { "name": "CATAN® - Console Edition Deluxe", "price": "4.46", "region": "T", "data": "6/6/", "status": "" },
  { "name": "CHRONO CROSS: THE RADICAL DREAMERS EDITION", "price": "6.04", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "CRISIS CORE –FINAL FANTASY VII– REUNION", "price": "10.08", "region": "E", "data": "6/6/", "status": "GOLD" },
  { "name": "CRISIS CORE –FINAL FANTASY VII– REUNION DIGITAL DELUXE ED...", "price": "14.05", "region": "E", "data": "6/6/", "status": "GOLD" },
  { "name": "Cake Bash", "price": "0.59", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "Call of Duty®: WWII - Digital Deluxe", "price": "9.22", "region": "T", "data": "6/6/", "status": "GOLD" },
  { "name": "Call of Duty®: WWII - Gold Edition", "price": "2.49", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "Caterpillar (Windows 10)", "price": "0.18", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Child of Light", "price": "0.19", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Circuit Superstars Top Gear Time Attack Edition", "price": "4.82", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Citizens of Space", "price": "0.32", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Cobra Kai 2: Dojos Rising", "price": "8.16", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Cobra Kai 2: Dojos Rising - Nemesis Edition", "price": "9.42", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Cursed to Golf", "price": "0.83", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Cyber Citizen Shockman", "price": "0.28", "region": "A", "data": "6/3/", "status": "" },
  { "name": "DARKLAND 3", "price": "0.06", "region": "A", "data": "6/11", "status": "" },
  { "name": "DC League of Super-Pets: The Adventures of Krypto and Ace", "price": "4.98", "region": "A", "data": "6/6/", "status": "" },
  { "name": "DC's Justice League: Cosmic Chaos", "price": "13.82", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "DRAGON BALL FIGHTERZ - FighterZ Edition", "price": "1.41", "region": "A", "data": "6/6/", "status": "" },
  { "name": "DRAGON BALL XENOVERSE Super Bundle", "price": "2.32", "region": "T", "data": "6/6/", "status": "" },
  { "name": "DRAGON BALL Z: KAKAROT Deluxe Edition", "price": "10.55", "region": "A", "data": "6/6/", "status": "" },
  { "name": "DRAGON BALL: THE BREAKERS Special Edition", "price": "5.86", "region": "T", "data": "6/6/", "status": "" },
  { "name": "Dandy & Randy DX", "price": "0.21", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Danger Gazers", "price": "0.48", "region": "A", "data": "6/8/", "status": "" },
  { "name": "Deadbeat Heroes", "price": "0.19", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Deliver Us Mars", "price": "8.92", "region": "T", "data": "6/6/", "status": "" },
  { "name": "Demetrios - The BIG Cynical Adventure", "price": "0.04", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Demon Turf", "price": "2.06", "region": "T", "data": "6/6/", "status": "" },
  { "name": "Demon's Tier+", "price": "0.18", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Destiny - The Collection", "price": "2.49", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "Detective Di: The Silk Rose Murders", "price": "0.20", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Dice Legacy Definitive Edition", "price": "0.95", "region": "A", "data": "6/9/", "status": "" },
  { "name": "Digimon Survive", "price": "14.38", "region": "T", "data": "6/6/", "status": "" },
  { "name": "Discovery Tour: Viking Age", "price": "5.52", "region": "A", "data": "6/6/", "status": "" },
  { "name": "DreamWorks Dragons: Legends of The Nine Realms", "price": "11.51", "region": "A", "data": "6/6/", "status": "" },
  { "name": "EA Family Bundle", "price": "0.27", "region": "A", "data": "6/6/", "status": "" },
  { "name": "EA SPORTS™ FIFA 23 Standard Edition Xbox One", "price": "10.05", "region": "A", "data": "6/6/", "status": "" },
  { "name": "EA SPORTS™ FIFA 23 Standard Edition Xbox One", "price": "10.05", "region": "A", "data": "12/3", "status": "" },
  { "name": "EA SPORTS™ FIFA 23 Standard Edition Xbox Series X|S", "price": "15.07", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Earth Atlantis", "price": "0.16", "region": "A", "data": "6/6/", "status": "" },
  { "name": "EleMetals: Death Metal Death Match!", "price": "0.17", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Elite Dangerous Standard Edition", "price": "0.31", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Endurance: Space Action", "price": "0.29", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Epic Chef", "price": "2.51", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Escape Dead Island", "price": "0.16", "region": "A", "data": "12/3", "status": "" },
  { "name": "Escape Game Fort Boyard", "price": "0.72", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Ethan: Meteor Hunter", "price": "0.08", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Evil Wizard(Xbox)", "price": "10.93", "region": "A", "data": "6/1/", "status": "" },
  { "name": "F1® 23 Champions Edition + Limited Time Bonus", "price": "60.29", "region": "A", "data": "5/31", "status": "" },
  { "name": "FAR: Changing Tides", "price": "3.14", "region": "T", "data": "6/6/", "status": "" },
  { "name": "Family Feud®", "price": "6.36", "region": "N", "data": "6/6/", "status": "" },
  { "name": "Fantasy Dash", "price": "0.06", "region": "A", "data": "6/5/", "status": "" },
  { "name": "Far Cry® 6 Gold Edition", "price": "8.37", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Farmer's Dynasty", "price": "0.36", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Fibbage: The Hilarious Bluffing Party Game", "price": "0.12", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Figment 2: Creed Valley", "price": "1.05", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Firegirl: Hack 'n Splash Rescue DX", "price": "2.07", "region": "E", "data": "6/6/", "status": "" },
  { "name": "Fluffy Horde", "price": "0.15", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Flying Soldiers", "price": "1.73", "region": "E", "data": "6/6/", "status": "" },
  { "name": "For Honor® Complete Edition", "price": "5.23", "region": "A", "data": "6/6/", "status": "" },
  { "name": "From Earth to Heaven", "price": "0.28", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Fueled Up", "price": "0.71", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Fury of Dracula: Digital Edition", "price": "2.18", "region": "T", "data": "6/2/", "status": "" },
  { "name": "Get Packed", "price": "0.48", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "Ghosts 'n Goblins Resurrection", "price": "6.15", "region": "T", "data": "6/6/", "status": "" },
  { "name": "Golf With Your Friends - Deluxe Edition", "price": "1.36", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Graze Counter GM", "price": "2.93", "region": "A", "data": "6/6/", "status": "" },
  { "name": "GreedFall - Gold Edition", "price": "4.19", "region": "T", "data": "6/6/", "status": "GOLD" },
  { "name": "GreedFall - Gold Edition (Windows 10)", "price": "2.76", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Grow: Song of the Evertree", "price": "3.35", "region": "T", "data": "6/6/", "status": "" },
  { "name": "HEROish", "price": "0.06", "region": "A", "data": "6/6/", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™", "price": "2.09", "region": "A", "data": "6/6/", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ - Game Of The Year Edition", "price": "4.19", "region": "A", "data": "6/6/", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ - Game Of The Year Edition - Xbox S...", "price": "4.19", "region": "A", "data": "6/6/", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ - Xbox Series X|S", "price": "2.09", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Handball 17", "price": "0.30", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "Hasbro Family Fun Pack", "price": "8.81", "region": "C", "data": "6/6/", "status": "" },
  { "name": "Hasbro Family Fun Pack - Super Edition", "price": "0.84", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Hasbro Family Fun Pack Conquest Edition", "price": "8.81", "region": "C", "data": "6/6/", "status": "" },
  { "name": "Hazelight Bundle", "price": "8.84", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Hermitage: Strange Case Files", "price": "0.42", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "Hindsight", "price": "0.60", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Hobo: Tough Life", "price": "4.77", "region": "E", "data": "6/6/", "status": "GOLD" },
  { "name": "Hokko Life", "price": "1.88", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Horace", "price": "1.75", "region": "E", "data": "6/6/", "status": "" },
  { "name": "Hunt Ducks 4", "price": "0.06", "region": "A", "data": "6/5/", "status": "" },
  { "name": "Imp of the Sun", "price": "0.59", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Insurgency: Sandstorm - Gold Edition", "price": "13.40", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "Islanders", "price": "0.21", "region": "A", "data": "6/6/", "status": "" },
  { "name": "It Takes Two - Digital Version", "price": "8.79", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Jeopardy!", "price": "0.31", "region": "A", "data": "6/6/", "status": "" },
  { "name": "JoJo Siwa: Worldwide Party", "price": "5.69", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Jumanji: The Video Game", "price": "7.33", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Jurassic World Evolution", "price": "0.52", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Jurassic World Evolution 2", "price": "4.33", "region": "E", "data": "6/6/", "status": "" },
  { "name": "Just Dance® 2023 Deluxe Edition", "price": "13.24", "region": "T", "data": "6/6/", "status": "" },
  { "name": "KLONOA Phantasy Reverie Series", "price": "6.28", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Kargast", "price": "2.30", "region": "E", "data": "5/31", "status": "" },
  { "name": "KeyWe", "price": "0.75", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Kingdom Come: Deliverance", "price": "1.07", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Kitaria Fables: Deluxe Edition", "price": "0.73", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Klang 2", "price": "0.45", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "Koh-Lanta", "price": "1.56", "region": "A", "data": "6/6/", "status": "" },
  { "name": "LEGO® Batman™ 3: Beyond Gotham", "price": "0.57", "region": "A", "data": "6/6/", "status": "" },
  { "name": "LEGO® Brawls", "price": "3.45", "region": "A", "data": "6/6/", "status": "" },
  { "name": "LEGO® DC Super-Villains", "price": "1.19", "region": "A", "data": "6/6/", "status": "" },
  { "name": "LEGO® Marvel Super Heroes 2", "price": "1.00", "region": "A", "data": "6/6/", "status": "" },
  { "name": "LEGO® Marvel's Avengers", "price": "1.15", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Let's Sing 2023 Hits Français et Internationaux", "price": "27.78", "region": "S", "data": "6/6/", "status": "" },
  { "name": "Let's Sing 2023 Hits Français et Internationaux Platinum Edition", "price": "62.98", "region": "S", "data": "6/6/", "status": "" },
  { "name": "Let's Sing 2023 Platinum Edition", "price": "24.46", "region": "T", "data": "6/6/", "status": "" },
  { "name": "Let's Sing 2023 mit deutschen Hits", "price": "25.73", "region": "E", "data": "6/6/", "status": "" },
  { "name": "Let's Sing 2023 mit deutschen Hits Platinum Edition", "price": "57.91", "region": "E", "data": "6/6/", "status": "" },
  { "name": "Let's Sing 2023 with Hits from Australia & NZ", "price": "23.20", "region": "N", "data": "6/6/", "status": "" },
  { "name": "Let's Sing ABBA", "price": "4.60", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Let's Sing Country", "price": "1.62", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Let's Sing Country - Platinum Edition", "price": "2.80", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Let's Sing Queen", "price": "3.76", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Let’s Sing 2023 with Hits from Australia & NZ Platinum Edition", "price": "50.85", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Light & Dark Bundle", "price": "0.94", "region": "A", "data": "11/2", "status": "" },
  { "name": "Little League World Series Baseball 2022", "price": "4.90", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Little Mage Adventure", "price": "0.06", "region": "A", "data": "6/7/", "status": "" },
  { "name": "Lock's Quest", "price": "0.17", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Lonely Mountains: Downhill", "price": "0.59", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Lonesome Village", "price": "4.08", "region": "E", "data": "6/6/", "status": "" },
  { "name": "Lost Ruins", "price": "0.71", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Lost Words: Beyond the Page", "price": "0.63", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Lucy Dreaming", "price": "0.91", "region": "A", "data": "5/31", "status": "" },
  { "name": "MONOPOLY FAMILY FUN PACK", "price": "0.19", "region": "A", "data": "6/6/", "status": "" },
  { "name": "MONOPOLY PLUS", "price": "0.53", "region": "A", "data": "6/6/", "status": "" },
  { "name": "MONOPOLY PLUS + MONOPOLY Madness", "price": "4.27", "region": "A", "data": "6/6/", "status": "" },
  { "name": "MXGP 2021 - The Official Motocross Videogame", "price": "1.57", "region": "A", "data": "6/6/", "status": "" },
  { "name": "MXGP 2021 - The Official Motocross Videogame - Xbox Series X|S", "price": "1.57", "region": "A", "data": "6/6/", "status": "" },
  { "name": "MY HERO ONE'S JUSTICE 2 Deluxe Edition", "price": "4.19", "region": "A", "data": "6/6/", "status": "" },
  { "name": "MY LITTLE PONY: A Maretime Bay Adventure", "price": "7.12", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Madden NFL 19", "price": "26.71", "region": "C", "data": "12/3", "status": "" },
  { "name": "Madden NFL 22 Xbox One", "price": "16.12", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 22 Xbox Series X|S", "price": "18.76", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 23 Xbox One", "price": "21.44", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 23 Xbox Series X|S", "price": "25.12", "region": "A", "data": "12/3", "status": "" },
  { "name": "Marvel's Midnight Suns Digital+ Edition for Xbox Series X|S", "price": "18.84", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "Matchpoint - Tennis Championships | Legends Edition", "price": "14.65", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Marvel's Midnight Suns Digital+ Edition for Xbox Series X|S", "price": "18.84", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "Matchpoint - Tennis Championships | Legends Edition", "price": "14.65", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Meg's Monster", "price": "0.72", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "Mega Man 11", "price": "0.83", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Mega Man 30th Anniversary Bundle", "price": "3.44", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Mega Man Legacy Collection 2", "price": "0.68", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Mega Man X Legacy Collection", "price": "0.69", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Mega Man X Legacy Collection 2", "price": "0.69", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Mega Man Zero/ZX Legacy Collection", "price": "3.14", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Mega Man® Legacy Collection", "price": "0.23", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Megaparty: A Tootuff Adventure", "price": "0.36", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.00", "region": "U", "data": "12/1", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.00", "region": "U", "data": "12/1", "status": "" },
  { "name": "Miraculous: Rise of the Sphinx", "price": "6.53", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Miraculous: Rise of the Sphinx Ultimate Edition", "price": "7.54", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Mokoko X", "price": "2.10", "region": "E", "data": "6/6/", "status": "GOLD" },
  { "name": "Monopoly Madness", "price": "3.06", "region": "T", "data": "6/6/", "status": "" },
  { "name": "Monster Energy Supercross - The Official Videogame 6", "price": "15.07", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Monster Truck Championship - Rebel Hunter Edition Xbox One", "price": "0.75", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Moonglow Bay", "price": "1.05", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "Mordheim: City of the Damned - Complete Edition", "price": "0.88", "region": "A", "data": "6/2/", "status": "" },
  { "name": "MotoGP™22", "price": "1.57", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Moving Out Deluxe Edition", "price": "1.36", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Mr. DRILLER DrillLand", "price": "0.65", "region": "T", "data": "6/6/", "status": "" },
  { "name": "Mugsters", "price": "0.47", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Mushroom Wars 2", "price": "2.91", "region": "E", "data": "6/6/", "status": "" },
  { "name": "My Fantastic Ranch", "price": "9.42", "region": "A", "data": "6/6/", "status": "" },
  { "name": "My Friend Peppa Pig", "price": "5.74", "region": "E", "data": "6/6/", "status": "" },
  { "name": "My Little Riding Champion", "price": "0.24", "region": "A", "data": "6/6/", "status": "" },
  { "name": "My Time At Portia", "price": "1.57", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Mythic Ocean", "price": "0.22", "region": "A", "data": "6/6/", "status": "" },
  { "name": "NAMCO MUSEUM® ARCHIVES Vol 1", "price": "1.05", "region": "A", "data": "6/6/", "status": "" },
  { "name": "NARUTO SHIPPUDEN™: Ultimate Ninja® STORM 4", "price": "0.50", "region": "A", "data": "6/6/", "status": "" },
  { "name": "NARUTO SHIPPUDEN™: Ultimate Ninja® STORM Trilogy", "price": "0.84", "region": "A", "data": "6/6/", "status": "" },
  { "name": "NARUTO™: Ultimate Ninja® STORM", "price": "0.52", "region": "A", "data": "6/6/", "status": "" },
  { "name": "NHL® 23 Xbox One", "price": "10.05", "region": "A", "data": "6/13", "status": "" },
  { "name": "NHL® 23 Xbox Series X|S", "price": "11.30", "region": "A", "data": "6/13", "status": "" },
  { "name": "NHRA Championship Drag Racing: Speed For All", "price": "8.16", "region": "A", "data": "6/6/", "status": "" },
  { "name": "NHRA Championship Drag Racing: Speed for All - Deluxe Edi...", "price": "9.42", "region": "A", "data": "6/6/", "status": "" },
  { "name": "NHRA Championship Drag Racing: Speed for All - Ultimate E...", "price": "12.56", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Necromunda: Hired Gun", "price": "4.19", "region": "A", "data": "6/2/", "status": "" },
  { "name": "Necromunda: Underhive Wars", "price": "2.06", "region": "A", "data": "6/2/", "status": "" },
  { "name": "Necromunda: Underhive Wars - Gold Edition", "price": "3.77", "region": "A", "data": "6/2/", "status": "" },
  { "name": "Ni no Kuni™ II: Revenant Kingdom - The Prince's Edition", "price": "20.27", "region": "E", "data": "6/6/", "status": "" },
  { "name": "Nickelodeon All-Star Brawl", "price": "2.34", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Nickelodeon Kart Racers 3: Slime Speedway", "price": "4.90", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Nickelodeon Kart Racers 3: Slime Speedway Turbo Edition", "price": "5.65", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.15", "region": "A", "data": "5/31", "status": "" },
  { "name": "No Straight Roads", "price": "1.01", "region": "A", "data": "6/6/", "status": "" },
  { "name": "ONE PIECE BURNING BLOOD - Gold Edition", "price": "2.32", "region": "T", "data": "6/6/", "status": "" },
  { "name": "ONE PIECE World Seeker Deluxe Edition", "price": "2.50", "region": "T", "data": "6/6/", "status": "" },
  { "name": "ONE PIECE: PIRATE WARRIORS 4 Deluxe Edition", "price": "2.64", "region": "A", "data": "6/6/", "status": "" },
  { "name": "ONE PUNCH MAN: A HERO NOBODY KNOWS", "price": "2.20", "region": "T", "data": "6/6/", "status": "" },
  { "name": "OUTRIDERS", "price": "7.37", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "OUTRIDERS WORLDSLAYER", "price": "13.82", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "OddBallers™", "price": "6.91", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Oh My Godheads", "price": "0.26", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Olympic Games Tokyo 2020 – The Official Video Game™", "price": "2.09", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Outbreak Co-Op Collection", "price": "0.27", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "Overcooked", "price": "0.19", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Overruled!", "price": "0.16", "region": "A", "data": "6/6/", "status": "" },
  { "name": "PAW Patrol Mighty Pups Save Adventure Bay", "price": "5.15", "region": "E", "data": "6/6/", "status": "" },
  { "name": "PAW Patrol: Grand Prix", "price": "8.64", "region": "E", "data": "6/6/", "status": "" },
  { "name": "PGA TOUR 2K23 Deluxe Edition", "price": "18.42", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "PHOGS!", "price": "0.53", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "PJ Masks: Heroes of the Night", "price": "7.12", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Paladins Season Pass 2022", "price": "3.24", "region": "T", "data": "6/6/", "status": "" },
  { "name": "Palindrome Syndrome: Escape Room", "price": "1.73", "region": "E", "data": "6/6/", "status": "GOLD" },
  { "name": "Paw Patrol Bundle", "price": "8.66", "region": "E", "data": "6/6/", "status": "" },
  { "name": "Peppa Pig: World Adventures", "price": "9.96", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "Pirates Pinball", "price": "0.15", "region": "A", "data": "6/10", "status": "" },
  { "name": "Planet Coaster: Console Edition", "price": "1.05", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Plants vs. Zombies Garden Warfare", "price": "0.31", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Plants vs. Zombies: Battle for Neighborville™", "price": "1.13", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Plants vs. Zombies: Battle for Neighborville™ Deluxe Edition", "price": "1.44", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Plants vs. Zombies™ Garden Warfare 2", "price": "0.31", "region": "A", "data": "6/6/", "status": "" },
  { "name": "PowerWash Simulator", "price": "9.37", "region": "T", "data": "6/6/", "status": "" },
  { "name": "Pro Fishing Simulator", "price": "0.12", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "Professor Rubik's Brain Fitness", "price": "0.36", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Puyo Puyo Champions", "price": "0.20", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Quiplash", "price": "0.17", "region": "A", "data": "6/6/", "status": "" },
  { "name": "RABBIDS INVASION - GOLD EDITION", "price": "0.28", "region": "A", "data": "6/6/", "status": "" },
  { "name": "RAD", "price": "0.43", "region": "T", "data": "6/6/", "status": "" },
  { "name": "RAZED", "price": "0.07", "region": "A", "data": "6/6/", "status": "" },
  { "name": "REPLIKATOR", "price": "0.48", "region": "A", "data": "6/10", "status": "" },
  { "name": "RIDE", "price": "0.20", "region": "A", "data": "6/6/", "status": "" },
  { "name": "RIDE 4", "price": "1.88", "region": "A", "data": "6/6/", "status": "" },
  { "name": "RIDE 4 - Special Edition", "price": "2.51", "region": "A", "data": "6/6/", "status": "" },
  { "name": "RIDERS REPUBLIC™ DELUXE EDITION", "price": "8.37", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "RISK", "price": "0.16", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Rabio (Windows 10)", "price": "0.18", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Railbound", "price": "0.67", "region": "A", "data": "5/31", "status": "" },
  { "name": "Railway Empire", "price": "0.59", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Rainbow Billy: The Curse of the Leviathan", "price": "0.42", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Rapala Fishing: Pro Series", "price": "0.21", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Repentant", "price": "0.48", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "Restless Hero", "price": "0.42", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Retro Tank Arcade", "price": "0.06", "region": "A", "data": "6/2/", "status": "" },
  { "name": "Riders Republic Ultimate Edition", "price": "10.47", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Riders Republic™ Gold Edition", "price": "8.37", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Risk: Urban Assault", "price": "0.25", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Robo Revenge Squad", "price": "1.94", "region": "T", "data": "6/6/", "status": "" },
  { "name": "Robotry!", "price": "0.88", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Rogue Company: Year 1 Pass", "price": "2.56", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Rugby 22 Xbox One", "price": "7.54", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Run Sausage Run!", "price": "0.12", "region": "A", "data": "6/6/", "status": "" },
  { "name": "SBK™22", "price": "2.09", "region": "A", "data": "6/6/", "status": "" },
  { "name": "SMITE Year 10 Pass", "price": "3.74", "region": "T", "data": "6/6/", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "5.36", "region": "A", "data": "12/3", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "7.16", "region": "A", "data": "1/1/", "status": "" },
  { "name": "Scott Pilgrim vs. The World™: The Game – Complete Edition", "price": "1.11", "region": "T", "data": "6/6/", "status": "" },
  { "name": "Scrabble", "price": "5.50", "region": "C", "data": "6/6/", "status": "" },
  { "name": "Scribblenauts Showdown", "price": "0.50", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Seasons after Fall", "price": "0.30", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "Simulator Pack: Gas Station Simulator and Treasure Hunter Simulator", "price": "1.20", "region": "A", "data": "6/10", "status": "" },
  { "name": "Skater XL", "price": "1.80", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Skautfold: Shrouded in Sanity", "price": "0.15", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "Skul: The Hero Slayer", "price": "0.71", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Slayers X: Terminal Aftermath: Vengance of the Slayer", "price": "0.92", "region": "A", "data": "6/1/", "status": "" },
  { "name": "Slipstream", "price": "0.55", "region": "T", "data": "6/6/", "status": "" },
  { "name": "Smart Moves (for Windows 10)", "price": "0.18", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Smart Moves 2 (for Windows 10)", "price": "0.18", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Solar Shifter EX", "price": "0.04", "region": "A", "data": "6/6/", "status": "" },
  { "name": "SongPop Party", "price": "0.58", "region": "E", "data": "6/11", "status": "" },
  { "name": "Space Hulk: Tactics", "price": "1.09", "region": "A", "data": "6/2/", "status": "" },
  { "name": "Spacebase Startopia", "price": "6.70", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Sparkle Bundle", "price": "0.53", "region": "A", "data": "12/3", "status": "" },
  { "name": "SpongeBob SquarePants: Battle for Bikini Bottom - Rehydrated", "price": "0.99", "region": "A", "data": "6/6/", "status": "" },
  { "name": "SpongeBob SquarePants: The Cosmic Shake", "price": "8.71", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Star Trek Prodigy: Supernova", "price": "11.51", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Steep X Games Gold Edition", "price": "1.09", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "Stellar Interface", "price": "0.06", "region": "A", "data": "6/1/", "status": "" },
  { "name": "Strategy Bundle: Steampunk Tower 2 & Guards", "price": "0.42", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "Strayed Lights", "price": "6.86", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "Street Outlaws 2: Winner Takes All – Digital Deluxe", "price": "1.67", "region": "T", "data": "6/6/", "status": "" },
  { "name": "Super Monkey Ball Banana Mania", "price": "0.37", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Super Monkey Ball: Banana Blitz HD", "price": "1.46", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Super Pixel Kid", "price": "0.06", "region": "A", "data": "6/10", "status": "" },
  { "name": "Super Retro Charge", "price": "0.45", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "Sweet Witches", "price": "0.12", "region": "A", "data": "6/6/", "status": "" },
  { "name": "TAURONOS", "price": "0.21", "region": "A", "data": "6/6/", "status": "" },
  { "name": "TORINTO", "price": "2.60", "region": "I", "data": "6/8/", "status": "" },
  { "name": "TRIVIAL PURSUIT LIVE!", "price": "0.19", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "TRIVIAL PURSUIT Live! 2", "price": "2.09", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Taiko no Tatsujin: The Drum Master!", "price": "4.19", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Talisman: Digital Edition", "price": "0.43", "region": "A", "data": "6/2/", "status": "" },
  { "name": "Talisman: Digital Edition - Deluxe Edition", "price": "3.02", "region": "A", "data": "6/2/", "status": "" },
  { "name": "Terraria", "price": "0.42", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Tesla Force", "price": "0.31", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "Teslagrad 2", "price": "5.55", "region": "I", "data": "6/6/", "status": "GOLD" },
  { "name": "Tetraminos", "price": "0.21", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "Tetraminos - Xbox Series X|S", "price": "0.30", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "The Adventures of Elena Temple: Definitive Edition", "price": "0.43", "region": "E", "data": "6/6/", "status": "" },
  { "name": "The Crew® 2", "price": "1.05", "region": "A", "data": "6/6/", "status": "" },
  { "name": "The Disney Afternoon Collection", "price": "0.42", "region": "A", "data": "6/6/", "status": "" },
  { "name": "The Escapists + The Escapists 2", "price": "0.52", "region": "A", "data": "6/6/", "status": "" },
  { "name": "The Escapists: Supermax Edition", "price": "1.05", "region": "A", "data": "4/30", "status": "" },
  { "name": "The Explorer Of Night (for Windows 10)", "price": "0.21", "region": "A", "data": "6/6/", "status": "" },
  { "name": "The FMV Collection 1", "price": "1.46", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "The FMV Collection 2", "price": "1.46", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "The FMV Collection 3", "price": "1.46", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "The Jackbox Party Pack", "price": "0.42", "region": "A", "data": "6/6/", "status": "" },
  { "name": "The Jackbox Party Quadpack", "price": "2.35", "region": "A", "data": "12/3", "status": "" },
  { "name": "The Last Hero of Nostalgaia", "price": "1.08", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "The Last Kids on Earth and the Staff of Doom", "price": "3.43", "region": "E", "data": "6/6/", "status": "" },
  { "name": "The Pathless", "price": "6.89", "region": "E", "data": "6/6/", "status": "" },
  { "name": "The Pillar: Puzzle Escape", "price": "0.18", "region": "A", "data": "6/6/", "status": "" },
  { "name": "The Quarry - Deluxe Edition", "price": "13.40", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "The Sisters - Party of the Year", "price": "0.72", "region": "A", "data": "6/6/", "status": "" },
  { "name": "The Ultimate Sonic Bundle", "price": "7.12", "region": "A", "data": "6/6/", "status": "" },
  { "name": "The Unicorn Princess", "price": "0.24", "region": "A", "data": "6/6/", "status": "" },
  { "name": "To Hell With The Ugly", "price": "1.07", "region": "A", "data": "6/1/", "status": "" },
  { "name": "To Leave", "price": "0.36", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "Togges", "price": "0.83", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Ultimate Edition", "price": "4.61", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Tom Clancy's Rainbow Six® Siege Deluxe Edition", "price": "3.77", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Tom Clancy's Rainbow Six® Siege Operator Edition", "price": "16.96", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Tom Clancy's Rainbow Six® Siege Ultimate Edition", "price": "27.63", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Tom Clancy's The Division® 2", "price": "0.94", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Tortuga - A Pirate's Tale", "price": "1.53", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Tour de France 2018", "price": "0.83", "region": "T", "data": "6/6/", "status": "GOLD" },
  { "name": "Tower Princess", "price": "4.08", "region": "E", "data": "6/6/", "status": "" },
  { "name": "Trackmania® Turbo", "price": "0.33", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Trials® Rising", "price": "1.25", "region": "A", "data": "6/6/", "status": "GOLD" },
  { "name": "Trollhunters: Defenders of Arcadia", "price": "2.85", "region": "E", "data": "6/6/", "status": "" },
  { "name": "Tropico 5 - Complete Collection", "price": "1.15", "region": "A", "data": "6/6/", "status": "" },
  { "name": "UNO®", "price": "0.35", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Under the Warehouse", "price": "3.14", "region": "I", "data": "6/1/", "status": "" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "0.57", "region": "A", "data": "12/3", "status": "" },
  { "name": "Unravel Two", "price": "0.52", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Verlore Tyd en Drome - Bundle", "price": "0.24", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Vermintide - Digital Value Pack", "price": "1.67", "region": "A", "data": "3/7/", "status": "" },
  { "name": "Volley Pals", "price": "2.49", "region": "A", "data": "6/6/", "status": "" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "2.67", "region": "A", "data": "8/31", "status": "" },
  { "name": "Warhammer 40,000: Battlesector", "price": "1.32", "region": "A", "data": "6/2/", "status": "" },
  { "name": "Warhammer 40,000: Boltgun", "price": "16.95", "region": "A", "data": "6/2/", "status": "" },
  { "name": "Warhammer 40,000: Inquisitor - Martyr Complete Collection", "price": "0.60", "region": "A", "data": "6/2/", "status": "" },
  { "name": "Warhammer 40,000: Inquisitor - Martyr Ultimate Edition", "price": "1.20", "region": "A", "data": "6/2/", "status": "" },
  { "name": "Warhammer 40,000: Mechanicus", "price": "0.48", "region": "A", "data": "6/2/", "status": "" },
  { "name": "Warhammer 40,000: Shootas, Blood & Teef", "price": "2.64", "region": "A", "data": "6/2/", "status": "" },
  { "name": "Warhammer 40,000: Space Wolf", "price": "0.73", "region": "A", "data": "6/2/", "status": "" },
  { "name": "Warhammer Age of Sigmar: Storm Ground", "price": "2.47", "region": "A", "data": "6/2/", "status": "" },
  { "name": "Warhammer Bundle: Mordheim and Blood Bowl 2", "price": "1.09", "region": "A", "data": "6/2/", "status": "" },
  { "name": "Warhammer Pack: Hack and Slash", "price": "0.48", "region": "A", "data": "6/2/", "status": "" },
  { "name": "Warhammer: Chaosbane Slayer Edition Xbox One", "price": "0.24", "region": "A", "data": "6/2/", "status": "" },
  { "name": "Warhammer: Chaosbane Slayer Edition Xbox Series X|S", "price": "0.36", "region": "A", "data": "6/2/", "status": "" },
  { "name": "Warhammer: End Times - Vermintide", "price": "0.59", "region": "A", "data": "6/2/", "status": "" },
  { "name": "Warhammer: Vermintide 2", "price": "0.25", "region": "A", "data": "6/2/", "status": "" },
  { "name": "Warhammer: Vermintide 2 - Premium Edition", "price": "0.38", "region": "A", "data": "6/2/", "status": "" },
  { "name": "Warhammer: Vermintide 2 - Ultimate Edition", "price": "0.44", "region": "A", "data": "6/2/", "status": "" },
  { "name": "Watch Dogs®: Legion", "price": "1.51", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Watch Dogs®: Legion Gold Edition", "price": "4.61", "region": "A", "data": "6/6/", "status": "" },
  { "name": "We Sing Pop", "price": "0.25", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Who Wants to Be a Millionaire?", "price": "0.72", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Woodle Tree Adventures", "price": "0.06", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Worms Battlegrounds", "price": "0.26", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Wuppo", "price": "0.33", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Yoku's Island Express", "price": "0.94", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Yooka-Laylee and the Impossible Lair", "price": "0.27", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Zorro The Chronicles Xbox One", "price": "6.03", "region": "A", "data": "6/6/", "status": "" },
  { "name": "de Blob", "price": "0.21", "region": "A", "data": "6/6/", "status": "" },
  { "name": "de Blob 2", "price": "0.31", "region": "A", "data": "6/6/", "status": "" }
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
    a = 50
  } else if (value > 1 && value <= 5) {
    a = 60
  } else if (value > 5 && value <= 10) {
    a = 75
  } else if (value > 10 && value <= 15) {
    a = 85
  } else if (value > 15 && value <= 20) {
    a = 100
  } else if (value > 20 && value <= 25) {
    a = 150
  } else if (value > 25) {
    a = 170
  }
  return a
}

input.oninput = result


sortArr.map((a) => {
  // const status = 
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
