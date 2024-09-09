
var sound
function play_sequence(sound_list) {

    //this wacky function uses onend to loop through itself and play a list of audio urls
    function play_sound(url_list) {

        sound = new Howl({
          src: [url_list[0]],
          volume: 1,
          onend: function() {
            url_list.shift();
            if (url_list.length > 0) {
                play_sound(url_list);
              };
          }
        });
        sound.play();
    };
    //start sound chain:
    play_sound(sound_list);
};

const musics = [
    'https://i1.theportalwiki.net/img/3/38/Portal2-12-The_Friendly_Faith_Plate.mp3',
    'https://i1.theportalwiki.net/img/3/36/Portal2-13-15_Acres_of_Broken_Glass.mp3',
    'https://i1.theportalwiki.net/img/d/d7/Portal2-14-Love_as_a_Construct.mp3',
    'https://i1.theportalwiki.net/img/5/55/Portal2-15-I_Saw_a_Deer_Today.mp3',
    'https://i1.theportalwiki.net/img/f/f1/Portal2-16-Hard_Sunshine.mp3',
    'https://i1.theportalwiki.net/img/f/f2/Portal2-17-I_Am_Different.mp3',
    'https://i1.theportalwiki.net/img/5/5b/Portal2-18-Adrenal_Vapor.mp3',
    'https://i1.theportalwiki.net/img/d/de/Portal2-20-I_Made_It_All_Up.mp3',
    'https://i1.theportalwiki.net/img/c/ca/Portal2-21-Comedy_Equals_Tragedy_Plus_Time.mp3',
    'https://i1.theportalwiki.net/img/a/ae/Portal2-22-Triple_Laser_Phase.mp3'
];