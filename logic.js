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
  { "name": "8Floor Bundle", "price": "0.09", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "ACE COMBAT™ 7: SKIES UNKNOWN - TOP GUN: Maverick Ultimate Edition", "price": "3.11", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Absolver", "price": "0.04", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Adore", "price": "1.46", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Aery - Last Day of Earth", "price": "0.11", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Age of Empires 25th Anniversary Collection", "price": "1.72", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Age of Empires: Definitive Collection", "price": "0.7", "flag": "🇦🇷", "date": "06.10", "status": "" },
  { "name": "Airborne Bundle", "price": "0.57", "flag": "🇦🇷", "date": "01.02", "status": "" },
  { "name": "Alien: Isolation", "price": "0.94", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Alone in the Dark - Digital Deluxe Edition", "price": "36.25", "flag": "🇦🇷", "date": "20.03", "status": "" },
  { "name": "Alone in the Dark", "price": "32.62", "flag": "🇦🇷", "date": "20.03", "status": "" },
  { "name": "Alterity Experience", "price": "0.07", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Amnesia: Collection", "price": "0.67", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Anno 1800™ Console Edition - Deluxe", "price": "4.12", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Anno 1800™ Console Edition", "price": "2.81", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Aquarium Land", "price": "0.04", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Arcade Paradise | High Score Edition", "price": "0.4", "flag": "🇦🇷", "date": "01.07", "status": "" },
  { "name": "Arcadian Atlas", "price": "0.14", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Assassin's Creed Unity", "price": "0.31", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Assassin's Creed® Bundle: Assassin's Creed® Valhalla, Ass...", "price": "39.68", "flag": "🇹🇷", "date": "04.04", "status": "" },
  { "name": "Assassin's Creed® Chronicles: Russia", "price": "0.05", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Assassin's Creed® III Remastered", "price": "0.41", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Assassin's Creed® Odyssey - DELUXE EDITION", "price": "17.36", "flag": "🇹🇷", "date": "16.09", "status": "" },
  { "name": "Assassin's Creed® Odyssey - GOLD EDITION", "price": "4.96", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Assassin's Creed® Odyssey - ULTIMATE EDITION", "price": "5.74", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Assassin's Creed® Origins - DELUXE EDITION", "price": "16.74", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Assassin's Creed® Origins - GOLD EDITION", "price": "4.96", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Assassin's Creed® Syndicate", "price": "0.58", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Assassin's Creed® Valhalla Complete Edition", "price": "24.8", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Assassin's Creed® Valhalla Deluxe Edition", "price": "19.22", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Assassin's Creed® Valhalla Ragnarök Edition", "price": "14.88", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Assassin's Creed® Valhalla", "price": "4.65", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Assassin’s Creed Mirage & Assassin's Creed Valhalla Bundle", "price": "16.12", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Assassin’s Creed® Mirage Deluxe Edition", "price": "18.6", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Assassin’s Creed® Valhalla + Immortals Fenyx Rising™ Bundle", "price": "24.8", "flag": "🇹🇷", "date": "16.07", "status": "" },
  { "name": "Asterigos: Curse of the Stars", "price": "1.37", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Atomic Heart - Gold Edition", "price": "15.0", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Atomic Heart - Premium Edition", "price": "17.0", "flag": "🇦🇷", "date": "16.08", "status": "" },
  { "name": "Atomicrops", "price": "0.07", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Atomicrops: Reap What You Bundle", "price": "0.08", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Avatar: Frontiers of Pandora™ Gold Edition", "price": "35.34", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Avatar: Frontiers of Pandora™", "price": "26.97", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Awarded Platformer Bundle", "price": "0.21", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "BALAN WONDERWORLD", "price": "0.69", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "BATTLETECH Mercenary Collection", "price": "1.29", "flag": "🇦🇷", "date": "13.06", "status": "" },
  { "name": "Back 4 Blood: Deluxe Edition", "price": "8.2", "flag": "🇦🇷", "date": "01.04", "status": "" },
  { "name": "Bat Boy", "price": "0.86", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Batman: Arkham Knight Premium Edition", "price": "1.75", "flag": "🇦🇷", "date": "04.04", "status": "" },
  { "name": "Batman™: Arkham Knight", "price": "0.27", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Batora: Lost Haven", "price": "0.7", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Battle Brothers", "price": "0.25", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Battlefleet Gothic: Armada 2 - Windows 10", "price": "0.31", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Battlefleet Gothic: Armada", "price": "0.1", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Bayonetta", "price": "1.24", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Bendy and the Dark Revival", "price": "0.27", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Bendy and the Ink Machine™", "price": "0.18", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Big Moonstone Pack -- 5,500", "price": "3.6", "flag": "🇦🇷", "date": "01.09", "status": "" },
  { "name": "BioShock 2 Remastered", "price": "0.88", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "BioShock Infinite: The Complete Edition", "price": "1.41", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "BioShock Remastered", "price": "1.41", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Bit Orchard: Animal Valley Deluxe Edition", "price": "0.05", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Black Skylands (Game Preview)", "price": "0.21", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Black The Fall", "price": "0.11", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Blightbound", "price": "0.14", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Blood Bowl 3", "price": "2.81", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Blood Knights", "price": "0.03", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Borderlands 3: Next Level Edition", "price": "2.32", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Borderlands 3: Ultimate Edition", "price": "6.59", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Boreal Tenebrae", "price": "0.05", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Bravery and Greed", "price": "0.56", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Brawl Chess - Gambit", "price": "0.04", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Broforce", "price": "0.05", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Builder Flipper bundle", "price": "0.61", "flag": "🇦🇷", "date": "01.01", "status": "" },
  { "name": "Burger Bistro Story", "price": "0.19", "flag": "🇦🇷", "date": "15.03", "status": "" },
  { "name": "CHRONO CROSS: THE RADICAL DREAMERS EDITION", "price": "1.29", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Call of Duty®: Advanced Warfare Gold Edition", "price": "2.17", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Call of Duty®: Black Ops 4", "price": "5.79", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Call of Duty®: Black Ops Cold War", "price": "6.13", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Call of Duty®: Black Ops III - Zombies Deluxe", "price": "5.83", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Call of Duty®: Ghosts", "price": "2.17", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Call of Duty®: Infinite Warfare - Digital Deluxe Edition", "price": "4.84", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Call of Duty®: Infinite Warfare - Launch Edition", "price": "2.53", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Call of Duty®: Modern Warfare® Remastered", "price": "3.0", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Call of Duty®: Vanguard - Standard Edition", "price": "6.19", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Call of Duty®: WWII - Gold Edition", "price": "3.07", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Call of the Sea", "price": "0.14", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Call of the Wild: The Angler™ - Deluxe Edition", "price": "0.64", "flag": "🇦🇷", "date": "01.09", "status": "" },
  { "name": "Capcom Arcade 2nd Stadium Bundle", "price": "7.35", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Capcom Arcade Stadium Packs 1, 2, and 3", "price": "5.88", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Capcom Beat 'Em Up Bundle", "price": "0.36", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Capcom Fighting Bundle", "price": "9.93", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Capcom Fighting Collection", "price": "7.35", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Carrion", "price": "0.11", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Cassette Beasts", "price": "0.25", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Cassette Beasts: Deluxe Edition", "price": "0.37", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Child of Light® Ultimate Edition", "price": "0.11", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Chivalry 2 King's Edition", "price": "0.86", "flag": "🇦🇷", "date": "01.10", "status": "" },
  { "name": "Chivalry 2 Special Edition", "price": "0.71", "flag": "🇦🇷", "date": "01.10", "status": "" },
  { "name": "Cities: Skylines - Mayor's Edition", "price": "0.75", "flag": "🇦🇷", "date": "01.04", "status": "" },
  { "name": "Cities: Skylines - Premium Edition 2", "price": "1.0", "flag": "🇦🇷", "date": "01.04", "status": "" },
  { "name": "Clumsy Rush + Brawl Chess Family Bundle", "price": "0.04", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Conan Exiles - Complete Edition October 2021", "price": "2.3", "flag": "🇦🇷", "date": "16.08", "status": "" },
  { "name": "Conan Exiles - Isle of Siptah Edition", "price": "0.99", "flag": "🇦🇷", "date": "16.08", "status": "" },
  { "name": "Contra: Operation Galuga + Early-purchase Bonus", "price": "5.17", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Cook, Serve, Delicious!", "price": "0.19", "flag": "🇦🇷", "date": "14.03", "status": "" },
  { "name": "Crash Team Rumble™ - Standard Edition", "price": "13.0", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Crash™ Team Racing Nitro-Fueled", "price": "2.6", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Crusader Kings III: Royal Edition", "price": "1.07", "flag": "🇦🇷", "date": "04.04", "status": "" },
  { "name": "Cruz Brothers", "price": "0.29", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Cult of the Lamb", "price": "1.31", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Cult of the Lamb: Heretic Edition", "price": "1.8", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Curse of the Dead Gods (PC)", "price": "0.37", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Cyanide & Happiness - Freakpocalypse (Episode 1)", "price": "0.14", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Cybertrash STATYX (Xbox Series X|S)", "price": "0.14", "flag": "🇦🇷", "date": "13.03", "status": "" },
  { "name": "Cybertrash STATYX", "price": "0.14", "flag": "🇦🇷", "date": "13.03", "status": "" },
  { "name": "DAS WIRED-HORROR-SPIELPAKET", "price": "0.57", "flag": "🇦🇷", "date": "01.01", "status": "" },
  { "name": "DEAD ISLAND 2 DELUXE EDITION", "price": "18.58", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "DEAD ISLAND 2 GOLD EDITION", "price": "22.3", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "DEATHLOOP Deluxe Edition", "price": "16.12", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "DIRT 5 Year One Edition", "price": "1.29", "flag": "🇦🇷", "date": "11.08", "status": "" },
  { "name": "DOOM Eternal Deluxe Edition", "price": "14.88", "flag": "🇹🇷", "date": "01.10", "status": "" },
  { "name": "DOOM Eternal: The Ancient Gods - Part One", "price": "5.27", "flag": "🇹🇷", "date": "01.10", "status": "" },
  { "name": "DOOM Eternal: The Ancient Gods - Part Two", "price": "5.27", "flag": "🇹🇷", "date": "18.03", "status": "" },
  { "name": "DOOM Eternal: Year One Pass (PC)", "price": "7.95", "flag": "🇹🇷", "date": "03.12", "status": "" },
  { "name": "DOOM Eternal: Year One Pass", "price": "7.95", "flag": "🇹🇷", "date": "01.10", "status": "" },
  { "name": "DOOM Slayers Collection", "price": "3.35", "flag": "🇹🇷", "date": "13.06", "status": "" },
  { "name": "DRAGON BALL XENOVERSE", "price": "0.6", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "DRAGON QUEST BUILDERS 2", "price": "3.37", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "DRAGON QUEST® XI S: Echoes of an Elusive Age™ - Definitiv...", "price": "1.45", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Dandara: Trials of Fear Edition", "price": "0.04", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Darkest Dungeon®: Ancestral Edition", "price": "0.4", "flag": "🇦🇷", "date": "01.02", "status": "" },
  { "name": "Darksiders III - Blades & Whip Edition", "price": "7.25", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Dead Age", "price": "0.02", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Dead Cells: Medley of Pain Bundle", "price": "0.57", "flag": "🇦🇷", "date": "16.09", "status": "" },
  { "name": "Dead Cells: Return to Castlevania Bundle", "price": "0.39", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Dead Cells: Return to Castlevania Bundle", "price": "0.45", "flag": "🇦🇷", "date": "16.09", "status": "" },
  { "name": "Dead End Job", "price": "0.03", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Dead Rising 2 Off the Record", "price": "2.21", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Dead Rising 2", "price": "2.21", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Dead Rising 3: Apocalypse Edition", "price": "1.92", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Dead Rising 4", "price": "3.68", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Dead Rising", "price": "2.21", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Deadbeat Heroes", "price": "0.06", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Death Park 2", "price": "0.06", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Death's Gambit: Afterlife", "price": "0.21", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Deep Rock Galactic - Deluxe Edition", "price": "0.57", "flag": "🇦🇷", "date": "01.11", "status": "" },
  { "name": "Deep Rock Galactic - Ultimate Edition", "price": "0.71", "flag": "🇦🇷", "date": "01.11", "status": "" },
  { "name": "Deiland: Pocket Planet", "price": "0.14", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles Digital Deluxe Edition", "price": "7.75", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Despot's Game", "price": "0.14", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Devil May Cry 5 + Vergil", "price": "6.14", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Devil May Cry 5 Deluxe + Vergil", "price": "9.92", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Devil May Cry 5 Special Edition", "price": "9.92", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Devil May Cry HD Collection & 4SE Bundle", "price": "9.21", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Devil May Cry HD Collection", "price": "6.14", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Diablo III: Eternal Collection", "price": "2.4", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Dinobreak", "price": "0.18", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Dishonored & Prey: The Arkane Collection", "price": "15.5", "flag": "🇹🇷", "date": "04.04", "status": "" },
  { "name": "Dishonored®: Death of the Outsider™ Deluxe Bundle", "price": "12.34", "flag": "🇹🇷", "date": "13.06", "status": "" },
  { "name": "Disney Dreamlight Valley: A Rift in Time", "price": "0.54", "flag": "🇦🇷", "date": "01.09", "status": "" },
  { "name": "Doki Doki Literature Club Plus!", "price": "0.2", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Don't Knock Twice", "price": "0.09", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Dragon's Dogma: Dark Arisen", "price": "2.79", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Dungeons 4 - Digital Deluxe Edition", "price": "14.0", "flag": "🇦🇷", "date": "16.11", "status": "" },
  { "name": "Dying Light: The Following - Enhanced Edition", "price": "5.07", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "EA SPORTS FC™ 24 Standard Edition Xbox One & Xbox Series X|S", "price": "13.02", "flag": "🇹🇷", "date": "31.12", "status": "" },
  { "name": "EA SPORTS FC™ 24 Standard Edition Xbox One & Xbox Series X|S", "price": "8.68", "flag": "🇹🇷", "date": "22.03", "status": "" },
  { "name": "EA SPORTS FC™ 24 Ultimate Edition Xbox One & Xbox Series X|S", "price": "24.8", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Enter The Gungeon", "price": "0.08", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Escape Academy Deluxe Edition", "price": "0.5", "flag": "🇦🇷", "date": "01.02", "status": "" },
  { "name": "Escape Dead Island", "price": "0.05", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "Exit the Gungeon", "price": "0.07", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "F1® 23", "price": "30.38", "flag": "🇹🇷", "date": "31.12", "status": "" },
  { "name": "F1® Manager 2023 Deluxe Edition", "price": "13.64", "flag": "🇹🇷", "date": "16.10", "status": "" },
  { "name": "FAR CRY 4 GOLD EDITION", "price": "0.22", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "FINAL FANTASY IX", "price": "0.48", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "FINAL FANTASY TYPE-0 HD", "price": "0.21", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "FINAL FANTASY TYPE-0™ HD", "price": "0.87", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "FINAL FANTASY VII WINDOWS EDITION", "price": "0.37", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "FINAL FANTASY VII", "price": "0.37", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "FINAL FANTASY VIII Remastered WINDOWS EDITION", "price": "0.5", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "FINAL FANTASY VIII Remastered", "price": "0.5", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "FINAL FANTASY X/X-2 HD Remaster", "price": "1.12", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "FINAL FANTASY XII THE ZODIAC AGE", "price": "1.12", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "FINAL FANTASY XIII", "price": "0.09", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "FINAL FANTASY XIII-2", "price": "0.11", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "FINAL FANTASY XV MULTIPLAYER: COMRADES", "price": "0.22", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "FINAL FANTASY XV POCKET EDITION HD", "price": "0.45", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "FINAL FANTASY XV ROYAL EDITION", "price": "1.25", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Fallout 4: Game of the Year Edition (PC)", "price": "7.07", "flag": "🇹🇷", "date": "12.03", "status": "" },
  { "name": "Fallout 4: Game of the Year Edition", "price": "7.07", "flag": "🇹🇷", "date": "12.03", "status": "" },
  { "name": "Fallout 76: Atlantic City - Boardwalk Paradise Deluxe Edition", "price": "12.0", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Far Cry Primal - Apex Edition", "price": "0.74", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Far Cry® 4", "price": "0.17", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Far Cry® 5", "price": "0.43", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Far Cry® 6 Deluxe Edition", "price": "19.22", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Far Cry® 6 Game of the Year Edition", "price": "23.56", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Far Cry® 6 Gold Edition", "price": "19.84", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Far Cry® 6", "price": "4.65", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Far Cry® New Dawn Deluxe Edition", "price": "0.45", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Far Cry® New Dawn", "price": "0.37", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Far Cry®5 Gold Edition", "price": "3.3", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Farm Bundle", "price": "0.57", "flag": "🇦🇷", "date": "01.01", "status": "" },
  { "name": "Farm Pets Bundle", "price": "0.86", "flag": "🇦🇷", "date": "01.01", "status": "" },
  { "name": "Farworld Pioneers", "price": "0.13", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Flailing Limbs Bundle", "price": "0.25", "flag": "🇦🇷", "date": "01.08", "status": "" },
  { "name": "Flashback", "price": "0.31", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "For Honor® Complete Edition", "price": "5.0", "flag": "🇦🇷", "date": "14.03", "status": "" },
  { "name": "Forspoken Digital Deluxe Edition", "price": "5.0", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Forspoken", "price": "3.5", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Forza Horizon 4 Expansions Bundle", "price": "2.81", "flag": "🇦🇷", "date": "03.10", "status": "" },
  { "name": "Forza Horizon 5 PLUS Hot Wheels Bundle", "price": "10.8", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "From Shadows Redux", "price": "0.02", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Frostpunk: Complete Collection", "price": "0.64", "flag": "🇦🇷", "date": "16.07", "status": "" },
  { "name": "Fuga: Melodies of Steel 2 - Deluxe Edition", "price": "8.0", "flag": "🇦🇷", "date": "16.05", "status": "" },
  { "name": "Fuga: Melodies of Steel 2 - Ultimate Edition", "price": "8.55", "flag": "🇦🇷", "date": "16.05", "status": "" },
  { "name": "GONNER2", "price": "0.07", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "GRIME", "price": "0.31", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "GRIS", "price": "0.38", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Garden Bundle", "price": "0.64", "flag": "🇦🇷", "date": "01.01", "status": "" },
  { "name": "Gato Roboto", "price": "0.04", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Gears of War 4 and Halo 5: Guardians Bundle", "price": "0.4", "flag": "🇦🇷", "date": "31.01", "status": "" },
  { "name": "Gears of War Ultimate Edition Deluxe Version", "price": "1.3", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Generation Zero ® - Silver Bundle", "price": "0.71", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Generation Zero ® - Ultimate Bundle", "price": "1.0", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Generation Zero® - Gold Bundle", "price": "0.86", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Ghost Trick: Phantom Detective", "price": "10.36", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Ghosts 'n Goblins Resurrection", "price": "3.86", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Ghostwire: Tokyo Deluxe Edition", "price": "19.22", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "GigaBash", "price": "1.74", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Gnomes Garden 3: The thief of castles", "price": "0.03", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Gnomes Garden: Lost King", "price": "0.09", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Gnomes Garden: New Home", "price": "0.03", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "GoNNER - BLüEBERRY EDiTION", "price": "0.02", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Goat Simulator 3 - Digital Downgrade Edition", "price": "2.0", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Goat Simulator: The GOATY", "price": "0.3", "flag": "🇦🇷", "date": "01.05", "status": "" },
  { "name": "Goat Simulator: Waste Of Space Bundle", "price": "0.14", "flag": "🇦🇷", "date": "01.05", "status": "" },
  { "name": "Golf With Your Friends - Starter Edition", "price": "18.0", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Golf With Your Friends - Ultimate Edition", "price": "33.46", "flag": "🇹🇷", "date": "16.07", "status": "" },
  { "name": "Gord", "price": "8.12", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Grand Theft Auto Online", "price": "3.39", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Grand Theft Auto V (Xbox One & Xbox Series X|S)", "price": "6.13", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Grand Theft Auto V: Premium Edition & Great White Shark C...", "price": "2.79", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Grand Theft Auto V: Premium Edition & Megalodon Shark Car...", "price": "4.68", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Grand Theft Auto V: Premium Edition & Whale Shark Card Bu...", "price": "3.22", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Graveyard Keeper", "price": "0.06", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Graveyard Keeper: Last Journey Edition", "price": "0.22", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Graze Counter GM", "price": "0.75", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "GreedFall - Windows 10", "price": "0.47", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Guilty Gear -Strive- Daredevil Edition", "price": "7.09", "flag": "🇦🇷", "date": "01.09", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ - Game Of The Year Edition - Xbox S...", "price": "4.97", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ - Game Of The Year Edition", "price": "4.97", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ - Xbox Series X|S", "price": "2.53", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™", "price": "2.53", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Halo 5: Guardians – Digital Deluxe Edition", "price": "6.5", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Halo Wars 2: Complete Edition", "price": "24.8", "flag": "🇹🇷", "date": "04.04", "status": "" },
  { "name": "Happy's Humble Burger Farm", "price": "0.09", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Headspun", "price": "0.11", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Hell Let Loose - Deluxe Edition", "price": "28.99", "flag": "🇹🇷", "date": "01.01", "status": "" },
  { "name": "Hell Let Loose - Ultimate Edition", "price": "33.46", "flag": "🇹🇷", "date": "01.01", "status": "" },
  { "name": "Hello Engineer", "price": "0.16", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Hello Neighbor 2 Deluxe Edition", "price": "5.5", "flag": "🇦🇷", "date": "16.12", "status": "" },
  { "name": "Hello Neighbor 2", "price": "0.32", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Hello Neighbor", "price": "0.09", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Hello Neighbor: Hide and Seek", "price": "0.13", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Hellpoint Ultimate Edition", "price": "0.18", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Hellpoint", "price": "0.16", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Hex Gambit: Respawned", "price": "0.05", "flag": "🇦🇷", "date": "14.03", "status": "" },
  { "name": "Hi-Fi RUSH Deluxe Edition", "price": "14.88", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Hogwarts Legacy Xbox One Version", "price": "14.86", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Hogwarts Legacy Xbox Series X|S Version", "price": "16.72", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Hotline Miami 2: Wrong Number", "price": "0.2", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Hotline Miami", "price": "0.19", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Huge Moonstone Pack -- 14,500", "price": "9.0", "flag": "🇦🇷", "date": "01.09", "status": "" },
  { "name": "Hundred Days - Winemaking Simulator", "price": "0.32", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Hunting Simulator 2 Xbox One", "price": "0.21", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Hunting Simulator 2 Xbox Series X|S", "price": "0.18", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Hypnospace Outlaw & Slayers X: Terminal Aftermath: Vengance of the Slayer Bundle", "price": "0.48", "flag": "🇦 🇷", "date": "01.06", "status": "" },
  { "name": "INSIDE & LIMBO Bundle", "price": "2.52", "flag": "🇦🇷", "date": "01.08", "status": "" },
  { "name": "Ice Cream Surfer", "price": "0.03", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Immortals Fenyx Rising™ Gold Edition", "price": "5.5", "flag": "🇦🇷", "date": "01.09", "status": "" },
  { "name": "Immortals of Aveum™ Deluxe Edition", "price": "22.32", "flag": "🇹🇷", "date": "31.12", "status": "" },
  { "name": "Infinity Strash: DRAGON QUEST The Adventure of Dai - Digital Deluxe Edition", "price": "11.81", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Infinity Strash: DRAGON QUEST The Adventure of Dai", "price": "10.97", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Injustice™ 2 - Legendary Edition", "price": "1.9", "flag": "🇦🇷", "date": "01.07", "status": "" },
  { "name": "Injustice™ 2", "price": "0.19", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Inscryption", "price": "0.89", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Insurgency: Sandstorm - Deluxe Edition", "price": "17.0", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Insurgency: Sandstorm - Gold Edition", "price": "25.0", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Insurgency: Sandstorm - Ultimate Edition", "price": "29.0", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Jumbo Airport Story", "price": "0.19", "flag": "🇦🇷", "date": "15.03", "status": "" },
  { "name": "Jurassic World Evolution 2: Deluxe Edition", "price": "7.0", "flag": "🇦🇷", "date": "16.05", "status": "" },
  { "name": "Just Cause 3", "price": "0.17", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Just Cause 3: XXL Edition", "price": "0.24", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Just Cause 4 - Complete Edition", "price": "0.94", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Just Cause 4 - Gold Edition", "price": "0.75", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Just Cause 4: Reloaded", "price": "0.52", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Just Dance 2024 Edition", "price": "15.5", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Justice Sucks", "price": "0.14", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "KINGDOM HEARTS - HD 1.5+2.5 ReMIX -", "price": "1.8", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "KINGDOM HEARTS HD 2.8 Final Chapter Prologue", "price": "2.25", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "KINGDOM HEARTS Melody of Memory (International)", "price": "2.0", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "KINGDOM HEARTS Ⅲ", "price": "0.73", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "KarmaZoo", "price": "0.67", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Katana Zero XB1", "price": "0.16", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Kill It With Fire", "price": "0.07", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Kill It With Fire: Exterminator Edition", "price": "0.09", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Kingdom Eighties", "price": "0.15", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Kingdom Two Crowns", "price": "0.06", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Kingdom Two Crowns: Norse Lands Edition", "price": "0.09", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Kingdom: New Lands", "price": "0.03", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Kung Fu Fighting", "price": "0.02", "flag": "🇦🇷", "date": "21.03", "status": "" },
  { "name": "L.A. Noire", "price": "3.1", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "LEGO® Star Wars™: The Skywalker Saga", "price": "5.0", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "LIGHTNING RETURNS: FINAL FANTASY XIII", "price": "0.11", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "LISA: Definitive Edition", "price": "0.31", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Let's Build a Zoo & Dinosaur DLC Bundle", "price": "0.38", "flag": "🇦🇷", "date": "01.04", "status": "" },
  { "name": "Let's Build a Zoo: Aquarium Odyssey Bundle", "price": "0.38", "flag": "🇦🇷", "date": "01.10", "status": "" },
  { "name": "Let's Build a Zoo: Ultimate Bundle", "price": "0.48", "flag": "🇦🇷", "date": "01.10", "status": "" },
  { "name": "Life is Strange 2 - Complete Season", "price": "0.41", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Life is Strange Remastered Collection", "price": "2.25", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Life is Strange: True Colors - Deluxe Edition", "price": "2.44", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Life is Strange: True Colors - Deluxe Upgrade", "price": "0.63", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Life is Strange: True Colors - Ultimate Edition", "price": "3.5", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Life is Strange: True Colors", "price": "1.87", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Life of Fly", "price": "0.16", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Light & Dark Bundle", "price": "2.0", "flag": "🇦🇷", "date": "02.11", "status": "" },
  { "name": "Lightyear Frontier (Game Preview) Pre-Order Bundle", "price": "0.4", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Little Goody Two Shoes", "price": "7.0", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Lonely Mountains: Downhill - Eldfjall Island", "price": "0.33", "flag": "🇦🇷", "date": "01.11", "status": "" },
  { "name": "Long Gone Days", "price": "0.34", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Lose Your Head Deluxe Bundle", "price": "0.09", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Lost Artifacts: Soulstone", "price": "0.09", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Lost Judgment Digital Ultimate Edition", "price": "6.2", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Lost Judgment", "price": "4.07", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Luxury Garden Bundle", "price": "0.86", "flag": "🇦🇷", "date": "01.01", "status": "" },
  { "name": "MARVEL VS. CAPCOM: INFINITE", "price": "0.87", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "METAL GEAR SOLID V: THE DEFINITIVE EXPERIENCE", "price": "0.82", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "MLB® The Show™ 23 Digital Deluxe Edition - Xbox One and Xbox Series X|S", "price": "20.0", "flag": "🇦🇷", "date": "01.04", "status": "" },
  { "name": "MLB® The Show™ 23 Xbox One", "price": "10.2", "flag": "🇦🇷", "date": "01.04", "status": "" },
  { "name": "MLB® The Show™ 23 Xbox Series X|S", "price": "12.48", "flag": "🇦🇷", "date": "01.04", "status": "" },
  { "name": "MONOPOLY PLUS + MONOPOLY Madness", "price": "1.27", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "MONSTER HUNTER: WORLD™", "price": "6.23", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "MX vs ATV Legends Leader Pack", "price": "18.12", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Madden NFL 23 Xbox One", "price": "6.4", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "Madden NFL 23 Xbox Series X|S", "price": "7.5", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "Madden NFL 24 Deluxe Edition Xbox Series X|S & Xbox One", "price": "24.8", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Madden NFL 24", "price": "13.02", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Mafia II: Definitive Edition", "price": "2.04", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Mafia III: Definitive Edition", "price": "2.04", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Maneater Apex Edition", "price": "0.71", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Marvel vs. Capcom: Infinite - Deluxe Edition", "price": "1.29", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Marvel's Midnight Suns Digital+ Edition for Xbox One", "price": "6.97", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Marvel's Midnight Suns Digital+ Edition for Xbox Series X|S", "price": "6.97", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "May’s Mysteries: The Secret of Dragonville", "price": "0.08", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "MechWarrior 5: Mercenaries - JumpShip Edition", "price": "0.86", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Mediterranea Inferno", "price": "0.16", "flag": "🇦🇷", "date": "20.03", "status": "" },
  { "name": "Mega Mall Story", "price": "0.19", "flag": "🇦🇷", "date": "15.03", "status": "" },
  { "name": "Mega Man 11", "price": "6.14", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Mega Man 30th Anniversary Bundle", "price": "18.6", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Mega Man Legacy Collection 1 & 2 Combo Pack", "price": "7.44", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Mega Man X Legacy Collection 1+2", "price": "9.92", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Mega Man X Legacy Collection 2", "price": "4.98", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Mega Man X Legacy Collection", "price": "4.98", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Mega Man Zero/ZX Legacy Collection", "price": "6.14", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Metal Wolf Chaos XD", "price": "0.22", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.0", "flag": "🇦🇷", "date": "01.12", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.0", "flag": "🇹🇷", "date": "01.12", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.0", "flag": "🇦🇷", "date": "01.12", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.0", "flag": "🇹🇷", "date": "01.12", "status": "" },
  { "name": "Middle-earth™: Shadow of War™ Definitive Edition", "price": "2.0", "flag": "🇦🇷", "date": "16.07", "status": "" },
  { "name": "Middle-earth™: Shadow of War™", "price": "0.17", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle - Windows 10", "price": "1.57", "flag": "🇹🇷", "date": "28.07", "status": "" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle", "price": "1.57", "flag": "🇹🇷", "date": "28.07", "status": "" },
  { "name": "Monster Energy Supercross - The Official Videogame 5", "price": "0.75", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Monster Energy Supercross 5 - Special Edition", "price": "1.12", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Monster Hunter World: Iceborne Master Edition", "price": "12.4", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Monster Sanctuary", "price": "0.28", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Moonlighter: Complete Edition", "price": "0.34", "flag": "🇦🇷", "date": "01.12", "status": "" },
  { "name": "Mortal Kombat 11 Ultimate + Injustice 2 Leg. Edition Bundle", "price": "21.3", "flag": "🇹🇷", "date": "16.06", "status": "" },
  { "name": "Mortal Kombat 11 Ultimate", "price": "9.9", "flag": "🇹🇷", "date": "16.06", "status": "" },
  { "name": "Mortal Kombat 11", "price": "0.28", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Mortal Kombat X", "price": "0.34", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Mortal Kombat™ 1 Premium Edition", "price": "39.0", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Mothered - A Role-Playing Horror Game", "price": "0.07", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Moving Out Deluxe Edition", "price": "1.36", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Murdered: Soul Suspect", "price": "0.04", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Mutazione", "price": "0.25", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "My Friend Pedro", "price": "0.09", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "My Friend Peppa Pig - Complete Edition", "price": "5.5", "flag": "🇦🇷", "date": "16.07", "status": "" },
  { "name": "My Time at Portia Deluxe Edition", "price": "1.4", "flag": "🇦🇷", "date": "01.10", "status": "" },
  { "name": "NBA 2K24 Baller Edition", "price": "43.38", "flag": "🇹🇷", "date": "01.09", "status": "" },
  { "name": "NBA 2K24 Black Mamba Edition", "price": "47.12", "flag": "🇹🇷", "date": "01.09", "status": "" },
  { "name": "NHL® 24 X-Factor Edition Xbox One & Xbox Series X|S", "price": "18.6", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "NHL® 24 Xbox One", "price": "11.16", "flag": "🇹🇷", "date": "22.03", "status": "" },
  { "name": "NHL® 24 Xbox Series X|S", "price": "13.02", "flag": "🇹🇷", "date": "22.03", "status": "" },
  { "name": "NORCO", "price": "0.13", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Neon Abyss Deluxe Edition", "price": "0.4", "flag": "🇦🇷", "date": "16.07", "status": "" },
  { "name": "Night Call", "price": "0.07", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.04", "flag": "🇦🇷", "date": "31.05", "status": "" },
  { "name": "Nordic Adventure Bundle", "price": "1.92", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "ONE PIECE: PIRATE WARRIORS 4 Ultimate Edition (Xbox One)", "price": "23.25", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Observation", "price": "0.11", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Oh My Godheads", "price": "0.08", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Oh! Edo Towns", "price": "0.19", "flag": "🇦🇷", "date": "15.03", "status": "" },
  { "name": "OlliOlli World Rad Edition", "price": "4.39", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Onimusha: Warlords", "price": "2.94", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Opaloid Kingdom", "price": "0.07", "flag": "🇦🇷", "date": "22.03", "status": "" },
  { "name": "Ori and the Blind Forest: Definitive Edition", "price": "2.56", "flag": "🇹🇷", "date": "16.03", "status": "" },
  { "name": "Outbuddies DX", "price": "0.03", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Outcast - A New Beginning", "price": "30.81", "flag": "🇦🇷", "date": "15.03", "status": "" },
  { "name": "Overcooked! 2 - Gourmet Edition", "price": "0.56", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "PAW Patrol: Grand Prix - Complete Edition", "price": "4.5", "flag": "🇦🇷", "date": "01.10", "status": "" },
  { "name": "PAYDAY 2 - CRIMEWAVE EDITION - THE BIG SCORE Game Bundle", "price": "0.5", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "PGA TOUR 2K23 Deluxe Edition", "price": "8.52", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Park Beyond Visioneer Edition", "price": "25.09", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Pecaminosa - A Deadly Hand", "price": "0.14", "flag": "🇦🇷", "date": "13.03", "status": "" },
  { "name": "Perfect Ninja Painter 2", "price": "0.08", "flag": "🇦🇷", "date": "23.03", "status": "" },
  { "name": "Perfect Ninja Painter", "price": "0.07", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Pets Bundle", "price": "0.64", "flag": "🇦🇷", "date": "01.01", "status": "" },
  { "name": "Phoenix Point: Behemoth Edition", "price": "0.43", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Pixel Gladiator", "price": "0.01", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Pixel Heroes: Byte & Magic", "price": "0.01", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Pizza Possum", "price": "0.09", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "PowerWash Simulator", "price": "2.9", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Praetorians - HD Remaster", "price": "0.87", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Prey®: Digital Deluxe Edition", "price": "7.07", "flag": "🇹🇷", "date": "12.03", "status": "" },
  { "name": "Prince of Persia The Lost Crown", "price": "16.74", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Prince of Persia™: The Lost Crown Deluxe Edition", "price": "18.6", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "RACCOON CITY EDITION", "price": "9.3", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "RAGE 2: Deluxe Edition", "price": "11.16", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "RESIDENT EVIL 3", "price": "6.2", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "RESIDENT EVIL 7 biohazard Gold Edition", "price": "9.92", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "RESIDENT EVIL 7 biohazard", "price": "4.98", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "RIDE 4 - Special Edition", "price": "1.31", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "RIDE 4", "price": "0.75", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Railway Empire 2 - Digital Deluxe Edition", "price": "0.86", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Razerwire: Nanowars", "price": "0.05", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "ReCore", "price": "2.5", "flag": "🇦🇷", "date": "", "status": "" },
  { "name": "Rebel Transmute", "price": "0.32", "flag": "🇦🇷", "date": "14.03", "status": "" },
  { "name": "Redfall Bite Back Edition", "price": "39.68", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Regular Moonstone Pack -- 2,500", "price": "1.8", "flag": "🇦🇷", "date": "01.09", "status": "" },
  { "name": "Remnant II - Deluxe Edition", "price": "5.5", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Remnant II - Ultimate Edition", "price": "7.0", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Remnant: From the Ashes - Complete Edition", "price": "1.5", "flag": "🇦🇷", "date": "01.12", "status": "" },
  { "name": "Resident Evil 4", "price": "17.41", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Resident Evil 5", "price": "3.12", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Resident Evil 6", "price": "3.12", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Resident Evil 7 Gold Edition & Village Gold Edition", "price": "19.83", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Resident Evil Revelations 1 & 2 Bundle", "price": "4.18", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Resident Evil Revelations 2 Deluxe Edition", "price": "2.78", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Resident Evil Revelations", "price": "3.12", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Resident Evil Village Gold Edition", "price": "12.4", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Resident Evil Village", "price": "9.92", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Resident Evil: Deluxe Origins Bundle", "price": "6.2", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Return to Monkey Island", "price": "1.33", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Rewarding Community Bundle", "price": "0.11", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Riders Republic™ 360 Edition", "price": "12.09", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Riders Republic™ Complete Edition", "price": "16.27", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Riders Republic™ Skate Edition", "price": "9.3", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Riders Republic™", "price": "5.42", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Rise of the Tomb Raider: 20 Year Celebration", "price": "5.11", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Rock 'N Racing Grand Prix", "price": "0.14", "flag": "🇦🇷", "date": "16.03", "status": "" },
  { "name": "Roguebook Xbox One", "price": "0.13", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Roguebook Xbox Series X|S", "price": "0.16", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Romancing SaGa 2", "price": "0.13", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Romancing SaGa 3", "price": "0.16", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Royal Roads", "price": "0.09", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Rubber Bandits", "price": "0.31", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Ruiner", "price": "0.07", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "SEGA® Genesis Classics™", "price": "0.91", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "SEUM: Speedrunners from Hell", "price": "0.02", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "SHMUP Mania", "price": "0.28", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "SOMA", "price": "0.8", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "SONIC FORCES™ Digital Standard Edition", "price": "3.1", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "SOULCALIBUR VI", "price": "1.64", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "STAR OCEAN THE DIVINE FORCE DIGITAL DELUXE EDITION", "price": "5.44", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "STAR OCEAN THE DIVINE FORCE", "price": "4.37", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "2.14", "flag": "🇦🇷", "date": "01.01", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "1.6", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "STAR WARS™: Battlefront Classic Collection", "price": "0.27", "flag": "🇦🇷", "date": "14.03", "status": "" },
  { "name": "STEEP", "price": "0.11", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "STRANGER OF PARADISE FINAL FANTASY ORIGIN Digital Deluxe ...", "price": "6.75", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "STRANGER OF PARADISE FINAL FANTASY ORIGIN", "price": "4.12", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "SWORD ART ONLINE Alicization Lycoris Deluxe Edition", "price": "3.22", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "SWORD ART ONLINE: FATAL BULLET Complete Edition", "price": "1.4", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Sable", "price": "0.18", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Seasons after Fall", "price": "0.09", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Secret Neighbor", "price": "0.09", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Serious Sam 4", "price": "0.18", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Serious Sam Collection", "price": "0.19", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Serious Sam: Siberian Mayhem", "price": "0.71", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Session: Skate Sim Year One Complete Edition", "price": "4.85", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Shadow Gangs", "price": "1.33", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Shadow Warrior 2", "price": "0.03", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Shadow Warrior 3", "price": "1.46", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Shadowblade Odyssey", "price": "0.02", "flag": "🇦🇷", "date": "16.03", "status": "" },
  { "name": "Shady Part of Me", "price": "0.3", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Shiness: The Lightning Kingdom", "price": "0.12", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Shredders - 540INDY Edition", "price": "0.51", "flag": "🇦🇷", "date": "16.03", "status": "" },
  { "name": "Sid Meier’s Civilization® VI Anthology", "price": "16.1", "flag": "🇹🇷", "date": "16.03", "status": "" },
  { "name": "Sid Meier’s Civilization® VI Platinum Edition", "price": "10.89", "flag": "🇹🇷", "date": "16.03", "status": "" },
  { "name": "Skull and Bones - Édition Premium", "price": "24.29", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Skyrim Anniversary Edition + Fallout 4 G.O.T.Y Bundle", "price": "19.84", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Sleeping Dogs™ Definitive Edition", "price": "0.19", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Small Moonstone Pack -- 1,200", "price": "0.9", "flag": "🇦🇷", "date": "01.09", "status": "" },
  { "name": "Sniper Elite 5 Complete Edition", "price": "1.57", "flag": "🇦🇷", "date": "01.05", "status": "" },
  { "name": "Sniper Elite 5 Deluxe Edition", "price": "8.0", "flag": "🇦🇷", "date": "01.05", "status": "" },
  { "name": "SnowRunner - 1-Anniversary Edition", "price": "7.44", "flag": "🇹🇷", "date": "01.05", "status": "" },
  { "name": "SnowRunner - 2-Year Anniversary Edition", "price": "8.12", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Sonic Colors: Ultimate - Digital Deluxe", "price": "5.82", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Sonic Frontiers", "price": "11.16", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Sonic Origins Plus", "price": "15.79", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "South Park™: The Fractured but Whole™ - Gold Edition", "price": "1.25", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "South Park™: The Stick of Truth ™", "price": "0.14", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Space Engineers: Ultimate Edition 2023", "price": "1.06", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Space Hulk: Tactics", "price": "0.32", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Sparkle Bundle", "price": "0.16", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "Speed or Death", "price": "0.06", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Split - manipulate time", "price": "0.11", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "SteamWorld Build & Dig Bundle", "price": "2.19", "flag": "🇦🇷", "date": "01.12", "status": "" },
  { "name": "Stellaris: Console Edition - Deluxe Edition", "price": "0.55", "flag": "🇦🇷", "date": "16.10", "status": "" },
  { "name": "Street Fighter 30th Anniversary Collection", "price": "3.64", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Street Fighter™ 6 Deluxe Edition", "price": "25.55", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Street Fighter™ 6 Ultimate Edition", "price": "32.21", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Street Fighter™ 6", "price": "17.63", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Streets of Rogue", "price": "0.09", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Strider", "price": "1.65", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Sudden Strike 4 - European Battlefields Edition", "price": "0.27", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Sunset Overdrive Deluxe Edition", "price": "1.72", "flag": "🇹🇷", "date": "01.06", "status": "" },
  { "name": "Super Monkey Ball Banana Mania", "price": "3.09", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Super Monkey Ball: Banana Blitz HD", "price": "1.85", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Super Sami Roll", "price": "0.11", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "TEKKEN 7 - Definitive Edition", "price": "2.88", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "TEMBO THE BADASS ELEPHANT", "price": "0.05", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Tales of Arise - Beyond The Dawn Ultimate Edition", "price": "44.62", "flag": "🇹🇷", "date": "16.02", "status": "" },
  { "name": "Tales of Arise - Beyond the Dawn Deluxe Edition", "price": "37.18", "flag": "🇹🇷", "date": "16.02", "status": "" },
  { "name": "Tales of Arise - Beyond the Dawn Edition", "price": "27.26", "flag": "🇹🇷", "date": "16.02", "status": "" },
  { "name": "Tales of Kenzera™: ZAU Standard Edition", "price": "7.87", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Tamarin®", "price": "0.88", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Teenage Mutant Ninja Turtles: Shredder's Revenge - Dimension Shellshock", "price": "0.43", "flag": "🇦🇷", "date": "16.06", "status": "" },
  { "name": "The Bard's Tale Trilogy", "price": "0.78", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "The Bookwalker: Thief of Tales", "price": "0.17", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "The Crew Motorfest Gold Edition", "price": "27.12", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "The Crew™ Motorfest Deluxe Edition", "price": "24.8", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "The Crew™ Motorfest Standard Edition - Cross-Gen Bundle", "price": "22.48", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "The Crew™ Motorfest Standard Edition", "price": "20.15", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "The Crew™ Motorfest Ultimate Edition", "price": "31.77", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "The Dark Pictures Anthology: Little Hope", "price": "2.77", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "The Dark Pictures Anthology: Man Of Medan", "price": "2.77", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "The Disney Afternoon Collection", "price": "1.84", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "The Division 2 - Warlords of New York - Ultimate Edition", "price": "1.5", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "The Elder Scrolls Online Collection: Gold Road", "price": "27.0", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "The Elder Scrolls Online Collection: Necrom", "price": "21.0", "flag": "🇦🇷", "date": "22.06", "status": "" },
  { "name": "The Elder Scrolls Online Deluxe Collection: Gold Road", "price": "35.2", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "The Elder Scrolls Online Deluxe Collection: Necrom", "price": "31.8", "flag": "🇦🇷", "date": "22.06", "status": "" },
  { "name": "The Elder Scrolls V: Skyrim Anniversary Edition", "price": "11.9", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "The Enigma Machine", "price": "0.08", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "The Escapists 2", "price": "1.15", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "The Escapists: Supermax Edition", "price": "0.31", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "The Escapists: The Walking Dead", "price": "0.06", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "The Evil Within Digital Bundle", "price": "2.51", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "The Jackbox Party Quadpack", "price": "0.7", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "The Lamplighters League - Deluxe Edition", "price": "0.78", "flag": "🇦🇷", "date": "01.04", "status": "" },
  { "name": "The Longest Road on Earth", "price": "0.06", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "The Messenger", "price": "0.09", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "The Mosaic 1% Edition", "price": "0.07", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "The Mosaic", "price": "0.07", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "The Outer Worlds: Board-Approved Bundle", "price": "13.37", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "The Quarry - Deluxe Edition", "price": "6.11", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "The Serpent Rogue", "price": "0.28", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "The Settlers®: New Allies", "price": "4.12", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "The Shadow Warrior Collection", "price": "0.49", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "The Talos Principle 2", "price": "1.97", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "The Talos Principle", "price": "0.05", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "The Walking Dead: A New Frontier", "price": "0.21", "flag": "🇦🇷", "date": "01.11", "status": "" },
  { "name": "The Walking Dead: Michonne", "price": "0.07", "flag": "🇦🇷", "date": "01.11", "status": "" },
  { "name": "The Wreck", "price": "0.21", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "This War of Mine - Complete Edition", "price": "0.38", "flag": "🇦🇷", "date": "16.05", "status": "" },
  { "name": "Thymesia", "price": "2.25", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Time Rift", "price": "0.09", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Tinykin", "price": "0.18", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Deluxe Edition", "price": "3.41", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Tom Clancy's Rainbow Six® Extraction United Bundle", "price": "5.5", "flag": "🇦🇷", "date": "16.06", "status": "" },
  { "name": "Tom Clancy's Rainbow Six® Siege Deluxe Edition", "price": "0.84", "flag": "🇦🇷", "date": "12.03", "status": "" },
  { "name": "Tom Clancy's Rainbow Six® Siege Operator Edition", "price": "9.0", "flag": "🇦🇷", "date": "12.03", "status": "" },
  { "name": "Tom Clancy's Rainbow Six® Siege Ultimate Edition", "price": "12.0", "flag": "🇦🇷", "date": "12.03", "status": "" },
  { "name": "Tom Clancy's The Division® 2", "price": "0.56", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Tom Clancy's The Division™ Gold Edition", "price": "0.62", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Ultimate Edition", "price": "4.75", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Year 2 Gold Edition", "price": "2.0", "flag": "🇦🇷", "date": "01.08", "status": "" },
  { "name": "Tom Clancy’s Rainbow Six® Extraction Deluxe Edition", "price": "1.87", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Tony Hawk's™ Pro Skater™ 1 + 2", "price": "3.47", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Tony and Clyde", "price": "0.59", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Tools Up - Ultimate Edition", "price": "0.3", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Tools Up!", "price": "0.07", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Totally Reliable Delivery Service Deluxe Edition", "price": "0.34", "flag": "🇦🇷", "date": "01.12", "status": "" },
  { "name": "Totally Reliable Delivery Service", "price": "0.07", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Townscaper", "price": "0.05", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Trailmakers - Space Upgrade", "price": "0.47", "flag": "🇦🇷", "date": "01.02", "status": "" },
  { "name": "Trailmakers Deluxe Edition", "price": "0.54", "flag": "🇦🇷", "date": "01.02", "status": "" },
  { "name": "Trailmakers", "price": "0.18", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Train Sim World® 4: Austrian Regional Edition", "price": "4.06", "flag": "🇹🇷", "date": "01.08", "status": "" },
  { "name": "Train Sim World® 4: Flying Scotsman Centenary Edition", "price": "6.5", "flag": "🇦🇷", "date": "01.08", "status": "" },
  { "name": "Train Sim World® 4: German Regional Edition", "price": "4.06", "flag": "🇹🇷", "date": "01.08", "status": "" },
  { "name": "Train Sim World® 4: UK Regional Edition", "price": "4.06", "flag": "🇹🇷", "date": "01.08", "status": "" },
  { "name": "Train Sim World® 4: USA Regional Edition", "price": "4.06", "flag": "🇹🇷", "date": "01.08", "status": "" },
  { "name": "Tram Simulator Urban Transit", "price": "1.57", "flag": "🇦🇷", "date": "21.03", "status": "" },
  { "name": "Trash Quest", "price": "0.05", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Trash Sailors", "price": "0.09", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Trek to Yomi", "price": "0.14", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Trepang2 - Digital Deluxe Edition", "price": "11.37", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Trials Fusion", "price": "0.06", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Turnip Boy Robs a Bank Pre-Release", "price": "0.24", "flag": "🇦🇷", "date": "17.04", "status": "" },
  { "name": "UFC® 5 Deluxe Edition", "price": "13.2", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "UFC® 5", "price": "9.0", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "ULTIMATE MARVEL VS. CAPCOM 3", "price": "6.2", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "0.17", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Valkyria Chronicles 4 Complete Edition", "price": "1.98", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Valkyria Revolution", "price": "0.62", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Vampire: The Masquerade - Swansong Xbox One", "price": "1.37", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Vampire: The Masquerade - Swansong Xbox Series X|S", "price": "1.72", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Vanquish", "price": "1.24", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Vermintide - Digital Value Pack", "price": "0.5", "flag": "🇦🇷", "date": "07.03", "status": "" },
  { "name": "WORLD OF FINAL FANTASY MAXIMA", "price": "0.82", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "WRC 10 FIA World Rally Championship Xbox One", "price": "0.7", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "WRC 10 FIA World Rally Championship Xbox Series X|S", "price": "0.87", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "0.8", "flag": "🇦🇷", "date": "31.08", "status": "" },
  { "name": "War Hospital - Supporter Edition", "price": "5.16", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Warhammer 40,000: Darktide - Imperial Edition", "price": "5.0", "flag": "🇦🇷", "date": "01.10", "status": "" },
  { "name": "Wasteland 3 (PC) Colorado Collection", "price": "1.8", "flag": "🇦🇷", "date": "01.10", "status": "" },
  { "name": "Wasteland 3 Colorado Collection", "price": "10.89", "flag": "🇹🇷", "date": "01.10", "status": "" },
  { "name": "Watch Dogs®2 - Deluxe Edition", "price": "3.4", "flag": "🇦🇷", "date": "16.07", "status": "" },
  { "name": "Watch Dogs®2 - Gold Edition", "price": "4.0", "flag": "🇦🇷", "date": "16.07", "status": "" },
  { "name": "Watch Dogs®: Legion Gold Edition", "price": "4.96", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Watch Dogs®: Legion Ultimate Edition", "price": "5.89", "flag": "🇹🇷", "date": "26.03", "status": "" },
  { "name": "Way of the Hunter: Elite Edition", "price": "21.75", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "We Happy Few Digital Deluxe", "price": "1.7", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "We Love Katamari REROLL+ Royal Reverie Special Edition", "price": "9.28", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "Werewolf: The Apocalypse - Earthblood Champion of Gaia Xb...", "price": "0.11", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Werewolf: The Apocalypse - Earthblood Champion of Gaia Xbox Series X|S", "price": "0.11", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "West of Dead", "price": "0.09", "flag": "🇦🇷", "date": "26.03", "status": "" },
  { "name": "Wired Italian Adventure Bundle", "price": "0.43", "flag": "🇦🇷", "date": "01.01", "status": "" },
  { "name": "Wolfenstein: Alt History Collection", "price": "12.4", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Wolfenstein: Youngblood Deluxe Edition", "price": "5.42", "flag": "🇹🇷", "date": "18.02", "status": "" },
  { "name": "Wolfenstein® II: The New Colossus™ Digital Deluxe Edition", "price": "7.44", "flag": "🇹🇷", "date": "13.06", "status": "" },
  { "name": "Wolfenstein®: The Two-Pack", "price": "3.94", "flag": "🇹🇷", "date": "12.03", "status": "" },
  { "name": "World War Z: Aftermath - Deluxe Edition", "price": "6.4", "flag": "🇦🇷", "date": "01.12", "status": "" },
  { "name": "Worms Rumble", "price": "0.05", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "XCOM® 2 Digital Deluxe Edition", "price": "0.98", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "XCOM® 2", "price": "0.37", "flag": "🇹🇷", "date": "19.03", "status": "" },
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
  { "name": "orbit.industries", "price": "0.18", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "resident evil 4", "price": "3.12", "flag": "🇹🇷", "date": "19.03", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Greenhorn Bundle", "price": "0.57", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Master Hunter Bundle", "price": "0.86", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Seasoned Hunter Bundle", "price": "0.71", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "ŌKAMI HD", "price": "3.68", "flag": "🇦🇷", "date": "19.03", "status": "" },
]

let usd = 103;

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



