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
  { "name": "A Memoir Blue", "price": 0.42586283513553547, "region": "🇦🇷", "status": "", "data": "01.04" },
  { "name": "A Plague Tale: Innocence - Windows 10", "price": 2.0727793413321485, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "A Sketchbook About Her Sun", "price": 0.2073766849355651, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "ACE COMBAT™ 7: SKIES UNKNOWN - TOP GUN: Maverick Ultimate Edition", "price": 3.850293783636992, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Aces of the Luftwaffe - Squadron", "price": 0.2427788475781366, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Achtung! Cthulhu Tactics", "price": 0.4303066212412976, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Adios", "price": 0.6952056485458945, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Adventures of Bertram Fiddle: Episode 2: A Bleaker Predicklement", "price": 0.28045227867476424, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Afterglitch", "price": 0.8453068681183034, "region": "🇦🇷", "status": " GOLD", "data": "04.04" },
  { "name": "Agatha Knife", "price": 0.17627018219523036, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Agent A: A puzzle in disguise", "price": 0.10566335851478792, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Almost My Floor (Xbox Series X|S)", "price": 0.35056534834345526, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Almost My Floor", "price": 0.35056534834345526, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Alterity Experience", "price": 0.5609045573495285, "region": "🇦🇷", "status": "", "data": "01.04" },
  { "name": "AntVentor", "price": 0.24687700587567274, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Armikrog", "price": 0.14664494149014962, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "As Far As The Eye", "price": 1.2408038315311312, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Assassin's Creed Triple Pack: Black Flag, Unity, Syndicate", "price": 1.109712141411149, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Assassin's Creed Unity", "price": 1.2279662272255962, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Assassin's Creed® Odyssey - DELUXE EDITION", "price": 3.7019207031057126, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Assassin's Creed® Origins - DELUXE EDITION", "price": 3.3933244457611216, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Assassin's Creed® Valhalla Deluxe Edition", "price": 8.145311805658421, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Awarded Platformer Bundle", "price": 0.8109909643015849, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Bassmaster® Fishing 2022", "price": 3.3438651922064246, "region": "🇹🇷", "status": " GOLD", "data": "28.03" },
  { "name": "Bassmaster® Fishing 2022: 2022 Bassmaster Classic®", "price": 4.423380726698262, "region": "🇹🇷", "status": " GOLD", "data": "28.03" },
  { "name": "Bassmaster® Fishing 2022: Super Deluxe Edition", "price": 2.9225908372827805, "region": "🇹🇷", "status": " GOLD", "data": "28.03" },
  { "name": "Batman™: Arkham Knight", "price": 1.0852713178294575, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Best Month Ever!", "price": 0.8413568360242927, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "BioShock 2 Remastered", "price": 1.5007898894154819, "region": "🇹🇷", "status": "", "data": "04.04" },
  { "name": "BioShock Infinite: The Complete Edition", "price": 2.401263823064771, "region": "🇹🇷", "status": "", "data": "04.04" },
  { "name": "BioShock Remastered", "price": 2.401263823064771, "region": "🇹🇷", "status": "", "data": "04.04" },
  { "name": "Bite the Bullet", "price": 0.21132671702957584, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Blizzard® Arcade Collection", "price": 3.1847133757961785, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Bomber Crew Deluxe Edition", "price": 0.8880165901347948, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Bomber Crew", "price": 0.7405816422258431, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Borderlands 3: Next Level Edition", "price": 2.3766849355651014, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Borderlands 3: Ultimate Edition", "price": 6.66419789660791, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Brawl Chess + Cyber Protocol", "price": 0.14022613933738212, "region": "🇦🇷", "status": " GOLD", "data": "04.04" },
  { "name": "Bullet Beat (for Windows 10)", "price": 0.19009529452426802, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Bullet Beat", "price": 0.19009529452426802, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Butterflies Bundle", "price": 0.36908112378413077, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "CAN ANDROIDS PRAY: BLUE", "price": 0.3308151878734015, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Call of Duty®: Vanguard - Cross-Gen Bundle", "price": 15.550782600108626, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Call of Duty®: WWII - Digital Deluxe", "price": 9.899947340705635, "region": "🇹🇷", "status": "", "data": "04.04" },
  { "name": "Castle on the Coast", "price": 0.7880314027551474, "region": "🇦🇷", "status": " GOLD", "data": "04.04" },
  { "name": "CastleStorm II", "price": 0.4907914876808374, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Catie in MeowmeowLand", "price": 0.42462845010615713, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Chef's Tail", "price": 0.40240951957734655, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Chinatown Detective Agency", "price": 1.063546141312398, "region": "🇦🇷", "status": "", "data": "01.04" },
  { "name": "Cinders", "price": 0.42067841801214634, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Citizen Sleeper", "price": 0.9815829753616748, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Coffee Talk Episode 2: Hibiscus and Butterfly", "price": 2.014218009478673, "region": "🇹🇷", "status": "", "data": "19.04" },
  { "name": "Commandos 2 & Praetorians: HD Remaster Double Pack", "price": 1.059102355206636, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Cotton Games’ New Game Bundle", "price": 0.33970276008492567, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Couch Co-Op: Urban Flow + Knights & Guns", "price": 0.45425369081123784, "region": "🇦🇷", "status": "", "data": "31.03" },
  { "name": "Couch Multiplayer Bundle: Genetic Disaster, Super Cyborg ...", "price": 0.7584061620500666, "region": "🇦🇷", "status": " GOLD", "data": "04.04" },
  { "name": "Crash Bandicoot™ - Crashiversary Bundle", "price": 9.00212314225053, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Crash Bandicoot™ Bundle - N. Sane Trilogy + CTR Nitro-Fueled", "price": 4.318619463783143, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Crash Bandicoot™ N. Sane Trilogy", "price": 2.368044240359453, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Crash™ Team Racing Nitro-Fueled + Spyro™ Game Bundle", "price": 4.318619463783143, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Crash™ Team Racing Nitro-Fueled - Nitros Oxide Edition", "price": 5.182688984347998, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Crazy Strike Bowling EX", "price": 0.1910828025477707, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Crime Opera: The Butterfly Effect", "price": 0.28045227867476424, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Crossroads Inn", "price": 0.8472818841653088, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Cymatically Muffed", "price": 0.6845708267509216, "region": "🇹🇷", "status": " GOLD", "data": "04.04" },
  { "name": "DARKLAND 3", "price": 0.07406310176270182, "region": "🇦🇷", "status": "", "data": "07.04" },
  { "name": "DRAGON BALL XENOVERSE Super Bundle", "price": 2.4881516587677726, "region": "🇹🇷", "status": "", "data": "04.04" },
  { "name": "Dakar Desert Rally", "price": 1.9839036192169062, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Dark Grim Mariupolis (for Windows 10)", "price": 0.17281390411297093, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Dark Grim Mariupolis", "price": 0.2073766849355651, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Dark Quest 2", "price": 0.4226534340591517, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Darksiders Fury's Collection - War and Death", "price": 0.49251962672196714, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Darksiders Genesis", "price": 0.9243075099985186, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Darksiders III", "price": 2.1759739297881793, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Demetrios - The BIG Cynical Adventure", "price": 0.0488816471633832, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Deponia", "price": 0.0923320001975016, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Discolored", "price": 0.3856218831778008, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Distrust", "price": 0.14713869550190095, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Divine Knockout (DKO) - Founders Edition", "price": 3.7796869599565497, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Divine Knockout (DKO) - Ultimate Edition", "price": 7.561842689971856, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Divinity: Original Sin - Enhanced Edition", "price": 1.4595368587369772, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Divinity: Original Sin - The Source Saga", "price": 2.3327408285192317, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Divinity: Original Sin 2 - Definitive Edition", "price": 1.4101614575618429, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Dou", "price": 0.07406310176270182, "region": "🇦🇷", "status": "", "data": "05.04" },
  { "name": "Down in Bermuda", "price": 0.14022613933738212, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Dragon Pinball", "price": 0.18046709129511676, "region": "🇦🇷", "status": "", "data": "08.04" },
  { "name": "Dying Light: Definitive Edition", "price": 2.6197998946814116, "region": "🇹🇷", "status": "", "data": "04.04" },
  { "name": "Déjà Vu", "price": 0.14022613933738212, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Eastasiasoft Indie Shmup Bundle", "price": 0.2118204710413272, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Elex", "price": 2.3935713227669972, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Escape Dead Island", "price": 0.19256406458302475, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Escape From Tethys", "price": 0.35056534834345526, "region": "🇦🇷", "status": " GOLD", "data": "04.04" },
  { "name": "Evil Dead: The Game - Deluxe Edition", "price": 2.120673480472029, "region": "🇦🇷", "status": " GOLD", "data": "04.04" },
  { "name": "Evil Dead: The Game", "price": 1.4170740137263615, "region": "🇦🇷", "status": " GOLD", "data": "04.04" },
  { "name": "FIFA 22 Xbox One", "price": 21.06319115323855, "region": "🇹🇷", "status": "", "data": "30.12" },
  { "name": "FIFA 22 Xbox Series X|S", "price": 23.590837282780413, "region": "🇹🇷", "status": "", "data": "30.12" },
  { "name": "FOCUS INDIES BUNDLE - Curse of the Dead Gods + Shady Part of Me + Aeon Must Die!", "price": 7.898089171974521, "region": "🇦🇷", "status": " GOLD", "data": "04.04" },
  { "name": "Far Cry® 5", "price": 1.702710709524515, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Far Cry® New Dawn Deluxe Edition", "price": 1.776526934281341, "region": "🇦🇷", "status": " GOLD", "data": "04.04" },
  { "name": "Far Cry®5 Gold Edition", "price": 2.4433417271515334, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Fishing Planet - Advanced Starter Pack", "price": 1.121809114699057, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Fishing Planet - Deluxe Starter Pack", "price": 1.8478743889794105, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Fishing Planet - Golden Starter Pack", "price": 2.467782550733225, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Flat Heroes", "price": 0.7332247074507481, "region": "🇦🇷", "status": " GOLD", "data": "04.04" },
  { "name": "Forspoken Digital Deluxe Edition", "price": 32.459189046866776, "region": "🇹🇷", "status": "", "data": "04.04" },
  { "name": "Forspoken", "price": 23.15375499925937, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Fueled Up", "price": 0.8413568360242927, "region": "🇦🇷", "status": " GOLD", "data": "04.04" },
  { "name": "Fuga: Melodies of Steel - Deluxe Edition", "price": 6.33754607688257, "region": "🇹🇷", "status": "", "data": "04.04" },
  { "name": "Fuga: Melodies of Steel", "price": 4.240652975250132, "region": "🇹🇷", "status": "", "data": "04.04" },
  { "name": "Galaxy Squad", "price": 0.28045227867476424, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Genesis Noir", "price": 0.4226534340591517, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Ghostbusters: The Video Game Remastered", "price": 0.529551177603318, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Gnomes Garden 3 in 1 Bundle", "price": 0.21033920900607317, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Gnomes Garden: Lost King", "price": 0.28045227867476424, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Goetia", "price": 0.07011306966869106, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Gorogoa", "price": 0.22070804325285145, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Gothic Platformer Games Bundle", "price": 0.6794055201698513, "region": "🇦🇷", "status": "", "data": "07.04" },
  { "name": "GreedFall", "price": 3.4555028962611907, "region": "🇹🇷", "status": " GOLD", "data": "04.04" },
  { "name": "Hasbro Family Fun Pack - Super Edition", "price": 0.9862736384733126, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Headliner: NoviNews", "price": 0.39302819335407096, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Headspun", "price": 0.3821656050955414, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Hero Express", "price": 0.13825112329037673, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Hidden Through Time", "price": 0.28390855675702364, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Hotshot Racing", "price": 0.28045227867476424, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Hungry Shark® World", "price": 0.6147237446304251, "region": "🇦🇷", "status": " GOLD", "data": "04.04" },
  { "name": "Hunt Ducks 4", "price": 0.07406310176270182, "region": "🇦🇷", "status": "", "data": "13.04" },
  { "name": "Hunt: Showdown - Deluxe Edition", "price": 2.2311743022643498, "region": "🇹🇷", "status": " GOLD", "data": "04.04" },
  { "name": "Hunt: Showdown - Gold Edition", "price": 2.599789362822538, "region": "🇹🇷", "status": " GOLD", "data": "04.04" },
  { "name": "Hunt: Showdown", "price": 2.843601895734597, "region": "🇹🇷", "status": " GOLD", "data": "04.04" },
  { "name": "I Am Dead", "price": 0.7011306966869105, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Indiecalypse", "price": 0.23083000049375402, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Infinite Minigolf", "price": 0.25749271712832666, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Iron Crypticle", "price": 0.13242482595171085, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Joy Ball Adventure", "price": 0.07406310176270182, "region": "🇦🇷", "status": "", "data": "31.03" },
  { "name": "Jump and Roll", "price": 0.29872117710956403, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Just Die Already", "price": 0.44215671752332986, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Kaiju Wars", "price": 0.9815829753616748, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Keep Talking and Nobody Explodes", "price": 0.5283167925739397, "region": "🇦🇷", "status": " GOLD", "data": "04.04" },
  { "name": "Kerbal Space Program Enhanced Edition Complete", "price": 4.6745655608214856, "region": "🇹🇷", "status": " GOLD", "data": "04.04" },
  { "name": "LEGO® Batman™ 3: Beyond Gotham", "price": 0.6776773811287217, "region": "🇦🇷", "status": "", "data": "07.04" },
  { "name": "LEGO® Marvel Super Heroes 2", "price": 1.480027650224658, "region": "🇦🇷", "status": "", "data": "07.04" },
  { "name": "LEGO® Marvel's Avengers", "price": 1.3565891472868217, "region": "🇦🇷", "status": "", "data": "07.04" },
  { "name": "LEGO® The Hobbit™", "price": 1.4139020537124805, "region": "🇹🇷", "status": "", "data": "07.04" },
  { "name": "LEGO® Worlds", "price": 0.7890189107786502, "region": "🇦🇷", "status": "", "data": "07.04" },
  { "name": "LUNARK", "price": 1.262035254036439, "region": "🇦🇷", "status": "", "data": "30.03" },
  { "name": "Lab Crisis (for Windows 10)", "price": 0.2592208561694564, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Lab Crisis", "price": 0.2592208561694564, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Lair of the Clockwork God", "price": 0.21033920900607317, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Landflix Odyssey", "price": 0.09875080235026909, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "League of Enthusiastic Losers", "price": 0.23255813953488372, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Legal Dungeon", "price": 0.45573495284649185, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Leisure Suit Larry - Wet Dreams Don't Dry", "price": 1.4802745272305338, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Leisure Suit Larry - Wet Dreams Dry Twice", "price": 2.7640349577840317, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Leisure Suit Larry - Wet Dreams Saga Bundle", "price": 2.5665333530834937, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Light & Dark Bundle", "price": 1.1072433713523921, "region": "🇦🇷", "status": "", "data": "02.11" },
  { "name": "Lila's Tale and the Hidden Forest", "price": 0.27650224658075345, "region": "🇦🇷", "status": "", "data": "03.04" },
  { "name": "Little Mage Adventure", "price": 0.07406310176270182, "region": "🇦🇷", "status": "", "data": "10.04" },
  { "name": "Little Misfortune", "price": 0.4907914876808374, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Logic Games Bundle", "price": 0.6794055201698513, "region": "🇦🇷", "status": "", "data": "31.03" },
  { "name": "Lord Winklebottom Investigates", "price": 1.070458697476917, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Lost Artifacts: Soulstone", "price": 0.28045227867476424, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Lost Artifacts: Time Machine", "price": 0.21033920900607317, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "MELTY BLOOD: TYPE LUMINA - Deluxe Edition", "price": 2.959561546437565, "region": "🇦🇷", "status": "", "data": "07.04" },
  { "name": "MELTY BLOOD: TYPE LUMINA", "price": 2.1152421863427637, "region": "🇦🇷", "status": "", "data": "07.04" },
  { "name": "MXGP 2020 - The Official Motocross Videogame", "price": 1.4805214042364094, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "MXGP3", "price": 0.49326025773959414, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "MY HERO ONE'S JUSTICE 2", "price": 3.084728188416531, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Machinarium", "price": 1.2331506443489852, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Madden NFL 22 Xbox One", "price": 19.006073174344543, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Madden NFL 22 Xbox Series X|S", "price": 22.116723448378018, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Madden NFL 23 Xbox One", "price": 25.276255369574876, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Madden NFL 23 Xbox Series X|S", "price": 29.621290672986717, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Mafia II: Definitive Edition", "price": 3.0794943958919667, "region": "🇦🇷", "status": " GOLD", "data": "04.04" },
  { "name": "Mafia III: Definitive Edition", "price": 3.0794943958919667, "region": "🇦🇷", "status": " GOLD", "data": "04.04" },
  { "name": "Maggie the Magnet", "price": 0.24193946575815928, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Marble Duel", "price": 0.718905841109959, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Marvel's Midnight Suns Digital+ Edition", "price": 22.21646175875179, "region": "🇦🇷", "status": " GOLD", "data": "04.04" },
  { "name": "Masters of Anima", "price": 0.4739336492890996, "region": "🇹🇷", "status": " GOLD", "data": "04.04" },
  { "name": "Mastho is Together", "price": 0.17281390411297093, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Maze Blaze", "price": 0.17528267417172763, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "MechWarrior 5: Mercenaries - JumpShip Edition", "price": 2.120673480472029, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Meet Your Maker: Deluxe Edition", "price": 13.771293141756777, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Microsoft 365 Family", "price": 0.0, "region": "🇦🇷", "status": "", "data": "01.12" },
  { "name": "Microsoft 365 Family", "price": 0.0, "region": "🇹🇷", "status": "", "data": "01.12" },
  { "name": "Microsoft 365 Personal", "price": 0.0, "region": "🇦🇷", "status": "", "data": "01.12" },
  { "name": "Microsoft 365 Personal", "price": 0.0, "region": "🇹🇷", "status": "", "data": "01.12" },
  { "name": "Middle-earth™: Shadow of War™", "price": 1.0361427936601983, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Minemaze", "price": 0.07406310176270182, "region": "🇦🇷", "status": "", "data": "31.03" },
  { "name": "Mini Madness", "price": 0.31550881350910975, "region": "🇦🇷", "status": " GOLD", "data": "04.04" },
  { "name": "Minigolf Adventure", "price": 0.08640695205648546, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Monster Energy Supercross - Special Edition", "price": 1.4807682812422849, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Monster Energy Supercross - The Official Videogame 5", "price": 3.9490445859872607, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Monster Energy Supercross - The Official Videogame", "price": 0.9870142694909396, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Monster Energy Supercross 5 - Special Edition", "price": 5.924060632992643, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Monster Jam Steel Titans", "price": 0.49251962672196714, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Monster Prom: XXL", "price": 0.37312990668049173, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Moon Raider and Sweet Witches Bundle", "price": 0.33970276008492567, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "MotoGP™18", "price": 0.49326025773959414, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Mr. Pumpkin Series Bundle", "price": 0.17528267417172763, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Murder Diaries 3 - Santa's Trail of Blood", "price": 0.45573495284649185, "region": "🇦🇷", "status": " GOLD", "data": "04.04" },
  { "name": "Mutazione", "price": 1.0516960450303658, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "My Aunt is a Witch", "price": 0.35056534834345526, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Necromunda: Underhive Wars", "price": 2.4305041228459983, "region": "🇦🇷", "status": " GOLD", "data": "04.04" },
  { "name": "Nexoria: Dungeon Rogue Heroes", "price": 0.13825112329037673, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Ninja Warrior Epic Quest", "price": 0.17281390411297093, "region": "🇦🇷", "status": "", "data": "31.05" },
  { "name": "No Longer Home", "price": 0.4226534340591517, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Old Man's Journey", "price": 0.35056534834345526, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "One Hundred Ways", "price": 0.21033920900607317, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "One Step From Eden", "price": 0.7011306966869105, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Operencia: The Stolen Sun", "price": 0.7413716486446452, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Outbreak Co-Op Anthology", "price": 0.6362020441416086, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Overcooked! 2 - Gourmet Edition", "price": 0.6900212314225053, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Overcooked: Gourmet Edition", "price": 0.2888460968745371, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Overloop", "price": 0.8453068681183034, "region": "🇦🇷", "status": "", "data": "08.04" },
  { "name": "Overwatch® 2 - Hero Pack", "price": 8.883869056436083, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "PAC-MAN MUSEUM+", "price": 2.34333859926277, "region": "🇹🇷", "status": "", "data": "04.04" },
  { "name": "Phoenix Point: Behemoth Edition", "price": 1.588653532809954, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Power Rangers: Battle for the Grid - Digital Collector's Edition", "price": 1.059102355206636, "region": "🇦🇷", "status": " GOLD", "data": "01.04" },
  { "name": "Power Rangers: Battle for the Grid Super Edition", "price": 1.7627018219523034, "region": "🇦🇷", "status": " GOLD", "data": "01.04" },
  { "name": "Power Rangers: Battle for the Grid", "price": 0.7011306966869105, "region": "🇦🇷", "status": " GOLD", "data": "01.04" },
  { "name": "Prototype®2", "price": 0.8872759591171677, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Pushy and Pully in Blockland", "price": 0.35056534834345526, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Quern - Undying Thoughts", "price": 0.4132721078358762, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "REZ PLZ", "price": 0.21132671702957584, "region": "🇦🇷", "status": " GOLD", "data": "04.04" },
  { "name": "RIDE", "price": 0.23650817162889448, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "RPG Time: The Legend of Wright", "price": 1.2193255320199476, "region": "🇦🇷", "status": "", "data": "29.03" },
  { "name": "Re:Turn 2 - Runaway", "price": 0.25428331605194293, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "ReactorX (for Windows 10)", "price": 0.2073766849355651, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "ReactorX 2", "price": 0.3110650274033476, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "ReactorX", "price": 0.2073766849355651, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Redout 2", "price": 1.059102355206636, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Retro Tank Arcade", "price": 0.07406310176270182, "region": "🇦🇷", "status": "", "data": "02.04" },
  { "name": "Rick Henderson", "price": 0.3974719794598331, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Riddled Corpses EX", "price": 0.09875080235026909, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Royal Roads", "price": 0.28045227867476424, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": 8.438749814842245, "region": "🇦🇷", "status": "", "data": "01.01" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": 6.316101318323212, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Sam & Max Save the World + Beyond Time and Space Bundle", "price": 1.4827432972892904, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Shadow Tactics: Blades of the Shogun", "price": 0.15113217482885732, "region": "🇹🇷", "status": "", "data": "04.04" },
  { "name": "Shady Part of Me", "price": 1.183528366167975, "region": "🇦🇷", "status": " GOLD", "data": "04.04" },
  { "name": "Shape Up", "price": 0.24564262084629437, "region": "🇦🇷", "status": " GOLD", "data": "04.04" },
  { "name": "Shukuchi Ninja", "price": 0.27650224658075345, "region": "🇦🇷", "status": "", "data": "31.03" },
  { "name": "Sid Meier’s Civilization® VI Anthology", "price": 12.095245148866836, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Sid Meier’s Civilization® VI Platinum Edition", "price": 6.935229067930489, "region": "🇹🇷", "status": "", "data": "04.04" },
  { "name": "Skate 3", "price": 0.19651409667703548, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Skul: The Hero Slayer", "price": 0.8413568360242927, "region": "🇦🇷", "status": "", "data": "07.04" },
  { "name": "South Park™: The Stick of Truth ™", "price": 0.7315953192119685, "region": "🇦🇷", "status": " GOLD", "data": "04.04" },
  { "name": "Space Accident", "price": 0.34562780822594186, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Sparkle Bundle", "price": 0.6280551029477115, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Spyro™ + Crash Remastered Game Bundle", "price": 10.700368615060558, "region": "🇹🇷", "status": "", "data": "04.04" },
  { "name": "Spyro™ Reignited Trilogy", "price": 2.072038710314521, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Steam Tactics", "price": 0.35056534834345526, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Steel Defier", "price": 0.27650224658075345, "region": "🇦🇷", "status": "", "data": "08.04" },
  { "name": "Storm Boy", "price": 0.1259072729965931, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Summertime Madness (Xbox Series X|S)", "price": 0.6339801510887276, "region": "🇦🇷", "status": " GOLD", "data": "04.04" },
  { "name": "Summertime Madness", "price": 0.6339801510887276, "region": "🇦🇷", "status": " GOLD", "data": "04.04" },
  { "name": "Super Arcade Football", "price": 0.5609045573495285, "region": "🇦🇷", "status": "", "data": "06.04" },
  { "name": "Super Arcade Racing", "price": 0.5609045573495285, "region": "🇦🇷", "status": "", "data": "06.04" },
  { "name": "Super Pixel Kid", "price": 0.07406310176270182, "region": "🇦🇷", "status": "", "data": "02.04" },
  { "name": "Super Soccer Blast: America vs Europe", "price": 0.28045227867476424, "region": "🇦🇷", "status": " GOLD", "data": "04.04" },
  { "name": "TEKKEN 7 - Definitive Edition", "price": 3.9993581197847234, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "TOHU", "price": 0.46166000098750803, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Tacoma", "price": 0.35056534834345526, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Taiko no Tatsujin: The Drum Master!", "price": 4.93556510146645, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Tangle Tower", "price": 0.35056534834345526, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Tanks Bundle", "price": 0.7396435096035155, "region": "🇦🇷", "status": "", "data": "02.04" },
  { "name": "Temple Dash: Jungle Adventure", "price": 0.07406310176270182, "region": "🇦🇷", "status": "", "data": "07.04" },
  { "name": "The Awakening of Mummies", "price": 0.2246580753468622, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "The Big Con", "price": 0.4226534340591517, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "The Darkside Detective", "price": 0.6463240013825112, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "The Darkside Detective: A Fumble in the Dark", "price": 0.6463240013825112, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "The Escapists & The Escapists: The Walking Dead", "price": 0.25576457808719694, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "The Escapists 2 - Game of the Year Edition", "price": 0.43080037525304893, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "The Escapists: Supermax Edition", "price": 1.2403100775193798, "region": "🇦🇷", "status": "", "data": "06.04" },
  { "name": "The FMV Bundle", "price": 1.8130647311509405, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "The Guise", "price": 0.33575272799091493, "region": "🇦🇷", "status": "", "data": "01.04" },
  { "name": "The Inner World - The Last Wind Monk", "price": 0.42067841801214634, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "The Inner World", "price": 0.14713869550190095, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "The Jackbox Party Quadpack", "price": 2.773663161013183, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "The Journey Down Trilogy", "price": 0.8865353280995408, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "The LEGO® NINJAGO® Movie Video Game", "price": 1.1102058954229004, "region": "🇦🇷", "status": "", "data": "07.04" },
  { "name": "The Letter: A Horror Visual Novel", "price": 0.5609045573495285, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "The Plane Effect", "price": 0.6606428677233003, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "The Procession to Calvary", "price": 0.5283167925739397, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "The StoryTale (for Windows 10)", "price": 1.0189573459715642, "region": "🇹🇷", "status": "", "data": "04.04" },
  { "name": "The StoryTale", "price": 0.2073766849355651, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "The Surge", "price": 1.4218009478672986, "region": "🇹🇷", "status": " GOLD", "data": "04.04" },
  { "name": "The Survivalists - Deluxe Edition", "price": 1.3565891472868217, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "The Touryst", "price": 0.9815829753616748, "region": "🇦🇷", "status": " GOLD", "data": "04.04" },
  { "name": "The Wanderer: Frankenstein's Creature", "price": 0.5283167925739397, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "The Wardrobe: Even Better Edition", "price": 0.8736176935229069, "region": "🇹🇷", "status": "", "data": "04.04" },
  { "name": "Thimbleweed Park", "price": 0.35056534834345526, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Gold Edition", "price": 4.936552609489952, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands - Standard Edition", "price": 2.2702809460326865, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Top Run", "price": 0.13825112329037673, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Train Sim World® 3: Birmingham Starter Pack", "price": 5.60452869931543, "region": "🇹🇷", "status": "", "data": "04.04" },
  { "name": "Train Sim World® 3: German Starter Pack", "price": 5.60452869931543, "region": "🇹🇷", "status": "", "data": "04.04" },
  { "name": "Train Sim World® 3: New York Starter Pack", "price": 6.467087941021591, "region": "🇹🇷", "status": "", "data": "04.04" },
  { "name": "Train Sim World® 3: Spirit of Steam Starter Pack", "price": 5.60452869931543, "region": "🇹🇷", "status": "", "data": "04.04" },
  { "name": "Train Sim World® 3: UK Starter Pack", "price": 5.60452869931543, "region": "🇹🇷", "status": "", "data": "04.04" },
  { "name": "Train Sim World® 3: US Starter Pack", "price": 5.60452869931543, "region": "🇹🇷", "status": "", "data": "04.04" },
  { "name": "Trials Fusion: The Awesome Max Edition", "price": 0.49251962672196714, "region": "🇦🇷", "status": " GOLD", "data": "04.04" },
  { "name": "Trials® Rising - Digital Gold Edition", "price": 2.2204117908458008, "region": "🇦🇷", "status": " GOLD", "data": "04.04" },
  { "name": "Tropico 5 - Complete Collection", "price": 1.3551078852515677, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Twelve Minutes", "price": 1.063546141312398, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Two & One Hundred Ways Bundle", "price": 0.9114699056929837, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Two Hundred Ways", "price": 0.6868118303461215, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Under Leaves", "price": 0.23083000049375402, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Unit 4: Couch Attack Bundle", "price": 0.6673085468819434, "region": "🇦🇷", "status": "", "data": "30.12" },
  { "name": "Unpacking", "price": 0.9815829753616748, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Unruly Heroes", "price": 0.42067841801214634, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Urban Exploration Bundle", "price": 0.3219276156618773, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "VAMPYR", "price": 1.579025329580803, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Valentino Rossi The Game", "price": 0.3698217548017578, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Vermintide - Digital Value Pack", "price": 1.971066014911371, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Violett Remastered", "price": 0.07011306966869106, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "WINGSPAN", "price": 0.7011306966869105, "region": "🇦🇷", "status": " GOLD", "data": "04.04" },
  { "name": "WRC Collection FIA World Rally Championship", "price": 3.1439786698266925, "region": "🇦🇷", "status": "", "data": "31.08" },
  { "name": "Wailing Heights", "price": 0.17627018219523036, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "We Sing Pop", "price": 0.2952648990273046, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Will Die Alone", "price": 0.2073766849355651, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "World War Z", "price": 1.059102355206636, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "World War Z", "price": 1.059102355206636, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Worms Battlegrounds + Worms W.M.D", "price": 0.49276650372784275, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Worms Rumble - Digital Deluxe Edition", "price": 0.31007751937984496, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "Yello Adventures", "price": 0.33575272799091493, "region": "🇦🇷", "status": "", "data": "07.04" },
  { "name": "Zeus Quest - The Rebirth of Earth", "price": 0.42067841801214634, "region": "🇦🇷", "status": "", "data": "04.04" },
  { "name": "orbit.industries", "price": 0.9114699056929837, "region": "🇦🇷", "status": "", "data": "04.04" }
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
  const res = value * usd
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

