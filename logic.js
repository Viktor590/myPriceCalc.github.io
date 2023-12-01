const input = document.querySelector('.input');
const output = document.querySelector('.output-res');
const list = document.querySelector('.list')
const showBtn = document.querySelector('.show')


showBtn.addEventListener('click', () => {
  showBtn.classList.contains('active') ?
    hiddenMenu() : showMenu()
})

let usd = 105;

const arr = [
  { "name": "#Funtime", "price": "0.21", "region": "A", "data": "12/5/", "status": "" },
  { "name": "11-11 Memories Retold", "price": "0.50", "region": "A", "data": "12/15", "status": "" },
  { "name": "60 Parsecs!", "price": "0.97", "region": "A", "data": "12/5/", "status": "" },
  { "name": "60 Seconds! Reatomized", "price": "0.97", "region": "A", "data": "12/5/", "status": "" },
  { "name": "9 Monkeys of Shaolin", "price": "0.67", "region": "A", "data": "12/15", "status": "" },
  { "name": "ANNO : Mutationem", "price": "0.62", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "Aces of the Luftwaffe Squadron - Extended Edition", "price": "0.17", "region": "A", "data": "12/15", "status": "" },
  { "name": "Aeon Must Die!", "price": "1.37", "region": "A", "data": "12/15", "status": "" },
  { "name": "Aery - Little Bird Adventure", "price": "0.14", "region": "A", "data": "12/5/", "status": "" },
  { "name": "Aery Series Bundle", "price": "1.07", "region": "A", "data": "12/3/", "status": "" },
  { "name": "Agatha Christie - Hercule Poirot: The First Cases", "price": "0.25", "region": "A", "data": "12/15", "status": "" },
  { "name": "Agatha Christie - The ABC Murders", "price": "1.04", "region": "A", "data": "12/15", "status": "" },
  { "name": "Agents of Mayhem", "price": "0.08", "region": "A", "data": "12/15", "status": "" },
  { "name": "Agony", "price": "0.08", "region": "A", "data": "12/15", "status": "" },
  { "name": "Akinofa", "price": "0.08", "region": "A", "data": "12/5/", "status": "" },
  { "name": "Alien: Isolation - The Collection", "price": "2.96", "region": "A", "data": "12/15", "status": "" },
  { "name": "Alone in the Dark", "price": "9.73", "region": "A", "data": "1/16/", "status": "" },
  { "name": "Alone in the Dark - Digital Deluxe Edition", "price": "11.23", "region": "A", "data": "1/16/", "status": "" },
  { "name": "Alphadia Neo", "price": "0.39", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "Alvastia Chronicles", "price": "0.30", "region": "A", "data": "12/5/", "status": "" },
  { "name": "Apocalipsis: The Tree of the Knowledge of Good and Evil", "price": "0.08", "region": "A", "data": "12/5/", "status": "" },
  { "name": "Arcadian Atlas", "price": "0.35", "region": "A", "data": "12/15", "status": "" },
  { "name": "Arise: A simple story", "price": "0.76", "region": "A", "data": "12/5/", "status": "" },
  { "name": "Ash of Gods Redemption", "price": "0.44", "region": "A", "data": "12/15", "status": "" },
  { "name": "Ashen", "price": "0.40", "region": "A", "data": "12/15", "status": "" },
  { "name": "Ashen: Definitive Edition", "price": "0.47", "region": "A", "data": "12/15", "status": "" },
  { "name": "Aspire - Ina's Tale", "price": "0.13", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "Assassin's Creed® Odyssey - DELUXE EDITION", "price": "1.66", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "Assassin's Creed® Odyssey - GOLD EDITION", "price": "2.08", "region": "A", "data": "12/5/", "status": "" },
  { "name": "Assassin's Creed® Origins - DELUXE EDITION", "price": "1.52", "region": "A", "data": "12/5/", "status": "" },
  { "name": "Assassin's Creed® Origins - GOLD EDITION", "price": "2.08", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "Assassin's Creed® Valhalla Deluxe Edition", "price": "3.47", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "Assassin’s Creed® Valhalla + Immortals Fenyx Rising™ Bundle", "price": "3.60", "region": "A", "data": "12/14", "status": "" },
  { "name": "Assassin’s Creed® Valhalla + Watch Dogs®: Legion Bundle", "price": "3.60", "region": "A", "data": "12/14", "status": "" },
  { "name": "Assault On Metaltron", "price": "0.04", "region": "A", "data": "12/5/", "status": "" },
  { "name": "Asterix & Obelix XXL3: The Crystal Menhir", "price": "1.39", "region": "A", "data": "12/15", "status": "" },
  { "name": "Asterix & Obelix XXL: Romastered", "price": "1.39", "region": "A", "data": "12/15", "status": "" },
  { "name": "Asterix & Obelix XXXL : The Ram of Hibernia", "price": "2.29", "region": "A", "data": "12/15", "status": "" },
  { "name": "Awarded Platformer Bundle", "price": "0.46", "region": "A", "data": "12/31", "status": "" },
  { "name": "Back 4 Blood", "price": "2.08", "region": "A", "data": "12/15", "status": "" },
  { "name": "Baja: Edge of Control HD", "price": "0.21", "region": "A", "data": "12/15", "status": "" },
  { "name": "Bakery Simulator", "price": "0.54", "region": "A", "data": "12/2/", "status": "" },
  { "name": "Baldur's Gate and Baldur's Gate II: Enhanced Editions", "price": "0.40", "region": "A", "data": "12/15", "status": "" },
  { "name": "Bard's Gold", "price": "0.03", "region": "A", "data": "12/5/", "status": "" },
  { "name": "Basketball Pinball", "price": "0.06", "region": "A", "data": "12/5/", "status": "" },
  { "name": "Battle Chasers: Nightwar", "price": "0.21", "region": "A", "data": "12/15", "status": "" },
  { "name": "Battle Worlds: Kronos", "price": "0.14", "region": "A", "data": "12/15", "status": "" },
  { "name": "Bayonetta", "price": "1.38", "region": "T", "data": "12/15", "status": "" },
  { "name": "Big Crown: Showdown", "price": "0.32", "region": "A", "data": "12/15", "status": "" },
  { "name": "Blasphemous", "price": "0.25", "region": "A", "data": "12/15", "status": "" },
  { "name": "Blind Fate: Edo no Yami", "price": "0.40", "region": "A", "data": "12/5/", "status": "" },
  { "name": "Blood Knights", "price": "0.07", "region": "A", "data": "12/15", "status": "" },
  { "name": "Boxville", "price": "0.28", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "Brawl Chess - Gambit", "price": "0.08", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "Cars 3: Driven to Win", "price": "0.62", "region": "A", "data": "12/15", "status": "" },
  { "name": "Cat Quest II", "price": "0.15", "region": "A", "data": "12/15", "status": "" },
  { "name": "Children of Zodiarcs", "price": "0.18", "region": "A", "data": "12/15", "status": "" },
  { "name": "Crashy Laps", "price": "0.22", "region": "A", "data": "12/8/", "status": "" },
  { "name": "Crazy Sports Bundle", "price": "0.03", "region": "A", "data": "12/15", "status": "" },
  { "name": "Cross Tails", "price": "0.95", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "CrushBorgs", "price": "0.14", "region": "A", "data": "12/5/", "status": "" },
  { "name": "DARKLAND 3", "price": "0.04", "region": "A", "data": "12/13", "status": "" },
  { "name": "DOOM Eternal: The Ancient Gods - Part One", "price": "2.61", "region": "T", "data": "12/15", "status": "" },
  { "name": "DOOM Eternal: The Ancient Gods - Part Two", "price": "2.61", "region": "T", "data": "12/15", "status": "" },
  { "name": "DRAGON BALL XENOVERSE", "price": "0.33", "region": "A", "data": "12/15", "status": "" },
  { "name": "DRIFTCE", "price": "2.08", "region": "A", "data": "12/16", "status": "" },
  { "name": "Deadlight: Director's Cut", "price": "0.04", "region": "A", "data": "12/15", "status": "" },
  { "name": "Defend the Rook", "price": "1.89", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "Defend the Rook - Supporter Edition", "price": "2.52", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "Dex", "price": "0.11", "region": "A", "data": "12/5/", "status": "" },
  { "name": "Digital Deluxe Upgrade featuring LEGO®", "price": "8.35", "region": "J", "data": "12/15", "status": "" },
  { "name": "Disjunction", "price": "0.16", "region": "A", "data": "12/15", "status": "" },
  { "name": "Dofamine", "price": "0.13", "region": "A", "data": "12/14", "status": "" },
  { "name": "Dolmen", "price": "1.39", "region": "A", "data": "12/15", "status": "" },
  { "name": "Dou", "price": "0.04", "region": "A", "data": "12/11", "status": "" },
  { "name": "Double Cross", "price": "0.16", "region": "A", "data": "12/15", "status": "" },
  { "name": "Drawful 2", "price": "0.07", "region": "A", "data": "12/15", "status": "" },
  { "name": "Dyna Bomb", "price": "0.85", "region": "E", "data": "12/5/", "status": "" },
  { "name": "EA SPORTS FC™ 24 Standard Edition Xbox One & Xbox Series X|S", "price": "33.88", "region": "T", "data": "12/31", "status": "" },
  { "name": "El Hijo - A Wild West Tale", "price": "0.20", "region": "A", "data": "12/15", "status": "" },
  { "name": "Elderand", "price": "0.63", "region": "A", "data": "12/15", "status": "" },
  { "name": "Elex", "price": "1.02", "region": "A", "data": "12/15", "status": "" },
  { "name": "Elite Dangerous Standard Edition", "price": "0.21", "region": "A", "data": "12/15", "status": "" },
  { "name": "Epic Chef", "price": "1.66", "region": "A", "data": "12/15", "status": "" },
  { "name": "Escape Dead Island", "price": "0.11", "region": "A", "data": "12/31", "status": "" },
  { "name": "Escape Sequence", "price": "0.10", "region": "A", "data": "12/5/", "status": "" },
  { "name": "Escape String", "price": "0.34", "region": "T", "data": "12/5/", "status": "" },
  { "name": "Evil Diary", "price": "0.16", "region": "A", "data": "12/9/", "status": "" },
  { "name": "FAR CRY 4 + FAR CRY PRIMAL BUNDLE", "price": "1.51", "region": "T", "data": "12/15", "status": "" },
  { "name": "FAR CRY ANTHOLOGY BUNDLE", "price": "4.85", "region": "A", "data": "12/14", "status": "" },
  { "name": "Far Cry® 5 + Far Cry® New Dawn Deluxe Edition Bundle", "price": "1.46", "region": "A", "data": "12/14", "status": "" },
  { "name": "Far Cry® New Dawn Deluxe Edition", "price": "1.00", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "Firegirl: Hack 'n Splash Rescue DX", "price": "0.71", "region": "A", "data": "12/15", "status": "" },
  { "name": "For Honor® Complete Edition", "price": "2.77", "region": "A", "data": "12/14", "status": "" },
  { "name": "Forest Grove", "price": "0.15", "region": "T", "data": "12/7/", "status": "" },
  { "name": "Freshly Frosted", "price": "0.26", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "Furi", "price": "0.22", "region": "A", "data": "12/5/", "status": "" },
  { "name": "Fusion Bundle", "price": "7.89", "region": "E", "data": "12/15", "status": "" },
  { "name": "Garfield Kart Furious Racing", "price": "0.20", "region": "A", "data": "12/15", "status": "" },
  { "name": "Generation Zero ® - Essential DLC Bundle", "price": "0.40", "region": "A", "data": "12/15", "status": "" },
  { "name": "Generation Zero ® - Exterminator DLC Bundle", "price": "0.61", "region": "A", "data": "12/15", "status": "" },
  { "name": "Generation Zero®", "price": "0.73", "region": "A", "data": "12/15", "status": "" },
  { "name": "Generation Zero® - Resistance Bundle", "price": "0.79", "region": "A", "data": "12/15", "status": "" },
  { "name": "Geometric Sniper", "price": "0.07", "region": "A", "data": "12/5/", "status": "" },
  { "name": "Get Even", "price": "0.42", "region": "A", "data": "12/15", "status": "" },
  { "name": "Gods Will Fall", "price": "0.42", "region": "A", "data": "12/15", "status": "" },
  { "name": "Gods Will Fall - Valiant Edition", "price": "0.67", "region": "A", "data": "12/15", "status": "" },
  { "name": "Golf Club: Wasteland", "price": "0.08", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "Grand Theft Auto Online", "price": "2.77", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "Grand Theft Auto V (Xbox One & Xbox Series X|S)", "price": "6.41", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "Grand Theft Auto V: Premium Edition & Great White Shark C...", "price": "2.87", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "Grand Theft Auto V: Premium Edition & Megalodon Shark Car...", "price": "4.99", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "Grand Theft Auto V: Premium Edition & Whale Shark Card Bu...", "price": "3.33", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "Gravel", "price": "0.55", "region": "A", "data": "12/15", "status": "" },
  { "name": "Gravel Special Edition", "price": "0.83", "region": "A", "data": "12/15", "status": "" },
  { "name": "Greak: Memories of Azur", "price": "0.62", "region": "A", "data": "12/15", "status": "" },
  { "name": "Gungrave G.O.R.E", "price": "3.47", "region": "A", "data": "12/15", "status": "" },
  { "name": "HARDCORE MECHA", "price": "12.71", "region": "I", "data": "12/13", "status": "" },
  { "name": "HITMAN Trilogy Premium Add-ons Bundle", "price": "0.83", "region": "A", "data": "12/15", "status": "" },
  { "name": "HUMANKIND™ - Upgrade Pack, Standard to Heritage Edition", "price": "2.26", "region": "E", "data": "12/15", "status": "" },
  { "name": "HammerHelm", "price": "0.42", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "Hard Platformers Pack: Super Cyborg and Dead Dungeon", "price": "0.14", "region": "A", "data": "12/5/", "status": "" },
  { "name": "Haven", "price": "0.50", "region": "A", "data": "12/5/", "status": "" },
  { "name": "Heavy Burden", "price": "0.16", "region": "A", "data": "12/14", "status": "" },
  { "name": "Hell Let Loose", "price": "10.11", "region": "T", "data": "12/14", "status": "" },
  { "name": "Hell Let Loose - Deluxe Edition", "price": "26.27", "region": "T", "data": "12/14", "status": "" },
  { "name": "Hokko Life", "price": "0.87", "region": "A", "data": "12/15", "status": "" },
  { "name": "Howl", "price": "2.62", "region": "A", "data": "1/23/", "status": "GOLD" },
  { "name": "Hundred Days - Winemaking Simulator", "price": "0.83", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "Hungry Shark® World", "price": "0.14", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "Hunting Simulator 2 Xbox One", "price": "0.48", "region": "A", "data": "12/15", "status": "" },
  { "name": "Hunting Simulator 2 Xbox Series X|S", "price": "0.40", "region": "A", "data": "12/15", "status": "" },
  { "name": "I Saw Black Clouds", "price": "0.31", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "IceLine", "price": "0.12", "region": "A", "data": "12/5/", "status": "" },
  { "name": "InnerSpace", "price": "0.03", "region": "A", "data": "12/15", "status": "" },
  { "name": "Insurgency: Sandstorm - Deluxe Edition", "price": "16.60", "region": "J", "data": "12/5/", "status": "GOLD" },
  { "name": "Joy Ball Adventure", "price": "0.04", "region": "A", "data": "12/11", "status": "" },
  { "name": "Jurassic World Evolution", "price": "0.35", "region": "A", "data": "12/15", "status": "" },
  { "name": "Jurassic World Evolution 2", "price": "3.89", "region": "T", "data": "12/15", "status": "" },
  { "name": "Jurassic World Evolution: Expansion Collection", "price": "0.64", "region": "A", "data": "12/15", "status": "" },
  { "name": "Kaiju Wars", "price": "0.39", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "Kao the Kangaroo A Well Good Bundle", "price": "2.77", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "Katamari Damacy REROLL", "price": "1.39", "region": "A", "data": "12/15", "status": "" },
  { "name": "Kentucky Route Zero: TV Edition", "price": "0.50", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "Kerbal Space Program Enhanced Edition Complete", "price": "3.07", "region": "T", "data": "12/5/", "status": "GOLD" },
  { "name": "King's Bounty II - Lord's Edition", "price": "1.71", "region": "T", "data": "12/15", "status": "" },
  { "name": "Knights of Pen and Paper Bundle", "price": "0.22", "region": "A", "data": "12/15", "status": "" },
  { "name": "Kung Fu Fighting", "price": "0.04", "region": "A", "data": "12/2/", "status": "" },
  { "name": "LEGO® 2K Drive Awesome Edition", "price": "26.21", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "LEGO® DC Heroes & Villains-Bundle", "price": "1.34", "region": "T", "data": "12/14", "status": "" },
  { "name": "LEGO® Harry Potter™ Collection", "price": "0.62", "region": "A", "data": "12/14", "status": "" },
  { "name": "LEGO® Marvel Collection", "price": "2.11", "region": "T", "data": "12/14", "status": "" },
  { "name": "LEGO® The Incredibles", "price": "0.50", "region": "A", "data": "12/14", "status": "" },
  { "name": "Light & Dark Bundle", "price": "4.43", "region": "A", "data": "11/2/", "status": "" },
  { "name": "Limb Hunter", "price": "0.10", "region": "A", "data": "12/5/", "status": "" },
  { "name": "LoBlocks", "price": "0.06", "region": "A", "data": "12/5/", "status": "" },
  { "name": "Low Story", "price": "0.26", "region": "A", "data": "12/2/", "status": "" },
  { "name": "MXGP 2019 - The Official Motocross Videogame", "price": "0.42", "region": "A", "data": "12/15", "status": "" },
  { "name": "MXGP PRO", "price": "0.35", "region": "A", "data": "12/15", "status": "" },
  { "name": "Madden NFL 19", "price": "29.44", "region": "C", "data": "12/30", "status": "" },
  { "name": "Madden NFL 23 Xbox One", "price": "14.20", "region": "A", "data": "12/31", "status": "" },
  { "name": "Madden NFL 23 Xbox Series X|S", "price": "16.64", "region": "A", "data": "12/31", "status": "" },
  { "name": "Maid of Sker", "price": "0.45", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "Mato Anomalies", "price": "3.45", "region": "T", "data": "12/15", "status": "" },
  { "name": "Mato Anomalies Digital Deluxe Edition", "price": "3.88", "region": "T", "data": "12/15", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.00", "region": "U", "data": "12/1/", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.00", "region": "U", "data": "12/1/", "status": "" },
  { "name": "Middle-earth™: Shadow of Mordor™ - Game of the Year Edition", "price": "0.53", "region": "T", "data": "12/14", "status": "" },
  { "name": "Middle-earth™: Shadow of War™ Definitive Edition", "price": "0.83", "region": "A", "data": "12/14", "status": "" },
  { "name": "Middle-earth™: The Shadow Bundle", "price": "2.50", "region": "A", "data": "12/14", "status": "" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle", "price": "0.97", "region": "T", "data": "12/14", "status": "" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle - Windows 10", "price": "0.97", "region": "T", "data": "12/14", "status": "" },
  { "name": "Monster Energy Supercross - The Official Videogame 3", "price": "1.04", "region": "A", "data": "12/15", "status": "" },
  { "name": "Monster Energy Supercross 3 - Special Edition", "price": "1.87", "region": "A", "data": "12/15", "status": "" },
  { "name": "Monster Sanctuary", "price": "0.62", "region": "A", "data": "12/15", "status": "" },
  { "name": "Monster Truck Championship Xbox One", "price": "0.32", "region": "A", "data": "12/15", "status": "" },
  { "name": "Monster Truck Championship Xbox Series X|S", "price": "0.32", "region": "A", "data": "12/15", "status": "" },
  { "name": "Moonfall Ultimate", "price": "0.12", "region": "A", "data": "12/5/", "status": "" },
  { "name": "Mortal Kombat 11", "price": "0.62", "region": "A", "data": "12/7/", "status": "" },
  { "name": "Mortal Kombat 11 Ultimate", "price": "1.50", "region": "A", "data": "12/14", "status": "" },
  { "name": "Mortal Kombat 11 Ultimate + Injustice 2 Leg. Edition Bundle", "price": "1.52", "region": "A", "data": "12/14", "status": "" },
  { "name": "Mortal Kombat X", "price": "0.76", "region": "A", "data": "12/15", "status": "" },
  { "name": "Motesolo: No Girlfriend Since Birth", "price": "0.71", "region": "A", "data": "12/15", "status": "" },
  { "name": "MotoGP™19", "price": "0.83", "region": "A", "data": "12/15", "status": "" },
  { "name": "Moving Out Deluxe Edition", "price": "0.72", "region": "A", "data": "12/15", "status": "" },
  { "name": "Mr. DRILLER DrillLand", "price": "0.46", "region": "T", "data": "12/15", "status": "" },
  { "name": "My Friend Pedro", "price": "0.20", "region": "A", "data": "12/15", "status": "" },
  { "name": "NO THING", "price": "0.04", "region": "A", "data": "12/5/", "status": "" },
  { "name": "Necromunda: Underhive Wars - Gold Edition", "price": "2.50", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "Neon Abyss Deluxe Edition", "price": "0.44", "region": "A", "data": "12/15", "status": "" },
  { "name": "New Tales from the Borderlands: Deluxe Edition", "price": "9.71", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "Night Book", "price": "0.29", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.10", "region": "A", "data": "5/31/", "status": "" },
  { "name": "ONE PIECE: PIRATE WARRIORS 4", "price": "5.75", "region": "A", "data": "12/15", "status": "" },
  { "name": "ONE PUNCH MAN: A HERO NOBODY KNOWS", "price": "1.50", "region": "A", "data": "12/15", "status": "" },
  { "name": "Olympic Games Tokyo 2020 – The Official Video Game™", "price": "2.56", "region": "T", "data": "12/15", "status": "" },
  { "name": "One Button Games 5-in-1", "price": "0.17", "region": "A", "data": "12/5/", "status": "" },
  { "name": "Othercide", "price": "1.64", "region": "T", "data": "12/15", "status": "" },
  { "name": "Outbreak", "price": "0.04", "region": "A", "data": "12/5/", "status": "" },
  { "name": "Outbreak Silver Collection", "price": "0.74", "region": "A", "data": "12/5/", "status": "" },
  { "name": "Outbreak: Lost Hope", "price": "0.05", "region": "A", "data": "12/5/", "status": "" },
  { "name": "Overcooked", "price": "0.13", "region": "A", "data": "12/15", "status": "" },
  { "name": "Overcooked! + Overcooked! 2", "price": "0.35", "region": "A", "data": "12/15", "status": "" },
  { "name": "Overcooked! 2", "price": "0.17", "region": "A", "data": "12/7/", "status": "" },
  { "name": "Overwatch® 2: Complete Hero Collection", "price": "7.35", "region": "A", "data": "12/15", "status": "" },
  { "name": "PGA TOUR 2K23 Deluxe Edition", "price": "7.63", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "Palindrome Syndrome: Escape Room", "price": "1.18", "region": "A", "data": "12/5/", "status": "" },
  { "name": "Pankapu", "price": "0.05", "region": "A", "data": "12/15", "status": "" },
  { "name": "Pikuniku", "price": "0.13", "region": "A", "data": "12/15", "status": "" },
  { "name": "Pixel Cafe", "price": "0.47", "region": "A", "data": "12/15", "status": "" },
  { "name": "Planet Alpha", "price": "0.31", "region": "A", "data": "12/15", "status": "" },
  { "name": "Planet Coaster: Console Edition", "price": "0.69", "region": "A", "data": "12/15", "status": "" },
  { "name": "Planet of the Eyes", "price": "0.03", "region": "A", "data": "12/15", "status": "" },
  { "name": "Professor Rubik's Brain Fitness", "price": "0.10", "region": "A", "data": "12/15", "status": "" },
  { "name": "Puyo Puyo Champions", "price": "0.44", "region": "T", "data": "12/15", "status": "" },
  { "name": "Pyramid Quest", "price": "0.20", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "RICO", "price": "0.11", "region": "A", "data": "12/15", "status": "" },
  { "name": "Radical Rabbit Stew", "price": "0.16", "region": "A", "data": "12/15", "status": "" },
  { "name": "Rainbow Billy: The Curse of the Leviathan", "price": "0.20", "region": "A", "data": "12/15", "status": "" },
  { "name": "Ride 2", "price": "0.69", "region": "A", "data": "12/15", "status": "" },
  { "name": "River City Girls Zero", "price": "0.42", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "Riverbond", "price": "0.15", "region": "A", "data": "12/15", "status": "" },
  { "name": "Roarr! Jurassic Edition", "price": "0.08", "region": "A", "data": "12/5/", "status": "" },
  { "name": "Robolifter", "price": "0.14", "region": "A", "data": "12/5/", "status": "" },
  { "name": "Rock of Ages 2: Bigger & Boulder™", "price": "0.32", "region": "T", "data": "12/15", "status": "" },
  { "name": "Rogue Lords", "price": "0.30", "region": "A", "data": "12/15", "status": "" },
  { "name": "Roguebook Xbox One", "price": "0.25", "region": "A", "data": "12/15", "status": "" },
  { "name": "Roguebook Xbox Series X|S", "price": "0.30", "region": "A", "data": "12/15", "status": "" },
  { "name": "Rollerdrome", "price": "6.55", "region": "T", "data": "12/12", "status": "" },
  { "name": "Roman Rumble in Las Vegum - Asterix & Obelix XXL 2", "price": "1.39", "region": "A", "data": "12/15", "status": "" },
  { "name": "Runnyk", "price": "0.16", "region": "A", "data": "12/2/", "status": "" },
  { "name": "Rusty Spout Rescue Adventure", "price": "1.00", "region": "E", "data": "12/5/", "status": "" },
  { "name": "SENSEs: Midnight", "price": "5.41", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "SETTRIS", "price": "2.58", "region": "I", "data": "12/7/", "status": "" },
  { "name": "SIMULACRA", "price": "0.26", "region": "A", "data": "12/5/", "status": "" },
  { "name": "SOULVARS", "price": "0.47", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "3.55", "region": "A", "data": "12/31", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "4.74", "region": "A", "data": "1/1/2", "status": "" },
  { "name": "SWORD ART ONLINE Alicization Lycoris", "price": "0.83", "region": "A", "data": "12/15", "status": "" },
  { "name": "SWORD ART ONLINE: FATAL BULLET", "price": "0.62", "region": "A", "data": "12/15", "status": "" },
  { "name": "Scars Above", "price": "2.91", "region": "A", "data": "12/15", "status": "" },
  { "name": "Shadowblade Odyssey", "price": "0.04", "region": "A", "data": "12/10", "status": "" },
  { "name": "Shark Pinball", "price": "0.06", "region": "A", "data": "12/5/", "status": "" },
  { "name": "Shenmue I & II", "price": "0.17", "region": "A", "data": "12/15", "status": "" },
  { "name": "Shenmue I & II", "price": "0.26", "region": "A", "data": "12/15", "status": "" },
  { "name": "Sherlock Holmes Chapter One Deluxe Edition", "price": "2.61", "region": "A", "data": "12/15", "status": "" },
  { "name": "Sherlock Holmes: Crimes and Punishments Redux", "price": "1.29", "region": "A", "data": "12/15", "status": "" },
  { "name": "Sherlock Holmes: The Devil's Daughter Redux", "price": "1.29", "region": "A", "data": "12/15", "status": "" },
  { "name": "Skul: The Hero Slayer", "price": "0.39", "region": "A", "data": "12/15", "status": "" },
  { "name": "SolSeraph", "price": "0.21", "region": "A", "data": "12/15", "status": "" },
  { "name": "Source of Madness", "price": "0.20", "region": "A", "data": "12/15", "status": "" },
  { "name": "Space Otter Charlie", "price": "0.27", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "Sparkle Bundle", "price": "0.35", "region": "A", "data": "12/31", "status": "" },
  { "name": "SteamWorld Build", "price": "5.31", "region": "A", "data": "12/1/", "status": "" },
  { "name": "SteamWorld Build & Dig Bundle", "price": "5.46", "region": "A", "data": "12/1/", "status": "" },
  { "name": "Struggling", "price": "0.92", "region": "T", "data": "12/15", "status": "" },
  { "name": "Sudocats", "price": "0.09", "region": "A", "data": "12/5/", "status": "" },
  { "name": "Super Monkey Ball: Banana Blitz HD", "price": "2.07", "region": "T", "data": "12/15", "status": "" },
  { "name": "Super Pixel Kid", "price": "0.04", "region": "A", "data": "12/5/", "status": "" },
  { "name": "Superliminal", "price": "1.97", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "Swords & Bones", "price": "0.12", "region": "A", "data": "12/5/", "status": "" },
  { "name": "TEMBO THE BADASS ELEPHANT", "price": "0.10", "region": "A", "data": "12/15", "status": "" },
  { "name": "Tales of the Neon Sea", "price": "0.59", "region": "A", "data": "12/5/", "status": "" },
  { "name": "Tanks Bundle", "price": "0.40", "region": "A", "data": "12/3/", "status": "" },
  { "name": "Telling Lies", "price": "0.20", "region": "A", "data": "12/15", "status": "" },
  { "name": "Terraformers: Supporter Edition", "price": "4.66", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "The BioWare Bundle", "price": "0.53", "region": "A", "data": "12/5/", "status": "" },
  { "name": "The Book of Unwritten Tales 2", "price": "0.28", "region": "A", "data": "12/15", "status": "" },
  { "name": "The Chant", "price": "3.59", "region": "T", "data": "12/15", "status": "" },
  { "name": "The Dwarves", "price": "0.28", "region": "A", "data": "12/15", "status": "" },
  { "name": "The Escapists + The Escapists 2", "price": "0.35", "region": "A", "data": "12/15", "status": "" },
  { "name": "The Escapists: Supermax Edition", "price": "0.17", "region": "A", "data": "12/15", "status": "" },
  { "name": "The Infectious Madness of Doctor Dekker", "price": "0.16", "region": "A", "data": "12/5/", "status": "" },
  { "name": "The Jackbox Party Pack", "price": "0.17", "region": "A", "data": "12/15", "status": "" },
  { "name": "The Jackbox Party Quadpack", "price": "1.56", "region": "A", "data": "12/31", "status": "" },
  { "name": "The King's Bird", "price": "0.16", "region": "A", "data": "12/15", "status": "" },
  { "name": "The Knight Witch", "price": "1.25", "region": "A", "data": "12/15", "status": "" },
  { "name": "The LEGO Movie 2 Videogame", "price": "0.79", "region": "A", "data": "12/14", "status": "" },
  { "name": "The LEGO® Games Bundle", "price": "1.66", "region": "A", "data": "12/14", "status": "" },
  { "name": "The LEGO® Movie Videogame-Bundle", "price": "1.34", "region": "T", "data": "12/14", "status": "" },
  { "name": "The Last Oricru", "price": "3.10", "region": "T", "data": "12/15", "status": "" },
  { "name": "The Serpent Rogue", "price": "0.62", "region": "A", "data": "12/15", "status": "" },
  { "name": "The Shadow Warrior Trilogy", "price": "3.47", "region": "A", "data": "12/15", "status": "" },
  { "name": "The Sinking City Xbox Series X|S", "price": "1.62", "region": "A", "data": "12/15", "status": "" },
  { "name": "The Sinking City – Necronomicon Edition", "price": "2.70", "region": "A", "data": "12/15", "status": "" },
  { "name": "The Sisters - Party of the Year", "price": "0.30", "region": "A", "data": "12/15", "status": "" },
  { "name": "The Surge", "price": "0.54", "region": "A", "data": "12/15", "status": "" },
  { "name": "The Surge 2", "price": "1.73", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "The Surge 2 - Windows 10", "price": "0.90", "region": "A", "data": "12/5/", "status": "" },
  { "name": "The Survivalists", "price": "0.83", "region": "A", "data": "12/15", "status": "" },
  { "name": "The Traveler's Path", "price": "2.58", "region": "I", "data": "12/14", "status": "" },
  { "name": "The Walking Dead: Destinies", "price": "29.42", "region": "I", "data": "12/2/", "status": "" },
  { "name": "The Witness", "price": "0.28", "region": "A", "data": "12/5/", "status": "" },
  { "name": "Thief of Thieves: Season One", "price": "0.12", "region": "A", "data": "12/15", "status": "" },
  { "name": "This Is the Police", "price": "0.14", "region": "A", "data": "12/15", "status": "" },
  { "name": "This Means Warp", "price": "4.35", "region": "A", "data": "12/7/", "status": "" },
  { "name": "This is the Police 2", "price": "0.21", "region": "A", "data": "12/15", "status": "" },
  { "name": "This is the Zodiac Speaking", "price": "0.13", "region": "A", "data": "12/5/", "status": "" },
  { "name": "Thunder Kid: Hunt for the Robot Emperor", "price": "0.13", "region": "A", "data": "12/5/", "status": "" },
  { "name": "Timberman: The Big Adventure", "price": "0.17", "region": "A", "data": "12/9/", "status": "" },
  { "name": "Time Carnage", "price": "0.15", "region": "A", "data": "12/5/", "status": "" },
  { "name": "Titan Quest", "price": "0.21", "region": "A", "data": "12/15", "status": "" },
  { "name": "Tom Clancy's Rainbow Six® Siege Operator Edition", "price": "8.74", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "Tomb Raider I-III Remastered Starring Lara Croft", "price": "1.07", "region": "A", "data": "2/13/", "status": "" },
  { "name": "Train Life: A Railway Simulator", "price": "0.30", "region": "A", "data": "12/15", "status": "" },
  { "name": "Train Traffic Manager", "price": "0.53", "region": "A", "data": "12/9/", "status": "" },
  { "name": "Trash is Fun", "price": "0.17", "region": "A", "data": "12/9/", "status": "" },
  { "name": "Trash is Fun (Windows)", "price": "0.17", "region": "A", "data": "12/9/", "status": "" },
  { "name": "Trials® Rising", "price": "0.83", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "Turok Trilogy Bundle", "price": "5.29", "region": "T", "data": "12/7/", "status": "" },
  { "name": "Two Hundred Ways", "price": "0.36", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "0.37", "region": "A", "data": "12/30", "status": "" },
  { "name": "Valkyria Chronicles 4", "price": "0.82", "region": "T", "data": "12/15", "status": "" },
  { "name": "Vampire: The Masquerade - Swansong Xbox One", "price": "3.81", "region": "A", "data": "12/15", "status": "" },
  { "name": "Vampire: The Masquerade - Swansong Xbox Series X|S", "price": "3.81", "region": "A", "data": "12/15", "status": "" },
  { "name": "Vanquish", "price": "1.38", "region": "T", "data": "12/15", "status": "" },
  { "name": "Vermintide - Digital Value Pack", "price": "1.11", "region": "A", "data": "3/7/2", "status": "" },
  { "name": "WRC 10 Deluxe Edition Xbox One & Xbox Series X|S", "price": "2.52", "region": "A", "data": "12/15", "status": "" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "1.77", "region": "A", "data": "8/31/", "status": "" },
  { "name": "Wales Interactive Publisher Bundle", "price": "1.85", "region": "A", "data": "12/5/", "status": "" },
  { "name": "Warhammer 40,000: Inquisitor - Martyr", "price": "0.24", "region": "A", "data": "12/15", "status": "" },
  { "name": "Warhammer 40,000: Inquisitor - Martyr Complete Collection", "price": "0.40", "region": "A", "data": "12/15", "status": "" },
  { "name": "Warhammer: Chaosbane Xbox One", "price": "0.08", "region": "A", "data": "12/15", "status": "" },
  { "name": "Watch Dogs®2", "price": "1.04", "region": "A", "data": "12/15", "status": "" },
  { "name": "Watch Dogs®2 - Deluxe Edition", "price": "1.41", "region": "A", "data": "12/14", "status": "" },
  { "name": "Watch Dogs®: Legion Gold Edition", "price": "3.05", "region": "A", "data": "12/15", "status": "" },
  { "name": "Weird West", "price": "2.70", "region": "A", "data": "12/15", "status": "" },
  { "name": "Werewolf: The Apocalypse - Earthblood Champion of Gaia Xb...", "price": "0.24", "region": "A", "data": "12/15", "status": "" },
  { "name": "Werewolf: The Apocalypse - Earthblood Champion of Gaia Xbox Series X|S", "price": "0.24", "region": "A", "data": "12/15", "status": "" },
  { "name": "What Lies in the Multiverse", "price": "0.15", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "What Remains of Edith Finch", "price": "0.14", "region": "A", "data": "12/15", "status": "" },
  { "name": "Who Wants to Be a Millionaire?", "price": "0.30", "region": "A", "data": "12/15", "status": "" },
  { "name": "Wife Quest", "price": "0.16", "region": "A", "data": "12/5/", "status": "" },
  { "name": "World War Z", "price": "0.59", "region": "A", "data": "12/5/", "status": "" },
  { "name": "Worms Battlegrounds", "price": "0.17", "region": "A", "data": "12/15", "status": "" },
  { "name": "X-Pack", "price": "0.28", "region": "A", "data": "12/5/", "status": "" },
  { "name": "XCOM®: Enemy Within", "price": "0.22", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "Yakuza 3 Remastered", "price": "1.08", "region": "T", "data": "12/15", "status": "" },
  { "name": "Yakuza 3 Remastered for Windows 10", "price": "1.08", "region": "T", "data": "12/15", "status": "" },
  { "name": "Yakuza 4 Remastered", "price": "1.08", "region": "T", "data": "12/15", "status": "" },
  { "name": "Yakuza 4 Remastered for Windows 10", "price": "1.08", "region": "T", "data": "12/15", "status": "" },
  { "name": "Yakuza 5 Remastered", "price": "1.08", "region": "T", "data": "12/15", "status": "" },
  { "name": "Yakuza 5 Remastered for Windows 10", "price": "1.08", "region": "T", "data": "12/15", "status": "" },
  { "name": "Yoku's Island Express", "price": "0.62", "region": "A", "data": "12/15", "status": "" },
  { "name": "Yooka-Laylee and the Impossible Lair", "price": "0.24", "region": "A", "data": "12/15", "status": "" },
  { "name": "ZOMBI", "price": "0.11", "region": "A", "data": "12/5/", "status": "GOLD" },
  { "name": "Zomborg", "price": "0.16", "region": "A", "data": "12/8/", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Essentials DLC Bundle", "price": "0.28", "region": "A", "data": "12/15", "status": "" }
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



