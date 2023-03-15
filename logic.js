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
  { "name": "#SinucaAttack", "price": 0.13825112329037673, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "A Plague Tale: Requiem", "price": 16.043795980842344, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Aery - A Journey Beyond Time", "price": 0.42067841801214634, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "AeternoBlade II", "price": 0.531773070656199, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "AeternoBlade", "price": 0.22070804325285145, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "After Wave: Downfall", "price": 1.4544497103738812, "region": "🇹🇷", "status": " GOLD", "data": "21.03" },
  { "name": "An Evil Existence", "price": 0.16985138004246284, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Anthem™", "price": 0.7895126647904015, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Anthem™: Legion of Dawn Edition", "price": 1.110452772428776, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Archvale", "price": 0.7396435096035155, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Assassin's Creed IV Black Flag", "price": 1.1321748288572935, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Assassin's Creed Legendary Collection", "price": 11.107984002370019, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Assassin's Creed® Odyssey - ULTIMATE EDITION", "price": 5.553498247173258, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Assassin's Creed® Origins - DELUXE EDITION", "price": 3.3933244457611216, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Assassin's Creed® Syndicate Gold Edition", "price": 2.764612954186414, "region": "🇹🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Assassin's Creed® Valhalla Complete Edition", "price": 17.279662272255962, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Assassin's Creed® Valhalla Deluxe Edition", "price": 8.145311805658421, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Assassin's Creed® Valhalla Ragnarök Edition", "price": 11.058451816745656, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Assassin's Creed® Valhalla", "price": 5.864168271367205, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Awarded Platformer Bundle", "price": 0.8109909643015849, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "BALAN WONDERWORLD", "price": 4.486571879936809, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Backbeat", "price": 2.2174492667752927, "region": "🇦🇷", "status": "", "data": "17.03" },
  { "name": "Ballotron Oceans", "price": 0.2592208561694564, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Batman: Return to Arkham", "price": 1.2331506443489852, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Batman™: Arkham Knight", "price": 1.0852713178294575, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Battlefield 4", "price": 0.689527477410754, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Battlefield V Definitive Edition", "price": 4.319113217794895, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Battlefield™ 1 Revolution", "price": 1.3565891472868217, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Battlefield™ 1", "price": 0.8623413815237249, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Battlefield™ 2042 Ultimate Edition Xbox One & Xbox Series...", "price": 28.435492364402318, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Battlefield™ 2042 Xbox One & Xbox Series X|S", "price": 10.320695102685626, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Battlefield™ 2042 Xbox One", "price": 11.058361724189009, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Battlefield™ Hardline Standard Edition", "price": 0.689527477410754, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Battlefield™ Hardline Ultimate Edition", "price": 1.3565891472868217, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Battlefield™ V Standard Edition", "price": 2.837851182540858, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Battlefleet Gothic: Armada 2 - Windows 10", "price": 1.4797807732187824, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Battlefleet Gothic: Armada", "price": 0.4038907816126006, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "BigChick", "price": 0.3110650274033476, "region": "🇦🇷", "status": "", "data": "23.03" },
  { "name": "Black The Fall", "price": 0.42067841801214634, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Blade of Darkness", "price": 0.8453068681183034, "region": "🇦🇷", "status": "", "data": "23.03" },
  { "name": "Bridge Constructor Bundle", "price": 0.7369278625388831, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Bumblebee - Little Bee Adventure", "price": 0.5258480225151829, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Bundle: South Park™ : The Stick of Truth™ + The Fractured...", "price": 5.517114270668773, "region": "🇹🇷", "status": " GOLD", "data": "21.03" },
  { "name": "CHRONO CROSS: THE RADICAL DREAMERS EDITION", "price": 7.003686150605582, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Call of Duty®: Black Ops III - Zombies Deluxe", "price": 8.167456556082149, "region": "🇹🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Call of Duty®: Modern Warfare® II - Vault Edition", "price": 35.88357280402903, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Capcom Arcade 2nd Stadium Bundle", "price": 13.84623486045287, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Capcom Arcade Stadium Pack 1: Dawn of the Arcade (’84 – ’88)", "price": 3.814299116180319, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Capcom Arcade Stadium Pack 2: Arcade Revolution (’89 – ’92)", "price": 3.814299116180319, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Capcom Arcade Stadium Pack 3: Arcade Evolution (’92 – ’01)", "price": 3.814299116180319, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Capcom Arcade Stadium Packs 1, 2, and 3", "price": 7.593936700735694, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Capcom Fighting Bundle", "price": 14.00684570826751, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Capcom Fighting Collection", "price": 9.230647709320696, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Cars 3: Driven to Win", "price": 1.1102058954229004, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Chivalry 2 King's Edition", "price": 2.120673480472029, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Circuit Superstars Top Gear Time Attack Edition", "price": 5.6850836913049925, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Cities: Skylines - Mayor's Edition", "price": 0.9245543870043944, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Cities: Skylines - Premium Edition 2", "price": 1.2331506443489852, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Cities: Skylines - Xbox One Edition", "price": 0.49251962672196714, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Citizens of Space", "price": 0.37426554090751984, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Clumsy Rush + Brawl Chess Family Bundle", "price": 0.1584950377721819, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Conan Exiles – Year 1 DLC Bundle", "price": 2.070310571273392, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Conan Exiles", "price": 1.020589542290031, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Cricket 22", "price": 1.7627018219523034, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Crimson Spires", "price": 0.5609045573495285, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Cuccchi", "price": 0.28390855675702364, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Curse of the Dead Gods", "price": 1.0852713178294575, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "DC's Justice League: Cosmic Chaos", "price": 23.078803140275514, "region": "🇦🇷", "status": "", "data": "24.03" },
  { "name": "DMC4SE Demon Hunter Bundle", "price": 0.7455685577445317, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "DRAGON QUEST® XI S: Echoes of an Elusive Age™ - Definitiv...", "price": 6.092680358083203, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "DUCATI - 90th Anniversary", "price": 0.18713277045375992, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Dead Cells", "price": 0.7376684935565102, "region": "🇦🇷", "status": "", "data": "20.03" },
  { "name": "Dead Cells", "price": 1.063546141312398, "region": "🇦🇷", "status": "", "data": "20.03" },
  { "name": "Dead Cells: Medley of Pain Bundle", "price": 2.2673184219621785, "region": "🇦🇷", "status": "", "data": "20.03" },
  { "name": "Dead Cells: Return to Castlevania Bundle", "price": 1.773564410210833, "region": "🇦🇷", "status": "", "data": "20.03" },
  { "name": "Dead Cells: Return to Castlevania Bundle", "price": 1.773564410210833, "region": "🇦🇷", "status": "", "data": "20.03" },
  { "name": "Dead Rising 2 Off the Record", "price": 1.0724337135239224, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Dead Rising 2", "price": 0.8132128573544659, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Dead Rising 3: Apocalypse Edition", "price": 3.261716692996314, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Dead Rising 4", "price": 2.2206586678516764, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Dead Rising Triple Bundle Pack", "price": 1.297931170690762, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Dead Rising", "price": 0.8132128573544659, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Dead Space Digital Deluxe Edition", "price": 41.471386955019014, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Dead by Daylight", "price": 0.9850392534439343, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Deadbeat Heroes", "price": 0.22070804325285145, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Deep Space Anomaly", "price": 0.24193946575815928, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Defend the Rook - Supporter Edition", "price": 6.21685676196119, "region": "🇦🇷", "status": "", "data": "16.03" },
  { "name": "Defend the Rook", "price": 4.661531624944453, "region": "🇦🇷", "status": "", "data": "16.03" },
  { "name": "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles", "price": 7.403841406211425, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Devil May Cry 4 Special Edition", "price": 0.3688342467782551, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Devil May Cry 5 + Vergil", "price": 4.886535328099541, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Devil May Cry 5 Deluxe + Vergil", "price": 9.872611464968152, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Devil May Cry 5 Special Edition", "price": 6.786648891522243, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Devil May Cry HD Collection & 4SE Bundle", "price": 1.3670567323359502, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Devil May Cry HD Collection", "price": 0.8456524959265295, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "DmC Devil May Cry: Definitive Edition", "price": 0.8872759591171677, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Dou", "price": 0.07406310176270182, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Dragon Age™: Inquisition - Game of the Year Edition", "price": 2.0073723012111637, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Dragon's Dogma: Dark Arisen", "price": 0.449168024490199, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "EA SPORTS™ FIFA 23 Standard Edition Xbox One", "price": 18.430226434965775, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "EA SPORTS™ FIFA 23 Standard Edition Xbox Series X|S", "price": 21.06319115323855, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "EA SPORTS™ FIFA 23 Ultimate Edition Xbox One & Xbox Series X|S", "price": 26.3291205897841, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Escape Dead Island", "price": 0.19256406458302475, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Evil West", "price": 19.746210437959807, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "EvilUP", "price": 0.33575272799091493, "region": "🇦🇷", "status": "", "data": "25.03" },
  { "name": "F1® 22 Champions Edition Xbox One & Xbox Series X|S", "price": 6.294623018812027, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "F1® 22 Xbox One", "price": 4.73929788179529, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "F1® 22 Xbox Series X|S", "price": 5.5539920011850095, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "FIFA 22 Xbox One", "price": 21.06319115323855, "region": "🇹🇷", "status": "", "data": "30.12" },
  { "name": "FIFA 22 Xbox Series X|S", "price": 23.590837282780413, "region": "🇹🇷", "status": "", "data": "30.12" },
  { "name": "FINAL FANTASY IX", "price": 2.3675504863477017, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "FINAL FANTASY TYPE-0 HD", "price": 0.827531723695255, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "FINAL FANTASY TYPE-0™ HD", "price": 1.4744602422327542, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "FINAL FANTASY VII WINDOWS EDITION", "price": 1.8244210734212216, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "FINAL FANTASY VII", "price": 1.8244210734212216, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "FINAL FANTASY VIII Remastered WINDOWS EDITION", "price": 2.336492890995261, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "FINAL FANTASY VIII Remastered", "price": 2.336492890995261, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "FINAL FANTASY X/X-2 HD Remaster", "price": 5.55226386214388, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "FINAL FANTASY XII THE ZODIAC AGE", "price": 5.55226386214388, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "FINAL FANTASY XIII", "price": 0.46901693576260306, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "FINAL FANTASY XIII-2", "price": 0.5554238878190885, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "FINAL FANTASY XV MULTIPLAYER: COMRADES", "price": 0.8670320446353627, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "FINAL FANTASY XV POCKET EDITION HD", "price": 1.770601886140325, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "FINAL FANTASY XV ROYAL EDITION", "price": 4.179568193786204, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Far Cry® 3 Blood Dragon Classic Edition", "price": 3.7006863180763343, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Far Cry® 6 Deluxe Edition", "price": 11.848615019997036, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Far Cry® 6 Game of the Year Edition", "price": 17.279662272255962, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Fin and the Ancient Mystery", "price": 0.13825112329037673, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Fluffy Horde + Cyber Protocol", "price": 1.121809114699057, "region": "🇦🇷", "status": "", "data": "25.03" },
  { "name": "Flynn: Son of Crimson", "price": 0.8413568360242927, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "For Honor® Complete Edition", "price": 6.17069076186244, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "GRID Legends", "price": 6.319063842393719, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "GRID Legends: Deluxe Edition", "price": 8.39283069174937, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Galaxy Champions TV", "price": 0.19750160470053818, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Ghosts 'n Goblins Resurrection", "price": 6.601895734597157, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Gotham Knights", "price": 15.79815335999605, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Grand Theft Auto Online", "price": 4.935071347454698, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Grand Theft Auto V (Xbox One & Xbox Series X|S)", "price": 10.409162717219589, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Grand Theft Auto V: Premium Edition & Great White Shark C...", "price": 4.739336492890995, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Grand Theft Auto V: Premium Edition & Megalodon Shark Car...", "price": 7.951553449183781, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Grand Theft Auto V: Premium Edition & Whale Shark Card Bu...", "price": 5.476566614007373, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Gunman Tales", "price": 0.39500320940107636, "region": "🇦🇷", "status": "", "data": "18.03" },
  { "name": "Hidden Shapes: Animals + Lovely Cats", "price": 0.1431886634078902, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Hood: Outlaws & Legends", "price": 2.4305041228459983, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Hunt Ducks 4", "price": 0.07406310176270182, "region": "🇦🇷", "status": "", "data": "25.03" },
  { "name": "Hunting Simulator 2: Elite Edition Xbox One", "price": 0.9865205154791883, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Hunting Simulator 2: Elite Edition Xbox Series X|S", "price": 0.9865205154791883, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Injustice™ 2", "price": 0.7401372636152669, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Insurgency: Sandstorm - Deluxe Edition", "price": 15.797788309636653, "region": "🇹🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Iro Hero", "price": 0.2518145459931862, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "It Takes Two - Digital Version", "price": 10.366365476719498, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Jurassic Pinball", "price": 0.18046709129511676, "region": "🇦🇷", "status": "", "data": "18.03" },
  { "name": "Just Cause 3", "price": 0.6843430602873648, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Just Cause 3: XXL Edition", "price": 0.9342813410358959, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Just Cause 4 - Complete Edition", "price": 3.1595576619273302, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Just Cause 4 - Gold Edition", "price": 3.9490445859872607, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Just Cause 4: Reloaded", "price": 2.7640349577840317, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Just Dance® 2023 Edition", "price": 13.164823591363877, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "KINGDOM HEARTS - HD 1.5+2.5 ReMIX -", "price": 5.759347024749869, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "KINGDOM HEARTS HD 2.8 Final Chapter Prologue", "price": 7.372301211163771, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "KINGDOM HEARTS Melody of Memory (International)", "price": 9.872611464968152, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "KINGDOM HEARTS Ⅲ", "price": 3.5895916654322817, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Killing Floor 2 - Ultimate Edition", "price": 14.883375302424332, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Killing Floor 2", "price": 0.9862736384733126, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "L.A. Noire", "price": 3.4538093122006615, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "LEAP", "price": 1.6945637683306176, "region": "🇦🇷", "status": "", "data": "16.03" },
  { "name": "LEGO® Batman™ 3: Beyond Gotham", "price": 0.6776773811287217, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "LEGO® CITY Undercover", "price": 0.9865205154791883, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "LEGO® DC Super-Villains", "price": 0.9376388683158051, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "LEGO® Marvel Super Heroes 2", "price": 1.480027650224658, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "LEGO® Marvel's Avengers", "price": 1.3565891472868217, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "LEGO® The Hobbit™", "price": 1.4139020537124805, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "LEGO® Worlds", "price": 0.7890189107786502, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "LIGHTNING RETURNS: FINAL FANTASY XIII", "price": 0.5554238878190885, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Lara Croft and the Temple of Osiris", "price": 0.36957487779588205, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "League of Enthusiastic Losers + Cyber Protocol", "price": 0.26415839628696985, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Life is Strange 2 - Complete Season", "price": 1.6116130943563916, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Life is Strange Remastered Collection", "price": 7.50394944707741, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Life is Strange: True Colors - Deluxe Edition", "price": 10.531858873091101, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Life is Strange: True Colors - Ultimate Edition", "price": 15.139547130068458, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Life is Strange: True Colors", "price": 9.057398630858348, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Life of Fly 2", "price": 0.42067841801214634, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Light & Dark Bundle", "price": 1.1072433713523921, "region": "🇦🇷", "status": "", "data": "02.11" },
  { "name": "Little Mage Adventure", "price": 0.07406310176270182, "region": "🇦🇷", "status": "", "data": "18.03" },
  { "name": "Lost in Random™", "price": 1.776526934281341, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Lucid Cycle", "price": 0.24687700587567274, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "MARVEL VS. CAPCOM: INFINITE", "price": 0.7495185898385425, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "MONOPOLY PLUS", "price": 0.6280551029477115, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "MONSTER HUNTER: WORLD™", "price": 3.914165350184308, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "MXGP2", "price": 0.3698217548017578, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Macrotis: A Mother's Journey", "price": 0.25477707006369427, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Mad Max", "price": 0.9862736384733126, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Madden NFL 22 Xbox One", "price": 19.006073174344543, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Madden NFL 22 Xbox Series X|S", "price": 22.116723448378018, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Madden NFL 23 All Madden Edition Xbox One & Xbox Series X|S", "price": 15.69989631165753, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Madden NFL 23 Xbox One", "price": 25.276255369574876, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Madden NFL 23 Xbox One", "price": 9.47859576359058, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Madden NFL 23 Xbox Series X|S", "price": 11.107984002370019, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Madden NFL 23 Xbox Series X|S", "price": 29.621290672986717, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Maneater Apex Edition", "price": 1.9389720041475336, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Maneater", "price": 1.4170740137263615, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Marvel vs. Capcom: Infinite - Deluxe Edition", "price": 1.114896558534538, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Mass Effect™ Legendary Edition", "price": 9.47859576359058, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Mega Man 11", "price": 0.9841504962227817, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Mega Man 30th Anniversary Bundle", "price": 4.05865797659606, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Mega Man Legacy Collection 1 & 2 Combo Pack", "price": 1.099096430158495, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Mega Man Legacy Collection 2", "price": 0.7979064829901743, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Mega Man X Legacy Collection 1+2", "price": 1.6175381424974078, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Mega Man X Legacy Collection 2", "price": 0.8077815632252012, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Mega Man X Legacy Collection", "price": 0.8077815632252012, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Mega Man Zero/ZX Legacy Collection", "price": 3.7006863180763343, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Mega Man® Legacy Collection", "price": 0.2745272305337481, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Microsoft 365 Family", "price": 0.0, "region": "🇦🇷", "status": "", "data": "01.12" },
  { "name": "Microsoft 365 Family", "price": 0.0, "region": "🇹🇷", "status": "", "data": "01.12" },
  { "name": "Microsoft 365 Personal", "price": 0.0, "region": "🇦🇷", "status": "", "data": "01.12" },
  { "name": "Microsoft 365 Personal", "price": 0.0, "region": "🇹🇷", "status": "", "data": "01.12" },
  { "name": "Middle-earth™: Shadow of War™", "price": 1.0361427936601983, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Minemaze", "price": 0.07406310176270182, "region": "🇦🇷", "status": "", "data": "16.03" },
  { "name": "Mirror's Edge™ Catalyst", "price": 0.36908112378413077, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Monster Energy Supercross - The Official Videogame 2", "price": 1.4805214042364094, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Monster Energy Supercross 2 - Special Edition", "price": 2.961783439490446, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Monster Hunter Rise Deluxe Edition", "price": 12.359136387572407, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Monster Hunter Rise", "price": 9.882569773565034, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Monster Hunter World: Iceborne Master Edition Digital Deluxe", "price": 10.205371248025278, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Monster Hunter World: Iceborne Master Edition", "price": 8.341232227488153, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Mortal Kombat 11", "price": 2.220905544857552, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Mortal Kombat X", "price": 1.3565891472868217, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "MudRunner - American Wilds Edition", "price": 1.1840221201797265, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Murdered: Soul Suspect", "price": 0.14738557250777662, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "My Memory of Us", "price": 0.28045227867476424, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "NBA 2K23 Digital Deluxe Edition", "price": 11.108230879375895, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "NHL® 23 X-Factor Edition Xbox One & Xbox Series X|S", "price": 21.06319115323855, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "NHL® 23 Xbox One", "price": 14.744075829383888, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "NHL® 23 Xbox Series X|S", "price": 16.85044760400211, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Necromunda: Hired Gun", "price": 4.93556510146645, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Need for Speed™ Unbound Palace Edition", "price": 25.919616846886882, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Need for Speed™ Unbound", "price": 22.21646175875179, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "New Tales from the Borderlands", "price": 13.13849394418115, "region": "🇹🇷", "status": " GOLD", "data": "21.03" },
  { "name": "NieR Replicant ver.1.22474487139...", "price": 9.872611464968152, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "NieR:Automata BECOME AS GODS Edition", "price": 4.027798350861601, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "NieR:Automata™ BECOME AS GODS Edition", "price": 4.027798350861601, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Ninja Warrior Epic Quest", "price": 0.17281390411297093, "region": "🇦🇷", "status": "", "data": "31.05" },
  { "name": "Not for Broadcast Deluxe Edition", "price": 2.550733224707451, "region": "🇦🇷", "status": "", "data": "23.03" },
  { "name": "OCTOPATH TRAVELER", "price": 8.425487098472882, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "OUTRIDERS WORLDSLAYER", "price": 15.771458662453924, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "OUTRIDERS", "price": 8.688095590776674, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Obsurity", "price": 0.2246580753468622, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Octahedron", "price": 0.3875968992248062, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "OddBallers™", "price": 8.143238038809065, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Oh My Godheads", "price": 0.3051399792623315, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Onimusha: Warlords", "price": 1.454599318619464, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "PGA TOUR 2K23 Cross-Gen Edition", "price": 13.823384189996544, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "PGA TOUR 2K23 Tiger Woods Edition", "price": 29.622771935021973, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "PGA TOUR 2K23", "price": 11.404088283217302, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Phoenix Wright: Ace Attorney Trilogy", "price": 1.4911371154890634, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Plants vs. Zombies Garden Warfare", "price": 0.36908112378413077, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Plants vs. Zombies: Battle for Neighborville™ Deluxe Edition", "price": 1.702710709524515, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Plants vs. Zombies: Battle for Neighborville™", "price": 1.3323952007110058, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Plants vs. Zombies™ Garden Warfare 2", "price": 0.36908112378413077, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "PowerWash Simulator", "price": 10.068457082675092, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Pro Gymnast Simulator + Clumsy Rush", "price": 0.36908112378413077, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Promesa", "price": 0.13825112329037673, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Puyo Puyo Champions", "price": 0.24095195773465658, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Puyo Puyo™ Tetris® 2", "price": 1.8503431590381672, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "QUByte Classics - The Immortal by PIKO", "price": 0.28390855675702364, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "RACCOON CITY EDITION", "price": 5.388098999473407, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "RESIDENT EVIL 2 Deluxe Edition", "price": 1.7731694070014319, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "RESIDENT EVIL 2", "price": 1.5201204759788673, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "RESIDENT EVIL 3", "price": 4.0, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "RESIDENT EVIL 7 biohazard Gold Edition", "price": 1.7409766454352442, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "RESIDENT EVIL 7 biohazard", "price": 2.076729373426159, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Rabbids®: Party of Legends", "price": 7.372301211163771, "region": "🇹🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Resident Evil 0", "price": 0.24564262084629437, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Resident Evil 5", "price": 0.6596553596997975, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Resident Evil 6", "price": 0.6596553596997975, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Resident Evil 7 Gold Edition & Village Gold Edition", "price": 15.88653532809954, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Resident Evil Revelations 1 & 2 Bundle", "price": 1.5286624203821657, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Resident Evil Revelations 2 Deluxe Edition", "price": 0.5905297980546091, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Resident Evil Revelations", "price": 0.7386560015800128, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Resident Evil Triple Pack", "price": 1.7132770453759938, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Resident Evil Village Gold Edition", "price": 13.883096366508688, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Resident Evil Village", "price": 9.230647709320696, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Resident Evil", "price": 0.24564262084629437, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Resident Evil: Deluxe Origins Bundle", "price": 0.5912704290722363, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "RiMS Racing Xbox One", "price": 4.146052436676048, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "RiMS Racing Xbox Series X|S", "price": 4.146052436676048, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Riders Republic Ultimate Edition", "price": 14.81113909050511, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Riders Republic™ Gold Edition", "price": 11.848615019997036, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Rift Keeper", "price": 0.35056534834345526, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Rise of the Tomb Raider: 20 Year Celebration", "price": 1.4218009478672986, "region": "🇹🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Robolifter", "price": 0.29378363699205057, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Rock of Ages 2: Bigger & Boulder™", "price": 0.14713869550190095, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Rogue Lords", "price": 1.059102355206636, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Roguebook Xbox One", "price": 0.8862884510936652, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Roguebook Xbox Series X|S", "price": 1.059102355206636, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Romancing SaGa 2", "price": 0.531773070656199, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Romancing SaGa 3", "price": 0.6354614131239815, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Rugby 22 Xbox One", "price": 8.885597195477212, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Rugby 22 Xbox Series X|S", "price": 8.885597195477212, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "SEGA® Genesis Classics™", "price": 0.36908112378413077, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "SONIC FORCES™ Digital Standard Edition", "price": 2.8366167975114798, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "STAR OCEAN THE DIVINE FORCE DIGITAL DELUXE EDITION", "price": 23.34913112164297, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "STAR OCEAN THE DIVINE FORCE DIGITAL DELUXE UPGRADE", "price": 6.287519747235388, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "STAR OCEAN THE DIVINE FORCE", "price": 18.925750394944707, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": 0.9376388683158051, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": 8.438749814842245, "region": "🇦🇷", "status": "", "data": "01.01" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": 0.7895126647904015, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": 6.316101318323212, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "STAR WARS™ Battlefront™ II", "price": 1.2943761418061521, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "STAR WARS™ Battlefront™ II: Celebration Edition", "price": 2.2206586678516764, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "STAR WARS™ Battlefront™ Ultimate Edition", "price": 0.6159581296598035, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "STAR WARS™: Squadrons", "price": 1.8508369130499187, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Scribblenauts Showdown", "price": 0.5920110600898633, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Sentry Paragon", "price": 0.27650224658075345, "region": "🇦🇷", "status": "", "data": "22.03" },
  { "name": "Session: Skate Sim", "price": 1.7627018219523034, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Shadow of the Tomb Raider Definitive Edition", "price": 4.107424960505529, "region": "🇹🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Sleeping Dogs™ Definitive Edition", "price": 0.6040021063717746, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "SolSeraph", "price": 0.37426554090751984, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Sonic Colors: Ultimate - Digital Deluxe", "price": 5.675702365081716, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Sonic Frontiers Digital Deluxe Edition", "price": 14.883375302424332, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Sonic Mania", "price": 1.29015271195366, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Soul Hackers 2 - Digital Premium Edition", "price": 13.575766553103245, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "South Park™: The Fractured but Whole™", "price": 3.554502369668247, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Sparkle Bundle", "price": 0.6280551029477115, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Steelrising - Bastille Edition", "price": 12.34138152372488, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Strategic Mind: Spectre of Communism", "price": 9.327507035994667, "region": "🇦🇷", "status": "", "data": "17.03" },
  { "name": "Street Fighter 30th Anniversary Collection", "price": 2.957345971563981, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Strider", "price": 0.22070804325285145, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Super Monkey Ball Banana Mania Digital Deluxe Edition", "price": 6.169456376833062, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Super Monkey Ball: Banana Blitz HD", "price": 2.59072729965931, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Super Pixel Kid", "price": 0.07406310176270182, "region": "🇦🇷", "status": "", "data": "02.04" },
  { "name": "Supraland", "price": 0.9815829753616748, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Symmetry", "price": 0.11751345479682022, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Sébastien Loeb Rally EVO", "price": 0.19700785068878685, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Tamarin®", "price": 0.6990075544363797, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Team Sonic Racing™", "price": 4.317878832765516, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tears of Avia", "price": 0.5811484718313337, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Temple Dash: Jungle Adventure", "price": 0.07406310176270182, "region": "🇦🇷", "status": "", "data": "23.03" },
  { "name": "Tennis World Tour 2 - Complete Edition Xbox Series X|S", "price": 0.7050807287809214, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tennis World Tour 2 Ace Edition", "price": 4.442798597738606, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Teratopia", "price": 0.21132671702957584, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "The BioWare Bundle", "price": 1.171431392880067, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "The Callisto Protocol™ for Xbox One – Digital Deluxe Edition", "price": 17.277934133214835, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "The Callisto Protocol™ for Xbox Series X|S – Digital Delu...", "price": 22.46235125660396, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "The Crew® 2 Gold Edition", "price": 4.442798597738606, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "The Crew® 2 Special Edition", "price": 2.9615365624845698, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "The DioField Chronicle Digitale Deluxe Edition", "price": 17.08794102159031, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "The DioField Chronicle", "price": 13.928383359662982, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "The Disney Afternoon Collection", "price": 0.3940157013775737, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "The Division 2 - Warlords of New York - Ultimate Edition", "price": 5.923566878980892, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "The Escapists: Supermax Edition", "price": 1.2403100775193798, "region": "🇦🇷", "status": "", "data": "06.04" },
  { "name": "The FMV Bundle", "price": 1.8130647311509405, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "The Jackbox Party Quadpack", "price": 2.773663161013183, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "The LEGO Movie Videogame", "price": 0.5542388781908852, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "The LEGO® NINJAGO® Movie Video Game", "price": 1.1102058954229004, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "The Outer Worlds: Board-Approved Bundle", "price": 22.706687730384413, "region": "🇹🇷", "status": " GOLD", "data": "21.03" },
  { "name": "The Outer Worlds: Spacer's Choice Edition", "price": 27.17219589257504, "region": "🇹🇷", "status": " GOLD", "data": "21.03" },
  { "name": "The Yakuza Remastered Collection for Windows 10", "price": 2.5213548610082457, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "The Yakuza Remastered Collection", "price": 2.5213548610082457, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Titanfall® 2: Ultimate Edition", "price": 0.5917641830839875, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Deluxe Edition", "price": 3.5540413765861847, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Ultimate Edition", "price": 5.430306621241297, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tom Clancy's Rainbow Six® Siege Deluxe Edition", "price": 5.553498247173258, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tom Clancy's Rainbow Six® Siege Ultimate Edition", "price": 31.595576619273306, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Tom Clancy's Splinter Cell", "price": 0.39302819335407096, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tom Clancy's Splinter Cell: Pandora Tomorrow®", "price": 0.29477114501555324, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tom Clancy's The Division™ Gold Edition", "price": 2.6329647182727753, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Ultimate Edition", "price": 4.689675603614279, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tom Clancy’s Rainbow Six® Extraction Deluxe Edition", "price": 7.404828914234928, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tom Clancy’s Rainbow Six® Extraction", "price": 5.775440675455489, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tom Clancy’s Splinter Cell Double Agent", "price": 0.39302819335407096, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tom Clancy’s The Division® Franchise Bundle", "price": 4.146052436676048, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tomb Raider: Definitive Edition", "price": 1.1190100052659295, "region": "🇹🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Tour de France 2022 Xbox One", "price": 5.923566878980892, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tour de France 2022 Xbox Series X|S", "price": 6.66419789660791, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Train Life: A Railway Simulator", "price": 1.376833061768627, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "UFC® 4 Deluxe Edition", "price": 3.9490445859872607, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "UFC® 4", "price": 3.4552905742359155, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "ULTIMATE MARVEL VS. CAPCOM 3", "price": 0.8867822051054165, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "UNSIGHTED", "price": 0.8413568360242927, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "UnderDungeon + Cyber Protocol", "price": 1.2995605589295411, "region": "🇦🇷", "status": "", "data": "25.03" },
  { "name": "Unit 4: Couch Attack Bundle", "price": 0.6673085468819434, "region": "🇦🇷", "status": "", "data": "30.12" },
  { "name": "Unravel Two", "price": 0.6159581296598035, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Urban Trial Tricky Deluxe Edition", "price": 0.42067841801214634, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Valkyria Chronicles 4", "price": 1.2506582411795684, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Valkyria Revolution", "price": 0.8186441514837308, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Vampire: The Masquerade - Swansong PRIMOGEN EDITION", "price": 12.835629289487976, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Vampyr", "price": 1.4210240458203722, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Vermintide - Digital Value Pack", "price": 1.971066014911371, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Void Gore", "price": 0.13825112329037673, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "WORLD OF FINAL FANTASY MAXIMA", "price": 3.222238680689281, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "WRC Collection FIA World Rally Championship", "price": 3.1439786698266925, "region": "🇦🇷", "status": "", "data": "31.08" },
  { "name": "WRC Generations Fully Loaded Edition", "price": 13.575766553103245, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "WarDogs: Red's Return", "price": 0.1431886634078902, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Warhammer 40,000: Inquisitor - Martyr Ultimate Edition", "price": 1.7627018219523034, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Warhammer: Chaosbane Slayer Edition Xbox One", "price": 0.2834148027452723, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Warhammer: Chaosbane Slayer Edition Xbox Series X|S", "price": 0.4241346960944058, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Watch Dogs®2 - Deluxe Edition", "price": 2.7840968931016326, "region": "🇹🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Werewolf: The Apocalypse - Earthblood Xbox One", "price": 3.3565397718856462, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Werewolf: The Apocalypse - Earthblood Xbox Series X|S", "price": 3.3565397718856462, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Wildfire", "price": 0.5283167925739397, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Witchcrafty (Xbox Series X|S)", "price": 0.5609045573495285, "region": "🇦🇷", "status": "", "data": "24.03" },
  { "name": "Witchcrafty", "price": 0.5609045573495285, "region": "🇦🇷", "status": "", "data": "24.03" },
  { "name": "XCOM® 2 Collection", "price": 1.6719325961032123, "region": "🇹🇷", "status": " GOLD", "data": "21.03" },
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
  { "name": "Zapling Bygone", "price": 0.8309880017775145, "region": "🇦🇷", "status": "", "data": "24.03" },
  { "name": "Zombie Derby: Pixel Survival (Windows)", "price": 0.29378363699205057, "region": "🇦🇷", "status": "", "data": "24.03" },
  { "name": "Zombie Derby: Pixel Survival", "price": 0.29378363699205057, "region": "🇦🇷", "status": "", "data": "24.03" },
  { "name": "Zorro The Chronicles Xbox One", "price": 8.885103441465462, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Zorro The Chronicles Xbox Series X|S", "price": 8.885103441465462, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "resident evil 4", "price": 0.6596553596997975, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "ŌKAMI HD", "price": 0.8616007505060979, "region": "🇦🇷", "status": "", "data": "21.03" }
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

