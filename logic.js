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
  { "name": "9 Monkeys of Shaolin + Ash of Gods + Redeemer: Bundle", "price": 2.050677061961428, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "9 Monkeys of Shaolin", "price": 1.2302523594583503, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "A Plague Tale: Innocence - Windows 10", "price": 2.1532622076323347, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Absolver", "price": 0.3067295855560115, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Aeon Must Die!", "price": 3.5222457627118646, "region": "🇹🇷", "status": "", "data": "01.03" },
  { "name": "Aery - Calm Mind", "price": 0.47343044727123507, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Aery - Last Day of Earth", "price": 0.5098481739844071, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Agents of Mayhem - Total Mayhem Bundle", "price": 0.15336479277800574, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Agents of Mayhem", "price": 0.1020722199425523, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Agony", "price": 0.1020722199425523, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Allison's Diary: Rebirth", "price": 0.36417726713171933, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Alphadia Genesis 1 & 2", "price": 0.7283545342634387, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "American Fugitive", "price": 0.29134181370537543, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Ape Out", "price": 0.2744152646696758, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Ara Fell: Enhanced Edition", "price": 0.329298317603611, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Aragami 2", "price": 1.1469019286007385, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Aragami: Shadow Edition", "price": 0.19157775954041856, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Arcade Paradise", "price": 1.092531801395158, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Arietta of Spirits", "price": 0.36417726713171933, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Asdivine Dios", "price": 0.5488305293393516, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Asdivine Hearts I & II", "price": 0.7283545342634387, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Ash of Gods Redemption", "price": 0.8201682396389003, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Assassin's Creed® Odyssey - ULTIMATE EDITION", "price": 5.769132129667624, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Assassin's Creed® Syndicate Gold Edition", "price": 2.780720338983051, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "Assassin's Creed® Valhalla Deluxe Edition", "price": 8.461581862946245, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Assassin's Creed® Valhalla Ragnarök Edition", "price": 11.122881355932204, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "Assassin’s Creed® Rogue Remastered", "price": 1.4032109150594994, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Assassin’s Creed® Valhalla + Immortals Fenyx Rising™ Bundle", "price": 8.333760771440295, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Assassin’s Creed® Valhalla + Watch Dogs®: Legion Bundle", "price": 8.333760771440295, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Awarded Platformer Bundle", "price": 0.8424805088223225, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "BLACKTAIL", "price": 11.917372881355933, "region": "🇹🇷", "status": " GOLD", "data": "28.02" },
  { "name": "BROK the InvestiGator", "price": 1.4731226918342222, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "BROKEN MIND", "price": 0.36417726713171933, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Ballotron", "price": 0.23338120640131307, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Batman: Arkham Collection", "price": 4.071504237288136, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "Batman: Arkham Knight Premium Edition", "price": 1.721398305084746, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "Blazing Beaks", "price": 0.36222814936397213, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Blightbound", "price": 0.7283545342634387, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Bloodstained: Ritual of the Night", "price": 3.313559322033899, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "Boggle", "price": 0.18342224045958144, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Borderlands 3: Next Level Edition", "price": 2.4689679934345508, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Borderlands 3: Ultimate Edition", "price": 6.922958555601149, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Bridge Constructor Bundle", "price": 0.7655416495691424, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Broforce", "price": 0.2744152646696758, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Bug Fables: The Everlasting Sapling", "price": 0.7365613459171111, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Bundle: South Park™ : The Stick of Truth™ + The Fractured...", "price": 5.549258474576272, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "CATAN® - Console Edition Deluxe", "price": 5.422139830508475, "region": "🇹🇷", "status": "", "data": "23.02" },
  { "name": "Call of Duty: Ghosts Digital Hardened Edition", "price": 1.9573245794009029, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Call of Duty®: Advanced Warfare Digital Pro Edition", "price": 1.9573245794009029, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Call of Duty®: Black Ops 4 - Digital Deluxe", "price": 16.991525423728817, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "Call of Duty®: Black Ops 4", "price": 7.547548215018465, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Call of Duty®: Black Ops Cold War - Cross-Gen Bundle", "price": 13.128846942962658, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Call of Duty®: Black Ops Cold War", "price": 7.547548215018465, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Call of Duty®: Black Ops III - Zombies Chronicles Edition", "price": 3.0450861715223634, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Call of Duty®: Infinite Warfare - Digital Legacy Edition", "price": 4.61427985227739, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Call of Duty®: Modern Warfare® - Digital Standard Edition", "price": 7.547548215018465, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Call of Duty®: Modern Warfare® II - Cross-Gen Bundle", "price": 26.890131308986458, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Call of Duty®: Vanguard - Cross-Gen Bundle", "price": 15.86334745762712, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "Call of Duty®: Vanguard - Standard Edition", "price": 13.215042372881356, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "Call of Duty®: WWII - Digital Deluxe", "price": 9.957627118644067, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "Carrion", "price": 0.5826836274107509, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Castle of no Escape (for Windows 10)", "price": 0.179524004924087, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Castle of no Escape 2 (for Windows 10)", "price": 0.2949322938038572, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Chorus", "price": 2.0260566270004103, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Citadel: Forged with Fire", "price": 0.8832581042265079, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Crash™ Team Racing Nitro-Fueled - Nitros Oxide Edition", "price": 5.383924907673369, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "CrushBorgs (for Windows 10)", "price": 0.179524004924087, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Cult of the Lamb", "price": 2.8299788135593222, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "Cult of the Lamb: Cultist Edition", "price": 3.3765889830508478, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "Cuphead & The Delicious Last Course", "price": 2.881360279031596, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Cuphead", "price": 1.0196963479688141, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "CyberHeroes Arena DX", "price": 0.28723840787853916, "region": "🇦🇷", "status": "", "data": "04.03" },
  { "name": "Cyberpunk 2077", "price": 10.255949938448913, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "DAKAR 18", "price": 0.9207016823963889, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "DRAGON BALL FIGHTERZ - FighterZ Edition", "price": 1.7303549446040214, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "DRAGON BALL THE BREAKERS", "price": 6.713453389830509, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "DRAGON BALL XENOVERSE 2", "price": 1.3841300779647108, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "DRAGON BALL: THE BREAKERS Special Edition", "price": 8.228283898305085, "region": "🇹🇷", "status": "", "data": "01.03" },
  { "name": "Dark Burial: Enhanced Edition", "price": 0.28723840787853916, "region": "🇦🇷", "status": "", "data": "03.03" },
  { "name": "Dead Island Definitive Collection", "price": 0.23004718916700861, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Dead Island Definitive Edition", "price": 0.15310832991382847, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Dead Island Retro Revenge", "price": 0.05026672137874436, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Dead Island: Riptide Definitive Edition", "price": 0.15310832991382847, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Deadlight: Director's Cut", "price": 0.0764259335248256, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Death's Door [Win10]", "price": 0.7283545342634387, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Death's Door [Xbox]", "price": 0.7283545342634387, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Demon Slayer -Kimetsu no Yaiba- The Hinokami Chronicles D...", "price": 9.230098481739844, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Detective Di: The Silk Rose Murders", "price": 0.23979277800574475, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Diablo III: Eternal Collection", "price": 4.107521186440678, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "Digimon Survive", "price": 15.534957627118645, "region": "🇹🇷", "status": "", "data": "01.03" },
  { "name": "Disc Room", "price": 0.5488305293393516, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Dolmen", "price": 2.050677061961428, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Dr. Atominus (for Windows 10)", "price": 0.179524004924087, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Dragon Ball Xenoverse + Season Pass", "price": 0.8070886335658596, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Dreamfall Chapters", "price": 0.23004718916700861, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Enter The Gungeon", "price": 0.4390644234714813, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Escape Dead Island", "price": 0.20004103405826834, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Escape Sequence (for Windows 10)", "price": 0.179524004924087, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Exit the Gungeon", "price": 0.36417726713171933, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "FIFA 22 Xbox One", "price": 21.185911016949156, "region": "🇹🇷", "status": "", "data": "30.12" },
  { "name": "FIFA 22 Xbox Series X|S", "price": 23.728283898305087, "region": "🇹🇷", "status": "", "data": "30.12" },
  { "name": "FOCUS INDIES BUNDLE - Curse of the Dead Gods + Shady Part of Me + Aeon Must Die!", "price": 8.05084745762712, "region": "🇹🇷", "status": "", "data": "01.03" },
  { "name": "Fantasy Dash", "price": 0.07693885925318014, "region": "🇦🇷", "status": "", "data": "25.02" },
  { "name": "Far Cry® 3 Blood Dragon Classic Edition", "price": 3.844378334017234, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Far Cry® 3 Classic Edition", "price": 0.7600020517029134, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Far Cry® 5 + Far Cry® New Dawn Deluxe Edition Bundle", "price": 4.486817808781288, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Far Cry® 6 Game of the Year Edition", "price": 16.92485638079606, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Fernz Gate", "price": 0.5488305293393516, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Fluffy Horde + Clumsy Rush", "price": 0.4370127205580632, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "For Honor® Complete Edition", "price": 6.410289290110792, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Gato Roboto", "price": 0.1474661469019286, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Geometric Sniper - Blood in Paris", "price": 0.17644645055395977, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Ghost Sync", "price": 0.658596635207222, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Giraffe and Annika（ジラフとアンニカ）", "price": 0.8801805498563807, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Go! Go! PogoGirl", "price": 0.28723840787853916, "region": "🇦🇷", "status": "", "data": "25.02" },
  { "name": "Gods Will Fall - Valiant Edition", "price": 1.6403364792778006, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Gods Will Fall", "price": 1.0248256052523594, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Gotham Knights: Deluxe", "price": 18.463274517849815, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Grim Guardians: Demon Purge", "price": 1.6572630283135004, "region": "🇦🇷", "status": "", "data": "02.03" },
  { "name": "HOT WHEELS UNLEASHED™ - Game Of The Year Edition - Xbox S...", "price": 4.102379975379565, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "HOT WHEELS UNLEASHED™ - Game Of The Year Edition", "price": 4.102379975379565, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "HOT WHEELS UNLEASHED™ - Xbox Series X|S", "price": 2.5636027903159624, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "HOT WHEELS UNLEASHED™", "price": 2.5636027903159624, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Happi Basudei (for Windows 10)", "price": 0.179524004924087, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Heaven Dust", "price": 0.4370127205580632, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Homefront®: The Revolution 'Freedom Fighter' Bundle", "price": 0.20465736561345915, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Homefront®: The Revolution", "price": 0.1020722199425523, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Horror Bundle : Paratopic + Fatum Betula", "price": 0.5826836274107509, "region": "🇦🇷", "status": "", "data": "02.03" },
  { "name": "Hotline Miami Collection", "price": 0.46035084119819447, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Hyper Shapes", "price": 0.32314320886335657, "region": "🇦🇷", "status": "", "data": "24.02" },
  { "name": "I Hate Running Backwards", "price": 0.1528518670496512, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Injustice™ 2 - Legendary Edition", "price": 1.4610689372178909, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Iron Harvest Complete Edition", "price": 5.81302966101695, "region": "🇹🇷", "status": "", "data": "07.03" },
  { "name": "Jeopardy!", "price": 0.38341198194501436, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Katana Zero XB1", "price": 0.658596635207222, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "King's Bounty II - Lord's Edition", "price": 3.495762711864407, "region": "🇹🇷", "status": "", "data": "07.03" },
  { "name": "King's Bounty II", "price": 3.1779661016949152, "region": "🇹🇷", "status": "", "data": "07.03" },
  { "name": "Kingdom Come: Deliverance - Royal Edition", "price": 1.435166187935987, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Kingdom Come: Deliverance", "price": 1.3079606073040624, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Kona", "price": 0.11463890028723842, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "LEGO® Batman™ 3: Beyond Gotham Deluxe Edition", "price": 0.48009848173984404, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "LEGO® DC Super-Villains Deluxe Edition", "price": 1.1535699630693474, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Let's Sing 2023 Platinum Edition", "price": 29.509533898305087, "region": "🇹🇷", "status": "", "data": "07.03" },
  { "name": "Let's Sing 2023", "price": 13.130296610169493, "region": "🇹🇷", "status": "", "data": "07.03" },
  { "name": "Let's Sing ABBA", "price": 5.639361920393927, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Light & Dark Bundle", "price": 1.150235945835043, "region": "🇦🇷", "status": "", "data": "02.11" },
  { "name": "Little Mage Adventure", "price": 0.07693885925318014, "region": "🇦🇷", "status": "", "data": "26.02" },
  { "name": "Lost Judgment Digital Deluxe Edition", "price": 7.384078785391875, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "MINIT", "price": 0.12694911776774723, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "MONOPOLY PLUS", "price": 0.6524415264669676, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "MXGP 2021 - The Official Motocross Videogame - Xbox Series X|S", "price": 2.5636027903159624, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "MXGP 2021 - The Official Motocross Videogame", "price": 2.5636027903159624, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "MY HERO ONE'S JUSTICE 2 Deluxe Edition", "price": 4.952330508474576, "region": "🇹🇷", "status": "", "data": "01.03" },
  { "name": "Madden NFL 22 Xbox One", "price": 19.74405006155109, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Madden NFL 22 Xbox Series X|S", "price": 22.975482150184654, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Madden NFL 23 Xbox One", "price": 26.257693885925317, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Madden NFL 23 Xbox Series X|S", "price": 30.771440295445217, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Marvel's Midnight Suns Digital+ Edition", "price": 27.69491177677472, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Meg's Monster", "price": 0.987894952810833, "region": "🇦🇷", "status": "", "data": "02.03" },
  { "name": "Metal Wolf Chaos XD", "price": 0.9207016823963889, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Metro 2033 Redux", "price": 0.15310832991382847, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Metro Exodus Gold Edition", "price": 1.3243742306114075, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Metro Exodus", "price": 1.153057037340993, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Metro Redux Bundle", "price": 0.3067295855560115, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Metro Saga Bundle", "price": 0.8812064013130899, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Metro: Last Light Redux", "price": 0.2041444398851046, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Microsoft 365 Family", "price": 0.0, "region": "🇦🇷", "status": "", "data": "01.12" },
  { "name": "Microsoft 365 Family", "price": 0.0, "region": "🇹🇷", "status": "", "data": "01.12" },
  { "name": "Microsoft 365 Personal", "price": 0.0, "region": "🇦🇷", "status": "", "data": "01.12" },
  { "name": "Microsoft 365 Personal", "price": 0.0, "region": "🇹🇷", "status": "", "data": "01.12" },
  { "name": "Minemaze", "price": 0.07693885925318014, "region": "🇦🇷", "status": "", "data": "26.02" },
  { "name": "Monster Energy Supercross - The Official Videogame 5", "price": 2.3073963890028724, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Monster Energy Supercross 5 - Special Edition", "price": 2.8459684037751334, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Monster Truck Championship Xbox One", "price": 0.7360484201887566, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Monster Truck Championship Xbox Series X|S", "price": 0.7360484201887566, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Mordheim: City of the Damned", "price": 0.717070168239639, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "MotoGP™22", "price": 2.5636027903159624, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Mount & Blade II: Bannerlord Digital Deluxe Edition", "price": 3.3045240049240867, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Mount & Blade: Warband", "price": 0.2551805498563808, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "My Friend Pedro Win10", "price": 0.36417726713171933, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "My Friend Pedro", "price": 0.36417726713171933, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "NARUTO SHIPPUDEN™: Ultimate Ninja® STORM 4", "price": 0.6142285597045548, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "NARUTO SHIPPUDEN™: Ultimate Ninja® STORM Trilogy", "price": 1.0245691423881822, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "NBA 2K23 Digital Deluxe Edition", "price": 11.539546573656134, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Necromunda: Underhive Wars - Gold Edition", "price": 6.153057037340992, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "New Tales from the Borderlands: Deluxe Edition", "price": 15.86334745762712, "region": "🇹🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Ninja Warrior Epic Quest", "price": 0.179524004924087, "region": "🇦🇷", "status": "", "data": "31.05" },
  { "name": "No Man's Sky", "price": 2.2030160032827246, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Noel the Mortal Fate", "price": 0.9207016823963889, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Not for Broadcast Deluxe Edition", "price": 2.649774312679524, "region": "🇦🇷", "status": "", "data": "23.03" },
  { "name": "ONE PIECE BURNING BLOOD - Gold Edition", "price": 2.502648305084746, "region": "🇹🇷", "status": "", "data": "01.03" },
  { "name": "ONE PIECE World Seeker Deluxe Edition", "price": 2.701271186440678, "region": "🇹🇷", "status": "", "data": "01.03" },
  { "name": "ONE PIECE: PIRATE WARRIORS 4 Deluxe Edition", "price": 4.308524825605252, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "ONE PUNCH MAN: A HERO NOBODY KNOWS", "price": 2.3755296610169494, "region": "🇹🇷", "status": "", "data": "01.03" },
  { "name": "Observation", "price": 0.46035084119819447, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Of Tanks and Demons III", "price": 0.5190677966101696, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "Olija", "price": 0.4390644234714813, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Othercide", "price": 3.0190677966101696, "region": "🇹🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Outbreak: Epidemic Definitive Collection", "price": 1.4731226918342222, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Outward: Definitive Edition", "price": 2.563346327451785, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Outward: The Adventurer Bundle", "price": 0.7360484201887566, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "PGA TOUR 2K23 Deluxe Edition", "price": 28.20835043085761, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Pathfinder: Kingmaker - Definitive Edition", "price": 1.3672548215018465, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Pikuniku", "price": 0.23979277800574475, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Pizza Tycoon", "price": 4.088983050847458, "region": "🇹🇷", "status": "", "data": "24.02" },
  { "name": "Prizma Puzzle Prime", "price": 0.32314320886335657, "region": "🇦🇷", "status": "", "data": "23.02" },
  { "name": "Pro Gymnast Simulator + Cyber Protocol", "price": 0.38341198194501436, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Pumped BMX Pro", "price": 0.11463890028723842, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "RIDE 4 - Special Edition", "price": 4.102379975379565, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "RIDE 4", "price": 3.076528518670496, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "RISK", "price": 0.2646696758309397, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Rabbids®: Party of Legends", "price": 7.415254237288136, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "Record of Lodoss War-Deedlit in Wonder Labyrinth-", "price": 1.2889823553549447, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Red Faction Guerrilla Re-Mars-tered", "price": 0.23004718916700861, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Relicta", "price": 0.434961017644645, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "RiMS Racing - European Manufacturers Deluxe Edition Xbox One", "price": 5.561440677966102, "region": "🇹🇷", "status": " GOLD", "data": "28.02" },
  { "name": "RiMS Racing - European Manufacturers Deluxe Edition Xbox Series X|S", "price": 5.561440677966102, "region": "🇹🇷", "status": " GOLD", "data": "28.02" },
  { "name": "RiMS Racing - Japanese Manufacturers Deluxe Edition Xbox One", "price": 5.561440677966102, "region": "🇹🇷", "status": " GOLD", "data": "28.02" },
  { "name": "RiMS Racing - Japanese Manufacturers Deluxe Edition Xbox Series X|S", "price": 5.561440677966102, "region": "🇹🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Riders Republic Ultimate Edition", "price": 15.095338983050848, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "Rise of Fox Hero", "price": 0.28723840787853916, "region": "🇦🇷", "status": "", "data": "04.03" },
  { "name": "Road 96", "price": 1.8832068116536724, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Ruiner", "price": 0.29134181370537543, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Ruinverse", "price": 0.5488305293393516, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Rusty Gun", "price": 0.5190677966101696, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "SBK™22", "price": 4.101354123922856, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "SCARLET NEXUS", "price": 3.8468916700861713, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": 8.766413623307344, "region": "🇦🇷", "status": "", "data": "01.01" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": 6.561345917111202, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "SWORD ART ONLINE Alicization Lycoris", "price": 2.563346327451785, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "SWORD ART ONLINE: FATAL BULLET Complete Edition", "price": 2.3834745762711864, "region": "🇹🇷", "status": "", "data": "01.03" },
  { "name": "Saints Row Gold Edition", "price": 17.846737792367666, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Saints Row IV: Re-Elected & Gat out of Hell", "price": 0.38341198194501436, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Saints Row IV: Re-Elected", "price": 0.2041444398851046, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Saints Row Platinum Edition", "price": 19.693270414443987, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Saints Row The Third Remastered", "price": 1.63007796471071, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Saints Row", "price": 9.23035494460402, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Saints Row: Gat out of Hell", "price": 0.19106483381206402, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Saturnalia", "price": 1.092531801395158, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Seek Hearts", "price": 0.5488305293393516, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Sekiro™: Shadows Die Twice - GOTY Edition", "price": 4.613766926549036, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Serious Sam 4", "price": 0.8832581042265079, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Serious Sam Collection", "price": 1.1002256873204759, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Shadow Warrior 2", "price": 0.33211940910956095, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Shadow Warrior", "price": 0.33211940910956095, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Shenmue I & II", "price": 0.4205478046778826, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Shenmue I & II", "price": 0.6401313089864588, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Shining Resonance Refrain", "price": 0.8504308576118178, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Skatemasta Tcheco", "price": 0.14361920393926958, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Slime Rancher", "price": 0.2551805498563808, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Snooker 19", "price": 0.9227533853098071, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Sophstar", "price": 0.7193783340172343, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Soul Hackers 2 - Digital Deluxe Edition", "price": 11.538264259335248, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Space Hulk: Tactics", "price": 1.3325810422650801, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Space Raiders in Space + Clumsy Rush", "price": 0.4795855560114895, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Sparkle Bundle", "price": 0.6524415264669676, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "Stellar Interface", "price": 0.07693885925318014, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Strategic Mind: Fight for Freedom", "price": 1.650338530980714, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Super Pixel Kid", "price": 0.07693885925318014, "region": "🇦🇷", "status": "", "data": "12.03" },
  { "name": "TEKKEN 7", "price": 2.2510593220338984, "region": "🇹🇷", "status": "", "data": "01.03" },
  { "name": "THE KING OF FIGHTERS XV Deluxe Edition", "price": 19.570974576271187, "region": "🇹🇷", "status": "", "data": "07.03" },
  { "name": "THE KING OF FIGHTERS XV Standard Edition", "price": 11.207627118644067, "region": "🇹🇷", "status": "", "data": "07.03" },
  { "name": "Tales from the Borderlands", "price": 5.719809322033898, "region": "🇹🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Tales of Arise", "price": 6.334745762711864, "region": "🇹🇷", "status": "", "data": "01.03" },
  { "name": "Temple Dash: Jungle Adventure", "price": 0.07693885925318014, "region": "🇦🇷", "status": "", "data": "05.03" },
  { "name": "Temple of Horror", "price": 0.5098481739844071, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "The Amazing American Circus", "price": 0.5098481739844071, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "The Beast Inside (Console Version)", "price": 1.4731226918342222, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "The Chant", "price": 10.566737288135593, "region": "🇹🇷", "status": "", "data": "07.03" },
  { "name": "The Crew® 2 Special Edition", "price": 3.076528518670496, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "The Escapists: Supermax Edition", "price": 1.28846942962659, "region": "🇦🇷", "status": "", "data": "30.04" },
  { "name": "The FMV Bundle", "price": 1.8834632745178497, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "The Jackbox Party Quadpack", "price": 2.881360279031596, "region": "🇦🇷", "status": "", "data": "31.12" },
  { "name": "The Last Campfire", "price": 0.21953221173574064, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "The Last Oricru", "price": 9.510063559322035, "region": "🇹🇷", "status": "", "data": "07.03" },
  { "name": "The Last Rolling Hero", "price": 0.17183011899876896, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "The Messenger", "price": 0.5826836274107509, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "The Surge - Augmented Edition", "price": 2.145127118644068, "region": "🇹🇷", "status": " GOLD", "data": "28.02" },
  { "name": "The Surge 2 - Premium Edition", "price": 4.13135593220339, "region": "🇹🇷", "status": " GOLD", "data": "28.02" },
  { "name": "The Talos Principle", "price": 0.19927164546573656, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "The Witcher 3: Wild Hunt – Complete Edition", "price": 10.152851867049652, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Them's Fightin' Herds", "price": 0.8740254411161263, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Them's Fightin' Herds: Deluxe Edition", "price": 2.20814526056627, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "This War of Mine: The Little Ones", "price": 0.15336479277800574, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Thronebreaker: The Witcher Tales", "price": 1.8449938448912595, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Tom Clancy's Ghost Recon® Breakpoint Deluxe Edition", "price": 3.6920393926959374, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Tom Clancy’s Splinter Cell Double Agent", "price": 0.4082888797702092, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Tony Hawk's™ Pro Skater™ 1 + 2 - Cross-Gen Deluxe Bundle", "price": 4.61427985227739, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Touchdown Pinball", "price": 0.18747435371358226, "region": "🇦🇷", "status": "", "data": "25.02" },
  { "name": "Transcripted", "price": 0.10232868280672958, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Trek to Yomi", "price": 0.9468608945424701, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Trials Fusion", "price": 0.2551805498563808, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Tyd wag vir Niemand", "price": 0.14567090685268771, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Unit 4: Couch Attack Bundle", "price": 0.6932191218711531, "region": "🇦🇷", "status": "", "data": "30.12" },
  { "name": "VAMPYR", "price": 1.6403364792778006, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Valkyria Chronicles 4 Complete Edition", "price": 4.614792778005745, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Vambrace: Cold Soul", "price": 0.46035084119819447, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Vermintide - Digital Value Pack", "price": 2.0475995075913005, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "WRC 10 Deluxe Edition Xbox One & Xbox Series X|S", "price": 4.629237288135593, "region": "🇹🇷", "status": " GOLD", "data": "28.02" },
  { "name": "WRC Collection FIA World Rally Championship", "price": 3.2660545752974968, "region": "🇦🇷", "status": "", "data": "31.08" },
  { "name": "WWE 2K22 Cross-Gen Digital Bundle", "price": 9.785487288135593, "region": "🇹🇷", "status": " GOLD", "data": "28.02" },
  { "name": "WWE 2K22 Deluxe Edition", "price": 13.808262711864407, "region": "🇹🇷", "status": " GOLD", "data": "28.02" },
  { "name": "WWE 2K22 for Xbox One", "price": 7.692603610997128, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "WWE 2K22 for Xbox Series X|S", "price": 8.974917931883462, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "WWE 2K22 nWo 4-Life Edition", "price": 18.335275423728817, "region": "🇹🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Warhammer Age of Sigmar: Storm Ground", "price": 2.9989406779661016, "region": "🇹🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Warhammer: Chaosbane Magnus Edition", "price": 0.6601354123922855, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Wasteland 3 Colorado Collection", "price": 1.8455067706196142, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Wasteland 3", "price": 1.5377513336068938, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Watch Dogs®2 - Deluxe Edition", "price": 2.8003177966101696, "region": "🇹🇷", "status": "", "data": "28.02" },
  { "name": "Watch Dogs®: Legion Ultimate Edition", "price": 7.17993434550677, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Way of the Hunter: Elite Edition", "price": 8.459427574887156, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Webgeon Speedrun Edition", "price": 0.28723840787853916, "region": "🇦🇷", "status": "", "data": "09.03" },
  { "name": "Weedcraft Inc", "price": 1.3810525235945834, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Windbound", "price": 0.8201682396389003, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "XCOM® 2 Digital Deluxe Edition", "price": 1.0086684448091916, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "XCOM® 2", "price": 0.46137669265490355, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "XCOM®: Enemy Within", "price": 0.4093147312269183, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Xenon Valkyrie+", "price": 0.10155929421419778, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "Yakuza: Like a Dragon Legendary Hero Edition", "price": 5.230303652031186, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Yakuza: Like a Dragon", "price": 3.537648748461223, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "You Suck At Parking + Parking Pass Season 2: Inferno", "price": 1.980406237176857, "region": "🇦🇷", "status": "", "data": "02.03" },
  { "name": "Yu-Gi-Oh! Legacy of the Duelist : Link Evolution", "price": 2.3697033898305087, "region": "🇹🇷", "status": "", "data": "01.03" },
  { "name": "Yu-Gi-Oh! Legacy of the Duelist", "price": 0.2551805498563808, "region": "🇦🇷", "status": "", "data": "01.03" },
  { "name": "Yum Yum Cookstar", "price": 0.8832581042265079, "region": "🇦🇷", "status": "", "data": "07.03" },
  { "name": "Yuoni", "price": 0.644234714813295, "region": "🇦🇷", "status": " GOLD", "data": "28.02" },
  { "name": "Zombie Pinball", "price": 0.06283340172343045, "region": "🇦🇷", "status": "", "data": "28.02" },
  { "name": "sCATch: The Painter Cat", "price": 0.28723840787853916, "region": "🇦🇷", "status": "", "data": "08.03" }
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
