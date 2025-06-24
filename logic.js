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
  { "name": "1,100 Quants (incl. 100 Bonus)", "price": "4.54", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "10 Seconds to Win!", "price": "1.87", "flag": "🇮🇳", "date": "01.07", "status": "" },
  { "name": "1000 Ancient Coins - Hidden Trove of the Ancients", "price": "1.6", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "150 Ancient Coins - Secret Stash of the Ancients", "price": "0.32", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "2,400 Quants (incl. 400 Bonus)", "price": "9.08", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "2550 Ancient Coins - Royal Treasury of the Ancients", "price": "3.69", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "4,500 Quants (incl. 1,000 bonus)", "price": "15.9", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "4250 Ancient Coins - Glittering Tribute of the Ancients", "price": "5.58", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "500 Quants", "price": "2.27", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "550 Ancient Coins - Lost Chest of the Ancients", "price": "0.95", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "8Floor Bundle 3 in 1", "price": "0.36", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "8Floor Bundle 4 in 1 part 1", "price": "0.46", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "8Floor Bundle 4 in 1 part 2", "price": "0.46", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "8Floor Bundle 4 in 1 part 3", "price": "0.46", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "8Floor Strategic Collection", "price": "0.57", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "99Vidas", "price": "0.36", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "AMAZE!", "price": "2.77", "flag": "🇰🇷", "date": "01.07", "status": "" },
  { "name": "APICO", "price": "0.64", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "ASTRONEER: Evolution Edition", "price": "0.86", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "ASTRONEER: Glitchwalkers Edition", "price": "4.71", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "ATV Drift & Tricks Definitive Edition", "price": "0.5", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Absolver", "price": "0.19", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Accolade Sports Collection (QUByte Classics)", "price": "7.64", "flag": "🇧🇷", "date": "08.07", "status": "" },
  { "name": "Adore", "price": "4.54", "flag": "🇧🇷", "date": "08.07", "status": "" },
  { "name": "Adventure Tanks", "price": "0.44", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Aery - Dream Land", "price": "0.47", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Agarta", "price": "0.68", "flag": "🇹🇷", "date": "04.07", "status": "" },
  { "name": "Age of Empires 25th Anniversary Collection", "price": "6.86", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Age of Empires: Definitive Collection", "price": "6.06", "flag": "🇹🇷", "date": "05.10", "status": " GP" },
  { "name": "Age of Mythology: Retold Premium Edition", "price": "20.16", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Agents of Mayhem - Total Mayhem Bundle", "price": "0.19", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Airborne Bundle", "price": "1.99", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "All You Need is Help Lively Friends Bundle", "price": "9.75", "flag": "🇺🇦", "date": "01.10", "status": " GP" },
  { "name": "Alone in the Dark", "price": "11.39", "flag": "🇨🇱", "date": "01.07", "status": " GP" },
  { "name": "Alphaset by POWGI", "price": "0.28", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Anima: Gate of Memories", "price": "0.19", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Anno 1800™ Console Edition - Deluxe", "price": "11.61", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Anno 1800™ Console Edition", "price": "9.08", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Aquarium Land", "price": "1.77", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Arcade Paradise | High Score Edition", "price": "3.81", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Assassin's Creed Antiquity Pack", "price": "48.04", "flag": "🇧🇷", "date": "08.07", "status": "" },
  { "name": "Assassin's Creed Legendary Collection", "price": "21.84", "flag": "🇧🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed Triple Pack: Black Flag, Unity, Syndicate", "price": "1.78", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Bundle: Assassin's Creed® Valhalla, Ass...", "price": "32.29", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey - DELUXE EDITION", "price": "3.53", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey", "price": "3.03", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Assassin's Creed® Origins - GOLD EDITION", "price": "16.15", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Assassin's Creed® Valhalla Complete Edition", "price": "20.18", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Assassin’s Creed Mirage & Assassin's Creed Valhalla Bundle", "price": "10.82", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Assassin’s Creed® Valhalla + Immortals Fenyx Rising™ Bundle", "price": "50.46", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Assassin’s Creed® Valhalla + Watch Dogs®: Legion Bundle", "price": "5.8", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Atomfall Deluxe Edition", "price": "12.78", "flag": "🇪🇬", "date": "25.06", "status": " GP" },
  { "name": "Autopsy Simulator", "price": "19.23", "flag": "🇳🇿", "date": "09.07", "status": "" },
  { "name": "Avatar: Frontiers of Pandora™ Gold Edition", "price": "15.82", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Aven Colony", "price": "0.63", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Awarded Platformer Bundle", "price": "1.0", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Awesome Zombie Games Bundle", "price": "0.15", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "BATTLETECH Mercenary Collection", "price": "5.15", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "BIOHAZARD RE:2 Z Version デラックスエディション", "price": "27.49", "flag": "🇯🇵", "date": "16.09", "status": " GP" },
  { "name": "Back 4 Blood: Deluxe Edition", "price": "1.6", "flag": "🇪🇬", "date": "01.07", "status": "" },
  { "name": "Bag Hero", "price": "1.08", "flag": "🇳🇬", "date": "04.07", "status": "" },
  { "name": "Barn Finders", "price": "1.63", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Batman: Arkham Knight Premium Edition", "price": "2.62", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Battle Knights", "price": "0.71", "flag": "🇨🇦", "date": "01.07", "status": "" },
  { "name": "Beat 'Em Up Archives (QUByte Classics)", "price": "2.72", "flag": "🇧🇷", "date": "08.07", "status": "" },
  { "name": "Bee Flowers: Save the Garden (Windows)", "price": "0.28", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Bee Flowers: Save the Garden (Xbox One)", "price": "0.28", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Bee Flowers: Save the Garden Windows + Xbox Bundle", "price": "0.45", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Bee Flowers: Save the Garden Xbox Bundle", "price": "0.61", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Bee Flowers: Save the Garden", "price": "0.28", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Before We Leave", "price": "0.68", "flag": "🇳🇬", "date": "01.07", "status": " GP" },
  { "name": "Bem Feito", "price": "1.0", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Ben 10: Power Trip", "price": "2.65", "flag": "🇪🇬", "date": "01.07", "status": "" },
  { "name": "Betomis (Xbox & PC)", "price": "1.56", "flag": "🇮🇳", "date": "01.07", "status": "" },
  { "name": "Beyond Good & Evil 20th Anniversary Edition", "price": "8.83", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Big Moonstone Pack -- 5,500", "price": "5.29", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Bio Inc. Redemption + Crossroads Inn - Doctors and Bartenders Bundle", "price": "4.92", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Bio Inc. Redemption", "price": "2.25", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "BioShock 2 Remastered", "price": "0.72", "flag": "🇹🇷", "date": "30.06", "status": " GP" },
  { "name": "BioShock Infinite: The Complete Edition", "price": "1.15", "flag": "🇹🇷", "date": "30.06", "status": " GP" },
  { "name": "BioShock Remastered", "price": "1.15", "flag": "🇹🇷", "date": "30.06", "status": " GP" },
  { "name": "Black Myth: Wukong Deluxe Edition Upgrade", "price": "5.45", "flag": "🇯🇵", "date": "10.07", "status": "" },
  { "name": "Black Myth: Wukong Digital Deluxe Edition Pre-Order", "price": "37.5", "flag": "🇭🇰", "date": "10.07", "status": "" },
  { "name": "Black Myth: Wukong Pre-Order", "price": "30.37", "flag": "🇭🇰", "date": "10.07", "status": "" },
  { "name": "Blightbound", "price": "0.21", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Borderlands 3: Next Level Edition", "price": "10.07", "flag": "🇹🇷", "date": "30.06", "status": "" },
  { "name": "Borderlands 3: Ultimate Edition", "price": "4.47", "flag": "🇹🇷", "date": "30.06", "status": "" },
  { "name": "Borderlands: The Handsome Collection", "price": "1.63", "flag": "🇹🇷", "date": "30.06", "status": "" },
  { "name": "Bravery and Greed", "price": "0.94", "flag": "🇹🇷", "date": "29.06", "status": "" },
  { "name": "Broforce", "price": "0.21", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Broken Universe - Tower Defense + Cyber Protocol", "price": "0.43", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Brotato & Abyssal Terrors DLC - Bundle", "price": "0.45", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Bulletstorm: Full Clip Edition Duke Nukem Bundle", "price": "0.46", "flag": "🇹🇷", "date": "30.06", "status": " GP" },
  { "name": "Busway Islands - Puzzle", "price": "0.34", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "CONSCRIPT - Deluxe Edition", "price": "1.68", "flag": "🇳🇬", "date": "09.07", "status": "" },
  { "name": "Call of Duty®: Black Ops 6 - Vault Edition", "price": "50.45", "flag": "🇪🇬", "date": "31.12", "status": " GP" },
  { "name": "Call of Duty®: Black Ops 6 - Vault Edition", "price": "69.74", "flag": "🇧🇷", "date": "31.12", "status": " GP" },
  { "name": "Call of the Wild: The Angler™ - Ultimate Fishing Bundle", "price": "9.52", "flag": "🇪🇬", "date": "01.09", "status": " GP" },
  { "name": "Call of the Wild: The Angler™", "price": "0.97", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Candivity", "price": "0.28", "flag": "🇹🇷", "date": "27.06", "status": "" },
  { "name": "Cannon Dancer - Osman", "price": "4.88", "flag": "🇺🇦", "date": "01.07", "status": "" },
  { "name": "Car Vouchers (10)", "price": "1.29", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Car Vouchers (24)", "price": "2.58", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Car Vouchers (4)", "price": "0.64", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Carrion", "price": "0.35", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Castle of no Escape 1+2 Bundle", "price": "0.36", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Castle of no Escape 2", "price": "0.28", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Castle of no Escape", "price": "0.18", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Chess Brain: Dark Troops", "price": "0.27", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Chivalry 2 King's Edition", "price": "8.06", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Chivalry 2 Special Edition", "price": "6.77", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Cities: Skylines - Mayor's Edition", "price": "28.97", "flag": "🇧🇷", "date": "01.04", "status": " GP" },
  { "name": "Citizen Sleeper: Helion Collection", "price": "5.42", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Clair Obscur: Expedition 33 – Deluxe Edition", "price": "21.8", "flag": "🇹🇷", "date": "23.07", "status": " GP" },
  { "name": "Classified: France '44 - Overlord Edition", "price": "17.4", "flag": "🇮🇳", "date": "09.07", "status": "" },
  { "name": "Clockwork Aquario", "price": "1.81", "flag": "🇺🇦", "date": "01.07", "status": "" },
  { "name": "Colorful Colore (for Windows 10)", "price": "0.63", "flag": "🇳🇬", "date": "01.07", "status": "" },
  { "name": "Colorful Colore", "price": "0.32", "flag": "🇳🇬", "date": "01.07", "status": "" },
  { "name": "Commandos: Origins - Deluxe Edition", "price": "39.68", "flag": "🇮🇳", "date": "08.07", "status": " GP" },
  { "name": "Conan Exiles - Complete Edition October 2021", "price": "6.81", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Conan Exiles – Complete Edition", "price": "56.61", "flag": "🇲🇽", "date": "01.07", "status": " GP" },
  { "name": "Construction Simulator - Gold Edition", "price": "4.74", "flag": "🇳🇬", "date": "01.07", "status": " GP" },
  { "name": "Core Keeper (Xbox Series X|S)", "price": "1.9", "flag": "🇳🇬", "date": "01.07", "status": " GP" },
  { "name": "Cozy Grove", "price": "0.43", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Creatures of Ava: Deluxe Edition", "price": "12.62", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Crusader Kings III: Royal Edition", "price": "30.86", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Crypto by POWGI", "price": "0.28", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Ctrl Alt Ego", "price": "6.27", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Cube Airport", "price": "0.18", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Cube Farmer", "price": "0.14", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Cube Railway", "price": "0.18", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Cult of the Lamb: Unholy Edition", "price": "3.03", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Cyber Protocol", "price": "0.18", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "DOOM Anthology", "price": "47.43", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "DOOM Eternal: The Ancient Gods - Part One", "price": "4.29", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "DOOM Eternal: The Ancient Gods - Part Two", "price": "4.29", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "DOOM Eternal: Year One Pass (PC)", "price": "5.89", "flag": "🇺🇦", "date": "01.07", "status": "" },
  { "name": "DOOM Eternal: Year One Pass", "price": "6.47", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "DRAGON BALL XENOVERSE 2 - Special Edition", "price": "6.93", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "DREDGE: Complete Edition", "price": "2.28", "flag": "🇳🇬", "date": "01.07", "status": " GP" },
  { "name": "DYSMANTLE", "price": "0.5", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Dakar Desert Rally - Deluxe Edition", "price": "4.92", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Dakar Desert Rally", "price": "3.25", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "DayZ Cool Edition", "price": "3.99", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Dead Cells: Medley of Pain Bundle", "price": "2.3", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Dead Cells: Return to Castlevania Bundle", "price": "1.79", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Dead Island 2", "price": "12.18", "flag": "🇮🇳", "date": "01.07", "status": " GP" },
  { "name": "Dead by Daylight - Gold Edition", "price": "9.42", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Dead by Daylight: Tokyo Ghoul Edition", "price": "5.42", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Death Elevator", "price": "3.81", "flag": "🇧🇷", "date": "08.07", "status": "" },
  { "name": "Death's Door [Xbox]", "price": "0.35", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Debtor: Enhanced Edition", "price": "0.18", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Deep Deep Deep Nightmare", "price": "4.37", "flag": "🇧🇷", "date": "08.07", "status": "" },
  { "name": "Deep Rock Galactic - Deluxe Edition", "price": "2.3", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "Deep Rock Galactic - Ultimate Edition", "price": "2.85", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "Deep Space Anomaly", "price": "0.18", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Deepest Trench", "price": "0.71", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Deiland: Pocket Planet", "price": "0.67", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Devil Inside Us: Roots of Evil", "price": "1.0", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Dig Deep & Astro Miner", "price": "0.5", "flag": "🇹🇷", "date": "27.06", "status": "" },
  { "name": "Dig Deep", "price": "1.78", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Digimon Survive", "price": "2.64", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Disc Room", "price": "0.27", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Disney Dreamlight Valley – The Storybook Vale Bundle", "price": "8.06", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Dolmenjord - Viking Islands", "price": "0.43", "flag": "🇳🇬", "date": "01.07", "status": "" },
  { "name": "Dou! - Fast-Paced Platformer Adventure!", "price": "0.07", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "DreamWorks All-Star Kart Racing", "price": "5.05", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Duck Detective: The Ghost of Glamping", "price": "0.65", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Dungeons & Dragons Neverwinter Nights 2: Enhanced Edition", "price": "3.66", "flag": "🇳🇬", "date": "15.07", "status": "" },
  { "name": "EA SPORTS FC™ 24 Standard Edition Xbox One & Xbox Series X|S", "price": "15.66", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "EA SPORTS™ Madden NFL 25 Xbox Series X|S & Xbox One Standard Edition", "price": "29.01", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "EA SPORTS™ Madden NFL 26 Deluxe Edition + Limited Time Bonus", "price": "76.63", "flag": "🇰🇷", "date": "25.07", "status": "" },
  { "name": "ELEX II", "price": "22.2", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Eiyuden Chronicle: Hundred Heroes - Digital Deluxe Edition", "price": "10.77", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Elex", "price": "2.01", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Endless Deaths", "price": "0.47", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Enter The Gungeon", "price": "0.27", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Enter x Exit the Gungeon", "price": "0.28", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Envasion", "price": "0.07", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Epic Chef", "price": "0.53", "flag": "🇹🇷", "date": "29.06", "status": "" },
  { "name": "Epic Landscapes Jigsaw for PC & XBOX", "price": "0.21", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Escape Dead Island", "price": "0.19", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Escape Game - FORT BOYARD 2022", "price": "0.64", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Escape Game Fort Boyard", "price": "0.36", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "European + Oceania + Asia + Decorative Packs", "price": "4.24", "flag": "🇳🇬", "date": "01.07", "status": "" },
  { "name": "European + Oceania + Asia", "price": "3.56", "flag": "🇳🇬", "date": "01.07", "status": "" },
  { "name": "Expeditions: A MudRunner Game - Supreme Edition", "price": "38.35", "flag": "🇹🇷", "date": "30.06", "status": "" },
  { "name": "Expeditions: A MudRunner Game - Year 1 Edition", "price": "32.29", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "FAR CRY 4 + FAR CRY PRIMAL BUNDLE", "price": "1.1", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "FAR CRY 4 GOLD EDITION", "price": "3.53", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "FOR HONOR – Ultimate Edition", "price": "32.29", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "FOR HONOR", "price": "1.99", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "FPV Simulator", "price": "3.92", "flag": "🇺🇦", "date": "25.06", "status": "" },
  { "name": "FROGUE", "price": "0.34", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Fallout 76: Gone Fission Deluxe Edition", "price": "38.11", "flag": "🇰🇷", "date": "31.12", "status": " GP" },
  { "name": "Fantasy Dash", "price": "0.07", "flag": "🇹🇷", "date": "04.07", "status": "" },
  { "name": "Far Cry Insanity Bundle", "price": "10.92", "flag": "🇧🇷", "date": "08.07", "status": "" },
  { "name": "Far Cry® 3 Blood Dragon Classic Edition", "price": "1.84", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Far Cry® 5 + Far Cry® New Dawn Deluxe Edition Bundle", "price": "16.19", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Far Cry® 5 Gold Edition + Far Cry ® New Dawn Deluxe Editi...", "price": "18.57", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Far Cry® 6 Deluxe Edition", "price": "15.64", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Far Cry® 6", "price": "3.78", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Far Cry® New Dawn Deluxe Edition", "price": "1.58", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Far Cry® New Dawn", "price": "1.36", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Farm Bundle", "price": "2.3", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Farm Pets Bundle", "price": "3.43", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "FarmKnight Adventures", "price": "3.92", "flag": "🇺🇦", "date": "25.06", "status": "" },
  { "name": "Farming Simulator 22 - Platinum Edition", "price": "5.42", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Farming Simulator 22 - Premium Edition", "price": "6.77", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Fighter Within", "price": "0.34", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "First Responder Simulation Bundle: Police Firefighting", "price": "7.12", "flag": "🇪🇬", "date": "16.11", "status": " GP" },
  { "name": "Flailing Limbs Bundle", "price": "1.19", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Flintlock – Deluxe Edition", "price": "33.55", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Flintlock: The Siege of Dawn", "price": "4.1", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Flower Shop: The Complete Story", "price": "6.95", "flag": "🇮🇳", "date": "09.07", "status": "" },
  { "name": "Flowers by POWGI", "price": "0.28", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Fluffy Cubed", "price": "0.27", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Football Mini Stars", "price": "0.17", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Fort Boyard", "price": "0.27", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Forza Horizon 5 PLUS Hot Wheels Bundle", "price": "10.77", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport and Forza Horizon 5 Premium Add-Ons Bundle", "price": "11.55", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Froggie - A Retro Platformer", "price": "1.87", "flag": "🇮🇳", "date": "01.07", "status": "" },
  { "name": "Frostpunk: Complete Collection", "price": "6.06", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Full Throttle Pixel Racing", "price": "1.48", "flag": "🇺🇦", "date": "25.06", "status": "" },
  { "name": "GOTTA GO FAST: Racing Collection", "price": "5.65", "flag": "🇮🇳", "date": "01.07", "status": "" },
  { "name": "GRADIUS ORIGINS", "price": "25.62", "flag": "🇨🇱", "date": "07.08", "status": "" },
  { "name": "GRIS + Neva Bundle", "price": "3.05", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "GUNBIRD 2", "price": "2.35", "flag": "🇧🇷", "date": "01.07", "status": "" },
  { "name": "Garden Bundle", "price": "5.16", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Garden City Bundle", "price": "0.36", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Garfield Kart Furious Racing", "price": "3.83", "flag": "🇮🇳", "date": "01.07", "status": "" },
  { "name": "Garfield Lasagna Party", "price": "7.0", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Gas Station Simulator and Can Touch This DLC Bundle", "price": "1.06", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Gato Roboto", "price": "0.11", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Gears of War Ultimate Edition Deluxe Version", "price": "1.01", "flag": "🇹🇷", "date": "31.05", "status": " GP" },
  { "name": "Generation Zero® - Ultimate Bundle", "price": "5.15", "flag": "🇹🇷", "date": "01.12", "status": " GP" },
  { "name": "Generation Zero®", "price": "0.82", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Genesis Alpha One Deluxe Edition", "price": "0.7", "flag": "🇹🇷", "date": "29.06", "status": "" },
  { "name": "Genesis Alpha One", "price": "0.69", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Genetic Disaster", "price": "0.21", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Glover (QUByte Classics)", "price": "8.73", "flag": "🇧🇷", "date": "08.07", "status": "" },
  { "name": "Goat Simulator 3 - Multiversal Traveler's Edition", "price": "2.3", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Goat Simulator 3 - Multiversal Traveler's Edition: Xbox One Edition", "price": "2.3", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Goat Simulator: The GOATY", "price": "1.54", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Goat Simulator: Waste Of Space Bundle", "price": "0.86", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "God of Weapons", "price": "1.22", "flag": "🇳🇬", "date": "26.06", "status": "" },
  { "name": "Golden Tee Arcade Classics", "price": "16.52", "flag": "🇺🇦", "date": "16.07", "status": "" },
  { "name": "Golf Up", "price": "0.35", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Gourmet Warriors (QUByte Classics)", "price": "3.02", "flag": "🇺🇦", "date": "08.07", "status": "" },
  { "name": "Grand Theft Auto Online", "price": "8.82", "flag": "🇹🇷", "date": "30.06", "status": " GP" },
  { "name": "Grand Theft Auto V (Xbox One & Xbox Series X|S)", "price": "4.99", "flag": "🇹🇷", "date": "30.06", "status": " GP" },
  { "name": "Grand Theft Auto V: Premium Edition & Great White Shark C...", "price": "18.15", "flag": "🇹🇷", "date": "30.06", "status": " GP" },
  { "name": "Gravel Special Edition", "price": "2.32", "flag": "🇮🇳", "date": "08.07", "status": "" },
  { "name": "Gravel", "price": "1.59", "flag": "🇯🇵", "date": "08.07", "status": "" },
  { "name": "HITMAN™ 2", "price": "6.23", "flag": "🇹🇷", "date": "04.02", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ - Game Of The Year Edition - Xbox S...", "price": "8.35", "flag": "🇮🇳", "date": "08.07", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ - Game Of The Year Edition", "price": "8.35", "flag": "🇮🇳", "date": "08.07", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ - Xbox Series X|S", "price": "4.35", "flag": "🇮🇳", "date": "08.07", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™", "price": "4.35", "flag": "🇮🇳", "date": "08.07", "status": "" },
  { "name": "Halo 5: Guardians – Digital Deluxe Edition", "price": "16.65", "flag": "🇹🇷", "date": "31.05", "status": " GP" },
  { "name": "Halo Wars 2: Complete Edition", "price": "20.18", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Hasbro Family Fun Pack - Super Edition", "price": "1.7", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Hasbro Family Fun Pack", "price": "8.74", "flag": "🇨🇦", "date": "01.07", "status": " GP" },
  { "name": "Hi-Fi RUSH Deluxe Edition", "price": "12.11", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Hidden Shapes: Animals + Lovely Cats", "price": "0.27", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Hidden Shapes: Black Skull + Old West", "price": "0.27", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Hidden Shapes: Cat Realm + Trick or Cats", "price": "1.36", "flag": "🇧🇷", "date": "08.07", "status": "" },
  { "name": "Historical Trilogy", "price": "0.36", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Hokko Life", "price": "0.75", "flag": "🇹🇷", "date": "29.06", "status": "" },
  { "name": "Hole io", "price": "1.81", "flag": "🇵🇭", "date": "01.07", "status": "" },
  { "name": "Hole io: Platinum Edition", "price": "4.83", "flag": "🇵🇭", "date": "01.07", "status": "" },
  { "name": "Homefront®: The Revolution", "price": "0.15", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Hotline Miami Collection", "price": "0.68", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "House Flipper Hairdreser Bundle", "price": "1.99", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "How 2 Escape: Lost Submarine", "price": "5.1", "flag": "🇮🇳", "date": "24.06", "status": "" },
  { "name": "Huge Moonstone Pack -- 14,500", "price": "13.48", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hunt: Showdown 1896 - Premium Edition", "price": "35.27", "flag": "🇮🇳", "date": "07.07", "status": "" },
  { "name": "Hunt: Showdown 1896 - Starter Edition", "price": "20.18", "flag": "🇮🇳", "date": "07.07", "status": "" },
  { "name": "INSIDE & LIMBO Bundle", "price": "3.48", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "ISLANDERS: New Shores - Island Hopping Bundle", "price": "2.04", "flag": "🇪🇬", "date": "10.07", "status": "" },
  { "name": "ISLANDERS: New Shores - The Full Archipelago Bundle", "price": "2.3", "flag": "🇪🇬", "date": "10.07", "status": "" },
  { "name": "ISLANDERS: New Shores - The Scenic Builders Pack", "price": "1.79", "flag": "🇪🇬", "date": "10.07", "status": "" },
  { "name": "ISLANDERS: New Shores", "price": "1.6", "flag": "🇪🇬", "date": "10.07", "status": "" },
  { "name": "Immortals Fenyx Rising™", "price": "5.05", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Immortals of Aveum™ Deluxe Edition", "price": "28.72", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "Indiana Jones and the Great Circle", "price": "38.89", "flag": "🇨🇳", "date": "01.07", "status": " GP" },
  { "name": "Indiana Jones and the Great Circle™: Digital Premium Edition", "price": "44.29", "flag": "🇨🇳", "date": "01.07", "status": " GP" },
  { "name": "Indiana Jones and the Great Circle™: Digital Premium Upgrade", "price": "7.51", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Infernitos (Windows)", "price": "0.25", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Infernitos", "price": "0.25", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Injustice™ 2 - Legendary Edition", "price": "4.29", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Inscryption", "price": "1.08", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Inspector Gadget - MAD Time Party", "price": "8.17", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Insurgency: Sandstorm - Gold Edition", "price": "18.17", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Isonzo: Deluxe Edition", "price": "0.72", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Jagged Alliance: Rage!", "price": "2.15", "flag": "🇧🇷", "date": "01.07", "status": "" },
  { "name": "Johnny Trigger", "price": "2.01", "flag": "🇵🇭", "date": "01.07", "status": "" },
  { "name": "Jumanji: The Video Game", "price": "6.31", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Jurassic World Evolution 2: Deluxe Edition", "price": "9.92", "flag": "🇪🇬", "date": "16.05", "status": " GP" },
  { "name": "Jurassic World Evolution 2: Dominion Bundle", "price": "11.36", "flag": "🇪🇬", "date": "16.05", "status": " GP" },
  { "name": "Just Dance 2018", "price": "0.0", "flag": "🇪🇬", "date": "", "status": "" },
  { "name": "KLONOA Phantasy Reverie Series: Special Bundle", "price": "1.12", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Kaiju Wars", "price": "0.43", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "KarmaZoo", "price": "0.54", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Katana Zero XB1", "price": "0.64", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Keeper's Toll", "price": "3.52", "flag": "🇮🇳", "date": "26.06", "status": "" },
  { "name": "KeyWe", "price": "0.36", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Kingdom Come: Deliverance", "price": "1.01", "flag": "🇹🇷", "date": "16.01", "status": " GP" },
  { "name": "Kingdom Come: Deliverance", "price": "4.64", "flag": "🇮🇳", "date": "01.07", "status": " GP" },
  { "name": "Kingdom Two Crowns: Essentials Pack", "price": "1.72", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Kingdom Two Crowns: Olympus Edition", "price": "1.49", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Kiting Cat (Windows)", "price": "0.25", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Kiting Cat", "price": "0.25", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Knight Quest: Goblins Raid (Windows)", "price": "0.28", "flag": "🇹🇷", "date": "04.07", "status": "" },
  { "name": "Knight Quest: Goblins Raid (Xbox One)", "price": "0.28", "flag": "🇹🇷", "date": "04.07", "status": "" },
  { "name": "Knight Quest: Goblins Raid Xbox + Windows Bundle", "price": "0.45", "flag": "🇹🇷", "date": "04.07", "status": "" },
  { "name": "Knight Quest: Goblins Raid Xbox Bundle", "price": "0.61", "flag": "🇹🇷", "date": "04.07", "status": "" },
  { "name": "Knight Quest: Goblins Raid", "price": "0.28", "flag": "🇹🇷", "date": "04.07", "status": "" },
  { "name": "Koh-Lanta", "price": "0.72", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "L.O.L. Surprise! B.B.s BORN TO TRAVEL™", "price": "2.29", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "LEGO® Star Wars™: The Skywalker Saga Galactic Edition", "price": "11.36", "flag": "🇪🇬", "date": "01.11", "status": " GP" },
  { "name": "LEGO® Star Wars™:The Skywalker Saga Deluxe Edition", "price": "9.92", "flag": "🇪🇬", "date": "01.11", "status": " GP" },
  { "name": "LOLLIPOP CHAINSAW RePOP", "price": "18.83", "flag": "🇹🇼", "date": "01.07", "status": "" },
  { "name": "Light & Dark Bundle", "price": "3.69", "flag": "🇹🇷", "date": "02.11", "status": "" },
  { "name": "Light Up The Room", "price": "0.18", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Light-It Up: Complete Edition", "price": "3.13", "flag": "🇵🇭", "date": "01.07", "status": "" },
  { "name": "Little Noah: Scion of Paradise Special Edition", "price": "0.81", "flag": "🇳🇬", "date": "01.07", "status": "" },
  { "name": "Little Noah: Scion of Paradise", "price": "0.6", "flag": "🇳🇬", "date": "01.07", "status": "" },
  { "name": "Little Strays", "price": "12.95", "flag": "🇯🇵", "date": "05.07", "status": "" },
  { "name": "LoBlocks", "price": "0.11", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Lonely Mountains: Snow Riders - Supporter Bundle", "price": "1.64", "flag": "🇹🇷", "date": "16.01", "status": " GP" },
  { "name": "Looney Tunes: Wacky World of Sports - Deluxe Edition", "price": "15.08", "flag": "🇮🇳", "date": "01.07", "status": "" },
  { "name": "Loop Hero", "price": "0.5", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Lords of the Fallen Deluxe Edition", "price": "10.77", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Lunar Axe", "price": "0.34", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Luxury Garden Bundle", "price": "3.43", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "MARS 2120", "price": "6.36", "flag": "🇧🇷", "date": "08.07", "status": "" },
  { "name": "MINIT", "price": "0.19", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "MX vs ATV Legends", "price": "5.05", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "MXGP 2020 - The Official Motocross Videogame", "price": "2.32", "flag": "🇮🇳", "date": "08.07", "status": "" },
  { "name": "MXGP 24 - Fox Holeshot Edition", "price": "17.63", "flag": "🇮🇳", "date": "01.07", "status": " GP" },
  { "name": "MY LITTLE PONY: A Maretime Bay Adventure", "price": "3.82", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Madden NFL 19", "price": "28.95", "flag": "🇨🇴", "date": "30.12", "status": "" },
  { "name": "Mafia II: Definitive Edition", "price": "1.0", "flag": "🇹🇷", "date": "30.06", "status": " GP" },
  { "name": "Mafia III: Definitive Edition", "price": "1.0", "flag": "🇹🇷", "date": "30.06", "status": " GP" },
  { "name": "Mafia: Definitive Edition", "price": "0.98", "flag": "🇹🇷", "date": "30.06", "status": " GP" },
  { "name": "Mars Survivor: Gold Edition", "price": "4.48", "flag": "🇵🇭", "date": "04.07", "status": "" },
  { "name": "Marvel's Midnight Suns Digital+ Edition for Xbox One", "price": "4.54", "flag": "🇹🇷", "date": "30.06", "status": " GP" },
  { "name": "Marvel's Midnight Suns Digital+ Edition for Xbox Series X|S", "price": "4.54", "flag": "🇹🇷", "date": "30.06", "status": " GP" },
  { "name": "Match Village", "price": "0.34", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "McPixel 3", "price": "0.2", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "MechWarrior 5: Clans Digital Collectors Edition", "price": "2.85", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "MechWarrior 5: Mercenaries - JumpShip Edition", "price": "4.05", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Memory Link", "price": "0.32", "flag": "🇳🇬", "date": "01.07", "status": "" },
  { "name": "Memory Lost", "price": "2.17", "flag": "🇳🇬", "date": "28.06", "status": "" },
  { "name": "Metal Wolf Chaos XD", "price": "0.9", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Metro Exodus", "price": "0.94", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "MetroLand", "price": "0.34", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.0", "flag": "🇺🇸", "date": "30.11", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.0", "flag": "🇺🇸", "date": "30.11", "status": "" },
  { "name": "Microsoft Flight Simulator 2024 - Aviator Edition", "price": "92.89", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Microsoft Flight Simulator 2024 - Deluxe Edition", "price": "46.45", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Microsoft Flight Simulator 2024 - Premium Deluxe Edition", "price": "50.77", "flag": "🇺🇦", "date": "30.12", "status": " GP" },
  { "name": "Microsoft Flight Simulator Deluxe 40th Anniversary Edition", "price": "12.13", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Microsoft Flight Simulator Premium Deluxe 40th Anniversar...", "price": "16.13", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Middle-earth™: Shadow of War™ Definitive Edition", "price": "8.06", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Middle-earth™: The Shadow Bundle", "price": "12.09", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle - Windows 10", "price": "1.28", "flag": "🇹🇷", "date": "27.07", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle", "price": "1.28", "flag": "🇹🇷", "date": "27.07", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate Edition for Windows", "price": "5.68", "flag": "🇪🇬", "date": "27.07", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate Edition", "price": "5.42", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Minecraft Legends Deluxe Edition", "price": "6.77", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Minecraft Triple Bundle", "price": "31.03", "flag": "🇺🇦", "date": "", "status": "" },
  { "name": "Minecraft: Deluxe Collection", "price": "4.06", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Mini Madness", "price": "0.15", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Minos Dungeon (Windows)", "price": "0.28", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Minos Dungeon (Xbox One)", "price": "0.28", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Minos Dungeon Windows + Xbox Bundle", "price": "0.45", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Minos Dungeon Xbox Bundle", "price": "0.61", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Minos Dungeon", "price": "0.28", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Missile Command Delta", "price": "10.97", "flag": "🇺🇦", "date": "07.07", "status": "" },
  { "name": "Mists of Noyah", "price": "0.68", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Mob Control: Gold Edition", "price": "0.34", "flag": "🇹🇷", "date": "27.06", "status": "" },
  { "name": "Monopoly Madness", "price": "1.58", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Monster Energy Supercross - The Official Videogame 6", "price": "3.48", "flag": "🇮🇳", "date": "08.07", "status": "" },
  { "name": "Moon Raider", "price": "0.15", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Moonlighter: Complete Edition", "price": "1.36", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Mortal Kombat 11 Ultimate + Injustice 2 Leg. Edition Bundle", "price": "17.34", "flag": "🇹🇷", "date": "16.12", "status": " GP" },
  { "name": "Mortal Kombat 11 Ultimate", "price": "8.05", "flag": "🇹🇷", "date": "16.12", "status": " GP" },
  { "name": "MotoGP™24", "price": "1.29", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Mount & Blade II: Bannerlord Digital Deluxe Edition", "price": "8.06", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Moving Out 2 - Deluxe Edition", "price": "2.23", "flag": "🇳🇬", "date": "01.07", "status": "" },
  { "name": "Moving Out Deluxe Edition", "price": "1.11", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Musashi vs Cthulhu", "price": "0.34", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Mustache In Hell", "price": "0.34", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "My Friend Pedro", "price": "0.28", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "MyMaitê (for Windows 10)", "price": "0.63", "flag": "🇳🇬", "date": "01.07", "status": "" },
  { "name": "MyMaitê", "price": "0.32", "flag": "🇳🇬", "date": "01.07", "status": "" },
  { "name": "Mystic Pathways (Xbox One)", "price": "0.25", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Mystic Pathways Xbox + Windows Bundle", "price": "0.53", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Mystic Pathways Xbox Bundle", "price": "0.4", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Mystic Pathways", "price": "0.25", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Mythwrecked: Ambrosia Island", "price": "1.44", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "NAPE RETROVERSE COLLECTION", "price": "0.25", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "NASCAR Arcade Rush Project-X Edition", "price": "5.05", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "NBA 2K25 Tournament Edition", "price": "13.92", "flag": "🇮🇳", "date": "30.06", "status": "" },
  { "name": "NHL® 24 Standard Edition Xbox One", "price": "18.56", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "NHL® 24 Standard Edition Xbox Series X|S", "price": "20.88", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "NHL® 25 Standard Edition + Loyalty Offer", "price": "23.2", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "NINJA GAIDEN: Master Collection Deluxe Edition", "price": "6.45", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Neon Abyss Deluxe Edition", "price": "1.59", "flag": "🇹🇷", "date": "29.06", "status": "" },
  { "name": "New Tales from the Borderlands: Deluxe Edition", "price": "7.56", "flag": "🇹🇷", "date": "30.06", "status": " GP" },
  { "name": "Nickelodeon All-Star Brawl 2 Deluxe Edition", "price": "9.92", "flag": "🇪🇬", "date": "01.01", "status": " GP" },
  { "name": "Nickelodeon Kart Racers 3: Slime Speedway", "price": "1.26", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.18", "flag": "🇹🇷", "date": "30.05", "status": "" },
  { "name": "No Heroes Here 2", "price": "0.87", "flag": "🇳🇬", "date": "01.07", "status": "" },
  { "name": "No Straight Roads", "price": "0.45", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "No Sun To Worship", "price": "0.82", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Nuclear Blaze", "price": "0.22", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Observation", "price": "0.27", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Olija", "price": "0.21", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Opaloid Kingdom", "price": "0.18", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Outbreak: Cold Comfort Collection", "price": "27.85", "flag": "🇮🇳", "date": "01.07", "status": "" },
  { "name": "Outbreak: Contagious Memories", "price": "6.6", "flag": "🇮🇳", "date": "01.07", "status": " GP" },
  { "name": "Outbreak: Survival Kit Collection", "price": "31.56", "flag": "🇮🇳", "date": "01.07", "status": " GP" },
  { "name": "Overcooked! 2 - Gourmet Edition", "price": "1.82", "flag": "🇹🇷", "date": "16.12", "status": " GP" },
  { "name": "PAW Patrol Mighty Pups Save Adventure Bay", "price": "2.65", "flag": "🇪🇬", "date": "01.07", "status": "" },
  { "name": "PERISH", "price": "4.73", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "PGA TOUR 2K25 Deluxe Edition", "price": "65.27", "flag": "🇮🇳", "date": "30.06", "status": "" },
  { "name": "Palworld (Game Preview)", "price": "3.05", "flag": "🇳🇬", "date": "01.07", "status": "" },
  { "name": "Pathfinders: Memories", "price": "0.32", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "Pepper Grinder", "price": "1.0", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Persona 3 Reload Digital Deluxe Edition", "price": "40.35", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Persona 3 Reload Digital Premium Edition", "price": "50.2", "flag": "🇺🇦", "date": "01.07", "status": " GP" },
  { "name": "Pets Bundle", "price": "2.3", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Phantom Abyss (Game Preview)", "price": "0.67", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Phoenix Point: Behemoth Edition", "price": "1.72", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Pickleball Smash", "price": "2.02", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Pikuniku", "price": "0.14", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Pile Up! Box by Box", "price": "0.35", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Police Simulator: Patrol Officers: Extended Edition", "price": "4.71", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Police Simulator: Patrol Officers: Gold Edition", "price": "4.62", "flag": "🇪🇬", "date": "01.07", "status": " GP" },
  { "name": "Police Simulator: Patrol Officers: Ultimate Duty Edition", "price": "10.13", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Port Royale 4 - Extended Edition", "price": "1.17", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "PowerWash Simulator – Ultimate Satisfaction Bundle", "price": "34.75", "flag": "🇺🇦", "date": "16.07", "status": " GP" },
  { "name": "Prehistoric Gal", "price": "2.5", "flag": "🇮🇳", "date": "05.07", "status": "" },
  { "name": "Prince of Persia The Lost Crown", "price": "12.62", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Pro Gymnast Simulator", "price": "0.21", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Promenade", "price": "6.31", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Puzzle Bobble™2X/BUST-A-MOVE™2 Arcade Edition & Puzzle Bobble™3/BUST-A-MOVE™3 S-Tribute", "price": "5.69", "flag": "🇮🇸", "date": "01.07", "status": "" },
  { "name": "QUByte Classics: Zero Tolerance Collection by PIKO", "price": "0.68", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "RAGE 2", "price": "1.44", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "RAGE 2: Deluxe Edition", "price": "2.27", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "RESIDENT EVIL 2 Deluxe Edition", "price": "27.74", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "RIDE 4 - Special Edition", "price": "8.35", "flag": "🇮🇳", "date": "08.07", "status": "" },
  { "name": "RIDE 4", "price": "4.93", "flag": "🇰🇷", "date": "08.07", "status": "" },
  { "name": "RISK", "price": "0.35", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Rabbids®: Party of Legends", "price": "2.21", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Raccoo Venture", "price": "1.0", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Rage Of The Dragons NEO", "price": "6.82", "flag": "🇧🇷", "date": "08.07", "status": "" },
  { "name": "Railway Islands - Puzzle", "price": "1.18", "flag": "🇧🇷", "date": "08.07", "status": "" },
  { "name": "Red Dead Online", "price": "8.82", "flag": "🇹🇷", "date": "30.06", "status": " GP" },
  { "name": "Red Dead Redemption & Red Dead Redemption 2 Bundle", "price": "35.31", "flag": "🇹🇷", "date": "30.06", "status": " GP" },
  { "name": "Regular Moonstone Pack -- 2,500", "price": "2.52", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Remoteness", "price": "1.29", "flag": "🇳🇬", "date": "01.07", "status": "" },
  { "name": "Return to Monkey Island", "price": "1.68", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Riders Republic™ 360 Edition", "price": "26.24", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Riders Republic™", "price": "4.42", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Risk of Rain 2 + Survivors of the Void + Seekers of the Storm Bundle", "price": "20.3", "flag": "🇮🇳", "date": "30.06", "status": "" },
  { "name": "Road Defense: Outsiders", "price": "0.47", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Rock 'N Racing Off Road & Rally", "price": "0.23", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Rocket Rats Windows", "price": "0.26", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Rocket Rats Xbox One", "price": "0.26", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Rocket Rats", "price": "0.26", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Rogue Loops", "price": "3.0", "flag": "🇹🇷", "date": "27.06", "status": "" },
  { "name": "Ruiner", "price": "0.14", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Ruinverse", "price": "4.55", "flag": "🇯🇵", "date": "01.07", "status": "" },
  { "name": "S.T.A.L.K.E.R. 2: Heart of Chornobyl Deluxe Edition – Xbox Edition", "price": "38.35", "flag": "🇹🇷", "date": "16.11", "status": " GP" },
  { "name": "S.T.A.L.K.E.R. 2: Heart of Chornobyl Ultimate Edition", "price": "50.46", "flag": "🇹🇷", "date": "16.11", "status": " GP" },
  { "name": "SC Games Triple Bundle", "price": "1.37", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "SCARLET NEXUS Brain Punk Bundle", "price": "0.87", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "SCARLET NEXUS Ultimate Upgrade Pack", "price": "1.01", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "SHINOBI: Art of Vengeance Digital Deluxe Edition", "price": "19.82", "flag": "🇹🇼", "date": "26.08", "status": "" },
  { "name": "SHINOBI: Art of Vengeance", "price": "14.94", "flag": "🇹🇼", "date": "29.08", "status": "" },
  { "name": "SOUTH PARK: SNOW DAY!", "price": "9.78", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "10.63", "flag": "🇹🇷", "date": "31.12", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "7.02", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "STEEP", "price": "0.79", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "SUPERHOT ONE OF US BUNDLE", "price": "1.79", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "SWORD ART ONLINE Fractured Daydream Premium Upgrade", "price": "13.33", "flag": "🇯🇵", "date": "01.07", "status": "" },
  { "name": "Saints Row The Third Remastered", "price": "2.83", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Samurai Aces III: Sengoku Cannon", "price": "2.35", "flag": "🇧🇷", "date": "01.07", "status": "" },
  { "name": "Sausage Wars", "price": "3.22", "flag": "🇵🇭", "date": "26.06", "status": "" },
  { "name": "Sea of Thieves: X Edition", "price": "10.26", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Serious Sam 4", "price": "0.43", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Serious Sam Collection", "price": "0.32", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Serious Sam: Siberian Mayhem", "price": "0.68", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Shape Up", "price": "0.34", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "She Wants Me Dead", "price": "0.15", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Sherlock Holmes Chapter One", "price": "0.91", "flag": "🇳🇬", "date": "01.07", "status": " GP" },
  { "name": "Shinorubi", "price": "0.43", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Shmups Collection", "price": "0.33", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Sid Meier’s Civilization® VI Anthology", "price": "6.55", "flag": "🇹🇷", "date": "30.06", "status": " GP" },
  { "name": "Skautfold: Shrouded in Sanity", "price": "0.26", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Skautfold: Usurper", "price": "0.32", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Skull and Bones Deluxe Edition", "price": "8.65", "flag": "🇰🇷", "date": "01.07", "status": " GP" },
  { "name": "Skull and Bones Premium Edition", "price": "12.17", "flag": "🇰🇷", "date": "08.07", "status": "" },
  { "name": "Sky Survivors", "price": "0.18", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Skyrim Anniversary Edition + Fallout 4 G.O.T.Y Bundle", "price": "16.15", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "SlavicPunk: Oldtimer", "price": "1.47", "flag": "🇳🇬", "date": "01.07", "status": " GP" },
  { "name": "Small Moonstone Pack -- 1,200", "price": "1.29", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Smoots Summer Games II", "price": "1.17", "flag": "🇳🇬", "date": "01.07", "status": "" },
  { "name": "Sniper Elite: Resistance Deluxe Edition", "price": "12.13", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "SnowRunner - 1-Anniversary Edition", "price": "6.06", "flag": "🇹🇷", "date": "30.06", "status": " GP" },
  { "name": "SnowRunner - 2-Year Anniversary Edition", "price": "16.4", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "SnowRunner - 4-Year Anniversary Edition", "price": "38.35", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "SokoWinter", "price": "0.34", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Sokomonster", "price": "0.21", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "South Park™: The Fractured but Whole™ - Gold Edition", "price": "26.24", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Space Engineers", "price": "0.71", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Space Moves", "price": "0.18", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Sparkle Bundle", "price": "0.83", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Spartan Fist", "price": "0.27", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Spirit Arena", "price": "0.21", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Spitlings", "price": "0.21", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Star Trucker - Deluxe Bundle", "price": "4.06", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Star Wars Outlaws Deluxe Edition", "price": "33.89", "flag": "🇧🇷", "date": "08.07", "status": "" },
  { "name": "Star Wars Outlaws Gold Edition", "price": "47.67", "flag": "🇰🇷", "date": "01.07", "status": " GP" },
  { "name": "Starlink: Battle for Atlas™", "price": "5.49", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "SteamWorld Build & Dig Bundle", "price": "4.71", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "SteamWorld Build Deluxe Edition", "price": "4.45", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Stellaris: Console Edition - Starter Edition", "price": "6.77", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Still Wakes the Deep - The Complete Collection", "price": "5.42", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Stories Untold", "price": "0.07", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Super Pixel Kid Adventure", "price": "0.07", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Survivor - Castaway Island", "price": "9.42", "flag": "🇮🇳", "date": "01.07", "status": "" },
  { "name": "Swordship", "price": "0.28", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "TEKKEN 7 - Definitive Edition", "price": "2.34", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "TETRA's Escape 2", "price": "2.5", "flag": "🇮🇳", "date": "28.06", "status": "" },
  { "name": "Taiko no Tatsujin: Rhythm Festival Taiko Music Pass", "price": "0.0", "flag": "🇳🇬", "date": "30.11", "status": "" },
  { "name": "Tales from the Borderlands", "price": "2.72", "flag": "🇹🇷", "date": "30.06", "status": " GP" },
  { "name": "Tanky Tanks", "price": "0.26", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Tchia: Oléti Edition", "price": "7.06", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Teenage Mutant Ninja Turtles: Mutants Unleashed - Digital Deluxe Edition", "price": "22.32", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "Teenage Mutant Ninja Turtles: Mutants Unleashed", "price": "3.91", "flag": "🇪🇬", "date": "01.07", "status": "" },
  { "name": "Teenage Mutant Ninja Turtles: Shredder's Revenge - Ultimate Edition", "price": "4.45", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Teocida + Estigma", "price": "2.72", "flag": "🇧🇷", "date": "08.07", "status": "" },
  { "name": "TerraTech", "price": "0.36", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "TerraTech: Prospector Edition", "price": "0.71", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "The Ascent", "price": "0.81", "flag": "🇳🇬", "date": "01.07", "status": " GP" },
  { "name": "The Backrooms CodeRed", "price": "0.69", "flag": "🇹🇷", "date": "19.07", "status": "" },
  { "name": "The Callisto Protocol™ for Xbox One – Digital Deluxe Edition", "price": "14.63", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "The Callisto Protocol™ for Xbox Series X|S – Digital Delu...", "price": "17.16", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "The Crew Motorfest Deluxe Edition", "price": "12.11", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "The Crew Motorfest Gold Edition", "price": "15.45", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "The Crew Motorfest Ultimate Edition", "price": "18.1", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "The Elder Scrolls III: Morrowind", "price": "0.98", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "The Elder Scrolls III: Morrowind", "price": "6.49", "flag": "🇮🇳", "date": "31.12", "status": " GP" },
  { "name": "The Escapists 2 - Game of the Year Edition", "price": "0.48", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "The Escapists: Supermax Edition", "price": "0.39", "flag": "🇹🇷", "date": "05.07", "status": "" },
  { "name": "The Escapists: The Walking Dead", "price": "0.29", "flag": "🇹🇷", "date": "29.06", "status": "" },
  { "name": "The Hellblade Bundle", "price": "10.24", "flag": "🇪🇬", "date": "30.12", "status": " GP" },
  { "name": "The Jackbox Naughty and Nice Bundle", "price": "1.35", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "The Jackbox Party Pack 3", "price": "0.89", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "The Jackbox Party Pack 4", "price": "0.82", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "The Jackbox Party Quadpack", "price": "5.39", "flag": "🇹🇷", "date": "31.12", "status": "" },
  { "name": "The Last Kids on Earth and the Staff of Doom", "price": "2.12", "flag": "🇪🇬", "date": "01.07", "status": "" },
  { "name": "The Last Oricru", "price": "0.91", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "The Lucid Dreamer Bundle", "price": "3.23", "flag": "🇳🇬", "date": "01.07", "status": " GP" },
  { "name": "The Messenger", "price": "0.28", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "The Quarry - Deluxe Edition", "price": "2.99", "flag": "🇹🇷", "date": "30.06", "status": "" },
  { "name": "The Shadow Warrior Trilogy", "price": "1.62", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "The Sinking City Remastered", "price": "2.03", "flag": "🇳🇬", "date": "01.07", "status": " GP" },
  { "name": "The Sinking City – Necronomicon Edition", "price": "1.21", "flag": "🇳🇬", "date": "01.07", "status": " GP" },
  { "name": "The Sisters 2 - Road to Fame", "price": "11.67", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "The Survivalists", "price": "0.5", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "The Talos Principle Collection", "price": "2.71", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "This War of Mine - Complete Edition", "price": "1.54", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Deluxe Edition", "price": "2.08", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Gold Edition", "price": "3.03", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Ultimate Edition", "price": "3.6", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Tom Clancy's Rainbow Six Siege X - Ultimate Edition", "price": "25.98", "flag": "🇮🇳", "date": "01.07", "status": " GP" },
  { "name": "Tom Clancy's The Division", "price": "0.61", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Year 2 Gold Edition", "price": "8.07", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Tomb Raider: Definitive Survivor Trilogy", "price": "17.56", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Top Racer Collection", "price": "6.36", "flag": "🇧🇷", "date": "08.07", "status": "" },
  { "name": "Tortuga - A Pirate's Tale", "price": "1.39", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Totally Reliable Delivery Service Deluxe Edition", "price": "3.22", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Totally Spies! - Cyber Mission", "price": "2.42", "flag": "🇨🇴", "date": "01.07", "status": "" },
  { "name": "Towerborne - 1,000 Belfry Bucks", "price": "5.43", "flag": "🇺🇦", "date": "30.12", "status": " GP" },
  { "name": "Towerborne - 2,000 (+200 Bonus) Belfry Bucks", "price": "10.97", "flag": "🇺🇦", "date": "30.12", "status": " GP" },
  { "name": "Towerborne - 5,000 (+1000 Bonus) Belfry Bucks", "price": "27.92", "flag": "🇺🇦", "date": "30.12", "status": " GP" },
  { "name": "Towerborne - 500 Belfry Bucks", "price": "2.77", "flag": "🇺🇦", "date": "30.12", "status": " GP" },
  { "name": "Trailmakers: Booster Edition", "price": "1.99", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers: Deluxe Edition", "price": "2.85", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers: Ultimate Edition", "price": "3.43", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Treasure Hunter Simulator", "price": "0.34", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Trepang2", "price": "2.03", "flag": "🇳🇬", "date": "09.07", "status": "" },
  { "name": "Trials® Rising - Digital Gold Edition", "price": "0.71", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Tribes of Midgard Deluxe Edition", "price": "0.97", "flag": "🇳🇬", "date": "30.06", "status": "" },
  { "name": "Trollhunters: Defenders of Arcadia", "price": "1.34", "flag": "🇳🇬", "date": "01.07", "status": "" },
  { "name": "Troopers", "price": "2.85", "flag": "🇺🇦", "date": "01.07", "status": "" },
  { "name": "Turnip Boy Robs a Bank Pre-Release", "price": "0.86", "flag": "🇹🇷", "date": "15.07", "status": " GP" },
  { "name": "UFC® 5 Standard Edition", "price": "26.1", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "UNDER DEFEAT", "price": "0.85", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "UNO®", "price": "1.38", "flag": "🇧🇷", "date": "01.07", "status": " GP" },
  { "name": "Ultracore", "price": "2.41", "flag": "🇺🇦", "date": "01.07", "status": "" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "1.04", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "VASARA Collection", "price": "2.72", "flag": "🇧🇷", "date": "08.07", "status": "" },
  { "name": "VISCO Collection", "price": "5.45", "flag": "🇧🇷", "date": "08.07", "status": "" },
  { "name": "Valiant Hearts: Coming Home", "price": "4.67", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Vermintide - Digital Value Pack", "price": "2.22", "flag": "🇹🇷", "date": "07.03", "status": "" },
  { "name": "Vikings - Wolves of Midgard", "price": "0.54", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Void Gore", "price": "1.25", "flag": "🇮🇳", "date": "01.07", "status": "" },
  { "name": "WINGSPAN", "price": "2.76", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "7.95", "flag": "🇹🇷", "date": "30.08", "status": "" },
  { "name": "WWE 2K25 Deadman Edition", "price": "61.41", "flag": "🇧🇷", "date": "01.07", "status": "" },
  { "name": "Warhammer 40,000: Darktide - Imperial Edition", "price": "9.68", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Warhammer 40,000: Rogue Trader - Deluxe Edition", "price": "9.2", "flag": "🇪🇬", "date": "16.08", "status": " GP" },
  { "name": "Warhammer 40,000: Rogue Trader - Voidfarer Edition", "price": "14.24", "flag": "🇪🇬", "date": "16.08", "status": " GP" },
  { "name": "Warhammer: Vermintide 2 - Premium Edition", "price": "1.92", "flag": "🇹🇷", "date": "16.05", "status": " GP" },
  { "name": "Warhammer: Vermintide 2 - Ultimate Edition", "price": "2.57", "flag": "🇹🇷", "date": "16.05", "status": " GP" },
  { "name": "Warhammer: Vermintide 2 – Winds of Magic Bundle", "price": "2.14", "flag": "🇹🇷", "date": "16.05", "status": " GP" },
  { "name": "Wasteland 3 (PC) Colorado Collection", "price": "6.77", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Wasteland 3 Colorado Collection", "price": "8.86", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "Watch Dogs: Legion - Deluxe Edition", "price": "2.55", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Watch Dogs®2 - Deluxe Edition", "price": "29.27", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Watch Dogs®: Legion Ultimate Edition", "price": "4.79", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Watch Dogs®: Legion", "price": "2.27", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Way of the Hunter: Elite Edition", "price": "15.24", "flag": "🇧🇷", "date": "01.07", "status": "" },
  { "name": "Weedcraft Inc & Big Pharm Pharmacy Tycoon Bundle", "price": "3.38", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Weird West", "price": "0.81", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Wild Dogs", "price": "2.72", "flag": "🇧🇷", "date": "08.07", "status": "" },
  { "name": "Wild Rumble", "price": "0.86", "flag": "🇹🇷", "date": "27.06", "status": "" },
  { "name": "Willy's Wonderland - The Game", "price": "0.34", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Windbound", "price": "0.42", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Windstorm: Start of a Great Friendship Remastered - Complete Edition", "price": "1.29", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Wingspan + European + Oceania + Asia + Decorative Packs", "price": "5.24", "flag": "🇳🇬", "date": "01.07", "status": "" },
  { "name": "Wingspan + European + Oceania + Asia", "price": "4.74", "flag": "🇳🇬", "date": "01.07", "status": "" },
  { "name": "Without a Voice (PC)", "price": "2.5", "flag": "🇮🇳", "date": "02.07", "status": "" },
  { "name": "Without a Voice (Xbox & PC)", "price": "3.01", "flag": "🇮🇳", "date": "02.07", "status": "" },
  { "name": "Without a Voice", "price": "2.5", "flag": "🇮🇳", "date": "02.07", "status": "" },
  { "name": "Wizard with a Gun: Bounty Edition", "price": "1.18", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Wizard with a Gun: Deluxe Edition", "price": "1.02", "flag": "🇳🇬", "date": "01.07", "status": "" },
  { "name": "WolfFang SkullFang Saturn Tribute Boosted", "price": "13.67", "flag": "🇮🇸", "date": "01.07", "status": "" },
  { "name": "Wolfenstein: Alt History Collection", "price": "10.09", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Wolfenstein: Youngblood Deluxe Edition", "price": "4.42", "flag": "🇹🇷", "date": "17.02", "status": " GP" },
  { "name": "Wolfenstein®: The Two-Pack", "price": "3.2", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "World War Z: Aftermath - Deluxe Edition", "price": "13.12", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Worms Armageddon: Anniversary Edition", "price": "10.07", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Wreckfest Complete Edition", "price": "19.82", "flag": "🇨🇱", "date": "16.11", "status": " GP" },
  { "name": "Wreckfest", "price": "7.38", "flag": "🇨🇱", "date": "01.07", "status": "" },
  { "name": "XCOM® 2 Digital Deluxe Edition", "price": "0.8", "flag": "🇹🇷", "date": "30.06", "status": " GP" },
  { "name": "XCOM® 2", "price": "0.3", "flag": "🇹🇷", "date": "30.06", "status": " GP" },
  { "name": "Yet Another Zombie Defense HD", "price": "0.07", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Yoku's Island Express", "price": "0.75", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Yooka-Laylee and the Impossible Lair", "price": "0.43", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Zombie Survivors Series Edition", "price": "0.14", "flag": "🇳🇬", "date": "01.07", "status": "" },
  { "name": "Zombie Survivors XONE Edition", "price": "0.14", "flag": "🇳🇬", "date": "01.07", "status": "" },
  { "name": "orbit.industries", "price": "0.43", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "sCATch 2x1", "price": "0.28", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Ultimate Hunting Bundle", "price": "42.93", "flag": "🇮🇳", "date": "01.06", "status": " GP" },
  { "name": "theHunter: Call of the Wild™", "price": "0.58", "flag": "🇹🇷", "date": "01.07", "status": " GP" }
]

let usd = 100;

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
    a = 150
  } else if (value > 1 && value <= 5) {
    a = 150
  } else if (value > 5 && value <= 10) {
    a = 115
  } else if (value > 10 && value <= 15) {
    a = 115
  } else if (value > 15 && value <= 20) {
    a = 150
  } else if (value > 20 && value <= 25) {
    a = 110
  } else if (value > 25) {
    a = 110
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
  const finishRes = (res + resSwitсhTr(value)) * 1.06

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



