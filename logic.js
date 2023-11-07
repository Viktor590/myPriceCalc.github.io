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
  { "name": "Accident", "price": "0.21", "region": "A", "data": "11/14", "status": "" },
  { "name": "Aery - The Lost Hero", "price": "0.30", "region": "A", "data": "11/14", "status": "" },
  { "name": "Alex Kidd in Miracle World DX", "price": "0.24", "region": "A", "data": "11/14", "status": "" },
  { "name": "Alone in the Dark", "price": "10.03", "region": "A", "data": "1/16/", "status": "" },
  { "name": "Alone in the Dark - Digital Deluxe Edition", "price": "11.57", "region": "A", "data": "1/16/", "status": "" },
  { "name": "Alpha Particle", "price": "5.27", "region": "I", "data": "11/16", "status": "" },
  { "name": "Amabilly", "price": "0.16", "region": "A", "data": "11/18", "status": "" },
  { "name": "Ambition Record", "price": "0.37", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "American Fugitive", "price": "0.08", "region": "A", "data": "11/17", "status": "" },
  { "name": "Animal Shelter Simulator", "price": "0.37", "region": "A", "data": "11/14", "status": "" },
  { "name": "Ankora: Lost Days", "price": "0.41", "region": "A", "data": "11/14", "status": "" },
  { "name": "Anno 1800™ Console Edition", "price": "6.43", "region": "A", "data": "11/11", "status": "GOLD" },
  { "name": "Anno 1800™ Console Edition - Deluxe", "price": "9.43", "region": "A", "data": "11/11", "status": "GOLD" },
  { "name": "Aquarium Land", "price": "0.16", "region": "A", "data": "11/14", "status": "" },
  { "name": "Area 86", "price": "0.12", "region": "A", "data": "11/14", "status": "" },
  { "name": "Armed Emeth", "price": "0.34", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "Asterix & Obelix Slap Them All!", "price": "1.42", "region": "E", "data": "11/14", "status": "GOLD" },
  { "name": "Atomic Heart - Gold Edition", "price": "27.85", "region": "A", "data": "11/14", "status": "" },
  { "name": "Atrio: The Dark Wild (Game Preview)", "price": "0.59", "region": "A", "data": "11/14", "status": "" },
  { "name": "Autobahn Police Simulator 2", "price": "0.49", "region": "A", "data": "11/14", "status": "" },
  { "name": "Avatar The Last Airbender: Quest for Balance", "price": "26.17", "region": "I", "data": "11/14", "status": "" },
  { "name": "Awarded Platformer Bundle", "price": "0.47", "region": "A", "data": "12/31", "status": "" },
  { "name": "Axis Football 2023", "price": "7.65", "region": "C", "data": "11/14", "status": "" },
  { "name": "Ayre and the Crystal Comet", "price": "3.80", "region": "A", "data": "11/14", "status": "" },
  { "name": "BORIS THE ROCKET", "price": "0.20", "region": "A", "data": "11/14", "status": "" },
  { "name": "Banner Saga 3", "price": "0.14", "region": "A", "data": "11/14", "status": "" },
  { "name": "Barn Finders", "price": "2.84", "region": "A", "data": "11/14", "status": "" },
  { "name": "Barn Finders and Treasure Hunter Simulator Bundle", "price": "0.74", "region": "A", "data": "11/14", "status": "" },
  { "name": "Battle Of The Bulge", "price": "0.44", "region": "T", "data": "11/14", "status": "" },
  { "name": "Battlefleet Gothic: Armada", "price": "0.23", "region": "A", "data": "11/14", "status": "" },
  { "name": "Battlefleet Gothic: Armada 2 - Windows 10", "price": "0.86", "region": "A", "data": "11/14", "status": "" },
  { "name": "BioShock 2 Remastered", "price": "0.92", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "BioShock Infinite: The Complete Edition", "price": "1.48", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "BioShock Remastered", "price": "1.48", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "Blacksmith of the Sand Kingdom", "price": "0.41", "region": "A", "data": "11/14", "status": "" },
  { "name": "Bloodshore", "price": "0.37", "region": "A", "data": "11/14", "status": "" },
  { "name": "Bloons TD 5", "price": "0.17", "region": "A", "data": "11/14", "status": "" },
  { "name": "Bomber Crew", "price": "0.29", "region": "A", "data": "11/17", "status": "" },
  { "name": "Bomber Crew Deluxe Edition", "price": "0.69", "region": "A", "data": "11/17", "status": "" },
  { "name": "Boreal Tenebrae", "price": "0.11", "region": "A", "data": "11/14", "status": "" },
  { "name": "Bound by Flame", "price": "0.09", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "Boyfriend Dungeon", "price": "0.49", "region": "A", "data": "11/14", "status": "" },
  { "name": "Brunswick Pro Billiards", "price": "0.41", "region": "A", "data": "11/14", "status": "" },
  { "name": "Bus Simulator", "price": "0.57", "region": "A", "data": "11/17", "status": "" },
  { "name": "Bus Simulator 21 Next Stop - Gold Edition", "price": "9.36", "region": "E", "data": "11/17", "status": "" },
  { "name": "Calico", "price": "0.29", "region": "A", "data": "11/14", "status": "" },
  { "name": "Calturin", "price": "0.06", "region": "A", "data": "11/14", "status": "" },
  { "name": "Car Mechanic Simulator", "price": "0.43", "region": "A", "data": "11/14", "status": "" },
  { "name": "Car Mechanic Simulator 2021", "price": "0.86", "region": "A", "data": "11/14", "status": "" },
  { "name": "Car Mechanic Simulator Classic", "price": "0.21", "region": "A", "data": "11/14", "status": "" },
  { "name": "CarX Drift Racing Online", "price": "0.43", "region": "A", "data": "11/14", "status": "" },
  { "name": "Carnivores: Dinosaur Hunt", "price": "0.46", "region": "A", "data": "11/14", "status": "" },
  { "name": "Castle on the Coast", "price": "0.34", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "Chef Life - AL FORNO EDITION", "price": "10.28", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "Chenso Club", "price": "0.34", "region": "A", "data": "11/17", "status": "" },
  { "name": "Chess Ultra", "price": "0.12", "region": "A", "data": "11/14", "status": "" },
  { "name": "Choice of Life: Middle Ages", "price": "0.06", "region": "A", "data": "11/14", "status": "" },
  { "name": "Cities: Skylines - Remastered", "price": "2.36", "region": "A", "data": "11/14", "status": "" },
  { "name": "Cities: Skylines - Xbox One Edition", "price": "0.28", "region": "A", "data": "11/14", "status": "" },
  { "name": "Construction Simulator", "price": "6.80", "region": "A", "data": "11/17", "status": "" },
  { "name": "Construction Simulator - Extended Edition", "price": "8.00", "region": "A", "data": "11/17", "status": "" },
  { "name": "Construction Simulator 2 US - Console Edition", "price": "0.17", "region": "A", "data": "11/17", "status": "" },
  { "name": "Construction Simulator 3 - Console Edition", "price": "0.31", "region": "A", "data": "11/17", "status": "" },
  { "name": "Cook, Serve, Delicious! 2/3 Bundle!!", "price": "0.26", "region": "A", "data": "11/14", "status": "" },
  { "name": "Couch Multiplayer Bundle: Genetic Disaster, Super Cyborg ...", "price": "0.37", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "Cozy Grove", "price": "0.37", "region": "A", "data": "11/14", "status": "" },
  { "name": "Curse of the Dead Gods", "price": "0.94", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "Curse of the Dead Gods (PC)", "price": "1.14", "region": "A", "data": "11/14", "status": "" },
  { "name": "Cyber Complex", "price": "0.07", "region": "A", "data": "11/14", "status": "" },
  { "name": "DARKLAND 3", "price": "0.04", "region": "A", "data": "11/13", "status": "" },
  { "name": "DEMON'S TILT", "price": "0.32", "region": "A", "data": "11/14", "status": "" },
  { "name": "DRAGON BALL FIGHTERZ", "price": "0.81", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "DRAGON BALL FIGHTERZ - Ultimate Edition", "price": "5.01", "region": "T", "data": "11/14", "status": "GOLD" },
  { "name": "DRAGON BALL THE BREAKERS", "price": "1.48", "region": "T", "data": "11/14", "status": "GOLD" },
  { "name": "Dawn of Man", "price": "0.51", "region": "A", "data": "11/14", "status": "" },
  { "name": "Dawn of Man + Planetbase", "price": "0.73", "region": "A", "data": "11/14", "status": "" },
  { "name": "Death Park 2", "price": "0.15", "region": "A", "data": "11/14", "status": "" },
  { "name": "Deiland: Pocket Planet", "price": "0.32", "region": "A", "data": "11/14", "status": "" },
  { "name": "Deleveled", "price": "0.14", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "Demolish & Build", "price": "0.32", "region": "A", "data": "11/14", "status": "" },
  { "name": "Demon's Tier+", "price": "0.12", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "Desert Child", "price": "0.10", "region": "A", "data": "11/14", "status": "" },
  { "name": "Deus Ex: Mankind Divided - Digital Deluxe Edition", "price": "0.43", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "Don't Knock Twice", "price": "0.14", "region": "A", "data": "11/14", "status": "" },
  { "name": "Dou", "price": "0.04", "region": "A", "data": "11/9/", "status": "" },
  { "name": "DreamWorks All-Star Kart Racing", "price": "22.19", "region": "I", "data": "11/11", "status": "" },
  { "name": "DreamWorks All-Star Kart Racing Rally Edition", "price": "27.81", "region": "I", "data": "11/11", "status": "" },
  { "name": "Drive On Moscow", "price": "0.14", "region": "A", "data": "11/14", "status": "" },
  { "name": "Driving Essentials", "price": "0.92", "region": "A", "data": "11/14", "status": "" },
  { "name": "Dungeons 4", "price": "1.84", "region": "A", "data": "11/9/", "status": "" },
  { "name": "Dungeons 4 - Digital Deluxe Edition", "price": "31.61", "region": "T", "data": "11/9/", "status": "" },
  { "name": "EA SPORTS FC™ 24 Standard Edition Xbox One & Xbox Series X|S", "price": "34.42", "region": "T", "data": "12/31", "status": "" },
  { "name": "Embr", "price": "0.20", "region": "A", "data": "11/17", "status": "" },
  { "name": "Endzone - A World Apart: Complete Edition", "price": "5.00", "region": "A", "data": "11/14", "status": "" },
  { "name": "Endzone - A World Apart: Survivor Edition", "price": "4.50", "region": "A", "data": "11/14", "status": "" },
  { "name": "Escape Dead Island", "price": "0.11", "region": "A", "data": "12/31", "status": "" },
  { "name": "Exoprimal", "price": "25.09", "region": "T", "data": "11/16", "status": "" },
  { "name": "Exoprimal Deluxe Edition", "price": "29.65", "region": "T", "data": "11/16", "status": "" },
  { "name": "FLYING TIGERS: SHADOWS OVER CHINA", "price": "0.27", "region": "A", "data": "11/14", "status": "" },
  { "name": "Farm Manager 2022", "price": "0.25", "region": "A", "data": "11/14", "status": "" },
  { "name": "Farm Together", "price": "0.41", "region": "A", "data": "11/14", "status": "" },
  { "name": "Fatum Betula", "price": "0.15", "region": "A", "data": "11/14", "status": "" },
  { "name": "Finis", "price": "0.38", "region": "A", "data": "11/17", "status": "" },
  { "name": "Firefighting Simulator - The Squad", "price": "4.71", "region": "A", "data": "11/17", "status": "" },
  { "name": "Fishing: Barents Sea Complete Edition", "price": "0.49", "region": "A", "data": "11/17", "status": "" },
  { "name": "Fishing: North Atlantic", "price": "0.61", "region": "A", "data": "11/14", "status": "" },
  { "name": "Fishing: North Atlantic Enhanced Edition", "price": "0.86", "region": "A", "data": "11/14", "status": "" },
  { "name": "Fluffy Horde + Clumsy Rush", "price": "0.24", "region": "A", "data": "11/14", "status": "" },
  { "name": "Formula Bit Racing DX", "price": "0.08", "region": "A", "data": "11/14", "status": "" },
  { "name": "Fortified", "price": "0.21", "region": "A", "data": "11/14", "status": "" },
  { "name": "Four Sided Fantasy", "price": "0.08", "region": "A", "data": "11/14", "status": "" },
  { "name": "Frostpunk: Complete Collection", "price": "0.55", "region": "A", "data": "11/14", "status": "" },
  { "name": "Fur Squadron", "price": "0.23", "region": "A", "data": "11/11", "status": "" },
  { "name": "GOTTA GO FAST: Racing Collection", "price": "2.14", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "GRIDD: Retroenhanced", "price": "0.44", "region": "T", "data": "11/14", "status": "" },
  { "name": "Gas Guzzlers Extreme", "price": "0.32", "region": "A", "data": "11/14", "status": "" },
  { "name": "Gas Station Simulator", "price": "2.84", "region": "A", "data": "11/14", "status": "" },
  { "name": "Gleaner Heights", "price": "0.20", "region": "A", "data": "11/14", "status": "" },
  { "name": "Graveyard Keeper", "price": "0.20", "region": "A", "data": "11/14", "status": "" },
  { "name": "Graveyard Keeper: Last Journey Edition", "price": "0.71", "region": "A", "data": "11/14", "status": "" },
  { "name": "Green Hell", "price": "2.92", "region": "T", "data": "11/14", "status": "" },
  { "name": "Habroxia 2", "price": "0.14", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "Halloween Pinball", "price": "0.10", "region": "A", "data": "11/11", "status": "" },
  { "name": "Harvest Life", "price": "0.80", "region": "A", "data": "11/14", "status": "" },
  { "name": "Headspun", "price": "0.22", "region": "A", "data": "11/14", "status": "" },
  { "name": "Heliborne", "price": "0.55", "region": "A", "data": "11/14", "status": "" },
  { "name": "Hexagroove: Tactical DJ", "price": "10.47", "region": "U", "data": "11/14", "status": "" },
  { "name": "Hitchhiker - A Mystery Game", "price": "0.20", "region": "A", "data": "11/14", "status": "" },
  { "name": "Horatio Goes Snowboarding", "price": "0.11", "region": "A", "data": "11/14", "status": "" },
  { "name": "Hotshot Racing", "price": "0.08", "region": "A", "data": "11/17", "status": "" },
  { "name": "House Flipper", "price": "0.26", "region": "A", "data": "11/14", "status": "" },
  { "name": "I Am Fish", "price": "0.24", "region": "A", "data": "11/16", "status": "" },
  { "name": "Imagine Earth", "price": "0.41", "region": "A", "data": "11/14", "status": "" },
  { "name": "It's Kooky + Brawl Chess", "price": "0.24", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "It's Kooky + Cyber Protocol", "price": "0.24", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "Jack Move", "price": "2.63", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "Jagged Alliance 3", "price": "16.86", "region": "T", "data": "11/14", "status": "" },
  { "name": "Kaichu: The Kaiju Dating Sim", "price": "0.26", "region": "A", "data": "11/14", "status": "" },
  { "name": "Katana Kata", "price": "0.16", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "Kung Fu Fighting", "price": "0.04", "region": "A", "data": "11/18", "status": "" },
  { "name": "Lake", "price": "0.41", "region": "A", "data": "11/14", "status": "" },
  { "name": "Lara Croft and the Temple of Osiris & Season Pass Pack", "price": "0.25", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "Legend of Keepers: Career of a Dungeon Manager", "price": "0.57", "region": "A", "data": "11/14", "status": "" },
  { "name": "Legend of Keepers: Complete Edition", "price": "1.00", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "Lethis - Path of Progress", "price": "0.53", "region": "A", "data": "11/14", "status": "" },
  { "name": "Liftoff: Drone Racing", "price": "0.41", "region": "A", "data": "11/17", "status": "" },
  { "name": "Liftoff: Drone Racing Deluxe Edition", "price": "0.49", "region": "A", "data": "11/17", "status": "" },
  { "name": "Light & Dark Bundle", "price": "4.56", "region": "A", "data": "11/2/", "status": "" },
  { "name": "Light Fairytale Episode 1", "price": "0.12", "region": "A", "data": "11/14", "status": "" },
  { "name": "Light Fairytale Episode 2", "price": "0.12", "region": "A", "data": "11/14", "status": "" },
  { "name": "Lost Artifacts", "price": "0.16", "region": "A", "data": "11/14", "status": "" },
  { "name": "Lumberjack Simulator", "price": "0.63", "region": "A", "data": "11/14", "status": "" },
  { "name": "Madden NFL 19", "price": "29.71", "region": "C", "data": "12/30", "status": "" },
  { "name": "Madden NFL 22 Xbox One", "price": "11.00", "region": "A", "data": "11/8/", "status": "" },
  { "name": "Madden NFL 22 Xbox Series X|S", "price": "12.80", "region": "A", "data": "11/8/", "status": "" },
  { "name": "Madden NFL 23 Xbox One", "price": "14.63", "region": "A", "data": "12/31", "status": "" },
  { "name": "Madden NFL 23 Xbox Series X|S", "price": "17.14", "region": "A", "data": "12/31", "status": "" },
  { "name": "Madden NFL 24", "price": "17.14", "region": "A", "data": "12/1/", "status": "" },
  { "name": "Madden NFL 24 Deluxe Edition Xbox Series X|S & Xbox One", "price": "25.14", "region": "A", "data": "12/1/", "status": "" },
  { "name": "Mafia II: Definitive Edition", "price": "1.78", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "Mafia III: Definitive Edition", "price": "1.78", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "Manual Samuel", "price": "0.03", "region": "A", "data": "11/17", "status": "" },
  { "name": "Marenian Tavern Story: Patty and the Hungry God", "price": "0.41", "region": "A", "data": "11/14", "status": "" },
  { "name": "Mass Effect™ Legendary Edition", "price": "3.66", "region": "A", "data": "11/14", "status": "" },
  { "name": "Mass Effect™: Andromeda – Deluxe Recruit Edition", "price": "0.47", "region": "A", "data": "11/14", "status": "" },
  { "name": "Mech Mechanic Simulator", "price": "0.28", "region": "A", "data": "11/14", "status": "" },
  { "name": "Megaquarium", "price": "0.20", "region": "A", "data": "11/14", "status": "" },
  { "name": "MeteoHeroes Saving Planet Earth", "price": "3.71", "region": "E", "data": "11/14", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.00", "region": "U", "data": "12/1/", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.00", "region": "U", "data": "12/1/", "status": "" },
  { "name": "Mina & Michi", "price": "0.08", "region": "A", "data": "11/14", "status": "" },
  { "name": "Monochrome Order", "price": "0.31", "region": "A", "data": "11/14", "status": "" },
  { "name": "Monster Prom: XXL", "price": "0.22", "region": "A", "data": "11/14", "status": "" },
  { "name": "Moto Rush GT", "price": "0.17", "region": "A", "data": "11/14", "status": "" },
  { "name": "Mount & Blade II: Bannerlord - Digital Companion", "price": "0.28", "region": "A", "data": "11/14", "status": "" },
  { "name": "Mount & Blade II: Bannerlord Digital Deluxe Edition", "price": "12.12", "region": "E", "data": "11/14", "status": "" },
  { "name": "Mount & Blade: Warband", "price": "0.14", "region": "A", "data": "11/14", "status": "" },
  { "name": "MudRunner - American Wilds Edition", "price": "0.69", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "Murder Is Game Over", "price": "0.16", "region": "A", "data": "11/11", "status": "" },
  { "name": "Mutazione", "price": "0.57", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "NBA 2K24 Black Mamba Edition", "price": "42.71", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "Narcos: Rise of the Cartels", "price": "0.12", "region": "A", "data": "11/17", "status": "" },
  { "name": "Necromunda: Hired Gun", "price": "2.14", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "Neko Rescue Tale", "price": "2.00", "region": "A", "data": "11/14", "status": "" },
  { "name": "Newfound Courage", "price": "0.09", "region": "A", "data": "11/14", "status": "" },
  { "name": "Next Space Rebels", "price": "0.41", "region": "A", "data": "11/14", "status": "" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.10", "region": "A", "data": "5/31/", "status": "" },
  { "name": "No Son Of Mine", "price": "0.49", "region": "A", "data": "11/13", "status": "" },
  { "name": "Not For Broadcast", "price": "2.49", "region": "E", "data": "11/14", "status": "" },
  { "name": "Not for Broadcast Deluxe Edition", "price": "0.57", "region": "A", "data": "11/14", "status": "" },
  { "name": "Orbital Racer", "price": "0.43", "region": "A", "data": "11/14", "status": "" },
  { "name": "Order of Battle: World War II", "price": "0.61", "region": "A", "data": "11/14", "status": "" },
  { "name": "Outbreak Co-Op Collection", "price": "0.18", "region": "A", "data": "11/14", "status": "" },
  { "name": "Outbreak Definitive Collection", "price": "0.61", "region": "A", "data": "11/14", "status": "" },
  { "name": "Outbreak Diamond Collection", "price": "1.07", "region": "A", "data": "11/14", "status": "" },
  { "name": "PUSS!", "price": "0.12", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "Phantom Doctrine", "price": "0.11", "region": "A", "data": "11/14", "status": "" },
  { "name": "Pit People", "price": "0.20", "region": "A", "data": "11/14", "status": "" },
  { "name": "Pixel Gladiator", "price": "0.03", "region": "A", "data": "11/14", "status": "" },
  { "name": "Placid Plastic Duck Simulator", "price": "4.57", "region": "A", "data": "11/14", "status": "" },
  { "name": "Plague Inc: Evolved", "price": "0.15", "region": "A", "data": "11/14", "status": "" },
  { "name": "Planetbase", "price": "0.31", "region": "A", "data": "11/14", "status": "" },
  { "name": "Police Simulator: Patrol Officers", "price": "8.57", "region": "A", "data": "11/17", "status": "" },
  { "name": "Pool Nation FX", "price": "0.12", "region": "A", "data": "11/14", "status": "" },
  { "name": "Pool Nation Snooker Bundle", "price": "0.15", "region": "A", "data": "11/14", "status": "" },
  { "name": "Prison Tycoon: Under New Management", "price": "0.72", "region": "A", "data": "11/14", "status": "" },
  { "name": "Project Wingman", "price": "0.51", "region": "A", "data": "11/14", "status": "" },
  { "name": "Pumped BMX Pro", "price": "0.09", "region": "A", "data": "11/17", "status": "" },
  { "name": "Punch Club 2: Fast Forward", "price": "0.65", "region": "A", "data": "11/14", "status": "" },
  { "name": "Pure Chess Grandmaster Edition", "price": "0.12", "region": "A", "data": "11/14", "status": "" },
  { "name": "Pure Pool", "price": "0.10", "region": "A", "data": "11/14", "status": "" },
  { "name": "Q.U.B.E. 10th Anniversary", "price": "1.82", "region": "A", "data": "11/14", "status": "" },
  { "name": "Q.U.B.E. 2 Ultimate Edition", "price": "2.37", "region": "A", "data": "11/14", "status": "" },
  { "name": "Real Heroes: Firefighter HD", "price": "0.43", "region": "A", "data": "11/14", "status": "" },
  { "name": "Realpolitiks New Power", "price": "0.10", "region": "A", "data": "11/14", "status": "" },
  { "name": "Red Dead Redemption 2: Ultimate Edition", "price": "6.00", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "Retro Tank Arcade", "price": "0.04", "region": "A", "data": "11/15", "status": "" },
  { "name": "Rip Them Off", "price": "0.11", "region": "A", "data": "11/14", "status": "" },
  { "name": "Rush Rally Origins", "price": "0.30", "region": "A", "data": "11/14", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "3.65", "region": "A", "data": "12/31", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "4.88", "region": "A", "data": "1/1/2", "status": "" },
  { "name": "Sacrifice Your Friends", "price": "0.24", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "Sail Forth", "price": "0.61", "region": "A", "data": "11/14", "status": "" },
  { "name": "Seeds of Resilience", "price": "0.06", "region": "A", "data": "11/14", "status": "" },
  { "name": "Serial Cleaner", "price": "0.04", "region": "A", "data": "11/17", "status": "" },
  { "name": "Session: Skate Sim", "price": "1.02", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "Shadowblade Odyssey", "price": "0.04", "region": "A", "data": "11/8/", "status": "" },
  { "name": "Ship Graveyard Simulator", "price": "0.32", "region": "A", "data": "11/14", "status": "" },
  { "name": "Shredders", "price": "0.82", "region": "A", "data": "11/14", "status": "" },
  { "name": "Sifu", "price": "5.00", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "SimAirport", "price": "0.57", "region": "A", "data": "11/14", "status": "" },
  { "name": "Simulator Pack: Gas Station Simulator and Treasure Hunter Simulator", "price": "0.77", "region": "A", "data": "11/14", "status": "" },
  { "name": "Simulator Pack: Treasure Hunter Simulator and Gold Rush: The Game (DOUBLE BUNDLE)", "price": "7.54", "region": "A", "data": "11/14", "status": "" },
  { "name": "Size Matters", "price": "0.20", "region": "A", "data": "11/14", "status": "" },
  { "name": "Sky Rogue", "price": "0.20", "region": "A", "data": "11/14", "status": "" },
  { "name": "Snooker 19", "price": "0.51", "region": "A", "data": "11/14", "status": "" },
  { "name": "Snooker 19 Gold Edition", "price": "0.60", "region": "A", "data": "11/14", "status": "" },
  { "name": "Snooker Nation Championship", "price": "0.12", "region": "A", "data": "11/14", "status": "" },
  { "name": "SnowRunner - 2-Year Anniversary Edition", "price": "14.05", "region": "T", "data": "11/14", "status": "GOLD" },
  { "name": "SongPop Party", "price": "2.91", "region": "E", "data": "11/28", "status": "" },
  { "name": "Space Crew: Legendary Edition", "price": "0.51", "region": "A", "data": "11/17", "status": "" },
  { "name": "Space Engineers", "price": "0.41", "region": "A", "data": "11/14", "status": "" },
  { "name": "Space Raiders in Space + Clumsy Rush", "price": "0.27", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "Space Warlord Organ Trading Simulator", "price": "0.49", "region": "A", "data": "11/14", "status": "" },
  { "name": "Sparkle Bundle", "price": "0.36", "region": "A", "data": "12/31", "status": "" },
  { "name": "Speed Truck Racing", "price": "0.14", "region": "A", "data": "11/14", "status": "" },
  { "name": "Speed or Death", "price": "0.13", "region": "A", "data": "11/14", "status": "" },
  { "name": "SpellForce: Conquest of Eo", "price": "8.43", "region": "T", "data": "11/7/", "status": "" },
  { "name": "Spirit of the North: Enhanced Edition", "price": "0.31", "region": "A", "data": "11/14", "status": "" },
  { "name": "Spirittea", "price": "0.73", "region": "A", "data": "11/13", "status": "" },
  { "name": "Starpoint Gemini 2", "price": "4.92", "region": "H", "data": "11/14", "status": "" },
  { "name": "Starpoint Gemini Warlords", "price": "6.36", "region": "C", "data": "11/14", "status": "" },
  { "name": "Startup Company Console Edition", "price": "0.43", "region": "A", "data": "11/14", "status": "" },
  { "name": "SteamWorld Build", "price": "5.47", "region": "A", "data": "12/1/", "status": "" },
  { "name": "SteamWorld Build & Dig Bundle", "price": "5.63", "region": "A", "data": "12/1/", "status": "" },
  { "name": "Steel Rain X", "price": "0.10", "region": "A", "data": "11/14", "status": "" },
  { "name": "Steelrising - Standard Edition", "price": "4.46", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "Strategic Mind: Fight for Freedom", "price": "0.74", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "Strategic Mind: Spirit of Liberty", "price": "5.40", "region": "A", "data": "11/10", "status": "" },
  { "name": "Super Perils of Baking", "price": "0.71", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "Super Pixel Kid", "price": "0.04", "region": "A", "data": "11/17", "status": "" },
  { "name": "SuperMash", "price": "0.08", "region": "A", "data": "11/14", "status": "" },
  { "name": "Surviving Franchise Bundle", "price": "0.78", "region": "A", "data": "11/14", "status": "" },
  { "name": "Swapshot (Xbox & PC)", "price": "2.58", "region": "I", "data": "11/9/", "status": "" },
  { "name": "Sweet Bakery Tycoon", "price": "0.14", "region": "A", "data": "11/14", "status": "" },
  { "name": "Tank Mechanic Simulator", "price": "0.28", "region": "A", "data": "11/14", "status": "" },
  { "name": "Ten Dates", "price": "0.46", "region": "A", "data": "11/14", "status": "" },
  { "name": "Tested on Humans: Escape Room", "price": "0.24", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "The Assembly", "price": "0.11", "region": "A", "data": "11/14", "status": "" },
  { "name": "The Banner Saga", "price": "0.14", "region": "A", "data": "11/14", "status": "" },
  { "name": "The Banner Saga 2", "price": "0.14", "region": "A", "data": "11/14", "status": "" },
  { "name": "The Darkside Detective - Series Edition", "price": "0.61", "region": "A", "data": "11/14", "status": "" },
  { "name": "The Dead Tree of Ranchiuna", "price": "0.16", "region": "A", "data": "11/14", "status": "" },
  { "name": "The Drone Racing League Simulator", "price": "0.20", "region": "A", "data": "11/14", "status": "" },
  { "name": "The Enigma Machine", "price": "0.15", "region": "A", "data": "11/14", "status": "" },
  { "name": "The Escapists: Supermax Edition", "price": "0.72", "region": "A", "data": "4/30/", "status": "" },
  { "name": "The FMV Collection 1", "price": "0.93", "region": "A", "data": "11/14", "status": "" },
  { "name": "The FMV Collection 2", "price": "0.93", "region": "A", "data": "11/14", "status": "" },
  { "name": "The Fast Journey", "price": "0.19", "region": "A", "data": "11/10", "status": "" },
  { "name": "The Fast Journey (for Windows 10)", "price": "0.19", "region": "A", "data": "11/10", "status": "" },
  { "name": "The First Tree", "price": "0.08", "region": "A", "data": "11/14", "status": "" },
  { "name": "The Isle Tide Hotel", "price": "0.61", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "The Jackbox Party Quadpack", "price": "1.60", "region": "A", "data": "12/31", "status": "" },
  { "name": "The Outer Worlds: Board-Approved Bundle", "price": "15.14", "region": "T", "data": "11/14", "status": "GOLD" },
  { "name": "The Plane Effect", "price": "0.32", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "The Texas Chain Saw Massacre", "price": "8.04", "region": "E", "data": "11/8/", "status": "" },
  { "name": "They Are Billions", "price": "0.37", "region": "A", "data": "11/14", "status": "" },
  { "name": "Thief Simulator", "price": "0.28", "region": "A", "data": "11/14", "status": "" },
  { "name": "This War of Mine - Complete Edition", "price": "0.22", "region": "A", "data": "11/14", "status": "" },
  { "name": "Thunder Ray", "price": "1.27", "region": "T", "data": "11/14", "status": "" },
  { "name": "Time on Frog Island", "price": "0.36", "region": "A", "data": "11/14", "status": "" },
  { "name": "Tin Can", "price": "3.00", "region": "A", "data": "11/14", "status": "" },
  { "name": "Tin Can: Supporter Edition", "price": "3.75", "region": "A", "data": "11/14", "status": "" },
  { "name": "Tip Top: Don’t fall!", "price": "0.20", "region": "A", "data": "11/14", "status": "" },
  { "name": "Tomb Raider I-III Remastered Starring Lara Croft", "price": "1.10", "region": "A", "data": "2/13/", "status": "" },
  { "name": "Totally Accurate Battle Simulator", "price": "0.57", "region": "A", "data": "11/14", "status": "" },
  { "name": "Train Sim World® 4: Deluxe Edition", "price": "12.09", "region": "E", "data": "11/14", "status": "" },
  { "name": "Train Station Simulator", "price": "0.22", "region": "A", "data": "11/14", "status": "" },
  { "name": "Train Valley: Console Edition", "price": "0.47", "region": "T", "data": "11/14", "status": "" },
  { "name": "TramSim: Console Edition - Deluxe", "price": "12.73", "region": "T", "data": "11/14", "status": "" },
  { "name": "Transport Fever 2: Console Edition - Deluxe", "price": "14.00", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "Tribal Pass", "price": "0.07", "region": "A", "data": "11/14", "status": "" },
  { "name": "Twin Breaker: A Sacred Symbols Adventure", "price": "0.12", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "Ultimate General: Gettysburg", "price": "0.49", "region": "A", "data": "11/14", "status": "" },
  { "name": "Ultimate Racing 2D", "price": "0.08", "region": "A", "data": "11/14", "status": "" },
  { "name": "Under the Jolly Roger", "price": "0.44", "region": "A", "data": "11/14", "status": "" },
  { "name": "Under the Jolly Roger - Complete Edition", "price": "0.71", "region": "A", "data": "11/14", "status": "" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "0.39", "region": "A", "data": "12/30", "status": "" },
  { "name": "Until the Last Plane", "price": "0.20", "region": "A", "data": "11/14", "status": "" },
  { "name": "Urban Trial Tricky Deluxe Edition", "price": "0.16", "region": "A", "data": "11/14", "status": "" },
  { "name": "Urbek City Builder", "price": "0.50", "region": "A", "data": "11/14", "status": "" },
  { "name": "Vegas Party", "price": "0.03", "region": "A", "data": "11/14", "status": "" },
  { "name": "Vengeful Heart", "price": "0.20", "region": "A", "data": "11/14", "status": "" },
  { "name": "Vermintide - Digital Value Pack", "price": "1.14", "region": "A", "data": "3/7/2", "status": "" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "1.82", "region": "A", "data": "8/31/", "status": "" },
  { "name": "WW2: Bunker Simulator", "price": "0.50", "region": "A", "data": "11/14", "status": "" },
  { "name": "Walden, a game", "price": "0.20", "region": "A", "data": "11/14", "status": "" },
  { "name": "Warhammer 40,000: Inquisitor - Martyr Ultimate Edition", "price": "0.82", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "Wayward Strand", "price": "3.24", "region": "A", "data": "11/14", "status": "" },
  { "name": "We Are The Caretakers", "price": "2.71", "region": "A", "data": "11/14", "status": "" },
  { "name": "Where the Water Tastes Like Wine: Xbox Edition", "price": "0.16", "region": "A", "data": "11/14", "status": "" },
  { "name": "Who's Your Daddy?!", "price": "1.42", "region": "A", "data": "11/14", "status": "" },
  { "name": "Wizardry School: Escape Room", "price": "0.36", "region": "A", "data": "11/9/", "status": "" },
  { "name": "Worldless", "price": "0.73", "region": "A", "data": "11/21", "status": "" },
  { "name": "Worlds of Magic: Planar Conquest", "price": "0.25", "region": "A", "data": "11/14", "status": "" },
  { "name": "X-Force Genesis PC Edition", "price": "0.17", "region": "A", "data": "11/10", "status": "" },
  { "name": "XCOM® 2", "price": "0.26", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "XCOM® 2 Digital Deluxe Edition", "price": "0.56", "region": "A", "data": "11/14", "status": "GOLD" },
  { "name": "YOHANE THE PARHELION -BLAZE in the DEEPBLUE-", "price": "1.10", "region": "A", "data": "11/16", "status": "" },
  { "name": "art of rally", "price": "2.79", "region": "A", "data": "11/14", "status": "" }
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
