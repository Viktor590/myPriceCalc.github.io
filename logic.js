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
  { "name": "#Funtime", "price": "0.08", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "'n Verlore Verstand", "price": "0.03", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "1971 Project Helios", "price": "0.08", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "3D Billiards - Pool & Snooker - Remastered", "price": "0.11", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "502's Arcade", "price": "0.16", "flag": "🇦🇷", "date": "03.03", "status": "" },
  { "name": "8Doors: Arum's Afterlife Adventure", "price": "0.06", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "A Plague Tale Bundle", "price": "8.75", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "A Way Out", "price": "0.12", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "ADVERSE", "price": "0.02", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "AQUA KITTY UDX: Xbox One Ultra Edition", "price": "0.27", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "ARCADE GAME SERIES 3-in-1 Pack", "price": "0.07", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "ASTRO AQUA KITTY", "price": "0.08", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "ATOM RPG Supporter Edition", "price": "0.14", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Achtung! Cthulhu Tactics", "price": "0.11", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Ad Infinitum", "price": "3.06", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Aeon Must Die!", "price": "0.62", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Aerial_Knight's Never Yield", "price": "0.06", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Aery - The Lost Hero", "price": "0.12", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Aeterna Noctis", "price": "0.56", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "AeternoBlade II", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "AeternoBlade", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "After Us", "price": "8.8", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Afterimage", "price": "1.09", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Age of Empires 25th Anniversary Collection", "price": "1.72", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Age of Empires Definitive Edition", "price": "1.25", "flag": "🇦🇷", "date": "02.03", "status": "" },
  { "name": "Age of Empires III: Definitive Edition", "price": "1.25", "flag": "🇦🇷", "date": "02.03", "status": "" },
  { "name": "Age of Empires: Definitive Collection", "price": "0.7", "flag": "🇦🇷", "date": "06.10", "status": "" },
  { "name": "Airborne Bundle", "price": "0.57", "flag": "🇦🇷", "date": "01.02", "status": "" },
  { "name": "Airborne Kingdom", "price": "1.33", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Alchemist Adventure", "price": "0.11", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Alone in the Dark - Digital Deluxe Edition", "price": "36.25", "flag": "🇦🇷", "date": "20.03", "status": "" },
  { "name": "Alone in the Dark", "price": "32.62", "flag": "🇦🇷", "date": "20.03", "status": "" },
  { "name": "Alphadia Neo", "price": "0.17", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Alvastia Chronicles", "price": "0.09", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Alwa's Awakening", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Amazing Princess Sarah", "price": "0.22", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "America’s Greatest Game Shows: Wheel of Fortune® & Jeopar...", "price": "0.17", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Ancestors: The Humankind Odyssey", "price": "1.83", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Anima: Gate of Memories - The Nameless Chronicles", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Anima: Gate of Memories", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Ankora: Lost Days", "price": "0.12", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Anodyne", "price": "0.02", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Another World - 20th Anniversary Edition", "price": "0.02", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Apsulov: End of Gods", "price": "0.19", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Arcade Paradise | High Score Edition", "price": "0.4", "flag": "🇦🇷", "date": "01.07", "status": "" },
  { "name": "Archaica: The Path Of Light", "price": "0.07", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Arkham Horror: Mother’s Embrace", "price": "0.12", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Armello", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Asdivine Hearts I & II", "price": "0.18", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Assassin's Creed Triple Pack: Black Flag, Unity, Syndicate", "price": "2.26", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Assassin's Creed® Bundle: Assassin's Creed® Valhalla, Ass...", "price": "40.96", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Assassin's Creed® Chronicles: India", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Assassin's Creed® Odyssey - DELUXE EDITION", "price": "17.92", "flag": "🇹🇷", "date": "16.09", "status": "" },
  { "name": "Assassin's Creed® Odyssey - ULTIMATE EDITION", "price": "23.68", "flag": "🇹🇷", "date": "16.09", "status": "" },
  { "name": "Assassin's Creed® Origins - DELUXE EDITION", "price": "17.28", "flag": "🇹🇷", "date": "01.06", "status": "" },
  { "name": "Assassin's Creed® Origins - GOLD EDITION", "price": "20.48", "flag": "🇹🇷", "date": "01.06", "status": "" },
  { "name": "Assassin's Creed® Valhalla Complete Edition", "price": "25.6", "flag": "🇹🇷", "date": "16.07", "status": "" },
  { "name": "Assassin's Creed® Valhalla Deluxe Edition", "price": "19.84", "flag": "🇹🇷", "date": "16.07", "status": "" },
  { "name": "Assassin's Creed® Valhalla Ragnarök Edition", "price": "15.36", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Assassin’s Creed® Valhalla + Immortals Fenyx Rising™ Bundle", "price": "25.6", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Assassin’s Creed® Valhalla + Watch Dogs®: Legion Bundle", "price": "7.36", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Astalon: Tears of the Earth", "price": "0.18", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Astro Flame Starfighter (Xbox Series X|S)", "price": "0.06", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Astronite", "price": "0.08", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Atomic Heart - Gold Edition", "price": "15.0", "flag": "🇦🇷", "date": "16.08", "status": "" },
  { "name": "Atomic Heart - Premium Edition", "price": "12.75", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Aven Colony - Deluxe Edition", "price": "0.35", "flag": "🇦🇷", "date": "12.03", "status": "" },
  { "name": "Awarded Platformer Bundle", "price": "0.21", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "Away : The Survival Series", "price": "0.44", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Aztech Forgotten Gods", "price": "0.16", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "BATTLETECH Mercenary Collection", "price": "1.29", "flag": "🇦🇷", "date": "13.06", "status": "" },
  { "name": "BEB: Super Mega Bundle", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "BFF or Die", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "BLACKHOLE: Complete Edition", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "BPM: Bullets Per Minute", "price": "0.19", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "BQM - BlockQuest Maker: Remastered", "price": "0.09", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Back 4 Blood: Deluxe Edition", "price": "8.2", "flag": "🇦🇷", "date": "01.04", "status": "" },
  { "name": "Backbone", "price": "0.09", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Bad North: Jotunn Edition", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Batbarian: Testament of the Primordials", "price": "0.16", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Batman: Arkham Collection", "price": "1.41", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Batman: Arkham Knight Premium Edition", "price": "1.75", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Battle Of The Bulge", "price": "0.28", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Battlefield V Definitive Edition", "price": "0.44", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Battlefield™ 1 Revolution", "price": "0.21", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Battlefield™ 2042 Elite Edition Xbox One & Xbox Series X|S", "price": "6.6", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Battlefield™ 2042 Xbox One & Xbox Series X|S", "price": "1.6", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Battlefield™ 2042 Xbox One", "price": "1.6", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Battlefield™ Hardline Ultimate Edition", "price": "0.21", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Beach Buggy Racing 2: Hot Wheels™ Edition", "price": "0.14", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Beach Buggy Racing", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Beat This Bundle: Kung-Fu & Beatsplosion", "price": "0.08", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Big Moonstone Pack -- 5,500", "price": "3.6", "flag": "🇦🇷", "date": "01.09", "status": "" },
  { "name": "Big Pharma", "price": "0.08", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Bite the Bullet", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Blasphemous + Blasphemous 2 Bundle", "price": "8.3", "flag": "🇹🇷", "date": "04.03", "status": "" },
  { "name": "Bloody Shooters Bundle", "price": "0.09", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Boom Ball 2 for Kinect", "price": "0.02", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Boss Rush: Mythology (Xbox Series X|S)", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "British Horror Bundle", "price": "0.35", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Broken Pieces", "price": "0.27", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Broken Universe - Tower Defense", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Builder Flipper bundle", "price": "0.61", "flag": "🇦🇷", "date": "01.01", "status": "" },
  { "name": "Bundle: South Park™ : The Stick of Truth™ + The Fractured...", "price": "1.0", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Bus Simulator", "price": "0.25", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Butterfly 2", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Butterfly", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "CAN ANDROIDS PRAY: BLUE", "price": "0.03", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "CATAN® - Console Edition Deluxe", "price": "0.9", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "CATAN® - Console Edition", "price": "0.19", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "CODE VEIN Deluxe Edition", "price": "0.75", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Call of the Wild: The Angler™ - Deluxe Edition", "price": "0.64", "flag": "🇦🇷", "date": "01.09", "status": "" },
  { "name": "Capcom Fighting Bundle", "price": "17.28", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Caretaker Game", "price": "0.22", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Carto", "price": "0.11", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Cassette Beasts: Deluxe Edition", "price": "0.37", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Cat and Ghostly Road (Xbox Series X|S)", "price": "0.14", "flag": "🇦🇷", "date": "06.03", "status": "" },
  { "name": "Cat and Ghostly Road", "price": "0.14", "flag": "🇦🇷", "date": "06.03", "status": "" },
  { "name": "Catlateral Damage: Remeowstered", "price": "0.09", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Chasm", "price": "0.09", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Chef's Tail", "price": "0.06", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Chivalry 2 King's Edition", "price": "0.86", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Chivalry 2 Special Edition", "price": "0.71", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "ChromaGun", "price": "0.07", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Cinders", "price": "0.11", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Cities: Skylines - Mayor's Edition", "price": "0.75", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Cities: Skylines - Premium Edition 2", "price": "1.0", "flag": "🇦🇷", "date": "01.04", "status": "" },
  { "name": "Claire: Extended Cut", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Classic Snake Adventures (Cross-Buy)", "price": "0.06", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Color Symphony 2", "price": "0.01", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Commandos 2 & 3 – HD Remaster Double Pack", "price": "0.57", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Conan Exiles - Complete Edition October 2021", "price": "2.3", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Conan Exiles - Isle of Siptah Edition", "price": "0.99", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Contra: Operation Galuga + Early-purchase Bonus", "price": "5.17", "flag": "🇦🇷", "date": "12.03", "status": "" },
  { "name": "Cook, Serve, Delicious! 2/3 Bundle!!", "price": "0.55", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Cosmic Top Secret", "price": "0.22", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Crash Drive 3", "price": "0.53", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Crazy Sports Bundle", "price": "0.01", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Creaks", "price": "1.92", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Crossroads Inn", "price": "0.16", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Crusader Kings III: Royal Edition", "price": "1.07", "flag": "🇦🇷", "date": "01.02", "status": "" },
  { "name": "Crystal Ortha", "price": "0.09", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Cuccchi", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Curious Expedition 2", "price": "0.12", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Cursed to Golf", "price": "0.18", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Cyber Edition", "price": "0.84", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "DAS WIRED-HORROR-SPIELPAKET", "price": "0.57", "flag": "🇦🇷", "date": "01.01", "status": "" },
  { "name": "DEAD ISLAND 2 DELUXE EDITION", "price": "19.17", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "DEAD ISLAND 2 GOLD EDITION", "price": "23.01", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "DEADCRAFT Deluxe Edition", "price": "0.11", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "DEADCRAFT", "price": "0.35", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "DEATHLOOP Deluxe Edition", "price": "16.64", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "DEMON'S TILT", "price": "0.11", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "DIRT 5 Year One Edition", "price": "1.29", "flag": "🇦🇷", "date": "11.08", "status": "" },
  { "name": "DOOM Eternal Deluxe Edition", "price": "15.36", "flag": "🇹🇷", "date": "01.10", "status": "" },
  { "name": "DOOM Eternal: The Ancient Gods - Part One", "price": "5.44", "flag": "🇹🇷", "date": "01.10", "status": "" },
  { "name": "DOOM Eternal: The Ancient Gods - Part Two", "price": "5.44", "flag": "🇹🇷", "date": "18.03", "status": "" },
  { "name": "DOOM Eternal: Year One Pass (PC)", "price": "8.21", "flag": "🇹🇷", "date": "03.12", "status": "" },
  { "name": "DOOM Eternal: Year One Pass", "price": "8.21", "flag": "🇹🇷", "date": "01.10", "status": "" },
  { "name": "DOOM Slayers Collection", "price": "3.46", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "DRAGON BALL FIGHTERZ - FighterZ Edition", "price": "1.69", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "DRAGON BALL XENOVERSE 2 DELUXE EDITION", "price": "11.98", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "DRAGON BALL XENOVERSE Super Bundle", "price": "1.41", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "DRAGON BALL Z: KAKAROT Deluxe Edition", "price": "10.79", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "DRAGON BALL: THE BREAKERS Special Edition", "price": "1.28", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "DYSMANTLE", "price": "0.12", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Darkest Dungeon®: Ancestral Edition", "price": "0.4", "flag": "🇦🇷", "date": "01.02", "status": "" },
  { "name": "Daymare: 1998", "price": "0.09", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Dead Cells: Medley of Pain Bundle", "price": "0.57", "flag": "🇦🇷", "date": "16.09", "status": "" },
  { "name": "Dead Cells: Return to Castlevania Bundle", "price": "0.45", "flag": "🇦🇷", "date": "16.09", "status": "" },
  { "name": "Dead Effect 2", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Dead Space Digital Deluxe Edition", "price": "25.6", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Dead Space", "price": "22.4", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Death Park", "price": "0.06", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Death Squared", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Death's Door [Xbox]", "price": "0.12", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Deep Diving Adventures", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Deep Rock Galactic - Deluxe Edition", "price": "0.57", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Deep Rock Galactic - Ultimate Edition", "price": "0.71", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Deep Sky Derelicts: Definitive edition", "price": "0.09", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Deflector", "price": "0.08", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Deleveled", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Deliver Us The Moon", "price": "0.11", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles Ultimate Edition", "price": "25.16", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles", "price": "6.72", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "Deployment", "price": "0.09", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Desert Child", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Detective Di: The Silk Rose Murders", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Devil May Cry HD Collection & 4SE Bundle", "price": "9.5", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Die for Valhalla!", "price": "0.03", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Dinobreak Killer Crisis Collection", "price": "0.31", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Discolored", "price": "0.06", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Dishonored & Prey: The Arkane Collection", "price": "16.0", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Dishonored®: Death of the Outsider™ Deluxe Bundle", "price": "12.74", "flag": "🇹🇷", "date": "13.06", "status": "" },
  { "name": "Disintegration", "price": "1.89", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Disney Dreamlight Valley: A Rift in Time", "price": "0.54", "flag": "🇦🇷", "date": "01.09", "status": "" },
  { "name": "Don't Starve: Giant Edition + Shipwrecked Expansion", "price": "0.06", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Don't Starve: Giant Edition", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Donut County", "price": "0.07", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Doom and Destiny", "price": "0.06", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Double Cross", "price": "0.07", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Doughlings Bundle", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Doughlings: Arcade", "price": "0.03", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Doughlings: Invasion", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Dragon Age™: Inquisition - Game of the Year Edition", "price": "1.22", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Dragon Ball Xenoverse + Season Pass", "price": "0.2", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Dragon's Lair Trilogy", "price": "0.12", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Droid Trivia", "price": "0.27", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Dungeon and Gravestone", "price": "0.09", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Dungeons 4 - Digital Deluxe Edition", "price": "14.0", "flag": "🇦🇷", "date": "16.11", "status": "" },
  { "name": "Dying Light 2 Stay Human - Ultimate Edition", "price": "33.03", "flag": "🇹🇷", "date": "28.02", "status": "" },
  { "name": "Dying Light 2 Stay Human", "price": "16.94", "flag": "🇹🇷", "date": "28.02", "status": "" },
  { "name": "EA Family Bundle", "price": "0.12", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "EA SPORTS FC™ 24 Standard Edition Xbox One & Xbox Series X|S", "price": "13.44", "flag": "🇹🇷", "date": "31.12", "status": "" },
  { "name": "EA SPORTS FC™ 24 Standard Edition Xbox One & Xbox Series X|S", "price": "15.68", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "EA SPORTS FC™ 24 Ultimate Edition Xbox One & Xbox Series X|S", "price": "25.6", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "EA SPORTS™ PGA TOUR™ Deluxe Edition", "price": "21.12", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "EA SPORTS™ PGA TOUR™", "price": "17.92", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "EA STAR WARS™ TRIPLE BUNDLE", "price": "1.19", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Elemental War TD", "price": "0.47", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Endzone - A World Apart: Complete Edition", "price": "1.25", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Endzone - A World Apart: Survivor Edition", "price": "1.12", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Enter x Exit the Gungeon", "price": "0.27", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Escape Academy Deluxe Edition", "price": "0.5", "flag": "🇦🇷", "date": "01.02", "status": "" },
  { "name": "Escape Dead Island", "price": "0.05", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "Eternity: The Last Unicorn", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Etherborn", "price": "0.11", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Evasion From Hell", "price": "0.11", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Evergate", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Evertried", "price": "0.12", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Exorder", "price": "0.19", "flag": "🇦🇷", "date": "02.03", "status": "" },
  { "name": "F1® Manager 2023 Deluxe Edition", "price": "14.08", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "FAR CRY 4 + FAR CRY PRIMAL BUNDLE", "price": "0.78", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "FAR CRY ANTHOLOGY BUNDLE", "price": "12.8", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "FAR: Lone Sails", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "FOCUS INDIES BUNDLE - Curse of the Dead Gods + Shady Part of Me + Aeon Must Die!", "price": "1.75", "flag": "🇦 🇷", "date": "05.03", "status": "" },
  { "name": "Falling Out", "price": "0.08", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Fallout 4: Game of the Year Edition (PC)", "price": "7.3", "flag": "🇹🇷", "date": "12.03", "status": "" },
  { "name": "Fallout 4: Game of the Year Edition", "price": "7.3", "flag": "🇹🇷", "date": "12.03", "status": "" },
  { "name": "Fallout 76: Atlantic City - Boardwalk Paradise Deluxe Edition", "price": "12.0", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Far Cry Classic", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Far Cry Insanity Bundle", "price": "1.0", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Far Cry® 5 + Far Cry® New Dawn Deluxe Edition Bundle", "price": "0.66", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Far Cry® 5 Gold Edition + Far Cry ® New Dawn Deluxe Editi...", "price": "0.8", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Far Cry® 6 Deluxe Edition", "price": "19.84", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Far Cry® 6 Game of the Year Edition", "price": "24.32", "flag": "🇹🇷", "date": "16.06", "status": "" },
  { "name": "Far Cry® 6 Gold Edition", "price": "20.48", "flag": "🇹🇷", "date": "16.06", "status": "" },
  { "name": "Far Cry®5 Gold Edition", "price": "3.3", "flag": "🇦🇷", "date": "01.07", "status": "" },
  { "name": "Farm Bundle", "price": "0.57", "flag": "🇦🇷", "date": "01.01", "status": "" },
  { "name": "Farm Pets Bundle", "price": "0.86", "flag": "🇦🇷", "date": "01.01", "status": "" },
  { "name": "Fernz Gate", "price": "0.09", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Fight'N Rage", "price": "0.54", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Figment 2: Creed Valley", "price": "0.16", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Figment: Journey Into the Mind", "price": "0.27", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Fishing: Barents Sea Complete Edition", "price": "0.16", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Five Dates", "price": "0.14", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Flailing Limbs Bundle", "price": "0.25", "flag": "🇦🇷", "date": "01.08", "status": "" },
  { "name": "Flippin Kaktus", "price": "0.06", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Flipping Death", "price": "0.02", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Flooded", "price": "0.19", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "For Honor® Complete Edition", "price": "5.0", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Forest Grove", "price": "0.07", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Forza Horizon 4 Expansions Bundle", "price": "2.81", "flag": "🇦🇷", "date": "03.10", "status": "" },
  { "name": "Forza Horizon 5 PLUS Hot Wheels Bundle", "price": "10.8", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Four Sided Fantasy", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Freedom Finger", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Frightence", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Frostpunk: Complete Collection", "price": "0.64", "flag": "🇦🇷", "date": "16.07", "status": "" },
  { "name": "Fuga: Melodies of Steel 2 - Deluxe Edition", "price": "8.0", "flag": "🇦🇷", "date": "16.05", "status": "" },
  { "name": "Fuga: Melodies of Steel 2 - Ultimate Edition", "price": "8.55", "flag": "🇦🇷", "date": "16.05", "status": "" },
  { "name": "Full Quiet", "price": "0.06", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Furi", "price": "0.07", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "GRID Legends", "price": "2.0", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "GRID Legends: Deluxe Edition", "price": "3.72", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "GRIP Digital Deluxe", "price": "0.06", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Galaxy Squad", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Gangs of Sherwood – Lionheart Edition", "price": "4.94", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Garden Bundle", "price": "0.64", "flag": "🇦🇷", "date": "01.01", "status": "" },
  { "name": "Gears of War 4 and Halo 5: Guardians Bundle", "price": "0.4", "flag": "🇦🇷", "date": "31.01", "status": "" },
  { "name": "Gears of War Ultimate Edition Deluxe Version", "price": "1.3", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Gearshifters", "price": "0.17", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Gem Smashers", "price": "0.02", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Generation Zero ® - Silver Bundle", "price": "0.71", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Generation Zero ® - Ultimate Bundle", "price": "1.0", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Generation Zero® - Gold Bundle", "price": "0.86", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Genesis Alpha One Deluxe Edition", "price": "0.08", "flag": "🇦🇷", "date": "12.03", "status": "" },
  { "name": "Genesis Noir", "price": "0.08", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Geometric Sniper Z", "price": "0.06", "flag": "🇦🇷", "date": "06.03", "status": "" },
  { "name": "Ghostwire: Tokyo Deluxe Edition", "price": "19.84", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Goat Simulator 3 - Digital Downgrade Edition", "price": "2.0", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Goat Simulator: The GOATY", "price": "0.3", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Goat Simulator: Waste Of Space Bundle", "price": "0.14", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Golazo! 2", "price": "0.3", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Golf With Your Friends - Starter Edition", "price": "18.0", "flag": "🇦🇷", "date": "16.07", "status": "" },
  { "name": "Golf With Your Friends - Ultimate Edition", "price": "34.53", "flag": "🇹🇷", "date": "16.07", "status": "" },
  { "name": "Gorogoa", "price": "0.06", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Grand Prix Rock 'N Racing", "price": "0.02", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Grapple Dog", "price": "0.07", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Gravity Heroes", "price": "0.08", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Grin Robot Games Bundle", "price": "0.2", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Guazu: The Rescue", "price": "0.06", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Guilty Gear -Strive- Daredevil Edition", "price": "7.09", "flag": "🇦🇷", "date": "01.09", "status": "" },
  { "name": "Halo 5: Guardians – Digital Deluxe Edition", "price": "6.5", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Halo Wars 2: Complete Edition", "price": "25.6", "flag": "🇹🇷", "date": "04.04", "status": "" },
  { "name": "Hammerwatch", "price": "0.2", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Hazelight Bundle", "price": "9.6", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Heaven Dust", "price": "0.06", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Heirs of the Kings", "price": "0.17", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Hell Let Loose - Deluxe Edition", "price": "29.93", "flag": "🇹🇷", "date": "01.01", "status": "" },
  { "name": "Hell Let Loose - Ultimate Edition", "price": "34.53", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Hello Neighbor 2 Deluxe Edition", "price": "5.5", "flag": "🇦🇷", "date": "16.12", "status": "" },
  { "name": "Hi-Fi RUSH Deluxe Edition", "price": "15.36", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "High On Life: DLC Bundle", "price": "6.0", "flag": "🇦🇷", "date": "16.06", "status": "" },
  { "name": "Hindsight 20/20 - Wrath of the Raakshasa", "price": "0.07", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Hotel: A Resort Simulator", "price": "6.12", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Hotline Miami Collection", "price": "1.14", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "House Flipper", "price": "0.12", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Hovership Havoc", "price": "0.03", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Huge Moonstone Pack -- 14,500", "price": "9.0", "flag": "🇦🇷", "date": "01.09", "status": "" },
  { "name": "Huntdown", "price": "0.07", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Hunter's Legacy", "price": "0.01", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Hypnospace Outlaw & Slayers X: Terminal Aftermath: Vengance of the Slayer Bundle", "price": "0.48", "flag": "🇦 🇷", "date": "01.06", "status": "" },
  { "name": "I Am Dead", "price": "0.12", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "INDIE BUNDLE: Shiness and Seasons after Fall", "price": "0.17", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "INSIDE", "price": "0.56", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Immortal Planet", "price": "0.09", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "ImmortalLegacy:TheJadeCipherConsoleEdition", "price": "0.12", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Immortals Fenyx Rising™ Gold Edition", "price": "5.5", "flag": "🇦🇷", "date": "01.09", "status": "" },
  { "name": "Immortals of Aveum™ Deluxe Edition", "price": "25.6", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Immortals of Aveum™", "price": "22.4", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "In rays of the Light (Xbox Series X|S)", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Initial 2: New Stage & Xuan Yuan Sword Bundle", "price": "0.27", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Injustice™ 2 - Legendary Edition", "price": "1.9", "flag": "🇦🇷", "date": "01.07", "status": "" },
  { "name": "Insurgency: Sandstorm - Deluxe Edition", "price": "17.0", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Insurgency: Sandstorm - Gold Edition", "price": "25.0", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Insurgency: Sandstorm - Ultimate Edition", "price": "29.0", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Iron Crypticle", "price": "0.03", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Isonzo: Deluxe Edition", "price": "0.25", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Jack 'n' Hat", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "John Wick Hex", "price": "0.07", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Jotun: Valhalla Edition", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Journey of the Broken Circle", "price": "0.18", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Jurassic World Evolution 2: Deluxe Edition", "price": "7.0", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Jurassic World Evolution 2: Dominion Bundle", "price": "13.0", "flag": "🇦🇷", "date": "16.05", "status": "" },
  { "name": "Just Die Already", "price": "0.07", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Kamikaze Veggies", "price": "0.07", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Kao the Kangaroo", "price": "1.14", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Kerbal Space Program Enhanced Edition", "price": "1.41", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Kholat", "price": "0.06", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "King Leo", "price": "0.47", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Kingdom Treasury Collection", "price": "0.07", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Klabater Bundle: The Amazing American Circus, Moonshine Inc., Heliborne and Crossroads Inn", "price": "2.5", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Knee Deep", "price": "0.07", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Kung Fu Fighting", "price": "0.02", "flag": "🇦🇷", "date": "07.03", "status": "" },
  { "name": "Kung Fury: Street Rage - ULTIMATE EDITION", "price": "0.09", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "LEGO® Builder's Journey", "price": "0.61", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "LEGO® DC Heroes & Villains-Bundle", "price": "1.24", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "LEGO® Harry Potter™ Collection", "price": "0.37", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "LEGO® Marvel Collection", "price": "1.41", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "LEGO® Star Wars™: The Skywalker Saga", "price": "5.0", "flag": "🇦🇷", "date": "01.05", "status": "" },
  { "name": "LIMBO", "price": "0.31", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Lair of the Clockwork God", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Legend of Keepers: Career of a Dungeon Manager", "price": "0.23", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Leisure Suit Larry - Wet Dreams Saga Bundle", "price": "0.32", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Let Them Come", "price": "0.18", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Let's Build a Zoo & Dinosaur DLC Bundle", "price": "0.38", "flag": "🇦🇷", "date": "01.04", "status": "" },
  { "name": "Let's Build a Zoo: Aquarium Odyssey Bundle", "price": "0.38", "flag": "🇦🇷", "date": "01.10", "status": "" },
  { "name": "Let's Build a Zoo: Ultimate Bundle", "price": "0.48", "flag": "🇦🇷", "date": "01.10", "status": "" },
  { "name": "Lifeless Planet: Premier Edition", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Liftoff: Drone Racing Deluxe Edition", "price": "0.16", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Light & Dark Bundle", "price": "2.0", "flag": "🇦🇷", "date": "02.11", "status": "" },
  { "name": "Light Fairytale Episode 1", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Light Fairytale Episode 2", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Light Fairytale Prologue Bundle", "price": "0.48", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Lightyear Frontier (Game Preview) Pre-Order Bundle", "price": "0.4", "flag": "🇦🇷", "date": "19.03", "status": "" },
  { "name": "Little Misfortune", "price": "0.11", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Little Nightmares I & II Bundle", "price": "1.91", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Lonely Mountains: Downhill - Eldfjall Island", "price": "0.33", "flag": "🇦🇷", "date": "01.11", "status": "" },
  { "name": "Loop8: Summer of Gods", "price": "3.4", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Loop8: Summer of Gods", "price": "8.32", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "Lost Ember", "price": "0.16", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Lost Judgment Digital Deluxe Edition", "price": "5.0", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "Lost Ruins", "price": "0.12", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Lost Wing", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Lost in Random™", "price": "0.22", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Lou's Revenge + One Dog Story Bundle", "price": "0.2", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Lumberjack's Dynasty", "price": "0.19", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Luxury Garden Bundle", "price": "0.86", "flag": "🇦🇷", "date": "01.01", "status": "" },
  { "name": "MLB® The Show™ 23 Digital Deluxe Edition - Xbox One and Xbox Series X|S", "price": "20.0", "flag": "🇦🇷", "date": "01.04", "status": "" },
  { "name": "MLB® The Show™ 23 Xbox One", "price": "10.2", "flag": "🇦🇷", "date": "01.04", "status": "" },
  { "name": "MLB® The Show™ 23 Xbox Series X|S", "price": "12.48", "flag": "🇦🇷", "date": "01.04", "status": "" },
  { "name": "MONOPOLY PLUS + MONOPOLY Madness", "price": "1.27", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "MY HERO ONE'S JUSTICE 2 Deluxe Edition", "price": "5.25", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Machinarium & Creaks Bundle", "price": "2.5", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Machinarium", "price": "1.15", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Mad Tower Tycoon", "price": "0.13", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Madden NFL 23 Xbox One", "price": "6.4", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "Madden NFL 23 Xbox Series X|S", "price": "7.5", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "Madden NFL 24 Deluxe Edition Xbox Series X|S & Xbox One", "price": "19.2", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Madden NFL 24", "price": "13.44", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Mail Mole", "price": "0.09", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Mainframe Defenders", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Maneater Apex Edition", "price": "0.71", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Maquette", "price": "0.12", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Mass Effect™ Legendary Edition", "price": "4.48", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Masters of Anima", "price": "0.12", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Mayhem Brawler", "price": "0.12", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Mech Armada", "price": "0.09", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "MechWarrior 5: Mercenaries - JumpShip Edition", "price": "0.86", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Meg's Monster", "price": "0.2", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Mega Man 30th Anniversary Bundle", "price": "19.2", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Mega Man Legacy Collection 1 & 2 Combo Pack", "price": "7.68", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Mega Man X Legacy Collection 1+2", "price": "10.24", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Megaquarium", "price": "0.13", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Merge Games Adventure Bundle #1", "price": "0.34", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Merge Games Adventure Bundle #2", "price": "0.3", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Merge Games Cleaning Bundle", "price": "0.3", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Merge Games Cyberpunk Bundle", "price": "0.26", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Merge Games Horror Bundle", "price": "0.42", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Merge Games Pixel Bundle", "price": "0.33", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Metal: Hellsinger (Xbox One)", "price": "0.21", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Metal: Hellsinger (Xbox Series X|S & PC)", "price": "0.29", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Metal: Hellsinger - Complete Edition", "price": "0.49", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.0", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Microsoft 365 Family", "price": "0.0", "flag": "🇹🇷", "date": "01.12", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.0", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.0", "flag": "🇹🇷", "date": "01.12", "status": "" },
  { "name": "Middle-earth™: The Shadow Bundle", "price": "1.12", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Mighty Switch Force! Collection", "price": "0.12", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Milky Way Prince - The Vampire Star", "price": "0.08", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Mind’s Descent Bundle", "price": "3.0", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle - Windows 10", "price": "1.62", "flag": "🇹🇷", "date": "28.07", "status": "" },
  { "name": "Minecraft Dungeons Ultimate DLC Bundle", "price": "1.62", "flag": "🇹🇷", "date": "28.07", "status": "" },
  { "name": "Minesweeper Genius", "price": "0.02", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Mixx Island: Remix Plus", "price": "0.02", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Mondealy", "price": "0.08", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Monster Viator", "price": "0.13", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Moonlighter: Complete Edition", "price": "0.34", "flag": "🇦🇷", "date": "01.12", "status": "" },
  { "name": "Mordhau", "price": "1.17", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Morphite", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Mortal Kombat 1", "price": "24.75", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Mortal Kombat 11 Ultimate + Injustice 2 Leg. Edition Bundle", "price": "21.99", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Mortal Kombat 11 Ultimate", "price": "10.21", "flag": "🇹🇷", "date": "16.06", "status": "" },
  { "name": "Motorbike Racing Bundle", "price": "0.75", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Mr. Pumpkin Series Bundle", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Mugsters", "price": "0.14", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Mulaka", "price": "0.02", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Munchkin: Quacked Quest", "price": "0.16", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Murder Miners", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "My Friend Peppa Pig - Complete Edition", "price": "5.5", "flag": "🇦🇷", "date": "16.07", "status": "" },
  { "name": "My Memory of Us", "price": "0.07", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "My Time at Portia Deluxe Edition", "price": "1.4", "flag": "🇦🇷", "date": "12.03", "status": "" },
  { "name": "Mystik Belle", "price": "0.07", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Mythic Ocean", "price": "0.33", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "NARUTO SHIPPUDEN: Ultimate Ninja STORM Legacy", "price": "0.65", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "NARUTO SHIPPUDEN™: Ultimate Ninja® STORM 2", "price": "0.16", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "NARUTO SHIPPUDEN™: Ultimate Ninja® STORM 3 Full Burst", "price": "0.16", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "NARUTO SHIPPUDEN™: Ultimate Ninja® STORM 4 ROAD TO BORUTO", "price": "0.83", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "NARUTO SHIPPUDEN™: Ultimate Ninja® STORM 4", "price": "0.98", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "NARUTO SHIPPUDEN™: Ultimate Ninja® STORM Trilogy", "price": "0.35", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "NARUTO X BORUTO Ultimate Ninja STORM CONNECTIONS Deluxe Edition", "price": "35.82", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "NARUTO™: Ultimate Ninja® STORM", "price": "0.16", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "NBA 2K24 Baller Edition", "price": "13.99", "flag": "🇹🇷", "date": "06.03", "status": "" },
  { "name": "NEScape!", "price": "0.15", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "NHL® 24 X-Factor Edition Xbox One & Xbox Series X|S", "price": "25.6", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "NHL® 24 Xbox One", "price": "15.36", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "NHL® 24 Xbox Series X|S", "price": "17.92", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Need for Speed Rivals", "price": "0.07", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Need for Speed™ Heat Deluxe Edition", "price": "0.19", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Need for Speed™ Heat", "price": "0.16", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Need for Speed™ Hot Pursuit Remastered", "price": "0.47", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Need for Speed™ Payback - Deluxe Edition", "price": "0.21", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Need for Speed™ Payback", "price": "0.15", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Need for Speed™ Unbound Palace Edition", "price": "1.97", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Need for Speed™ Unbound", "price": "1.69", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Need for Speed™", "price": "0.09", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Neon Abyss Deluxe Edition", "price": "0.4", "flag": "🇦🇷", "date": "16.07", "status": "" },
  { "name": "NeonLore", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Neversong", "price": "0.08", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "New Super Lucky's Tale", "price": "0.16", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "New Tales from the Borderlands: Deluxe Edition", "price": "4.37", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Nexomon + Nexomon: Extinction - Complete Collection", "price": "0.28", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Ni no Kuni Wrath of the White Witch™ Remastered", "price": "2.4", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Nickelodeon All-Star Brawl 2 Deluxe Edition", "price": "10.62", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Nickelodeon All-Star Brawl 2 Ultimate Edition", "price": "11.87", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Nickelodeon All-Star Brawl 2", "price": "8.12", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "NieR Replicant ver.1.22474487139...", "price": "2.0", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "NieR:Automata BECOME AS GODS Edition", "price": "0.82", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "NieR:Automata™ BECOME AS GODS Edition", "price": "0.82", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.04", "flag": "🇦🇷", "date": "31.05", "status": "" },
  { "name": "No Man's Sky", "price": "2.72", "flag": "🇹🇷", "date": "28.02", "status": "" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "1.63", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "No More Heroes 3 Xbox Digital Deluxe Edition", "price": "1.72", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "No More Heroes 3 Xbox", "price": "1.36", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "No More Heroes 3 Xbox", "price": "1.5", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Nordic Adventure Bundle", "price": "1.98", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "ONE PIECE BURNING BLOOD - Gold Edition", "price": "0.94", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "ONE PIECE ODYSSEY Deluxe Edition", "price": "4.35", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "ONE PIECE World Seeker Deluxe Edition", "price": "1.63", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "ONE PUNCH MAN: A HERO NOBODY KNOWS Deluxe Edition", "price": "0.88", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Ogre: Console Edition", "price": "0.14", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Old Man's Journey", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "One True Hero", "price": "0.4", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "OneShot: World Machine Edition", "price": "0.19", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Order of Battle: World War II", "price": "0.12", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Out of Line", "price": "0.28", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Outbreak Co-Op Nightmares", "price": "0.11", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Outbreak Ultimate Apocalypse", "price": "0.18", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Outbreak: Endless Nightmares", "price": "0.09", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Outbreak: Epidemic Definitive Edition", "price": "0.07", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Outcast - A New Beginning", "price": "30.81", "flag": "🇦🇷", "date": "15.03", "status": "" },
  { "name": "Outlast 2", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Outlast: Bundle of Terror", "price": "0.03", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Overcooked! + Overcooked! 2", "price": "0.16", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Overcooked! 2 - Gourmet Edition", "price": "0.56", "flag": "🇦🇷", "date": "16.12", "status": "" },
  { "name": "Overpass 2", "price": "4.37", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "PAYDAY 2 - CRIMEWAVE EDITION - THE BIG SCORE Game Bundle", "price": "0.5", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Panzer Dragoon: Remake", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Pathfinder: Wrath of the Righteous", "price": "0.6", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Pecaminosa - A Deadly Hand", "price": "0.14", "flag": "🇦🇷", "date": "28.02", "status": "" },
  { "name": "Persona 3 Portable & Persona 4 Golden Bundle", "price": "12.48", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "Pets Bundle", "price": "0.64", "flag": "🇦🇷", "date": "01.01", "status": "" },
  { "name": "Phantom Doctrine", "price": "0.1", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Pharaonic", "price": "0.07", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Phoenix Point: Behemoth Edition", "price": "0.43", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Pikuniku", "price": "0.06", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Pit People", "price": "0.09", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Plague Inc: Evolved", "price": "0.07", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Planet Cube: Edge", "price": "0.09", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Plants vs. Zombies Garden Warfare", "price": "0.09", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Plants vs. Zombies: Battle for Neighborville™ Deluxe Edition", "price": "0.57", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Plants vs. Zombies: Battle for Neighborville™", "price": "0.45", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Plants vs. Zombies™ Garden Warfare 2", "price": "0.09", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Pool Nation FX", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Pool Nation Snooker Bundle", "price": "0.06", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Potata: fairy flower (Xbox Series X|S)", "price": "0.09", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Prey®: Digital Deluxe Edition", "price": "7.3", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Primal Light", "price": "0.4", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Pro Gymnast Simulator", "price": "0.09", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Puyo Puyo Champions", "price": "0.41", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "Quantum Replica", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Quiplash 2 InterLASHional: The Say Anything Party Game!", "price": "0.06", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "RAGE 2: Deluxe Edition", "price": "11.52", "flag": "🇹🇷", "date": "15.11", "status": "" },
  { "name": "RESIDENT EVIL 2 Deluxe Edition", "price": "25.6", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "REZ PLZ", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Railway Empire 2 - Digital Deluxe Edition", "price": "0.86", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "ReCore", "price": "2.5", "flag": "🇦🇷", "date": "", "status": "" },
  { "name": "Red Dead Redemption & Red Dead Redemption 2 Bundle", "price": "9.01", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Red Wings: Aces of the Sky", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Redfall Bite Back Edition", "price": "40.96", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "Regions of Ruin", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Regular Moonstone Pack -- 2,500", "price": "1.8", "flag": "🇦🇷", "date": "01.09", "status": "" },
  { "name": "Remnant II - Deluxe Edition", "price": "5.5", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Remnant II - Ultimate Edition", "price": "7.0", "flag": "🇦🇷", "date": "01.06", "status": "" },
  { "name": "Remnant: From the Ashes - Complete Edition", "price": "1.5", "flag": "🇦🇷", "date": "01.12", "status": "" },
  { "name": "Remoteness", "price": "0.62", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Retro Machina", "price": "0.53", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "RiMS Racing x WRC 10 Xbox One", "price": "1.5", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "RiMS Racing x WRC 10 Xbox Series X|S", "price": "2.25", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Riddled Corpses EX", "price": "0.02", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Rip Them Off", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Rise of Insanity", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Rise of the Third Power", "price": "0.12", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Rise of the Tomb Raider: 20 Year Celebration", "price": "5.11", "flag": "🇦🇷", "date": "01.12", "status": "" },
  { "name": "RoboCop: Rogue City - Alex Murphy Edition", "price": "8.49", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "RoboPhobik", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Rock 'N Racing Grand Prix", "price": "0.14", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Rock 'N Racing Off Road DX", "price": "0.02", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Rogue Legacy", "price": "0.02", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Rogue Stormers & Giana Sisters Bundle", "price": "0.06", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Ruinarch", "price": "1.64", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Rune Factory 4 Special", "price": "0.75", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Ruvato: Original Complex", "price": "0.09", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "S.W.A.N.: Chernobyl Unexplored", "price": "0.07", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "SCARLET NEXUS Deluxe Edition", "price": "1.0", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "SOULVARS", "price": "0.09", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "1.34", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "2.14", "flag": "🇦🇷", "date": "01.01", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "1.11", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "1.6", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "STAR WARS Jedi: Survivor™ Deluxe Edition", "price": "27.2", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "STAR WARS Jedi: Survivor™", "price": "22.4", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "STAR WARS™ Battlefront™ II", "price": "0.28", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "STAR WARS™ Battlefront™ II: Celebration Edition", "price": "0.56", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "STAR WARS™ Battlefront™ Ultimate Edition", "price": "0.16", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "STAR WARS™: Battlefront Classic Collection", "price": "0.27", "flag": "🇦🇷", "date": "14.03", "status": "" },
  { "name": "STAR WARS™: Squadrons", "price": "0.16", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "STORY OF SEASONS: A Wonderful Life", "price": "11.52", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "STORY OF SEASONS: A Wonderful Life", "price": "5.1", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "STORY OF SEASONS: Friends of Mineral Town - Digital Edition", "price": "0.22", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "SWORD ART ONLINE Alicization Lycoris", "price": "0.37", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "SWORD ART ONLINE Last Recollection Deluxe Edition", "price": "12.51", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "SWORD ART ONLINE: FATAL BULLET", "price": "0.28", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Sam & Max Save the World + Beyond Time and Space Bundle", "price": "0.36", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Sapu", "price": "0.06", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Saturnalia", "price": "0.12", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Scorn", "price": "1.17", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Scribblenauts Mega Pack", "price": "0.26", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Secret Agent : Cold War Espionage", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Seek Hearts", "price": "0.13", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Shadowblade Odyssey", "price": "0.02", "flag": "🇦🇷", "date": "02.03", "status": "" },
  { "name": "Shalnor Legends: Sacred Lands", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Shame Legacy Xbox One Edition", "price": "0.08", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Shame Legacy", "price": "0.11", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Shantae: Half-Genie Hero", "price": "0.09", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "She Sees Red Interactive Movie", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "She Wants Me Dead", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Shenmue I & II", "price": "0.12", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Sherlock Holmes Essential Bundle", "price": "1.46", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Sherlock Holmes: Crimes and Punishments + Sherlock Holmes...", "price": "0.96", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Shmups Collection", "price": "0.08", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Shredders - 540INDY Edition", "price": "0.51", "flag": "🇦🇷", "date": "16.03", "status": "" },
  { "name": "Sid Meier’s Civilization® VI Anthology", "price": "16.61", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Sid Meier’s Civilization® VI Platinum Edition", "price": "11.24", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Sifu", "price": "1.53", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Silver Nornir", "price": "0.13", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Simulator Pack: Gas Station Simulator and Treasure Hunter Simulator", "price": "0.31", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Skate 3", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Skyrim Anniversary Edition + Fallout 4 G.O.T.Y Bundle", "price": "20.48", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Skyrim Anniversary Edition + Fallout 4 G.O.T.Y Bundle", "price": "8.45", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Sleepin' Guy Deluxe Edition", "price": "0.06", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Slime Rancher", "price": "0.06", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Slime-san Superslime Edition", "price": "0.06", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Small Moonstone Pack -- 1,200", "price": "0.9", "flag": "🇦🇷", "date": "01.09", "status": "" },
  { "name": "Smalland: Survive the Wilds", "price": "0.53", "flag": "🇦🇷", "date": "08.03", "status": "" },
  { "name": "Smart Moves 2", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Smash Boats Waterlogged Edition", "price": "0.26", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Sniper Elite 5 Complete Edition", "price": "1.57", "flag": "🇦🇷", "date": "01.05", "status": "" },
  { "name": "Sniper Elite 5 Deluxe Edition", "price": "8.0", "flag": "🇦🇷", "date": "01.05", "status": "" },
  { "name": "Snooker 19 Gold Edition", "price": "0.26", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Snooker 19", "price": "0.22", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Snooker Nation Championship", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "SnowRunner - 1-Anniversary Edition", "price": "7.68", "flag": "🇹🇷", "date": "01.05", "status": "" },
  { "name": "SnowRunner - 3-Year Anniversary Edition", "price": "16.0", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Solar Shifter EX", "price": "0.01", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Source of Madness", "price": "0.11", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Space Raiders in Space", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Space Station Sprint", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Sparkle 4 Tales", "price": "0.02", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Sparkle Bundle", "price": "0.16", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "Speed Limit", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Speedway Bundle Stock & Truck", "price": "0.09", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Spirit Hunters: Infinite Horde", "price": "0.12", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Spirit Roots", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Star Hammer: The Vanguard Prophecy", "price": "0.06", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Star Renegades", "price": "0.11", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Starsand", "price": "0.12", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Steam Tactics", "price": "0.06", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "SteamWorld Build & Dig Bundle", "price": "2.46", "flag": "🇦🇷", "date": "29.02", "status": "" },
  { "name": "SteamWorld Build", "price": "2.0", "flag": "🇦🇷", "date": "29.02", "status": "" },
  { "name": "SteamWorld Dig 2", "price": "0.12", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "SteamWorld Dig", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Steel Rats™", "price": "0.02", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Stellaris: Console Edition - Deluxe Edition", "price": "0.55", "flag": "🇦🇷", "date": "16.10", "status": "" },
  { "name": "Street Fighter™ 6 Deluxe Edition", "price": "26.38", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Street Fighter™ 6 Ultimate Edition", "price": "33.25", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Street Fighter™ 6", "price": "18.2", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Strike Team Gladius", "price": "0.27", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Summer in Mara", "price": "0.16", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Summum Aeterna", "price": "1.44", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Sunset Overdrive Deluxe Edition", "price": "1.78", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Super Mega Baseball™ 4", "price": "12.8", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Super Space Serpent SE", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Super Toy Cars 2", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Super Toy Cars", "price": "0.02", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Swordbreaker: Origins (Xbox Series X|S)", "price": "0.06", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Symmetry", "price": "0.03", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Synchro Hedgehogs", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "TT Isle of Man: Ride on the Edge 3", "price": "7.44", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Tacoma", "price": "0.07", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Tales of Arise - Beyond The Dawn Ultimate Edition", "price": "46.05", "flag": "🇹🇷", "date": "16.02", "status": "" },
  { "name": "Tales of Arise - Beyond the Dawn Deluxe Edition", "price": "38.37", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "Tales of Arise - Beyond the Dawn Edition", "price": "28.13", "flag": "🇹🇷", "date": "16.02", "status": "" },
  { "name": "Tales of Kenzera™: ZAU Standard Edition", "price": "7.87", "flag": "🇦🇷", "date": "23.04", "status": "" },
  { "name": "Tales of Vesperia™: Definitive Edition", "price": "0.4", "flag": "🇦🇷", "date": "01.03", "status": "" },
  { "name": "Tandem: A Tale of Shadows", "price": "0.31", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Teenage Mutant Ninja Turtles: Shredder's Revenge - Dimension Shellshock", "price": "0.43", "flag": "🇦🇷", "date": "16.06", "status": "" },
  { "name": "Terraformers & Moonshine Inc - Mars and Moon Bundle", "price": "2.27", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Terraformers & Moonshine Inc - Mars and Moon Complete Bundle", "price": "2.45", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Terraformers + Tin Can - To infinity, and beyond bundle!", "price": "2.44", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Terraformers", "price": "1.64", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "The Ambassador: Fractured Timelines", "price": "0.08", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "The Assembly", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "The Bard's Tale Trilogy", "price": "0.16", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "The Beast Inside (Console Version)", "price": "0.16", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "The Big Con", "price": "0.07", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "The BioWare Bundle", "price": "0.24", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "The Colonists", "price": "0.15", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "The Dark Pictures Anthology: Season One", "price": "4.75", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "The Diabolical Trilogy", "price": "0.09", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "The Elder Scrolls Online Collection: Gold Road", "price": "27.0", "flag": "🇦🇷", "date": "18.01", "status": "" },
  { "name": "The Elder Scrolls Online Collection: Necrom", "price": "21.0", "flag": "🇦🇷", "date": "22.06", "status": "" },
  { "name": "The Elder Scrolls Online Deluxe Collection: Gold Road", "price": "35.2", "flag": "🇦🇷", "date": "18.01", "status": "" },
  { "name": "The Elder Scrolls Online Deluxe Collection: Necrom", "price": "31.8", "flag": "🇦🇷", "date": "22.06", "status": "" },
  { "name": "The Elder Scrolls V: Skyrim Anniversary Edition", "price": "12.29", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "The Escapists & The Escapists: The Walking Dead", "price": "0.08", "flag": "🇦🇷", "date": "04.03", "status": "" },
  { "name": "The Escapists + The Escapists 2", "price": "0.16", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "The Escapists", "price": "0.06", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "The Escapists: Supermax Edition", "price": "0.31", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "The Eternal Cylinder", "price": "0.11", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "The Evil Within Digital Bundle", "price": "2.59", "flag": "🇹🇷", "date": "30.12", "status": "" },
  { "name": "The Forbidden Arts", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "The Gap", "price": "0.87", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "The Hand Of Merlin", "price": "0.9", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "The Jackbox Party Quadpack", "price": "0.7", "flag": "🇦🇷", "date": "31.12", "status": "" },
  { "name": "The Jackbox Party Starter", "price": "0.12", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "The Journey Down Trilogy", "price": "0.82", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "The Journey Down: Chapter One", "price": "0.16", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "The Journey Down: Chapter Three", "price": "0.34", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "The King's Bird", "price": "0.07", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "The LEGO® Games Bundle", "price": "0.75", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "The LEGO® Movie Videogame-Bundle", "price": "1.24", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "The Lamplighters League - Deluxe Edition", "price": "0.78", "flag": "🇦🇷", "date": "01.04", "status": "" },
  { "name": "The Last Campfire", "price": "0.05", "flag": "🇦🇷", "date": "28.02", "status": "" },
  { "name": "The Lord of the Rings: Adventure Card Game - Definitive Edition", "price": "0.12", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "The Lord of the Rings: Gollum™ - Precious Edition", "price": "7.95", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "The Lucid Dreamer Bundle", "price": "1.18", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "The Medium + Observer: System Redux + DARQ: Complete Edition — Bundle", "price": "0.81", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "The Oregon Trail", "price": "4.19", "flag": "🇦🇷", "date": "02.03", "status": "" },
  { "name": "The Outer Worlds: Board-Approved Bundle", "price": "13.8", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "The Shadow Warrior Trilogy", "price": "1.56", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "The Sinking City Xbox Series X|S", "price": "0.73", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "The Solitaire Conspiracy", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "The Walking Dead: A New Frontier - The Complete Season (Episodes 1-5)", "price": "0.07", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "The Walking Dead: A New Frontier", "price": "0.21", "flag": "🇦🇷", "date": "01.11", "status": "" },
  { "name": "The Walking Dead: Michonne - The Complete Season", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "The Walking Dead: Michonne", "price": "0.07", "flag": "🇦🇷", "date": "01.11", "status": "" },
  { "name": "The Wanderer: Frankenstein's Creature", "price": "0.08", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "The Witness", "price": "0.12", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "The end is nahual: If I may say so", "price": "0.09", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Thief of Thieves: Season One", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "This War of Mine - Complete Edition", "price": "0.38", "flag": "🇦🇷", "date": "16.05", "status": "" },
  { "name": "Thumper", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Thunder Ray Origins", "price": "1.5", "flag": "🇹🇷", "date": "07.03", "status": "" },
  { "name": "Time Loader", "price": "0.08", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Tiny Hands Adventure", "price": "0.02", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Tip Top: Don’t fall!", "price": "0.06", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Titanfall® 2", "price": "0.12", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Titanfall® 2: Ultimate Edition", "price": "0.15", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Tom Clancy's Rainbow Six® Extraction United Bundle", "price": "5.5", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Tom Clancy's Rainbow Six® Siege Operator Edition", "price": "9.0", "flag": "🇦🇷", "date": "16.06", "status": "" },
  { "name": "Tom Clancy's Rainbow Six® Siege Ultimate Edition", "price": "12.0", "flag": "🇦🇷", "date": "12.03", "status": "" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Ultimate Edition", "price": "4.75", "flag": "🇦🇷", "date": "01.08", "status": "" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Year 2 Gold Edition", "price": "2.0", "flag": "🇦🇷", "date": "01.08", "status": "" },
  { "name": "Tom Clancy’s The Division® Franchise Bundle", "price": "0.87", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Toro", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Totally Reliable Delivery Service Deluxe Edition", "price": "0.34", "flag": "🇦🇷", "date": "01.12", "status": "" },
  { "name": "Trailblazers", "price": "0.07", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Trailmakers - Space Upgrade", "price": "0.47", "flag": "🇦🇷", "date": "01.02", "status": "" },
  { "name": "Trailmakers Deluxe Edition", "price": "0.54", "flag": "🇦🇷", "date": "01.02", "status": "" },
  { "name": "Train Sim World® 4: Austrian Regional Edition", "price": "4.19", "flag": "🇹🇷", "date": "01.08", "status": "" },
  { "name": "Train Sim World® 4: Deluxe Edition", "price": "14.0", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Train Sim World® 4: Flying Scotsman Centenary Edition", "price": "6.5", "flag": "🇦🇷", "date": "01.08", "status": "" },
  { "name": "Train Sim World® 4: German Regional Edition", "price": "4.19", "flag": "🇹🇷", "date": "01.08", "status": "" },
  { "name": "Train Sim World® 4: Special Edition", "price": "21.0", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Train Sim World® 4: UK Regional Edition", "price": "4.19", "flag": "🇹🇷", "date": "01.08", "status": "" },
  { "name": "Train Sim World® 4: USA Regional Edition", "price": "4.19", "flag": "🇹🇷", "date": "01.08", "status": "" },
  { "name": "Train Valley: Console Edition", "price": "0.38", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Tram Simulator Urban Transit", "price": "1.57", "flag": "🇦🇷", "date": "21.03", "status": "" },
  { "name": "Treachery in Beatdown City: Ultra Remix", "price": "0.93", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Tri6: Infinite +", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Troublemaker: Raise Your Gang", "price": "0.21", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "True Survivors Bundle", "price": "20.29", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Trulon: The Shadow Engine", "price": "0.02", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Turn-Based Battle Deluxe Bundle: The Amazing American Circus & Legend of Keepers", "price": "1.95", "flag": "🇦 🇷", "date": "05.03", "status": "" },
  { "name": "Turnip Boy Robs a Bank Pre-Release", "price": "0.24", "flag": "🇦🇷", "date": "17.04", "status": "" },
  { "name": "Tux and Fanny", "price": "0.09", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Tyd wag vir Niemand", "price": "0.02", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Typoman", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "UFC® 5 Deluxe Edition", "price": "13.2", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "UFC® 5", "price": "9.0", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Ultra Foodmess Deluxe", "price": "0.06", "flag": "🇦🇷", "date": "28.02", "status": "" },
  { "name": "Under Leaves", "price": "0.08", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "0.17", "flag": "🇦🇷", "date": "30.12", "status": "" },
  { "name": "Unravel Yarny Bundle", "price": "0.2", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Urban Trial Tricky Deluxe Edition", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Valkyria Chronicles 4 DLC Bundle", "price": "1.03", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "Valkyria Chronicles 4", "price": "0.76", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "Verdun", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Verlore Tyd en Drome - Bundle", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Vermintide - Digital Value Pack", "price": "0.5", "flag": "🇦🇷", "date": "07.03", "status": "" },
  { "name": "Virtual Families 3: Our Country Home", "price": "0.32", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Virtual Families Cook Off: Chapter 1 Let's Go Flippin'", "price": "0.06", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Viva Games Collection", "price": "0.19", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Vosaria: Lair of the Forgotten", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "WILD HEARTS™ Karakuri Edition", "price": "27.2", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "WILD HEARTS™ Standard Edition", "price": "22.4", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "WRC 2023", "price": "16.32", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "0.8", "flag": "🇦🇷", "date": "31.08", "status": "" },
  { "name": "WRC Collection Vol. 2 Xbox One", "price": "1.25", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "WRC Collection Vol. 2 Xbox Series X|S", "price": "1.12", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Wandersong", "price": "0.09", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Warhammer 40,000: Darktide - Imperial Edition", "price": "5.0", "flag": "🇦🇷", "date": "01.10", "status": "" },
  { "name": "Wasteland 3 (PC) Colorado Collection", "price": "1.8", "flag": "🇦🇷", "date": "01.10", "status": "" },
  { "name": "Wasteland 3 Colorado Collection", "price": "11.24", "flag": "🇹🇷", "date": "01.10", "status": "" },
  { "name": "Watch Dogs®2 - Deluxe Edition", "price": "3.4", "flag": "🇦🇷", "date": "16.07", "status": "" },
  { "name": "Watch Dogs®2 - Gold Edition", "price": "4.0", "flag": "🇦🇷", "date": "16.07", "status": "" },
  { "name": "We Are The Dwarves", "price": "0.09", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "We Happy Few Digital Deluxe", "price": "1.7", "flag": "🇦🇷", "date": "16.01", "status": "" },
  { "name": "We. The Revolution", "price": "0.07", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Weedcraft Inc + Terraformers - Aim High Bundle", "price": "2.45", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Weird West", "price": "1.22", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Werewolf Pinball", "price": "0.03", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "West of Dead: Path of the Crow Edition", "price": "0.06", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "What The Dub?!", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Where the Water Tastes Like Wine: Xbox Edition", "price": "0.07", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Whispering Willows", "price": "0.03", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "White Shadows", "price": "0.12", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Whitestone", "price": "0.12", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Wholesome Adventure Bundle", "price": "1.6", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "WildTrax Racing", "price": "0.07", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Windscape", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Wired Italian Adventure Bundle", "price": "0.43", "flag": "🇦🇷", "date": "01.01", "status": "" },
  { "name": "Wizard of Legend", "price": "0.06", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Wolfenstein: Alt History Collection", "price": "12.8", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Wolfenstein: Youngblood Deluxe Edition", "price": "5.6", "flag": "🇹🇷", "date": "18.02", "status": "" },
  { "name": "Wolfenstein® II: The New Colossus™ Digital Deluxe Edition", "price": "7.68", "flag": "🇹🇷", "date": "13.06", "status": "" },
  { "name": "Wolfenstein®: The Two-Pack", "price": "4.06", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "World War Z: Aftermath - Deluxe Edition", "price": "6.4", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Worlds of Magic: Planar Conquest", "price": "0.11", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Worms Battlegrounds + Worms W.M.D", "price": "0.16", "flag": "🇦🇷", "date": "04.03", "status": "" },
  { "name": "X-Morph: Defense Complete Edition", "price": "0.06", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "X-Pack", "price": "0.06", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Xenon Valkyrie+", "price": "0.02", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Yaga", "price": "0.57", "flag": "🇹🇷", "date": "05.03", "status": "" },
  { "name": "Yakuza: Like a Dragon Hero Edition", "price": "3.32", "flag": "🇹🇷", "date": "01.03", "status": "" },
  { "name": "Yasai Ninja", "price": "0.04", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "YesterMorrow", "price": "0.07", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Yooka-Laylee", "price": "0.05", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Yuoni", "price": "0.08", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Ziggurat", "price": "0.07", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Zombie Driver Ultimate Edition", "price": "0.03", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "Zombie Vikings", "price": "0.01", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Greenhorn Bundle", "price": "0.57", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Master Hunter Bundle", "price": "0.86", "flag": "🇦🇷", "date": "05.03", "status": "" },
  { "name": "theHunter: Call of the Wild™ - Seasoned Hunter Bundle", "price": "0.71", "flag": "🇦🇷", "date": "01.06", "status": "" },
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
    a = 60
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
    a = 110
  } else if (percent > 1 && percent <= 5) {
    a = 85
  } else if (percent > 5 && percent <= 10) {

    a = 50
  } else if (percent > 10 && percent <= 15) {

    a = 50
  } else if (percent > 15 && percent <= 20) {

    a = 45
  } else if (percent > 20 && percent <= 25) {

    a = 45
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

  item.innerHTML = `${a.name}:${res}&#8381 ${flag} до ${a.date} ${a.status}`
  // 
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



