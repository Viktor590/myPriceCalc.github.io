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
  { "name": "2 Synchro Hedgehogs", "price": "0.2", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "2550 Ancient Coins - Royal Treasury of the Ancients", "price": "3.75", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "4250 Ancient Coins - Glittering Tribute of the Ancients", "price": "5.67", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "550 Ancient Coins - Lost Chest of the Ancients", "price": "0.97", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "A Little to the Left: Extra Tidy Bundle", "price": "3.34", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "A Memoir Blue", "price": "0.33", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "ASTRONEER", "price": "1.27", "flag": "🇳🇬", "date": "19.11", "status": " GP" },
  { "name": "ASTRONEER: Evolution Edition", "price": "2.65", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Across the Obelisk", "price": "2.48", "flag": "🇳🇬", "date": "21.11", "status": "" },
  { "name": "Aerial_Knight's Never Yield", "price": "0.1", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "Aero The Acro-Bat: Rascal Rival Revenge", "price": "3.07", "flag": "🇮🇳", "date": "16.11", "status": "" },
  { "name": "Aery - Flow of Time", "price": "0.54", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "Aery - Path of Corruption", "price": "0.5", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "Aery - The Lost Hero", "price": "0.54", "flag": "🇹🇷", "date": "19.11", "status": " GP" },
  { "name": "Aery Series Bundle", "price": "2.15", "flag": "🇹🇷", "date": "19.11", "status": " GP" },
  { "name": "Agatha Christie - Hercule Poirot: The First Cases", "price": "2.65", "flag": "🇹🇷", "date": "19.11", "status": " GP" },
  { "name": "Age of Empires 25th Anniversary Collection", "price": "7.91", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Age of Empires II: Deluxe Definitive Edition Bundle", "price": "5.01", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Age of Empires: Definitive Collection", "price": "5.6", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Age of Mythology: Retold Premium Edition", "price": "26.16", "flag": "🇹🇷", "date": "14.11", "status": "" },
  { "name": "Age of Mythology: Retold Standard Edition", "price": "13.9", "flag": "🇧🇷", "date": "14.11", "status": "" },
  { "name": "Age of Water - Gold Edition", "price": "17.35", "flag": "🇨🇱", "date": "15.11", "status": "" },
  { "name": "Age of Water - Silver Edition", "price": "13.78", "flag": "🇨🇱", "date": "15.11", "status": "" },
  { "name": "Age of Water", "price": "10.46", "flag": "🇨🇱", "date": "15.11", "status": "" },
  { "name": "Air Bounce - The Jump 'n' Run Challenge", "price": "0.27", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "Aircraft Carrier Survival", "price": "0.82", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Aliens: Fireteam Elite Ultimate Edition", "price": "2.98", "flag": "🇳🇬", "date": "19.11", "status": " GP" },
  { "name": "All You Need is Help Lively Friends Bundle", "price": "13.91", "flag": "🇺🇦", "date": "25.12", "status": " GP" },
  { "name": "Alphadia Genesis 2", "price": "4.29", "flag": "🇯🇵", "date": "15.11", "status": "" },
  { "name": "Alphadia Genesis", "price": "4.29", "flag": "🇯🇵", "date": "15.11", "status": "" },
  { "name": "Alphadia Neo", "price": "5.15", "flag": "🇯🇵", "date": "15.11", "status": "" },
  { "name": "Ancient Phantasma", "price": "6.43", "flag": "🇯🇵", "date": "15.11", "status": "" },
  { "name": "Anno 1800™ Console Edition - Deluxe", "price": "5.02", "flag": "🇹🇷", "date": "19.11", "status": " GP" },
  { "name": "Aquarium Designer", "price": "0.71", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "Arcade Paradise | High Score Edition", "price": "1.83", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Arise: A simple story", "price": "0.65", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Ashen", "price": "0.83", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Ashen: Definitive Edition", "price": "1.49", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Aspire - Ina's Tale", "price": "0.31", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Assassin's Creed Antiquity Pack", "price": "45.88", "flag": "🇧🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed Legendary Collection", "price": "83.41", "flag": "🇧🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Bundle: Assassin's Creed® Valhalla, Ass...", "price": "37.24", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin's Creed® Chronicles: India", "price": "0.35", "flag": "🇹🇷", "date": "19.11", "status": " GP" },
  { "name": "Assassin's Creed® Chronicles: Russia", "price": "0.35", "flag": "🇹🇷", "date": "19.11", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey - DELUXE EDITION", "price": "16.29", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey - GOLD EDITION", "price": "18.62", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey - ULTIMATE EDITION", "price": "21.53", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Origins - DELUXE EDITION", "price": "15.71", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Origins - GOLD EDITION", "price": "18.62", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Complete Edition", "price": "23.27", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Deluxe Edition", "price": "18.04", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Ragnarök Edition", "price": "13.96", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Assassin’s Creed® Valhalla + Immortals Fenyx Rising™ Bundle", "price": "58.18", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin’s Creed® Valhalla + Watch Dogs®: Legion Bundle", "price": "26.76", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Assault On Metaltron", "price": "0.09", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Astrune Academy", "price": "6.43", "flag": "🇯🇵", "date": "15.11", "status": "" },
  { "name": "Atomic Heart - Premium Edition", "price": "22.11", "flag": "🇹🇷", "date": "19.11", "status": " GP" },
  { "name": "Aven Colony - Deluxe Edition", "price": "1.47", "flag": "🇹🇷", "date": "14.11", "status": "" },
  { "name": "Awarded Platformer Bundle", "price": "1.16", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "BATTLETECH Mercenary Collection", "price": "5.93", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "BIOHAZARD RE:2 Z Version デラックスエディション", "price": "25.93", "flag": "🇯🇵", "date": "16.09", "status": " GP" },
  { "name": "Baby Storm", "price": "0.41", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Backrooms: Partygoers", "price": "6.15", "flag": "🇮🇳", "date": "13.11", "status": "" },
  { "name": "Ballotron", "price": "0.18", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "Bang-On Balls: Chronicles", "price": "6.91", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "BecomeTheWild", "price": "2.48", "flag": "🇺🇦", "date": "29.11", "status": "" },
  { "name": "Beholder 2", "price": "0.72", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Best Month Ever!", "price": "4.47", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Big Moonstone Pack -- 5,500", "price": "4.89", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Big Pharma", "price": "1.32", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Bing In Wonderland", "price": "1.65", "flag": "🇪🇬", "date": "15.11", "status": "" },
  { "name": "Bio Inc. Redemption", "price": "3.03", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Blasphemous + Blasphemous 2 Bundle", "price": "5.63", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "Blocky Farm", "price": "0.56", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Bright Memory", "price": "0.43", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "Bright Memory: Infinite Platinum Edition", "price": "1.15", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "Brotato & Abyssal Terrors DLC - Bundle", "price": "0.52", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Builder Flipper bundle", "price": "2.79", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "CAFE 0 ~The Sleeping Beast~ REMASTERED", "price": "1.31", "flag": "🇹🇷", "date": "16.11", "status": "" },
  { "name": "CROSSBOW: Bloodnight", "price": "0.31", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Call of the Wild: The Angler™ - Ultimate Fishing Bundle", "price": "9.67", "flag": "🇪🇬", "date": "01.09", "status": " GP" },
  { "name": "Candleman Complete Journey Bundle with Wenjia", "price": "3.06", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Candleman Definitive Edition", "price": "1.6", "flag": "🇧🇷", "date": "15.11", "status": "" },
  { "name": "Car Vouchers (10)", "price": "1.19", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Car Vouchers (24)", "price": "2.38", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Car Vouchers (4)", "price": "0.6", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Cassette Beasts: Deluxe Edition", "price": "1.72", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Cats and Seek : Osaka", "price": "0.17", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "Children of Morta", "price": "0.45", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Chivalry 2 King's Edition", "price": "3.96", "flag": "🇹🇷", "date": "01.10", "status": " GP" },
  { "name": "Chivalry 2 Special Edition", "price": "3.29", "flag": "🇹🇷", "date": "01.10", "status": " GP" },
  { "name": "Chroma Quaternion", "price": "4.29", "flag": "🇯🇵", "date": "15.11", "status": "" },
  { "name": "Cities: Skylines - Mayor's Edition", "price": "27.67", "flag": "🇧🇷", "date": "01.04", "status": " GP" },
  { "name": "Cities: Skylines - Premium Edition 2", "price": "4.6", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "Clocker & Mr. Pumpkin Adventure & Alien Cruise Bundle", "price": "2.15", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Clone Drone in the Danger Zone", "price": "0.58", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "Cocoon", "price": "1.55", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Conan Exiles - Complete Edition October 2021", "price": "10.47", "flag": "🇹🇷", "date": "01.12", "status": " GP" },
  { "name": "Conan Exiles - Isle of Siptah Edition", "price": "38.21", "flag": "🇲🇽", "date": "01.12", "status": " GP" },
  { "name": "Conan Exiles - Isle of Siptah Edition", "price": "4.65", "flag": "🇹🇷", "date": "01.12", "status": " GP" },
  { "name": "Conan Exiles – Complete Edition", "price": "70.22", "flag": "🇲🇽", "date": "01.12", "status": " GP" },
  { "name": "Crash™ + Spyro™ Triple Play Bundle", "price": "13.47", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Crash™ Team Racing Nitro-Fueled + Spyro™ Game Bundle", "price": "10.01", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Creatures of Ava: Deluxe Edition", "price": "13.55", "flag": "🇧🇷", "date": "01.05", "status": " GP" },
  { "name": "Criminal Expert", "price": "0.42", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Crossroads Inn", "price": "4.0", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Crusader Kings III: Royal Edition", "price": "35.58", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Crystal Ortha", "price": "4.29", "flag": "🇯🇵", "date": "15.11", "status": "" },
  { "name": "Ctrl Alt Ego", "price": "8.35", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Cube 3x1", "price": "0.79", "flag": "🇹🇷", "date": "20.11", "status": "" },
  { "name": "Cultist Simulator: Anthology Edition", "price": "9.93", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "DAS WIRED-HORROR-SPIELPAKET", "price": "2.65", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "DEAD ISLAND 2 GOLD EDITION", "price": "40.14", "flag": "🇰🇷", "date": "01.03", "status": " GP" },
  { "name": "DEATH STRANDING DIRECTOR'S CUT", "price": "2.5", "flag": "🇳🇬", "date": "22.11", "status": "" },
  { "name": "DEATHLOOP Deluxe Edition", "price": "35.67", "flag": "🇪🇬", "date": "14.11", "status": " GP" },
  { "name": "DEEEER Simulator: Your Average Everyday Deer Game", "price": "0.98", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "DOOM Eternal Deluxe Edition", "price": "13.96", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "DOOM Eternal: The Ancient Gods - Part One", "price": "4.94", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "DOOM Eternal: The Ancient Gods - Part Two", "price": "4.94", "flag": "🇹🇷", "date": "17.03", "status": " GP" },
  { "name": "DOOM Eternal: Year One Pass (PC)", "price": "7.46", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "DOOM Eternal: Year One Pass", "price": "7.46", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "DYING : Reborn", "price": "0.14", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Dad's Monster House", "price": "1.84", "flag": "🇺🇦", "date": "15.11", "status": "" },
  { "name": "Danger Scavenger", "price": "0.08", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Darkest Dungeon®: Ancestral Edition", "price": "1.98", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Dead Cells: Medley of Pain Bundle", "price": "2.65", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Dead Cells: Return to Castlevania Bundle", "price": "2.07", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Dead by Daylight - Gold Edition", "price": "8.7", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Dead by Daylight: Dungeons & Dragons Edition", "price": "6.26", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Deep Rock Galactic - Deluxe Edition", "price": "2.65", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "Deep Rock Galactic - Ultimate Edition", "price": "3.29", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "Demon Slayer -Kimetsu no Yaiba- Sweep the Board!", "price": "29.01", "flag": "🇯🇵", "date": "14.11", "status": "" },
  { "name": "Dex", "price": "0.29", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Diablo® IV - Expansion Bundle", "price": "47.98", "flag": "🇰🇷", "date": "14.11", "status": " GP" },
  { "name": "Diablo® IV - Standard Edition", "price": "31.96", "flag": "🇧🇷", "date": "14.11", "status": " GP" },
  { "name": "Dishonored®: Death of the Outsider™ Deluxe Bundle", "price": "11.58", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Disney Dreamlight Valley – Gold Edition", "price": "8.7", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Disrtust and Goliath Premium Survival Bundle", "price": "1.43", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Donut County", "price": "0.32", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Duck Run", "price": "0.29", "flag": "🇹🇷", "date": "13.11", "status": "" },
  { "name": "Dungeons 4 - Digital Deluxe Edition", "price": "23.27", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "EA Play", "price": "0.87", "flag": "🇧🇷", "date": "15.11", "status": "" },
  { "name": "EA SPORTS FC™ 24 Standard Edition Xbox One & Xbox Series X|S", "price": "15.99", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "EA SPORTS™ Madden NFL 25 Deluxe Edition Xbox Series X|S & Xbox One", "price": "41.17", "flag": "🇰🇷", "date": "14.11", "status": "" },
  { "name": "EA SPORTS™ Madden NFL 25", "price": "29.46", "flag": "🇰🇷", "date": "14.11", "status": "" },
  { "name": "EMPTY SHELL", "price": "1.05", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Effie", "price": "0.25", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Eiyuden Chronicle: Hundred Heroes - Digital Deluxe Edition", "price": "9.96", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Escape Academy Deluxe Edition", "price": "2.3", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Escape Dead Island", "price": "0.22", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Everdream Valley", "price": "1.55", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Evil Wizard(Xbox)", "price": "6.44", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Exhausted Man and Candleman Bundle", "price": "7.47", "flag": "🇺🇦", "date": "15.11", "status": "" },
  { "name": "ExhaustedMan", "price": "4.83", "flag": "🇺🇦", "date": "15.11", "status": "" },
  { "name": "Expeditions: A MudRunner Game - Supreme Edition", "price": "44.22", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "Expeditions: A MudRunner Game - Year 1 Edition", "price": "37.24", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "F1® 23", "price": "37.31", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "FOR HONOR – Gold Edition", "price": "23.27", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "FOR HONOR – Ultimate Edition", "price": "37.24", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "FPV Simulator", "price": "4.23", "flag": "🇺🇦", "date": "29.11", "status": "" },
  { "name": "FRONT MISSION 1st: Remake", "price": "1.44", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "FRONT MISSION 2: Remake", "price": "1.44", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Fairy Elements", "price": "5.15", "flag": "🇯🇵", "date": "15.11", "status": "" },
  { "name": "Fallout 4: Game of the Year Edition (PC)", "price": "6.63", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Fallout 4: Game of the Year Edition", "price": "6.63", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Fallout 76: Skyline Valley Deluxe Edition", "price": "23.27", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Far Cry® 5 + Far Cry® New Dawn Deluxe Edition Bundle", "price": "18.66", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Far Cry® 5 Gold Edition + Far Cry ® New Dawn Deluxe Editi...", "price": "21.41", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Far Cry® 6 Deluxe Edition", "price": "18.04", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Far Cry® 6 Game of the Year Edition", "price": "22.11", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Far Cry® 6 Gold Edition", "price": "18.62", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Far Cry®5 Gold Edition", "price": "16.29", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Farewell North", "price": "2.38", "flag": "🇳🇬", "date": "19.11", "status": " GP" },
  { "name": "Farm Bundle", "price": "2.65", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Farm Pets Bundle", "price": "3.96", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Farming Simulator 22 - Platinum Edition", "price": "5.01", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Farming Simulator 22 - Premium Edition", "price": "6.26", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Flailing Limbs Bundle", "price": "1.37", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Flintlock – Deluxe Edition", "price": "16.97", "flag": "🇹🇷", "date": "16.01", "status": " GP" },
  { "name": "Flock", "price": "1.68", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Flooded", "price": "0.53", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Forza Horizon 4 Deluxe Edition", "price": "9.96", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 4 Ultimate Edition", "price": "12.52", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 Deluxe Edition", "price": "9.96", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 PLUS Hot Wheels Bundle", "price": "9.96", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 Premium Add-Ons Bundle", "price": "6.26", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 Premium Edition", "price": "12.52", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport Deluxe Edition", "price": "11.21", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport Premium Add-Ons Bundle", "price": "5.01", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport Premium Edition", "price": "12.52", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport and Forza Horizon 5 Premium Add-Ons Bundle", "price": "10.67", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport and Forza Horizon 5 Premium Editions Bundle", "price": "23.73", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Frostpunk: Complete Collection", "price": "2.97", "flag": "🇹🇷", "date": "16.01", "status": " GP" },
  { "name": "Fruit Adventure (Windows 10)", "price": "0.29", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "Fruit Adventure", "price": "0.29", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "Full Metal Sergeant", "price": "0.63", "flag": "🇹🇷", "date": "19.11", "status": " GP" },
  { "name": "Fusion Bundle", "price": "2.06", "flag": "🇳🇬", "date": "19.11", "status": " GP" },
  { "name": "GNOSIA", "price": "1.45", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "Gale of Windoria", "price": "4.29", "flag": "🇯🇵", "date": "15.11", "status": "" },
  { "name": "Garden Bundle", "price": "3.5", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Gears of War 4 and Halo 5: Guardians Bundle", "price": "2.33", "flag": "🇹🇷", "date": "31.01", "status": " GP" },
  { "name": "Gears of War Ultimate Edition Deluxe Version", "price": "1.16", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Gene Rain Ultimate & Your Toy Bundle", "price": "1.07", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Gene Rain Wind Tower: Ultimate Edition", "price": "0.86", "flag": "🇺🇦", "date": "15.11", "status": "" },
  { "name": "Generation Zero® - Ultimate Bundle", "price": "5.93", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Ghost Sync", "price": "4.72", "flag": "🇯🇵", "date": "15.11", "status": "" },
  { "name": "Ghostwire: Tokyo Deluxe Edition", "price": "18.04", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Giraffe and Annika（ジラフとアンニカ）", "price": "0.99", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "Goat Simulator 3 - Multiversal Traveler's Edition", "price": "2.65", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Goat Simulator 3 - Multiversal Traveler's Edition: Xbox One Edition", "price": "2.65", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Goat Simulator: The GOATY", "price": "1.78", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Goat Simulator: Waste Of Space Bundle", "price": "0.99", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Goetia", "price": "0.08", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Golazo!", "price": "0.12", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Golf Club: Wasteland", "price": "0.2", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Golf With Your Friends - Starter Edition", "price": "17.15", "flag": "🇰🇷", "date": "16.07", "status": " GP" },
  { "name": "Golf With Your Friends - Ultimate Edition", "price": "31.39", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Golf vs Zombie", "price": "1.0", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Goliath", "price": "0.11", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Gord", "price": "8.79", "flag": "🇹🇷", "date": "14.11", "status": "" },
  { "name": "Gorogoa", "price": "0.34", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Greed 2: Forbidden Experiments", "price": "1.31", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "Green Hell Xbox Series X|S", "price": "2.32", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Green Hell", "price": "1.19", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Guardian of Lore", "price": "0.52", "flag": "🇳🇬", "date": "19.11", "status": "" },
  { "name": "HARDCORE MECHA", "price": "8.76", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "HITMAN™ 2", "price": "7.18", "flag": "🇹🇷", "date": "04.02", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ 2 - Turbocharged - Deluxe Edition", "price": "8.29", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ 2 - Turbocharged - Legendary Edition", "price": "10.67", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "HUMANKIND™ - Heritage Edition", "price": "7.45", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Halo 5: Guardians – Digital Deluxe Edition", "price": "19.2", "flag": "🇹🇷", "date": "31.05", "status": " GP" },
  { "name": "Halo Wars 2: Complete Edition", "price": "23.27", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Hard Reset Redux", "price": "0.14", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Hard West Ultimate Edition", "price": "0.16", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Headspun", "price": "0.29", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "Heliborne", "price": "5.29", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Hell Let Loose - Deluxe Edition", "price": "7.45", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hello Neighbor 2 Deluxe Edition", "price": "7.45", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hi-Fi RUSH Deluxe Edition", "price": "13.96", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Hidden Paws Mystery", "price": "0.26", "flag": "🇹🇷", "date": "13.11", "status": "" },
  { "name": "Hindsight", "price": "0.49", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Hollow", "price": "0.16", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Hotline Miami", "price": "0.31", "flag": "🇳🇬", "date": "19.11", "status": " GP" },
  { "name": "Huge Moonstone Pack -- 14,500", "price": "12.46", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hunting Simulator 2", "price": "0.49", "flag": "🇹🇷", "date": "19.11", "status": " GP" },
  { "name": "Hypnospace Outlaw & Slayers X: Terminal Aftermath: Vengance of the Slayer Bundle", "price": "2.21", "flag": "🇹 🇷", "date": "01.06", "status": " GP" },
  { "name": "I Am Dead", "price": "0.41", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "INSIDE & LIMBO Bundle", "price": "3.22", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "ImmortalLegacy:TheJadeCipherConsoleEdition", "price": "3.76", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Immortals Fenyx Rising™ Gold Edition", "price": "33.74", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Immortals of Aveum™ Deluxe Edition", "price": "29.31", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "Initial 2: New Stage & Xuan Yuan Sword Bundle", "price": "5.01", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Initial2: New Stage", "price": "4.83", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Injustice™ 2 - Legendary Edition", "price": "4.95", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Insurgency: Sandstorm - Deluxe Edition", "price": "13.32", "flag": "🇯🇵", "date": "19.11", "status": " GP" },
  { "name": "Insurgency: Sandstorm - Gold Edition", "price": "37.24", "flag": "🇹🇷", "date": "16.01", "status": " GP" },
  { "name": "Insurgency: Sandstorm - Ultimate Edition", "price": "44.22", "flag": "🇹🇷", "date": "16.01", "status": " GP" },
  { "name": "Isonzo: Collector's Edition", "price": "5.6", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Isonzo: Deluxe Edition", "price": "2.65", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Isonzo: Ultimate Edition", "price": "56.13", "flag": "🇯🇵", "date": "16.06", "status": " GP" },
  { "name": "JM Neto Game Dev All Games", "price": "0.92", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "JM Neto Game Dev Games", "price": "0.46", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "Jetpack Kiwi", "price": "3.07", "flag": "🇮🇳", "date": "23.11", "status": "" },
  { "name": "Jurassic World Evolution 2: Deluxe Edition", "price": "10.08", "flag": "🇪🇬", "date": "16.05", "status": " GP" },
  { "name": "Jurassic World Evolution 2: Dominion Bundle", "price": "11.54", "flag": "🇪🇬", "date": "14.11", "status": " GP" },
  { "name": "Just Dance 2018", "price": "0.0", "flag": "🇵🇭", "date": "", "status": "" },
  { "name": "KURSK", "price": "0.16", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Kaiju Wars", "price": "0.57", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Kao the Kangaroo", "price": "2.18", "flag": "🇹🇷", "date": "19.11", "status": " GP" },
  { "name": "Kargast", "price": "0.42", "flag": "🇳🇬", "date": "19.11", "status": " GP" },
  { "name": "Kentucky Route Zero: TV Edition", "price": "0.83", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Klabater Bundle: The Amazing American Circus, Moonshine Inc., Heliborne and Crossroads Inn", "price": "4.91", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Knights of Grayfang", "price": "5.57", "flag": "🇯🇵", "date": "15.11", "status": "" },
  { "name": "LA Cops", "price": "0.27", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "LEGO® 2K Drive Awesome Edition", "price": "36.79", "flag": "🇰🇷", "date": "14.11", "status": "" },
  { "name": "LEGO® 2K Drive Awesome Rivals Edition", "price": "52.34", "flag": "🇹🇷", "date": "14.11", "status": "" },
  { "name": "LEGO® Star Wars™: The Skywalker Saga Galactic Edition", "price": "11.54", "flag": "🇪🇬", "date": "01.05", "status": " GP" },
  { "name": "LEGO® Star Wars™: The Skywalker Saga", "price": "8.69", "flag": "🇪🇬", "date": "14.11", "status": " GP" },
  { "name": "LEGO® Star Wars™:The Skywalker Saga Deluxe Edition", "price": "10.08", "flag": "🇪🇬", "date": "01.05", "status": " GP" },
  { "name": "Last Stop", "price": "0.62", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Legal Dungeon", "price": "0.42", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "Legend of Ixtona", "price": "4.72", "flag": "🇯🇵", "date": "15.11", "status": "" },
  { "name": "Legend of Keepers: Complete Edition", "price": "8.4", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Liege Dragon", "price": "4.29", "flag": "🇯🇵", "date": "15.11", "status": "" },
  { "name": "Lies of P Digital Deluxe Edition", "price": "8.7", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Light & Dark Bundle", "price": "3.58", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Like a Dragon Gaiden: The Man Who Erased His Name Deluxe Edition", "price": "25.79", "flag": "🇵🇭", "date": "14.11", "status": " GP" },
  { "name": "Like a Dragon: Ishin! Digital Deluxe Edition", "price": "25.58", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Lords of the Fallen Deluxe Edition", "price": "9.96", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Love FMV", "price": "1.6", "flag": "🇹🇷", "date": "19.11", "status": " GP" },
  { "name": "Luxury Garden Bundle", "price": "3.96", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "METAL SLUG ATTACK RELOADED", "price": "0.83", "flag": "🇳🇬", "date": "23.11", "status": "" },
  { "name": "METRO QUESTER", "price": "7.93", "flag": "🇺🇦", "date": "15.11", "status": "" },
  { "name": "MLB® The Show™ 24 - Digital Deluxe Edition", "price": "23.27", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "MLB® The Show™ 24 - MVP Edition", "price": "19.78", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "MLB® The Show™ 24 - Xbox One Standard Edition", "price": "13.96", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "MLB® The Show™ 24 - Xbox Series X|S Standard Edition", "price": "33.74", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "MUSYNX Deluxe Edition", "price": "5.37", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "MUSYNX Song Pass bundle", "price": "4.29", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Madden NFL 19", "price": "27.11", "flag": "🇨🇴", "date": "30.12", "status": "" },
  { "name": "Madden NFL 24 Xbox Series X|S & Xbox One", "price": "15.99", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "Magic Cats Pots", "price": "0.67", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Magical Drop VI", "price": "0.62", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Maneater Apex Edition", "price": "3.29", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "Maquette", "price": "0.65", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Marenian Tavern Story: Patty and the Hungry God", "price": "5.0", "flag": "🇯🇵", "date": "15.11", "status": "" },
  { "name": "Marfusha", "price": "1.04", "flag": "🇳🇬", "date": "19.11", "status": "" },
  { "name": "Master of Survival bundle", "price": "2.5", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "McPixel 3", "price": "0.25", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "MechWarrior 5: Mercenaries - JumpShip Edition", "price": "4.67", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Metal Mind", "price": "5.15", "flag": "🇮🇳", "date": "15.11", "status": "" },
  { "name": "MiceGard", "price": "0.59", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.0", "flag": "🇺🇸", "date": "30.11", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.0", "flag": "🇺🇸", "date": "30.11", "status": "" },
  { "name": "Microsoft Flight Simulator Deluxe 40th Anniversary Edition", "price": "11.21", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Microsoft Flight Simulator Premium Deluxe 40th Anniversar...", "price": "14.9", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Middle-earth™: Shadow of War™ Definitive Edition", "price": "5.09", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Middle-earth™: The Shadow Bundle", "price": "13.94", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Miden Tower", "price": "4.29", "flag": "🇯🇵", "date": "15.11", "status": "" },
  { "name": "Mighty Goose", "price": "0.65", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "Mimi the Cat: New Friends", "price": "0.29", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle - Windows 10", "price": "1.47", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle", "price": "1.47", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate Edition for Windows", "price": "5.77", "flag": "🇪🇬", "date": "14.11", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate Edition", "price": "5.01", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Minecraft Legends Deluxe Edition", "price": "6.26", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Minecraft: Deluxe Collection", "price": "3.76", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Mokoko X", "price": "0.45", "flag": "🇳🇬", "date": "19.11", "status": " GP" },
  { "name": "Monster Hunter Rise + Sunbreak Deluxe", "price": "36.33", "flag": "🇯🇵", "date": "01.04", "status": " GP" },
  { "name": "Monster Hunter Rise + Sunbreak", "price": "31.13", "flag": "🇯🇵", "date": "14.11", "status": " GP" },
  { "name": "Monster Hunter Rise Deluxe Edition", "price": "18.71", "flag": "🇪🇬", "date": "01.04", "status": " GP" },
  { "name": "Monster Sanctuary", "price": "1.08", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "Monster Truck Championship - Rebel Hunter Edition", "price": "0.41", "flag": "🇹🇷", "date": "19.11", "status": " GP" },
  { "name": "Monster Viator", "price": "4.29", "flag": "🇯🇵", "date": "15.11", "status": "" },
  { "name": "Moon Raider and Sweet Witches Bundle", "price": "0.34", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "Moonfall Ultimate", "price": "0.37", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "Moonlighter: Complete Edition", "price": "1.57", "flag": "🇹🇷", "date": "01.12", "status": " GP" },
  { "name": "Moonshine Inc. : Supporter Edition", "price": "5.56", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Morkredd", "price": "0.49", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "Mortal Kombat 11 Ultimate + Injustice 2 Leg. Edition Bundle", "price": "19.99", "flag": "🇹🇷", "date": "16.12", "status": " GP" },
  { "name": "Mortal Kombat 11 Ultimate", "price": "8.69", "flag": "🇪🇬", "date": "16.12", "status": " GP" },
  { "name": "Mount & Blade II: Bannerlord Digital Deluxe Edition", "price": "7.45", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Moving Out 2 - Deluxe Edition", "price": "4.11", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Moving Out", "price": "1.45", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "Mr. Pumpkin Adventure Mr. Pumpkin 2: Kowloon walled city ...", "price": "1.73", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Mr. Pumpkin Series Bundle", "price": "1.19", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Mundaun", "price": "0.95", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "My Friend Peppa Pig - Complete Edition", "price": "6.5", "flag": "🇪🇬", "date": "01.07", "status": " GP" },
  { "name": "My Time at Sandrock Deluxe Edition", "price": "3.29", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "NHL® 24 Standard Edition Xbox One", "price": "18.95", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "NHL® 24 Standard Edition Xbox Series X|S", "price": "21.32", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "NHL® 25 Standard Edition + Loyalty Offer", "price": "47.13", "flag": "🇰🇷", "date": "30.12", "status": "" },
  { "name": "NINJA GAIDEN: Master Collection Deluxe Edition", "price": "5.96", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "NO THING", "price": "0.08", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Neon Abyss Deluxe Edition", "price": "1.83", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "Neon White", "price": "1.86", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Nickelodeon All-Star Brawl 2 Deluxe Edition", "price": "10.08", "flag": "🇪🇬", "date": "14.11", "status": " GP" },
  { "name": "Nickelodeon All-Star Brawl 2 Ultimate Edition", "price": "11.54", "flag": "🇪🇬", "date": "01.01", "status": " GP" },
  { "name": "Night Slashers: Remake", "price": "0.56", "flag": "🇹🇷", "date": "19.11", "status": " GP" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.2", "flag": "🇹🇷", "date": "30.05", "status": "" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "25.71", "flag": "🇧🇷", "date": "16.03", "status": " GP" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "28.9", "flag": "🇮🇳", "date": "16.03", "status": " GP" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "3.96", "flag": "🇹🇷", "date": "16.03", "status": " GP" },
  { "name": "Noel the Mortal Fate", "price": "0.83", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "O.W.L Projekt", "price": "2.55", "flag": "🇮🇳", "date": "21.11", "status": "" },
  { "name": "OCTOPATH TRAVELER + OCTOPATH TRAVELER II Bundle", "price": "40.57", "flag": "🇺🇦", "date": "01.12", "status": " GP" },
  { "name": "OddBallers™", "price": "1.66", "flag": "🇹🇷", "date": "19.11", "status": " GP" },
  { "name": "Open Roads", "price": "1.5", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Orangeblood (オレンジブラッド)", "price": "0.65", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "Orcs Must Die! 3 Bundle", "price": "2.65", "flag": "🇹🇷", "date": "16.04", "status": " GP" },
  { "name": "Ori: The Collection", "price": "6.26", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Outer Wilds", "price": "1.24", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Outer Wilds: Archaeologist Edition", "price": "1.99", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Overboss", "price": "0.83", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Overcooked! 2 - Gourmet Edition", "price": "2.09", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Paint Ball - Jump n Run", "price": "1.54", "flag": "🇺🇦", "date": "06.12", "status": "" },
  { "name": "Panzer Dragoon: Remake", "price": "0.21", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Paradox Error", "price": "1.12", "flag": "🇮🇳", "date": "19.11", "status": "" },
  { "name": "Party Animals Deluxe Edition", "price": "3.76", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Paw Patrol Bundle", "price": "8.69", "flag": "🇪🇬", "date": "14.11", "status": " GP" },
  { "name": "Perfect Ninja Painter", "price": "0.31", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "Persona 5 Tactica: Digital Deluxe Edition", "price": "41.87", "flag": "🇹🇷", "date": "16.11", "status": " GP" },
  { "name": "Pets Bundle", "price": "2.97", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Pets Hotel", "price": "1.55", "flag": "🇹🇷", "date": "23.11", "status": "" },
  { "name": "Phantom Doctrine", "price": "0.25", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Phoenix Point: Behemoth Edition", "price": "1.98", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Planescape: Torment and Icewind Dale: Enhanced Editions", "price": "1.45", "flag": "🇹🇷", "date": "19.11", "status": " GP" },
  { "name": "Prey®: Digital Deluxe Edition", "price": "23.13", "flag": "🇯🇵", "date": "14.11", "status": " GP" },
  { "name": "Pure Farming 2018", "price": "1.03", "flag": "🇧🇷", "date": "19.11", "status": "" },
  { "name": "Q-YO Blaster", "price": "0.08", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "RAGE 2: Deluxe Edition", "price": "10.47", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "REDO!", "price": "0.48", "flag": "🇳🇬", "date": "19.11", "status": " GP" },
  { "name": "REPLICA（レプリカ）", "price": "0.2", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "RESIDENT EVIL 2 Deluxe Edition", "price": "24.08", "flag": "🇵🇭", "date": "16.09", "status": " GP" },
  { "name": "RPGolf Legends", "price": "1.24", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "ReCore", "price": "2.5", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Ready, Steady, Ship!", "price": "0.99", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Realpolitiks New Power", "price": "0.21", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Record of Lodoss War-Deedlit in Wonder Labyrinth-", "price": "1.04", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "Regular Moonstone Pack -- 2,500", "price": "2.33", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Remnant II - Deluxe Edition", "price": "8.69", "flag": "🇪🇬", "date": "01.06", "status": " GP" },
  { "name": "Remnant II - Ultimate Edition", "price": "10.08", "flag": "🇪🇬", "date": "14.11", "status": " GP" },
  { "name": "Remnant: From the Ashes - Complete Edition", "price": "7.23", "flag": "🇪🇬", "date": "14.11", "status": " GP" },
  { "name": "Richman 10", "price": "4.29", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Richman 11", "price": "8.49", "flag": "🇮🇳", "date": "19.11", "status": " GP" },
  { "name": "Riders Republic™ 360 Edition", "price": "30.25", "flag": "🇹🇷", "date": "09.12", "status": " GP" },
  { "name": "Riders Republic™ Complete Edition", "price": "40.73", "flag": "🇹🇷", "date": "09.12", "status": " GP" },
  { "name": "Riders Republic™ Skate Edition", "price": "23.27", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Rims Racing : Ultimate Edition Xbox One & Xbox Series X|S", "price": "2.54", "flag": "🇹🇷", "date": "19.11", "status": " GP" },
  { "name": "Rise Eterna War", "price": "0.56", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Rise Eterna", "price": "0.16", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Rise of the Tomb Raider: 20 Year Celebration", "price": "12.14", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Roarr! Jurassic Edition", "price": "0.12", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Ruinarch", "price": "4.1", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Ruiner", "price": "0.33", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Rusted Moss", "price": "1.31", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "Ruvato: Original Complex", "price": "0.44", "flag": "🇹🇷", "date": "19.11", "status": " GP" },
  { "name": "SAMURAI SHODOWN (Standard Ver.)", "price": "0.74", "flag": "🇹🇷", "date": "23.11", "status": "" },
  { "name": "SAMURAI SHODOWN DELUXE EDITION", "price": "0.99", "flag": "🇹🇷", "date": "23.11", "status": "" },
  { "name": "SENSEs: Midnight", "price": "4.77", "flag": "🇧🇷", "date": "19.11", "status": " GP" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "12.25", "flag": "🇹🇷", "date": "31.12", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "8.1", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "SUPERHOT ONE OF US BUNDLE", "price": "2.07", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "Sayonara Wild Hearts", "price": "0.63", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Sea of Thieves: 2024 Deluxe Edition", "price": "5.96", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Sea of Thieves: 2024 Premium Edition", "price": "7.09", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Seeds of Resilience", "price": "0.12", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Seek Hearts", "price": "4.29", "flag": "🇯🇵", "date": "15.11", "status": "" },
  { "name": "Sephirothic Stories", "price": "4.29", "flag": "🇯🇵", "date": "15.11", "status": "" },
  { "name": "Session: Skate Sim", "price": "0.82", "flag": "🇹🇷", "date": "19.11", "status": " GP" },
  { "name": "Shadow Tactics - Ultimate Bundle", "price": "38.4", "flag": "🇹🇷", "date": "06.12", "status": "" },
  { "name": "Shadow Tactics: Aiko's Choice - Deluxe Edition", "price": "15.59", "flag": "🇰🇷", "date": "06.12", "status": "" },
  { "name": "Shadow Tactics: Aiko's Choice", "price": "12.71", "flag": "🇰🇷", "date": "06.12", "status": "" },
  { "name": "Shadow Warrior 2", "price": "0.37", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Shadow Warrior 3", "price": "1.25", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Shadow Warrior", "price": "0.23", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Sherlock Holmes Chapter One", "price": "0.84", "flag": "🇳🇬", "date": "19.11", "status": " GP" },
  { "name": "Sherlock Holmes The Awakened", "price": "1.25", "flag": "🇳🇬", "date": "19.11", "status": " GP" },
  { "name": "Silver Axe - The Honest Elf", "price": "2.0", "flag": "🇳🇬", "date": "23.11", "status": "" },
  { "name": "Skater's Solstice", "price": "2.55", "flag": "🇮🇳", "date": "14.11", "status": "" },
  { "name": "Skyrim Anniversary Edition + Fallout 4 G.O.T.Y Bundle", "price": "18.62", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Slam and Roll", "price": "1.24", "flag": "🇳🇬", "date": "14.11", "status": "" },
  { "name": "SlavicPunk: Oldtimer", "price": "1.81", "flag": "🇳🇬", "date": "21.11", "status": "" },
  { "name": "Slime-san Superslime Edition", "price": "0.11", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "Small Moonstone Pack -- 1,200", "price": "1.19", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Sniper Elite 5 Complete Edition", "price": "7.27", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Sniper Elite 5 Deluxe Edition", "price": "11.21", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "SnowRunner - 1-Anniversary Edition", "price": "6.98", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "SnowRunner - 3-Year Anniversary Edition", "price": "23.27", "flag": "🇹🇷", "date": "19.11", "status": " GP" },
  { "name": "SnowRunner - 4-Year Anniversary Edition", "price": "44.22", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Solar Ash", "price": "2.0", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Solar Shifter EX", "price": "0.07", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "South Park™: The Fractured but Whole™ - Gold Edition", "price": "30.25", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Space Engineers: Ultimate Edition 2023", "price": "4.89", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "Sparkle 4 Tales", "price": "0.08", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Sparkle Bundle", "price": "0.95", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Spyro™ + Crash Remastered Game Bundle", "price": "11.82", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Starfield Premium Edition Upgrade", "price": "5.67", "flag": "🇪🇬", "date": "05.09", "status": " GP" },
  { "name": "Starfield Premium Edition", "price": "14.46", "flag": "🇪🇬", "date": "14.11", "status": " GP" },
  { "name": "Starward Rogue: Complete Edition", "price": "4.47", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "SteamWorld Build & Dig Bundle", "price": "4.35", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "SteamWorld Build Deluxe Edition", "price": "4.11", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Stellaris: Console Edition - Deluxe Edition", "price": "3.99", "flag": "🇹🇷", "date": "16.01", "status": " GP" },
  { "name": "Strategic Mind: Fight for Dominance", "price": "6.18", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Strategic Mind: Fight for Freedom", "price": "0.99", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Strategic Mind: Spectre of Communism", "price": "3.26", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Strategic Mind: Spirit of Liberty", "price": "4.07", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Strategic Mind: The Pacific", "price": "0.82", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Stray", "price": "2.25", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Sudoku Classic X", "price": "0.34", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "Sunset Overdrive Deluxe Edition", "price": "1.62", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Swapshot (Xbox & PC)", "price": "1.91", "flag": "🇮🇳", "date": "19.11", "status": "" },
  { "name": "Sword and Fairy: Together Forever", "price": "6.26", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Sword of Elpisia", "price": "4.29", "flag": "🇯🇵", "date": "15.11", "status": "" },
  { "name": "Syberia 3", "price": "2.6", "flag": "🇮🇳", "date": "19.11", "status": " GP" },
  { "name": "Synchro Hedgehogs Bundle", "price": "0.29", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "Taiko no Tatsujin: Rhythm Festival Taiko Music Pass", "price": "0.0", "flag": "🇳🇬", "date": "30.11", "status": "" },
  { "name": "Tales of ARISE + SCARLET NEXUS バンドル", "price": "34.88", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Tales of Arise - Beyond The Dawn Ultimate Edition", "price": "41.87", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Tales of Arise - Beyond the Dawn Deluxe Edition", "price": "34.88", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Tales of Arise - Beyond the Dawn Edition", "price": "25.58", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Tank Cafe", "price": "2.64", "flag": "🇳🇬", "date": "19.11", "status": "" },
  { "name": "Tchia: Oléti Edition", "price": "7.69", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Teenage Mutant Ninja Turtles: Shredder's Revenge - Ultimate Edition", "price": "2.18", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Telling Lies", "price": "0.41", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Terraformers", "price": "4.44", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Terraformers: New Frontiers Bundle", "price": "5.39", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Tetris® Forever", "price": "18.38", "flag": "🇺🇦", "date": "12.11", "status": "" },
  { "name": "The Amazing American Circus", "price": "0.87", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "The Artful Escape", "price": "0.65", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "The Ascent", "price": "1.13", "flag": "🇳🇬", "date": "19.11", "status": "" },
  { "name": "The Bard's Tale Trilogy", "price": "0.73", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "The Bridge Curse: Road to Salvation", "price": "9.62", "flag": "🇮🇳", "date": "19.11", "status": " GP" },
  { "name": "The Callisto Protocol™ for Xbox One – Digital Deluxe Edition", "price": "16.87", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "The Callisto Protocol™ for Xbox Series X|S – Digital Delu...", "price": "19.78", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "The Childs Sight", "price": "0.08", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "The Clocker", "price": "0.66", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "The Elder Scrolls III: Morrowind", "price": "1.13", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "The Elder Scrolls Online Collection: Gold Road", "price": "30.25", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "The Elder Scrolls Online Deluxe Collection: Gold Road", "price": "40.73", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "The Elder Scrolls V: Skyrim Anniversary Edition", "price": "11.17", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "The Escapists & The Escapists: The Walking Dead", "price": "0.52", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "The Escapists", "price": "0.42", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "The Escapists: Supermax Edition", "price": "1.78", "flag": "🇹🇷", "date": "14.11", "status": "" },
  { "name": "The Evil Within Digital Bundle", "price": "2.36", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "The Good Life", "price": "1.32", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "The Hellblade Bundle", "price": "10.4", "flag": "🇪🇬", "date": "14.11", "status": " GP" },
  { "name": "The Hong Kong Massacre", "price": "1.25", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "The Jackbox Party Quadpack", "price": "6.22", "flag": "🇹🇷", "date": "31.12", "status": "" },
  { "name": "The Lamplighters League - Deluxe Edition", "price": "6.86", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "The Lucid Dreamer Bundle", "price": "1.0", "flag": "🇳🇬", "date": "19.11", "status": "" },
  { "name": "The MUSYNX", "price": "0.6", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "The Pathless", "price": "1.25", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "The Quarry - Deluxe Edition", "price": "18.36", "flag": "🇹🇷", "date": "16.12", "status": " GP" },
  { "name": "The Sealed Ampoule", "price": "0.65", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "The Sorrowvirus - A Faceless Short Story", "price": "2.86", "flag": "🇧🇷", "date": "19.11", "status": "" },
  { "name": "The Super Penguboy (Windows 10)", "price": "0.29", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "The Super Penguboy", "price": "0.29", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "Thirsty Suitors", "price": "2.25", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "This War of Mine - Complete Edition", "price": "1.77", "flag": "🇹🇷", "date": "16.12", "status": " GP" },
  { "name": "Timberman VS", "price": "0.08", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Timberman: The Big Adventure", "price": "0.2", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Tin Can", "price": "3.32", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Tiny Hands Adventure", "price": "0.1", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Tom Clancy's Rainbow Six® Extraction United Bundle", "price": "13.96", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Ultimate Edition", "price": "12.31", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Year 2 Gold Edition", "price": "9.31", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Tom Clancy’s Rainbow Six Siege Operator Edition", "price": "30.25", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Tom Clancy’s Rainbow Six Siege Ultimate Edition", "price": "37.24", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Tomb Raider: Definitive Survivor Trilogy", "price": "20.24", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Tools Up - Ultimate Edition", "price": "0.87", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Tools Up!", "price": "0.33", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Totally Reliable Delivery Service Deluxe Edition", "price": "1.57", "flag": "🇹🇷", "date": "01.12", "status": " GP" },
  { "name": "Touhou Luna Nights", "price": "1.04", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "Towaga: Among Shadows", "price": "0.12", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Trailmakers: Booster Edition", "price": "2.3", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers: Deluxe Edition", "price": "3.29", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers: Ultimate Edition", "price": "3.96", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Train Life: A Railway Simulator", "price": "0.49", "flag": "🇹🇷", "date": "19.11", "status": " GP" },
  { "name": "Transport Fever 2: Console Edition - Deluxe", "price": "7.12", "flag": "🇹🇷", "date": "19.11", "status": " GP" },
  { "name": "Trek to Yomi", "price": "0.57", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Troopers", "price": "4.63", "flag": "🇺🇦", "date": "01.12", "status": "" },
  { "name": "Turbo Golf Racing: Deep Space Bundle", "price": "1.05", "flag": "🇹🇷", "date": "16.04", "status": " GP" },
  { "name": "Turbo Golf Racing: Ultimate Bundle", "price": "1.25", "flag": "🇹🇷", "date": "16.04", "status": " GP" },
  { "name": "Turnip Boy Robs a Bank Pre-Release", "price": "0.99", "flag": "🇹🇷", "date": "15.07", "status": " GP" },
  { "name": "Twelve Minutes", "price": "0.83", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Tycoon Bundle", "price": "0.76", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "UFC® 5 Deluxe Edition", "price": "33.71", "flag": "🇰🇷", "date": "14.11", "status": "" },
  { "name": "UFC® 5 Standard Edition", "price": "26.65", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "UFC® 5", "price": "26.65", "flag": "🇮🇳", "date": "14.11", "status": "" },
  { "name": "UNABLES", "price": "0.53", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "UNO™ Ultimate Edition", "price": "12.35", "flag": "🇨🇱", "date": "19.11", "status": " GP" },
  { "name": "Umurangi Generation Special Edition", "price": "1.04", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "1.2", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Vampire Hunters", "price": "0.99", "flag": "🇹🇷", "date": "14.11", "status": "" },
  { "name": "Vermintide - Digital Value Pack", "price": "2.56", "flag": "🇹🇷", "date": "07.03", "status": "" },
  { "name": "Violett Remastered", "price": "0.08", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Vision Soft Reset", "price": "0.81", "flag": "🇳🇬", "date": "19.11", "status": " GP" },
  { "name": "WRC 10 FIA World Rally Championship", "price": "2.02", "flag": "🇹🇷", "date": "19.11", "status": " GP" },
  { "name": "WRC 9 Deluxe Edition FIA World Rally Championship", "price": "0.41", "flag": "🇹🇷", "date": "19.11", "status": " GP" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "9.16", "flag": "🇹🇷", "date": "30.08", "status": "" },
  { "name": "WRC Generations - The FIA WRC Official Game", "price": "4.8", "flag": "🇹🇷", "date": "19.11", "status": " GP" },
  { "name": "Warhammer 40,000: Boltgun - Forges of Corruption Edition", "price": "10.3", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "Warhammer 40,000: Darktide - Imperial Edition", "price": "8.94", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Warhammer 40,000: Inquisitor - Martyr Ultimate Edition", "price": "1.48", "flag": "🇹🇷", "date": "19.11", "status": " GP" },
  { "name": "Wasteland 3 (PC) Colorado Collection", "price": "6.26", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Wasteland 3 Colorado Collection", "price": "10.22", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "Watch Dogs®2 - Deluxe Edition", "price": "29.19", "flag": "🇧🇷", "date": "01.07", "status": " GP" },
  { "name": "Watch Dogs®2 - Gold Edition", "price": "47.71", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Watch Dogs®: Legion Ultimate Edition", "price": "5.53", "flag": "🇹🇷", "date": "19.11", "status": " GP" },
  { "name": "We Happy Few Digital Deluxe", "price": "7.39", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "We Love Katamari REROLL+ Royal Reverie Special Edition", "price": "5.13", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "We. The Revolution", "price": "0.38", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "Weedcraft Inc & Moonshine Inc - Risky Business Bundle", "price": "5.93", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Weedcraft Inc + Moonshine Inc + Big Pharma - Chemistry Tycoons Bundle", "price": "9.89", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Weedcraft Inc", "price": "7.23", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "What Lies in the Multiverse", "price": "0.36", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "What Remains of Edith Finch", "price": "0.36", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Windscape", "price": "0.16", "flag": "🇹🇷", "date": "19.11", "status": "" },
  { "name": "Wings of Bluestar", "price": "4.77", "flag": "🇧🇷", "date": "19.11", "status": " GP" },
  { "name": "Wired Italian Adventure Bundle", "price": "1.98", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Wo Long: Fallen Dynasty Complete Edition", "price": "29.76", "flag": "🇺🇦", "date": "14.11", "status": " GP" },
  { "name": "Wolcen: Lords of Mayhem - Deluxe Edition", "price": "13.08", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Wolcen: Lords of Mayhem", "price": "10.46", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "Wolfenstein: Alt History Collection", "price": "11.64", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Wolfenstein: Youngblood Deluxe Edition", "price": "5.09", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Wolfenstein® II: The New Colossus™ Digital Deluxe Edition", "price": "6.98", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "Wolfenstein®: The Two-Pack", "price": "3.69", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "World War Z: Aftermath - Deluxe Edition", "price": "15.13", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "Wreckfest Complete Edition", "price": "19.11", "flag": "🇧🇷", "date": "16.11", "status": " GP" },
  { "name": "Yakuza: Like a Dragon Hero Edition", "price": "11.43", "flag": "🇯🇵", "date": "01.04", "status": " GP" },
  { "name": "Yakuza: Like a Dragon Legendary Hero Edition", "price": "15.44", "flag": "🇯🇵", "date": "01.04", "status": " GP" },
  { "name": "Your Toy", "price": "0.11", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "YourToy and Dying: Reborn Horror Game Bundle", "price": "1.43", "flag": "🇳🇬", "date": "15.11", "status": "" },
  { "name": "orbit.industries", "price": "0.57", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Master Hunter Bundle", "price": "3.96", "flag": "🇹🇷", "date": "14.11", "status": " GP" }
]

let usd = 110;

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



