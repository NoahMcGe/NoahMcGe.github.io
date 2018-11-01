// html5media enables <video> and <audio> tags in all major browsers
// External File: http://api.html5media.info/1.1.8/html5media.min.js


// Add user agent as an attribute on the <html> tag...
var b = document.documentElement;
b.setAttribute('data-useragent', navigator.userAgent);
b.setAttribute('data-platform', navigator.platform);


// HTML5 audio player + playlist controls...
jQuery(function ($) {
    var supportsAudio = !!document.createElement('audio').canPlayType;
    if (supportsAudio) {
        var index = 0,
            playing = false,
            mediaPath = 'https://noahmcge.github.io/audio/',
            extension = '',
            tracks = [{
                "track": 1,
                "name": "El Paso - Marty Robbins",
                "length": "04:22",
                "file": "marty/elpaso"
            }, {
                "track": 2,
                "name": "All Around Cowboy - Marty Robbins",
                "length": "08:31",
                "file": "marty/allaround"
            }, {
                "track": 3,
                "name": "El Paso City - Marty Robbins",
                "length": "04:11",
                "file": "marty/elpasocity"
            }, {
                "track": 4,
                "name": "The First Song that Wasn't the Blues - Marty Robbins",
                "length": "03:09",
                "file": "marty/1stsong"
            }, {
                "track": 5,
                "name": "Five Brothers - Marty Robbins)",
                "length": "02:13",
                "file": "marty/five"
            }, {
                "track": 6,
                "name": "A Good Hearted Woman - Marty Robbins",
                "length": "04:05",
                "file": "marty/good"
            }, {
                "track": 7,
                "name": "Bound For Old Mexico - Marty Robbins",
                "length": "03:00",
                "file": "marty/olmexico"
            }, {
                "track": 8,
                "name": "Devil Woman - Marty Robbins",
                "length": "02:53",
                "file": "marty/woman"
            }, {
                "track": 9,
                "name": "Mammas Don't Let Your Babies Grow up to Be Cowboys - Waylon Jennings",
                "length": "02:32",
                "file": "waylon/Mammas Don't Let Your Babies Grow up to Be Cowboys (Remastered)"
            }, {
                "track": 10,
                "name": "Theme from  The Dukes of Hazzard  (Good Ol' Boys) - Waylon Jennings",
                "length": "02:09",
                "file": "waylon/Theme from  The Dukes of Hazzard  (Good Ol' Boys)"
            }, {
                "track": 11,
                "name": "I'm a Ramblin' Man - Waylon Jennings",
                "length": "02:46",
                "file": "waylon/Waylon Jennings - I'm a Ramblin' Man"
            }, {
                "track": 12,
                "name": "Ladies Love Outlaws - Waylon Jennings",
                "length": "02:31",
                "file": "waylon/Waylon Jennings - Ladies Love Outlaws"
            }, {
                "track": 13,
                "name": "Luckenbach Texas - Waylon Jennings",
                "length": "03:20",
                "file": "waylon/Waylon Jennings Luckenbach Texas"
            }, {
                "track": 14,
                "name": "Lonesome, On'ry and Mean - Waylon Jennings",
                "length": "03:38",
                "file": "waylon/Lonesome, On'ry and Mean"
            }, {
                "track": 15,
                "name": "I've Always Been Crazy - Waylon Jennings",
                "length": "04:11",
                "file": "waylon/I've Always Been Crazy"
            }, {
                "track": 16,
                "name": "Big River (alt) - Johnny Cash",
                "length": "03:12",
                "file": "cash/bigriveralt"
            }, {
                "track": 17,
                "name": "Song - Singer",
                "length": "10:47",
                "file": "PVD_T"
            }, {
                "track": 18,
                "name": "Song - Singer",
                "length": "05:37",
                "file": "PVD_TSOWA"
            }, {
                "track": 19,
                "name": "Song - Singer",
                "length": "02:49",
                "file": "SSB01_08_04_ATI"
            }, {
                "track": 20,
                "name": "Song - Singer",
                "length": "05:46",
                "file": "SSB01_08_04_M"
            }, {
                "track": 21,
                "name": "Song - Singer",
                "length": "13:08",
                "file": "SSB06_06_03_BTPE"
            }, {
                "track": 22,
                "name": "Song - Singer",
                "length": "05:16",
                "file": "SSB06_06_03_I"
            }, {
                "track": 23,
                "name": "Song - Singer",
                "length": "05:47",
                "file": "SSB06_06_03_M"
            }, {
                "track": 24,
                "name": "Song - Singer",
                "length": "04:52",
                "file": "SSB06_06_03_ME"
            }, {
                "track": 25,
                "name": "Song - Singer",
                "length": "08:44",
                "file": "SSB06_06_03_TF"
            }, {
                "track": 26,
                "name": "Song - Singer",
                "length": "03:01",
                "file": "SSB12_28_03_ATI"
            }, {
                "track": 27,
                "name": "Song - Singer",
                "length": "06:10",
                "file": "SSB12_28_03_M"
            }, {
                "track": 28,
                "name": "Song - Singer",
                "length": "05:06",
                "file": "SSB12_28_03_ME"
            }, {
                "track": 29,
                "name": "Song - Singer",
                "length": "12:33",
                "file": "SSB12_28_03_T"
            }, {
                "track": 30,
                "name": "Song - Singer",
                "length": "08:57",
                "file": "SSB12_28_03_TF"
            }, {
                "track": 31,
                "name": "Song - Singer",
                "length": "04:55",
                "file": "SSB___11_03_ATITake_1"
            }, {
                "track": 32,
                "name": "Song - Singer",
                "length": "05:46",
                "file": "SSB___11_03_ATITake_2"
            }, {
                "track": 33,
                "name": "Song - Singer",
                "length": "14:06",
                "file": "SSB___11_03_BTPETake_1"
            }, {
                "track": 34,
                "name": "Song - Singer",
                "length": "13:26",
                "file": "SSB___11_03_BTPETake_2"
            }, {
                "track": 35,
                "name": "Song - Singer",
                "length": "08:38",
                "file": "SSB___11_03_TFTake_1"
            }, {
                "track": 36,
                "name": "Song - Singer",
                "length": "08:37",
                "file": "SSB___11_03_TFTake_2"
            }],
            trackCount = tracks.length,
            npAction = $('#npAction'),
            npTitle = $('#npTitle'),
            audio = $('#audio1').bind('play', function () {
                playing = true;
                npAction.text('Now Playing...');
            }).bind('pause', function () {
                playing = false;
                npAction.text('Paused...');
            }).bind('ended', function () {
                npAction.text('Paused...');
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    audio.play();
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }).get(0),
            btnPrev = $('#btnPrev').click(function () {
                if ((index - 1) > -1) {
                    index--;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            btnNext = $('#btnNext').click(function () {
                if ((index + 1) < trackCount) {
                    index++;
                    loadTrack(index);
                    if (playing) {
                        audio.play();
                    }
                } else {
                    audio.pause();
                    index = 0;
                    loadTrack(index);
                }
            }),
            li = $('#plList li').click(function () {
                var id = parseInt($(this).index());
                if (id !== index) {
                    playTrack(id);
                }
            }),
            loadTrack = function (id) {
                $('.plSel').removeClass('plSel');
                $('#plList li:eq(' + id + ')').addClass('plSel');
                npTitle.text(tracks[id].name);
                index = id;
                audio.src = mediaPath + tracks[id].file + extension;
            },
            playTrack = function (id) {
                loadTrack(id);
                audio.play();
            };
        extension = audio.canPlayType('audio/mp3') ? '.mp3' : audio.canPlayType('audio/ogg') ? '.ogg' : '';
        loadTrack(index);
    }
});
