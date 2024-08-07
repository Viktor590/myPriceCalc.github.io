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
  { "name": "1000 Ancient Coins - Hidden Trove of the Ancients", "price": "1.63", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "150 Ancient Coins - Secret Stash of the Ancients", "price": "0.33", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "2550 Ancient Coins - Royal Treasury of the Ancients", "price": "3.75", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "2URVIVE", "price": "0.35", "flag": "🇹🇷", "date": "13.08", "status": "" },
  { "name": "4250 Ancient Coins - Glittering Tribute of the Ancients", "price": "5.67", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "550 Ancient Coins - Lost Chest of the Ancients", "price": "0.97", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "9th Dawn III", "price": "4.7", "flag": "🇺🇦", "date": "13.08", "status": " GP" },
  { "name": "A Little to the Left", "price": "1.51", "flag": "🇳🇬", "date": "13.08", "status": " GP" },
  { "name": "A Little to the Left: Extra Tidy Bundle", "price": "3.51", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "AEW: Fight Forever - Ultimate Edition", "price": "35.97", "flag": "🇨🇱", "date": "15.08", "status": "" },
  { "name": "ANNO : Mutationem", "price": "0.22", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "ASTRONEER: Evolution Edition", "price": "0.49", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "AVATAR: FRONTIERS OF PANDORA™", "price": "21.57", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Abathor", "price": "1.14", "flag": "🇹🇷", "date": "09.08", "status": "" },
  { "name": "Abomi Nation", "price": "0.15", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Ad Infinitum - Nightmare Edition Pre-order", "price": "2.52", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Adam Wolfe Xbox", "price": "0.3", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Adios", "price": "0.15", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Aero The Acro-Bat", "price": "3.09", "flag": "🇮🇳", "date": "17.08", "status": "" },
  { "name": "Aery - Little Bird Adventure", "price": "0.05", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Afterimage", "price": "0.84", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Agatha Christie Collection", "price": "5.8", "flag": "🇮🇳", "date": "13.08", "status": " GP" },
  { "name": "Age of Empires 25th Anniversary Collection", "price": "1.47", "flag": "🇦🇷", "date": "30.12", "status": " GP" },
  { "name": "Age of Empires II: Deluxe Definitive Edition Bundle", "price": "5.27", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Age of Empires: Definitive Collection", "price": "0.6", "flag": "🇦🇷", "date": "05.10", "status": " GP" },
  { "name": "Ages of Mages: the last keeper", "price": "0.09", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Airborne Bundle", "price": "0.49", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Airhead", "price": "7.14", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "AirportSim", "price": "0.52", "flag": "🇦🇷", "date": "07.08", "status": "" },
  { "name": "Alone in the Dark - Digital Deluxe Edition", "price": "33.55", "flag": "🇮🇳", "date": "15.08", "status": "" },
  { "name": "America’s Greatest Game Shows: Wheel of Fortune® & Jeopar...", "price": "0.15", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Ancestors Legacy", "price": "0.12", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Anno 1800™ Console Edition - Deluxe", "price": "2.35", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Anno 1800™ Console Edition", "price": "1.92", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Apocalipsis: The Tree of the Knowledge of Good and Evil", "price": "0.03", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Arcade Paradise | High Score Edition", "price": "0.34", "flag": "🇦🇷", "date": "01.07", "status": " GP" },
  { "name": "Ary and the Secret of Seasons", "price": "0.21", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Assassin's Creed Antiquity Pack", "price": "46.67", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "Assassin's Creed Chronicles – Trilogy", "price": "0.08", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Assassin's Creed IV Black Flag", "price": "0.64", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Assassin's Creed Legendary Collection", "price": "84.85", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "Assassin's Creed Triple Pack: Black Flag, Unity, Syndicate", "price": "2.1", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Assassin's Creed Unity", "price": "0.27", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Assassin's Creed® Bundle: Assassin's Creed® Valhalla, Ass...", "price": "38.08", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin's Creed® Chronicles: China", "price": "0.07", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Assassin's Creed® Chronicles: India", "price": "0.04", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Assassin's Creed® Chronicles: Russia", "price": "0.04", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Assassin's Creed® III Remastered", "price": "0.35", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Assassin's Creed® Odyssey - DELUXE EDITION", "price": "16.66", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Assassin's Creed® Odyssey - GOLD EDITION", "price": "19.04", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Assassin's Creed® Odyssey - ULTIMATE EDITION", "price": "22.02", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Assassin's Creed® Origins - DELUXE EDITION", "price": "16.07", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Assassin's Creed® Origins - GOLD EDITION", "price": "19.04", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Assassin's Creed® Rogue", "price": "0.13", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Assassin's Creed® Syndicate Gold Edition", "price": "0.8", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Assassin's Creed® The Ezio Collection", "price": "1.87", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Assassin's Creed® Valhalla Complete Edition", "price": "23.8", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Assassin's Creed® Valhalla Deluxe Edition", "price": "18.45", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Ragnarök Edition", "price": "14.28", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla", "price": "4.46", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Assassin’s Creed Mirage & Assassin's Creed Valhalla Bundle", "price": "13.54", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Assassin’s Creed® Mirage Deluxe Edition", "price": "14.88", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Assassin’s Creed® Mirage", "price": "13.39", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Assassin’s Creed® Rogue Remastered", "price": "0.27", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Assassin’s Creed® Valhalla + Immortals Fenyx Rising™ Bundle", "price": "59.51", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Assassin’s Creed® Valhalla + Watch Dogs®: Legion Bundle", "price": "27.37", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Assault On Metaltron", "price": "0.02", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Atomic Heart - Gold Edition", "price": "12.83", "flag": "🇦🇷", "date": "16.08", "status": " GP" },
  { "name": "Atomic Heart - Premium Edition", "price": "14.54", "flag": "🇦🇷", "date": "16.08", "status": " GP" },
  { "name": "Avatar: Frontiers of Pandora™ Gold Edition", "price": "28.27", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Aven Colony", "price": "0.32", "flag": "🇦🇷", "date": "08.08", "status": "" },
  { "name": "Awarded Platformer Bundle", "price": "0.18", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "BATTLESHIP®", "price": "0.05", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "BATTLETECH Mercenary Collection", "price": "1.1", "flag": "🇦🇷", "date": "13.06", "status": " GP" },
  { "name": "BQM - BlockQuest Maker: Remastered", "price": "0.08", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "BROKEN MIND", "price": "0.5", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Baja: Edge of Control HD", "price": "0.08", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Batman: Arkham Knight Premium Edition", "price": "1.5", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Battle Brothers - Complete Edition", "price": "0.54", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Battle Brothers", "price": "0.21", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Battle Chasers: Nightwar", "price": "2.61", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "Battle Worlds: Kronos", "price": "2.3", "flag": "🇿🇦", "date": "15.08", "status": "" },
  { "name": "Bear With Me: The Complete Collection", "price": "0.02", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Beastie Bay DX", "price": "0.17", "flag": "🇦🇷", "date": "16.08", "status": "" },
  { "name": "Beyond Good & Evil 20th Anniversary Edition", "price": "11.9", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Big Moonstone Pack -- 5,500", "price": "3.08", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "BioShock 2 Remastered", "price": "0.85", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "BioShock Infinite: The Complete Edition", "price": "1.36", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "BioShock Remastered", "price": "1.36", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Biomutant", "price": "8.82", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Bit Orchard: Animal Valley Deluxe Edition", "price": "0.05", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Black Mirror", "price": "0.11", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Blasphemous + Blasphemous 2 Bundle", "price": "6.91", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Blood Knights", "price": "0.08", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Boggle", "price": "0.04", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Bomber Crew", "price": "0.11", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Borderlands 3", "price": "1.37", "flag": "🇹🇷", "date": "20.08", "status": "" },
  { "name": "Borderlands 3: Next Level Edition", "price": "1.48", "flag": "🇹🇷", "date": "20.08", "status": "" },
  { "name": "Borderlands 3: Ultimate Edition", "price": "5.27", "flag": "🇹🇷", "date": "20.08", "status": "" },
  { "name": "Borderlands Collection: Pandora's Box", "price": "20.08", "flag": "🇹🇷", "date": "20.08", "status": "" },
  { "name": "Borderlands: The Handsome Collection", "price": "1.93", "flag": "🇹🇷", "date": "20.08", "status": "" },
  { "name": "Builder Flipper bundle", "price": "0.52", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Bundle: South Park™ : The Stick of Truth™ + The Fractured...", "price": "8.63", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Call of Duty®: Modern Warfare® III - Vault Edition", "price": "74.07", "flag": "🇧🇷", "date": "", "status": "" },
  { "name": "Call of the Wild: The Angler™ - Gold Fishing Bundle", "price": "0.61", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Call of the Wild: The Angler™ - Silver Fishing Bundle", "price": "0.49", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Call of the Wild: The Angler™ - Ultimate Fishing Bundle", "price": "0.73", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Car Vouchers (10)", "price": "1.25", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Car Vouchers (24)", "price": "2.51", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Car Vouchers (4)", "price": "0.63", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Carmageddon: Max Damage", "price": "0.05", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Cassette Beasts: Deluxe Edition", "price": "0.32", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Castle on the Coast", "price": "0.11", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Cattie", "price": "2.56", "flag": "🇮🇳", "date": "22.08", "status": "" },
  { "name": "Cat’s Request (Xbox Series X|S)", "price": "0.12", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Cat’s Request", "price": "0.12", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Chessarama", "price": "0.15", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Chicken Police - Paint it RED!", "price": "0.59", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Child of Light", "price": "0.05", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Chivalry 2 King's Edition", "price": "0.73", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "Chivalry 2 Special Edition", "price": "0.61", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "Chivalry 2", "price": "0.2", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Chronos: Before the Ashes", "price": "3.09", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "Circus of TimTim", "price": "0.12", "flag": "🇦🇷", "date": "10.08", "status": "" },
  { "name": "Cities: Skylines - Mayor's Edition", "price": "0.64", "flag": "🇦🇷", "date": "01.04", "status": " GP" },
  { "name": "Cities: Skylines - Premium Edition 2", "price": "0.85", "flag": "🇦🇷", "date": "01.04", "status": " GP" },
  { "name": "Clash - Zeno Edition", "price": "2.21", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Clumsy Rush + Brawl Chess Family Bundle", "price": "0.03", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Conan Exiles - Complete Edition October 2021", "price": "1.97", "flag": "🇦🇷", "date": "16.08", "status": " GP" },
  { "name": "Conan Exiles - Isle of Siptah Edition", "price": "0.85", "flag": "🇦🇷", "date": "16.08", "status": " GP" },
  { "name": "Conan Exiles - Isle of Siptah Edition", "price": "40.58", "flag": "🇲🇽", "date": "16.08", "status": " GP" },
  { "name": "Conan Exiles – Complete Edition", "price": "74.57", "flag": "🇲🇽", "date": "16.08", "status": " GP" },
  { "name": "Cris Tales", "price": "0.21", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Crown Trick", "price": "0.24", "flag": "🇦🇷", "date": "08.08", "status": "" },
  { "name": "Crown Wars: The Black Prince", "price": "18.72", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Crown of the Empire 2: Around the World", "price": "0.05", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Crown of the Empire", "price": "0.05", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Crusader Kings III: Royal Edition", "price": "0.92", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Curved Space", "price": "0.03", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Cyber Protocol + Clumsy Rush + Brawl Chess", "price": "0.07", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "DAS WIRED-HORROR-SPIELPAKET", "price": "0.49", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "DCL-The Game", "price": "1.32", "flag": "🇳🇬", "date": "15.08", "status": "" },
  { "name": "DEAD ISLAND 2 DELUXE EDITION", "price": "17.83", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "DEAD ISLAND 2 GOLD EDITION", "price": "21.4", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "DEATHLOOP Deluxe Edition", "price": "15.47", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "DIRT 5 Year One Edition", "price": "1.1", "flag": "🇦🇷", "date": "10.08", "status": " GP" },
  { "name": "DOOM Eternal Deluxe Edition", "price": "14.28", "flag": "🇹🇷", "date": "07.08", "status": " GP" },
  { "name": "DOOM Eternal: The Ancient Gods - Part One", "price": "5.05", "flag": "🇹🇷", "date": "07.08", "status": " GP" },
  { "name": "DOOM Eternal: The Ancient Gods - Part Two", "price": "5.05", "flag": "🇹🇷", "date": "07.08", "status": " GP" },
  { "name": "DOOM Eternal: Year One Pass (PC)", "price": "7.63", "flag": "🇹🇷", "date": "07.08", "status": " GP" },
  { "name": "DOOM Eternal: Year One Pass", "price": "7.63", "flag": "🇹🇷", "date": "07.08", "status": " GP" },
  { "name": "DRAGON BALL Z: KAKAROT Deluxe Edition", "price": "8.03", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "DUCATI - 90th Anniversary", "price": "0.74", "flag": "🇹🇷", "date": "13.08", "status": "" },
  { "name": "Dark Quest 3", "price": "0.11", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Darkest Dungeon®: Ancestral Edition", "price": "0.34", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Darksiders Fury's Collection - War and Death", "price": "3.49", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "Darksiders Genesis", "price": "7.59", "flag": "🇮🇳", "date": "15.08", "status": "" },
  { "name": "Darksiders II Deathinitive Edition", "price": "2.61", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "Darksiders III - Blades & Whip Edition", "price": "4.65", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Darksiders Warmastered Edition", "price": "1.72", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "Dead Cells: Medley of Pain Bundle", "price": "0.49", "flag": "🇦🇷", "date": "16.09", "status": " GP" },
  { "name": "Dead Cells: Return to Castlevania Bundle", "price": "0.38", "flag": "🇦🇷", "date": "16.09", "status": " GP" },
  { "name": "Dead Dungeon", "price": "0.02", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Dead Man´s Diary", "price": "0.23", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Dead by Daylight - Gold Edition", "price": "9.16", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Dead by Daylight: Dungeons & Dragons Edition", "price": "6.59", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Deceive Inc.", "price": "0.12", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Deep Rock Galactic - Deluxe Edition", "price": "0.49", "flag": "🇦🇷", "date": "01.11", "status": " GP" },
  { "name": "Deep Rock Galactic - Ultimate Edition", "price": "0.61", "flag": "🇦🇷", "date": "01.11", "status": " GP" },
  { "name": "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles Digital Deluxe Edition", "price": "18.6", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles Ultimate Edition", "price": "32.99", "flag": "🇯🇵", "date": "12.08", "status": "" },
  { "name": "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles", "price": "15.62", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "Desperados III Deluxe Edition", "price": "9.3", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Destroy All Humans! - Jumbo Pack", "price": "20.0", "flag": "🇮🇳", "date": "15.08", "status": "" },
  { "name": "Destroy All Humans! 2 - Reprobed: Dressed to Skill Edition", "price": "13.95", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Destroy All Humans!", "price": "7.59", "flag": "🇮🇳", "date": "15.08", "status": "" },
  { "name": "Deus Ex: Mankind Divided™", "price": "2.44", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Devil Inside Us: Roots of Evil", "price": "1.26", "flag": "🇳🇬", "date": "13.08", "status": " GP" },
  { "name": "Diablo® IV", "price": "30.92", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Diablo® IV: Vessel of Hatred™ - Expansion Bundle", "price": "45.24", "flag": "🇧🇷", "date": "30.12", "status": " GP" },
  { "name": "Disciples: Liberation Digital Deluxe Edition", "price": "0.41", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Discovery Tour: Viking Age", "price": "1.41", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Dishonored & Prey: The Arkane Collection", "price": "14.88", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "Dishonored®: Death of the Outsider™ Deluxe Bundle", "price": "11.84", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "Disney Dreamlight Valley – Gold Edition", "price": "9.16", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Disney Dreamlight Valley: A Rift in Time", "price": "0.46", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Dolby Atmos for Headphones", "price": "0.17", "flag": "🇦🇷", "date": "11.09", "status": "" },
  { "name": "Double Dragon Gaiden: Rise of the Dragons", "price": "2.69", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Dragon Age™: Inquisition - Game of the Year Edition", "price": "3.42", "flag": "🇰🇷", "date": "13.08", "status": " GP" },
  { "name": "Drone Gladiator", "price": "0.03", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Dungeon Defenders: Awakened", "price": "0.23", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Dungeon Drafters", "price": "0.23", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Dungeon and Gravestone", "price": "0.08", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Dungeons 3", "price": "0.18", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Dungeons 4 - Digital Deluxe Edition", "price": "11.97", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Dying Light: Definitive Edition", "price": "5.34", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Dyna Bomb", "price": "0.31", "flag": "🇳🇬", "date": "13.08", "status": "" },
  { "name": "EA Play", "price": "0.88", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "EA SPORTS FC™ 24 Standard Edition Xbox One & Xbox Series X|S", "price": "16.08", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "EA SPORTS FC™ 25 Ultimate Edition Xbox One & Xbox Series X|S", "price": "75.97", "flag": "🇰🇷", "date": "21.08", "status": "" },
  { "name": "EA SPORTS™ Madden NFL 25 Deluxe Edition Xbox Series X|S & Xbox One", "price": "75.97", "flag": "🇰🇷", "date": "12.08", "status": "" },
  { "name": "ELEX II", "price": "10.85", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Eden Genesis", "price": "14.07", "flag": "🇺🇦", "date": "13.08", "status": "" },
  { "name": "Eiyuden Chronicle: Hundred Heroes - Digital Deluxe Edition", "price": "10.48", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "EleMetals Deluxe Edition", "price": "0.04", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Elex", "price": "0.39", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Ember: Console Edition", "price": "0.08", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Escape Academy Deluxe Edition", "price": "0.43", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Escape Dead Island", "price": "0.04", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Eternal Threads", "price": "1.26", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Euphoria Games Bundle", "price": "0.34", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Exodus: Creepy Time (Windows)", "price": "0.06", "flag": "🇦🇷", "date": "09.08", "status": "" },
  { "name": "Exodus: Creepy Time (Xbox One)", "price": "0.06", "flag": "🇦🇷", "date": "09.08", "status": "" },
  { "name": "Exodus: Creepy Time", "price": "0.06", "flag": "🇦🇷", "date": "09.08", "status": "" },
  { "name": "Expeditions: A MudRunner Game - Supreme Edition", "price": "42.4", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "F1® 23", "price": "37.51", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "F1® Manager 2023 Deluxe Edition", "price": "12.83", "flag": "🇦🇷", "date": "16.10", "status": " GP" },
  { "name": "FAR CRY 4 + FAR CRY PRIMAL BUNDLE", "price": "0.67", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "FAR CRY 4 GOLD EDITION", "price": "0.19", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "FAR CRY ANTHOLOGY BUNDLE", "price": "11.9", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "FOR HONOR – Gold Edition", "price": "23.8", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "FOR HONOR – Ultimate Edition", "price": "38.08", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "FOR HONOR", "price": "2.34", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "FRONT MISSION 1st: Remake", "price": "0.27", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "FRONT MISSION 2: Remake", "price": "0.36", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Fabledom", "price": "2.61", "flag": "🇳🇬", "date": "12.09", "status": "" },
  { "name": "Fade to Silence", "price": "2.54", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "Fallout 4: Game of the Year Edition (PC)", "price": "6.78", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "Fallout 4: Game of the Year Edition", "price": "6.78", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "Fallout 76: Skyline Valley Deluxe Edition", "price": "10.26", "flag": "🇦🇷", "date": "07.08", "status": " GP" },
  { "name": "Family Feud®", "price": "6.33", "flag": "🇳🇿", "date": "15.08", "status": "" },
  { "name": "Far Cry Classic", "price": "0.03", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Far Cry Primal", "price": "0.37", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Far Cry® 3 Blood Dragon Classic Edition", "price": "0.8", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Far Cry® 3 Classic Edition", "price": "0.12", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Far Cry® 4", "price": "0.14", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Far Cry® 5 + Far Cry® New Dawn Deluxe Edition Bundle", "price": "2.99", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Far Cry® 5 Gold Edition + Far Cry ® New Dawn Deluxe Editi...", "price": "3.63", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Far Cry® 5", "price": "0.37", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Far Cry® 6 Deluxe Edition", "price": "18.45", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Far Cry® 6 Game of the Year Edition", "price": "22.61", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Far Cry® 6 Gold Edition", "price": "19.04", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Far Cry® New Dawn Deluxe Edition", "price": "0.38", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Far Cry®5 Gold Edition", "price": "2.82", "flag": "🇦🇷", "date": "01.07", "status": " GP" },
  { "name": "Farm Bundle", "price": "0.49", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Farm Pets Bundle", "price": "0.73", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Farming Simulator 22 - Platinum Edition", "price": "5.27", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Farming Simulator 22 - Premium Edition", "price": "6.59", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Fighter Within", "price": "0.4", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Flailing Limbs Bundle", "price": "0.21", "flag": "🇦🇷", "date": "01.08", "status": " GP" },
  { "name": "Flockers", "price": "0.12", "flag": "🇦🇷", "date": "08.08", "status": "" },
  { "name": "Fobia - St. Dinfna Hotel", "price": "0.14", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "For The King", "price": "0.06", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Forest Camp Story", "price": "0.17", "flag": "🇦🇷", "date": "16.08", "status": "" },
  { "name": "Forza Horizon 4 Deluxe Edition", "price": "10.48", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 4 Ultimate Edition", "price": "13.17", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 Deluxe Edition", "price": "10.48", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 PLUS Hot Wheels Bundle", "price": "9.23", "flag": "🇦🇷", "date": "30.12", "status": " GP" },
  { "name": "Forza Horizon 5 Premium Add-Ons Bundle", "price": "6.59", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 Premium Edition", "price": "13.17", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport Deluxe Edition", "price": "11.79", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport Premium Add-Ons Bundle", "price": "5.27", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport Premium Edition", "price": "13.17", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport and Forza Horizon 5 Premium Add-Ons Bundle", "price": "11.23", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport and Forza Horizon 5 Premium Editions Bundle", "price": "24.97", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "From Space Resistance Bundle", "price": "1.71", "flag": "🇦🇷", "date": "16.10", "status": " GP" },
  { "name": "Frostpunk: Complete Collection", "price": "0.55", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Full Spectrum Warrior", "price": "0.05", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "GROW UP", "price": "0.04", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Garden Bundle", "price": "0.55", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Gears of War 4 and Halo 5: Guardians Bundle", "price": "0.34", "flag": "🇦🇷", "date": "31.01", "status": " GP" },
  { "name": "Gears of War Ultimate Edition Deluxe Version", "price": "1.11", "flag": "🇦🇷", "date": "31.05", "status": " GP" },
  { "name": "Generation Zero ® - Silver Bundle", "price": "0.61", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Generation Zero ® - Ultimate Bundle", "price": "0.85", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Generation Zero® - Gold Bundle", "price": "0.73", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Genesis Alpha One", "price": "0.08", "flag": "🇦🇷", "date": "08.08", "status": "" },
  { "name": "Ghostlore (Game Preview)", "price": "0.23", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Ghostwire: Tokyo Deluxe Edition", "price": "18.45", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Gnomes Garden 8: Return of the Queen", "price": "0.05", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Gnomes Garden Collection", "price": "0.08", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Goat Simulator 3 - Multiversal Traveler's Edition", "price": "0.49", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Goat Simulator: The GOATY", "price": "0.26", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Goat Simulator: Waste Of Space Bundle", "price": "0.12", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Going Under", "price": "0.24", "flag": "🇦🇷", "date": "08.08", "status": "" },
  { "name": "Golf With Your Friends - Starter Edition", "price": "15.39", "flag": "🇦🇷", "date": "08.08", "status": "" },
  { "name": "Golf With Your Friends - Ultimate Edition", "price": "32.11", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Gotham Knights: Deluxe", "price": "13.0", "flag": "🇪🇬", "date": "01.10", "status": " GP" },
  { "name": "Grand Theft Auto Online", "price": "3.26", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Grand Theft Auto V (Xbox One & Xbox Series X|S)", "price": "5.88", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Grand Theft Auto V: Premium Edition & Great White Shark C...", "price": "2.68", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Grand Theft Auto V: Premium Edition & Megalodon Shark Car...", "price": "4.49", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Grand Theft Auto V: Premium Edition & Whale Shark Card Bu...", "price": "3.09", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Grood", "price": "0.02", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Guilty Gear -Strive- Blazing Edition", "price": "11.23", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "HITMAN™ 2", "price": "1.35", "flag": "🇦🇷", "date": "04.02", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ 2 - Turbocharged - Deluxe Edition", "price": "8.72", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ 2 - Turbocharged - Legendary Edition", "price": "11.23", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "HUMANKIND™ - Heritage Edition", "price": "7.84", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Halo 5: Guardians – Digital Deluxe Edition", "price": "5.56", "flag": "🇦🇷", "date": "31.05", "status": " GP" },
  { "name": "Halo Wars 2: Complete Edition", "price": "23.8", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Hammerwatch II", "price": "2.83", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Hammerwatch II: The Chronicles Edition", "price": "6.28", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Hand of Fate 2", "price": "0.14", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Hasbro Family Fun Pack - Super Edition", "price": "0.21", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Hasbro Family Fun Pack", "price": "8.71", "flag": "🇨🇦", "date": "15.08", "status": "" },
  { "name": "Have Fun Together", "price": "10.23", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Headbangers: Rhythm Royale - Digital Deluxe Edition", "price": "3.95", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hell Let Loose - Deluxe Edition", "price": "7.84", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hell Let Loose - Fan Favourites Bundle", "price": "2.69", "flag": "🇸🇦", "date": "13.08", "status": "" },
  { "name": "Hell Let Loose - German Bundle", "price": "1.69", "flag": "🇸🇦", "date": "13.08", "status": "" },
  { "name": "Hell Let Loose - Headgear Bundle", "price": "1.69", "flag": "🇸🇦", "date": "13.08", "status": "" },
  { "name": "Hell Let Loose - Soviet Bundle", "price": "1.69", "flag": "🇸🇦", "date": "13.08", "status": "" },
  { "name": "Hell Let Loose - The Eagle and Pegasus Combo Pack", "price": "0.79", "flag": "🇳🇬", "date": "13.08", "status": "" },
  { "name": "Hell Let Loose - U.S Bundle", "price": "1.69", "flag": "🇸🇦", "date": "13.08", "status": "" },
  { "name": "Hell Let Loose - Ultimate Edition", "price": "9.16", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hell Warders", "price": "0.06", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Hello Neighbor 2 Deluxe Edition", "price": "4.7", "flag": "🇦🇷", "date": "16.12", "status": " GP" },
  { "name": "Hi-Fi RUSH Deluxe Edition", "price": "14.28", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Hogwarts Legacy: Digital Deluxe Edition", "price": "13.08", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Hotel Renovator – Five Star Edition", "price": "25.66", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Huge Moonstone Pack -- 14,500", "price": "7.7", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Hungry Shark® World", "price": "0.05", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Hunting Simulator 2", "price": "0.18", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Hypnospace Outlaw & Slayers X: Terminal Aftermath: Vengance of the Slayer Bundle", "price": "0.41", "flag": "🇦 🇷", "date": "01.06", "status": " GP" },
  { "name": "I Want To Go To Mars (Xbox Series X|S)", "price": "0.06", "flag": "🇦🇷", "date": "08.08", "status": "" },
  { "name": "I Want To Go To Mars", "price": "0.06", "flag": "🇦🇷", "date": "08.08", "status": "" },
  { "name": "INDIE BUNDLE: Shiness and Seasons after Fall", "price": "0.14", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "INSIDE & LIMBO Bundle", "price": "2.15", "flag": "🇦🇷", "date": "01.08", "status": " GP" },
  { "name": "Immortals Fenyx Rising™ Gold Edition", "price": "34.51", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Immortals Fenyx Rising™", "price": "5.95", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Immortals of Aveum™ Deluxe Edition", "price": "29.43", "flag": "🇿🇦", "date": "30.12", "status": "" },
  { "name": "Injustice™ 2 - Legendary Edition", "price": "1.62", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Insurgency: Sandstorm - Deluxe Edition", "price": "14.54", "flag": "🇦🇷", "date": "16.01", "status": " GP" },
  { "name": "Insurgency: Sandstorm - Gold Edition", "price": "21.38", "flag": "🇦🇷", "date": "16.01", "status": " GP" },
  { "name": "Insurgency: Sandstorm - Ultimate Edition", "price": "24.8", "flag": "🇦🇷", "date": "16.01", "status": " GP" },
  { "name": "Isonzo: Collector's Edition", "price": "0.73", "flag": "🇦🇷", "date": "16.06", "status": " GP" },
  { "name": "Isonzo: Deluxe Edition", "price": "0.49", "flag": "🇦🇷", "date": "16.06", "status": " GP" },
  { "name": "Isonzo: Ultimate Edition", "price": "58.16", "flag": "🇰🇷", "date": "16.06", "status": " GP" },
  { "name": "JUJU", "price": "0.04", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Jagged Alliance 3", "price": "21.7", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Jeopardy!", "price": "0.08", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Jurassic World Evolution 2: Deluxe Edition", "price": "5.99", "flag": "🇦🇷", "date": "16.05", "status": " GP" },
  { "name": "Jurassic World Evolution 2: Dominion Bundle", "price": "11.12", "flag": "🇦🇷", "date": "16.05", "status": " GP" },
  { "name": "Jurassic World Evolution: Expansion Collection", "price": "0.09", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Just Crow Things", "price": "0.27", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Just Dance 2018", "price": "0.0", "flag": "🇮🇸", "date": "", "status": "" },
  { "name": "Just Dance 2024 Deluxe Edition", "price": "21.27", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Just Dance 2024 Edition", "price": "14.88", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Just Dance 2024 Ultimate Edition", "price": "25.89", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Kao the Kangaroo A Well Good Bundle", "price": "0.8", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Killer Frequency", "price": "1.96", "flag": "🇳🇬", "date": "13.08", "status": " GP" },
  { "name": "Killer Klowns From Outer Space: Digital Deluxe Edition", "price": "3.54", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Killing Floor 2", "price": "0.09", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "King Arthur: Knight's Tale", "price": "11.22", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Kingdoms of Amalur: Re-Reckoning FATE Edition", "price": "8.19", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "Kraken Academy!!", "price": "0.11", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Kraken Odyssey", "price": "0.16", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "L.A. Noire", "price": "2.98", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "LEGO® 2K Drive Awesome Edition", "price": "37.72", "flag": "🇰🇷", "date": "01.01", "status": " GP" },
  { "name": "LEGO® 2K Drive Awesome Rivals Edition", "price": "53.53", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "LEGO® Star Wars™: The Skywalker Saga Galactic Edition", "price": "11.53", "flag": "🇪🇬", "date": "01.05", "status": " GP" },
  { "name": "LEGO® Star Wars™: The Skywalker Saga", "price": "4.27", "flag": "🇦🇷", "date": "01.05", "status": " GP" },
  { "name": "LEGO® Star Wars™:The Skywalker Saga Deluxe Edition", "price": "10.07", "flag": "🇪🇬", "date": "01.05", "status": " GP" },
  { "name": "LEGRAND LEGACY: Tale of the Fatebounds", "price": "0.03", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Landnama", "price": "0.18", "flag": "🇦🇷", "date": "09.08", "status": "" },
  { "name": "Let's Build a Zoo & Dinosaur DLC Bundle", "price": "0.33", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "Let's Build a Zoo: Aquarium Odyssey Bundle", "price": "0.33", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "Let's Build a Zoo: Ultimate Bundle", "price": "0.41", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "Lies of P Digital Deluxe Edition", "price": "9.16", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Light & Dark Bundle", "price": "1.71", "flag": "🇦🇷", "date": "02.11", "status": "" },
  { "name": "Like a Dragon Gaiden: The Man Who Erased His Name Deluxe Edition", "price": "29.49", "flag": "🇸🇬", "date": "16.11", "status": " GP" },
  { "name": "Like a Dragon: Ishin! Digital Deluxe Edition", "price": "26.16", "flag": "🇹🇷", "date": "16.10", "status": " GP" },
  { "name": "Little Mouse's Encyclopedia + Brawl Chess", "price": "0.03", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Little Mouse's Encyclopedia + Clumsy Rush", "price": "0.06", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Lonely Mountains: Downhill - Eldfjall Island", "price": "0.29", "flag": "🇦🇷", "date": "01.11", "status": " GP" },
  { "name": "Lords of the Fallen Deluxe Edition", "price": "10.48", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Loretta", "price": "0.14", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Lost Words: Beyond the Page", "price": "0.11", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Luxury Garden Bundle", "price": "0.73", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "MARS 2120", "price": "7.95", "flag": "🇧🇷", "date": "16.08", "status": "" },
  { "name": "MLB® The Show™ 24 - Digital Deluxe Edition", "price": "23.8", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "MLB® The Show™ 24 - MVP Edition", "price": "20.23", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "MLB® The Show™ 24 - Xbox One Standard Edition", "price": "14.28", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "MLB® The Show™ 24 - Xbox Series X|S Standard Edition", "price": "28.22", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "MONOPOLY FAMILY FUN PACK", "price": "0.05", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "MONOPOLY PLUS + MONOPOLY Madness", "price": "1.09", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "MONOPOLY PLUS", "price": "0.14", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "MX Unleashed", "price": "0.04", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "MX vs ATV All Out", "price": "2.61", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "MX vs ATV Legends - Ultimate Edition", "price": "28.78", "flag": "🇨🇱", "date": "15.08", "status": "" },
  { "name": "MX vs ATV Legends", "price": "8.82", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "MX vs. ATV Supercross Encore", "price": "0.06", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "MXGP2", "price": "0.08", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "MY HERO ONE'S JUSTICE 2 Ultimate Edition", "price": "11.15", "flag": "🇹🇷", "date": "13.08", "status": "" },
  { "name": "MY HERO ONE'S JUSTICE 2 Ultimate Edition", "price": "12.7", "flag": "🇰🇷", "date": "13.08", "status": "" },
  { "name": "MY HERO ONE'S JUSTICE 2", "price": "23.99", "flag": "🇯🇵", "date": "13.08", "status": "" },
  { "name": "MY HERO ONE'S JUSTICE 2", "price": "5.57", "flag": "🇹🇷", "date": "13.08", "status": "" },
  { "name": "MY HERO ONE’S JUSTICE", "price": "5.19", "flag": "🇹🇷", "date": "13.08", "status": "" },
  { "name": "Madden NFL 19", "price": "28.56", "flag": "🇨🇴", "date": "30.12", "status": "" },
  { "name": "Madden NFL 24 Xbox Series X|S & Xbox One", "price": "16.08", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "Mafia II: Definitive Edition", "price": "1.48", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Mafia III: Definitive Edition", "price": "1.48", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Maneater Apex Edition", "price": "0.61", "flag": "🇦🇷", "date": "01.03", "status": " GP" },
  { "name": "Maneater", "price": "0.21", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Mangavania 2 (Xbox Series X|S)", "price": "0.06", "flag": "🇦🇷", "date": "20.08", "status": "" },
  { "name": "Mangavania 2", "price": "0.06", "flag": "🇦🇷", "date": "20.08", "status": "" },
  { "name": "Marvel's Midnight Suns Digital+ Edition for Xbox One", "price": "6.69", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Marvel's Midnight Suns Digital+ Edition for Xbox Series X|S", "price": "6.69", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Mass Effect™ Legendary Edition", "price": "7.13", "flag": "🇮🇳", "date": "13.08", "status": " GP" },
  { "name": "Mass Effect™: Andromeda – Deluxe Recruit Edition", "price": "0.29", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Mass Effect™: Andromeda – Standard Recruit Edition", "price": "3.49", "flag": "🇰🇷", "date": "13.08", "status": " GP" },
  { "name": "Mayhem Heroes", "price": "0.38", "flag": "🇳🇬", "date": "13.08", "status": "" },
  { "name": "MechWarrior 5: Mercenaries - JumpShip Edition", "price": "0.73", "flag": "🇦🇷", "date": "30.12", "status": " GP" },
  { "name": "Meg's Monster", "price": "0.16", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Microsoft 365 Family", "price": "0.0", "flag": "🇺🇸", "date": "30.11", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.0", "flag": "🇺🇸", "date": "30.11", "status": "" },
  { "name": "Microsoft Flight Simulator Deluxe 40th Anniversary Edition", "price": "11.79", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Microsoft Flight Simulator Premium Deluxe 40th Anniversar...", "price": "15.68", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Middle-earth™: Shadow of War™ Definitive Edition", "price": "1.71", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Middle-earth™: Shadow of War™", "price": "0.15", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Middle-earth™: The Shadow Bundle", "price": "5.13", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Midnight Collection", "price": "4.14", "flag": "🇮🇳", "date": "14.08", "status": "" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle - Windows 10", "price": "1.51", "flag": "🇹🇷", "date": "12.08", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle", "price": "1.51", "flag": "🇹🇷", "date": "27.07", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate Edition for Windows", "price": "5.77", "flag": "🇪🇬", "date": "12.08", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate Edition", "price": "5.27", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Minecraft Legends Deluxe Edition", "price": "6.59", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Minecraft: Deluxe Collection", "price": "3.95", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Monopoly Madness", "price": "0.8", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Monster Energy Supercross - The Official Videogame 4", "price": "0.48", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Monster Energy Supercross 4 - Special Edition - Xbox Series X|S", "price": "0.8", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Monster Energy Supercross 4 - Special Edition", "price": "0.8", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Monster Energy Supercross 4 - Xbox Series X|S", "price": "0.48", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Monster Hunter Rise + Sunbreak Deluxe", "price": "33.32", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "Monster Hunter Rise + Sunbreak", "price": "28.56", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "Monster Hunter Rise Deluxe Edition", "price": "18.71", "flag": "🇪🇬", "date": "01.04", "status": " GP" },
  { "name": "Monster Jam Steel Titans 2", "price": "5.71", "flag": "🇨🇱", "date": "15.08", "status": "" },
  { "name": "Monster Jam Steel Titans Power Out Bundle", "price": "8.57", "flag": "🇨🇱", "date": "15.08", "status": "" },
  { "name": "Monster Jam Steel Titans", "price": "2.79", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "Monster Trampoline", "price": "0.31", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Moonlighter: Complete Edition", "price": "0.29", "flag": "🇦🇷", "date": "01.12", "status": " GP" },
  { "name": "Mortal Kombat 11 Ultimate + Injustice 2 Leg. Edition Bundle", "price": "20.45", "flag": "🇹🇷", "date": "16.12", "status": " GP" },
  { "name": "Mortal Kombat 11 Ultimate", "price": "8.69", "flag": "🇪🇬", "date": "16.12", "status": " GP" },
  { "name": "MotoGP™19", "price": "1.48", "flag": "🇹🇷", "date": "13.08", "status": "" },
  { "name": "Mount & Blade II: Bannerlord - Digital Companion", "price": "0.08", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Mount & Blade II: Bannerlord Digital Deluxe Edition", "price": "7.84", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Mount & Blade: Warband", "price": "0.11", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Moving Out 2 - Deluxe Edition", "price": "2.6", "flag": "🇳🇬", "date": "08.08", "status": "" },
  { "name": "My Friend Peppa Pig - Complete Edition", "price": "4.7", "flag": "🇦🇷", "date": "01.07", "status": " GP" },
  { "name": "My Time at Portia Deluxe Edition", "price": "0.37", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "My Time at Sandrock Deluxe Edition", "price": "0.61", "flag": "🇦🇷", "date": "16.06", "status": " GP" },
  { "name": "NBA 2K24 Baller Edition", "price": "41.63", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "NBA 2K24 Black Mamba Edition", "price": "45.23", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "NINJA GAIDEN: Master Collection Deluxe Edition", "price": "6.27", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "NO THING", "price": "0.02", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Neighbours back From Hell", "price": "0.6", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Neon Abyss Deluxe Edition", "price": "0.34", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Neon Abyss", "price": "0.24", "flag": "🇦🇷", "date": "08.08", "status": "" },
  { "name": "Neptunia: Sisters VS Sisters", "price": "5.41", "flag": "🇪🇬", "date": "13.08", "status": " GP" },
  { "name": "New Tales from the Borderlands: Deluxe Edition", "price": "3.74", "flag": "🇦🇷", "date": "20.08", "status": "" },
  { "name": "Nickelodeon All-Star Brawl 2 Deluxe Edition", "price": "10.07", "flag": "🇪🇬", "date": "01.01", "status": " GP" },
  { "name": "Nickelodeon All-Star Brawl 2 Ultimate Edition", "price": "11.53", "flag": "🇪🇬", "date": "01.01", "status": " GP" },
  { "name": "Night in the Woods", "price": "0.15", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.04", "flag": "🇦🇷", "date": "30.05", "status": "" },
  { "name": "No Longer Home", "price": "0.07", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "29.05", "flag": "🇮🇳", "date": "16.03", "status": " GP" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "3.93", "flag": "🇦🇷", "date": "16.03", "status": " GP" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "4.05", "flag": "🇹🇷", "date": "16.03", "status": " GP" },
  { "name": "Noob - The Factionless", "price": "10.36", "flag": "🇮🇳", "date": "13.08", "status": " GP" },
  { "name": "OCTOPATH TRAVELER + OCTOPATH TRAVELER II Bundle", "price": "41.03", "flag": "🇺🇦", "date": "03.09", "status": " GP" },
  { "name": "OddBallers™", "price": "0.59", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "One Hand Clapping", "price": "0.83", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Orcs Must Die! 3 Bundle", "price": "2.71", "flag": "🇹🇷", "date": "16.04", "status": " GP" },
  { "name": "Ori: The Collection", "price": "6.59", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Outcast - A New Beginning", "price": "21.7", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Overcooked! 2 - Gourmet Edition", "price": "0.48", "flag": "🇦🇷", "date": "16.12", "status": " GP" },
  { "name": "Overcooked: Gourmet Edition", "price": "0.42", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Overruled!", "price": "0.03", "flag": "🇦🇷", "date": "08.08", "status": "" },
  { "name": "PAW Patrol: Grand Prix - Complete Edition", "price": "3.85", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "PERISH", "price": "2.91", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "POMBERO: The Lord of the Night", "price": "6.35", "flag": "🇺🇦", "date": "13.08", "status": "" },
  { "name": "Paleo Pines", "price": "3.57", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Panzer Elite Action: Fields of Glory", "price": "0.22", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Party Animals Deluxe Edition", "price": "3.95", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Penarium", "price": "0.02", "flag": "🇦🇷", "date": "08.08", "status": "" },
  { "name": "Persona 5 Tactica: Digital Deluxe Edition", "price": "42.82", "flag": "🇹🇷", "date": "16.11", "status": " GP" },
  { "name": "Pets Bundle", "price": "0.55", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Phoenix Point: Behemoth Edition", "price": "0.37", "flag": "🇦🇷", "date": "30.12", "status": " GP" },
  { "name": "Pinku Kult: Hex Mortis", "price": "0.07", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "PlateUp!", "price": "1.76", "flag": "🇳🇬", "date": "13.08", "status": " GP" },
  { "name": "Prey®: Digital Deluxe Edition", "price": "6.78", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "Primal Survivors", "price": "0.06", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Prince of Persia The Lost Crown", "price": "17.85", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Prince of Persia™: The Lost Crown Deluxe Edition", "price": "20.53", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Pushy and Pully in Blockland", "price": "0.08", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Q-YO Blaster", "price": "0.02", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Quriocity", "price": "2.11", "flag": "🇳🇬", "date": "09.08", "status": "" },
  { "name": "RABBIDS INVASION - GOLD EDITION", "price": "0.07", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "RAGE 2: Deluxe Edition", "price": "10.71", "flag": "🇹🇷", "date": "07.08", "status": " GP" },
  { "name": "RESIDENT EVIL 2 Deluxe Edition", "price": "23.8", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Rabbids Invasion : The Interactive TV Show", "price": "0.04", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Rabbids®: Party of Legends", "price": "1.2", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Raging Justice", "price": "0.08", "flag": "🇦🇷", "date": "08.08", "status": "" },
  { "name": "Rayman Legends", "price": "0.21", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "ReCore", "price": "2.14", "flag": "🇦🇷", "date": "", "status": "" },
  { "name": "Rebel Cops", "price": "0.92", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "Red Dead Redemption 2: Ultimate Edition", "price": "3.95", "flag": "🇳🇬", "date": "13.08", "status": " GP" },
  { "name": "Regular Moonstone Pack -- 2,500", "price": "1.54", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Remnant II - Deluxe Edition", "price": "4.7", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Remnant II - Ultimate Edition", "price": "5.99", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Remnant: From the Ashes - Complete Edition", "price": "1.28", "flag": "🇦🇷", "date": "01.12", "status": " GP" },
  { "name": "Remothered: Broken Porcelain", "price": "0.21", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Riders Republic™ 360 Edition", "price": "11.6", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Riders Republic™ Complete Edition", "price": "15.62", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Riders Republic™ Skate Edition", "price": "8.93", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Rise of the Third Power", "price": "0.15", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Rise of the Tomb Raider: 20 Year Celebration", "price": "12.42", "flag": "🇹🇷", "date": "01.12", "status": " GP" },
  { "name": "Risen 1", "price": "11.17", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Risk: Urban Assault", "price": "0.06", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Roads of Time 2", "price": "0.05", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Roads of Time", "price": "0.05", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Roarr! Jurassic Edition", "price": "0.03", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "RoboCop: Rogue City - Alex Murphy Edition", "price": "5.18", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Robolifter", "price": "0.05", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Rock of Ages 3: Make & Break", "price": "0.21", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Roguebook", "price": "0.09", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Rustler", "price": "0.11", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "SCARF", "price": "0.6", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "SCARLET NEXUS Ultimate Upgrade Pack", "price": "1.19", "flag": "🇹🇷", "date": "13.08", "status": "" },
  { "name": "SOUTH PARK: SNOW DAY! Digital Deluxe", "price": "21.7", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "1.83", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "1.37", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "STEEP", "price": "0.1", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "SUPERHOT ONE OF US BUNDLE", "price": "0.58", "flag": "🇦🇷", "date": "01.04", "status": " GP" },
  { "name": "SWORD ART ONLINE: FATAL BULLET", "price": "0.57", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Sacred 3", "price": "0.07", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Saga of Sins", "price": "0.21", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Sam & Max Save the World", "price": "0.18", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Sam & Max: Beyond Time and Space", "price": "0.18", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Sam & Max: The Devil's Playhouse", "price": "0.27", "flag": "🇦🇷", "date": "14.08", "status": "" },
  { "name": "Scott Pilgrim vs. The World™: The Game – Complete Edition", "price": "0.35", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Scrabble", "price": "5.44", "flag": "🇨🇦", "date": "15.08", "status": "" },
  { "name": "Sea of Thieves: 2024 Deluxe Edition", "price": "6.27", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Sea of Thieves: 2024 Premium Edition", "price": "7.47", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Shadows: Awakening", "price": "0.15", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Shape Up Gold Edition", "price": "0.08", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Shape Up", "price": "0.05", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Shy Dogs Hidden Orchestra", "price": "0.46", "flag": "🇳🇬", "date": "13.08", "status": "" },
  { "name": "Silver Chains", "price": "0.04", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Skull and Bones Premium Edition", "price": "22.61", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Skull and Bones", "price": "17.26", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Skyrim Anniversary Edition + Fallout 4 G.O.T.Y Bundle", "price": "19.04", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Small Moonstone Pack -- 1,200", "price": "0.77", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Smoke and Sacrifice", "price": "0.02", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Sniper Elite 5 Complete Edition", "price": "1.34", "flag": "🇦🇷", "date": "01.05", "status": " GP" },
  { "name": "Sniper Elite 5 Deluxe Edition", "price": "6.84", "flag": "🇦🇷", "date": "01.05", "status": " GP" },
  { "name": "SnowRunner - 1-Anniversary Edition", "price": "4.46", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "SnowRunner - 2-Year Anniversary Edition", "price": "30.94", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "SnowRunner - 3-Year Anniversary Edition", "price": "38.08", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "SnowRunner - 4-Year Anniversary Edition", "price": "45.23", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Sokomage", "price": "0.06", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Solasta: Crown of the Magister", "price": "0.78", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Solasta: Lightbringers Edition", "price": "0.51", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Soulstice: Deluxe Edition", "price": "0.23", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "South Park™: The Fractured but Whole™", "price": "6.47", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "South Park™: The Stick of Truth ™", "price": "0.12", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Space Engineers: Ultimate Edition 2023", "price": "0.91", "flag": "🇦🇷", "date": "01.03", "status": " GP" },
  { "name": "Sparkle Bundle", "price": "0.14", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Speed Crew", "price": "0.84", "flag": "🇹🇷", "date": "13.08", "status": "" },
  { "name": "SpellForce: Conquest of Eo", "price": "14.22", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "SpongeBob SquarePants: Bundle", "price": "15.5", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Starfield Premium Edition Upgrade", "price": "5.67", "flag": "🇪🇬", "date": "05.09", "status": " GP" },
  { "name": "Starfield Premium Edition", "price": "14.46", "flag": "🇪🇬", "date": "07.08", "status": " GP" },
  { "name": "Starlink: Battle for Atlas™ - Deluxe edition", "price": "11.6", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Starlink: Battle for Atlas™", "price": "6.47", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "SteamWorld Build & Dig Bundle", "price": "1.87", "flag": "🇦🇷", "date": "01.12", "status": " GP" },
  { "name": "SteamWorld Build Deluxe Edition", "price": "0.41", "flag": "🇦🇷", "date": "01.12", "status": " GP" },
  { "name": "SteamWorld Heist II", "price": "2.02", "flag": "🇦🇷", "date": "08.08", "status": "" },
  { "name": "Steel Racer", "price": "2.56", "flag": "🇮🇳", "date": "10.08", "status": "" },
  { "name": "Steelrising - Bastille Edition", "price": "1.07", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Steep X Games Gold Edition", "price": "0.28", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Stellaris: Console Edition - Deluxe Edition", "price": "0.47", "flag": "🇦🇷", "date": "16.10", "status": " GP" },
  { "name": "Strategic Mind: Spirit of Liberty", "price": "1.35", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Sunset Overdrive Deluxe Edition", "price": "1.65", "flag": "🇹🇷", "date": "31.05", "status": " GP" },
  { "name": "Super Sami Roll", "price": "0.07", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Super Woden GP II", "price": "7.49", "flag": "🇮🇳", "date": "08.08", "status": "" },
  { "name": "Sweet Bakery Tycoon", "price": "0.05", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Sword & Fairy Inn 2", "price": "10.47", "flag": "🇮🇳", "date": "14.08", "status": "" },
  { "name": "Sword of the Necromancer", "price": "0.06", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Sword of the Vagrant", "price": "0.19", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Sébastien Loeb Rally EVO", "price": "1.48", "flag": "🇹🇷", "date": "13.08", "status": "" },
  { "name": "THE HOUSE OF THE DEAD: Remake", "price": "0.1", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "THE ORIGIN: Blind Maid", "price": "9.87", "flag": "🇺🇦", "date": "13.08", "status": "" },
  { "name": "TRIVIAL PURSUIT Live! 2", "price": "0.53", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Tales from the Borderlands", "price": "1.31", "flag": "🇦🇷", "date": "20.08", "status": "" },
  { "name": "Tales of ARISE + SCARLET NEXUS バンドル", "price": "35.68", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Tales of Arise - Beyond The Dawn Ultimate Edition", "price": "42.82", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Tales of Arise - Beyond the Dawn Deluxe Edition", "price": "35.68", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Tales of Arise - Beyond the Dawn Edition", "price": "26.16", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Teenage Mutant Ninja Turtles: Shredder's Revenge - Dimension Shellshock", "price": "0.37", "flag": "🇦🇷", "date": "16.06", "status": " GP" },
  { "name": "TerraTech", "price": "0.42", "flag": "🇹🇷", "date": "13.08", "status": "" },
  { "name": "TerraTech: Prospector Edition", "price": "0.83", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Teslagrad Power Pack Edition", "price": "1.38", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "The Amazing American Circus", "price": "0.28", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "The Bard's Tale Trilogy", "price": "0.74", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "The Book of Unwritten Tales 2", "price": "2.33", "flag": "🇨🇱", "date": "15.08", "status": "" },
  { "name": "The Callisto Protocol™ for Xbox One – Digital Deluxe Edition", "price": "17.26", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "The Callisto Protocol™ for Xbox Series X|S – Digital Delu...", "price": "20.23", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "The Crew® 2 Gold Edition", "price": "0.96", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "The Crew® 2 Special Edition", "price": "0.64", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "The Crew™ Motorfest Deluxe Edition", "price": "19.04", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "The Crew™ Motorfest Ultimate Edition", "price": "24.4", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "The Division 2 - Warlords of New York - Ultimate Edition", "price": "10.79", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "The Dwarves", "price": "3.49", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "The Elder Scrolls III: Morrowind", "price": "1.16", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "The Elder Scrolls Online Collection: Gold Road", "price": "23.09", "flag": "🇦🇷", "date": "07.08", "status": " GP" },
  { "name": "The Elder Scrolls Online Deluxe Collection: Gold Road", "price": "30.1", "flag": "🇦🇷", "date": "30.12", "status": " GP" },
  { "name": "The Elder Scrolls V: Skyrim Anniversary Edition", "price": "11.43", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Escapists 2", "price": "1.11", "flag": "🇹🇷", "date": "08.08", "status": "" },
  { "name": "The Escapists: Supermax Edition", "price": "0.27", "flag": "🇦🇷", "date": "29.04", "status": "" },
  { "name": "The Evil Within Digital Bundle", "price": "2.41", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Incredible Adventures of Van Helsing II", "price": "0.02", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "The Incredible Adventures of Van Helsing III", "price": "0.02", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "The Incredible Adventures of Van Helsing", "price": "0.02", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "The Inquisitor - Deluxe Edition", "price": "20.04", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "The Jackbox Party Quadpack", "price": "0.6", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "The Lamplighters League - Deluxe Edition", "price": "0.67", "flag": "🇦🇷", "date": "01.04", "status": " GP" },
  { "name": "The Last Hero of Nostalgaia Deluxe Edition", "price": "0.23", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "The Lord of the Rings: Gollum™ - Precious Edition", "price": "3.4", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "The Outer Worlds: Board-Approved Bundle", "price": "8.02", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "The Quarry - Deluxe Edition", "price": "18.78", "flag": "🇹🇷", "date": "16.12", "status": " GP" },
  { "name": "The Raven Remastered", "price": "2.61", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "The Settlers®: New Allies Deluxe Edition", "price": "4.59", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "The Vale: Shadow of the Crown", "price": "0.15", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "The Valiant", "price": "9.62", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "The Walking Dead: A New Frontier", "price": "0.18", "flag": "🇦🇷", "date": "01.11", "status": " GP" },
  { "name": "The Walking Dead: Michonne", "price": "0.06", "flag": "🇦🇷", "date": "01.11", "status": " GP" },
  { "name": "The Walking Zombie 2", "price": "0.09", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "The Wandering Village (Game Preview)", "price": "1.42", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "The Witch's House MV", "price": "0.11", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "This Bed We Made", "price": "0.25", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "This Is the Police", "price": "1.72", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "This War of Mine - Complete Edition", "price": "0.33", "flag": "🇦🇷", "date": "16.10", "status": " GP" },
  { "name": "This is the Police 2", "price": "2.61", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "This is the Zodiac Speaking", "price": "0.04", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Thymesia", "price": "1.6", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Times and Galaxy", "price": "0.27", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Timespinner", "price": "0.1", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Titan Quest", "price": "1.56", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Deluxe Edition", "price": "3.27", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Ultimate Edition", "price": "1.18", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint", "price": "2.68", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Tom Clancy's Rainbow Six® Extraction United Bundle", "price": "4.7", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Tom Clancy's Rainbow Six® Siege Deluxe Edition", "price": "5.15", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Tom Clancy's The Division", "price": "0.32", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Tom Clancy's The Division™ Gold Edition", "price": "0.53", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands - Standard Edition", "price": "0.49", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Ultimate Edition", "price": "4.06", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Year 2 Gold Edition", "price": "1.71", "flag": "🇦🇷", "date": "01.07", "status": " GP" },
  { "name": "Tom Clancy’s Rainbow Six Siege Operator Edition", "price": "30.94", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Tom Clancy’s Rainbow Six Siege Ultimate Edition", "price": "38.08", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Tom Clancy’s Rainbow Six® Extraction Deluxe Edition", "price": "1.6", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Tom Clancy’s Rainbow Six® Extraction", "price": "1.04", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Tomb Raider: Definitive Survivor Trilogy", "price": "20.7", "flag": "🇹🇷", "date": "16.04", "status": " GP" },
  { "name": "Totally Reliable Delivery Service Deluxe Edition", "price": "0.29", "flag": "🇦🇷", "date": "01.12", "status": " GP" },
  { "name": "Townsmen - A Kingdom Rebuilt", "price": "0.76", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Trackmania® Turbo", "price": "0.09", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Trailmakers - Space Upgrade", "price": "0.41", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers Deluxe Edition", "price": "0.47", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers: Rescue Bundle", "price": "0.47", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers: Rescue Deluxe Bundle", "price": "0.58", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Transference™", "price": "0.09", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Treasure Hunter Simulator", "price": "0.08", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Trials Fusion", "price": "0.05", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Trials Fusion: The Awesome Max Edition", "price": "0.11", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Trials® Rising - Digital Gold Edition", "price": "0.48", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Trials® Rising", "price": "0.32", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Tricky Towers", "price": "0.06", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Trine 5: A Clockwork Conspiracy", "price": "12.19", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Turbo Golf Racing (Game Preview)", "price": "0.11", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Turbo Golf Racing: Deep Space Bundle", "price": "0.2", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Turbo Golf Racing: Ultimate Bundle", "price": "0.23", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Turn to Mine (Xbox Series X|S)", "price": "0.12", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Turn to Mine", "price": "0.12", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Turnip Boy Robs a Bank Pre-Release", "price": "0.18", "flag": "🇦🇷", "date": "15.07", "status": " GP" },
  { "name": "Turnip Boy Robs a Bank", "price": "1.3", "flag": "🇳🇬", "date": "13.08", "status": "" },
  { "name": "UFC® 5 Standard Edition", "price": "32.15", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "UFO ROBOT GRENDIZER – The Feast of the Wolves", "price": "13.95", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "UNO® Ultimate Edition", "price": "0.64", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Ugly", "price": "1.05", "flag": "🇳🇬", "date": "13.08", "status": " GP" },
  { "name": "Ultra Foodmess 2", "price": "0.06", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "0.14", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Unturned", "price": "0.77", "flag": "🇦🇷", "date": "08.08", "status": "" },
  { "name": "Valentino Rossi The Game", "price": "1.12", "flag": "🇯🇵", "date": "13.08", "status": "" },
  { "name": "Valiant Hearts: Coming Home", "price": "7.38", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Valiant Hearts: The Great War", "price": "0.04", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Valthirian Arc: Hero School Story 2", "price": "0.24", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Vampire: The Masquerade - Swansong PRIMOGEN EDITION", "price": "1.39", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Vanaris Tactics", "price": "0.34", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "Vermintide - Digital Value Pack", "price": "0.43", "flag": "🇦🇷", "date": "07.03", "status": "" },
  { "name": "Vikings - Wolves of Midgard", "price": "0.14", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "WATCH_DOGS™ COMPLETE EDITION", "price": "0.83", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "WATCH_DOGS™", "price": "0.07", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "0.68", "flag": "🇦🇷", "date": "30.08", "status": "" },
  { "name": "WWE 2K24 Deluxe Edition", "price": "44.61", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "War Mongrels", "price": "0.57", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Warhammer 40,000: Boltgun - Forges of Corruption Edition", "price": "10.53", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "Warhammer 40,000: Darktide - Imperial Edition", "price": "4.27", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "Warhammer 40,000: Inquisitor - Martyr Ultimate Edition", "price": "0.23", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Warm Snow", "price": "7.2", "flag": "🇮🇳", "date": "13.08", "status": " GP" },
  { "name": "Wasteland 3 (PC) Colorado Collection", "price": "1.54", "flag": "🇦🇷", "date": "30.09", "status": " GP" },
  { "name": "Wasteland 3 Colorado Collection", "price": "10.45", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "Watch Dogs 1 + Watch Dogs 2 Standard Editions Bundle", "price": "8.13", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "Watch Dogs: Legion - Deluxe Edition", "price": "3.01", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Watch Dogs®2 - Deluxe Edition", "price": "2.91", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Watch Dogs®2 - Gold Edition", "price": "48.8", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Watch Dogs®: Legion Gold Edition", "price": "4.76", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Watch Dogs®: Legion Ultimate Edition", "price": "5.65", "flag": "🇹🇷", "date": "15.08", "status": "" },
  { "name": "Wavetale", "price": "0.91", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Way of the Hunter: Elite Edition", "price": "18.6", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "We Happy Few Digital Deluxe", "price": "1.45", "flag": "🇦🇷", "date": "16.01", "status": " GP" },
  { "name": "We Sing Pop", "price": "0.06", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "Welcome to ParadiZe - Zombot Edition", "price": "3.78", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Werewolf: The Apocalypse - Earthblood Champion of Gaia", "price": "0.09", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "White Day: A Labyrinth Named School", "price": "0.25", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Wild Bastards", "price": "14.23", "flag": "🇺🇦", "date": "12.09", "status": "" },
  { "name": "Wild Seas", "price": "0.06", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "Wingspan + European Expansion + Oceania Expansion + Seasonal Decorative Pack", "price": "3.11", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Wired Italian Adventure Bundle", "price": "0.37", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Wo Long: Fallen Dynasty Complete Edition", "price": "30.1", "flag": "🇺🇦", "date": "01.03", "status": " GP" },
  { "name": "Wolfenstein: Alt History Collection", "price": "11.9", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Wolfenstein: Youngblood Deluxe Edition", "price": "5.21", "flag": "🇹🇷", "date": "07.08", "status": " GP" },
  { "name": "Wolfenstein® II: The New Colossus™ Digital Deluxe Edition", "price": "7.14", "flag": "🇹🇷", "date": "07.08", "status": " GP" },
  { "name": "Wolfenstein®: The Two-Pack", "price": "3.78", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "World War Z: Aftermath - Deluxe Edition", "price": "5.47", "flag": "🇦🇷", "date": "01.12", "status": " GP" },
  { "name": "World of Van Helsing: Deathtrap", "price": "0.02", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "Worms Rumble", "price": "0.05", "flag": "🇦🇷", "date": "08.08", "status": "" },
  { "name": "Wreckfest Complete Edition", "price": "19.44", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "XCOM® 2", "price": "0.35", "flag": "🇹🇷", "date": "13.08", "status": " GP" },
  { "name": "XCOM®: Enemy Within", "price": "0.09", "flag": "🇦🇷", "date": "13.08", "status": " GP" },
  { "name": "YAKUZA Series Starter Pack", "price": "17.83", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "Yakuza Complete Series", "price": "68.59", "flag": "🇮🇳", "date": "01.04", "status": " GP" },
  { "name": "Yakuza: Like a Dragon Hero Edition", "price": "11.99", "flag": "🇯🇵", "date": "01.04", "status": " GP" },
  { "name": "Yakuza: Like a Dragon Legendary Hero Edition", "price": "15.69", "flag": "🇹🇷", "date": "14.08", "status": " GP" },
  { "name": "ZOMBI", "price": "0.04", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "de Blob 2", "price": "0.08", "flag": "🇦🇷", "date": "15.08", "status": "" },
  { "name": "de Blob", "price": "1.72", "flag": "🇧🇷", "date": "15.08", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Greenhorn Bundle", "price": "0.49", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "theHunter: Call of the Wild™ - Master Hunter Bundle", "price": "0.73", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "theHunter: Call of the Wild™ - Seasoned Hunter Bundle", "price": "0.61", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "theHunter: Call of the Wild™ - Traveler's Cosmetic Bundle", "price": "0.26", "flag": "🇦🇷", "date": "13.08", "status": "" },
  { "name": "ザ・ハウス・オブ・ザ・デッド：リメイク", "price": "4.43", "flag": "🇯🇵", "date": "13.08", "status": "" },
  { "name": "僕のヒーローアカデミア One 's Justice2 アルティメットエディション", "price": "41.98", "flag": "🇯🇵", "date": "13.08", "status": "" },
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



