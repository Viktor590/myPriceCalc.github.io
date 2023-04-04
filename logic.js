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
  { "name": "A Frog's Job", "price": "0.17", "region": "A", "data": "4/7/", "status": "" },
  { "name": "A Gummy's Life", "price": "0.68", "region": "A", "data": "4/7/", "status": "" },
  { "name": "A Memoir Blue", "price": "0.41", "region": "A", "data": "4/4/", "status": "" },
  { "name": "A Plague Tale: Innocence - Windows 10", "price": "2.01", "region": "A", "data": "4/4/", "status": "" },
  { "name": "A Sketchbook About Her Sun", "price": "0.20", "region": "A", "data": "4/4/", "status": "" },
  { "name": "ACE COMBAT™ 7: SKIES UNKNOWN - TOP GUN: Maverick Ultimate Edition", "price": "3.73", "region": "A", "data": "4/4/", "status": "" },
  { "name": "AQUA KITTY UDX: Xbox One Ultra Edition", "price": "0.86", "region": "E", "data": "4/4/", "status": "" },
  { "name": "Absolute Deduction bundle", "price": "13.79", "region": "E", "data": "4/4/", "status": "" },
  { "name": "Aces of the Luftwaffe - Squadron", "price": "0.24", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Achtung! Cthulhu Tactics", "price": "0.42", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Adios", "price": "0.67", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Adventures of Bertram Fiddle: Episode 2: A Bleaker Predicklement", "price": "0.27", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Adventures of Chris", "price": "0.26", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Aery Series Bundle", "price": "1.92", "region": "A", "data": "4/16", "status": "" },
  { "name": "Afterglitch", "price": "0.82", "region": "A", "data": "4/4/", "status": "GOLD" },
  { "name": "Agatha Knife", "price": "0.17", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Agent A: A puzzle in disguise", "price": "0.10", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Akuto: Showdown", "price": "0.14", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Almost My Floor", "price": "0.34", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Almost My Floor (Xbox Series X|S)", "price": "0.34", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Among Us", "price": "0.23", "region": "A", "data": "4/6/", "status": "" },
  { "name": "An Airport for Aliens Currently Run by Dogs", "price": "0.82", "region": "A", "data": "4/7/", "status": "" },
  { "name": "AntVentor", "price": "0.24", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Arcade Islands: Volume One", "price": "0.24", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Armikrog", "price": "0.14", "region": "A", "data": "4/4/", "status": "" },
  { "name": "As Far As The Eye", "price": "1.20", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Assassin's Creed Triple Pack: Black Flag, Unity, Syndicate", "price": "1.08", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Assassin's Creed Unity", "price": "1.19", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Assassin's Creed® Odyssey - DELUXE EDITION", "price": "3.59", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Assassin's Creed® Origins - DELUXE EDITION", "price": "3.29", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Assassin's Creed® Valhalla Deluxe Edition", "price": "7.89", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Awarded Platformer Bundle", "price": "0.79", "region": "A", "data": "12/3", "status": "" },
  { "name": "Ayo the Clown", "price": "0.82", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Bassmaster® Fishing 2022", "price": "3.31", "region": "T", "data": "4/4/", "status": "GOLD" },
  { "name": "Bassmaster® Fishing 2022: 2022 Bassmaster Classic®", "price": "4.38", "region": "T", "data": "4/4/", "status": "GOLD" },
  { "name": "Bassmaster® Fishing 2022: Deluxe Edition", "price": "3.67", "region": "B", "data": "4/4/", "status": "GOLD" },
  { "name": "Bassmaster® Fishing 2022: Super Deluxe Edition", "price": "2.89", "region": "T", "data": "4/4/", "status": "GOLD" },
  { "name": "Batman™: Arkham Knight", "price": "1.05", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Best Month Ever!", "price": "0.82", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Billy 101", "price": "0.27", "region": "A", "data": "4/15", "status": "" },
  { "name": "BioShock 2 Remastered", "price": "1.48", "region": "T", "data": "4/4/", "status": "" },
  { "name": "BioShock Infinite: The Complete Edition", "price": "2.38", "region": "T", "data": "4/4/", "status": "" },
  { "name": "BioShock Remastered", "price": "2.38", "region": "T", "data": "4/4/", "status": "" },
  { "name": "Bite the Bullet", "price": "0.20", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Blazing Beaks", "price": "0.34", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Blizzard® Arcade Collection", "price": "3.09", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Bomber Crew", "price": "0.72", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Bomber Crew Deluxe Edition", "price": "0.86", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Borderlands 3: Next Level Edition", "price": "2.30", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Borderlands 3: Ultimate Edition", "price": "6.46", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Brawl Chess + Cyber Protocol", "price": "0.14", "region": "A", "data": "4/4/", "status": "GOLD" },
  { "name": "Bullet Beat", "price": "0.18", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Bullet Beat (for Windows 10)", "price": "0.18", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Butterflies Bundle", "price": "0.36", "region": "A", "data": "4/4/", "status": "" },
  { "name": "CAN ANDROIDS PRAY: BLUE", "price": "0.32", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Call of Duty®: Black Ops Cold War - Cross-Gen Bundle", "price": "12.25", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Call of Duty®: Vanguard - Cross-Gen Bundle", "price": "15.07", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Call of Duty®: WWII - Digital Deluxe", "price": "9.79", "region": "T", "data": "4/4/", "status": "" },
  { "name": "Call of Duty®: WWII - Gold Edition", "price": "2.84", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Castle on the Coast", "price": "0.76", "region": "A", "data": "4/4/", "status": "GOLD" },
  { "name": "CastleStorm II", "price": "0.48", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Catie in MeowmeowLand", "price": "0.41", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Chameneon", "price": "0.14", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Chef's Tail", "price": "0.39", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Chinatown Detective Agency", "price": "1.03", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Cinders", "price": "0.41", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Citizen Sleeper", "price": "0.95", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Clone Drone in the Danger Zone", "price": "0.82", "region": "A", "data": "4/6/", "status": "" },
  { "name": "Clunky Hero", "price": "1.66", "region": "T", "data": "4/7/", "status": "" },
  { "name": "Coffee Talk Episode 2: Hibiscus and Butterfly", "price": "1.99", "region": "T", "data": "4/19", "status": "" },
  { "name": "Commandos 2 & Praetorians: HD Remaster Double Pack", "price": "1.03", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Conan Chop Chop", "price": "1.67", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Cook, Serve, Delicious! 2!!", "price": "0.22", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Cook, Serve, Delicious! 3?!", "price": "0.48", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Cotton Games’ New Game Bundle", "price": "0.33", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Couch Multiplayer Bundle: Genetic Disaster, Super Cyborg ...", "price": "0.73", "region": "A", "data": "4/4/", "status": "GOLD" },
  { "name": "Crash Bandicoot™ - Crashiversary Bundle", "price": "8.72", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Crash Bandicoot™ - Quadrilogy Bundle", "price": "5.71", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Crash Bandicoot™ 4: It’s About Time", "price": "4.74", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Crash Bandicoot™ Bundle - N. Sane Trilogy + CTR Nitro-Fueled", "price": "4.18", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Crash Bandicoot™ N. Sane Trilogy", "price": "2.29", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Crash™ + Spyro™ Triple Play Bundle", "price": "9.57", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Crash™ Team Racing Nitro-Fueled + Spyro™ Game Bundle", "price": "4.18", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Crash™ Team Racing Nitro-Fueled - Nitros Oxide Edition", "price": "5.02", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Crazy Strike Bowling EX", "price": "0.19", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Crime Opera: The Butterfly Effect", "price": "0.27", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Crossroads Inn", "price": "0.82", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Cymatically Muffed", "price": "0.68", "region": "A", "data": "4/4/", "status": "GOLD" },
  { "name": "DARKLAND 3", "price": "0.07", "region": "A", "data": "4/7/", "status": "" },
  { "name": "DEEEER Simulator: Your Average Everyday Deer Game", "price": "0.82", "region": "A", "data": "4/7/", "status": "" },
  { "name": "DRAGON BALL FIGHTERZ - Ultimate Edition", "price": "7.43", "region": "T", "data": "4/4/", "status": "" },
  { "name": "DRAGON BALL XENOVERSE Super Bundle", "price": "2.46", "region": "T", "data": "4/4/", "status": "" },
  { "name": "DRAGON BALL Z: KAKAROT Legendary Edition", "price": "31.23", "region": "T", "data": "4/4/", "status": "" },
  { "name": "Dakar Desert Rally", "price": "1.92", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Dark Grim Mariupolis", "price": "0.20", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Dark Grim Mariupolis (for Windows 10)", "price": "0.17", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Dark Quest 2", "price": "0.41", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Darksiders Fury's Collection - War and Death", "price": "0.48", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Darksiders Genesis", "price": "0.90", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Darksiders III", "price": "2.11", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Dashing Orange", "price": "0.25", "region": "A", "data": "4/6/", "status": "" },
  { "name": "Demetrios - The BIG Cynical Adventure", "price": "0.05", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Deployment", "price": "0.14", "region": "E", "data": "4/4/", "status": "" },
  { "name": "Deponia", "price": "0.09", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Diablo® II: Resurrected™", "price": "3.79", "region": "E", "data": "4/4/", "status": "" },
  { "name": "Discolored", "price": "0.37", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Distrust", "price": "0.14", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Divine Knockout (DKO) - Founders Edition", "price": "3.66", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Divine Knockout (DKO) - Ultimate Edition", "price": "7.33", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Divinity: Original Sin - Enhanced Edition", "price": "1.41", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Divinity: Original Sin - The Source Saga", "price": "2.26", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Divinity: Original Sin 2 - Definitive Edition", "price": "1.37", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Dodgeball Academia", "price": "1.03", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Dog’s Donuts", "price": "0.14", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Don't Touch this Button!", "price": "0.17", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Dou", "price": "0.07", "region": "A", "data": "4/5/", "status": "" },
  { "name": "Down in Bermuda", "price": "0.14", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Dragon Pinball", "price": "0.17", "region": "A", "data": "4/8/", "status": "" },
  { "name": "Dying Light: Definitive Edition", "price": "2.59", "region": "T", "data": "4/4/", "status": "" },
  { "name": "Déjà Vu", "price": "0.14", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Eastasiasoft Indie Shmup Bundle", "price": "0.21", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Elex", "price": "2.32", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Embr", "price": "0.41", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Escape Dead Island", "price": "0.19", "region": "A", "data": "12/3", "status": "" },
  { "name": "Escape From Tethys", "price": "0.34", "region": "A", "data": "4/4/", "status": "GOLD" },
  { "name": "Escape from Life Inc", "price": "0.41", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Evil Dead: The Game", "price": "1.37", "region": "A", "data": "4/4/", "status": "GOLD" },
  { "name": "Evil Dead: The Game - Deluxe Edition", "price": "2.06", "region": "A", "data": "4/4/", "status": "GOLD" },
  { "name": "FIFA 22 Xbox One", "price": "20.84", "region": "T", "data": "12/3", "status": "" },
  { "name": "FIFA 22 Xbox Series X|S", "price": "23.34", "region": "T", "data": "12/3", "status": "" },
  { "name": "FOCUS INDIES BUNDLE - Curse of the Dead Gods + Shady Part of Me + Aeon Must Die!", "price": "7.65", "region": "A", "data": "4/4/", "status": "GOLD" },
  { "name": "Falling Out", "price": "0.60", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Fantasy Dash", "price": "0.07", "region": "A", "data": "4/10", "status": "" },
  { "name": "Far Cry® 5", "price": "1.65", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Far Cry® 6", "price": "7.18", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Far Cry® New Dawn Deluxe Edition", "price": "1.72", "region": "A", "data": "4/4/", "status": "GOLD" },
  { "name": "Far Cry®5 Gold Edition", "price": "2.37", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Felix The Reaper", "price": "0.07", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Fishing Planet - Advanced Starter Pack", "price": "1.09", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Fishing Planet - Deluxe Starter Pack", "price": "1.79", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Fishing Planet - Golden Starter Pack", "price": "2.39", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Flat Heroes", "price": "0.71", "region": "A", "data": "4/4/", "status": "GOLD" },
  { "name": "Food Truck Tycoon", "price": "1.00", "region": "E", "data": "4/7/", "status": "" },
  { "name": "Food Truck Tycoon + Flowlines VS", "price": "0.33", "region": "A", "data": "4/15", "status": "" },
  { "name": "Forspoken", "price": "22.44", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Forspoken Digital Deluxe Edition", "price": "32.05", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Forza Horizon 5 + 4 Premium Upgrade Bundle", "price": "11.52", "region": "E", "data": "4/6/", "status": "" },
  { "name": "Forza Horizon 5 Deluxe Edition", "price": "13.79", "region": "E", "data": "4/4/", "status": "" },
  { "name": "Forza Horizon 5 Premium Add-Ons Bundle", "price": "8.64", "region": "E", "data": "4/6/", "status": "" },
  { "name": "Forza Horizon 5 Premium Edition", "price": "17.28", "region": "E", "data": "4/4/", "status": "" },
  { "name": "Forza Horizon 5 Standard Edition", "price": "10.39", "region": "E", "data": "4/4/", "status": "" },
  { "name": "Forza Horizon 5 and Forza Horizon 4 Premium Editions Bundle", "price": "20.11", "region": "E", "data": "4/4/", "status": "" },
  { "name": "Fueled Up", "price": "0.82", "region": "A", "data": "4/4/", "status": "GOLD" },
  { "name": "Fuga: Melodies of Steel", "price": "4.20", "region": "T", "data": "4/4/", "status": "" },
  { "name": "Fuga: Melodies of Steel - Deluxe Edition", "price": "6.27", "region": "T", "data": "4/4/", "status": "" },
  { "name": "Gabriels Worlds The Adventure", "price": "0.28", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Galaxy Squad", "price": "0.27", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Gang Beasts", "price": "0.38", "region": "A", "data": "4/6/", "status": "" },
  { "name": "Genesis Noir", "price": "0.41", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Ghostbusters: The Video Game Remastered", "price": "0.51", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Gnomes Garden 3 in 1 Bundle", "price": "0.20", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Gnomes Garden: Lost King", "price": "0.27", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Goetia", "price": "0.07", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Gorogoa", "price": "0.21", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Gothic Platformer Games Bundle", "price": "0.66", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Grapple Dog", "price": "0.51", "region": "A", "data": "4/7/", "status": "" },
  { "name": "GreedFall", "price": "3.42", "region": "T", "data": "4/4/", "status": "GOLD" },
  { "name": "HEROish", "price": "0.68", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Hasbro Family Fun Pack - Super Edition", "price": "0.96", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Headliner: NoviNews", "price": "0.38", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Headspun", "price": "0.37", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Hero Express", "price": "0.13", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Hidden Through Time", "price": "0.28", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Hotshot Racing", "price": "0.27", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Hungry Shark® World", "price": "0.60", "region": "A", "data": "4/4/", "status": "GOLD" },
  { "name": "Hunt Ducks 4", "price": "0.07", "region": "A", "data": "4/13", "status": "" },
  { "name": "Hunt: Showdown", "price": "2.81", "region": "T", "data": "4/4/", "status": "GOLD" },
  { "name": "Hunt: Showdown - Deluxe Edition", "price": "2.21", "region": "T", "data": "4/4/", "status": "GOLD" },
  { "name": "Hunt: Showdown - Gold Edition", "price": "2.57", "region": "T", "data": "4/4/", "status": "GOLD" },
  { "name": "I Am Dead", "price": "0.68", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Indiecalypse", "price": "0.22", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Indivisible", "price": "2.33", "region": "T", "data": "4/6/", "status": "" },
  { "name": "Infinite Minigolf", "price": "0.25", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Injustice™ 2", "price": "0.72", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Inkulinati (Game Preview)", "price": "5.70", "region": "E", "data": "4/7/", "status": "" },
  { "name": "Iron Crypticle", "price": "0.13", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Island Farmer", "price": "0.70", "region": "E", "data": "4/5/", "status": "" },
  { "name": "Journey To The Savage Planet: Employee Of The Month", "price": "6.63", "region": "T", "data": "4/4/", "status": "" },
  { "name": "Joy Ball Adventure", "price": "0.07", "region": "A", "data": "4/14", "status": "" },
  { "name": "Jump and Roll", "price": "0.29", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Just Die Already", "price": "0.43", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Kaiju Wars", "price": "0.95", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Keep Talking and Nobody Explodes", "price": "0.51", "region": "A", "data": "4/4/", "status": "GOLD" },
  { "name": "Kerbal Space Program Enhanced Edition Complete", "price": "4.62", "region": "T", "data": "4/4/", "status": "GOLD" },
  { "name": "King of the Arcade", "price": "0.44", "region": "A", "data": "4/12", "status": "" },
  { "name": "LEGO® Batman™ 3: Beyond Gotham", "price": "0.66", "region": "A", "data": "4/7/", "status": "" },
  { "name": "LEGO® CITY Undercover", "price": "0.96", "region": "A", "data": "4/7/", "status": "" },
  { "name": "LEGO® DC Super-Villains", "price": "0.91", "region": "A", "data": "4/7/", "status": "" },
  { "name": "LEGO® Marvel Super Heroes 2", "price": "1.43", "region": "A", "data": "4/7/", "status": "" },
  { "name": "LEGO® Marvel's Avengers", "price": "1.31", "region": "A", "data": "4/7/", "status": "" },
  { "name": "LEGO® Star Wars™:The Skywalker Saga Deluxe Edition", "price": "8.03", "region": "E", "data": "4/7/", "status": "" },
  { "name": "LEGO® The Hobbit™", "price": "1.40", "region": "T", "data": "4/7/", "status": "" },
  { "name": "LEGO® Worlds", "price": "0.76", "region": "A", "data": "4/7/", "status": "" },
  { "name": "LUNARK", "price": "1.22", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Lab Crisis", "price": "0.25", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Lab Crisis (for Windows 10)", "price": "0.25", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Lair of the Clockwork God", "price": "0.20", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Landflix Odyssey", "price": "0.10", "region": "A", "data": "4/4/", "status": "" },
  { "name": "League of Enthusiastic Losers", "price": "0.23", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Legal Dungeon", "price": "0.44", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Leisure Suit Larry - Wet Dreams Don't Dry", "price": "1.43", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Leisure Suit Larry - Wet Dreams Dry Twice", "price": "2.68", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Leisure Suit Larry - Wet Dreams Saga Bundle", "price": "2.49", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Light & Dark Bundle", "price": "1.07", "region": "A", "data": "11/2", "status": "" },
  { "name": "Little Mage Adventure", "price": "0.07", "region": "A", "data": "4/10", "status": "" },
  { "name": "Little Misfortune", "price": "0.48", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Long Ago: A Puzzle Tale", "price": "1.00", "region": "E", "data": "4/4/", "status": "" },
  { "name": "Lord Winklebottom Investigates", "price": "1.04", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Lost Artifacts: Soulstone", "price": "0.27", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Lost Artifacts: Time Machine", "price": "0.20", "region": "A", "data": "4/4/", "status": "" },
  { "name": "MELTY BLOOD: TYPE LUMINA", "price": "2.05", "region": "A", "data": "4/7/", "status": "" },
  { "name": "MELTY BLOOD: TYPE LUMINA - Deluxe Edition", "price": "2.87", "region": "A", "data": "4/7/", "status": "" },
  { "name": "MXGP 2020 - The Official Motocross Videogame", "price": "1.43", "region": "A", "data": "4/4/", "status": "" },
  { "name": "MXGP3", "price": "0.48", "region": "A", "data": "4/4/", "status": "" },
  { "name": "MY HERO ONE'S JUSTICE 2", "price": "2.99", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Machinarium", "price": "1.19", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Madden NFL 19", "price": "25.35", "region": "C", "data": "12/3", "status": "" },
  { "name": "Madden NFL 22 Xbox One", "price": "18.42", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 22 Xbox Series X|S", "price": "21.43", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 23 Xbox One", "price": "24.49", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 23 Xbox Series X|S", "price": "28.70", "region": "A", "data": "12/3", "status": "" },
  { "name": "Mafia II: Definitive Edition", "price": "2.98", "region": "A", "data": "4/4/", "status": "GOLD" },
  { "name": "Mafia III: Definitive Edition", "price": "2.98", "region": "A", "data": "4/4/", "status": "GOLD" },
  { "name": "Maggie the Magnet", "price": "0.23", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Manual Samuel", "price": "0.05", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Marble Duel", "price": "0.70", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Marvel's Midnight Suns Digital+ Edition", "price": "21.53", "region": "A", "data": "4/4/", "status": "GOLD" },
  { "name": "Masters of Anima", "price": "0.47", "region": "A", "data": "4/4/", "status": "GOLD" },
  { "name": "Mastho is Together", "price": "0.17", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Maze Blaze", "price": "0.17", "region": "A", "data": "4/4/", "status": "" },
  { "name": "MechWarrior 5: Mercenaries - JumpShip Edition", "price": "2.06", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Meet Your Maker: Deluxe Edition", "price": "13.35", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.00", "region": "U", "data": "12/1", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.00", "region": "U", "data": "12/1", "status": "" },
  { "name": "Middle-earth™: Shadow of War™", "price": "1.00", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Mini Madness", "price": "0.31", "region": "A", "data": "4/4/", "status": "GOLD" },
  { "name": "Minigolf Adventure", "price": "0.08", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Mokoko X", "price": "1.62", "region": "E", "data": "4/4/", "status": "" },
  { "name": "Monster Energy Supercross - Special Edition", "price": "1.43", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Monster Energy Supercross - The Official Videogame", "price": "0.96", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Monster Energy Supercross - The Official Videogame 5", "price": "3.83", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Monster Energy Supercross 5 - Special Edition", "price": "5.74", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Monster Jam Steel Titans", "price": "0.48", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Monster Prom: XXL", "price": "0.36", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Moon Raider and Sweet Witches Bundle", "price": "0.33", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Mothered - A Role-Playing Horror Game", "price": "0.54", "region": "A", "data": "4/14", "status": "" },
  { "name": "MotoGP™18", "price": "0.48", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Mr. Pumpkin Series Bundle", "price": "0.17", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Murder Diaries 3 - Santa's Trail of Blood", "price": "0.44", "region": "A", "data": "4/4/", "status": "GOLD" },
  { "name": "Mutazione", "price": "1.02", "region": "A", "data": "4/4/", "status": "" },
  { "name": "My Aunt is a Witch", "price": "0.34", "region": "A", "data": "4/4/", "status": "" },
  { "name": "NARUTO SHIPPUDEN™: Ultimate Ninja® STORM 4 ROAD TO BORUTO", "price": "1.35", "region": "T", "data": "4/4/", "status": "" },
  { "name": "NARUTO™: Ultimate Ninja® STORM", "price": "0.48", "region": "A", "data": "4/4/", "status": "" },
  { "name": "NEScape!", "price": "1.14", "region": "E", "data": "4/4/", "status": "" },
  { "name": "Necromunda: Underhive Wars", "price": "2.36", "region": "A", "data": "4/4/", "status": "GOLD" },
  { "name": "Nexoria: Dungeon Rogue Heroes", "price": "0.13", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Ni no Kuni Wrath of the White Witch™ Remastered", "price": "8.64", "region": "E", "data": "4/4/", "status": "" },
  { "name": "Ni no Kuni™ II: Revenant Kingdom - The Prince's Edition", "price": "20.27", "region": "E", "data": "4/4/", "status": "" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.17", "region": "A", "data": "5/31", "status": "" },
  { "name": "Nippon Marathon", "price": "0.26", "region": "A", "data": "4/7/", "status": "" },
  { "name": "No Longer Home", "price": "0.41", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Old Man's Journey", "price": "0.34", "region": "A", "data": "4/4/", "status": "" },
  { "name": "One Hundred Ways", "price": "0.20", "region": "A", "data": "4/4/", "status": "" },
  { "name": "One Step From Eden", "price": "0.68", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Operencia: The Stolen Sun", "price": "0.72", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Outbreak Co-Op Anthology", "price": "0.62", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Overcooked! 2 - Gourmet Edition", "price": "0.67", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Overcooked: Gourmet Edition", "price": "0.28", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Overloop", "price": "0.82", "region": "A", "data": "4/8/", "status": "" },
  { "name": "Overwatch® 2 - Hero Pack", "price": "8.61", "region": "A", "data": "4/4/", "status": "" },
  { "name": "PAC-MAN MUSEUM+", "price": "2.32", "region": "T", "data": "4/4/", "status": "" },
  { "name": "PGA TOUR 2K23 Deluxe Edition", "price": "21.05", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Palindrome Syndrome: Escape Room", "price": "2.30", "region": "E", "data": "4/6/", "status": "" },
  { "name": "Parasite Pack", "price": "0.24", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Phoenix Point: Behemoth Edition", "price": "1.54", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Pizza Tycoon", "price": "3.27", "region": "T", "data": "4/7/", "status": "" },
  { "name": "Power Rangers: Battle for the Grid", "price": "0.68", "region": "A", "data": "4/4/", "status": "GOLD" },
  { "name": "Power Rangers: Battle for the Grid - Digital Collector's Edition", "price": "1.03", "region": "A", "data": "4/4/", "status": "GOLD" },
  { "name": "Power Rangers: Battle for the Grid Super Edition", "price": "1.71", "region": "A", "data": "4/4/", "status": "GOLD" },
  { "name": "Prototype® Biohazard Bundle", "price": "1.15", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Prototype®2", "price": "0.86", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Pushy and Pully in Blockland", "price": "0.34", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Quern - Undying Thoughts", "price": "0.40", "region": "A", "data": "4/4/", "status": "" },
  { "name": "REZ PLZ", "price": "0.20", "region": "A", "data": "4/4/", "status": "GOLD" },
  { "name": "RIDE", "price": "0.23", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Radical Rex (QUByte Classics)", "price": "0.28", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Rally Rock 'N Racing", "price": "0.54", "region": "A", "data": "4/15", "status": "" },
  { "name": "Raptor Boyfriend: A High School Romance", "price": "0.67", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Re:Turn 2 - Runaway", "price": "0.25", "region": "A", "data": "4/4/", "status": "" },
  { "name": "ReactorX", "price": "0.20", "region": "A", "data": "4/4/", "status": "" },
  { "name": "ReactorX (for Windows 10)", "price": "0.20", "region": "A", "data": "4/4/", "status": "" },
  { "name": "ReactorX 2", "price": "0.30", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Redout 2", "price": "1.03", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Return to Monkey Island", "price": "5.34", "region": "E", "data": "4/4/", "status": "" },
  { "name": "Rick Henderson", "price": "0.39", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Riddled Corpses EX", "price": "0.10", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Royal Roads", "price": "0.27", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Rubber Bandits", "price": "1.15", "region": "E", "data": "4/7/", "status": "" },
  { "name": "Run Sausage Run!", "price": "0.17", "region": "A", "data": "4/7/", "status": "" },
  { "name": "RunBean Galactic", "price": "2.61", "region": "I", "data": "4/13", "status": "" },
  { "name": "SD GUNDAM BATTLE ALLIANCE Deluxe Edition", "price": "17.11", "region": "E", "data": "4/4/", "status": "" },
  { "name": "SOULCALIBUR VI Deluxe Edition", "price": "3.76", "region": "T", "data": "4/4/", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "6.12", "region": "A", "data": "12/3", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "8.18", "region": "A", "data": "1/1/", "status": "" },
  { "name": "Sam & Max Save the World", "price": "0.95", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Sam & Max Save the World + Beyond Time and Space Bundle", "price": "1.44", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Sam & Max: Beyond Time and Space", "price": "0.95", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Shadow Tactics: Blades of the Shogun", "price": "0.15", "region": "T", "data": "4/4/", "status": "" },
  { "name": "Shady Part of Me", "price": "1.15", "region": "A", "data": "4/4/", "status": "GOLD" },
  { "name": "Shakes on a Plane", "price": "0.14", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Shape Up", "price": "0.24", "region": "A", "data": "4/4/", "status": "GOLD" },
  { "name": "Shapik: The Quest", "price": "0.30", "region": "A", "data": "4/14", "status": "" },
  { "name": "Sherlock Holmes: Crimes and Punishments + Sherlock Holmes...", "price": "4.65", "region": "E", "data": "4/4/", "status": "" },
  { "name": "Sherlock Holmes: The Devil's Daughter Redux", "price": "2.30", "region": "E", "data": "4/4/", "status": "" },
  { "name": "Shukuchi Ninja", "price": "0.27", "region": "A", "data": "4/15", "status": "" },
  { "name": "Sid Meier’s Civilization® VI Anthology", "price": "11.72", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Sid Meier’s Civilization® VI Platinum Edition", "price": "6.86", "region": "T", "data": "4/4/", "status": "" },
  { "name": "Skate 3", "price": "0.19", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Skul: The Hero Slayer", "price": "0.82", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Sleepin' Guy Deluxe Edition", "price": "0.34", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Slime Rancher", "price": "0.24", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Slime Rancher 2", "price": "6.43", "region": "E", "data": "4/7/", "status": "" },
  { "name": "Sniper Ghost Warrior Contracts Full Arsenal Edition", "price": "3.60", "region": "E", "data": "4/4/", "status": "" },
  { "name": "South Park™: The Stick of Truth ™", "price": "0.71", "region": "A", "data": "4/4/", "status": "GOLD" },
  { "name": "Space Accident", "price": "0.33", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Sparkle Bundle", "price": "0.61", "region": "A", "data": "12/3", "status": "" },
  { "name": "Spyro™ + Crash Remastered Game Bundle", "price": "10.59", "region": "T", "data": "4/4/", "status": "" },
  { "name": "Spyro™ Reignited Trilogy", "price": "2.01", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Steam Tactics", "price": "0.34", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Steel Defier", "price": "0.27", "region": "A", "data": "4/8/", "status": "" },
  { "name": "Storm Boy", "price": "0.12", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Summertime Madness", "price": "0.61", "region": "A", "data": "4/4/", "status": "GOLD" },
  { "name": "Summertime Madness (Xbox Series X|S)", "price": "0.61", "region": "A", "data": "4/4/", "status": "GOLD" },
  { "name": "Super Arcade Football", "price": "0.54", "region": "A", "data": "4/6/", "status": "" },
  { "name": "Super Arcade Racing", "price": "0.54", "region": "A", "data": "4/6/", "status": "" },
  { "name": "Super Chicken Jumper", "price": "0.23", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Super Pixel Kid", "price": "0.07", "region": "A", "data": "4/20", "status": "" },
  { "name": "Super Soccer Blast: America vs Europe", "price": "0.27", "region": "A", "data": "4/4/", "status": "GOLD" },
  { "name": "TEKKEN 7 - Definitive Edition", "price": "3.88", "region": "A", "data": "4/4/", "status": "" },
  { "name": "TOHU", "price": "0.45", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Tacoma", "price": "0.34", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Taiko no Tatsujin: The Drum Master!", "price": "4.78", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Tales of Arise Deluxe Edition", "price": "7.28", "region": "T", "data": "4/4/", "status": "" },
  { "name": "Tangle Tower", "price": "0.34", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Tcheco in the Castle of Lucio", "price": "0.13", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Temple Dash: Jungle Adventure", "price": "0.07", "region": "A", "data": "4/7/", "status": "" },
  { "name": "The Awakening of Mummies", "price": "0.22", "region": "A", "data": "4/4/", "status": "" },
  { "name": "The Big Con", "price": "0.41", "region": "A", "data": "4/4/", "status": "" },
  { "name": "The Dark Pictures Anthology: Season One", "price": "27.27", "region": "A", "data": "4/4/", "status": "" },
  { "name": "The Darkside Detective", "price": "0.63", "region": "A", "data": "4/4/", "status": "" },
  { "name": "The Darkside Detective: A Fumble in the Dark", "price": "0.63", "region": "A", "data": "4/4/", "status": "" },
  { "name": "The Escapists & The Escapists: The Walking Dead", "price": "0.25", "region": "A", "data": "4/4/", "status": "" },
  { "name": "The Escapists 2 - Game of the Year Edition", "price": "0.42", "region": "A", "data": "4/4/", "status": "" },
  { "name": "The Escapists: Supermax Edition", "price": "1.20", "region": "A", "data": "4/6/", "status": "" },
  { "name": "The FMV Bundle", "price": "1.76", "region": "A", "data": "12/3", "status": "" },
  { "name": "The Game of Life 2", "price": "0.99", "region": "A", "data": "4/7/", "status": "" },
  { "name": "The Inner World", "price": "0.14", "region": "A", "data": "4/4/", "status": "" },
  { "name": "The Inner World - The Last Wind Monk", "price": "0.41", "region": "A", "data": "4/4/", "status": "" },
  { "name": "The Jackbox Party Pack 4", "price": "0.66", "region": "A", "data": "4/7/", "status": "" },
  { "name": "The Jackbox Party Quadpack", "price": "2.69", "region": "A", "data": "12/3", "status": "" },
  { "name": "The Jackbox Party Trilogy", "price": "1.58", "region": "A", "data": "4/7/", "status": "" },
  { "name": "The Jackbox Party Trilogy 2.0", "price": "2.80", "region": "A", "data": "4/7/", "status": "" },
  { "name": "The Journey Down Trilogy", "price": "0.86", "region": "A", "data": "4/4/", "status": "" },
  { "name": "The LEGO Movie Videogame", "price": "0.54", "region": "A", "data": "4/7/", "status": "" },
  { "name": "The LEGO® NINJAGO® Movie Video Game", "price": "1.08", "region": "A", "data": "4/7/", "status": "" },
  { "name": "The Letter: A Horror Visual Novel", "price": "0.54", "region": "A", "data": "4/4/", "status": "" },
  { "name": "The Plane Effect", "price": "0.64", "region": "A", "data": "4/4/", "status": "" },
  { "name": "The Procession to Calvary", "price": "0.51", "region": "A", "data": "4/4/", "status": "" },
  { "name": "The Psychoduck", "price": "0.17", "region": "A", "data": "4/7/", "status": "" },
  { "name": "The StoryTale", "price": "0.20", "region": "A", "data": "4/4/", "status": "" },
  { "name": "The StoryTale (for Windows 10)", "price": "1.01", "region": "T", "data": "4/4/", "status": "" },
  { "name": "The Surge", "price": "1.41", "region": "A", "data": "4/4/", "status": "GOLD" },
  { "name": "The Survivalists - Deluxe Edition", "price": "1.31", "region": "A", "data": "4/4/", "status": "" },
  { "name": "The Touryst", "price": "0.95", "region": "A", "data": "4/4/", "status": "GOLD" },
  { "name": "The Wanderer: Frankenstein's Creature", "price": "0.51", "region": "A", "data": "4/4/", "status": "" },
  { "name": "The Wardrobe: Even Better Edition", "price": "0.86", "region": "T", "data": "4/4/", "status": "" },
  { "name": "Thimbleweed Park", "price": "0.34", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Gold Edition", "price": "4.78", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands - Standard Edition", "price": "2.20", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Tony Hawk's™ Pro Skater™ 1 + 2 - Cross-Gen Deluxe Bundle", "price": "4.30", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Top Run", "price": "0.13", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Trailmakers Deluxe Edition", "price": "0.78", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Train Sim World® 3: Birmingham Starter Pack", "price": "5.54", "region": "T", "data": "4/4/", "status": "" },
  { "name": "Train Sim World® 3: German Starter Pack", "price": "5.54", "region": "T", "data": "4/4/", "status": "" },
  { "name": "Train Sim World® 3: New York Starter Pack", "price": "6.40", "region": "T", "data": "4/4/", "status": "" },
  { "name": "Train Sim World® 3: Spirit of Steam Starter Pack", "price": "5.54", "region": "T", "data": "4/4/", "status": "" },
  { "name": "Train Sim World® 3: UK Starter Pack", "price": "5.54", "region": "T", "data": "4/4/", "status": "" },
  { "name": "Train Sim World® 3: US Starter Pack", "price": "5.54", "region": "T", "data": "4/4/", "status": "" },
  { "name": "Trials Fusion: The Awesome Max Edition", "price": "0.48", "region": "A", "data": "4/4/", "status": "GOLD" },
  { "name": "Trials® Rising - Digital Gold Edition", "price": "2.15", "region": "A", "data": "4/4/", "status": "GOLD" },
  { "name": "Tropico 5 - Complete Collection", "price": "1.31", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Turnip Boy Commits Tax Evasion", "price": "0.41", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Twelve Minutes", "price": "1.03", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Two & One Hundred Ways Bundle", "price": "0.88", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Two Hundred Ways", "price": "0.67", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Ultimate Chicken Horse", "price": "0.36", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Under Leaves", "price": "0.22", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Unichrome: A 1-bit Unicorn Adventure", "price": "0.61", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "0.65", "region": "A", "data": "12/3", "status": "" },
  { "name": "Unpacking", "price": "0.95", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Unruly Heroes", "price": "0.41", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Urban Exploration Bundle", "price": "0.31", "region": "A", "data": "4/4/", "status": "" },
  { "name": "VAMPYR", "price": "1.53", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Valentino Rossi The Game", "price": "0.36", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Vermintide - Digital Value Pack", "price": "1.91", "region": "A", "data": "3/7/", "status": "" },
  { "name": "Violett Remastered", "price": "0.07", "region": "A", "data": "4/4/", "status": "" },
  { "name": "WINGSPAN", "price": "0.68", "region": "A", "data": "4/4/", "status": "GOLD" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "3.05", "region": "A", "data": "8/31", "status": "" },
  { "name": "Wailing Heights", "price": "0.17", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Wales Interactive Publisher Bundle", "price": "35.45", "region": "H", "data": "12/3", "status": "" },
  { "name": "Wayward Strand", "price": "4.66", "region": "E", "data": "4/4/", "status": "" },
  { "name": "We Are The Dwarves", "price": "0.29", "region": "E", "data": "4/4/", "status": "" },
  { "name": "We Sing Pop", "price": "0.29", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Will Die Alone", "price": "0.20", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Wobbly Life", "price": "0.93", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Woodle Tree Adventures", "price": "0.07", "region": "A", "data": "4/7/", "status": "" },
  { "name": "World War Z", "price": "1.03", "region": "A", "data": "4/4/", "status": "" },
  { "name": "World War Z", "price": "1.03", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Worms Battlegrounds + Worms W.M.D", "price": "0.48", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Worms Rumble - Digital Deluxe Edition", "price": "0.30", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Yello Adventures", "price": "0.33", "region": "A", "data": "4/7/", "status": "" },
  { "name": "You Suck at Parking", "price": "4.08", "region": "E", "data": "4/7/", "status": "" },
  { "name": "Zeus Quest - The Rebirth of Earth", "price": "0.41", "region": "A", "data": "4/4/", "status": "" },
  { "name": "[PROTOTYPE®]", "price": "0.71", "region": "A", "data": "4/4/", "status": "" },
  { "name": "orbit.industries", "price": "0.88", "region": "A", "data": "4/4/", "status": "" }
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
    a = 45
  } else if (value > 1 && value <= 5) {
    a = 55
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
    res = 'Уточнить стоимость'
  }

  item.innerHTML = res == 'Уточнить стоимость' ? `${a.name}: ${res} до:${arrData}` : `${a.name}:${res}&#8381; ${flag}  до:${arrData}${a.status}`
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
