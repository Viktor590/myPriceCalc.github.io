const input = document.querySelector('.input');
const output = document.querySelector('.output-res');
const list = document.querySelector('.list')
const showBtn = document.querySelector('.show')


showBtn.addEventListener('click', () => {
  showBtn.classList.contains('active') ?
    hiddenMenu() : showMenu()
})

let usd = 98;

const arr = [
  { "name": "'n Verlore Verstand", "price": "0.08", "region": "A", "data": "7/11", "status": "" },
  { "name": "2064: Read Only Memories", "price": "0.56", "region": "T", "data": "7/11", "status": "" },
  { "name": "3D Billiards - Pool & Snooker - Remastered", "price": "0.35", "region": "A", "data": "7/11", "status": "" },
  { "name": "8Doors: Arum's Afterlife Adventure", "price": "0.17", "region": "A", "data": "7/11", "status": "" },
  { "name": "9th Dawn III", "price": "5.21", "region": "U", "data": "7/11", "status": "GOLD" },
  { "name": "A Juggler's Tale", "price": "0.25", "region": "A", "data": "7/11", "status": "" },
  { "name": "A Memoir Blue", "price": "0.33", "region": "A", "data": "7/14", "status": "" },
  { "name": "A Plague Tale: Innocence", "price": "1.50", "region": "A", "data": "7/11", "status": "GOLD" },
  { "name": "A Plague Tale: Innocence - Windows 10", "price": "1.62", "region": "A", "data": "7/11", "status": "" },
  { "name": "A Tale For Anna", "price": "0.48", "region": "A", "data": "7/15", "status": "" },
  { "name": "Absolute Deduction bundle", "price": "10.34", "region": "E", "data": "7/11", "status": "" },
  { "name": "Accident", "price": "0.29", "region": "A", "data": "7/11", "status": "" },
  { "name": "Aery - Vikings", "price": "0.36", "region": "A", "data": "7/11", "status": "" },
  { "name": "Aeterna Noctis", "price": "0.57", "region": "A", "data": "7/11", "status": "GOLD" },
  { "name": "Age of Wonders: Planetfall Premium Edition", "price": "1.24", "region": "A", "data": "7/11", "status": "" },
  { "name": "Alchemist Adventure", "price": "0.38", "region": "A", "data": "7/11", "status": "" },
  { "name": "Aliens: Fireteam Elite", "price": "4.29", "region": "E", "data": "7/11", "status": "GOLD" },
  { "name": "Alone in the Dark", "price": "13.55", "region": "A", "data": "10/2", "status": "" },
  { "name": "Alone in the Dark - Digital Deluxe Edition", "price": "15.63", "region": "A", "data": "10/2", "status": "" },
  { "name": "Amnesia: Collection", "price": "1.13", "region": "T", "data": "7/11", "status": "" },
  { "name": "Amnesia: Rebirth", "price": "2.63", "region": "T", "data": "7/11", "status": "" },
  { "name": "Among the Sleep - Enhanced Edition", "price": "0.20", "region": "A", "data": "7/11", "status": "GOLD" },
  { "name": "Ancestors Legacy", "price": "0.44", "region": "A", "data": "7/11", "status": "" },
  { "name": "AngerForce and AlienCruise Arcade Shooting Bundle", "price": "0.23", "region": "A", "data": "7/11", "status": "" },
  { "name": "Animal Lover", "price": "0.19", "region": "A", "data": "7/11", "status": "" },
  { "name": "Apsulov: End of Gods", "price": "1.33", "region": "A", "data": "7/11", "status": "GOLD" },
  { "name": "Assassin's Creed® Odyssey - ULTIMATE EDITION", "price": "3.47", "region": "A", "data": "7/11", "status": "GOLD" },
  { "name": "Assassin's Creed® Rogue", "price": "0.46", "region": "A", "data": "7/11", "status": "GOLD" },
  { "name": "Assassin's Creed® Valhalla Ragnarök Edition", "price": "6.93", "region": "T", "data": "7/11", "status": "GOLD" },
  { "name": "Awarded Platformer Bundle", "price": "0.63", "region": "A", "data": "12/3", "status": "" },
  { "name": "BLACKTAIL", "price": "6.93", "region": "T", "data": "7/11", "status": "GOLD" },
  { "name": "Batora: Lost Haven", "price": "2.60", "region": "A", "data": "7/14", "status": "" },
  { "name": "Battlefleet Gothic: Armada", "price": "0.32", "region": "A", "data": "7/11", "status": "" },
  { "name": "Battlefleet Gothic: Armada 2 - Windows 10", "price": "1.16", "region": "A", "data": "7/11", "status": "" },
  { "name": "Battlestar Galactica Deadlock™", "price": "0.40", "region": "A", "data": "7/11", "status": "" },
  { "name": "Beasts of Maravilla Island", "price": "0.27", "region": "A", "data": "7/11", "status": "" },
  { "name": "Blasphemous", "price": "0.35", "region": "A", "data": "7/14", "status": "" },
  { "name": "Blood Bowl 3 - Brutal Edition", "price": "16.21", "region": "A", "data": "7/13", "status": "" },
  { "name": "Boreal Tenebrae", "price": "0.15", "region": "A", "data": "7/11", "status": "" },
  { "name": "Bound by Flame", "price": "0.12", "region": "A", "data": "7/11", "status": "GOLD" },
  { "name": "Bravery and Greed", "price": "2.33", "region": "A", "data": "7/14", "status": "" },
  { "name": "Bundle 2 Games My Night Sun Games", "price": "0.14", "region": "A", "data": "7/11", "status": "" },
  { "name": "Call of Duty®: WWII - Digital Deluxe", "price": "7.23", "region": "T", "data": "7/11", "status": "GOLD" },
  { "name": "Call of Duty®: WWII - Gold Edition", "price": "2.29", "region": "A", "data": "7/11", "status": "GOLD" },
  { "name": "Call of the Sea", "price": "0.55", "region": "A", "data": "7/11", "status": "" },
  { "name": "Candleman Complete Journey Bundle with Wenjia", "price": "0.23", "region": "A", "data": "7/11", "status": "" },
  { "name": "Car Mechanic Simulator", "price": "0.58", "region": "A", "data": "7/11", "status": "" },
  { "name": "Chef Life - AL FORNO EDITION", "price": "11.58", "region": "A", "data": "7/13", "status": "" },
  { "name": "ChronoBreach Ultra", "price": "0.22", "region": "A", "data": "7/15", "status": "" },
  { "name": "City Limits", "price": "0.24", "region": "A", "data": "7/6/", "status": "" },
  { "name": "Clash - Zeno Edition", "price": "13.32", "region": "A", "data": "7/13", "status": "" },
  { "name": "Cleopatra Fortune™ S-Tribute", "price": "7.10", "region": "A", "data": "7/11", "status": "" },
  { "name": "Clone Drone in the Danger Zone", "price": "0.38", "region": "A", "data": "7/11", "status": "" },
  { "name": "Colorful Colore (for Windows 10)", "price": "0.14", "region": "A", "data": "7/11", "status": "" },
  { "name": "Cronostase Electric Collection", "price": "0.16", "region": "A", "data": "7/11", "status": "" },
  { "name": "Crossout – Steel shield bundle", "price": "15.37", "region": "C", "data": "7/11", "status": "" },
  { "name": "Crowalt: Traces of the Lost Colony", "price": "0.16", "region": "A", "data": "7/11", "status": "" },
  { "name": "Cube Farmer", "price": "0.14", "region": "A", "data": "7/11", "status": "" },
  { "name": "Curious Expedition 2", "price": "0.55", "region": "A", "data": "7/11", "status": "GOLD" },
  { "name": "Curse of the Dead Gods", "price": "1.49", "region": "A", "data": "7/11", "status": "GOLD" },
  { "name": "Curse of the Dead Gods (PC)", "price": "1.21", "region": "T", "data": "7/11", "status": "" },
  { "name": "DARKLAND 3", "price": "0.06", "region": "A", "data": "7/8/", "status": "" },
  { "name": "DREDGE - Digital Deluxe Edition", "price": "3.99", "region": "A", "data": "7/14", "status": "" },
  { "name": "Dance of Death: Du Lac & Fey", "price": "3.17", "region": "T", "data": "7/11", "status": "" },
  { "name": "Danger Scavenger", "price": "0.05", "region": "A", "data": "7/11", "status": "" },
  { "name": "Deadliest Catch: The Game", "price": "1.11", "region": "A", "data": "7/5/", "status": "" },
  { "name": "Dear Esther: Landmark Edition", "price": "0.06", "region": "A", "data": "7/11", "status": "" },
  { "name": "Death Park 2", "price": "0.21", "region": "A", "data": "7/11", "status": "" },
  { "name": "Death Squared", "price": "0.12", "region": "A", "data": "7/11", "status": "GOLD" },
  { "name": "Deathsmiles I・II", "price": "12.35", "region": "A", "data": "7/11", "status": "" },
  { "name": "Decay of Logos", "price": "0.27", "region": "A", "data": "7/11", "status": "" },
  { "name": "Deep Sky Derelicts: Definitive edition", "price": "0.35", "region": "A", "data": "7/11", "status": "" },
  { "name": "Defend the Rook", "price": "3.04", "region": "A", "data": "7/11", "status": "" },
  { "name": "Defend the Rook - Supporter Edition", "price": "4.05", "region": "A", "data": "7/11", "status": "" },
  { "name": "Despotism 3k", "price": "0.18", "region": "A", "data": "7/11", "status": "" },
  { "name": "Deus Ex: Mankind Divided - Digital Deluxe Edition", "price": "0.58", "region": "A", "data": "7/11", "status": "GOLD" },
  { "name": "Die for Valhalla!", "price": "0.09", "region": "A", "data": "7/11", "status": "" },
  { "name": "Disney Speedstorm - Standard Founder’s Pack", "price": "9.20", "region": "T", "data": "7/11", "status": "" },
  { "name": "Disney Speedstorm - Ultimate Founder’s Pack", "price": "20.20", "region": "T", "data": "7/11", "status": "" },
  { "name": "Doctor Who: The Edge of Reality", "price": "1.86", "region": "T", "data": "7/11", "status": "GOLD" },
  { "name": "Doctor Who: The Lonely Assassins", "price": "1.06", "region": "T", "data": "7/11", "status": "GOLD" },
  { "name": "Dogos", "price": "0.09", "region": "A", "data": "7/11", "status": "" },
  { "name": "Don't Be Afraid", "price": "0.27", "region": "A", "data": "7/11", "status": "GOLD" },
  { "name": "Donut County", "price": "0.22", "region": "A", "data": "7/14", "status": "" },
  { "name": "Doom and Destiny", "price": "0.20", "region": "A", "data": "7/11", "status": "" },
  { "name": "Dou", "price": "0.06", "region": "A", "data": "7/12", "status": "" },
  { "name": "Dragon Blaze", "price": "3.77", "region": "A", "data": "7/11", "status": "" },
  { "name": "Dragon Pinball", "price": "0.10", "region": "A", "data": "7/11", "status": "" },
  { "name": "EA SPORTS™ FIFA 23 Standard Edition Xbox One", "price": "8.08", "region": "T", "data": "12/3", "status": "" },
  { "name": "Elemental War TD", "price": "0.29", "region": "A", "data": "7/11", "status": "" },
  { "name": "Elevator Action™ -Returns- S-Tribute", "price": "7.10", "region": "A", "data": "7/11", "status": "" },
  { "name": "Ember: Console Edition", "price": "0.27", "region": "A", "data": "7/11", "status": "GOLD" },
  { "name": "Endzone - A World Apart: Complete Edition", "price": "6.76", "region": "A", "data": "7/11", "status": "" },
  { "name": "Endzone - A World Apart: Survivor Edition", "price": "6.08", "region": "A", "data": "7/11", "status": "" },
  { "name": "Escape Dead Island", "price": "0.15", "region": "A", "data": "12/3", "status": "" },
  { "name": "Euro Fishing: Ultimate Edition", "price": "0.42", "region": "A", "data": "7/11", "status": "" },
  { "name": "Evan's Remains", "price": "0.15", "region": "A", "data": "7/11", "status": "" },
  { "name": "Evil West", "price": "12.55", "region": "A", "data": "7/11", "status": "GOLD" },
  { "name": "FAR: Lone Sails", "price": "0.21", "region": "A", "data": "7/11", "status": "" },
  { "name": "FRONT MISSION 1st: Remake", "price": "1.73", "region": "A", "data": "7/13", "status": "" },
  { "name": "Family Feud®", "price": "6.53", "region": "N", "data": "7/11", "status": "GOLD" },
  { "name": "Fantasy Dash", "price": "0.06", "region": "A", "data": "7/12", "status": "" },
  { "name": "Fantasy General II: Invasion", "price": "0.78", "region": "A", "data": "7/11", "status": "" },
  { "name": "Fatum Betula", "price": "0.16", "region": "A", "data": "7/11", "status": "" },
  { "name": "Feather", "price": "0.11", "region": "A", "data": "7/11", "status": "" },
  { "name": "Fell Seal: Arbiter's Mark", "price": "0.50", "region": "A", "data": "7/11", "status": "" },
  { "name": "Fishing Sim World®: Pro Tour - Collector's Edition", "price": "1.18", "region": "H", "data": "7/11", "status": "" },
  { "name": "Flat Heroes", "price": "0.23", "region": "A", "data": "7/11", "status": "" },
  { "name": "Football Manager 2023 Console", "price": "7.20", "region": "E", "data": "7/14", "status": "" },
  { "name": "Fury Unleashed", "price": "0.22", "region": "A", "data": "7/11", "status": "" },
  { "name": "GUNBARICH", "price": "3.77", "region": "A", "data": "7/11", "status": "" },
  { "name": "GUNBIRD", "price": "3.77", "region": "A", "data": "7/11", "status": "" },
  { "name": "GUNBIRD 2", "price": "3.77", "region": "A", "data": "7/11", "status": "" },
  { "name": "Gabriels Worlds The Adventure", "price": "0.11", "region": "A", "data": "7/11", "status": "" },
  { "name": "Gang Beasts", "price": "0.27", "region": "A", "data": "7/11", "status": "" },
  { "name": "Genesis Alpha One Deluxe Edition", "price": "0.25", "region": "A", "data": "7/14", "status": "" },
  { "name": "Gloomhaven Gold Edition", "price": "12.96", "region": "E", "data": "9/18", "status": "" },
  { "name": "Gloomhaven Mercenaries Edition", "price": "10.34", "region": "E", "data": "9/18", "status": "" },
  { "name": "Golf With Your Friends", "price": "1.24", "region": "A", "data": "7/14", "status": "" },
  { "name": "Goroons", "price": "0.23", "region": "A", "data": "7/11", "status": "" },
  { "name": "GreedFall", "price": "2.52", "region": "T", "data": "7/11", "status": "GOLD" },
  { "name": "GreedFall - Windows 10", "price": "2.19", "region": "T", "data": "7/11", "status": "" },
  { "name": "Guazu: The Rescue", "price": "0.30", "region": "A", "data": "7/11", "status": "GOLD" },
  { "name": "Guilt Battle Arena", "price": "0.05", "region": "A", "data": "7/11", "status": "" },
  { "name": "Guntastic", "price": "0.29", "region": "A", "data": "7/11", "status": "" },
  { "name": "Heaven Dust", "price": "0.19", "region": "A", "data": "7/11", "status": "" },
  { "name": "Hell Let Loose", "price": "10.00", "region": "A", "data": "7/14", "status": "" },
  { "name": "Hindsight", "price": "0.54", "region": "A", "data": "7/14", "status": "" },
  { "name": "Historical Trilogy", "price": "0.55", "region": "A", "data": "7/11", "status": "" },
  { "name": "Hokko Life", "price": "1.39", "region": "A", "data": "7/14", "status": "" },
  { "name": "House Flipper", "price": "0.36", "region": "A", "data": "7/11", "status": "" },
  { "name": "Hunt: Showdown", "price": "2.08", "region": "T", "data": "7/11", "status": "" },
  { "name": "Hunt: Showdown - Gold Edition", "price": "1.90", "region": "T", "data": "7/11", "status": "" },
  { "name": "Hunt: Showdown - Platinum Edition", "price": "1.96", "region": "T", "data": "7/11", "status": "" },
  { "name": "Hunt: Showdown - Starter Hunter Edition", "price": "1.64", "region": "T", "data": "7/11", "status": "" },
  { "name": "Hunting Simulator 2 Xbox One", "price": "0.66", "region": "A", "data": "7/13", "status": "" },
  { "name": "Hunting Simulator 2 Xbox Series X|S", "price": "0.55", "region": "A", "data": "7/13", "status": "" },
  { "name": "I Am Dead", "price": "0.55", "region": "A", "data": "7/14", "status": "" },
  { "name": "IIN", "price": "0.23", "region": "A", "data": "7/11", "status": "" },
  { "name": "Imagine Earth", "price": "0.49", "region": "A", "data": "7/11", "status": "" },
  { "name": "Immortal Planet", "price": "0.27", "region": "A", "data": "7/11", "status": "" },
  { "name": "In My Shadow", "price": "0.20", "region": "A", "data": "7/11", "status": "" },
  { "name": "Industria", "price": "0.55", "region": "A", "data": "7/11", "status": "GOLD" },
  { "name": "Ion Fury", "price": "0.42", "region": "A", "data": "7/11", "status": "" },
  { "name": "Jeopardy!", "price": "0.29", "region": "A", "data": "7/11", "status": "GOLD" },
  { "name": "Kentucky Route Zero: TV Edition", "price": "0.83", "region": "A", "data": "7/14", "status": "" },
  { "name": "King Leo", "price": "1.30", "region": "T", "data": "7/11", "status": "" },
  { "name": "Kingdom Rush Origins", "price": "0.29", "region": "A", "data": "7/11", "status": "" },
  { "name": "Kung Fu Fighting", "price": "0.11", "region": "A", "data": "7/15", "status": "" },
  { "name": "Last Days of Lazarus", "price": "0.55", "region": "A", "data": "7/11", "status": "GOLD" },
  { "name": "Last Stop", "price": "0.55", "region": "A", "data": "7/14", "status": "" },
  { "name": "Layer Section™ & Galactic Attack™ S-Tribute", "price": "6.86", "region": "E", "data": "7/11", "status": "" },
  { "name": "Leisure Suit Larry - Wet Dreams Saga Bundle", "price": "1.51", "region": "A", "data": "7/11", "status": "" },
  { "name": "Let Them Come", "price": "0.08", "region": "A", "data": "7/11", "status": "" },
  { "name": "Liberated: Enhanced Edition", "price": "0.38", "region": "A", "data": "7/11", "status": "" },
  { "name": "Light & Dark Bundle", "price": "0.87", "region": "A", "data": "11/2", "status": "" },
  { "name": "Little Mage Adventure", "price": "0.06", "region": "A", "data": "7/22", "status": "" },
  { "name": "Little Mouse's Encyclopedia", "price": "0.14", "region": "A", "data": "7/11", "status": "" },
  { "name": "Little Orpheus", "price": "1.19", "region": "E", "data": "7/11", "status": "" },
  { "name": "Lost Ember", "price": "0.50", "region": "A", "data": "7/11", "status": "" },
  { "name": "LumbearJack", "price": "1.13", "region": "T", "data": "7/11", "status": "" },
  { "name": "MXGP 2020 - The Official Motocross Videogame", "price": "1.16", "region": "A", "data": "7/11", "status": "" },
  { "name": "Madden NFL 19", "price": "28.39", "region": "C", "data": "12/3", "status": "" },
  { "name": "Madden NFL 22 Xbox One", "price": "14.86", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 22 Xbox Series X|S", "price": "17.29", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 23 Xbox One", "price": "19.76", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 23 Xbox Series X|S", "price": "23.16", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 24 Deluxe Edition Xbox Series X|S & Xbox One + Limited Time Bonus", "price": "61.15", "region": "A", "data": "7/23", "status": "" },
  { "name": "Marvel's Guardians of the Galaxy", "price": "5.77", "region": "T", "data": "7/13", "status": "" },
  { "name": "Mech Mechanic Simulator", "price": "0.38", "region": "A", "data": "7/11", "status": "" },
  { "name": "Meet Your Maker", "price": "7.82", "region": "A", "data": "7/13", "status": "" },
  { "name": "Meet Your Maker: Deluxe Edition", "price": "8.97", "region": "A", "data": "7/13", "status": "" },
  { "name": "Metal Black™ S-Tribute", "price": "3.85", "region": "I", "data": "7/11", "status": "" },
  { "name": "Metal Tales Overkill", "price": "0.66", "region": "A", "data": "7/11", "status": "GOLD" },
  { "name": "Microsoft 365 Family", "price": "0.00", "region": "U", "data": "12/1", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.00", "region": "U", "data": "12/1", "status": "" },
  { "name": "Monster Energy Supercross - The Official Videogame 5", "price": "3.09", "region": "A", "data": "7/11", "status": "" },
  { "name": "Monster Energy Supercross 5 - Special Edition", "price": "4.63", "region": "A", "data": "7/11", "status": "" },
  { "name": "Monster Sanctuary", "price": "1.04", "region": "A", "data": "7/14", "status": "" },
  { "name": "Moon Hunters", "price": "0.09", "region": "A", "data": "7/11", "status": "" },
  { "name": "MotoGP™18", "price": "0.77", "region": "T", "data": "7/11", "status": "" },
  { "name": "Moving Out", "price": "1.16", "region": "A", "data": "7/14", "status": "" },
  { "name": "Mr. Pumpkin Series Bundle", "price": "0.19", "region": "A", "data": "7/11", "status": "" },
  { "name": "Mr. Run and Jump", "price": "5.58", "region": "T", "data": "7/24", "status": "" },
  { "name": "MudRunner - American Wilds Edition", "price": "0.93", "region": "A", "data": "7/11", "status": "GOLD" },
  { "name": "Murder Diaries", "price": "0.33", "region": "A", "data": "7/11", "status": "" },
  { "name": "My Time at Portia Deluxe Edition", "price": "1.08", "region": "A", "data": "7/14", "status": "" },
  { "name": "MyMaitê (for Windows 10)", "price": "0.14", "region": "A", "data": "7/11", "status": "" },
  { "name": "NARUTO TO BORUTO: SHINOBI STRIKER Ultimate Edition", "price": "29.28", "region": "C", "data": "7/14", "status": "" },
  { "name": "Necromunda: Hired Gun", "price": "3.86", "region": "A", "data": "7/11", "status": "GOLD" },
  { "name": "Neon Abyss Deluxe Edition", "price": "0.46", "region": "A", "data": "7/14", "status": "" },
  { "name": "NeverAwake", "price": "1.18", "region": "A", "data": "7/13", "status": "" },
  { "name": "Nevermind", "price": "0.33", "region": "T", "data": "7/11", "status": "" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.14", "region": "A", "data": "5/31", "status": "" },
  { "name": "Order of Battle: World War II", "price": "0.38", "region": "A", "data": "7/11", "status": "" },
  { "name": "Out of Line", "price": "0.78", "region": "T", "data": "7/11", "status": "" },
  { "name": "Outbreak Diamond Collection", "price": "1.45", "region": "A", "data": "7/11", "status": "" },
  { "name": "Outbreak: Gwen's Nightmare", "price": "0.11", "region": "A", "data": "7/11", "status": "GOLD" },
  { "name": "Outbreak: The New Nightmare Definitive Edition", "price": "0.17", "region": "A", "data": "7/11", "status": "" },
  { "name": "Overcooked! 2 - Gourmet Edition", "price": "0.54", "region": "A", "data": "7/14", "status": "" },
  { "name": "Overcooked! All You Can Eat", "price": "3.07", "region": "A", "data": "7/14", "status": "" },
  { "name": "PBA Pro Bowling", "price": "0.29", "region": "A", "data": "7/11", "status": "" },
  { "name": "PGA TOUR 2K23 Deluxe Edition", "price": "16.92", "region": "T", "data": "7/11", "status": "GOLD" },
  { "name": "Pinstripe", "price": "0.37", "region": "T", "data": "7/11", "status": "" },
  { "name": "Pit People", "price": "0.27", "region": "A", "data": "7/11", "status": "" },
  { "name": "Pixel Gladiator", "price": "0.05", "region": "A", "data": "7/11", "status": "" },
  { "name": "Pool Nation FX", "price": "0.16", "region": "A", "data": "7/11", "status": "" },
  { "name": "Pool Nation Snooker Bundle", "price": "0.21", "region": "A", "data": "7/11", "status": "" },
  { "name": "Princess Farmer", "price": "0.50", "region": "A", "data": "7/11", "status": "" },
  { "name": "Project Root", "price": "0.23", "region": "T", "data": "7/11", "status": "" },
  { "name": "Q-YO Blaster", "price": "0.05", "region": "A", "data": "7/11", "status": "" },
  { "name": "RIDE", "price": "0.18", "region": "A", "data": "7/11", "status": "" },
  { "name": "Rabbids®: Party of Legends", "price": "4.04", "region": "T", "data": "7/11", "status": "GOLD" },
  { "name": "Raji: An Ancient Epiс", "price": "2.17", "region": "T", "data": "7/11", "status": "" },
  { "name": "Realpolitiks New Power", "price": "0.14", "region": "A", "data": "7/11", "status": "" },
  { "name": "Renzo Racer", "price": "2.17", "region": "T", "data": "7/11", "status": "" },
  { "name": "Retro Machina", "price": "1.74", "region": "T", "data": "7/11", "status": "" },
  { "name": "Retro Tank Arcade", "price": "0.06", "region": "A", "data": "7/7/", "status": "" },
  { "name": "Reverie Knights Tactics", "price": "0.49", "region": "A", "data": "7/11", "status": "" },
  { "name": "Reverie: Sweet As Edition", "price": "6.82", "region": "I", "data": "7/13", "status": "" },
  { "name": "Riptide GP: Renegade", "price": "0.16", "region": "A", "data": "7/11", "status": "" },
  { "name": "Rise of the Tomb Raider: 20 Year Celebration", "price": "1.04", "region": "T", "data": "7/11", "status": "GOLD" },
  { "name": "Road 96", "price": "1.42", "region": "A", "data": "7/8/", "status": "" },
  { "name": "Rogue Lords", "price": "0.66", "region": "A", "data": "7/13", "status": "" },
  { "name": "Roguebook Xbox One", "price": "0.69", "region": "A", "data": "7/13", "status": "" },
  { "name": "Roguebook Xbox Series X|S", "price": "0.83", "region": "A", "data": "7/13", "status": "" },
  { "name": "Russian Subway Dogs", "price": "2.71", "region": "A", "data": "7/13", "status": "" },
  { "name": "Ruvato: Original Complex", "price": "0.41", "region": "A", "data": "7/11", "status": "GOLD" },
  { "name": "SOL DIVIDE -SWORD OF DARKNESS-", "price": "3.77", "region": "A", "data": "7/11", "status": "" },
  { "name": "SOMA", "price": "1.13", "region": "T", "data": "7/11", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "4.94", "region": "A", "data": "12/3", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "6.60", "region": "A", "data": "1/1/", "status": "" },
  { "name": "STRIKERS 1945", "price": "3.77", "region": "A", "data": "7/11", "status": "" },
  { "name": "STRIKERS 1945 II", "price": "3.77", "region": "A", "data": "7/11", "status": "" },
  { "name": "STRIKERS 1945 III", "price": "3.77", "region": "A", "data": "7/11", "status": "" },
  { "name": "Samurai Aces", "price": "3.77", "region": "A", "data": "7/11", "status": "" },
  { "name": "Samurai Aces III: Sengoku Cannon", "price": "3.77", "region": "A", "data": "7/11", "status": "" },
  { "name": "Saturnalia", "price": "0.71", "region": "A", "data": "7/11", "status": "" },
  { "name": "Sayonara Wild Hearts", "price": "0.43", "region": "A", "data": "7/14", "status": "" },
  { "name": "Scrabble", "price": "5.67", "region": "C", "data": "7/11", "status": "GOLD" },
  { "name": "Sea of Thieves", "price": "5.74", "region": "E", "data": "7/13", "status": "" },
  { "name": "Sea of Thieves Deluxe Edition", "price": "7.20", "region": "E", "data": "7/13", "status": "" },
  { "name": "Seduction: A Monk's Fate", "price": "0.27", "region": "A", "data": "7/11", "status": "" },
  { "name": "Seeds of Resilience", "price": "0.08", "region": "A", "data": "7/11", "status": "" },
  { "name": "Sensible Blood Rugby", "price": "0.12", "region": "A", "data": "7/11", "status": "" },
  { "name": "Session: Skate Sim", "price": "1.38", "region": "A", "data": "7/13", "status": "" },
  { "name": "Shadow of the Tomb Raider Definitive Edition", "price": "2.50", "region": "T", "data": "7/11", "status": "GOLD" },
  { "name": "Shalnor Legends: Sacred Lands", "price": "0.11", "region": "A", "data": "7/11", "status": "" },
  { "name": "She Wants Me Dead", "price": "0.16", "region": "A", "data": "7/11", "status": "" },
  { "name": "Sherlock Holmes Chapter One", "price": "3.45", "region": "T", "data": "7/11", "status": "" },
  { "name": "Sherlock Holmes: Crimes and Punishments + Sherlock Holmes...", "price": "3.46", "region": "T", "data": "7/11", "status": "" },
  { "name": "Ship of Fools", "price": "2.84", "region": "A", "data": "7/14", "status": "" },
  { "name": "SiNKR", "price": "0.09", "region": "A", "data": "7/11", "status": "" },
  { "name": "SiNKR 2", "price": "0.09", "region": "A", "data": "7/11", "status": "" },
  { "name": "Sigi - A Fart for Melusina", "price": "0.05", "region": "A", "data": "7/11", "status": "" },
  { "name": "Silver Chains", "price": "0.21", "region": "A", "data": "7/11", "status": "GOLD" },
  { "name": "Skul: The Hero Slayer", "price": "0.66", "region": "A", "data": "7/11", "status": "" },
  { "name": "Snake Pass", "price": "0.16", "region": "A", "data": "7/11", "status": "" },
  { "name": "Snooker Nation Championship", "price": "0.16", "region": "A", "data": "7/11", "status": "" },
  { "name": "SnowRunner", "price": "4.21", "region": "T", "data": "7/11", "status": "GOLD" },
  { "name": "Soccer Cup 2022", "price": "0.61", "region": "T", "data": "7/11", "status": "" },
  { "name": "Space Gladiators", "price": "0.66", "region": "A", "data": "7/11", "status": "GOLD" },
  { "name": "Space Tail: Every Journey Leads Home Ultimate Edition", "price": "0.38", "region": "A", "data": "7/11", "status": "" },
  { "name": "Sparkle Bundle", "price": "0.49", "region": "A", "data": "12/3", "status": "" },
  { "name": "Speed Truck Racing", "price": "0.19", "region": "A", "data": "7/11", "status": "" },
  { "name": "Star Hunter DX", "price": "0.14", "region": "A", "data": "7/11", "status": "" },
  { "name": "Starlight Shores", "price": "1.04", "region": "T", "data": "7/11", "status": "" },
  { "name": "Steelrising - Standard Edition", "price": "7.53", "region": "A", "data": "7/13", "status": "" },
  { "name": "Super Mega Baseball™ 4", "price": "23.78", "region": "A", "data": "7/18", "status": "" },
  { "name": "Super Mega Baseball™ 4 Ballpark Edition", "price": "28.10", "region": "A", "data": "7/18", "status": "" },
  { "name": "Super Mutant Alien Assault", "price": "0.08", "region": "A", "data": "7/11", "status": "" },
  { "name": "Super Pixel Kid", "price": "0.06", "region": "A", "data": "7/17", "status": "" },
  { "name": "Super Sami Roll", "price": "0.29", "region": "A", "data": "7/11", "status": "GOLD" },
  { "name": "Surviving the Aftermath: Ultimate Colony Edition", "price": "0.76", "region": "A", "data": "7/11", "status": "" },
  { "name": "TENGAI", "price": "3.77", "region": "A", "data": "7/11", "status": "" },
  { "name": "TT Isle of Man: Ride on the Edge 3", "price": "25.70", "region": "C", "data": "7/13", "status": "" },
  { "name": "Tainted Grail: Conquest", "price": "0.38", "region": "A", "data": "7/11", "status": "" },
  { "name": "Tennis World Tour 2 Ace Edition", "price": "3.47", "region": "A", "data": "7/13", "status": "" },
  { "name": "The Adventure Pals", "price": "0.37", "region": "T", "data": "7/11", "status": "" },
  { "name": "The Big Con", "price": "0.29", "region": "A", "data": "7/11", "status": "" },
  { "name": "The Bunker", "price": "0.27", "region": "A", "data": "7/11", "status": "" },
  { "name": "The Diabolical Trilogy", "price": "0.33", "region": "A", "data": "7/11", "status": "" },
  { "name": "The Escapists", "price": "0.15", "region": "A", "data": "7/14", "status": "" },
  { "name": "The Escapists 2 - Game of the Year Edition", "price": "0.34", "region": "A", "data": "7/14", "status": "" },
  { "name": "The Escapists: Supermax Edition", "price": "0.97", "region": "A", "data": "4/30", "status": "" },
  { "name": "The Gardens Between", "price": "0.27", "region": "A", "data": "7/11", "status": "GOLD" },
  { "name": "The Great Perhaps", "price": "0.16", "region": "A", "data": "7/11", "status": "" },
  { "name": "The Hand Of Merlin", "price": "0.55", "region": "A", "data": "7/11", "status": "" },
  { "name": "The Jackbox Party Quadpack", "price": "2.17", "region": "A", "data": "12/3", "status": "" },
  { "name": "The Knight Witch", "price": "2.33", "region": "A", "data": "7/14", "status": "" },
  { "name": "The Lord of the Rings: Gollum™", "price": "18.83", "region": "T", "data": "7/13", "status": "" },
  { "name": "The Lost And The Wicked", "price": "0.44", "region": "A", "data": "7/15", "status": "" },
  { "name": "The Pathless", "price": "5.74", "region": "E", "data": "7/14", "status": "" },
  { "name": "The Serpent Rogue", "price": "0.87", "region": "A", "data": "7/14", "status": "" },
  { "name": "The Sinking City Xbox Series X|S", "price": "2.69", "region": "T", "data": "7/11", "status": "" },
  { "name": "The Sinking City – Necronomicon Edition", "price": "5.02", "region": "A", "data": "7/13", "status": "" },
  { "name": "The Survivalists", "price": "1.16", "region": "A", "data": "7/14", "status": "" },
  { "name": "Thief Simulator", "price": "0.38", "region": "A", "data": "7/11", "status": "" },
  { "name": "Through the Woods", "price": "0.19", "region": "A", "data": "7/11", "status": "" },
  { "name": "Thymesia", "price": "3.88", "region": "A", "data": "7/14", "status": "" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Deluxe Edition", "price": "2.78", "region": "A", "data": "7/11", "status": "GOLD" },
  { "name": "Tomb Raider: Definitive Edition", "price": "0.82", "region": "T", "data": "7/11", "status": "GOLD" },
  { "name": "Train Life - Orient-Express Train Edition", "price": "0.89", "region": "A", "data": "7/13", "status": "" },
  { "name": "Transport Fever 2: Console Edition - Deluxe", "price": "16.48", "region": "T", "data": "7/13", "status": "" },
  { "name": "Tricks Magician", "price": "0.22", "region": "A", "data": "7/8/", "status": "" },
  { "name": "Turok", "price": "0.38", "region": "A", "data": "7/11", "status": "" },
  { "name": "Tycoon Bundle", "price": "0.82", "region": "A", "data": "7/11", "status": "" },
  { "name": "Tyd wag vir Niemand", "price": "0.08", "region": "A", "data": "7/11", "status": "" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "0.52", "region": "A", "data": "12/3", "status": "" },
  { "name": "United Assault - Battle of the Bulge", "price": "0.54", "region": "A", "data": "7/11", "status": "GOLD" },
  { "name": "Valentino Rossi The Game", "price": "0.57", "region": "T", "data": "7/11", "status": "" },
  { "name": "Vampire: The Masquerade - Coteries of New York", "price": "0.11", "region": "A", "data": "7/11", "status": "" },
  { "name": "Vampire: The Masquerade - Shadows of New York", "price": "0.14", "region": "A", "data": "7/11", "status": "" },
  { "name": "Vampire: The Masquerade - Swansong Xbox One", "price": "8.49", "region": "A", "data": "7/13", "status": "" },
  { "name": "Vampire: The Masquerade - Swansong Xbox Series X|S", "price": "8.49", "region": "A", "data": "7/13", "status": "" },
  { "name": "Vampyr", "price": "1.11", "region": "A", "data": "7/11", "status": "GOLD" },
  { "name": "Vermintide - Digital Value Pack", "price": "1.54", "region": "A", "data": "3/7/", "status": "" },
  { "name": "Violett Remastered", "price": "0.05", "region": "A", "data": "7/11", "status": "" },
  { "name": "Vision Soft Reset", "price": "0.44", "region": "A", "data": "7/15", "status": "" },
  { "name": "Void Bastards: DeLUXe Bundle", "price": "2.57", "region": "E", "data": "7/11", "status": "" },
  { "name": "Vosaria: Lair of the Forgotten", "price": "0.11", "region": "A", "data": "7/11", "status": "" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "2.46", "region": "A", "data": "8/31", "status": "" },
  { "name": "WRC Generations - The FIA WRC Official Game", "price": "7.72", "region": "A", "data": "7/13", "status": "" },
  { "name": "WW1 Game Series Bundle", "price": "1.16", "region": "A", "data": "7/11", "status": "" },
  { "name": "Wandersong", "price": "0.27", "region": "A", "data": "7/11", "status": "" },
  { "name": "War Thunder - Full Alert Bundle", "price": "11.50", "region": "C", "data": "7/11", "status": "" },
  { "name": "Warhammer 40,000: Space Wolf", "price": "0.47", "region": "A", "data": "7/11", "status": "" },
  { "name": "Warhammer: End Times - Vermintide", "price": "0.54", "region": "A", "data": "7/11", "status": "" },
  { "name": "Warhammer: Vermintide 2", "price": "0.23", "region": "A", "data": "7/11", "status": "" },
  { "name": "Warhammer: Vermintide 2 - Premium Edition", "price": "0.35", "region": "A", "data": "7/11", "status": "" },
  { "name": "Warhammer: Vermintide 2 - Ultimate Edition", "price": "0.40", "region": "A", "data": "7/11", "status": "" },
  { "name": "Watch Dogs®2 - Deluxe Edition", "price": "1.97", "region": "A", "data": "7/11", "status": "GOLD" },
  { "name": "We Were Here Too", "price": "0.63", "region": "T", "data": "7/11", "status": "" },
  { "name": "Werewolf: The Apocalypse - Earthblood Champion of Gaia Xb...", "price": "0.33", "region": "A", "data": "7/13", "status": "" },
  { "name": "Werewolf: The Apocalypse - Earthblood Champion of Gaia Xbox Series X|S", "price": "0.33", "region": "A", "data": "7/13", "status": "" },
  { "name": "Werewolf: The Apocalypse — Heart of the Forest", "price": "0.29", "region": "A", "data": "7/11", "status": "" },
  { "name": "Wheel Of Fortune®", "price": "0.40", "region": "A", "data": "7/11", "status": "GOLD" },
  { "name": "Whispering Willows", "price": "0.10", "region": "A", "data": "7/11", "status": "" },
  { "name": "Wolcen: Lords of Mayhem - Deluxe Edition", "price": "11.63", "region": "I", "data": "7/11", "status": "" },
  { "name": "Word Sudoku by POWGI", "price": "0.22", "region": "A", "data": "7/11", "status": "" },
  { "name": "Word Wheel by POWGI", "price": "0.22", "region": "A", "data": "7/11", "status": "" },
  { "name": "Wordbreaker by POWGI", "price": "0.22", "region": "A", "data": "7/11", "status": "" },
  { "name": "Worms Battlegrounds + Worms W.M.D", "price": "0.48", "region": "A", "data": "7/14", "status": "" },
  { "name": "Worms Rumble", "price": "0.17", "region": "A", "data": "7/14", "status": "" },
  { "name": "Yaga", "price": "0.35", "region": "A", "data": "7/11", "status": "" },
  { "name": "Yuoni", "price": "0.24", "region": "A", "data": "7/11", "status": "" },
  { "name": "ZERO GUNNER 2-", "price": "3.77", "region": "A", "data": "7/11", "status": "" }
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
    a = 55
  } else if (value > 1 && value <= 5) {
    a = 65
  } else if (value > 5 && value <= 10) {
    a = 80
  } else if (value > 10 && value <= 15) {
    a = 100
  } else if (value > 15 && value <= 20) {
    a = 110
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
