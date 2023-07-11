const input = document.querySelector('.input');
const output = document.querySelector('.output-res');
const list = document.querySelector('.list')
const showBtn = document.querySelector('.show')


showBtn.addEventListener('click', () => {
  showBtn.classList.contains('active') ?
    hiddenMenu() : showMenu()
})

let usd = 98;

const arr = [
  { "name": "50 Years", "price": "0.15", "region": "A", "data": "7/18", "status": "" },
  { "name": "8Floor Strategic Collection", "price": "0.32", "region": "A", "data": "7/18", "status": "" },
  { "name": "A Memoir Blue", "price": "0.33", "region": "A", "data": "7/14", "status": "" },
  { "name": "A Plague Tale: Requiem", "price": "11.42", "region": "A", "data": "7/18", "status": "GOLD" },
  { "name": "A Plague Tale: Requiem - Windows", "price": "6.28", "region": "A", "data": "7/18", "status": "" },
  { "name": "A Tale For Anna", "price": "0.48", "region": "A", "data": "7/15", "status": "" },
  { "name": "Aliens: Fireteam Elite Into the Hive Edition", "price": "5.74", "region": "E", "data": "7/18", "status": "GOLD" },
  { "name": "Alone in the Dark", "price": "13.37", "region": "A", "data": "10/2", "status": "" },
  { "name": "Alone in the Dark - Digital Deluxe Edition", "price": "15.42", "region": "A", "data": "10/2", "status": "" },
  { "name": "Anode", "price": "0.07", "region": "A", "data": "7/18", "status": "" },
  { "name": "Atomic Heart - Gold Edition", "price": "39.99", "region": "A", "data": "7/18", "status": "GOLD" },
  { "name": "Awarded Platformer Bundle", "price": "0.63", "region": "A", "data": "12/3", "status": "" },
  { "name": "Backbeat", "price": "12.28", "region": "I", "data": "7/18", "status": "" },
  { "name": "Banner of the Maid", "price": "1.47", "region": "A", "data": "7/18", "status": "GOLD" },
  { "name": "Batora: Lost Haven", "price": "2.57", "region": "A", "data": "7/14", "status": "" },
  { "name": "BioShock 2 Remastered", "price": "1.09", "region": "T", "data": "7/18", "status": "GOLD" },
  { "name": "BioShock Infinite: The Complete Edition", "price": "1.75", "region": "T", "data": "7/18", "status": "GOLD" },
  { "name": "BioShock Remastered", "price": "1.75", "region": "T", "data": "7/18", "status": "GOLD" },
  { "name": "Bit Orchard: Animal Valley", "price": "0.15", "region": "A", "data": "7/18", "status": "" },
  { "name": "Blasphemous", "price": "0.34", "region": "A", "data": "7/14", "status": "" },
  { "name": "Blood Bowl 3 - Brutal Edition", "price": "15.99", "region": "A", "data": "7/13", "status": "" },
  { "name": "Borderlands: The Handsome Collection", "price": "2.48", "region": "T", "data": "7/18", "status": "GOLD" },
  { "name": "Bravery and Greed", "price": "2.29", "region": "A", "data": "7/14", "status": "" },
  { "name": "Cake Bash", "price": "0.49", "region": "A", "data": "7/18", "status": "" },
  { "name": "Call of Cthulhu", "price": "1.06", "region": "T", "data": "7/18", "status": "GOLD" },
  { "name": "Chef Life - AL FORNO EDITION", "price": "11.42", "region": "A", "data": "7/13", "status": "" },
  { "name": "ChronoBreach Ultra", "price": "0.21", "region": "A", "data": "7/15", "status": "" },
  { "name": "City Limits", "price": "0.24", "region": "A", "data": "7/21", "status": "" },
  { "name": "Clash - Zeno Edition", "price": "13.14", "region": "A", "data": "7/13", "status": "" },
  { "name": "Colorful Colore", "price": "0.13", "region": "A", "data": "7/18", "status": "" },
  { "name": "Crisis Wing", "price": "0.22", "region": "A", "data": "7/18", "status": "" },
  { "name": "Cyanide & Happiness - Freakpocalypse (Episode 1)", "price": "0.54", "region": "A", "data": "7/18", "status": "GOLD" },
  { "name": "DARKLAND 3", "price": "0.06", "region": "A", "data": "7/26", "status": "" },
  { "name": "DREAMERS", "price": "11.63", "region": "E", "data": "9/1/", "status": "" },
  { "name": "DREDGE - Digital Deluxe Edition", "price": "3.94", "region": "A", "data": "7/14", "status": "" },
  { "name": "Death's Gambit: Afterlife", "price": "0.70", "region": "A", "data": "7/18", "status": "GOLD" },
  { "name": "Doki Doki Literature Club Plus!", "price": "0.57", "region": "A", "data": "7/18", "status": "GOLD" },
  { "name": "Donut County", "price": "0.21", "region": "A", "data": "7/14", "status": "" },
  { "name": "Dou", "price": "0.06", "region": "A", "data": "7/12", "status": "" },
  { "name": "Dungeon Escape: Console Edition", "price": "0.11", "region": "A", "data": "7/18", "status": "" },
  { "name": "EA SPORTS™ FIFA 23 Standard Edition Xbox One", "price": "8.04", "region": "T", "data": "12/3", "status": "" },
  { "name": "EchoBlade", "price": "5.33", "region": "I", "data": "7/20", "status": "" },
  { "name": "Escape Dead Island", "price": "0.15", "region": "A", "data": "12/3", "status": "" },
  { "name": "Ethan: Meteor Hunter", "price": "0.08", "region": "A", "data": "7/18", "status": "" },
  { "name": "FRONT MISSION 1st: Remake", "price": "1.71", "region": "A", "data": "7/13", "status": "" },
  { "name": "Fantasy Dash", "price": "0.06", "region": "A", "data": "7/12", "status": "" },
  { "name": "Feudal Alloy", "price": "0.15", "region": "A", "data": "7/18", "status": "GOLD" },
  { "name": "Firegirl: Hack 'n Splash Rescue DX", "price": "1.78", "region": "T", "data": "7/18", "status": "GOLD" },
  { "name": "Flutter Bombs", "price": "0.16", "region": "A", "data": "7/18", "status": "" },
  { "name": "Football Manager 2023 Console", "price": "7.19", "region": "E", "data": "7/14", "status": "" },
  { "name": "Four Sided Fantasy", "price": "0.11", "region": "A", "data": "7/18", "status": "" },
  { "name": "Fueled Up", "price": "0.65", "region": "A", "data": "7/18", "status": "" },
  { "name": "FuzzBall", "price": "0.38", "region": "A", "data": "7/18", "status": "GOLD" },
  { "name": "GROW UP", "price": "0.15", "region": "A", "data": "7/18", "status": "GOLD" },
  { "name": "Garlic", "price": "0.65", "region": "A", "data": "7/29", "status": "" },
  { "name": "Genesis Alpha One Deluxe Edition", "price": "0.24", "region": "A", "data": "7/14", "status": "" },
  { "name": "Genetic Disaster", "price": "0.16", "region": "A", "data": "7/18", "status": "" },
  { "name": "Gloomhaven Gold Edition", "price": "12.94", "region": "E", "data": "9/18", "status": "" },
  { "name": "Gloomhaven Mercenaries Edition", "price": "10.32", "region": "E", "data": "9/18", "status": "" },
  { "name": "Golf With Your Friends", "price": "1.23", "region": "A", "data": "7/14", "status": "" },
  { "name": "Grand Theft Auto Online", "price": "3.81", "region": "A", "data": "7/18", "status": "GOLD" },
  { "name": "Grand Theft Auto V (Xbox One & Xbox Series X|S)", "price": "7.57", "region": "T", "data": "7/18", "status": "GOLD" },
  { "name": "Grand Theft Auto V: Premium Edition & Great White Shark C...", "price": "3.45", "region": "T", "data": "7/18", "status": "GOLD" },
  { "name": "Grand Theft Auto V: Premium Edition & Megalodon Shark Car...", "price": "5.78", "region": "T", "data": "7/18", "status": "GOLD" },
  { "name": "Grand Theft Auto V: Premium Edition & Whale Shark Card Bu...", "price": "3.98", "region": "T", "data": "7/18", "status": "GOLD" },
  { "name": "Graze Counter GM", "price": "2.47", "region": "A", "data": "7/18", "status": "GOLD" },
  { "name": "GreedFall - Gold Edition", "price": "3.27", "region": "T", "data": "7/18", "status": "GOLD" },
  { "name": "GreedFall - Gold Edition (Windows 10)", "price": "2.51", "region": "A", "data": "7/18", "status": "" },
  { "name": "Hardspace: Shipbreaker", "price": "7.28", "region": "T", "data": "7/18", "status": "GOLD" },
  { "name": "Hasbro Family Fun Pack", "price": "9.05", "region": "C", "data": "7/18", "status": "GOLD" },
  { "name": "Hatup", "price": "0.19", "region": "A", "data": "7/18", "status": "" },
  { "name": "Hell Let Loose", "price": "9.86", "region": "A", "data": "7/14", "status": "" },
  { "name": "Hindsight", "price": "0.53", "region": "A", "data": "7/14", "status": "" },
  { "name": "Hokko Life", "price": "1.37", "region": "A", "data": "7/14", "status": "" },
  { "name": "Hunt Ducks 4", "price": "0.06", "region": "A", "data": "7/19", "status": "" },
  { "name": "Hunting Simulator 2 Xbox One", "price": "0.65", "region": "A", "data": "7/13", "status": "" },
  { "name": "Hunting Simulator 2 Xbox Series X|S", "price": "0.54", "region": "A", "data": "7/13", "status": "" },
  { "name": "I Am Dead", "price": "0.54", "region": "A", "data": "7/14", "status": "" },
  { "name": "Insurgency: Sandstorm - Gold Edition", "price": "10.72", "region": "T", "data": "7/18", "status": "GOLD" },
  { "name": "Joy Ball Adventure", "price": "0.06", "region": "A", "data": "7/17", "status": "" },
  { "name": "Kentucky Route Zero: TV Edition", "price": "0.82", "region": "A", "data": "7/14", "status": "" },
  { "name": "Kerbal Space Program Enhanced Edition Complete", "price": "3.40", "region": "T", "data": "7/18", "status": "GOLD" },
  { "name": "Kung Fu Fighting", "price": "0.11", "region": "A", "data": "7/15", "status": "" },
  { "name": "Last Stop", "price": "0.55", "region": "A", "data": "7/14", "status": "" },
  { "name": "Lifeless Planet: Premier Edition", "price": "0.15", "region": "A", "data": "7/18", "status": "" },
  { "name": "Light & Dark Bundle", "price": "0.85", "region": "A", "data": "11/2", "status": "" },
  { "name": "Listeria Wars", "price": "0.24", "region": "A", "data": "7/17", "status": "" },
  { "name": "Little Bug", "price": "0.21", "region": "A", "data": "7/18", "status": "GOLD" },
  { "name": "Little Mage Adventure", "price": "0.06", "region": "A", "data": "7/22", "status": "" },
  { "name": "Livelock", "price": "0.18", "region": "A", "data": "7/13", "status": "" },
  { "name": "Lonesome Village", "price": "3.46", "region": "T", "data": "7/18", "status": "GOLD" },
  { "name": "MLB® The Show™ 23 Digital Deluxe Edition - Xbox One and Xbox Series X|S", "price": "22.95", "region": "T", "data": "7/13", "status": "" },
  { "name": "MLB® The Show™ 23 Xbox One", "price": "11.49", "region": "T", "data": "7/13", "status": "" },
  { "name": "MLB® The Show™ 23 Xbox Series X|S", "price": "14.22", "region": "T", "data": "7/13", "status": "" },
  { "name": "Madden NFL 19", "price": "28.42", "region": "C", "data": "12/3", "status": "" },
  { "name": "Madden NFL 22 Xbox One", "price": "14.66", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 22 Xbox Series X|S", "price": "17.06", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 23 Xbox One", "price": "19.50", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 23 Xbox Series X|S", "price": "22.85", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 24 Deluxe Edition Xbox Series X|S & Xbox One + Limited Time Bonus", "price": "60.33", "region": "A", "data": "7/23", "status": "" },
  { "name": "Mafia II: Definitive Edition", "price": "2.38", "region": "A", "data": "7/18", "status": "GOLD" },
  { "name": "Mafia III: Definitive Edition", "price": "2.38", "region": "A", "data": "7/18", "status": "GOLD" },
  { "name": "Marvel's Guardians of the Galaxy", "price": "5.74", "region": "T", "data": "7/13", "status": "" },
  { "name": "Meet Your Maker", "price": "7.71", "region": "A", "data": "7/13", "status": "" },
  { "name": "Meet Your Maker: Deluxe Edition", "price": "8.85", "region": "A", "data": "7/13", "status": "" },
  { "name": "Meg's Monster", "price": "0.65", "region": "A", "data": "7/18", "status": "" },
  { "name": "Memory Link", "price": "0.93", "region": "T", "data": "7/18", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.00", "region": "U", "data": "12/1", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.00", "region": "U", "data": "12/1", "status": "" },
  { "name": "Mokoko X", "price": "1.42", "region": "T", "data": "7/18", "status": "" },
  { "name": "Monster Sanctuary", "price": "1.03", "region": "A", "data": "7/14", "status": "" },
  { "name": "Monster Trampoline", "price": "1.33", "region": "T", "data": "7/18", "status": "" },
  { "name": "Moonglow Bay", "price": "0.89", "region": "A", "data": "7/18", "status": "" },
  { "name": "Moving Out", "price": "1.14", "region": "A", "data": "7/14", "status": "" },
  { "name": "Mr. Run and Jump", "price": "5.55", "region": "T", "data": "7/24", "status": "" },
  { "name": "Murder Diaries 3 - Santa's Trail of Blood", "price": "0.35", "region": "A", "data": "7/18", "status": "" },
  { "name": "Murder Miners", "price": "0.17", "region": "A", "data": "7/18", "status": "" },
  { "name": "Mushroom Wars 2", "price": "2.47", "region": "T", "data": "7/18", "status": "GOLD" },
  { "name": "My Time at Portia Deluxe Edition", "price": "1.07", "region": "A", "data": "7/14", "status": "" },
  { "name": "MyMaitê", "price": "0.13", "region": "A", "data": "7/18", "status": "" },
  { "name": "NARUTO TO BORUTO: SHINOBI STRIKER Ultimate Edition", "price": "29.44", "region": "C", "data": "7/14", "status": "" },
  { "name": "NBA 2K23 Digital Deluxe Edition", "price": "5.14", "region": "A", "data": "7/18", "status": "GOLD" },
  { "name": "Neon Abyss Deluxe Edition", "price": "0.46", "region": "A", "data": "7/14", "status": "" },
  { "name": "NeverAwake", "price": "1.16", "region": "A", "data": "7/13", "status": "" },
  { "name": "Neversong", "price": "0.24", "region": "A", "data": "7/18", "status": "GOLD" },
  { "name": "New Tales from the Borderlands: Deluxe Edition", "price": "11.47", "region": "T", "data": "7/18", "status": "GOLD" },
  { "name": "Newt One", "price": "0.11", "region": "A", "data": "7/18", "status": "" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.13", "region": "A", "data": "5/31", "status": "" },
  { "name": "Nirvana: Pilot Yume", "price": "0.15", "region": "A", "data": "7/18", "status": "" },
  { "name": "Nuclear Blaze", "price": "0.65", "region": "A", "data": "7/18", "status": "GOLD" },
  { "name": "OCTOPATH TRAVELER", "price": "6.13", "region": "T", "data": "7/13", "status": "" },
  { "name": "Oaken", "price": "0.87", "region": "A", "data": "7/20", "status": "" },
  { "name": "OlliOlli World Rad Edition", "price": "9.04", "region": "T", "data": "7/18", "status": "GOLD" },
  { "name": "Outbreak: Complete Collection", "price": "0.87", "region": "A", "data": "7/18", "status": "" },
  { "name": "Outbreak: Endless Nightmares", "price": "0.22", "region": "A", "data": "7/18", "status": "" },
  { "name": "Outbreak: Epidemic Definitive Edition", "price": "0.33", "region": "A", "data": "7/18", "status": "GOLD" },
  { "name": "Overcooked! 2 - Gourmet Edition", "price": "0.53", "region": "A", "data": "7/14", "status": "" },
  { "name": "Overcooked! All You Can Eat", "price": "3.03", "region": "A", "data": "7/14", "status": "" },
  { "name": "Paper Cut Mansion", "price": "0.70", "region": "A", "data": "7/18", "status": "GOLD" },
  { "name": "Promo Pack 2x1", "price": "0.46", "region": "A", "data": "7/18", "status": "" },
  { "name": "RISK", "price": "0.15", "region": "A", "data": "7/18", "status": "GOLD" },
  { "name": "RWBY: Arrowfell", "price": "1.06", "region": "A", "data": "7/18", "status": "GOLD" },
  { "name": "Rain World", "price": "1.16", "region": "A", "data": "7/11", "status": "" },
  { "name": "Red Dead Redemption 2: Ultimate Edition", "price": "7.69", "region": "T", "data": "7/18", "status": "GOLD" },
  { "name": "Remnant: From the Ashes", "price": "1.47", "region": "A", "data": "7/13", "status": "" },
  { "name": "Remnant: From the Ashes - Complete Edition", "price": "1.89", "region": "T", "data": "7/13", "status": "" },
  { "name": "Retro Tank Arcade", "price": "0.06", "region": "A", "data": "7/23", "status": "" },
  { "name": "Reverie: Sweet As Edition", "price": "6.79", "region": "I", "data": "7/13", "status": "" },
  { "name": "Robo Revenge Squad", "price": "1.01", "region": "T", "data": "7/18", "status": "GOLD" },
  { "name": "Robotry!", "price": "0.80", "region": "A", "data": "7/18", "status": "" },
  { "name": "Rogue Lords", "price": "0.65", "region": "A", "data": "7/13", "status": "" },
  { "name": "Roguebook Xbox One", "price": "0.68", "region": "A", "data": "7/13", "status": "" },
  { "name": "Roguebook Xbox Series X|S", "price": "0.82", "region": "A", "data": "7/13", "status": "" },
  { "name": "Russian Subway Dogs", "price": "2.67", "region": "A", "data": "7/13", "status": "" },
  { "name": "SCARF", "price": "0.43", "region": "A", "data": "7/13", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "4.87", "region": "A", "data": "12/3", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "6.51", "region": "A", "data": "1/1/", "status": "" },
  { "name": "Safari Pinball", "price": "0.14", "region": "A", "data": "7/22", "status": "" },
  { "name": "Sayonara Wild Hearts", "price": "0.43", "region": "A", "data": "7/14", "status": "" },
  { "name": "Sea of Thieves", "price": "5.74", "region": "E", "data": "7/13", "status": "" },
  { "name": "Sea of Thieves Deluxe Edition", "price": "7.19", "region": "E", "data": "7/13", "status": "" },
  { "name": "Session: Skate Sim", "price": "1.36", "region": "A", "data": "7/13", "status": "" },
  { "name": "Ship of Fools", "price": "2.80", "region": "A", "data": "7/14", "status": "" },
  { "name": "Sid Meier’s Civilization® VI Anthology", "price": "8.70", "region": "T", "data": "7/18", "status": "GOLD" },
  { "name": "Sid Meier’s Civilization® VI Platinum Edition", "price": "5.04", "region": "T", "data": "7/18", "status": "GOLD" },
  { "name": "Smart Moves Bundle", "price": "0.26", "region": "A", "data": "7/18", "status": "" },
  { "name": "Smile For Me", "price": "0.65", "region": "A", "data": "7/18", "status": "GOLD" },
  { "name": "SnowRunner - 2-Year Anniversary Edition", "price": "18.38", "region": "T", "data": "7/18", "status": "GOLD" },
  { "name": "Space Hulk: Tactics", "price": "0.99", "region": "A", "data": "7/18", "status": "GOLD" },
  { "name": "Sparkle Bundle", "price": "0.48", "region": "A", "data": "12/3", "status": "" },
  { "name": "Splash Cars", "price": "0.19", "region": "A", "data": "7/18", "status": "" },
  { "name": "Steelrising - Standard Edition", "price": "7.43", "region": "A", "data": "7/13", "status": "" },
  { "name": "Strategic Mind: Spectre of Communism", "price": "5.60", "region": "A", "data": "7/18", "status": "" },
  { "name": "Strong Moon", "price": "0.50", "region": "T", "data": "7/18", "status": "" },
  { "name": "Super Mega Baseball™ 4", "price": "23.46", "region": "A", "data": "7/18", "status": "" },
  { "name": "Super Mega Baseball™ 4 Ballpark Edition", "price": "27.73", "region": "A", "data": "7/18", "status": "" },
  { "name": "Super Night Riders", "price": "0.05", "region": "A", "data": "7/18", "status": "" },
  { "name": "Super Pixel Kid", "price": "0.06", "region": "A", "data": "7/17", "status": "" },
  { "name": "Sweet Witches", "price": "0.11", "region": "A", "data": "7/18", "status": "GOLD" },
  { "name": "Swim Out", "price": "0.08", "region": "A", "data": "7/18", "status": "" },
  { "name": "Sword of the Necromancer", "price": "0.20", "region": "A", "data": "7/18", "status": "GOLD" },
  { "name": "TT Isle of Man: Ride on the Edge 3", "price": "25.73", "region": "C", "data": "7/13", "status": "" },
  { "name": "Tennis World Tour 2 Ace Edition", "price": "3.43", "region": "A", "data": "7/13", "status": "" },
  { "name": "The Council - Complete Season", "price": "0.78", "region": "A", "data": "7/18", "status": "GOLD" },
  { "name": "The Crew® 2", "price": "0.95", "region": "A", "data": "7/13", "status": "" },
  { "name": "The Crew® 2 Gold Edition", "price": "1.71", "region": "A", "data": "7/20", "status": "" },
  { "name": "The Crew® 2 Special Edition", "price": "1.14", "region": "A", "data": "7/13", "status": "" },
  { "name": "The Escapists", "price": "0.15", "region": "A", "data": "7/14", "status": "" },
  { "name": "The Escapists 2 - Game of the Year Edition", "price": "0.33", "region": "A", "data": "7/14", "status": "" },
  { "name": "The Escapists: Supermax Edition", "price": "0.96", "region": "A", "data": "4/30", "status": "" },
  { "name": "The Jackbox Party Quadpack", "price": "2.14", "region": "A", "data": "12/3", "status": "" },
  { "name": "The Knight Witch", "price": "2.29", "region": "A", "data": "7/14", "status": "" },
  { "name": "The Last Hero of Nostalgaia", "price": "0.92", "region": "A", "data": "7/18", "status": "" },
  { "name": "The Lord of the Rings: Gollum™", "price": "18.74", "region": "T", "data": "7/13", "status": "" },
  { "name": "The Lost And The Wicked", "price": "0.43", "region": "A", "data": "7/15", "status": "" },
  { "name": "The Outer Worlds: Board-Approved Bundle", "price": "16.51", "region": "T", "data": "7/18", "status": "GOLD" },
  { "name": "The Pathless", "price": "5.74", "region": "E", "data": "7/14", "status": "" },
  { "name": "The Serpent Rogue", "price": "0.86", "region": "A", "data": "7/14", "status": "" },
  { "name": "The Sinking City – Necronomicon Edition", "price": "4.95", "region": "A", "data": "7/13", "status": "" },
  { "name": "The Survivalists", "price": "1.14", "region": "A", "data": "7/14", "status": "" },
  { "name": "Thymesia", "price": "3.83", "region": "A", "data": "7/14", "status": "" },
  { "name": "Togges", "price": "0.76", "region": "A", "data": "7/18", "status": "GOLD" },
  { "name": "Tom Clancy's Rainbow Six® Siege Operator Edition", "price": "13.71", "region": "A", "data": "7/18", "status": "GOLD" },
  { "name": "Tom Clancy's The Division", "price": "0.69", "region": "T", "data": "7/18", "status": "GOLD" },
  { "name": "Torchlight II", "price": "0.65", "region": "T", "data": "7/13", "status": "" },
  { "name": "Torchlight III", "price": "1.26", "region": "A", "data": "7/13", "status": "" },
  { "name": "Train Life - Orient-Express Train Edition", "price": "0.87", "region": "A", "data": "7/13", "status": "" },
  { "name": "Transport Fever 2: Console Edition - Deluxe", "price": "16.40", "region": "T", "data": "7/13", "status": "" },
  { "name": "Ultimate Chicken Horse", "price": "0.28", "region": "A", "data": "7/18", "status": "GOLD" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "0.51", "region": "A", "data": "12/3", "status": "" },
  { "name": "Vampire: The Masquerade - Swansong Xbox One", "price": "8.38", "region": "A", "data": "7/13", "status": "" },
  { "name": "Vampire: The Masquerade - Swansong Xbox Series X|S", "price": "8.38", "region": "A", "data": "7/13", "status": "" },
  { "name": "Vermintide - Digital Value Pack", "price": "1.52", "region": "A", "data": "3/7/", "status": "" },
  { "name": "Vision Soft Reset", "price": "0.43", "region": "A", "data": "7/15", "status": "" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "2.43", "region": "A", "data": "8/31", "status": "" },
  { "name": "WRC Generations - The FIA WRC Official Game", "price": "7.62", "region": "A", "data": "7/13", "status": "" },
  { "name": "Warhammer 40,000: Boltgun", "price": "12.25", "region": "T", "data": "7/18", "status": "GOLD" },
  { "name": "Warhammer Age of Sigmar: Storm Ground", "price": "2.17", "region": "T", "data": "7/18", "status": "GOLD" },
  { "name": "Werewolf: The Apocalypse - Earthblood Champion of Gaia Xb...", "price": "0.33", "region": "A", "data": "7/13", "status": "" },
  { "name": "Werewolf: The Apocalypse - Earthblood Champion of Gaia Xbox Series X|S", "price": "0.33", "region": "A", "data": "7/13", "status": "" },
  { "name": "Where the Water Tastes Like Wine: Xbox Edition", "price": "0.22", "region": "A", "data": "7/18", "status": "" },
  { "name": "Worms Battlegrounds + Worms W.M.D", "price": "0.48", "region": "A", "data": "7/14", "status": "" },
  { "name": "Worms Rumble", "price": "0.16", "region": "A", "data": "7/14", "status": "" },
  { "name": "You Suck at Parking", "price": "3.31", "region": "T", "data": "7/18", "status": "GOLD" }
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
