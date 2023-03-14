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
  { "name": "#SinucaAttack", "price": 0.1415142019609825, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "A Plague Tale: Requiem", "price": 16.422470433639944, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Aery - A Journey Beyond Time", "price": 0.4306075002527039, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "AeternoBlade II", "price": 0.5443242696856363, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "AeternoBlade", "price": 0.22591731527342565, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "After Wave: Downfall", "price": 1.4621492853361566, "region": "🇹🇷", "status": " GOLD", "data": "21.03" },
  { "name": "An Evil Existence", "price": 0.17386030526634993, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Anthem™", "price": 0.8081471747700394, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Anthem™: Legion of Dawn Edition", "price": 1.1366622864651774, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Archvale", "price": 0.7571009804912564, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Assassin's Creed IV Black Flag", "price": 1.1381683430386447, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Assassin's Creed Legendary Collection", "price": 11.370160719700797, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Assassin's Creed® Odyssey - ULTIMATE EDITION", "price": 5.684574951986253, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Assassin's Creed® Origins - DELUXE EDITION", "price": 3.473415546345901, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Assassin's Creed® Syndicate Gold Edition", "price": 2.7792482795129696, "region": "🇹🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Assassin's Creed® Valhalla Complete Edition", "price": 17.687506317598302, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Assassin's Creed® Valhalla Deluxe Edition", "price": 8.337561912463357, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Assassin's Creed® Valhalla Ragnarök Edition", "price": 11.116993118051878, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Assassin's Creed® Valhalla", "price": 6.002577580107147, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Awarded Platformer Bundle", "price": 0.8301324168604063, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "BALAN WONDERWORLD", "price": 4.510322922181048, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Backbeat", "price": 2.2697867178813302, "region": "🇦🇷", "status": "", "data": "17.03" },
  { "name": "Ballotron Oceans", "price": 0.2653391286768422, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Batman: Return to Arkham", "price": 1.2622561407055493, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Batman™: Arkham Knight", "price": 1.1108864853937126, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Battlefield 4", "price": 0.7058020822804003, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Battlefield V Definitive Edition", "price": 4.421055291620338, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Battlefield™ 1 Revolution", "price": 1.3886081067421407, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Battlefield™ 1", "price": 0.8826948347316284, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Battlefield™ 2042 Ultimate Edition Xbox One & Xbox Series...", "price": 28.586024351508733, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Battlefield™ 2042 Xbox One & Xbox Series X|S", "price": 10.375330862890419, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Battlefield™ 2042 Xbox One", "price": 11.31936722935409, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Battlefield™ Hardline Standard Edition", "price": 0.7058020822804003, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Battlefield™ Hardline Ultimate Edition", "price": 1.3886081067421407, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Battlefield™ V Standard Edition", "price": 2.904831699181239, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Battlefleet Gothic: Armada 2 - Windows 10", "price": 1.514707368846659, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Battlefleet Gothic: Armada", "price": 0.41342363287172745, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Black The Fall", "price": 0.4306075002527039, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Bridge Constructor Bundle", "price": 0.7543212372384513, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Bumblebee - Little Bee Adventure", "price": 0.5382593753158799, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Bundle: South Park™ : The Stick of Truth™ + The Fractured...", "price": 5.546320804658549, "region": "🇹🇷", "status": " GOLD", "data": "21.03" },
  { "name": "CHRONO CROSS: THE RADICAL DREAMERS EDITION", "price": 7.040762308099524, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Call of Duty®: Black Ops III - Zombies Deluxe", "price": 8.210693488618316, "region": "🇹🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Call of Duty®: Modern Warfare® II - Vault Edition", "price": 36.73051652683716, "region": "🇦🇷", "status": " GOLD", "data": "14.03" },
  { "name": "Capcom Arcade 2nd Stadium Bundle", "price": 13.91953414505029, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Capcom Arcade Stadium Pack 1: Dawn of the Arcade (’84 – ’88)", "price": 3.9043262913170924, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Capcom Arcade Stadium Pack 2: Arcade Revolution (’89 – ’92)", "price": 3.9043262913170924, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Capcom Arcade Stadium Pack 3: Arcade Evolution (’92 – ’01)", "price": 3.9043262913170924, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Capcom Arcade Stadium Packs 1, 2, and 3", "price": 7.7731729505711105, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Capcom Fighting Bundle", "price": 14.080995235574377, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Capcom Fighting Collection", "price": 9.279512969825303, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Chivalry 2 King's Edition", "price": 2.1707267765086424, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Circuit Superstars Top Gear Time Attack Edition", "price": 5.81926614778126, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Cities: Skylines - Mayor's Edition", "price": 0.9463762256140705, "region": "🇦🇷", "status": " GOLD", "data": "14.03" },
  { "name": "Cities: Skylines - Premium Edition 2", "price": 1.2622561407055493, "region": "🇦🇷", "status": " GOLD", "data": "14.03" },
  { "name": "Cities: Skylines - Xbox One Edition", "price": 0.5041443444860002, "region": "🇦🇷", "status": " GOLD", "data": "14.03" },
  { "name": "Citizens of Space", "price": 0.3830991610229455, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Clumsy Rush + Brawl Chess Family Bundle", "price": 0.16223592439098353, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Conan Exiles – Year 1 DLC Bundle", "price": 2.1191751743657132, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Conan Exiles", "price": 1.0446780551905386, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Cricket 22", "price": 1.8043060750025268, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Crimson Spires", "price": 0.5741433336702718, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Cuccchi", "price": 0.2906095218841605, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Curse of the Dead Gods", "price": 1.1108864853937126, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "DC's Justice League: Cosmic Chaos", "price": 23.623521681997367, "region": "🇦🇷", "status": "", "data": "24.03" },
  { "name": "DMC4SE Demon Hunter Bundle", "price": 0.7631658748610128, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "DRAGON QUEST® XI S: Echoes of an Elusive Age™ - Definitiv...", "price": 6.124933827421916, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "DUCATI - 90th Anniversary", "price": 0.19154958051147275, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Dead Cells", "price": 0.755079349034671, "region": "🇦🇷", "status": "", "data": "20.03" },
  { "name": "Dead Cells", "price": 1.0886485393712726, "region": "🇦🇷", "status": "", "data": "20.03" },
  { "name": "Dead Cells: Medley of Pain Bundle", "price": 2.320832912160113, "region": "🇦🇷", "status": "", "data": "20.03" },
  { "name": "Dead Cells: Return to Castlevania Bundle", "price": 1.8154250480137468, "region": "🇦🇷", "status": "", "data": "20.03" },
  { "name": "Dead Cells: Return to Castlevania Bundle", "price": 1.8154250480137468, "region": "🇦🇷", "status": "", "data": "20.03" },
  { "name": "Dead Rising 2 Off the Record", "price": 1.097745880925907, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Dead Rising 2", "price": 0.8324067522490649, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Dead Rising 3: Apocalypse Edition", "price": 3.278983589200635, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Dead Rising 4", "price": 2.2730718689982816, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Dead Rising Triple Bundle Pack", "price": 1.3285656524815526, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Dead Rising", "price": 0.8324067522490649, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Dead Space Digital Deluxe Edition", "price": 42.45021732538159, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Dead by Daylight", "price": 1.0082886889720004, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Deadbeat Heroes", "price": 0.22591731527342565, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Deep Space Anomaly", "price": 0.24764985343171939, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Defend the Rook - Supporter Edition", "price": 6.363590417466895, "region": "🇦🇷", "status": "", "data": "16.03" },
  { "name": "Defend the Rook", "price": 4.771555645405842, "region": "🇦🇷", "status": "", "data": "16.03" },
  { "name": "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles", "price": 7.578590922874759, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Devil May Cry 4 Special Edition", "price": 0.3775396745173355, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Devil May Cry 5 + Vergil", "price": 5.001870009097341, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Devil May Cry 5 Deluxe + Vergil", "price": 10.10563024360659, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Devil May Cry 5 Special Edition", "price": 6.946831092691802, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Devil May Cry HD Collection & 4SE Bundle", "price": 1.3993227534620438, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Devil May Cry HD Collection", "price": 0.8656120489234812, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "DmC Devil May Cry: Definitive Edition", "price": 0.9082179318710198, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Dragon Age™: Inquisition - Game of the Year Edition", "price": 2.0179989412387505, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Dragon's Dogma: Dark Arisen", "price": 0.4597695340139492, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Dying Light 2 Stay Human - Ultimate Edition", "price": 24.761447488122915, "region": "🇦🇷", "status": "", "data": "15.03" },
  { "name": "Dying Light 2 Stay Human", "price": 9.094814515313857, "region": "🇦🇷", "status": "", "data": "15.03" },
  { "name": "EA SPORTS™ FIFA 23 Standard Edition Xbox One", "price": 18.527792482795128, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "EA SPORTS™ FIFA 23 Standard Edition Xbox Series X|S", "price": 21.174695606140816, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "EA SPORTS™ FIFA 23 Ultimate Edition Xbox One & Xbox Series X|S", "price": 26.468501852832187, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Escape Dead Island", "price": 0.19710906701708278, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Evil West", "price": 20.21227130294147, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "EvilUP", "price": 0.34367734761952895, "region": "🇦🇷", "status": "", "data": "25.03" },
  { "name": "F1® 22 Champions Edition Xbox One & Xbox Series X|S", "price": 6.443192156069948, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "F1® 22 Xbox One", "price": 4.851157384008895, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "F1® 22 Xbox Series X|S", "price": 5.6850803598503985, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "FIFA 22 Xbox One", "price": 21.174695606140816, "region": "🇹🇷", "status": "", "data": "30.12" },
  { "name": "FIFA 22 Xbox Series X|S", "price": 23.715722604552674, "region": "🇹🇷", "status": "", "data": "30.12" },
  { "name": "FINAL FANTASY IX", "price": 2.4234307085818254, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "FINAL FANTASY TYPE-0 HD", "price": 0.8470635803093095, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "FINAL FANTASY TYPE-0™ HD", "price": 1.4822657490735838, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "FINAL FANTASY VII WINDOWS EDITION", "price": 1.8674820580208227, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "FINAL FANTASY VII", "price": 1.8674820580208227, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "FINAL FANTASY VIII Remastered WINDOWS EDITION", "price": 2.348861831656961, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "FINAL FANTASY VIII Remastered", "price": 2.348861831656961, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "FINAL FANTASY X/X-2 HD Remaster", "price": 5.683311432325887, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "FINAL FANTASY XII THE ZODIAC AGE", "price": 5.683311432325887, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "FINAL FANTASY XV MULTIPLAYER: COMRADES", "price": 0.8874962094410188, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "FINAL FANTASY XV POCKET EDITION HD", "price": 1.8123926008288689, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "FINAL FANTASY XV ROYAL EDITION", "price": 4.201694017998942, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Far Cry® 3 Blood Dragon Classic Edition", "price": 3.788031941777014, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Far Cry® 6 Deluxe Edition", "price": 12.128272515920345, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Far Cry® 6 Game of the Year Edition", "price": 17.687506317598302, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Fin and the Ancient Mystery", "price": 0.1415142019609825, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Fluffy Horde + Cyber Protocol", "price": 1.1482866673405436, "region": "🇦🇷", "status": "", "data": "25.03" },
  { "name": "Flynn: Son of Crimson", "price": 0.8612150005054078, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "For Honor® Complete Edition", "price": 6.31633478216921, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "GRID Legends", "price": 6.468209845345193, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "GRID Legends: Deluxe Edition", "price": 8.590922874759931, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Galaxy Champions TV", "price": 0.20216314565854643, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Ghosts 'n Goblins Resurrection", "price": 6.636844891476972, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Gotham Knights", "price": 16.17103002122713, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Grand Theft Auto Online", "price": 5.051551602142929, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Grand Theft Auto V (Xbox One & Xbox Series X|S)", "price": 10.464266807834832, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Grand Theft Auto V: Premium Edition & Great White Shark C...", "price": 4.764425622022234, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Grand Theft Auto V: Premium Edition & Megalodon Shark Car...", "price": 7.99364743250397, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Grand Theft Auto V: Premium Edition & Whale Shark Card Bu...", "price": 5.505558496559026, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Gunman Tales", "price": 0.40432629131709286, "region": "🇦🇷", "status": "", "data": "18.03" },
  { "name": "Hidden Shapes: Animals + Lovely Cats", "price": 0.14656828060244617, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Hood: Outlaws & Legends", "price": 2.487870211260487, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Hunt Ducks 4", "price": 0.07581117962195491, "region": "🇦🇷", "status": "", "data": "25.03" },
  { "name": "Hunting Simulator 2: Elite Edition Xbox One", "price": 1.0098049125644395, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Hunting Simulator 2: Elite Edition Xbox Series X|S", "price": 1.0098049125644395, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Injustice™ 2", "price": 0.7576063883554028, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Insurgency: Sandstorm - Deluxe Edition", "price": 15.881418740074112, "region": "🇹🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Iro Hero", "price": 0.2577580107146467, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "It Takes Two - Digital Version", "price": 10.611038107752956, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Jurassic Pinball", "price": 0.1847265743454968, "region": "🇦🇷", "status": "", "data": "18.03" },
  { "name": "Just Cause 3", "price": 0.7004952997068634, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Just Cause 3: XXL Edition", "price": 0.9563327605377538, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Just Cause 4 - Complete Edition", "price": 3.1762837480148227, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Just Cause 4 - Gold Edition", "price": 4.042252097442636, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Just Cause 4: Reloaded", "price": 2.829273223491357, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Just Dance® 2023 Edition", "price": 13.234515616728427, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "KINGDOM HEARTS - HD 1.5+2.5 ReMIX -", "price": 5.789835892006352, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "KINGDOM HEARTS HD 2.8 Final Chapter Prologue", "price": 7.4113287453679195, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "KINGDOM HEARTS Melody of Memory (International)", "price": 10.10563024360659, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "KINGDOM HEARTS Ⅲ", "price": 3.6743151723440812, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Killing Floor 2 - Ultimate Edition", "price": 15.234660871323156, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Killing Floor 2", "price": 1.0095522086323663, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "L.A. Noire", "price": 3.535328009703831, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "LEAP", "price": 1.7345597897503284, "region": "🇦🇷", "status": "", "data": "16.03" },
  { "name": "LEGO® Batman™ 3: Beyond Gotham", "price": 0.6936722935408874, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "LEGO® CITY Undercover", "price": 1.0098049125644395, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "LEGO® DC Super-Villains", "price": 0.9597695340139493, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "LEGO® Marvel Super Heroes 2", "price": 1.5149600727787322, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "LEGO® Marvel's Avengers", "price": 1.3886081067421407, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "LEGO® The Hobbit™", "price": 1.4213869772366332, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "LEGO® Worlds", "price": 0.8076417669058931, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Lara Croft and the Temple of Osiris", "price": 0.378297786313555, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "League of Enthusiastic Losers + Cyber Protocol", "price": 0.27039320731830585, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Life is Strange 2 - Complete Season", "price": 1.6496512685737388, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Life is Strange Remastered Collection", "price": 7.543673901535204, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Life is Strange: True Colors - Deluxe Edition", "price": 10.587612493382743, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Life is Strange: True Colors - Ultimate Edition", "price": 15.219692959237692, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Life is Strange: True Colors", "price": 9.105346744309157, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Life of Fly 2", "price": 0.4306075002527039, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Light & Dark Bundle", "price": 1.133377135348226, "region": "🇦🇷", "status": "", "data": "02.11" },
  { "name": "Little Mage Adventure", "price": 0.07581117962195491, "region": "🇦🇷", "status": "", "data": "18.03" },
  { "name": "Lost in Random™", "price": 1.8184574951986252, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Lucid Cycle", "price": 0.25270393207318304, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "MARVEL VS. CAPCOM: INFINITE", "price": 0.7672091377741838, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "MONOPOLY PLUS", "price": 0.6428788031941777, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "MONSTER HUNTER: WORLD™", "price": 3.934886183165696, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "MXGP2", "price": 0.3785504902456282, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Macrotis: A Mother's Journey", "price": 0.26079045789952493, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Mad Max", "price": 1.0095522086323663, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Madden NFL 22 Xbox One", "price": 19.454664914586072, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Madden NFL 22 Xbox Series X|S", "price": 22.63873445870818, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Madden NFL 23 All Madden Edition Xbox One & Xbox Series X|S", "price": 15.880889359449444, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Madden NFL 23 Xbox One", "price": 25.87283938138077, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Madden NFL 23 Xbox One", "price": 9.70231476801779, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Madden NFL 23 Xbox Series X|S", "price": 11.370160719700797, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Madden NFL 23 Xbox Series X|S", "price": 30.320428585868793, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Maneater Apex Edition", "price": 1.9847366825027795, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Maneater", "price": 1.4505205701000707, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Marvel vs. Capcom: Infinite - Deluxe Edition", "price": 1.1412109572424947, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Mass Effect™ Legendary Edition", "price": 9.70231476801779, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Mega Man 11", "price": 1.0073789548165368, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Mega Man 30th Anniversary Bundle", "price": 4.154452643283129, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Mega Man Legacy Collection 1 & 2 Combo Pack", "price": 1.1250379055898108, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Mega Man Legacy Collection 2", "price": 0.8167391084605276, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Mega Man X Legacy Collection 1+2", "price": 1.6557161629434953, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Mega Man X Legacy Collection 2", "price": 0.8268472657434549, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Mega Man X Legacy Collection", "price": 0.8268472657434549, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Mega Man Zero/ZX Legacy Collection", "price": 3.788031941777014, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Mega Man® Legacy Collection", "price": 0.28100677246537953, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Microsoft 365 Family", "price": 0.0, "region": "🇦🇷", "status": "", "data": "01.12" },
  { "name": "Microsoft 365 Family", "price": 0.0, "region": "🇹🇷", "status": "", "data": "01.12" },
  { "name": "Microsoft 365 Personal", "price": 0.0, "region": "🇦🇷", "status": "", "data": "01.12" },
  { "name": "Microsoft 365 Personal", "price": 0.0, "region": "🇹🇷", "status": "", "data": "01.12" },
  { "name": "Middle-earth™: Shadow of War™", "price": 1.0605984029111493, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Minemaze", "price": 0.07581117962195491, "region": "🇦🇷", "status": "", "data": "16.03" },
  { "name": "Mirror's Edge™ Catalyst", "price": 0.37779237844940866, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Monster Energy Supercross - The Official Videogame 2", "price": 1.515465480642879, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Monster Energy Supercross 2 - Special Edition", "price": 3.031689073081977, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Monster Hunter Rise Deluxe Edition", "price": 12.424563260984646, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Monster Hunter Rise", "price": 9.934886183165695, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Monster Hunter World: Iceborne Master Edition Digital Deluxe", "price": 10.259396506087878, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Monster Hunter World: Iceborne Master Edition", "price": 8.385389094759132, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Mortal Kombat 11", "price": 2.273324572930355, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Mortal Kombat X", "price": 1.3886081067421407, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "MudRunner - American Wilds Edition", "price": 1.211968058222986, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Murdered: Soul Suspect", "price": 0.15086424744769028, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "My Memory of Us", "price": 0.2870716668351359, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "NBA 2K23 Digital Deluxe Edition", "price": 11.37041342363287, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "NHL® 23 X-Factor Edition Xbox One & Xbox Series X|S", "price": 21.174695606140816, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "NHL® 23 Xbox One", "price": 14.82212811011117, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "NHL® 23 Xbox Series X|S", "price": 16.93965060878772, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Necromunda: Hired Gun", "price": 5.052057010007076, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Need for Speed™ Unbound Palace Edition", "price": 26.531385828363486, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Need for Speed™ Unbound", "price": 22.74082684726574, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "New Tales from the Borderlands", "price": 13.208046585494971, "region": "🇹🇷", "status": " GOLD", "data": "21.03" },
  { "name": "NieR Replicant ver.1.22474487139...", "price": 10.10563024360659, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "NieR:Automata BECOME AS GODS Edition", "price": 4.122864651773981, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "NieR:Automata™ BECOME AS GODS Edition", "price": 4.122864651773981, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Ninja Warrior Epic Quest", "price": 0.17689275245122812, "region": "🇦🇷", "status": "", "data": "31.05" },
  { "name": "Not for Broadcast Deluxe Edition", "price": 2.6109370261801272, "region": "🇦🇷", "status": "", "data": "23.03" },
  { "name": "OCTOPATH TRAVELER", "price": 8.470089994706193, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "OUTRIDERS WORLDSLAYER", "price": 15.854949708840657, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "OUTRIDERS", "price": 8.893156777519458, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Obsurity", "price": 0.22996057818659657, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Octahedron", "price": 0.3967451733548974, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "OddBallers™", "price": 8.335439199433942, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Oh My Godheads", "price": 0.31234206004245424, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Onimusha: Warlords", "price": 1.4889315677751946, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Ori and the Blind Forest: Definitive Edition", "price": 3.4102395633276053, "region": "🇦🇷", "status": "", "data": "15.03" },
  { "name": "PGA TOUR 2K23 Cross-Gen Edition", "price": 14.149651268573738, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "PGA TOUR 2K23 Tiger Woods Edition", "price": 30.321944809461232, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "PGA TOUR 2K23", "price": 11.673253815829375, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Phoenix Wright: Ace Attorney Trilogy", "price": 1.5263317497220257, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Plants vs. Zombies Garden Warfare", "price": 0.37779237844940866, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Plants vs. Zombies: Battle for Neighborville™ Deluxe Edition", "price": 1.7428990195087435, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Plants vs. Zombies: Battle for Neighborville™", "price": 1.363843121398969, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "PowerWash Simulator", "price": 10.121757543673901, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Pro Gymnast Simulator + Clumsy Rush", "price": 0.37779237844940866, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Promesa", "price": 0.1415142019609825, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Puyo Puyo Champions", "price": 0.24663903770342663, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Puyo Puyo™ Tetris® 2", "price": 1.894015970888507, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "QUByte Classics - The Immortal by PIKO", "price": 0.2906095218841605, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "RACCOON CITY EDITION", "price": 5.41662255161461, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "RESIDENT EVIL 2 Deluxe Edition", "price": 1.81502072172243, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "RESIDENT EVIL 2", "price": 1.5559991913474174, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "RESIDENT EVIL 3", "price": 4.021175224986765, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "RESIDENT EVIL 7 biohazard Gold Edition", "price": 1.7820681289800868, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "RESIDENT EVIL 7 biohazard", "price": 2.092641609317099, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Rabbids®: Party of Legends", "price": 7.4113287453679195, "region": "🇹🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Resident Evil 0", "price": 0.2514404124128171, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Resident Evil 5", "price": 0.675224906499545, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Resident Evil 6", "price": 0.675224906499545, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Resident Evil 7 Gold Edition & Village Gold Edition", "price": 16.26149802890933, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Resident Evil Revelations 1 & 2 Bundle", "price": 1.5647427473971496, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Resident Evil Revelations 2 Deluxe Edition", "price": 0.6044678055190538, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Resident Evil Revelations", "price": 0.7560901647629636, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Resident Evil Triple Pack", "price": 1.7537147478014756, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Resident Evil Village Gold Edition", "price": 13.95659078877713, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Resident Evil Village", "price": 9.279512969825303, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Resident Evil", "price": 0.2514404124128171, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Resident Evil: Deluxe Origins Bundle", "price": 0.6052259173152734, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "RiMS Racing Xbox One", "price": 4.243909835237036, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "RiMS Racing Xbox Series X|S", "price": 4.243909835237036, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Riders Republic Ultimate Edition", "price": 15.160719700798543, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Riders Republic™ Gold Edition", "price": 12.128272515920345, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Rift Keeper", "price": 0.3588395835439199, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Rise of the Tomb Raider: 20 Year Celebration", "price": 1.4293276866066702, "region": "🇹🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Robolifter", "price": 0.3007176791670878, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Rock of Ages 2: Bigger & Boulder™", "price": 0.1506115435156171, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Rogue Lords", "price": 1.0840998685939554, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Roguebook Xbox One", "price": 0.9072071161427271, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Roguebook Xbox Series X|S", "price": 1.0840998685939554, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Romancing SaGa 2", "price": 0.5443242696856363, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Romancing SaGa 3", "price": 0.6504599211563731, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Rugby 22 Xbox One", "price": 9.095319923178003, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Rugby 22 Xbox Series X|S", "price": 9.095319923178003, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "SEGA® Genesis Classics™", "price": 0.37779237844940866, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "SONIC FORCES™ Digital Standard Edition", "price": 2.903568179520873, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "STAR OCEAN THE DIVINE FORCE DIGITAL DELUXE EDITION", "price": 23.472736897829538, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "STAR OCEAN THE DIVINE FORCE DIGITAL DELUXE UPGRADE", "price": 6.3208046585494975, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "STAR OCEAN THE DIVINE FORCE", "price": 19.025939650608787, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": 0.9597695340139493, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": 8.637925806125542, "region": "🇦🇷", "status": "", "data": "01.01" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": 0.8081471747700394, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": 6.465177398160315, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "STAR WARS™ Battlefront™ II", "price": 1.3249267158596987, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "STAR WARS™ Battlefront™ II: Celebration Edition", "price": 2.2730718689982816, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "STAR WARS™ Battlefront™ Ultimate Edition", "price": 0.6304963105225917, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "STAR WARS™: Squadrons", "price": 1.8945213787526534, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Scribblenauts Showdown", "price": 0.605984029111493, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Sentry Paragon", "price": 0.283028403921965, "region": "🇦🇷", "status": "", "data": "22.03" },
  { "name": "Session: Skate Sim", "price": 1.8043060750025268, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Shadow of the Tomb Raider Definitive Edition", "price": 4.129168872419269, "region": "🇹🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Sleeping Dogs™ Definitive Edition", "price": 0.6071995764955003, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "SolSeraph", "price": 0.3830991610229455, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Sonic Colors: Ultimate - Digital Deluxe", "price": 5.809663398362478, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Sonic Frontiers Digital Deluxe Edition", "price": 15.234660871323156, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Sonic Mania", "price": 1.2969825304393858, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Soul Hackers 2 - Digital Premium Edition", "price": 13.896189224704335, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "South Park™: The Fractured but Whole™", "price": 3.5733192165166754, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Sparkle Bundle", "price": 0.6428788031941777, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Steelrising - Bastille Edition", "price": 12.63266956433842, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Strategic Mind: Spectre of Communism", "price": 9.547659961589002, "region": "🇦🇷", "status": "", "data": "17.03" },
  { "name": "Street Fighter 30th Anniversary Collection", "price": 2.973001588141874, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "Strider", "price": 0.22591731527342565, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Super Monkey Ball Banana Mania Digital Deluxe Edition", "price": 6.3150712625088445, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Super Monkey Ball: Banana Blitz HD", "price": 2.651875063175983, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Super Pixel Kid", "price": 0.07581117962195491, "region": "🇦🇷", "status": "", "data": "02.04" },
  { "name": "Supraland", "price": 1.0047508339229758, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Symmetry", "price": 0.12028707166683514, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Sébastien Loeb Rally EVO", "price": 0.20165773779440005, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Tamarin®", "price": 0.7155059132720104, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Team Sonic Racing™", "price": 4.4197917719599715, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tears of Avia", "price": 0.5948650561002728, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Temple Dash: Jungle Adventure", "price": 0.07581117962195491, "region": "🇦🇷", "status": "", "data": "23.03" },
  { "name": "Tennis World Tour 2 - Complete Edition Xbox Series X|S", "price": 0.7217224300010108, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tennis World Tour 2 Ace Edition", "price": 4.547659961589002, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Teratopia", "price": 0.21631456585464467, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "The BioWare Bundle", "price": 1.1990801576872536, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "The Callisto Protocol™ for Xbox One – Digital Deluxe Edition", "price": 17.68573739007379, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "The Callisto Protocol™ for Xbox Series X|S – Digital Delu...", "price": 22.992519963610633, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "The Crew® 2 Gold Edition", "price": 4.547659961589002, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "The Crew® 2 Special Edition", "price": 3.0314363691499033, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "The DioField Chronicle Digitale Deluxe Edition", "price": 17.178401270513497, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "The DioField Chronicle", "price": 14.002117522498676, "region": "🇹🇷", "status": "", "data": "21.03" },
  { "name": "The Disney Afternoon Collection", "price": 0.4033154755888001, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "The Division 2 - Warlords of New York - Ultimate Edition", "price": 6.063378146163954, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "The Escapists: Supermax Edition", "price": 1.2695845547356714, "region": "🇦🇷", "status": "", "data": "06.04" },
  { "name": "The FMV Bundle", "price": 1.8558576771454562, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "The Jackbox Party Quadpack", "price": 2.8391286768422113, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "The LEGO Movie Videogame", "price": 0.567320327504296, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "The LEGO® NINJAGO® Movie Video Game", "price": 1.1364095825331042, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "The Outer Worlds: Board-Approved Bundle", "price": 22.82689253573319, "region": "🇹🇷", "status": " GOLD", "data": "21.03" },
  { "name": "The Outer Worlds: Spacer's Choice Edition", "price": 27.316040232927474, "region": "🇹🇷", "status": " GOLD", "data": "21.03" },
  { "name": "The Yakuza Remastered Collection for Windows 10", "price": 2.5808652582634184, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "The Yakuza Remastered Collection", "price": 2.5808652582634184, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Titanfall® 2: Ultimate Edition", "price": 0.6057313251794197, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Deluxe Edition", "price": 3.637925806125543, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Ultimate Edition", "price": 5.558475689881734, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tom Clancy's Rainbow Six® Siege Deluxe Edition", "price": 5.684574951986253, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tom Clancy's Rainbow Six® Siege Ultimate Edition", "price": 31.762837480148225, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Tom Clancy's Splinter Cell", "price": 0.4023046598605074, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tom Clancy's Splinter Cell: Pandora Tomorrow®", "price": 0.30172849489538056, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tom Clancy's The Division™ Gold Edition", "price": 2.6469031233456857, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Tom Clancy’s Ghost Recon® Wildlands Ultimate Edition", "price": 4.800363893662185, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tom Clancy’s Rainbow Six® Extraction Deluxe Edition", "price": 7.579601738603053, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tom Clancy’s Rainbow Six® Extraction", "price": 5.911755786920044, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tom Clancy’s Splinter Cell Double Agent", "price": 0.4023046598605074, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tom Clancy’s The Division® Franchise Bundle", "price": 4.243909835237036, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tomb Raider: Definitive Edition", "price": 1.1249338274219163, "region": "🇹🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Tour de France 2022 Xbox One", "price": 6.063378146163954, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Tour de France 2022 Xbox Series X|S", "price": 6.821489942383503, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Train Life: A Railway Simulator", "price": 1.409329829172142, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "UFC® 4 Deluxe Edition", "price": 4.042252097442636, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "UFC® 4", "price": 3.5368442332962697, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "ULTIMATE MARVEL VS. CAPCOM 3", "price": 0.9077125240068734, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "UNSIGHTED", "price": 0.8612150005054078, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "UnderDungeon + Cyber Protocol", "price": 1.3302334984332356, "region": "🇦🇷", "status": "", "data": "25.03" },
  { "name": "Unit 4: Couch Attack Bundle", "price": 0.6830587283938138, "region": "🇦🇷", "status": "", "data": "30.12" },
  { "name": "Urban Trial Tricky Deluxe Edition", "price": 0.4306075002527039, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Valkyria Chronicles 4", "price": 1.2572789835892006, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Valkyria Revolution", "price": 0.837966238754675, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Vampire: The Masquerade - Swansong PRIMOGEN EDITION", "price": 13.138582836348933, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Vampyr", "price": 1.4545638330132415, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Vermintide - Digital Value Pack", "price": 2.0175881936722933, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Void Gore", "price": 0.1415142019609825, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "WORLD OF FINAL FANTASY MAXIMA", "price": 3.298291721419185, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "WRC Collection FIA World Rally Championship", "price": 3.218184574951986, "region": "🇦🇷", "status": "", "data": "31.08" },
  { "name": "WRC Generations Fully Loaded Edition", "price": 13.896189224704335, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "WarDogs: Red's Return", "price": 0.14656828060244617, "region": "🇦🇷", "status": "", "data": "21.03" },
  { "name": "Warhammer 40,000: Inquisitor - Martyr Ultimate Edition", "price": 1.8043060750025268, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Warhammer: Chaosbane Slayer Edition Xbox One", "price": 0.2901041140200141, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Warhammer: Chaosbane Slayer Edition Xbox Series X|S", "price": 0.4341453553017285, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Watch Dogs®2 - Deluxe Edition", "price": 2.7988353626257276, "region": "🇹🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Werewolf: The Apocalypse - Earthblood Xbox One", "price": 3.435762660466996, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Werewolf: The Apocalypse - Earthblood Xbox Series X|S", "price": 3.435762660466996, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Wildfire", "price": 0.5407864146366117, "region": "🇦🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Witchcrafty (Xbox Series X|S)", "price": 0.5741433336702718, "region": "🇦🇷", "status": "", "data": "24.03" },
  { "name": "Witchcrafty", "price": 0.5741433336702718, "region": "🇦🇷", "status": "", "data": "24.03" },
  { "name": "XCOM® 2 Collection", "price": 1.6807834833245103, "region": "🇹🇷", "status": " GOLD", "data": "21.03" },
  { "name": "Yakuza 0 for Windows 10", "price": 0.7940709370037057, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Yakuza 0", "price": 0.7940709370037057, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Yakuza 3 Remastered for Windows 10", "price": 1.944051349438997, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Yakuza 3 Remastered", "price": 1.944051349438997, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Yakuza 4 Remastered for Windows 10", "price": 1.944051349438997, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Yakuza 4 Remastered", "price": 1.944051349438997, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Yakuza 5 Remastered for Windows 10", "price": 1.944051349438997, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Yakuza 5 Remastered", "price": 1.944051349438997, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Yakuza 6: The Song of Life for Windows 10", "price": 0.7940709370037057, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Yakuza 6: The Song of Life", "price": 0.7940709370037057, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Yakuza Kiwami 2 for Windows 10", "price": 1.3886081067421407, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Yakuza Kiwami 2", "price": 1.3886081067421407, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Yakuza Kiwami for Windows 10", "price": 0.7940709370037057, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Yakuza Kiwami", "price": 0.7940709370037057, "region": "🇹🇷", "status": "", "data": "28.03" },
  { "name": "Yakuza: Like a Dragon Hero Edition", "price": 3.9406651167492166, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Zapling Bygone", "price": 0.8506014353583342, "region": "🇦🇷", "status": "", "data": "24.03" },
  { "name": "Zombie Derby: Pixel Survival (Windows)", "price": 0.3007176791670878, "region": "🇦🇷", "status": "", "data": "24.03" },
  { "name": "Zombie Derby: Pixel Survival", "price": 0.3007176791670878, "region": "🇦🇷", "status": "", "data": "24.03" },
  { "name": "Zorro The Chronicles Xbox One", "price": 9.094814515313857, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "Zorro The Chronicles Xbox Series X|S", "price": 9.094814515313857, "region": "🇦🇷", "status": "", "data": "28.03" },
  { "name": "resident evil 4", "price": 0.675224906499545, "region": "🇦🇷", "status": "", "data": "21.03" },
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

