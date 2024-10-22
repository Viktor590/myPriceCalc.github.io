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
  { "name": "1000 Ancient Coins - Hidden Trove of the Ancients", "price": "1.65", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "11-11 Memories Retold", "price": "0.59", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "150 Ancient Coins - Secret Stash of the Ancients", "price": "0.33", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "2550 Ancient Coins - Royal Treasury of the Ancients", "price": "3.79", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "4250 Ancient Coins - Glittering Tribute of the Ancients", "price": "5.73", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "550 Ancient Coins - Lost Chest of the Ancients", "price": "0.98", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "7 Days to Die - Console Edition (Game Preview)", "price": "0.24", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "88 Heroes", "price": "0.11", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "A Little to the Left: Extra Tidy Bundle", "price": "3.41", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "A Pixel Story", "price": "0.09", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "ASTRONEER: Evolution Edition", "price": "5.12", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "ATOM RPG Supporter Edition", "price": "0.76", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "ATOM RPG: Post-apocalyptic indie game", "price": "0.67", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Ad Infinitum", "price": "5.1", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Age of Empires 25th Anniversary Collection", "price": "7.94", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Age of Empires II: Deluxe Definitive Edition Bundle", "price": "5.12", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Age of Empires: Definitive Collection", "price": "5.73", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Age of Mythology: Retold Premium Edition", "price": "26.24", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Agents of Mayhem - Total Mayhem Bundle", "price": "0.22", "flag": "🇹🇷", "date": "29.10", "status": " GP" },
  { "name": "Aircraft Evolution", "price": "0.34", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Akimbot", "price": "11.8", "flag": "🇨🇱", "date": "28.10", "status": " GP" },
  { "name": "Alfred Hitchcock - Vertigo", "price": "2.61", "flag": "🇮🇳", "date": "01.11", "status": "" },
  { "name": "Alien: Isolation", "price": "2.77", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Aliens: Dark Descent", "price": "8.17", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Aliens: Fireteam Elite", "price": "1.1", "flag": "🇳🇬", "date": "01.11", "status": "" },
  { "name": "Allison's Diary: Rebirth", "price": "0.5", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Alone in the Dark - Digital Deluxe Edition", "price": "33.5", "flag": "🇮🇳", "date": "01.11", "status": "" },
  { "name": "Amelia's Diner", "price": "2.72", "flag": "🇺🇦", "date": "24.10", "status": "" },
  { "name": "Amnesia: Collection", "price": "0.55", "flag": "🇳🇬", "date": "01.11", "status": "" },
  { "name": "Amnesia: Rebirth", "price": "0.82", "flag": "🇪🇬", "date": "01.11", "status": "" },
  { "name": "Amnesia: The Bunker", "price": "0.83", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Ancestors Legacy", "price": "0.58", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Anti Gravity Racing", "price": "4.07", "flag": "🇺🇦", "date": "29.10", "status": "" },
  { "name": "Aquarium Land: Complete Edition", "price": "0.58", "flag": "🇹🇷", "date": "27.10", "status": "" },
  { "name": "Arcade Paradise | High Score Edition", "price": "1.84", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed Antiquity Pack", "price": "46.4", "flag": "🇧🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed Legendary Collection", "price": "84.37", "flag": "🇧🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Bundle: Assassin's Creed® Valhalla, Ass...", "price": "37.36", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey - DELUXE EDITION", "price": "16.35", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey - GOLD EDITION", "price": "18.68", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey - ULTIMATE EDITION", "price": "21.6", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Origins - DELUXE EDITION", "price": "15.76", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Origins - GOLD EDITION", "price": "18.68", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Complete Edition", "price": "23.35", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Deluxe Edition", "price": "18.1", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Ragnarök Edition", "price": "14.01", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Assassin’s Creed® Valhalla + Immortals Fenyx Rising™ Bundle", "price": "58.38", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin’s Creed® Valhalla + Watch Dogs®: Legion Bundle", "price": "26.85", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Astro Flame Starfighter (Xbox Series X|S)", "price": "0.5", "flag": "🇹🇷", "date": "29.10", "status": " GP" },
  { "name": "Attack on Titan 2: Final Battle", "price": "18.96", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Avatar The Last Airbender: Quest for Balance", "price": "11.38", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Awarded Platformer Bundle", "price": "1.16", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "BATTLETECH Mercenary Collection", "price": "5.95", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "BIOHAZARD 7 Gold Edition & VILLAGE Gold Edition バンドル Z Version", "price": "23.83", "flag": "🇯🇵", "date": "01.11", "status": "" },
  { "name": "BIOHAZARD 7 Gold Edition & VILLAGE Gold Edition バンドル", "price": "23.83", "flag": "🇯🇵", "date": "01.11", "status": "" },
  { "name": "BIOHAZARD 7 resident evil Gold Edition グロテスクVer.", "price": "10.58", "flag": "🇯🇵", "date": "01.11", "status": "" },
  { "name": "BIOHAZARD RE:2 Z Version デラックスエディション", "price": "26.45", "flag": "🇯🇵", "date": "01.11", "status": "" },
  { "name": "BIOHAZARD VILLAGE Z version GOLD EDITION", "price": "15.88", "flag": "🇯🇵", "date": "01.11", "status": "" },
  { "name": "BROKEN MIND", "price": "0.5", "flag": "🇹🇷", "date": "29.10", "status": " GP" },
  { "name": "Back 4 Blood: Ultimate Edition", "price": "1.83", "flag": "🇪🇬", "date": "01.11", "status": "" },
  { "name": "Banishers: Ghosts of New Eden", "price": "25.4", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Batman: Arkham Knight Premium Edition", "price": "3.04", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Battlefield™ 1 Revolution", "price": "1.54", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Battlefield™ 2042 Elite Edition Xbox One & Xbox Series X|S", "price": "4.96", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Battlefield™ 2042 Xbox One & Xbox Series X|S", "price": "1.63", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Battlefield™ 2042 Xbox One", "price": "2.04", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Before We Leave", "price": "0.64", "flag": "🇳🇬", "date": "28.10", "status": "" },
  { "name": "Bendy and the Dark Revival", "price": "0.82", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Bendy and the Ink Machine™", "price": "0.53", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Bendy: Studio Collection", "price": "2.41", "flag": "🇪🇬", "date": "01.11", "status": "" },
  { "name": "Between Horizons", "price": "0.99", "flag": "🇹🇷", "date": "29.10", "status": " GP" },
  { "name": "Beyond Good & Evil 20th Anniversary Edition", "price": "11.68", "flag": "🇹🇷", "date": "29.10", "status": " GP" },
  { "name": "Big Buck Hunter Arcade", "price": "0.17", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Big Moonstone Pack -- 5,500", "price": "5.0", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "BioShock: The Collection", "price": "1.39", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Black Mirror", "price": "0.73", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Black Widow: Recharged", "price": "0.53", "flag": "🇳🇬", "date": "01.11", "status": "" },
  { "name": "Blood Knights", "price": "0.18", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Blood Waves", "price": "0.42", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Bloody Zombies", "price": "0.36", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Borderlands 3", "price": "1.34", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Borderlands 3: Super Deluxe Edition", "price": "3.32", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Borderlands Collection: Pandora's Box", "price": "19.7", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Borderlands Legendary Collection", "price": "1.63", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Borderlands: Game of the Year Edition", "price": "1.32", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Boss Rush: Mythology (Xbox Series X|S)", "price": "0.34", "flag": "🇹🇷", "date": "29.10", "status": " GP" },
  { "name": "Bound by Flame", "price": "0.17", "flag": "🇹🇷", "date": "29.10", "status": " GP" },
  { "name": "Bramble: The Mountain King", "price": "1.91", "flag": "🇪🇬", "date": "01.11", "status": "" },
  { "name": "Breakneck City", "price": "1.95", "flag": "🇧🇷", "date": "29.10", "status": " GP" },
  { "name": "Brotherhood United", "price": "1.16", "flag": "🇮🇳", "date": "29.10", "status": "" },
  { "name": "Builder Flipper bundle", "price": "2.8", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Bulletstorm: Full Clip Edition", "price": "0.25", "flag": "🇹🇷", "date": "29.10", "status": " GP" },
  { "name": "CODE VEIN Deluxe Edition", "price": "1.75", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "CONSCRIPT - Deluxe Edition", "price": "2.53", "flag": "🇳🇬", "date": "01.11", "status": "" },
  { "name": "Cafe Owner Simulator", "price": "1.46", "flag": "🇳🇬", "date": "29.10", "status": " GP" },
  { "name": "Cake Bash", "price": "0.77", "flag": "🇳🇬", "date": "29.10", "status": "" },
  { "name": "Call of Cthulhu", "price": "0.81", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Call of the Wild: The Angler™ - Gold Fishing Bundle", "price": "3.3", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "Call of the Wild: The Angler™ - Silver Fishing Bundle", "price": "2.66", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "Call of the Wild: The Angler™ - Ultimate Fishing Bundle", "price": "3.97", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "Car Vouchers (10)", "price": "1.22", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Car Vouchers (24)", "price": "2.44", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Car Vouchers (4)", "price": "0.61", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Card-en-Ciel", "price": "1.87", "flag": "🇹🇷", "date": "23.10", "status": "" },
  { "name": "Carrion", "price": "0.49", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Cassette Beasts: Deluxe Edition", "price": "1.72", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Castlevania Advance Collection", "price": "2.81", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Castlevania Anniversary Collection", "price": "0.71", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Castlevania Dominus Collection", "price": "14.28", "flag": "🇨🇱", "date": "01.11", "status": "" },
  { "name": "Catacomb Master", "price": "0.27", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Caterpillar", "price": "0.18", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Charon's Staircase", "price": "0.33", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Chivalry 2 King's Edition", "price": "7.61", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Chivalry 2 Special Edition", "price": "6.4", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Choo-Choo Charles", "price": "0.82", "flag": "🇹🇷", "date": "27.10", "status": "" },
  { "name": "Cions of Vega", "price": "2.25", "flag": "🇮🇳", "date": "29.10", "status": "" },
  { "name": "Cities: Skylines - Mayor's Edition", "price": "27.98", "flag": "🇧🇷", "date": "01.04", "status": " GP" },
  { "name": "Cities: Skylines - Premium Edition 2", "price": "4.61", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "Clash - Zeno Edition", "price": "7.79", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Conan Exiles - Complete Edition October 2021", "price": "10.51", "flag": "🇹🇷", "date": "01.12", "status": " GP" },
  { "name": "Conan Exiles - Isle of Siptah Edition", "price": "39.39", "flag": "🇲🇽", "date": "01.12", "status": " GP" },
  { "name": "Conan Exiles - Isle of Siptah Edition", "price": "4.67", "flag": "🇹🇷", "date": "01.12", "status": " GP" },
  { "name": "Conan Exiles – Complete Edition", "price": "72.39", "flag": "🇲🇽", "date": "01.12", "status": " GP" },
  { "name": "Conan Exiles – Year 1 DLC Bundle", "price": "2.38", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Conga Master", "price": "0.07", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Cosmic Mirage (Xbox One)", "price": "0.31", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Cosmic Mirage (Xbox One+Xbox Series+Windows)", "price": "0.63", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Creatures of Ava: Deluxe Edition", "price": "15.41", "flag": "🇧🇷", "date": "05.11", "status": " GP" },
  { "name": "Crimson Spires", "price": "3.92", "flag": "🇮🇳", "date": "29.10", "status": " GP" },
  { "name": "Crusader Kings III: Royal Edition", "price": "35.71", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Cult of the Lamb", "price": "1.58", "flag": "🇳🇬", "date": "01.11", "status": "" },
  { "name": "Cursed to Golf", "price": "0.57", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Cyber Edition", "price": "1.72", "flag": "🇳🇬", "date": "29.10", "status": " GP" },
  { "name": "D4: Dark Dreams Don't Die", "price": "0.38", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "DAS WIRED-HORROR-SPIELPAKET", "price": "2.66", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "DE-EXIT - Eternal Matters", "price": "2.92", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "DEAD ISLAND 2 GOLD EDITION", "price": "35.93", "flag": "🇺🇦", "date": "01.11", "status": "" },
  { "name": "DEATHLOOP Deluxe Edition", "price": "36.08", "flag": "🇪🇬", "date": "01.11", "status": "" },
  { "name": "DEATHLOOP", "price": "3.5", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "DESOLATIUM", "price": "0.5", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "DIRT 5 Year One Edition", "price": "5.95", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "DMC4SE Demon Hunter Bundle", "price": "4.85", "flag": "🇭🇺", "date": "01.11", "status": "" },
  { "name": "DOOM 3", "price": "2.96", "flag": "🇪🇬", "date": "01.11", "status": "" },
  { "name": "DOOM 64", "price": "0.17", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "DOOM Eternal Deluxe Edition", "price": "14.01", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "DOOM Eternal Standard Edition", "price": "3.43", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "DOOM Eternal: The Ancient Gods - Part One", "price": "4.96", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "DOOM Eternal: The Ancient Gods - Part Two", "price": "4.96", "flag": "🇹🇷", "date": "17.03", "status": " GP" },
  { "name": "DOOM Eternal: Year One Pass (PC)", "price": "7.49", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "DOOM Eternal: Year One Pass", "price": "7.49", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "DOOM", "price": "0.69", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "DREDGE: Complete Edition", "price": "2.88", "flag": "🇳🇬", "date": "01.11", "status": "" },
  { "name": "DROS", "price": "1.66", "flag": "🇹🇷", "date": "29.10", "status": " GP" },
  { "name": "DUCATI - 90th Anniversary", "price": "0.73", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Dakar Desert Rally", "price": "6.83", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Dark Burial: Enhanced Edition", "price": "0.22", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Darkest Dungeon®: Ancestral Edition", "price": "1.98", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Darksiders III - Blades & Whip Edition", "price": "10.54", "flag": "🇧🇷", "date": "01.11", "status": "" },
  { "name": "Darksiders Warmastered Edition", "price": "1.71", "flag": "🇧🇷", "date": "01.11", "status": "" },
  { "name": "Darkwood", "price": "0.5", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "DayZ", "price": "3.5", "flag": "🇳🇬", "date": "01.11", "status": "" },
  { "name": "Days of Doom", "price": "1.83", "flag": "🇳🇬", "date": "01.11", "status": "" },
  { "name": "Dead Cells: Medley of Pain Bundle", "price": "2.66", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Dead Cells: Return to Castlevania Bundle", "price": "2.07", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Dead Ground", "price": "0.25", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Dead Island 2", "price": "24.97", "flag": "🇮🇳", "date": "01.11", "status": "" },
  { "name": "Dead Island Definitive Collection", "price": "0.19", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Dead Rising 2 Off the Record", "price": "2.82", "flag": "🇧🇷", "date": "01.11", "status": "" },
  { "name": "Dead Rising 2", "price": "2.93", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Dead Rising 3: Apocalypse Edition", "price": "1.21", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Dead Rising 4", "price": "3.5", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Dead Space Digital Deluxe Edition", "price": "19.62", "flag": "🇮🇳", "date": "29.10", "status": "" },
  { "name": "Dead Space", "price": "16.05", "flag": "🇮🇳", "date": "29.10", "status": "" },
  { "name": "Dead by Daylight - Gold Edition", "price": "4.45", "flag": "🇳🇬", "date": "01.11", "status": "" },
  { "name": "Dead by Daylight - Gold Edition", "price": "4.57", "flag": "🇪🇬", "date": "01.11", "status": "" },
  { "name": "Dead by Daylight: Dungeons & Dragons Edition", "price": "5.12", "flag": "🇳🇬", "date": "01.11", "status": "" },
  { "name": "Deep Rock Galactic - Deluxe Edition", "price": "2.66", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "Deep Rock Galactic - Ultimate Edition", "price": "3.3", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "Devil May Cry 5 Deluxe + Vergil", "price": "9.34", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Devil May Cry HD Collection & 4SE Bundle", "price": "8.67", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Diablo® IV - Expansion Bundle", "price": "49.06", "flag": "🇰🇷", "date": "14.11", "status": " GP" },
  { "name": "Diablo® IV - Standard Edition", "price": "32.33", "flag": "🇧🇷", "date": "14.11", "status": " GP" },
  { "name": "Disciples: Liberation Digital Deluxe Edition", "price": "2.23", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Dishonored 2", "price": "4.37", "flag": "🇯🇵", "date": "01.11", "status": "" },
  { "name": "Dishonored® Definitive Edition", "price": "3.64", "flag": "🇯🇵", "date": "01.11", "status": "" },
  { "name": "Dishonored®: Death of the Outsider™ Deluxe Bundle", "price": "11.62", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Dishonored®: Death of the Outsider™", "price": "4.37", "flag": "🇯🇵", "date": "01.11", "status": "" },
  { "name": "Disney Dreamlight Valley – Gold Edition", "price": "5.34", "flag": "🇳🇬", "date": "06.11", "status": "" },
  { "name": "Disney Dreamlight Valley: A Rift in Time", "price": "2.49", "flag": "🇳🇬", "date": "06.11", "status": "" },
  { "name": "Dolmen", "price": "2.91", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Don't Starve Mega Pack 2020", "price": "1.35", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Dragon's Dogma 2 Deluxe Edition", "price": "41.66", "flag": "🇮🇳", "date": "01.11", "status": "" },
  { "name": "DreamWorks All-Star Kart Racing Rally Edition", "price": "5.69", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "DreamWorks Trolls Remix Rescue Deluxe Edition", "price": "5.84", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Duke Nukem 3D: 20th Anniversary World Tour", "price": "0.17", "flag": "🇹🇷", "date": "29.10", "status": " GP" },
  { "name": "Dungeons 4 - Digital Deluxe Edition", "price": "23.35", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Dungeons 4", "price": "19.7", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Dungeons of Shalnor", "price": "0.51", "flag": "🇳🇬", "date": "29.10", "status": " GP" },
  { "name": "Dying Light 2 Stay Human", "price": "12.36", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Dying Light", "price": "1.6", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Dying Light: The Following - Enhanced Edition", "price": "4.77", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "EA SPORTS FC™ 24 Standard Edition Xbox One & Xbox Series X|S", "price": "16.05", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "EA SPORTS™ MVP Bundle (Madden NFL 25 Deluxe Edition & College Football 25 Deluxe Edition)", "price": "95.26", "flag": "🇰🇷", "date": "29.10", "status": "" },
  { "name": "EA SPORTS™ Madden NFL 25 Deluxe Edition Xbox Series X|S & Xbox One", "price": "42.1", "flag": "🇰🇷", "date": "29.10", "status": "" },
  { "name": "EA SPORTS™ Madden NFL 25", "price": "29.73", "flag": "🇮🇳", "date": "29.10", "status": "" },
  { "name": "EA SPORTS™ PGA TOUR™ Deluxe Edition", "price": "10.35", "flag": "🇮🇳", "date": "29.10", "status": "" },
  { "name": "EA SPORTS™ PGA TOUR™", "price": "8.03", "flag": "🇮🇳", "date": "29.10", "status": "" },
  { "name": "Eiyuden Chronicle: Hundred Heroes - Digital Deluxe Edition", "price": "10.17", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Escape Academy Deluxe Edition", "price": "2.31", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Escape Dead Island", "price": "0.22", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Evil Dead: The Game - Game of the Year Edition", "price": "7.59", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Evil Dead: The Game", "price": "5.69", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Evil West", "price": "7.01", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Expeditions: A MudRunner Game - Supreme Edition", "price": "44.37", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "Expeditions: A MudRunner Game - Year 1 Edition", "price": "37.36", "flag": "🇹🇷", "date": "28.10", "status": " GP" },
  { "name": "F1® 23", "price": "37.46", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "F1® 24 Champions Edition", "price": "35.67", "flag": "🇮🇳", "date": "29.10", "status": "" },
  { "name": "F1® 24", "price": "26.75", "flag": "🇮🇳", "date": "29.10", "status": "" },
  { "name": "FAR CRY 4 + FAR CRY PRIMAL BUNDLE", "price": "1.28", "flag": "🇹🇷", "date": "29.10", "status": " GP" },
  { "name": "FATAL FRAME: Maiden of Black Water Digital Deluxe Edition", "price": "11.55", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "FATAL FRAME: Maiden of Black Water", "price": "8.41", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "FATAL FRAME: Mask of the Lunar Eclipse Digital Deluxe Edition", "price": "13.26", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "FOR HONOR – Gold Edition", "price": "23.35", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "FOR HONOR – Ultimate Edition", "price": "37.36", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Fade to Silence", "price": "2.52", "flag": "🇧🇷", "date": "01.11", "status": "" },
  { "name": "Fallout 4 (PC)", "price": "1.38", "flag": "🇹🇷", "date": "30.10", "status": "" },
  { "name": "Fallout 4", "price": "1.38", "flag": "🇹🇷", "date": "30.10", "status": "" },
  { "name": "Fallout 4: Game of the Year Edition (PC)", "price": "4.86", "flag": "🇺🇦", "date": "30.10", "status": "" },
  { "name": "Fallout 4: Game of the Year Edition", "price": "6.66", "flag": "🇹🇷", "date": "30.10", "status": "" },
  { "name": "Fallout 76", "price": "2.55", "flag": "🇹🇷", "date": "30.10", "status": "" },
  { "name": "Fallout 76: Skyline Valley Deluxe Edition", "price": "23.35", "flag": "🇹🇷", "date": "30.10", "status": "" },
  { "name": "Far Cry® 4", "price": "0.82", "flag": "🇹🇷", "date": "29.10", "status": " GP" },
  { "name": "Far Cry® 5 + Far Cry® New Dawn Deluxe Edition Bundle", "price": "18.73", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Far Cry® 5 Gold Edition + Far Cry ® New Dawn Deluxe Editi...", "price": "21.48", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Far Cry® 6 Deluxe Edition", "price": "18.1", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Far Cry® 6 Game of the Year Edition", "price": "22.18", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Far Cry® 6 Gold Edition", "price": "18.68", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Far Cry®5 Gold Edition", "price": "16.35", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Farm Bundle", "price": "2.66", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Farm Pets Bundle", "price": "3.97", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Farming Simulator 22 - Platinum Edition", "price": "5.12", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Farming Simulator 22 - Premium Edition", "price": "6.4", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Fatum Betula", "price": "0.43", "flag": "🇳🇬", "date": "29.10", "status": "" },
  { "name": "Firegirl: Hack 'n Splash Rescue DX", "price": "0.33", "flag": "🇳🇬", "date": "29.10", "status": "" },
  { "name": "Fishing: North Atlantic Enhanced Edition", "price": "1.82", "flag": "🇳🇬", "date": "29.10", "status": " GP" },
  { "name": "Fishing: North Atlantic", "price": "0.79", "flag": "🇳🇬", "date": "29.10", "status": " GP" },
  { "name": "Flailing Limbs Bundle", "price": "1.38", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Flintlock – Deluxe Edition", "price": "17.02", "flag": "🇹🇷", "date": "16.01", "status": " GP" },
  { "name": "Flipping Death", "price": "0.17", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Flockers", "price": "0.55", "flag": "🇹🇷", "date": "28.10", "status": "" },
  { "name": "Forsaken Remastered", "price": "0.51", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Forza Horizon 4 Deluxe Edition", "price": "10.17", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 4 Ultimate Edition", "price": "12.79", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 Deluxe Edition", "price": "10.17", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 PLUS Hot Wheels Bundle", "price": "10.17", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 Premium Add-Ons Bundle", "price": "6.4", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 Premium Edition", "price": "12.79", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport Deluxe Edition", "price": "11.45", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport Premium Add-Ons Bundle", "price": "5.12", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport Premium Edition", "price": "12.79", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport and Forza Horizon 5 Premium Add-Ons Bundle", "price": "10.9", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport and Forza Horizon 5 Premium Editions Bundle", "price": "24.25", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "From Earth to Heaven", "price": "0.35", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "From Space", "price": "0.62", "flag": "🇹🇷", "date": "29.10", "status": " GP" },
  { "name": "Frostpunk: Complete Collection", "price": "2.98", "flag": "🇹🇷", "date": "16.01", "status": " GP" },
  { "name": "Funko Fusion", "price": "5.1", "flag": "🇳🇬", "date": "29.10", "status": " GP" },
  { "name": "G.I. Joe: Operation Blackout - Digital Deluxe", "price": "1.1", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "GROW UP", "price": "0.41", "flag": "🇹🇷", "date": "29.10", "status": " GP" },
  { "name": "GYLT", "price": "1.28", "flag": "🇳🇬", "date": "01.11", "status": "" },
  { "name": "Garden Bundle", "price": "3.51", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Gargoyles Remastered", "price": "0.62", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Gears 5 Game of the Year Edition", "price": "1.37", "flag": "🇳🇬", "date": "01.11", "status": "" },
  { "name": "Gears 5", "price": "0.96", "flag": "🇳🇬", "date": "01.11", "status": "" },
  { "name": "Gears Tactics", "price": "0.91", "flag": "🇳🇬", "date": "01.11", "status": "" },
  { "name": "Gears Triple Bundle", "price": "1.81", "flag": "🇳🇬", "date": "01.11", "status": "" },
  { "name": "Gears of War 4 and Halo 5: Guardians Bundle", "price": "2.34", "flag": "🇹🇷", "date": "31.01", "status": " GP" },
  { "name": "Gears of War 4", "price": "0.36", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Gears of War Ultimate Edition Deluxe Version", "price": "1.17", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Generation Zero® - Ultimate Bundle", "price": "5.95", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Get Even", "price": "0.39", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Get Packed", "price": "0.33", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Ghostbusters: Spirits Unleashed", "price": "1.07", "flag": "🇹🇷", "date": "30.10", "status": "" },
  { "name": "Ghostwire: Tokyo Deluxe Edition", "price": "18.1", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Ghostwire: Tokyo", "price": "4.38", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Glam's Incredible Run: Escape from Dukha", "price": "0.08", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Goat Simulator 3 - Multiversal Traveler's Edition", "price": "2.66", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Goat Simulator: The GOATY", "price": "1.79", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "Goat Simulator: Waste Of Space Bundle", "price": "0.99", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "Godfall Ultimate Edition", "price": "1.83", "flag": "🇳🇬", "date": "29.10", "status": " GP" },
  { "name": "Golf With Your Friends - Starter Edition", "price": "17.54", "flag": "🇰🇷", "date": "28.10", "status": " GP" },
  { "name": "Golf With Your Friends - Ultimate Edition", "price": "31.5", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Gord - Deluxe Edition", "price": "6.53", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Gotham Knights: Deluxe", "price": "3.29", "flag": "🇪🇬", "date": "01.11", "status": "" },
  { "name": "Grand Theft Auto V", "price": "6.41", "flag": "🇹🇷", "date": "29.10", "status": " GP" },
  { "name": "Grand Theft Auto V: Premium Edition", "price": "2.41", "flag": "🇹🇷", "date": "29.10", "status": " GP" },
  { "name": "Grand Theft Auto: The Trilogy – The Definitive Edition", "price": "7.72", "flag": "🇹🇷", "date": "29.10", "status": " GP" },
  { "name": "GreedFall - Windows 10", "price": "0.89", "flag": "🇳🇬", "date": "29.10", "status": "" },
  { "name": "GreedFall", "price": "1.6", "flag": "🇹🇷", "date": "29.10", "status": " GP" },
  { "name": "Greyhill Incident - Abducted Edition", "price": "1.49", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Gungrave G.O.R.E", "price": "1.36", "flag": "🇪🇬", "date": "01.11", "status": "" },
  { "name": "HITMAN™ 2", "price": "7.2", "flag": "🇹🇷", "date": "04.02", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ 2 - Turbocharged - Deluxe Edition", "price": "8.47", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ 2 - Turbocharged - Legendary Edition", "price": "10.9", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "HUMANKIND™ - Heritage Edition", "price": "7.61", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Halo 5: Guardians – Digital Deluxe Edition", "price": "19.27", "flag": "🇹🇷", "date": "31.05", "status": " GP" },
  { "name": "Halo Wars 2: Complete Edition", "price": "23.35", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Haunted House", "price": "1.34", "flag": "🇳🇬", "date": "01.11", "status": "" },
  { "name": "Headbangers: Rhythm Royale - Digital Deluxe Edition", "price": "3.84", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hell Let Loose - Deluxe Edition", "price": "7.61", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hell Let Loose - Ultimate Edition", "price": "8.89", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hellblade: Senua's Sacrifice", "price": "0.77", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Hello Neighbor 2 Deluxe Edition", "price": "7.61", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hi-Fi RUSH Deluxe Edition", "price": "14.01", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Hidden Cats in Berlin", "price": "0.25", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Hogwarts Legacy: Digital Deluxe Edition", "price": "9.62", "flag": "🇹🇷", "date": "31.10", "status": "" },
  { "name": "Homefront®: The Revolution 'Freedom Fighter' Bundle", "price": "0.29", "flag": "🇹🇷", "date": "29.10", "status": " GP" },
  { "name": "Hotel Transylvania 3: Monsters Overboard", "price": "4.86", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Hotel Transylvania: Scary-Tale Adventures", "price": "3.09", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Huge Moonstone Pack -- 14,500", "price": "12.73", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hungry Shark® World", "price": "0.24", "flag": "🇹🇷", "date": "29.10", "status": " GP" },
  { "name": "Hunt: Showdown 1896 - Deluxe Edition", "price": "28.98", "flag": "🇮🇳", "date": "01.11", "status": "" },
  { "name": "Hunt: Showdown 1896", "price": "14.49", "flag": "🇮🇳", "date": "01.11", "status": "" },
  { "name": "Hypnospace Outlaw & Slayers X: Terminal Aftermath: Vengance of the Slayer Bundle", "price": "2.22", "flag": "🇹 🇷", "date": "01.06", "status": " GP" },
  { "name": "I, AI", "price": "0.42", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "INSIDE & LIMBO Bundle", "price": "3.29", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Immortal Realms: Vampire Wars", "price": "3.37", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Immortals Fenyx Rising™ Gold Edition", "price": "33.86", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Immortals of Aveum™ Deluxe Edition", "price": "29.43", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "Infected Cowboys Bundle", "price": "16.14", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Injustice™ 2 - Legendary Edition", "price": "4.96", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Inscryption", "price": "1.02", "flag": "🇳🇬", "date": "01.11", "status": "" },
  { "name": "Insurgency: Sandstorm - Deluxe Edition", "price": "21.74", "flag": "🇯🇵", "date": "16.01", "status": " GP" },
  { "name": "Insurgency: Sandstorm - Gold Edition", "price": "37.36", "flag": "🇹🇷", "date": "28.10", "status": " GP" },
  { "name": "Insurgency: Sandstorm - Ultimate Edition", "price": "44.37", "flag": "🇹🇷", "date": "28.10", "status": " GP" },
  { "name": "Island Farmer", "price": "0.22", "flag": "🇳🇬", "date": "29.10", "status": "" },
  { "name": "Islanders", "price": "0.14", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Isonzo: Collector's Edition", "price": "5.73", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Isonzo: Deluxe Edition", "price": "5.12", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Isonzo: Ultimate Edition", "price": "21.47", "flag": "🇯🇵", "date": "29.10", "status": " GP" },
  { "name": "It Could Happen To You", "price": "2.42", "flag": "🇮🇳", "date": "02.11", "status": "" },
  { "name": "It Takes Two - Digital Version", "price": "9.97", "flag": "🇯🇵", "date": "29.10", "status": "" },
  { "name": "Jack Dragon and the Stone of Peace", "price": "0.16", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Jubilee", "price": "0.25", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Jujutsu Kaisen Cursed Clash Ultimate Edition", "price": "30.63", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Jump Stars", "price": "0.07", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Jurassic World Evolution 2: Deluxe Edition", "price": "10.19", "flag": "🇪🇬", "date": "16.05", "status": " GP" },
  { "name": "Jurassic World Evolution 2: Dominion Bundle", "price": "11.67", "flag": "🇪🇬", "date": "14.11", "status": " GP" },
  { "name": "Just Dance 2018", "price": "0.0", "flag": "🇵🇭", "date": "", "status": "" },
  { "name": "Kaiju Wars + Legend of Keepers - Monsters & Demons Deluxe Bundle", "price": "6.74", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Killer Frequency", "price": "1.58", "flag": "🇳🇬", "date": "01.11", "status": "" },
  { "name": "Killer Klowns From Outer Space: Digital Deluxe Edition", "price": "3.47", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Killing Floor 2 - Ultimate Edition", "price": "4.56", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Killing Floor 2", "price": "0.75", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Killing Time: Resurrected", "price": "1.66", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Kingdom Come: Deliverance - Royal Edition", "price": "2.27", "flag": "🇧🇷", "date": "29.10", "status": " GP" },
  { "name": "Kunitsu-Gami: Path of the Goddess", "price": "26.45", "flag": "🇯🇵", "date": "01.11", "status": "" },
  { "name": "LEGO® 2K Drive Awesome Edition", "price": "37.63", "flag": "🇰🇷", "date": "14.11", "status": " GP" },
  { "name": "LEGO® 2K Drive Awesome Rivals Edition", "price": "52.52", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "LEGO® Bricktales", "price": "1.27", "flag": "🇳🇬", "date": "29.10", "status": "" },
  { "name": "LEGO® Star Wars™: The Skywalker Saga Galactic Edition", "price": "11.67", "flag": "🇪🇬", "date": "01.05", "status": " GP" },
  { "name": "LEGO® Star Wars™: The Skywalker Saga", "price": "8.79", "flag": "🇪🇬", "date": "14.11", "status": " GP" },
  { "name": "LEGO® Star Wars™:The Skywalker Saga Deluxe Edition", "price": "10.19", "flag": "🇪🇬", "date": "01.05", "status": " GP" },
  { "name": "LOLLIPOP CHAINSAW RePOP", "price": "27.47", "flag": "🇹🇼", "date": "25.10", "status": "" },
  { "name": "Laika: Aged Through Blood", "price": "1.79", "flag": "🇳🇬", "date": "29.10", "status": "" },
  { "name": "Lies of P Digital Deluxe Edition", "price": "8.89", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Light & Dark Bundle", "price": "3.65", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Like a Dragon Gaiden: The Man Who Erased His Name Deluxe Edition", "price": "26.21", "flag": "🇵🇭", "date": "14.11", "status": " GP" },
  { "name": "Like a Dragon: Ishin! Digital Deluxe Edition", "price": "25.66", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "Little Goody Two Shoes", "price": "6.29", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Little Nightmares Complete Edition", "price": "3.28", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Little Nightmares II", "price": "4.33", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Lonely Mountains: Downhill - Eldfjall Island", "price": "1.83", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "Lords of the Fallen Deluxe Edition", "price": "10.17", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Lost Artifacts", "price": "0.42", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Lost Artifacts: Time Machine", "price": "0.42", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Luxury Garden Bundle", "price": "3.97", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "MADiSON", "price": "1.77", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "MLB® The Show™ 24 - Digital Deluxe Edition", "price": "23.35", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "MLB® The Show™ 24 - MVP Edition", "price": "19.85", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "MLB® The Show™ 24 - Xbox One Standard Edition", "price": "14.01", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "MLB® The Show™ 24 - Xbox Series X|S Standard Edition", "price": "33.86", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "MXGP PRO", "price": "1.53", "flag": "🇯🇵", "date": "29.10", "status": "" },
  { "name": "Madden NFL 19", "price": "27.64", "flag": "🇨🇴", "date": "30.12", "status": "" },
  { "name": "Madden NFL 24 Xbox Series X|S & Xbox One", "price": "16.05", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "Maneater Apex Edition", "price": "3.3", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "Marvel's Midnight Suns Enhanced Edition", "price": "6.2", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Marvel's Midnight Suns Legendary Edition for Xbox One", "price": "8.38", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Marvel's Midnight Suns Legendary Edition for Xbox Series X|S", "price": "8.38", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Marvel's Midnight Suns", "price": "5.76", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Mass Effect™ Legendary Edition", "price": "7.12", "flag": "🇮🇳", "date": "29.10", "status": "" },
  { "name": "Massi", "price": "2.56", "flag": "🇮🇳", "date": "23.10", "status": "" },
  { "name": "Mastho is Together", "price": "1.28", "flag": "🇮🇳", "date": "29.10", "status": "" },
  { "name": "MechWarrior 5: Mercenaries - JumpShip Edition", "price": "4.68", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Metal: Hellsinger - Complete Edition", "price": "2.27", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Metro 2033 Redux", "price": "0.25", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Metro Exodus", "price": "0.82", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Metro Saga Bundle", "price": "5.69", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Metro: Last Light Redux", "price": "0.25", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "MiceGard Bundle", "price": "0.63", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.0", "flag": "🇺🇸", "date": "30.11", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.0", "flag": "🇺🇸", "date": "30.11", "status": "" },
  { "name": "Microsoft Flight Simulator Deluxe 40th Anniversary Edition", "price": "11.45", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Microsoft Flight Simulator Premium Deluxe 40th Anniversar...", "price": "15.23", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Middle-earth™: Shadow of Mordor™ - Game of the Year Edition", "price": "0.45", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Middle-earth™: Shadow of War™ Definitive Edition", "price": "1.14", "flag": "🇳🇬", "date": "01.11", "status": "" },
  { "name": "Middle-earth™: The Shadow Bundle", "price": "13.99", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle - Windows 10", "price": "1.48", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle", "price": "1.48", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate Edition for Windows", "price": "5.84", "flag": "🇪🇬", "date": "14.11", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate Edition", "price": "5.12", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Minecraft Legends Deluxe Edition", "price": "6.4", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Minecraft: Deluxe Collection", "price": "3.84", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Monopoly Madness", "price": "1.82", "flag": "🇹🇷", "date": "29.10", "status": " GP" },
  { "name": "Monster Hunter Rise + Sunbreak Deluxe", "price": "23.57", "flag": "🇳🇬", "date": "01.11", "status": "" },
  { "name": "Monster Hunter Rise + Sunbreak", "price": "31.76", "flag": "🇯🇵", "date": "14.11", "status": " GP" },
  { "name": "Monster Hunter Rise Deluxe Edition", "price": "15.76", "flag": "🇳🇬", "date": "01.11", "status": "" },
  { "name": "Monster Hunter World: Iceborne Master Edition Digital Deluxe", "price": "13.23", "flag": "🇯🇵", "date": "01.11", "status": "" },
  { "name": "MonsterBlast", "price": "0.4", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Monstrum", "price": "0.33", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Moonglow Bay", "price": "1.43", "flag": "🇳🇬", "date": "29.10", "status": "" },
  { "name": "Moonlighter: Complete Edition", "price": "1.58", "flag": "🇹🇷", "date": "01.12", "status": " GP" },
  { "name": "Morbid: The Lords of Ire", "price": "2.3", "flag": "🇳🇬", "date": "01.11", "status": "" },
  { "name": "Morbid: The Seven Acolytes", "price": "2.32", "flag": "🇮🇳", "date": "01.11", "status": "" },
  { "name": "Mortal Kombat 11 Ultimate + Injustice 2 Leg. Edition Bundle", "price": "20.06", "flag": "🇹🇷", "date": "16.12", "status": " GP" },
  { "name": "Mortal Kombat 11 Ultimate", "price": "8.79", "flag": "🇪🇬", "date": "01.11", "status": "" },
  { "name": "Mortal Kombat XL", "price": "0.93", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "MotoGP™15", "price": "1.09", "flag": "🇯🇵", "date": "29.10", "status": "" },
  { "name": "MotoGP™20", "price": "2.48", "flag": "🇰🇷", "date": "29.10", "status": "" },
  { "name": "Mount & Blade II: Bannerlord Digital Deluxe Edition", "price": "7.61", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Moving Out 2 - Deluxe Edition", "price": "4.2", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "MudRunner - American Wilds Edition", "price": "1.23", "flag": "🇹🇷", "date": "29.10", "status": " GP" },
  { "name": "Murder Diaries", "price": "0.5", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "My Bakery Empire", "price": "0.53", "flag": "🇹🇷", "date": "26.10", "status": "" },
  { "name": "My Bakery Empire: Complete Edition", "price": "0.93", "flag": "🇹🇷", "date": "02.11", "status": "" },
  { "name": "My Big Sister: Remastered", "price": "4.13", "flag": "🇮🇳", "date": "26.10", "status": "" },
  { "name": "My Friend Peppa Pig - Complete Edition", "price": "6.57", "flag": "🇪🇬", "date": "01.07", "status": " GP" },
  { "name": "My Time at Sandrock Deluxe Edition", "price": "3.3", "flag": "🇹🇷", "date": "28.10", "status": " GP" },
  { "name": "NASCAR Arcade Rush Project-X Edition", "price": "7.3", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "NBA 2K25 All-Star Edition", "price": "57.26", "flag": "🇲🇽", "date": "28.10", "status": "" },
  { "name": "NBA 2K25 Standard Edition", "price": "39.83", "flag": "🇮🇳", "date": "28.10", "status": "" },
  { "name": "NHL® 24 Standard Edition Xbox One", "price": "19.02", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "NHL® 24 Standard Edition Xbox Series X|S", "price": "21.4", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "NHL® 25 Standard Edition + Loyalty Offer", "price": "47.56", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "NHRA Championship Drag Racing: Speed For All", "price": "1.46", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "NHRA Championship Drag Racing: Speed for All - Deluxe Edi...", "price": "1.82", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "NHRA Championship Drag Racing: Speed for All - Ultimate E...", "price": "2.41", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "NINJA GAIDEN: Master Collection Deluxe Edition", "price": "6.09", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Need for Speed™ Unbound Palace Edition", "price": "9.34", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Need for Speed™ Unbound", "price": "6.13", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Neon Abyss Deluxe Edition", "price": "1.84", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "New Tales from the Borderlands", "price": "7.28", "flag": "🇹🇷", "date": "29.10", "status": " GP" },
  { "name": "Nickelodeon All-Star Brawl 2 Deluxe Edition", "price": "10.19", "flag": "🇪🇬", "date": "14.11", "status": " GP" },
  { "name": "Nickelodeon All-Star Brawl 2 Ultimate Edition", "price": "11.67", "flag": "🇪🇬", "date": "29.10", "status": "" },
  { "name": "Nickelodeon All-Star Brawl 2", "price": "2.74", "flag": "🇪🇬", "date": "29.10", "status": "" },
  { "name": "Nickelodeon Kart Racers 2: Grand Prix", "price": "0.8", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Nickelodeon Kart Racers 3: Slime Speedway Turbo Edition", "price": "2.74", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.2", "flag": "🇹🇷", "date": "30.05", "status": "" },
  { "name": "No Man's Sky", "price": "1.98", "flag": "🇹🇷", "date": "28.10", "status": "" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "26.01", "flag": "🇧🇷", "date": "16.03", "status": " GP" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "29.01", "flag": "🇮🇳", "date": "16.03", "status": " GP" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "3.97", "flag": "🇹🇷", "date": "16.03", "status": " GP" },
  { "name": "Nobody Wants to Die", "price": "12.85", "flag": "🇹🇷", "date": "28.10", "status": " GP" },
  { "name": "OCTOPATH TRAVELER + OCTOPATH TRAVELER II Bundle", "price": "40.53", "flag": "🇺🇦", "date": "01.12", "status": " GP" },
  { "name": "Oaken", "price": "0.49", "flag": "🇹🇷", "date": "29.10", "status": " GP" },
  { "name": "Onimusha: Warlords", "price": "7.19", "flag": "🇰🇷", "date": "01.11", "status": "" },
  { "name": "Orcs Must Die! 3 Bundle", "price": "2.66", "flag": "🇹🇷", "date": "16.04", "status": " GP" },
  { "name": "Ori: The Collection", "price": "6.4", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Othercide", "price": "1.11", "flag": "🇹🇷", "date": "29.10", "status": " GP" },
  { "name": "Outbreak: Detective Collection", "price": "54.11", "flag": "🇮🇳", "date": "29.10", "status": "" },
  { "name": "Outbreak: Survival Kit Collection", "price": "56.6", "flag": "🇮🇳", "date": "29.10", "status": " GP" },
  { "name": "Overcooked! 2 - Gourmet Edition", "price": "2.1", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Overruled!", "price": "0.23", "flag": "🇹🇷", "date": "28.10", "status": "" },
  { "name": "PAC-MAN Mega Tunnel Battle: Chomp Champs - Deluxe Edition", "price": "10.86", "flag": "🇨🇴", "date": "28.10", "status": " GP" },
  { "name": "PERISH", "price": "5.84", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "PO'ed: Definitive Edition", "price": "1.23", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "PROJECT ZERO: Mask of the Lunar Eclipse", "price": "10.2", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Paper Cut Mansion", "price": "0.49", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Paper io 2: Complete Edition", "price": "0.46", "flag": "🇹🇷", "date": "27.10", "status": "" },
  { "name": "Paratopic", "price": "0.43", "flag": "🇳🇬", "date": "29.10", "status": "" },
  { "name": "Party Animals Deluxe Edition", "price": "3.84", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Paw Patrol Bundle", "price": "8.79", "flag": "🇪🇬", "date": "14.11", "status": " GP" },
  { "name": "Penarium", "price": "0.18", "flag": "🇹🇷", "date": "28.10", "status": "" },
  { "name": "Persona 5 Tactica: Digital Deluxe Edition", "price": "42.01", "flag": "🇹🇷", "date": "16.11", "status": " GP" },
  { "name": "Pets Bundle", "price": "2.98", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Phantom Spark", "price": "1.92", "flag": "🇳🇬", "date": "29.10", "status": "" },
  { "name": "Phoenix Point: Behemoth Edition", "price": "1.98", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Planet of Lana", "price": "1.34", "flag": "🇳🇬", "date": "29.10", "status": "" },
  { "name": "Plants vs. Zombies Garden Warfare", "price": "0.93", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Plants vs. Zombies: Battle for Neighborville™ Deluxe Edition", "price": "7.13", "flag": "🇮🇳", "date": "01.11", "status": "" },
  { "name": "Plants vs. Zombies: Battle for Neighborville™", "price": "5.22", "flag": "🇧🇷", "date": "01.11", "status": "" },
  { "name": "Plants vs. Zombies™ Garden Warfare 2", "price": "0.93", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Plants vs. Zombies™ Garden Warfare 2: Deluxe Edition", "price": "1.34", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "PowerSlave Exhumed", "price": "0.87", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Prey", "price": "1.28", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Prey®: Digital Deluxe Edition", "price": "23.59", "flag": "🇯🇵", "date": "14.11", "status": " GP" },
  { "name": "Purpose 1951", "price": "3.61", "flag": "🇮🇳", "date": "31.10", "status": "" },
  { "name": "RACCOON CITY EDITION Z Version", "price": "11.58", "flag": "🇯🇵", "date": "01.11", "status": "" },
  { "name": "RACCOON CITY EDITION", "price": "11.58", "flag": "🇯🇵", "date": "01.11", "status": "" },
  { "name": "RAGE 2: Deluxe Edition", "price": "10.51", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "RESIDENT EVIL 2 Deluxe Edition", "price": "6.55", "flag": "🇳🇬", "date": "01.11", "status": "" },
  { "name": "RESIDENT EVIL 7 biohazard Gold Edition", "price": "11.76", "flag": "🇧🇷", "date": "01.11", "status": "" },
  { "name": "RICO", "price": "0.69", "flag": "🇧🇷", "date": "29.10", "status": "" },
  { "name": "RISK", "price": "0.4", "flag": "🇹🇷", "date": "29.10", "status": " GP" },
  { "name": "Raging Justice", "price": "0.58", "flag": "🇹🇷", "date": "28.10", "status": "" },
  { "name": "Railbreak", "price": "10.46", "flag": "🇮🇳", "date": "29.10", "status": " GP" },
  { "name": "Rapala Fishing: Pro Series", "price": "0.17", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Ratyboy Adventures", "price": "0.25", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "ReCore", "price": "2.56", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Red Dead Online", "price": "1.28", "flag": "🇳🇬", "date": "29.10", "status": " GP" },
  { "name": "Red Dead Redemption & Red Dead Redemption 2 Bundle", "price": "8.22", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Red Dead Redemption 2", "price": "2.51", "flag": "🇳🇬", "date": "29.10", "status": " GP" },
  { "name": "Redfall", "price": "12.97", "flag": "🇵🇭", "date": "01.11", "status": "" },
  { "name": "Redout 2", "price": "3.79", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Regular Moonstone Pack -- 2,500", "price": "2.38", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Remnant II - Deluxe Edition", "price": "8.79", "flag": "🇪🇬", "date": "01.06", "status": " GP" },
  { "name": "Remnant II - Ultimate Edition", "price": "10.19", "flag": "🇪🇬", "date": "14.11", "status": " GP" },
  { "name": "Remnant: From the Ashes - Complete Edition", "price": "7.31", "flag": "🇪🇬", "date": "14.11", "status": " GP" },
  { "name": "Resetail", "price": "0.25", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Resident Evil 4", "price": "15.57", "flag": "🇮🇳", "date": "01.11", "status": "" },
  { "name": "Resident Evil 7 Gold Edition & Village Gold Edition", "price": "25.21", "flag": "🇮🇳", "date": "01.11", "status": "" },
  { "name": "Resident Evil Revelations 1 & 2 Bundle", "price": "3.93", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Resident Evil Triple Pack", "price": "8.92", "flag": "🇮🇳", "date": "01.11", "status": "" },
  { "name": "Resident Evil Village Gold Edition", "price": "14.27", "flag": "🇮🇳", "date": "01.11", "status": "" },
  { "name": "Resident Evil: Deluxe Origins Bundle", "price": "5.68", "flag": "🇧🇷", "date": "01.11", "status": "" },
  { "name": "Riders Republic™ 360 Edition", "price": "30.36", "flag": "🇹🇷", "date": "09.12", "status": " GP" },
  { "name": "Riders Republic™ Complete Edition", "price": "40.87", "flag": "🇹🇷", "date": "09.12", "status": " GP" },
  { "name": "Riders Republic™ Skate Edition", "price": "23.35", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Rise of the Tomb Raider: 20 Year Celebration", "price": "12.18", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Risen 1", "price": "10.74", "flag": "🇨🇴", "date": "01.11", "status": "" },
  { "name": "Rogue Lords", "price": "0.5", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Rogue Sentry", "price": "4.13", "flag": "🇮🇳", "date": "24.10", "status": "" },
  { "name": "Roguebook - Deluxe Edition Xbox Series X|S & Xbox One", "price": "0.58", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "SENSHI SOKOBAN QUEST (Windows 10)", "price": "0.31", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "SENSHI SOKOBAN QUEST", "price": "0.31", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "SIGNALIS", "price": "1.35", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "SILT", "price": "0.41", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "SOMA", "price": "0.82", "flag": "🇪🇬", "date": "01.11", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "12.29", "flag": "🇹🇷", "date": "31.12", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "8.13", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "STAR WARS Jedi: Survivor™ Deluxe Edition", "price": "34.78", "flag": "🇮🇳", "date": "29.10", "status": "" },
  { "name": "STAR WARS Jedi: Survivor™ Xbox One", "price": "29.98", "flag": "🇰🇷", "date": "29.10", "status": "" },
  { "name": "STAR WARS Jedi: Survivor™", "price": "21.4", "flag": "🇮🇳", "date": "29.10", "status": "" },
  { "name": "STEEP", "price": "0.92", "flag": "🇹🇷", "date": "29.10", "status": " GP" },
  { "name": "SUPERHOT ONE OF US BUNDLE", "price": "2.07", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "Sacred 3", "price": "0.36", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Saint Kotar", "price": "0.49", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Sally Face", "price": "0.98", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Scars Above", "price": "4.37", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Sea of Thieves: 2024 Deluxe Edition", "price": "6.09", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Sea of Thieves: 2024 Premium Edition", "price": "7.25", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Self-Delusion (Xbox Series X|S)", "price": "0.99", "flag": "🇹🇷", "date": "30.10", "status": "" },
  { "name": "Self-Delusion", "price": "0.99", "flag": "🇹🇷", "date": "30.10", "status": "" },
  { "name": "Sentry Paragon", "price": "0.25", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Senua’s Saga: Hellblade II", "price": "3.96", "flag": "🇳🇬", "date": "01.11", "status": "" },
  { "name": "Seven Doors", "price": "0.2", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Shadow Man Remastered", "price": "0.87", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Shady Part of Me", "price": "0.88", "flag": "🇹🇷", "date": "29.10", "status": " GP" },
  { "name": "Shame Legacy Xbox One Edition", "price": "0.5", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Shame Legacy", "price": "0.66", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Shape Up Gold Edition", "price": "1.6", "flag": "🇹🇷", "date": "29.10", "status": " GP" },
  { "name": "Sherlock Holmes The Awakened – Deluxe Edition", "price": "1.92", "flag": "🇳🇬", "date": "01.11", "status": "" },
  { "name": "Skate 3", "price": "0.66", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Skelattack", "price": "0.46", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Skeljump", "price": "0.25", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Skyrim Anniversary Edition + Fallout 4 G.O.T.Y Bundle", "price": "18.68", "flag": "🇹🇷", "date": "30.10", "status": "" },
  { "name": "Skyrim Anniversary Edition + Fallout 4 G.O.T.Y Bundle", "price": "7.71", "flag": "🇹🇷", "date": "30.10", "status": "" },
  { "name": "Slaycation Paradise", "price": "1.96", "flag": "🇮🇳", "date": "01.11", "status": "" },
  { "name": "Slender: The Arrival", "price": "0.12", "flag": "🇳🇬", "date": "01.11", "status": "" },
  { "name": "Slender: The Arrival", "price": "0.82", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Small Moonstone Pack -- 1,200", "price": "1.22", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Sniper Elite 5 Complete Edition", "price": "7.3", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Sniper Elite 5 Deluxe Edition", "price": "11.45", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "SnowRunner - 1-Anniversary Edition", "price": "4.38", "flag": "🇹🇷", "date": "29.10", "status": " GP" },
  { "name": "SnowRunner - 2-Year Anniversary Edition", "price": "30.36", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "SnowRunner - 3-Year Anniversary Edition", "price": "37.36", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "SnowRunner - 4-Year Anniversary Edition", "price": "44.37", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Somerville", "price": "1.01", "flag": "🇳🇬", "date": "29.10", "status": "" },
  { "name": "Sophstar", "price": "0.21", "flag": "🇹🇷", "date": "29.10", "status": " GP" },
  { "name": "Soul Searching", "price": "0.77", "flag": "🇳🇬", "date": "29.10", "status": " GP" },
  { "name": "Source of Madness", "price": "0.65", "flag": "🇳🇬", "date": "29.10", "status": "" },
  { "name": "South Park™: The Fractured but Whole™ - Gold Edition", "price": "30.36", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Space Engineers: Ultimate Edition 2023", "price": "4.9", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "Space Hulk: Tactics", "price": "0.59", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Sparkle Bundle", "price": "0.96", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Speedollama", "price": "0.66", "flag": "🇹🇷", "date": "30.10", "status": "" },
  { "name": "Spencer", "price": "0.4", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Starfield Premium Edition Upgrade", "price": "5.73", "flag": "🇪🇬", "date": "05.09", "status": " GP" },
  { "name": "Starfield Premium Edition", "price": "14.63", "flag": "🇪🇬", "date": "14.11", "status": " GP" },
  { "name": "Starward Rogue + Moonshine Inc. - Galactic Spirit Deluxe Bundle", "price": "5.95", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "State of Decay 2: Juggernaut Edition", "price": "1.27", "flag": "🇳🇬", "date": "01.11", "status": "" },
  { "name": "State of Decay: Year-One Survival Edition", "price": "1.46", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "SteamWorld Build & Dig Bundle", "price": "4.45", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "SteamWorld Build Deluxe Edition", "price": "4.2", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "SteamWorld Build", "price": "2.01", "flag": "🇳🇬", "date": "29.10", "status": "" },
  { "name": "SteamWorld Dig 2", "price": "0.58", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "SteamWorld Dig", "price": "0.26", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Steelrising - Bastille Edition", "price": "3.65", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Stellaris: Console Edition - Deluxe Edition", "price": "4.0", "flag": "🇹🇷", "date": "16.01", "status": " GP" },
  { "name": "Still Wakes the Deep", "price": "3.06", "flag": "🇳🇬", "date": "01.11", "status": "" },
  { "name": "Strategic Mind: Fight for Freedom & Spirit of Liberty - Independence Bundle", "price": "6.49", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Street Outlaws 2: Winner Takes All – Digital Deluxe", "price": "0.5", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "SturmFront - The Mutant War: Ubel Edition", "price": "0.2", "flag": "🇹🇷", "date": "29.10", "status": " GP" },
  { "name": "Suicide Squad: Kill the Justice League - Digital Deluxe Edition", "price": "12.84", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Sunset Overdrive Deluxe Edition", "price": "1.62", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Swordbreaker: Origins (Xbox Series X|S)", "price": "0.34", "flag": "🇹🇷", "date": "29.10", "status": " GP" },
  { "name": "Swordbreaker: Origins", "price": "0.34", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "System Shock", "price": "10.93", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "THE HOUSE OF THE DEAD: Remake", "price": "0.52", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "THE KING OF FIGHTERS XV Deluxe Edition", "price": "14.77", "flag": "🇰🇷", "date": "29.10", "status": " GP" },
  { "name": "TRUDOGRAD", "price": "1.52", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Tales of ARISE + SCARLET NEXUS バンドル", "price": "35.0", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Tales of Arise - Beyond The Dawn Ultimate Edition", "price": "42.01", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Tales of Arise - Beyond the Dawn Deluxe Edition", "price": "35.0", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Tales of Arise - Beyond the Dawn Edition", "price": "25.66", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Tannenberg", "price": "0.58", "flag": "🇹🇷", "date": "29.10", "status": " GP" },
  { "name": "Tchia: Oléti Edition", "price": "7.86", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Teardown", "price": "1.24", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Teenage Mutant Ninja Turtles: Shredder's Revenge - Ultimate Edition", "price": "2.19", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Teratopia", "price": "1.93", "flag": "🇧🇷", "date": "29.10", "status": " GP" },
  { "name": "The Addams Family: Mansion Mayhem", "price": "3.97", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "The Adventures of Elena Temple: Definitive Edition", "price": "0.18", "flag": "🇳🇬", "date": "29.10", "status": "" },
  { "name": "The Bard's Tale Trilogy", "price": "0.73", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "The Callisto Protocol™ for Xbox One – Digital Deluxe Edition", "price": "5.06", "flag": "🇳🇬", "date": "01.11", "status": "" },
  { "name": "The Callisto Protocol™ for Xbox Series X|S – Digital Delu...", "price": "5.7", "flag": "🇳🇬", "date": "01.11", "status": "" },
  { "name": "The Chant", "price": "2.42", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "The Crew® 2 Special Edition", "price": "2.86", "flag": "🇹🇷", "date": "29.10", "status": " GP" },
  { "name": "The Dark Pictures Anthology House of Ashes", "price": "1.34", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "The Dark Pictures Anthology: Little Hope", "price": "2.61", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "The Dark Pictures Anthology: Man Of Medan", "price": "2.61", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "The Dark Pictures Anthology: The Devil in Me", "price": "3.72", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "The Elder Scrolls III: Morrowind", "price": "1.14", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "The Elder Scrolls Online Collection: Gold Road", "price": "30.36", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "The Elder Scrolls Online Deluxe Collection: Gold Road", "price": "40.87", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "The Elder Scrolls V: Skyrim Anniversary Edition", "price": "11.21", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "The Elder Scrolls V: Skyrim Special Edition", "price": "2.55", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "The Escapists: Supermax Edition", "price": "1.79", "flag": "🇹🇷", "date": "14.11", "status": "" },
  { "name": "The Escapists: The Walking Dead", "price": "0.42", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "The Evil Within (PC)", "price": "0.53", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "The Evil Within Digital Bundle", "price": "2.36", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "The Evil Within", "price": "1.3", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "The Evil Within® 2", "price": "1.05", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "The Excrawlers", "price": "0.27", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "The Fall of Elena Temple", "price": "0.3", "flag": "🇳🇬", "date": "29.10", "status": "" },
  { "name": "The Gunk", "price": "0.91", "flag": "🇳🇬", "date": "29.10", "status": "" },
  { "name": "The Hellblade Bundle", "price": "10.52", "flag": "🇪🇬", "date": "01.11", "status": "" },
  { "name": "The Inquisitor", "price": "19.39", "flag": "🇮🇳", "date": "01.11", "status": "" },
  { "name": "The Jackbox Party Quadpack", "price": "6.24", "flag": "🇹🇷", "date": "31.12", "status": "" },
  { "name": "The Lamplighters League - Deluxe Edition", "price": "7.01", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "The Last Campfire", "price": "0.17", "flag": "🇹🇷", "date": "28.10", "status": "" },
  { "name": "The Last Kids on Earth and the Staff of Doom", "price": "2.45", "flag": "🇪🇬", "date": "01.11", "status": "" },
  { "name": "The Long Reach", "price": "0.76", "flag": "🇧🇷", "date": "01.11", "status": "" },
  { "name": "The Outer Worlds: Board-Approved Bundle", "price": "12.59", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Outlast Trials Deluxe Edition", "price": "4.29", "flag": "🇳🇬", "date": "01.11", "status": "" },
  { "name": "The Outlast Trials", "price": "3.26", "flag": "🇳🇬", "date": "01.11", "status": "" },
  { "name": "The Quarry - Deluxe Edition", "price": "18.42", "flag": "🇹🇷", "date": "28.10", "status": " GP" },
  { "name": "The Quarry for Xbox One", "price": "2.62", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "The Quarry for Xbox Series X|S", "price": "2.86", "flag": "🇹🇷", "date": "16.12", "status": "" },
  { "name": "The Raven Remastered", "price": "2.59", "flag": "🇧🇷", "date": "01.11", "status": "" },
  { "name": "The Sinking City Xbox Series X|S", "price": "0.96", "flag": "🇳🇬", "date": "01.11", "status": "" },
  { "name": "The Sinking City", "price": "0.96", "flag": "🇳🇬", "date": "01.11", "status": "" },
  { "name": "The Surge 2 - Premium Edition", "price": "1.9", "flag": "🇹🇷", "date": "29.10", "status": " GP" },
  { "name": "The Surge", "price": "0.53", "flag": "🇹🇷", "date": "29.10", "status": " GP" },
  { "name": "The Walking Dead: A New Frontier", "price": "0.99", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "The Walking Dead: Destinies", "price": "11.38", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "The Walking Dead: Michonne", "price": "0.33", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "The Walking Dead: The Complete First Season", "price": "0.61", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "The Walking Dead: The Final Season - The Complete Season", "price": "0.5", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "The Walking Dead: The Telltale Definitive Series", "price": "1.46", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "The Wolf Among Us", "price": "1.01", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "This War of Mine - Complete Edition", "price": "1.78", "flag": "🇹🇷", "date": "16.12", "status": " GP" },
  { "name": "Thymesia", "price": "3.63", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Timothy vs the Aliens", "price": "0.25", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Tiny Tina's Assault on Dragon Keep: A Wonderlands One-sho...", "price": "1.39", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Tiny Tina's Wonderlands", "price": "3.5", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Tiny Tina's Wonderlands: Chaotic Great Edition", "price": "3.73", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Tiny Tina's Wonderlands: Next-Level Edition", "price": "4.08", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Togges", "price": "0.49", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Tom Clancy's Rainbow Six® Extraction United Bundle", "price": "5.25", "flag": "🇹🇷", "date": "29.10", "status": " GP" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Ultimate Edition", "price": "12.35", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Year 2 Gold Edition", "price": "9.34", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Tom Clancy’s Rainbow Six Siege Operator Edition", "price": "30.36", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Tom Clancy’s Rainbow Six Siege Ultimate Edition", "price": "37.36", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Tomb Raider: Definitive Survivor Trilogy", "price": "20.31", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Totally Reliable Delivery Service Deluxe Edition", "price": "1.58", "flag": "🇹🇷", "date": "01.12", "status": " GP" },
  { "name": "Trackmania® Turbo", "price": "0.82", "flag": "🇹🇷", "date": "29.10", "status": " GP" },
  { "name": "Trailmakers: Booster Edition", "price": "2.31", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers: Deluxe Edition", "price": "3.3", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers: Ultimate Edition", "price": "3.97", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Trepang2", "price": "2.3", "flag": "🇳🇬", "date": "01.11", "status": "" },
  { "name": "Tribes of Midgard Deluxe Edition", "price": "1.1", "flag": "🇳🇬", "date": "01.11", "status": "" },
  { "name": "Tricky Thief", "price": "1.6", "flag": "🇮🇳", "date": "29.10", "status": "" },
  { "name": "Turbo Golf Racing: Deep Space Bundle", "price": "1.05", "flag": "🇹🇷", "date": "16.04", "status": " GP" },
  { "name": "Turbo Golf Racing: Ultimate Bundle", "price": "1.26", "flag": "🇹🇷", "date": "16.04", "status": " GP" },
  { "name": "Turnip Boy Robs a Bank Pre-Release", "price": "0.99", "flag": "🇹🇷", "date": "15.07", "status": " GP" },
  { "name": "UFC® 5 Deluxe Edition", "price": "34.48", "flag": "🇰🇷", "date": "29.10", "status": "" },
  { "name": "UFC® 5 Standard Edition", "price": "26.75", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "UFC® 5 Ultimate Edition", "price": "42.1", "flag": "🇰🇷", "date": "29.10", "status": "" },
  { "name": "UFC® 5", "price": "26.75", "flag": "🇮🇳", "date": "29.10", "status": "" },
  { "name": "Ultimate ADOM - Caverns of Chaos", "price": "0.75", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "1.2", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Urban Trial Tricky Deluxe Edition", "price": "0.29", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "VAMPYR", "price": "1.02", "flag": "🇳🇬", "date": "01.11", "status": "" },
  { "name": "Vampire: The Masquerade - Swansong", "price": "5.8", "flag": "🇮🇳", "date": "01.11", "status": "" },
  { "name": "Vampyr", "price": "1.11", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Verdun", "price": "0.42", "flag": "🇹🇷", "date": "29.10", "status": " GP" },
  { "name": "Vermintide - Digital Value Pack", "price": "2.57", "flag": "🇹🇷", "date": "07.03", "status": "" },
  { "name": "Vigour", "price": "0.25", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "9.19", "flag": "🇹🇷", "date": "30.08", "status": "" },
  { "name": "War Mongrels", "price": "0.91", "flag": "🇳🇬", "date": "29.10", "status": "" },
  { "name": "Warhammer 40,000: Boltgun - Forges of Corruption Edition", "price": "10.33", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "Warhammer 40,000: Boltgun", "price": "5.25", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Warhammer 40,000: Darktide - Imperial Edition", "price": "9.14", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Warhammer: Chaosbane Slayer Edition Xbox Series X|S", "price": "0.5", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Wasteland 3 (PC) Colorado Collection", "price": "6.4", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Wasteland 3 Colorado Collection", "price": "10.25", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "Watch Dogs®2 - Deluxe Edition", "price": "29.52", "flag": "🇧🇷", "date": "01.07", "status": " GP" },
  { "name": "Watch Dogs®2 - Gold Edition", "price": "47.87", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Wavetale", "price": "1.21", "flag": "🇳🇬", "date": "29.10", "status": "" },
  { "name": "We Happy Few Digital Deluxe", "price": "7.41", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "We Love Katamari REROLL+ Royal Reverie Special Edition", "price": "5.24", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Welcome to ParadiZe", "price": "7.28", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Werewolf: The Apocalypse - Earthblood Champion of Gaia", "price": "0.5", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "White Shadows", "price": "0.58", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Wild Card Football - Ultimate Edition", "price": "11.38", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Wild Card Football", "price": "5.69", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Wired Italian Adventure Bundle", "price": "1.98", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Withering Rooms", "price": "1.48", "flag": "🇹🇷", "date": "01.11", "status": "" },
  { "name": "Wizardry: Proving Grounds of the Mad Overlord", "price": "3.58", "flag": "🇳🇬", "date": "01.11", "status": "" },
  { "name": "Wo Long: Fallen Dynasty Complete Edition", "price": "29.74", "flag": "🇺🇦", "date": "14.11", "status": " GP" },
  { "name": "Wolfenstein: Alt History Collection", "price": "11.68", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Wolfenstein: Youngblood Deluxe Edition", "price": "5.11", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Wolfenstein® II: The New Colossus™ Digital Deluxe Edition", "price": "7.01", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "Wolfenstein®: The Two-Pack", "price": "3.71", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "World War Z", "price": "5.69", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "World War Z: Aftermath - Deluxe Edition", "price": "15.18", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Worldless", "price": "1.53", "flag": "🇳🇬", "date": "29.10", "status": "" },
  { "name": "Wreckfest Complete Edition", "price": "19.33", "flag": "🇧🇷", "date": "16.11", "status": " GP" },
  { "name": "Yakuza: Like a Dragon Hero Edition", "price": "11.66", "flag": "🇯🇵", "date": "01.04", "status": " GP" },
  { "name": "Yakuza: Like a Dragon Legendary Hero Edition", "price": "15.75", "flag": "🇯🇵", "date": "01.04", "status": " GP" },
  { "name": "Yello Adventures", "price": "0.25", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Zombie Vikings", "price": "0.11", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Zombies Ate My Neighbors and Ghoul Patrol", "price": "3.55", "flag": "🇮🇸", "date": "01.11", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Greenhorn Bundle", "price": "2.66", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "theHunter: Call of the Wild™ - Master Hunter Bundle", "price": "3.97", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "theHunter: Call of the Wild™ - Seasoned Hunter Bundle", "price": "3.3", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "ザ・ハウス・オブ・ザ・デッド：リメイク", "price": "4.31", "flag": "🇯🇵", "date": "01.11", "status": "" },
]

let usd = 108;

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
  const value = Number(tr_input.value) + .1
  const res = value * usd
  const finishRes = res + resSwitсhTr(tr_input.value)
  tr_output.innerHTML = floor(finishRes.toFixed())
  tr_output2.innerHTML = floor(finishRes.toFixed()) + 50
}



function resSwitсhArg(value) {
  let a;

  if (value <= 1) {
    a = 100
  } else if (value > 1 && value <= 5) {
    a = 110
  } else if (value > 5 && value <= 10) {
    a = 110
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
    a = 100
  } else if (value > 1 && value <= 5) {
    a = 100
  } else if (value > 5 && value <= 10) {
    a = 100
  } else if (value > 10 && value <= 15) {
    a = 100
  } else if (value > 15 && value <= 20) {
    a = 130
  } else if (value > 20 && value <= 25) {
    a = 100
  } else if (value > 25) {
    a = 100
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



