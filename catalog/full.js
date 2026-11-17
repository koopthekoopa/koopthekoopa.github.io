// ...this sucks! put them into .json files later

// Indexes
var CATALOG_BAD = -1
var CATALOG_PROJECTS_NORMAL = 0
var CATALOG_PROJECTS_COLLEGE = 1
var CATALOG_SM64_RESOURCES = 2
var CATALOG_FILM_CAVERN = 3

// Types
var CATALOG_TYPE_PRETTY = 0
var CATALOG_TYPE_TABLE = 1

var full_catalog = [

    // CATALOG_PROJECTS_NORMAL

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

    // CATALOG_PROJECTS_COLLEGE

    {
        "title": "College projects",
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
                        "href": "downloads/projects_college/colin_perplexing_world.zip"
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
                        "text": "Play game!",
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

    // CATALOG_SM64_RESOURCES

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
                        "href": "downloads/models/sm64_koopthekoopa_port.zip"
                    },
                    {
                        "text": "Download for emulator",
                        "href": "downloads/models/sm64_koopthekoopa_rom.zip"
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
                        "href": "downloads/models/sm64_elephant_mario_port.zip"
                    },
                    {
                        "text": "Download for emulator",
                        "href": "downloads/models/sm64_elephant_mario_rom.zip"
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
                        "href": "downloads/models/sm64_koopthekoopa_troll.zip"
                    }
                ]
            }
        ]
    },

    // CATALOG_FILM_CAVERN

    {
        "title": "My film cavern",
        "description": "Yes, I am also a film collector (what a surprise!)\n\nTODO: fill all of it in",
        "type": CATALOG_TYPE_TABLE,
        "table_names": [ ["title", "Name"], ["fmt", "Format"], ["year", "Year"], ["ft", "Length"], ["list_description", "Description"] ],
        "list_font": "Courier New",
        "no_href": true,
        "items": [
            // FELIX THE CAT
            {   "title": "FELIX LE CHAT VIT UN CONTE FANTASTIQUE", "fmt": "Notched Pathé-Baby 9.5mm", "year": 1925, "ft": "30 ft",
                "list_description": "Original cartoon: FELIX IN LOVE (1922)" },
            {   "title": "FELIX LE CHAT SE VENGE", "fmt": "Notched Pathé-Baby 9.5mm", "year": 1925, "ft": "30 ft",
                "list_description": "Original cartoon: FELIX FIFTY-FIFTY (1922)" },
            {   "title": "THE ADVENTURES OF FELIX THE CAT", "fmt": "Notched Pathé-Baby 9.5mm", "year": 1970+"?", "ft": "300 ft",
                "list_description": "Compilation of three cartoons: \n"
                                    + "FELIX REVOLTS (1923)\n"
                                    + "FELIX COMES BACK (1922)\n"
                                    + "FELIX WINS OUT (1923)" },
            {   "title": "FELIX LE CHAT ET LA SOURIS", "fmt": "Notched Pathé-Baby 9.5mm", "year": 1924, "ft": "30 ft",
                "list_description": "Original cartoon: FELIX FIFTY-FIFTY (1922)" },
        ]
    }
]
