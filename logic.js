const input = document.querySelector('.input');
const output = document.querySelector('.output-res');
const list = document.querySelector('.list')
const showBtn = document.querySelector('.show')


showBtn.addEventListener('click', () => {
  showBtn.classList.contains('active') ?
    hiddenMenu() : showMenu()
})

let usd = 105;

const arr = [
  { "name": "0 Degrees", "price": "0.10", "region": "A", "data": "8/8/", "status": "" },
  { "name": "2K Ball N’ Brawl Bundle", "price": "4.03", "region": "A", "data": "8/8/", "status": "GOLD" },
  { "name": "9 Monkeys of Shaolin", "price": "0.85", "region": "A", "data": "8/8/", "status": "" },
  { "name": "A Way Out", "price": "0.35", "region": "A", "data": "8/8/", "status": "" },
  { "name": "ARCADE GAME SERIES 3-in-1 Pack", "price": "0.21", "region": "A", "data": "8/8/", "status": "" },
  { "name": "ARCADE GAME SERIES: GALAGA", "price": "0.10", "region": "A", "data": "8/8/", "status": "" },
  { "name": "ARCADE GAME SERIES: Ms. PAC-MAN", "price": "0.10", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Absolver", "price": "0.16", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Action Arcade Wrestling", "price": "0.45", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Ad Infinitum", "price": "15.58", "region": "A", "data": "9/14", "status": "" },
  { "name": "Ad Infinitum - Nightmare Edition Pre-order", "price": "18.75", "region": "A", "data": "9/12", "status": "" },
  { "name": "Aery - Broken Memories", "price": "0.38", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Aery - Dreamscape", "price": "0.25", "region": "A", "data": "8/8/", "status": "" },
  { "name": "After Wave: Downfall", "price": "4.77", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Agatha Christie - Hercule Poirot: The London Case", "price": "10.00", "region": "T", "data": "8/28", "status": "" },
  { "name": "Agents of Mayhem", "price": "0.07", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Agony", "price": "0.11", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Aliens: Dark Descent", "price": "18.57", "region": "J", "data": "8/8/", "status": "GOLD" },
  { "name": "Alone in the Dark", "price": "12.39", "region": "A", "data": "10/2", "status": "" },
  { "name": "Alone in the Dark - Digital Deluxe Edition", "price": "14.30", "region": "A", "data": "10/2", "status": "" },
  { "name": "AlphaLink", "price": "1.79", "region": "T", "data": "8/8/", "status": "" },
  { "name": "Alphadia Genesis 1 & 2", "price": "0.50", "region": "A", "data": "8/8/", "status": "GOLD" },
  { "name": "Alphadia Genesis 2", "price": "0.38", "region": "A", "data": "8/8/", "status": "GOLD" },
  { "name": "Arcade Spirits: The New Challengers", "price": "0.70", "region": "A", "data": "8/8/", "status": "GOLD" },
  { "name": "Archvale", "price": "0.45", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Arise: A simple story", "price": "1.31", "region": "T", "data": "8/8/", "status": "" },
  { "name": "Asdivine Dios", "price": "0.38", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Asdivine Hearts", "price": "0.38", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Asdivine Hearts I & II", "price": "0.50", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Asdivine Hearts II", "price": "0.38", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Ash of Gods Redemption", "price": "0.56", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Aspire - Ina's Tale", "price": "0.26", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Assetto Corsa", "price": "0.37", "region": "A", "data": "8/15", "status": "" },
  { "name": "Asterix & Obelix Slap Them All!", "price": "3.56", "region": "E", "data": "8/8/", "status": "" },
  { "name": "Astro Flame Starfighter", "price": "0.40", "region": "A", "data": "8/15", "status": "" },
  { "name": "Astro Flame Starfighter (Xbox Series X|S)", "price": "0.40", "region": "A", "data": "8/15", "status": "" },
  { "name": "Atrio: The Dark Wild (Game Preview)", "price": "0.72", "region": "A", "data": "8/8/", "status": "GOLD" },
  { "name": "Awarded Platformer Bundle", "price": "0.58", "region": "A", "data": "12/3", "status": "" },
  { "name": "Baby Storm", "price": "0.67", "region": "A", "data": "8/8/", "status": "GOLD" },
  { "name": "Big Crown: Showdown", "price": "0.39", "region": "T", "data": "8/8/", "status": "" },
  { "name": "Big Rumble Boxing: Creed Champions", "price": "5.74", "region": "E", "data": "8/8/", "status": "" },
  { "name": "Bite the Bullet", "price": "0.15", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Blasphemous 2", "price": "11.63", "region": "T", "data": "8/23", "status": "" },
  { "name": "Blaster Master Zero", "price": "0.25", "region": "A", "data": "8/8/", "status": "" },
  { "name": "BlazBlue: Cross Tag Battle Special Edition", "price": "5.91", "region": "T", "data": "8/8/", "status": "" },
  { "name": "Blind Fate: Edo no Yami", "price": "0.51", "region": "A", "data": "8/8/", "status": "GOLD" },
  { "name": "Blitz Breaker", "price": "0.10", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Bloodstained: Curse of the Moon 2", "price": "0.38", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Boggle", "price": "0.13", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Bomber Crew", "price": "0.53", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Borderlands 3: Next Level Edition", "price": "1.70", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Borderlands 3: Ultimate Edition", "price": "4.77", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Borderlands: The Handsome Collection", "price": "2.39", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Brawlout Deluxe Edition", "price": "0.37", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Brawlout Standard Edition", "price": "0.25", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Breakers Collection", "price": "1.56", "region": "T", "data": "8/8/", "status": "" },
  { "name": "Bright Lights of Svetlov", "price": "0.40", "region": "A", "data": "8/11", "status": "" },
  { "name": "Bright Lights of Svetlov (Xbox Series X|S)", "price": "0.40", "region": "A", "data": "8/11", "status": "" },
  { "name": "Bud Spencer & Terence Hill - Slaps And Beans", "price": "0.08", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Butterflies Bundle", "price": "0.24", "region": "A", "data": "8/8/", "status": "" },
  { "name": "CHRONO CROSS: THE RADICAL DREAMERS EDITION", "price": "4.22", "region": "T", "data": "8/8/", "status": "GOLD" },
  { "name": "CRISIS CORE –FINAL FANTASY VII– REUNION", "price": "10.07", "region": "E", "data": "8/8/", "status": "GOLD" },
  { "name": "CRISIS CORE –FINAL FANTASY VII– REUNION DIGITAL DELUXE ED...", "price": "14.03", "region": "E", "data": "8/8/", "status": "GOLD" },
  { "name": "Capcom Arcade 2nd Stadium Bundle", "price": "6.49", "region": "T", "data": "8/8/", "status": "" },
  { "name": "Capcom Arcade Stadium Packs 1, 2, and 3", "price": "4.35", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Capcom Fighting Bundle", "price": "8.87", "region": "T", "data": "8/8/", "status": "" },
  { "name": "Capcom Fighting Collection", "price": "6.49", "region": "T", "data": "8/8/", "status": "" },
  { "name": "Cars 3: Driven to Win", "price": "0.79", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Chants of Sennaar", "price": "15.43", "region": "S", "data": "9/5/", "status": "" },
  { "name": "Child of Light", "price": "0.16", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Child of Light® Ultimate Edition", "price": "0.32", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Chop is Dish", "price": "0.31", "region": "T", "data": "8/8/", "status": "" },
  { "name": "Clan N", "price": "0.30", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Colossal Cave", "price": "1.01", "region": "A", "data": "8/15", "status": "" },
  { "name": "Commandos 2 - HD Remaster", "price": "2.47", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Conan Chop Chop", "price": "1.23", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Construction Simulator - Extended Edition", "price": "9.89", "region": "A", "data": "8/8/", "status": "GOLD" },
  { "name": "Control", "price": "1.89", "region": "T", "data": "8/15", "status": "" },
  { "name": "Crash 'n the Boys Street Challenge", "price": "0.17", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Crash Team Rumble™ - Deluxe Edition", "price": "24.97", "region": "T", "data": "8/8/", "status": "" },
  { "name": "Crash Team Rumble™ - Standard Edition", "price": "19.42", "region": "T", "data": "8/8/", "status": "" },
  { "name": "Creepy Tale: Ingrid Penance", "price": "0.40", "region": "A", "data": "8/16", "status": "" },
  { "name": "Creepy Tale: Ingrid Penance (Xbox Series X|S)", "price": "0.40", "region": "A", "data": "8/16", "status": "" },
  { "name": "Crossroads Inn", "price": "0.61", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Crown Trick", "price": "0.79", "region": "A", "data": "8/8/", "status": "" },
  { "name": "DARKLAND 3", "price": "0.05", "region": "A", "data": "8/8/", "status": "" },
  { "name": "DEAD OR ALIVE 5 Last Round (Full Game)", "price": "0.70", "region": "A", "data": "8/8/", "status": "" },
  { "name": "DEAD OR ALIVE 6 Digital Deluxe Edition", "price": "7.86", "region": "T", "data": "8/8/", "status": "" },
  { "name": "DEATHLOOP Deluxe Edition", "price": "4.86", "region": "A", "data": "8/17", "status": "" },
  { "name": "DOOM", "price": "0.32", "region": "A", "data": "8/17", "status": "" },
  { "name": "DOOM (1993)", "price": "0.07", "region": "A", "data": "8/17", "status": "" },
  { "name": "DOOM 3", "price": "0.21", "region": "A", "data": "8/17", "status": "" },
  { "name": "DOOM 64", "price": "0.06", "region": "A", "data": "8/17", "status": "" },
  { "name": "DOOM Eternal Deluxe Edition", "price": "3.00", "region": "A", "data": "8/17", "status": "" },
  { "name": "DOOM Eternal Standard Edition", "price": "1.77", "region": "A", "data": "8/17", "status": "" },
  { "name": "DOOM Eternal: Year One Pass", "price": "1.75", "region": "A", "data": "8/17", "status": "" },
  { "name": "DOOM Eternal: Year One Pass (PC)", "price": "1.75", "region": "A", "data": "8/17", "status": "" },
  { "name": "DOOM II (Classic)", "price": "0.07", "region": "A", "data": "8/17", "status": "" },
  { "name": "DOOM Slayers Collection", "price": "1.61", "region": "A", "data": "8/17", "status": "" },
  { "name": "DOUBLE DRAGON", "price": "0.17", "region": "A", "data": "8/8/", "status": "" },
  { "name": "DOUBLE DRAGON Ⅱ: The Revenge", "price": "0.17", "region": "A", "data": "8/8/", "status": "" },
  { "name": "DOUBLE DRAGON Ⅲ: The Sacred Stones", "price": "0.17", "region": "A", "data": "8/8/", "status": "" },
  { "name": "DRAGON BALL FIGHTERZ - FighterZ Edition", "price": "1.19", "region": "A", "data": "8/8/", "status": "" },
  { "name": "DRAGON BALL XENOVERSE 2", "price": "0.95", "region": "A", "data": "8/8/", "status": "" },
  { "name": "DREAMERS", "price": "11.64", "region": "E", "data": "9/1/", "status": "" },
  { "name": "DRIFTCE", "price": "4.24", "region": "A", "data": "8/15", "status": "" },
  { "name": "Death Becomes You", "price": "0.37", "region": "A", "data": "8/19", "status": "" },
  { "name": "Death Road to Canada", "price": "0.16", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Deceive Inc.", "price": "0.75", "region": "A", "data": "8/8/", "status": "GOLD" },
  { "name": "Deceive Inc. Black Tie Edition Content", "price": "1.14", "region": "A", "data": "8/8/", "status": "GOLD" },
  { "name": "Deep Diving Adventures", "price": "0.25", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Deep Space Anomaly", "price": "0.17", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Demon's Tier+", "price": "0.15", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Descenders", "price": "0.26", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Deus Ex: Mankind Divided - Digital Deluxe Edition", "price": "0.53", "region": "A", "data": "8/8/", "status": "GOLD" },
  { "name": "Dex", "price": "0.21", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Dishonored 2", "price": "0.99", "region": "A", "data": "8/17", "status": "" },
  { "name": "Dishonored®: Death of the Outsider™ Deluxe Bundle", "price": "1.91", "region": "A", "data": "8/17", "status": "" },
  { "name": "Disjunction", "price": "0.27", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Dou", "price": "0.05", "region": "A", "data": "8/12", "status": "" },
  { "name": "Double Dragon 4", "price": "0.18", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Doug Hates His Job", "price": "0.11", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Drone Gladiator", "price": "0.12", "region": "A", "data": "8/8/", "status": "" },
  { "name": "EA SPORTS FC™ 24 Ultimate Edition Xbox One & Xbox Series X|S", "price": "55.94", "region": "A", "data": "8/23", "status": "" },
  { "name": "EA SPORTS™ FIFA 23 Standard Edition Xbox One", "price": "6.48", "region": "T", "data": "8/22", "status": "" },
  { "name": "EA SPORTS™ FIFA 23 Standard Edition Xbox One", "price": "7.78", "region": "T", "data": "9/21", "status": "" },
  { "name": "EA SPORTS™ FIFA 23 Standard Edition Xbox Series X|S", "price": "7.41", "region": "T", "data": "8/22", "status": "" },
  { "name": "EA SPORTS™ PGA TOUR™", "price": "15.89", "region": "A", "data": "8/15", "status": "" },
  { "name": "EA SPORTS™ PGA TOUR™ Deluxe Edition", "price": "19.78", "region": "A", "data": "8/15", "status": "" },
  { "name": "Enter The Gungeon", "price": "0.30", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Escape Dead Island", "price": "0.14", "region": "A", "data": "12/3", "status": "" },
  { "name": "FAR CRY 4 + FAR CRY PRIMAL BUNDLE", "price": "1.62", "region": "T", "data": "8/8/", "status": "" },
  { "name": "FAR CRY 4 GOLD EDITION", "price": "0.62", "region": "A", "data": "8/8/", "status": "" },
  { "name": "FAR CRY ANTHOLOGY BUNDLE", "price": "6.18", "region": "A", "data": "8/8/", "status": "" },
  { "name": "FLASHOUT 3", "price": "6.99", "region": "A", "data": "8/8/", "status": "" },
  { "name": "FOR HONOR™ Standard Edition", "price": "0.79", "region": "A", "data": "8/8/", "status": "" },
  { "name": "FROGUN", "price": "0.49", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Fall of Porcupine", "price": "3.82", "region": "T", "data": "8/8/", "status": "GOLD" },
  { "name": "Fallout 4", "price": "1.05", "region": "A", "data": "8/17", "status": "" },
  { "name": "Fallout 4 (PC)", "price": "0.93", "region": "A", "data": "8/17", "status": "" },
  { "name": "Fallout 76", "price": "2.47", "region": "A", "data": "8/17", "status": "" },
  { "name": "Family Feud®", "price": "6.42", "region": "N", "data": "8/8/", "status": "GOLD" },
  { "name": "Fantasy Dash", "price": "0.05", "region": "A", "data": "8/20", "status": "" },
  { "name": "Far Cry Classic", "price": "0.10", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Far Cry Insanity Bundle", "price": "2.82", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Far Cry Primal - Apex Edition", "price": "1.50", "region": "T", "data": "8/8/", "status": "" },
  { "name": "Far Cry® 3 Blood Dragon Classic Edition", "price": "2.65", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Far Cry® 5 + Far Cry® New Dawn Deluxe Edition Bundle", "price": "1.85", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Far Cry® 5 Gold Edition + Far Cry ® New Dawn Deluxe Editi...", "price": "2.25", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Far Cry® 6 Deluxe Edition", "price": "7.06", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Far Cry® 6 Game of the Year Edition", "price": "10.56", "region": "T", "data": "8/8/", "status": "" },
  { "name": "Far Cry® 6 Gold Edition", "price": "7.06", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Far Cry® New Dawn Deluxe Edition", "price": "1.27", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Far Cry®5 Gold Edition", "price": "1.75", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Fight'N Rage", "price": "0.45", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Fighter Within", "price": "0.50", "region": "T", "data": "8/8/", "status": "" },
  { "name": "Final Vendetta", "price": "2.98", "region": "T", "data": "8/8/", "status": "" },
  { "name": "For Honor® Complete Edition", "price": "3.53", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Forza Horizon 5 + 4 Premium Upgrade Bundle", "price": "10.07", "region": "E", "data": "8/15", "status": "" },
  { "name": "Forza Horizon 5 Premium Add-Ons Bundle", "price": "7.19", "region": "E", "data": "8/15", "status": "" },
  { "name": "Generation Zero ® - Essential DLC Bundle", "price": "0.57", "region": "A", "data": "8/15", "status": "" },
  { "name": "Generation Zero ® - Exterminator DLC Bundle", "price": "0.89", "region": "A", "data": "8/15", "status": "" },
  { "name": "Ghostrunner", "price": "2.12", "region": "A", "data": "8/15", "status": "" },
  { "name": "Ghosts 'n Goblins Resurrection", "price": "4.64", "region": "T", "data": "8/8/", "status": "" },
  { "name": "Ghostwire: Tokyo Deluxe Edition", "price": "6.41", "region": "A", "data": "8/17", "status": "" },
  { "name": "Gloomhaven Gold Edition", "price": "12.95", "region": "E", "data": "9/18", "status": "" },
  { "name": "Gloomhaven Mercenaries Edition", "price": "10.33", "region": "E", "data": "9/18", "status": "" },
  { "name": "Go All Out", "price": "0.46", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Gods Will Fall", "price": "0.71", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Golf Club: Wasteland", "price": "0.15", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Greak: Memories of Azur", "price": "0.79", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Grim Guardians: Demon Purge", "price": "1.01", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Grin Robot Games Bundle", "price": "0.60", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Guilty Gear -Strive-", "price": "7.20", "region": "T", "data": "8/8/", "status": "" },
  { "name": "Guilty Gear -Strive- + Season Pass 1", "price": "10.81", "region": "T", "data": "8/8/", "status": "" },
  { "name": "Guilty Gear -Strive- Ultimate Edition 2022", "price": "13.46", "region": "T", "data": "8/8/", "status": "" },
  { "name": "Hellbreachers", "price": "0.10", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Heroes of Hammerwatch - Ultimate Edition", "price": "0.35", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Hi-Fi RUSH", "price": "10.33", "region": "A", "data": "8/17", "status": "" },
  { "name": "Homefront®: The Revolution", "price": "0.07", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Horizon Chase Turbo", "price": "0.43", "region": "T", "data": "8/8/", "status": "" },
  { "name": "Hotshot Racing", "price": "0.10", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Huntdown", "price": "0.20", "region": "A", "data": "8/8/", "status": "" },
  { "name": "IN-VERT", "price": "0.15", "region": "A", "data": "8/8/", "status": "" },
  { "name": "INDIE BUNDLE: Shiness and Seasons after Fall", "price": "0.48", "region": "A", "data": "8/8/", "status": "GOLD" },
  { "name": "Injustice™ 2", "price": "0.53", "region": "A", "data": "8/8/", "status": "" },
  { "name": "It Takes Two - Digital Version", "price": "5.91", "region": "T", "data": "8/8/", "status": "" },
  { "name": "JoJo's Bizarre Adventure: All-Star Battle R Ultimate Edition", "price": "14.65", "region": "E", "data": "8/8/", "status": "" },
  { "name": "Josh Journey: Darkness Totems", "price": "0.35", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Joy Ball Adventure", "price": "0.05", "region": "A", "data": "8/15", "status": "" },
  { "name": "Jurassic World Evolution: Dinosaur Collection", "price": "0.25", "region": "A", "data": "8/15", "status": "" },
  { "name": "Jurassic World Evolution: Expansion Collection", "price": "0.81", "region": "A", "data": "8/15", "status": "" },
  { "name": "KLONOA Phantasy Reverie Series", "price": "4.24", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Kaichu: The Kaiju Dating Sim", "price": "0.33", "region": "A", "data": "8/8/", "status": "GOLD" },
  { "name": "KeyWe", "price": "0.63", "region": "A", "data": "8/8/", "status": "" },
  { "name": "King of the Arcade", "price": "0.30", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Kung Fu Fighting", "price": "0.05", "region": "A", "data": "8/15", "status": "" },
  { "name": "Kunio-kun: The World Classics Collection", "price": "19.15", "region": "H", "data": "8/8/", "status": "" },
  { "name": "LEGO® Batman™ 3: Beyond Gotham", "price": "0.48", "region": "T", "data": "8/8/", "status": "" },
  { "name": "LEGO® CITY Undercover", "price": "0.71", "region": "A", "data": "8/8/", "status": "" },
  { "name": "LEGO® DC Heroes & Villains-Bundle", "price": "1.44", "region": "T", "data": "8/8/", "status": "" },
  { "name": "LEGO® DC Super-Villains", "price": "1.01", "region": "A", "data": "8/8/", "status": "" },
  { "name": "LEGO® Marvel Super Heroes 2", "price": "0.85", "region": "A", "data": "8/8/", "status": "" },
  { "name": "LEGO® Marvel's Avengers", "price": "0.97", "region": "A", "data": "8/8/", "status": "" },
  { "name": "LEGO® Star Wars™: The Skywalker Saga", "price": "5.71", "region": "E", "data": "8/8/", "status": "" },
  { "name": "LEGO® The Hobbit™", "price": "0.69", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Last Beat Enhanced", "price": "1.73", "region": "E", "data": "8/8/", "status": "" },
  { "name": "Lawn Mowing Simulator", "price": "1.41", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Legend of Keepers: Career of a Dungeon Manager", "price": "0.70", "region": "A", "data": "8/8/", "status": "GOLD" },
  { "name": "Let's Cook Together", "price": "0.13", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Let's Sing 2023", "price": "8.22", "region": "T", "data": "8/8/", "status": "" },
  { "name": "Let's Sing 2023 Hits Français et Internationaux", "price": "28.69", "region": "S", "data": "8/8/", "status": "" },
  { "name": "Let's Sing 2023 Hits Français et Internationaux Platinum Edition", "price": "65.04", "region": "S", "data": "8/8/", "status": "" },
  { "name": "Let's Sing 2023 mit deutschen Hits", "price": "26.39", "region": "E", "data": "8/8/", "status": "" },
  { "name": "Let's Sing 2023 mit deutschen Hits Platinum Edition", "price": "59.40", "region": "E", "data": "8/8/", "status": "" },
  { "name": "Let's Sing 2023 with Hits from Australia & NZ", "price": "23.41", "region": "N", "data": "8/8/", "status": "" },
  { "name": "Let's Sing ABBA", "price": "3.88", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Lethal League Blaze", "price": "0.65", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Let’s Sing 2023 with Hits from Australia & NZ Platinum Edition", "price": "51.21", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Light & Dark Bundle", "price": "0.79", "region": "A", "data": "11/2", "status": "" },
  { "name": "MINABO - A walk through life", "price": "1.26", "region": "T", "data": "8/8/", "status": "GOLD" },
  { "name": "MXGP3", "price": "0.35", "region": "A", "data": "8/8/", "status": "" },
  { "name": "MY HERO ONE’S JUSTICE", "price": "1.01", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Mad Streets", "price": "0.26", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Madden NFL 19", "price": "29.29", "region": "C", "data": "12/3", "status": "" },
  { "name": "Madden NFL 22 Xbox One", "price": "13.59", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 22 Xbox Series X|S", "price": "15.82", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 23 Xbox One", "price": "18.08", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 23 Xbox Series X|S", "price": "21.19", "region": "A", "data": "12/3", "status": "" },
  { "name": "Madden NFL 24 Deluxe Edition Xbox Series X|S & Xbox One", "price": "55.94", "region": "A", "data": "8/15", "status": "" },
  { "name": "Marvel's Avengers", "price": "1.91", "region": "A", "data": "8/8/", "status": "GOLD" },
  { "name": "Marvel's Midnight Suns Digital+ Edition for Xbox One", "price": "12.71", "region": "A", "data": "8/8/", "status": "GOLD" },
  { "name": "Marvel's Midnight Suns Digital+ Edition for Xbox Series X|S", "price": "12.71", "region": "A", "data": "8/8/", "status": "GOLD" },
  { "name": "Masters of Anima", "price": "0.33", "region": "T", "data": "8/8/", "status": "GOLD" },
  { "name": "Mato Anomalies", "price": "7.39", "region": "T", "data": "8/8/", "status": "" },
  { "name": "Mato Anomalies Digital Deluxe Edition", "price": "8.32", "region": "T", "data": "8/8/", "status": "" },
  { "name": "Mega Man 11", "price": "0.70", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Mega Man 30th Anniversary Bundle", "price": "2.90", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Mega Man Legacy Collection 1 & 2 Combo Pack", "price": "0.79", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Mega Man Legacy Collection 2", "price": "0.57", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Mega Man X Legacy Collection", "price": "0.58", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Mega Man X Legacy Collection 1+2", "price": "1.16", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Mega Man X Legacy Collection 2", "price": "0.58", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Mega Man Zero/ZX Legacy Collection", "price": "1.75", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Mega Man® Legacy Collection", "price": "0.20", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Merek's Market", "price": "0.45", "region": "A", "data": "8/8/", "status": "GOLD" },
  { "name": "Microsoft 365 Family", "price": "0.00", "region": "U", "data": "12/1", "status": "" },
  { "name": "Microsoft 365 Personal", "price": "0.00", "region": "U", "data": "12/1", "status": "" },
  { "name": "Minigolf Adventure", "price": "0.06", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Minoria", "price": "0.60", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Monster Energy Supercross - Special Edition", "price": "1.06", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Monster Energy Supercross - The Official Videogame", "price": "0.71", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Monster Viator", "price": "0.38", "region": "A", "data": "8/8/", "status": "GOLD" },
  { "name": "Mortal Kombat 11", "price": "0.79", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Mortal Kombat 11 Ultimate", "price": "1.91", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Mortal Kombat 11 Ultimate + Injustice 2 Leg. Edition Bundle", "price": "1.94", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Mortal Kombat X", "price": "0.97", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Mortal Kombat XL", "price": "0.71", "region": "A", "data": "8/8/", "status": "" },
  { "name": "MotoGP™22", "price": "2.82", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Mr. DRILLER DrillLand", "price": "0.90", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Mugsters", "price": "0.40", "region": "A", "data": "8/8/", "status": "" },
  { "name": "N++ (NPLUSPLUS)", "price": "0.26", "region": "A", "data": "8/8/", "status": "" },
  { "name": "NAMCO MUSEUM® ARCHIVES Vol 2", "price": "0.88", "region": "A", "data": "8/8/", "status": "" },
  { "name": "NARUTO SHIPPUDEN™: Ultimate Ninja® STORM 3 Full Burst", "price": "0.44", "region": "A", "data": "8/8/", "status": "" },
  { "name": "NARUTO SHIPPUDEN™: Ultimate Ninja® STORM 4 ROAD TO BORUTO", "price": "1.06", "region": "A", "data": "8/8/", "status": "" },
  { "name": "NARUTO TO BORUTO: SHINOBI STRIKER Deluxe Edition", "price": "9.51", "region": "C", "data": "8/8/", "status": "" },
  { "name": "NARUTO™: Ultimate Ninja® STORM", "price": "0.44", "region": "A", "data": "8/8/", "status": "" },
  { "name": "NBA 2K23 Digital Deluxe Edition", "price": "4.77", "region": "A", "data": "8/8/", "status": "GOLD" },
  { "name": "Narita Boy", "price": "0.85", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Need for Speed Rivals", "price": "0.85", "region": "A", "data": "8/15", "status": "" },
  { "name": "Need for Speed™", "price": "1.06", "region": "A", "data": "8/15", "status": "" },
  { "name": "Need for Speed™ Heat", "price": "2.65", "region": "A", "data": "8/15", "status": "" },
  { "name": "Need for Speed™ Heat Deluxe Edition", "price": "3.18", "region": "A", "data": "8/15", "status": "" },
  { "name": "Need for Speed™ Hot Pursuit Remastered", "price": "2.65", "region": "A", "data": "8/15", "status": "" },
  { "name": "Need for Speed™ Unbound", "price": "9.53", "region": "A", "data": "8/15", "status": "" },
  { "name": "Need for Speed™ Unbound Palace Edition", "price": "11.12", "region": "A", "data": "8/15", "status": "" },
  { "name": "Neon Abyss", "price": "0.95", "region": "A", "data": "8/8/", "status": "" },
  { "name": "New Joe & Mac - Caveman Ninja", "price": "0.91", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Ni no Kuni Wrath of the White Witch™ Remastered", "price": "7.19", "region": "E", "data": "8/8/", "status": "" },
  { "name": "Nidhogg 2", "price": "0.21", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Ninja Warrior Epic Quest", "price": "0.12", "region": "A", "data": "5/31", "status": "" },
  { "name": "No Straight Roads", "price": "0.63", "region": "A", "data": "8/8/", "status": "" },
  { "name": "ONE PIECE: PIRATE WARRIORS 4", "price": "1.59", "region": "A", "data": "8/8/", "status": "" },
  { "name": "ONE PIECE: PIRATE WARRIORS 4 Deluxe Edition", "price": "2.22", "region": "A", "data": "8/8/", "status": "" },
  { "name": "ONE PUNCH MAN: A HERO NOBODY KNOWS Deluxe Edition", "price": "2.49", "region": "A", "data": "8/8/", "status": "" },
  { "name": "OddBallers™", "price": "3.88", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Omen of Sorrow", "price": "0.50", "region": "A", "data": "8/8/", "status": "" },
  { "name": "One Button Games 5-in-1", "price": "0.22", "region": "A", "data": "8/10", "status": "" },
  { "name": "Outcast - Second Contact", "price": "0.08", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Overcooked: Gourmet Edition", "price": "0.21", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Overruled!", "price": "0.11", "region": "A", "data": "8/8/", "status": "" },
  { "name": "PAC-MAN 256", "price": "0.21", "region": "A", "data": "8/8/", "status": "" },
  { "name": "PGA TOUR 2K23 Deluxe Edition", "price": "9.71", "region": "A", "data": "8/8/", "status": "GOLD" },
  { "name": "Paper Flight - Beyond Time", "price": "0.40", "region": "A", "data": "8/8/", "status": "GOLD" },
  { "name": "Perfect Traffic Simulator", "price": "0.10", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Phantom Breaker: Omnia", "price": "1.25", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Pile Up! Box by Box", "price": "0.38", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Planet Quiz: Learn & Discover", "price": "0.30", "region": "A", "data": "8/8/", "status": "GOLD" },
  { "name": "Portal Knights", "price": "0.25", "region": "A", "data": "8/15", "status": "" },
  { "name": "Power Rangers: Battle for the Grid", "price": "0.50", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Power Rangers: Battle for the Grid - Digital Collector's Edition", "price": "0.76", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Power Rangers: Battle for the Grid Super Edition", "price": "1.26", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Praetorians - HD Remaster", "price": "2.47", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Prey", "price": "1.24", "region": "A", "data": "8/17", "status": "" },
  { "name": "Pure Chase 80's", "price": "0.57", "region": "T", "data": "8/8/", "status": "" },
  { "name": "Quake", "price": "0.58", "region": "A", "data": "8/17", "status": "" },
  { "name": "RAGE 2: Deluxe Edition", "price": "2.38", "region": "A", "data": "8/17", "status": "" },
  { "name": "Radical Rabbit Stew", "price": "0.20", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Raging Justice", "price": "0.26", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Rally Rock 'N Racing", "price": "0.30", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Rayman Legends", "price": "0.57", "region": "T", "data": "8/8/", "status": "" },
  { "name": "Renegade", "price": "0.17", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Retro Tank Arcade", "price": "0.05", "region": "A", "data": "8/11", "status": "" },
  { "name": "RetroMania Wrestling", "price": "0.76", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Revenant Dogma", "price": "0.38", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Revenant Saga & Revenant Dogma", "price": "0.50", "region": "A", "data": "8/8/", "status": "GOLD" },
  { "name": "Riddled Corpses EX", "price": "0.07", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Rise of the Tomb Raider: 20 Year Celebration", "price": "1.00", "region": "T", "data": "8/8/", "status": "GOLD" },
  { "name": "River City Ransom", "price": "0.17", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Rogue Star Rescue", "price": "2.48", "region": "T", "data": "8/8/", "status": "" },
  { "name": "Rogue Stormers", "price": "0.14", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Rune Lord", "price": "0.44", "region": "T", "data": "8/8/", "status": "" },
  { "name": "SCARLET NEXUS Brain Punk Bundle", "price": "1.77", "region": "A", "data": "8/15", "status": "" },
  { "name": "SCARLET NEXUS Ultimate Upgrade Pack", "price": "2.47", "region": "A", "data": "8/15", "status": "" },
  { "name": "SD GUNDAM BATTLE ALLIANCE Deluxe Edition", "price": "12.21", "region": "E", "data": "8/8/", "status": "" },
  { "name": "SONIC FORCES™ Digital Standard Edition", "price": "2.03", "region": "A", "data": "8/8/", "status": "" },
  { "name": "SOULCALIBUR VI Deluxe Edition", "price": "3.97", "region": "A", "data": "8/8/", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™", "price": "4.52", "region": "A", "data": "12/3", "status": "" },
  { "name": "STAR WARS Jedi: Fallen Order™ Deluxe Edition", "price": "6.04", "region": "A", "data": "1/1/", "status": "" },
  { "name": "STAR WARS™ Episode I Racer", "price": "0.38", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Sail Forth", "price": "0.80", "region": "A", "data": "8/8/", "status": "GOLD" },
  { "name": "Scott Pilgrim vs. The World™: The Game – Complete Edition", "price": "0.84", "region": "T", "data": "8/8/", "status": "" },
  { "name": "Scribblenauts Mega Pack", "price": "0.58", "region": "T", "data": "8/8/", "status": "" },
  { "name": "Shadow of the Tomb Raider Definitive Edition", "price": "2.41", "region": "T", "data": "8/8/", "status": "GOLD" },
  { "name": "Shadowblade Odyssey", "price": "0.10", "region": "A", "data": "8/9/", "status": "" },
  { "name": "Shing!", "price": "0.10", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Sifu", "price": "9.27", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Simulator Pack: Gas Station Simulator and Treasure Hunter Simulator", "price": "1.01", "region": "A", "data": "8/8/", "status": "GOLD" },
  { "name": "Skate 3", "price": "0.18", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Skyrim Anniversary Edition + Fallout 4 G.O.T.Y Bundle", "price": "4.66", "region": "A", "data": "8/17", "status": "" },
  { "name": "Skyrim Anniversary Edition + Fallout 4 G.O.T.Y Bundle", "price": "4.66", "region": "A", "data": "8/17", "status": "" },
  { "name": "Slipstream", "price": "0.42", "region": "T", "data": "8/8/", "status": "" },
  { "name": "Smurfs Kart", "price": "24.10", "region": "N", "data": "8/21", "status": "" },
  { "name": "Sonic Colors: Ultimate - Digital Deluxe", "price": "4.06", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Space Accident", "price": "0.18", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Sparkle Bundle", "price": "0.45", "region": "A", "data": "12/3", "status": "" },
  { "name": "Spectrolite - Speed Life", "price": "0.56", "region": "A", "data": "8/12", "status": "" },
  { "name": "Spitlings", "price": "0.15", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Strange Horticulture", "price": "0.60", "region": "A", "data": "8/13", "status": "" },
  { "name": "Stray", "price": "6.85", "region": "E", "data": "8/10", "status": "" },
  { "name": "Street Fighter 30th Anniversary Collection", "price": "1.72", "region": "T", "data": "8/8/", "status": "" },
  { "name": "Super Arcade Football", "price": "0.40", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Super Arcade Racing", "price": "0.40", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Super Dodge Ball", "price": "0.17", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Super Pixel Kid", "price": "0.05", "region": "A", "data": "8/16", "status": "" },
  { "name": "Super Pixel Racers", "price": "0.13", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Super Slam Dunk Touchdown", "price": "0.23", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Super Woden GP", "price": "0.36", "region": "A", "data": "8/8/", "status": "" },
  { "name": "TEKKEN 7", "price": "1.77", "region": "A", "data": "8/8/", "status": "" },
  { "name": "THE KING OF FIGHTERS XV Deluxe Edition", "price": "6.84", "region": "T", "data": "8/8/", "status": "" },
  { "name": "THE KING OF FIGHTERS XV Standard Edition", "price": "4.90", "region": "T", "data": "8/8/", "status": "" },
  { "name": "Taimumari: Complete Edition", "price": "0.31", "region": "T", "data": "8/8/", "status": "" },
  { "name": "Tennis World Tour 2", "price": "2.12", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Tennis World Tour 2 - Complete Edition Xbox Series X|S", "price": "0.50", "region": "A", "data": "8/8/", "status": "" },
  { "name": "The Awakening of Mummies", "price": "0.16", "region": "A", "data": "8/8/", "status": "" },
  { "name": "The Disney Afternoon Collection", "price": "0.35", "region": "A", "data": "8/8/", "status": "" },
  { "name": "The Dragoness: Command of the Flame", "price": "0.90", "region": "A", "data": "8/10", "status": "" },
  { "name": "The Elder Scrolls Online Deluxe Collection: Necrom", "price": "14.92", "region": "A", "data": "8/17", "status": "" },
  { "name": "The Elder Scrolls V: Skyrim Special Edition", "price": "1.77", "region": "A", "data": "8/17", "status": "" },
  { "name": "The Elder Scrolls® Online", "price": "0.39", "region": "A", "data": "8/17", "status": "" },
  { "name": "The Escapists: Supermax Edition", "price": "0.89", "region": "A", "data": "4/30", "status": "" },
  { "name": "The Evil Within Digital Bundle", "price": "0.48", "region": "A", "data": "8/17", "status": "" },
  { "name": "The Jackbox Party Quadpack", "price": "1.98", "region": "A", "data": "12/3", "status": "" },
  { "name": "The LEGO Movie Videogame", "price": "0.40", "region": "A", "data": "8/8/", "status": "" },
  { "name": "The LEGO® Games Bundle", "price": "2.12", "region": "A", "data": "8/8/", "status": "" },
  { "name": "The LEGO® Movie Videogame-Bundle", "price": "1.44", "region": "T", "data": "8/8/", "status": "" },
  { "name": "The LEGO® NINJAGO® Movie Video Game", "price": "0.79", "region": "A", "data": "8/8/", "status": "" },
  { "name": "The Quarry - Deluxe Edition", "price": "9.32", "region": "A", "data": "8/8/", "status": "GOLD" },
  { "name": "The Red Exile - Survival Horror", "price": "2.60", "region": "I", "data": "8/17", "status": "" },
  { "name": "The Surge 2", "price": "2.21", "region": "A", "data": "8/8/", "status": "GOLD" },
  { "name": "The Surge 2 - Windows 10", "price": "1.15", "region": "A", "data": "8/8/", "status": "" },
  { "name": "The Survivalists", "price": "1.06", "region": "A", "data": "8/8/", "status": "" },
  { "name": "There Is No Light", "price": "4.77", "region": "T", "data": "8/16", "status": "" },
  { "name": "Timberman VS", "price": "0.05", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Titan Chaser", "price": "0.07", "region": "A", "data": "8/8/", "status": "" },
  { "name": "ToeJam and Earl: Back in the Groove!", "price": "0.19", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Tomb Raider: Definitive Edition", "price": "0.79", "region": "T", "data": "8/8/", "status": "GOLD" },
  { "name": "Trackmania® Turbo", "price": "0.28", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Trials Fusion: The Awesome Max Edition", "price": "0.35", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Turok 2: Seeds of Evil", "price": "0.35", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Two Point Campus", "price": "4.28", "region": "E", "data": "8/8/", "status": "" },
  { "name": "UFC® 4", "price": "1.85", "region": "A", "data": "8/8/", "status": "" },
  { "name": "UFC® 4 Deluxe Edition", "price": "2.12", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Ubisoft+", "price": "0.50", "region": "C", "data": "8/9/", "status": "" },
  { "name": "Ultimate Ski Jumping 2020", "price": "0.13", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Unit 4: Couch Attack Bundle", "price": "0.48", "region": "A", "data": "12/3", "status": "" },
  { "name": "Until the Last Plane", "price": "0.30", "region": "A", "data": "8/8/", "status": "GOLD" },
  { "name": "Vagante", "price": "0.74", "region": "T", "data": "8/8/", "status": "" },
  { "name": "Valiant Hearts: The Great War", "price": "0.16", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Valkyria Chronicles 4 DLC Bundle", "price": "0.53", "region": "A", "data": "8/15", "status": "" },
  { "name": "Venba", "price": "0.64", "region": "A", "data": "8/15", "status": "" },
  { "name": "Vengeful Heart", "price": "0.25", "region": "A", "data": "8/8/", "status": "GOLD" },
  { "name": "Vermintide - Digital Value Pack", "price": "1.41", "region": "A", "data": "3/7/", "status": "" },
  { "name": "WRC Collection FIA World Rally Championship", "price": "2.25", "region": "A", "data": "8/31", "status": "" },
  { "name": "WWE 2K23 Cross-Gen Digital Edition", "price": "17.48", "region": "A", "data": "8/8/", "status": "" },
  { "name": "WWE 2K23 for Xbox One", "price": "15.54", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Warhammer Ultimate Pack: Hack and Slash", "price": "11.51", "region": "E", "data": "8/8/", "status": "" },
  { "name": "Warhammer: Chaosbane Slayer Edition Xbox One", "price": "0.41", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Warhammer: Chaosbane Slayer Edition Xbox Series X|S", "price": "0.61", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Wasteland 3 Colorado Collection", "price": "1.59", "region": "A", "data": "8/8/", "status": "" },
  { "name": "We Love Katamari REROLL+ Royal Reverie", "price": "11.57", "region": "A", "data": "8/8/", "status": "" },
  { "name": "What Lies in the Multiverse", "price": "0.23", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Whispike Survivors", "price": "0.14", "region": "A", "data": "8/18", "status": "" },
  { "name": "WildTrax Racing", "price": "0.32", "region": "A", "data": "8/19", "status": "" },
  { "name": "Wizard of Legend", "price": "0.17", "region": "A", "data": "8/8/", "status": "" },
  { "name": "Wolfenstein II: Standard Edition", "price": "0.74", "region": "T", "data": "8/17", "status": "" },
  { "name": "Wolfenstein: Alt History Collection", "price": "1.91", "region": "A", "data": "8/17", "status": "" },
  { "name": "Wolfenstein: Youngblood Deluxe Edition", "price": "1.24", "region": "A", "data": "8/17", "status": "" },
  { "name": "Wolfenstein® II: The New Colossus™", "price": "0.80", "region": "A", "data": "8/17", "status": "" },
  { "name": "Wolfenstein®: The Two-Pack", "price": "0.42", "region": "A", "data": "8/17", "status": "" },
  { "name": "Working Hard Collection", "price": "0.20", "region": "A", "data": "8/12", "status": "" },
  { "name": "Worms Rumble", "price": "0.15", "region": "A", "data": "8/8/", "status": "" },
  { "name": "XCOM® 2", "price": "0.32", "region": "A", "data": "8/8/", "status": "GOLD" },
  { "name": "XCOM® 2 Digital Deluxe Edition", "price": "0.69", "region": "A", "data": "8/8/", "status": "GOLD" },
  { "name": "theHunter: Call of the Wild™ - Essentials DLC Bundle", "price": "0.35", "region": "A", "data": "8/15", "status": "" }
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
    a = 55
  } else if (value > 1 && value <= 5) {
    a = 65
  } else if (value > 5 && value <= 10) {
    a = 80
  } else if (value > 10 && value <= 15) {
    a = 100
  } else if (value > 15 && value <= 20) {
    a = 110
  } else if (value > 20 && value <= 25) {
    a = 150
  } else if (value > 25) {
    a = 170
  }
  return a
}

input.oninput = result


sortArr.map((a) => {
  // const status = 
  const item = document.createElement('li')
  const arrData = a.data.split('/').reverse('').join('/')
  let res;
  let flag;
  if (a.region == 'A') {
    res = resultFromList(a.price)
    flag = "🇦🇷"
  } else if (a.region == 'T') {
    res = resultFromList(a.price)
    flag = "🇹🇷"
  } else {
    res = 'Уточнить стоимость в ЛС'
  }

  item.innerHTML = res == 'Уточнить стоимость в ЛС' ? `${a.name}: ${res} до:${arrData}` : `${a.name}:${res}&#8381; ${flag}  до:${arrData}${a.status}`
  // &#8381; ${ flag } до:${ arrData }${ a.status }
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
