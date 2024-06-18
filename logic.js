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
  { "name": "1000 Ancient Coins - Hidden Trove of the Ancients", "price": "1.68", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "150 Ancient Coins - Secret Stash of the Ancients", "price": "0.34", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "2550 Ancient Coins - Royal Treasury of the Ancients", "price": "3.87", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "4250 Ancient Coins - Glittering Tribute of the Ancients", "price": "5.85", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "550 Ancient Coins - Lost Chest of the Ancients", "price": "1.0", "flag": "🇪🇬", "date": "16.09", "status": " GP" },
  { "name": "A Gummy's Life", "price": "0.61", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "A Perfect Day", "price": "2.25", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "A Space for the Unbound", "price": "1.2", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "ARCADE GAME SERIES: DIG DUG", "price": "0.18", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "ARCADE GAME SERIES: GALAGA", "price": "0.18", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "ASTRONEER: Evolution Edition", "price": "2.78", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Ace Attorney Anthology", "price": "33.14", "flag": "🇯🇵", "date": "01.07", "status": "" },
  { "name": "Adios", "price": "1.02", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Adventure Tanks", "price": "0.59", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Adventure Time: Pirates of the Enchiridion", "price": "5.09", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Aeon Must Die!", "price": "1.45", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Afterimage", "price": "2.47", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Age of Empires 25th Anniversary Collection", "price": "8.31", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Age of Empires II: Deluxe Definitive Edition Bundle", "price": "5.64", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Age of Empires: Definitive Collection", "price": "6.31", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Ages of Mages: the last keeper", "price": "0.52", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Ailment & Endurance Bundle", "price": "0.78", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Airborne Bundle", "price": "2.78", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Aircraft Evolution", "price": "0.35", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Alina of the Arena", "price": "1.04", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "America’s Greatest Game Shows: Wheel of Fortune® & Jeopar...", "price": "3.46", "flag": "🇧🇷", "date": "25.06", "status": "" },
  { "name": "Andro Dunos 2", "price": "0.91", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Anno 1800™ Console Edition", "price": "5.5", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "AntVentor", "price": "0.5", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Anuchard", "price": "0.6", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "Apollo Justice: Ace Attorney Trilogy", "price": "22.0", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Arcade Classics Anniversary Collection", "price": "0.74", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Arcade Paradise | High Score Edition", "price": "1.92", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Arkanoid Eternal Battle", "price": "1.98", "flag": "🇮🇳", "date": "25.06", "status": "" },
  { "name": "Ary and the Secret of Seasons", "price": "0.55", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Assassin's Creed Antiquity Pack", "price": "48.71", "flag": "🇧🇷", "date": "16.09", "status": " GP" },
  { "name": "Assassin's Creed Legendary Collection", "price": "88.56", "flag": "🇧🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed Triple Pack: Black Flag, Unity, Syndicate", "price": "2.16", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Assassin's Creed® Bundle: Assassin's Creed® Valhalla, Ass...", "price": "39.11", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Assassin's Creed® Odyssey - DELUXE EDITION", "price": "17.11", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Assassin's Creed® Odyssey - ULTIMATE EDITION", "price": "22.61", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Assassin's Creed® Origins - DELUXE EDITION", "price": "16.5", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Assassin's Creed® Origins - GOLD EDITION", "price": "19.55", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Assassin's Creed® Syndicate Gold Edition", "price": "1.6", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Assassin's Creed® The Ezio Collection", "price": "1.92", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Assassin's Creed® Valhalla Complete Edition", "price": "24.44", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Assassin's Creed® Valhalla Deluxe Edition", "price": "18.94", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Assassin's Creed® Valhalla", "price": "4.58", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Assassin’s Creed Mirage & Assassin's Creed Valhalla Bundle", "price": "13.9", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Assassin’s Creed® Mirage", "price": "13.75", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Assassin’s Creed® Valhalla + Immortals Fenyx Rising™ Bundle", "price": "61.11", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Assassin’s Creed® Valhalla + Watch Dogs®: Legion Bundle", "price": "7.03", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Asterix & Obelix XXL Collection", "price": "6.51", "flag": "🇮🇳", "date": "25.06", "status": "" },
  { "name": "Asterix & Obelix XXL3: The Crystal Menhir", "price": "2.63", "flag": "🇮🇳", "date": "25.06", "status": "" },
  { "name": "Atomic Heart - Premium Edition", "price": "46.44", "flag": "🇹🇷", "date": "16.08", "status": " GP" },
  { "name": "Attack of the Toy Tanks (Xbox Series X|S)", "price": "2.58", "flag": "🇮🇳", "date": "26.06", "status": "" },
  { "name": "Avatar: Frontiers of Pandora™ Gold Edition", "price": "34.83", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Avatar: Frontiers of Pandora™", "price": "26.58", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Aven Colony", "price": "1.52", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Awarded Platformer Bundle", "price": "1.21", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "BACK TO CHILDHOOD: Classic Games Collection", "price": "6.51", "flag": "🇮🇳", "date": "25.06", "status": "" },
  { "name": "BATTLETECH Mercenary Collection", "price": "6.23", "flag": "🇹🇷", "date": "13.06", "status": " GP" },
  { "name": "Baby Shark™: Sing & Swim Party", "price": "7.75", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Banishers: Ghosts of New Eden", "price": "35.44", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Batman: Return to Arkham", "price": "0.8", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Bear With Me: The Complete Collection", "price": "0.21", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "Bear With Me: The Lost Robots", "price": "0.07", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "Ben 10", "price": "5.09", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Big Moonstone Pack -- 5,500", "price": "5.5", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Bio Inc. Redemption + Crossroads Inn - Doctors and Bartenders Bundle", "price": "8.94", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "BioShock 2 Remastered", "price": "0.87", "flag": "🇹🇷", "date": "25.06", "status": " GP" },
  { "name": "BioShock Infinite: The Complete Edition", "price": "1.39", "flag": "🇹🇷", "date": "25.06", "status": " GP" },
  { "name": "BioShock Remastered", "price": "1.39", "flag": "🇹🇷", "date": "25.06", "status": " GP" },
  { "name": "Birth", "price": "0.76", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Bite the Bullet", "price": "1.53", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Blacksmith Forger", "price": "0.3", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Blaze and the Monster Machines: Axle City Racers", "price": "3.7", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Boggle", "price": "0.34", "flag": "🇹🇷", "date": "25.06", "status": " GP" },
  { "name": "Boomerang Fu", "price": "0.77", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Builder Flipper bundle", "price": "2.93", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Bundle: South Park™ : The Stick of Truth™ + The Fractured...", "price": "8.86", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "CONTRA: ROGUE CORPS", "price": "0.45", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "CYGNI: All Guns Blazing", "price": "15.05", "flag": "🇨🇱", "date": "05.08", "status": "" },
  { "name": "Calico", "price": "0.72", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Call of Duty®: Modern Warfare® III - Vault Edition", "price": "57.98", "flag": "🇧🇷", "date": "25.06", "status": "" },
  { "name": "Call of the Wild: The Angler™ - Gold Fishing Bundle", "price": "3.45", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Call of the Wild: The Angler™ - Silver Fishing Bundle", "price": "2.78", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Call of the Wild: The Angler™ - Ultimate Fishing Bundle", "price": "4.16", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "Car Vouchers (10)", "price": "1.34", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Car Vouchers (24)", "price": "2.68", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Car Vouchers (4)", "price": "0.67", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Cartoon Network: Battle Crashers", "price": "0.23", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Cassette Beasts: Deluxe Edition", "price": "1.8", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "Castlevania Advance Collection", "price": "3.2", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Castlevania Anniversary Collection", "price": "0.74", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Catacomb Master", "price": "0.3", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Caterpillar", "price": "0.21", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Catlateral Damage: Remeowstered", "price": "0.54", "flag": "🇹🇷", "date": "25.06", "status": " GP" },
  { "name": "Chessarama", "price": "0.84", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Chicken Police - Paint it RED!", "price": "0.86", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Chivalry 2 King's Edition", "price": "4.16", "flag": "🇹🇷", "date": "01.10", "status": " GP" },
  { "name": "Chivalry 2 Special Edition", "price": "3.45", "flag": "🇹🇷", "date": "01.10", "status": " GP" },
  { "name": "Chivalry 2", "price": "1.15", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Cities: Skylines - Mayor's Edition", "price": "8.25", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "Cities: Skylines - Premium Edition 2", "price": "4.83", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "Classified: France '44 - Overlord Edition", "price": "23.37", "flag": "🇮🇳", "date": "25.06", "status": "" },
  { "name": "Cobra Kai: The Karate Kid Saga Continues", "price": "1.26", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Commandos 2 - HD Remaster", "price": "2.06", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Conan Chop Chop", "price": "1.22", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Conan Exiles - Complete Edition October 2021", "price": "11.0", "flag": "🇹🇷", "date": "16.08", "status": " GP" },
  { "name": "Conan Exiles - Isle of Siptah Edition", "price": "38.44", "flag": "🇯🇵", "date": "16.08", "status": " GP" },
  { "name": "Conan Exiles - Isle of Siptah Edition", "price": "4.89", "flag": "🇹🇷", "date": "16.08", "status": " GP" },
  { "name": "Conan Exiles – Complete Edition", "price": "76.88", "flag": "🇯🇵", "date": "16.08", "status": " GP" },
  { "name": "Conan Exiles – Year 1 DLC Bundle", "price": "2.49", "flag": "🇹🇷", "date": "25.06", "status": " GP" },
  { "name": "Conan Exiles", "price": "1.33", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Conan Exiles", "price": "11.1", "flag": "🇯🇵", "date": "25.06", "status": "" },
  { "name": "Contra Anniversary Collection", "price": "0.74", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Contra: Operation Galuga + Early-purchase Bonus", "price": "18.25", "flag": "🇯🇵", "date": "20.06", "status": "" },
  { "name": "Crazy Sports Bundle", "price": "0.12", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Cris Tales", "price": "0.87", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Crown Trick", "price": "0.7", "flag": "🇳🇬", "date": "25.06", "status": "" },
  { "name": "Crusader Kings III: Royal Edition", "price": "5.19", "flag": "🇹🇷", "date": "19.06", "status": " GP" },
  { "name": "Curious Expedition 2", "price": "0.81", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Curved Space", "price": "0.17", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "DAS WIRED-HORROR-SPIELPAKET", "price": "2.78", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "DC League of Super-Pets: The Adventures of Krypto and Ace", "price": "2.77", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "DC's Justice League: Cosmic Chaos", "price": "7.75", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "DEAD ISLAND 2 DELUXE EDITION", "price": "18.31", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "DOOM (1993)", "price": "0.27", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "DOOM 3", "price": "0.53", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "DOOM 64", "price": "0.15", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "DOOM Eternal: The Ancient Gods - Part One", "price": "5.19", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "DOOM Eternal: The Ancient Gods - Part Two", "price": "5.19", "flag": "🇹🇷", "date": "17.03", "status": " GP" },
  { "name": "DOOM Eternal: Year One Pass (PC)", "price": "7.84", "flag": "🇹🇷", "date": "03.12", "status": " GP" },
  { "name": "DOOM Eternal: Year One Pass", "price": "7.84", "flag": "🇹🇷", "date": "30.09", "status": " GP" },
  { "name": "DOOM II (Classic)", "price": "0.27", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "DRAGON BALL XENOVERSE", "price": "0.6", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "DRAGON BALL Z: KAKAROT Deluxe Edition", "price": "8.24", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "DRAGON BALL: THE BREAKERS Special Edition", "price": "1.83", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "DYSMANTLE", "price": "0.6", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Dark Nights with Poe and Munro", "price": "0.59", "flag": "🇹🇷", "date": "25.06", "status": " GP" },
  { "name": "Darkest Dungeon®: Ancestral Edition", "price": "2.08", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Dead Cells: Medley of Pain Bundle", "price": "2.78", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Dead Cells: Return to Castlevania Bundle", "price": "2.17", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "Dead Island 2", "price": "10.68", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Dead Island Retro Revenge", "price": "0.07", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Dead by Daylight - Gold Edition", "price": "9.8", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Deceive Inc. Black Tie Edition Content", "price": "1.04", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Deceive Inc.", "price": "0.69", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Deep Rock Galactic - Deluxe Edition", "price": "2.78", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "Deep Rock Galactic - Ultimate Edition", "price": "3.45", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "Descenders", "price": "0.45", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Detective - Minerva Case", "price": "0.73", "flag": "🇹🇷", "date": "28.06", "status": "" },
  { "name": "Diablo® IV", "price": "31.75", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Diablo® IV: Vessel of Hatred™ - Expansion Bundle", "price": "47.21", "flag": "🇧🇷", "date": "30.12", "status": " GP" },
  { "name": "Dicey Dungeons", "price": "0.32", "flag": "🇹🇷", "date": "25.06", "status": " GP" },
  { "name": "Dishonored®: Death of the Outsider™ Deluxe Bundle", "price": "12.16", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Disney Dreamlight Valley: A Rift in Time", "price": "4.23", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Dogos", "price": "0.89", "flag": "🇧🇷", "date": "25.06", "status": "" },
  { "name": "Dordogne", "price": "3.06", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Double Dragon Gaiden: Rise of the Dragons", "price": "6.65", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "DreamWorks Dragons: Legends of The Nine Realms", "price": "11.69", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "DreamWorks Spirit Lucky's Big Adventure", "price": "7.64", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Dungeons 3", "price": "1.3", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Dungeons 4 - Digital Deluxe Edition", "price": "24.44", "flag": "🇹🇷", "date": "16.11", "status": " GP" },
  { "name": "EA SPORTS FC™ 24 Standard Edition Xbox One & Xbox Series X|S", "price": "16.18", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "EA SPORTS FC™ 24 Standard Edition Xbox One & Xbox Series X|S", "price": "3.47", "flag": "🇰🇷", "date": "18.07", "status": "" },
  { "name": "EA SPORTS FC™ 24 Ultimate Edition Xbox One & Xbox Series X|S", "price": "31.16", "flag": "🇮🇳", "date": "18.07", "status": "" },
  { "name": "EA SPORTS™ Madden NFL 25 Deluxe Edition Xbox Series X|S & Xbox One + Limited Time Bonus", "price": "75.42", "flag": "🇰🇷", "date": "02.08", "status": "" },
  { "name": "ELEX II", "price": "16.78", "flag": "🇮🇳", "date": "25.06", "status": "" },
  { "name": "El Paso, Elsewhere", "price": "1.29", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Ember: Console Edition", "price": "0.51", "flag": "🇹🇷", "date": "25.06", "status": " GP" },
  { "name": "Escape Academy Deluxe Edition", "price": "2.41", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Escape Dead Island", "price": "0.23", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Expeditions: A MudRunner Game - Year 1 Edition", "price": "38.35", "flag": "🇮🇳", "date": "25.06", "status": "" },
  { "name": "F1® 23", "price": "37.75", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "F1® Manager 2023 Deluxe Edition", "price": "13.44", "flag": "🇹🇷", "date": "16.10", "status": " GP" },
  { "name": "F1® Manager 2024 Deluxe Edition", "price": "26.12", "flag": "🇹🇷", "date": "23.07", "status": "" },
  { "name": "FAR CRY 4 + FAR CRY PRIMAL BUNDLE", "price": "1.34", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "FAR CRY ANTHOLOGY BUNDLE", "price": "12.22", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "FOR HONOR – Gold Edition", "price": "7.64", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "FOR HONOR – Ultimate Edition", "price": "12.22", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Fabledom", "price": "2.79", "flag": "🇳🇬", "date": "12.09", "status": "" },
  { "name": "Fallout 76: Skyline Valley Deluxe Edition", "price": "24.44", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Far Cry Insanity Bundle", "price": "11.07", "flag": "🇧🇷", "date": "02.07", "status": "" },
  { "name": "Far Cry® 3 Blood Dragon Classic Edition", "price": "2.23", "flag": "🇹🇷", "date": "25.06", "status": " GP" },
  { "name": "Far Cry® 3 Classic Edition", "price": "0.93", "flag": "🇹🇷", "date": "25.06", "status": " GP" },
  { "name": "Far Cry® 5 + Far Cry® New Dawn Deluxe Edition Bundle", "price": "19.6", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Far Cry® 5 Gold Edition + Far Cry ® New Dawn Deluxe Editi...", "price": "22.49", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Far Cry® 5", "price": "2.75", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Far Cry® 6 Deluxe Edition", "price": "18.94", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Far Cry® 6 Game of the Year Edition", "price": "23.22", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Farm Bundle", "price": "2.78", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Farm Pets Bundle", "price": "4.16", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Farming Simulator 22 - Platinum Edition", "price": "5.64", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Farming Simulator 22 - Premium Edition", "price": "7.05", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Farming Simulator 22 - YEAR 1 Bundle", "price": "6.31", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Fast & Furious: Spy Racers Rise of SH1FT3R", "price": "4.62", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Flailing Limbs Bundle", "price": "1.44", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Flockers", "price": "0.57", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Fobia - St. Dinfna Hotel", "price": "0.78", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Forza Horizon 4 Deluxe Edition", "price": "11.21", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 4 Expansions Bundle", "price": "4.9", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 4 Ultimate Add-Ons Bundle", "price": "7.05", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 4 Ultimate Edition", "price": "14.09", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 + 4 Premium Upgrade Bundle", "price": "14.09", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 PLUS Hot Wheels Bundle", "price": "11.21", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Forza Horizon 5 Premium Add-Ons Bundle", "price": "3.52", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "Forza Horizon 5 and Forza Horizon 4 Premium Editions Bundle", "price": "28.19", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Froggy Bouncing Adventures", "price": "2.58", "flag": "🇮🇳", "date": "29.06", "status": "" },
  { "name": "From Earth to Heaven", "price": "0.36", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "From Space Resistance Bundle", "price": "2.82", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Frostpunk: Complete Collection", "price": "3.12", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Fueled Up", "price": "0.86", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Fusion Bundle", "price": "2.32", "flag": "🇳🇬", "date": "25.06", "status": "" },
  { "name": "G.I. Joe: Operation Blackout", "price": "2.1", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "GOTTA GO FAST: Racing Collection", "price": "4.87", "flag": "🇮🇳", "date": "25.06", "status": "" },
  { "name": "Garden Bundle", "price": "3.68", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Garfield Lasagna Party", "price": "9.12", "flag": "🇮🇳", "date": "25.06", "status": "" },
  { "name": "Gas Station Simulator and Airstrip DLC Bundle", "price": "1.86", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Gas Station Simulator and Can Touch This DLC Bundle", "price": "1.65", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Gears of War 4 and Halo 5: Guardians Bundle", "price": "2.44", "flag": "🇹🇷", "date": "31.01", "status": " GP" },
  { "name": "Generation Zero ® - Silver Bundle", "price": "3.45", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Generation Zero ® - Ultimate Bundle", "price": "4.83", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Generation Zero® - Gold Bundle", "price": "4.16", "flag": "🇹🇷", "date": "01.07", "status": " GP" },
  { "name": "Genesis Alpha One", "price": "1.04", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Ghost Teen Escape from Limbo", "price": "2.58", "flag": "🇮🇳", "date": "20.06", "status": "" },
  { "name": "Ghost Trick: Phantom Detective", "price": "10.22", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Ghostlore (Game Preview)", "price": "1.29", "flag": "🇹🇷", "date": "25.06", "status": " GP" },
  { "name": "Ghostwire: Tokyo Deluxe Edition", "price": "18.94", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Gigantosaurus The Game", "price": "1.74", "flag": "🇳🇬", "date": "25.06", "status": "" },
  { "name": "Glam's Incredible Run: Escape from Dukha", "price": "0.17", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Goat Simulator 3 - Digital Downgrade Edition", "price": "9.78", "flag": "🇹🇷", "date": "19.06", "status": " GP" },
  { "name": "Goat Simulator: The GOATY", "price": "1.87", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Goat Simulator: Waste Of Space Bundle", "price": "1.04", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "God of Rock", "price": "1.34", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Going Under", "price": "0.7", "flag": "🇳🇬", "date": "25.06", "status": "" },
  { "name": "Golf With Your Friends - Starter Edition", "price": "17.45", "flag": "🇰🇷", "date": "25.06", "status": "" },
  { "name": "Grand Prix Story", "price": "0.93", "flag": "🇹🇷", "date": "20.06", "status": "" },
  { "name": "Guacamelee! 2", "price": "0.43", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Guacamelee! Super Turbo Championship Edition", "price": "0.28", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Guilty Gear -Strive- Daredevil Edition", "price": "13.35", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "HITMAN™ 2", "price": "7.54", "flag": "🇹🇷", "date": "04.02", "status": "" },
  { "name": "HORROR TALES: The Beggar", "price": "1.16", "flag": "🇹🇷", "date": "03.07", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ - Game Of The Year Edition - Xbox S...", "price": "8.24", "flag": "🇯🇵", "date": "25.06", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ - Game Of The Year Edition", "price": "8.24", "flag": "🇯🇵", "date": "25.06", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ - Xbox Series X|S", "price": "4.38", "flag": "🇯🇵", "date": "25.06", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™", "price": "4.38", "flag": "🇯🇵", "date": "25.06", "status": "" },
  { "name": "HUMANKIND™ - Heritage Edition", "price": "8.39", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Halo 5: Guardians – Digital Deluxe Edition", "price": "20.17", "flag": "🇹🇷", "date": "31.05", "status": " GP" },
  { "name": "Halo Wars 2: Complete Edition", "price": "24.44", "flag": "🇹🇷", "date": "04.04", "status": " GP" },
  { "name": "HammerHelm", "price": "0.65", "flag": "🇹🇷", "date": "25.06", "status": " GP" },
  { "name": "Hammerwatch Anniversary Edition", "price": "5.47", "flag": "🇺🇦", "date": "02.07", "status": "" },
  { "name": "Hammerwatch II", "price": "6.81", "flag": "🇺🇦", "date": "02.07", "status": "" },
  { "name": "Hasbro Family Fun Pack Conquest Edition", "price": "8.72", "flag": "🇨🇦", "date": "25.06", "status": "" },
  { "name": "Hasbro Family Fun Pack", "price": "8.72", "flag": "🇨🇦", "date": "25.06", "status": "" },
  { "name": "Haven", "price": "1.03", "flag": "🇹🇷", "date": "27.06", "status": "" },
  { "name": "Headbangers: Rhythm Royale - Digital Deluxe Edition", "price": "4.23", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hell Let Loose - Deluxe Edition", "price": "8.39", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hell Let Loose - Fan Favourites Bundle", "price": "5.52", "flag": "🇹🇷", "date": "25.06", "status": " GP" },
  { "name": "Hell Let Loose - German Bundle", "price": "3.78", "flag": "🇹🇷", "date": "25.06", "status": " GP" },
  { "name": "Hell Let Loose - Headgear Bundle", "price": "3.78", "flag": "🇹🇷", "date": "25.06", "status": " GP" },
  { "name": "Hell Let Loose - Soviet Bundle", "price": "3.78", "flag": "🇹🇷", "date": "25.06", "status": " GP" },
  { "name": "Hell Let Loose - The Eagle and Pegasus Combo Pack", "price": "0.85", "flag": "🇳🇬", "date": "25.06", "status": " GP" },
  { "name": "Hell Let Loose - U.S Bundle", "price": "3.78", "flag": "🇹🇷", "date": "25.06", "status": " GP" },
  { "name": "Hell Let Loose - Ultimate Edition", "price": "5.88", "flag": "🇳🇬", "date": "25.06", "status": "" },
  { "name": "Hello Neighbor 2 Deluxe Edition", "price": "8.39", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Henchman Story", "price": "0.7", "flag": "🇳🇬", "date": "25.06", "status": " GP" },
  { "name": "Hidden Cats in Paris", "price": "0.21", "flag": "🇹🇷", "date": "26.06", "status": "" },
  { "name": "Hoa", "price": "0.52", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Hole io", "price": "0.34", "flag": "🇹🇷", "date": "20.06", "status": "" },
  { "name": "Hotel Renovator", "price": "15.28", "flag": "🇹🇷", "date": "24.06", "status": "" },
  { "name": "House Flipper", "price": "1.1", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "How 2 Escape", "price": "0.91", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Huge Moonstone Pack -- 14,500", "price": "14.03", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Hypnospace Outlaw & Slayers X: Terminal Aftermath: Vengance of the Slayer Bundle", "price": "2.32", "flag": "🇹 🇷", "date": "01.06", "status": " GP" },
  { "name": "I, AI", "price": "0.44", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "INSIDE & LIMBO Bundle", "price": "3.62", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Immortals Fenyx Rising™", "price": "6.11", "flag": "🇹🇷", "date": "25.06", "status": " GP" },
  { "name": "Immortals of Aveum™ Deluxe Edition", "price": "29.66", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "Injustice™ 2", "price": "0.43", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Insurgency: Sandstorm - Deluxe Edition", "price": "20.74", "flag": "🇯🇵", "date": "25.06", "status": "" },
  { "name": "Insurgency: Sandstorm - Ultimate Edition", "price": "46.44", "flag": "🇹🇷", "date": "16.01", "status": " GP" },
  { "name": "Iris and the Giant Deluxe Soundtrack Edition", "price": "2.52", "flag": "🇹🇷", "date": "25.06", "status": " GP" },
  { "name": "Island Farmer", "price": "0.24", "flag": "🇳🇬", "date": "25.06", "status": "" },
  { "name": "Islets", "price": "1.34", "flag": "🇳🇬", "date": "25.06", "status": " GP" },
  { "name": "Isonzo: Deluxe Edition", "price": "2.78", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Isonzo: Ultimate Edition", "price": "54.63", "flag": "🇯🇵", "date": "16.06", "status": " GP" },
  { "name": "JoJo Siwa: Worldwide Party", "price": "2.31", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "JoJo's Bizarre Adventure: All-Star Battle R Ultimate Edition", "price": "4.54", "flag": "🇳🇬", "date": "25.06", "status": "" },
  { "name": "JoJo's Bizarre Adventure: All-Star Battle R Ultimate Edition", "price": "48.65", "flag": "🇰🇷", "date": "25.06", "status": "" },
  { "name": "Jorel’s Brother and The Most Important Game of the Galaxy Complete Edition", "price": "1.33", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "Judgment", "price": "2.41", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Jujutsu Kaisen Cursed Clash Deluxe Edition", "price": "34.35", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Just Dance 2018", "price": "0.0", "flag": "🇮🇸", "date": "", "status": "" },
  { "name": "Just Dance 2024 Edition", "price": "15.28", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Just Dance 2024 Ultimate Edition", "price": "26.58", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "KLONOA Phantasy Reverie Series", "price": "3.2", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Kaiju Wars + Legend of Keepers - Monsters & Demons Deluxe Bundle", "price": "7.06", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Katamari Damacy REROLL", "price": "1.67", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Kattish", "price": "0.3", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Koh-Lanta", "price": "0.54", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Kraken Academy!!", "price": "0.47", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Kraken Odyssey", "price": "0.91", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "LEGO® 2K Drive Awesome Edition", "price": "37.45", "flag": "🇰🇷", "date": "25.06", "status": "" },
  { "name": "LEGO® Batman™ 3: Beyond Gotham", "price": "0.4", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "LEGO® Builder's Journey", "price": "0.77", "flag": "🇳🇬", "date": "25.06", "status": "" },
  { "name": "LEGO® DC Super-Villains", "price": "0.65", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "LEGO® Marvel Super Heroes 2", "price": "0.65", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "LEGO® Marvel's Avengers", "price": "0.65", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "LEGO® STAR WARS™: The Force Awakens", "price": "0.6", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "LEGO® Star Wars™: The Skywalker Saga Galactic Edition", "price": "11.91", "flag": "🇪🇬", "date": "01.05", "status": " GP" },
  { "name": "LEGO® Star Wars™: The Skywalker Saga", "price": "8.97", "flag": "🇪🇬", "date": "25.06", "status": "" },
  { "name": "LEGO® Worlds", "price": "0.48", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "LEGRAND LEGACY: Tale of the Fatebounds", "price": "0.2", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Later Daters", "price": "0.77", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Let's Build a Zoo & Dinosaur DLC Bundle", "price": "1.86", "flag": "🇹🇷", "date": "01.10", "status": " GP" },
  { "name": "Let's Build a Zoo: Aquarium Odyssey Bundle", "price": "1.86", "flag": "🇹🇷", "date": "01.10", "status": " GP" },
  { "name": "Let's Build a Zoo: Ultimate Bundle", "price": "2.35", "flag": "🇹🇷", "date": "01.10", "status": " GP" },
  { "name": "Light & Dark Bundle", "price": "4.03", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Like a Dragon: Ishin! Digital Deluxe Edition", "price": "10.4", "flag": "🇪🇬", "date": "25.06", "status": "" },
  { "name": "Lonely Mountains: Downhill - Eldfjall Island", "price": "1.91", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "Lonely Mountains: Downhill", "price": "0.71", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Lonesome Village", "price": "1.61", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "Lord Winklebottom Investigates", "price": "0.99", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Lords of the Fallen Deluxe Edition", "price": "11.21", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Lost Chiko 2", "price": "0.34", "flag": "🇹🇷", "date": "27.06", "status": "" },
  { "name": "Lost Judgment Digital Deluxe Edition", "price": "4.77", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Lost Words: Beyond the Page", "price": "0.33", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "LumbearJack", "price": "0.61", "flag": "🇳🇬", "date": "25.06", "status": " GP" },
  { "name": "Luxury Garden Bundle", "price": "4.16", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "METAL GEAR SOLID - Master Collection Version", "price": "5.38", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "METAL GEAR SOLID 2: Sons of Liberty - Master Collection Version", "price": "5.38", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "METAL GEAR SOLID 3: Snake Eater - Master Collection Version", "price": "5.38", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "METAL GEAR SOLID V: THE DEFINITIVE EXPERIENCE", "price": "2.54", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "METAL GEAR SOLID V: THE PHANTOM PAIN", "price": "2.75", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "METAL GEAR SOLID: MASTER COLLECTION Vol.1", "price": "15.89", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "METAL GEAR SURVIVE", "price": "3.02", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "MLB® The Show™ 24 - Digital Deluxe Add-On Bundle", "price": "12.64", "flag": "🇯🇵", "date": "25.06", "status": " GP" },
  { "name": "MLB® The Show™ 24 - Digital Deluxe Edition", "price": "24.44", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "MLB® The Show™ 24 - MVP Edition", "price": "20.78", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "MLB® The Show™ 24 - Xbox One Standard Edition", "price": "14.67", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "MLB® The Show™ 24 - Xbox Series X|S Standard Edition", "price": "35.44", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "MONOPOLY DEAL", "price": "0.13", "flag": "🇹🇷", "date": "25.06", "status": " GP" },
  { "name": "MONOPOLY FAMILY FUN PACK", "price": "0.73", "flag": "🇹🇷", "date": "25.06", "status": " GP" },
  { "name": "MONOPOLY PLUS + MONOPOLY Madness", "price": "4.12", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "MONOPOLY PLUS", "price": "0.42", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "MX vs ATV All Out", "price": "2.72", "flag": "🇧🇷", "date": "25.06", "status": "" },
  { "name": "MX vs ATV Legends", "price": "11.63", "flag": "🇨🇦", "date": "25.06", "status": "" },
  { "name": "MY HERO ONE'S JUSTICE 2", "price": "22.26", "flag": "🇯🇵", "date": "25.06", "status": "" },
  { "name": "MY HERO ONE'S JUSTICE 2", "price": "5.72", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Madden NFL 19", "price": "28.62", "flag": "🇨🇴", "date": "30.12", "status": "" },
  { "name": "Madden NFL 24 Xbox Series X|S & Xbox One", "price": "16.18", "flag": "🇮🇳", "date": "30.12", "status": "" },
  { "name": "Magazine Mogul", "price": "0.93", "flag": "🇹🇷", "date": "21.06", "status": "" },
  { "name": "Maneater Apex Edition", "price": "3.45", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "Masters of Anima", "price": "0.27", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Mato Anomalies", "price": "4.31", "flag": "🇨🇱", "date": "25.06", "status": "" },
  { "name": "Maximum Football 2019", "price": "0.88", "flag": "🇳🇿", "date": "02.07", "status": "" },
  { "name": "Maximum Football 2020", "price": "2.68", "flag": "🇳🇿", "date": "02.07", "status": "" },
  { "name": "MechWarrior 5: Mercenaries - JumpShip Edition", "price": "4.9", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Mechapunk", "price": "0.3", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Metal Gear Solid V: Ground Zeroes", "price": "1.05", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Metal: Hellsinger (Xbox One)", "price": "1.3", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Metal: Hellsinger (Xbox Series X|S & PC)", "price": "1.74", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.0", "flag": "🇺🇸", "date": "30.11", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.0", "flag": "🇺🇸", "date": "30.11", "status": "" },
  { "name": "Microsoft Flight Simulator Deluxe 40th Anniversary Edition", "price": "12.62", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Microsoft Flight Simulator Premium Deluxe 40th Anniversar...", "price": "16.78", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Mighty No. 9", "price": "0.26", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Milky Way Prince - The Vampire Star", "price": "0.65", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle - Windows 10", "price": "1.41", "flag": "🇳🇬", "date": "23.06", "status": "" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle", "price": "1.41", "flag": "🇳🇬", "date": "23.06", "status": "" },
  { "name": "Minecraft Dungeons Ultimate Edition for Windows", "price": "5.95", "flag": "🇪🇬", "date": "23.06", "status": "" },
  { "name": "Minecraft Dungeons Ultimate Edition", "price": "2.82", "flag": "🇳🇬", "date": "23.06", "status": "" },
  { "name": "Minecraft Dungeons for Windows + Launcher", "price": "0.86", "flag": "🇹🇷", "date": "23.06", "status": "" },
  { "name": "Minecraft Dungeons", "price": "1.41", "flag": "🇳🇬", "date": "23.06", "status": "" },
  { "name": "Minecraft Legends Deluxe Edition", "price": "3.52", "flag": "🇳🇬", "date": "23.06", "status": "" },
  { "name": "Minecraft Legends", "price": "2.82", "flag": "🇳🇬", "date": "23.06", "status": "" },
  { "name": "Minecraft", "price": "1.41", "flag": "🇳🇬", "date": "23.06", "status": "" },
  { "name": "Minecraft: Deluxe Collection", "price": "2.11", "flag": "🇳🇬", "date": "23.06", "status": "" },
  { "name": "Minecraft: Java & Bedrock Edition for PC", "price": "2.78", "flag": "🇪🇬", "date": "23.06", "status": "" },
  { "name": "Monster Energy Supercross - The Official Videogame 2", "price": "0.76", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Monster Energy Supercross 2 - Special Edition", "price": "1.37", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Monster Hunter Rise + Sunbreak Deluxe", "price": "34.22", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "Monster Hunter Rise Deluxe Edition", "price": "19.31", "flag": "🇪🇬", "date": "01.04", "status": " GP" },
  { "name": "Moonlighter: Complete Edition", "price": "1.65", "flag": "🇹🇷", "date": "01.12", "status": " GP" },
  { "name": "Mortal Kombat 11", "price": "1.4", "flag": "🇪🇬", "date": "25.06", "status": "" },
  { "name": "Mortal Kombat X", "price": "1.51", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "MotoGP™23", "price": "6.47", "flag": "🇰🇷", "date": "25.06", "status": "" },
  { "name": "Mount & Blade II: Bannerlord Digital Deluxe Edition", "price": "8.39", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Moving Out + Moving Out 2 Bundle", "price": "4.1", "flag": "🇳🇬", "date": "25.06", "status": "" },
  { "name": "Moving Out 2 - Deluxe Edition", "price": "2.78", "flag": "🇳🇬", "date": "25.06", "status": "" },
  { "name": "Mr. DRILLER DrillLand", "price": "0.27", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Murderous Muses", "price": "0.5", "flag": "🇹🇷", "date": "25.06", "status": " GP" },
  { "name": "My Friend Peppa Pig", "price": "3.72", "flag": "🇪🇬", "date": "25.06", "status": "" },
  { "name": "My Time At Portia", "price": "1.52", "flag": "🇹🇷", "date": "24.06", "status": "" },
  { "name": "My Time at Portia Deluxe Edition", "price": "5.84", "flag": "🇹🇷", "date": "01.10", "status": " GP" },
  { "name": "NBA 2K24 Baller Edition", "price": "42.75", "flag": "🇹🇷", "date": "01.09", "status": " GP" },
  { "name": "NHL® 24 X-Factor Edition Xbox One & Xbox Series X|S", "price": "23.37", "flag": "🇮🇳", "date": "25.06", "status": "" },
  { "name": "NHL® 24 Xbox One", "price": "14.38", "flag": "🇮🇳", "date": "25.06", "status": "" },
  { "name": "NHL® 24 Xbox Series X|S", "price": "16.18", "flag": "🇮🇳", "date": "25.06", "status": "" },
  { "name": "NINJA GAIDEN: Master Collection Deluxe Edition", "price": "6.71", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Necromunda: Underhive Wars - Gold Edition", "price": "3.3", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Neon Abyss Deluxe Edition", "price": "1.92", "flag": "🇹🇷", "date": "16.07", "status": " GP" },
  { "name": "Newfound Courage", "price": "0.19", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Ni no Kuni™ II: Revenant Kingdom - The Prince's Edition", "price": "3.31", "flag": "🇳🇬", "date": "25.06", "status": "" },
  { "name": "Nickelodeon Kart Racers 2: Grand Prix", "price": "0.84", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Night Reverie", "price": "1.56", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "Nine Noir Lives", "price": "1.37", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.21", "flag": "🇹🇷", "date": "30.05", "status": "" },
  { "name": "No Longer Home", "price": "0.52", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "29.24", "flag": "🇮🇳", "date": "16.03", "status": " GP" },
  { "name": "Nobody Saves the World + Frozen Hearth Bundle", "price": "0.96", "flag": "🇹🇷", "date": "25.06", "status": " GP" },
  { "name": "Noob - The Factionless", "price": "13.03", "flag": "🇮🇳", "date": "25.06", "status": "" },
  { "name": "Nordic Adventure Bundle", "price": "14.37", "flag": "🇮🇳", "date": "01.07", "status": " GP" },
  { "name": "OCTOPATH TRAVELER + OCTOPATH TRAVELER II Bundle", "price": "41.41", "flag": "🇺🇦", "date": "05.07", "status": " GP" },
  { "name": "ONE PIECE World Seeker", "price": "1.1", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "ONE PIECE: PIRATE WARRIORS 4 Deluxe Edition(Xbox One)", "price": "7.64", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "ONE PUNCH MAN: A HERO NOBODY KNOWS Deluxe Edition", "price": "1.14", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Obsurity (for Windows 10)", "price": "0.21", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Oceanhorn 2 - Knights of the Lost Realm", "price": "2.11", "flag": "🇳🇬", "date": "25.06", "status": "" },
  { "name": "Olympic Games Tokyo 2020 – The Official Video Game™", "price": "2.26", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "One Piece: Burning Blood", "price": "0.76", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Onsen Master", "price": "0.46", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Orcs Must Die! 3 Bundle", "price": "2.78", "flag": "🇹🇷", "date": "16.04", "status": " GP" },
  { "name": "Overcooked! 2", "price": "1.52", "flag": "🇹🇷", "date": "04.07", "status": "" },
  { "name": "Overcooked: Gourmet Edition", "price": "0.43", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Override 2: Super Mech League", "price": "0.67", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Overruled!", "price": "0.24", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "PAW Patrol The Movie: Adventure City Calls", "price": "3.72", "flag": "🇪🇬", "date": "25.06", "status": "" },
  { "name": "PAYDAY 3: Gold Edition", "price": "6.31", "flag": "🇳🇬", "date": "25.06", "status": "" },
  { "name": "PAYDAY 3: Silver Edition", "price": "4.9", "flag": "🇳🇬", "date": "25.06", "status": "" },
  { "name": "Paladins Deluxe Edition 2022", "price": "13.13", "flag": "🇮🇳", "date": "25.06", "status": "" },
  { "name": "Paladins Gold Edition", "price": "3.27", "flag": "🇮🇳", "date": "25.06", "status": "" },
  { "name": "Paladins Starter Edition", "price": "2.16", "flag": "🇮🇳", "date": "25.06", "status": "" },
  { "name": "Paleo Pines", "price": "8.14", "flag": "🇺🇦", "date": "02.07", "status": "" },
  { "name": "Pandaty", "price": "0.3", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Papa's Quiz", "price": "0.87", "flag": "🇳🇬", "date": "25.06", "status": "" },
  { "name": "Paper Ghost Stories: 7PM", "price": "0.17", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Party Animals Deluxe Edition", "price": "4.23", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Payday 3: Gold Edition Upgrade", "price": "8.39", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Penarium", "price": "0.18", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Persona 5 Tactica: Digital Deluxe Edition", "price": "11.91", "flag": "🇪🇬", "date": "16.11", "status": " GP" },
  { "name": "Pets Bundle", "price": "3.12", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Phoenix Point: Behemoth Edition", "price": "2.08", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Phoenix Wright: Ace Attorney Trilogy", "price": "6.05", "flag": "🇹🇷", "date": "01.07", "status": "" },
  { "name": "Pipe Dream Xbox Edition", "price": "0.3", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Plants vs. Zombies™ Garden Warfare 2", "price": "0.81", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Pocket Arcade Story", "price": "0.93", "flag": "🇹🇷", "date": "20.06", "status": "" },
  { "name": "Pocket Stables", "price": "0.93", "flag": "🇹🇷", "date": "21.06", "status": "" },
  { "name": "Police Simulator: Patrol Officers: Gold Edition", "price": "6.7", "flag": "🇪🇬", "date": "19.06", "status": "" },
  { "name": "Polyfury", "price": "0.56", "flag": "🇹🇷", "date": "25.06", "status": " GP" },
  { "name": "Power Rangers: Battle for the Grid - Digital Collector's Edition", "price": "1.04", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Power Rangers: Battle for the Grid Super Edition", "price": "1.73", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Power Rangers: Battle for the Grid", "price": "0.69", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Praetorians - HD Remaster", "price": "2.06", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Prey®: Digital Deluxe Edition", "price": "6.97", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Princess Farmer", "price": "1.13", "flag": "🇪🇬", "date": "02.07", "status": "" },
  { "name": "Prison of Illusion (Xbox Series X|S)", "price": "0.34", "flag": "🇹🇷", "date": "27.06", "status": "" },
  { "name": "Project Root", "price": "0.18", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Quadroids", "price": "0.72", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Quake II", "price": "2.11", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Quake", "price": "1.16", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "RAD", "price": "0.45", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "RAGE 2", "price": "2.18", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "RAGE 2: Deluxe Edition", "price": "11.0", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "REDO!", "price": "0.54", "flag": "🇳🇬", "date": "25.06", "status": "" },
  { "name": "RESIDENT EVIL 2 Deluxe Edition", "price": "24.44", "flag": "🇹🇷", "date": "16.09", "status": " GP" },
  { "name": "RIDE 3 - Gold Edition", "price": "3.97", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "RIDE 3", "price": "2.29", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Rabbids Invasion : The Interactive TV Show", "price": "0.41", "flag": "🇹🇷", "date": "25.06", "status": " GP" },
  { "name": "Race with Ryan", "price": "6.36", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Radon Break", "price": "0.42", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Raging Justice", "price": "0.61", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Railway Empire", "price": "0.86", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Raji: An Ancient Epiс", "price": "0.84", "flag": "🇳🇬", "date": "25.06", "status": "" },
  { "name": "Rattyvity Lab", "price": "0.3", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Ratyboy Adventures", "price": "0.3", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "ReCore", "price": "2.82", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Regular Moonstone Pack -- 2,500", "price": "2.62", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Remnant II - Deluxe Edition", "price": "8.97", "flag": "🇪🇬", "date": "01.06", "status": " GP" },
  { "name": "Remothered: Broken Porcelain", "price": "0.41", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Retro Collection 1", "price": "10.42", "flag": "🇮🇳", "date": "25.06", "status": "" },
  { "name": "Retro Collection 2", "price": "10.42", "flag": "🇮🇳", "date": "25.06", "status": "" },
  { "name": "Retro Highway", "price": "0.31", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Rider's Spirits", "price": "0.42", "flag": "🇹🇷", "date": "22.06", "status": "" },
  { "name": "Riders Republic™ Complete Edition", "price": "16.04", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Riders Republic™ Skate Edition", "price": "9.17", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Risk: Urban Assault", "price": "0.63", "flag": "🇹🇷", "date": "25.06", "status": " GP" },
  { "name": "Road 96: Mile 0", "price": "0.63", "flag": "🇳🇬", "date": "25.06", "status": "" },
  { "name": "Roboquest", "price": "2.52", "flag": "🇳🇬", "date": "25.06", "status": " GP" },
  { "name": "Robotry!", "price": "0.7", "flag": "🇳🇬", "date": "25.06", "status": "" },
  { "name": "Rock of Ages 3: Make & Break", "price": "0.41", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Rogue Company: Rogue Edition", "price": "4.36", "flag": "🇮🇳", "date": "25.06", "status": "" },
  { "name": "Rogue Company: Year 1 Pass", "price": "4.36", "flag": "🇮🇳", "date": "25.06", "status": "" },
  { "name": "Rogue Stormers & Giana Sisters Bundle", "price": "0.5", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Rogue Stormers", "price": "0.41", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Roxy Raccoon's Pinball Panic", "price": "5.26", "flag": "🇮🇳", "date": "27.06", "status": "" },
  { "name": "Rustler", "price": "0.67", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Ryan's Rescue Squad", "price": "4.62", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "SD GUNDAM BATTLE ALLIANCE Deluxe Edition", "price": "3.4", "flag": "🇳🇬", "date": "25.06", "status": "" },
  { "name": "SMITE Almighty Archon Bundle", "price": "4.38", "flag": "🇮🇳", "date": "25.06", "status": "" },
  { "name": "SMITE Code Slasher Bundle", "price": "4.38", "flag": "🇮🇳", "date": "25.06", "status": "" },
  { "name": "SMITE Curious Courier Bundle", "price": "4.38", "flag": "🇮🇳", "date": "25.06", "status": "" },
  { "name": "SMITE Cybernetic Underworld Bundle", "price": "4.38", "flag": "🇮🇳", "date": "25.06", "status": "" },
  { "name": "SMITE Gecko Guardian Bundle", "price": "4.38", "flag": "🇮🇳", "date": "25.06", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "12.87", "flag": "🇹🇷", "date": "31.12", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "8.51", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "SUPER BOMBERMAN R 2", "price": "8.68", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "SUPER CRAZY RHYTHM CASTLE", "price": "6.77", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "SUPERHOT ONE OF US BUNDLE", "price": "2.17", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "Saga of Sins", "price": "1.2", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Saints Row: Gat Out of Hell", "price": "0.18", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Scott Pilgrim vs. The World™: The Game – Complete Edition", "price": "0.69", "flag": "🇹🇷", "date": "25.06", "status": " GP" },
  { "name": "Sea of Thieves: 2024 Deluxe Edition", "price": "6.71", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Sea of Thieves: 2024 Premium Edition", "price": "7.99", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Shadowblade Odyssey", "price": "0.08", "flag": "🇹🇷", "date": "20.06", "status": "" },
  { "name": "Sheepo", "price": "0.59", "flag": "🇳🇬", "date": "25.06", "status": " GP" },
  { "name": "Shenmue I & II", "price": "0.63", "flag": "🇳🇬", "date": "25.06", "status": "" },
  { "name": "Shenmue I & II", "price": "0.78", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Sherlock Holmes Essential Bundle", "price": "1.41", "flag": "🇳🇬", "date": "25.06", "status": "" },
  { "name": "Sherlock Holmes: Crimes and Punishments Redux", "price": "0.56", "flag": "🇳🇬", "date": "25.06", "status": "" },
  { "name": "Sherlock Holmes: The Devil's Daughter Redux", "price": "0.56", "flag": "🇳🇬", "date": "25.06", "status": "" },
  { "name": "Ship of Fools", "price": "8.86", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Shiro (for Windows 10)", "price": "0.21", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "SiNKR 2", "price": "0.13", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "SiNKR", "price": "0.13", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Sid Meier’s Civilization® VI Anthology", "price": "6.94", "flag": "🇹🇷", "date": "24.06", "status": "" },
  { "name": "Sid Meier’s Civilization® VI Platinum Edition", "price": "3.35", "flag": "🇹🇷", "date": "24.06", "status": "" },
  { "name": "Sigi - A Fart for Melusina", "price": "0.1", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Skator Gator 3D", "price": "0.47", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "Skelattack", "price": "0.64", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Skull and Bones Deluxe Edition", "price": "24.44", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Skull and Bones Premium Edition", "price": "29.03", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Skyrim Anniversary Edition + Fallout 4 G.O.T.Y Bundle", "price": "19.55", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "Small Moonstone Pack -- 1,200", "price": "1.34", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Smart Moves (for Windows 10)", "price": "0.21", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Smurfs Kart", "price": "7.79", "flag": "🇮🇳", "date": "25.06", "status": "" },
  { "name": "Sniper Elite 5 Complete Edition", "price": "7.64", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Sniper Elite 5 Deluxe Edition", "price": "12.62", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "SnowRunner - 1-Anniversary Edition", "price": "7.33", "flag": "🇹🇷", "date": "24.06", "status": " GP" },
  { "name": "SnowRunner - 3-Year Anniversary Edition", "price": "39.11", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "SnowRunner - 4-Year Anniversary Edition", "price": "46.44", "flag": "🇹🇷", "date": "01.05", "status": " GP" },
  { "name": "Solace State", "price": "1.2", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Soulstice", "price": "1.04", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Soulstice: Deluxe Edition", "price": "1.29", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "South Park™: The Fractured but Whole™", "price": "6.65", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "South Park™: The Stick of Truth ™", "price": "1.07", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Space Engineers: Ultimate Edition 2023", "price": "5.13", "flag": "🇹🇷", "date": "01.03", "status": " GP" },
  { "name": "Sparkle Bundle", "price": "1.0", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "SpeedRunners", "price": "0.35", "flag": "🇳🇬", "date": "25.06", "status": "" },
  { "name": "SpellForce III Reforced", "price": "14.54", "flag": "🇨🇦", "date": "25.06", "status": "" },
  { "name": "SpongeBob SquarePants: Battle for Bikini Bottom - Rehydrated", "price": "3.71", "flag": "🇧🇷", "date": "25.06", "status": "" },
  { "name": "Star Trek Prodigy: Supernova", "price": "7.79", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Starfield Premium Edition Upgrade", "price": "5.85", "flag": "🇪🇬", "date": "05.09", "status": " GP" },
  { "name": "Starward Rogue + Moonshine Inc. - Galactic Spirit Deluxe Bundle", "price": "6.75", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "SteamWorld Build & Dig Bundle", "price": "4.9", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "SteamWorld Build Deluxe Edition", "price": "4.63", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Stellaris: Console Edition - Deluxe Edition", "price": "4.19", "flag": "🇹🇷", "date": "16.10", "status": " GP" },
  { "name": "Stolen Realm", "price": "0.86", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Strategic Mind: Fight for Freedom & Spirit of Liberty - Independence Bundle", "price": "6.8", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Strategic Mind: Spectre of Communism", "price": "4.28", "flag": "🇹🇷", "date": "25.06", "status": " GP" },
  { "name": "Street Outlaws: The List", "price": "0.35", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Super Space Club", "price": "1.04", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Synchro Hedgehogs (for Windows 10)", "price": "0.21", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "T.V Favorites Bundle", "price": "13.03", "flag": "🇮🇳", "date": "25.06", "status": "" },
  { "name": "THE KING OF FIGHTERS XV Deluxe Edition", "price": "5.64", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "TRANSFORMERS: BATTLEGROUNDS", "price": "5.09", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Tales of ARISE + SCARLET NEXUS バンドル", "price": "36.64", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Tales of Arise - Beyond The Dawn Ultimate Edition", "price": "43.97", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Tales of Arise - Beyond the Dawn Edition", "price": "26.86", "flag": "🇹🇷", "date": "16.02", "status": " GP" },
  { "name": "Tales of Kenzera™: ZAU", "price": "9.48", "flag": "🇯🇵", "date": "19.06", "status": "" },
  { "name": "Tales of Symphonia Remastered", "price": "6.1", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Tanky Tanks", "price": "0.31", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Teenage Mutant Ninja Turtles Arcade: Wrath of the Mutants", "price": "13.04", "flag": "🇮🇳", "date": "25.06", "status": "" },
  { "name": "Teenage Mutant Ninja Turtles: Shredder's Revenge - Dimension Shellshock", "price": "2.08", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "Teenage Mutant Ninja Turtles: The Cowabunga Collection", "price": "4.93", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Tell Me Why: Chapters 1-3", "price": "0.0", "flag": "🇺🇸", "date": "01.07", "status": "" },
  { "name": "Terraformers + Starward Rogue - Mechs and Colonizers Bundle", "price": "6.42", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Terraformers + Starward Rogue - Mechs and Colonizers Deluxe Bundle", "price": "7.91", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Teslagrad 2", "price": "1.74", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Teslagrad Power Pack Edition", "price": "2.61", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Teslagrad Remastered", "price": "0.87", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "The Callisto Protocol™ for Xbox One – Digital Deluxe Edition", "price": "17.72", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "The Callisto Protocol™ for Xbox Series X|S – Digital Delu...", "price": "20.78", "flag": "🇹🇷", "date": "16.06", "status": " GP" },
  { "name": "The Crew® 2", "price": "2.57", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "The Crew™ Motorfest Standard Edition - Cross-Gen Bundle", "price": "22.15", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "The Crew™ Motorfest Standard Edition", "price": "19.86", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "The Crew™ Motorfest Ultimate Edition", "price": "31.32", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "The Division 2 - Warlords of New York - Ultimate Edition", "price": "11.08", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "The Division 2 - Warlords of New York Edition", "price": "7.64", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "The Elder Scrolls Online Collection: Gold Road", "price": "28.11", "flag": "🇹🇷", "date": "20.06", "status": " GP" },
  { "name": "The Elder Scrolls Online Deluxe Collection: Gold Road", "price": "39.11", "flag": "🇹🇷", "date": "20.06", "status": " GP" },
  { "name": "The Escapists 2", "price": "1.14", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "The Escapists: Supermax Edition", "price": "1.87", "flag": "🇹🇷", "date": "29.04", "status": "" },
  { "name": "The Evil Within Digital Bundle", "price": "2.47", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Excrawlers", "price": "0.3", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "The Explorer Of Night (for Windows 10)", "price": "0.26", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "The Hong Kong Massacre", "price": "2.25", "flag": "🇳🇬", "date": "22.06", "status": "" },
  { "name": "The Inheritance of Crimson Manor", "price": "0.86", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "The Jackbox Party Quadpack", "price": "6.53", "flag": "🇹🇷", "date": "31.12", "status": "" },
  { "name": "The LEGO Movie Videogame", "price": "0.27", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "The Lamplighters League - Deluxe Edition", "price": "3.79", "flag": "🇹🇷", "date": "01.04", "status": " GP" },
  { "name": "The Last Hero of Nostalgaia Deluxe Edition", "price": "1.3", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "The Last Stand: Aftermath", "price": "1.51", "flag": "🇳🇬", "date": "25.06", "status": " GP" },
  { "name": "The Outer Worlds: Board-Approved Bundle", "price": "13.17", "flag": "🇹🇷", "date": "30.12", "status": " GP" },
  { "name": "The Quarry - Deluxe Edition", "price": "19.29", "flag": "🇹🇷", "date": "16.12", "status": " GP" },
  { "name": "The Settlers®: New Allies", "price": "10.08", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "The Smurfs 2 : The Prisoner of the Green Stone", "price": "13.03", "flag": "🇮🇳", "date": "25.06", "status": "" },
  { "name": "The Surge 2 - Windows 10", "price": "1.06", "flag": "🇳🇬", "date": "25.06", "status": "" },
  { "name": "The Surge 2", "price": "2.18", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "The Vale: Shadow of the Crown", "price": "1.01", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "The Walking Dead: A New Frontier", "price": "1.04", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "The Walking Dead: Michonne", "price": "0.34", "flag": "🇹🇷", "date": "01.11", "status": " GP" },
  { "name": "The Walking Dead: Season Two", "price": "0.64", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "The end is nahual: If I may say so", "price": "0.22", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Them's Fightin' Herds", "price": "0.6", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Them's Fightin' Herds: Deluxe Edition", "price": "1.22", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "This Bed We Made", "price": "1.41", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "This War of Mine - Complete Edition", "price": "1.86", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Thrilling Stories Collection", "price": "13.63", "flag": "🇮🇳", "date": "25.06", "status": "" },
  { "name": "Titans Pinball", "price": "0.13", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Ultimate Edition", "price": "5.81", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Tom Clancy's Rainbow Six® Extraction United Bundle", "price": "14.67", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Tom Clancy's Rainbow Six® Siege Deluxe Edition", "price": "5.29", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Tom Clancy's The Division", "price": "0.55", "flag": "🇹🇷", "date": "25.06", "status": " GP" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands - Standard Edition", "price": "1.65", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Ultimate Edition", "price": "12.93", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Year 2 Gold Edition", "price": "9.78", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Tom Clancy’s Rainbow Six Siege Operator Edition", "price": "31.78", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Tom Clancy’s Rainbow Six Siege Ultimate Edition", "price": "39.11", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "TopSpin 2K25 Deluxe Edition Pre-Order", "price": "61.08", "flag": "🇹🇷", "date": "25.06", "status": " GP" },
  { "name": "Tortuga - A Pirate's Tale", "price": "2.08", "flag": "🇹🇷", "date": "19.06", "status": "" },
  { "name": "Totally Reliable Delivery Service Deluxe Edition", "price": "1.65", "flag": "🇹🇷", "date": "01.12", "status": " GP" },
  { "name": "Tourist Trap", "price": "0.7", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Townsmen - A Kingdom Rebuilt", "price": "0.78", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Trailmakers - Space Upgrade", "price": "2.29", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers Deluxe Edition", "price": "3.1", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers: Rescue Bundle", "price": "2.63", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Trailmakers: Rescue Deluxe Bundle", "price": "3.33", "flag": "🇹🇷", "date": "01.02", "status": " GP" },
  { "name": "Train Sim World® 4: Austrian Regional Edition", "price": "4.0", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Train Sim World® 4: Deluxe Edition", "price": "6.71", "flag": "🇪🇬", "date": "01.08", "status": " GP" },
  { "name": "Train Sim World® 4: Flying Scotsman Centenary Edition", "price": "6.71", "flag": "🇪🇬", "date": "01.08", "status": " GP" },
  { "name": "Train Sim World® 4: German Regional Edition", "price": "4.0", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Train Sim World® 4: Special Edition", "price": "12.66", "flag": "🇪🇬", "date": "01.08", "status": " GP" },
  { "name": "Train Sim World® 4: UK Regional Edition", "price": "4.0", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Train Sim World® 4: USA Regional Edition", "price": "4.0", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Trash is Fun (Windows)", "price": "0.32", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Trash is Fun", "price": "0.34", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Treachery in Beatdown City: Ultra Remix", "price": "1.33", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "Trials Fusion: The Awesome Max Edition", "price": "0.83", "flag": "🇹🇷", "date": "25.06", "status": " GP" },
  { "name": "Trials® Rising - Digital Gold Edition", "price": "1.28", "flag": "🇹🇷", "date": "25.06", "status": " GP" },
  { "name": "Tricky Towers", "price": "0.56", "flag": "🇹🇷", "date": "25.06", "status": " GP" },
  { "name": "Trollhunters: Defenders of Arcadia", "price": "1.4", "flag": "🇳🇬", "date": "25.06", "status": "" },
  { "name": "Tunche", "price": "1.01", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Turbo Golf Racing: Deep Space Bundle", "price": "1.1", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Turbo Golf Racing: Ultimate Bundle", "price": "1.31", "flag": "🇹🇷", "date": "01.08", "status": " GP" },
  { "name": "Turnip Boy Robs a Bank Pre-Release", "price": "1.04", "flag": "🇹🇷", "date": "15.07", "status": " GP" },
  { "name": "UFO ROBOT GRENDIZER – The Feast of the Wolves - Deluxe", "price": "17.57", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "UFO ROBOT GRENDIZER – The Feast of the Wolves", "price": "16.33", "flag": "🇮🇳", "date": "25.06", "status": "" },
  { "name": "UNO® Ultimate Edition", "price": "1.08", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "UNO®", "price": "0.43", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Ugly", "price": "1.41", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "1.26", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "ValiDate: Struggling Singles in your Area", "price": "0.84", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Valiant Hearts: Coming Home", "price": "9.04", "flag": "🇹🇷", "date": "25.06", "status": " GP" },
  { "name": "Valkyria Chronicles 4", "price": "0.73", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Vanaris Tactics", "price": "0.44", "flag": "🇹🇷", "date": "25.06", "status": " GP" },
  { "name": "Venba", "price": "0.97", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Verdun", "price": "0.44", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Vermintide - Digital Value Pack", "price": "2.69", "flag": "🇹🇷", "date": "07.03", "status": "" },
  { "name": "Virgo Versus The Zodiac", "price": "1.74", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "Volgarr the Viking I & II Bundle", "price": "1.74", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "Volgarr the Viking II", "price": "1.37", "flag": "🇹🇷", "date": "06.08", "status": "" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "9.62", "flag": "🇹🇷", "date": "30.08", "status": "" },
  { "name": "Warhammer 40,000: Darktide - Imperial Edition", "price": "10.07", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Warm Snow", "price": "7.9", "flag": "🇮🇳", "date": "25.06", "status": "" },
  { "name": "Wasteland 3 (PC) Colorado Collection", "price": "7.05", "flag": "🇳🇬", "date": "", "status": "" },
  { "name": "Watch Dogs 1 + Watch Dogs 2 Standard Editions Bundle", "price": "8.48", "flag": "🇧🇷", "date": "25.06", "status": " GP" },
  { "name": "Watch Dogs®: Legion", "price": "2.75", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Wavetale", "price": "1.61", "flag": "🇳🇬", "date": "25.06", "status": "" },
  { "name": "Way of the Hunter", "price": "14.54", "flag": "🇨🇦", "date": "25.06", "status": "" },
  { "name": "Way of the Hunter: Elite Edition", "price": "18.9", "flag": "🇧🇷", "date": "25.06", "status": "" },
  { "name": "Wayward Strand", "price": "1.88", "flag": "🇳🇬", "date": "02.07", "status": "" },
  { "name": "We Love Katamari REROLL+ Royal Reverie Special Edition", "price": "4.53", "flag": "🇨🇴", "date": "25.06", "status": "" },
  { "name": "Weedcraft Inc & Moonshine Inc - Risky Business Bundle", "price": "6.75", "flag": "🇹🇷", "date": "25.06", "status": " GP" },
  { "name": "Wheel Of Fortune®", "price": "2.51", "flag": "🇧🇷", "date": "25.06", "status": " GP" },
  { "name": "When the Past was Around", "price": "0.37", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "White Shadows", "price": "0.91", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Wild Bastards", "price": "14.36", "flag": "🇺🇦", "date": "12.09", "status": "" },
  { "name": "Willy's Wonderland - The Game", "price": "0.63", "flag": "🇳🇬", "date": "28.06", "status": "" },
  { "name": "Wired Italian Adventure Bundle", "price": "2.08", "flag": "🇹🇷", "date": "01.01", "status": " GP" },
  { "name": "Witchy Life Story", "price": "1.2", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Wo Long: Fallen Dynasty Complete Edition", "price": "30.38", "flag": "🇺🇦", "date": "01.03", "status": " GP" },
  { "name": "Wolfenstein: Alt History Collection", "price": "12.22", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Wolfenstein®: The Two-Pack", "price": "3.88", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Wreckfest Complete Edition", "price": "20.28", "flag": "🇨🇱", "date": "16.11", "status": " GP" },
  { "name": "Wreckfest", "price": "5.29", "flag": "🇨🇱", "date": "25.06", "status": "" },
  { "name": "XCOM® 2", "price": "0.36", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Yakuza: Like a Dragon Hero Edition", "price": "11.13", "flag": "🇯🇵", "date": "01.04", "status": " GP" },
  { "name": "Yakuza: Like a Dragon Legendary Hero Edition", "price": "15.02", "flag": "🇯🇵", "date": "01.04", "status": " GP" },
  { "name": "Yesterday Origins", "price": "0.18", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "Yu-Gi-Oh! Legacy of the Duelist : Link Evolution", "price": "1.37", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "Yu-Gi-Oh! Legacy of the Duelist", "price": "0.44", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "eFootball™ 2024: Leo Messi Edition", "price": "4.39", "flag": "🇹🇷", "date": "02.07", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Essentials DLC Bundle", "price": "0.53", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Greenhorn Bundle", "price": "2.78", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Master Hunter Bundle", "price": "4.16", "flag": "🇹🇷", "date": "01.06", "status": " GP" },
  { "name": "theHunter: Call of the Wild™ - Seasoned Hunter Bundle", "price": "3.45", "flag": "🇹🇷", "date": "25.06", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Traveler's Cosmetic Bundle", "price": "1.46", "flag": "🇹🇷", "date": "25.06", "status": "" }
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



