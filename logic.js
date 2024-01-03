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
  { "name": "Aery - Sky Castle", "price": "0.09", "flag": "🇦🇷", "date": "09.01", "status": " GOLD" },
  { "name": "Aery Series Bundle", "price": "0.49", "flag": "🇦🇷", "date": "07.01", "status": "" },
  { "name": "Agents of Mayhem - Total Mayhem Bundle", "price": "0.04", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Akai Katana Shin", "price": "4.68", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Alone in the Dark - Digital Deluxe Edition", "price": "5.26", "flag": "🇦🇷", "date": "17.01", "status": "" },
  { "name": "Alone in the Dark", "price": "4.56", "flag": "🇦🇷", "date": "17.01", "status": "" },
  { "name": "Alphaset by POWGI", "price": "0.07", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Anima: Gate of Memories - The Nameless Chronicles", "price": "0.05", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Anno 1800™ Console Edition", "price": "2.92", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Arcade Spirits: The New Challengers", "price": "0.24", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Assassin's Creed® Odyssey", "price": "0.6", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Assassin's Creed® Origins", "price": "0.45", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Assetto Corsa Competizione + 2023 GT World Challenge", "price": "5.41", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Assetto Corsa Ultimate Edition", "price": "0.13", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Asterigos: Curse of the Stars Deluxe Edition", "price": "6.24", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Asterigos: Curse of the Stars", "price": "1.43", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Avatar: Frontiers of Pandora™ Gold Edition", "price": "48.45", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Avatar: Frontiers of Pandora™ Ultimate Edition", "price": "56.1", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Aven Colony - Deluxe Edition", "price": "0.37", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Aven Colony", "price": "0.39", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Awarded Platformer Bundle", "price": "0.21", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "BATSUGUN Saturn Tribute Boosted", "price": "4.68", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Back 4 Blood: Deluxe Edition", "price": "1.6", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Before I Forget", "price": "0.09", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Before We Leave", "price": "0.65", "flag": "🇦🇷", "date": "17.01", "status": "" },
  { "name": "Best Month Ever!", "price": "0.2", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "BioShock 2 Remastered", "price": "0.97", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "BioShock Infinite: The Complete Edition", "price": "1.55", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "BioShock Remastered", "price": "1.55", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Blasphemous + Blasphemous 2 Bundle", "price": "9.87", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Borderlands 3: Next Level Edition", "price": "2.54", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Borderlands 3: Ultimate Edition", "price": "7.23", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Borderlands: The Handsome Collection", "price": "2.2", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Breathedge", "price": "0.14", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Bridge Constructor Portal", "price": "0.03", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "CODE VEIN Deluxe Edition", "price": "0.78", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Car Vouchers (24)", "price": "4.68", "flag": "🇦🇷", "date": "30.12", "status": " GOLD" },
  { "name": "CarX Drift Racing Online", "price": "0.17", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Cave Digger 2", "price": "0.22", "flag": "🇦🇷", "date": "04.01", "status": "" },
  { "name": "Chivalry 2 King's Edition", "price": "0.45", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Cleopatra Fortune™ S-Tribute", "price": "2.39", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Control Ultimate Edition", "price": "0.97", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Crown Trick", "price": "0.29", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Crypto by POWGI", "price": "0.07", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Cuphead & The Delicious Last Course", "price": "0.68", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Cuphead", "price": "0.26", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Cynthia: Hidden in the Moonshadow - Complete Edition", "price": "0.36", "flag": "🇦🇷", "date": "10.01", "status": "" },
  { "name": "Cynthia: Hidden in the Moonshadow", "price": "0.23", "flag": "🇦🇷", "date": "10.01", "status": "" },
  { "name": "DARKLAND 3", "price": "0.02", "flag": "🇦🇷", "date": "12.01", "status": "" },
  { "name": "DEAD ISLAND 2 DELUXE EDITION", "price": "15.28", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "DRAGON BALL FIGHTERZ - FighterZ Edition", "price": "1.8", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "DRAGON BALL XENOVERSE Super Bundle", "price": "1.46", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "DRAGON BALL Z: KAKAROT Deluxe Edition", "price": "11.47", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "DRAGON BALL: THE BREAKERS Special Edition", "price": "1.33", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Danger Gazers", "price": "0.13", "flag": "🇦🇷", "date": "09.01", "status": " GOLD" },
  { "name": "Dead Ground", "price": "0.06", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Dead Island Definitive Edition", "price": "0.29", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Dead Island Retro Revenge", "price": "0.01", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Dead Island: Riptide Definitive Edition", "price": "0.04", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles Ultimate Edition", "price": "33.42", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles", "price": "7.14", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Detective Reborn Bundle", "price": "4.91", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Die for Valhalla!", "price": "0.03", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Disco Elysium - The Final Cut", "price": "1.52", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Dishonored & Prey: The Arkane Collection", "price": "6.38", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Dishonored®: Death of the Outsider™ Deluxe Bundle", "price": "3.38", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Dolby Atmos for Headphones", "price": "0.22", "flag": "🇦🇷", "date": "04.01", "status": "" },
  { "name": "Dou", "price": "0.02", "flag": "🇦🇷", "date": "10.01", "status": "" },
  { "name": "Double Puzzled", "price": "2.81", "flag": "🇦🇷", "date": "09.01", "status": " GOLD" },
  { "name": "Dragon Ball Xenoverse + Season Pass", "price": "0.2", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Dragon Blaze", "price": "1.27", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Dreamfall Chapters", "price": "0.06", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Dungeon Rushers: Crawler RPG", "price": "0.03", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Dungeons 3", "price": "0.28", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Dying Light: Definitive Edition", "price": "1.04", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "EA SPORTS FC™ 24 Standard Edition Xbox One & Xbox Series X|S", "price": "9.55", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "ENDER LILIES: Quietus of the Knights", "price": "1.17", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Effie", "price": "0.11", "flag": "🇦🇷", "date": "09.01", "status": " GOLD" },
  { "name": "Eldest Souls", "price": "0.29", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Endzone - A World Apart: Survivor Edition", "price": "1.17", "flag": "🇦🇷", "date": "09.01", "status": " GOLD" },
  { "name": "Enter The Gungeon", "price": "0.08", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Escape Dead Island", "price": "0.05", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "Eternity: The Last Unicorn", "price": "0.06", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "FRONT MISSION 1st: Remake", "price": "0.43", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Fallout 4 (PC)", "price": "0.92", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Fallout 4", "price": "1.22", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Far Cry Classic", "price": "0.04", "flag": "🇦🇷", "date": "09.01", "status": " GOLD" },
  { "name": "Far Cry Primal", "price": "0.45", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Far Cry® 5", "price": "0.45", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Flockers", "price": "0.15", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Flowers by POWGI", "price": "0.07", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "From Heaven To Earth", "price": "0.08", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "GUNBARICH", "price": "1.27", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Gangs of Sherwood – Lionheart Edition", "price": "5.37", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Genesis Alpha One Deluxe Edition", "price": "0.08", "flag": "🇦🇷", "date": "17.01", "status": "" },
  { "name": "Genesis Alpha One", "price": "0.1", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Ghostrunner 2 Brutal Edition", "price": "7.14", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Ghostrunner: Complete Edition", "price": "2.34", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Going Under", "price": "0.29", "flag": "🇦🇷", "date": "17.01", "status": "" },
  { "name": "Golf With Your Friends - Starter Edition", "price": "8.19", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Golf With Your Friends", "price": "1.46", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Gord", "price": "8.45", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Grand Theft Auto Online", "price": "3.72", "flag": "🇹🇷", "date": "06.01", "status": "" },
  { "name": "Grand Theft Auto V (Xbox One & Xbox Series X|S)", "price": "6.72", "flag": "🇹🇷", "date": "06.01", "status": "" },
  { "name": "Grand Theft Auto V: Premium Edition & Great White Shark C...", "price": "1.34", "flag": "🇦🇷", "date": "06.01", "status": "" },
  { "name": "Grand Theft Auto V: Premium Edition & Megalodon Shark Car...", "price": "2.34", "flag": "🇦🇷", "date": "06.01", "status": "" },
  { "name": "Grand Theft Auto V: Premium Edition & Whale Shark Card Bu...", "price": "1.56", "flag": "🇦🇷", "date": "06.01", "status": "" },
  { "name": "Graveyard Keeper: Last Journey Edition", "price": "0.23", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "GreedFall - Gold Edition (Windows 10)", "price": "0.86", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "GreedFall - Gold Edition", "price": "1.52", "flag": "🇦🇷", "date": "09.01", "status": " GOLD" },
  { "name": "Guacamelee! 2", "price": "0.09", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "HITMAN World of Assasination Upgrade Pack", "price": "7.28", "flag": "🇦🇷", "date": "01.02", "status": " GOLD" },
  { "name": "HOT WHEELS UNLEASHED™ - Game Of The Year Edition - Xbox S...", "price": "0.78", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ - Game Of The Year Edition", "price": "0.78", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ - Xbox Series X|S", "price": "0.49", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™", "price": "0.49", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "HUMANKIND™", "price": "7.84", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Harvest Life", "price": "0.36", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Heavy Burden", "price": "0.07", "flag": "🇦🇷", "date": "14.12", "status": "" },
  { "name": "Heliborne", "price": "0.25", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Hell Let Loose - Ultimate Edition", "price": "22.93", "flag": "🇹🇷", "date": "04.01", "status": "" },
  { "name": "Hitchhiker", "price": "0.09", "flag": "🇦🇷", "date": "22.01", "status": "" },
  { "name": "Hobo: Tough Life", "price": "1.15", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Horror Tale 2: Samantha", "price": "0.1", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Hotline Miami Collection", "price": "0.64", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "House Flipper", "price": "0.12", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Howl", "price": "1.23", "flag": "🇦🇷", "date": "23.01", "status": " GOLD" },
  { "name": "Insurgency: Sandstorm - Deluxe Edition", "price": "11.05", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Iron Harvest Complete Edition", "price": "1.59", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Itorah", "price": "0.18", "flag": "🇦🇷", "date": "09.01", "status": " GOLD" },
  { "name": "Jack Move", "price": "1.2", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "JoJo's Bizarre Adventure: All-Star Battle R Deluxe Edition", "price": "4.05", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Kerbal Space Program Enhanced Edition Complete", "price": "3.02", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "King of Seas", "price": "0.12", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "King's Bounty II", "price": "0.78", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Kingdom Come: Deliverance - Royal Edition", "price": "1.08", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "L.A. Noire", "price": "3.4", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "LEGO® 2K Drive Awesome Edition", "price": "21.32", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "LEGO® Brawls", "price": "1.07", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "LEGO® Star Wars™: The Force Awakens Deluxe Edition", "price": "0.26", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Leisure Suit Larry - Wet Dreams Dry Twice", "price": "0.36", "flag": "🇦🇷", "date": "09.01", "status": " GOLD" },
  { "name": "Lies of P Digital Deluxe Edition", "price": "14.56", "flag": "🇦🇷", "date": "16.03", "status": " GOLD" },
  { "name": "Light & Dark Bundle", "price": "2.07", "flag": "🇦🇷", "date": "02.11", "status": "" },
  { "name": "Little Nightmares Complete Edition", "price": "1.64", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Little Nightmares I & II Bundle", "price": "2.03", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Livelock", "price": "0.03", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Long Gone Days", "price": "0.37", "flag": "🇦🇷", "date": "09.01", "status": " GOLD" },
  { "name": "Lords of the Fallen (2014)", "price": "0.21", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Lords of the Fallen Complete Edition (2014)", "price": "0.31", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Lost Judgment Digital Deluxe Edition", "price": "6.38", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Lovecraftian Bundle", "price": "4.55", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "MXGP 2020 - The Official Motocross Videogame", "price": "0.52", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "MY HERO ONE'S JUSTICE 2 Ultimate Edition", "price": "7.28", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Madden NFL 23 Xbox One", "price": "6.65", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "Madden NFL 23 Xbox Series X|S", "price": "7.8", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "Mafia II: Definitive Edition", "price": "2.23", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Mafia III: Definitive Edition", "price": "2.23", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Marvel's Midnight Suns Digital+ Edition for Xbox One", "price": "9.17", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Marvel's Midnight Suns Digital+ Edition for Xbox Series X|S", "price": "9.17", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Metal Black™ S-Tribute", "price": "1.32", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Metro Exodus Gold Edition", "price": "1.98", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Metro Redux Bundle", "price": "0.65", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.0", "flag": "🇦🇷", "date": "01.12", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.0", "flag": "🇹🇷", "date": "01.12", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.0", "flag": "🇦🇷", "date": "01.12", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.0", "flag": "🇹🇷", "date": "01.12", "status": "" },
  { "name": "Mighty Mage", "price": "0.06", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Mighty No. 9", "price": "0.04", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Momonga Pinball Adventures", "price": "0.02", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Monster Energy Supercross - The Official Videogame 5", "price": "0.78", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Monster Energy Supercross 5 - Special Edition", "price": "1.17", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "MotoGP™22", "price": "0.78", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Moving Out 2 - Deluxe Edition", "price": "9.33", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Moving Out", "price": "1.35", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Mugsters", "price": "0.15", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "My Time At Portia", "price": "0.49", "flag": "🇦🇷", "date": "09.01", "status": "" },
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
  { "name": "Neon Abyss", "price": "0.29", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "New Tales from the Borderlands: Deluxe Edition", "price": "4.55", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Ni no Kuni Wrath of the White Witch™ Remastered", "price": "2.5", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.05", "flag": "🇦🇷", "date": "31.05", "status": "" },
  { "name": "Nobody Saves the World", "price": "0.35", "flag": "🇦🇷", "date": "09.01", "status": " GOLD" },
  { "name": "Nocturnal", "price": "1.07", "flag": "🇦🇷", "date": "09.01", "status": " GOLD" },
  { "name": "Nova Lands", "price": "0.3", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "ONE PIECE BURNING BLOOD - Gold Edition", "price": "0.97", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "ONE PIECE ODYSSEY Deluxe Edition", "price": "4.52", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "ONE PIECE World Seeker Deluxe Edition", "price": "1.73", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "ONE PUNCH MAN: A HERO NOBODY KNOWS Deluxe Edition", "price": "0.92", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "OlliOlli World Rad Edition", "price": "4.81", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Outbreak Co-Op Collection", "price": "0.08", "flag": "🇦🇷", "date": "09.01", "status": " GOLD" },
  { "name": "Overcooked! 2 - Gourmet Edition", "price": "0.18", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Overrogue", "price": "0.17", "flag": "🇦🇷", "date": "09.01", "status": " GOLD" },
  { "name": "Overruled!", "price": "0.04", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "PAC-MAN MUSEUM+", "price": "0.65", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "PAC-MAN™ CHAMPIONSHIP EDITION 2", "price": "0.09", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "PGA TOUR 2K23 Deluxe Edition", "price": "9.34", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Paper Dash - Ghost Hunt", "price": "0.14", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Paperman: Adventure Delivered", "price": "0.3", "flag": "🇦🇷", "date": "04.01", "status": "" },
  { "name": "Park Beyond Visioneer Edition", "price": "8.15", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Pathfinder: Kingmaker - Definitive Edition", "price": "0.46", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Penarium", "price": "0.03", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Persona 3 Portable & Persona 4 Golden Bundle", "price": "13.26", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Pirates Pinball", "price": "0.03", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Portal Knights - Legendary Edition", "price": "0.33", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Prey®: Digital Deluxe Edition", "price": "1.94", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Project Wingman", "price": "0.23", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Pyro Complete Bundle", "price": "0.7", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "RAD", "price": "0.29", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "RAGE 2", "price": "1.94", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "RAGE 2: Deluxe Edition", "price": "3.83", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "RIDE 4 - Special Edition", "price": "1.36", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "RIDE 4", "price": "0.78", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Raging Justice", "price": "0.1", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Railway Empire – Complete Collection", "price": "0.45", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Rain World", "price": "0.37", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Rally Rock 'N Racing", "price": "0.09", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Ravenlok", "price": "0.35", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Ravva and the Phantom Library", "price": "3.12", "flag": "🇦🇷", "date": "04.01", "status": "" },
  { "name": "Red Dead Redemption 2: Ultimate Edition", "price": "2.73", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Regular Factory: Escape Room", "price": "0.11", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Relicta", "price": "0.11", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Remnant: From the Ashes - Complete Edition", "price": "0.58", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Remnant: From the Ashes", "price": "0.43", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Return to Monkey Island", "price": "1.38", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Revita", "price": "0.24", "flag": "🇦🇷", "date": "09.01", "status": " GOLD" },
  { "name": "RimWorld Console Edition - Digital Deluxe", "price": "6.76", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Robolifter (For Windows 10)", "price": "0.07", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Rock 'N Racing Bundle", "price": "0.08", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Rock 'N Racing Off Road", "price": "0.15", "flag": "🇦🇷", "date": "06.01", "status": "" },
  { "name": "Rollerdrome", "price": "6.44", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Rust Console Edition - Ultimate", "price": "6.24", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "SCARLET NEXUS Deluxe Edition", "price": "1.04", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "SD GUNDAM BATTLE ALLIANCE Deluxe Edition", "price": "4.09", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "SONIC FORCES™ Digital Standard Edition", "price": "3.4", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "SOULCALIBUR VI Deluxe Edition", "price": "1.46", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "2.22", "flag": "🇦🇷", "date": "01.01", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "1.66", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "SWORD ART ONLINE Alicization Lycoris Deluxe Edition", "price": "1.43", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "SWORD ART ONLINE Last Recollection Deluxe Edition", "price": "13.01", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "SWORD ART ONLINE: FATAL BULLET Complete Edition", "price": "1.53", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Saints Row Gold Edition", "price": "11.82", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Saints Row IV: Re-Elected & Gat out of Hell", "price": "0.08", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Scorn", "price": "1.1", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Seasons after Fall", "price": "0.09", "flag": "🇦🇷", "date": "09.01", "status": " GOLD" },
  { "name": "Shadowblade Odyssey", "price": "0.02", "flag": "🇦🇷", "date": "08.01", "status": "" },
  { "name": "Shady Part of Me", "price": "0.31", "flag": "🇦🇷", "date": "09.01", "status": " GOLD" },
  { "name": "Sherlock Holmes: Crimes and Punishments + Sherlock Holmes...", "price": "0.99", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Shiness: The Lightning Kingdom", "price": "0.13", "flag": "🇦🇷", "date": "09.01", "status": " GOLD" },
  { "name": "Shmups Collection", "price": "0.09", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Shootvaders The Beginning", "price": "1.95", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Shotgun Farmers", "price": "0.07", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Sid Meier’s Civilization® VI Anthology", "price": "7.72", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Sid Meier’s Civilization® VI Platinum Edition", "price": "3.73", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Skater XL", "price": "0.56", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Skyrim Anniversary Edition + Fallout 4 G.O.T.Y Bundle", "price": "8.98", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Skyrim Anniversary Edition + Fallout 4 G.O.T.Y Bundle", "price": "8.98", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Sniper Ghost Warrior 3 Season Pass Edition", "price": "0.15", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Sniper Ghost Warrior Contracts & SGW3 Unlimited Edition", "price": "2.11", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Sniper Ghost Warrior Contracts 1 & 2 Double Pack", "price": "2.73", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Sniper Ghost Warrior Contracts 2 Complete Edition", "price": "2.11", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Sniper Ghost Warrior Contracts 2 Deluxe Arsenal Edition", "price": "1.62", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Sniper Ghost Warrior Contracts Full Arsenal Edition", "price": "1.62", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "SnowRunner - 1-Anniversary Edition", "price": "2.21", "flag": "🇦🇷", "date": "09.01", "status": " GOLD" },
  { "name": "SnowRunner - 2-Year Anniversary Edition", "price": "8.45", "flag": "🇦🇷", "date": "09.01", "status": " GOLD" },
  { "name": "Sonic Colors: Ultimate - Digital Deluxe", "price": "6.38", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Sonic Frontiers", "price": "12.24", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Sonic Mania", "price": "0.83", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Sonic Origins Plus", "price": "18.76", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "South Park™: The Fractured but Whole™", "price": "0.81", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "South Park™: The Stick of Truth ™", "price": "0.15", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Space Hulk: Tactics", "price": "0.34", "flag": "🇦🇷", "date": "09.01", "status": " GOLD" },
  { "name": "Sparkle Bundle", "price": "0.17", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "Speedway Bundle Stock & Truck", "price": "0.22", "flag": "🇦🇷", "date": "05.01", "status": "" },
  { "name": "Strategic Mind: Spectre of Communism", "price": "1.64", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Subnautica: Below Zero", "price": "0.18", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Sudden Strike 4 - European Battlefields Edition", "price": "0.28", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Super Pixel Kid", "price": "0.02", "flag": "🇦🇷", "date": "04.01", "status": "" },
  { "name": "Super Space Serpent SE", "price": "0.05", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "THE KING OF FIGHTERS XV Standard Edition", "price": "1.51", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Taiko no Tatsujin: The Drum Master!", "price": "1.3", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Tales of Arise - Beyond the Dawn Deluxe Edition", "price": "38.22", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Tales of Kenzera™: ZAU Standard Edition", "price": "8.19", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Tanks Bundle", "price": "0.18", "flag": "🇦🇷", "date": "07.01", "status": "" },
  { "name": "Tears of Avia", "price": "0.11", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "The Beast Inside (Console Version)", "price": "0.19", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "The Bridge Curse: Road to Salvation", "price": "6.82", "flag": "🇦🇷", "date": "09.01", "status": " GOLD" },
  { "name": "The Dark Pictures Anthology House of Ashes", "price": "0.94", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "The Dark Pictures Anthology: Little Hope", "price": "1.36", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "The Dark Pictures Anthology: Man Of Medan", "price": "1.36", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "The Dark Pictures Anthology: Season One", "price": "4.94", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "The Dark Pictures Anthology: The Devil in Me", "price": "2.66", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "The Elder Scrolls Online Collection: Necrom", "price": "23.8", "flag": "🇹🇷", "date": "03.01", "status": "" },
  { "name": "The Elder Scrolls Online Deluxe Collection: Necrom", "price": "30.6", "flag": "🇹🇷", "date": "03.01", "status": "" },
  { "name": "The Elder Scrolls® Online", "price": "4.0", "flag": "🇹🇷", "date": "03.01", "status": "" },
  { "name": "The Escapists", "price": "0.06", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "The Escapists: Supermax Edition", "price": "0.33", "flag": "🇦🇷", "date": "30.04", "status": "" },
  { "name": "The Expanse: A Telltale Series - Deluxe Edition", "price": "0.33", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "The Expanse: A Telltale Series", "price": "0.28", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "The FMV Bundle", "price": "0.6", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "The FMV Collection 1", "price": "0.42", "flag": "🇦🇷", "date": "09.01", "status": " GOLD" },
  { "name": "The FMV Collection 2", "price": "0.42", "flag": "🇦🇷", "date": "09.01", "status": " GOLD" },
  { "name": "The FMV Collection 3", "price": "0.42", "flag": "🇦🇷", "date": "09.01", "status": " GOLD" },
  { "name": "The Jackbox Party Quadpack", "price": "0.73", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "The Letter: A Horror Visual Novel", "price": "0.15", "flag": "🇦🇷", "date": "09.01", "status": " GOLD" },
  { "name": "The Outer Worlds: Board-Approved Bundle", "price": "11.0", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "The Quarry - Deluxe Edition", "price": "6.71", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "The Surge - Augmented Edition", "price": "0.58", "flag": "🇦🇷", "date": "09.01", "status": " GOLD" },
  { "name": "The Surge 2 - Premium Edition", "price": "1.29", "flag": "🇦🇷", "date": "09.01", "status": " GOLD" },
  { "name": "The Surge 2 - Windows 10", "price": "0.42", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "The Surge 2", "price": "0.81", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "This War of Mine: The Little Ones", "price": "0.04", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Three Minutes To Eight", "price": "1.16", "flag": "🇹🇷", "date": "05.01", "status": "" },
  { "name": "Thunder Ray", "price": "1.16", "flag": "🇹🇷", "date": "09.01", "status": " GOLD" },
  { "name": "Time Rift", "price": "0.07", "flag": "🇦🇷", "date": "09.01", "status": " GOLD" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands - Standard Edition", "price": "0.6", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Tomb Raider I-III Remastered Starring Lara Croft", "price": "6.43", "flag": "🇦🇷", "date": "13.02", "status": "" },
  { "name": "Torchlight II", "price": "0.18", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Torchlight III", "price": "0.29", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Tortuga - A Pirate's Tale", "price": "0.45", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Totally Accurate Battle Simulator", "price": "0.26", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Tropico 5 - Complete Collection", "price": "0.36", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "True Survivors Bundle", "price": "9.95", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Turnip Boy Commits Tax Evasion", "price": "0.09", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Twin Mirror", "price": "0.39", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Two Point Hospital: JUMBO Edition", "price": "0.52", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Two Point Hospital™", "price": "0.91", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Ultimate Chicken Horse", "price": "0.1", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Under The Waves", "price": "1.43", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "0.18", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Unpacking", "price": "0.18", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Vermintide - Digital Value Pack", "price": "0.52", "flag": "🇦🇷", "date": "07.03", "status": "" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "0.83", "flag": "🇦🇷", "date": "31.08", "status": "" },
  { "name": "WWE 2K23 Deluxe Edition", "price": "25.84", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "War Hospital - Supporter Edition", "price": "6.9", "flag": "🇦🇷", "date": "11.01", "status": "" },
  { "name": "War Hospital", "price": "5.73", "flag": "🇦🇷", "date": "11.01", "status": "" },
  { "name": "Warhammer 40,000: Mechanicus", "price": "0.19", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Wavetale", "price": "1.38", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "We Love Katamari REROLL+ Royal Reverie Special Edition", "price": "5.23", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Weedcraft Inc & Moonshine Inc - Risky Business Bundle", "price": "2.37", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Weedcraft Inc", "price": "0.33", "flag": "🇦🇷", "date": "09.01", "status": " GOLD" },
  { "name": "Who Pressed Mute on Uncle Marcus?", "price": "0.17", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Wolfenstein II: Standard Edition", "price": "0.68", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Wolfenstein: Alt History Collection", "price": "4.25", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Wolfenstein: The New Order", "price": "0.58", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Wolfenstein: The Old Blood", "price": "0.49", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Wolfenstein: Youngblood Deluxe Edition", "price": "2.23", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Wolfenstein: Youngblood", "price": "1.47", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Wolfenstein® II: The New Colossus™", "price": "0.92", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Wolfenstein®: The Two-Pack", "price": "1.35", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Worms Battlegrounds + Worms W.M.D", "price": "0.16", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "Worms Rumble - Digital Deluxe Edition", "price": "0.08", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "X-Force Genesis PC Edition", "price": "0.02", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "X-Force Under Attack", "price": "0.04", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "XCOM® 2 Digital Deluxe Edition", "price": "0.26", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "XCOM® 2", "price": "0.12", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "XCOM®: Enemy Within", "price": "0.1", "flag": "🇦🇷", "date": "09.01", "status": " GOLD" },
  { "name": "Yakuza: Like a Dragon Hero Edition", "price": "3.53", "flag": "🇹🇷", "date": "16.01", "status": "" },
  { "name": "Yum Yum Cookstar", "price": "0.07", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "ZERO GUNNER 2-", "price": "1.27", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "Zombie Watch", "price": "0.77", "flag": "🇦🇷", "date": "09.01", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Greenhorn Bundle", "price": "0.37", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Seasoned Hunter Bundle", "price": "0.6", "flag": "🇦🇷", "date": "16.01", "status": "" },
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



