const input = document.querySelector('.input');
const output = document.querySelector('.output-res');
const list = document.querySelector('.list')
const showBtn = document.querySelector('.show')


showBtn.addEventListener('click', () => {
  showBtn.classList.contains('active') ?
    hiddenMenu() : showMenu()
})

let usd = 84;

const arr = [
  { "name": "A Fold Apart", "price": 0.3588395835439199, "region": "🇦🇷", "status": " GOLD", "data": "14.03" },
  { "name": "A Hat in Time", "price": 0.7555847568988173, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "A Plague Tale: Innocence", "price": 1.9695744465783886, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "AER - Memories of Old", "price": 0.07530577175780855, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "AO Tennis 2", "price": 0.4351561710300212, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Aces of the Luftwaffe Squadron - Extended Edition", "price": 0.5033862326897806, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Adam's Venture: Origins", "price": 0.09046800768219952, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Adventure Time: Pirates of the Enchiridion", "price": 5.895077327403214, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Aery - Broken Memories", "price": 0.5407864146366117, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Aery - Dreamscape", "price": 0.4664914586070959, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Aground", "price": 0.6489436975639341, "region": "🇦🇷", "status": " GOLD", "data": "14.03" },
  { "name": "Ailment", "price": 0.3947235418983119, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Alchemist Simulator", "price": 0.6027494187809562, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Alien: Isolation - The Collection", "price": 4.32123723845143, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Ancestors: The Humankind Odyssey", "price": 2.279389467300111, "region": "🇦🇷", "status": " GOLD", "data": "14.03" },
  { "name": "Arcade Classics Anniversary Collection", "price": 1.2837480148226574, "region": "🇹🇷", "status": "", "data": "14.03" },
  { "name": "Are You Smarter Than A 5th Grader?", "price": 4.48397857070656, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Ary and the Secret of Seasons", "price": 1.4213869772366332, "region": "🇹🇷", "status": "", "data": "14.03" },
  { "name": "Assassin's Creed IV Black Flag", "price": 1.1381683430386447, "region": "🇹🇷", "status": "", "data": "14.03" },
  { "name": "Assassin's Creed Unity", "price": 1.2569493581320124, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Assassin's Creed® III Remastered", "price": 2.6260992621045185, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Assault On Metaltron", "price": 0.05054078641463661, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Asterix & Obelix Slap Them All!", "price": 0.8672798948751642, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Asterix & Obelix XXL3: The Crystal Menhir", "price": 0.6504599211563731, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Asterix & Obelix XXL: Romastered", "price": 0.8672798948751642, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Awarded Platformer Bundle", "price": 0.8301324168604063, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Awesome Zombie Games Bundle", "price": 0.20216314565854643, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "BROK the InvestiGator", "price": 1.4515313858283634, "region": "🇦🇷", "status": "", "data": "08.03" },
  { "name": "Backbeat", "price": 2.2697867178813302, "region": "🇦🇷", "status": "", "data": "17.03" },
  { "name": "Barn Finders and Treasure Hunter Simulator Bundle", "price": 1.3039522894976245, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Barn Finders", "price": 5.121757543673901, "region": "🇹🇷", "status": "", "data": "14.03" },
  { "name": "Beast Quest", "price": 0.14353583341756795, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Beasts of Maravilla Island", "price": 0.3588395835439199, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Beat Souls", "price": 0.3588395835439199, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "BioShock: The Collection", "price": 2.5145579671784013, "region": "🇹🇷", "status": "", "data": "14.03" },
  { "name": "Biomutant", "price": 5.197109067017082, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Bit Orchard: Animal Valley", "price": 0.19331850803598502, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Blaze and the Monster Machines: Axle City Racers", "price": 6.405505558496559, "region": "🇹🇷", "status": "", "data": "14.03" },
  { "name": "Bombfest", "price": 0.1890225411907409, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Borderlands 3", "price": 2.0840493278075405, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Borderlands 3: Super Deluxe Edition", "price": 4.421055291620338, "region": "🇦🇷", "status": " GOLD", "data": "14.03" },
  { "name": "Borderlands Legendary Collection", "price": 5.9078877713075695, "region": "🇹🇷", "status": " GOLD", "data": "14.03" },
  { "name": "Borderlands: Game of the Year Edition", "price": 2.3750126351966037, "region": "🇦🇷", "status": " GOLD", "data": "14.03" },
  { "name": "Borderlands: The Handsome Collection", "price": 3.4163044576973616, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Brewmaster: Beer Brewing Simulator", "price": 1.0350753057717579, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Bridge Constructor Bundle", "price": 0.7543212372384513, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Broken Universe - Tower Defense + Clumsy Rush", "price": 0.4306075002527039, "region": "🇦🇷", "status": " GOLD", "data": "14.03" },
  { "name": "Broken Universe - Tower Defense + Cyber Protocol", "price": 0.4306075002527039, "region": "🇦🇷", "status": " GOLD", "data": "14.03" },
  { "name": "Buildings Have Feelings Too", "price": 0.2870716668351359, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Bunny Park", "price": 1.1482866673405436, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Calico", "price": 0.5215809157990499, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Call of Cthulhu", "price": 1.4690312334568554, "region": "🇹🇷", "status": " GOLD", "data": "14.03" },
  { "name": "Call of Duty®: Modern Warfare® II - Vault Edition", "price": 36.73051652683716, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Candle: The Power of the Flame", "price": 0.2365308804204993, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Capcom Arcade 2nd Stadium Bundle", "price": 13.91953414505029, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Capcom Arcade Stadium Pack 1: Dawn of the Arcade (’84 – ’88)", "price": 3.9043262913170924, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Capcom Arcade Stadium Pack 2: Arcade Revolution (’89 – ’92)", "price": 3.9043262913170924, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Capcom Arcade Stadium Pack 3: Arcade Evolution (’92 – ’01)", "price": 3.9043262913170924, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Capcom Fighting Collection", "price": 9.279512969825303, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Carnival Games®", "price": 1.5025775801071464, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Cars 3: Driven to Win", "price": 1.1364095825331042, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Carto", "price": 0.7176791670878399, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Castlevania Anniversary Collection", "price": 1.2837480148226574, "region": "🇹🇷", "status": "", "data": "14.03" },
  { "name": "Chicken Police - Paint it RED!", "price": 0.8612150005054078, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Child of Light", "price": 0.22591731527342565, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Child of Light® Ultimate Edition", "price": 0.452845446275144, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Chubby Pixel Mega Bundle", "price": 0.9703830991610228, "region": "🇦🇷", "status": " GOLD", "data": "14.03" },
  { "name": "Cities: Skylines - Mayor's Edition", "price": 0.9463762256140705, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Cities: Skylines - Premium Edition 2", "price": 1.2622561407055493, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Cities: Skylines - Xbox One Edition", "price": 0.5041443444860002, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Clouds & Sheep 2", "price": 0.10007075710098048, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Commandos 2 - HD Remaster", "price": 3.535328009703831, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Contra Anniversary Collection", "price": 0.9087233397351663, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Control Ultimate Edition", "price": 3.795659078877713, "region": "🇹🇷", "status": "", "data": "14.03" },
  { "name": "Corpse Party", "price": 1.0047508339229758, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Crazy Sports Bundle", "price": 0.07581117962195491, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "CrushBorgs", "price": 0.17689275245122812, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Crysis Remastered Trilogy", "price": 7.780501364601233, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Curious Cases", "price": 0.283028403921965, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Curse of the Dead Gods (PC)", "price": 1.9057702488088935, "region": "🇹🇷", "status": "", "data": "14.03" },
  { "name": "Curved Space", "price": 0.21530375012635194, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "DEATHLOOP Deluxe Edition", "price": 11.116951379763467, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "DOOM Eternal Standard Edition", "price": 3.3340240574143327, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "DOOM", "price": 0.45992115637319314, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Dead Cells", "price": 0.755079349034671, "region": "🇦🇷", "status": "", "data": "20.03" },
  { "name": "Dead Cells", "price": 1.0886485393712726, "region": "🇦🇷", "status": "", "data": "20.03" },
  { "name": "Dead Cells: Medley of Pain Bundle", "price": 2.320832912160113, "region": "🇦🇷", "status": "", "data": "12.03" },
  { "name": "Dead Cells: Return to Castlevania Bundle", "price": 1.7019609825128879, "region": "🇦🇷", "status": "", "data": "12.03" },
  { "name": "Dead Cells: Return to Castlevania Bundle", "price": 1.7019609825128879, "region": "🇦🇷", "status": "", "data": "12.03" },
  { "name": "Dead by Daylight", "price": 1.0082886889720004, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Degrees of Separation", "price": 0.2190943091074497, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Deiland: Pocket Planet", "price": 0.5741433336702718, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Desperados III Deluxe Edition", "price": 5.606994844839786, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Destroy All Humans!", "price": 1.419185282522996, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Devil May Cry 4 Special Edition", "price": 0.3775396745173355, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Devil May Cry 5 + Vergil", "price": 5.001870009097341, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Devil May Cry 5 Deluxe + Vergil", "price": 10.10563024360659, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Devil May Cry 5 Special Edition", "price": 6.946831092691802, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Devil May Cry HD Collection & 4SE Bundle", "price": 1.3993227534620438, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Disciples: Liberation Digital Deluxe Edition", "price": 2.3877994541595067, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Dishonored 2", "price": 1.4141312038815324, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Dishonored® Definitive Edition", "price": 1.0095522086323663, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Disintegration", "price": 4.737956590788777, "region": "🇹🇷", "status": " GOLD", "data": "14.03" },
  { "name": "Double Cross", "price": 0.2870716668351359, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Dr. Atominus", "price": 0.17689275245122812, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Dragon's Dogma: Dark Arisen", "price": 0.4597695340139492, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "DreamWorks Spirit Lucky's Big Adventure", "price": 7.075710098049125, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Dying Light 2 Stay Human - Ultimate Edition", "price": 24.761447488122915, "region": "🇦🇷", "status": "", "data": "15.03" },
  { "name": "Dying Light 2 Stay Human", "price": 9.094814515313857, "region": "🇦🇷", "status": "", "data": "15.03" },
  { "name": "ELEX II", "price": 6.668351359547154, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Endling - Extinction is Forever", "price": 4.48397857070656, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Escape Dead Island", "price": 0.19710906701708278, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Escape First 2", "price": 0.283028403921965, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Escape First", "price": 0.283028403921965, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Escape Game - FORT BOYARD 2022", "price": 2.0307287981400988, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Escape Game Fort Boyard", "price": 0.8672798948751642, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Evan's Remains", "price": 0.20216314565854643, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "FIFA 22 Xbox One", "price": 21.174695606140816, "region": "🇹🇷", "status": "", "data": "30.12" },
  { "name": "FIFA 22 Xbox Series X|S", "price": 23.715722604552674, "region": "🇹🇷", "status": "", "data": "30.12" },
  { "name": "FOR HONOR : MARCHING FIRE EDITION", "price": 3.1575356312544223, "region": "🇦🇷", "status": " GOLD", "data": "14.03" },
  { "name": "Fallout 4", "price": 1.4993935105630243, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Fallout 4: Game of the Year Edition (PC)", "price": 3.0004548670777313, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Fallout 4: Game of the Year Edition", "price": 3.0004548670777313, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Fantasy Dash", "price": 0.07581117962195491, "region": "🇦🇷", "status": "", "data": "13.03" },
  { "name": "Far Cry Primal - Apex Edition", "price": 2.139756484912652, "region": "🇹🇷", "status": "", "data": "14.03" },
  { "name": "Far Cry® 6 Deluxe Edition", "price": 12.128272515920345, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Farm Together", "price": 0.8612150005054078, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Fast & Furious: Spy Racers Rise of SH1FT3R", "price": 6.405505558496559, "region": "🇹🇷", "status": "", "data": "14.03" },
  { "name": "Fishing: North Atlantic Enhanced Edition", "price": 1.6392904073587384, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Fishing: North Atlantic", "price": 1.0840998685939554, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Floppy Knights", "price": 0.7176791670878399, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Flowing Lights", "price": 0.23683412513898713, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Fobia - St. Dinfna Hotel", "price": 1.3009198423127462, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Forager", "price": 0.5741433336702718, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Fury Unleashed", "price": 0.3588395835439199, "region": "🇦🇷", "status": " GOLD", "data": "14.03" },
  { "name": "Garden Story", "price": 0.7176791670878399, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Garfield Kart Furious Racing", "price": 0.6504599211563731, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Garfield Lasagna Party", "price": 2.0307287981400988, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Gas Station Simulator", "price": 5.463208046585495, "region": "🇹🇷", "status": "", "data": "14.03" },
  { "name": "Generation Zero ® - Base Warfare Starter Bundle", "price": 3.610381077529566, "region": "🇦🇷", "status": " GOLD", "data": "14.03" },
  { "name": "Ghostrunner: Complete Edition", "price": 8.298041291688724, "region": "🇹🇷", "status": "", "data": "14.03" },
  { "name": "Ghosts 'n Goblins Resurrection", "price": 6.636844891476972, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Giana Sisters: Twisted Dreams - Director's Cut", "price": 0.1506115435156171, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "God's Trigger", "price": 0.7094410189022541, "region": "🇦🇷", "status": " GOLD", "data": "14.03" },
  { "name": "Gotham Knights", "price": 16.17103002122713, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Grand Theft Auto V", "price": 10.10563024360659, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Grand Theft Auto V: Premium Edition", "price": 3.914383907813605, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Grand Theft Auto: The Trilogy – The Definitive Edition", "price": 14.002117522498676, "region": "🇹🇷", "status": " GOLD", "data": "14.03" },
  { "name": "Gravel Special Edition", "price": 0.30273931062367326, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Gravel", "price": 0.25219852420903666, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "GreedFall - Gold Edition", "price": 5.280571731074643, "region": "🇹🇷", "status": " GOLD", "data": "14.03" },
  { "name": "GreedFall - Windows 10", "price": 2.879308602041848, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Grow: Song of the Evertree", "price": 3.6209634727368982, "region": "🇹🇷", "status": "", "data": "08.03" },
  { "name": "Gunborg: Dark Matters", "price": 0.43262913170928935, "region": "🇦🇷", "status": " GOLD", "data": "14.03" },
  { "name": "Gunman Tales", "price": 0.40432629131709286, "region": "🇦🇷", "status": "", "data": "18.03" },
  { "name": "Happi Basudei", "price": 0.17689275245122812, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Hardspace: Shipbreaker", "price": 15.087347803070408, "region": "🇹🇷", "status": "", "data": "14.03" },
  { "name": "Hasbro Family Fun Pack - Super Edition", "price": 1.0095522086323663, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Haunted Halloween '86", "price": 0.3588395835439199, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Hotel Transylvania: Scary-Tale Adventures", "price": 6.405505558496559, "region": "🇹🇷", "status": "", "data": "14.03" },
  { "name": "Hunt Ducks 4", "price": 0.07581117962195491, "region": "🇦🇷", "status": "", "data": "12.03" },
  { "name": "Hunter's Legacy", "price": 0.05291620337612453, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Hunting Simulator 2 Xbox One", "price": 0.868290710603457, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Hunting Simulator 2 Xbox Series X|S", "price": 0.7217224300010108, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "I, Zombie", "price": 0.049277266754270695, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "INDIE BUNDLE: Shiness and Seasons after Fall", "price": 0.6812898008693016, "region": "🇦🇷", "status": " GOLD", "data": "14.03" },
  { "name": "Imagine Earth", "price": 0.8164864045284544, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Imp of the Sun", "price": 0.9616900838977054, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "In Sound Mind", "price": 1.2880319417770139, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Insurgency: Sandstorm - Gold Edition", "price": 18.528321863419798, "region": "🇹🇷", "status": "", "data": "14.03" },
  { "name": "Iris and the Giant Deluxe Soundtrack Edition", "price": 5.453856262003436, "region": "🇦🇷", "status": "", "data": "10.03" },
  { "name": "Iris and the Giant", "price": 4.771555645405842, "region": "🇦🇷", "status": "", "data": "10.03" },
  { "name": "It Takes Two - Digital Version", "price": 21.22207621550591, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "It's Quiz Time", "price": 0.4023046598605074, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "JUJU", "price": 0.18826442939452137, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Joy Ball Adventure", "price": 0.07581117962195491, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Jurassic Pinball", "price": 0.1847265743454968, "region": "🇦🇷", "status": "", "data": "18.03" },
  { "name": "Just Dance® 2023 Deluxe Edition", "price": 17.469560614081523, "region": "🇹🇷", "status": "", "data": "14.03" },
  { "name": "Just Dance® 2023 Edition", "price": 13.234515616728427, "region": "🇹🇷", "status": "", "data": "14.03" },
  { "name": "Just Dance® 2023 Ultimate Edition", "price": 23.028057173107463, "region": "🇹🇷", "status": "", "data": "14.03" },
  { "name": "Kao the Kangaroo A Well Good Bundle", "price": 8.184574951986253, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Kao the Kangaroo", "price": 6.883655109673506, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Kaze and the Wild Masks", "price": 1.0824320226422721, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Kerbal Space Program Enhanced Edition", "price": 2.3356273160402328, "region": "🇹🇷", "status": "", "data": "14.03" },
  { "name": "KeyWe", "price": 0.9072071161427271, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Kingdoms of Amalur: Re-Reckoning FATE Edition", "price": 2.403719801880117, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "L.O.L. Surprise! B.B.s BORN TO TRAVEL™", "price": 9.608258337744838, "region": "🇹🇷", "status": "", "data": "14.03" },
  { "name": "LA-MULANA", "price": 0.21631456585464467, "region": "🇦🇷", "status": " GOLD", "data": "14.03" },
  { "name": "LEAP", "price": 1.7345597897503284, "region": "🇦🇷", "status": "", "data": "16.03" },
  { "name": "LEGO® Builder's Journey", "price": 0.7176791670878399, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "LUMINES REMASTERED", "price": 0.3012230870312342, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Lake", "price": 0.6762357222278379, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "League of Enthusiastic Losers + Brawl Chess", "price": 0.23627817648842614, "region": "🇦🇷", "status": " GOLD", "data": "14.03" },
  { "name": "Lemon Cake", "price": 1.7345597897503284, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Light & Dark Bundle", "price": 1.133377135348226, "region": "🇦🇷", "status": "", "data": "02.11" },
  { "name": "Little Big Workshop", "price": 1.0047508339229758, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Little Mage Adventure", "price": 0.07581117962195491, "region": "🇦🇷", "status": "", "data": "18.03" },
  { "name": "Little Mouse's Encyclopedia + Brawl Chess", "price": 0.16122510866269077, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Little Nightmares Complete Edition", "price": 1.1359041746689578, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Lootbox Lyfe+", "price": 0.5741433336702718, "region": "🇦🇷", "status": "", "data": "11.03" },
  { "name": "Lost Words: Beyond the Page", "price": 1.0098049125644395, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "MONOPOLY DEAL", "price": 0.059132720105124825, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "MONOPOLY FAMILY FUN PACK", "price": 0.22591731527342565, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "MONSTER HUNTER: WORLD™", "price": 3.934886183165696, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "MXGP 2019 - The Official Motocross Videogame", "price": 1.1364095825331042, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Mable & The Wood", "price": 0.21631456585464467, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Madden NFL 22 Xbox One", "price": 19.454664914586072, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Madden NFL 22 Xbox Series X|S", "price": 22.63873445870818, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Madden NFL 23 Xbox One", "price": 25.87283938138077, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Madden NFL 23 Xbox Series X|S", "price": 30.320428585868793, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Mafia: Definitive Edition", "price": 4.597442636207419, "region": "🇦🇷", "status": " GOLD", "data": "14.03" },
  { "name": "Mafia: Trilogy", "price": 7.641716365106641, "region": "🇦🇷", "status": " GOLD", "data": "14.03" },
  { "name": "Mars Horizon", "price": 0.3752147983422622, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Marsupilami: Hoobadventure", "price": 1.0840998685939554, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Marvel vs. Capcom: Infinite - Deluxe Edition", "price": 1.1412109572424947, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Matchpoint - Tennis Championships | Legends Edition", "price": 18.949004346507632, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Meg's Monster", "price": 0.973415546345901, "region": "🇦🇷", "status": "", "data": "09.03" },
  { "name": "Mega Man 11", "price": 1.0073789548165368, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Mega Man 30th Anniversary Bundle", "price": 4.154452643283129, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Mega Man Legacy Collection 2", "price": 0.8167391084605276, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Mega Man X Legacy Collection 2", "price": 0.8268472657434549, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Mega Man X Legacy Collection", "price": 0.8268472657434549, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Mega Man Zero/ZX Legacy Collection", "price": 3.788031941777014, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Mega Man® Legacy Collection", "price": 0.28100677246537953, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Megaparty: A Tootuff Adventure", "price": 0.6504599211563731, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Microsoft 365 Family", "price": 0.0, "region": "🇦🇷", "status": "", "data": "01.12" },
  { "name": "Microsoft 365 Family", "price": 0.0, "region": "🇹🇷", "status": "", "data": "01.12" },
  { "name": "Microsoft 365 Personal", "price": 0.0, "region": "🇦🇷", "status": "", "data": "01.12" },
  { "name": "Microsoft 365 Personal", "price": 0.0, "region": "🇹🇷", "status": "", "data": "01.12" },
  { "name": "Minemaze", "price": 0.07581117962195491, "region": "🇦🇷", "status": "", "data": "16.03" },
  { "name": "Monopoly Madness", "price": 4.367390153520381, "region": "🇹🇷", "status": "", "data": "14.03" },
  { "name": "Monster Energy Supercross - The Official Videogame 3", "price": 1.8945213787526534, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Monster Energy Supercross 3 - Special Edition", "price": 3.4107449711917517, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Monster Harvest", "price": 0.4306075002527039, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Monster Hunter Rise Deluxe Edition", "price": 12.424563260984646, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Monster Hunter Rise", "price": 9.934886183165695, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Monster Hunter World: Iceborne Master Edition Digital Deluxe", "price": 10.259396506087878, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Monster Hunter World: Iceborne Master Edition", "price": 8.385389094759132, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Monster Jam Steel Titans 2", "price": 1.9690690387142424, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Monster Truck Championship - Rebel Hunter Edition Xbox One", "price": 0.9021530375012634, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Monster Truck Championship - Rebel Hunter Edition Xbox Series X|S", "price": 0.9021530375012634, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Mortal Kombat 11", "price": 2.273324572930355, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Mortal Kombat X", "price": 1.3886081067421407, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "MotoGP™19", "price": 0.9468816334782169, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "MotoGP™20", "price": 1.1364095825331042, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "MudRunner", "price": 0.8581825533205296, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "My Little Riding Champion", "price": 0.2870716668351359, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "My Universe - Interior Designer", "price": 0.8672798948751642, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "My Universe - My Baby", "price": 0.8672798948751642, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "My Universe - School Teacher", "price": 1.0840998685939554, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Mystik Belle", "price": 0.37652885878904274, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Mythic Ocean", "price": 0.27039320731830585, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "N++ (NPLUSPLUS)", "price": 0.37652885878904274, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "NAMCO MUSEUM® ARCHIVES Vol 1", "price": 1.17787188988883, "region": "🇹🇷", "status": "", "data": "14.03" },
  { "name": "NARUTO SHIPPUDEN: Ultimate Ninja STORM Legacy", "price": 1.3130496310522592, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "NARUTO SHIPPUDEN™: Ultimate Ninja® STORM 3 Full Burst", "price": 0.5043970484180733, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "NBA 2K23 Michael Jordan Edition", "price": 22.235924390983524, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "NBA 2K23 for Xbox One", "price": 8.843374102901041, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "NBA 2K23 for Xbox Series X|S", "price": 12.128272515920345, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Need for Speed™ Unbound Palace Edition", "price": 26.531385828363486, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Need for Speed™ Unbound", "price": 22.74082684726574, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Newt One", "price": 0.14353583341756795, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Next Space Rebels", "price": 0.8612150005054078, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Niche - a genetics survival game", "price": 0.5741433336702718, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Ninja Warrior Epic Quest", "price": 0.17689275245122812, "region": "🇦🇷", "status": "", "data": "31.05" },
  { "name": "Ninjin: Clash of Carrots", "price": 0.14353583341756795, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "No Straight Roads", "price": 1.2156575356312544, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Not for Broadcast Deluxe Edition", "price": 2.6109370261801272, "region": "🇦🇷", "status": "", "data": "23.03" },
  { "name": "ONE PIECE ODYSSEY", "price": 21.57737794400081, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "OddBallers™", "price": 8.335439199433942, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "OlliOlli World Rad Edition", "price": 14.779894875164256, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "OlliOlli World", "price": 9.094309107449712, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Onimusha: Warlords", "price": 1.4889315677751946, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Onsen Master", "price": 0.4498129990902658, "region": "🇦🇷", "status": " GOLD", "data": "14.03" },
  { "name": "Outbreak: The New Nightmare Definitive Collection", "price": 1.4515313858283634, "region": "🇦🇷", "status": " GOLD", "data": "14.03" },
  { "name": "Outer Wilds", "price": 1.0886485393712726, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Outer Wilds: Archaeologist Edition", "price": 1.7406246841200848, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "PAC-MAN WORLD Re-PAC", "price": 10.180683311432325, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "PC Building Simulator", "price": 0.3234610330536743, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "PGA TOUR 2K23 Cross-Gen Edition", "price": 14.149651268573738, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "PGA TOUR 2K23 Tiger Woods Edition", "price": 30.321944809461232, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "PGA TOUR 2K23", "price": 11.673253815829375, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Paper Flight - Speed Rush", "price": 0.5023754169614879, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Pathfinder: Wrath of the Righteous", "price": 5.051551602142929, "region": "🇦🇷", "status": " GOLD", "data": "14.03" },
  { "name": "Paw Patrol: On a Roll", "price": 10.613565147073688, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Phoenix Wright: Ace Attorney Trilogy", "price": 1.5263317497220257, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Pile Up! Box by Box", "price": 0.7030223390275951, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Plants vs. Zombies Garden Warfare", "price": 0.37779237844940866, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Plants vs. Zombies: Battle for Neighborville™ Deluxe Edition", "price": 1.7428990195087435, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Plants vs. Zombies: Battle for Neighborville™", "price": 1.363843121398969, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Plants vs. Zombies™ Garden Warfare 2", "price": 0.37779237844940866, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Port Royale 4 - Extended Edition", "price": 1.981198827453755, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Portal Knights - Legendary Edition", "price": 1.7345597897503284, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Praetorians - HD Remaster", "price": 3.535328009703831, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Prey", "price": 1.7676640048519154, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Prey®: Digital Deluxe Edition", "price": 2.2730718689982816, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Princess Farmer", "price": 0.5407864146366117, "region": "🇦🇷", "status": " GOLD", "data": "14.03" },
  { "name": "Project Wingman", "price": 1.270089962599818, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Pure Farming 2018 Digital Deluxe Edition", "price": 0.7267765086424745, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Pure Farming 2018", "price": 0.5296674416253916, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "RABBIDS INVASION - GOLD EDITION", "price": 0.3398867886384312, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "RESIDENT EVIL 2 Deluxe Edition", "price": 1.81502072172243, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "RIDE", "price": 0.24209036692610936, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Rabbids Invasion : The Interactive TV Show", "price": 0.18826442939452137, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Railway Empire", "price": 0.7176791670878399, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Real Farm - Premium Edition", "price": 0.7252602850500354, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Resident Evil 7 Gold Edition & Village Gold Edition", "price": 16.15881418740074, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Resident Evil Village Gold Edition", "price": 23.260984647961884, "region": "🇹🇷", "status": "", "data": "07.03" },
  { "name": "Resident Evil Village", "price": 18.559555320275276, "region": "🇹🇷", "status": "", "data": "07.03" },
  { "name": "Retro Tank Arcade", "price": 0.07581117962195491, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Ride 2", "price": 0.3532800970383099, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Rims Racing : Ultimate Edition Xbox One & Xbox Series X|S", "price": 6.897301122005458, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Risk: Urban Assault", "price": 0.37652885878904274, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Rogue Stormers & Giana Sisters Bundle", "price": 0.2516931163448903, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Roguebook - Deluxe Edition Xbox Series X|S & Xbox One", "price": 1.2609926210451834, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Roman Rumble in Las Vegum - Asterix & Obelix XXL 2", "price": 0.5043970484180733, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Ryan's Rescue Squad", "price": 6.405505558496559, "region": "🇹🇷", "status": "", "data": "14.03" },
  { "name": "SILT", "price": 0.7246537956130596, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": 8.637925806125542, "region": "🇦🇷", "status": "", "data": "01.01" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": 6.465177398160315, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Save Your Nuts", "price": 0.3588395835439199, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Scott Pilgrim vs. The World™: The Game – Complete Edition", "price": 1.2006352567496028, "region": "🇹🇷", "status": "", "data": "14.03" },
  { "name": "Scribblenauts Showdown", "price": 0.605984029111493, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Sentry Paragon", "price": 0.283028403921965, "region": "🇦🇷", "status": "", "data": "22.03" },
  { "name": "Serial Cleaner", "price": 0.07530577175780855, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Session: Skate Sim Deluxe Edition", "price": 2.1707267765086424, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Shape Up Gold Edition", "price": 0.37779237844940866, "region": "🇦🇷", "status": " GOLD", "data": "14.03" },
  { "name": "Sid Meier's Civilization VI", "price": 2.74219163578613, "region": "🇹🇷", "status": "", "data": "14.03" },
  { "name": "Skelattack", "price": 0.833774483853891, "region": "🇹🇷", "status": "", "data": "14.03" },
  { "name": "Skully", "price": 1.7734250926416093, "region": "🇹🇷", "status": "", "data": "14.03" },
  { "name": "Skydrift Infinity", "price": 0.7030223390275951, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Skyrim Anniversary Edition + Fallout 4 G.O.T.Y Bundle", "price": 8.084504194885271, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Skyrim Anniversary Edition + Fallout 4 G.O.T.Y Bundle", "price": 8.084504194885271, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Smart Moves Bundle", "price": 0.37779237844940866, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Snake Pass", "price": 0.35252198524209033, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Soulstice", "price": 2.0307287981400988, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "South Park™: The Fractured but Whole™ - Gold Edition", "price": 4.4865007940709365, "region": "🇹🇷", "status": "", "data": "14.03" },
  { "name": "Space Crew: Legendary Edition", "price": 1.9997472960679268, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Space Warlord Organ Trading Simulator", "price": 0.9616900838977054, "region": "🇦🇷", "status": " GOLD", "data": "14.03" },
  { "name": "Sparkle Bundle", "price": 0.6428788031941777, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Sparklite", "price": 0.34772061053269987, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "SpellForce III Reforced: Complete Edition", "price": 4.445567573031436, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Spitlings", "price": 0.35691903366016375, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "SpongeBob SquarePants: Battle for Bikini Bottom - Rehydrated", "price": 1.2008490852117657, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Star Crossed", "price": 0.14353583341756795, "region": "🇦🇷", "status": " GOLD", "data": "14.03" },
  { "name": "Steelrising - Standard Edition", "price": 9.852926311533407, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Stranded Sails - Explorers of the Cursed Islands", "price": 0.4346507631658748, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Strategic Mind: Spectre of Communism", "price": 9.547659961589002, "region": "🇦🇷", "status": "", "data": "09.03" },
  { "name": "Strider", "price": 0.22591731527342565, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Stunt Kite Party", "price": 0.14353583341756795, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Summer in Mara", "price": 0.7257656929141817, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Super Pixel Kid", "price": 0.07581117962195491, "region": "🇦🇷", "status": "", "data": "12.03" },
  { "name": "Swim Out", "price": 0.1073991711311028, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "TRIVIAL PURSUIT Live! 2", "price": 2.4976177871889886, "region": "🇹🇷", "status": "", "data": "14.03" },
  { "name": "TY the Tasmanian Tiger HD", "price": 2.3981603153745072, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "TY the Tasmanian Tiger™ 2: Bush Rescue™ HD", "price": 2.3981603153745072, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Tales of Vesperia™: Definitive Edition", "price": 1.6162943495400788, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Teacup", "price": 0.4306075002527039, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Temple Dash: Jungle Adventure", "price": 0.07581117962195491, "region": "🇦🇷", "status": "", "data": "23.03" },
  { "name": "TerraTech", "price": 1.0886485393712726, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "The Addams Family: Mansion Mayhem", "price": 6.405505558496559, "region": "🇹🇷", "status": "", "data": "14.03" },
  { "name": "The Colonists", "price": 1.0431618315980997, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "The Crew® Ultimate Edition", "price": 1.1658243202264227, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "The Disney Afternoon Collection", "price": 0.4033154755888001, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "The Elder Scrolls V: Skyrim Anniversary Edition", "price": 5.052057010007076, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "The Escapists: Supermax Edition", "price": 1.2695845547356714, "region": "🇦🇷", "status": "", "data": "30.04" },
  { "name": "The Evil Within (PC)", "price": 0.4851915495805114, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "The Evil Within Digital Bundle", "price": 0.8248256342868694, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "The Evil Within", "price": 0.45360355807136354, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "The Evil Within® 2", "price": 1.5354290912766602, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "The FMV Bundle", "price": 1.8558576771454562, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "The Good Life", "price": 1.7406246841200848, "region": "🇦🇷", "status": " GOLD", "data": "14.03" },
  { "name": "The Great Perhaps", "price": 0.21530375012635194, "region": "🇦🇷", "status": " GOLD", "data": "14.03" },
  { "name": "The Jackbox Party Quadpack", "price": 2.8391286768422113, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "The King's Bird", "price": 0.2870716668351359, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "The Long Journey Home", "price": 0.20165773779440005, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "The Outer Worlds", "price": 13.832715722604553, "region": "🇹🇷", "status": "", "data": "14.03" },
  { "name": "The Quarry - Deluxe Edition", "price": 20.21378752653391, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "The Quarry for Xbox One", "price": 15.15970888507025, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "The Quarry for Xbox Series X|S", "price": 17.686748205802083, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "The Sinking City – Necronomicon Edition", "price": 6.569291418174466, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "The Sisters - Party of the Year", "price": 1.0840998685939554, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "The Smurfs - Mission Vileaf", "price": 1.1604164560800565, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "The Surge 1 & 2 - Dual Pack (Xbox)", "price": 3.5733192165166754, "region": "🇹🇷", "status": " GOLD", "data": "14.03" },
  { "name": "The Unicorn Princess", "price": 0.2870716668351359, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "The Wild at Heart", "price": 1.0886485393712726, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Through the Darkest of Times", "price": 0.4867077731729505, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Time on Frog Island", "price": 0.9072071161427271, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Tiny Tina's Assault on Dragon Keep: A Wonderlands One-sho...", "price": 2.218740523602547, "region": "🇦🇷", "status": " GOLD", "data": "14.03" },
  { "name": "Tiny Tina's Wonderlands", "price": 15.12938441322147, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Tiny Tina's Wonderlands: Chaotic Great Edition", "price": 16.91371095817893, "region": "🇹🇷", "status": "", "data": "14.03" },
  { "name": "Tiny Tina's Wonderlands: Next-Level Edition", "price": 18.50185283218634, "region": "🇹🇷", "status": "", "data": "14.03" },
  { "name": "Tom Clancy's The Division", "price": 1.5881418740074114, "region": "🇹🇷", "status": " GOLD", "data": "14.03" },
  { "name": "Towaga: Among Shadows", "price": 0.10815728292732234, "region": "🇦🇷", "status": " GOLD", "data": "14.03" },
  { "name": "Townsmen - A Kingdom Rebuilt", "price": 0.8672798948751642, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Tracks - The Train Set Game", "price": 0.7176791670878399, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Tracks - The Train Set Game: Toybox Bundle", "price": 0.7808551501061356, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Train Life - Orient-Express Train Edition", "price": 1.4505205701000707, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Trials Fusion", "price": 0.2514404124128171, "region": "🇦🇷", "status": " GOLD", "data": "14.03" },
  { "name": "Tropico 5 - Penultimate Edition", "price": 0.9072071161427271, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Tropico 6", "price": 10.10563024360659, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Truck Driver", "price": 3.535328009703831, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Turbo Golf Racing (Game Preview)", "price": 3.0142525017689272, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Two Point Hospital: JUMBO Edition", "price": 3.53608612150005, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "UFC® 4 Deluxe Edition", "price": 4.042252097442636, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "UFC® 4", "price": 3.5368442332962697, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "ULTIMATE MARVEL VS. CAPCOM 3", "price": 0.9077125240068734, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "UNO® Ultimate Edition", "price": 1.8793012175754367, "region": "🇹🇷", "status": "", "data": "14.03" },
  { "name": "UNO®", "price": 0.5640351763873446, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Umurangi Generation Special Edition", "price": 1.3608106742140906, "region": "🇦🇷", "status": " GOLD", "data": "14.03" },
  { "name": "Unbox: Newbie's Adventure", "price": 0.2516931163448903, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Unit 4: Couch Attack Bundle", "price": 0.6830587283938138, "region": "🇦🇷", "status": "", "data": "30.12" },
  { "name": "Unravel Two", "price": 0.6304963105225917, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "V-Rally 4 Ultimate Edition", "price": 0.8703123420600424, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Vampire: The Masquerade - Swansong Xbox One", "price": 11.116951379763467, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Vampire: The Masquerade - Swansong Xbox Series X|S", "price": 11.116951379763467, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Vermintide - Digital Value Pack", "price": 2.0175881936722933, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "WATCH_DOGS™ COMPLETE EDITION", "price": 0.7035277468917416, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "WATCH_DOGS™", "price": 0.4758415040938037, "region": "🇦🇷", "status": " GOLD", "data": "14.03" },
  { "name": "WRC Collection FIA World Rally Championship", "price": 3.218184574951986, "region": "🇦🇷", "status": "", "data": "31.08" },
  { "name": "WRC Generations - The FIA WRC Official Game", "price": 10.10563024360659, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "WW2: Bunker Simulator", "price": 0.9476397452744364, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Warhammer 40,000: Inquisitor - Martyr Complete Collection", "price": 0.7217224300010108, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Warhammer 40,000: Mechanicus", "price": 0.7252602850500354, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Way of the Hunter", "price": 4.974375821287779, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "We should talk.", "price": 0.25270393207318304, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Webgeon Speedrun Edition", "price": 0.283028403921965, "region": "🇦🇷", "status": "", "data": "09.03" },
  { "name": "Werewolf: The Apocalypse - Earthblood Champion of Gaia Xb...", "price": 0.868290710603457, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Werewolf: The Apocalypse - Earthblood Champion of Gaia Xbox Series X|S", "price": 0.868290710603457, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Wheel Of Fortune®", "price": 0.6044678055190538, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Where the Bees Make Honey", "price": 0.14353583341756795, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Who Wants to Be a Millionaire?", "price": 0.8672798948751642, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Wuppo", "price": 0.20191044172647327, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Wytchwood", "price": 0.8612150005054078, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Yet Another Zombie Defense HD", "price": 0.04952997068634388, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Yonder: The Cloud Catcher Chronicles - XBS|X", "price": 0.6504599211563731, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Yonder: The Cloud Catcher Chronicles", "price": 0.6504599211563731, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Youtubers Life - OMG Edition", "price": 0.6044678055190538, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Youtubers Life 2", "price": 7.075659557262711, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "Zapling Bygone", "price": 0.8506014353583342, "region": "🇦🇷", "status": "", "data": "09.03" },
  { "name": "de Blob 2", "price": 0.37779237844940866, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "de Blob", "price": 0.2514404124128171, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "sCATch: The Painter Cat", "price": 0.283028403921965, "region": "🇦🇷", "status": "", "data": "08.03" },
  { "name": "theHunter: Call of the Wild", "price": 0.49868593955321944, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "theHunter: Call of the Wild™ - Greenhorn Bundle", "price": 2.175780855150106, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "theHunter: Call of the Wild™ - Master Hunter Bundle", "price": 3.039017487112099, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "theHunter: Call of the Wild™ - Seasoned Hunter Bundle", "price": 2.7064591125037905, "region": "🇦🇷", "status": "", "data": "14.03" },
  { "name": "ŌKAMI HD", "price": 0.8819367229354088, "region": "🇦🇷", "status": "", "data": "21.03" }
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
  const res = value * usd + 35
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
  item.innerHTML = `${a.name}:${res}&#8381; ${a.region} до:${a.data} ${a.status}`
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

