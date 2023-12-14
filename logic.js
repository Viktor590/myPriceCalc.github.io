const input = document.querySelector('.input');
const output = document.querySelector('.output-res');
const output2 = document.querySelector('.output-res2');
const list = document.querySelector('.list')
const showBtn = document.querySelector('.show')


showBtn.addEventListener('click', () => {
  showBtn.classList.contains('active') ?
    hiddenMenu() : showMenu()
})

let usd = 105;

const arr = [
  { "name": "'n Verlore Verstand", "price": "0.03", "region": "A", "data": "12/19", "status": "" },
  { "name": "11-11 Memories Retold", "price": "0.23", "region": "A", "data": "12/15", "status": "" },
  { "name": "3D Billiards - Pool & Snooker - Remastered", "price": "0.16", "region": "A", "data": "12/19", "status": "" },
  { "name": "890B", "price": "0.04", "region": "A", "data": "12/19", "status": "" },
  { "name": "9 Monkeys of Shaolin", "price": "0.30", "region": "A", "data": "12/15", "status": "" },
  { "name": "A Frog's Job", "price": "0.04", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Aces of the Luftwaffe Squadron - Extended Edition", "price": "0.08", "region": "A", "data": "12/15", "status": "" },
  { "name": "Adventure Time: Pirates of the Enchiridion", "price": "1.09", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Aeon Must Die!", "price": "0.62", "region": "A", "data": "12/15", "status": "" },
  { "name": "Aery - A New Frontier", "price": "0.11", "region": "A", "data": "12/19", "status": "" },
  { "name": "Aery - Broken Memories", "price": "0.16", "region": "A", "data": "12/19", "status": "" },
  { "name": "Aery - Flow of Time", "price": "0.12", "region": "A", "data": "12/19", "status": "" },
  { "name": "Agatha Christie - Hercule Poirot: The First Cases", "price": "0.11", "region": "A", "data": "12/15", "status": "" },
  { "name": "Agatha Christie - The ABC Murders", "price": "0.47", "region": "A", "data": "12/15", "status": "" },
  { "name": "Agents of Mayhem", "price": "0.04", "region": "A", "data": "12/15", "status": "" },
  { "name": "Agents of Mayhem - Total Mayhem Bundle", "price": "0.04", "region": "A", "data": "12/15", "status": "" },
  { "name": "Agony", "price": "0.04", "region": "A", "data": "12/15", "status": "" },
  { "name": "Aircraft Carrier Survival", "price": "0.32", "region": "A", "data": "12/15", "status": "" },
  { "name": "Alba: A Wildlife Adventure", "price": "0.14", "region": "A", "data": "12/19", "status": "GOLD" },
  { "name": "Alfred Hitchcock - Vertigo", "price": "0.08", "region": "A", "data": "12/19", "status": "GOLD" },
  { "name": "Alien: Isolation - The Collection", "price": "1.34", "region": "A", "data": "12/15", "status": "" },
  { "name": "Aliens: Fireteam Elite Into the Hive Edition", "price": "3.12", "region": "A", "data": "12/19", "status": "GOLD" },
  { "name": "Alone in the Dark", "price": "4.39", "region": "A", "data": "1/17/", "status": "" },
  { "name": "Alone in the Dark - Digital Deluxe Edition", "price": "5.06", "region": "A", "data": "1/17/", "status": "" },
  { "name": "Angels with Scaly Wings", "price": "0.09", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Anno 1800™ Console Edition", "price": "2.81", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Anodyne 2", "price": "0.14", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Aquadine", "price": "0.14", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Arcadian Atlas", "price": "0.16", "region": "A", "data": "12/15", "status": "" },
  { "name": "Archaica: The Path Of Light", "price": "0.07", "region": "A", "data": "12/19", "status": "" },
  { "name": "Ash of Gods Redemption", "price": "0.20", "region": "A", "data": "12/15", "status": "" },
  { "name": "Ashen", "price": "0.18", "region": "A", "data": "12/15", "status": "" },
  { "name": "Ashen: Definitive Edition", "price": "0.21", "region": "A", "data": "12/15", "status": "" },
  { "name": "Assassin's Creed Antiquity Pack", "price": "1.00", "region": "A", "data": "12/15", "status": "" },
  { "name": "Assassin's Creed Triple Pack: Black Flag, Unity, Syndicate", "price": "0.28", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Assassin's Creed® Bundle: Assassin's Creed® Valhalla, Ass...", "price": "2.50", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Assassin's Creed® Chronicles: Russia", "price": "0.05", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Assassin's Creed® Odyssey - DELUXE EDITION", "price": "0.75", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Assassin's Creed® Odyssey - GOLD EDITION", "price": "0.94", "region": "A", "data": "12/14", "status": "" },
  { "name": "Assassin's Creed® Origins - DELUXE EDITION", "price": "0.69", "region": "A", "data": "12/14", "status": "" },
  { "name": "Assassin's Creed® Origins - GOLD EDITION", "price": "0.94", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Assassin's Creed® Syndicate Gold Edition", "price": "0.94", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Assassin's Creed® Valhalla Deluxe Edition", "price": "1.56", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Assassin’s Creed® Valhalla + Immortals Fenyx Rising™ Bundle", "price": "1.62", "region": "A", "data": "12/14", "status": "" },
  { "name": "Assassin’s Creed® Valhalla + Watch Dogs®: Legion Bundle", "price": "1.62", "region": "A", "data": "12/14", "status": "" },
  { "name": "Asterix & Obelix XXL3: The Crystal Menhir", "price": "0.62", "region": "A", "data": "12/15", "status": "" },
  { "name": "Asterix & Obelix XXL: Romastered", "price": "0.62", "region": "A", "data": "12/15", "status": "" },
  { "name": "Asterix & Obelix XXXL : The Ram of Hibernia", "price": "1.03", "region": "A", "data": "12/15", "status": "" },
  { "name": "Avatar The Last Airbender: Quest for Balance", "price": "8.12", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Awarded Platformer Bundle", "price": "0.21", "region": "A", "data": "12/31", "status": "" },
  { "name": "Aztek Tiki Talisman", "price": "0.10", "region": "A", "data": "12/29", "status": "" },
  { "name": "BIOHAZARD 7 resident evil グロテスクVer.", "price": "5.61", "region": "J", "data": "12/14", "status": "" },
  { "name": "BIOHAZARD VILLAGE Z version GOLD EDITION", "price": "16.89", "region": "J", "data": "12/14", "status": "" },
  { "name": "Baby Shark™: Sing & Swim Party", "price": "3.12", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Back 4 Blood", "price": "0.94", "region": "A", "data": "12/15", "status": "" },
  { "name": "Bad North: Jotunn Edition", "price": "0.04", "region": "A", "data": "12/19", "status": "" },
  { "name": "Baja: Edge of Control HD", "price": "0.09", "region": "A", "data": "12/15", "status": "" },
  { "name": "Baldur's Gate and Baldur's Gate II: Enhanced Editions", "price": "0.18", "region": "A", "data": "12/15", "status": "" },
  { "name": "Batman: Return to Arkham", "price": "0.31", "region": "A", "data": "12/15", "status": "" },
  { "name": "Batman™: Arkham Knight", "price": "0.27", "region": "A", "data": "12/15", "status": "" },
  { "name": "Battle Chasers: Nightwar", "price": "0.09", "region": "A", "data": "12/15", "status": "" },
  { "name": "Battle Stations Blockade", "price": "3.00", "region": "A", "data": "12/21", "status": "" },
  { "name": "Battle Worlds: Kronos", "price": "0.06", "region": "A", "data": "12/15", "status": "" },
  { "name": "Battlefield 4", "price": "0.07", "region": "A", "data": "12/14", "status": "" },
  { "name": "Battlefield V Definitive Edition", "price": "0.44", "region": "A", "data": "12/14", "status": "" },
  { "name": "Battlefield™ 1", "price": "0.09", "region": "A", "data": "12/14", "status": "" },
  { "name": "Battlefield™ 1 Revolution", "price": "0.14", "region": "A", "data": "12/14", "status": "" },
  { "name": "Battlefield™ 2042 Elite Edition Xbox One & Xbox Series X|S", "price": "3.30", "region": "A", "data": "12/14", "status": "" },
  { "name": "Battlefield™ 2042 Xbox One", "price": "1.60", "region": "A", "data": "12/14", "status": "" },
  { "name": "Battlefield™ 2042 Xbox One & Xbox Series X|S", "price": "1.60", "region": "A", "data": "12/14", "status": "" },
  { "name": "Battlefield™ V Standard Edition", "price": "0.29", "region": "A", "data": "12/14", "status": "" },
  { "name": "Bayonetta", "price": "0.28", "region": "A", "data": "12/15", "status": "" },
  { "name": "Ben 10", "price": "1.28", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Ben 10: Power Trip", "price": "1.75", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Bestial Reception", "price": "0.07", "region": "A", "data": "12/22", "status": "" },
  { "name": "Bestial Reception (Windows)", "price": "0.07", "region": "A", "data": "12/22", "status": "" },
  { "name": "Big Buck Hunter Arcade", "price": "0.02", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Big Crown: Showdown", "price": "0.14", "region": "A", "data": "12/15", "status": "" },
  { "name": "Bit Orchard: Animal Valley Deluxe Edition", "price": "0.02", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Black Book", "price": "0.20", "region": "A", "data": "12/19", "status": "" },
  { "name": "Blackberry Honey", "price": "0.07", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Blasphemous", "price": "0.11", "region": "A", "data": "12/15", "status": "" },
  { "name": "Blaze and the Monster Machines: Axle City Racers", "price": "1.27", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Blood Knights", "price": "0.03", "region": "A", "data": "12/15", "status": "" },
  { "name": "Bluey: The Videogame", "price": "4.50", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Bratz®: Flaunt your fashion - Complete Edition", "price": "3.37", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Brave Soldier - Invasion of Cyborgs", "price": "0.87", "region": "A", "data": "12/19", "status": "" },
  { "name": "Broken Universe + Brawl Chess", "price": "0.06", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Broken Universe - Tower Defense", "price": "0.04", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Broken Universe - Tower Defense + Cyber Protocol", "price": "0.07", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Bumballon", "price": "0.04", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "C14 Dating", "price": "0.11", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Caffeine: Victoria's Legacy", "price": "0.15", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Cake Invaders", "price": "0.04", "region": "A", "data": "12/19", "status": "" },
  { "name": "Call of Duty®: Modern Warfare® III - Cross-Gen Bundle", "price": "16.25", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Call of the Sea", "price": "0.14", "region": "A", "data": "12/19", "status": "" },
  { "name": "Cars 3: Driven to Win", "price": "0.28", "region": "A", "data": "12/15", "status": "" },
  { "name": "Cat Quest II", "price": "0.07", "region": "A", "data": "12/15", "status": "" },
  { "name": "Cat Souls", "price": "0.04", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Catmaze", "price": "0.09", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Chasing Static", "price": "0.11", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Chasm", "price": "0.06", "region": "A", "data": "12/19", "status": "" },
  { "name": "Children of Zodiarcs", "price": "0.08", "region": "A", "data": "12/15", "status": "" },
  { "name": "Chivalry 2", "price": "0.29", "region": "A", "data": "12/19", "status": "GOLD" },
  { "name": "Circa Infinity", "price": "0.05", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Clumsy Rush", "price": "0.05", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Clumsy Rush + Brawl Chess Family Bundle", "price": "0.05", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Cobra Kai 2: Dojos Rising", "price": "0.97", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Cobra Kai 2: Dojos Rising - Nemesis Edition", "price": "1.12", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Cobra Kai: The Karate Kid Saga Continues", "price": "0.47", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Company of Heroes 3: Premium Edition", "price": "7.88", "region": "A", "data": "12/14", "status": "" },
  { "name": "Concept Destruction", "price": "0.04", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Cosmic Top Secret", "price": "0.18", "region": "A", "data": "12/19", "status": "" },
  { "name": "Crackdown 3", "price": "0.62", "region": "A", "data": "12/14", "status": "" },
  { "name": "Crazy Sports Bundle", "price": "0.01", "region": "A", "data": "12/15", "status": "" },
  { "name": "Crimson Dragon", "price": "0.05", "region": "A", "data": "12/14", "status": "" },
  { "name": "Cube Airport", "price": "0.04", "region": "A", "data": "12/19", "status": "" },
  { "name": "Cyber Protocol", "price": "0.05", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Cyber Protocol + Clumsy Rush + Brawl Chess", "price": "0.05", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "CyberHeroes Arena DX", "price": "0.04", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Cyberpunk 2077", "price": "6.25", "region": "A", "data": "12/14", "status": "" },
  { "name": "Cyberpunk 2077: Ultimate Edition", "price": "11.18", "region": "A", "data": "12/14", "status": "" },
  { "name": "D4: Dark Dreams Don't Die", "price": "0.05", "region": "A", "data": "12/14", "status": "" },
  { "name": "DC's Justice League: Cosmic Chaos", "price": "1.97", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "DEATHLOOP", "price": "2.50", "region": "A", "data": "12/14", "status": "" },
  { "name": "DEATHLOOP Deluxe Edition", "price": "3.25", "region": "A", "data": "12/14", "status": "" },
  { "name": "DETECTIVE - Stella Porta case", "price": "0.17", "region": "A", "data": "12/21", "status": "" },
  { "name": "DOOM", "price": "0.81", "region": "T", "data": "12/14", "status": "" },
  { "name": "DOOM Eternal: The Ancient Gods - Part One", "price": "1.70", "region": "A", "data": "12/15", "status": "" },
  { "name": "DOOM Eternal: The Ancient Gods - Part Two", "price": "1.70", "region": "A", "data": "12/15", "status": "" },
  { "name": "DRAGON BALL XENOVERSE", "price": "0.15", "region": "A", "data": "12/15", "status": "" },
  { "name": "DRIFTCE", "price": "0.94", "region": "A", "data": "12/16", "status": "" },
  { "name": "Dead Space", "price": "4.50", "region": "A", "data": "12/14", "status": "" },
  { "name": "Dead Space Digital Deluxe Edition", "price": "1.31", "region": "A", "data": "12/14", "status": "" },
  { "name": "Deadlight: Director's Cut", "price": "0.02", "region": "A", "data": "12/15", "status": "" },
  { "name": "Debtor: Enhanced Edition", "price": "0.06", "region": "A", "data": "12/19", "status": "" },
  { "name": "Deep Sky Derelicts: Definitive edition", "price": "0.09", "region": "A", "data": "12/19", "status": "GOLD" },
  { "name": "Deep Space Anomaly", "price": "0.06", "region": "A", "data": "12/19", "status": "" },
  { "name": "Deflector", "price": "0.08", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles Digital Deluxe Edition", "price": "8.61", "region": "T", "data": "12/14", "status": "" },
  { "name": "Detective Di: The Silk Rose Murders", "price": "0.05", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Devious Dungeon Collection", "price": "0.07", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Digital Deluxe Upgrade featuring LEGO®", "price": "4.87", "region": "A", "data": "12/15", "status": "" },
  { "name": "Dinobreak Strange Mutations Collection", "price": "0.81", "region": "A", "data": "12/19", "status": "GOLD" },
  { "name": "Dinobreak Triassic Torment Collection", "price": "0.50", "region": "A", "data": "12/19", "status": "GOLD" },
  { "name": "Discolored", "price": "0.09", "region": "A", "data": "12/19", "status": "GOLD" },
  { "name": "Dishonored 2", "price": "0.62", "region": "A", "data": "12/14", "status": "" },
  { "name": "Disjunction", "price": "0.07", "region": "A", "data": "12/15", "status": "" },
  { "name": "Divination: Console Edition", "price": "0.04", "region": "A", "data": "12/19", "status": "" },
  { "name": "Dofamine", "price": "0.06", "region": "A", "data": "12/14", "status": "" },
  { "name": "Dolmen", "price": "0.62", "region": "A", "data": "12/15", "status": "" },
  { "name": "Dou", "price": "0.02", "region": "A", "data": "12/26", "status": "" },
  { "name": "Double Cross", "price": "0.07", "region": "A", "data": "12/15", "status": "" },
  { "name": "Double Kick Heroes", "price": "0.18", "region": "A", "data": "12/19", "status": "" },
  { "name": "Dragon Pinball", "price": "0.03", "region": "A", "data": "12/19", "status": "" },
  { "name": "Drawful 2", "price": "0.03", "region": "A", "data": "12/15", "status": "" },
  { "name": "DreamWorks All-Star Kart Racing", "price": "6.25", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "DreamWorks All-Star Kart Racing Rally Edition", "price": "8.12", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "DreamWorks Dragons: Legends of The Nine Realms", "price": "2.75", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "DreamWorks Spirit Lucky's Big Adventure", "price": "1.53", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "DreamWorks Trolls Remix Rescue", "price": "8.12", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "DreamWorks Trolls Remix Rescue Deluxe Edition", "price": "8.75", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Drunken Fist 2: Zombie Hangover", "price": "0.07", "region": "A", "data": "12/19", "status": "" },
  { "name": "EA SPORTS FC™ 24 Standard Edition Xbox One & Xbox Series X|S", "price": "9.19", "region": "A", "data": "12/14", "status": "" },
  { "name": "EA SPORTS FC™ 24 Standard Edition Xbox One & Xbox Series X|S", "price": "21.44", "region": "A", "data": "12/31", "status": "" },
  { "name": "EA SPORTS FC™ 24 Ultimate Edition Xbox One & Xbox Series X|S", "price": "17.50", "region": "A", "data": "12/14", "status": "" },
  { "name": "El Gancho", "price": "0.05", "region": "A", "data": "12/19", "status": "" },
  { "name": "El Hijo - A Wild West Tale", "price": "0.09", "region": "A", "data": "12/15", "status": "" },
  { "name": "Elderand", "price": "0.28", "region": "A", "data": "12/15", "status": "" },
  { "name": "EleMetals Deluxe Edition", "price": "0.01", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Elex", "price": "0.46", "region": "A", "data": "12/15", "status": "" },
  { "name": "Elite Dangerous Standard Edition", "price": "0.09", "region": "A", "data": "12/15", "status": "" },
  { "name": "Epic Chef", "price": "0.75", "region": "A", "data": "12/15", "status": "" },
  { "name": "Escape 2088", "price": "0.03", "region": "A", "data": "12/19", "status": "" },
  { "name": "Escape Dead Island", "price": "0.05", "region": "A", "data": "12/31", "status": "" },
  { "name": "Escape First Alchemist", "price": "0.11", "region": "A", "data": "12/19", "status": "" },
  { "name": "Evil Nun: The Broken Mask", "price": "1.74", "region": "T", "data": "12/22", "status": "" },
  { "name": "Explosive Candy World", "price": "0.04", "region": "A", "data": "12/19", "status": "" },
  { "name": "F1® 23", "price": "4.50", "region": "A", "data": "12/14", "status": "" },
  { "name": "F1® 23 Champions Edition", "price": "8.00", "region": "A", "data": "12/14", "status": "" },
  { "name": "FAR CRY 4 + FAR CRY PRIMAL BUNDLE", "price": "0.78", "region": "A", "data": "12/15", "status": "" },
  { "name": "FAR CRY ANTHOLOGY BUNDLE", "price": "2.19", "region": "A", "data": "12/14", "status": "" },
  { "name": "FMV Comedy Bundle", "price": "0.29", "region": "A", "data": "12/19", "status": "GOLD" },
  { "name": "FOR HONOR™ Standard Edition", "price": "0.28", "region": "A", "data": "12/15", "status": "" },
  { "name": "Fantasy Defenders Bundle: Defend the Rook & Legend of Keepers", "price": "1.84", "region": "A", "data": "12/19", "status": "GOLD" },
  { "name": "Fantasy Defenders Complete Bundle: Defend the Rook & Legend of Keepers", "price": "2.54", "region": "A", "data": "12/19", "status": "" },
  { "name": "Far Cry Insanity Bundle", "price": "1.00", "region": "A", "data": "12/15", "status": "" },
  { "name": "Far Cry® 5 + Far Cry® New Dawn Deluxe Edition Bundle", "price": "0.66", "region": "A", "data": "12/14", "status": "" },
  { "name": "Far Cry® 6 Deluxe Edition", "price": "2.50", "region": "A", "data": "12/14", "status": "" },
  { "name": "Far Cry® 6 Game of the Year Edition", "price": "3.75", "region": "A", "data": "12/14", "status": "" },
  { "name": "Far Cry® 6 Gold Edition", "price": "2.50", "region": "A", "data": "12/14", "status": "" },
  { "name": "Fast & Furious: Spy Racers Rise of SH1FT3R", "price": "1.27", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Fearmonium", "price": "0.19", "region": "A", "data": "12/23", "status": "" },
  { "name": "Firegirl: Hack 'n Splash Rescue DX", "price": "0.32", "region": "A", "data": "12/15", "status": "" },
  { "name": "Flying Islands Games Bundle", "price": "0.11", "region": "A", "data": "12/19", "status": "" },
  { "name": "For Honor® Complete Edition", "price": "1.25", "region": "A", "data": "12/14", "status": "" },
  { "name": "Frane: Dragons' Odyssey", "price": "0.13", "region": "A", "data": "12/19", "status": "" },
  { "name": "Fusion Bundle", "price": "6.19", "region": "A", "data": "12/15", "status": "" },
  { "name": "Galaxy of Pen & Paper +1 Edition", "price": "0.08", "region": "A", "data": "12/19", "status": "" },
  { "name": "Garfield Kart Furious Racing", "price": "0.09", "region": "A", "data": "12/15", "status": "" },
  { "name": "Garlic", "price": "0.13", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Generation Zero ® - Essential DLC Bundle", "price": "0.18", "region": "A", "data": "12/15", "status": "" },
  { "name": "Generation Zero ® - Exterminator DLC Bundle", "price": "0.27", "region": "A", "data": "12/15", "status": "" },
  { "name": "Generation Zero®", "price": "0.33", "region": "A", "data": "12/15", "status": "" },
  { "name": "Generation Zero® - Resistance Bundle", "price": "0.36", "region": "A", "data": "12/15", "status": "" },
  { "name": "Get Even", "price": "0.19", "region": "A", "data": "12/15", "status": "" },
  { "name": "Get Packed", "price": "0.09", "region": "A", "data": "12/19", "status": "GOLD" },
  { "name": "Gigantosaurus: Dino Kart", "price": "1.91", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Gigapocalypse", "price": "0.05", "region": "A", "data": "12/19", "status": "" },
  { "name": "God of Rock", "price": "0.94", "region": "A", "data": "12/14", "status": "" },
  { "name": "Gods Will Fall", "price": "0.19", "region": "A", "data": "12/15", "status": "" },
  { "name": "Gods Will Fall - Valiant Edition", "price": "0.30", "region": "A", "data": "12/15", "status": "" },
  { "name": "Gotham Knights", "price": "2.00", "region": "A", "data": "12/15", "status": "" },
  { "name": "Grand Prix Rock 'N Racing", "price": "0.05", "region": "A", "data": "12/19", "status": "" },
  { "name": "Gravel", "price": "0.25", "region": "A", "data": "12/15", "status": "" },
  { "name": "Gravel Special Edition", "price": "0.37", "region": "A", "data": "12/15", "status": "" },
  { "name": "Greak: Memories of Azur", "price": "0.28", "region": "A", "data": "12/15", "status": "" },
  { "name": "Gungrave G.O.R.E", "price": "1.56", "region": "A", "data": "12/15", "status": "" },
  { "name": "HARDCORE MECHA", "price": "7.00", "region": "A", "data": "12/21", "status": "" },
  { "name": "HITMAN World of Assassination Deluxe Pack", "price": "0.38", "region": "A", "data": "12/15", "status": "" },
  { "name": "HOT WHEELS UNLEASHED 2 - Turbocharged™", "price": "14.44", "region": "A", "data": "12/14", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ 2 - Turbocharged - Deluxe Edition", "price": "20.56", "region": "A", "data": "12/14", "status": "" },
  { "name": "HOT WHEELS UNLEASHED™ 2 - Turbocharged - Legendary Edition", "price": "26.25", "region": "A", "data": "12/14", "status": "" },
  { "name": "HUMANKIND™ - Heritage Edition", "price": "10.78", "region": "A", "data": "12/14", "status": "" },
  { "name": "HUMANKIND™ - Upgrade Pack, Standard to Heritage Edition", "price": "2.25", "region": "E", "data": "12/15", "status": "" },
  { "name": "Have a Nice Death", "price": "2.50", "region": "A", "data": "12/19", "status": "" },
  { "name": "Hazelight Bundle", "price": "2.00", "region": "A", "data": "12/14", "status": "" },
  { "name": "Heavy Burden", "price": "0.07", "region": "A", "data": "12/14", "status": "" },
  { "name": "Hell Let Loose", "price": "10.07", "region": "T", "data": "12/14", "status": "" },
  { "name": "Hell Let Loose - Deluxe Edition", "price": "15.44", "region": "A", "data": "12/14", "status": "" },
  { "name": "Hell Well", "price": "1.50", "region": "A", "data": "12/28", "status": "" },
  { "name": "Hellblade: Senua's Sacrifice", "price": "0.07", "region": "A", "data": "12/14", "status": "" },
  { "name": "Hi-Fi RUSH", "price": "4.69", "region": "A", "data": "12/14", "status": "" },
  { "name": "Hi-Fi RUSH Deluxe Edition", "price": "6.12", "region": "A", "data": "12/14", "status": "" },
  { "name": "Hokko Life", "price": "0.39", "region": "A", "data": "12/15", "status": "" },
  { "name": "How to Fool a Liar King Remastered", "price": "0.13", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Howl", "price": "1.18", "region": "A", "data": "12/19", "status": "GOLD" },
  { "name": "Hunting Simulator 2 Xbox One", "price": "0.21", "region": "A", "data": "12/15", "status": "" },
  { "name": "Hunting Simulator 2 Xbox Series X|S", "price": "0.18", "region": "A", "data": "12/15", "status": "" },
  { "name": "Ice Age Scrat's Nutty Adventure", "price": "1.31", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Immortals of Aveum™", "price": "6.00", "region": "A", "data": "12/14", "status": "" },
  { "name": "Immortals of Aveum™ Deluxe Edition", "price": "7.00", "region": "A", "data": "12/14", "status": "" },
  { "name": "Injustice™ 2", "price": "0.19", "region": "A", "data": "12/15", "status": "" },
  { "name": "InnerSpace", "price": "0.01", "region": "A", "data": "12/15", "status": "" },
  { "name": "Insurgency: Sandstorm - Gold Edition", "price": "15.62", "region": "A", "data": "12/19", "status": "GOLD" },
  { "name": "Intrepid Izzy", "price": "0.10", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Islanders", "price": "0.05", "region": "A", "data": "12/19", "status": "" },
  { "name": "It Takes Two - Digital Version", "price": "1.31", "region": "A", "data": "12/14", "status": "" },
  { "name": "Joy Ball Adventure", "price": "0.02", "region": "A", "data": "12/27", "status": "" },
  { "name": "Jumanji: Wild Adventures", "price": "5.00", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Jump King", "price": "0.09", "region": "A", "data": "12/19", "status": "GOLD" },
  { "name": "Jurassic Pinball", "price": "0.03", "region": "A", "data": "12/19", "status": "" },
  { "name": "Jurassic World Evolution", "price": "0.16", "region": "A", "data": "12/15", "status": "" },
  { "name": "Jurassic World Evolution 2", "price": "2.03", "region": "A", "data": "12/15", "status": "" },
  { "name": "Jurassic World Evolution: Expansion Collection", "price": "0.29", "region": "A", "data": "12/15", "status": "" },
  { "name": "Just Die Already", "price": "0.08", "region": "A", "data": "12/19", "status": "GOLD" },
  { "name": "Katamari Damacy REROLL", "price": "0.62", "region": "A", "data": "12/15", "status": "" },
  { "name": "King's Bounty II - Lord's Edition", "price": "0.84", "region": "A", "data": "12/15", "status": "" },
  { "name": "Kingdom Treasury Collection", "price": "0.07", "region": "A", "data": "12/19", "status": "" },
  { "name": "Knights of Pen and Paper +1 Deluxier Edition", "price": "0.05", "region": "A", "data": "12/19", "status": "" },
  { "name": "Kung Fu Fighting", "price": "0.02", "region": "A", "data": "12/17", "status": "" },
  { "name": "L.O.L. Surprise! B.B.s BORN TO TRAVEL™", "price": "1.70", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "LEGO® Batman™ 3: Beyond Gotham", "price": "0.17", "region": "A", "data": "12/15", "status": "" },
  { "name": "LEGO® CITY Undercover", "price": "0.25", "region": "A", "data": "12/15", "status": "" },
  { "name": "LEGO® DC Heroes & Villains-Bundle", "price": "1.34", "region": "T", "data": "12/14", "status": "" },
  { "name": "LEGO® DC Super-Villains", "price": "0.36", "region": "A", "data": "12/15", "status": "" },
  { "name": "LEGO® Harry Potter™ Collection", "price": "0.28", "region": "A", "data": "12/14", "status": "" },
  { "name": "LEGO® Marvel Collection", "price": "1.41", "region": "A", "data": "12/14", "status": "" },
  { "name": "LEGO® Marvel Super Heroes 2", "price": "0.30", "region": "A", "data": "12/15", "status": "" },
  { "name": "LEGO® Marvel's Avengers", "price": "0.34", "region": "A", "data": "12/15", "status": "" },
  { "name": "LEGO® The Hobbit™", "price": "0.41", "region": "A", "data": "12/15", "status": "" },
  { "name": "LEGO® The Incredibles", "price": "0.22", "region": "A", "data": "12/14", "status": "" },
  { "name": "LEGO® Worlds", "price": "0.20", "region": "A", "data": "12/15", "status": "" },
  { "name": "League of Enthusiastic Losers", "price": "0.04", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "League of Enthusiastic Losers + Brawl Chess", "price": "0.05", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "League of Enthusiastic Losers + Cyber Protocol", "price": "0.05", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Leisure Suit Larry - Wet Dreams Don't Dry", "price": "0.19", "region": "A", "data": "12/19", "status": "GOLD" },
  { "name": "Let's Sing 2023", "price": "4.53", "region": "A", "data": "12/19", "status": "GOLD" },
  { "name": "Let's Sing 2023 Hits Français et Internationaux", "price": "26.42", "region": "S", "data": "12/19", "status": "GOLD" },
  { "name": "Let's Sing 2023 Hits Français et Internationaux Platinum Edition", "price": "59.90", "region": "S", "data": "12/19", "status": "GOLD" },
  { "name": "Let's Sing 2023 Platinum Edition", "price": "10.31", "region": "A", "data": "12/19", "status": "GOLD" },
  { "name": "Let's Sing 2023 mit deutschen Hits", "price": "23.95", "region": "E", "data": "12/19", "status": "GOLD" },
  { "name": "Let's Sing 2023 mit deutschen Hits Platinum Edition", "price": "53.91", "region": "E", "data": "12/19", "status": "GOLD" },
  { "name": "Let's Sing 2023 with Hits from Australia & NZ", "price": "21.88", "region": "N", "data": "12/19", "status": "GOLD" },
  { "name": "Let's Sing ABBA", "price": "7.56", "region": "A", "data": "12/19", "status": "GOLD" },
  { "name": "Let’s Sing 2023 with Hits from Australia & NZ Platinum Edition", "price": "47.92", "region": "A", "data": "12/19", "status": "GOLD" },
  { "name": "Life of Fly", "price": "0.16", "region": "A", "data": "12/19", "status": "GOLD" },
  { "name": "Light & Dark Bundle", "price": "2.00", "region": "A", "data": "11/2/", "status": "" },
  { "name": "Little Bug", "price": "0.05", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Little League World Series Baseball 2022", "price": "0.97", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Little Mouse's Encyclopedia + Brawl Chess", "price": "0.01", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Little Mouse's Encyclopedia + Clumsy Rush", "price": "0.05", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Little Mouse's Encyclopedia + Cyber Protocol", "price": "0.04", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Long Ago: A Puzzle Tale", "price": "0.22", "region": "A", "data": "12/19", "status": "" },
  { "name": "Lootbox Lyfe+", "price": "0.09", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Lost Artifacts: Time Machine", "price": "0.07", "region": "A", "data": "12/19", "status": "" },
  { "name": "MONOPOLY DEAL", "price": "0.01", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "MONSTER HUNTER: WORLD™", "price": "3.54", "region": "A", "data": "12/14", "status": "" },
  { "name": "MXGP 2019 - The Official Motocross Videogame", "price": "0.19", "region": "A", "data": "12/15", "status": "" },
  { "name": "MXGP PRO", "price": "0.16", "region": "A", "data": "12/15", "status": "" },
  { "name": "MY LITTLE PONY: A Maretime Bay Adventure", "price": "1.70", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Mad Max", "price": "0.25", "region": "A", "data": "12/15", "status": "" },
  { "name": "Madden NFL 19", "price": "29.78", "region": "C", "data": "12/30", "status": "" },
  { "name": "Madden NFL 23 Xbox One", "price": "6.40", "region": "A", "data": "12/31", "status": "" },
  { "name": "Madden NFL 23 Xbox Series X|S", "price": "7.50", "region": "A", "data": "12/31", "status": "" },
  { "name": "Madden NFL 24", "price": "7.50", "region": "A", "data": "12/14", "status": "" },
  { "name": "Madden NFL 24 Deluxe Edition Xbox Series X|S & Xbox One", "price": "8.80", "region": "A", "data": "12/14", "status": "" },
  { "name": "Madden NFL 24: Michael Vick 20th Anniversary Edition Xbox One & Xbox Series X|S", "price": "39.99", "region": "U", "data": "12/14", "status": "" },
  { "name": "Many Faces: Console Edition", "price": "0.03", "region": "A", "data": "12/19", "status": "" },
  { "name": "Maquette", "price": "0.14", "region": "A", "data": "12/19", "status": "GOLD" },
  { "name": "Mato Anomalies", "price": "2.31", "region": "A", "data": "12/15", "status": "" },
  { "name": "Mato Anomalies Digital Deluxe Edition", "price": "2.62", "region": "A", "data": "12/15", "status": "" },
  { "name": "Max: The Curse of Brotherhood", "price": "0.05", "region": "A", "data": "12/14", "status": "" },
  { "name": "Meet Your Maker: Sector 1 Bundle", "price": "0.79", "region": "A", "data": "1/2/2", "status": "" },
  { "name": "Meet Your Maker: Sector 2 Bundle", "price": "0.79", "region": "A", "data": "1/2/2", "status": "" },
  { "name": "Metal Mind", "price": "3.49", "region": "A", "data": "12/28", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.00", "region": "U", "data": "12/1/", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.00", "region": "U", "data": "12/1/", "status": "" },
  { "name": "Middle-earth™: Shadow of Mordor™ - Game of the Year Edition", "price": "0.31", "region": "A", "data": "12/14", "status": "" },
  { "name": "Middle-earth™: Shadow of War™", "price": "0.17", "region": "A", "data": "12/15", "status": "" },
  { "name": "Middle-earth™: Shadow of War™ Definitive Edition", "price": "0.37", "region": "A", "data": "12/14", "status": "" },
  { "name": "Middle-earth™: The Shadow Bundle", "price": "1.12", "region": "A", "data": "12/14", "status": "" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle", "price": "0.97", "region": "T", "data": "12/14", "status": "" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle - Windows 10", "price": "0.97", "region": "T", "data": "12/14", "status": "" },
  { "name": "Minute of Islands", "price": "0.09", "region": "A", "data": "12/19", "status": "" },
  { "name": "Miraculous: Rise of the Sphinx", "price": "0.97", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Miraculous: Rise of the Sphinx Ultimate Edition", "price": "1.12", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Mixx Island: Remix Plus", "price": "0.05", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Monster Energy Supercross - The Official Videogame 3", "price": "0.47", "region": "A", "data": "12/15", "status": "" },
  { "name": "Monster Energy Supercross 3 - Special Edition", "price": "0.84", "region": "A", "data": "12/15", "status": "" },
  { "name": "Monster Hunter Rise", "price": "7.09", "region": "A", "data": "12/14", "status": "" },
  { "name": "Monster Hunter Rise + Sunbreak", "price": "10.63", "region": "A", "data": "12/14", "status": "" },
  { "name": "Monster Hunter Rise + Sunbreak Deluxe", "price": "14.88", "region": "A", "data": "12/14", "status": "" },
  { "name": "Monster Hunter Rise Deluxe Edition", "price": "8.86", "region": "A", "data": "12/14", "status": "" },
  { "name": "Monster Hunter World: Iceborne Master Edition", "price": "7.09", "region": "A", "data": "12/14", "status": "" },
  { "name": "Monster Hunter World: Iceborne Master Edition Digital Deluxe", "price": "8.86", "region": "A", "data": "12/14", "status": "" },
  { "name": "Monster Sanctuary", "price": "0.28", "region": "A", "data": "12/15", "status": "" },
  { "name": "Monster Truck Championship Xbox One", "price": "0.14", "region": "A", "data": "12/15", "status": "" },
  { "name": "Monster Truck Championship Xbox Series X|S", "price": "0.14", "region": "A", "data": "12/15", "status": "" },
  { "name": "Mortal Kombat 1", "price": "15.00", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Mortal Kombat 11", "price": "0.28", "region": "A", "data": "12/15", "status": "" },
  { "name": "Mortal Kombat 11 Ultimate", "price": "0.67", "region": "A", "data": "12/14", "status": "" },
  { "name": "Mortal Kombat 11 Ultimate + Injustice 2 Leg. Edition Bundle", "price": "0.69", "region": "A", "data": "12/14", "status": "" },
  { "name": "Mortal Kombat X", "price": "0.34", "region": "A", "data": "12/15", "status": "" },
  { "name": "Mortal Kombat™ 1 Premium Edition", "price": "24.00", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Motesolo: No Girlfriend Since Birth", "price": "0.32", "region": "A", "data": "12/15", "status": "" },
  { "name": "MotoGP™19", "price": "0.37", "region": "A", "data": "12/15", "status": "" },
  { "name": "Moving Out 2", "price": "6.01", "region": "T", "data": "12/14", "status": "" },
  { "name": "Moving Out Deluxe Edition", "price": "0.32", "region": "A", "data": "12/15", "status": "" },
  { "name": "Mr. DRILLER DrillLand", "price": "0.32", "region": "A", "data": "12/15", "status": "" },
  { "name": "Mundaun", "price": "0.89", "region": "A", "data": "12/19", "status": "GOLD" },
  { "name": "Mushroom Quest", "price": "0.01", "region": "A", "data": "12/19", "status": "" },
  { "name": "Mushroom Savior", "price": "0.03", "region": "A", "data": "12/19", "status": "" },
  { "name": "My Friend Pedro", "price": "0.09", "region": "A", "data": "12/15", "status": "" },
  { "name": "My Friend Peppa Pig", "price": "1.70", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "NASCAR Arcade Rush", "price": "6.50", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "NASCAR Arcade Rush Project-X Edition", "price": "7.00", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "NERF Legends", "price": "0.70", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "NHL® 24 X-Factor Edition Xbox One & Xbox Series X|S", "price": "8.80", "region": "A", "data": "12/14", "status": "" },
  { "name": "NHL® 24 Xbox One", "price": "5.20", "region": "A", "data": "12/14", "status": "" },
  { "name": "NHL® 24 Xbox Series X|S", "price": "6.00", "region": "A", "data": "12/14", "status": "" },
  { "name": "NHRA Championship Drag Racing: Speed For All", "price": "0.97", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "NHRA Championship Drag Racing: Speed for All - Deluxe Edi...", "price": "1.12", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "NHRA Championship Drag Racing: Speed for All - Ultimate E...", "price": "1.50", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Need for Speed™ Heat", "price": "0.16", "region": "A", "data": "12/14", "status": "" },
  { "name": "Need for Speed™ Heat Deluxe Edition", "price": "0.19", "region": "A", "data": "12/14", "status": "" },
  { "name": "Need for Speed™ Unbound", "price": "1.69", "region": "A", "data": "12/14", "status": "" },
  { "name": "Need for Speed™ Unbound Palace Edition", "price": "1.97", "region": "A", "data": "12/14", "status": "" },
  { "name": "Neon Abyss Deluxe Edition", "price": "0.20", "region": "A", "data": "12/15", "status": "" },
  { "name": "Nerf Legends Digital Deluxe", "price": "0.85", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "NeuroVoider", "price": "0.03", "region": "A", "data": "12/19", "status": "" },
  { "name": "Nickelodeon All-Star Brawl", "price": "0.35", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Nickelodeon All-Star Brawl 2", "price": "9.75", "region": "A", "data": "12/14", "status": "" },
  { "name": "Nickelodeon All-Star Brawl 2 Deluxe Edition", "price": "12.75", "region": "A", "data": "12/14", "status": "" },
  { "name": "Nickelodeon All-Star Brawl 2 Ultimate Edition", "price": "14.25", "region": "A", "data": "12/14", "status": "" },
  { "name": "Nickelodeon Kart Racers 3: Slime Speedway", "price": "0.97", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Nickelodeon Kart Racers 3: Slime Speedway Turbo Edition", "price": "1.12", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Nickelodeon: Kart Racers", "price": "0.05", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Nicole", "price": "0.07", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.04", "region": "A", "data": "5/31/", "status": "" },
  { "name": "ONE PIECE: PIRATE WARRIORS 4", "price": "6.46", "region": "T", "data": "12/15", "status": "" },
  { "name": "ONE PUNCH MAN: A HERO NOBODY KNOWS", "price": "0.67", "region": "A", "data": "12/15", "status": "" },
  { "name": "Olympic Games Tokyo 2020 – The Official Video Game™", "price": "2.55", "region": "T", "data": "12/15", "status": "" },
  { "name": "Ori and the Blind Forest: Definitive Edition", "price": "0.84", "region": "A", "data": "12/14", "status": "" },
  { "name": "Othercide", "price": "0.78", "region": "A", "data": "12/15", "status": "" },
  { "name": "Out in Space Bundle: Tin Can & orbit.industries", "price": "0.85", "region": "A", "data": "12/19", "status": "GOLD" },
  { "name": "Outbreak Co-Op Anthology", "price": "0.16", "region": "A", "data": "12/19", "status": "GOLD" },
  { "name": "Outbreak: Lost Hope Definitive Collection", "price": "0.11", "region": "A", "data": "12/19", "status": "" },
  { "name": "Overcooked", "price": "0.06", "region": "A", "data": "12/15", "status": "" },
  { "name": "Overcooked! + Overcooked! 2", "price": "0.16", "region": "A", "data": "12/15", "status": "" },
  { "name": "Overcooked! 2", "price": "0.08", "region": "A", "data": "12/15", "status": "" },
  { "name": "Overwatch® 2: Complete Hero Collection", "price": "3.31", "region": "A", "data": "12/15", "status": "" },
  { "name": "PAW Patrol Mighty Pups Save Adventure Bay", "price": "2.19", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "PAW Patrol The Movie: Adventure City Calls", "price": "2.12", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "PAW Patrol World", "price": "5.00", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "PAW Patrol: Grand Prix", "price": "3.44", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "PJ Masks: Heroes of the Night", "price": "1.27", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Pankapu", "price": "0.02", "region": "A", "data": "12/15", "status": "" },
  { "name": "Pathfinder: Kingmaker - Definitive Edition", "price": "0.44", "region": "A", "data": "12/15", "status": "" },
  { "name": "Pathfinder: Wrath of the Righteous", "price": "0.60", "region": "A", "data": "12/19", "status": "GOLD" },
  { "name": "Paw Patrol: On a Roll", "price": "1.75", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Peppa Pig: World Adventures", "price": "2.12", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Pickleball Smash", "price": "6.25", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Pikuniku", "price": "0.06", "region": "A", "data": "12/15", "status": "" },
  { "name": "Pirates on Target", "price": "0.05", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Pixel Cafe", "price": "0.21", "region": "A", "data": "12/15", "status": "" },
  { "name": "Planet Alpha", "price": "0.14", "region": "A", "data": "12/15", "status": "" },
  { "name": "Planet Coaster: Console Edition", "price": "0.31", "region": "A", "data": "12/15", "status": "" },
  { "name": "Planet of the Eyes", "price": "0.01", "region": "A", "data": "12/15", "status": "" },
  { "name": "Plants vs. Zombies™ Garden Warfare 2", "price": "0.07", "region": "A", "data": "12/14", "status": "" },
  { "name": "Plants vs. Zombies™ Garden Warfare 2: Deluxe Edition", "price": "0.09", "region": "A", "data": "12/14", "status": "" },
  { "name": "Pro Gymnast Simulator", "price": "0.07", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Pro Gymnast Simulator + Brawl Chess", "price": "0.07", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Pro Gymnast Simulator + Clumsy Rush", "price": "0.07", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Professor Rubik's Brain Fitness", "price": "0.04", "region": "A", "data": "12/15", "status": "" },
  { "name": "Puyo Puyo Champions", "price": "0.44", "region": "T", "data": "12/15", "status": "" },
  { "name": "Quantum Break", "price": "1.25", "region": "A", "data": "12/14", "status": "" },
  { "name": "Quantum Break", "price": "0.18", "region": "A", "data": "12/14", "status": "" },
  { "name": "Quest for Infamy", "price": "0.07", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "RABBIDS INVASION - GOLD EDITION", "price": "0.08", "region": "A", "data": "12/15", "status": "" },
  { "name": "RACCOON CITY EDITION", "price": "5.32", "region": "A", "data": "12/14", "status": "" },
  { "name": "RAINBOW HIGH™: RUNWAY RUSH", "price": "5.00", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "REMOTE LIFE", "price": "0.16", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "REPLIKATOR", "price": "0.09", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "RESIDENT EVIL 2 Deluxe Edition", "price": "4.43", "region": "A", "data": "12/14", "status": "" },
  { "name": "RESIDENT EVIL 7 biohazard", "price": "2.83", "region": "A", "data": "12/14", "status": "" },
  { "name": "RICO", "price": "0.05", "region": "A", "data": "12/15", "status": "" },
  { "name": "Rack N Ruin", "price": "0.22", "region": "A", "data": "12/19", "status": "" },
  { "name": "Radical Rabbit Stew", "price": "0.07", "region": "A", "data": "12/15", "status": "" },
  { "name": "Rainbow Billy: The Curse of the Leviathan", "price": "0.09", "region": "A", "data": "12/15", "status": "" },
  { "name": "Rapala Fishing: Pro Series", "price": "0.04", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Razerwire: Nanowars", "price": "0.03", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Remnant 2", "price": "3.75", "region": "A", "data": "12/14", "status": "" },
  { "name": "Remnant II - Deluxe Edition", "price": "4.12", "region": "A", "data": "12/14", "status": "" },
  { "name": "Remnant II - Ultimate Edition", "price": "5.25", "region": "A", "data": "12/14", "status": "" },
  { "name": "Resident Evil 4", "price": "5.21", "region": "A", "data": "12/14", "status": "" },
  { "name": "Resident Evil Village Gold Edition", "price": "7.09", "region": "A", "data": "12/14", "status": "" },
  { "name": "Ride 2", "price": "0.31", "region": "A", "data": "12/15", "status": "" },
  { "name": "Rise of Nations: Extended Edition", "price": "0.62", "region": "A", "data": "12/14", "status": "" },
  { "name": "Riverbond", "price": "0.07", "region": "A", "data": "12/15", "status": "" },
  { "name": "Rock 'N Racing Off Road DX", "price": "0.05", "region": "A", "data": "12/19", "status": "" },
  { "name": "Rock of Ages 2: Bigger & Boulder™", "price": "0.32", "region": "T", "data": "12/15", "status": "" },
  { "name": "Rogue Lords", "price": "0.13", "region": "A", "data": "12/15", "status": "" },
  { "name": "Roguebook Xbox One", "price": "0.11", "region": "A", "data": "12/15", "status": "" },
  { "name": "Roguebook Xbox Series X|S", "price": "0.13", "region": "A", "data": "12/15", "status": "" },
  { "name": "Roman Rumble in Las Vegum - Asterix & Obelix XXL 2", "price": "0.62", "region": "A", "data": "12/15", "status": "" },
  { "name": "Roommates Visual Novel", "price": "0.07", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Ruinarch", "price": "1.97", "region": "A", "data": "12/15", "status": "" },
  { "name": "Russian Subway Dogs", "price": "0.78", "region": "A", "data": "12/19", "status": "GOLD" },
  { "name": "Ryse: Legendary Edition", "price": "0.16", "region": "A", "data": "12/14", "status": "" },
  { "name": "SHMUP Mania", "price": "0.39", "region": "T", "data": "12/22", "status": "" },
  { "name": "SONIC SUPERSTARS", "price": "15.75", "region": "A", "data": "12/14", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "1.60", "region": "A", "data": "12/31", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "2.14", "region": "A", "data": "1/1/2", "status": "" },
  { "name": "STAR WARS Jedi: Survivor™ Deluxe Edition", "price": "8.12", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "STAR WARS™ Battlefront™ II", "price": "0.19", "region": "A", "data": "12/14", "status": "" },
  { "name": "STAR WARS™ Battlefront™ II: Celebration Edition", "price": "0.34", "region": "A", "data": "12/14", "status": "" },
  { "name": "SWORD ART ONLINE Alicization Lycoris", "price": "0.37", "region": "A", "data": "12/15", "status": "" },
  { "name": "SWORD ART ONLINE: FATAL BULLET", "price": "0.28", "region": "A", "data": "12/15", "status": "" },
  { "name": "Scars Above", "price": "1.31", "region": "A", "data": "12/15", "status": "" },
  { "name": "ScreamRide", "price": "0.28", "region": "A", "data": "12/14", "status": "" },
  { "name": "ScreamRide", "price": "0.09", "region": "A", "data": "12/14", "status": "" },
  { "name": "Scribblenauts Showdown", "price": "0.15", "region": "A", "data": "12/15", "status": "" },
  { "name": "Sea Horizon", "price": "2.76", "region": "A", "data": "12/19", "status": "GOLD" },
  { "name": "Seduce Me - The Complete Story", "price": "0.12", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Shadowblade Odyssey", "price": "0.02", "region": "A", "data": "12/24", "status": "" },
  { "name": "Shakes on a Plane", "price": "0.04", "region": "A", "data": "12/19", "status": "" },
  { "name": "Shape Up", "price": "0.06", "region": "A", "data": "12/19", "status": "GOLD" },
  { "name": "She Wants Me Dead", "price": "0.04", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Shenmue I & II", "price": "0.12", "region": "A", "data": "12/15", "status": "" },
  { "name": "Shenmue I & II", "price": "0.08", "region": "A", "data": "12/15", "status": "" },
  { "name": "Sherlock Holmes Chapter One Deluxe Edition", "price": "1.17", "region": "A", "data": "12/15", "status": "" },
  { "name": "Sherlock Holmes: Crimes and Punishments Redux", "price": "0.58", "region": "A", "data": "12/15", "status": "" },
  { "name": "Sherlock Holmes: The Devil's Daughter Redux", "price": "0.58", "region": "A", "data": "12/15", "status": "" },
  { "name": "Silver Chains", "price": "0.04", "region": "A", "data": "12/19", "status": "" },
  { "name": "Skul: The Hero Slayer", "price": "0.18", "region": "A", "data": "12/15", "status": "" },
  { "name": "Skull Island: Rise of Kong", "price": "6.25", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Skull Island: Rise of Kong - Colossal Edition", "price": "8.12", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "SolSeraph", "price": "0.09", "region": "A", "data": "12/15", "status": "" },
  { "name": "Sonic Frontiers Digital Deluxe Edition", "price": "10.50", "region": "A", "data": "12/14", "status": "" },
  { "name": "Souldiers", "price": "0.23", "region": "A", "data": "12/19", "status": "GOLD" },
  { "name": "Source of Madness", "price": "0.09", "region": "A", "data": "12/15", "status": "" },
  { "name": "South Park™: The Stick of Truth ™", "price": "0.14", "region": "A", "data": "12/15", "status": "" },
  { "name": "Space Raiders in Space", "price": "0.06", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Spacewing War", "price": "0.06", "region": "A", "data": "12/19", "status": "" },
  { "name": "Sparkle Bundle", "price": "0.16", "region": "A", "data": "12/31", "status": "" },
  { "name": "Star Trek Prodigy: Supernova", "price": "2.41", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Starfield", "price": "10.50", "region": "A", "data": "12/14", "status": "" },
  { "name": "Starfield Premium Edition", "price": "15.94", "region": "A", "data": "12/14", "status": "" },
  { "name": "State of Decay: Year-One Survival Edition", "price": "0.62", "region": "A", "data": "12/14", "status": "" },
  { "name": "SteamWorld Dig", "price": "0.09", "region": "A", "data": "12/19", "status": "" },
  { "name": "SteamWorld Dig 2", "price": "0.12", "region": "A", "data": "12/19", "status": "" },
  { "name": "Strategic Mind: Fight for Dominance", "price": "2.68", "region": "A", "data": "12/19", "status": "" },
  { "name": "Street Fighter™ 6", "price": "7.85", "region": "A", "data": "12/14", "status": "" },
  { "name": "Street Fighter™ 6 Deluxe Edition", "price": "12.45", "region": "A", "data": "12/14", "status": "" },
  { "name": "Street Fighter™ 6 Ultimate Edition", "price": "16.41", "region": "A", "data": "12/14", "status": "" },
  { "name": "Street Outlaws 2: Winner Takes All", "price": "0.52", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Street Outlaws 2: Winner Takes All – Digital Deluxe", "price": "0.64", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Strong Moon", "price": "0.13", "region": "A", "data": "12/19", "status": "" },
  { "name": "Struggling", "price": "0.46", "region": "A", "data": "12/15", "status": "" },
  { "name": "Sunset Overdrive", "price": "0.25", "region": "A", "data": "12/14", "status": "" },
  { "name": "Sunset Overdrive Deluxe Edition", "price": "0.20", "region": "A", "data": "12/14", "status": "" },
  { "name": "Super Monkey Ball: Banana Blitz HD", "price": "2.06", "region": "T", "data": "12/15", "status": "" },
  { "name": "Super Monkey Ball: Banana Blitz HD", "price": "2.06", "region": "T", "data": "12/15", "status": "" },
  { "name": "Super Pixel Kid", "price": "0.02", "region": "A", "data": "12/18", "status": "" },
  { "name": "Sweet Witches", "price": "0.04", "region": "A", "data": "12/19", "status": "GOLD" },
  { "name": "TEMBO THE BADASS ELEPHANT", "price": "0.05", "region": "A", "data": "12/15", "status": "" },
  { "name": "TRANSFORMERS: BATTLEGROUNDS", "price": "1.09", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "TRANSFORMERS: EARTHSPARK - Expedition", "price": "5.00", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Tales from the Borderlands", "price": "1.53", "region": "A", "data": "12/19", "status": "GOLD" },
  { "name": "Tales of Aravorn: Seasons of the Wolf", "price": "0.14", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Tales of Arise", "price": "12.89", "region": "T", "data": "12/14", "status": "" },
  { "name": "Tales of Kenzera™: ZAU Standard Edition", "price": "7.87", "region": "A", "data": "4/23/", "status": "" },
  { "name": "Tell Me Why: Chapters 1-3", "price": "0.46", "region": "H", "data": "12/14", "status": "" },
  { "name": "Telling Lies", "price": "0.09", "region": "A", "data": "12/15", "status": "" },
  { "name": "The Bard's Tale ARPG : Remastered and Resnarkled", "price": "0.06", "region": "A", "data": "12/14", "status": "" },
  { "name": "The Bard's Tale IV: Director's Cut", "price": "0.14", "region": "A", "data": "12/14", "status": "" },
  { "name": "The Bard's Tale Trilogy", "price": "0.06", "region": "A", "data": "12/14", "status": "" },
  { "name": "The Book of Unwritten Tales 2", "price": "0.13", "region": "A", "data": "12/15", "status": "" },
  { "name": "The Chant", "price": "2.50", "region": "A", "data": "12/15", "status": "" },
  { "name": "The Crew™ Motorfest Deluxe Edition", "price": "10.50", "region": "A", "data": "12/14", "status": "" },
  { "name": "The Dwarves", "price": "0.12", "region": "A", "data": "12/15", "status": "" },
  { "name": "The Escapists + The Escapists 2", "price": "0.16", "region": "A", "data": "12/15", "status": "" },
  { "name": "The Escapists: Supermax Edition", "price": "0.08", "region": "A", "data": "12/15", "status": "" },
  { "name": "The Grinch: Christmas Adventures", "price": "3.94", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "The Inner World", "price": "0.02", "region": "A", "data": "12/19", "status": "" },
  { "name": "The Innsmouth Case", "price": "0.03", "region": "A", "data": "12/19", "status": "" },
  { "name": "The Jackbox Party Pack", "price": "0.08", "region": "A", "data": "12/15", "status": "" },
  { "name": "The Jackbox Party Quadpack", "price": "0.70", "region": "A", "data": "12/31", "status": "" },
  { "name": "The King's Bird", "price": "0.07", "region": "A", "data": "12/15", "status": "" },
  { "name": "The Knight Witch", "price": "0.56", "region": "A", "data": "12/15", "status": "" },
  { "name": "The LEGO Movie 2 Videogame", "price": "0.36", "region": "A", "data": "12/14", "status": "" },
  { "name": "The LEGO Movie Videogame", "price": "0.14", "region": "A", "data": "12/15", "status": "" },
  { "name": "The LEGO® Games Bundle", "price": "0.75", "region": "A", "data": "12/14", "status": "" },
  { "name": "The LEGO® Movie Videogame-Bundle", "price": "1.34", "region": "T", "data": "12/14", "status": "" },
  { "name": "The LEGO® NINJAGO® Movie Video Game", "price": "0.28", "region": "A", "data": "12/15", "status": "" },
  { "name": "The Last Kids on Earth and the Staff of Doom", "price": "1.53", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "The Last Oricru", "price": "2.19", "region": "A", "data": "12/15", "status": "" },
  { "name": "The Path of Motus", "price": "2.33", "region": "I", "data": "12/19", "status": "" },
  { "name": "The Serpent Rogue", "price": "0.28", "region": "A", "data": "12/15", "status": "" },
  { "name": "The Settlers®: New Allies", "price": "6.25", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "The Shadow Warrior Trilogy", "price": "1.56", "region": "A", "data": "12/15", "status": "" },
  { "name": "The Sinking City", "price": "0.09", "region": "A", "data": "12/19", "status": "" },
  { "name": "The Sinking City Xbox Series X|S", "price": "0.73", "region": "A", "data": "12/15", "status": "" },
  { "name": "The Sinking City – Necronomicon Edition", "price": "1.22", "region": "A", "data": "12/15", "status": "" },
  { "name": "The Sisters - Party of the Year", "price": "0.13", "region": "A", "data": "12/15", "status": "" },
  { "name": "The Smurfs - Mission Vileaf", "price": "0.78", "region": "A", "data": "12/19", "status": "GOLD" },
  { "name": "The Surge", "price": "0.24", "region": "A", "data": "12/15", "status": "" },
  { "name": "The Survivalists", "price": "0.37", "region": "A", "data": "12/15", "status": "" },
  { "name": "The Traveler's Path", "price": "1.50", "region": "A", "data": "12/14", "status": "" },
  { "name": "The Ultimate FMV Bundle", "price": "0.62", "region": "A", "data": "12/19", "status": "GOLD" },
  { "name": "The Ultimate FMV Bundle 2", "price": "0.67", "region": "A", "data": "12/19", "status": "GOLD" },
  { "name": "The Witcher 3: Wild Hunt", "price": "0.75", "region": "A", "data": "12/14", "status": "" },
  { "name": "The Witcher 3: Wild Hunt – Complete Edition", "price": "1.24", "region": "A", "data": "12/14", "status": "" },
  { "name": "Thief of Thieves: Season One", "price": "0.05", "region": "A", "data": "12/15", "status": "" },
  { "name": "This Is the Police", "price": "0.06", "region": "A", "data": "12/15", "status": "" },
  { "name": "This is the Police 2", "price": "0.09", "region": "A", "data": "12/15", "status": "" },
  { "name": "Through the Woods", "price": "0.06", "region": "A", "data": "12/19", "status": "" },
  { "name": "Titan Quest", "price": "0.09", "region": "A", "data": "12/15", "status": "" },
  { "name": "Titanfall® 2", "price": "0.12", "region": "A", "data": "12/14", "status": "" },
  { "name": "Titanfall® 2: Ultimate Edition", "price": "0.15", "region": "A", "data": "12/14", "status": "" },
  { "name": "To Leave", "price": "0.07", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Togges", "price": "0.21", "region": "A", "data": "12/19", "status": "" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Gold Edition", "price": "1.25", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Tom Clancy's Rainbow Six® Extraction United Bundle", "price": "2.27", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Tom Clancy's Rainbow Six® Siege Deluxe Edition", "price": "1.41", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Tom Clancy's Rainbow Six® Siege Operator Edition", "price": "3.94", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Tom Clancy's Rainbow Six® Siege Ultimate Edition", "price": "6.00", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Tom Clancy's The Division® 2", "price": "0.56", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Ultimate Edition", "price": "1.19", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Year 2 Gold Edition", "price": "0.50", "region": "A", "data": "12/15", "status": "" },
  { "name": "Tomb Raider I-III Remastered Starring Lara Croft", "price": "6.19", "region": "A", "data": "2/13/", "status": "" },
  { "name": "Torment: Tides of Numenera", "price": "0.13", "region": "A", "data": "12/14", "status": "" },
  { "name": "Train Life: A Railway Simulator", "price": "0.13", "region": "A", "data": "12/15", "status": "" },
  { "name": "Trash Quest", "price": "0.03", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Treasure Hunter Simulator", "price": "0.11", "region": "A", "data": "12/19", "status": "GOLD" },
  { "name": "Trenches", "price": "0.09", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Trials Fusion: The Awesome Max Edition", "price": "0.12", "region": "A", "data": "12/19", "status": "GOLD" },
  { "name": "Tunche", "price": "0.14", "region": "A", "data": "12/19", "status": "GOLD" },
  { "name": "UFC® 5", "price": "10.50", "region": "A", "data": "12/14", "status": "" },
  { "name": "UFC® 5 Deluxe Edition", "price": "15.40", "region": "A", "data": "12/14", "status": "" },
  { "name": "UNO®", "price": "0.14", "region": "A", "data": "12/14", "status": "GOLD" },
  { "name": "Ultra Pixel Survive", "price": "0.04", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "UnderDungeon", "price": "0.05", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "0.17", "region": "A", "data": "12/30", "status": "" },
  { "name": "Valkyria Chronicles 4", "price": "0.82", "region": "T", "data": "12/15", "status": "" },
  { "name": "Vampire: The Masquerade - Swansong Xbox One", "price": "1.72", "region": "A", "data": "12/15", "status": "" },
  { "name": "Vampire: The Masquerade - Swansong Xbox Series X|S", "price": "1.72", "region": "A", "data": "12/15", "status": "" },
  { "name": "Vanquish", "price": "0.28", "region": "A", "data": "12/15", "status": "" },
  { "name": "Vermintide - Digital Value Pack", "price": "0.50", "region": "A", "data": "3/7/2", "status": "" },
  { "name": "Voyage: Xbox Edition", "price": "0.13", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "WILD HEARTS™ Karakuri Edition", "price": "1.47", "region": "A", "data": "12/14", "status": "" },
  { "name": "WILD HEARTS™ Standard Edition", "price": "4.50", "region": "A", "data": "12/14", "status": "" },
  { "name": "WINGSPAN", "price": "1.37", "region": "A", "data": "12/19", "status": "GOLD" },
  { "name": "WRC 10 Deluxe Edition Xbox One & Xbox Series X|S", "price": "1.14", "region": "A", "data": "12/15", "status": "" },
  { "name": "WRC 2023", "price": "6.60", "region": "A", "data": "12/14", "status": "" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "0.80", "region": "A", "data": "8/31/", "status": "" },
  { "name": "Warhammer 40,000: Inquisitor - Martyr", "price": "0.11", "region": "A", "data": "12/15", "status": "" },
  { "name": "Warhammer 40,000: Inquisitor - Martyr Complete Collection", "price": "0.18", "region": "A", "data": "12/15", "status": "" },
  { "name": "Warhammer: Chaosbane Xbox One", "price": "0.04", "region": "A", "data": "12/15", "status": "" },
  { "name": "Warm Snow", "price": "1.75", "region": "A", "data": "12/19", "status": "GOLD" },
  { "name": "Wasteland 2: Director's Cut", "price": "0.10", "region": "A", "data": "12/14", "status": "" },
  { "name": "Wasteland Remastered", "price": "0.22", "region": "T", "data": "12/14", "status": "" },
  { "name": "Watch Dogs: Legion - Deluxe Edition", "price": "0.84", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Watch Dogs®2", "price": "0.47", "region": "A", "data": "12/15", "status": "" },
  { "name": "Watch Dogs®2 - Deluxe Edition", "price": "0.64", "region": "A", "data": "12/14", "status": "" },
  { "name": "Watch Dogs®: Legion Gold Edition", "price": "1.37", "region": "A", "data": "12/15", "status": "" },
  { "name": "Weird West", "price": "1.22", "region": "A", "data": "12/15", "status": "" },
  { "name": "Werewolf: The Apocalypse - Earthblood Champion of Gaia Xb...", "price": "0.11", "region": "A", "data": "12/15", "status": "" },
  { "name": "Werewolf: The Apocalypse - Earthblood Champion of Gaia Xbox Series X|S", "price": "0.11", "region": "A", "data": "12/15", "status": "" },
  { "name": "What Remains of Edith Finch", "price": "0.06", "region": "A", "data": "12/15", "status": "" },
  { "name": "Whateverland", "price": "0.19", "region": "A", "data": "12/19", "status": "GOLD" },
  { "name": "Who Wants to Be a Millionaire?", "price": "0.13", "region": "A", "data": "12/15", "status": "" },
  { "name": "Within the Blade", "price": "0.06", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "Wolfenstein® II: The New Colossus™ Digital Deluxe Edition", "price": "1.55", "region": "T", "data": "12/14", "status": "" },
  { "name": "World War Z", "price": "0.27", "region": "A", "data": "12/15", "status": "" },
  { "name": "Worms Battlegrounds", "price": "0.08", "region": "A", "data": "12/15", "status": "" },
  { "name": "Yakuza 3 Remastered", "price": "1.08", "region": "T", "data": "12/15", "status": "" },
  { "name": "Yakuza 3 Remastered for Windows 10", "price": "1.08", "region": "T", "data": "12/15", "status": "" },
  { "name": "Yakuza 4 Remastered", "price": "1.08", "region": "T", "data": "12/15", "status": "" },
  { "name": "Yakuza 4 Remastered for Windows 10", "price": "1.08", "region": "T", "data": "12/15", "status": "" },
  { "name": "Yakuza 5 Remastered", "price": "1.08", "region": "T", "data": "12/15", "status": "" },
  { "name": "Yakuza 5 Remastered for Windows 10", "price": "1.08", "region": "T", "data": "12/15", "status": "" },
  { "name": "Yakuza: Like a Dragon", "price": "3.94", "region": "T", "data": "12/14", "status": "" },
  { "name": "Yakuza: Like a Dragon Legendary Hero Edition", "price": "4.54", "region": "T", "data": "12/14", "status": "" },
  { "name": "Yoku's Island Express", "price": "0.28", "region": "A", "data": "12/15", "status": "" },
  { "name": "Yooka-Laylee and the Impossible Lair", "price": "0.11", "region": "A", "data": "12/15", "status": "" },
  { "name": "Zomborg", "price": "0.07", "region": "A", "data": "12/16", "status": "" },
  { "name": "reky", "price": "0.04", "region": "A", "data": "12/15", "status": "GOLD" },
  { "name": "theHunter: Call of the Wild™ - Essentials DLC Bundle", "price": "0.12", "region": "A", "data": "12/15", "status": "" },
  { "name": "ŌKAMI HD", "price": "3.68", "region": "A", "data": "12/14", "status": "" },
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



