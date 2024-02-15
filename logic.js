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

let usd = 105;
let percent;

const arr = [
  { "name": "2K Ball N’ Brawl Bundle", "price": "1.37", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "2URVIVE", "price": "0.38", "flag": "🇹🇷", "date": "20.02", "status": "" },
  { "name": "9 Monkeys of Shaolin + Ash of Gods + Redeemer: Bundle", "price": "0.12", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "9 Monkeys of Shaolin", "price": "0.55", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "A Plague Tale: Innocence", "price": "2.17", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "A Plague Tale: Requiem", "price": "12.79", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "A Time Traveller's Guide To Past Delicacies (Xbox Series X|S)", "price": "0.07", "flag": "🇦🇷", "date": "21.02", "status": "" },
  { "name": "A Time Traveller's Guide To Past Delicacies", "price": "0.07", "flag": "🇦🇷", "date": "21.02", "status": "" },
  { "name": "Ad Infinitum", "price": "2.94", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Adventure Tanks", "price": "0.12", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Afterimage", "price": "1.05", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Age of Empires 25th Anniversary Collection", "price": "1.65", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Age of Empires: Definitive Collection", "price": "0.67", "flag": "🇦🇷", "date": "06.10", "status": "" },
  { "name": "Agents of Mayhem - Total Mayhem Bundle", "price": "0.13", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Agents of Mayhem", "price": "0.02", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Agony", "price": "0.02", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Airborne Bundle", "price": "0.55", "flag": "🇦🇷", "date": "16.02", "status": "" },
  { "name": "Aliens: Fireteam Elite", "price": "1.43", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Alone in the Dark - Digital Deluxe Edition", "price": "4.86", "flag": "🇦🇷", "date": "20.03", "status": "" },
  { "name": "Alone in the Dark", "price": "4.21", "flag": "🇦🇷", "date": "20.03", "status": "" },
  { "name": "Alphadia Genesis 1 & 2", "price": "0.17", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "Alphadia Neo", "price": "0.17", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Another Dawn", "price": "0.72", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Arcade Paradise | High Score Edition", "price": "0.38", "flag": "🇦🇷", "date": "01.07", "status": "" },
  { "name": "Asdivine Hearts I & II", "price": "0.17", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Ash of Gods Redemption", "price": "0.19", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Assassin's Creed® Bundle: Assassin's Creed® Valhalla, Ass...", "price": "42.24", "flag": "🇹🇷", "date": "16.07", "status": "" },
  { "name": "Assassin's Creed® Odyssey - DELUXE EDITION", "price": "18.48", "flag": "🇹🇷", "date": "16.09", "status": "" },
  { "name": "Assassin's Creed® Odyssey - ULTIMATE EDITION", "price": "24.42", "flag": "🇹🇷", "date": "16.09", "status": "" },
  { "name": "Assassin's Creed® Origins - DELUXE EDITION", "price": "17.82", "flag": "🇹🇷", "date": "01.06", "status": "" },
  { "name": "Assassin's Creed® Origins - GOLD EDITION", "price": "21.12", "flag": "🇹🇷", "date": "01.06", "status": "" },
  { "name": "Assassin's Creed® Valhalla Complete Edition", "price": "26.4", "flag": "🇹🇷", "date": "16.07", "status": "" },
  { "name": "Assassin's Creed® Valhalla Deluxe Edition", "price": "20.46", "flag": "🇹🇷", "date": "16.07", "status": "" },
  { "name": "Assassin's Creed® Valhalla Ragnarök Edition", "price": "15.84", "flag": "🇹🇷", "date": "16.07", "status": "" },
  { "name": "Assassin’s Creed® Valhalla + Immortals Fenyx Rising™ Bundle", "price": "26.4", "flag": "🇹🇷", "date": "16.07", "status": "" },
  { "name": "Atomic Heart - Gold Edition", "price": "14.4", "flag": "🇦🇷", "date": "16.08", "status": "" },
  { "name": "Atomic Heart - Premium Edition", "price": "16.32", "flag": "🇦🇷", "date": "16.08", "status": "" },
  { "name": "Atomic Heart", "price": "22.77", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Attack on Titan 2: Final Battle", "price": "21.43", "flag": "🇹🇷", "date": "15.02", "status": "" },
  { "name": "Aven Colony", "price": "0.36", "flag": "🇦🇷", "date": "23.02", "status": "" },
  { "name": "Awarded Platformer Bundle", "price": "0.2", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "BALAN WONDERWORLD", "price": "0.67", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "BATTLETECH Mercenary Collection", "price": "1.24", "flag": "🇦🇷", "date": "13.06", "status": "" },
  { "name": "BLACKTAIL", "price": "3.96", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Back 4 Blood: Deluxe Edition", "price": "7.87", "flag": "🇦🇷", "date": "01.04", "status": "" },
  { "name": "Batman: Arkham Collection", "price": "1.35", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Batman: Arkham Knight Premium Edition", "price": "1.68", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Before We Leave", "price": "0.6", "flag": "🇦🇷", "date": "23.02", "status": "" },
  { "name": "Big Moonstone Pack -- 5,500", "price": "3.45", "flag": "🇦🇷", "date": "01.09", "status": "" },
  { "name": "BioShock: The Collection", "price": "1.57", "flag": "🇹🇷", "date": "20.02", "status": "" },
  { "name": "Blazing Chrome", "price": "0.12", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Blizzard® Arcade Collection", "price": "0.77", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Borderlands 3", "price": "2.27", "flag": "🇹🇷", "date": "20.02", "status": "" },
  { "name": "Borderlands 3: Super Deluxe Edition", "price": "4.69", "flag": "🇹🇷", "date": "20.02", "status": "" },
  { "name": "Borderlands Collection: Pandora's Box", "price": "29.39", "flag": "🇹🇷", "date": "20.02", "status": "" },
  { "name": "Borderlands Legendary Collection", "price": "3.68", "flag": "🇹🇷", "date": "20.02", "status": "" },
  { "name": "Borderlands: Game of the Year Edition", "price": "0.56", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Bridge Constructor: The Walking Dead", "price": "0.02", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Bright Memory", "price": "0.09", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Builder Flipper bundle", "price": "0.58", "flag": "🇦🇷", "date": "01.01", "status": "" },
  { "name": "CODE VEIN Deluxe Edition", "price": "0.72", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "CODE VEIN", "price": "0.54", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "Call of Duty: Ghosts Digital Hardened Edition", "price": "0.46", "flag": "🇦🇷", "date": "23.02", "status": "" },
  { "name": "Call of Duty®: Advanced Warfare Digital Pro Edition", "price": "0.46", "flag": "🇦🇷", "date": "23.02", "status": "" },
  { "name": "Call of Duty®: Black Ops 4 - Digital Deluxe", "price": "4.02", "flag": "🇦🇷", "date": "23.02", "status": "" },
  { "name": "Call of Duty®: Black Ops Cold War - Cross-Gen Bundle", "price": "2.69", "flag": "🇦🇷", "date": "23.02", "status": "" },
  { "name": "Call of Duty®: Black Ops III - Zombies Chronicles Edition", "price": "3.27", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Call of Duty®: Infinite Warfare - Digital Legacy Edition", "price": "1.08", "flag": "🇦🇷", "date": "23.02", "status": "" },
  { "name": "Call of Duty®: Modern Warfare® - Digital Standard Edition", "price": "5.15", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Call of Duty®: Vanguard - Cross-Gen Bundle", "price": "3.02", "flag": "🇦🇷", "date": "23.02", "status": "" },
  { "name": "Call of Duty®: WWII - Digital Deluxe", "price": "6.2", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Call of the Wild: The Angler™ - Deluxe Edition", "price": "0.62", "flag": "🇦🇷", "date": "01.09", "status": "" },
  { "name": "Carnival Games®", "price": "0.36", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Cassette Beasts: Deluxe Edition", "price": "0.36", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Catacomb Master", "price": "0.06", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Caterpillar", "price": "0.04", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Chained Echoes", "price": "0.32", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Chants of Sennaar", "price": "12.38", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Chef Life - AL FORNO EDITION", "price": "3.6", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Chivalry 2 King's Edition", "price": "0.82", "flag": "🇦🇷", "date": "01.10", "status": "" },
  { "name": "Chivalry 2 Special Edition", "price": "0.69", "flag": "🇦🇷", "date": "01.10", "status": "" },
  { "name": "Chorus", "price": "2.3", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Cities: Skylines - Mayor's Edition", "price": "0.72", "flag": "🇦🇷", "date": "01.04", "status": "" },
  { "name": "Cities: Skylines - Premium Edition 2", "price": "0.96", "flag": "🇦🇷", "date": "01.04", "status": "" },
  { "name": "Conan Exiles - Complete Edition October 2021", "price": "2.21", "flag": "🇦🇷", "date": "16.08", "status": "" },
  { "name": "Conan Exiles - Isle of Siptah Edition", "price": "0.95", "flag": "🇦🇷", "date": "16.08", "status": "" },
  { "name": "Crash Team Rumble™ - Deluxe Edition", "price": "6.84", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Crash™ Team Racing Nitro-Fueled - Nitros Oxide Edition", "price": "1.26", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "CrossCode", "price": "0.12", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Crown Trick", "price": "0.27", "flag": "🇦🇷", "date": "23.02", "status": "" },
  { "name": "Crusader Kings III: Royal Edition", "price": "1.03", "flag": "🇦🇷", "date": "01.02", "status": "" },
  { "name": "Cube 2x1", "price": "0.07", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "DAKAR 18", "price": "0.04", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "DAS WIRED-HORROR-SPIELPAKET", "price": "0.55", "flag": "🇦🇷", "date": "01.01", "status": "" },
  { "name": "DEAD ISLAND 2 DELUXE EDITION", "price": "13.59", "flag": "🇹🇷", "date": "22.02", "status": "" },
  { "name": "DEAD ISLAND 2 GOLD EDITION", "price": "16.32", "flag": "🇹🇷", "date": "22.02", "status": "" },
  { "name": "DEADCRAFT Deluxe Edition", "price": "0.1", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "DEADCRAFT", "price": "0.34", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "DEATHLOOP Deluxe Edition", "price": "17.16", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "DIRT 5 Year One Edition", "price": "1.24", "flag": "🇦🇷", "date": "11.08", "status": "" },
  { "name": "DOOM Eternal Deluxe Edition", "price": "15.84", "flag": "🇹🇷", "date": "01.10", "status": "" },
  { "name": "DOOM Eternal: The Ancient Gods - Part One", "price": "5.61", "flag": "🇹🇷", "date": "01.10", "status": "" },
  { "name": "DOOM Eternal: The Ancient Gods - Part Two", "price": "5.61", "flag": "🇹🇷", "date": "18.03", "status": "" },
  { "name": "DOOM Eternal: Year One Pass (PC)", "price": "8.46", "flag": "🇹🇷", "date": "03.12", "status": "" },
  { "name": "DOOM Eternal: Year One Pass", "price": "8.46", "flag": "🇹🇷", "date": "01.10", "status": "" },
  { "name": "DOOM Slayers Collection", "price": "3.56", "flag": "🇹🇷", "date": "13.06", "status": "" },
  { "name": "DRAGON BALL FIGHTERZ - FighterZ Edition", "price": "1.74", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "DRAGON BALL FIGHTERZ - Ultimate Edition", "price": "3.36", "flag": "🇹🇷", "date": "15.02", "status": "" },
  { "name": "DRAGON BALL FIGHTERZ", "price": "1.22", "flag": "🇹🇷", "date": "15.02", "status": "" },
  { "name": "DRAGON BALL THE BREAKERS", "price": "0.63", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "DRAGON BALL XENOVERSE 2 - Special Edition", "price": "14.83", "flag": "🇹🇷", "date": "15.02", "status": "" },
  { "name": "DRAGON BALL XENOVERSE 2 DELUXE EDITION", "price": "12.36", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "DRAGON BALL XENOVERSE 2", "price": "1.47", "flag": "🇹🇷", "date": "15.02", "status": "" },
  { "name": "DRAGON BALL Z: KAKAROT Deluxe Edition", "price": "11.13", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "DRAGON BALL Z: KAKAROT Legendary Edition", "price": "23.75", "flag": "🇹🇷", "date": "15.02", "status": "" },
  { "name": "DRAGON BALL: THE BREAKERS Special Edition", "price": "1.23", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Darkest Dungeon®: Ancestral Edition", "price": "0.38", "flag": "🇦🇷", "date": "01.02", "status": "" },
  { "name": "Dead Cells: Medley of Pain Bundle", "price": "0.55", "flag": "🇦🇷", "date": "16.09", "status": "" },
  { "name": "Dead Cells: Return to Castlevania Bundle", "price": "0.43", "flag": "🇦🇷", "date": "16.09", "status": "" },
  { "name": "Dead Dungeon for Windows 10", "price": "0.02", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Dead Island 2", "price": "12.69", "flag": "🇹🇷", "date": "22.02", "status": "" },
  { "name": "Dead Island Definitive Collection", "price": "0.21", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Dead Island Definitive Edition", "price": "0.28", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Dead Island Retro Revenge", "price": "0.01", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Dead Island: Riptide Definitive Edition", "price": "0.04", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Dead by Daylight - Gold Edition", "price": "6.24", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Deadlight: Director's Cut", "price": "0.02", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Deep Rock Galactic - Deluxe Edition", "price": "0.55", "flag": "🇦🇷", "date": "01.11", "status": "" },
  { "name": "Deep Rock Galactic - Ultimate Edition", "price": "0.69", "flag": "🇦🇷", "date": "01.11", "status": "" },
  { "name": "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles Digital Deluxe Edition", "price": "8.25", "flag": "🇹🇷", "date": "15.02", "status": "" },
  { "name": "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles Ultimate Edition", "price": "25.95", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles", "price": "6.93", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "Diablo® Prime Evil Collection", "price": "2.37", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Digimon Survive", "price": "3.48", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "Dishonored & Prey: The Arkane Collection", "price": "16.5", "flag": "🇹🇷", "date": "13.06", "status": "" },
  { "name": "Dishonored®: Death of the Outsider™ Deluxe Bundle", "price": "13.13", "flag": "🇹🇷", "date": "13.06", "status": "" },
  { "name": "Disney Dreamlight Valley: A Rift in Time", "price": "0.52", "flag": "🇦🇷", "date": "01.09", "status": "" },
  { "name": "Dobo's Heroes", "price": "0.03", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Dolmen", "price": "0.24", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Dr. Fetus' Mean Meat Machine", "price": "0.09", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Dragon Ball Xenoverse + Season Pass", "price": "0.19", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Dreamfall Chapters", "price": "0.04", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Dungeonoid 2 Awakening", "price": "3.13", "flag": "🇦🇷", "date": "22.02", "status": "" },
  { "name": "Dungeons 4 - Digital Deluxe Edition", "price": "13.44", "flag": "🇦🇷", "date": "16.11", "status": "" },
  { "name": "EA SPORTS FC™ 24 Standard Edition Xbox One & Xbox Series X|S", "price": "13.86", "flag": "🇹🇷", "date": "31.12", "status": "" },
  { "name": "Edge of Reality (Xbox Series X|S)", "price": "0.07", "flag": "🇦🇷", "date": "16.02", "status": "" },
  { "name": "Edge of Reality", "price": "0.07", "flag": "🇦🇷", "date": "16.02", "status": "" },
  { "name": "Escape Academy Deluxe Edition", "price": "0.48", "flag": "🇦🇷", "date": "01.02", "status": "" },
  { "name": "Escape Dead Island", "price": "0.05", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "Evil West", "price": "13.2", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "F1® Manager 2023 Deluxe Edition", "price": "14.52", "flag": "🇹🇷", "date": "16.10", "status": "" },
  { "name": "FINAL FANTASY IX", "price": "0.46", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "FINAL FANTASY TYPE-0 HD", "price": "0.2", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "FINAL FANTASY TYPE-0™ HD", "price": "0.92", "flag": "🇹🇷", "date": "15.02", "status": "" },
  { "name": "FINAL FANTASY VII WINDOWS EDITION", "price": "0.35", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "FINAL FANTASY VII", "price": "0.35", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "FINAL FANTASY VIII Remastered WINDOWS EDITION", "price": "0.48", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "FINAL FANTASY VIII Remastered", "price": "0.48", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "FINAL FANTASY X/X-2 HD Remaster", "price": "1.08", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "FINAL FANTASY XII THE ZODIAC AGE", "price": "1.08", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "FINAL FANTASY XIII", "price": "0.09", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "FINAL FANTASY XIII-2", "price": "0.11", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "FINAL FANTASY XV MULTIPLAYER: COMRADES", "price": "0.21", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "FINAL FANTASY XV POCKET EDITION HD", "price": "0.43", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "FINAL FANTASY XV ROYAL EDITION", "price": "1.2", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "Fallout 4: Game of the Year Edition (PC)", "price": "7.52", "flag": "🇹🇷", "date": "12.03", "status": "" },
  { "name": "Fallout 4: Game of the Year Edition", "price": "7.52", "flag": "🇹🇷", "date": "12.03", "status": "" },
  { "name": "Fallout 76: Atlantic City - Boardwalk Paradise Deluxe Edition", "price": "11.52", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Far Cry® 6 Deluxe Edition", "price": "20.46", "flag": "🇹🇷", "date": "16.06", "status": "" },
  { "name": "Far Cry® 6 Game of the Year Edition", "price": "25.08", "flag": "🇹🇷", "date": "16.06", "status": "" },
  { "name": "Far Cry® 6 Gold Edition", "price": "21.12", "flag": "🇹🇷", "date": "16.06", "status": "" },
  { "name": "Far Cry®5 Gold Edition", "price": "3.17", "flag": "🇦🇷", "date": "01.07", "status": "" },
  { "name": "Faraday Protocol", "price": "0.09", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Farm Bundle", "price": "0.55", "flag": "🇦🇷", "date": "01.01", "status": "" },
  { "name": "Farm Pets Bundle", "price": "0.82", "flag": "🇦🇷", "date": "01.01", "status": "" },
  { "name": "Flailing Limbs Bundle", "price": "0.24", "flag": "🇦🇷", "date": "01.08", "status": "" },
  { "name": "Flockers", "price": "0.13", "flag": "🇦🇷", "date": "23.02", "status": "" },
  { "name": "For Honor® Complete Edition", "price": "4.8", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Forza Horizon 4 Expansions Bundle", "price": "2.7", "flag": "🇦🇷", "date": "03.10", "status": "" },
  { "name": "Forza Horizon 5 PLUS Hot Wheels Bundle", "price": "10.37", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "From Earth to Heaven", "price": "0.07", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Frostpunk: Complete Collection", "price": "0.62", "flag": "🇦🇷", "date": "16.07", "status": "" },
  { "name": "Fuga: Melodies of Steel 2 - Ultimate Edition", "price": "8.21", "flag": "🇦🇷", "date": "16.05", "status": "" },
  { "name": "GENIE Reprise", "price": "2.48", "flag": "🇦🇷", "date": "29.02", "status": "" },
  { "name": "GUNVOLT RECORDS: Cychronicle", "price": "0.23", "flag": "🇦🇷", "date": "23.02", "status": "" },
  { "name": "Gale of Windoria", "price": "0.14", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "Gangs of Sherwood – Lionheart Edition", "price": "4.74", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Garden Bundle", "price": "0.62", "flag": "🇦🇷", "date": "01.01", "status": "" },
  { "name": "Gears of War 4 and Halo 5: Guardians Bundle", "price": "0.38", "flag": "🇦🇷", "date": "31.01", "status": "" },
  { "name": "Gears of War Ultimate Edition Deluxe Version", "price": "1.25", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Generation Zero ® - Silver Bundle", "price": "0.69", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Generation Zero ® - Ultimate Bundle", "price": "0.96", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Generation Zero® - Gold Bundle", "price": "0.82", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Genesis Alpha One", "price": "0.09", "flag": "🇦🇷", "date": "23.02", "status": "" },
  { "name": "Ghostwire: Tokyo Deluxe Edition", "price": "20.46", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Giraffe and Annika（ジラフとアンニカ）", "price": "0.21", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Goat Simulator 3 - Digital Downgrade Edition", "price": "1.92", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Goat Simulator: The GOATY", "price": "0.29", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Goat Simulator: Waste Of Space Bundle", "price": "0.13", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Gods Will Fall - Valiant Edition", "price": "0.38", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Gods Will Fall", "price": "0.12", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Going Under", "price": "0.27", "flag": "🇦🇷", "date": "23.02", "status": "" },
  { "name": "Golf With Your Friends - Starter Edition", "price": "17.28", "flag": "🇦🇷", "date": "16.07", "status": "" },
  { "name": "Golf With Your Friends - Ultimate Edition", "price": "35.61", "flag": "🇹🇷", "date": "16.07", "status": "" },
  { "name": "Gravel Special Edition", "price": "0.36", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Gravel", "price": "0.24", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "GreedFall - Gold Edition", "price": "2.35", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Guilty Gear -Strive- Daredevil Edition", "price": "6.81", "flag": "🇦🇷", "date": "01.09", "status": "" },
  { "name": "Gungrave G.O.R.E", "price": "1.2", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "HOT WHEELS UNLEASHED 2 - Turbocharged™", "price": "9.9", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ 2 - Turbocharged - Deluxe Edition", "price": "14.1", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ 2 - Turbocharged - Legendary Edition", "price": "18.0", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Halo 5: Guardians – Digital Deluxe Edition", "price": "6.24", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Halo Wars 2: Complete Edition", "price": "26.4", "flag": "🇹🇷", "date": "04.04", "status": "" },
  { "name": "Hardspace: Shipbreaker", "price": "5.02", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Haven", "price": "0.17", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Heirs of the Kings", "price": "0.17", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Hell Let Loose - Deluxe Edition", "price": "30.86", "flag": "🇹🇷", "date": "01.01", "status": "" },
  { "name": "Hell Let Loose - Ultimate Edition", "price": "35.61", "flag": "🇹🇷", "date": "01.01", "status": "" },
  { "name": "Hell Pie", "price": "0.17", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Hello Neighbor 2 Deluxe Edition", "price": "5.28", "flag": "🇦🇷", "date": "16.12", "status": "" },
  { "name": "Hi-Fi RUSH Deluxe Edition", "price": "15.84", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "High On Life: DLC Bundle", "price": "5.76", "flag": "🇦🇷", "date": "16.06", "status": "" },
  { "name": "Hogwarts Legacy: Digital Deluxe Edition", "price": "21.76", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Homefront®: The Revolution 'Freedom Fighter' Bundle", "price": "0.17", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Homefront®: The Revolution", "price": "0.02", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Hood: Outlaws & Legends", "price": "1.25", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Hotel: A Resort Simulator", "price": "5.88", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Huge Moonstone Pack -- 14,500", "price": "8.64", "flag": "🇦🇷", "date": "01.09", "status": "" },
  { "name": "Hypnospace Outlaw & Slayers X: Terminal Aftermath: Vengance of the Slayer Bundle", "price": "0.46", "flag": "🇦 🇷", "date": "01.06", "status": "" },
  { "name": "INSIDE & LIMBO Bundle", "price": "2.42", "flag": "🇦🇷", "date": "01.08", "status": "" },
  { "name": "Immortals Fenyx Rising™ Gold Edition", "price": "5.28", "flag": "🇦🇷", "date": "01.09", "status": "" },
  { "name": "Infernax", "price": "0.24", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Infinity Strash: DRAGON QUEST The Adventure of Dai - Digital Deluxe Edition", "price": "11.34", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "Infinity Strash: DRAGON QUEST The Adventure of Dai", "price": "10.53", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "Injustice™ 2 - Legendary Edition", "price": "1.82", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Insurgency: Sandstorm - Deluxe Edition", "price": "16.32", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Insurgency: Sandstorm - Gold Edition", "price": "24.0", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Insurgency: Sandstorm - Ultimate Edition", "price": "27.84", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Insurgency: Sandstorm", "price": "4.62", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Iron Harvest Complete Edition", "price": "1.47", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Island Farmer", "price": "0.17", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Jurassic World Evolution 2: Deluxe Edition", "price": "6.72", "flag": "🇦🇷", "date": "16.05", "status": "" },
  { "name": "Jurassic World Evolution 2: Dominion Bundle", "price": "12.48", "flag": "🇦🇷", "date": "16.05", "status": "" },
  { "name": "KINGDOM HEARTS - HD 1.5+2.5 ReMIX -", "price": "1.73", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "KINGDOM HEARTS HD 2.8 Final Chapter Prologue", "price": "2.16", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "KINGDOM HEARTS Melody of Memory (International)", "price": "1.92", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "KINGDOM HEARTS Ⅲ", "price": "0.7", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "King of Seas", "price": "0.11", "flag": "🇦🇷", "date": "23.02", "status": "" },
  { "name": "King's Bounty II - Lord's Edition", "price": "0.81", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "King's Bounty II", "price": "0.48", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Kingdom Come: Deliverance - Royal Edition", "price": "0.7", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Kingdom Come: Deliverance", "price": "0.89", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Kona", "price": "0.02", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Kung Fu Fighting", "price": "0.02", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "LEGO® 2K Drive Awesome Rivals Edition", "price": "30.23", "flag": "🇹🇷", "date": "20.02", "status": "" },
  { "name": "LEGO® 2K Drive Cross-Gen Standard Edition", "price": "14.16", "flag": "🇹🇷", "date": "20.02", "status": "" },
  { "name": "LEGO® 2K Drive for Xbox One", "price": "12.52", "flag": "🇹🇷", "date": "20.02", "status": "" },
  { "name": "LEGO® Harry Potter™ Collection", "price": "0.27", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "LEGO® Marvel Collection", "price": "1.35", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "LEGO® Star Wars™: The Skywalker Saga", "price": "4.8", "flag": "🇦🇷", "date": "01.05", "status": "" },
  { "name": "LIGHTNING RETURNS: FINAL FANTASY XIII", "price": "0.11", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "Legal Dungeon", "price": "0.1", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Let's Build a Zoo & Dinosaur DLC Bundle", "price": "0.37", "flag": "🇦🇷", "date": "01.04", "status": "" },
  { "name": "Let's Build a Zoo: Aquarium Odyssey Bundle", "price": "0.37", "flag": "🇦🇷", "date": "01.10", "status": "" },
  { "name": "Let's Build a Zoo: Ultimate Bundle", "price": "0.46", "flag": "🇦🇷", "date": "01.10", "status": "" },
  { "name": "Let's Sing 2023 Platinum Edition", "price": "10.8", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Let's Sing 2023", "price": "4.35", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Let's Sing 2024 with International Hits", "price": "11.76", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Let's Sing 2024 with International Hits", "price": "12.6", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Let's Sing 2024 with International Hits", "price": "16.21", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Let's Sing ABBA", "price": "7.26", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Let's Sing Country - Platinum Edition", "price": "0.74", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Let's Sing Country", "price": "0.43", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Let's Sing Queen", "price": "0.99", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Light & Dark Bundle", "price": "1.92", "flag": "🇦🇷", "date": "02.11", "status": "" },
  { "name": "Lightyear Frontier (Game Preview) Pre-Order Bundle", "price": "0.39", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Little Goody Two Shoes", "price": "6.72", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "LoBlocks", "price": "0.03", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Logic Games Bundle", "price": "0.1", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Lonely Mountains: Downhill - Eldfjall Island", "price": "0.32", "flag": "🇦🇷", "date": "01.11", "status": "" },
  { "name": "Loop8: Summer of Gods", "price": "3.26", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Loop8: Summer of Gods", "price": "8.58", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "Lost Judgment Digital Deluxe Edition", "price": "5.16", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "Lost Snowmen (Windows)", "price": "0.06", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Lost Snowmen", "price": "0.06", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Luxury Garden Bundle", "price": "0.82", "flag": "🇦🇷", "date": "01.01", "status": "" },
  { "name": "MLB® The Show™ 23 Digital Deluxe Edition - Xbox One and Xbox Series X|S", "price": "19.2", "flag": "🇦🇷", "date": "01.04", "status": "" },
  { "name": "MLB® The Show™ 23 Xbox One", "price": "9.79", "flag": "🇦🇷", "date": "01.04", "status": "" },
  { "name": "MLB® The Show™ 23 Xbox Series X|S", "price": "11.98", "flag": "🇦🇷", "date": "01.04", "status": "" },
  { "name": "MXGP 2021 - The Official Motocross Videogame - Xbox Series X|S", "price": "1.98", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "MXGP 2021 - The Official Motocross Videogame", "price": "1.98", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "MY HERO ONE'S JUSTICE 2 Deluxe Edition", "price": "5.04", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "MY HERO ONE'S JUSTICE 2", "price": "3.36", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "MY HERO ONE’S JUSTICE", "price": "3.36", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "Madden NFL 23 Xbox One", "price": "6.14", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "Madden NFL 23 Xbox Series X|S", "price": "7.2", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "Madden NFL 24 Deluxe Edition Xbox Series X|S & Xbox One", "price": "19.8", "flag": "🇹🇷", "date": "20.02", "status": "" },
  { "name": "Madden NFL 24", "price": "13.86", "flag": "🇹🇷", "date": "20.02", "status": "" },
  { "name": "Mafia: Definitive Edition", "price": "2.14", "flag": "🇹🇷", "date": "20.02", "status": "" },
  { "name": "Mafia: Trilogy", "price": "4.07", "flag": "🇹🇷", "date": "20.02", "status": "" },
  { "name": "Marvel's Midnight Suns Enhanced Edition", "price": "8.41", "flag": "🇹🇷", "date": "20.02", "status": "" },
  { "name": "Marvel's Midnight Suns Legendary Edition for Xbox One", "price": "9.48", "flag": "🇹🇷", "date": "20.02", "status": "" },
  { "name": "Marvel's Midnight Suns Legendary Edition for Xbox Series X|S", "price": "11.38", "flag": "🇹🇷", "date": "20.02", "status": "" },
  { "name": "Marvel's Midnight Suns", "price": "6.51", "flag": "🇹🇷", "date": "20.02", "status": "" },
  { "name": "Mato Anomalies Digital Deluxe Edition", "price": "2.02", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Mato Anomalies", "price": "2.22", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "MechWarrior 5: Mercenaries - JumpShip Edition", "price": "0.82", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Mekorama", "price": "0.04", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Metro 2033 Redux", "price": "0.28", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Metro Exodus Gold Edition", "price": "1.15", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Metro Exodus", "price": "0.93", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Metro Redux Bundle", "price": "0.5", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Metro Saga Bundle", "price": "0.84", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Metro: Last Light Redux", "price": "0.38", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.0", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.0", "flag": "🇹🇷", "date": "01.12", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.0", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.0", "flag": "🇹🇷", "date": "01.12", "status": "" },
  { "name": "Middle-earth™: Shadow of Mordor™ - Game of the Year Edition", "price": "0.3", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Miden Tower", "price": "0.13", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "Mighty No. 9", "price": "0.04", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle - Windows 10", "price": "1.67", "flag": "🇹🇷", "date": "28.07", "status": "" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle", "price": "1.67", "flag": "🇹🇷", "date": "28.07", "status": "" },
  { "name": "Miracle Snack Shop", "price": "1.11", "flag": "🇹🇷", "date": "15.02", "status": "" },
  { "name": "Momodora: Reverie Under the Moonlight", "price": "0.02", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "Monster Boy and the Cursed Kingdom", "price": "0.84", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Monster Energy Supercross - The Official Videogame 6", "price": "6.0", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Monster Viator", "price": "0.13", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Moonlighter: Complete Edition", "price": "0.33", "flag": "🇦🇷", "date": "01.12", "status": "" },
  { "name": "Mortal Kombat 1", "price": "23.76", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Mortal Kombat 11 Ultimate + Injustice 2 Leg. Edition Bundle", "price": "22.68", "flag": "🇹🇷", "date": "16.06", "status": "" },
  { "name": "Mortal Kombat 11 Ultimate", "price": "10.53", "flag": "🇹🇷", "date": "16.06", "status": "" },
  { "name": "MotoGP™23", "price": "5.94", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "MudRunner", "price": "0.68", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Murder on the Marine Express", "price": "0.04", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "My Friend Peppa Pig - Complete Edition", "price": "5.28", "flag": "🇦🇷", "date": "16.07", "status": "" },
  { "name": "My Time At Portia", "price": "0.45", "flag": "🇦🇷", "date": "23.02", "status": "" },
  { "name": "My Time at Portia Deluxe Edition", "price": "1.34", "flag": "🇦🇷", "date": "01.10", "status": "" },
  { "name": "NARUTO SHIPPUDEN™: Ultimate Ninja® STORM 2", "price": "0.15", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "NARUTO SHIPPUDEN™: Ultimate Ninja® STORM 3 Full Burst", "price": "0.15", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "NARUTO SHIPPUDEN™: Ultimate Ninja® STORM 4 ROAD TO BORUTO", "price": "0.86", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "NARUTO SHIPPUDEN™: Ultimate Ninja® STORM 4", "price": "1.01", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "NARUTO X BORUTO Ultimate Ninja STORM CONNECTIONS Deluxe Edition", "price": "36.94", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "NARUTO X BORUTO Ultimate Ninja STORM CONNECTIONS Ultimate Edition", "price": "40.4", "flag": "🇹🇷", "date": "15.02", "status": "" },
  { "name": "NARUTO X BORUTO Ultimate Ninja STORM CONNECTIONS", "price": "25.39", "flag": "🇹🇷", "date": "15.02", "status": "" },
  { "name": "NARUTO™: Ultimate Ninja® STORM", "price": "0.15", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "NBA 2K Playgrounds 2", "price": "0.3", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "NBA 2K24 Black Mamba Edition", "price": "20.69", "flag": "🇹🇷", "date": "20.02", "status": "" },
  { "name": "NBA 2K24 for Xbox One", "price": "10.72", "flag": "🇹🇷", "date": "20.02", "status": "" },
  { "name": "NBA 2K24 for Xbox Series X|S", "price": "12.38", "flag": "🇹🇷", "date": "20.02", "status": "" },
  { "name": "Necromunda: Underhive Wars - Gold Edition", "price": "3.56", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Neon Abyss Deluxe Edition", "price": "0.38", "flag": "🇦🇷", "date": "16.07", "status": "" },
  { "name": "New Tales from the Borderlands", "price": "3.36", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Ni no Kuni Wrath of the White Witch™ Remastered", "price": "2.3", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Nickelodeon All-Star Brawl 2 Deluxe Edition", "price": "10.2", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Nickelodeon All-Star Brawl 2 Ultimate Edition", "price": "11.4", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Nickelodeon All-Star Brawl 2", "price": "7.8", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "NieR Replicant ver.1.22474487139...", "price": "1.92", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "NieR:Automata BECOME AS GODS Edition", "price": "0.78", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "NieR:Automata™ BECOME AS GODS Edition", "price": "0.78", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.04", "flag": "🇦🇷", "date": "31.05", "status": "" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "1.66", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "1.68", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "No More Heroes 3 Xbox", "price": "1.4", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "No More Heroes 3 Xbox", "price": "1.44", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Noel the Mortal Fate", "price": "0.22", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Nordic Adventure Bundle", "price": "2.05", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "ONE PIECE BURNING BLOOD - Gold Edition", "price": "0.9", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "ONE PIECE ODYSSEY Deluxe Edition", "price": "4.18", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "ONE PIECE ODYSSEY", "price": "2.93", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "ONE PIECE World Seeker Deluxe Edition", "price": "1.68", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "ONE PIECE World Seeker", "price": "0.24", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "ONE PIECE: PIRATE WARRIORS 4 Deluxe Edition(Xbox One)", "price": "8.25", "flag": "🇹🇷", "date": "15.02", "status": "" },
  { "name": "ONE PUNCH MAN: A HERO NOBODY KNOWS Deluxe Edition", "price": "0.85", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "ONE PUNCH MAN: A HERO NOBODY KNOWS", "price": "0.65", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "Obliteracers", "price": "0.02", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Obsurity (for Windows 10)", "price": "0.05", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Oceanhorn - Monster of Uncharted Seas", "price": "0.04", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "One Piece: Burning Blood", "price": "0.22", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "Orangeblood (オレンジブラッド)", "price": "0.14", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "Outcast - A New Beginning", "price": "29.58", "flag": "🇦🇷", "date": "15.03", "status": "" },
  { "name": "Outward: Definitive Edition", "price": "2.3", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Outward: The Adventurer Bundle", "price": "0.75", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Overcooked! 2 - Gourmet Edition", "price": "0.54", "flag": "🇦🇷", "date": "16.12", "status": "" },
  { "name": "Overcooked! 2", "price": "1.64", "flag": "🇹🇷", "date": "23.02", "status": "" },
  { "name": "Overpass 2", "price": "4.2", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Overrogue", "price": "0.14", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Overruled!", "price": "0.04", "flag": "🇦🇷", "date": "23.02", "status": "" },
  { "name": "PAYDAY 2 - CRIMEWAVE EDITION - THE BIG SCORE Game Bundle", "price": "0.48", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "PGA TOUR 2K23 Cross-Gen Edition", "price": "7.0", "flag": "🇹🇷", "date": "20.02", "status": "" },
  { "name": "PGA TOUR 2K23 Tiger Woods Edition", "price": "14.15", "flag": "🇹🇷", "date": "20.02", "status": "" },
  { "name": "PGA TOUR 2K23", "price": "6.59", "flag": "🇹🇷", "date": "20.02", "status": "" },
  { "name": "Pang Adventures", "price": "0.02", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Pathfinder: Kingmaker - Definitive Edition", "price": "0.32", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Penarium", "price": "0.02", "flag": "🇦🇷", "date": "23.02", "status": "" },
  { "name": "Persona 3 Portable & Persona 4 Golden Bundle", "price": "12.87", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "Pets Bundle", "price": "0.62", "flag": "🇦🇷", "date": "01.01", "status": "" },
  { "name": "Phoenix Point: Behemoth Edition", "price": "0.41", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Prey®: Digital Deluxe Edition", "price": "7.52", "flag": "🇹🇷", "date": "12.03", "status": "" },
  { "name": "Project Starship", "price": "0.03", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Prototype® Biohazard Bundle", "price": "0.29", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Prototype®2", "price": "0.22", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Puyo Puyo Champions", "price": "0.42", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "RAGE 2: Deluxe Edition", "price": "11.88", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "REPLICA（レプリカ）", "price": "0.04", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "RESIDENT EVIL 2 Deluxe Edition", "price": "26.4", "flag": "🇹🇷", "date": "16.09", "status": "" },
  { "name": "RIDE 5 - Special Edition", "price": "18.0", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "RIDE 5", "price": "12.0", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Raging Justice", "price": "0.09", "flag": "🇦🇷", "date": "23.02", "status": "" },
  { "name": "Railway Empire 2 - Digital Deluxe Edition", "price": "0.82", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "ReCore", "price": "2.4", "flag": "🇦🇷", "date": "", "status": "" },
  { "name": "Record of Lodoss War-Deedlit in Wonder Labyrinth-", "price": "0.3", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "Red Faction Guerrilla Re-Mars-tered", "price": "0.05", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Redfall Bite Back Edition", "price": "42.24", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Regular Moonstone Pack -- 2,500", "price": "1.73", "flag": "🇦🇷", "date": "01.09", "status": "" },
  { "name": "Relicta", "price": "0.1", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Remnant II - Deluxe Edition", "price": "5.28", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Remnant II - Ultimate Edition", "price": "6.72", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Remnant: From the Ashes - Complete Edition", "price": "1.44", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Rise of the Tomb Raider: 20 Year Celebration", "price": "4.9", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "RoboCop: Rogue City - Alex Murphy Edition", "price": "8.15", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Romancing SaGa 2", "price": "0.13", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "Romancing SaGa 3", "price": "0.15", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "Ruinverse", "price": "0.13", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "Rune Factory 4 Special", "price": "0.72", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "SBK™22", "price": "1.62", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "SCARLET NEXUS Deluxe Edition", "price": "0.96", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "SCARLET NEXUS Ultimate Edition", "price": "1.2", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "SCARLET NEXUS", "price": "0.72", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "SD GUNDAM BATTLE ALLIANCE", "price": "1.89", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "2.05", "flag": "🇦🇷", "date": "01.01", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "1.54", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "STORY OF SEASONS: A Wonderful Life", "price": "11.88", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "STORY OF SEASONS: A Wonderful Life", "price": "4.9", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "STORY OF SEASONS: Friends of Mineral Town - Digital Edition", "price": "0.21", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "STRANGER OF PARADISE FINAL FANTASY ORIGIN Digital Deluxe ...", "price": "6.48", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "STRANGER OF PARADISE FINAL FANTASY ORIGIN", "price": "3.96", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "SWORD ART ONLINE Alicization Lycoris", "price": "0.36", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "SWORD ART ONLINE Last Recollection Deluxe Edition", "price": "12.01", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "SWORD ART ONLINE Last Recollection", "price": "8.48", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "SWORD ART ONLINE: FATAL BULLET", "price": "0.27", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Saints Row Gold Edition", "price": "14.84", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Saints Row IV: Re-Elected & Gat out of Hell", "price": "0.09", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Saints Row IV: Re-Elected", "price": "0.05", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Saints Row The Third Remastered", "price": "0.38", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Saints Row: Gat out of Hell", "price": "0.04", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Scars Above", "price": "1.01", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Seek Hearts", "price": "0.13", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Sekiro™: Shadows Die Twice - GOTY Edition", "price": "9.34", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Session: Skate Sim", "price": "0.34", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Shadowblade Odyssey", "price": "0.02", "flag": "🇦🇷", "date": "02.03", "status": "" },
  { "name": "Shenmue I & II", "price": "0.07", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "Shenmue I & II", "price": "0.11", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Shining Resonance Refrain", "price": "1.25", "flag": "🇹🇷", "date": "15.02", "status": "" },
  { "name": "Shiro (for Windows 10)", "price": "0.05", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Shredders - 540INDY Edition", "price": "0.49", "flag": "🇦🇷", "date": "16.03", "status": "" },
  { "name": "Sid Meier's Civilization VI", "price": "1.71", "flag": "🇹🇷", "date": "20.02", "status": "" },
  { "name": "Sid Meier’s Civilization® VI Anthology", "price": "17.13", "flag": "🇹🇷", "date": "16.03", "status": "" },
  { "name": "Sid Meier’s Civilization® VI Platinum Edition", "price": "11.59", "flag": "🇹🇷", "date": "16.03", "status": "" },
  { "name": "Sigi - A Fart for Melusina", "price": "0.02", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Silver Nornir", "price": "0.13", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Sissa's Path", "price": "0.58", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Skyrim Anniversary Edition + Fallout 4 G.O.T.Y Bundle", "price": "21.12", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Small Moonstone Pack -- 1,200", "price": "0.86", "flag": "🇦🇷", "date": "01.09", "status": "" },
  { "name": "Smart Moves (for Windows 10)", "price": "0.05", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Sniper Elite 5 Complete Edition", "price": "1.51", "flag": "🇦🇷", "date": "01.05", "status": "" },
  { "name": "Sniper Elite 5 Deluxe Edition", "price": "7.68", "flag": "🇦🇷", "date": "01.05", "status": "" },
  { "name": "SnowRunner - 1-Anniversary Edition", "price": "7.92", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Sparkle Bundle", "price": "0.15", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "Sports Pinball Bundle", "price": "0.1", "flag": "🇦🇷", "date": "17.02", "status": "" },
  { "name": "SteamWorld Build & Dig Bundle", "price": "2.36", "flag": "🇦🇷", "date": "29.02", "status": "" },
  { "name": "Steelrising - Standard Edition", "price": "1.87", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Stellaris: Console Edition - Deluxe Edition", "price": "0.53", "flag": "🇦🇷", "date": "16.10", "status": "" },
  { "name": "Streets of Rage 4", "price": "0.22", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Sunset Overdrive Deluxe Edition", "price": "1.83", "flag": "🇹🇷", "date": "01.06", "status": "" },
  { "name": "Super Pixel Kid", "price": "0.02", "flag": "🇦🇷", "date": "19.02", "status": "" },
  { "name": "Sword of Elpisia", "price": "0.13", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "Synchro Hedgehogs (for Windows 10)", "price": "0.05", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Synchro Hedgehogs Bundle", "price": "0.08", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "THE KING OF FIGHTERS XV Deluxe Edition", "price": "6.1", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "THE KING OF FIGHTERS XV Standard Edition", "price": "1.74", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "TT Isle of Man: Ride on the Edge 3", "price": "7.14", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Tales of Arise - Beyond The Dawn Ultimate Edition", "price": "41.56", "flag": "🇹🇷", "date": "15.02", "status": "" },
  { "name": "Tales of Arise - Beyond the Dawn Deluxe Edition", "price": "37.1", "flag": "🇹🇷", "date": "20.02", "status": "" },
  { "name": "Tales of Kenzera™: ZAU Standard Edition", "price": "7.56", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Tales of Symphonia Remastered", "price": "2.84", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "Tales of Vesperia™: Definitive Edition", "price": "0.38", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Tanky Tanks", "price": "0.06", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Teenage Mutant Ninja Turtles: Shredder's Revenge - Dimension Shellshock", "price": "0.41", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Teenage Mutant Ninja Turtles: Shredder's Revenge", "price": "0.3", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Tennis World Tour 2 - Complete Edition Xbox Series X|S", "price": "0.17", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Tennis World Tour 2", "price": "0.72", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "The Bard's Tale Trilogy", "price": "0.83", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "The Chant", "price": "2.4", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "The DioField Chronicle Digitale Deluxe Edition", "price": "4.22", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "The DioField Chronicle", "price": "3.36", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "The Elder Scrolls Online Collection: Necrom", "price": "20.16", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "The Elder Scrolls Online Deluxe Collection: Necrom", "price": "30.53", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "The Elder Scrolls V: Skyrim Anniversary Edition", "price": "12.67", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "The Escapists: Supermax Edition", "price": "0.3", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "The Evil Within Digital Bundle", "price": "2.67", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "The Excrawlers", "price": "0.06", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "The Explorer Of Night (for Windows 10)", "price": "0.06", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "The Explorer Of Night", "price": "0.04", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "The FMV Collection 1", "price": "0.39", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "The FMV Collection 2", "price": "0.39", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "The Jackbox Party Quadpack", "price": "0.67", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "The Lamplighters League - Deluxe Edition", "price": "0.75", "flag": "🇦🇷", "date": "01.04", "status": "" },
  { "name": "The Last Oricru", "price": "1.68", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "The Lord of the Rings: Gollum™ - Precious Edition", "price": "7.63", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "The Oregon Trail", "price": "4.02", "flag": "🇦🇷", "date": "02.03", "status": "" },
  { "name": "The Outer Worlds: Board-Approved Bundle", "price": "14.23", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "The Quarry for Xbox One", "price": "4.94", "flag": "🇹🇷", "date": "20.02", "status": "" },
  { "name": "The Quarry for Xbox Series X|S", "price": "5.77", "flag": "🇹🇷", "date": "20.02", "status": "" },
  { "name": "The Rumble Fish 2", "price": "1.63", "flag": "🇹🇷", "date": "15.02", "status": "" },
  { "name": "The Smile Alchemist", "price": "0.17", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "The Surge - Augmented Edition", "price": "1.34", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "The Surge 2 - Premium Edition", "price": "2.15", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "The Walking Dead: A New Frontier", "price": "0.21", "flag": "🇦🇷", "date": "01.11", "status": "" },
  { "name": "The Walking Dead: Michonne", "price": "0.07", "flag": "🇦🇷", "date": "01.11", "status": "" },
  { "name": "This War of Mine - Complete Edition", "price": "0.37", "flag": "🇦🇷", "date": "16.05", "status": "" },
  { "name": "This War of Mine: The Little Ones", "price": "0.04", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Thunder Kid II: Null Mission", "price": "0.06", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Tiny Tina's Assault on Dragon Keep: A Wonderlands One-sho...", "price": "0.53", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Tiny Tina's Wonderlands", "price": "4.94", "flag": "🇹🇷", "date": "20.02", "status": "" },
  { "name": "Tiny Tina's Wonderlands: Chaotic Great Edition", "price": "5.27", "flag": "🇹🇷", "date": "20.02", "status": "" },
  { "name": "Tiny Tina's Wonderlands: Next-Level Edition", "price": "5.77", "flag": "🇹🇷", "date": "20.02", "status": "" },
  { "name": "Tom Clancy's Rainbow Six® Extraction United Bundle", "price": "5.28", "flag": "🇦🇷", "date": "16.06", "status": "" },
  { "name": "Tom Clancy's Rainbow Six® Siege Operator Edition", "price": "8.64", "flag": "🇦🇷", "date": "16.06", "status": "" },
  { "name": "Tom Clancy's Rainbow Six® Siege Ultimate Edition", "price": "11.52", "flag": "🇦🇷", "date": "12.03", "status": "" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Ultimate Edition", "price": "4.56", "flag": "🇦🇷", "date": "01.08", "status": "" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Year 2 Gold Edition", "price": "1.92", "flag": "🇦🇷", "date": "01.08", "status": "" },
  { "name": "Tony Hawk's™ Pro Skater™ 1 + 2 - Cross-Gen Deluxe Bundle", "price": "1.08", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Totally Reliable Delivery Service Deluxe Edition", "price": "0.33", "flag": "🇦🇷", "date": "01.12", "status": "" },
  { "name": "Trailmakers - Space Upgrade", "price": "0.46", "flag": "🇦🇷", "date": "16.02", "status": "" },
  { "name": "Trailmakers Deluxe Edition", "price": "0.52", "flag": "🇦🇷", "date": "16.02", "status": "" },
  { "name": "Train Sim World® 4: Austrian Regional Edition", "price": "4.32", "flag": "🇹🇷", "date": "01.08", "status": "" },
  { "name": "Train Sim World® 4: Deluxe Edition", "price": "13.44", "flag": "🇦🇷", "date": "01.08", "status": "" },
  { "name": "Train Sim World® 4: Flying Scotsman Centenary Edition", "price": "6.24", "flag": "🇦🇷", "date": "01.08", "status": "" },
  { "name": "Train Sim World® 4: German Regional Edition", "price": "4.32", "flag": "🇹🇷", "date": "01.08", "status": "" },
  { "name": "Train Sim World® 4: Special Edition", "price": "20.16", "flag": "🇦🇷", "date": "01.08", "status": "" },
  { "name": "Train Sim World® 4: UK Regional Edition", "price": "4.32", "flag": "🇹🇷", "date": "01.08", "status": "" },
  { "name": "Train Sim World® 4: USA Regional Edition", "price": "4.32", "flag": "🇹🇷", "date": "01.08", "status": "" },
  { "name": "Transport Fever 2: Console Edition - Deluxe", "price": "5.04", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Turret Rampage", "price": "1.73", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "Ultra Foodmess Deluxe", "price": "0.06", "flag": "🇦🇷", "date": "28.02", "status": "" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "0.16", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Valkyria Chronicles 4 Complete Edition", "price": "2.11", "flag": "🇹🇷", "date": "15.02", "status": "" },
  { "name": "Valkyria Chronicles 4 DLC Bundle", "price": "1.06", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "Valkyria Chronicles 4", "price": "0.78", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "Valkyria Revolution", "price": "0.66", "flag": "🇹🇷", "date": "15.02", "status": "" },
  { "name": "Vampire: The Masquerade - Swansong PRIMOGEN EDITION", "price": "1.56", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Vampyr", "price": "1.25", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Vermintide - Digital Value Pack", "price": "0.48", "flag": "🇦🇷", "date": "07.03", "status": "" },
  { "name": "WARTILE", "price": "0.03", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "WORLD OF FINAL FANTASY MAXIMA", "price": "0.78", "flag": "🇦🇷", "date": "15.02", "status": "" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "0.76", "flag": "🇦🇷", "date": "31.08", "status": "" },
  { "name": "WRC Generations - The FIA WRC Official Game", "price": "2.4", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "WWE 2K Battlegrounds Digital Deluxe Edition", "price": "0.91", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "WWE 2K Battlegrounds", "price": "0.66", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "WWE 2K23 Bad Bunny Bundle", "price": "14.02", "flag": "🇹🇷", "date": "20.02", "status": "" },
  { "name": "WWE 2K23 Bad Bunny Edition", "price": "20.58", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "WWE 2K23 Icon Edition", "price": "24.94", "flag": "🇹🇷", "date": "20.02", "status": "" },
  { "name": "Warhammer 40,000: Boltgun", "price": "8.84", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Warhammer 40,000: Chaos Gate - Daemonhunters - Purifier Edition", "price": "17.34", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Warhammer 40,000: Chaos Gate - Daemonhunters", "price": "15.3", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Warhammer 40,000: Darktide - Imperial Edition", "price": "4.8", "flag": "🇦🇷", "date": "01.10", "status": "" },
  { "name": "Warhammer 40,000: Inquisitor - Martyr Ultimate Edition", "price": "0.26", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Warstride Challenges", "price": "8.72", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Wasteland 3 (PC) Colorado Collection", "price": "1.73", "flag": "🇦🇷", "date": "01.10", "status": "" },
  { "name": "Wasteland 3 Colorado Collection", "price": "11.59", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Wasteland 3", "price": "2.13", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Watch Dogs®2 - Deluxe Edition", "price": "3.26", "flag": "🇦🇷", "date": "16.07", "status": "" },
  { "name": "Watch Dogs®2 - Gold Edition", "price": "3.84", "flag": "🇦🇷", "date": "16.07", "status": "" },
  { "name": "We Happy Few Digital Deluxe", "price": "1.63", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Werewolf: The Apocalypse - Earthblood Xbox One", "price": "0.41", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Werewolf: The Apocalypse - Earthblood Xbox Series X|S", "price": "0.41", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Windbound", "price": "0.19", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Windjammers 2", "price": "0.2", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Wired Italian Adventure Bundle", "price": "0.41", "flag": "🇦🇷", "date": "01.01", "status": "" },
  { "name": "Without Escape: Console Edition", "price": "0.03", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Wolfenstein: Alt History Collection", "price": "13.2", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Wolfenstein: Youngblood Deluxe Edition", "price": "5.78", "flag": "🇹🇷", "date": "18.02", "status": "" },
  { "name": "Wolfenstein® II: The New Colossus™ Digital Deluxe Edition", "price": "7.92", "flag": "🇹🇷", "date": "13.06", "status": "" },
  { "name": "Wolfenstein®: The Two-Pack", "price": "4.19", "flag": "🇹🇷", "date": "12.03", "status": "" },
  { "name": "Wonder Boy: The Dragon's Trap", "price": "0.1", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "World War Z: Aftermath - Deluxe Edition", "price": "6.14", "flag": "🇦🇷", "date": "01.12", "status": "" },
  { "name": "Wreckfest Complete Edition", "price": "1.15", "flag": "🇦🇷", "date": "16.11", "status": "" },
  { "name": "XCOM® 2 Collection", "price": "1.05", "flag": "🇹🇷", "date": "20.02", "status": "" },
  { "name": "XCOM®: Enemy Within", "price": "0.1", "flag": "🇦🇷", "date": "20.02", "status": "" },
  { "name": "Yakuza: Like a Dragon Hero Edition", "price": "3.43", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "Yakuza: Like a Dragon", "price": "3.02", "flag": "🇹🇷", "date": "15.02", "status": "" },
  { "name": "Young Souls", "price": "0.22", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Yum Yum Cookstar", "price": "0.07", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "[PROTOTYPE®]", "price": "0.18", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Greenhorn Bundle", "price": "0.55", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Master Hunter Bundle", "price": "0.82", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Seasoned Hunter Bundle", "price": "0.69", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Traveler's Cosmetic Bundle", "price": "0.34", "flag": "🇦🇷", "date": "20.02", "status": "" },

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
    a = 110
  } else if (value > 10 && value <= 15) {
    a = 135
  } else if (value > 15 && value <= 20) {
    a = 120

  } else if (value > 20 && value <= 25) {
    a = 200

  } else if (value > 25) {
    a = 230

  }
  return a
}

function resPercent(percent) {
  let a;

  if (percent <= 1) {
    a = 50
  } else if (percent > 1 && percent <= 5) {
    a = 40
  } else if (percent > 5 && percent <= 10) {

    a = 35
  } else if (percent > 10 && percent <= 15) {

    a = 30
  } else if (percent > 15 && percent <= 20) {

    a = 25
  } else if (percent > 20 && percent <= 25) {

    a = 25
  } else if (percent > 25) {

    a = 25
  }
  return a
}

function resSwitсhTr(value) {
  let a;

  if (value <= 1) {
    a = 60
  } else if (value > 1 && value <= 5) {
    a = 80
  } else if (value > 5 && value <= 10) {
    a = 110
  } else if (value > 10 && value <= 15) {
    a = 135
  } else if (value > 15 && value <= 20) {
    a = 120
  } else if (value > 20 && value <= 25) {
    a = 200
  } else if (value > 25) {
    a = 230
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



