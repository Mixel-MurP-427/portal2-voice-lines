//MAIN CODE

//TODO Lemon rant, trim audio and download

var current_sound = 'nothing';
var sound
function play_sequence(name, biggerName, start=0) {
    //create duplicate of url array
    let sound_list = [...all_sounds[biggerName][name]];

    //reset vars and kill any audio playing
    document.getElementById(name + ' button').disabled = true;
    document.getElementById(name + ' counter').innerText = '  1 of ' + all_sounds[biggerName][name].length;
    if (current_sound!='nothing') {
        document.getElementById(current_sound + ' button').disabled = false;
        document.getElementById(current_sound + ' counter').innerText = '';
        sound.stop();
    };

    current_sound = name;

    //this wacky function uses onend to loop through itself and play a list of audio urls
    function play_sound(url_list) {

        sound = new Howl({
          src: [url_list[0]],
          volume: 1,
          onend: function() {
            url_list.shift();
            if (url_list.length > 0) {
                document.getElementById(name + ' counter').innerText = '  ' + (all_sounds[biggerName][name].length - url_list.length +1) + ' of ' + all_sounds[biggerName][name].length;
                play_sound(url_list);
              }
            else {// fires when all audio is done
                document.getElementById(current_sound + ' button').disabled = false;
                document.getElementById(name + ' counter').innerText = '';
                current_sound = 'nothing';
            };
          }
        });
        sound.play();
    };
    
    //start sound chain:
    play_sound(sound_list);
};

var music_counter = 'unused';
var music;
const background_music = [
    ['Playing: The Courtesy Call, 1 of 10', 'https:/\/i1.theportalwiki.net/img/b/b4/Portal2-04-The_Courtesy_Call.mp3'],
    ['Playing: 9999999, 2 of 10', 'https:/\/i1.theportalwiki.net/img/7/73/Portal2-03-999999.mp3'],
    ['Playing: Ghost of Rattman, 3 of 10', 'https:/\/i1.theportalwiki.net/img/9/9e/Portal2-07-Ghost_of_Rattman.mp3'],
    ['Playing: I Saw a Deer Today, 4 of 10', 'https:/\/i1.theportalwiki.net/img/5/55/Portal2-15-I_Saw_a_Deer_Today.mp3'],
    ['Playing: An Accent Beyond, 5 of 10', 'https:/\/i1.theportalwiki.net/img/5/50/Portal2-04-An_Accent_Beyond.mp3'],
    ['Playing: Bots Build Bots, 6 of 10', 'https:/\/i1.theportalwiki.net/img/9/97/Portal2-03-Bots_Build_Bots.mp3'],
    ['Playing: Music of the Spheres, 7 of 10', 'https:/\/i1.theportalwiki.net/img/4/4a/Portal2-13-Music_Of_The_Spheres.mp3'],
    ['Playing: Forwarding the Cause of Science, 8 of 10', 'https:/\/i1.theportalwiki.net/img/7/70/Portal2-15-Forwarding_The_Cause_Of_Science.mp3'],
    ['Playing: The Part Where He Kills You, 9 of 10', 'https:/\/i1.theportalwiki.net/img/9/92/Portal2-07-The_Part_Where_He_Kills_You.mp3'],
    ['Playing: Cara Mia Addio!, 10 of 10', 'https:/\/i1.theportalwiki.net/img/b/b8/Portal2-12-Cara_Mia_Addio.mp3']

];
function play_music() {
    if (music_counter==='unused') {music_counter=-1}
    else {music.stop();};
    music_counter++;
    if(music_counter===10) {//change int for number of songs
        music_counter = -1;
        document.getElementById('music button').innerHTML = 'none playing';
    }
    else {
        music = new Howl({
          src: [background_music[music_counter][1]],
          loop: true,
          volume: 0.5
        });
        music.play();
        document.getElementById('music button').innerHTML = background_music[music_counter][0];
    };
};

function reset() {
    if (current_sound!='nothing') {
        document.getElementById(current_sound + ' button').disabled = false;
        document.getElementById(current_sound + ' counter').innerText = '';
        sound.stop();
        current_sound='nothing';
    };
};

//setup show_hide keys
var show_hide = {};
for (let title in all_sounds) {
    show_hide[title] = {};
    for (let abutton in all_sounds[title]) {
        show_hide[title][abutton] = false;
    };
};

function show(name, nameBig) {
    if (show_hide[nameBig][name]) {
        show_hide[nameBig][name] = false;
        document.getElementById(name + ' quotes').style = "display: none;";
        document.getElementById(name + ' show').innerHTML = "show script";
    }
    else {
        show_hide[nameBig][name] = true;
        document.getElementById(name + ' quotes').style = "display: block;";
        document.getElementById(name + ' show').innerHTML = "hide script";
    };
};

function hide_all() {
    for (let nameBig in show_hide) {
        for (let name in show_hide[nameBig]) {
            if (show_hide[nameBig][name]) {
                show_hide[nameBig][name] = false;
                document.getElementById(name + ' quotes').style = "display: none;";
                document.getElementById(name + ' show').innerHTML = "show script";
}}}};

function create_quote_elements(BigName) {
    //create big group
    let mainDiv = document.createElement('div');
    mainDiv.id = BigName;
    document.getElementById('main').appendChild(mainDiv);
    document.getElementById(BigName).className = 'bigGroup';
    let BigInnerHTML = ''
    for (let ID_name in all_sounds[BigName]) {
        BigInnerHTML = BigInnerHTML + `
        <div class="group" id="${ID_name}">
          <button onclick="play_sequence(\`${ID_name}\`, \`${BigName}\`);" id="${ID_name} button">${ID_name}</button>
          <span id="${ID_name} counter"></span>
          <br/>
          <u onclick="show(\`${ID_name}\`, \`${BigName}\`)" id="${ID_name} show">show script</u>
          <ul id="${ID_name} quotes" style="display:none;">${lines[BigName][ID_name]}</ul>
        </div>
          `;
    };
    document.getElementById(BigName).innerHTML = `
        <div class="groupTitle">${BigName}</div>
        <br/>
        ${BigInnerHTML}
    `;
};




//fires when body has loaded
function move_topbar () {
    const UpperBarElement = document.getElementById('upperBar');
    //detects if user has scrolled up/down and moves topbar in opposite direction
    var lastScroll = window.scrollY;
    var scrollPosition;
    var difference;
    var cssTop = 0;
    var barSize = -UpperBarElement.offsetHeight;

    window.addEventListener("scroll", function(){
        scrollPosition = window.scrollY;
        difference = lastScroll - scrollPosition;
        barSize = -UpperBarElement.offsetHeight;

        cssTop += difference * 1.3;//float is a speed accelerator
        if(cssTop>0){cssTop=0}else if(cssTop<barSize){cssTop=barSize};//prevents bar from moving too far
        UpperBarElement.style.top = cssTop + 'px';
        //reset lastScroll:
        lastScroll = scrollPosition <= 0 ? 0 : scrollPosition; // For Mobile or negative scrolling; credit: "https://stackoverflow.com/questions/31223341/detecting-scroll-direction"
    });
};