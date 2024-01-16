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

let usd = 105;
let percent;

const arr = [
  { "name": "39 Days to Mars", "price": "1.11", "flag": "🇹🇷", "date": "23.01", "status": "" },
  { "name": "60 Parsecs!", "price": "0.44", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "60 Seconds! Reatomized", "price": "0.44", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "6180 the moon", "price": "0.02", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "7th Sector", "price": "0.14", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "A Fold Apart", "price": "0.44", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "A Space for the Unbound", "price": "1.21", "flag": "🇹🇷", "date": "23.01", "status": "" },
  { "name": "ATV Drift & Tricks Definitive Edition", "price": "0.31", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Adore", "price": "1.57", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Aery - Calm Mind", "price": "0.11", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Aery - Heaven & Hell", "price": "0.07", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Aeterna Noctis", "price": "0.16", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "AeternoBlade II", "price": "0.07", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "AeternoBlade", "price": "0.04", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Agatha Christie Collection", "price": "0.94", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Agatha Knife", "price": "0.04", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Age of Empires: Definitive Collection", "price": "0.7", "flag": "🇦🇷", "date": "06.10", "status": " GOLD" },
  { "name": "Airborne Bundle", "price": "0.57", "flag": "🇦🇷", "date": "16.02", "status": " GOLD" },
  { "name": "Airborne Kingdom", "price": "1.55", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Alchemist Simulator", "price": "0.12", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "All-Star Fruit Racing", "price": "0.05", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Alone in the Dark - Digital Deluxe Edition", "price": "5.06", "flag": "🇦🇷", "date": "17.01", "status": "" },
  { "name": "Alone in the Dark", "price": "4.39", "flag": "🇦🇷", "date": "17.01", "status": "" },
  { "name": "Amazing Princess Sarah", "price": "0.22", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "An Airport for Aliens Currently Run by Dogs", "price": "0.18", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Anima: Gate of Memories - Arcane Edition", "price": "0.07", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Animal Shelter Simulator", "price": "0.13", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Anodyne", "price": "0.02", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Another World - 20th Anniversary Edition", "price": "0.02", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Anthology of Fear", "price": "0.07", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Aquarist", "price": "0.11", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Arcade Paradise | High Score Edition", "price": "0.4", "flag": "🇦🇷", "date": "01.07", "status": " GOLD" },
  { "name": "Arcade Paradise", "price": "0.2", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Arise: A simple story", "price": "0.34", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Arkham Horror: Mother’s Embrace", "price": "0.12", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Armello - Complete Edition", "price": "0.17", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Armello", "price": "0.05", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "As Far As The Eye", "price": "0.22", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Aspire - Ina's Tale", "price": "0.06", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Assassin's Creed Antiquity Pack", "price": "4.0", "flag": "🇦🇷", "date": "16.09", "status": " GOLD" },
  { "name": "Assassin's Creed® Odyssey - DELUXE EDITION", "price": "3.0", "flag": "🇦🇷", "date": "16.09", "status": " GOLD" },
  { "name": "Assassin's Creed® Odyssey - ULTIMATE EDITION", "price": "4.5", "flag": "🇦🇷", "date": "16.09", "status": " GOLD" },
  { "name": "Assassin's Creed® Origins - DELUXE EDITION", "price": "2.75", "flag": "🇦🇷", "date": "01.06", "status": " GOLD" },
  { "name": "Assassin's Creed® Origins - GOLD EDITION", "price": "3.75", "flag": "🇦🇷", "date": "01.06", "status": " GOLD" },
  { "name": "Assassin's Creed® Valhalla Deluxe Edition", "price": "5.0", "flag": "🇦🇷", "date": "16.07", "status": " GOLD" },
  { "name": "Assassin's Creed® Valhalla Ragnarök Edition", "price": "7.0", "flag": "🇦🇷", "date": "16.07", "status": " GOLD" },
  { "name": "Assassin’s Creed® Valhalla + Immortals Fenyx Rising™ Bundle", "price": "6.5", "flag": "🇦🇷", "date": "16.07", "status": " GOLD" },
  { "name": "Astalon: Tears of the Earth", "price": "0.18", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Asterix & Obelix XXL3: The Crystal Menhir", "price": "0.62", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Asterix & Obelix XXL: Romastered", "price": "0.62", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Asterix & Obelix XXXL : The Ram of Hibernia", "price": "1.24", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Atomic Heart - Gold Edition", "price": "15.0", "flag": "🇦🇷", "date": "16.08", "status": " GOLD" },
  { "name": "Atomic Heart - Premium Edition", "price": "17.0", "flag": "🇦🇷", "date": "23.01", "status": " GOLD" },
  { "name": "Atomicrops: Reap What You Bundle", "price": "0.08", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Awarded Platformer Bundle", "price": "0.21", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "Away : The Survival Series", "price": "0.44", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "BATTLETECH Mercenary Collection", "price": "1.29", "flag": "🇦🇷", "date": "13.06", "status": " GOLD" },
  { "name": "BEB: Super Mega Bundle", "price": "0.05", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "BORIS THE ROCKET", "price": "0.09", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "BROKEN MIND", "price": "0.56", "flag": "🇹🇷", "date": "23.01", "status": "" },
  { "name": "Baby Storm", "price": "0.18", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Backfirewall_", "price": "0.18", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Backpack Twins", "price": "1.42", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Bad Dream: Coma", "price": "0.04", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Banner Saga 3", "price": "0.06", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Barista Simulator", "price": "0.25", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Bassmaster® Fishing 2022", "price": "1.25", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Bassmaster® Fishing 2022: 2022 Bassmaster Classic®", "price": "1.72", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Bassmaster® Fishing 2022: Deluxe Edition", "price": "1.22", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Bassmaster® Fishing 2022: Super Deluxe Edition", "price": "0.67", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Battle Axe", "price": "0.13", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Battle Brothers", "price": "0.25", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Battle Kid: Fortress of Peril", "price": "0.09", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Battlestar Galactica Deadlock™", "price": "0.07", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Beat Me!", "price": "0.06", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Before We Leave", "price": "0.62", "flag": "🇦🇷", "date": "17.01", "status": "" },
  { "name": "Beyond a Steel Sky", "price": "0.12", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Big Moonstone Pack -- 5,500", "price": "3.6", "flag": "🇦🇷", "date": "01.09", "status": " GOLD" },
  { "name": "Biped", "price": "0.08", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Black Legend", "price": "0.89", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Black Skylands (Game Preview)", "price": "0.21", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Blacksad: Under the Skin", "price": "0.09", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Blade of Darkness", "price": "0.13", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Blightbound", "price": "0.14", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "BloodRayne 2: ReVamped", "price": "0.25", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "BloodRayne: ReVamped", "price": "0.25", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Bloodwash", "price": "0.09", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Bloody Zombies", "price": "0.03", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Bloomyth", "price": "0.06", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Blue Fire", "price": "0.62", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Boom Ball for Kinect", "price": "0.02", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Boxville", "price": "0.12", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Braveland Trilogy", "price": "0.27", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Breakers Collection", "price": "1.12", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Bright Memory: Infinite Platinum Edition", "price": "0.28", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "British Horror Bundle", "price": "0.35", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Broforce", "price": "0.05", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Broken Lines", "price": "0.07", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Broken Pieces", "price": "0.31", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Bug Academy", "price": "0.03", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Bug Fables: The Everlasting Sapling", "price": "0.22", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Builder Flipper bundle", "price": "0.61", "flag": "🇦🇷", "date": "01.01", "status": " GOLD" },
  { "name": "Builder Simulator", "price": "0.36", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Bus Simulator 21", "price": "5.25", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "CATAN® - Console Edition Deluxe", "price": "0.93", "flag": "🇹🇷", "date": "30.01", "status": "" },
  { "name": "CATAN® - Console Edition", "price": "0.19", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "CUBERS: ARENA", "price": "0.08", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Cafe Owner Simulator", "price": "2.76", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Cake Bash", "price": "0.14", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Call of Toys: Tower Defense!", "price": "1.07", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Call of the Wild: The Angler™ - Deluxe Edition", "price": "0.64", "flag": "🇦🇷", "date": "01.09", "status": " GOLD" },
  { "name": "Can't Drive This", "price": "0.23", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Candleman Definitive Edition", "price": "0.09", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Car Demolition Clicker", "price": "0.03", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Car Detailing Simulator", "price": "0.17", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Car Mechanic Simulator 2021", "price": "0.35", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Car Mechanic Simulator Classic", "price": "0.09", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Carnivores: Dinosaur Hunt", "price": "0.19", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Cassette Beasts", "price": "0.27", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Cassette Beasts: Deluxe Edition", "price": "0.37", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Castle Renovator", "price": "0.1", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Cat Quest II", "price": "0.07", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Catlateral Damage: Remeowstered", "price": "0.09", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Cavity Busters", "price": "0.16", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Chasm: The Rift", "price": "0.18", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Children of Morta: Complete Edition", "price": "0.16", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Chivalry 2 Special Edition", "price": "0.71", "flag": "🇦🇷", "date": "01.10", "status": " GOLD" },
  { "name": "Chivalry 2", "price": "0.29", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "ChromaGun", "price": "0.07", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Cities: Skylines - Mayor's Edition", "price": "0.75", "flag": "🇦🇷", "date": "01.04", "status": " GOLD" },
  { "name": "Cities: Skylines - Premium Edition 2", "price": "1.0", "flag": "🇦🇷", "date": "01.04", "status": " GOLD" },
  { "name": "Clan N", "price": "0.11", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Clone Drone in the Danger Zone", "price": "0.12", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Coffee Talk", "price": "0.12", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Coffin Dodgers", "price": "0.08", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Color Symphony 2", "price": "0.01", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Commander ’85", "price": "0.05", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Conan Exiles - Complete Edition October 2021", "price": "2.3", "flag": "🇦🇷", "date": "16.08", "status": " GOLD" },
  { "name": "Conan Exiles - Isle of Siptah Edition", "price": "0.99", "flag": "🇦🇷", "date": "16.08", "status": " GOLD" },
  { "name": "Construction Simulator", "price": "2.27", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Cook, Serve, Delicious! 2!!", "price": "0.29", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Cook, Serve, Delicious! 2/3 Bundle!!", "price": "0.55", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Cook, Serve, Delicious! 3?!", "price": "0.44", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "CounterAttack", "price": "0.6", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Crashlands", "price": "0.19", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Crazy Strike Bowling EX", "price": "0.03", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Creaks", "price": "0.94", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Crusader Kings III: Royal Edition", "price": "1.07", "flag": "🇦🇷", "date": "01.02", "status": " GOLD" },
  { "name": "Cruz Brothers", "price": "0.22", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Cult of the Lamb", "price": "1.31", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Curious Cases", "price": "0.05", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Cursed to Golf", "price": "0.18", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Cyber Tank", "price": "0.08", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "CyberTD", "price": "0.28", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Cynthia: Hidden in the Moonshadow - Complete Edition", "price": "0.35", "flag": "🇦🇷", "date": "18.01", "status": "" },
  { "name": "Cynthia: Hidden in the Moonshadow", "price": "0.22", "flag": "🇦🇷", "date": "18.01", "status": "" },
  { "name": "DARQ Ultimate Edition", "price": "0.22", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "DEATHLOOP Deluxe Edition", "price": "17.16", "flag": "🇹🇷", "date": "30.12", "status": " GOLD" },
  { "name": "DEEEER Simulator: Your Average Everyday Deer Game", "price": "0.21", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "DEMON'S TILT", "price": "0.14", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "DIRT 5 Year One Edition", "price": "1.29", "flag": "🇦🇷", "date": "23.01", "status": " GOLD" },
  { "name": "DOOM Eternal Deluxe Edition", "price": "15.84", "flag": "🇹🇷", "date": "01.10", "status": " GOLD" },
  { "name": "DOOM Eternal: The Ancient Gods - Part One", "price": "5.61", "flag": "🇹🇷", "date": "23.01", "status": "" },
  { "name": "DOOM Eternal: The Ancient Gods - Part Two", "price": "5.61", "flag": "🇹🇷", "date": "23.01", "status": "" },
  { "name": "DOOM Eternal: Year One Pass", "price": "8.46", "flag": "🇹🇷", "date": "23.01", "status": "" },
  { "name": "DOOM Slayers Collection", "price": "3.56", "flag": "🇹🇷", "date": "13.06", "status": " GOLD" },
  { "name": "DUCATI - 90th Anniversary", "price": "0.12", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Dakar Desert Rally - Deluxe Edition", "price": "0.43", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Dakar Desert Rally", "price": "0.43", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Darkest Dungeon®: Ancestral Edition", "price": "0.4", "flag": "🇦🇷", "date": "01.02", "status": " GOLD" },
  { "name": "Daymare: 1998", "price": "0.09", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Dead Cells: Medley of Pain Bundle", "price": "0.57", "flag": "🇦🇷", "date": "16.09", "status": " GOLD" },
  { "name": "Dead Cells: Return to Castlevania Bundle", "price": "0.45", "flag": "🇦🇷", "date": "16.09", "status": " GOLD" },
  { "name": "Dead by Daylight - Gold Edition", "price": "6.5", "flag": "🇦🇷", "date": "01.06", "status": " GOLD" },
  { "name": "Deadliest Catch: The Game", "price": "0.18", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Death Squared", "price": "0.04", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Death's Door [Xbox]", "price": "0.12", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Death's Gambit: Afterlife", "price": "0.21", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Decay - The Mare", "price": "0.09", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Decay Collection", "price": "0.13", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Decay", "price": "0.09", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Deceive Inc.", "price": "0.18", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Deep Diving Adventures", "price": "0.07", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Deep Rock Galactic - Deluxe Edition", "price": "0.57", "flag": "🇦🇷", "date": "23.01", "status": " GOLD" },
  { "name": "Deep Rock Galactic - Ultimate Edition", "price": "0.71", "flag": "🇦🇷", "date": "23.01", "status": " GOLD" },
  { "name": "Demolish & Build Classic", "price": "0.08", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Demolish & Build", "price": "0.11", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Demon's Tier+", "price": "0.05", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Demoniaca: Everlasting Night", "price": "0.11", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Dimension Drive", "price": "0.02", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Dinobreak", "price": "0.21", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Disney Dreamlight Valley - Gold Edition", "price": "12.0", "flag": "🇦🇷", "date": "01.09", "status": " GOLD" },
  { "name": "Disney Dreamlight Valley: A Rift in Time", "price": "0.54", "flag": "🇦🇷", "date": "01.09", "status": " GOLD" },
  { "name": "Doki Doki Literature Club Plus!", "price": "0.2", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Don't Be Afraid", "price": "0.09", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Doom & Destine Worlds - Ultimate Supporter Edition", "price": "0.3", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Doom & Destiny Worlds", "price": "0.18", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Doom and Destiny", "price": "0.06", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Door Kickers: Action Squad", "price": "0.04", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Dou", "price": "0.02", "flag": "🇦🇷", "date": "25.01", "status": "" },
  { "name": "Double Cross", "price": "0.07", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Doug Hates His Job", "price": "0.03", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Doughlings Bundle", "price": "0.05", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Doughlings: Invasion", "price": "0.04", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Dovetail Games Euro Fishing", "price": "0.05", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Dragon Prana", "price": "0.16", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Dread Nautical", "price": "0.12", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Drill Deal - Oil Tycoon", "price": "0.11", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Droid Trivia", "price": "0.44", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Dungeons 4 - Digital Deluxe Edition", "price": "15.75", "flag": "🇦🇷", "date": "07.02", "status": " GOLD" },
  { "name": "EA SPORTS FC™ 24 Standard Edition Xbox One & Xbox Series X|S", "price": "12.25", "flag": "🇦🇷", "date": "22.01", "status": "" },
  { "name": "EA SPORTS FC™ 24 Standard Edition Xbox One & Xbox Series X|S", "price": "9.19", "flag": "🇦🇷", "date": "22.01", "status": "" },
  { "name": "EA SPORTS FC™ 24 Ultimate Edition Xbox One & Xbox Series X|S", "price": "17.5", "flag": "🇦🇷", "date": "22.01", "status": "" },
  { "name": "EARTH'S DAWN", "price": "0.06", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "EVERSPACE™ 2", "price": "2.88", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "EVERSPACE™", "price": "0.13", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "El Paso, Elsewhere", "price": "0.28", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Electrician Simulator", "price": "0.28", "flag": "🇦🇷", "date": "26.01", "status": "" },
  { "name": "Elemental War 2", "price": "0.21", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Enclave HD", "price": "1.42", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Escape Dead Island", "price": "0.05", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "Escape First 2", "price": "0.05", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Escape First 3 Multiplayer", "price": "0.06", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Escape First", "price": "0.05", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Escape Game - FORT BOYARD 2022", "price": "0.27", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Escape Game Fort Boyard", "price": "0.07", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Euro Fishing: Ultimate Edition", "price": "0.11", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Euro Fishing: Urban Edition", "price": "0.06", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "European Expansion + Oceania Expansion + Seasonal Decorative Pack", "price": "2.47", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "European Expansion + Oceania Expansion", "price": "2.02", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Even the Ocean", "price": "0.11", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Everhood: Eternity Edition", "price": "0.9", "flag": "🇹🇷", "date": "23.01", "status": "" },
  { "name": "Evil Dead: The Game - Game of the Year Edition", "price": "3.5", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Evil Dead: The Game", "price": "0.27", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "F1® Manager 2023 Deluxe Edition", "price": "14.52", "flag": "🇹🇷", "date": "16.10", "status": " GOLD" },
  { "name": "FLASHOUT 3", "price": "2.06", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "FROGUN", "price": "0.16", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Faeria", "price": "0.09", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Fall of Porcupine", "price": "0.89", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Fallout 4: Game of the Year Edition (PC)", "price": "7.52", "flag": "🇹🇷", "date": "12.03", "status": " GOLD" },
  { "name": "Fallout 4: Game of the Year Edition", "price": "7.52", "flag": "🇹🇷", "date": "12.03", "status": " GOLD" },
  { "name": "Fallout 76: Atlantic City - Boardwalk Paradise Deluxe Edition", "price": "12.0", "flag": "🇦🇷", "date": "30.12", "status": " GOLD" },
  { "name": "Fantasy General II: Invasion", "price": "0.25", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Far Cry® 6 Deluxe Edition", "price": "8.0", "flag": "🇦🇷", "date": "16.06", "status": " GOLD" },
  { "name": "Far Cry® 6 Gold Edition", "price": "8.0", "flag": "🇦🇷", "date": "16.06", "status": " GOLD" },
  { "name": "Far Cry®5 Gold Edition", "price": "3.3", "flag": "🇦🇷", "date": "01.07", "status": " GOLD" },
  { "name": "Farm Bundle", "price": "0.57", "flag": "🇦🇷", "date": "01.01", "status": " GOLD" },
  { "name": "Farm Manager 2022", "price": "0.17", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Farm Pets Bundle", "price": "0.86", "flag": "🇦🇷", "date": "01.01", "status": " GOLD" },
  { "name": "Farming Simulator 22 - Platinum Edition", "price": "8.0", "flag": "🇦🇷", "date": "16.05", "status": " GOLD" },
  { "name": "Farming Simulator 22 - Premium Edition", "price": "10.0", "flag": "🇦🇷", "date": "16.05", "status": " GOLD" },
  { "name": "Farming Simulator 22 - YEAR 1 Bundle", "price": "8.0", "flag": "🇦🇷", "date": "16.05", "status": " GOLD" },
  { "name": "Feather", "price": "0.06", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Fell Seal: Arbiter's Mark", "price": "0.13", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Fight'N Rage", "price": "0.65", "flag": "🇹🇷", "date": "23.01", "status": "" },
  { "name": "Figment 2: Creed Valley", "price": "0.18", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Figment: Journey Into the Mind", "price": "0.27", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Filthy Animals | Heist Simulator", "price": "0.18", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Final Vendetta", "price": "0.89", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Finding the Soul Orb", "price": "0.07", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Fishing Adventure", "price": "0.04", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Fishing Sim World: Bass Pro Shops Edition", "price": "0.97", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Fishing Sim World®: Pro Tour", "price": "0.08", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Fishing: North Atlantic Enhanced Edition", "price": "0.34", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Fishing: North Atlantic", "price": "0.24", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Five Dates", "price": "0.14", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Flailing Limbs Bundle", "price": "0.25", "flag": "🇦🇷", "date": "01.08", "status": " GOLD" },
  { "name": "Flying Soldiers", "price": "0.22", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Forager", "price": "0.12", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Fort Boyard", "price": "0.08", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Fort Triumph", "price": "0.12", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Forza Horizon 4 Expansions Bundle", "price": "2.81", "flag": "🇦🇷", "date": "03.10", "status": " GOLD" },
  { "name": "Forza Horizon 5 PLUS Hot Wheels Bundle", "price": "10.8", "flag": "🇦🇷", "date": "30.12", "status": " GOLD" },
  { "name": "Fran Bow", "price": "0.89", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Frank and Drake", "price": "0.9", "flag": "🇹🇷", "date": "23.01", "status": "" },
  { "name": "Freshly Frosted", "price": "0.12", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Frightence", "price": "0.04", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Frog Detective: The Entire Mystery", "price": "0.25", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "From Space", "price": "0.75", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Frostpunk: Complete Collection", "price": "0.64", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Fuga: Melodies of Steel 2 - Deluxe Edition", "price": "8.0", "flag": "🇦🇷", "date": "16.05", "status": " GOLD" },
  { "name": "Fuga: Melodies of Steel 2 - Ultimate Edition", "price": "8.55", "flag": "🇦🇷", "date": "16.05", "status": " GOLD" },
  { "name": "Full Metal Furies", "price": "0.04", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Furi", "price": "0.1", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Fusion Paradox (Xbox Series X|S)", "price": "0.11", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "GRIME", "price": "0.36", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Gallic Wars: Battle Simulator", "price": "0.02", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Garden Bundle", "price": "0.64", "flag": "🇦🇷", "date": "01.01", "status": " GOLD" },
  { "name": "Garden Simulator", "price": "0.24", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Garfield Kart Furious Racing", "price": "0.09", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Gear.Club Unlimited 2 - Ultimate Edition", "price": "0.11", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Gears of War 4 and Halo 5: Guardians Bundle", "price": "0.4", "flag": "🇦🇷", "date": "31.01", "status": " GOLD" },
  { "name": "Gears of War Ultimate Edition Deluxe Version", "price": "1.3", "flag": "🇦🇷", "date": "01.06", "status": " GOLD" },
  { "name": "Generation Zero ® - Base Warfare Starter Bundle", "price": "1.1", "flag": "🇦🇷", "date": "01.06", "status": " GOLD" },
  { "name": "Generation Zero ® - Ultimate Bundle", "price": "2.5", "flag": "🇦🇷", "date": "01.06", "status": " GOLD" },
  { "name": "Generation Zero® - Resistance Bundle", "price": "1.14", "flag": "🇦🇷", "date": "01.06", "status": " GOLD" },
  { "name": "Genesis Alpha One Deluxe Edition", "price": "0.08", "flag": "🇦🇷", "date": "17.01", "status": "" },
  { "name": "Genetic Disaster", "price": "0.05", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Ghostbusters: The Video Game Remastered", "price": "0.21", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Ghostwire: Tokyo Deluxe Edition", "price": "20.46", "flag": "🇹🇷", "date": "30.12", "status": " GOLD" },
  { "name": "Gloomhaven Gold Edition", "price": "5.5", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Goat Simulator 3 - Digital Downgrade Edition", "price": "2.0", "flag": "🇦🇷", "date": "01.06", "status": " GOLD" },
  { "name": "Goat Simulator: The GOATY", "price": "0.3", "flag": "🇦🇷", "date": "01.03", "status": " GOLD" },
  { "name": "Goat Simulator: Waste Of Space Bundle", "price": "0.14", "flag": "🇦🇷", "date": "01.03", "status": " GOLD" },
  { "name": "Going Under", "price": "0.28", "flag": "🇦🇷", "date": "17.01", "status": "" },
  { "name": "Golf Club: Wasteland", "price": "0.04", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Golf With Your Friends - Ultimate Edition", "price": "35.61", "flag": "🇹🇷", "date": "16.07", "status": " GOLD" },
  { "name": "Grapple Dog", "price": "0.09", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Gravity Oddity", "price": "1.06", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Graze Counter GM", "price": "0.81", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Guards", "price": "0.02", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Guilt Battle Arena", "price": "0.02", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Guilty Gear -Strive- Daredevil Edition", "price": "7.09", "flag": "🇦🇷", "date": "01.09", "status": " GOLD" },
  { "name": "HITMAN 3 Access Pass: HITMAN 2 Standard (DISC)", "price": "1.43", "flag": "🇦🇷", "date": "01.02", "status": " GOLD" },
  { "name": "HITMAN World of Assasination Upgrade Pack", "price": "7.0", "flag": "🇦🇷", "date": "01.02", "status": " GOLD" },
  { "name": "HITMAN World of Assassination Deluxe Pack", "price": "5.0", "flag": "🇦🇷", "date": "17.01", "status": " GOLD" },
  { "name": "HUMANKIND™ - Heritage Edition", "price": "11.5", "flag": "🇦🇷", "date": "16.08", "status": " GOLD" },
  { "name": "Halloween Pinball", "price": "0.03", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Halo 5: Guardians – Digital Deluxe Edition", "price": "6.5", "flag": "🇦🇷", "date": "01.06", "status": " GOLD" },
  { "name": "Halo Wars 2: Complete Edition", "price": "26.4", "flag": "🇹🇷", "date": "04.04", "status": " GOLD" },
  { "name": "Harmony's Odyssey", "price": "0.2", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Harmony: The Fall of Reverie", "price": "1.33", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Haunted Halloween '86", "price": "0.09", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Heart&Slash", "price": "0.05", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Heaven Dust", "price": "0.06", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Heavy Burden", "price": "0.07", "flag": "🇦🇷", "date": "14.12", "status": "" },
  { "name": "Hell Let Loose - Deluxe Edition", "price": "30.86", "flag": "🇹🇷", "date": "01.01", "status": " GOLD" },
  { "name": "Hello Neighbor 2 Deluxe Edition", "price": "5.5", "flag": "🇦🇷", "date": "16.12", "status": " GOLD" },
  { "name": "Hi-Fi RUSH Deluxe Edition", "price": "15.84", "flag": "🇹🇷", "date": "30.12", "status": " GOLD" },
  { "name": "Hidden Cats in London", "price": "0.04", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Hindsight 20/20 - Wrath of the Raakshasa", "price": "0.07", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Historical Trilogy", "price": "0.18", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Hitchhiker", "price": "0.09", "flag": "🇦🇷", "date": "22.01", "status": "" },
  { "name": "Howl", "price": "2.38", "flag": "🇦🇷", "date": "23.01", "status": " GOLD" },
  { "name": "Huge Moonstone Pack -- 14,500", "price": "9.0", "flag": "🇦🇷", "date": "01.09", "status": " GOLD" },
  { "name": "Hundred Days - Winemaking Simulator", "price": "0.35", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "HyperDot", "price": "0.14", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Hypnospace Outlaw & Slayers X: Terminal Aftermath: Vengance of the Slayer Bundle", "price": "0.48", "flag": "🇦 🇷", "date": "01.06", "status": " GOLD" },
  { "name": "I, AI (Xbox Series X|S)", "price": "0.09", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "INSIDE", "price": "0.56", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Ikkarus and the Prince of Sin", "price": "3.1", "flag": "🇦🇷", "date": "25.01", "status": "" },
  { "name": "Immortals Fenyx Rising™ Gold Edition", "price": "5.5", "flag": "🇦🇷", "date": "01.09", "status": " GOLD" },
  { "name": "Indoor Kickball", "price": "0.2", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Inertial Drift", "price": "0.17", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Infini", "price": "0.44", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Initial 2: New Stage & Xuan Yuan Sword Bundle", "price": "0.27", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Insurgency: Sandstorm - Gold Edition", "price": "25.0", "flag": "🇦🇷", "date": "23.01", "status": " GOLD" },
  { "name": "Insurgency: Sandstorm - Ultimate Edition", "price": "29.0", "flag": "🇦🇷", "date": "01.06", "status": " GOLD" },
  { "name": "Ion Fury", "price": "0.11", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Isonzo: Collector's Edition", "price": "0.54", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Jelly Brawl", "price": "0.07", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "JoJo's Bizarre Adventure: All-Star Battle R Ultimate Edition", "price": "14.3", "flag": "🇦🇷", "date": "01.06", "status": " GOLD" },
  { "name": "John Wick Hex", "price": "0.07", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Jotun: Valhalla Edition", "price": "0.05", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Jurassic World Evolution 2: Deluxe Edition", "price": "7.0", "flag": "🇦🇷", "date": "16.05", "status": " GOLD" },
  { "name": "Jurassic World Evolution 2: Dominion Bundle", "price": "13.0", "flag": "🇦🇷", "date": "16.05", "status": " GOLD" },
  { "name": "Jurassic World Evolution: Dinosaur Collection", "price": "0.09", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Just Shapes & Beats", "price": "0.27", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "KLONOA Phantasy Reverie Series: Special Bundle", "price": "0.94", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Kamikaze Veggies", "price": "0.07", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Kao the Kangaroo", "price": "1.14", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Kholat", "price": "0.06", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "King of the Arcade", "price": "0.09", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Kingdom Two Crowns: Norse Lands Edition", "price": "0.18", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Kitaria Fables", "price": "0.16", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Kitten Hero", "price": "0.07", "flag": "🇦🇷", "date": "27.01", "status": "" },
  { "name": "Klang 2", "price": "0.11", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Koh-Lanta", "price": "0.22", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Kung Fu Fighting", "price": "0.02", "flag": "🇦🇷", "date": "21.01", "status": "" },
  { "name": "LEGO® Bricktales", "price": "0.29", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "LEGO® Star Wars™: The Skywalker Saga", "price": "5.0", "flag": "🇦🇷", "date": "23.01", "status": " GOLD" },
  { "name": "LIMBO", "price": "0.31", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "LISA: Definitive Edition", "price": "0.36", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Lamentum", "price": "0.57", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Last Beat Enhanced", "price": "0.66", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Last Days of Lazarus", "price": "0.16", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Last Labyrinth -Lucidity Lost-", "price": "4.61", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Legend Bowl", "price": "0.34", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Legend of Keepers: Career of a Dungeon Manager", "price": "0.23", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Let's Build a Zoo & Dinosaur DLC Bundle", "price": "0.38", "flag": "🇦🇷", "date": "01.04", "status": " GOLD" },
  { "name": "Let's Build a Zoo: Aquarium Odyssey Bundle", "price": "0.38", "flag": "🇦🇷", "date": "01.10", "status": " GOLD" },
  { "name": "Let's Build a Zoo: Ultimate Bundle", "price": "0.48", "flag": "🇦🇷", "date": "01.10", "status": " GOLD" },
  { "name": "Let's Cook Together", "price": "0.06", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Letterbox by POWGI", "price": "0.07", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Levelhead", "price": "0.25", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Lies of P Digital Deluxe Edition", "price": "14.0", "flag": "🇦🇷", "date": "16.03", "status": " GOLD" },
  { "name": "Light & Dark Bundle", "price": "2.0", "flag": "🇦🇷", "date": "02.11", "status": "" },
  { "name": "Light Fairytale Episode 1", "price": "0.05", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Light Fairytale Episode 2", "price": "0.05", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Light Fairytale Prologue Bundle", "price": "0.48", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Like No Other: The Legend Of The Twin Books", "price": "0.53", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Little Misfortune", "price": "0.11", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Lonely Mountains: Downhill - Eldfjall Island", "price": "0.33", "flag": "🇦🇷", "date": "01.11", "status": " GOLD" },
  { "name": "Lost Ember", "price": "0.21", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Lost Ruins", "price": "0.18", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Lost Sea", "price": "0.02", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Lotus Reverie: First Nexus", "price": "0.07", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Lou's Revenge", "price": "0.12", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Lovers in a Dangerous Spacetime", "price": "0.09", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Luckslinger", "price": "0.04", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Luxury Garden Bundle", "price": "0.86", "flag": "🇦🇷", "date": "01.01", "status": " GOLD" },
  { "name": "MLB® The Show™ 23 Digital Deluxe Edition - Xbox One and Xbox Series X|S", "price": "20.0", "flag": "🇦🇷", "date": "01.04", "status": " GOLD" },
  { "name": "MLB® The Show™ 23 Xbox One", "price": "10.2", "flag": "🇦🇷", "date": "01.04", "status": " GOLD" },
  { "name": "MLB® The Show™ 23 Xbox Series X|S", "price": "12.48", "flag": "🇦🇷", "date": "01.04", "status": " GOLD" },
  { "name": "MUSYNX Deluxe Edition", "price": "1.5", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Machinarium & Creaks Bundle", "price": "1.56", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Machinarium", "price": "0.25", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Madden NFL 23 Xbox One", "price": "6.4", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "Madden NFL 23 Xbox Series X|S", "price": "7.5", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "Madden NFL 24 Deluxe Edition Xbox Series X|S & Xbox One", "price": "6.6", "flag": "🇦🇷", "date": "22.01", "status": "" },
  { "name": "Madden NFL 24", "price": "4.5", "flag": "🇦🇷", "date": "22.01", "status": "" },
  { "name": "Marble Duel", "price": "0.18", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Marble It Up! Ultra", "price": "0.38", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Martha Is Dead Digital Deluxe", "price": "0.43", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Mask of Mists", "price": "0.11", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Mayhem Brawler", "price": "0.14", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "MechWarrior 5: Mercenaries - JumpShip Edition", "price": "0.86", "flag": "🇦🇷", "date": "30.12", "status": " GOLD" },
  { "name": "Mechs V Kaijus", "price": "0.16", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Medieval Dynasty (Xbox One)", "price": "0.38", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Medieval Dynasty", "price": "0.44", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Meg's Monster", "price": "0.2", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Megaparty: A Tootuff Adventure", "price": "0.07", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.0", "flag": "🇦🇷", "date": "01.12", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.0", "flag": "🇹🇷", "date": "01.12", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.0", "flag": "🇦🇷", "date": "01.12", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.0", "flag": "🇹🇷", "date": "01.12", "status": "" },
  { "name": "Microsoft Flight Simulator Deluxe 40th Anniversary Edition", "price": "17.0", "flag": "🇦🇷", "date": "30.12", "status": " GOLD" },
  { "name": "Microsoft Flight Simulator Premium Deluxe 40th Anniversar...", "price": "23.0", "flag": "🇦🇷", "date": "30.12", "status": " GOLD" },
  { "name": "Middle-earth™: Shadow of War™ Definitive Edition", "price": "2.0", "flag": "🇦🇷", "date": "16.07", "status": " GOLD" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle - Windows 10", "price": "1.67", "flag": "🇹🇷", "date": "28.07", "status": " GOLD" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle", "price": "1.67", "flag": "🇹🇷", "date": "28.07", "status": " GOLD" },
  { "name": "Minecraft: Deluxe Collection", "price": "6.0", "flag": "🇦🇷", "date": "30.12", "status": " GOLD" },
  { "name": "Mineko's Night Market", "price": "1.12", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Mini Madness", "price": "0.06", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Mixups by POWGI", "price": "0.07", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Mondealy", "price": "0.1", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Monster Energy Supercross - The Official Videogame 4", "price": "0.56", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Monster Energy Supercross 4 - Special Edition - Xbox Series X|S", "price": "0.94", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Monster Energy Supercross 4 - Special Edition", "price": "0.94", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Monster Energy Supercross 4 - Xbox Series X|S", "price": "0.56", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Monster Prom: XXL", "price": "0.09", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Monster Train", "price": "0.18", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Monster Trampoline", "price": "0.44", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Moon Raider", "price": "0.05", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Moonlighter: Complete Edition", "price": "0.34", "flag": "🇦🇷", "date": "01.12", "status": " GOLD" },
  { "name": "Mortal Kombat 11 Ultimate + Injustice 2 Leg. Edition Bundle", "price": "22.68", "flag": "🇹🇷", "date": "16.06", "status": " GOLD" },
  { "name": "Mortal Kombat 11 Ultimate", "price": "10.53", "flag": "🇹🇷", "date": "16.06", "status": " GOLD" },
  { "name": "Moto Racer 4", "price": "0.25", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "MotoGP™17", "price": "0.19", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Motorcycle Mechanic Simulator 2021", "price": "0.21", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Mount & Blade II: Bannerlord - Digital Companion", "price": "0.11", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Mr. Prepper", "price": "0.11", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Munchkin: Quacked Quest", "price": "0.16", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Murder House", "price": "0.53", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Mutant Football League - Dynasty Edition", "price": "0.3", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Mutant Football League", "price": "0.04", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Mutazione", "price": "0.25", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "My Friend Peppa Pig - Complete Edition", "price": "5.5", "flag": "🇦🇷", "date": "16.07", "status": " GOLD" },
  { "name": "My Memory of Us", "price": "0.07", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "My Time at Portia Deluxe Edition", "price": "1.4", "flag": "🇦🇷", "date": "01.10", "status": " GOLD" },
  { "name": "NOSTALGIC TRAIN", "price": "0.17", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Neon Abyss Deluxe Edition", "price": "0.4", "flag": "🇦🇷", "date": "23.01", "status": " GOLD" },
  { "name": "New Joe & Mac - Caveman Ninja", "price": "0.19", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "New Super Lucky's Tale", "price": "0.16", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Niffelheim", "price": "0.35", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Nightmare Reaper", "price": "0.27", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Nine Parchments", "price": "0.06", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Nine Witches: Family Disruption", "price": "0.06", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.04", "flag": "🇦🇷", "date": "31.05", "status": "" },
  { "name": "No One Lives Under the Lighthouse", "price": "0.13", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Nordic Adventure Bundle", "price": "2.05", "flag": "🇹🇷", "date": "01.07", "status": " GOLD" },
  { "name": "OUTRIDERS WORLDSLAYER", "price": "6.6", "flag": "🇦🇷", "date": "16.04", "status": " GOLD" },
  { "name": "One Dog Story", "price": "0.09", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "One Hundred Ways", "price": "0.35", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "One Word by POWGI", "price": "0.07", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "OneShot: World Machine Edition", "price": "0.19", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Oneiros", "price": "0.04", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Operation: Tango", "price": "0.18", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Operencia: The Stolen Sun", "price": "0.18", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Outbreak: Contagious Memories", "price": "0.13", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Outlast 2", "price": "0.04", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Outlast: Bundle of Terror", "price": "0.03", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Overwatch® 2: Complete Hero Collection", "price": "3.31", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Oxide Room 104", "price": "0.94", "flag": "🇹🇷", "date": "23.01", "status": "" },
  { "name": "PAYDAY 2 - CRIMEWAVE EDITION - THE BIG SCORE Game Bundle", "price": "0.5", "flag": "🇦🇷", "date": "01.06", "status": " GOLD" },
  { "name": "PHOGS!", "price": "0.16", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Papa's Quiz", "price": "1.1", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Pathfinder: Wrath of the Righteous", "price": "0.6", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Pets Bundle", "price": "0.64", "flag": "🇦🇷", "date": "01.01", "status": " GOLD" },
  { "name": "Phoenix Point: Behemoth Edition", "price": "0.43", "flag": "🇦🇷", "date": "30.12", "status": " GOLD" },
  { "name": "Pirates Outlaws", "price": "0.86", "flag": "🇹🇷", "date": "23.01", "status": "" },
  { "name": "Pit People", "price": "0.09", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Plague Inc: Evolved", "price": "0.07", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Planet of the Eyes", "price": "0.01", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Potion Permit", "price": "0.25", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Professor Rubik's Brain Fitness", "price": "0.04", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Project Blue", "price": "0.44", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Punch Club 2: Fast Forward", "price": "0.25", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Pure Farming 2018", "price": "0.07", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Pushy and Pully in Blockland", "price": "0.09", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Q-YO Blaster", "price": "0.02", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "RESIDENT EVIL 2 Deluxe Edition", "price": "26.4", "flag": "🇹🇷", "date": "16.09", "status": " GOLD" },
  { "name": "REZ PLZ", "price": "0.05", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "RWBY: Arrowfell", "price": "0.27", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Raging Bytes", "price": "0.19", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Railway Empire 2 - Digital Deluxe Edition", "price": "0.86", "flag": "🇦🇷", "date": "01.06", "status": " GOLD" },
  { "name": "Rain on Your Parade + Levels and Features DLC!", "price": "0.29", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Rain on Your Parade", "price": "0.16", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Raptor Boyfriend: A High School Romance", "price": "0.12", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Re:Turn - One Way Trip", "price": "0.05", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "ReCore", "price": "2.5", "flag": "🇦🇷", "date": "", "status": "" },
  { "name": "Realpolitiks New Power", "price": "0.04", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Red Wings: Aces of the Sky", "price": "0.04", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Redout 2 - Deluxe Edition", "price": "0.27", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Redout 2", "price": "0.27", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Regalia: Of Men and Monarchs - Royal Edition", "price": "0.13", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Regular Moonstone Pack -- 2,500", "price": "1.8", "flag": "🇦🇷", "date": "01.09", "status": " GOLD" },
  { "name": "Remnant II - Deluxe Edition", "price": "5.5", "flag": "🇦🇷", "date": "01.06", "status": " GOLD" },
  { "name": "Remnant II - Ultimate Edition", "price": "7.0", "flag": "🇦🇷", "date": "01.06", "status": " GOLD" },
  { "name": "Reverie Knights Tactics", "price": "0.16", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Rico - Breakout Bundle", "price": "0.08", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Riddled Corpses EX", "price": "0.03", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "RiffTrax: The Game", "price": "0.09", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Rise Eterna", "price": "0.04", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Rise of the Third Power", "price": "0.18", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "River City Girls", "price": "0.27", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Riverbond", "price": "0.07", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Road to Guangdong", "price": "0.07", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Robot Squad Simulator X", "price": "0.04", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Rogue Explorer", "price": "0.04", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Rogue Legacy 2", "price": "0.27", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Rogue Legacy", "price": "0.02", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Roman Rumble in Las Vegum - Asterix & Obelix XXL 2", "price": "0.62", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Roundout by POWGI", "price": "0.07", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Rover Mechanic Simulator", "price": "0.07", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Ruvato: Original Complex", "price": "0.09", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "SCARLET NEXUS Ultimate Upgrade Pack", "price": "1.0", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "SOULVARS", "price": "0.21", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "2.14", "flag": "🇦🇷", "date": "01.01", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "1.6", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "Sable", "price": "0.16", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Sam & Max Save the World", "price": "0.24", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Sam & Max: Beyond Time and Space", "price": "0.24", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Saturnalia", "price": "0.14", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Screencheat", "price": "0.04", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Secret Agent : Cold War Espionage", "price": "0.05", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Seeds of Resilience", "price": "0.02", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Selma and the Wisp X", "price": "0.04", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Sephonie", "price": "0.21", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Serious Sam 4", "price": "0.18", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Shadowblade Odyssey", "price": "0.02", "flag": "🇦🇷", "date": "26.01", "status": "" },
  { "name": "Shalnor Legends: Sacred Lands", "price": "0.04", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Shame Legacy Xbox One Edition", "price": "0.13", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Shantae: Half-Genie Hero Ultimate Edition", "price": "0.19", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "She Sees Red Interactive Movie", "price": "0.05", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Sherlock Holmes Essential Bundle", "price": "1.46", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Sherlock Holmes The Awakened – Deluxe Edition", "price": "5.16", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Ship Graveyard Simulator", "price": "0.14", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Ships Simulator", "price": "0.13", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Shivering Stone", "price": "1.5", "flag": "🇦🇷", "date": "20.01", "status": "" },
  { "name": "Shotgun King: The Final Checkmate", "price": "0.18", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Shoulders of Giants", "price": "1.15", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Shovel Knight: Treasure Trove", "price": "1.11", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Shredders - 540INDY Edition", "price": "0.51", "flag": "🇦🇷", "date": "16.03", "status": " GOLD" },
  { "name": "Shuyan Saga", "price": "0.2", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "SimAirport", "price": "0.14", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Small Moonstone Pack -- 1,200", "price": "0.9", "flag": "🇦🇷", "date": "01.09", "status": " GOLD" },
  { "name": "Smash Boats Waterlogged Edition", "price": "0.43", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Smurfs Kart", "price": "1.87", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Sniper Elite 5 Complete Edition", "price": "1.57", "flag": "🇦🇷", "date": "01.05", "status": " GOLD" },
  { "name": "Sniper Elite 5 Deluxe Edition", "price": "8.0", "flag": "🇦🇷", "date": "01.05", "status": " GOLD" },
  { "name": "Snooker 19 Gold Edition", "price": "0.26", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Snooker 19", "price": "0.22", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Snooker Nation Championship", "price": "0.05", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "SnowRunner - 1-Anniversary Edition", "price": "3.4", "flag": "🇦🇷", "date": "01.05", "status": " GOLD" },
  { "name": "Solace State", "price": "0.27", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Soundfall", "price": "0.44", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Space Station Sprint", "price": "0.04", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Space Warlord Organ Trading Simulator", "price": "0.18", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Spaceland", "price": "0.35", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Spacelines from the Far Out", "price": "0.11", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Sparkle Bundle", "price": "0.16", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "Speed Limit", "price": "0.09", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Speedway Bundle Stock & Truck", "price": "0.21", "flag": "🇦🇷", "date": "20.01", "status": "" },
  { "name": "Spirit Hunters: Infinite Horde", "price": "0.12", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Spiritfarer®: Farewell Edition", "price": "0.1", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Squad 51 vs. the Flying Saucers", "price": "0.25", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Startup Company Console Edition", "price": "0.19", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Stay Out of the House", "price": "0.19", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "SteamWorld Build & Dig Bundle", "price": "2.46", "flag": "🇦🇷", "date": "29.02", "status": " GOLD" },
  { "name": "SteamWorld Build", "price": "2.0", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Stellaris: Console Edition - Deluxe Edition", "price": "0.55", "flag": "🇦🇷", "date": "16.10", "status": " GOLD" },
  { "name": "Steve Jackson's Sorcery!", "price": "0.22", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Streets of Rogue", "price": "0.09", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Summum Aeterna", "price": "0.28", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Sundered®: Eldritch Edition", "price": "0.07", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Sunset Overdrive Deluxe Edition", "price": "1.83", "flag": "🇹🇷", "date": "01.06", "status": " GOLD" },
  { "name": "Super Pixel Kid", "price": "0.02", "flag": "🇦🇷", "date": "18.01", "status": "" },
  { "name": "Super Slam Dunk Touchdown", "price": "0.08", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Super Toy Cars 2", "price": "0.05", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Super Toy Cars Collection", "price": "0.13", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Super Toy Cars", "price": "0.02", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Syberia 3", "price": "0.62", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Tacoma", "price": "0.07", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Tales of Kenzera™: ZAU Standard Edition", "price": "7.87", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Tank Mechanic Simulator", "price": "0.11", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Tannenberg", "price": "0.07", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Teardown", "price": "0.45", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Teardown: Deluxe Edition", "price": "0.61", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Teardown: Ultimate Edition", "price": "0.71", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Teenage Mutant Ninja Turtles: Shredder's Revenge - Dimension Shellshock", "price": "0.43", "flag": "🇦🇷", "date": "16.06", "status": " GOLD" },
  { "name": "Terraformers", "price": "1.64", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "The Amazing American Circus", "price": "0.39", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "The Assembly", "price": "0.05", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "The Banner Saga 2", "price": "0.06", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "The Banner Saga", "price": "0.06", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "The Bard's Tale Trilogy", "price": "0.83", "flag": "🇹🇷", "date": "", "status": "" },
  { "name": "The Big Con", "price": "0.07", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "The Bluecoats: North & South", "price": "0.62", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "The Bookwalker: Thief of Tales", "price": "0.17", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "The Bridge", "price": "0.05", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "The Catch: Carp & Coarse - Deluxe Edition", "price": "0.72", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "The Catch: Carp & Coarse Fishing", "price": "0.53", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "The Complex", "price": "0.14", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "The Drone Racing League Simulator", "price": "0.09", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "The Elder Scrolls Online Collection: Necrom", "price": "18.48", "flag": "🇹🇷", "date": "22.06", "status": " GOLD" },
  { "name": "The Elder Scrolls Online Deluxe Collection: Necrom", "price": "23.76", "flag": "🇹🇷", "date": "22.06", "status": " GOLD" },
  { "name": "The Elder Scrolls V: Skyrim Anniversary Edition", "price": "12.67", "flag": "🇹🇷", "date": "30.12", "status": " GOLD" },
  { "name": "The Escapists: Supermax Edition", "price": "0.31", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "The Evil Within Digital Bundle", "price": "2.67", "flag": "🇹🇷", "date": "30.12", "status": " GOLD" },
  { "name": "The Experiment: Escape Room", "price": "0.05", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "The First Tree", "price": "0.04", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "The Forbidden Arts", "price": "0.05", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "The Galactic Junkers", "price": "0.38", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "The Interactive Movie Bundle", "price": "0.26", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "The Jackbox Party Quadpack", "price": "0.7", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "The Jackbox Party Trilogy 2.0", "price": "0.85", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "The Jackbox Party Trilogy 3.0", "price": "0.96", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "The Jackbox Party Trilogy", "price": "0.41", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "The Lamplighters League - Deluxe Edition", "price": "0.78", "flag": "🇦🇷", "date": "01.04", "status": " GOLD" },
  { "name": "The Last Hero of Nostalgaia Deluxe Edition", "price": "0.35", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "The Last Worker", "price": "0.21", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "The Legend of Tianding", "price": "0.89", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "The Lord of the Rings: Adventure Card Game - Definitive Edition", "price": "0.16", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "The Lucid Dreamer Bundle", "price": "1.18", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "The Medium + Observer: System Redux + DARQ: Complete Edition — Bundle", "price": "0.81", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "The Riftbreaker Gold Edition", "price": "5.25", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "The Riftbreaker", "price": "0.32", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "The Sisters - Party of the Year", "price": "0.13", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "The Walking Dead: A New Frontier", "price": "0.21", "flag": "🇦🇷", "date": "01.11", "status": " GOLD" },
  { "name": "The Walking Dead: Michonne", "price": "0.07", "flag": "🇦🇷", "date": "01.11", "status": " GOLD" },
  { "name": "The Walking Dead: The Final Season - The Complete Season", "price": "0.07", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "The Walking Dead: The Telltale Definitive Series", "price": "0.36", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "The Wanderer: Frankenstein's Creature", "price": "0.2", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "The Witch's House MV", "price": "0.13", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "The Witness", "price": "0.12", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "The Wreck", "price": "0.21", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "The end is nahual: If I may say so", "price": "0.09", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Them Bombs", "price": "0.04", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "They Are Billions", "price": "0.7", "flag": "🇹🇷", "date": "23.01", "status": "" },
  { "name": "Thief Simulator", "price": "0.11", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "This War of Mine - Complete Edition", "price": "0.38", "flag": "🇦🇷", "date": "16.05", "status": " GOLD" },
  { "name": "Thumper", "price": "0.05", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Timothy vs the Aliens", "price": "0.06", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Tom Clancy's Rainbow Six® Siege Ultimate Edition", "price": "12.0", "flag": "🇦🇷", "date": "16.06", "status": " GOLD" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Ultimate Edition", "price": "4.75", "flag": "🇦🇷", "date": "01.08", "status": " GOLD" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Year 2 Gold Edition", "price": "2.0", "flag": "🇦🇷", "date": "23.01", "status": " GOLD" },
  { "name": "Tony and Clyde", "price": "0.22", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Toodee And Topdee", "price": "0.25", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Totally Reliable Delivery Service Deluxe Edition", "price": "0.34", "flag": "🇦🇷", "date": "01.12", "status": " GOLD" },
  { "name": "Tracks - The Train Set Game", "price": "0.21", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Tracks - The Train Set Game: Toybox Bundle", "price": "0.23", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Trailmakers - Space Upgrade", "price": "0.47", "flag": "🇦🇷", "date": "16.02", "status": " GOLD" },
  { "name": "Trailmakers Deluxe Edition", "price": "0.54", "flag": "🇦🇷", "date": "16.02", "status": " GOLD" },
  { "name": "Train Sim World® 4: Austrian Regional Edition", "price": "2.7", "flag": "🇹🇷", "date": "30.01", "status": "" },
  { "name": "Train Sim World® 4: Deluxe Edition", "price": "7.0", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Train Sim World® 4: Flying Scotsman Centenary Edition", "price": "5.69", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Train Sim World® 4: Special Edition", "price": "10.5", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Train Sim World® 4: Standard Edition", "price": "3.25", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Train Sim World® 4: UK Regional Edition", "price": "2.7", "flag": "🇹🇷", "date": "30.01", "status": "" },
  { "name": "Train Sim World® 4: USA Regional Edition", "price": "2.7", "flag": "🇹🇷", "date": "30.01", "status": "" },
  { "name": "Train Station Renovation", "price": "0.06", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "TramSim: Console Edition - Deluxe", "price": "5.0", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "TramSim: Console Edition", "price": "3.25", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Transcripted", "price": "0.02", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Treachery in Beatdown City: Ultra Remix", "price": "1.33", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Tricky Towers", "price": "0.06", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Trigger Witch", "price": "0.11", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Trine 4: The Nightmare Prince", "price": "0.13", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Trine: Ultimate Collection", "price": "0.47", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Trophy", "price": "0.09", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Troublemaker: Raise Your Gang", "price": "0.25", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "True Virus", "price": "0.11", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Tumblestone", "price": "0.05", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Tycoon Bundle", "price": "0.2", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Typoman", "price": "0.04", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "UFC® 5 Deluxe Edition", "price": "15.4", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "UFC® 5", "price": "10.5", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Ugly", "price": "1.49", "flag": "🇹🇷", "date": "23.01", "status": "" },
  { "name": "Ultimate ADOM - Caverns of Chaos", "price": "0.53", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "UnMetal", "price": "0.14", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "0.17", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Unusual Findings", "price": "1.81", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Urbek City Builder", "price": "2.68", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "VISCO Collection", "price": "1.57", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Vampire's Fall: Origins", "price": "0.05", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Verlore Tyd en Drome - Bundle", "price": "0.04", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Vermintide - Digital Value Pack", "price": "0.5", "flag": "🇦🇷", "date": "07.03", "status": "" },
  { "name": "Vlad Circus: Descend Into Madness", "price": "1.39", "flag": "🇹🇷", "date": "23.01", "status": "" },
  { "name": "Vosaria: Lair of the Forgotten", "price": "0.04", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "0.8", "flag": "🇦🇷", "date": "31.08", "status": "" },
  { "name": "WW2: Bunker Simulator", "price": "0.19", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Walden, a game", "price": "0.09", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Warhammer 40,000: Battlesector", "price": "0.36", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Warhammer 40,000: Darktide - Imperial Edition", "price": "5.0", "flag": "🇦🇷", "date": "01.10", "status": " GOLD" },
  { "name": "Warp Drive", "price": "0.22", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Wasteland 3 (PC) Colorado Collection", "price": "1.8", "flag": "🇦🇷", "date": "01.10", "status": " GOLD" },
  { "name": "Wasteland 3 Colorado Collection", "price": "11.59", "flag": "🇹🇷", "date": "01.10", "status": " GOLD" },
  { "name": "Watch Dogs®2 - Deluxe Edition", "price": "3.4", "flag": "🇦🇷", "date": "16.07", "status": " GOLD" },
  { "name": "Watch Dogs®2 - Gold Edition", "price": "4.0", "flag": "🇦🇷", "date": "16.07", "status": " GOLD" },
  { "name": "Wave Break", "price": "0.21", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "When the Past was Around", "price": "0.09", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Wild Card Football - Deluxe Edition", "price": "0.59", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Wild Card Football - Ultimate Edition", "price": "0.62", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Wild Card Football", "price": "0.36", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Will You Snail?", "price": "0.11", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Wind Peaks", "price": "0.53", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Wizard with a Gun", "price": "1.75", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Wobbly Life", "price": "1.28", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Wolfenstein® II: The New Colossus™ Digital Deluxe Edition", "price": "7.92", "flag": "🇹🇷", "date": "13.06", "status": " GOLD" },
  { "name": "Work from Home", "price": "1.24", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "World War Z: Aftermath - Deluxe Edition", "price": "0.71", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "World War Z: Aftermath", "price": "0.36", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Wreckfest Complete Edition", "price": "1.2", "flag": "🇦🇷", "date": "23.01", "status": " GOLD" },
  { "name": "WrestleQuest", "price": "3.1", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "XEL", "price": "0.84", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "XIII", "price": "0.09", "flag": "🇦🇷", "date": "30.01", "status": "" },
  { "name": "Yakuza: Like a Dragon Legendary Hero Edition", "price": "17.4", "flag": "🇹🇷", "date": "01.04", "status": " GOLD" },
  { "name": "Your Computer Might Be At Risk", "price": "1.25", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Yuoni", "price": "0.08", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Yuppie Psycho", "price": "0.58", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Zapling Bygone", "price": "0.16", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Zero Strain", "price": "0.05", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Ziggurat 2", "price": "0.24", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "Zombie Pinball", "price": "0.01", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "art of rally", "price": "1.22", "flag": "🇦🇷", "date": "23.01", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Master Hunter Bundle", "price": "0.86", "flag": "🇦🇷", "date": "01.06", "status": " GOLD" },

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

function resultArg() {
  const value = Number(arg_input.value) + .1
  const newValue = value + (value * resPercent(value)) / 100
  const res = newValue * usd
  const finishRes = res + resSwitсhArg(newValue)
  arg_output.innerHTML = floor(finishRes.toFixed())
  arg_output2.innerHTML = floor(finishRes.toFixed()) + 40
}

function resultTr() {
  const value = Number(tr_input.value) + .1
  const res = value * usd
  const finishRes = res + resSwitсhTr(tr_input.value)
  tr_output.innerHTML = floor(finishRes.toFixed())
  tr_output2.innerHTML = floor(finishRes.toFixed()) + 40
}



function resSwitсhArg(value) {
  let a;

  if (value <= 1) {
    a = 60
  } else if (value > 1 && value <= 5) {
    a = 80
  } else if (value > 5 && value <= 10) {
    a = 110
  } else if (value > 10 && value <= 15) {
    a = 135
  } else if (value > 15 && value <= 20) {
    a = 120

  } else if (value > 20 && value <= 25) {
    a = 200

  } else if (value > 25) {
    a = 230

  }
  return a
}

function resPercent(percent) {
  let a;

  if (percent <= 1) {
    a = 50
  } else if (percent > 1 && percent <= 5) {
    a = 40
  } else if (percent > 5 && percent <= 10) {

    a = 35
  } else if (percent > 10 && percent <= 15) {

    a = 30
  } else if (percent > 15 && percent <= 20) {

    a = 25
  } else if (percent > 20 && percent <= 25) {

    a = 25
  } else if (percent > 25) {

    a = 25
  }
  return a
}

function resSwitсhTr(value) {
  let a;

  if (value <= 1) {
    a = 60
  } else if (value > 1 && value <= 5) {
    a = 80
  } else if (value > 5 && value <= 10) {
    a = 110
  } else if (value > 10 && value <= 15) {
    a = 135
  } else if (value > 15 && value <= 20) {
    a = 120
  } else if (value > 20 && value <= 25) {
    a = 200
  } else if (value > 25) {
    a = 230
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

  item.innerHTML = `${a.name}:${res}&#8381 ${flag} до ${a.date} ${a.status}`
  // 
  list.append(item)
})

function resultFromListArg(price) {
  const value = Number(price) + .1
  const newPrice = value + (value * resPercent(value)) / 100
  const res = newPrice * usd + 40
  const finishRes = res + resSwitсhArg(newPrice)

  return floor(finishRes.toFixed())
}

function resultFromListTr(price) {
  const value = Number(price) + .1
  const res = value * usd + 40
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



