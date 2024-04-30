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
  { "name": "7th Sector", "price": "0.14", "flag": "🇦🇷", "date": "07.05", "status": " GP" },
  { "name": "88 Heroes", "price": "0.02", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "A Pixel Story", "price": "0.01", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "ACE COMBAT™ 7: SKIES UNKNOWN - TOP GUN: Maverick Ultimate Edition", "price": "3.11", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "ASTRONEER: Evolution Edition", "price": "0.57", "flag": "🇦🇷", "date": "06.05", "status": " GP" },
  { "name": "Ad Infinitum", "price": "3.06", "flag": "🇦🇷", "date": "06.05", "status": " GP" },
  { "name": "Aeon Must Die!", "price": "0.62", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Aery - Calm Mind 2", "price": "0.11", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Aery - Calm Mind 3", "price": "0.12", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Afterglitch", "price": "0.11", "flag": "🇦🇷", "date": "07.05", "status": " GP" },
  { "name": "Age of Empires 25th Anniversary Collection", "price": "1.72", "flag": "🇦🇷", "date": "30.12", "status": " GP" },
  { "name": "Age of Empires: Definitive Collection", "price": "0.7", "flag": "🇦🇷", "date": "05.10", "status": " GP" },
  { "name": "Airborne Bundle", "price": "0.57", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Alien: Isolation - The Collection", "price": "1.07", "flag": "🇦🇷", "date": "01.05", "status": "" },
  { "name": "Alien: Isolation", "price": "0.75", "flag": "🇦🇷", "date": "01.05", "status": "" },
  { "name": "Andro Dunos 2", "price": "0.13", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Angels of Death", "price": "0.16", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Angry Video Game Nerd I & II Deluxe", "price": "0.59", "flag": "🇦🇷", "date": "06.05", "status": "" },
  { "name": "Anima: Gate of Memories", "price": "0.04", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Arcade Paradise | High Score Edition", "price": "0.4", "flag": "🇦🇷", "date": "01.07", "status": " GP" },
  { "name": "Asdivine Hearts I & II", "price": "0.18", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Assassin's Creed® Bundle: Assassin's Creed® Valhalla, Ass...", "price": "39.68", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey - DELUXE EDITION", "price": "17.36", "flag": "🇹🇷", "date": "06.05", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey - ULTIMATE EDITION", "price": "22.94", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Assassin's Creed® Origins - DELUXE EDITION", "price": "4.18", "flag": "🇹🇷", "date": "06.05", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Complete Edition", "price": "24.8", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Ragnarök Edition", "price": "14.88", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin’s Creed® Valhalla + Watch Dogs®: Legion Bundle", "price": "7.13", "flag": "🇹🇷", "date": "06.05", "status": " GP" },
  { "name": "Atomic Heart - Gold Edition", "price": "9.37", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Atomic Heart - Premium Edition", "price": "17.0", "flag": "🇦🇷", "date": "16.08", "status": " GP" },
  { "name": "Awarded Platformer Bundle", "price": "0.21", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "BALAN WONDERWORLD", "price": "0.69", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "BATTLETECH Mercenary Collection", "price": "1.29", "flag": "🇦🇷", "date": "13.06", "status": " GP" },
  { "name": "Back 4 Blood", "price": "0.62", "flag": "🇦🇷", "date": "06.05", "status": "" },
  { "name": "Batman: Arkham Knight Premium Edition", "price": "1.75", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Batman: Return to Arkham", "price": "0.31", "flag": "🇦🇷", "date": "06.05", "status": "" },
  { "name": "Batman™: Arkham Knight", "price": "0.27", "flag": "🇦🇷", "date": "06.05", "status": "" },
  { "name": "Bayonetta & Vanquish 10th Anniversary Bundle", "price": "1.86", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "Beat of Montezuma", "price": "0.07", "flag": "🇦🇷", "date": "03.05", "status": "" },
  { "name": "Big Moonstone Pack -- 5,500", "price": "3.6", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Bio Inc. Redemption", "price": "3.7", "flag": "🇦🇷", "date": "07.05", "status": " GP" },
  { "name": "Blood Bowl 3", "price": "2.81", "flag": "🇦🇷", "date": "06.05", "status": " GP" },
  { "name": "Blood Knights", "price": "0.03", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Bound by Flame", "price": "0.04", "flag": "🇦🇷", "date": "07.05", "status": " GP" },
  { "name": "Breakers Collection", "price": "1.12", "flag": "🇦🇷", "date": "07.05", "status": " GP" },
  { "name": "Bright Memory", "price": "0.09", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Bright Memory: Infinite Platinum Edition", "price": "0.25", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Brotato + Space Gladiators Bundle", "price": "0.25", "flag": "🇦🇷", "date": "07.05", "status": " GP" },
  { "name": "Bud Spencer & Terence Hill - Slaps And Beans", "price": "0.05", "flag": "🇦🇷", "date": "06.05", "status": "" },
  { "name": "Builder Flipper bundle", "price": "0.61", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "CHRONO CROSS: THE RADICAL DREAMERS EDITION", "price": "1.29", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "CRISIS CORE –FINAL FANTASY VII– REUNION", "price": "3.91", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Candle Knight", "price": "0.18", "flag": "🇦🇷", "date": "01.05", "status": "" },
  { "name": "Capcom Beat 'Em Up Bundle", "price": "0.36", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Capcom Fighting Bundle", "price": "9.93", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Capcom Fighting Collection", "price": "7.35", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Captain Velvet Meteor: The Jump+ Dimensions", "price": "1.33", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "Cars 3: Driven to Win", "price": "0.28", "flag": "🇦🇷", "date": "06.05", "status": "" },
  { "name": "Cassette Beasts: Deluxe Edition", "price": "0.37", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Chess Gambit", "price": "0.09", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Chivalry 2 King's Edition", "price": "0.86", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "Chivalry 2 Special Edition", "price": "0.71", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "Chivalry 2", "price": "0.29", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Cities: Skylines - Mayor's Edition", "price": "0.75", "flag": "🇦🇷", "date": "01.04", "status": " GP" },
  { "name": "Cities: Skylines - Premium Edition 2", "price": "1.0", "flag": "🇦🇷", "date": "01.04", "status": " GP" },
  { "name": "Clash - Zeno Edition", "price": "4.31", "flag": "🇦🇷", "date": "06.05", "status": " GP" },
  { "name": "Conan Exiles - Complete Edition October 2021", "price": "2.3", "flag": "🇦🇷", "date": "16.08", "status": " GP" },
  { "name": "Conan Exiles - Isle of Siptah Edition", "price": "0.99", "flag": "🇦🇷", "date": "16.08", "status": " GP" },
  { "name": "Crimsonland", "price": "0.06", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Crusader Kings III: Royal Edition", "price": "1.07", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Cult of the Lamb: Cultist Edition", "price": "1.57", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Curse of the Dead Gods (PC)", "price": "0.37", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Curse of the Dead Gods", "price": "0.41", "flag": "🇦🇷", "date": "07.05", "status": " GP" },
  { "name": "DAS WIRED-HORROR-SPIELPAKET", "price": "0.57", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "DEAD ISLAND 2 DELUXE EDITION", "price": "18.58", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "DEAD OR ALIVE 5 Last Round (Full Game)", "price": "1.24", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "DEATHLOOP Deluxe Edition", "price": "16.12", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "DIRT 5 Year One Edition", "price": "1.29", "flag": "🇦🇷", "date": "10.08", "status": " GP" },
  { "name": "DOOM Eternal Deluxe Edition", "price": "14.88", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "DOOM Eternal: The Ancient Gods - Part One", "price": "5.27", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "DOOM Eternal: The Ancient Gods - Part Two", "price": "5.27", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "DOOM Eternal: Year One Pass", "price": "7.95", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "DOOM Slayers Collection", "price": "3.35", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "DRAGON BALL XENOVERSE", "price": "0.6", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "DRAGON BALL Z: KAKAROT Deluxe Edition", "price": "8.36", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "DRAGON BALL: THE BREAKERS Special Edition", "price": "1.85", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "DRAGON QUEST BUILDERS 2", "price": "3.37", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "DRAGON QUEST® XI S: Echoes of an Elusive Age™ - Definitiv...", "price": "1.45", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "DYNASTY WARRIORS 9 Complete Edition", "price": "26.33", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "DYNASTY WARRIORS 9 Empires Deluxe Edition", "price": "39.04", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "DYNASTY WARRIORS 9 Empires", "price": "24.16", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "DYSMANTLE", "price": "0.12", "flag": "🇦🇷", "date": "07.05", "status": " GP" },
  { "name": "Dark Burial: Enhanced Edition", "price": "0.05", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Darkest Dungeon®: Ancestral Edition", "price": "0.4", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Dead Cells: Medley of Pain Bundle", "price": "0.57", "flag": "🇦🇷", "date": "16.09", "status": " GP" },
  { "name": "Dead Cells: Return to Castlevania Bundle", "price": "0.45", "flag": "🇦🇷", "date": "16.09", "status": " GP" },
  { "name": "Dead Island 2", "price": "10.83", "flag": "🇹🇷", "date": "07.05", "status": " GP" },
  { "name": "Dead Rising 2 Off the Record", "price": "2.21", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Dead Rising 2", "price": "2.21", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Dead Rising 3: Apocalypse Edition", "price": "1.92", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "Dead Rising 4", "price": "3.68", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Dead Rising Triple Bundle Pack", "price": "5.47", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Dead Rising", "price": "2.21", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Deathsmiles I・II", "price": "4.0", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Deceive Inc. Black Tie Edition Content", "price": "0.21", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Deep Rock Galactic - Deluxe Edition", "price": "0.57", "flag": "🇦🇷", "date": "01.11", "status": " GP" },
  { "name": "Deep Rock Galactic - Ultimate Edition", "price": "0.71", "flag": "🇦🇷", "date": "01.11", "status": " GP" },
  { "name": "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles Digital Deluxe Edition", "price": "7.75", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles", "price": "16.27", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "Deus Ex: Mankind Divided™", "price": "0.94", "flag": "🇦🇷", "date": "07.05", "status": " GP" },
  { "name": "Devil May Cry HD Collection & 4SE Bundle", "price": "9.21", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "Devil May Cry HD Collection", "price": "6.14", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "Diablo® IV - Digital Deluxe Edition", "price": "45.36", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Diablo® IV - Standard Edition", "price": "35.19", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Diablo® IV - Ultimate Edition", "price": "50.12", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Dinobreak Triassic Torment Collection", "price": "0.5", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Dinobreak", "price": "0.18", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Disgaea 4 Complete+", "price": "0.25", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Dishonored & Prey: The Arkane Collection", "price": "15.5", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "Dishonored®: Death of the Outsider™ Deluxe Bundle", "price": "12.34", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "Disney Dreamlight Valley: A Rift in Time", "price": "0.54", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Dordogne", "price": "3.37", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Dragon Blaze", "price": "1.37", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Dragon's Dogma: Dark Arisen", "price": "2.79", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "Dungeons 4 - Digital Deluxe Edition", "price": "14.0", "flag": "🇦🇷", "date": "16.11", "status": " GP" },
  { "name": "Dying Light 2 Stay Human - Ultimate Edition", "price": "36.56", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Dying Light 2 Stay Human", "price": "18.75", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "EA STAR WARS™ TRIPLE BUNDLE", "price": "0.59", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "EARTH'S DAWN", "price": "0.04", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Escape Academy Deluxe Edition", "price": "0.5", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Escape Dead Island", "price": "0.05", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Expeditions: A MudRunner Game", "price": "28.52", "flag": "🇹🇷", "date": "07.05", "status": " GP" },
  { "name": "F1® Manager 2023 Deluxe Edition", "price": "13.64", "flag": "🇹🇷", "date": "16.10", "status": " GP" },
  { "name": "FAR: Lone Sails", "price": "0.05", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "FINAL FANTASY IX", "price": "0.48", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "FINAL FANTASY TYPE-0 HD", "price": "0.21", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "FINAL FANTASY TYPE-0™ HD", "price": "0.87", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "FINAL FANTASY VII WINDOWS EDITION", "price": "0.37", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "FINAL FANTASY VII", "price": "0.37", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "FINAL FANTASY VIII Remastered WINDOWS EDITION", "price": "0.5", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "FINAL FANTASY VIII Remastered", "price": "0.5", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "FINAL FANTASY X/X-2 HD Remaster", "price": "1.12", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "FINAL FANTASY XII THE ZODIAC AGE", "price": "1.12", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "FINAL FANTASY XIII", "price": "0.09", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "FINAL FANTASY XIII-2", "price": "0.11", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "FINAL FANTASY XV MULTIPLAYER: COMRADES", "price": "0.22", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "FINAL FANTASY XV POCKET EDITION HD", "price": "0.45", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "FINAL FANTASY XV ROYAL EDITION", "price": "1.25", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "FOR HONOR – Gold Edition", "price": "24.8", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "FOR HONOR – Ultimate Edition", "price": "39.68", "flag": "🇹🇷", "date": "06.05", "status": " GP" },
  { "name": "FRONT MISSION 1st: Remake", "price": "0.31", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Fall of Porcupine", "price": "0.89", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Fallen Legion Revenants", "price": "3.09", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Fallen Legion: Rise to Glory", "price": "0.36", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Fallout 1st", "price": "0.17", "flag": "🇦🇷", "date": "", "status": "" },
  { "name": "Fallout 4: Game of the Year Edition (PC)", "price": "7.07", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "Fallout 4: Game of the Year Edition", "price": "7.07", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "Fallout 76: Atlantic City - Boardwalk Paradise Deluxe Edition", "price": "12.0", "flag": "🇦🇷", "date": "30.12", "status": " GP" },
  { "name": "Fantasy Defenders Complete Bundle: Defend the Rook & Legend of Keepers", "price": "2.17", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Far Cry® 6 Game of the Year Edition", "price": "23.56", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Far Cry® 6 Gold Edition", "price": "19.84", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Far Cry®5 Gold Edition", "price": "3.3", "flag": "🇦🇷", "date": "01.07", "status": " GP" },
  { "name": "Farm Bundle", "price": "0.57", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Farm Pets Bundle", "price": "0.86", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Flailing Limbs Bundle", "price": "0.25", "flag": "🇦🇷", "date": "01.08", "status": " GP" },
  { "name": "Flinthook", "price": "0.1", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Forspoken Digital Deluxe Edition", "price": "5.0", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Forspoken", "price": "3.5", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Forza Horizon 4 Expansions Bundle", "price": "2.81", "flag": "🇦🇷", "date": "02.10", "status": " GP" },
  { "name": "Forza Horizon 5 PLUS Hot Wheels Bundle", "price": "10.8", "flag": "🇦🇷", "date": "30.12", "status": " GP" },
  { "name": "Frostpunk: Complete Collection", "price": "0.64", "flag": "🇦🇷", "date": "16.07", "status": " GP" },
  { "name": "Fuga: Melodies of Steel - Deluxe Edition", "price": "6.0", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Fuga: Melodies of Steel - Ultimate Edition", "price": "6.41", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Fusion Bundle", "price": "3.71", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "GIGA WRECKER ALT.", "price": "0.04", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "GNOSIA", "price": "0.36", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "GRIS", "price": "0.38", "flag": "🇦🇷", "date": "07.05", "status": " GP" },
  { "name": "GUNBARICH", "price": "1.37", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "GUNBIRD 2", "price": "1.37", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "GUNBIRD", "price": "1.37", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Gangs of Sherwood – Lionheart Edition", "price": "3.69", "flag": "🇦🇷", "date": "06.05", "status": " GP" },
  { "name": "Garden Bundle", "price": "0.64", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Garden Life", "price": "10.83", "flag": "🇹🇷", "date": "06.05", "status": " GP" },
  { "name": "Gas Station Simulator", "price": "1.24", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Gears of War 4 and Halo 5: Guardians Bundle", "price": "0.4", "flag": "🇦🇷", "date": "31.01", "status": " GP" },
  { "name": "Gears of War Ultimate Edition Deluxe Version", "price": "1.3", "flag": "🇦🇷", "date": "06.05", "status": " GP" },
  { "name": "Generation Zero ® - Essential DLC Bundle", "price": "0.23", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Generation Zero ® - Silver Bundle", "price": "0.71", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Generation Zero ® - Ultimate Bundle", "price": "1.0", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Generation Zero® - Gold Bundle", "price": "0.86", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Ghost Trick: Phantom Detective", "price": "10.36", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "Ghosts 'n Goblins Resurrection", "price": "3.86", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Ghostwire: Tokyo Deluxe Edition", "price": "19.22", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "GigaBash", "price": "1.63", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Giraffe and Annika（ジラフとアンニカ）", "price": "0.21", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Goat Simulator 3 - Digital Downgrade Edition", "price": "2.0", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Goat Simulator: The GOATY", "price": "0.3", "flag": "🇦🇷", "date": "01.05", "status": " GP" },
  { "name": "Goat Simulator: Waste Of Space Bundle", "price": "0.14", "flag": "🇦🇷", "date": "01.05", "status": " GP" },
  { "name": "Golf With Your Friends - Starter Edition", "price": "18.0", "flag": "🇦🇷", "date": "06.05", "status": " GP" },
  { "name": "Golf With Your Friends - Ultimate Edition", "price": "33.46", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Gotham Knights", "price": "2.0", "flag": "🇦🇷", "date": "06.05", "status": "" },
  { "name": "Grand Theft Auto Online", "price": "3.39", "flag": "🇹🇷", "date": "07.05", "status": " GP" },
  { "name": "Grand Theft Auto V (Xbox One & Xbox Series X|S)", "price": "6.13", "flag": "🇹🇷", "date": "07.05", "status": " GP" },
  { "name": "Grand Theft Auto V: Premium Edition & Great White Shark C...", "price": "2.79", "flag": "🇹🇷", "date": "07.05", "status": " GP" },
  { "name": "Grand Theft Auto V: Premium Edition & Megalodon Shark Car...", "price": "4.68", "flag": "🇹🇷", "date": "07.05", "status": " GP" },
  { "name": "Grand Theft Auto V: Premium Edition & Whale Shark Card Bu...", "price": "3.22", "flag": "🇹🇷", "date": "07.05", "status": " GP" },
  { "name": "GreedFall - Windows 10", "price": "0.47", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "GreedFall", "price": "0.78", "flag": "🇦🇷", "date": "07.05", "status": " GP" },
  { "name": "Guilty Gear -Strive- Daredevil Edition", "price": "7.09", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "HITMAN™ 2", "price": "1.57", "flag": "🇦🇷", "date": "04.02", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ - Game Of The Year Edition - Xbox S...", "price": "4.97", "flag": "🇦🇷", "date": "07.05", "status": " GP" },
  { "name": "HOT WHEELS UNLEASHED™ - Game Of The Year Edition", "price": "4.97", "flag": "🇦🇷", "date": "07.05", "status": " GP" },
  { "name": "HOT WHEELS UNLEASHED™ - Xbox Series X|S", "price": "2.53", "flag": "🇦🇷", "date": "07.05", "status": " GP" },
  { "name": "HOT WHEELS UNLEASHED™", "price": "2.53", "flag": "🇦🇷", "date": "07.05", "status": " GP" },
  { "name": "Halo 5: Guardians – Digital Deluxe Edition", "price": "6.5", "flag": "🇦🇷", "date": "31.05", "status": " GP" },
  { "name": "Halo Wars 2: Complete Edition", "price": "24.8", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "Hello Neighbor 2 Deluxe Edition", "price": "5.5", "flag": "🇦🇷", "date": "16.12", "status": " GP" },
  { "name": "Hi-Fi RUSH Deluxe Edition", "price": "14.88", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Hidden Cats in New York", "price": "0.04", "flag": "🇦🇷", "date": "08.05", "status": "" },
  { "name": "Hogwarts Legacy Xbox One Version", "price": "17.5", "flag": "🇦🇷", "date": "06.05", "status": "" },
  { "name": "Hogwarts Legacy Xbox Series X|S Version", "price": "20.62", "flag": "🇦🇷", "date": "06.05", "status": "" },
  { "name": "Hotel: A Resort Simulator", "price": "4.38", "flag": "🇦🇷", "date": "06.05", "status": " GP" },
  { "name": "Hotline Miami Collection", "price": "0.35", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Huge Moonstone Pack -- 14,500", "price": "9.0", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Hunting Simulator 2 - Bear Hunter Edition Xbox One", "price": "0.25", "flag": "🇦🇷", "date": "07.05", "status": " GP" },
  { "name": "Hunting Simulator 2 - Bear Hunter Edition Xbox Series X|S", "price": "0.21", "flag": "🇦🇷", "date": "07.05", "status": " GP" },
  { "name": "Hypnospace Outlaw & Slayers X: Terminal Aftermath: Vengance of the Slayer Bundle", "price": "0.48", "flag": "🇦 🇷", "date": "01.06", "status": " GP" },
  { "name": "Immortals Fenyx Rising™ Gold Edition", "price": "35.96", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "Infected Cowboys Bundle", "price": "17.14", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "Infinity Strash: DRAGON QUEST The Adventure of Dai - Digital Deluxe Edition", "price": "11.81", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Infinity Strash: DRAGON QUEST The Adventure of Dai", "price": "10.97", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Injustice™ 2 - Legendary Edition", "price": "1.9", "flag": "🇦🇷", "date": "01.07", "status": " GP" },
  { "name": "Injustice™ 2", "price": "0.19", "flag": "🇦🇷", "date": "06.05", "status": "" },
  { "name": "Inscryption", "price": "0.89", "flag": "🇦🇷", "date": "07.05", "status": " GP" },
  { "name": "Insurgency: Sandstorm - Deluxe Edition", "price": "17.0", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Insurgency: Sandstorm - Gold Edition", "price": "25.0", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Insurgency: Sandstorm - Ultimate Edition", "price": "29.0", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Judgment", "price": "2.44", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "Jurassic World Evolution 2: Deluxe Edition", "price": "7.0", "flag": "🇦🇷", "date": "16.05", "status": " GP" },
  { "name": "Jurassic World Evolution 2: Dominion Bundle", "price": "13.0", "flag": "🇦🇷", "date": "16.05", "status": " GP" },
  { "name": "Jusant", "price": "1.86", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Just Cause 4 - Complete Edition", "price": "5.0", "flag": "🇦🇷", "date": "16.05", "status": " GP" },
  { "name": "Just Cause 4 - Gold Edition", "price": "4.0", "flag": "🇦🇷", "date": "16.05", "status": " GP" },
  { "name": "Just Dance 2024 Edition", "price": "15.5", "flag": "🇹🇷", "date": "07.05", "status": " GP" },
  { "name": "Just Dance 2024 Ultimate Edition", "price": "26.97", "flag": "🇹🇷", "date": "07.05", "status": " GP" },
  { "name": "KINGDOM HEARTS - HD 1.5+2.5 ReMIX -", "price": "1.8", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "KINGDOM HEARTS HD 2.8 Final Chapter Prologue", "price": "2.25", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "KINGDOM HEARTS Melody of Memory (International)", "price": "2.0", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "KINGDOM HEARTS Ⅲ", "price": "0.73", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Keep Talking and Nobody Explodes", "price": "0.13", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Kung Fu Fighting", "price": "0.02", "flag": "🇦🇷", "date": "11.05", "status": "" },
  { "name": "L.A. Noire", "price": "3.1", "flag": "🇹🇷", "date": "07.05", "status": " GP" },
  { "name": "LA-MULANA 2", "price": "0.22", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "LA-MULANA", "price": "0.13", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "LEGO Marvel Super Heroes", "price": "0.14", "flag": "🇦🇷", "date": "06.05", "status": "" },
  { "name": "LEGO Star Wars II", "price": "0.06", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "LEGO® Batman™ 3: Beyond Gotham", "price": "0.17", "flag": "🇦🇷", "date": "06.05", "status": "" },
  { "name": "LEGO® CITY Undercover", "price": "0.25", "flag": "🇦🇷", "date": "06.05", "status": "" },
  { "name": "LEGO® DC Super-Villains", "price": "0.24", "flag": "🇦🇷", "date": "06.05", "status": "" },
  { "name": "LEGO® Marvel Super Heroes 2", "price": "0.3", "flag": "🇦🇷", "date": "06.05", "status": "" },
  { "name": "LEGO® Marvel's Avengers", "price": "0.34", "flag": "🇦🇷", "date": "06.05", "status": "" },
  { "name": "LEGO® STAR WARS™: The Force Awakens", "price": "0.28", "flag": "🇦🇷", "date": "06.05", "status": "" },
  { "name": "LEGO® Star Wars™: The Skywalker Saga", "price": "1.56", "flag": "🇦🇷", "date": "06.05", "status": "" },
  { "name": "LEGO® The Hobbit™", "price": "0.41", "flag": "🇦🇷", "date": "06.05", "status": "" },
  { "name": "LIGHTNING RETURNS: FINAL FANTASY XIII", "price": "0.11", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "LISA: The Joyful - Definitive Edition", "price": "0.12", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "LISA: The Painful - Definitive Edition", "price": "0.25", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Lara Croft and the Temple of Osiris & Season Pass Pack", "price": "0.93", "flag": "🇦🇷", "date": "07.05", "status": " GP" },
  { "name": "Legal Dungeon", "price": "0.11", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Legend of Ixtona", "price": "0.16", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Legend of Keepers: Complete Edition", "price": "0.37", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Let's Build a Zoo & Dinosaur DLC Bundle", "price": "0.38", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "Let's Build a Zoo: Aquarium Odyssey Bundle", "price": "0.38", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "Let's Build a Zoo: Ultimate Bundle", "price": "0.48", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "Light & Dark Bundle", "price": "2.0", "flag": "🇦🇷", "date": "02.11", "status": "" },
  { "name": "Light Fairytale Episode 1", "price": "0.05", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Light Fairytale Episode 2", "price": "0.05", "flag": "🇦🇷", "date": "07.05", "status": " GP" },
  { "name": "Light Fairytale Prologue Bundle", "price": "0.48", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Little Goody Two Shoes", "price": "6.12", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Little Noah: Scion of Paradise Special Edition", "price": "0.18", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Little Noah: Scion of Paradise", "price": "0.13", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Lost Judgment Digital Deluxe Edition", "price": "4.84", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "Luxury Garden Bundle", "price": "0.86", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "MARVEL VS. CAPCOM: INFINITE", "price": "0.87", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "MLB® The Show™ 24 - Digital Deluxe Edition", "price": "27.9", "flag": "🇹🇷", "date": "17.06", "status": " GP" },
  { "name": "MLB® The Show™ 24 - MVP Edition", "price": "23.71", "flag": "🇹🇷", "date": "17.06", "status": " GP" },
  { "name": "MLB® The Show™ 24 - Xbox One Standard Edition", "price": "16.74", "flag": "🇹🇷", "date": "17.06", "status": " GP" },
  { "name": "MLB® The Show™ 24 - Xbox Series X|S Standard Edition", "price": "37.12", "flag": "🇦🇷", "date": "17.06", "status": " GP" },
  { "name": "MONSTER HUNTER: WORLD™", "price": "6.23", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "Maneater Apex Edition", "price": "0.71", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Maneater", "price": "0.25", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Marfusha", "price": "0.9", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Marvel vs. Capcom: Infinite - Deluxe Edition", "price": "1.29", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "Mato Anomalies Digital Deluxe Edition", "price": "4.2", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Mato Anomalies", "price": "4.62", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Mayhem Brawler", "price": "0.14", "flag": "🇦🇷", "date": "07.05", "status": " GP" },
  { "name": "Mech Armada", "price": "0.09", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "MechWarrior 5: Mercenaries - JumpShip Edition", "price": "0.86", "flag": "🇦🇷", "date": "30.12", "status": " GP" },
  { "name": "Mega Man 11", "price": "6.14", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "Mega Man 30th Anniversary Bundle", "price": "18.6", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "Mega Man Legacy Collection 1 & 2 Combo Pack", "price": "7.44", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "Mega Man X Legacy Collection 1+2", "price": "9.92", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "Mega Man X Legacy Collection 2", "price": "4.98", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "Mega Man X Legacy Collection", "price": "4.98", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "Mega Man Zero/ZX Legacy Collection", "price": "6.14", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "Mercenary Kings", "price": "0.14", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Metro Simulator 2", "price": "0.28", "flag": "🇦🇷", "date": "09.05", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.0", "flag": "🇦🇷", "date": "30.11", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.0", "flag": "🇹🇷", "date": "01.06", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.0", "flag": "🇦🇷", "date": "30.11", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.0", "flag": "🇹🇷", "date": "01.06", "status": "" },
  { "name": "Middle-earth™: Shadow of War™ Definitive Edition", "price": "2.0", "flag": "🇦🇷", "date": "16.07", "status": " GP" },
  { "name": "Middle-earth™: Shadow of War™", "price": "0.17", "flag": "🇦🇷", "date": "06.05", "status": "" },
  { "name": "Mighty Goose", "price": "0.14", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Mighty No. 9", "price": "0.04", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle - Windows 10", "price": "1.57", "flag": "🇹🇷", "date": "27.07", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle", "price": "1.57", "flag": "🇹🇷", "date": "27.07", "status": " GP" },
  { "name": "Minute of Islands", "price": "0.07", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Momodora: Reverie Under the Moonlight", "price": "0.02", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Monster Hunter World: Iceborne Master Edition", "price": "12.4", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "Moonlighter: Complete Edition", "price": "0.34", "flag": "🇦🇷", "date": "01.12", "status": " GP" },
  { "name": "Mortal Kombat 11 Ultimate + Injustice 2 Leg. Edition Bundle", "price": "21.3", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Mortal Kombat 11 Ultimate", "price": "9.9", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Mortal Kombat 11", "price": "0.28", "flag": "🇦🇷", "date": "06.05", "status": "" },
  { "name": "Mortal Kombat X", "price": "0.34", "flag": "🇦🇷", "date": "06.05", "status": "" },
  { "name": "Mortal Kombat™ 1 Premium Edition", "price": "32.5", "flag": "🇦🇷", "date": "06.05", "status": " GP" },
  { "name": "MudRunner - American Wilds Edition", "price": "0.3", "flag": "🇦🇷", "date": "07.05", "status": " GP" },
  { "name": "Multidimensions and Dreams", "price": "0.14", "flag": "🇦🇷", "date": "07.05", "status": " GP" },
  { "name": "Mushroom Savior (For Windows 10)", "price": "0.04", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "My Friend Peppa Pig - Complete Edition", "price": "5.5", "flag": "🇦🇷", "date": "16.07", "status": " GP" },
  { "name": "My Time at Portia Deluxe Edition", "price": "1.4", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "NARUTO SHIPPUDEN: Ultimate Ninja STORM Legacy", "price": "3.47", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "NARUTO X BORUTO Ultimate Ninja STORM CONNECTIONS Deluxe Edition", "price": "34.7", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "NBA 2K24 Black Mamba Edition", "price": "47.12", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "Necromunda: Underhive Wars", "price": "0.62", "flag": "🇦🇷", "date": "07.05", "status": " GP" },
  { "name": "Neon Abyss Deluxe Edition", "price": "0.4", "flag": "🇦🇷", "date": "16.07", "status": " GP" },
  { "name": "NieR Replicant ver.1.22474487139...", "price": "2.0", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "NieR:Automata BECOME AS GODS Edition", "price": "0.82", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "NieR:Automata™ BECOME AS GODS Edition", "price": "0.82", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Ninja Shodown", "price": "0.02", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.04", "flag": "🇦🇷", "date": "30.05", "status": "" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "4.22", "flag": "🇹🇷", "date": "16.03", "status": " GP" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "4.6", "flag": "🇦🇷", "date": "16.03", "status": " GP" },
  { "name": "Noel the Mortal Fate", "price": "0.22", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Nordic Adventure Bundle", "price": "1.92", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "ONE PIECE: PIRATE WARRIORS 4 Ultimate Edition (Xbox One)", "price": "23.25", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "ONE PUNCH MAN: A HERO NOBODY KNOWS Deluxe Edition", "price": "1.16", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "Olympic Games Tokyo 2020 – The Official Video Game™", "price": "2.29", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "Ominous Tales - The Forsaken Isle", "price": "0.28", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Onigo Hunter", "price": "0.17", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Onimusha: Warlords", "price": "2.94", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Orangeblood (オレンジブラッド)", "price": "0.11", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Orcs Must Die! 3 Bundle", "price": "2.82", "flag": "🇹🇷", "date": "16.04", "status": " GP" },
  { "name": "Out of Line", "price": "0.4", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Outbreak Co-Op Anthology", "price": "0.16", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Outbreak Diamond Collection", "price": "0.47", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Overcooked! 2 - Gourmet Edition", "price": "0.56", "flag": "🇦🇷", "date": "06.05", "status": " GP" },
  { "name": "Overpass 2", "price": "4.37", "flag": "🇦🇷", "date": "06.05", "status": " GP" },
  { "name": "PAW Patrol: Grand Prix - Complete Edition", "price": "4.5", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "Paper Flight - Speed Rush", "price": "0.12", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Pets Bundle", "price": "0.64", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Phoenix Point: Behemoth Edition", "price": "0.43", "flag": "🇦🇷", "date": "30.12", "status": " GP" },
  { "name": "Phoenix Wright: Ace Attorney Trilogy", "price": "6.14", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "PictoQuest", "price": "0.06", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Pinball FX3 - Star Wars™ Pinball Season 1 Bundle", "price": "0.15", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Pinball FX3 - Star Wars™ Pinball: Season 2 Bundle", "price": "0.15", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Pinball FX3 - Star Wars™ Pinball: Unsung Heroes", "price": "0.04", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Pocket Clothier", "price": "0.19", "flag": "🇦🇷", "date": "02.05", "status": "" },
  { "name": "Pocket League Story", "price": "0.19", "flag": "🇦🇷", "date": "02.05", "status": "" },
  { "name": "Pool Slide Story", "price": "0.19", "flag": "🇦🇷", "date": "02.05", "status": "" },
  { "name": "Prey®: Digital Deluxe Edition", "price": "7.07", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "Prison Architect: DLC Bundle", "price": "0.31", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Prison Architect: Xbox One Edition", "price": "0.09", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Prison City", "price": "0.14", "flag": "🇦🇷", "date": "06.05", "status": "" },
  { "name": "R-Type Final 2 Digital Deluxe Edition", "price": "3.44", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "R-Type® Final 2", "price": "2.25", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "RAGE 2: Deluxe Edition", "price": "11.16", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "REPLICA（レプリカ）", "price": "0.04", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "RESIDENT EVIL 2 Deluxe Edition", "price": "24.8", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "RESIDENT EVIL 2", "price": "6.2", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "RESIDENT EVIL 3", "price": "6.2", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "RESIDENT EVIL 7 biohazard", "price": "4.98", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "REZ PLZ", "price": "1.37", "flag": "🇦🇷", "date": "07.05", "status": " GP" },
  { "name": "ROMANCE OF THE THREE KINGDOMS XIII: Fame and Strategy Expansion Pack Bundle", "price": "4.18", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "RPG Time: The Legend of Wright", "price": "0.83", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Raiden III x MIKADO MANIAX", "price": "2.13", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Raiden IV x MIKADO remix", "price": "0.35", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Railbreak: Dinoblast Collection", "price": "0.47", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Railway Empire 2 - Digital Deluxe Edition", "price": "0.86", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Railway Empire", "price": "0.18", "flag": "🇦🇷", "date": "07.05", "status": " GP" },
  { "name": "Rally Rock 'N Racing", "price": "0.06", "flag": "🇦🇷", "date": "07.05", "status": " GP" },
  { "name": "ReCore", "price": "2.5", "flag": "🇦🇷", "date": "", "status": "" },
  { "name": "Record of Lodoss War-Deedlit in Wonder Labyrinth-", "price": "0.22", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Redfall Bite Back Edition", "price": "39.68", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Regular Moonstone Pack -- 2,500", "price": "1.8", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Rememoried", "price": "0.07", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Remnant II - Deluxe Edition", "price": "5.5", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Remnant II - Ultimate Edition", "price": "7.0", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Remnant: From the Ashes - Complete Edition", "price": "1.5", "flag": "🇦🇷", "date": "01.12", "status": " GP" },
  { "name": "Resident Evil 4 Gold Edition", "price": "22.3", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "Resident Evil 5", "price": "3.12", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "Resident Evil 6", "price": "3.12", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "Resident Evil Revelations 1 & 2 Bundle", "price": "4.18", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "Resident Evil Village", "price": "9.92", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "Revenant Saga & Revenant Dogma", "price": "0.18", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Ride 2", "price": "0.31", "flag": "🇦🇷", "date": "07.05", "status": " GP" },
  { "name": "Riders Republic™", "price": "21.7", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "Rims Racing : Ultimate Edition Xbox One & Xbox Series X|S", "price": "1.42", "flag": "🇦🇷", "date": "07.05", "status": " GP" },
  { "name": "Rise of the Tomb Raider: 20 Year Celebration", "price": "1.28", "flag": "🇦🇷", "date": "07.05", "status": " GP" },
  { "name": "RoboCop: Rogue City - Alex Murphy Edition", "price": "7.28", "flag": "🇦🇷", "date": "06.05", "status": " GP" },
  { "name": "Robolifter (For Windows 10)", "price": "0.06", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Rock 'N Racing Grand Prix", "price": "0.06", "flag": "🇦🇷", "date": "07.05", "status": " GP" },
  { "name": "Rock 'N Racing Off Road", "price": "0.06", "flag": "🇦🇷", "date": "07.05", "status": " GP" },
  { "name": "Roguebook - Deluxe Edition Xbox Series X|S & Xbox One", "price": "0.12", "flag": "🇦🇷", "date": "06.05", "status": " GP" },
  { "name": "Romancing SaGa 2", "price": "0.13", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Romancing SaGa 3", "price": "0.16", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Röki", "price": "0.24", "flag": "🇦🇷", "date": "07.05", "status": " GP" },
  { "name": "SAMURAI WARRIORS 5 Digital Deluxe Edition", "price": "27.88", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "SAMURAI WARRIORS 5", "price": "20.13", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "SCARLET NEXUS Deluxe Edition", "price": "2.16", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "SOL DIVIDE -SWORD OF DARKNESS-", "price": "1.37", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "SOULCALIBUR VI", "price": "1.64", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "STAR OCEAN THE DIVINE FORCE DIGITAL DELUXE EDITION", "price": "5.44", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "STAR OCEAN THE DIVINE FORCE", "price": "4.37", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "STAR WARS Jedi Knight: Jedi Academy", "price": "0.09", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "2.14", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "1.6", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "STAR WARS™ Battlefront™ II: Celebration Edition", "price": "0.34", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "STAR WARS™ Battlefront™ Ultimate Edition", "price": "0.09", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "STAR WARS™ Episode I Racer", "price": "0.66", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "STAR WARS™: Dark Forces Remaster", "price": "0.38", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "STAR WARS™: Squadrons", "price": "0.16", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "STRANGER OF PARADISE FINAL FANTASY ORIGIN Digital Deluxe ...", "price": "5.62", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "STRANGER OF PARADISE FINAL FANTASY ORIGIN", "price": "3.44", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "SUPERHOT ONE OF US BUNDLE", "price": "0.67", "flag": "🇦🇷", "date": "01.04", "status": " GP" },
  { "name": "SUPERHOT", "price": "0.09", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "SUPERHOT: MIND CONTROL DELETE", "price": "0.3", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "SWORD ART ONLINE Alicization Lycoris Deluxe Edition", "price": "3.22", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "SWORD ART ONLINE: FATAL BULLET Complete Edition", "price": "1.4", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "Scribblenauts Showdown", "price": "0.15", "flag": "🇦🇷", "date": "06.05", "status": "" },
  { "name": "Shadow of the Tomb Raider Definitive Edition", "price": "2.14", "flag": "🇦🇷", "date": "07.05", "status": " GP" },
  { "name": "Shadowblade Odyssey", "price": "0.02", "flag": "🇦🇷", "date": "05.05", "status": "" },
  { "name": "Shenmue I & II", "price": "0.08", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Shenmue I & II", "price": "0.12", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Sherlock Holmes Chapter One", "price": "1.75", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Sherlock Holmes Essential Bundle", "price": "1.46", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Sherlock Holmes: Crimes and Punishments Redux", "price": "0.58", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Sherlock Holmes: The Devil's Daughter Redux", "price": "0.58", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Sherlock Purr 2 - Extended Edition", "price": "0.19", "flag": "🇦🇷", "date": "04.05", "status": "" },
  { "name": "Sid Meier’s Civilization® VI Anthology", "price": "7.04", "flag": "🇹🇷", "date": "07.05", "status": " GP" },
  { "name": "Sid Meier’s Civilization® VI Platinum Edition", "price": "3.4", "flag": "🇹🇷", "date": "07.05", "status": " GP" },
  { "name": "Sifu", "price": "1.75", "flag": "🇦🇷", "date": "07.05", "status": " GP" },
  { "name": "Simulator Pack: Treasure Hunter Simulator and Gold Rush: The Game (DOUBLE BUNDLE)", "price": "3.3", "flag": "🇦 🇷", "date": "07.05", "status": "" },
  { "name": "Skyrim Anniversary Edition + Fallout 4 G.O.T.Y Bundle", "price": "19.84", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Small Moonstone Pack -- 1,200", "price": "0.9", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Sniper Elite 5 Complete Edition", "price": "1.57", "flag": "🇦🇷", "date": "01.05", "status": " GP" },
  { "name": "Sniper Elite 5 Deluxe Edition", "price": "8.0", "flag": "🇦🇷", "date": "01.05", "status": " GP" },
  { "name": "SnowRunner - 1-Anniversary Edition", "price": "7.44", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Space Engineers: Ultimate Edition 2023", "price": "1.06", "flag": "🇦🇷", "date": "01.03", "status": " GP" },
  { "name": "Space Gladiators", "price": "0.17", "flag": "🇦🇷", "date": "07.05", "status": " GP" },
  { "name": "Sparkle Bundle", "price": "0.16", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Spitlings", "price": "1.37", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Star Wars KOTOR II", "price": "0.09", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Star Wars Republic Commando", "price": "0.09", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "SteamWorld Build & Dig Bundle", "price": "2.19", "flag": "🇦🇷", "date": "01.12", "status": " GP" },
  { "name": "SteamWorld Build Deluxe Edition", "price": "0.47", "flag": "🇦🇷", "date": "01.12", "status": " GP" },
  { "name": "Steel Assault", "price": "0.15", "flag": "🇦🇷", "date": "07.05", "status": " GP" },
  { "name": "Stellaris: Console Edition - Deluxe Edition", "price": "0.55", "flag": "🇦🇷", "date": "16.10", "status": " GP" },
  { "name": "Strategic Mind: Fight for Dominance", "price": "2.47", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Strategic Mind: Fight for Freedom", "price": "0.27", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Street Fighter 30th Anniversary Collection", "price": "3.64", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Street Fighter™ 6 Deluxe Edition", "price": "22.83", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "Street Fighter™ 6 Ultimate Edition", "price": "30.2", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "Street Fighter™ 6", "price": "15.79", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "Strider", "price": "1.65", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Stunt Kite Party", "price": "0.92", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Sunset Overdrive Deluxe Edition", "price": "1.72", "flag": "🇹🇷", "date": "06.05", "status": " GP" },
  { "name": "TEKKEN 8 - Ultimate Edition", "price": "54.54", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "TEKKEN 8", "price": "32.53", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "THE KING OF FIGHTERS XV Deluxe Edition", "price": "5.73", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "THE KING OF FIGHTERS XV Standard Edition", "price": "1.81", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "TT Isle of Man: Ride on the Edge 3", "price": "5.95", "flag": "🇦🇷", "date": "07.05", "status": " GP" },
  { "name": "Taiko no Tatsujin: The Drum Master!", "price": "2.04", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "Tales from Candleforth", "price": "1.14", "flag": "🇦🇷", "date": "15.05", "status": "" },
  { "name": "Tales of ARISE + SCARLET NEXUS バンドル", "price": "37.18", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Tales of Arise - Beyond The Dawn Ultimate Edition", "price": "44.62", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Tales of Arise - Beyond the Dawn Deluxe Edition", "price": "37.18", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "Tales of Arise - Beyond the Dawn Edition", "price": "27.26", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Taxi Life - Supporter Edition", "price": "4.73", "flag": "🇦🇷", "date": "06.05", "status": " GP" },
  { "name": "Teardown", "price": "0.4", "flag": "🇦🇷", "date": "07.05", "status": " GP" },
  { "name": "Teenage Mutant Ninja Turtles: Shredder's Revenge - Dimension Shellshock", "price": "0.43", "flag": "🇦🇷", "date": "16.06", "status": " GP" },
  { "name": "The Bard's Tale Trilogy", "price": "0.78", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "The DioField Chronicle Digitale Deluxe Edition", "price": "4.4", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "The DioField Chronicle", "price": "3.5", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "The Disney Afternoon Collection", "price": "1.84", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "The Elder Scrolls Online Collection: Necrom", "price": "21.0", "flag": "🇦🇷", "date": "21.06", "status": " GP" },
  { "name": "The Elder Scrolls Online Deluxe Collection: Necrom", "price": "31.8", "flag": "🇦🇷", "date": "21.06", "status": " GP" },
  { "name": "The Elder Scrolls V: Skyrim Anniversary Edition", "price": "11.9", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Escapists: Supermax Edition", "price": "0.31", "flag": "🇦🇷", "date": "29.04", "status": "" },
  { "name": "The Evil Within Digital Bundle", "price": "2.51", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Good Life", "price": "0.36", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "The Great Perhaps", "price": "0.05", "flag": "🇦🇷", "date": "06.05", "status": "" },
  { "name": "The Jackbox Party Quadpack", "price": "0.7", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "The LEGO Movie Videogame", "price": "0.14", "flag": "🇦🇷", "date": "06.05", "status": "" },
  { "name": "The Lamplighters League - Deluxe Edition", "price": "0.78", "flag": "🇦🇷", "date": "01.04", "status": " GP" },
  { "name": "The Manga Works", "price": "0.19", "flag": "🇦🇷", "date": "02.05", "status": "" },
  { "name": "The Messenger", "price": "0.09", "flag": "🇦🇷", "date": "07.05", "status": " GP" },
  { "name": "The Sealed Ampoule", "price": "0.18", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "The Sinking City Xbox Series X|S", "price": "0.73", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "The Sinking City", "price": "0.73", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "The Smile Alchemist", "price": "0.18", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "The Surge 1 & 2 - Dual Pack (Xbox)", "price": "0.56", "flag": "🇦🇷", "date": "07.05", "status": " GP" },
  { "name": "The Walking Dead: A New Frontier", "price": "0.21", "flag": "🇦🇷", "date": "01.11", "status": " GP" },
  { "name": "The Walking Dead: Michonne", "price": "0.07", "flag": "🇦🇷", "date": "01.11", "status": " GP" },
  { "name": "The Yakuza Remastered Collection for Windows 10", "price": "1.86", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "The Yakuza Remastered Collection", "price": "1.86", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "Thief", "price": "0.66", "flag": "🇦🇷", "date": "07.05", "status": " GP" },
  { "name": "This War of Mine - Complete Edition", "price": "0.38", "flag": "🇦🇷", "date": "16.05", "status": " GP" },
  { "name": "Three Minutes To Eight", "price": "0.86", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Ultimate Edition", "price": "1.03", "flag": "🇦🇷", "date": "06.05", "status": "" },
  { "name": "Tom Clancy's Rainbow Six® Extraction United Bundle", "price": "5.5", "flag": "🇦🇷", "date": "16.06", "status": " GP" },
  { "name": "Tom Clancy's Rainbow Six® Siege Deluxe Edition", "price": "5.37", "flag": "🇹🇷", "date": "07.05", "status": " GP" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands - Standard Edition", "price": "0.43", "flag": "🇦🇷", "date": "06.05", "status": "" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Ultimate Edition", "price": "4.75", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Tom Clancy’s Rainbow Six Siege Ultimate Edition", "price": "39.68", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Tomb Raider: Definitive Survivor Trilogy", "price": "8.51", "flag": "🇦🇷", "date": "16.04", "status": " GP" },
  { "name": "Totally Reliable Delivery Service Deluxe Edition", "price": "0.34", "flag": "🇦🇷", "date": "01.12", "status": " GP" },
  { "name": "Trailblazers", "price": "0.04", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Trailmakers - Space Upgrade", "price": "0.47", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers Deluxe Edition", "price": "0.54", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Train Life: A Railway Simulator", "price": "0.16", "flag": "🇦🇷", "date": "06.05", "status": " GP" },
  { "name": "Train Sim World® 4: Austrian Regional Edition", "price": "4.06", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Train Sim World® 4: German Regional Edition", "price": "4.06", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Train Sim World® 4: UK Regional Edition", "price": "4.06", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Train Sim World® 4: USA Regional Edition", "price": "4.06", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "True Survivors Bundle", "price": "22.5", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Turbo Golf Racing: Deep Space Bundle", "price": "0.23", "flag": "🇦🇷", "date": "01.08", "status": " GP" },
  { "name": "Turbo Golf Racing: Ultimate Bundle", "price": "0.27", "flag": "🇦🇷", "date": "01.08", "status": " GP" },
  { "name": "Turnip Boy Robs a Bank Pre-Release", "price": "0.21", "flag": "🇦🇷", "date": "15.07", "status": " GP" },
  { "name": "ULTIMATE MARVEL VS. CAPCOM 3", "price": "6.2", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "0.17", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Vermintide - Digital Value Pack", "price": "0.5", "flag": "🇦🇷", "date": "07.03", "status": "" },
  { "name": "WARRIORS OROCHI 3 Ultimate", "price": "2.65", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "WARRIORS OROCHI 4 Ultimate Deluxe Edition", "price": "27.88", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "WARRIORS OROCHI 4 Ultimate", "price": "24.16", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "WORLD OF FINAL FANTASY MAXIMA", "price": "0.82", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "0.8", "flag": "🇦🇷", "date": "30.08", "status": "" },
  { "name": "Warhammer 40,000: Darktide - Imperial Edition", "price": "5.0", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "Wasteland 3 (PC) Colorado Collection", "price": "1.8", "flag": "🇦🇷", "date": "30.09", "status": " GP" },
  { "name": "Wasteland 3 Colorado Collection", "price": "10.89", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "Watch Dogs®2 - Deluxe Edition", "price": "3.4", "flag": "🇦🇷", "date": "16.07", "status": " GP" },
  { "name": "Watch Dogs®2 - Gold Edition", "price": "50.84", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Watch Dogs®: Legion Gold Edition", "price": "4.96", "flag": "🇹🇷", "date": "07.05", "status": " GP" },
  { "name": "Watch Dogs®: Legion", "price": "2.79", "flag": "🇹🇷", "date": "06.05", "status": " GP" },
  { "name": "We Happy Few Digital Deluxe", "price": "1.7", "flag": "🇦🇷", "date": "06.05", "status": " GP" },
  { "name": "We Love Katamari REROLL+ Royal Reverie Special Edition", "price": "9.28", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "We. The Revolution", "price": "0.07", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Welcome to ParadiZe - Zombot Edition", "price": "5.16", "flag": "🇦🇷", "date": "06.05", "status": " GP" },
  { "name": "Werewolf: The Apocalypse - Earthblood Champion of Gaia Xb...", "price": "0.11", "flag": "🇦🇷", "date": "06.05", "status": " GP" },
  { "name": "Werewolf: The Apocalypse - Earthblood Champion of Gaia Xbox Series X|S", "price": "0.11", "flag": "🇦🇷", "date": "06.05", "status": " GP" },
  { "name": "Wired Italian Adventure Bundle", "price": "0.43", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Wizard with a Gun: Deluxe Edition", "price": "1.57", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "Wolfenstein: Alt History Collection", "price": "12.4", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Wolfenstein: Youngblood Deluxe Edition", "price": "5.42", "flag": "🇹🇷", "date": "17.02", "status": " GP" },
  { "name": "Wolfenstein® II: The New Colossus™ Digital Deluxe Edition", "price": "7.44", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "Wolfenstein®: The Two-Pack", "price": "3.94", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "World War Z: Aftermath - Deluxe Edition", "price": "6.4", "flag": "🇦🇷", "date": "01.12", "status": " GP" },
  { "name": "X-Pack", "price": "0.06", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "ZERO GUNNER 2-", "price": "1.37", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "resident evil 4", "price": "3.12", "flag": "🇹🇷", "date": "07.05", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Essentials DLC Bundle", "price": "0.12", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Greenhorn Bundle", "price": "0.57", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "theHunter: Call of the Wild™ - Master Hunter Bundle", "price": "0.86", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "theHunter: Call of the Wild™ - Seasoned Hunter Bundle", "price": "0.71", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "theHunter: Call of the Wild™ - Traveler's Cosmetic Bundle", "price": "0.31", "flag": "🇦🇷", "date": "07.05", "status": "" },
  { "name": "ŌKAMI HD", "price": "3.68", "flag": "🇦🇷", "date": "07.05", "status": "" },
]

let usd = 105;

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

  item.innerHTML = `${a.name}:${res}&#8381 ${flag} ${a.status}`
  // до ${a.date}
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



