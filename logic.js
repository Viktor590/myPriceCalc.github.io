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
  { "name": "2 Synchro Hedgehogs", "price": "0.05", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "502's Arcade", "price": "0.15", "flag": "🇦🇷", "date": "03.03", "status": "" },
  { "name": "9 Monkeys of Shaolin + Ash of Gods + Redeemer: Bundle", "price": "0.12", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "9 Monkeys of Shaolin", "price": "0.54", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "A Plague Tale: Innocence", "price": "2.1", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "A Plague Tale: Requiem", "price": "12.4", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "A Way Out", "price": "0.12", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "ASTRONEER", "price": "1.0", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Ad Infinitum", "price": "2.94", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Adventures of Chris", "price": "0.1", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Aery - Dreamscape", "price": "0.09", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Afterimage", "price": "1.05", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Age of Empires 25th Anniversary Collection", "price": "1.65", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Age of Empires Definitive Edition", "price": "1.2", "flag": "🇦🇷", "date": "02.03", "status": "" },
  { "name": "Age of Empires III: Definitive Edition", "price": "1.2", "flag": "🇦🇷", "date": "02.03", "status": "" },
  { "name": "Age of Empires: Definitive Collection", "price": "0.67", "flag": "🇦🇷", "date": "06.10", "status": "" },
  { "name": "Agents of Mayhem - Total Mayhem Bundle", "price": "0.12", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Agents of Mayhem", "price": "0.02", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Agony", "price": "0.02", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Air Bounce - The Jump 'n' Run Challenge", "price": "0.06", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Air Guitar Warrior Gamepad Edition", "price": "0.04", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Airborne Bundle", "price": "0.55", "flag": "🇦🇷", "date": "01.02", "status": "" },
  { "name": "Aliens: Fireteam Elite", "price": "1.43", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Alone in the Dark - Digital Deluxe Edition", "price": "34.8", "flag": "🇦🇷", "date": "20.03", "status": "" },
  { "name": "Alone in the Dark", "price": "31.32", "flag": "🇦🇷", "date": "20.03", "status": "" },
  { "name": "Alphadia Neo", "price": "0.17", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Angels of Death", "price": "0.15", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Arcade Paradise | High Score Edition", "price": "0.38", "flag": "🇦🇷", "date": "01.07", "status": "" },
  { "name": "Asdivine Hearts I & II", "price": "0.17", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Ash of Gods Redemption", "price": "0.19", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Assassin's Creed Chronicles – Trilogy", "price": "0.09", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Assassin's Creed® Bundle: Assassin's Creed® Valhalla, Ass...", "price": "40.96", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Assassin's Creed® Odyssey - DELUXE EDITION", "price": "17.92", "flag": "🇹🇷", "date": "16.09", "status": "" },
  { "name": "Assassin's Creed® Odyssey - ULTIMATE EDITION", "price": "23.68", "flag": "🇹🇷", "date": "16.09", "status": "" },
  { "name": "Assassin's Creed® Origins - DELUXE EDITION", "price": "17.28", "flag": "🇹🇷", "date": "01.06", "status": "" },
  { "name": "Assassin's Creed® Origins - GOLD EDITION", "price": "20.48", "flag": "🇹🇷", "date": "01.06", "status": "" },
  { "name": "Assassin's Creed® Rogue", "price": "0.14", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Assassin's Creed® Valhalla Complete Edition", "price": "25.6", "flag": "🇹🇷", "date": "16.07", "status": "" },
  { "name": "Assassin's Creed® Valhalla Deluxe Edition", "price": "19.84", "flag": "🇹🇷", "date": "16.07", "status": "" },
  { "name": "Assassin's Creed® Valhalla Ragnarök Edition", "price": "15.36", "flag": "🇹🇷", "date": "16.07", "status": "" },
  { "name": "Assassin’s Creed® Valhalla + Immortals Fenyx Rising™ Bundle", "price": "25.6", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Atomic Heart - Gold Edition", "price": "14.4", "flag": "🇦🇷", "date": "16.08", "status": "" },
  { "name": "Atomic Heart - Premium Edition", "price": "16.32", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Atomic Heart", "price": "22.08", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Awarded Platformer Bundle", "price": "0.2", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "BATTLETECH Mercenary Collection", "price": "1.24", "flag": "🇦🇷", "date": "13.06", "status": "" },
  { "name": "BLACKTAIL", "price": "3.84", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Back 4 Blood: Deluxe Edition", "price": "7.87", "flag": "🇦🇷", "date": "01.04", "status": "" },
  { "name": "Batman: Arkham Collection", "price": "1.35", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Batman: Arkham Knight Premium Edition", "price": "1.68", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Battlefield V Definitive Edition", "price": "0.42", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Battlefield™ 1 Revolution", "price": "0.2", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Battlefield™ 2042 Elite Edition Xbox One & Xbox Series X|S", "price": "6.34", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Battlefield™ 2042 Xbox One & Xbox Series X|S", "price": "1.54", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Battlefield™ 2042 Xbox One", "price": "1.54", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Battlefield™ Hardline Ultimate Edition", "price": "0.2", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Big Moonstone Pack -- 5,500", "price": "3.45", "flag": "🇦🇷", "date": "01.09", "status": "" },
  { "name": "Blazing Chrome", "price": "0.12", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Blizzard® Arcade Collection", "price": "3.2", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Bloomyth & Strong Moon Bundle", "price": "0.08", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Bright Paw: Definitive Edition", "price": "0.55", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Builder Flipper bundle", "price": "0.58", "flag": "🇦🇷", "date": "01.01", "status": "" },
  { "name": "Bullet Beat (for Windows 10)", "price": "0.04", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Bullet Beat", "price": "0.04", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "CATAN® - Console Edition Deluxe", "price": "0.9", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "CATAN® - Console Edition", "price": "0.18", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "CODE VEIN Deluxe Edition", "price": "0.72", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Call of Duty: Ghosts Digital Hardened Edition", "price": "4.19", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Call of Duty®: Advanced Warfare Digital Pro Edition", "price": "4.19", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Call of Duty®: Black Ops 4 - Digital Deluxe", "price": "10.27", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Call of Duty®: Black Ops Cold War - Cross-Gen Bundle", "price": "7.49", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Call of Duty®: Black Ops III - Zombies Chronicles Edition", "price": "3.17", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Call of Duty®: Infinite Warfare - Digital Legacy Edition", "price": "4.06", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Call of Duty®: Modern Warfare® - Digital Standard Edition", "price": "4.99", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Call of Duty®: Vanguard - Cross-Gen Bundle", "price": "7.67", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Call of Duty®: WWII - Digital Deluxe", "price": "6.02", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Call of the Wild: The Angler™ - Deluxe Edition", "price": "0.62", "flag": "🇦🇷", "date": "01.09", "status": "" },
  { "name": "Cassette Beasts: Deluxe Edition", "price": "0.36", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Castle Walker", "price": "0.05", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Cat and Ghostly Road (Xbox Series X|S)", "price": "0.14", "flag": "🇦🇷", "date": "06.03", "status": "" },
  { "name": "Cat and Ghostly Road", "price": "0.14", "flag": "🇦🇷", "date": "06.03", "status": "" },
  { "name": "Chained Echoes", "price": "0.32", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Chants of Sennaar", "price": "12.0", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Chef Life - AL FORNO EDITION", "price": "3.6", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Chivalry 2 King's Edition", "price": "0.82", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Chivalry 2 Special Edition", "price": "0.69", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Chorus", "price": "2.23", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Circa Infinity", "price": "0.04", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Cities: Skylines - Mayor's Edition", "price": "0.72", "flag": "🇦🇷", "date": "01.04", "status": "" },
  { "name": "Cities: Skylines - Premium Edition 2", "price": "0.96", "flag": "🇦🇷", "date": "01.04", "status": "" },
  { "name": "Conan Exiles - Complete Edition October 2021", "price": "2.21", "flag": "🇦🇷", "date": "16.08", "status": "" },
  { "name": "Conan Exiles - Isle of Siptah Edition", "price": "0.95", "flag": "🇦🇷", "date": "16.08", "status": "" },
  { "name": "Contra: Operation Galuga + Early-purchase Bonus", "price": "4.97", "flag": "🇦🇷", "date": "12.03", "status": "" },
  { "name": "Cookie Cutter", "price": "0.24", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Crash Team Rumble™ - Deluxe Edition", "price": "6.84", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Crash™ Team Racing Nitro-Fueled - Nitros Oxide Edition", "price": "1.26", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "CrossCode", "price": "0.12", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Crusader Kings III: Royal Edition", "price": "1.03", "flag": "🇦🇷", "date": "01.02", "status": "" },
  { "name": "Cube Airport", "price": "0.04", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Cube Farmer", "price": "0.03", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Cyber Protocol", "price": "0.07", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "DAKAR 18", "price": "0.04", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "DAS WIRED-HORROR-SPIELPAKET", "price": "0.55", "flag": "🇦🇷", "date": "01.01", "status": "" },
  { "name": "DEAD ISLAND 2 DELUXE EDITION", "price": "19.17", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "DEAD ISLAND 2 GOLD EDITION", "price": "23.01", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "DEADCRAFT Deluxe Edition", "price": "0.1", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "DEADCRAFT", "price": "0.34", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "DEATHLOOP Deluxe Edition", "price": "16.64", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "DIRT 5 Year One Edition", "price": "1.24", "flag": "🇦🇷", "date": "11.08", "status": "" },
  { "name": "DOOM Eternal Deluxe Edition", "price": "15.36", "flag": "🇹🇷", "date": "01.10", "status": "" },
  { "name": "DOOM Eternal: The Ancient Gods - Part One", "price": "5.44", "flag": "🇹🇷", "date": "01.10", "status": "" },
  { "name": "DOOM Eternal: The Ancient Gods - Part Two", "price": "5.44", "flag": "🇹🇷", "date": "18.03", "status": "" },
  { "name": "DOOM Eternal: Year One Pass (PC)", "price": "8.21", "flag": "🇹🇷", "date": "03.12", "status": "" },
  { "name": "DOOM Eternal: Year One Pass", "price": "8.21", "flag": "🇹🇷", "date": "01.10", "status": "" },
  { "name": "DOOM Slayers Collection", "price": "3.46", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "DRAGON BALL FIGHTERZ - FighterZ Edition", "price": "1.69", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "DRAGON BALL XENOVERSE 2 DELUXE EDITION", "price": "11.98", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "DRAGON BALL Z: KAKAROT Deluxe Edition", "price": "10.79", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "DRAGON BALL: THE BREAKERS Special Edition", "price": "1.23", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Dark Grim Mariupolis (for Windows 10)", "price": "0.03", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Dark Grim Mariupolis", "price": "0.04", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Darkest Dungeon®: Ancestral Edition", "price": "0.38", "flag": "🇦🇷", "date": "01.02", "status": "" },
  { "name": "Dead Cells: Medley of Pain Bundle", "price": "0.55", "flag": "🇦🇷", "date": "16.09", "status": "" },
  { "name": "Dead Cells: Return to Castlevania Bundle", "price": "0.43", "flag": "🇦🇷", "date": "16.09", "status": "" },
  { "name": "Dead Island 2", "price": "12.3", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Dead Island Definitive Collection", "price": "0.21", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Dead Island Definitive Edition", "price": "0.28", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Dead Island Retro Revenge", "price": "0.01", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Dead Island: Riptide Definitive Edition", "price": "0.04", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Dead Space Digital Deluxe Edition", "price": "25.6", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Dead Space", "price": "22.4", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Deadlight: Director's Cut", "price": "0.02", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Death or Treat", "price": "0.18", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Deep Rock Galactic - Deluxe Edition", "price": "0.55", "flag": "🇦🇷", "date": "01.11", "status": "" },
  { "name": "Deep Rock Galactic - Ultimate Edition", "price": "0.69", "flag": "🇦🇷", "date": "01.11", "status": "" },
  { "name": "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles Ultimate Edition", "price": "25.16", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles", "price": "6.72", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "Deus Ex: Mankind Divided - Digital Deluxe Edition", "price": "1.35", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Dishonored & Prey: The Arkane Collection", "price": "16.0", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Dishonored®: Death of the Outsider™ Deluxe Bundle", "price": "12.74", "flag": "🇹🇷", "date": "13.06", "status": "" },
  { "name": "Disney Dreamlight Valley: A Rift in Time", "price": "0.52", "flag": "🇦🇷", "date": "01.09", "status": "" },
  { "name": "Dolmen", "price": "0.24", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Dragon Age™: Inquisition - Game of the Year Edition", "price": "1.22", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Dragon Ball Xenoverse + Season Pass", "price": "0.19", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Dreamfall Chapters", "price": "0.04", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Dungeons 4 - Digital Deluxe Edition", "price": "13.44", "flag": "🇦🇷", "date": "16.11", "status": "" },
  { "name": "Dust & Neon", "price": "0.17", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Dying Light 2 Stay Human - Ultimate Edition", "price": "33.03", "flag": "🇹🇷", "date": "28.02", "status": "" },
  { "name": "Dying Light 2 Stay Human", "price": "16.94", "flag": "🇹🇷", "date": "28.02", "status": "" },
  { "name": "Dying Light: Definitive Edition", "price": "5.81", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "EA Family Bundle", "price": "0.16", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "EA SPORTS FC™ 24 Standard Edition Xbox One & Xbox Series X|S", "price": "13.44", "flag": "🇹🇷", "date": "31.12", "status": "" },
  { "name": "EA SPORTS FC™ 24 Standard Edition Xbox One & Xbox Series X|S", "price": "15.68", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "EA SPORTS FC™ 24 Ultimate Edition Xbox One & Xbox Series X|S", "price": "25.6", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "EA SPORTS™ PGA TOUR™ Deluxe Edition", "price": "21.12", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "EA SPORTS™ PGA TOUR™", "price": "17.92", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Elderand", "price": "0.26", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "EleMetals: Death Metal Death Match!", "price": "0.05", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Endurance: Space Action", "price": "0.08", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Escape Academy Deluxe Edition", "price": "0.48", "flag": "🇦🇷", "date": "01.02", "status": "" },
  { "name": "Escape Dead Island", "price": "0.05", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "Escape from Terror City", "price": "3.36", "flag": "🇦🇷", "date": "", "status": "" },
  { "name": "Evil West", "price": "12.8", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Exorder", "price": "0.18", "flag": "🇦🇷", "date": "02.03", "status": "" },
  { "name": "F1® Manager 2023 Deluxe Edition", "price": "14.08", "flag": "🇹🇷", "date": "16.10", "status": "" },
  { "name": "Fallout 4: Game of the Year Edition (PC)", "price": "7.3", "flag": "🇹🇷", "date": "12.03", "status": "" },
  { "name": "Fallout 4: Game of the Year Edition", "price": "7.3", "flag": "🇹🇷", "date": "12.03", "status": "" },
  { "name": "Fallout 76: Atlantic City - Boardwalk Paradise Deluxe Edition", "price": "11.52", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Far Cry® 6 Deluxe Edition", "price": "19.84", "flag": "🇹🇷", "date": "16.06", "status": "" },
  { "name": "Far Cry® 6 Game of the Year Edition", "price": "24.32", "flag": "🇹🇷", "date": "16.06", "status": "" },
  { "name": "Far Cry® 6 Gold Edition", "price": "20.48", "flag": "🇹🇷", "date": "16.06", "status": "" },
  { "name": "Far Cry®5 Gold Edition", "price": "3.17", "flag": "🇦🇷", "date": "01.07", "status": "" },
  { "name": "Faraday Protocol", "price": "0.09", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Farm Bundle", "price": "0.55", "flag": "🇦🇷", "date": "01.01", "status": "" },
  { "name": "Farm Pets Bundle", "price": "0.82", "flag": "🇦🇷", "date": "01.01", "status": "" },
  { "name": "Flailing Limbs Bundle", "price": "0.24", "flag": "🇦🇷", "date": "01.08", "status": "" },
  { "name": "Flooded", "price": "0.18", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "For Honor® Complete Edition", "price": "4.8", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Forza Horizon 4 Expansions Bundle", "price": "2.7", "flag": "🇦🇷", "date": "03.10", "status": "" },
  { "name": "Forza Horizon 5 PLUS Hot Wheels Bundle", "price": "10.37", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Frostpunk: Complete Collection", "price": "0.62", "flag": "🇦🇷", "date": "16.07", "status": "" },
  { "name": "Fuga: Melodies of Steel 2 - Deluxe Edition", "price": "7.68", "flag": "🇦🇷", "date": "16.05", "status": "" },
  { "name": "Fuga: Melodies of Steel 2 - Ultimate Edition", "price": "8.21", "flag": "🇦🇷", "date": "16.05", "status": "" },
  { "name": "GENIE Reprise", "price": "2.76", "flag": "🇦🇷", "date": "29.02", "status": "" },
  { "name": "GRID Legends", "price": "1.92", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "GRID Legends: Deluxe Edition", "price": "3.57", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Gangs of Sherwood – Lionheart Edition", "price": "4.74", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Garden Bundle", "price": "0.62", "flag": "🇦🇷", "date": "01.01", "status": "" },
  { "name": "Gears of War 4 and Halo 5: Guardians Bundle", "price": "0.38", "flag": "🇦🇷", "date": "31.01", "status": "" },
  { "name": "Gears of War Ultimate Edition Deluxe Version", "price": "1.25", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Gem Wizards Tactics", "price": "0.05", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Generation Zero ® - Silver Bundle", "price": "0.69", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Generation Zero ® - Ultimate Bundle", "price": "0.96", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Generation Zero® - Gold Bundle", "price": "0.82", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Geometric Sniper Z", "price": "0.06", "flag": "🇦🇷", "date": "06.03", "status": "" },
  { "name": "Ghostwire: Tokyo Deluxe Edition", "price": "19.84", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Goat Simulator 3 - Digital Downgrade Edition", "price": "1.92", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Goat Simulator: The GOATY", "price": "0.29", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Goat Simulator: Waste Of Space Bundle", "price": "0.13", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Gods Will Fall - Valiant Edition", "price": "0.38", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Gods Will Fall", "price": "0.12", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Golf With Your Friends - Starter Edition", "price": "17.28", "flag": "🇦🇷", "date": "16.07", "status": "" },
  { "name": "Golf With Your Friends - Ultimate Edition", "price": "34.53", "flag": "🇹🇷", "date": "16.07", "status": "" },
  { "name": "Gothic Platformer Games Bundle", "price": "0.1", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Gravel Special Edition", "price": "0.36", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Gravel", "price": "0.24", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "GreedFall - Gold Edition", "price": "2.28", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Guilty Gear -Strive- Daredevil Edition", "price": "6.81", "flag": "🇦🇷", "date": "01.09", "status": "" },
  { "name": "Gungrave G.O.R.E", "price": "1.2", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "HOT WHEELS UNLEASHED 2 - Turbocharged™", "price": "9.9", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ 2 - Turbocharged - Deluxe Edition", "price": "14.1", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ 2 - Turbocharged - Legendary Edition", "price": "18.0", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Halo 5: Guardians – Digital Deluxe Edition", "price": "6.24", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Halo Wars 2: Complete Edition", "price": "25.6", "flag": "🇹🇷", "date": "04.04", "status": "" },
  { "name": "Hardspace: Shipbreaker", "price": "4.86", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Have a Nice Death", "price": "2.01", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Heirs of the Kings", "price": "0.17", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Hell Let Loose - Deluxe Edition", "price": "29.93", "flag": "🇹🇷", "date": "01.01", "status": "" },
  { "name": "Hell Let Loose - Ultimate Edition", "price": "34.53", "flag": "🇹🇷", "date": "01.01", "status": "" },
  { "name": "Hello Neighbor 2 Deluxe Edition", "price": "5.28", "flag": "🇦🇷", "date": "16.12", "status": "" },
  { "name": "Hi-Fi RUSH Deluxe Edition", "price": "15.36", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "High On Life: DLC Bundle", "price": "5.76", "flag": "🇦🇷", "date": "16.06", "status": "" },
  { "name": "Hogwarts Legacy: Digital Deluxe Edition", "price": "21.1", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Homebody", "price": "0.17", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Homefront®: The Revolution 'Freedom Fighter' Bundle", "price": "0.16", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Homefront®: The Revolution", "price": "0.02", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Hood: Outlaws & Legends", "price": "1.21", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Hotel: A Resort Simulator", "price": "5.88", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Huge Moonstone Pack -- 14,500", "price": "8.64", "flag": "🇦🇷", "date": "01.09", "status": "" },
  { "name": "Hypnospace Outlaw & Slayers X: Terminal Aftermath: Vengance of the Slayer Bundle", "price": "0.46", "flag": "🇦 🇷", "date": "01.06", "status": "" },
  { "name": "IN-VERT", "price": "0.04", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "INSIDE & LIMBO Bundle", "price": "2.42", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Immortals Fenyx Rising™ Gold Edition", "price": "5.28", "flag": "🇦🇷", "date": "01.09", "status": "" },
  { "name": "Immortals of Aveum™ Deluxe Edition", "price": "25.6", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Immortals of Aveum™", "price": "22.4", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Infernax", "price": "0.24", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Injustice™ 2 - Legendary Edition", "price": "1.82", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Inspector Waffles", "price": "0.09", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Insurgency: Sandstorm - Deluxe Edition", "price": "10.2", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Insurgency: Sandstorm - Gold Edition", "price": "24.0", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Insurgency: Sandstorm - Ultimate Edition", "price": "27.84", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Insurgency: Sandstorm", "price": "4.48", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Iron Harvest Complete Edition", "price": "1.47", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "It's Kooky", "price": "0.04", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Jurassic World Evolution 2: Deluxe Edition", "price": "6.72", "flag": "🇦🇷", "date": "16.05", "status": "" },
  { "name": "Jurassic World Evolution 2: Dominion Bundle", "price": "12.48", "flag": "🇦🇷", "date": "16.05", "status": "" },
  { "name": "King's Bounty II - Lord's Edition", "price": "0.81", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "King's Bounty II", "price": "0.48", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Kingdom Come: Deliverance - Royal Edition", "price": "0.68", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Kingdom Come: Deliverance", "price": "0.86", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Kingdom of Arcadia", "price": "0.1", "flag": "🇦🇷", "date": "", "status": "" },
  { "name": "Kona", "price": "0.02", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Kung Fu Fighting", "price": "0.02", "flag": "🇦🇷", "date": "07.03", "status": "" },
  { "name": "LEGO® Harry Potter™ Collection", "price": "0.27", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "LEGO® Marvel Collection", "price": "1.35", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "LEGO® Star Wars™: The Skywalker Saga", "price": "4.8", "flag": "🇦🇷", "date": "01.05", "status": "" },
  { "name": "Lab Crisis (for Windows 10)", "price": "0.06", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Lab Crisis", "price": "0.06", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Lara Croft and the Temple of Osiris", "price": "0.61", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "League of Enthusiastic Losers", "price": "0.09", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Let's Build a Zoo & Dinosaur DLC Bundle", "price": "0.37", "flag": "🇦🇷", "date": "01.04", "status": "" },
  { "name": "Let's Build a Zoo: Aquarium Odyssey Bundle", "price": "0.37", "flag": "🇦🇷", "date": "01.10", "status": "" },
  { "name": "Let's Build a Zoo: Ultimate Bundle", "price": "0.46", "flag": "🇦🇷", "date": "01.10", "status": "" },
  { "name": "Let's Sing 2023 Platinum Edition", "price": "10.8", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Let's Sing 2023", "price": "4.35", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Let's Sing 2024 with International Hits", "price": "11.76", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Let's Sing 2024 with International Hits", "price": "12.6", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Let's Sing 2024 with International Hits", "price": "16.21", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Let's Sing ABBA", "price": "7.04", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Let's Sing Country - Platinum Edition", "price": "0.74", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Let's Sing Country", "price": "0.43", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Let's Sing Queen", "price": "0.99", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Light & Dark Bundle", "price": "1.92", "flag": "🇦🇷", "date": "02.11", "status": "" },
  { "name": "Lightyear Frontier (Game Preview) Pre-Order Bundle", "price": "0.39", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Little Bug", "price": "0.07", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Little Mouse's Encyclopedia + Clumsy Rush", "price": "0.06", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Little Mouse's Encyclopedia + Cyber Protocol", "price": "0.04", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Little Mouse's Encyclopedia", "price": "0.04", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Livelock", "price": "0.03", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Lonely Mountains: Downhill - Eldfjall Island", "price": "0.32", "flag": "🇦🇷", "date": "01.11", "status": "" },
  { "name": "Loop8: Summer of Gods", "price": "3.26", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Loop8: Summer of Gods", "price": "8.32", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "Lost Judgment Digital Deluxe Edition", "price": "5.0", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "Lost in Random™", "price": "0.22", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Luxury Garden Bundle", "price": "0.82", "flag": "🇦🇷", "date": "01.01", "status": "" },
  { "name": "MLB® The Show™ 23 Digital Deluxe Edition - Xbox One and Xbox Series X|S", "price": "19.2", "flag": "🇦🇷", "date": "01.04", "status": "" },
  { "name": "MLB® The Show™ 23 Xbox One", "price": "9.79", "flag": "🇦🇷", "date": "01.04", "status": "" },
  { "name": "MLB® The Show™ 23 Xbox Series X|S", "price": "11.98", "flag": "🇦🇷", "date": "01.04", "status": "" },
  { "name": "MXGP 2021 - The Official Motocross Videogame - Xbox Series X|S", "price": "1.98", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "MXGP 2021 - The Official Motocross Videogame", "price": "1.98", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "MY HERO ONE'S JUSTICE 2 Deluxe Edition", "price": "5.04", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Madden NFL 23 Xbox One", "price": "6.14", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "Madden NFL 23 Xbox Series X|S", "price": "7.2", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "Madden NFL 24 Deluxe Edition Xbox Series X|S & Xbox One", "price": "19.2", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Madden NFL 24", "price": "13.44", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Marvel's Guardians of the Galaxy", "price": "1.65", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Mass Effect™ Legendary Edition", "price": "4.48", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Mato Anomalies Digital Deluxe Edition", "price": "2.02", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Mato Anomalies", "price": "2.22", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "MechWarrior 5: Mercenaries - JumpShip Edition", "price": "0.82", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Metro 2033 Redux", "price": "0.28", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Metro Exodus Gold Edition", "price": "1.12", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Metro Exodus", "price": "0.9", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Metro Redux Bundle", "price": "0.49", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Metro Saga Bundle", "price": "0.82", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Metro: Last Light Redux", "price": "0.37", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.0", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.0", "flag": "🇹🇷", "date": "01.12", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.0", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.0", "flag": "🇹🇷", "date": "01.12", "status": "" },
  { "name": "Middle-earth™: Shadow of Mordor™ - Game of the Year Edition", "price": "0.3", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Mighty No. 9", "price": "0.04", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle - Windows 10", "price": "1.62", "flag": "🇹🇷", "date": "28.07", "status": "" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle", "price": "1.62", "flag": "🇹🇷", "date": "28.07", "status": "" },
  { "name": "Monster Energy Supercross - The Official Videogame 6", "price": "6.0", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Monster Viator", "price": "0.13", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Moonlighter: Complete Edition", "price": "0.33", "flag": "🇦🇷", "date": "01.12", "status": "" },
  { "name": "Mortal Kombat 1", "price": "23.76", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Mortal Kombat 11 Ultimate + Injustice 2 Leg. Edition Bundle", "price": "21.99", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Mortal Kombat 11 Ultimate", "price": "10.21", "flag": "🇹🇷", "date": "16.06", "status": "" },
  { "name": "MotoGP™23", "price": "5.94", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "MudRunner", "price": "0.66", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "My Friend Peppa Pig - Complete Edition", "price": "5.28", "flag": "🇦🇷", "date": "16.07", "status": "" },
  { "name": "My Time at Portia Deluxe Edition", "price": "1.34", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "NARUTO SHIPPUDEN™: Ultimate Ninja® STORM 2", "price": "0.15", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "NARUTO SHIPPUDEN™: Ultimate Ninja® STORM 3 Full Burst", "price": "0.15", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "NARUTO SHIPPUDEN™: Ultimate Ninja® STORM 4 ROAD TO BORUTO", "price": "0.83", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "NARUTO SHIPPUDEN™: Ultimate Ninja® STORM 4", "price": "0.98", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "NARUTO X BORUTO Ultimate Ninja STORM CONNECTIONS Deluxe Edition", "price": "35.82", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "NARUTO™: Ultimate Ninja® STORM", "price": "0.15", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "NBA 2K24 Baller Edition", "price": "13.99", "flag": "🇹🇷", "date": "06.03", "status": "" },
  { "name": "NHL® 24 X-Factor Edition Xbox One & Xbox Series X|S", "price": "25.6", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "NHL® 24 Xbox One", "price": "15.36", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "NHL® 24 Xbox Series X|S", "price": "17.92", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Necromunda: Underhive Wars - Gold Edition", "price": "3.46", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Need for Speed Rivals", "price": "0.07", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Need for Speed™ Heat Deluxe Edition", "price": "0.18", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Need for Speed™ Heat", "price": "0.15", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Need for Speed™ Hot Pursuit Remastered", "price": "0.45", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Need for Speed™ Payback - Deluxe Edition", "price": "0.2", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Need for Speed™ Payback", "price": "0.14", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Need for Speed™ Unbound Palace Edition", "price": "1.89", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Need for Speed™ Unbound", "price": "1.62", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Need for Speed™", "price": "0.09", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Neon Abyss Deluxe Edition", "price": "0.38", "flag": "🇦🇷", "date": "16.07", "status": "" },
  { "name": "Nexoria: Dungeon Rogue Heroes", "price": "0.03", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Ni no Kuni Wrath of the White Witch™ Remastered", "price": "2.3", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Nickelodeon All-Star Brawl 2 Deluxe Edition", "price": "10.2", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Nickelodeon All-Star Brawl 2 Ultimate Edition", "price": "11.4", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Nickelodeon All-Star Brawl 2", "price": "7.8", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "NieR Replicant ver.1.22474487139...", "price": "1.92", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "NieR:Automata BECOME AS GODS Edition", "price": "0.78", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "NieR:Automata™ BECOME AS GODS Edition", "price": "0.78", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.04", "flag": "🇦🇷", "date": "31.05", "status": "" },
  { "name": "Nirvana: Deluxe Edition", "price": "0.04", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "No Man's Sky", "price": "2.72", "flag": "🇹🇷", "date": "28.02", "status": "" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "1.63", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "1.66", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "No More Heroes 3 Xbox", "price": "1.36", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "No More Heroes 3 Xbox", "price": "1.44", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Nordic Adventure Bundle", "price": "1.98", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "ONE PIECE BURNING BLOOD - Gold Edition", "price": "0.9", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "ONE PIECE ODYSSEY Deluxe Edition", "price": "4.18", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "ONE PIECE World Seeker Deluxe Edition", "price": "1.63", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "ONE PUNCH MAN: A HERO NOBODY KNOWS Deluxe Edition", "price": "0.85", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Obliteracers", "price": "0.02", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "OmegaBot", "price": "0.11", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Outcast - A New Beginning", "price": "29.58", "flag": "🇦🇷", "date": "15.03", "status": "" },
  { "name": "Outward: Definitive Edition", "price": "2.23", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Outward: The Adventurer Bundle", "price": "0.73", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Overcooked! 2 - Gourmet Edition", "price": "0.54", "flag": "🇦🇷", "date": "16.12", "status": "" },
  { "name": "Overpass 2", "price": "4.2", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "PAYDAY 2 - CRIMEWAVE EDITION - THE BIG SCORE Game Bundle", "price": "0.48", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Pang Adventures", "price": "0.02", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Pathfinder: Kingmaker - Definitive Edition", "price": "0.32", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Pecaminosa - A Deadly Hand", "price": "0.14", "flag": "🇦🇷", "date": "28.02", "status": "" },
  { "name": "Persona 3 Portable & Persona 4 Golden Bundle", "price": "12.48", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "Pets Bundle", "price": "0.62", "flag": "🇦🇷", "date": "01.01", "status": "" },
  { "name": "Phoenix Point: Behemoth Edition", "price": "0.41", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Plants vs. Zombies Garden Warfare", "price": "0.09", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Plants vs. Zombies: Battle for Neighborville™ Deluxe Edition", "price": "0.55", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Plants vs. Zombies: Battle for Neighborville™", "price": "0.43", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Plants vs. Zombies™ Garden Warfare 2", "price": "0.09", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Prey®: Digital Deluxe Edition", "price": "7.3", "flag": "🇹🇷", "date": "12.03", "status": "" },
  { "name": "Prototype® Biohazard Bundle", "price": "0.29", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Prototype®2", "price": "0.22", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Puyo Puyo Champions", "price": "0.41", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "RAGE 2: Deluxe Edition", "price": "11.52", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "RESIDENT EVIL 2 Deluxe Edition", "price": "25.6", "flag": "🇹🇷", "date": "16.09", "status": "" },
  { "name": "RIDE 5 - Special Edition", "price": "18.0", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "RIDE 5", "price": "12.0", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Rabio", "price": "0.05", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Railway Empire 2 - Digital Deluxe Edition", "price": "0.82", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "ReCore", "price": "2.4", "flag": "🇦🇷", "date": "", "status": "" },
  { "name": "ReactorX (for Windows 10)", "price": "0.04", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "ReactorX 2", "price": "0.07", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "ReactorX", "price": "0.04", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Redfall Bite Back Edition", "price": "40.96", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Regular Moonstone Pack -- 2,500", "price": "1.73", "flag": "🇦🇷", "date": "01.09", "status": "" },
  { "name": "Relicta", "price": "0.1", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Remnant II - Deluxe Edition", "price": "5.28", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Remnant II - Ultimate Edition", "price": "6.72", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Remnant: From the Ashes - Complete Edition", "price": "0.54", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Remnant: From the Ashes", "price": "0.4", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Retrace: Memories of Death", "price": "0.14", "flag": "🇦🇷", "date": "", "status": "" },
  { "name": "Rise of the Tomb Raider: 20 Year Celebration", "price": "4.9", "flag": "🇦🇷", "date": "01.12", "status": "" },
  { "name": "RoboCop: Rogue City - Alex Murphy Edition", "price": "8.15", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Rock 'N Racing Grand Prix", "price": "0.14", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Rune Factory 4 Special", "price": "0.72", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "SBK™22", "price": "1.62", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "SCARLET NEXUS Deluxe Edition", "price": "0.96", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "1.34", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "2.05", "flag": "🇦🇷", "date": "01.01", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "1.11", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "1.54", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "STAR WARS Jedi: Survivor™ Deluxe Edition", "price": "27.2", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "STAR WARS Jedi: Survivor™", "price": "22.4", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "STAR WARS™ Battlefront™ II", "price": "0.27", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "STAR WARS™ Battlefront™ II: Celebration Edition", "price": "0.54", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "STAR WARS™ Battlefront™ Ultimate Edition", "price": "0.15", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "STAR WARS™: Battlefront Classic Collection", "price": "0.26", "flag": "🇦🇷", "date": "14.03", "status": "" },
  { "name": "STAR WARS™: Squadrons", "price": "0.15", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "STORY OF SEASONS: A Wonderful Life", "price": "11.52", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "STORY OF SEASONS: A Wonderful Life", "price": "4.9", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "STORY OF SEASONS: Friends of Mineral Town - Digital Edition", "price": "0.21", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "SWORD ART ONLINE Alicization Lycoris", "price": "0.36", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "SWORD ART ONLINE Last Recollection Deluxe Edition", "price": "12.01", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "SWORD ART ONLINE: FATAL BULLET", "price": "0.27", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Saints Row Gold Edition", "price": "14.39", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Saints Row IV: Re-Elected & Gat out of Hell", "price": "0.09", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Saints Row IV: Re-Elected", "price": "0.05", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Saints Row The Third Remastered", "price": "0.38", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Saints Row", "price": "7.19", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Saints Row: Gat out of Hell", "price": "0.04", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Scars Above", "price": "1.01", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Seek Hearts", "price": "0.13", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Sekiro™: Shadows Die Twice - GOTY Edition", "price": "9.06", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Session: Skate Sim", "price": "0.34", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Shadowblade Odyssey", "price": "0.02", "flag": "🇦🇷", "date": "02.03", "status": "" },
  { "name": "Shenmue I & II", "price": "0.11", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Shiro", "price": "0.05", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Shredders - 540INDY Edition", "price": "0.49", "flag": "🇦🇷", "date": "16.03", "status": "" },
  { "name": "Sid Meier’s Civilization® VI Anthology", "price": "16.61", "flag": "🇹🇷", "date": "16.03", "status": "" },
  { "name": "Sid Meier’s Civilization® VI Platinum Edition", "price": "11.24", "flag": "🇹🇷", "date": "16.03", "status": "" },
  { "name": "Silver Nornir", "price": "0.13", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Skate 3", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Skatemasta Tcheco", "price": "0.08", "flag": "🇦🇷", "date": "", "status": "" },
  { "name": "Skautfold: Usurper", "price": "0.13", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Skyrim Anniversary Edition + Fallout 4 G.O.T.Y Bundle", "price": "20.48", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Small Moonstone Pack -- 1,200", "price": "0.86", "flag": "🇦🇷", "date": "01.09", "status": "" },
  { "name": "Smalland: Survive the Wilds", "price": "0.51", "flag": "🇦🇷", "date": "08.03", "status": "" },
  { "name": "Sniper Elite 5 Complete Edition", "price": "1.51", "flag": "🇦🇷", "date": "01.05", "status": "" },
  { "name": "Sniper Elite 5 Deluxe Edition", "price": "7.68", "flag": "🇦🇷", "date": "01.05", "status": "" },
  { "name": "SnowRunner - 1-Anniversary Edition", "price": "7.68", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Sparkle Bundle", "price": "0.15", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "SteamWorld Build & Dig Bundle", "price": "2.36", "flag": "🇦🇷", "date": "29.02", "status": "" },
  { "name": "Steelrising - Standard Edition", "price": "1.87", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Stellaris: Console Edition - Deluxe Edition", "price": "0.53", "flag": "🇦🇷", "date": "16.10", "status": "" },
  { "name": "Street Fighter™ 6 Deluxe Edition", "price": "26.38", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Street Fighter™ 6 Ultimate Edition", "price": "33.25", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Street Fighter™ 6", "price": "18.2", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Streets of Rage 4", "price": "0.22", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Strong Moon", "price": "0.13", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Sugar Tanks", "price": "0.12", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Sunset Overdrive Deluxe Edition", "price": "1.78", "flag": "🇹🇷", "date": "01.06", "status": "" },
  { "name": "Super Impossible Road", "price": "0.17", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Super Mega Baseball™ 4", "price": "12.8", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "THE KING OF FIGHTERS XV Deluxe Edition", "price": "5.91", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "THE KING OF FIGHTERS XV Standard Edition", "price": "1.74", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "TT Isle of Man: Ride on the Edge 3", "price": "7.14", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Taimumari: Complete Edition", "price": "0.22", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Tales from the Borderlands", "price": "1.47", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Tales of Arise - Beyond The Dawn Ultimate Edition", "price": "46.05", "flag": "🇹🇷", "date": "16.02", "status": "" },
  { "name": "Tales of Arise - Beyond the Dawn Deluxe Edition", "price": "38.37", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "Tales of Arise - Beyond the Dawn Edition", "price": "28.13", "flag": "🇹🇷", "date": "16.02", "status": "" },
  { "name": "Tales of Kenzera™: ZAU Standard Edition", "price": "7.56", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Tales of Vesperia™: Definitive Edition", "price": "0.38", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Teenage Mutant Ninja Turtles: Shredder's Revenge - Dimension Shellshock", "price": "0.41", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Teenage Mutant Ninja Turtles: Shredder's Revenge", "price": "0.3", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Tennis World Tour 2 - Complete Edition Xbox Series X|S", "price": "0.17", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Tennis World Tour 2", "price": "0.72", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Terraformers + Tin Can - To infinity, and beyond Complete bundle!", "price": "2.52", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "The Bard's Tale Trilogy", "price": "0.8", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "The Chant", "price": "2.4", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "The Church in the Darkness", "price": "0.03", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "The Elder Scrolls Online Collection: Gold Road", "price": "25.92", "flag": "🇦🇷", "date": "18.01", "status": "" },
  { "name": "The Elder Scrolls Online Collection: Necrom", "price": "8.32", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "The Elder Scrolls Online Deluxe Collection: Gold Road", "price": "33.79", "flag": "🇦🇷", "date": "18.01", "status": "" },
  { "name": "The Elder Scrolls Online Deluxe Collection: Necrom", "price": "12.59", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "The Elder Scrolls V: Skyrim Anniversary Edition", "price": "12.29", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "The Escapists: Supermax Edition", "price": "0.3", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "The Evil Within Digital Bundle", "price": "2.59", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "The Incredible Adventures of Van Helsing: Complete Trilogy", "price": "0.12", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "The Jackbox Party Quadpack", "price": "0.67", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "The Lamplighters League - Deluxe Edition", "price": "0.75", "flag": "🇦🇷", "date": "01.04", "status": "" },
  { "name": "The Last Campfire", "price": "0.05", "flag": "🇦🇷", "date": "28.02", "status": "" },
  { "name": "The Last Oricru", "price": "1.68", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "The Lord of the Rings: Gollum™ - Precious Edition", "price": "7.63", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "The Oregon Trail", "price": "4.02", "flag": "🇦🇷", "date": "02.03", "status": "" },
  { "name": "The Outer Worlds: Board-Approved Bundle", "price": "13.8", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "The Surge - Augmented Edition", "price": "1.3", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "The Surge 2 - Premium Edition", "price": "2.08", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "The Surge 2 - Windows 10", "price": "0.39", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "The Surge 2", "price": "0.75", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "The Walking Dead: A New Frontier", "price": "0.21", "flag": "🇦🇷", "date": "01.11", "status": "" },
  { "name": "The Walking Dead: Michonne", "price": "0.07", "flag": "🇦🇷", "date": "01.11", "status": "" },
  { "name": "The Wild Eight", "price": "0.05", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "This War of Mine - Complete Edition", "price": "0.37", "flag": "🇦🇷", "date": "16.05", "status": "" },
  { "name": "This War of Mine: The Little Ones", "price": "0.04", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Thunder Ray Origins", "price": "1.5", "flag": "🇹🇷", "date": "07.03", "status": "" },
  { "name": "Titanfall® 2", "price": "0.12", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Titanfall® 2: Ultimate Edition", "price": "0.14", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "To Leave", "price": "0.1", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Gold Edition", "price": "3.84", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Ultimate Edition", "price": "0.99", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint", "price": "1.92", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Tom Clancy's Rainbow Six® Extraction United Bundle", "price": "5.28", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Tom Clancy's Rainbow Six® Siege Operator Edition", "price": "8.64", "flag": "🇦🇷", "date": "16.06", "status": "" },
  { "name": "Tom Clancy's Rainbow Six® Siege Ultimate Edition", "price": "11.52", "flag": "🇦🇷", "date": "12.03", "status": "" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Ultimate Edition", "price": "4.56", "flag": "🇦🇷", "date": "01.08", "status": "" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Year 2 Gold Edition", "price": "1.92", "flag": "🇦🇷", "date": "01.08", "status": "" },
  { "name": "Tomb Raider: Definitive Survivor Trilogy", "price": "3.58", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Tony Hawk's™ Pro Skater™ 1 + 2 - Cross-Gen Deluxe Bundle", "price": "1.08", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Torchlight II", "price": "0.16", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Torchlight III", "price": "0.26", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Totally Reliable Delivery Service Deluxe Edition", "price": "0.33", "flag": "🇦🇷", "date": "01.12", "status": "" },
  { "name": "Trailmakers - Space Upgrade", "price": "0.46", "flag": "🇦🇷", "date": "01.02", "status": "" },
  { "name": "Trailmakers Deluxe Edition", "price": "0.52", "flag": "🇦🇷", "date": "01.02", "status": "" },
  { "name": "Train Sim World® 4: Austrian Regional Edition", "price": "4.19", "flag": "🇹🇷", "date": "01.08", "status": "" },
  { "name": "Train Sim World® 4: Deluxe Edition", "price": "13.44", "flag": "🇦🇷", "date": "01.08", "status": "" },
  { "name": "Train Sim World® 4: Flying Scotsman Centenary Edition", "price": "6.24", "flag": "🇦🇷", "date": "01.08", "status": "" },
  { "name": "Train Sim World® 4: German Regional Edition", "price": "4.19", "flag": "🇹🇷", "date": "01.08", "status": "" },
  { "name": "Train Sim World® 4: Special Edition", "price": "20.16", "flag": "🇦🇷", "date": "01.08", "status": "" },
  { "name": "Train Sim World® 4: UK Regional Edition", "price": "4.19", "flag": "🇹🇷", "date": "01.08", "status": "" },
  { "name": "Train Sim World® 4: USA Regional Edition", "price": "4.19", "flag": "🇹🇷", "date": "01.08", "status": "" },
  { "name": "Tram Simulator Urban Transit", "price": "1.51", "flag": "🇦🇷", "date": "21.03", "status": "" },
  { "name": "Transport Fever 2: Console Edition - Deluxe", "price": "5.04", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Trash is Fun (Windows)", "price": "0.07", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Trash is Fun", "price": "0.07", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Tunche", "price": "0.14", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Turnip Boy Robs a Bank Pre-Release", "price": "0.23", "flag": "🇦🇷", "date": "17.04", "status": "" },
  { "name": "Turret Rampage", "price": "1.92", "flag": "🇦🇷", "date": "", "status": "" },
  { "name": "Two Hundred Ways", "price": "0.77", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "UFC® 5 Deluxe Edition", "price": "12.67", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "UFC® 5", "price": "8.64", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Ultra Foodmess Deluxe", "price": "0.06", "flag": "🇦🇷", "date": "28.02", "status": "" },
  { "name": "Unichrome: A 1-bit Unicorn Adventure", "price": "0.06", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "0.16", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Valkyria Chronicles 4 DLC Bundle", "price": "1.03", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "Valkyria Chronicles 4", "price": "0.76", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "Vampire: The Masquerade - Swansong PRIMOGEN EDITION", "price": "1.56", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Vampyr", "price": "1.22", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Vermintide - Digital Value Pack", "price": "0.48", "flag": "🇦🇷", "date": "07.03", "status": "" },
  { "name": "WARTILE", "price": "0.03", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "WILD HEARTS™ Karakuri Edition", "price": "27.2", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "WILD HEARTS™ Standard Edition", "price": "22.4", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "WRC 2023", "price": "16.32", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "0.76", "flag": "🇦🇷", "date": "31.08", "status": "" },
  { "name": "WRC Generations - The FIA WRC Official Game", "price": "2.4", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Warhammer 40,000: Boltgun", "price": "8.58", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Warhammer 40,000: Darktide - Imperial Edition", "price": "4.8", "flag": "🇦🇷", "date": "01.10", "status": "" },
  { "name": "Warhammer 40,000: Inquisitor - Martyr Ultimate Edition", "price": "0.26", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Warstride Challenges", "price": "8.46", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Wasteland 3 (PC) Colorado Collection", "price": "1.73", "flag": "🇦🇷", "date": "01.10", "status": "" },
  { "name": "Wasteland 3 Colorado Collection", "price": "11.24", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Wasteland 3", "price": "2.07", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Watch Dogs®2 - Deluxe Edition", "price": "3.26", "flag": "🇦🇷", "date": "16.07", "status": "" },
  { "name": "Watch Dogs®2 - Gold Edition", "price": "3.84", "flag": "🇦🇷", "date": "16.07", "status": "" },
  { "name": "We Happy Few Digital Deluxe", "price": "1.63", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Werewolf: The Apocalypse - Earthblood Xbox One", "price": "0.41", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Werewolf: The Apocalypse - Earthblood Xbox Series X|S", "price": "0.41", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Windbound", "price": "0.19", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Windjammers 2", "price": "0.2", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Wired Italian Adventure Bundle", "price": "0.41", "flag": "🇦🇷", "date": "01.01", "status": "" },
  { "name": "Wolfenstein: Alt History Collection", "price": "12.8", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Wolfenstein: Youngblood Deluxe Edition", "price": "5.6", "flag": "🇹🇷", "date": "18.02", "status": "" },
  { "name": "Wolfenstein® II: The New Colossus™ Digital Deluxe Edition", "price": "7.68", "flag": "🇹🇷", "date": "13.06", "status": "" },
  { "name": "Wolfenstein®: The Two-Pack", "price": "4.06", "flag": "🇹🇷", "date": "27.02", "status": "" },
  { "name": "Wonder Boy: The Dragon's Trap", "price": "0.1", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "World War Z: Aftermath - Deluxe Edition", "price": "6.14", "flag": "🇦🇷", "date": "01.12", "status": "" },
  { "name": "World of Van Helsing: Deathtrap", "price": "0.04", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Yakuza: Like a Dragon Hero Edition", "price": "3.32", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "Young Souls", "price": "0.22", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Yuko and the Akuma Menace", "price": "0.14", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Yum Yum Cookstar", "price": "0.07", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Zombie Derby 2", "price": "0.06", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Zombie Derby", "price": "0.07", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Zombie Derby: Pixel Survival (Windows)", "price": "0.06", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "Zombie Derby: Pixel Survival", "price": "0.06", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "[PROTOTYPE®]", "price": "0.18", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "sCATch: The Painter Cat", "price": "0.03", "flag": "🇦🇷", "date": "27.02", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Greenhorn Bundle", "price": "0.55", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Master Hunter Bundle", "price": "0.82", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Seasoned Hunter Bundle", "price": "0.69", "flag": "🇦🇷", "date": "01.06", "status": "" }
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
    a = 110
  } else if (percent > 1 && percent <= 5) {
    a = 100
  } else if (percent > 5 && percent <= 10) {

    a = 60
  } else if (percent > 10 && percent <= 15) {

    a = 60
  } else if (percent > 15 && percent <= 20) {

    a = 60
  } else if (percent > 20 && percent <= 25) {

    a = 60
  } else if (percent > 25) {

    a = 50
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



