const input = document.querySelector('.input');
const output = document.querySelector('.output-res');
const list = document.querySelector('.list')
const showBtn = document.querySelector('.show')


showBtn.addEventListener('click', () => {
  showBtn.classList.contains('active') ?
    hiddenMenu() : showMenu()
})

let usd = 88;

const arr = [
  { "name": "Aery - A New Frontier", "price": "0.41", "region": "A", "data": "5/16", "status": "" },
  { "name": "After You - Level Escape", "price": "0.35", "region": "A", "data": "5/11", "status": "" },
  { "name": "Airoheart", "price": "1.26", "region": "A", "data": "5/16", "status": "" },
  { "name": "An Airport for Aliens Currently Run by Dogs", "price": "0.75", "region": "A", "data": "5/16", "status": "GOLD" },
  { "name": "As Dusk Falls", "price": "2.83", "region": "E", "data": "5/23", "status": "" },
  { "name": "As Far As The Eye", "price": "1.03", "region": "A", "data": "5/16", "status": "" },
  { "name": "Asdivine Saga", "price": "0.52", "region": "A", "data": "5/16", "status": "GOLD" },
  { "name": "Assassin's Creed® Valhalla Complete Edition", "price": "13.18", "region": "A", "data": "5/16", "status": "" },
  { "name": "Assassin's Creed® Valhalla Deluxe Edition", "price": "5.49", "region": "A", "data": "5/16", "status": "" },
  { "name": "Assassin's Creed® Valhalla Ragnarök Edition", "price": "9.22", "region": "A", "data": "5/16", "status": "" },
  { "name": "Awarded Platformer Bundle", "price": "0.72", "region": "A", "data": "12/3", "status": "" },
  { "name": "Ayo the Clown", "price": "0.75", "region": "A", "data": "5/16", "status": "GOLD" },
  { "name": "BIOHAZARD VILLAGE Z Version", "price": "22.21", "region": "J", "data": "5/16", "status": "" },
  { "name": "BIOHAZARD VILLAGE Z version GOLD EDITION", "price": "29.77", "region": "J", "data": "5/16", "status": "" },
  { "name": "Back 4 Blood", "price": "3.46", "region": "E", "data": "5/16", "status": "" },
  { "name": "Barn Finders", "price": "4.67", "region": "A", "data": "5/16", "status": "" },
  { "name": "Batora: Lost Haven", "price": "3.31", "region": "A", "data": "5/16", "status": "" },
  { "name": "Battlefield™ 2042 Xbox One & Xbox Series X|S", "price": "8.43", "region": "A", "data": "5/16", "status": "" },
  { "name": "Battletoads", "price": "1.46", "region": "E", "data": "5/23", "status": "" },
  { "name": "BioShock: The Collection", "price": "2.43", "region": "T", "data": "5/16", "status": "GOLD" },
  { "name": "Biomutant", "price": "2.58", "region": "A", "data": "5/16", "status": "" },
  { "name": "Bleeding Edge", "price": "0.90", "region": "T", "data": "5/23", "status": "" },
  { "name": "Blood Bowl 3 - Black Orcs Edition", "price": "15.37", "region": "A", "data": "5/16", "status": "" },
  { "name": "Blood Bowl 3 - Imperial Nobility Edition", "price": "15.37", "region": "A", "data": "5/16", "status": "" },
  { "name": "Borderlands 3", "price": "1.81", "region": "A", "data": "5/16", "status": "" },
  { "name": "Borderlands 3: Super Deluxe Edition", "price": "3.84", "region": "A", "data": "5/16", "status": "GOLD" },
  { "name": "Borderlands Legendary Collection", "price": "5.72", "region": "T", "data": "5/16", "status": "GOLD" },
  { "name": "Borderlands: Game of the Year Edition", "price": "2.06", "region": "A", "data": "5/16", "status": "GOLD" },
  { "name": "Borderlands: The Handsome Collection", "price": "2.97", "region": "A", "data": "5/16", "status": "GOLD" },
  { "name": "Boss Rush: Mythology", "price": "0.50", "region": "A", "data": "5/10", "status": "" },
  { "name": "Boss Rush: Mythology (Xbox Series X|S)", "price": "0.50", "region": "A", "data": "5/10", "status": "" },
  { "name": "Brewmaster: Beer Brewing Simulator", "price": "0.90", "region": "A", "data": "5/16", "status": "" },
  { "name": "Broken Age", "price": "0.10", "region": "A", "data": "5/23", "status": "" },
  { "name": "Broken Age", "price": "0.14", "region": "A", "data": "5/23", "status": "" },
  { "name": "Bundle: South Park™ : The Stick of Truth™ + The Fractured...", "price": "4.07", "region": "T", "data": "5/16", "status": "GOLD" },
  { "name": "Bunny Park", "price": "0.87", "region": "A", "data": "5/16", "status": "" },
  { "name": "CAN ANDROIDS PRAY: BLUE", "price": "0.29", "region": "A", "data": "5/16", "status": "" },
  { "name": "Call of Duty®: Black Ops Cold War - Cross-Gen Bundle", "price": "11.25", "region": "A", "data": "5/16", "status": "" },
  { "name": "Call of Duty®: Vanguard - Cross-Gen Bundle", "price": "13.84", "region": "A", "data": "5/16", "status": "" },
  { "name": "Carnival Games®", "price": "1.31", "region": "A", "data": "5/16", "status": "GOLD" },
  { "name": "Cars 3: Driven to Win", "price": "0.99", "region": "A", "data": "5/16", "status": "" },
  { "name": "Charon's Staircase", "price": "1.10", "region": "A", "data": "5/16", "status": "" },
  { "name": "Clash - Zeno Edition", "price": "21.22", "region": "A", "data": "5/16", "status": "" },
  { "name": "Clunky Hero", "price": "1.63", "region": "T", "data": "5/16", "status": "GOLD" },
  { "name": "Color Pals", "price": "2.62", "region": "I", "data": "5/18", "status": "" },
  { "name": "Conan Chop Chop", "price": "1.54", "region": "A", "data": "5/16", "status": "" },
  { "name": "Couch Multiplayer Bundle: Genetic Disaster, Super Cyborg ...", "price": "0.56", "region": "A", "data": "5/16", "status": "" },
  { "name": "Crackdown 3", "price": "1.67", "region": "T", "data": "5/23", "status": "" },
  { "name": "Crash Bandicoot™ 4: It’s About Time", "price": "4.35", "region": "A", "data": "5/16", "status": "" },
  { "name": "Creepy Tale 2", "price": "3.50", "region": "E", "data": "5/12", "status": "" },
  { "name": "Crimson Dragon", "price": "0.16", "region": "A", "data": "5/23", "status": "" },
  { "name": "Crysis Remastered Trilogy", "price": "6.76", "region": "A", "data": "5/16", "status": "GOLD" },
  { "name": "Cyberpunk 2077", "price": "8.78", "region": "A", "data": "5/16", "status": "" },
  { "name": "D4: Dark Dreams Don't Die", "price": "0.16", "region": "A", "data": "5/23", "status": "" },
  { "name": "DARKLAND 3", "price": "0.07", "region": "A", "data": "5/12", "status": "" },
  { "name": "DRAGON BALL Z: KAKAROT Legendary Edition", "price": "30.73", "region": "T", "data": "5/16", "status": "" },
  { "name": "Dance of Death: Du Lac & Fey", "price": "3.40", "region": "E", "data": "5/16", "status": "GOLD" },
  { "name": "Dead Space", "price": "27.68", "region": "A", "data": "5/16", "status": "" },
  { "name": "Deceive Inc.", "price": "1.00", "region": "A", "data": "5/11", "status": "" },
  { "name": "Deceive Inc. Black Tie Edition Content", "price": "1.51", "region": "A", "data": "5/11", "status": "" },
  { "name": "Demon Skin", "price": "0.50", "region": "A", "data": "5/20", "status": "" },
  { "name": "Deployment", "price": "0.14", "region": "E", "data": "5/16", "status": "" },
  { "name": "Devil May Cry 5 Special Edition", "price": "6.04", "region": "A", "data": "5/16", "status": "" },
  { "name": "Diablo® II: Resurrected™", "price": "3.79", "region": "E", "data": "5/16", "status": "" },
  { "name": "Dig Deep", "price": "0.25", "region": "A", "data": "5/13", "status": "" },
  { "name": "Disciples: Liberation Digital Deluxe Edition", "price": "2.08", "region": "A", "data": "5/16", "status": "" },
  { "name": "Disneyland Adventures", "price": "0.31", "region": "A", "data": "5/23", "status": "" },
  { "name": "Divinity: Original Sin - Enhanced Edition", "price": "1.30", "region": "A", "data": "5/16", "status": "" },
  { "name": "Divinity: Original Sin - The Source Saga", "price": "2.08", "region": "A", "data": "5/16", "status": "" },
  { "name": "Divinity: Original Sin 2 - Definitive Edition", "price": "1.25", "region": "A", "data": "5/16", "status": "" },
  { "name": "Dolmen", "price": "1.76", "region": "A", "data": "5/16", "status": "" },
  { "name": "Dou", "price": "0.07", "region": "A", "data": "5/11", "status": "" },
  { "name": "Dying Light: Definitive Edition", "price": "2.55", "region": "T", "data": "5/16", "status": "" },
  { "name": "EA SPORTS™ FIFA 23 Standard Edition Xbox One", "price": "10.54", "region": "A", "data": "5/16", "status": "" },
  { "name": "EA SPORTS™ FIFA 23 Standard Edition Xbox One", "price": "10.54", "region": "A", "data": "12/3", "status": "" },
  { "name": "EA SPORTS™ FIFA 23 Standard Edition Xbox Series X|S", "price": "15.81", "region": "A", "data": "5/16", "status": "" },
  { "name": "EA SPORTS™ PGA TOUR™", "price": "23.72", "region": "A", "data": "5/23", "status": "" },
  { "name": "EA SPORTS™ PGA TOUR™ Deluxe Edition", "price": "29.52", "region": "A", "data": "5/23", "status": "" },
  { "name": "ELEX II", "price": "4.83", "region": "A", "data": "5/16", "status": "" },
  { "name": "Escape Dead Island", "price": "0.17", "region": "A", "data": "5/16", "status": "" },
  { "name": "F1® 23 Champions Edition + Limited Time Bonus", "price": "63.26", "region": "A", "data": "5/31", "status": "" },
  { "name": "FIFA 22 Xbox One", "price": "19.33", "region": "A", "data": "5/16", "status": "" },
  { "name": "FIFA 22 Xbox Series X|S", "price": "22.49", "region": "A", "data": "5/16", "status": "" },
  { "name": "FLASHOUT 3", "price": "10.05", "region": "I", "data": "5/16", "status": "GOLD" },
  { "name": "Falling Out", "price": "0.55", "region": "A", "data": "5/16", "status": "GOLD" },
  { "name": "Fantasy Dash", "price": "0.07", "region": "A", "data": "5/13", "status": "" },
  { "name": "Far Cry® 3 Blood Dragon Classic Edition", "price": "3.29", "region": "A", "data": "5/16", "status": "GOLD" },
  { "name": "Far Cry® 3 Classic Edition", "price": "0.49", "region": "A", "data": "5/16", "status": "GOLD" },
  { "name": "Far Cry® 6 Game of the Year Edition", "price": "13.18", "region": "A", "data": "5/16", "status": "" },
  { "name": "Far Cry® 6 Gold Edition", "price": "8.79", "region": "A", "data": "5/16", "status": "" },
  { "name": "Far Cry® New Dawn Deluxe Edition", "price": "1.58", "region": "A", "data": "5/16", "status": "GOLD" },
  { "name": "Fatum Betula + Food Truck Tycoon", "price": "0.34", "region": "A", "data": "5/19", "status": "" },
  { "name": "Figment: Journey Into the Mind", "price": "1.17", "region": "E", "data": "5/16", "status": "" },
  { "name": "Flipping Death", "price": "0.17", "region": "A", "data": "5/16", "status": "" },
  { "name": "Flying Islands Games Bundle", "price": "0.41", "region": "A", "data": "5/16", "status": "" },
  { "name": "Food Truck Tycoon", "price": "1.00", "region": "E", "data": "5/16", "status": "" },
  { "name": "For Honor® Complete Edition", "price": "5.49", "region": "A", "data": "5/16", "status": "GOLD" },
  { "name": "Forza Horizon 4 Deluxe Edition", "price": "8.04", "region": "E", "data": "5/23", "status": "" },
  { "name": "Forza Horizon 4 Standard Edition", "price": "5.71", "region": "E", "data": "5/23", "status": "" },
  { "name": "Forza Horizon 4 Ultimate Edition", "price": "10.08", "region": "E", "data": "5/23", "status": "" },
  { "name": "Forza Horizon 5 + 4 Premium Upgrade Bundle", "price": "11.52", "region": "E", "data": "5/23", "status": "" },
  { "name": "Forza Horizon 5 Deluxe Edition", "price": "12.64", "region": "E", "data": "5/23", "status": "" },
  { "name": "Forza Horizon 5 Premium Add-Ons Bundle", "price": "8.64", "region": "E", "data": "5/23", "status": "" },
  { "name": "Forza Horizon 5 Premium Edition", "price": "15.84", "region": "E", "data": "5/23", "status": "" },
  { "name": "Forza Horizon 5 Standard Edition", "price": "9.52", "region": "E", "data": "5/23", "status": "" },
  { "name": "Forza Horizon 5 and Forza Horizon 4 Premium Editions Bundle", "price": "18.96", "region": "E", "data": "5/23", "status": "" },
  { "name": "Fruit Ninja Kinect 2", "price": "0.16", "region": "A", "data": "5/23", "status": "" },
  { "name": "Fuga: Melodies of Steel", "price": "6.89", "region": "E", "data": "5/16", "status": "" },
  { "name": "Fuga: Melodies of Steel - Deluxe Edition", "price": "10.39", "region": "E", "data": "5/16", "status": "" },
  { "name": "GIGA WRECKER ALT.", "price": "0.47", "region": "A", "data": "5/16", "status": "" },
  { "name": "Gears 5", "price": "3.79", "region": "E", "data": "5/23", "status": "" },
  { "name": "Gears 5 Game of the Year Edition", "price": "5.71", "region": "E", "data": "5/23", "status": "" },
  { "name": "Gears Tactics", "price": "3.79", "region": "E", "data": "5/23", "status": "" },
  { "name": "Gears Triple Bundle", "price": "6.89", "region": "E", "data": "5/23", "status": "" },
  { "name": "Gears of War 4", "price": "1.28", "region": "T", "data": "5/23", "status": "" },
  { "name": "Gematombe", "price": "0.75", "region": "A", "data": "5/13", "status": "" },
  { "name": "Ghost Sweeper", "price": "0.18", "region": "A", "data": "5/16", "status": "" },
  { "name": "Golf With Your Friends", "price": "1.42", "region": "A", "data": "5/12", "status": "" },
  { "name": "Gotham Knights", "price": "11.60", "region": "A", "data": "5/16", "status": "" },
  { "name": "Grand Theft Auto V", "price": "8.78", "region": "A", "data": "5/16", "status": "" },
  { "name": "Grand Theft Auto V: Premium Edition", "price": "4.56", "region": "A", "data": "5/16", "status": "GOLD" },
  { "name": "Grand Theft Auto: The Trilogy – The Definitive Edition", "price": "13.18", "region": "A", "data": "5/16", "status": "" },
  { "name": "Grapple Dog", "price": "0.47", "region": "A", "data": "5/16", "status": "" },
  { "name": "Greak: Memories of Azur", "price": "1.18", "region": "A", "data": "5/12", "status": "" },
  { "name": "Grindstone", "price": "4.66", "region": "E", "data": "5/18", "status": "" },
  { "name": "Gruta", "price": "0.25", "region": "A", "data": "5/20", "status": "" },
  { "name": "Guards", "price": "0.05", "region": "A", "data": "5/16", "status": "" },
  { "name": "Gunborg: Dark Matters", "price": "0.24", "region": "A", "data": "5/16", "status": "" },
  { "name": "Halo 5: Guardians", "price": "2.96", "region": "A", "data": "5/23", "status": "" },
  { "name": "Halo Infinite (Campaign)", "price": "8.66", "region": "E", "data": "5/23", "status": "" },
  { "name": "Halo Wars 2: Complete Edition", "price": "8.79", "region": "A", "data": "5/23", "status": "" },
  { "name": "Halo Wars 2: Standard Edition", "price": "6.04", "region": "A", "data": "5/23", "status": "" },
  { "name": "Halo: The Master Chief Collection", "price": "9.66", "region": "A", "data": "5/23", "status": "" },
  { "name": "Halo: The Master Chief Collection", "price": "2.26", "region": "T", "data": "5/23", "status": "" },
  { "name": "Hellblade: Senua's Sacrifice", "price": "0.39", "region": "A", "data": "5/23", "status": "" },
  { "name": "Horror Tale 1: Kidnapper", "price": "0.47", "region": "A", "data": "5/16", "status": "GOLD" },
  { "name": "Hotshot Racing", "price": "0.25", "region": "A", "data": "5/16", "status": "GOLD" },
  { "name": "Hunt Ducks 4", "price": "0.07", "region": "A", "data": "5/19", "status": "" },
  { "name": "Hunt: Showdown - Deluxe Edition", "price": "2.17", "region": "T", "data": "5/16", "status": "" },
  { "name": "Hunting Simulator 2: Elite Edition Xbox Series X|S", "price": "0.88", "region": "A", "data": "5/16", "status": "" },
  { "name": "Iron Harvest Complete Edition", "price": "5.38", "region": "A", "data": "5/16", "status": "" },
  { "name": "Joy Ball Adventure", "price": "0.07", "region": "A", "data": "5/16", "status": "" },
  { "name": "Kaiju Wars", "price": "0.87", "region": "A", "data": "5/16", "status": "" },
  { "name": "Kao the Kangaroo", "price": "4.99", "region": "A", "data": "5/23", "status": "" },
  { "name": "Killer Instinct: Definitive Edition", "price": "4.39", "region": "A", "data": "5/23", "status": "" },
  { "name": "LEGO® Builder's Journey", "price": "0.62", "region": "A", "data": "5/16", "status": "" },
  { "name": "LEGO® Star Wars™:The Skywalker Saga Deluxe Edition", "price": "8.03", "region": "E", "data": "5/16", "status": "" },
  { "name": "Lemon Cake", "price": "1.51", "region": "A", "data": "5/16", "status": "" },
  { "name": "Liftoff: Drone Racing", "price": "0.32", "region": "A", "data": "5/16", "status": "" },
  { "name": "Liftoff: Drone Racing Deluxe Edition", "price": "0.38", "region": "A", "data": "5/16", "status": "" },
  { "name": "Light & Dark Bundle", "price": "0.99", "region": "A", "data": "11/2", "status": "" },
  { "name": "Little Mage Adventure", "price": "0.07", "region": "A", "data": "5/21", "status": "" },
  { "name": "Long Ago: A Puzzle Tale", "price": "1.00", "region": "E", "data": "5/16", "status": "" },
  { "name": "MASSIVE CHALICE", "price": "0.26", "region": "A", "data": "5/23", "status": "" },
  { "name": "MELTY BLOOD: TYPE LUMINA", "price": "1.88", "region": "A", "data": "5/22", "status": "" },
  { "name": "MELTY BLOOD: TYPE LUMINA - Deluxe Edition", "price": "2.63", "region": "A", "data": "5/22", "status": "" },
  { "name": "MX vs ATV All Out", "price": "0.33", "region": "A", "data": "5/16", "status": "" },
  { "name": "MXGP 2019 - The Official Motocross Videogame", "price": "0.99", "region": "A", "data": "5/16", "status": "" },
  { "name": "MXGP2", "price": "0.33", "region": "A", "data": "5/16", "status": "" },
  { "name": "Madden NFL 19", "price": "26.24", "region": "C", "data": "12/3", "status": "" },
  { "name": "Madden NFL 22 Xbox One", "price": "16.91", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 22 Xbox Series X|S", "price": "19.68", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 23 All Madden Edition Xbox One & Xbox Series X|S", "price": "13.97", "region": "A", "data": "5/16", "status": "" },
  { "name": "Madden NFL 23 Xbox One", "price": "22.49", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 23 Xbox Series X|S", "price": "26.36", "region": "A", "data": "12/3", "status": "" },
  { "name": "Mafia: Definitive Edition", "price": "4.00", "region": "A", "data": "5/16", "status": "GOLD" },
  { "name": "Mafia: Trilogy", "price": "6.64", "region": "A", "data": "5/16", "status": "GOLD" },
  { "name": "Marvel's Midnight Suns Enhanced Edition", "price": "17.57", "region": "A", "data": "5/16", "status": "" },
  { "name": "Marvel's Midnight Suns Legendary Edition", "price": "24.16", "region": "A", "data": "5/16", "status": "" },
  { "name": "Masters of Anima", "price": "0.43", "region": "A", "data": "5/16", "status": "GOLD" },
  { "name": "Max: The Curse of Brotherhood", "price": "0.13", "region": "A", "data": "5/23", "status": "" },
  { "name": "Metaloid: Origin", "price": "1.20", "region": "E", "data": "5/16", "status": "" },
  { "name": "Metro Exodus", "price": "0.99", "region": "A", "data": "5/16", "status": "" },
  { "name": "Mia and the Dragon Princess", "price": "0.74", "region": "A", "data": "5/26", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.00", "region": "U", "data": "12/1", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.00", "region": "U", "data": "12/1", "status": "" },
  { "name": "Mini Madness", "price": "0.28", "region": "A", "data": "5/16", "status": "" },
  { "name": "Monster Energy Supercross - The Official Videogame 2", "price": "1.32", "region": "A", "data": "5/16", "status": "" },
  { "name": "Monster Energy Supercross - The Official Videogame 4", "price": "1.98", "region": "A", "data": "5/16", "status": "" },
  { "name": "Monster Energy Supercross 2 - Special Edition", "price": "2.64", "region": "A", "data": "5/16", "status": "" },
  { "name": "Monster Energy Supercross 4 - Special Edition", "price": "3.29", "region": "A", "data": "5/16", "status": "" },
  { "name": "Monster Energy Supercross 4 - Special Edition - Xbox Series X|S", "price": "3.29", "region": "A", "data": "5/16", "status": "" },
  { "name": "Monster Energy Supercross 4 - Xbox Series X|S", "price": "1.98", "region": "A", "data": "5/16", "status": "" },
  { "name": "Monster Jam Steel Titans", "price": "0.35", "region": "A", "data": "5/16", "status": "" },
  { "name": "Monster Jam Steel Titans 2", "price": "1.50", "region": "A", "data": "5/16", "status": "" },
  { "name": "Monster Truck Championship - Rebel Hunter Edition Xbox Series X|S", "price": "0.78", "region": "A", "data": "5/16", "status": "" },
  { "name": "Mortal Kombat 11", "price": "1.98", "region": "A", "data": "5/16", "status": "" },
  { "name": "MotoGP™20", "price": "0.99", "region": "A", "data": "5/16", "status": "" },
  { "name": "MotoGP™21 - Xbox Series X|S", "price": "1.32", "region": "A", "data": "5/16", "status": "" },
  { "name": "MudRunner", "price": "0.75", "region": "A", "data": "5/16", "status": "" },
  { "name": "NBA 2K23 Michael Jordan Edition", "price": "12.08", "region": "A", "data": "5/16", "status": "" },
  { "name": "NBA 2K23 for Xbox One", "price": "4.61", "region": "A", "data": "5/16", "status": "GOLD" },
  { "name": "NBA 2K23 for Xbox Series X|S", "price": "5.27", "region": "A", "data": "5/16", "status": "" },
  { "name": "NHL® 23 Xbox One", "price": "12.30", "region": "A", "data": "5/23", "status": "" },
  { "name": "NHL® 23 Xbox Series X|S", "price": "13.84", "region": "A", "data": "5/16", "status": "" },
  { "name": "Need for Speed™ Unbound", "price": "19.77", "region": "A", "data": "5/16", "status": "" },
  { "name": "Neko Rescue Tale", "price": "2.62", "region": "I", "data": "5/11", "status": "" },
  { "name": "New Tales from the Borderlands", "price": "12.30", "region": "A", "data": "5/16", "status": "" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.15", "region": "A", "data": "5/31", "status": "" },
  { "name": "Nippon Marathon", "price": "0.19", "region": "A", "data": "5/16", "status": "" },
  { "name": "ONE PIECE ODYSSEY", "price": "18.76", "region": "A", "data": "5/16", "status": "" },
  { "name": "OVERPASS™ DELUXE EDITION", "price": "0.50", "region": "A", "data": "5/16", "status": "" },
  { "name": "OlliOlli World Rad Edition", "price": "12.85", "region": "A", "data": "5/16", "status": "" },
  { "name": "Ori and the Blind Forest: Definitive Edition", "price": "2.96", "region": "A", "data": "5/23", "status": "" },
  { "name": "Ori and the Will of the Wisps", "price": "1.72", "region": "E", "data": "5/23", "status": "" },
  { "name": "Ori: The Collection", "price": "2.88", "region": "E", "data": "5/23", "status": "" },
  { "name": "Outbreak Gold Collection", "price": "1.34", "region": "A", "data": "5/16", "status": "" },
  { "name": "Outward: Definitive Edition", "price": "2.20", "region": "A", "data": "5/16", "status": "" },
  { "name": "Overcooked! 2", "price": "0.27", "region": "A", "data": "5/16", "status": "" },
  { "name": "Overrogue", "price": "0.61", "region": "A", "data": "5/16", "status": "GOLD" },
  { "name": "PGA TOUR 2K23", "price": "10.15", "region": "A", "data": "5/16", "status": "GOLD" },
  { "name": "PGA TOUR 2K23 Cross-Gen Edition", "price": "12.30", "region": "A", "data": "5/16", "status": "" },
  { "name": "PGA TOUR 2K23 Tiger Woods Edition", "price": "26.36", "region": "A", "data": "5/16", "status": "" },
  { "name": "PGA TOUR 2K23 x NBA 2K23 Bundle", "price": "14.50", "region": "A", "data": "5/16", "status": "" },
  { "name": "Panda's Village (for Windows)", "price": "0.30", "region": "A", "data": "5/10", "status": "" },
  { "name": "Phoenix Point: Behemoth Edition", "price": "1.41", "region": "A", "data": "5/16", "status": "GOLD" },
  { "name": "Port Royale 4 - Extended Edition", "price": "1.72", "region": "A", "data": "5/16", "status": "" },
  { "name": "Primal Light", "price": "2.18", "region": "E", "data": "5/16", "status": "GOLD" },
  { "name": "Prizma Puzzle Prime", "price": "0.26", "region": "A", "data": "5/16", "status": "" },
  { "name": "Protocol", "price": "0.36", "region": "A", "data": "5/16", "status": "" },
  { "name": "Psychonauts 2", "price": "6.06", "region": "E", "data": "5/23", "status": "" },
  { "name": "Puyo Puyo™ Tetris® 2", "price": "1.65", "region": "A", "data": "5/16", "status": "" },
  { "name": "Quantum Break", "price": "3.89", "region": "B", "data": "5/23", "status": "" },
  { "name": "Quantum Break", "price": "0.64", "region": "A", "data": "5/23", "status": "" },
  { "name": "Quern - Undying Thoughts", "price": "0.37", "region": "A", "data": "5/16", "status": "GOLD" },
  { "name": "RC Rush", "price": "0.31", "region": "A", "data": "5/16", "status": "" },
  { "name": "RIDE 3", "price": "0.66", "region": "A", "data": "5/16", "status": "" },
  { "name": "RIDE 3 - Gold Edition", "price": "0.92", "region": "A", "data": "5/16", "status": "" },
  { "name": "Railway Empire 2", "price": "2.82", "region": "A", "data": "5/25", "status": "" },
  { "name": "Railway Empire 2 - Digital Deluxe Edition", "price": "3.40", "region": "A", "data": "5/25", "status": "" },
  { "name": "Rare Replay", "price": "3.39", "region": "S", "data": "5/23", "status": "" },
  { "name": "ReCore", "price": "1.17", "region": "E", "data": "5/23", "status": "" },
  { "name": "Real Farm - Premium Edition", "price": "0.50", "region": "A", "data": "5/16", "status": "" },
  { "name": "Red Dead Online", "price": "2.91", "region": "E", "data": "5/16", "status": "GOLD" },
  { "name": "Red Dead Redemption 2", "price": "5.71", "region": "E", "data": "5/16", "status": "GOLD" },
  { "name": "Resident Evil Village", "price": "8.98", "region": "T", "data": "5/16", "status": "" },
  { "name": "Resident Evil Village Gold Edition", "price": "13.51", "region": "T", "data": "5/16", "status": "" },
  { "name": "Retro Tank Arcade", "price": "0.07", "region": "A", "data": "5/15", "status": "" },
  { "name": "RiMS Racing Xbox One", "price": "3.69", "region": "A", "data": "5/16", "status": "" },
  { "name": "RiMS Racing Xbox Series X|S", "price": "3.69", "region": "A", "data": "5/16", "status": "" },
  { "name": "Riders Republic Ultimate Edition", "price": "10.98", "region": "A", "data": "5/16", "status": "" },
  { "name": "Riders Republic™", "price": "5.49", "region": "A", "data": "5/16", "status": "" },
  { "name": "Riders Republic™ Gold Edition", "price": "8.79", "region": "A", "data": "5/16", "status": "" },
  { "name": "Rise of Nations: Extended Edition", "price": "1.46", "region": "E", "data": "5/23", "status": "" },
  { "name": "Road Rage", "price": "0.12", "region": "A", "data": "5/16", "status": "" },
  { "name": "Roguebook - Deluxe Edition Xbox Series X|S & Xbox One", "price": "1.10", "region": "A", "data": "5/16", "status": "" },
  { "name": "Rugby 22 Xbox Series X|S", "price": "7.91", "region": "A", "data": "5/16", "status": "" },
  { "name": "Rush: A DisneyPixar Adventure", "price": "1.46", "region": "E", "data": "5/23", "status": "" },
  { "name": "Ryse: Legendary Edition", "price": "0.55", "region": "A", "data": "5/23", "status": "" },
  { "name": "SCARLET NEXUS Deluxe Edition", "price": "4.39", "region": "A", "data": "5/16", "status": "" },
  { "name": "SHMUPS Pack 2x1", "price": "0.34", "region": "A", "data": "5/16", "status": "" },
  { "name": "SILT", "price": "0.63", "region": "A", "data": "5/16", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "5.62", "region": "A", "data": "12/3", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "7.51", "region": "A", "data": "1/1/", "status": "" },
  { "name": "Saint Kotar", "price": "2.53", "region": "T", "data": "5/10", "status": "" },
  { "name": "Saints Row", "price": "7.03", "region": "A", "data": "5/16", "status": "" },
  { "name": "ScreamRide", "price": "0.99", "region": "A", "data": "5/23", "status": "" },
  { "name": "ScreamRide", "price": "0.33", "region": "A", "data": "5/23", "status": "" },
  { "name": "Sea of Thieves", "price": "5.74", "region": "E", "data": "5/23", "status": "" },
  { "name": "Sea of Thieves Deluxe Edition", "price": "2.51", "region": "H", "data": "5/23", "status": "" },
  { "name": "Session: Skate Sim Deluxe Edition", "price": "1.89", "region": "A", "data": "5/16", "status": "" },
  { "name": "Seven Doors", "price": "0.25", "region": "A", "data": "5/16", "status": "" },
  { "name": "Shady Part of Me", "price": "1.05", "region": "A", "data": "5/16", "status": "GOLD" },
  { "name": "Ship of Fools", "price": "3.69", "region": "A", "data": "5/12", "status": "" },
  { "name": "Sid Meier's Civilization VI", "price": "2.64", "region": "A", "data": "5/16", "status": "GOLD" },
  { "name": "Snooker 19 Gold Edition", "price": "0.92", "region": "A", "data": "5/16", "status": "" },
  { "name": "SnowRunner - 1-Anniversary Edition", "price": "8.96", "region": "A", "data": "5/16", "status": "" },
  { "name": "Sonic Frontiers Digital Deluxe Edition", "price": "11.86", "region": "A", "data": "5/16", "status": "" },
  { "name": "Source of Madness", "price": "0.75", "region": "A", "data": "5/16", "status": "" },
  { "name": "South Park™: The Fractured but Whole™", "price": "2.74", "region": "A", "data": "5/16", "status": "GOLD" },
  { "name": "South Park™: The Fractured but Whole™ - Gold Edition", "price": "3.62", "region": "T", "data": "5/16", "status": "GOLD" },
  { "name": "Sparkle Bundle", "price": "0.56", "region": "A", "data": "12/3", "status": "" },
  { "name": "SpellForce III Reforced: Complete Edition", "price": "6.28", "region": "A", "data": "5/16", "status": "" },
  { "name": "State of Decay 2: Juggernaut Edition", "price": "4.29", "region": "E", "data": "5/23", "status": "" },
  { "name": "State of Decay: Year-One Survival Edition", "price": "2.20", "region": "A", "data": "5/23", "status": "" },
  { "name": "SteamWorld Dig", "price": "0.09", "region": "A", "data": "5/16", "status": "" },
  { "name": "SteamWorld Dig 2", "price": "0.37", "region": "A", "data": "5/16", "status": "" },
  { "name": "Steelrising - Bastille Edition", "price": "13.18", "region": "A", "data": "5/16", "status": "" },
  { "name": "Stellar Interface", "price": "0.07", "region": "A", "data": "6/1/", "status": "" },
  { "name": "Steve Jackson's Sorcery!", "price": "0.95", "region": "A", "data": "5/16", "status": "GOLD" },
  { "name": "Sunset Overdrive", "price": "0.63", "region": "T", "data": "5/23", "status": "" },
  { "name": "Sunset Overdrive Deluxe Edition", "price": "0.69", "region": "A", "data": "5/23", "status": "" },
  { "name": "Super Monkey Ball Banana Mania Digital Deluxe Edition", "price": "4.94", "region": "A", "data": "5/16", "status": "" },
  { "name": "Super Pixel Racers", "price": "0.33", "region": "A", "data": "5/16", "status": "" },
  { "name": "Swordship", "price": "0.87", "region": "A", "data": "5/16", "status": "" },
  { "name": "Sébastien Loeb Rally EVO", "price": "0.18", "region": "A", "data": "5/16", "status": "" },
  { "name": "Tales of Arise Deluxe Edition", "price": "6.75", "region": "T", "data": "5/16", "status": "" },
  { "name": "Team Sonic Racing & Super Monkey Ball: Banana Blitz HD", "price": "6.37", "region": "A", "data": "5/16", "status": "" },
  { "name": "Team Sonic Racing™", "price": "3.84", "region": "A", "data": "5/16", "status": "" },
  { "name": "Tell Me Why: Chapters 1-3", "price": "0.47", "region": "H", "data": "5/23", "status": "" },
  { "name": "Temple Dash: Jungle Adventure", "price": "0.07", "region": "A", "data": "5/19", "status": "" },
  { "name": "Tennis World Tour 2 - Complete Edition Xbox Series X|S", "price": "0.63", "region": "A", "data": "5/16", "status": "" },
  { "name": "The Bard's Tale ARPG : Remastered and Resnarkled", "price": "0.24", "region": "A", "data": "5/23", "status": "" },
  { "name": "The Bard's Tale IV: Director's Cut", "price": "0.83", "region": "A", "data": "5/23", "status": "" },
  { "name": "The Bard's Tale Trilogy", "price": "0.16", "region": "A", "data": "5/23", "status": "" },
  { "name": "The Crew", "price": "0.43", "region": "A", "data": "5/16", "status": "" },
  { "name": "The Crew® 2", "price": "2.20", "region": "A", "data": "5/16", "status": "" },
  { "name": "The Crew® 2 Gold Edition", "price": "3.95", "region": "A", "data": "5/16", "status": "" },
  { "name": "The Crew® 2 Special Edition", "price": "2.64", "region": "A", "data": "5/16", "status": "" },
  { "name": "The Crew® Ultimate Edition", "price": "1.01", "region": "A", "data": "5/16", "status": "" },
  { "name": "The Dark Pictures Anthology: Season One", "price": "23.65", "region": "T", "data": "5/16", "status": "" },
  { "name": "The Escapists & The Escapists: The Walking Dead", "price": "0.23", "region": "A", "data": "5/16", "status": "" },
  { "name": "The Escapists 2", "price": "0.22", "region": "A", "data": "5/16", "status": "" },
  { "name": "The Escapists: Supermax Edition", "price": "1.10", "region": "A", "data": "4/30", "status": "" },
  { "name": "The Excrawlers", "price": "0.25", "region": "A", "data": "5/19", "status": "" },
  { "name": "The Gunk", "price": "0.95", "region": "A", "data": "5/16", "status": "" },
  { "name": "The Inner World", "price": "0.13", "region": "A", "data": "5/16", "status": "" },
  { "name": "The Inner World - The Last Wind Monk", "price": "0.25", "region": "A", "data": "5/16", "status": "" },
  { "name": "The Jackbox Party Quadpack", "price": "2.47", "region": "A", "data": "12/3", "status": "" },
  { "name": "The Knight Witch", "price": "3.16", "region": "A", "data": "5/16", "status": "" },
  { "name": "The Last Oricru", "price": "5.53", "region": "A", "data": "5/16", "status": "" },
  { "name": "The Oregon Trail", "price": "9.63", "region": "E", "data": "5/16", "status": "" },
  { "name": "The Outer Worlds: Board-Approved Bundle", "price": "22.10", "region": "T", "data": "5/16", "status": "GOLD" },
  { "name": "The Plane Effect", "price": "0.54", "region": "A", "data": "5/16", "status": "GOLD" },
  { "name": "The Quarry - Deluxe Edition", "price": "14.06", "region": "A", "data": "5/16", "status": "" },
  { "name": "The Quarry for Xbox One", "price": "10.54", "region": "A", "data": "5/16", "status": "GOLD" },
  { "name": "The Quarry for Xbox Series X|S", "price": "12.30", "region": "A", "data": "5/16", "status": "" },
  { "name": "The Skylia Prophecy", "price": "0.26", "region": "A", "data": "5/16", "status": "" },
  { "name": "The Surge 2", "price": "2.74", "region": "A", "data": "5/16", "status": "GOLD" },
  { "name": "The Surge 2 - Windows 10", "price": "1.43", "region": "A", "data": "5/16", "status": "" },
  { "name": "The Survivalists", "price": "1.32", "region": "A", "data": "5/16", "status": "" },
  { "name": "The Wanderer: Frankenstein's Creature", "price": "0.47", "region": "A", "data": "5/16", "status": "" },
  { "name": "The Wardrobe: Even Better Edition", "price": "0.85", "region": "T", "data": "5/16", "status": "GOLD" },
  { "name": "The Witcher 3: Wild Hunt – Complete Edition", "price": "7.25", "region": "A", "data": "5/16", "status": "" },
  { "name": "The Yakuza Remastered Collection for Windows 10", "price": "2.24", "region": "A", "data": "5/23", "status": "" },
  { "name": "Thymesia", "price": "4.94", "region": "A", "data": "5/16", "status": "" },
  { "name": "Tiny Tina's Assault on Dragon Keep: A Wonderlands One-sho...", "price": "1.93", "region": "A", "data": "5/16", "status": "GOLD" },
  { "name": "Tiny Tina's Wonderlands", "price": "13.15", "region": "A", "data": "5/16", "status": "GOLD" },
  { "name": "Tiny Tina's Wonderlands: Chaotic Great Edition", "price": "16.38", "region": "T", "data": "5/16", "status": "" },
  { "name": "Tiny Tina's Wonderlands: Next-Level Edition", "price": "16.19", "region": "A", "data": "5/16", "status": "" },
  { "name": "Titans Pinball", "price": "0.16", "region": "A", "data": "5/20", "status": "" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Gold Edition", "price": "4.39", "region": "A", "data": "5/16", "status": "" },
  { "name": "Tony Hawk's™ Pro Skater™ 1 + 2 - Cross-Gen Deluxe Bundle", "price": "3.95", "region": "A", "data": "5/16", "status": "" },
  { "name": "Torment: Tides of Numenera", "price": "0.62", "region": "A", "data": "5/23", "status": "" },
  { "name": "Tour de France 2022 Xbox One", "price": "3.51", "region": "A", "data": "5/16", "status": "" },
  { "name": "Tour de France 2022 Xbox Series X|S", "price": "3.95", "region": "A", "data": "5/16", "status": "" },
  { "name": "Trackmania® Turbo", "price": "0.35", "region": "A", "data": "5/16", "status": "" },
  { "name": "Trailblazers", "price": "0.20", "region": "A", "data": "5/16", "status": "" },
  { "name": "Train Life - Orient-Express Train Edition", "price": "1.26", "region": "A", "data": "5/16", "status": "" },
  { "name": "Transport Fever 2: Console Edition - Deluxe", "price": "21.52", "region": "A", "data": "5/16", "status": "" },
  { "name": "Trials Fusion", "price": "0.22", "region": "A", "data": "5/16", "status": "" },
  { "name": "Trials Fusion: The Awesome Max Edition", "price": "0.44", "region": "A", "data": "5/16", "status": "" },
  { "name": "Trials® Rising - Digital Gold Edition", "price": "1.98", "region": "A", "data": "5/16", "status": "" },
  { "name": "Truck Driver", "price": "3.07", "region": "A", "data": "5/16", "status": "" },
  { "name": "Truck Racing Championship", "price": "0.57", "region": "A", "data": "5/16", "status": "" },
  { "name": "Turnip Boy Commits Tax Evasion", "price": "0.38", "region": "A", "data": "5/16", "status": "GOLD" },
  { "name": "UFC® 4", "price": "3.07", "region": "A", "data": "5/23", "status": "" },
  { "name": "UFC® 4 Deluxe Edition", "price": "3.51", "region": "A", "data": "5/23", "status": "" },
  { "name": "Under Leaves", "price": "0.21", "region": "A", "data": "5/16", "status": "GOLD" },
  { "name": "Unichrome: A 1-bit Unicorn Adventure", "price": "0.56", "region": "A", "data": "5/16", "status": "GOLD" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "0.59", "region": "A", "data": "12/3", "status": "" },
  { "name": "V-Rally 4 Ultimate Edition", "price": "0.38", "region": "A", "data": "5/16", "status": "" },
  { "name": "Valiant Hearts: The Great War", "price": "0.20", "region": "A", "data": "5/16", "status": "GOLD" },
  { "name": "Vampire: The Masquerade - Swansong PRIMOGEN EDITION", "price": "8.57", "region": "A", "data": "5/16", "status": "" },
  { "name": "Verdict Guilty", "price": "0.46", "region": "A", "data": "5/17", "status": "" },
  { "name": "Vermintide - Digital Value Pack", "price": "1.75", "region": "A", "data": "3/7/", "status": "" },
  { "name": "WILD HEARTS™ Standard Edition", "price": "27.68", "region": "A", "data": "5/16", "status": "" },
  { "name": "WRC 10 Deluxe Edition Xbox One & Xbox Series X|S", "price": "3.00", "region": "A", "data": "5/16", "status": "" },
  { "name": "WRC 9 Deluxe Edition FIA World Rally Championship", "price": "0.63", "region": "A", "data": "5/16", "status": "" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "2.80", "region": "A", "data": "8/31", "status": "" },
  { "name": "WRC Collection Vol. 2 Xbox One", "price": "10.98", "region": "A", "data": "5/16", "status": "" },
  { "name": "WRC Collection Vol. 2 Xbox Series X|S", "price": "9.88", "region": "A", "data": "5/16", "status": "" },
  { "name": "WRC Generations Fully Loaded Edition", "price": "12.08", "region": "A", "data": "5/16", "status": "" },
  { "name": "WWE 2K23 Cross-Gen Digital Edition", "price": "33.61", "region": "A", "data": "5/16", "status": "" },
  { "name": "WWE 2K23 Icon Edition", "price": "48.54", "region": "A", "data": "5/16", "status": "" },
  { "name": "WWE 2K23 for Xbox One", "price": "29.87", "region": "A", "data": "5/16", "status": "GOLD" },
  { "name": "Warhammer 40,000: Boltgun", "price": "17.61", "region": "S", "data": "5/23", "status": "" },
  { "name": "Wasteland 2: Director's Cut", "price": "0.43", "region": "A", "data": "5/23", "status": "" },
  { "name": "Wasteland Remastered", "price": "0.32", "region": "T", "data": "5/23", "status": "" },
  { "name": "Watch Dogs®: Legion Gold Edition", "price": "4.83", "region": "A", "data": "5/16", "status": "GOLD" },
  { "name": "We Are The Dwarves", "price": "0.29", "region": "E", "data": "5/16", "status": "" },
  { "name": "Worms Rumble - Digital Deluxe Edition", "price": "0.28", "region": "A", "data": "5/16", "status": "" },
  { "name": "Wreckfest", "price": "1.12", "region": "A", "data": "5/16", "status": "" },
  { "name": "Wreckfest Complete Edition", "price": "1.84", "region": "A", "data": "5/16", "status": "" },
  { "name": "XCOM® 2 Collection", "price": "1.63", "region": "T", "data": "5/16", "status": "GOLD" },
  { "name": "Xenon Racer", "price": "0.19", "region": "A", "data": "5/16", "status": "" },
  { "name": "Yakuza 0 for Windows 10", "price": "0.92", "region": "T", "data": "5/23", "status": "" },
  { "name": "Yakuza 3 Remastered for Windows 10", "price": "1.69", "region": "A", "data": "5/23", "status": "" },
  { "name": "Yakuza 4 Remastered for Windows 10", "price": "1.69", "region": "A", "data": "5/23", "status": "" },
  { "name": "Yakuza 5 Remastered for Windows 10", "price": "1.69", "region": "A", "data": "5/23", "status": "" },
  { "name": "Yakuza 6: The Song of Life for Windows 10", "price": "0.92", "region": "T", "data": "5/23", "status": "" },
  { "name": "Yakuza Kiwami 2 for Windows 10", "price": "1.45", "region": "A", "data": "5/23", "status": "" },
  { "name": "Yakuza Kiwami for Windows 10", "price": "0.92", "region": "T", "data": "5/23", "status": "" },
  { "name": "Zoo Tycoon", "price": "0.55", "region": "A", "data": "5/23", "status": "" },
  { "name": "Zoo Tycoon: Ultimate Animal Collection", "price": "1.46", "region": "E", "data": "5/23", "status": "" },
  { "name": "Zorro The Chronicles Xbox Series X|S", "price": "6.32", "region": "A", "data": "5/16", "status": "" },
  { "name": "orbit.industries", "price": "0.81", "region": "A", "data": "5/16", "status": "" }
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
  output.innerHTML = floor(finishRes.toFixed())
}

function resultFromList(price) {
  const value = Number(price) + .1
  const res = value * usd + 40
  const finishRes = res + resSwitсh(price)
  return floor(finishRes.toFixed())
}

function resSwitсh(value) {
  let a;
  if (value <= 1) {
    a = 50
  } else if (value > 1 && value <= 5) {
    a = 60
  } else if (value > 5 && value <= 10) {
    a = 75
  } else if (value > 10 && value <= 15) {
    a = 85
  } else if (value > 15 && value <= 20) {
    a = 100
  } else if (value > 20 && value <= 25) {
    a = 150
  } else if (value > 25) {
    a = 170
  }
  return a
}

input.oninput = result


sortArr.map((a) => {
  // const status = 
  const item = document.createElement('li')
  const arrData = a.data.split('/').reverse('').join('/')
  let res;
  let flag;
  if (a.region == 'A') {
    res = resultFromList(a.price)
    flag = "🇦🇷"
  } else if (a.region == 'T') {
    res = resultFromList(a.price)
    flag = "🇹🇷"
  } else {
    res = 'Уточнить стоимость в ЛС'
  }

  item.innerHTML = res == 'Уточнить стоимость в ЛС' ? `${a.name}: ${res} до:${arrData}` : `${a.name}:${res}&#8381; ${flag}  до:${arrData}${a.status}`
  // &#8381; ${ flag } до:${ arrData }${ a.status }
  list.append(item)
})
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
