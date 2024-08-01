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
  { "name": "1000 Ancient Coins - Hidden Trove of the Ancients", "price": "1.64", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "150 Ancient Coins - Secret Stash of the Ancients", "price": "0.33", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "2 Synchro Hedgehogs (for Windows 10)", "price": "0.21", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "2550 Ancient Coins - Royal Treasury of the Ancients", "price": "3.78", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "4250 Ancient Coins - Glittering Tribute of the Ancients", "price": "5.72", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "550 Ancient Coins - Lost Chest of the Ancients", "price": "0.98", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "9th Dawn III", "price": "4.7", "flag": "🇺🇦", "date": "13.08", "status": " GP" },
  { "name": "AEW: Fight Forever - Ultimate Edition", "price": "36.04", "flag": "🇨🇱", "date": "15.08", "status": "" },
  { "name": "ANNO : Mutationem", "price": "1.24", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "ASTRONEER: Evolution Edition", "price": "2.74", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "AVATAR: FRONTIERS OF PANDORA™", "price": "21.86", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Abathor", "price": "1.15", "flag": "🇹🇷", "date": "09.08", "status": "" },
  { "name": "Aborigenus", "price": "0.08", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Ad Infinitum - Nightmare Edition Pre-order", "price": "7.83", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Aeon Must Die!", "price": "1.43", "flag": "🇹🇷", "date": "06.08", "status": " GP" },
  { "name": "Aery - Path of Corruption", "price": "0.52", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Aery - Time Traveller Bundle", "price": "3.19", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Afterimage", "price": "2.44", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Age of Empires 25th Anniversary Collection", "price": "8.2", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Age of Empires: Definitive Collection", "price": "5.66", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Agent Walker: Secret Journey (Xbox Version)", "price": "3.59", "flag": "🇹🇷", "date": "04.08", "status": "" },
  { "name": "Ages of Mages: the last keeper", "price": "0.51", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Airborne Bundle", "price": "2.74", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Aircraft Carrier Survival", "price": "0.85", "flag": "🇹🇷", "date": "06.08", "status": " GP" },
  { "name": "Airhead", "price": "7.24", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Airstrip DLC and Can Touch This DLC Bundle", "price": "0.68", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Alina of the Arena", "price": "1.03", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Alone in the Dark - Digital Deluxe Edition", "price": "33.64", "flag": "🇮🇳", "date": "15.08", "status": "" },
  { "name": "America’s Greatest Game Shows: Wheel of Fortune® & Jeopar...", "price": "3.31", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "Anno 1800™ Console Edition - Deluxe", "price": "6.94", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Anno 1800™ Console Edition", "price": "5.43", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Arcade Paradise | High Score Edition", "price": "1.9", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Ary and the Secret of Seasons", "price": "0.54", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Assassin's Creed Antiquity Pack", "price": "46.66", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "Assassin's Creed Chronicles – Trilogy", "price": "0.63", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Assassin's Creed IV Black Flag", "price": "0.65", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Assassin's Creed Legendary Collection", "price": "84.83", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "Assassin's Creed Triple Pack: Black Flag, Unity, Syndicate", "price": "2.13", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Assassin's Creed Unity", "price": "1.27", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Assassin's Creed® Chronicles: China", "price": "0.32", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Assassin's Creed® Chronicles: India", "price": "0.36", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Assassin's Creed® Chronicles: Russia", "price": "0.36", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Assassin's Creed® III Remastered", "price": "1.77", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Assassin's Creed® Odyssey - DELUXE EDITION", "price": "16.89", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Assassin's Creed® Odyssey - GOLD EDITION", "price": "4.83", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Assassin's Creed® Odyssey - ULTIMATE EDITION", "price": "22.32", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Assassin's Creed® Origins - DELUXE EDITION", "price": "16.29", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Assassin's Creed® Origins - GOLD EDITION", "price": "19.3", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Assassin's Creed® Rogue", "price": "0.44", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Assassin's Creed® Syndicate Gold Edition", "price": "1.58", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Assassin's Creed® The Ezio Collection", "price": "1.9", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Assassin's Creed® Valhalla Complete Edition", "price": "24.13", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Assassin's Creed® Valhalla", "price": "4.52", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Assassin’s Creed Mirage & Assassin's Creed Valhalla Bundle", "price": "13.72", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Assassin’s Creed® Mirage Deluxe Edition", "price": "15.08", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Assassin’s Creed® Mirage", "price": "13.57", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Assassin’s Creed® Rogue Remastered", "price": "1.27", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Assassin’s Creed® Valhalla + Immortals Fenyx Rising™ Bundle", "price": "60.32", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Assassin’s Creed® Valhalla + Watch Dogs®: Legion Bundle", "price": "6.94", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Astalon: Tears of the Earth", "price": "0.85", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Atomic Heart - Premium Edition", "price": "45.84", "flag": "🇹🇷", "date": "16.08", "status": " GP" },
  { "name": "Avatar: Frontiers of Pandora™ Gold Edition", "price": "28.65", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Aven Colony", "price": "1.5", "flag": "🇹🇷", "date": "08.08", "status": "" },
  { "name": "Awarded Platformer Bundle", "price": "1.2", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "BATTLESHIP®", "price": "0.46", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "BATTLETECH Mercenary Collection", "price": "6.15", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "BQM - BlockQuest Maker: Remastered", "price": "0.43", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "BROKEN MIND", "price": "0.51", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Baja: Edge of Control HD", "price": "0.58", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Barn Finders", "price": "2.53", "flag": "🇹🇷", "date": "06.08", "status": " GP" },
  { "name": "Bat Boy", "price": "1.08", "flag": "🇳🇬", "date": "06.08", "status": "" },
  { "name": "Battle Brothers - Complete Edition", "price": "3.58", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Battle Brothers", "price": "1.4", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Battle Chasers: Nightwar", "price": "2.61", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "Battle Worlds: Kronos", "price": "2.31", "flag": "🇿🇦", "date": "15.08", "status": "" },
  { "name": "Bear With Me: The Complete Collection", "price": "0.19", "flag": "🇳🇬", "date": "13.08", "status": " GP" },
  { "name": "Beastie Bay DX", "price": "0.92", "flag": "🇹🇷", "date": "16.08", "status": "" },
  { "name": "Beyond Good & Evil 20th Anniversary Edition", "price": "12.06", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Big Moonstone Pack -- 5,500", "price": "4.94", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Bio Inc. Redemption + Crossroads Inn - Doctors and Bartenders Bundle", "price": "8.82", "flag": "🇹🇷", "date": "06.08", "status": " GP" },
  { "name": "BioShock 2 Remastered", "price": "0.86", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "BioShock Infinite: The Complete Edition", "price": "1.38", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "BioShock Remastered", "price": "1.38", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Biomutant", "price": "9.44", "flag": "🇨🇱", "date": "15.08", "status": "" },
  { "name": "Black Mirror", "price": "0.75", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Blasphemous + Blasphemous 2 Bundle", "price": "7.0", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Blood Knights", "price": "0.57", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Boggle", "price": "0.33", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Bug Fables: The Everlasting Sapling", "price": "1.07", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Builder Flipper bundle", "price": "2.9", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Bundle 2 Games My Night Sun Games", "price": "0.56", "flag": "🇳🇬", "date": "06.08", "status": "" },
  { "name": "Bundle: South Park™ : The Stick of Truth™ + The Fractured...", "price": "8.75", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Bush Hockey League", "price": "0.54", "flag": "🇹🇷", "date": "06.08", "status": " GP" },
  { "name": "CYGNI: All Guns Blazing", "price": "14.79", "flag": "🇨🇱", "date": "05.08", "status": "" },
  { "name": "Call of Duty®: Modern Warfare® III - Vault Edition", "price": "59.24", "flag": "🇧🇷", "date": "07.08", "status": "" },
  { "name": "Call of the Wild: The Angler™ - Gold Fishing Bundle", "price": "3.41", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "Call of the Wild: The Angler™ - Silver Fishing Bundle", "price": "2.74", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "Car Vouchers (10)", "price": "1.2", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Car Vouchers (24)", "price": "2.41", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Car Vouchers (4)", "price": "0.6", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Carmageddon: Max Damage", "price": "0.44", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Cassette Beasts: Deluxe Edition", "price": "1.78", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Caterpillar (Windows 10)", "price": "0.21", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Cat’s Request (Xbox Series X|S)", "price": "0.69", "flag": "🇹🇷", "date": "13.08", "status": "" },
  { "name": "Cat’s Request", "price": "0.69", "flag": "🇹🇷", "date": "13.08", "status": "" },
  { "name": "Chicken Police - Paint it RED!", "price": "0.59", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Child of Light", "price": "0.35", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Chivalry 2 King's Edition", "price": "4.1", "flag": "🇹🇷", "date": "01.10", "status": " GP" },
  { "name": "Chivalry 2 Special Edition", "price": "3.41", "flag": "🇹🇷", "date": "01.10", "status": " GP" },
  { "name": "Chivalry 2", "price": "1.13", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Choo-Choo Charles", "price": "1.19", "flag": "🇹🇷", "date": "04.08", "status": "" },
  { "name": "Chronos: Before the Ashes", "price": "3.09", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "Circus of TimTim", "price": "0.69", "flag": "🇹🇷", "date": "10.08", "status": "" },
  { "name": "Cities: Skylines - Mayor's Edition", "price": "8.14", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "Cities: Skylines - Premium Edition 2", "price": "4.76", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "Clash - Zeno Edition", "price": "8.05", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Colt Canyon", "price": "0.26", "flag": "🇹🇷", "date": "06.08", "status": " GP" },
  { "name": "Comic Book Legends", "price": "8.57", "flag": "🇮🇳", "date": "06.08", "status": " GP" },
  { "name": "Conan Exiles - Complete Edition October 2021", "price": "10.86", "flag": "🇹🇷", "date": "16.08", "status": " GP" },
  { "name": "Conan Exiles - Isle of Siptah Edition", "price": "4.83", "flag": "🇹🇷", "date": "16.08", "status": " GP" },
  { "name": "Conan Exiles - Isle of Siptah Edition", "price": "40.58", "flag": "🇯🇵", "date": "16.08", "status": " GP" },
  { "name": "Conan Exiles – Complete Edition", "price": "77.03", "flag": "🇲🇽", "date": "16.08", "status": " GP" },
  { "name": "Conga Master", "price": "0.08", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "CounterAttack", "price": "0.63", "flag": "🇳🇬", "date": "06.08", "status": " GP" },
  { "name": "Cris Tales", "price": "0.86", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Crown Trick", "price": "0.63", "flag": "🇳🇬", "date": "08.08", "status": "" },
  { "name": "Crown Wars: The Black Prince", "price": "18.98", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Crusader Kings III: Royal Edition", "price": "5.13", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "CrushBorgs (for Windows 10)", "price": "0.21", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "CrushBorgs", "price": "0.21", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Curved Space", "price": "0.17", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "DAS WIRED-HORROR-SPIELPAKET", "price": "2.74", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "DCL-The Game", "price": "1.26", "flag": "🇳🇬", "date": "15.08", "status": "" },
  { "name": "DEAD ISLAND 2 DELUXE EDITION", "price": "18.07", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "DOOM Eternal Deluxe Edition", "price": "14.48", "flag": "🇹🇷", "date": "07.08", "status": " GP" },
  { "name": "DOOM Eternal: The Ancient Gods - Part One", "price": "5.12", "flag": "🇹🇷", "date": "07.08", "status": " GP" },
  { "name": "DOOM Eternal: The Ancient Gods - Part Two", "price": "5.12", "flag": "🇹🇷", "date": "07.08", "status": " GP" },
  { "name": "DOOM Eternal: Year One Pass (PC)", "price": "7.74", "flag": "🇹🇷", "date": "07.08", "status": " GP" },
  { "name": "DOOM Eternal: Year One Pass", "price": "7.74", "flag": "🇹🇷", "date": "07.08", "status": " GP" },
  { "name": "DRAGON BALL Z: KAKAROT Deluxe Edition", "price": "8.14", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Dark Quest 3", "price": "0.64", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Darkest Dungeon®: Ancestral Edition", "price": "2.05", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Darksiders Fury's Collection - War and Death", "price": "3.49", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "Darksiders Genesis", "price": "7.61", "flag": "🇮🇳", "date": "15.08", "status": "" },
  { "name": "Darksiders II Deathinitive Edition", "price": "2.61", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "Darksiders III - Blades & Whip Edition", "price": "7.95", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "Darksiders Warmastered Edition", "price": "1.72", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "Dead Cells: Return to Castlevania Bundle", "price": "2.14", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Dead Dungeon for Windows 10", "price": "0.08", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Dead Island 2", "price": "10.54", "flag": "🇹🇷", "date": "06.08", "status": " GP" },
  { "name": "Dead Island Definitive Edition", "price": "0.26", "flag": "🇹🇷", "date": "06.08", "status": " GP" },
  { "name": "Dead by Daylight - Gold Edition", "price": "8.79", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Dead by Daylight: Dungeons & Dragons Edition", "price": "6.32", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Death Noodle Delivery", "price": "0.34", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Death or Treat", "price": "0.93", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Deceive Inc.", "price": "0.68", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Deep Rock Galactic - Deluxe Edition", "price": "2.74", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "Deep Rock Galactic - Ultimate Edition", "price": "3.41", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "Deflector", "price": "0.69", "flag": "🇹🇷", "date": "06.08", "status": " GP" },
  { "name": "Desperados III Deluxe Edition", "price": "10.74", "flag": "🇮🇳", "date": "15.08", "status": "" },
  { "name": "Destroy All Humans! - Jumbo Pack", "price": "20.06", "flag": "🇮🇳", "date": "15.08", "status": "" },
  { "name": "Destroy All Humans! 2 - Reprobed: Dressed to Skill Edition", "price": "17.19", "flag": "🇮🇳", "date": "15.08", "status": "" },
  { "name": "Destroy All Humans!", "price": "7.61", "flag": "🇮🇳", "date": "15.08", "status": "" },
  { "name": "Deus Ex: Mankind Divided™", "price": "2.48", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Disciples: Liberation Digital Deluxe Edition", "price": "2.31", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Discovery Tour: Viking Age", "price": "3.42", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Disney Dreamlight Valley – Gold Edition", "price": "8.79", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Disney Dreamlight Valley: A Rift in Time", "price": "3.79", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Dolby Atmos for Headphones", "price": "0.96", "flag": "🇹🇷", "date": "11.09", "status": "" },
  { "name": "Don't Be Afraid", "price": "0.51", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Double Dragon Gaiden: Rise of the Dragons", "price": "6.56", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Dr. Atominus (for Windows 10)", "price": "0.17", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Dr. Atominus", "price": "0.17", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Dr. Fetus' Mean Meat Machine", "price": "0.26", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Dungeon Defenders: Awakened", "price": "1.28", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Dungeon and Gravestone", "price": "0.43", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Dungeons 3", "price": "1.03", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Dungeons 4 - Digital Deluxe Edition", "price": "24.13", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "EA SPORTS FC™ 24 Standard Edition Xbox One & Xbox Series X|S", "price": "16.12", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "EA SPORTS FC™ 25 Ultimate Edition Xbox One & Xbox Series X|S", "price": "76.36", "flag": "🇰🇷", "date": "21.08", "status": "" },
  { "name": "EA SPORTS™ Madden NFL 25 Deluxe Edition Xbox Series X|S & Xbox One + Limited Time Bonus", "price": "76.36", "flag": "🇰🇷", "date": "02.08", "status": "" },
  { "name": "ELEX II", "price": "14.62", "flag": "🇮🇳", "date": "15.08", "status": "" },
  { "name": "Eden Genesis", "price": "14.05", "flag": "🇺🇦", "date": "06.08", "status": "" },
  { "name": "Elderand", "price": "1.01", "flag": "🇳🇬", "date": "06.08", "status": " GP" },
  { "name": "Elex", "price": "3.01", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Ember: Console Edition", "price": "0.5", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Embr", "price": "0.34", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Enchanted Portals", "price": "0.93", "flag": "🇹🇷", "date": "06.08", "status": " GP" },
  { "name": "Escape Academy Deluxe Edition", "price": "2.38", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Escape Dead Island", "price": "0.23", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Escape Sequence (for Windows 10)", "price": "0.13", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Escape Sequence", "price": "0.13", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Exhausted Man and Candleman Bundle", "price": "7.55", "flag": "🇺🇦", "date": "01.08", "status": "" },
  { "name": "ExhaustedMan", "price": "4.88", "flag": "🇺🇦", "date": "01.08", "status": "" },
  { "name": "Exodus: Creepy Time (Windows)", "price": "0.34", "flag": "🇹🇷", "date": "09.08", "status": "" },
  { "name": "Exodus: Creepy Time (Xbox One)", "price": "0.34", "flag": "🇹🇷", "date": "09.08", "status": "" },
  { "name": "Exodus: Creepy Time", "price": "0.34", "flag": "🇹🇷", "date": "09.08", "status": "" },
  { "name": "Expeditions: A MudRunner Game - Year 1 Edition", "price": "35.82", "flag": "🇮🇳", "date": "06.08", "status": " GP" },
  { "name": "F1® 23", "price": "37.61", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "F1® Manager 2023 Deluxe Edition", "price": "13.27", "flag": "🇹🇷", "date": "16.10", "status": " GP" },
  { "name": "FAR CRY 4 + FAR CRY PRIMAL BUNDLE", "price": "1.32", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "FAR CRY 4 GOLD EDITION", "price": "1.32", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "FAR CRY ANTHOLOGY BUNDLE", "price": "12.06", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "FOR HONOR – Ultimate Edition", "price": "38.6", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "FOR HONOR", "price": "2.37", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Fabledom", "price": "2.5", "flag": "🇳🇬", "date": "12.09", "status": "" },
  { "name": "Fade to Silence", "price": "2.54", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "Fallout 76: Skyline Valley Deluxe Edition", "price": "24.13", "flag": "🇹🇷", "date": "07.08", "status": " GP" },
  { "name": "Family Feud®", "price": "6.25", "flag": "🇳🇿", "date": "15.08", "status": "" },
  { "name": "Far Cry Classic", "price": "0.23", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Far Cry Primal", "price": "1.06", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Far Cry® 3 Blood Dragon Classic Edition", "price": "2.21", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Far Cry® 3 Classic Edition", "price": "0.91", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Far Cry® 4", "price": "0.84", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Far Cry® 5 + Far Cry® New Dawn Deluxe Edition Bundle", "price": "19.35", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Far Cry® 5 Gold Edition + Far Cry ® New Dawn Deluxe Editi...", "price": "22.2", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Far Cry® 5", "price": "2.71", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Far Cry® 6 Deluxe Edition", "price": "18.7", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Far Cry® 6 Game of the Year Edition", "price": "22.92", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Far Cry® 6 Gold Edition", "price": "19.3", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Far Cry® New Dawn Deluxe Edition", "price": "1.89", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Farm Bundle", "price": "2.74", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Farm Pets Bundle", "price": "4.1", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Farming Simulator 22 - Platinum Edition", "price": "5.06", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Farming Simulator 22 - Premium Edition", "price": "6.32", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Fighter Within", "price": "0.41", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Flailing Limbs Bundle", "price": "1.42", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Flockers", "price": "0.57", "flag": "🇹🇷", "date": "08.08", "status": "" },
  { "name": "Flooded", "price": "0.55", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Fobia - St. Dinfna Hotel", "price": "0.77", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Food Truck Tycoon", "price": "0.42", "flag": "🇳🇬", "date": "06.08", "status": "" },
  { "name": "For The King", "price": "0.32", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Forest Camp Story", "price": "0.92", "flag": "🇹🇷", "date": "16.08", "status": "" },
  { "name": "Forza Horizon 5 PLUS Hot Wheels Bundle", "price": "10.05", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Frogurai", "price": "2.57", "flag": "🇮🇳", "date": "03.08", "status": "" },
  { "name": "From Space Resistance Bundle", "price": "2.53", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Frostpunk: Complete Collection", "price": "3.08", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "Full Spectrum Warrior", "price": "0.29", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Fusion Bundle", "price": "2.08", "flag": "🇳🇬", "date": "06.08", "status": "" },
  { "name": "GROW UP", "price": "0.42", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Garden Bundle", "price": "3.63", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Gas Station Simulator", "price": "2.72", "flag": "🇹🇷", "date": "06.08", "status": " GP" },
  { "name": "Gears of War 4 and Halo 5: Guardians Bundle", "price": "2.41", "flag": "🇹🇷", "date": "31.01", "status": " GP" },
  { "name": "Generation Zero ® - Silver Bundle", "price": "3.41", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Generation Zero® - Gold Bundle", "price": "4.1", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Genesis Alpha One", "price": "1.03", "flag": "🇹🇷", "date": "08.08", "status": "" },
  { "name": "Ghostlore (Game Preview)", "price": "1.27", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Ghostwire: Tokyo Deluxe Edition", "price": "18.7", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Gift (Xbox Series X|S Edition)", "price": "1.88", "flag": "🇳🇬", "date": "06.08", "status": " GP" },
  { "name": "Gigapocalypse", "price": "0.17", "flag": "🇹🇷", "date": "06.08", "status": " GP" },
  { "name": "Gnomes Garden 2", "price": "0.3", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Gnomes Garden 3 in 1 Bundle", "price": "0.51", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Gnomes Garden", "price": "0.3", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Goat Simulator 3 - Multiversal Traveler's Edition", "price": "2.74", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Going Under", "price": "0.63", "flag": "🇳🇬", "date": "08.08", "status": "" },
  { "name": "Golf With Your Friends - Starter Edition", "price": "17.67", "flag": "🇰🇷", "date": "08.08", "status": "" },
  { "name": "Grand Theft Auto Online", "price": "3.3", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Grand Theft Auto V (Xbox One & Xbox Series X|S)", "price": "5.96", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Grand Theft Auto V: Premium Edition & Great White Shark C...", "price": "2.71", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Grand Theft Auto V: Premium Edition & Megalodon Shark Car...", "price": "4.55", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Grand Theft Auto V: Premium Edition & Whale Shark Card Bu...", "price": "3.14", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Guilty Gear -Strive- Blazing Edition", "price": "10.78", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "HITMAN™ 2", "price": "7.44", "flag": "🇹🇷", "date": "04.02", "status": "" },
  { "name": "HUMANKIND™ - Heritage Edition", "price": "7.52", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Halo 5: Guardians – Digital Deluxe Edition", "price": "19.9", "flag": "🇹🇷", "date": "31.05", "status": " GP" },
  { "name": "Hammerwatch II", "price": "6.73", "flag": "🇺🇦", "date": "13.08", "status": " GP" },
  { "name": "Hammerwatch II: The Chronicles Edition", "price": "10.58", "flag": "🇺🇦", "date": "13.08", "status": " GP" },
  { "name": "Hand of Fate 2", "price": "0.91", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Hardcore Platform Bundle", "price": "1.19", "flag": "🇳🇬", "date": "06.08", "status": "" },
  { "name": "Hasbro Family Fun Pack - Super Edition", "price": "2.04", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Hasbro Family Fun Pack", "price": "8.67", "flag": "🇨🇦", "date": "15.08", "status": "" },
  { "name": "Hell Let Loose - Fan Favourites Bundle", "price": "2.69", "flag": "🇸🇦", "date": "13.08", "status": "" },
  { "name": "Hell Let Loose - German Bundle", "price": "1.7", "flag": "🇸🇦", "date": "13.08", "status": "" },
  { "name": "Hell Let Loose - Headgear Bundle", "price": "1.7", "flag": "🇸🇦", "date": "13.08", "status": "" },
  { "name": "Hell Let Loose - Soviet Bundle", "price": "1.7", "flag": "🇸🇦", "date": "13.08", "status": "" },
  { "name": "Hell Let Loose - The Eagle and Pegasus Combo Pack", "price": "0.76", "flag": "🇳🇬", "date": "13.08", "status": "" },
  { "name": "Hell Let Loose - U.S Bundle", "price": "1.7", "flag": "🇸🇦", "date": "13.08", "status": "" },
  { "name": "Hell Let Loose - Ultimate Edition", "price": "8.79", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hell Pie", "price": "0.64", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Hello Neighbor 2 Deluxe Edition", "price": "7.52", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hidden Cats in Rome", "price": "0.27", "flag": "🇹🇷", "date": "07.08", "status": "" },
  { "name": "Hogwarts Legacy: Digital Deluxe Edition", "price": "13.26", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Huge Moonstone Pack -- 14,500", "price": "12.58", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hungry Shark® World", "price": "0.25", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Hunting Simulator 2", "price": "1.03", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Hypnospace Outlaw & Slayers X: Terminal Aftermath: Vengance of the Slayer Bundle", "price": "2.29", "flag": "🇹 🇷", "date": "01.06", "status": " GP" },
  { "name": "I Want To Go To Mars (Xbox Series X|S)", "price": "0.34", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "I Want To Go To Mars", "price": "0.34", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "INSIDE & LIMBO Bundle", "price": "3.25", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Immortals Fenyx Rising™ Gold Edition", "price": "34.98", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Immortals Fenyx Rising™", "price": "6.03", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Immortals of Aveum™ Deluxe Edition", "price": "29.55", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "Insurgency: Sandstorm - Deluxe Edition", "price": "21.89", "flag": "🇯🇵", "date": "16.01", "status": " GP" },
  { "name": "Isonzo: Ultimate Edition", "price": "57.67", "flag": "🇯🇵", "date": "16.06", "status": " GP" },
  { "name": "JUJU", "price": "0.29", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Jagged Alliance 3", "price": "29.25", "flag": "🇮🇳", "date": "15.08", "status": "" },
  { "name": "Jeopardy!", "price": "1.72", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "Jurassic World Evolution 2: Deluxe Edition", "price": "10.17", "flag": "🇪🇬", "date": "16.05", "status": " GP" },
  { "name": "Jurassic World Evolution 2: Dominion Bundle", "price": "11.65", "flag": "🇪🇬", "date": "16.05", "status": " GP" },
  { "name": "Jurassic World Evolution: Expansion Collection", "price": "0.51", "flag": "🇹🇷", "date": "13.08", "status": "" },
  { "name": "Just Dance 2018", "price": "0.0", "flag": "🇮🇸", "date": "", "status": "" },
  { "name": "Just Dance 2024 Deluxe Edition", "price": "21.56", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Just Dance 2024 Edition", "price": "15.08", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Just Dance 2024 Ultimate Edition", "price": "26.24", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Kao the Kangaroo: Anniversary Edition", "price": "1.62", "flag": "🇳🇬", "date": "06.08", "status": " GP" },
  { "name": "Killer Frequency", "price": "1.88", "flag": "🇳🇬", "date": "13.08", "status": " GP" },
  { "name": "Killing Floor 2", "price": "0.78", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "King Arthur: Knight's Tale", "price": "11.69", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Kingdoms of Amalur: Re-Reckoning FATE Edition", "price": "8.19", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "Kraken Odyssey", "price": "0.9", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "L.A. Noire", "price": "3.02", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "LEGO® Star Wars™: The Skywalker Saga Galactic Edition", "price": "11.65", "flag": "🇪🇬", "date": "01.05", "status": " GP" },
  { "name": "LEGO® Star Wars™: The Skywalker Saga", "price": "8.78", "flag": "🇪🇬", "date": "01.05", "status": " GP" },
  { "name": "LEGRAND LEGACY: Tale of the Fatebounds", "price": "0.2", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Let's Build a Zoo & Dinosaur DLC Bundle", "price": "1.84", "flag": "🇹🇷", "date": "01.10", "status": " GP" },
  { "name": "Let's Build a Zoo: Aquarium Odyssey Bundle", "price": "1.84", "flag": "🇹🇷", "date": "01.10", "status": " GP" },
  { "name": "Let's Build a Zoo: Ultimate Bundle", "price": "2.32", "flag": "🇹🇷", "date": "01.10", "status": " GP" },
  { "name": "Light & Dark Bundle", "price": "3.61", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Like a Dragon Gaiden: The Man Who Erased His Name Deluxe Edition", "price": "29.23", "flag": "🇸🇬", "date": "16.11", "status": " GP" },
  { "name": "Like a Dragon: Ishin! Digital Deluxe Edition", "price": "26.52", "flag": "🇹🇷", "date": "16.10", "status": " GP" },
  { "name": "Limb Hunter", "price": "0.17", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Lonely Mountains: Downhill - Eldfjall Island", "price": "1.89", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "Lords of the Fallen Deluxe Edition", "price": "10.05", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Lost Ruins", "price": "0.85", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Lost Words: Beyond the Page", "price": "0.33", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Luxury Garden Bundle", "price": "4.1", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "MARS 2120", "price": "7.94", "flag": "🇧🇷", "date": "16.08", "status": "" },
  { "name": "MLB® The Show™ 24 - Xbox One Standard Edition", "price": "14.48", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "MLB® The Show™ 24 - Xbox Series X|S Standard Edition", "price": "34.98", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "MONOPOLY FAMILY FUN PACK", "price": "0.72", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "MONOPOLY PLUS + MONOPOLY Madness", "price": "4.07", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "MONOPOLY PLUS", "price": "0.42", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "MX Unleashed", "price": "0.24", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "MX vs ATV All Out", "price": "2.61", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "MX vs ATV Legends - Ultimate Edition", "price": "28.83", "flag": "🇨🇱", "date": "15.08", "status": "" },
  { "name": "MX vs ATV Legends", "price": "9.44", "flag": "🇨🇱", "date": "15.08", "status": "" },
  { "name": "MX vs. ATV Supercross Encore", "price": "0.46", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "MY HERO ONE'S JUSTICE 2 Ultimate Edition", "price": "11.3", "flag": "🇹🇷", "date": "06.08", "status": " GP" },
  { "name": "MY HERO ONE'S JUSTICE 2 Ultimate Edition", "price": "12.76", "flag": "🇰🇷", "date": "06.08", "status": " GP" },
  { "name": "MY HERO ONE'S JUSTICE 2", "price": "23.49", "flag": "🇯🇵", "date": "06.08", "status": " GP" },
  { "name": "MY HERO ONE'S JUSTICE 2", "price": "5.65", "flag": "🇹🇷", "date": "06.08", "status": " GP" },
  { "name": "MY HERO ONE’S JUSTICE", "price": "5.26", "flag": "🇹🇷", "date": "06.08", "status": " GP" },
  { "name": "Madden NFL 19", "price": "29.17", "flag": "🇨🇴", "date": "30.12", "status": "" },
  { "name": "Madden NFL 24 Xbox Series X|S & Xbox One", "price": "16.12", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "Mafia II: Definitive Edition", "price": "1.5", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Mafia III: Definitive Edition", "price": "1.5", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Magical Drop VI", "price": "1.72", "flag": "🇹🇷", "date": "06.08", "status": " GP" },
  { "name": "Maneater Apex Edition", "price": "3.41", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "Maneater", "price": "1.2", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Marvel's Midnight Suns Digital+ Edition for Xbox One", "price": "6.78", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Marvel's Midnight Suns Digital+ Edition for Xbox Series X|S", "price": "6.78", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Mass Effect™: Andromeda – Standard Recruit Edition", "price": "3.51", "flag": "🇰🇷", "date": "13.08", "status": " GP" },
  { "name": "Masters of Anima", "price": "0.27", "flag": "🇹🇷", "date": "06.08", "status": " GP" },
  { "name": "MechWarrior 5: Mercenaries - JumpShip Edition", "price": "4.84", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Metro Exodus Gold Edition", "price": "1.05", "flag": "🇹🇷", "date": "06.08", "status": " GP" },
  { "name": "Metro Redux Bundle", "price": "0.35", "flag": "🇹🇷", "date": "06.08", "status": " GP" },
  { "name": "Microsoft 365 Family", "price": "0.0", "flag": "🇺🇸", "date": "30.11", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.0", "flag": "🇺🇸", "date": "30.11", "status": "" },
  { "name": "Middle-earth™: Shadow of War™", "price": "0.81", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Midnight Collection", "price": "4.15", "flag": "🇮🇳", "date": "14.08", "status": "" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle - Windows 10", "price": "1.53", "flag": "🇹🇷", "date": "12.08", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle", "price": "1.53", "flag": "🇹🇷", "date": "27.07", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate Edition for Windows", "price": "5.83", "flag": "🇪🇬", "date": "12.08", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate Edition", "price": "5.06", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Minecraft Legends Deluxe Edition", "price": "6.32", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Minecraft: Deluxe Collection", "price": "3.79", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Monopoly Madness", "price": "1.88", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Monster Hunter Rise + Sunbreak Deluxe", "price": "33.78", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "Monster Hunter Rise Deluxe Edition", "price": "18.9", "flag": "🇪🇬", "date": "01.04", "status": " GP" },
  { "name": "Monster Jam Steel Titans 2", "price": "5.72", "flag": "🇨🇱", "date": "15.08", "status": "" },
  { "name": "Monster Jam Steel Titans Power Out Bundle", "price": "8.59", "flag": "🇨🇱", "date": "15.08", "status": "" },
  { "name": "Monster Jam Steel Titans", "price": "2.79", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "Moon Raider and Sweet Witches Bundle", "price": "0.36", "flag": "🇹🇷", "date": "06.08", "status": " GP" },
  { "name": "Moonlighter: Complete Edition", "price": "1.63", "flag": "🇹🇷", "date": "01.12", "status": " GP" },
  { "name": "Mortal Kombat 11 Ultimate + Injustice 2 Leg. Edition Bundle", "price": "20.72", "flag": "🇹🇷", "date": "16.12", "status": " GP" },
  { "name": "Mount & Blade II: Bannerlord - Digital Companion", "price": "0.63", "flag": "🇳🇬", "date": "13.08", "status": "" },
  { "name": "Mount & Blade: Warband", "price": "0.87", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Moving Out 2 - Deluxe Edition", "price": "2.49", "flag": "🇳🇬", "date": "08.08", "status": "" },
  { "name": "My Night Sun All Games", "price": "0.03", "flag": "🇨🇱", "date": "06.08", "status": "" },
  { "name": "My Time At Portia", "price": "1.5", "flag": "🇹🇷", "date": "06.08", "status": " GP" },
  { "name": "My Time at Portia Deluxe Edition", "price": "1.8", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "My Time at Sandrock Deluxe Edition", "price": "3.41", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "NBA 2K24 Baller Edition", "price": "42.2", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Necromunda: Underhive Wars - Gold Edition", "price": "3.26", "flag": "🇹🇷", "date": "06.08", "status": " GP" },
  { "name": "Neighbours back From Hell", "price": "0.61", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Neon Abyss Deluxe Edition", "price": "1.9", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "Neon Abyss", "price": "1.12", "flag": "🇹🇷", "date": "08.08", "status": "" },
  { "name": "Nickelodeon All-Star Brawl 2 Deluxe Edition", "price": "10.17", "flag": "🇪🇬", "date": "01.01", "status": " GP" },
  { "name": "Nickelodeon All-Star Brawl 2 Ultimate Edition", "price": "11.65", "flag": "🇪🇬", "date": "01.01", "status": " GP" },
  { "name": "Night in the Woods", "price": "1.0", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.21", "flag": "🇹🇷", "date": "30.05", "status": "" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "29.13", "flag": "🇮🇳", "date": "16.03", "status": " GP" },
  { "name": "Noob - The Factionless", "price": "10.38", "flag": "🇮🇳", "date": "13.08", "status": " GP" },
  { "name": "OCTOPATH TRAVELER + OCTOPATH TRAVELER II Bundle", "price": "40.96", "flag": "🇺🇦", "date": "03.09", "status": " GP" },
  { "name": "OddBallers™", "price": "1.72", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "One Button Games 5-in-1", "price": "0.3", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "One Hand Clapping", "price": "0.85", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "OneShot: World Machine Edition", "price": "0.9", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Orcs Must Die! 3 Bundle", "price": "2.74", "flag": "🇹🇷", "date": "16.04", "status": " GP" },
  { "name": "Outbreak: Dark Dimensions Collection", "price": "29.25", "flag": "🇮🇳", "date": "06.08", "status": " GP" },
  { "name": "Outbuddies DX", "price": "0.15", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Outcast - A New Beginning", "price": "33.64", "flag": "🇮🇳", "date": "15.08", "status": "" },
  { "name": "Overcooked: Gourmet Edition", "price": "0.42", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Overruled!", "price": "0.24", "flag": "🇹🇷", "date": "08.08", "status": "" },
  { "name": "PAW Patrol: Grand Prix - Complete Edition", "price": "15.68", "flag": "🇹🇷", "date": "01.10", "status": " GP" },
  { "name": "PERISH", "price": "6.03", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "PGA TOUR 2K23 Deluxe Edition", "price": "8.29", "flag": "🇹🇷", "date": "06.08", "status": " GP" },
  { "name": "Paleo Pines", "price": "8.05", "flag": "🇺🇦", "date": "13.08", "status": " GP" },
  { "name": "Panzer Elite Action: Fields of Glory", "price": "0.22", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Paper Trail", "price": "1.16", "flag": "🇹🇷", "date": "06.08", "status": " GP" },
  { "name": "Party Animals Deluxe Edition", "price": "3.79", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Penarium", "price": "0.18", "flag": "🇹🇷", "date": "08.08", "status": "" },
  { "name": "Persona 5 Tactica: Digital Deluxe Edition", "price": "43.4", "flag": "🇹🇷", "date": "16.11", "status": " GP" },
  { "name": "Pets Bundle", "price": "3.08", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Phoenix Point: Behemoth Edition", "price": "2.05", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Pinku Kult: Hex Mortis", "price": "0.41", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Pixel Heroes: Byte & Magic", "price": "0.08", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Prey®: Digital Deluxe Edition", "price": "6.88", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "Prince of Persia The Lost Crown", "price": "18.09", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Prince of Persia™: The Lost Crown Deluxe Edition", "price": "20.81", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Pumped BMX +", "price": "0.08", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Quriocity", "price": "1.36", "flag": "🇹🇷", "date": "09.08", "status": "" },
  { "name": "RABBIDS INVASION - GOLD EDITION", "price": "0.41", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "RAGE 2: Deluxe Edition", "price": "10.86", "flag": "🇹🇷", "date": "07.08", "status": " GP" },
  { "name": "RESIDENT EVIL 2 Deluxe Edition", "price": "24.13", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Rabbids Invasion : The Interactive TV Show", "price": "0.41", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Rabbids®: Party of Legends", "price": "2.64", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Rabio (Windows 10)", "price": "0.21", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Raging Justice", "price": "0.6", "flag": "🇹🇷", "date": "08.08", "status": "" },
  { "name": "Railbound", "price": "0.66", "flag": "🇹🇷", "date": "06.08", "status": " GP" },
  { "name": "Rayman Legends", "price": "0.46", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Razerwire: Nanowars", "price": "0.24", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "ReCore", "price": "2.53", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Rebel Cops", "price": "0.92", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "Red Dead Redemption 2: Ultimate Edition", "price": "3.79", "flag": "🇳🇬", "date": "13.08", "status": " GP" },
  { "name": "Regular Moonstone Pack -- 2,500", "price": "2.35", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Remnant II - Deluxe Edition", "price": "8.78", "flag": "🇪🇬", "date": "01.06", "status": " GP" },
  { "name": "Remothered: Broken Porcelain", "price": "0.4", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Repentant", "price": "0.61", "flag": "🇹🇷", "date": "06.08", "status": " GP" },
  { "name": "Retro Revengers", "price": "5.22", "flag": "🇧🇷", "date": "07.08", "status": "" },
  { "name": "Riders Republic™ 360 Edition", "price": "11.76", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Riders Republic™ Complete Edition", "price": "15.83", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Riders Republic™ Skate Edition", "price": "9.05", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Rise of the Tomb Raider: 20 Year Celebration", "price": "12.59", "flag": "🇹🇷", "date": "01.12", "status": " GP" },
  { "name": "Risen 1", "price": "11.92", "flag": "🇨🇦", "date": "15.08", "status": "" },
  { "name": "Risk: Urban Assault", "price": "0.62", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "RoboCop: Rogue City - Alex Murphy Edition", "price": "15.82", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Rock 'N Racing Bundle", "price": "0.44", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Rock of Ages 3: Make & Break", "price": "0.4", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Roguebook", "price": "0.51", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Rustler", "price": "0.66", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "SCARF", "price": "0.61", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "SCARLET NEXUS Ultimate Upgrade Pack", "price": "1.21", "flag": "🇹🇷", "date": "13.08", "status": "" },
  { "name": "SOUTH PARK: SNOW DAY! Digital Deluxe", "price": "25.23", "flag": "🇨🇱", "date": "15.08", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "12.7", "flag": "🇹🇷", "date": "31.12", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "8.4", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "STAR WARS™: Bounty Hunter™", "price": "2.28", "flag": "🇳🇬", "date": "02.08", "status": "" },
  { "name": "STEEP", "price": "0.95", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "SUPERHOT ONE OF US BUNDLE", "price": "2.14", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "SWORD ART ONLINE: FATAL BULLET", "price": "0.58", "flag": "🇹🇷", "date": "05.08", "status": "" },
  { "name": "Sacred 3", "price": "0.37", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Saga of Sins", "price": "1.19", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Saints Row IV: Re-Elected & Gat out of Hell", "price": "0.35", "flag": "🇹🇷", "date": "06.08", "status": " GP" },
  { "name": "Saints Row", "price": "6.78", "flag": "🇹🇷", "date": "06.08", "status": " GP" },
  { "name": "Sam & Max Save the World", "price": "1.2", "flag": "🇹🇷", "date": "13.08", "status": "" },
  { "name": "Sam & Max: Beyond Time and Space", "price": "1.2", "flag": "🇹🇷", "date": "13.08", "status": "" },
  { "name": "Scott Pilgrim vs. The World™: The Game – Complete Edition", "price": "0.68", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Scrabble", "price": "5.41", "flag": "🇨🇦", "date": "15.08", "status": "" },
  { "name": "Serve & Protect Bundle", "price": "5.76", "flag": "🇹🇷", "date": "04.08", "status": "" },
  { "name": "Shadows: Awakening", "price": "0.85", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Shape Up Gold Edition", "price": "1.65", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Shape Up", "price": "0.41", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Shapik: The Quest", "price": "0.25", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Sherlock Holmes Chapter One Deluxe Edition", "price": "1.5", "flag": "🇳🇬", "date": "06.08", "status": "" },
  { "name": "Sherlock Holmes Essential Bundle", "price": "1.26", "flag": "🇳🇬", "date": "06.08", "status": "" },
  { "name": "Sid Meier’s Civilization® VI Anthology", "price": "6.85", "flag": "🇹🇷", "date": "06.08", "status": " GP" },
  { "name": "Sid Meier’s Civilization® VI Platinum Edition", "price": "3.31", "flag": "🇹🇷", "date": "06.08", "status": " GP" },
  { "name": "Skull and Bones Premium Edition", "price": "22.92", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Skull and Bones", "price": "17.49", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Skyrim Anniversary Edition + Fallout 4 G.O.T.Y Bundle", "price": "19.3", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Sleepin' Deeply", "price": "0.12", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Small Moonstone Pack -- 1,200", "price": "1.2", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Smart Moves Bundle", "price": "0.34", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Smoke and Sacrifice", "price": "0.15", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Sniper Elite 5 Complete Edition", "price": "7.54", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Sniper Elite 5 Deluxe Edition", "price": "11.32", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "SnowRunner - 1-Anniversary Edition", "price": "7.24", "flag": "🇹🇷", "date": "05.08", "status": " GP" },
  { "name": "SnowRunner - 3-Year Anniversary Edition", "price": "38.6", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "SnowRunner - 4-Year Anniversary Edition", "price": "45.84", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Solasta: Crown of the Magister", "price": "2.01", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Solasta: Lightbringers Edition", "price": "2.82", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Soulstice: Deluxe Edition", "price": "1.28", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "South Park™: The Fractured but Whole™", "price": "6.56", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "South Park™: The Stick of Truth ™", "price": "1.06", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Space Crew: Legendary Edition", "price": "0.9", "flag": "🇳🇬", "date": "06.08", "status": " GP" },
  { "name": "Space Engineers: Ultimate Edition 2023", "price": "5.07", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "Sparkle 4 Tales", "price": "0.09", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Sparkle Bundle", "price": "0.99", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "SpellForce: Conquest of Eo", "price": "15.17", "flag": "🇨🇦", "date": "15.08", "status": "" },
  { "name": "SpongeBob SquarePants: Bundle", "price": "25.18", "flag": "🇨🇱", "date": "15.08", "status": "" },
  { "name": "Starfield Premium Edition Upgrade", "price": "5.72", "flag": "🇪🇬", "date": "05.09", "status": " GP" },
  { "name": "Starfield Premium Edition", "price": "14.61", "flag": "🇪🇬", "date": "07.08", "status": " GP" },
  { "name": "Starlink: Battle for Atlas™ - Deluxe edition", "price": "11.76", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Starlink: Battle for Atlas™", "price": "6.56", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "SteamWorld Build & Dig Bundle", "price": "4.39", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "SteamWorld Build Deluxe Edition", "price": "4.15", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "SteamWorld Heist II", "price": "3.41", "flag": "🇳🇬", "date": "08.08", "status": "" },
  { "name": "Steel Racer", "price": "2.57", "flag": "🇮🇳", "date": "10.08", "status": "" },
  { "name": "Steelrising - Bastille Edition", "price": "3.77", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Steep X Games Gold Edition", "price": "1.77", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Stellaris: Console Edition - Deluxe Edition", "price": "4.13", "flag": "🇹🇷", "date": "16.10", "status": " GP" },
  { "name": "Strategic Mind: Fight for Dominance", "price": "7.69", "flag": "🇹🇷", "date": "06.08", "status": " GP" },
  { "name": "Super Retro Charge", "price": "0.64", "flag": "🇹🇷", "date": "06.08", "status": " GP" },
  { "name": "Super Woden GP II", "price": "7.51", "flag": "🇮🇳", "date": "08.08", "status": "" },
  { "name": "Sword & Fairy Inn 2", "price": "10.5", "flag": "🇮🇳", "date": "14.08", "status": "" },
  { "name": "Sword of the Necromancer", "price": "0.38", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Swords & Bones", "price": "0.25", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "TRIVIAL PURSUIT Live! 2", "price": "1.42", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Tales of ARISE + SCARLET NEXUS バンドル", "price": "36.17", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Tales of Arise - Beyond the Dawn Deluxe Edition", "price": "36.17", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Teenage Mutant Ninja Turtles: Shredder's Revenge - Dimension Shellshock", "price": "2.05", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Tennis Club Story", "price": "0.92", "flag": "🇹🇷", "date": "02.08", "status": "" },
  { "name": "Teppo and The Secret Ancient City", "price": "2.93", "flag": "🇳🇬", "date": "06.08", "status": "" },
  { "name": "Teslagrad Power Pack Edition", "price": "2.58", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "The Book of Unwritten Tales 2", "price": "2.33", "flag": "🇨🇱", "date": "15.08", "status": "" },
  { "name": "The Callisto Protocol™ for Xbox One – Digital Deluxe Edition", "price": "17.49", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "The Callisto Protocol™ for Xbox Series X|S – Digital Delu...", "price": "20.51", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "The Crew® 2 Gold Edition", "price": "2.96", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "The Crew® 2 Special Edition", "price": "2.96", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "The Crew™ Motorfest Deluxe Edition", "price": "19.3", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "The Crew™ Motorfest Ultimate Edition", "price": "24.73", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "The Division 2 - Warlords of New York - Ultimate Edition", "price": "10.93", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "The Dwarves", "price": "3.49", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "The Elder Scrolls III: Morrowind", "price": "1.18", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "The Elder Scrolls Online Collection: Gold Road", "price": "31.36", "flag": "🇹🇷", "date": "07.08", "status": " GP" },
  { "name": "The Elder Scrolls Online Deluxe Collection: Gold Road", "price": "42.22", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Escapists 2", "price": "1.12", "flag": "🇹🇷", "date": "08.08", "status": "" },
  { "name": "The Escapists: Supermax Edition", "price": "1.85", "flag": "🇹🇷", "date": "29.04", "status": "" },
  { "name": "The Evil Within Digital Bundle", "price": "2.44", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Incredible Adventures of Van Helsing II", "price": "0.12", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "The Incredible Adventures of Van Helsing III", "price": "0.12", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "The Incredible Adventures of Van Helsing", "price": "0.12", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "The Jackbox Party Quadpack", "price": "6.45", "flag": "🇹🇷", "date": "31.12", "status": "" },
  { "name": "The Lamplighters League - Deluxe Edition", "price": "3.74", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "The Last Hero of Nostalgaia Deluxe Edition", "price": "1.28", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "The Lord of the Rings: Gollum™ - Precious Edition", "price": "4.82", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "The Outer Worlds: Board-Approved Bundle", "price": "8.13", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "The Quarry - Deluxe Edition", "price": "5.95", "flag": "🇹🇷", "date": "06.08", "status": " GP" },
  { "name": "The Raven Remastered", "price": "2.61", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "The Settlers®: New Allies Deluxe Edition", "price": "14.43", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "The Sinking City Xbox Series X|S Deluxe Edition", "price": "1.23", "flag": "🇳🇬", "date": "06.08", "status": "" },
  { "name": "The Surge 2 - Windows 10", "price": "0.95", "flag": "🇳🇬", "date": "06.08", "status": "" },
  { "name": "The Surge 2", "price": "2.15", "flag": "🇹🇷", "date": "06.08", "status": " GP" },
  { "name": "The Valiant", "price": "10.81", "flag": "🇨🇱", "date": "15.08", "status": "" },
  { "name": "The Walking Dead: A New Frontier", "price": "1.03", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "The Walking Dead: Michonne", "price": "0.34", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "The Walking Zombie 2", "price": "0.51", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "This Is the Police", "price": "1.72", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "This is the Police 2", "price": "2.61", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "Thymesia", "price": "3.75", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Timberman VS", "price": "0.09", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Timespinner", "price": "0.54", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Titan Quest", "price": "1.56", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Deluxe Edition", "price": "3.32", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Ultimate Edition", "price": "5.73", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint", "price": "2.71", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Tom Clancy's Rainbow Six® Extraction United Bundle", "price": "14.48", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Tom Clancy's Rainbow Six® Siege Deluxe Edition", "price": "5.22", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Tom Clancy's The Division", "price": "0.54", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Tom Clancy's The Division™ Gold Edition", "price": "1.21", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands - Standard Edition", "price": "1.63", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Ultimate Edition", "price": "12.76", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Tom Clancy’s Rainbow Six Siege Ultimate Edition", "price": "38.6", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Tom Clancy’s Rainbow Six® Extraction Deluxe Edition", "price": "3.77", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Tom Clancy’s Rainbow Six® Extraction", "price": "2.71", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "TopSpin 2K25 Deluxe Edition Pre-Order", "price": "56.52", "flag": "🇹🇷", "date": "06.08", "status": " GP" },
  { "name": "Totally Reliable Delivery Service Deluxe Edition", "price": "1.63", "flag": "🇹🇷", "date": "01.12", "status": " GP" },
  { "name": "Townsmen - A Kingdom Rebuilt", "price": "0.77", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Trackmania® Turbo", "price": "0.84", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Trailmakers - Space Upgrade", "price": "2.26", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers Deluxe Edition", "price": "3.06", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers: Rescue Bundle", "price": "2.59", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers: Rescue Deluxe Bundle", "price": "3.29", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Transference™", "price": "1.01", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Trash Quest", "price": "0.23", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Trials Fusion", "price": "0.43", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Trials Fusion: The Awesome Max Edition", "price": "0.82", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Trials® Rising - Digital Gold Edition", "price": "1.27", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Trials® Rising", "price": "0.8", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Trine 5: A Clockwork Conspiracy", "price": "13.04", "flag": "🇨🇱", "date": "15.08", "status": "" },
  { "name": "Turnip Boy Robs a Bank Pre-Release", "price": "1.03", "flag": "🇹🇷", "date": "15.07", "status": " GP" },
  { "name": "UFC® 5 Standard Edition", "price": "32.24", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "UNABLES", "price": "0.55", "flag": "🇹🇷", "date": "06.08", "status": " GP" },
  { "name": "UNO® Ultimate Edition", "price": "1.07", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "1.24", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Unturned", "price": "1.38", "flag": "🇹🇷", "date": "08.08", "status": "" },
  { "name": "Valiant Hearts: Coming Home", "price": "7.48", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Valiant Hearts: The Great War", "price": "0.29", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Valthirian Arc: Hero School Story 2", "price": "1.3", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Vampire: The Masquerade - Swansong PRIMOGEN EDITION", "price": "5.58", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Vanaris Tactics", "price": "0.35", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Verdun", "price": "0.44", "flag": "🇹🇷", "date": "06.08", "status": " GP" },
  { "name": "Vermintide - Digital Value Pack", "price": "2.65", "flag": "🇹🇷", "date": "07.03", "status": "" },
  { "name": "Vikings - Wolves of Midgard", "price": "0.77", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Volgarr the Viking I & II Bundle", "price": "1.72", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Volgarr the Viking II", "price": "1.36", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "WATCH_DOGS™ COMPLETE EDITION", "price": "0.84", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "WATCH_DOGS™", "price": "0.67", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "WINGSPAN", "price": "3.3", "flag": "🇹🇷", "date": "06.08", "status": " GP" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "9.5", "flag": "🇹🇷", "date": "30.08", "status": "" },
  { "name": "WWE 2K24 Deluxe Edition", "price": "45.22", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Warhammer 40,000: Boltgun - Forges of Corruption Edition", "price": "10.68", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "Warhammer 40,000: Darktide - Imperial Edition", "price": "9.03", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Warhammer 40,000: Inquisitor - Martyr Ultimate Edition", "price": "1.54", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Warm Snow", "price": "7.22", "flag": "🇮🇳", "date": "13.08", "status": " GP" },
  { "name": "Wasteland 3 (PC) Colorado Collection", "price": "6.32", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Watch Dogs 1 + Watch Dogs 2 Standard Editions Bundle", "price": "8.13", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "Watch Dogs: Legion - Deluxe Edition", "price": "3.05", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Watch Dogs®2 - Deluxe Edition", "price": "29.69", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "Watch Dogs®2 - Gold Edition", "price": "49.46", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Watch Dogs®: Legion Gold Edition", "price": "4.83", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Watch Dogs®: Legion Ultimate Edition", "price": "5.73", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Wavetale", "price": "1.44", "flag": "🇳🇬", "date": "13.08", "status": " GP" },
  { "name": "Way of the Hunter: Elite Edition", "price": "21.73", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "We Sing Pop", "price": "0.46", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Welcome to ParadiZe - Zombot Edition", "price": "11.74", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Werewolf: The Apocalypse - Earthblood Champion of Gaia", "price": "0.51", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Werewolf: The Apocalypse — Purgatory", "price": "1.49", "flag": "🇳🇬", "date": "07.08", "status": "" },
  { "name": "Wild Bastards", "price": "14.2", "flag": "🇺🇦", "date": "12.09", "status": "" },
  { "name": "Wingspan + European Expansion + Oceania Expansion", "price": "3.54", "flag": "🇳🇬", "date": "06.08", "status": "" },
  { "name": "Wired Italian Adventure Bundle", "price": "2.05", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Wolfenstein: Alt History Collection", "price": "12.06", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Wolfenstein: Youngblood Deluxe Edition", "price": "5.28", "flag": "🇹🇷", "date": "07.08", "status": " GP" },
  { "name": "Wolfenstein® II: The New Colossus™ Digital Deluxe Edition", "price": "7.24", "flag": "🇹🇷", "date": "07.08", "status": " GP" },
  { "name": "Wolfenstein®: The Two-Pack", "price": "3.83", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "Woodle Tree 2: Deluxe+", "price": "0.13", "flag": "🇹🇷", "date": "06.08", "status": " GP" },
  { "name": "Word Maze by POWGI", "price": "0.34", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Word Web by POWGI", "price": "0.34", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Wordsweeper by POWGI", "price": "0.34", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "World Cruise Story", "price": "0.92", "flag": "🇹🇷", "date": "02.08", "status": "" },
  { "name": "World War Z: Aftermath - Deluxe Edition", "price": "15.68", "flag": "🇹🇷", "date": "01.12", "status": " GP" },
  { "name": "World of Van Helsing: Deathtrap", "price": "0.15", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Worms Rumble", "price": "0.37", "flag": "🇳🇬", "date": "08.08", "status": "" },
  { "name": "Wreckfest Complete Edition", "price": "19.43", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "X-Force Genesis PC Edition", "price": "0.11", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "X-Force Genesis", "price": "0.15", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "X-Force Under Attack", "price": "0.17", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "X-Pack", "price": "0.3", "flag": "🇹🇷", "date": "06.08", "status": " GP" },
  { "name": "XCOM® 2 Digital Deluxe Edition", "price": "0.96", "flag": "🇹🇷", "date": "06.08", "status": " GP" },
  { "name": "Yakuza: Like a Dragon Hero Edition", "price": "11.75", "flag": "🇯🇵", "date": "01.04", "status": " GP" },
  { "name": "Yakuza: Like a Dragon Legendary Hero Edition", "price": "15.86", "flag": "🇯🇵", "date": "01.04", "status": " GP" },
  { "name": "ZOMBI", "price": "0.28", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "de Blob 2", "price": "0.58", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "de Blob", "price": "1.72", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Greenhorn Bundle", "price": "2.74", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "theHunter: Call of the Wild™ - Seasoned Hunter Bundle", "price": "3.41", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "theHunter: Call of the Wild™ - Traveler's Cosmetic Bundle", "price": "1.44", "flag": "🇹🇷", "date": "13.08", "status": "" },
  { "name": "僕のヒーローアカデミア One 's Justice2 アルティメットエディション", "price": "41.11", "flag": "🇯🇵", "date": "06.08", "status": " GP" },
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



