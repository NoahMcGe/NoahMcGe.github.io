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
                "name": "Big River (ALT) - Johnny Cash",
                "length": "03:12",
                "file": "cash/bigriveralt"
            }, {
                "track": 17,
                "name": "Cold Lonesome Morning - Johnny Cash",
                "length": "03:23",
                "file": "cash/coldlonesomemorning"
            }, {
                "track": 18,
                "name": "Come in Stranger (ALT) - Johnny Cash",
                "length": "02:00",
                "file": "cash/cometrangeralt"
            }, {
                "track": 19,
                "name": "Home of The Blues - Johnny Cash",
                "length": "02:46",
                "file": "cash/homeblues"
            }, {
                "track": 20,
                "name": "The Night Hank Williams Came to Town - Johnny Cash",
                "length": "03:22",
                "file": "thenight"
            }, {
                "track": 21,
                "name": "Straight A's in Love - Johnny Cash",
                "length": "02:14",
                "file": "cash/love"
            }, {
                "track": 22,
                "name": "Wabash Cannonball - Johnny Cash",
                "length": "02:39",
                "file": "cash/wabashcannonball"
            }, {
                "track": 23,
                "name": "Born to be a Roughneck - Johnny Cash",
                "length": "02:09",
                "file": "cash/roughneck"
            }, {
                "track": 24,
                "name": "There's No Wings On My Angel - Marty Robbins",
                "length": "02:41",
                "file": "marty/No Wings On My Angel"
            }, {
                "track": 25,
                "name": "Battle of New Orleans - Johnny Horton",
                "length": "02:28",
                "file": "horton/Battle of New Orleans, In 1814"
            }, {
                "track": 26,
                "name": "Sink The Bismarck - Johnny Horton",
                "length": "03:13",
                "file": "horton/Sink The Bismarck - Johnny Horton"
            }, {
                "track": 27,
                "name": "Honky-Tonk Man - Johnny Horton",
                "length": "02:14",
                "file": "horton/Johnny Horton - Honky-Tonk Man"
            }, {
                "track": 28,
                "name": "I'm A One Woman Man - Johnny Horton",
                "length": "02:13",
                "file": "horton/Johnny Horton ~ I'm A One Woman Man"
            }, {
                "track": 29,
                "name": "The Electrified Donkey - Johnny Horton",
                "length": "02:23",
                "file": "horton/Johnny Horton - The Electrified Donkey"
            }, {
                "track": 30,
                "name": "A Rainbow In My Hand - Doyle Holly",
                "length": "02:50",
                "file": "doyle/Doyle Holly  A Rainbow In My Hand"
            }, {
                "track": 31,
                "name": "Lonestar Hotel - Doyle Holly",
                "length": "04:00",
                "file": "doyle/Doyle Holly - Lonestar Hotel"
            }, {
                "track": 32,
                "name": "Sold American - Doyle Holly",
                "length": "02:28",
                "file": "doyle/Doyle Holly - Sold American"
            }, {
                "track": 33,
                "name": "Lila - Doyle Holly",
                "length": "02:46",
                "file": "doyle/Doyle Holly  Lila"
            }, {
                "track": 34,
                "name": "Ava Maria Morales - Marty Robbins",
                "length": "04:26",
                "file": "marty/019. Ava Maria Morales"
            }, {
                "track": 35,
                "name": "Girl With Gardenias in Her Hair - Marty Robbins",
                "length": "02:38",
                "file": "marty/023. The Girl With Gardenias in Her Hair"
            }, {
                "track": 36,
                "name": "In the Valley of the Rio Grande - Marty Robbins",
                "length": "02:25",
                "file": "marty/026. In the Valley of the Rio Grande"
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
