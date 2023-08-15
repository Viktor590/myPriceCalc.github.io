const input = document.querySelector('.input');
const output = document.querySelector('.output-res');
const list = document.querySelector('.list')
const showBtn = document.querySelector('.show')


showBtn.addEventListener('click', () => {
  showBtn.classList.contains('active') ?
    hiddenMenu() : showMenu()
})

let usd = 108;

const arr = [
  { "name": "'n Verlore Verstand", "price": "0.06", "region": "A", "data": "8/22", "status": "" },
  { "name": "80's OVERDRIVE", "price": "0.08", "region": "A", "data": "8/22", "status": "" },
  { "name": "A Boy and His Blob", "price": "0.20", "region": "A", "data": "8/22", "status": "" },
  { "name": "A Building Full of Cats", "price": "0.10", "region": "A", "data": "8/22", "status": "" },
  { "name": "A Fold Apart", "price": "1.01", "region": "A", "data": "8/22", "status": "" },
  { "name": "A Gummy's Life", "price": "0.24", "region": "A", "data": "8/22", "status": "" },
  { "name": "A Memoir Blue", "price": "0.23", "region": "A", "data": "8/22", "status": "" },
  { "name": "A Musical Story", "price": "0.28", "region": "A", "data": "8/22", "status": "" },
  { "name": "A Plague Tale: Innocence", "price": "1.11", "region": "A", "data": "8/22", "status": "GOLD" },
  { "name": "A Plague Tale: Innocence - Windows 10", "price": "1.20", "region": "A", "data": "8/22", "status": "" },
  { "name": "AEW: Fight Forever Elite Edition", "price": "26.61", "region": "T", "data": "8/22", "status": "" },
  { "name": "ATOM RPG: Post-apocalyptic indie game", "price": "0.38", "region": "A", "data": "8/22", "status": "" },
  { "name": "AXES", "price": "0.31", "region": "T", "data": "8/22", "status": "" },
  { "name": "Aaero: Complete Edition", "price": "0.15", "region": "A", "data": "8/22", "status": "" },
  { "name": "Acceptance", "price": "0.19", "region": "A", "data": "8/26", "status": "" },
  { "name": "Achtung! Cthulhu Tactics", "price": "0.25", "region": "A", "data": "8/22", "status": "" },
  { "name": "Ad Infinitum", "price": "12.60", "region": "A", "data": "9/14", "status": "" },
  { "name": "Ad Infinitum - Nightmare Edition Pre-order", "price": "15.17", "region": "A", "data": "9/12", "status": "" },
  { "name": "Adventures of Pip", "price": "0.19", "region": "A", "data": "8/22", "status": "" },
  { "name": "Aery - Calm Mind 3", "price": "0.28", "region": "A", "data": "8/22", "status": "" },
  { "name": "Aery - Path of Corruption", "price": "0.24", "region": "A", "data": "8/22", "status": "" },
  { "name": "Aeterna Noctis", "price": "0.42", "region": "A", "data": "8/22", "status": "" },
  { "name": "Afterglitch", "price": "0.37", "region": "A", "data": "8/22", "status": "" },
  { "name": "Afterimage", "price": "3.50", "region": "A", "data": "8/29", "status": "" },
  { "name": "Agatha Christie - Hercule Poirot: The London Case", "price": "9.98", "region": "T", "data": "8/28", "status": "" },
  { "name": "Agatha Knife", "price": "0.09", "region": "A", "data": "8/22", "status": "" },
  { "name": "Agent A: A puzzle in disguise", "price": "0.06", "region": "A", "data": "8/22", "status": "" },
  { "name": "Agent Intercept", "price": "0.41", "region": "A", "data": "8/22", "status": "" },
  { "name": "Airborne Bundle", "price": "1.07", "region": "A", "data": "8/22", "status": "" },
  { "name": "Aliens: Fireteam Elite", "price": "4.26", "region": "A", "data": "8/22", "status": "GOLD" },
  { "name": "Alone in the Dark", "price": "10.03", "region": "A", "data": "10/2", "status": "" },
  { "name": "Alone in the Dark - Digital Deluxe Edition", "price": "11.57", "region": "A", "data": "10/2", "status": "" },
  { "name": "Alwa's Awakening", "price": "0.12", "region": "A", "data": "8/22", "status": "" },
  { "name": "Amazing Princess Sarah", "price": "0.51", "region": "A", "data": "8/22", "status": "" },
  { "name": "American Fugitive", "price": "0.08", "region": "A", "data": "8/22", "status": "" },
  { "name": "An Airport for Aliens Currently Run by Dogs", "price": "0.49", "region": "A", "data": "8/22", "status": "" },
  { "name": "Anno 1800™ Console Edition - Deluxe", "price": "11.00", "region": "A", "data": "8/29", "status": "" },
  { "name": "Antigraviator", "price": "0.32", "region": "A", "data": "8/22", "status": "" },
  { "name": "Ary and the Secret of Seasons", "price": "1.14", "region": "A", "data": "8/29", "status": "" },
  { "name": "Assassin's Creed IV Black Flag", "price": "0.47", "region": "A", "data": "8/29", "status": "" },
  { "name": "Assassin's Creed Unity", "price": "0.71", "region": "A", "data": "8/29", "status": "" },
  { "name": "Assassin's Creed® Odyssey", "price": "1.31", "region": "A", "data": "8/29", "status": "" },
  { "name": "Assassin's Creed® Origins", "price": "0.99", "region": "A", "data": "8/29", "status": "" },
  { "name": "Assassin's Creed® Syndicate", "price": "1.33", "region": "A", "data": "8/29", "status": "" },
  { "name": "Assassin's Creed® The Ezio Collection", "price": "1.54", "region": "A", "data": "8/29", "status": "" },
  { "name": "Assassin's Creed® Valhalla", "price": "2.57", "region": "A", "data": "8/29", "status": "" },
  { "name": "Assault Android Cactus", "price": "0.11", "region": "A", "data": "8/22", "status": "" },
  { "name": "Astalon: Tears of the Earth", "price": "0.41", "region": "A", "data": "8/22", "status": "" },
  { "name": "Astro Flame Starfighter", "price": "0.32", "region": "A", "data": "8/16", "status": "" },
  { "name": "Astro Flame Starfighter (Xbox Series X|S)", "price": "0.32", "region": "A", "data": "8/16", "status": "" },
  { "name": "Atomicrops", "price": "0.15", "region": "A", "data": "8/22", "status": "" },
  { "name": "Autonauts", "price": "0.86", "region": "A", "data": "8/22", "status": "GOLD" },
  { "name": "Aven Colony", "price": "0.86", "region": "A", "data": "8/17", "status": "" },
  { "name": "Awarded Platformer Bundle", "price": "0.47", "region": "A", "data": "12/3", "status": "" },
  { "name": "Axis Football 2023", "price": "7.54", "region": "C", "data": "8/22", "status": "" },
  { "name": "Aztech Forgotten Gods", "price": "0.49", "region": "A", "data": "8/22", "status": "" },
  { "name": "BLACKTAIL", "price": "6.10", "region": "T", "data": "8/22", "status": "GOLD" },
  { "name": "Backbone", "price": "0.26", "region": "A", "data": "8/22", "status": "" },
  { "name": "Baja: Edge of Control HD", "price": "0.21", "region": "A", "data": "8/22", "status": "" },
  { "name": "Batman: The Telltale Series - The Complete Season (Episod...", "price": "0.32", "region": "A", "data": "8/22", "status": "" },
  { "name": "Battle Chasers: Nightwar", "price": "0.21", "region": "A", "data": "8/22", "status": "" },
  { "name": "Battle Kid: Fortress of Peril", "price": "0.20", "region": "A", "data": "8/22", "status": "" },
  { "name": "Battle Worlds: Kronos", "price": "0.14", "region": "A", "data": "8/22", "status": "" },
  { "name": "Battlefleet Gothic: Armada", "price": "0.23", "region": "A", "data": "8/22", "status": "" },
  { "name": "Battlefleet Gothic: Armada 2 - Windows 10", "price": "0.86", "region": "A", "data": "8/22", "status": "" },
  { "name": "Bear With Me: The Complete Collection", "price": "0.09", "region": "A", "data": "8/29", "status": "" },
  { "name": "Bear With Me: The Lost Robots", "price": "0.04", "region": "A", "data": "8/29", "status": "" },
  { "name": "Before We Leave", "price": "1.43", "region": "A", "data": "8/17", "status": "" },
  { "name": "Beholgar", "price": "0.12", "region": "A", "data": "8/22", "status": "" },
  { "name": "Biomutant", "price": "1.68", "region": "A", "data": "8/22", "status": "" },
  { "name": "Biped", "price": "0.21", "region": "A", "data": "8/22", "status": "" },
  { "name": "Black Mirror", "price": "0.29", "region": "A", "data": "8/22", "status": "" },
  { "name": "Blasphemous 2", "price": "10.80", "region": "A", "data": "8/24", "status": "" },
  { "name": "Blaster Master Zero 3", "price": "0.31", "region": "A", "data": "8/22", "status": "" },
  { "name": "Blazing Beaks", "price": "0.15", "region": "A", "data": "8/22", "status": "" },
  { "name": "BloodRayne: ReVamped", "price": "0.57", "region": "A", "data": "8/22", "status": "" },
  { "name": "Blue Fire", "price": "0.73", "region": "T", "data": "8/22", "status": "" },
  { "name": "Bomber Crew Deluxe Edition", "price": "0.69", "region": "A", "data": "8/22", "status": "" },
  { "name": "Boomerang Fu", "price": "0.31", "region": "A", "data": "8/22", "status": "" },
  { "name": "Borderlands 3", "price": "1.18", "region": "A", "data": "8/22", "status": "GOLD" },
  { "name": "Borderlands 3: Super Deluxe Edition", "price": "2.50", "region": "A", "data": "8/22", "status": "GOLD" },
  { "name": "Borderlands Legendary Collection", "price": "3.86", "region": "A", "data": "8/22", "status": "GOLD" },
  { "name": "Borderlands: Game of the Year Edition", "price": "1.34", "region": "A", "data": "8/22", "status": "GOLD" },
  { "name": "Bound by Flame", "price": "0.09", "region": "A", "data": "8/22", "status": "GOLD" },
  { "name": "Broforce", "price": "0.49", "region": "A", "data": "8/23", "status": "" },
  { "name": "Broken Universe - Tower Defense", "price": "0.10", "region": "A", "data": "8/22", "status": "GOLD" },
  { "name": "Bug Fables: The Everlasting Sapling", "price": "0.31", "region": "A", "data": "8/22", "status": "" },
  { "name": "Bus Simulator 21", "price": "8.04", "region": "E", "data": "8/22", "status": "" },
  { "name": "COGEN: Sword of Rewind", "price": "0.62", "region": "A", "data": "8/22", "status": "" },
  { "name": "Call of the Sea", "price": "0.41", "region": "A", "data": "8/22", "status": "" },
  { "name": "Can't Drive This", "price": "0.53", "region": "A", "data": "8/22", "status": "" },
  { "name": "Carmageddon: Max Damage", "price": "0.14", "region": "A", "data": "8/22", "status": "" },
  { "name": "Carnival Games®", "price": "0.85", "region": "A", "data": "8/22", "status": "GOLD" },
  { "name": "Cat Quest II", "price": "0.20", "region": "A", "data": "8/22", "status": "" },
  { "name": "Cave Digger", "price": "0.31", "region": "A", "data": "8/22", "status": "" },
  { "name": "Chants of Sennaar", "price": "12.86", "region": "A", "data": "9/5/", "status": "" },
  { "name": "Chasm", "price": "0.17", "region": "A", "data": "8/22", "status": "" },
  { "name": "Chernobylite", "price": "4.00", "region": "A", "data": "8/22", "status": "" },
  { "name": "Chess Gambit", "price": "0.24", "region": "A", "data": "8/22", "status": "GOLD" },
  { "name": "Children of Morta: Complete Edition", "price": "0.36", "region": "A", "data": "8/22", "status": "" },
  { "name": "Chivalry 2", "price": "0.82", "region": "A", "data": "8/22", "status": "" },
  { "name": "Chivalry 2 King's Edition", "price": "1.23", "region": "A", "data": "8/22", "status": "" },
  { "name": "Chivalry 2 Special Edition", "price": "1.02", "region": "A", "data": "8/22", "status": "" },
  { "name": "ChromaGun", "price": "0.15", "region": "A", "data": "8/22", "status": "" },
  { "name": "Clone Drone in the Danger Zone", "price": "0.41", "region": "A", "data": "8/22", "status": "" },
  { "name": "Clunky Hero", "price": "0.94", "region": "T", "data": "8/22", "status": "" },
  { "name": "Codex of Victory", "price": "0.40", "region": "A", "data": "8/22", "status": "" },
  { "name": "Construction Simulator", "price": "7.29", "region": "A", "data": "8/22", "status": "" },
  { "name": "Cook, Serve, Delicious! 2!!", "price": "0.13", "region": "A", "data": "8/22", "status": "" },
  { "name": "Cook, Serve, Delicious! 3?!", "price": "0.20", "region": "A", "data": "8/22", "status": "" },
  { "name": "Cosmic Top Secret", "price": "0.08", "region": "A", "data": "8/22", "status": "" },
  { "name": "Cozy Grove", "price": "0.37", "region": "A", "data": "8/22", "status": "" },
  { "name": "Crazy Athletics - Summer Sports and Games", "price": "0.39", "region": "A", "data": "8/22", "status": "" },
  { "name": "Creaks", "price": "0.71", "region": "A", "data": "8/22", "status": "" },
  { "name": "Creepy Tale: Ingrid Penance", "price": "0.32", "region": "A", "data": "8/16", "status": "" },
  { "name": "Creepy Tale: Ingrid Penance (Xbox Series X|S)", "price": "0.32", "region": "A", "data": "8/16", "status": "" },
  { "name": "Cris Tales", "price": "1.14", "region": "A", "data": "8/29", "status": "" },
  { "name": "Cruz Brothers", "price": "0.67", "region": "A", "data": "8/22", "status": "" },
  { "name": "Crysis 2 Remastered", "price": "0.61", "region": "A", "data": "8/22", "status": "" },
  { "name": "Crysis 3 Remastered", "price": "0.61", "region": "A", "data": "8/22", "status": "" },
  { "name": "Crysis Remastered", "price": "0.40", "region": "A", "data": "8/22", "status": "" },
  { "name": "Crysis Remastered Trilogy", "price": "4.40", "region": "A", "data": "8/22", "status": "" },
  { "name": "Crystal Ortha", "price": "0.31", "region": "A", "data": "8/22", "status": "GOLD" },
  { "name": "Cube Airport", "price": "0.16", "region": "A", "data": "8/26", "status": "" },
  { "name": "Cult of the Lamb", "price": "3.25", "region": "A", "data": "8/30", "status": "" },
  { "name": "Curse of the Dead Gods", "price": "0.94", "region": "A", "data": "8/22", "status": "GOLD" },
  { "name": "Curse of the Dead Gods (PC)", "price": "1.14", "region": "A", "data": "8/22", "status": "" },
  { "name": "Curved Space", "price": "0.16", "region": "A", "data": "8/29", "status": "" },
  { "name": "Cymatically Muffed", "price": "0.41", "region": "A", "data": "8/22", "status": "" },
  { "name": "DARKLAND 3", "price": "0.04", "region": "A", "data": "8/26", "status": "" },
  { "name": "DCL-The Game", "price": "0.45", "region": "A", "data": "8/22", "status": "" },
  { "name": "DE-EXIT - Eternal Matters", "price": "2.00", "region": "A", "data": "8/22", "status": "" },
  { "name": "DEATHLOOP Deluxe Edition", "price": "3.93", "region": "A", "data": "8/16", "status": "" },
  { "name": "DEMON'S TILT", "price": "0.32", "region": "A", "data": "8/22", "status": "" },
  { "name": "DJMAX RESPECT V", "price": "2.03", "region": "A", "data": "8/22", "status": "" },
  { "name": "DOOM", "price": "0.26", "region": "A", "data": "8/16", "status": "" },
  { "name": "DOOM (1993)", "price": "0.06", "region": "A", "data": "8/16", "status": "" },
  { "name": "DOOM 3", "price": "0.17", "region": "A", "data": "8/16", "status": "" },
  { "name": "DOOM 64", "price": "0.05", "region": "A", "data": "8/16", "status": "" },
  { "name": "DOOM Eternal Deluxe Edition", "price": "2.43", "region": "A", "data": "8/16", "status": "" },
  { "name": "DOOM Eternal Standard Edition", "price": "1.43", "region": "A", "data": "8/16", "status": "" },
  { "name": "DOOM Eternal: Year One Pass", "price": "1.41", "region": "A", "data": "8/16", "status": "" },
  { "name": "DOOM Eternal: Year One Pass (PC)", "price": "1.41", "region": "A", "data": "8/16", "status": "" },
  { "name": "DOOM II (Classic)", "price": "0.06", "region": "A", "data": "8/16", "status": "" },
  { "name": "DOOM Slayers Collection", "price": "1.30", "region": "A", "data": "8/16", "status": "" },
  { "name": "DREAMERS", "price": "11.65", "region": "E", "data": "9/1/", "status": "" },
  { "name": "Danger Scavenger", "price": "0.04", "region": "A", "data": "8/22", "status": "GOLD" },
  { "name": "Dark Nights with Poe and Munro", "price": "0.15", "region": "A", "data": "8/22", "status": "" },
  { "name": "Dark Sauce", "price": "0.31", "region": "T", "data": "8/22", "status": "" },
  { "name": "Darksiders Fury's Collection - War and Death", "price": "0.29", "region": "A", "data": "8/22", "status": "" },
  { "name": "Darksiders Genesis", "price": "0.53", "region": "A", "data": "8/22", "status": "" },
  { "name": "Darksiders III", "price": "1.26", "region": "A", "data": "8/22", "status": "" },
  { "name": "Darksiders III - Blades & Whip Edition", "price": "1.66", "region": "A", "data": "8/22", "status": "" },
  { "name": "Dawn of Man", "price": "0.51", "region": "A", "data": "8/22", "status": "" },
  { "name": "Dawn of Man + Planetbase", "price": "0.73", "region": "A", "data": "8/22", "status": "" },
  { "name": "Dead Dungeon", "price": "0.06", "region": "A", "data": "8/22", "status": "" },
  { "name": "Death Becomes You", "price": "0.30", "region": "A", "data": "8/19", "status": "" },
  { "name": "Death Squared", "price": "0.09", "region": "A", "data": "8/22", "status": "" },
  { "name": "Demoniaca: Everlasting Night", "price": "0.24", "region": "A", "data": "8/22", "status": "" },
  { "name": "Deployment", "price": "0.25", "region": "A", "data": "8/22", "status": "" },
  { "name": "Desperados III Deluxe Edition", "price": "2.11", "region": "A", "data": "8/22", "status": "" },
  { "name": "Destroy All Humans!", "price": "0.71", "region": "A", "data": "8/22", "status": "" },
  { "name": "Destroy All Humans! - Jumbo Pack", "price": "3.00", "region": "A", "data": "8/22", "status": "" },
  { "name": "Destroy All Humans! 2 - Reprobed", "price": "2.52", "region": "A", "data": "8/22", "status": "" },
  { "name": "Destroy All Humans! 2 - Reprobed: Dressed to Skill Edition", "price": "3.77", "region": "A", "data": "8/22", "status": "" },
  { "name": "Destroy All Humans! 2 - Reprobed: Single Player (X1)", "price": "9.98", "region": "T", "data": "8/22", "status": "" },
  { "name": "Dicey Dungeons", "price": "0.18", "region": "A", "data": "8/22", "status": "" },
  { "name": "Die for Valhalla!", "price": "0.07", "region": "A", "data": "8/22", "status": "" },
  { "name": "Dimension Drive", "price": "0.06", "region": "A", "data": "8/22", "status": "" },
  { "name": "Discolored", "price": "0.14", "region": "A", "data": "8/22", "status": "" },
  { "name": "Dishonored 2", "price": "0.80", "region": "A", "data": "8/17", "status": "" },
  { "name": "Dishonored®: Death of the Outsider™ Deluxe Bundle", "price": "1.54", "region": "A", "data": "8/16", "status": "" },
  { "name": "Disney Speedstorm - Standard Founder’s Pack", "price": "7.73", "region": "T", "data": "8/22", "status": "" },
  { "name": "Disney Speedstorm - Ultimate Founder’s Pack", "price": "16.81", "region": "T", "data": "8/22", "status": "" },
  { "name": "Don't Be Afraid", "price": "0.20", "region": "A", "data": "8/22", "status": "" },
  { "name": "Door Kickers: Action Squad", "price": "0.12", "region": "A", "data": "8/22", "status": "" },
  { "name": "Dordogne", "price": "5.91", "region": "T", "data": "8/22", "status": "GOLD" },
  { "name": "Dou", "price": "0.04", "region": "A", "data": "8/27", "status": "" },
  { "name": "Double Cross", "price": "0.16", "region": "A", "data": "8/22", "status": "" },
  { "name": "Dragon's Lair Trilogy", "price": "0.41", "region": "A", "data": "8/22", "status": "" },
  { "name": "Dread Nautical", "price": "0.28", "region": "A", "data": "8/22", "status": "" },
  { "name": "Driven Out", "price": "0.18", "region": "A", "data": "8/22", "status": "" },
  { "name": "Dying Light: Definitive Edition", "price": "1.84", "region": "T", "data": "8/22", "status": "GOLD" },
  { "name": "EA SPORTS FC™ 24 Ultimate Edition Xbox One & Xbox Series X|S", "price": "45.26", "region": "A", "data": "8/23", "status": "" },
  { "name": "EA SPORTS™ FIFA 23 Standard Edition Xbox One", "price": "5.71", "region": "A", "data": "8/22", "status": "" },
  { "name": "EA SPORTS™ FIFA 23 Standard Edition Xbox One", "price": "6.86", "region": "A", "data": "9/21", "status": "" },
  { "name": "EA SPORTS™ FIFA 23 Standard Edition Xbox Series X|S", "price": "6.43", "region": "A", "data": "8/22", "status": "" },
  { "name": "ELEX II", "price": "3.14", "region": "A", "data": "8/22", "status": "" },
  { "name": "EVERSPACE™", "price": "0.31", "region": "A", "data": "8/22", "status": "" },
  { "name": "Embr", "price": "0.20", "region": "A", "data": "8/22", "status": "" },
  { "name": "Escape Dead Island", "price": "0.11", "region": "A", "data": "12/3", "status": "" },
  { "name": "Evan's Remains", "price": "0.11", "region": "A", "data": "8/22", "status": "" },
  { "name": "Evertried", "price": "0.32", "region": "A", "data": "8/22", "status": "" },
  { "name": "Evil West", "price": "8.57", "region": "A", "data": "8/22", "status": "GOLD" },
  { "name": "FOR HONOR : MARCHING FIRE EDITION", "price": "1.43", "region": "A", "data": "8/29", "status": "" },
  { "name": "FRONT MISSION 1st: Remake", "price": "1.14", "region": "A", "data": "8/22", "status": "GOLD" },
  { "name": "Fade to Silence", "price": "0.42", "region": "A", "data": "8/22", "status": "" },
  { "name": "Fallout 4", "price": "0.85", "region": "A", "data": "8/16", "status": "" },
  { "name": "Fallout 4 (PC)", "price": "0.75", "region": "A", "data": "8/16", "status": "" },
  { "name": "Fallout 76", "price": "2.00", "region": "A", "data": "8/16", "status": "" },
  { "name": "Fantasy Dash", "price": "0.04", "region": "A", "data": "8/20", "status": "" },
  { "name": "Figment 2: Creed Valley", "price": "0.67", "region": "A", "data": "8/22", "status": "" },
  { "name": "Figment: Journey Into the Mind", "price": "1.22", "region": "A", "data": "8/22", "status": "" },
  { "name": "Firefighting Simulator - The Squad", "price": "4.71", "region": "A", "data": "8/22", "status": "" },
  { "name": "Fishing: North Atlantic", "price": "0.61", "region": "A", "data": "8/22", "status": "" },
  { "name": "Fishing: North Atlantic Enhanced Edition", "price": "0.86", "region": "A", "data": "8/22", "status": "" },
  { "name": "Flaskoman for Windows 10", "price": "0.05", "region": "A", "data": "8/22", "status": "" },
  { "name": "Flockers", "price": "0.32", "region": "A", "data": "8/17", "status": "" },
  { "name": "Fluffy Milo", "price": "2.58", "region": "I", "data": "8/24", "status": "" },
  { "name": "Flying Soldiers", "price": "1.22", "region": "A", "data": "8/22", "status": "" },
  { "name": "Fobia - St. Dinfna Hotel", "price": "0.61", "region": "A", "data": "8/29", "status": "" },
  { "name": "Forager", "price": "0.32", "region": "A", "data": "8/22", "status": "" },
  { "name": "Fortified", "price": "0.21", "region": "A", "data": "8/22", "status": "" },
  { "name": "Freshly Frosted", "price": "0.28", "region": "A", "data": "8/22", "status": "" },
  { "name": "From Heaven To Earth", "price": "0.19", "region": "A", "data": "8/22", "status": "" },
  { "name": "Full Spectrum Warrior", "price": "0.14", "region": "A", "data": "8/22", "status": "" },
  { "name": "Furi", "price": "0.17", "region": "A", "data": "8/22", "status": "" },
  { "name": "GRIDD: Retroenhanced", "price": "0.47", "region": "T", "data": "8/22", "status": "" },
  { "name": "Gas Guzzlers Extreme", "price": "0.32", "region": "A", "data": "8/22", "status": "" },
  { "name": "Gas Station Simulator", "price": "3.04", "region": "A", "data": "8/22", "status": "" },
  { "name": "Get Packed", "price": "0.28", "region": "A", "data": "8/22", "status": "" },
  { "name": "Get-A-Grip Chip and the Body Bugs", "price": "0.39", "region": "A", "data": "8/22", "status": "" },
  { "name": "Ghostwire: Tokyo Deluxe Edition", "price": "5.19", "region": "A", "data": "8/16", "status": "" },
  { "name": "Giana Sisters: Twisted Dreams - Director's Cut", "price": "0.04", "region": "A", "data": "8/22", "status": "" },
  { "name": "Gloomhaven Gold Edition", "price": "12.96", "region": "E", "data": "9/18", "status": "" },
  { "name": "Gloomhaven Mercenaries Edition", "price": "10.29", "region": "A", "data": "9/18", "status": "" },
  { "name": "Gnomes Garden", "price": "0.07", "region": "A", "data": "8/22", "status": "" },
  { "name": "Gnomes Garden 3: The thief of castles", "price": "0.07", "region": "A", "data": "8/22", "status": "" },
  { "name": "God of Rock", "price": "3.07", "region": "A", "data": "8/29", "status": "" },
  { "name": "Golazo! 2", "price": "0.95", "region": "A", "data": "8/22", "status": "" },
  { "name": "Gorogoa", "price": "0.13", "region": "A", "data": "8/22", "status": "" },
  { "name": "Grand Theft Auto Online", "price": "2.86", "region": "A", "data": "8/22", "status": "GOLD" },
  { "name": "Grand Theft Auto V (Xbox One & Xbox Series X|S)", "price": "6.60", "region": "A", "data": "8/22", "status": "GOLD" },
  { "name": "Grand Theft Auto V: Premium Edition & Great White Shark C...", "price": "2.96", "region": "A", "data": "8/22", "status": "GOLD" },
  { "name": "Grand Theft Auto V: Premium Edition & Megalodon Shark Car...", "price": "5.14", "region": "A", "data": "8/22", "status": "GOLD" },
  { "name": "Grand Theft Auto V: Premium Edition & Whale Shark Card Bu...", "price": "3.43", "region": "A", "data": "8/22", "status": "GOLD" },
  { "name": "Grapple Dog", "price": "0.21", "region": "A", "data": "8/22", "status": "" },
  { "name": "GreedFall", "price": "2.14", "region": "A", "data": "8/22", "status": "GOLD" },
  { "name": "GreedFall - Windows 10", "price": "1.63", "region": "A", "data": "8/22", "status": "" },
  { "name": "Grindstone", "price": "2.43", "region": "A", "data": "8/22", "status": "" },
  { "name": "Guns, Gore and Cannoli", "price": "0.11", "region": "A", "data": "8/22", "status": "" },
  { "name": "Guns, Gore and Cannoli 2", "price": "0.18", "region": "A", "data": "8/22", "status": "" },
  { "name": "HEROish", "price": "0.04", "region": "A", "data": "8/22", "status": "" },
  { "name": "Hammerwatch: Heroic Bundle", "price": "0.36", "region": "A", "data": "8/22", "status": "" },
  { "name": "Haunted Halloween '86", "price": "0.12", "region": "A", "data": "8/22", "status": "" },
  { "name": "Haven", "price": "0.41", "region": "A", "data": "8/22", "status": "" },
  { "name": "Heaven Dust", "price": "0.20", "region": "A", "data": "8/22", "status": "" },
  { "name": "Hell Pie", "price": "0.67", "region": "A", "data": "8/22", "status": "" },
  { "name": "Hermitage: Strange Case Files", "price": "0.28", "region": "A", "data": "8/22", "status": "" },
  { "name": "Hi-Fi RUSH", "price": "8.36", "region": "A", "data": "8/16", "status": "" },
  { "name": "High On Life", "price": "1.84", "region": "A", "data": "8/22", "status": "" },
  { "name": "Hindsight", "price": "0.41", "region": "A", "data": "8/22", "status": "" },
  { "name": "Hobo: Tough Life", "price": "3.39", "region": "A", "data": "8/22", "status": "" },
  { "name": "Hunt Ducks 4", "price": "0.04", "region": "A", "data": "8/21", "status": "" },
  { "name": "Hyper Gunsport", "price": "0.51", "region": "A", "data": "8/22", "status": "" },
  { "name": "Immortal Planet", "price": "0.20", "region": "A", "data": "8/22", "status": "" },
  { "name": "In Sound Mind", "price": "0.49", "region": "A", "data": "8/29", "status": "" },
  { "name": "Industria", "price": "0.32", "region": "A", "data": "8/22", "status": "" },
  { "name": "Infinite Minigolf", "price": "0.15", "region": "A", "data": "8/22", "status": "" },
  { "name": "JUJU", "price": "0.11", "region": "A", "data": "8/22", "status": "" },
  { "name": "Jagged Alliance: Rage!", "price": "0.09", "region": "A", "data": "8/22", "status": "" },
  { "name": "Jelly Brawl", "price": "0.20", "region": "A", "data": "8/22", "status": "" },
  { "name": "John Wick Hex", "price": "0.08", "region": "A", "data": "8/22", "status": "" },
  { "name": "Just Shapes & Beats", "price": "0.57", "region": "A", "data": "8/22", "status": "" },
  { "name": "Kamikaze Veggies", "price": "0.21", "region": "A", "data": "8/22", "status": "" },
  { "name": "Katana Kata", "price": "0.16", "region": "A", "data": "8/22", "status": "" },
  { "name": "Kentucky Route Zero: TV Edition", "price": "0.62", "region": "A", "data": "8/22", "status": "" },
  { "name": "Kerbal Space Program Enhanced Edition Complete", "price": "3.28", "region": "T", "data": "8/22", "status": "GOLD" },
  { "name": "Kingdom Rush", "price": "1.22", "region": "A", "data": "8/22", "status": "" },
  { "name": "Kingdom Rush Frontiers", "price": "0.24", "region": "A", "data": "8/22", "status": "" },
  { "name": "Kingdoms of Amalur: Re-Reckoning FATE Edition", "price": "2.72", "region": "A", "data": "8/22", "status": "" },
  { "name": "Kitaria Fables", "price": "0.41", "region": "A", "data": "8/22", "status": "" },
  { "name": "Knights and Bikes", "price": "0.41", "region": "A", "data": "8/22", "status": "" },
  { "name": "LEGO® Bricktales", "price": "0.80", "region": "A", "data": "8/22", "status": "" },
  { "name": "LEGO® Builder's Journey", "price": "2.00", "region": "A", "data": "8/22", "status": "" },
  { "name": "LOST ORBIT: Terminal Velocity", "price": "0.04", "region": "A", "data": "8/22", "status": "" },
  { "name": "Lamentum", "price": "0.23", "region": "A", "data": "8/22", "status": "" },
  { "name": "Last Stop", "price": "0.41", "region": "A", "data": "8/22", "status": "" },
  { "name": "Legend Bowl", "price": "0.87", "region": "A", "data": "8/24", "status": "" },
  { "name": "Let's Build a Zoo", "price": "0.41", "region": "A", "data": "8/22", "status": "" },
  { "name": "Light & Dark Bundle", "price": "0.64", "region": "A", "data": "11/2", "status": "" },
  { "name": "Lost Artifacts: Time Machine", "price": "0.14", "region": "A", "data": "8/22", "status": "" },
  { "name": "Lost Words: Beyond the Page", "price": "0.43", "region": "A", "data": "8/29", "status": "" },
  { "name": "Lotus Reverie: First Nexus", "price": "0.23", "region": "A", "data": "8/22", "status": "" },
  { "name": "Luckslinger", "price": "0.08", "region": "A", "data": "8/22", "status": "" },
  { "name": "Lumini", "price": "0.08", "region": "A", "data": "8/22", "status": "" },
  { "name": "MX Unleashed", "price": "0.14", "region": "A", "data": "8/22", "status": "" },
  { "name": "MX vs ATV Legends Leader Pack", "price": "3.77", "region": "A", "data": "8/22", "status": "" },
  { "name": "MXGP 2019 - The Official Motocross Videogame", "price": "0.64", "region": "A", "data": "8/22", "status": "" },
  { "name": "Machinarium", "price": "0.43", "region": "A", "data": "8/22", "status": "" },
  { "name": "Machinarium & Creaks Bundle", "price": "0.94", "region": "A", "data": "8/22", "status": "" },
  { "name": "Madden NFL 19", "price": "29.26", "region": "C", "data": "12/3", "status": "" },
  { "name": "Madden NFL 22 Xbox One", "price": "11.00", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 22 Xbox Series X|S", "price": "12.80", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 23 Xbox One", "price": "14.63", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 23 Xbox Series X|S", "price": "17.14", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 24 Deluxe Edition Xbox Series X|S & Xbox One", "price": "45.26", "region": "A", "data": "8/18", "status": "" },
  { "name": "Maneater Apex Edition", "price": "0.82", "region": "A", "data": "8/22", "status": "" },
  { "name": "Manifold Garden", "price": "0.41", "region": "A", "data": "8/22", "status": "" },
  { "name": "Marble It Up! Ultra - Pre-Order", "price": "1.10", "region": "A", "data": "8/17", "status": "" },
  { "name": "Maximum Football 2019", "price": "0.87", "region": "N", "data": "8/29", "status": "" },
  { "name": "Maximum Football 2020", "price": "2.63", "region": "N", "data": "8/29", "status": "" },
  { "name": "Mech Armada", "price": "0.41", "region": "A", "data": "8/22", "status": "" },
  { "name": "Mechstermination Force", "price": "0.29", "region": "A", "data": "8/22", "status": "" },
  { "name": "Megaquarium", "price": "0.20", "region": "A", "data": "8/22", "status": "" },
  { "name": "Metrico+", "price": "0.10", "region": "A", "data": "8/22", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.00", "region": "U", "data": "12/1", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.00", "region": "U", "data": "12/1", "status": "" },
  { "name": "Mighty Switch Force! Collection", "price": "0.41", "region": "A", "data": "8/22", "status": "" },
  { "name": "Miracle Snack Shop", "price": "0.65", "region": "A", "data": "8/22", "status": "GOLD" },
  { "name": "Monster Energy Supercross - The Official Videogame 4", "price": "1.29", "region": "A", "data": "8/22", "status": "" },
  { "name": "Monster Energy Supercross 4 - Special Edition", "price": "2.14", "region": "A", "data": "8/22", "status": "" },
  { "name": "Monster Energy Supercross 4 - Special Edition - Xbox Series X|S", "price": "2.14", "region": "A", "data": "8/22", "status": "" },
  { "name": "Monster Energy Supercross 4 - Xbox Series X|S", "price": "1.29", "region": "A", "data": "8/22", "status": "" },
  { "name": "Monster Jam Steel Titans", "price": "0.23", "region": "A", "data": "8/22", "status": "" },
  { "name": "Monster Jam Steel Titans 2", "price": "0.84", "region": "A", "data": "8/22", "status": "" },
  { "name": "Monster Jam Steel Titans Power Out Bundle", "price": "1.25", "region": "A", "data": "8/22", "status": "" },
  { "name": "Monster Prom: XXL", "price": "0.22", "region": "A", "data": "8/22", "status": "" },
  { "name": "Moo Lander", "price": "0.50", "region": "A", "data": "8/22", "status": "" },
  { "name": "Moonlighter: Complete Edition", "price": "0.15", "region": "A", "data": "8/22", "status": "" },
  { "name": "MotoGP™19", "price": "0.86", "region": "A", "data": "8/22", "status": "" },
  { "name": "MudRunner - American Wilds Edition", "price": "0.69", "region": "A", "data": "8/22", "status": "GOLD" },
  { "name": "Mulaka", "price": "0.06", "region": "A", "data": "8/22", "status": "" },
  { "name": "Munchkin: Quacked Quest", "price": "0.41", "region": "A", "data": "8/22", "status": "" },
  { "name": "Mushroom Savior", "price": "0.08", "region": "A", "data": "8/22", "status": "" },
  { "name": "Mythic Ocean", "price": "0.15", "region": "A", "data": "8/22", "status": "" },
  { "name": "NEScape!", "price": "0.51", "region": "A", "data": "8/22", "status": "" },
  { "name": "Narcos: Rise of the Cartels", "price": "0.25", "region": "A", "data": "8/22", "status": "" },
  { "name": "Necromunda: Hired Gun", "price": "2.50", "region": "A", "data": "8/22", "status": "GOLD" },
  { "name": "Neighbours back From Hell", "price": "0.51", "region": "A", "data": "8/22", "status": "" },
  { "name": "New Tales from the Borderlands", "price": "8.00", "region": "A", "data": "8/22", "status": "GOLD" },
  { "name": "Nexomon", "price": "0.22", "region": "A", "data": "8/22", "status": "" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.10", "region": "A", "data": "5/31", "status": "" },
  { "name": "Nobody Saves the World", "price": "0.96", "region": "A", "data": "8/22", "status": "" },
  { "name": "Nobody Saves the World + Frozen Hearth Bundle", "price": "0.57", "region": "A", "data": "8/22", "status": "" },
  { "name": "OlliOlli World Rad Edition", "price": "7.07", "region": "A", "data": "8/22", "status": "GOLD" },
  { "name": "One Hand Clapping", "price": "0.80", "region": "A", "data": "8/22", "status": "" },
  { "name": "Operation: Tango", "price": "0.41", "region": "A", "data": "8/22", "status": "" },
  { "name": "Operencia: The Stolen Sun", "price": "0.43", "region": "A", "data": "8/22", "status": "" },
  { "name": "Outbreak Definitive Collection", "price": "0.61", "region": "A", "data": "8/22", "status": "" },
  { "name": "Outbreak Platinum Collection", "price": "0.97", "region": "A", "data": "8/22", "status": "" },
  { "name": "Outbreak Ultimate Apocalypse", "price": "0.25", "region": "A", "data": "8/22", "status": "" },
  { "name": "Outer Wilds", "price": "0.62", "region": "A", "data": "8/22", "status": "" },
  { "name": "Outer Wilds: Archaeologist Edition", "price": "0.98", "region": "A", "data": "8/22", "status": "" },
  { "name": "Override 2: Super Mech League", "price": "0.64", "region": "A", "data": "8/29", "status": "" },
  { "name": "Oxide Room 104", "price": "1.32", "region": "T", "data": "8/22", "status": "" },
  { "name": "PHOGS!", "price": "0.36", "region": "A", "data": "8/22", "status": "" },
  { "name": "PUSS!", "price": "0.12", "region": "A", "data": "8/22", "status": "" },
  { "name": "Paint the Town Red", "price": "0.41", "region": "A", "data": "8/22", "status": "" },
  { "name": "Paleo Pines", "price": "12.56", "region": "I", "data": "9/25", "status": "" },
  { "name": "Palindrome Syndrome: Escape Room", "price": "1.22", "region": "A", "data": "8/22", "status": "" },
  { "name": "Panzer Elite Action: Fields of Glory", "price": "0.27", "region": "T", "data": "8/22", "status": "" },
  { "name": "Phoenotopia: Awakening", "price": "0.49", "region": "A", "data": "8/22", "status": "" },
  { "name": "Plague Inc: Evolved", "price": "0.15", "region": "A", "data": "8/22", "status": "" },
  { "name": "Planet of Lana", "price": "3.04", "region": "A", "data": "8/21", "status": "GOLD" },
  { "name": "Planetbase", "price": "0.31", "region": "A", "data": "8/22", "status": "" },
  { "name": "Potion Permit", "price": "0.61", "region": "A", "data": "8/22", "status": "" },
  { "name": "Praey for the Gods", "price": "0.61", "region": "A", "data": "8/22", "status": "" },
  { "name": "Prey", "price": "1.00", "region": "A", "data": "8/16", "status": "" },
  { "name": "Protocol", "price": "0.20", "region": "A", "data": "8/22", "status": "" },
  { "name": "Pure Chess Grandmaster Edition", "price": "0.11", "region": "A", "data": "8/22", "status": "" },
  { "name": "Pushy and Pully in Blockland", "price": "0.20", "region": "A", "data": "8/22", "status": "" },
  { "name": "Q-YO Blaster", "price": "0.04", "region": "A", "data": "8/22", "status": "GOLD" },
  { "name": "Quake", "price": "0.47", "region": "A", "data": "8/16", "status": "" },
  { "name": "RAGE 2: Deluxe Edition", "price": "1.93", "region": "A", "data": "8/16", "status": "" },
  { "name": "RE:CALL", "price": "0.16", "region": "A", "data": "8/22", "status": "" },
  { "name": "REZ PLZ", "price": "0.12", "region": "A", "data": "8/22", "status": "" },
  { "name": "Rainbow Billy: The Curse of the Leviathan", "price": "0.28", "region": "A", "data": "8/22", "status": "" },
  { "name": "Ravenlok", "price": "0.77", "region": "A", "data": "8/22", "status": "" },
  { "name": "Real Heroes: Firefighter HD", "price": "0.43", "region": "A", "data": "8/22", "status": "" },
  { "name": "Realpolitiks New Power", "price": "0.10", "region": "A", "data": "8/22", "status": "GOLD" },
  { "name": "Rebel Cops", "price": "0.08", "region": "A", "data": "8/22", "status": "" },
  { "name": "Red Dead Redemption 2: Ultimate Edition", "price": "6.00", "region": "A", "data": "8/22", "status": "GOLD" },
  { "name": "Red Wings: Aces of the Sky", "price": "0.08", "region": "A", "data": "8/22", "status": "" },
  { "name": "Redout: Lightspeed Edition", "price": "0.29", "region": "A", "data": "8/22", "status": "" },
  { "name": "Remothered: Broken Porcelain", "price": "0.50", "region": "T", "data": "8/29", "status": "" },
  { "name": "Retro Tank Arcade", "price": "0.04", "region": "A", "data": "8/26", "status": "" },
  { "name": "Ride 2", "price": "0.20", "region": "A", "data": "8/22", "status": "" },
  { "name": "RimWorld Console Edition", "price": "9.64", "region": "A", "data": "8/22", "status": "" },
  { "name": "River City Girls", "price": "0.61", "region": "A", "data": "8/22", "status": "" },
  { "name": "Riverbond", "price": "0.21", "region": "A", "data": "8/22", "status": "" },
  { "name": "Road Redemption", "price": "0.23", "region": "A", "data": "8/22", "status": "" },
  { "name": "Rock of Ages 3: Make & Break", "price": "0.50", "region": "T", "data": "8/29", "status": "" },
  { "name": "Rogue Legacy", "price": "0.04", "region": "A", "data": "8/22", "status": "" },
  { "name": "Rogue Legacy 2", "price": "0.72", "region": "A", "data": "8/22", "status": "" },
  { "name": "Rubber Bandits", "price": "1.01", "region": "A", "data": "8/22", "status": "" },
  { "name": "Rustler", "price": "0.29", "region": "A", "data": "8/29", "status": "" },
  { "name": "SHMUPS Pack 2x1", "price": "0.30", "region": "A", "data": "8/22", "status": "" },
  { "name": "SIGNALIS", "price": "1.84", "region": "T", "data": "8/22", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "3.66", "region": "A", "data": "12/3", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "4.88", "region": "A", "data": "1/1/", "status": "" },
  { "name": "STAY", "price": "0.09", "region": "A", "data": "8/22", "status": "" },
  { "name": "Sam & Max Save the World", "price": "0.57", "region": "A", "data": "8/22", "status": "" },
  { "name": "Sam & Max: Beyond Time and Space", "price": "0.57", "region": "A", "data": "8/22", "status": "" },
  { "name": "Saturnalia", "price": "0.49", "region": "A", "data": "8/22", "status": "" },
  { "name": "Scorn", "price": "3.23", "region": "A", "data": "8/22", "status": "" },
  { "name": "Sea Salt", "price": "0.12", "region": "A", "data": "8/22", "status": "" },
  { "name": "Severed Steel", "price": "0.46", "region": "A", "data": "8/22", "status": "" },
  { "name": "Shadowblade Odyssey", "price": "0.04", "region": "A", "data": "8/22", "status": "" },
  { "name": "Shantae and the Seven Sirens", "price": "0.61", "region": "A", "data": "8/22", "status": "" },
  { "name": "She Sees Red Interactive Movie", "price": "0.12", "region": "A", "data": "8/22", "status": "" },
  { "name": "She Wants Me Dead", "price": "0.10", "region": "A", "data": "8/22", "status": "GOLD" },
  { "name": "Shoulders of Giants", "price": "2.03", "region": "A", "data": "8/22", "status": "" },
  { "name": "Sir Lovelot", "price": "0.04", "region": "A", "data": "8/22", "status": "GOLD" },
  { "name": "SkateBIRD", "price": "1.01", "region": "A", "data": "8/22", "status": "GOLD" },
  { "name": "Skydrift Infinity", "price": "0.31", "region": "A", "data": "8/22", "status": "" },
  { "name": "Skyrim Anniversary Edition + Fallout 4 G.O.T.Y Bundle", "price": "3.77", "region": "A", "data": "8/16", "status": "" },
  { "name": "Skyrim Anniversary Edition + Fallout 4 G.O.T.Y Bundle", "price": "3.77", "region": "A", "data": "8/16", "status": "" },
  { "name": "Smelter", "price": "0.32", "region": "A", "data": "8/22", "status": "" },
  { "name": "Smurfs Kart", "price": "7.71", "region": "A", "data": "8/22", "status": "" },
  { "name": "Soulstice", "price": "0.98", "region": "A", "data": "8/29", "status": "" },
  { "name": "Soulstice: Deluxe Edition", "price": "1.22", "region": "A", "data": "8/29", "status": "" },
  { "name": "Soundfall", "price": "1.52", "region": "A", "data": "8/22", "status": "" },
  { "name": "South of the Circle", "price": "0.32", "region": "A", "data": "8/22", "status": "" },
  { "name": "Space Crew: Legendary Edition", "price": "0.69", "region": "A", "data": "8/22", "status": "" },
  { "name": "Space Engineers", "price": "0.41", "region": "A", "data": "8/22", "status": "" },
  { "name": "Space Gladiators", "price": "0.49", "region": "A", "data": "8/22", "status": "" },
  { "name": "Space Raiders in Space", "price": "0.24", "region": "A", "data": "8/22", "status": "GOLD" },
  { "name": "Space Warlord Organ Trading Simulator", "price": "0.49", "region": "A", "data": "8/22", "status": "" },
  { "name": "Spacelines from the Far Out", "price": "0.31", "region": "A", "data": "8/22", "status": "" },
  { "name": "Sparkle Bundle", "price": "0.36", "region": "A", "data": "12/3", "status": "" },
  { "name": "SpellForce III Reforced", "price": "2.52", "region": "A", "data": "8/22", "status": "" },
  { "name": "SpongeBob SquarePants: Battle for Bikini Bottom - Rehydrated", "price": "0.68", "region": "A", "data": "8/22", "status": "" },
  { "name": "SpongeBob SquarePants: The Cosmic Shake", "price": "5.94", "region": "A", "data": "8/22", "status": "" },
  { "name": "Starpoint Gemini 2", "price": "4.95", "region": "H", "data": "8/22", "status": "" },
  { "name": "Starpoint Gemini Warlords", "price": "6.50", "region": "C", "data": "8/22", "status": "" },
  { "name": "Steve Jackson's Sorcery!", "price": "0.51", "region": "A", "data": "8/22", "status": "" },
  { "name": "Stray", "price": "6.86", "region": "E", "data": "8/18", "status": "" },
  { "name": "Strayed Lights", "price": "4.10", "region": "A", "data": "8/22", "status": "" },
  { "name": "Summer in Mara + Deiland Bundle", "price": "0.41", "region": "A", "data": "8/22", "status": "" },
  { "name": "Super Hydorah", "price": "1.14", "region": "A", "data": "8/22", "status": "" },
  { "name": "Super Pixel Kid", "price": "0.04", "region": "A", "data": "8/16", "status": "" },
  { "name": "Superliminal", "price": "2.03", "region": "A", "data": "8/22", "status": "" },
  { "name": "THE HOUSE OF THE DEAD: Remake", "price": "0.34", "region": "A", "data": "8/22", "status": "" },
  { "name": "TRANSIRUBY", "price": "2.43", "region": "A", "data": "8/22", "status": "" },
  { "name": "TY the Tasmanian Tiger HD", "price": "1.36", "region": "A", "data": "8/22", "status": "" },
  { "name": "TY the Tasmanian Tiger™ 2: Bush Rescue™ HD", "price": "1.36", "region": "A", "data": "8/22", "status": "" },
  { "name": "Tales of the Neon Sea", "price": "0.65", "region": "A", "data": "8/22", "status": "" },
  { "name": "Tandem: A Tale of Shadows", "price": "0.81", "region": "A", "data": "8/22", "status": "" },
  { "name": "Tangle Tower", "price": "0.16", "region": "A", "data": "8/22", "status": "" },
  { "name": "Teacup", "price": "0.24", "region": "A", "data": "8/22", "status": "" },
  { "name": "Terror of Hemasaurus", "price": "0.40", "region": "A", "data": "8/22", "status": "" },
  { "name": "Teslagrad 2", "price": "4.82", "region": "I", "data": "8/29", "status": "" },
  { "name": "Teslagrad Power Pack Edition", "price": "7.14", "region": "I", "data": "8/29", "status": "" },
  { "name": "Teslagrad Remastered", "price": "1.73", "region": "I", "data": "8/29", "status": "" },
  { "name": "The Artful Escape", "price": "0.41", "region": "A", "data": "8/22", "status": "" },
  { "name": "The Big Con", "price": "0.21", "region": "A", "data": "8/22", "status": "" },
  { "name": "The Book of Unwritten Tales 2", "price": "0.29", "region": "A", "data": "8/22", "status": "" },
  { "name": "The Bridge", "price": "0.04", "region": "A", "data": "8/22", "status": "" },
  { "name": "The Colonists", "price": "0.49", "region": "A", "data": "8/22", "status": "" },
  { "name": "The Darkside Detective", "price": "0.40", "region": "A", "data": "8/22", "status": "" },
  { "name": "The Darkside Detective: A Fumble in the Dark", "price": "0.40", "region": "A", "data": "8/22", "status": "" },
  { "name": "The Diabolical Trilogy", "price": "0.24", "region": "A", "data": "8/22", "status": "" },
  { "name": "The Dragoness: Command of the Flame", "price": "0.73", "region": "A", "data": "8/17", "status": "" },
  { "name": "The Dwarves", "price": "0.29", "region": "A", "data": "8/22", "status": "" },
  { "name": "The Elder Scrolls Online Collection: Necrom", "price": "9.29", "region": "A", "data": "8/16", "status": "" },
  { "name": "The Elder Scrolls Online Deluxe Collection: Necrom", "price": "12.07", "region": "A", "data": "8/16", "status": "" },
  { "name": "The Elder Scrolls V: Skyrim Special Edition", "price": "1.43", "region": "A", "data": "8/16", "status": "" },
  { "name": "The Elder Scrolls® Online", "price": "0.31", "region": "A", "data": "8/16", "status": "" },
  { "name": "The Entropy Centre", "price": "3.50", "region": "A", "data": "8/22", "status": "" },
  { "name": "The Escapists: Supermax Edition", "price": "0.72", "region": "A", "data": "4/30", "status": "" },
  { "name": "The Escapists: The Walking Dead", "price": "0.14", "region": "A", "data": "8/17", "status": "" },
  { "name": "The Evil Within Digital Bundle", "price": "0.39", "region": "A", "data": "8/16", "status": "" },
  { "name": "The Forest Cathedral", "price": "0.31", "region": "A", "data": "8/22", "status": "" },
  { "name": "The Game of Life 2 - Deluxe Life Bundle", "price": "0.74", "region": "A", "data": "8/22", "status": "" },
  { "name": "The Gunk", "price": "0.51", "region": "A", "data": "8/22", "status": "" },
  { "name": "The Incredible Adventures of Van Helsing: Complete Trilogy", "price": "0.28", "region": "A", "data": "8/22", "status": "" },
  { "name": "The Jackbox Party Pack 2", "price": "0.28", "region": "A", "data": "8/22", "status": "" },
  { "name": "The Jackbox Party Pack 4", "price": "0.36", "region": "A", "data": "8/22", "status": "" },
  { "name": "The Jackbox Party Pack 7", "price": "0.74", "region": "A", "data": "8/22", "status": "" },
  { "name": "The Jackbox Party Quadpack", "price": "1.61", "region": "A", "data": "12/3", "status": "" },
  { "name": "The Legend of Tianding", "price": "2.84", "region": "A", "data": "8/22", "status": "" },
  { "name": "The Library of Babel", "price": "0.54", "region": "A", "data": "8/22", "status": "" },
  { "name": "The Lord of the Rings: Adventure Card Game - Definitive Edition", "price": "0.41", "region": "A", "data": "8/22", "status": "" },
  { "name": "The Magic Circle: Gold Edition", "price": "0.28", "region": "A", "data": "8/22", "status": "" },
  { "name": "The Pathless", "price": "6.17", "region": "A", "data": "8/22", "status": "" },
  { "name": "The Raven Remastered", "price": "0.21", "region": "A", "data": "8/22", "status": "" },
  { "name": "The Red Exile - Survival Horror", "price": "2.58", "region": "I", "data": "8/17", "status": "" },
  { "name": "The Riftbreaker", "price": "0.74", "region": "A", "data": "8/22", "status": "" },
  { "name": "The Riftbreaker Deluxe Edition", "price": "0.88", "region": "A", "data": "8/22", "status": "" },
  { "name": "The Sexy Brutale", "price": "0.14", "region": "A", "data": "8/22", "status": "" },
  { "name": "The Sojourn", "price": "0.31", "region": "A", "data": "8/22", "status": "" },
  { "name": "The Spectrum Retreat", "price": "0.13", "region": "A", "data": "8/22", "status": "" },
  { "name": "The Telltale Batman Shadows Edition", "price": "0.61", "region": "A", "data": "8/22", "status": "" },
  { "name": "The Touryst", "price": "0.41", "region": "A", "data": "8/22", "status": "" },
  { "name": "The Walking Dead: The Final Season - The Complete Season", "price": "0.23", "region": "A", "data": "8/22", "status": "" },
  { "name": "The end is nahual: If I may say so", "price": "0.21", "region": "A", "data": "8/22", "status": "" },
  { "name": "Them's Fightin' Herds", "price": "0.41", "region": "A", "data": "8/29", "status": "" },
  { "name": "Them's Fightin' Herds: Deluxe Edition", "price": "0.82", "region": "A", "data": "8/29", "status": "" },
  { "name": "There Is No Light", "price": "4.05", "region": "A", "data": "8/16", "status": "" },
  { "name": "Thimbleweed Park", "price": "0.41", "region": "A", "data": "8/22", "status": "" },
  { "name": "This Is the Police", "price": "0.14", "region": "A", "data": "8/22", "status": "" },
  { "name": "This is the Police 2", "price": "0.21", "region": "A", "data": "8/22", "status": "" },
  { "name": "Ticket to Ride", "price": "0.32", "region": "A", "data": "8/22", "status": "" },
  { "name": "Time Of War, Arkano'90", "price": "0.37", "region": "A", "data": "8/22", "status": "GOLD" },
  { "name": "Timothy vs the Aliens", "price": "0.28", "region": "A", "data": "8/22", "status": "" },
  { "name": "Titan Quest", "price": "0.21", "region": "A", "data": "8/22", "status": "" },
  { "name": "Tom Clancy's Rainbow Six® Siege Ultimate Edition", "price": "17.15", "region": "A", "data": "8/29", "status": "" },
  { "name": "Tom Clancy’s Rainbow Six® Extraction Deluxe Edition", "price": "4.29", "region": "A", "data": "8/29", "status": "" },
  { "name": "Tom Clancy’s The Division® Franchise Bundle", "price": "2.00", "region": "A", "data": "8/29", "status": "" },
  { "name": "Tony and Clyde", "price": "0.67", "region": "A", "data": "8/22", "status": "" },
  { "name": "Total Arcade Racing", "price": "0.12", "region": "A", "data": "8/22", "status": "" },
  { "name": "Total War: Warhammer III", "price": "13.72", "region": "A", "data": "8/16", "status": "" },
  { "name": "Tower Princess", "price": "2.43", "region": "A", "data": "8/22", "status": "" },
  { "name": "Trailmakers", "price": "0.49", "region": "A", "data": "8/22", "status": "" },
  { "name": "Trek to Yomi", "price": "0.49", "region": "A", "data": "8/30", "status": "" },
  { "name": "Trifox", "price": "0.57", "region": "A", "data": "8/22", "status": "" },
  { "name": "Trigger Witch", "price": "0.24", "region": "A", "data": "8/22", "status": "" },
  { "name": "Trine 4: The Nightmare Prince", "price": "0.31", "region": "A", "data": "8/22", "status": "" },
  { "name": "Trine 5: A Clockwork Conspiracy", "price": "9.98", "region": "T", "data": "8/31", "status": "" },
  { "name": "Trophy", "price": "0.20", "region": "A", "data": "8/22", "status": "" },
  { "name": "Turnip Boy Commits Tax Evasion", "price": "0.21", "region": "A", "data": "8/22", "status": "" },
  { "name": "Twelve Minutes", "price": "0.51", "region": "A", "data": "8/22", "status": "" },
  { "name": "Typoman", "price": "0.10", "region": "A", "data": "8/22", "status": "" },
  { "name": "UNO®", "price": "0.32", "region": "A", "data": "8/29", "status": "" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "0.39", "region": "A", "data": "12/3", "status": "" },
  { "name": "Unpacking", "price": "0.49", "region": "A", "data": "8/22", "status": "" },
  { "name": "Unruly Heroes", "price": "0.32", "region": "A", "data": "8/22", "status": "" },
  { "name": "Urbek City Builder", "price": "0.50", "region": "A", "data": "8/22", "status": "GOLD" },
  { "name": "VAMPYR", "price": "0.91", "region": "A", "data": "8/22", "status": "" },
  { "name": "Valfaris", "price": "0.26", "region": "A", "data": "8/22", "status": "" },
  { "name": "Valley", "price": "0.09", "region": "A", "data": "8/22", "status": "" },
  { "name": "Vampire Survivors", "price": "0.64", "region": "A", "data": "8/22", "status": "" },
  { "name": "Vampyr", "price": "0.82", "region": "A", "data": "8/22", "status": "GOLD" },
  { "name": "Venus: Improbable Dream", "price": "0.20", "region": "A", "data": "8/22", "status": "" },
  { "name": "Vermintide - Digital Value Pack", "price": "1.14", "region": "A", "data": "3/7/", "status": "" },
  { "name": "Violett Remastered", "price": "0.04", "region": "A", "data": "8/22", "status": "GOLD" },
  { "name": "WINGSPAN", "price": "0.41", "region": "A", "data": "8/22", "status": "" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "1.82", "region": "A", "data": "8/31", "status": "" },
  { "name": "Warhammer 40,000: Shootas, Blood & Teef", "price": "1.80", "region": "A", "data": "8/22", "status": "" },
  { "name": "Warhammer 40,000: Space Wolf", "price": "0.55", "region": "A", "data": "8/22", "status": "" },
  { "name": "Watch Dogs®: Legion Gold Edition", "price": "3.14", "region": "A", "data": "8/29", "status": "" },
  { "name": "Wave Break", "price": "0.49", "region": "A", "data": "8/22", "status": "" },
  { "name": "Wavetale", "price": "3.65", "region": "A", "data": "8/22", "status": "" },
  { "name": "Way of the Hunter", "price": "2.73", "region": "A", "data": "8/22", "status": "" },
  { "name": "Way of the Hunter: Elite Edition", "price": "3.77", "region": "A", "data": "8/22", "status": "" },
  { "name": "We Are The Dwarves", "price": "0.41", "region": "A", "data": "8/22", "status": "" },
  { "name": "What Remains of Edith Finch", "price": "0.14", "region": "A", "data": "8/22", "status": "" },
  { "name": "Whispike Survivors", "price": "0.11", "region": "A", "data": "8/18", "status": "" },
  { "name": "White Shadows", "price": "0.32", "region": "A", "data": "8/22", "status": "" },
  { "name": "WildTrax Racing", "price": "0.26", "region": "A", "data": "8/19", "status": "" },
  { "name": "Wobbly Life", "price": "0.56", "region": "A", "data": "8/22", "status": "" },
  { "name": "Wolfenstein II: Standard Edition", "price": "0.65", "region": "A", "data": "8/16", "status": "" },
  { "name": "Wolfenstein: Alt History Collection", "price": "1.54", "region": "A", "data": "8/16", "status": "" },
  { "name": "Wolfenstein: Youngblood Deluxe Edition", "price": "1.00", "region": "A", "data": "8/16", "status": "" },
  { "name": "Wolfenstein® II: The New Colossus™", "price": "0.65", "region": "A", "data": "8/16", "status": "" },
  { "name": "Wolfenstein®: The Two-Pack", "price": "0.34", "region": "A", "data": "8/16", "status": "" },
  { "name": "Work from Home", "price": "2.84", "region": "A", "data": "8/22", "status": "" },
  { "name": "World Soccer Pinball", "price": "0.10", "region": "A", "data": "8/26", "status": "" },
  { "name": "World of Van Helsing: Deathtrap", "price": "0.09", "region": "A", "data": "8/22", "status": "" },
  { "name": "Wreckfest", "price": "0.82", "region": "A", "data": "8/22", "status": "" },
  { "name": "Wreckfest Complete Edition", "price": "1.37", "region": "A", "data": "8/22", "status": "" },
  { "name": "X-Pack", "price": "0.45", "region": "A", "data": "8/30", "status": "" },
  { "name": "Xuan Yuan Sword 7", "price": "4.57", "region": "A", "data": "8/22", "status": "" },
  { "name": "de Blob", "price": "0.14", "region": "A", "data": "8/22", "status": "" },
  { "name": "de Blob 2", "price": "0.21", "region": "A", "data": "8/22", "status": "" }
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
