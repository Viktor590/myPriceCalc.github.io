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
  { "name": "39 Days to Mars", "price": 1.7800741918388978, "region": "🇹🇷", "status": "", "data": "21.02" },
  { "name": "A Gummy's Life", "price": 1.029465071720781, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "AVICII Invector", "price": 0.367666097043136, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "AVICII Invector: Encore Edition", "price": 0.6664595308373464, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Absolver", "price": 0.30966806483351456, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Aeon Must Die!", "price": 3.524112347641759, "region": "🇹🇷", "status": "", "data": "01.03" },
  { "name": "Aery - Sky Castle", "price": 0.4779659261560768, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Afterglitch", "price": 0.9973590181761689, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Ages of Mages: the last keeper", "price": 0.4453420330381647, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Akane", "price": 0.10512143337993889, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Alphadia Genesis 1 & 2", "price": 0.735332194086272, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "AngerForce:Reloaded", "price": 0.20506447102687586, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Ape Out", "price": 0.27704417171560247, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Arkham Horror: Mother’s Embrace", "price": 0.5882657552690176, "region": "🇦🇷", "status": " GOLD", "data": "21.02" },
  { "name": "Asdivine Dios", "price": 0.5540883434312049, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Asdivine Hearts I & II", "price": 0.735332194086272, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Assassin's Creed® Odyssey - ULTIMATE EDITION", "price": 5.824400600693904, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Assassin's Creed® Syndicate Gold Edition", "price": 2.7821939586645468, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "Assassin's Creed® Valhalla Deluxe Edition", "price": 8.542644088861271, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Assassin's Creed® Valhalla Ragnarök Edition", "price": 11.128775834658187, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "Assassin’s Creed® Rogue Remastered", "price": 1.416653720677334, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Assassin’s Creed® Valhalla + Immortals Fenyx Rising™ Bundle", "price": 8.413598467194863, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Assassin’s Creed® Valhalla + Watch Dogs®: Legion Bundle", "price": 8.413598467194863, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Awarded Platformer Bundle", "price": 0.8505514991455646, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Awkward", "price": 0.7652358240593534, "region": "🇹🇷", "status": "", "data": "21.02" },
  { "name": "BROK the InvestiGator", "price": 1.4872352545181502, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Battle Axe", "price": 0.5553829423644554, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Beat Me!", "price": 0.29050800062140747, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "BioShock: The Collection", "price": 2.5172231054583993, "region": "🇹🇷", "status": "", "data": "21.02" },
  { "name": "Biped", "price": 0.44327067474496396, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Bite the Bullet", "price": 0.22163533737248198, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Black Book", "price": 0.9295220340738438, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Blazing Chrome", "price": 0.5054114235409869, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Bleed Complete Bundle", "price": 0.21671586142613017, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Blightbound", "price": 0.735332194086272, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Bloodstained: Ritual of the Night", "price": 3.315315315315315, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "Bloody Zombies", "price": 0.1734762570555642, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Bloons TD 5", "price": 0.3857904821086427, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Boggle", "price": 0.1851794314121485, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Bomber Crew Deluxe Edition", "price": 0.9313344725803945, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Boom Ball 2 for Kinect", "price": 0.1281652943917974, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Boom Ball 3 for Kinect", "price": 0.1537983532701569, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Boomerang Fu", "price": 0.775723680803687, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Borderlands 3", "price": 2.13531148050334, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Borderlands 3: Super Deluxe Edition", "price": 4.529801667443426, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Borderlands Legendary Collection", "price": 5.914149443561207, "region": "🇹🇷", "status": "", "data": "21.02" },
  { "name": "Borderlands: Game of the Year Edition", "price": 2.4043455219925804, "region": "🇹🇷", "status": "", "data": "21.02" },
  { "name": "Brawlout Deluxe Edition", "price": 0.5419191134586505, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Brawlout Standard Edition", "price": 0.3606752628035835, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Breathedge", "price": 0.7436176272590751, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Bridge Constructor Bundle", "price": 0.20610015017347622, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Bridge Constructor Stunts", "price": 0.10253223551343793, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Broforce", "price": 0.27704417171560247, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Bundle: South Park™ : The Stick of Truth™ + The Fractured...", "price": 5.55219925808161, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "Butterfly 2", "price": 0.23561700585158715, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Butterfly", "price": 0.23561700585158715, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "CATAN® - Console Edition Deluxe", "price": 5.42501324854266, "region": "🇹🇷", "status": "", "data": "23.02" },
  { "name": "CUBERS: ARENA", "price": 0.44327067474496396, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Call of Duty: Ghosts Digital Hardened Edition", "price": 1.976075811713531, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Call of Duty®: Advanced Warfare Digital Pro Edition", "price": 1.976075811713531, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Call of Duty®: Black Ops 4 - Digital Deluxe", "price": 17.00052994170641, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "Call of Duty®: Black Ops 4", "price": 7.619853969240329, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Call of Duty®: Black Ops Cold War - Cross-Gen Bundle", "price": 13.254621718191704, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Call of Duty®: Black Ops Cold War", "price": 7.619853969240329, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Call of Duty®: Black Ops III - Zombies Chronicles Edition", "price": 3.074258194811247, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Call of Duty®: Infinite Warfare - Digital Legacy Edition", "price": 4.658484801408523, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Call of Duty®: Modern Warfare® - Digital Standard Edition", "price": 7.619853969240329, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Call of Duty®: Modern Warfare® II - Cross-Gen Bundle", "price": 27.147739630262542, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Call of Duty®: Vanguard - Cross-Gen Bundle", "price": 15.871754107048224, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "Call of Duty®: Vanguard - Standard Edition", "price": 13.222045574986751, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "Call of Duty®: WWII - Digital Deluxe", "price": 9.962904080551139, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "Can't Drive This", "price": 0.9559318523121536, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Cannon Brawl", "price": 0.1537983532701569, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Car Mechanic Simulator Classic", "price": 0.6317642794262337, "region": "🇦🇷", "status": " GOLD", "data": "21.02" },
  { "name": "Carnival Games®", "price": 1.5395370514214697, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Carrion", "price": 0.5882657552690176, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Castle Crashers Remastered", "price": 1.2945471492931488, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Castle on the Coast", "price": 0.8264719589871057, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "CastleStorm - Definitive Edition", "price": 0.23147428926518565, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Cave Bad", "price": 0.14499508052405363, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Caveman Warriors", "price": 0.19289524105432135, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Chess Ultra", "price": 0.22474237481228312, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Chroma Quaternion", "price": 0.664906012117446, "region": "🇦🇷", "status": " GOLD", "data": "21.02" },
  { "name": "Circuit Breakers", "price": 0.10253223551343793, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "City of Brass", "price": 0.10305007508673811, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Clan N", "price": 0.44327067474496396, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Clumsy Rush", "price": 0.24209000051783955, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Colossus Down", "price": 0.39770079229454713, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Colt Canyon", "price": 0.27704417171560247, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Conan Chop Chop", "price": 1.8098493086841696, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Cook, Serve, Delicious! 2!!", "price": 0.24209000051783955, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Cook, Serve, Delicious! 3?!", "price": 0.5147325358603905, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Couch Multiplayer Bundle: Genetic Disaster, Super Cyborg ...", "price": 0.7954015845890943, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Crash™ Team Racing Nitro-Fueled - Nitros Oxide Edition", "price": 5.435503081145462, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Cube Farmer", "price": 0.28999016104810726, "region": "🇦🇷", "status": "", "data": "22.02" },
  { "name": "Cult of the Lamb", "price": 2.83147853736089, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "Cult of the Lamb: Cultist Edition", "price": 3.378378378378378, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "Cuphead & The Delicious Last Course", "price": 2.908963803013826, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Cuphead", "price": 1.029465071720781, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Cyber Pool", "price": 0.09062192532753352, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "CyberHeroes Arena DX", "price": 0.28999016104810726, "region": "🇦🇷", "status": "", "data": "04.03" },
  { "name": "Cyberpunk 2077", "price": 10.35420226813733, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Cymatically Muffed", "price": 0.688924218335983, "region": "🇹🇷", "status": "", "data": "21.02" },
  { "name": "DEMON'S TILT", "price": 0.44119931645176325, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "DRAGON BALL FIGHTERZ - FighterZ Edition", "price": 1.7469318005281964, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "DRAGON BALL XENOVERSE 2", "price": 1.397390088550567, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "DRAGON BALL: THE BREAKERS Special Edition", "price": 8.232644409114997, "region": "🇹🇷", "status": "", "data": "01.03" },
  { "name": "Danger Scavenger", "price": 0.0735332194086272, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Dark Burial: Enhanced Edition", "price": 0.28999016104810726, "region": "🇦🇷", "status": "", "data": "03.03" },
  { "name": "DayZ", "price": 2.2184247320180206, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Dead End Job", "price": 0.25270571177049345, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Death's Door [Win10]", "price": 0.735332194086272, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Death's Door [Xbox]", "price": 0.735332194086272, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Demolish & Build", "price": 0.735332194086272, "region": "🇦🇷", "status": " GOLD", "data": "21.02" },
  { "name": "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles D...", "price": 9.318523121536947, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Demon's Tier+", "price": 0.1470664388172544, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Demoniaca: Everlasting Night", "price": 0.5540883434312049, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Desert Child", "price": 0.2156801822795298, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Diablo III: Eternal Collection", "price": 4.109697933227345, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "Digimon Survive", "price": 15.543190249072602, "region": "🇹🇷", "status": "", "data": "01.03" },
  { "name": "Disc Room", "price": 0.5540883434312049, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Discolored", "price": 0.4044327067474496, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Discovery Tour: Viking Age", "price": 6.001589825119237, "region": "🇹🇷", "status": " GOLD", "data": "21.02" },
  { "name": "Don't Starve Together: Console Edition", "price": 0.3086323856869142, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Door Kickers: Action Squad", "price": 0.22163533737248198, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Dragon Ball Xenoverse + Season Pass", "price": 0.8148205685878513, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Drone Gladiator", "price": 0.19936823572057374, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "EA SPORTS™ FIFA 23 Standard Edition Xbox One", "price": 11.128245892951774, "region": "🇹🇷", "status": "", "data": "30.12" },
  { "name": "EA SPORTS™ FIFA 23 Standard Edition Xbox Series X|S", "price": 12.718071012188659, "region": "🇹🇷", "status": "", "data": "30.12" },
  { "name": "Enter The Gungeon", "price": 0.44327067474496396, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Escape Dead Island", "price": 0.20195743358707471, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Eternal Hope", "price": 0.308114546113614, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Exit the Gungeon", "price": 0.367666097043136, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "FIFA 22 Xbox One", "price": 21.197138314785374, "region": "🇹🇷", "status": "", "data": "30.12" },
  { "name": "FIFA 22 Xbox Series X|S", "price": 23.740858505564386, "region": "🇹🇷", "status": "", "data": "30.12" },
  { "name": "FOCUS INDIES BUNDLE - Curse of the Dead Gods + Shady Part of Me + Aeon Must Die!", "price": 8.055113937466878, "region": "🇹🇷", "status": "", "data": "01.03" },
  { "name": "FROGUN", "price": 0.775723680803687, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Fantasy Dash", "price": 0.07767593599502874, "region": "🇦🇷", "status": "", "data": "25.02" },
  { "name": "Far Cry® 3 Blood Dragon Classic Edition", "price": 3.8749337572866986, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "Far Cry® 3 Classic Edition", "price": 0.7672828957588937, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Far Cry® 5 + Far Cry® New Dawn Deluxe Edition Bundle", "price": 4.529801667443426, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Far Cry® 6 Game of the Year Edition", "price": 17.08699704831443, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Fernz Gate", "price": 0.5540883434312049, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Fight'N Rage", "price": 0.5147325358603905, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Flat Heroes", "price": 0.7689917663507845, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Flewfie's Adventure", "price": 0.35213090984413026, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "For Honor® Complete Edition", "price": 6.471700067319144, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Fueled Up", "price": 0.8823986329035265, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Full Metal Furies", "price": 0.2941328776345088, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "GONNER2", "price": 0.29050800062140747, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "GRIP Digital Deluxe", "price": 0.3720677334161876, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Galacide", "price": 0.5540883434312049, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Gato Roboto", "price": 0.1488788773238051, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Geometric Sniper - Blood in Paris", "price": 0.1781368132152659, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Ghost Sync", "price": 0.664906012117446, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Giraffe and Annika（ジラフとアンニカ）", "price": 0.8886127077831287, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Glam's Incredible Run: Escape from Dukha", "price": 0.10874631039304022, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Go! Go! PogoGirl", "price": 0.28999016104810726, "region": "🇦🇷", "status": "", "data": "25.02" },
  { "name": "Goat Simulator 3", "price": 6.209932163015898, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Golazo! 2", "price": 2.951633783853762, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Golazo!", "price": 0.22163533737248198, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Grand Theft Auto V", "price": 10.35420226813733, "region": "🇦🇷", "status": " GOLD", "data": "21.02" },
  { "name": "Grand Theft Auto V: Premium Edition", "price": 4.010667495209984, "region": "🇦🇷", "status": " GOLD", "data": "21.02" },
  { "name": "Grand Theft Auto: The Trilogy – The Definitive Edition", "price": 14.016958134605193, "region": "🇹🇷", "status": " GOLD", "data": "21.02" },
  { "name": "Grapple Dog", "price": 0.5540883434312049, "region": "🇦🇷", "status": " GOLD", "data": "21.02" },
  { "name": "Gravity Heroes", "price": 0.5540883434312049, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "GreedFall - Gold Edition (Windows 10)", "price": 3.416187665061364, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Green Hell", "price": 1.3013308477033814, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Guacamelee! 2", "price": 0.367666097043136, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Guacamelee! Super Turbo Championship Edition", "price": 0.17994925172181656, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Guilt Battle Arena", "price": 0.0735332194086272, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Guns, Gore and Cannoli 2", "price": 0.3340065247786236, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Guns, Gore and Cannoli", "price": 0.20506447102687586, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "HOT WHEELS UNLEASHED™ - Game Of The Year Edition - Xbox S...", "price": 4.141680907254932, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "HOT WHEELS UNLEASHED™ - Game Of The Year Edition", "price": 4.141680907254932, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "HOT WHEELS UNLEASHED™ - Xbox Series X|S", "price": 2.5881621873543574, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "HOT WHEELS UNLEASHED™", "price": 2.5881621873543574, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Haven", "price": 0.9295220340738438, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Help Will Come Tomorrow", "price": 0.2941328776345088, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Historical Trilogy", "price": 1.1092123660090103, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Horizon Chase Turbo", "price": 0.6126126126126126, "region": "🇹🇷", "status": "", "data": "21.02" },
  { "name": "Horror Bundle : Paratopic + Fatum Betula", "price": 0.5882657552690176, "region": "🇦🇷", "status": "", "data": "02.03" },
  { "name": "Hotline Miami Collection", "price": 0.4647610170369219, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Hotshot Racing", "price": 0.2941328776345088, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Hunt Ducks 4", "price": 0.07767593599502874, "region": "🇦🇷", "status": "", "data": "23.02" },
  { "name": "Hunt: Showdown - Deluxe Edition", "price": 2.245363010068892, "region": "🇹🇷", "status": "", "data": "21.02" },
  { "name": "Hunt: Showdown - Gold Edition", "price": 2.6163222045574983, "region": "🇹🇷", "status": "", "data": "21.02" },
  { "name": "Hunt: Showdown", "price": 2.861685214626391, "region": "🇹🇷", "status": "", "data": "21.02" },
  { "name": "Hyper Gunsport", "price": 1.4872352545181502, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Hyper Shapes", "price": 0.3262389311791207, "region": "🇦🇷", "status": "", "data": "24.02" },
  { "name": "Hyposphere: Rebirth", "price": 0.22008181865258142, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "I Hate Running Backwards", "price": 0.1543161928434571, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Infinite Minigolf", "price": 0.3086323856869142, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Inukari - Chase of Deception", "price": 0.20713582932007663, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Iron Crypticle", "price": 0.13888457355911138, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Jelly Brawl", "price": 0.367666097043136, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Jeopardy!", "price": 0.3870850810418932, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Joy Ball Adventure", "price": 0.15017347625705554, "region": "🇦🇷", "status": "", "data": "22.02" },
  { "name": "Just Die Already", "price": 0.46372533789032155, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Just Shapes & Beats", "price": 1.029465071720781, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Katana Zero XB1", "price": 0.664906012117446, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Keep Talking and Nobody Explodes", "price": 0.5540883434312049, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Kerbal Space Program Enhanced Edition", "price": 2.3381028086910436, "region": "🇹🇷", "status": " GOLD", "data": "21.02" },
  { "name": "Kingdom Two Crowns", "price": 0.3606752628035835, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Kitaria Fables", "price": 0.8088654134948992, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Knights and Bikes", "price": 0.735332194086272, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "L.A. Noire", "price": 3.62228781523484, "region": "🇦🇷", "status": " GOLD", "data": "21.02" },
  { "name": "Lanternium", "price": 0.5193428722840487, "region": "🇹🇷", "status": "", "data": "21.02" },
  { "name": "Levelhead", "price": 1.029465071720781, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Life of Fly", "price": 0.664906012117446, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Light & Dark Bundle", "price": 1.1612552431256795, "region": "🇦🇷", "status": "", "data": "02.11" },
  { "name": "Little Mage Adventure", "price": 0.07767593599502874, "region": "🇦🇷", "status": "", "data": "26.02" },
  { "name": "Little Mouse's Encyclopedia + Clumsy Rush", "price": 0.27704417171560247, "region": "🇦🇷", "status": " GOLD", "data": "21.02" },
  { "name": "Little Mouse's Encyclopedia + Cyber Protocol", "price": 0.183833048521568, "region": "🇦🇷", "status": " GOLD", "data": "21.02" },
  { "name": "Little Triangle", "price": 0.664906012117446, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Lost Judgment Digital Deluxe Edition", "price": 7.4548184972295575, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Lost Sea", "price": 0.07715809642172855, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Lovers in a Dangerous Spacetime", "price": 0.3857904821086427, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Lunch A Palooza", "price": 0.5882657552690176, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "MINIT", "price": 0.1281652943917974, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "MONOPOLY PLUS", "price": 0.6586919372378437, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "MXGP 2021 - The Official Motocross Videogame - Xbox Series X|S", "price": 2.5881621873543574, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "MXGP 2021 - The Official Motocross Videogame", "price": 2.5881621873543574, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "MY HERO ONE'S JUSTICE 2 Deluxe Edition", "price": 4.954954954954955, "region": "🇹🇷", "status": "", "data": "01.03" },
  { "name": "Madden NFL 22 Xbox One", "price": 19.933198695044275, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Madden NFL 22 Xbox Series X|S", "price": 23.195588006835482, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Madden NFL 23 All Madden Edition Xbox One & Xbox Series X|S", "price": 15.897721250662427, "region": "🇹🇷", "status": "", "data": "21.02" },
  { "name": "Madden NFL 23 Xbox One", "price": 26.509243436383407, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Madden NFL 23 Xbox One", "price": 9.940966288643777, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Madden NFL 23 Xbox Series X|S", "price": 11.649836880534409, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Madden NFL 23 Xbox Series X|S", "price": 31.06623168142509, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Mafia: Definitive Edition", "price": 4.710527678525192, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Mafia: Trilogy", "price": 7.829682564341566, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Marble Duel", "price": 0.7539744187250789, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Marooners", "price": 0.2563305887835948, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Marvel's Midnight Suns Enhanced Edition", "price": 24.85319248096939, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Marvel's Midnight Suns Legendary Edition", "price": 34.17430480037284, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Masters of Anima", "price": 0.47694753577106513, "region": "🇹🇷", "status": " GOLD", "data": "21.02" },
  { "name": "Mayhem Brawler", "price": 0.8823986329035265, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Maze Blaze", "price": 0.183833048521568, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Metal Wolf Chaos XD", "price": 0.9295220340738438, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Microsoft 365 Family", "price": 0.0, "region": "🇦🇷", "status": "", "data": "01.12" },
  { "name": "Microsoft 365 Family", "price": 0.0, "region": "🇹🇷", "status": "", "data": "01.12" },
  { "name": "Microsoft 365 Personal", "price": 0.0, "region": "🇦🇷", "status": "", "data": "01.12" },
  { "name": "Microsoft 365 Personal", "price": 0.0, "region": "🇹🇷", "status": "", "data": "01.12" },
  { "name": "Miden Tower", "price": 0.5540883434312049, "region": "🇦🇷", "status": " GOLD", "data": "21.02" },
  { "name": "Minemaze", "price": 0.07767593599502874, "region": "🇦🇷", "status": "", "data": "26.02" },
  { "name": "Mini Madness", "price": 0.3308994873388224, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Minigolf Adventure", "price": 0.09062192532753352, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Mittelborg: City of Mages", "price": 0.1411112837243022, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Monster Energy Supercross - The Official Videogame 5", "price": 2.329501320490912, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Monster Energy Supercross 5 - Special Edition", "price": 2.873232872456113, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Monster Prom: XXL", "price": 0.3913313655429547, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Morkredd", "price": 0.367666097043136, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "MotoGP™22", "price": 2.5881621873543574, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Mount & Blade II: Bannerlord - Digital Companion", "price": 0.5882657552690176, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Mount & Blade II: Bannerlord Digital Deluxe Edition", "price": 3.1137693542540514, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Mount & Blade: Warband", "price": 0.2576251877168453, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Munchkin: Quacked Quest", "price": 0.7436176272590751, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "My Friend Pedro Win10", "price": 0.367666097043136, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "My Friend Pedro", "price": 0.367666097043136, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "NARUTO SHIPPUDEN™: Ultimate Ninja® STORM 4", "price": 0.6201128890269794, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "NARUTO SHIPPUDEN™: Ultimate Ninja® STORM Trilogy", "price": 1.0343845476671327, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "NBA 2K23 Michael Jordan Edition", "price": 22.78286986691523, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "NBA 2K23 for Xbox One", "price": 9.060897933820103, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "NBA 2K23 for Xbox Series X|S", "price": 12.426596240484695, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Necromunda: Underhive Wars", "price": 2.5172231054583993, "region": "🇹🇷", "status": " GOLD", "data": "21.02" },
  { "name": "New Tales from the Borderlands", "price": 13.222045574986751, "region": "🇹🇷", "status": "", "data": "21.02" },
  { "name": "Ninja Shodown", "price": 0.1543161928434571, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Ninja Warrior Epic Quest", "price": 0.18124385065506704, "region": "🇦🇷", "status": "", "data": "31.05" },
  { "name": "Nippon Marathon", "price": 0.27704417171560247, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Nobody Saves the World + Frozen Hearth Bundle", "price": 1.343016933354047, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Noel the Mortal Fate", "price": 0.9295220340738438, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Not for Broadcast Deluxe Edition", "price": 2.6751592356687897, "region": "🇦🇷", "status": "", "data": "23.03" },
  { "name": "ONE PIECE BURNING BLOOD - Gold Edition", "price": 2.503974562798092, "region": "🇹🇷", "status": "", "data": "01.03" },
  { "name": "ONE PIECE World Seeker Deluxe Edition", "price": 2.7027027027027026, "region": "🇹🇷", "status": "", "data": "01.03" },
  { "name": "ONE PIECE: PIRATE WARRIORS 4 Deluxe Edition", "price": 4.349800631764279, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "ONE PUNCH MAN: A HERO NOBODY KNOWS", "price": 2.3767885532591415, "region": "🇹🇷", "status": "", "data": "01.03" },
  { "name": "Observation", "price": 0.4647610170369219, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Ogre: Console Edition", "price": 1.1744601522448346, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Old Man's Journey", "price": 0.25736626793019524, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Olija", "price": 0.44327067474496396, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Outbreak Platinum Collection", "price": 1.7593599502874009, "region": "🇦🇷", "status": " GOLD", "data": "21.02" },
  { "name": "Outbreak Silver Collection", "price": 1.3903992543110144, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Outbuddies DX", "price": 0.2651338615296981, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "PGA TOUR 2K23 Cross-Gen Edition", "price": 20.710993734141162, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "PGA TOUR 2K23 Tiger Woods Edition", "price": 43.494899280202986, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "PGA TOUR 2K23 x NBA 2K23 Bundle", "price": 19.935011133550827, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "PGA TOUR 2K23", "price": 18.121795867640206, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Pang Adventures", "price": 0.20506447102687586, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Party Hard 2", "price": 0.44119931645176325, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Pikuniku", "price": 0.24209000051783955, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Pit People", "price": 0.41220030034695243, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Pizza Tycoon", "price": 4.091149973502914, "region": "🇹🇷", "status": "", "data": "24.02" },
  { "name": "Poker Club", "price": 0.8233649215473046, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Police Stories", "price": 0.332453006058723, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Power Rangers: Battle for the Grid - Digital Collector's Edition", "price": 1.1107658847289108, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Power Rangers: Battle for the Grid Super Edition", "price": 1.848687276681684, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Power Rangers: Battle for the Grid", "price": 0.735332194086272, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Prizma Puzzle Prime", "price": 0.3262389311791207, "region": "🇦🇷", "status": "", "data": "23.02" },
  { "name": "Pro Gymnast Simulator + Brawl Chess", "price": 0.3870850810418932, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Project Snaqe", "price": 0.21024286675987777, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Pure Pool", "price": 0.17943141214851638, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Pushy and Pully in Blockland", "price": 0.367666097043136, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "REZ PLZ", "price": 0.22163533737248198, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "RIDE 4 - Special Edition", "price": 4.141680907254932, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "RIDE 4", "price": 3.1060017606545487, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "RISK", "price": 0.26720521982289885, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Rabbids®: Party of Legends", "price": 7.419183889772125, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "Record of Lodoss War-Deedlit in Wonder Labyrinth-", "price": 1.3013308477033814, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Riddled Corpses EX", "price": 0.10356791466003831, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Riders Republic Ultimate Edition", "price": 15.103338632750397, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "RiffTrax: The Game", "price": 0.367666097043136, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Rise of Fox Hero", "price": 0.28999016104810726, "region": "🇦🇷", "status": "", "data": "04.03" },
  { "name": "Riverbond", "price": 0.4647610170369219, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Road Redemption", "price": 0.41220030034695243, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Robo Revenge Squad", "price": 2.098569157392687, "region": "🇹🇷", "status": "", "data": "21.02" },
  { "name": "Robotry!", "price": 1.1747190720314846, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Ruiner", "price": 0.2941328776345088, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Ruinverse", "price": 0.5540883434312049, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Rusty Spout Rescue Adventure", "price": 0.2589197866500958, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "SBK™22", "price": 4.1406452281083315, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "SCARLET NEXUS", "price": 3.8837450157941067, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": 8.850396147273573, "region": "🇦🇷", "status": "", "data": "01.01" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": 6.62420382165605, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "SWORD ART ONLINE Alicization Lycoris", "price": 2.5879032675677074, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "SWORD ART ONLINE: FATAL BULLET Complete Edition", "price": 2.3847376788553256, "region": "🇹🇷", "status": "", "data": "01.03" },
  { "name": "Screencheat", "price": 0.19289524105432135, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Seeds of Resilience", "price": 0.10305007508673811, "region": "🇦🇷", "status": " GOLD", "data": "21.02" },
  { "name": "Sekiro™: Shadows Die Twice - GOTY Edition", "price": 4.657966961835223, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Serious Sam 4", "price": 0.8917197452229298, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Serious Sam Collection", "price": 1.1107658847289108, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Shadow Warrior 2", "price": 0.33530112371187404, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Shadow Warrior", "price": 0.33530112371187404, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Shady Part of Me", "price": 1.2412614572005591, "region": "🇦🇷", "status": " GOLD", "data": "21.02" },
  { "name": "Shape of the World", "price": 0.27704417171560247, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Shenmue I & II", "price": 0.42457666614882705, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Shenmue I & II", "price": 0.6462637874786391, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Shikhondo - Soul Eater", "price": 0.2519289524105432, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Shing!", "price": 0.1470664388172544, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Shining Resonance Refrain", "price": 0.8585780125317177, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Shotgun Farmers", "price": 0.367666097043136, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Sid Meier's Civilization VI", "price": 2.745098039215686, "region": "🇹🇷", "status": "", "data": "21.02" },
  { "name": "Sir Lovelot", "price": 0.1470664388172544, "region": "🇦🇷", "status": " GOLD", "data": "21.02" },
  { "name": "Sisters Royale: Five Sisters Under Fire", "price": 0.5152503754336906, "region": "🇦🇷", "status": " GOLD", "data": "21.02" },
  { "name": "Slipstream", "price": 0.8611552729199787, "region": "🇹🇷", "status": "", "data": "21.02" },
  { "name": "Smart Moves 2", "price": 0.23561700585158715, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Smoots Golf", "price": 0.183833048521568, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Smoots Summer Games", "price": 0.183833048521568, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "SnowRunner - 1-Anniversary Edition", "price": 9.538950715421302, "region": "🇹🇷", "status": " GOLD", "data": "21.02" },
  { "name": "Soul Hackers 2 - Digital Deluxe Edition", "price": 11.648801201387808, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Space Engineers", "price": 0.735332194086272, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Space Raiders in Space", "price": 0.4422349955983636, "region": "🇦🇷", "status": " GOLD", "data": "21.02" },
  { "name": "Sparkle Bundle", "price": 0.6586919372378437, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Speed Brawl", "price": 0.5152503754336906, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Squid Hero for Kinect", "price": 0.1281652943917974, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Star Hunter DX", "price": 0.367666097043136, "region": "🇦🇷", "status": " GOLD", "data": "21.02" },
  { "name": "Stellar Interface", "price": 0.07767593599502874, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Streets of Rage 4", "price": 0.9295220340738438, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Streets of Rogue", "price": 0.367666097043136, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Super Blood Hockey", "price": 0.22163533737248198, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Super Hydorah", "price": 1.6550152762674124, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Super Pixel Kid", "price": 0.07767593599502874, "region": "🇦🇷", "status": "", "data": "12.03" },
  { "name": "Super Rebellion", "price": 0.22008181865258142, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Super Soccer Blast: America vs Europe", "price": 0.367666097043136, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Super Sports Blast", "price": 0.9295220340738438, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Super Tennis Blast", "price": 0.5540883434312049, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Super Woden GP", "price": 0.6234788462534306, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Synchro Hedgehogs", "price": 0.23561700585158715, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "TEKKEN 7", "price": 2.2522522522522523, "region": "🇹🇷", "status": "", "data": "01.03" },
  { "name": "Tales of Arise", "price": 6.338102808691043, "region": "🇹🇷", "status": "", "data": "01.03" },
  { "name": "Tank Brawl 2: Armor Fury", "price": 0.367666097043136, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Temple Dash: Jungle Adventure", "price": 0.07767593599502874, "region": "🇦🇷", "status": "", "data": "05.03" },
  { "name": "Ten Dates", "price": 1.0672673605716947, "region": "🇦🇷", "status": "", "data": "22.02" },
  { "name": "The Ascent", "price": 0.7775361193102377, "region": "🇦🇷", "status": " GOLD", "data": "21.02" },
  { "name": "The Coma 2: Vicious Sisters", "price": 0.3508363109108798, "region": "🇦🇷", "status": " GOLD", "data": "21.02" },
  { "name": "The Crew® 2 Special Edition", "price": 3.1060017606545487, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "The Escapists: Supermax Edition", "price": 1.300813008130081, "region": "🇦🇷", "status": "", "data": "30.04" },
  { "name": "The FMV Bundle", "price": 1.9015069131583033, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "The Jackbox Party Pack 5", "price": 0.9290041945005437, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "The Jackbox Party Pack 7", "price": 1.3329190616746929, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "The Jackbox Party Pack", "price": 0.5157682150069908, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "The Jackbox Party Quadpack", "price": 2.908963803013826, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "The Last Door - Complete Edition", "price": 0.3878618404018435, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "The Lord of the Rings: Adventure Card Game - Definitive Edition", "price": 0.735332194086272, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "The Messenger", "price": 0.5882657552690176, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "The Metronomicon: Slay the Dance Floor Deluxe Edition", "price": 0.4647610170369219, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "The Metronomicon: Slay the Dance Floor", "price": 0.2576251877168453, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "The Outer Worlds: Board-Approved Bundle", "price": 12.853736089030207, "region": "🇹🇷", "status": " GOLD", "data": "21.02" },
  { "name": "The Quarry - Deluxe Edition", "price": 20.710993734141162, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "The Quarry for Xbox One", "price": 15.532598001139245, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "The Quarry for Xbox Series X|S", "price": 18.121795867640206, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "The Surge 2 - Windows 10", "price": 1.6816840142923721, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "The Surge", "price": 1.4308426073131955, "region": "🇹🇷", "status": " GOLD", "data": "21.02" },
  { "name": "The Talos Principle", "price": 0.20118067422712443, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "The Wild Eight", "price": 0.22059965822588162, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "The Witcher 3: Wild Hunt – Complete Edition", "price": 10.250116513903992, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Them's Fightin' Herds", "price": 0.8823986329035265, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Them's Fightin' Herds: Deluxe Edition", "price": 2.229299363057325, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Think of the Children", "price": 0.3540010598834128, "region": "🇹🇷", "status": "", "data": "21.02" },
  { "name": "Thronebreaker: The Witcher Tales", "price": 1.862668945160789, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Ticket to Ride", "price": 0.5882657552690176, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Timothy vs the Aliens", "price": 0.5054114235409869, "region": "🇦🇷", "status": " GOLD", "data": "21.02" },
  { "name": "Tiny Tina's Assault on Dragon Keep: A Wonderlands One-sho...", "price": 2.2733157267878408, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Tiny Tina's Wonderlands", "price": 15.501527626741234, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Tiny Tina's Wonderlands: Chaotic Great Edition", "price": 16.93163751987281, "region": "🇹🇷", "status": "", "data": "21.02" },
  { "name": "Tiny Tina's Wonderlands: Next-Level Edition", "price": 18.521462639109696, "region": "🇹🇷", "status": "", "data": "21.02" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Deluxe Edition", "price": 3.7274092486147787, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Tony Hawk's™ Pro Skater™ 1 + 2 - Cross-Gen Deluxe Bundle", "price": 4.658484801408523, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Total Arcade Racing", "price": 0.22059965822588162, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Totally Reliable Delivery Service", "price": 0.27704417171560247, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Touchdown Pinball", "price": 0.18927036404122, "region": "🇦🇷", "status": "", "data": "25.02" },
  { "name": "Trailmakers", "price": 0.7331054839210812, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Train Station Renovation", "price": 0.5929263114287193, "region": "🇦🇷", "status": " GOLD", "data": "21.02" },
  { "name": "Trash Sailors", "price": 0.8823986329035265, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Trek to Yomi", "price": 0.9559318523121536, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Trials Fusion", "price": 0.2576251877168453, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Tribal Pass", "price": 0.10615711252653927, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Tricky Towers", "price": 0.27005333747604987, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Trigger Witch", "price": 0.5540883434312049, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Trine 4: The Nightmare Prince", "price": 0.5553829423644554, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Tunche", "price": 0.735332194086272, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "UFC® 4 Deluxe Edition", "price": 4.141680907254932, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "UFC® 4", "price": 3.6238413339547404, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Unit 4: Couch Attack Bundle", "price": 0.6998601833152089, "region": "🇦🇷", "status": "", "data": "30.12" },
  { "name": "Unrailed!", "price": 0.5165449743669411, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Unruly Heroes", "price": 0.5147325358603905, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Urban Flow", "price": 0.29050800062140747, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Valkyria Chronicles 4 Complete Edition", "price": 4.659002640981824, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Vermintide - Digital Value Pack", "price": 2.0672155766143647, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Volley & Tennis Bundle Blast", "price": 0.5882657552690176, "region": "🇦🇷", "status": " GOLD", "data": "21.02" },
  { "name": "WINGSPAN", "price": 0.735332194086272, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "WRC Collection FIA World Rally Championship", "price": 3.29734348298897, "region": "🇦🇷", "status": "", "data": "31.08" },
  { "name": "WWE 2K22 for Xbox One", "price": 7.766299000569623, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "WWE 2K22 for Xbox Series X|S", "price": 9.060897933820103, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "WWE 2K22 nWo 4-Life Edition", "price": 18.344992050874403, "region": "🇹🇷", "status": "", "data": "21.02" },
  { "name": "Warhammer 40,000: Shootas, Blood & Teef", "price": 3.724302211174978, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Warp Drive", "price": 1.3942830511107658, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Watch Dogs®2 - Deluxe Edition", "price": 2.8018018018018016, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "Watch Dogs®: Legion Ultimate Edition", "price": 7.248718347056081, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Windjammers 2", "price": 0.9559318523121536, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Woodle Tree 2: Deluxe+", "price": 0.14525400031070373, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "X-Morph: Defense Complete Edition", "price": 0.30966806483351456, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "X-Morph: Defense", "price": 0.20610015017347622, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "XCOM® 2 Collection", "price": 1.6825649178590354, "region": "🇹🇷", "status": "", "data": "21.02" },
  { "name": "Yakuza: Like a Dragon Legendary Hero Edition", "price": 5.280410128942053, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Yakuza: Like a Dragon", "price": 3.5715395370514216, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "You Suck At Parking + Parking Pass Season 2: Inferno", "price": 1.9993785925120398, "region": "🇦🇷", "status": "", "data": "02.03" },
  { "name": "Young Souls", "price": 1.1154264408886128, "region": "🇦🇷", "status": "", "data": "21.02" },
  { "name": "Yu-Gi-Oh! Legacy of the Duelist : Link Evolution", "price": 2.370959194488606, "region": "🇹🇷", "status": "", "data": "01.03" },
  { "name": "Yu-Gi-Oh! Legacy of the Duelist", "price": 0.2576251877168453, "region": "🇦🇷", "status": "", "data": "01.03" }
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
  item.innerHTML = `${a.name}: ${res}&#8381; ${a.region} ${a.data} ${a.status}`
  list.append(item)
})

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
