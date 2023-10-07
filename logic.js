const input = document.querySelector('.input');
const output = document.querySelector('.output-res');
const list = document.querySelector('.list')
const showBtn = document.querySelector('.show')


showBtn.addEventListener('click', () => {
  showBtn.classList.contains('active') ?
    hiddenMenu() : showMenu()
})

let usd = 110;

const arr = [
  { "name": "35MM", "price": "0.26", "region": "A", "data": "10/10", "status": "" },
  { "name": "50 Years (for Windows 10)", "price": "0.11", "region": "A", "data": "10/10", "status": "" },
  { "name": "7th Sector", "price": "0.32", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "APICO", "price": "0.53", "region": "A", "data": "10/9/", "status": "" },
  { "name": "Aery - Sky Castle", "price": "0.24", "region": "A", "data": "10/10", "status": "" },
  { "name": "Aground", "price": "0.24", "region": "A", "data": "10/9/", "status": "" },
  { "name": "Aircraft Evolution", "price": "0.16", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Alfred Hitchcock - Vertigo", "price": "0.46", "region": "A", "data": "10/10", "status": "" },
  { "name": "Alone in the Dark", "price": "10.03", "region": "A", "data": "10/26", "status": "" },
  { "name": "Alone in the Dark - Digital Deluxe Edition", "price": "11.57", "region": "A", "data": "10/26", "status": "" },
  { "name": "Ankora: Lost Days", "price": "0.41", "region": "A", "data": "10/10", "status": "" },
  { "name": "Anno 1800™ Console Edition", "price": "8.36", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Anthem™: Legion of Dawn Edition", "price": "1.61", "region": "A", "data": "10/10", "status": "" },
  { "name": "Arietta of Spirits", "price": "0.20", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Arkanoid Eternal Battle", "price": "0.32", "region": "A", "data": "10/10", "status": "" },
  { "name": "Aven Colony", "price": "0.86", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Awarded Platformer Bundle", "price": "0.47", "region": "A", "data": "12/31", "status": "" },
  { "name": "BPM: Bullets Per Minute", "price": "0.61", "region": "A", "data": "10/10", "status": "" },
  { "name": "Batman: Return to Arkham", "price": "0.71", "region": "A", "data": "10/10", "status": "" },
  { "name": "Batman™: Arkham Knight", "price": "0.63", "region": "A", "data": "10/10", "status": "" },
  { "name": "Batora: Lost Haven", "price": "1.93", "region": "A", "data": "10/10", "status": "" },
  { "name": "Battle Chasers: Nightwar", "price": "0.21", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Battlefield 4™ Premium Edition", "price": "0.63", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Beasts of Maravilla Island", "price": "0.22", "region": "A", "data": "10/9/", "status": "" },
  { "name": "Betomis (Xbox & PC)", "price": "2.59", "region": "I", "data": "10/12", "status": "" },
  { "name": "Biomutant", "price": "1.68", "region": "A", "data": "10/10", "status": "" },
  { "name": "Blacksad: Under the Skin", "price": "0.32", "region": "A", "data": "10/10", "status": "" },
  { "name": "Bombfest", "price": "0.11", "region": "A", "data": "10/9/", "status": "" },
  { "name": "Book Quest", "price": "0.14", "region": "A", "data": "10/10", "status": "" },
  { "name": "Bravery and Greed", "price": "1.72", "region": "A", "data": "10/10", "status": "" },
  { "name": "Bud Spencer & Terence Hill - Slaps And Beans", "price": "0.09", "region": "A", "data": "10/10", "status": "" },
  { "name": "Bumblebee - Little Bee Adventure", "price": "0.28", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Butterfly (for Windows 10)", "price": "0.11", "region": "A", "data": "10/10", "status": "" },
  { "name": "Butterfly 2 (for Windows 10)", "price": "0.11", "region": "A", "data": "10/10", "status": "" },
  { "name": "Calico", "price": "0.25", "region": "A", "data": "10/9/", "status": "" },
  { "name": "Call of Cthulhu", "price": "1.01", "region": "T", "data": "10/10", "status": "GOLD" },
  { "name": "Chasm", "price": "0.20", "region": "A", "data": "10/10", "status": "" },
  { "name": "Child of Light", "price": "0.13", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Child of Light® Ultimate Edition", "price": "0.26", "region": "A", "data": "10/10", "status": "" },
  { "name": "Chroma Quaternion", "price": "0.34", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Clash - Zeno Edition", "price": "9.86", "region": "A", "data": "10/10", "status": "" },
  { "name": "Clunky Hero", "price": "0.77", "region": "T", "data": "10/10", "status": "" },
  { "name": "Crashbots", "price": "0.12", "region": "A", "data": "10/10", "status": "" },
  { "name": "Crown of the Empire", "price": "0.08", "region": "A", "data": "10/10", "status": "" },
  { "name": "Cube 2x1", "price": "0.26", "region": "A", "data": "10/7/", "status": "" },
  { "name": "Cyber Citizen Shockman 2: A New Menace", "price": "0.19", "region": "A", "data": "10/7/", "status": "" },
  { "name": "DARKLAND 3", "price": "0.04", "region": "A", "data": "10/14", "status": "" },
  { "name": "DRAGON BALL Z: KAKAROT Deluxe Edition", "price": "7.20", "region": "A", "data": "10/10", "status": "" },
  { "name": "Darksiders II Deathinitive Edition", "price": "0.21", "region": "A", "data": "10/10", "status": "" },
  { "name": "Darksiders III", "price": "1.26", "region": "A", "data": "10/10", "status": "" },
  { "name": "Darksiders III - Deluxe Edition", "price": "1.32", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Darksiders Warmastered Edition", "price": "0.14", "region": "A", "data": "10/10", "status": "" },
  { "name": "Deceive Inc.", "price": "0.61", "region": "A", "data": "10/10", "status": "" },
  { "name": "Deceive Inc. Black Tie Edition Content", "price": "0.92", "region": "A", "data": "10/10", "status": "" },
  { "name": "Deflector", "price": "0.75", "region": "A", "data": "10/14", "status": "" },
  { "name": "Demetrios - The BIG Cynical Adventure", "price": "0.03", "region": "A", "data": "10/10", "status": "" },
  { "name": "Desperados III Deluxe Edition", "price": "1.85", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Destroy All Humans!", "price": "0.62", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Destroy All Humans! - Jumbo Pack", "price": "3.00", "region": "A", "data": "10/10", "status": "" },
  { "name": "Destroy All Humans! 2 - Reprobed", "price": "2.52", "region": "A", "data": "10/10", "status": "" },
  { "name": "Dig Deep", "price": "0.10", "region": "A", "data": "10/10", "status": "" },
  { "name": "Disciples: Liberation", "price": "5.71", "region": "A", "data": "10/10", "status": "" },
  { "name": "Discovery Tour: Viking Age", "price": "3.77", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Doctor Who: The Edge of Reality", "price": "1.52", "region": "A", "data": "10/10", "status": "" },
  { "name": "Doctor Who: The Lonely Assassins", "price": "0.87", "region": "A", "data": "10/10", "status": "" },
  { "name": "Dou", "price": "0.04", "region": "A", "data": "10/8/", "status": "" },
  { "name": "Dragon Lapis", "price": "0.31", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Dragon Prana", "price": "0.40", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Dragon Sinker: Descendants of Legend", "price": "0.31", "region": "A", "data": "10/10", "status": "" },
  { "name": "Dreamfall Chapters", "price": "0.13", "region": "A", "data": "10/10", "status": "" },
  { "name": "Dungeons 4", "price": "1.84", "region": "A", "data": "11/9/", "status": "" },
  { "name": "Dungeons 4 - Digital Deluxe Edition", "price": "2.21", "region": "A", "data": "11/9/", "status": "" },
  { "name": "EA Family Bundle", "price": "0.19", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "EA SPORTS™ PGA TOUR™", "price": "12.86", "region": "A", "data": "10/10", "status": "" },
  { "name": "EA SPORTS™ PGA TOUR™ Deluxe Edition", "price": "16.00", "region": "A", "data": "10/10", "status": "" },
  { "name": "ELEX II", "price": "2.83", "region": "A", "data": "10/10", "status": "" },
  { "name": "EleMetals: Death Metal Death Match!", "price": "0.12", "region": "A", "data": "10/10", "status": "" },
  { "name": "Elex", "price": "1.26", "region": "A", "data": "10/10", "status": "" },
  { "name": "Endurance: Space Action", "price": "0.20", "region": "A", "data": "10/10", "status": "" },
  { "name": "Enter Digiton: Heart of Corruption", "price": "0.10", "region": "A", "data": "10/10", "status": "" },
  { "name": "Escape Dead Island", "price": "0.11", "region": "A", "data": "12/31", "status": "" },
  { "name": "Evan's Remains", "price": "0.09", "region": "A", "data": "10/9/", "status": "" },
  { "name": "Evil Dead: The Game - Game of the Year Edition", "price": "10.00", "region": "A", "data": "10/10", "status": "" },
  { "name": "FAR CRY 4 + FAR CRY PRIMAL BUNDLE", "price": "1.59", "region": "T", "data": "10/10", "status": "" },
  { "name": "FRONT MISSION 1st: Remake", "price": "1.14", "region": "A", "data": "10/10", "status": "" },
  { "name": "Fade to Silence", "price": "0.42", "region": "A", "data": "10/10", "status": "" },
  { "name": "Fantasy Dash", "price": "0.04", "region": "A", "data": "10/13", "status": "" },
  { "name": "Far Cry Primal - Apex Edition", "price": "1.47", "region": "T", "data": "10/10", "status": "" },
  { "name": "Far Cry® 4", "price": "0.38", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Far Cry® 5", "price": "0.99", "region": "A", "data": "10/10", "status": "" },
  { "name": "Far Cry® 5 Gold Edition + Far Cry ® New Dawn Deluxe Editi...", "price": "1.82", "region": "A", "data": "10/10", "status": "" },
  { "name": "Far Cry® 6", "price": "3.57", "region": "A", "data": "10/10", "status": "" },
  { "name": "Far Cry® New Dawn", "price": "0.86", "region": "A", "data": "10/10", "status": "" },
  { "name": "Far Cry® New Dawn Deluxe Edition", "price": "1.03", "region": "A", "data": "10/10", "status": "" },
  { "name": "Flashback", "price": "0.57", "region": "A", "data": "10/10", "status": "" },
  { "name": "Flockers", "price": "0.32", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Fluffy Horde", "price": "0.10", "region": "A", "data": "10/10", "status": "" },
  { "name": "Football Manager 2024 Console", "price": "15.58", "region": "E", "data": "11/6/", "status": "" },
  { "name": "For Honor® Complete Edition", "price": "2.86", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "From Earth to Heaven", "price": "0.19", "region": "A", "data": "10/10", "status": "" },
  { "name": "Galaxy Champions TV", "price": "0.10", "region": "A", "data": "10/10", "status": "" },
  { "name": "Garden City", "price": "0.10", "region": "A", "data": "10/10", "status": "" },
  { "name": "Generation Zero ® - Essential DLC Bundle", "price": "0.46", "region": "A", "data": "10/10", "status": "" },
  { "name": "Generation Zero ® - Exterminator DLC Bundle", "price": "0.63", "region": "A", "data": "10/10", "status": "" },
  { "name": "Generation Zero® - Resistance Bundle", "price": "0.81", "region": "A", "data": "10/10", "status": "" },
  { "name": "Genesis Alpha One", "price": "0.21", "region": "A", "data": "10/10", "status": "" },
  { "name": "Gord", "price": "14.85", "region": "A", "data": "10/10", "status": "" },
  { "name": "Gorogoa", "price": "0.13", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Gravel", "price": "0.57", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Gravel Special Edition", "price": "0.86", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "GreedFall - Gold Edition", "price": "3.11", "region": "T", "data": "10/10", "status": "GOLD" },
  { "name": "GreedFall - Gold Edition (Windows 10)", "price": "1.88", "region": "A", "data": "10/10", "status": "" },
  { "name": "Green Hell", "price": "3.02", "region": "T", "data": "10/10", "status": "GOLD" },
  { "name": "HammerHelm", "price": "0.49", "region": "A", "data": "10/4/", "status": "" },
  { "name": "Heidelberg 1693", "price": "0.31", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Heirs of the Kings", "price": "0.40", "region": "A", "data": "10/10", "status": "" },
  { "name": "Hexagroove: Tactical DJ", "price": "10.25", "region": "U", "data": "10/10", "status": "GOLD" },
  { "name": "Hood: Outlaws & Legends", "price": "1.13", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Hunt Ducks 4", "price": "0.04", "region": "A", "data": "10/12", "status": "" },
  { "name": "Hunting Simulator 2 - Bear Hunter Edition Xbox One", "price": "0.57", "region": "A", "data": "10/10", "status": "" },
  { "name": "Hunting Simulator 2 - Bear Hunter Edition Xbox Series X|S", "price": "0.49", "region": "A", "data": "10/10", "status": "" },
  { "name": "Hunting Simulator 2 Xbox One", "price": "0.49", "region": "A", "data": "10/10", "status": "" },
  { "name": "Hunting Simulator 2 Xbox Series X|S", "price": "0.41", "region": "A", "data": "10/10", "status": "" },
  { "name": "I Am Dead", "price": "0.32", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Immortals Fenyx Rising™", "price": "1.54", "region": "A", "data": "10/10", "status": "" },
  { "name": "Immortals Fenyx Rising™ Gold Edition", "price": "2.36", "region": "A", "data": "10/10", "status": "" },
  { "name": "Insurgency: Sandstorm - Deluxe Edition", "price": "8.00", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "JackQuest", "price": "0.08", "region": "A", "data": "10/10", "status": "" },
  { "name": "Jagged Alliance 3", "price": "17.45", "region": "T", "data": "11/14", "status": "" },
  { "name": "Joy Ball Adventure", "price": "0.04", "region": "A", "data": "10/5/", "status": "" },
  { "name": "Just Die Already", "price": "0.19", "region": "A", "data": "10/10", "status": "" },
  { "name": "KeyWe", "price": "0.36", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Kung Fu Fighting", "price": "0.04", "region": "A", "data": "10/14", "status": "" },
  { "name": "LEGO® Star Wars™: The Skywalker Saga", "price": "4.71", "region": "A", "data": "10/10", "status": "" },
  { "name": "Light & Dark Bundle", "price": "4.56", "region": "A", "data": "11/2/", "status": "" },
  { "name": "Little Nightmares Complete Edition", "price": "3.60", "region": "A", "data": "10/10", "status": "" },
  { "name": "Lost Artifacts 5: Frozen Queen", "price": "0.08", "region": "A", "data": "10/10", "status": "" },
  { "name": "Lost Ruins", "price": "0.57", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Love Kuesuto", "price": "0.16", "region": "A", "data": "10/14", "status": "" },
  { "name": "M.A.C.E. Space Shooter", "price": "0.14", "region": "A", "data": "10/10", "status": "" },
  { "name": "MONOPOLY PLUS + MONOPOLY Madness", "price": "2.91", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Madden NFL 19", "price": "28.41", "region": "C", "data": "12/30", "status": "" },
  { "name": "Madden NFL 22 Xbox One", "price": "11.00", "region": "A", "data": "12/31", "status": "" },
  { "name": "Madden NFL 22 Xbox Series X|S", "price": "12.80", "region": "A", "data": "12/31", "status": "" },
  { "name": "Madden NFL 23 Xbox One", "price": "14.63", "region": "A", "data": "12/31", "status": "" },
  { "name": "Madden NFL 23 Xbox Series X|S", "price": "17.14", "region": "A", "data": "12/31", "status": "" },
  { "name": "Madden NFL 24", "price": "17.14", "region": "A", "data": "12/1/", "status": "" },
  { "name": "Madden NFL 24 Deluxe Edition Xbox Series X|S & Xbox One", "price": "25.14", "region": "A", "data": "12/1/", "status": "" },
  { "name": "Maggie the Magnet", "price": "0.12", "region": "A", "data": "10/10", "status": "" },
  { "name": "Marvel's Midnight Suns Digital+ Edition for Xbox One", "price": "10.28", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Marvel's Midnight Suns Digital+ Edition for Xbox Series X|S", "price": "10.28", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Mass Effect™: Andromeda – Deluxe Recruit Edition", "price": "0.79", "region": "A", "data": "10/10", "status": "" },
  { "name": "Mastho is Together", "price": "0.08", "region": "A", "data": "10/10", "status": "" },
  { "name": "Mech Armada", "price": "0.32", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "MechWarrior 5: Mercenaries", "price": "0.61", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Mechs V Kaijus", "price": "0.45", "region": "A", "data": "10/6/", "status": "" },
  { "name": "Meet Your Maker: Deluxe Edition", "price": "5.31", "region": "A", "data": "10/11", "status": "" },
  { "name": "Meet Your Maker: Sector 1 Bundle", "price": "1.93", "region": "A", "data": "10/11", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.00", "region": "U", "data": "12/1/", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.00", "region": "U", "data": "12/1/", "status": "" },
  { "name": "Mini Madness", "price": "0.16", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Monster Energy Supercross - The Official Videogame 3", "price": "1.07", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Monster Energy Supercross 3 - Special Edition", "price": "1.93", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Monster Jam Steel Titans", "price": "0.23", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Monster Jam Steel Titans 2", "price": "0.83", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Monster Sanctuary", "price": "0.64", "region": "A", "data": "10/10", "status": "" },
  { "name": "Morphite", "price": "0.09", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "MotoGP™17", "price": "0.43", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Mugsters", "price": "0.32", "region": "A", "data": "10/10", "status": "" },
  { "name": "Mummy Pinball", "price": "0.10", "region": "A", "data": "10/20", "status": "" },
  { "name": "Murder Mystery Machine", "price": "0.30", "region": "A", "data": "10/10", "status": "" },
  { "name": "NHL® 24 X-Factor Edition Xbox One & Xbox Series X|S", "price": "45.25", "region": "A", "data": "10/3/", "status": "" },
  { "name": "Necromunda: Underhive Wars", "price": "1.41", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Need for Speed™ Heat Deluxe Edition", "price": "0.86", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Need for Speed™ Hot Pursuit Remastered", "price": "1.43", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "New Tales from the Borderlands: Deluxe Edition", "price": "10.00", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Newt One", "price": "0.08", "region": "A", "data": "10/9/", "status": "" },
  { "name": "Nidhogg 2", "price": "0.17", "region": "A", "data": "10/10", "status": "" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.10", "region": "A", "data": "5/31/", "status": "" },
  { "name": "Nirvana: Deluxe Edition", "price": "0.11", "region": "A", "data": "10/10", "status": "" },
  { "name": "No Man's Sky", "price": "1.23", "region": "A", "data": "10/10", "status": "" },
  { "name": "No Straight Roads", "price": "0.36", "region": "A", "data": "10/10", "status": "" },
  { "name": "OmegaBot", "price": "0.27", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Onigo Hunter", "price": "0.43", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Nirvana: Deluxe Edition", "price": "0.11", "region": "A", "data": "10/10", "status": "" },
  { "name": "No Man's Sky", "price": "1.23", "region": "A", "data": "10/10", "status": "" },
  { "name": "No Straight Roads", "price": "0.36", "region": "A", "data": "10/10", "status": "" },
  { "name": "OmegaBot", "price": "0.27", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Onigo Hunter", "price": "0.43", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Onsen Master", "price": "0.33", "region": "A", "data": "10/9/", "status": "" },
  { "name": "Outbreak: Gwen's Nightmare", "price": "0.08", "region": "A", "data": "10/10", "status": "" },
  { "name": "Outbreak: The Undying Collection", "price": "0.41", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Outer Wilds", "price": "0.62", "region": "A", "data": "10/10", "status": "" },
  { "name": "Overcooked", "price": "0.13", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Overcooked! 2 - Gourmet Edition", "price": "0.40", "region": "A", "data": "10/10", "status": "" },
  { "name": "Panzer Dragoon: Remake", "price": "0.10", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Penarium", "price": "0.06", "region": "A", "data": "10/10", "status": "" },
  { "name": "Pickleball Smash", "price": "20.91", "region": "I", "data": "10/23", "status": "" },
  { "name": "Pizza Possum", "price": "0.26", "region": "A", "data": "10/6/", "status": "" },
  { "name": "Port Royale 4", "price": "4.57", "region": "A", "data": "10/10", "status": "" },
  { "name": "Portal of Evil: Stolen Runes", "price": "0.22", "region": "A", "data": "10/10", "status": "" },
  { "name": "Portal of Evil: Stolen Runes", "price": "0.22", "region": "A", "data": "10/10", "status": "" },
  { "name": "Potata: fairy flower", "price": "0.24", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Princess Farmer", "price": "0.28", "region": "A", "data": "10/9/", "status": "" },
  { "name": "Pro Gymnast Simulator + Cyber Protocol", "price": "0.21", "region": "A", "data": "10/10", "status": "" },
  { "name": "RAZED", "price": "0.03", "region": "A", "data": "10/10", "status": "" },
  { "name": "RE:CALL", "price": "0.53", "region": "A", "data": "10/9/", "status": "" },
  { "name": "RISK", "price": "0.11", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "RWBY: Arrowfell", "price": "0.86", "region": "A", "data": "10/10", "status": "" },
  { "name": "Rad Rodgers", "price": "0.11", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Radon Blast", "price": "0.14", "region": "A", "data": "10/10", "status": "" },
  { "name": "Rayland 2 (Xbox & PC)", "price": "2.59", "region": "I", "data": "10/5/", "status": "" },
  { "name": "Relicta", "price": "0.24", "region": "A", "data": "10/10", "status": "" },
  { "name": "Remnant 2", "price": "11.43", "region": "A", "data": "10/10", "status": "" },
  { "name": "Remnant II - Deluxe Edition", "price": "12.57", "region": "A", "data": "10/10", "status": "" },
  { "name": "Remnant II - Ultimate Edition", "price": "16.00", "region": "A", "data": "10/10", "status": "" },
  { "name": "Remoteness", "price": "3.04", "region": "A", "data": "10/10", "status": "" },
  { "name": "Retro Tank Arcade", "price": "0.04", "region": "A", "data": "10/16", "status": "" },
  { "name": "Rick Henderson", "price": "0.20", "region": "A", "data": "10/10", "status": "" },
  { "name": "Rift Keeper", "price": "0.20", "region": "A", "data": "10/10", "status": "" },
  { "name": "Rise of the Triad: Ludicrous Edition", "price": "0.65", "region": "A", "data": "10/14", "status": "" },
  { "name": "Roads of Time", "price": "0.10", "region": "A", "data": "10/10", "status": "" },
  { "name": "Rogue Lords", "price": "0.49", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Rogue Stormers", "price": "0.11", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Run Sausage Run!", "price": "0.05", "region": "A", "data": "10/10", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "3.65", "region": "A", "data": "12/31", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "4.88", "region": "A", "data": "1/1/2", "status": "" },
  { "name": "STAR WARS™ Battlefront™ II: Celebration Edition", "price": "1.29", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "STEEP", "price": "0.26", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Secret Agent : Cold War Espionage", "price": "0.20", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Shadow Gangs", "price": "4.17", "region": "E", "data": "10/10", "status": "" },
  { "name": "Shadowblade Odyssey", "price": "0.04", "region": "A", "data": "10/8/", "status": "" },
  { "name": "Shantae and the Pirate's Curse", "price": "0.28", "region": "A", "data": "10/10", "status": "" },
  { "name": "Shantae: Half-Genie Hero Ultimate Edition", "price": "0.43", "region": "A", "data": "10/10", "status": "" },
  { "name": "Shantae: Risky's Revenge - Director's Cut", "price": "0.20", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Shape Up Gold Edition", "price": "0.21", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Sherlock Holmes Chapter One", "price": "2.50", "region": "A", "data": "10/10", "status": "" },
  { "name": "Sherlock Holmes Essential Bundle", "price": "4.46", "region": "A", "data": "10/10", "status": "" },
  { "name": "Shantae and the Pirate's Curse", "price": "0.28", "region": "A", "data": "10/10", "status": "" },
  { "name": "Shantae: Half-Genie Hero Ultimate Edition", "price": "0.43", "region": "A", "data": "10/10", "status": "" },
  { "name": "Shantae: Risky's Revenge - Director's Cut", "price": "0.20", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Shape Up Gold Edition", "price": "0.21", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Sherlock Holmes Chapter One", "price": "2.50", "region": "A", "data": "10/10", "status": "" },
  { "name": "Sherlock Holmes Essential Bundle", "price": "4.46", "region": "A", "data": "10/10", "status": "" },
  { "name": "Sherlock Holmes The Awakened", "price": "6.89", "region": "E", "data": "10/10", "status": "" },
  { "name": "Ship of Fools", "price": "2.01", "region": "A", "data": "10/10", "status": "" },
  { "name": "Shuyan Saga", "price": "0.49", "region": "A", "data": "10/7/", "status": "" },
  { "name": "Sid Meier’s Civilization® VI Anthology", "price": "7.00", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Sid Meier’s Civilization® VI Platinum Edition", "price": "3.57", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Siegecraft Commander", "price": "0.11", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Skate 3", "price": "0.11", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Smart Moves (for Windows 10)", "price": "0.11", "region": "A", "data": "10/10", "status": "" },
  { "name": "Smart Moves 2 (for Windows 10)", "price": "0.11", "region": "A", "data": "10/10", "status": "" },
  { "name": "SnowRunner - 2-Year Anniversary Edition", "price": "17.45", "region": "T", "data": "10/10", "status": "GOLD" },
  { "name": "South Park™: The Fractured but Whole™", "price": "1.79", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Sparkle 4 Tales", "price": "0.04", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Sparkle Bundle", "price": "0.36", "region": "A", "data": "12/31", "status": "" },
  { "name": "Star Crossed", "price": "0.10", "region": "A", "data": "10/9/", "status": "" },
  { "name": "State of Decay 2: Juggernaut Edition", "price": "4.28", "region": "A", "data": "10/10", "status": "" },
  { "name": "State of Decay: Year-One Survival Edition", "price": "1.43", "region": "A", "data": "10/10", "status": "" },
  { "name": "Steampunk Tower 2", "price": "0.12", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Steep X Games Gold Edition", "price": "0.74", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Super Mega Baseball™ 4", "price": "15.08", "region": "A", "data": "10/10", "status": "" },
  { "name": "Super Mega Baseball™ 4 Ballpark Edition", "price": "17.83", "region": "A", "data": "10/10", "status": "" },
  { "name": "TOKI Juju Densetsu", "price": "1.14", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "TT Isle Of Man 3 - Racing Fan Edition", "price": "21.09", "region": "A", "data": "10/10", "status": "" },
  { "name": "Teacup", "price": "0.22", "region": "A", "data": "10/9/", "status": "" },
  { "name": "Telling Lies", "price": "0.20", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Terraformers", "price": "4.50", "region": "A", "data": "10/4/", "status": "" },
  { "name": "Terraformers: Supporter Edition", "price": "5.40", "region": "A", "data": "10/4/", "status": "" },
  { "name": "Tested on Humans: Escape Room", "price": "0.32", "region": "A", "data": "10/5/", "status": "" },
  { "name": "The Adventures of Elena Temple: Definitive Edition", "price": "0.30", "region": "A", "data": "10/10", "status": "" },
  { "name": "The Bard's Tale ARPG : Remastered and Resnarkled", "price": "0.16", "region": "A", "data": "10/10", "status": "" },
  { "name": "The Bard's Tale IV: Director's Cut", "price": "0.54", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "The Bard's Tale Trilogy", "price": "0.10", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "The Big Con", "price": "0.21", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "The Book of Unwritten Tales 2", "price": "0.29", "region": "A", "data": "10/10", "status": "" },
  { "name": "The Council - Complete Season", "price": "0.59", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "The Darkest Tales", "price": "2.53", "region": "A", "data": "10/10", "status": "" },
  { "name": "The Division 2 - Warlords of New York Edition", "price": "2.57", "region": "A", "data": "10/10", "status": "" },
  { "name": "The Dwarves", "price": "0.29", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "The Elder Scrolls Online Deluxe Collection: Necrom", "price": "16.36", "region": "T", "data": "10/11", "status": "" },
  { "name": "The Elder Scrolls® Online", "price": "1.28", "region": "T", "data": "10/10", "status": "" },
  { "name": "The Escapists", "price": "0.11", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "The Escapists: Supermax Edition", "price": "0.72", "region": "A", "data": "4/30/", "status": "" },
  { "name": "The Forest Cathedral", "price": "0.40", "region": "A", "data": "10/9/", "status": "" },
  { "name": "The Great Perhaps", "price": "0.12", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "The Jackbox Party Quadpack", "price": "1.61", "region": "A", "data": "12/31", "status": "" },
  { "name": "The Last Campfire", "price": "0.12", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "The Life and Suffering of Sir Brante", "price": "0.41", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "The Lord of the Rings: Gollum™", "price": "15.25", "region": "T", "data": "10/10", "status": "" },
  { "name": "The Lucid Dreamer Bundle", "price": "3.60", "region": "A", "data": "10/10", "status": "" },
  { "name": "The Oregon Trail", "price": "10.00", "region": "A", "data": "10/6/", "status": "" },
  { "name": "The Pathless", "price": "5.14", "region": "A", "data": "10/10", "status": "" },
  { "name": "The Quarry - Deluxe Edition", "price": "7.54", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "The Raven Remastered", "price": "0.21", "region": "A", "data": "10/10", "status": "" },
  { "name": "The Sinking City Xbox Series X|S", "price": "1.67", "region": "A", "data": "10/10", "status": "" },
  { "name": "The Sinking City – Necronomicon Edition", "price": "3.71", "region": "A", "data": "10/10", "status": "" },
  { "name": "The Sisters - Party of the Year", "price": "0.40", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "The Surge 1 & 2 - Dual Pack (Xbox)", "price": "1.71", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "The Wardrobe: Even Better Edition", "price": "0.60", "region": "T", "data": "10/10", "status": "" },
  { "name": "This War of Mine: The Little Ones", "price": "0.09", "region": "A", "data": "10/10", "status": "" },
  { "name": "Titan Quest", "price": "0.21", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Titanfall® 2: Ultimate Edition", "price": "0.57", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Gold Edition", "price": "2.86", "region": "A", "data": "10/10", "status": "" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Ultimate Edition", "price": "3.14", "region": "A", "data": "10/10", "status": "" },
  { "name": "Tom Clancy's The Division® 2", "price": "1.28", "region": "A", "data": "10/3/", "status": "GOLD" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands - Standard Edition", "price": "1.31", "region": "A", "data": "10/10", "status": "" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Year 2 Gold Edition", "price": "1.14", "region": "A", "data": "10/10", "status": "" },
  { "name": "Tom Clancy’s The Division® Franchise Bundle", "price": "2.00", "region": "A", "data": "10/10", "status": "" },
  { "name": "Tomb Raider I-III Remastered Starring Lara Croft", "price": "1.10", "region": "A", "data": "2/13/", "status": "" },
  { "name": "Torment: Tides of Numenera", "price": "0.40", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Towaga: Among Shadows", "price": "0.06", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Trials® Rising", "price": "0.86", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Twelve Minutes", "price": "0.51", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "UFC 5 Deluxe Edition", "price": "45.25", "region": "A", "data": "10/23", "status": "" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "0.39", "region": "A", "data": "12/30", "status": "" },
  { "name": "Vampire: The Masquerade - Swansong Xbox One", "price": "3.93", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Vampire: The Masquerade - Swansong Xbox Series X|S", "price": "3.93", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Vermintide - Digital Value Pack", "price": "1.14", "region": "A", "data": "3/7/2", "status": "" },
  { "name": "Volley Pals", "price": "1.28", "region": "A", "data": "10/10", "status": "" },
  { "name": "WATCH_DOGS™ COMPLETE EDITION", "price": "0.27", "region": "A", "data": "10/10", "status": "" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "1.82", "region": "A", "data": "8/31/", "status": "" },
  { "name": "WWE 2K23 Deluxe Edition", "price": "15.71", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Warhammer 40,000: Boltgun", "price": "9.64", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Warhammer 40,000: Space Wolf", "price": "0.10", "region": "A", "data": "10/10", "status": "" },
  { "name": "Warhammer Age of Sigmar: Storm Ground", "price": "1.69", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Wasteland 2: Director's Cut", "price": "0.28", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Wasteland Remastered", "price": "0.23", "region": "T", "data": "10/10", "status": "GOLD" },
  { "name": "Watch Dogs 1 + Watch Dogs 2 Gold Editions Bundle", "price": "11.26", "region": "B", "data": "10/10", "status": "" },
  { "name": "Watch Dogs 1 + Watch Dogs 2 Standard Editions Bundle", "price": "9.08", "region": "B", "data": "10/10", "status": "" },
  { "name": "Watch Dogs: Legion - Deluxe Edition", "price": "1.93", "region": "A", "data": "10/10", "status": "" },
  { "name": "Watch Dogs®2", "price": "1.07", "region": "A", "data": "10/10", "status": "" },
  { "name": "Watch Dogs®2 - Deluxe Edition", "price": "1.46", "region": "A", "data": "10/10", "status": "" },
  { "name": "Watch Dogs®2 - Gold Edition", "price": "1.71", "region": "A", "data": "10/10", "status": "" },
  { "name": "Watch Dogs®: Legion", "price": "1.54", "region": "A", "data": "10/10", "status": "" },
  { "name": "Watch Dogs®: Legion Gold Edition", "price": "3.14", "region": "A", "data": "10/10", "status": "" },
  { "name": "We should talk.", "price": "0.11", "region": "A", "data": "10/9/", "status": "" },
  { "name": "Werewolf: The Apocalypse - Earthblood Champion of Gaia Xb...", "price": "0.25", "region": "A", "data": "10/10", "status": "" },
  { "name": "Werewolf: The Apocalypse - Earthblood Champion of Gaia Xbox Series X|S", "price": "0.25", "region": "A", "data": "10/10", "status": "" },
  { "name": "What Remains of Edith Finch", "price": "0.14", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Where the Bees Make Honey", "price": "0.08", "region": "A", "data": "10/9/", "status": "" },
  { "name": "Woodle Tree Adventures", "price": "0.04", "region": "A", "data": "10/10", "status": "" },
  { "name": "World War Z: Aftermath", "price": "0.82", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "World War Z: Aftermath - Deluxe Edition", "price": "1.02", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "Wreckfest", "price": "0.82", "region": "A", "data": "10/10", "status": "GOLD" },
  { "name": "WrestleQuest", "price": "9.93", "region": "A", "data": "10/10", "status": "" },
  { "name": "Wytchwood", "price": "0.49", "region": "A", "data": "10/9/", "status": "" },
  { "name": "YesterMorrow", "price": "0.16", "region": "A", "data": "10/10", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Essentials DLC Bundle", "price": "0.27", "region": "A", "data": "10/10", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Seasoned Hunter Bundle", "price": "1.37", "region": "A", "data": "10/10", "status": "" }
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
  const res = value * usd + 10
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
