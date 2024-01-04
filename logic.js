const input = document.querySelector('.input');
const output = document.querySelector('.output-res');
const output2 = document.querySelector('.output-res2');
const list = document.querySelector('.list')
const showBtn = document.querySelector('.show')


showBtn.addEventListener('click', () => {
  showBtn.classList.contains('active') ?
    hiddenMenu() : showMenu()
})

let usd = 107;

const arr = [
  { "name": "9 Monkeys of Shaolin + Ash of Gods + Redeemer: Bundle", "price": "0.39", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "9Ball Pocket", "price": "0.09", "flag": "🇦🇷", "date": "06.01", "status": "" },
  { "name": "ACE COMBAT™ 7: SKIES UNKNOWN - TOP GUN: Maverick Ultimate Edition", "price": "3.41", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "ARCADE GAME SERIES 3-in-1 Pack", "price": "0.08", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "ARCADE GAME SERIES: Ms. PAC-MAN", "price": "0.04", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "ARCADE GAME SERIES: PAC-MAN", "price": "0.04", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "ASTRONEER", "price": "1.09", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Ad Infinitum", "price": "4.78", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Aery Series Bundle", "price": "0.49", "flag": "🇦🇷", "date": "07.01", "status": "" },
  { "name": "Age of Empires: Definitive Collection", "price": "0.73", "flag": "🇦🇷", "date": "06.10", "status": " GOLD" },
  { "name": "Agents of Mayhem - Total Mayhem Bundle", "price": "0.04", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Airborne Bundle", "price": "0.6", "flag": "🇦🇷", "date": "16.02", "status": " GOLD" },
  { "name": "Akai Katana Shin", "price": "4.68", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Alone in the Dark - Digital Deluxe Edition", "price": "5.26", "flag": "🇦🇷", "date": "17.01", "status": "" },
  { "name": "Alone in the Dark", "price": "4.56", "flag": "🇦🇷", "date": "17.01", "status": "" },
  { "name": "Alphaset by POWGI", "price": "0.07", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Anima: Gate of Memories - The Nameless Chronicles", "price": "0.05", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Anno 1800™ Console Edition", "price": "2.92", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Arcade Paradise | High Score Edition", "price": "0.41", "flag": "🇦🇷", "date": "01.07", "status": " GOLD" },
  { "name": "Arcade Spirits: The New Challengers", "price": "0.24", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Assassin's Creed Antiquity Pack", "price": "4.16", "flag": "🇦🇷", "date": "16.09", "status": " GOLD" },
  { "name": "Assassin's Creed IV Black Flag", "price": "0.32", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Assassin's Creed Triple Pack: Black Flag, Unity, Syndicate", "price": "0.29", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Assassin's Creed Unity", "price": "0.32", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Assassin's Creed® Bundle: Assassin's Creed® Valhalla, Ass...", "price": "2.6", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Assassin's Creed® Odyssey - DELUXE EDITION", "price": "3.12", "flag": "🇦🇷", "date": "16.09", "status": " GOLD" },
  { "name": "Assassin's Creed® Odyssey - ULTIMATE EDITION", "price": "4.68", "flag": "🇦🇷", "date": "16.09", "status": " GOLD" },
  { "name": "Assassin's Creed® Odyssey", "price": "0.6", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Assassin's Creed® Origins - DELUXE EDITION", "price": "2.86", "flag": "🇦🇷", "date": "01.06", "status": " GOLD" },
  { "name": "Assassin's Creed® Origins - GOLD EDITION", "price": "3.9", "flag": "🇦🇷", "date": "01.06", "status": " GOLD" },
  { "name": "Assassin's Creed® Origins", "price": "0.45", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Assassin's Creed® Syndicate Gold Edition", "price": "0.97", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Assassin's Creed® The Ezio Collection", "price": "0.7", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Assassin's Creed® Valhalla Complete Edition", "price": "3.25", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Assassin’s Creed Mirage & Assassin's Creed Valhalla Bundle", "price": "19.89", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Assassin’s Creed Mirage Master Assassin Edition", "price": "38.08", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Assassin’s Creed® Mirage", "price": "21.42", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Assetto Corsa Competizione + 2023 GT World Challenge", "price": "5.41", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Assetto Corsa Ultimate Edition", "price": "0.13", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Asterigos: Curse of the Stars Deluxe Edition", "price": "6.24", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Asterigos: Curse of the Stars", "price": "1.43", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Atomic Heart - Gold Edition", "price": "15.6", "flag": "🇦🇷", "date": "16.08", "status": " GOLD" },
  { "name": "Atomic Heart - Premium Edition", "price": "17.68", "flag": "🇦🇷", "date": "16.01", "status": " GOLD" },
  { "name": "Avatar: Frontiers of Pandora™ Gold Edition", "price": "48.45", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Avatar: Frontiers of Pandora™ Ultimate Edition", "price": "56.1", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Aven Colony - Deluxe Edition", "price": "0.37", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Aven Colony", "price": "0.39", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Awarded Platformer Bundle", "price": "0.21", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "BATSUGUN Saturn Tribute Boosted", "price": "4.68", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "BATTLETECH Mercenary Collection", "price": "1.34", "flag": "🇦🇷", "date": "13.06", "status": " GOLD" },
  { "name": "Back 4 Blood: Deluxe Edition", "price": "8.53", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Batman: Arkham Collection", "price": "1.46", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Batman: Arkham Knight Premium Edition", "price": "1.82", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Battlefield V Definitive Edition", "price": "0.45", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Battlefield™ 1 Revolution", "price": "0.14", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Before I Forget", "price": "0.09", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Before We Leave", "price": "0.65", "flag": "🇦🇷", "date": "17.01", "status": "" },
  { "name": "Best Month Ever!", "price": "0.2", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Big Moonstone Pack -- 5,500", "price": "3.74", "flag": "🇦🇷", "date": "01.09", "status": " GOLD" },
  { "name": "BioShock 2 Remastered", "price": "0.97", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "BioShock Infinite: The Complete Edition", "price": "1.55", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "BioShock Remastered", "price": "1.55", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Blasphemous + Blasphemous 2 Bundle", "price": "9.87", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Borderlands 3: Next Level Edition", "price": "2.54", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Borderlands 3: Ultimate Edition", "price": "7.23", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Borderlands: The Handsome Collection", "price": "2.2", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Breathedge", "price": "0.14", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Bridge Constructor Portal", "price": "0.03", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Builder Flipper bundle", "price": "0.63", "flag": "🇦🇷", "date": "01.01", "status": " GOLD" },
  { "name": "CODE VEIN Deluxe Edition", "price": "0.78", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Call of the Wild: The Angler™ - Deluxe Edition", "price": "0.67", "flag": "🇦🇷", "date": "01.09", "status": " GOLD" },
  { "name": "Capcom Beat 'Em Up Bundle", "price": "0.37", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Capcom Fighting Bundle", "price": "10.33", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Capcom Fighting Collection", "price": "7.65", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Car Vouchers (24)", "price": "4.68", "flag": "🇦🇷", "date": "30.12", "status": " GOLD" },
  { "name": "Car Vouchers (4)", "price": "1.17", "flag": "🇦🇷", "date": "30.12", "status": " GOLD" },
  { "name": "CarX Drift Racing Online", "price": "0.17", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Cassette Beasts: Deluxe Edition", "price": "0.39", "flag": "🇦🇷", "date": "16.01", "status": " GOLD" },
  { "name": "Cave Digger 2", "price": "0.22", "flag": "🇦🇷", "date": "04.01", "status": "" },
  { "name": "Chef Life - AL FORNO EDITION", "price": "3.9", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Chivalry 2 King's Edition", "price": "0.89", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Chivalry 2 Special Edition", "price": "0.74", "flag": "🇦🇷", "date": "01.10", "status": " GOLD" },
  { "name": "Cities: Skylines - Mayor's Edition", "price": "0.78", "flag": "🇦🇷", "date": "01.04", "status": " GOLD" },
  { "name": "Cities: Skylines - Premium Edition 2", "price": "1.04", "flag": "🇦🇷", "date": "01.04", "status": " GOLD" },
  { "name": "Cleopatra Fortune™ S-Tribute", "price": "2.39", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Conan Exiles - Complete Edition October 2021", "price": "2.39", "flag": "🇦🇷", "date": "16.08", "status": " GOLD" },
  { "name": "Conan Exiles - Isle of Siptah Edition", "price": "1.03", "flag": "🇦🇷", "date": "16.08", "status": " GOLD" },
  { "name": "Control Ultimate Edition", "price": "0.97", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Crown Trick", "price": "0.29", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Crusader Kings III: Royal Edition", "price": "1.12", "flag": "🇦🇷", "date": "01.02", "status": " GOLD" },
  { "name": "Crypto by POWGI", "price": "0.07", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Cuphead & The Delicious Last Course", "price": "0.68", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Cuphead", "price": "0.26", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Cynthia: Hidden in the Moonshadow - Complete Edition", "price": "0.36", "flag": "🇦🇷", "date": "10.01", "status": "" },
  { "name": "Cynthia: Hidden in the Moonshadow", "price": "0.23", "flag": "🇦🇷", "date": "10.01", "status": "" },
  { "name": "DARKLAND 3", "price": "0.02", "flag": "🇦🇷", "date": "12.01", "status": "" },
  { "name": "DEAD ISLAND 2 DELUXE EDITION", "price": "15.28", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "DEATHLOOP Deluxe Edition", "price": "17.68", "flag": "🇹🇷", "date": "30.12", "status": " GOLD" },
  { "name": "DIRT 5 Year One Edition", "price": "1.34", "flag": "🇦🇷", "date": "11.08", "status": " GOLD" },
  { "name": "DOOM Eternal Deluxe Edition", "price": "16.32", "flag": "🇹🇷", "date": "01.10", "status": " GOLD" },
  { "name": "DOOM Eternal: The Ancient Gods - Part One", "price": "5.78", "flag": "🇹🇷", "date": "09.01", "status": " GOLD" },
  { "name": "DOOM Eternal: The Ancient Gods - Part Two", "price": "5.78", "flag": "🇹🇷", "date": "09.01", "status": " GOLD" },
  { "name": "DOOM Eternal: Year One Pass (PC)", "price": "8.72", "flag": "🇹🇷", "date": "09.01", "status": " GOLD" },
  { "name": "DOOM Eternal: Year One Pass", "price": "8.72", "flag": "🇹🇷", "date": "09.01", "status": " GOLD" },
  { "name": "DOOM Slayers Collection", "price": "3.67", "flag": "🇹🇷", "date": "13.06", "status": " GOLD" },
  { "name": "DRAGON BALL FIGHTERZ - FighterZ Edition", "price": "1.8", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "DRAGON BALL XENOVERSE Super Bundle", "price": "1.46", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "DRAGON BALL Z: KAKAROT Deluxe Edition", "price": "11.47", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "DRAGON BALL: THE BREAKERS Special Edition", "price": "1.33", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Darkest Dungeon®: Ancestral Edition", "price": "0.41", "flag": "🇦🇷", "date": "01.02", "status": " GOLD" },
  { "name": "Dead Cells: Medley of Pain Bundle", "price": "0.6", "flag": "🇦🇷", "date": "16.09", "status": " GOLD" },
  { "name": "Dead Cells: Return to Castlevania Bundle", "price": "0.47", "flag": "🇦🇷", "date": "16.09", "status": " GOLD" },
  { "name": "Dead Ground", "price": "0.06", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Dead Island Definitive Edition", "price": "0.29", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Dead Island Retro Revenge", "price": "0.01", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Dead Island: Riptide Definitive Edition", "price": "0.04", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Dead Rising 2 Off the Record", "price": "2.29", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Dead Rising 2", "price": "2.29", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Dead Rising 3: Apocalypse Edition", "price": "2.11", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Dead Rising 4", "price": "3.82", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Dead Rising Triple Bundle Pack", "price": "5.69", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Dead Rising", "price": "2.29", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Dead Space Digital Deluxe Edition", "price": "5.46", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Dead Space", "price": "4.68", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Dead by Daylight: Silent Hill Edition", "price": "0.74", "flag": "🇦🇷", "date": "01.06", "status": " GOLD" },
  { "name": "Dead by Daylight: ULTIMATE EDITION", "price": "0.98", "flag": "🇦🇷", "date": "01.06", "status": " GOLD" },
  { "name": "Deep Rock Galactic - Deluxe Edition", "price": "0.6", "flag": "🇦🇷", "date": "01.11", "status": " GOLD" },
  { "name": "Deep Rock Galactic - Ultimate Edition", "price": "0.74", "flag": "🇦🇷", "date": "01.11", "status": " GOLD" },
  { "name": "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles Ultimate Edition", "price": "33.42", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles", "price": "7.14", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Detective Reborn Bundle", "price": "4.91", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Deus Ex: Mankind Divided™", "price": "0.13", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Die for Valhalla!", "price": "0.03", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Disco Elysium - The Final Cut", "price": "1.52", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Dishonored & Prey: The Arkane Collection", "price": "17.0", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Dishonored®: Death of the Outsider™ Deluxe Bundle", "price": "13.53", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Disney Dreamlight Valley - Gold Edition", "price": "12.48", "flag": "🇦🇷", "date": "01.09", "status": " GOLD" },
  { "name": "Disney Dreamlight Valley: A Rift in Time", "price": "0.56", "flag": "🇦🇷", "date": "01.09", "status": " GOLD" },
  { "name": "Dolby Atmos for Headphones", "price": "0.22", "flag": "🇦🇷", "date": "04.01", "status": "" },
  { "name": "Dou", "price": "0.02", "flag": "🇦🇷", "date": "10.01", "status": "" },
  { "name": "Dragon Ball Xenoverse + Season Pass", "price": "0.2", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Dragon Blaze", "price": "1.27", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Dragon's Dogma: Dark Arisen", "price": "1.66", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Dreamfall Chapters", "price": "0.06", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Dungeon Rushers: Crawler RPG", "price": "0.03", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Dungeons 3", "price": "0.28", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Dungeons 4 - Digital Deluxe Edition", "price": "16.38", "flag": "🇦🇷", "date": "07.02", "status": " GOLD" },
  { "name": "Dying Light: Definitive Edition", "price": "1.04", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "EA SPORTS FC™ 24 Standard Edition Xbox One & Xbox Series X|S", "price": "9.55", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "ENDER LILIES: Quietus of the Knights", "price": "1.17", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Eldest Souls", "price": "0.29", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Enter The Gungeon", "price": "0.08", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Escape Academy Deluxe Edition", "price": "0.52", "flag": "🇦🇷", "date": "16.01", "status": " GOLD" },
  { "name": "Escape Dead Island", "price": "0.05", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "Eternity: The Last Unicorn", "price": "0.06", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "F1® Manager 2023 Deluxe Edition", "price": "14.96", "flag": "🇹🇷", "date": "16.10", "status": " GOLD" },
  { "name": "FRONT MISSION 1st: Remake", "price": "0.43", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Fallout 4 (PC)", "price": "0.92", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Fallout 4", "price": "1.22", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Fallout 4: Game of the Year Edition (PC)", "price": "7.75", "flag": "🇹🇷", "date": "12.03", "status": " GOLD" },
  { "name": "Fallout 4: Game of the Year Edition", "price": "7.75", "flag": "🇹🇷", "date": "12.03", "status": " GOLD" },
  { "name": "Fallout 76: Atlantic City - Boardwalk Paradise Deluxe Edition", "price": "12.48", "flag": "🇦🇷", "date": "30.12", "status": " GOLD" },
  { "name": "Far Cry Primal", "price": "0.45", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Far Cry® 5", "price": "0.45", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Far Cry® 6 Deluxe Edition", "price": "8.32", "flag": "🇦🇷", "date": "16.06", "status": " GOLD" },
  { "name": "Far Cry® 6 Game of the Year Edition", "price": "10.4", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Far Cry® 6 Gold Edition", "price": "8.32", "flag": "🇦🇷", "date": "16.06", "status": " GOLD" },
  { "name": "Far Cry® 6", "price": "1.62", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Far Cry®5 Gold Edition", "price": "3.43", "flag": "🇦🇷", "date": "01.07", "status": " GOLD" },
  { "name": "Farm Bundle", "price": "0.6", "flag": "🇦🇷", "date": "01.01", "status": " GOLD" },
  { "name": "Farm Pets Bundle", "price": "0.89", "flag": "🇦🇷", "date": "01.01", "status": " GOLD" },
  { "name": "Farming Simulator 22 - Platinum Edition", "price": "8.32", "flag": "🇦🇷", "date": "16.05", "status": " GOLD" },
  { "name": "Farming Simulator 22 - Premium Edition", "price": "10.4", "flag": "🇦🇷", "date": "16.05", "status": " GOLD" },
  { "name": "Farming Simulator 22 - YEAR 1 Bundle", "price": "8.32", "flag": "🇦🇷", "date": "16.05", "status": " GOLD" },
  { "name": "Flailing Limbs Bundle", "price": "0.26", "flag": "🇦🇷", "date": "01.08", "status": " GOLD" },
  { "name": "Flockers", "price": "0.15", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Flowers by POWGI", "price": "0.07", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "For Honor® Complete Edition", "price": "5.2", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Forza Horizon 4 Expansions Bundle", "price": "2.92", "flag": "🇦🇷", "date": "03.10", "status": " GOLD" },
  { "name": "Forza Horizon 5 PLUS Hot Wheels Bundle", "price": "11.23", "flag": "🇦🇷", "date": "30.12", "status": " GOLD" },
  { "name": "From Heaven To Earth", "price": "0.08", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Frostpunk: Complete Collection", "price": "0.67", "flag": "🇦🇷", "date": "16.01", "status": " GOLD" },
  { "name": "Fuga: Melodies of Steel 2 - Deluxe Edition", "price": "8.32", "flag": "🇦🇷", "date": "16.05", "status": " GOLD" },
  { "name": "GUNBARICH", "price": "1.27", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Gangs of Sherwood – Lionheart Edition", "price": "5.37", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Garden Bundle", "price": "0.67", "flag": "🇦🇷", "date": "01.01", "status": " GOLD" },
  { "name": "Gears of War 4 and Halo 5: Guardians Bundle", "price": "0.41", "flag": "🇦🇷", "date": "31.01", "status": " GOLD" },
  { "name": "Gears of War Ultimate Edition Deluxe Version", "price": "1.35", "flag": "🇦🇷", "date": "01.06", "status": " GOLD" },
  { "name": "Generation Zero ® - Base Warfare Starter Bundle", "price": "1.14", "flag": "🇦🇷", "date": "01.06", "status": " GOLD" },
  { "name": "Generation Zero ® - Ultimate Bundle", "price": "2.6", "flag": "🇦🇷", "date": "01.06", "status": " GOLD" },
  { "name": "Generation Zero® - Resistance Bundle", "price": "1.18", "flag": "🇦🇷", "date": "01.06", "status": " GOLD" },
  { "name": "Genesis Alpha One Deluxe Edition", "price": "0.08", "flag": "🇦🇷", "date": "17.01", "status": "" },
  { "name": "Genesis Alpha One", "price": "0.1", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Ghost Trick: Phantom Detective", "price": "4.66", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Ghostrunner 2 Brutal Edition", "price": "7.14", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Ghostrunner: Complete Edition", "price": "2.34", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Ghosts 'n Goblins Resurrection", "price": "4.01", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Ghostwire: Tokyo Deluxe Edition", "price": "21.08", "flag": "🇹🇷", "date": "30.12", "status": " GOLD" },
  { "name": "Goat Simulator 3 - Digital Downgrade Edition", "price": "2.08", "flag": "🇦🇷", "date": "01.06", "status": " GOLD" },
  { "name": "Goat Simulator: The GOATY", "price": "0.31", "flag": "🇦🇷", "date": "01.03", "status": " GOLD" },
  { "name": "Goat Simulator: Waste Of Space Bundle", "price": "0.14", "flag": "🇦🇷", "date": "01.03", "status": " GOLD" },
  { "name": "Going Under", "price": "0.29", "flag": "🇦🇷", "date": "17.01", "status": "" },
  { "name": "Golf With Your Friends - Starter Edition", "price": "18.72", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Golf With Your Friends - Ultimate Edition", "price": "36.69", "flag": "🇹🇷", "date": "16.07", "status": " GOLD" },
  { "name": "Golf With Your Friends", "price": "1.46", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Gord", "price": "8.45", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Gotham Knights: Deluxe", "price": "32.61", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Grand Theft Auto Online", "price": "3.72", "flag": "🇹🇷", "date": "06.01", "status": "" },
  { "name": "Grand Theft Auto V (Xbox One & Xbox Series X|S)", "price": "6.72", "flag": "🇹🇷", "date": "06.01", "status": "" },
  { "name": "Grand Theft Auto V: Premium Edition & Great White Shark C...", "price": "2.39", "flag": "🇦🇷", "date": "06.01", "status": "" },
  { "name": "Grand Theft Auto V: Premium Edition & Megalodon Shark Car...", "price": "4.68", "flag": "🇦🇷", "date": "06.01", "status": "" },
  { "name": "Grand Theft Auto V: Premium Edition & Whale Shark Card Bu...", "price": "3.12", "flag": "🇦🇷", "date": "06.01", "status": "" },
  { "name": "Grand Theft Auto V: Premium Edition", "price": "1.61", "flag": "🇦🇷", "date": "06.01", "status": " GOLD" },
  { "name": "Graveyard Keeper: Last Journey Edition", "price": "0.23", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "GreedFall - Gold Edition (Windows 10)", "price": "0.86", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Guacamelee! 2", "price": "0.09", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Guilty Gear -Strive- Daredevil Edition", "price": "7.38", "flag": "🇦🇷", "date": "01.09", "status": " GOLD" },
  { "name": "HITMAN 3 Access Pass: HITMAN 2 Standard (DISC)", "price": "1.49", "flag": "🇦🇷", "date": "01.02", "status": " GOLD" },
  { "name": "HITMAN World of Assasination Upgrade Pack", "price": "7.28", "flag": "🇦🇷", "date": "01.02", "status": " GOLD" },
  { "name": "HITMAN World of Assassination Deluxe Pack", "price": "5.2", "flag": "🇦🇷", "date": "01.02", "status": " GOLD" },
  { "name": "HOT WHEELS UNLEASHED™ - Game Of The Year Edition - Xbox S...", "price": "0.78", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ - Game Of The Year Edition", "price": "0.78", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ - Xbox Series X|S", "price": "0.49", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™", "price": "0.49", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "HUMANKIND™ - Heritage Edition", "price": "11.96", "flag": "🇦🇷", "date": "16.08", "status": " GOLD" },
  { "name": "HUMANKIND™", "price": "7.84", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Halo 5: Guardians – Digital Deluxe Edition", "price": "6.76", "flag": "🇦🇷", "date": "01.06", "status": " GOLD" },
  { "name": "Halo Wars 2: Complete Edition", "price": "27.2", "flag": "🇹🇷", "date": "04.04", "status": " GOLD" },
  { "name": "Harvest Life", "price": "0.36", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Heavy Burden", "price": "0.07", "flag": "🇦🇷", "date": "14.12", "status": "" },
  { "name": "Heliborne", "price": "0.25", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Hell Let Loose - Deluxe Edition", "price": "31.8", "flag": "🇹🇷", "date": "01.01", "status": " GOLD" },
  { "name": "Hell Let Loose - Ultimate Edition", "price": "36.69", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Hello Neighbor 2 Deluxe Edition", "price": "5.72", "flag": "🇦🇷", "date": "16.12", "status": " GOLD" },
  { "name": "Hi-Fi RUSH Deluxe Edition", "price": "16.32", "flag": "🇹🇷", "date": "30.12", "status": " GOLD" },
  { "name": "Hitchhiker", "price": "0.09", "flag": "🇦🇷", "date": "22.01", "status": "" },
  { "name": "Hobo: Tough Life", "price": "1.15", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Horror Tale 2: Samantha", "price": "0.1", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Hotel: A Resort Simulator", "price": "6.37", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Hotline Miami Collection", "price": "0.64", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "House Flipper", "price": "0.12", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Howl", "price": "1.23", "flag": "🇦🇷", "date": "23.01", "status": " GOLD" },
  { "name": "Huge Moonstone Pack -- 14,500", "price": "9.36", "flag": "🇦🇷", "date": "01.09", "status": " GOLD" },
  { "name": "Hypnospace Outlaw & Slayers X: Terminal Aftermath: Vengance of the Slayer Bundle", "price": "0.5", "flag": "🇦🇷", "date": "01.06", "status": " GOLD" },
  { "name": "INSIDE & LIMBO Bundle", "price": "2.62", "flag": "🇦🇷", "date": "16.01", "status": " GOLD" },
  { "name": "Immortals Fenyx Rising™ Gold Edition", "price": "5.72", "flag": "🇦🇷", "date": "01.09", "status": " GOLD" },
  { "name": "Immortals of Aveum™ Deluxe Edition", "price": "7.28", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Immortals of Aveum™", "price": "6.24", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Injustice™ 2 - Legendary Edition", "price": "1.97", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Insurgency: Sandstorm - Deluxe Edition", "price": "17.68", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Insurgency: Sandstorm - Gold Edition", "price": "26.0", "flag": "🇦🇷", "date": "01.06", "status": " GOLD" },
  { "name": "Insurgency: Sandstorm - Ultimate Edition", "price": "30.16", "flag": "🇦🇷", "date": "01.06", "status": " GOLD" },
  { "name": "Iron Harvest Complete Edition", "price": "1.59", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Jack Move", "price": "1.2", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "JoJo's Bizarre Adventure: All-Star Battle R Ultimate Edition", "price": "14.87", "flag": "🇦🇷", "date": "01.06", "status": " GOLD" },
  { "name": "Jurassic World Evolution 2: Deluxe Edition", "price": "7.28", "flag": "🇦🇷", "date": "16.05", "status": " GOLD" },
  { "name": "Jurassic World Evolution 2: Dominion Bundle", "price": "13.52", "flag": "🇦🇷", "date": "16.05", "status": " GOLD" },
  { "name": "Kerbal Space Program Enhanced Edition Complete", "price": "3.02", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "King of Seas", "price": "0.12", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "King's Bounty II", "price": "0.78", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Kingdom Come: Deliverance - Royal Edition", "price": "1.08", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "L.A. Noire", "price": "3.4", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "LEGO Marvel Super Heroes", "price": "0.15", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "LEGO® 2K Drive Awesome Edition", "price": "21.32", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "LEGO® Batman™ 3: Beyond Gotham Deluxe Edition", "price": "0.12", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "LEGO® Brawls", "price": "1.07", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "LEGO® DC Super-Villains Deluxe Edition", "price": "0.44", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "LEGO® Jurassic World™", "price": "0.26", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "LEGO® Marvel Super Heroes 2 Deluxe Edition", "price": "0.39", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "LEGO® Marvel’s Avengers Deluxe Edition", "price": "0.31", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "LEGO® Star Wars™: The Force Awakens Deluxe Edition", "price": "0.26", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "LEGO® Star Wars™: The Skywalker Saga", "price": "5.2", "flag": "🇦🇷", "date": "01.05", "status": " GOLD" },
  { "name": "Lara Croft and the Temple of Osiris", "price": "0.1", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Let's Build a Zoo & Dinosaur DLC Bundle", "price": "0.4", "flag": "🇦🇷", "date": "01.04", "status": " GOLD" },
  { "name": "Let's Build a Zoo: Aquarium Odyssey Bundle", "price": "0.4", "flag": "🇦🇷", "date": "01.10", "status": " GOLD" },
  { "name": "Let's Build a Zoo: Ultimate Bundle", "price": "0.5", "flag": "🇦🇷", "date": "01.10", "status": " GOLD" },
  { "name": "Lies of P Digital Deluxe Edition", "price": "14.56", "flag": "🇦🇷", "date": "16.03", "status": " GOLD" },
  { "name": "Light & Dark Bundle", "price": "2.07", "flag": "🇦🇷", "date": "02.11", "status": "" },
  { "name": "Little Nightmares Complete Edition", "price": "1.64", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Little Nightmares I & II Bundle", "price": "2.03", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Livelock", "price": "0.03", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Lonely Mountains: Downhill - Eldfjall Island", "price": "0.35", "flag": "🇦🇷", "date": "01.11", "status": " GOLD" },
  { "name": "Lords of the Fallen (2014)", "price": "0.21", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Lords of the Fallen Complete Edition (2014)", "price": "0.31", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Lost Judgment Digital Deluxe Edition", "price": "6.38", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Lovecraftian Bundle", "price": "4.55", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Luxury Garden Bundle", "price": "0.89", "flag": "🇦🇷", "date": "01.01", "status": " GOLD" },
  { "name": "MARVEL VS. CAPCOM: INFINITE", "price": "0.99", "flag": "🇦🇷", "date": "", "status": "" },
  { "name": "MLB® The Show™ 23 Digital Deluxe Edition - Xbox One and Xbox Series X|S", "price": "20.8", "flag": "🇦🇷", "date": "01.04", "status": " GOLD" },
  { "name": "MLB® The Show™ 23 Xbox One", "price": "10.61", "flag": "🇦🇷", "date": "01.04", "status": " GOLD" },
  { "name": "MLB® The Show™ 23 Xbox Series X|S", "price": "12.98", "flag": "🇦🇷", "date": "01.04", "status": " GOLD" },
  { "name": "MONOPOLY PLUS", "price": "0.17", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "MXGP 2020 - The Official Motocross Videogame", "price": "0.52", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "MY HERO ONE'S JUSTICE 2 Ultimate Edition", "price": "7.28", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Madden NFL 23 Xbox One", "price": "6.65", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "Madden NFL 23 Xbox Series X|S", "price": "7.8", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "Mafia II: Definitive Edition", "price": "2.23", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Mafia III: Definitive Edition", "price": "2.23", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Marvel vs. Capcom: Infinite - Deluxe Edition", "price": "1.47", "flag": "🇦🇷", "date": "", "status": "" },
  { "name": "Marvel's Guardians of the Galaxy", "price": "1.79", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Marvel's Midnight Suns Digital+ Edition for Xbox One", "price": "9.17", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Marvel's Midnight Suns Digital+ Edition for Xbox Series X|S", "price": "9.17", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "MechWarrior 5: Mercenaries - JumpShip Edition", "price": "0.89", "flag": "🇦🇷", "date": "30.12", "status": " GOLD" },
  { "name": "Mega Man 11", "price": "3.79", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Mega Man 30th Anniversary Bundle", "price": "11.47", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Mega Man Legacy Collection 1 & 2 Combo Pack", "price": "4.59", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Mega Man Legacy Collection 2", "price": "3.06", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Mega Man X Legacy Collection 1+2", "price": "6.12", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Mega Man X Legacy Collection 2", "price": "3.06", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Mega Man X Legacy Collection", "price": "3.06", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Mega Man Zero/ZX Legacy Collection", "price": "3.79", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Mega Man® Legacy Collection", "price": "2.29", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Metal Black™ S-Tribute", "price": "1.32", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Metro Exodus Gold Edition", "price": "1.98", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Metro Redux Bundle", "price": "0.65", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.0", "flag": "🇦🇷", "date": "01.12", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.0", "flag": "🇹🇷", "date": "01.12", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.0", "flag": "🇦🇷", "date": "01.12", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.0", "flag": "🇹🇷", "date": "01.12", "status": "" },
  { "name": "Microsoft Flight Simulator Deluxe 40th Anniversary Edition", "price": "17.68", "flag": "🇦🇷", "date": "30.12", "status": " GOLD" },
  { "name": "Microsoft Flight Simulator Premium Deluxe 40th Anniversar...", "price": "23.92", "flag": "🇦🇷", "date": "30.12", "status": " GOLD" },
  { "name": "Middle-earth™: Shadow of War™ Definitive Edition", "price": "2.08", "flag": "🇦🇷", "date": "16.07", "status": " GOLD" },
  { "name": "Mighty Mage", "price": "0.06", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Mighty No. 9", "price": "0.04", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle - Windows 10", "price": "1.72", "flag": "🇹🇷", "date": "28.07", "status": " GOLD" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle", "price": "1.72", "flag": "🇹🇷", "date": "28.07", "status": " GOLD" },
  { "name": "Minecraft: Deluxe Collection", "price": "6.24", "flag": "🇦🇷", "date": "30.12", "status": " GOLD" },
  { "name": "Momonga Pinball Adventures", "price": "0.02", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Monster Energy Supercross - The Official Videogame 5", "price": "0.78", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Monster Energy Supercross 5 - Special Edition", "price": "1.17", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Monster Hunter Rise + Sunbreak Deluxe", "price": "20.64", "flag": "🇦🇷", "date": "16.01", "status": " GOLD" },
  { "name": "Monster Hunter Rise + Sunbreak", "price": "17.69", "flag": "🇦🇷", "date": "16.01", "status": " GOLD" },
  { "name": "Monster Hunter Rise Deluxe Edition", "price": "14.74", "flag": "🇦🇷", "date": "16.01", "status": " GOLD" },
  { "name": "Moonlighter: Complete Edition", "price": "0.36", "flag": "🇦🇷", "date": "01.12", "status": " GOLD" },
  { "name": "Mortal Kombat 11 Ultimate + Injustice 2 Leg. Edition Bundle", "price": "23.36", "flag": "🇹🇷", "date": "16.06", "status": " GOLD" },
  { "name": "Mortal Kombat 11 Ultimate", "price": "10.85", "flag": "🇹🇷", "date": "16.06", "status": " GOLD" },
  { "name": "Mortal Kombat XL", "price": "0.26", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "MotoGP™22", "price": "0.78", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Moving Out 2 - Deluxe Edition", "price": "9.33", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Moving Out", "price": "1.35", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Mugsters", "price": "0.15", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "My Friend Peppa Pig - Complete Edition", "price": "5.72", "flag": "🇦🇷", "date": "16.07", "status": " GOLD" },
  { "name": "My Time At Portia", "price": "0.49", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "My Time at Portia Deluxe Edition", "price": "1.45", "flag": "🇦🇷", "date": "01.10", "status": " GOLD" },
  { "name": "Mythic Ocean", "price": "0.55", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "NAMCO MUSEUM® ARCHIVES Vol 1", "price": "0.32", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "NAMCO MUSEUM® ARCHIVES Vol 2", "price": "0.32", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "NARUTO SHIPPUDEN™: Ultimate Ninja® STORM 2", "price": "0.16", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "NARUTO SHIPPUDEN™: Ultimate Ninja® STORM 3 Full Burst", "price": "0.16", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "NARUTO SHIPPUDEN™: Ultimate Ninja® STORM 4", "price": "1.04", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "NARUTO SHIPPUDEN™: Ultimate Ninja® STORM Trilogy", "price": "0.36", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "NBA 2K24 Black Mamba Edition", "price": "25.84", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Narita Boy", "price": "0.31", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Necromunda: Underhive Wars - Gold Edition", "price": "1.17", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Need for Speed™ Unbound Palace Edition", "price": "2.05", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Need for Speed™ Unbound", "price": "1.75", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Neon Abyss Deluxe Edition", "price": "0.41", "flag": "🇦🇷", "date": "16.07", "status": " GOLD" },
  { "name": "Neon Abyss", "price": "0.29", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "New Tales from the Borderlands: Deluxe Edition", "price": "4.55", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Ni no Kuni Wrath of the White Witch™ Remastered", "price": "2.5", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.05", "flag": "🇦🇷", "date": "31.05", "status": "" },
  { "name": "Nordic Adventure Bundle", "price": "2.11", "flag": "🇹🇷", "date": "01.07", "status": " GOLD" },
  { "name": "Nova Lands", "price": "0.3", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "ONE PIECE BURNING BLOOD - Gold Edition", "price": "0.97", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "ONE PIECE ODYSSEY Deluxe Edition", "price": "4.52", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "ONE PIECE World Seeker Deluxe Edition", "price": "1.73", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "ONE PUNCH MAN: A HERO NOBODY KNOWS Deluxe Edition", "price": "0.92", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "OUTRIDERS WORLDSLAYER", "price": "6.86", "flag": "🇦🇷", "date": "16.04", "status": " GOLD" },
  { "name": "OlliOlli World Rad Edition", "price": "4.81", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Onimusha: Warlords", "price": "3.06", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Overcooked! 2 - Gourmet Edition", "price": "0.58", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Overruled!", "price": "0.04", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "PAC-MAN MUSEUM+", "price": "0.65", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "PAC-MAN™ CHAMPIONSHIP EDITION 2", "price": "0.09", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "PAYDAY 2 - CRIMEWAVE EDITION - THE BIG SCORE Game Bundle", "price": "0.52", "flag": "🇦🇷", "date": "01.06", "status": " GOLD" },
  { "name": "PGA TOUR 2K23 Deluxe Edition", "price": "9.34", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Paper Dash - Ghost Hunt", "price": "0.14", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Paperman: Adventure Delivered", "price": "0.3", "flag": "🇦🇷", "date": "04.01", "status": "" },
  { "name": "Park Beyond Visioneer Edition", "price": "8.15", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Party Animals Deluxe Edition", "price": "7.28", "flag": "🇦🇷", "date": "16.01", "status": " GOLD" },
  { "name": "Pathfinder: Kingmaker - Definitive Edition", "price": "0.46", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Penarium", "price": "0.03", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Persona 3 Portable & Persona 4 Golden Bundle", "price": "17.68", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Pets Bundle", "price": "0.67", "flag": "🇦🇷", "date": "01.01", "status": " GOLD" },
  { "name": "Phoenix Point: Behemoth Edition", "price": "0.45", "flag": "🇦🇷", "date": "30.12", "status": " GOLD" },
  { "name": "Phoenix Wright: Ace Attorney Trilogy", "price": "3.65", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Pirates Pinball", "price": "0.03", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Portal Knights - Legendary Edition", "price": "0.33", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Prey®: Digital Deluxe Edition", "price": "7.75", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Project Wingman", "price": "0.23", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Pyro Complete Bundle", "price": "0.7", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "RAD", "price": "0.29", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "RAGE 2", "price": "1.94", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "RAGE 2: Deluxe Edition", "price": "12.24", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "RIDE 4 - Special Edition", "price": "1.36", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "RIDE 4", "price": "0.78", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Raging Justice", "price": "0.1", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Railway Empire 2 - Digital Deluxe Edition", "price": "0.89", "flag": "🇦🇷", "date": "01.06", "status": " GOLD" },
  { "name": "Railway Empire – Complete Collection", "price": "0.45", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Rain World", "price": "0.37", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Rally Rock 'N Racing", "price": "0.09", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Ravenlok", "price": "0.35", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Ravva and the Phantom Library", "price": "3.12", "flag": "🇦🇷", "date": "04.01", "status": "" },
  { "name": "ReCore", "price": "2.6", "flag": "🇦🇷", "date": "", "status": "" },
  { "name": "Red Dead Redemption 2: Ultimate Edition", "price": "2.73", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Regular Factory: Escape Room", "price": "0.11", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Regular Moonstone Pack -- 2,500", "price": "1.87", "flag": "🇦🇷", "date": "01.09", "status": " GOLD" },
  { "name": "Relicta", "price": "0.11", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Remnant II - Deluxe Edition", "price": "5.72", "flag": "🇦🇷", "date": "01.06", "status": " GOLD" },
  { "name": "Remnant II - Ultimate Edition", "price": "7.28", "flag": "🇦🇷", "date": "01.06", "status": " GOLD" },
  { "name": "Remnant: From the Ashes - Complete Edition", "price": "1.56", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Remnant: From the Ashes", "price": "0.43", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Return to Monkey Island", "price": "1.38", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Riders Republic™ Complete Edition", "price": "8.84", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Riders Republic™ Skate Edition", "price": "5.72", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "RimWorld Console Edition - Digital Deluxe", "price": "6.76", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Rise of the Tomb Raider: 20 Year Celebration", "price": "2.1", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "RoboCop: Rogue City - Alex Murphy Edition", "price": "8.83", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Robolifter (For Windows 10)", "price": "0.07", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Rock 'N Racing Bundle", "price": "0.08", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Rock 'N Racing Off Road", "price": "0.15", "flag": "🇦🇷", "date": "06.01", "status": "" },
  { "name": "Rollerdrome", "price": "6.44", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Rust Console Edition - Ultimate", "price": "6.24", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "SCARLET NEXUS Deluxe Edition", "price": "1.04", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "SONIC FORCES™ Digital Standard Edition", "price": "3.4", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "SOULCALIBUR VI Deluxe Edition", "price": "1.46", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "2.22", "flag": "🇦🇷", "date": "01.01", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "1.66", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "STAR WARS™ Battlefront™ II: Celebration Edition", "price": "0.35", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "STAR WARS™ Battlefront™ Ultimate Edition", "price": "0.13", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "SWORD ART ONLINE Alicization Lycoris Deluxe Edition", "price": "1.43", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "SWORD ART ONLINE Last Recollection Deluxe Edition", "price": "13.01", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "SWORD ART ONLINE: FATAL BULLET Complete Edition", "price": "1.53", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Saints Row Gold Edition", "price": "11.82", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Saints Row IV: Re-Elected & Gat out of Hell", "price": "0.08", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Scorn", "price": "1.1", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Scribblenauts Mega Pack", "price": "0.27", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Session: Skate Sim", "price": "0.37", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Shadow of the Tomb Raider Definitive Edition", "price": "1.17", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Shadowblade Odyssey", "price": "0.02", "flag": "🇦🇷", "date": "08.01", "status": "" },
  { "name": "Sherlock Holmes: Crimes and Punishments + Sherlock Holmes...", "price": "0.99", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Shmups Collection", "price": "0.09", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Shootvaders The Beginning", "price": "1.95", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Shotgun Farmers", "price": "0.07", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Shredders - 540INDY Edition", "price": "0.53", "flag": "🇦🇷", "date": "16.03", "status": " GOLD" },
  { "name": "Sid Meier’s Civilization® VI Anthology", "price": "17.65", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Sid Meier’s Civilization® VI Platinum Edition", "price": "11.94", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Skater XL", "price": "0.56", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Skyrim Anniversary Edition + Fallout 4 G.O.T.Y Bundle", "price": "21.76", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Skyrim Anniversary Edition + Fallout 4 G.O.T.Y Bundle", "price": "8.98", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Small Moonstone Pack -- 1,200", "price": "0.93", "flag": "🇦🇷", "date": "01.09", "status": " GOLD" },
  { "name": "Sniper Elite 5 Complete Edition", "price": "1.63", "flag": "🇦🇷", "date": "01.05", "status": " GOLD" },
  { "name": "Sniper Elite 5 Deluxe Edition", "price": "8.32", "flag": "🇦🇷", "date": "01.05", "status": " GOLD" },
  { "name": "Sniper Ghost Warrior 3 Season Pass Edition", "price": "0.15", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Sniper Ghost Warrior Contracts & SGW3 Unlimited Edition", "price": "2.11", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Sniper Ghost Warrior Contracts 1 & 2 Double Pack", "price": "2.73", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Sniper Ghost Warrior Contracts 2 Complete Edition", "price": "2.11", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Sniper Ghost Warrior Contracts 2 Deluxe Arsenal Edition", "price": "1.62", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Sniper Ghost Warrior Contracts Full Arsenal Edition", "price": "1.62", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "SnowRunner - 1-Anniversary Edition", "price": "3.53", "flag": "🇦🇷", "date": "09.01", "status": " GOLD" },
  { "name": "Sonic Colors: Ultimate - Digital Deluxe", "price": "6.38", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Sonic Frontiers", "price": "12.24", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Sonic Mania", "price": "0.83", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Sonic Origins Plus", "price": "18.76", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "South Park™: The Fractured but Whole™", "price": "0.81", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "South Park™: The Stick of Truth ™", "price": "0.15", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Sparkle Bundle", "price": "0.17", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "Speedway Bundle Stock & Truck", "price": "0.22", "flag": "🇦🇷", "date": "05.01", "status": "" },
  { "name": "SteamWorld Build & Dig Bundle", "price": "2.56", "flag": "🇦🇷", "date": "29.02", "status": " GOLD" },
  { "name": "Steelrising - Standard Edition", "price": "2.03", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Stellaris: Console Edition - Deluxe Edition", "price": "0.57", "flag": "🇦🇷", "date": "16.10", "status": " GOLD" },
  { "name": "Strategic Mind: Spectre of Communism", "price": "1.64", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Stray Blade", "price": "1.51", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Street Fighter 30th Anniversary Collection", "price": "3.79", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Strider", "price": "1.72", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Subnautica: Below Zero", "price": "0.18", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Sudden Strike 4 - European Battlefields Edition", "price": "0.28", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Sunset Overdrive Deluxe Edition", "price": "1.89", "flag": "🇹🇷", "date": "01.06", "status": " GOLD" },
  { "name": "Super Space Serpent SE", "price": "0.05", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "THE KING OF FIGHTERS XV Standard Edition", "price": "1.51", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "TT Isle of Man: Ride on the Edge 3", "price": "7.73", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Taiko no Tatsujin: The Drum Master!", "price": "1.3", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Tales of Arise - Beyond the Dawn Deluxe Edition", "price": "38.22", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Tales of Kenzera™: ZAU Standard Edition", "price": "8.19", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Tanks Bundle", "price": "0.18", "flag": "🇦🇷", "date": "07.01", "status": "" },
  { "name": "Tears of Avia", "price": "0.11", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Teenage Mutant Ninja Turtles: Shredder's Revenge - Dimension Shellshock", "price": "0.45", "flag": "🇦🇷", "date": "16.06", "status": " GOLD" },
  { "name": "The Bard's Tale Trilogy", "price": "0.85", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "The Beast Inside (Console Version)", "price": "0.19", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "The Crew™ Motorfest Standard Edition - Cross-Gen Bundle", "price": "24.65", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "The Crew™ Motorfest Standard Edition", "price": "22.1", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "The Dark Pictures Anthology House of Ashes", "price": "0.94", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "The Dark Pictures Anthology: Little Hope", "price": "1.36", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "The Dark Pictures Anthology: Man Of Medan", "price": "1.36", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "The Dark Pictures Anthology: Season One", "price": "4.94", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "The Dark Pictures Anthology: The Devil in Me", "price": "2.66", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "The Disney Afternoon Collection", "price": "1.91", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "The Division 2 - Warlords of New York - Ultimate Edition", "price": "1.56", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "The Division 2 - Warlords of New York Edition", "price": "1.17", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "The Elder Scrolls Online Collection: Necrom", "price": "19.04", "flag": "🇹🇷", "date": "22.06", "status": " GOLD" },
  { "name": "The Elder Scrolls Online Deluxe Collection: Necrom", "price": "24.48", "flag": "🇹🇷", "date": "22.06", "status": " GOLD" },
  { "name": "The Elder Scrolls V: Skyrim Anniversary Edition", "price": "13.06", "flag": "🇹🇷", "date": "30.12", "status": " GOLD" },
  { "name": "The Elder Scrolls® Online", "price": "4.0", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "The Escapists", "price": "0.06", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "The Escapists: Supermax Edition", "price": "0.33", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "The Evil Within Digital Bundle", "price": "2.75", "flag": "🇹🇷", "date": "30.12", "status": " GOLD" },
  { "name": "The Expanse: A Telltale Series - Deluxe Edition", "price": "0.33", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "The Expanse: A Telltale Series", "price": "0.28", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "The FMV Bundle", "price": "0.6", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "The Jackbox Party Quadpack", "price": "0.73", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "The Lamplighters League - Deluxe Edition", "price": "0.82", "flag": "🇦🇷", "date": "01.04", "status": " GOLD" },
  { "name": "The Lord of the Rings: Gollum™ - Precious Edition", "price": "8.27", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "The Outer Worlds: Board-Approved Bundle", "price": "14.66", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "The Quarry - Deluxe Edition", "price": "6.71", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "The Surge 2 - Windows 10", "price": "0.42", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "The Surge 2", "price": "0.81", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "The Walking Dead: A New Frontier", "price": "0.22", "flag": "🇦🇷", "date": "01.11", "status": " GOLD" },
  { "name": "The Walking Dead: Michonne", "price": "0.07", "flag": "🇦🇷", "date": "01.11", "status": " GOLD" },
  { "name": "Thief", "price": "0.04", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "This War of Mine - Complete Edition", "price": "0.4", "flag": "🇦🇷", "date": "16.05", "status": " GOLD" },
  { "name": "This War of Mine: The Little Ones", "price": "0.04", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Three Minutes To Eight", "price": "1.16", "flag": "🇹🇷", "date": "05.01", "status": "" },
  { "name": "Titanfall® 2: Ultimate Edition", "price": "0.16", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Ultimate Edition", "price": "1.43", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint", "price": "0.78", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Tom Clancy's Rainbow Six® Extraction United Bundle", "price": "5.72", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Tom Clancy's Rainbow Six® Siege Operator Edition", "price": "9.36", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Tom Clancy's Rainbow Six® Siege Ultimate Edition", "price": "12.48", "flag": "🇦🇷", "date": "16.06", "status": " GOLD" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands - Standard Edition", "price": "0.6", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Ultimate Edition", "price": "4.94", "flag": "🇦🇷", "date": "01.08", "status": " GOLD" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Year 2 Gold Edition", "price": "2.08", "flag": "🇦🇷", "date": "01.08", "status": " GOLD" },
  { "name": "Tomb Raider I-III Remastered Starring Lara Croft", "price": "6.43", "flag": "🇦🇷", "date": "13.02", "status": "" },
  { "name": "Tomb Raider: Definitive Edition", "price": "0.44", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Tomb Raider: Definitive Survivor Trilogy", "price": "2.05", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Torchlight II", "price": "0.18", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Torchlight III", "price": "0.29", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Tortuga - A Pirate's Tale", "price": "0.45", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Totally Accurate Battle Simulator", "price": "0.26", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Totally Reliable Delivery Service Deluxe Edition", "price": "0.36", "flag": "🇦🇷", "date": "01.12", "status": " GOLD" },
  { "name": "Trailmakers - Space Upgrade", "price": "0.49", "flag": "🇦🇷", "date": "16.02", "status": " GOLD" },
  { "name": "Trailmakers Deluxe Edition", "price": "0.57", "flag": "🇦🇷", "date": "16.02", "status": " GOLD" },
  { "name": "Transport Fever 2: Console Edition - Deluxe", "price": "6.37", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Tropico 5 - Complete Collection", "price": "0.36", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "True Survivors Bundle", "price": "9.95", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Turnip Boy Commits Tax Evasion", "price": "0.09", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Twin Mirror", "price": "0.39", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Two Point Hospital: JUMBO Edition", "price": "0.52", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Two Point Hospital™", "price": "0.91", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "ULTIMATE MARVEL VS. CAPCOM 3", "price": "3.82", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Ultimate Chicken Horse", "price": "0.1", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Under The Waves", "price": "1.43", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "0.18", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Unpacking", "price": "0.18", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Vampire: The Masquerade - Swansong PRIMOGEN EDITION", "price": "1.69", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Vermintide - Digital Value Pack", "price": "0.52", "flag": "🇦🇷", "date": "07.03", "status": "" },
  { "name": "WILD HEARTS™ Karakuri Edition", "price": "6.14", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "WILD HEARTS™ Standard Edition", "price": "4.68", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "0.83", "flag": "🇦🇷", "date": "31.08", "status": "" },
  { "name": "WRC Generations - The FIA WRC Official Game", "price": "2.6", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "WWE 2K23 Deluxe Edition", "price": "25.84", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "War Hospital - Supporter Edition", "price": "6.9", "flag": "🇦🇷", "date": "11.01", "status": "" },
  { "name": "War Hospital", "price": "5.73", "flag": "🇦🇷", "date": "11.01", "status": "" },
  { "name": "Warhammer 40,000: Darktide - Imperial Edition", "price": "5.2", "flag": "🇦🇷", "date": "01.10", "status": " GOLD" },
  { "name": "Warhammer 40,000: Inquisitor - Martyr Ultimate Edition", "price": "0.28", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Warhammer 40,000: Mechanicus", "price": "0.19", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Wasteland 3 (PC) Colorado Collection", "price": "1.87", "flag": "🇦🇷", "date": "01.10", "status": " GOLD" },
  { "name": "Wasteland 3 Colorado Collection", "price": "11.94", "flag": "🇹🇷", "date": "01.10", "status": " GOLD" },
  { "name": "Watch Dogs®2 - Deluxe Edition", "price": "3.53", "flag": "🇦🇷", "date": "16.07", "status": " GOLD" },
  { "name": "Watch Dogs®2 - Gold Edition", "price": "4.16", "flag": "🇦🇷", "date": "16.07", "status": " GOLD" },
  { "name": "Watch Dogs®: Legion", "price": "0.7", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Wavetale", "price": "1.38", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "We Happy Few Digital Deluxe", "price": "1.76", "flag": "🇦🇷", "date": "11.01", "status": " GOLD" },
  { "name": "We Love Katamari REROLL+ Royal Reverie Special Edition", "price": "5.23", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Weedcraft Inc & Moonshine Inc - Risky Business Bundle", "price": "2.37", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Werewolf: The Apocalypse - Earthblood Xbox One", "price": "0.44", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Werewolf: The Apocalypse - Earthblood Xbox Series X|S", "price": "0.44", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Who Pressed Mute on Uncle Marcus?", "price": "0.17", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Wo Long: Fallen Dynasty Digital Deluxe Edition", "price": "9.84", "flag": "🇦🇷", "date": "01.03", "status": " GOLD" },
  { "name": "Wolfenstein II: Standard Edition", "price": "0.68", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Wolfenstein: Alt History Collection", "price": "13.6", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Wolfenstein: The New Order", "price": "0.58", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Wolfenstein: The Old Blood", "price": "0.49", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Wolfenstein: Youngblood Deluxe Edition", "price": "5.95", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Wolfenstein: Youngblood", "price": "1.47", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Wolfenstein® II: The New Colossus™ Digital Deluxe Edition", "price": "8.16", "flag": "🇹🇷", "date": "13.06", "status": " GOLD" },
  { "name": "Wolfenstein® II: The New Colossus™", "price": "0.92", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Wolfenstein®: The Two-Pack", "price": "4.32", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "World War Z: Aftermath - Deluxe Edition", "price": "0.74", "flag": "🇦🇷", "date": "16.01", "status": " GOLD" },
  { "name": "Worms Battlegrounds + Worms W.M.D", "price": "0.16", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Worms Rumble - Digital Deluxe Edition", "price": "0.08", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Wreckfest Complete Edition", "price": "1.25", "flag": "🇦🇷", "date": "16.11", "status": " GOLD" },
  { "name": "X-Force Genesis PC Edition", "price": "0.02", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "X-Force Under Attack", "price": "0.04", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "XCOM® 2 Digital Deluxe Edition", "price": "0.26", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "XCOM® 2", "price": "0.12", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Yakuza: Like a Dragon Hero Edition", "price": "3.53", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Yakuza: Like a Dragon Legendary Hero Edition", "price": "17.92", "flag": "🇹🇷", "date": "01.04", "status": " GOLD" },
  { "name": "Yum Yum Cookstar", "price": "0.07", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "ZERO GUNNER 2-", "price": "1.27", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Zombie Watch", "price": "0.77", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Greenhorn Bundle", "price": "0.6", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Master Hunter Bundle", "price": "0.89", "flag": "🇦🇷", "date": "01.06", "status": " GOLD" },
  { "name": "theHunter: Call of the Wild™ - Seasoned Hunter Bundle", "price": "0.74", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "ŌKAMI HD", "price": "3.82", "flag": "🇦🇷", "date": "16.01", "status": "" },
]

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

function result() {
  const value = Number(input.value) + .1
  const res = value * usd
  const finishRes = res + resSwitсh(input.value)
  const finishResTolyan = res + resSwitсh2(input.value)

  output.innerHTML = floor(finishRes.toFixed())
  output2.innerHTML = floor(finishResTolyan.toFixed()) + 40
}





function resSwitсh(value) {
  let a;

  if (value <= 1) {
    a = 60
  } else if (value > 1 && value <= 5) {
    a = 80
  } else if (value > 5 && value <= 10) {
    a = 130
  } else if (value > 10 && value <= 15) {
    a = 155
  } else if (value > 15 && value <= 20) {
    a = 170
  } else if (value > 20 && value <= 25) {
    a = 220
  } else if (value > 25) {
    a = 250
  }
  return a
}

function resSwitсh2(value) {
  let a;

  if (value <= 1) {
    a = 60
  } else if (value > 1 && value <= 5) {
    a = 80
  } else if (value > 5 && value <= 10) {
    a = 150
  } else if (value > 10 && value <= 15) {
    a = 175
  } else if (value > 15 && value <= 20) {
    a = 190
  } else if (value > 20 && value <= 25) {
    a = 240
  } else if (value > 25) {
    a = 270
  }
  return a
}

input.oninput = result


sortArr.map((a) => {
  const item = document.createElement('li')
  // const arrData = a.data.split('/').reverse('').join('/')
  let res = resultFromList(a.price)
  let flag;
  if (a.flag == '🇦🇷') {
    res = resultFromList(a.price)
    flag = "🇦🇷"
  } else if (a.flag == '🇹🇷') {
    res = resultFromList(a.price)
    flag = "🇹🇷"
  } else {
    res = 'Уточнить стоимость в ЛС'
  }

  item.innerHTML = `${a.name}:${res}&#8381 ${flag} до ${a.date} ${a.status}`
  // 
  list.append(item)
})

function resultFromList(price) {
  const value = Number(price) + .1
  const res = value * usd + 40
  const finishRes = res + resSwitсh2(price)
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



