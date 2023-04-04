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
  { "name": "A Juggler's Tale", "price": "0.41", "region": "A", "data": "4/11", "status": "GOLD" },
  { "name": "A Plague Tale Bundle", "price": "32.80", "region": "T", "data": "4/11", "status": "GOLD" },
  { "name": "Adventures of Chris", "price": "0.25", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Aery Series Bundle", "price": "1.91", "region": "A", "data": "4/16", "status": "" },
  { "name": "Akuto: Showdown", "price": "0.14", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Among Us", "price": "0.23", "region": "A", "data": "4/6/", "status": "" },
  { "name": "An Airport for Aliens Currently Run by Dogs", "price": "0.81", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Arcade Islands: Volume One", "price": "0.24", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Archaica: The Path Of Light", "price": "0.31", "region": "A", "data": "4/11", "status": "GOLD" },
  { "name": "Aspire - Ina's Tale", "price": "0.36", "region": "A", "data": "4/11", "status": "" },
  { "name": "Assassin's Creed® Chronicles: China", "price": "0.30", "region": "A", "data": "4/11", "status": "GOLD" },
  { "name": "Awarded Platformer Bundle", "price": "0.78", "region": "A", "data": "12/3", "status": "" },
  { "name": "Ayo the Clown", "price": "0.81", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Billy 101", "price": "0.27", "region": "A", "data": "4/15", "status": "" },
  { "name": "Black Legend", "price": "2.69", "region": "T", "data": "4/11", "status": "GOLD" },
  { "name": "Blazing Beaks", "price": "0.34", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Borderlands: The Handsome Collection", "price": "3.21", "region": "A", "data": "4/11", "status": "GOLD" },
  { "name": "Breakers Collection", "price": "2.20", "region": "T", "data": "4/11", "status": "GOLD" },
  { "name": "Chameneon", "price": "0.14", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Clone Drone in the Danger Zone", "price": "0.81", "region": "A", "data": "4/6/", "status": "" },
  { "name": "Clumsy Rush", "price": "0.22", "region": "A", "data": "4/11", "status": "GOLD" },
  { "name": "Clunky Hero", "price": "1.66", "region": "T", "data": "4/7/", "status": "" },
  { "name": "Coffee Talk Episode 2: Hibiscus and Butterfly", "price": "1.99", "region": "T", "data": "4/19", "status": "" },
  { "name": "Conan Chop Chop", "price": "1.66", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Cook, Serve, Delicious! 2!!", "price": "0.22", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Cook, Serve, Delicious! 3?!", "price": "0.47", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Cosmic Top Secret", "price": "0.14", "region": "A", "data": "4/11", "status": "GOLD" },
  { "name": "Crazy Gravity", "price": "0.17", "region": "A", "data": "4/11", "status": "" },
  { "name": "Cyber Pool", "price": "0.08", "region": "A", "data": "4/11", "status": "" },
  { "name": "DARKLAND 3", "price": "0.07", "region": "A", "data": "4/7/", "status": "" },
  { "name": "DEEEER Simulator: Your Average Everyday Deer Game", "price": "0.81", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Dashing Orange", "price": "0.25", "region": "A", "data": "4/6/", "status": "" },
  { "name": "DayD: Through Time", "price": "0.27", "region": "A", "data": "4/11", "status": "" },
  { "name": "Demon's Tier+", "price": "0.20", "region": "A", "data": "4/11", "status": "GOLD" },
  { "name": "Dex", "price": "0.47", "region": "A", "data": "4/11", "status": "" },
  { "name": "Dodgeball Academia", "price": "1.02", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Dog’s Donuts", "price": "0.14", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Don't Touch this Button!", "price": "0.17", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Dou", "price": "0.07", "region": "A", "data": "4/5/", "status": "" },
  { "name": "Dragon Pinball", "price": "0.17", "region": "A", "data": "4/8/", "status": "" },
  { "name": "Drone Gladiator (for Windows 10)", "price": "0.15", "region": "A", "data": "4/11", "status": "" },
  { "name": "Embr", "price": "0.41", "region": "A", "data": "4/11", "status": "GOLD" },
  { "name": "Encodya", "price": "0.41", "region": "A", "data": "4/11", "status": "GOLD" },
  { "name": "Endzone - A World Apart: Complete Edition", "price": "9.51", "region": "A", "data": "4/11", "status": "GOLD" },
  { "name": "Escape Dead Island", "price": "0.19", "region": "A", "data": "12/3", "status": "" },
  { "name": "Escape from Life Inc", "price": "0.41", "region": "A", "data": "4/7/", "status": "" },
  { "name": "FIFA 22 Xbox One", "price": "20.82", "region": "T", "data": "5/16", "status": "" },
  { "name": "FIFA 22 Xbox Series X|S", "price": "23.32", "region": "T", "data": "5/16", "status": "" },
  { "name": "Falling Out", "price": "0.59", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Fantasy Dash", "price": "0.07", "region": "A", "data": "4/10", "status": "" },
  { "name": "Felix The Reaper", "price": "0.07", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Fighter Within", "price": "0.70", "region": "T", "data": "4/11", "status": "GOLD" },
  { "name": "Firework - a modern tale", "price": "0.10", "region": "A", "data": "4/11", "status": "" },
  { "name": "Fishing Adventure", "price": "0.20", "region": "A", "data": "4/11", "status": "GOLD" },
  { "name": "Food Truck Tycoon", "price": "1.00", "region": "E", "data": "4/7/", "status": "" },
  { "name": "Food Truck Tycoon + Flowlines VS", "price": "0.32", "region": "A", "data": "4/15", "status": "" },
  { "name": "For The King", "price": "0.43", "region": "A", "data": "4/11", "status": "" },
  { "name": "Forza Horizon 5 + 4 Premium Upgrade Bundle", "price": "11.52", "region": "E", "data": "4/6/", "status": "" },
  { "name": "Forza Horizon 5 Premium Add-Ons Bundle", "price": "8.64", "region": "E", "data": "4/6/", "status": "" },
  { "name": "GROW UP", "price": "0.19", "region": "A", "data": "4/11", "status": "GOLD" },
  { "name": "Gabriels Worlds The Adventure", "price": "0.28", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Galaxy Shooter DX", "price": "0.13", "region": "A", "data": "4/11", "status": "" },
  { "name": "Gang Beasts", "price": "0.38", "region": "A", "data": "4/6/", "status": "" },
  { "name": "Get 10 Quest", "price": "0.08", "region": "A", "data": "4/11", "status": "" },
  { "name": "Gnomes Garden 2", "price": "0.07", "region": "A", "data": "4/11", "status": "" },
  { "name": "Gnomes Garden: New Home", "price": "0.09", "region": "A", "data": "4/11", "status": "" },
  { "name": "Gothic Platformer Games Bundle", "price": "0.65", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Grapple Dog", "price": "0.51", "region": "A", "data": "4/7/", "status": "" },
  { "name": "HEROish", "price": "0.68", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Hunt Ducks 4", "price": "0.07", "region": "A", "data": "4/13", "status": "" },
  { "name": "Indivisible", "price": "2.33", "region": "T", "data": "4/6/", "status": "" },
  { "name": "Inkulinati (Game Preview)", "price": "5.70", "region": "E", "data": "4/7/", "status": "" },
  { "name": "Island Farmer", "price": "0.70", "region": "E", "data": "4/5/", "status": "" },
  { "name": "Journey To The Savage Planet: Employee Of The Month", "price": "6.62", "region": "T", "data": "4/6/", "status": "GOLD" },
  { "name": "Joy Ball Adventure", "price": "0.07", "region": "A", "data": "4/14", "status": "" },
  { "name": "KLONOA Phantasy Reverie Series: Special Bundle", "price": "2.32", "region": "T", "data": "4/11", "status": "" },
  { "name": "King of the Arcade", "price": "0.44", "region": "A", "data": "4/12", "status": "" },
  { "name": "LEGO® Batman™ 3: Beyond Gotham", "price": "0.65", "region": "A", "data": "4/7/", "status": "" },
  { "name": "LEGO® CITY Undercover", "price": "0.95", "region": "A", "data": "4/7/", "status": "" },
  { "name": "LEGO® DC Super-Villains", "price": "0.90", "region": "A", "data": "4/7/", "status": "" },
  { "name": "LEGO® Marvel Super Heroes 2", "price": "1.43", "region": "A", "data": "4/7/", "status": "" },
  { "name": "LEGO® Marvel's Avengers", "price": "1.31", "region": "A", "data": "4/7/", "status": "" },
  { "name": "LEGO® Star Wars™:The Skywalker Saga Deluxe Edition", "price": "8.03", "region": "E", "data": "4/7/", "status": "" },
  { "name": "LEGO® The Hobbit™", "price": "1.40", "region": "T", "data": "4/7/", "status": "" },
  { "name": "LEGO® Worlds", "price": "0.76", "region": "A", "data": "4/7/", "status": "" },
  { "name": "LUNARK", "price": "1.22", "region": "A", "data": "4/7/", "status": "" },
  { "name": "League of Enthusiastic Losers + Clumsy Rush", "price": "0.25", "region": "A", "data": "4/11", "status": "GOLD" },
  { "name": "Legend of Keepers: Career of a Dungeon Manager", "price": "1.01", "region": "A", "data": "4/11", "status": "" },
  { "name": "Legend of Keepers: Complete Edition", "price": "1.78", "region": "A", "data": "4/11", "status": "" },
  { "name": "Light & Dark Bundle", "price": "1.07", "region": "A", "data": "11/2", "status": "" },
  { "name": "Little Mage Adventure", "price": "0.07", "region": "A", "data": "4/10", "status": "" },
  { "name": "MEGALAN 11", "price": "0.34", "region": "A", "data": "4/11", "status": "GOLD" },
  { "name": "MEGALAN 11 (Xbox Series X|S)", "price": "0.34", "region": "A", "data": "4/11", "status": "GOLD" },
  { "name": "MELTY BLOOD: TYPE LUMINA", "price": "2.04", "region": "A", "data": "4/7/", "status": "" },
  { "name": "MELTY BLOOD: TYPE LUMINA - Deluxe Edition", "price": "2.85", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Madden NFL 19", "price": "25.67", "region": "C", "data": "12/3", "status": "" },
  { "name": "Madden NFL 22 Xbox One", "price": "18.30", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 22 Xbox Series X|S", "price": "21.29", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 23 Xbox One", "price": "24.34", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 23 Xbox Series X|S", "price": "28.52", "region": "A", "data": "12/3", "status": "" },
  { "name": "Manual Samuel", "price": "0.05", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Meet Your Maker: Deluxe Edition", "price": "13.26", "region": "A", "data": "4/4/", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.00", "region": "U", "data": "12/1", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.00", "region": "U", "data": "12/1", "status": "" },
  { "name": "Moon Raider", "price": "0.24", "region": "A", "data": "4/11", "status": "GOLD" },
  { "name": "Mothered - A Role-Playing Horror Game", "price": "0.54", "region": "A", "data": "4/14", "status": "" },
  { "name": "Multidimensions and Dreams", "price": "1.08", "region": "A", "data": "4/11", "status": "" },
  { "name": "Murder Diaries 2", "price": "0.44", "region": "A", "data": "4/11", "status": "GOLD" },
  { "name": "Mushroom Quest", "price": "0.08", "region": "A", "data": "4/11", "status": "" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.17", "region": "A", "data": "5/31", "status": "" },
  { "name": "Nippon Marathon", "price": "0.25", "region": "A", "data": "4/7/", "status": "" },
  { "name": "OmegaBot", "price": "0.62", "region": "A", "data": "4/11", "status": "GOLD" },
  { "name": "Overloop", "price": "0.81", "region": "A", "data": "4/8/", "status": "" },
  { "name": "Palindrome Syndrome: Escape Room", "price": "2.30", "region": "E", "data": "4/6/", "status": "" },
  { "name": "Paradox Error", "price": "0.17", "region": "A", "data": "4/11", "status": "" },
  { "name": "Parasite Pack", "price": "0.24", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Pity Pit", "price": "0.10", "region": "A", "data": "4/11", "status": "" },
  { "name": "Pizza Tycoon", "price": "3.27", "region": "T", "data": "4/7/", "status": "" },
  { "name": "Quantum Break", "price": "3.08", "region": "B", "data": "4/6/", "status": "" },
  { "name": "Quantum Break", "price": "0.55", "region": "A", "data": "4/6/", "status": "" },
  { "name": "Quantum Replica", "price": "0.30", "region": "A", "data": "4/11", "status": "GOLD" },
  { "name": "Radical Rex (QUByte Classics)", "price": "0.27", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Rally Rock 'N Racing", "price": "0.54", "region": "A", "data": "4/15", "status": "" },
  { "name": "Raptor Boyfriend: A High School Romance", "price": "0.66", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Retro Tank Arcade", "price": "0.07", "region": "A", "data": "4/15", "status": "" },
  { "name": "Retro Tanks", "price": "0.20", "region": "A", "data": "4/11", "status": "" },
  { "name": "Rubber Bandits", "price": "1.15", "region": "E", "data": "4/7/", "status": "" },
  { "name": "Run Sausage Run!", "price": "0.17", "region": "A", "data": "4/7/", "status": "" },
  { "name": "RunBean Galactic", "price": "2.62", "region": "I", "data": "4/13", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "6.08", "region": "A", "data": "12/3", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "8.13", "region": "A", "data": "1/1/", "status": "" },
  { "name": "STONE", "price": "0.61", "region": "A", "data": "4/11", "status": "GOLD" },
  { "name": "Sam & Max Save the World", "price": "0.95", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Sam & Max: Beyond Time and Space", "price": "0.95", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Shadow Gangs", "price": "5.22", "region": "E", "data": "4/11", "status": "" },
  { "name": "Shakes on a Plane", "price": "0.14", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Shapik: The Quest", "price": "0.30", "region": "A", "data": "4/14", "status": "" },
  { "name": "Shoulders of Giants", "price": "2.91", "region": "E", "data": "4/11", "status": "GOLD" },
  { "name": "Shukuchi Ninja", "price": "0.27", "region": "A", "data": "4/15", "status": "" },
  { "name": "Skul: The Hero Slayer", "price": "0.81", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Sleepin' Guy Deluxe Edition", "price": "0.34", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Slime Rancher", "price": "0.24", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Slime Rancher 2", "price": "6.43", "region": "E", "data": "4/7/", "status": "" },
  { "name": "SnowRunner", "price": "5.69", "region": "T", "data": "4/11", "status": "GOLD" },
  { "name": "South Park™: The Fractured but Whole™", "price": "2.81", "region": "T", "data": "4/11", "status": "GOLD" },
  { "name": "South Park™: The Fractured but Whole™ - Gold Edition", "price": "3.68", "region": "T", "data": "4/11", "status": "GOLD" },
  { "name": "Sparkle Bundle", "price": "0.60", "region": "A", "data": "12/3", "status": "" },
  { "name": "Starlink: Battle for Atlas™ - Deluxe edition", "price": "1.90", "region": "A", "data": "4/11", "status": "GOLD" },
  { "name": "Steel Defier", "price": "0.27", "region": "A", "data": "4/8/", "status": "" },
  { "name": "Super Arcade Football", "price": "0.54", "region": "A", "data": "4/6/", "status": "" },
  { "name": "Super Arcade Racing", "price": "0.54", "region": "A", "data": "4/6/", "status": "" },
  { "name": "Super Chicken Jumper", "price": "0.23", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Super Pixel Kid", "price": "0.07", "region": "A", "data": "4/20", "status": "" },
  { "name": "Super Sports Blast", "price": "0.68", "region": "A", "data": "4/11", "status": "GOLD" },
  { "name": "Takotan", "price": "0.14", "region": "A", "data": "4/11", "status": "" },
  { "name": "Tcheco in the Castle of Lucio", "price": "0.13", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Temple Dash: Jungle Adventure", "price": "0.07", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Tesla vs Lovecraft", "price": "0.21", "region": "A", "data": "4/11", "status": "" },
  { "name": "The Escapists: Supermax Edition", "price": "1.19", "region": "A", "data": "4/6/", "status": "" },
  { "name": "The FMV Bundle", "price": "1.75", "region": "A", "data": "12/3", "status": "" },
  { "name": "The Game of Life 2", "price": "0.98", "region": "A", "data": "4/7/", "status": "" },
  { "name": "The Jackbox Party Pack 4", "price": "0.65", "region": "A", "data": "4/7/", "status": "" },
  { "name": "The Jackbox Party Quadpack", "price": "2.67", "region": "A", "data": "12/3", "status": "" },
  { "name": "The Jackbox Party Trilogy", "price": "1.57", "region": "A", "data": "4/7/", "status": "" },
  { "name": "The Jackbox Party Trilogy 2.0", "price": "2.78", "region": "A", "data": "4/7/", "status": "" },
  { "name": "The LEGO Movie Videogame", "price": "0.53", "region": "A", "data": "4/7/", "status": "" },
  { "name": "The LEGO® NINJAGO® Movie Video Game", "price": "1.07", "region": "A", "data": "4/7/", "status": "" },
  { "name": "The Psychoduck", "price": "0.17", "region": "A", "data": "4/7/", "status": "" },
  { "name": "The Surge - Augmented Edition", "price": "2.11", "region": "T", "data": "4/11", "status": "GOLD" },
  { "name": "The Surge 2 - Premium Edition", "price": "4.06", "region": "T", "data": "4/11", "status": "GOLD" },
  { "name": "Tip Top: Don’t fall! (Xbox Series X|S)", "price": "0.34", "region": "A", "data": "4/11", "status": "GOLD" },
  { "name": "Trailmakers Deluxe Edition", "price": "0.78", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Turnip Boy Commits Tax Evasion", "price": "0.41", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Ultimate Chicken Horse", "price": "0.35", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Unichrome: A 1-bit Unicorn Adventure", "price": "0.61", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "0.64", "region": "A", "data": "12/3", "status": "" },
  { "name": "Valiant Hearts: The Great War", "price": "0.21", "region": "A", "data": "4/11", "status": "GOLD" },
  { "name": "Vermintide - Digital Value Pack", "price": "1.90", "region": "A", "data": "3/7/", "status": "" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "3.03", "region": "A", "data": "8/31", "status": "" },
  { "name": "Wales Interactive Publisher Bundle", "price": "35.98", "region": "H", "data": "12/3", "status": "" },
  { "name": "We. The Revolution", "price": "0.41", "region": "A", "data": "4/11", "status": "" },
  { "name": "Wobbly Life", "price": "0.93", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Woodle Tree 2: Deluxe+", "price": "0.09", "region": "A", "data": "4/11", "status": "" },
  { "name": "Woodle Tree Adventures", "price": "0.07", "region": "A", "data": "4/7/", "status": "" },
  { "name": "Yello Adventures", "price": "0.32", "region": "A", "data": "4/7/", "status": "" },
  { "name": "You Suck at Parking", "price": "4.08", "region": "E", "data": "4/7/", "status": "" },
  { "name": "ZOMBI", "price": "0.19", "region": "A", "data": "4/11", "status": "GOLD" }
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
