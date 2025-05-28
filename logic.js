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
  { "name": "4-in-1 Adventure Bundle", "price": "29.57", "flag": "🇧🇷", "date": "03.06", "status": "" },
  { "name": "4-in-1 Award Winning Bundle", "price": "26.22", "flag": "🇧🇷", "date": "03.06", "status": "" },
  { "name": "4250 Ancient Coins - Glittering Tribute of the Ancients", "price": "5.6", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "550 Ancient Coins - Lost Chest of the Ancients", "price": "0.96", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "8-Ball Pocket", "price": "0.11", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "9 Monkeys of Shaolin + Ash of Gods + Redeemer: Bundle", "price": "0.45", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "9Ball Pocket", "price": "0.11", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "A Juggler's Tale", "price": "0.13", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "A Plague Tale Bundle", "price": "8.06", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "A Space for the Unbound", "price": "0.72", "flag": "🇹🇷", "date": "05.06", "status": "" },
  { "name": "AFL 23", "price": "15.26", "flag": "🇮🇳", "date": "03.06", "status": "" },
  { "name": "AO Tennis 2", "price": "1.9", "flag": "🇮🇳", "date": "03.06", "status": "" },
  { "name": "ARCADE GAME SERIES: Ms. PAC-MAN", "price": "0.15", "flag": "🇹🇷", "date": "04.06", "status": "" },
  { "name": "ARCADE GAME SERIES: PAC-MAN", "price": "0.15", "flag": "🇹🇷", "date": "04.06", "status": "" },
  { "name": "ASTRONEER: Evolution Edition", "price": "5.3", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "ASTRONEER: Glitchwalkers Deluxe Edition", "price": "5.3", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "ASTRONEER: Glitchwalkers Edition", "price": "4.6", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Aborigenus", "price": "0.09", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Ad Infinitum - Nightmare Edition Pre-order", "price": "4.44", "flag": "🇮🇳", "date": "03.06", "status": "" },
  { "name": "Adventures of Bertram Fiddle: Episode 1: A Dreadly Business", "price": "0.07", "flag": "🇹🇷", "date": "05.06", "status": "" },
  { "name": "Adventures of Bertram Fiddle: Episode 2: A Bleaker Predicklement", "price": "0.07", "flag": "🇹🇷", "date": "05.06", "status": "" },
  { "name": "Aery - Path of Corruption", "price": "0.4", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Aery - The Lost Hero", "price": "0.44", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Aery - Vikings", "price": "0.4", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Agatha Christie Collection 2", "price": "21.88", "flag": "🇦🇺", "date": "03.06", "status": "" },
  { "name": "Agatha Christie Collection", "price": "4.75", "flag": "🇮🇳", "date": "03.06", "status": "" },
  { "name": "Age of Empires 25th Anniversary Collection", "price": "6.96", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Age of Empires: Definitive Collection", "price": "5.93", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Age of Mythology: Retold Premium Edition", "price": "20.45", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Alien Cat Story (Windows)", "price": "0.29", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "All You Need is Help Lively Friends Bundle", "price": "9.68", "flag": "🇺🇦", "date": "01.10", "status": " GP" },
  { "name": "Ambulance Life: A Paramedic Simulator", "price": "12.72", "flag": "🇮🇳", "date": "03.06", "status": "" },
  { "name": "America’s Greatest Game Shows: Wheel of Fortune® & Jeopar...", "price": "3.32", "flag": "🇧🇷", "date": "03.06", "status": "" },
  { "name": "Anno 1800™ Console Edition - Deluxe", "price": "11.77", "flag": "🇹🇷", "date": "31.05", "status": "" },
  { "name": "Anno 1800™ Console Edition", "price": "9.21", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Antstream Arcade", "price": "7.09", "flag": "🇧🇷", "date": "05.06", "status": " GP" },
  { "name": "Arcade Paradise | High Score Edition", "price": "3.72", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Ashen: Definitive Edition", "price": "6.3", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Assassin's Creed Antiquity Pack", "price": "46.79", "flag": "🇧🇷", "date": "03.06", "status": "" },
  { "name": "Assassin's Creed Legendary Collection", "price": "85.08", "flag": "🇧🇷", "date": "03.06", "status": "" },
  { "name": "Assassin's Creed Triple Pack: Black Flag, Unity, Syndicate", "price": "1.81", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Assassin's Creed® Bundle: Assassin's Creed® Valhalla, Ass...", "price": "32.76", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Assassin's Creed® Odyssey - DELUXE EDITION", "price": "14.33", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey - GOLD EDITION", "price": "16.38", "flag": "🇹🇷", "date": "02.06", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey - ULTIMATE EDITION", "price": "18.94", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Origins - DELUXE EDITION", "price": "13.82", "flag": "🇹🇷", "date": "02.06", "status": " GP" },
  { "name": "Assassin's Creed® Origins - GOLD EDITION", "price": "16.38", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Complete Edition", "price": "20.48", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Deluxe Edition", "price": "15.87", "flag": "🇹🇷", "date": "02.06", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Ragnarök Edition", "price": "12.29", "flag": "🇹🇷", "date": "02.06", "status": " GP" },
  { "name": "Assassin’s Creed Mirage & Assassin's Creed Valhalla Bundle", "price": "10.98", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Assassin’s Creed® Valhalla + Immortals Fenyx Rising™ Bundle", "price": "51.19", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Assassin’s Creed® Valhalla + Watch Dogs®: Legion Bundle", "price": "23.55", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Assault On Metaltron", "price": "0.08", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Assetto Corsa Competizione - 2024 Pack", "price": "17.72", "flag": "🇧🇷", "date": "11.06", "status": "" },
  { "name": "Assetto Corsa Ultimate Edition", "price": "0.64", "flag": "🇹🇷", "date": "11.06", "status": "" },
  { "name": "Asterix & Obelix: Heroes", "price": "2.57", "flag": "🇮🇳", "date": "03.06", "status": "" },
  { "name": "Astro Miner", "price": "3.68", "flag": "🇰🇷", "date": "30.05", "status": "" },
  { "name": "Atari Recharged Bundle: Asteroids + Breakout", "price": "3.86", "flag": "🇺🇦", "date": "03.06", "status": "" },
  { "name": "Atari Recharged Bundle: Berzerk + Quantum", "price": "4.41", "flag": "🇺🇦", "date": "03.06", "status": "" },
  { "name": "Atari Recharged Bundle: Centipede + Black Widow", "price": "4.41", "flag": "🇺🇦", "date": "03.06", "status": "" },
  { "name": "Atari Recharged Bundle: Gravitar + Missile Command", "price": "3.86", "flag": "🇺🇦", "date": "03.06", "status": "" },
  { "name": "Atari Recharged Bundle: Yars + Caverns of Mars", "price": "3.86", "flag": "🇺🇦", "date": "03.06", "status": "" },
  { "name": "Atomfall Deluxe Edition", "price": "12.83", "flag": "🇪🇬", "date": "02.06", "status": " GP" },
  { "name": "Aureole - Wings of Hope", "price": "1.31", "flag": "🇳🇬", "date": "06.06", "status": "" },
  { "name": "Aven Colony", "price": "0.64", "flag": "🇹🇷", "date": "28.05", "status": "" },
  { "name": "Avowed Premium Edition", "price": "22.13", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Awarded Platformer Bundle", "price": "1.02", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "BATTLETECH Mercenary Collection", "price": "5.22", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "BIOHAZARD RE:2 Z Version デラックスエディション", "price": "27.69", "flag": "🇯🇵", "date": "02.06", "status": " GP" },
  { "name": "Bahnsen Knights", "price": "0.29", "flag": "🇹🇷", "date": "05.06", "status": "" },
  { "name": "Batman: Arkham Collection", "price": "1.18", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Batman: Arkham Knight Premium Edition", "price": "2.66", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Battlefleet Gothic: Armada 2 - Windows 10", "price": "0.53", "flag": "🇳🇬", "date": "29.05", "status": "" },
  { "name": "Battlefleet Gothic: Armada", "price": "0.26", "flag": "🇹🇷", "date": "29.05", "status": "" },
  { "name": "Bay Breaker (Windows)", "price": "0.29", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Beautiful Indie Worlds", "price": "19.6", "flag": "🇧🇷", "date": "03.06", "status": "" },
  { "name": "Bee Flowers: Royal Garden (Windows)", "price": "0.29", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Bee Flowers: Royal Garden (Xbox One)", "price": "0.29", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Bee Flowers: Royal Garden Xbox + Windows Bundle", "price": "0.61", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Bee Flowers: Royal Garden Xbox Bundle", "price": "0.46", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Bee Flowers: Royal Garden", "price": "0.29", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Before We Leave", "price": "0.66", "flag": "🇳🇬", "date": "28.05", "status": "" },
  { "name": "Ben 10 Bundle", "price": "5.02", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Big Moonstone Pack -- 5,500", "price": "5.17", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Blasphemous + Blasphemous 2 Bundle", "price": "4.95", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "BlazBlue: Cross Tag Battle Special Edition", "price": "1.26", "flag": "🇳🇬", "date": "11.06", "status": "" },
  { "name": "Block Tower TD 2 (Windows)", "price": "0.59", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Blood Bowl 3 - Brutal Edition", "price": "7.17", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Blue Wednesday", "price": "0.73", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Bomb Bowling X (Windows)", "price": "0.29", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Borderlands 3: Next Level Edition", "price": "10.22", "flag": "🇹🇷", "date": "02.06", "status": " GP" },
  { "name": "Borderlands 3: Super Deluxe Edition", "price": "11.65", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "Bounty Battle", "price": "3.16", "flag": "🇮🇳", "date": "03.06", "status": "" },
  { "name": "Boxes Wizard (Xbox Series)", "price": "0.46", "flag": "🇳🇬", "date": "03.06", "status": "" },
  { "name": "Boxes Wizard", "price": "0.46", "flag": "🇳🇬", "date": "03.06", "status": "" },
  { "name": "Bright Side: Riddles and Puzzles", "price": "1.81", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Brotato & Abyssal Terrors DLC - Bundle", "price": "0.46", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Bulwark Evolution : Falconeer Chronicles - Mad Lector Bundle", "price": "2.13", "flag": "🇳🇬", "date": "03.06", "status": "" },
  { "name": "Bulwark Evolution : Falconeer Chronicles - Mongres Trader Bundle", "price": "1.18", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Bulwark: Falconeer Chronicles Origins Bundle", "price": "0.6", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Bundle - Pyramid Platformer - The Gem Heist", "price": "0.69", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Bundle: South Park™ : The Stick of Truth™ + The Fractured...", "price": "7.42", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "CODE SHIFTER", "price": "0.29", "flag": "🇹🇷", "date": "11.06", "status": "" },
  { "name": "Call of Duty®: Black Ops 6 - Vault Edition", "price": "50.65", "flag": "🇪🇬", "date": "28.05", "status": " GP" },
  { "name": "Call of Duty®: Black Ops 6 - Vault Edition", "price": "67.92", "flag": "🇧🇷", "date": "28.05", "status": " GP" },
  { "name": "Call of the Wild: The Angler™ - Ultimate Fishing Bundle", "price": "9.56", "flag": "🇪🇬", "date": "01.09", "status": " GP" },
  { "name": "Car Vouchers (10)", "price": "1.26", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Car Vouchers (24)", "price": "2.52", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Car Vouchers (4)", "price": "0.63", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Carmen Sandiego", "price": "4.26", "flag": "🇪🇬", "date": "29.05", "status": "" },
  { "name": "Cartoon Party Collection - 3 in 1", "price": "29.14", "flag": "🇭🇺", "date": "03.06", "status": "" },
  { "name": "Cassette Beasts - New Wirral Edition", "price": "1.74", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Cassette Beasts: Deluxe Edition", "price": "1.51", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Cattle Country", "price": "1.55", "flag": "🇹🇷", "date": "17.06", "status": "" },
  { "name": "Chef Life: A Restaurant Simulator", "price": "4.22", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Childhood Heroes - 3 in 1", "price": "31.35", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Chivalry 2 King's Edition", "price": "3.48", "flag": "🇹🇷", "date": "28.05", "status": " GP" },
  { "name": "Chivalry 2 Special Edition", "price": "2.89", "flag": "🇹🇷", "date": "28.05", "status": " GP" },
  { "name": "Choo-Choo Charles", "price": "0.5", "flag": "🇹🇷", "date": "03.06", "status": " GP" },
  { "name": "Cilla", "price": "2.72", "flag": "🇳🇬", "date": "03.06", "status": "" },
  { "name": "Cipher Monk (Windows)", "price": "0.29", "flag": "🇹🇷", "date": "04.06", "status": "" },
  { "name": "Cipher Monk (Xbox One)", "price": "0.29", "flag": "🇹🇷", "date": "04.06", "status": "" },
  { "name": "Cipher Monk Xbox + Windows Bundle", "price": "0.61", "flag": "🇹🇷", "date": "04.06", "status": "" },
  { "name": "Cipher Monk Xbox Bundle", "price": "0.46", "flag": "🇹🇷", "date": "04.06", "status": "" },
  { "name": "Cipher Monk", "price": "0.29", "flag": "🇹🇷", "date": "04.06", "status": "" },
  { "name": "Cities: Skylines - Mayor's Edition", "price": "28.22", "flag": "🇧🇷", "date": "01.04", "status": " GP" },
  { "name": "Cities: Skylines - Premium Edition 2", "price": "4.04", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "Citizen Sleeper: Helion Collection", "price": "5.3", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Clair Obscur: Expedition 33 – Deluxe Edition", "price": "22.11", "flag": "🇹🇷", "date": "23.07", "status": " GP" },
  { "name": "Clash: Artifacts of Chaos", "price": "3.21", "flag": "🇮🇳", "date": "03.06", "status": "" },
  { "name": "Cleopatra Fortune™ S-Tribute", "price": "5.5", "flag": "🇮🇸", "date": "03.06", "status": "" },
  { "name": "Cobra Kai Collection", "price": "7.6", "flag": "🇮🇳", "date": "03.06", "status": "" },
  { "name": "Coffee Talk Episode 2: Hibiscus and Butterfly", "price": "0.44", "flag": "🇹🇷", "date": "05.06", "status": "" },
  { "name": "Coffee Talk", "price": "0.41", "flag": "🇹🇷", "date": "05.06", "status": "" },
  { "name": "Collie Call (Windows)", "price": "0.29", "flag": "🇹🇷", "date": "06.06", "status": "" },
  { "name": "Collie Call (Xbox One)", "price": "0.29", "flag": "🇹🇷", "date": "06.06", "status": "" },
  { "name": "Collie Call", "price": "0.29", "flag": "🇹🇷", "date": "06.06", "status": "" },
  { "name": "Comic Book Legends", "price": "5.92", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Commandos 2 & 3 – HD Remaster Double Pack", "price": "1.75", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Commandos: Origins - Deluxe Edition", "price": "40.0", "flag": "🇮🇳", "date": "08.07", "status": " GP" },
  { "name": "Cook, Serve, Delicious! Trilogy Bundle!", "price": "0.76", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Crash Bandicoot™ Bundle - N. Sane Trilogy + CTR Nitro-Fueled", "price": "8.81", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Crash™ + Spyro™ Triple Play Bundle", "price": "11.86", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Crash™ Team Racing Nitro-Fueled + Spyro™ Game Bundle", "price": "8.81", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Crash™ Team Racing Nitro-Fueled - Nitros Oxide Edition", "price": "7.16", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Crazy Sports Bundle", "price": "0.05", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Creatures of Ava: Deluxe Edition", "price": "12.8", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Cricket 24", "price": "6.71", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Crisis Wing", "price": "2.03", "flag": "🇮🇳", "date": "03.06", "status": "" },
  { "name": "Crown Trick", "price": "0.66", "flag": "🇳🇬", "date": "03.06", "status": "" },
  { "name": "Crown Wars: The Black Prince", "price": "9.2", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Crusader Kings III: Royal Edition", "price": "31.31", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Cute Puppy Academy: Extended Edition", "price": "3.99", "flag": "🇨🇴", "date": "31.05", "status": "" },
  { "name": "Cyber Tank (Windows)", "price": "0.18", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Cyber Tank (Xbox One version)", "price": "0.18", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Cyber Tank 1+2 bundle", "price": "0.79", "flag": "🇹🇷", "date": "02.06", "status": "" },
  { "name": "Cyber Tank bundle", "price": "0.32", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "DCF Universe Triple Trouble Bundle", "price": "9.0", "flag": "🇮🇳", "date": "03.06", "status": "" },
  { "name": "DEAD ISLAND 2 GOLD EDITION", "price": "41.25", "flag": "🇰🇷", "date": "01.11", "status": " GP" },
  { "name": "DEATHLOOP Deluxe Edition", "price": "35.27", "flag": "🇪🇬", "date": "30.12", "status": " GP" },
  { "name": "DOOM + DOOM II", "price": "2.78", "flag": "🇨🇳", "date": "03.06", "status": "" },
  { "name": "DOOM Anthology", "price": "48.12", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "DOOM Eternal Deluxe Edition (PC)", "price": "12.29", "flag": "🇹🇷", "date": "03.12", "status": " GP" },
  { "name": "DOOM Eternal Deluxe Edition", "price": "12.29", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "DOOM Eternal: The Ancient Gods - Part One", "price": "4.35", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "DOOM Eternal: The Ancient Gods - Part Two", "price": "4.35", "flag": "🇹🇷", "date": "17.03", "status": " GP" },
  { "name": "DOOM Eternal: Year One Pass (PC)", "price": "6.56", "flag": "🇹🇷", "date": "03.12", "status": " GP" },
  { "name": "DOOM Eternal: Year One Pass", "price": "6.56", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "DRAGON BALL XENOVERSE 2 - Special Edition", "price": "6.78", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "DRAGON BALL XENOVERSE 2 DELUXE EDITION", "price": "5.42", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "DRAGON QUEST III HD-2D Remake", "price": "33.1", "flag": "🇳🇬", "date": "03.06", "status": " GP" },
  { "name": "DREDGE - Digital Deluxe Edition", "price": "3.53", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "DREDGE: Complete Edition", "price": "3.72", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Date Everything! - Pre-Order", "price": "21.05", "flag": "🇮🇳", "date": "16.06", "status": "" },
  { "name": "Date Everything! Lavish Edition - Pre-Order", "price": "23.68", "flag": "🇮🇳", "date": "16.06", "status": "" },
  { "name": "DayZ Cool Edition", "price": "4.04", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "DayZ", "price": "3.62", "flag": "🇳🇬", "date": "03.06", "status": "" },
  { "name": "Dead Cells: Medley of Pain Bundle", "price": "2.33", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Dead Cells: Return to Castlevania Bundle", "price": "1.82", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Dead Island Definitive Collection", "price": "0.25", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Dead Space Digital Deluxe Edition", "price": "12.87", "flag": "🇮🇳", "date": "10.06", "status": "" },
  { "name": "Dead Space", "price": "10.53", "flag": "🇮🇳", "date": "10.06", "status": "" },
  { "name": "Dead by Daylight - Gold Edition", "price": "9.2", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Dead by Daylight: Tokyo Ghoul Edition", "price": "5.3", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Death Squared", "price": "0.2", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Deathsmiles I・II", "price": "18.29", "flag": "🇧🇷", "date": "03.06", "status": "" },
  { "name": "Deep Rock Galactic - Deluxe Edition", "price": "2.33", "flag": "🇹🇷", "date": "02.06", "status": " GP" },
  { "name": "Deep Rock Galactic - Ultimate Edition", "price": "2.89", "flag": "🇹🇷", "date": "02.06", "status": " GP" },
  { "name": "Demon Slayer -Kimetsu no Yaiba- Sweep the Board!", "price": "22.13", "flag": "🇯🇵", "date": "02.06", "status": "" },
  { "name": "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles Digital Deluxe Edition", "price": "16.0", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles Ultimate Edition", "price": "25.18", "flag": "🇯🇵", "date": "02.06", "status": "" },
  { "name": "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles", "price": "13.44", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "Detective Bundle - 4 in 1", "price": "31.74", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Detective Reborn Bundle", "price": "1.38", "flag": "🇳🇬", "date": "03.06", "status": "" },
  { "name": "Deus Ex: Mankind Divided - Digital Deluxe Edition", "price": "3.07", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Diablo III: Eternal Collection", "price": "4.81", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Diablo® IV - Expansion Bundle", "price": "49.3", "flag": "🇰🇷", "date": "30.12", "status": " GP" },
  { "name": "Diablo® IV - Standard Edition", "price": "32.6", "flag": "🇧🇷", "date": "30.12", "status": " GP" },
  { "name": "Dishonored®: Death of the Outsider™ Deluxe Bundle", "price": "10.19", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "Disney Dreamlight Valley – Enchanted Edition", "price": "10.53", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Disney Dreamlight Valley – The Storybook Vale Bundle", "price": "7.88", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Dolby Atmos for Headphones", "price": "0.87", "flag": "🇹🇷", "date": "10.06", "status": "" },
  { "name": "Dou! - Fast-Paced Platformer Adventure!", "price": "0.07", "flag": "🇹🇷", "date": "31.05", "status": "" },
  { "name": "Double Dragon 4", "price": "0.29", "flag": "🇹🇷", "date": "11.06", "status": "" },
  { "name": "Double Puzzled", "price": "3.53", "flag": "🇮🇳", "date": "03.06", "status": "" },
  { "name": "Dracula's Legacy Remastered", "price": "0.77", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Dragon Age™: The Veilguard Deluxe Edition", "price": "38.29", "flag": "🇰🇷", "date": "28.05", "status": "" },
  { "name": "Dragon Age™: The Veilguard", "price": "29.24", "flag": "🇮🇳", "date": "28.05", "status": "" },
  { "name": "Drone Gladiator", "price": "0.15", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Duck Detective: The Secret Salami", "price": "0.51", "flag": "🇹🇷", "date": "06.06", "status": "" },
  { "name": "EA Family Bundle", "price": "0.97", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "EA SPORTS FC™ 24 Standard Edition Xbox One & Xbox Series X|S", "price": "15.79", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "EA SPORTS FC™ 25 Standard Edition Xbox One & Xbox Series X|S", "price": "11.7", "flag": "🇮🇳", "date": "10.06", "status": "" },
  { "name": "EA SPORTS FC™ 25 Ultimate Edition Xbox One & Xbox Series X|S", "price": "33.84", "flag": "🇰🇷", "date": "10.06", "status": "" },
  { "name": "EA SPORTS™ College Football 26 - Deluxe Edition + Limited Time Bonus", "price": "76.14", "flag": "🇰🇷", "date": "20.06", "status": "" },
  { "name": "EA SPORTS™ MVP Bundle (Madden NFL 25 Deluxe Edition & College Football 25 Deluxe Edition)", "price": "53.1", "flag": "🇧🇷", "date": "03.06", "status": "" },
  { "name": "EA SPORTS™ Madden NFL 25 Xbox Series X|S & Xbox One Standard Edition", "price": "29.24", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "EA SPORTS™ Madden NFL 26 Deluxe Edition + Limited Time Bonus", "price": "76.14", "flag": "🇰🇷", "date": "25.07", "status": "" },
  { "name": "EcoGnomix", "price": "1.08", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Eiyuden Chronicle: Hundred Heroes - Digital Deluxe Edition", "price": "4.21", "flag": "🇳🇬", "date": "11.06", "status": "" },
  { "name": "Epic Landscapes Jigsaw for PC & XBOX", "price": "0.0", "flag": "🇺🇸", "date": "31.05", "status": "" },
  { "name": "Escape Dead Island", "price": "0.19", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Escape Enthusiast", "price": "1.59", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Escape Sequence (Xbox Series)", "price": "0.29", "flag": "🇹🇷", "date": "31.05", "status": "" },
  { "name": "Escape from Terror City", "price": "3.21", "flag": "🇮🇳", "date": "03.06", "status": "" },
  { "name": "Everyday Heroines - 3 in 1", "price": "21.5", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Expeditions: A MudRunner Game - Supreme Edition", "price": "38.9", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "Expeditions: A MudRunner Game - Year 1 Edition", "price": "32.76", "flag": "🇹🇷", "date": "02.06", "status": " GP" },
  { "name": "F1® 25 Iconic Edition", "price": "65.09", "flag": "🇰🇷", "date": "30.05", "status": "" },
  { "name": "FAR CRY 4 + FAR CRY PRIMAL BUNDLE", "price": "1.12", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "FAR CRY 4 GOLD EDITION", "price": "3.58", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "FAR CRY ANTHOLOGY BUNDLE", "price": "10.24", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "FMV Action", "price": "1.12", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "FOR HONOR – Gold Edition", "price": "20.48", "flag": "🇹🇷", "date": "02.06", "status": " GP" },
  { "name": "FOR HONOR – Ultimate Edition", "price": "32.76", "flag": "🇹🇷", "date": "28.05", "status": "" },
  { "name": "FOR HONOR", "price": "2.02", "flag": "🇹🇷", "date": "28.05", "status": "" },
  { "name": "FPV Simulator", "price": "3.89", "flag": "🇺🇦", "date": "25.06", "status": "" },
  { "name": "Fairy Elements", "price": "4.58", "flag": "🇯🇵", "date": "03.06", "status": " GP" },
  { "name": "Fall Asleep (Windows)", "price": "0.25", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Fall Asleep (Xbox One)", "price": "0.25", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Fall Asleep", "price": "0.25", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Fallout 4: Game of the Year Edition (PC)", "price": "5.84", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "Fallout 4: Game of the Year Edition", "price": "5.84", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "Fallout 76: Gleaming Depths Deluxe Edition", "price": "28.64", "flag": "🇹🇷", "date": "03.06", "status": " GP" },
  { "name": "Fantasy Dash", "price": "0.07", "flag": "🇹🇷", "date": "30.05", "status": "" },
  { "name": "Far Cry Insanity Bundle", "price": "10.63", "flag": "🇧🇷", "date": "03.06", "status": "" },
  { "name": "Far Cry® 5 + Far Cry® New Dawn Deluxe Edition Bundle", "price": "16.42", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Far Cry® 5 Gold Edition + Far Cry ® New Dawn Deluxe Editi...", "price": "18.84", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Far Cry® 6 Deluxe Edition", "price": "15.87", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Far Cry® 6 Game of the Year Edition", "price": "19.45", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Far Cry® 6 Gold Edition", "price": "16.38", "flag": "🇹🇷", "date": "02.06", "status": " GP" },
  { "name": "Far Cry® New Dawn Deluxe Edition", "price": "6.41", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Far Cry®5 Gold Edition", "price": "14.33", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Farm Bundle", "price": "2.33", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Farm Pets Bundle", "price": "3.48", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Farming Simulator 22 - Platinum Edition", "price": "5.3", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Farming Simulator 22 - Premium Edition", "price": "6.62", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Fernz Gate", "price": "3.82", "flag": "🇯🇵", "date": "03.06", "status": "" },
  { "name": "Finding the Soul Orb", "price": "1.77", "flag": "🇮🇳", "date": "03.06", "status": "" },
  { "name": "First Responder Simulation Bundle: Police Firefighting", "price": "7.15", "flag": "🇪🇬", "date": "03.06", "status": "" },
  { "name": "Flailing Limbs Bundle", "price": "1.21", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Flintlock – Deluxe Edition", "price": "14.93", "flag": "🇹🇷", "date": "02.06", "status": " GP" },
  { "name": "Flockers", "price": "0.38", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Football Manager 2024 Console", "price": "1.97", "flag": "🇳🇬", "date": "02.06", "status": "" },
  { "name": "Forza Horizon 5 Deluxe Edition", "price": "10.53", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 PLUS Hot Wheels Bundle", "price": "10.53", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 Premium Add-Ons Bundle", "price": "6.62", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 Premium Edition", "price": "13.24", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport Deluxe Edition", "price": "11.85", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport Premium Add-Ons Bundle", "price": "5.3", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport Premium Edition", "price": "13.24", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport and Forza Horizon 5 Premium Add-Ons Bundle", "price": "11.28", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport and Forza Horizon 5 Premium Editions Bundle", "price": "25.09", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Frank and Drake", "price": "0.37", "flag": "🇹🇷", "date": "05.06", "status": "" },
  { "name": "Freakout: Calamity TV Show", "price": "0.18", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Frostpunk: Complete Collection", "price": "5.93", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Fuga: Melodies of Steel 1 & 2 - Double Pack", "price": "4.88", "flag": "🇳🇬", "date": "03.06", "status": "" },
  { "name": "Furwind", "price": "0.18", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "GRADIUS ORIGINS", "price": "25.88", "flag": "🇨🇱", "date": "07.08", "status": "" },
  { "name": "Gabriels Worlds The Adventure (For Windows 10)", "price": "0.43", "flag": "🇳🇬", "date": "03.06", "status": "" },
  { "name": "Gabriels Worlds The Adventure Bundle", "price": "0.52", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Galactic Loader (Windows 10)", "price": "0.29", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Galactic Wars EX", "price": "0.14", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Garden Bundle", "price": "5.04", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Garfield Collection - 2 in 1", "price": "14.84", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Gears of War Ultimate Edition Deluxe Version", "price": "1.02", "flag": "🇹🇷", "date": "31.05", "status": " GP" },
  { "name": "Generation Zero® - Ultimate Bundle", "price": "5.22", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Genesis Alpha One", "price": "0.7", "flag": "🇹🇷", "date": "28.05", "status": "" },
  { "name": "Ghostrunner 2 Brutal Edition", "price": "7.99", "flag": "🇹🇷", "date": "11.06", "status": "" },
  { "name": "Ghostrunner: Complete Edition", "price": "2.65", "flag": "🇳🇬", "date": "11.06", "status": "" },
  { "name": "Ghostwire: Tokyo Deluxe Edition", "price": "15.87", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Gimmick! Special Edition", "price": "0.98", "flag": "🇳🇬", "date": "03.06", "status": "" },
  { "name": "Gleaner Heights", "price": "0.43", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Goat Simulator 3 - Multiversal Traveler's Edition", "price": "2.33", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Goat Simulator 3 - Multiversal Traveler's Edition: Xbox One Edition", "price": "2.33", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Goat Simulator: The GOATY", "price": "1.57", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Goat Simulator: Waste Of Space Bundle", "price": "0.87", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Godsvivors (Windows)", "price": "0.25", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Godsvivors", "price": "0.25", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Going Under", "price": "0.66", "flag": "🇳🇬", "date": "03.06", "status": "" },
  { "name": "Golf With Your Friends - Starter Edition", "price": "16.36", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Golf With Your Friends - Ultimate Edition", "price": "27.62", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Grand Prix Rock 'N Racing", "price": "0.15", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Grand Theft Auto Online", "price": "8.85", "flag": "🇧🇷", "date": "02.06", "status": " GP" },
  { "name": "Grand Theft Auto V (Xbox One & Xbox Series X|S)", "price": "5.06", "flag": "🇹🇷", "date": "02.06", "status": "" },
  { "name": "Grand Theft Auto V: Premium Edition & Great White Shark C...", "price": "17.94", "flag": "🇧🇷", "date": "02.06", "status": " GP" },
  { "name": "Grand Theft Auto V: Premium Edition", "price": "21.25", "flag": "🇧🇷", "date": "16.10", "status": " GP" },
  { "name": "Guilty Gear -Strive-", "price": "2.52", "flag": "🇳🇬", "date": "11.06", "status": "" },
  { "name": "HITMAN World of Assassination Deluxe Edition", "price": "5.96", "flag": "🇳🇬", "date": "03.06", "status": "" },
  { "name": "HITMAN™ 2", "price": "6.32", "flag": "🇹🇷", "date": "04.02", "status": "" },
  { "name": "Halloween Pinball", "price": "0.05", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Halo 5: Guardians – Digital Deluxe Edition", "price": "16.89", "flag": "🇹🇷", "date": "31.05", "status": " GP" },
  { "name": "Halo Wars 2: Complete Edition", "price": "20.48", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Hamster on Rails", "price": "0.44", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Hazelight Bundle", "price": "16.37", "flag": "🇮🇳", "date": "03.06", "status": "" },
  { "name": "Headliner: NoviNews", "price": "0.31", "flag": "🇹🇷", "date": "05.06", "status": "" },
  { "name": "Helix Jump: Complete Edition", "price": "4.61", "flag": "🇵🇭", "date": "30.05", "status": "" },
  { "name": "Hell Let Loose - Deluxe Edition", "price": "7.88", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hell Let Loose - Ultimate Edition", "price": "9.2", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hero's Hour", "price": "0.88", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Heroes of Nature - 4 in 1", "price": "26.87", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Hi-Fi RUSH Deluxe Edition", "price": "12.29", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Hidden Kittens: Kingdom of Cats", "price": "0.17", "flag": "🇹🇷", "date": "28.05", "status": "" },
  { "name": "Hogwarts Legacy + Harry Potter: Quidditch Champions Deluxe Editions Bundle", "price": "15.71", "flag": "🇨🇱", "date": "03.06", "status": "" },
  { "name": "Hole io: Gold Edition", "price": "3.19", "flag": "🇺🇦", "date": "03.06", "status": "" },
  { "name": "Hotel: A Resort Simulator", "price": "2.57", "flag": "🇮🇳", "date": "03.06", "status": "" },
  { "name": "House Flipper Hairdreser Bundle", "price": "2.02", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "How 2 Escape: Lost Submarine", "price": "5.14", "flag": "🇮🇳", "date": "24.06", "status": "" },
  { "name": "Huge Moonstone Pack -- 14,500", "price": "13.18", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hunt: Showdown 1896 - Deluxe Edition", "price": "30.4", "flag": "🇮🇳", "date": "16.12", "status": " GP" },
  { "name": "Hunt: Showdown 1896 - Premium Edition", "price": "35.55", "flag": "🇮🇳", "date": "16.12", "status": " GP" },
  { "name": "Hunt: Showdown 1896 - Starter Edition", "price": "20.34", "flag": "🇮🇳", "date": "16.12", "status": " GP" },
  { "name": "Hunting Simulator 2: Elite Edition", "price": "6.37", "flag": "🇮🇳", "date": "03.06", "status": "" },
  { "name": "Hyper Panda Bundle", "price": "0.9", "flag": "🇳🇬", "date": "03.06", "status": "" },
  { "name": "Hypnospace Outlaw & Slayers X: Terminal Aftermath: Vengance of the Slayer Bundle", "price": "1.95", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "INSIDE & LIMBO Bundle", "price": "3.4", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Illusion of L'Phalcia", "price": "4.58", "flag": "🇯🇵", "date": "03.06", "status": "" },
  { "name": "Immortals Fenyx Rising™ Gold Edition", "price": "29.69", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Immortals of Aveum™ Deluxe Edition", "price": "28.95", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "Indiana Jones and the Great Circle™: Digital Premium Upgrade", "price": "8.06", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Indie Essentials - 32-bit Retro", "price": "7.89", "flag": "🇮🇳", "date": "03.06", "status": "" },
  { "name": "Infinite Links", "price": "4.58", "flag": "🇯🇵", "date": "03.06", "status": " GP" },
  { "name": "Injustice™ 2 - Legendary Edition", "price": "4.35", "flag": "🇹🇷", "date": "02.06", "status": " GP" },
  { "name": "Instant Indie Collection: Vol. 1", "price": "0.27", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Insurgency: Sandstorm - Ultimate Edition (Windows)", "price": "19.96", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Insurgency: Sandstorm - Ultimate Edition", "price": "26.75", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Isonzo: Collector's Edition", "price": "5.93", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Isonzo: Deluxe Edition", "price": "2.33", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Isonzo: Ultimate Edition", "price": "57.33", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Jurassic World Evolution 2: Deluxe Edition", "price": "9.96", "flag": "🇪🇬", "date": "16.05", "status": " GP" },
  { "name": "Jurassic World Evolution 2: Dominion Bundle", "price": "11.41", "flag": "🇪🇬", "date": "16.05", "status": " GP" },
  { "name": "Just Dance 2018", "price": "0.0", "flag": "🇵🇭", "date": "", "status": "" },
  { "name": "Just Dance 2025 Edition", "price": "20.47", "flag": "🇮🇳", "date": "03.06", "status": " GP" },
  { "name": "King of Seas", "price": "0.43", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Kingdom Come: Deliverance - Royal Edition", "price": "18.29", "flag": "🇧🇷", "date": "16.01", "status": " GP" },
  { "name": "Kingdom Come: Deliverance", "price": "1.02", "flag": "🇹🇷", "date": "16.01", "status": " GP" },
  { "name": "Kingdom Come: Deliverance", "price": "18.71", "flag": "🇮🇳", "date": "16.01", "status": " GP" },
  { "name": "Kingdom Two Crowns: Essentials Pack", "price": "1.74", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Kingdom Two Crowns: Olympus Edition", "price": "1.51", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "KinnikuNeko: SUPER MUSCLE CAT", "price": "2.16", "flag": "🇳🇬", "date": "03.06", "status": "" },
  { "name": "Kittens and Yarn", "price": "0.17", "flag": "🇹🇷", "date": "04.06", "status": "" },
  { "name": "Knight's Night!", "price": "2.52", "flag": "🇮🇳", "date": "05.06", "status": "" },
  { "name": "Kubics (for Windows 10)", "price": "0.43", "flag": "🇳🇬", "date": "03.06", "status": "" },
  { "name": "Kubics", "price": "0.36", "flag": "🇳🇬", "date": "03.06", "status": "" },
  { "name": "Kunio-kun: The World Classics Collection", "price": "9.53", "flag": "🇯🇵", "date": "11.06", "status": "" },
  { "name": "LEGO® DC Heroes & Villains-Bundle", "price": "0.99", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "LEGO® Harry Potter™ Collection", "price": "11.69", "flag": "🇮🇳", "date": "03.06", "status": "" },
  { "name": "LEGO® Marvel Collection", "price": "1.17", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "LEGO® Star Wars™: The Skywalker Saga Galactic Edition", "price": "11.41", "flag": "🇪🇬", "date": "01.06", "status": "" },
  { "name": "LEGO® Star Wars™:The Skywalker Saga Deluxe Edition", "price": "9.96", "flag": "🇪🇬", "date": "01.06", "status": " GP" },
  { "name": "Labyrinth Of The Demon King", "price": "2.12", "flag": "🇳🇬", "date": "28.05", "status": "" },
  { "name": "Lara Croft and the Temple of Osiris & Season Pass Pack", "price": "1.94", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Last Time I Saw You", "price": "0.91", "flag": "🇳🇬", "date": "05.06", "status": "" },
  { "name": "Legends Aligned: Minis in Conflict (Windows)", "price": "0.29", "flag": "🇹🇷", "date": "05.06", "status": "" },
  { "name": "Legends Aligned: Minis in Conflict (Xbox One)", "price": "0.29", "flag": "🇹🇷", "date": "05.06", "status": "" },
  { "name": "Legends Aligned: Minis in Conflict Xbox + Windows Bundle", "price": "0.61", "flag": "🇹🇷", "date": "05.06", "status": "" },
  { "name": "Legends Aligned: Minis in Conflict Xbox Bundle", "price": "0.46", "flag": "🇹🇷", "date": "05.06", "status": "" },
  { "name": "Legends Aligned: Minis in Conflict", "price": "0.29", "flag": "🇹🇷", "date": "05.06", "status": "" },
  { "name": "Leisure Suit Larry - Wet Dreams Saga Bundle", "price": "1.03", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Let Me Sleep", "price": "0.15", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Light & Dark Bundle", "price": "3.74", "flag": "🇹🇷", "date": "02.11", "status": "" },
  { "name": "Lonely Mountains: Snow Riders - Supporter Bundle", "price": "1.66", "flag": "🇹🇷", "date": "16.01", "status": " GP" },
  { "name": "Lord of the Click 4 (Windows)", "price": "0.29", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Lord of the Click 5 (Windows)", "price": "0.29", "flag": "🇹🇷", "date": "04.06", "status": "" },
  { "name": "Lord of the Click 5 (Xbox One)", "price": "0.29", "flag": "🇹🇷", "date": "04.06", "status": "" },
  { "name": "Lord of the Click 5 Bundle Pack", "price": "0.59", "flag": "🇹🇷", "date": "04.06", "status": "" },
  { "name": "Lord of the Click 5", "price": "0.29", "flag": "🇹🇷", "date": "04.06", "status": "" },
  { "name": "Lords of the Fallen Deluxe Edition", "price": "10.53", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Lost In Random: The Eternal Die - Fortune Edition", "price": "3.21", "flag": "🇳🇬", "date": "13.06", "status": "" },
  { "name": "Love FMV", "price": "1.14", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Luxury Garden Bundle", "price": "3.48", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "MXGP 24 : The Official Game", "price": "19.0", "flag": "🇮🇳", "date": "03.06", "status": "" },
  { "name": "Madden NFL 19", "price": "28.75", "flag": "🇨🇴", "date": "30.12", "status": "" },
  { "name": "Mars Survivor & West Escape", "price": "4.89", "flag": "🇺🇦", "date": "30.05", "status": "" },
  { "name": "Mars Survivor: Complete Edition", "price": "3.67", "flag": "🇺🇦", "date": "03.06", "status": "" },
  { "name": "Marshmallow Marvin: Templestone (Windows)", "price": "2.75", "flag": "🇺🇦", "date": "03.06", "status": "" },
  { "name": "Marshmallow Marvin: Templestone (Xbox One)", "price": "2.75", "flag": "🇺🇦", "date": "03.06", "status": "" },
  { "name": "Marshmallow Marvin: Templestone Bundle", "price": "5.5", "flag": "🇺🇦", "date": "03.06", "status": "" },
  { "name": "Marshmallow Marvin: Templestone Xbox Bundle", "price": "4.42", "flag": "🇺🇦", "date": "03.06", "status": "" },
  { "name": "Marshmallow Marvin: Templestone", "price": "2.75", "flag": "🇺🇦", "date": "03.06", "status": "" },
  { "name": "MechWarrior 5: Clans Digital Collectors Edition", "price": "2.89", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "MechWarrior 5: Mercenaries - JumpShip Edition", "price": "4.11", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Megaparty: A Tootuff Adventure", "price": "0.11", "flag": "🇹🇷", "date": "03.06", "status": " GP" },
  { "name": "Meow Moments: Celebrating Renewal & Romance", "price": "0.31", "flag": "🇳🇬", "date": "03.06", "status": "" },
  { "name": "Metro 2033 Redux", "price": "0.0", "flag": "🇺🇸", "date": "28.05", "status": "" },
  { "name": "Metro Exodus Gold Edition", "price": "1.49", "flag": "🇹🇷", "date": "04.06", "status": "" },
  { "name": "Metro Redux Bundle", "price": "0.49", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.0", "flag": "🇺🇸", "date": "30.11", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.0", "flag": "🇺🇸", "date": "30.11", "status": "" },
  { "name": "Microsoft Flight Simulator 2024 - Aviator Edition", "price": "90.79", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Microsoft Flight Simulator 2024 - Deluxe Edition", "price": "45.39", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Microsoft Flight Simulator 2024 - Premium Deluxe Edition", "price": "50.39", "flag": "🇺🇦", "date": "30.12", "status": " GP" },
  { "name": "Microsoft Flight Simulator Deluxe 40th Anniversary Edition", "price": "11.85", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Microsoft Flight Simulator Premium Deluxe 40th Anniversar...", "price": "15.76", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Middle-earth™: Shadow of War™ Definitive Edition", "price": "7.88", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Middle-earth™: The Shadow Bundle", "price": "12.26", "flag": "🇹🇷", "date": "28.05", "status": "" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle - Windows 10", "price": "1.3", "flag": "🇹🇷", "date": "27.07", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle", "price": "1.3", "flag": "🇹🇷", "date": "27.07", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate Edition for Windows", "price": "5.7", "flag": "🇪🇬", "date": "27.07", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate Edition", "price": "5.3", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Minecraft Legends Deluxe Edition", "price": "6.62", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Minecraft Triple Bundle", "price": "30.79", "flag": "🇺🇦", "date": "", "status": "" },
  { "name": "Minecraft: Deluxe Collection", "price": "3.97", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Mob Control", "price": "1.99", "flag": "🇺🇦", "date": "03.06", "status": "" },
  { "name": "Mokoko X", "price": "0.48", "flag": "🇳🇬", "date": "03.06", "status": "" },
  { "name": "Monster Energy Supercross 25 X Monster Jam™ Showdown - Dirt Master Edition", "price": "56.06", "flag": "🇰🇷", "date": "03.06", "status": "" },
  { "name": "Monster Jam Steel Titans Power Out Bundle", "price": "14.38", "flag": "🇨🇱", "date": "03.06", "status": "" },
  { "name": "Moonlighter: Complete Edition", "price": "1.38", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Mordheim: City of the Damned - Complete Edition", "price": "0.35", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Mordheim: City of the Damned", "price": "0.23", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Mortal Kombat 11 Ultimate + Injustice 2 Leg. Edition Bundle", "price": "17.59", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Mortal Kombat 11 Ultimate", "price": "8.17", "flag": "🇹🇷", "date": "02.06", "status": " GP" },
  { "name": "Mothmen 1966", "price": "0.26", "flag": "🇹🇷", "date": "05.06", "status": "" },
  { "name": "Motorbike Racing Bundle", "price": "3.27", "flag": "🇰🇷", "date": "03.06", "status": "" },
  { "name": "Mount & Blade II: Bannerlord Digital Deluxe Edition", "price": "7.88", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Moves (Bundle)", "price": "0.58", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Moves (Windows)", "price": "0.25", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Moves (Xbox Series)", "price": "0.25", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Moves", "price": "0.25", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Moving Out + Moving Out 2 Bundle", "price": "2.96", "flag": "🇳🇬", "date": "03.06", "status": "" },
  { "name": "Moving Out 2 - Deluxe Edition", "price": "4.35", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Mugsters", "price": "0.24", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Mummy Pinball", "price": "0.05", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Mushroom Savior (For Windows 10)", "price": "0.15", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "My Fantastic Ranch", "price": "1.29", "flag": "🇮🇳", "date": "03.06", "status": "" },
  { "name": "My Friend Peppa Pig - Complete Edition", "price": "6.43", "flag": "🇪🇬", "date": "01.07", "status": " GP" },
  { "name": "My Little Riding Champion", "price": "0.14", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "My Time at Sandrock Deluxe Edition", "price": "2.89", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "My Universe - Interior Designer", "price": "0.77", "flag": "🇹🇷", "date": "03.06", "status": " GP" },
  { "name": "My Universe - My Baby", "price": "0.77", "flag": "🇹🇷", "date": "03.06", "status": " GP" },
  { "name": "My Universe - School Teacher", "price": "0.77", "flag": "🇹🇷", "date": "03.06", "status": " GP" },
  { "name": "My Universe Collection", "price": "5.89", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "NAMCO MUSEUM® ARCHIVES Vol 1", "price": "0.57", "flag": "🇹🇷", "date": "04.06", "status": "" },
  { "name": "NARUTO SHIPPUDEN: Ultimate Ninja STORM Legacy", "price": "2.87", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "NARUTO SHIPPUDEN™: Ultimate Ninja® STORM Trilogy", "price": "1.28", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "NHL® 24 Standard Edition Xbox One", "price": "18.71", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "NHL® 24 Standard Edition Xbox Series X|S", "price": "21.05", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "NHL® 25 Standard Edition + Loyalty Offer", "price": "23.39", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "NINJA GAIDEN: Master Collection Deluxe Edition", "price": "6.3", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Necromunda: Hired Gun", "price": "1.46", "flag": "🇹🇷", "date": "29.05", "status": "" },
  { "name": "Necromunda: Underhive Wars", "price": "0.49", "flag": "🇹🇷", "date": "29.05", "status": "" },
  { "name": "Need for Speed™ Heat Deluxe Edition", "price": "1.38", "flag": "🇹🇷", "date": "10.06", "status": "" },
  { "name": "Need for Speed™ Heat", "price": "1.2", "flag": "🇹🇷", "date": "10.06", "status": "" },
  { "name": "Need for Speed™ Unbound Palace Edition", "price": "6.14", "flag": "🇹🇷", "date": "10.06", "status": "" },
  { "name": "Need for Speed™ Unbound Ultimate Collection", "price": "14.59", "flag": "🇰🇷", "date": "10.06", "status": "" },
  { "name": "Need for Speed™ Unbound", "price": "5.37", "flag": "🇹🇷", "date": "10.06", "status": "" },
  { "name": "Neon Abyss Deluxe Edition", "price": "1.61", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "Nickelodeon All-Star Brawl 2 Deluxe Edition", "price": "9.96", "flag": "🇪🇬", "date": "01.01", "status": " GP" },
  { "name": "Nickelodeon All-Star Brawl 2 Ultimate Edition", "price": "11.41", "flag": "🇪🇬", "date": "01.01", "status": " GP" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.18", "flag": "🇹🇷", "date": "30.05", "status": "" },
  { "name": "No Man's Sky", "price": "1.74", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "OCTOPATH TRAVELER + OCTOPATH TRAVELER II Bundle", "price": "38.47", "flag": "🇹🇷", "date": "01.12", "status": " GP" },
  { "name": "Ominous Tales - The Forsaken Isle", "price": "0.58", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "One Button Games 5-in-1 vol. 2 bundle", "price": "0.59", "flag": "🇹🇷", "date": "05.06", "status": "" },
  { "name": "Ori: The Collection", "price": "6.62", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Outcast - Second Contact", "price": "0.11", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Overcooked! + Overcooked! 2", "price": "0.63", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Overcooked! 2 - Gourmet Edition", "price": "1.84", "flag": "🇹🇷", "date": "02.06", "status": " GP" },
  { "name": "Overdrive Blaster (Windows)", "price": "0.21", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Overpass 2", "price": "3.33", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Overruled!", "price": "0.2", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "PAC-MAN 256", "price": "0.17", "flag": "🇹🇷", "date": "04.06", "status": "" },
  { "name": "PAC-MAN MUSEUM+", "price": "1.14", "flag": "🇹🇷", "date": "04.06", "status": "" },
  { "name": "PAC-MAN Mega Tunnel Battle: Chomp Champs - Deluxe Edition", "price": "1.92", "flag": "🇹🇷", "date": "04.06", "status": "" },
  { "name": "PAC-MAN WORLD Re-PAC", "price": "2.04", "flag": "🇹🇷", "date": "04.06", "status": "" },
  { "name": "PAC-MAN™ CHAMPIONSHIP EDITION 2", "price": "0.36", "flag": "🇹🇷", "date": "04.06", "status": "" },
  { "name": "PAYDAY 3", "price": "1.19", "flag": "🇳🇬", "date": "04.06", "status": "" },
  { "name": "Paint Ball - Jump n Run", "price": "1.53", "flag": "🇺🇦", "date": "11.06", "status": "" },
  { "name": "Paper Dash - Las Vegas", "price": "0.23", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Paper Ghost Stories: Third Eye Open", "price": "0.91", "flag": "🇳🇬", "date": "05.06", "status": "" },
  { "name": "Paper io 2: Gold Edition", "price": "2.92", "flag": "🇺🇦", "date": "06.06", "status": "" },
  { "name": "Paw Patrol Bundle", "price": "5.37", "flag": "🇪🇬", "date": "03.06", "status": "" },
  { "name": "Penarium", "price": "0.15", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Persona 3 Reload Digital Deluxe Edition", "price": "40.93", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Persona 3 Reload Digital Premium Edition", "price": "49.83", "flag": "🇺🇦", "date": "01.07", "status": " GP" },
  { "name": "Pets Bundle", "price": "2.33", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Phoenix Point: Behemoth Edition", "price": "1.74", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Pipistrello and the Cursed Yoyo", "price": "1.3", "flag": "🇹🇷", "date": "04.06", "status": "" },
  { "name": "Pixel Gladiator", "price": "0.05", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Planet Alpha", "price": "0.38", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Police Simulator: Patrol Officers: Extended Edition", "price": "4.6", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Police Simulator: Patrol Officers: Gold Edition", "price": "5.7", "flag": "🇪🇬", "date": "16.11", "status": " GP" },
  { "name": "Polterguys: Possession Party", "price": "0.55", "flag": "🇹🇷", "date": "08.06", "status": "" },
  { "name": "Portal Knights - Legendary Edition", "price": "1.31", "flag": "🇹🇷", "date": "11.06", "status": "" },
  { "name": "Premium Pool Arena", "price": "0.67", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Prey®: Digital Deluxe Edition", "price": "23.39", "flag": "🇮🇳", "date": "11.03", "status": " GP" },
  { "name": "Pro Fishing Simulator", "price": "0.07", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Pyramid Platformer - The Gem Heist (Xbox Series)", "price": "0.25", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Pyramid Platformer - The Gem Heist Windows", "price": "0.25", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Pyramid Platformer - The Gem Heist", "price": "0.25", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Pyro Complete Bundle", "price": "2.17", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "RAGE 2: Deluxe Edition", "price": "9.21", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "RESIDENT EVIL 2 Deluxe Edition", "price": "25.49", "flag": "🇵🇭", "date": "02.06", "status": " GP" },
  { "name": "Raging Justice", "price": "0.36", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Ravenswatch", "price": "9.5", "flag": "🇮🇳", "date": "03.06", "status": "" },
  { "name": "Rayman Legends", "price": "0.39", "flag": "🇹🇷", "date": "03.06", "status": " GP" },
  { "name": "ReCore", "price": "2.65", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Read Only Memories: NEURODIVER", "price": "0.44", "flag": "🇹🇷", "date": "05.06", "status": "" },
  { "name": "Red Dead Online", "price": "8.85", "flag": "🇧🇷", "date": "02.06", "status": " GP" },
  { "name": "Red Dead Redemption & Red Dead Redemption 2 Bundle", "price": "35.44", "flag": "🇧🇷", "date": "02.06", "status": "" },
  { "name": "Regular Moonstone Pack -- 2,500", "price": "2.46", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Remnant II - Deluxe Edition", "price": "8.6", "flag": "🇪🇬", "date": "01.06", "status": " GP" },
  { "name": "Remnant II - Ultimate Edition", "price": "9.96", "flag": "🇪🇬", "date": "01.06", "status": " GP" },
  { "name": "Retro Tank Arcade", "price": "0.07", "flag": "🇹🇷", "date": "06.06", "status": "" },
  { "name": "Revenant Saga & Revenant Dogma", "price": "6.05", "flag": "🇺🇦", "date": "03.06", "status": "" },
  { "name": "Riders Republic™ 360 Edition", "price": "26.62", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Riders Republic™ Complete Edition", "price": "35.83", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Riders Republic™ Skate Edition", "price": "20.48", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Rising Hell", "price": "0.13", "flag": "🇹🇷", "date": "05.06", "status": "" },
  { "name": "Road 96: Mile 0 – Full Journey Bundle", "price": "3.53", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "RoboCop: Rogue City - Alex Murphy Edition", "price": "2.68", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Rock 'N Racing Bundle", "price": "0.23", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Rogue Lords", "price": "0.14", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Roguebook", "price": "0.14", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Ruff Ghanor", "price": "0.65", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Rugby 25", "price": "26.6", "flag": "🇮🇳", "date": "03.06", "status": "" },
  { "name": "Run Sausage Run!", "price": "0.92", "flag": "🇺🇦", "date": "03.06", "status": "" },
  { "name": "S.T.A.L.K.E.R. 2: Heart of Chornobyl - Windows Edition", "price": "26.82", "flag": "🇺🇦", "date": "28.05", "status": "" },
  { "name": "S.T.A.L.K.E.R. 2: Heart of Chornobyl Deluxe Edition – Windows Edition", "price": "36.41", "flag": "🇺🇦", "date": "28.05", "status": "" },
  { "name": "S.T.A.L.K.E.R. 2: Heart of Chornobyl Deluxe Edition – Xbox Edition", "price": "38.9", "flag": "🇹🇷", "date": "28.05", "status": "" },
  { "name": "S.T.A.L.K.E.R. 2: Heart of Chornobyl Ultimate Edition – Windows Edition", "price": "48.87", "flag": "🇺🇦", "date": "28.05", "status": "" },
  { "name": "S.T.A.L.K.E.R. 2: Heart of Chornobyl Ultimate Edition", "price": "51.19", "flag": "🇹🇷", "date": "28.05", "status": "" },
  { "name": "S.T.A.L.K.E.R. 2: Heart of Chornobyl Xbox Edition", "price": "29.67", "flag": "🇹🇷", "date": "28.05", "status": "" },
  { "name": "SHINOBI: Art of Vengeance Digital Deluxe Edition", "price": "19.57", "flag": "🇹🇼", "date": "26.08", "status": "" },
  { "name": "SHINOBI: Art of Vengeance", "price": "14.75", "flag": "🇹🇼", "date": "29.08", "status": "" },
  { "name": "STAB STAB STAB!", "price": "0.24", "flag": "🇹🇷", "date": "03.06", "status": " GP" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "10.78", "flag": "🇹🇷", "date": "31.12", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "7.13", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "STAR WARS Jedi: Survivor™ Deluxe Edition", "price": "26.61", "flag": "🇮🇳", "date": "28.05", "status": "" },
  { "name": "STAR WARS Jedi: Survivor™ Xbox One", "price": "17.21", "flag": "🇰🇷", "date": "28.05", "status": "" },
  { "name": "STAR WARS Jedi: Survivor™", "price": "13.16", "flag": "🇮🇳", "date": "28.05", "status": "" },
  { "name": "STAY COOL, KOBAYASHI-SAN!: A RIVER CITY RANSOM STORY", "price": "0.11", "flag": "🇹🇷", "date": "11.06", "status": "" },
  { "name": "STRIKERS 1945", "price": "1.31", "flag": "🇧🇷", "date": "03.06", "status": "" },
  { "name": "SUPERHOT ONE OF US BUNDLE", "price": "1.82", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "SYNESTHESIA", "price": "7.71", "flag": "🇮🇳", "date": "31.05", "status": "" },
  { "name": "Saints Row IV: Re-Elected & Gat out of Hell", "price": "0.29", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Saints Row", "price": "4.79", "flag": "🇹🇷", "date": "04.06", "status": "" },
  { "name": "Scribblenauts Mega Pack", "price": "0.27", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Sea of Stars", "price": "2.87", "flag": "🇳🇬", "date": "03.06", "status": "" },
  { "name": "Sea of Thieves", "price": "5.04", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Sea of Thieves: 2025 Deluxe Edition", "price": "6.3", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Sea of Thieves: 2025 Premium Edition", "price": "7.5", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Sea of Thieves: X Edition", "price": "10.02", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Session: Skate Sim Year One & Two Edition", "price": "1.26", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Shalnor: Silverwind Saga", "price": "0.79", "flag": "🇳🇬", "date": "03.06", "status": "" },
  { "name": "Sheltered", "price": "0.66", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Sherlock Holmes: Crimes and Punishments + Sherlock Holmes...", "price": "0.86", "flag": "🇳🇬", "date": "03.06", "status": "" },
  { "name": "Simulator Pack: Gas Station Simulator and Treasure Hunter Simulator", "price": "1.09", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Sisters Royale: Five Sisters Under Fire", "price": "0.1", "flag": "🇹🇷", "date": "05.06", "status": "" },
  { "name": "Skyrim Anniversary Edition + Fallout 4 G.O.T.Y Bundle", "price": "16.38", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Skyrim Anniversary Edition + Fallout 4 G.O.T.Y Bundle", "price": "6.76", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Slime Rancher Rainbow Bundle", "price": "3.56", "flag": "🇳🇬", "date": "03.06", "status": "" },
  { "name": "Small Moonstone Pack -- 1,200", "price": "1.26", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Smoots Pinball", "price": "0.22", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Sniper Elite: Resistance Deluxe Edition", "price": "11.85", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "SnowRunner - 1-Anniversary Edition", "price": "6.14", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "SnowRunner - 2-Year Anniversary Edition", "price": "26.62", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "SnowRunner - 3-Year Anniversary Edition", "price": "32.76", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "SnowRunner - 4-Year Anniversary Edition", "price": "38.9", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Soccer Golf", "price": "2.52", "flag": "🇮🇳", "date": "07.06", "status": "" },
  { "name": "Soul Searching", "price": "0.6", "flag": "🇳🇬", "date": "03.06", "status": "" },
  { "name": "South Park™: The Fractured but Whole™ - Gold Edition", "price": "26.62", "flag": "🇹🇷", "date": "16.10", "status": " GP" },
  { "name": "South of Midnight Premium Edition", "price": "21.8", "flag": "🇺🇦", "date": "07.07", "status": " GP" },
  { "name": "South of Midnight Premium Upgrade Edition", "price": "4.36", "flag": "🇺🇦", "date": "31.12", "status": " GP" },
  { "name": "Space Hulk: Tactics", "price": "0.52", "flag": "🇹🇷", "date": "29.05", "status": "" },
  { "name": "Space Moth Lunar Edition", "price": "0.06", "flag": "🇹🇷", "date": "05.06", "status": "" },
  { "name": "Sparkle Bundle", "price": "0.84", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Speed Limit", "price": "0.07", "flag": "🇹🇷", "date": "05.06", "status": "" },
  { "name": "SpellForce III Reforced: Complete Edition", "price": "12.28", "flag": "🇮🇳", "date": "03.06", "status": "" },
  { "name": "Spyro™ + Crash Remastered Game Bundle", "price": "10.4", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Star Hunter DX", "price": "0.15", "flag": "🇹🇷", "date": "05.06", "status": "" },
  { "name": "Star Overdrive Deluxe Edition Pre-Order", "price": "9.75", "flag": "🇲🇽", "date": "19.06", "status": "" },
  { "name": "Star Overdrive Pre-Order Standard Edition", "price": "8.78", "flag": "🇨🇱", "date": "19.06", "status": "" },
  { "name": "Starfield Premium Edition Upgrade", "price": "5.6", "flag": "🇪🇬", "date": "05.09", "status": " GP" },
  { "name": "Starfield Premium Edition", "price": "14.3", "flag": "🇪🇬", "date": "30.12", "status": " GP" },
  { "name": "Starlight Legacy", "price": "6.54", "flag": "🇮🇳", "date": "12.06", "status": "" },
  { "name": "SteamWorld Build & Dig Bundle", "price": "1.84", "flag": "🇳🇬", "date": "03.06", "status": "" },
  { "name": "SteamWorld Build Deluxe Edition", "price": "4.35", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "SteamWorld Heist II & SteamWorld Build Bundle", "price": "3.82", "flag": "🇪🇬", "date": "03.06", "status": "" },
  { "name": "Steelrising - Standard Edition", "price": "2.56", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Stellaris: Console Edition - Deluxe Edition", "price": "3.51", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Stellaris: Console Edition - Starter Edition", "price": "6.62", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Sticky Business", "price": "0.51", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Street Racer Underground", "price": "0.22", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Stunt Flyer", "price": "1.56", "flag": "🇳🇬", "date": "29.05", "status": "" },
  { "name": "Summer in Mara + Koa and the Five Pirates of Mara", "price": "0.73", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Sunset Overdrive Deluxe Edition", "price": "1.42", "flag": "🇹🇷", "date": "31.05", "status": " GP" },
  { "name": "Super Engine GT Turbo SPEC", "price": "2.52", "flag": "🇮🇳", "date": "29.05", "status": "" },
  { "name": "Super Pixel Kid Adventure", "price": "0.07", "flag": "🇹🇷", "date": "04.06", "status": "" },
  { "name": "Super Retro Charge", "price": "0.44", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Super Rolling Heroes Deluxe", "price": "0.69", "flag": "🇳🇬", "date": "03.06", "status": "" },
  { "name": "Surf & Turf Bundle", "price": "0.95", "flag": "🇳🇬", "date": "03.06", "status": "" },
  { "name": "T.V Favorites Bundle", "price": "8.9", "flag": "🇮🇳", "date": "03.06", "status": "" },
  { "name": "THE KING OF FIGHTERS XV Standard Edition", "price": "4.58", "flag": "🇰🇷", "date": "04.06", "status": "" },
  { "name": "TIEBREAK: Official game of the ATP and WTA", "price": "13.11", "flag": "🇧🇷", "date": "03.06", "status": "" },
  { "name": "TT Isle of Man: Ride on the Edge 3", "price": "5.63", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Taiko no Tatsujin: Rhythm Festival Taiko Music Pass", "price": "0.0", "flag": "🇳🇬", "date": "30.11", "status": "" },
  { "name": "Tails of Iron 2: Whiskers of Winter - Deluxe Edition", "price": "12.69", "flag": "🇹🇷", "date": "30.05", "status": "" },
  { "name": "Tails of Iron 2: Whiskers of Winter", "price": "10.54", "flag": "🇹🇷", "date": "30.05", "status": "" },
  { "name": "Task Force Kampas", "price": "1.14", "flag": "🇮🇳", "date": "03.06", "status": "" },
  { "name": "Taxi Life: A City Driving Simulator", "price": "3.83", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Tchia: Oléti Edition", "price": "7.17", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Teenage Mutant Ninja Turtles: Mutants Unleashed - Digital Deluxe Edition", "price": "22.65", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "Teenage Mutant Ninja Turtles: Shredder's Revenge - Ultimate Edition", "price": "4.35", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Tennis Elbow 4", "price": "3.18", "flag": "🇳🇬", "date": "03.06", "status": " GP" },
  { "name": "Test Drive Unlimited Solar Crown", "price": "10.98", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "The Bard's Tale Trilogy", "price": "0.64", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "The Callisto Protocol™ for Xbox One – Digital Deluxe Edition", "price": "14.84", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "The Callisto Protocol™ for Xbox Series X|S – Digital Delu...", "price": "17.4", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "The Coma 2: Vicious Sisters", "price": "0.28", "flag": "🇹🇷", "date": "05.06", "status": "" },
  { "name": "The Elder Scrolls III: Morrowind", "price": "1.0", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "The Elder Scrolls IV: Oblivion Remastered - Deluxe Edition", "price": "38.9", "flag": "🇵🇭", "date": "21.07", "status": " GP" },
  { "name": "The Elder Scrolls Online Collection: Gold Road", "price": "29.69", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Elder Scrolls Online Deluxe Collection: Gold Road", "price": "41.97", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Elder Scrolls Online: 2025 Premium Edition", "price": "48.12", "flag": "🇹🇷", "date": "20.06", "status": " GP" },
  { "name": "The Elder Scrolls V: Skyrim Anniversary Edition", "price": "9.83", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Escapists & The Escapists: The Walking Dead", "price": "0.46", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "The Escapists + The Escapists 2", "price": "0.63", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "The Escapists: Supermax Edition", "price": "1.57", "flag": "🇹🇷", "date": "29.04", "status": "" },
  { "name": "The Evil Within Digital Bundle", "price": "2.07", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The FMV Collection 4", "price": "1.64", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "The Hellblade Bundle", "price": "10.28", "flag": "🇪🇬", "date": "30.12", "status": " GP" },
  { "name": "The Jackbox Decade Bundle", "price": "24.96", "flag": "🇪🇬", "date": "03.06", "status": "" },
  { "name": "The Jackbox Party Quadpack", "price": "4.38", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "The Jackbox Party Quintpack 2.0", "price": "5.66", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "The Jackbox Party Quintpack", "price": "4.38", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "The Jackbox Party Trilogy 2.0", "price": "2.71", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "The Jackbox Party Trilogy", "price": "2.04", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "The LEGO® Games Bundle", "price": "7.07", "flag": "🇧🇷", "date": "03.06", "status": "" },
  { "name": "The LEGO® Movie Videogame-Bundle", "price": "0.99", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "The Lord of the Rings: Gollum™", "price": "1.9", "flag": "🇮🇳", "date": "03.06", "status": "" },
  { "name": "The MISSING: J.J. Macfield and the Island of Memories", "price": "0.49", "flag": "🇹🇷", "date": "11.06", "status": "" },
  { "name": "The Night of the Rabbit", "price": "9.37", "flag": "🇹🇷", "date": "04.06", "status": "" },
  { "name": "The Pixel Pulps Collection", "price": "0.76", "flag": "🇹🇷", "date": "05.06", "status": "" },
  { "name": "The Rabbit Crazy Adventure (for Windows 10)", "price": "0.43", "flag": "🇳🇬", "date": "03.06", "status": "" },
  { "name": "The Rabbit Crazy Adventure Bundle", "price": "0.53", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "The Serpent Rogue", "price": "0.38", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "The Settlers®: New Allies", "price": "9.82", "flag": "🇮🇳", "date": "03.06", "status": " GP" },
  { "name": "The Shadow Warrior Collection", "price": "1.32", "flag": "🇳🇬", "date": "03.06", "status": "" },
  { "name": "The Sisters - Party of the Year", "price": "3.8", "flag": "🇮🇳", "date": "03.06", "status": " GP" },
  { "name": "The Sisters Collection", "price": "6.36", "flag": "🇮🇳", "date": "03.06", "status": "" },
  { "name": "The Smurfs - Village Party", "price": "14.2", "flag": "🇹🇷", "date": "03.06", "status": " GP" },
  { "name": "The VideoKid", "price": "0.07", "flag": "🇹🇷", "date": "05.06", "status": "" },
  { "name": "This War of Mine - Complete Edition", "price": "1.56", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "This War of Mine: The Little Ones", "price": "0.36", "flag": "🇹🇷", "date": "04.06", "status": "" },
  { "name": "Thrilling Stories Collection", "price": "9.28", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Ticket to Ride, Clue and The Game of Life 2 - Classic Board Game Bundle", "price": "2.33", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Tiny Hands Adventure", "price": "0.09", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Tom Clancy's Rainbow Six® Extraction United Bundle", "price": "12.29", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Ultimate Edition", "price": "10.83", "flag": "🇹🇷", "date": "02.06", "status": " GP" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Year 2 Gold Edition", "price": "2.05", "flag": "🇹🇷", "date": "03.06", "status": " GP" },
  { "name": "Tom Clancy’s Rainbow Six Siege Operator Edition", "price": "26.62", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Tom Clancy’s Rainbow Six Siege Ultimate Edition", "price": "32.76", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Tom Clancy’s The Division 2 - Gold Edition", "price": "29.69", "flag": "🇹🇷", "date": "02.06", "status": "" },
  { "name": "Tom Clancy’s The Division 2 - Ultimate Edition", "price": "36.86", "flag": "🇹🇷", "date": "02.06", "status": " GP" },
  { "name": "Tomb Raider: Definitive Survivor Trilogy", "price": "17.81", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Total War: Warhammer II", "price": "3.69", "flag": "🇳🇬", "date": "29.05", "status": "" },
  { "name": "Total War: Warhammer III", "price": "2.76", "flag": "🇳🇬", "date": "29.05", "status": "" },
  { "name": "Total War: Warhammer", "price": "3.69", "flag": "🇳🇬", "date": "29.05", "status": "" },
  { "name": "Totally Reliable Delivery Service Deluxe Edition", "price": "3.15", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Tour de France 2024", "price": "5.23", "flag": "🇧🇷", "date": "03.06", "status": "" },
  { "name": "Towerborne - 1,000 Belfry Bucks", "price": "5.39", "flag": "🇺🇦", "date": "30.12", "status": " GP" },
  { "name": "Towerborne - 2,000 (+200 Bonus) Belfry Bucks", "price": "10.89", "flag": "🇺🇦", "date": "30.12", "status": " GP" },
  { "name": "Towerborne - 5,000 (+1000 Bonus) Belfry Bucks", "price": "27.71", "flag": "🇺🇦", "date": "30.12", "status": " GP" },
  { "name": "Towerborne - 500 Belfry Bucks", "price": "2.75", "flag": "🇺🇦", "date": "30.12", "status": " GP" },
  { "name": "Trailmakers: Booster Edition", "price": "2.02", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers: Deluxe Edition", "price": "2.89", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers: Ultimate Edition", "price": "3.48", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Train Life - Orient-Express Train Edition", "price": "1.58", "flag": "🇮🇳", "date": "03.06", "status": "" },
  { "name": "Transport Fever 2: Console Edition", "price": "5.57", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Trials Fusion", "price": "0.29", "flag": "🇹🇷", "date": "03.06", "status": " GP" },
  { "name": "Trials® Rising", "price": "0.45", "flag": "🇹🇷", "date": "03.06", "status": " GP" },
  { "name": "True Survivors Bundle", "price": "19.0", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Turnip Boy Robs a Bank Pre-Release", "price": "0.87", "flag": "🇹🇷", "date": "15.07", "status": " GP" },
  { "name": "Turret Rampage", "price": "1.89", "flag": "🇮🇳", "date": "03.06", "status": "" },
  { "name": "UFC® 5 Standard Edition", "price": "26.31", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "UFC® 5 Ultimate Edition", "price": "33.84", "flag": "🇰🇷", "date": "03.06", "status": "" },
  { "name": "UNABLES", "price": "0.09", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "UNO™ Ultimate Edition", "price": "12.67", "flag": "🇧🇷", "date": "03.06", "status": " GP" },
  { "name": "Ultra Foodmess Deluxe", "price": "0.14", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Undisputed", "price": "25.7", "flag": "🇹🇷", "date": "04.06", "status": "" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "1.05", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "V-Rally 4 Ultimate Edition", "price": "1.58", "flag": "🇮🇳", "date": "03.06", "status": "" },
  { "name": "V-Rally 4", "price": "0.14", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Vambrace: Cold Soul", "price": "0.18", "flag": "🇹🇷", "date": "05.06", "status": "" },
  { "name": "Varney Lake", "price": "0.29", "flag": "🇹🇷", "date": "05.06", "status": "" },
  { "name": "Vermintide - Digital Value Pack", "price": "2.25", "flag": "🇹🇷", "date": "07.03", "status": "" },
  { "name": "Volley Pals", "price": "0.39", "flag": "🇳🇬", "date": "03.06", "status": "" },
  { "name": "WATCH_DOGS™", "price": "0.57", "flag": "🇹🇷", "date": "03.06", "status": " GP" },
  { "name": "WRC 10 FIA World Rally Championship", "price": "1.34", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "WRC 9 Deluxe Edition FIA World Rally Championship", "price": "0.36", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "8.06", "flag": "🇹🇷", "date": "30.08", "status": "" },
  { "name": "WRC Collection Vol. 2 Xbox One", "price": "2.94", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "WRC Collection Vol. 2 Xbox Series X|S", "price": "2.94", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "WRC Generations Fully Loaded Edition", "price": "3.58", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "War Hospital", "price": "3.19", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Warhammer 40,000: Battlesector", "price": "1.46", "flag": "🇹🇷", "date": "29.05", "status": "" },
  { "name": "Warhammer 40,000: Boltgun - Forges of Corruption Edition", "price": "6.8", "flag": "🇹🇷", "date": "29.05", "status": "" },
  { "name": "Warhammer 40,000: Boltgun", "price": "4.61", "flag": "🇹🇷", "date": "29.05", "status": "" },
  { "name": "Warhammer 40,000: Chaos Gate - Daemonhunters - Purifier Edition", "price": "4.64", "flag": "🇹🇷", "date": "29.05", "status": "" },
  { "name": "Warhammer 40,000: Chaos Gate - Daemonhunters", "price": "4.32", "flag": "🇹🇷", "date": "29.05", "status": "" },
  { "name": "Warhammer 40,000: Darktide - Imperial Edition", "price": "3.31", "flag": "🇳🇬", "date": "29.05", "status": "" },
  { "name": "Warhammer 40,000: Darktide", "price": "2.84", "flag": "🇳🇬", "date": "29.05", "status": "" },
  { "name": "Warhammer 40,000: Inquisitor - Martyr Ultimate Edition", "price": "1.09", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Warhammer 40,000: Mechanicus", "price": "0.58", "flag": "🇹🇷", "date": "29.05", "status": "" },
  { "name": "Warhammer 40,000: Rogue Trader - Deluxe Edition", "price": "9.24", "flag": "🇪🇬", "date": "29.05", "status": "" },
  { "name": "Warhammer 40,000: Rogue Trader - Deluxe Pack", "price": "0.98", "flag": "🇳🇬", "date": "29.05", "status": "" },
  { "name": "Warhammer 40,000: Rogue Trader - Voidfarer Edition", "price": "14.3", "flag": "🇪🇬", "date": "29.05", "status": "" },
  { "name": "Warhammer 40,000: Rogue Trader", "price": "3.31", "flag": "🇳🇬", "date": "29.05", "status": "" },
  { "name": "Warhammer 40,000: Shootas, Blood & Teef", "price": "1.06", "flag": "🇳🇬", "date": "29.05", "status": "" },
  { "name": "Warhammer 40,000: Space Marine 2", "price": "31.48", "flag": "🇹🇷", "date": "29.05", "status": "" },
  { "name": "Warhammer Age of Sigmar: Realms of Ruin Deluxe Edition", "price": "5.5", "flag": "🇹🇷", "date": "29.05", "status": "" },
  { "name": "Warhammer Age of Sigmar: Realms of Ruin Ultimate Edition", "price": "5.89", "flag": "🇹🇷", "date": "29.05", "status": "" },
  { "name": "Warhammer Age of Sigmar: Realms of Ruin", "price": "4.73", "flag": "🇹🇷", "date": "29.05", "status": "" },
  { "name": "Warhammer Age of Sigmar: Storm Ground", "price": "0.72", "flag": "🇹🇷", "date": "29.05", "status": "" },
  { "name": "Warhammer Bundle - Chaos Gate & Realms of Ruin", "price": "7.36", "flag": "🇹🇷", "date": "29.05", "status": "" },
  { "name": "Warhammer Ultimate Pack: Hack and Slash", "price": "1.84", "flag": "🇳🇬", "date": "03.06", "status": "" },
  { "name": "Warhammer: Chaosbane Magnus Edition", "price": "0.22", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Warhammer: Chaosbane Slayer Edition Xbox One", "price": "0.29", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Warhammer: Chaosbane Slayer Edition Xbox Series X|S", "price": "0.44", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Warhammer: Chaosbane Xbox One", "price": "0.14", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Warhammer: End Times - Vermintide", "price": "0.43", "flag": "🇹🇷", "date": "29.05", "status": "" },
  { "name": "Warhammer: Vermintide 2 - Premium Edition", "price": "1.95", "flag": "🇹🇷", "date": "29.05", "status": "" },
  { "name": "Warhammer: Vermintide 2 - Ultimate Edition", "price": "2.61", "flag": "🇹🇷", "date": "29.05", "status": "" },
  { "name": "Warhammer: Vermintide 2 – Winds of Magic Bundle", "price": "2.18", "flag": "🇹🇷", "date": "16.05", "status": " GP" },
  { "name": "Warhammer: Vermintide 2", "price": "0.25", "flag": "🇹🇷", "date": "29.05", "status": "" },
  { "name": "Wasteland 3 (PC) Colorado Collection", "price": "6.62", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Wasteland 3 Colorado Collection", "price": "8.99", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "Watch Dogs 1 + Watch Dogs 2 Gold Editions Bundle", "price": "11.16", "flag": "🇧🇷", "date": "03.06", "status": "" },
  { "name": "Watch Dogs 1 + Watch Dogs 2 Standard Editions Bundle", "price": "8.15", "flag": "🇧🇷", "date": "03.06", "status": "" },
  { "name": "Watch Dogs: Legion - Deluxe Edition", "price": "13.82", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Watch Dogs®2 - Deluxe Edition", "price": "29.69", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Watch Dogs®2 - Gold Edition", "price": "41.97", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Watch Dogs®: Legion Gold Edition", "price": "16.38", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Watch Dogs®: Legion Ultimate Edition", "price": "19.45", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "We Happy Few Digital Deluxe", "price": "6.5", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "We Love Katamari REROLL+ Royal Reverie Special Edition", "price": "5.42", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "WeakWood Throne", "price": "0.09", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Welcome to ParadiZe - Zombot Edition", "price": "4.98", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Werewolf: The Apocalypse - Earthblood", "price": "0.87", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "West Escape", "price": "2.19", "flag": "🇺🇦", "date": "03.06", "status": "" },
  { "name": "When the Past was Around", "price": "0.15", "flag": "🇹🇷", "date": "05.06", "status": "" },
  { "name": "Whiskey & Zombies", "price": "0.22", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Wingspan + European Expansion + Oceania Expansion", "price": "3.71", "flag": "🇳🇬", "date": "03.06", "status": " GP" },
  { "name": "Witch's Pranks: Frog's Fortune - Collectors Edition", "price": "0.86", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Wolfenstein: Alt History Collection", "price": "10.24", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Wolfenstein: Youngblood Deluxe Edition", "price": "4.48", "flag": "🇹🇷", "date": "17.02", "status": " GP" },
  { "name": "Wolfenstein® II: The New Colossus™ Digital Deluxe Edition", "price": "6.14", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "Wolfenstein®: The Two-Pack", "price": "3.25", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "World Soccer Pinball", "price": "0.05", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "World War Z: Aftermath - Deluxe Edition", "price": "13.31", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Worms Battlegrounds + Worms W.M.D", "price": "0.51", "flag": "🇹🇷", "date": "03.06", "status": "" },
  { "name": "Worms Rumble - Digital Deluxe Edition", "price": "0.58", "flag": "🇳🇬", "date": "28.05", "status": "" },
  { "name": "Wreckfest Complete Edition", "price": "19.49", "flag": "🇧🇷", "date": "16.11", "status": " GP" },
  { "name": "Yoku's Island Express", "price": "0.76", "flag": "🇹🇷", "date": "28.05", "status": "" },
  { "name": "Yooka-Laylee and the Impossible Lair", "price": "0.44", "flag": "🇹🇷", "date": "28.05", "status": "" },
  { "name": "Yuoni", "price": "0.16", "flag": "🇹🇷", "date": "05.06", "status": "" },
  { "name": "Z-Warp", "price": "1.77", "flag": "🇮🇳", "date": "03.06", "status": "" },
  { "name": "Zorro The Chronicles", "price": "3.86", "flag": "🇮🇳", "date": "03.06", "status": "" },
  { "name": "astragon Bestseller Simulation Bundle", "price": "10.73", "flag": "🇪🇬", "date": "03.06", "status": "" },
  { "name": "pureya", "price": "0.6", "flag": "🇳🇬", "date": "03.06", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Ultimate Hunting Bundle", "price": "43.27", "flag": "🇮🇳", "date": "01.06", "status": " GP" },
  { "name": "ザ・コロニスト", "price": "4.73", "flag": "🇯🇵", "date": "05.06", "status": "" },
  { "name": "ザ・ラストスタンド：アフターマス", "price": "5.49", "flag": "🇯🇵", "date": "05.06", "status": "" },
  { "name": "デモクラシー4：コンソールエディション", "price": "10.3", "flag": "🇯🇵", "date": "05.06", "status": "" },
  { "name": "フォーゴットン・アン", "price": "4.13", "flag": "🇯🇵", "date": "05.06", "status": "" },
  { "name": "メガクアリウム", "price": "4.22", "flag": "🇯🇵", "date": "05.06", "status": "" }
]

let usd = 99;

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



