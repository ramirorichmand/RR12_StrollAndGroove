const toggle = document.getElementById('toggle');
const mute = document.getElementById('mute');
const locations = document.getElementById('locations');
const speed = document.getElementById('speed');
const audio = document.getElementById('audio');
const play = document.getElementById('play');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

var currentCityIndex;
var currentCity;
var currentVideoIndex;
var currentVideo;
var currentAudioIndex;
var currentAudio;

const data = [
    {
        city:"Chicago",
        videos:[
            'x42Wxn1btTY',
        ],
         music:[
            'http://wcrx.streamguys1.com/live',
         ]
    },
    {
        city:"Chennai",
        videos:[
            '1uan36x3Rw4',
        ],
         music:[
            'https://18213.live.streamtheworld.com/CHN_TAM_ESTAAC.aac',
         ]
    },
    {
        city:"Lisbon",
        videos:[
            'syL1jBDxLZE',
        ],
         music:[
            'http://radiolisboa.ddns.net:8080/stream/1/',
         ]
    },
    {
        city:"New York City",
        videos:[
            'LQLJu-EpkeE',
        ],
         music:[
            'https://22073.live.streamtheworld.com/WBBRAMAAC.aac',
         ]
    },
    {
        city:"Melbourne",
        videos:[
            'gQ-9mmnfJjE',
        ],
         music:[
            'https://live-radio03.mediahubaustralia.com/3LRW/aac/',
         ]
    },
    {
        city:"Cairo",
        videos:[
            'Esyp2P0uJu4',
        ],
         music:[
            'https://audio.nrpstream.com/listen/nile_fm/radio.mp3',
         ]
    },
    {
        city:"Rio de Janeiro",
        videos:[
            'l8geG89VAMY',
        ],
         music:[
            'https://a1rj.streams.com.br/stream',
         ]
    },
    {
        city:"Johannesburg",
        videos:[
            '2-2ZzcWLtS8',
        ],
         music:[
            'https://capeant.antfarm.co.za:8000/ptafm',
         ]
    },
    {
        city:"Miami",
        videos:[
            'Cod_ggrs69U',
        ],
         music:[
            'https://01.solumedia.com.ar:9050/stream',
         ]
    },
    {
        city:"Rome",
        videos:[
            'ytiM1nMv_xU',
        ],
         music:[
            'https://uk2.streamingpulse.com/ssl/vcr1',
         ]
    },
]

// randoom ID
function onLoad(){
    // city
    currentCityIndex = randomNumber(data.length);
    currentCity = data(currentCityIndex);
    currentVideoIndex = randomNumber(currentCity.videos.length);
    currentVideo = currentCity.videos[currentVideoIndex];
    currentAudioIndex = randomNumber(currentCity.music.length);
    currentVideo = currentCity.videos[currentVideoIndex];
    // video
}
function randomNumber (max){
    return Math.floor(Math.random() * (max))
}

// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player('player', {
    height: window.innerHeight *1.2,
    width: window.innerHeight *1.2 * (16/9),
    videoId: 'M7lc1UVf-VE',
    playerVars: {
      'playsinline': 1,
      'controls': 0,
      'mute': 1,
      'showinfo':0,
      'enablejsapi':1,
      'disablekb':1,
      'modestbranding':1,
      'origin':window.location.origin,
      'widget_referrer':window.location.href,

    },
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
  event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
  if (event.data == YT.PlayerState.PLAYING && !done) {
    setTimeout(stopVideo, 6000);
    done = true;
  }
}
function stopVideo() {
  player.stopVideo();
}
