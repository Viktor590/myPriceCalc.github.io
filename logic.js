const input = document.querySelector('.input');
const output = document.querySelector('.output-res');
const list = document.querySelector('.list')
const showBtn = document.querySelector('.show')


showBtn.addEventListener('click', () => {
  showBtn.classList.contains('active') ?
    hiddenMenu() : showMenu()
})

let usd = 85;

const arr = [
  { "name": "7th Sector", "price": 0.7011306966869105, "region": "🇦🇷", "status": " GOLD", "data": "28.03" },
  { "name": "80's OVERDRIVE", "price": 0.14022613933738212, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "8Floor Strategic Collection", "price": 0.28045227867476424, "region": "🇦🇷", "status": " GOLD", "data": "28.03" },
  { "name": "A Space for the Unbound", "price": 2.3696682464454977, "region": "🇹🇷", "status": "", "data": "23.03" },
  { "name": "ACE COMBAT™ 7: SKIES UNKNOWN - TOP GUN: Maverick Ultimate Edition", "price": 3.850293783636992, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "ARCADE GAME SERIES: DIG DUG", "price": 0.14664494149014962, "region": "🇦🇷", "status": " GOLD", "data": "28.03" },
  { "name": "ARCADE GAME SERIES: PAC-MAN", "price": 0.14664494149014962, "region": "🇦🇷", "status": " GOLD", "data": "28.03" },
  { "name": "Aborigenus", "price": 0.12096973287907964, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Adios", "price": 0.6952056485458945, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Aeon Must Die!", "price": 3.4027057719843974, "region": "🇦🇷", "status": " GOLD", "data": "28.03" },
  { "name": "Aerial_Knight's Never Yield", "price": 0.33970276008492567, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Aery - Little Bird Adventure", "price": 0.27156470646324, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Aery - Vikings", "price": 0.46975756678023006, "region": "🇦🇷", "status": " GOLD", "data": "28.03" },
  { "name": "Agatha Christie - Hercule Poirot: The First Cases", "price": 0.8472818841653088, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Aircraft Evolution", "price": 0.35056534834345526, "region": "🇦🇷", "status": " GOLD", "data": "28.03" },
  { "name": "Alterity Experience", "price": 0.5609045573495285, "region": "🇦🇷", "status": "", "data": "01.04" },
  { "name": "Anthem™", "price": 0.7895126647904015, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Anthem™: Legion of Dawn Edition", "price": 1.110452772428776, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Anuchard", "price": 0.3486890830988002, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Arise: A simple story", "price": 1.8694049499736705, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Arkanoid Eternal Battle", "price": 1.4827432972892904, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Assassin's Creed IV Black Flag", "price": 1.1321748288572935, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Assassin's Creed Legendary Collection", "price": 11.107984002370019, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Assassin's Creed® Odyssey - GOLD EDITION", "price": 4.627709475139485, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Assassin's Creed® Odyssey - ULTIMATE EDITION", "price": 5.553498247173258, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Assassin's Creed® Odyssey", "price": 2.837851182540858, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Assassin's Creed® Origins - DELUXE EDITION", "price": 3.3933244457611216, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Assassin's Creed® Origins - GOLD EDITION", "price": 4.627709475139485, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Assassin's Creed® Origins", "price": 2.837851182540858, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Assassin's Creed® Rogue", "price": 0.6501259072729966, "region": "🇦🇷", "status": " GOLD", "data": "28.03" },
  { "name": "Assassin's Creed® Valhalla Complete Edition", "price": 17.279662272255962, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Assassin's Creed® Valhalla Deluxe Edition", "price": 8.145311805658421, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Assassin's Creed® Valhalla Ragnarök Edition", "price": 11.058451816745656, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Assassin's Creed® Valhalla", "price": 5.864168271367205, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Awarded Platformer Bundle", "price": 0.8109909643015849, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "BRUTAL 2URVIVE Bundle", "price": 0.35056534834345526, "region": "🇦🇷", "status": " GOLD", "data": "28.03" },
  { "name": "Batman: Return to Arkham", "price": 1.2331506443489852, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Batman™: Arkham Knight", "price": 1.0852713178294575, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Batora: Lost Haven", "price": 3.718362711697033, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Battle Brothers - Complete Edition", "price": 2.5003703155088135, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Battlefield 4", "price": 0.689527477410754, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Battlefield V Definitive Edition", "price": 4.319113217794895, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Battlefield™ 1 Revolution", "price": 1.3565891472868217, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Battlefield™ 1", "price": 0.8623413815237249, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Battlefield™ 2042 Ultimate Edition Xbox One & Xbox Series...", "price": 28.43800918382462, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Battlefield™ 2042 Xbox One & Xbox Series X|S", "price": 10.320695102685626, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Battlefield™ 2042 Xbox One", "price": 11.058361724189009, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Battlefield™ Hardline Standard Edition", "price": 0.689527477410754, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Battlefield™ Hardline Ultimate Edition", "price": 1.3565891472868217, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Battlefield™ V Standard Edition", "price": 2.837851182540858, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Big Pharma", "price": 0.4236409420826544, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "BigChick", "price": 0.3110650274033476, "region": "🇦🇷", "status": "", "data": "23.03" },
  { "name": "Blacksad: Under the Skin", "price": 0.7050807287809214, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Blade of Darkness", "price": 0.8453068681183034, "region": "🇦🇷", "status": "", "data": "23.03" },
  { "name": "Blasphemous", "price": 0.4431442255468326, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Blizzard® Arcade Collection", "price": 3.1847133757961785, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Book Quest", "price": 0.2962524070508073, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Bound by Flame", "price": 0.14713869550190095, "region": "🇦🇷", "status": " GOLD", "data": "28.03" },
  { "name": "Bridge Constructor Bundle", "price": 0.7369278625388831, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "CODE VEIN", "price": 2.2211524218634278, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Call of Duty®: Black Ops Cold War - Cross-Gen Bundle", "price": 12.638127684787438, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Call of Duty®: Vanguard - Cross-Gen Bundle", "price": 15.550782600108626, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Call of Duty®: WWII - Digital Deluxe", "price": 9.899947340705635, "region": "🇹🇷", "status": " GOLD", "data": "28.03" },
  { "name": "Call of Duty®: WWII - Gold Edition", "price": 2.9312694415642127, "region": "🇦🇷", "status": " GOLD", "data": "28.03" },
  { "name": "Cars 3: Driven to Win", "price": 1.1102058954229004, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Circa Infinity", "price": 0.1846640003950032, "region": "🇦🇷", "status": " GOLD", "data": "28.03" },
  { "name": "Citizens of Space", "price": 0.37426554090751984, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Clouzy", "price": 0.5283167925739397, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Coffee Talk Episode 2: Hibiscus and Butterfly", "price": 2.014218009478673, "region": "🇹🇷", "status": "", "data": "23.03" },
  { "name": "Couch Co-Op: Urban Flow + Knights & Guns", "price": 0.45425369081123784, "region": "🇦🇷", "status": "", "data": "31.03" },
  { "name": "Crash Bandicoot™ - Crashiversary Bundle", "price": 9.00212314225053, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Crash Bandicoot™ - Quadrilogy Bundle", "price": 5.897397916358071, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Crash Bandicoot™ 4: It’s About Time", "price": 4.886535328099541, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Crash Bandicoot™ Bundle - N. Sane Trilogy + CTR Nitro-Fueled", "price": 4.318619463783143, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Crash Bandicoot™ N. Sane Trilogy", "price": 2.368044240359453, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Crashbots", "price": 0.21033920900607317, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Crash™ + Spyro™ Triple Play Bundle", "price": 9.873105218979903, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Crash™ Team Racing Nitro-Fueled + Spyro™ Game Bundle", "price": 4.318619463783143, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Crash™ Team Racing Nitro-Fueled - Nitros Oxide Edition", "price": 5.182688984347998, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Cricket 22", "price": 1.7627018219523034, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "DC's Justice League: Cosmic Chaos", "price": 23.078803140275514, "region": "🇦🇷", "status": "", "data": "24.03" },
  { "name": "DEATHLOOP", "price": 6.515923566878981, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "DOOM Eternal Deluxe Edition", "price": 5.538290623611317, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "DRAGON BALL FIGHTERZ - Ultimate Edition", "price": 7.510268562401265, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "DRAGON BALL Z: KAKAROT Legendary Edition", "price": 31.569246972090575, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Dead Space Digital Deluxe Edition", "price": 41.471386955019014, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Deathsmiles I・II", "price": 15.796178343949043, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Debtor: Enhanced Edition", "price": 0.2592208561694564, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Deep Diving Adventures", "price": 0.35056534834345526, "region": "🇦🇷", "status": " GOLD", "data": "28.03" },
  { "name": "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles", "price": 7.403841406211425, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Dishonored 2", "price": 1.3815237248802648, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Dishonored®: Death of the Outsider™ Deluxe Bundle", "price": 3.9979262331506447, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Dragon Age™: Inquisition - Game of the Year Edition", "price": 2.0073723012111637, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Dragon Blaze", "price": 4.8150891225991215, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "EA SPORTS™ FIFA 23 Standard Edition Xbox One", "price": 18.430226434965775, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "EA SPORTS™ FIFA 23 Standard Edition Xbox Series X|S", "price": 21.06319115323855, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "EA SPORTS™ FIFA 23 Ultimate Edition Xbox One & Xbox Series X|S", "price": 26.3291205897841, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "El Hijo - A Wild West Tale", "price": 0.9815829753616748, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Enter Digiton: Heart of Corruption", "price": 0.22712684540561892, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Escape Dead Island", "price": 0.19256406458302475, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "EvilUP", "price": 0.33575272799091493, "region": "🇦🇷", "status": "", "data": "25.03" },
  { "name": "F1® 22 Champions Edition Xbox One & Xbox Series X|S", "price": 6.294623018812027, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "F1® 22 Xbox One", "price": 4.73929788179529, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "F1® 22 Xbox Series X|S", "price": 5.5539920011850095, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "FAR CRY 4 GOLD EDITION", "price": 0.8619463783143237, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "FIFA 22 Xbox One", "price": 21.06319115323855, "region": "🇹🇷", "status": "", "data": "30.12" },
  { "name": "FIFA 22 Xbox Series X|S", "price": 23.590837282780413, "region": "🇹🇷", "status": "", "data": "30.12" },
  { "name": "Fantasy Dash", "price": 0.07406310176270182, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Far Cry Classic", "price": 0.14664494149014962, "region": "🇦🇷", "status": " GOLD", "data": "28.03" },
  { "name": "Far Cry® 4", "price": 0.6650866538290623, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Far Cry® 5", "price": 1.702710709524515, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Far Cry® 6 Deluxe Edition", "price": 11.848615019997036, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Far Cry® 6 Game of the Year Edition", "price": 17.279662272255962, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Far Cry® 6 Gold Edition", "price": 11.848615019997036, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Far Cry® 6", "price": 7.404828914234928, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Far Cry® New Dawn", "price": 1.4802745272305338, "region": "🇦🇷", "status": " GOLD", "data": "28.03" },
  { "name": "Far Cry®5 Gold Edition", "price": 2.4433417271515334, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Flashback", "price": 0.19651409667703548, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Fluffy Horde + Cyber Protocol", "price": 1.121809114699057, "region": "🇦🇷", "status": "", "data": "25.03" },
  { "name": "GRID Legends", "price": 6.319063842393719, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "GRID Legends: Deluxe Edition", "price": 8.39283069174937, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "GUNBARICH", "price": 4.8150891225991215, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "GUNBIRD 2", "price": 4.8150891225991215, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "GUNBIRD", "price": 4.8150891225991215, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Gears of War 4", "price": 1.315955766192733, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Geometric Sniper", "price": 0.13800424628450106, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Golf Club: Wasteland", "price": 0.21033920900607317, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Golf With Your Friends", "price": 1.5911223028687107, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Gotham Knights", "price": 15.79815335999605, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Grand Theft Auto Online", "price": 4.935071347454698, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Grand Theft Auto V (Xbox One & Xbox Series X|S)", "price": 10.409162717219589, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Grand Theft Auto V: Premium Edition & Great White Shark C...", "price": 4.739336492890995, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Grand Theft Auto V: Premium Edition & Megalodon Shark Car...", "price": 7.951553449183781, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Grand Theft Auto V: Premium Edition & Whale Shark Card Bu...", "price": 5.476566614007373, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "GreedFall - Gold Edition (Windows 10)", "price": 3.2572952155236266, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Hard Platformers Pack: Super Cyborg and Dead Dungeon", "price": 0.28390855675702364, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Heidelberg 1693", "price": 0.5283167925739397, "region": "🇦🇷", "status": " GOLD", "data": "28.03" },
  { "name": "Hell Let Loose", "price": 8.637238927566287, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Hellblade: Senua's Sacrifice", "price": 0.4431442255468326, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Hoa", "price": 0.4226534340591517, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Hunt Ducks 4", "price": 0.07406310176270182, "region": "🇦🇷", "status": "", "data": "25.03" },
  { "name": "Hunting Simulator 2: Elite Edition Xbox One", "price": 0.9865205154791883, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Hunting Simulator 2: Elite Edition Xbox Series X|S", "price": 0.9865205154791883, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "I, AI", "price": 0.35056534834345526, "region": "🇦🇷", "status": " GOLD", "data": "28.03" },
  { "name": "Ikenfell", "price": 0.8413568360242927, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Immortals Fenyx Rising™ Gold Edition", "price": 5.430306621241297, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Immortals Fenyx Rising™", "price": 3.5540413765861847, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Injustice™ 2", "price": 0.7401372636152669, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "It Takes Two - Digital Version", "price": 10.366365476719498, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Journey to the Savage Planet", "price": 3.9480570779637585, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Joy Ball Adventure", "price": 0.07406310176270182, "region": "🇦🇷", "status": "", "data": "31.03" },
  { "name": "Just Dance® 2023 Edition", "price": 13.164823591363877, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "KLONOA Phantasy Reverie Series", "price": 7.403841406211425, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Killer Instinct: Definitive Edition", "price": 4.936305732484076, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Kraken Academy!!", "price": 0.5056041080333777, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "L.A. Noire", "price": 3.4538093122006615, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "LEGO® Batman™ 3: Beyond Gotham", "price": 0.6776773811287217, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "LEGO® CITY Undercover", "price": 0.9865205154791883, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "LEGO® DC Super-Villains", "price": 0.9376388683158051, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "LEGO® Marvel Super Heroes 2", "price": 1.480027650224658, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "LEGO® Marvel's Avengers", "price": 1.3565891472868217, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "LEGO® The Hobbit™", "price": 1.4139020537124805, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "LEGO® Worlds", "price": 0.7890189107786502, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "LUNARK", "price": 1.262035254036439, "region": "🇦🇷", "status": "", "data": "30.03" },
  { "name": "Later Daters", "price": 0.7396435096035155, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Lawn Mowing Simulator", "price": 2.2218436774798795, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Light & Dark Bundle", "price": 1.1072433713523921, "region": "🇦🇷", "status": "", "data": "02.11" },
  { "name": "Lila's Tale and the Hidden Forest", "price": 0.27650224658075345, "region": "🇦🇷", "status": "", "data": "24.03" },
  { "name": "Limb Hunter", "price": 0.2073766849355651, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Little Mage Adventure", "price": 0.07406310176270182, "region": "🇦🇷", "status": "", "data": "10.04" },
  { "name": "Logic Games Bundle", "price": 0.6794055201698513, "region": "🇦🇷", "status": "", "data": "31.03" },
  { "name": "Lord Winklebottom Investigates", "price": 1.070458697476917, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Lost Artifacts", "price": 0.28045227867476424, "region": "🇦🇷", "status": " GOLD", "data": "28.03" },
  { "name": "Lost Artifacts: Golden Island", "price": 0.28045227867476424, "region": "🇦🇷", "status": " GOLD", "data": "28.03" },
  { "name": "Lost in Random™", "price": 1.776526934281341, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "MY HERO ONE'S JUSTICE 2", "price": 3.084728188416531, "region": "🇦🇷", "status": " GOLD", "data": "28.03" },
  { "name": "Mad Max", "price": 0.9862736384733126, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Madden NFL 22 Xbox One", "price": 19.006073174344543, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Madden NFL 22 Xbox Series X|S", "price": 22.116723448378018, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Madden NFL 23 All Madden Edition Xbox One & Xbox Series X|S", "price": 15.69989631165753, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Madden NFL 23 Xbox One", "price": 25.276255369574876, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Madden NFL 23 Xbox One", "price": 9.47859576359058, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Madden NFL 23 Xbox Series X|S", "price": 11.107984002370019, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Madden NFL 23 Xbox Series X|S", "price": 29.621290672986717, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Mahjong Adventure DX", "price": 0.22712684540561892, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Mass Effect™ Legendary Edition", "price": 9.47859576359058, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Meet Your Maker: Deluxe Edition", "price": 13.771293141756777, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Memories of Mars", "price": 0.35056534834345526, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Microsoft 365 Family", "price": 0.0, "region": "🇦🇷", "status": "", "data": "01.12" },
  { "name": "Microsoft 365 Family", "price": 0.0, "region": "🇹🇷", "status": "", "data": "01.12" },
  { "name": "Microsoft 365 Personal", "price": 0.0, "region": "🇦🇷", "status": "", "data": "01.12" },
  { "name": "Microsoft 365 Personal", "price": 0.0, "region": "🇹🇷", "status": "", "data": "01.12" },
  { "name": "Middle-earth™: Shadow of War™", "price": 1.0361427936601983, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Midnight Fight Express", "price": 1.0516960450303658, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Milky Way Prince - The Vampire Star", "price": 0.6339801510887276, "region": "🇦🇷", "status": " GOLD", "data": "28.03" },
  { "name": "Minemaze", "price": 0.07406310176270182, "region": "🇦🇷", "status": "", "data": "31.03" },
  { "name": "Mirror's Edge™ Catalyst", "price": 0.36908112378413077, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Monster Energy Supercross - The Official Videogame 4", "price": 2.2211524218634278, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Monster Energy Supercross 4 - Special Edition - Xbox Series X|S", "price": 3.702414457117464, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Monster Energy Supercross 4 - Special Edition", "price": 3.702414457117464, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Monster Energy Supercross 4 - Xbox Series X|S", "price": 2.2211524218634278, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Monster Sanctuary", "price": 1.5535969979756084, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Mortal Kombat 11", "price": 2.220905544857552, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Mortal Kombat X", "price": 1.3565891472868217, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "MotoGP™21 - Xbox Series X|S", "price": 1.4805214042364094, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "MotoGP™21", "price": 1.4805214042364094, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Moving Out", "price": 1.480027650224658, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Mr. DRILLER DrillLand", "price": 0.703001579778831, "region": "🇹🇷", "status": " GOLD", "data": "28.03" },
  { "name": "Murder Diaries", "price": 0.45573495284649185, "region": "🇦🇷", "status": " GOLD", "data": "28.03" },
  { "name": "NAMCO MUSEUM® ARCHIVES Vol 2", "price": 0.703001579778831, "region": "🇹🇷", "status": " GOLD", "data": "28.03" },
  { "name": "NARUTO SHIPPUDEN™: Ultimate Ninja® STORM 4 ROAD TO BORUTO", "price": 1.3691416535018432, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "NARUTO TO BORUTO: SHINOBI STRIKER", "price": 0.9870142694909396, "region": "🇦🇷", "status": " GOLD", "data": "28.03" },
  { "name": "NARUTO™: Ultimate Ninja® STORM", "price": 0.49276650372784275, "region": "🇦🇷", "status": " GOLD", "data": "28.03" },
  { "name": "NHL® 23 X-Factor Edition Xbox One & Xbox Series X|S", "price": 21.06319115323855, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "NHL® 23 Xbox One", "price": 14.744075829383888, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "NHL® 23 Xbox Series X|S", "price": 16.85044760400211, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Need for Speed™ Unbound Palace Edition", "price": 25.919616846886882, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Need for Speed™ Unbound", "price": 22.21646175875179, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "New Tales from the Borderlands: Deluxe Edition", "price": 15.771458662453924, "region": "🇹🇷", "status": " GOLD", "data": "28.03" },
  { "name": "Newfound Courage", "price": 0.32094010763837455, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Night in the Woods", "price": 0.7011306966869105, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Ninja Warrior Epic Quest", "price": 0.17281390411297093, "region": "🇦🇷", "status": "", "data": "31.05" },
  { "name": "No Longer Home", "price": 0.4226534340591517, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Not for Broadcast Deluxe Edition", "price": 2.550733224707451, "region": "🇦🇷", "status": "", "data": "23.03" },
  { "name": "ONE PUNCH MAN: A HERO NOBODY KNOWS Deluxe Edition", "price": 2.954186413902054, "region": "🇹🇷", "status": " GOLD", "data": "28.03" },
  { "name": "OddBallers™", "price": 8.143238038809065, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Outbreak: Lost Hope", "price": 0.1846640003950032, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Overcooked! 2", "price": 0.30736187231521256, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "PAYDAY 2 - CRIMEWAVE EDITION - THE BIG SCORE Game Bundle", "price": 0.49276650372784275, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "PGA TOUR 2K23 Deluxe Edition", "price": 21.7232015010122, "region": "🇦🇷", "status": " GOLD", "data": "28.03" },
  { "name": "Paper Ghost Stories: 7PM", "price": 0.0715943317039451, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Paradise Marsh", "price": 0.5609045573495285, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Pillars of Eternity II: Deadfire - Ultimate Edition", "price": 1.0603367402360144, "region": "🇦🇷", "status": " GOLD", "data": "28.03" },
  { "name": "Plants vs. Zombies Garden Warfare", "price": 0.36908112378413077, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Plants vs. Zombies: Battle for Neighborville™ Deluxe Edition", "price": 1.702710709524515, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Plants vs. Zombies: Battle for Neighborville™", "price": 1.3323952007110058, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Plants vs. Zombies™ Garden Warfare 2", "price": 0.36908112378413077, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Portal of Evil: Stolen Runes", "price": 0.25675208611069966, "region": "🇦🇷", "status": " GOLD", "data": "28.03" },
  { "name": "Potata: fairy flower", "price": 0.5283167925739397, "region": "🇦🇷", "status": " GOLD", "data": "28.03" },
  { "name": "Prototype® Biohazard Bundle", "price": 1.183528366167975, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Prototype®2", "price": 0.8872759591171677, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Puyo Puyo Champions", "price": 0.24095195773465658, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Puyo Puyo™ Tetris® 2", "price": 1.8503431590381672, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Quantum Break", "price": 0.7147089320100726, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "RIDE 3 - Gold Edition", "price": 1.0361427936601983, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "RIDE 3", "price": 0.7398903866093912, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Retro Tank Arcade", "price": 0.07406310176270182, "region": "🇦🇷", "status": "", "data": "02.04" },
  { "name": "RiMS Racing Xbox One", "price": 4.146052436676048, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "RiMS Racing Xbox Series X|S", "price": 4.146052436676048, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Riders Republic Ultimate Edition", "price": 14.81113909050511, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Riders Republic™ Gold Edition", "price": 11.848615019997036, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Rock of Ages 2: Bigger & Boulder™", "price": 0.14713869550190095, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Rogue Explorer", "price": 0.22712684540561892, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Rogue Lords", "price": 1.059102355206636, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Roguebook Xbox One", "price": 0.8862884510936652, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Roguebook Xbox Series X|S", "price": 1.059102355206636, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Rugby 22 Xbox One", "price": 8.885597195477212, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Rugby 22 Xbox Series X|S", "price": 8.885597195477212, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Rush Rally Origins", "price": 0.6675554238878191, "region": "🇦🇷", "status": " GOLD", "data": "28.03" },
  { "name": "Ryse: Legendary Edition", "price": 0.6159581296598035, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "SCARLET NEXUS Deluxe Edition", "price": 4.5945234333859934, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "SEGA® Genesis Classics™", "price": 0.36908112378413077, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "SOL DIVIDE -SWORD OF DARKNESS-", "price": 4.8150891225991215, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "SONIC FORCES™ Digital Standard Edition", "price": 2.8366167975114798, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "SOULCALIBUR VI Deluxe Edition", "price": 3.7993680884676153, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": 0.9376388683158051, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": 8.438749814842245, "region": "🇦🇷", "status": "", "data": "01.01" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": 0.7895126647904015, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": 6.316101318323212, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "STAR WARS™ Battlefront™ II", "price": 1.2943761418061521, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "STAR WARS™ Battlefront™ II: Celebration Edition", "price": 2.2206586678516764, "region": "🇦ata�", "status": "", "data": "28.03" },
  { "name": "STAR WARS™ Battlefront™ Ultimate Edition", "price": 0.6159581296598035, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "STAR WARS™: Squadrons", "price": 1.8508369130499187, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "STEEP", "price": 0.5542388781908852, "region": "🇦🇷", "status": " GOLD", "data": "28.03" },
  { "name": "STELLATUM", "price": 0.35056534834345526, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "STRIKERS 1945 II", "price": 4.8150891225991215, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "STRIKERS 1945 III", "price": 4.8150891225991215, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "STRIKERS 1945", "price": 4.8150891225991215, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "SWORD ART ONLINE Alicization Lycoris Deluxe Edition", "price": 9.503036587172272, "region": "🇦🇷", "status": " GOLD", "data": "28.03" },
  { "name": "Samurai Aces III: Sengoku Cannon", "price": 4.8150891225991215, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Samurai Aces", "price": 4.8150891225991215, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Scribblenauts Showdown", "price": 0.5920110600898633, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Sentry Paragon", "price": 0.27650224658075345, "region": "🇦🇷", "status": "", "data": "22.03" },
  { "name": "Session: Skate Sim", "price": 1.7627018219523034, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Shalnor Legends: Sacred Lands", "price": 0.14022613933738212, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Shiness: The Lightning Kingdom", "price": 0.4739336492890996, "region": "🇹🇷", "status": " GOLD", "data": "28.03" },
  { "name": "Ship of Fools", "price": 4.147533698711302, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "SnowRunner - 1-Anniversary Edition", "price": 9.47867298578199, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "SolSeraph", "price": 0.37426554090751984, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Sonic Colors: Ultimate - Digital Deluxe", "price": 5.675702365081716, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Sonic Frontiers Digital Deluxe Edition", "price": 14.883375302424332, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Sonic Mania", "price": 1.29015271195366, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Soul Hackers 2 - Digital Premium Edition", "price": 13.575766553103245, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "South Park™: The Fractured but Whole™", "price": 3.554502369668247, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Sparkle Bundle", "price": 0.6280551029477115, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Spyro™ + Crash Remastered Game Bundle", "price": 10.700368615060558, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Spyro™ Reignited Trilogy", "price": 2.072038710314521, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Starlink: Battle for Atlas™", "price": 1.579025329580803, "region": "🇦🇷", "status": " GOLD", "data": "28.03" },
  { "name": "State of Mind", "price": 0.1476324495136523, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Steelrising - Bastille Edition", "price": 12.34138152372488, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Sunset Overdrive Deluxe Edition", "price": 0.770256258332099, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Sunset Overdrive", "price": 0.64507635597683, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Super Monkey Ball Banana Mania Digital Deluxe Edition", "price": 6.169456376833062, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Super Monkey Ball: Banana Blitz HD", "price": 2.59072729965931, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Super Pixel Kid", "price": 0.07406310176270182, "region": "🇦🇷", "status": "", "data": "02.04" },
  { "name": "Swords & Bones", "price": 0.2073766849355651, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Syberia - The World Before", "price": 2.467782550733225, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "TEKKEN 7 - Definitive Edition", "price": 3.9993581197847234, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "TENGAI", "price": 4.8150891225991215, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Taiko no Tatsujin: The Drum Master!", "price": 4.93556510146645, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tales from the Borderlands", "price": 5.6866771985255395, "region": "🇹🇷", "status": " GOLD", "data": "28.03" },
  { "name": "Tales of Arise Deluxe Edition", "price": 7.353870458135862, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Tanks Bundle", "price": 0.7396435096035155, "region": "🇦🇷", "status": "", "data": "02.04" },
  { "name": "Team Sonic Racing™", "price": 4.317878832765516, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Temple Dash: Jungle Adventure", "price": 0.07406310176270182, "region": "🇦🇷", "status": "", "data": "23.03" },
  { "name": "Tennis World Tour 2 - Complete Edition Xbox Series X|S", "price": 0.7050807287809214, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tennis World Tour 2 Ace Edition", "price": 4.442798597738606, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "The Bard's Tale IV: Director's Cut", "price": 0.8502444082358168, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "The Bard's Tale Trilogy", "price": 0.26366464227521846, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "The BioWare Bundle", "price": 1.171431392880067, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "The Crew", "price": 0.48718708339505257, "region": "🇦🇷", "status": " GOLD", "data": "28.03" },
  { "name": "The Crew® 2 Gold Edition", "price": 4.442798597738606, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "The Crew® 2", "price": 2.467782550733225, "region": "🇦🇷", "status": " GOLD", "data": "28.03" },
  { "name": "The Dark Pictures Anthology: Season One", "price": 32.831185503382216, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "The Division 2 - Warlords of New York Edition", "price": 4.4423048437268555, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "The Escapists 2", "price": 0.24564262084629437, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "The Escapists", "price": 0.09825704833851774, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "The Escapists: Supermax Edition", "price": 1.2403100775193798, "region": "🇦🇷", "status": "", "data": "06.04" },
  { "name": "The FMV Bundle", "price": 1.8130647311509405, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "The Guise", "price": 0.33575272799091493, "region": "🇦🇷", "status": "", "data": "01.04" },
  { "name": "The Jackbox Party Quadpack", "price": 2.773663161013183, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "The Knight Witch", "price": 3.5510788525156767, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "The LEGO Movie Videogame", "price": 0.5542388781908852, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "The LEGO® NINJAGO® Movie Video Game", "price": 1.1102058954229004, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "The Surge 2 - Windows 10", "price": 1.6034661531624945, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "The Surge 2", "price": 3.084728188416531, "region": "🇦🇷", "status": " GOLD", "data": "28.03" },
  { "name": "The Survivalists", "price": 1.480027650224658, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "The Tale of Bistun", "price": 2.959067792425813, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "The Vale: Shadow of the Crown", "price": 0.5609045573495285, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "The Yakuza Remastered Collection for Windows 10", "price": 2.5213548610082457, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "The Yakuza Remastered Collection", "price": 2.5213548610082457, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "The end is nahual: If I may say so", "price": 1.1810595961092183, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Thymesia", "price": 5.5510294771145015, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Titanfall® 2: Ultimate Edition", "price": 0.5917641830839875, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Gold Edition", "price": 4.936552609489952, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Ultimate Edition", "price": 5.430306621241297, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint", "price": 2.9615365624845698, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tom Clancy's Rainbow Six® Siege Deluxe Edition", "price": 5.553498247173258, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tom Clancy's Rainbow Six® Siege Ultimate Edition", "price": 31.595576619273306, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Tom Clancy's Splinter Cell", "price": 0.39302819335407096, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tom Clancy's Splinter Cell: Pandora Tomorrow®", "price": 0.29477114501555324, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tom Clancy's The Division® 2", "price": 2.2204117908458008, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tom Clancy's The Division™ Gold Edition", "price": 2.6329647182727753, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands - Standard Edition", "price": 2.2702809460326865, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Ultimate Edition", "price": 4.689675603614279, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Year 2 Gold Edition", "price": 1.9740285389818792, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tom Clancy’s Rainbow Six® Extraction Deluxe Edition", "price": 7.404828914234928, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tom Clancy’s Rainbow Six® Extraction", "price": 5.775440675455489, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tom Clancy’s Splinter Cell Double Agent", "price": 0.39302819335407096, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tom Clancy’s The Division® Franchise Bundle", "price": 4.146052436676048, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tony Hawk's™ Pro Skater™ 1 + 2 - Cross-Gen Deluxe Bundle", "price": 4.441811089715104, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Torment: Tides of Numenera", "price": 0.6990075544363797, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tour de France 2022 Xbox One", "price": 5.923566878980892, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tour de France 2022 Xbox Series X|S", "price": 6.66419789660791, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Train Life: A Railway Simulator", "price": 1.376833061768627, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "UnMetal", "price": 0.5609045573495285, "region": "🇦🇷", "status": " GOLD", "data": "28.03" },
  { "name": "UnderDungeon + Cyber Protocol", "price": 1.2995605589295411, "region": "🇦🇷", "status": "", "data": "25.03" },
  { "name": "Underworld Ascendant", "price": 0.529551177603318, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Unit 4: Couch Attack Bundle", "price": 0.6673085468819434, "region": "🇦🇷", "status": "", "data": "30.12" },
  { "name": "Unravel Two", "price": 0.6159581296598035, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "VAMPYR", "price": 1.579025329580803, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "ValiDate: Struggling Singles in your Area", "price": 0.6868118303461215, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Valiant Hearts: The Great War", "price": 0.22070804325285145, "region": "🇦🇷", "status": " GOLD", "data": "28.03" },
  { "name": "Valkyria Chronicles 4", "price": 1.2506582411795684, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Valkyria Revolution", "price": 0.8186441514837308, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Vampire: The Masquerade - Swansong PRIMOGEN EDITION", "price": 12.835629289487976, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Vermintide - Digital Value Pack", "price": 1.971066014911371, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Vosaria: Lair of the Forgotten", "price": 0.14022613933738212, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "WRC Collection FIA World Rally Championship", "price": 3.1439786698266925, "region": "🇦🇷", "status": "", "data": "31.08" },
  { "name": "WRC Generations Fully Loaded Edition", "price": 13.575766553103245, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Warhammer 40,000: Inquisitor - Martyr Ultimate Edition", "price": 1.7627018219523034, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Warhammer: Chaosbane Slayer Edition Xbox One", "price": 0.2834148027452723, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Warhammer: Chaosbane Slayer Edition Xbox Series X|S", "price": 0.4241346960944058, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Wasteland 2: Director's Cut", "price": 0.4061126746654817, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Watch Dogs®2 - Gold Edition", "price": 3.258030542390732, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Watch Dogs®2", "price": 2.467782550733225, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Watch Dogs®: Legion Gold Edition", "price": 5.430306621241297, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Watch Dogs®: Legion", "price": 3.5540413765861847, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Werewolf: The Apocalypse - Earthblood Xbox One", "price": 3.3565397718856462, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Werewolf: The Apocalypse - Earthblood Xbox Series X|S", "price": 3.3565397718856462, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "What Lies in the Multiverse", "price": 0.3169900755443638, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Witchcrafty (Xbox Series X|S)", "price": 0.5609045573495285, "region": "🇦🇷", "status": "", "data": "24.03" },
  { "name": "Witchcrafty", "price": 0.5609045573495285, "region": "🇦🇷", "status": "", "data": "24.03" },
  { "name": "Worms W.M.D", "price": 1.4802745272305338, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "XCOM® 2 Digital Deluxe Edition", "price": 0.9709672641090209, "region": "🇦🇷", "status": " GOLD", "data": "28.03" },
  { "name": "XCOM® 2", "price": 0.44413173357033525, "region": "🇦🇷", "status": " GOLD", "data": "28.03" },
  { "name": "XCOM®: Enemy Within", "price": 0.3940157013775737, "region": "🇦🇷", "status": " GOLD", "data": "28.03" },
  { "name": "Yaga", "price": 0.4431442255468326, "region": "🇦🇷", "status": " GOLD", "data": "28.03" },
  { "name": "Yakuza 0 for Windows 10", "price": 0.7898894154818326, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Yakuza 0", "price": 0.7898894154818326, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Yakuza 3 Remastered for Windows 10", "price": 1.8992248062015502, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Yakuza 3 Remastered", "price": 1.8992248062015502, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Yakuza 4 Remastered for Windows 10", "price": 1.8992248062015502, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Yakuza 4 Remastered", "price": 1.8992248062015502, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Yakuza 5 Remastered for Windows 10", "price": 1.8992248062015502, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Yakuza 5 Remastered", "price": 1.8992248062015502, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Yakuza 6: The Song of Life for Windows 10", "price": 0.7898894154818326, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Yakuza 6: The Song of Life", "price": 0.7898894154818326, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Yakuza Kiwami 2 for Windows 10", "price": 1.3565891472868217, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Yakuza Kiwami 2", "price": 1.3565891472868217, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Yakuza Kiwami for Windows 10", "price": 0.7898894154818326, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Yakuza Kiwami", "price": 0.7898894154818326, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Yakuza: Like a Dragon Hero Edition", "price": 3.849800029625241, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Yoku's Island Express", "price": 0.8877697131289192, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "ZERO GUNNER 2-", "price": 4.8150891225991215, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Zapling Bygone", "price": 0.8309880017775145, "region": "🇦🇷", "status": "", "data": "24.03" },
  { "name": "Zombie Derby: Pixel Survival (Windows)", "price": 0.29378363699205057, "region": "🇦🇷", "status": "", "data": "24.03" },
  { "name": "Zombie Derby: Pixel Survival", "price": 0.29378363699205057, "region": "🇦🇷", "status": "", "data": "24.03" },
  { "name": "Zorro The Chronicles Xbox One", "price": 8.885103441465462, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Zorro The Chronicles Xbox Series X|S", "price": 8.885103441465462, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "[PROTOTYPE®]", "price": 0.7315953192119685, "region": "🇦🇷", "status": "", "data": "28.03" }
]

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
    a = 40
  } else if (value > 1 && value <= 5) {
    a = 50
  } else if (value > 5 && value <= 10) {
    a = 70
  } else if (value > 10 && value <= 15) {
    a = 85
  } else if (value > 15 && value <= 20) {
    a = 100
  } else if (value > 20 && value <= 25) {
    a = 150
  } else if (value > 25) {
    a = 180
  }
  return a
}

input.oninput = result


arr.map((a) => {
  // const status = 
  const item = document.createElement('li')
  let res = resultFromList(a.price)
  item.innerHTML = `${a.name}:${res}&#8381; ${a.region} до:${a.data}${a.status}`
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

