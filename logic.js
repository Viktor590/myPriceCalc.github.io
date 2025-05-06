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
  { "name": ".T.E.S.T: Expected Behaviour", "price": "0.78", "flag": "🇳🇬", "date": "13.05", "status": "" },
  { "name": "1000 Ancient Coins - Hidden Trove of the Ancients", "price": "1.58", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "150 Ancient Coins - Secret Stash of the Ancients", "price": "0.32", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "2550 Ancient Coins - Royal Treasury of the Ancients", "price": "3.64", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "4250 Ancient Coins - Glittering Tribute of the Ancients", "price": "5.51", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "550 Ancient Coins - Lost Chest of the Ancients", "price": "0.94", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "ASMR Slicing", "price": "1.38", "flag": "🇺🇦", "date": "13.05", "status": "" },
  { "name": "ASTRONEER: Evolution Edition", "price": "2.36", "flag": "🇹🇷", "date": "12.05", "status": " GP" },
  { "name": "ASTRONEER: Glitchwalkers Deluxe Edition", "price": "5.23", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "ASTRONEER: Glitchwalkers Edition", "price": "4.54", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Adventures In Time & Space", "price": "6.15", "flag": "🇮🇳", "date": "14.05", "status": "" },
  { "name": "Aery - Last Day of Earth", "price": "0.41", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Age of Empires 25th Anniversary Collection", "price": "7.05", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Age of Empires: Definitive Collection", "price": "5.85", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Age of Mythology: Retold Premium Edition", "price": "20.7", "flag": "🇹🇷", "date": "12.05", "status": " GP" },
  { "name": "Aliens: Fireteam Elite Into the Hive Edition", "price": "1.57", "flag": "🇳🇬", "date": "13.05", "status": " GP" },
  { "name": "All You Need is Help Lively Friends Bundle", "price": "9.73", "flag": "🇺🇦", "date": "01.10", "status": " GP" },
  { "name": "Alter Age", "price": "8.07", "flag": "🇯🇵", "date": "13.05", "status": " GP" },
  { "name": "Alvastia Chronicles", "price": "4.61", "flag": "🇯🇵", "date": "13.05", "status": " GP" },
  { "name": "Ancient Phantasma", "price": "6.46", "flag": "🇯🇵", "date": "13.05", "status": " GP" },
  { "name": "Anno 1800™ Console Edition - Deluxe", "price": "11.92", "flag": "🇹🇷", "date": "31.05", "status": "" },
  { "name": "Anno 1800™ Console Edition", "price": "9.33", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Aquarium Land: Gold Edition", "price": "3.47", "flag": "🇺🇦", "date": "17.05", "status": "" },
  { "name": "Ara Fell: Enhanced Edition", "price": "0.33", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Arcade Paradise | High Score Edition", "price": "1.63", "flag": "🇹🇷", "date": "12.05", "status": " GP" },
  { "name": "Asdivine Cross", "price": "4.61", "flag": "🇯🇵", "date": "13.05", "status": " GP" },
  { "name": "Asdivine Hearts I & II", "price": "6.08", "flag": "🇺🇦", "date": "13.05", "status": " GP" },
  { "name": "Asdivine Saga", "price": "4.61", "flag": "🇯🇵", "date": "13.05", "status": " GP" },
  { "name": "Ashen", "price": "0.47", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Ashen: Definitive Edition", "price": "1.56", "flag": "🇳🇬", "date": "13.05", "status": " GP" },
  { "name": "Assassin's Creed Antiquity Pack", "price": "46.17", "flag": "🇧🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed Legendary Collection", "price": "83.95", "flag": "🇧🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Bundle: Assassin's Creed® Valhalla, Ass...", "price": "33.16", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin's Creed® Chronicles: China", "price": "0.27", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey - DELUXE EDITION", "price": "3.63", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey - GOLD EDITION", "price": "4.14", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey - ULTIMATE EDITION", "price": "19.17", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Origins - DELUXE EDITION", "price": "2.62", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Assassin's Creed® Origins - GOLD EDITION", "price": "16.58", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Origins", "price": "2.33", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Assassin's Creed® Syndicate", "price": "1.09", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Complete Edition", "price": "20.72", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Deluxe Edition", "price": "5.02", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Ragnarök Edition", "price": "3.89", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Assassin’s Creed® Mirage Deluxe Edition", "price": "10.36", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Assassin’s Creed® Valhalla + Immortals Fenyx Rising™ Bundle", "price": "51.81", "flag": "🇹🇷", "date": "12.05", "status": " GP" },
  { "name": "Assassin’s Creed® Valhalla + Watch Dogs®: Legion Bundle", "price": "23.83", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Asterix & Obelix XXL3: The Crystal Menhir", "price": "5.21", "flag": "🇮🇳", "date": "13.05", "status": " GP" },
  { "name": "Asterix & Obelix XXL: Romastered", "price": "2.6", "flag": "🇮🇳", "date": "13.05", "status": " GP" },
  { "name": "Asterix & Obelix XXXL : The Ram of Hibernia", "price": "6.44", "flag": "🇮🇳", "date": "13.05", "status": " GP" },
  { "name": "Astrune Academy", "price": "6.46", "flag": "🇯🇵", "date": "13.05", "status": " GP" },
  { "name": "Atomfall Deluxe Edition", "price": "12.62", "flag": "🇪🇬", "date": "25.06", "status": " GP" },
  { "name": "Avatar: Frontiers of Pandora Deluxe Edition", "price": "13.68", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Avatar: Frontiers of Pandora™ Ultimate Edition", "price": "18.81", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Avowed Premium Edition", "price": "21.84", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Awarded Platformer Bundle", "price": "1.03", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "BATTLETECH Mercenary Collection", "price": "5.28", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "BIOHAZARD RE:2 Z Version デラックスエディション", "price": "27.89", "flag": "🇯🇵", "date": "16.09", "status": " GP" },
  { "name": "Batman: Arkham Knight Premium Edition", "price": "2.69", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Batora: Lost Haven", "price": "1.04", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Battle Brothers - Complete Edition", "price": "3.07", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Battle Brothers", "price": "1.2", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Big Moonstone Pack -- 5,500", "price": "5.1", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "BioShock 2 Remastered", "price": "0.74", "flag": "🇹🇷", "date": "12.05", "status": " GP" },
  { "name": "BioShock Infinite: The Complete Edition", "price": "1.18", "flag": "🇹🇷", "date": "12.05", "status": " GP" },
  { "name": "BioShock Remastered", "price": "1.18", "flag": "🇹🇷", "date": "12.05", "status": " GP" },
  { "name": "Black Skylands (Game Preview)", "price": "0.65", "flag": "🇳🇬", "date": "13.05", "status": " GP" },
  { "name": "Blades of Fire Pre-order", "price": "37.29", "flag": "🇮🇳", "date": "22.05", "status": "" },
  { "name": "Blazing Trail", "price": "6.62", "flag": "🇮🇳", "date": "15.05", "status": "" },
  { "name": "Blightbound", "price": "0.22", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Blizzard® Arcade Collection", "price": "2.59", "flag": "🇹🇷", "date": "15.05", "status": "" },
  { "name": "Bloomyth & Strong Moon Bundle", "price": "0.31", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Borderlands 3: Next Level Edition", "price": "1.29", "flag": "🇹🇷", "date": "12.05", "status": " GP" },
  { "name": "Borderlands 3: Super Deluxe Edition", "price": "11.79", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "Borderlands 3: Ultimate Edition", "price": "4.59", "flag": "🇹🇷", "date": "12.05", "status": " GP" },
  { "name": "Borderlands: The Handsome Collection", "price": "1.68", "flag": "🇹🇷", "date": "12.05", "status": " GP" },
  { "name": "Bravery and Greed", "price": "0.96", "flag": "🇹🇷", "date": "19.05", "status": "" },
  { "name": "Broken Universe - Tower Defense", "price": "0.15", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Brotato & Abyssal Terrors DLC - Bundle", "price": "0.47", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Bug Fables: The Everlasting Sapling", "price": "0.74", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Build Lands", "price": "0.22", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Bulletstorm: Full Clip Edition Duke Nukem Bundle", "price": "0.47", "flag": "🇹🇷", "date": "12.05", "status": " GP" },
  { "name": "Byte The Bullet", "price": "0.22", "flag": "🇹🇷", "date": "12.05", "status": "" },
  { "name": "Call of Duty®: Advanced Warfare Gold Edition", "price": "1.82", "flag": "🇹🇷", "date": "15.05", "status": "" },
  { "name": "Call of Duty®: Black Ops 4", "price": "4.84", "flag": "🇹🇷", "date": "15.05", "status": "" },
  { "name": "Call of Duty®: Black Ops 6 - Cross-Gen Bundle", "price": "38.54", "flag": "🇧🇷", "date": "15.05", "status": "" },
  { "name": "Call of Duty®: Black Ops 6 - Vault Edition", "price": "49.78", "flag": "🇪🇬", "date": "31.12", "status": " GP" },
  { "name": "Call of Duty®: Black Ops 6 - Vault Edition", "price": "67.02", "flag": "🇧🇷", "date": "31.12", "status": " GP" },
  { "name": "Call of Duty®: Black Ops Cold War - Cross-Gen Bundle", "price": "19.58", "flag": "🇧🇷", "date": "15.05", "status": "" },
  { "name": "Call of Duty®: Black Ops III - Zombies Chronicles Edition", "price": "8.02", "flag": "🇧🇷", "date": "15.05", "status": "" },
  { "name": "Call of Duty®: Ghosts (Windows)", "price": "11.73", "flag": "🇪🇬", "date": "15.05", "status": "" },
  { "name": "Call of Duty®: Ghosts", "price": "1.82", "flag": "🇹🇷", "date": "15.05", "status": "" },
  { "name": "Call of Duty®: Infinite Warfare - Digital Deluxe Edition", "price": "3.19", "flag": "🇹🇷", "date": "15.05", "status": "" },
  { "name": "Call of Duty®: Infinite Warfare - Digital Deluxe Edition", "price": "4.04", "flag": "🇹🇷", "date": "15.05", "status": "" },
  { "name": "Call of Duty®: Infinite Warfare - Launch Edition", "price": "2.12", "flag": "🇹🇷", "date": "15.05", "status": "" },
  { "name": "Call of Duty®: Infinite Warfare", "price": "1.8", "flag": "🇹🇷", "date": "15.05", "status": "" },
  { "name": "Call of Duty®: Modern Warfare® - Digital Standard Edition", "price": "15.63", "flag": "🇮🇳", "date": "15.05", "status": "" },
  { "name": "Call of Duty®: Modern Warfare® III - Cross-Gen Bundle", "price": "26.15", "flag": "🇧🇷", "date": "15.05", "status": "" },
  { "name": "Call of Duty®: Modern Warfare® Remastered", "price": "2.51", "flag": "🇹🇷", "date": "15.05", "status": "" },
  { "name": "Call of Duty®: Vanguard - Cross-Gen Bundle", "price": "6.21", "flag": "🇹🇷", "date": "15.05", "status": "" },
  { "name": "Call of Duty®: WWII - Gold Edition", "price": "2.56", "flag": "🇹🇷", "date": "15.05", "status": "" },
  { "name": "Call of the Wild: The Angler™ - Ultimate Fishing Bundle", "price": "9.4", "flag": "🇪🇬", "date": "12.05", "status": " GP" },
  { "name": "Candle Knight", "price": "0.45", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Cannon Dancer - Osman", "price": "4.86", "flag": "🇺🇦", "date": "13.05", "status": " GP" },
  { "name": "Car Vouchers (10)", "price": "1.24", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Car Vouchers (24)", "price": "2.49", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Car Vouchers (4)", "price": "0.62", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Cassette Beasts - New Wirral Edition", "price": "1.76", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Cassette Beasts: Deluxe Edition", "price": "1.53", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Chivalry 2 King's Edition", "price": "3.52", "flag": "🇹🇷", "date": "01.10", "status": " GP" },
  { "name": "Chivalry 2 Special Edition", "price": "2.93", "flag": "🇹🇷", "date": "01.10", "status": " GP" },
  { "name": "Chronus Arc", "price": "4.61", "flag": "🇯🇵", "date": "13.05", "status": "" },
  { "name": "Cities: Skylines - Mayor's Edition", "price": "27.84", "flag": "🇧🇷", "date": "01.04", "status": " GP" },
  { "name": "Cities: Skylines - Premium Edition 2", "price": "4.09", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "Citizen Sleeper: Helion Collection", "price": "5.23", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Classified: France '44 - Deluxe Edition", "price": "7.33", "flag": "🇸🇦", "date": "13.05", "status": "" },
  { "name": "Clockwork Aquario", "price": "1.81", "flag": "🇺🇦", "date": "13.05", "status": " GP" },
  { "name": "Cluedo black Adder Edition", "price": "0.79", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Colossal Cave", "price": "0.73", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Conan Exiles - Isle of Siptah Edition", "price": "19.83", "flag": "🇲🇽", "date": "13.05", "status": " GP" },
  { "name": "Conan Exiles - Isle of Siptah Edition", "price": "2.07", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Conan Exiles – Year 1 DLC Bundle", "price": "1.97", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Cooking Companions", "price": "1.54", "flag": "🇳🇬", "date": "13.05", "status": "" },
  { "name": "Cozy Designer", "price": "0.52", "flag": "🇳🇬", "date": "13.05", "status": "" },
  { "name": "Crash Bandicoot™ 4: It’s About Time", "price": "4.02", "flag": "🇹🇷", "date": "15.05", "status": "" },
  { "name": "Crash Bandicoot™ Bundle - N. Sane Trilogy + CTR Nitro-Fueled", "price": "8.92", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Crash Bandicoot™ N. Sane Trilogy", "price": "2.01", "flag": "🇹🇷", "date": "15.05", "status": "" },
  { "name": "Crash Team Rumble™ - Deluxe Edition", "price": "13.97", "flag": "🇹🇷", "date": "15.05", "status": "" },
  { "name": "Crashy Laps", "price": "0.26", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Crash™ + Spyro™ Triple Play Bundle", "price": "12.0", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Crash™ Team Racing Nitro-Fueled + Spyro™ Game Bundle", "price": "8.92", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Crash™ Team Racing Nitro-Fueled - Nitros Oxide Edition", "price": "7.25", "flag": "🇹🇷", "date": "15.05", "status": "" },
  { "name": "Creatures of Ava: Deluxe Edition", "price": "12.95", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Creepy Tale: Ingrid Penance (Xbox Series X|S)", "price": "0.45", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Crusader Kings III: Royal Edition", "price": "31.69", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Cryogear", "price": "0.78", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Cyber Pool", "price": "0.07", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Cyber Tank 2 (Windows)", "price": "0.25", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Cyber Tank 2 (Xbox One)", "price": "0.25", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Cyber Tank 2 bundle", "price": "0.37", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Cyber Tank 2", "price": "0.25", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "CyberCorp", "price": "2.09", "flag": "🇳🇬", "date": "13.05", "status": "" },
  { "name": "DARK SOULS™ II: Scholar of the First Sin", "price": "7.76", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "DARK SOULS™ III - Deluxe Edition", "price": "18.38", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "DARK SOULS™ III", "price": "13.59", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "DARK SOULS™: REMASTERED", "price": "7.76", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "DEAD ISLAND 2 GOLD EDITION", "price": "40.82", "flag": "🇰🇷", "date": "01.11", "status": " GP" },
  { "name": "DEATHLOOP Deluxe Edition", "price": "34.67", "flag": "🇪🇬", "date": "30.12", "status": " GP" },
  { "name": "DOOM Anthology", "price": "48.7", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "DOOM Eternal Deluxe Edition", "price": "12.43", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "DOOM Eternal: The Ancient Gods - Part One", "price": "4.4", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "DOOM Eternal: The Ancient Gods - Part Two", "price": "4.4", "flag": "🇹🇷", "date": "17.03", "status": " GP" },
  { "name": "DOOM Eternal: Year One Pass (PC)", "price": "6.64", "flag": "🇹🇷", "date": "03.12", "status": " GP" },
  { "name": "DOOM Eternal: Year One Pass", "price": "6.64", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "DOOM: The Dark Ages Premium Upgrade", "price": "23.31", "flag": "🇹🇷", "date": "12.05", "status": " GP" },
  { "name": "DREDGE - Digital Deluxe Edition", "price": "1.74", "flag": "🇳🇬", "date": "13.05", "status": "" },
  { "name": "DREDGE: Complete Edition", "price": "3.67", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "DUCATI - 90th Anniversary", "price": "0.77", "flag": "🇯🇵", "date": "13.05", "status": "" },
  { "name": "Dark Elven Legacy", "price": "0.39", "flag": "🇳🇬", "date": "13.05", "status": "" },
  { "name": "Dark Quest 3", "price": "0.44", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "DayZ Cool Edition", "price": "4.09", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Dead Cells: Medley of Pain Bundle", "price": "2.36", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Dead Cells: Return to Castlevania Bundle", "price": "1.84", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Dead Dragons", "price": "6.46", "flag": "🇯🇵", "date": "13.05", "status": " GP" },
  { "name": "Dead by Daylight - Gold Edition", "price": "9.09", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Dead by Daylight", "price": "6.29", "flag": "🇧🇷", "date": "11.05", "status": "" },
  { "name": "Dead by Daylight: Tokyo Ghoul Edition", "price": "5.23", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Death Road to Canada", "price": "0.36", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Deathly Dangerous", "price": "0.49", "flag": "🇳🇬", "date": "13.05", "status": "" },
  { "name": "Deep Deep Deep Nightmare", "price": "4.2", "flag": "🇧🇷", "date": "09.05", "status": "" },
  { "name": "Deep Rock Galactic - Deluxe Edition", "price": "2.36", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "Deep Rock Galactic - Ultimate Edition", "price": "2.93", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "Deliver At All Costs", "price": "8.16", "flag": "🇸🇦", "date": "21.05", "status": "" },
  { "name": "Diablo III: Eternal Collection", "price": "4.87", "flag": "🇹🇷", "date": "15.05", "status": "" },
  { "name": "Diablo® IV - Expansion Bundle", "price": "48.79", "flag": "🇰🇷", "date": "15.05", "status": "" },
  { "name": "Diablo® IV - Standard Edition", "price": "32.17", "flag": "🇧🇷", "date": "30.12", "status": " GP" },
  { "name": "Diablo® Prime Evil Collection", "price": "2.57", "flag": "🇳🇬", "date": "15.05", "status": "" },
  { "name": "Dinobreak Triassic Torment Collection", "price": "17.99", "flag": "🇮🇳", "date": "13.05", "status": "" },
  { "name": "Disciples: Liberation Digital Deluxe Edition", "price": "1.76", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Discovery Tour: Viking Age", "price": "2.93", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Dishonored®: Death of the Outsider™ Deluxe Bundle", "price": "10.31", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "Disney Dreamlight Valley – Enchanted Edition", "price": "10.39", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Disney Dreamlight Valley – The Storybook Vale Bundle", "price": "7.78", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Dou! - Fast-Paced Platformer Adventure!", "price": "0.07", "flag": "🇹🇷", "date": "16.05", "status": "" },
  { "name": "Dragon Prana", "price": "4.61", "flag": "🇯🇵", "date": "13.05", "status": " GP" },
  { "name": "Dreamland Solitaire", "price": "0.59", "flag": "🇳🇬", "date": "13.05", "status": "" },
  { "name": "Dungeon Drafters", "price": "1.2", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Dungeons 4 - Digital Deluxe Edition", "price": "16.84", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Dustwind - The Last Resort", "price": "0.63", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Dying Light: The Following - Enhanced Edition", "price": "4.24", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "EA SPORTS FC™ 24 Standard Edition Xbox One & Xbox Series X|S", "price": "15.98", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "EA SPORTS™ College Football 26 - Deluxe Edition + Limited Time Bonus", "price": "75.35", "flag": "🇰🇷", "date": "20.06", "status": "" },
  { "name": "EA SPORTS™ Madden NFL 25 Xbox Series X|S & Xbox One Standard Edition", "price": "29.6", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "EA SPORTS™ Madden NFL 26 Deluxe Edition + Limited Time Bonus", "price": "75.35", "flag": "🇰🇷", "date": "25.07", "status": "" },
  { "name": "Eiyuden Chronicle: Hundred Heroes - Digital Deluxe Edition", "price": "10.39", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Elliot", "price": "0.22", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Epic Chef", "price": "0.54", "flag": "🇹🇷", "date": "19.05", "status": "" },
  { "name": "Escape Dead Island", "price": "0.19", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Expeditions: A MudRunner Game - Supreme Edition", "price": "39.37", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "Expeditions: A MudRunner Game - Year 1 Edition", "price": "33.16", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "Explosionade DX", "price": "0.26", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Eyes: The Horror Game", "price": "2.46", "flag": "🇺🇦", "date": "08.05", "status": "" },
  { "name": "F1® 25 Iconic Edition", "price": "64.42", "flag": "🇰🇷", "date": "27.05", "status": "" },
  { "name": "FOR HONOR – Gold Edition", "price": "20.72", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "FOR HONOR – Ultimate Edition", "price": "33.16", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "FRONT MISSION 1st: Remake", "price": "1.28", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "FRONT MISSION 2: Remake", "price": "1.28", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Fable Anniversary", "price": "0.77", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "Fallout 4: Game of the Year Edition (PC)", "price": "5.91", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "Fallout 4: Game of the Year Edition", "price": "5.91", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "Fallout 76: Gleaming Depths Deluxe Edition", "price": "28.99", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Fantasy Dash", "price": "0.07", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Far Cry Classic", "price": "0.19", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Far Cry Primal", "price": "0.91", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Far Cry® 3 Blood Dragon Classic Edition", "price": "1.89", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Far Cry® 3 Classic Edition", "price": "0.79", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Far Cry® 5 + Far Cry® New Dawn Deluxe Edition Bundle", "price": "16.62", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Far Cry® 5 Gold Edition + Far Cry ® New Dawn Deluxe Editi...", "price": "19.07", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Far Cry® 6 Deluxe Edition", "price": "5.02", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Far Cry® 6 Game of the Year Edition", "price": "19.69", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Far Cry® 6 Gold Edition", "price": "5.18", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Far Cry® New Dawn Deluxe Edition", "price": "6.49", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Far Cry®5 Gold Edition", "price": "2.72", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Farm Bundle", "price": "2.36", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Farm Pets Bundle", "price": "3.52", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "FarmKnight Adventures", "price": "4.69", "flag": "🇺🇦", "date": "14.05", "status": "" },
  { "name": "Farming Simulator 22 - Platinum Edition", "price": "5.23", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Farming Simulator 22 - Premium Edition", "price": "6.54", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Farming Simulator 22 PC", "price": "1.83", "flag": "🇳🇬", "date": "08.05", "status": "" },
  { "name": "Farming Simulator 22", "price": "2.74", "flag": "🇳🇬", "date": "08.05", "status": "" },
  { "name": "Farming Simulator 25", "price": "8.45", "flag": "🇪🇬", "date": "08.05", "status": "" },
  { "name": "Fatum Betula", "price": "0.44", "flag": "🇳🇬", "date": "13.05", "status": "" },
  { "name": "Final Shot", "price": "0.59", "flag": "🇳🇬", "date": "13.05", "status": "" },
  { "name": "Fit and Fry (Windows)", "price": "0.29", "flag": "🇹🇷", "date": "15.05", "status": "" },
  { "name": "Fit and Fry (Xbox One)", "price": "0.29", "flag": "🇹🇷", "date": "15.05", "status": "" },
  { "name": "Fit and Fry Xbox + Windows Bundle", "price": "0.62", "flag": "🇹🇷", "date": "15.05", "status": "" },
  { "name": "Fit and Fry Xbox Bundle", "price": "0.47", "flag": "🇹🇷", "date": "15.05", "status": "" },
  { "name": "Fit and Fry", "price": "0.29", "flag": "🇹🇷", "date": "15.05", "status": "" },
  { "name": "Flailing Limbs Bundle", "price": "1.22", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Flint: Treasure of Oblivion", "price": "26.29", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Flintlock – Deluxe Edition", "price": "15.11", "flag": "🇹🇷", "date": "16.01", "status": " GP" },
  { "name": "Flintlock: The Siege of Dawn", "price": "6.74", "flag": "🇹🇷", "date": "06.05", "status": " GP" },
  { "name": "For The King II", "price": "2.08", "flag": "🇳🇬", "date": "13.05", "status": " GP" },
  { "name": "Forza Horizon 5 Deluxe Edition", "price": "10.39", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 PLUS Hot Wheels Bundle", "price": "10.39", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 Premium Add-Ons Bundle", "price": "6.54", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 Premium Edition", "price": "13.07", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport Deluxe Edition", "price": "5.85", "flag": "🇳🇬", "date": "14.05", "status": "" },
  { "name": "Forza Motorsport Premium Add-Ons Bundle", "price": "2.61", "flag": "🇳🇬", "date": "14.05", "status": "" },
  { "name": "Forza Motorsport Premium Edition", "price": "6.54", "flag": "🇳🇬", "date": "14.05", "status": "" },
  { "name": "Forza Motorsport Standard Edition", "price": "4.54", "flag": "🇳🇬", "date": "14.05", "status": "" },
  { "name": "Forza Motorsport and Forza Horizon 5 Premium Add-Ons Bundle", "price": "11.14", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport and Forza Horizon 5 Premium Editions Bundle", "price": "24.77", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Frostpunk: Complete Collection", "price": "2.64", "flag": "🇹🇷", "date": "12.05", "status": " GP" },
  { "name": "Full Throttle Pixel Racing", "price": "1.77", "flag": "🇺🇦", "date": "14.05", "status": "" },
  { "name": "GRADIUS ORIGINS", "price": "25.11", "flag": "🇨🇴", "date": "07.08", "status": "" },
  { "name": "Gale of Windoria", "price": "4.61", "flag": "🇯🇵", "date": "13.05", "status": " GP" },
  { "name": "Garden Bundle", "price": "3.12", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Gas Station Simulator, Airstrip DLC and Party Time DLC Bundle", "price": "1.22", "flag": "🇹🇷", "date": "08.05", "status": "" },
  { "name": "Gears of War Ultimate Edition Deluxe Version", "price": "1.04", "flag": "🇹🇷", "date": "31.05", "status": " GP" },
  { "name": "Generation Zero® - Ultimate Bundle", "price": "5.28", "flag": "🇹🇷", "date": "12.05", "status": " GP" },
  { "name": "Genesis Alpha One Deluxe Edition", "price": "0.72", "flag": "🇹🇷", "date": "19.05", "status": "" },
  { "name": "Geometric Sniper", "price": "0.09", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Ghostwire: Tokyo Deluxe Edition", "price": "16.06", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Goat Simulator 3 - Multiversal Traveler's Edition", "price": "2.36", "flag": "🇹🇷", "date": "12.05", "status": " GP" },
  { "name": "Goat Simulator 3 - Multiversal Traveler's Edition: Xbox One Edition", "price": "2.36", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Goat Simulator: The GOATY", "price": "1.59", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Goat Simulator: Waste Of Space Bundle", "price": "0.88", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Golf With Your Friends - Starter Edition", "price": "16.56", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Golf With Your Friends - Ultimate Edition", "price": "27.96", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Gord - Deluxe Edition", "price": "4.14", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Grand Theft Auto Online", "price": "8.74", "flag": "🇧🇷", "date": "13.05", "status": " GP" },
  { "name": "Grand Theft Auto V (Xbox One & Xbox Series X|S)", "price": "5.12", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Grand Theft Auto V: Premium Edition & Great White Shark C...", "price": "17.7", "flag": "🇧🇷", "date": "13.05", "status": " GP" },
  { "name": "Grand Theft Auto V: Premium Edition", "price": "20.97", "flag": "🇧🇷", "date": "16.10", "status": " GP" },
  { "name": "HITMAN World of Assassination Deluxe Pack", "price": "2.74", "flag": "🇳🇬", "date": "13.05", "status": "" },
  { "name": "HITMAN™ 2", "price": "6.39", "flag": "🇹🇷", "date": "04.02", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ - Game Of The Year Edition - Xbox S...", "price": "8.52", "flag": "🇮🇳", "date": "13.05", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ - Game Of The Year Edition", "price": "8.52", "flag": "🇮🇳", "date": "13.05", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ - Xbox Series X|S", "price": "4.44", "flag": "🇮🇳", "date": "13.05", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™", "price": "4.44", "flag": "🇮🇳", "date": "13.05", "status": "" },
  { "name": "Halo 5: Guardians – Digital Deluxe Edition", "price": "17.1", "flag": "🇹🇷", "date": "31.05", "status": " GP" },
  { "name": "Halo Wars 2: Complete Edition", "price": "20.72", "flag": "🇹🇷", "date": "12.05", "status": " GP" },
  { "name": "Hard West Ultimate Edition", "price": "0.15", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Headbangers: Rhythm Royale", "price": "0.65", "flag": "🇳🇬", "date": "13.05", "status": "" },
  { "name": "Hegzis", "price": "2.55", "flag": "🇮🇳", "date": "08.05", "status": "" },
  { "name": "Heirs of the Kings", "price": "4.61", "flag": "🇯🇵", "date": "13.05", "status": " GP" },
  { "name": "Helix Jump", "price": "2.46", "flag": "🇺🇦", "date": "09.05", "status": "" },
  { "name": "Hell Let Loose - Deluxe Edition", "price": "7.78", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hell Let Loose - Fan Favourites Bundle", "price": "1.8", "flag": "🇸🇦", "date": "13.05", "status": "" },
  { "name": "Hell Let Loose - German Bundle", "price": "1.13", "flag": "🇸🇦", "date": "13.05", "status": "" },
  { "name": "Hell Let Loose - Headgear Bundle", "price": "1.13", "flag": "🇸🇦", "date": "13.05", "status": "" },
  { "name": "Hell Let Loose - Soviet Bundle", "price": "1.13", "flag": "🇸🇦", "date": "13.05", "status": "" },
  { "name": "Hell Let Loose - The Eagle and Pegasus Combo Pack", "price": "0.73", "flag": "🇳🇬", "date": "13.05", "status": "" },
  { "name": "Hell Let Loose - U.S Bundle", "price": "1.13", "flag": "🇸🇦", "date": "13.05", "status": "" },
  { "name": "Hell Let Loose - Ultimate Edition", "price": "4.54", "flag": "🇳🇬", "date": "13.05", "status": "" },
  { "name": "Hi-Fi RUSH Deluxe Edition", "price": "12.43", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Hidden Paws", "price": "0.22", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Hindsight 20/20 - Wrath of the Raakshasa", "price": "0.32", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Hokko Life", "price": "0.77", "flag": "🇹🇷", "date": "19.05", "status": "" },
  { "name": "Horror Gallery", "price": "0.45", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "House Flipper Hairdreser Bundle", "price": "2.05", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Howl", "price": "0.65", "flag": "🇳🇬", "date": "13.05", "status": " GP" },
  { "name": "Huge Moonstone Pack -- 14,500", "price": "13.01", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hunt: Showdown 1896 - Deluxe Edition", "price": "30.78", "flag": "🇮🇳", "date": "16.12", "status": " GP" },
  { "name": "Hunt: Showdown 1896 - Premium Edition", "price": "35.99", "flag": "🇮🇳", "date": "16.12", "status": " GP" },
  { "name": "Hunt: Showdown 1896 - Starter Edition", "price": "20.59", "flag": "🇮🇳", "date": "16.12", "status": " GP" },
  { "name": "Hypnospace Outlaw & Slayers X: Terminal Aftermath: Vengance of the Slayer Bundle", "price": "1.97", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "INSIDE & LIMBO Bundle", "price": "3.36", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Ice Cream Surfer", "price": "0.14", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Ikkarus and the Prince of Sin", "price": "3.23", "flag": "🇧🇷", "date": "13.05", "status": " GP" },
  { "name": "Immortals Fenyx Rising™ Gold Edition", "price": "9.39", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Immortals of Aveum™ Deluxe Edition", "price": "29.3", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "Indiana Jones and the Great Circle™: Digital Premium Upgrade", "price": "8.16", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Infected Cowboys Bundle", "price": "10.51", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Injustice™ 2 - Legendary Edition", "price": "4.4", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Insectum - Epic Battles of Bugs", "price": "0.22", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Into The Sky", "price": "0.37", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Into the Restless Ruins", "price": "1.74", "flag": "🇳🇬", "date": "15.05", "status": "" },
  { "name": "Isonzo: Collector's Edition", "price": "5.85", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Isonzo: Deluxe Edition", "price": "2.36", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Isonzo: Ultimate Edition", "price": "57.69", "flag": "🇰🇷", "date": "16.06", "status": " GP" },
  { "name": "Jeopardy!", "price": "1.71", "flag": "🇧🇷", "date": "13.05", "status": " GP" },
  { "name": "Journey of Johann: Grasslands (Windows)", "price": "0.25", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Journey of Johann: Grasslands (Xbox One)", "price": "0.25", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Journey of Johann: Grasslands", "price": "0.25", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Journey to Kreisia", "price": "5.99", "flag": "🇯🇵", "date": "13.05", "status": " GP" },
  { "name": "Jurassic World Evolution 2: Deluxe Edition", "price": "9.79", "flag": "🇪🇬", "date": "16.05", "status": " GP" },
  { "name": "Jurassic World Evolution 2: Dominion Bundle", "price": "11.21", "flag": "🇪🇬", "date": "16.05", "status": " GP" },
  { "name": "Just Dance 2018", "price": "0.0", "flag": "🇮🇸", "date": "", "status": "" },
  { "name": "Just Dance 2025 Ultimate Edition", "price": "36.94", "flag": "🇮🇳", "date": "13.05", "status": " GP" },
  { "name": "KLONOA Phantasy Reverie Series: Special Bundle", "price": "1.15", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Kargast", "price": "0.44", "flag": "🇳🇬", "date": "13.05", "status": "" },
  { "name": "Killer Frequency", "price": "1.13", "flag": "🇳🇬", "date": "13.05", "status": " GP" },
  { "name": "Killing Floor 2 - Ultimate Edition", "price": "4.05", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Killing Floor 2", "price": "0.67", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Kingdom Come: Deliverance - Royal Edition", "price": "18.05", "flag": "🇧🇷", "date": "16.01", "status": " GP" },
  { "name": "Kingdom Come: Deliverance", "price": "1.04", "flag": "🇹🇷", "date": "16.01", "status": " GP" },
  { "name": "Kingdom Come: Deliverance", "price": "18.94", "flag": "🇮🇳", "date": "16.01", "status": " GP" },
  { "name": "Kingdom Two Crowns: Essentials Pack", "price": "1.76", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Kingdom Two Crowns: Olympus Edition", "price": "1.53", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Knights & Guns", "price": "0.31", "flag": "🇳🇬", "date": "13.05", "status": "" },
  { "name": "LEGO® Star Wars™: The Skywalker Saga Galactic Edition", "price": "11.21", "flag": "🇪🇬", "date": "01.06", "status": " GP" },
  { "name": "Last Days of Lazarus", "price": "0.44", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Liege Dragon", "price": "4.61", "flag": "🇯🇵", "date": "13.05", "status": "" },
  { "name": "Light & Dark Bundle", "price": "3.73", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Little Bear", "price": "0.39", "flag": "🇳🇬", "date": "13.05", "status": "" },
  { "name": "Loop Hero", "price": "0.48", "flag": "🇳🇬", "date": "13.05", "status": " GP" },
  { "name": "Lords of the Fallen Deluxe Edition", "price": "10.39", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Low Story", "price": "0.17", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Luxury Garden Bundle", "price": "3.52", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "MEGALAN 11 (Xbox Series X|S)", "price": "0.22", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "MEGALAN 11", "price": "0.22", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "MLB® The Show™ 25 - Digital Deluxe Edition", "price": "59.84", "flag": "🇹🇷", "date": "11.05", "status": "" },
  { "name": "MXGP 2019 - The Official Motocross Videogame", "price": "1.99", "flag": "🇦🇺", "date": "13.05", "status": "" },
  { "name": "MXGP PRO", "price": "1.61", "flag": "🇯🇵", "date": "13.05", "status": "" },
  { "name": "Madden NFL 19", "price": "27.52", "flag": "🇨🇴", "date": "30.12", "status": "" },
  { "name": "Mafia II: Definitive Edition", "price": "1.03", "flag": "🇹🇷", "date": "12.05", "status": "" },
  { "name": "Mafia III: Definitive Edition", "price": "1.03", "flag": "🇹🇷", "date": "12.05", "status": "" },
  { "name": "Mafia: Definitive Edition", "price": "1.01", "flag": "🇹🇷", "date": "12.05", "status": "" },
  { "name": "Maze Blaze", "price": "0.07", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "MechWarrior 5: Clans Digital Collectors Edition", "price": "4.69", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "MechWarrior 5: Mercenaries - JumpShip Edition", "price": "4.16", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Meg's Monster", "price": "0.77", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Meow Moments: Celebrating Geeks & Athletes", "price": "0.31", "flag": "🇳🇬", "date": "15.05", "status": "" },
  { "name": "Mexico,1921: A Deep Slumber", "price": "1.17", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Microsoft 365 Family", "price": "0.0", "flag": "🇺🇸", "date": "30.11", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.0", "flag": "🇺🇸", "date": "30.11", "status": "" },
  { "name": "Microsoft Flight Simulator 2024 - Aviator Edition", "price": "89.63", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Microsoft Flight Simulator 2024 - Deluxe Edition", "price": "44.82", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Microsoft Flight Simulator 2024 - Premium Deluxe Edition", "price": "50.62", "flag": "🇺🇦", "date": "30.12", "status": " GP" },
  { "name": "Microsoft Flight Simulator Deluxe 40th Anniversary Edition", "price": "11.7", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Microsoft Flight Simulator Premium Deluxe 40th Anniversar...", "price": "15.56", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Middle-earth™: Shadow of Mordor™ - Game of the Year Edition", "price": "0.4", "flag": "🇹🇷", "date": "09.05", "status": "" },
  { "name": "Middle-earth™: Shadow of War™ Definitive Edition", "price": "1.17", "flag": "🇳🇬", "date": "09.05", "status": "" },
  { "name": "Middle-earth™: The Shadow Bundle", "price": "12.41", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle - Windows 10", "price": "1.31", "flag": "🇹🇷", "date": "12.05", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle", "price": "1.31", "flag": "🇹🇷", "date": "12.05", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate Edition for Windows", "price": "5.61", "flag": "🇪🇬", "date": "12.05", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate Edition", "price": "5.23", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Minecraft Legends Deluxe Edition", "price": "6.54", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Minecraft Triple Bundle", "price": "30.93", "flag": "🇺🇦", "date": "", "status": "" },
  { "name": "Minecraft: Deluxe Collection", "price": "3.92", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Minigolf Adventure", "price": "0.09", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Mists of Noyah", "price": "0.91", "flag": "🇳🇬", "date": "13.05", "status": " GP" },
  { "name": "Mob Control: Complete Edition", "price": "3.47", "flag": "🇺🇦", "date": "09.05", "status": "" },
  { "name": "Monster Energy Supercross - The Official Videogame 3", "price": "0.72", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Monster Energy Supercross 3 - Special Edition", "price": "3.26", "flag": "🇮🇳", "date": "13.05", "status": "" },
  { "name": "Moonlighter: Complete Edition", "price": "1.4", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Mortal Kombat 11 Ultimate + Injustice 2 Leg. Edition Bundle", "price": "17.8", "flag": "🇹🇷", "date": "16.12", "status": " GP" },
  { "name": "Mortal Kombat 11 Ultimate", "price": "8.27", "flag": "🇹🇷", "date": "16.12", "status": " GP" },
  { "name": "Mortal Kombat™ 1: Khaos Reigns Kollection", "price": "22.27", "flag": "🇮🇳", "date": "15.05", "status": "" },
  { "name": "MotoGP™18", "price": "1.73", "flag": "🇯🇵", "date": "13.05", "status": "" },
  { "name": "Mount & Blade II: Bannerlord - Digital Companion", "price": "0.78", "flag": "🇳🇬", "date": "13.05", "status": "" },
  { "name": "Mount & Blade II: Bannerlord Digital Deluxe Edition", "price": "7.78", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Moving Out 2 - Deluxe Edition", "price": "4.29", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Mr. T-Shirt", "price": "0.39", "flag": "🇳🇬", "date": "13.05", "status": "" },
  { "name": "Mutant Year Zero: Road to Eden - Deluxe Edition", "price": "0.99", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "My Friend Peppa Pig - Complete Edition", "price": "6.32", "flag": "🇪🇬", "date": "01.07", "status": " GP" },
  { "name": "My Time at Sandrock Deluxe Edition", "price": "2.93", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Mystic Pathways (Windows)", "price": "0.29", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "Mystic Pathways (Xbox One)", "price": "0.29", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "Mystic Pathways Xbox + Windows Bundle", "price": "0.62", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "Mystic Pathways Xbox Bundle", "price": "0.47", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "Mystic Pathways", "price": "0.29", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "NBA 2K25 Tournament Edition", "price": "13.7", "flag": "🇰🇷", "date": "13.05", "status": " GP" },
  { "name": "NHL® 24 Standard Edition Xbox One", "price": "18.94", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "NHL® 24 Standard Edition Xbox Series X|S", "price": "21.31", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "NHL® 25 Standard Edition + Loyalty Offer", "price": "23.68", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "NINJA GAIDEN: Master Collection Deluxe Edition", "price": "6.22", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Neon Abyss Deluxe Edition", "price": "1.63", "flag": "🇹🇷", "date": "19.05", "status": "" },
  { "name": "New Tales from the Borderlands: Deluxe Edition", "price": "7.76", "flag": "🇹🇷", "date": "12.05", "status": " GP" },
  { "name": "Nickelodeon All-Star Brawl 2 Deluxe Edition", "price": "9.79", "flag": "🇪🇬", "date": "01.01", "status": " GP" },
  { "name": "Nickelodeon All-Star Brawl 2 Ultimate Edition", "price": "11.21", "flag": "🇪🇬", "date": "01.01", "status": " GP" },
  { "name": "Nico Saves The State", "price": "2.55", "flag": "🇮🇳", "date": "17.05", "status": "" },
  { "name": "Ninja Master Toru (Windows + Xbox)", "price": "0.41", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Ninja Master Toru (Windows)", "price": "0.25", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Ninja Master Toru", "price": "0.25", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.18", "flag": "🇹🇷", "date": "30.05", "status": "" },
  { "name": "Noob - The Factionless", "price": "9.58", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Ori: The Collection", "price": "6.54", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Out of Moves (Windows)", "price": "0.29", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "Out of Moves (Xbox One)", "price": "0.29", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "Out of Moves", "price": "0.29", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "Outbreak: Survival Kit Collection", "price": "32.2", "flag": "🇮🇳", "date": "13.05", "status": "" },
  { "name": "Outbreak: The Full Monty Collection", "price": "35.99", "flag": "🇮🇳", "date": "13.05", "status": "" },
  { "name": "Overcooked! 2 - Gourmet Edition", "price": "1.87", "flag": "🇹🇷", "date": "16.12", "status": " GP" },
  { "name": "Overcooked! 2", "price": "1.29", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "PAC-MAN Mega Tunnel Battle: Chomp Champs", "price": "1.29", "flag": "🇹🇷", "date": "12.05", "status": "" },
  { "name": "PROJECT 13", "price": "0.09", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Paratopic", "price": "0.44", "flag": "🇳🇬", "date": "13.05", "status": "" },
  { "name": "Pathfinder: Wrath of the Righteous", "price": "0.7", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Perfect Ninja Painter 2", "price": "0.27", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Persona 3 Reload Digital Premium Edition", "price": "50.05", "flag": "🇺🇦", "date": "01.07", "status": " GP" },
  { "name": "Pets Bundle", "price": "2.64", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Phantom Breaker: Omnia", "price": "0.36", "flag": "🇪🇬", "date": "13.05", "status": " GP" },
  { "name": "Phoenix Point: Behemoth Edition", "price": "1.76", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Pit People", "price": "0.6", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "PlateUp!", "price": "0.78", "flag": "🇳🇬", "date": "13.05", "status": " GP" },
  { "name": "Prey®: Digital Deluxe Edition", "price": "23.67", "flag": "🇮🇳", "date": "11.03", "status": " GP" },
  { "name": "Prince of Persia™: The Lost Crown - Complete Edition", "price": "16.84", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Prototype® Biohazard Bundle", "price": "1.17", "flag": "🇹🇷", "date": "15.05", "status": "" },
  { "name": "Prototype®2", "price": "0.91", "flag": "🇹🇷", "date": "15.05", "status": "" },
  { "name": "Puppet House", "price": "1.42", "flag": "🇳🇬", "date": "13.05", "status": " GP" },
  { "name": "Pure Farming 2018", "price": "1.03", "flag": "🇧🇷", "date": "13.05", "status": " GP" },
  { "name": "PuzzleCar", "price": "0.12", "flag": "🇹🇷", "date": "17.05", "status": "" },
  { "name": "RAGE 2: Deluxe Edition", "price": "9.33", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "REDO!", "price": "0.5", "flag": "🇳🇬", "date": "13.05", "status": "" },
  { "name": "RESIDENT EVIL 2 Deluxe Edition", "price": "25.45", "flag": "🇵🇭", "date": "16.09", "status": " GP" },
  { "name": "RIDE 3 - Gold Edition", "price": "4.68", "flag": "🇰🇷", "date": "13.05", "status": "" },
  { "name": "RIDE 3", "price": "2.51", "flag": "🇰🇷", "date": "13.05", "status": "" },
  { "name": "Rabbids Invasion : The Interactive TV Show", "price": "0.35", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Razerwire: Nanowars", "price": "0.12", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "ReCore", "price": "2.61", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Rebel Transmute", "price": "0.87", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Recall: Empty Wishes", "price": "0.88", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Recycle Bin Battle", "price": "0.84", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Red Dead Online", "price": "8.74", "flag": "🇧🇷", "date": "13.05", "status": " GP" },
  { "name": "Red Dead Redemption & Red Dead Redemption 2 Bundle", "price": "34.97", "flag": "🇧🇷", "date": "13.05", "status": " GP" },
  { "name": "Regular Moonstone Pack -- 2,500", "price": "2.43", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Remnant II - Deluxe Edition", "price": "8.45", "flag": "🇪🇬", "date": "01.06", "status": " GP" },
  { "name": "Remnant II - Ultimate Edition", "price": "9.79", "flag": "🇪🇬", "date": "01.06", "status": " GP" },
  { "name": "Riders Republic™ 360 Edition", "price": "26.94", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Riders Republic™ Complete Edition", "price": "36.27", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Riders Republic™ Skate Edition", "price": "20.72", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Rise Eterna War", "price": "0.19", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Risk of Rain 2 + Survivors of the Void + Seekers of the Storm Bundle", "price": "20.0", "flag": "🇲🇽", "date": "12.05", "status": " GP" },
  { "name": "Road 96: Mile 0 – Full Journey Bundle", "price": "3.49", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Robotry!", "price": "0.65", "flag": "🇳🇬", "date": "13.05", "status": " GP" },
  { "name": "Rodent Warriors", "price": "0.22", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Roman Rumble in Las Vegum - Asterix & Obelix XXL 2", "price": "2.15", "flag": "🇨🇱", "date": "13.05", "status": " GP" },
  { "name": "S.T.A.L.K.E.R. 2: Heart of Chornobyl Deluxe Edition – Xbox Edition", "price": "39.37", "flag": "🇹🇷", "date": "16.11", "status": " GP" },
  { "name": "S.T.A.L.K.E.R. 2: Heart of Chornobyl Ultimate Edition", "price": "51.81", "flag": "🇹🇷", "date": "16.11", "status": " GP" },
  { "name": "SC Cat Games Bundle (Windows + Xbox)", "price": "0.61", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "SC Cat Games Bundle (Xbox Only)", "price": "0.41", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "SCARLET NEXUS Ultimate Upgrade Pack", "price": "1.04", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "SHINOBI: Art of Vengeance Digital Deluxe Edition", "price": "19.41", "flag": "🇹🇼", "date": "26.08", "status": "" },
  { "name": "SHINOBI: Art of Vengeance", "price": "14.63", "flag": "🇹🇼", "date": "29.08", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "10.91", "flag": "🇹🇷", "date": "31.12", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "7.21", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "SUNSOFT is Back! Retro Game Selection", "price": "3.23", "flag": "🇧🇷", "date": "13.05", "status": " GP" },
  { "name": "SUPERHOT ONE OF US BUNDLE", "price": "1.84", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "SWORD ART ONLINE Alicization Lycoris", "price": "1.16", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "SWORD ART ONLINE: FATAL BULLET", "price": "0.74", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Scrabble", "price": "5.42", "flag": "🇨🇦", "date": "13.05", "status": " GP" },
  { "name": "Sea of Thieves", "price": "4.98", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Sea of Thieves: 2025 Deluxe Edition", "price": "6.22", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Sea of Thieves: 2025 Premium Edition", "price": "7.41", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Sea of Thieves: X Edition", "price": "9.9", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Seek Hearts", "price": "4.61", "flag": "🇯🇵", "date": "13.05", "status": "" },
  { "name": "Shadow of the orient", "price": "0.37", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Shadowblade Odyssey", "price": "0.07", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "Shadows: Awakening", "price": "0.55", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Ship of Fools - Aquapocalypse Edition", "price": "8.6", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Shy Cats Hidden Orchestra", "price": "0.52", "flag": "🇳🇬", "date": "13.05", "status": "" },
  { "name": "Sid Meier’s Civilization® VI Anthology", "price": "6.72", "flag": "🇹🇷", "date": "12.05", "status": " GP" },
  { "name": "Sigi - A Fart for Melusina", "price": "0.21", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Sin Slayers: Enhanced Edition", "price": "0.52", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Skyrim Anniversary Edition + Fallout 4 G.O.T.Y Bundle", "price": "16.58", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Small Moonstone Pack -- 1,200", "price": "1.24", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Sniper Elite: Resistance Deluxe Edition", "price": "11.7", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "SnowRunner - 1-Anniversary Edition", "price": "6.22", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "SnowRunner - 2-Year Anniversary Edition", "price": "26.94", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "SnowRunner - 3-Year Anniversary Edition", "price": "33.16", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "SnowRunner - 4-Year Anniversary Edition", "price": "39.37", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Songs of Silence", "price": "6.26", "flag": "🇺🇦", "date": "13.05", "status": " GP" },
  { "name": "Source of Madness", "price": "0.4", "flag": "🇳🇬", "date": "13.05", "status": "" },
  { "name": "South Park™: The Fractured but Whole™ - Gold Edition", "price": "26.94", "flag": "🇹🇷", "date": "16.10", "status": " GP" },
  { "name": "South Park™: The Fractured but Whole™", "price": "5.63", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "South of Midnight Premium Upgrade Edition", "price": "4.38", "flag": "🇺🇦", "date": "31.12", "status": " GP" },
  { "name": "Sparkle Bundle", "price": "0.85", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Spectrolite - Speed Life", "price": "0.21", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Spirit of the North 2", "price": "3.33", "flag": "🇳🇬", "date": "08.05", "status": "" },
  { "name": "Spyro™ + Crash Remastered Game Bundle", "price": "10.53", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Spyro™ Reignited Trilogy", "price": "2.99", "flag": "🇹🇷", "date": "15.05", "status": "" },
  { "name": "Star Overdrive Deluxe Edition Pre-Order", "price": "9.52", "flag": "🇲🇽", "date": "19.06", "status": "" },
  { "name": "Star Overdrive Pre-Order Standard Edition", "price": "8.71", "flag": "🇲🇽", "date": "19.06", "status": "" },
  { "name": "Star Trek: Legends - Complete Edition", "price": "0.57", "flag": "🇳🇬", "date": "13.05", "status": " GP" },
  { "name": "Starfield Premium Edition Upgrade", "price": "4.9", "flag": "🇪🇬", "date": "13.05", "status": " GP" },
  { "name": "Starfield Premium Edition", "price": "14.06", "flag": "🇪🇬", "date": "30.12", "status": " GP" },
  { "name": "Starlink: Battle for Atlas™", "price": "5.63", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Starward Rogue", "price": "2.43", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Starward Rogue: Complete Edition", "price": "3.19", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "SteamWorld Build & Dig Bundle", "price": "4.54", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "SteamWorld Build Deluxe Edition", "price": "4.29", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Steel Seed", "price": "4.44", "flag": "🇳🇬", "date": "14.05", "status": "" },
  { "name": "Stellaris: Console Edition - Deluxe Edition", "price": "3.55", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Stellaris: Console Edition - Starter Edition", "price": "6.54", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Strategic Mind: Spirit of Liberty", "price": "2.9", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Strong Moon", "price": "0.19", "flag": "🇳🇬", "date": "13.05", "status": "" },
  { "name": "Sudocats", "price": "0.13", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Sunbeam Feast", "price": "0.39", "flag": "🇳🇬", "date": "13.05", "status": "" },
  { "name": "Sunset Overdrive Deluxe Edition", "price": "1.44", "flag": "🇹🇷", "date": "12.05", "status": " GP" },
  { "name": "Super Cyborg", "price": "0.15", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Super Forklift 3000 (Windows)", "price": "0.45", "flag": "🇳🇬", "date": "13.05", "status": "" },
  { "name": "Super Forklift 3000 (Xbox Series)", "price": "0.45", "flag": "🇳🇬", "date": "13.05", "status": "" },
  { "name": "Super Forklift 3000 Pack", "price": "1.26", "flag": "🇳🇬", "date": "13.05", "status": "" },
  { "name": "Super Forklift 3000", "price": "0.45", "flag": "🇳🇬", "date": "13.05", "status": "" },
  { "name": "Super Pixel Kid Adventure", "price": "0.07", "flag": "🇹🇷", "date": "17.05", "status": "" },
  { "name": "Super Trunko Go", "price": "0.15", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Taiko no Tatsujin: Rhythm Festival Taiko Music Pass", "price": "0.0", "flag": "🇳🇬", "date": "30.11", "status": "" },
  { "name": "Tails of Iron 2: Whiskers of Winter - Deluxe Edition", "price": "12.85", "flag": "🇹🇷", "date": "30.05", "status": "" },
  { "name": "Tails of Iron 2: Whiskers of Winter", "price": "10.67", "flag": "🇹🇷", "date": "30.05", "status": "" },
  { "name": "Tales from the Borderlands", "price": "2.8", "flag": "🇹🇷", "date": "12.05", "status": " GP" },
  { "name": "Tales of Vesperia™: Definitive Edition", "price": "1.09", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Tchia: Oléti Edition", "price": "7.25", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Teenage Mutant Ninja Turtles: Shredder's Revenge - Ultimate Edition", "price": "4.29", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Temple of Horror", "price": "0.45", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Tesla Force", "price": "0.43", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Tesla vs Lovecraft", "price": "0.35", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "The Bard's Tale Trilogy", "price": "0.65", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "The Callisto Protocol™ for Xbox One – Digital Deluxe Edition", "price": "15.02", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "The Callisto Protocol™ for Xbox Series X|S – Digital Delu...", "price": "17.61", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "The Crew® 2 Gold Edition", "price": "11.17", "flag": "🇬🇧", "date": "13.05", "status": " GP" },
  { "name": "The Elder Scrolls III: Morrowind", "price": "1.01", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "The Elder Scrolls Online Collection: Gold Road", "price": "30.05", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Elder Scrolls Online Deluxe Collection: Gold Road", "price": "42.48", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Elder Scrolls Online: 2025 Premium Edition", "price": "48.7", "flag": "🇹🇷", "date": "08.05", "status": " GP" },
  { "name": "The Elder Scrolls V: Skyrim Anniversary Edition", "price": "9.95", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Enigma Machine", "price": "0.23", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "The Escapists: Supermax Edition", "price": "1.59", "flag": "🇹🇷", "date": "29.04", "status": "" },
  { "name": "The Escapists: The Walking Dead", "price": "0.3", "flag": "🇹🇷", "date": "19.05", "status": "" },
  { "name": "The Evil Within Digital Bundle", "price": "2.1", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Fairy's Secret", "price": "6.15", "flag": "🇮🇳", "date": "10.05", "status": "" },
  { "name": "The Hellblade Bundle", "price": "10.11", "flag": "🇪🇬", "date": "30.12", "status": " GP" },
  { "name": "The Incredible Adventures of Van Helsing II: Extended Edition", "price": "0.13", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "The Incredible Adventures of Van Helsing III", "price": "0.1", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "The Incredible Adventures of Van Helsing: Extended Edition", "price": "0.13", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "The Jackbox Party Quadpack", "price": "5.54", "flag": "🇹🇷", "date": "31.12", "status": "" },
  { "name": "The Ouroboros King", "price": "0.3", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "The Quarry - Deluxe Edition", "price": "3.07", "flag": "🇹🇷", "date": "12.05", "status": " GP" },
  { "name": "The Sinking City – Necronomicon Edition", "price": "0.78", "flag": "🇳🇬", "date": "13.05", "status": " GP" },
  { "name": "The Sinking City", "price": "0.65", "flag": "🇳🇬", "date": "13.05", "status": " GP" },
  { "name": "The Smile Alchemist", "price": "5.38", "flag": "🇯🇵", "date": "13.05", "status": " GP" },
  { "name": "The Smurfs - Mission Vileaf", "price": "4.79", "flag": "🇮🇳", "date": "13.05", "status": " GP" },
  { "name": "The Smurfs 2 : The Prisoner of the Green Stone", "price": "9.58", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "The Witch's House MV", "price": "0.44", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "This War of Mine - Complete Edition", "price": "1.58", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "Tip Top: Don’t fall! (Xbox Series X|S)", "price": "0.19", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Tip Top: Don’t fall!", "price": "0.19", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "To Leave", "price": "0.29", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Gold Edition", "price": "4.14", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Tom Clancy's Rainbow Six® Extraction United Bundle", "price": "12.43", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Ultimate Edition", "price": "2.74", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Year 2 Gold Edition", "price": "8.29", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Tom Clancy’s Rainbow Six Siege Operator Edition", "price": "26.94", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Tom Clancy’s Rainbow Six Siege Ultimate Edition", "price": "33.16", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Tomb Raider: Definitive Survivor Trilogy", "price": "18.02", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Tony Hawk's™ Pro Skater™ 1 + 2 - Cross-Gen Deluxe Bundle", "price": "3.32", "flag": "🇹🇷", "date": "15.05", "status": "" },
  { "name": "TopSpin 2K25 Deluxe Edition", "price": "21.36", "flag": "🇹🇷", "date": "12.05", "status": " GP" },
  { "name": "Totally Reliable Delivery Service Deluxe Edition", "price": "1.4", "flag": "🇹🇷", "date": "01.12", "status": " GP" },
  { "name": "Totally Spies! - Cyber Mission", "price": "2.69", "flag": "🇨🇴", "date": "13.05", "status": " GP" },
  { "name": "Towerborne - 1,000 Belfry Bucks", "price": "5.42", "flag": "🇺🇦", "date": "30.12", "status": " GP" },
  { "name": "Towerborne - 2,000 (+200 Bonus) Belfry Bucks", "price": "10.94", "flag": "🇺🇦", "date": "30.12", "status": " GP" },
  { "name": "Towerborne - 5,000 (+1000 Bonus) Belfry Bucks", "price": "27.84", "flag": "🇺🇦", "date": "30.12", "status": " GP" },
  { "name": "Towerborne - 500 Belfry Bucks", "price": "2.76", "flag": "🇺🇦", "date": "30.12", "status": " GP" },
  { "name": "Trailmakers: Booster Edition", "price": "2.05", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers: Deluxe Edition", "price": "2.93", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers: Ultimate Edition", "price": "3.52", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Trash Quest", "price": "0.13", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Troopers", "price": "3.55", "flag": "🇺🇦", "date": "15.05", "status": "" },
  { "name": "Turnip Boy Robs a Bank Pre-Release", "price": "0.88", "flag": "🇹🇷", "date": "15.07", "status": " GP" },
  { "name": "Two Falls (Nishu Takuatshina)", "price": "16.3", "flag": "🇪🇺", "date": "16.05", "status": "" },
  { "name": "UFC® 5 Standard Edition", "price": "26.64", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "UFC® 5 Ultimate Edition", "price": "33.49", "flag": "🇰🇷", "date": "03.06", "status": "" },
  { "name": "Ultracore", "price": "2.41", "flag": "🇺🇦", "date": "13.05", "status": " GP" },
  { "name": "Undead Horde 2: Necropolis", "price": "0.43", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Undead Horde", "price": "0.43", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Undivine", "price": "1.18", "flag": "🇳🇬", "date": "08.05", "status": "" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "1.06", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Verlore Tyd en Drome - Bundle", "price": "0.15", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Vermintide - Digital Value Pack", "price": "2.28", "flag": "🇹🇷", "date": "07.03", "status": "" },
  { "name": "Vikings - Wolves of Midgard", "price": "0.55", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "8.16", "flag": "🇹🇷", "date": "30.08", "status": "" },
  { "name": "Warhammer 40,000: Darktide - Imperial Edition", "price": "9.34", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Warhammer 40,000: Rogue Trader - Deluxe Edition", "price": "9.08", "flag": "🇪🇬", "date": "16.08", "status": " GP" },
  { "name": "Warhammer 40,000: Rogue Trader - Voidfarer Edition", "price": "14.06", "flag": "🇪🇬", "date": "16.08", "status": " GP" },
  { "name": "Wasteland 3 (PC) Colorado Collection", "price": "6.54", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Wasteland 3 Colorado Collection", "price": "9.1", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "Watch Dogs: Legion - Deluxe Edition", "price": "13.99", "flag": "🇹🇷", "date": "12.05", "status": " GP" },
  { "name": "Watch Dogs®2 - Deluxe Edition", "price": "29.38", "flag": "🇧🇷", "date": "12.05", "status": " GP" },
  { "name": "Watch Dogs®: Legion Ultimate Edition", "price": "19.69", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "We Happy Few Digital Deluxe", "price": "6.58", "flag": "🇹🇷", "date": "12.05", "status": " GP" },
  { "name": "We Love Katamari REROLL+ Royal Reverie Special Edition", "price": "5.35", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "We Were Here Together", "price": "0.65", "flag": "🇳🇬", "date": "13.05", "status": "" },
  { "name": "We. The Revolution", "price": "0.39", "flag": "🇳🇬", "date": "13.05", "status": "" },
  { "name": "Weapon of Choice DX", "price": "0.26", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Weedcraft Inc + Ruinarch - Devil Lettuce Bundle", "price": "5.56", "flag": "🇹🇷", "date": "13.05", "status": "" },
  { "name": "Weird West", "price": "0.78", "flag": "🇳🇬", "date": "13.05", "status": " GP" },
  { "name": "West Escape: Complete Edition", "price": "4.91", "flag": "🇺🇦", "date": "09.05", "status": "" },
  { "name": "What comes after", "price": "0.47", "flag": "🇹🇷", "date": "08.05", "status": "" },
  { "name": "Who Wants to Be a Millionaire? - Complete Edition", "price": "13.6", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Wolfenstein: Alt History Collection", "price": "10.36", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Wolfenstein: Youngblood Deluxe Edition", "price": "4.53", "flag": "🇹🇷", "date": "17.02", "status": " GP" },
  { "name": "Wolfenstein® II: The New Colossus™ Digital Deluxe Edition", "price": "6.22", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "Wolfenstein®: The Two-Pack", "price": "3.29", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "World War Z: Aftermath - Deluxe Edition", "price": "13.47", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Worms Rumble", "price": "0.39", "flag": "🇳🇬", "date": "13.05", "status": "" },
  { "name": "Wreckfest Complete Edition", "price": "19.23", "flag": "🇧🇷", "date": "16.11", "status": " GP" },
  { "name": "XCOM® 2 Digital Deluxe Edition", "price": "0.82", "flag": "🇹🇷", "date": "12.05", "status": " GP" },
  { "name": "XCOM® 2", "price": "0.31", "flag": "🇹🇷", "date": "12.05", "status": " GP" },
  { "name": "XCOM®: Enemy Within", "price": "0.49", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "[PROTOTYPE®]", "price": "0.77", "flag": "🇹🇷", "date": "15.05", "status": "" },
  { "name": "despelote", "price": "1.74", "flag": "🇳🇬", "date": "14.05", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Ultimate Hunting Bundle", "price": "43.8", "flag": "🇮🇳", "date": "12.05", "status": " GP" },
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
  let a = 0;
  const value = Number(arg_input.value)
  a = resSwitсhArg(value)
  const valuePercent = value * 1.7
  const rub = valuePercent * usd
  const res = rub + a
  arg_output.innerHTML = floor(res.toFixed())
  arg_output2.innerHTML = floor(res.toFixed()) + 50
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

  if (value <= 0.2) {
    a = 300
  } else if (value > 0.2 && value <= 1) {
    a = 380
  } else if (value > 1 && value <= 3) {
    a = 400
  } else if (value > 3 && value <= 5) {
    a = 400
  } else if (value > 5 && value <= 10) {
    a = 350
  } else if (value > 10 && value <= 15) {
    a = 450
  } else if (value > 15 && value <= 20) {
    a = 450
  } else if (value > 20 && value <= 25) {
    a = 550
  } else if (value > 25) {
    a = 500
  }
  return a
}


function resSwitсhTr(value) {
  let a;

  if (value <= 1) {
    a = 110
  } else if (value > 1 && value <= 5) {
    a = 110
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
  let a = 0;
  const value = Number(price) * 1.7
  a = resSwitсhArg(value)
  const rub = value * usd + 50
  const finishRes = rub + a
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



