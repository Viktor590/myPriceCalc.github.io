const arg_input = document.querySelector('.arg-input');
const arg_output = document.querySelector('.arg-output_res');
const arg_output2 = document.querySelector('.arg-output_res2');
const list = document.querySelector('.list')

const tr_input = document.querySelector('.tr-input');
const tr_output = document.querySelector('.tr-output_res');
const tr_output2 = document.querySelector('.tr-output_res2');

const showBtn = document.querySelector('.show')

console.log(tr_input.value);

showBtn.addEventListener('click', () => {
  showBtn.classList.contains('active') ?
    hiddenMenu() : showMenu()
})


let percent;

const arr = [
  { "name": "50 Years", "price": "0.04", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "A Building Full of Cats", "price": "0.04", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "A Hole New World", "price": "0.02", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "A Way Out", "price": "0.12", "flag": "🇦🇷", "date": "25.03", "status": " GP" },
  { "name": "ACE COMBAT™ 7: SKIES UNKNOWN - TOP GUN: Maverick Ultimate Edition", "price": "3.11", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "Absolver", "price": "0.04", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Aces of the Luftwaffe - Squadron", "price": "0.06", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Aery - Sky Castle", "price": "0.11", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Age of Empires 25th Anniversary Collection", "price": "1.72", "flag": "🇦🇷", "date": "30.12", "status": " GP" },
  { "name": "Age of Empires: Definitive Collection", "price": "0.7", "flag": "🇦🇷", "date": "05.10", "status": " GP" },
  { "name": "Airborne Bundle", "price": "0.57", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Almost My Floor", "price": "0.07", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Anima: Gate of Memories - Arcane Edition", "price": "0.07", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Arcade Paradise | High Score Edition", "price": "0.4", "flag": "🇦🇷", "date": "01.07", "status": " GP" },
  { "name": "Argonauts Agency 3: Chair of Hephaestus", "price": "0.06", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Assassin's Creed® Bundle: Assassin's Creed® Valhalla, Ass...", "price": "39.68", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey - DELUXE EDITION", "price": "17.36", "flag": "🇹🇷", "date": "25.03", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey - GOLD EDITION", "price": "4.96", "flag": "🇹🇷", "date": "25.03", "status": "" },
  { "name": "Assassin's Creed® Odyssey - ULTIMATE EDITION", "price": "22.94", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey", "price": "3.72", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "Assassin's Creed® Origins - DELUXE EDITION", "price": "4.18", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "Assassin's Creed® Origins - GOLD EDITION", "price": "19.84", "flag": "🇹🇷", "date": "25.03", "status": " GP" },
  { "name": "Assassin's Creed® Syndicate Gold Edition", "price": "0.94", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Assassin's Creed® Syndicate", "price": "0.58", "flag": "🇦🇷", "date": "25.03", "status": "" },
  { "name": "Assassin's Creed® The Ezio Collection", "price": "1.95", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Complete Edition", "price": "7.75", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Deluxe Edition", "price": "6.01", "flag": "🇹🇷", "date": "25.03", "status": "" },
  { "name": "Assassin's Creed® Valhalla Ragnarök Edition", "price": "14.88", "flag": "🇹🇷", "date": "25.03", "status": "" },
  { "name": "Assassin's Creed® Valhalla", "price": "4.65", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Assassin’s Creed Mirage & Assassin's Creed Valhalla Bundle", "price": "16.12", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Assassin’s Creed® Mirage Deluxe Edition", "price": "18.6", "flag": "🇹🇷", "date": "25.03", "status": "" },
  { "name": "Assassin’s Creed® Valhalla + Immortals Fenyx Rising™ Bundle", "price": "24.8", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Asterigos: Curse of the Stars", "price": "1.37", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Atomic Heart - Gold Edition", "price": "11.25", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Atomic Heart - Premium Edition", "price": "17.0", "flag": "🇦🇷", "date": "16.08", "status": " GP" },
  { "name": "Atomicrops", "price": "0.07", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Atomicrops: Reap What You Bundle", "price": "0.08", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Attack of the Earthlings", "price": "0.14", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Avatar: Frontiers of Pandora™ Ultimate Edition", "price": "40.92", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "Avatar: Frontiers of Pandora™", "price": "26.97", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Awarded Platformer Bundle", "price": "0.21", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "BATTLETECH Mercenary Collection", "price": "1.29", "flag": "🇦🇷", "date": "13.06", "status": " GP" },
  { "name": "Back 4 Blood: Deluxe Edition", "price": "8.2", "flag": "🇦🇷", "date": "01.04", "status": " GP" },
  { "name": "Banner Saga 3", "price": "0.44", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "Batman: Arkham Knight Premium Edition", "price": "1.75", "flag": "🇦🇷", "date": "28.03", "status": " GP" },
  { "name": "Batman: The Telltale Series - The Complete Season (Episodes 1-5)", "price": "0.11", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Batman™: Arkham Knight", "price": "0.27", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Battle Brothers - Complete Edition", "price": "0.63", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Battlefield 4", "price": "0.07", "flag": "🇦🇷", "date": "25.03", "status": " GP" },
  { "name": "Battlefield V Definitive Edition", "price": "0.66", "flag": "🇦🇷", "date": "25.03", "status": " GP" },
  { "name": "Battlefield™ 1 Revolution", "price": "0.21", "flag": "🇦🇷", "date": "25.03", "status": " GP" },
  { "name": "Battlefield™ 1", "price": "0.09", "flag": "🇦🇷", "date": "25.03", "status": " GP" },
  { "name": "Battlefield™ 2042 Elite Edition Xbox One & Xbox Series X|S", "price": "3.3", "flag": "🇦🇷", "date": "25.03", "status": " GP" },
  { "name": "Battlefield™ 2042 Xbox One & Xbox Series X|S", "price": "1.2", "flag": "🇦🇷", "date": "25.03", "status": " GP" },
  { "name": "Battlefield™ 2042 Xbox One", "price": "1.2", "flag": "🇦🇷", "date": "25.03", "status": " GP" },
  { "name": "Battlefield™ V Standard Edition", "price": "0.43", "flag": "🇦🇷", "date": "25.03", "status": " GP" },
  { "name": "Bayonetta", "price": "1.24", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Big Moonstone Pack -- 5,500", "price": "3.6", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "BioShock 2 Remastered", "price": "0.88", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "BioShock Infinite: The Complete Edition", "price": "1.41", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "BioShock Remastered", "price": "1.41", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "Bit Orchard: Animal Valley", "price": "0.03", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Black Skylands (Game Preview)", "price": "0.21", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Blightbound", "price": "0.14", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Blood Bowl 3", "price": "2.81", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Borderlands 3: Next Level Edition", "price": "2.32", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "Borderlands 3: Ultimate Edition", "price": "6.59", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "Borderlands: The Handsome Collection", "price": "2.01", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "Bound by Flame", "price": "0.04", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Broforce", "price": "0.05", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Bud Spencer & Terence Hill - Slaps And Beans", "price": "0.05", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Builder Flipper bundle", "price": "0.61", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Bundle: South Park™ : The Stick of Truth™ + The Fractured...", "price": "0.75", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Burger Chef Tycoon", "price": "0.06", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Call of Cthulhu", "price": "0.49", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Call of the Sea", "price": "0.14", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Call of the Wild: The Angler™ - Deluxe Edition", "price": "0.64", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Carrion", "price": "0.11", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Cassette Beasts", "price": "0.25", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Cassette Beasts: Deluxe Edition", "price": "0.37", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Chivalry 2 King's Edition", "price": "0.86", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "Chivalry 2 Special Edition", "price": "0.71", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "Cities: Skylines - Mayor's Edition", "price": "0.75", "flag": "🇦🇷", "date": "01.04", "status": " GP" },
  { "name": "Cities: Skylines - Premium Edition 2", "price": "1.0", "flag": "🇦🇷", "date": "01.04", "status": " GP" },
  { "name": "Commandos 2 - HD Remaster", "price": "0.87", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Conan Exiles - Complete Edition October 2021", "price": "2.3", "flag": "🇦🇷", "date": "16.08", "status": " GP" },
  { "name": "Conan Exiles - Isle of Siptah Edition", "price": "0.99", "flag": "🇦🇷", "date": "16.08", "status": " GP" },
  { "name": "Contra: Operation Galuga + Early-purchase Bonus", "price": "5.17", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Crusader Kings III: Royal Edition", "price": "1.07", "flag": "🇦🇷", "date": "28.03", "status": " GP" },
  { "name": "Cult of the Lamb", "price": "1.31", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Cult of the Lamb: Heretic Edition", "price": "1.8", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Curious Expedition 2 Bundle", "price": "0.17", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Curse of the Dead Gods", "price": "0.41", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "DARKGEMS (Windows)", "price": "0.07", "flag": "🇦🇷", "date": "06.04", "status": "" },
  { "name": "DARKGEMS (Xbox Series)", "price": "0.07", "flag": "🇦🇷", "date": "06.04", "status": "" },
  { "name": "DARKGEMS", "price": "0.07", "flag": "🇦🇷", "date": "06.04", "status": "" },
  { "name": "DAS WIRED-HORROR-SPIELPAKET", "price": "0.57", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "DEAD ISLAND 2 DELUXE EDITION", "price": "18.58", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "DEAD ISLAND 2 GOLD EDITION", "price": "22.3", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "DEATHLOOP Deluxe Edition", "price": "16.12", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "DIRT 5 Year One Edition", "price": "1.29", "flag": "🇦🇷", "date": "28.03", "status": " GP" },
  { "name": "DOOM (1993)", "price": "0.27", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "DOOM 3", "price": "0.54", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "DOOM 64", "price": "0.15", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "DOOM Eternal Deluxe Edition", "price": "14.88", "flag": "🇹🇷", "date": "28.03", "status": " GP" },
  { "name": "DOOM Eternal: The Ancient Gods - Part One", "price": "5.27", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "DOOM Eternal: The Ancient Gods - Part Two", "price": "5.27", "flag": "🇹🇷", "date": "17.03", "status": " GP" },
  { "name": "DOOM Eternal: Year One Pass (PC)", "price": "7.95", "flag": "🇹🇷", "date": "03.12", "status": " GP" },
  { "name": "DOOM Eternal: Year One Pass", "price": "7.95", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "DOOM II (Classic)", "price": "0.27", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "DOOM Slayers Collection", "price": "3.35", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "DRAGON BALL FIGHTERZ", "price": "1.15", "flag": "🇹🇷", "date": "25.03", "status": "" },
  { "name": "DRAGON BALL XENOVERSE 2 - Special Edition", "price": "13.93", "flag": "🇹🇷", "date": "25.03", "status": " GP" },
  { "name": "DRAGON BALL Z: KAKAROT Legendary Edition", "price": "16.73", "flag": "🇹🇷", "date": "25.03", "status": " GP" },
  { "name": "Dandara: Trials of Fear Edition", "price": "0.04", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Darkest Dungeon®: Ancestral Edition", "price": "0.4", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Dead Cells: Medley of Pain Bundle", "price": "0.57", "flag": "🇦🇷", "date": "16.09", "status": " GP" },
  { "name": "Dead Cells: Return to Castlevania Bundle", "price": "0.45", "flag": "🇦🇷", "date": "16.09", "status": " GP" },
  { "name": "Dead Space Digital Deluxe Edition", "price": "19.84", "flag": "🇹🇷", "date": "25.03", "status": " GP" },
  { "name": "Dead Space", "price": "17.36", "flag": "🇹🇷", "date": "25.03", "status": " GP" },
  { "name": "Deep Rock Galactic - Deluxe Edition", "price": "0.57", "flag": "🇦🇷", "date": "01.11", "status": " GP" },
  { "name": "Deep Rock Galactic - Ultimate Edition", "price": "0.71", "flag": "🇦🇷", "date": "01.11", "status": " GP" },
  { "name": "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles Digital Deluxe Edition", "price": "7.75", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles", "price": "16.27", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "Despot's Game", "price": "0.14", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Deus Ex: Mankind Divided™", "price": "0.94", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Digimon Survive", "price": "3.25", "flag": "🇹🇷", "date": "25.03", "status": " GP" },
  { "name": "Dishonored & Prey: The Arkane Collection", "price": "15.5", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Dishonored®: Death of the Outsider™ Deluxe Bundle", "price": "12.34", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Disney Dreamlight Valley: A Rift in Time", "price": "0.54", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Dordogne", "price": "3.37", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Dragon Age™: Inquisition - Game of the Year Edition", "price": "0.71", "flag": "🇹🇷", "date": "25.03", "status": " GP" },
  { "name": "Dungeons 4 - Digital Deluxe Edition", "price": "14.0", "flag": "🇦🇷", "date": "16.11", "status": " GP" },
  { "name": "EA SPORTS FC™ 24 Standard Edition Xbox One & Xbox Series X|S", "price": "13.02", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "EA SPORTS FC™ 24 Standard Edition Xbox One & Xbox Series X|S", "price": "6.51", "flag": "🇹🇷", "date": "25.03", "status": "" },
  { "name": "EA SPORTS FC™ 24 Ultimate Edition Xbox One & Xbox Series X|S", "price": "24.8", "flag": "🇹🇷", "date": "25.03", "status": "" },
  { "name": "Effie", "price": "0.09", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Enter The Gungeon", "price": "0.08", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Escape Academy Deluxe Edition", "price": "0.5", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Escape Dead Island", "price": "0.05", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Exit the Gungeon", "price": "0.07", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "F1® 23", "price": "30.38", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "F1® Manager 2023 Deluxe Edition", "price": "13.64", "flag": "🇹🇷", "date": "16.10", "status": " GP" },
  { "name": "FOR HONOR – Gold Edition", "price": "24.8", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "FOR HONOR – Ultimate Edition", "price": "39.68", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Fall of Porcupine", "price": "0.89", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Fallout 4: Game of the Year Edition (PC)", "price": "7.07", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "Fallout 4: Game of the Year Edition", "price": "7.07", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "Fallout 76: Atlantic City - Boardwalk Paradise Deluxe Edition", "price": "12.0", "flag": "🇦🇷", "date": "30.12", "status": " GP" },
  { "name": "Far Cry Primal - Apex Edition", "price": "0.74", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Far Cry Primal", "price": "0.44", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Far Cry® 3 Blood Dragon Classic Edition", "price": "0.94", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Far Cry® 4", "price": "0.17", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Far Cry® 5", "price": "0.43", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Far Cry® 6 Deluxe Edition", "price": "19.22", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Far Cry® 6 Game of the Year Edition", "price": "8.83", "flag": "🇹🇷", "date": "25.03", "status": "" },
  { "name": "Far Cry® 6 Gold Edition", "price": "19.84", "flag": "🇹🇷", "date": "25.03", "status": "" },
  { "name": "Far Cry® 6", "price": "4.65", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Far Cry® New Dawn Deluxe Edition", "price": "0.45", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Far Cry®5 Gold Edition", "price": "3.3", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Farm Bundle", "price": "0.57", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Farm Pets Bundle", "price": "0.86", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Farworld Pioneers", "price": "0.13", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Fin and the Ancient Mystery", "price": "0.03", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Flailing Limbs Bundle", "price": "0.25", "flag": "🇦🇷", "date": "01.08", "status": " GP" },
  { "name": "Forza Horizon 4 Expansions Bundle", "price": "2.81", "flag": "🇦🇷", "date": "02.10", "status": " GP" },
  { "name": "Forza Horizon 5 PLUS Hot Wheels Bundle", "price": "10.8", "flag": "🇦🇷", "date": "30.12", "status": " GP" },
  { "name": "Frostpunk: Complete Collection", "price": "0.64", "flag": "🇦🇷", "date": "16.07", "status": " GP" },
  { "name": "Fuga: Melodies of Steel 2 - Deluxe Edition", "price": "8.0", "flag": "🇦🇷", "date": "16.05", "status": " GP" },
  { "name": "Fuga: Melodies of Steel 2 - Ultimate Edition", "price": "8.55", "flag": "🇦🇷", "date": "16.05", "status": " GP" },
  { "name": "Fur Squadron", "price": "0.07", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "GONNER2", "price": "0.07", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "GRIS", "price": "0.38", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Garden Bundle", "price": "0.64", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Garden City", "price": "0.06", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Gato Roboto", "price": "0.04", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Gears of War 4 and Halo 5: Guardians Bundle", "price": "0.4", "flag": "🇦🇷", "date": "31.01", "status": " GP" },
  { "name": "Gears of War Ultimate Edition Deluxe Version", "price": "1.3", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Generation Zero ® - Silver Bundle", "price": "0.71", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Generation Zero ® - Ultimate Bundle", "price": "1.0", "flag": "🇦🇷", "date": "28.03", "status": " GP" },
  { "name": "Generation Zero® - Gold Bundle", "price": "0.86", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Ghostwire: Tokyo Deluxe Edition", "price": "19.22", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Giana Sisters: Twisted Dreams - Director's Cut", "price": "0.04", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Gnomes Garden 5: Halloween", "price": "0.06", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Go Mecha Ball", "price": "1.4", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "GoNNER - BLüEBERRY EDiTION", "price": "0.02", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Goat Simulator 3 - Digital Downgrade Edition", "price": "2.0", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Goat Simulator: The GOATY", "price": "0.3", "flag": "🇦🇷", "date": "01.05", "status": " GP" },
  { "name": "Goat Simulator: Waste Of Space Bundle", "price": "0.14", "flag": "🇦🇷", "date": "01.05", "status": " GP" },
  { "name": "Golf With Your Friends - Starter Edition", "price": "18.0", "flag": "🇦🇷", "date": "16.07", "status": " GP" },
  { "name": "Golf With Your Friends - Ultimate Edition", "price": "33.46", "flag": "🇹🇷", "date": "28.03", "status": " GP" },
  { "name": "Gotham Knights", "price": "2.0", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Grand Theft Auto Online", "price": "3.39", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Grand Theft Auto V (Xbox One & Xbox Series X|S)", "price": "6.13", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Grand Theft Auto V: Premium Edition & Great White Shark C...", "price": "2.79", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Grand Theft Auto V: Premium Edition & Megalodon Shark Car...", "price": "4.68", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Grand Theft Auto V: Premium Edition & Whale Shark Card Bu...", "price": "3.22", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Graveyard Keeper", "price": "0.06", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Graveyard Keeper: Last Journey Edition", "price": "0.22", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "GreedFall", "price": "0.78", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Guilty Gear -Strive- Daredevil Edition", "price": "7.09", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "HITMAN™ 2", "price": "1.57", "flag": "🇦🇷", "date": "04.02", "status": "" },
  { "name": "Halo 5: Guardians – Digital Deluxe Edition", "price": "6.5", "flag": "🇦🇷", "date": "31.05", "status": " GP" },
  { "name": "Halo Wars 2: Complete Edition", "price": "24.8", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Happy's Humble Burger Farm", "price": "0.09", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Harmony's Odyssey", "price": "0.05", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Heart&Slash", "price": "0.05", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Hell Let Loose - Deluxe Edition", "price": "28.99", "flag": "🇹🇷", "date": "28.03", "status": " GP" },
  { "name": "Hell Let Loose - Ultimate Edition", "price": "33.46", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Hellblade: Senua's Sacrifice", "price": "0.27", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "Hello Engineer", "price": "0.16", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Hello Neighbor 2 Deluxe Edition", "price": "5.5", "flag": "🇦🇷", "date": "16.12", "status": " GP" },
  { "name": "Hello Neighbor 2", "price": "0.32", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Hello Neighbor", "price": "0.09", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Hello Neighbor: Hide and Seek", "price": "0.13", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Hellpoint Ultimate Edition", "price": "0.18", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Hellpoint", "price": "0.16", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Help Will Come Tomorrow", "price": "0.05", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Hi-Fi RUSH Deluxe Edition", "price": "14.88", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Hogwarts Legacy Xbox One Version", "price": "14.86", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "Hogwarts Legacy Xbox Series X|S Version", "price": "16.72", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "Hotline Miami 2: Wrong Number", "price": "0.2", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Hotline Miami", "price": "0.19", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Huge Moonstone Pack -- 14,500", "price": "9.0", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Hypnospace Outlaw & Slayers X: Terminal Aftermath: Vengance of the Slayer Bundle", "price": "0.48", "flag": "🇦 🇷", "date": "01.06", "status": " GP" },
  { "name": "INSIDE & LIMBO Bundle", "price": "2.52", "flag": "🇦🇷", "date": "01.08", "status": " GP" },
  { "name": "Immortals Fenyx Rising™ Gold Edition", "price": "5.5", "flag": "🇦🇷", "date": "25.03", "status": " GP" },
  { "name": "Immortals of Aveum™ Deluxe Edition", "price": "19.84", "flag": "🇹🇷", "date": "25.03", "status": " GP" },
  { "name": "Immortals of Aveum™ Deluxe Edition", "price": "22.32", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Immortals of Aveum™", "price": "17.36", "flag": "🇹🇷", "date": "25.03", "status": " GP" },
  { "name": "Infected Cowboys Bundle", "price": "17.14", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Infinity Runner", "price": "0.04", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Injustice™ 2 - Legendary Edition", "price": "1.9", "flag": "🇦🇷", "date": "28.03", "status": " GP" },
  { "name": "Injustice™ 2", "price": "0.19", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Inscryption", "price": "0.89", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Insurgency: Sandstorm - Deluxe Edition", "price": "17.0", "flag": "🇦🇷", "date": "25.03", "status": " GP" },
  { "name": "Insurgency: Sandstorm - Gold Edition", "price": "25.0", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Insurgency: Sandstorm - Ultimate Edition", "price": "29.0", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "It Takes Two - Digital Version", "price": "3.09", "flag": "🇹🇷", "date": "25.03", "status": " GP" },
  { "name": "Jurassic World Evolution 2: Deluxe Edition", "price": "7.0", "flag": "🇦🇷", "date": "16.05", "status": " GP" },
  { "name": "Just Dance 2024 Deluxe Edition", "price": "22.16", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "Just Dance 2024 Edition", "price": "15.5", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Justice Sucks", "price": "0.14", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "KLONOA Phantasy Reverie Series", "price": "3.25", "flag": "🇹🇷", "date": "25.03", "status": " GP" },
  { "name": "KarmaZoo", "price": "0.67", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Katamari Damacy REROLL", "price": "1.7", "flag": "🇹🇷", "date": "25.03", "status": " GP" },
  { "name": "Katana Zero XB1", "price": "0.16", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Kill It With Fire", "price": "0.07", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Kill It With Fire: Exterminator Edition", "price": "0.09", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Kingdom Eighties", "price": "0.15", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Kingdom Two Crowns", "price": "0.06", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Kingdom Two Crowns: Norse Lands Edition", "price": "0.09", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Kingdom of Aurelia: Mystery of the Poisoned Dagger", "price": "0.28", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Kingdom: New Lands", "price": "0.03", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Knight vs Giant: The Broken Excalibur", "price": "0.28", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Knowledge Keeper (Xbox Series X|S)", "price": "0.07", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Knowledge Keeper", "price": "0.07", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Krimson", "price": "0.16", "flag": "🇦🇷", "date": "27.03", "status": "" },
  { "name": "L.A. Noire", "price": "3.1", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "LEGO® 2K Drive Awesome Edition", "price": "19.44", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "LEGO® Star Wars™: The Skywalker Saga", "price": "1.87", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Lara Croft and the Temple of Osiris & Season Pass Pack", "price": "0.93", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "League of Enthusiastic Losers + Brawl Chess", "price": "0.06", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "League of Enthusiastic Losers + Cyber Protocol", "price": "0.07", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Let's Build a Zoo & Dinosaur DLC Bundle", "price": "0.38", "flag": "🇦🇷", "date": "01.04", "status": " GP" },
  { "name": "Let's Build a Zoo: Aquarium Odyssey Bundle", "price": "0.38", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "Let's Build a Zoo: Ultimate Bundle", "price": "0.48", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "Light & Dark Bundle", "price": "2.0", "flag": "🇦🇷", "date": "02.11", "status": "" },
  { "name": "Little Nightmares Complete Edition", "price": "1.57", "flag": "🇦🇷", "date": "25.03", "status": " GP" },
  { "name": "Little Nightmares II", "price": "4.59", "flag": "🇹🇷", "date": "25.03", "status": " GP" },
  { "name": "Lonely Mountains: Downhill - Eldfjall Island", "price": "0.33", "flag": "🇦🇷", "date": "01.11", "status": " GP" },
  { "name": "Long Ago: A Puzzle Tale", "price": "0.25", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Lose Your Head Deluxe Bundle", "price": "0.09", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Lost Artifacts 5: Frozen Queen", "price": "0.06", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Lost Judgment Digital Ultimate Edition", "price": "6.2", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Lost Judgment", "price": "4.07", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Low Story", "price": "0.07", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Luxury Garden Bundle", "price": "0.86", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "MLB® The Show™ 23 Digital Deluxe Edition - Xbox One and Xbox Series X|S", "price": "20.0", "flag": "🇦🇷", "date": "01.04", "status": " GP" },
  { "name": "MLB® The Show™ 23 Xbox One", "price": "10.2", "flag": "🇦🇷", "date": "01.04", "status": " GP" },
  { "name": "MLB® The Show™ 23 Xbox Series X|S", "price": "12.48", "flag": "🇦🇷", "date": "01.04", "status": " GP" },
  { "name": "MONOPOLY PLUS + MONOPOLY Madness", "price": "1.27", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "MXGP 2020 - The Official Motocross Videogame", "price": "1.69", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "MY HERO ONE'S JUSTICE 2 Ultimate Edition", "price": "11.62", "flag": "🇹🇷", "date": "25.03", "status": " GP" },
  { "name": "MY HERO ONE'S JUSTICE 2", "price": "5.8", "flag": "🇹🇷", "date": "25.03", "status": " GP" },
  { "name": "Madden NFL 23 Xbox One", "price": "6.4", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Madden NFL 23 Xbox Series X|S", "price": "7.5", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Mafia II: Definitive Edition", "price": "2.04", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "Mafia III: Definitive Edition", "price": "2.04", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "Maneater Apex Edition", "price": "0.71", "flag": "🇦🇷", "date": "01.03", "status": " GP" },
  { "name": "Marvel's Midnight Suns Digital+ Edition for Xbox One", "price": "6.97", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "Marvel's Midnight Suns Digital+ Edition for Xbox Series X|S", "price": "6.97", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "Mass Effect™ Legendary Edition", "price": "3.25", "flag": "🇹🇷", "date": "25.03", "status": " GP" },
  { "name": "MechWarrior 5: Mercenaries - JumpShip Edition", "price": "0.54", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Metal Wolf Chaos XD", "price": "0.22", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.0", "flag": "🇦🇷", "date": "30.11", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.0", "flag": "🇹🇷", "date": "30.11", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.0", "flag": "🇦🇷", "date": "30.11", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.0", "flag": "🇹🇷", "date": "30.11", "status": "" },
  { "name": "Middle-earth™: Shadow of War™ Definitive Edition", "price": "2.0", "flag": "🇦🇷", "date": "28.03", "status": " GP" },
  { "name": "Middle-earth™: Shadow of War™", "price": "0.17", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle - Windows 10", "price": "1.57", "flag": "🇹🇷", "date": "27.07", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle", "price": "1.57", "flag": "🇹🇷", "date": "27.07", "status": " GP" },
  { "name": "Minute of Islands", "price": "0.07", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Monster Energy Supercross - The Official Videogame 4", "price": "0.56", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Monster Energy Supercross 4 - Special Edition - Xbox Series X|S", "price": "0.94", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Monster Energy Supercross 4 - Special Edition", "price": "0.94", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Monster Energy Supercross 4 - Xbox Series X|S", "price": "0.56", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Monster Truck Championship - Rebel Hunter Edition Xbox One", "price": "0.18", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Monster Truck Championship - Rebel Hunter Edition Xbox Series X|S", "price": "0.18", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Moonlighter: Complete Edition", "price": "0.34", "flag": "🇦🇷", "date": "01.12", "status": " GP" },
  { "name": "Mortal Kombat 11 Ultimate + Injustice 2 Leg. Edition Bundle", "price": "21.3", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Mortal Kombat 11 Ultimate", "price": "9.9", "flag": "🇹🇷", "date": "28.03", "status": " GP" },
  { "name": "Mortal Kombat 11", "price": "0.28", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Mortal Kombat X", "price": "0.34", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Mortal Kombat™ 1 Premium Edition", "price": "39.0", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "MotoGP™22", "price": "0.75", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "MudRunner - American Wilds Edition", "price": "0.3", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Murder Diaries 2", "price": "0.11", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "My Friend Pedro", "price": "0.09", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "My Friend Peppa Pig - Complete Edition", "price": "5.5", "flag": "🇦🇷", "date": "28.03", "status": " GP" },
  { "name": "My Time at Portia Deluxe Edition", "price": "1.4", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "NBA 2K24 Baller Edition", "price": "43.38", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "NBA 2K24 Black Mamba Edition", "price": "47.12", "flag": "🇹🇷", "date": "28.03", "status": " GP" },
  { "name": "NHL® 24 X-Factor Edition Xbox One & Xbox Series X|S", "price": "18.6", "flag": "🇹🇷", "date": "25.03", "status": "" },
  { "name": "NHL® 24 Xbox One", "price": "9.3", "flag": "🇹🇷", "date": "25.03", "status": "" },
  { "name": "NHL® 24 Xbox Series X|S", "price": "10.85", "flag": "🇹🇷", "date": "25.03", "status": "" },
  { "name": "NORCO", "price": "0.13", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Necromunda: Hired Gun", "price": "0.94", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Necromunda: Underhive Wars", "price": "0.62", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Need for Speed Rivals", "price": "0.05", "flag": "🇦🇷", "date": "25.03", "status": " GP" },
  { "name": "Need for Speed™ Heat Deluxe Edition", "price": "0.19", "flag": "🇦🇷", "date": "25.03", "status": " GP" },
  { "name": "Need for Speed™ Heat", "price": "0.16", "flag": "🇦🇷", "date": "25.03", "status": " GP" },
  { "name": "Need for Speed™ Hot Pursuit Remastered", "price": "0.31", "flag": "🇦🇷", "date": "25.03", "status": " GP" },
  { "name": "Need for Speed™ Payback - Deluxe Edition", "price": "0.14", "flag": "🇦🇷", "date": "25.03", "status": " GP" },
  { "name": "Need for Speed™ Payback", "price": "0.1", "flag": "🇦🇷", "date": "25.03", "status": " GP" },
  { "name": "Need for Speed™ Unbound Palace Edition", "price": "1.31", "flag": "🇦🇷", "date": "25.03", "status": " GP" },
  { "name": "Need for Speed™ Unbound", "price": "1.12", "flag": "🇦🇷", "date": "25.03", "status": " GP" },
  { "name": "Need for Speed™", "price": "0.06", "flag": "🇦🇷", "date": "25.03", "status": " GP" },
  { "name": "Neon Abyss Deluxe Edition", "price": "0.4", "flag": "🇦🇷", "date": "16.07", "status": " GP" },
  { "name": "New Tales from the Borderlands: Deluxe Edition", "price": "4.37", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Night Call", "price": "0.07", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.04", "flag": "🇦🇷", "date": "30.05", "status": "" },
  { "name": "Nirvana: Pilot Yume", "price": "0.05", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "4.22", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "4.6", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Nordic Adventure Bundle", "price": "1.92", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "ONE PIECE ODYSSEY", "price": "4.64", "flag": "🇹🇷", "date": "25.03", "status": " GP" },
  { "name": "ONE PIECE World Seeker", "price": "1.12", "flag": "🇹🇷", "date": "25.03", "status": " GP" },
  { "name": "ONE PIECE: PIRATE WARRIORS 4 Deluxe Edition(Xbox One)", "price": "7.75", "flag": "🇹🇷", "date": "25.03", "status": " GP" },
  { "name": "ONE PIECE: PIRATE WARRIORS 4 Ultimate Edition (Xbox One)", "price": "23.25", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "Observation", "price": "0.11", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Obsurity", "price": "0.04", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Oddworld: New 'n' Tasty", "price": "0.06", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Oddworld: Soulstorm Enhanced Edition", "price": "1.16", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Oddworld: Stranger's Wrath HD", "price": "0.09", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "OlliOlli World Rad Edition", "price": "4.39", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "One Piece: Burning Blood", "price": "0.77", "flag": "🇹🇷", "date": "25.03", "status": " GP" },
  { "name": "Out in Space Bundle: Tin Can & orbit.industries", "price": "0.79", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Overcooked! 2 - Gourmet Edition", "price": "0.56", "flag": "🇦🇷", "date": "16.12", "status": " GP" },
  { "name": "PAW Patrol: Grand Prix - Complete Edition", "price": "4.5", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "PGA TOUR 2K23 Deluxe Edition", "price": "8.52", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "Paladins Deluxe Edition 2022", "price": "4.93", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Paladins Feathered Fiend Pack", "price": "1.65", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Paladins Gold Edition", "price": "1.23", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Paladins Interstellar Stallion Pack", "price": "1.65", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Paladins Season Pass 2022", "price": "3.86", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Paladins Sky Whale Pack", "price": "1.65", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Paladins Starter Edition", "price": "0.82", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Paper Dash - Ghost Hunt", "price": "0.12", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Paper Flight - Beyond Time", "price": "0.12", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Pets Bundle", "price": "0.64", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Phoenix Point: Behemoth Edition", "price": "0.43", "flag": "🇦🇷", "date": "30.12", "status": " GP" },
  { "name": "Pizza Possum", "price": "0.09", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Plants vs. Zombies Garden Warfare", "price": "0.06", "flag": "🇦🇷", "date": "25.03", "status": " GP" },
  { "name": "Plants vs. Zombies: Battle for Neighborville™ Deluxe Edition", "price": "0.43", "flag": "🇦🇷", "date": "25.03", "status": " GP" },
  { "name": "Plants vs. Zombies™ Garden Warfare 2", "price": "0.06", "flag": "🇦🇷", "date": "25.03", "status": " GP" },
  { "name": "Portal of Evil: Stolen Runes", "price": "0.1", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Prey®: Digital Deluxe Edition", "price": "7.07", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Prince of Persia The Lost Crown", "price": "16.74", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Prince of Persia™: The Lost Crown Deluxe Edition", "price": "18.6", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Pro Gymnast Simulator + Brawl Chess", "price": "0.09", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Pro Gymnast Simulator + Clumsy Rush", "price": "0.09", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Pro Gymnast Simulator + Cyber Protocol", "price": "0.09", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Project Snaqe", "price": "0.02", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Quake II", "price": "2.2", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "RAGE 2: Deluxe Edition", "price": "11.16", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "RESIDENT EVIL 2 Deluxe Edition", "price": "24.8", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "RIDE", "price": "0.25", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Railway Empire 2 - Digital Deluxe Edition", "price": "0.86", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Re:Touring (Xbox Series X|S)", "price": "0.14", "flag": "🇦🇷", "date": "28.03", "status": "" },
  { "name": "Re:Touring", "price": "0.14", "flag": "🇦🇷", "date": "28.03", "status": "" },
  { "name": "ReCore", "price": "2.5", "flag": "🇦🇷", "date": "", "status": "" },
  { "name": "Rebel Transmute", "price": "0.32", "flag": "🇦🇷", "date": "29.03", "status": "" },
  { "name": "Redfall Bite Back Edition", "price": "39.68", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Regular Moonstone Pack -- 2,500", "price": "1.8", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Remnant II - Deluxe Edition", "price": "5.5", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Remnant II - Ultimate Edition", "price": "7.0", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Remnant: From the Ashes - Complete Edition", "price": "1.5", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "Renzo Racer", "price": "0.78", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Return to Monkey Island", "price": "1.33", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Rewarding Community Bundle", "price": "0.11", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Riders Republic™ 360 Edition", "price": "12.09", "flag": "🇹🇷", "date": "25.03", "status": "" },
  { "name": "Riders Republic™ Complete Edition", "price": "16.27", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Riders Republic™ Skate Edition", "price": "9.3", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Riders Republic™", "price": "5.42", "flag": "🇹🇷", "date": "25.03", "status": "" },
  { "name": "Rise of the Tomb Raider: 20 Year Celebration", "price": "1.28", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Rogue Company: Living Doll Pack", "price": "1.48", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Rogue Company: Radioactive Revenant Pack", "price": "1.65", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Rogue Company: Rogue Edition", "price": "1.64", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Rogue Company: Ultimate Edition", "price": "3.29", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Rogue Company: Year 1 Pass", "price": "1.64", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Rugby 22 Xbox One", "price": "1.12", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Rugby 22 Xbox Series X|S", "price": "1.12", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Ruiner", "price": "0.07", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "SEGA® Genesis Classics™", "price": "0.91", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "SMITE Almighty Archon Bundle", "price": "1.64", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "SMITE Code Slasher Bundle", "price": "1.64", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "SMITE Curious Courier Bundle", "price": "1.64", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "SMITE Cybernetic Underworld Bundle", "price": "1.64", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "SMITE Gecko Guardian Bundle", "price": "1.64", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "SONIC FORCES™ Digital Standard Edition", "price": "3.1", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "SOULCALIBUR VI", "price": "1.64", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "SRX: The Game", "price": "0.62", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "1.29", "flag": "🇹🇷", "date": "25.03", "status": " GP" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "2.14", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "1.08", "flag": "🇹🇷", "date": "25.03", "status": " GP" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "1.6", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "STAR WARS Jedi: Survivor™ Deluxe Edition", "price": "21.08", "flag": "🇹🇷", "date": "25.03", "status": " GP" },
  { "name": "STAR WARS Jedi: Survivor™", "price": "19.53", "flag": "🇹🇷", "date": "25.03", "status": "" },
  { "name": "STAR WARS™ Battlefront™ II", "price": "0.09", "flag": "🇦🇷", "date": "25.03", "status": " GP" },
  { "name": "STAR WARS™ Battlefront™ II: Celebration Edition", "price": "0.22", "flag": "🇦🇷", "date": "25.03", "status": " GP" },
  { "name": "STAR WARS™ Battlefront™ Ultimate Edition", "price": "0.16", "flag": "🇦🇷", "date": "25.03", "status": " GP" },
  { "name": "STAR WARS™: Squadrons", "price": "0.16", "flag": "🇦🇷", "date": "25.03", "status": " GP" },
  { "name": "SUPERHOT", "price": "0.09", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "SUPERHOT: MIND CONTROL DELETE", "price": "0.3", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "SWORD ART ONLINE Alicization Lycoris Deluxe Edition", "price": "3.22", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "SWORD ART ONLINE Last Recollection", "price": "19.51", "flag": "🇹🇷", "date": "25.03", "status": " GP" },
  { "name": "SWORD ART ONLINE: FATAL BULLET Complete Edition", "price": "1.4", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "Sable", "price": "0.18", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Scott Pilgrim vs. The World™: The Game – Complete Edition", "price": "0.41", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Secret Neighbor", "price": "0.09", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Serious Sam 4", "price": "0.18", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Serious Sam Collection", "price": "0.19", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Serious Sam: Siberian Mayhem", "price": "0.71", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Shadow Warrior 2", "price": "0.03", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Shadow Warrior 3", "price": "1.46", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Shadow Warrior", "price": "0.03", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Shadow of the Tomb Raider Definitive Edition", "price": "2.14", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Shadowblade Odyssey", "price": "0.02", "flag": "🇦🇷", "date": "02.04", "status": "" },
  { "name": "Sherlock Holmes Chapter One", "price": "0.87", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Sherlock Holmes: Crimes and Punishments Redux", "price": "0.58", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Sherlock Holmes: The Devil's Daughter Redux", "price": "0.58", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Skate 3", "price": "0.06", "flag": "🇦🇷", "date": "25.03", "status": " GP" },
  { "name": "Skull and Bones - Édition Premium", "price": "24.29", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Skyrim Anniversary Edition + Fallout 4 G.O.T.Y Bundle", "price": "19.84", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Small Moonstone Pack -- 1,200", "price": "0.9", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Sniper Elite 5 Complete Edition", "price": "1.57", "flag": "🇦🇷", "date": "01.05", "status": " GP" },
  { "name": "Sniper Elite 5 Deluxe Edition", "price": "8.0", "flag": "🇦🇷", "date": "01.05", "status": " GP" },
  { "name": "SnowRunner - 1-Anniversary Edition", "price": "7.44", "flag": "🇹🇷", "date": "28.03", "status": " GP" },
  { "name": "Sonic Colors: Ultimate - Digital Deluxe", "price": "5.82", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Sonic Frontiers", "price": "11.16", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Sonic Origins Plus", "price": "15.79", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "South Park™: The Fractured but Whole™ - Gold Edition", "price": "1.25", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "South Park™: The Fractured but Whole™", "price": "0.78", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "South Park™: The Stick of Truth ™", "price": "0.14", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Space Engineers: Ultimate Edition 2023", "price": "1.06", "flag": "🇦🇷", "date": "01.03", "status": " GP" },
  { "name": "Space Moves", "price": "0.07", "flag": "🇦🇷", "date": "05.04", "status": "" },
  { "name": "Sparkle Bundle", "price": "0.16", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Spectrolite - Speed Life", "price": "0.1", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Starlink: Battle for Atlas™", "price": "0.3", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "SteamWorld Build & Dig Bundle", "price": "2.19", "flag": "🇦🇷", "date": "01.12", "status": " GP" },
  { "name": "Stellaris: Console Edition - Deluxe Edition", "price": "0.55", "flag": "🇦🇷", "date": "16.10", "status": " GP" },
  { "name": "Strategic Mind: The Pacific", "price": "0.21", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Streets of Rogue", "price": "0.09", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Stunt Paradise", "price": "0.12", "flag": "🇦🇷", "date": "05.04", "status": "" },
  { "name": "Sunset Overdrive Deluxe Edition", "price": "1.72", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Super Monkey Ball Banana Mania", "price": "3.09", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Super Monkey Ball: Banana Blitz HD", "price": "1.85", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Super Rebellion", "price": "0.03", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Super Trunko Go", "price": "0.07", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Swordship", "price": "0.18", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "TEKKEN 7 - Definitive Edition", "price": "2.88", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "TEKKEN 7 - Originals Edition", "price": "2.13", "flag": "🇹🇷", "date": "25.03", "status": " GP" },
  { "name": "TEMBO THE BADASS ELEPHANT", "price": "0.05", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Taiko no Tatsujin: The Drum Master!", "price": "2.04", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "Tales from the Borderlands", "price": "1.53", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Tales of Arise - Beyond The Dawn Ultimate Edition", "price": "33.46", "flag": "🇹🇷", "date": "25.03", "status": " GP" },
  { "name": "Tales of Arise - Beyond the Dawn Deluxe Edition", "price": "37.18", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Tales of Arise - Beyond the Dawn Edition", "price": "27.26", "flag": "🇹🇷", "date": "25.03", "status": " GP" },
  { "name": "Tales of Kenzera™: ZAU Standard Edition", "price": "7.87", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Tales of Symphonia Remastered", "price": "6.18", "flag": "🇹🇷", "date": "25.03", "status": " GP" },
  { "name": "Techtonica (Game Preview)", "price": "0.4", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Teenage Mutant Ninja Turtles: Shredder's Revenge - Dimension Shellshock", "price": "0.43", "flag": "🇦🇷", "date": "16.06", "status": " GP" },
  { "name": "The Banner Saga 2", "price": "0.44", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "The Banner Saga", "price": "0.44", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "The Bard's Tale Trilogy", "price": "0.78", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "The Bookwalker: Thief of Tales", "price": "0.17", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "The Childs Sight", "price": "0.02", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "The Crew™ Motorfest Deluxe Edition", "price": "24.8", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "The Crew™ Motorfest Standard Edition - Cross-Gen Bundle", "price": "22.48", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "The Crew™ Motorfest Standard Edition", "price": "20.15", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "The Crew™ Motorfest Ultimate Edition", "price": "31.77", "flag": "🇹🇷", "date": "25.03", "status": "" },
  { "name": "The Dark Pictures Anthology: Little Hope", "price": "2.77", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "The Dark Pictures Anthology: Man Of Medan", "price": "2.77", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "The Division 2 - Warlords of New York - Ultimate Edition", "price": "1.5", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "The Elder Scrolls Online Collection: Necrom", "price": "21.0", "flag": "🇦🇷", "date": "28.03", "status": " GP" },
  { "name": "The Elder Scrolls Online Deluxe Collection: Necrom", "price": "31.8", "flag": "🇦🇷", "date": "28.03", "status": " GP" },
  { "name": "The Elder Scrolls V: Skyrim Anniversary Edition", "price": "11.9", "flag": "🇹🇷", "date": "28.03", "status": " GP" },
  { "name": "The Escapists: Supermax Edition", "price": "0.31", "flag": "🇦🇷", "date": "29.04", "status": "" },
  { "name": "The Evil Within Digital Bundle", "price": "2.51", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "The Great Perhaps", "price": "0.05", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "The Jackbox Party Quadpack", "price": "0.7", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "The Lamplighters League - Deluxe Edition", "price": "0.78", "flag": "🇦🇷", "date": "01.04", "status": " GP" },
  { "name": "The Last Hero of Nostalgaia Deluxe Edition", "price": "0.27", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "The Longest Road on Earth", "price": "0.06", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "The Messenger", "price": "0.09", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "The Mosaic 1% Edition", "price": "0.07", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "The Mosaic", "price": "0.07", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "The Outer Worlds: Board-Approved Bundle", "price": "13.37", "flag": "🇹🇷", "date": "25.03", "status": " GP" },
  { "name": "The Quarry - Deluxe Edition", "price": "6.11", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "The Settlers®: New Allies Deluxe Edition", "price": "5.36", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "The Shadow Warrior Collection", "price": "0.49", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "The Surge 1 & 2 - Dual Pack (Xbox)", "price": "0.56", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "The Talos Principle 2", "price": "1.97", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "The Talos Principle", "price": "0.05", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "The Telltale Batman Shadows Edition", "price": "0.21", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "The Walking Dead: A New Frontier", "price": "0.21", "flag": "🇦🇷", "date": "01.11", "status": " GP" },
  { "name": "The Walking Dead: Michonne", "price": "0.07", "flag": "🇦🇷", "date": "01.11", "status": " GP" },
  { "name": "Thief", "price": "0.66", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "This War of Mine - Complete Edition", "price": "0.38", "flag": "🇦🇷", "date": "16.05", "status": " GP" },
  { "name": "Three Minutes To Eight", "price": "0.86", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "Tin Can", "price": "1.22", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Tiny Gems Bundle", "price": "2.7", "flag": "🇦🇷", "date": "24.03", "status": "" },
  { "name": "Tiny Tales: Heart of the Forest (Xbox Version)", "price": "1.0", "flag": "🇦🇷", "date": "24.03", "status": "" },
  { "name": "Tinykin", "price": "0.18", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Tip Top: Don’t fall! (Xbox Series X|S)", "price": "0.07", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Tip Top: Don’t fall!", "price": "0.07", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Titanfall® 2", "price": "0.06", "flag": "🇦🇷", "date": "25.03", "status": " GP" },
  { "name": "Titanfall® 2: Ultimate Edition", "price": "0.15", "flag": "🇦🇷", "date": "25.03", "status": " GP" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Deluxe Edition", "price": "3.41", "flag": "🇹🇷", "date": "25.03", "status": "" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Gold Edition", "price": "4.96", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "Tom Clancy's Rainbow Six® Extraction United Bundle", "price": "5.5", "flag": "🇦🇷", "date": "16.06", "status": " GP" },
  { "name": "Tom Clancy's Rainbow Six® Siege Deluxe Edition", "price": "3.25", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Tom Clancy's The Division® 2", "price": "0.56", "flag": "🇦🇷", "date": "25.03", "status": "" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Ultimate Edition", "price": "4.75", "flag": "🇦🇷", "date": "25.03", "status": "" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Year 2 Gold Edition", "price": "2.0", "flag": "🇦🇷", "date": "25.03", "status": " GP" },
  { "name": "Tom Clancy’s Rainbow Six Siege Operator Edition", "price": "32.24", "flag": "🇹🇷", "date": "28.03", "status": "" },
  { "name": "Tom Clancy’s Rainbow Six Siege Ultimate Edition", "price": "39.68", "flag": "🇹🇷", "date": "28.03", "status": "" },
  { "name": "Tomb Raider: Definitive Edition", "price": "1.06", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Tony Stewart's All-American Racing", "price": "0.32", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Tony Stewart's Sprint Car Racing", "price": "0.27", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Totally Reliable Delivery Service Deluxe Edition", "price": "0.34", "flag": "🇦🇷", "date": "01.12", "status": " GP" },
  { "name": "Totally Reliable Delivery Service", "price": "0.07", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Townscaper", "price": "0.05", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Trailmakers - Space Upgrade", "price": "0.47", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers Deluxe Edition", "price": "0.54", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Train Sim World® 4: Austrian Regional Edition", "price": "4.06", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Train Sim World® 4: Flying Scotsman Centenary Edition", "price": "6.5", "flag": "🇦🇷", "date": "01.08", "status": " GP" },
  { "name": "Train Sim World® 4: German Regional Edition", "price": "4.06", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Train Sim World® 4: UK Regional Edition", "price": "4.06", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Train Sim World® 4: USA Regional Edition", "price": "4.06", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Trash Sailors", "price": "0.09", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Trek to Yomi", "price": "0.14", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Trials Fusion: The Awesome Max Edition", "price": "0.12", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Turnip Boy Robs a Bank Pre-Release", "price": "0.24", "flag": "🇦🇷", "date": "17.04", "status": " GP" },
  { "name": "UFC® 5", "price": "6.0", "flag": "🇦🇷", "date": "25.03", "status": "" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "0.17", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Valkyria Chronicles 4 Complete Edition", "price": "1.98", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Valkyria Revolution", "price": "0.62", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Valthirian Arc: Hero School Story 2", "price": "0.29", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Vampire: The Masquerade - Swansong Xbox One", "price": "1.37", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Vampire: The Masquerade - Swansong Xbox Series X|S", "price": "1.72", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Vanquish", "price": "1.24", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Vermintide - Digital Value Pack", "price": "0.5", "flag": "🇦🇷", "date": "07.03", "status": "" },
  { "name": "WILD HEARTS™ Karakuri Edition", "price": "21.08", "flag": "🇹🇷", "date": "25.03", "status": " GP" },
  { "name": "WILD HEARTS™ Standard Edition", "price": "17.36", "flag": "🇹🇷", "date": "25.03", "status": " GP" },
  { "name": "WRC 10 Deluxe Edition Xbox One & Xbox Series X|S", "price": "1.14", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "WRC 9 FIA World Rally Championship", "price": "0.07", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "0.8", "flag": "🇦🇷", "date": "30.08", "status": "" },
  { "name": "War Hospital - Supporter Edition", "price": "5.16", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Warhammer 40,000: Darktide - Imperial Edition", "price": "5.0", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "Warhammer: Chaosbane Slayer Edition Xbox One", "price": "0.07", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Warhammer: Chaosbane Slayer Edition Xbox Series X|S", "price": "0.11", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Wasteland 3 (PC) Colorado Collection", "price": "1.8", "flag": "🇦🇷", "date": "30.09", "status": " GP" },
  { "name": "Wasteland 3 Colorado Collection", "price": "10.89", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Watch Dogs: Legion - Deluxe Edition", "price": "3.14", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "Watch Dogs®2 - Deluxe Edition", "price": "3.4", "flag": "🇦🇷", "date": "16.07", "status": " GP" },
  { "name": "Watch Dogs®2 - Gold Edition", "price": "4.0", "flag": "🇦🇷", "date": "25.03", "status": " GP" },
  { "name": "Watch Dogs®: Legion Ultimate Edition", "price": "5.89", "flag": "🇹🇷", "date": "25.03", "status": "" },
  { "name": "We Happy Few Digital Deluxe", "price": "1.7", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "We Love Katamari REROLL+ Royal Reverie Special Edition", "price": "9.28", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "West of Dead", "price": "0.09", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Wheel Of Fortune®", "price": "0.13", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "Wired Italian Adventure Bundle", "price": "0.43", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Wolfenstein: Alt History Collection", "price": "12.4", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Wolfenstein: The New Order", "price": "0.53", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "Wolfenstein: The Old Blood", "price": "0.45", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "Wolfenstein: Youngblood Deluxe Edition", "price": "5.42", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Wolfenstein® II: The New Colossus™ Digital Deluxe Edition", "price": "7.44", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Wolfenstein®: The Two-Pack", "price": "3.94", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "World War Z: Aftermath - Deluxe Edition", "price": "6.4", "flag": "🇦🇷", "date": "04.04", "status": " GP" },
  { "name": "XCOM® 2 Digital Deluxe Edition", "price": "0.98", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "XCOM® 2", "price": "0.37", "flag": "🇹🇷", "date": "26.03", "status": " GP" },
  { "name": "Yakuza 0 for Windows 10", "price": "0.46", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Yakuza 0", "price": "0.46", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Yakuza 3 Remastered for Windows 10", "price": "0.97", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Yakuza 3 Remastered", "price": "0.97", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Yakuza 4 Remastered for Windows 10", "price": "0.97", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Yakuza 4 Remastered", "price": "0.97", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Yakuza 5 Remastered for Windows 10", "price": "0.97", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Yakuza 5 Remastered", "price": "0.97", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Yakuza 6: The Song of Life for Windows 10", "price": "0.46", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Yakuza 6: The Song of Life", "price": "0.46", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Yakuza Kiwami 2 for Windows 10", "price": "0.97", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Yakuza Kiwami 2", "price": "0.97", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Yakuza Kiwami for Windows 10", "price": "0.46", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Yakuza Kiwami", "price": "0.46", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "ZOMBI", "price": "0.05", "flag": "🇦🇷", "date": "26.03", "status": " GP" },
  { "name": "theHunter: Call of the Wild™ - Greenhorn Bundle", "price": "0.57", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "theHunter: Call of the Wild™ - Master Hunter Bundle", "price": "0.86", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "theHunter: Call of the Wild™ - Seasoned Hunter Bundle", "price": "0.71", "flag": "🇦🇷", "date": "28.03", "status": " GP" }
]

let usd = 104;

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
  const value = Number(tr_input.value) + .1
  const res = value * usd
  const finishRes = res + resSwitсhTr(tr_input.value)
  tr_output.innerHTML = floor(finishRes.toFixed())
  tr_output2.innerHTML = floor(finishRes.toFixed()) + 50
}



function resSwitсhArg(value) {
  let a;

  if (value <= 1) {
    a = 60
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
    a = 95
  } else if (percent > 1 && percent <= 5) {
    a = 80
  } else if (percent > 5 && percent <= 10) {

    a = 50
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
    a = 80
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



