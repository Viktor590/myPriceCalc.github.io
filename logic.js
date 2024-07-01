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
  { "name": "1000 Ancient Coins - Hidden Trove of the Ancients", "price": "1.66", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "11-11 Memories Retold", "price": "0.61", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "150 Ancient Coins - Secret Stash of the Ancients", "price": "0.34", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "2550 Ancient Coins - Royal Treasury of the Ancients", "price": "3.82", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "4250 Ancient Coins - Glittering Tribute of the Ancients", "price": "5.78", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "550 Ancient Coins - Lost Chest of the Ancients", "price": "0.99", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "A Perfect Day", "price": "2.19", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "A Space for the Unbound", "price": "1.19", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "A Tale For Anna", "price": "0.98", "flag": "🇳🇬", "date": "02.07", "status": " GP" },
  { "name": "ANNO : Mutationem", "price": "1.25", "flag": "🇹🇷", "date": "02.07", "status": " GP" },
  { "name": "ASTRONEER: Evolution Edition", "price": "2.76", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Ace Attorney Anthology", "price": "32.86", "flag": "🇯🇵", "date": "01.07", "status": "" },
  { "name": "Adam Wolfe Xbox", "price": "1.68", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Adios", "price": "1.01", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Aery - Dreamscape", "price": "0.44", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "After Wave: Downfall", "price": "3.95", "flag": "🇮🇳", "date": "02.07", "status": " GP" },
  { "name": "Afterimage", "price": "2.46", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Age of Empires 25th Anniversary Collection", "price": "8.25", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Age of Empires II: Deluxe Definitive Edition Bundle", "price": "5.49", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Age of Empires: Definitive Collection", "price": "6.14", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Air Bounce - The Jump 'n' Run Challenge", "price": "0.31", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Airborne Bundle", "price": "2.76", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Alfred Hitchcock - Vertigo", "price": "3.29", "flag": "🇮🇳", "date": "02.07", "status": "" },
  { "name": "Alien: Isolation - The Collection", "price": "3.6", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Alien: Isolation", "price": "2.87", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Alina of the Arena", "price": "1.03", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Alphaset by POWGI", "price": "0.34", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Amnesia: Collection", "price": "0.39", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "Amnesia: Rebirth", "price": "1.1", "flag": "🇪🇬", "date": "02.07", "status": "" },
  { "name": "Amnesia: The Bunker", "price": "1.19", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Among the Sleep - Enhanced Edition", "price": "0.49", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Andro Dunos 2", "price": "0.9", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Anuchard", "price": "0.59", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "Apollo Justice: Ace Attorney Trilogy", "price": "21.84", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Arcade Classics Anniversary Collection", "price": "0.74", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Arcade Paradise | High Score Edition", "price": "1.91", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Ary and the Secret of Seasons", "price": "0.54", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Assassin's Creed Antiquity Pack", "price": "12.24", "flag": "🇧🇷", "date": "09.07", "status": " GP" },
  { "name": "Assassin's Creed Legendary Collection", "price": "22.26", "flag": "🇧🇷", "date": "09.07", "status": " GP" },
  { "name": "Assassin's Creed Triple Pack: Black Flag, Unity, Syndicate", "price": "2.14", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Assassin's Creed® Bundle: Assassin's Creed® Valhalla, Ass...", "price": "38.83", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Assassin's Creed® Odyssey - ULTIMATE EDITION", "price": "5.61", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Assassin's Creed® Origins - DELUXE EDITION", "price": "3.07", "flag": "🇹🇷", "date": "09.07", "status": " GP" },
  { "name": "Assassin's Creed® Origins - GOLD EDITION", "price": "3.64", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Assassin's Creed® Syndicate Gold Edition", "price": "1.59", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Assassin's Creed® The Ezio Collection", "price": "1.91", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Assassin's Creed® Valhalla Complete Edition", "price": "7.58", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Assassin's Creed® Valhalla Deluxe Edition", "price": "18.81", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Ragnarök Edition", "price": "14.56", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla", "price": "4.55", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Assassin’s Creed Mirage & Assassin's Creed Valhalla Bundle", "price": "13.8", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Assassin’s Creed® Mirage Deluxe Edition", "price": "15.17", "flag": "🇹🇷", "date": "09.07", "status": " GP" },
  { "name": "Assassin’s Creed® Mirage", "price": "13.65", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Assassin’s Creed® Valhalla + Immortals Fenyx Rising™ Bundle", "price": "60.67", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Assassin’s Creed® Valhalla + Watch Dogs®: Legion Bundle", "price": "6.98", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Atomic Heart - Gold Edition", "price": "42.47", "flag": "🇹🇷", "date": "16.08", "status": " GP" },
  { "name": "Atomic Heart - Premium Edition", "price": "46.11", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Attack of the Toy Tanks (Xbox Series X|S)", "price": "2.58", "flag": "🇮🇳", "date": "26.06", "status": "" },
  { "name": "Avatar: Frontiers of Pandora™", "price": "26.39", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Awarded Platformer Bundle", "price": "1.21", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "BATTLETECH Mercenary Collection", "price": "6.19", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "BIOHAZARD 7 Gold Edition & VILLAGE Gold Edition バンドル Z Version", "price": "22.54", "flag": "🇯🇵", "date": "02.07", "status": "" },
  { "name": "BIOHAZARD 7 Gold Edition & VILLAGE Gold Edition バンドル", "price": "22.54", "flag": "🇯🇵", "date": "02.07", "status": "" },
  { "name": "BIOHAZARD 7 resident evil Gold Edition グロテスクVer.", "price": "10.01", "flag": "🇯🇵", "date": "02.07", "status": "" },
  { "name": "BIOHAZARD VILLAGE Z version GOLD EDITION", "price": "15.02", "flag": "🇯🇵", "date": "02.07", "status": "" },
  { "name": "Back 4 Blood", "price": "1.11", "flag": "🇪🇬", "date": "02.07", "status": "" },
  { "name": "Backbeat", "price": "2.38", "flag": "🇳🇬", "date": "02.07", "status": " GP" },
  { "name": "Batman: Arkham Collection", "price": "7.46", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Batman: Arkham Knight Premium Edition", "price": "3.16", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Batman™: Arkham Knight", "price": "0.41", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Bear With Me: The Complete Collection", "price": "0.2", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "Bear With Me: The Lost Robots", "price": "0.07", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "Before We Leave", "price": "0.69", "flag": "🇳🇬", "date": "09.07", "status": " GP" },
  { "name": "Behind The Mask Bundle", "price": "7.22", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Bendy and the Dark Revival", "price": "0.77", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Bendy and the Ink Machine™", "price": "0.5", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Best Month Ever!", "price": "0.85", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Big Moonstone Pack -- 5,500", "price": "5.36", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "BioShock 2 Remastered", "price": "0.86", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "BioShock Infinite: The Complete Edition", "price": "1.38", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "BioShock Remastered", "price": "1.38", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Birth", "price": "0.76", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Black Mirror", "price": "0.76", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Blasphemous + Blasphemous 2 Bundle", "price": "7.04", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Blind Postman (Windows)", "price": "0.17", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Blind Postman", "price": "0.17", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Block Tower TD (Windows)", "price": "0.41", "flag": "🇹🇷", "date": "05.07", "status": "" },
  { "name": "Block Tower TD", "price": "0.41", "flag": "🇹🇷", "date": "05.07", "status": "" },
  { "name": "Bloodwash", "price": "0.35", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Blue Fire", "price": "2.46", "flag": "🇹🇷", "date": "02.07", "status": " GP" },
  { "name": "Borderlands 3: Next Level Edition", "price": "2.27", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Borderlands 3: Ultimate Edition", "price": "6.45", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Bridge Constructor: The Walking Dead", "price": "0.17", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Builder Flipper bundle", "price": "2.91", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Bullet Beat (for Windows 10)", "price": "0.17", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Bullet Beat", "price": "0.17", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Bundle: South Park™ : The Stick of Truth™ + The Fractured...", "price": "8.8", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "CODE VEIN Deluxe Edition", "price": "1.82", "flag": "🇹🇷", "date": "09.07", "status": " GP" },
  { "name": "CONTRA: ROGUE CORPS", "price": "0.45", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "CYGNI: All Guns Blazing", "price": "14.76", "flag": "🇨🇱", "date": "05.08", "status": "" },
  { "name": "Calico", "price": "0.72", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Call of Cthulhu", "price": "0.84", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Call of the Wild: The Angler™ - Ultimate Fishing Bundle", "price": "4.13", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "Car Vouchers (10)", "price": "1.31", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Car Vouchers (24)", "price": "2.61", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Car Vouchers (4)", "price": "0.65", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Cassette Beasts: Deluxe Edition", "price": "1.79", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Castle Walker", "price": "0.25", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Castle on the Coast", "price": "0.64", "flag": "🇹🇷", "date": "02.07", "status": " GP" },
  { "name": "Castlevania Advance Collection", "price": "3.18", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Castlevania Anniversary Collection", "price": "0.74", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Cat Pipes", "price": "0.34", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Catie in MeowmeowLand", "price": "0.26", "flag": "🇹🇷", "date": "02.07", "status": " GP" },
  { "name": "Chessarama", "price": "0.84", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Child of Light", "price": "0.35", "flag": "🇹🇷", "date": "02.07", "status": " GP" },
  { "name": "Chivalry 2 King's Edition", "price": "4.13", "flag": "🇹🇷", "date": "01.10", "status": " GP" },
  { "name": "Chivalry 2 Special Edition", "price": "3.43", "flag": "🇹🇷", "date": "01.10", "status": " GP" },
  { "name": "Cities: Skylines - Mayor's Edition", "price": "8.19", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "Cities: Skylines - Premium Edition 2", "price": "4.79", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "Claire: Extended Cut", "price": "0.28", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Color Pals", "price": "1.93", "flag": "🇮🇳", "date": "02.07", "status": "" },
  { "name": "Conan Exiles - Complete Edition October 2021", "price": "10.92", "flag": "🇹🇷", "date": "16.08", "status": " GP" },
  { "name": "Conan Exiles - Isle of Siptah Edition", "price": "38.12", "flag": "🇯🇵", "date": "16.08", "status": " GP" },
  { "name": "Conan Exiles - Isle of Siptah Edition", "price": "4.85", "flag": "🇹🇷", "date": "16.08", "status": " GP" },
  { "name": "Conan Exiles – Complete Edition", "price": "76.23", "flag": "🇯🇵", "date": "16.08", "status": " GP" },
  { "name": "Conan Exiles – Year 1 DLC Bundle", "price": "2.47", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Contra Anniversary Collection", "price": "0.74", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Contra: Operation Galuga", "price": "18.1", "flag": "🇯🇵", "date": "02.07", "status": "" },
  { "name": "Cris Tales", "price": "0.86", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Crusader Kings III: Royal Edition", "price": "5.16", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Crypt of the Serpent King Remastered 4K Edition", "price": "1.28", "flag": "🇮🇳", "date": "02.07", "status": "" },
  { "name": "Crypto by POWGI", "price": "0.34", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Curved Space", "price": "0.17", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Cyber Protocol", "price": "0.36", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "DAS WIRED-HORROR-SPIELPAKET", "price": "2.76", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "DE-EXIT - Eternal Matters", "price": "3.03", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "DEAD ISLAND 2 DELUXE EDITION", "price": "18.18", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "DEAD ISLAND 2 GOLD EDITION", "price": "21.82", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "DEATHLOOP Deluxe Edition", "price": "15.78", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "DIRT 5 Year One Edition", "price": "6.19", "flag": "🇹🇷", "date": "10.08", "status": " GP" },
  { "name": "DOOM Eternal Deluxe Edition", "price": "14.56", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "DOOM Eternal: The Ancient Gods - Part One", "price": "5.15", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "DOOM Eternal: The Ancient Gods - Part Two", "price": "5.15", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "DOOM Eternal: Year One Pass (PC)", "price": "6.01", "flag": "🇺🇦", "date": "02.07", "status": "" },
  { "name": "DOOM Eternal: Year One Pass", "price": "7.78", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "DOOM Slayers Collection", "price": "3.28", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "DRAGON BALL: THE BREAKERS Special Edition", "price": "1.81", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "DREDGE - Digital Deluxe Edition", "price": "2.38", "flag": "🇳🇬", "date": "09.07", "status": " GP" },
  { "name": "Dark Grim Mariupolis (for Windows 10)", "price": "0.13", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Dark Grim Mariupolis", "price": "0.17", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Darkest Dungeon®: Ancestral Edition", "price": "2.06", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Darksiders Fury's Collection - War and Death", "price": "3.66", "flag": "🇧🇷", "date": "02.07", "status": "" },
  { "name": "Daymare: 1994 Sandcastle (Xbox Series X|S Version)", "price": "3.58", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "Daymare: 1998", "price": "0.71", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Dead Age", "price": "0.12", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Dead Cells: Medley of Pain Bundle", "price": "2.76", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Dead Cells: Return to Castlevania Bundle", "price": "2.15", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Dead Man´s Diary", "price": "1.29", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Dead Rising 2 Off the Record", "price": "2.97", "flag": "🇧🇷", "date": "02.07", "status": "" },
  { "name": "Dead Rising 2", "price": "3.05", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Dead Rising 3: Apocalypse Edition", "price": "1.25", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Dead Rising 4", "price": "3.64", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Dead by Daylight - Gold Edition", "price": "4.77", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "Dead by Daylight - Gold Edition", "price": "4.77", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "Dead by Daylight: Dungeons & Dragons Edition", "price": "6.86", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Deep Rock Galactic - Deluxe Edition", "price": "2.76", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "Deep Rock Galactic - Ultimate Edition", "price": "3.43", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "Detective - Minerva Case", "price": "0.73", "flag": "🇹🇷", "date": "28.06", "status": "" },
  { "name": "Devil Inside Us: Roots of Evil", "price": "1.32", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "Diablo® IV", "price": "31.53", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Diablo® IV: Vessel of Hatred™ - Expansion Bundle", "price": "47.48", "flag": "🇧🇷", "date": "30.12", "status": " GP" },
  { "name": "Digital Deluxe Upgrade featuring LEGO®", "price": "5.99", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Dinobreak", "price": "6.59", "flag": "🇮🇳", "date": "02.07", "status": "" },
  { "name": "Disciples: Liberation", "price": "6.29", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Dishonored & Prey: The Arkane Collection", "price": "15.17", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "Disney Dreamlight Valley – Gold Edition", "price": "9.54", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Disney Dreamlight Valley: A Rift in Time", "price": "4.11", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Doki Doki Literature Club Plus!", "price": "1.14", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Don't Starve Mega Pack 2020", "price": "1.4", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Don't Starve Together: Console Edition", "price": "0.41", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Don't Starve: Giant Edition + Shipwrecked Expansion", "price": "0.36", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Don't Starve: Giant Edition", "price": "0.3", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Double Cross", "price": "1.97", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Double Dragon Gaiden: Rise of the Dragons", "price": "6.6", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Dungeons 3 - Complete Collection", "price": "1.73", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Dungeons 4 - Digital Deluxe Edition", "price": "24.27", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Dying Light: Definitive Edition", "price": "5.51", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "EA SPORTS FC™ 24 Standard Edition Xbox One & Xbox Series X|S", "price": "16.18", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "EA SPORTS FC™ 24 Standard Edition Xbox One & Xbox Series X|S", "price": "3.45", "flag": "🇰🇷", "date": "18.07", "status": "" },
  { "name": "EA SPORTS FC™ 24 Ultimate Edition Xbox One & Xbox Series X|S", "price": "31.16", "flag": "🇮🇳", "date": "18.07", "status": "" },
  { "name": "EA SPORTS™ Madden NFL 25 Deluxe Edition Xbox Series X|S & Xbox One + Limited Time Bonus", "price": "75.11", "flag": "🇰🇷", "date": "02.08", "status": "" },
  { "name": "EA SPORTS™ PGA TOUR™ Deluxe Edition", "price": "10.42", "flag": "🇮🇳", "date": "09.07", "status": "" },
  { "name": "EA SPORTS™ PGA TOUR™", "price": "8.09", "flag": "🇮🇳", "date": "09.07", "status": "" },
  { "name": "Eiyuden Chronicle: Hundred Heroes - Digital Deluxe Edition", "price": "10.91", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "El Paso, Elsewhere", "price": "1.28", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "EleMetals: Death Metal Death Match!", "price": "0.24", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Endling - Extinction is Forever", "price": "2.12", "flag": "🇹🇷", "date": "09.07", "status": " GP" },
  { "name": "Escape Academy Deluxe Edition", "price": "2.4", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Escape Dead Island", "price": "0.23", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Everafter Falls", "price": "1.54", "flag": "🇹🇷", "date": "04.07", "status": "" },
  { "name": "F1® 23", "price": "37.74", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "F1® 24 Champions Edition", "price": "43.14", "flag": "🇮🇳", "date": "09.07", "status": "" },
  { "name": "F1® Manager 2023 Deluxe Edition", "price": "13.35", "flag": "🇹🇷", "date": "16.10", "status": " GP" },
  { "name": "F1® Manager 2024 Deluxe Edition", "price": "25.94", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "FAR CRY 4 + FAR CRY PRIMAL BUNDLE", "price": "1.33", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "FAR CRY ANTHOLOGY BUNDLE", "price": "12.13", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "FOR HONOR – Ultimate Edition", "price": "12.13", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Fabledom", "price": "2.72", "flag": "🇳🇬", "date": "12.09", "status": "" },
  { "name": "Faces of Illusion: The Twin Phantoms (Xbox Version)", "price": "3.61", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Fallout 4: Game of the Year Edition (PC)", "price": "6.92", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "Fallout 4: Game of the Year Edition", "price": "6.92", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "Fallout 76: Skyline Valley Deluxe Edition", "price": "24.27", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Far Cry Classic", "price": "0.23", "flag": "🇹🇷", "date": "02.07", "status": " GP" },
  { "name": "Far Cry Insanity Bundle", "price": "11.13", "flag": "🇧🇷", "date": "02.07", "status": "" },
  { "name": "Far Cry Primal", "price": "1.06", "flag": "🇹🇷", "date": "09.07", "status": " GP" },
  { "name": "Far Cry® 5 + Far Cry® New Dawn Deluxe Edition Bundle", "price": "19.46", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Far Cry® 5 Gold Edition + Far Cry ® New Dawn Deluxe Editi...", "price": "22.33", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Far Cry® 5", "price": "2.73", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Far Cry® 6 Deluxe Edition", "price": "5.88", "flag": "🇹🇷", "date": "09.07", "status": " GP" },
  { "name": "Far Cry® 6 Game of the Year Edition", "price": "8.65", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Far Cry® 6 Gold Edition", "price": "19.42", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Far Cry® New Dawn Deluxe Edition", "price": "1.9", "flag": "🇹🇷", "date": "09.07", "status": " GP" },
  { "name": "Far Cry®5 Gold Edition", "price": "16.99", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Farm Bundle", "price": "2.76", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Farm Pets Bundle", "price": "4.13", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Farming Simulator 22 - Platinum Edition", "price": "5.49", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Farming Simulator 22 - Premium Edition", "price": "6.86", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Farming Simulator 22 - YEAR 1 Bundle", "price": "6.14", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Flailing Limbs Bundle", "price": "1.43", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Flowers by POWGI", "price": "0.34", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Fobia - St. Dinfna Hotel", "price": "0.77", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Forza Horizon 4 Deluxe Edition", "price": "10.91", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 4 Expansions Bundle", "price": "4.77", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 4 Ultimate Add-Ons Bundle", "price": "6.86", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 4 Ultimate Edition", "price": "13.72", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 + 4 Premium Upgrade Bundle", "price": "13.72", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 Deluxe Edition", "price": "10.91", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 PLUS Hot Wheels Bundle", "price": "10.91", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 Premium Add-Ons Bundle", "price": "3.43", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "Forza Horizon 5 Premium Edition", "price": "13.72", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 and Forza Horizon 4 Premium Editions Bundle", "price": "27.43", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport Deluxe Edition", "price": "12.28", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport Premium Add-Ons Bundle", "price": "5.49", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport Premium Edition", "price": "13.72", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport and Forza Horizon 5 Premium Add-Ons Bundle", "price": "11.69", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport and Forza Horizon 5 Premium Editions Bundle", "price": "26.0", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Fossilfuel 2", "price": "1.19", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Froggy Bouncing Adventures", "price": "2.58", "flag": "🇮🇳", "date": "29.06", "status": "" },
  { "name": "From Space Resistance Bundle", "price": "2.74", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Frostpunk: Complete Collection", "price": "3.09", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Fury Unleashed", "price": "0.3", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "GRAVEN", "price": "2.19", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Garden Bundle", "price": "3.65", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Gears of War 4 and Halo 5: Guardians Bundle", "price": "2.43", "flag": "🇹🇷", "date": "31.01", "status": " GP" },
  { "name": "Gears of War Ultimate Edition Deluxe Version", "price": "1.21", "flag": "🇹🇷", "date": "31.05", "status": " GP" },
  { "name": "Gem Wizards Tactics", "price": "0.24", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Generation Zero ® - Essential DLC Bundle", "price": "0.85", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Generation Zero ® - Silver Bundle", "price": "3.43", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Generation Zero ® - Ultimate Bundle", "price": "4.79", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Generation Zero® - Gold Bundle", "price": "4.13", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Genesis Alpha One Deluxe Edition", "price": "0.84", "flag": "🇹🇷", "date": "09.07", "status": " GP" },
  { "name": "Get Even", "price": "0.41", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Ghost Trick: Phantom Detective", "price": "10.14", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Ghostbusters: Spirits Unleashed", "price": "1.11", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Ghostwire: Tokyo Deluxe Edition", "price": "18.81", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Glyphs of Gitzan", "price": "2.58", "flag": "🇮🇳", "date": "04.07", "status": "" },
  { "name": "Goat Simulator 3 - Multiversal Traveler's Edition", "price": "2.76", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Goat Simulator 3", "price": "4.55", "flag": "🇹🇷", "date": "09.07", "status": " GP" },
  { "name": "Goat Simulator: The GOATY", "price": "1.86", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Goat Simulator: Waste Of Space Bundle", "price": "1.03", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "God of Rock", "price": "1.33", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Golf With Your Friends - Ultimate Edition", "price": "32.74", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Gotham Knights: Deluxe", "price": "13.26", "flag": "🇪🇬", "date": "01.10", "status": " GP" },
  { "name": "Grand Prix Rock 'N Racing", "price": "0.29", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Grand Prix Story", "price": "0.92", "flag": "🇹🇷", "date": "05.07", "status": "" },
  { "name": "Grand Theft Auto Online", "price": "3.32", "flag": "🇹🇷", "date": "09.07", "status": " GP" },
  { "name": "Grand Theft Auto V (Xbox One & Xbox Series X|S)", "price": "6.0", "flag": "🇹🇷", "date": "09.07", "status": " GP" },
  { "name": "Grand Theft Auto V: Premium Edition & Great White Shark C...", "price": "2.73", "flag": "🇹🇷", "date": "09.07", "status": " GP" },
  { "name": "Grand Theft Auto V: Premium Edition & Megalodon Shark Car...", "price": "4.58", "flag": "🇹🇷", "date": "09.07", "status": " GP" },
  { "name": "Grand Theft Auto V: Premium Edition & Whale Shark Card Bu...", "price": "3.16", "flag": "🇹🇷", "date": "09.07", "status": " GP" },
  { "name": "Greyhill Incident - Abducted Edition", "price": "1.55", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Greyhill Incident", "price": "1.23", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Griftlands", "price": "0.68", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Guilty Gear -Strive- Daredevil Edition", "price": "13.0", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "HITMAN™ 2", "price": "7.49", "flag": "🇹🇷", "date": "04.02", "status": "" },
  { "name": "HORROR TALES: The Beggar", "price": "1.15", "flag": "🇹🇷", "date": "03.07", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ 2 - Turbocharged - Deluxe Edition", "price": "9.08", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ 2 - Turbocharged - Legendary Edition", "price": "11.69", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "HUMANKIND™ - Heritage Edition", "price": "8.16", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Halo 5: Guardians – Digital Deluxe Edition", "price": "20.02", "flag": "🇹🇷", "date": "31.05", "status": " GP" },
  { "name": "Halo Wars 2: Complete Edition", "price": "24.27", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Hammerwatch Anniversary Edition", "price": "5.47", "flag": "🇺🇦", "date": "02.07", "status": "" },
  { "name": "Hammerwatch II", "price": "6.8", "flag": "🇺🇦", "date": "02.07", "status": "" },
  { "name": "Hasbro Family Fun Pack - Super Edition", "price": "2.05", "flag": "🇹🇷", "date": "02.07", "status": " GP" },
  { "name": "Haven", "price": "1.02", "flag": "🇹🇷", "date": "27.06", "status": "" },
  { "name": "Headbangers: Rhythm Royale - Digital Deluxe Edition", "price": "4.11", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hell Let Loose - Deluxe Edition", "price": "8.16", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hell Let Loose - Ultimate Edition", "price": "5.72", "flag": "🇳🇬", "date": "25.06", "status": "" },
  { "name": "Hell Warders", "price": "0.32", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Hello Neighbor 2 Deluxe Edition", "price": "8.16", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hello Neighbor 2", "price": "1.55", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Hello Neighbor", "price": "0.49", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Hello Neighbor: Hide and Seek", "price": "0.64", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Hexagroove: Tactical DJ", "price": "1.04", "flag": "🇳🇬", "date": "02.07", "status": " GP" },
  { "name": "Hi-Fi RUSH Deluxe Edition", "price": "14.56", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Hidden Cats in Paris", "price": "0.21", "flag": "🇹🇷", "date": "26.06", "status": "" },
  { "name": "Hidden Through Time 2", "price": "1.19", "flag": "🇳🇬", "date": "02.07", "status": " GP" },
  { "name": "Hidden Through Time", "price": "0.34", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Hoa", "price": "0.52", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Hole io", "price": "0.34", "flag": "🇹🇷", "date": "06.07", "status": "" },
  { "name": "Home Sweet Home", "price": "0.7", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Horror Tale 1: Kidnapper", "price": "0.57", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Horror Tale 2: Samantha", "price": "0.42", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Hotel Transylvania 3: Monsters Overboard", "price": "5.69", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Hotel Transylvania: Scary-Tale Adventures", "price": "3.67", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "How 2 Escape", "price": "0.9", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Huge Moonstone Pack -- 14,500", "price": "13.65", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hypnospace Outlaw & Slayers X: Terminal Aftermath: Vengance of the Slayer Bundle", "price": "2.31", "flag": "🇹 🇷", "date": "01.06", "status": " GP" },
  { "name": "IN-VERT", "price": "0.17", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "INDIE BUNDLE: Shiness and Seasons after Fall", "price": "0.42", "flag": "🇹🇷", "date": "02.07", "status": " GP" },
  { "name": "INSIDE & LIMBO Bundle", "price": "3.53", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "INVECTOR: RHYTHM GALAXY", "price": "1.62", "flag": "🇹🇷", "date": "02.07", "status": " GP" },
  { "name": "Immortality", "price": "0.85", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Immortals Fenyx Rising™ Gold Edition", "price": "35.19", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "Immortals of Aveum™ Deluxe Edition", "price": "29.66", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "Injection π23 'Ars regia'", "price": "1.2", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Injection π23 'No Name, No Number'", "price": "0.48", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Injustice™ 2 - Legendary Edition", "price": "5.16", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Insurgency: Sandstorm - Gold Edition", "price": "38.83", "flag": "🇹🇷", "date": "16.01", "status": " GP" },
  { "name": "Insurgency: Sandstorm - Ultimate Edition", "price": "46.11", "flag": "🇹🇷", "date": "16.01", "status": " GP" },
  { "name": "Iris and the Giant", "price": "2.26", "flag": "🇹🇷", "date": "02.07", "status": " GP" },
  { "name": "Isonzo: Collector's Edition", "price": "4.13", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Isonzo: Deluxe Edition", "price": "2.76", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Isonzo: Ultimate Edition", "price": "54.16", "flag": "🇯🇵", "date": "16.06", "status": " GP" },
  { "name": "It's Kooky", "price": "0.22", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Jack Dragon and the Stone of Peace", "price": "0.17", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Jorel’s Brother and The Most Important Game of the Galaxy Complete Edition", "price": "1.29", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "Jujutsu Kaisen Cursed Clash Deluxe Edition", "price": "34.11", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Jurassic World Evolution 2: Deluxe Edition", "price": "10.27", "flag": "🇪🇬", "date": "16.05", "status": " GP" },
  { "name": "Jurassic World Evolution 2: Dominion Bundle", "price": "11.76", "flag": "🇪🇬", "date": "16.05", "status": " GP" },
  { "name": "Jurassic World Evolution: Dinosaur Collection", "price": "0.37", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Just Dance 2018", "price": "0.0", "flag": "🇪🇬", "date": "", "status": "" },
  { "name": "Kaiju Wars", "price": "0.68", "flag": "🇹🇷", "date": "02.07", "status": " GP" },
  { "name": "Kao the Kangaroo A Well Good Bundle", "price": "3.07", "flag": "🇹🇷", "date": "02.07", "status": " GP" },
  { "name": "Killer Frequency", "price": "2.04", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "Killing Floor 2 - Ultimate Edition", "price": "9.48", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Killing Floor 2", "price": "0.2", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Kraken Academy!!", "price": "0.47", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Kraken Odyssey", "price": "0.9", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "L.A. Noire", "price": "3.03", "flag": "🇹🇷", "date": "09.07", "status": " GP" },
  { "name": "LEGO® 2K Drive Awesome Edition", "price": "37.3", "flag": "🇰🇷", "date": "01.01", "status": " GP" },
  { "name": "LEGO® 2K Drive Awesome Rivals Edition", "price": "54.58", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "LEGO® Star Wars™: The Skywalker Saga Galactic Edition", "price": "11.76", "flag": "🇪🇬", "date": "01.05", "status": " GP" },
  { "name": "LEGO® Star Wars™:The Skywalker Saga Deluxe Edition", "price": "10.27", "flag": "🇪🇬", "date": "01.05", "status": " GP" },
  { "name": "Lab Crisis (for Windows 10)", "price": "0.28", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Lab Crisis", "price": "0.28", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Last Night of Winter", "price": "0.7", "flag": "🇹🇷", "date": "27.06", "status": "" },
  { "name": "Later Daters", "price": "0.76", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Let's Build a Zoo & Dinosaur DLC Bundle", "price": "1.85", "flag": "🇹🇷", "date": "01.10", "status": " GP" },
  { "name": "Let's Build a Zoo: Aquarium Odyssey Bundle", "price": "1.85", "flag": "🇹🇷", "date": "01.10", "status": " GP" },
  { "name": "Let's Build a Zoo: Ultimate Bundle", "price": "2.34", "flag": "🇹🇷", "date": "01.10", "status": " GP" },
  { "name": "Lies of P Digital Deluxe Edition", "price": "9.54", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Light & Dark Bundle", "price": "3.92", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Like a Dragon Gaiden: The Man Who Erased His Name Deluxe Edition", "price": "8.12", "flag": "🇪🇬", "date": "16.11", "status": " GP" },
  { "name": "Little Mouse's Encyclopedia", "price": "0.22", "flag": "🇹🇷", "date": "02.07", "status": " GP" },
  { "name": "Little Nightmares Complete Edition", "price": "3.41", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Loco Parentis", "price": "0.48", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Lonely Mountains: Downhill - Eldfjall Island", "price": "1.9", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "Lonesome Village", "price": "1.57", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "Lord Winklebottom Investigates", "price": "0.98", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Lords of the Fallen Deluxe Edition", "price": "10.91", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Lost Chiko 2", "price": "0.34", "flag": "🇹🇷", "date": "27.06", "status": "" },
  { "name": "Lost Islands", "price": "3.2", "flag": "🇳🇬", "date": "09.07", "status": " GP" },
  { "name": "Lost Snowmen (Windows)", "price": "0.28", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Lost Snowmen", "price": "0.28", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Lost Words: Beyond the Page", "price": "0.33", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Lovecraftian Bundle", "price": "1.64", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "Luxury Garden Bundle", "price": "4.13", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "MADiSON", "price": "1.84", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "MEGALAN 11", "price": "0.44", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "METAL GEAR SOLID - Master Collection Version", "price": "5.34", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "METAL GEAR SOLID 2: Sons of Liberty - Master Collection Version", "price": "5.34", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "METAL GEAR SOLID 3: Snake Eater - Master Collection Version", "price": "5.34", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "METAL GEAR SOLID V: THE DEFINITIVE EXPERIENCE", "price": "2.52", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "METAL GEAR SOLID V: THE PHANTOM PAIN", "price": "2.73", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "METAL GEAR SOLID: MASTER COLLECTION Vol.1", "price": "15.78", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "METAL GEAR SURVIVE", "price": "3.0", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "MLB® The Show™ 24 - Digital Deluxe Edition", "price": "24.27", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "MLB® The Show™ 24 - MVP Edition", "price": "20.63", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "MLB® The Show™ 24 - Xbox One Standard Edition", "price": "14.56", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "MLB® The Show™ 24 - Xbox Series X|S Standard Edition", "price": "35.19", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Madden NFL 19", "price": "28.92", "flag": "🇨🇴", "date": "30.12", "status": "" },
  { "name": "Madden NFL 24 Xbox Series X|S & Xbox One", "price": "16.18", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "Mafia II: Definitive Edition", "price": "1.99", "flag": "🇹🇷", "date": "09.07", "status": " GP" },
  { "name": "Mafia III: Definitive Edition", "price": "1.99", "flag": "🇹🇷", "date": "09.07", "status": " GP" },
  { "name": "Maneater Apex Edition", "price": "1.71", "flag": "🇹🇷", "date": "09.07", "status": " GP" },
  { "name": "Maneater", "price": "1.21", "flag": "🇹🇷", "date": "09.07", "status": " GP" },
  { "name": "Mark of the Ninja: Remastered", "price": "0.37", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Maximum Football 2019", "price": "0.89", "flag": "🇳🇿", "date": "02.07", "status": "" },
  { "name": "Maximum Football 2020", "price": "2.69", "flag": "🇳🇿", "date": "02.07", "status": "" },
  { "name": "MechWarrior 5: Mercenaries - JumpShip Edition", "price": "4.87", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Metal Gear Solid V: Ground Zeroes", "price": "1.05", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.0", "flag": "🇺🇸", "date": "30.11", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.0", "flag": "🇺🇸", "date": "30.11", "status": "" },
  { "name": "Microsoft Flight Simulator Deluxe 40th Anniversary Edition", "price": "12.28", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Microsoft Flight Simulator Premium Deluxe 40th Anniversar...", "price": "16.33", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Middle-earth™: Shadow of War™ Definitive Edition", "price": "5.31", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Middle-earth™: The Shadow Bundle", "price": "14.54", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Milky Way Prince - The Vampire Star", "price": "0.64", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Mimi the Cat: Mimi's Scratcher", "price": "0.34", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle - Windows 10", "price": "1.54", "flag": "🇹🇷", "date": "27.07", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle", "price": "1.54", "flag": "🇹🇷", "date": "27.07", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate Edition for Windows", "price": "5.88", "flag": "🇪🇬", "date": "27.07", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate Edition", "price": "5.49", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Minecraft Legends Deluxe Edition", "price": "6.86", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Minecraft: Deluxe Collection", "price": "4.11", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Monopoly Madness", "price": "1.9", "flag": "🇹🇷", "date": "02.07", "status": " GP" },
  { "name": "Monster Hunter Rise + Sunbreak Deluxe", "price": "33.98", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "Monster Hunter Rise + Sunbreak", "price": "29.12", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "Monster Hunter Rise Deluxe Edition", "price": "19.08", "flag": "🇪🇬", "date": "01.04", "status": " GP" },
  { "name": "Moonglow Bay", "price": "1.08", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Moonlighter: Complete Edition", "price": "1.64", "flag": "🇹🇷", "date": "01.12", "status": " GP" },
  { "name": "Moons of Madness", "price": "0.77", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Moonshine Inc. + Bio Inc. Redemption - Drinking Problem Bundle", "price": "5.32", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Mortal Kombat 11 Ultimate + Injustice 2 Leg. Edition Bundle", "price": "20.85", "flag": "🇹🇷", "date": "16.12", "status": " GP" },
  { "name": "Mortal Kombat 11 Ultimate", "price": "8.87", "flag": "🇪🇬", "date": "01.07", "status": " GP" },
  { "name": "Mortal Kombat 11", "price": "1.38", "flag": "🇪🇬", "date": "01.07", "status": "" },
  { "name": "Mortal Kombat X", "price": "1.5", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "MotoGP™15", "price": "0.91", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "MotoGP™21 - Xbox Series X|S", "price": "3.76", "flag": "🇰🇷", "date": "02.07", "status": "" },
  { "name": "MotoGP™21", "price": "3.76", "flag": "🇰🇷", "date": "02.07", "status": "" },
  { "name": "Mount & Blade II: Bannerlord Digital Deluxe Edition", "price": "8.16", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Murder House", "price": "0.94", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "My Aunt is a Witch", "price": "0.35", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "My Friend Peppa Pig - Complete Edition", "price": "6.63", "flag": "🇪🇬", "date": "16.07", "status": " GP" },
  { "name": "My Time at Portia Deluxe Edition", "price": "5.8", "flag": "🇹🇷", "date": "01.10", "status": " GP" },
  { "name": "My Time at Sandrock Deluxe Edition", "price": "3.43", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "NBA 2K24 Baller Edition", "price": "42.45", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "NBA 2K24 Black Mamba Edition", "price": "46.11", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "NHL® 24 X-Factor Edition Xbox One & Xbox Series X|S", "price": "23.37", "flag": "🇮🇳", "date": "09.07", "status": "" },
  { "name": "NHL® 24 Xbox One", "price": "14.38", "flag": "🇮🇳", "date": "09.07", "status": "" },
  { "name": "NHL® 24 Xbox Series X|S", "price": "16.18", "flag": "🇮🇳", "date": "09.07", "status": "" },
  { "name": "NINJA GAIDEN: Master Collection Deluxe Edition", "price": "6.53", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Necropolis", "price": "4.06", "flag": "🇭🇺", "date": "02.07", "status": "" },
  { "name": "Neon Abyss Deluxe Edition", "price": "1.91", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Newfound Courage", "price": "0.19", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Nexoria: Dungeon Rogue Heroes", "price": "0.15", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Night Reverie", "price": "1.52", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "NightGhast", "price": "0.34", "flag": "🇹🇷", "date": "06.07", "status": "" },
  { "name": "Nine Noir Lives", "price": "1.37", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.21", "flag": "🇹🇷", "date": "30.05", "status": "" },
  { "name": "No Longer Home", "price": "0.52", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "27.45", "flag": "🇧🇷", "date": "16.03", "status": " GP" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "29.23", "flag": "🇮🇳", "date": "16.03", "status": " GP" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "4.13", "flag": "🇹🇷", "date": "16.03", "status": " GP" },
  { "name": "Nordic Adventure Bundle", "price": "14.37", "flag": "🇮🇳", "date": "01.07", "status": " GP" },
  { "name": "OCTOPATH TRAVELER + OCTOPATH TRAVELER II Bundle", "price": "41.38", "flag": "🇺🇦", "date": "05.07", "status": " GP" },
  { "name": "Onsen Master", "price": "0.46", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Orcs Must Die! 3 Bundle", "price": "2.76", "flag": "🇹🇷", "date": "16.04", "status": " GP" },
  { "name": "Ori: The Collection", "price": "6.86", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Outcast - A New Beginning", "price": "36.17", "flag": "🇮🇳", "date": "09.07", "status": " GP" },
  { "name": "Overcooked! 2 - Gourmet Edition", "price": "2.18", "flag": "🇹🇷", "date": "16.12", "status": " GP" },
  { "name": "Overcooked! 2", "price": "1.51", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Override 2: Super Mech League", "price": "0.66", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "PAW Patrol: Grand Prix - Complete Edition", "price": "15.78", "flag": "🇹🇷", "date": "01.10", "status": " GP" },
  { "name": "PAYDAY 3: Gold Edition", "price": "6.14", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "PAYDAY 3: Silver Edition", "price": "4.77", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "Paladins Feathered Fiend Pack", "price": "4.42", "flag": "🇮🇳", "date": "02.07", "status": "" },
  { "name": "Paladins Interstellar Stallion Pack", "price": "4.42", "flag": "🇮🇳", "date": "02.07", "status": "" },
  { "name": "Paladins Season Pass 2022", "price": "10.28", "flag": "🇮🇳", "date": "02.07", "status": "" },
  { "name": "Paladins Sky Whale Pack", "price": "4.42", "flag": "🇮🇳", "date": "02.07", "status": "" },
  { "name": "Paleo Pines", "price": "8.13", "flag": "🇺🇦", "date": "02.07", "status": "" },
  { "name": "Paper Ghost Stories: 7PM", "price": "0.17", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Party Animals Deluxe Edition", "price": "4.11", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Payday 3: Gold Edition Upgrade", "price": "8.16", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Persona 5 Tactica: Digital Deluxe Edition", "price": "11.76", "flag": "🇪🇬", "date": "16.11", "status": " GP" },
  { "name": "Pets Bundle", "price": "3.09", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Phoenix Point: Behemoth Edition", "price": "2.06", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Phoenix Wright: Ace Attorney Trilogy", "price": "6.01", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Planet of Lana", "price": "1.57", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "Pocket Arcade Story", "price": "0.92", "flag": "🇹🇷", "date": "26.06", "status": "" },
  { "name": "Pogo Stick Champion", "price": "2.58", "flag": "🇮🇳", "date": "06.07", "status": "" },
  { "name": "Power Racing Bundle 2", "price": "0.45", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Princess Farmer", "price": "1.12", "flag": "🇪🇬", "date": "02.07", "status": "" },
  { "name": "Prison of Illusion (Xbox Series X|S)", "price": "0.34", "flag": "🇹🇷", "date": "27.06", "status": "" },
  { "name": "Pushy and Pully in Blockland", "price": "0.51", "flag": "🇹🇷", "date": "02.07", "status": " GP" },
  { "name": "Q-YO Blaster", "price": "0.09", "flag": "🇹🇷", "date": "02.07", "status": " GP" },
  { "name": "Quadroids", "price": "0.72", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "RACCOON CITY EDITION", "price": "9.1", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "RESIDENT EVIL 2 Deluxe Edition", "price": "7.02", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "RESIDENT EVIL 7 biohazard Gold Edition", "price": "9.71", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Rabbids®: Party of Legends", "price": "3.19", "flag": "🇹🇷", "date": "02.07", "status": " GP" },
  { "name": "Rabio", "price": "0.25", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Railbreak", "price": "6.59", "flag": "🇮🇳", "date": "02.07", "status": "" },
  { "name": "Rayland", "price": "1.61", "flag": "🇮🇳", "date": "02.07", "status": "" },
  { "name": "ReCore", "price": "2.74", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "ReactorX (for Windows 10)", "price": "0.21", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "ReactorX 2", "price": "0.32", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "ReactorX", "price": "0.21", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Red Dead Redemption 2: Ultimate Edition", "price": "4.12", "flag": "🇳🇬", "date": "09.07", "status": " GP" },
  { "name": "Regular Moonstone Pack -- 2,500", "price": "2.55", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Remnant II - Deluxe Edition", "price": "8.87", "flag": "🇪🇬", "date": "01.06", "status": " GP" },
  { "name": "Remnant II - Ultimate Edition", "price": "10.27", "flag": "🇪🇬", "date": "01.06", "status": " GP" },
  { "name": "Remnant: From the Ashes - Complete Edition", "price": "3.43", "flag": "🇹🇷", "date": "01.12", "status": " GP" },
  { "name": "Remothered: Broken Porcelain", "price": "0.41", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Remothered: Tormented Fathers", "price": "0.3", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Resetail", "price": "0.3", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Resident Evil 4 Gold Edition", "price": "21.82", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Resident Evil 7 Gold Edition & Village Gold Edition", "price": "19.4", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Resident Evil Revelations 1 & 2 Bundle", "price": "4.09", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Resident Evil Triple Pack", "price": "8.99", "flag": "🇮🇳", "date": "02.07", "status": "" },
  { "name": "Resident Evil Village Gold Edition", "price": "12.13", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Resident Evil: Deluxe Origins Bundle", "price": "6.0", "flag": "🇧🇷", "date": "02.07", "status": "" },
  { "name": "Ride 2", "price": "1.67", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Riders Republic™ Complete Edition", "price": "15.93", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Riders Republic™ Skate Edition", "price": "9.1", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Rise of the Tomb Raider: 20 Year Celebration", "price": "12.66", "flag": "🇹🇷", "date": "01.12", "status": " GP" },
  { "name": "Rock of Ages 3: Make & Break", "price": "0.41", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Rogue Company: Living Doll Pack", "price": "3.95", "flag": "🇮🇳", "date": "02.07", "status": "" },
  { "name": "Rogue Company: Radioactive Revenant Pack", "price": "4.42", "flag": "🇮🇳", "date": "02.07", "status": "" },
  { "name": "Roxy Raccoon's Pinball Panic", "price": "5.26", "flag": "🇮🇳", "date": "27.06", "status": "" },
  { "name": "Rustler", "price": "0.66", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Rusty Spout Rescue Adventure", "price": "0.55", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "S.T.A.L.K.E.R.: Call of Prypiat", "price": "1.92", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "S.T.A.L.K.E.R.: Clear Sky", "price": "1.92", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "S.T.A.L.K.E.R.: Legends of the Zone Trilogy", "price": "3.84", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "S.T.A.L.K.E.R.: Shadow of Chornobyl", "price": "1.92", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "SCARLET NEXUS Deluxe Edition", "price": "2.12", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "SEUM: Speedrunners from Hell", "price": "0.12", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "SMITE Legacy Pass", "price": "11.72", "flag": "🇮🇳", "date": "02.07", "status": "" },
  { "name": "SOMA", "price": "1.1", "flag": "🇪🇬", "date": "02.07", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "12.78", "flag": "🇹🇷", "date": "31.12", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "8.45", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "SUPER BOMBERMAN R 2", "price": "8.62", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "SUPER CRAZY RHYTHM CASTLE", "price": "6.72", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "SUPERHOT ONE OF US BUNDLE", "price": "2.15", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "Saga of Sins", "price": "1.19", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Sally Face", "price": "1.02", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Sea of Thieves: 2024 Deluxe Edition", "price": "6.53", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Sea of Thieves: 2024 Premium Edition", "price": "7.77", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Sentry Paragon", "price": "0.3", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Shadowblade Odyssey", "price": "0.08", "flag": "🇹🇷", "date": "08.07", "status": "" },
  { "name": "Sherlock Holmes Chapter One", "price": "1.23", "flag": "🇳🇬", "date": "09.07", "status": " GP" },
  { "name": "Sherlock Holmes The Awakened", "price": "1.92", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "Sherlock Purr 2", "price": "0.44", "flag": "🇹🇷", "date": "02.07", "status": " GP" },
  { "name": "Shiro", "price": "0.23", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Shootvaders The Beginning", "price": "2.27", "flag": "🇮🇳", "date": "02.07", "status": "" },
  { "name": "Silver Chains", "price": "0.22", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Skator Gator 3D", "price": "0.45", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "Skelattack", "price": "0.64", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Skeljump", "price": "0.3", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Skull and Bones Deluxe Edition", "price": "24.27", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Skull and Bones", "price": "21.99", "flag": "🇹🇷", "date": "09.07", "status": " GP" },
  { "name": "Skyrim Anniversary Edition + Fallout 4 G.O.T.Y Bundle", "price": "19.42", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Skyrim Anniversary Edition + Fallout 4 G.O.T.Y Bundle", "price": "8.01", "flag": "🇹🇷", "date": "09.07", "status": " GP" },
  { "name": "Small Moonstone Pack -- 1,200", "price": "1.31", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Sniper Elite 4", "price": "0.76", "flag": "🇹🇷", "date": "09.07", "status": " GP" },
  { "name": "Sniper Elite 5 Complete Edition", "price": "2.84", "flag": "🇹🇷", "date": "09.07", "status": " GP" },
  { "name": "Sniper Elite 5 Deluxe Edition", "price": "12.28", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "SnowRunner - 1-Anniversary Edition", "price": "4.55", "flag": "🇹🇷", "date": "02.07", "status": " GP" },
  { "name": "SnowRunner - 2-Year Anniversary Edition", "price": "31.55", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "SnowRunner - 3-Year Anniversary Edition", "price": "38.83", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "SnowRunner - 4-Year Anniversary Edition", "price": "46.11", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "SokoBunny", "price": "0.21", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Sokobalien", "price": "0.34", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Solace State", "price": "1.19", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Solasta: Crown of the Magister", "price": "2.02", "flag": "🇹🇷", "date": "09.07", "status": " GP" },
  { "name": "Solasta: Lightbringers Edition", "price": "2.84", "flag": "🇹🇷", "date": "09.07", "status": " GP" },
  { "name": "Somerville", "price": "1.26", "flag": "🇳🇬", "date": "02.07", "status": " GP" },
  { "name": "Soulstice", "price": "1.04", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Soulstice: Deluxe Edition", "price": "1.29", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Space Engineers", "price": "0.85", "flag": "🇹🇷", "date": "09.07", "status": " GP" },
  { "name": "Space Engineers: Ultimate Edition 2023", "price": "5.1", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "Sparkle Bundle", "price": "1.0", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Starfield Premium Edition Upgrade", "price": "5.78", "flag": "🇪🇬", "date": "05.09", "status": " GP" },
  { "name": "Starfield Premium Edition", "price": "14.75", "flag": "🇪🇬", "date": "30.12", "status": " GP" },
  { "name": "Startup Company Console Edition", "price": "0.88", "flag": "🇹🇷", "date": "02.07", "status": " GP" },
  { "name": "Stay Out of the House", "price": "0.93", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Steam Tactics", "price": "0.35", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "SteamWorld Build & Dig Bundle", "price": "4.77", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "SteamWorld Build Deluxe Edition", "price": "4.51", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Stellaris: Console Edition - Deluxe Edition", "price": "4.16", "flag": "🇹🇷", "date": "16.10", "status": " GP" },
  { "name": "Strange Brigade", "price": "0.33", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Strategic Mind: Spirit of Liberty", "price": "5.1", "flag": "🇹🇷", "date": "02.07", "status": " GP" },
  { "name": "Summertime Madness (Xbox Series X|S)", "price": "0.64", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Sunset Overdrive Deluxe Edition", "price": "1.68", "flag": "🇹🇷", "date": "31.05", "status": " GP" },
  { "name": "Super Space Club", "price": "1.03", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Synergia - A Cyberpunk Thriller Visual Novel", "price": "0.78", "flag": "🇳🇬", "date": "02.07", "status": " GP" },
  { "name": "THE HOUSE OF THE DEAD: Remake", "price": "0.54", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "TT Isle of Man: Ride on the Edge 3", "price": "13.35", "flag": "🇹🇷", "date": "09.07", "status": " GP" },
  { "name": "Taimumari: Complete Edition", "price": "0.17", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Tales of Arise - Beyond The Dawn Ultimate Edition", "price": "43.66", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Tales of Arise - Beyond the Dawn Deluxe Edition", "price": "36.38", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Tales of Arise - Beyond the Dawn Edition", "price": "26.67", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Techtonica (Game Preview)", "price": "1.68", "flag": "🇹🇷", "date": "09.07", "status": " GP" },
  { "name": "Teenage Mutant Ninja Turtles: Shredder's Revenge - Dimension Shellshock", "price": "2.06", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Teenage Mutant Ninja Turtles: The Cowabunga Collection", "price": "4.9", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Tell Me Why: Chapters 1-3", "price": "0.0", "flag": "🇺🇸", "date": "01.07", "status": "" },
  { "name": "Tenderfoot Tactics", "price": "0.77", "flag": "🇹🇷", "date": "09.07", "status": " GP" },
  { "name": "Terraformers + Tin Can - To infinity, and beyond Complete bundle!", "price": "8.12", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Terraformers: New Frontiers Bundle", "price": "6.05", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Teslagrad 2", "price": "1.73", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Teslagrad Power Pack Edition", "price": "2.59", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Teslagrad Remastered", "price": "0.86", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "The Addams Family: Mansion Mayhem", "price": "4.13", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "The Bard's Tale Trilogy", "price": "0.76", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "The Beast Inside (Console Version)", "price": "0.32", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "The Callisto Protocol™ for Xbox One – Digital Deluxe Edition", "price": "17.6", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "The Callisto Protocol™ for Xbox Series X|S – Digital Delu...", "price": "6.11", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "The Chant", "price": "2.52", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "The Crew™ Motorfest Standard Edition - Cross-Gen Bundle", "price": "21.99", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "The Dark Pictures Anthology: Little Hope", "price": "2.72", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "The Dark Pictures Anthology: Man Of Medan", "price": "2.72", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "The Dark Pictures Anthology: Season One", "price": "9.33", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "The Division 2 - Warlords of New York Edition", "price": "7.58", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "The Elder Scrolls III: Morrowind", "price": "1.18", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "The Elder Scrolls Online Collection: Gold Road", "price": "31.55", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Elder Scrolls Online Deluxe Collection: Gold Road", "price": "42.47", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Elder Scrolls V: Skyrim Anniversary Edition", "price": "11.65", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Escapists & The Escapists: The Walking Dead", "price": "0.54", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "The Escapists: Supermax Edition", "price": "1.86", "flag": "🇹🇷", "date": "29.04", "status": "" },
  { "name": "The Escapists: The Walking Dead", "price": "0.44", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "The Evil Within (PC)", "price": "0.55", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "The Evil Within Digital Bundle", "price": "2.46", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "The Evil Within", "price": "1.36", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "The Evil Within® 2", "price": "1.09", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "The Explorer Of Night", "price": "0.19", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "The Inheritance of Crimson Manor", "price": "0.85", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "The Inquisitor", "price": "20.84", "flag": "🇮🇳", "date": "02.07", "status": "" },
  { "name": "The Jackbox Party Quadpack", "price": "6.48", "flag": "🇹🇷", "date": "31.12", "status": "" },
  { "name": "The Lamplighters League - Deluxe Edition", "price": "3.76", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "The Last Kids on Earth and the Staff of Doom", "price": "2.2", "flag": "🇪🇬", "date": "02.07", "status": "" },
  { "name": "The Outer Worlds: Board-Approved Bundle", "price": "8.18", "flag": "🇹🇷", "date": "09.07", "status": " GP" },
  { "name": "The Park", "price": "0.41", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "The Quarry - Deluxe Edition", "price": "19.15", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "The Sinking City Xbox Series X|S", "price": "1.03", "flag": "🇳🇬", "date": "09.07", "status": " GP" },
  { "name": "The Sinking City", "price": "1.03", "flag": "🇳🇬", "date": "09.07", "status": " GP" },
  { "name": "The Skylia Prophecy", "price": "0.64", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "The Vale: Shadow of the Crown", "price": "1.01", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "The Walking Dead: A New Frontier - The Complete Season (Episodes 1-5)", "price": "0.84", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "The Walking Dead: A New Frontier", "price": "1.03", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "The Walking Dead: Michonne - The Complete Season", "price": "0.41", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "The Walking Dead: Michonne", "price": "0.34", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "The Walking Dead: The Final Season - The Complete Season", "price": "0.69", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "The Wolf Among Us", "price": "0.84", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "The end is nahual: If I may say so", "price": "0.22", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Them's Fightin' Herds", "price": "0.6", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Them's Fightin' Herds: Deluxe Edition", "price": "1.21", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "This Bed We Made", "price": "1.4", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "This War of Mine - Complete Edition", "price": "1.85", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Thymesia", "price": "3.78", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Times and Galaxy", "price": "1.54", "flag": "🇹🇷", "date": "05.07", "status": "" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Ultimate Edition", "price": "5.76", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint", "price": "2.73", "flag": "🇹🇷", "date": "09.07", "status": " GP" },
  { "name": "Tom Clancy's Rainbow Six® Extraction United Bundle", "price": "14.56", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Tom Clancy's Rainbow Six® Siege Deluxe Edition", "price": "5.26", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands - Standard Edition", "price": "1.64", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Ultimate Edition", "price": "12.84", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Tom Clancy’s Rainbow Six Siege Ultimate Edition", "price": "38.83", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Tomb Raider: Definitive Survivor Trilogy", "price": "21.11", "flag": "🇹🇷", "date": "16.04", "status": " GP" },
  { "name": "Toodee And Topdee", "price": "1.92", "flag": "🇳🇬", "date": "02.07", "status": " GP" },
  { "name": "Tormented Souls", "price": "0.77", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Totally Reliable Delivery Service Deluxe Edition", "price": "1.64", "flag": "🇹🇷", "date": "01.12", "status": " GP" },
  { "name": "Tourist Trap", "price": "0.7", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Trailmakers - Space Upgrade", "price": "2.28", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers Deluxe Edition", "price": "3.08", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers: Rescue Bundle", "price": "2.61", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers: Rescue Deluxe Bundle", "price": "3.31", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Train Sim World® 4: Austrian Regional Edition", "price": "3.97", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Train Sim World® 4: Deluxe Edition", "price": "6.63", "flag": "🇪🇬", "date": "01.08", "status": " GP" },
  { "name": "Train Sim World® 4: Flying Scotsman Centenary Edition", "price": "6.63", "flag": "🇪🇬", "date": "01.08", "status": " GP" },
  { "name": "Train Sim World® 4: German Regional Edition", "price": "3.97", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Train Sim World® 4: Special Edition", "price": "12.51", "flag": "🇪🇬", "date": "01.08", "status": " GP" },
  { "name": "Train Sim World® 4: UK Regional Edition", "price": "3.97", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Train Sim World® 4: USA Regional Edition", "price": "3.97", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Treachery in Beatdown City: Ultra Remix", "price": "1.29", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "Trepang2", "price": "10.92", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Tunche", "price": "1.01", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Turbo Golf Racing: Deep Space Bundle", "price": "1.09", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Turbo Golf Racing: Ultimate Bundle", "price": "1.3", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Turnip Boy Commits Tax Evasion", "price": "0.51", "flag": "🇳🇬", "date": "02.07", "status": " GP" },
  { "name": "Turnip Boy Robs a Bank Pre-Release", "price": "1.03", "flag": "🇹🇷", "date": "15.07", "status": " GP" },
  { "name": "UFC® 5 Deluxe Edition", "price": "37.59", "flag": "🇰🇷", "date": "09.07", "status": "" },
  { "name": "UFC® 5", "price": "29.66", "flag": "🇮🇳", "date": "09.07", "status": "" },
  { "name": "UNO® Ultimate Edition", "price": "1.08", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Ugly", "price": "1.37", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "Under Leaves", "price": "0.38", "flag": "🇹🇷", "date": "02.07", "status": " GP" },
  { "name": "Unichrome: A 1-bit Unicorn Adventure", "price": "0.26", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "1.25", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "VAMPYR", "price": "1.1", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "Valheim (Game Preview)", "price": "1.37", "flag": "🇳🇬", "date": "09.07", "status": " GP" },
  { "name": "ValiDate: Struggling Singles in your Area", "price": "0.84", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Valkyria Chronicles 4 DLC Bundle", "price": "0.98", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Vampyr", "price": "1.15", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Venba", "price": "0.97", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Vera Blanc: Supernatural Mysteries", "price": "3.92", "flag": "🇮🇳", "date": "10.07", "status": "" },
  { "name": "Vermintide - Digital Value Pack", "price": "2.67", "flag": "🇹🇷", "date": "07.03", "status": "" },
  { "name": "Vigour", "price": "0.3", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Vikings - Wolves of Midgard", "price": "0.85", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Virgo Versus The Zodiac", "price": "1.7", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "Volgarr the Viking I & II Bundle", "price": "1.73", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Volgarr the Viking II", "price": "1.37", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Volley Pals", "price": "0.36", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "W.A.R.P.", "price": "2.02", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "WATCH_DOGS™ COMPLETE EDITION", "price": "0.85", "flag": "🇹🇷", "date": "02.07", "status": " GP" },
  { "name": "WRC 2023", "price": "10.53", "flag": "🇯🇵", "date": "09.07", "status": "" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "9.56", "flag": "🇹🇷", "date": "30.08", "status": "" },
  { "name": "Walden, a game", "price": "0.51", "flag": "🇹🇷", "date": "09.07", "status": " GP" },
  { "name": "Warhammer 40,000: Boltgun - Forges of Corruption Edition", "price": "10.74", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "Warhammer 40,000: Darktide - Imperial Edition", "price": "9.8", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Wasteland 3 (PC) Colorado Collection", "price": "6.86", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Wasteland 3 Colorado Collection", "price": "10.65", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "Watch Dogs: Legion - Deluxe Edition", "price": "3.07", "flag": "🇹🇷", "date": "09.07", "status": " GP" },
  { "name": "Watch Dogs®2 - Deluxe Edition", "price": "31.16", "flag": "🇧🇷", "date": "16.07", "status": " GP" },
  { "name": "Watch Dogs®2 - Gold Edition", "price": "49.75", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Watch Dogs®: Legion", "price": "2.73", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Wayward Strand", "price": "1.83", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "We Happy Few Digital Deluxe", "price": "7.71", "flag": "🇹🇷", "date": "16.01", "status": " GP" },
  { "name": "Webgeon Speedrun Edition", "price": "0.3", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Weedcraft Inc + Heliborne - Fly High Bundle", "price": "6.71", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Weedcraft Inc + Legend of Keepers - Underworld Business Bundle", "price": "6.8", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "When the Past was Around", "price": "0.36", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "White Day: A Labyrinth Named School", "price": "1.55", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Whitestone", "price": "0.68", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Wild Bastards", "price": "14.35", "flag": "🇺🇦", "date": "12.09", "status": "" },
  { "name": "Wild Eclipse", "price": "0.0", "flag": "🇺🇸", "date": "30.06", "status": "" },
  { "name": "Willy's Wonderland - The Game", "price": "0.61", "flag": "🇳🇬", "date": "28.06", "status": "" },
  { "name": "Wired Italian Adventure Bundle", "price": "2.06", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Witchy Life Story", "price": "1.19", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Withering Rooms", "price": "1.54", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Wo Long: Fallen Dynasty Complete Edition", "price": "30.36", "flag": "🇺🇦", "date": "01.03", "status": " GP" },
  { "name": "Wolfenstein: Youngblood Deluxe Edition", "price": "5.31", "flag": "🇹🇷", "date": "17.02", "status": " GP" },
  { "name": "Wolfenstein® II: The New Colossus™ Digital Deluxe Edition", "price": "7.28", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "World War Z: Aftermath - Deluxe Edition", "price": "15.78", "flag": "🇹🇷", "date": "01.12", "status": " GP" },
  { "name": "Wreckfest Complete Edition", "price": "19.88", "flag": "🇨🇱", "date": "16.11", "status": " GP" },
  { "name": "XCOM® 2 Digital Deluxe Edition", "price": "0.96", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Yakuza: Like a Dragon Hero Edition", "price": "11.03", "flag": "🇯🇵", "date": "01.04", "status": " GP" },
  { "name": "Yakuza: Like a Dragon Legendary Hero Edition", "price": "14.9", "flag": "🇯🇵", "date": "01.04", "status": " GP" },
  { "name": "Yello Adventures", "price": "0.36", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Yoku's Island Express", "price": "0.9", "flag": "🇹🇷", "date": "09.07", "status": " GP" },
  { "name": "Yooka-Laylee and the Impossible Lair", "price": "0.52", "flag": "🇹🇷", "date": "09.07", "status": " GP" },
  { "name": "Yu-Gi-Oh! Legacy of the Duelist : Link Evolution", "price": "1.36", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Yu-Gi-Oh! Legacy of the Duelist", "price": "0.44", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "ZOMBI", "price": "0.28", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "eFootball™ 2024: Leo Messi Edition", "price": "4.31", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Master Hunter Bundle", "price": "4.13", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "ザ・ハウス・オブ・ザ・デッド：リメイク", "price": "4.07", "flag": "🇯🇵", "date": "02.07", "status": "" },
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
  arg_output2.innerHTML = floor(finishRes.toFixed()) + 50
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
    a = 70
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
  const res = newPrice * usd + 50
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



