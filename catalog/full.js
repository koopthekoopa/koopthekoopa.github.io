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
            {   "title": "EXCHANGE IS NO ROBBERY", "fmt": "Pathéscope\n9.5mm", "year": 1926, "ft": "30 ft",
                "list_description": "Charlie Chaplin short.\n" +
                                    "Original Film: GETTING ACQUAINTED" },
            {   "title": "CHARLOT ET LE MARI JALOUX", "fmt": "Pathé-Baby\n9.5mm", "year": 1923, "ft": "30 ft",
                "list_description": "Charlie Chaplin.\n" +
                                    "Original Film: RECREATION " },
            // FELIX THE CAT
            {   "title": "FÉLIX LE CHAT VIT UN CONTE FANTASTIQUE", "fmt": "Pathé-Baby\n9.5mm", "year": 1925, "ft": "30 ft",
                "list_description": "Felix the Cat short.\n" +
                                    "Original Film: FELIX IN LOVE" },
            {   "title": "FÉLIX LE CHAT SE VENGE", "fmt": "Pathé-Baby\n9.5mm", "year": 1925, "ft": "30 ft",
                "list_description": "Felix the Cat short.\n" +
                                    "Original Film: FELIX FIFTY-FIFTY" },
            {   "title": "THE ADVENTURES OF FELIX THE CAT", "fmt": "Mountain Films\nSuper 8mm", "year": 1970+"?", "ft": "300 ft",
                "list_description": "Compilation of three Felix the Cat shorts: \n" +
                                    "FELIX REVOLTS\n" +
                                    "FELIX COMES BACK\n" +
                                    "FELIX WINS OUT" },
            {   "title": "FÉLIX LE CHAT ET LA SOURIS", "fmt": "Pathé-Baby\n9.5mm", "year": 1924, "ft": "30 ft",
                "list_description": "Felix the Cat short.\n" +
                                    "Original Film: FELIX LENDS A HAND" },
            {   "title": "FÉLIX LE CHAT CONNAIT LE REMORDS", "fmt": "Pathé-Baby\n9.5mm", "year": 1927, "ft": "~20 ft",
                "list_description": "Felix the Cat short.\n" +
                                    "Part 1 only.\n" +
                                    "Original Film: FELIX CALMS HIS CONSCIENCE" },
            {   "title": "FÉLIX LE CHAT FUMISTE EN TOUS GENRES", "fmt": "Pathé-Baby\n9.5mm", "year": 1926, "ft": "30 ft",
                "list_description": "Felix the Cat short.\n" +
                                    "Original Film: FELIX THE GOAT-GETTER" },
            {   "title": "FÉLIX LE CHAT N'EST PAS SÉRIEUX", "fmt": "Pathé-Baby\n9.5mm", "year": 1934, "ft": "60 ft",
                "list_description": "Felix the Cat short.\n" +
                                    "Original Film: FELIX THE GOAT-GETTER" },
            {   "title": "FÉLIX LE CHAT, LA BELLE ET LA BÊTE", "fmt": "Pathé-Baby\n9.5mm", "year": 1925, "ft": "60 ft",
                "list_description": "Felix the Cat short.\n" +
                                    "Part 1 - 2 (30 ft each)\n" +
                "Original Film: FELIX LOSES OUT" },
            {   "title": "FELIX FINDS A GOLF BALL", "fmt": "Kodaplay\n16mm", "year": 1939, "ft": "25 ft",
                "list_description": "Felix the Cat short.\n" +
                                    "Original Film: FELIX ALL BALLED UP" },
            {   "title": "FELIX BRINGS HOME THE BACON", "fmt": "Cine-Kodagraph\n8mm", "year": 1936, "ft": "50 ft",
                "list_description": "Felix the Cat short." },
            {   "title": "FELIX FOLLOWS THE SWALLOW", "fmt": "Cine-Kodagraph\n8mm", "year": 1934, "ft": "50 ft",
                "list_description": "Felix the Cat short." },
            {   "title": "FELIX HYPS' THE HIPPO", "fmt": "Cine-Kodagraph\n8mm", "year": 1936, "ft": "50 ft",
                "list_description": "Felix the Cat short." },
            {   "title": "FELIX THE HYPNOTIST", "fmt": "Collector's Club\n8mm", "year": 1975, "ft": "150 ft",
                "list_description": "Felix the Cat short.\n" +
                                    "Original Film: FELIX HYPS' THE HIPPO" },
            {   "title": "FELIX THE CAT DINES AND PINES", "fmt": "Niles Films\n8mm", "year": NA, "ft": "200 ft",
                "list_description": "Felix the Cat short." },
            {   "title": "FELIX AND HALLOWE'EN NIGHT", "fmt": "Pathéscope\n9.5mm", "year": 1956, "ft": "200 ft",
                "list_description": "Felix the Cat short.\n" +
                                    "Davil brill reissue of: SWITCHES WITCHES" },
            {   "title": "FELIX PAY DAY", "fmt": "Pathéscope\n9.5mm", "year": 1956, "ft": "200 ft",
                "list_description": "Felix the Cat short.\n" +
                                    "Davil brill reissue of: WHYS AND OTHER WHYS" },
            {   "title": "A MAGIC CARPET NOW BRINGS FELIX TO ARABIA", "fmt": "Pathéscope\n9.5mm", "year": 1956, "ft": "200 ft",
                "list_description": "Felix the Cat short.\n" +
                                    "Davil brill reissue of: ARABIANTICS" },
            {   "title": "FELIX SEEKS DREAMLAND", "fmt": "Pathéscope\n9.5mm", "year": 1956, "ft": "200 ft",
                "list_description": "Felix the Cat short.\n" +
                                    "Davil brill reissue of: FORTY WINKS" },
            {   "title": "FELIX LOOKS INTO THE FUTURE", "fmt": "Arrow Films\nSuper 8mm", "year": 1964+"?", "ft": "200 ft",
                "list_description": "Felix the Cat short.\n" +
                                    "Davil brill reissue of: FUTURITZY" },
            {   "title": "FELIX CHAMPION INTERPLANÉTAIRE", "fmt": "Film Office\n8mm", "year": 1963, "ft": "50 ft",
                "list_description": "Felix the Cat short.\n" +
                                    "Original Film: ASTRONOMEOWS" },
            {   "title": "FELIX GOES TO CHINA", "fmt": "Pathéscope\n9.5mm", "year": 1956, "ft": "200 ft",
                "list_description": "Felix the Cat short.\n" +
                                    "Davil brill reissue of: FALSE VASES" },
            {   "title": "LE PIQUE-NIQUE DE FÉLIX", "fmt": "Film Office\nSuper 8mm", "year": NA, "ft": "200 ft",
                "list_description": "Felix the Cat short.\n" +
                                    "Original Film: APRIL MAZE" },
            {   "title": "FELIX SAYS GRACE", "fmt": "Pathéscope\n9.5mm", "year": 1957, "ft": "60 ft",
                "list_description": "Felix the Cat short.\n" +
                                    "Original Film: APRIL MAZE" },
            // DISNEY
            {   "title": "AT THE CARNIVAL", "fmt": "Pathéscope\n9.5mm", "year": 1935, "ft": "30 ft",
                "list_description": "Mickey Mouse short.\n" +
                                    "Original Film: KARNIVAL KID" },
            {   "title": "MICKEY SELLS HOT DOGS", "fmt": "Pathéscope\n9.5mm", "year": 1935, "ft": "~15 ft",
                "list_description": "Mickey Mouse short.\n" +
                                    "Original Film: KARNIVAL KID" },
            {   "title": "MICKEY GOES TO WAR", "fmt": "Ensignareel\n16mm", "year": 1935, "ft": "~25 ft",
                "list_description": "Mickey Mouse short.\n" +
                                    "Original Film: BARNYARD BATTLE" },
            {   "title": "BIG BOY ARRIVES", "fmt": "Pathéscope\n9.5mm", "year": 1935, "ft": "~20 ft",
                "list_description": "Mickey Mouse short.\n" +
                                    "Original Film: THE OPRY HOUSE" },
            {   "title": "CAT'S ON HOLIDAY", "fmt": "Pathéscope\n9.5mm", "year": 1936, "ft": "60 ft",
                "list_description": "Mickey Mouse short.\n" +
                                    "Original Film: WHEN THE CAT'S AWAY" },
            {   "title": "MINNIE'S FREE RIDE", "fmt": "Pathéscope\n9.5mm", "year": 1936, "ft": "60 ft",
                "list_description": "Silly Symphony short.\n" +
                                    "Original Film: MICKEY'S CHOO CHOO" },
            {   "title": "AH! SWEET SUMMERTIME", "fmt": "Pathéscope\n9.5mm", "year": 1936, "ft": "~5 ft",
                "list_description": "Mickey Mouse short.\n" +
                                    "Original Film: SUMMERTIME" },
            {   "title": "PLUTO PLAYS POSSUM", "fmt": "Pathéscope\n9.5mm", "year": 1939, "ft": "60 ft",
                "list_description": "Mickey Mouse short.\n" +
                                    "Original Film: THE MOOSE HUNT" },
            {   "title": "MICKEY'S AEROPLANE", "fmt": "Pathéscope\n9.5mm", "year": NA, "ft": "60 ft",
                "list_description": "Mickey Mouse short.\n" +
                                    "Original Film: THE MAIL PILOT" },
            {   "title": "LOVESLICK PLUTO", "fmt": "Pathéscope\n9.5mm", "year": NA, "ft": "60 ft",
                "list_description": "Mickey Mouse short.\n" +
                                    "Original Film: PUPPY LOVE" },
            {   "title": "DONALD DUCK", "fmt": "Pathéscope\n9.5mm", "year": NA, "ft": "60 ft",
                "list_description": "Mickey Mouse short.\n" +
                                    "Original Film: ORPHAN'S BENEFIT" },
            {   "title": "BUMPS AHEAD", "fmt": "Pathéscope\n9.5mm", "year": NA, "ft": "30 ft",
                "list_description": "Mickey Mouse short.\n" +
                                    "Original Film: CAMPING OUT" },
            {   "title": "ONCE BITTEN", "fmt": "Pathéscope\n9.5mm", "year": NA, "ft": "30 ft",
                "list_description": "Mickey Mouse short.\n" +
                                    "Original Film: CAMPING OUT" },
            {   "title": "TIMBER", "fmt": "G.B. Film Library\n8mm", "year": 1954, "ft": "200 ft",
                "list_description": "Donald Duck short." },
            {   "title": "MICKEY DOWN UNDER", "fmt": "G.B. Film Library\n8mm", "year": 1959, "ft": "200 ft",
                "list_description": "Mickey Mouse short." },
            // OUT OF THE INKWELL
            {   "title": "SURPRISE", "fmt": "Kodascope Library\n16mm", "year": 1927, "ft": "~180 ft",
                "list_description": "Out of the Inkwell short." },
            {   "title": "KOKO GETS WET", "fmt": "Kodaplay\n16mm", "year": 1939, "ft": "25 ft",
                "list_description": "Out of the Inkwell short.\n" +
                                    "Original Film: MOTHER GOOSE LAND" },
            {   "title": "KOKO MEETS JACK AND JILL", "fmt": "Kodaplay\n16mm", "year": 1939, "ft": "25 ft",
                "list_description": "Out of the Inkwell short.\n" +
                                    "Original Film: MOTHER GOOSE LAND" },
            {   "title": "THE CLIFF HANGER", "fmt": "Eastmancolor stock\n16mm", "year": 1966, "ft": "200 ft",
                "list_description": "Out of the Inkwell (TV Series) short." },
            // BETTY BOOP/TALKARTOONS
            {   "title": "BETTY BOOP'S HALLOWE'EN PARTY", "fmt": "Pathéscope\n9.5mm", "year": 1938, "ft": "300 ft",
                "list_description": "Betty Boop cartoon." },
            // POPEYE
            {   "title": "NOISE ANNOYS POPEYE", "fmt": "Pathéscope\n9.5mm", "year": 1937, "ft": "60 ft",
                "list_description": "Popeye the Sailor short.\n" +
                                    "Original Film: SOCK-A-BYE BABY" },
            // AESOP'S FILM FABLES
            {   "title": "PLOW BOY'S REVENGE", "fmt": "Snappy Cartoons\n8mm", "year": 1938, "ft": "150",
                "list_description": "Aesop's Film Fables short." },
            {   "title": "RIVER OF DOUBT", "fmt": "Kodascope Library\n16mm", "year": 1948, "ft": "~130 ft",
                "list_description": "Aesop's Film Fables short." },
            // KRAZY KAT
            {   "title": "KITTY KAT IN THE WAR", "fmt": "Coast Films\n8mm", "year": NA, "ft": "50 ft",
                "list_description": "Krazy Kat short.\n" +
                                    "Original Film: MOUSE TRAPPED" },
            // MISC LIVE ACTION
            {   "title": "KODASCOPE LIBRARY PROMO", "fmt": "Kodascope\n16mm", "year": NA, "ft": "25 ft",
                "list_description": "Compilation of these shorts: \n" +
                                    "THE EARLY BIRD AND THE WORM\n" +
                                    "ALGIERS\n" +
                                    "FELIX IN HOLLYWOOD\n" +
                                    "EASY STREET\n" +
                                    "WILD PUPPIES\n" +
                                    "RIN TIN TIN \"THE NIGHT CRY\"\n" +
                                    "THE MOOSE COUNTRY\n" +
                                    "KEN MANYARD \"THE RED RAIDERS\"\n" +
                                    "WE'RE IN THE NAVY NOW" },
            {   "title": "THE AMERICAN", "fmt": "Pathéscope\n9.5mm", "year": 1926, "ft": "180 ft",
                "list_description": "Douglas Fairbankst short.\n" +
                                    "Part 1 - 3 (60 ft each)\n" +
                "Original Film: THE AMERICANO" },
            {   "title": "FLICKERING FLAMES", "fmt": "Pathéscope\n9.5mm", "year": 1928, "ft": "60 ft",
                "list_description": "Part 1 - 2 (30 ft each)\n" +
                "Original Film: LA FLAMBÉE DES RÊVES" },
            {   "title": "CHIMP CHARMING", "fmt": "Pathéscope\n9.5mm", "year": 1950, "ft": "30 ft",
                "list_description": "Original Film: THE NEW ADVENTURES OF TARZAN" },
            {   "title": "STEER DOGGING", "fmt": "Trojan Sporting Goods\n16mm", "year": NA, "ft": "25 ft",
                "list_description": "Origin unknown" },
            {   "title": "NOW YOU SEE IT, NOW YOU DON'T", "fmt": "Kodaplay\n16mm", "year": 1939, "ft": "25 ft",
                "list_description": "Uncertain about the title (it's from the box).\n" +
                                    "Origin unknown." },
            {   "title": "SKYSCRAPERS", "fmt": "Kodaplay\n16mm", "year": 1946, "ft": "25 ft",
                "list_description": "Origin unknown." },
            {   "title": "JERRY ESCAPES", "fmt": "Kodaplay\n16mm", "year": 1939, "ft": "25 ft",
                "list_description": "Original Film: JERRY THE GIANT?" },
            {   "title": "FOUR TIMES FOILED", "fmt": "Kodascope Library\n16mm", "year": 1946, "ft": "~125 ft",
                "list_description": "Snooky The Chimp short." },
            {   "title": "UNKNOWN LIVE ACTION #1", "fmt": "Kodaplay\n16mm", "year": 1946, "ft": "25 ft",
                "list_description": "Number #10509 in container.\n" +
                                    "Number #30 at end of film.\n" +
                                    "Origin unknown." },
            {   "title": "UNKNOWN LIVE ACTION #2", "fmt": "Kodaplay\n16mm", "year": 1939, "ft": "25 ft",
                "list_description": "Number #7(?) at end of film.\n" +
                                    "Origin unknown." },
            {   "title": "UNKNOWN LIVE ACTION #3", "fmt": "Pathéscope\n9.5mm", "year": NA, "ft": "~7 ft",
                "list_description": "Origin unknown." },
            // MISC CARTOON
            {   "title": "FOXY FARMER", "fmt": "Keystone\n16mm", "year": NA, "ft": "50 ft",
                "list_description": "Kernel Cootie short." },
            {   "title": "THE TALE OF A KANGAROO", "fmt": "Keystone\n16mm", "year": NA, "ft": "100 ft",
                "list_description": "Happy Hooligan short." },
        ]
    }
]
