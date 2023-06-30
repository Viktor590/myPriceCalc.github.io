const input = document.querySelector('.input');
const output = document.querySelector('.output-res');
const list = document.querySelector('.list')
const showBtn = document.querySelector('.show')


showBtn.addEventListener('click', () => {
  showBtn.classList.contains('active') ?
    hiddenMenu() : showMenu()
})

let usd = 97;

const arr = [
  { "name": "#Funtime", "price": "0.29", "region": "A", "data": "7/1/", "status": "" },
  { "name": "1971 Project Helios", "price": "0.25", "region": "A", "data": "7/1/", "status": "" },
  { "name": "8-Ball Pocket", "price": "0.20", "region": "A", "data": "7/4/", "status": "" },
  { "name": "A Plague Tale Bundle", "price": "24.42", "region": "T", "data": "7/4/", "status": "GOLD" },
  { "name": "ADVERSE", "price": "0.07", "region": "A", "data": "7/4/", "status": "" },
  { "name": "AEW: Fight Forever Elite Edition - Pre-Order", "price": "27.91", "region": "T", "data": "6/29", "status": "" },
  { "name": "ATLAS (Game Preview)", "price": "2.49", "region": "T", "data": "7/1/", "status": "" },
  { "name": "ATOM RPG Supporter Edition", "price": "0.51", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Adventures of Chris", "price": "0.21", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Adventures of Pip", "price": "0.18", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Aery - A Journey Beyond Time", "price": "0.33", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Agatha Knife", "price": "0.14", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Aggelos", "price": "0.17", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Allison's Diary: Rebirth", "price": "0.28", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Almost There: The Platformer", "price": "0.06", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Alone in the Dark", "price": "13.79", "region": "A", "data": "10/2", "status": "" },
  { "name": "Alone in the Dark - Digital Deluxe Edition", "price": "15.92", "region": "A", "data": "10/2", "status": "" },
  { "name": "American Fugitive", "price": "0.22", "region": "A", "data": "7/4/", "status": "" },
  { "name": "American Hero", "price": "0.29", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Anima: Gate of Memories", "price": "0.20", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Anima: Gate of Memories - The Nameless Chronicles", "price": "0.20", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Another Dawn", "price": "0.39", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Ara Fell: Enhanced Edition", "price": "0.25", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Arcade Islands: Volume One", "price": "0.20", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Arcade Spirits", "price": "0.39", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Arkham Horror: Mother’s Embrace", "price": "0.39", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Ashen", "price": "0.56", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Ashen: Definitive Edition", "price": "0.67", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Assassin's Creed® III Remastered", "price": "1.28", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Assassin's Creed® Valhalla", "price": "3.54", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Autonauts", "price": "0.94", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Awarded Platformer Bundle", "price": "0.65", "region": "A", "data": "12/3", "status": "" },
  { "name": "Aztech Forgotten Gods", "price": "0.59", "region": "A", "data": "7/1/", "status": "" },
  { "name": "BFF or Die", "price": "0.11", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Baldur's Gate and Baldur's Gate II: Enhanced Editions", "price": "0.98", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Ballotron", "price": "0.17", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Batman: The Telltale Series - The Complete Season (Episod...", "price": "0.44", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Battle Brothers", "price": "0.78", "region": "A", "data": "7/4/", "status": "GOLD" },
  { "name": "Beach Buggy Racing", "price": "0.12", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Beach Buggy Racing 2: Hot Wheels™ Edition", "price": "0.45", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Beach Buggy Racing 2: Island Adventure", "price": "0.33", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Beat Me!", "price": "0.15", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Beatbuddy: Tale of the Guardians", "price": "0.13", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Beholgar", "price": "0.17", "region": "A", "data": "7/4/", "status": "GOLD" },
  { "name": "Beyond Enemy Lines - Remastered Edition", "price": "0.39", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Beyond Enemy Lines 2 - Enhanced Edition", "price": "0.59", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Big Pharma", "price": "0.34", "region": "A", "data": "7/1/", "status": "" },
  { "name": "BigChick", "price": "0.22", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Biomutant", "price": "2.60", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Borderlands 3: Next Level Edition", "price": "1.89", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Borderlands 3: Ultimate Edition", "price": "5.31", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Brave Soldier - Invasion of Cyborgs", "price": "2.63", "region": "I", "data": "6/29", "status": "" },
  { "name": "Braveland Trilogy", "price": "0.75", "region": "T", "data": "7/1/", "status": "" },
  { "name": "Brawlout Deluxe Edition", "price": "0.41", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Brawlout Standard Edition", "price": "0.27", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Broken Lines", "price": "0.39", "region": "A", "data": "7/1/", "status": "" },
  { "name": "CAN ANDROIDS PRAY: BLUE", "price": "0.10", "region": "A", "data": "7/1/", "status": "" },
  { "name": "CUBERS: ARENA", "price": "0.25", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Caretaker Game", "price": "0.50", "region": "T", "data": "7/1/", "status": "" },
  { "name": "CastleStorm - Definitive Edition", "price": "0.20", "region": "A", "data": "7/1/", "status": "" },
  { "name": "CastleStorm II", "price": "0.39", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Cave Digger", "price": "0.42", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Checkers for Kids", "price": "0.13", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Chef's Tail", "price": "0.22", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Chickens Madness", "price": "0.28", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Chivalry 2", "price": "1.13", "region": "A", "data": "7/4/", "status": "GOLD" },
  { "name": "Chivalry 2 Special Edition", "price": "1.40", "region": "A", "data": "7/4/", "status": "GOLD" },
  { "name": "Citadel: Forged with Fire", "price": "0.79", "region": "A", "data": "7/1/", "status": "" },
  { "name": "City of Brass", "price": "0.08", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Classic Snake Adventures (Cross-Buy)", "price": "0.18", "region": "A", "data": "7/1/", "status": "" },
  { "name": "ClusterTruck", "price": "0.15", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Coffee Talk Episode 2: Hibiscus and Butterfly", "price": "1.32", "region": "T", "data": "7/4/", "status": "" },
  { "name": "Colt Canyon", "price": "0.25", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Commandos 2 & 3 – HD Remaster Double Pack", "price": "1.81", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Cosmic Top Secret", "price": "0.11", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Crazy Trucks", "price": "0.11", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Crime Boss: Rockay City", "price": "6.48", "region": "T", "data": "6/30", "status": "" },
  { "name": "Cruz Brothers", "price": "0.63", "region": "T", "data": "7/1/", "status": "" },
  { "name": "Cryogear", "price": "0.35", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Cuccchi", "price": "0.18", "region": "A", "data": "7/1/", "status": "" },
  { "name": "DARKLAND 3", "price": "0.06", "region": "A", "data": "7/8/", "status": "" },
  { "name": "DE-EXIT - Eternal Matters", "price": "4.40", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Dandara: Trials of Fear Edition", "price": "0.18", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Darksiders III", "price": "1.44", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Darksiders III - Blades & Whip Edition", "price": "2.28", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Dead Effect 2", "price": "0.14", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Deleveled", "price": "0.20", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Deployment", "price": "0.31", "region": "T", "data": "7/1/", "status": "" },
  { "name": "Depth of Extinction", "price": "1.12", "region": "T", "data": "7/1/", "status": "" },
  { "name": "Dicey Dungeons", "price": "0.24", "region": "A", "data": "7/4/", "status": "GOLD" },
  { "name": "Discolored", "price": "0.20", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Discovery Tour: Viking Age", "price": "4.39", "region": "T", "data": "7/4/", "status": "" },
  { "name": "Dou", "price": "0.06", "region": "A", "data": "6/28", "status": "" },
  { "name": "Down in Bermuda", "price": "0.11", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Dreamfall Chapters", "price": "0.18", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Droid Trivia", "price": "0.88", "region": "T", "data": "7/1/", "status": "" },
  { "name": "Dungeon and Gravestone", "price": "0.71", "region": "A", "data": "7/1/", "status": "" },
  { "name": "EA SPORTS™ FIFA 23 Standard Edition Xbox One", "price": "6.78", "region": "T", "data": "7/4/", "status": "" },
  { "name": "EA SPORTS™ FIFA 23 Standard Edition Xbox One", "price": "8.14", "region": "T", "data": "12/3", "status": "" },
  { "name": "EA SPORTS™ FIFA 23 Standard Edition Xbox Series X|S", "price": "7.75", "region": "T", "data": "7/4/", "status": "" },
  { "name": "EA SPORTS™ FIFA 23 Ultimate Edition Xbox One & Xbox Series X|S", "price": "15.50", "region": "T", "data": "7/4/", "status": "" },
  { "name": "ELEX II", "price": "4.75", "region": "A", "data": "7/4/", "status": "" },
  { "name": "ENDER LILIES: Quietus of the Knights", "price": "3.54", "region": "A", "data": "7/4/", "status": "GOLD" },
  { "name": "Echo Generation", "price": "0.78", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Escape Dead Island", "price": "0.15", "region": "A", "data": "12/3", "status": "" },
  { "name": "Evertried", "price": "0.39", "region": "A", "data": "7/1/", "status": "" },
  { "name": "FLYING TIGERS: SHADOWS OVER CHINA", "price": "0.37", "region": "A", "data": "7/1/", "status": "" },
  { "name": "FOR HONOR™ Standard Edition", "price": "0.88", "region": "A", "data": "7/4/", "status": "GOLD" },
  { "name": "Falling Out", "price": "0.35", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Far Cry® New Dawn Deluxe Edition", "price": "1.41", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Fight'N Rage", "price": "0.39", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Finding the Soul Orb", "price": "0.28", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Flewfie's Adventure", "price": "0.19", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Football Manager 2023 Console", "price": "7.20", "region": "E", "data": "7/14", "status": "" },
  { "name": "Fort Triumph", "price": "0.39", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Freedom Finger", "price": "0.16", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Frightence", "price": "0.11", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Fuga: Melodies of Steel", "price": "6.89", "region": "E", "data": "7/4/", "status": "GOLD" },
  { "name": "Fuga: Melodies of Steel - Deluxe Edition", "price": "10.39", "region": "E", "data": "7/4/", "status": "GOLD" },
  { "name": "Galacide", "price": "0.29", "region": "A", "data": "7/4/", "status": "GOLD" },
  { "name": "Gangsta Paradise", "price": "0.12", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Gem Smashers", "price": "0.05", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Gloomhaven Gold Edition", "price": "12.96", "region": "E", "data": "9/18", "status": "" },
  { "name": "Gloomhaven Mercenaries Edition", "price": "10.34", "region": "E", "data": "9/18", "status": "" },
  { "name": "Gnomes Garden 3 in 1 Bundle", "price": "0.20", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Gnomes Garden: Lost King", "price": "0.20", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Going Under", "price": "0.88", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Gorogoa", "price": "0.18", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Gryphon Knight Epic: Definitive Edition", "price": "0.22", "region": "A", "data": "7/4/", "status": "GOLD" },
  { "name": "Guacamelee! 2", "price": "0.28", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Guacamelee! 2 Complete", "price": "0.25", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Guacamelee! Super Turbo Championship Edition", "price": "0.14", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Hammerwatch", "price": "0.10", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Hard Reset Redux", "price": "0.08", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Harmony: The Fall of Reverie", "price": "1.27", "region": "A", "data": "6/29", "status": "" },
  { "name": "Harvest Moon: Light of Hope SE Complete", "price": "0.59", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Harvest Moon: Mad Dash", "price": "0.39", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Hazel Sky", "price": "0.54", "region": "T", "data": "7/1/", "status": "" },
  { "name": "Heroes of Hammerwatch - Ultimate Edition", "price": "0.39", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Hidden Through Time", "price": "0.16", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Home Sweet Home", "price": "0.27", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Hunt Ducks 4", "price": "0.06", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Hunt: Showdown", "price": "2.09", "region": "T", "data": "7/11", "status": "" },
  { "name": "Hunt: Showdown - Deluxe Edition", "price": "1.64", "region": "T", "data": "7/1/", "status": "" },
  { "name": "Hunt: Showdown - Gold Edition", "price": "1.91", "region": "T", "data": "7/11", "status": "" },
  { "name": "Hunter's Legacy", "price": "0.03", "region": "A", "data": "7/1/", "status": "" },
  { "name": "HyperParasite", "price": "0.17", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Hyperdrive Massacre", "price": "0.10", "region": "A", "data": "7/1/", "status": "" },
  { "name": "INSIDE", "price": "1.26", "region": "T", "data": "7/4/", "status": "" },
  { "name": "INSIDE & LIMBO Bundle", "price": "1.70", "region": "T", "data": "7/4/", "status": "" },
  { "name": "Immortality", "price": "0.56", "region": "A", "data": "7/4/", "status": "GOLD" },
  { "name": "Immortals Fenyx Rising™", "price": "2.83", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Inertial Drift", "price": "0.40", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Infected Cowboys Bundle", "price": "8.20", "region": "T", "data": "7/4/", "status": "" },
  { "name": "Infliction: Extended Cut", "price": "0.20", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Iris and the Giant", "price": "2.89", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Iris and the Giant Deluxe Soundtrack Edition", "price": "3.30", "region": "A", "data": "7/4/", "status": "" },
  { "name": "It's Kooky", "price": "0.14", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Jack 'n' Hat", "price": "0.11", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Journey of the Broken Circle", "price": "0.09", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Joy Ball Adventure", "price": "0.06", "region": "A", "data": "7/3/", "status": "" },
  { "name": "Jump King", "price": "0.29", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Jurassic Pinball", "price": "0.10", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Just Die Already", "price": "0.26", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Kao the Kangaroo A Well Good Bundle", "price": "4.91", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Killing Floor 2", "price": "0.79", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Killing Floor 2 - Ultimate Edition", "price": "11.85", "region": "A", "data": "7/4/", "status": "GOLD" },
  { "name": "Kine", "price": "0.28", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Kinect Mega Bundle: 4 in 1", "price": "0.39", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Kingdom Two Crowns", "price": "0.20", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Kona", "price": "0.09", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Krampus Kills", "price": "0.29", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Kung Fu Fighting", "price": "0.11", "region": "A", "data": "7/1/", "status": "" },
  { "name": "LA Cops", "price": "0.18", "region": "A", "data": "7/4/", "status": "" },
  { "name": "LEAP", "price": "0.76", "region": "A", "data": "7/4/", "status": "GOLD" },
  { "name": "LEGO® Star Wars™:The Skywalker Saga Deluxe Edition", "price": "8.03", "region": "E", "data": "7/4/", "status": "" },
  { "name": "LEGO® Worlds", "price": "0.63", "region": "A", "data": "7/4/", "status": "" },
  { "name": "LIMBO", "price": "0.63", "region": "T", "data": "7/4/", "status": "" },
  { "name": "Last Oasis (Game Preview)", "price": "3.78", "region": "T", "data": "7/1/", "status": "" },
  { "name": "League of Enthusiastic Losers", "price": "0.31", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Life of Fly 2", "price": "0.33", "region": "A", "data": "7/4/", "status": "GOLD" },
  { "name": "Light & Dark Bundle", "price": "0.88", "region": "A", "data": "11/2", "status": "" },
  { "name": "Light Fairytale Episode 1", "price": "0.20", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Light Fairytale Episode 2", "price": "0.20", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Like No Other: The Legend Of The Twin Books", "price": "1.31", "region": "T", "data": "7/1/", "status": "" },
  { "name": "Little Mage Adventure", "price": "0.06", "region": "A", "data": "6/29", "status": "" },
  { "name": "Live by the Sword: Tactics", "price": "0.37", "region": "T", "data": "7/1/", "status": "" },
  { "name": "LoBlocks", "price": "0.14", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Lost Artifacts", "price": "0.20", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Lost Artifacts: Soulstone", "price": "0.20", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Lost Sea", "price": "0.06", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Lost Wing", "price": "0.11", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Lost in Random™", "price": "1.41", "region": "A", "data": "7/4/", "status": "" },
  { "name": "MX vs ATV All Out", "price": "0.29", "region": "A", "data": "7/4/", "status": "" },
  { "name": "MXGP 2019 - The Official Motocross Videogame", "price": "0.88", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Mable & The Wood", "price": "0.17", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Madden NFL 19", "price": "28.39", "region": "C", "data": "12/3", "status": "" },
  { "name": "Madden NFL 22 Xbox One", "price": "15.13", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 22 Xbox Series X|S", "price": "17.61", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 23 Xbox One", "price": "20.12", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 23 Xbox Series X|S", "price": "23.58", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 24 Deluxe Edition Xbox Series X|S & Xbox One + Limited Time Bonus", "price": "62.26", "region": "A", "data": "7/23", "status": "" },
  { "name": "Magical Brickout", "price": "3.46", "region": "C", "data": "7/1/", "status": "" },
  { "name": "Mahjong Adventure DX", "price": "0.14", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Maneater", "price": "0.79", "region": "A", "data": "7/4/", "status": "GOLD" },
  { "name": "Marble Duel", "price": "0.29", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Marvel's Guardians of the Galaxy", "price": "5.81", "region": "T", "data": "7/13", "status": "" },
  { "name": "Marvel's Midnight Suns Digital+ Edition for Xbox One", "price": "17.42", "region": "T", "data": "7/4/", "status": "" },
  { "name": "Marvel's Midnight Suns Digital+ Edition for Xbox Series X|S", "price": "17.42", "region": "T", "data": "7/4/", "status": "" },
  { "name": "Mask of Mists (Xbox Series X|S)", "price": "0.29", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Masters of Anima", "price": "0.35", "region": "T", "data": "7/4/", "status": "GOLD" },
  { "name": "Matchpoint - Tennis Championships | Legends Edition", "price": "13.76", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Maximum Football 2020", "price": "4.07", "region": "N", "data": "7/4/", "status": "" },
  { "name": "Meet Your Maker", "price": "7.96", "region": "A", "data": "7/13", "status": "" },
  { "name": "Meet Your Maker: Deluxe Edition", "price": "9.14", "region": "A", "data": "7/13", "status": "" },
  { "name": "Metrico+", "price": "0.14", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.00", "region": "U", "data": "12/1", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.00", "region": "U", "data": "12/1", "status": "" },
  { "name": "Mighty No. 9", "price": "0.20", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Mixx Island: Remix Plus", "price": "0.63", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Monster Energy Supercross - The Official Videogame 4", "price": "1.77", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Monster Energy Supercross 4 - Special Edition", "price": "2.95", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Monster Energy Supercross 4 - Special Edition - Xbox Series X|S", "price": "2.95", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Monster Energy Supercross 4 - Xbox Series X|S", "price": "1.77", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Morphite", "price": "0.12", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Mortal Shell: Enhanced Edition", "price": "0.39", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Mothered - A Role-Playing Horror Game", "price": "0.28", "region": "A", "data": "7/4/", "status": "" },
  { "name": "MotoGP™21", "price": "2.36", "region": "A", "data": "7/4/", "status": "" },
  { "name": "MotoGP™21 - Xbox Series X|S", "price": "2.36", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Mr. Run and Jump", "price": "5.62", "region": "T", "data": "7/24", "status": "" },
  { "name": "Mulaka", "price": "0.08", "region": "A", "data": "7/1/", "status": "" },
  { "name": "My Memory of Us", "price": "0.22", "region": "A", "data": "7/1/", "status": "" },
  { "name": "NHL® 23 X-Factor Edition Xbox One & Xbox Series X|S", "price": "11.63", "region": "T", "data": "7/4/", "status": "" },
  { "name": "NHL® 23 Xbox One", "price": "8.14", "region": "T", "data": "7/4/", "status": "" },
  { "name": "NHL® 23 Xbox Series X|S", "price": "9.30", "region": "T", "data": "7/4/", "status": "" },
  { "name": "NORCO", "price": "0.42", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Need for Speed™ Unbound", "price": "10.61", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Need for Speed™ Unbound Palace Edition", "price": "12.38", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Neighbours back From Hell", "price": "0.85", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Neon City Riders", "price": "0.33", "region": "A", "data": "7/1/", "status": "" },
  { "name": "NeonLore", "price": "0.11", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Neverwinter Nights: Enhanced Edition", "price": "0.98", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Nexomon: Extinction", "price": "0.39", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Next Up Hero", "price": "0.08", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Niffelheim", "price": "1.00", "region": "T", "data": "7/1/", "status": "" },
  { "name": "Nine Parchments", "price": "0.20", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.14", "region": "A", "data": "5/31", "status": "" },
  { "name": "Nongunz: Doppelganger Edition", "price": "0.21", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Nova Lands", "price": "1.00", "region": "A", "data": "6/29", "status": "" },
  { "name": "OUT OF THE BOX: Xbox Edition", "price": "1.31", "region": "T", "data": "7/1/", "status": "" },
  { "name": "Off And On Again", "price": "0.75", "region": "T", "data": "7/1/", "status": "" },
  { "name": "Ogre: Console Edition", "price": "0.45", "region": "A", "data": "7/1/", "status": "" },
  { "name": "OmegaBot", "price": "0.37", "region": "A", "data": "7/1/", "status": "" },
  { "name": "One True Hero", "price": "1.31", "region": "T", "data": "7/1/", "status": "" },
  { "name": "One Word by POWGI", "price": "0.23", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Operation Zeta", "price": "0.20", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Orcs Must Die! 3", "price": "2.65", "region": "T", "data": "7/1/", "status": "" },
  { "name": "Orcs Must Die! 3 Bundle", "price": "0.79", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Outbreak Gold Collection", "price": "1.68", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Outbreak Platinum Collection", "price": "1.34", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Outbreak Silver Collection", "price": "1.06", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Outbreak: Lost Hope Definitive Collection", "price": "0.35", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Outbreak: Lost Hope Definitive Edition", "price": "0.21", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Outbreak: The Nightmare Chronicles Definitive Collection", "price": "1.13", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Overcooked! 2", "price": "0.24", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Penarium", "price": "0.08", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Pinku Kult: Hex Mortis", "price": "0.19", "region": "A", "data": "7/1/", "status": "" },
  { "name": "PixARK", "price": "2.51", "region": "T", "data": "7/1/", "status": "" },
  { "name": "Pixel Soccer", "price": "0.61", "region": "T", "data": "7/1/", "status": "" },
  { "name": "Planescape: Torment and Icewind Dale: Enhanced Editions", "price": "0.98", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Planet Alpha", "price": "0.35", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Planet of the Eyes", "price": "0.06", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Police Stories", "price": "0.29", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Port Royale 4", "price": "7.86", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Portal of Evil: Stolen Runes", "price": "0.18", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Potata: fairy flower", "price": "0.29", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Primal Light", "price": "1.31", "region": "T", "data": "7/1/", "status": "" },
  { "name": "Project Starship X", "price": "0.17", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Pumped BMX Pro", "price": "0.09", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Pumpkin Jack", "price": "0.56", "region": "A", "data": "7/1/", "status": "" },
  { "name": "REZ PLZ", "price": "0.17", "region": "A", "data": "7/1/", "status": "" },
  { "name": "RIDE 3", "price": "0.59", "region": "A", "data": "7/4/", "status": "" },
  { "name": "RIDE 3 - Gold Edition", "price": "0.82", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Rad Rodgers", "price": "0.16", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Railway Empire – Complete Collection", "price": "1.47", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Raptor Boyfriend: A High School Romance", "price": "0.55", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Rayman Legends", "price": "0.59", "region": "T", "data": "7/4/", "status": "" },
  { "name": "Re:Turn 2 - Runaway", "price": "0.14", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Relicta", "price": "0.33", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Rememoried", "price": "0.08", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Remoteness", "price": "2.18", "region": "T", "data": "7/1/", "status": "" },
  { "name": "Retro Tank Arcade", "price": "0.06", "region": "A", "data": "7/7/", "status": "" },
  { "name": "Riddled Corpses EX", "price": "0.06", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Rise of Insanity", "price": "0.17", "region": "A", "data": "7/1/", "status": "" },
  { "name": "RoboPhobik", "price": "0.14", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Rogue Explorer", "price": "0.16", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Roundguard", "price": "0.39", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Roundout by POWGI", "price": "0.23", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Royal Roads", "price": "0.17", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Royal Tower Defense", "price": "0.34", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Röki", "price": "0.75", "region": "A", "data": "7/4/", "status": "" },
  { "name": "S.W.A.N.: Chernobyl Unexplored", "price": "0.27", "region": "A", "data": "7/1/", "status": "" },
  { "name": "SINNER: Sacrifice for Redemption", "price": "0.27", "region": "A", "data": "7/1/", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "5.03", "region": "A", "data": "12/3", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "6.72", "region": "A", "data": "1/1/", "status": "" },
  { "name": "STONE", "price": "0.29", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Sable", "price": "0.56", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Save Your Nuts", "price": "0.14", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Scorn", "price": "6.11", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Sea of Thieves", "price": "5.74", "region": "E", "data": "7/13", "status": "" },
  { "name": "Sea of Thieves Deluxe Edition", "price": "7.20", "region": "E", "data": "7/13", "status": "" },
  { "name": "Secret Neighbor", "price": "0.28", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Serial Cleaner", "price": "0.06", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Shark Pinball", "price": "0.14", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Signs of the Sojourner", "price": "0.39", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Sixty Words by POWGI", "price": "0.23", "region": "A", "data": "7/4/", "status": "" },
  { "name": "SkateBIRD", "price": "1.25", "region": "T", "data": "7/4/", "status": "" },
  { "name": "Slain: Back from Hell", "price": "0.09", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Smelter", "price": "0.39", "region": "A", "data": "7/1/", "status": "" },
  { "name": "SnowRunner - 3-Year Anniversary Edition", "price": "25.19", "region": "T", "data": "7/4/", "status": "GOLD" },
  { "name": "Solos", "price": "0.06", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Sophstar", "price": "0.37", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Soulstice", "price": "1.35", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Soulstice: Deluxe Edition", "price": "1.82", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Source of Madness", "price": "0.39", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Spaceland", "price": "1.00", "region": "T", "data": "7/1/", "status": "" },
  { "name": "Sparkle Bundle", "price": "0.50", "region": "A", "data": "12/3", "status": "" },
  { "name": "Speed or Death", "price": "0.36", "region": "A", "data": "7/1/", "status": "" },
  { "name": "SpeedRunners", "price": "0.08", "region": "A", "data": "7/1/", "status": "" },
  { "name": "SpellForce III Reforced", "price": "3.46", "region": "A", "data": "7/4/", "status": "" },
  { "name": "SteamWorld Dig", "price": "0.08", "region": "A", "data": "7/1/", "status": "" },
  { "name": "SteamWorld Dig 2", "price": "0.28", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Steel Rats™", "price": "0.06", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Stellar Interface", "price": "0.07", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Storm Boy", "price": "0.07", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Strategic Mind: Fight for Freedom", "price": "1.18", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Strike Force 2 - Terrorist Hunt", "price": "0.35", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Stubbs the Zombie in Rebel Without a Pulse", "price": "0.39", "region": "A", "data": "7/1/", "status": "" },
  { "name": "SturmFront - The Mutant War: Ubel Edition", "price": "0.17", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Subdivision Infinity DX", "price": "0.15", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Submerged: Hidden Depths", "price": "0.84", "region": "A", "data": "7/4/", "status": "GOLD" },
  { "name": "Sudden Strike 4 - European Battlefields Edition", "price": "0.84", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Summer in Mara", "price": "0.49", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Summertime Madness", "price": "0.29", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Summertime Madness (Xbox Series X|S)", "price": "0.29", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Super Chicken Jumper", "price": "0.19", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Super Pixel Kid", "price": "0.06", "region": "A", "data": "6/29", "status": "" },
  { "name": "Super Time Force", "price": "0.18", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Superfidos", "price": "0.51", "region": "A", "data": "7/1/", "status": "" },
  { "name": "TOHU", "price": "0.37", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Tacoma", "price": "0.28", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Tales from the Borderlands", "price": "4.19", "region": "T", "data": "7/4/", "status": "GOLD" },
  { "name": "Tank Brawl 2: Armor Fury", "price": "0.20", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Teacup", "price": "0.33", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Tell Me Why: Chapters 1-3", "price": "0.00", "region": "U", "data": "7/1/", "status": "" },
  { "name": "The Ambassador: Fractured Timelines", "price": "0.29", "region": "A", "data": "7/1/", "status": "" },
  { "name": "The Artful Escape", "price": "0.56", "region": "A", "data": "7/4/", "status": "" },
  { "name": "The Beast Inside (Console Version)", "price": "0.49", "region": "A", "data": "7/1/", "status": "" },
  { "name": "The Bridge", "price": "0.10", "region": "A", "data": "7/1/", "status": "" },
  { "name": "The Callisto Protocol™ for Xbox One", "price": "7.86", "region": "A", "data": "6/30", "status": "" },
  { "name": "The Callisto Protocol™ for Xbox One – Digital Deluxe Edition", "price": "9.83", "region": "A", "data": "6/30", "status": "" },
  { "name": "The Callisto Protocol™ for Xbox Series X|S", "price": "9.83", "region": "A", "data": "6/30", "status": "" },
  { "name": "The Callisto Protocol™ for Xbox Series X|S – Digital Delu...", "price": "12.77", "region": "A", "data": "6/30", "status": "" },
  { "name": "The Enigma Machine", "price": "0.26", "region": "A", "data": "7/4/", "status": "" },
  { "name": "The Escapists & The Escapists: The Walking Dead", "price": "0.20", "region": "A", "data": "7/4/", "status": "" },
  { "name": "The Escapists: Supermax Edition", "price": "0.99", "region": "A", "data": "4/30", "status": "" },
  { "name": "The Eternal Cylinder", "price": "0.56", "region": "A", "data": "7/4/", "status": "" },
  { "name": "The Fairy's Song", "price": "0.45", "region": "A", "data": "7/1/", "status": "" },
  { "name": "The Forest Cathedral", "price": "0.42", "region": "A", "data": "7/4/", "status": "" },
  { "name": "The Jackbox Party Pack 6", "price": "0.59", "region": "A", "data": "7/1/", "status": "" },
  { "name": "The Jackbox Party Quadpack", "price": "2.21", "region": "A", "data": "12/3", "status": "" },
  { "name": "The Journey Down: Chapter Three", "price": "0.21", "region": "A", "data": "7/1/", "status": "" },
  { "name": "The Journey Down: Chapter Two", "price": "0.20", "region": "A", "data": "7/1/", "status": "" },
  { "name": "The King's Bird", "price": "0.22", "region": "A", "data": "7/4/", "status": "" },
  { "name": "The Quarry - Deluxe Edition", "price": "10.09", "region": "T", "data": "7/4/", "status": "" },
  { "name": "The Surge 2", "price": "2.46", "region": "A", "data": "7/4/", "status": "GOLD" },
  { "name": "The Surge 2 - Windows 10", "price": "1.28", "region": "A", "data": "7/4/", "status": "" },
  { "name": "The Telltale Batman Shadows Edition", "price": "0.84", "region": "A", "data": "7/4/", "status": "" },
  { "name": "The Walking Zombie 2", "price": "0.20", "region": "A", "data": "7/1/", "status": "" },
  { "name": "The Wild Eight", "price": "0.17", "region": "A", "data": "7/1/", "status": "" },
  { "name": "The Wolf Among Us", "price": "0.44", "region": "A", "data": "7/4/", "status": "" },
  { "name": "The Wreck", "price": "0.89", "region": "A", "data": "7/4/", "status": "GOLD" },
  { "name": "This War of Mine: The Little Ones", "price": "0.12", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Time Of War, Arkano'90", "price": "0.67", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Time Rift", "price": "0.28", "region": "A", "data": "7/4/", "status": "GOLD" },
  { "name": "Tom Clancy’s Rainbow Six® Extraction", "price": "3.49", "region": "T", "data": "7/4/", "status": "" },
  { "name": "Tony and Clyde", "price": "0.83", "region": "T", "data": "7/1/", "status": "" },
  { "name": "Totally Reliable Delivery Service", "price": "0.21", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Touchdown Pinball", "price": "0.10", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Tricks Magician", "price": "0.22", "region": "A", "data": "7/8/", "status": "" },
  { "name": "Trine: Ultimate Collection", "price": "1.02", "region": "U", "data": "7/1/", "status": "" },
  { "name": "True Survivors Bundle", "price": "11.34", "region": "T", "data": "7/4/", "status": "" },
  { "name": "Trüberbrook", "price": "0.17", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Tumblestone", "price": "0.20", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Tunche", "price": "0.39", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Turnip Boy Commits Tax Evasion", "price": "0.29", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Twelve Minutes", "price": "0.71", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Unichrome: A 1-bit Unicorn Adventure", "price": "0.29", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "0.53", "region": "A", "data": "12/3", "status": "" },
  { "name": "Valiant Hearts: The Great War", "price": "0.18", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Vampire's Fall: Origins", "price": "0.26", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Velocity Noodle", "price": "0.51", "region": "A", "data": "7/4/", "status": "GOLD" },
  { "name": "Vermintide - Digital Value Pack", "price": "1.57", "region": "A", "data": "3/7/", "status": "" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "2.50", "region": "A", "data": "8/31", "status": "" },
  { "name": "WWE 2K23 Cross-Gen Digital Edition", "price": "23.70", "region": "A", "data": "7/4/", "status": "" },
  { "name": "WWE 2K23 Deluxe Edition", "price": "28.97", "region": "A", "data": "7/4/", "status": "GOLD" },
  { "name": "WWE 2K23 for Xbox One", "price": "21.07", "region": "A", "data": "7/4/", "status": "" },
  { "name": "War Tech Fighters", "price": "0.20", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Way of the Hunter", "price": "3.87", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Way of the Hunter: Elite Edition", "price": "5.79", "region": "A", "data": "7/4/", "status": "" },
  { "name": "We Are The Dwarves", "price": "0.50", "region": "T", "data": "7/1/", "status": "" },
  { "name": "We. The Revolution", "price": "0.28", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Weedcraft Inc", "price": "0.99", "region": "A", "data": "7/4/", "status": "GOLD" },
  { "name": "What Remains of Edith Finch", "price": "0.20", "region": "A", "data": "7/4/", "status": "" },
  { "name": "What The Dub?!", "price": "0.16", "region": "A", "data": "7/1/", "status": "" },
  { "name": "White Noise 2", "price": "0.19", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Wind Peaks", "price": "1.31", "region": "T", "data": "7/1/", "status": "" },
  { "name": "Windbound", "price": "0.63", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Wo Long: Fallen Dynasty", "price": "12.99", "region": "E", "data": "7/4/", "status": "" },
  { "name": "Wo Long: Fallen Dynasty Digital Deluxe Edition", "price": "18.32", "region": "E", "data": "7/4/", "status": "" },
  { "name": "Woodle Tree 2: Deluxe+", "price": "0.07", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Worms W.M.D", "price": "1.18", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Worse Than Death", "price": "0.08", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Wreckfest", "price": "1.12", "region": "A", "data": "7/4/", "status": "" },
  { "name": "XCOM® 2", "price": "0.35", "region": "A", "data": "7/4/", "status": "GOLD" },
  { "name": "XCOM® 2 Digital Deluxe Edition", "price": "0.77", "region": "A", "data": "7/4/", "status": "GOLD" },
  { "name": "XCOM®: Enemy Within", "price": "0.31", "region": "A", "data": "7/4/", "status": "GOLD" },
  { "name": "XEL - Complete Edition", "price": "0.99", "region": "A", "data": "7/1/", "status": "" },
  { "name": "Xenon Valkyrie+", "price": "0.04", "region": "A", "data": "7/4/", "status": "" },
  { "name": "Zero Strain", "price": "0.17", "region": "A", "data": "7/1/", "status": "" },
  { "name": "reky", "price": "0.14", "region": "A", "data": "7/4/", "status": "" }
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
