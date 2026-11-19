// ...this sucks! put them into .json files later

// Types
var CATALOG_TYPE_PRETTY = 0
var CATALOG_TYPE_TABLE = 1

var NA = "N/A"

var full_catalog = [

    // PROJECTS

    {
        "title": "Projects",
        "description": "Projects that I have worked/currently working on.",
        "type": CATALOG_TYPE_TABLE,
        "items": [
            {
                "title": "Super Mario 64 in Baldi's Basics",
                "list_description": "Baldi's Basics but looking a tad... 64 bit.",
                "list_href": "https://gamebanana.com/mods/676187",
                // -- TODO --
                "description": "TODO",
                "buttons": [
                    {
                        "text": "View in Gamebanana!",
                        "href": "https://gamebanana.com/mods/676187"
                    }
                ]
            },
            {
                "title": "Wii-IPL",
                "list_description": "Decompilation of the Wii Menu version 4.3!",
                "list_href": "https://github.com/koopthekoopa/wii-ipl",
                // -- TODO --
                "description": "TODO",
                "buttons": [
                    {
                        "text": "View in GitHub!",
                        "href": "https://github.com/koopthekoopa/wii-ipl"
                    }
                ]
            },
            {
                "title": "RFL",
                "list_description": "Decompilation of the Mii Library for Nintendo Wii!",
                "list_href": "https://github.com/koopthekoopa/RFL",
                // -- TODO --
                "description": "TODO",
                "buttons": [
                    {
                        "text": "View in GitHub!",
                        "href": "https://github.com/koopthekoopa/RFL"
                    }
                ]
            },
            {
                "title": "SONIC Creepypasta Remake",
                "list_description": "A remake of a creepypasta by Chinelin",
                "list_href": "https://gamejolt.com/games/sonicremake2021creepypasta/663668",
                // -- TODO --
                "description": "TODO",
                "buttons": [
                    {
                        "text": "Play the game!",
                        "href": "https://gamejolt.com/games/sonicremake2021creepypasta/663668"
                    }
                ]
            },
            {
                "title": "Sonic.exe's Dank Hideout",
                "list_description": "BOI TS SO LE DANK (why did I make this)",
                "list_href": "https://gamejolt.com/games/sonicexeisnotgodbutacooldude/658333",
                // -- TODO --
                "description": "TODO",
                "buttons": [
                    {
                        "text": "Play the game!",
                        "href": "https://gamejolt.com/games/sonicexeisnotgodbutacooldude/658333"
                    }
                ]
            },
            {
                "title": "Sally.exe's Dank Date",
                "list_description": "Stop Sonic.exe's LE DANK Date- (why did I make this x2)",
                "list_href": "https://gamejolt.com/games/danksallyexewantslove/776240",
                // -- TODO --
                "description": "TODO",
                "buttons": [
                    {
                        "text": "Play the game!",
                        "href": "https://gamejolt.com/games/danksallyexewantslove/776240"
                    }
                ]
            }
        ]
    },

    // COLLEGE_PROJECTS

    {
        "title": "College Projects",
        "description": "I have created little projects for my college assignments.\n"
                     + "Most of them are low effort and are honestly not worth sharing. However, there are some actually good ones which I think are worth sharing here.",
        "type": CATALOG_TYPE_TABLE,
        "items": [
            {
                "title": "Colin in The Perplexing World",
                "list_description": "Colin and toby are trapped and they both must escape!",
                "description": "Colin was wondering with Toby until they fell into the pit, so they must escape!\n"
                             + "\n"
                             + "My first assignment, it's a great one. The code is not the best but it works (99% of the time).\n"
                             + "Colin is a character that was going to be my new \"original character\". But eventually I lost interest on using him. The last time I used him was for another college assignment which is a remake of this game.\n"
                             + "\n"
                             + "Created with Visual Studio 2022, with C#. Source code is not licensed.",
                "buttons": [
                    {
                        "text": "Download the game + Source code!",
                        "href": "colin_perplexing_world.zip"
                    }
                ]
            },
            {
                "title": "Colin - Underground Madness",
                "list_description": "Colin is trapped again and must escape... again!",
                "description": "Colin was wondering around until he randomly fell into the pit, so he must escape! Same plot as before but no Toby\n"
                             + "\n"
                             + "So this one was on a bit of a time crunch, and some parts were not polished yet. Featuring Colin... again!\n"
                             + "\n"
                             + "Inspired by (...or ripped off) the Wario Land series, created with Unity.",
                "buttons": [
                    {
                        "text": "Play the game online!",
                        "href": "https://play.unity.com/en/games/8aa49d0c-1269-444c-bf8f-0348c4029f8b/colin2drelease"
                    },
                    {
                        "text": "Source code on Github",
                        "href": "https://github.com/eddiekoopa8/Colin2D",
                    }
                ]
            },
            {
                "title": "Mini Fastplay!",
                "list_description": "Colin is trapped again and must escape... again!",
                "description": "Probably my best one yet. The idea is not original (it is based on WarioWare) but it does kinda feel like an actual game.\n"
                             + "\n"
                             + "This was born out of three ideas I would create for my final assessment in college.\n"
                             + "* First was this idea,\n"
                             + "* The second was a Tomodachi Life like game\n * The third was basically some remake of one of my previous assignments (basically was going to have more.\n"
                             + "\n"
                             + "I ultimately ended up with the quicker and original idea.",
                "buttons": [
                    {
                        "text": "Play the game online!",
                        "href": "https://play.unity.com/en/games/c416168a-ea31-49eb-a9dd-373434cc01d0/mini-fast-play-fmp-demo",
                    },
                    {
                        "text": "Source code on Github",
                        "href": "https://github.com/eddiekoopa8/MinigameCollection",
                    }
                ]
            }
        ]
    },

    // SM64_RESOURCES

    {
        "title": "SM64 Resources",
        "description": "These are SM64 assets I have created for Project64 and SM64 Saturn.",
        "type": CATALOG_TYPE_TABLE,
        "table_names": [ ["title", "Name"], ["yes_emu", "Project64 compatible"], ["list_description", "Description"] ],
        "items": [
            {
                "title": "KoopTheKoopa",
                "list_description": "It's me!!",
                "description": "The one and only! Me! I distanced away from my old Mario recolour and decided want to actually be a Koopa.\n\nCredit to Bugga for helping me with my model!",
                "yes_emu": "Yes",
                "buttons": [
                    {
                        "text": "Download for SM64 Saturn/Pluto",
                        "href": "sm64_koopthekoopa_port.zip"
                    },
                    {
                        "text": "Download for emulator",
                        "href": "sm64_koopthekoopa_rom.zip"
                    }
                ]
            },
            {
                "title": "Elephant Mario",
                "list_description": "Elephant Mario from Super Mario Wonder",
                "description": "I made this as soon as the Nintendo Direct ended. Took me a few hours, and I tries to make it somewhat like it was an actual model created back then. I think I did pretty good at it.",
                "yes_emu": "Yes",
                "buttons": [
                    {
                        "text": "Download for SM64 Saturn/Pluto",
                        "href": "sm64_elephant_mario_port.zip"
                    },
                    {
                        "text": "Download for emulator",
                        "href": "sm64_elephant_mario_rom.zip"
                    }
                ]
            },
            {
                "title": "Troll Mario",
                "list_description": "doing a lil' :trolling:",
                "description": "My first ever publicly available model. I lost all except for a Saturn only copy of it sadly.",
                "yes_emu": "No",
                "buttons": [
                    {
                        "text": "Download for SM64 Saturn (only)",
                        "href": "sm64_troll.zip"
                    }
                ]
            }
        ]
    },

    // MY_FILM_CAVERN

    {
        "title": "My Film Cavern",
        "description": "Yes, I am also a film collector (what a surprise!)\n" +
                        "\n" +
                        "I currently have [COUNT] films in my collection.",
        "type": CATALOG_TYPE_TABLE,
        "table_names": [ ["title", "Name"], ["fmt", "Format"], ["year", "Print Year"], ["ft", "Length"], ["list_description", "Description"] ],
        "list_font": "Courier New",
        "no_href": true,
        "alphabetical": true,
        "items": [
            // CHARLIE CHAPLIN
            {   "title": "EXCHANGE IS NO ROBBERY", "fmt": "9.5mm (Pathéscope)", "year": 1926, "ft": "30 ft",
                "list_description": "Charlie Chaplin short.\n" +
                                    "Original Film: GETTING ACQUAINTED (1914)" },
            {   "title": "CHARLOT ET LE MARI JALOUX", "fmt": "9.5mm (Pathé-Baby)", "year": 1923, "ft": "30 ft",
                "list_description": "Charlie Chaplin.\n" +
                                    "Original Film: RECREATION (1914)" },
            // FELIX THE CAT
            {   "title": "FELIX LE CHAT VIT UN CONTE FANTASTIQUE", "fmt": "9.5mm (Pathé-Baby)", "year": 1925, "ft": "30 ft",
                "list_description": "Felix the Cat short.\n" +
                                    "Original Film: FELIX IN LOVE (1922)" },
            {   "title": "FELIX LE CHAT SE VENGE", "fmt": "9.5mm (Pathé-Baby)", "year": 1925, "ft": "30 ft",
                "list_description": "Felix the Cat short.\n" +
                                    "Original Film: FELIX FIFTY-FIFTY (1922)" },
            {   "title": "THE ADVENTURES OF FELIX THE CAT", "fmt": "Super 8mm\n(Mountain Films)", "year": 1970+"?", "ft": "300 ft",
                "list_description": "Compilation of three Felix the Cat shorts: \n" +
                                    "FELIX REVOLTS (1923)\n" +
                                    "FELIX COMES BACK (1922)\n" +
                                    "FELIX WINS OUT (1923)" },
            {   "title": "FELIX LE CHAT ET LA SOURIS", "fmt": "9.5mm (Pathé-Baby)", "year": 1924, "ft": "30 ft",
                "list_description": "Felix the Cat short.\n" +
                                    "Original Film: FELIX FIFTY-FIFTY (1922)" },
            {   "title": "FELIX LE CHAT CONNAIT LE REMORDS", "fmt": "9.5mm (Pathé-Baby)", "year": 1927, "ft": "~20 ft",
                "list_description": "Felix the Cat short.\n" +
                                    "Part 1 only.\n" +
                                    "Original Film: FELIX CALMS HIS CONSCIENCE (1923)" },
            {   "title": "FELIX LE CHAT FUMISTE EN TOUS GENRES", "fmt": "9.5mm (Pathé-Baby)", "year": 1926, "ft": "30 ft",
                "list_description": "Felix the Cat short.\n" +
                                    "Original Film: FELIX THE GOAT-GETTER (1923)" },
            {   "title": "FELIX LE CHAT N'EST PAS SÉRIEUX", "fmt": "9.5mm (Pathé-Baby)", "year": 1934, "ft": "60 ft",
                "list_description": "Felix the Cat short.\n" +
                                    "Original Film: FELIX THE GOAT-GETTER (1923)" },
            {   "title": "FELIX LE CHAT, LA BELLE ET LA BETE", "fmt": "9.5mm (Pathé-Baby)", "year": 1925, "ft": "60 ft",
                "list_description": "Felix the Cat short.\n" +
                                    "Part 1 - 2 (30 ft each)\n" +
                "Original Film: FELIX LOSES OUT (1924)" },
            {   "title": "FELIX FINDS A GOLF BALL", "fmt": "16mm (Kodaplay)", "year": 1939, "ft": "25 ft",
                "list_description": "Felix the Cat short.\n" +
                                    "Original Film: FELIX ALL BALLED UP (1925)" },
            {   "title": "FELIX BRINGS HOME THE BACON", "fmt": "8mm (Cine-Kodagraph)", "year": 1936, "ft": "50 ft",
                "list_description": "Felix the Cat short." },
            {   "title": "FELIX FOLLOWS THE SWALLOW", "fmt": "8mm (Cine-Kodagraph)", "year": 1934, "ft": "50 ft",
                "list_description": "Felix the Cat short." },
            {   "title": "FELIX HYPS' THE HIPPO", "fmt": "8mm (Cine-Kodagraph)", "year": 1936, "ft": "50 ft",
                "list_description": "Felix the Cat short." },
            {   "title": "FELIX THE HYPNOTIST", "fmt": "8mm (Collector's Club)", "year": 1975, "ft": "150 ft",
                "list_description": "Felix the Cat short.\n" +
                                    "Original Film: FELIX HYPS' THE HIPPO (1924)" },
            {   "title": "FELIX THE CAT DINES AND PINES", "fmt": "8mm (Niles Films)", "year": NA, "ft": "200 ft",
                "list_description": "Felix the Cat short." },
            {   "title": "FELIX AND HALLOWE'EN NIGHT", "fmt": "9.5mm (Pathéscope)", "year": 1956, "ft": "200 ft",
                "list_description": "Felix the Cat short.\n" +
                                    "Davil brill reissue of: SWITCHES WITCHES (1927)" },
            {   "title": "FELIX PAY DAY", "fmt": "9.5mm (Pathéscope)", "year": 1956, "ft": "200 ft",
                "list_description": "Felix the Cat short.\n" +
                                    "Davil brill reissue of: WHYS AND OTHER WHYS (1927)" },
            {   "title": "A MAGIC CARPET NOW BRINGS FELIX TO ARABIA", "fmt": "9.5mm (Pathéscope)", "year": 1956, "ft": "200 ft",
                "list_description": "Felix the Cat short.\n" +
                                    "Davil brill reissue of: ARABIANTICS (1928)" },
            {   "title": "FELIX LOOKS INTO THE FUTURE", "fmt": "Super 8mm (Arrow Films)", "year": 1964+"?", "ft": "200 ft",
                "list_description": "Felix the Cat short.\n" +
                                    "Davil brill reissue of: FUTURITZY (1927)" },
            {   "title": "FELIX CHAMPION INTERPLANETAIRE", "fmt": "8mm (Film Office)", "year": 1963, "ft": "50 ft",
                "list_description": "Felix the Cat short.\n" +
                                    "Original Film: ASTRONOMEOWS (1928)" },
            {   "title": "FELIX GOES TO CHINA", "fmt": "9.5mm (Pathéscope)", "year": 1956, "ft": "200 ft",
                "list_description": "Felix the Cat short.\n" +
                                    "Davil brill reissue of: FALSE VASES (1929)" },
            {   "title": "LE PICNIC DE FELIX", "fmt": "Super 8mm (Film Office)", "year": NA, "ft": "200 ft",
                "list_description": "Felix the Cat short.\n" +
                                    "Original Film: APRIL MAZE (1930)" },
            {   "title": "FELIX SAYS GRACE", "fmt": "9.5mm (Pathéscope)", "year": 1957, "ft": "60 ft",
                "list_description": "Felix the Cat short.\n" +
                                    "Original Film: APRIL MAZE (1930)" },
            // DISNEY
            {   "title": "AT THE CARNIVAL", "fmt": "9.5mm (Pathéscope)", "year": 1935, "ft": "30 ft",
                "list_description": "Mickey Mouse short.\n" +
                                    "Original Film: KARNIVAL KID (1929)" },
            {   "title": "MICKEY SELLS HOT DOGS", "fmt": "9.5mm (Pathéscope)", "year": 1935, "ft": "~15 ft",
                "list_description": "Mickey Mouse short.\n" +
                                    "Original Film: KARNIVAL KID (1929)" },
            {   "title": "MICKEY GOES TO WAR", "fmt": "16mm (Ensignareel)", "year": 1935, "ft": "~50 ft",
                "list_description": "Mickey Mouse short.\n" +
                                    "Original Film: BARNYARD BATTLE (1929)" },
            {   "title": "BIG BOY ARRIVES", "fmt": "9.5mm (Pathéscope)", "year": 1935, "ft": "~20 ft",
                "list_description": "Mickey Mouse short.\n" +
                                    "Original Film: THE OPRY HOUSE (1929)" },
            {   "title": "CAT'S ON HOLIDAY", "fmt": "9.5mm (Pathéscope)", "year": 1936, "ft": "60 ft",
                "list_description": "Mickey Mouse short.\n" +
                                    "Original Film: WHEN THE CAT'S AWAY (1929)" },
            {   "title": "MINNIE'S FREE RIDE", "fmt": "9.5mm (Pathéscope)", "year": 1936, "ft": "60 ft",
                "list_description": "Silly Symphony short.\n" +
                                    "Original Film: MICKEY'S CHOO CHOO (1929)" },
            {   "title": "AH! SWEET SUMMERTIME", "fmt": "9.5mm (Pathéscope)", "year": 1936, "ft": "~5 ft",
                "list_description": "Mickey Mouse short.\n" +
                                    "Original Film: SUMMERTIME (1930)" },
            {   "title": "PLUTO PLAYS POSSUM", "fmt": "9.5mm (Pathéscope)", "year": 1939, "ft": "60 ft",
                "list_description": "Mickey Mouse short.\n" +
                                    "Original Film: THE MOOSE HUNT (1931)" },
            {   "title": "MICKEY'S AEROPLANE", "fmt": "9.5mm (Pathéscope)", "year": NA, "ft": "60 ft",
                "list_description": "Mickey Mouse short.\n" +
                                    "Original Film: THE MAIL PILOT (1933)" },
            {   "title": "LOVESLICK PLUTO", "fmt": "9.5mm (Pathéscope)", "year": NA, "ft": "60 ft",
                "list_description": "Mickey Mouse short.\n" +
                                    "Original Film: PUPPY LOVE (1933)" },
            {   "title": "DONALD DUCK", "fmt": "9.5mm (Pathéscope)", "year": NA, "ft": "60 ft",
                "list_description": "Mickey Mouse short.\n" +
                                    "Original Film: ORPHAN'S BENEFIT (1933)" },
            {   "title": "BUMPS AHEAD", "fmt": "9.5mm (Pathéscope)", "year": NA, "ft": "30 ft",
                "list_description": "Mickey Mouse short.\n" +
                                    "Original Film: CAMPING OUT (1934)" },
            {   "title": "ONCE BITTEN", "fmt": "9.5mm (Pathéscope)", "year": NA, "ft": "30 ft",
                "list_description": "Mickey Mouse short.\n" +
                                    "Original Film: CAMPING OUT (1934)" },
            {   "title": "TIMBER", "fmt": "8mm (G.B. Film Library;\nOn Eastmancolor stock)", "year": 1954, "ft": "200 ft",
                "list_description": "Donald Duck short." },
            {   "title": "MICKEY DOWN UNDER", "fmt": "8mm (G.B. Film Library;\nOn Kodachrome stock)", "year": 1959, "ft": "200 ft",
                "list_description": "Mickey Mouse short." },
            // OUT OF THE INKWELL
            {   "title": "SURPRISE", "fmt": "16mm (Kodascope Library)", "year": 1927, "ft": "~180 ft",
                "list_description": "Out of the Inkwell short." },
            {   "title": "KOKO GETS WET", "fmt": "16mm (Kodaplay)", "year": 1939, "ft": "25 ft",
                "list_description": "Out of the Inkwell short.\n" +
                                    "Original Film: MOTHER GOOSE LAND (1923)" },
            {   "title": "KOKO MEETS JACK AND JILL", "fmt": "16mm (Kodaplay)", "year": 1939, "ft": "25 ft",
                "list_description": "Out of the Inkwell short.\n" +
                                    "Original Film: MOTHER GOOSE LAND (1923)" },
            {   "title": "THE CLIFF HANGER", "fmt": "16mm (Eastmancolor stock)", "year": 1966, "ft": "200 ft",
                "list_description": "Out of the Inkwell (TV Series) short." },
            // BETTY BOOP/TALKARTOONS
            {   "title": "BETTY BOOP'S HALLOWE'EN PARTY", "fmt": "9.5mm (Pathéscope)", "year": 1938, "ft": "300 ft",
                "list_description": "Betty Boop cartoon." },
            // POPEYE
            {   "title": "NOISE ANNOYS POPEYE", "fmt": "9.5mm (Pathéscope)", "year": 1937, "ft": "60 ft",
                "list_description": "Popeye the Sailor short.\n" +
                                    "Original Film: SOCK-A-BYE BABY (1934)" },
            // AESOP'S FILM FABLES
            {   "title": "PLOW BOY'S REVENGE", "fmt": "8mm (Snappy Cartoons)", "year": 1938, "ft": "150",
                "list_description": "Aesop's Film Fables short." },
            {   "title": "RIVER OF DOUBT", "fmt": "16mm (Kodascope Library)", "year": 1948, "ft": "~130 ft",
                "list_description": "Aesop's Film Fables short." },
            // KRAZY KAT
            {   "title": "KITTY KAT IN THE WAR", "fmt": "8mm (Coast Films)", "year": NA, "ft": "50 ft",
                "list_description": "Krazy Kat short.\n" +
                                    "Original Film: MOUSE TRAPPED (1926)" },
            // MISC LIVE ACTION
            {   "title": "KODASCOPE LIBRARY PROMO", "fmt": "16mm (Kodascope)", "year": NA, "ft": "25 ft",
                "list_description": "Compilation of these shorts: \n" +
                                    "THE EARLY BIRD AND THE WORM (1928)\n" +
                                    "ALGIERS ("+NA+")\n" +
                                    "FELIX IN HOLLYWOOD (1923)\n" +
                                    "EASY STREET (1917)\n" +
                                    "WILD PUPPIES (1927)\n" +
                                    "RIN TIN TIN \"THE NIGHT CRY\" (1926)\n" +
                                    "THE MOOSE COUNTRY (1926)\n" +
                                    "KEN MANYARD \"THE RED RAIDERS\" (1927)\n" +
                                    "WE'RE IN THE NAVY NOW (1926)" },
            {   "title": "THE AMERICAN", "fmt": "9.5mm (Pathéscope)", "year": 1926, "ft": "180 ft",
                "list_description": "Douglas Fairbankst short.\n" +
                                    "Part 1 - 3 (60 ft each)\n" +
                "Original Film: THE AMERICANO (1916)" },
            {   "title": "FLICKERING FLAMES", "fmt": "9.5mm (Pathéscope)", "year": 1928, "ft": "60 ft",
                "list_description": "Part 1 - 2 (30 ft each)\n" +
                "Original Film: LA FLAMBEE DES REVES (1924)" },
            {   "title": "CHIMP CHARMING", "fmt": "9.5mm (Pathéscope)", "year": 1950, "ft": "30 ft",
                "list_description": "Original Film: THE NEW ADVENTURES OF TARZAN (1935)" },
            {   "title": "CHIMP CHARMING", "fmt": "9.5mm (Pathéscope)", "year": 1950, "ft": "30 ft",
                "list_description": "Original Film: THE NEW ADVENTURES OF TARZAN (1935)" },
            {   "title": "STEER DOGGING", "fmt": "16mm\n(Trojan Sporting Goods)", "year": NA, "ft": "25 ft",
                "list_description": "Origin unknown" },
            {   "title": "NOW YOU SEE IT, NOW YOU DON'T", "fmt": "16mm (Kodaplay)", "year": 1939, "ft": "25 ft",
                "list_description": "Uncertain about the title (it's from the box).\n" +
                                    "Origin unknown." },
            {   "title": "SKYSCRAPERS", "fmt": "16mm (Kodaplay)", "year": 1946, "ft": "25 ft",
                "list_description": "Origin unknown." },
            {   "title": "JERRY ESCAPES", "fmt": "16mm (Kodaplay)", "year": 1939, "ft": "25 ft",
                "list_description": "Original Film: JERRY THE GIANT (1926)?" },
            {   "title": "UNKNOWN LIVE ACTION #1", "fmt": "16mm (Kodaplay)", "year": 1946, "ft": "25 ft",
                "list_description": "Number #10509 in container.\n" +
                                    "Number #30 at end of film.\n" +
                                    "Origin unknown." },
            {   "title": "UNKNOWN LIVE ACTION #2", "fmt": "16mm (Kodaplay)", "year": 1939, "ft": "25 ft",
                "list_description": "Number #7(?) at end of film.\n" +
                                    "Origin unknown." },
            {   "title": "UNKNOWN LIVE ACTION #3", "fmt": "9.5mm (Pathéscope)", "year": NA, "ft": "~7 ft",
                "list_description": "Origin unknown." },
            // MISC CARTOON
            {   "title": "FOXY FARMER", "fmt": "16mm (Keystone)", "year": NA, "ft": "50 ft",
                "list_description": "Kernel Cootie short." },
            {   "title": "THE TALE OF A KANGAROO", "fmt": "16mm (Keystone/Dover films)", "year": NA, "ft": "100 ft",
                "list_description": "Happy Hooligan short." },
        ]
    }
]
