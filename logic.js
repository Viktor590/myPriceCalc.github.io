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
  { "name": "'n Verlore Verstand", "price": "0.03", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "ASTRONEER", "price": "1.05", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "ASTRONEER: Evolution Edition", "price": "0.57", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Absolute Deduction bundle", "price": "2.19", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Aces of the Luftwaffe Squadron - Extended Edition", "price": "0.08", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Aery - A New Frontier", "price": "0.11", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Aery - Broken Memories", "price": "0.13", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Aery - Flow of Time", "price": "0.12", "flag": "🇦🇷", "date": "23.04", "status": " GP" },
  { "name": "Afterimage", "price": "1.09", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Age of Empires 25th Anniversary Collection", "price": "1.72", "flag": "🇦🇷", "date": "30.12", "status": " GP" },
  { "name": "Age of Empires: Definitive Collection", "price": "0.7", "flag": "🇦🇷", "date": "05.10", "status": " GP" },
  { "name": "Aggelos", "price": "0.04", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Airborne Bundle", "price": "0.57", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Airborne Kingdom", "price": "1.11", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Airhead", "price": "7.44", "flag": "🇹🇷", "date": "30.04", "status": "" },
  { "name": "Akuto: Showdown", "price": "0.04", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Alex Kidd in Miracle World DX", "price": "0.07", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "America’s Greatest Game Shows: Wheel of Fortune® & Jeopar...", "price": "0.17", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Among Us", "price": "0.05", "flag": "🇦🇷", "date": "23.04", "status": " GP" },
  { "name": "Ancestors Legacy", "price": "0.14", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "AngerForce and AlienCruise Arcade Shooting Bundle", "price": "0.04", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Anno 1800™ Console Edition - Deluxe", "price": "3.44", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Arcade Paradise | High Score Edition", "price": "0.4", "flag": "🇦🇷", "date": "01.07", "status": " GP" },
  { "name": "Arcade Spirits", "price": "0.09", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Arcade Spirits: The New Challengers", "price": "0.21", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Archaica: The Path Of Light", "price": "0.07", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Are You Smarter Than A 5th Grader?", "price": "1.3", "flag": "🇹🇷", "date": "30.04", "status": "" },
  { "name": "Assassin's Creed IV Black Flag", "price": "0.42", "flag": "🇹🇷", "date": "30.04", "status": " GP" },
  { "name": "Assassin's Creed® Bundle: Assassin's Creed® Valhalla, Ass...", "price": "39.68", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey - DELUXE EDITION", "price": "17.36", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey - GOLD EDITION", "price": "4.96", "flag": "🇹🇷", "date": "30.04", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey - ULTIMATE EDITION", "price": "22.94", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Assassin's Creed® Origins - DELUXE EDITION", "price": "16.74", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Assassin's Creed® Origins - GOLD EDITION", "price": "4.96", "flag": "🇹🇷", "date": "30.04", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Complete Edition", "price": "24.8", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Ragnarök Edition", "price": "14.88", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin’s Creed® Valhalla + Immortals Fenyx Rising™ Bundle", "price": "24.8", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Astro Flame Starfighter (Xbox Series X|S)", "price": "0.12", "flag": "🇦🇷", "date": "23.04", "status": " GP" },
  { "name": "Atomic Heart - Gold Edition", "price": "15.0", "flag": "🇦🇷", "date": "29.04", "status": " GP" },
  { "name": "Atomic Heart - Premium Edition", "price": "17.0", "flag": "🇦🇷", "date": "16.08", "status": " GP" },
  { "name": "Attack of the Earthlings", "price": "0.13", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Awarded Platformer Bundle", "price": "0.21", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Awkward", "price": "0.45", "flag": "🇹🇷", "date": "23.04", "status": "" },
  { "name": "BATTLETECH Mercenary Collection", "price": "1.29", "flag": "🇦🇷", "date": "13.06", "status": " GP" },
  { "name": "Back 4 Blood", "price": "0.62", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Batman: Arkham Collection", "price": "1.41", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Batman: Arkham Knight Premium Edition", "price": "1.75", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Batora: Lost Haven", "price": "0.7", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Beat of Montezuma", "price": "0.07", "flag": "🇦🇷", "date": "03.05", "status": "" },
  { "name": "Beholder 2", "price": "0.03", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Bestial Reception (Windows)", "price": "0.06", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Big Moonstone Pack -- 5,500", "price": "3.6", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "BioShock 2 Remastered", "price": "0.88", "flag": "🇹🇷", "date": "30.04", "status": " GP" },
  { "name": "BioShock Infinite: The Complete Edition", "price": "1.41", "flag": "🇹🇷", "date": "30.04", "status": " GP" },
  { "name": "BioShock Remastered", "price": "1.41", "flag": "🇹🇷", "date": "30.04", "status": " GP" },
  { "name": "Bit Dungeon Plus", "price": "0.02", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Blasphemous", "price": "0.55", "flag": "🇹🇷", "date": "30.04", "status": " GP" },
  { "name": "Bloodshore", "price": "0.13", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Borderlands 3: Next Level Edition", "price": "2.32", "flag": "🇹🇷", "date": "30.04", "status": " GP" },
  { "name": "Borderlands 3: Ultimate Edition", "price": "6.59", "flag": "🇹🇷", "date": "30.04", "status": " GP" },
  { "name": "Boss Rush: Mythology (Xbox Series X|S)", "price": "0.09", "flag": "🇦🇷", "date": "23.04", "status": " GP" },
  { "name": "Bramble: The Mountain King", "price": "0.21", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Bravery and Greed", "price": "0.56", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Breathedge", "price": "0.13", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Builder Flipper bundle", "price": "0.61", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Bus Simulator", "price": "0.25", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Call of Duty®: Advanced Warfare Gold Edition", "price": "2.17", "flag": "🇹🇷", "date": "30.04", "status": "" },
  { "name": "Call of Duty®: Black Ops 4", "price": "5.79", "flag": "🇹🇷", "date": "30.04", "status": "" },
  { "name": "Call of Duty®: Black Ops Cold War - Cross-Gen Bundle", "price": "7.26", "flag": "🇹🇷", "date": "30.04", "status": "" },
  { "name": "Call of Duty®: Black Ops Cold War", "price": "6.13", "flag": "🇹🇷", "date": "30.04", "status": "" },
  { "name": "Call of Duty®: Black Ops III - Zombies Deluxe", "price": "5.83", "flag": "🇹🇷", "date": "30.04", "status": "" },
  { "name": "Call of Duty®: Ghosts", "price": "2.17", "flag": "🇹🇷", "date": "30.04", "status": "" },
  { "name": "Call of Duty®: Infinite Warfare - Digital Deluxe Edition", "price": "4.84", "flag": "🇹🇷", "date": "30.04", "status": "" },
  { "name": "Call of Duty®: Infinite Warfare - Launch Edition", "price": "2.53", "flag": "🇹🇷", "date": "30.04", "status": "" },
  { "name": "Call of Duty®: Modern Warfare® - Digital Standard Edition", "price": "4.83", "flag": "🇹🇷", "date": "30.04", "status": "" },
  { "name": "Call of Duty®: Vanguard - Standard Edition", "price": "6.19", "flag": "🇹🇷", "date": "30.04", "status": "" },
  { "name": "Call of Duty®: WWII - Gold Edition", "price": "3.07", "flag": "🇹🇷", "date": "30.04", "status": "" },
  { "name": "Call of the Wild: The Angler™ - Deluxe Edition", "price": "0.64", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Candleman Complete Journey Bundle with Wenjia", "price": "0.1", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Candleman Definitive Edition", "price": "0.06", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "CarX Drift Racing Online", "price": "0.8", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Cars 3: Driven to Win", "price": "0.28", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Cassette Beasts: Deluxe Edition", "price": "0.37", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Chef Life - AL FORNO EDITION", "price": "3.0", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Chess Gambit", "price": "0.09", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Chicken Police - Paint it RED!", "price": "0.61", "flag": "🇹🇷", "date": "30.04", "status": "" },
  { "name": "Chivalry 2 King's Edition", "price": "0.86", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "Chivalry 2 Special Edition", "price": "0.71", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "Chivalry 2", "price": "0.29", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Chrome Wolf", "price": "0.17", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Cities: Skylines - Mayor's Edition", "price": "0.75", "flag": "🇦🇷", "date": "01.04", "status": " GP" },
  { "name": "Cities: Skylines - Premium Edition 2", "price": "1.0", "flag": "🇦🇷", "date": "01.04", "status": " GP" },
  { "name": "Classic Pool", "price": "0.05", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Clocker & Mr. Pumpkin Adventure & Alien Cruise Bundle", "price": "0.08", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Clone Drone in the Danger Zone", "price": "0.11", "flag": "🇦🇷", "date": "23.04", "status": " GP" },
  { "name": "Cloudpunk - XBS/X", "price": "0.06", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Cloudpunk", "price": "0.06", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Clouds & Sheep 2", "price": "0.01", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Cluedo Deluxe Edition", "price": "0.26", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Clunky Hero", "price": "0.4", "flag": "🇹🇷", "date": "23.04", "status": " GP" },
  { "name": "Coffee, Plis", "price": "0.74", "flag": "🇹🇷", "date": "27.04", "status": "" },
  { "name": "Coffin Dodgers", "price": "0.06", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "CometStriker DX", "price": "0.88", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Conan Exiles - Complete Edition October 2021", "price": "2.3", "flag": "🇦🇷", "date": "16.08", "status": " GP" },
  { "name": "Conan Exiles - Isle of Siptah Edition", "price": "0.99", "flag": "🇦🇷", "date": "16.08", "status": " GP" },
  { "name": "Construction Simulator 3 - Console Edition", "price": "0.11", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Cook, Serve, Delicious!", "price": "0.12", "flag": "🇦🇷", "date": "23.04", "status": " GP" },
  { "name": "Cotton Games’ New Game Bundle", "price": "0.04", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Crash Team Rumble™ - Standard Edition", "price": "13.0", "flag": "🇹🇷", "date": "30.04", "status": "" },
  { "name": "Crash™ Team Racing Nitro-Fueled", "price": "2.6", "flag": "🇹🇷", "date": "30.04", "status": "" },
  { "name": "Crazy Sports Bundle", "price": "0.01", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Crusader Kings III: Royal Edition", "price": "1.07", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Cry Babies Magic Tears: The Big Game", "price": "0.25", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Curse of the Sea Rats", "price": "0.25", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Cyber Edition", "price": "0.84", "flag": "🇦🇷", "date": "22.04", "status": " GP" },
  { "name": "Cyber Pool", "price": "0.02", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "CyberHive", "price": "0.03", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "DAS WIRED-HORROR-SPIELPAKET", "price": "0.57", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "DE-EXIT - Eternal Matters", "price": "2.17", "flag": "🇹🇷", "date": "30.04", "status": "" },
  { "name": "DEAD ISLAND 2 DELUXE EDITION", "price": "18.58", "flag": "🇹🇷", "date": "26.04", "status": "" },
  { "name": "DEAD ISLAND 2 GOLD EDITION", "price": "13.93", "flag": "🇹🇷", "date": "22.04", "status": " GP" },
  { "name": "DEATHLOOP Deluxe Edition", "price": "16.12", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "DIRT 5 Year One Edition", "price": "1.29", "flag": "🇦🇷", "date": "10.08", "status": " GP" },
  { "name": "DOOM Eternal: The Ancient Gods - Part One", "price": "5.27", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "DOOM Eternal: The Ancient Gods - Part Two", "price": "5.27", "flag": "🇹🇷", "date": "17.03", "status": " GP" },
  { "name": "DOOM Eternal: Year One Pass (PC)", "price": "7.95", "flag": "🇹🇷", "date": "29.04", "status": " GP" },
  { "name": "DOOM Eternal: Year One Pass", "price": "7.95", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "DOOM Slayers Collection", "price": "3.35", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "DYING : Reborn", "price": "0.02", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Dad's Monster House", "price": "0.05", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Danger Gazers", "price": "0.11", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Darkest Dungeon®: Ancestral Edition", "price": "0.4", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Dead Cells: Medley of Pain Bundle", "price": "0.57", "flag": "🇦🇷", "date": "16.09", "status": " GP" },
  { "name": "Dead Cells: Return to Castlevania Bundle", "price": "0.45", "flag": "🇦🇷", "date": "16.09", "status": " GP" },
  { "name": "Dead Island Definitive Collection", "price": "0.3", "flag": "🇹🇷", "date": "23.04", "status": " GP" },
  { "name": "Dead Island Definitive Edition", "price": "0.27", "flag": "🇹🇷", "date": "26.04", "status": "" },
  { "name": "Debtor: Enhanced Edition", "price": "0.05", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Deceive Inc. Black Tie Edition Content", "price": "0.21", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Deep Rock Galactic - Deluxe Edition", "price": "0.57", "flag": "🇦🇷", "date": "01.11", "status": " GP" },
  { "name": "Deep Rock Galactic - Ultimate Edition", "price": "0.71", "flag": "🇦🇷", "date": "01.11", "status": " GP" },
  { "name": "Deep Rock Galactic", "price": "0.21", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Deep Space Anomaly", "price": "0.05", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Diablo III: Eternal Collection", "price": "2.4", "flag": "🇹🇷", "date": "30.04", "status": "" },
  { "name": "Diablo® IV - Digital Deluxe Edition", "price": "45.36", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Diablo® IV - Standard Edition", "price": "35.19", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Diablo® IV - Ultimate Edition", "price": "50.12", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Die After Sunset", "price": "0.28", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Disco Elysium - The Final Cut", "price": "1.71", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Dishonored & Prey: The Arkane Collection", "price": "15.5", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "Dishonored®: Death of the Outsider™ Deluxe Bundle", "price": "12.34", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "Disney Dreamlight Valley: A Rift in Time", "price": "0.54", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Disrtust and Goliath Premium Survival Bundle", "price": "0.05", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Don't Knock Twice", "price": "0.08", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Dungeons 3", "price": "0.27", "flag": "🇦🇷", "date": "22.04", "status": "" },
  { "name": "Dungeons 4 - Digital Deluxe Edition", "price": "14.0", "flag": "🇦🇷", "date": "16.11", "status": " GP" },
  { "name": "Dungeons of Sundaria", "price": "0.67", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "EA SPORTS FC™ 24 Standard Edition Xbox One & Xbox Series X|S", "price": "13.02", "flag": "🇹🇷", "date": "24.04", "status": "" },
  { "name": "Eiyuden Chronicle: Rising", "price": "0.39", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "El Hijo - A Wild West Tale", "price": "0.17", "flag": "🇹🇷", "date": "30.04", "status": "" },
  { "name": "Elderand", "price": "0.18", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Endling - Extinction is Forever", "price": "1.3", "flag": "🇹🇷", "date": "30.04", "status": "" },
  { "name": "Endzone - A World Apart: Complete Edition", "price": "1.25", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Endzone - A World Apart: Survivor Edition", "price": "1.12", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Escape Academy Deluxe Edition", "price": "0.5", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Escape Dead Island", "price": "0.05", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Ethan: Meteor Hunter", "price": "0.02", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Evergate", "price": "0.04", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "F1® 23", "price": "30.38", "flag": "🇹🇷", "date": "24.04", "status": "" },
  { "name": "F1® Manager 2023 Deluxe Edition", "price": "13.64", "flag": "🇹🇷", "date": "16.10", "status": " GP" },
  { "name": "FAR CRY 4 + FAR CRY PRIMAL BUNDLE", "price": "0.94", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "FMV Action", "price": "0.34", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "FMV Detective", "price": "0.56", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "FMV Horror Bundle", "price": "0.45", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "FMV Murder Mystery Bundle", "price": "0.31", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "FOR HONOR – Gold Edition", "price": "24.8", "flag": "🇹🇷", "date": "25.04", "status": " GP" },
  { "name": "FOR HONOR – Ultimate Edition", "price": "39.68", "flag": "🇹🇷", "date": "25.04", "status": " GP" },
  { "name": "Fall of the New Age - Collectors Edition", "price": "0.28", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Fallen Knight", "price": "0.1", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Fallout 1st", "price": "0.17", "flag": "🇦🇷", "date": "", "status": "" },
  { "name": "Fallout 4", "price": "1.11", "flag": "🇹🇷", "date": "20.04", "status": "" },
  { "name": "Fallout 4: Game of the Year Edition", "price": "7.07", "flag": "🇹🇷", "date": "20.04", "status": "" },
  { "name": "Fallout 76", "price": "2.17", "flag": "🇹🇷", "date": "20.04", "status": "" },
  { "name": "Fallout 76: Atlantic City - Boardwalk Paradise Deluxe Edition", "price": "12.0", "flag": "🇦🇷", "date": "20.04", "status": "" },
  { "name": "Far Cry Insanity Bundle", "price": "1.0", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Far Cry® 5 Gold Edition + Far Cry ® New Dawn Deluxe Editi...", "price": "0.8", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Far Cry® 6 Deluxe Edition", "price": "6.01", "flag": "🇹🇷", "date": "30.04", "status": " GP" },
  { "name": "Far Cry® New Dawn Deluxe Edition", "price": "0.74", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Far Cry®5 Gold Edition", "price": "3.3", "flag": "🇦🇷", "date": "01.07", "status": " GP" },
  { "name": "Farm Bundle", "price": "0.57", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Farm Pets Bundle", "price": "0.86", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Farming Simulator 22 - Premium Edition", "price": "10.0", "flag": "🇦🇷", "date": "16.05", "status": " GP" },
  { "name": "Farming Simulator 22 - YEAR 1 Bundle", "price": "8.0", "flag": "🇦🇷", "date": "16.05", "status": " GP" },
  { "name": "Fighter Within", "price": "0.42", "flag": "🇹🇷", "date": "30.04", "status": " GP" },
  { "name": "Fishing: Barents Sea Complete Edition", "price": "0.16", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Five Dates", "price": "0.13", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Flailing Limbs Bundle", "price": "0.25", "flag": "🇦🇷", "date": "01.08", "status": " GP" },
  { "name": "Flaskoman", "price": "0.04", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Flying Islands Games Bundle", "price": "0.11", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "For The King", "price": "0.07", "flag": "🇦🇷", "date": "22.04", "status": " GP" },
  { "name": "Forza Horizon 4 Expansions Bundle", "price": "2.81", "flag": "🇦🇷", "date": "02.10", "status": " GP" },
  { "name": "Forza Horizon 5 PLUS Hot Wheels Bundle", "price": "10.8", "flag": "🇦🇷", "date": "30.12", "status": " GP" },
  { "name": "Frane: Dragons' Odyssey", "price": "0.13", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Fresh Start", "price": "0.16", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "From Space", "price": "0.75", "flag": "🇦🇷", "date": "23.04", "status": " GP" },
  { "name": "Frostpunk: Complete Collection", "price": "0.64", "flag": "🇦🇷", "date": "16.07", "status": " GP" },
  { "name": "Fuga: Melodies of Steel 2 - Deluxe Edition", "price": "8.0", "flag": "🇦🇷", "date": "22.04", "status": " GP" },
  { "name": "Fuga: Melodies of Steel 2 - Ultimate Edition", "price": "8.55", "flag": "🇦🇷", "date": "22.04", "status": " GP" },
  { "name": "Gang Beasts", "price": "0.1", "flag": "🇦🇷", "date": "23.04", "status": " GP" },
  { "name": "Garden Bundle", "price": "0.64", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Gears of War 4 and Halo 5: Guardians Bundle", "price": "0.4", "flag": "🇦🇷", "date": "31.01", "status": " GP" },
  { "name": "Gears of War Ultimate Edition Deluxe Version", "price": "1.3", "flag": "🇦🇷", "date": "31.05", "status": " GP" },
  { "name": "Gene Rain Ultimate & Your Toy Bundle", "price": "0.04", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Gene Rain Wind Tower: Ultimate Edition", "price": "0.02", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Generation Zero ® - Silver Bundle", "price": "0.71", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Generation Zero ® - Ultimate Bundle", "price": "1.0", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Generation Zero® - Gold Bundle", "price": "0.86", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Get Packed", "price": "0.09", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Ghostwire: Tokyo Deluxe Edition", "price": "19.22", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Ghoulboy", "price": "0.04", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Goat Simulator 3 - Digital Downgrade Edition", "price": "2.0", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Goat Simulator: The GOATY", "price": "0.3", "flag": "🇦🇷", "date": "01.05", "status": " GP" },
  { "name": "Goat Simulator: Waste Of Space Bundle", "price": "0.14", "flag": "🇦🇷", "date": "01.05", "status": " GP" },
  { "name": "God of Rock", "price": "1.07", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Godstrike", "price": "0.44", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Golf Club: Wasteland", "price": "0.04", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Golf With Your Friends - Starter Edition", "price": "18.0", "flag": "🇦🇷", "date": "16.07", "status": " GP" },
  { "name": "Golf With Your Friends - Ultimate Edition", "price": "33.46", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Goliath", "price": "0.02", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Goons: Legends & Mayhem", "price": "0.28", "flag": "🇦🇷", "date": "26.04", "status": "" },
  { "name": "Gord", "price": "8.12", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Gravity Heroes", "price": "0.07", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Green Soldiers Heroes", "price": "0.26", "flag": "🇹🇷", "date": "23.04", "status": "" },
  { "name": "Griftlands", "price": "0.18", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Guacamelee! 2", "price": "0.09", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Guilty Gear -Strive- Daredevil Edition", "price": "7.09", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Guns, Gore and Cannoli 2", "price": "0.06", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Guns, Gore and Cannoli", "price": "0.04", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "HITMAN™ 2", "price": "1.57", "flag": "🇦🇷", "date": "04.02", "status": "" },
  { "name": "HUMANKIND™ - Heritage Edition", "price": "11.5", "flag": "🇦🇷", "date": "16.08", "status": " GP" },
  { "name": "Halo 5: Guardians – Digital Deluxe Edition", "price": "6.5", "flag": "🇦🇷", "date": "31.05", "status": " GP" },
  { "name": "Happi Basudei (for Windows 10)", "price": "0.03", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Happi Basudei", "price": "0.03", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Harmony: The Fall of Reverie", "price": "1.06", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Hasbro Family Fun Pack - Super Edition", "price": "0.25", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Headspun", "price": "0.06", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Hello Neighbor 2 Deluxe Edition", "price": "5.5", "flag": "🇦🇷", "date": "16.12", "status": " GP" },
  { "name": "Hi-Fi RUSH Deluxe Edition", "price": "14.88", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Hokko Life", "price": "0.39", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Homefront®: The Revolution", "price": "0.02", "flag": "🇦🇷", "date": "23.04", "status": " GP" },
  { "name": "House Flipper", "price": "0.15", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Huge Moonstone Pack -- 14,500", "price": "9.0", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Human Fall Flat", "price": "0.53", "flag": "🇦🇷", "date": "23.04", "status": " GP" },
  { "name": "Hunting Simulator 2 Xbox One", "price": "0.21", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Hunting Simulator 2 Xbox Series X|S", "price": "0.18", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Hypnospace Outlaw & Slayers X: Terminal Aftermath: Vengance of the Slayer Bundle", "price": "0.48", "flag": "🇦 🇷", "date": "01.06", "status": " GP" },
  { "name": "I Am Fish", "price": "0.11", "flag": "🇦🇷", "date": "22.04", "status": "" },
  { "name": "I Saw Black Clouds", "price": "0.13", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "INSIDE & LIMBO Bundle", "price": "2.52", "flag": "🇦🇷", "date": "22.04", "status": " GP" },
  { "name": "Immortals Fenyx Rising™ Gold Edition", "price": "5.5", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Immortals of Aveum™ Deluxe Edition", "price": "22.32", "flag": "🇹🇷", "date": "24.04", "status": "" },
  { "name": "Inertial Drift", "price": "0.15", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Initial 2: New Stage & Xuan Yuan Sword Bundle", "price": "0.18", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Initial2: New Stage", "price": "0.16", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Insurgency: Sandstorm - Deluxe Edition", "price": "17.0", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Insurgency: Sandstorm - Gold Edition", "price": "25.0", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Insurgency: Sandstorm - Ultimate Edition", "price": "27.19", "flag": "🇦🇷", "date": "23.04", "status": " GP" },
  { "name": "Ironcast", "price": "0.05", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Isekai Rondo", "price": "0.19", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Islanders", "price": "0.05", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Isonzo: Deluxe Edition", "price": "0.32", "flag": "🇦🇷", "date": "23.04", "status": " GP" },
  { "name": "Istanbul: Digital Edition", "price": "0.89", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Jinshin", "price": "0.2", "flag": "🇦🇷", "date": "23.04", "status": " GP" },
  { "name": "Jorel’s Brother and The Most Important Game of the Galaxy Complete Edition", "price": "0.26", "flag": "🇦🇷", "date": "25.04", "status": "" },
  { "name": "Jurassic World Evolution 2: Deluxe Edition", "price": "7.0", "flag": "🇦🇷", "date": "16.05", "status": " GP" },
  { "name": "Just Cause 4 - Complete Edition", "price": "5.0", "flag": "🇦🇷", "date": "16.05", "status": " GP" },
  { "name": "Just Cause 4 - Gold Edition", "price": "4.0", "flag": "🇦🇷", "date": "16.05", "status": " GP" },
  { "name": "Kerbal Space Program Enhanced Edition Complete", "price": "2.75", "flag": "🇹🇷", "date": "30.04", "status": " GP" },
  { "name": "King of Seas", "price": "0.11", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Kingdom Come: Deliverance", "price": "0.83", "flag": "🇹🇷", "date": "23.04", "status": " GP" },
  { "name": "Kitaria Fables", "price": "0.14", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Kitaria Fables: Deluxe Edition", "price": "0.15", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Klabater Bundle: The Amazing American Circus, Moonshine Inc., Heliborne and Crossroads Inn", "price": "1.87", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Knight vs Giant: The Broken Excalibur", "price": "0.28", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Knights of Grayfang", "price": "0.2", "flag": "🇦🇷", "date": "23.04", "status": " GP" },
  { "name": "Kraken Academy!!", "price": "0.13", "flag": "🇦🇷", "date": "23.04", "status": " GP" },
  { "name": "Kung Fu Fighting", "price": "0.02", "flag": "🇦🇷", "date": "25.04", "status": "" },
  { "name": "LA Cops", "price": "0.07", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "LEGO® Harry Potter™ Collection", "price": "0.28", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "LEGO® Marvel Collection", "price": "1.41", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "LEGO® Star Wars™: The Skywalker Saga", "price": "5.0", "flag": "🇦🇷", "date": "01.05", "status": " GP" },
  { "name": "Lacuna - A Sci-Fi Noir Adventure", "price": "0.07", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Late Shift", "price": "0.1", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Lawn Mowing Simulator", "price": "0.37", "flag": "🇦🇷", "date": "23.04", "status": " GP" },
  { "name": "Legend of Keepers: Career of a Dungeon Manager", "price": "0.23", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Leisure Suit Larry - Wet Dreams Saga Bundle", "price": "0.32", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Let's Build a Zoo & Dinosaur DLC Bundle", "price": "0.38", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "Let's Build a Zoo: Aquarium Odyssey Bundle", "price": "0.38", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "Let's Build a Zoo: Ultimate Bundle", "price": "0.48", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "Liftoff: Drone Racing Deluxe Edition", "price": "0.16", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Light & Dark Bundle", "price": "2.0", "flag": "🇦🇷", "date": "02.11", "status": "" },
  { "name": "Little Big Workshop", "price": "0.44", "flag": "🇹🇷", "date": "30.04", "status": "" },
  { "name": "Lonely Mountains: Downhill - Eldfjall Island", "price": "0.17", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Loretta", "price": "0.21", "flag": "🇦🇷", "date": "26.04", "status": "" },
  { "name": "Lost Artifacts: Time Machine", "price": "0.09", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Love FMV", "price": "0.35", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Luxury Garden Bundle", "price": "0.86", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "MONOPOLY PLUS + MONOPOLY Madness", "price": "2.12", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "MUSYNX Deluxe Edition", "price": "0.94", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "MUSYNX Song Pass bundle", "price": "1.5", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Madden NFL 23 Xbox One", "price": "6.4", "flag": "🇦🇷", "date": "29.04", "status": "" },
  { "name": "Madden NFL 23 Xbox Series X|S", "price": "7.5", "flag": "🇦🇷", "date": "29.04", "status": "" },
  { "name": "Madden NFL 24 Deluxe Edition Xbox Series X|S & Xbox One", "price": "12.4", "flag": "🇹🇷", "date": "24.04", "status": "" },
  { "name": "Madden NFL 24", "price": "8.68", "flag": "🇹🇷", "date": "24.04", "status": "" },
  { "name": "Mafia II: Definitive Edition", "price": "2.04", "flag": "🇹🇷", "date": "30.04", "status": " GP" },
  { "name": "Mafia III: Definitive Edition", "price": "2.04", "flag": "🇹🇷", "date": "30.04", "status": " GP" },
  { "name": "Maid of Sker", "price": "0.18", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Maneater Apex Edition", "price": "0.36", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Maneater", "price": "0.25", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Marble Duel", "price": "0.13", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Mark of the Ninja: Remastered", "price": "0.1", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Marvel's Midnight Suns Digital+ Edition for Xbox One", "price": "6.97", "flag": "🇹🇷", "date": "30.04", "status": " GP" },
  { "name": "Marvel's Midnight Suns Digital+ Edition for Xbox Series X|S", "price": "6.97", "flag": "🇹🇷", "date": "30.04", "status": " GP" },
  { "name": "Master of Survival bundle", "price": "0.09", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Mech Mechanic Simulator", "price": "0.11", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "MechWarrior 5: Mercenaries - JumpShip Edition", "price": "0.86", "flag": "🇦🇷", "date": "30.12", "status": " GP" },
  { "name": "Metro Redux Bundle", "price": "0.36", "flag": "🇹🇷", "date": "23.04", "status": " GP" },
  { "name": "Mia and the Dragon Princess", "price": "0.18", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.0", "flag": "🇦🇷", "date": "30.11", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.0", "flag": "🇹🇷", "date": "01.06", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.0", "flag": "🇦🇷", "date": "30.11", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.0", "flag": "🇹🇷", "date": "01.06", "status": "" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle - Windows 10", "price": "1.57", "flag": "🇹🇷", "date": "27.07", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle", "price": "1.57", "flag": "🇹🇷", "date": "27.07", "status": " GP" },
  { "name": "Minigolf Adventure", "price": "0.02", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Moon Raider and Sweet Witches Bundle", "price": "0.09", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Moonglow Bay", "price": "0.22", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Moonlighter: Complete Edition", "price": "0.34", "flag": "🇦🇷", "date": "01.12", "status": " GP" },
  { "name": "Morbid: The Seven Acolytes", "price": "0.06", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Mortal Kombat 11 Ultimate + Injustice 2 Leg. Edition Bundle", "price": "21.3", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Moving Out Deluxe Edition", "price": "1.36", "flag": "🇹🇷", "date": "30.04", "status": " GP" },
  { "name": "Moving Out", "price": "1.23", "flag": "🇹🇷", "date": "23.04", "status": "" },
  { "name": "Mr. Pumpkin Adventure Mr. Pumpkin 2: Kowloon walled city ...", "price": "0.06", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Mr. Pumpkin Series Bundle", "price": "0.04", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Mugsters", "price": "0.14", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Mushroom Quest", "price": "0.01", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Mushroom Savior", "price": "0.03", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "My Friend Peppa Pig - Complete Edition", "price": "5.5", "flag": "🇦🇷", "date": "16.07", "status": " GP" },
  { "name": "My Time at Portia Deluxe Edition", "price": "1.4", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "NBA 2K24 Baller Edition", "price": "13.55", "flag": "🇹🇷", "date": "30.04", "status": " GP" },
  { "name": "Narita Boy", "price": "0.3", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Neighbours back From Hell", "price": "0.63", "flag": "🇹🇷", "date": "30.04", "status": "" },
  { "name": "Neon Abyss Deluxe Edition", "price": "0.4", "flag": "🇦🇷", "date": "16.07", "status": " GP" },
  { "name": "New Tales from the Borderlands: Deluxe Edition", "price": "4.37", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Nexomon + Nexomon: Extinction - Complete Collection", "price": "0.26", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Nexomon", "price": "0.07", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Nexomon: Extinction", "price": "0.12", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Night Book", "price": "0.12", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.04", "flag": "🇦🇷", "date": "30.05", "status": "" },
  { "name": "Nippon Marathon", "price": "0.07", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "4.6", "flag": "🇦🇷", "date": "16.03", "status": " GP" },
  { "name": "No Place Like Home", "price": "0.18", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Nobody Saves the World", "price": "0.34", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Nordic Adventure Bundle", "price": "1.92", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Orcs Must Die! 3 Bundle", "price": "2.82", "flag": "🇹🇷", "date": "16.04", "status": " GP" },
  { "name": "Othercide", "price": "0.78", "flag": "🇦🇷", "date": "23.04", "status": " GP" },
  { "name": "Overcooked! + Overcooked! 2", "price": "0.16", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Overcooked! 2 - Gourmet Edition", "price": "0.56", "flag": "🇦🇷", "date": "16.12", "status": " GP" },
  { "name": "Overcooked", "price": "0.06", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "PAW Patrol: Grand Prix - Complete Edition", "price": "4.5", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "PERISH", "price": "3.82", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "PGA TOUR 2K23 Deluxe Edition", "price": "8.52", "flag": "🇹🇷", "date": "30.04", "status": " GP" },
  { "name": "Park Beyond", "price": "11.02", "flag": "🇹🇷", "date": "30.04", "status": " GP" },
  { "name": "Party Friends", "price": "0.06", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Pets Bundle", "price": "0.64", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Phantom Breaker: Omnia", "price": "0.89", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Phoenix Point: Behemoth Edition", "price": "0.43", "flag": "🇦🇷", "date": "30.12", "status": " GP" },
  { "name": "Planet Alpha", "price": "0.14", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Pocket Clothier", "price": "0.19", "flag": "🇦🇷", "date": "02.05", "status": "" },
  { "name": "Pocket League Story", "price": "0.19", "flag": "🇦🇷", "date": "02.05", "status": "" },
  { "name": "Police Stories", "price": "0.07", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Potion Permit", "price": "0.23", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Potion Permit: Deluxe Edition", "price": "1.33", "flag": "🇹🇷", "date": "30.04", "status": "" },
  { "name": "Prey®: Digital Deluxe Edition", "price": "7.07", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "Quadroids", "price": "0.11", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Quantum Replica", "price": "0.04", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "RABBIDS INVASION - GOLD EDITION", "price": "0.08", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "RAGE 2: Deluxe Edition", "price": "11.16", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "RAZED", "price": "0.04", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "RICO", "price": "0.06", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Railway Empire 2 - Digital Deluxe Edition", "price": "0.86", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "ReCore", "price": "2.5", "flag": "🇦🇷", "date": "", "status": "" },
  { "name": "Redfall Bite Back Edition", "price": "39.68", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Regular Moonstone Pack -- 2,500", "price": "1.8", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Remnant II - Deluxe Edition", "price": "5.5", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Remnant: From the Ashes - Complete Edition", "price": "1.5", "flag": "🇦🇷", "date": "01.12", "status": " GP" },
  { "name": "Richman 10", "price": "1.42", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Rico - Breakout Bundle", "price": "0.08", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Riders Republic™", "price": "5.42", "flag": "🇹🇷", "date": "30.04", "status": " GP" },
  { "name": "Rise of the Tomb Raider: 20 Year Celebration", "price": "5.11", "flag": "🇦🇷", "date": "29.04", "status": " GP" },
  { "name": "Rogue Stormers & Giana Sisters Bundle", "price": "0.03", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Rooten", "price": "0.03", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "RuneStone Keeper & YourToy & Distrust Bundle", "price": "0.05", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "SIMULACRA", "price": "0.13", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "2.14", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "1.6", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "SUPERHOT ONE OF US BUNDLE", "price": "0.67", "flag": "🇦🇷", "date": "01.04", "status": " GP" },
  { "name": "Saints Row", "price": "6.97", "flag": "🇹🇷", "date": "23.04", "status": " GP" },
  { "name": "Saints Row: Gat Out of Hell", "price": "0.04", "flag": "🇦🇷", "date": "23.04", "status": " GP" },
  { "name": "Session: Skate Sim Year One Complete Edition", "price": "4.85", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Session: Skate Sim", "price": "0.36", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Shadowblade Odyssey", "price": "0.02", "flag": "🇦🇷", "date": "20.04", "status": "" },
  { "name": "Sheltered", "price": "0.23", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Sherlock Holmes Chapter One Deluxe Edition", "price": "1.17", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Sherlock Purr 2 - Extended Edition", "price": "0.19", "flag": "🇦🇷", "date": "04.05", "status": "" },
  { "name": "Shing!", "price": "0.27", "flag": "🇦🇷", "date": "23.04", "status": " GP" },
  { "name": "Shoulders of Giants", "price": "0.89", "flag": "🇦🇷", "date": "23.04", "status": " GP" },
  { "name": "Sker Ritual", "price": "0.4", "flag": "🇦🇷", "date": "26.04", "status": "" },
  { "name": "Sker Ritual: Digital Deluxe Edition", "price": "0.56", "flag": "🇦🇷", "date": "26.04", "status": "" },
  { "name": "Skyrim Anniversary Edition + Fallout 4 G.O.T.Y Bundle", "price": "19.84", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Slime Rancher", "price": "0.06", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Small Moonstone Pack -- 1,200", "price": "0.9", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Smalland: Survive the Wilds", "price": "0.44", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Smelter", "price": "0.18", "flag": "🇦🇷", "date": "23.04", "status": " GP" },
  { "name": "Snake Pass", "price": "0.28", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Sniper Elite 5 Complete Edition", "price": "1.57", "flag": "🇦🇷", "date": "01.05", "status": " GP" },
  { "name": "Sniper Elite 5 Deluxe Edition", "price": "8.0", "flag": "🇦🇷", "date": "01.05", "status": " GP" },
  { "name": "SnowRunner (Windows 10)", "price": "2.33", "flag": "🇹🇷", "date": "23.04", "status": "" },
  { "name": "SnowRunner - 1-Anniversary Edition", "price": "7.44", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "SnowRunner", "price": "2.71", "flag": "🇹🇷", "date": "23.04", "status": " GP" },
  { "name": "Soul Axiom", "price": "0.11", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Soulstice", "price": "0.29", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Soulstice: Deluxe Edition", "price": "0.36", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Space Engineers: Ultimate Edition 2023", "price": "1.06", "flag": "🇦🇷", "date": "01.03", "status": " GP" },
  { "name": "Sparkle Bundle", "price": "0.16", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Spells & Secrets", "price": "0.38", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Spirit of the North: Enhanced Edition", "price": "0.09", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "SteamWorld Build & Dig Bundle", "price": "2.19", "flag": "🇦🇷", "date": "01.12", "status": " GP" },
  { "name": "SteamWorld Build Deluxe Edition", "price": "0.47", "flag": "🇦🇷", "date": "01.12", "status": " GP" },
  { "name": "Steel Rats™", "price": "0.02", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Steelrising - Standard Edition", "price": "1.46", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Steep X Games Gold Edition", "price": "0.32", "flag": "🇦🇷", "date": "25.04", "status": " GP" },
  { "name": "Stellar Interface", "price": "1.25", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Stellar Interface", "price": "1.56", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Stellaris: Console Edition - Deluxe Edition", "price": "0.55", "flag": "🇦🇷", "date": "16.10", "status": " GP" },
  { "name": "Strike Team Gladius", "price": "0.44", "flag": "🇦🇷", "date": "23.04", "status": " GP" },
  { "name": "Strong Moon", "price": "0.13", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Summertime Madness", "price": "0.13", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Sunset Overdrive Deluxe Edition", "price": "1.72", "flag": "🇹🇷", "date": "31.05", "status": " GP" },
  { "name": "Super Box Delivery: Beyond the Horizon", "price": "0.04", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Super Pixel Racers", "price": "0.05", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Super Snake Block DX", "price": "0.26", "flag": "🇹🇷", "date": "23.04", "status": "" },
  { "name": "Sword and Fairy: Together Forever", "price": "2.81", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Swordbreaker: Origins (Xbox Series X|S)", "price": "0.09", "flag": "🇦🇷", "date": "23.04", "status": " GP" },
  { "name": "Tales of ARISE + SCARLET NEXUS バンドル", "price": "37.18", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Tales of Arise - Beyond The Dawn Ultimate Edition", "price": "44.62", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Tales of Arise - Beyond the Dawn Deluxe Edition", "price": "37.18", "flag": "🇹🇷", "date": "22.04", "status": " GP" },
  { "name": "Tales of Arise - Beyond the Dawn Edition", "price": "27.26", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Tales of Kenzera™: ZAU Standard Edition", "price": "7.87", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Tears of Avia", "price": "0.09", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Teenage Mutant Ninja Turtles: Shredder's Revenge - Dimension Shellshock", "price": "0.43", "flag": "🇦🇷", "date": "16.06", "status": " GP" },
  { "name": "Ten Dates", "price": "0.2", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Tennis World Tour 2 - Complete Edition Xbox Series X|S", "price": "0.18", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Tennis World Tour 2", "price": "0.75", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Teslagrad 2", "price": "1.81", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Teslagrad Power Pack Edition", "price": "2.7", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "The Ascent", "price": "0.16", "flag": "🇦🇷", "date": "22.04", "status": " GP" },
  { "name": "The Assembly", "price": "0.03", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "The Bard's Tale Trilogy", "price": "0.78", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "The Bunker", "price": "0.16", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "The Callisto Protocol™ for Xbox One – Digital Deluxe Edition", "price": "5.62", "flag": "🇹🇷", "date": "30.04", "status": " GP" },
  { "name": "The Callisto Protocol™ for Xbox Series X|S – Digital Delu...", "price": "6.59", "flag": "🇹🇷", "date": "30.04", "status": " GP" },
  { "name": "The Clocker", "price": "0.02", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "The Complex", "price": "0.11", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "The Division 2 - Warlords of New York Edition", "price": "1.12", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "The Dragoness: Command of the Flame", "price": "0.27", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "The Elder Scrolls Online Collection: Necrom", "price": "21.0", "flag": "🇦🇷", "date": "21.06", "status": " GP" },
  { "name": "The Elder Scrolls V: Skyrim Anniversary Edition", "price": "11.9", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Escapists + The Escapists 2", "price": "0.16", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "The Escapists 2", "price": "1.15", "flag": "🇹🇷", "date": "30.04", "status": " GP" },
  { "name": "The Escapists", "price": "0.06", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "The Escapists: Supermax Edition", "price": "0.08", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "The Evil Within Digital Bundle", "price": "2.51", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The FMV Bundle", "price": "0.54", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "The FMV Collection 4", "price": "0.5", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "The Game of Life 2", "price": "0.17", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "The Infectious Madness of Doctor Dekker", "price": "0.11", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "The Inner World", "price": "0.02", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "The Isle Tide Hotel", "price": "0.25", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "The Jackbox Party Quadpack", "price": "0.7", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "The Knight Witch", "price": "0.56", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "The Lamplighters League - Deluxe Edition", "price": "0.78", "flag": "🇦🇷", "date": "01.04", "status": " GP" },
  { "name": "The Last Hero of Nostalgaia", "price": "0.26", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "The Lord of the Rings: Gollum™ - Precious Edition", "price": "4.97", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "The Lucid Dreamer Bundle", "price": "0.79", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "The MEGA FMV Bundle", "price": "1.19", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "The MUSYNX", "price": "0.07", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "The Mildew Children", "price": "0.15", "flag": "🇦🇷", "date": "25.04", "status": "" },
  { "name": "The Oregon Trail", "price": "4.19", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "The Outer Worlds: Board-Approved Bundle", "price": "8.35", "flag": "🇹🇷", "date": "30.04", "status": " GP" },
  { "name": "The Plane Effect", "price": "0.11", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "The Quarry - Deluxe Edition", "price": "6.11", "flag": "🇹🇷", "date": "30.04", "status": " GP" },
  { "name": "The Serpent Rogue", "price": "0.28", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "The Shapeshifting Detective", "price": "0.11", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "The Surge", "price": "0.24", "flag": "🇦🇷", "date": "23.04", "status": " GP" },
  { "name": "The Survivalists", "price": "0.15", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "The Walking Dead: A New Frontier", "price": "0.21", "flag": "🇦🇷", "date": "01.11", "status": " GP" },
  { "name": "The Walking Dead: Michonne", "price": "0.07", "flag": "🇦🇷", "date": "01.11", "status": " GP" },
  { "name": "The Wreck", "price": "0.18", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Them's Fightin' Herds", "price": "0.12", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Them's Fightin' Herds: Deluxe Edition", "price": "0.25", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "This Means Warp", "price": "2.84", "flag": "🇹🇷", "date": "23.04", "status": " GP" },
  { "name": "This War of Mine - Complete Edition", "price": "0.38", "flag": "🇦🇷", "date": "16.05", "status": " GP" },
  { "name": "Through the Darkest of Times", "price": "0.07", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Time Carnage", "price": "0.09", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Tom Clancy's Rainbow Six® Extraction United Bundle", "price": "5.5", "flag": "🇦🇷", "date": "16.06", "status": " GP" },
  { "name": "Tom Clancy's The Division", "price": "0.37", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Year 2 Gold Edition", "price": "0.5", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Tom Clancy’s Rainbow Six Siege Operator Edition", "price": "20.15", "flag": "🇹🇷", "date": "30.04", "status": " GP" },
  { "name": "Tomb Raider: Definitive Survivor Trilogy", "price": "8.51", "flag": "🇦🇷", "date": "16.04", "status": " GP" },
  { "name": "Tony Hawk's™ Pro Skater™ 1 + 2", "price": "3.47", "flag": "🇹🇷", "date": "30.04", "status": "" },
  { "name": "Totally Reliable Delivery Service Deluxe Edition", "price": "0.34", "flag": "🇦🇷", "date": "01.12", "status": " GP" },
  { "name": "Townsmen - A Kingdom Rebuilt", "price": "0.66", "flag": "🇹🇷", "date": "30.04", "status": "" },
  { "name": "Trailmakers - Space Upgrade", "price": "0.47", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers Deluxe Edition", "price": "0.54", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Train Sim World® 4: Austrian Regional Edition", "price": "4.06", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Train Sim World® 4: Flying Scotsman Centenary Edition", "price": "6.5", "flag": "🇦🇷", "date": "29.04", "status": " GP" },
  { "name": "Train Sim World® 4: German Regional Edition", "price": "4.06", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Train Sim World® 4: UK Regional Edition", "price": "4.06", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Train Sim World® 4: USA Regional Edition", "price": "4.06", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Transference™", "price": "0.11", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Transport Fever 2: Console Edition - Deluxe", "price": "4.37", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "True Survivors Bundle", "price": "19.66", "flag": "🇹🇷", "date": "23.04", "status": "" },
  { "name": "Turbo Golf Racing: Deep Space Bundle", "price": "0.23", "flag": "🇦🇷", "date": "01.08", "status": " GP" },
  { "name": "Turbo Golf Racing: Ultimate Bundle", "price": "0.27", "flag": "🇦🇷", "date": "01.08", "status": " GP" },
  { "name": "Turnip Boy Robs a Bank Pre-Release", "price": "0.21", "flag": "🇦🇷", "date": "15.07", "status": " GP" },
  { "name": "Ultimate Fishing Simulator", "price": "0.21", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Ultimate General: Gettysburg", "price": "0.21", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Under the Jolly Roger - Complete Edition", "price": "0.26", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Under the Jolly Roger", "price": "0.16", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "0.17", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Urban Exploration Bundle", "price": "0.02", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Valheim (Game Preview)", "price": "0.5", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Valthirian Arc: Hero School Story 2", "price": "0.29", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Vampire: The Masquerade - Swansong PRIMOGEN EDITION", "price": "1.62", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Vermintide - Digital Value Pack", "price": "0.5", "flag": "🇦🇷", "date": "07.03", "status": "" },
  { "name": "Vosaria: Lair of the Forgotten", "price": "0.04", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "WARBORN", "price": "0.11", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "0.8", "flag": "🇦🇷", "date": "30.08", "status": "" },
  { "name": "WRC Generations - The FIA WRC Official Game", "price": "2.0", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Wales Interactive Publisher Bundle", "price": "0.49", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Wanted: Dead", "price": "1.33", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "War Mongrels", "price": "0.66", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Warhammer 40,000: Darktide - Imperial Edition", "price": "5.0", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "Warhammer 40,000: Inquisitor - Martyr Ultimate Edition", "price": "0.27", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Warhammer Age of Sigmar: Storm Ground", "price": "0.74", "flag": "🇦🇷", "date": "23.04", "status": " GP" },
  { "name": "Warparty", "price": "0.07", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Wasteland 3 (PC) Colorado Collection", "price": "1.8", "flag": "🇦🇷", "date": "30.09", "status": " GP" },
  { "name": "Wasteland 3 Colorado Collection", "price": "10.89", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "Watch Dogs: Legion - Deluxe Edition", "price": "3.14", "flag": "🇹🇷", "date": "30.04", "status": " GP" },
  { "name": "Watch Dogs®2 - Deluxe Edition", "price": "3.4", "flag": "🇦🇷", "date": "25.04", "status": " GP" },
  { "name": "Watch Dogs®2 - Gold Edition", "price": "4.0", "flag": "🇦🇷", "date": "16.07", "status": " GP" },
  { "name": "Wavetale", "price": "1.2", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "We Happy Few Digital Deluxe", "price": "1.7", "flag": "🇦🇷", "date": "16.01", "status": " GP" },
  { "name": "Weedcraft Inc & Big Pharm Pharmacy Tycoon Bundle", "price": "1.27", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Weedcraft Inc + Crossroads Inn - Weed and Greet Bundle", "price": "5.34", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Weedcraft Inc + Heliborne - Fly High Bundle", "price": "5.62", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Werewolf: The Apocalypse - Earthblood Xbox One", "price": "0.42", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Werewolf: The Apocalypse - Earthblood Xbox Series X|S", "price": "0.42", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "What Lies in the Multiverse", "price": "0.07", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Who Pressed Mute on Uncle Marcus?", "price": "0.12", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Wired Italian Adventure Bundle", "price": "0.43", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Wizards of Brandel", "price": "0.13", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Wobbledogs Console Edition", "price": "0.43", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "Wolfenstein: Alt History Collection", "price": "12.4", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Wolfenstein: Youngblood Deluxe Edition", "price": "5.42", "flag": "🇹🇷", "date": "17.02", "status": " GP" },
  { "name": "Wolfenstein®: The Two-Pack", "price": "3.94", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "World Championship Boxing Manager™ 2", "price": "0.12", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "World War Z: Aftermath - Deluxe Edition", "price": "6.4", "flag": "🇦🇷", "date": "01.12", "status": " GP" },
  { "name": "Worms Battlegrounds", "price": "0.08", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Worms Rumble", "price": "0.05", "flag": "🇦🇷", "date": "30.04", "status": " GP" },
  { "name": "XCOM® 2 Digital Deluxe Edition", "price": "0.98", "flag": "🇹🇷", "date": "30.04", "status": " GP" },
  { "name": "XCOM® 2", "price": "0.37", "flag": "🇹🇷", "date": "30.04", "status": " GP" },
  { "name": "XEL - Complete Edition", "price": "0.1", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Xuan Yuan Sword: The Gate of Firmament", "price": "0.09", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "Yoku's Island Express", "price": "0.22", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Yooka-Laylee and the Impossible Lair", "price": "0.11", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Your Toy", "price": "0.02", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "YourToy and Dying: Reborn Horror Game Bundle", "price": "0.05", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Greenhorn Bundle", "price": "0.57", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "theHunter: Call of the Wild™ - Master Hunter Bundle", "price": "0.86", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "theHunter: Call of the Wild™ - Seasoned Hunter Bundle", "price": "0.71", "flag": "🇦🇷", "date": "01.06", "status": " GP" }
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

  item.innerHTML = `${a.name}:${res}&#8381 ${flag} ${a.status}`
  // до ${a.date}
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



