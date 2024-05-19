const arg_input = document.querySelector('.arg-input');
const arg_output = document.querySelector('.arg-output_res');
const arg_output2 = document.querySelector('.arg-output_res2');
const list = document.querySelector('.list')

const tr_input = document.querySelector('.tr-input');
const tr_output = document.querySelector('.tr-output_res');
const tr_output2 = document.querySelector('.tr-output_res2');

const showBtn = document.querySelector('.show')


showBtn.addEventListener('click', () => {
  showBtn.classList.contains('active') ?
    hiddenMenu() : showMenu()
})


let percent;

const arr = [
  { "name": "15in1 Solitaire", "price": "0.04", "flag": "🇦🇷", "date": "22.05", "status": "" },
  { "name": "39 Days to Mars", "price": "1.04", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "8-Ball Pocket", "price": "0.05", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "80's OVERDRIVE", "price": "0.04", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "8Doors: Arum's Afterlife Adventure", "price": "0.06", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "8Floor Bundle 4 in 1", "price": "0.12", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "A Building Full of Cats", "price": "0.04", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "A Castle Full of Cats", "price": "0.05", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "A Fold Apart", "price": "0.44", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "A Gummy's Life", "price": "0.11", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "A Hat in Time", "price": "0.19", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "A Little to the Left", "price": "0.87", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "A Memoir Blue", "price": "0.09", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "A Way Out", "price": "0.12", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "APICO", "price": "0.25", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Abomi Nation", "price": "0.18", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Adore", "price": "1.35", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Adrian's Tale", "price": "0.21", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Adventures of Chris", "price": "0.11", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "AeternoBlade II", "price": "0.05", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "AeternoBlade", "price": "0.04", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "After Wave: Downfall", "price": "2.75", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Airport Simulator 2019", "price": "0.11", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Alba: A Wildlife Adventure", "price": "0.11", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Alchemist Simulator", "price": "0.09", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Alchemy Garden", "price": "0.16", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "All-Star Fruit Racing", "price": "0.05", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "An Airport for Aliens Currently Run by Dogs", "price": "0.18", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Animal Doctor", "price": "0.11", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Animal Shelter Simulator", "price": "0.11", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Anime Studio Story", "price": "0.19", "flag": "🇦🇷", "date": "30.05", "status": "" },
  { "name": "Ankora: Lost Days", "price": "0.12", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Aquarist", "price": "0.11", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Ara Fell: Enhanced Edition", "price": "0.11", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Archvale", "price": "0.13", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Arietta of Spirits", "price": "0.09", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Arise: A simple story", "price": "0.34", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Armello - Complete Edition", "price": "0.17", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Armello", "price": "0.05", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Armikrog", "price": "0.22", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "As Dusk Falls", "price": "1.11", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Aspire - Ina's Tale", "price": "0.06", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Assassin's Creed Chronicles – Trilogy", "price": "0.08", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Assassin's Creed IV Black Flag", "price": "0.67", "flag": "🇹🇷", "date": "28.05", "status": "" },
  { "name": "Assassin's Creed Triple Pack: Black Flag, Unity, Syndicate", "price": "2.19", "flag": "🇹🇷", "date": "28.05", "status": "" },
  { "name": "Assassin's Creed Unity", "price": "0.26", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Assassin's Creed® Bundle: Assassin's Creed® Valhalla, Ass...", "price": "39.68", "flag": "🇹🇷", "date": "28.05", "status": "" },
  { "name": "Assassin's Creed® Chronicles: China", "price": "0.07", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Assassin's Creed® Chronicles: India", "price": "0.04", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Assassin's Creed® Chronicles: Russia", "price": "0.04", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Assassin's Creed® III Remastered", "price": "0.24", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Assassin's Creed® Odyssey - DELUXE EDITION", "price": "3.25", "flag": "🇹🇷", "date": "28.05", "status": "" },
  { "name": "Assassin's Creed® Odyssey - GOLD EDITION", "price": "3.72", "flag": "🇹🇷", "date": "28.05", "status": "" },
  { "name": "Assassin's Creed® Odyssey - ULTIMATE EDITION", "price": "22.94", "flag": "🇹🇷", "date": "28.05", "status": "" },
  { "name": "Assassin's Creed® Odyssey", "price": "2.79", "flag": "🇹🇷", "date": "28.05", "status": "" },
  { "name": "Assassin's Creed® Origins - DELUXE EDITION", "price": "3.14", "flag": "🇹🇷", "date": "28.05", "status": "" },
  { "name": "Assassin's Creed® Origins - GOLD EDITION", "price": "19.84", "flag": "🇹🇷", "date": "28.05", "status": "" },
  { "name": "Assassin's Creed® Origins", "price": "2.79", "flag": "🇹🇷", "date": "28.05", "status": "" },
  { "name": "Assassin's Creed® Rogue", "price": "0.15", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Assassin's Creed® Syndicate Gold Edition", "price": "0.94", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Assassin's Creed® Syndicate", "price": "0.48", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Assassin's Creed® The Ezio Collection", "price": "1.63", "flag": "🇹🇷", "date": "28.05", "status": "" },
  { "name": "Assassin's Creed® Valhalla Complete Edition", "price": "6.2", "flag": "🇹🇷", "date": "28.05", "status": "" },
  { "name": "Assassin's Creed® Valhalla Ragnarök Edition", "price": "14.88", "flag": "🇹🇷", "date": "28.05", "status": "" },
  { "name": "Assassin's Creed® Valhalla", "price": "3.72", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "Assassin’s Creed Mirage & Assassin's Creed Valhalla Bundle", "price": "14.11", "flag": "🇹🇷", "date": "28.05", "status": "" },
  { "name": "Assassin’s Creed Mirage Master Assassin Edition", "price": "24.8", "flag": "🇹🇷", "date": "28.05", "status": "" },
  { "name": "Assassin’s Creed® Rogue Remastered", "price": "0.26", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Assassin’s Creed® Valhalla + Watch Dogs®: Legion Bundle", "price": "6.06", "flag": "🇹🇷", "date": "28.05", "status": "" },
  { "name": "Astria Ascending", "price": "0.29", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Away : The Survival Series", "price": "0.44", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Away: Journey to the Unexpected", "price": "0.04", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Awesome Zombie Games Bundle", "price": "0.03", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "BEB: Super Mega Bundle", "price": "0.05", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Baby Storm", "price": "0.18", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Babylon 2055 Pinball", "price": "0.01", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Back 4 Blood", "price": "0.62", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Backpack Twins", "price": "1.42", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Bang-On Balls: Chronicles", "price": "2.7", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Bat Boy", "price": "0.86", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Battle Kid: Fortress of Peril", "price": "0.09", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Battlefield 4™ Premium Edition", "price": "0.21", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Battlefield V Definitive Edition", "price": "0.66", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Battlefield™ 1 Revolution", "price": "0.21", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Battlefield™ 2042 Elite Edition Xbox One & Xbox Series X|S", "price": "5.5", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Battlefield™ 2042 Xbox One & Xbox Series X|S", "price": "1.2", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Battlefield™ 2042 Xbox One", "price": "1.2", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Battlefield™ Hardline Ultimate Edition", "price": "0.21", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Beach Buggy Racing 2: Hot Wheels™ Edition", "price": "0.11", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Beach Buggy Racing 2: Island Adventure", "price": "0.09", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Beach Buggy Racing", "price": "0.04", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Beacon Pines", "price": "0.18", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Beat Me!", "price": "0.06", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Before I Forget", "price": "0.07", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Binarystar Infinity", "price": "0.04", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Biped", "price": "0.08", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Bish Bash Bots", "price": "0.27", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Blasphemous + Blasphemous 2 Bundle", "price": "8.04", "flag": "🇹🇷", "date": "28.05", "status": "" },
  { "name": "Blasphemous 2", "price": "9.28", "flag": "🇹🇷", "date": "28.05", "status": "" },
  { "name": "Blazing Beaks", "price": "0.07", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Bleeding Edge", "price": "0.26", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "Blossom Tales II: The Minotaur Prince", "price": "0.18", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Blue Fire", "price": "2.52", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "Boiling Bolt", "price": "0.03", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Bombslinger", "price": "0.03", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Boomerang Fu", "price": "0.16", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Boxville", "price": "0.12", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Braid, Anniversary Edition", "price": "1.6", "flag": "🇦🇷", "date": "30.05", "status": "" },
  { "name": "Brawlout Deluxe Edition", "price": "0.15", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Brawlout Standard Edition", "price": "0.1", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Bridge Constructor Bundle", "price": "0.05", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Bridge Constructor Portal", "price": "0.02", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Bridge Constructor", "price": "0.01", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Bright Side: Riddles and Puzzles", "price": "0.04", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Broken Age", "price": "0.06", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Broken Universe - Tower Defense", "price": "0.04", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Bug Fables: The Everlasting Sapling", "price": "0.22", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Bugsnax", "price": "0.16", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Burnout™ Paradise Remastered", "price": "0.12", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Cake Bash", "price": "0.14", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Calico", "price": "0.15", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Call of Heroes: Tower Defense", "price": "1.29", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Call of Toys: Tower Defense!", "price": "0.71", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Cannon Brawl", "price": "0.1", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Cardpocalypse", "price": "0.55", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "Carto", "price": "0.11", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Cassiodora", "price": "0.51", "flag": "🇹🇷", "date": "28.05", "status": "" },
  { "name": "Castle on the Coast", "price": "0.12", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Catie in MeowmeowLand", "price": "0.04", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Catlateral Damage: Remeowstered", "price": "0.09", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Caveman Warriors", "price": "0.02", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Chess Ultra", "price": "0.05", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Chickens Madness", "price": "0.04", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Children of Zodiarcs", "price": "0.06", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Chinatown Detective Agency", "price": "0.18", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Chip and Charge", "price": "0.07", "flag": "🇦🇷", "date": "29.05", "status": "" },
  { "name": "ChromaGun", "price": "0.07", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Chronicles of Magic: Divided Kingdom (Xbox Version)", "price": "1.0", "flag": "🇦🇷", "date": "19.05", "status": "" },
  { "name": "Circa Infinity", "price": "0.05", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Cities: Skylines - Mayor's Edition", "price": "0.75", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Clan N", "price": "0.11", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Clumsy Rush", "price": "0.04", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Conga Master", "price": "0.03", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Cook, Serve, Delicious! 2!!", "price": "0.29", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Cook, Serve, Delicious! 2/3 Bundle!!", "price": "0.55", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Cook, Serve, Delicious! 3?!", "price": "0.44", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Coral Island", "price": "2.25", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "CorpoNation: The Sorting Process", "price": "0.21", "flag": "🇦🇷", "date": "24.05", "status": "" },
  { "name": "CounterAttack", "price": "0.53", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Cozy Grove", "price": "0.16", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Crackdown 3", "price": "1.33", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "Crazy Athletics - Summer Sports and Games", "price": "0.14", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Crazy Strike Bowling EX", "price": "0.03", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Creaks", "price": "2.03", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Crimson Dragon", "price": "0.05", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Crown Trick", "price": "0.28", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Cuccchi", "price": "0.04", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Cursed to Golf", "price": "0.18", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "CyberTD", "price": "0.25", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Cyberpunk 2077", "price": "10.0", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Cyberpunk 2077: Ultimate Edition", "price": "28.81", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "D4: Dark Dreams Don't Die", "price": "0.05", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "DINOSAURS: Mission Dino Camp", "price": "0.28", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "DIRT 5 Year One Edition", "price": "1.29", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "DREAMERS", "price": "1.6", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Dakar Desert Rally", "price": "3.0", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Death Squared", "price": "0.05", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Deep Diving Adventures", "price": "0.04", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Defend the Rook - Supporter Edition", "price": "1.05", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Deiland: Pocket Planet", "price": "0.14", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Demon Turf", "price": "1.17", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "Deployment", "price": "0.15", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Dimension Drive", "price": "0.02", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Discolored", "price": "0.06", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Discovery Tour: Viking Age", "price": "1.51", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Disneyland Adventures", "price": "0.58", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "Dodgeball Academia", "price": "0.18", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Donut County", "price": "0.07", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Doom & Destine Worlds - Ultimate Supporter Edition", "price": "0.3", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Doom & Destiny Worlds", "price": "0.18", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Double Cross", "price": "2.02", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "Double Kick Heroes", "price": "0.14", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Double Puzzled", "price": "2.7", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Doughlings Bundle", "price": "0.05", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Doughlings: Invasion", "price": "0.04", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "DragoDino", "price": "0.02", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Dragon's Lair Trilogy", "price": "0.18", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Draw Rider Remake", "price": "0.05", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Droid Trivia", "price": "0.44", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Dungeon Rushers: Crawler RPG", "price": "0.03", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Dying Light", "price": "1.88", "flag": "🇦🇷", "date": "24.05", "status": "" },
  { "name": "Eagle Island Twist", "price": "0.59", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Educational Games for Kids (Cross-Buy)", "price": "0.16", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Embr", "price": "0.07", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Etherborn", "price": "0.11", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Evil Dead: The Game", "price": "2.5", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Faeria", "price": "0.44", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "Falling Out", "price": "0.07", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Farlands Journey", "price": "0.07", "flag": "🇦🇷", "date": "24.05", "status": "" },
  { "name": "Farm Together", "price": "0.18", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Feather", "price": "0.06", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Figment 2: Creed Valley", "price": "0.11", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Figment: Journey Into the Mind", "price": "0.27", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Firegirl: Hack 'n Splash Rescue DX", "price": "0.32", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Flewfie's Adventure", "price": "0.09", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Flynn: Son of Crimson", "price": "0.14", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Football, Tactics & Glory", "price": "0.18", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Forager", "price": "0.12", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Freshly Frosted", "price": "0.12", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Frog Detective: The Entire Mystery", "price": "0.25", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Full Metal Furies", "price": "0.04", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Furwind", "price": "0.04", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "GRID Legends", "price": "0.8", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "GRID Legends: Deluxe Edition", "price": "1.06", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Galaxy of Pen & Paper +1 Edition", "price": "0.06", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Garden Simulator", "price": "0.24", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Gears of War 4", "price": "0.39", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "Gears of War Ultimate Edition Deluxe Version", "price": "1.3", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Gem Smashers", "price": "0.02", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Genesis Alpha One Deluxe Edition", "price": "0.08", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Genetic Disaster", "price": "0.05", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Geometric Sniper Z", "price": "0.05", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Ghost Song", "price": "0.9", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Ghostbusters: Spirits Unleashed", "price": "1.13", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "Ghostbusters: The Video Game Remastered", "price": "0.21", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Ghostrunner 2 Brutal Edition", "price": "5.5", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Go Mecha Ball", "price": "1.4", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "Golazo! 2", "price": "0.3", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Golf Peaks", "price": "0.22", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Golf With Your Friends", "price": "1.33", "flag": "🇹🇷", "date": "28.05", "status": "" },
  { "name": "Gord - Deluxe Edition", "price": "6.9", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Gorogoa", "price": "0.06", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Gotham Knights", "price": "2.0", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Grapple Dog", "price": "0.07", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Gravity Oddity", "price": "1.06", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Graze Counter GM", "price": "0.81", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Guazu: The Rescue", "price": "0.1", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Guilt Battle Arena", "price": "0.02", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Harmony's Odyssey", "price": "0.2", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Harvest Life", "price": "0.35", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Hellblade: Senua's Sacrifice", "price": "0.27", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "Hello Engineer", "price": "0.16", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Hidden Cats in London", "price": "0.04", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Hidden Through Time 2", "price": "0.69", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Hidden Through Time", "price": "0.07", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Hindsight", "price": "0.13", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Hogwarts Legacy Xbox One Version", "price": "12.38", "flag": "🇹🇷", "date": "28.05", "status": "" },
  { "name": "Hogwarts Legacy Xbox Series X|S Version", "price": "13.93", "flag": "🇹🇷", "date": "28.05", "status": "" },
  { "name": "Horse Club Adventures 2: Hazelwood Stories", "price": "0.36", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Horse Club Adventures", "price": "0.27", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Hundred Days - Winemaking Simulator", "price": "0.27", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "HyperDot", "price": "0.14", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "I Am Your President", "price": "0.28", "flag": "🇦🇷", "date": "23.05", "status": "" },
  { "name": "I, Zombie", "price": "0.01", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Ice Cream Surfer", "price": "0.03", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Ikenfell", "price": "0.11", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Indie Gems Bundle - Explosions Edition", "price": "0.11", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Indigo 7 Quest of love", "price": "0.05", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Indoor Kickball", "price": "0.16", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Inside My Radio", "price": "0.05", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Instant Sports Plus", "price": "0.6", "flag": "🇹🇷", "date": "28.05", "status": "" },
  { "name": "Into the Pit", "price": "0.08", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Iris and the Giant", "price": "0.66", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "It's Kooky", "price": "0.04", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "It's Quiz Time", "price": "0.1", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "JYDGE", "price": "0.07", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Jelly Brawl", "price": "0.07", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Jet Kave Adventure", "price": "0.2", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Jetboard Joust", "price": "0.09", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Journey of the Broken Circle", "price": "0.28", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Jump King", "price": "0.09", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Just Shapes & Beats", "price": "0.25", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Kaiju Wars", "price": "0.14", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Kao the Kangaroo A Well Good Bundle", "price": "1.25", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "KarmaZoo", "price": "0.62", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Keep Talking and Nobody Explodes", "price": "0.13", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Kill The Bad Guy", "price": "0.03", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Killer Instinct: Anniversary Edition", "price": "6.0", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Killing Floor 2", "price": "0.03", "flag": "🇦🇷", "date": "20.05", "status": "" },
  { "name": "Kinect Mega Bundle: 4 in 1", "price": "0.12", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "King Leo", "price": "0.47", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Knights and Magic Bundle", "price": "2.7", "flag": "🇦🇷", "date": "19.05", "status": "" },
  { "name": "Koa and the Five Pirates of Mara", "price": "0.21", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "LEGO® Brawls", "price": "1.03", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "LEGO® Bricktales", "price": "0.27", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "LEGO® Builder's Journey", "price": "0.44", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "League of Enthusiastic Losers", "price": "0.1", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Legendary Eleven", "price": "0.06", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Let's Cook Together", "price": "0.06", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Lethis - Path of Progress", "price": "0.2", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Like No Other: The Legend Of The Twin Books", "price": "0.53", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Lil Gator Game", "price": "0.24", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Little Bug", "price": "0.07", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Little Mouse's Encyclopedia", "price": "0.04", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Long Ago: A Puzzle Tale", "price": "0.19", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Lords of Exile", "price": "1.62", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Lost Eidolons", "price": "2.91", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Lost Ember", "price": "0.21", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Lost in Random™", "price": "0.22", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Lovers in a Dangerous Spacetime", "price": "0.09", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Lumini", "price": "0.04", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "MASSIVE CHALICE", "price": "0.07", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "MEGALAN 11", "price": "0.09", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Machinarium & Creaks Bundle", "price": "3.12", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Machinarium", "price": "1.62", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Make Way", "price": "0.75", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Marble It Up! Ultra", "price": "0.32", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Max: The Curse of Brotherhood", "price": "0.3", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "Midnight Fight Express", "price": "0.21", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Mimi the Cat: Mimi's Scratcher", "price": "0.07", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Mineko's Night Market", "price": "1.05", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Momonga Pinball Adventures", "price": "0.01", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Monster Boy and the Cursed Kingdom", "price": "0.88", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Monster Energy Supercross - Special Edition", "price": "0.37", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Monster Energy Supercross - The Official Videogame", "price": "0.25", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Monster Train", "price": "0.16", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Monster Trampoline", "price": "0.44", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Moonlighter: Complete Edition", "price": "0.34", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Moonscars", "price": "1.05", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Moonshine Inc. : Supporter Edition", "price": "1.31", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Mortal Kombat™ 1 Premium Edition", "price": "32.5", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Motorbike Racing Bundle", "price": "0.5", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "MouseCraft", "price": "0.05", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Munchkin: Quacked Quest", "price": "0.16", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "My Aunt is a Witch", "price": "0.07", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Mythic Ocean", "price": "0.53", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Need for Speed Rivals", "price": "0.1", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Need for Speed™ Heat Deluxe Edition", "price": "0.56", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Need for Speed™ Heat", "price": "0.47", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Need for Speed™ Hot Pursuit Remastered", "price": "0.62", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Need for Speed™ Payback", "price": "0.15", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Need for Speed™ Unbound Palace Edition", "price": "3.28", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Need for Speed™ Unbound", "price": "1.69", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Need for Speed™", "price": "0.09", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "NeuroVoider", "price": "0.03", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "New Super Lucky's Tale", "price": "0.16", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Newt One", "price": "0.05", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Next Space Rebels", "price": "0.14", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Niche - a genetics survival game", "price": "0.14", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Nine Parchments", "price": "0.06", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "No Longer Home", "price": "0.11", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Nocturnal", "price": "0.89", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Not Not - A Brain Buster", "price": "0.07", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Nova Lands", "price": "0.27", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Oaken", "price": "0.18", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Oceanhorn - Monster of Uncharted Seas", "price": "0.05", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Oceanhorn 2 - Knights of the Lost Realm", "price": "1.57", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Octodad: Dadliest Catch", "price": "0.05", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Old Man's Journey", "price": "0.09", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "One Step From Eden", "price": "0.14", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "One True Hero", "price": "0.47", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Operation: Tango", "price": "0.18", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Ori and the Blind Forest: Definitive Edition", "price": "2.75", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Out of Space: Couch Edition", "price": "0.04", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Outbreak Platinum Collection", "price": "0.42", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Outbreak Silver Collection", "price": "0.34", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Outbreak The Fedora Files What Lydia Knows", "price": "0.28", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Outbreak: Lost Hope", "price": "0.02", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Outbreak: Lydia Daniels Collection", "price": "0.57", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Outbreak: The New Nightmare Definitive Edition", "price": "0.07", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Overcooked! 2", "price": "1.54", "flag": "🇹🇷", "date": "28.05", "status": "" },
  { "name": "Overcooked! All You Can Eat", "price": "4.33", "flag": "🇹🇷", "date": "28.05", "status": "" },
  { "name": "Overruled!", "price": "0.04", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "PHOGS!", "price": "0.16", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Paintball 3 - Candy Match Factory", "price": "0.12", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Pang Adventures", "price": "0.02", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Pankapu", "price": "0.03", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Penarium", "price": "0.02", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Pillars of Eternity: Complete Edition", "price": "2.02", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "Planet Coaster: Console Edition", "price": "0.31", "flag": "🇦🇷", "date": "20.05", "status": "" },
  { "name": "Planet Coaster: Premium Edition", "price": "2.19", "flag": "🇦🇷", "date": "20.05", "status": "" },
  { "name": "Planet of Lana", "price": "1.15", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Plants vs. Zombies Garden Warfare", "price": "0.09", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Plants vs. Zombies™ Garden Warfare 2", "price": "0.09", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Plants vs. Zombies™ Garden Warfare 2: Deluxe Edition", "price": "0.16", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Please Fix The Road", "price": "0.14", "flag": "🇦🇷", "date": "29.05", "status": "" },
  { "name": "Pool Nation FX", "price": "0.05", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Princess Farmer", "price": "0.11", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Project Blue", "price": "0.44", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Project Wingman", "price": "0.22", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Protodroid DeLTA", "price": "0.9", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Pure Chess Grandmaster Edition", "price": "0.05", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Pure Pool", "price": "0.04", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Pushy and Pully in Blockland", "price": "0.09", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "PuzzlePet - Feed Your Cat", "price": "0.07", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Q-YO Blaster", "price": "0.02", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Quantic Pinball", "price": "0.01", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Quantum Break", "price": "4.09", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "Quest Hunter", "price": "0.16", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Raging Justice", "price": "0.09", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Railbound", "price": "0.16", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Railbreak: The Big Break Collection", "price": "0.97", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Rain World", "price": "0.36", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Rain on Your Parade + Levels and Features DLC!", "price": "0.29", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Rain on Your Parade", "price": "0.16", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Rainbow Billy: The Curse of the Leviathan", "price": "0.09", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Read Only Memories: NEURODIVER", "price": "1.19", "flag": "🇹🇷", "date": "24.05", "status": "" },
  { "name": "Redout 2", "price": "1.56", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Return to Monkey Island", "price": "1.33", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Riptide GP: Renegade", "price": "0.09", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Road to Guangdong", "price": "0.07", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Robotry!", "price": "0.17", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Rogue Legacy 2", "price": "0.27", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Rogue Legacy", "price": "0.02", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Roundguard", "price": "0.14", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Rubber Bandits", "price": "0.27", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Rubberduck Wave Racer", "price": "0.43", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Russian Subway Dogs", "price": "0.58", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Ryse: Legendary Edition", "price": "1.79", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "SRX: The Game", "price": "0.62", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "STAR WARS™ Battlefront™ II", "price": "0.28", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "STAR WARS™ Battlefront™ II: Celebration Edition", "price": "0.67", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "STAR WARS™: Squadrons", "price": "0.62", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Sapu", "price": "0.1", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "ScourgeBringer", "price": "0.09", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "ScreamRide", "price": "0.09", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "ScreamRide", "price": "0.85", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "Screencheat", "price": "0.04", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Shadowblade Odyssey", "price": "0.02", "flag": "🇦🇷", "date": "20.05", "status": "" },
  { "name": "Shalnor Legends: Sacred Lands", "price": "0.04", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Shape of the World", "price": "0.05", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "She Wants Me Dead", "price": "0.04", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Sherlock Purr 2", "price": "0.12", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Ship of Fools - Aquapocalypse Edition", "price": "12.5", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Skate 3", "price": "0.05", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Skábma - Snowfall", "price": "0.84", "flag": "🇹🇷", "date": "28.05", "status": "" },
  { "name": "Slay The Spire", "price": "0.16", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Sleepin' Deeply", "price": "0.02", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Slipstream", "price": "0.62", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "Smash Boats Waterlogged Edition", "price": "0.43", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Smile For Me", "price": "0.17", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Snooker 19 Gold Edition", "price": "0.26", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Snooker 19", "price": "0.22", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Sokobalien", "price": "0.07", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Somerville", "price": "0.98", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "SongPop Party", "price": "1.47", "flag": "🇦🇷", "date": "03.06", "status": "" },
  { "name": "Sophstar", "price": "0.12", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Souldiers", "price": "0.2", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Space Crew: Legendary Edition", "price": "0.45", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Space Otter Charlie", "price": "0.11", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Spacelines from the Far Out", "price": "0.08", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Spectrolite - Speed Life", "price": "0.1", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Spirit Hunters: Infinite Horde", "price": "0.12", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Spirit Of The Island", "price": "2.16", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Splasher", "price": "0.04", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Squad 51 vs. the Flying Saucers", "price": "0.23", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Star Crossed", "price": "0.06", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Startup Company Console Edition", "price": "0.19", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "State of Decay: Year-One Survival Edition", "price": "1.55", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "Steam Tactics", "price": "0.09", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "SteamWorld Build", "price": "1.86", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "SteamWorld Dig 2", "price": "0.12", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "SteamWorld Dig", "price": "0.06", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Strange Horticulture", "price": "0.13", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Stray Gods: The Roleplaying Musical", "price": "2.1", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Streets of Rage 4", "price": "0.2", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Suicide Squad: Kill the Justice League - Digital Deluxe Edition", "price": "16.87", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Summer Sports Games - 4K Edition", "price": "0.35", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Summer in Mara + Koa and the Five Pirates of Mara", "price": "0.27", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Summer in Mara", "price": "0.16", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Summertime Madness (Xbox Series X|S)", "price": "0.13", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Sunset Overdrive Deluxe Edition", "price": "1.72", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "Sunset Overdrive", "price": "0.38", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "Super Impossible Road", "price": "0.18", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Super Sami Roll", "price": "0.11", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Super Slam Dunk Touchdown", "price": "0.08", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Super Soccer Blast: America vs Europe", "price": "0.09", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Super Space Serpent SE", "price": "0.04", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Super Sports Blast", "price": "0.22", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Super Tennis Blast", "price": "0.13", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Super Toy Cars Collection", "price": "0.13", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Super Toy Cars Offroad", "price": "0.09", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Super Trunko Go", "price": "0.07", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Supraland", "price": "0.18", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Supraland: Six Inches Under", "price": "1.05", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Surviving Mars - Digital Deluxe Edition", "price": "0.12", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Sweet Witches", "price": "0.04", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "TY the Tasmanian Tiger HD", "price": "0.59", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "TY the Tasmanian Tiger™ 2: Bush Rescue™ HD", "price": "0.59", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Tamarin®", "price": "0.8", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Tanks, But No Tanks", "price": "0.07", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Teacup", "price": "0.12", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Teardown: Deluxe Edition", "price": "0.61", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Teenage Mutant Ninja Turtles: Shredder's Revenge", "price": "0.3", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Temtem - Deluxe Edition", "price": "2.25", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Temtem", "price": "1.65", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "The Artful Escape", "price": "0.18", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "The Bard's Tale ARPG : Remastered and Resnarkled", "price": "0.2", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "The Bard's Tale IV: Director's Cut", "price": "0.14", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "The Bard's Tale Trilogy", "price": "0.19", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "The Drone Racing League Simulator", "price": "0.09", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "The Dungeon Of Naheulbeuk: The Amulet Of Chaos - Chicken Edition", "price": "0.29", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "The Escapists & The Escapists: The Walking Dead", "price": "0.08", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "The Escapists 2 - Game of the Year Edition", "price": "0.11", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "The First Tree", "price": "0.04", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "The Forgotten City", "price": "0.24", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "The Game of Life 2 - Deluxe Life Bundle", "price": "0.32", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "The Last Door - Complete Edition", "price": "0.05", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "The Lord of the Rings: Adventure Card Game - Definitive Edition", "price": "0.16", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "The Sojourn", "price": "0.1", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "The Survivalists - Deluxe Edition", "price": "0.14", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "The Wild at Heart", "price": "0.22", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "The Witcher 3: Wild Hunt – Complete Edition", "price": "4.64", "flag": "🇹🇷", "date": "28.05", "status": "" },
  { "name": "They Always Run", "price": "0.55", "flag": "🇹🇷", "date": "28.05", "status": "" },
  { "name": "Thronebreaker: The Witcher Tales", "price": "1.3", "flag": "🇹🇷", "date": "28.05", "status": "" },
  { "name": "Thymesia", "price": "1.87", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Timberman VS", "price": "0.02", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Timberman: The Big Adventure", "price": "0.06", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Tin Hearts", "price": "0.21", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Tinykin", "price": "0.18", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Titanfall® 2", "price": "0.16", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Titanfall® 2: Ultimate Edition", "price": "0.2", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "To Leave", "price": "0.11", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Togges", "price": "0.16", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Tony Stewart's All-American Racing", "price": "0.32", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Tony Stewart's Sprint Car Racing", "price": "0.27", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Tools Up - Ultimate Edition", "price": "0.3", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Tools Up!", "price": "0.07", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Torment: Tides of Numenera", "price": "0.41", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Totally Accurate Battle Simulator", "price": "0.25", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Tracks - The Train Set Game", "price": "0.21", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Tracks - The Train Set Game: Toybox Bundle", "price": "0.23", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Trailmakers", "price": "0.21", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Train Station Renovation", "price": "0.09", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Transcripted", "price": "0.02", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Trash Sailors", "price": "0.09", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Trepang2", "price": "11.16", "flag": "🇹🇷", "date": "28.05", "status": "" },
  { "name": "Tricky Towers", "price": "0.07", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Trine 4: The Nightmare Prince", "price": "0.13", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Trine: Ultimate Collection", "price": "0.47", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Trophy", "price": "0.09", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Trüberbrook", "price": "0.05", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Tunche", "price": "0.18", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Turbo Golf Racing (Game Preview)", "price": "0.12", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Tux and Fanny", "price": "0.09", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Two & One Hundred Ways Bundle", "price": "1.06", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Tyd wag vir Niemand", "price": "0.02", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "UNSIGHTED", "price": "0.14", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Ultimate Chicken Horse", "price": "0.71", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "Under Leaves", "price": "0.04", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Unpacking", "price": "0.18", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Unravel Two", "price": "0.16", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Unravel Yarny Bundle", "price": "0.25", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Unruly Heroes", "price": "0.12", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Venba", "price": "0.2", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Vernal Edge", "price": "0.26", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Violett Remastered", "price": "0.02", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Virgo Versus The Zodiac", "price": "1.64", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Virtual Families 3: Our Country Home", "price": "0.45", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "Virtual Families Cook Off: Chapter 1 Let's Go Flippin'", "price": "0.09", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Void Bastards", "price": "1.35", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Void Bastards: DeLUXe Bundle", "price": "1.5", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Vostok 2061", "price": "0.12", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "WW2 Rebuilder", "price": "0.32", "flag": "🇦🇷", "date": "25.05", "status": "" },
  { "name": "Walden, a game", "price": "0.09", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Wandersong", "price": "0.09", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Warp Drive", "price": "0.18", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Wasteland 2: Director's Cut", "price": "0.1", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Wasteland Remastered", "price": "0.19", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "We Are The Dwarves", "price": "0.22", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "We Happy Few Digital Deluxe", "price": "1.7", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "We Happy Few", "price": "0.4", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Wild Card Football - Deluxe Edition", "price": "4.4", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Wind Peaks", "price": "0.53", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Winter Games 2023", "price": "2.0", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Winter Sports Games - 4K Edition", "price": "0.35", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Wintermoor Tactics Club", "price": "0.44", "flag": "🇹🇷", "date": "21.05", "status": "" },
  { "name": "Witchcrafty (Xbox Series X|S)", "price": "0.09", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Wizard of Legend", "price": "0.06", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Woodle Tree 2: Deluxe+", "price": "0.02", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Work from Home", "price": "1.24", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "World War Z", "price": "2.5", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Worldless", "price": "0.27", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Worms Battlegrounds + Worms W.M.D", "price": "0.16", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Worms Rumble - Digital Deluxe Edition", "price": "0.08", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Worms W.M.D", "price": "1.54", "flag": "🇹🇷", "date": "28.05", "status": "" },
  { "name": "X-Force Genesis", "price": "0.03", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "X-Force Under Attack", "price": "0.04", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Xenon Racer", "price": "0.05", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Xenon Valkyrie+", "price": "0.01", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Yet Another Zombie Defense HD", "price": "0.01", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Yooka-Laylee", "price": "0.05", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Yuko and the Akuma Menace", "price": "0.14", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Zeus Quest - The Rebirth of Earth", "price": "0.09", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "Zombie Pinball", "price": "0.01", "flag": "🇦🇷", "date": "28.05", "status": "" },
  { "name": "Zoo Tycoon", "price": "0.21", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "emoji Kart Racer", "price": "0.35", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "inbento", "price": "0.22", "flag": "🇦🇷", "date": "21.05", "status": "" },
  { "name": "reky", "price": "0.04", "flag": "🇦🇷", "date": "21.05", "status": "" }
]

let usd = 105;

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

function resultArg() {
  const value = Number(arg_input.value) + .1
  const newValue = value + (value * resPercent(value)) / 100
  const res = newValue * usd
  const finishRes = res + resSwitсhArg(newValue)
  arg_output.innerHTML = floor(finishRes.toFixed())
  arg_output2.innerHTML = floor(finishRes.toFixed()) + 50
}

function resultTr() {
  const value = Number(tr_input.value) + .1
  const res = value * usd
  const finishRes = res + resSwitсhTr(tr_input.value)
  tr_output.innerHTML = floor(finishRes.toFixed())
  tr_output2.innerHTML = floor(finishRes.toFixed()) + 50
}



function resSwitсhArg(value) {
  let a;

  if (value <= 1) {
    a = 70
  } else if (value > 1 && value <= 5) {
    a = 80
  } else if (value > 5 && value <= 10) {
    a = 90
  } else if (value > 10 && value <= 15) {
    a = 100
  } else if (value > 15 && value <= 20) {
    a = 100

  } else if (value > 20 && value <= 25) {
    a = 50

  } else if (value > 25) {
    a = 50

  }
  return a
}

function resPercent(percent) {
  let a;

  if (percent <= 1) {
    a = 120
  } else if (percent > 1 && percent <= 5) {
    a = 85
  } else if (percent > 5 && percent <= 10) {

    a = 55
  } else if (percent > 10 && percent <= 15) {

    a = 50
  } else if (percent > 15 && percent <= 20) {

    a = 50
  } else if (percent > 20 && percent <= 25) {

    a = 50
  } else if (percent > 25) {

    a = 40
  }
  return a
}

function resSwitсhTr(value) {
  let a;

  if (value <= 1) {
    a = 80
  } else if (value > 1 && value <= 5) {
    a = 80
  } else if (value > 5 && value <= 10) {
    a = 100
  } else if (value > 10 && value <= 15) {
    a = 100
  } else if (value > 15 && value <= 20) {
    a = 100
  } else if (value > 20 && value <= 25) {
    a = 50
  } else if (value > 25) {
    a = 50
  }
  return a
}


arg_input.oninput = resultArg

tr_input.oninput = resultTr


sortArr.map((a) => {
  const item = document.createElement('li')
  // const arrData = a.data.split('/').reverse('').join('/')
  let res;
  let flag;
  if (a.flag == '🇦🇷') {
    res = resultFromListArg(a.price)
    flag = "🇦🇷"
  } else if (a.flag == '🇹🇷') {
    res = resultFromListTr(a.price)
    flag = "🇹🇷"
  } else {
    res = 'Уточнить стоимость в ЛС'
  }

  item.innerHTML = `${a.name}:${res}&#8381 ${flag} ${a.status}`
  // до ${a.date}
  list.append(item)
})

function resultFromListArg(price) {
  const value = Number(price) + .1
  const newPrice = value + (value * resPercent(value)) / 100
  const res = newPrice * usd + 50
  const finishRes = res + resSwitсhArg(newPrice)

  return floor(finishRes.toFixed())
}

function resultFromListTr(price) {
  const value = Number(price) + .1
  const res = value * usd + 50
  const finishRes = res + resSwitсhTr(value)

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



