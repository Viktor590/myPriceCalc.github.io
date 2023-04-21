const input = document.querySelector('.input');
const output = document.querySelector('.output-res');
const list = document.querySelector('.list')
const showBtn = document.querySelector('.show')


showBtn.addEventListener('click', () => {
  showBtn.classList.contains('active') ?
    hiddenMenu() : showMenu()
})

let usd = 90;

const arr = [
  { "name": "11-11 Memories Retold", "price": "0.83", "region": "A", "data": "4/28", "status": "" },
  { "name": "2URVIVE", "price": "0.23", "region": "A", "data": "4/25", "status": "" },
  { "name": "8-Bit Hordes", "price": "0.93", "region": "A", "data": "4/28", "status": "" },
  { "name": "8-Bit Invaders!", "price": "0.93", "region": "A", "data": "4/28", "status": "" },
  { "name": "A Hole New World", "price": "0.09", "region": "A", "data": "4/25", "status": "" },
  { "name": "ARCADE GAME SERIES 3-in-1 Pack", "price": "0.27", "region": "A", "data": "4/28", "status": "" },
  { "name": "ARCADE GAME SERIES: GALAGA", "price": "0.14", "region": "A", "data": "4/28", "status": "" },
  { "name": "ASCENDANCE - First Horizon", "price": "0.19", "region": "A", "data": "4/25", "status": "" },
  { "name": "Adam's Venture: Origins", "price": "0.08", "region": "A", "data": "4/28", "status": "" },
  { "name": "Aery - Broken Memories", "price": "0.49", "region": "A", "data": "4/25", "status": "GOLD" },
  { "name": "Agents of Mayhem - Total Mayhem Bundle", "price": "0.14", "region": "A", "data": "4/28", "status": "" },
  { "name": "Alba: A Wildlife Adventure", "price": "0.59", "region": "A", "data": "4/28", "status": "" },
  { "name": "Albedo: Eyes From Outer Space", "price": "0.13", "region": "A", "data": "4/28", "status": "" },
  { "name": "Alex Kidd in Miracle World DX", "price": "0.46", "region": "A", "data": "4/28", "status": "" },
  { "name": "Alien: Isolation", "price": "2.75", "region": "A", "data": "4/28", "status": "" },
  { "name": "Alien: Isolation - The Collection", "price": "3.92", "region": "A", "data": "4/28", "status": "" },
  { "name": "Alphadia Neo", "price": "0.69", "region": "A", "data": "4/25", "status": "GOLD" },
  { "name": "America’s Greatest Game Shows: Wheel of Fortune® & Jeopar...", "price": "0.63", "region": "A", "data": "4/28", "status": "" },
  { "name": "Anima: Gate of Memories", "price": "0.23", "region": "A", "data": "4/25", "status": "" },
  { "name": "Ary and the Secret of Seasons", "price": "1.38", "region": "A", "data": "4/28", "status": "" },
  { "name": "Asdivine Cross", "price": "0.49", "region": "A", "data": "4/25", "status": "" },
  { "name": "Asdivine Kamura", "price": "0.49", "region": "A", "data": "4/25", "status": "" },
  { "name": "Assassin's Creed® Odyssey - GOLD EDITION", "price": "4.30", "region": "A", "data": "4/28", "status": "" },
  { "name": "Assetto Corsa Ultimate Edition", "price": "0.37", "region": "A", "data": "4/28", "status": "" },
  { "name": "Asterix & Obelix Slap Them All!", "price": "0.59", "region": "A", "data": "4/28", "status": "" },
  { "name": "Asterix & Obelix XXL3: The Crystal Menhir", "price": "0.39", "region": "A", "data": "4/28", "status": "" },
  { "name": "Asterix & Obelix XXL: Romastered", "price": "0.59", "region": "A", "data": "4/28", "status": "" },
  { "name": "Astria Ascending", "price": "1.58", "region": "A", "data": "4/28", "status": "" },
  { "name": "Atomicrops", "price": "0.25", "region": "A", "data": "5/2/", "status": "" },
  { "name": "Atomicrops: Reap What You Bundle", "price": "0.47", "region": "A", "data": "5/2/", "status": "" },
  { "name": "Attack of the Earthlings", "price": "0.53", "region": "A", "data": "5/2/", "status": "" },
  { "name": "Autonauts", "price": "1.65", "region": "A", "data": "4/25", "status": "GOLD" },
  { "name": "Awarded Platformer Bundle", "price": "0.75", "region": "A", "data": "12/3", "status": "" },
  { "name": "Away: Journey to the Unexpected", "price": "0.19", "region": "A", "data": "4/28", "status": "" },
  { "name": "Ayre and the Crystal Comet", "price": "5.35", "region": "I", "data": "5/4/", "status": "" },
  { "name": "Babylon 2055 Pinball", "price": "0.06", "region": "A", "data": "4/28", "status": "" },
  { "name": "Back 4 Blood: Deluxe Edition", "price": "6.47", "region": "E", "data": "4/28", "status": "" },
  { "name": "Backbone", "price": "0.41", "region": "A", "data": "5/2/", "status": "" },
  { "name": "Bad North: Jotunn Edition", "price": "0.21", "region": "A", "data": "5/2/", "status": "" },
  { "name": "Barn Finders and Treasure Hunter Simulator Bundle", "price": "1.18", "region": "A", "data": "4/25", "status": "GOLD" },
  { "name": "Basketball Pinball", "price": "0.17", "region": "A", "data": "4/29", "status": "" },
  { "name": "Beast Quest", "price": "0.13", "region": "A", "data": "4/28", "status": "" },
  { "name": "Beasts of Maravilla Island", "price": "0.33", "region": "A", "data": "4/25", "status": "GOLD" },
  { "name": "Before I Forget", "price": "0.37", "region": "A", "data": "4/28", "status": "" },
  { "name": "Ben 10", "price": "6.69", "region": "A", "data": "4/28", "status": "" },
  { "name": "Ben 10 Bundle", "price": "10.11", "region": "T", "data": "4/28", "status": "" },
  { "name": "Big Buck Hunter Arcade", "price": "0.23", "region": "A", "data": "4/28", "status": "" },
  { "name": "Big Crown: Showdown", "price": "0.53", "region": "A", "data": "4/28", "status": "" },
  { "name": "Bit Dungeon Plus", "price": "0.06", "region": "A", "data": "4/25", "status": "" },
  { "name": "Black The Fall", "price": "0.39", "region": "A", "data": "4/28", "status": "" },
  { "name": "Bloodshore", "price": "0.59", "region": "A", "data": "5/2/", "status": "" },
  { "name": "Boggle", "price": "0.16", "region": "A", "data": "4/25", "status": "GOLD" },
  { "name": "Boiling Bolt", "price": "0.11", "region": "A", "data": "4/28", "status": "" },
  { "name": "Bombslinger", "price": "0.14", "region": "A", "data": "4/28", "status": "" },
  { "name": "Bounty Battle", "price": "0.33", "region": "A", "data": "4/28", "status": "" },
  { "name": "Bramble: The Mountain King", "price": "1.77", "region": "A", "data": "4/27", "status": "" },
  { "name": "Buildings Have Feelings Too", "price": "0.26", "region": "A", "data": "4/28", "status": "" },
  { "name": "Bumballon", "price": "0.26", "region": "A", "data": "4/22", "status": "" },
  { "name": "Bundle: South Park™ : The Stick of Truth™ + The Fractured...", "price": "4.09", "region": "T", "data": "4/28", "status": "" },
  { "name": "Calico", "price": "0.47", "region": "A", "data": "4/25", "status": "GOLD" },
  { "name": "Call of the Sea", "price": "0.65", "region": "A", "data": "5/2/", "status": "" },
  { "name": "Candle: The Power of the Flame", "price": "0.21", "region": "A", "data": "4/28", "status": "" },
  { "name": "Cassiodora", "price": "0.84", "region": "A", "data": "4/28", "status": "" },
  { "name": "Cast of the Seven Godsends - Redux", "price": "0.06", "region": "A", "data": "4/28", "status": "" },
  { "name": "Catacomb Master", "price": "0.26", "region": "A", "data": "5/5/", "status": "" },
  { "name": "Cavity Busters", "price": "0.65", "region": "A", "data": "5/5/", "status": "" },
  { "name": "Children of Zodiarcs", "price": "0.41", "region": "A", "data": "4/28", "status": "" },
  { "name": "Cloudpunk", "price": "0.39", "region": "A", "data": "4/28", "status": "" },
  { "name": "Cobra Kai 2: Dojos Rising", "price": "8.94", "region": "A", "data": "4/28", "status": "" },
  { "name": "Cobra Kai 2: Dojos Rising - Nemesis Edition", "price": "10.32", "region": "A", "data": "4/28", "status": "" },
  { "name": "Coffin Dodgers", "price": "0.16", "region": "A", "data": "5/2/", "status": "" },
  { "name": "Commandos 2 - HD Remaster", "price": "3.21", "region": "A", "data": "4/28", "status": "" },
  { "name": "Conan Exiles - Isle of Siptah Edition", "price": "2.27", "region": "A", "data": "4/28", "status": "" },
  { "name": "Conan Exiles - Isle of Siptah Edition", "price": "27.15", "region": "M", "data": "4/28", "status": "" },
  { "name": "Control Ultimate Edition", "price": "3.70", "region": "T", "data": "4/28", "status": "" },
  { "name": "Curved Space", "price": "0.20", "region": "A", "data": "4/28", "status": "" },
  { "name": "DARKLAND 3", "price": "0.07", "region": "A", "data": "4/23", "status": "" },
  { "name": "DRAGON BALL FIGHTERZ", "price": "1.31", "region": "A", "data": "4/28", "status": "" },
  { "name": "DRAGON BALL THE BREAKERS", "price": "4.35", "region": "T", "data": "4/28", "status": "" },
  { "name": "DRAGON BALL XENOVERSE", "price": "0.55", "region": "A", "data": "4/28", "status": "" },
  { "name": "Dandara: Trials of Fear Edition", "price": "0.21", "region": "A", "data": "5/2/", "status": "" },
  { "name": "Dark Burial: Enhanced Edition", "price": "0.24", "region": "A", "data": "4/25", "status": "" },
  { "name": "Dead End Job", "price": "0.22", "region": "A", "data": "4/25", "status": "" },
  { "name": "Deadbeat Heroes", "price": "0.21", "region": "A", "data": "4/28", "status": "" },
  { "name": "Deadlight: Director's Cut", "price": "0.07", "region": "A", "data": "4/25", "status": "GOLD" },
  { "name": "Degrees of Separation", "price": "0.20", "region": "A", "data": "4/28", "status": "" },
  { "name": "Desperados III Deluxe Edition", "price": "4.24", "region": "A", "data": "4/28", "status": "" },
  { "name": "Destroy All Humans!", "price": "1.15", "region": "A", "data": "4/28", "status": "" },
  { "name": "Disjunction", "price": "0.35", "region": "A", "data": "4/28", "status": "" },
  { "name": "Don't Knock Twice", "price": "0.23", "region": "A", "data": "5/2/", "status": "" },
  { "name": "Dou", "price": "0.07", "region": "A", "data": "4/24", "status": "" },
  { "name": "Double Kick Heroes", "price": "0.79", "region": "A", "data": "4/28", "status": "" },
  { "name": "DragoDino", "price": "0.11", "region": "A", "data": "4/28", "status": "" },
  { "name": "DreamWorks Dragons Dawn of New Riders", "price": "8.03", "region": "A", "data": "4/28", "status": "" },
  { "name": "Dreamfall Chapters", "price": "0.21", "region": "A", "data": "4/25", "status": "GOLD" },
  { "name": "Dungeon Rushers: Crawler RPG", "price": "0.14", "region": "A", "data": "4/28", "status": "" },
  { "name": "Dying Light 2 Stay Human", "price": "8.26", "region": "A", "data": "4/26", "status": "" },
  { "name": "Dying Light 2 Stay Human - Ultimate Edition", "price": "22.48", "region": "A", "data": "4/26", "status": "" },
  { "name": "EA SPORTS™ FIFA 23 Standard Edition Xbox One", "price": "10.82", "region": "T", "data": "12/3", "status": "" },
  { "name": "Edge of Eternity", "price": "1.55", "region": "T", "data": "4/28", "status": "" },
  { "name": "Endzone - A World Apart: Survivor Edition", "price": "8.26", "region": "A", "data": "4/25", "status": "GOLD" },
  { "name": "Escape Dead Island", "price": "0.18", "region": "A", "data": "12/3", "status": "" },
  { "name": "Escape Game Fort Boyard", "price": "0.98", "region": "A", "data": "4/28", "status": "" },
  { "name": "Evasion From Hell", "price": "0.46", "region": "A", "data": "4/25", "status": "" },
  { "name": "Extinction", "price": "0.30", "region": "A", "data": "4/28", "status": "" },
  { "name": "FAR: Lone Sails", "price": "0.29", "region": "A", "data": "4/25", "status": "" },
  { "name": "FIFA 22 Xbox One", "price": "20.18", "region": "A", "data": "5/16", "status": "" },
  { "name": "FIFA 22 Xbox Series X|S", "price": "23.09", "region": "T", "data": "5/16", "status": "" },
  { "name": "FMV Comedy Bundle", "price": "1.00", "region": "A", "data": "5/2/", "status": "" },
  { "name": "FMV Horror Bundle", "price": "1.67", "region": "A", "data": "5/2/", "status": "" },
  { "name": "Fade to Silence", "price": "0.68", "region": "A", "data": "4/28", "status": "" },
  { "name": "Fantasy Dash", "price": "0.07", "region": "A", "data": "4/27", "status": "" },
  { "name": "Far Cry® 6 Deluxe Edition", "price": "9.17", "region": "A", "data": "4/28", "status": "" },
  { "name": "Farm Slider", "price": "0.26", "region": "A", "data": "4/28", "status": "" },
  { "name": "Fatum Betula + Knights & Guns", "price": "0.37", "region": "A", "data": "4/29", "status": "" },
  { "name": "Five Dates", "price": "0.51", "region": "A", "data": "5/2/", "status": "" },
  { "name": "Flockers", "price": "0.21", "region": "A", "data": "4/28", "status": "" },
  { "name": "Flowing Lights", "price": "0.21", "region": "A", "data": "4/25", "status": "GOLD" },
  { "name": "Flying Soldiers", "price": "1.73", "region": "E", "data": "4/25", "status": "" },
  { "name": "Fobia - St. Dinfna Hotel", "price": "0.98", "region": "A", "data": "4/28", "status": "" },
  { "name": "Foreclosed", "price": "0.33", "region": "A", "data": "4/28", "status": "" },
  { "name": "GONNER2", "price": "0.26", "region": "A", "data": "5/2/", "status": "" },
  { "name": "Galaxy of Pen & Paper +1 Edition", "price": "0.37", "region": "A", "data": "4/28", "status": "" },
  { "name": "Gas Station Simulator", "price": "5.20", "region": "A", "data": "4/25", "status": "" },
  { "name": "Genesis Alpha One", "price": "0.34", "region": "A", "data": "4/28", "status": "" },
  { "name": "Get Even", "price": "0.69", "region": "A", "data": "4/28", "status": "" },
  { "name": "Ghostbusters: Spirits Unleashed", "price": "1.71", "region": "A", "data": "4/24", "status": "" },
  { "name": "GoNNER - BLüEBERRY EDiTION", "price": "0.09", "region": "A", "data": "5/2/", "status": "" },
  { "name": "God's Trigger", "price": "0.64", "region": "A", "data": "4/25", "status": "" },
  { "name": "Grand Theft Auto Online", "price": "4.59", "region": "A", "data": "4/28", "status": "" },
  { "name": "Grand Theft Auto V (Xbox One & Xbox Series X|S)", "price": "10.19", "region": "T", "data": "4/28", "status": "" },
  { "name": "Grand Theft Auto V: Premium Edition & Great White Shark C...", "price": "4.64", "region": "T", "data": "4/28", "status": "" },
  { "name": "Grand Theft Auto V: Premium Edition & Megalodon Shark Car...", "price": "7.78", "region": "T", "data": "4/28", "status": "" },
  { "name": "Grand Theft Auto V: Premium Edition & Whale Shark Card Bu...", "price": "5.36", "region": "T", "data": "4/28", "status": "" },
  { "name": "Gravel", "price": "0.92", "region": "A", "data": "4/28", "status": "" },
  { "name": "Gravel Special Edition", "price": "1.38", "region": "A", "data": "4/28", "status": "" },
  { "name": "GreedFall - Gold Edition", "price": "4.41", "region": "T", "data": "4/25", "status": "GOLD" },
  { "name": "Grood", "price": "0.10", "region": "A", "data": "4/25", "status": "" },
  { "name": "Guardian of Lore", "price": "0.73", "region": "A", "data": "4/26", "status": "" },
  { "name": "HELLFRONT: HONEYMOON", "price": "0.13", "region": "A", "data": "4/25", "status": "" },
  { "name": "Hasbro Family Fun Pack - Super Edition", "price": "0.92", "region": "A", "data": "4/25", "status": "GOLD" },
  { "name": "Heart&Slash", "price": "0.23", "region": "A", "data": "4/25", "status": "" },
  { "name": "HoPiKo", "price": "0.06", "region": "A", "data": "4/28", "status": "" },
  { "name": "Hokko Life", "price": "2.06", "region": "A", "data": "4/28", "status": "" },
  { "name": "Hotel Transylvania 3: Monsters Overboard", "price": "6.69", "region": "A", "data": "4/28", "status": "" },
  { "name": "Human Fall Flat", "price": "1.75", "region": "E", "data": "4/25", "status": "GOLD" },
  { "name": "Hunt Ducks 4", "price": "0.07", "region": "A", "data": "5/1/", "status": "" },
  { "name": "Hunter's Legacy", "price": "0.05", "region": "A", "data": "4/25", "status": "" },
  { "name": "Hyper-5", "price": "5.35", "region": "I", "data": "4/27", "status": "" },
  { "name": "I Saw Black Clouds", "price": "0.56", "region": "A", "data": "5/2/", "status": "" },
  { "name": "Ice Cream Surfer", "price": "0.11", "region": "A", "data": "4/25", "status": "" },
  { "name": "Immortal Realms: Vampire Wars", "price": "6.88", "region": "A", "data": "4/28", "status": "" },
  { "name": "In Sound Mind", "price": "1.17", "region": "A", "data": "4/28", "status": "" },
  { "name": "Indie Gems Bundle - Explosions Edition", "price": "0.49", "region": "A", "data": "4/28", "status": "" },
  { "name": "Infinity Runner", "price": "0.16", "region": "A", "data": "5/2/", "status": "" },
  { "name": "Instant Sports Plus", "price": "1.24", "region": "A", "data": "4/28", "status": "" },
  { "name": "Insurgency: Sandstorm - Deluxe Edition", "price": "15.46", "region": "T", "data": "4/28", "status": "" },
  { "name": "Insurgency: Sandstorm - Gold Edition", "price": "18.04", "region": "T", "data": "4/25", "status": "GOLD" },
  { "name": "Itorah", "price": "1.04", "region": "A", "data": "5/6/", "status": "" },
  { "name": "Journey to the Savage Planet", "price": "3.67", "region": "A", "data": "4/28", "status": "" },
  { "name": "Joy Ball Adventure", "price": "0.07", "region": "A", "data": "4/28", "status": "" },
  { "name": "Just Cause 3", "price": "0.64", "region": "A", "data": "4/28", "status": "" },
  { "name": "Just Cause 3: XXL Edition", "price": "0.87", "region": "A", "data": "4/28", "status": "" },
  { "name": "Just Cause 4 - Complete Edition", "price": "3.09", "region": "T", "data": "4/28", "status": "" },
  { "name": "Just Cause 4 - Gold Edition", "price": "3.67", "region": "A", "data": "4/28", "status": "" },
  { "name": "Just Cause 4: Reloaded", "price": "2.57", "region": "A", "data": "4/28", "status": "" },
  { "name": "Katamari Damacy REROLL", "price": "2.29", "region": "A", "data": "4/28", "status": "" },
  { "name": "Kaze and the Wild Masks", "price": "0.89", "region": "A", "data": "4/28", "status": "" },
  { "name": "Kill The Bad Guy", "price": "0.08", "region": "A", "data": "4/28", "status": "" },
  { "name": "King's Bounty II", "price": "3.87", "region": "T", "data": "4/28", "status": "" },
  { "name": "King's Bounty II - Lord's Edition", "price": "4.25", "region": "T", "data": "4/28", "status": "" },
  { "name": "Kingdom Treasury Collection", "price": "0.27", "region": "A", "data": "5/2/", "status": "" },
  { "name": "Kingdom Two Crowns", "price": "0.23", "region": "A", "data": "5/2/", "status": "" },
  { "name": "Kingdom Two Crowns: Norse Lands Edition", "price": "0.49", "region": "A", "data": "5/2/", "status": "" },
  { "name": "Kingdom: New Lands", "price": "0.07", "region": "A", "data": "5/2/", "status": "" },
  { "name": "Kingdoms of Amalur: Re-Reckoning FATE Edition", "price": "2.18", "region": "A", "data": "4/28", "status": "" },
  { "name": "Kitaria Fables: Deluxe Edition", "price": "0.80", "region": "A", "data": "4/25", "status": "GOLD" },
  { "name": "Knee Deep", "price": "0.24", "region": "A", "data": "5/2/", "status": "" },
  { "name": "Knights of Pen & Paper 2 Deluxiest Edition", "price": "0.21", "region": "A", "data": "4/28", "status": "" },
  { "name": "Knights of Pen and Paper +1 Deluxier Edition", "price": "0.25", "region": "A", "data": "4/28", "status": "" },
  { "name": "Knights of Pen and Paper Bundle", "price": "0.52", "region": "A", "data": "4/28", "status": "" },
  { "name": "Kona", "price": "0.10", "region": "A", "data": "4/28", "status": "" },
  { "name": "L.A. Noire", "price": "3.21", "region": "A", "data": "4/25", "status": "GOLD" },
  { "name": "LA Cops", "price": "0.15", "region": "A", "data": "4/28", "status": "" },
  { "name": "Lacuna - A Sci-Fi Noir Adventure", "price": "0.39", "region": "A", "data": "4/25", "status": "GOLD" },
  { "name": "Lake", "price": "0.61", "region": "A", "data": "4/25", "status": "GOLD" },
  { "name": "Late Shift", "price": "0.23", "region": "A", "data": "5/2/", "status": "" },
  { "name": "Lethis - Path of Progress", "price": "0.91", "region": "A", "data": "4/28", "status": "" },
  { "name": "Life is Strange Remastered Collection", "price": "7.34", "region": "T", "data": "4/28", "status": "" },
  { "name": "Kingdoms of Amalur: Re-Reckoning FATE Edition", "price": "2.18", "region": "A", "data": "4/28", "status": "" },
  { "name": "Kitaria Fables: Deluxe Edition", "price": "0.80", "region": "A", "data": "4/25", "status": "GOLD" },
  { "name": "Knee Deep", "price": "0.24", "region": "A", "data": "5/2/", "status": "" },
  { "name": "Knights of Pen & Paper 2 Deluxiest Edition", "price": "0.21", "region": "A", "data": "4/28", "status": "" },
  { "name": "Knights of Pen and Paper +1 Deluxier Edition", "price": "0.25", "region": "A", "data": "4/28", "status": "" },
  { "name": "Knights of Pen and Paper Bundle", "price": "0.52", "region": "A", "data": "4/28", "status": "" },
  { "name": "Kona", "price": "0.10", "region": "A", "data": "4/28", "status": "" },
  { "name": "L.A. Noire", "price": "3.21", "region": "A", "data": "4/25", "status": "GOLD" },
  { "name": "LA Cops", "price": "0.15", "region": "A", "data": "4/28", "status": "" },
  { "name": "Lacuna - A Sci-Fi Noir Adventure", "price": "0.39", "region": "A", "data": "4/25", "status": "GOLD" },
  { "name": "Lake", "price": "0.61", "region": "A", "data": "4/25", "status": "GOLD" },
  { "name": "Late Shift", "price": "0.23", "region": "A", "data": "5/2/", "status": "" },
  { "name": "Lethis - Path of Progress", "price": "0.91", "region": "A", "data": "4/28", "status": "" },
  { "name": "Life is Strange Remastered Collection", "price": "7.34", "region": "T", "data": "4/28", "status": "" },
  { "name": "Life is Strange: True Colors", "price": "8.86", "region": "T", "data": "4/28", "status": "" },
  { "name": "Life is Strange: True Colors - Deluxe Edition", "price": "10.31", "region": "T", "data": "4/28", "status": "" },
  { "name": "Life is Strange: True Colors - Ultimate Edition", "price": "14.82", "region": "T", "data": "4/28", "status": "" },
  { "name": "Light & Dark Bundle", "price": "1.03", "region": "A", "data": "11/2", "status": "" },
  { "name": "Light of Life", "price": "0.26", "region": "A", "data": "5/6/", "status": "" },
  { "name": "Little League World Series Baseball 2022", "price": "5.37", "region": "A", "data": "4/28", "status": "" },
  { "name": "Little Mage Adventure", "price": "0.07", "region": "A", "data": "4/27", "status": "" },
  { "name": "Little Mouse's Encyclopedia", "price": "0.17", "region": "A", "data": "4/25", "status": "GOLD" },
  { "name": "Little Nightmares", "price": "0.74", "region": "T", "data": "4/28", "status": "" },
  { "name": "Little Nightmares I & II Bundle", "price": "4.10", "region": "T", "data": "4/28", "status": "" },
  { "name": "Lonesome Village", "price": "4.08", "region": "E", "data": "4/25", "status": "" },
  { "name": "Lords of the Fallen (2014)", "price": "0.73", "region": "A", "data": "4/28", "status": "" },
  { "name": "Lords of the Fallen Complete Edition (2014)", "price": "1.10", "region": "A", "data": "4/28", "status": "" },
  { "name": "Lose Your Head Deluxe Bundle", "price": "0.33", "region": "A", "data": "5/2/", "status": "" },
  { "name": "Lost Words: Beyond the Page", "price": "0.92", "region": "A", "data": "4/28", "status": "" },
  { "name": "MONOPOLY FAMILY FUN PACK", "price": "0.21", "region": "A", "data": "4/25", "status": "GOLD" },
  { "name": "MONOPOLY PLUS", "price": "0.58", "region": "A", "data": "4/28", "status": "" },
  { "name": "MONOPOLY PLUS + MONOPOLY Madness", "price": "4.68", "region": "A", "data": "4/28", "status": "" },
  { "name": "MXGP PRO", "price": "0.57", "region": "A", "data": "4/28", "status": "" },
  { "name": "MY HERO ONE’S JUSTICE", "price": "0.87", "region": "A", "data": "4/28", "status": "" },
  { "name": "Mable & The Wood", "price": "0.20", "region": "A", "data": "4/25", "status": "" },
  { "name": "Madden NFL 19", "price": "26.12", "region": "C", "data": "12/3", "status": "" },
  { "name": "Madden NFL 22 Xbox One", "price": "17.66", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 22 Xbox Series X|S", "price": "20.55", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 23 Xbox One", "price": "23.48", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 23 Xbox Series X|S", "price": "27.52", "region": "A", "data": "12/3", "status": "" },
  { "name": "Maid of Sker", "price": "0.66", "region": "A", "data": "5/2/", "status": "" },
  { "name": "Mangavania", "price": "0.26", "region": "A", "data": "4/26", "status": "" },
  { "name": "Mangavania (Xbox Series X|S)", "price": "0.26", "region": "A", "data": "4/26", "status": "" },
  { "name": "Marsupilami: Hoobadventure", "price": "0.98", "region": "A", "data": "4/28", "status": "" },
  { "name": "Megaparty: A Tootuff Adventure", "price": "0.39", "region": "A", "data": "4/28", "status": "" },
  { "name": "Memories of Mars", "price": "0.33", "region": "A", "data": "4/28", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.00", "region": "U", "data": "12/1", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.00", "region": "U", "data": "12/1", "status": "" },
  { "name": "Miraculous: Rise of the Sphinx", "price": "7.15", "region": "A", "data": "4/28", "status": "" },
  { "name": "Miraculous: Rise of the Sphinx Ultimate Edition", "price": "8.26", "region": "A", "data": "4/28", "status": "" },
  { "name": "Momonga Pinball Adventures", "price": "0.07", "region": "A", "data": "4/28", "status": "" },
  { "name": "Monopoly Madness", "price": "3.22", "region": "T", "data": "4/25", "status": "GOLD" },
  { "name": "Monster Crown", "price": "0.65", "region": "A", "data": "4/28", "status": "" },
  { "name": "Monster Energy Supercross - The Official Videogame 3", "price": "1.72", "region": "A", "data": "4/28", "status": "" },
  { "name": "Monster Energy Supercross 3 - Special Edition", "price": "3.10", "region": "A", "data": "4/28", "status": "" },
  { "name": "Monster Harvest", "price": "0.39", "region": "A", "data": "4/28", "status": "" },
  { "name": "Monstrum", "price": "0.60", "region": "A", "data": "4/28", "status": "" },
  { "name": "Moonfall Ultimate", "price": "0.20", "region": "A", "data": "5/2/", "status": "" },
  { "name": "Morbid: The Seven Acolytes", "price": "0.39", "region": "A", "data": "4/28", "status": "" },
  { "name": "Moto Rush GT", "price": "0.31", "region": "A", "data": "5/6/", "status": "" },
  { "name": "MotoGP™17", "price": "0.23", "region": "A", "data": "4/28", "status": "" },
  { "name": "Motorbike Racing Bundle", "price": "0.50", "region": "A", "data": "4/28", "status": "" },
  { "name": "Mugsters", "price": "0.10", "region": "A", "data": "4/28", "status": "" },
  { "name": "Mushroom Savior (For Windows 10)", "price": "0.16", "region": "A", "data": "4/25", "status": "" },
  { "name": "My Friend Peppa Pig", "price": "5.74", "region": "E", "data": "4/28", "status": "" },
  { "name": "My Universe - Interior Designer", "price": "0.79", "region": "A", "data": "4/28", "status": "" },
  { "name": "My Universe - My Baby", "price": "0.79", "region": "A", "data": "4/28", "status": "" },
  { "name": "My Universe - School Teacher", "price": "0.98", "region": "A", "data": "4/28", "status": "" },
  { "name": "Mythic Ocean", "price": "0.25", "region": "A", "data": "4/25", "status": "GOLD" },
  { "name": "NAMCO MUSEUM® ARCHIVES Vol 1", "price": "1.15", "region": "A", "data": "4/28", "status": "" },
  { "name": "NARUTO SHIPPUDEN: Ultimate Ninja STORM Legacy", "price": "1.49", "region": "A", "data": "4/28", "status": "" },
  { "name": "NARUTO SHIPPUDEN™: Ultimate Ninja® STORM 2", "price": "0.46", "region": "A", "data": "4/28", "status": "" },
  { "name": "NBA 2K23 Digital Deluxe Edition", "price": "10.32", "region": "A", "data": "4/28", "status": "" },
  { "name": "NHRA Championship Drag Racing: Speed For All", "price": "8.94", "region": "A", "data": "4/28", "status": "" },
  { "name": "NHRA Championship Drag Racing: Speed for All - Deluxe Edi...", "price": "10.32", "region": "A", "data": "4/28", "status": "" },
  { "name": "NHRA Championship Drag Racing: Speed for All - Ultimate E...", "price": "13.76", "region": "A", "data": "4/28", "status": "" },
  { "name": "NORCO", "price": "0.49", "region": "A", "data": "5/2/", "status": "" },
  { "name": "Necromunda: Hired Gun", "price": "4.59", "region": "A", "data": "4/28", "status": "" },
  { "name": "Necropolis", "price": "1.15", "region": "A", "data": "4/28", "status": "" },
  { "name": "NeuroVoider", "price": "0.16", "region": "A", "data": "4/28", "status": "" },
  { "name": "New Tales from the Borderlands: Deluxe Edition", "price": "15.44", "region": "T", "data": "4/28", "status": "" },
  { "name": "Nickelodeon All-Star Brawl", "price": "2.57", "region": "A", "data": "4/28", "status": "" },
  { "name": "Nickelodeon Kart Racers 3: Slime Speedway", "price": "5.37", "region": "A", "data": "4/28", "status": "" },
  { "name": "Nickelodeon Kart Racers 3: Slime Speedway Turbo Edition", "price": "6.19", "region": "A", "data": "4/28", "status": "" },
  { "name": "Night Book", "price": "0.51", "region": "A", "data": "5/2/", "status": "" },
  { "name": "Night Call", "price": "0.26", "region": "A", "data": "5/2/", "status": "" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.16", "region": "A", "data": "5/31", "status": "" },
  { "name": "Ninjin: Clash of Carrots", "price": "0.13", "region": "A", "data": "4/28", "status": "" },
  { "name": "Nuclear Blaze", "price": "0.88", "region": "A", "data": "4/28", "status": "" },
  { "name": "ONE PIECE World Seeker", "price": "1.38", "region": "A", "data": "4/28", "status": "" },
  { "name": "ONE PIECE: PIRATE WARRIORS 4", "price": "2.06", "region": "A", "data": "4/28", "status": "" },
  { "name": "OUTRIDERS", "price": "8.07", "region": "A", "data": "4/28", "status": "" },
  { "name": "OUTRIDERS WORLDSLAYER", "price": "15.14", "region": "A", "data": "4/28", "status": "" },
  { "name": "Oh My Godheads", "price": "0.28", "region": "A", "data": "4/28", "status": "" },
  { "name": "One Piece: Burning Blood", "price": "1.24", "region": "A", "data": "4/28", "status": "" },
  { "name": "Outbreak: Complete Collection", "price": "1.05", "region": "A", "data": "4/25", "status": "GOLD" },
  { "name": "Outbreak: The New Nightmare Definitive Edition", "price": "0.20", "region": "A", "data": "4/25", "status": "GOLD" },
  { "name": "Outbreak: The Nightmare Chronicles Definitive Edition", "price": "0.20", "region": "A", "data": "4/25", "status": "GOLD" },
  { "name": "Overcooked", "price": "0.17", "region": "A", "data": "4/28", "status": "" },
  { "name": "Overruled!", "price": "0.07", "region": "A", "data": "4/28", "status": "" },
  { "name": "PAYDAY 2 - CRIMEWAVE EDITION - THE BIG SCORE Game Bundle", "price": "0.46", "region": "A", "data": "4/28", "status": "" },
  { "name": "PJ Masks: Heroes of the Night", "price": "7.80", "region": "A", "data": "4/28", "status": "" },
  { "name": "Pankapu", "price": "0.11", "region": "A", "data": "4/28", "status": "" },
  { "name": "Paper Flight - Speed Rush", "price": "0.46", "region": "A", "data": "4/25", "status": "" },
  { "name": "Paratopic + Urban Flow", "price": "0.37", "region": "A", "data": "5/6/", "status": "" },
  { "name": "Pathfinder: Kingmaker - Definitive Edition", "price": "1.63", "region": "A", "data": "4/28", "status": "" },
  { "name": "Paw Patrol Bundle", "price": "8.65", "region": "E", "data": "4/28", "status": "" },
  { "name": "Penarium", "price": "0.07", "region": "A", "data": "4/28", "status": "" },
  { "name": "Planet Alpha", "price": "0.41", "region": "A", "data": "4/28", "status": "" },
  { "name": "Praetorians - HD Remaster", "price": "3.21", "region": "A", "data": "4/28", "status": "" },
  { "name": "Pure Farming 2018", "price": "0.48", "region": "A", "data": "4/25", "status": "" },
  { "name": "Pure Farming 2018 Digital Deluxe Edition", "price": "0.66", "region": "A", "data": "4/25", "status": "GOLD" },
  { "name": "Quantic Pinball", "price": "0.06", "region": "A", "data": "4/28", "status": "" },
  { "name": "RABBIDS INVASION - GOLD EDITION", "price": "0.31", "region": "A", "data": "4/25", "status": "GOLD" },
  { "name": "RAD", "price": "0.46", "region": "T", "data": "4/28", "status": "" },
  { "name": "RIDE", "price": "0.22", "region": "A", "data": "4/28", "status": "" },
  { "name": "RIDERS REPUBLIC™ DELUXE EDITION", "price": "9.17", "region": "A", "data": "4/28", "status": "" },
  { "name": "RIOT: Civil Unrest", "price": "0.18", "region": "A", "data": "4/28", "status": "" },
  { "name": "RISK", "price": "0.18", "region": "A", "data": "4/25", "status": "GOLD" },
  { "name": "Race with Ryan", "price": "6.69", "region": "A", "data": "4/28", "status": "" },
  { "name": "Radical Rabbit Stew", "price": "0.26", "region": "A", "data": "4/28", "status": "" },
  { "name": "Raging Justice", "price": "0.10", "region": "A", "data": "4/28", "status": "" },
  { "name": "Railway Empire", "price": "0.65", "region": "A", "data": "4/28", "status": "" },
  { "name": "Rapala Fishing: Pro Series", "price": "0.23", "region": "A", "data": "4/28", "status": "" },
  { "name": "Rayman Legends", "price": "0.79", "region": "T", "data": "4/28", "status": "" },
  { "name": "Real Farm - Gold Edition", "price": "0.39", "region": "A", "data": "4/28", "status": "" },
  { "name": "Red Dead Redemption 2: Ultimate Edition", "price": "8.64", "region": "E", "data": "4/28", "status": "" },
  { "name": "Remothered: Broken Porcelain", "price": "0.69", "region": "T", "data": "4/28", "status": "" },
  { "name": "Retro Tank Arcade", "price": "0.07", "region": "A", "data": "5/2/", "status": "" },
  { "name": "Reus", "price": "0.27", "region": "A", "data": "4/28", "status": "" },
  { "name": "Rewarding Community Bundle", "price": "0.39", "region": "A", "data": "5/2/", "status": "" },
  { "name": "Risk: Urban Assault", "price": "0.27", "region": "A", "data": "4/25", "status": "GOLD" },
  { "name": "Roarr! Jurassic Edition", "price": "0.13", "region": "A", "data": "4/25", "status": "" },
  { "name": "Robotry!", "price": "0.80", "region": "A", "data": "4/25", "status": "GOLD" },
  { "name": "Rock of Ages 3: Make & Break", "price": "1.04", "region": "T", "data": "4/28", "status": "" },
  { "name": "Rustler", "price": "0.46", "region": "A", "data": "4/28", "status": "" },
  { "name": "SIMULACRA", "price": "0.47", "region": "A", "data": "5/2/", "status": "" },
  { "name": "SOULCALIBUR VI", "price": "1.38", "region": "A", "data": "4/28", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "5.87", "region": "A", "data": "12/3", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "7.84", "region": "A", "data": "1/1/", "status": "" },
  { "name": "Sable", "price": "0.66", "region": "A", "data": "5/2/", "status": "" },
  { "name": "Saints Row Platinum Edition", "price": "17.61", "region": "A", "data": "4/25", "status": "GOLD" },
  { "name": "ScourgeBringer", "price": "0.56", "region": "A", "data": "4/28", "status": "" },
  { "name": "Seasons after Fall", "price": "0.33", "region": "A", "data": "4/25", "status": "GOLD" },
  { "name": "Sephirothic Stories", "price": "0.49", "region": "A", "data": "4/25", "status": "" },
  { "name": "Shantae and the Pirate's Curse", "price": "0.46", "region": "A", "data": "4/25", "status": "" },
  { "name": "Shantae and the Seven Sirens", "price": "1.18", "region": "A", "data": "4/25", "status": "" },
  { "name": "Shantae: Half-Genie Hero", "price": "0.46", "region": "A", "data": "4/25", "status": "" },
  { "name": "Shape Up Gold Edition", "price": "0.34", "region": "A", "data": "4/25", "status": "GOLD" },
  { "name": "Shape of the World", "price": "0.25", "region": "A", "data": "4/28", "status": "" },
  { "name": "Skully", "price": "1.73", "region": "T", "data": "4/28", "status": "" },
  { "name": "Slaycation Paradise", "price": "0.65", "region": "A", "data": "4/28", "status": "" },
  { "name": "Sleeping Dogs™ Definitive Edition", "price": "0.59", "region": "T", "data": "4/28", "status": "" },
  { "name": "Sniper Ghost Warrior Contracts 2 Deluxe Arsenal Edition", "price": "5.76", "region": "E", "data": "4/28", "status": "" },
  { "name": "SnowRunner - 2-Year Anniversary Edition", "price": "26.80", "region": "T", "data": "4/25", "status": "GOLD" },
  { "name": "Solo: Islands of the Heart", "price": "0.23", "region": "A", "data": "4/28", "status": "" },
  { "name": "Soul Axiom", "price": "0.26", "region": "A", "data": "5/2/", "status": "" },
  { "name": "Souldiers", "price": "0.98", "region": "A", "data": "4/28", "status": "" },
  { "name": "South Park™: The Stick of Truth ™", "price": "0.51", "region": "A", "data": "4/28", "status": "" },
  { "name": "Sparkle Bundle", "price": "0.58", "region": "A", "data": "12/3", "status": "" },
  { "name": "Sparklite", "price": "0.32", "region": "A", "data": "4/28", "status": "" },
  { "name": "Spirit of the North: Enhanced Edition", "price": "0.49", "region": "A", "data": "4/28", "status": "" },
  { "name": "Splasher", "price": "0.14", "region": "A", "data": "4/28", "status": "" },
  { "name": "SpongeBob SquarePants: Battle for Bikini Bottom - Rehydrated", "price": "1.09", "region": "A", "data": "4/28", "status": "" },
  { "name": "Star Renegades", "price": "0.49", "region": "A", "data": "5/2/", "status": "" },
  { "name": "Starlink: Battle for Atlas™", "price": "1.10", "region": "A", "data": "4/25", "status": "GOLD" },
  { "name": "Steep X Games Gold Edition", "price": "1.19", "region": "A", "data": "4/28", "status": "" },
  { "name": "Stellar Interface", "price": "0.07", "region": "A", "data": "4/30", "status": "" },
  { "name": "Stranded Sails - Explorers of the Cursed Islands", "price": "0.39", "region": "A", "data": "4/28", "status": "" },
  { "name": "Stray Blade", "price": "8.02", "region": "E", "data": "4/30", "status": "" },
  { "name": "Street Outlaws 2: Winner Takes All – Digital Deluxe", "price": "1.75", "region": "T", "data": "4/28", "status": "" },
  { "name": "Sublevel Zero Redux", "price": "0.18", "region": "A", "data": "4/28", "status": "" },
  { "name": "Sweet Bakery Tycoon", "price": "0.26", "region": "A", "data": "4/28", "status": "" },
  { "name": "Swordbreaker: Origins", "price": "0.52", "region": "A", "data": "5/5/", "status": "" },
  { "name": "Swordbreaker: Origins (Xbox Series X|S)", "price": "0.52", "region": "A", "data": "5/5/", "status": "" },
  { "name": "TEMBO THE BADASS ELEPHANT", "price": "0.21", "region": "A", "data": "4/28", "status": "" },
  { "name": "TRANSFORMERS: BATTLEGROUNDS", "price": "4.01", "region": "A", "data": "4/28", "status": "" },
  { "name": "TRIVIAL PURSUIT LIVE!", "price": "0.21", "region": "A", "data": "4/28", "status": "" },
  { "name": "Tango Fiesta", "price": "0.09", "region": "A", "data": "4/28", "status": "" },
  { "name": "Teacup", "price": "0.39", "region": "A", "data": "4/25", "status": "GOLD" },
  { "name": "Temple Dash: Jungle Adventure", "price": "0.07", "region": "A", "data": "4/28", "status": "" },
  { "name": "Temtem", "price": "9.70", "region": "E", "data": "4/25", "status": "GOLD" },
  { "name": "Temtem - Deluxe Edition", "price": "13.95", "region": "E", "data": "4/25", "status": "GOLD" },
  { "name": "Ten Dates", "price": "0.79", "region": "A", "data": "5/2/", "status": "" },
  { "name": "The Bunker", "price": "0.37", "region": "A", "data": "5/2/", "status": "" },
  { "name": "The Complex", "price": "0.51", "region": "A", "data": "5/2/", "status": "" },
  { "name": "The Count Lucanor", "price": "0.16", "region": "A", "data": "4/28", "status": "" },
  { "name": "The Creepy Syndrome", "price": "0.29", "region": "A", "data": "4/27", "status": "" },
  { "name": "The Dark Pictures Anthology: Little Hope", "price": "4.61", "region": "T", "data": "4/28", "status": "" },
  { "name": "The Dark Pictures Anthology: Man Of Medan", "price": "4.61", "region": "T", "data": "4/28", "status": "" },
  { "name": "The Dungeon Of Naheulbeuk: The Amulet Of Chaos - Chicken Edition", "price": "1.58", "region": "A", "data": "4/28", "status": "" },
  { "name": "The Escapists: The Walking Dead", "price": "0.23", "region": "A", "data": "4/28", "status": "" },
  { "name": "The Forgotten City", "price": "1.18", "region": "A", "data": "4/28", "status": "" },
  { "name": "The Infectious Madness of Doctor Dekker", "price": "0.24", "region": "A", "data": "5/2/", "status": "" },
  { "name": "The Interactive Movie Bundle", "price": "0.94", "region": "A", "data": "5/2/", "status": "" },
  { "name": "The Jackbox Party Quadpack", "price": "2.58", "region": "A", "data": "12/3", "status": "" },
  { "name": "The King's Bird", "price": "0.26", "region": "A", "data": "4/25", "status": "" },
  { "name": "The Last Door - Complete Edition", "price": "0.34", "region": "A", "data": "4/28", "status": "" },
  { "name": "The Long Dark", "price": "0.79", "region": "A", "data": "4/25", "status": "" },
  { "name": "The Long Reach", "price": "0.14", "region": "A", "data": "4/28", "status": "" },
  { "name": "The Longest Road on Earth", "price": "0.26", "region": "A", "data": "5/2/", "status": "" },
  { "name": "The Mosaic", "price": "0.33", "region": "A", "data": "5/2/", "status": "" },
  { "name": "The Mosaic 1% Edition", "price": "0.34", "region": "A", "data": "5/2/", "status": "" },
  { "name": "The Outer Worlds: Board-Approved Bundle", "price": "22.22", "region": "T", "data": "4/25", "status": "GOLD" },
  { "name": "The Raven Remastered", "price": "0.34", "region": "A", "data": "4/28", "status": "" },
  { "name": "The Serpent Rogue", "price": "1.65", "region": "A", "data": "4/28", "status": "" },
  { "name": "The Shapeshifting Detective", "price": "0.39", "region": "A", "data": "5/2/", "status": "" },
  { "name": "The Sisters - Party of the Year", "price": "0.98", "region": "A", "data": "4/28", "status": "" },
  { "name": "The Smurfs - Mission Vileaf", "price": "1.05", "region": "A", "data": "4/28", "status": "" },
  { "name": "The Ultimate FMV Bundle", "price": "2.29", "region": "A", "data": "5/2/", "status": "" },
  { "name": "The Ultimate FMV Bundle 2", "price": "2.45", "region": "A", "data": "5/2/", "status": "" },
  { "name": "The Walking Vegetables: Radical Edition", "price": "0.17", "region": "A", "data": "4/28", "status": "" },
  { "name": "Them Bombs", "price": "0.11", "region": "A", "data": "4/25", "status": "" },
  { "name": "They Always Run", "price": "0.98", "region": "A", "data": "4/28", "status": "" },
  { "name": "This Is the Police", "price": "0.23", "region": "A", "data": "4/28", "status": "" },
  { "name": "This War of Mine: The Little Ones", "price": "0.14", "region": "A", "data": "4/25", "status": "GOLD" },
  { "name": "This is the Police 2", "price": "0.34", "region": "A", "data": "4/28", "status": "" },
  { "name": "This is the Zodiac Speaking", "price": "0.26", "region": "A", "data": "4/25", "status": "" },
  { "name": "Time Carnage", "price": "0.28", "region": "A", "data": "5/2/", "status": "" },
  { "name": "Time on Frog Island", "price": "0.82", "region": "A", "data": "4/28", "status": "" },
  { "name": "Tin Can", "price": "5.78", "region": "A", "data": "4/27", "status": "" },
  { "name": "Tin Can: Supporter Edition", "price": "7.22", "region": "A", "data": "4/27", "status": "" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint", "price": "2.75", "region": "A", "data": "4/25", "status": "" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Ultimate Edition", "price": "4.36", "region": "A", "data": "4/28", "status": "" },
  { "name": "Tour de France 2018", "price": "0.88", "region": "T", "data": "4/25", "status": "GOLD" },
  { "name": "Townscaper", "price": "0.19", "region": "A", "data": "5/2/", "status": "" },
  { "name": "TramSim: Console Edition - Deluxe", "price": "33.63", "region": "T", "data": "4/25", "status": "" },
  { "name": "Transcripted", "price": "0.09", "region": "A", "data": "4/28", "status": "" },
  { "name": "Trials® Rising", "price": "1.37", "region": "A", "data": "4/28", "status": "" },
  { "name": "Tropico 5 - Penultimate Edition", "price": "0.82", "region": "A", "data": "4/28", "status": "" },
  { "name": "Tropico 6", "price": "9.17", "region": "A", "data": "4/28", "status": "" },
  { "name": "Twin Mirror", "price": "1.83", "region": "A", "data": "4/28", "status": "" },
  { "name": "Two Point Hospital: JUMBO Edition", "price": "3.21", "region": "A", "data": "4/28", "status": "" },
  { "name": "Two Point Hospital: JUMBO Edition Upgrade", "price": "1.60", "region": "A", "data": "4/28", "status": "" },
  { "name": "UNO®", "price": "0.51", "region": "A", "data": "4/28", "status": "" },
  { "name": "Ultra Pixel Survive", "price": "0.26", "region": "A", "data": "4/29", "status": "" },
  { "name": "Unbox: Newbie's Adventure", "price": "0.23", "region": "A", "data": "4/28", "status": "" },
  { "name": "Underworld Ascendant", "price": "0.49", "region": "A", "data": "4/28", "status": "" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "0.62", "region": "A", "data": "12/3", "status": "" },
  { "name": "Vaporum", "price": "0.33", "region": "A", "data": "4/28", "status": "" },
  { "name": "Velocity Noodle", "price": "0.69", "region": "A", "data": "4/27", "status": "" },
  { "name": "Verlore Tyd en Drome - Bundle", "price": "0.33", "region": "A", "data": "4/25", "status": "GOLD" },
  { "name": "Vermintide - Digital Value Pack", "price": "1.83", "region": "A", "data": "3/7/", "status": "" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "2.92", "region": "A", "data": "8/31", "status": "" },
  { "name": "WWE 2K23 Cross-Gen Digital Edition", "price": "30.96", "region": "A", "data": "4/25", "status": "" },
  { "name": "WWE 2K23 Icon Edition", "price": "44.72", "region": "A", "data": "4/25", "status": "" },
  { "name": "WWE 2K23 for Xbox One", "price": "27.52", "region": "A", "data": "4/25", "status": "" },
  { "name": "Warhammer 40,000: Boltgun", "price": "17.55", "region": "S", "data": "5/23", "status": "" },
  { "name": "Wasteland 3", "price": "1.38", "region": "A", "data": "4/28", "status": "" },
  { "name": "Watch Dogs: Legion - Deluxe Edition", "price": "3.10", "region": "A", "data": "4/28", "status": "" },
  { "name": "Watch Dogs®: Legion Ultimate Edition", "price": "6.42", "region": "A", "data": "4/28", "status": "" },
  { "name": "Weeping Willow", "price": "0.26", "region": "A", "data": "5/3/", "status": "" },
  { "name": "Weeping Willow (Xbox Series X|S)", "price": "0.26", "region": "A", "data": "5/3/", "status": "" },
  { "name": "West of Dead", "price": "0.26", "region": "A", "data": "5/2/", "status": "" },
  { "name": "West of Dead: Path of the Crow Edition", "price": "0.27", "region": "A", "data": "5/2/", "status": "" },
  { "name": "Where the Bees Make Honey", "price": "0.13", "region": "A", "data": "4/25", "status": "" },
  { "name": "Who Pressed Mute on Uncle Marcus?", "price": "0.60", "region": "A", "data": "5/2/", "status": "" },
  { "name": "Who Wants to Be a Millionaire?", "price": "0.79", "region": "A", "data": "4/28", "status": "" },
  { "name": "Windbound", "price": "0.73", "region": "A", "data": "4/28", "status": "" },
  { "name": "Windscape", "price": "0.13", "region": "A", "data": "4/25", "status": "" },
  { "name": "Wizards of Brandel", "price": "0.49", "region": "A", "data": "4/25", "status": "" },
  { "name": "Worms Rumble", "price": "0.10", "region": "A", "data": "4/28", "status": "" },
  { "name": "Wuppo", "price": "0.37", "region": "A", "data": "4/28", "status": "" },
  { "name": "Wytchwood", "price": "0.78", "region": "A", "data": "4/25", "status": "GOLD" },
  { "name": "XCOM® 2", "price": "0.41", "region": "A", "data": "4/28", "status": "" },
  { "name": "XCOM® 2 Digital Deluxe Edition", "price": "0.90", "region": "A", "data": "4/28", "status": "" },
  { "name": "XCOM®: Enemy Within", "price": "0.37", "region": "A", "data": "4/25", "status": "GOLD" },
  { "name": "Yonder: The Cloud Catcher Chronicles", "price": "0.59", "region": "A", "data": "4/28", "status": "" },
  { "name": "Yonder: The Cloud Catcher Chronicles - XBS|X", "price": "0.59", "region": "A", "data": "4/28", "status": "" },
  { "name": "Yooka-Laylee", "price": "0.20", "region": "A", "data": "4/28", "status": "" },
  { "name": "Yooka-Laylee and the Impossible Lair", "price": "0.30", "region": "A", "data": "4/28", "status": "" },
  { "name": "Zombie Pinball", "price": "0.06", "region": "A", "data": "4/28", "status": "" },
  { "name": "Zombie Vikings", "price": "0.11", "region": "A", "data": "4/25", "status": "" },
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
  const res = value * usd
  const finishRes = res + resSwitсh(price)
  return floor(finishRes.toFixed())
}

function resSwitсh(value) {
  let a;
  if (value <= 1) {
    a = 50
  } else if (value > 1 && value <= 5) {
    a = 60
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
