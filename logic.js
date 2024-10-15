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
  { "name": "1000 Ancient Coins - Hidden Trove of the Ancients", "price": "1.65", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "150 Ancient Coins - Secret Stash of the Ancients", "price": "0.33", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "1971 Project Helios", "price": "0.59", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "2550 Ancient Coins - Royal Treasury of the Ancients", "price": "3.8", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "2K Ball N’ Brawl Bundle", "price": "3.42", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "4250 Ancient Coins - Glittering Tribute of the Ancients", "price": "5.75", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "550 Ancient Coins - Lost Chest of the Ancients", "price": "0.98", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "88 Heroes", "price": "0.11", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "8Doors: Arum's Afterlife Adventure", "price": "0.19", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "A Little to the Left: Extra Tidy Bundle", "price": "3.42", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "A Pixel Story", "price": "0.09", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "A Plague Tale: Requiem", "price": "7.92", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "ACE COMBAT™ 7: SKIES UNKNOWN - TOP GUN: Maverick Ultimate Edition", "price": "2.93", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "AEW: Fight Forever - Ultimate Edition", "price": "36.2", "flag": "🇨🇦", "date": "22.10", "status": " GP" },
  { "name": "ASTRONEER: Evolution Edition", "price": "1.33", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "AVATAR: FRONTIERS OF PANDORA™", "price": "21.16", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Adventure Tanks", "price": "0.5", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Adventures of Chris", "price": "0.25", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Aeon Must Die!", "price": "1.39", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "After Us", "price": "8.03", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Age of Empires 25th Anniversary Collection", "price": "7.94", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Age of Empires II: Deluxe Definitive Edition Bundle", "price": "5.13", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Age of Empires: Definitive Collection", "price": "5.75", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Age of Mythology: Retold Premium Edition", "price": "26.24", "flag": "🇹🇷", "date": "03.12", "status": " GP" },
  { "name": "Amelia's Diner", "price": "2.73", "flag": "🇺🇦", "date": "24.10", "status": "" },
  { "name": "America’s Greatest Game Shows: Wheel of Fortune® & Jeopar...", "price": "3.35", "flag": "🇧🇷", "date": "22.10", "status": " GP" },
  { "name": "Ancestors: The Humankind Odyssey", "price": "1.67", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Anima: Gate of Memories", "price": "0.21", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Anno 1800™ Console Edition - Deluxe", "price": "6.71", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Aquarium Land: Complete Edition", "price": "0.58", "flag": "🇹🇷", "date": "27.10", "status": "" },
  { "name": "Arcade Paradise | High Score Edition", "price": "1.84", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Arietta of Spirits", "price": "0.39", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Assassin's Creed Legendary Collection", "price": "85.77", "flag": "🇧🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Bundle: Assassin's Creed® Valhalla, Ass...", "price": "37.35", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey - DELUXE EDITION", "price": "16.34", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey - GOLD EDITION", "price": "18.68", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey - ULTIMATE EDITION", "price": "21.6", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Origins - DELUXE EDITION", "price": "15.76", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Origins - GOLD EDITION", "price": "18.68", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Complete Edition", "price": "23.35", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Deluxe Edition", "price": "18.09", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Ragnarök Edition", "price": "14.01", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin’s Creed® Valhalla + Immortals Fenyx Rising™ Bundle", "price": "58.37", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin’s Creed® Valhalla + Watch Dogs®: Legion Bundle", "price": "26.85", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Asterix & Obelix XXL Collection", "price": "5.17", "flag": "🇮🇳", "date": "22.10", "status": " GP" },
  { "name": "Astro Flame Starfighter", "price": "0.5", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Atlas Fallen: Reign of Sand", "price": "17.84", "flag": "🇮🇳", "date": "22.10", "status": " GP" },
  { "name": "Atomic Heart", "price": "13.42", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Avatar The Last Airbender: Quest for Balance", "price": "11.38", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Avatar: Frontiers of Pandora™ Gold Edition", "price": "27.72", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Aven Colony", "price": "1.45", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Awarded Platformer Bundle", "price": "1.16", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "BATTLETECH Mercenary Collection", "price": "5.95", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "BIOHAZARD RE:2 Z Version デラックスエディション", "price": "26.77", "flag": "🇯🇵", "date": "17.10", "status": " GP" },
  { "name": "BLACKTAIL", "price": "2.63", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "BRUTAL 2URVIVE Bundle", "price": "0.49", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Baby Shark™: Sing & Swim Party", "price": "9.52", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Back 4 Blood: Ultimate Edition", "price": "1.83", "flag": "🇪🇬", "date": "17.10", "status": " GP" },
  { "name": "Baja: Edge of Control HD", "price": "0.56", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Batman: Arkham Knight Premium Edition", "price": "3.04", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Batora: Lost Haven", "price": "1.46", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Battlefield™ 1 Revolution", "price": "1.54", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Battlefield™ 2042 Elite Edition Xbox One & Xbox Series X|S", "price": "7.44", "flag": "🇹🇷", "date": "17.10", "status": "" },
  { "name": "Battlefield™ 2042 Xbox One & Xbox Series X|S", "price": "4.09", "flag": "🇹🇷", "date": "17.10", "status": "" },
  { "name": "Battlefield™ 2042 Xbox One", "price": "3.06", "flag": "🇹🇷", "date": "17.10", "status": "" },
  { "name": "Battlefleet Gothic: Armada 2 - Windows 10", "price": "0.51", "flag": "🇳🇬", "date": "22.10", "status": "" },
  { "name": "Battlefleet Gothic: Armada", "price": "0.28", "flag": "🇳🇬", "date": "22.10", "status": "" },
  { "name": "Big Buck Hunter Arcade", "price": "0.17", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Big Moonstone Pack -- 5,500", "price": "5.01", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Big Pharma + Bio Inc. Redemption - Symptoms and Treatment Bundle", "price": "3.85", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Black The Fall", "price": "0.45", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Blacksmith Forger", "price": "0.25", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Block Tower TD", "price": "0.37", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Boss Rush: Mythology", "price": "0.34", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Brewmaster: Beer Brewing Simulator", "price": "0.6", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Builder Flipper bundle", "price": "2.8", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Bunny Battle Nemesis", "price": "12.84", "flag": "🇮🇳", "date": "22.10", "status": " GP" },
  { "name": "CHRONO CROSS: THE RADICAL DREAMERS EDITION", "price": "2.22", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "CRISIS CORE –FINAL FANTASY VII– REUNION DIGITAL DELUXE ED...", "price": "4.25", "flag": "🇳🇬", "date": "22.10", "status": " GP" },
  { "name": "CRISIS CORE –FINAL FANTASY VII– REUNION", "price": "3.06", "flag": "🇳🇬", "date": "22.10", "status": " GP" },
  { "name": "Cake Bash", "price": "0.77", "flag": "🇳🇬", "date": "29.10", "status": "" },
  { "name": "Call of the Wild: The Angler™ - Gold Fishing Bundle", "price": "3.3", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "Call of the Wild: The Angler™ - Silver Fishing Bundle", "price": "2.66", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "Call of the Wild: The Angler™ - Ultimate Fishing Bundle", "price": "3.97", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "Car Vouchers (10)", "price": "1.22", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Car Vouchers (24)", "price": "2.44", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Car Vouchers (4)", "price": "0.61", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Card-en-Ciel", "price": "1.87", "flag": "🇹🇷", "date": "23.10", "status": "" },
  { "name": "Carnival Games®", "price": "1.93", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Cars 3: Driven to Win", "price": "0.62", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Cassette Beasts: Deluxe Edition", "price": "1.72", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Chasm: The Rift", "price": "0.57", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Chess Gambit", "price": "0.42", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Chivalry 2 King's Edition", "price": "1.64", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Chivalry 2 Special Edition", "price": "1.36", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Chivalry 2", "price": "1.1", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Chronos: Before the Ashes", "price": "3.12", "flag": "🇧🇷", "date": "22.10", "status": " GP" },
  { "name": "Cities: Skylines - Mayor's Edition", "price": "28.45", "flag": "🇧🇷", "date": "01.04", "status": " GP" },
  { "name": "Cities: Skylines - Premium Edition 2", "price": "4.61", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "Cluedo Deluxe Edition", "price": "1.18", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Cluedo", "price": "0.5", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Coffee Plis XS Edition", "price": "1.08", "flag": "🇳🇬", "date": "22.10", "status": " GP" },
  { "name": "Commandos 2 & Praetorians: HD Remaster Double Pack", "price": "1.24", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Conan Exiles - Complete Edition October 2021", "price": "10.51", "flag": "🇹🇷", "date": "01.12", "status": " GP" },
  { "name": "Conan Exiles - Isle of Siptah Edition", "price": "4.67", "flag": "🇹🇷", "date": "01.12", "status": " GP" },
  { "name": "Conan Exiles - Isle of Siptah Edition", "price": "40.4", "flag": "🇲🇽", "date": "01.12", "status": " GP" },
  { "name": "Conan Exiles – Complete Edition", "price": "74.24", "flag": "🇲🇽", "date": "01.12", "status": " GP" },
  { "name": "Conan Exiles", "price": "1.06", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Conan Exiles", "price": "9.8", "flag": "🇯🇵", "date": "22.10", "status": " GP" },
  { "name": "Conga Master", "price": "0.07", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Cosmic Mirage", "price": "0.31", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Creatures of Ava: Deluxe Edition", "price": "15.67", "flag": "🇧🇷", "date": "05.11", "status": " GP" },
  { "name": "Crown Trick", "price": "0.64", "flag": "🇳🇬", "date": "22.10", "status": " GP" },
  { "name": "Crusader Kings III: Royal Edition", "price": "35.7", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Crysis 2 Remastered", "price": "0.74", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Crysis 3 Remastered", "price": "0.74", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Crysis Remastered", "price": "0.74", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Cult of the Lamb: Heretic Edition", "price": "2.23", "flag": "🇳🇬", "date": "22.10", "status": " GP" },
  { "name": "Cursed to Golf", "price": "0.57", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "DAS WIRED-HORROR-SPIELPAKET", "price": "2.66", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "DC's Justice League: Cosmic Chaos", "price": "6.35", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "DCL-The Game", "price": "1.28", "flag": "🇳🇬", "date": "22.10", "status": " GP" },
  { "name": "DEAD ISLAND 2 GOLD EDITION", "price": "41.57", "flag": "🇰🇷", "date": "17.10", "status": " GP" },
  { "name": "DEATHLOOP Deluxe Edition", "price": "36.18", "flag": "🇪🇬", "date": "17.10", "status": " GP" },
  { "name": "DIRT 5 Year One Edition", "price": "5.95", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "DOOM Eternal Deluxe Edition", "price": "14.01", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "DOOM Eternal: The Ancient Gods - Part One", "price": "4.96", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "DOOM Eternal: The Ancient Gods - Part Two", "price": "4.96", "flag": "🇹🇷", "date": "17.03", "status": " GP" },
  { "name": "DOOM Eternal: Year One Pass (PC)", "price": "7.49", "flag": "🇹🇷", "date": "03.12", "status": " GP" },
  { "name": "DOOM Eternal: Year One Pass", "price": "7.49", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "DRAGON QUEST® XI S: Echoes of an Elusive Age™ - Definitiv...", "price": "2.6", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Dakar Desert Rally", "price": "6.83", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Damikira", "price": "4.13", "flag": "🇮🇳", "date": "17.10", "status": "" },
  { "name": "Dance of Death: Du Lac & Fey", "price": "0.68", "flag": "🇳🇬", "date": "22.10", "status": " GP" },
  { "name": "Danger Gazers", "price": "0.46", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Darkest Dungeon®: Ancestral Edition", "price": "1.98", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Darksiders III", "price": "7.23", "flag": "🇨🇦", "date": "22.10", "status": " GP" },
  { "name": "Dead Cells: Medley of Pain Bundle", "price": "2.66", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Dead Cells: Return to Castlevania Bundle", "price": "2.07", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Dead Space Digital Deluxe Edition", "price": "22.89", "flag": "🇮🇳", "date": "17.10", "status": "" },
  { "name": "Dead Space", "price": "18.73", "flag": "🇮🇳", "date": "17.10", "status": "" },
  { "name": "Dead by Daylight - Gold Edition", "price": "8.92", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Dead by Daylight: Dungeons & Dragons Edition", "price": "6.42", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Deadbeat Heroes", "price": "0.48", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Death's Door [Xbox]", "price": "0.41", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Debtor: Enhanced Edition", "price": "0.25", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Deceive Inc.", "price": "0.66", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Deep Rock Galactic - Ultimate Edition", "price": "3.3", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "Deep Space Anomaly", "price": "0.25", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Deleted - Cyber Invasion", "price": "0.25", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Demetrios - The BIG Cynical Adventure", "price": "0.07", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles Digital Deluxe Edition", "price": "18.24", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles Ultimate Edition", "price": "57.36", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles", "price": "15.32", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "Deployment", "price": "0.18", "flag": "🇳🇬", "date": "22.10", "status": "" },
  { "name": "Desperados III Deluxe Edition", "price": "10.7", "flag": "🇮🇳", "date": "22.10", "status": " GP" },
  { "name": "Destroy All Humans! 2 - Reprobed: Dressed to Skill Edition", "price": "15.22", "flag": "🇮🇳", "date": "22.10", "status": " GP" },
  { "name": "Detective Reborn Bundle", "price": "1.34", "flag": "🇳🇬", "date": "22.10", "status": " GP" },
  { "name": "Diablo® IV - Expansion Bundle", "price": "49.68", "flag": "🇰🇷", "date": "30.12", "status": " GP" },
  { "name": "Diablo® IV - Standard Edition", "price": "32.87", "flag": "🇧🇷", "date": "30.12", "status": " GP" },
  { "name": "Dice Assassin", "price": "0.29", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Disco Elysium - The Final Cut", "price": "1.58", "flag": "🇳🇬", "date": "22.10", "status": " GP" },
  { "name": "Dishonored & Prey: The Arkane Collection", "price": "14.59", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "Dishonored®: Death of the Outsider™ Deluxe Bundle", "price": "11.61", "flag": "🇹🇷", "date": "17.10", "status": " GP" },
  { "name": "Disintegration", "price": "1.31", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Disjunction", "price": "0.13", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Disney Dreamlight Valley – Gold Edition", "price": "8.92", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Doug Hates His Job", "price": "0.12", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "DreamWorks All-Star Kart Racing Rally Edition", "price": "5.69", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "DreamWorks Dragons: Legends of The Nine Realms", "price": "11.16", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "DreamWorks Spirit Lucky's Big Adventure", "price": "6.57", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "DreamWorks Trolls Remix Rescue Deluxe Edition", "price": "5.84", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Dungeons 4 - Digital Deluxe Edition", "price": "23.35", "flag": "🇹🇷", "date": "16.11", "status": " GP" },
  { "name": "Dynamite Fishing - World Games", "price": "0.07", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "EA SPORTS FC™ 24 Standard Edition Xbox One & Xbox Series X|S", "price": "16.05", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "EA SPORTS™ MVP Bundle (Madden NFL 25 Deluxe Edition & College Football 25 Deluxe Edition)", "price": "96.46", "flag": "🇰🇷", "date": "17.10", "status": "" },
  { "name": "EA SPORTS™ Madden NFL 25 Deluxe Edition Xbox Series X|S & Xbox One", "price": "42.63", "flag": "🇰🇷", "date": "17.10", "status": "" },
  { "name": "EA SPORTS™ Madden NFL 25", "price": "29.73", "flag": "🇮🇳", "date": "17.10", "status": "" },
  { "name": "EA SPORTS™ PGA TOUR™ Deluxe Edition", "price": "10.35", "flag": "🇮🇳", "date": "29.10", "status": "" },
  { "name": "EA SPORTS™ PGA TOUR™", "price": "8.03", "flag": "🇮🇳", "date": "29.10", "status": "" },
  { "name": "EARTH'S DAWN", "price": "0.19", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "EVERSPACE™ 2", "price": "2.44", "flag": "🇳🇬", "date": "16.10", "status": "" },
  { "name": "EVERSPACE™", "price": "0.75", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Eiyuden Chronicle: Hundred Heroes - Digital Deluxe Edition", "price": "10.21", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Endurance: Space Action", "price": "0.39", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Escape Academy Deluxe Edition", "price": "2.31", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Escape Dead Island", "price": "0.22", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Escape From Tethys", "price": "0.42", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Everreach: Project Eden", "price": "0.21", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Evil Dead: The Game - Game of the Year Edition", "price": "7.59", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Evil Dead: The Game", "price": "5.69", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "ExoCross", "price": "15.81", "flag": "🇮🇳", "date": "22.10", "status": "" },
  { "name": "Expeditions: A MudRunner Game - Supreme Edition", "price": "44.36", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "Expeditions: A MudRunner Game - Year 1 Edition", "price": "37.35", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "Expeditions: A MudRunner Game", "price": "22.49", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "F1® 23", "price": "37.46", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "F1® 24 Champions Edition", "price": "35.68", "flag": "🇮🇳", "date": "29.10", "status": "" },
  { "name": "F1® 24", "price": "26.76", "flag": "🇮🇳", "date": "29.10", "status": "" },
  { "name": "F1® Manager 2023 Deluxe Edition", "price": "12.84", "flag": "🇹🇷", "date": "16.10", "status": " GP" },
  { "name": "FAR CRY ANTHOLOGY BUNDLE", "price": "11.67", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "FINAL FANTASY IX", "price": "1.09", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "FINAL FANTASY VII WINDOWS EDITION", "price": "0.99", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "FINAL FANTASY VII", "price": "0.99", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "FINAL FANTASY VIII Remastered", "price": "1.04", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "FINAL FANTASY X/X-2 HD Remaster", "price": "3.01", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "FINAL FANTASY XII THE ZODIAC AGE", "price": "3.01", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "FINAL FANTASY XV ROYAL EDITION", "price": "1.85", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "FOR HONOR – Gold Edition", "price": "7.3", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "FOR HONOR – Ultimate Edition", "price": "37.35", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Fallout 4: Game of the Year Edition (PC)", "price": "6.65", "flag": "🇹🇷", "date": "21.10", "status": " GP" },
  { "name": "Fallout 4: Game of the Year Edition", "price": "6.65", "flag": "🇹🇷", "date": "21.10", "status": " GP" },
  { "name": "Fallout 76: Skyline Valley Deluxe Edition", "price": "23.35", "flag": "🇹🇷", "date": "21.10", "status": " GP" },
  { "name": "Far Cry Insanity Bundle", "price": "10.72", "flag": "🇧🇷", "date": "22.10", "status": " GP" },
  { "name": "Far Cry Primal - Apex Edition", "price": "1.18", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Far Cry® 3 Blood Dragon Classic Edition", "price": "2.13", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Far Cry® 5 + Far Cry® New Dawn Deluxe Edition Bundle", "price": "18.72", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Far Cry® 5 Gold Edition + Far Cry ® New Dawn Deluxe Editi...", "price": "4.03", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Far Cry® 5", "price": "2.63", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Far Cry® 6 Deluxe Edition", "price": "18.09", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Far Cry® 6 Game of the Year Edition", "price": "22.18", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Far Cry® 6 Gold Edition", "price": "5.84", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Far Cry® New Dawn", "price": "1.58", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Far Cry®5 Gold Edition", "price": "16.34", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Farm Bundle", "price": "2.66", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Farm Pets Bundle", "price": "3.97", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Farming Simulator 22 - Platinum Edition", "price": "5.13", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Farming Simulator 22 - Premium Edition", "price": "6.42", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Fast & Furious: Spy Racers Rise of SH1FT3R", "price": "3.97", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Firegirl: Hack 'n Splash Rescue DX", "price": "0.33", "flag": "🇳🇬", "date": "29.10", "status": "" },
  { "name": "Flailing Limbs Bundle", "price": "1.38", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Flintlock – Deluxe Edition", "price": "19.15", "flag": "🇹🇷", "date": "16.10", "status": " GP" },
  { "name": "Forza Horizon 4 Deluxe Edition", "price": "10.21", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 4 Ultimate Edition", "price": "12.84", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 Deluxe Edition", "price": "10.21", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 PLUS Hot Wheels Bundle", "price": "10.21", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 Premium Add-Ons Bundle", "price": "6.42", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 Premium Edition", "price": "12.84", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport Deluxe Edition", "price": "11.49", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport Premium Add-Ons Bundle", "price": "5.13", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport Premium Edition", "price": "12.84", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport and Forza Horizon 5 Premium Add-Ons Bundle", "price": "10.94", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Motorsport and Forza Horizon 5 Premium Editions Bundle", "price": "24.33", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "From Space Resistance Bundle", "price": "0.51", "flag": "🇳🇬", "date": "16.10", "status": " GP" },
  { "name": "Frostpunk: Complete Collection", "price": "2.98", "flag": "🇹🇷", "date": "16.01", "status": " GP" },
  { "name": "Frostpunk: Console Edition", "price": "0.37", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "G.I. Joe: Operation Blackout - Digital Deluxe", "price": "1.1", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "GIGA WRECKER ALT.", "price": "0.21", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "GRIS", "price": "0.44", "flag": "🇳🇬", "date": "22.10", "status": " GP" },
  { "name": "Gabriels Worlds The Adventure (For Windows 10)", "price": "0.44", "flag": "🇳🇬", "date": "22.10", "status": "" },
  { "name": "Galaxy Champions TV", "price": "0.14", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Garden Bundle", "price": "3.51", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Garden City Bundle", "price": "0.42", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Garfield Lasagna Party", "price": "6.46", "flag": "🇮🇳", "date": "22.10", "status": " GP" },
  { "name": "Gears of War 4 and Halo 5: Guardians Bundle", "price": "2.33", "flag": "🇹🇷", "date": "31.01", "status": " GP" },
  { "name": "Gears of War Ultimate Edition Deluxe Version", "price": "1.17", "flag": "🇹🇷", "date": "17.10", "status": " GP" },
  { "name": "Generation Zero® - Ultimate Bundle", "price": "5.95", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Generation Zero®", "price": "1.11", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Genesis Alpha One", "price": "0.99", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Get Packed", "price": "0.33", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Ghostwire: Tokyo Deluxe Edition", "price": "18.09", "flag": "🇹🇷", "date": "17.10", "status": " GP" },
  { "name": "Gleaner Heights", "price": "0.49", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Goat Simulator 3 - Multiversal Traveler's Edition", "price": "2.66", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Goat Simulator: The GOATY", "price": "1.79", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "Goat Simulator: Waste Of Space Bundle", "price": "0.99", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "God's Trigger", "price": "1.59", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Going Under", "price": "0.64", "flag": "🇳🇬", "date": "22.10", "status": " GP" },
  { "name": "Golf With Your Friends - Starter Edition", "price": "17.76", "flag": "🇰🇷", "date": "16.07", "status": " GP" },
  { "name": "Golf With Your Friends - Ultimate Edition", "price": "31.49", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Golf With Your Friends", "price": "1.25", "flag": "🇹🇷", "date": "16.10", "status": "" },
  { "name": "Grand Theft Auto Online", "price": "3.2", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Grand Theft Auto V (Xbox One & Xbox Series X|S)", "price": "5.77", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Grounded", "price": "2.57", "flag": "🇳🇬", "date": "22.10", "status": " GP" },
  { "name": "Gunborg: Dark Matters", "price": "0.29", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "HITMAN™ 2", "price": "7.2", "flag": "🇹🇷", "date": "04.02", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ 2 - Turbocharged - Deluxe Edition", "price": "8.5", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ 2 - Turbocharged - Legendary Edition", "price": "10.94", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "HUMANKIND™ - Heritage Edition", "price": "7.64", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hades", "price": "1.63", "flag": "🇳🇬", "date": "22.10", "status": " GP" },
  { "name": "Halo 5: Guardians – Digital Deluxe Edition", "price": "19.26", "flag": "🇹🇷", "date": "31.05", "status": " GP" },
  { "name": "Halo Wars 2: Complete Edition", "price": "23.35", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Headbangers: Rhythm Royale - Digital Deluxe Edition", "price": "3.85", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Heavenly Bodies", "price": "1.93", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Hell Let Loose - Deluxe Edition", "price": "7.64", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hell Let Loose - Ultimate Edition", "price": "8.92", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hello Neighbor 2 Deluxe Edition", "price": "7.64", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hi-Fi RUSH Deluxe Edition", "price": "14.01", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Hidden Cats in Rome", "price": "0.26", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Historical Trilogy", "price": "0.62", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Hogwarts Legacy: Digital Deluxe Edition", "price": "9.62", "flag": "🇹🇷", "date": "17.10", "status": " GP" },
  { "name": "Hotel Renovator", "price": "10.94", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Huge Moonstone Pack -- 14,500", "price": "12.77", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hyper Gunsport", "price": "0.83", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Hyper-5", "price": "3.92", "flag": "🇮🇳", "date": "22.10", "status": "" },
  { "name": "Hypnospace Outlaw & Slayers X: Terminal Aftermath: Vengance of the Slayer Bundle", "price": "2.22", "flag": "🇹 🇷", "date": "01.06", "status": " GP" },
  { "name": "I Am Fish", "price": "0.41", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "I dream of you and ice cream", "price": "0.16", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "INSIDE & LIMBO Bundle", "price": "3.3", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Ice Age Scrat's Nutty Adventure", "price": "1.54", "flag": "🇳🇬", "date": "22.10", "status": " GP" },
  { "name": "Immortals Fenyx Rising™ Gold Edition", "price": "10.58", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Immortals of Aveum™ Deluxe Edition", "price": "29.43", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "Imp of the Sun", "price": "0.41", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Industria", "price": "0.49", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Injustice™ 2 - Legendary Edition", "price": "4.96", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Inspector Waffles", "price": "0.25", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Insurgency: Sandstorm - Deluxe Edition", "price": "21.99", "flag": "🇯🇵", "date": "16.01", "status": " GP" },
  { "name": "Insurgency: Sandstorm - Gold Edition", "price": "37.35", "flag": "🇹🇷", "date": "16.01", "status": " GP" },
  { "name": "Insurgency: Sandstorm - Ultimate Edition", "price": "44.36", "flag": "🇹🇷", "date": "16.01", "status": " GP" },
  { "name": "Insurgency: Sandstorm", "price": "4.09", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Islanders", "price": "0.14", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Isonzo: Collector's Edition", "price": "5.75", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Isonzo: Deluxe Edition", "price": "0.83", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Isonzo: Ultimate Edition", "price": "57.93", "flag": "🇯🇵", "date": "21.10", "status": " GP" },
  { "name": "It Takes Two - Digital Version", "price": "10.08", "flag": "🇯🇵", "date": "29.10", "status": "" },
  { "name": "Johnny Trigger", "price": "0.2", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Jumanji: The Video Game", "price": "6.57", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Jurassic World Evolution - Deluxe Bundle", "price": "0.88", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Jurassic World Evolution 2: Deluxe Edition", "price": "3.19", "flag": "🇪🇬", "date": "22.10", "status": " GP" },
  { "name": "Jurassic World Evolution 2: Dominion Bundle", "price": "11.7", "flag": "🇪🇬", "date": "16.05", "status": " GP" },
  { "name": "Jurassic World Evolution: Dinosaur Collection", "price": "0.36", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Jurassic World Evolution: Expansion Collection", "price": "0.5", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Just Cause 3", "price": "0.43", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Just Cause 3: XXL Edition", "price": "0.69", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Just Cause 4 - Complete Edition", "price": "1.31", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Just Cause 4 - Gold Edition", "price": "2.58", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Just Cause 4: Reloaded", "price": "1.78", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Just Dance 2018", "price": "0.0", "flag": "🇵🇭", "date": "", "status": "" },
  { "name": "KINGDOM HEARTS Melody of Memory (Asia)", "price": "19.08", "flag": "🇰🇷", "date": "22.10", "status": " GP" },
  { "name": "KINGDOM HEARTS Melody of Memory (International)", "price": "4.67", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Kattish", "price": "0.25", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Kerbal Space Program Enhanced Edition Complete", "price": "2.59", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "King of Seas", "price": "0.49", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "King of the Arcade", "price": "0.33", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Kingdom of Arcadia", "price": "1.16", "flag": "🇮🇳", "date": "22.10", "status": "" },
  { "name": "Kingdoms of Amalur: Re-Reckoning", "price": "5.09", "flag": "🇧🇷", "date": "22.10", "status": " GP" },
  { "name": "Kubics", "price": "0.48", "flag": "🇳🇬", "date": "22.10", "status": "" },
  { "name": "L.O.L. Surprise! B.B.s BORN TO TRAVEL™", "price": "4.41", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "LEGO® 2K Drive Awesome Edition", "price": "38.1", "flag": "🇰🇷", "date": "01.01", "status": " GP" },
  { "name": "LEGO® 2K Drive Awesome Rivals Edition", "price": "52.51", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "LEGO® 2K Drive Cross-Gen Standard Edition", "price": "17.49", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "LEGO® Bricktales", "price": "1.27", "flag": "🇳🇬", "date": "29.10", "status": "" },
  { "name": "LEGO® Star Wars™: The Skywalker Saga Galactic Edition", "price": "11.7", "flag": "🇪🇬", "date": "01.05", "status": " GP" },
  { "name": "LEGO® Star Wars™: The Skywalker Saga", "price": "8.82", "flag": "🇪🇬", "date": "01.05", "status": " GP" },
  { "name": "LEGO® Star Wars™:The Skywalker Saga Deluxe Edition", "price": "10.22", "flag": "🇪🇬", "date": "01.05", "status": " GP" },
  { "name": "LOLLIPOP CHAINSAW RePOP", "price": "27.35", "flag": "🇹🇼", "date": "25.10", "status": "" },
  { "name": "Laika: Aged Through Blood", "price": "1.8", "flag": "🇳🇬", "date": "29.10", "status": "" },
  { "name": "Last Night of Winter", "price": "0.59", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Lawn Mowing Simulator", "price": "0.61", "flag": "🇳🇬", "date": "22.10", "status": " GP" },
  { "name": "Let's Build a Zoo", "price": "0.66", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Lies of P Digital Deluxe Edition", "price": "8.92", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Life is Strange 2 - Complete Season", "price": "1.4", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Life is Strange Remastered Collection", "price": "3.33", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Life is Strange: True Colors - Deluxe Edition", "price": "4.38", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Life is Strange: True Colors - Deluxe Upgrade", "price": "1.45", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Life is Strange: True Colors - Ultimate Edition", "price": "6.71", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Life is Strange: True Colors", "price": "3.76", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Light & Dark Bundle", "price": "3.67", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Like a Dragon Gaiden: The Man Who Erased His Name Deluxe Edition", "price": "26.23", "flag": "🇵🇭", "date": "16.11", "status": " GP" },
  { "name": "Like a Dragon: Ishin! Digital Deluxe Edition", "price": "25.66", "flag": "🇹🇷", "date": "16.10", "status": " GP" },
  { "name": "Lock's Quest", "price": "0.34", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Lonely Mountains: Downhill - Eldfjall Island", "price": "1.83", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "Lords of the Fallen (2014)", "price": "0.46", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Lords of the Fallen Deluxe Edition", "price": "10.21", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Lords of the Fallen", "price": "4.46", "flag": "🇳🇬", "date": "22.10", "status": " GP" },
  { "name": "Luxury Garden Bundle", "price": "3.97", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "M.A.C.E. Space Shooter", "price": "0.29", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "MLB® The Show™ 24 - Digital Deluxe Edition", "price": "23.35", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "MLB® The Show™ 24 - MVP Edition", "price": "19.84", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "MLB® The Show™ 24 - Xbox One Standard Edition", "price": "14.01", "flag": "🇹🇷", "date": "16.10", "status": "" },
  { "name": "MLB® The Show™ 24 - Xbox Series X|S Standard Edition", "price": "33.85", "flag": "🇹🇷", "date": "16.10", "status": "" },
  { "name": "MX vs ATV All Out", "price": "2.64", "flag": "🇧🇷", "date": "22.10", "status": " GP" },
  { "name": "MX vs ATV Legends", "price": "8.68", "flag": "🇨🇦", "date": "22.10", "status": " GP" },
  { "name": "MXGP2", "price": "0.45", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "MY HERO ONE'S JUSTICE 2 Deluxe Edition", "price": "10.99", "flag": "🇰🇷", "date": "22.10", "status": " GP" },
  { "name": "MY HERO ONE'S JUSTICE 2 Deluxe Edition", "price": "8.02", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "MY LITTLE PONY: A Maretime Bay Adventure", "price": "3.97", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Madden NFL 19", "price": "28.09", "flag": "🇨🇴", "date": "30.12", "status": "" },
  { "name": "Madden NFL 24 Xbox Series X|S & Xbox One", "price": "16.05", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "Mafia: Definitive Edition", "price": "1.51", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Mafia: Trilogy", "price": "2.73", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Maneater Apex Edition", "price": "3.3", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "Mass Effect™ Legendary Edition", "price": "7.12", "flag": "🇮🇳", "date": "29.10", "status": "" },
  { "name": "Massi", "price": "2.56", "flag": "🇮🇳", "date": "23.10", "status": "" },
  { "name": "Masters of Anima", "price": "0.26", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "MechWarrior 5: Mercenaries - JumpShip Edition", "price": "7.82", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Mechapunk", "price": "0.25", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.0", "flag": "🇺🇸", "date": "30.11", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.0", "flag": "🇺🇸", "date": "30.11", "status": "" },
  { "name": "Microsoft Flight Simulator Deluxe 40th Anniversary Edition", "price": "11.49", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Microsoft Flight Simulator Premium Deluxe 40th Anniversar...", "price": "15.28", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Middle-earth™: Shadow of War™ Definitive Edition", "price": "5.11", "flag": "🇹🇷", "date": "17.10", "status": " GP" },
  { "name": "Middle-earth™: The Shadow Bundle", "price": "13.98", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle - Windows 10", "price": "1.48", "flag": "🇹🇷", "date": "27.07", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle", "price": "1.48", "flag": "🇹🇷", "date": "27.07", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate Edition for Windows", "price": "5.85", "flag": "🇪🇬", "date": "27.07", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate Edition", "price": "5.13", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Minecraft Legends Deluxe Edition", "price": "6.42", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Minecraft: Deluxe Collection", "price": "3.85", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Minute of Islands", "price": "0.39", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Monster Energy Supercross - The Official Videogame 4", "price": "1.16", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Monster Energy Supercross 4 - Special Edition - Xbox Series X|S", "price": "1.75", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Monster Energy Supercross 4 - Special Edition", "price": "1.75", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Monster Energy Supercross 4 - Xbox Series X|S", "price": "1.16", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Monster Hunter Rise + Sunbreak Deluxe", "price": "37.5", "flag": "🇯🇵", "date": "17.10", "status": " GP" },
  { "name": "Monster Hunter Rise + Sunbreak", "price": "32.13", "flag": "🇯🇵", "date": "01.04", "status": " GP" },
  { "name": "Monster Hunter Rise Deluxe Edition", "price": "18.98", "flag": "🇪🇬", "date": "17.10", "status": " GP" },
  { "name": "Moonglow Bay", "price": "1.43", "flag": "🇳🇬", "date": "29.10", "status": "" },
  { "name": "Moonlighter: Complete Edition", "price": "1.58", "flag": "🇹🇷", "date": "01.12", "status": " GP" },
  { "name": "Mortal Kombat 11 Ultimate + Injustice 2 Leg. Edition Bundle", "price": "20.05", "flag": "🇹🇷", "date": "16.12", "status": " GP" },
  { "name": "Mortal Kombat 11 Ultimate", "price": "8.82", "flag": "🇪🇬", "date": "17.10", "status": " GP" },
  { "name": "MotoGP™19", "price": "1.46", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "MotoGP™21 - Xbox Series X|S", "price": "3.06", "flag": "🇰🇷", "date": "22.10", "status": " GP" },
  { "name": "MotoGP™21", "price": "3.06", "flag": "🇰🇷", "date": "22.10", "status": " GP" },
  { "name": "Mount & Blade II: Bannerlord Digital Deluxe Edition", "price": "7.64", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Moving Out 2 - Deluxe Edition", "price": "4.22", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Moving Out 2", "price": "1.93", "flag": "🇳🇬", "date": "22.10", "status": " GP" },
  { "name": "Mugsters", "price": "0.27", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Murdered: Soul Suspect", "price": "0.25", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "My Bakery Empire", "price": "0.53", "flag": "🇹🇷", "date": "17.10", "status": "" },
  { "name": "My Big Sister: Remastered", "price": "4.13", "flag": "🇮🇳", "date": "26.10", "status": "" },
  { "name": "My Friend Peppa Pig - Complete Edition", "price": "6.59", "flag": "🇪🇬", "date": "01.07", "status": " GP" },
  { "name": "My Friend Peppa Pig", "price": "3.66", "flag": "🇪🇬", "date": "22.10", "status": " GP" },
  { "name": "My Time at Sandrock Deluxe Edition", "price": "3.3", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "NARUTO SHIPPUDEN: Ultimate Ninja STORM Legacy", "price": "3.27", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "NASCAR Arcade Rush Project-X Edition", "price": "7.3", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "NBA 2K Playgrounds 2", "price": "1.9", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "NHL® 24 Standard Edition Xbox One", "price": "19.03", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "NHL® 24 Standard Edition Xbox Series X|S", "price": "21.4", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "NHRA Championship Drag Racing: Speed For All", "price": "1.46", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "NHRA Championship Drag Racing: Speed for All - Deluxe Edi...", "price": "1.82", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "NHRA Championship Drag Racing: Speed for All - Ultimate E...", "price": "2.41", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "NINJA GAIDEN: Master Collection Deluxe Edition", "price": "6.11", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Necromunda: Underhive Wars - Gold Edition", "price": "2.1", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Necromunda: Underhive Wars", "price": "0.55", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Necropolis", "price": "4.08", "flag": "🇭🇺", "date": "22.10", "status": " GP" },
  { "name": "Need for Speed™ Unbound Palace Edition", "price": "9.34", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Need for Speed™ Unbound", "price": "6.13", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Neon Abyss Deluxe Edition", "price": "1.84", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "Nickelodeon All-Star Brawl 2 Deluxe Edition", "price": "10.22", "flag": "🇪🇬", "date": "01.01", "status": " GP" },
  { "name": "Nickelodeon All-Star Brawl 2 Ultimate Edition", "price": "11.7", "flag": "🇪🇬", "date": "29.10", "status": "" },
  { "name": "Nickelodeon All-Star Brawl 2", "price": "2.75", "flag": "🇪🇬", "date": "29.10", "status": "" },
  { "name": "Nickelodeon Kart Racers 2: Grand Prix", "price": "0.8", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Nickelodeon Kart Racers 3: Slime Speedway Turbo Edition", "price": "2.74", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "NieR Replicant ver.1.22474487139...", "price": "4.67", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "NieR:Automata BECOME AS GODS Edition", "price": "2.05", "flag": "🇳🇬", "date": "22.10", "status": "" },
  { "name": "NieR:Automata™ BECOME AS GODS Edition", "price": "2.45", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Ninja Shodown", "price": "0.11", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.2", "flag": "🇹🇷", "date": "30.05", "status": "" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "26.44", "flag": "🇧🇷", "date": "16.03", "status": " GP" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "29.01", "flag": "🇮🇳", "date": "16.03", "status": " GP" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "3.97", "flag": "🇹🇷", "date": "16.03", "status": " GP" },
  { "name": "No Straight Roads", "price": "0.52", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "OCTOPATH TRAVELER + OCTOPATH TRAVELER II Bundle", "price": "40.71", "flag": "🇺🇦", "date": "01.12", "status": " GP" },
  { "name": "OCTOPATH TRAVELER II", "price": "24.97", "flag": "🇮🇳", "date": "22.10", "status": " GP" },
  { "name": "OCTOPATH TRAVELER", "price": "4.67", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "ONE PIECE BURNING BLOOD - Gold Edition", "price": "0.92", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "ONE PIECE World Seeker Deluxe Edition", "price": "1.49", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "ONE PIECE 海賊無双4 Ultimate Edition（Xbox One）", "price": "51.63", "flag": "🇯🇵", "date": "22.10", "status": " GP" },
  { "name": "ONE PIECE: PIRATE WARRIORS 4 Ultimate Edition (Xbox One)", "price": "13.13", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "OUTRIDERS", "price": "2.39", "flag": "🇸🇦", "date": "22.10", "status": " GP" },
  { "name": "Oh My Godheads", "price": "0.36", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "OmegaBot", "price": "0.21", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "One Last Breath", "price": "8.36", "flag": "🇺🇦", "date": "22.10", "status": "" },
  { "name": "Opaloid Kingdom", "price": "0.29", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Orcs Must Die! 3 Bundle", "price": "5.13", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Ori: The Collection", "price": "6.42", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Outbreak Gold Collection", "price": "13.75", "flag": "🇮🇳", "date": "22.10", "status": "" },
  { "name": "Outbreak Palladium Collection", "price": "17.84", "flag": "🇮🇳", "date": "22.10", "status": "" },
  { "name": "Outbreak: Cold Comfort Collection", "price": "49.95", "flag": "🇮🇳", "date": "22.10", "status": "" },
  { "name": "Outbreak: Lost Hope Definitive Edition", "price": "2.45", "flag": "🇮🇳", "date": "22.10", "status": "" },
  { "name": "Outbreak: The Nightmare Chronicles Definitive Edition", "price": "2.45", "flag": "🇮🇳", "date": "22.10", "status": "" },
  { "name": "Outward: Definitive Edition", "price": "2.04", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Overcooked! 2 - Gourmet Edition", "price": "2.1", "flag": "🇹🇷", "date": "16.12", "status": " GP" },
  { "name": "PAC-MAN Mega Tunnel Battle: Chomp Champs - Deluxe Edition", "price": "10.93", "flag": "🇹🇷", "date": "21.10", "status": " GP" },
  { "name": "PAW Patrol The Movie: Adventure City Calls", "price": "3.66", "flag": "🇪🇬", "date": "22.10", "status": " GP" },
  { "name": "PGA TOUR 2K23 Cross-Gen Edition", "price": "6.19", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "PGA TOUR 2K23 Tiger Woods Edition", "price": "12.51", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "PGA TOUR 2K23", "price": "5.83", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Pandaty", "price": "0.25", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Paper Cut Mansion", "price": "0.49", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Paper Flight - Super Speed Dash", "price": "0.5", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Paper io 2: Complete Edition", "price": "0.46", "flag": "🇹🇷", "date": "27.10", "status": "" },
  { "name": "Party Animals Deluxe Edition", "price": "3.85", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Paw Patrol Bundle", "price": "8.82", "flag": "🇪🇬", "date": "01.12", "status": " GP" },
  { "name": "Penny's Big Breakaway", "price": "14.43", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Pentiment", "price": "0.87", "flag": "🇵🇭", "date": "22.10", "status": " GP" },
  { "name": "Persona 5 Tactica: Digital Deluxe Edition", "price": "42.0", "flag": "🇹🇷", "date": "16.11", "status": " GP" },
  { "name": "Pets Bundle", "price": "2.98", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Phantom Spark", "price": "1.92", "flag": "🇳🇬", "date": "29.10", "status": "" },
  { "name": "Phoenix Point: Behemoth Edition", "price": "1.98", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Pillars of Eternity II: Deadfire - Ultimate Edition", "price": "1.24", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Pillars of Eternity: Complete Edition", "price": "1.9", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Pipe Dream Xbox Edition", "price": "0.25", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Planet Alpha", "price": "1.09", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Planet of Lana", "price": "1.34", "flag": "🇳🇬", "date": "29.10", "status": "" },
  { "name": "Plants vs. Zombies Garden Warfare", "price": "0.93", "flag": "🇹🇷", "date": "17.10", "status": "" },
  { "name": "Plants vs. Zombies™ Garden Warfare 2", "price": "0.93", "flag": "🇹🇷", "date": "17.10", "status": "" },
  { "name": "Police Stories", "price": "0.37", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Potata: fairy flower (Xbox Series X|S)", "price": "0.37", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Prey®: Digital Deluxe Edition", "price": "23.78", "flag": "🇮🇳", "date": "11.03", "status": " GP" },
  { "name": "Prince of Persia The Lost Crown", "price": "17.51", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Prison of Illusion (Windows)", "price": "0.37", "flag": "🇹🇷", "date": "17.10", "status": "" },
  { "name": "Project Starship X", "price": "1.96", "flag": "🇮🇳", "date": "22.10", "status": " GP" },
  { "name": "Pure Farming 2018 Digital Deluxe Edition", "price": "1.41", "flag": "🇧🇷", "date": "22.10", "status": " GP" },
  { "name": "Quintus and the Absent Truth", "price": "2.29", "flag": "🇮🇳", "date": "22.10", "status": " GP" },
  { "name": "RAGE 2: Deluxe Edition", "price": "10.51", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "RESIDENT EVIL 2 Deluxe Edition", "price": "24.49", "flag": "🇵🇭", "date": "17.10", "status": " GP" },
  { "name": "REZ PLZ", "price": "1.46", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "RICO", "price": "0.7", "flag": "🇧🇷", "date": "29.10", "status": "" },
  { "name": "Radical Rabbit Stew", "price": "0.13", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Radon Blast", "price": "0.29", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Railway Empire", "price": "0.82", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Raji: An Ancient Epiс", "price": "0.76", "flag": "🇳🇬", "date": "22.10", "status": " GP" },
  { "name": "Rapala Fishing: Pro Series", "price": "0.17", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Rattyvity Lab", "price": "0.25", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "ReCore", "price": "2.57", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Redout 2", "price": "3.79", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Regular Moonstone Pack -- 2,500", "price": "2.38", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Remnant II - Deluxe Edition", "price": "8.82", "flag": "🇪🇬", "date": "01.06", "status": " GP" },
  { "name": "Remnant II - Ultimate Edition", "price": "10.22", "flag": "🇪🇬", "date": "01.06", "status": " GP" },
  { "name": "Remnant: From the Ashes - Complete Edition", "price": "7.34", "flag": "🇪🇬", "date": "01.12", "status": " GP" },
  { "name": "Remothered: Tormented Fathers", "price": "0.29", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Rico - Breakout Bundle", "price": "0.19", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Riders Republic™ 360 Edition", "price": "30.35", "flag": "🇹🇷", "date": "09.12", "status": " GP" },
  { "name": "Riders Republic™ Complete Edition", "price": "40.86", "flag": "🇹🇷", "date": "09.12", "status": " GP" },
  { "name": "Riders Republic™ Skate Edition", "price": "7.3", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Riders Republic™", "price": "5.11", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Rise of the Tomb Raider: 20 Year Celebration", "price": "12.18", "flag": "🇹🇷", "date": "01.12", "status": " GP" },
  { "name": "Risk of Rain 2", "price": "4.78", "flag": "🇯🇵", "date": "22.10", "status": " GP" },
  { "name": "Risk of Rain", "price": "0.43", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Road 96: Mile 0 – Full Journey Bundle", "price": "1.03", "flag": "🇳🇬", "date": "22.10", "status": " GP" },
  { "name": "Road Redemption", "price": "0.57", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Rogue Explorer", "price": "1.55", "flag": "🇮🇳", "date": "22.10", "status": "" },
  { "name": "Rogue Sentry", "price": "4.13", "flag": "🇮🇳", "date": "24.10", "status": "" },
  { "name": "Rollerdrome", "price": "3.65", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "SBK™22", "price": "2.19", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "SCARLET NEXUS Ultimate Edition", "price": "1.93", "flag": "🇳🇬", "date": "22.10", "status": " GP" },
  { "name": "SD GUNDAM BATTLE ALLIANCE Deluxe Edition", "price": "10.33", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "SOULCALIBUR VI Deluxe Edition", "price": "2.11", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "12.29", "flag": "🇹🇷", "date": "31.12", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "8.12", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "STAR WARS Jedi: Survivor™ Deluxe Edition", "price": "34.79", "flag": "🇮🇳", "date": "29.10", "status": "" },
  { "name": "STAR WARS Jedi: Survivor™ Xbox One", "price": "30.35", "flag": "🇰🇷", "date": "29.10", "status": "" },
  { "name": "STAR WARS Jedi: Survivor™", "price": "21.4", "flag": "🇮🇳", "date": "29.10", "status": "" },
  { "name": "STELLATUM", "price": "0.34", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "SUPERHOT ONE OF US BUNDLE", "price": "2.07", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "Sea of Thieves: 2024 Deluxe Edition", "price": "6.11", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Sea of Thieves: 2024 Premium Edition", "price": "7.27", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Seasons after Fall", "price": "0.26", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Shape Up", "price": "0.39", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Sherlock Holmes: Crimes and Punishments + Sherlock Holmes...", "price": "0.42", "flag": "🇳🇬", "date": "22.10", "status": " GP" },
  { "name": "Shiness: The Lightning Kingdom", "price": "0.26", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Sid Meier's Civilization VI", "price": "1.13", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Skate 3", "price": "0.66", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Skatemasta Tcheco", "price": "1.12", "flag": "🇮🇳", "date": "22.10", "status": "" },
  { "name": "Skautfold: Shrouded in Sanity", "price": "0.3", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Skautfold: Usurper", "price": "0.37", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Skul: The Hero Slayer", "price": "0.97", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Skull and Bones Deluxe Edition", "price": "18.68", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Sky Survivors", "price": "0.29", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Skyrim Anniversary Edition + Fallout 4 G.O.T.Y Bundle", "price": "18.68", "flag": "🇹🇷", "date": "21.10", "status": " GP" },
  { "name": "Sleeping Dogs™ Definitive Edition", "price": "0.33", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Small Moonstone Pack -- 1,200", "price": "1.22", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Sniper Elite 5 Complete Edition", "price": "14.06", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Sniper Elite 5 Deluxe Edition", "price": "11.49", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "SnowRunner (Windows 10)", "price": "1.93", "flag": "🇳🇬", "date": "22.10", "status": "" },
  { "name": "SnowRunner - 1-Anniversary Edition", "price": "7.0", "flag": "🇹🇷", "date": "21.10", "status": " GP" },
  { "name": "SnowRunner - 2-Year Anniversary Edition", "price": "30.35", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "SnowRunner - 3-Year Anniversary Edition", "price": "37.35", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "SnowRunner - 4-Year Anniversary Edition", "price": "44.36", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "SnowRunner", "price": "2.55", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Somerville", "price": "1.01", "flag": "🇳🇬", "date": "29.10", "status": "" },
  { "name": "Source of Madness", "price": "0.66", "flag": "🇳🇬", "date": "29.10", "status": "" },
  { "name": "South Park™: The Fractured but Whole™ - Gold Edition", "price": "11.38", "flag": "🇹🇷", "date": "16.10", "status": " GP" },
  { "name": "Space Engineers: Ultimate Edition 2023", "price": "4.9", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "Space Moves", "price": "0.29", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Sparkle Bundle", "price": "0.96", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "SpongeBob SquarePants: Battle for Bikini Bottom - Rehydrated", "price": "3.59", "flag": "🇧🇷", "date": "22.10", "status": " GP" },
  { "name": "Squirrel with a Gun", "price": "8.93", "flag": "🇺🇦", "date": "15.10", "status": "" },
  { "name": "Star Trek Prodigy: Supernova", "price": "6.2", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Starfield Premium Edition Upgrade", "price": "5.75", "flag": "🇪🇬", "date": "05.09", "status": " GP" },
  { "name": "Starfield Premium Edition", "price": "14.67", "flag": "🇪🇬", "date": "30.12", "status": " GP" },
  { "name": "SteamWorld Build & Dig Bundle", "price": "4.46", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "SteamWorld Build Deluxe Edition", "price": "4.22", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "SteamWorld Build", "price": "2.02", "flag": "🇳🇬", "date": "29.10", "status": "" },
  { "name": "SteamWorld Dig 2", "price": "0.58", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "SteamWorld Dig", "price": "0.26", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Steep X Games Gold Edition", "price": "1.71", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Stellaris: Console Edition - Deluxe Edition", "price": "4.0", "flag": "🇹🇷", "date": "16.10", "status": " GP" },
  { "name": "Strategic Mind: Fight for Dominance + Kaiju Wars - Fight Monsters Bundle", "price": "7.66", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Street Outlaws 2: Winner Takes All – Digital Deluxe", "price": "0.5", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Struggling", "price": "1.09", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Sunset Overdrive Deluxe Edition", "price": "1.62", "flag": "🇹🇷", "date": "31.05", "status": " GP" },
  { "name": "Super Space Serpent SE", "price": "0.25", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Sébastien Loeb Rally EVO", "price": "1.46", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "TRIVIAL PURSUIT Live! 2", "price": "1.38", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Tails Of Iron", "price": "0.79", "flag": "🇳🇬", "date": "22.10", "status": " GP" },
  { "name": "Tainted Grail: Conquest", "price": "0.66", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Tales of ARISE + SCARLET NEXUS バンドル", "price": "35.0", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Tales of Arise - Beyond The Dawn Ultimate Edition", "price": "42.0", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Tales of Arise - Beyond the Dawn Deluxe Edition", "price": "35.0", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Tales of Arise - Beyond the Dawn Edition", "price": "25.66", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Tanky Tanks", "price": "0.3", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Tchia: Oléti Edition", "price": "7.88", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Teardown", "price": "1.24", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Teenage Mutant Ninja Turtles Arcade: Wrath of the Mutants", "price": "11.59", "flag": "🇮🇳", "date": "29.10", "status": "" },
  { "name": "Teenage Mutant Ninja Turtles: Shredder's Revenge - Ultimate Edition", "price": "2.19", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "The Bard's Tale Trilogy", "price": "0.73", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "The Callisto Protocol™ for Xbox One – Digital Deluxe Edition", "price": "16.93", "flag": "🇹🇷", "date": "17.10", "status": " GP" },
  { "name": "The Callisto Protocol™ for Xbox Series X|S – Digital Delu...", "price": "19.84", "flag": "🇹🇷", "date": "17.10", "status": " GP" },
  { "name": "The Crew Motorfest Gold Edition", "price": "20.43", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "The Elder Scrolls III: Morrowind", "price": "1.14", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "The Elder Scrolls Online Collection: Gold Road", "price": "30.35", "flag": "🇹🇷", "date": "17.10", "status": " GP" },
  { "name": "The Elder Scrolls Online Deluxe Collection: Gold Road", "price": "40.86", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Elder Scrolls V: Skyrim Anniversary Edition", "price": "11.21", "flag": "🇹🇷", "date": "17.10", "status": " GP" },
  { "name": "The Escapists 2", "price": "1.09", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "The Escapists: Supermax Edition", "price": "1.79", "flag": "🇹🇷", "date": "29.04", "status": "" },
  { "name": "The Evil Within Digital Bundle", "price": "2.36", "flag": "🇹🇷", "date": "17.10", "status": " GP" },
  { "name": "The Fast Journey", "price": "0.52", "flag": "🇳🇬", "date": "22.10", "status": "" },
  { "name": "The Game of Life 2", "price": "0.74", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "The Gunk", "price": "0.92", "flag": "🇳🇬", "date": "29.10", "status": "" },
  { "name": "The Hellblade Bundle", "price": "10.55", "flag": "🇪🇬", "date": "17.10", "status": " GP" },
  { "name": "The Jackbox Party Quadpack", "price": "6.24", "flag": "🇹🇷", "date": "31.12", "status": "" },
  { "name": "The Lamplighters League - Deluxe Edition", "price": "7.03", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "The Long Dark", "price": "1.29", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "The Outer Worlds: Board-Approved Bundle", "price": "7.86", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "The Quarry - Deluxe Edition", "price": "18.42", "flag": "🇹🇷", "date": "16.12", "status": " GP" },
  { "name": "The Rabbit Crazy Adventure (for Windows 10)", "price": "0.44", "flag": "🇳🇬", "date": "22.10", "status": "" },
  { "name": "The Rabbit Crazy Adventure", "price": "0.48", "flag": "🇳🇬", "date": "22.10", "status": "" },
  { "name": "The Serpent Rogue", "price": "0.43", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "The Settlers®: New Allies", "price": "9.63", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "The Surge 2 - Windows 10", "price": "1.17", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "The Surge 2", "price": "2.08", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "The Survivalists", "price": "0.58", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "The Walking Dead: A New Frontier", "price": "0.99", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "The Walking Dead: Destinies", "price": "11.38", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "The Walking Dead: Michonne", "price": "0.33", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "This War of Mine - Complete Edition", "price": "1.78", "flag": "🇹🇷", "date": "16.10", "status": " GP" },
  { "name": "This War of Mine: Final Cut", "price": "0.25", "flag": "🇹🇷", "date": "16.10", "status": " GP" },
  { "name": "Time Of War, Arkano'90", "price": "0.16", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Togges", "price": "0.49", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Gold Edition", "price": "4.67", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Tom Clancy's Rainbow Six® Extraction United Bundle", "price": "14.01", "flag": "🇹🇷", "date": "21.10", "status": " GP" },
  { "name": "Tom Clancy's The Division", "price": "0.53", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands - Standard Edition", "price": "1.58", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Ultimate Edition", "price": "12.35", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Year 2 Gold Edition", "price": "9.34", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Tom Clancy’s Rainbow Six Siege Operator Edition", "price": "15.18", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Tom Clancy’s Rainbow Six Siege Ultimate Edition", "price": "37.35", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Tom Clancy’s Rainbow Six® Extraction", "price": "2.63", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "TopSpin 2K25 Cross-Gen Digital Edition", "price": "27.42", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "TopSpin 2K25 Grand Slam® Edition Pre-Order", "price": "43.76", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "TopSpin 2K25 for Xbox One", "price": "24.92", "flag": "🇰🇷", "date": "22.10", "status": " GP" },
  { "name": "Toro", "price": "0.46", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Totally Reliable Delivery Service Deluxe Edition", "price": "1.58", "flag": "🇹🇷", "date": "01.12", "status": " GP" },
  { "name": "Trailblazers", "price": "0.19", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Trailmakers: Booster Edition", "price": "2.31", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers: Deluxe Edition", "price": "3.3", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers: Ultimate Edition", "price": "3.97", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Trials Fusion", "price": "0.42", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Turbo Golf Racing: Deep Space Bundle", "price": "1.05", "flag": "🇹🇷", "date": "16.04", "status": " GP" },
  { "name": "Turbo Golf Racing: Ultimate Bundle", "price": "1.25", "flag": "🇹🇷", "date": "16.04", "status": " GP" },
  { "name": "Turnip Boy Robs a Bank Pre-Release", "price": "0.99", "flag": "🇹🇷", "date": "15.07", "status": " GP" },
  { "name": "Two Point Campus", "price": "0.92", "flag": "🇳🇬", "date": "22.10", "status": " GP" },
  { "name": "UFC® 5 Deluxe Edition", "price": "34.91", "flag": "🇰🇷", "date": "17.10", "status": "" },
  { "name": "UFC® 5 Standard Edition", "price": "26.76", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "UFC® 5 Ultimate Edition", "price": "42.63", "flag": "🇰🇷", "date": "17.10", "status": "" },
  { "name": "UFC® 5", "price": "26.76", "flag": "🇮🇳", "date": "17.10", "status": "" },
  { "name": "Ugly", "price": "0.85", "flag": "🇳🇬", "date": "22.10", "status": " GP" },
  { "name": "Ultimate Chicken Horse", "price": "0.54", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Ultimate Ski Jumping 2020 + Glaive: Brick Breaker Bundle", "price": "0.71", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "1.2", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Valentino Rossi The Game", "price": "1.11", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Valiant Hearts: The Great War", "price": "0.28", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Venus: Improbable Dream", "price": "2.29", "flag": "🇮🇳", "date": "22.10", "status": "" },
  { "name": "Vermintide - Digital Value Pack", "price": "2.57", "flag": "🇹🇷", "date": "07.03", "status": "" },
  { "name": "WATCH_DOGS™ COMPLETE EDITION", "price": "0.82", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "WATCH_DOGS™", "price": "0.65", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "9.19", "flag": "🇹🇷", "date": "30.08", "status": "" },
  { "name": "WWE 2K Battlegrounds Digital Deluxe Edition", "price": "2.33", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "WWE 2K Battlegrounds", "price": "1.92", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "WWE 2K24 Cross-Gen Digital Edition", "price": "27.42", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "WWE 2K24 Forty Years of WrestleMania Edition", "price": "43.76", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "WWE 2K24 for Xbox One", "price": "23.89", "flag": "🇰🇷", "date": "22.10", "status": " GP" },
  { "name": "Wanted: Dead", "price": "1.47", "flag": "🇳🇬", "date": "22.10", "status": " GP" },
  { "name": "Warhammer 40,000: Boltgun - Forges of Corruption Edition", "price": "10.33", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "Warhammer 40,000: Chaos Gate - Daemonhunters - Purifier Edition", "price": "10.58", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Warhammer 40,000: Darktide - Imperial Edition", "price": "9.17", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Wasteland 3 (PC) Colorado Collection", "price": "6.42", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Wasteland 3 Colorado Collection", "price": "10.25", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "Watch Dogs 1 + Watch Dogs 2 Standard Editions Bundle", "price": "8.22", "flag": "🇧🇷", "date": "22.10", "status": " GP" },
  { "name": "Watch Dogs®2 - Deluxe Edition", "price": "5.63", "flag": "🇧🇷", "date": "22.10", "status": " GP" },
  { "name": "Watch Dogs®2 - Gold Edition", "price": "47.86", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Watch Dogs®: Legion Gold Edition", "price": "4.67", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Wavetale", "price": "1.21", "flag": "🇳🇬", "date": "29.10", "status": "" },
  { "name": "We Happy Few Digital Deluxe", "price": "7.41", "flag": "🇹🇷", "date": "16.01", "status": " GP" },
  { "name": "We Love Katamari REROLL+ Royal Reverie Special Edition", "price": "5.26", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "We Were Here Together", "price": "0.64", "flag": "🇳🇬", "date": "22.10", "status": " GP" },
  { "name": "We Were Here Too", "price": "0.24", "flag": "🇳🇬", "date": "22.10", "status": " GP" },
  { "name": "Weedcraft Inc + Ruinarch - Devil Lettuce Bundle", "price": "7.4", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "White Shadows", "price": "0.58", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Wild Card Football - Ultimate Edition", "price": "11.38", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Wild Card Football", "price": "5.69", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "Wired Italian Adventure Bundle", "price": "1.98", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Wizard with a Gun", "price": "1.11", "flag": "🇳🇬", "date": "22.10", "status": " GP" },
  { "name": "Wo Long: Fallen Dynasty Complete Edition", "price": "29.87", "flag": "🇺🇦", "date": "01.03", "status": " GP" },
  { "name": "Wolfenstein: Alt History Collection", "price": "11.67", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Wolfenstein: Youngblood Deluxe Edition", "price": "5.11", "flag": "🇹🇷", "date": "17.02", "status": " GP" },
  { "name": "Wolfenstein® II: The New Colossus™ Digital Deluxe Edition", "price": "7.0", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "Wolfenstein®: The Two-Pack", "price": "3.71", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "Woodle Tree Adventures", "price": "0.1", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "World War Z", "price": "5.69", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "World War Z: Aftermath - Deluxe Edition", "price": "15.18", "flag": "🇹🇷", "date": "01.12", "status": " GP" },
  { "name": "Worldless", "price": "1.54", "flag": "🇳🇬", "date": "29.10", "status": "" },
  { "name": "Worms Battlegrounds", "price": "0.51", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Wreckfest Complete Edition", "price": "7.37", "flag": "🇧🇷", "date": "22.10", "status": " GP" },
  { "name": "XCOM® 2 Collection", "price": "0.93", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "XCOM®: Enemy Within", "price": "0.55", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Yakuza: Like a Dragon Hero Edition", "price": "11.8", "flag": "🇯🇵", "date": "01.04", "status": " GP" },
  { "name": "Yakuza: Like a Dragon Legendary Hero Edition", "price": "15.93", "flag": "🇯🇵", "date": "01.04", "status": " GP" },
  { "name": "Yasai Ninja", "price": "0.29", "flag": "🇹🇷", "date": "22.10", "status": "" },
  { "name": "Yesterday Origins", "price": "0.13", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Yoku's Island Express", "price": "0.87", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Yooka-Laylee and the Impossible Lair", "price": "0.5", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Zero the Kamikaze Squirrel", "price": "3.08", "flag": "🇮🇳", "date": "19.10", "status": "" },
  { "name": "Zombie Derby Collection", "price": "0.74", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "Zombie Vikings", "price": "0.11", "flag": "🇹🇷", "date": "29.10", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Greenhorn Bundle", "price": "2.66", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "theHunter: Call of the Wild™ - Master Hunter Bundle", "price": "3.97", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "theHunter: Call of the Wild™ - Seasoned Hunter Bundle", "price": "3.3", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "theHunter: Call of the Wild™", "price": "0.78", "flag": "🇹🇷", "date": "22.10", "status": " GP" },
  { "name": "ドラゴンクエストXI 過ぎ去りし時を求めて S", "price": "18.37", "flag": "🇯🇵", "date": "22.10", "status": " GP" },
  { "name": "僕のヒーローアカデミア One 's Justice2 デラックスエディション", "price": "27.88", "flag": "🇯🇵", "date": "22.10", "status": " GP" }
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
    a = 100
  } else if (value > 1 && value <= 5) {
    a = 110
  } else if (value > 5 && value <= 10) {
    a = 110
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
    a = 90
  } else if (value > 1 && value <= 5) {
    a = 100
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



