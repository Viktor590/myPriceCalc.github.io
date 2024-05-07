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
  { "name": "11-11 Memories Retold", "price": "0.62", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "2K Ball N’ Brawl Bundle", "price": "1.43", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "ARCADE GAME SERIES: DIG DUG", "price": "0.18", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "ARCADE GAME SERIES: GALAGA", "price": "0.18", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "ASTRONEER: Evolution Edition", "price": "0.29", "flag": "🇦🇷", "date": "14.05", "status": " GP" },
  { "name": "ATV Drift & Tricks Definitive Edition", "price": "0.25", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Ad Infinitum", "price": "3.06", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Aery - A Journey Beyond Time", "price": "0.1", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Aeterna Noctis", "price": "0.62", "flag": "🇹🇷", "date": "14.05", "status": " GP" },
  { "name": "Age of Empires 25th Anniversary Collection", "price": "1.72", "flag": "🇦🇷", "date": "30.12", "status": " GP" },
  { "name": "Age of Empires: Definitive Collection", "price": "0.7", "flag": "🇦🇷", "date": "05.10", "status": " GP" },
  { "name": "Airborne Bundle", "price": "0.57", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Aircraft Evolution", "price": "0.07", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Ampersat", "price": "0.44", "flag": "🇦🇷", "date": "14.05", "status": " GP" },
  { "name": "Angry Video Game Nerd I & II Deluxe", "price": "0.59", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Anima: Gate of Memories - The Nameless Chronicles", "price": "0.04", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Anno 1800™ Console Edition", "price": "2.81", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Anuchard", "price": "0.8", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Arcade Paradise | High Score Edition", "price": "0.4", "flag": "🇦🇷", "date": "01.07", "status": " GP" },
  { "name": "As Dusk Falls", "price": "1.11", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Assassin's Creed® Bundle: Assassin's Creed® Valhalla, Ass...", "price": "39.68", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin's Creed® Odyssey - DELUXE EDITION", "price": "17.36", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "Assassin's Creed® Odyssey - ULTIMATE EDITION", "price": "22.94", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Assassin's Creed® Origins - DELUXE EDITION", "price": "16.74", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "Assassin's Creed® Origins - GOLD EDITION", "price": "19.84", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Assassin's Creed® Syndicate Gold Edition", "price": "0.94", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Assassin's Creed® The Ezio Collection", "price": "1.63", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "Assassin's Creed® Valhalla Complete Edition", "price": "24.8", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla Ragnarök Edition", "price": "14.88", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin’s Creed® Valhalla + Immortals Fenyx Rising™ Bundle", "price": "62.0", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin’s Creed® Valhalla + Watch Dogs®: Legion Bundle", "price": "6.06", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "Atomic Heart - Premium Edition", "price": "17.0", "flag": "🇦🇷", "date": "13.05", "status": " GP" },
  { "name": "Avatar: Frontiers of Pandora Deluxe Edition", "price": "29.76", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "Avatar: Frontiers of Pandora™", "price": "26.97", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "Aven Colony", "price": "0.37", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Awarded Platformer Bundle", "price": "0.21", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Awesome Pea 3 (Xbox Series X|S)", "price": "0.07", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Awesome Pea 3", "price": "0.07", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "BATTLETECH Mercenary Collection", "price": "1.29", "flag": "🇦🇷", "date": "13.06", "status": " GP" },
  { "name": "Back 4 Blood", "price": "0.62", "flag": "🇦🇷", "date": "13.05", "status": "" },
  { "name": "Banishers: Ghosts of New Eden", "price": "21.0", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Basketball Pinball", "price": "0.03", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Batman: Arkham Knight Premium Edition", "price": "1.75", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Batman: Return to Arkham", "price": "0.31", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Batman™: Arkham Knight", "price": "0.27", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Before We Leave", "price": "0.62", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Beyond Doors", "price": "0.26", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "Big Moonstone Pack -- 5,500", "price": "3.6", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Bite the Bullet", "price": "1.37", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Blackwind", "price": "0.07", "flag": "🇦🇷", "date": "14.05", "status": " GP" },
  { "name": "Blaze and the Monster Machines: Axle City Racers", "price": "2.12", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Bleeding Edge", "price": "0.26", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "Blightbound", "price": "0.09", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Blood Bowl 3", "price": "2.81", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Borderlands 3", "price": "2.13", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "Borderlands 3: Super Deluxe Edition", "price": "4.41", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "Borderlands Collection: Pandora's Box", "price": "27.61", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "Borderlands Legendary Collection", "price": "3.46", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "Borderlands: Game of the Year Edition", "price": "0.59", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Broforce", "price": "0.05", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Broken Age", "price": "0.06", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Broken Age", "price": "0.08", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Bud Spencer & Terence Hill - Slaps And Beans", "price": "0.05", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Builder Flipper bundle", "price": "0.61", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Call of Cthulhu", "price": "0.49", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Call of the Wild: The Angler™ - Gold Fishing Bundle", "price": "0.71", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Call of the Wild: The Angler™ - Silver Fishing Bundle", "price": "0.57", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Call of the Wild: The Angler™ - Ultimate Fishing Bundle", "price": "0.86", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Candle Knight", "price": "0.18", "flag": "🇦🇷", "date": "17.05", "status": "" },
  { "name": "Carnival Games®", "price": "0.37", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Cars 3: Driven to Win", "price": "0.28", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Cassette Beasts: Deluxe Edition", "price": "0.37", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Cat Quest II", "price": "0.07", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Child of Light", "price": "0.06", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Child of Light® Ultimate Edition", "price": "0.11", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Chivalry 2 King's Edition", "price": "0.86", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "Chivalry 2 Special Edition", "price": "0.71", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "Cities: Skylines - Mayor's Edition", "price": "0.75", "flag": "🇦🇷", "date": "13.05", "status": " GP" },
  { "name": "Cities: Skylines - Premium Edition 2", "price": "1.0", "flag": "🇦🇷", "date": "01.04", "status": " GP" },
  { "name": "Clash - Zeno Edition", "price": "4.31", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Commandos 2 & 3 – HD Remaster Double Pack", "price": "0.54", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Conan Chop Chop", "price": "0.35", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Conan Exiles - Complete Edition October 2021", "price": "2.3", "flag": "🇦🇷", "date": "16.08", "status": " GP" },
  { "name": "Conan Exiles - Isle of Siptah Edition", "price": "0.99", "flag": "🇦🇷", "date": "16.08", "status": " GP" },
  { "name": "CorpoNation: The Sorting Process", "price": "0.21", "flag": "🇦🇷", "date": "09.05", "status": "" },
  { "name": "Crackdown 3", "price": "1.33", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "Crimson Dragon", "price": "0.05", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Crowalt: Traces of the Lost Colony", "price": "0.04", "flag": "🇦🇷", "date": "14.05", "status": " GP" },
  { "name": "Crusader Kings III: Royal Edition", "price": "1.07", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "D4: Dark Dreams Don't Die", "price": "0.05", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "DAS WIRED-HORROR-SPIELPAKET", "price": "0.57", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "DC League of Super-Pets: The Adventures of Krypto and Ace", "price": "1.49", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "DEAD ISLAND 2 DELUXE EDITION", "price": "18.58", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "DEAD ISLAND 2 GOLD EDITION", "price": "22.3", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "DEATHLOOP Deluxe Edition", "price": "16.12", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "DIRT 5 Year One Edition", "price": "1.29", "flag": "🇦🇷", "date": "10.08", "status": " GP" },
  { "name": "DOOM Eternal Deluxe Edition", "price": "14.88", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "DOOM Slayers Collection", "price": "3.35", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "DRAGON BALL XENOVERSE 2 - Special Edition", "price": "13.93", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "Darkest Dungeon®: Ancestral Edition", "price": "0.4", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Dead Cells: Medley of Pain Bundle", "price": "0.57", "flag": "🇦🇷", "date": "16.09", "status": " GP" },
  { "name": "Dead Cells: Return to Castlevania Bundle", "price": "0.45", "flag": "🇦🇷", "date": "16.09", "status": " GP" },
  { "name": "Dead Ground", "price": "0.06", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Deep Rock Galactic - Deluxe Edition", "price": "0.57", "flag": "🇦🇷", "date": "01.11", "status": " GP" },
  { "name": "Deep Rock Galactic - Ultimate Edition", "price": "0.71", "flag": "🇦🇷", "date": "01.11", "status": " GP" },
  { "name": "Deep Sky Derelicts: Definitive edition", "price": "0.09", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Diablo® IV - Digital Deluxe Edition", "price": "45.36", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Diablo® IV - Standard Edition", "price": "35.19", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Diablo® IV - Ultimate Edition", "price": "50.12", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Dinobreak Killer Crisis Collection", "price": "0.49", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Disciples: Liberation", "price": "2.5", "flag": "🇦🇷", "date": "14.05", "status": " GP" },
  { "name": "Dishonored & Prey: The Arkane Collection", "price": "15.5", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "Dishonored®: Death of the Outsider™ Deluxe Bundle", "price": "12.34", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "Disintegration", "price": "1.83", "flag": "🇹🇷", "date": "14.05", "status": " GP" },
  { "name": "Disney Dreamlight Valley: A Rift in Time", "price": "0.54", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Disneyland Adventures", "price": "0.58", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "Doughlings: Arcade", "price": "0.03", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Dragon Pinball", "price": "0.03", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "DreamWorks Spirit Lucky's Big Adventure", "price": "2.19", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Dungeons 4 - Digital Deluxe Edition", "price": "14.0", "flag": "🇦🇷", "date": "16.11", "status": " GP" },
  { "name": "Dying Light: Definitive Edition", "price": "5.63", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "Enter The Gungeon", "price": "0.08", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Escape Academy Deluxe Edition", "price": "0.5", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Escape Dead Island", "price": "0.05", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "F1® Manager 2023 Deluxe Edition", "price": "15.0", "flag": "🇦🇷", "date": "16.10", "status": " GP" },
  { "name": "FAR CRY 4 GOLD EDITION", "price": "0.22", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "FAR CRY ANTHOLOGY BUNDLE", "price": "12.4", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "FOR HONOR – Gold Edition", "price": "24.8", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "FOR HONOR – Ultimate Edition", "price": "39.68", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "Fallout 1st", "price": "0.17", "flag": "🇦🇷", "date": "", "status": "" },
  { "name": "Fallout 4: Game of the Year Edition (PC)", "price": "7.07", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "Fallout 4: Game of the Year Edition", "price": "7.07", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "Fallout 76: Atlantic City - Boardwalk Paradise Deluxe Edition", "price": "12.0", "flag": "🇦🇷", "date": "30.12", "status": " GP" },
  { "name": "Far Cry Primal", "price": "0.44", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Far Cry® 5 + Far Cry® New Dawn Deluxe Edition Bundle", "price": "0.66", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Far Cry® 5", "price": "0.43", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Far Cry® 6 Deluxe Edition", "price": "19.22", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Far Cry® 6 Game of the Year Edition", "price": "23.56", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Far Cry® 6 Gold Edition", "price": "19.84", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Far Cry® New Dawn", "price": "0.37", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Far Cry®5 Gold Edition", "price": "3.3", "flag": "🇦🇷", "date": "01.07", "status": " GP" },
  { "name": "Farm Bundle", "price": "0.57", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Farm Pets Bundle", "price": "0.86", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Fell Seal: Arbiter's Mark", "price": "0.13", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Flailing Limbs Bundle", "price": "0.25", "flag": "🇦🇷", "date": "01.08", "status": " GP" },
  { "name": "Flockers", "price": "0.14", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Forza Horizon 4 Expansions Bundle", "price": "2.81", "flag": "🇦🇷", "date": "02.10", "status": " GP" },
  { "name": "Forza Horizon 5 PLUS Hot Wheels Bundle", "price": "10.8", "flag": "🇦🇷", "date": "30.12", "status": " GP" },
  { "name": "From Heaven To Earth", "price": "0.07", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Frostpunk: Complete Collection", "price": "0.64", "flag": "🇦🇷", "date": "16.07", "status": " GP" },
  { "name": "Fueled Up", "price": "0.18", "flag": "🇦🇷", "date": "14.05", "status": " GP" },
  { "name": "Funtasia", "price": "0.09", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Gangs of Sherwood – Lionheart Edition", "price": "3.69", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Garden Bundle", "price": "0.64", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Garden Life", "price": "10.83", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "Gears of War 4 and Halo 5: Guardians Bundle", "price": "0.4", "flag": "🇦🇷", "date": "31.01", "status": " GP" },
  { "name": "Gears of War 4", "price": "0.39", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "Gears of War Ultimate Edition Deluxe Version", "price": "1.3", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Generation Zero ® - Silver Bundle", "price": "0.71", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Generation Zero ® - Ultimate Bundle", "price": "1.0", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Generation Zero® - Gold Bundle", "price": "0.86", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Genesis Alpha One", "price": "0.09", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Get Even", "price": "0.19", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Ghostwire: Tokyo Deluxe Edition", "price": "19.22", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Goat Simulator 3 - Digital Downgrade Edition", "price": "2.0", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Goat Simulator: The GOATY", "price": "0.3", "flag": "🇦🇷", "date": "01.08", "status": " GP" },
  { "name": "Goat Simulator: Waste Of Space Bundle", "price": "0.14", "flag": "🇦🇷", "date": "01.08", "status": " GP" },
  { "name": "Going Under", "price": "0.28", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Golf With Your Friends - Starter Edition", "price": "18.0", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Golf With Your Friends - Ultimate Edition", "price": "33.46", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Gotham Knights", "price": "2.0", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Guilty Gear -Strive- Daredevil Edition", "price": "7.09", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "HITMAN™ 2", "price": "1.57", "flag": "🇦🇷", "date": "04.02", "status": "" },
  { "name": "Halo 5: Guardians – Digital Deluxe Edition", "price": "6.5", "flag": "🇦🇷", "date": "31.05", "status": " GP" },
  { "name": "Halo Wars 2: Complete Edition", "price": "24.8", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "HammerHelm", "price": "0.16", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Hellblade: Senua's Sacrifice", "price": "0.27", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "Hello Neighbor 2 Deluxe Edition", "price": "5.5", "flag": "🇦🇷", "date": "16.12", "status": " GP" },
  { "name": "Hi-Fi RUSH Deluxe Edition", "price": "14.88", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Hi-Fi RUSH", "price": "8.97", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "Hidden Cats in New York", "price": "0.04", "flag": "🇦🇷", "date": "08.05", "status": "" },
  { "name": "Hogwarts Legacy Xbox One Version", "price": "12.38", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "Hogwarts Legacy Xbox Series X|S Version", "price": "13.93", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "Hotel: A Resort Simulator", "price": "4.38", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Huge Moonstone Pack -- 14,500", "price": "9.0", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Hypnospace Outlaw & Slayers X: Terminal Aftermath: Vengance of the Slayer Bundle", "price": "0.48", "flag": "🇦 🇷", "date": "01.06", "status": " GP" },
  { "name": "I Hate Running Backwards", "price": "0.02", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "I, AI", "price": "0.09", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "INSIDE & LIMBO Bundle", "price": "2.52", "flag": "🇦🇷", "date": "01.08", "status": " GP" },
  { "name": "Immortals Fenyx Rising™ Gold Edition", "price": "35.96", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "Infinite - Beyond The Mind", "price": "0.03", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Injustice™ 2 - Legendary Edition", "price": "1.9", "flag": "🇦🇷", "date": "01.07", "status": " GP" },
  { "name": "Injustice™ 2", "price": "0.19", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Insurgency: Sandstorm - Deluxe Edition", "price": "17.0", "flag": "🇦🇷", "date": "13.05", "status": " GP" },
  { "name": "Insurgency: Sandstorm - Gold Edition", "price": "25.0", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Insurgency: Sandstorm - Ultimate Edition", "price": "29.0", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Iris and the Giant Deluxe Soundtrack Edition", "price": "0.75", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "JUJU", "price": "0.05", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Jack Move", "price": "1.06", "flag": "🇦🇷", "date": "14.05", "status": " GP" },
  { "name": "JackQuest", "price": "0.04", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "JoJo Siwa: Worldwide Party", "price": "1.49", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Jurassic World Evolution 2: Deluxe Edition", "price": "7.0", "flag": "🇦🇷", "date": "16.05", "status": " GP" },
  { "name": "Jurassic World Evolution 2: Dominion Bundle", "price": "13.0", "flag": "🇦🇷", "date": "16.05", "status": " GP" },
  { "name": "Just Cause 3", "price": "0.17", "flag": "🇦🇷", "date": "09.05", "status": "" },
  { "name": "Just Cause 3: XXL Edition", "price": "0.24", "flag": "🇦🇷", "date": "09.05", "status": "" },
  { "name": "Just Cause 4 - Complete Edition", "price": "5.0", "flag": "🇦🇷", "date": "09.05", "status": " GP" },
  { "name": "Just Cause 4 - Gold Edition", "price": "4.0", "flag": "🇦🇷", "date": "09.05", "status": " GP" },
  { "name": "Just Cause 4: Reloaded", "price": "0.52", "flag": "🇦🇷", "date": "09.05", "status": "" },
  { "name": "KLONOA Phantasy Reverie Series", "price": "3.25", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "Katamari Damacy REROLL", "price": "1.7", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "Kerbal Space Program Enhanced Edition", "price": "1.37", "flag": "🇹🇷", "date": "14.05", "status": " GP" },
  { "name": "Killer Instinct: Anniversary Edition", "price": "6.0", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Krut: The Mythic Wings", "price": "0.03", "flag": "🇦🇷", "date": "14.05", "status": " GP" },
  { "name": "Kung Fu Fighting", "price": "0.02", "flag": "🇦🇷", "date": "11.05", "status": "" },
  { "name": "KungFu Kickball", "price": "0.06", "flag": "🇦🇷", "date": "14.05", "status": " GP" },
  { "name": "LEGO Marvel Super Heroes", "price": "0.14", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "LEGO® 2K Drive for Xbox One", "price": "15.09", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "LEGO® Batman™ 3: Beyond Gotham", "price": "0.17", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "LEGO® CITY Undercover", "price": "0.25", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "LEGO® DC Super-Villains", "price": "0.24", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "LEGO® Marvel Super Heroes 2", "price": "0.3", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "LEGO® Marvel's Avengers", "price": "0.34", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "LEGO® STAR WARS™: The Force Awakens", "price": "0.28", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "LEGO® Star Wars™: The Skywalker Saga", "price": "5.0", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "LEGO® The Hobbit™", "price": "0.41", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Let's Build a Zoo & Dinosaur DLC Bundle", "price": "0.38", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "Let's Build a Zoo: Aquarium Odyssey Bundle", "price": "0.38", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "Let's Build a Zoo: Ultimate Bundle", "price": "0.48", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "Let's Sing 2023 Platinum Edition", "price": "11.25", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Let's Sing 2023", "price": "4.94", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Let's Sing 2024 with International Hits", "price": "12.25", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Let's Sing 2024 with International Hits", "price": "13.12", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Let's Sing 2024 with International Hits", "price": "16.89", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Let's Sing ABBA", "price": "7.44", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "Life of Fly 2", "price": "0.1", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Light & Dark Bundle", "price": "2.0", "flag": "🇦🇷", "date": "02.11", "status": "" },
  { "name": "Listeria Wars", "price": "0.06", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Little Nightmares Complete Edition", "price": "1.57", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Little Nightmares II", "price": "4.59", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "Lonely Mountains: Downhill - Eldfjall Island", "price": "0.33", "flag": "🇦🇷", "date": "01.11", "status": " GP" },
  { "name": "Luxury Garden Bundle", "price": "0.86", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "MASSIVE CHALICE", "price": "0.07", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "MINIT", "price": "0.03", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "MLB® The Show™ 24 - Digital Deluxe Edition", "price": "27.9", "flag": "🇹🇷", "date": "17.06", "status": " GP" },
  { "name": "MLB® The Show™ 24 - MVP Edition", "price": "23.71", "flag": "🇹🇷", "date": "17.06", "status": " GP" },
  { "name": "MLB® The Show™ 24 - Xbox One Standard Edition", "price": "16.74", "flag": "🇹🇷", "date": "17.06", "status": " GP" },
  { "name": "MLB® The Show™ 24 - Xbox Series X|S Standard Edition", "price": "37.12", "flag": "🇦🇷", "date": "17.06", "status": " GP" },
  { "name": "MONOPOLY DEAL", "price": "0.01", "flag": "🇦🇷", "date": "13.05", "status": "" },
  { "name": "MONOPOLY FAMILY FUN PACK", "price": "0.06", "flag": "🇦🇷", "date": "13.05", "status": "" },
  { "name": "MX vs ATV Legends", "price": "12.5", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "MXGP 2019 - The Official Motocross Videogame", "price": "0.19", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "MY HERO ONE'S JUSTICE 2", "price": "5.8", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "Mafia: Definitive Edition", "price": "2.01", "flag": "🇹🇷", "date": "14.05", "status": " GP" },
  { "name": "Mafia: Trilogy", "price": "3.83", "flag": "🇹🇷", "date": "14.05", "status": " GP" },
  { "name": "Maneater Apex Edition", "price": "0.89", "flag": "🇦🇷", "date": "", "status": "" },
  { "name": "Masters of Anima", "price": "0.12", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Matchpoint - Tennis Championships", "price": "3.94", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Max: The Curse of Brotherhood", "price": "0.3", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "MechWarrior 5: Mercenaries - JumpShip Edition", "price": "0.86", "flag": "🇦🇷", "date": "30.12", "status": " GP" },
  { "name": "Mediterranea Inferno", "price": "0.12", "flag": "🇦🇷", "date": "14.05", "status": " GP" },
  { "name": "Metro Simulator 2", "price": "0.28", "flag": "🇦🇷", "date": "09.05", "status": "" },
  { "name": "MiceGard (Windows)", "price": "0.14", "flag": "🇦🇷", "date": "17.05", "status": "" },
  { "name": "MiceGard", "price": "0.14", "flag": "🇦🇷", "date": "17.05", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.0", "flag": "🇦🇷", "date": "30.11", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.0", "flag": "🇹🇷", "date": "01.06", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.0", "flag": "🇦🇷", "date": "30.11", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.0", "flag": "🇹🇷", "date": "01.06", "status": "" },
  { "name": "Middle-earth™: Shadow of War™ Definitive Edition", "price": "2.0", "flag": "🇦🇷", "date": "16.07", "status": " GP" },
  { "name": "Middle-earth™: Shadow of War™", "price": "0.17", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Mighty Mage", "price": "0.06", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle - Windows 10", "price": "1.57", "flag": "🇹🇷", "date": "27.07", "status": " GP" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle", "price": "1.57", "flag": "🇹🇷", "date": "27.07", "status": " GP" },
  { "name": "Monster Energy Supercross - The Official Videogame 3", "price": "0.47", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Monster Energy Supercross 3 - Special Edition", "price": "0.84", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Moonlighter: Complete Edition", "price": "0.34", "flag": "🇦🇷", "date": "13.05", "status": " GP" },
  { "name": "Moonrise Fall", "price": "0.04", "flag": "🇦🇷", "date": "14.05", "status": " GP" },
  { "name": "Mortal Kombat 11 Ultimate + Injustice 2 Leg. Edition Bundle", "price": "21.3", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Mortal Kombat 11 Ultimate", "price": "9.9", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Mortal Kombat 11", "price": "0.28", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Mortal Kombat X", "price": "0.34", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Mortal Kombat™ 1 Premium Edition", "price": "32.5", "flag": "🇦🇷", "date": "13.05", "status": "" },
  { "name": "Mr. DRILLER DrillLand", "price": "0.28", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "My Friend Peppa Pig - Complete Edition", "price": "5.5", "flag": "🇦🇷", "date": "16.07", "status": " GP" },
  { "name": "My Friend Peppa Pig", "price": "2.12", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "My Time at Portia Deluxe Edition", "price": "1.4", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "NARUTO SHIPPUDEN™: Ultimate Ninja® STORM Trilogy", "price": "1.55", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "NBA 2K Playgrounds 2", "price": "0.31", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "NBA 2K24 Baller Edition", "price": "43.38", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "NBA 2K24 Black Mamba Edition", "price": "47.12", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "Necromunda: Underhive Wars - Gold Edition", "price": "3.35", "flag": "🇹🇷", "date": "14.05", "status": " GP" },
  { "name": "Neon Abyss Deluxe Edition", "price": "0.4", "flag": "🇦🇷", "date": "16.07", "status": " GP" },
  { "name": "Neon Chrome", "price": "0.07", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "New Tales from the Borderlands", "price": "3.5", "flag": "🇦🇷", "date": "14.05", "status": " GP" },
  { "name": "Ni no Kuni™ II: Revenant Kingdom - The Prince's Edition", "price": "3.56", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Nine Witches: Family Disruption", "price": "0.06", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.04", "flag": "🇦🇷", "date": "30.05", "status": "" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "4.22", "flag": "🇹🇷", "date": "16.03", "status": " GP" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "4.6", "flag": "🇦🇷", "date": "16.03", "status": " GP" },
  { "name": "Nordic Adventure Bundle", "price": "1.92", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "ONE PIECE World Seeker", "price": "1.12", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "ONE PIECE: PIRATE WARRIORS 4 Deluxe Edition(Xbox One)", "price": "7.75", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "One Gun Guy", "price": "0.02", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "One Piece: Burning Blood", "price": "0.77", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "Orcs Must Die! 3 Bundle", "price": "2.82", "flag": "🇹🇷", "date": "16.04", "status": " GP" },
  { "name": "Ori and the Blind Forest: Definitive Edition", "price": "2.75", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Outbreak: Complete Collection", "price": "0.29", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Outbreak: Endless Nightmares", "price": "0.09", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Outbreak: Epidemic", "price": "0.02", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Overcooked! 2 - Gourmet Edition", "price": "0.56", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Overcooked: Gourmet Edition", "price": "0.44", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "Overpass 2", "price": "4.37", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "PAW Patrol The Movie: Adventure City Calls", "price": "2.12", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "PAW Patrol: Grand Prix - Complete Edition", "price": "4.5", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "Paw Patrol: On a Roll", "price": "2.19", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Pets Bundle", "price": "0.64", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Phoenix Point: Behemoth Edition", "price": "0.43", "flag": "🇦🇷", "date": "30.12", "status": " GP" },
  { "name": "Pikuniku", "price": "0.06", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Pillars of Eternity: Complete Edition", "price": "2.02", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "Pool Slide Story", "price": "0.19", "flag": "🇦🇷", "date": "16.05", "status": "" },
  { "name": "PowerWash Simulator", "price": "2.9", "flag": "🇦🇷", "date": "09.05", "status": "" },
  { "name": "Praetorians - HD Remaster", "price": "0.87", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Prey®: Digital Deluxe Edition", "price": "7.07", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "Prison City", "price": "0.14", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Pure Chase 80's", "price": "0.18", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Quantum Break", "price": "0.24", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Quantum Break", "price": "4.09", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "RAD", "price": "0.46", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "RAGE 2: Deluxe Edition", "price": "11.16", "flag": "🇹🇷", "date": "14.11", "status": " GP" },
  { "name": "RESIDENT EVIL 2 Deluxe Edition", "price": "24.8", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Railway Empire 2 - Digital Deluxe Edition", "price": "0.86", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Raji: An Ancient Epiс", "price": "0.55", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Rayman Legends", "price": "0.25", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "ReCore", "price": "2.5", "flag": "🇦🇷", "date": "", "status": "" },
  { "name": "Ready, Steady, Ship!", "price": "0.21", "flag": "🇦🇷", "date": "17.05", "status": "" },
  { "name": "Redfall Bite Back Edition", "price": "39.68", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Regular Moonstone Pack -- 2,500", "price": "1.8", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Remnant II - Deluxe Edition", "price": "5.5", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Remnant II - Ultimate Edition", "price": "7.0", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "Remnant: From the Ashes - Complete Edition", "price": "1.5", "flag": "🇦🇷", "date": "01.12", "status": " GP" },
  { "name": "Riders Republic™ Complete Edition", "price": "16.27", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "Riders Republic™ Skate Edition", "price": "9.3", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "Rise of Nations: Extended Edition", "price": "0.82", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "River City Girls 2", "price": "2.47", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "River City Girls Zero", "price": "0.16", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "River City Girls", "price": "0.27", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "RoboCop: Rogue City - Alex Murphy Edition", "price": "7.28", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Roguebook - Deluxe Edition Xbox Series X|S & Xbox One", "price": "0.12", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Ryan's Rescue Squad", "price": "1.7", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Ryse: Legendary Edition", "price": "1.79", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "2.14", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "1.6", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "SUPERHOT ONE OF US BUNDLE", "price": "0.67", "flag": "🇦🇷", "date": "01.04", "status": " GP" },
  { "name": "Safari Pinball", "price": "0.03", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "ScreamRide", "price": "0.09", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "ScreamRide", "price": "0.85", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "Scribblenauts Showdown", "price": "0.15", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Ship of Fools", "price": "8.99", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "Shmups Collection", "price": "0.08", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Sid Meier's Civilization VI", "price": "1.2", "flag": "🇹🇷", "date": "14.05", "status": " GP" },
  { "name": "Sir Lovelot", "price": "0.02", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Skul: The Hero Slayer", "price": "0.18", "flag": "🇦🇷", "date": "14.05", "status": " GP" },
  { "name": "Skull and Bones Deluxe Edition", "price": "24.8", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "Skyrim Anniversary Edition + Fallout 4 G.O.T.Y Bundle", "price": "19.84", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Sleeping Dogs™ Definitive Edition", "price": "0.19", "flag": "🇦🇷", "date": "09.05", "status": "" },
  { "name": "Slime Ranger", "price": "0.26", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "Small Moonstone Pack -- 1,200", "price": "0.9", "flag": "🇦🇷", "date": "01.09", "status": " GP" },
  { "name": "Sniper Elite 5 Complete Edition", "price": "1.57", "flag": "🇦🇷", "date": "01.05", "status": " GP" },
  { "name": "Sniper Elite 5 Deluxe Edition", "price": "8.0", "flag": "🇦🇷", "date": "01.05", "status": " GP" },
  { "name": "Sniper Ghost Warrior Contracts 2", "price": "1.25", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Sniper Ghost Warrior Contracts", "price": "1.0", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "SnowRunner - 1-Anniversary Edition", "price": "7.44", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "SnowRunner - 2-Year Anniversary Edition", "price": "32.24", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "SnowRunner - 3-Year Anniversary Edition", "price": "39.68", "flag": "🇹🇷", "date": "13.05", "status": " GP" },
  { "name": "SnowRunner - 4-Year Anniversary Edition", "price": "47.12", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Space Engineers: Ultimate Edition 2023", "price": "1.06", "flag": "🇦🇷", "date": "01.03", "status": " GP" },
  { "name": "Sparkle Bundle", "price": "0.16", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "SpellForce III Reforced", "price": "15.62", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Starward Rogue: Complete Edition", "price": "1.22", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "State of Decay: Year-One Survival Edition", "price": "1.55", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "SteamWorld Build & Dig Bundle", "price": "2.19", "flag": "🇦🇷", "date": "01.12", "status": " GP" },
  { "name": "SteamWorld Build Deluxe Edition", "price": "0.47", "flag": "🇦🇷", "date": "01.12", "status": " GP" },
  { "name": "Stellaris: Console Edition - Deluxe Edition", "price": "0.55", "flag": "🇦🇷", "date": "16.10", "status": " GP" },
  { "name": "Strategic Mind: Spectre of Communism", "price": "1.31", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Summum Aeterna", "price": "1.05", "flag": "🇹🇷", "date": "14.05", "status": " GP" },
  { "name": "Sunset Overdrive Deluxe Edition", "price": "1.72", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "Sunset Overdrive", "price": "0.38", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "TRIVIAL PURSUIT Live! 2", "price": "0.62", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Tales from Candleforth", "price": "1.14", "flag": "🇦🇷", "date": "15.05", "status": "" },
  { "name": "Tales of ARISE + SCARLET NEXUS バンドル", "price": "37.18", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Tales of Arise - Beyond The Dawn Ultimate Edition", "price": "44.62", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Tales of Arise - Beyond the Dawn Edition", "price": "27.26", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Tales of Symphonia Remastered", "price": "6.18", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "Tanks Bundle", "price": "0.18", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Tardy", "price": "0.14", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Taxi Life - Supporter Edition", "price": "4.73", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Teenage Mutant Ninja Turtles: Shredder's Revenge - Dimension Shellshock", "price": "0.43", "flag": "🇦🇷", "date": "16.06", "status": " GP" },
  { "name": "Tenderfoot Tactics", "price": "0.21", "flag": "🇦🇷", "date": "14.05", "status": " GP" },
  { "name": "Tesla Force", "price": "0.11", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "The Bard's Tale ARPG : Remastered and Resnarkled", "price": "0.2", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "The Bard's Tale IV: Director's Cut", "price": "0.14", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "The Bard's Tale Trilogy", "price": "0.19", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "The Crew® 2", "price": "0.62", "flag": "🇦🇷", "date": "14.05", "status": " GP" },
  { "name": "The Crew™ Motorfest Standard Edition - Cross-Gen Bundle", "price": "22.48", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "The Crew™ Motorfest Standard Edition", "price": "20.15", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "The Elder Scrolls Online Collection: Gold Road", "price": "27.0", "flag": "🇦🇷", "date": "30.11", "status": " GP" },
  { "name": "The Elder Scrolls Online Collection: Necrom", "price": "21.0", "flag": "🇦🇷", "date": "18.06", "status": " GP" },
  { "name": "The Elder Scrolls Online Deluxe Collection: Gold Road", "price": "35.2", "flag": "🇦🇷", "date": "30.11", "status": " GP" },
  { "name": "The Elder Scrolls Online Deluxe Collection: Necrom", "price": "31.8", "flag": "🇦🇷", "date": "18.06", "status": " GP" },
  { "name": "The Elder Scrolls V: Skyrim Anniversary Edition", "price": "11.9", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Escapists: Supermax Edition", "price": "0.31", "flag": "🇦🇷", "date": "29.04", "status": "" },
  { "name": "The Escapists: The Walking Dead", "price": "0.06", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "The Evil Within Digital Bundle", "price": "2.51", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Great Perhaps", "price": "0.05", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "The Gunk", "price": "0.16", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "The Jackbox Party Quadpack", "price": "0.7", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "The LEGO Movie Videogame", "price": "0.14", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "The Lamplighters League - Deluxe Edition", "price": "0.78", "flag": "🇦🇷", "date": "01.04", "status": " GP" },
  { "name": "The Last Hero of Nostalgaia Deluxe Edition", "price": "0.27", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "The Last Kids on Earth and the Staff of Doom", "price": "2.19", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "The Manga Works", "price": "0.19", "flag": "🇦🇷", "date": "16.05", "status": "" },
  { "name": "The Outer Worlds: Board-Approved Bundle", "price": "13.37", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Quarry - Deluxe Edition", "price": "19.57", "flag": "🇹🇷", "date": "16.12", "status": " GP" },
  { "name": "The Surge 2 - Windows 10", "price": "0.41", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "The Surge 2", "price": "0.78", "flag": "🇦🇷", "date": "14.05", "status": " GP" },
  { "name": "The Walking Dead: A New Frontier", "price": "0.21", "flag": "🇦🇷", "date": "01.11", "status": " GP" },
  { "name": "The Walking Dead: Michonne", "price": "0.07", "flag": "🇦🇷", "date": "01.11", "status": " GP" },
  { "name": "This War of Mine - Complete Edition", "price": "0.38", "flag": "🇦🇷", "date": "16.05", "status": " GP" },
  { "name": "Tiny Tina's Assault on Dragon Keep: A Wonderlands One-sho...", "price": "0.55", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Tiny Tina's Wonderlands", "price": "4.64", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "Tiny Tina's Wonderlands: Chaotic Great Edition", "price": "4.95", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "Tiny Tina's Wonderlands: Next-Level Edition", "price": "5.42", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Ultimate Edition", "price": "1.37", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Tom Clancy's Rainbow Six® Extraction United Bundle", "price": "5.5", "flag": "🇦🇷", "date": "16.06", "status": " GP" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands - Standard Edition", "price": "0.57", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Ultimate Edition", "price": "5.94", "flag": "🇦🇷", "date": "", "status": "" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Year 2 Gold Edition", "price": "2.0", "flag": "🇦🇷", "date": "01.08", "status": " GP" },
  { "name": "Tom Clancy’s Rainbow Six Siege Operator Edition", "price": "32.24", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Tom Clancy’s Rainbow Six Siege Ultimate Edition", "price": "39.68", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Tom Clancy’s Rainbow Six® Extraction Deluxe Edition", "price": "1.87", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Tomb Raider: Definitive Survivor Trilogy", "price": "8.51", "flag": "🇦🇷", "date": "16.04", "status": " GP" },
  { "name": "Torment: Tides of Numenera", "price": "0.41", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Totally Reliable Delivery Service Deluxe Edition", "price": "0.34", "flag": "🇦🇷", "date": "01.12", "status": " GP" },
  { "name": "Trackmania® Turbo", "price": "0.1", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Trailmakers - Space Upgrade", "price": "0.47", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers Deluxe Edition", "price": "0.54", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers: Rescue Bundle", "price": "0.54", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers: Rescue Deluxe Bundle", "price": "0.68", "flag": "🇦🇷", "date": "01.02", "status": " GP" },
  { "name": "Train Life: A Railway Simulator", "price": "0.16", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Train Sim World® 4: Austrian Regional Edition", "price": "4.06", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Train Sim World® 4: German Regional Edition", "price": "4.06", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Train Sim World® 4: UK Regional Edition", "price": "4.06", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Train Sim World® 4: USA Regional Edition", "price": "4.06", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Trepang2 - Digital Deluxe Edition", "price": "9.75", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Trials Fusion", "price": "0.06", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Trials Fusion: The Awesome Max Edition", "price": "0.12", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Trials® Rising - Digital Gold Edition", "price": "0.56", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Trials® Rising", "price": "0.37", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Tribes of Midgard Deluxe Edition", "price": "0.8", "flag": "🇦🇷", "date": "14.05", "status": " GP" },
  { "name": "Tribes of Midgard", "price": "0.53", "flag": "🇦🇷", "date": "14.05", "status": " GP" },
  { "name": "Trinity Fusion Deluxe Edition", "price": "0.35", "flag": "🇦🇷", "date": "14.05", "status": " GP" },
  { "name": "Trinity Fusion", "price": "0.23", "flag": "🇦🇷", "date": "14.05", "status": " GP" },
  { "name": "Trollhunters: Defenders of Arcadia", "price": "1.46", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Turbo Golf Racing: Deep Space Bundle", "price": "0.23", "flag": "🇦🇷", "date": "01.08", "status": " GP" },
  { "name": "Turbo Golf Racing: Ultimate Bundle", "price": "0.27", "flag": "🇦🇷", "date": "01.08", "status": " GP" },
  { "name": "Turnip Boy Robs a Bank Pre-Release", "price": "0.21", "flag": "🇦🇷", "date": "15.07", "status": " GP" },
  { "name": "UNO® Ultimate Edition", "price": "0.75", "flag": "🇦🇷", "date": "13.05", "status": "" },
  { "name": "UNO®", "price": "0.14", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Ultra Foodmess Deluxe", "price": "0.05", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "0.17", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Vermintide - Digital Value Pack", "price": "0.5", "flag": "🇦🇷", "date": "07.03", "status": "" },
  { "name": "Vikings - Wolves of Midgard", "price": "0.21", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "0.8", "flag": "🇦🇷", "date": "30.08", "status": "" },
  { "name": "WWE 2K Battlegrounds Digital Deluxe Edition", "price": "0.95", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "WWE 2K Battlegrounds", "price": "0.69", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Warhammer 40,000: Darktide - Imperial Edition", "price": "5.0", "flag": "🇦🇷", "date": "01.10", "status": " GP" },
  { "name": "Warhammer 40,000: Inquisitor - Martyr | Imperium edition", "price": "0.14", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Warhammer: Chaosbane Xbox One", "price": "0.07", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Wasteland 2: Director's Cut", "price": "0.1", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Wasteland 3 (PC) Colorado Collection", "price": "1.8", "flag": "🇦🇷", "date": "30.09", "status": " GP" },
  { "name": "Wasteland 3 Colorado Collection", "price": "10.89", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "Wasteland Remastered", "price": "0.19", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "Watch Dogs®2 - Deluxe Edition", "price": "3.4", "flag": "🇦🇷", "date": "16.07", "status": " GP" },
  { "name": "Watch Dogs®2 - Gold Edition", "price": "50.84", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Watch Dogs®: Legion", "price": "2.79", "flag": "🇹🇷", "date": "14.05", "status": "" },
  { "name": "Way of the Hunter: Elite Edition", "price": "19.94", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "We Happy Few Digital Deluxe", "price": "1.7", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "We Happy Few", "price": "0.4", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "We Were Here", "price": "0.09", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Weedcraft Inc & Moonshine Inc - Risky Business Bundle", "price": "2.11", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Welcome to ParadiZe - Zombot Edition", "price": "5.16", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Werewolf: The Apocalypse - Earthblood Champion of Gaia Xb...", "price": "0.11", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Werewolf: The Apocalypse - Earthblood Champion of Gaia Xbox Series X|S", "price": "0.11", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "Winter Ember", "price": "0.09", "flag": "🇦🇷", "date": "14.05", "status": " GP" },
  { "name": "Wired Italian Adventure Bundle", "price": "0.43", "flag": "🇦🇷", "date": "01.01", "status": " GP" },
  { "name": "Wolfenstein: Alt History Collection", "price": "12.4", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Wolfenstein: Youngblood Deluxe Edition", "price": "5.42", "flag": "🇹🇷", "date": "17.02", "status": " GP" },
  { "name": "Wolfenstein® II: The New Colossus™ Digital Deluxe Edition", "price": "7.44", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "Wolfenstein®: The Two-Pack", "price": "3.94", "flag": "🇹🇷", "date": "11.03", "status": " GP" },
  { "name": "World War Z: Aftermath - Deluxe Edition", "price": "6.4", "flag": "🇦🇷", "date": "01.12", "status": " GP" },
  { "name": "X-Force Genesis PC Edition", "price": "0.02", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "XCOM®: Enemy Within", "price": "0.1", "flag": "🇦🇷", "date": "14.05", "status": " GP" },
  { "name": "Zoo Tycoon", "price": "0.21", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "de Blob 2", "price": "0.09", "flag": "🇦🇷", "date": "14.05", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Greenhorn Bundle", "price": "0.57", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "theHunter: Call of the Wild™ - Master Hunter Bundle", "price": "0.86", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
  { "name": "theHunter: Call of the Wild™ - Seasoned Hunter Bundle", "price": "0.71", "flag": "🇦🇷", "date": "01.06", "status": " GP" },
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
    a = 100
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



