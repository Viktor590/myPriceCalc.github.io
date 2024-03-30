const arg_input = document.querySelector('.arg-input');
const arg_output = document.querySelector('.arg-output_res');
const arg_output2 = document.querySelector('.arg-output_res2');
const list = document.querySelector('.list')

const tr_input = document.querySelector('.tr-input');
const tr_output = document.querySelector('.tr-output_res');
const tr_output2 = document.querySelector('.tr-output_res2');

const showBtn = document.querySelector('.show')

console.log(tr_input.value);

showBtn.addEventListener('click', () => {
  showBtn.classList.contains('active') ?
    hiddenMenu() : showMenu()
})


let percent;

const arr = [
  { "name": "#SinucaAttack", "price": "0.09", "flag": "🇦🇷", "date": "", "status": "" },
  { "name": "11-11 Memories Retold", "price": "0.62", "flag": "🇹🇷", "date": "05.04", "status": "" },
  { "name": "2 Synchro Hedgehogs (for Windows 10)", "price": "0.05", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "41 Hours", "price": "3.62", "flag": "🇦🇷", "date": "", "status": "" },
  { "name": "7Days Heroes", "price": "0.14", "flag": "🇦🇷", "date": "13.04", "status": "" },
  { "name": "8Floor Strategic Collection", "price": "0.18", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "9 Monkeys of Shaolin", "price": "0.52", "flag": "🇹🇷", "date": "05.04", "status": " GP" },
  { "name": "A Castle Full of Cats", "price": "0.05", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "A Plague Tale: Innocence", "price": "2.03", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "A Plague Tale: Requiem", "price": "12.01", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "A Way Out", "price": "0.12", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "ACE COMBAT™ 7: SKIES UNKNOWN - TOP GUN: Maverick Edition", "price": "2.32", "flag": "🇹🇷", "date": "04.04", "status": "" },
  { "name": "ACE COMBAT™ 7: SKIES UNKNOWN", "price": "1.4", "flag": "🇹🇷", "date": "04.04", "status": "" },
  { "name": "AEW: Fight Forever Bring the Boom Edition", "price": "18.75", "flag": "🇦🇷", "date": "", "status": "" },
  { "name": "AEW: Fight Forever", "price": "25.37", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "ARCADE GAME SERIES 3-in-1 Pack", "price": "0.37", "flag": "🇹🇷", "date": "05.04", "status": "" },
  { "name": "ARCADE GAME SERIES: DIG DUG", "price": "0.18", "flag": "🇹🇷", "date": "05.04", "status": "" },
  { "name": "ARCADE GAME SERIES: GALAGA", "price": "0.18", "flag": "🇹🇷", "date": "05.04", "status": "" },
  { "name": "ARCADE GAME SERIES: Ms. PAC-MAN", "price": "0.18", "flag": "🇹🇷", "date": "05.04", "status": "" },
  { "name": "ARCADE GAME SERIES: PAC-MAN", "price": "0.18", "flag": "🇹🇷", "date": "05.04", "status": "" },
  { "name": "ASTRONEER: Evolution Edition", "price": "0.57", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Aborigenus", "price": "0.02", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Aery - Path of Corruption", "price": "0.11", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Aery Series Bundle", "price": "0.43", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Age of Empires 25th Anniversary Collection", "price": "1.72", "flag": "🇦🇷", "date": "30.12", "status": " GP" },
  { "name": "Age of Empires: Definitive Collection", "price": "0.7", "flag": "🇦🇷", "date": "05.10", "status": " GP" },
  { "name": "Age of Wonders 4", "price": "0.62", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Agents of Mayhem", "price": "0.02", "flag": "🇦🇷", "date": "05.04", "status": " GP" },
  { "name": "Ailment & Endurance Bundle", "price": "0.16", "flag": "🇦🇷", "date": "02.04", "status": " GP" },
  { "name": "Air Guitar Warrior for Kinect", "price": "0.04", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Airborne Bundle", "price": "0.57", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Aliens: Dark Descent", "price": "13.02", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Aliens: Fireteam Elite", "price": "1.49", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Anthem™", "price": "0.3", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Arcade Paradise | High Score Edition", "price": "0.4", "flag": "🇦🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Bundle: Assassin's Creed® Valhalla, Ass...", "price": "39.68", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey - DELUXE EDITION", "price": "4.34", "flag": "🇹🇷", "date": "02.04", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey - GOLD EDITION", "price": "4.96", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey - ULTIMATE EDITION", "price": "22.94", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Assassin's Creed® Origins - DELUXE EDITION", "price": "16.74", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Assassin's Creed® Origins - GOLD EDITION", "price": "4.96", "flag": "🇹🇷", "date": "02.04", "status": " GP" },
  { "name": "Assassin's Creed® Origins", "price": "2.79", "flag": "🇹🇷", "date": "02.04", "status": " GP" },
  { "name": "Assassin's Creed® Syndicate", "price": "0.58", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Complete Edition", "price": "24.8", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Deluxe Edition", "price": "6.01", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Ragnarök Edition", "price": "4.65", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Assassin’s Creed Mirage Master Assassin Edition", "price": "29.76", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Assassin’s Creed® Mirage Deluxe Edition", "price": "18.6", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Assassin’s Creed® Mirage", "price": "16.74", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Assassin’s Creed® Rogue Remastered", "price": "0.31", "flag": "🇦🇷", "date": "01.04", "status": " GP" },
  { "name": "Assassin’s Creed® Valhalla + Immortals Fenyx Rising™ Bundle", "price": "24.8", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assetto Corsa", "price": "0.07", "flag": "🇦🇷", "date": "05.04", "status": " GP" },
  { "name": "Atlas Fallen", "price": "21.39", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Atomic Heart - Gold Edition", "price": "15.0", "flag": "🇦🇷", "date": "16.08", "status": " GP" },
  { "name": "Atomic Heart - Premium Edition", "price": "17.0", "flag": "🇦🇷", "date": "08.04", "status": " GP" },
  { "name": "Atomic Heart", "price": "21.39", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Attack on Titan 2: Final Battle", "price": "20.13", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Aven Colony", "price": "0.37", "flag": "🇦🇷", "date": "04.04", "status": "" },
  { "name": "Awarded Platformer Bundle", "price": "0.21", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "BATTLETECH Mercenary Collection", "price": "1.29", "flag": "🇦🇷", "date": "13.06", "status": " GP" },
  { "name": "BLACKTAIL", "price": "3.72", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Back 4 Blood: Deluxe Edition", "price": "8.2", "flag": "🇦🇷", "date": "01.04", "status": " GP" },
  { "name": "Banishers: Ghosts of New Eden", "price": "21.0", "flag": "🇦🇷", "date": "02.04", "status": " GP" },
  { "name": "Batman: Arkham Knight Premium Edition", "price": "0.33", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Battlefield V Definitive Edition", "price": "0.66", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Battlefield™ 1 Revolution", "price": "0.21", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Battlefield™ 2042 Elite Edition Xbox One & Xbox Series X|S", "price": "5.5", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Battlefield™ 2042 Xbox One & Xbox Series X|S", "price": "1.2", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Battlefield™ 2042 Xbox One", "price": "1.2", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Battlefield™ Hardline Ultimate Edition", "price": "0.21", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Beacon Pines", "price": "0.18", "flag": "🇦🇷", "date": "02.04", "status": " GP" },
  { "name": "Before We Leave", "price": "0.62", "flag": "🇦🇷", "date": "04.04", "status": "" },
  { "name": "Ben 10 Bundle", "price": "2.81", "flag": "🇦🇷", "date": "05.04", "status": " GP" },
  { "name": "Big Moonstone Pack -- 5,500", "price": "3.6", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Black Desert: Conqueror Edition", "price": "2.1", "flag": "🇦🇷", "date": "19.04", "status": "" },
  { "name": "Black Desert: Conqueror Edition", "price": "9.29", "flag": "🇹🇷", "date": "19.04", "status": "" },
  { "name": "Black Desert: Explorer Edition", "price": "1.05", "flag": "🇦🇷", "date": "19.04", "status": "" },
  { "name": "Black Desert: Explorer Edition", "price": "4.64", "flag": "🇹🇷", "date": "19.04", "status": "" },
  { "name": "Black Desert: Traveler Edition", "price": "0.42", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Black Desert: Traveler Edition", "price": "1.85", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Blasphemous 2", "price": "10.36", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Boom Ball 1+2+3 Bundle", "price": "0.06", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Bright Lights of Svetlov (Xbox Series X|S)", "price": "0.09", "flag": "🇦🇷", "date": "02.04", "status": " GP" },
  { "name": "Bright Lights of Svetlov", "price": "0.09", "flag": "🇦🇷", "date": "02.04", "status": " GP" },
  { "name": "Broken Roads", "price": "3.17", "flag": "🇹🇷", "date": "10.04", "status": "" },
  { "name": "Broken Universe + Brawl Chess", "price": "0.11", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Broken Universe - Tower Defense + Clumsy Rush", "price": "0.11", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Broken Universe - Tower Defense + Cyber Protocol", "price": "0.11", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Builder Flipper bundle", "price": "0.61", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "CODE VEIN", "price": "1.39", "flag": "🇹🇷", "date": "04.04", "status": "" },
  { "name": "Cafeteria Nipponica", "price": "0.19", "flag": "🇦🇷", "date": "04.04", "status": "" },
  { "name": "Call of the Wild: The Angler™ - Deluxe Edition", "price": "0.64", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Call of the Wild: The Angler™", "price": "0.38", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Cassette Beasts: Deluxe Edition", "price": "0.37", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Caterpillar (Windows 10)", "price": "0.05", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Chants of Sennaar", "price": "11.62", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Chivalry 2 King's Edition", "price": "0.86", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "Chivalry 2 Special Edition", "price": "0.71", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "Cities: Skylines - Mayor's Edition", "price": "0.75", "flag": "🇦🇷", "date": "01.04", "status": " GP" },
  { "name": "Cities: Skylines - Premium Edition 2", "price": "1.0", "flag": "🇦🇷", "date": "01.04", "status": " GP" },
  { "name": "Climber: Sky is the Limit", "price": "0.18", "flag": "🇦🇷", "date": "02.04", "status": " GP" },
  { "name": "Conan Exiles - Complete Edition October 2021", "price": "2.3", "flag": "🇦🇷", "date": "16.08", "status": " GP" },
  { "name": "Conan Exiles - Isle of Siptah Edition", "price": "0.99", "flag": "🇦🇷", "date": "16.08", "status": " GP" },
  { "name": "Conga Master", "price": "0.01", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Creepy Tale: Ingrid Penance", "price": "0.12", "flag": "🇦🇷", "date": "02.04", "status": " GP" },
  { "name": "Crime Boss: Rockay City", "price": "3.38", "flag": "🇦🇷", "date": "05.04", "status": " GP" },
  { "name": "Crusader Kings III: Royal Edition", "price": "1.01", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "CrushBorgs (for Windows 10)", "price": "0.05", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Curious Expedition", "price": "0.05", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "DARKGEMS (Windows)", "price": "0.07", "flag": "🇦🇷", "date": "06.04", "status": "" },
  { "name": "DARKGEMS (Xbox Series)", "price": "0.07", "flag": "🇦🇷", "date": "06.04", "status": "" },
  { "name": "DARKGEMS", "price": "0.07", "flag": "🇦🇷", "date": "06.04", "status": "" },
  { "name": "DAS WIRED-HORROR-SPIELPAKET", "price": "0.57", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "DC League of Super-Pets: The Adventures of Krypto and Ace", "price": "1.06", "flag": "🇦🇷", "date": "05.04", "status": " GP" },
  { "name": "DEAD ISLAND 2 DELUXE EDITION", "price": "18.58", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "DEAD ISLAND 2 GOLD EDITION", "price": "22.3", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "DEATHLOOP Deluxe Edition", "price": "16.12", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "DIRT 5 Year One Edition", "price": "0.32", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "DOOM Eternal Deluxe Edition", "price": "4.65", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "DOOM Eternal: The Ancient Gods - Part One", "price": "5.27", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "DOOM Eternal: The Ancient Gods - Part Two", "price": "5.27", "flag": "🇹🇷", "date": "17.03", "status": " GP" },
  { "name": "DOOM Eternal: Year One Pass (PC)", "price": "7.95", "flag": "🇹🇷", "date": "03.12", "status": " GP" },
  { "name": "DOOM Eternal: Year One Pass", "price": "7.95", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "DOOM Slayers Collection", "price": "3.35", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "DRAGON BALL FIGHTERZ", "price": "1.15", "flag": "🇹🇷", "date": "05.04", "status": "" },
  { "name": "DRAGON BALL THE BREAKERS", "price": "0.79", "flag": "🇹🇷", "date": "04.04", "status": "" },
  { "name": "DRAGON BALL XENOVERSE 2 - Special Edition", "price": "13.93", "flag": "🇹🇷", "date": "05.04", "status": "" },
  { "name": "DRAGON BALL XENOVERSE 2", "price": "1.38", "flag": "🇹🇷", "date": "04.04", "status": "" },
  { "name": "DRAGON BALL Z: KAKAROT Legendary Edition", "price": "16.73", "flag": "🇹🇷", "date": "05.04", "status": "" },
  { "name": "DRAGON BALL Z: KAKAROT", "price": "8.13", "flag": "🇹🇷", "date": "04.04", "status": "" },
  { "name": "DREDGE - Digital Deluxe Edition", "price": "4.67", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "DUCATI - 90th Anniversary", "price": "0.12", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Darkest Dungeon®: Ancestral Edition", "price": "0.4", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Dead Cells: Medley of Pain Bundle", "price": "0.57", "flag": "🇦🇷", "date": "16.09", "status": " GP" },
  { "name": "Dead Cells: Return to Castlevania Bundle", "price": "0.45", "flag": "🇦🇷", "date": "16.09", "status": " GP" },
  { "name": "Dead Dungeon for Windows 10", "price": "0.02", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Dead Island 2", "price": "11.92", "flag": "🇹🇷", "date": "05.04", "status": " GP" },
  { "name": "Dead Island: Riptide Definitive Edition", "price": "0.04", "flag": "🇦🇷", "date": "05.04", "status": " GP" },
  { "name": "Dead Space Digital Deluxe Edition", "price": "19.84", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Dead Space", "price": "17.36", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Deep Rock Galactic - Deluxe Edition", "price": "0.57", "flag": "🇦🇷", "date": "01.11", "status": " GP" },
  { "name": "Deep Rock Galactic - Ultimate Edition", "price": "0.71", "flag": "🇦🇷", "date": "01.11", "status": " GP" },
  { "name": "Desperados III Deluxe Edition", "price": "10.87", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Dex", "price": "0.05", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Diablo® IV - Digital Deluxe Edition", "price": "45.36", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Diablo® IV - Standard Edition", "price": "35.19", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Diablo® IV - Ultimate Edition", "price": "50.12", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Digimon Survive", "price": "3.25", "flag": "🇹🇷", "date": "05.04", "status": "" },
  { "name": "Dishonored & Prey: The Arkane Collection", "price": "15.5", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Dishonored®: Death of the Outsider™ Deluxe Bundle", "price": "12.34", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Disney Dreamlight Valley: A Rift in Time", "price": "0.54", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Dr. Atominus (for Windows 10)", "price": "0.04", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Dr. Atominus", "price": "0.04", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Dragon Age™: Inquisition - Game of the Year Edition", "price": "0.71", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "DreamWorks Dragons Dawn of New Riders", "price": "2.19", "flag": "🇦🇷", "date": "05.04", "status": " GP" },
  { "name": "Dungeons 4 - Digital Deluxe Edition", "price": "14.0", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Dying Light: Definitive Edition", "price": "5.63", "flag": "🇹🇷", "date": "05.04", "status": " GP" },
  { "name": "Dynamite Fishing - World Games", "price": "0.01", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "EA SPORTS FC™ 24 Standard Edition Xbox One & Xbox Series X|S", "price": "13.02", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "EA SPORTS FC™ 24 Standard Edition Xbox One & Xbox Series X|S", "price": "8.68", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "EA SPORTS FC™ 24 Ultimate Edition Xbox One & Xbox Series X|S", "price": "24.8", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "EA SPORTS™ PGA TOUR™ Deluxe Edition", "price": "20.46", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "EA SPORTS™ PGA TOUR™", "price": "17.36", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Escape Academy Deluxe Edition", "price": "0.5", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Escape Dead Island", "price": "0.05", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Escape Sequence (for Windows 10)", "price": "0.04", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Escape from Life Inc", "price": "0.07", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Evil West", "price": "12.4", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "F1® 23", "price": "30.38", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "F1® Manager 2023 Deluxe Edition", "price": "13.64", "flag": "🇹🇷", "date": "16.10", "status": " GP" },
  { "name": "FATAL FRAME: Maiden of Black Water Digital Deluxe Edition", "price": "12.26", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "FATAL FRAME: Maiden of Black Water", "price": "8.94", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "FATAL FRAME: Mask of the Lunar Eclipse Digital Deluxe Edition", "price": "14.08", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "FOR HONOR – Gold Edition", "price": "24.8", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "FOR HONOR – Ultimate Edition", "price": "39.68", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Fallout 4: Game of the Year Edition (PC)", "price": "7.07", "flag": "🇹🇷", "date": "08.04", "status": " GP" },
  { "name": "Fallout 4: Game of the Year Edition", "price": "7.07", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "Fallout 76: Atlantic City - Boardwalk Paradise Deluxe Edition", "price": "12.0", "flag": "🇦🇷", "date": "30.12", "status": " GP" },
  { "name": "Far Cry® 6 Deluxe Edition", "price": "19.22", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Far Cry® 6 Game of the Year Edition", "price": "8.83", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Far Cry® 6 Gold Edition", "price": "6.2", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Far Cry®5 Gold Edition", "price": "3.3", "flag": "🇦🇷", "date": "01.07", "status": " GP" },
  { "name": "Farm Bundle", "price": "0.57", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Farm Pets Bundle", "price": "0.86", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Fast & Furious: Spy Racers Rise of SH1FT3R - Complete Edi...", "price": "2.75", "flag": "🇦🇷", "date": "05.04", "status": " GP" },
  { "name": "Flailing Limbs Bundle", "price": "0.25", "flag": "🇦🇷", "date": "01.08", "status": " GP" },
  { "name": "Flockers", "price": "0.14", "flag": "🇦🇷", "date": "04.04", "status": "" },
  { "name": "Food Truck Tycoon", "price": "0.31", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Forza Horizon 4 Expansions Bundle", "price": "2.81", "flag": "🇦🇷", "date": "02.10", "status": " GP" },
  { "name": "Forza Horizon 5 PLUS Hot Wheels Bundle", "price": "10.8", "flag": "🇦🇷", "date": "30.12", "status": " GP" },
  { "name": "Frostpunk: Complete Collection", "price": "0.64", "flag": "🇦🇷", "date": "16.07", "status": " GP" },
  { "name": "Fuga: Melodies of Steel 2 - Deluxe Edition", "price": "8.0", "flag": "🇦🇷", "date": "16.05", "status": " GP" },
  { "name": "Fuga: Melodies of Steel 2 - Ultimate Edition", "price": "8.55", "flag": "🇦🇷", "date": "16.05", "status": " GP" },
  { "name": "Fusion Paradox (Xbox Series X|S)", "price": "0.09", "flag": "🇦🇷", "date": "02.04", "status": " GP" },
  { "name": "Fusion Paradox", "price": "0.09", "flag": "🇦🇷", "date": "02.04", "status": " GP" },
  { "name": "Garden Bundle", "price": "0.64", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Gears of War 4 and Halo 5: Guardians Bundle", "price": "0.4", "flag": "🇦🇷", "date": "31.01", "status": " GP" },
  { "name": "Gears of War Ultimate Edition Deluxe Version", "price": "1.3", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Generation Zero ® - Silver Bundle", "price": "0.71", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Generation Zero ® - Ultimate Bundle", "price": "0.94", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Generation Zero® - Gold Bundle", "price": "0.86", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Genesis Alpha One", "price": "0.09", "flag": "🇦🇷", "date": "04.04", "status": "" },
  { "name": "Get Even", "price": "0.19", "flag": "🇦🇷", "date": "05.04", "status": "" },
  { "name": "Ghostrunner", "price": "0.56", "flag": "🇦🇷", "date": "05.04", "status": " GP" },
  { "name": "Ghostwire: Tokyo Deluxe Edition", "price": "19.22", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Gigantosaurus The Game", "price": "1.46", "flag": "🇦🇷", "date": "05.04", "status": " GP" },
  { "name": "Gnomes Garden 2", "price": "0.03", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Gnomes Garden 3 in 1 Bundle", "price": "0.09", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Gnomes Garden", "price": "0.03", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Goat Simulator 3 - Digital Downgrade Edition", "price": "2.0", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Goat Simulator: The GOATY", "price": "0.3", "flag": "🇦🇷", "date": "01.05", "status": " GP" },
  { "name": "Goat Simulator: Waste Of Space Bundle", "price": "0.14", "flag": "🇦🇷", "date": "01.05", "status": " GP" },
  { "name": "Going Under", "price": "0.28", "flag": "🇦🇷", "date": "04.04", "status": "" },
  { "name": "Golf With Your Friends - Starter Edition", "price": "18.0", "flag": "🇦🇷", "date": "16.07", "status": " GP" },
  { "name": "Golf With Your Friends - Ultimate Edition", "price": "29.27", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Gord - Deluxe Edition", "price": "8.62", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Grand Theft Auto V", "price": "6.8", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Grand Theft Auto V: Premium Edition", "price": "2.56", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "GreedFall - Gold Edition", "price": "2.21", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Guilty Gear -Strive- Daredevil Edition", "price": "7.09", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "HITMAN™ 2", "price": "1.57", "flag": "🇦🇷", "date": "04.02", "status": "" },
  { "name": "Halo 5: Guardians – Digital Deluxe Edition", "price": "6.5", "flag": "🇦🇷", "date": "31.05", "status": " GP" },
  { "name": "Halo Wars 2: Complete Edition", "price": "24.8", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Hardspace: Shipbreaker", "price": "4.71", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Heliborne", "price": "0.21", "flag": "🇦🇷", "date": "02.04", "status": " GP" },
  { "name": "Hell Let Loose - Deluxe Edition", "price": "23.56", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Hell Let Loose - Ultimate Edition", "price": "33.46", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Hello Neighbor 2 Deluxe Edition", "price": "5.5", "flag": "🇦🇷", "date": "16.12", "status": " GP" },
  { "name": "Hi-Fi RUSH Deluxe Edition", "price": "14.88", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Hogwarts Legacy: Digital Deluxe Edition", "price": "17.03", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Hood: Outlaws & Legends", "price": "1.17", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Hotel Transylvania 3: Monsters Overboard", "price": "1.46", "flag": "🇦🇷", "date": "05.04", "status": " GP" },
  { "name": "Hotel Transylvania: Scary-Tale Adventures", "price": "1.7", "flag": "🇦🇷", "date": "05.04", "status": " GP" },
  { "name": "Huge Moonstone Pack -- 14,500", "price": "9.0", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Hungry Shark® World", "price": "0.06", "flag": "🇦🇷", "date": "02.04", "status": " GP" },
  { "name": "Hypnospace Outlaw & Slayers X: Terminal Aftermath: Vengance of the Slayer Bundle", "price": "0.48", "flag": "🇦 🇷", "date": "01.06", "status": " GP" },
  { "name": "I Am Fish", "price": "0.11", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "INSIDE & LIMBO Bundle", "price": "2.52", "flag": "🇦🇷", "date": "01.08", "status": " GP" },
  { "name": "Immortals Fenyx Rising™ Gold Edition", "price": "1.03", "flag": "🇦🇷", "date": "02.04", "status": " GP" },
  { "name": "Immortals Fenyx Rising™", "price": "0.67", "flag": "🇦🇷", "date": "02.04", "status": " GP" },
  { "name": "Immortals of Aveum™ Deluxe Edition", "price": "19.84", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Immortals of Aveum™ Deluxe Edition", "price": "22.32", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Immortals of Aveum™", "price": "17.36", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Injustice™ 2 - Legendary Edition", "price": "0.24", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Insurgency: Sandstorm - Deluxe Edition", "price": "10.62", "flag": "🇦🇷", "date": "02.04", "status": " GP" },
  { "name": "Insurgency: Sandstorm - Gold Edition", "price": "25.0", "flag": "🇦🇷", "date": "08.04", "status": " GP" },
  { "name": "Insurgency: Sandstorm - Ultimate Edition", "price": "29.0", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Insurgency: Sandstorm", "price": "4.34", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Iro Hero", "price": "0.11", "flag": "🇦🇷", "date": "", "status": "" },
  { "name": "It Takes Two - Digital Version", "price": "3.71", "flag": "🇹🇷", "date": "04.04", "status": "" },
  { "name": "JoJo Siwa: Worldwide Party", "price": "1.06", "flag": "🇦🇷", "date": "05.04", "status": " GP" },
  { "name": "Jump King", "price": "0.09", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Jurassic World Evolution 2: Deluxe Edition", "price": "7.0", "flag": "🇦🇷", "date": "16.05", "status": " GP" },
  { "name": "KLONOA Phantasy Reverie Series", "price": "3.25", "flag": "🇹🇷", "date": "05.04", "status": "" },
  { "name": "Katamari Damacy REROLL", "price": "1.7", "flag": "🇹🇷", "date": "05.04", "status": "" },
  { "name": "Kerbal Space Program Enhanced Edition Complete", "price": "2.75", "flag": "🇹🇷", "date": "02.04", "status": " GP" },
  { "name": "Knowledge Keeper (Xbox Series X|S)", "price": "0.07", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Knowledge Keeper", "price": "0.07", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Kona", "price": "0.02", "flag": "🇦🇷", "date": "05.04", "status": " GP" },
  { "name": "Kung Fu Fighting", "price": "0.02", "flag": "🇦🇷", "date": "06.04", "status": "" },
  { "name": "LEGO® Batman™ 3: Beyond Gotham Deluxe Edition", "price": "0.12", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "LEGO® DC Super-Villains Deluxe Edition", "price": "0.28", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "LEGO® Jurassic World™", "price": "0.25", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "LEGO® Marvel Super Heroes 2 Deluxe Edition", "price": "0.37", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "LEGO® Marvel’s Avengers Deluxe Edition", "price": "0.3", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "LEGO® Star Wars™: The Force Awakens Deluxe Edition", "price": "0.25", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "LEGO® Star Wars™: The Skywalker Saga", "price": "5.0", "flag": "🇦🇷", "date": "01.05", "status": " GP" },
  { "name": "LEGO® The Incredibles", "price": "0.22", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "LEGO® Worlds", "price": "0.2", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Leisure Suit Larry - Wet Dreams Don't Dry", "price": "0.19", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Leisure Suit Larry - Wet Dreams Dry Twice", "price": "0.35", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Let's Build a Zoo & Dinosaur DLC Bundle", "price": "0.38", "flag": "🇦🇷", "date": "01.04", "status": " GP" },
  { "name": "Let's Build a Zoo: Aquarium Odyssey Bundle", "price": "0.38", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "Let's Build a Zoo: Ultimate Bundle", "price": "0.48", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "Light & Dark Bundle", "price": "2.0", "flag": "🇦🇷", "date": "02.11", "status": "" },
  { "name": "Limb Hunter", "price": "0.04", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Little Nightmares Complete Edition", "price": "1.57", "flag": "🇦🇷", "date": "05.04", "status": "" },
  { "name": "Little Nightmares II", "price": "4.59", "flag": "🇹🇷", "date": "05.04", "status": "" },
  { "name": "Lonely Mountains: Downhill - Eldfjall Island", "price": "0.33", "flag": "🇦🇷", "date": "01.11", "status": " GP" },
  { "name": "Lost Artifacts", "price": "0.09", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Lost Artifacts: Golden Island", "price": "0.09", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Lost in Random™", "price": "0.22", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Lucid Cycle", "price": "0.12", "flag": "🇦🇷", "date": "", "status": "" },
  { "name": "Luxury Garden Bundle", "price": "0.86", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "MEGALAN 11 (Xbox Series X|S)", "price": "0.09", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "MLB® The Show™ 23 Digital Deluxe Edition - Xbox One and Xbox Series X|S", "price": "20.0", "flag": "🇦🇷", "date": "01.04", "status": " GP" },
  { "name": "MLB® The Show™ 23 Xbox One", "price": "10.2", "flag": "🇦🇷", "date": "01.04", "status": " GP" },
  { "name": "MLB® The Show™ 23 Xbox Series X|S", "price": "12.48", "flag": "🇦🇷", "date": "01.04", "status": " GP" },
  { "name": "MONOPOLY DEAL", "price": "0.01", "flag": "🇦🇷", "date": "02.04", "status": " GP" },
  { "name": "MXGP2", "price": "0.09", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "MY HERO ONE'S JUSTICE 2 Ultimate Edition", "price": "11.62", "flag": "🇹🇷", "date": "05.04", "status": "" },
  { "name": "MY HERO ONE'S JUSTICE 2", "price": "5.8", "flag": "🇹🇷", "date": "05.04", "status": "" },
  { "name": "MY HERO ONE’S JUSTICE", "price": "5.41", "flag": "🇹🇷", "date": "04.04", "status": "" },
  { "name": "Mad Max", "price": "0.25", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Madden NFL 23 Xbox One", "price": "6.4", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Madden NFL 23 Xbox Series X|S", "price": "7.5", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Madden NFL 24 Deluxe Edition Xbox Series X|S & Xbox One", "price": "18.6", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Madden NFL 24", "price": "13.02", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Maneater Apex Edition", "price": "0.71", "flag": "🇦🇷", "date": "01.03", "status": " GP" },
  { "name": "Mass Effect™ Legendary Edition", "price": "3.25", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Mass Effect™: Andromeda – Deluxe Recruit Edition", "price": "0.34", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "MechWarrior 5: Mercenaries - JumpShip Edition", "price": "0.86", "flag": "🇦🇷", "date": "30.12", "status": " GP" },
  { "name": "Metro 2033 Redux", "price": "0.27", "flag": "🇹🇷", "date": "05.04", "status": " GP" },
  { "name": "Metro Exodus", "price": "0.87", "flag": "🇹🇷", "date": "05.04", "status": " GP" },
  { "name": "Microsoft 365 Family", "price": "0.0", "flag": "🇦🇷", "date": "30.11", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.0", "flag": "🇹🇷", "date": "30.11", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.0", "flag": "🇦🇷", "date": "30.11", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.0", "flag": "🇹🇷", "date": "30.11", "status": "" },
  { "name": "Middle-earth™: Shadow of Mordor™ - Game of the Year Edition", "price": "0.31", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Middle-earth™: Shadow of War™ Definitive Edition", "price": "0.37", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle - Windows 10", "price": "1.57", "flag": "🇹🇷", "date": "27.07", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle", "price": "1.57", "flag": "🇹🇷", "date": "27.07", "status": " GP" },
  { "name": "Mirror's Edge™ Catalyst", "price": "0.06", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Monopoly Madness", "price": "0.94", "flag": "🇦🇷", "date": "01.04", "status": " GP" },
  { "name": "Moonlighter: Complete Edition", "price": "0.34", "flag": "🇦🇷", "date": "01.04", "status": " GP" },
  { "name": "Mortal Kombat 1", "price": "20.62", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Mortal Kombat 11 Ultimate + Injustice 2 Leg. Edition Bundle", "price": "21.3", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Mortal Kombat XL", "price": "0.25", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "MotoGP™17", "price": "0.19", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "MotoGP™20", "price": "1.59", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Mr. DRILLER DrillLand", "price": "0.28", "flag": "🇹🇷", "date": "05.04", "status": "" },
  { "name": "MudRunner", "price": "0.64", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "My Friend Peppa Pig - Complete Edition", "price": "3.09", "flag": "🇦🇷", "date": "05.04", "status": " GP" },
  { "name": "My Time at Portia Deluxe Edition", "price": "1.4", "flag": "🇦🇷", "date": "03.04", "status": " GP" },
  { "name": "My Time at Sandrock Deluxe Edition", "price": "0.67", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "My Time at Sandrock", "price": "0.54", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "NAMCO MUSEUM® ARCHIVES Vol 1", "price": "0.69", "flag": "🇹🇷", "date": "05.04", "status": "" },
  { "name": "NAMCO MUSEUM® ARCHIVES Vol 2", "price": "0.69", "flag": "🇹🇷", "date": "05.04", "status": "" },
  { "name": "NARUTO X BORUTO Ultimate Ninja STORM CONNECTIONS Ultimate Edition", "price": "37.95", "flag": "🇹🇷", "date": "04.04", "status": "" },
  { "name": "NARUTO X BORUTO Ultimate Ninja STORM CONNECTIONS", "price": "22.83", "flag": "🇹🇷", "date": "04.04", "status": "" },
  { "name": "NBA 2K24 Baller Edition", "price": "43.38", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "NBA 2K24 Black Mamba Edition", "price": "14.72", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "NBA 2K24 for Xbox One", "price": "6.04", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "NBA 2K24 for Xbox Series X|S", "price": "9.3", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "NHL® 24 X-Factor Edition Xbox One & Xbox Series X|S", "price": "18.6", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "NHL® 24 Xbox One", "price": "11.16", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "NHL® 24 Xbox Series X|S", "price": "13.02", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Necromunda: Underhive Wars - Gold Edition", "price": "3.35", "flag": "🇹🇷", "date": "02.04", "status": " GP" },
  { "name": "Need for Speed Rivals", "price": "0.15", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Need for Speed™ Heat Deluxe Edition", "price": "0.56", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Need for Speed™ Heat", "price": "0.47", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Need for Speed™ Hot Pursuit Remastered", "price": "0.47", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Need for Speed™ Payback - Deluxe Edition", "price": "0.21", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Need for Speed™ Payback", "price": "0.15", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Need for Speed™ Unbound Palace Edition", "price": "1.97", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Need for Speed™ Unbound", "price": "1.69", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Need for Speed™", "price": "0.19", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Neon Abyss Deluxe Edition", "price": "0.4", "flag": "🇦🇷", "date": "16.07", "status": " GP" },
  { "name": "Ni no Kuni™ II: Revenant Kingdom - The Prince's Edition", "price": "3.56", "flag": "🇦🇷", "date": "05.04", "status": "" },
  { "name": "Night Reverie", "price": "0.72", "flag": "🇦🇷", "date": "02.04", "status": " GP" },
  { "name": "Ninja Village", "price": "0.19", "flag": "🇦🇷", "date": "04.04", "status": "" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.04", "flag": "🇦🇷", "date": "30.05", "status": "" },
  { "name": "No Man's Sky", "price": "2.63", "flag": "🇹🇷", "date": "12.04", "status": "" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "4.22", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "4.6", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Nordic Adventure Bundle", "price": "1.92", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "ONE PIECE ODYSSEY", "price": "4.64", "flag": "🇹🇷", "date": "05.04", "status": "" },
  { "name": "ONE PIECE World Seeker", "price": "1.12", "flag": "🇹🇷", "date": "05.04", "status": "" },
  { "name": "ONE PIECE: PIRATE WARRIORS 4 Deluxe Edition(Xbox One)", "price": "7.75", "flag": "🇹🇷", "date": "05.04", "status": "" },
  { "name": "ONE PIECE: PIRATE WARRIORS 4", "price": "5.81", "flag": "🇹🇷", "date": "04.04", "status": "" },
  { "name": "ONE PUNCH MAN: A HERO NOBODY KNOWS", "price": "0.93", "flag": "🇹🇷", "date": "04.04", "status": "" },
  { "name": "One Hand Clapping", "price": "0.87", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "One Piece: Burning Blood", "price": "0.77", "flag": "🇹🇷", "date": "05.04", "status": "" },
  { "name": "Overcooked! 2 - Gourmet Edition", "price": "0.56", "flag": "🇦🇷", "date": "16.12", "status": " GP" },
  { "name": "Overcooked! 2", "price": "1.54", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Overcooked! All You Can Eat", "price": "4.33", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "PAC-MAN 256", "price": "0.07", "flag": "🇦🇷", "date": "05.04", "status": "" },
  { "name": "PAC-MAN MUSEUM+", "price": "1.38", "flag": "🇹🇷", "date": "05.04", "status": "" },
  { "name": "PAC-MAN WORLD Re-PAC", "price": "3.26", "flag": "🇹🇷", "date": "05.04", "status": "" },
  { "name": "PAW Patrol: Grand Prix - Complete Edition", "price": "4.5", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "PROJECT ZERO: Mask of the Lunar Eclipse", "price": "10.83", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Pathfinder: Kingmaker - Definitive Edition", "price": "0.22", "flag": "🇦🇷", "date": "05.04", "status": " GP" },
  { "name": "Paw Patrol Bundle", "price": "3.44", "flag": "🇦🇷", "date": "05.04", "status": " GP" },
  { "name": "Penny's Big Breakaway", "price": "15.09", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Pets Bundle", "price": "0.64", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Phoenix Point: Behemoth Edition", "price": "0.43", "flag": "🇦🇷", "date": "30.12", "status": " GP" },
  { "name": "Pile Up! Box by Box", "price": "0.43", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Planet of Lana", "price": "1.15", "flag": "🇦🇷", "date": "02.04", "status": " GP" },
  { "name": "Plants vs. Zombies Garden Warfare", "price": "0.09", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Plants vs. Zombies: Battle for Neighborville™ Deluxe Edition", "price": "0.57", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Plants vs. Zombies: Battle for Neighborville™", "price": "0.45", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Plants vs. Zombies™ Garden Warfare 2", "price": "0.09", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Prey®: Digital Deluxe Edition", "price": "7.07", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Prison Architect: Total Lockdown Bundle", "price": "0.38", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Quern - Undying Thoughts", "price": "0.17", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "RAD", "price": "0.46", "flag": "🇹🇷", "date": "05.04", "status": "" },
  { "name": "RAGE 2: Deluxe Edition", "price": "11.16", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "RESIDENT EVIL 2 Deluxe Edition", "price": "24.8", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Rabio (Windows 10)", "price": "0.05", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Race With Ryan Road Trip Deluxe Edition", "price": "1.75", "flag": "🇦🇷", "date": "05.04", "status": " GP" },
  { "name": "Race with Ryan", "price": "1.46", "flag": "🇦🇷", "date": "05.04", "status": " GP" },
  { "name": "Rad Rodgers", "price": "0.18", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Railway Empire 2 - Digital Deluxe Edition", "price": "0.86", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Rayland 2 (Xbox & PC)", "price": "2.12", "flag": "🇦🇷", "date": "", "status": "" },
  { "name": "ReCore", "price": "2.5", "flag": "🇦🇷", "date": "", "status": "" },
  { "name": "Red Dead Redemption & Red Dead Redemption 2 Bundle", "price": "1.79", "flag": "🇦🇷", "date": "", "status": "" },
  { "name": "Redfall Bite Back Edition", "price": "39.68", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Regular Moonstone Pack -- 2,500", "price": "1.8", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Remnant II - Deluxe Edition", "price": "5.5", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Remnant II - Ultimate Edition", "price": "7.0", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Remnant: From the Ashes - Complete Edition", "price": "1.5", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Riders Republic™ 360 Edition", "price": "12.09", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Riders Republic™", "price": "5.42", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Rise of the Tomb Raider: 20 Year Celebration", "price": "5.11", "flag": "🇦🇷", "date": "01.12", "status": " GP" },
  { "name": "Robolifter", "price": "0.06", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Rogue Stormers", "price": "0.02", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Russian Subway Dogs", "price": "0.68", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Ryan's Rescue Squad", "price": "1.7", "flag": "🇦🇷", "date": "05.04", "status": " GP" },
  { "name": "SCARF", "price": "0.71", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "SCARLET NEXUS Ultimate Edition", "price": "2.85", "flag": "🇹🇷", "date": "04.04", "status": "" },
  { "name": "SOULCALIBUR VI Deluxe Edition", "price": "2.24", "flag": "🇹🇷", "date": "04.04", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "2.14", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "3.24", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "1.6", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "2.7", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "STAR WARS Jedi: Survivor™ Deluxe Edition", "price": "26.35", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "STAR WARS™ Battlefront™ II", "price": "0.28", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "STAR WARS™ Battlefront™ II: Celebration Edition", "price": "0.56", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "STAR WARS™ Battlefront™ Ultimate Edition", "price": "0.16", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "STAR WARS™: Squadrons", "price": "0.16", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "SWORD ART ONLINE Alicization Lycoris", "price": "1.39", "flag": "🇹🇷", "date": "04.04", "status": "" },
  { "name": "SWORD ART ONLINE Last Recollection", "price": "19.51", "flag": "🇹🇷", "date": "05.04", "status": "" },
  { "name": "Saints Row IV: Re-Elected", "price": "0.05", "flag": "🇦🇷", "date": "05.04", "status": " GP" },
  { "name": "Saints Row The Third Remastered", "price": "0.4", "flag": "🇦🇷", "date": "05.04", "status": " GP" },
  { "name": "Shadowblade Odyssey", "price": "0.02", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Shapik: The Quest", "price": "0.06", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Ship of Fools - Aquapocalypse Edition", "price": "12.5", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Sid Meier’s Civilization® VI Anthology", "price": "7.04", "flag": "🇹🇷", "date": "02.04", "status": " GP" },
  { "name": "Sid Meier’s Civilization® VI Platinum Edition", "price": "3.4", "flag": "🇹🇷", "date": "02.04", "status": " GP" },
  { "name": "Sine Mora EX", "price": "0.05", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Skydrift Infinity", "price": "0.66", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Skyrim Anniversary Edition + Fallout 4 G.O.T.Y Bundle", "price": "19.84", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Small Moonstone Pack -- 1,200", "price": "0.9", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Smart Moves Bundle", "price": "0.07", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Sniper Elite 5 Complete Edition", "price": "1.57", "flag": "🇦🇷", "date": "01.05", "status": " GP" },
  { "name": "Sniper Elite 5 Deluxe Edition", "price": "8.0", "flag": "🇦🇷", "date": "01.05", "status": " GP" },
  { "name": "SnowRunner - 1-Anniversary Edition", "price": "4.65", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Somerville", "price": "0.98", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "SongPop Party", "price": "1.47", "flag": "🇦🇷", "date": "04.04", "status": "" },
  { "name": "Space Engineers: Ultimate Edition 2023", "price": "1.06", "flag": "🇦🇷", "date": "01.03", "status": " GP" },
  { "name": "Space Moves", "price": "0.07", "flag": "🇦🇷", "date": "05.04", "status": "" },
  { "name": "Sparkle Bundle", "price": "0.16", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "SpellForce III Reforced: Complete Edition", "price": "18.12", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Starlink: Battle for Atlas™ - Deluxe edition", "price": "0.5", "flag": "🇦🇷", "date": "02.04", "status": " GP" },
  { "name": "Starward Rogue: Complete Edition", "price": "1.22", "flag": "🇦🇷", "date": "02.04", "status": " GP" },
  { "name": "SteamWorld Build & Dig Bundle", "price": "2.19", "flag": "🇦🇷", "date": "01.12", "status": " GP" },
  { "name": "Steep X Games Gold Edition", "price": "0.32", "flag": "🇦🇷", "date": "02.04", "status": " GP" },
  { "name": "Stellaris: Console Edition - Deluxe Edition", "price": "0.55", "flag": "🇦🇷", "date": "16.10", "status": " GP" },
  { "name": "Strategic Mind Complete Franchise Bundle", "price": "5.25", "flag": "🇦🇷", "date": "02.04", "status": " GP" },
  { "name": "Stray Blade", "price": "1.45", "flag": "🇦🇷", "date": "05.04", "status": " GP" },
  { "name": "Stunt Paradise", "price": "0.12", "flag": "🇦🇷", "date": "05.04", "status": "" },
  { "name": "Suicide Squad: Kill the Justice League", "price": "10.0", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Summer in Mara + Deiland Bundle", "price": "0.27", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Sunset Overdrive Deluxe Edition", "price": "1.72", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Super Mega Baseball™ 4 Ballpark Edition", "price": "14.88", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Super Mega Baseball™ 4", "price": "12.4", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Super Party Sports: Football", "price": "0.01", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Swordbreaker: Origins", "price": "0.09", "flag": "🇦🇷", "date": "02.04", "status": " GP" },
  { "name": "Sébastien Loeb Rally EVO", "price": "0.05", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "TEKKEN 7 - Originals Edition", "price": "2.13", "flag": "🇹🇷", "date": "05.04", "status": "" },
  { "name": "TEKKEN 7", "price": "1.32", "flag": "🇹🇷", "date": "04.04", "status": "" },
  { "name": "TRANSFORMERS: BATTLEGROUNDS - Complete Edition", "price": "1.75", "flag": "🇦🇷", "date": "05.04", "status": " GP" },
  { "name": "TY the Tasmanian Tiger™ 2: Bush Rescue™ HD", "price": "0.59", "flag": "🇦🇷", "date": "02.04", "status": " GP" },
  { "name": "Tales of Arise - Beyond The Dawn Ultimate Edition", "price": "44.62", "flag": "🇹🇷", "date": "05.04", "status": "" },
  { "name": "Tales of Arise - Beyond the Dawn Deluxe Edition", "price": "37.18", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Tales of Arise - Beyond the Dawn Edition", "price": "27.26", "flag": "🇹🇷", "date": "04.04", "status": "" },
  { "name": "Tales of Arise", "price": "11.61", "flag": "🇹🇷", "date": "04.04", "status": "" },
  { "name": "Tales of Kenzera™: ZAU Standard Edition", "price": "7.87", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Tales of Symphonia Remastered", "price": "6.18", "flag": "🇹🇷", "date": "05.04", "status": "" },
  { "name": "Tardy", "price": "0.14", "flag": "🇦🇷", "date": "02.04", "status": " GP" },
  { "name": "Teenage Mutant Ninja Turtles: Shredder's Revenge - Dimension Shellshock", "price": "0.43", "flag": "🇦🇷", "date": "16.06", "status": " GP" },
  { "name": "The Addams Family: Mansion Mayhem", "price": "1.7", "flag": "🇦🇷", "date": "05.04", "status": " GP" },
  { "name": "The Bard's Tale Trilogy", "price": "0.78", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "The Crew™ Motorfest Ultimate Edition", "price": "31.77", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "The Dark Pictures Anthology House of Ashes", "price": "1.42", "flag": "🇹🇷", "date": "04.04", "status": "" },
  { "name": "The Dark Pictures Anthology: The Devil in Me", "price": "3.96", "flag": "🇹🇷", "date": "04.04", "status": "" },
  { "name": "The Elder Scrolls Online Collection: Necrom", "price": "8.66", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "The Elder Scrolls Online Deluxe Collection: Necrom", "price": "13.12", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "The Elder Scrolls V: Skyrim Anniversary Edition", "price": "4.91", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "The Elder Scrolls® Online", "price": "2.75", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "The Escapists 2 - Game of the Year Edition", "price": "0.11", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "The Escapists: Supermax Edition", "price": "0.31", "flag": "🇦🇷", "date": "29.04", "status": "" },
  { "name": "The Evil Within Digital Bundle", "price": "2.51", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "The Jackbox Party Quadpack", "price": "0.7", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "The LEGO Movie 2 Videogame", "price": "0.36", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "The LEGO® NINJAGO® Movie Video Game", "price": "0.19", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "The Lamplighters League - Deluxe Edition", "price": "0.78", "flag": "🇦🇷", "date": "01.04", "status": " GP" },
  { "name": "The Oregon Trail", "price": "4.19", "flag": "🇦🇷", "date": "04.04", "status": "" },
  { "name": "The Outer Worlds: Board-Approved Bundle", "price": "8.35", "flag": "🇹🇷", "date": "02.04", "status": " GP" },
  { "name": "The Quarry - Deluxe Edition", "price": "19.57", "flag": "🇹🇷", "date": "16.12", "status": " GP" },
  { "name": "The Surge - Augmented Edition", "price": "1.26", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "The Surge 2 - Premium Edition", "price": "2.02", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "The Surge 2 - Windows 10", "price": "0.41", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "The Surge 2", "price": "0.78", "flag": "🇦🇷", "date": "02.04", "status": " GP" },
  { "name": "The Survivalists - Deluxe Edition", "price": "0.27", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "The Walking Dead: A New Frontier", "price": "0.21", "flag": "🇦🇷", "date": "01.11", "status": " GP" },
  { "name": "The Walking Dead: Michonne", "price": "0.07", "flag": "🇦🇷", "date": "01.11", "status": " GP" },
  { "name": "This War of Mine - Complete Edition", "price": "0.38", "flag": "🇦🇷", "date": "16.05", "status": " GP" },
  { "name": "Tin Can: Supporter Edition", "price": "1.53", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Titanfall® 2: Ultimate Edition", "price": "0.15", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Deluxe Edition", "price": "3.41", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Tom Clancy's Rainbow Six® Extraction United Bundle", "price": "5.5", "flag": "🇦🇷", "date": "16.06", "status": " GP" },
  { "name": "Tom Clancy's The Division® 2", "price": "0.56", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Ultimate Edition", "price": "1.19", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Year 2 Gold Edition", "price": "0.5", "flag": "🇦🇷", "date": "02.04", "status": " GP" },
  { "name": "Tom Clancy’s Rainbow Six Siege Operator Edition", "price": "20.15", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Tom Clancy’s Rainbow Six Siege Ultimate Edition", "price": "27.28", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Tom Clancy’s Rainbow Six® Extraction", "price": "1.22", "flag": "🇦🇷", "date": "02.04", "status": " GP" },
  { "name": "Totally Reliable Delivery Service Deluxe Edition", "price": "0.34", "flag": "🇦🇷", "date": "01.12", "status": " GP" },
  { "name": "Trackmania® Turbo", "price": "0.1", "flag": "🇦🇷", "date": "02.04", "status": " GP" },
  { "name": "Trailmakers - Space Upgrade", "price": "0.47", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers Deluxe Edition", "price": "0.54", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Train Sim World® 4: Austrian Regional Edition", "price": "4.06", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Train Sim World® 4: Flying Scotsman Centenary Edition", "price": "6.5", "flag": "🇦🇷", "date": "01.08", "status": " GP" },
  { "name": "Train Sim World® 4: German Regional Edition", "price": "4.06", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Train Sim World® 4: UK Regional Edition", "price": "4.06", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Train Sim World® 4: USA Regional Edition", "price": "4.06", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Trepang2", "price": "12.09", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Trials® Rising - Digital Gold Edition", "price": "0.56", "flag": "🇦🇷", "date": "02.04", "status": " GP" },
  { "name": "Turnip Boy Robs a Bank Pre-Release", "price": "0.24", "flag": "🇦🇷", "date": "17.04", "status": " GP" },
  { "name": "Twin Mirror", "price": "1.02", "flag": "🇹🇷", "date": "05.04", "status": "" },
  { "name": "UFC® 5 Deluxe Edition", "price": "13.2", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "UFC® 5", "price": "9.0", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "0.17", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Unravel Two", "price": "0.12", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Vampyr", "price": "1.18", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Vermintide - Digital Value Pack", "price": "0.5", "flag": "🇦🇷", "date": "07.03", "status": "" },
  { "name": "Void Gore", "price": "0.09", "flag": "🇦🇷", "date": "", "status": "" },
  { "name": "WATCH_DOGS™ COMPLETE EDITION", "price": "0.12", "flag": "🇦🇷", "date": "02.04", "status": " GP" },
  { "name": "WILD HEARTS™ Karakuri Edition", "price": "21.08", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "WILD HEARTS™ Standard Edition", "price": "17.36", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "WRC 2023", "price": "10.54", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "0.8", "flag": "🇦🇷", "date": "30.08", "status": "" },
  { "name": "Warhammer 40,000: Boltgun", "price": "8.31", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Warhammer 40,000: Darktide - Imperial Edition", "price": "5.0", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "Wasteland 3 (PC) Colorado Collection", "price": "1.8", "flag": "🇦🇷", "date": "30.09", "status": " GP" },
  { "name": "Wasteland 3 Colorado Collection", "price": "10.89", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Wasteland 3", "price": "2.0", "flag": "🇹🇷", "date": "05.04", "status": " GP" },
  { "name": "Watch Dogs®2 - Deluxe Edition", "price": "3.4", "flag": "🇦🇷", "date": "16.07", "status": " GP" },
  { "name": "Watch Dogs®2 - Gold Edition", "price": "0.75", "flag": "🇦🇷", "date": "02.04", "status": " GP" },
  { "name": "Watch Dogs®: Legion Ultimate Edition", "price": "5.89", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "We Happy Few Digital Deluxe", "price": "1.7", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "We Love Katamari REROLL+ Royal Reverie", "price": "4.59", "flag": "🇹🇷", "date": "04.04", "status": "" },
  { "name": "Weedcraft Inc", "price": "0.29", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Wired Italian Adventure Bundle", "price": "0.43", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Wolfenstein: Alt History Collection", "price": "12.4", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Wolfenstein: Youngblood Deluxe Edition", "price": "5.42", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Wolfenstein® II: The New Colossus™ Digital Deluxe Edition", "price": "7.44", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Wolfenstein®: The Two-Pack", "price": "3.94", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "World War Z: Aftermath - Deluxe Edition", "price": "6.4", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Worldless", "price": "0.27", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Worms W.M.D", "price": "1.54", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "reky + Clumsy Rush", "price": "0.1", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "reky + Cyber Protocol", "price": "0.11", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "sCATch 2x1", "price": "0.11", "flag": "🇦🇷", "date": "13.04", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Greenhorn Bundle", "price": "0.57", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "theHunter: Call of the Wild™ - Master Hunter Bundle", "price": "0.86", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "theHunter: Call of the Wild™ - Seasoned Hunter Bundle", "price": "0.49", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
]

let usd = 104;

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

function resultArg() {
  const value = Number(arg_input.value) + .1
  const newValue = value + (value * resPercent(value)) / 100
  const res = newValue * usd
  const finishRes = res + resSwitсhArg(newValue)
  arg_output.innerHTML = floor(finishRes.toFixed())
  arg_output2.innerHTML = floor(finishRes.toFixed()) + 50
}

function resultTr() {
  const value = Number(tr_input.value) + .1
  const res = value * usd
  const finishRes = res + resSwitсhTr(tr_input.value)
  tr_output.innerHTML = floor(finishRes.toFixed())
  tr_output2.innerHTML = floor(finishRes.toFixed()) + 50
}



function resSwitсhArg(value) {
  let a;

  if (value <= 1) {
    a = 60
  } else if (value > 1 && value <= 5) {
    a = 80
  } else if (value > 5 && value <= 10) {
    a = 90
  } else if (value > 10 && value <= 15) {
    a = 100
  } else if (value > 15 && value <= 20) {
    a = 100

  } else if (value > 20 && value <= 25) {
    a = 50

  } else if (value > 25) {
    a = 50

  }
  return a
}

function resPercent(percent) {
  let a;

  if (percent <= 1) {
    a = 95
  } else if (percent > 1 && percent <= 5) {
    a = 80
  } else if (percent > 5 && percent <= 10) {

    a = 50
  } else if (percent > 10 && percent <= 15) {

    a = 50
  } else if (percent > 15 && percent <= 20) {

    a = 50
  } else if (percent > 20 && percent <= 25) {

    a = 50
  } else if (percent > 25) {

    a = 40
  }
  return a
}

function resSwitсhTr(value) {
  let a;

  if (value <= 1) {
    a = 80
  } else if (value > 1 && value <= 5) {
    a = 80
  } else if (value > 5 && value <= 10) {
    a = 100
  } else if (value > 10 && value <= 15) {
    a = 100
  } else if (value > 15 && value <= 20) {
    a = 100
  } else if (value > 20 && value <= 25) {
    a = 50
  } else if (value > 25) {
    a = 50
  }
  return a
}


arg_input.oninput = resultArg

tr_input.oninput = resultTr


sortArr.map((a) => {
  const item = document.createElement('li')
  // const arrData = a.data.split('/').reverse('').join('/')
  let res;
  let flag;
  if (a.flag == '🇦🇷') {
    res = resultFromListArg(a.price)
    flag = "🇦🇷"
  } else if (a.flag == '🇹🇷') {
    res = resultFromListTr(a.price)
    flag = "🇹🇷"
  } else {
    res = 'Уточнить стоимость в ЛС'
  }

  item.innerHTML = `${a.name}:${res}&#8381 ${flag} до ${a.date} ${a.status}`
  // 
  list.append(item)
})

function resultFromListArg(price) {
  const value = Number(price) + .1
  const newPrice = value + (value * resPercent(value)) / 100
  const res = newPrice * usd + 50
  const finishRes = res + resSwitсhArg(newPrice)

  return floor(finishRes.toFixed())
}

function resultFromListTr(price) {
  const value = Number(price) + .1
  const res = value * usd + 50
  const finishRes = res + resSwitсhTr(value)

  return floor(finishRes.toFixed())
}
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



