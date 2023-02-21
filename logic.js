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
  { "name": "9 Monkeys of Shaolin + Ash of Gods + Redeemer: Bundle", "price": 2.0703226140541657, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "9 Monkeys of Shaolin", "price": 1.2420382165605095, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "A Plague Tale: Innocence - Windows 10", "price": 2.173890528714204, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Absolver", "price": 0.30966806483351456, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Aeon Must Die!", "price": 3.524112347641759, "region": "🇹🇷", "status": "", "data": "01.03" },
  { "name": "Aery - Calm Mind", "price": 0.4779659261560768, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Aery - Last Day of Earth", "price": 0.5147325358603905, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Agents of Mayhem - Total Mayhem Bundle", "price": 0.15483403241675728, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Agents of Mayhem", "price": 0.10305007508673811, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Agony", "price": 0.10305007508673811, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Allison's Diary: Rebirth", "price": 0.367666097043136, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Alphadia Genesis 1 & 2", "price": 0.735332194086272, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "American Fugitive", "price": 0.2941328776345088, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Ape Out", "price": 0.27704417171560247, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Ara Fell: Enhanced Edition", "price": 0.332453006058723, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Aragami 2", "price": 1.1578892858992282, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Aragami: Shadow Edition", "price": 0.19341308062762155, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Arcade Paradise", "price": 1.102998291129408, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Arietta of Spirits", "price": 0.367666097043136, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Asdivine Dios", "price": 0.5540883434312049, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Asdivine Hearts I & II", "price": 0.735332194086272, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Ash of Gods Redemption", "price": 0.8280254777070063, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Assassin's Creed® Odyssey - ULTIMATE EDITION", "price": 5.824400600693904, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Assassin's Creed® Syndicate Gold Edition", "price": 2.7821939586645468, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "Assassin's Creed® Valhalla Deluxe Edition", "price": 8.542644088861271, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Assassin's Creed® Valhalla Ragnarök Edition", "price": 11.128775834658187, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "Assassin’s Creed® Rogue Remastered", "price": 1.416653720677334, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Assassin’s Creed® Valhalla + Immortals Fenyx Rising™ Bundle", "price": 8.413598467194863, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Assassin’s Creed® Valhalla + Watch Dogs®: Legion Bundle", "price": 8.413598467194863, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Awarded Platformer Bundle", "price": 0.8505514991455646, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "BLACKTAIL", "price": 11.92368839427663, "region": "🇹🇷", "status": " GOLD", "data": "28.02" },
  { "name": "BROK the InvestiGator", "price": 1.4872352545181502, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "BROKEN MIND", "price": 0.367666097043136, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Ballotron", "price": 0.23561700585158715, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Blazing Beaks", "price": 0.3656983066645953, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Blightbound", "price": 0.735332194086272, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Bloodstained: Ritual of the Night", "price": 3.315315315315315, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "Boggle", "price": 0.1851794314121485, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Borderlands 3: Next Level Edition", "price": 2.4926207860804723, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Borderlands 3: Ultimate Edition", "price": 6.989280720832686, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Broforce", "price": 0.27704417171560247, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Bug Fables: The Everlasting Sapling", "price": 0.7436176272590751, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Bundle: South Park™ : The Stick of Truth™ + The Fractured...", "price": 5.55219925808161, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "CATAN® - Console Edition Deluxe", "price": 5.42501324854266, "region": "🇹🇷", "status": "", "data": "23.02" },
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
  { "name": "Carrion", "price": 0.5882657552690176, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Castle of no Escape (for Windows 10)", "price": 0.18124385065506704, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Castle of no Escape 2 (for Windows 10)", "price": 0.2977577546476102, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Chorus", "price": 2.045466314535757, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Citadel: Forged with Fire", "price": 0.8917197452229298, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Crash™ Team Racing Nitro-Fueled - Nitros Oxide Edition", "price": 5.435503081145462, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "CrushBorgs (for Windows 10)", "price": 0.18124385065506704, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Cube Farmer", "price": 0.28999016104810726, "region": "🇦🇷", "status": "", "data": "22.02" },
  { "name": "Cult of the Lamb", "price": 2.83147853736089, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "Cult of the Lamb: Cultist Edition", "price": 3.378378378378378, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "Cuphead & The Delicious Last Course", "price": 2.908963803013826, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Cuphead", "price": 1.029465071720781, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "CyberHeroes Arena DX", "price": 0.28999016104810726, "region": "🇦🇷", "status": "", "data": "04.03" },
  { "name": "Cyberpunk 2077", "price": 10.35420226813733, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "DAKAR 18", "price": 0.9295220340738438, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "DRAGON BALL FIGHTERZ - FighterZ Edition", "price": 1.7469318005281964, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "DRAGON BALL XENOVERSE 2", "price": 1.397390088550567, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "DRAGON BALL: THE BREAKERS Special Edition", "price": 8.232644409114997, "region": "🇹🇷", "status": "", "data": "01.03" },
  { "name": "Dark Burial: Enhanced Edition", "price": 0.28999016104810726, "region": "🇦🇷", "status": "", "data": "03.03" },
  { "name": "Dead Island Definitive Collection", "price": 0.23225104862513593, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Dead Island Definitive Edition", "price": 0.15457511263010718, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Dead Island Retro Revenge", "price": 0.050748278183418774, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Dead Island: Riptide Definitive Edition", "price": 0.15457511263010718, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Deadlight: Director's Cut", "price": 0.07715809642172855, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Death's Door [Win10]", "price": 0.735332194086272, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Death's Door [Xbox]", "price": 0.735332194086272, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles D...", "price": 9.318523121536947, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Detective Di: The Silk Rose Murders", "price": 0.24209000051783955, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Diablo III: Eternal Collection", "price": 4.109697933227345, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "Digimon Survive", "price": 15.543190249072602, "region": "🇹🇷", "status": "", "data": "01.03" },
  { "name": "Disc Room", "price": 0.5540883434312049, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Dolmen", "price": 2.0703226140541657, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Dr. Atominus (for Windows 10)", "price": 0.18124385065506704, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Dragon Ball Xenoverse + Season Pass", "price": 0.8148205685878513, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Dreamfall Chapters", "price": 0.23225104862513593, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "EA SPORTS™ FIFA 23 Standard Edition Xbox One", "price": 11.128245892951774, "region": "🇹🇷", "status": "", "data": "30.12" },
  { "name": "EA SPORTS™ FIFA 23 Standard Edition Xbox Series X|S", "price": 12.718071012188659, "region": "🇹🇷", "status": "", "data": "30.12" },
  { "name": "Enter The Gungeon", "price": 0.44327067474496396, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Escape Dead Island", "price": 0.20195743358707471, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Escape Sequence (for Windows 10)", "price": 0.18124385065506704, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Exit the Gungeon", "price": 0.367666097043136, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "FIFA 22 Xbox One", "price": 21.197138314785374, "region": "🇹🇷", "status": "", "data": "30.12" },
  { "name": "FIFA 22 Xbox Series X|S", "price": 23.740858505564386, "region": "🇹🇷", "status": "", "data": "30.12" },
  { "name": "FOCUS INDIES BUNDLE - Curse of the Dead Gods + Shady Part of Me + Aeon Must Die!", "price": 8.055113937466878, "region": "🇹🇷", "status": "", "data": "01.03" },
  { "name": "Fantasy Dash", "price": 0.07767593599502874, "region": "🇦🇷", "status": "", "data": "25.02" },
  { "name": "Far Cry® 3 Blood Dragon Classic Edition", "price": 3.8749337572866986, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "Far Cry® 3 Classic Edition", "price": 0.7672828957588937, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Far Cry® 5 + Far Cry® New Dawn Deluxe Edition Bundle", "price": 4.529801667443426, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Far Cry® 6 Game of the Year Edition", "price": 17.08699704831443, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Fernz Gate", "price": 0.5540883434312049, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Fluffy Horde + Clumsy Rush", "price": 0.44119931645176325, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "For Honor® Complete Edition", "price": 6.471700067319144, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Gato Roboto", "price": 0.1488788773238051, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Geometric Sniper - Blood in Paris", "price": 0.1781368132152659, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Ghost Sync", "price": 0.664906012117446, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Giraffe and Annika（ジラフとアンニカ）", "price": 0.8886127077831287, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Go! Go! PogoGirl", "price": 0.28999016104810726, "region": "🇦🇷", "status": "", "data": "25.02" },
  { "name": "Gods Will Fall - Valiant Edition", "price": 1.6560509554140126, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Gods Will Fall", "price": 1.0346434674537828, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "HOT WHEELS UNLEASHED™ - Game Of The Year Edition - Xbox S...", "price": 4.141680907254932, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "HOT WHEELS UNLEASHED™ - Game Of The Year Edition", "price": 4.141680907254932, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "HOT WHEELS UNLEASHED™ - Xbox Series X|S", "price": 2.5881621873543574, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "HOT WHEELS UNLEASHED™", "price": 2.5881621873543574, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Happi Basudei (for Windows 10)", "price": 0.18124385065506704, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Heaven Dust", "price": 0.44119931645176325, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Homefront®: The Revolution 'Freedom Fighter' Bundle", "price": 0.20661798974677642, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Homefront®: The Revolution", "price": 0.10305007508673811, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Horror Bundle : Paratopic + Fatum Betula", "price": 0.5882657552690176, "region": "🇦🇷", "status": "", "data": "02.03" },
  { "name": "Hotline Miami Collection", "price": 0.4647610170369219, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Hunt Ducks 4", "price": 0.07767593599502874, "region": "🇦🇷", "status": "", "data": "23.02" },
  { "name": "Hyper Shapes", "price": 0.3262389311791207, "region": "🇦🇷", "status": "", "data": "24.02" },
  { "name": "I Hate Running Backwards", "price": 0.1543161928434571, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Iron Harvest Complete Edition", "price": 5.816110227874933, "region": "🇹🇷", "status": "", "data": "07.03" },
  { "name": "Jeopardy!", "price": 0.3870850810418932, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Joy Ball Adventure", "price": 0.15017347625705554, "region": "🇦🇷", "status": "", "data": "22.02" },
  { "name": "Katana Zero XB1", "price": 0.664906012117446, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "King's Bounty II - Lord's Edition", "price": 3.4976152623211445, "region": "🇹🇷", "status": "", "data": "07.03" },
  { "name": "King's Bounty II", "price": 3.179650238473768, "region": "🇹🇷", "status": "", "data": "07.03" },
  { "name": "Kingdom Come: Deliverance - Royal Edition", "price": 1.4489151260939361, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Kingdom Come: Deliverance", "price": 1.3204909119154884, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Kona", "price": 0.11573714463259283, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Let's Sing 2023 Platinum Edition", "price": 29.525172231054583, "region": "🇹🇷", "status": "", "data": "07.03" },
  { "name": "Let's Sing 2023", "price": 13.137254901960784, "region": "🇹🇷", "status": "", "data": "07.03" },
  { "name": "Let's Sing ABBA", "price": 5.693387188648956, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Light & Dark Bundle", "price": 1.1612552431256795, "region": "🇦🇷", "status": "", "data": "02.11" },
  { "name": "Little Mage Adventure", "price": 0.07767593599502874, "region": "🇦🇷", "status": "", "data": "26.02" },
  { "name": "Lost Judgment Digital Deluxe Edition", "price": 7.4548184972295575, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "MINIT", "price": 0.1281652943917974, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "MONOPOLY PLUS", "price": 0.6586919372378437, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "MXGP 2021 - The Official Motocross Videogame - Xbox Series X|S", "price": 2.5881621873543574, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "MXGP 2021 - The Official Motocross Videogame", "price": 2.5881621873543574, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "MY HERO ONE'S JUSTICE 2 Deluxe Edition", "price": 4.954954954954955, "region": "🇹🇷", "status": "", "data": "01.03" },
  { "name": "Madden NFL 22 Xbox One", "price": 19.933198695044275, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Madden NFL 22 Xbox Series X|S", "price": 23.195588006835482, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Madden NFL 23 Xbox One", "price": 26.509243436383407, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Madden NFL 23 Xbox Series X|S", "price": 31.06623168142509, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Marvel's Midnight Suns Digital+ Edition", "price": 27.96022992077054, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Metal Wolf Chaos XD", "price": 0.9295220340738438, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Metro 2033 Redux", "price": 0.15457511263010718, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Metro Exodus Gold Edition", "price": 1.3370617782610945, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Metro Exodus", "price": 1.1641033607788307, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Metro Redux Bundle", "price": 0.30966806483351456, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Metro Saga Bundle", "price": 0.8896483869297291, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Metro: Last Light Redux", "price": 0.20610015017347622, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Microsoft 365 Family", "price": 0.0, "region": "🇦🇷", "status": "", "data": "01.12" },
  { "name": "Microsoft 365 Family", "price": 0.0, "region": "🇹🇷", "status": "", "data": "01.12" },
  { "name": "Microsoft 365 Personal", "price": 0.0, "region": "🇦🇷", "status": "", "data": "01.12" },
  { "name": "Microsoft 365 Personal", "price": 0.0, "region": "🇹🇷", "status": "", "data": "01.12" },
  { "name": "Minemaze", "price": 0.07767593599502874, "region": "🇦🇷", "status": "", "data": "26.02" },
  { "name": "Monster Energy Supercross - The Official Videogame 5", "price": 2.329501320490912, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Monster Energy Supercross 5 - Special Edition", "price": 2.873232872456113, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Monster Truck Championship Xbox One", "price": 0.7430997876857749, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Monster Truck Championship Xbox Series X|S", "price": 0.7430997876857749, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Mordheim: City of the Damned", "price": 0.7239397234736679, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "MotoGP™22", "price": 2.5881621873543574, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "My Friend Pedro Win10", "price": 0.367666097043136, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "My Friend Pedro", "price": 0.367666097043136, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "NARUTO SHIPPUDEN™: Ultimate Ninja® STORM 4", "price": 0.6201128890269794, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "NARUTO SHIPPUDEN™: Ultimate Ninja® STORM Trilogy", "price": 1.0343845476671327, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "NBA 2K23 Digital Deluxe Edition", "price": 11.65009580032106, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Necromunda: Underhive Wars - Gold Edition", "price": 6.212003521309097, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "New Tales from the Borderlands: Deluxe Edition", "price": 15.871754107048224, "region": "🇹🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Ninja Warrior Epic Quest", "price": 0.18124385065506704, "region": "🇦🇷", "status": "", "data": "31.05" },
  { "name": "No Man's Sky", "price": 2.224120967324323, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Noel the Mortal Fate", "price": 0.9295220340738438, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Not for Broadcast Deluxe Edition", "price": 2.6751592356687897, "region": "🇦🇷", "status": "", "data": "23.03" },
  { "name": "ONE PIECE BURNING BLOOD - Gold Edition", "price": 2.503974562798092, "region": "🇹🇷", "status": "", "data": "01.03" },
  { "name": "ONE PIECE World Seeker Deluxe Edition", "price": 2.7027027027027026, "region": "🇹🇷", "status": "", "data": "01.03" },
  { "name": "ONE PIECE: PIRATE WARRIORS 4 Deluxe Edition", "price": 4.349800631764279, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "ONE PUNCH MAN: A HERO NOBODY KNOWS", "price": 2.3767885532591415, "region": "🇹🇷", "status": "", "data": "01.03" },
  { "name": "Observation", "price": 0.4647610170369219, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Of Tanks and Demons III", "price": 0.5193428722840487, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "Olija", "price": 0.44327067474496396, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Othercide", "price": 3.020667726550079, "region": "🇹🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Outbreak: Epidemic Definitive Collection", "price": 1.4872352545181502, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Outward: Definitive Edition", "price": 2.5879032675677074, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Outward: The Adventurer Bundle", "price": 0.7430997876857749, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "PGA TOUR 2K23 Deluxe Edition", "price": 28.478587333644036, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Pathfinder: Kingmaker - Definitive Edition", "price": 1.3803531665889905, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Pikuniku", "price": 0.24209000051783955, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Pizza Tycoon", "price": 4.091149973502914, "region": "🇹🇷", "status": "", "data": "24.02" },
  { "name": "Prizma Puzzle Prime", "price": 0.3262389311791207, "region": "🇦🇷", "status": "", "data": "23.02" },
  { "name": "Pro Gymnast Simulator + Cyber Protocol", "price": 0.3870850810418932, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Pumped BMX Pro", "price": 0.11573714463259283, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "RIDE 4 - Special Edition", "price": 4.141680907254932, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "RIDE 4", "price": 3.1060017606545487, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "RISK", "price": 0.26720521982289885, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Rabbids®: Party of Legends", "price": 7.419183889772125, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "Record of Lodoss War-Deedlit in Wonder Labyrinth-", "price": 1.3013308477033814, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Red Faction Guerrilla Re-Mars-tered", "price": 0.23225104862513593, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Relicta", "price": 0.4391279581585624, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "RiMS Racing - European Manufacturers Deluxe Edition Xbox One", "price": 5.5643879173290935, "region": "🇹🇷", "status": " GOLD", "data": "28.02" },
  { "name": "RiMS Racing - European Manufacturers Deluxe Edition Xbox Series X|S", "price": 5.5643879173290935, "region": "🇹🇷", "status": " GOLD", "data": "28.02" },
  { "name": "RiMS Racing - Japanese Manufacturers Deluxe Edition Xbox One", "price": 5.5643879173290935, "region": "🇹🇷", "status": " GOLD", "data": "28.02" },
  { "name": "RiMS Racing - Japanese Manufacturers Deluxe Edition Xbox Series X|S", "price": 5.5643879173290935, "region": "🇹🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Riders Republic Ultimate Edition", "price": 15.103338632750397, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "Rise of Fox Hero", "price": 0.28999016104810726, "region": "🇦🇷", "status": "", "data": "04.03" },
  { "name": "Road 96", "price": 1.9012479933716533, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Ruiner", "price": 0.2941328776345088, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Ruinverse", "price": 0.5540883434312049, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Rusty Gun", "price": 0.5193428722840487, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "SBK™22", "price": 4.1406452281083315, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "SCARLET NEXUS", "price": 3.8837450157941067, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": 8.850396147273573, "region": "🇦🇷", "status": "", "data": "01.01" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": 6.62420382165605, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "SWORD ART ONLINE Alicization Lycoris", "price": 2.5879032675677074, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "SWORD ART ONLINE: FATAL BULLET Complete Edition", "price": 2.3847376788553256, "region": "🇹🇷", "status": "", "data": "01.03" },
  { "name": "Saints Row Gold Edition", "price": 18.017710113406867, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Saints Row IV: Re-Elected & Gat out of Hell", "price": 0.3870850810418932, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Saints Row IV: Re-Elected", "price": 0.20610015017347622, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Saints Row Platinum Edition", "price": 19.881932577287554, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Saints Row The Third Remastered", "price": 1.645694163948009, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Saints Row", "price": 9.318782041323598, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Saints Row: Gat out of Hell", "price": 0.19289524105432135, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Saturnalia", "price": 1.102998291129408, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Seek Hearts", "price": 0.5540883434312049, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Sekiro™: Shadows Die Twice - GOTY Edition", "price": 4.657966961835223, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Serious Sam 4", "price": 0.8917197452229298, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Serious Sam Collection", "price": 1.1107658847289108, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Shadow Warrior 2", "price": 0.33530112371187404, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Shadow Warrior", "price": 0.33530112371187404, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Shenmue I & II", "price": 0.42457666614882705, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Shenmue I & II", "price": 0.6462637874786391, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Shining Resonance Refrain", "price": 0.8585780125317177, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Skatemasta Tcheco", "price": 0.14499508052405363, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Slime Rancher", "price": 0.2576251877168453, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Snooker 19", "price": 0.9315933923670446, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Sophstar", "price": 0.7262700015535186, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Soul Hackers 2 - Digital Deluxe Edition", "price": 11.648801201387808, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Space Hulk: Tactics", "price": 1.3453472114338978, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Space Raiders in Space + Clumsy Rush", "price": 0.4841800010356791, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Sparkle Bundle", "price": 0.6586919372378437, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Stellar Interface", "price": 0.07767593599502874, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Strategic Mind: Fight for Freedom", "price": 1.6661488270933664, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Super Pixel Kid", "price": 0.07767593599502874, "region": "🇦🇷", "status": "", "data": "12.03" },
  { "name": "TEKKEN 7", "price": 2.2522522522522523, "region": "🇹🇷", "status": "", "data": "01.03" },
  { "name": "THE KING OF FIGHTERS XV Deluxe Edition", "price": 19.581346051934286, "region": "🇹🇷", "status": "", "data": "07.03" },
  { "name": "THE KING OF FIGHTERS XV Standard Edition", "price": 11.213566507684154, "region": "🇹🇷", "status": "", "data": "07.03" },
  { "name": "Tales from the Borderlands", "price": 5.722840487546369, "region": "🇹🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Tales of Arise", "price": 6.338102808691043, "region": "🇹🇷", "status": "", "data": "01.03" },
  { "name": "Temple Dash: Jungle Adventure", "price": 0.07767593599502874, "region": "🇦🇷", "status": "", "data": "05.03" },
  { "name": "Temple of Horror", "price": 0.5147325358603905, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Ten Dates", "price": 1.0672673605716947, "region": "🇦🇷", "status": "", "data": "22.02" },
  { "name": "The Amazing American Circus", "price": 0.5147325358603905, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "The Beast Inside (Console Version)", "price": 1.4872352545181502, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "The Chant", "price": 10.572337042925279, "region": "🇹🇷", "status": "", "data": "07.03" },
  { "name": "The Crew® 2 Special Edition", "price": 3.1060017606545487, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "The Escapists: Supermax Edition", "price": 1.300813008130081, "region": "🇦🇷", "status": "", "data": "30.04" },
  { "name": "The FMV Bundle", "price": 1.9015069131583033, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "The Jackbox Party Quadpack", "price": 2.908963803013826, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "The Last Campfire", "price": 0.22163533737248198, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "The Last Oricru", "price": 9.51510333863275, "region": "🇹🇷", "status": "", "data": "07.03" },
  { "name": "The Last Rolling Hero", "price": 0.1734762570555642, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "The Messenger", "price": 0.5882657552690176, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "The Surge - Augmented Edition", "price": 2.146263910969793, "region": "🇹🇷", "status": " GOLD", "data": "28.02" },
  { "name": "The Surge 2 - Premium Edition", "price": 4.133545310015898, "region": "🇹🇷", "status": " GOLD", "data": "28.02" },
  { "name": "The Talos Principle", "price": 0.20118067422712443, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "The Witcher 3: Wild Hunt – Complete Edition", "price": 10.250116513903992, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Them's Fightin' Herds", "price": 0.8823986329035265, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Them's Fightin' Herds: Deluxe Edition", "price": 2.229299363057325, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "This War of Mine: The Little Ones", "price": 0.15483403241675728, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Thronebreaker: The Witcher Tales", "price": 1.862668945160789, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Deluxe Edition", "price": 3.7274092486147787, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Tom Clancy’s Splinter Cell Double Agent", "price": 0.41220030034695243, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Tony Hawk's™ Pro Skater™ 1 + 2 - Cross-Gen Deluxe Bundle", "price": 4.658484801408523, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Touchdown Pinball", "price": 0.18927036404122, "region": "🇦🇷", "status": "", "data": "25.02" },
  { "name": "Transcripted", "price": 0.10330899487338821, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Trek to Yomi", "price": 0.9559318523121536, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Trials Fusion", "price": 0.2576251877168453, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Tyd wag vir Niemand", "price": 0.1470664388172544, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Unit 4: Couch Attack Bundle", "price": 0.6998601833152089, "region": "🇦🇷", "status": "", "data": "30.12" },
  { "name": "VAMPYR", "price": 1.6560509554140126, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Valkyria Chronicles 4 Complete Edition", "price": 4.659002640981824, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Vambrace: Cold Soul", "price": 0.4647610170369219, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Vermintide - Digital Value Pack", "price": 2.0672155766143647, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "WRC 10 Deluxe Edition Xbox One & Xbox Series X|S", "price": 4.631690514043456, "region": "🇹🇷", "status": " GOLD", "data": "28.02" },
  { "name": "WRC Collection FIA World Rally Championship", "price": 3.29734348298897, "region": "🇦🇷", "status": "", "data": "31.08" },
  { "name": "WWE 2K22 Cross-Gen Digital Bundle", "price": 11.74880763116057, "region": "🇹🇷", "status": " GOLD", "data": "28.02" },
  { "name": "WWE 2K22 Deluxe Edition", "price": 13.81558028616852, "region": "🇹🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Warhammer Age of Sigmar: Storm Ground", "price": 3.000529941706412, "region": "🇹🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Warhammer: Chaosbane Magnus Edition", "price": 0.6664595308373464, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Wasteland 3 Colorado Collection", "price": 1.8631867847340893, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Wasteland 3", "price": 1.5524830407539745, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Watch Dogs®2 - Deluxe Edition", "price": 2.8018018018018016, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "Watch Dogs®: Legion Ultimate Edition", "price": 7.248718347056081, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Way of the Hunter: Elite Edition", "price": 8.540469162653409, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Weedcraft Inc", "price": 1.3942830511107658, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Windbound", "price": 0.8280254777070063, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "XCOM® 2 Digital Deluxe Edition", "price": 1.0183315208948267, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "XCOM® 2", "price": 0.4657966961835223, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "XCOM®: Enemy Within", "price": 0.41323597949355284, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Xenon Valkyrie+", "price": 0.10253223551343793, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Yakuza: Like a Dragon Legendary Hero Edition", "price": 5.280410128942053, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Yakuza: Like a Dragon", "price": 3.5715395370514216, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "You Suck At Parking + Parking Pass Season 2: Inferno", "price": 1.9993785925120398, "region": "🇦🇷", "status": "", "data": "02.03" },
  { "name": "Yu-Gi-Oh! Legacy of the Duelist : Link Evolution", "price": 2.370959194488606, "region": "🇹🇷", "status": "", "data": "01.03" },
  { "name": "Yu-Gi-Oh! Legacy of the Duelist", "price": 0.2576251877168453, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Yum Yum Cookstar", "price": 0.8917197452229298, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Yuoni", "price": 0.6504065040650405, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Zombie Pinball", "price": 0.06343534772927346, "region": "🇦🇷", "status": "", "data": "28.02" }
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
  item.innerHTML = `${a.name}: ${res}&#8381; ${a.region} до:${a.data} ${a.status}`
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
