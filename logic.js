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
  { "name": "#Blud", "price": "2.53", "flag": "🇳🇬", "date": "05.11", "status": " GP" },
  { "name": "1000 Ancient Coins - Hidden Trove of the Ancients", "price": "1.64", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "150 Ancient Coins - Secret Stash of the Ancients", "price": "0.33", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "2550 Ancient Coins - Royal Treasury of the Ancients", "price": "3.77", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "30 Sport Games in 1", "price": "0.73", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "34 Sport Games - World Edition", "price": "9.39", "flag": "🇺🇦", "date": "05.11", "status": " GP" },
  { "name": "35MM", "price": "0.54", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "4250 Ancient Coins - Glittering Tribute of the Ancients", "price": "5.7", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "550 Ancient Coins - Lost Chest of the Ancients", "price": "0.97", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "A Little to the Left: Extra Tidy Bundle", "price": "3.41", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "A Memoir Blue", "price": "0.33", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "APFTU", "price": "0.37", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "ARCADE GAME SERIES 3-in-1 Pack", "price": "0.35", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "ASTRONEER: Evolution Edition", "price": "2.65", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Adam Wolfe Xbox", "price": "1.49", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Aero The Acro-Bat: Rascal Rival Revenge", "price": "3.08", "flag": "🇮🇳", "date": "16.11", "status": "" },
  { "name": "Aery - Dreamscape", "price": "0.42", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Age of Empires 25th Anniversary Collection", "price": "7.93", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Age of Empires II: Deluxe Definitive Edition Bundle", "price": "5.11", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Age of Empires: Definitive Collection", "price": "5.72", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Age of Mythology: Retold Premium Edition", "price": "26.2", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Age of Water - Gold Edition", "price": "17.29", "flag": "🇨🇴", "date": "15.11", "status": "" },
  { "name": "Age of Water - Silver Edition", "price": "13.78", "flag": "🇨🇴", "date": "15.11", "status": "" },
  { "name": "Age of Water", "price": "10.39", "flag": "🇨🇴", "date": "15.11", "status": "" },
  { "name": "Ailment & Endurance Bundle", "price": "0.62", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Aircraft Carrier Survival", "price": "0.82", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Akimbot", "price": "11.69", "flag": "🇨🇱", "date": "04.11", "status": "" },
  { "name": "Aliens: Fireteam Elite Into the Hive Edition", "price": "1.53", "flag": "🇳🇬", "date": "05.11", "status": " GP" },
  { "name": "Alisa Developer's Cut", "price": "1.73", "flag": "🇳🇬", "date": "05.11", "status": "" },
  { "name": "All You Need is Help Lively Friends Bundle", "price": "13.99", "flag": "🇺🇦", "date": "25.12", "status": " GP" },
  { "name": "All-Star Fruit Racing", "price": "0.13", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Alphadia Genesis 2", "price": "4.32", "flag": "🇯🇵", "date": "15.11", "status": "" },
  { "name": "Alphadia Genesis", "price": "4.32", "flag": "🇯🇵", "date": "15.11", "status": "" },
  { "name": "Alphadia Neo", "price": "5.19", "flag": "🇯🇵", "date": "15.11", "status": "" },
  { "name": "Ancient Phantasma", "price": "6.49", "flag": "🇯🇵", "date": "15.11", "status": "" },
  { "name": "Antarctica 88", "price": "0.3", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Arcade Paradise | High Score Edition", "price": "1.84", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Arise: A simple story", "price": "0.65", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Army of Ruin", "price": "0.49", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Ashen", "price": "0.83", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Ashen: Definitive Edition", "price": "1.52", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Aspire - Ina's Tale", "price": "0.31", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Assassin's Creed Antiquity Pack", "price": "45.59", "flag": "🇧🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed Legendary Collection", "price": "82.89", "flag": "🇧🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Bundle: Assassin's Creed® Valhalla, Ass...", "price": "37.3", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey - DELUXE EDITION", "price": "16.32", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey - GOLD EDITION", "price": "18.65", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey - ULTIMATE EDITION", "price": "21.56", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Origins - DELUXE EDITION", "price": "15.73", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Origins - GOLD EDITION", "price": "18.65", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Complete Edition", "price": "23.31", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Deluxe Edition", "price": "18.06", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Ragnarök Edition", "price": "13.99", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Assassin’s Creed® Valhalla + Immortals Fenyx Rising™ Bundle", "price": "58.27", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin’s Creed® Valhalla + Watch Dogs®: Legion Bundle", "price": "26.81", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Assault On Metaltron", "price": "0.09", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Asterix & Obelix Slap Them All! 2", "price": "12.49", "flag": "🇺🇸", "date": "05.11", "status": " GP" },
  { "name": "Asterix & Obelix Slap Them All!", "price": "2.39", "flag": "🇧🇷", "date": "05.11", "status": " GP" },
  { "name": "Asterix & Obelix XXL3: The Crystal Menhir", "price": "1.94", "flag": "🇧🇷", "date": "05.11", "status": " GP" },
  { "name": "Asterix & Obelix XXL: Romastered", "price": "1.94", "flag": "🇧🇷", "date": "05.11", "status": " GP" },
  { "name": "Asterix & Obelix XXXL : The Ram of Hibernia", "price": "6.36", "flag": "🇧🇷", "date": "05.11", "status": " GP" },
  { "name": "Astrune Academy", "price": "6.49", "flag": "🇯🇵", "date": "15.11", "status": "" },
  { "name": "Atama", "price": "0.67", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Atomic Heart - Gold Edition", "price": "20.4", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Attack of the Earthlings", "price": "0.6", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Awarded Platformer Bundle", "price": "1.16", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "BATTLETECH Mercenary Collection", "price": "5.94", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "BBQ Simulator: The Squad", "price": "0.54", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "BUTCHER", "price": "0.11", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Baby Storm", "price": "0.41", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Backpack Hero", "price": "1.92", "flag": "🇳🇬", "date": "05.11", "status": " GP" },
  { "name": "Backrooms: Partygoers", "price": "6.14", "flag": "🇧🇷", "date": "13.11", "status": "" },
  { "name": "Bang-On Balls: Chronicles", "price": "6.92", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Bard's Gold - X Edition", "price": "0.58", "flag": "🇹🇷", "date": "07.11", "status": "" },
  { "name": "Barista Simulator", "price": "1.07", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Batman: Arkham Knight Premium Edition", "price": "3.03", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Beach Buggy Racing 2: Hot Wheels™ Edition", "price": "0.49", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Beach Buggy Racing 2: Island Adventure", "price": "0.39", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Beach Buggy Racing", "price": "0.22", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Beat Souls", "price": "1.91", "flag": "🇧🇷", "date": "05.11", "status": " GP" },
  { "name": "Beholder 2", "price": "0.74", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Best Month Ever!", "price": "4.48", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Big Moonstone Pack -- 5,500", "price": "4.99", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Big Pharma", "price": "1.33", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Bing In Wonderland", "price": "1.65", "flag": "🇪🇬", "date": "15.11", "status": "" },
  { "name": "Bio Inc. Redemption", "price": "3.03", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "BioShock 2 Remastered", "price": "0.83", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "BioShock Infinite: The Complete Edition", "price": "1.33", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "BioShock Remastered", "price": "1.33", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "BlazBlue: Cross Tag Battle Special Edition", "price": "1.52", "flag": "🇳🇬", "date": "06.11", "status": "" },
  { "name": "Blocky Farm", "price": "0.56", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Borderlands 3: Next Level Edition", "price": "1.45", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Borderlands 3: Ultimate Edition", "price": "5.16", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Borderlands: The Handsome Collection", "price": "1.89", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Brawlout Standard Edition", "price": "0.36", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Bridge Constructor: The Walking Dead", "price": "0.08", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "British Horror Bundle", "price": "1.24", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Brotato & Abyssal Terrors DLC - Bundle", "price": "0.52", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Builder Flipper bundle", "price": "2.8", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Bulletstorm: Full Clip Edition Duke Nukem Bundle", "price": "0.53", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Bus Simulator", "price": "1.34", "flag": "🇳🇬", "date": "05.11", "status": " GP" },
  { "name": "CAFE 0 ~The Sleeping Beast~ REMASTERED", "price": "1.31", "flag": "🇹🇷", "date": "16.11", "status": "" },
  { "name": "CLeM", "price": "6.94", "flag": "🇳🇬", "date": "05.11", "status": " GP" },
  { "name": "CODE SHIFTER", "price": "0.33", "flag": "🇹🇷", "date": "06.11", "status": "" },
  { "name": "CROSSBOW: Bloodnight", "price": "0.31", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Call of Heroes: Tower Defense", "price": "0.75", "flag": "🇳🇬", "date": "05.11", "status": " GP" },
  { "name": "Call of Toys: Tower Defense!", "price": "0.51", "flag": "🇳🇬", "date": "05.11", "status": " GP" },
  { "name": "Call of the Wild: The Angler™ - Ultimate Fishing Bundle", "price": "9.72", "flag": "🇪🇬", "date": "01.09", "status": " GP" },
  { "name": "Candleman Complete Journey Bundle with Wenjia", "price": "3.12", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Candleman Definitive Edition", "price": "1.59", "flag": "🇧🇷", "date": "15.11", "status": "" },
  { "name": "Car Vouchers (10)", "price": "1.22", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Car Vouchers (24)", "price": "2.43", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Car Vouchers (4)", "price": "0.61", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Cassette Beasts: Deluxe Edition", "price": "1.72", "flag": "🇹🇷", "date": "04.11", "status": " GP" },
  { "name": "Castle Walker", "price": "0.22", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Children of Morta", "price": "0.46", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Chivalry 2 King's Edition", "price": "3.96", "flag": "🇹🇷", "date": "01.10", "status": " GP" },
  { "name": "Chivalry 2 Special Edition", "price": "3.29", "flag": "🇹🇷", "date": "01.10", "status": " GP" },
  { "name": "Choo-Choo Charles", "price": "0.98", "flag": "🇹🇷", "date": "03.11", "status": "" },
  { "name": "Chorus", "price": "1.35", "flag": "🇪🇬", "date": "05.11", "status": "" },
  { "name": "Chroma Quaternion", "price": "4.32", "flag": "🇯🇵", "date": "15.11", "status": "" },
  { "name": "Cities: Skylines - Mayor's Edition", "price": "27.49", "flag": "🇧🇷", "date": "01.04", "status": " GP" },
  { "name": "Cities: Skylines - Premium Edition 2", "price": "1.44", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Cities: Skylines - Premium Edition 2", "price": "4.6", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "Claire: Extended Cut", "price": "0.27", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Clocker & Mr. Pumpkin Adventure & Alien Cruise Bundle", "price": "2.19", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Clouds & Sheep 2", "price": "0.15", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Cocoon", "price": "1.58", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Coffin Dodgers", "price": "0.29", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Conan Exiles - Complete Edition October 2021", "price": "10.49", "flag": "🇹🇷", "date": "01.12", "status": " GP" },
  { "name": "Conan Exiles - Isle of Siptah Edition", "price": "39.18", "flag": "🇲🇽", "date": "01.12", "status": " GP" },
  { "name": "Conan Exiles - Isle of Siptah Edition", "price": "4.66", "flag": "🇹🇷", "date": "01.12", "status": " GP" },
  { "name": "Conan Exiles – Complete Edition", "price": "71.99", "flag": "🇲🇽", "date": "01.12", "status": " GP" },
  { "name": "Construction Simulator", "price": "1.66", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Creatures of Ava", "price": "9.83", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Creatures of Ava: Deluxe Edition", "price": "15.14", "flag": "🇧🇷", "date": "05.11", "status": " GP" },
  { "name": "Creepy Tale: Ingrid Penance (Xbox Series X|S)", "price": "0.5", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Crime Opera: The Butterfly Effect", "price": "2.23", "flag": "🇧🇷", "date": "05.11", "status": "" },
  { "name": "Criminal Expert", "price": "0.42", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Crimsonland", "price": "0.37", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Crossroads Inn", "price": "4.01", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Crossy Road Castle", "price": "2.05", "flag": "🇳🇬", "date": "05.11", "status": " GP" },
  { "name": "Crusader Kings III: Royal Edition", "price": "35.64", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Crypt Custodian", "price": "2.05", "flag": "🇳🇬", "date": "05.11", "status": " GP" },
  { "name": "Crystal Ortha", "price": "4.32", "flag": "🇯🇵", "date": "15.11", "status": "" },
  { "name": "Ctrl Alt Ego", "price": "8.36", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Cubic 2 3 4 Player Games", "price": "0.59", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Cultist Simulator: Anthology Edition", "price": "9.94", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Cute Bite", "price": "7.59", "flag": "🇧🇷", "date": "09.11", "status": "" },
  { "name": "DAS WIRED-HORROR-SPIELPAKET", "price": "2.65", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "DINOSAURS: Mission Dino Camp", "price": "1.23", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "DOOM Eternal Deluxe Edition", "price": "13.99", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "DOOM Eternal: The Ancient Gods - Part One", "price": "4.95", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "DOOM Eternal: The Ancient Gods - Part Two", "price": "4.95", "flag": "🇹🇷", "date": "17.03", "status": " GP" },
  { "name": "DOOM Eternal: Year One Pass (PC)", "price": "7.47", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "DOOM Eternal: Year One Pass", "price": "7.47", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "DRAGON BALL FIGHTERZ - FighterZ Edition", "price": "1.54", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "DRAGON BALL THE BREAKERS", "price": "0.74", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "DRAGON BALL XENOVERSE 2 DELUXE EDITION", "price": "8.73", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "DRAGON BALL XENOVERSE", "price": "0.57", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "DRAGON BALL Z: KAKAROT Deluxe Edition", "price": "7.86", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "DYING : Reborn", "price": "0.14", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Dad's Monster House", "price": "1.85", "flag": "🇺🇦", "date": "15.11", "status": "" },
  { "name": "Danger Scavenger", "price": "0.08", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Darkest Dungeon®: Ancestral Edition", "price": "1.98", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Dead Age", "price": "0.11", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Dead Cells: Medley of Pain Bundle", "price": "2.65", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Dead Cells: Return to Castlevania Bundle", "price": "2.07", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Dead Island Definitive Collection", "price": "0.19", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Dead by Daylight - Gold Edition", "price": "8.89", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Death Park 2", "price": "0.3", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Death Park", "price": "0.3", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Deathbound", "price": "8.75", "flag": "🇸🇦", "date": "05.11", "status": " GP" },
  { "name": "Deceive Inc. Black Tie Edition Content", "price": "0.99", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Deepest Trench", "price": "1.66", "flag": "🇹🇷", "date": "07.11", "status": "" },
  { "name": "Defend the Rook - Supporter Edition", "price": "2.77", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Demoniaca: Everlasting Night", "price": "3.8", "flag": "🇧🇷", "date": "05.11", "status": " GP" },
  { "name": "Devil Inside Us: Roots of Evil", "price": "1.23", "flag": "🇳🇬", "date": "05.11", "status": "" },
  { "name": "Dex", "price": "0.29", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Diablo® IV - Expansion Bundle", "price": "48.34", "flag": "🇧🇷", "date": "14.11", "status": " GP" },
  { "name": "Diablo® IV - Standard Edition", "price": "31.76", "flag": "🇧🇷", "date": "14.11", "status": " GP" },
  { "name": "Dinobreak", "price": "6.47", "flag": "🇧🇷", "date": "05.11", "status": " GP" },
  { "name": "Disney Dreamlight Valley – Gold Edition", "price": "5.33", "flag": "🇳🇬", "date": "06.11", "status": "" },
  { "name": "Disney Dreamlight Valley: A Rift in Time", "price": "2.49", "flag": "🇳🇬", "date": "06.11", "status": "" },
  { "name": "Disrtust and Goliath Premium Survival Bundle", "price": "1.46", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Dolphin Spirit: Ocean Mission", "price": "9.66", "flag": "🇮🇳", "date": "05.11", "status": " GP" },
  { "name": "Don't Be Afraid", "price": "0.49", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Don't Knock Twice", "price": "0.36", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Donut County", "price": "0.32", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Double Dragon 4", "price": "0.34", "flag": "🇹🇷", "date": "06.11", "status": "" },
  { "name": "DreamWorks All-Star Kart Racing", "price": "6.99", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "DreamWorks Trolls Remix Rescue", "price": "8.52", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Dungeons 4 - Digital Deluxe Edition", "price": "23.31", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Dungeons Of Hinterberg", "price": "2.3", "flag": "🇳🇬", "date": "05.11", "status": " GP" },
  { "name": "Dying Light: Definitive Edition", "price": "5.29", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "EA SPORTS FC™ 24 Standard Edition Xbox One & Xbox Series X|S", "price": "16.06", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "EA SPORTS™ Madden NFL 25 Deluxe Edition Xbox Series X|S & Xbox One", "price": "42.07", "flag": "🇰🇷", "date": "14.11", "status": "" },
  { "name": "EA SPORTS™ Madden NFL 25", "price": "29.73", "flag": "🇮🇳", "date": "14.11", "status": "" },
  { "name": "EMPTY SHELL", "price": "1.05", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Effie", "price": "0.25", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Eiyuden Chronicle: Hundred Heroes - Digital Deluxe Edition", "price": "10.17", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "El Hijo - A Wild West Tale", "price": "0.33", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Embr", "price": "0.41", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Escape Academy Deluxe Edition", "price": "2.3", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Escape Dead Island", "price": "0.22", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Escape Game - FORT BOYARD 2022", "price": "0.37", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Escape Game Fort Boyard", "price": "0.13", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Ethan: Meteor Hunter", "price": "0.17", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Everdream Valley", "price": "1.58", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Evil Wizard(Xbox)", "price": "6.58", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Exhausted Man and Candleman Bundle", "price": "7.51", "flag": "🇺🇦", "date": "15.11", "status": "" },
  { "name": "ExhaustedMan", "price": "4.86", "flag": "🇺🇦", "date": "15.11", "status": "" },
  { "name": "Exit the Gungeon", "price": "0.21", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Exodus: Creepy Time (Xbox One)", "price": "0.31", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Exodus: Creepy Time (Xbox Series + Xbox One + Windows)", "price": "0.63", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Exodus: Creepy Time", "price": "0.31", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Expeditions: A MudRunner Game - Supreme Edition", "price": "44.29", "flag": "🇹🇷", "date": "04.11", "status": " GP" },
  { "name": "Expeditions: A MudRunner Game - Year 1 Edition", "price": "32.63", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "F1® 23", "price": "37.46", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "FMV Detective", "price": "2.24", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "FMV Horror Bundle", "price": "2.24", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "FOCUS INDIES BUNDLE - Curse of the Dead Gods + Shady Part of Me + Aeon Must Die!", "price": "2.77", "flag": "🇹 🇷", "date": "05.11", "status": " GP" },
  { "name": "FOR HONOR – Gold Edition", "price": "23.31", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "FOR HONOR – Ultimate Edition", "price": "37.3", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "FROGUN", "price": "1.13", "flag": "🇳🇬", "date": "05.11", "status": " GP" },
  { "name": "FRONT MISSION 1st: Remake", "price": "1.44", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "FRONT MISSION 2: Remake", "price": "1.44", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Fairy Elements", "price": "5.19", "flag": "🇯🇵", "date": "15.11", "status": "" },
  { "name": "Fallout 4: Game of the Year Edition (PC)", "price": "6.64", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Fallout 4: Game of the Year Edition", "price": "6.64", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Fallout 76: Skyline Valley Deluxe Edition", "price": "23.31", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Far Cry Classic", "price": "0.22", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Far Cry® 5 + Far Cry® New Dawn Deluxe Edition Bundle", "price": "18.69", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Far Cry® 5 Gold Edition + Far Cry ® New Dawn Deluxe Editi...", "price": "21.44", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Far Cry® 6 Deluxe Edition", "price": "18.06", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Far Cry® 6 Game of the Year Edition", "price": "22.14", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Far Cry® 6 Gold Edition", "price": "18.65", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Far Cry®5 Gold Edition", "price": "16.32", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Farm Bundle", "price": "2.65", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Farm Pets Bundle", "price": "3.96", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Farmer Survivors", "price": "0.29", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Farming Simulator 22 - Platinum Edition", "price": "5.11", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Farming Simulator 22 - Premium Edition", "price": "6.39", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Fighter Within", "price": "0.39", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Flailing Limbs Bundle", "price": "1.38", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Flintlock – Deluxe Edition", "price": "16.99", "flag": "🇹🇷", "date": "16.01", "status": " GP" },
  { "name": "Flock", "price": "1.71", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Flooded", "price": "0.53", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "For The King", "price": "0.31", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Forklift Extreme: Deluxe Edition", "price": "0.37", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Fort Boyard", "price": "0.19", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Forza Horizon 4 Deluxe Edition", "price": "10.17", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 4 Ultimate Edition", "price": "12.79", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 Deluxe Edition", "price": "10.17", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 PLUS Hot Wheels Bundle", "price": "10.17", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 Premium Add-Ons Bundle", "price": "6.39", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 Premium Edition", "price": "12.79", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport Deluxe Edition", "price": "11.45", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport Premium Add-Ons Bundle", "price": "5.11", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport Premium Edition", "price": "12.79", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport and Forza Horizon 5 Premium Add-Ons Bundle", "price": "10.9", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport and Forza Horizon 5 Premium Editions Bundle", "price": "24.23", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Frightence", "price": "0.17", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "From Shadows Redux", "price": "0.08", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Frostpunk: Complete Collection", "price": "2.97", "flag": "🇹🇷", "date": "16.01", "status": " GP" },
  { "name": "Fun Pack Series Edition", "price": "0.7", "flag": "🇹🇷", "date": "08.11", "status": "" },
  { "name": "Fun Pack", "price": "0.7", "flag": "🇹🇷", "date": "08.11", "status": "" },
  { "name": "Fury of Dracula: Digital Edition", "price": "1.55", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "GRAPPIN", "price": "0.74", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Gale of Windoria", "price": "4.32", "flag": "🇯🇵", "date": "15.11", "status": "" },
  { "name": "Garden Bundle", "price": "3.51", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Gears of War 4 and Halo 5: Guardians Bundle", "price": "2.33", "flag": "🇹🇷", "date": "31.01", "status": " GP" },
  { "name": "Gene Rain Ultimate & Your Toy Bundle", "price": "1.1", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Gene Rain Wind Tower: Ultimate Edition", "price": "0.86", "flag": "🇺🇦", "date": "15.11", "status": "" },
  { "name": "Generation Zero® - Ultimate Bundle", "price": "5.94", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Get-A-Grip Chip", "price": "0.61", "flag": "🇳🇬", "date": "05.11", "status": " GP" },
  { "name": "Ghost Sync", "price": "4.76", "flag": "🇯🇵", "date": "15.11", "status": "" },
  { "name": "Ghostbusters: Spirits Unleashed", "price": "1.07", "flag": "🇹🇷", "date": "04.11", "status": "" },
  { "name": "Gigapocalypse", "price": "0.17", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Gnomes Garden 5: Halloween", "price": "0.29", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Goat Simulator 3 - Multiversal Traveler's Edition", "price": "2.65", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Goat Simulator 3 - Multiversal Traveler's Edition: Xbox One Edition", "price": "2.65", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Gods Will Fall", "price": "0.52", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Goetia", "price": "0.08", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Golazo!", "price": "0.12", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Golf Club: Wasteland", "price": "0.2", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Golf With Your Friends - Starter Edition", "price": "7.67", "flag": "🇰🇷", "date": "05.11", "status": " GP" },
  { "name": "Golf With Your Friends - Ultimate Edition", "price": "31.44", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Golf vs Zombie", "price": "1.02", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Goliath", "price": "0.11", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Goons: Legends & Mayhem", "price": "1.15", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Gorogoa", "price": "0.34", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Grand Theft Auto V: Premium Edition & Great White Shark C...", "price": "2.62", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Grand Theft Auto V: Premium Edition & Megalodon Shark Car...", "price": "4.4", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Grand Theft Auto V: Premium Edition & Whale Shark Card Bu...", "price": "3.03", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Greed Series", "price": "2.83", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Greed: The Mad Scientist", "price": "1.31", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Green Hell Xbox Series X|S", "price": "2.37", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Green Hell", "price": "1.22", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Greyhill Incident", "price": "1.18", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Guilty Gear -Strive-", "price": "2.44", "flag": "🇳🇬", "date": "06.11", "status": "" },
  { "name": "HARDCORE MECHA", "price": "8.95", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "HITMAN™ 2", "price": "7.19", "flag": "🇹🇷", "date": "04.02", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ 2 - Turbocharged - Deluxe Edition", "price": "8.46", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ 2 - Turbocharged - Legendary Edition", "price": "10.9", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "HUMANKIND™ - Heritage Edition", "price": "7.61", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Halloween Hidden Object Bundle", "price": "2.51", "flag": "🇹🇷", "date": "08.11", "status": "" },
  { "name": "Halloween Pinball", "price": "0.1", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Halo 5: Guardians – Digital Deluxe Edition", "price": "19.23", "flag": "🇹🇷", "date": "31.05", "status": " GP" },
  { "name": "Halo Wars 2: Complete Edition", "price": "23.31", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Hannah", "price": "1.47", "flag": "🇹🇷", "date": "08.11", "status": "" },
  { "name": "Hard Reset Redux", "price": "0.14", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Hard West Ultimate Edition", "price": "0.16", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Harmony: The Fall of Reverie", "price": "1.11", "flag": "🇳🇬", "date": "05.11", "status": " GP" },
  { "name": "Harold Halibut", "price": "1.93", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Hasbro Family Fun Pack - Super Edition", "price": "1.97", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Hasbro Family Fun Pack Conquest Edition", "price": "8.61", "flag": "🇨🇦", "date": "05.11", "status": " GP" },
  { "name": "Heart&Slash", "price": "0.21", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Heaven Dust", "price": "0.29", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Heidelberg 1693", "price": "0.25", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Heliborne", "price": "5.3", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Hell Let Loose - Deluxe Edition", "price": "7.61", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hell Let Loose - Ultimate Edition", "price": "8.89", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hello Neighbor 2 Deluxe Edition", "price": "7.61", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Henchman Story", "price": "0.64", "flag": "🇳🇬", "date": "05.11", "status": "" },
  { "name": "Hi-Fi RUSH Deluxe Edition", "price": "13.99", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Hidden Cats in Spooky Town", "price": "0.26", "flag": "🇹🇷", "date": "06.11", "status": "" },
  { "name": "Hidden Paws Mystery", "price": "0.26", "flag": "🇹🇷", "date": "13.11", "status": "" },
  { "name": "Hindsight", "price": "0.5", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Hoa", "price": "0.62", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Hollow", "price": "0.16", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Home Sweet Home", "price": "0.68", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Homefront®: The Revolution", "price": "0.17", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Horror Tale 1: Kidnapper", "price": "0.5", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Horror Tale 2: Samantha", "price": "0.35", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Horse Club Adventures 2: Hazelwood Stories", "price": "1.66", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Hotel Renovator – Five Star Edition", "price": "21.78", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "House of Golf 2", "price": "1.24", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Huge Moonstone Pack -- 14,500", "price": "12.73", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hypnospace Outlaw & Slayers X: Terminal Aftermath: Vengance of the Slayer Bundle", "price": "2.21", "flag": "🇹 🇷", "date": "01.06", "status": " GP" },
  { "name": "I Am Dead", "price": "0.41", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "I Did Not Buy This Ticket", "price": "0.33", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "INDIE BUNDLE: Shiness and Seasons after Fall", "price": "0.4", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "INSIDE & LIMBO Bundle", "price": "3.29", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "ImmortalLegacy:TheJadeCipherConsoleEdition", "price": "3.84", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Immortals Fenyx Rising™ Gold Edition", "price": "33.8", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Immortals of Aveum™ Deluxe Edition", "price": "29.44", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "Initial 2: New Stage & Xuan Yuan Sword Bundle", "price": "5.11", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Initial2: New Stage", "price": "4.93", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Injustice™ 2 - Legendary Edition", "price": "4.95", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Inspector Gadget - MAD Time Party", "price": "10.18", "flag": "🇧🇷", "date": "05.11", "status": " GP" },
  { "name": "Insurgency: Sandstorm - Deluxe Edition", "price": "21.49", "flag": "🇯🇵", "date": "16.01", "status": " GP" },
  { "name": "Insurgency: Sandstorm - Gold Edition", "price": "23.31", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Insurgency: Sandstorm - Ultimate Edition (Windows)", "price": "22.73", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Insurgency: Sandstorm - Ultimate Edition", "price": "33.22", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Iris and the Giant Deluxe Soundtrack Edition", "price": "1.92", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Isonzo: Collector's Edition", "price": "1.43", "flag": "🇳🇬", "date": "05.11", "status": " GP" },
  { "name": "Isonzo: Deluxe Edition", "price": "2.65", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Isonzo: Ultimate Edition", "price": "56.61", "flag": "🇯🇵", "date": "16.06", "status": " GP" },
  { "name": "It Could Happen To You", "price": "2.41", "flag": "🇧🇷", "date": "02.11", "status": "" },
  { "name": "JoJo's Bizarre Adventure: All-Star Battle R Ultimate Edition", "price": "3.6", "flag": "🇳🇬", "date": "05.11", "status": " GP" },
  { "name": "JoJo's Bizarre Adventure: All-Star Battle R Ultimate Edition", "price": "35.82", "flag": "🇰🇷", "date": "05.11", "status": " GP" },
  { "name": "Johnny Trigger: Definitive Edition", "price": "1.84", "flag": "🇹🇷", "date": "09.11", "status": "" },
  { "name": "Jujutsu Kaisen Cursed Clash Deluxe Edition", "price": "28.39", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Jurassic World Evolution 2: Deluxe Edition", "price": "10.13", "flag": "🇪🇬", "date": "16.05", "status": " GP" },
  { "name": "Jurassic World Evolution 2: Dominion Bundle", "price": "11.6", "flag": "🇪🇬", "date": "14.11", "status": " GP" },
  { "name": "Jusant", "price": "1.9", "flag": "🇳🇬", "date": "04.11", "status": " GP" },
  { "name": "Just Dance 2018", "price": "0.0", "flag": "🇵🇭", "date": "", "status": "" },
  { "name": "KURSK", "price": "0.16", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Kaiju Wars", "price": "0.57", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Kanjozoku Game - レーサーCar Racing & Highway Driving Simulator Games", "price": "0.8", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "KarmaZoo", "price": "0.64", "flag": "🇳🇬", "date": "05.11", "status": " GP" },
  { "name": "Kentucky Route Zero: TV Edition", "price": "0.83", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "KeyWe", "price": "0.73", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Killer Klowns from Outer Space: The Game", "price": "2.32", "flag": "🇹🇷", "date": "04.11", "status": "" },
  { "name": "King's Bounty II", "price": "1.75", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Klabater Bundle: The Amazing American Circus, Moonshine Inc., Heliborne and Crossroads Inn", "price": "4.92", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Knights of Grayfang", "price": "5.62", "flag": "🇯🇵", "date": "15.11", "status": "" },
  { "name": "Koa and the Five Pirates of Mara", "price": "0.82", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Koh-Lanta", "price": "0.31", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Kong: Survivor Instinct", "price": "2.85", "flag": "🇳🇬", "date": "06.11", "status": "" },
  { "name": "Kunio-kun: The World Classics Collection", "price": "18.01", "flag": "🇯🇵", "date": "06.11", "status": "" },
  { "name": "L.A. Noire", "price": "2.91", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "LEGO® 2K Drive Awesome Edition", "price": "37.6", "flag": "🇰🇷", "date": "14.11", "status": " GP" },
  { "name": "LEGO® 2K Drive Awesome Rivals Edition", "price": "52.42", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "LEGO® Star Wars™: The Skywalker Saga Galactic Edition", "price": "11.6", "flag": "🇪🇬", "date": "01.05", "status": " GP" },
  { "name": "LEGO® Star Wars™: The Skywalker Saga", "price": "8.74", "flag": "🇪🇬", "date": "14.11", "status": " GP" },
  { "name": "LEGO® Star Wars™:The Skywalker Saga Deluxe Edition", "price": "10.13", "flag": "🇪🇬", "date": "01.05", "status": " GP" },
  { "name": "Last Stop", "price": "0.62", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Legend of Ixtona", "price": "4.76", "flag": "🇯🇵", "date": "15.11", "status": "" },
  { "name": "Legend of Keepers: Complete Edition", "price": "8.41", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Leo: The Firefighter Cat", "price": "7.49", "flag": "🇮🇳", "date": "05.11", "status": " GP" },
  { "name": "Let's School", "price": "9.81", "flag": "🇺🇦", "date": "05.11", "status": " GP" },
  { "name": "Liege Dragon", "price": "4.32", "flag": "🇯🇵", "date": "15.11", "status": "" },
  { "name": "Lies of P Digital Deluxe Edition", "price": "5.78", "flag": "🇳🇬", "date": "05.11", "status": " GP" },
  { "name": "Lies of P", "price": "4.95", "flag": "🇳🇬", "date": "05.11", "status": " GP" },
  { "name": "Life of Fly", "price": "0.74", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Light & Dark Bundle", "price": "3.65", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Like a Dragon Gaiden: The Man Who Erased His Name Deluxe Edition", "price": "25.92", "flag": "🇵🇭", "date": "14.11", "status": " GP" },
  { "name": "Listeria Wars", "price": "0.24", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Little Kitty, Big City", "price": "1.56", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Little League World Series Baseball 2022", "price": "1.46", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Little Nightmares I & II Bundle", "price": "6.55", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Looney Tunes: Wacky World of Sports", "price": "25.55", "flag": "🇧🇷", "date": "05.11", "status": " GP" },
  { "name": "Lords of the Fallen Deluxe Edition", "price": "10.17", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Lost Islands", "price": "3.2", "flag": "🇳🇬", "date": "05.11", "status": " GP" },
  { "name": "Lost Ruins", "price": "0.82", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Lost Snowmen (Windows)", "price": "0.27", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Lost Snowmen", "price": "0.27", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Luxor Evolved", "price": "0.54", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Luxury Garden Bundle", "price": "3.96", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "MEGALAN 11", "price": "0.34", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "METRO QUESTER", "price": "7.97", "flag": "🇺🇦", "date": "15.11", "status": "" },
  { "name": "MINIT", "price": "0.22", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "MLB® The Show™ 24 - Digital Deluxe Edition", "price": "23.31", "flag": "🇹🇷", "date": "03.11", "status": "" },
  { "name": "MLB® The Show™ 24 - MVP Edition", "price": "19.81", "flag": "🇹🇷", "date": "03.11", "status": "" },
  { "name": "MLB® The Show™ 24 - Xbox One Standard Edition", "price": "13.99", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "MLB® The Show™ 24 - Xbox Series X|S Standard Edition", "price": "33.8", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "MONOPOLY FAMILY FUN PACK", "price": "0.7", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "MUSYNX Deluxe Edition", "price": "5.48", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "MUSYNX Song Pass bundle", "price": "4.38", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "MY HERO ONE'S JUSTICE 2 Ultimate Edition", "price": "10.92", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "MY HERO ONE'S JUSTICE 2 Ultimate Edition", "price": "12.66", "flag": "🇰🇷", "date": "05.11", "status": " GP" },
  { "name": "MY HERO ONE'S JUSTICE 2", "price": "23.07", "flag": "🇯🇵", "date": "05.11", "status": " GP" },
  { "name": "MY HERO ONE'S JUSTICE 2", "price": "5.46", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "MY HERO ONE’S JUSTICE", "price": "5.08", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Macrotis: A Mother's Journey", "price": "1.92", "flag": "🇧🇷", "date": "05.11", "status": " GP" },
  { "name": "Madden NFL 19", "price": "26.74", "flag": "🇨🇴", "date": "30.12", "status": "" },
  { "name": "Madden NFL 24 Xbox Series X|S & Xbox One", "price": "16.06", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "Mafia II: Definitive Edition", "price": "1.45", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Mafia III: Definitive Edition", "price": "1.45", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Magic Cats Pots", "price": "0.67", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Magical Drop VI", "price": "0.62", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Magnus Trilogy", "price": "0.58", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Maid of Sker", "price": "1.27", "flag": "🇳🇬", "date": "05.11", "status": " GP" },
  { "name": "Maneater Apex Edition", "price": "3.29", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "Maquette", "price": "0.66", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Marenian Tavern Story: Patty and the Hungry God", "price": "5.05", "flag": "🇯🇵", "date": "15.11", "status": "" },
  { "name": "Marvel's Midnight Suns Digital+ Edition for Xbox One", "price": "6.55", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Marvel's Midnight Suns Digital+ Edition for Xbox Series X|S", "price": "6.55", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Master of Survival bundle", "price": "2.56", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Mato Anomalies Digital Deluxe Edition", "price": "3.68", "flag": "🇺🇦", "date": "05.11", "status": "" },
  { "name": "Mato Anomalies", "price": "4.15", "flag": "🇨🇴", "date": "05.11", "status": "" },
  { "name": "McPixel 3", "price": "0.26", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "MechWarrior 5: Mercenaries - JumpShip Edition", "price": "4.68", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Megaparty: A Tootuff Adventure", "price": "0.19", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Metal Mind", "price": "5.17", "flag": "🇮🇳", "date": "15.11", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.0", "flag": "🇺🇸", "date": "30.11", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.0", "flag": "🇺🇸", "date": "30.11", "status": "" },
  { "name": "Microsoft Flight Simulator Deluxe 40th Anniversary Edition", "price": "11.45", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Microsoft Flight Simulator Premium Deluxe 40th Anniversar...", "price": "15.22", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Middle-earth™: Shadow of War™ Definitive Edition", "price": "7.61", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Middle-earth™: The Shadow Bundle", "price": "13.96", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Miden Tower", "price": "4.32", "flag": "🇯🇵", "date": "15.11", "status": "" },
  { "name": "Mighty No. 9", "price": "0.25", "flag": "🇹🇷", "date": "06.11", "status": "" },
  { "name": "Mind’s Descent Bundle", "price": "2.49", "flag": "🇳🇬", "date": "05.11", "status": "" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle - Windows 10", "price": "1.47", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle", "price": "1.47", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate Edition for Windows", "price": "5.8", "flag": "🇪🇬", "date": "14.11", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate Edition", "price": "5.11", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Minecraft Legends Deluxe Edition", "price": "6.39", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Minecraft: Deluxe Collection", "price": "3.84", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Minoria", "price": "0.66", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Mirrored Souls", "price": "0.5", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Monster Energy Supercross - The Official Videogame 2", "price": "0.73", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Monster Energy Supercross 2 - Special Edition", "price": "1.31", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Monster Hunter Rise + Sunbreak Deluxe", "price": "67.31", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Monster Hunter Rise + Sunbreak", "price": "31.4", "flag": "🇯🇵", "date": "14.11", "status": " GP" },
  { "name": "Monster Hunter Rise Deluxe Edition", "price": "47.73", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Monster Jam Steel Titans Power Out Bundle", "price": "7.02", "flag": "🇨🇱", "date": "05.11", "status": " GP" },
  { "name": "Monster Viator", "price": "4.32", "flag": "🇯🇵", "date": "15.11", "status": "" },
  { "name": "Moonlighter", "price": "0.14", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Moonlighter: Complete Edition", "price": "1.57", "flag": "🇹🇷", "date": "01.12", "status": " GP" },
  { "name": "Moonshine Inc. + Bio Inc. Redemption - Drinking Problem Bundle", "price": "5.11", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Moonshine Inc. : Supporter Edition", "price": "5.57", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Mortal Kombat 11 Ultimate + Injustice 2 Leg. Edition Bundle", "price": "20.02", "flag": "🇹🇷", "date": "16.12", "status": " GP" },
  { "name": "MotoGP™22", "price": "3.79", "flag": "🇰🇷", "date": "05.11", "status": " GP" },
  { "name": "Mount & Blade II: Bannerlord Digital Deluxe Edition", "price": "7.61", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Moving Out + Moving Out 2 Bundle", "price": "3.43", "flag": "🇳🇬", "date": "05.11", "status": " GP" },
  { "name": "Moving Out 2 - Deluxe Edition", "price": "2.1", "flag": "🇳🇬", "date": "05.11", "status": " GP" },
  { "name": "Mr. Pumpkin Adventure Mr. Pumpkin 2: Kowloon walled city ...", "price": "1.77", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Mr. Pumpkin Series Bundle", "price": "1.21", "flag": "🇺🇦", "date": "15.11", "status": "" },
  { "name": "Mudness Offroad - 4x4 Truck Car Simulator", "price": "0.74", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Multidimensions and Dreams", "price": "0.49", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Mummy Pinball", "price": "0.1", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Mundaun", "price": "0.97", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Murder Diaries 2", "price": "0.5", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Murder Diaries Series Bundle", "price": "1.45", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "My Aunt is a Witch", "price": "0.34", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "My Bakery Empire: Complete Edition", "price": "0.93", "flag": "🇹🇷", "date": "02.11", "status": "" },
  { "name": "My Friend Peppa Pig - Complete Edition", "price": "6.54", "flag": "🇪🇬", "date": "01.07", "status": " GP" },
  { "name": "My Time at Portia Deluxe Edition", "price": "1.74", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "My Time at Sandrock Deluxe Edition", "price": "3.09", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "My Time at Sandrock", "price": "2.49", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "My Universe - Interior Designer", "price": "0.87", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "My Universe - My Baby", "price": "0.87", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "My Universe - School Teacher", "price": "0.87", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "NARUTO SHIPPUDEN™: Ultimate Ninja® STORM Trilogy", "price": "1.45", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "NARUTO TO BORUTO: SHINOBI STRIKER Deluxe Edition", "price": "4.36", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "NARUTO X BORUTO Ultimate Ninja STORM CONNECTIONS Deluxe Edition", "price": "27.95", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "NASCAR Arcade Rush", "price": "9.94", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "NBA 2K25 Tournament Edition", "price": "33.75", "flag": "🇯🇵", "date": "11.11", "status": "" },
  { "name": "NHL® 24 Standard Edition Xbox One", "price": "19.03", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "NHL® 24 Standard Edition Xbox Series X|S", "price": "21.41", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "NHL® 25 Standard Edition + Loyalty Offer", "price": "47.58", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "NINJA GAIDEN: Master Collection Deluxe Edition", "price": "6.09", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "NO THING", "price": "0.08", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Neon Abyss Deluxe Edition", "price": "1.84", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "Neon Abyss", "price": "1.09", "flag": "🇹🇷", "date": "06.11", "status": "" },
  { "name": "Neon White", "price": "1.9", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "NeonLore", "price": "0.17", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Ni no Kuni™ II: Revenant Kingdom - The Prince's Edition", "price": "3.0", "flag": "🇳🇬", "date": "05.11", "status": " GP" },
  { "name": "Nickelodeon All-Star Brawl 2 Deluxe Edition", "price": "10.13", "flag": "🇪🇬", "date": "14.11", "status": " GP" },
  { "name": "Nickelodeon All-Star Brawl 2 Ultimate Edition", "price": "11.6", "flag": "🇪🇬", "date": "01.01", "status": " GP" },
  { "name": "Nickelodeon All-Star Brawl", "price": "0.64", "flag": "🇳🇬", "date": "05.11", "status": " GP" },
  { "name": "Nickelodeon: Kart Racers", "price": "0.29", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "NightGhast", "price": "0.2", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.2", "flag": "🇹🇷", "date": "30.05", "status": "" },
  { "name": "No Man's Sky", "price": "1.98", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "25.55", "flag": "🇧🇷", "date": "16.03", "status": " GP" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "29.02", "flag": "🇮🇳", "date": "16.03", "status": " GP" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "3.96", "flag": "🇹🇷", "date": "16.03", "status": " GP" },
  { "name": "Nobody Wants to Die", "price": "12.43", "flag": "🇨🇴", "date": "04.11", "status": "" },
  { "name": "Nova Lands", "price": "0.98", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Nuclear Blaze", "price": "0.42", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "OCTOPATH TRAVELER + OCTOPATH TRAVELER II Bundle", "price": "40.79", "flag": "🇺🇦", "date": "01.12", "status": " GP" },
  { "name": "ONE PIECE ODYSSEY Deluxe Edition", "price": "7.25", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "ONE PIECE: PIRATE WARRIORS 4 Deluxe Edition(Xbox One)", "price": "7.28", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "ONE PUNCH MAN: A HERO NOBODY KNOWS Deluxe Edition", "price": "1.09", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Open Roads", "price": "1.53", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Orcs Must Die! 3 Bundle", "price": "2.65", "flag": "🇹🇷", "date": "16.04", "status": " GP" },
  { "name": "Ori: The Collection", "price": "6.39", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Orten Was The Case", "price": "0.74", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Outbreak: The Full Monty Collection", "price": "44.89", "flag": "🇧🇷", "date": "05.11", "status": " GP" },
  { "name": "Outer Wilds", "price": "1.25", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Outer Wilds: Archaeologist Edition", "price": "1.99", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Outward: The Adventurer Bundle", "price": "0.83", "flag": "🇹🇷", "date": "06.11", "status": "" },
  { "name": "Overboss", "price": "0.83", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Overcooked! 2 - Gourmet Edition", "price": "2.1", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Overcooked: Gourmet Edition", "price": "0.41", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Overland by Finji", "price": "0.77", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "PAC-MAN Mega Tunnel Battle: Chomp Champs - Deluxe Edition", "price": "10.5", "flag": "🇨🇴", "date": "05.11", "status": " GP" },
  { "name": "PAYDAY 3: Gold Edition", "price": "3.04", "flag": "🇳🇬", "date": "05.11", "status": "" },
  { "name": "PGA TOUR 2K23 Deluxe Edition", "price": "8.01", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "POMBERO: The Lord of the Night", "price": "5.13", "flag": "🇺🇦", "date": "05.11", "status": " GP" },
  { "name": "Panzer Dragoon: Remake", "price": "0.21", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Paper Dash - Ghost Hunt", "price": "0.54", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Park Beyond Complete Edition", "price": "25.95", "flag": "🇯🇵", "date": "05.11", "status": " GP" },
  { "name": "Parking Masters Deluxe Edition", "price": "1.61", "flag": "🇳🇬", "date": "05.11", "status": " GP" },
  { "name": "Parking Masters", "price": "1.31", "flag": "🇳🇬", "date": "05.11", "status": " GP" },
  { "name": "Paw Patrol Bundle", "price": "8.74", "flag": "🇪🇬", "date": "14.11", "status": " GP" },
  { "name": "Persona 5 Tactica: Digital Deluxe Edition", "price": "41.93", "flag": "🇹🇷", "date": "16.11", "status": " GP" },
  { "name": "Pets Bundle", "price": "2.97", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Phantom Doctrine", "price": "0.25", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Phoenix Point: Behemoth Edition", "price": "1.98", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Pickleball Smash", "price": "3.5", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Pikuniku", "price": "0.26", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Pile Up! Box by Box", "price": "0.41", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Plastomorphosis", "price": "0.58", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Pocky & Rocky Reshrined", "price": "9.33", "flag": "🇺🇦", "date": "05.11", "status": " GP" },
  { "name": "Prey®: Digital Deluxe Edition", "price": "23.33", "flag": "🇯🇵", "date": "14.11", "status": " GP" },
  { "name": "Promenade", "price": "7.28", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Q-YO Blaster", "price": "0.08", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Quadroids", "price": "0.49", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Quriocity", "price": "1.28", "flag": "🇳🇬", "date": "05.11", "status": " GP" },
  { "name": "RABBIDS INVASION - GOLD EDITION", "price": "0.39", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "RAGE 2: Deluxe Edition", "price": "10.49", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "RESIDENT EVIL 2 Deluxe Edition", "price": "26.18", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "RPGolf Legends", "price": "1.24", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Rabbids Invasion : The Interactive TV Show", "price": "0.39", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Rabbids®: Party of Legends", "price": "2.55", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Rabio", "price": "0.22", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Radon Break", "price": "0.4", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Re.Surs", "price": "0.26", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "ReCore", "price": "2.56", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Ready, Steady, Ship!", "price": "0.99", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Realpolitiks New Power", "price": "0.21", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Red Dead Redemption 2: Ultimate Edition", "price": "3.84", "flag": "🇳🇬", "date": "05.11", "status": " GP" },
  { "name": "Regular Moonstone Pack -- 2,500", "price": "2.37", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Remnant II - Deluxe Edition", "price": "8.74", "flag": "🇪🇬", "date": "01.06", "status": " GP" },
  { "name": "Remnant II - Ultimate Edition", "price": "10.13", "flag": "🇪🇬", "date": "14.11", "status": " GP" },
  { "name": "Remnant: From the Ashes - Complete Edition", "price": "7.27", "flag": "🇪🇬", "date": "14.11", "status": " GP" },
  { "name": "Richman 10", "price": "4.38", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Ricky Recharge", "price": "0.33", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Ride 2", "price": "1.6", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Riders Republic™ 360 Edition", "price": "30.3", "flag": "🇹🇷", "date": "09.12", "status": " GP" },
  { "name": "Riders Republic™ Complete Edition", "price": "40.79", "flag": "🇹🇷", "date": "09.12", "status": " GP" },
  { "name": "Riders Republic™ Skate Edition", "price": "23.31", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Rise Eterna War", "price": "0.56", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Rise Eterna", "price": "0.16", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Rise of the Tomb Raider: 20 Year Celebration", "price": "12.16", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Risk of Rain 2 + Survivors of the Void + Seekers of the Storm Bundle", "price": "23.71", "flag": "🇲🇽", "date": "05.11", "status": " GP" },
  { "name": "Risk: Urban Assault", "price": "0.6", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Roarr! Jurassic Edition", "price": "0.12", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Roman Rumble in Las Vegum - Asterix & Obelix XXL 2", "price": "1.26", "flag": "🇨🇱", "date": "05.11", "status": " GP" },
  { "name": "Ruinarch", "price": "4.11", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Ruiner", "price": "0.33", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "SAND LAND Deluxe Edition", "price": "35.54", "flag": "🇨🇱", "date": "05.11", "status": " GP" },
  { "name": "SAND LAND Special Edition", "price": "43.64", "flag": "🇰🇷", "date": "05.11", "status": " GP" },
  { "name": "SCARLET NEXUS Deluxe Edition", "price": "1.53", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "SCHiM", "price": "1.45", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "SEUM: Speedrunners from Hell", "price": "0.11", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "SMITE 2 Deluxe Founder's Edition", "price": "24.49", "flag": "🇲🇽", "date": "05.11", "status": " GP" },
  { "name": "SMITE 2 Founder's Edition", "price": "12.24", "flag": "🇲🇽", "date": "05.11", "status": " GP" },
  { "name": "SMITE 2 Ultimate Founder's Edition", "price": "40.82", "flag": "🇲🇽", "date": "05.11", "status": " GP" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "12.27", "flag": "🇹🇷", "date": "31.12", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "8.11", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "STAR WARS™ Episode I Racer", "price": "0.62", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "STAY COOL, KOBAYASHI-SAN!: A RIVER CITY RANSOM STORY", "price": "0.12", "flag": "🇹🇷", "date": "06.11", "status": "" },
  { "name": "STUFFED", "price": "1.07", "flag": "🇳🇬", "date": "05.11", "status": " GP" },
  { "name": "SUPERHOT ONE OF US BUNDLE", "price": "2.07", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "SWORD ART ONLINE Alicization Lycoris Deluxe Edition", "price": "3.02", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "SWORD ART ONLINE Last Recollection Deluxe Edition", "price": "18.56", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "SWORD ART ONLINE: FATAL BULLET Complete Edition", "price": "1.31", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Saints Row Gold Edition", "price": "8.73", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Saints Row IV: Re-Elected & Gat out of Hell", "price": "0.33", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Saints Row The Third Remastered", "price": "4.36", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Sayonara Wild Hearts", "price": "0.63", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Sea of Thieves: 2024 Deluxe Edition", "price": "6.09", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Sea of Thieves: 2024 Premium Edition", "price": "7.25", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Seeds of Resilience", "price": "0.12", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Seek Hearts", "price": "4.32", "flag": "🇯🇵", "date": "15.11", "status": "" },
  { "name": "Sense - A Cyberpunk Ghost Story", "price": "1.22", "flag": "🇳🇬", "date": "05.11", "status": "" },
  { "name": "Sephirothic Stories", "price": "4.32", "flag": "🇯🇵", "date": "15.11", "status": "" },
  { "name": "Shadow Tactics - Ultimate Bundle", "price": "38.46", "flag": "🇹🇷", "date": "06.12", "status": "" },
  { "name": "Shadow Tactics: Aiko's Choice - Deluxe Edition", "price": "15.93", "flag": "🇰🇷", "date": "06.12", "status": "" },
  { "name": "Shadow Tactics: Aiko's Choice", "price": "12.98", "flag": "🇹🇷", "date": "06.12", "status": "" },
  { "name": "Shadow Warrior 2", "price": "0.37", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Shadow Warrior 3", "price": "1.28", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Shadow Warrior", "price": "0.23", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Sherlock Purr 2 - Extended Edition", "price": "0.21", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Shinorubi", "price": "0.49", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Ship of Fools - Aquapocalypse Edition", "price": "11.89", "flag": "🇮🇳", "date": "05.11", "status": " GP" },
  { "name": "Shiro", "price": "0.2", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Sid Meier’s Civilization® VI Anthology", "price": "5.29", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Sid Meier’s Civilization® VI Platinum Edition", "price": "2.56", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Silver Chains", "price": "0.21", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Skater's Solstice", "price": "2.55", "flag": "🇧🇷", "date": "14.11", "status": "" },
  { "name": "Skeletal Avenger", "price": "0.42", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Sker Ritual", "price": "2.53", "flag": "🇳🇬", "date": "05.11", "status": " GP" },
  { "name": "Skyrim Anniversary Edition + Fallout 4 G.O.T.Y Bundle", "price": "18.65", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Slay the Princess - The Pristine Cut", "price": "1.34", "flag": "🇹🇷", "date": "08.11", "status": "" },
  { "name": "Small Moonstone Pack -- 1,200", "price": "1.22", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Smart Moves", "price": "0.18", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Smurfs Kart", "price": "9.66", "flag": "🇮🇳", "date": "05.11", "status": " GP" },
  { "name": "Sniper Elite 5 Complete Edition", "price": "7.28", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Sniper Elite 5 Deluxe Edition", "price": "11.45", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "SnowRunner - 1-Anniversary Edition", "price": "6.99", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "SnowRunner - 2-Year Anniversary Edition", "price": "30.3", "flag": "🇹🇷", "date": "04.11", "status": " GP" },
  { "name": "SnowRunner - 3-Year Anniversary Edition", "price": "37.3", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "SnowRunner - 4-Year Anniversary Edition", "price": "44.29", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Solar Ash", "price": "2.05", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "South Park™: The Fractured but Whole™ - Gold Edition", "price": "30.3", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Space Engineers: Ultimate Edition 2023", "price": "4.9", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "Sparkle 4 Tales", "price": "0.08", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Sparkle Bundle", "price": "0.96", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "SpongeBob SquarePants: Bundle", "price": "21.87", "flag": "🇨🇴", "date": "05.11", "status": " GP" },
  { "name": "Starfield Premium Edition Upgrade", "price": "5.7", "flag": "🇪🇬", "date": "05.09", "status": " GP" },
  { "name": "Starfield Premium Edition", "price": "14.55", "flag": "🇪🇬", "date": "14.11", "status": " GP" },
  { "name": "Starlink: Battle for Atlas™", "price": "6.34", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Starward Rogue: Complete Edition", "price": "4.48", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "SteamWorld Build & Dig Bundle", "price": "4.44", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "SteamWorld Build Deluxe Edition", "price": "4.2", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Stellaris: Console Edition - Deluxe Edition", "price": "3.99", "flag": "🇹🇷", "date": "16.01", "status": " GP" },
  { "name": "Stilt Fella", "price": "0.84", "flag": "🇹🇷", "date": "02.11", "status": "" },
  { "name": "Strategic Mind: Fight for Dominance", "price": "6.19", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Strategic Mind: Fight for Freedom", "price": "0.99", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Strategic Mind: Spectre of Communism", "price": "3.26", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Strategic Mind: Spirit of Liberty", "price": "4.08", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Strategic Mind: The Pacific", "price": "0.82", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Stray", "price": "2.3", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Stubbs the Zombie in Rebel Without a Pulse", "price": "0.25", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Stunt Kite Party", "price": "0.17", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Summer in Mara + Koa and the Five Pirates of Mara", "price": "1.04", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Summer in Mara", "price": "0.86", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Sunset Overdrive Deluxe Edition", "price": "1.62", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Super Party Sports: Football", "price": "0.07", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Super Star Blast", "price": "0.4", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Super XYX", "price": "5.1", "flag": "🇧🇷", "date": "07.11", "status": "" },
  { "name": "Sweet Witches", "price": "0.13", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Sword and Fairy: Together Forever", "price": "6.39", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Sword of Elpisia", "price": "4.32", "flag": "🇯🇵", "date": "15.11", "status": "" },
  { "name": "Sydney Hunter And The Curse Of The Mayan", "price": "0.61", "flag": "🇳🇬", "date": "05.11", "status": " GP" },
  { "name": "TEKKEN 7 - Originals Edition", "price": "2.01", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "TEVI", "price": "3.33", "flag": "🇳🇬", "date": "05.11", "status": " GP" },
  { "name": "THE ORIGIN: Blind Maid", "price": "7.92", "flag": "🇳🇬", "date": "05.11", "status": " GP" },
  { "name": "TY the Tasmanian Tiger HD", "price": "1.47", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "TY the Tasmanian Tiger™ 2: Bush Rescue™ HD", "price": "1.47", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Tales from the Borderlands", "price": "3.15", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Tales of ARISE + SCARLET NEXUS バンドル", "price": "34.94", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Tales of Arise - Beyond The Dawn Ultimate Edition", "price": "41.93", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Tales of Arise - Beyond the Dawn Deluxe Edition", "price": "34.94", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Tales of Arise - Beyond the Dawn Edition", "price": "25.62", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Talisman: Digital Edition - Deluxe Edition", "price": "2.37", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Tchia: Oléti Edition", "price": "7.85", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Teenage Mutant Ninja Turtles: Shredder's Revenge - Ultimate Edition", "price": "2.19", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Telling Lies", "price": "0.41", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Terraformers", "price": "4.45", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Terraformers: New Frontiers Bundle", "price": "5.4", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Tesla Force", "price": "0.48", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Tetris® Forever", "price": "3.78", "flag": "🇳🇬", "date": "12.11", "status": "" },
  { "name": "The Amazing American Circus", "price": "0.87", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "The Artful Escape", "price": "0.66", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "The Bard's Tale Trilogy", "price": "0.73", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "The Beast Inside (Console Version)", "price": "0.42", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "The Bunker", "price": "0.74", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "The Childs Sight", "price": "0.08", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "The Church in the Darkness", "price": "0.16", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "The Clocker", "price": "0.67", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "The Division 2 - Warlords of New York - Ultimate Edition", "price": "10.56", "flag": "🇹🇷", "date": "12.11", "status": "" },
  { "name": "The Elder Scrolls III: Morrowind", "price": "1.14", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "The Elder Scrolls Online Deluxe Collection: Gold Road", "price": "40.79", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "The Escapists + The Escapists 2", "price": "0.72", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "The Escapists 2 - Game of the Year Edition", "price": "0.56", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "The Escapists: Supermax Edition", "price": "1.78", "flag": "🇹🇷", "date": "14.11", "status": "" },
  { "name": "The Explorer Of Night", "price": "0.16", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "The Game of Life 2 - Deluxe Life Bundle", "price": "1.44", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "The Hong Kong Massacre", "price": "1.28", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "The Infectious Madness of Doctor Dekker", "price": "0.48", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "The Innsmouth Case", "price": "0.15", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "The Jackbox Party Pack 3", "price": "1.03", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "The Jackbox Party Pack 7", "price": "1.49", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "The Jackbox Party Pack 9", "price": "1.49", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "The Jackbox Party Quadpack", "price": "6.23", "flag": "🇹🇷", "date": "31.12", "status": "" },
  { "name": "The Journey Down Trilogy", "price": "1.24", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "The Karate Kid: Street Rumble", "price": "19.09", "flag": "🇧🇷", "date": "05.11", "status": " GP" },
  { "name": "The Lamplighters League - Deluxe Edition", "price": "7.0", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "The Last Campfire", "price": "0.17", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "The Letter: A Horror Visual Novel", "price": "5.18", "flag": "🇧🇷", "date": "05.11", "status": " GP" },
  { "name": "The Lost And The Wicked", "price": "0.38", "flag": "🇳🇬", "date": "05.11", "status": "" },
  { "name": "The MISSING: J.J. Macfield and the Island of Memories", "price": "0.56", "flag": "🇹🇷", "date": "06.11", "status": "" },
  { "name": "The MUSYNX", "price": "0.61", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "The Outer Worlds: Board-Approved Bundle", "price": "12.56", "flag": "🇹🇷", "date": "04.11", "status": " GP" },
  { "name": "The Pathless", "price": "1.28", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "The Quarry - Deluxe Edition", "price": "3.45", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "The Quarry for Xbox Series X|S", "price": "2.85", "flag": "🇹🇷", "date": "16.12", "status": "" },
  { "name": "The Sisters - Party of the Year", "price": "2.9", "flag": "🇮🇳", "date": "05.11", "status": " GP" },
  { "name": "The Sisters 2 - Road to Fame", "price": "11.46", "flag": "🇧🇷", "date": "05.11", "status": " GP" },
  { "name": "The Smurfs - Mission Vileaf", "price": "2.39", "flag": "🇧🇷", "date": "05.11", "status": " GP" },
  { "name": "The Smurfs - Village Party", "price": "19.09", "flag": "🇧🇷", "date": "05.11", "status": " GP" },
  { "name": "The Smurfs 2 : The Prisoner of the Green Stone", "price": "11.46", "flag": "🇧🇷", "date": "05.11", "status": " GP" },
  { "name": "The Star Named EOS", "price": "0.99", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "The Surge 1 & 2 - Dual Pack (Xbox)", "price": "1.18", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "The Walking Dead: A New Frontier - The Complete Season (Episodes 1-5)", "price": "0.61", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "The Walking Dead: Michonne - The Complete Season", "price": "0.29", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "The Walking Dead: Season Two", "price": "0.61", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "The Witch's House MV", "price": "0.62", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "The end is nahual: If I may say so", "price": "0.21", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Thea Bundle", "price": "1.88", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "They Are Billions", "price": "1.24", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Thirsty Suitors", "price": "2.3", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "This War of Mine - Complete Edition", "price": "1.78", "flag": "🇹🇷", "date": "16.12", "status": " GP" },
  { "name": "Ticket to Ride", "price": "1.66", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Ticket to Ride, Clue and The Game of Life 2 - Classic Board Game Bundle", "price": "2.84", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Timberman VS", "price": "0.08", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Timberman: The Big Adventure", "price": "0.2", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Tin Can", "price": "3.32", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Tiny Hands Adventure", "price": "0.1", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Tom Clancy's Rainbow Six® Extraction United Bundle", "price": "13.99", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Ultimate Edition", "price": "12.33", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Year 2 Gold Edition", "price": "9.32", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Tom Clancy’s Rainbow Six Siege Operator Edition", "price": "30.3", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Tom Clancy’s Rainbow Six Siege Ultimate Edition", "price": "37.3", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Tomb Raider: Definitive Survivor Trilogy", "price": "20.27", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Toodee And Topdee", "price": "1.53", "flag": "🇳🇬", "date": "05.11", "status": " GP" },
  { "name": "Tools Up - Ultimate Edition", "price": "0.89", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Tools Up!", "price": "0.33", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "TopSpin 2K25 Deluxe Edition Pre-Order", "price": "36.41", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Totally Reliable Delivery Service Deluxe Edition", "price": "1.57", "flag": "🇹🇷", "date": "06.11", "status": " GP" },
  { "name": "Towaga: Among Shadows", "price": "0.12", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Trailmakers: Booster Edition", "price": "2.3", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers: Deluxe Edition", "price": "3.29", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers: Ultimate Edition", "price": "3.96", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Treasure Hunter Simulator", "price": "0.49", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Trek to Yomi", "price": "0.57", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Tribes of Midgard", "price": "0.73", "flag": "🇳🇬", "date": "04.11", "status": " GP" },
  { "name": "Tunche", "price": "0.58", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Turbo Golf Racing: Deep Space Bundle", "price": "1.05", "flag": "🇹🇷", "date": "16.04", "status": " GP" },
  { "name": "Turbo Golf Racing: Ultimate Bundle", "price": "1.25", "flag": "🇹🇷", "date": "16.04", "status": " GP" },
  { "name": "Turnip Boy Robs a Bank Pre-Release", "price": "0.99", "flag": "🇹🇷", "date": "15.07", "status": " GP" },
  { "name": "Tux and Fanny", "price": "0.59", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Twelve Minutes", "price": "0.83", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Twice Reborn: A Vampire Visual Novel", "price": "3.8", "flag": "🇧🇷", "date": "05.11", "status": "" },
  { "name": "Tycoon Bundle", "price": "0.76", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "UFC® 5 Standard Edition", "price": "26.76", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "UNABLES", "price": "0.53", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Ufouria: The Saga 2", "price": "10.2", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Ultimate General: Gettysburg", "price": "0.8", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Undead Horde 2: Necropolis", "price": "0.55", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Undead Horde", "price": "0.48", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Under The Waves", "price": "1.53", "flag": "🇳🇬", "date": "05.11", "status": " GP" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "1.2", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Valiant Hearts: Coming Home", "price": "7.22", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Vampire Hunters", "price": "0.99", "flag": "🇹🇷", "date": "14.11", "status": "" },
  { "name": "Venatrix Game", "price": "0.31", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Venba", "price": "0.62", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Vermintide - Digital Value Pack", "price": "2.56", "flag": "🇹🇷", "date": "07.03", "status": "" },
  { "name": "Violett Remastered", "price": "0.08", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "9.18", "flag": "🇹🇷", "date": "30.08", "status": "" },
  { "name": "WWE 2K24 Deluxe Edition", "price": "36.41", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Warhammer 40,000: Boltgun - Forges of Corruption Edition", "price": "10.31", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "Warhammer 40,000: Darktide - Imperial Edition", "price": "9.13", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Wasteland 3 (PC) Colorado Collection", "price": "6.39", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Wasteland 3 Colorado Collection", "price": "10.23", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "Watch Dogs®2 - Deluxe Edition", "price": "29.0", "flag": "🇧🇷", "date": "01.07", "status": " GP" },
  { "name": "Watch Dogs®2 - Gold Edition", "price": "47.78", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "We Happy Few Digital Deluxe", "price": "7.4", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "We Love Katamari REROLL+ Royal Reverie Special Edition", "price": "1.31", "flag": "🇳🇬", "date": "05.11", "status": " GP" },
  { "name": "We. The Revolution", "price": "0.38", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Weedcraft Inc & Moonshine Inc - Risky Business Bundle", "price": "5.94", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Weedcraft Inc + Heliborne - Fly High Bundle", "price": "6.45", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Weedcraft Inc + Legend of Keepers - Underworld Business Bundle", "price": "6.03", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Weedcraft Inc + Moonshine Inc + Big Pharma - Chemistry Tycoons Bundle", "price": "9.91", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Weedcraft Inc", "price": "7.24", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Werewolf Pinball", "price": "0.1", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Werewolf: The Apocalypse — Heart of the Forest", "price": "0.29", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Werewolf: The Apocalypse — Purgatory", "price": "1.32", "flag": "🇳🇬", "date": "05.11", "status": " GP" },
  { "name": "What Lies in the Multiverse", "price": "0.37", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "What Remains of Edith Finch", "price": "0.36", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "White Noise 2", "price": "0.36", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Whitestone", "price": "0.33", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Who Wants to Be a Millionaire?", "price": "4.85", "flag": "🇧🇷", "date": "05.11", "status": " GP" },
  { "name": "Windbound", "price": "0.72", "flag": "🇹🇷", "date": "06.11", "status": "" },
  { "name": "Wired Italian Adventure Bundle", "price": "1.98", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Wo Long: Fallen Dynasty Complete Edition", "price": "29.92", "flag": "🇺🇦", "date": "14.11", "status": " GP" },
  { "name": "Wobbly Life", "price": "1.87", "flag": "🇳🇬", "date": "05.11", "status": " GP" },
  { "name": "Wolcen: Lords of Mayhem - Deluxe Edition", "price": "13.1", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Wolcen: Lords of Mayhem", "price": "10.47", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Wolfenstein: Alt History Collection", "price": "11.65", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Wolfenstein: Youngblood Deluxe Edition", "price": "5.1", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Wolfenstein® II: The New Colossus™ Digital Deluxe Edition", "price": "6.99", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "Wolfenstein®: The Two-Pack", "price": "3.7", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "World War Z: Aftermath - Deluxe Edition", "price": "15.15", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "World of Outlaws: Dirt Racing 24 Gold Edition", "price": "31.4", "flag": "🇧🇷", "date": "05.11", "status": " GP" },
  { "name": "World of Outlaws: Dirt Racing 24", "price": "23.95", "flag": "🇧🇷", "date": "05.11", "status": " GP" },
  { "name": "Worms Battlegrounds + Worms W.M.D", "price": "0.72", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Worms Rumble", "price": "0.38", "flag": "🇳🇬", "date": "05.11", "status": " GP" },
  { "name": "Wreckfest Complete Edition", "price": "18.99", "flag": "🇧🇷", "date": "16.11", "status": " GP" },
  { "name": "XCOM® 2 Digital Deluxe Edition", "price": "0.93", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "XCOM® 2", "price": "0.35", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Xenon Racer", "price": "0.12", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Yakuza: Like a Dragon Hero Edition", "price": "11.53", "flag": "🇯🇵", "date": "01.04", "status": " GP" },
  { "name": "Yakuza: Like a Dragon Legendary Hero Edition", "price": "15.57", "flag": "🇯🇵", "date": "01.04", "status": " GP" },
  { "name": "Your Toy", "price": "0.11", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "YourToy and Dying: Reborn Horror Game Bundle", "price": "1.46", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "ZOMBI", "price": "0.27", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "Zombie Derby 2", "price": "0.24", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Zombie Derby", "price": "0.29", "flag": "🇹🇷", "date": "05.11", "status": "" },
  { "name": "Zombie Survivors Series Edition", "price": "0.2", "flag": "🇳🇬", "date": "08.11", "status": "" },
  { "name": "Zombie Survivors XONE Edition", "price": "0.2", "flag": "🇳🇬", "date": "08.11", "status": "" },
  { "name": "de Blob 2", "price": "0.56", "flag": "🇹🇷", "date": "05.11", "status": " GP" },
  { "name": "de Blob", "price": "1.68", "flag": "🇧🇷", "date": "05.11", "status": " GP" },
  { "name": "orbit.industries", "price": "0.57", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Greenhorn Bundle", "price": "2.65", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "theHunter: Call of the Wild™ - Master Hunter Bundle", "price": "3.96", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "theHunter: Call of the Wild™ - Seasoned Hunter Bundle", "price": "3.29", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
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
    a = 130
  } else if (value > 1 && value <= 5) {
    a = 130
  } else if (value > 5 && value <= 10) {
    a = 150
  } else if (value > 10 && value <= 15) {
    a = 100
  } else if (value > 15 && value <= 20) {
    a = 100

  } else if (value > 20 && value <= 25) {
    a = 100

  } else if (value > 25) {
    a = 100

  }
  return a
}

function resPercent(percent) {
  let a;

  if (percent <= 1) {
    a = 130
  } else if (percent > 1 && percent <= 5) {
    a = 95
  } else if (percent > 5 && percent <= 10) {

    a = 65
  } else if (percent > 10 && percent <= 15) {

    a = 60
  } else if (percent > 15 && percent <= 20) {

    a = 60
  } else if (percent > 20 && percent <= 25) {

    a = 60
  } else if (percent > 25) {

    a = 40
  }
  return a
}

function resSwitсhTr(value) {
  let a;

  if (value <= 1) {
    a = 120
  } else if (value > 1 && value <= 5) {
    a = 120
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



