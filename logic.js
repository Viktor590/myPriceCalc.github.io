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
  { "name": "1000 Ancient Coins - Hidden Trove of the Ancients", "price": "1.67", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "150 Ancient Coins - Secret Stash of the Ancients", "price": "0.34", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "2550 Ancient Coins - Royal Treasury of the Ancients", "price": "3.84", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "4250 Ancient Coins - Glittering Tribute of the Ancients", "price": "5.81", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "550 Ancient Coins - Lost Chest of the Ancients", "price": "0.99", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "8Floor Bundle", "price": "0.43", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "9 Monkeys of Shaolin", "price": "0.51", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "A Building Full of Cats", "price": "0.17", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "A Plague Tale: Innocence - Windows 10", "price": "1.48", "flag": "🇪🇬", "date": "17.07", "status": " GP" },
  { "name": "A Plague Tale: Innocence", "price": "1.98", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "AEW: Fight Forever", "price": "17.53", "flag": "🇨🇦", "date": "17.07", "status": " GP" },
  { "name": "AFL 23", "price": "27.48", "flag": "🇹🇷", "date": "17.07", "status": "" },
  { "name": "ASTRONEER: Evolution Edition", "price": "2.75", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Ad Infinitum", "price": "7.54", "flag": "🇹🇷", "date": "17.07", "status": "" },
  { "name": "Aery - Calm Mind 4", "price": "0.9", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "Aery - The Lost Hero", "price": "0.56", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "After Us", "price": "8.2", "flag": "🇸🇦", "date": "17.07", "status": " GP" },
  { "name": "Agatha Christie - Hercule Poirot: The First Cases", "price": "2.75", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Age of Empires 25th Anniversary Collection", "price": "8.22", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Age of Empires II: Definitive Edition", "price": "1.3", "flag": "🇳🇬", "date": "17.07", "status": " GP" },
  { "name": "Age of Empires II: Deluxe Definitive Edition Bundle", "price": "2.59", "flag": "🇳🇬", "date": "17.07", "status": " GP" },
  { "name": "Age of Empires IV: Anniversary Edition", "price": "3.48", "flag": "🇳🇬", "date": "17.07", "status": " GP" },
  { "name": "Age of Empires: Definitive Collection", "price": "5.81", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Agents of Mayhem", "price": "0.17", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Agriculture", "price": "1.93", "flag": "🇮🇳", "date": "23.07", "status": "" },
  { "name": "Airborne Bundle", "price": "2.75", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Akai Katana Shin", "price": "3.11", "flag": "🇳🇬", "date": "23.07", "status": "" },
  { "name": "Akinofa", "price": "0.2", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "Akka Arrh", "price": "1.24", "flag": "🇳🇬", "date": "18.07", "status": "" },
  { "name": "Aliens: Fireteam Elite Into the Hive Edition", "price": "1.56", "flag": "🇳🇬", "date": "17.07", "status": " GP" },
  { "name": "Alone in the Dark", "price": "31.4", "flag": "🇮🇳", "date": "17.07", "status": " GP" },
  { "name": "Aluna: Sentinel of the Shards", "price": "0.74", "flag": "🇪🇬", "date": "23.07", "status": " GP" },
  { "name": "Ancestors: The Humankind Odyssey", "price": "1.73", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Arcade Paradise | High Score Edition", "price": "1.9", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Arcade Spirits", "price": "0.34", "flag": "🇹🇷", "date": "23.07", "status": " GP" },
  { "name": "Arcade Spirits: The New Challengers", "price": "0.93", "flag": "🇹🇷", "date": "23.07", "status": " GP" },
  { "name": "As Dusk Falls", "price": "1.28", "flag": "🇳🇬", "date": "17.07", "status": " GP" },
  { "name": "Assassin's Creed Antiquity Pack", "price": "48.45", "flag": "🇧🇷", "date": "16.09", "status": " GP" },
  { "name": "Assassin's Creed IV Black Flag", "price": "0.65", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Assassin's Creed Legendary Collection", "price": "88.09", "flag": "🇧🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Bundle: Assassin's Creed® Valhalla, Ass...", "price": "9.67", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey - DELUXE EDITION", "price": "16.92", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey - ULTIMATE EDITION", "price": "22.36", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey", "price": "3.63", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Assassin's Creed® Origins - DELUXE EDITION", "price": "16.32", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Origins - GOLD EDITION", "price": "19.34", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Origins", "price": "2.72", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Assassin's Creed® Syndicate", "price": "1.27", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Complete Edition", "price": "24.18", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Deluxe Edition", "price": "5.86", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Ragnarök Edition", "price": "4.53", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Assassin’s Creed Mirage Master Assassin Edition", "price": "24.18", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Assassin’s Creed® Valhalla + Immortals Fenyx Rising™ Bundle", "price": "60.44", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assault Suit Leynos 2 Saturn Tribute", "price": "13.72", "flag": "🇮🇸", "date": "23.07", "status": "" },
  { "name": "Assetto Corsa Ultimate Edition", "price": "0.76", "flag": "🇹🇷", "date": "18.07", "status": " GP" },
  { "name": "Asterix & Obelix Slap Them All! 2", "price": "14.99", "flag": "🇺🇸", "date": "17.07", "status": " GP" },
  { "name": "Asterix & Obelix Slap Them All!", "price": "3.23", "flag": "🇮🇳", "date": "17.07", "status": " GP" },
  { "name": "Asterix & Obelix XXL: Romastered", "price": "1.97", "flag": "🇮🇳", "date": "17.07", "status": " GP" },
  { "name": "Asterix & Obelix XXXL : The Ram of Hibernia", "price": "6.5", "flag": "🇮🇳", "date": "17.07", "status": " GP" },
  { "name": "Asterix & Obelix: Heroes", "price": "6.04", "flag": "🇹🇷", "date": "17.07", "status": "" },
  { "name": "Asteroids: Recharged", "price": "0.54", "flag": "🇳🇬", "date": "18.07", "status": "" },
  { "name": "Atari 50: The Anniversary Celebration", "price": "3.21", "flag": "🇳🇬", "date": "18.07", "status": "" },
  { "name": "Atari Flashback Classics Vol. 1", "price": "0.72", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Atari Flashback Classics Vol. 2", "price": "0.72", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Atari Flashback Classics Vol. 3", "price": "0.72", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Atomic Heart - Gold Edition", "price": "42.31", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Atomic Heart - Premium Edition", "price": "45.94", "flag": "🇹🇷", "date": "16.08", "status": " GP" },
  { "name": "Atomic Heart", "price": "17.38", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Attack on Titan 2: Final Battle", "price": "19.63", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Avatar: Frontiers of Pandora Deluxe Edition", "price": "24.18", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Avatar: Frontiers of Pandora™ Ultimate Edition", "price": "33.24", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Aven Colony - Deluxe Edition", "price": "1.53", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Awarded Platformer Bundle", "price": "1.2", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "BATSUGUN Saturn Tribute Boosted", "price": "3.11", "flag": "🇳🇬", "date": "23.07", "status": "" },
  { "name": "BATTLETECH Mercenary Collection", "price": "6.17", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "BLACKTAIL", "price": "3.63", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Bard's Gold", "price": "0.09", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "Batman: Arkham Knight Premium Edition", "price": "3.14", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Batora: Lost Haven", "price": "1.51", "flag": "🇹🇷", "date": "18.07", "status": " GP" },
  { "name": "Battlefleet Gothic: Armada 2 - Windows 10", "price": "0.66", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Battlefleet Gothic: Armada", "price": "0.31", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Beacon Pines", "price": "0.85", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "Bee Simulator", "price": "0.17", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Berzerk: Recharged", "price": "0.56", "flag": "🇳🇬", "date": "18.07", "status": "" },
  { "name": "Beyond a Steel Sky", "price": "3.29", "flag": "🇮🇳", "date": "17.07", "status": " GP" },
  { "name": "Big Moonstone Pack -- 5,500", "price": "5.07", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "BioShock: The Collection", "price": "1.44", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Black Legend", "price": "1.56", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "Black Widow: Recharged", "price": "0.54", "flag": "🇳🇬", "date": "18.07", "status": "" },
  { "name": "Blade Runner Enhanced Edition", "price": "0.43", "flag": "🇳🇬", "date": "18.07", "status": "" },
  { "name": "Blizzard® Arcade Collection", "price": "3.02", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Blood Bowl 3", "price": "8.31", "flag": "🇹🇷", "date": "17.07", "status": "" },
  { "name": "Bloons TD 6", "price": "1.28", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Boom Ball 2 for Kinect", "price": "0.15", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "Borderlands 3: Super Deluxe Edition", "price": "4.3", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Borderlands Legendary Collection", "price": "3.37", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Borderlands: Game of the Year Edition", "price": "1.37", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Bouncy Chicken", "price": "2.52", "flag": "🇯🇵", "date": "20.07", "status": "" },
  { "name": "Bravery and Greed", "price": "1.8", "flag": "🇹🇷", "date": "18.07", "status": " GP" },
  { "name": "Breakout: Recharged", "price": "0.48", "flag": "🇳🇬", "date": "18.07", "status": "" },
  { "name": "Broken Age", "price": "0.35", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Builder Flipper bundle", "price": "2.9", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "CLeM", "price": "8.45", "flag": "🇳🇬", "date": "16.07", "status": "" },
  { "name": "CYGNI: All Guns Blazing", "price": "15.33", "flag": "🇨🇱", "date": "05.08", "status": "" },
  { "name": "Call of Duty: Ghosts Digital Hardened Edition", "price": "3.96", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Call of Duty®: Advanced Warfare Digital Pro Edition", "price": "3.96", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Call of Duty®: Advanced Warfare Gold Edition", "price": "2.12", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Call of Duty®: Black Ops 4 - Digital Deluxe", "price": "9.69", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Call of Duty®: Black Ops 4", "price": "5.64", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Call of Duty®: Black Ops Cold War - Cross-Gen Bundle", "price": "7.08", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Call of Duty®: Black Ops Cold War", "price": "5.97", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Call of Duty®: Black Ops III - Zombies Chronicles Edition", "price": "2.99", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Call of Duty®: Black Ops III - Zombies Deluxe", "price": "5.68", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Call of Duty®: Ghosts", "price": "2.12", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Call of Duty®: Infinite Warfare - Digital Deluxe Edition", "price": "4.71", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Call of Duty®: Infinite Warfare - Digital Legacy Edition", "price": "3.84", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Call of Duty®: Infinite Warfare - Launch Edition", "price": "2.47", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Call of Duty®: Modern Warfare® - Digital Standard Edition", "price": "4.71", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Call of Duty®: Modern Warfare® II - Cross-Gen Bundle", "price": "29.9", "flag": "🇮🇳", "date": "17.07", "status": " GP" },
  { "name": "Call of Duty®: Modern Warfare® Remastered", "price": "2.93", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Call of Duty®: Vanguard - Cross-Gen Bundle", "price": "7.24", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Call of Duty®: Vanguard - Standard Edition", "price": "6.03", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Call of Duty®: WWII - Digital Deluxe", "price": "5.68", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Call of Duty®: WWII - Gold Edition", "price": "2.99", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Call of the Wild: The Angler™ - Gold Fishing Bundle", "price": "3.41", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "Call of the Wild: The Angler™ - Silver Fishing Bundle", "price": "2.75", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "Call of the Wild: The Angler™ - Ultimate Fishing Bundle", "price": "3.08", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Cannon Brawl", "price": "0.19", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Car Vouchers (10)", "price": "1.23", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Car Vouchers (24)", "price": "2.47", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Car Vouchers (4)", "price": "0.62", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Cars 3: Driven to Win", "price": "0.64", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Cassette Beasts: Deluxe Edition", "price": "1.78", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "CastleStorm - Definitive Edition", "price": "0.41", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Caverns of Mars: Recharged", "price": "0.56", "flag": "🇳🇬", "date": "18.07", "status": "" },
  { "name": "Centipede: Recharged", "price": "0.54", "flag": "🇳🇬", "date": "18.07", "status": "" },
  { "name": "Chef Life: A Restaurant Simulator", "price": "6.65", "flag": "🇹🇷", "date": "17.07", "status": "" },
  { "name": "Chicory: A Colorful Tale", "price": "0.85", "flag": "🇹🇷", "date": "23.07", "status": " GP" },
  { "name": "Child of Light® Ultimate Edition", "price": "3.23", "flag": "🇧🇷", "date": "17.07", "status": " GP" },
  { "name": "Chivalry 2 King's Edition", "price": "4.11", "flag": "🇹🇷", "date": "01.10", "status": " GP" },
  { "name": "Chivalry 2 Special Edition", "price": "3.41", "flag": "🇹🇷", "date": "01.10", "status": " GP" },
  { "name": "Cities: Skylines - Mayor's Edition", "price": "8.16", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "Cities: Skylines - Premium Edition 2", "price": "4.77", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "Clash: Artifacts of Chaos", "price": "7.3", "flag": "🇹🇷", "date": "17.07", "status": "" },
  { "name": "Cleopatra Fortune™ S-Tribute", "price": "1.53", "flag": "🇳🇬", "date": "23.07", "status": "" },
  { "name": "Control Ultimate Edition", "price": "1.81", "flag": "🇹🇷", "date": "18.07", "status": " GP" },
  { "name": "Cosmic Mirage (Windows)", "price": "0.34", "flag": "🇹🇷", "date": "26.07", "status": "" },
  { "name": "Cosmic Mirage (Xbox One)", "price": "0.34", "flag": "🇹🇷", "date": "26.07", "status": "" },
  { "name": "Cosmic Mirage", "price": "0.34", "flag": "🇹🇷", "date": "26.07", "status": "" },
  { "name": "Crackdown 3", "price": "1.28", "flag": "🇳🇬", "date": "17.07", "status": " GP" },
  { "name": "Crash Bandicoot™ - Time to Rumble Bundle", "price": "29.14", "flag": "🇯🇵", "date": "17.07", "status": " GP" },
  { "name": "Crash Bandicoot™ 4: It’s About Time", "price": "4.69", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Crash Team Rumble™ - Deluxe Edition", "price": "16.3", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Crash Team Rumble™ - Standard Edition", "price": "12.67", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Crash™ Team Racing Nitro-Fueled + Spyro™ Game Bundle", "price": "4.55", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Crash™ Team Racing Nitro-Fueled - Nitros Oxide Edition", "price": "3.7", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Crash™ Team Racing Nitro-Fueled", "price": "2.53", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Creaks", "price": "1.81", "flag": "🇹🇷", "date": "23.07", "status": " GP" },
  { "name": "Cricket 24", "price": "15.85", "flag": "🇹🇷", "date": "17.07", "status": "" },
  { "name": "Crimson Dragon", "price": "0.29", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Crown Wars – Sacred Edition", "price": "21.59", "flag": "🇹🇷", "date": "17.07", "status": "" },
  { "name": "Crusader Kings III: Royal Edition", "price": "5.14", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Cuphead & The Delicious Last Course", "price": "1.61", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Cuphead", "price": "1.4", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Cyber Citizen Shockman Zero", "price": "3.63", "flag": "🇮🇳", "date": "20.07", "status": "" },
  { "name": "D4: Dark Dreams Don't Die", "price": "0.29", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "DARKGEMS (Windows)", "price": "0.3", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "DARKGEMS (Xbox Series)", "price": "0.3", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "DARKGEMS", "price": "0.3", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "DAS WIRED-HORROR-SPIELPAKET", "price": "2.75", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "DEAD ISLAND 2 DELUXE EDITION", "price": "18.11", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "DEAD ISLAND 2 GOLD EDITION", "price": "21.73", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "DEAD OR ALIVE 6 (Full Game)", "price": "7.68", "flag": "🇮🇳", "date": "17.07", "status": " GP" },
  { "name": "DEAD OR ALIVE 6 Digital Deluxe Edition", "price": "8.27", "flag": "🇮🇳", "date": "17.07", "status": " GP" },
  { "name": "DEATHLOOP Deluxe Edition", "price": "15.71", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "DIRT 5 Year One Edition", "price": "6.17", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "DOOM Eternal Deluxe Edition", "price": "14.51", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "DOOM Eternal: The Ancient Gods - Part One", "price": "5.13", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "DOOM Eternal: The Ancient Gods - Part Two", "price": "5.13", "flag": "🇹🇷", "date": "17.03", "status": " GP" },
  { "name": "DOOM Eternal: Year One Pass (PC)", "price": "7.75", "flag": "🇹🇷", "date": "03.12", "status": " GP" },
  { "name": "DOOM Eternal: Year One Pass", "price": "7.75", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "DOOM Slayers Collection", "price": "3.26", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "DRAGON BALL FIGHTERZ", "price": "1.12", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "DRAGON BALL FighterZ - Legendary Edition", "price": "17.64", "flag": "🇰🇷", "date": "17.07", "status": " GP" },
  { "name": "DRAGON BALL THE BREAKERS", "price": "0.77", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "DRAGON BALL XENOVERSE 2 - Special Edition", "price": "13.58", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "DRAGON BALL XENOVERSE 2", "price": "1.34", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "DRAGON BALL Z: KAKAROT Legendary Edition", "price": "17.94", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "DRAGON BALL Z: KAKAROT", "price": "6.94", "flag": "🇯🇵", "date": "17.07", "status": " GP" },
  { "name": "DYNASTY WARRIORS 9 Complete Edition", "price": "25.67", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "DYNASTY WARRIORS 9 Empires Deluxe Edition", "price": "38.06", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "DYNASTY WARRIORS 9 Empires", "price": "23.55", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Dance of Death: Du Lac & Fey", "price": "0.49", "flag": "🇳🇬", "date": "18.07", "status": "" },
  { "name": "Darkest Dungeon®: Ancestral Edition", "price": "2.06", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Darksiders III", "price": "8.76", "flag": "🇨🇦", "date": "17.07", "status": " GP" },
  { "name": "Days of Doom", "price": "2.22", "flag": "🇳🇬", "date": "18.07", "status": "" },
  { "name": "Dead Cells: Medley of Pain Bundle", "price": "2.75", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Dead Cells: Return to Castlevania Bundle", "price": "2.15", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Dead End Job", "price": "0.14", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "Dead Island: Riptide Definitive Edition", "price": "0.26", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Dead by Daylight - Gold Edition", "price": "9.02", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Dead by Daylight: Dungeons & Dragons Edition", "price": "6.49", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Death Park 2", "price": "0.31", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "Death Park", "price": "0.31", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "Deathchron", "price": "2.57", "flag": "🇮🇳", "date": "27.07", "status": "" },
  { "name": "Deep Rock Galactic - Deluxe Edition", "price": "2.75", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "Deep Rock Galactic - Ultimate Edition", "price": "3.41", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "Desperados III", "price": "8.76", "flag": "🇨🇦", "date": "17.07", "status": " GP" },
  { "name": "Destroy All Humans! 2 - Reprobed", "price": "17.53", "flag": "🇨🇦", "date": "17.07", "status": " GP" },
  { "name": "Destroy All Humans! 2 - Reprobed: Single Player (X1)", "price": "13.14", "flag": "🇨🇦", "date": "17.07", "status": " GP" },
  { "name": "Deus Ex: Mankind Divided - Digital Deluxe Edition", "price": "3.62", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Diablo III: Eternal Collection", "price": "2.34", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Diablo® II: Resurrected™", "price": "1.71", "flag": "🇳🇬", "date": "17.07", "status": " GP" },
  { "name": "Diablo® IV", "price": "31.41", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Diablo® IV: Vessel of Hatred™ - Expansion Bundle", "price": "46.97", "flag": "🇧🇷", "date": "30.12", "status": " GP" },
  { "name": "Diablo® Prime Evil Collection", "price": "2.55", "flag": "🇳🇬", "date": "17.07", "status": " GP" },
  { "name": "Diablo® Prime Evil Upgrade", "price": "2.14", "flag": "🇳🇬", "date": "17.07", "status": " GP" },
  { "name": "Dishonored & Prey: The Arkane Collection", "price": "15.11", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Dishonored®: Death of the Outsider™ Deluxe Bundle", "price": "12.03", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Disney Dreamlight Valley – Gold Edition", "price": "9.02", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Disney Dreamlight Valley: A Rift in Time", "price": "3.89", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Disneyland Adventures", "price": "0.56", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Dolby Atmos for Headphones", "price": "0.96", "flag": "🇹🇷", "date": "11.09", "status": "" },
  { "name": "Dragon Blaze", "price": "1.04", "flag": "🇳🇬", "date": "23.07", "status": "" },
  { "name": "Dragon's Dogma 2 Deluxe Edition", "price": "32.13", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Dragon's Dogma 2", "price": "28.54", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Dread Nautical", "price": "0.59", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Dreamfall Chapters", "price": "0.32", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Dungeons 4 - Digital Deluxe Edition", "price": "24.18", "flag": "🇹🇷", "date": "16.11", "status": " GP" },
  { "name": "Dying Light: The Following - Enhanced Edition", "price": "4.94", "flag": "🇹🇷", "date": "23.07", "status": " GP" },
  { "name": "EA SPORTS FC™ 24 Standard Edition Xbox One & Xbox Series X|S", "price": "16.15", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "EA SPORTS FC™ 24 Standard Edition Xbox One & Xbox Series X|S", "price": "3.47", "flag": "🇰🇷", "date": "17.07", "status": "" },
  { "name": "EA SPORTS FC™ 24 Ultimate Edition Xbox One & Xbox Series X|S", "price": "31.1", "flag": "🇮🇳", "date": "17.07", "status": "" },
  { "name": "EA SPORTS™ Madden NFL 25 Deluxe Edition Xbox Series X|S & Xbox One + Limited Time Bonus", "price": "75.4", "flag": "🇰🇷", "date": "02.08", "status": "" },
  { "name": "Eiyuden Chronicle: Hundred Heroes - Digital Deluxe Edition", "price": "10.32", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Elevator Action™ -Returns- S-Tribute", "price": "1.53", "flag": "🇳🇬", "date": "23.07", "status": "" },
  { "name": "Epic Astro Story", "price": "0.92", "flag": "🇹🇷", "date": "19.07", "status": "" },
  { "name": "Epic Chef", "price": "1.59", "flag": "🇹🇷", "date": "18.07", "status": " GP" },
  { "name": "Escape Academy Deluxe Edition", "price": "2.39", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Escape Dead Island", "price": "0.23", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Everhood: Eternity Edition", "price": "0.27", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "ExhaustedMan", "price": "4.87", "flag": "🇺🇦", "date": "24.07", "status": "" },
  { "name": "Exo One", "price": "0.42", "flag": "🇹🇷", "date": "23.07", "status": " GP" },
  { "name": "F1® 23", "price": "37.68", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "F1® Manager 2023 Deluxe Edition", "price": "13.3", "flag": "🇹🇷", "date": "16.10", "status": " GP" },
  { "name": "F1® Manager 2024 Deluxe Edition", "price": "25.84", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "FOR HONOR – Gold Edition", "price": "7.56", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Fabledom", "price": "2.57", "flag": "🇳🇬", "date": "12.09", "status": "" },
  { "name": "Fallout 4: Game of the Year Edition (PC)", "price": "6.89", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Fallout 4: Game of the Year Edition", "price": "6.89", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Fallout 76: Skyline Valley Deluxe Edition", "price": "24.18", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Far Cry Insanity Bundle", "price": "11.01", "flag": "🇧🇷", "date": "17.07", "status": " GP" },
  { "name": "Far Cry Primal - Apex Edition", "price": "1.22", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Far Cry® 5 + Far Cry® New Dawn Deluxe Edition Bundle", "price": "19.39", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Far Cry® 5 Gold Edition + Far Cry ® New Dawn Deluxe Editi...", "price": "22.24", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Far Cry® 6 Deluxe Edition", "price": "18.74", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Far Cry® 6 Game of the Year Edition", "price": "22.97", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Far Cry® 6 Gold Edition", "price": "19.34", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Far Cry® 6", "price": "4.53", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Far Cry® New Dawn", "price": "1.63", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Far Cry®5 Gold Edition", "price": "3.17", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Farm Builder", "price": "0.27", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "Farm Bundle", "price": "2.75", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Farm Pets Bundle", "price": "4.11", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Farmer's Dynasty", "price": "0.26", "flag": "🇹🇷", "date": "18.07", "status": " GP" },
  { "name": "Farming Simulator 22 - Platinum Edition", "price": "5.19", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Farming Simulator 22 - Premium Edition", "price": "6.49", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Fight'N Rage", "price": "0.42", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Fit My Cat", "price": "0.7", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Flailing Limbs Bundle", "price": "1.43", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Forsaken Remastered", "price": "0.44", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Fort Boyard", "price": "0.26", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Forza Horizon 4 Deluxe Edition", "price": "10.32", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 4 Ultimate Edition", "price": "12.97", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 Deluxe Edition", "price": "10.32", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 PLUS Hot Wheels Bundle", "price": "10.32", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 Premium Add-Ons Bundle", "price": "6.49", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 Premium Edition", "price": "12.97", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport Deluxe Edition", "price": "11.61", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport Premium Add-Ons Bundle", "price": "5.19", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport Premium Edition", "price": "12.97", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport and Forza Horizon 5 Premium Add-Ons Bundle", "price": "11.06", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport and Forza Horizon 5 Premium Editions Bundle", "price": "24.58", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "From Shadows Redux", "price": "0.08", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "From Space Resistance Bundle", "price": "2.59", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "GUNBARICH", "price": "1.04", "flag": "🇳🇬", "date": "23.07", "status": "" },
  { "name": "Gangs of Sherwood – Lionheart Edition", "price": "6.34", "flag": "🇹🇷", "date": "17.07", "status": "" },
  { "name": "Gangs of Sherwood", "price": "5.43", "flag": "🇹🇷", "date": "18.07", "status": " GP" },
  { "name": "Garden Bundle", "price": "3.64", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Garden Life", "price": "7.54", "flag": "🇹🇷", "date": "17.07", "status": "" },
  { "name": "Garfield Kart Furious Racing", "price": "2.63", "flag": "🇮🇳", "date": "17.07", "status": " GP" },
  { "name": "Gear.Club Unlimited 2 - Ultimate Edition", "price": "4.86", "flag": "🇮🇳", "date": "17.07", "status": " GP" },
  { "name": "Gears of War 4 and Halo 5: Guardians Bundle", "price": "2.42", "flag": "🇹🇷", "date": "31.01", "status": " GP" },
  { "name": "Gears of War Ultimate Edition Deluxe Version", "price": "1.21", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Generation Zero ® - Silver Bundle", "price": "3.41", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Generation Zero ® - Ultimate Bundle", "price": "2.98", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Generation Zero® - Gold Bundle", "price": "4.11", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Ghostrunner: Complete Edition", "price": "3.11", "flag": "🇳🇬", "date": "18.07", "status": " GP" },
  { "name": "Ghostwire: Tokyo Deluxe Edition", "price": "18.74", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Gimmick! Special Edition", "price": "1.53", "flag": "🇳🇬", "date": "23.07", "status": "" },
  { "name": "Gnomes Garden 3: The thief of castles", "price": "0.3", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "Gnomes Garden: Lost King", "price": "0.61", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "Gnomes Garden: New Home", "price": "0.3", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "Goat Simulator 3 - Multiversal Traveler's Edition", "price": "2.75", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Goat Simulator: The GOATY", "price": "1.85", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Goat Simulator: Waste Of Space Bundle", "price": "1.03", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Gods Will Fall", "price": "0.54", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Gold Rush: The Game", "price": "2.3", "flag": "🇳🇬", "date": "23.07", "status": "" },
  { "name": "Golf With Your Friends - Starter Edition", "price": "17.45", "flag": "🇰🇷", "date": "17.07", "status": " GP" },
  { "name": "Golf With Your Friends - Ultimate Edition", "price": "32.61", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Gotham Knights: Deluxe", "price": "13.33", "flag": "🇪🇬", "date": "17.07", "status": " GP" },
  { "name": "Grand Theft Auto V", "price": "6.63", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Grand Theft Auto V: Premium Edition", "price": "2.49", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Grand Theft Auto: The Trilogy – The Definitive Edition", "price": "7.99", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Gravel Special Edition", "price": "0.9", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Gravel", "price": "1.46", "flag": "🇯🇵", "date": "17.07", "status": " GP" },
  { "name": "Gravitar: Recharged", "price": "0.5", "flag": "🇳🇬", "date": "18.07", "status": "" },
  { "name": "Gravity Heroes", "price": "0.25", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "Greak: Memories of Azur", "price": "1.13", "flag": "🇹🇷", "date": "18.07", "status": " GP" },
  { "name": "Guilty Gear -Strive- Daredevil Edition", "price": "12.29", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Gunkid 99 - Frantic 2D Arena Shooter", "price": "0.22", "flag": "🇳🇬", "date": "23.07", "status": "" },
  { "name": "Guntech 2", "price": "0.74", "flag": "🇪🇬", "date": "23.07", "status": "" },
  { "name": "HITMAN World of Assassination Deluxe Edition", "price": "5.84", "flag": "🇳🇬", "date": "17.07", "status": " GP" },
  { "name": "HITMAN World of Assassination", "price": "3.61", "flag": "🇳🇬", "date": "17.07", "status": " GP" },
  { "name": "HITMAN™ 2", "price": "7.46", "flag": "🇹🇷", "date": "04.02", "status": "" },
  { "name": "HOT WHEELS UNLEASHED 2 - Turbocharged™", "price": "1.54", "flag": "🇳🇬", "date": "17.07", "status": " GP" },
  { "name": "HOT WHEELS UNLEASHED™ 2 - Turbocharged - Deluxe Edition", "price": "2.15", "flag": "🇳🇬", "date": "17.07", "status": " GP" },
  { "name": "HOT WHEELS UNLEASHED™ 2 - Turbocharged - Legendary Edition", "price": "2.76", "flag": "🇳🇬", "date": "17.07", "status": " GP" },
  { "name": "HUMANKIND™ - Heritage Edition", "price": "7.72", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Halo 5: Guardians – Digital Deluxe Edition", "price": "19.95", "flag": "🇹🇷", "date": "31.05", "status": " GP" },
  { "name": "Halo Wars 2: Complete Edition", "price": "24.18", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Hammerwatch", "price": "0.38", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Hammerwatch: Heroic Bundle", "price": "0.54", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Happy Words", "price": "0.35", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "Hasbro Family Fun Pack Conquest Edition", "price": "8.76", "flag": "🇨🇦", "date": "17.07", "status": " GP" },
  { "name": "Hatup", "price": "1.93", "flag": "🇮🇳", "date": "23.07", "status": "" },
  { "name": "Haunted House", "price": "1.48", "flag": "🇳🇬", "date": "18.07", "status": "" },
  { "name": "Headbangers: Rhythm Royale - Digital Deluxe Edition", "price": "3.89", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hell Let Loose - Deluxe Edition", "price": "7.72", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hell Let Loose - Ultimate Edition", "price": "9.02", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hell Well", "price": "2.21", "flag": "🇯🇵", "date": "23.07", "status": "" },
  { "name": "Hello Neighbor 2 Deluxe Edition", "price": "7.72", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Heroes of Hammerwatch - Ultimate Edition", "price": "0.85", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Hexapoda", "price": "0.38", "flag": "🇹🇷", "date": "23.07", "status": " GP" },
  { "name": "Hi-Fi RUSH Deluxe Edition", "price": "14.51", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Hogwarts Legacy Xbox One Version", "price": "9.66", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Hogwarts Legacy Xbox Series X|S Version", "price": "10.87", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Hokko Life", "price": "1.58", "flag": "🇹🇷", "date": "18.07", "status": " GP" },
  { "name": "Hole io & Paper io 2", "price": "0.54", "flag": "🇹🇷", "date": "20.07", "status": "" },
  { "name": "Home Run High", "price": "0.92", "flag": "🇹🇷", "date": "19.07", "status": "" },
  { "name": "Hotel: A Resort Simulator", "price": "8.61", "flag": "🇹🇷", "date": "17.07", "status": "" },
  { "name": "House Flipper 2", "price": "0.57", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Huge Moonstone Pack -- 14,500", "price": "12.91", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hyper-5", "price": "3.94", "flag": "🇮🇳", "date": "23.07", "status": " GP" },
  { "name": "Hypnospace Outlaw & Slayers X: Terminal Aftermath: Vengance of the Slayer Bundle", "price": "2.3", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "INSIDE & LIMBO Bundle", "price": "3.34", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Immortals Fenyx Rising™ Gold Edition", "price": "35.06", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "Immortals of Aveum™ Deluxe Edition", "price": "29.6", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "Infinite Minigolf", "price": "0.41", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Injustice™ 2 - Legendary Edition", "price": "5.14", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Inspector Gadget - MAD Time Party", "price": "13.0", "flag": "🇮🇳", "date": "17.07", "status": " GP" },
  { "name": "Insurgency: Sandstorm - Deluxe Edition", "price": "20.68", "flag": "🇯🇵", "date": "16.01", "status": " GP" },
  { "name": "Insurgency: Sandstorm - Gold Edition", "price": "38.68", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Insurgency: Sandstorm - Ultimate Edition", "price": "34.45", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Isonzo: Collector's Edition", "price": "4.11", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Isonzo: Deluxe Edition", "price": "1.13", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Isonzo: Ultimate Edition", "price": "54.49", "flag": "🇯🇵", "date": "16.06", "status": " GP" },
  { "name": "Jet Kave Adventure", "price": "0.28", "flag": "🇳🇬", "date": "23.07", "status": "" },
  { "name": "JoJo's Bizarre Adventure: All-Star Battle R Deluxe Edition", "price": "3.0", "flag": "🇳🇬", "date": "17.07", "status": " GP" },
  { "name": "Jurassic World Evolution 2: Deluxe Edition", "price": "10.33", "flag": "🇪🇬", "date": "16.05", "status": " GP" },
  { "name": "Jurassic World Evolution 2: Dominion Bundle", "price": "11.83", "flag": "🇪🇬", "date": "16.05", "status": " GP" },
  { "name": "Just Dance 2018", "price": "0.0", "flag": "🇪🇬", "date": "", "status": "" },
  { "name": "Kargast", "price": "0.43", "flag": "🇳🇬", "date": "23.07", "status": "" },
  { "name": "Kerbal Space Program Enhanced Edition", "price": "1.33", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "KickBeat Special Edition", "price": "0.26", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Killer Instinct: Anniversary Edition", "price": "10.56", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "King of Seas", "price": "0.64", "flag": "🇹🇷", "date": "18.07", "status": " GP" },
  { "name": "King's Bounty II", "price": "1.36", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Kingdom Come: Deliverance - Royal Edition", "price": "0.64", "flag": "🇹🇷", "date": "23.07", "status": " GP" },
  { "name": "Kingdoms and Castles", "price": "0.64", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Kombinera", "price": "0.7", "flag": "🇳🇬", "date": "18.07", "status": "" },
  { "name": "Kona", "price": "0.21", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "LEGO® 2K Drive Awesome Edition", "price": "37.44", "flag": "🇰🇷", "date": "01.01", "status": " GP" },
  { "name": "LEGO® 2K Drive Awesome Rivals Edition", "price": "54.37", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "LEGO® Star Wars™: The Skywalker Saga Galactic Edition", "price": "11.83", "flag": "🇪🇬", "date": "01.05", "status": " GP" },
  { "name": "LEGO® Star Wars™: The Skywalker Saga", "price": "8.92", "flag": "🇪🇬", "date": "01.05", "status": " GP" },
  { "name": "LEGO® Star Wars™:The Skywalker Saga Deluxe Edition", "price": "10.33", "flag": "🇪🇬", "date": "17.07", "status": " GP" },
  { "name": "Lara Croft and the Temple of Osiris", "price": "1.4", "flag": "🇿🇦", "date": "17.07", "status": " GP" },
  { "name": "Let's Build a Zoo & Dinosaur DLC Bundle", "price": "1.84", "flag": "🇹🇷", "date": "01.10", "status": " GP" },
  { "name": "Let's Build a Zoo: Aquarium Odyssey Bundle", "price": "1.84", "flag": "🇹🇷", "date": "01.10", "status": " GP" },
  { "name": "Let's Build a Zoo: Ultimate Bundle", "price": "2.33", "flag": "🇹🇷", "date": "01.10", "status": " GP" },
  { "name": "Lies of P Digital Deluxe Edition", "price": "9.02", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Life of Fly", "price": "0.77", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "Light & Dark Bundle", "price": "3.71", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Like a Dragon Gaiden: The Man Who Erased His Name Deluxe Edition", "price": "10.21", "flag": "🇪🇬", "date": "16.11", "status": "" },
  { "name": "Like a Dragon: Ishin! Digital Deluxe Edition", "price": "12.92", "flag": "🇪🇬", "date": "16.10", "status": "" },
  { "name": "Little Nightmares II", "price": "4.48", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Llamasoft: The Jeff Minter Story", "price": "1.93", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Lonely Mountains: Downhill - Eldfjall Island", "price": "1.89", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "Lords of the Fallen Deluxe Edition", "price": "5.16", "flag": "🇳🇬", "date": "18.07", "status": " GP" },
  { "name": "Lucy Dreaming", "price": "1.24", "flag": "🇹🇷", "date": "23.07", "status": " GP" },
  { "name": "Lunar Lander Beyond", "price": "2.96", "flag": "🇳🇬", "date": "18.07", "status": "" },
  { "name": "Luxury Garden Bundle", "price": "4.11", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "MASSIVE CHALICE", "price": "0.43", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "MLB® The Show™ 24 - Digital Deluxe Edition", "price": "24.18", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "MLB® The Show™ 24 - MVP Edition", "price": "20.55", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "MLB® The Show™ 24 - Xbox One Standard Edition", "price": "14.51", "flag": "🇹🇷", "date": "17.07", "status": "" },
  { "name": "MLB® The Show™ 24 - Xbox Series X|S Standard Edition", "price": "35.06", "flag": "🇹🇷", "date": "17.07", "status": "" },
  { "name": "MONOPOLY DEAL", "price": "0.13", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "MORDHAU - Gold Edition", "price": "2.73", "flag": "🇳🇬", "date": "17.07", "status": " GP" },
  { "name": "MXGP 2021 - The Official Motocross Videogame - Xbox Series X|S", "price": "3.96", "flag": "🇰🇷", "date": "17.07", "status": " GP" },
  { "name": "MXGP 2021 - The Official Motocross Videogame", "price": "3.96", "flag": "🇰🇷", "date": "17.07", "status": " GP" },
  { "name": "MY HERO ONE'S JUSTICE 2 Deluxe Edition", "price": "10.8", "flag": "🇰🇷", "date": "17.07", "status": " GP" },
  { "name": "MY HERO ONE'S JUSTICE 2 Deluxe Edition", "price": "8.3", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Machinarium & Creaks Bundle", "price": "2.98", "flag": "🇹🇷", "date": "23.07", "status": " GP" },
  { "name": "Machinarium", "price": "1.45", "flag": "🇹🇷", "date": "23.07", "status": " GP" },
  { "name": "Madden NFL 19", "price": "30.03", "flag": "🇨🇴", "date": "30.12", "status": "" },
  { "name": "Madden NFL 24 Xbox Series X|S & Xbox One", "price": "16.15", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "Mafia: Trilogy", "price": "3.73", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Maneater Apex Edition", "price": "3.41", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "Marsupilami: Hoobadventure", "price": "2.63", "flag": "🇮🇳", "date": "17.07", "status": " GP" },
  { "name": "Marvel's Guardians of the Galaxy", "price": "3.23", "flag": "🇪🇬", "date": "17.07", "status": " GP" },
  { "name": "Marvel's Midnight Suns Legendary Edition for Xbox One", "price": "8.68", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Marvel's Midnight Suns Legendary Edition for Xbox Series X|S", "price": "8.68", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Mato Anomalies Digital Deluxe Edition", "price": "4.92", "flag": "🇺🇦", "date": "18.07", "status": "" },
  { "name": "Max: The Curse of Brotherhood", "price": "0.29", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "May’s Mysteries: The Secret of Dragonville", "price": "0.32", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "MechWarrior 5: Mercenaries - JumpShip Edition", "price": "4.85", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Megaparty: A Tootuff Adventure", "price": "0.13", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Metal Black™ S-Tribute", "price": "0.72", "flag": "🇳🇬", "date": "23.07", "status": "" },
  { "name": "Metro 2033 Redux", "price": "0.26", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Metro Exodus", "price": "0.85", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Metro: Last Light Redux", "price": "0.26", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.0", "flag": "🇺🇸", "date": "30.11", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.0", "flag": "🇺🇸", "date": "30.11", "status": "" },
  { "name": "Microsoft Flight Simulator Deluxe 40th Anniversary Edition", "price": "11.61", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Microsoft Flight Simulator Premium Deluxe 40th Anniversar...", "price": "15.44", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Middle-earth™: The Shadow Bundle", "price": "14.48", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle - Windows 10", "price": "1.53", "flag": "🇹🇷", "date": "27.07", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle", "price": "1.53", "flag": "🇹🇷", "date": "27.07", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate Edition for Windows", "price": "5.92", "flag": "🇪🇬", "date": "27.07", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate Edition", "price": "5.19", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Minecraft Legends Deluxe Edition", "price": "6.49", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Minecraft: Deluxe Collection", "price": "3.89", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Missile Command: Recharged", "price": "0.56", "flag": "🇳🇬", "date": "18.07", "status": "" },
  { "name": "Monster Energy Supercross - The Official Videogame 6", "price": "7.02", "flag": "🇰🇷", "date": "17.07", "status": " GP" },
  { "name": "Monster Hunter Rise + Sunbreak Deluxe", "price": "33.85", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "Monster Hunter Rise + Sunbreak", "price": "29.01", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Monster Hunter Rise Deluxe Edition", "price": "19.19", "flag": "🇪🇬", "date": "01.04", "status": " GP" },
  { "name": "Moo Lander", "price": "0.98", "flag": "🇹🇷", "date": "23.07", "status": " GP" },
  { "name": "Moonlighter: Complete Edition", "price": "1.63", "flag": "🇹🇷", "date": "01.12", "status": " GP" },
  { "name": "Mordhau", "price": "1.63", "flag": "🇳🇬", "date": "17.07", "status": " GP" },
  { "name": "Mortal Kombat 11 Ultimate + Injustice 2 Leg. Edition Bundle", "price": "20.77", "flag": "🇹🇷", "date": "16.12", "status": " GP" },
  { "name": "Mortal Kombat 11 Ultimate", "price": "8.92", "flag": "🇪🇬", "date": "17.07", "status": " GP" },
  { "name": "MotoGP™24", "price": "23.75", "flag": "🇰🇷", "date": "17.07", "status": " GP" },
  { "name": "Mount & Blade II: Bannerlord Digital Deluxe Edition", "price": "3.86", "flag": "🇳🇬", "date": "17.07", "status": " GP" },
  { "name": "Mount & Blade II: Bannerlord", "price": "3.09", "flag": "🇳🇬", "date": "17.07", "status": " GP" },
  { "name": "Moving Out 2 - Deluxe Edition", "price": "4.26", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Moving Out Deluxe Edition", "price": "1.32", "flag": "🇹🇷", "date": "18.07", "status": " GP" },
  { "name": "Mr. Run and Jump", "price": "1.7", "flag": "🇳🇬", "date": "18.07", "status": "" },
  { "name": "Murder Mystery Machine", "price": "1.64", "flag": "🇮🇳", "date": "17.07", "status": " GP" },
  { "name": "My Memory of Us", "price": "0.5", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "My Time at Portia Deluxe Edition", "price": "5.78", "flag": "🇹🇷", "date": "01.10", "status": " GP" },
  { "name": "My Time at Sandrock Deluxe Edition", "price": "3.41", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "My Universe Collection", "price": "6.52", "flag": "🇮🇳", "date": "17.07", "status": " GP" },
  { "name": "N++ (NPLUSPLUS)", "price": "0.7", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "NARUTO TO BORUTO: SHINOBI STRIKER Ultimate Edition", "price": "14.49", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "NARUTO X BORUTO Ultimate Ninja STORM CONNECTIONS Sound Ultimate Edition", "price": "55.84", "flag": "🇯🇵", "date": "17.07", "status": " GP" },
  { "name": "NARUTO X BORUTO Ultimate Ninja STORM CONNECTIONS Ultimate Edition", "price": "37.0", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "NARUTO X BORUTO Ultimate Ninja STORM CONNECTIONS", "price": "19.93", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "NBA 2K24 Baller Edition", "price": "42.29", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "NBA 2K24 Black Mamba Edition", "price": "11.48", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "NBA 2K24 for Xbox One", "price": "3.93", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "NBA 2K24 for Xbox Series X|S", "price": "4.53", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "NINJA GAIDEN: Master Collection Deluxe Edition", "price": "4.14", "flag": "🇳🇬", "date": "17.07", "status": " GP" },
  { "name": "NINJA GAIDEN: Master Collection", "price": "3.31", "flag": "🇳🇬", "date": "17.07", "status": " GP" },
  { "name": "Neckbreak", "price": "1.63", "flag": "🇹🇷", "date": "20.07", "status": "" },
  { "name": "Necromunda: Underhive Wars", "price": "0.57", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "New Joe & Mac - Caveman Ninja", "price": "5.83", "flag": "🇮🇳", "date": "17.07", "status": " GP" },
  { "name": "Nickelodeon All-Star Brawl 2 Deluxe Edition", "price": "10.33", "flag": "🇪🇬", "date": "01.01", "status": " GP" },
  { "name": "Nickelodeon All-Star Brawl 2 Ultimate Edition", "price": "11.83", "flag": "🇪🇬", "date": "01.01", "status": " GP" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.21", "flag": "🇹🇷", "date": "30.05", "status": "" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "27.15", "flag": "🇧🇷", "date": "17.07", "status": " GP" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "29.18", "flag": "🇮🇳", "date": "16.03", "status": " GP" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "4.11", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Nowhere Prophet", "price": "0.86", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "OCTOPATH TRAVELER + OCTOPATH TRAVELER II Bundle", "price": "40.87", "flag": "🇺🇦", "date": "03.09", "status": " GP" },
  { "name": "ONE PIECE World Seeker Deluxe Edition", "price": "1.54", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Octahedron", "price": "0.41", "flag": "🇹🇷", "date": "23.07", "status": " GP" },
  { "name": "Offroad Racing - Buggy X ATV X Moto", "price": "0.26", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "OlliOlli World", "price": "2.84", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Omno", "price": "0.29", "flag": "🇹🇷", "date": "23.07", "status": " GP" },
  { "name": "Operation Wolf Returns: First Mission", "price": "9.71", "flag": "🇮🇳", "date": "17.07", "status": " GP" },
  { "name": "Operencia: The Stolen Sun", "price": "0.9", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Orcs Must Die! 3 Bundle", "price": "2.75", "flag": "🇹🇷", "date": "16.04", "status": " GP" },
  { "name": "Ori and the Blind Forest: Definitive Edition", "price": "2.49", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Ori and the Will of the Wisps", "price": "1.28", "flag": "🇳🇬", "date": "17.07", "status": " GP" },
  { "name": "Ori: The Collection", "price": "2.14", "flag": "🇳🇬", "date": "17.07", "status": " GP" },
  { "name": "Othercide", "price": "1.15", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Outbreak: Heart and Brains Collection", "price": "26.02", "flag": "🇮🇳", "date": "23.07", "status": " GP" },
  { "name": "Overcooked! 2 - Gourmet Edition", "price": "2.18", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Overcooked", "price": "0.37", "flag": "🇹🇷", "date": "18.07", "status": " GP" },
  { "name": "Overdriven Evolution", "price": "0.42", "flag": "🇹🇷", "date": "23.07", "status": " GP" },
  { "name": "Overpass 2 Deluxe Edition", "price": "10.28", "flag": "🇹🇷", "date": "17.07", "status": "" },
  { "name": "Overpass 2", "price": "5.89", "flag": "🇹🇷", "date": "18.07", "status": " GP" },
  { "name": "PAC-MAN Mega Tunnel Battle: Chomp Champs - Deluxe Edition", "price": "11.32", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "PAC-MAN Mega Tunnel Battle: Chomp Champs", "price": "6.88", "flag": "🇧🇷", "date": "17.07", "status": " GP" },
  { "name": "PAW Patrol: Grand Prix - Complete Edition", "price": "15.71", "flag": "🇹🇷", "date": "01.10", "status": " GP" },
  { "name": "PGA TOUR 2K23 Tiger Woods Edition", "price": "12.95", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "PO'ed: Definitive Edition", "price": "1.36", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "PONG Quest", "price": "0.53", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Paper Cut Mansion", "price": "0.68", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "Paper io 2", "price": "0.34", "flag": "🇹🇷", "date": "20.07", "status": "" },
  { "name": "Paradise Killer", "price": "0.51", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "Paradise Marsh", "price": "0.66", "flag": "🇹🇷", "date": "23.07", "status": " GP" },
  { "name": "Party Animals Deluxe Edition", "price": "3.89", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Party Friends", "price": "0.17", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "Penny's Big Breakaway", "price": "14.94", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Persona 5 Tactica: Digital Deluxe Edition", "price": "14.79", "flag": "🇪🇬", "date": "16.11", "status": "" },
  { "name": "Pets Bundle", "price": "3.08", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Phoenix Point: Behemoth Edition", "price": "2.06", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Pinball FX3 - Marvel Pinball: Cinematic Pack", "price": "0.3", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Pinball FX3 - Marvel Pinball: Heavy Hitters", "price": "0.3", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Pinball FX3 - Marvel Pinball: Marvel Legends Pack", "price": "0.3", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Pinball FX3 - Medieval Pack", "price": "0.15", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Pinball FX3 - Sci-Fi Pack", "price": "0.3", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Pinball FX3 - Star Wars™ Pinball: Unsung Heroes", "price": "0.21", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Pirate Bloopers", "price": "0.52", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "Pirates Outlaws", "price": "0.36", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Pixel Gladiator", "price": "0.08", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "Pocket Arcade Story", "price": "0.92", "flag": "🇹🇷", "date": "19.07", "status": "" },
  { "name": "Portal Knights - Legendary Edition", "price": "1.54", "flag": "🇹🇷", "date": "18.07", "status": " GP" },
  { "name": "PowerSlave Exhumed", "price": "1.0", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Prey®: Digital Deluxe Edition", "price": "6.89", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "Professor Rubik's Brain Fitness", "price": "0.17", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Prototype® Biohazard Bundle", "price": "1.36", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Prototype®2", "price": "1.07", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Prune & Milo", "price": "0.73", "flag": "🇹🇷", "date": "26.07", "status": "" },
  { "name": "Psychonauts 2", "price": "1.93", "flag": "🇳🇬", "date": "17.07", "status": " GP" },
  { "name": "Pure Farming 2018", "price": "1.08", "flag": "🇧🇷", "date": "18.07", "status": " GP" },
  { "name": "Puzzle Bobble™2X/BUST-A-MOVE™2 Arcade Edition & Puzzle Bobble™3/BUST-A-MOVE™3 S-Tribute", "price": "1.53", "flag": "🇳🇬", "date": "23.07", "status": "" },
  { "name": "Quantum Break", "price": "3.99", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Quantum Replica", "price": "0.17", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "Quantum: Recharged", "price": "0.62", "flag": "🇳🇬", "date": "18.07", "status": "" },
  { "name": "RAGE 2: Deluxe Edition", "price": "10.88", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "RESIDENT EVIL 2 Deluxe Edition", "price": "24.18", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "RIDE 5 - Special Edition", "price": "21.62", "flag": "🇰🇷", "date": "17.07", "status": " GP" },
  { "name": "RIDE 5", "price": "14.04", "flag": "🇰🇷", "date": "17.07", "status": " GP" },
  { "name": "RISK", "price": "0.42", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "ROMANCE OF THE THREE KINGDOMS XIII: Fame and Strategy Expansion Pack Bundle", "price": "4.08", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Raptor Boyfriend: A High School Romance", "price": "3.58", "flag": "🇮🇳", "date": "23.07", "status": " GP" },
  { "name": "Ravva and the Phantom Library", "price": "3.85", "flag": "🇧🇷", "date": "23.07", "status": " GP" },
  { "name": "ReCore", "price": "2.59", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Red Dead Redemption & Red Dead Redemption 2 Bundle", "price": "8.51", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Regular Moonstone Pack -- 2,500", "price": "2.41", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Relicta", "price": "0.27", "flag": "🇹🇷", "date": "23.07", "status": " GP" },
  { "name": "Remnant II - Deluxe Edition", "price": "8.92", "flag": "🇪🇬", "date": "01.06", "status": " GP" },
  { "name": "Remnant II - Ultimate Edition", "price": "10.33", "flag": "🇪🇬", "date": "17.07", "status": " GP" },
  { "name": "Remnant: From the Ashes - Complete Edition", "price": "3.41", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Rento Fortune", "price": "0.36", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "Riders Republic™", "price": "5.29", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Rims Racing : Ultimate Edition Xbox One & Xbox Series X|S", "price": "2.64", "flag": "🇹🇷", "date": "18.07", "status": " GP" },
  { "name": "Rise of the Tomb Raider: 20 Year Celebration", "price": "12.61", "flag": "🇹🇷", "date": "01.12", "status": " GP" },
  { "name": "Rise of the Triad: Ludicrous Edition", "price": "0.85", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Road 96", "price": "0.65", "flag": "🇳🇬", "date": "18.07", "status": "" },
  { "name": "RoboCop: Rogue City", "price": "12.84", "flag": "🇹🇷", "date": "17.07", "status": "" },
  { "name": "Roguebook - Deluxe Edition Xbox Series X|S & Xbox One", "price": "0.6", "flag": "🇹🇷", "date": "17.07", "status": "" },
  { "name": "Roguelites in space", "price": "2.62", "flag": "🇳🇬", "date": "23.07", "status": " GP" },
  { "name": "RollerCoaster Tycoon Adventures Deluxe", "price": "3.71", "flag": "🇳🇬", "date": "18.07", "status": "" },
  { "name": "Rollerdrome", "price": "3.78", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Roman Rumble in Las Vegum - Asterix & Obelix XXL 2", "price": "1.78", "flag": "🇨🇱", "date": "17.07", "status": " GP" },
  { "name": "Royal Roads", "price": "0.61", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "Ruinarch", "price": "5.33", "flag": "🇹🇷", "date": "23.07", "status": " GP" },
  { "name": "Rush: A DisneyPixar Adventure", "price": "0.86", "flag": "🇳🇬", "date": "17.07", "status": " GP" },
  { "name": "Ryse: Legendary Edition", "price": "1.32", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "SAMURAI WARRIORS 5 Digital Deluxe Edition", "price": "27.18", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "SAMURAI WARRIORS 5", "price": "19.63", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "SBK™22", "price": "2.22", "flag": "🇯🇵", "date": "17.07", "status": " GP" },
  { "name": "SENSHI SOKOBAN QUEST (Windows 10)", "price": "0.32", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "SENSHI SOKOBAN QUEST", "price": "0.32", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "SOL DIVIDE -SWORD OF DARKNESS-", "price": "1.04", "flag": "🇳🇬", "date": "23.07", "status": "" },
  { "name": "SOULCALIBUR VI Deluxe Edition", "price": "2.18", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "SOUTH PARK: SNOW DAY!", "price": "16.43", "flag": "🇨🇦", "date": "17.07", "status": " GP" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "12.73", "flag": "🇹🇷", "date": "31.12", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "8.41", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "STAR WARS™: Bounty Hunter™", "price": "2.33", "flag": "🇳🇬", "date": "31.07", "status": "" },
  { "name": "STAR WARS™: Dark Forces Remaster", "price": "1.8", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "SUPERHOT ONE OF US BUNDLE", "price": "2.15", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "SWORD ART ONLINE Last Recollection Deluxe Edition", "price": "26.95", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Saints Row IV: Re-Elected", "price": "0.26", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Scholar's Mate", "price": "0.85", "flag": "🇹🇷", "date": "19.07", "status": "" },
  { "name": "ScreamRide", "price": "0.48", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "ScreamRide", "price": "0.83", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Sea of Thieves: 2024 Deluxe Edition", "price": "6.18", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Sea of Thieves: 2024 Premium Edition", "price": "7.35", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Seasons after Fall", "price": "0.27", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Session: Skate Sim Deluxe Edition", "price": "1.54", "flag": "🇹🇷", "date": "18.07", "status": " GP" },
  { "name": "Session: Skate Sim", "price": "1.49", "flag": "🇹🇷", "date": "17.07", "status": "" },
  { "name": "Shadow Man Remastered", "price": "1.0", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Shadowblade Odyssey", "price": "0.08", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "Shiness: The Lightning Kingdom", "price": "0.27", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Ship of Fools - Aquapocalypse Edition", "price": "11.96", "flag": "🇮🇳", "date": "17.07", "status": " GP" },
  { "name": "Sid Meier's Civilization VI", "price": "1.17", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Sixty Words by POWGI", "price": "0.34", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "Skull and Bones Deluxe Edition", "price": "24.18", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Skyrim Anniversary Edition + Fallout 4 G.O.T.Y Bundle", "price": "19.34", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Slipstream", "price": "0.19", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Small Moonstone Pack -- 1,200", "price": "1.24", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Sniper Elite 5 Complete Edition", "price": "7.56", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Sniper Elite 5 Deluxe Edition", "price": "11.61", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Sniper Elite 5", "price": "2.32", "flag": "🇳🇬", "date": "17.07", "status": " GP" },
  { "name": "Sniper Ghost Warrior Contracts 2", "price": "1.3", "flag": "🇳🇬", "date": "18.07", "status": " GP" },
  { "name": "Sniper Ghost Warrior Contracts", "price": "1.04", "flag": "🇳🇬", "date": "18.07", "status": " GP" },
  { "name": "SnowRunner - 1-Anniversary Edition", "price": "7.25", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "SnowRunner - 2-Year Anniversary Edition", "price": "31.43", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "SnowRunner - 3-Year Anniversary Edition", "price": "38.68", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "SnowRunner - 4-Year Anniversary Edition", "price": "45.94", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "SnowRunner", "price": "2.64", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Soccer Story", "price": "0.68", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "SongPop Party", "price": "1.3", "flag": "🇳🇬", "date": "24.07", "status": "" },
  { "name": "Soul Searching", "price": "1.04", "flag": "🇳🇬", "date": "18.07", "status": "" },
  { "name": "South Park™: The Fractured but Whole™ - Gold Edition", "price": "11.79", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Space Engineers: Ultimate Edition 2023", "price": "5.08", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "Space Hulk: Tactics", "price": "0.61", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Sparkle Bundle", "price": "0.99", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "SpongeBob SquarePants: The Cosmic Shake", "price": "17.53", "flag": "🇨🇦", "date": "17.07", "status": " GP" },
  { "name": "Spyro™ Reignited Trilogy", "price": "3.49", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Starfield Premium Edition Upgrade", "price": "5.81", "flag": "🇪🇬", "date": "05.09", "status": " GP" },
  { "name": "Starfield Premium Edition", "price": "14.83", "flag": "🇪🇬", "date": "30.12", "status": " GP" },
  { "name": "State of Decay 2: Juggernaut Edition", "price": "1.28", "flag": "🇳🇬", "date": "17.07", "status": " GP" },
  { "name": "State of Decay: Year-One Survival Edition", "price": "1.51", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "SteamWorld Build & Dig Bundle", "price": "4.51", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "SteamWorld Heist II", "price": "3.5", "flag": "🇳🇬", "date": "08.08", "status": "" },
  { "name": "Steelrising - Standard Edition", "price": "3.02", "flag": "🇹🇷", "date": "17.07", "status": "" },
  { "name": "Stellaris: Console Edition - Deluxe Edition", "price": "4.14", "flag": "🇹🇷", "date": "16.10", "status": " GP" },
  { "name": "Sunset Overdrive Deluxe Edition", "price": "0.52", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Sunset Overdrive", "price": "0.37", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Super Impossible Road", "price": "0.5", "flag": "🇹🇷", "date": "23.07", "status": " GP" },
  { "name": "Super Mutant Alien Assault", "price": "0.15", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "Super Pixel Racers", "price": "0.3", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "Syberia - The World Before", "price": "8.15", "flag": "🇮🇳", "date": "17.07", "status": " GP" },
  { "name": "System Shock", "price": "15.84", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "TACTICAL BANDITS", "price": "0.92", "flag": "🇹🇷", "date": "25.07", "status": "" },
  { "name": "TEKKEN 8 - Ultimate Edition", "price": "46.52", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "TEKKEN 8", "price": "27.18", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "TOKI Juju Densetsu", "price": "0.45", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "TT Isle Of Man 3 - Racing Fan Edition", "price": "11.79", "flag": "🇹🇷", "date": "17.07", "status": "" },
  { "name": "TUNIC", "price": "1.99", "flag": "🇳🇬", "date": "23.07", "status": " GP" },
  { "name": "Tails Of Iron", "price": "0.8", "flag": "🇳🇬", "date": "18.07", "status": " GP" },
  { "name": "Tales of ARISE + SCARLET NEXUS バンドル", "price": "36.24", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Tales of Arise - Beyond The Dawn Ultimate Edition", "price": "32.62", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Tales of Arise - Beyond the Dawn Deluxe Edition", "price": "36.24", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Tales of Arise - Beyond the Dawn Edition", "price": "21.59", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Taxi Life: A City Driving Simulator", "price": "7.54", "flag": "🇹🇷", "date": "17.07", "status": "" },
  { "name": "Teenage Mutant Ninja Turtles: Shredder's Revenge - Dimension Shellshock", "price": "2.06", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Tempest 4000", "price": "0.95", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Tennis Club Story", "price": "0.92", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Terraformers + Tin Can - To infinity, and beyond bundle!", "price": "6.68", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "Terraformers: Supporter Edition", "price": "5.92", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "The Bard's Tale ARPG : Remastered and Resnarkled", "price": "0.2", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "The Bard's Tale IV: Director's Cut", "price": "1.04", "flag": "🇳🇬", "date": "17.07", "status": " GP" },
  { "name": "The Bard's Tale Trilogy", "price": "0.19", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "The Callisto Protocol™ for Xbox One – Digital Deluxe Edition", "price": "17.53", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "The Callisto Protocol™ for Xbox Series X|S – Digital Delu...", "price": "20.55", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "The Crew® 2", "price": "2.54", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "The Crew™ Motorfest Standard Edition - Cross-Gen Bundle", "price": "17.53", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "The Crew™ Motorfest Standard Edition", "price": "15.71", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "The Dark Pictures Anthology House of Ashes", "price": "1.39", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "The Dark Pictures Anthology: The Devil in Me", "price": "3.86", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "The Division 2 - Warlords of New York Edition", "price": "7.56", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "The Elder Scrolls III: Morrowind", "price": "1.18", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "The Elder Scrolls Online Collection: Gold Road", "price": "31.43", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Elder Scrolls Online Deluxe Collection: Gold Road", "price": "42.31", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Elder Scrolls V: Skyrim Anniversary Edition", "price": "11.6", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "The Escapists + The Escapists 2", "price": "0.75", "flag": "🇹🇷", "date": "18.07", "status": " GP" },
  { "name": "The Escapists: Supermax Edition", "price": "0.46", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "The Evil Within Digital Bundle", "price": "2.45", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Expanse: A Telltale Series - Deluxe Edition", "price": "1.93", "flag": "🇹🇷", "date": "23.07", "status": " GP" },
  { "name": "The Expanse: A Telltale Series", "price": "1.61", "flag": "🇹🇷", "date": "23.07", "status": " GP" },
  { "name": "The Fall Bundle", "price": "2.04", "flag": "🇧🇷", "date": "23.07", "status": " GP" },
  { "name": "The Fisherman - Fishing Planet", "price": "0.34", "flag": "🇹🇷", "date": "18.07", "status": " GP" },
  { "name": "The Inner World - The Last Wind Monk", "price": "0.17", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "The Jackbox Party Quadpack", "price": "6.46", "flag": "🇹🇷", "date": "31.12", "status": "" },
  { "name": "The Journey Down Trilogy", "price": "0.64", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "The Journey Down: Chapter One", "price": "0.3", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "The Journey Down: Chapter Three", "price": "0.64", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "The Journey Down: Chapter Two", "price": "0.64", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "The Knight Witch", "price": "0.91", "flag": "🇳🇬", "date": "18.07", "status": " GP" },
  { "name": "The Lamplighters League - Deluxe Edition", "price": "3.75", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "The Last Oricru", "price": "3.25", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "The Lord of the Rings: Gollum™", "price": "4.22", "flag": "🇹🇷", "date": "17.07", "status": "" },
  { "name": "The Making of Karateka", "price": "1.36", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "The Outer Worlds: Board-Approved Bundle", "price": "13.03", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Outer Worlds: Spacer's Choice Edition", "price": "7.8", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "The Quarry - Deluxe Edition", "price": "19.08", "flag": "🇹🇷", "date": "16.12", "status": " GP" },
  { "name": "The Quarry for Xbox One", "price": "4.53", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "The Quarry for Xbox Series X|S", "price": "5.28", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "The Settlers®: New Allies", "price": "9.97", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "The Sisters 2 - Road to Fame", "price": "14.31", "flag": "🇮🇳", "date": "17.07", "status": " GP" },
  { "name": "The Star Named EOS", "price": "1.16", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "The Surge 2 - Premium Edition", "price": "1.96", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "The Surge", "price": "0.54", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "The Survivalists - Deluxe Edition", "price": "0.6", "flag": "🇹🇷", "date": "18.07", "status": " GP" },
  { "name": "The Walking Dead: A New Frontier", "price": "1.03", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "The Walking Dead: Michonne", "price": "0.34", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "The Wanderer: Frankenstein's Creature", "price": "0.38", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "They Are Billions", "price": "0.9", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Think of the Children", "price": "0.2", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "This War of Mine - Complete Edition", "price": "1.84", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Tiny Tina's Wonderlands: Chaotic Great Edition", "price": "4.83", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Gold Edition", "price": "4.84", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Tom Clancy's Rainbow Six® Extraction United Bundle", "price": "14.51", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Ultimate Edition", "price": "12.79", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Year 2 Gold Edition", "price": "2.42", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Tom Clancy’s Rainbow Six Siege Operator Edition", "price": "17.68", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Tom Clancy’s Rainbow Six Siege Ultimate Edition", "price": "38.68", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Tomb Raider: Definitive Survivor Trilogy", "price": "9.2", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Tony Hawk's™ Pro Skater™ 1 + 2 - Cross-Gen Deluxe Bundle", "price": "3.87", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Tony Hawk's™ Pro Skater™ 1 + 2", "price": "3.38", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "TopSpin 2K25 Grand Slam® Edition Pre-Order", "price": "72.51", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Torment: Tides of Numenera", "price": "0.75", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Totally Reliable Delivery Service Deluxe Edition", "price": "0.62", "flag": "🇳🇬", "date": "18.07", "status": "" },
  { "name": "Totally Reliable Delivery Service", "price": "0.26", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Trailmakers - Space Upgrade", "price": "2.27", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers Deluxe Edition", "price": "3.07", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers: Rescue Bundle", "price": "2.6", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers: Rescue Deluxe Bundle", "price": "3.29", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Train Life - Orient-Express Train Edition", "price": "0.86", "flag": "🇹🇷", "date": "17.07", "status": "" },
  { "name": "Train Life: A Railway Simulator", "price": "0.77", "flag": "🇹🇷", "date": "18.07", "status": " GP" },
  { "name": "Train Sim World® 4: Austrian Regional Edition", "price": "3.96", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Train Sim World® 4: Deluxe Edition", "price": "6.67", "flag": "🇪🇬", "date": "01.08", "status": " GP" },
  { "name": "Train Sim World® 4: Flying Scotsman Centenary Edition", "price": "6.67", "flag": "🇪🇬", "date": "01.08", "status": " GP" },
  { "name": "Train Sim World® 4: German Regional Edition", "price": "3.96", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Train Sim World® 4: Special Edition", "price": "12.58", "flag": "🇪🇬", "date": "01.08", "status": " GP" },
  { "name": "Train Sim World® 4: UK Regional Edition", "price": "3.96", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Train Sim World® 4: USA Regional Edition", "price": "3.96", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Train Valley 2 - Community Edition", "price": "1.08", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Train Valley Collection", "price": "0.64", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Train Valley: Console Edition", "price": "0.51", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Transport Fever 2: Console Edition", "price": "8.76", "flag": "🇹🇷", "date": "17.07", "status": "" },
  { "name": "True Colours - A Date With Deception", "price": "7.17", "flag": "🇮🇳", "date": "25.07", "status": "" },
  { "name": "Trulon: The Shadow Engine", "price": "0.15", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "Turbo Golf Racing: Deep Space Bundle", "price": "1.09", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Turbo Golf Racing: Ultimate Bundle", "price": "1.3", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Turn-Based Battle Bundle: The Amazing American Circus & Legend of Keepers", "price": "3.81", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "Turnip Boy Robs a Bank Pre-Release", "price": "1.03", "flag": "🇹🇷", "date": "15.07", "status": " GP" },
  { "name": "Turok 2: Seeds of Evil", "price": "0.61", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Turok 3: Shadow of Oblivion Remastered", "price": "1.8", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Turok Trilogy Bundle", "price": "2.06", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Turok", "price": "0.44", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "UFC® 5 Standard Edition", "price": "32.29", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "UNO®", "price": "0.42", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "1.24", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Vagante", "price": "0.3", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Velocity Noodle", "price": "0.58", "flag": "🇳🇬", "date": "23.07", "status": "" },
  { "name": "Venus: Improbable Dream", "price": "2.3", "flag": "🇮🇳", "date": "23.07", "status": " GP" },
  { "name": "Vermintide - Digital Value Pack", "price": "2.66", "flag": "🇹🇷", "date": "07.03", "status": "" },
  { "name": "Volgarr the Viking I & II Bundle", "price": "1.72", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Volgarr the Viking II", "price": "1.36", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "WARRIORS OROCHI 4 Ultimate Deluxe Edition", "price": "27.18", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "WARRIORS OROCHI 4 Ultimate", "price": "23.55", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "WRC 10 Deluxe Edition Xbox One & Xbox Series X|S", "price": "2.64", "flag": "🇹🇷", "date": "18.07", "status": " GP" },
  { "name": "WRC 9 Deluxe Edition FIA World Rally Championship", "price": "0.85", "flag": "🇹🇷", "date": "18.07", "status": " GP" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "9.52", "flag": "🇹🇷", "date": "30.08", "status": "" },
  { "name": "WRC Generations - The FIA WRC Official Game", "price": "5.82", "flag": "🇹🇷", "date": "17.07", "status": "" },
  { "name": "WWE 2K24 Forty Years of WrestleMania Edition", "price": "59.82", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "War Hospital", "price": "7.54", "flag": "🇹🇷", "date": "17.07", "status": "" },
  { "name": "Warhammer 40,000: Boltgun - Forges of Corruption Edition", "price": "10.7", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "Warhammer 40,000: Boltgun", "price": "7.25", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Warhammer 40,000: Darktide - Imperial Edition", "price": "9.27", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Warhammer Ultimate Pack: Hack and Slash", "price": "2.25", "flag": "🇳🇬", "date": "17.07", "status": "" },
  { "name": "Wasteland 2: Director's Cut", "price": "0.38", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Wasteland 3 (PC) Colorado Collection", "price": "6.49", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Wasteland 3 Colorado Collection", "price": "10.61", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Wasteland 3", "price": "1.95", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Wasteland Remastered", "price": "0.19", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Watch Dogs 1 + Watch Dogs 2 Gold Editions Bundle", "price": "12.39", "flag": "🇧🇷", "date": "17.07", "status": " GP" },
  { "name": "Watch Dogs®: Legion", "price": "2.72", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "We Happy Few Digital Deluxe", "price": "2.4", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "We Happy Few", "price": "1.87", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Weedcraft Inc & Big Pharm Pharmacy Tycoon Bundle", "price": "4.62", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "Welcome to ParadiZe", "price": "9.05", "flag": "🇹🇷", "date": "17.07", "status": "" },
  { "name": "Wheel Of Fortune®", "price": "2.5", "flag": "🇧🇷", "date": "17.07", "status": " GP" },
  { "name": "Wild Bastards", "price": "14.17", "flag": "🇺🇦", "date": "12.09", "status": "" },
  { "name": "Wild Pinball Bundle", "price": "0.3", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "Wildshade: Unicorn Champions", "price": "4.52", "flag": "🇹🇷", "date": "18.07", "status": " GP" },
  { "name": "Windbound", "price": "0.5", "flag": "🇹🇷", "date": "23.07", "status": " GP" },
  { "name": "Wired Italian Adventure Bundle", "price": "2.06", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Wizardry: Proving Grounds of the Mad Overlord", "price": "2.58", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "Wo Long: Fallen Dynasty Complete Edition", "price": "24.36", "flag": "🇺🇦", "date": "17.07", "status": " GP" },
  { "name": "Wolfenstein: Alt History Collection", "price": "12.09", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Wolfenstein: Youngblood Deluxe Edition", "price": "5.29", "flag": "🇹🇷", "date": "17.02", "status": " GP" },
  { "name": "Wolfenstein® II: The New Colossus™ Digital Deluxe Edition", "price": "7.25", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "Wolfenstein®: The Two-Pack", "price": "3.84", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "Word Sudoku by POWGI", "price": "0.34", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "Word Wheel by POWGI", "price": "0.34", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "World Cruise Story", "price": "0.92", "flag": "🇹🇷", "date": "18.07", "status": "" },
  { "name": "World War Z: Aftermath - Deluxe Edition", "price": "15.71", "flag": "🇹🇷", "date": "01.12", "status": " GP" },
  { "name": "Worms Battlegrounds", "price": "0.53", "flag": "🇹🇷", "date": "18.07", "status": " GP" },
  { "name": "Worms Rumble - Digital Deluxe Edition", "price": "0.57", "flag": "🇳🇬", "date": "18.07", "status": " GP" },
  { "name": "Wreckfest Complete Edition", "price": "20.18", "flag": "🇧🇷", "date": "16.11", "status": " GP" },
  { "name": "XCOM® 2 Collection", "price": "0.96", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Yakuza: Like a Dragon Hero Edition", "price": "11.1", "flag": "🇯🇵", "date": "01.04", "status": " GP" },
  { "name": "Yakuza: Like a Dragon Legendary Hero Edition", "price": "14.98", "flag": "🇯🇵", "date": "01.04", "status": " GP" },
  { "name": "Yars: Recharged", "price": "0.5", "flag": "🇳🇬", "date": "18.07", "status": "" },
  { "name": "Yum Yum Cookstar", "price": "1.76", "flag": "🇧🇷", "date": "18.07", "status": "" },
  { "name": "ZERO GUNNER 2-", "price": "1.04", "flag": "🇳🇬", "date": "23.07", "status": "" },
  { "name": "Zoo Tycoon", "price": "1.1", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "Zoo Tycoon: Ultimate Animal Collection", "price": "1.3", "flag": "🇳🇬", "date": "17.07", "status": " GP" },
  { "name": "[PROTOTYPE®]", "price": "0.9", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "qomp2", "price": "1.98", "flag": "🇳🇬", "date": "18.07", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Greenhorn Bundle", "price": "2.75", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "theHunter: Call of the Wild™ - Master Hunter Bundle", "price": "2.31", "flag": "🇹🇷", "date": "17.07", "status": " GP" },
  { "name": "theHunter: Call of the Wild™ - Seasoned Hunter Bundle", "price": "3.41", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "ドラゴンボール ファイターズ レジェンダリーエディション (Xbox Series X|S & Xbox One)", "price": "33.46", "flag": "🇯🇵", "date": "17.07", "status": " GP" },
  { "name": "ドラゴンボールZ KAKAROT デラックススペシャルエディション", "price": "43.7", "flag": "🇯🇵", "date": "17.07", "status": " GP" },
  { "name": "僕のヒーローアカデミア One 's Justice2 デラックスエディション", "price": "29.97", "flag": "🇯🇵", "date": "17.07", "status": " GP" }
]

let usd = 102;

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



