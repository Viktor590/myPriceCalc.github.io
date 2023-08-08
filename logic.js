const input = document.querySelector('.input');
const output = document.querySelector('.output-res');
const list = document.querySelector('.list')
const showBtn = document.querySelector('.show')


showBtn.addEventListener('click', () => {
  showBtn.classList.contains('active') ?
    hiddenMenu() : showMenu()
})

let usd = 105;

const arr = [
  { "name": "A Plague Tale Bundle", "price": "19.98", "region": "T", "data": "8/15", "status": "GOLD" },
  { "name": "AEW: Fight Forever Elite Edition", "price": "26.65", "region": "T", "data": "8/22", "status": "" },
  { "name": "Ad Infinitum", "price": "15.57", "region": "A", "data": "9/14", "status": "" },
  { "name": "Ad Infinitum - Nightmare Edition Pre-order", "price": "18.75", "region": "A", "data": "9/12", "status": "" },
  { "name": "Agatha Christie - Hercule Poirot: The London Case", "price": "9.99", "region": "T", "data": "8/28", "status": "" },
  { "name": "All-Star Fruit Racing", "price": "0.14", "region": "A", "data": "8/15", "status": "" },
  { "name": "Almost My Floor", "price": "0.20", "region": "A", "data": "8/15", "status": "GOLD" },
  { "name": "Almost My Floor (Xbox Series X|S)", "price": "0.20", "region": "A", "data": "8/15", "status": "GOLD" },
  { "name": "Alone in the Dark", "price": "12.39", "region": "A", "data": "10/2", "status": "" },
  { "name": "Alone in the Dark - Digital Deluxe Edition", "price": "14.30", "region": "A", "data": "10/2", "status": "" },
  { "name": "Arsonist Heaven", "price": "0.15", "region": "A", "data": "8/15", "status": "" },
  { "name": "Assetto Corsa", "price": "0.37", "region": "A", "data": "8/15", "status": "" },
  { "name": "Astro Flame Starfighter", "price": "0.40", "region": "A", "data": "8/15", "status": "" },
  { "name": "Astro Flame Starfighter (Xbox Series X|S)", "price": "0.40", "region": "A", "data": "8/15", "status": "" },
  { "name": "Awarded Platformer Bundle", "price": "0.58", "region": "A", "data": "12/3", "status": "" },
  { "name": "Baja: Edge of Control HD", "price": "0.26", "region": "A", "data": "8/22", "status": "" },
  { "name": "Battle Chasers: Nightwar", "price": "0.26", "region": "A", "data": "8/22", "status": "" },
  { "name": "Battle Worlds: Kronos", "price": "0.18", "region": "A", "data": "8/22", "status": "" },
  { "name": "BioShock 2 Remastered", "price": "1.05", "region": "T", "data": "8/15", "status": "GOLD" },
  { "name": "BioShock Infinite: The Complete Edition", "price": "1.69", "region": "T", "data": "8/15", "status": "GOLD" },
  { "name": "BioShock Remastered", "price": "1.69", "region": "T", "data": "8/15", "status": "GOLD" },
  { "name": "Biomutant", "price": "2.08", "region": "A", "data": "8/22", "status": "" },
  { "name": "Black Mirror", "price": "0.35", "region": "A", "data": "8/22", "status": "" },
  { "name": "Blasphemous 2", "price": "11.62", "region": "T", "data": "8/23", "status": "" },
  { "name": "Boss Rush: Mythology", "price": "0.35", "region": "A", "data": "8/15", "status": "GOLD" },
  { "name": "Boss Rush: Mythology (Xbox Series X|S)", "price": "0.35", "region": "A", "data": "8/15", "status": "GOLD" },
  { "name": "Bright Lights of Svetlov", "price": "0.40", "region": "A", "data": "8/11", "status": "" },
  { "name": "Bright Lights of Svetlov (Xbox Series X|S)", "price": "0.40", "region": "A", "data": "8/11", "status": "" },
  { "name": "Broforce", "price": "0.60", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Carmageddon: Max Damage", "price": "0.18", "region": "A", "data": "8/22", "status": "" },
  { "name": "Castle Invasion: Throne Out", "price": "0.09", "region": "A", "data": "8/15", "status": "" },
  { "name": "Cel Damage HD", "price": "0.08", "region": "A", "data": "8/15", "status": "" },
  { "name": "Chants of Sennaar", "price": "15.31", "region": "S", "data": "9/5/", "status": "" },
  { "name": "Colossal Cave", "price": "1.01", "region": "A", "data": "8/15", "status": "" },
  { "name": "Control", "price": "1.89", "region": "T", "data": "8/15", "status": "" },
  { "name": "Creepy Tale: Ingrid Penance", "price": "0.40", "region": "A", "data": "8/16", "status": "" },
  { "name": "Creepy Tale: Ingrid Penance (Xbox Series X|S)", "price": "0.40", "region": "A", "data": "8/16", "status": "" },
  { "name": "Curious Cases", "price": "0.17", "region": "A", "data": "8/15", "status": "" },
  { "name": "Cyber Pool", "price": "0.06", "region": "A", "data": "8/15", "status": "" },
  { "name": "DCL-The Game", "price": "0.55", "region": "A", "data": "8/22", "status": "" },
  { "name": "DE-EXIT - Eternal Matters", "price": "2.47", "region": "A", "data": "8/22", "status": "" },
  { "name": "DEATHLOOP Deluxe Edition", "price": "4.85", "region": "A", "data": "8/17", "status": "" },
  { "name": "DOOM", "price": "0.32", "region": "A", "data": "8/17", "status": "" },
  { "name": "DOOM (1993)", "price": "0.07", "region": "A", "data": "8/17", "status": "" },
  { "name": "DOOM 3", "price": "0.21", "region": "A", "data": "8/17", "status": "" },
  { "name": "DOOM 64", "price": "0.06", "region": "A", "data": "8/17", "status": "" },
  { "name": "DOOM Eternal Deluxe Edition", "price": "3.00", "region": "A", "data": "8/17", "status": "" },
  { "name": "DOOM Eternal Standard Edition", "price": "1.76", "region": "A", "data": "8/17", "status": "" },
  { "name": "DOOM Eternal: Year One Pass", "price": "1.75", "region": "A", "data": "8/17", "status": "" },
  { "name": "DOOM Eternal: Year One Pass (PC)", "price": "1.75", "region": "A", "data": "8/17", "status": "" },
  { "name": "DOOM II (Classic)", "price": "0.07", "region": "A", "data": "8/17", "status": "" },
  { "name": "DOOM Slayers Collection", "price": "1.61", "region": "A", "data": "8/17", "status": "" },
  { "name": "DREAMERS", "price": "11.63", "region": "E", "data": "9/1/", "status": "" },
  { "name": "DRIFTCE", "price": "4.23", "region": "A", "data": "8/15", "status": "" },
  { "name": "Darksiders Fury's Collection - War and Death", "price": "0.35", "region": "A", "data": "8/22", "status": "" },
  { "name": "Darksiders Genesis", "price": "0.66", "region": "A", "data": "8/22", "status": "" },
  { "name": "Darksiders III", "price": "1.56", "region": "A", "data": "8/22", "status": "" },
  { "name": "Darksiders III - Blades & Whip Edition", "price": "2.05", "region": "A", "data": "8/22", "status": "" },
  { "name": "DayD: Through Time", "price": "0.18", "region": "A", "data": "8/15", "status": "" },
  { "name": "Death Becomes You", "price": "0.37", "region": "A", "data": "8/19", "status": "" },
  { "name": "Debtor: Enhanced Edition", "price": "0.17", "region": "A", "data": "8/15", "status": "" },
  { "name": "Descenders", "price": "0.26", "region": "A", "data": "8/15", "status": "GOLD" },
  { "name": "Desperados III Deluxe Edition", "price": "2.61", "region": "A", "data": "8/22", "status": "" },
  { "name": "Destroy All Humans!", "price": "0.88", "region": "A", "data": "8/22", "status": "" },
  { "name": "Destroy All Humans! - Jumbo Pack", "price": "3.71", "region": "A", "data": "8/22", "status": "" },
  { "name": "Destroy All Humans! 2 - Reprobed", "price": "3.11", "region": "A", "data": "8/22", "status": "" },
  { "name": "Destroy All Humans! 2 - Reprobed: Dressed to Skill Edition", "price": "4.66", "region": "A", "data": "8/22", "status": "" },
  { "name": "Destroy All Humans! 2 - Reprobed: Single Player (X1)", "price": "9.99", "region": "T", "data": "8/22", "status": "" },
  { "name": "Dishonored 2", "price": "0.99", "region": "A", "data": "8/17", "status": "" },
  { "name": "Dishonored®: Death of the Outsider™ Deluxe Bundle", "price": "1.91", "region": "A", "data": "8/17", "status": "" },
  { "name": "Dou", "price": "0.05", "region": "A", "data": "8/12", "status": "" },
  { "name": "Drone Gladiator (for Windows 10)", "price": "0.11", "region": "A", "data": "8/15", "status": "" },
  { "name": "EA SPORTS FC™ 24 Ultimate Edition Xbox One & Xbox Series X|S", "price": "55.93", "region": "A", "data": "8/23", "status": "" },
  { "name": "EA SPORTS™ FIFA 23 Standard Edition Xbox One", "price": "6.48", "region": "T", "data": "8/22", "status": "" },
  { "name": "EA SPORTS™ FIFA 23 Standard Edition Xbox One", "price": "7.77", "region": "T", "data": "9/21", "status": "" },
  { "name": "EA SPORTS™ FIFA 23 Standard Edition Xbox Series X|S", "price": "7.40", "region": "T", "data": "8/22", "status": "" },
  { "name": "EA SPORTS™ PGA TOUR™", "price": "15.89", "region": "A", "data": "8/15", "status": "" },
  { "name": "EA SPORTS™ PGA TOUR™ Deluxe Edition", "price": "19.77", "region": "A", "data": "8/15", "status": "" },
  { "name": "ELEX II", "price": "3.88", "region": "A", "data": "8/22", "status": "" },
  { "name": "Escape 2088", "price": "0.11", "region": "A", "data": "8/15", "status": "" },
  { "name": "Escape Dead Island", "price": "0.14", "region": "A", "data": "12/3", "status": "" },
  { "name": "Escape First", "price": "0.17", "region": "A", "data": "8/15", "status": "" },
  { "name": "Escape First 2", "price": "0.17", "region": "A", "data": "8/15", "status": "" },
  { "name": "Escape First 3 Multiplayer", "price": "0.21", "region": "A", "data": "8/15", "status": "" },
  { "name": "Escape from Life Inc", "price": "0.20", "region": "A", "data": "8/15", "status": "GOLD" },
  { "name": "Fade to Silence", "price": "0.52", "region": "A", "data": "8/22", "status": "" },
  { "name": "Fairy Elements", "price": "0.49", "region": "A", "data": "8/15", "status": "GOLD" },
  { "name": "Fallout 4", "price": "1.05", "region": "A", "data": "8/17", "status": "" },
  { "name": "Fallout 4 (PC)", "price": "0.93", "region": "A", "data": "8/17", "status": "" },
  { "name": "Fallout 76", "price": "2.47", "region": "A", "data": "8/17", "status": "" },
  { "name": "Fantasy Dash", "price": "0.05", "region": "A", "data": "8/20", "status": "" },
  { "name": "Far Cry Primal", "price": "1.24", "region": "A", "data": "8/15", "status": "GOLD" },
  { "name": "Far Cry® 4", "price": "0.48", "region": "A", "data": "8/15", "status": "GOLD" },
  { "name": "Far Cry® New Dawn", "price": "1.06", "region": "A", "data": "8/15", "status": "GOLD" },
  { "name": "Forza Horizon 5 + 4 Premium Upgrade Bundle", "price": "10.07", "region": "E", "data": "8/15", "status": "" },
  { "name": "Forza Horizon 5 Premium Add-Ons Bundle", "price": "7.19", "region": "E", "data": "8/15", "status": "" },
  { "name": "Frane: Dragons' Odyssey", "price": "0.38", "region": "A", "data": "8/15", "status": "" },
  { "name": "Full Spectrum Warrior", "price": "0.18", "region": "A", "data": "8/22", "status": "" },
  { "name": "Generation Zero ® - Essential DLC Bundle", "price": "0.57", "region": "A", "data": "8/15", "status": "" },
  { "name": "Generation Zero ® - Exterminator DLC Bundle", "price": "0.89", "region": "A", "data": "8/15", "status": "" },
  { "name": "Ghostrunner", "price": "2.12", "region": "A", "data": "8/15", "status": "" },
  { "name": "Ghostwire: Tokyo Deluxe Edition", "price": "6.41", "region": "A", "data": "8/17", "status": "" },
  { "name": "Giana Sisters: Twisted Dreams - Director's Cut", "price": "0.05", "region": "A", "data": "8/22", "status": "" },
  { "name": "Gloomhaven Gold Edition", "price": "12.94", "region": "E", "data": "9/18", "status": "" },
  { "name": "Gloomhaven Mercenaries Edition", "price": "10.32", "region": "E", "data": "9/18", "status": "" },
  { "name": "Gnomes Garden 2", "price": "0.09", "region": "A", "data": "8/15", "status": "" },
  { "name": "Gnomes Garden: New Home", "price": "0.07", "region": "A", "data": "8/15", "status": "" },
  { "name": "Gravel", "price": "0.71", "region": "A", "data": "8/15", "status": "" },
  { "name": "Gravel Special Edition", "price": "1.06", "region": "A", "data": "8/15", "status": "" },
  { "name": "Grizzland", "price": "0.07", "region": "A", "data": "8/15", "status": "" },
  { "name": "Hi-Fi RUSH", "price": "10.33", "region": "A", "data": "8/17", "status": "" },
  { "name": "JUJU", "price": "0.13", "region": "A", "data": "8/22", "status": "" },
  { "name": "Jagged Alliance: Rage!", "price": "0.11", "region": "A", "data": "8/22", "status": "" },
  { "name": "Joy Ball Adventure", "price": "0.05", "region": "A", "data": "8/15", "status": "" },
  { "name": "Jurassic World Evolution: Dinosaur Collection", "price": "0.25", "region": "A", "data": "8/15", "status": "" },
  { "name": "Jurassic World Evolution: Expansion Collection", "price": "0.81", "region": "A", "data": "8/15", "status": "" },
  { "name": "Justice Chronicles", "price": "0.45", "region": "A", "data": "8/15", "status": "GOLD" },
  { "name": "Kao the Kangaroo: Anniversary Edition", "price": "6.65", "region": "A", "data": "8/15", "status": "" },
  { "name": "Kingdoms of Amalur: Re-Reckoning FATE Edition", "price": "3.36", "region": "A", "data": "8/22", "status": "" },
  { "name": "Kona", "price": "0.11", "region": "A", "data": "8/15", "status": "GOLD" },
  { "name": "Kung Fu Fighting", "price": "0.05", "region": "A", "data": "8/15", "status": "" },
  { "name": "Lanternium", "price": "0.31", "region": "T", "data": "8/15", "status": "" },
  { "name": "Legend of Ixtona", "price": "0.49", "region": "A", "data": "8/15", "status": "GOLD" },
  { "name": "Light & Dark Bundle", "price": "0.79", "region": "A", "data": "11/2", "status": "" },
  { "name": "Lila's Tale and the Hidden Forest", "price": "0.12", "region": "A", "data": "8/15", "status": "" },
  { "name": "Lord of the Сlick", "price": "0.31", "region": "T", "data": "8/15", "status": "" },
  { "name": "MX Unleashed", "price": "0.18", "region": "A", "data": "8/22", "status": "" },
  { "name": "MX vs ATV Legends Leader Pack", "price": "4.66", "region": "A", "data": "8/22", "status": "" },
  { "name": "MXGP PRO", "price": "0.44", "region": "A", "data": "8/15", "status": "" },
  { "name": "Madden NFL 19", "price": "29.35", "region": "C", "data": "12/3", "status": "" },
  { "name": "Madden NFL 22 Xbox One", "price": "13.59", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 22 Xbox Series X|S", "price": "15.82", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 23 Xbox One", "price": "18.08", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 23 Xbox Series X|S", "price": "21.19", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 24 Deluxe Edition Xbox Series X|S & Xbox One", "price": "55.93", "region": "A", "data": "8/15", "status": "" },
  { "name": "Mafia II: Definitive Edition", "price": "2.20", "region": "A", "data": "8/15", "status": "GOLD" },
  { "name": "Mafia III: Definitive Edition", "price": "2.20", "region": "A", "data": "8/15", "status": "GOLD" },
  { "name": "Marenian Tavern Story: Patty and the Hungry God", "price": "0.50", "region": "A", "data": "8/15", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.00", "region": "U", "data": "12/1", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.00", "region": "U", "data": "12/1", "status": "" },
  { "name": "Mighty No. 9", "price": "0.18", "region": "A", "data": "8/15", "status": "GOLD" },
  { "name": "Monster Energy Supercross - The Official Videogame 3", "price": "1.32", "region": "A", "data": "8/15", "status": "" },
  { "name": "Monster Energy Supercross 3 - Special Edition", "price": "2.38", "region": "A", "data": "8/15", "status": "" },
  { "name": "Monster Jam Steel Titans", "price": "0.28", "region": "A", "data": "8/22", "status": "" },
  { "name": "Monster Jam Steel Titans 2", "price": "1.03", "region": "A", "data": "8/22", "status": "" },
  { "name": "Monster Jam Steel Titans Power Out Bundle", "price": "1.55", "region": "A", "data": "8/22", "status": "" },
  { "name": "MotoGP™17", "price": "0.53", "region": "A", "data": "8/15", "status": "" },
  { "name": "Mushroom Quest", "price": "0.05", "region": "A", "data": "8/15", "status": "" },
  { "name": "My Aunt is a Witch", "price": "0.20", "region": "A", "data": "8/15", "status": "GOLD" },
  { "name": "Need for Speed Rivals", "price": "0.85", "region": "A", "data": "8/15", "status": "" },
  { "name": "Need for Speed™", "price": "1.06", "region": "A", "data": "8/15", "status": "" },
  { "name": "Need for Speed™ Heat", "price": "2.65", "region": "A", "data": "8/15", "status": "" },
  { "name": "Need for Speed™ Heat Deluxe Edition", "price": "3.18", "region": "A", "data": "8/15", "status": "" },
  { "name": "Need for Speed™ Hot Pursuit Remastered", "price": "2.65", "region": "A", "data": "8/15", "status": "" },
  { "name": "Need for Speed™ Unbound", "price": "9.53", "region": "A", "data": "8/15", "status": "" },
  { "name": "Need for Speed™ Unbound Palace Edition", "price": "11.12", "region": "A", "data": "8/15", "status": "" },
  { "name": "Neighbours back From Hell", "price": "0.63", "region": "A", "data": "8/22", "status": "" },
  { "name": "New Super Lucky's Tale", "price": "0.50", "region": "A", "data": "8/15", "status": "GOLD" },
  { "name": "New Tales from the Borderlands: Deluxe Edition", "price": "11.08", "region": "T", "data": "8/15", "status": "GOLD" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.12", "region": "A", "data": "5/31", "status": "" },
  { "name": "Of Tanks and Demons III", "price": "0.31", "region": "T", "data": "8/15", "status": "" },
  { "name": "One Button Games 5-in-1", "price": "0.22", "region": "A", "data": "8/10", "status": "" },
  { "name": "One Hand Clapping", "price": "0.99", "region": "A", "data": "8/22", "status": "" },
  { "name": "Paleo Pines", "price": "12.64", "region": "I", "data": "9/25", "status": "" },
  { "name": "Panzer Elite Action: Fields of Glory", "price": "0.27", "region": "T", "data": "8/22", "status": "" },
  { "name": "Portal Knights", "price": "0.25", "region": "A", "data": "8/15", "status": "" },
  { "name": "Prey", "price": "1.24", "region": "A", "data": "8/17", "status": "" },
  { "name": "Project Starship X", "price": "0.15", "region": "A", "data": "8/15", "status": "GOLD" },
  { "name": "Quake", "price": "0.58", "region": "A", "data": "8/17", "status": "" },
  { "name": "Quintus and the Absent Truth", "price": "0.25", "region": "A", "data": "8/15", "status": "GOLD" },
  { "name": "RAGE 2: Deluxe Edition", "price": "2.38", "region": "A", "data": "8/17", "status": "" },
  { "name": "Ravva and the Cyclops Curse", "price": "0.10", "region": "A", "data": "8/15", "status": "" },
  { "name": "Rebel Cops", "price": "0.10", "region": "A", "data": "8/22", "status": "" },
  { "name": "Retro Tank Arcade", "price": "0.05", "region": "A", "data": "8/11", "status": "" },
  { "name": "Retro Tanks", "price": "0.18", "region": "A", "data": "8/15", "status": "" },
  { "name": "Revenant Saga", "price": "0.38", "region": "A", "data": "8/15", "status": "" },
  { "name": "Robozarro", "price": "0.09", "region": "A", "data": "8/15", "status": "" },
  { "name": "Running On Magic", "price": "0.60", "region": "T", "data": "8/15", "status": "" },
  { "name": "Rusty Gun", "price": "0.31", "region": "T", "data": "8/15", "status": "" },
  { "name": "SCARLET NEXUS Brain Punk Bundle", "price": "1.77", "region": "A", "data": "8/15", "status": "" },
  { "name": "SCARLET NEXUS Ultimate Upgrade Pack", "price": "2.47", "region": "A", "data": "8/15", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "4.52", "region": "A", "data": "12/3", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "6.04", "region": "A", "data": "1/1/", "status": "" },
  { "name": "Serial Cleaner", "price": "0.05", "region": "A", "data": "8/15", "status": "" },
  { "name": "Shadowblade Odyssey", "price": "0.10", "region": "A", "data": "8/9/", "status": "" },
  { "name": "Sid Meier’s Civilization® VI Anthology", "price": "8.41", "region": "T", "data": "8/15", "status": "GOLD" },
  { "name": "Sid Meier’s Civilization® VI Platinum Edition", "price": "4.87", "region": "T", "data": "8/15", "status": "GOLD" },
  { "name": "Simulator Pack: Treasure Hunter Simulator and Gold Rush: The Game (DOUBLE BUNDLE)", "price": "8.01", "region": "E", "data": "8/15", "status": "GOLD" },
  { "name": "Skydrift Infinity", "price": "0.38", "region": "A", "data": "8/22", "status": "" },
  { "name": "Skyrim Anniversary Edition + Fallout 4 G.O.T.Y Bundle", "price": "4.66", "region": "A", "data": "8/17", "status": "" },
  { "name": "Skyrim Anniversary Edition + Fallout 4 G.O.T.Y Bundle", "price": "4.66", "region": "A", "data": "8/17", "status": "" },
  { "name": "Smurfs Kart", "price": "7.71", "region": "E", "data": "8/21", "status": "" },
  { "name": "SnowRunner - 3-Year Anniversary Edition", "price": "22.20", "region": "T", "data": "8/15", "status": "GOLD" },
  { "name": "South Park™: The Fractured but Whole™ - Gold Edition", "price": "2.61", "region": "T", "data": "8/15", "status": "GOLD" },
  { "name": "Sparkle Bundle", "price": "0.45", "region": "A", "data": "12/3", "status": "" },
  { "name": "Spectrolite - Speed Life", "price": "0.56", "region": "A", "data": "8/12", "status": "" },
  { "name": "SpellForce III Reforced", "price": "3.11", "region": "A", "data": "8/22", "status": "" },
  { "name": "SpongeBob SquarePants: Battle for Bikini Bottom - Rehydrated", "price": "0.84", "region": "A", "data": "8/22", "status": "" },
  { "name": "SpongeBob SquarePants: The Cosmic Shake", "price": "7.34", "region": "A", "data": "8/22", "status": "" },
  { "name": "Steam Tactics", "price": "0.25", "region": "A", "data": "8/15", "status": "GOLD" },
  { "name": "Steampunk Tower 2", "price": "0.15", "region": "A", "data": "8/15", "status": "" },
  { "name": "Strange Horticulture", "price": "0.60", "region": "A", "data": "8/13", "status": "" },
  { "name": "Stray", "price": "6.85", "region": "E", "data": "8/10", "status": "" },
  { "name": "Sugar Tanks", "price": "0.40", "region": "A", "data": "8/15", "status": "GOLD" },
  { "name": "Super Pixel Kid", "price": "0.05", "region": "A", "data": "8/16", "status": "" },
  { "name": "Swordbreaker: Origins", "price": "0.35", "region": "A", "data": "8/15", "status": "GOLD" },
  { "name": "Swordbreaker: Origins (Xbox Series X|S)", "price": "0.35", "region": "A", "data": "8/15", "status": "GOLD" },
  { "name": "The Book of Unwritten Tales 2", "price": "0.36", "region": "A", "data": "8/22", "status": "" },
  { "name": "The Dragoness: Command of the Flame", "price": "0.90", "region": "A", "data": "8/10", "status": "" },
  { "name": "The Dwarves", "price": "0.35", "region": "A", "data": "8/22", "status": "" },
  { "name": "The Elder Scrolls Online Deluxe Collection: Necrom", "price": "14.92", "region": "A", "data": "8/17", "status": "" },
  { "name": "The Elder Scrolls V: Skyrim Special Edition", "price": "1.76", "region": "A", "data": "8/17", "status": "" },
  { "name": "The Elder Scrolls® Online", "price": "0.39", "region": "A", "data": "8/17", "status": "" },
  { "name": "The Escapists: Supermax Edition", "price": "0.89", "region": "A", "data": "4/30", "status": "" },
  { "name": "The Evil Within Digital Bundle", "price": "0.48", "region": "A", "data": "8/17", "status": "" },
  { "name": "The Experiment: Escape Room", "price": "0.14", "region": "A", "data": "8/15", "status": "" },
  { "name": "The Jackbox Party Quadpack", "price": "1.98", "region": "A", "data": "12/3", "status": "" },
  { "name": "The Outer Worlds: Board-Approved Bundle", "price": "15.96", "region": "T", "data": "8/15", "status": "GOLD" },
  { "name": "The Raven Remastered", "price": "0.26", "region": "A", "data": "8/22", "status": "" },
  { "name": "The Red Exile - Survival Horror", "price": "2.60", "region": "I", "data": "8/17", "status": "" },
  { "name": "The Redress of Mira", "price": "3.71", "region": "A", "data": "8/15", "status": "GOLD" },
  { "name": "There Is No Light", "price": "4.77", "region": "T", "data": "8/16", "status": "" },
  { "name": "This Is the Police", "price": "0.18", "region": "A", "data": "8/22", "status": "" },
  { "name": "This is the Police 2", "price": "0.26", "region": "A", "data": "8/22", "status": "" },
  { "name": "Titan Quest", "price": "0.26", "region": "A", "data": "8/22", "status": "" },
  { "name": "Toby: The Secret Mine", "price": "0.07", "region": "A", "data": "8/15", "status": "" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Gold Edition", "price": "3.53", "region": "A", "data": "8/15", "status": "GOLD" },
  { "name": "Twice Reborn: A Vampire Visual Novel", "price": "5.97", "region": "A", "data": "8/15", "status": "GOLD" },
  { "name": "Ubisoft+", "price": "0.50", "region": "C", "data": "8/9/", "status": "" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "0.48", "region": "A", "data": "12/3", "status": "" },
  { "name": "Valkyria Chronicles 4 DLC Bundle", "price": "0.53", "region": "A", "data": "8/15", "status": "" },
  { "name": "Venba", "price": "0.64", "region": "A", "data": "8/15", "status": "" },
  { "name": "Vermintide - Digital Value Pack", "price": "1.41", "region": "A", "data": "3/7/", "status": "" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "2.25", "region": "A", "data": "8/31", "status": "" },
  { "name": "Way of the Hunter", "price": "3.37", "region": "A", "data": "8/22", "status": "" },
  { "name": "Way of the Hunter: Elite Edition", "price": "4.66", "region": "A", "data": "8/22", "status": "" },
  { "name": "Whispike Survivors", "price": "0.14", "region": "A", "data": "8/18", "status": "" },
  { "name": "WildTrax Racing", "price": "0.32", "region": "A", "data": "8/19", "status": "" },
  { "name": "Wings of Bluestar", "price": "5.31", "region": "A", "data": "8/15", "status": "GOLD" },
  { "name": "Wolfenstein II: Standard Edition", "price": "0.74", "region": "T", "data": "8/17", "status": "" },
  { "name": "Wolfenstein: Alt History Collection", "price": "1.91", "region": "A", "data": "8/17", "status": "" },
  { "name": "Wolfenstein: Youngblood Deluxe Edition", "price": "1.24", "region": "A", "data": "8/17", "status": "" },
  { "name": "Wolfenstein® II: The New Colossus™", "price": "0.80", "region": "A", "data": "8/17", "status": "" },
  { "name": "Wolfenstein®: The Two-Pack", "price": "0.42", "region": "A", "data": "8/17", "status": "" },
  { "name": "Working Hard Collection", "price": "0.20", "region": "A", "data": "8/12", "status": "" },
  { "name": "World Soccer Strikers '91", "price": "0.10", "region": "A", "data": "8/15", "status": "" },
  { "name": "Wreckfest", "price": "1.01", "region": "A", "data": "8/22", "status": "" },
  { "name": "Wreckfest Complete Edition", "price": "1.69", "region": "A", "data": "8/22", "status": "" },
  { "name": "Xenon Racer", "price": "0.15", "region": "A", "data": "8/15", "status": "" },
  { "name": "de Blob", "price": "0.18", "region": "A", "data": "8/22", "status": "" },
  { "name": "de Blob 2", "price": "0.26", "region": "A", "data": "8/22", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Essentials DLC Bundle", "price": "0.35", "region": "A", "data": "8/15", "status": "" }
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
    a = 55
  } else if (value > 1 && value <= 5) {
    a = 65
  } else if (value > 5 && value <= 10) {
    a = 80
  } else if (value > 10 && value <= 15) {
    a = 100
  } else if (value > 15 && value <= 20) {
    a = 110
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
