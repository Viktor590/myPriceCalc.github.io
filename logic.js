const input = document.querySelector('.input');
const output = document.querySelector('.output-res');
const list = document.querySelector('.list')
const showBtn = document.querySelector('.show')


showBtn.addEventListener('click', () => {
  showBtn.classList.contains('active') ?
    hiddenMenu() : showMenu()
})

let usd = 107;

const arr = [
  { "name": "#SinucaAttack", "price": "0.08", "region": "A", "data": "10/3", "status": "" },
  { "name": "41 Hours", "price": "1.24", "region": "T", "data": "10/3", "status": "" },
  { "name": "60 Parsecs!", "price": "1.00", "region": "A", "data": "10/3", "status": "GOLD" },
  { "name": "60 Seconds! Reatomized", "price": "1.00", "region": "A", "data": "10/3", "status": "GOLD" },
  { "name": "A Plague Tale: Innocence", "price": "1.11", "region": "A", "data": "10/3", "status": "GOLD" },
  { "name": "A Plague Tale: Innocence - Windows 10", "price": "1.20", "region": "A", "data": "10/3", "status": "" },
  { "name": "AK-xolotl", "price": "3.60", "region": "A", "data": "9/29", "status": "" },
  { "name": "APICO", "price": "0.53", "region": "A", "data": "10/9", "status": "" },
  { "name": "Aery - Calm Mind 2", "price": "0.24", "region": "A", "data": "10/3", "status": "" },
  { "name": "Agatha Knife", "price": "0.14", "region": "A", "data": "10/3", "status": "" },
  { "name": "Aground", "price": "0.24", "region": "A", "data": "10/9", "status": "" },
  { "name": "Aliens: Fireteam Elite", "price": "4.26", "region": "A", "data": "10/3", "status": "GOLD" },
  { "name": "Alone in the Dark", "price": "10.03", "region": "A", "data": "10/2", "status": "" },
  { "name": "Alone in the Dark - Digital Deluxe Edition", "price": "11.57", "region": "A", "data": "10/2", "status": "" },
  { "name": "Assetto Corsa Competizione + 2023 GT World Challenge", "price": "11.90", "region": "A", "data": "9/29", "status": "" },
  { "name": "Astalon: Tears of the Earth", "price": "0.57", "region": "A", "data": "10/3", "status": "GOLD" },
  { "name": "Atomic Heart - Gold Edition", "price": "30.00", "region": "A", "data": "10/3", "status": "" },
  { "name": "Awarded Platformer Bundle", "price": "0.47", "region": "A", "data": "12/3", "status": "" },
  { "name": "BLACKTAIL", "price": "5.51", "region": "T", "data": "10/3", "status": "GOLD" },
  { "name": "BROKEN MIND", "price": "0.62", "region": "T", "data": "10/3", "status": "" },
  { "name": "BRUTAL RAGE", "price": "0.14", "region": "A", "data": "10/3", "status": "" },
  { "name": "Back 4 Blood: Deluxe Edition", "price": "4.68", "region": "A", "data": "10/3", "status": "" },
  { "name": "Batman: Return to Arkham", "price": "0.71", "region": "A", "data": "10/3", "status": "" },
  { "name": "Batman™: Arkham Knight", "price": "0.63", "region": "A", "data": "10/3", "status": "" },
  { "name": "Battlefield 4", "price": "0.40", "region": "A", "data": "10/3", "status": "" },
  { "name": "Battlefield™ 1", "price": "0.57", "region": "A", "data": "10/3", "status": "" },
  { "name": "Battlefield™ 2042 Elite Edition Xbox One & Xbox Series X|S", "price": "27.65", "region": "A", "data": "10/3", "status": "" },
  { "name": "Battlefield™ Hardline Standard Edition", "price": "0.46", "region": "A", "data": "10/3", "status": "" },
  { "name": "Battlefield™ V Standard Edition", "price": "1.31", "region": "A", "data": "10/3", "status": "" },
  { "name": "Battlefleet Gothic: Armada", "price": "0.23", "region": "A", "data": "10/3", "status": "" },
  { "name": "Battlefleet Gothic: Armada 2 - Windows 10", "price": "0.86", "region": "A", "data": "10/3", "status": "" },
  { "name": "Beacon Pines", "price": "0.49", "region": "A", "data": "10/1", "status": "GOLD" },
  { "name": "Beasts of Maravilla Island", "price": "0.22", "region": "A", "data": "10/9", "status": "" },
  { "name": "Bombfest", "price": "0.11", "region": "A", "data": "10/9", "status": "" },
  { "name": "Borderlands 3: Next Level Edition", "price": "1.38", "region": "A", "data": "10/3", "status": "" },
  { "name": "Borderlands 3: Ultimate Edition", "price": "3.86", "region": "A", "data": "10/3", "status": "" },
  { "name": "Borderlands: The Handsome Collection", "price": "1.93", "region": "A", "data": "10/3", "status": "" },
  { "name": "Bound by Flame", "price": "0.09", "region": "A", "data": "10/3", "status": "GOLD" },
  { "name": "Bright Side: Riddles and Puzzles", "price": "0.26", "region": "A", "data": "9/30", "status": "" },
  { "name": "Broken Universe - Tower Defense", "price": "0.10", "region": "A", "data": "10/3", "status": "" },
  { "name": "Bus Simulator 21", "price": "6.89", "region": "E", "data": "10/3", "status": "GOLD" },
  { "name": "Calico", "price": "0.25", "region": "A", "data": "10/9", "status": "" },
  { "name": "Call of Duty: Ghosts Digital Hardened Edition", "price": "1.09", "region": "A", "data": "9/28", "status": "" },
  { "name": "Call of Duty®: Advanced Warfare Digital Pro Edition", "price": "1.09", "region": "A", "data": "9/28", "status": "" },
  { "name": "Call of Duty®: Advanced Warfare Gold Edition", "price": "0.52", "region": "A", "data": "9/28", "status": "" },
  { "name": "Call of Duty®: Black Ops 4", "price": "4.20", "region": "A", "data": "9/28", "status": "" },
  { "name": "Call of Duty®: Black Ops 4 - Digital Deluxe", "price": "9.58", "region": "A", "data": "9/28", "status": "" },
  { "name": "Call of Duty®: Black Ops Cold War", "price": "4.20", "region": "A", "data": "9/28", "status": "" },
  { "name": "Call of Duty®: Black Ops Cold War - Cross-Gen Bundle", "price": "7.31", "region": "A", "data": "9/28", "status": "" },
  { "name": "Call of Duty®: Black Ops III - Zombies Chronicles Edition", "price": "1.70", "region": "A", "data": "9/28", "status": "" },
  { "name": "Call of Duty®: Black Ops III - Zombies Deluxe", "price": "6.90", "region": "T", "data": "9/28", "status": "" },
  { "name": "Call of Duty®: Ghosts", "price": "0.52", "region": "A", "data": "9/28", "status": "" },
  { "name": "Call of Duty®: Infinite Warfare - Digital Deluxe Edition", "price": "5.73", "region": "T", "data": "9/28", "status": "" },
  { "name": "Call of Duty®: Infinite Warfare - Digital Legacy Edition", "price": "2.57", "region": "A", "data": "9/28", "status": "" },
  { "name": "Call of Duty®: Infinite Warfare - Launch Edition", "price": "1.70", "region": "A", "data": "9/28", "status": "" },
  { "name": "Call of Duty®: Modern Warfare® - Digital Standard Edition", "price": "4.20", "region": "A", "data": "9/28", "status": "" },
  { "name": "Call of Duty®: Modern Warfare® II - Cross-Gen Bundle", "price": "28.57", "region": "A", "data": "9/28", "status": "" },
  { "name": "Call of Duty®: Modern Warfare® II - Vault Edition", "price": "46.48", "region": "C", "data": "9/28", "status": "" },
  { "name": "Call of Duty®: Modern Warfare® Remastered", "price": "1.71", "region": "A", "data": "9/28", "status": "" },
  { "name": "Call of Duty®: Vanguard - Cross-Gen Bundle", "price": "9.00", "region": "A", "data": "9/28", "status": "" },
  { "name": "Call of Duty®: Vanguard - Standard Edition", "price": "7.71", "region": "A", "data": "9/28", "status": "" },
  { "name": "Call of Duty®: WWII - Digital Deluxe", "price": "6.90", "region": "T", "data": "9/28", "status": "" },
  { "name": "Call of Duty®: WWII - Gold Edition", "price": "1.70", "region": "A", "data": "9/28", "status": "" },
  { "name": "Chess Gambit", "price": "0.20", "region": "A", "data": "10/3", "status": "" },
  { "name": "Chivalry 2 King's Edition", "price": "1.23", "region": "A", "data": "10/1", "status": "GOLD" },
  { "name": "Cions of Vega", "price": "2.50", "region": "A", "data": "10/3", "status": "" },
  { "name": "Construction Simulator", "price": "6.80", "region": "A", "data": "10/3", "status": "GOLD" },
  { "name": "Cruz Brothers", "price": "0.67", "region": "A", "data": "10/3", "status": "GOLD" },
  { "name": "Cube 2x1", "price": "0.26", "region": "A", "data": "10/7", "status": "" },
  { "name": "Curse of the Dead Gods", "price": "0.94", "region": "A", "data": "10/3", "status": "GOLD" },
  { "name": "Curse of the Dead Gods (PC)", "price": "1.14", "region": "A", "data": "10/3", "status": "" },
  { "name": "Cyber Citizen Shockman 2: A New Menace", "price": "0.19", "region": "A", "data": "10/7", "status": "" },
  { "name": "DARKLAND 3", "price": "0.04", "region": "A", "data": "9/28", "status": "" },
  { "name": "Dead Effect 2", "price": "0.10", "region": "A", "data": "10/3", "status": "" },
  { "name": "Disney Dreamlight Valley", "price": "6.00", "region": "E", "data": "9/27", "status": "" },
  { "name": "Disney Dreamlight Valley — Ultimate Edition", "price": "13.04", "region": "E", "data": "9/27", "status": "" },
  { "name": "Disney Speedstorm - Standard Founder’s Pack", "price": "7.14", "region": "T", "data": "9/27", "status": "" },
  { "name": "Disney Speedstorm - Ultimate Founder’s Pack", "price": "15.42", "region": "T", "data": "9/27", "status": "" },
  { "name": "Dordogne", "price": "5.88", "region": "T", "data": "10/3", "status": "GOLD" },
  { "name": "Dou", "price": "0.04", "region": "A", "data": "10/8", "status": "" },
  { "name": "EA SPORTS FC™ 24 Ultimate Edition Xbox One & Xbox Series X|S", "price": "45.25", "region": "A", "data": "9/29", "status": "" },
  { "name": "EA SPORTS™ PGA TOUR™", "price": "12.85", "region": "A", "data": "10/1", "status": "" },
  { "name": "EA SPORTS™ PGA TOUR™ Deluxe Edition", "price": "16.00", "region": "A", "data": "10/1", "status": "" },
  { "name": "Escape Dead Island", "price": "0.11", "region": "A", "data": "12/3", "status": "" },
  { "name": "Evan's Remains", "price": "0.09", "region": "A", "data": "10/9", "status": "" },
  { "name": "Evertried", "price": "0.49", "region": "A", "data": "10/3", "status": "GOLD" },
  { "name": "Evil West", "price": "7.86", "region": "A", "data": "10/3", "status": "GOLD" },
  { "name": "FAR CRY 4 + FAR CRY PRIMAL BUNDLE", "price": "1.61", "region": "T", "data": "10/3", "status": "" },
  { "name": "FAR CRY 4 GOLD EDITION", "price": "0.50", "region": "A", "data": "10/3", "status": "" },
  { "name": "FAR CRY ANTHOLOGY BUNDLE", "price": "5.00", "region": "A", "data": "10/3", "status": "" },
  { "name": "FOR HONOR : MARCHING FIRE EDITION", "price": "1.43", "region": "A", "data": "10/3", "status": "GOLD" },
  { "name": "Fantasy Dash", "price": "0.04", "region": "A", "data": "10/1", "status": "" },
  { "name": "Far Cry Insanity Bundle", "price": "2.29", "region": "A", "data": "10/3", "status": "" },
  { "name": "Far Cry Primal", "price": "1.00", "region": "A", "data": "10/3", "status": "GOLD" },
  { "name": "Far Cry® 3 Blood Dragon Classic Edition", "price": "2.14", "region": "A", "data": "10/3", "status": "" },
  { "name": "Far Cry® 3 Classic Edition", "price": "0.32", "region": "A", "data": "10/3", "status": "" },
  { "name": "Far Cry® 5 + Far Cry® New Dawn Deluxe Edition Bundle", "price": "1.50", "region": "A", "data": "10/3", "status": "" },
  { "name": "Far Cry® 6 Deluxe Edition", "price": "5.71", "region": "A", "data": "10/3", "status": "" },
  { "name": "Far Cry® 6 Game of the Year Edition", "price": "8.57", "region": "A", "data": "10/3", "status": "" },
  { "name": "Far Cry® New Dawn", "price": "0.86", "region": "A", "data": "10/3", "status": "GOLD" },
  { "name": "Far Cry®5 Gold Edition", "price": "1.41", "region": "A", "data": "10/3", "status": "" },
  { "name": "Football Manager 2024 Console", "price": "15.58", "region": "E", "data": "11/6", "status": "" },
  { "name": "Full Void", "price": "0.49", "region": "A", "data": "9/27", "status": "" },
  { "name": "Geometric Sniper - Blood in Paris", "price": "0.08", "region": "A", "data": "10/3", "status": "" },
  { "name": "Gotham Knights", "price": "5.71", "region": "A", "data": "10/3", "status": "" },
  { "name": "GreedFall", "price": "2.14", "region": "A", "data": "10/3", "status": "GOLD" },
  { "name": "GreedFall - Windows 10", "price": "1.63", "region": "A", "data": "10/3", "status": "" },
  { "name": "HammerHelm", "price": "0.49", "region": "A", "data": "10/4", "status": "" },
  { "name": "Hard Reset Redux", "price": "0.06", "region": "A", "data": "10/3", "status": "" },
  { "name": "Heaven Dust", "price": "0.24", "region": "A", "data": "10/3", "status": "GOLD" },
  { "name": "Hell Let Loose Anniversary Edition", "price": "10.21", "region": "A", "data": "10/3", "status": "" },
  { "name": "Hogwarts Legacy Xbox One Version", "price": "20.00", "region": "A", "data": "10/3", "status": "" },
  { "name": "Hogwarts Legacy Xbox Series X|S Version", "price": "20.00", "region": "A", "data": "10/3", "status": "" },
  { "name": "Hunt Ducks 4", "price": "0.04", "region": "A", "data": "10/1", "status": "" },
  { "name": "Immortal Planet", "price": "0.18", "region": "A", "data": "10/3", "status": "" },
  { "name": "Inspector Waffles", "price": "0.11", "region": "A", "data": "10/3", "status": "GOLD" },
  { "name": "Iro Hero", "price": "0.15", "region": "A", "data": "10/3", "status": "" },
  { "name": "Jagged Alliance 3", "price": "17.63", "region": "T", "data": "11/1", "status": "" },
  { "name": "Joy Ball Adventure", "price": "0.04", "region": "A", "data": "10/5", "status": "" },
  { "name": "Kung Fu Fighting", "price": "0.04", "region": "A", "data": "9/28", "status": "" },
  { "name": "L.A. Noire", "price": "2.00", "region": "A", "data": "10/3", "status": "GOLD" },
  { "name": "LEAP", "price": "0.49", "region": "A", "data": "10/3", "status": "" },
  { "name": "LEGO® Batman™ 3: Beyond Gotham", "price": "0.39", "region": "A", "data": "10/3", "status": "" },
  { "name": "LEGO® CITY Undercover", "price": "0.57", "region": "A", "data": "10/3", "status": "" },
  { "name": "LEGO® DC Super-Villains", "price": "0.81", "region": "A", "data": "10/3", "status": "" },
  { "name": "LEGO® Harry Potter™ Collection", "price": "0.64", "region": "A", "data": "10/3", "status": "" },
  { "name": "LEGO® Marvel Super Heroes 2", "price": "0.69", "region": "A", "data": "10/3", "status": "" },
  { "name": "LEGO® Marvel's Avengers", "price": "0.78", "region": "A", "data": "10/3", "status": "" },
  { "name": "LEGO® Star Wars™: The Skywalker Saga", "price": "4.71", "region": "A", "data": "10/3", "status": "" },
  { "name": "LEGO® Star Wars™: The Skywalker Saga Galactic Edition", "price": "7.54", "region": "A", "data": "10/3", "status": "" },
  { "name": "LUNARK", "price": "0.57", "region": "A", "data": "10/3", "status": "GOLD" },
  { "name": "Light & Dark Bundle", "price": "4.56", "region": "A", "data": "11/2", "status": "" },
  { "name": "Light Fairytale Episode 1", "price": "0.14", "region": "A", "data": "10/3", "status": "" },
  { "name": "Light Fairytale Episode 2", "price": "0.14", "region": "A", "data": "10/3", "status": "" },
  { "name": "Lost Artifacts", "price": "0.14", "region": "A", "data": "10/3", "status": "GOLD" },
  { "name": "Lost Artifacts: Golden Island", "price": "0.14", "region": "A", "data": "10/3", "status": "GOLD" },
  { "name": "Lucid Cycle", "price": "0.11", "region": "A", "data": "10/3", "status": "" },
  { "name": "MXGP3", "price": "0.29", "region": "A", "data": "10/3", "status": "" },
  { "name": "Madden NFL 19", "price": "29.41", "region": "C", "data": "12/3", "status": "" },
  { "name": "Madden NFL 22 Xbox One", "price": "11.00", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 22 Xbox Series X|S", "price": "12.80", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 23 Xbox One", "price": "14.63", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 23 Xbox Series X|S", "price": "17.14", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 24", "price": "17.14", "region": "A", "data": "12/1", "status": "" },
  { "name": "Madden NFL 24 Deluxe Edition Xbox Series X|S & Xbox One", "price": "25.14", "region": "A", "data": "12/1", "status": "" },
  { "name": "Maneater Apex Edition", "price": "0.82", "region": "A", "data": "10/3", "status": "GOLD" },
  { "name": "Mechs V Kaijus", "price": "0.45", "region": "A", "data": "9/28", "status": "" },
  { "name": "Meet Your Maker: Deluxe Edition", "price": "5.31", "region": "A", "data": "10/1", "status": "" },
  { "name": "Meet Your Maker: Sector 1 Bundle", "price": "1.93", "region": "A", "data": "10/1", "status": "" },
  { "name": "Metro Exodus Gold Edition", "price": "0.92", "region": "A", "data": "10/3", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.00", "region": "U", "data": "12/1", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.00", "region": "U", "data": "12/1", "status": "" },
  { "name": "Middle-earth™: Shadow of War™", "price": "0.40", "region": "A", "data": "10/3", "status": "" },
  { "name": "Mighty Switch Force! Collection", "price": "0.41", "region": "A", "data": "10/3", "status": "" },
  { "name": "Mortal Kombat 11", "price": "0.64", "region": "A", "data": "10/3", "status": "" },
  { "name": "Mortal Kombat X", "price": "0.78", "region": "A", "data": "10/3", "status": "" },
  { "name": "MotoGP™22", "price": "1.71", "region": "A", "data": "10/3", "status": "" },
  { "name": "MudRunner - American Wilds Edition", "price": "0.69", "region": "A", "data": "10/3", "status": "GOLD" },
  { "name": "Mystic Gate", "price": "5.28", "region": "I", "data": "9/28", "status": "" },
  { "name": "NHL® 24 X-Factor Edition Xbox One & Xbox Series X|S", "price": "45.25", "region": "A", "data": "10/3", "status": "" },
  { "name": "Necromunda: Hired Gun", "price": "2.50", "region": "A", "data": "10/3", "status": "GOLD" },
  { "name": "Newt One", "price": "0.08", "region": "A", "data": "10/9", "status": "" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.10", "region": "A", "data": "5/31", "status": "" },
  { "name": "Nuclear Blaze", "price": "0.43", "region": "A", "data": "10/3", "status": "" },
  { "name": "OlliOlli World", "price": "4.28", "region": "A", "data": "10/3", "status": "GOLD" },
  { "name": "Onsen Master", "price": "0.33", "region": "A", "data": "10/9", "status": "" },
  { "name": "Ori and the Blind Forest: Definitive Edition", "price": "2.54", "region": "A", "data": "9/28", "status": "" },
  { "name": "Ori and the Will of the Wisps", "price": "2.83", "region": "E", "data": "9/28", "status": "" },
  { "name": "Ori: The Collection", "price": "4.75", "region": "E", "data": "9/28", "status": "" },
  { "name": "Outbreak Definitive Collection", "price": "0.61", "region": "A", "data": "10/3", "status": "GOLD" },
  { "name": "Outbreak Platinum Collection", "price": "0.97", "region": "A", "data": "10/3", "status": "GOLD" },
  { "name": "Outbreak: Lost Hope Definitive Edition", "price": "0.15", "region": "A", "data": "10/3", "status": "" },
  { "name": "PGA TOUR 2K23 Deluxe Edition", "price": "7.86", "region": "A", "data": "10/3", "status": "GOLD" },
  { "name": "Plants vs. Zombies Garden Warfare", "price": "0.26", "region": "A", "data": "10/3", "status": "" },
  { "name": "Plants vs. Zombies: Battle for Neighborville™", "price": "1.03", "region": "A", "data": "10/3", "status": "" },
  { "name": "Plants vs. Zombies: Battle for Neighborville™ Deluxe Edition", "price": "1.31", "region": "A", "data": "10/3", "status": "" },
  { "name": "Plants vs. Zombies™ Garden Warfare 2: Deluxe Edition", "price": "0.29", "region": "A", "data": "10/3", "status": "" },
  { "name": "Police Simulator: Patrol Officers", "price": "8.57", "region": "A", "data": "10/3", "status": "GOLD" },
  { "name": "Princess Farmer", "price": "0.28", "region": "A", "data": "10/9", "status": "" },
  { "name": "Prodeus", "price": "3.50", "region": "A", "data": "10/1", "status": "" },
  { "name": "RE:CALL", "price": "0.53", "region": "A", "data": "10/9", "status": "" },
  { "name": "REZ PLZ", "price": "0.12", "region": "A", "data": "10/3", "status": "GOLD" },
  { "name": "Rayland 2 (Xbox & PC)", "price": "2.59", "region": "I", "data": "10/5", "status": "" },
  { "name": "Razerwire: Nanowars", "price": "0.11", "region": "A", "data": "10/3", "status": "" },
  { "name": "Retro Tank Arcade", "price": "0.04", "region": "A", "data": "9/28", "status": "" },
  { "name": "Riders Republic™ Complete Edition", "price": "38.85", "region": "A", "data": "10/3", "status": "" },
  { "name": "Rise of the Triad: Ludicrous Edition", "price": "0.65", "region": "A", "data": "9/29", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "3.65", "region": "A", "data": "12/3", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "4.88", "region": "A", "data": "1/1/", "status": "" },
  { "name": "STAR WARS™ Battlefront™ II", "price": "0.86", "region": "A", "data": "10/3", "status": "" },
  { "name": "Scorn", "price": "3.23", "region": "A", "data": "10/3", "status": "" },
  { "name": "Scribblenauts Showdown", "price": "0.34", "region": "A", "data": "10/3", "status": "" },
  { "name": "Serious Sam Collection", "price": "0.49", "region": "A", "data": "10/3", "status": "" },
  { "name": "Serious Sam: Siberian Mayhem", "price": "2.43", "region": "A", "data": "10/3", "status": "" },
  { "name": "Shadowblade Odyssey", "price": "0.04", "region": "A", "data": "10/8", "status": "" },
  { "name": "She Wants Me Dead", "price": "0.10", "region": "A", "data": "10/3", "status": "" },
  { "name": "Shuyan Saga", "price": "0.49", "region": "A", "data": "10/7", "status": "" },
  { "name": "Skautfold: Usurper", "price": "0.43", "region": "A", "data": "10/3", "status": "GOLD" },
  { "name": "Smart Moves", "price": "0.11", "region": "A", "data": "10/3", "status": "" },
  { "name": "Smelter", "price": "0.49", "region": "A", "data": "10/3", "status": "GOLD" },
  { "name": "Sniper Ghost Warrior Contracts", "price": "2.86", "region": "A", "data": "10/3", "status": "" },
  { "name": "Sniper Ghost Warrior Contracts & SGW3 Unlimited Edition", "price": "4.33", "region": "E", "data": "10/3", "status": "" },
  { "name": "Sniper Ghost Warrior Contracts 1 & 2 Double Pack", "price": "5.19", "region": "E", "data": "10/3", "status": "" },
  { "name": "Sniper Ghost Warrior Contracts 2", "price": "3.43", "region": "A", "data": "10/3", "status": "" },
  { "name": "Sniper Ghost Warrior Contracts 2 Complete Edition", "price": "5.19", "region": "E", "data": "10/3", "status": "" },
  { "name": "Sniper Ghost Warrior Contracts 2 Deluxe Arsenal Edition", "price": "4.28", "region": "A", "data": "10/3", "status": "" },
  { "name": "SnowRunner - 2-Year Anniversary Edition", "price": "17.63", "region": "T", "data": "10/3", "status": "GOLD" },
  { "name": "Solar Ash", "price": "9.19", "region": "E", "data": "9/29", "status": "" },
  { "name": "Space Crew: Legendary Edition", "price": "0.69", "region": "A", "data": "10/3", "status": "" },
  { "name": "Space Raiders in Space", "price": "0.24", "region": "A", "data": "10/3", "status": "" },
  { "name": "Sparkle Bundle", "price": "0.36", "region": "A", "data": "12/3", "status": "" },
  { "name": "Star Crossed", "price": "0.10", "region": "A", "data": "10/9", "status": "" },
  { "name": "State of Decay 2: Juggernaut Edition", "price": "2.57", "region": "E", "data": "9/29", "status": "" },
  { "name": "SturmFront - The Mutant War: Ubel Edition", "price": "0.16", "region": "A", "data": "10/3", "status": "GOLD" },
  { "name": "Super Brawl Rush", "price": "0.16", "region": "A", "data": "9/30", "status": "" },
  { "name": "Super Mega Baseball™ 4", "price": "15.08", "region": "A", "data": "10/1", "status": "" },
  { "name": "Super Mega Baseball™ 4 Ballpark Edition", "price": "17.83", "region": "A", "data": "10/1", "status": "" },
  { "name": "Super Night Riders", "price": "0.04", "region": "A", "data": "10/3", "status": "" },
  { "name": "Super Pixel Kid", "price": "0.04", "region": "A", "data": "10/1", "status": "" },
  { "name": "Super Snake Block DX", "price": "0.41", "region": "T", "data": "9/30", "status": "" },
  { "name": "Teacup", "price": "0.22", "region": "A", "data": "10/9", "status": "" },
  { "name": "Techno Tanks", "price": "0.17", "region": "A", "data": "10/3", "status": "" },
  { "name": "Tested on Humans: Escape Room", "price": "0.32", "region": "A", "data": "9/27", "status": "" },
  { "name": "The Division 2 - Warlords of New York - Ultimate Edition", "price": "3.43", "region": "A", "data": "10/3", "status": "GOLD" },
  { "name": "The Division 2 - Warlords of New York Edition", "price": "2.57", "region": "A", "data": "10/3", "status": "" },
  { "name": "The Escapists: Supermax Edition", "price": "0.72", "region": "A", "data": "4/30", "status": "" },
  { "name": "The Explorer Of Night (for Windows 10)", "price": "0.13", "region": "A", "data": "10/3", "status": "" },
  { "name": "The Forest Cathedral", "price": "0.40", "region": "A", "data": "10/9", "status": "" },
  { "name": "The Jackbox Party Quadpack", "price": "1.60", "region": "A", "data": "12/3", "status": "" },
  { "name": "The LEGO Movie Videogame", "price": "0.32", "region": "A", "data": "10/3", "status": "" },
  { "name": "The LEGO® NINJAGO® Movie Video Game", "price": "0.64", "region": "A", "data": "10/3", "status": "" },
  { "name": "The Outer Worlds", "price": "9.31", "region": "T", "data": "10/3", "status": "" },
  { "name": "The Outer Worlds", "price": "5.57", "region": "E", "data": "10/3", "status": "" },
  { "name": "The Outer Worlds: Spacer's Choice Edition", "price": "15.87", "region": "T", "data": "10/3", "status": "" },
  { "name": "The end is nahual: If I may say so", "price": "0.17", "region": "A", "data": "10/3", "status": "" },
  { "name": "Time Of War, Arkano'90", "price": "0.31", "region": "A", "data": "10/3", "status": "" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint", "price": "1.71", "region": "A", "data": "10/3", "status": "" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Deluxe Edition", "price": "2.06", "region": "A", "data": "10/3", "status": "GOLD" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Ultimate Edition", "price": "3.14", "region": "A", "data": "10/3", "status": "" },
  { "name": "Tom Clancy's Rainbow Six® Siege Deluxe Edition", "price": "3.21", "region": "A", "data": "10/3", "status": "" },
  { "name": "Tom Clancy's Rainbow Six® Siege Ultimate Edition", "price": "13.71", "region": "A", "data": "10/3", "status": "" },
  { "name": "Tom Clancy's The Division® 2", "price": "1.28", "region": "A", "data": "10/3", "status": "" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Ultimate Edition", "price": "2.71", "region": "A", "data": "10/3", "status": "" },
  { "name": "Tom Clancy’s Rainbow Six® Extraction Deluxe Edition", "price": "4.28", "region": "A", "data": "10/3", "status": "" },
  { "name": "Tony and Clyde", "price": "0.67", "region": "A", "data": "10/3", "status": "GOLD" },
  { "name": "Tower Princess", "price": "2.43", "region": "A", "data": "10/3", "status": "GOLD" },
  { "name": "Train Sim World® 4: Deluxe Edition", "price": "14.89", "region": "E", "data": "9/26", "status": "" },
  { "name": "Train Sim World® 4: Special Edition", "price": "24.08", "region": "E", "data": "9/26", "status": "" },
  { "name": "Train Sim World® 4: Standard Edition", "price": "6.17", "region": "T", "data": "9/26", "status": "" },
  { "name": "Tricky Thief", "price": "1.90", "region": "A", "data": "10/3", "status": "" },
  { "name": "UFC 5 Deluxe Edition", "price": "45.25", "region": "A", "data": "10/2", "status": "" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "0.39", "region": "A", "data": "12/3", "status": "" },
  { "name": "United Assault - Battle of the Bulge", "price": "0.40", "region": "A", "data": "10/3", "status": "" },
  { "name": "United Assault - Normandy '44", "price": "0.31", "region": "A", "data": "10/3", "status": "" },
  { "name": "VAMPYR", "price": "0.91", "region": "A", "data": "10/3", "status": "" },
  { "name": "Vampyr", "price": "0.82", "region": "A", "data": "10/3", "status": "GOLD" },
  { "name": "Vermintide - Digital Value Pack", "price": "1.14", "region": "A", "data": "3/7/", "status": "" },
  { "name": "Void Gore", "price": "0.08", "region": "A", "data": "10/3", "status": "" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "1.82", "region": "A", "data": "8/31", "status": "" },
  { "name": "WWE 2K23 Deluxe Edition", "price": "15.71", "region": "A", "data": "10/3", "status": "GOLD" },
  { "name": "Watch Dogs: Legion - Deluxe Edition", "price": "1.93", "region": "A", "data": "10/3", "status": "" },
  { "name": "We should talk.", "price": "0.11", "region": "A", "data": "10/9", "status": "" },
  { "name": "Werewolf Pinball", "price": "0.10", "region": "A", "data": "9/30", "status": "" },
  { "name": "Where the Bees Make Honey", "price": "0.08", "region": "A", "data": "10/9", "status": "" },
  { "name": "Wytchwood", "price": "0.49", "region": "A", "data": "10/9", "status": "" },
  { "name": "XIII", "price": "0.61", "region": "A", "data": "10/3", "status": "" }
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
    a = 60
  } else if (value > 1 && value <= 5) {
    a = 75
  } else if (value > 5 && value <= 10) {
    a = 90
  } else if (value > 10 && value <= 15) {
    a = 125
  } else if (value > 15 && value <= 20) {
    a = 145
  } else if (value > 20 && value <= 25) {
    a = 190
  } else if (value > 25) {
    a = 210
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
