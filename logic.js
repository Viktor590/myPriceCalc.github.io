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
  { "name": "2K Ball N’ Brawl Bundle", "price": "3.26", "region": "A", "data": "9/26", "status": "" },
  { "name": "2URVIVE", "price": "0.14", "region": "A", "data": "9/26", "status": "" },
  { "name": "A Plague Tale Bundle", "price": "19.98", "region": "T", "data": "9/26", "status": "GOLD" },
  { "name": "ABZU", "price": "0.20", "region": "A", "data": "9/26", "status": "" },
  { "name": "AK-xolotl", "price": "3.60", "region": "A", "data": "9/29", "status": "" },
  { "name": "Aeon Must Die!", "price": "1.69", "region": "A", "data": "9/26", "status": "" },
  { "name": "After Wave: Downfall", "price": "4.94", "region": "I", "data": "9/26", "status": "GOLD" },
  { "name": "Agents of Mayhem - Total Mayhem Bundle", "price": "0.09", "region": "A", "data": "9/26", "status": "GOLD" },
  { "name": "Alchemy Garden", "price": "0.45", "region": "A", "data": "9/22", "status": "" },
  { "name": "Alone in the Dark", "price": "10.03", "region": "A", "data": "10/2", "status": "" },
  { "name": "Alone in the Dark - Digital Deluxe Edition", "price": "11.57", "region": "A", "data": "10/2", "status": "" },
  { "name": "Alphadia Neo", "price": "0.40", "region": "A", "data": "9/26", "status": "" },
  { "name": "Angels of Death", "price": "0.37", "region": "A", "data": "9/26", "status": "" },
  { "name": "Apocalipsis: The Tree of the Knowledge of Good and Evil", "price": "0.08", "region": "A", "data": "9/26", "status": "" },
  { "name": "Arcade Classics Anniversary Collection", "price": "0.90", "region": "T", "data": "9/26", "status": "" },
  { "name": "As Far As The Eye", "price": "0.62", "region": "A", "data": "9/26", "status": "" },
  { "name": "Asdivine Cross", "price": "0.31", "region": "A", "data": "9/26", "status": "" },
  { "name": "Asdivine Saga", "price": "0.37", "region": "A", "data": "9/26", "status": "" },
  { "name": "Assetto Corsa", "price": "0.21", "region": "A", "data": "9/26", "status": "" },
  { "name": "Assetto Corsa Competizione", "price": "2.57", "region": "A", "data": "9/26", "status": "" },
  { "name": "Assetto Corsa Competizione + 2023 GT World Challenge", "price": "11.90", "region": "A", "data": "9/29", "status": "" },
  { "name": "Attack on Titan", "price": "20.78", "region": "T", "data": "9/26", "status": "" },
  { "name": "Awarded Platformer Bundle", "price": "0.47", "region": "A", "data": "12/3", "status": "" },
  { "name": "Azure Striker GUNVOLT", "price": "0.31", "region": "A", "data": "9/26", "status": "" },
  { "name": "Azure Striker GUNVOLT 2", "price": "0.41", "region": "A", "data": "9/26", "status": "" },
  { "name": "Azure Striker GUNVOLT 3", "price": "0.92", "region": "A", "data": "9/26", "status": "" },
  { "name": "BALAN WONDERWORLD", "price": "2.10", "region": "T", "data": "9/26", "status": "" },
  { "name": "BIOHAZARD 7 resident evil Gold Edition グロテスクVer.", "price": "13.50", "region": "J", "data": "9/26", "status": "" },
  { "name": "BIOHAZARD 7 resident evil グロテスクVer.", "price": "5.38", "region": "J", "data": "9/26", "status": "" },
  { "name": "Batman™: Arkham Knight", "price": "0.63", "region": "A", "data": "9/26", "status": "" },
  { "name": "Ben 10: Power Trip", "price": "4.29", "region": "E", "data": "9/26", "status": "" },
  { "name": "Best Month Ever!", "price": "0.45", "region": "A", "data": "9/26", "status": "" },
  { "name": "Big Pharma", "price": "0.18", "region": "A", "data": "9/26", "status": "" },
  { "name": "BioShock: The Collection", "price": "1.76", "region": "T", "data": "9/26", "status": "" },
  { "name": "Bit Orchard: Animal Valley Deluxe Edition", "price": "0.12", "region": "A", "data": "9/26", "status": "" },
  { "name": "Bite the Bullet", "price": "0.12", "region": "A", "data": "9/26", "status": "" },
  { "name": "Black The Fall", "price": "0.24", "region": "A", "data": "9/26", "status": "" },
  { "name": "Blacksmith of the Sand Kingdom", "price": "0.41", "region": "A", "data": "9/26", "status": "" },
  { "name": "Bloodstained: Ritual of the Night", "price": "1.97", "region": "A", "data": "9/26", "status": "" },
  { "name": "Book of Demons", "price": "0.84", "region": "T", "data": "9/26", "status": "" },
  { "name": "Borderlands 3", "price": "1.18", "region": "A", "data": "9/26", "status": "" },
  { "name": "Borderlands 3: Super Deluxe Edition", "price": "2.50", "region": "A", "data": "9/26", "status": "" },
  { "name": "Borderlands Legendary Collection", "price": "3.86", "region": "A", "data": "9/26", "status": "" },
  { "name": "Borderlands: Game of the Year Edition", "price": "1.34", "region": "A", "data": "9/26", "status": "" },
  { "name": "Bright Memory", "price": "0.23", "region": "A", "data": "9/26", "status": "" },
  { "name": "Bright Memory: Infinite Platinum Edition", "price": "0.65", "region": "A", "data": "9/26", "status": "" },
  { "name": "Bright Side: Riddles and Puzzles", "price": "0.26", "region": "A", "data": "9/30", "status": "" },
  { "name": "Brothers: a Tale of Two Sons", "price": "0.20", "region": "A", "data": "9/26", "status": "" },
  { "name": "CATAN® - Console Edition", "price": "0.51", "region": "A", "data": "9/26", "status": "" },
  { "name": "CHRONO CROSS: THE RADICAL DREAMERS EDITION", "price": "2.94", "region": "A", "data": "9/26", "status": "" },
  { "name": "CONTRA: ROGUE CORPS", "price": "0.77", "region": "A", "data": "9/26", "status": "" },
  { "name": "CRISIS CORE –FINAL FANTASY VII– REUNION", "price": "10.08", "region": "E", "data": "9/26", "status": "" },
  { "name": "CRISIS CORE –FINAL FANTASY VII– REUNION DIGITAL DELUXE ED...", "price": "14.05", "region": "E", "data": "9/26", "status": "" },
  { "name": "Call of Duty: Ghosts Digital Hardened Edition", "price": "1.09", "region": "A", "data": "9/28", "status": "" },
  { "name": "Call of Duty®: Advanced Warfare Digital Pro Edition", "price": "1.09", "region": "A", "data": "9/28", "status": "" },
  { "name": "Call of Duty®: Advanced Warfare Gold Edition", "price": "0.52", "region": "A", "data": "9/28", "status": "" },
  { "name": "Call of Duty®: Black Ops 4", "price": "4.20", "region": "A", "data": "9/28", "status": "" },
  { "name": "Call of Duty®: Black Ops 4 - Digital Deluxe", "price": "9.58", "region": "A", "data": "9/28", "status": "" },
  { "name": "Call of Duty®: Black Ops Cold War", "price": "4.20", "region": "A", "data": "9/28", "status": "" },
  { "name": "Call of Duty®: Black Ops Cold War - Cross-Gen Bundle", "price": "7.31", "region": "A", "data": "9/28", "status": "" },
  { "name": "Call of Duty®: Black Ops III - Zombies Chronicles Edition", "price": "1.70", "region": "A", "data": "9/28", "status": "" },
  { "name": "Call of Duty®: Black Ops III - Zombies Deluxe", "price": "6.96", "region": "T", "data": "9/28", "status": "" },
  { "name": "Call of Duty®: Ghosts", "price": "0.52", "region": "A", "data": "9/28", "status": "" },
  { "name": "Call of Duty®: Infinite Warfare - Digital Deluxe Edition", "price": "5.77", "region": "T", "data": "9/28", "status": "" },
  { "name": "Call of Duty®: Infinite Warfare - Digital Legacy Edition", "price": "2.57", "region": "A", "data": "9/28", "status": "" },
  { "name": "Call of Duty®: Infinite Warfare - Launch Edition", "price": "1.70", "region": "A", "data": "9/28", "status": "" },
  { "name": "Call of Duty®: Modern Warfare® - Digital Standard Edition", "price": "4.20", "region": "A", "data": "9/28", "status": "" },
  { "name": "Call of Duty®: Modern Warfare® II - Cross-Gen Bundle", "price": "28.57", "region": "A", "data": "9/28", "status": "" },
  { "name": "Call of Duty®: Modern Warfare® II - Vault Edition", "price": "47.36", "region": "C", "data": "9/28", "status": "" },
  { "name": "Call of Duty®: Modern Warfare® Remastered", "price": "1.71", "region": "A", "data": "9/28", "status": "" },
  { "name": "Call of Duty®: Vanguard - Cross-Gen Bundle", "price": "9.00", "region": "A", "data": "9/28", "status": "" },
  { "name": "Call of Duty®: Vanguard - Standard Edition", "price": "7.71", "region": "A", "data": "9/28", "status": "" },
  { "name": "Call of Duty®: WWII - Digital Deluxe", "price": "6.96", "region": "T", "data": "9/28", "status": "" },
  { "name": "Call of Duty®: WWII - Gold Edition", "price": "1.70", "region": "A", "data": "9/28", "status": "" },
  { "name": "Carnival Games®", "price": "0.85", "region": "A", "data": "9/26", "status": "" },
  { "name": "Castle on the Coast", "price": "0.34", "region": "A", "data": "9/26", "status": "" },
  { "name": "Castlevania Advance Collection", "price": "2.84", "region": "A", "data": "9/26", "status": "" },
  { "name": "Castlevania Anniversary Collection", "price": "0.90", "region": "T", "data": "9/26", "status": "" },
  { "name": "Circa Infinity", "price": "0.11", "region": "A", "data": "9/26", "status": "GOLD" },
  { "name": "Cleopatra Fortune™ S-Tribute", "price": "5.26", "region": "A", "data": "9/26", "status": "" },
  { "name": "Clumsy Rush", "price": "0.11", "region": "A", "data": "9/26", "status": "" },
  { "name": "Conan Exiles", "price": "15.83", "region": "J", "data": "9/26", "status": "GOLD" },
  { "name": "Conan Exiles", "price": "0.79", "region": "A", "data": "9/26", "status": "GOLD" },
  { "name": "Conan Exiles – Year 1 DLC Bundle", "price": "1.28", "region": "A", "data": "9/26", "status": "GOLD" },
  { "name": "Contra Anniversary Collection", "price": "0.51", "region": "A", "data": "9/26", "status": "" },
  { "name": "Control", "price": "1.57", "region": "T", "data": "9/26", "status": "" },
  { "name": "Corpse Party", "price": "0.49", "region": "A", "data": "9/26", "status": "" },
  { "name": "Crime Boss: Rockay City", "price": "5.41", "region": "T", "data": "9/26", "status": "" },
  { "name": "Crossroads Inn", "price": "0.43", "region": "A", "data": "9/26", "status": "" },
  { "name": "Cyberpunk 2077", "price": "17.14", "region": "A", "data": "9/26", "status": "" },
  { "name": "Cyberpunk 2077 & Phantom Liberty Bundle", "price": "30.51", "region": "A", "data": "9/26", "status": "" },
  { "name": "DARK SOULS™ II: Scholar of the First Sin", "price": "8.14", "region": "A", "data": "9/26", "status": "" },
  { "name": "DARK SOULS™ III", "price": "12.29", "region": "A", "data": "9/26", "status": "" },
  { "name": "DARK SOULS™ III - Deluxe Edition", "price": "17.43", "region": "A", "data": "9/26", "status": "" },
  { "name": "DARK SOULS™: REMASTERED", "price": "8.14", "region": "A", "data": "9/26", "status": "" },
  { "name": "DARKLAND 3", "price": "0.04", "region": "A", "data": "9/28", "status": "" },
  { "name": "DC League of Super-Pets: The Adventures of Krypto and Ace", "price": "3.40", "region": "A", "data": "9/26", "status": "" },
  { "name": "DC's Justice League: Cosmic Chaos", "price": "6.43", "region": "A", "data": "9/26", "status": "" },
  { "name": "DEAD OR ALIVE 5 Last Round (Full Game)", "price": "0.57", "region": "A", "data": "9/26", "status": "" },
  { "name": "DEAD OR ALIVE 6 Digital Deluxe Edition", "price": "10.37", "region": "I", "data": "9/26", "status": "" },
  { "name": "DEADCRAFT", "price": "0.41", "region": "A", "data": "9/26", "status": "" },
  { "name": "DEADCRAFT Deluxe Edition", "price": "0.66", "region": "A", "data": "9/26", "status": "" },
  { "name": "DEEEER Simulator: Your Average Everyday Deer Game", "price": "0.49", "region": "A", "data": "9/26", "status": "" },
  { "name": "DMC4SE Demon Hunter Bundle", "price": "4.99", "region": "H", "data": "9/26", "status": "" },
  { "name": "DRAGON BALL THE BREAKERS", "price": "3.00", "region": "A", "data": "9/26", "status": "" },
  { "name": "DRAGON QUEST BUILDERS 2", "price": "7.71", "region": "A", "data": "9/26", "status": "" },
  { "name": "DRAGON QUEST® XI S: Echoes of an Elusive Age™ - Definitiv...", "price": "3.58", "region": "A", "data": "9/26", "status": "" },
  { "name": "DREDGE", "price": "2.74", "region": "A", "data": "9/26", "status": "" },
  { "name": "DRIFTCE", "price": "3.43", "region": "A", "data": "9/26", "status": "" },
  { "name": "DYNASTY WARRIORS 9 Complete Edition", "price": "30.79", "region": "A", "data": "9/26", "status": "" },
  { "name": "Deathsmiles I・II", "price": "9.14", "region": "A", "data": "9/26", "status": "" },
  { "name": "Defend the Rook", "price": "2.10", "region": "A", "data": "9/26", "status": "" },
  { "name": "Defend the Rook - Supporter Edition", "price": "2.80", "region": "A", "data": "9/26", "status": "" },
  { "name": "Defense Grid 2", "price": "0.11", "region": "A", "data": "9/26", "status": "" },
  { "name": "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles", "price": "4.28", "region": "A", "data": "9/26", "status": "" },
  { "name": "Devil May Cry 5 + Vergil", "price": "6.67", "region": "J", "data": "9/26", "status": "" },
  { "name": "Devil May Cry 5 Deluxe + Vergil", "price": "11.84", "region": "T", "data": "9/26", "status": "" },
  { "name": "Devil May Cry 5 Special Edition", "price": "11.84", "region": "T", "data": "9/26", "status": "" },
  { "name": "Devil May Cry HD Collection", "price": "7.20", "region": "S", "data": "9/26", "status": "" },
  { "name": "Devil May Cry HD Collection & 4SE Bundle", "price": "10.99", "region": "T", "data": "9/26", "status": "" },
  { "name": "Disney Dreamlight Valley", "price": "6.00", "region": "E", "data": "9/27", "status": "" },
  { "name": "Disney Dreamlight Valley — Ultimate Edition", "price": "13.04", "region": "E", "data": "9/27", "status": "" },
  { "name": "DmC Devil May Cry: Definitive Edition", "price": "5.52", "region": "I", "data": "9/26", "status": "" },
  { "name": "Dobo's Heroes", "price": "0.04", "region": "A", "data": "9/26", "status": "" },
  { "name": "Dou", "price": "0.04", "region": "A", "data": "9/23", "status": "" },
  { "name": "Dragon Age™: Inquisition - Game of the Year Edition", "price": "1.41", "region": "T", "data": "9/26", "status": "" },
  { "name": "Dragon Blaze", "price": "2.79", "region": "A", "data": "9/26", "status": "" },
  { "name": "Dragon's Dogma: Dark Arisen", "price": "3.37", "region": "A", "data": "9/26", "status": "" },
  { "name": "Dream House Days DX", "price": "0.44", "region": "A", "data": "9/26", "status": "" },
  { "name": "DreamWorks Dragons: Legends of The Nine Realms", "price": "7.86", "region": "A", "data": "9/26", "status": "" },
  { "name": "Dungeon Village", "price": "0.44", "region": "A", "data": "9/26", "status": "" },
  { "name": "Dungeon and Gravestone", "price": "0.51", "region": "A", "data": "9/26", "status": "" },
  { "name": "EA SPORTS FC™ 24 Ultimate Edition Xbox One & Xbox Series X|S", "price": "45.26", "region": "A", "data": "9/22", "status": "" },
  { "name": "EA SPORTS™ FIFA 23 Standard Edition Xbox One", "price": "6.86", "region": "A", "data": "9/21", "status": "" },
  { "name": "EDENGATE: The Edge of Life", "price": "0.85", "region": "A", "data": "9/26", "status": "" },
  { "name": "Eastasiasoft Indie Shmup Bundle", "price": "0.12", "region": "A", "data": "9/26", "status": "GOLD" },
  { "name": "Effie", "price": "0.24", "region": "A", "data": "9/26", "status": "" },
  { "name": "Eiyuden Chronicle: Rising", "price": "1.80", "region": "A", "data": "9/26", "status": "" },
  { "name": "Elevator Action™ -Returns- S-Tribute", "price": "5.26", "region": "A", "data": "9/26", "status": "" },
  { "name": "Endling - Extinction is Forever", "price": "2.06", "region": "A", "data": "9/26", "status": "" },
  { "name": "Escape Dead Island", "price": "0.11", "region": "A", "data": "12/3", "status": "" },
  { "name": "Escape from Terror City", "price": "5.27", "region": "I", "data": "9/21", "status": "" },
  { "name": "F1® 23 Champions Edition", "price": "27.43", "region": "A", "data": "9/26", "status": "" },
  { "name": "FINAL FANTASY IX", "price": "1.37", "region": "A", "data": "9/26", "status": "" },
  { "name": "FINAL FANTASY TYPE-0 HD", "price": "0.48", "region": "A", "data": "9/26", "status": "" },
  { "name": "FINAL FANTASY TYPE-0 HD (Asian version)", "price": "8.14", "region": "H", "data": "9/26", "status": "" },
  { "name": "FINAL FANTASY TYPE-0™ HD", "price": "1.04", "region": "T", "data": "9/26", "status": "" },
  { "name": "FINAL FANTASY VII", "price": "1.06", "region": "A", "data": "9/26", "status": "" },
  { "name": "FINAL FANTASY VII WINDOWS EDITION", "price": "1.06", "region": "A", "data": "9/26", "status": "" },
  { "name": "FINAL FANTASY VIII Remastered", "price": "1.43", "region": "A", "data": "9/26", "status": "" },
  { "name": "FINAL FANTASY VIII Remastered WINDOWS EDITION", "price": "1.43", "region": "A", "data": "9/26", "status": "" },
  { "name": "FINAL FANTASY X/X-2 HD Remaster", "price": "3.21", "region": "A", "data": "9/26", "status": "" },
  { "name": "FINAL FANTASY XII THE ZODIAC AGE", "price": "3.21", "region": "A", "data": "9/26", "status": "" },
  { "name": "FINAL FANTASY XIII", "price": "0.27", "region": "A", "data": "9/26", "status": "" },
  { "name": "FINAL FANTASY XIII-2", "price": "0.32", "region": "A", "data": "9/26", "status": "" },
  { "name": "FINAL FANTASY XV MULTIPLAYER: COMRADES", "price": "0.50", "region": "A", "data": "9/26", "status": "" },
  { "name": "FINAL FANTASY XV POCKET EDITION HD", "price": "1.02", "region": "A", "data": "9/26", "status": "" },
  { "name": "FINAL FANTASY XV ROYAL EDITION", "price": "2.94", "region": "T", "data": "9/26", "status": "" },
  { "name": "Fantasy Dash", "price": "0.04", "region": "A", "data": "9/25", "status": "" },
  { "name": "Fast & Furious: Spy Racers Rise of SH1FT3R - Complete Edi...", "price": "6.29", "region": "A", "data": "9/26", "status": "" },
  { "name": "Football Manager 2024 Console", "price": "15.58", "region": "E", "data": "11/6", "status": "" },
  { "name": "Forspoken", "price": "10.00", "region": "A", "data": "9/26", "status": "" },
  { "name": "Forspoken Digital Deluxe Edition", "price": "14.29", "region": "A", "data": "9/26", "status": "" },
  { "name": "Full Void", "price": "0.49", "region": "A", "data": "9/27", "status": "" },
  { "name": "G.I. Joe: Operation Blackout", "price": "1.79", "region": "A", "data": "9/26", "status": "GOLD" },
  { "name": "G.I. Joe: Operation Blackout - Digital Deluxe", "price": "2.06", "region": "A", "data": "9/26", "status": "GOLD" },
  { "name": "GUNBARICH", "price": "2.79", "region": "A", "data": "9/26", "status": "GOLD" },
  { "name": "GUNBIRD", "price": "2.79", "region": "A", "data": "9/26", "status": "" },
  { "name": "GUNBIRD 2", "price": "2.79", "region": "A", "data": "9/26", "status": "" },
  { "name": "Game Dev Story", "price": "0.44", "region": "A", "data": "9/26", "status": "" },
  { "name": "Garfield Lasagna Party", "price": "0.66", "region": "A", "data": "9/26", "status": "GOLD" },
  { "name": "Generation Zero ® - Base Warfare Starter Bundle", "price": "1.57", "region": "A", "data": "9/26", "status": "" },
  { "name": "Generation Zero ® - Ultimate Bundle", "price": "4.78", "region": "A", "data": "9/26", "status": "" },
  { "name": "Generation Zero®", "price": "0.75", "region": "A", "data": "9/26", "status": "" },
  { "name": "Ghost Sync", "price": "0.37", "region": "A", "data": "9/26", "status": "" },
  { "name": "Ghostrunner", "price": "1.28", "region": "A", "data": "9/26", "status": "" },
  { "name": "Ghostrunner: Complete Edition", "price": "4.64", "region": "T", "data": "9/26", "status": "" },
  { "name": "Gigantosaurus: Dino Kart", "price": "4.86", "region": "A", "data": "9/26", "status": "" },
  { "name": "Giraffe and Annika（ジラフとアンニカ）", "price": "0.49", "region": "A", "data": "9/26", "status": "" },
  { "name": "Golazo!", "price": "0.09", "region": "A", "data": "9/26", "status": "" },
  { "name": "Grand Theft Auto Online", "price": "2.86", "region": "A", "data": "9/26", "status": "" },
  { "name": "Grand Theft Auto V (Xbox One & Xbox Series X|S)", "price": "6.60", "region": "A", "data": "9/26", "status": "" },
  { "name": "Grand Theft Auto V: Premium Edition & Great White Shark C...", "price": "2.96", "region": "A", "data": "9/26", "status": "" },
  { "name": "Grand Theft Auto V: Premium Edition & Megalodon Shark Car...", "price": "5.14", "region": "A", "data": "9/26", "status": "" },
  { "name": "Grand Theft Auto V: Premium Edition & Whale Shark Card Bu...", "price": "3.43", "region": "A", "data": "9/26", "status": "" },
  { "name": "Gravity Oddity", "price": "2.74", "region": "A", "data": "9/21", "status": "" },
  { "name": "Grim Guardians: Demon Purge", "price": "0.82", "region": "A", "data": "9/26", "status": "" },
  { "name": "Grow: Song of the Evertree", "price": "1.69", "region": "T", "data": "9/26", "status": "" },
  { "name": "Gunborg: Dark Matters", "price": "0.15", "region": "A", "data": "9/26", "status": "GOLD" },
  { "name": "Gunfire Reborn", "price": "2.14", "region": "A", "data": "9/26", "status": "" },
  { "name": "Gunvolt Chronicles: Luminous Avenger iX", "price": "0.31", "region": "A", "data": "9/26", "status": "" },
  { "name": "Gunvolt Chronicles: Luminous Avenger iX 2", "price": "1.58", "region": "T", "data": "9/26", "status": "" },
  { "name": "Heliborne", "price": "0.55", "region": "A", "data": "9/26", "status": "" },
  { "name": "Help Will Come Tomorrow", "price": "0.16", "region": "A", "data": "9/26", "status": "" },
  { "name": "Historical Trilogy", "price": "0.41", "region": "A", "data": "9/26", "status": "" },
  { "name": "Horace", "price": "1.20", "region": "A", "data": "9/26", "status": "" },
  { "name": "Hot Springs Story", "price": "0.44", "region": "A", "data": "9/26", "status": "" },
  { "name": "How To Survive 2", "price": "0.09", "region": "A", "data": "9/26", "status": "" },
  { "name": "How to Survive: Storm Warning Edition", "price": "0.14", "region": "A", "data": "9/26", "status": "" },
  { "name": "Hunt Ducks 4", "price": "0.04", "region": "A", "data": "9/24", "status": "" },
  { "name": "Indivisible", "price": "0.99", "region": "T", "data": "9/26", "status": "" },
  { "name": "Infinite Links", "price": "0.40", "region": "A", "data": "9/26", "status": "" },
  { "name": "Injustice™ 2", "price": "0.43", "region": "A", "data": "9/26", "status": "" },
  { "name": "Iris and the Giant", "price": "1.95", "region": "A", "data": "9/26", "status": "" },
  { "name": "Iris and the Giant Deluxe Soundtrack Edition", "price": "2.23", "region": "A", "data": "9/26", "status": "" },
  { "name": "It Takes Two - Digital Version", "price": "4.20", "region": "A", "data": "9/26", "status": "" },
  { "name": "Jagged Alliance 3", "price": "17.76", "region": "T", "data": "11/1", "status": "" },
  { "name": "JoJo Siwa: Worldwide Party", "price": "3.88", "region": "A", "data": "9/26", "status": "" },
  { "name": "Joe Dever’s Lone Wolf Console Edition", "price": "0.04", "region": "A", "data": "9/26", "status": "" },
  { "name": "Journey to the Savage Planet", "price": "1.71", "region": "A", "data": "9/26", "status": "" },
  { "name": "Joy Ball Adventure", "price": "0.04", "region": "A", "data": "9/22", "status": "" },
  { "name": "Jumanji: The Video Game", "price": "5.00", "region": "A", "data": "9/26", "status": "" },
  { "name": "Jurassic World Evolution: Dinosaur Collection", "price": "0.20", "region": "A", "data": "9/26", "status": "GOLD" },
  { "name": "Jurassic World Evolution: Expansion Collection", "price": "0.66", "region": "A", "data": "9/26", "status": "GOLD" },
  { "name": "Just Cause 3", "price": "0.40", "region": "A", "data": "9/26", "status": "" },
  { "name": "Just Cause 3: XXL Edition", "price": "0.54", "region": "A", "data": "9/26", "status": "" },
  { "name": "Just Cause 4 - Complete Edition", "price": "2.22", "region": "T", "data": "9/26", "status": "" },
  { "name": "Just Cause 4 - Gold Edition", "price": "2.29", "region": "A", "data": "9/26", "status": "" },
  { "name": "Just Cause 4: Reloaded", "price": "1.60", "region": "A", "data": "9/26", "status": "" },
  { "name": "KINGDOM HEARTS - HD 1.5+2.5 ReMIX -", "price": "4.05", "region": "T", "data": "9/26", "status": "" },
  { "name": "KINGDOM HEARTS - HD 1.5+2.5 ReMIX - (Japanese Ver.)", "price": "25.30", "region": "J", "data": "9/26", "status": "" },
  { "name": "KINGDOM HEARTS HD 2.8 Final Chapter Prologue", "price": "5.18", "region": "T", "data": "9/26", "status": "" },
  { "name": "KINGDOM HEARTS HD 2.8 Final Chapter Prologue (Japanese Ver.)", "price": "25.30", "region": "J", "data": "9/26", "status": "" },
  { "name": "KINGDOM HEARTS Melody of Memory (Asia)", "price": "24.43", "region": "S", "data": "9/26", "status": "" },
  { "name": "KINGDOM HEARTS Melody of Memory (International)", "price": "5.71", "region": "A", "data": "9/26", "status": "" },
  { "name": "KINGDOM HEARTS Ⅲ", "price": "24.24", "region": "S", "data": "9/26", "status": "" },
  { "name": "KINGDOM HEARTS Ⅲ", "price": "32.23", "region": "T", "data": "9/26", "status": "" },
  { "name": "KINGDOM HEARTS Ⅲ", "price": "2.08", "region": "A", "data": "9/26", "status": "" },
  { "name": "Kaiju Wars", "price": "0.49", "region": "A", "data": "9/26", "status": "" },
  { "name": "Kao the Kangaroo", "price": "2.92", "region": "A", "data": "9/26", "status": "" },
  { "name": "Kerbal Space Program Enhanced Edition Complete", "price": "3.28", "region": "T", "data": "9/26", "status": "GOLD" },
  { "name": "King's Bounty II", "price": "1.66", "region": "T", "data": "9/26", "status": "GOLD" },
  { "name": "King's Bounty II - Lord's Edition", "price": "1.83", "region": "T", "data": "9/26", "status": "GOLD" },
  { "name": "Kung Fu Fighting", "price": "0.04", "region": "A", "data": "9/28", "status": "" },
  { "name": "L.O.L. Surprise! B.B.s BORN TO TRAVEL™", "price": "4.86", "region": "A", "data": "9/26", "status": "" },
  { "name": "LA-MULANA (ラ・ムラーナ)", "price": "2.00", "region": "J", "data": "9/26", "status": "" },
  { "name": "LEGO® 2K Drive Awesome Edition", "price": "36.18", "region": "A", "data": "9/26", "status": "" },
  { "name": "LEGO® Star Wars™: The Skywalker Saga", "price": "4.71", "region": "A", "data": "9/26", "status": "" },
  { "name": "LIGHTNING RETURNS: FINAL FANTASY XIII", "price": "0.32", "region": "A", "data": "9/26", "status": "" },
  { "name": "Layer Section™ & Galactic Attack™ S-Tribute", "price": "6.86", "region": "E", "data": "9/26", "status": "GOLD" },
  { "name": "League of Enthusiastic Losers + Cyber Protocol", "price": "0.15", "region": "A", "data": "9/26", "status": "GOLD" },
  { "name": "Legal Dungeon", "price": "0.26", "region": "A", "data": "9/26", "status": "" },
  { "name": "Legend of Keepers: Career of a Dungeon Manager", "price": "0.57", "region": "A", "data": "9/26", "status": "" },
  { "name": "Legend of Keepers: Complete Edition", "price": "1.00", "region": "A", "data": "9/26", "status": "" },
  { "name": "Legend of the Tetrarchs", "price": "0.31", "region": "A", "data": "9/26", "status": "" },
  { "name": "Life is Strange 2 - Complete Season", "price": "0.93", "region": "A", "data": "9/26", "status": "" },
  { "name": "Life is Strange Remastered Collection", "price": "5.14", "region": "A", "data": "9/26", "status": "" },
  { "name": "Life is Strange: True Colors", "price": "5.71", "region": "A", "data": "9/26", "status": "" },
  { "name": "Life is Strange: True Colors - Deluxe Edition", "price": "7.40", "region": "T", "data": "9/26", "status": "" },
  { "name": "Life is Strange: True Colors - Ultimate Edition", "price": "10.00", "region": "A", "data": "9/26", "status": "" },
  { "name": "Light & Dark Bundle", "price": "4.56", "region": "A", "data": "11/2", "status": "" },
  { "name": "Like a Dragon: Ishin!", "price": "15.33", "region": "A", "data": "9/26", "status": "" },
  { "name": "Little Mouse's Encyclopedia + Brawl Chess", "price": "0.09", "region": "A", "data": "9/26", "status": "" },
  { "name": "Loop8: Summer of Gods", "price": "14.43", "region": "T", "data": "9/26", "status": "" },
  { "name": "Loop8: Summer of Gods", "price": "11.66", "region": "A", "data": "9/26", "status": "" },
  { "name": "Lost Judgment Digital Deluxe Edition", "price": "3.09", "region": "A", "data": "9/26", "status": "" },
  { "name": "MY LITTLE PONY: A Maretime Bay Adventure", "price": "4.86", "region": "A", "data": "9/26", "status": "" },
  { "name": "Madden NFL 19", "price": "30.34", "region": "C", "data": "12/3", "status": "" },
  { "name": "Madden NFL 22 Xbox One", "price": "11.00", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 22 Xbox Series X|S", "price": "12.80", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 23 Xbox One", "price": "14.63", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 23 Xbox Series X|S", "price": "17.14", "region": "A", "data": "12/3", "status": "" },
  { "name": "Mafia: Definitive Edition", "price": "2.60", "region": "A", "data": "9/26", "status": "" },
  { "name": "Mafia: Trilogy", "price": "4.32", "region": "A", "data": "9/26", "status": "" },
  { "name": "Marvel's Avengers", "price": "1.03", "region": "A", "data": "9/26", "status": "" },
  { "name": "Marvel's Midnight Suns", "price": "8.00", "region": "A", "data": "9/26", "status": "" },
  { "name": "Marvel's Midnight Suns Enhanced Edition", "price": "9.14", "region": "A", "data": "9/26", "status": "" },
  { "name": "Marvel's Midnight Suns Legendary Edition for Xbox One", "price": "12.57", "region": "A", "data": "9/26", "status": "" },
  { "name": "Marvel's Midnight Suns Legendary Edition for Xbox Series X|S", "price": "12.57", "region": "A", "data": "9/26", "status": "" },
  { "name": "Mass Effect™: Andromeda – Deluxe Recruit Edition", "price": "0.79", "region": "A", "data": "9/26", "status": "" },
  { "name": "May’s Mysteries: The Secret of Dragonville", "price": "0.21", "region": "A", "data": "9/26", "status": "" },
  { "name": "Memories of Mars", "price": "0.20", "region": "A", "data": "9/26", "status": "" },
  { "name": "Metal Black™ S-Tribute", "price": "2.90", "region": "A", "data": "9/26", "status": "" },
  { "name": "Miasma Chronicles", "price": "6.86", "region": "A", "data": "9/26", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.00", "region": "U", "data": "12/1", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.00", "region": "U", "data": "12/1", "status": "" },
  { "name": "Middle-earth™: Shadow of War™", "price": "0.40", "region": "A", "data": "9/26", "status": "" },
  { "name": "Mighty Goose", "price": "0.41", "region": "A", "data": "9/26", "status": "" },
  { "name": "Mirror's Edge™ Catalyst", "price": "0.17", "region": "A", "data": "9/26", "status": "" },
  { "name": "Momodora: Reverie Under the Moonlight", "price": "0.06", "region": "A", "data": "9/26", "status": "" },
  { "name": "Monster Energy Supercross - Special Edition", "price": "0.86", "region": "A", "data": "9/26", "status": "" },
  { "name": "Monster Energy Supercross - The Official Videogame", "price": "0.57", "region": "A", "data": "9/26", "status": "" },
  { "name": "Monster Hunter Rise", "price": "13.50", "region": "J", "data": "9/26", "status": "" },
  { "name": "Monster Hunter Rise + Sunbreak", "price": "27.15", "region": "J", "data": "9/26", "status": "" },
  { "name": "Monster Hunter Rise + Sunbreak Deluxe", "price": "35.27", "region": "I", "data": "9/26", "status": "" },
  { "name": "Monster Hunter Rise Deluxe Edition", "price": "16.88", "region": "J", "data": "9/26", "status": "" },
  { "name": "Monster Hunter World: Iceborne Master Edition", "price": "22.20", "region": "T", "data": "9/26", "status": "" },
  { "name": "Monster Hunter World: Iceborne Master Edition Digital Deluxe", "price": "27.75", "region": "T", "data": "9/26", "status": "" },
  { "name": "Moonshine Inc.", "price": "3.00", "region": "A", "data": "9/26", "status": "" },
  { "name": "Moonshine Inc. : Supporter Edition", "price": "3.75", "region": "A", "data": "9/26", "status": "" },
  { "name": "Murdered: Soul Suspect", "price": "0.09", "region": "A", "data": "9/26", "status": "" },
  { "name": "My Friend Peppa Pig", "price": "4.86", "region": "A", "data": "9/26", "status": "" },
  { "name": "Mystic Gate", "price": "5.27", "region": "I", "data": "9/28", "status": "" },
  { "name": "NARUTO SHIPPUDEN™: Ultimate Ninja® STORM 3 Full Burst", "price": "0.36", "region": "A", "data": "9/26", "status": "" },
  { "name": "NARUTO SHIPPUDEN™: Ultimate Ninja® STORM 4 ROAD TO BORUTO", "price": "1.28", "region": "A", "data": "9/26", "status": "" },
  { "name": "NARUTO™: Ultimate Ninja® STORM", "price": "0.36", "region": "A", "data": "9/26", "status": "" },
  { "name": "NASCAR Arcade Rush", "price": "26.15", "region": "I", "data": "9/23", "status": "" },
  { "name": "NBA 2K Playgrounds 2", "price": "0.70", "region": "A", "data": "9/26", "status": "" },
  { "name": "NHL® 24 X-Factor Edition Xbox One & Xbox Series X|S + Limited Time Bonus", "price": "45.26", "region": "A", "data": "9/26", "status": "" },
  { "name": "NINJA GAIDEN: Master Collection", "price": "8.04", "region": "E", "data": "9/26", "status": "" },
  { "name": "NINJA GAIDEN: Master Collection Deluxe Edition", "price": "10.08", "region": "E", "data": "9/26", "status": "" },
  { "name": "Narita Boy", "price": "0.69", "region": "A", "data": "9/26", "status": "" },
  { "name": "Need for Speed Rivals", "price": "0.29", "region": "A", "data": "9/26", "status": "" },
  { "name": "Need for Speed™", "price": "0.36", "region": "A", "data": "9/26", "status": "" },
  { "name": "Need for Speed™ Heat", "price": "0.71", "region": "A", "data": "9/26", "status": "" },
  { "name": "Need for Speed™ Heat Deluxe Edition", "price": "0.86", "region": "A", "data": "9/26", "status": "" },
  { "name": "Need for Speed™ Hot Pursuit Remastered", "price": "0.71", "region": "A", "data": "9/26", "status": "" },
  { "name": "Need for Speed™ Payback - Deluxe Edition", "price": "0.31", "region": "A", "data": "9/26", "status": "" },
  { "name": "Need for Speed™ Unbound", "price": "7.71", "region": "A", "data": "9/26", "status": "" },
  { "name": "Need for Speed™ Unbound Palace Edition", "price": "9.00", "region": "A", "data": "9/26", "status": "" },
  { "name": "Neon Abyss", "price": "0.77", "region": "A", "data": "9/26", "status": "" },
  { "name": "New Tales from the Borderlands", "price": "8.00", "region": "A", "data": "9/26", "status": "" },
  { "name": "Nickelodeon Kart Racers 3: Slime Speedway", "price": "2.79", "region": "A", "data": "9/26", "status": "GOLD" },
  { "name": "Nickelodeon Kart Racers 3: Slime Speedway Turbo Edition", "price": "3.21", "region": "A", "data": "9/26", "status": "GOLD" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.10", "region": "A", "data": "5/31", "status": "" },
  { "name": "No More Heroes 3 Xbox", "price": "4.57", "region": "A", "data": "9/26", "status": "" },
  { "name": "No More Heroes 3 Xbox", "price": "2.09", "region": "T", "data": "9/26", "status": "" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "5.26", "region": "A", "data": "9/26", "status": "" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "2.52", "region": "T", "data": "9/26", "status": "" },
  { "name": "Noel the Mortal Fate", "price": "0.51", "region": "A", "data": "9/26", "status": "" },
  { "name": "OCTOPATH TRAVELER", "price": "5.71", "region": "A", "data": "9/26", "status": "" },
  { "name": "ONE PUNCH MAN: A HERO NOBODY KNOWS Deluxe Edition", "price": "2.01", "region": "A", "data": "9/26", "status": "" },
  { "name": "OUTRIDERS", "price": "5.03", "region": "A", "data": "9/26", "status": "" },
  { "name": "OUTRIDERS WORLDSLAYER", "price": "9.43", "region": "A", "data": "9/26", "status": "" },
  { "name": "Oaken", "price": "0.57", "region": "A", "data": "9/26", "status": "GOLD" },
  { "name": "Oh My Godheads", "price": "0.18", "region": "A", "data": "9/26", "status": "" },
  { "name": "One Hand Clapping", "price": "0.80", "region": "A", "data": "9/26", "status": "" },
  { "name": "Open Country", "price": "0.73", "region": "T", "data": "9/26", "status": "" },
  { "name": "Orangeblood (オレンジブラッド)", "price": "0.32", "region": "A", "data": "9/26", "status": "" },
  { "name": "Ori and the Blind Forest: Definitive Edition", "price": "2.54", "region": "A", "data": "9/28", "status": "" },
  { "name": "Ori and the Will of the Wisps", "price": "2.83", "region": "E", "data": "9/28", "status": "" },
  { "name": "Ori: The Collection", "price": "4.75", "region": "E", "data": "9/28", "status": "" },
  { "name": "Outbreak: Contagious Memories", "price": "0.31", "region": "A", "data": "9/26", "status": "GOLD" },
  { "name": "Overcooked: Gourmet Edition", "price": "0.17", "region": "A", "data": "9/26", "status": "" },
  { "name": "PAW Patrol Mighty Pups Save Adventure Bay", "price": "5.15", "region": "E", "data": "9/26", "status": "" },
  { "name": "PAW Patrol The Movie: Adventure City Calls", "price": "4.86", "region": "A", "data": "9/26", "status": "" },
  { "name": "PAW Patrol: Grand Prix", "price": "7.20", "region": "E", "data": "9/26", "status": "" },
  { "name": "PAYDAY 2: CRIMEWAVE EDITION", "price": "0.11", "region": "A", "data": "9/26", "status": "" },
  { "name": "PGA TOUR 2K23", "price": "6.60", "region": "A", "data": "9/26", "status": "" },
  { "name": "PGA TOUR 2K23 Cross-Gen Edition", "price": "8.00", "region": "A", "data": "9/26", "status": "" },
  { "name": "PGA TOUR 2K23 Tiger Woods Edition", "price": "17.14", "region": "A", "data": "9/26", "status": "" },
  { "name": "PJ Masks: Heroes of the Night", "price": "4.86", "region": "A", "data": "9/26", "status": "" },
  { "name": "Paleo Pines", "price": "12.56", "region": "I", "data": "9/25", "status": "" },
  { "name": "Paper Flight - Super Speed Dash", "price": "0.28", "region": "A", "data": "9/26", "status": "" },
  { "name": "Pathfinder: Kingmaker - Definitive Edition", "price": "1.02", "region": "A", "data": "9/26", "status": "GOLD" },
  { "name": "Peppa Pig: World Adventures", "price": "5.83", "region": "A", "data": "9/26", "status": "" },
  { "name": "Persona 3 Portable & Persona 4 Golden Bundle", "price": "12.44", "region": "A", "data": "9/26", "status": "" },
  { "name": "Persona 5 Royal", "price": "6.68", "region": "A", "data": "9/26", "status": "" },
  { "name": "Phantom Breaker: Omnia", "price": "0.41", "region": "A", "data": "9/26", "status": "GOLD" },
  { "name": "Phoenix Wright: Ace Attorney Trilogy", "price": "6.67", "region": "J", "data": "9/26", "status": "" },
  { "name": "Pipe Dream Xbox Edition", "price": "0.16", "region": "A", "data": "9/20", "status": "" },
  { "name": "Portal Knights", "price": "0.20", "region": "A", "data": "9/26", "status": "" },
  { "name": "PowerWash Simulator", "price": "6.63", "region": "A", "data": "9/26", "status": "" },
  { "name": "Prizma Puzzle Prime", "price": "0.16", "region": "A", "data": "9/26", "status": "" },
  { "name": "Pro Gymnast Simulator + Clumsy Rush", "price": "0.21", "region": "A", "data": "9/26", "status": "GOLD" },
  { "name": "Project Starship X", "price": "0.12", "region": "A", "data": "9/26", "status": "" },
  { "name": "Puzzle Bobble™2X/BUST-A-MOVE™2 Arcade Edition & Puzzle Bobble™3/BUST-A-MOVE™3 S-Tribute", "price": "5.26", "region": "A", "data": "9/26", "status": "" },
  { "name": "Quantum Replica", "price": "0.14", "region": "A", "data": "9/26", "status": "" },
  { "name": "REPLICA（レプリカ）", "price": "0.16", "region": "A", "data": "9/26", "status": "" },
  { "name": "RESIDENT EVIL 2", "price": "6.74", "region": "J", "data": "9/26", "status": "" },
  { "name": "RESIDENT EVIL 2 Deluxe Edition", "price": "8.44", "region": "J", "data": "9/26", "status": "" },
  { "name": "RESIDENT EVIL 3", "price": "6.74", "region": "J", "data": "9/26", "status": "" },
  { "name": "RESIDENT EVIL 7 biohazard", "price": "5.38", "region": "J", "data": "9/26", "status": "" },
  { "name": "ROMANCE OF THE THREE KINGDOMS XIII: Fame and Strategy Expansion Pack Bundle", "price": "2.28", "region": "A", "data": "9/26", "status": "" },
  { "name": "Race With Ryan Road Trip Deluxe Edition", "price": "3.43", "region": "E", "data": "9/26", "status": "" },
  { "name": "Railway Empire", "price": "0.41", "region": "A", "data": "9/26", "status": "" },
  { "name": "Raji: An Ancient Epiс", "price": "1.77", "region": "A", "data": "9/26", "status": "" },
  { "name": "Rally Rock 'N Racing", "price": "0.24", "region": "A", "data": "9/26", "status": "GOLD" },
  { "name": "Record of Lodoss War-Deedlit in Wonder Labyrinth-", "price": "0.72", "region": "A", "data": "9/26", "status": "" },
  { "name": "Red Dead Online", "price": "2.00", "region": "A", "data": "9/26", "status": "" },
  { "name": "Red Dead Redemption 2", "price": "4.34", "region": "A", "data": "9/26", "status": "" },
  { "name": "Resident Evil", "price": "3.19", "region": "B", "data": "9/26", "status": "" },
  { "name": "Resident Evil 0", "price": "3.19", "region": "B", "data": "9/26", "status": "" },
  { "name": "Resident Evil 4", "price": "15.95", "region": "A", "data": "9/26", "status": "" },
  { "name": "Resident Evil 5", "price": "5.72", "region": "S", "data": "9/26", "status": "" },
  { "name": "Resident Evil 6", "price": "5.72", "region": "S", "data": "9/26", "status": "" },
  { "name": "Resident Evil Triple Pack", "price": "13.35", "region": "A", "data": "9/26", "status": "" },
  { "name": "Resident Evil Village", "price": "13.50", "region": "J", "data": "9/26", "status": "" },
  { "name": "Resident Evil Village Gold Edition", "price": "20.26", "region": "J", "data": "9/26", "status": "" },
  { "name": "Resident Evil: Deluxe Origins Bundle", "price": "6.66", "region": "B", "data": "9/26", "status": "" },
  { "name": "Retro Tank Arcade", "price": "0.04", "region": "A", "data": "9/28", "status": "" },
  { "name": "Roarr! Jurassic Edition", "price": "0.08", "region": "A", "data": "9/26", "status": "" },
  { "name": "Rogue Spirit", "price": "3.43", "region": "A", "data": "9/26", "status": "" },
  { "name": "Romancing SaGa 2", "price": "0.31", "region": "A", "data": "9/26", "status": "" },
  { "name": "Romancing SaGa 3", "price": "0.25", "region": "A", "data": "9/26", "status": "" },
  { "name": "Ruinverse", "price": "0.31", "region": "A", "data": "9/26", "status": "" },
  { "name": "Rune Factory 4 Special", "price": "1.57", "region": "T", "data": "9/26", "status": "" },
  { "name": "SAMURAI WARRIORS 5", "price": "21.73", "region": "A", "data": "9/26", "status": "" },
  { "name": "SAMURAI WARRIORS 5 Digital Deluxe Edition", "price": "32.59", "region": "A", "data": "9/26", "status": "" },
  { "name": "SCARLET NEXUS Deluxe Edition", "price": "2.29", "region": "A", "data": "9/26", "status": "" },
  { "name": "SD GUNDAM BATTLE ALLIANCE Deluxe Edition", "price": "11.00", "region": "E", "data": "9/26", "status": "" },
  { "name": "SOL DIVIDE -SWORD OF DARKNESS-", "price": "2.79", "region": "A", "data": "9/26", "status": "" },
  { "name": "STAR OCEAN THE DIVINE FORCE", "price": "10.00", "region": "A", "data": "9/26", "status": "" },
  { "name": "STAR OCEAN THE DIVINE FORCE DIGITAL DELUXE EDITION", "price": "12.43", "region": "A", "data": "9/26", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "3.66", "region": "A", "data": "12/3", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "4.88", "region": "A", "data": "1/1/", "status": "" },
  { "name": "STAR WARS™: Squadrons", "price": "1.07", "region": "A", "data": "9/26", "status": "" },
  { "name": "STORY OF SEASONS: A Wonderful Life", "price": "17.76", "region": "T", "data": "9/26", "status": "" },
  { "name": "STORY OF SEASONS: A Wonderful Life", "price": "15.54", "region": "A", "data": "9/26", "status": "" },
  { "name": "STORY OF SEASONS: Friends of Mineral Town - Digital Edition", "price": "0.66", "region": "A", "data": "9/26", "status": "" },
  { "name": "STRANGER OF PARADISE FINAL FANTASY ORIGIN", "price": "11.00", "region": "A", "data": "9/26", "status": "" },
  { "name": "STRANGER OF PARADISE FINAL FANTASY ORIGIN Digital Deluxe ...", "price": "18.00", "region": "A", "data": "9/26", "status": "" },
  { "name": "STRIKERS 1945", "price": "2.79", "region": "A", "data": "9/26", "status": "GOLD" },
  { "name": "STRIKERS 1945 II", "price": "2.79", "region": "A", "data": "9/26", "status": "GOLD" },
  { "name": "STRIKERS 1945 III", "price": "2.79", "region": "A", "data": "9/26", "status": "GOLD" },
  { "name": "Samurai Aces", "price": "2.79", "region": "A", "data": "9/26", "status": "" },
  { "name": "Samurai Aces III: Sengoku Cannon", "price": "2.79", "region": "A", "data": "9/26", "status": "" },
  { "name": "Seduce Me - The Complete Story", "price": "0.32", "region": "A", "data": "9/23", "status": "" },
  { "name": "Sekiro™: Shadows Die Twice - GOTY Edition", "price": "2.57", "region": "A", "data": "9/26", "status": "" },
  { "name": "Serial Cleaners", "price": "2.39", "region": "T", "data": "9/26", "status": "" },
  { "name": "Shadowblade Odyssey", "price": "0.04", "region": "A", "data": "9/22", "status": "" },
  { "name": "Shining Resonance Refrain", "price": "0.47", "region": "A", "data": "9/26", "status": "" },
  { "name": "SiNKR", "price": "0.10", "region": "A", "data": "9/26", "status": "" },
  { "name": "SiNKR 2", "price": "0.10", "region": "A", "data": "9/26", "status": "" },
  { "name": "Sid Meier's Civilization VI", "price": "1.71", "region": "A", "data": "9/26", "status": "" },
  { "name": "Silver Nornir", "price": "0.40", "region": "A", "data": "9/26", "status": "" },
  { "name": "Simulator Pack: Gas Station Simulator and Barn Finders", "price": "0.98", "region": "A", "data": "9/23", "status": "" },
  { "name": "Skelattack", "price": "0.55", "region": "A", "data": "9/26", "status": "" },
  { "name": "Sleeping Dogs™ Definitive Edition", "price": "0.42", "region": "T", "data": "9/26", "status": "" },
  { "name": "SnowRunner - 3-Year Anniversary Edition", "price": "22.20", "region": "T", "data": "9/26", "status": "GOLD" },
  { "name": "Solar Ash", "price": "9.19", "region": "E", "data": "9/29", "status": "" },
  { "name": "Sophstar", "price": "0.27", "region": "A", "data": "9/26", "status": "GOLD" },
  { "name": "Soul Hackers 2", "price": "4.46", "region": "A", "data": "9/26", "status": "" },
  { "name": "Soul Hackers 2 - Digital Premium Edition", "price": "6.29", "region": "A", "data": "9/26", "status": "" },
  { "name": "Sparkle Bundle", "price": "0.36", "region": "A", "data": "12/3", "status": "" },
  { "name": "Star Trek Prodigy: Supernova", "price": "6.29", "region": "A", "data": "9/26", "status": "" },
  { "name": "Station Manager", "price": "0.44", "region": "A", "data": "9/26", "status": "" },
  { "name": "Strategic Mind: Fight for Dominance", "price": "7.07", "region": "A", "data": "9/26", "status": "" },
  { "name": "Strategic Mind: Fight for Freedom", "price": "0.80", "region": "A", "data": "9/26", "status": "" },
  { "name": "Strategic Mind: Spectre of Communism", "price": "3.90", "region": "A", "data": "9/26", "status": "" },
  { "name": "Strategic Mind: The Pacific", "price": "0.61", "region": "A", "data": "9/26", "status": "" },
  { "name": "Stray Blade", "price": "4.97", "region": "A", "data": "9/26", "status": "" },
  { "name": "Street Outlaws 2: Winner Takes All", "price": "1.05", "region": "T", "data": "9/26", "status": "GOLD" },
  { "name": "Street Outlaws 2: Winner Takes All – Digital Deluxe", "price": "1.26", "region": "T", "data": "9/26", "status": "GOLD" },
  { "name": "Super Brawl Rush", "price": "0.16", "region": "A", "data": "9/30", "status": "" },
  { "name": "Super Cyborg", "price": "0.13", "region": "A", "data": "9/26", "status": "" },
  { "name": "Super Pixel Kid", "price": "0.04", "region": "A", "data": "10/1", "status": "" },
  { "name": "Super Sami Roll", "price": "0.31", "region": "A", "data": "9/26", "status": "" },
  { "name": "Super Snake Block DX", "price": "0.41", "region": "T", "data": "9/22", "status": "" },
  { "name": "Syberia - The World Before", "price": "1.22", "region": "A", "data": "9/26", "status": "" },
  { "name": "TEKKEN 7", "price": "1.43", "region": "A", "data": "9/26", "status": "" },
  { "name": "TEKKEN 7 - Definitive Edition", "price": "2.31", "region": "A", "data": "9/26", "status": "" },
  { "name": "TENGAI", "price": "2.79", "region": "A", "data": "9/26", "status": "" },
  { "name": "TRANSFORMERS: BATTLEGROUNDS - Complete Edition", "price": "3.00", "region": "A", "data": "9/26", "status": "" },
  { "name": "Tales from the Borderlands", "price": "3.49", "region": "A", "data": "9/26", "status": "GOLD" },
  { "name": "Teenage Mutant Ninja Turtles: The Cowabunga Collection", "price": "8.36", "region": "T", "data": "9/26", "status": "" },
  { "name": "Terraria", "price": "0.28", "region": "A", "data": "9/26", "status": "" },
  { "name": "The Amazing American Circus", "price": "0.20", "region": "A", "data": "9/26", "status": "" },
  { "name": "The DioField Chronicle", "price": "9.79", "region": "T", "data": "9/26", "status": "" },
  { "name": "The DioField Chronicle Digitale Deluxe Edition", "price": "12.00", "region": "T", "data": "9/26", "status": "" },
  { "name": "The Escapists: Supermax Edition", "price": "0.72", "region": "A", "data": "4/30", "status": "" },
  { "name": "The Expanse: A Telltale Series", "price": "0.98", "region": "A", "data": "9/26", "status": "GOLD" },
  { "name": "The Expanse: A Telltale Series - Deluxe Edition", "price": "1.20", "region": "A", "data": "9/26", "status": "GOLD" },
  { "name": "The Isle Tide Hotel", "price": "0.73", "region": "A", "data": "9/20", "status": "" },
  { "name": "The Jackbox Party Quadpack", "price": "1.61", "region": "A", "data": "12/3", "status": "" },
  { "name": "The Quarry for Xbox One", "price": "5.66", "region": "A", "data": "9/26", "status": "" },
  { "name": "The Quarry for Xbox Series X|S", "price": "6.60", "region": "A", "data": "9/26", "status": "" },
  { "name": "The Rumble Fish 2", "price": "0.80", "region": "A", "data": "9/26", "status": "" },
  { "name": "The Sealed Ampoule", "price": "0.57", "region": "A", "data": "9/26", "status": "" },
  { "name": "The Smile Alchemist", "price": "0.53", "region": "A", "data": "9/26", "status": "" },
  { "name": "The Witcher 3: Wild Hunt", "price": "2.28", "region": "A", "data": "9/26", "status": "" },
  { "name": "The Witcher 3: Wild Hunt – Complete Edition", "price": "3.77", "region": "A", "data": "9/26", "status": "" },
  { "name": "The Yakuza Remastered Collection", "price": "1.25", "region": "A", "data": "9/26", "status": "" },
  { "name": "This is the Zodiac Speaking", "price": "0.13", "region": "A", "data": "9/26", "status": "" },
  { "name": "Through the Darkest of Times", "price": "0.20", "region": "A", "data": "9/26", "status": "" },
  { "name": "Tin Can", "price": "3.00", "region": "A", "data": "9/26", "status": "" },
  { "name": "Tin Can: Supporter Edition", "price": "3.75", "region": "A", "data": "9/26", "status": "" },
  { "name": "Tiny Tina's Assault on Dragon Keep: A Wonderlands One-sho...", "price": "1.25", "region": "A", "data": "9/26", "status": "" },
  { "name": "Tiny Tina's Wonderlands", "price": "5.65", "region": "A", "data": "9/26", "status": "" },
  { "name": "Tiny Tina's Wonderlands: Chaotic Great Edition", "price": "7.80", "region": "T", "data": "9/26", "status": "" },
  { "name": "Tiny Tina's Wonderlands: Next-Level Edition", "price": "6.95", "region": "A", "data": "9/26", "status": "" },
  { "name": "Train Sim World® 4: Deluxe Edition", "price": "14.89", "region": "E", "data": "9/21", "status": "" },
  { "name": "Train Sim World® 4: Special Edition", "price": "24.08", "region": "E", "data": "9/21", "status": "" },
  { "name": "Train Sim World® 4: Standard Edition", "price": "6.22", "region": "T", "data": "9/26", "status": "" },
  { "name": "Trash Quest", "price": "0.07", "region": "A", "data": "9/26", "status": "" },
  { "name": "Tycoon Bundle", "price": "0.45", "region": "A", "data": "9/26", "status": "" },
  { "name": "UFC 5 Deluxe Edition", "price": "45.26", "region": "A", "data": "10/2", "status": "" },
  { "name": "Underworld Ascendant", "price": "0.31", "region": "A", "data": "9/26", "status": "" },
  { "name": "Unheard - Voices of Crime Edition", "price": "0.77", "region": "T", "data": "9/26", "status": "" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "0.39", "region": "A", "data": "12/3", "status": "" },
  { "name": "Unturned", "price": "1.27", "region": "T", "data": "9/26", "status": "" },
  { "name": "Valentino Rossi The Game", "price": "0.43", "region": "A", "data": "9/26", "status": "" },
  { "name": "Valkyria Chronicles 4", "price": "0.88", "region": "T", "data": "9/26", "status": "" },
  { "name": "Vermintide - Digital Value Pack", "price": "1.14", "region": "A", "data": "3/7/", "status": "" },
  { "name": "Virginia", "price": "0.10", "region": "A", "data": "9/26", "status": "" },
  { "name": "WARRIORS OROCHI 3 Ultimate", "price": "0.78", "region": "A", "data": "9/26", "status": "" },
  { "name": "WARRIORS OROCHI 4 Ultimate", "price": "26.07", "region": "A", "data": "9/26", "status": "" },
  { "name": "WARRIORS OROCHI 4 Ultimate Deluxe Edition", "price": "30.41", "region": "A", "data": "9/26", "status": "" },
  { "name": "WORLD OF FINAL FANTASY MAXIMA", "price": "1.86", "region": "A", "data": "9/26", "status": "" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "1.82", "region": "A", "data": "8/31", "status": "" },
  { "name": "WWE 2K Battlegrounds", "price": "1.57", "region": "A", "data": "9/26", "status": "" },
  { "name": "WWE 2K Battlegrounds Digital Deluxe Edition", "price": "2.17", "region": "A", "data": "9/26", "status": "" },
  { "name": "WWE 2K23 Cross-Gen Digital Edition", "price": "12.86", "region": "A", "data": "9/26", "status": "" },
  { "name": "WWE 2K23 Icon Edition", "price": "18.57", "region": "A", "data": "9/26", "status": "" },
  { "name": "WWE 2K23 for Xbox One", "price": "11.43", "region": "A", "data": "9/26", "status": "" },
  { "name": "We. The Revolution", "price": "0.20", "region": "A", "data": "9/26", "status": "" },
  { "name": "WeakWood Throne", "price": "0.06", "region": "A", "data": "9/26", "status": "" },
  { "name": "Weedcraft Inc", "price": "0.72", "region": "A", "data": "9/26", "status": "" },
  { "name": "Weedcraft Inc & Moonshine Inc - Risky Business Bundle", "price": "5.20", "region": "A", "data": "9/26", "status": "" },
  { "name": "Werewolf Pinball", "price": "0.10", "region": "A", "data": "9/30", "status": "" },
  { "name": "Wo Long: Fallen Dynasty", "price": "12.12", "region": "E", "data": "9/26", "status": "" },
  { "name": "Wo Long: Fallen Dynasty Digital Deluxe Edition", "price": "17.10", "region": "E", "data": "9/26", "status": "" },
  { "name": "XCOM® 2 Collection", "price": "1.17", "region": "T", "data": "9/26", "status": "" },
  { "name": "XCOM®: Enemy Within", "price": "0.23", "region": "A", "data": "9/26", "status": "" },
  { "name": "Yakuza: Like a Dragon Hero Edition", "price": "1.49", "region": "A", "data": "9/26", "status": "" },
  { "name": "Yu-Gi-Oh! Legacy of the Duelist", "price": "0.14", "region": "A", "data": "9/26", "status": "" },
  { "name": "Yu-Gi-Oh! Legacy of the Duelist : Link Evolution", "price": "1.66", "region": "T", "data": "9/26", "status": "" },
  { "name": "ZERO GUNNER 2-", "price": "2.79", "region": "A", "data": "9/26", "status": "" },
  { "name": "orbit.industries", "price": "0.49", "region": "A", "data": "9/26", "status": "" },
  { "name": "resident evil 4", "price": "5.72", "region": "S", "data": "9/26", "status": "" },
  { "name": "theHunter: Call of the Wild", "price": "0.26", "region": "A", "data": "9/26", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Greenhorn Bundle", "price": "0.90", "region": "A", "data": "9/26", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Master Hunter Bundle", "price": "1.60", "region": "A", "data": "9/26", "status": "" }
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
