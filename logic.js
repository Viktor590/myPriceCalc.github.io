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
  { "name": "6Souls", "price": "0.24", "region": "A", "data": "5/30", "status": "" },
  { "name": "9 Monkeys of Shaolin + Ash of Gods + Redeemer: Bundle", "price": "1.70", "region": "A", "data": "5/30", "status": "" },
  { "name": "A Gummy's Life", "price": "0.36", "region": "A", "data": "5/30", "status": "" },
  { "name": "A Hat in Time", "price": "0.64", "region": "A", "data": "5/30", "status": "" },
  { "name": "A Plague Tale: Innocence", "price": "1.66", "region": "A", "data": "5/30", "status": "" },
  { "name": "A Plague Tale: Innocence - Windows 10", "price": "2.23", "region": "A", "data": "5/30", "status": "" },
  { "name": "A Plague Tale: Requiem", "price": "13.83", "region": "A", "data": "5/30", "status": "" },
  { "name": "A Plague Tale: Requiem - Windows", "price": "9.83", "region": "A", "data": "5/30", "status": "" },
  { "name": "ACE COMBAT™ 7: SKIES UNKNOWN - TOP GUN: Maverick Ultimate Edition", "price": "3.32", "region": "A", "data": "5/30", "status": "" },
  { "name": "ARCADE GAME SERIES: Ms. PAC-MAN", "price": "0.13", "region": "A", "data": "5/30", "status": "" },
  { "name": "ARCADE GAME SERIES: PAC-MAN", "price": "0.13", "region": "A", "data": "5/30", "status": "" },
  { "name": "AVICII Invector", "price": "0.24", "region": "A", "data": "5/29", "status": "" },
  { "name": "AVICII Invector: Encore Edition", "price": "0.37", "region": "A", "data": "5/29", "status": "" },
  { "name": "Absolute Deduction bundle", "price": "11.37", "region": "E", "data": "5/30", "status": "" },
  { "name": "Aces of the Luftwaffe Squadron - Extended Edition", "price": "0.21", "region": "A", "data": "5/30", "status": "" },
  { "name": "Adventure Time: Pirates of the Enchiridion", "price": "4.97", "region": "A", "data": "5/30", "status": "" },
  { "name": "Aerial_Knight's Never Yield", "price": "0.29", "region": "A", "data": "5/30", "status": "" },
  { "name": "Agatha Christie - Hercule Poirot: The First Cases", "price": "0.64", "region": "A", "data": "5/30", "status": "" },
  { "name": "Agony", "price": "0.13", "region": "A", "data": "5/30", "status": "" },
  { "name": "Ailment", "price": "0.33", "region": "A", "data": "5/30", "status": "GOLD" },
  { "name": "Akuto: Showdown", "price": "0.12", "region": "A", "data": "5/30", "status": "" },
  { "name": "Alan Wake Remastered", "price": "2.04", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Alekhine's Gun", "price": "0.12", "region": "A", "data": "5/30", "status": "" },
  { "name": "Aliens: Fireteam Elite", "price": "4.29", "region": "E", "data": "5/30", "status": "" },
  { "name": "America’s Greatest Game Shows: Wheel of Fortune® & Jeopar...", "price": "0.58", "region": "A", "data": "5/30", "status": "GOLD" },
  { "name": "Ancestors: The Humankind Odyssey", "price": "1.92", "region": "A", "data": "5/30", "status": "" },
  { "name": "Angels with Scaly Wings", "price": "0.30", "region": "A", "data": "5/30", "status": "GOLD" },
  { "name": "Anodyne 2", "price": "0.60", "region": "A", "data": "5/30", "status": "GOLD" },
  { "name": "Arcade Paradise", "price": "0.73", "region": "A", "data": "5/29", "status": "" },
  { "name": "Archvale", "price": "0.55", "region": "A", "data": "5/30", "status": "" },
  { "name": "Are You Smarter Than A 5th Grader?", "price": "3.07", "region": "A", "data": "5/30", "status": "" },
  { "name": "Arkanoid Eternal Battle", "price": "1.19", "region": "A", "data": "5/30", "status": "" },
  { "name": "Ash of Gods Redemption", "price": "1.02", "region": "A", "data": "5/30", "status": "" },
  { "name": "Assassin's Creed Antiquity Pack", "price": "3.40", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin's Creed Chronicles – Trilogy", "price": "0.32", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin's Creed IV Black Flag", "price": "1.06", "region": "A", "data": "5/30", "status": "" },
  { "name": "Assassin's Creed Legendary Collection", "price": "7.98", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin's Creed Triple Pack: Black Flag, Unity, Syndicate", "price": "0.96", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin's Creed Unity", "price": "1.06", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin's Creed® Bundle: Assassin's Creed® Valhalla, Ass...", "price": "10.64", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin's Creed® Chronicles: China", "price": "0.27", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin's Creed® Chronicles: India", "price": "0.17", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin's Creed® Chronicles: Russia", "price": "0.17", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin's Creed® III Remastered", "price": "1.38", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin's Creed® Odyssey", "price": "1.96", "region": "A", "data": "5/30", "status": "" },
  { "name": "Assassin's Creed® Odyssey - DELUXE EDITION", "price": "2.55", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin's Creed® Odyssey - GOLD EDITION", "price": "3.19", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin's Creed® Odyssey - ULTIMATE EDITION", "price": "3.83", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin's Creed® Origins", "price": "1.47", "region": "A", "data": "5/30", "status": "" },
  { "name": "Assassin's Creed® Origins - DELUXE EDITION", "price": "2.34", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin's Creed® Origins - GOLD EDITION", "price": "3.19", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin's Creed® Rogue", "price": "0.51", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin's Creed® Syndicate", "price": "1.98", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin's Creed® The Ezio Collection", "price": "2.30", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin's Creed® Valhalla", "price": "3.83", "region": "A", "data": "5/30", "status": "" },
  { "name": "Assassin's Creed® Valhalla Complete Edition", "price": "12.77", "region": "A", "data": "5/30", "status": "" },
  { "name": "Assassin's Creed® Valhalla Deluxe Edition", "price": "5.32", "region": "A", "data": "5/30", "status": "" },
  { "name": "Assassin's Creed® Valhalla Ragnarök Edition", "price": "8.94", "region": "A", "data": "5/30", "status": "" },
  { "name": "Assassin’s Creed® Rogue Remastered", "price": "1.06", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin’s Creed® Valhalla + Immortals Fenyx Rising™ Bundle", "price": "6.92", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Assassin’s Creed® Valhalla + Watch Dogs®: Legion Bundle", "price": "6.92", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Asterix & Obelix XXXL : The Ram of Hibernia", "price": "9.13", "region": "A", "data": "5/30", "status": "" },
  { "name": "Atomic Heart", "price": "34.05", "region": "A", "data": "5/30", "status": "" },
  { "name": "Atomic Heart - Premium Edition", "price": "54.28", "region": "A", "data": "5/30", "status": "" },
  { "name": "Aven Colony - Deluxe Edition", "price": "1.21", "region": "A", "data": "5/30", "status": "" },
  { "name": "Awarded Platformer Bundle", "price": "0.70", "region": "A", "data": "12/3", "status": "" },
  { "name": "BLACKTAIL", "price": "9.82", "region": "T", "data": "5/30", "status": "" },
  { "name": "BROK the InvestiGator", "price": "2.87", "region": "A", "data": "5/30", "status": "" },
  { "name": "Back 4 Blood", "price": "3.46", "region": "E", "data": "5/30", "status": "" },
  { "name": "Baja: Edge of Control HD", "price": "0.32", "region": "A", "data": "5/30", "status": "" },
  { "name": "Batman™: Arkham Knight", "price": "0.91", "region": "T", "data": "5/30", "status": "" },
  { "name": "Battle Worlds: Kronos", "price": "0.21", "region": "A", "data": "5/30", "status": "" },
  { "name": "Bear With Me: The Lost Robots", "price": "0.06", "region": "A", "data": "5/30", "status": "" },
  { "name": "BioShock 2 Remastered", "price": "1.38", "region": "A", "data": "5/30", "status": "" },
  { "name": "BioShock Infinite: The Complete Edition", "price": "2.20", "region": "A", "data": "5/30", "status": "" },
  { "name": "BioShock Remastered", "price": "2.20", "region": "A", "data": "5/30", "status": "" },
  { "name": "Black Legend", "price": "2.41", "region": "A", "data": "5/30", "status": "" },
  { "name": "Blacksad: Under the Skin", "price": "0.61", "region": "A", "data": "5/30", "status": "" },
  { "name": "Blacksmith Forger", "price": "0.24", "region": "A", "data": "5/24", "status": "" },
  { "name": "Blasphemous", "price": "0.38", "region": "A", "data": "5/30", "status": "" },
  { "name": "Blaze and the Monster Machines: Axle City Racers", "price": "5.79", "region": "A", "data": "5/30", "status": "" },
  { "name": "Blizzard® Arcade Collection", "price": "2.75", "region": "A", "data": "5/30", "status": "" },
  { "name": "Blood Bowl 3 - Brutal Edition", "price": "17.88", "region": "A", "data": "5/25", "status": "" },
  { "name": "Boggle", "price": "0.15", "region": "A", "data": "5/30", "status": "GOLD" },
  { "name": "Bound by Flame", "price": "0.13", "region": "A", "data": "5/30", "status": "" },
  { "name": "Brawl Chess - Gambit", "price": "0.21", "region": "A", "data": "5/30", "status": "GOLD" },
  { "name": "Bundle: South Park™ : The Stick of Truth™ + The Fractured...", "price": "4.00", "region": "T", "data": "5/30", "status": "" },
  { "name": "Call of Cthulhu", "price": "1.40", "region": "T", "data": "5/30", "status": "" },
  { "name": "Call of Duty®: Advanced Warfare Gold Edition", "price": "0.77", "region": "A", "data": "5/30", "status": "" },
  { "name": "Call of Duty®: Black Ops 4", "price": "6.26", "region": "A", "data": "5/30", "status": "" },
  { "name": "Call of Duty®: Black Ops Cold War", "price": "6.26", "region": "A", "data": "5/30", "status": "" },
  { "name": "Call of Duty®: Black Ops III - Zombies Chronicles Edition", "price": "2.53", "region": "A", "data": "5/30", "status": "" },
  { "name": "Call of Duty®: Ghosts", "price": "0.77", "region": "A", "data": "5/30", "status": "" },
  { "name": "Call of Duty®: Infinite Warfare - Digital Deluxe Edition", "price": "7.86", "region": "T", "data": "5/30", "status": "" },
  { "name": "Call of Duty®: Infinite Warfare - Launch Edition", "price": "2.53", "region": "A", "data": "5/30", "status": "" },
  { "name": "Call of Duty®: Modern Warfare® - Digital Standard Edition", "price": "6.26", "region": "A", "data": "5/30", "status": "" },
  { "name": "Call of Duty®: Modern Warfare® II - Cross-Gen Bundle", "price": "19.34", "region": "A", "data": "5/30", "status": "" },
  { "name": "Call of Duty®: Modern Warfare® II - Vault Edition", "price": "30.94", "region": "A", "data": "5/30", "status": "" },
  { "name": "Call of Duty®: Modern Warfare® Remastered", "price": "2.55", "region": "A", "data": "5/30", "status": "" },
  { "name": "Call of Duty®: Vanguard - Standard Edition", "price": "11.49", "region": "A", "data": "5/30", "status": "" },
  { "name": "Cars 3: Driven to Win", "price": "0.96", "region": "A", "data": "5/30", "status": "" },
  { "name": "Carto", "price": "0.48", "region": "A", "data": "5/30", "status": "" },
  { "name": "Cartoon Network: Battle Crashers", "price": "0.21", "region": "A", "data": "5/30", "status": "" },
  { "name": "Castle on the Coast", "price": "0.68", "region": "A", "data": "5/30", "status": "" },
  { "name": "Chained Echoes", "price": "1.30", "region": "A", "data": "5/30", "status": "" },
  { "name": "Chicken Police - Paint it RED!", "price": "0.60", "region": "A", "data": "5/30", "status": "" },
  { "name": "Child of Light", "price": "0.19", "region": "A", "data": "5/30", "status": "GOLD" },
  { "name": "Chinatown Detective Agency", "price": "0.76", "region": "A", "data": "5/30", "status": "" },
  { "name": "Chronos: Before the Ashes", "price": "0.89", "region": "A", "data": "5/30", "status": "" },
  { "name": "Circa Infinity", "price": "0.16", "region": "A", "data": "5/30", "status": "" },
  { "name": "Clone Drone in the Danger Zone", "price": "0.60", "region": "A", "data": "5/30", "status": "GOLD" },
  { "name": "Clouds & Sheep 2", "price": "0.04", "region": "A", "data": "5/30", "status": "" },
  { "name": "Cobra Kai: The Karate Kid Saga Continues", "price": "1.60", "region": "A", "data": "5/30", "status": "" },
  { "name": "Commandos 2 & Praetorians: HD Remaster Double Pack", "price": "0.91", "region": "A", "data": "5/30", "status": "" },
  { "name": "Control Ultimate Edition", "price": "3.01", "region": "T", "data": "5/30", "status": "" },
  { "name": "Cozy Grove", "price": "0.55", "region": "A", "data": "5/30", "status": "GOLD" },
  { "name": "Crash Bandicoot™ - Crashiversary Bundle", "price": "7.76", "region": "A", "data": "5/30", "status": "" },
  { "name": "Crash Bandicoot™ - Quadrilogy Bundle", "price": "5.08", "region": "A", "data": "5/30", "status": "" },
  { "name": "Crash Bandicoot™ Bundle - N. Sane Trilogy + CTR Nitro-Fueled", "price": "3.72", "region": "A", "data": "5/30", "status": "" },
  { "name": "Crash Bandicoot™ N. Sane Trilogy", "price": "2.04", "region": "A", "data": "5/30", "status": "" },
  { "name": "Crash™ + Spyro™ Triple Play Bundle", "price": "8.51", "region": "A", "data": "5/30", "status": "" },
  { "name": "Crash™ Team Racing Nitro-Fueled + Spyro™ Game Bundle", "price": "3.72", "region": "A", "data": "5/30", "status": "" },
  { "name": "Crash™ Team Racing Nitro-Fueled - Nitros Oxide Edition", "price": "4.47", "region": "A", "data": "5/30", "status": "" },
  { "name": "Crazy Sports Bundle", "price": "0.05", "region": "A", "data": "5/30", "status": "" },
  { "name": "CrossCode", "price": "0.42", "region": "A", "data": "5/30", "status": "" },
  { "name": "CrossCode Deluxe Edition", "price": "0.68", "region": "A", "data": "5/30", "status": "" },
  { "name": "Crypt of the Serpent King Remastered 4K Edition", "price": "0.13", "region": "A", "data": "5/30", "status": "" },
  { "name": "Curse of the Dead Gods", "price": "1.64", "region": "A", "data": "5/30", "status": "" },
  { "name": "Curse of the Dead Gods (PC)", "price": "1.70", "region": "A", "data": "5/30", "status": "" },
  { "name": "Cyber Citizen Shockman", "price": "0.29", "region": "A", "data": "6/3/", "status": "" },
  { "name": "CyberHeroes Arena DX", "price": "0.20", "region": "A", "data": "5/30", "status": "" },
  { "name": "DARKLAND 3", "price": "0.06", "region": "A", "data": "5/25", "status": "" },
  { "name": "DRAGON BALL FIGHTERZ - Ultimate Edition", "price": "7.18", "region": "T", "data": "5/30", "status": "" },
  { "name": "DRAGON BALL XENOVERSE 2", "price": "1.15", "region": "A", "data": "5/30", "status": "" },
  { "name": "DRAGON BALL Z: KAKAROT Legendary Edition", "price": "30.19", "region": "T", "data": "5/30", "status": "" },
  { "name": "Darksiders Fury's Collection - War and Death", "price": "0.42", "region": "A", "data": "5/30", "status": "" },
  { "name": "Darksiders Genesis", "price": "0.80", "region": "A", "data": "5/30", "status": "" },
  { "name": "Darksiders III", "price": "1.88", "region": "A", "data": "5/30", "status": "" },
  { "name": "Dead Rising", "price": "0.70", "region": "A", "data": "5/30", "status": "" },
  { "name": "Dead Rising 2", "price": "0.70", "region": "A", "data": "5/30", "status": "" },
  { "name": "Dead Rising 2 Off the Record", "price": "0.92", "region": "A", "data": "5/30", "status": "" },
  { "name": "Dead Rising 3: Apocalypse Edition", "price": "3.12", "region": "T", "data": "5/30", "status": "" },
  { "name": "Dead Rising 4", "price": "1.91", "region": "A", "data": "5/30", "status": "" },
  { "name": "Dead Rising Triple Bundle Pack", "price": "1.12", "region": "A", "data": "5/30", "status": "" },
  { "name": "Decay of Logos", "price": "0.30", "region": "A", "data": "5/30", "status": "" },
  { "name": "Defend the Rook", "price": "3.57", "region": "A", "data": "5/30", "status": "GOLD" },
  { "name": "Defend the Rook - Supporter Edition", "price": "4.76", "region": "A", "data": "5/30", "status": "GOLD" },
  { "name": "Destiny - The Collection", "price": "2.53", "region": "A", "data": "5/30", "status": "" },
  { "name": "Diablo III: Eternal Collection", "price": "3.91", "region": "T", "data": "5/30", "status": "" },
  { "name": "Diablo® Prime Evil Collection", "price": "5.71", "region": "E", "data": "5/30", "status": "" },
  { "name": "Diablo® Prime Evil Upgrade", "price": "4.75", "region": "E", "data": "5/30", "status": "" },
  { "name": "Discovery Tour: Viking Age", "price": "5.62", "region": "A", "data": "6/6/", "status": "" },
  { "name": "Disintegration", "price": "4.51", "region": "T", "data": "5/30", "status": "" },
  { "name": "Dodgeball Academia", "price": "0.76", "region": "A", "data": "5/30", "status": "" },
  { "name": "Dou", "price": "0.06", "region": "A", "data": "5/28", "status": "" },
  { "name": "DreamWorks Spirit Lucky's Big Adventure", "price": "5.96", "region": "A", "data": "5/30", "status": "" },
  { "name": "Dungeons 3", "price": "0.91", "region": "A", "data": "5/30", "status": "" },
  { "name": "Dying Light 2 Stay Human - Deluxe Edition", "price": "12.88", "region": "A", "data": "5/30", "status": "" },
  { "name": "Dying Light: The Following - Enhanced Edition", "price": "2.40", "region": "T", "data": "5/30", "status": "GOLD" },
  { "name": "Dyna Bomb 2", "price": "2.62", "region": "E", "data": "5/30", "status": "GOLD" },
  { "name": "Dynamite Fishing - World Games", "price": "0.04", "region": "A", "data": "5/30", "status": "" },
  { "name": "EA SPORTS™ FIFA 23 Standard Edition Xbox One", "price": "10.22", "region": "A", "data": "5/30", "status": "" },
  { "name": "EA SPORTS™ FIFA 23 Standard Edition Xbox One", "price": "10.22", "region": "A", "data": "12/3", "status": "" },
  { "name": "EA SPORTS™ FIFA 23 Standard Edition Xbox Series X|S", "price": "15.32", "region": "A", "data": "5/30", "status": "" },
  { "name": "El Hijo - A Wild West Tale", "price": "0.48", "region": "A", "data": "5/30", "status": "" },
  { "name": "Elex", "price": "2.50", "region": "A", "data": "5/30", "status": "" },
  { "name": "Endling - Extinction is Forever", "price": "3.07", "region": "A", "data": "5/30", "status": "" },
  { "name": "Escape Dead Island", "price": "0.17", "region": "A", "data": "12/3", "status": "" },
  { "name": "Escape Game - FORT BOYARD 2022", "price": "1.59", "region": "A", "data": "5/30", "status": "" },
  { "name": "Evil West", "price": "13.83", "region": "A", "data": "5/30", "status": "" },
  { "name": "Evil Wizard(Xbox)", "price": "1.09", "region": "A", "data": "5/25", "status": "" },
  { "name": "F1® 23 Champions Edition + Limited Time Bonus", "price": "61.30", "region": "A", "data": "5/31", "status": "" },
  { "name": "FOCUS INDIES BUNDLE - Curse of the Dead Gods + Shady Part of Me + Aeon Must Die!", "price": "6.81", "region": "A", "data": "5/30", "status": "" },
  { "name": "FOR HONOR : MARCHING FIRE EDITION", "price": "2.66", "region": "A", "data": "5/30", "status": "" },
  { "name": "Family Feud®", "price": "6.55", "region": "A", "data": "5/30", "status": "GOLD" },
  { "name": "Fantasy Dash", "price": "0.06", "region": "A", "data": "6/5/", "status": "" },
  { "name": "Far Cry® 3 Blood Dragon Classic Edition", "price": "3.19", "region": "A", "data": "5/30", "status": "" },
  { "name": "Far Cry® 5", "price": "1.47", "region": "A", "data": "5/30", "status": "" },
  { "name": "Far Cry® 6 Game of the Year Edition", "price": "12.77", "region": "A", "data": "5/30", "status": "" },
  { "name": "Far Cry® 6 Gold Edition", "price": "8.51", "region": "A", "data": "5/30", "status": "" },
  { "name": "Far Cry® New Dawn Deluxe Edition", "price": "1.53", "region": "A", "data": "5/30", "status": "" },
  { "name": "Faraday Protocol", "price": "0.46", "region": "A", "data": "5/30", "status": "" },
  { "name": "Fast & Furious: Spy Racers Rise of SH1FT3R", "price": "5.79", "region": "A", "data": "5/30", "status": "" },
  { "name": "Flashback", "price": "0.17", "region": "A", "data": "5/30", "status": "" },
  { "name": "Flynn: Son of Crimson", "price": "0.60", "region": "A", "data": "5/30", "status": "" },
  { "name": "Food Truck Tycoon + Knights & Guns", "price": "0.33", "region": "A", "data": "5/26", "status": "" },
  { "name": "For Honor® Complete Edition", "price": "5.32", "region": "A", "data": "5/30", "status": "" },
  { "name": "Forager", "price": "0.48", "region": "A", "data": "5/30", "status": "" },
  { "name": "Freshly Frosted", "price": "0.45", "region": "A", "data": "5/30", "status": "GOLD" },
  { "name": "G.I. Joe: Operation Blackout", "price": "2.66", "region": "A", "data": "5/30", "status": "" },
  { "name": "G.I. Joe: Operation Blackout - Digital Deluxe", "price": "3.06", "region": "A", "data": "5/30", "status": "" },
  { "name": "GRIP", "price": "0.25", "region": "A", "data": "5/29", "status": "" },
  { "name": "GRIP Digital Deluxe", "price": "0.31", "region": "A", "data": "5/29", "status": "" },
  { "name": "GTA+ (Xbox Series X|S)", "price": "0.63", "region": "C", "data": "5/30", "status": "" },
  { "name": "Galaxy Champions TV", "price": "0.17", "region": "A", "data": "5/30", "status": "" },
  { "name": "Gang Beasts", "price": "0.34", "region": "A", "data": "5/30", "status": "GOLD" },
  { "name": "Garfield Kart Furious Racing", "price": "0.55", "region": "A", "data": "5/30", "status": "" },
  { "name": "Garfield Lasagna Party", "price": "1.59", "region": "A", "data": "5/30", "status": "" },
  { "name": "Genesis Alpha One Deluxe Edition", "price": "0.27", "region": "A", "data": "5/30", "status": "" },
  { "name": "Geometric Sniper - Blood in Paris", "price": "0.15", "region": "A", "data": "5/30", "status": "" },
  { "name": "Ghost Song", "price": "3.57", "region": "A", "data": "5/30", "status": "" },
  { "name": "Giana Sisters: Twisted Dreams - Director's Cut", "price": "0.06", "region": "A", "data": "5/30", "status": "" },
  { "name": "Gigantosaurus The Game", "price": "3.56", "region": "E", "data": "5/30", "status": "" },
  { "name": "Gigapocalypse", "price": "0.24", "region": "A", "data": "5/30", "status": "" },
  { "name": "Gods Will Fall - Valiant Edition", "price": "1.36", "region": "A", "data": "5/30", "status": "" },
  { "name": "Goosebumps: The Game", "price": "0.10", "region": "A", "data": "5/30", "status": "" },
  { "name": "Gotham Knights", "price": "11.24", "region": "A", "data": "5/30", "status": "" },
  { "name": "Grand Theft Auto Online", "price": "4.26", "region": "A", "data": "5/30", "status": "" },
  { "name": "Grand Theft Auto V (Xbox One & Xbox Series X|S)", "price": "9.83", "region": "A", "data": "5/30", "status": "" },
  { "name": "Grand Theft Auto V: Premium Edition & Great White Shark C...", "price": "4.40", "region": "A", "data": "5/30", "status": "" },
  { "name": "Grand Theft Auto V: Premium Edition & Megalodon Shark Car...", "price": "7.61", "region": "T", "data": "5/30", "status": "" },
  { "name": "Grand Theft Auto V: Premium Edition & Whale Shark Card Bu...", "price": "5.11", "region": "A", "data": "5/30", "status": "" },
  { "name": "GreedFall", "price": "3.19", "region": "A", "data": "5/30", "status": "" },
  { "name": "GreedFall - Windows 10", "price": "2.43", "region": "A", "data": "5/30", "status": "" },
  { "name": "Gungrave G.O.R.E", "price": "6.48", "region": "E", "data": "5/30", "status": "" },
  { "name": "Hardspace: Shipbreaker", "price": "11.48", "region": "T", "data": "5/30", "status": "" },
  { "name": "Hasbro Family Fun Pack Conquest Edition", "price": "8.88", "region": "C", "data": "5/30", "status": "GOLD" },
  { "name": "Heidelberg 1693", "price": "0.46", "region": "A", "data": "5/30", "status": "" },
  { "name": "Historical Trilogy", "price": "0.76", "region": "A", "data": "5/30", "status": "GOLD" },
  { "name": "Home Sheep Home: Farmageddon Party Edition", "price": "2.54", "region": "E", "data": "5/26", "status": "" },
  { "name": "Hood: Outlaws & Legends", "price": "1.68", "region": "A", "data": "5/30", "status": "" },
  { "name": "Hotel Transylvania: Scary-Tale Adventures", "price": "5.79", "region": "A", "data": "5/30", "status": "" },
  { "name": "Hunt Ducks 4", "price": "0.06", "region": "A", "data": "6/5/", "status": "" },
  { "name": "Hunt: Showdown - Platinum Edition", "price": "2.57", "region": "T", "data": "5/30", "status": "" },
  { "name": "Hunt: Showdown - Starter Hunter Edition", "price": "2.14", "region": "T", "data": "5/30", "status": "" },
  { "name": "Hunting Simulator 2 Xbox One", "price": "0.73", "region": "A", "data": "5/30", "status": "" },
  { "name": "Hunting Simulator 2 Xbox Series X|S", "price": "0.61", "region": "A", "data": "5/30", "status": "" },
  { "name": "Ice Age Scrat's Nutty Adventure", "price": "4.29", "region": "E", "data": "5/30", "status": "" },
  { "name": "Ikenfell", "price": "0.60", "region": "A", "data": "5/30", "status": "" },
  { "name": "Immortals Fenyx Rising™", "price": "3.06", "region": "A", "data": "5/30", "status": "" },
  { "name": "Injustice™ 2", "price": "0.64", "region": "A", "data": "5/30", "status": "" },
  { "name": "Insurgency: Sandstorm", "price": "8.30", "region": "A", "data": "5/30", "status": "" },
  { "name": "Isonzo", "price": "4.72", "region": "E", "data": "5/30", "status": "" },
  { "name": "Isonzo: Collector's Edition", "price": "2.01", "region": "A", "data": "5/30", "status": "" },
  { "name": "Isonzo: Deluxe Edition", "price": "1.47", "region": "A", "data": "5/30", "status": "" },
  { "name": "Jeopardy!", "price": "0.32", "region": "A", "data": "5/30", "status": "GOLD" },
  { "name": "Johnny Rocket", "price": "0.15", "region": "A", "data": "5/30", "status": "" },
  { "name": "Journey to the Savage Planet", "price": "3.40", "region": "A", "data": "5/30", "status": "" },
  { "name": "Joy Ball Adventure", "price": "0.06", "region": "A", "data": "5/30", "status": "" },
  { "name": "Jurassic World Evolution - Deluxe Bundle", "price": "0.56", "region": "A", "data": "5/30", "status": "" },
  { "name": "Jurassic World Evolution 2: Deluxe Edition", "price": "7.02", "region": "E", "data": "5/30", "status": "" },
  { "name": "Jurassic World Evolution 2: Dominion Bundle", "price": "8.04", "region": "E", "data": "5/30", "status": "" },
  { "name": "Just Dance® 2023 Edition", "price": "10.07", "region": "T", "data": "5/30", "status": "" },
  { "name": "KLONOA Phantasy Reverie Series", "price": "5.11", "region": "A", "data": "5/30", "status": "" },
  { "name": "Kao the Kangaroo A Well Good Bundle", "price": "5.32", "region": "A", "data": "5/30", "status": "GOLD" },
  { "name": "Kargast", "price": "2.30", "region": "E", "data": "5/31", "status": "" },
  { "name": "Kerbal Space Program Enhanced Edition", "price": "2.22", "region": "T", "data": "5/30", "status": "" },
  { "name": "Kid Ball Adventure", "price": "0.21", "region": "A", "data": "5/30", "status": "" },
  { "name": "Kingdom Come: Deliverance", "price": "1.09", "region": "A", "data": "5/30", "status": "" },
  { "name": "Knights & Guns", "price": "0.86", "region": "E", "data": "5/30", "status": "" },
  { "name": "L.A. Noire", "price": "2.98", "region": "A", "data": "5/30", "status": "" },
  { "name": "L.O.L. Surprise! B.B.s BORN TO TRAVEL™", "price": "7.24", "region": "A", "data": "5/30", "status": "" },
  { "name": "LEGO® CITY Undercover", "price": "0.85", "region": "A", "data": "5/30", "status": "" },
  { "name": "LEGO® The Hobbit™", "price": "1.35", "region": "T", "data": "5/30", "status": "" },
  { "name": "LEGO® Worlds", "price": "0.68", "region": "A", "data": "5/30", "status": "" },
  { "name": "Lara Croft and the Temple of Osiris", "price": "0.32", "region": "A", "data": "5/30", "status": "" },
  { "name": "Lichdom: Battlemage", "price": "0.12", "region": "A", "data": "5/30", "status": "" },
  { "name": "Life of Fly", "price": "0.55", "region": "A", "data": "5/30", "status": "GOLD" },
  { "name": "Light & Dark Bundle", "price": "0.95", "region": "A", "data": "11/2", "status": "" },
  { "name": "Little Big Workshop", "price": "0.42", "region": "A", "data": "5/30", "status": "" },
  { "name": "Little Disaster", "price": "0.24", "region": "A", "data": "5/27", "status": "" },
  { "name": "Little Kite", "price": "0.42", "region": "A", "data": "5/30", "status": "" },
  { "name": "Little Mage Adventure", "price": "0.06", "region": "A", "data": "6/7/", "status": "" },
  { "name": "Lost At Sea", "price": "0.27", "region": "A", "data": "5/30", "status": "" },
  { "name": "Lucy Dreaming", "price": "0.93", "region": "A", "data": "5/31", "status": "" },
  { "name": "Lumote: The Mastermote Chronicles", "price": "0.36", "region": "A", "data": "5/29", "status": "" },
  { "name": "MARVEL VS. CAPCOM: INFINITE", "price": "0.65", "region": "A", "data": "5/30", "status": "" },
  { "name": "MONOPOLY FAMILY FUN PACK", "price": "0.19", "region": "A", "data": "5/30", "status": "GOLD" },
  { "name": "MXGP 2020 - The Official Motocross Videogame", "price": "1.28", "region": "A", "data": "5/30", "status": "" },
  { "name": "MXGP3", "price": "0.43", "region": "A", "data": "5/30", "status": "" },
  { "name": "MY HERO ONE'S JUSTICE 2", "price": "2.66", "region": "A", "data": "5/30", "status": "" },
  { "name": "Mad Max", "price": "0.85", "region": "A", "data": "5/30", "status": "" },
  { "name": "Madden NFL 19", "price": "26.13", "region": "C", "data": "12/3", "status": "" },
  { "name": "Madden NFL 22 Xbox One", "price": "16.39", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 22 Xbox Series X|S", "price": "19.07", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 23 Xbox One", "price": "21.79", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 23 Xbox Series X|S", "price": "25.54", "region": "A", "data": "12/3", "status": "" },
  { "name": "Mafia II: Definitive Edition", "price": "2.66", "region": "A", "data": "5/30", "status": "GOLD" },
  { "name": "Mafia III: Definitive Edition", "price": "2.66", "region": "A", "data": "5/30", "status": "GOLD" },
  { "name": "Martha Is Dead Digital Deluxe", "price": "1.47", "region": "A", "data": "5/29", "status": "" },
  { "name": "Marvel vs. Capcom: Infinite - Deluxe Edition", "price": "0.96", "region": "A", "data": "5/30", "status": "" },
  { "name": "Marvel's Midnight Suns", "price": "14.90", "region": "A", "data": "5/26", "status": "" },
  { "name": "Marvel's Midnight Suns Digital+ Edition for Xbox One", "price": "19.16", "region": "A", "data": "5/26", "status": "" },
  { "name": "Marvel's Midnight Suns Legendary Edition for Xbox One", "price": "23.41", "region": "A", "data": "5/26", "status": "" },
  { "name": "Memories of Mars", "price": "0.30", "region": "A", "data": "5/30", "status": "" },
  { "name": "Metro Redux Bundle", "price": "0.25", "region": "A", "data": "5/30", "status": "" },
  { "name": "Mia and the Dragon Princess", "price": "0.72", "region": "A", "data": "5/26", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.00", "region": "U", "data": "12/1", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.00", "region": "U", "data": "12/1", "status": "" },
  { "name": "Middle-earth™: Shadow of War™", "price": "0.89", "region": "A", "data": "5/30", "status": "" },
  { "name": "Midnight Fight Express", "price": "0.85", "region": "A", "data": "5/30", "status": "" },
  { "name": "Monster Energy Supercross - Special Edition", "price": "1.28", "region": "A", "data": "5/30", "status": "" },
  { "name": "Monster Energy Supercross - The Official Videogame", "price": "0.85", "region": "A", "data": "5/30", "status": "" },
  { "name": "Monster Energy Supercross - The Official Videogame 5", "price": "3.40", "region": "A", "data": "5/30", "status": "" },
  { "name": "Monster Energy Supercross 5 - Special Edition", "price": "5.11", "region": "A", "data": "5/30", "status": "" },
  { "name": "Monster Sanctuary", "price": "1.34", "region": "A", "data": "5/30", "status": "" },
  { "name": "Mortal Kombat X", "price": "1.17", "region": "A", "data": "5/30", "status": "" },
  { "name": "MotoGP™18", "price": "0.43", "region": "A", "data": "5/30", "status": "" },
  { "name": "Moving Out", "price": "1.28", "region": "A", "data": "5/30", "status": "" },
  { "name": "Mr. DRILLER DrillLand", "price": "0.67", "region": "T", "data": "5/30", "status": "" },
  { "name": "MudRunner - American Wilds Edition", "price": "1.02", "region": "A", "data": "5/30", "status": "" },
  { "name": "My Time at Portia Deluxe Edition", "price": "1.79", "region": "A", "data": "5/30", "status": "" },
  { "name": "NARUTO SHIPPUDEN™: Ultimate Ninja® STORM 3 Full Burst", "price": "0.53", "region": "A", "data": "5/30", "status": "" },
  { "name": "NARUTO SHIPPUDEN™: Ultimate Ninja® STORM 4 ROAD TO BORUTO", "price": "1.28", "region": "A", "data": "5/30", "status": "" },
  { "name": "NARUTO™: Ultimate Ninja® STORM", "price": "0.53", "region": "A", "data": "5/30", "status": "" },
  { "name": "NBA 2K23 Digital Deluxe Edition", "price": "7.66", "region": "A", "data": "5/30", "status": "" },
  { "name": "NERF Legends", "price": "1.42", "region": "T", "data": "5/30", "status": "" },
  { "name": "NHL® 23 Xbox One", "price": "10.22", "region": "A", "data": "6/13", "status": "" },
  { "name": "NHL® 23 Xbox Series X|S", "price": "11.49", "region": "A", "data": "6/13", "status": "" },
  { "name": "Neon Abyss Deluxe Edition", "price": "0.68", "region": "A", "data": "5/30", "status": "" },
  { "name": "Nerf Legends Digital Deluxe", "price": "1.71", "region": "T", "data": "5/30", "status": "" },
  { "name": "New Tales from the Borderlands: Deluxe Edition", "price": "14.90", "region": "A", "data": "5/30", "status": "" },
  { "name": "Next Space Rebels", "price": "0.60", "region": "A", "data": "5/30", "status": "" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.15", "region": "A", "data": "5/31", "status": "" },
  { "name": "Obliteracers", "price": "0.06", "region": "A", "data": "5/30", "status": "" },
  { "name": "OlliOlli World", "price": "7.66", "region": "A", "data": "5/30", "status": "" },
  { "name": "One Hand Clapping", "price": "1.69", "region": "S", "data": "5/30", "status": "" },
  { "name": "One Step From Eden", "price": "0.48", "region": "A", "data": "5/30", "status": "" },
  { "name": "Othercide", "price": "2.87", "region": "T", "data": "5/30", "status": "" },
  { "name": "Outbreak Ultimate Apocalypse", "price": "0.37", "region": "A", "data": "5/30", "status": "" },
  { "name": "Outbreak: Epidemic Definitive Collection", "price": "0.38", "region": "A", "data": "5/30", "status": "" },
  { "name": "Outward: The Adventurer Bundle", "price": "0.61", "region": "A", "data": "5/30", "status": "" },
  { "name": "Overcooked! 2 - Gourmet Edition", "price": "0.59", "region": "A", "data": "5/30", "status": "" },
  { "name": "Overwatch® 2 - Hero Pack", "price": "5.11", "region": "A", "data": "5/30", "status": "" },
  { "name": "PAC-MAN 256", "price": "0.25", "region": "A", "data": "5/30", "status": "" },
  { "name": "PAC-MAN MUSEUM+", "price": "2.13", "region": "A", "data": "5/30", "status": "" },
  { "name": "PAC-MAN WORLD Re-PAC", "price": "6.60", "region": "A", "data": "5/30", "status": "" },
  { "name": "PAC-MAN™ CHAMPIONSHIP EDITION 2", "price": "0.42", "region": "A", "data": "5/30", "status": "" },
  { "name": "PAW Patrol The Movie: Adventure City Calls", "price": "5.74", "region": "E", "data": "5/30", "status": "" },
  { "name": "PAYDAY 2 - CRIMEWAVE EDITION - THE BIG SCORE Game Bundle", "price": "0.42", "region": "A", "data": "5/30", "status": "" },
  { "name": "Paratopic", "price": "0.17", "region": "A", "data": "5/30", "status": "" },
  { "name": "Pile Up! Box by Box", "price": "0.46", "region": "A", "data": "5/30", "status": "" },
  { "name": "Planet Coaster: Deluxe Edition", "price": "1.79", "region": "A", "data": "5/30", "status": "" },
  { "name": "Prodeus", "price": "4.98", "region": "E", "data": "5/30", "status": "" },
  { "name": "Project Wingman", "price": "0.76", "region": "A", "data": "5/30", "status": "" },
  { "name": "Prototype® Biohazard Bundle", "price": "1.02", "region": "A", "data": "5/30", "status": "" },
  { "name": "Prototype®2", "price": "0.77", "region": "A", "data": "5/30", "status": "" },
  { "name": "RABBIDS INVASION - GOLD EDITION", "price": "0.29", "region": "A", "data": "5/30", "status": "GOLD" },
  { "name": "RIDE", "price": "0.20", "region": "A", "data": "5/30", "status": "" },
  { "name": "RISK", "price": "0.16", "region": "A", "data": "5/30", "status": "GOLD" },
  { "name": "Railbound", "price": "7.18", "region": "I", "data": "5/24", "status": "" },
  { "name": "Railway Empire 2", "price": "2.74", "region": "A", "data": "5/25", "status": "" },
  { "name": "Railway Empire 2 - Digital Deluxe Edition", "price": "3.29", "region": "A", "data": "5/25", "status": "" },
  { "name": "Ratyboy Adventures", "price": "0.24", "region": "A", "data": "5/30", "status": "" },
  { "name": "Ravensword: Shadowlands - Xbox One Edition", "price": "0.21", "region": "A", "data": "5/30", "status": "" },
  { "name": "Rayland", "price": "0.21", "region": "A", "data": "5/30", "status": "" },
  { "name": "Razerwire: Nanowars", "price": "0.17", "region": "A", "data": "5/30", "status": "" },
  { "name": "Rebel Cops", "price": "0.14", "region": "A", "data": "5/30", "status": "" },
  { "name": "Red Dead Redemption 2: Ultimate Edition", "price": "8.64", "region": "E", "data": "5/30", "status": "" },
  { "name": "Retro Tank Arcade", "price": "0.06", "region": "A", "data": "6/2/", "status": "" },
  { "name": "Riders Republic Ultimate Edition", "price": "10.64", "region": "A", "data": "5/30", "status": "" },
  { "name": "Riders Republic™", "price": "5.32", "region": "A", "data": "5/30", "status": "" },
  { "name": "Riders Republic™ Gold Edition", "price": "8.51", "region": "A", "data": "5/30", "status": "" },
  { "name": "Rise of the Tomb Raider: 20 Year Celebration", "price": "1.36", "region": "T", "data": "5/30", "status": "" },
  { "name": "Risk: Urban Assault", "price": "0.25", "region": "A", "data": "5/30", "status": "GOLD" },
  { "name": "Rock of Ages 2: Bigger & Boulder™", "price": "0.13", "region": "A", "data": "5/30", "status": "" },
  { "name": "Rogue Lords", "price": "0.73", "region": "A", "data": "5/30", "status": "" },
  { "name": "Rogue Stormers & Giana Sisters Bundle", "price": "0.11", "region": "A", "data": "5/30", "status": "" },
  { "name": "Roguebook Xbox One", "price": "0.76", "region": "A", "data": "5/30", "status": "" },
  { "name": "Roguebook Xbox Series X|S", "price": "0.91", "region": "A", "data": "5/30", "status": "" },
  { "name": "Roman Rumble in Las Vegum - Asterix & Obelix XXL 2", "price": "0.42", "region": "A", "data": "5/30", "status": "" },
  { "name": "Roommates Visual Novel", "price": "0.60", "region": "A", "data": "5/30", "status": "GOLD" },
  { "name": "Ruinverse", "price": "0.46", "region": "A", "data": "5/30", "status": "GOLD" },
  { "name": "Ryan's Rescue Squad", "price": "5.79", "region": "A", "data": "5/30", "status": "" },
  { "name": "SCARLET NEXUS Deluxe Edition", "price": "4.26", "region": "A", "data": "5/30", "status": "" },
  { "name": "SIGNALIS", "price": "2.50", "region": "T", "data": "5/30", "status": "" },
  { "name": "SONIC FORCES™ Digital Standard Edition", "price": "2.45", "region": "A", "data": "5/30", "status": "" },
  { "name": "SOULCALIBUR VI Deluxe Edition", "price": "3.63", "region": "T", "data": "5/30", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "5.45", "region": "A", "data": "12/3", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "7.28", "region": "A", "data": "1/1/", "status": "" },
  { "name": "Sacred 3", "price": "0.21", "region": "A", "data": "5/30", "status": "GOLD" },
  { "name": "Saints Row IV: Re-Elected & Gat out of Hell", "price": "0.19", "region": "A", "data": "5/30", "status": "" },
  { "name": "Session: Skate Sim", "price": "1.52", "region": "A", "data": "5/30", "status": "" },
  { "name": "Shadow of the Tomb Raider Definitive Edition", "price": "3.93", "region": "T", "data": "5/30", "status": "" },
  { "name": "Sherlock Holmes Chapter One", "price": "4.53", "region": "E", "data": "5/30", "status": "" },
  { "name": "Sherlock Holmes: Crimes and Punishments + Sherlock Holmes...", "price": "3.72", "region": "E", "data": "5/30", "status": "" },
  { "name": "Sherlock Holmes: The Devil's Daughter Redux", "price": "2.30", "region": "E", "data": "5/30", "status": "" },
  { "name": "Shoulders of Giants", "price": "2.33", "region": "E", "data": "5/30", "status": "" },
  { "name": "SiNKR", "price": "0.15", "region": "A", "data": "5/30", "status": "" },
  { "name": "SiNKR 2", "price": "0.15", "region": "A", "data": "5/30", "status": "" },
  { "name": "Sid Meier’s Civilization® VI Anthology", "price": "10.43", "region": "A", "data": "5/30", "status": "GOLD" },
  { "name": "Sid Meier’s Civilization® VI Platinum Edition", "price": "6.38", "region": "A", "data": "5/30", "status": "GOLD" },
  { "name": "Skydrift Infinity", "price": "0.59", "region": "A", "data": "5/30", "status": "" },
  { "name": "Smart Moves", "price": "0.18", "region": "A", "data": "5/30", "status": "" },
  { "name": "SnowRunner", "price": "5.32", "region": "A", "data": "5/30", "status": "" },
  { "name": "Soccer Cup 2022", "price": "0.68", "region": "T", "data": "5/30", "status": "" },
  { "name": "SolSeraph", "price": "0.32", "region": "A", "data": "5/30", "status": "" },
  { "name": "SongPop Party", "price": "0.58", "region": "E", "data": "6/11", "status": "" },
  { "name": "Sonic Colors: Ultimate - Digital Deluxe", "price": "4.89", "region": "A", "data": "5/30", "status": "" },
  { "name": "Sonic Mania", "price": "1.23", "region": "T", "data": "5/30", "status": "" },
  { "name": "South Park™: The Fractured but Whole™", "price": "2.66", "region": "A", "data": "5/30", "status": "" },
  { "name": "South Park™: The Fractured but Whole™ - Gold Edition", "price": "3.56", "region": "T", "data": "5/30", "status": "" },
  { "name": "South Park™: The Stick of Truth ™", "price": "0.48", "region": "A", "data": "5/30", "status": "" },
  { "name": "Sparkle Bundle", "price": "0.54", "region": "A", "data": "12/3", "status": "" },
  { "name": "Spitlings", "price": "0.18", "region": "A", "data": "5/30", "status": "" },
  { "name": "Spyro™ + Crash Remastered Game Bundle", "price": "10.23", "region": "T", "data": "5/30", "status": "" },
  { "name": "Spyro™ Reignited Trilogy", "price": "1.79", "region": "A", "data": "5/30", "status": "" },
  { "name": "Steelrising - Standard Edition", "price": "8.30", "region": "A", "data": "5/30", "status": "" },
  { "name": "Stellar Interface", "price": "0.06", "region": "A", "data": "6/1/", "status": "" },
  { "name": "Strategic Mind: Spectre of Communism", "price": "6.70", "region": "A", "data": "5/30", "status": "GOLD" },
  { "name": "Street Outlaws 2: Winner Takes All", "price": "1.42", "region": "T", "data": "5/30", "status": "" },
  { "name": "Street Outlaws: The List", "price": "0.24", "region": "A", "data": "5/30", "status": "" },
  { "name": "Struggling", "price": "1.87", "region": "T", "data": "5/30", "status": "" },
  { "name": "Stunt Kite Party", "price": "0.06", "region": "A", "data": "5/30", "status": "" },
  { "name": "Sudden Strike 4 - Complete Collection", "price": "1.22", "region": "A", "data": "5/30", "status": "" },
  { "name": "Sudocats", "price": "0.15", "region": "A", "data": "5/24", "status": "" },
  { "name": "Super Dungeon Bros", "price": "0.08", "region": "A", "data": "5/29", "status": "" },
  { "name": "Super Dungeon Bros MEGA Bundle Pack", "price": "0.10", "region": "A", "data": "5/29", "status": "" },
  { "name": "Super Party Sports: Football", "price": "0.04", "region": "A", "data": "5/30", "status": "" },
  { "name": "Super Pixel Kid", "price": "0.06", "region": "A", "data": "5/25", "status": "" },
  { "name": "Superliminal", "price": "2.91", "region": "E", "data": "5/30", "status": "GOLD" },
  { "name": "Supraland", "price": "0.73", "region": "A", "data": "5/30", "status": "" },
  { "name": "Syberia - The World Before", "price": "2.13", "region": "A", "data": "5/30", "status": "" },
  { "name": "TEKKEN 7 - Definitive Edition", "price": "3.45", "region": "A", "data": "5/30", "status": "" },
  { "name": "Tales from the Borderlands", "price": "5.20", "region": "A", "data": "5/30", "status": "GOLD" },
  { "name": "Tales of Arise Deluxe Edition", "price": "6.63", "region": "T", "data": "5/30", "status": "" },
  { "name": "Tannenberg", "price": "0.24", "region": "A", "data": "5/30", "status": "" },
  { "name": "Techno Tanks", "price": "0.26", "region": "A", "data": "5/30", "status": "" },
  { "name": "Tennis World Tour 2 Ace Edition", "price": "3.83", "region": "A", "data": "5/30", "status": "" },
  { "name": "The Addams Family: Mansion Mayhem", "price": "5.79", "region": "A", "data": "5/30", "status": "" },
  { "name": "The Big Con", "price": "0.32", "region": "A", "data": "5/30", "status": "" },
  { "name": "The Book of Unwritten Tales 2", "price": "0.44", "region": "A", "data": "5/30", "status": "" },
  { "name": "The Callisto Protocol™ for Xbox One – Digital Deluxe Edition", "price": "12.77", "region": "A", "data": "5/30", "status": "GOLD" },
  { "name": "The Callisto Protocol™ for Xbox Series X|S – Digital Delu...", "price": "16.60", "region": "A", "data": "5/30", "status": "GOLD" },
  { "name": "The Council - Complete Season", "price": "0.87", "region": "A", "data": "5/30", "status": "" },
  { "name": "The Crew® 2", "price": "2.13", "region": "A", "data": "5/30", "status": "" },
  { "name": "The Crew® 2 Special Edition", "price": "2.55", "region": "A", "data": "5/30", "status": "" },
  { "name": "The Diabolical Trilogy", "price": "0.36", "region": "A", "data": "5/30", "status": "GOLD" },
  { "name": "The Division 2 - Warlords of New York Edition", "price": "1.92", "region": "A", "data": "5/30", "status": "" },
  { "name": "The Dwarves", "price": "0.42", "region": "A", "data": "5/30", "status": "" },
  { "name": "The Escapists", "price": "0.13", "region": "A", "data": "5/30", "status": "" },
  { "name": "The Escapists: Supermax Edition", "price": "1.07", "region": "A", "data": "4/30", "status": "" },
  { "name": "The Falconeer", "price": "0.36", "region": "A", "data": "5/29", "status": "" },
  { "name": "The Great Perhaps", "price": "0.18", "region": "A", "data": "5/30", "status": "" },
  { "name": "The Jackbox Party Quadpack", "price": "2.39", "region": "A", "data": "12/3", "status": "" },
  { "name": "The LEGO Movie Videogame", "price": "0.48", "region": "A", "data": "5/30", "status": "" },
  { "name": "The LEGO® NINJAGO® Movie Video Game", "price": "0.96", "region": "A", "data": "5/30", "status": "" },
  { "name": "The Last Rolling Hero", "price": "0.11", "region": "A", "data": "5/30", "status": "" },
  { "name": "The Last Worker", "price": "0.97", "region": "A", "data": "5/29", "status": "" },
  { "name": "The Outer Worlds", "price": "5.75", "region": "E", "data": "5/30", "status": "" },
  { "name": "The Outer Worlds", "price": "13.16", "region": "T", "data": "5/30", "status": "" },
  { "name": "The Outer Worlds: Spacer's Choice Edition", "price": "25.99", "region": "T", "data": "5/30", "status": "" },
  { "name": "The Prince of Landis", "price": "0.24", "region": "A", "data": "5/30", "status": "" },
  { "name": "The Sinking City – Necronomicon Edition", "price": "5.53", "region": "A", "data": "5/30", "status": "" },
  { "name": "The Surge 1 & 2 - Dual Pack (Xbox)", "price": "3.19", "region": "A", "data": "5/30", "status": "" },
  { "name": "The Survivalists - Deluxe Edition", "price": "1.17", "region": "A", "data": "5/30", "status": "" },
  { "name": "The Walking Dead: The Final Season - The Complete Season", "price": "0.34", "region": "A", "data": "5/30", "status": "" },
  { "name": "The Wild at Heart", "price": "0.92", "region": "A", "data": "5/30", "status": "" },
  { "name": "The Yakuza Remastered Collection", "price": "2.17", "region": "A", "data": "5/30", "status": "" },
  { "name": "Through the Darkest of Times", "price": "0.30", "region": "A", "data": "5/30", "status": "" },
  { "name": "Tiny Troopers Joint Ops", "price": "0.06", "region": "A", "data": "5/29", "status": "" },
  { "name": "Tiny Troopers: Global Ops", "price": "0.91", "region": "A", "data": "5/29", "status": "" },
  { "name": "Tiny Troopers: Global Ops Digital Deluxe", "price": "1.15", "region": "A", "data": "5/29", "status": "" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Deluxe Edition", "price": "3.06", "region": "A", "data": "5/30", "status": "" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Ultimate Edition", "price": "4.68", "region": "A", "data": "5/30", "status": "" },
  { "name": "Tom Clancy's Rainbow Six® Siege Operator Edition", "price": "17.24", "region": "A", "data": "5/30", "status": "" },
  { "name": "Tom Clancy's The Division® 2", "price": "0.96", "region": "A", "data": "5/30", "status": "" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands - Standard Edition", "price": "1.96", "region": "A", "data": "5/30", "status": "" },
  { "name": "Tom Clancy’s Rainbow Six® Extraction", "price": "4.98", "region": "A", "data": "5/30", "status": "" },
  { "name": "Tomb Raider: Definitive Edition", "price": "1.07", "region": "T", "data": "5/30", "status": "" },
  { "name": "Tony Hawk's™ Pro Skater™ 1 + 2", "price": "3.61", "region": "A", "data": "5/30", "status": "" },
  { "name": "Townsmen - A Kingdom Rebuilt", "price": "0.37", "region": "A", "data": "5/30", "status": "" },
  { "name": "Trash Quest", "price": "0.11", "region": "A", "data": "5/30", "status": "" },
  { "name": "ULTIMATE MARVEL VS. CAPCOM 3", "price": "0.76", "region": "A", "data": "5/30", "status": "" },
  { "name": "UNSIGHTED", "price": "0.73", "region": "A", "data": "5/30", "status": "" },
  { "name": "Under the Warehouse", "price": "3.13", "region": "I", "data": "6/1/", "status": "" },
  { "name": "Underworld Ascendant", "price": "0.46", "region": "A", "data": "5/30", "status": "" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "0.58", "region": "A", "data": "12/3", "status": "" },
  { "name": "Unpacking", "price": "0.73", "region": "A", "data": "5/30", "status": "" },
  { "name": "VAMPYR", "price": "1.36", "region": "A", "data": "5/30", "status": "" },
  { "name": "Valentino Rossi The Game", "price": "0.32", "region": "A", "data": "5/30", "status": "" },
  { "name": "Vampire: The Masquerade - Swansong Xbox One", "price": "9.36", "region": "A", "data": "5/30", "status": "" },
  { "name": "Vampire: The Masquerade - Swansong Xbox Series X|S", "price": "9.36", "region": "A", "data": "5/30", "status": "" },
  { "name": "Vampyr", "price": "1.23", "region": "A", "data": "5/30", "status": "" },
  { "name": "Verdun", "price": "0.17", "region": "A", "data": "5/30", "status": "" },
  { "name": "Vermintide - Digital Value Pack", "price": "1.70", "region": "A", "data": "3/7/", "status": "" },
  { "name": "Void Bastards: DeLUXe Bundle", "price": "2.57", "region": "E", "data": "5/30", "status": "" },
  { "name": "WARTILE", "price": "0.30", "region": "A", "data": "5/30", "status": "" },
  { "name": "WARTILE Complete Edition", "price": "0.41", "region": "A", "data": "5/30", "status": "" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "2.71", "region": "A", "data": "8/31", "status": "" },
  { "name": "WRC Generations - The FIA WRC Official Game", "price": "8.51", "region": "A", "data": "5/30", "status": "" },
  { "name": "WW2: Bunker Simulator", "price": "0.80", "region": "A", "data": "5/30", "status": "" },
  { "name": "WWE 2K23 Deluxe Edition", "price": "35.12", "region": "A", "data": "5/30", "status": "GOLD" },
  { "name": "Wandersong", "price": "0.30", "region": "A", "data": "5/30", "status": "" },
  { "name": "Warhammer 40,000: Boltgun", "price": "17.24", "region": "A", "data": "5/25", "status": "" },
  { "name": "Warhammer 40,000: Inquisitor - Martyr Ultimate Edition", "price": "1.22", "region": "A", "data": "5/25", "status": "" },
  { "name": "Watch Dogs®: Legion", "price": "2.30", "region": "A", "data": "5/30", "status": "" },
  { "name": "Watch Dogs®: Legion Gold Edition", "price": "4.68", "region": "A", "data": "5/30", "status": "" },
  { "name": "Wildfire", "price": "0.36", "region": "A", "data": "5/30", "status": "" },
  { "name": "Within the Blade", "price": "0.33", "region": "A", "data": "5/30", "status": "GOLD" },
  { "name": "Worms Battlegrounds + Worms W.M.D", "price": "0.42", "region": "A", "data": "5/30", "status": "" },
  { "name": "Worms W.M.D", "price": "1.28", "region": "A", "data": "5/30", "status": "" },
  { "name": "XCOM® 2", "price": "0.38", "region": "A", "data": "5/30", "status": "" },
  { "name": "XCOM® 2 Digital Deluxe Edition", "price": "0.84", "region": "A", "data": "5/30", "status": "" },
  { "name": "XCOM®: Enemy Within", "price": "0.34", "region": "A", "data": "5/30", "status": "GOLD" },
  { "name": "Yakuza 0", "price": "0.91", "region": "T", "data": "5/30", "status": "" },
  { "name": "Yakuza 3 Remastered", "price": "1.64", "region": "A", "data": "5/30", "status": "" },
  { "name": "Yakuza 4 Remastered", "price": "1.64", "region": "A", "data": "5/30", "status": "" },
  { "name": "Yakuza 5 Remastered", "price": "1.64", "region": "A", "data": "5/30", "status": "" },
  { "name": "Yakuza 6: The Song of Life", "price": "0.91", "region": "T", "data": "5/30", "status": "" },
  { "name": "Yakuza Kiwami", "price": "0.91", "region": "T", "data": "5/30", "status": "" },
  { "name": "Yakuza Kiwami 2", "price": "1.40", "region": "A", "data": "5/30", "status": "" },
  { "name": "Yum Yum Cookstar", "price": "0.61", "region": "A", "data": "5/30", "status": "" },
  { "name": "Zombieland: Double Tap- Road Trip", "price": "0.24", "region": "A", "data": "5/30", "status": "" },
  { "name": "[PROTOTYPE®]", "price": "0.63", "region": "A", "data": "5/30", "status": "" },
  { "name": "パックマン ミュージアム プラス & パックマンワールド リ・パック バンドル", "price": "21.05", "region": "J", "data": "5/30", "status": "" }
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
