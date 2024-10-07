//MAIN CODE

//TODO Lemon rant, trim audio and download

var current_sound = 'nothing';
var sound
function play_sequence(name, biggerName, start=0) {
    //initialize:
    let sound_list = all_sounds[biggerName][name].slice(start,); //create duplicate of url array and slice
    let psButton = document.getElementById(name + ' button');
    let psCounter = document.getElementById(name + ' counter');
    let psUl = document.getElementById(name + ' quotes');
    let totalLength = all_sounds[biggerName][name].length;

    //create list of li elements to be highlighted. If true, then highlight.
    let quoteElements = new Array(totalLength + to_skip[biggerName][name].length).fill(true);
    for (let not_li of to_skip[biggerName][name]) {
        quoteElements[not_li] = false;
    };
    //quoteElements.slice(start,);
    var current_quote = start;
    for (aBool of quoteElements.slice(current_quote,)) {
        if (aBool){break;}
        current_quote++;
    };

    //reset vars, counters, highlights, and kill any audio playing
    if (current_sound!='nothing') {
        sound.stop();
        document.getElementById(current_sound + ' button').disabled = false;
        document.getElementById(current_sound + ' counter').innerText = '';
        document.body.querySelector('.highlighted').classList.remove("highlighted");
    };
    psButton.disabled = true;
    psCounter.innerText = `  ${start+1} of ${totalLength}`;
    psUl.children[current_quote].classList.add("highlighted");

    current_sound = name;

    //this wacky function uses onend to loop through itself and play a list of audio urls
    function play_sound(url_list) {

        sound = new Howl({
          src: [url_list[0]],
          volume: 1,
          onend: function() {

            url_list.shift();
            //not looping enough?
            for (i in sound_list+2) {//the amount of iterations is arbitrary. This could just as easily be a while (true) loop, but for is safer.
                current_quote++;
                if (quoteElements[current_quote]){break;}
            };

            psUl.querySelector('.highlighted').classList.remove("highlighted");
            if (url_list.length > 0) {//if not done
                psCounter.innerText = '  ' + (totalLength - url_list.length +1) + ' of ' + totalLength;
                psUl.children[current_quote].classList.add("highlighted");
                play_sound(url_list);
              }
            else {// fires when all audio is done
                psButton.disabled = false;
                psCounter.innerText = '';
                current_sound = 'nothing';
            };
          }
        });
        sound.play();
        //sound.rate(25);
    };
    //start sound chain:
    play_sound(sound_list);
};




var music_counter = 'unused';
var music;
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
        document.body.querySelector('.highlighted').classList.remove("highlighted");
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