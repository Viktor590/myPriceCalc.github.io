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
  { "name": "99Vidas", "price": "0.36", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "A Rite from the Stars: Remaster Edition", "price": "0.68", "flag": "🇹🇷", "date": "10.07", "status": "" },
  { "name": "AMAZE! & Light-it Up", "price": "5.25", "flag": "🇵🇭", "date": "15.07", "status": "" },
  { "name": "ASTRONEER: Evolution Edition", "price": "2.28", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "ASTRONEER: Glitchwalkers Deluxe Edition", "price": "5.46", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "ASTRONEER: Glitchwalkers Edition", "price": "4.75", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "AVATAR: FRONTIERS OF PANDORA™", "price": "12.01", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Abomi Nation", "price": "0.53", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Absolver", "price": "0.19", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Accolade Sports Collection (QUByte Classics)", "price": "7.73", "flag": "🇧🇷", "date": "08.07", "status": "" },
  { "name": "Adore", "price": "4.6", "flag": "🇧🇷", "date": "08.07", "status": "" },
  { "name": "Aery - Ancient Empires", "price": "0.47", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Agarta", "price": "0.68", "flag": "🇹🇷", "date": "04.07", "status": "" },
  { "name": "Agatha Christie - Hercule Poirot: The First Cases", "price": "1.71", "flag": "🇹🇷", "date": "08.07", "status": " GP" },
  { "name": "Age of Empires 25th Anniversary Collection", "price": "6.83", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Age of Empires: Definitive Collection", "price": "6.02", "flag": "🇹🇷", "date": "05.10", "status": " GP" },
  { "name": "Age of Mythology: Retold Premium Edition", "price": "20.06", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Airborne Bundle", "price": "1.98", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Airstrip DLC and Can Touch This DLC Bundle", "price": "0.47", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Akka Arrh", "price": "0.78", "flag": "🇳🇬", "date": "07.07", "status": "" },
  { "name": "All You Need is Help Lively Friends Bundle", "price": "9.67", "flag": "🇺🇦", "date": "01.10", "status": " GP" },
  { "name": "Alphadia Genesis 2", "price": "4.61", "flag": "🇯🇵", "date": "08.07", "status": " GP" },
  { "name": "Ambition Record", "price": "4.61", "flag": "🇯🇵", "date": "08.07", "status": " GP" },
  { "name": "America’s Greatest Game Shows: Wheel of Fortune® & Jeopar...", "price": "3.45", "flag": "🇧🇷", "date": "08.07", "status": "" },
  { "name": "Anno 1800™ Console Edition - Deluxe", "price": "11.54", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Anno 1800™ Console Edition", "price": "3.39", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Anvil Saga", "price": "2.19", "flag": "🇳🇬", "date": "11.07", "status": "" },
  { "name": "Argonauts Agency 4: Glove of Midas", "price": "0.25", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Argonauts Agency 5: Captive of Circe", "price": "0.28", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Arrowstorm Ascendant Bundle (Windows + Xbox)", "price": "0.4", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Arrowstorm Ascendant [Windows]", "price": "0.25", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Arrowstorm Ascendant", "price": "0.25", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Ashen: Definitive Edition", "price": "6.51", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Assassin's Creed Antiquity Pack", "price": "48.61", "flag": "🇧🇷", "date": "08.07", "status": "" },
  { "name": "Assassin's Creed IV Black Flag", "price": "0.54", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Assassin's Creed Legendary Collection", "price": "88.38", "flag": "🇧🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed Unity", "price": "1.05", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Assassin's Creed® Bundle: Assassin's Creed® Valhalla, Ass...", "price": "32.12", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin's Creed® III Remastered", "price": "1.47", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Assassin's Creed® Odyssey - DELUXE EDITION", "price": "14.05", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey - GOLD EDITION", "price": "16.06", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey - ULTIMATE EDITION", "price": "18.57", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Assassin's Creed® Odyssey", "price": "3.01", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Assassin's Creed® Origins - DELUXE EDITION", "price": "13.55", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Origins - GOLD EDITION", "price": "16.06", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Assassin's Creed® Syndicate", "price": "1.05", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Assassin's Creed® The Ezio Collection", "price": "1.58", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Assassin's Creed® Valhalla Complete Edition", "price": "20.08", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Assassin's Creed® Valhalla Deluxe Edition", "price": "15.56", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Ragnarök Edition", "price": "12.05", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin’s Creed Mirage & Assassin's Creed Valhalla Bundle", "price": "10.77", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Assassin’s Creed Mirage Master Assassin Edition", "price": "16.06", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Assassin’s Creed® Rogue Remastered", "price": "1.05", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Assassin’s Creed® Valhalla + Immortals Fenyx Rising™ Bundle", "price": "50.19", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Assassin’s Creed® Valhalla + Watch Dogs®: Legion Bundle", "price": "23.09", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Asteroids: Recharged", "price": "0.44", "flag": "🇳🇬", "date": "07.07", "status": "" },
  { "name": "Atari 50: The Anniversary Celebration", "price": "12.32", "flag": "🇺🇦", "date": "07.07", "status": "" },
  { "name": "Atomfall Deluxe Edition", "price": "11.48", "flag": "🇪🇬", "date": "01.10", "status": " GP" },
  { "name": "Autopsy Simulator", "price": "19.44", "flag": "🇮🇳", "date": "09.07", "status": "" },
  { "name": "Avatar: Frontiers of Pandora™ Ultimate Edition", "price": "18.22", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Avowed Premium Edition", "price": "22.83", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Awarded Platformer Bundle", "price": "1.0", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "BATTLETECH Mercenary Collection", "price": "5.12", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "BIOHAZARD RE:2 Z Version デラックスエディション", "price": "27.88", "flag": "🇯🇵", "date": "16.09", "status": " GP" },
  { "name": "BLACKHOLE: Complete Edition", "price": "0.2", "flag": "🇹🇷", "date": "10.07", "status": "" },
  { "name": "Bag Hero", "price": "1.09", "flag": "🇳🇬", "date": "04.07", "status": "" },
  { "name": "Batman: Arkham Knight Premium Edition", "price": "2.61", "flag": "🇹🇷", "date": "07.07", "status": " GP" },
  { "name": "Battlefleet Gothic: Armada 2 - Windows 10", "price": "0.55", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Beat 'Em Up Archives (QUByte Classics)", "price": "2.76", "flag": "🇧🇷", "date": "08.07", "status": "" },
  { "name": "Bee Flowers: Save the Garden (Windows)", "price": "0.28", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Bee Flowers: Save the Garden (Xbox One)", "price": "0.28", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Bee Flowers: Save the Garden Windows + Xbox Bundle", "price": "0.45", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Bee Flowers: Save the Garden Xbox Bundle", "price": "0.6", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Bee Flowers: Save the Garden", "price": "0.28", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Behold Battle", "price": "0.27", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Bem Feito", "price": "1.01", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Big Moonstone Pack -- 5,500", "price": "5.34", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "BioShock 2 Remastered", "price": "0.72", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "BioShock Infinite: The Complete Edition", "price": "1.14", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "BioShock Remastered", "price": "1.14", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Black Myth: Wukong Deluxe Edition Upgrade", "price": "5.53", "flag": "🇯🇵", "date": "10.07", "status": "" },
  { "name": "Black Myth: Wukong Digital Deluxe Edition Pre-Order", "price": "37.5", "flag": "🇭🇰", "date": "10.07", "status": "" },
  { "name": "Black Myth: Wukong Pre-Order", "price": "30.37", "flag": "🇭🇰", "date": "10.07", "status": "" },
  { "name": "Blade of Darkness", "price": "0.85", "flag": "🇹🇷", "date": "07.07", "status": " GP" },
  { "name": "Blasphemous + Blasphemous 2 Bundle", "price": "4.86", "flag": "🇹🇷", "date": "14.07", "status": "" },
  { "name": "Blasphemous 2 - Mea Culpa Edition", "price": "17.17", "flag": "🇨🇴", "date": "14.07", "status": "" },
  { "name": "Blightbound", "price": "0.21", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Borderlands 3: Next Level Edition", "price": "10.02", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Borderlands 3: Super Deluxe Edition", "price": "11.42", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "Borderlands 3: Ultimate Edition", "price": "4.45", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Borderlands: The Handsome Collection", "price": "1.62", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Breakout: Recharged", "price": "0.38", "flag": "🇳🇬", "date": "07.07", "status": "" },
  { "name": "Broforce", "price": "0.21", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Brotato & Abyssal Terrors DLC - Bundle", "price": "0.45", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Bulletstorm: Full Clip Edition Duke Nukem Bundle", "price": "0.45", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Busway Islands - Puzzle", "price": "0.34", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Butterfly (for Windows 10)", "price": "0.11", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "CONSCRIPT - Deluxe Edition", "price": "1.69", "flag": "🇳🇬", "date": "09.07", "status": "" },
  { "name": "Call of Duty®: Black Ops 6 - Vault Edition", "price": "50.98", "flag": "🇪🇬", "date": "31.12", "status": " GP" },
  { "name": "Call of Duty®: Black Ops 6 - Vault Edition", "price": "70.56", "flag": "🇧🇷", "date": "31.12", "status": " GP" },
  { "name": "Call of Duty®: WWII - Digital Deluxe", "price": "9.44", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Call of Duty®: WWII - Gold Edition", "price": "6.02", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Call of the Wild: The Angler™ - Ultimate Fishing Bundle", "price": "9.62", "flag": "🇪🇬", "date": "01.09", "status": " GP" },
  { "name": "Candivity: Complete Edition", "price": "6.26", "flag": "🇵🇭", "date": "11.07", "status": "" },
  { "name": "Car Vouchers (10)", "price": "1.3", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Car Vouchers (24)", "price": "2.6", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Car Vouchers (4)", "price": "0.65", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Carrion", "price": "0.35", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Castle Walker", "price": "0.14", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Cat Pipes (Windows)", "price": "0.11", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Cat Pipes", "price": "0.11", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Catacomb Master", "price": "0.18", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Caterpillar", "price": "0.12", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Caverns of Mars: Recharged", "price": "0.39", "flag": "🇳🇬", "date": "07.07", "status": "" },
  { "name": "Centipede: Recharged", "price": "0.44", "flag": "🇳🇬", "date": "07.07", "status": "" },
  { "name": "Chess Brain: Dark Troops", "price": "0.27", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Chivalry 2 King's Edition", "price": "3.41", "flag": "🇹🇷", "date": "01.10", "status": " GP" },
  { "name": "Chivalry 2 Special Edition", "price": "2.84", "flag": "🇹🇷", "date": "01.10", "status": " GP" },
  { "name": "Chubby Pixel Mega Bundle", "price": "0.67", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Circa Infinity", "price": "0.18", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Cities: Skylines - Mayor's Edition", "price": "29.31", "flag": "🇧🇷", "date": "01.04", "status": " GP" },
  { "name": "Cities: Skylines - Premium Edition 2", "price": "3.96", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "Citizen Sleeper: Helion Collection", "price": "5.46", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Clair Obscur: Expedition 33 – Deluxe Edition", "price": "21.68", "flag": "🇹🇷", "date": "23.07", "status": " GP" },
  { "name": "Classified: France '44 - Overlord Edition", "price": "17.51", "flag": "🇮🇳", "date": "09.07", "status": "" },
  { "name": "Commandos: Origins - Deluxe Edition", "price": "39.93", "flag": "🇮🇳", "date": "07.07", "status": " GP" },
  { "name": "Crash Bandicoot™ Bundle - N. Sane Trilogy + CTR Nitro-Fueled", "price": "8.64", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Crash™ + Spyro™ Triple Play Bundle", "price": "11.62", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Crash™ Team Racing Nitro-Fueled + Spyro™ Game Bundle", "price": "8.64", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Crash™ Team Racing Nitro-Fueled - Nitros Oxide Edition", "price": "7.02", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Creatures of Ava: Deluxe Edition", "price": "12.55", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Crime Opera: The Butterfly Effect", "price": "1.92", "flag": "🇮🇳", "date": "08.07", "status": "" },
  { "name": "Crusader Kings III: Royal Edition", "price": "30.69", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Cube 3x1", "price": "0.42", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Cult of the Lamb: Unholy Edition", "price": "3.06", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Cyber Tank Nano (Windows)", "price": "0.28", "flag": "🇹🇷", "date": "11.07", "status": "" },
  { "name": "Cyber Tank Nano (Xbox One)", "price": "0.28", "flag": "🇹🇷", "date": "11.07", "status": "" },
  { "name": "Cyber Tank Nano bundle", "price": "0.58", "flag": "🇹🇷", "date": "11.07", "status": "" },
  { "name": "Cyber Tank Nano", "price": "0.28", "flag": "🇹🇷", "date": "11.07", "status": "" },
  { "name": "DEAD ISLAND 2 GOLD EDITION", "price": "41.75", "flag": "🇰🇷", "date": "01.11", "status": " GP" },
  { "name": "DEATHLOOP Deluxe Edition", "price": "35.5", "flag": "🇪🇬", "date": "30.12", "status": " GP" },
  { "name": "DOOM Anthology", "price": "47.18", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "DOOM Eternal Deluxe Edition (PC)", "price": "12.05", "flag": "🇹🇷", "date": "03.12", "status": " GP" },
  { "name": "DOOM Eternal Deluxe Edition", "price": "12.05", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "DOOM Eternal: The Ancient Gods - Part One", "price": "4.26", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "DOOM Eternal: The Ancient Gods - Part Two", "price": "4.26", "flag": "🇹🇷", "date": "17.03", "status": " GP" },
  { "name": "DOOM Eternal: Year One Pass (PC)", "price": "6.44", "flag": "🇹🇷", "date": "03.12", "status": " GP" },
  { "name": "DOOM Eternal: Year One Pass", "price": "6.44", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "DRAGON BALL XENOVERSE 2 - Special Edition", "price": "6.99", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "DRAGON BALL XENOVERSE 2 DELUXE EDITION", "price": "5.59", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "DREDGE - Digital Deluxe Edition", "price": "3.64", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "DREDGE: Complete Edition", "price": "3.84", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Dark Burial: Enhanced Edition", "price": "0.18", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "DayZ Cool Edition", "price": "3.96", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Dead Cells: Medley of Pain Bundle", "price": "2.28", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Dead Cells: Return to Castlevania Bundle", "price": "1.78", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Dead by Daylight - Gold Edition", "price": "9.5", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Dead by Daylight: Tokyo Ghoul Edition", "price": "5.46", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Death Elevator", "price": "3.86", "flag": "🇧🇷", "date": "08.07", "status": "" },
  { "name": "Death's Door [Xbox]", "price": "0.35", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Deathbound", "price": "7.35", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Deep Deep Deep Nightmare", "price": "4.42", "flag": "🇧🇷", "date": "08.07", "status": "" },
  { "name": "Deep Rock Galactic - Deluxe Edition", "price": "2.28", "flag": "🇹🇷", "date": "07.07", "status": " GP" },
  { "name": "Deep Rock Galactic - Ultimate Edition", "price": "2.84", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "Deleted - Cyber Invasion", "price": "0.19", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Detective Di: The Silk Rose Murders", "price": "0.18", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Devil Inside Us: Roots of Evil", "price": "1.01", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Diablo III: Eternal Collection", "price": "4.72", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Diablo® IV - Expansion Bundle", "price": "49.89", "flag": "🇰🇷", "date": "30.12", "status": " GP" },
  { "name": "Diablo® IV - Standard Edition", "price": "33.86", "flag": "🇧🇷", "date": "30.12", "status": " GP" },
  { "name": "Die for Valhalla!", "price": "0.15", "flag": "🇹🇷", "date": "08.07", "status": " GP" },
  { "name": "Digimon Survive", "price": "2.63", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Disc Room", "price": "0.27", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Dishonored®: Death of the Outsider™ Deluxe Bundle", "price": "9.99", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "Disney Dreamlight Valley – Enchanted Edition", "price": "10.86", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Disney Dreamlight Valley – The Storybook Vale Bundle", "price": "8.13", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Dou! - Fast-Paced Platformer Adventure!", "price": "0.07", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Draconic Resurgence (Windows)", "price": "0.34", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Draconic Resurgence (Xbox One+Xbox Series+Windows)", "price": "0.75", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Draconic Resurgence (Xbox Series)", "price": "0.34", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Draconic Resurgence", "price": "0.34", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Dungeons & Dragons Neverwinter Nights 2: Enhanced Edition", "price": "3.69", "flag": "🇳🇬", "date": "15.07", "status": "" },
  { "name": "Dungeons of Paint", "price": "2.51", "flag": "🇮🇳", "date": "12.07", "status": "" },
  { "name": "EA SPORTS FC™ 24 Standard Edition Xbox One & Xbox Series X|S", "price": "15.76", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "EA SPORTS™ Madden NFL 25 Xbox Series X|S & Xbox One Standard Edition", "price": "29.19", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "EA SPORTS™ Madden NFL 26 Deluxe Edition + Limited Time Bonus", "price": "77.05", "flag": "🇰🇷", "date": "25.07", "status": "" },
  { "name": "Eiyuden Chronicle: Hundred Heroes - Digital Deluxe Edition", "price": "10.86", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Enter x Exit the Gungeon", "price": "0.28", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Epic Landscapes Jigsaw for PC & XBOX", "price": "0.21", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Escape Dead Island", "price": "0.19", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Eternity: The Last Unicorn", "price": "0.21", "flag": "🇹🇷", "date": "10.07", "status": "" },
  { "name": "Exo-Calibre", "price": "3.54", "flag": "🇮🇳", "date": "09.07", "status": "" },
  { "name": "Exodemon", "price": "0.23", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Expeditions: A MudRunner Game - Supreme Edition", "price": "28.61", "flag": "🇹🇷", "date": "08.07", "status": " GP" },
  { "name": "Expeditions: A MudRunner Game - Year 1 Edition", "price": "32.12", "flag": "🇹🇷", "date": "07.07", "status": " GP" },
  { "name": "FAR CRY 4 + FAR CRY PRIMAL BUNDLE", "price": "1.1", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "FAR CRY 4 GOLD EDITION", "price": "3.51", "flag": "🇹🇷", "date": "07.07", "status": " GP" },
  { "name": "FOR HONOR – Gold Edition", "price": "20.08", "flag": "🇹🇷", "date": "07.07", "status": " GP" },
  { "name": "FOR HONOR – Ultimate Edition", "price": "32.12", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "FOR HONOR", "price": "1.98", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "FROGUE", "price": "0.34", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Fallout 4: Game of the Year Edition (PC)", "price": "5.72", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "Fallout 4: Game of the Year Edition", "price": "5.72", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "Fallout 76: Gone Fission Deluxe Edition", "price": "38.32", "flag": "🇰🇷", "date": "31.12", "status": " GP" },
  { "name": "Family Feud®", "price": "6.43", "flag": "🇳🇿", "date": "08.07", "status": "" },
  { "name": "Fantasy Dash", "price": "0.07", "flag": "🇹🇷", "date": "04.07", "status": "" },
  { "name": "Far Cry Insanity Bundle", "price": "11.05", "flag": "🇧🇷", "date": "08.07", "status": "" },
  { "name": "Far Cry Primal - Apex Edition", "price": "1.01", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Far Cry® 5 + Far Cry® New Dawn Deluxe Edition Bundle", "price": "16.1", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Far Cry® 5 Gold Edition + Far Cry ® New Dawn Deluxe Editi...", "price": "18.47", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Far Cry® 6 Deluxe Edition", "price": "15.56", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Far Cry® 6 Game of the Year Edition", "price": "19.07", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Far Cry® 6 Gold Edition", "price": "16.06", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Far Cry® 6", "price": "3.76", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Far Cry® New Dawn Deluxe Edition", "price": "6.28", "flag": "🇹🇷", "date": "07.07", "status": " GP" },
  { "name": "Far Cry® New Dawn", "price": "1.36", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Far Cry®5 Gold Edition", "price": "14.05", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Farm Bundle", "price": "2.28", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Farm Pets Bundle", "price": "3.41", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Farming Simulator 22 - Platinum Edition", "price": "5.46", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Farming Simulator 22 - Premium Edition", "price": "6.83", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "First Responder Simulation Bundle: Police Firefighting", "price": "7.2", "flag": "🇪🇬", "date": "16.11", "status": " GP" },
  { "name": "Fit My Cat", "price": "0.18", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Flailing Limbs Bundle", "price": "1.18", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Flintlock – Deluxe Edition", "price": "14.63", "flag": "🇹🇷", "date": "07.07", "status": " GP" },
  { "name": "Flockers", "price": "0.38", "flag": "🇹🇷", "date": "14.07", "status": "" },
  { "name": "Flower Shop: The Complete Story", "price": "7.0", "flag": "🇮🇳", "date": "09.07", "status": "" },
  { "name": "Fluffy Cubed", "price": "0.27", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Football Mini Stars", "price": "0.17", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Forza Horizon 5 Deluxe Edition", "price": "10.86", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 PLUS Hot Wheels Bundle", "price": "10.86", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 Premium Add-Ons Bundle", "price": "6.83", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 Premium Edition", "price": "13.66", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport Deluxe Edition", "price": "12.23", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport Premium Add-Ons Bundle", "price": "5.46", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport Premium Edition", "price": "13.66", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport and Forza Horizon 5 Premium Add-Ons Bundle", "price": "11.65", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport and Forza Horizon 5 Premium Editions Bundle", "price": "25.89", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Frostpunk: Complete Collection", "price": "2.56", "flag": "🇹🇷", "date": "16.11", "status": " GP" },
  { "name": "Fun Pack Series Edition", "price": "0.3", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Fun Pack", "price": "0.3", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "GRADIUS ORIGINS", "price": "26.08", "flag": "🇨🇱", "date": "07.08", "status": "" },
  { "name": "GRIS + Neva Bundle", "price": "3.07", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Gaps by POWGI", "price": "0.28", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Garden Bundle", "price": "5.2", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Gas Station Simulator and Airstrip DLC Bundle", "price": "1.19", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Gato Roboto", "price": "0.11", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Gears of War Ultimate Edition Deluxe Version", "price": "1.0", "flag": "🇹🇷", "date": "31.05", "status": " GP" },
  { "name": "Generation Zero® - Ultimate Bundle", "price": "5.12", "flag": "🇹🇷", "date": "01.12", "status": " GP" },
  { "name": "Ghostwire: Tokyo Deluxe Edition", "price": "15.56", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Glitch Hero", "price": "0.51", "flag": "🇹🇷", "date": "10.07", "status": "" },
  { "name": "Glover (QUByte Classics)", "price": "8.84", "flag": "🇧🇷", "date": "08.07", "status": "" },
  { "name": "Gnomes and Knights", "price": "0.87", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Goat Simulator 3 - Multiversal Traveler's Edition", "price": "2.28", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Goat Simulator 3 - Multiversal Traveler's Edition: Xbox One Edition", "price": "2.28", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Goat Simulator: The GOATY", "price": "1.54", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Goat Simulator: Waste Of Space Bundle", "price": "0.85", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Going Under", "price": "0.68", "flag": "🇳🇬", "date": "14.07", "status": "" },
  { "name": "Golden Tee Arcade Classics", "price": "16.37", "flag": "🇺🇦", "date": "16.07", "status": "" },
  { "name": "Golf With Your Friends - Starter Edition", "price": "16.04", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Golf With Your Friends - Ultimate Edition", "price": "27.08", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Gourmet Warriors (QUByte Classics)", "price": "2.99", "flag": "🇺🇦", "date": "08.07", "status": "" },
  { "name": "Grand Theft Auto Online", "price": "14.03", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Grand Theft Auto V (Xbox One & Xbox Series X|S)", "price": "4.96", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Grand Theft Auto V: Premium Edition & Great White Shark C...", "price": "32.1", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Grand Theft Auto V: Premium Edition", "price": "21.72", "flag": "🇰🇷", "date": "07.07", "status": " GP" },
  { "name": "Gravel Special Edition", "price": "2.33", "flag": "🇮🇳", "date": "08.07", "status": "" },
  { "name": "Gravel", "price": "1.61", "flag": "🇯🇵", "date": "08.07", "status": "" },
  { "name": "Greedland", "price": "3.87", "flag": "🇭🇰", "date": "09.07", "status": "" },
  { "name": "Gunma's Ambition -You and me are Gunma- Reiwa 2nd national census edition", "price": "0.25", "flag": "🇹🇷", "date": "12.07", "status": "" },
  { "name": "HITMAN™ 2", "price": "6.19", "flag": "🇹🇷", "date": "04.02", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ - Game Of The Year Edition - Xbox S...", "price": "8.41", "flag": "🇮🇳", "date": "08.07", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ - Game Of The Year Edition", "price": "8.41", "flag": "🇮🇳", "date": "08.07", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ - Xbox Series X|S", "price": "4.38", "flag": "🇮🇳", "date": "08.07", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™", "price": "4.38", "flag": "🇮🇳", "date": "08.07", "status": "" },
  { "name": "Haimrik", "price": "0.12", "flag": "🇹🇷", "date": "10.07", "status": "" },
  { "name": "Halo 5: Guardians – Digital Deluxe Edition", "price": "16.56", "flag": "🇹🇷", "date": "31.05", "status": " GP" },
  { "name": "Halo Wars 2: Complete Edition", "price": "20.08", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Hasbro Family Fun Pack - Super Edition", "price": "1.69", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Heliborne", "price": "4.57", "flag": "🇹🇷", "date": "08.07", "status": " GP" },
  { "name": "Hell Let Loose - Deluxe Edition", "price": "8.13", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hell Let Loose - Ultimate Edition", "price": "9.5", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hi-Fi RUSH Deluxe Edition", "price": "12.05", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Hidden Shapes: Animals + Lovely Cats", "price": "0.27", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Hidden Shapes: Black Skull + Old West", "price": "0.27", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Hidden Shapes: Cat Realm + Trick or Cats", "price": "1.38", "flag": "🇧🇷", "date": "08.07", "status": "" },
  { "name": "Hotline Miami Collection", "price": "0.68", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "House Flipper Hairdreser Bundle", "price": "1.98", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "How 2 Escape Collection", "price": "13.3", "flag": "🇮🇳", "date": "08.07", "status": "" },
  { "name": "How 2 Escape: Lost Submarine", "price": "5.13", "flag": "🇮🇳", "date": "08.07", "status": "" },
  { "name": "Huge Moonstone Pack -- 14,500", "price": "13.6", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hunt: Showdown 1896 - Deluxe Edition", "price": "30.35", "flag": "🇮🇳", "date": "16.12", "status": " GP" },
  { "name": "Hunt: Showdown 1896 - Premium Edition", "price": "35.49", "flag": "🇮🇳", "date": "07.07", "status": "" },
  { "name": "Hunt: Showdown 1896 - Starter Edition", "price": "20.31", "flag": "🇮🇳", "date": "07.07", "status": "" },
  { "name": "I Am Your Beast", "price": "1.27", "flag": "🇹🇷", "date": "10.07", "status": "" },
  { "name": "INSIDE & LIMBO Bundle", "price": "3.51", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "ISLANDERS: New Shores - Island Hopping Bundle", "price": "2.06", "flag": "🇪🇬", "date": "10.07", "status": "" },
  { "name": "ISLANDERS: New Shores - The Full Archipelago Bundle", "price": "2.32", "flag": "🇪🇬", "date": "10.07", "status": "" },
  { "name": "ISLANDERS: New Shores - The Scenic Builders Pack", "price": "1.8", "flag": "🇪🇬", "date": "10.07", "status": "" },
  { "name": "ISLANDERS: New Shores", "price": "1.62", "flag": "🇪🇬", "date": "10.07", "status": "" },
  { "name": "Immortals Fenyx Rising™ Gold Edition", "price": "29.11", "flag": "🇹🇷", "date": "07.07", "status": " GP" },
  { "name": "Immortals Fenyx Rising™", "price": "5.02", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Immortals of Aveum™ Deluxe Edition", "price": "28.9", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "Indiana Jones and the Great Circle™: Digital Premium Upgrade", "price": "7.9", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Infernitos: Fiery Dishes (Windows)", "price": "0.28", "flag": "🇹🇷", "date": "10.07", "status": "" },
  { "name": "Infernitos: Fiery Dishes (Xbox One)", "price": "0.28", "flag": "🇹🇷", "date": "10.07", "status": "" },
  { "name": "Infernitos: Fiery Dishes Windows + Xbox Bundle", "price": "0.45", "flag": "🇹🇷", "date": "10.07", "status": "" },
  { "name": "Infernitos: Fiery Dishes Xbox Bundle", "price": "0.6", "flag": "🇹🇷", "date": "10.07", "status": "" },
  { "name": "Infernitos: Fiery Dishes", "price": "0.28", "flag": "🇹🇷", "date": "10.07", "status": "" },
  { "name": "Injustice™ 2 - Legendary Edition", "price": "4.27", "flag": "🇹🇷", "date": "07.07", "status": " GP" },
  { "name": "Inscryption", "price": "1.09", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Insurgency: Sandstorm - Ultimate Edition (Windows)", "price": "16.31", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Insurgency: Sandstorm - Ultimate Edition", "price": "23.84", "flag": "🇹🇷", "date": "08.07", "status": " GP" },
  { "name": "Iris and the Giant", "price": "1.12", "flag": "🇹🇷", "date": "08.07", "status": " GP" },
  { "name": "Johnny Trigger: Definitive Edition", "price": "6.92", "flag": "🇵🇭", "date": "08.07", "status": " GP" },
  { "name": "Jubilee", "price": "0.14", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Jurassic World Evolution 2: Deluxe Edition", "price": "10.03", "flag": "🇪🇬", "date": "16.05", "status": " GP" },
  { "name": "Jurassic World Evolution 2: Dominion Bundle", "price": "11.48", "flag": "🇪🇬", "date": "16.05", "status": " GP" },
  { "name": "Just Dance 2018", "price": "0.0", "flag": "🇮🇸", "date": "", "status": "" },
  { "name": "Just a Phrase by POWGI", "price": "0.28", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Kao the Kangaroo: Anniversary Edition", "price": "1.25", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "KarmaZoo", "price": "0.55", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Katana Zero XB1", "price": "0.64", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "King of Seas", "price": "0.42", "flag": "🇹🇷", "date": "14.07", "status": "" },
  { "name": "Kingdom Come: Deliverance - Royal Edition", "price": "19.0", "flag": "🇧🇷", "date": "16.01", "status": " GP" },
  { "name": "Kingdom Come: Deliverance", "price": "1.0", "flag": "🇹🇷", "date": "16.01", "status": " GP" },
  { "name": "Kingdom Come: Deliverance", "price": "18.67", "flag": "🇮🇳", "date": "16.01", "status": " GP" },
  { "name": "Kingdom Two Crowns: Essentials Pack", "price": "1.71", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Kingdom Two Crowns: Olympus Edition", "price": "1.48", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Kitten Island (Windows)", "price": "0.47", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Kitten Island (Xbox One+Xbox Series+Windows)", "price": "1.05", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Kitten Island (Xbox Series)", "price": "0.47", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Klaus Lee - Thunderballs", "price": "0.73", "flag": "🇹🇷", "date": "11.07", "status": "" },
  { "name": "Knight Quest: Goblins Raid (Windows)", "price": "0.28", "flag": "🇹🇷", "date": "04.07", "status": "" },
  { "name": "Knight Quest: Goblins Raid (Xbox One)", "price": "0.28", "flag": "🇹🇷", "date": "04.07", "status": "" },
  { "name": "Knight Quest: Goblins Raid Xbox + Windows Bundle", "price": "0.45", "flag": "🇹🇷", "date": "04.07", "status": "" },
  { "name": "Knight Quest: Goblins Raid Xbox Bundle", "price": "0.6", "flag": "🇹🇷", "date": "04.07", "status": "" },
  { "name": "Knight Quest: Goblins Raid", "price": "0.28", "flag": "🇹🇷", "date": "04.07", "status": "" },
  { "name": "LEGO® Star Wars™: The Skywalker Saga Galactic Edition", "price": "11.48", "flag": "🇪🇬", "date": "01.11", "status": " GP" },
  { "name": "LEGO® Star Wars™:The Skywalker Saga Deluxe Edition", "price": "10.03", "flag": "🇪🇬", "date": "07.07", "status": " GP" },
  { "name": "Ladders by POWGI", "price": "0.28", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Lichtspeer: Double Speer Edition", "price": "0.07", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Life of Fly 2", "price": "0.4", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Life of Fly", "price": "0.53", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Light & Dark Bundle", "price": "3.67", "flag": "🇹🇷", "date": "02.11", "status": "" },
  { "name": "Little Strays", "price": "13.13", "flag": "🇯🇵", "date": "05.07", "status": "" },
  { "name": "Lonely Mountains: Snow Riders - Supporter Bundle", "price": "1.63", "flag": "🇹🇷", "date": "16.01", "status": " GP" },
  { "name": "Loop Hero", "price": "0.5", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Lords of the Fallen Deluxe Edition", "price": "10.86", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Lost Ruins", "price": "0.56", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Love is all around (Xbox)", "price": "4.51", "flag": "🇭🇰", "date": "08.07", "status": "" },
  { "name": "Lovecraft's Untold Stories", "price": "0.21", "flag": "🇹🇷", "date": "10.07", "status": "" },
  { "name": "Lunar Axe", "price": "0.34", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Lunar Lander Beyond", "price": "2.15", "flag": "🇳🇬", "date": "07.07", "status": "" },
  { "name": "Luxury Garden Bundle", "price": "3.41", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Lynked: Banner of the Spark - Complete Bundle", "price": "16.22", "flag": "🇧🇷", "date": "08.07", "status": " GP" },
  { "name": "Lynked: Banner of the Spark", "price": "12.77", "flag": "🇧🇷", "date": "08.07", "status": " GP" },
  { "name": "MARS 2120", "price": "6.44", "flag": "🇧🇷", "date": "08.07", "status": "" },
  { "name": "MINIT", "price": "0.19", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "MXGP 2020 - The Official Motocross Videogame", "price": "2.33", "flag": "🇮🇳", "date": "08.07", "status": "" },
  { "name": "Madden NFL 19", "price": "28.93", "flag": "🇨🇴", "date": "30.12", "status": "" },
  { "name": "Mafia II: Definitive Edition", "price": "1.0", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Mafia III: Definitive Edition", "price": "1.0", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Mafia: Definitive Edition", "price": "0.97", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Maggie the Magnet", "price": "1.26", "flag": "🇮🇳", "date": "08.07", "status": "" },
  { "name": "Malu the Princess", "price": "0.25", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Maneater Apex Edition", "price": "0.89", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Maneater", "price": "0.71", "flag": "🇹🇷", "date": "08.07", "status": " GP" },
  { "name": "Mars Survivor: Gold Edition", "price": "4.54", "flag": "🇵🇭", "date": "04.07", "status": "" },
  { "name": "Marvel's Midnight Suns Digital+ Edition for Xbox One", "price": "4.51", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Marvel's Midnight Suns Digital+ Edition for Xbox Series X|S", "price": "4.51", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Masters of Anima", "price": "0.23", "flag": "🇹🇷", "date": "08.07", "status": " GP" },
  { "name": "Match Village", "price": "0.34", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "McPixel 3", "price": "0.2", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "MechWarrior 5: Clans Digital Collectors Edition", "price": "2.84", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "MechWarrior 5: Mercenaries - JumpShip Edition", "price": "4.03", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Metal Wolf Chaos XD", "price": "0.89", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Metaphor: ReFantazio Atlus 35th Digital Anniversary Edition", "price": "61.23", "flag": "🇺🇦", "date": "01.07", "status": " GP" },
  { "name": "MetroLand", "price": "0.34", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.0", "flag": "🇺🇸", "date": "30.11", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.0", "flag": "🇺🇸", "date": "30.11", "status": "" },
  { "name": "Microsoft Flight Simulator 2024 - Aviator Edition", "price": "93.69", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Microsoft Flight Simulator 2024 - Deluxe Edition", "price": "46.84", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Microsoft Flight Simulator 2024 - Premium Deluxe Edition", "price": "50.32", "flag": "🇺🇦", "date": "30.12", "status": " GP" },
  { "name": "Microsoft Flight Simulator Deluxe 40th Anniversary Edition", "price": "12.23", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Microsoft Flight Simulator Premium Deluxe 40th Anniversar...", "price": "16.26", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Middle-earth™: Shadow of War™ Definitive Edition", "price": "4.39", "flag": "🇹🇷", "date": "07.07", "status": " GP" },
  { "name": "Middle-earth™: The Shadow Bundle", "price": "12.03", "flag": "🇹🇷", "date": "07.07", "status": " GP" },
  { "name": "Mimi the Cat: Mimi's Scratcher (Windows)", "price": "0.14", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Mimi the Cat: Mimi's Scratcher", "price": "0.14", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Mind’s Descent Bundle", "price": "1.64", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle - Windows 10", "price": "1.27", "flag": "🇹🇷", "date": "27.07", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle", "price": "1.27", "flag": "🇹🇷", "date": "27.07", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate Edition for Windows", "price": "5.74", "flag": "🇪🇬", "date": "27.07", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate Edition", "price": "5.46", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Minecraft Legends Deluxe Edition", "price": "6.83", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Minecraft Triple Bundle", "price": "30.75", "flag": "🇺🇦", "date": "", "status": "" },
  { "name": "Minecraft: Deluxe Collection", "price": "4.1", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Missile Command Delta", "price": "10.88", "flag": "🇺🇦", "date": "07.07", "status": "" },
  { "name": "Mists of Noyah", "price": "0.68", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Mixx Island: Remix Plus", "price": "0.2", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Monopoly Madness", "price": "1.57", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Monster Energy Supercross - The Official Videogame 6", "price": "3.5", "flag": "🇮🇳", "date": "08.07", "status": "" },
  { "name": "Monster Hunter Wilds Deluxe Edition", "price": "59.78", "flag": "🇮🇳", "date": "11.07", "status": "" },
  { "name": "Monster Hunter Wilds Premium Deluxe Edition", "price": "79.03", "flag": "🇹🇷", "date": "11.07", "status": "" },
  { "name": "Monster Hunter Wilds", "price": "44.83", "flag": "🇮🇳", "date": "11.07", "status": "" },
  { "name": "Monument Valley 3", "price": "5.42", "flag": "🇸🇦", "date": "21.07", "status": "" },
  { "name": "Moonlighter: Complete Edition", "price": "1.36", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Moonshine Inc. + Bio Inc. Redemption - Drinking Problem Deluxe Bundle", "price": "3.01", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Mortal Kombat 11 Ultimate + Injustice 2 Leg. Edition Bundle", "price": "17.24", "flag": "🇹🇷", "date": "07.07", "status": " GP" },
  { "name": "Mortal Kombat 11 Ultimate", "price": "8.01", "flag": "🇹🇷", "date": "07.07", "status": " GP" },
  { "name": "Mortal Kombat™ 1: Definitive Edition", "price": "22.42", "flag": "🇮🇳", "date": "03.07", "status": "" },
  { "name": "MotoGP™24", "price": "1.3", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Mount & Blade II: Bannerlord Digital Deluxe Edition", "price": "8.13", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Moving Out 2 - Deluxe Edition", "price": "4.49", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Mr. Run and Jump", "price": "1.46", "flag": "🇳🇬", "date": "07.07", "status": "" },
  { "name": "Mr.Slime in Dungeon (Windows)", "price": "0.25", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Mr.Slime in Dungeon (Xbox Series X|S)", "price": "0.25", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Mr.Slime in Dungeon", "price": "0.25", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Mugsters", "price": "0.23", "flag": "🇹🇷", "date": "14.07", "status": "" },
  { "name": "Musashi vs Cthulhu", "price": "0.34", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Mustache In Hell", "price": "0.34", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "My Bakery Empire", "price": "2.63", "flag": "🇵🇭", "date": "08.07", "status": "" },
  { "name": "My Bakery Empire: Complete Edition", "price": "3.42", "flag": "🇺🇦", "date": "08.07", "status": "" },
  { "name": "My Cozy Room", "price": "3.54", "flag": "🇮🇳", "date": "11.07", "status": "" },
  { "name": "My Friend Pedro", "price": "0.28", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Mystic Pathways: Crystal Quest Windows + Xbox Bundle", "price": "0.45", "flag": "🇹🇷", "date": "14.07", "status": "" },
  { "name": "Mystic Pathways: Crystal Quest Xbox Bundle", "price": "0.6", "flag": "🇹🇷", "date": "14.07", "status": "" },
  { "name": "MythForce", "price": "0.7", "flag": "🇹🇷", "date": "07.07", "status": "" },
  { "name": "NBA 2K25 Tournament Edition", "price": "14.01", "flag": "🇮🇳", "date": "08.07", "status": "" },
  { "name": "NHL® 24 Standard Edition Xbox One", "price": "18.68", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "NHL® 24 Standard Edition Xbox Series X|S", "price": "21.01", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "NHL® 25 Standard Edition + Loyalty Offer", "price": "23.35", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "NINJA GAIDEN: Master Collection Deluxe Edition", "price": "6.51", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Neckbreak", "price": "0.68", "flag": "🇹🇷", "date": "07.07", "status": "" },
  { "name": "Necromunda: Underhive Wars", "price": "0.48", "flag": "🇹🇷", "date": "08.07", "status": " GP" },
  { "name": "NeoSprint", "price": "1.79", "flag": "🇳🇬", "date": "07.07", "status": "" },
  { "name": "Neon Abyss Deluxe Edition", "price": "1.58", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "New Tales from the Borderlands: Deluxe Edition", "price": "7.52", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Nickelodeon All-Star Brawl 2 Deluxe Edition", "price": "10.03", "flag": "🇪🇬", "date": "01.01", "status": " GP" },
  { "name": "Nickelodeon All-Star Brawl 2 Ultimate Edition", "price": "11.48", "flag": "🇪🇬", "date": "01.01", "status": " GP" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.18", "flag": "🇹🇷", "date": "30.05", "status": "" },
  { "name": "No Heroes Here 2", "price": "0.87", "flag": "🇳🇬", "date": "01.07", "status": "" },
  { "name": "No Sun To Worship", "price": "0.82", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "OCTOPATH TRAVELER + OCTOPATH TRAVELER II Bundle", "price": "37.72", "flag": "🇹🇷", "date": "01.12", "status": " GP" },
  { "name": "Observation", "price": "0.27", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Olija", "price": "0.21", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "OneShot: World Machine Edition", "price": "0.69", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Ori: The Collection", "price": "6.83", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Outbreak: Epidemic", "price": "0.82", "flag": "🇮🇳", "date": "08.07", "status": " GP" },
  { "name": "Outbreak: The Nightmare Chronicles Definitive Edition", "price": "2.41", "flag": "🇮🇳", "date": "08.07", "status": " GP" },
  { "name": "Overcooked! + Overcooked! 2", "price": "0.62", "flag": "🇹🇷", "date": "14.07", "status": "" },
  { "name": "Overcooked! 2 - Gourmet Edition", "price": "1.81", "flag": "🇹🇷", "date": "07.07", "status": " GP" },
  { "name": "Overcooked: Gourmet Edition", "price": "0.28", "flag": "🇹🇷", "date": "14.07", "status": "" },
  { "name": "Overruled!", "price": "0.2", "flag": "🇹🇷", "date": "14.07", "status": "" },
  { "name": "PGA TOUR 2K25 Deluxe Edition", "price": "65.68", "flag": "🇮🇳", "date": "08.07", "status": "" },
  { "name": "PUSS!", "price": "0.15", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Paint Ball - Jump n Run", "price": "1.22", "flag": "🇺🇦", "date": "23.07", "status": "" },
  { "name": "Paper Dash - Invasion of Greed", "price": "0.47", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Paper Plane Arena - The Haunted House", "price": "0.47", "flag": "🇹🇷", "date": "08.07", "status": " GP" },
  { "name": "Pathfinders: Memories", "price": "0.32", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "Penarium", "price": "0.15", "flag": "🇹🇷", "date": "14.07", "status": "" },
  { "name": "Pepper Grinder", "price": "1.01", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Persona 3 Reload Digital Deluxe Edition", "price": "40.13", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Persona 3 Reload Digital Premium Edition", "price": "49.76", "flag": "🇺🇦", "date": "01.07", "status": " GP" },
  { "name": "Pets Bundle", "price": "2.28", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Phantom Abyss (Game Preview)", "price": "0.68", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Phoenix Point: Behemoth Edition", "price": "1.71", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Pikuniku", "price": "0.14", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Planet Alpha", "price": "0.38", "flag": "🇹🇷", "date": "14.07", "status": "" },
  { "name": "Plastomorphosis", "price": "0.41", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Pocket Witch", "price": "1.57", "flag": "🇮🇳", "date": "08.07", "status": "" },
  { "name": "Police Simulator: Patrol Officers: Extended Edition", "price": "4.75", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Police Simulator: Patrol Officers: Gold Edition", "price": "5.74", "flag": "🇪🇬", "date": "16.11", "status": " GP" },
  { "name": "Police Simulator: Patrol Officers: Ultimate Duty Edition", "price": "10.21", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "PowerWash Simulator – Ultimate Satisfaction Bundle", "price": "34.44", "flag": "🇺🇦", "date": "16.07", "status": " GP" },
  { "name": "Prehistoric Gal", "price": "2.51", "flag": "🇮🇳", "date": "05.07", "status": "" },
  { "name": "Prey®: Digital Deluxe Edition", "price": "23.09", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "Prince of Persia The Lost Crown", "price": "12.55", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Purpose 1951", "price": "3.1", "flag": "🇮🇳", "date": "08.07", "status": "" },
  { "name": "QUByte Classics: Zero Tolerance Collection by PIKO", "price": "0.68", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "RAGE 2: Deluxe Edition", "price": "9.03", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "RESIDENT EVIL 2 Deluxe Edition", "price": "25.12", "flag": "🇵🇭", "date": "16.09", "status": " GP" },
  { "name": "RIDE 4 - Special Edition", "price": "8.41", "flag": "🇮🇳", "date": "08.07", "status": "" },
  { "name": "RIDE 4", "price": "4.96", "flag": "🇰🇷", "date": "08.07", "status": "" },
  { "name": "RISK", "price": "0.35", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Rabio", "price": "0.14", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Raccoo Venture", "price": "1.01", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Rage Of The Dragons NEO", "price": "6.9", "flag": "🇧🇷", "date": "08.07", "status": "" },
  { "name": "Raging Justice", "price": "0.35", "flag": "🇹🇷", "date": "14.07", "status": "" },
  { "name": "Railway Islands - Puzzle", "price": "1.19", "flag": "🇧🇷", "date": "08.07", "status": "" },
  { "name": "Raptor Boyfriend: A High School Romance", "price": "3.06", "flag": "🇮🇳", "date": "08.07", "status": "" },
  { "name": "ReCore", "price": "2.73", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Red Dead Online", "price": "8.77", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Red Dead Redemption & Red Dead Redemption 2 Bundle", "price": "35.12", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Regular Moonstone Pack -- 2,500", "price": "2.54", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Restaurant Tycoon: My Cooking Empire", "price": "0.45", "flag": "🇹🇷", "date": "05.07", "status": "" },
  { "name": "Retro Tank Arcade", "price": "0.07", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Return to Monkey Island", "price": "1.69", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Reverie Knights Tactics", "price": "0.45", "flag": "🇹🇷", "date": "10.07", "status": "" },
  { "name": "Riders Republic™ 360 Edition", "price": "26.1", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Riders Republic™ Complete Edition", "price": "35.13", "flag": "🇹🇷", "date": "07.07", "status": " GP" },
  { "name": "Riders Republic™ Skate Edition", "price": "20.08", "flag": "🇹🇷", "date": "07.07", "status": " GP" },
  { "name": "Rise of the Tomb Raider: 20 Year Celebration", "price": "10.47", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Risk of Rain 2 + Survivors of the Void + Seekers of the Storm Bundle", "price": "20.43", "flag": "🇮🇳", "date": "08.07", "status": "" },
  { "name": "Road 96: Mile 0 – Full Journey Bundle", "price": "3.64", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Road Defense: Outsiders", "price": "0.47", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Road Redemption", "price": "0.49", "flag": "🇹🇷", "date": "08.07", "status": " GP" },
  { "name": "Robozarro", "price": "1.11", "flag": "🇮🇳", "date": "08.07", "status": "" },
  { "name": "Rock 'N Racing 3 in 1", "price": "0.28", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Rocket Rats Windows", "price": "0.26", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Rocket Rats Xbox One", "price": "0.26", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Rocket Rats", "price": "0.26", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Rogue Explorer", "price": "1.52", "flag": "🇮🇳", "date": "08.07", "status": "" },
  { "name": "Rogue Sentry", "price": "3.04", "flag": "🇮🇳", "date": "08.07", "status": "" },
  { "name": "Roman Rumble in Las Vegum - Asterix & Obelix XXL 2", "price": "2.17", "flag": "🇨🇱", "date": "08.07", "status": " GP" },
  { "name": "Royal Roads Bundle", "price": "0.36", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Ruiner", "price": "0.14", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "S.T.A.L.K.E.R. 2: Heart of Chornobyl Deluxe Edition – Xbox Edition", "price": "38.14", "flag": "🇹🇷", "date": "16.11", "status": " GP" },
  { "name": "S.T.A.L.K.E.R. 2: Heart of Chornobyl Ultimate Edition", "price": "50.19", "flag": "🇹🇷", "date": "16.11", "status": " GP" },
  { "name": "SHINOBI: Art of Vengeance Digital Deluxe Edition", "price": "20.05", "flag": "🇹🇼", "date": "26.08", "status": "" },
  { "name": "SHINOBI: Art of Vengeance", "price": "15.12", "flag": "🇹🇼", "date": "29.08", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "10.57", "flag": "🇹🇷", "date": "31.12", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "6.99", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "STEEP", "price": "0.79", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "SUPERHOT ONE OF US BUNDLE", "price": "1.78", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "Sausage Wars", "price": "3.27", "flag": "🇵🇭", "date": "04.07", "status": "" },
  { "name": "Screw Master: Ultimate Edition", "price": "0.53", "flag": "🇹🇷", "date": "05.07", "status": "" },
  { "name": "Sea of Thieves", "price": "5.2", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Sea of Thieves: 2025 Deluxe Edition", "price": "6.51", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Sea of Thieves: 2025 Premium Edition", "price": "7.74", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Sea of Thieves: X Edition", "price": "10.34", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Serious Sam 4", "price": "0.43", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Serious Sam Collection", "price": "0.32", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Serious Sam: Siberian Mayhem", "price": "0.68", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Sheltered", "price": "0.65", "flag": "🇹🇷", "date": "14.07", "status": "" },
  { "name": "Sid Meier’s Civilization® VI Anthology", "price": "6.51", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Simulator Pack: Gas Station Simulator and Barn Finders", "price": "1.39", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Skautfold: Into the Fray", "price": "1.92", "flag": "🇮🇳", "date": "08.07", "status": " GP" },
  { "name": "Skull and Bones Premium Edition", "price": "12.24", "flag": "🇰🇷", "date": "08.07", "status": "" },
  { "name": "Skyrim Anniversary Edition + Fallout 4 G.O.T.Y Bundle", "price": "16.06", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Small Moonstone Pack -- 1,200", "price": "1.3", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Smart Moves (for Windows 10)", "price": "0.11", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Smart Moves 2 (for Windows 10)", "price": "0.11", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Smoots Summer Games", "price": "0.18", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Sniper Elite: Resistance Deluxe Edition", "price": "12.23", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "SnowRunner - 1-Anniversary Edition", "price": "3.76", "flag": "🇹🇷", "date": "08.07", "status": " GP" },
  { "name": "SnowRunner - 1-Year Anniversary Edition (Windows 10)", "price": "3.01", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "SnowRunner - 2-Year Anniversary Edition", "price": "26.1", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "SnowRunner - 3-Year Anniversary Edition", "price": "32.12", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "SnowRunner - 4-Year Anniversary Edition", "price": "38.14", "flag": "🇹🇷", "date": "07.07", "status": " GP" },
  { "name": "SokoWinter", "price": "0.34", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Sophstar", "price": "0.18", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "South Park™: The Fractured but Whole™ - Gold Edition", "price": "26.1", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "South of Midnight Premium Edition", "price": "21.77", "flag": "🇺🇦", "date": "07.07", "status": " GP" },
  { "name": "South of Midnight Premium Upgrade Edition", "price": "4.35", "flag": "🇺🇦", "date": "31.12", "status": " GP" },
  { "name": "Sparkle Bundle", "price": "0.82", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Splash Cars", "price": "1.55", "flag": "🇮🇳", "date": "08.07", "status": "" },
  { "name": "Sports Pinball Bundle", "price": "0.12", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Spyro™ + Crash Remastered Game Bundle", "price": "10.2", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Star Trucker - Deluxe Bundle", "price": "4.1", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Star Wars Outlaws Deluxe Edition", "price": "34.29", "flag": "🇧🇷", "date": "08.07", "status": "" },
  { "name": "Star Wars Outlaws Ultimate Edition", "price": "56.43", "flag": "🇰🇷", "date": "08.07", "status": "" },
  { "name": "Starfield Premium Edition Upgrade", "price": "5.64", "flag": "🇪🇬", "date": "05.09", "status": " GP" },
  { "name": "Starfield Premium Edition", "price": "14.39", "flag": "🇪🇬", "date": "30.12", "status": " GP" },
  { "name": "Staying Fresh", "price": "0.53", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "SteamWorld Build & Dig Bundle", "price": "4.75", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "SteamWorld Build Deluxe Edition", "price": "4.49", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Stellaris: Console Edition - Deluxe Edition", "price": "3.44", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Stellaris: Console Edition - Starter Edition", "price": "6.83", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Still Wakes the Deep - The Complete Collection", "price": "5.46", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Stories Untold", "price": "0.07", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Storyblocks: The King (Windows)", "price": "0.11", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Storyblocks: The King", "price": "0.11", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Strike Mission XS", "price": "0.48", "flag": "🇹🇷", "date": "10.07", "status": "" },
  { "name": "Strike Mission", "price": "0.48", "flag": "🇹🇷", "date": "10.07", "status": "" },
  { "name": "Sunset Bike Racing Pro", "price": "0.11", "flag": "🇹🇷", "date": "07.07", "status": "" },
  { "name": "Sunset Overdrive Deluxe Edition", "price": "1.39", "flag": "🇹🇷", "date": "31.05", "status": " GP" },
  { "name": "Super Pixel Kid Adventure", "price": "0.07", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Super XYX", "price": "4.49", "flag": "🇮🇳", "date": "08.07", "status": "" },
  { "name": "TEMPUS - Level Escape", "price": "0.25", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Taiko no Tatsujin: Rhythm Festival Taiko Music Pass", "price": "0.0", "flag": "🇳🇬", "date": "30.11", "status": "" },
  { "name": "Tales from the Borderlands", "price": "2.71", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Tchia: Oléti Edition", "price": "7.03", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Techno Banter", "price": "6.25", "flag": "🇮🇳", "date": "08.07", "status": "" },
  { "name": "Teenage Mutant Ninja Turtles: Mutants Unleashed - Digital Deluxe Edition", "price": "22.2", "flag": "🇹🇷", "date": "07.07", "status": " GP" },
  { "name": "Teenage Mutant Ninja Turtles: Shredder's Revenge - Ultimate Edition", "price": "4.49", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Teenage Mutant Ninja Turtles: Splintered Fate - Launch Offer", "price": "4.29", "flag": "🇪🇬", "date": "08.07", "status": " GP" },
  { "name": "Tell Me Why: Chapters 1-3", "price": "0.0", "flag": "🇺🇸", "date": "01.07", "status": "" },
  { "name": "Teocida + Estigma", "price": "2.76", "flag": "🇧🇷", "date": "08.07", "status": "" },
  { "name": "Terraformers: New Frontiers Bundle", "price": "6.55", "flag": "🇹🇷", "date": "08.07", "status": " GP" },
  { "name": "Tetris® Forever", "price": "14.99", "flag": "🇺🇦", "date": "07.07", "status": "" },
  { "name": "The Backrooms CodeRed", "price": "0.69", "flag": "🇹🇷", "date": "19.07", "status": "" },
  { "name": "The Bard's Tale Trilogy", "price": "0.63", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "The Callisto Protocol™ for Xbox One – Digital Deluxe Edition", "price": "14.55", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "The Callisto Protocol™ for Xbox Series X|S – Digital Delu...", "price": "17.06", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "The Creepy Syndrome", "price": "0.18", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "The Crew Motorfest Deluxe Edition", "price": "12.05", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "The Crew Motorfest Gold Edition", "price": "15.37", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "The Crew Motorfest Ultimate Edition", "price": "18.0", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "The Elder Scrolls III: Morrowind", "price": "0.98", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "The Elder Scrolls III: Morrowind", "price": "6.53", "flag": "🇮🇳", "date": "31.12", "status": " GP" },
  { "name": "The Elder Scrolls IV: Oblivion Remastered - Deluxe Edition Upgrade", "price": "6.6", "flag": "🇯🇵", "date": "21.07", "status": " GP" },
  { "name": "The Elder Scrolls IV: Oblivion Remastered - Deluxe Edition", "price": "38.33", "flag": "🇵🇭", "date": "21.07", "status": " GP" },
  { "name": "The Elder Scrolls Online: 2025 Premium Edition", "price": "47.18", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Elder Scrolls V: Skyrim Anniversary Edition", "price": "9.64", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Escapists & The Escapists: The Walking Dead", "price": "0.45", "flag": "🇹🇷", "date": "14.07", "status": "" },
  { "name": "The Escapists: Supermax Edition", "price": "0.38", "flag": "🇹🇷", "date": "05.07", "status": "" },
  { "name": "The Evil Within Digital Bundle", "price": "2.03", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Excrawlers", "price": "0.18", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "The Explorer Of Night (for Windows 10)", "price": "0.13", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "The Hellblade Bundle", "price": "10.35", "flag": "🇪🇬", "date": "30.12", "status": " GP" },
  { "name": "The Jackbox Party Quadpack", "price": "5.36", "flag": "🇹🇷", "date": "31.12", "status": "" },
  { "name": "The Last DeadEnd", "price": "0.12", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "The Making of Karateka", "price": "0.71", "flag": "🇹🇷", "date": "07.07", "status": "" },
  { "name": "The Messenger", "price": "0.28", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "The Quarry - Deluxe Edition", "price": "2.97", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "The Rumble Fish +", "price": "1.0", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "The Rumble Fish 2", "price": "3.09", "flag": "🇳🇬", "date": "08.07", "status": " GP" },
  { "name": "The Serpent Rogue", "price": "0.37", "flag": "🇹🇷", "date": "07.07", "status": "" },
  { "name": "The Shadow Warrior Trilogy", "price": "1.63", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "The Talos Principle Collection", "price": "2.73", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "This War of Mine - Complete Edition", "price": "1.53", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "Timothy vs the Aliens", "price": "0.21", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Deluxe Edition", "price": "2.07", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Ultimate Edition", "price": "3.58", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Tom Clancy's Rainbow Six Siege X - Ultimate Edition", "price": "26.15", "flag": "🇮🇳", "date": "01.07", "status": " GP" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Ultimate Edition", "price": "10.62", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Year 2 Gold Edition", "price": "8.03", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Tom Clancy’s The Division 2 - Gold Edition", "price": "29.11", "flag": "🇹🇷", "date": "07.07", "status": " GP" },
  { "name": "Tom Clancy’s The Division 2 - Ultimate Edition", "price": "36.14", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Tomb Raider: Definitive Survivor Trilogy", "price": "17.46", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Top Racer Collection", "price": "6.44", "flag": "🇧🇷", "date": "08.07", "status": "" },
  { "name": "TopSpin 2K25 Deluxe Edition", "price": "19.74", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Totally Reliable Delivery Service Deluxe Edition", "price": "1.36", "flag": "🇹🇷", "date": "01.12", "status": " GP" },
  { "name": "Towerborne - 1,000 Belfry Bucks", "price": "5.38", "flag": "🇺🇦", "date": "30.12", "status": " GP" },
  { "name": "Towerborne - 2,000 (+200 Bonus) Belfry Bucks", "price": "10.88", "flag": "🇺🇦", "date": "30.12", "status": " GP" },
  { "name": "Towerborne - 5,000 (+1000 Bonus) Belfry Bucks", "price": "27.68", "flag": "🇺🇦", "date": "30.12", "status": " GP" },
  { "name": "Towerborne - 500 Belfry Bucks", "price": "2.75", "flag": "🇺🇦", "date": "30.12", "status": " GP" },
  { "name": "Towerborne: Gold Founder's Pack", "price": "24.77", "flag": "🇺🇦", "date": "28.07", "status": " GP" },
  { "name": "Towerborne: Platinum Founder's Pack", "price": "30.6", "flag": "🇿🇦", "date": "28.07", "status": " GP" },
  { "name": "Towerborne: Silver Founder's Pack", "price": "13.55", "flag": "🇹🇷", "date": "28.07", "status": " GP" },
  { "name": "Trailmakers: Booster Edition", "price": "1.98", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers: Deluxe Edition", "price": "2.84", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers: Ultimate Edition", "price": "3.41", "flag": "🇹🇷", "date": "07.07", "status": " GP" },
  { "name": "Trepang2", "price": "2.05", "flag": "🇳🇬", "date": "07.07", "status": "" },
  { "name": "Tribes of Midgard Deluxe Edition", "price": "0.98", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Troopers", "price": "2.82", "flag": "🇺🇦", "date": "01.07", "status": "" },
  { "name": "True Survivors Bundle", "price": "18.62", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Turnip Boy Robs a Bank Pre-Release", "price": "0.85", "flag": "🇹🇷", "date": "15.07", "status": " GP" },
  { "name": "UFC® 5 Standard Edition", "price": "26.27", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "UFC® 5 Ultimate Edition", "price": "29.97", "flag": "🇰🇷", "date": "09.07", "status": "" },
  { "name": "UFO ROBOT GRENDIZER – The Feast of the Wolves - Deluxe", "price": "10.1", "flag": "🇹🇷", "date": "08.07", "status": " GP" },
  { "name": "Ufouria: The Saga 2", "price": "6.27", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Undead Horde 2: Necropolis", "price": "0.42", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "1.03", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Urban Trial Tricky Deluxe Edition", "price": "0.25", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "VASARA Collection", "price": "2.76", "flag": "🇧🇷", "date": "08.07", "status": "" },
  { "name": "VISCO Collection", "price": "5.52", "flag": "🇧🇷", "date": "08.07", "status": "" },
  { "name": "Vanity Fair: The Pursuit", "price": "6.59", "flag": "🇭🇰", "date": "08.07", "status": "" },
  { "name": "Vermintide - Digital Value Pack", "price": "2.21", "flag": "🇹🇷", "date": "07.03", "status": "" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "7.9", "flag": "🇹🇷", "date": "30.08", "status": "" },
  { "name": "Warhammer 40,000: Boltgun - Forges of Corruption Edition", "price": "6.66", "flag": "🇹🇷", "date": "08.07", "status": " GP" },
  { "name": "Warhammer 40,000: Darktide - Imperial Edition", "price": "9.76", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Warhammer 40,000: Rogue Trader - Deluxe Edition", "price": "9.3", "flag": "🇪🇬", "date": "07.07", "status": " GP" },
  { "name": "Warhammer 40,000: Rogue Trader - Voidfarer Edition", "price": "14.39", "flag": "🇪🇬", "date": "07.07", "status": " GP" },
  { "name": "Warhammer 40,000: Space Marine 2", "price": "28.29", "flag": "🇹🇷", "date": "08.07", "status": " GP" },
  { "name": "Warhammer Age of Sigmar: Storm Ground", "price": "0.71", "flag": "🇹🇷", "date": "08.07", "status": " GP" },
  { "name": "Warhammer: Vermintide 2 - Premium Edition", "price": "1.91", "flag": "🇹🇷", "date": "16.05", "status": " GP" },
  { "name": "Warhammer: Vermintide 2 - Ultimate Edition", "price": "2.56", "flag": "🇹🇷", "date": "16.05", "status": " GP" },
  { "name": "Warhammer: Vermintide 2 – Winds of Magic Bundle", "price": "2.13", "flag": "🇹🇷", "date": "16.05", "status": " GP" },
  { "name": "Wasteland 3 (PC) Colorado Collection", "price": "6.83", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Wasteland 3 Colorado Collection", "price": "8.81", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "Watch Dogs: Legion - Deluxe Edition", "price": "13.55", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Watch Dogs®2 - Deluxe Edition", "price": "29.11", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Watch Dogs®2 - Gold Edition", "price": "41.15", "flag": "🇹🇷", "date": "07.07", "status": " GP" },
  { "name": "Watch Dogs®: Legion Gold Edition", "price": "16.06", "flag": "🇹🇷", "date": "07.07", "status": " GP" },
  { "name": "Watch Dogs®: Legion Ultimate Edition", "price": "19.07", "flag": "🇹🇷", "date": "07.07", "status": " GP" },
  { "name": "Watch Dogs®: Legion", "price": "2.26", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "We Happy Few Digital Deluxe", "price": "6.37", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "We Love Katamari REROLL+ Royal Reverie Special Edition", "price": "5.59", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Weird West", "price": "0.82", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Where the Water Tastes Like Wine: Xbox Edition", "price": "0.33", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Who Wants to Be a Millionaire? - Complete Edition", "price": "10.98", "flag": "🇹🇷", "date": "08.07", "status": " GP" },
  { "name": "Wild Dogs", "price": "2.76", "flag": "🇧🇷", "date": "08.07", "status": "" },
  { "name": "Wild Pinball Bundle", "price": "0.12", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Willy's Wonderland - The Game", "price": "0.34", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Without a Voice (PC)", "price": "2.51", "flag": "🇮🇳", "date": "02.07", "status": "" },
  { "name": "Without a Voice (Xbox & PC)", "price": "3.03", "flag": "🇮🇳", "date": "02.07", "status": "" },
  { "name": "Without a Voice", "price": "2.51", "flag": "🇮🇳", "date": "02.07", "status": "" },
  { "name": "Wizard with a Gun: Bounty Edition", "price": "1.19", "flag": "🇳🇬", "date": "08.07", "status": "" },
  { "name": "Wizodd", "price": "0.18", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Wolfenstein: Alt History Collection", "price": "10.04", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Wolfenstein: Youngblood Deluxe Edition", "price": "4.39", "flag": "🇹🇷", "date": "17.02", "status": " GP" },
  { "name": "Wolfenstein® II: The New Colossus™ Digital Deluxe Edition", "price": "6.02", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "Wolfenstein®: The Two-Pack", "price": "3.19", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "World War Z: Aftermath - Deluxe Edition", "price": "13.05", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Wreckfest Complete Edition", "price": "20.18", "flag": "🇨🇱", "date": "16.11", "status": " GP" },
  { "name": "XCOM® 2 Digital Deluxe Edition", "price": "0.8", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "XCOM® 2", "price": "0.3", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Yars: Recharged", "price": "0.41", "flag": "🇳🇬", "date": "07.07", "status": "" },
  { "name": "ZombFarm", "price": "1.88", "flag": "🇮🇳", "date": "08.07", "status": "" },
  { "name": "qomp2", "price": "1.43", "flag": "🇳🇬", "date": "07.07", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Ultimate Hunting Bundle", "price": "43.2", "flag": "🇮🇳", "date": "01.06", "status": " GP" },
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



