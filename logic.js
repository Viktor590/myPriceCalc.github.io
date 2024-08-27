const arg_input = document.querySelector('.arg-input');
const arg_output = document.querySelector('.arg-output_res');
const arg_output2 = document.querySelector('.arg-output_res2');
const list = document.querySelector('.list')

const tr_input = document.querySelector('.tr-input');
const tr_output = document.querySelector('.tr-output_res');
const tr_output2 = document.querySelector('.tr-output_res2');

const showBtn = document.querySelector('.show')


showBtn.addEventListener('click', () => {
  showBtn.classList.contains('active') ?
    hiddenMenu() : showMenu()
})


let percent;

const arr = [
  { "name": "'n Verlore Verstand", "price": "0.03", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "7th Sector", "price": "0.14", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "80's OVERDRIVE", "price": "0.03", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "88 Heroes", "price": "0.02", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "A Pixel Story", "price": "0.01", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "ACA NEOGEO THE KING OF FIGHTERS '94", "price": "0.08", "flag": "🇦🇷", "date": "12.09", "status": "" },
  { "name": "ACA NEOGEO THE KING OF FIGHTERS '95", "price": "0.08", "flag": "🇦🇷", "date": "12.09", "status": "" },
  { "name": "ACA NEOGEO THE KING OF FIGHTERS '96", "price": "0.08", "flag": "🇦🇷", "date": "12.09", "status": "" },
  { "name": "ACA NEOGEO THE KING OF FIGHTERS '97", "price": "0.08", "flag": "🇦🇷", "date": "12.09", "status": "" },
  { "name": "ACA NEOGEO THE KING OF FIGHTERS '98", "price": "0.08", "flag": "🇦🇷", "date": "12.09", "status": "" },
  { "name": "ACA NEOGEO THE KING OF FIGHTERS '99", "price": "0.08", "flag": "🇦🇷", "date": "12.09", "status": "" },
  { "name": "ACA NEOGEO THE KING OF FIGHTERS 2000", "price": "0.08", "flag": "🇦🇷", "date": "12.09", "status": "" },
  { "name": "ACA NEOGEO THE KING OF FIGHTERS 2001", "price": "0.08", "flag": "🇦🇷", "date": "12.09", "status": "" },
  { "name": "ACA NEOGEO THE KING OF FIGHTERS 2002", "price": "0.08", "flag": "🇦🇷", "date": "12.09", "status": "" },
  { "name": "ACA NEOGEO THE KING OF FIGHTERS 2003", "price": "0.08", "flag": "🇦🇷", "date": "12.09", "status": "" },
  { "name": "ADVERSE", "price": "0.02", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "APFTU", "price": "0.06", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "ASTRONEER", "price": "1.0", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "ASTRONEER: Evolution Edition", "price": "0.55", "flag": "🇦🇷", "date": "02.09", "status": " GP" },
  { "name": "ATLAS (Game Preview)", "price": "0.84", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "ATV Drift & Tricks Definitive Edition", "price": "0.18", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Aaero: Complete Edition", "price": "0.06", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Absolute Deduction bundle", "price": "2.11", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Achtung! Cthulhu Tactics", "price": "0.1", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Aeterna Noctis", "price": "1.08", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "After Us", "price": "7.98", "flag": "🇹🇷", "date": "10.09", "status": " GP" },
  { "name": "Age of Empires 25th Anniversary Collection", "price": "1.65", "flag": "🇦🇷", "date": "30.12", "status": " GP" },
  { "name": "Age of Empires: Definitive Collection", "price": "0.67", "flag": "🇦🇷", "date": "05.10", "status": " GP" },
  { "name": "Agent A: A puzzle in disguise", "price": "0.06", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Airborne Bundle", "price": "0.55", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Aircraft Evolution", "price": "0.05", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Akinofa", "price": "0.03", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Alien: Isolation", "price": "0.9", "flag": "🇦🇷", "date": "28.08", "status": "" },
  { "name": "Almost My Floor (Xbox Series X|S)", "price": "0.07", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Aluna: Sentinel of the Shards", "price": "0.14", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Amnesia: Collection", "price": "0.38", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Amnesia: Rebirth", "price": "0.38", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Amnesia: The Bunker", "price": "0.17", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Among the Sleep - Enhanced Edition", "price": "0.06", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Ancestors: The Humankind Odyssey", "price": "1.66", "flag": "🇹🇷", "date": "10.09", "status": " GP" },
  { "name": "Anima: Gate of Memories - Arcane Edition", "price": "0.07", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Anima: Gate of Memories - The Nameless Chronicles", "price": "0.04", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Anima: Gate of Memories", "price": "0.04", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Anodyne", "price": "0.02", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Another World - 20th Anniversary Edition", "price": "0.02", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Aquarium Land", "price": "0.03", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Ara Fell: Enhanced Edition", "price": "0.08", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Aragami 2", "price": "0.17", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Aragami: Shadow Edition", "price": "0.06", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Arcade Paradise | High Score Edition", "price": "0.38", "flag": "🇦🇷", "date": "01.07", "status": " GP" },
  { "name": "Archaica: The Path Of Light", "price": "0.08", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "As Dusk Falls", "price": "1.07", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Asdivine Dios", "price": "0.1", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Aspire - Ina's Tale", "price": "0.06", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Assassin's Creed® Bundle: Assassin's Creed® Valhalla, Ass...", "price": "46.4", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "Assassin's Creed® Odyssey - DELUXE EDITION", "price": "16.24", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey - GOLD EDITION", "price": "18.56", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Origins - GOLD EDITION", "price": "18.56", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Syndicate", "price": "0.56", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Deluxe Edition", "price": "5.62", "flag": "🇹🇷", "date": "10.09", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Ragnarök Edition", "price": "4.35", "flag": "🇹🇷", "date": "10.09", "status": " GP" },
  { "name": "Assassin’s Creed Mirage Master Assassin Edition", "price": "23.2", "flag": "🇹🇷", "date": "10.09", "status": " GP" },
  { "name": "Assassin’s Creed® Valhalla + Immortals Fenyx Rising™ Bundle", "price": "58.0", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin’s Creed® Valhalla + Watch Dogs®: Legion Bundle", "price": "26.68", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Atomic Heart - Gold Edition", "price": "14.4", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Atomicrops: Reap What You Bundle", "price": "0.09", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Avatar: Frontiers of Pandora™ Ultimate Edition", "price": "31.9", "flag": "🇹🇷", "date": "10.09", "status": " GP" },
  { "name": "Awarded Platformer Bundle", "price": "0.2", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Azure Striker GUNVOLT 2", "price": "0.14", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Azure Striker GUNVOLT", "price": "0.1", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "BATTLETECH Mercenary Collection", "price": "1.24", "flag": "🇦🇷", "date": "13.06", "status": " GP" },
  { "name": "BEB: Super Mega Bundle", "price": "0.05", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "BRUTAL 2URVIVE Bundle", "price": "0.39", "flag": "🇹🇷", "date": "03.09", "status": "" },
  { "name": "Back 4 Blood", "price": "0.6", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Bad North: Jotunn Edition", "price": "0.05", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Baldur's Gate and Baldur's Gate II: Enhanced Editions", "price": "0.34", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Bard's Gold", "price": "0.01", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Barn Finders and Treasure Hunter Simulator Bundle", "price": "0.29", "flag": "🇦🇷", "date": "03.09", "status": " GP" },
  { "name": "Batbarian: Testament of the Primordials", "price": "0.1", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Batman: Arkham Knight Premium Edition", "price": "1.68", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Batman™: Arkham Knight", "price": "0.26", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Battle Axe", "price": "0.13", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Beacon Pines", "price": "0.17", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Beholder 3", "price": "0.14", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Big Moonstone Pack -- 5,500", "price": "3.45", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Billy’s Game Show (Xbox Series X|S)", "price": "0.14", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Billy’s Game Show", "price": "0.14", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "BioShock: The Collection", "price": "1.38", "flag": "🇹🇷", "date": "10.09", "status": " GP" },
  { "name": "Biped", "price": "0.08", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Bite the Bullet", "price": "1.32", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Black Book", "price": "0.17", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Black Legend", "price": "0.68", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Blast Brigade vs. the Evil Legion of Dr. Cread", "price": "3.55", "flag": "🇹🇷", "date": "03.09", "status": "" },
  { "name": "Blood Bowl 3", "price": "2.7", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Blood Waves", "price": "0.07", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Bloodhound", "price": "0.14", "flag": "🇦🇷", "date": "31.08", "status": "" },
  { "name": "Bloodshore", "price": "0.13", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Bloomyth & Strong Moon Bundle", "price": "0.07", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Bombfest", "price": "0.04", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Borderlands 3: Super Deluxe Edition", "price": "3.3", "flag": "🇹🇷", "date": "10.09", "status": " GP" },
  { "name": "BouncyBoi in Puzzle Land", "price": "0.1", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Braid, Anniversary Edition", "price": "0.85", "flag": "🇦🇷", "date": "03.09", "status": " GP" },
  { "name": "Bravery and Greed", "price": "0.27", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Breakers Collection", "price": "1.08", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Bright Side: Riddles and Puzzles", "price": "0.04", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Broken Pieces", "price": "0.17", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Broken Universe - Tower Defense", "price": "0.04", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Brunswick Pro Billiards", "price": "0.14", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Bugsnax", "price": "0.13", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Builder Flipper bundle", "price": "0.58", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Bundle Epopeia Puzzle Games", "price": "0.06", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "C14 Dating", "price": "0.1", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Cake Bash", "price": "0.12", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Call of the Sea", "price": "0.14", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Call of the Wild: The Angler™ - Gold Fishing Bundle", "price": "0.69", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Call of the Wild: The Angler™ - Ultimate Fishing Bundle", "price": "0.82", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Call of the Wild: The Angler™", "price": "0.26", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Capcom Beat 'Em Up Bundle", "price": "1.02", "flag": "🇹🇷", "date": "03.09", "status": "" },
  { "name": "Capcom Fighting Bundle", "price": "11.48", "flag": "🇹🇷", "date": "03.09", "status": "" },
  { "name": "Capcom Fighting Collection", "price": "9.28", "flag": "🇹🇷", "date": "03.09", "status": "" },
  { "name": "Captain Velvet Meteor: The Jump+ Dimensions", "price": "0.83", "flag": "🇹🇷", "date": "03.09", "status": "" },
  { "name": "Castle of no Escape 1+2 Bundle", "price": "0.07", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Castle of no Escape 2", "price": "0.06", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Castle of no Escape", "price": "0.03", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Chickens Madness", "price": "0.09", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Child of Light® Ultimate Edition", "price": "0.11", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Cinders", "price": "0.07", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Cities: Skylines - Mayor's Edition", "price": "0.72", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Cities: Skylines - Premium Edition 2", "price": "0.96", "flag": "🇦🇷", "date": "01.04", "status": " GP" },
  { "name": "Citizen Sleeper", "price": "0.17", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Claire: Extended Cut", "price": "0.04", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Cluedo black Adder Edition", "price": "0.16", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Cluedo", "price": "0.11", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Colorful Colore (for Windows 10)", "price": "0.02", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Colorful Colore", "price": "0.02", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Commandos 2 & Praetorians: HD Remaster Double Pack", "price": "0.26", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Conan Exiles - Complete Edition October 2021", "price": "2.21", "flag": "🇦🇷", "date": "01.12", "status": " GP" },
  { "name": "Conan Exiles - Isle of Siptah Edition", "price": "0.95", "flag": "🇦🇷", "date": "01.12", "status": " GP" },
  { "name": "Construction Simulator", "price": "1.65", "flag": "🇹🇷", "date": "10.09", "status": " GP" },
  { "name": "Crackdown 3", "price": "3.77", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "Crawl", "price": "0.05", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Creaks", "price": "1.95", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Creatura", "price": "0.07", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Creepy Tale 2", "price": "0.38", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Creepy Tale", "price": "0.05", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Creepy Tale: Ingrid Penance", "price": "0.1", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Crimson Dragon", "price": "0.04", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Crossroads Inn", "price": "4.32", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Crusader Kings III: Royal Edition", "price": "1.03", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Cruz Brothers", "price": "0.28", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Cuccchi", "price": "0.04", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Curious Expedition 2 Bundle", "price": "0.17", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Cursed to Golf", "price": "0.14", "flag": "🇦🇷", "date": "03.09", "status": " GP" },
  { "name": "Cyber Edition", "price": "0.8", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "D4: Dark Dreams Don't Die", "price": "0.04", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "DAS WIRED-HORROR-SPIELPAKET", "price": "0.55", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "DEAD ISLAND 2 DELUXE EDITION", "price": "21.72", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "DEAD ISLAND 2 GOLD EDITION", "price": "20.86", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "DEAD OR ALIVE 5 Last Round (Full Game)", "price": "1.16", "flag": "🇹🇷", "date": "03.09", "status": "" },
  { "name": "DEAD OR ALIVE 6 (Full Game)", "price": "7.53", "flag": "🇹🇷", "date": "03.09", "status": "" },
  { "name": "DEATHLOOP Deluxe Edition", "price": "15.08", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "DOOM Eternal Deluxe Edition", "price": "13.92", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "DOOM Eternal: The Ancient Gods - Part One", "price": "4.93", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "DOOM Eternal: The Ancient Gods - Part Two", "price": "4.93", "flag": "🇹🇷", "date": "17.03", "status": " GP" },
  { "name": "DOOM Eternal: Year One Pass (PC)", "price": "7.44", "flag": "🇹🇷", "date": "03.12", "status": " GP" },
  { "name": "DOOM Eternal: Year One Pass", "price": "7.44", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "DRAGON BALL FIGHTERZ", "price": "1.08", "flag": "🇹🇷", "date": "02.09", "status": "" },
  { "name": "DRAGON BALL THE BREAKERS", "price": "0.74", "flag": "🇹🇷", "date": "02.09", "status": "" },
  { "name": "DRAGON BALL XENOVERSE 2 - Special Edition", "price": "10.86", "flag": "🇹🇷", "date": "02.09", "status": "" },
  { "name": "DRAGON BALL XENOVERSE 2", "price": "0.65", "flag": "🇹🇷", "date": "02.09", "status": "" },
  { "name": "DRAGON BALL XENOVERSE Super Bundle", "price": "1.37", "flag": "🇹🇷", "date": "02.09", "status": "" },
  { "name": "DRAGON BALL Z: KAKAROT Legendary Edition", "price": "15.65", "flag": "🇹🇷", "date": "10.09", "status": " GP" },
  { "name": "DREAMERS Digital Deluxe Bundle", "price": "0.28", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "DREAMERS", "price": "1.02", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Dakar Desert Rally - Deluxe Edition", "price": "3.07", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Dakar Desert Rally", "price": "2.4", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Day of the Tentacle Remastered", "price": "0.39", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Dead Cells: Medley of Pain Bundle", "price": "0.55", "flag": "🇦🇷", "date": "16.09", "status": " GP" },
  { "name": "Dead Cells: Return to Castlevania Bundle", "price": "0.43", "flag": "🇦🇷", "date": "16.09", "status": " GP" },
  { "name": "Dead Rising 2", "price": "2.91", "flag": "🇹🇷", "date": "11.09", "status": "" },
  { "name": "Dead Rising 3: Apocalypse Edition", "price": "1.2", "flag": "🇹🇷", "date": "11.09", "status": "" },
  { "name": "Dead Rising 4", "price": "3.48", "flag": "🇹🇷", "date": "11.09", "status": "" },
  { "name": "Death Park Bundle", "price": "0.19", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Death Road to Canada", "price": "0.05", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Death Squared", "price": "0.04", "flag": "🇦🇷", "date": "03.09", "status": " GP" },
  { "name": "Deep Diving Adventures", "price": "0.03", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Deep Rock Galactic - Deluxe Edition", "price": "0.55", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Deep Rock Galactic - Ultimate Edition", "price": "0.69", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Deep Rock Galactic", "price": "0.13", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Deep Sky Derelicts: Definitive edition", "price": "0.09", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Desert Child", "price": "0.04", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Despotism 3k", "price": "0.07", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Deus Ex: Mankind Divided - Digital Deluxe Edition", "price": "3.47", "flag": "🇹🇷", "date": "10.09", "status": " GP" },
  { "name": "Dex", "price": "0.05", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Diablo® IV", "price": "30.14", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Die for Valhalla!", "price": "0.03", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Dig Deep", "price": "0.03", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Dishonored & Prey: The Arkane Collection", "price": "14.5", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "Dishonored®: Death of the Outsider™ Deluxe Bundle", "price": "11.54", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "Disintegration", "price": "1.71", "flag": "🇹🇷", "date": "10.09", "status": " GP" },
  { "name": "Disney Dreamlight Valley: A Rift in Time", "price": "0.4", "flag": "🇦🇷", "date": "01.09", "status": "" },
  { "name": "Disney Dreamlight Valley: A Rift in Time", "price": "0.52", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Disneyland Adventures", "price": "1.63", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "Dofamine", "price": "0.05", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Dogos", "price": "0.03", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Dolby Atmos for Headphones", "price": "0.19", "flag": "🇦🇷", "date": "11.09", "status": "" },
  { "name": "Don't Knock Twice", "price": "0.1", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Don't Starve Together: Console Edition", "price": "0.06", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Doom & Destiny Worlds", "price": "0.1", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Double Cross", "price": "1.89", "flag": "🇹🇷", "date": "03.09", "status": "" },
  { "name": "Down in Bermuda", "price": "0.09", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Dragon Ball Xenoverse + Season Pass", "price": "0.92", "flag": "🇹🇷", "date": "02.09", "status": "" },
  { "name": "Dragon's Lair Trilogy", "price": "0.14", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Drawful 2", "price": "0.05", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Dungeons 4 - Digital Deluxe Edition", "price": "13.44", "flag": "🇦🇷", "date": "16.11", "status": " GP" },
  { "name": "Dying Light: The Following - Enhanced Edition", "price": "5.4", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Dynamite Fishing - World Games", "price": "0.01", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "EVERSPACE™ 2", "price": "1.7", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "EVERSPACE™", "price": "0.34", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Elemental War TD", "price": "0.51", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Encodya", "price": "0.05", "flag": "🇦🇷", "date": "03.09", "status": " GP" },
  { "name": "Endzone - A World Apart: Complete Edition", "price": "1.2", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Enter The Gungeon", "price": "0.08", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Envasion", "price": "0.02", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Epic Chef", "price": "0.72", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Escape Academy Deluxe Edition", "price": "0.48", "flag": "🇦🇷", "date": "02.09", "status": " GP" },
  { "name": "Escape Dead Island", "price": "0.05", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Escape Game - FORT BOYARD 2022", "price": "0.13", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Etherborn", "price": "0.09", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Everhood: Eternity Edition", "price": "0.37", "flag": "🇹🇷", "date": "03.09", "status": "" },
  { "name": "Evil Dead: The Game - Game of the Year Edition", "price": "3.07", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Evil Dead: The Game", "price": "2.4", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Exo One", "price": "0.07", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "F1® Manager 2023 Deluxe Edition", "price": "14.4", "flag": "🇦🇷", "date": "16.10", "status": " GP" },
  { "name": "F1® Manager 2024", "price": "16.82", "flag": "🇹🇷", "date": "06.09", "status": "" },
  { "name": "FAR: Lone Sails", "price": "0.05", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "FOR HONOR – Gold Edition", "price": "23.2", "flag": "🇹🇷", "date": "03.09", "status": "" },
  { "name": "FOR HONOR – Ultimate Edition", "price": "37.12", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Fallen Knight", "price": "0.08", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Falling Out", "price": "0.07", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Fallout 4: Game of the Year Edition (PC)", "price": "6.61", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "Fallout 4: Game of the Year Edition", "price": "6.61", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "Fallout 76: Skyline Valley Deluxe Edition", "price": "11.52", "flag": "🇦🇷", "date": "30.12", "status": " GP" },
  { "name": "Far Cry Primal - Apex Edition", "price": "0.71", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Far Cry® 5 + Far Cry® New Dawn Deluxe Edition Bundle", "price": "3.36", "flag": "🇦🇷", "date": "01.07", "status": " GP" },
  { "name": "Far Cry® 6 Deluxe Edition", "price": "17.98", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Far Cry® 6 Game of the Year Edition", "price": "22.04", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Far Cry® 6", "price": "4.35", "flag": "🇹🇷", "date": "10.09", "status": " GP" },
  { "name": "Far Cry® New Dawn", "price": "0.36", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Far Cry®5 Gold Edition", "price": "3.17", "flag": "🇦🇷", "date": "01.07", "status": " GP" },
  { "name": "Farm Builder", "price": "0.06", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Farm Bundle", "price": "0.55", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Farm Pets Bundle", "price": "0.82", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Farm for your Life", "price": "0.09", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Farming Life", "price": "0.14", "flag": "🇦🇷", "date": "05.09", "status": "" },
  { "name": "Feist", "price": "0.02", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Fell Seal: Arbiter's Mark", "price": "0.13", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Fight'N Rage", "price": "0.49", "flag": "🇹🇷", "date": "03.09", "status": "" },
  { "name": "Figment 2: Creed Valley", "price": "0.06", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Figment: Journey Into the Mind", "price": "0.09", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Final Vendetta", "price": "0.85", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Firegirl: Hack 'n Splash Rescue DX", "price": "0.31", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Fishing Adventure", "price": "0.03", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Fishing: Barents Sea Complete Edition", "price": "3.24", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Five Dates", "price": "0.11", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Flailing Limbs Bundle", "price": "0.24", "flag": "🇦🇷", "date": "01.08", "status": " GP" },
  { "name": "Flashback", "price": "0.12", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Flat Heroes", "price": "0.09", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Flewfie's Adventure", "price": "0.08", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Flintlock – Deluxe Edition", "price": "21.28", "flag": "🇦🇷", "date": "16.10", "status": " GP" },
  { "name": "Flippin Kaktus", "price": "0.06", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Floppy Knights", "price": "0.09", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Flying Soldiers", "price": "0.21", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Forklift Extreme: Deluxe Edition", "price": "0.08", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Forza Horizon 5 PLUS Hot Wheels Bundle", "price": "10.37", "flag": "🇦🇷", "date": "30.12", "status": " GP" },
  { "name": "From Space Resistance Bundle", "price": "1.92", "flag": "🇦🇷", "date": "16.10", "status": " GP" },
  { "name": "From Space", "price": "0.54", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Frostpunk: Complete Collection", "price": "0.62", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Frostpunk: Console Edition", "price": "0.1", "flag": "🇦🇷", "date": "01.09", "status": "" },
  { "name": "Full Throttle Remastered", "price": "0.39", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Gang Beasts", "price": "0.1", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Garden Bundle", "price": "0.62", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Garden Life", "price": "7.24", "flag": "🇹🇷", "date": "10.09", "status": " GP" },
  { "name": "Garden Simulator", "price": "0.18", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Garden Story", "price": "0.14", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Gas Station Simulator and Airstrip DLC Bundle", "price": "0.33", "flag": "🇦🇷", "date": "03.09", "status": " GP" },
  { "name": "Gas Station Simulator and Can Touch This DLC Bundle", "price": "0.29", "flag": "🇦🇷", "date": "03.09", "status": " GP" },
  { "name": "Gas Station Simulator, Airstrip DLC and Can Touch This DLC Bundle", "price": "0.39", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Gears of War 4 and Halo 5: Guardians Bundle", "price": "0.38", "flag": "🇦🇷", "date": "31.01", "status": " GP" },
  { "name": "Gears of War Ultimate Edition Deluxe Version", "price": "1.25", "flag": "🇦🇷", "date": "31.05", "status": " GP" },
  { "name": "Gearshifters", "price": "0.12", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Generation Zero ® - Essential DLC Bundle", "price": "0.17", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Generation Zero ® - Silver Bundle", "price": "0.69", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Generation Zero ® - Ultimate Bundle", "price": "0.96", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Generation Zero®", "price": "0.38", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Genesis Noir", "price": "0.08", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Genetic Disaster", "price": "0.05", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Geometric Sniper", "price": "0.02", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Get Packed", "price": "0.09", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Ghostbusters: The Video Game Remastered", "price": "0.18", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Ghostwire: Tokyo Deluxe Edition", "price": "17.98", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "GigaBash", "price": "1.36", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Goat Simulator 3 - Multiversal Traveler's Edition", "price": "0.55", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Goat Simulator 3", "price": "0.72", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Goat Simulator: The GOATY", "price": "0.29", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Goat Simulator: Waste Of Space Bundle", "price": "0.13", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "God of Rock", "price": "0.52", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Godstrike", "price": "0.42", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Golazo!", "price": "0.04", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Golf With Your Friends - Starter Edition", "price": "17.28", "flag": "🇦🇷", "date": "16.07", "status": " GP" },
  { "name": "Golf With Your Friends - Ultimate Edition", "price": "19.56", "flag": "🇹🇷", "date": "10.09", "status": " GP" },
  { "name": "Gord - Deluxe Edition", "price": "6.62", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Goroons", "price": "0.03", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Grand Theft Auto V", "price": "6.37", "flag": "🇹🇷", "date": "10.09", "status": " GP" },
  { "name": "Grand Theft Auto V: Premium Edition", "price": "2.39", "flag": "🇹🇷", "date": "10.09", "status": " GP" },
  { "name": "Graze Counter GM", "price": "0.6", "flag": "🇦🇷", "date": "03.09", "status": " GP" },
  { "name": "Greak: Memories of Azur", "price": "0.27", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Greed: The Mad Scientist", "price": "0.14", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Griftlands", "price": "0.14", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Grim Fandango Remastered", "price": "0.39", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Guntech 2", "price": "0.34", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Gunvolt Chronicles: Luminous Avenger iX", "price": "0.1", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "HITMAN™ 2", "price": "1.51", "flag": "🇦🇷", "date": "04.02", "status": "" },
  { "name": "Habroxia 2", "price": "0.04", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Habroxia", "price": "0.03", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Halo 5: Guardians – Digital Deluxe Edition", "price": "6.24", "flag": "🇦🇷", "date": "31.05", "status": " GP" },
  { "name": "Halo Wars 2: Complete Edition", "price": "23.2", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Happy Words", "price": "0.07", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Hard Platformers Pack: Super Cyborg and Dead Dungeon", "price": "0.05", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Hard West Ultimate Edition", "price": "0.03", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "HardCube + Mystery Mine Bundle", "price": "0.03", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Harmony: The Fall of Reverie", "price": "1.02", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Harvest Life", "price": "0.21", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Heads Up! Phones Down Edition", "price": "0.66", "flag": "🇹🇷", "date": "03.09", "status": "" },
  { "name": "Heart&Slash", "price": "0.04", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Heavy Burden", "price": "0.05", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Hello Neighbor 2 Deluxe Edition", "price": "5.28", "flag": "🇦🇷", "date": "16.12", "status": " GP" },
  { "name": "Hexapoda", "price": "0.08", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Hi-Fi RUSH Deluxe Edition", "price": "13.92", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Hindsight 20/20 - Wrath of the Raakshasa", "price": "0.06", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Hokko Life", "price": "0.27", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Home Sweet Home", "price": "0.08", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Hourglass", "price": "0.38", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Hovership Havoc", "price": "0.03", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Huge Moonstone Pack -- 14,500", "price": "8.64", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Huntdown", "price": "0.07", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "HyperDot", "price": "0.14", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Hypnospace Outlaw & Slayers X: Terminal Aftermath: Vengance of the Slayer Bundle", "price": "0.46", "flag": "🇦 🇷", "date": "01.06", "status": " GP" },
  { "name": "Hypnospace Outlaw", "price": "0.12", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "IIN", "price": "0.03", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "INSIDE & LIMBO Bundle", "price": "2.42", "flag": "🇦🇷", "date": "01.08", "status": " GP" },
  { "name": "Ikonei Island: An Earthlock Adventure", "price": "0.82", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Immortal Planet", "price": "0.08", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Industry Giant 2", "price": "0.12", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Infected Cowboys Bundle", "price": "12.47", "flag": "🇹🇷", "date": "04.09", "status": "" },
  { "name": "Infini", "price": "0.21", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Injustice™ 2 - Legendary Edition", "price": "1.82", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Injustice™ 2", "price": "0.18", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Insurgency: Sandstorm - Gold Edition", "price": "24.0", "flag": "🇦🇷", "date": "16.01", "status": " GP" },
  { "name": "Insurgency: Sandstorm - Ultimate Edition", "price": "27.84", "flag": "🇦🇷", "date": "16.01", "status": " GP" },
  { "name": "Into The Sky", "price": "0.1", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Ion Fury", "price": "0.11", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Islets", "price": "0.85", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Isonzo: Collector's Edition", "price": "0.82", "flag": "🇦🇷", "date": "16.06", "status": " GP" },
  { "name": "Isonzo: Deluxe Edition", "price": "0.55", "flag": "🇦🇷", "date": "02.09", "status": " GP" },
  { "name": "Isonzo: Ultimate Edition", "price": "67.2", "flag": "🇦🇷", "date": "16.06", "status": " GP" },
  { "name": "Istanbul: Digital Edition", "price": "0.68", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Itorah", "price": "0.1", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Jalopy", "price": "0.08", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Jet Kave Adventure", "price": "0.19", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Jetboard Joust", "price": "0.09", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Jorel’s Brother and The Most Important Game of the Galaxy Complete Edition", "price": "0.44", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Jotun: Valhalla Edition", "price": "0.04", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Jujutsu Kaisen Cursed Clash Ultimate Edition", "price": "30.43", "flag": "🇹🇷", "date": "02.09", "status": "" },
  { "name": "Jujutsu Kaisen Cursed Clash", "price": "20.72", "flag": "🇹🇷", "date": "02.09", "status": "" },
  { "name": "Jump King", "price": "0.09", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Kanjozoku Game - レーサーCar Racing & Highway Driving Simulator Games", "price": "0.09", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Keep Talking and Nobody Explodes", "price": "0.13", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Kerbal Space Program Enhanced Edition", "price": "1.28", "flag": "🇹🇷", "date": "10.09", "status": " GP" },
  { "name": "Killer Instinct: Anniversary Edition", "price": "2.88", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "King of Seas", "price": "0.09", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Kingdom Come: Deliverance - Royal Edition", "price": "2.4", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Kingdom Come: Deliverance", "price": "0.52", "flag": "🇹🇷", "date": "03.09", "status": "" },
  { "name": "Kitaria Fables: Deluxe Edition", "price": "0.1", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Kitten Island", "price": "0.02", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "LEGO Marvel Super Heroes", "price": "0.13", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "LEGO® 2K Drive Awesome Rivals Edition", "price": "52.18", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "LEGO® Bricktales", "price": "0.23", "flag": "🇦🇷", "date": "03.09", "status": " GP" },
  { "name": "LEGO® CITY Undercover", "price": "0.24", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "LEGO® The Hobbit™", "price": "0.39", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "LIT: Bend the Light", "price": "0.06", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Lamentum", "price": "0.54", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Landflix Odyssey", "price": "0.04", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Last Days of Lazarus", "price": "0.1", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Last Oasis (Game Preview)", "price": "0.84", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Leisure Suit Larry - Wet Dreams Saga Bundle", "price": "0.31", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Let's Build a Zoo & Dinosaur DLC Bundle", "price": "0.37", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "Let's Build a Zoo", "price": "0.14", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Let's Build a Zoo: Aquarium Odyssey Bundle", "price": "0.37", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "Let's Build a Zoo: Ultimate Bundle", "price": "0.46", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "Liftoff: Drone Racing Deluxe Edition", "price": "0.74", "flag": "🇹🇷", "date": "03.09", "status": "" },
  { "name": "Light & Dark Bundle", "price": "1.92", "flag": "🇦🇷", "date": "02.11", "status": "" },
  { "name": "Like a Dragon: Ishin! Digital Deluxe Edition", "price": "25.5", "flag": "🇹🇷", "date": "16.10", "status": " GP" },
  { "name": "Little Mouse's Encyclopedia", "price": "0.04", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Lock's Quest", "price": "0.05", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Loco Parentis", "price": "0.07", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Lonely Mountains: Downhill - Eldfjall Island", "price": "0.32", "flag": "🇦🇷", "date": "01.11", "status": " GP" },
  { "name": "Long Ago: A Puzzle Tale", "price": "0.21", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Lost Ember", "price": "0.15", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Lotus Reverie: First Nexus", "price": "0.05", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Lou's Revenge", "price": "0.11", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Lovers in a Dangerous Spacetime", "price": "0.09", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Luckslinger", "price": "0.03", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "LumbearJack", "price": "0.39", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Luxury Garden Bundle", "price": "0.82", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "MARVEL VS. CAPCOM: INFINITE", "price": "0.81", "flag": "🇹🇷", "date": "03.09", "status": "" },
  { "name": "MLB® The Show™ 24 - Digital Deluxe Edition", "price": "23.2", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "MLB® The Show™ 24 - MVP Edition", "price": "19.72", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "MLB® The Show™ 24 - Xbox One Standard Edition", "price": "5.74", "flag": "🇹🇷", "date": "10.09", "status": " GP" },
  { "name": "MLB® The Show™ 24 - Xbox Series X|S Standard Edition", "price": "13.07", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "MY HERO ONE'S JUSTICE 2 Deluxe Edition", "price": "7.97", "flag": "🇹🇷", "date": "02.09", "status": "" },
  { "name": "Machinarium & Creaks Bundle", "price": "3.0", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Machinarium", "price": "1.56", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "MageQuit", "price": "0.13", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Magnetic: Cage Closed", "price": "0.02", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Manifold Garden", "price": "0.14", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Marble It Up! Ultra", "price": "0.21", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Mark of the Ninja: Remastered", "price": "0.06", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Marvel vs. Capcom: Infinite - Deluxe Edition", "price": "1.21", "flag": "🇹🇷", "date": "03.09", "status": "" },
  { "name": "Max: The Curse of Brotherhood", "price": "1.13", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "Maze Blaze", "price": "0.02", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Mech Armada", "price": "0.07", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Mech Mechanic Simulator", "price": "0.1", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "MechWarrior 5: Mercenaries - JumpShip Edition", "price": "0.82", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "MechWarrior 5: Mercenaries", "price": "0.21", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Megaquarium", "price": "0.17", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Megaton Rainfall", "price": "0.1", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Mekorama", "price": "0.02", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Memory Link", "price": "0.08", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Metal: Hellsinger - Complete Edition", "price": "0.56", "flag": "🇦🇷", "date": "03.09", "status": " GP" },
  { "name": "Microsoft 365 Family", "price": "0.0", "flag": "🇦🇷", "date": "30.11", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.0", "flag": "🇹🇷", "date": "30.11", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.0", "flag": "🇦🇷", "date": "30.11", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.0", "flag": "🇹🇷", "date": "30.11", "status": "" },
  { "name": "Middle-earth™: Shadow of War™ Definitive Edition", "price": "1.92", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Middle-earth™: The Shadow Bundle", "price": "5.76", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Mighty Switch Force! Collection", "price": "0.12", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Milky Way Prince - The Vampire Star", "price": "0.08", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Mini Madness", "price": "0.03", "flag": "🇦🇷", "date": "03.09", "status": " GP" },
  { "name": "Mittelborg: City of Mages", "price": "0.05", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Monster Energy Supercross - The Official Videogame 2", "price": "0.24", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Monster Energy Supercross 2 - Special Edition", "price": "0.48", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Monster Sanctuary", "price": "0.27", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Monster Train", "price": "0.15", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Monster Truck Championship - Rebel Hunter Edition", "price": "0.17", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Moo Lander", "price": "0.12", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Moon Raider", "price": "0.05", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Moonlighter: Complete Edition", "price": "0.33", "flag": "🇦🇷", "date": "01.12", "status": " GP" },
  { "name": "Moonshine Inc + Ruinarch - Bad Habits Bundle", "price": "1.87", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Morkredd - Ra Edition", "price": "0.16", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Mortal Kombat 11 Ultimate + Injustice 2 Leg. Edition Bundle", "price": "19.93", "flag": "🇹🇷", "date": "16.12", "status": " GP" },
  { "name": "Mortal Kombat 11", "price": "0.27", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Mortal Kombat X", "price": "0.26", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Moto Racer 4", "price": "0.18", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Murder on the Marine Express", "price": "0.02", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Mushroom Savior (For Windows 10)", "price": "0.03", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "My Child Lebensborn Remastered", "price": "0.09", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "My Fantastic Ranch", "price": "2.16", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "My Friend Peppa Pig - Complete Edition", "price": "5.28", "flag": "🇦🇷", "date": "01.07", "status": " GP" },
  { "name": "My Memory of Us", "price": "0.09", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "My Time at Portia Deluxe Edition", "price": "1.34", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "My Time at Sandrock Deluxe Edition", "price": "0.69", "flag": "🇦🇷", "date": "16.06", "status": " GP" },
  { "name": "MyMaitê (for Windows 10)", "price": "0.02", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "MyMaitê", "price": "0.02", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Mystik Belle", "price": "0.06", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "N++ (NPLUSPLUS)", "price": "0.09", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "NARUTO SHIPPUDEN: Ultimate Ninja STORM Legacy", "price": "3.25", "flag": "🇹🇷", "date": "02.09", "status": "" },
  { "name": "NARUTO SHIPPUDEN™: Ultimate Ninja® STORM 4", "price": "0.89", "flag": "🇹🇷", "date": "02.09", "status": "" },
  { "name": "NARUTO TO BORUTO: SHINOBI STRIKER Ultimate Edition", "price": "12.17", "flag": "🇹🇷", "date": "02.09", "status": "" },
  { "name": "NARUTO X BORUTO Ultimate Ninja STORM CONNECTIONS Ultimate Edition", "price": "30.43", "flag": "🇹🇷", "date": "02.09", "status": "" },
  { "name": "NARUTO™: Ultimate Ninja® STORM", "price": "0.52", "flag": "🇹🇷", "date": "02.09", "status": "" },
  { "name": "NBA 2K24 Baller Edition", "price": "40.58", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "NBA 2K24 Black Mamba Edition", "price": "44.08", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "Narita Boy", "price": "0.72", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Neverwinter Nights: Enhanced Edition", "price": "0.26", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Newt One", "price": "0.03", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Niche - a genetics survival game", "price": "0.14", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Nickelodeon Kart Racers 2: Grand Prix", "price": "0.3", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Ninja Shodown", "price": "0.02", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.04", "flag": "🇦🇷", "date": "30.05", "status": "" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "3.94", "flag": "🇹🇷", "date": "16.03", "status": " GP" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "4.42", "flag": "🇦🇷", "date": "16.03", "status": " GP" },
  { "name": "Nowhere Prophet", "price": "0.11", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "ONE PIECE: PIRATE WARRIORS 4 Ultimate Edition (Xbox One)", "price": "13.05", "flag": "🇹🇷", "date": "10.09", "status": " GP" },
  { "name": "Octahedron", "price": "0.09", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Octodad: Dadliest Catch", "price": "0.04", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Ogre: Console Edition", "price": "0.16", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Old Man's Journey", "price": "0.04", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "OlliOlli World", "price": "2.73", "flag": "🇹🇷", "date": "10.09", "status": " GP" },
  { "name": "Omno", "price": "0.05", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "One Hundred Ways", "price": "0.21", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Operation: Tango", "price": "0.15", "flag": "🇦🇷", "date": "03.09", "status": " GP" },
  { "name": "Orbital Bullet", "price": "0.07", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Ori and the Blind Forest: Definitive Edition", "price": "2.64", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Out of Line", "price": "0.31", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Outbreak Palladium Collection", "price": "0.38", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Outbreak: Cold Comfort Collection", "price": "0.94", "flag": "🇦🇷", "date": "03.09", "status": " GP" },
  { "name": "Outbreak: Contagious Memories", "price": "0.13", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Overcooked! 2 - Gourmet Edition", "price": "0.54", "flag": "🇦🇷", "date": "16.12", "status": " GP" },
  { "name": "Overcooked", "price": "0.06", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Overdriven Evolution", "price": "0.08", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Overland by Finji", "price": "0.14", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Overpass 2", "price": "3.36", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Oxide Room 104", "price": "0.41", "flag": "🇹🇷", "date": "03.09", "status": "" },
  { "name": "PAC-MAN Mega Tunnel Battle: Chomp Champs - Deluxe Edition", "price": "11.68", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "PBA Pro Bowling", "price": "0.1", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "PGA TOUR 2K23 Deluxe Edition", "price": "7.97", "flag": "🇹🇷", "date": "10.09", "status": " GP" },
  { "name": "PUSS!", "price": "0.06", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Paper Cut Mansion", "price": "0.14", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Paperman: Adventure Delivered", "price": "0.17", "flag": "🇦🇷", "date": "03.09", "status": " GP" },
  { "name": "Paradise Killer", "price": "0.1", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Paradise Marsh", "price": "0.13", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Party Friends", "price": "0.03", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Pathfinder: Kingmaker - Definitive Edition", "price": "0.43", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Paw Paw Paw", "price": "0.09", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Pets Bundle", "price": "0.62", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Phoenix Point: Behemoth Edition", "price": "0.41", "flag": "🇦🇷", "date": "30.12", "status": " GP" },
  { "name": "Pile Up! Box by Box", "price": "0.41", "flag": "🇹🇷", "date": "10.09", "status": " GP" },
  { "name": "PixARK", "price": "0.85", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Pixel Cafe", "price": "0.07", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Pixel Soccer", "price": "0.31", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Planescape: Torment and Icewind Dale: Enhanced Editions", "price": "0.3", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Planet Alpha", "price": "0.27", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Planet Cube: Edge", "price": "0.09", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Please Fix The Road", "price": "0.12", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Pool Party", "price": "0.26", "flag": "🇦🇷", "date": "03.09", "status": " GP" },
  { "name": "Potata: fairy flower (Xbox Series X|S)", "price": "0.08", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Power Rangers: Battle for the Grid - Digital Collector's Edition", "price": "0.21", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Power Rangers: Battle for the Grid Super Edition", "price": "0.34", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Power Rangers: Battle for the Grid", "price": "0.14", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Praey for the Gods", "price": "0.17", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Prey®: Digital Deluxe Edition", "price": "6.61", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "Prison Architect: Total Lockdown Bundle", "price": "0.26", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Pro Gymnast Simulator", "price": "0.09", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Project Root", "price": "0.17", "flag": "🇹🇷", "date": "10.09", "status": " GP" },
  { "name": "PuzzlePet - Feed Your Cat", "price": "0.06", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Quack Jump", "price": "0.07", "flag": "🇦🇷", "date": "29.08", "status": "" },
  { "name": "Quantum Break", "price": "11.6", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "Quern - Undying Thoughts", "price": "0.13", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Quiplash", "price": "0.05", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "RAGE 2: Deluxe Edition", "price": "10.44", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "REMOTE LIFE", "price": "0.09", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "RISK", "price": "0.05", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "RPG Time: The Legend of Wright", "price": "0.6", "flag": "🇦🇷", "date": "03.09", "status": " GP" },
  { "name": "Railway Empire", "price": "0.14", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "ReCore", "price": "2.4", "flag": "🇦🇷", "date": "", "status": "" },
  { "name": "Realms of Arkania: Blade of Destiny", "price": "0.13", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Realms of Arkania: Star Trail", "price": "0.13", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Realpolitiks New Power", "price": "0.04", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Red Dead Redemption & Red Dead Redemption 2 Bundle", "price": "8.16", "flag": "🇹🇷", "date": "10.09", "status": " GP" },
  { "name": "Redout 2 - Deluxe Edition", "price": "2.25", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Redout 2", "price": "1.5", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Regalia: Of Men and Monarchs - Royal Edition", "price": "0.09", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Regular Moonstone Pack -- 2,500", "price": "1.73", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Remnant II - Ultimate Edition", "price": "6.72", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Remnant: From the Ashes - Complete Edition", "price": "1.44", "flag": "🇦🇷", "date": "30.08", "status": " GP" },
  { "name": "Rento Fortune", "price": "0.05", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Retro Machina", "price": "0.51", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "RetroMania Wrestling", "price": "0.21", "flag": "🇦🇷", "date": "03.09", "status": " GP" },
  { "name": "Rise Eterna War", "price": "0.15", "flag": "🇦🇷", "date": "29.08", "status": "" },
  { "name": "Rise of Nations: Extended Edition", "price": "0.6", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Road to Guangdong", "price": "0.07", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Robolifter (For Windows 10)", "price": "0.06", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Rock 'N Racing Off Road", "price": "0.05", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Rock of Ages 2: Bigger & Boulder™", "price": "0.27", "flag": "🇹🇷", "date": "28.08", "status": "" },
  { "name": "Rollerdrome", "price": "3.63", "flag": "🇹🇷", "date": "10.09", "status": " GP" },
  { "name": "Roommates Visual Novel", "price": "0.1", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Rubberduck Wave Racer", "price": "0.21", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Ruinarch + Legend of Keepers - Overlord Bundle", "price": "14.33", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Ruinarch", "price": "1.36", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Run Sausage Run!", "price": "0.03", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Ryse: Legendary Edition", "price": "5.08", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "SEGA® Genesis Classics™", "price": "0.85", "flag": "🇹🇷", "date": "28.08", "status": "" },
  { "name": "SINNER: Sacrifice for Redemption", "price": "0.13", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "SOMA", "price": "0.38", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "SONIC FORCES™ Digital Standard Edition", "price": "2.9", "flag": "🇹🇷", "date": "28.08", "status": "" },
  { "name": "SOULCALIBUR VI Deluxe Edition", "price": "2.09", "flag": "🇹🇷", "date": "02.09", "status": "" },
  { "name": "SOULVARS", "price": "0.06", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "STAB STAB STAB!", "price": "0.06", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "2.05", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "1.54", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "STELLATUM", "price": "0.07", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "SUPERHOT ONE OF US BUNDLE", "price": "0.65", "flag": "🇦🇷", "date": "01.04", "status": " GP" },
  { "name": "SUPERHOT", "price": "0.09", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "SUPERHOT: MIND CONTROL DELETE", "price": "0.29", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "SWORD ART ONLINE Alicization Lycoris Deluxe Edition", "price": "3.01", "flag": "🇹🇷", "date": "03.09", "status": " GP" },
  { "name": "SWORD ART ONLINE Alicization Lycoris", "price": "8.67", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "SWORD ART ONLINE Last Recollection Deluxe Edition", "price": "36.95", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "SWORD ART ONLINE Last Recollection", "price": "26.07", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "SWORD ART ONLINE: FATAL BULLET Complete Edition", "price": "1.31", "flag": "🇹🇷", "date": "03.09", "status": " GP" },
  { "name": "Sable", "price": "0.15", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Sacrifice Your Friends", "price": "0.1", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Save Koch", "price": "0.38", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "ScourgeBringer", "price": "0.07", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "ScreamRide", "price": "0.09", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "ScreamRide", "price": "3.19", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "Serious Sam 4", "price": "0.17", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Shadow Warrior 3", "price": "1.17", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Shadowrun Trilogy", "price": "0.28", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Shakes on a Plane", "price": "0.03", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "ShapeNeon Chaos", "price": "0.06", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "She Sees Red Interactive Movie", "price": "0.04", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Sherlock Holmes: Crimes and Punishments + Sherlock Holmes...", "price": "0.61", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Sherlock Holmes: Crimes and Punishments Redux", "price": "0.37", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Sherlock Holmes: The Devil's Daughter Redux", "price": "0.37", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Sherlock Purr 2", "price": "0.05", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Shield King", "price": "0.07", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Shining Resonance Refrain", "price": "1.09", "flag": "🇹🇷", "date": "28.08", "status": "" },
  { "name": "Shmups Collection", "price": "0.08", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Shoppe Keep", "price": "0.03", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Sid Meier’s Civilization® VI Anthology", "price": "6.59", "flag": "🇹🇷", "date": "10.09", "status": " GP" },
  { "name": "Sid Meier’s Civilization® VI Platinum Edition", "price": "3.18", "flag": "🇹🇷", "date": "10.09", "status": " GP" },
  { "name": "Skeletal Avenger", "price": "0.09", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Skull and Bones Deluxe Edition", "price": "18.56", "flag": "🇹🇷", "date": "10.09", "status": " GP" },
  { "name": "Skyrim Anniversary Edition + Fallout 4 G.O.T.Y Bundle", "price": "18.56", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Slime Rancher", "price": "0.06", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Small Moonstone Pack -- 1,200", "price": "0.86", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Smelter", "price": "0.14", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Sniper Elite 5 Complete Edition", "price": "1.51", "flag": "🇦🇷", "date": "01.05", "status": " GP" },
  { "name": "SnowRunner - 1-Anniversary Edition", "price": "6.96", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "SnowRunner - 2-Year Anniversary Edition", "price": "30.16", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "SnowRunner - 4-Year Anniversary Edition", "price": "44.08", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "SolSeraph", "price": "0.09", "flag": "🇦🇷", "date": "28.08", "status": "" },
  { "name": "SongPop Party", "price": "1.41", "flag": "🇦🇷", "date": "13.09", "status": "" },
  { "name": "Sonic Colors: Ultimate - Digital Deluxe", "price": "5.44", "flag": "🇹🇷", "date": "28.08", "status": "" },
  { "name": "Sonic Mania", "price": "0.57", "flag": "🇹🇷", "date": "28.08", "status": "" },
  { "name": "Sonic Origins Plus", "price": "12.31", "flag": "🇹🇷", "date": "28.08", "status": "" },
  { "name": "South Park™: The Fractured but Whole™ - Gold Edition", "price": "11.31", "flag": "🇹🇷", "date": "10.09", "status": " GP" },
  { "name": "Space Accident", "price": "0.05", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Space Engineers: Ultimate Edition 2023", "price": "1.02", "flag": "🇦🇷", "date": "01.03", "status": " GP" },
  { "name": "Space Station Sprint", "price": "0.03", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Sparkle Bundle", "price": "0.15", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Speed Brawl", "price": "0.06", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Speed Truck Racing", "price": "0.05", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Speedway Racing", "price": "0.26", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Spiritfarer®: Farewell Edition", "price": "0.1", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Split - manipulate time", "price": "0.07", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Star Crossed", "price": "0.05", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Starsand", "price": "0.12", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "SteamWorld Build & Dig Bundle", "price": "2.1", "flag": "🇦🇷", "date": "01.12", "status": " GP" },
  { "name": "SteamWorld Build Deluxe Edition", "price": "0.46", "flag": "🇦🇷", "date": "01.12", "status": " GP" },
  { "name": "SteamWorld Dig 2", "price": "0.1", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "SteamWorld Dig", "price": "0.04", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Steampunk Tower 2", "price": "0.04", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Steelrising - Standard Edition", "price": "0.94", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Stellaris: Console Edition - Deluxe Edition", "price": "0.53", "flag": "🇦🇷", "date": "16.10", "status": " GP" },
  { "name": "Strange Brigade", "price": "0.06", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Street Fighter 30th Anniversary Collection", "price": "5.74", "flag": "🇹🇷", "date": "03.09", "status": "" },
  { "name": "Strike Team Gladius", "price": "0.26", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Strong Moon", "price": "0.13", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Stubbs the Zombie in Rebel Without a Pulse", "price": "0.09", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Stunt Kite Party", "price": "0.17", "flag": "🇹🇷", "date": "10.09", "status": " GP" },
  { "name": "Subject 13", "price": "0.01", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Sudocats", "price": "0.03", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Sundered®: Eldritch Edition", "price": "0.07", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Sunset Overdrive Deluxe Edition", "price": "2.01", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "Sunset Overdrive", "price": "1.42", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "Super Cyborg", "price": "0.04", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Super Impossible Road", "price": "0.09", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Super Monkey Ball Banana Mania", "price": "2.48", "flag": "🇹🇷", "date": "28.08", "status": "" },
  { "name": "Super Monkey Ball: Banana Blitz HD", "price": "1.73", "flag": "🇹🇷", "date": "28.08", "status": "" },
  { "name": "Super Mutant Alien Assault", "price": "0.02", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Superliminal", "price": "0.85", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Sweet Witches", "price": "0.03", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "TEKKEN 7 - Definitive Edition", "price": "2.69", "flag": "🇹🇷", "date": "02.09", "status": "" },
  { "name": "TEMBO THE BADASS ELEPHANT", "price": "0.04", "flag": "🇦🇷", "date": "28.08", "status": "" },
  { "name": "THE KING OF FIGHTERS XV Deluxe Edition", "price": "4.29", "flag": "🇹🇷", "date": "12.09", "status": "" },
  { "name": "THE KING OF FIGHTERS XV Standard Edition", "price": "1.39", "flag": "🇦🇷", "date": "12.09", "status": "" },
  { "name": "TOEM", "price": "0.09", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "TY the Tasmanian Tiger™ 2: Bush Rescue™ HD", "price": "0.4", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Tales of Arise - Beyond The Dawn Ultimate Edition", "price": "41.74", "flag": "🇹🇷", "date": "02.09", "status": " GP" },
  { "name": "Tales of Arise - Beyond the Dawn Edition", "price": "25.5", "flag": "🇹🇷", "date": "02.09", "status": " GP" },
  { "name": "Tales of Arise", "price": "14.12", "flag": "🇹🇷", "date": "10.09", "status": " GP" },
  { "name": "Talisman: Digital Edition - Deluxe Edition", "price": "0.49", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Tandem: A Tale of Shadows", "price": "0.34", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Tank Mechanic Simulator", "price": "0.09", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Tchia: Oléti Edition", "price": "4.32", "flag": "🇦🇷", "date": "08.10", "status": " GP" },
  { "name": "Teardown", "price": "0.36", "flag": "🇦🇷", "date": "03.09", "status": " GP" },
  { "name": "Teardown: Deluxe Edition", "price": "0.55", "flag": "🇦🇷", "date": "03.09", "status": " GP" },
  { "name": "Teardown: Ultimate Edition", "price": "0.64", "flag": "🇦🇷", "date": "03.09", "status": " GP" },
  { "name": "Teenage Mutant Ninja Turtles: Shredder's Revenge - Dimension Shellshock", "price": "0.41", "flag": "🇦🇷", "date": "16.06", "status": " GP" },
  { "name": "Terminal 81", "price": "0.1", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Tesla Force", "price": "0.1", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Tesla vs Lovecraft", "price": "0.06", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Teslagrad", "price": "0.04", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "The Bard's Tale Trilogy", "price": "0.73", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "The Callisto Protocol™ for Xbox One – Digital Deluxe Edition", "price": "16.82", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "The Callisto Protocol™ for Xbox Series X|S – Digital Delu...", "price": "19.72", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "The Church in the Darkness", "price": "0.03", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "The Colonists", "price": "0.17", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "The Crew® 2", "price": "0.6", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "The Elder Scrolls III: Morrowind", "price": "1.13", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "The Elder Scrolls Online Deluxe Collection: Gold Road", "price": "33.79", "flag": "🇦🇷", "date": "30.12", "status": " GP" },
  { "name": "The Elder Scrolls V: Skyrim Anniversary Edition", "price": "11.14", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Escapists: Supermax Edition", "price": "0.08", "flag": "🇦🇷", "date": "10.09", "status": "" },
  { "name": "The Eternal Cylinder", "price": "0.11", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "The Evil Within Digital Bundle", "price": "2.35", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Expanse: A Telltale Series - Deluxe Edition", "price": "1.65", "flag": "🇹🇷", "date": "03.09", "status": "" },
  { "name": "The Expanse: A Telltale Series", "price": "1.38", "flag": "🇹🇷", "date": "03.09", "status": "" },
  { "name": "The Fall Bundle", "price": "0.06", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "The Forgotten City", "price": "0.21", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "The Game of Life 2", "price": "0.15", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "The Great Perhaps", "price": "0.05", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "The Jackbox Party Pack", "price": "0.12", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "The Jackbox Party Quadpack", "price": "0.67", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "The Journey Down Trilogy", "price": "0.86", "flag": "🇹🇷", "date": "03.09", "status": "" },
  { "name": "The Lamplighters League - Deluxe Edition", "price": "0.75", "flag": "🇦🇷", "date": "01.04", "status": " GP" },
  { "name": "The Lord of the Rings: Gollum™", "price": "3.1", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "The Metronomicon: Slay the Dance Floor Deluxe Edition", "price": "0.11", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "The Mummy Demastered", "price": "0.08", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "The Outer Worlds", "price": "5.66", "flag": "🇹🇷", "date": "10.09", "status": " GP" },
  { "name": "The Outer Worlds: Board-Approved Bundle", "price": "12.5", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Outer Worlds: Spacer's Choice Edition", "price": "7.48", "flag": "🇹🇷", "date": "10.09", "status": " GP" },
  { "name": "The Quarry - Deluxe Edition", "price": "5.72", "flag": "🇹🇷", "date": "10.09", "status": " GP" },
  { "name": "The Serpent Rogue", "price": "0.27", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "The Survivalists", "price": "0.14", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "The True", "price": "0.06", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "The Vanishing of Ethan Carter", "price": "0.05", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "The Walking Dead: A New Frontier", "price": "0.21", "flag": "🇦🇷", "date": "01.11", "status": " GP" },
  { "name": "The Walking Dead: Michonne", "price": "0.07", "flag": "🇦🇷", "date": "01.11", "status": " GP" },
  { "name": "The Walking Dead: The Complete First Season", "price": "0.11", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "The Walking Dead: The Telltale Definitive Series", "price": "0.34", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Them's Fightin' Herds", "price": "0.1", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Them's Fightin' Herds: Deluxe Edition", "price": "0.07", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Thief Simulator", "price": "0.09", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Think of the Children", "price": "0.19", "flag": "🇹🇷", "date": "03.09", "status": "" },
  { "name": "This War of Mine - Complete Edition", "price": "0.37", "flag": "🇦🇷", "date": "16.10", "status": " GP" },
  { "name": "This War of Mine: Final Cut", "price": "0.07", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Through the Woods", "price": "0.06", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Thunder Ray Origins", "price": "0.64", "flag": "🇹🇷", "date": "03.09", "status": "" },
  { "name": "Timothy vs the Aliens", "price": "0.04", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Tom Clancy's Rainbow Six® Extraction United Bundle", "price": "5.28", "flag": "🇦🇷", "date": "16.06", "status": " GP" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Ultimate Edition", "price": "4.56", "flag": "🇦🇷", "date": "01.07", "status": " GP" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Year 2 Gold Edition", "price": "0.48", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Tom Clancy’s Rainbow Six Siege Operator Edition", "price": "37.7", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "Tom Clancy’s Rainbow Six Siege Ultimate Edition", "price": "37.12", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Tomb Raider: Definitive Survivor Trilogy", "price": "8.83", "flag": "🇹🇷", "date": "10.09", "status": " GP" },
  { "name": "Tony and Clyde", "price": "0.28", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Tools Up!", "price": "0.07", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "TopSpin 2K25 Deluxe Edition Pre-Order", "price": "43.48", "flag": "🇹🇷", "date": "03.09", "status": " GP" },
  { "name": "Tormented Souls", "price": "0.14", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Total Arcade Racing", "price": "0.05", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Totally Reliable Delivery Service Deluxe Edition", "price": "0.33", "flag": "🇦🇷", "date": "29.08", "status": " GP" },
  { "name": "Trailmakers - Space Upgrade", "price": "0.46", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers: Booster Edition", "price": "0.48", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers: Deluxe Edition", "price": "0.69", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers: Rescue Bundle", "price": "0.52", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers: Rescue Deluxe Bundle", "price": "0.66", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers: Ultimate Edition", "price": "0.82", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "TramSim: Console Edition - Deluxe", "price": "6.96", "flag": "🇹🇷", "date": "03.09", "status": "" },
  { "name": "TramSim: Console Edition", "price": "5.87", "flag": "🇹🇷", "date": "03.09", "status": "" },
  { "name": "Tri6: Infinite +", "price": "0.06", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Tribal Pass", "price": "0.03", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "True Fear: Forsaken Souls Part 1", "price": "0.07", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "True Fear: Forsaken Souls Part 2", "price": "0.34", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Turbo Dash Kart 2024 Racing", "price": "0.06", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Turbo Golf Racing: Deep Space Bundle", "price": "0.22", "flag": "🇦🇷", "date": "16.04", "status": " GP" },
  { "name": "Turbo Golf Racing: Ultimate Bundle", "price": "0.26", "flag": "🇦🇷", "date": "16.04", "status": " GP" },
  { "name": "Turnip Boy Robs a Bank Pre-Release", "price": "0.21", "flag": "🇦🇷", "date": "15.07", "status": " GP" },
  { "name": "Twin Breaker: A Sacred Symbols Adventure", "price": "0.04", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Two Point Hospital: JUMBO Edition Upgrade", "price": "0.6", "flag": "🇦🇷", "date": "28.08", "status": "" },
  { "name": "Two Point Hospital: JUMBO Edition", "price": "0.48", "flag": "🇦🇷", "date": "28.08", "status": "" },
  { "name": "Tyd wag vir Niemand", "price": "0.02", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "UFO ROBOT GRENDIZER – The Feast of the Wolves - Deluxe", "price": "15.66", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "ULTIMATE MARVEL VS. CAPCOM 3", "price": "5.8", "flag": "🇹🇷", "date": "03.09", "status": "" },
  { "name": "UNO®", "price": "0.13", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Ultimate Chicken Horse", "price": "0.53", "flag": "🇹🇷", "date": "10.09", "status": " GP" },
  { "name": "Ultimate Ski Jumping 2020 + Glaive: Brick Breaker Bundle", "price": "0.09", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Ultimate Ski Jumping 2020", "price": "0.05", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Undead Horde", "price": "0.1", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Under Leaves", "price": "0.08", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "0.16", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Unspottable", "price": "0.08", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Valkyria Revolution", "price": "0.58", "flag": "🇹🇷", "date": "28.08", "status": "" },
  { "name": "Vanquish", "price": "1.16", "flag": "🇹🇷", "date": "28.08", "status": "" },
  { "name": "Verlore Tyd en Drome - Bundle", "price": "0.03", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Vermintide - Digital Value Pack", "price": "0.48", "flag": "🇦🇷", "date": "07.03", "status": "" },
  { "name": "Vostok 2061", "price": "0.07", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "WRC 9 FIA World Rally Championship", "price": "0.14", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "0.76", "flag": "🇦🇷", "date": "30.08", "status": "" },
  { "name": "WWE 2K24 Cross-Gen Digital Edition", "price": "27.25", "flag": "🇹🇷", "date": "03.09", "status": "" },
  { "name": "WWE 2K24 Forty Years of WrestleMania Edition", "price": "52.18", "flag": "🇹🇷", "date": "03.09", "status": "" },
  { "name": "Warhammer 40,000: Boltgun - Forges of Corruption Edition", "price": "10.27", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "Warhammer: Chaosbane Slayer Edition Xbox Series X|S", "price": "0.1", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Warhammer: Vermintide 2 - Premium Edition", "price": "0.11", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Warhammer: Vermintide 2 - Ultimate Edition", "price": "0.13", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Wasteland 3 (PC) Colorado Collection", "price": "1.73", "flag": "🇦🇷", "date": "30.09", "status": " GP" },
  { "name": "Wasteland 3 Colorado Collection", "price": "10.18", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "Watch Dogs®2 - Deluxe Edition", "price": "3.26", "flag": "🇦🇷", "date": "01.07", "status": " GP" },
  { "name": "Watch Dogs®2 - Gold Edition", "price": "47.56", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Watch Dogs®2", "price": "0.45", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "We Are The Dwarves", "price": "0.17", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "We Happy Few Digital Deluxe", "price": "1.63", "flag": "🇦🇷", "date": "16.01", "status": " GP" },
  { "name": "Weedcraft Inc + Moonshine Inc + Big Pharma - Chemistry Tycoons Bundle", "price": "12.64", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "West of Dead: Path of the Crow Edition", "price": "0.09", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Wheel Of Fortune®", "price": "0.13", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Whitestone", "price": "0.14", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Wild Card Football - Deluxe Edition", "price": "4.22", "flag": "🇦🇷", "date": "03.09", "status": " GP" },
  { "name": "Wild Card Football - Ultimate Edition", "price": "4.8", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Wild Card Football", "price": "2.4", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Wilmot's Warehouse", "price": "0.1", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Windstorm: Start of a Great Friendship - Remastered", "price": "0.34", "flag": "🇦🇷", "date": "03.09", "status": " GP" },
  { "name": "Wired Italian Adventure Bundle", "price": "0.41", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Wolfenstein: Alt History Collection", "price": "11.6", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Wolfenstein: Youngblood Deluxe Edition", "price": "5.08", "flag": "🇹🇷", "date": "17.02", "status": " GP" },
  { "name": "Wolfenstein® II: The New Colossus™ Digital Deluxe Edition", "price": "6.96", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "Wolfenstein®: The Two-Pack", "price": "3.68", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "Woodle Tree Adventures", "price": "0.02", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Worbital", "price": "0.07", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "World War Z", "price": "2.4", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "World War Z: Aftermath - Deluxe Edition", "price": "3.84", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "World War Z: Aftermath", "price": "3.82", "flag": "🇦🇷", "date": "03.09", "status": " GP" },
  { "name": "World to the West", "price": "0.05", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Worms Battlegrounds", "price": "0.07", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Worms Rumble - Digital Deluxe Edition", "price": "0.08", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Worms W.M.D", "price": "1.44", "flag": "🇹🇷", "date": "10.09", "status": " GP" },
  { "name": "Yes, Your Grace", "price": "0.09", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Yesterday Origins", "price": "0.03", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Yooka-Laylee and the Impossible Lair", "price": "0.1", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "Yuko and the Akuma Menace", "price": "0.11", "flag": "🇦🇷", "date": "03.09", "status": " GP" },
  { "name": "Yuppie Psycho", "price": "0.56", "flag": "🇦🇷", "date": "03.09", "status": "" },
  { "name": "Zoo Tycoon", "price": "0.2", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "theHunter: Call of the Wild™ - Essentials DLC Bundle", "price": "0.09", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "theHunter: Call of the Wild™ - Greenhorn Bundle", "price": "0.55", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "theHunter: Call of the Wild™ - Master Hunter Bundle", "price": "0.82", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "theHunter: Call of the Wild™", "price": "0.07", "flag": "🇦🇷", "date": "10.09", "status": " GP" },
  { "name": "while True: learn()", "price": "0.19", "flag": "🇦🇷", "date": "03.09", "status": " GP" },
]

let usd = 105;

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
  arg_output2.innerHTML = floor(finishRes.toFixed()) + 60
}

function resultTr() {
  const value = Number(tr_input.value) + .2
  const res = value * usd
  const finishRes = res + resSwitсhTr(tr_input.value)
  tr_output.innerHTML = floor(finishRes.toFixed())
  tr_output2.innerHTML = floor(finishRes.toFixed()) + 50
}



function resSwitсhArg(value) {
  let a;

  if (value <= 1) {
    a = 80
  } else if (value > 1 && value <= 5) {
    a = 90
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
    a = 120
  } else if (percent > 1 && percent <= 5) {
    a = 85
  } else if (percent > 5 && percent <= 10) {

    a = 55
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
    a = 70
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
    flag = '-'
  }

  item.innerHTML = `${a.name}:${res}&#8381 ${flag} до ${a.date} ${a.status}`
  // 
  list.append(item)
})

function resultFromListArg(price) {
  const value = Number(price) + .1
  const newPrice = value + (value * resPercent(value)) / 100
  const res = newPrice * usd + 60
  const finishRes = res + resSwitсhArg(newPrice)

  return floor(finishRes.toFixed())
}

function resultFromListTr(price) {
  const value = Number(price) + .2
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



