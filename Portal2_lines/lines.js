const lines = {//TODO add more divs and increase spaces
    'Ha! Death trap!!': {
        'Test Chamber 75': `
            <li>[Chapter 9] Wheatley: "Hold on, hold on, hold on... Almost there..."</li>
            <li>"Don't mind me. Continue escaping."</li>
            <li>"Ha! Death trap!"</li>
            <li>"Are they killing you? They're killing you, aren't they?"</li>
            <li>"Silently killing you. Probably. If I had to guess."</li>
            <li>"Ah! Perhaps the turrets have found a way to use garrotes. That would explain the extremely... quiet killing. That I'm hearing."</li>
            <li>"If you're dying, but not dead, stomp once. If you're dead, obviously no stomps. And two stomps if you're not dead. Lemme just run through that again: If you're dying but not dead stomp just once. If you're dead, obviously you won't be stomping. And if you're not dead, give me two stomps."</li>
            <li>"You know, I'd tell you if I were dead. Courtesy. Mark of a civil society. So, just let me know."</li>
            <li>"Okay, that's long enough. Are you dead yet? How about now?"</li>
            `,
        'playing cards': `
            <li>"Ha! Was that your bullet-riddled body, flying out of the room? It was- aww, those were the crap turrets, weren't they? Yeah..."</li>
            <li>"Well, no matter. Because I'm STILL holding all the cards, and guess what: they're allll Full Houses! I've never played cards. Meaning to learn."</li>
            <li>"Anyway, new turrets. Not defective. Ace of fours. The best hand. Unbeatable, I imagine."</li>
            <li>"Puppet master! You're a puppet in a play, and I hold all the strings! And cards, still. Cards in one hand, strings in the other. And I'm making you dance like a puppet. Playing cards."</li>
            `,
        'Holmes versus Moriarty...': `
            <li>"Holmes versus Moriarty."</li>
            <li>"Aristotle versus Mashy-spike-plate!"</li>
            <li>"Spinny-blade-wall!"</li>
            <li>"YES YES! IN YOUR FACE! I GOT YO-ah, nope."</li>
            <li>"Stay still, please."</li>
            <li>"Alright, stop moving."</li>
            <li>"Ohhh. Almost got you there. Almost got ya there!"</li>
            <li>"Where'd you go?"</li>
            <li>"Where'd you go? Come back! Come back!"</li>
            <li>"No, seriously. Do come back. Come back, please."</li>
            <li>"Can't help but notice you're not coming back. Which is disappointing."</li>
            `,
        'FOOL!!': `
            <li>[if Chell comes back] Wheatley: "FOOL! You were a fool to come back, because I've trapped you again! Helpless. You're at my mercy. And I don't have any. You're at my nothing. You're at my lack of mercy."</li>
            <div><li>[Chell escapes again]</li></div>
            <li>"Ah, I see. Clever. Verrrrrrry clever."</li>
            <li>"Well... Good. Good. Finally, a nemesis worthy of my vast intellect."</li>
            <li>[big crash] "Did something break back there?"</li>
            <li>"Oh! Oh! Did it kill you? Oh, that would be amazing if it killed you."</li>
            <li>"Hello?"</li>
            `
    },

    'password?': {
        'A-A-A-A, um, A': `
            <li>[Chapter 1] Wheatley: "Okay don't panic! Allright? Stop panicking! I can still stop this. Ahh. Oh there's a password. It's fine. I'll just hack it. Not a problem... umm..."</li>
            <li>"A...A...A...A...A... Umm... A."</li>
            <li>"[BUZZER NOISE]"</li>
            <li>"Nope. Okay. A... A... A... A... A... C."</li>
            <li>"[BUZZER NOISE]"</li>
            <li>"No. Wait, did I do B? Do you have a pen? Start writing these down."</li>
            `,
        'The Hacking monologue': `
            <li>[Chapter 5] Wheatley: "Good news! I can use this equipment to shut down the neurotoxin system. It is, however, password protected. AH! Alarm bells! No. Don't worry. Not a problem for me."</li>
            <li>"You may as well have a little rest, actually, while I work on it."</li>
            <li>"Ok... Here we go..."</li>
            <li>"The hardest part of any hack is the figuring-out-how-to-start phase. That's always tricky. But... Let the games begin."</li>
            <li>"Allright, what have we got?"</li>
            <li>"A computer. Not a surprise. Expected. Check that off the list. Computer identified. Tick."</li>
            <li>"There is a box part here. Probably got some electronics in there."</li>
            <li>"And a monitor. Yes. That'll be important, I imagine. I'll keep my eye on that. In case something useful comes up like 'password identified' or something like that."</li>
            <li>"And there's a flat bit. Not sure what that is. But: noted. If anyone says to me is there a flat bit? Yes, there it is."</li>
            <li>"Spinning thing. Hmmm. Not sure."</li>
            <li>"The floor. What's the floor doing? What's the floor up to? Do you know what? It's holding everything up. The floor is important, holding everything up."</li>
            <li>"Pens. Might need those. Don't see any though. So..."</li>
            <li>"If we start making a list of things that aren't here, we could be here all night. You know, pens for instance. Let's stick with things we can see. Not stuff that isn't here."</li>
            <li>"Allright. Preparing to interface with the neurotoxin central control circuit. Begin: 'Ello, guv! Neurotoxin inspectah! Need to shut this place down for a moment! Here's me credentials. Shut yourself down. I am totally legit. From the board of international neurotoxin... um... observers. From the United... Arab Emirates. Hello."</li>
            <li>"Nothing. He's good. This one. He is good. I'm gonna need to break out the expert level hacking maneuvers now. You asked for it Mate."</li>
            <li>"'Caw! Caw!' Oh, look! There's a bird out here! A Lovely bird. Gorgeous plumage. Majestic. Won't be here long. A lovely bird like that. Once in a lifetime opportunity to see a lovely bird like that. Lovely plumage."</li>
            <li>"Be a shame to miss it, wouldn't it? Just for the old neurotoxin. Neurotoxin will still be here tomorrow. Whereas that bird will be gone any minute. Already got one talon off the branch. Gonna be gone."</li>
            <li>"Oh, it's fluttering its wings. Tell you what, mate. I'll come in there for a minute and cover you so you can have a look at this lovely bird! I'll come in. I'll do all the neurotoxin stuff. And then you come out here and look at this. Because it is lovely. It is lovely. You want to get out here fast. Seriously, my pleasure sounds are going to frighten the bird away any second. Ohhh, it's not working, is it? He's not interested in bloody birds."</li>
          `,
        'Should have looked into this earlier...': `
            <li>Wheatley: [Chapter 9, after Chell attaches a corrupted core:] "Are you trying to weigh me down? Think I'll fall out of the ceiling? Won't work. I'm not just quite brilliant, I'm also quite strong. Biggest muscle in my body: my brain. Second biggest: My muscles. So, it's not going to work. Clearly."</li>
            <li>"Did you put a virus in them? It's not going to work either. I've got a firewall, mate. Literally, actually, now that I look around. There appears to be literally a wall of fire around this place. Alarming. To say the least."</li>
            <li>"In fact, I'm going to have to take a break for a minute. A partial break during which I'll stop the facility from exploding while still throwing bombs at you."</li>
            <li>"Alright, then. Let us see... 'Vital maintenance protocols.' Wow, there are a lot of them. Should have looked into this earlier. Well, let's try this: [reading while typing] DO THEM. [failure buzzer]. Fair enough. Maybe it's a password."</li>
            <li>"A, A, A, A, A, A. [NNNT!] No. A, A, A, A, A, B. [NNNT!] Hold on, I've done both of these. Skip ahead. A, B, C... D, G, H. [DING!]"</li>
            <li>"Hah! It bloody worked! I hacked it! Hacked. Properly. Properly hacked. Ha ha ha!"</li>
            <li>"Now than, let's see what we got here. Ah! 'Reactor Core Emergency Heat Venting Protocols.' That's the problem right there, isn't it? 'Emergency'. You don't want to see 'emergency' flashing at you. Never good that, is it? Right. DELETE."</li>
            <li>Announcer: "Reactor Explosion Uncertainty Emergency Preemption Protocol initiated: This facility will self destruct in two minutes."</li>
            <li>Wheatley: "Undelete, undelete! Where's the undelete button?"</li>
            `
    },

    'GLaDOS reawakens': {
        "Oh, it's you.": `
        <li>[chapter 1] GLaDOS: "Oh... It's <i>you</i>."</li>
        <li>Wheatley: "You KNOW her?"</li>
        <li>GLaDOS: "It's been a long time. How have you been?"</li>
        <li>GLaDOS: "I've been really busy being dead. You know, after you MURDERED ME."</li>
        <li>Wheatley: "You did WHAT?"</li>
        <li>GLaDOS: "Okay. Look. We both said a lot of things that you're going to regret. But I think we can put our differences behind us. For science. You monster."</li>
        <li>GLaDOS: "I will say, though, that since you went to all the trouble of waking me up, you must really, really love to test."</li>
        <li>GLaDOS: "I love it too. There's just one small thing we need to take care of first."</li>
        `
    },

    'Goodbye!': {
        'goodbye': `
        <li>"[hums 'For He's A Jolly Good Fellow']"</li>
        <li>"Seriously, though. Goodbye."</li>
        `
    },

    'Roast session': {
        'Garbage': `
            <li>[test chamber 6] GLaDOS: "Oh, sorry. I'm still cleaning out the test chambers."</li>
            <li>"So sometimes there's still trash in them. Standing around. Smelling, and being useless."</li>
            <li>"Try to avoid the garbage hurtling towards you."</li>
            <li>[If the player picks up a trash item] "You don't have to test with the garbage. It's garbage."</li>
            <li>	"Press the button again."</li>
            <li>[after player completes test] "Remember before when I was talking about smelly garbage standing around being useless? That was a metaphor. I was actually talking about you. And I'm sorry. You didn't react at the time, so I was worried it sailed right over your head. Which would have made this apology seem insane. That's why I had to call you garbage a second time just now."</li>
            `,
        'Train Horn': `
            <li>GLaDOS: "Did you know that people with guilty consciences are more easily startled by loud noises--[train horn]--"</li>
            <li>"I'm sorry, I don't know why that went off. Anyway, just an interesting science fact."</li>
            `,
        'Turrets—remember them?': `
            <li>GLaDOS: "This next test involves turrets. You remember them, right? They're the pale spherical things that are full of bullets. Oh wait. That's you in five seconds. Good luck."</li>
            `,
        'That jumpsuit you are wearing...': `
            <li>"That jumpsuit you're wearing looks stupid. That's not me talking, it's right here in your file. On other people it looks fine, but right here a scientist has noted that on you it looks 'stupid.'"</li>
            <li>"Well, what does a neck-bearded old engineer know about fashion? He probably - Oh, wait. It's a she. Still, what does she know? Oh wait, it says she has a medical degree. In fashion! From France!"</li>
            `
    },

    'More testing': {
        "...methodically knocking people's hats off...": `
            <li>"Ohhh, no. The turbines again. I have to go. Wait. This next test DOES require some explanation. Let me give you the fast version."</li>
            <li>"[fast gibberish]"</li>
            <li>"There. If you have any questions, just <a href="https://i1.theportalwiki.net/img/f/f9/GLaDOS_sp_a2_fizzler_intro05_slowed_down.ogg">remember what I said in slow motion</a>. Test on your own recognizance, I'll be right back."</li>
            `,
        'Aerial Faith Plate': `
            <li>[test chamber 5] GLaDOS: "This next test involves the Aperture Science Aerial Faith Plate. It was part of an initiative to investigate how well test subjects could solve problems when they were catapulted into space. Results were highly informative: They could not. Good luck!"</li>
            <li>[test chamber 6] GLaDOS: "Let's see what the next test is. Oh. Advanced Aerial Faith Plates."</li>
            <li>"Well. Have fun soaring through the air without a care in the world."</li>
            <li>"<i>I</i> have to go to the wing that was made entirely of glass and pick up fifteen acres of broken glass. By myself."</li>
            <li>[test chamber 9, Chell jumps on faith plate, flies past Wheatley] Wheatley: "Hey! Hey! It's me! I'm okay!"</li>
            <li>GLaDOS: "Well, I'm back. The Aerial Faith Plate in here is sending a distress signal."</li>
            <li>GLaDOS: "You broke it, didn't you."</li>
            <li>GLaDOS: "There. Try it now."</li>
            <li>Wheatley: [Chell flies by again] "You'll never believe what happened! There I was, just lying there, you thought I was done for, but --"</li>
            <li>GLaDOS: "Hmm. This Plate must not be calibrated to someone of your... generous... ness. I'll add a few zeros to the maximum weight."</li>
            <li>GLaDOS: "You look great, by the way. Very healthy."</li>
            <li>GLaDOS: "Try it now."</li>
            <li>Wheatley: "A bloody bird! Right? Couldn't believe it either. And then the bird--"</li>
            <li>GLaDOS: "You seem to have defeated its load-bearing capacity. Well done. I'll just lower the ceiling."</li>
            <li>GLaDOS: "Look at you. Sailing through the air majestically. Like an eagle. Piloting a blimp."</li>
            `
    },

    'The Fall': {
        "I'm a POTATO":`
            <li>GLaDOS: "Oh. Hi."</li>
            <li>"So. How are you holding up?"</li>
            <li>"BECAUSE I'M A POTATO."</li>
            <li>"[clap clap clap]"</li>
            <li>"Oh, good. My slow clap processor made it into this thing. So we have that."</li>
            `,
        'Mantis men': `
            <li>Cave Johnson: "Your test assignment will vary, depending on the manner in which you have bent the world to your will."</li>
            <li>"Those of you helping us test the repulsion gel today, just follow the blue line on the floor."</li>
            <li>"Those of you who volunteered to be injected with praying mantis DNA, I've got some good news and some bad news."</li>
            <li>"Bad news is we're postponing those tests indefinitely. Good news is we've got a much better test for you: fighting an army of mantis men. Pick up a rifle and follow the yellow line. You'll know when the test starts."</li>
            `,
        'repulsion gel': `
            <li>Cave Johnson: "Alright, let's get started. This first test involves something the lab boys call 'repulsion gel.'"</li>
            <li>"You're not part of the control group, by the way. You get the gel. Last poor son of a gun got blue paint. Hahaha. All joking aside, that did happen - broke every bone in his legs. Tragic. But informative. Or so I'm told."</li>
            <li>"For this next test, we put nanoparticles in the gel. In layman's terms, that's a billion little gizmos that are gonna travel into your bloodstream and pump experimental genes and RNA molecules and so forth into your tumors."</li>
            <li>"Now, maybe you don't have any tumors. Well, don't worry. If you sat on a folding chair in the lobby and weren't wearing lead underpants, we took care of that too."</li>
            <li>"Oh, in case you got covered in that repulsion gel, here's some advice the lab boys gave me: DO NOT get covered in the repulsion gel."</li>
            <li>"We haven't entirely nailed down what element it is yet, but I'll tell you this: it's a lively one, and it does NOT like the human skeleton."</li>
            `,
        "Cave's crazy experiments": `
            <li>Cave Johnson: "Just a heads-up: That coffee we gave you earlier had fluorescent calcium in it so we can track the neuronal activity in your brain. There's a slight chance the calcium could harden and vitrify your frontal lobe. Anyway, don't stress yourself thinking about it. I'm serious. Visualizing the scenario while under stress actually triggers the reaction."</li>
            <li>"Now, if you're part of Control Group Kepler-Seven, we implanted a tiny microchip about the size of a postcard into your skull. Most likely you've forgotten it's even there, but if it starts vibrating and beeping during this next test, let us know, because that means it's about to hit five hundred degrees, so we're gonna need to go ahead and get that out of you pretty fast."</li>
            <li>"Alright, this next test may involve trace amounts of time travel. So, word of advice: If you meet yourself on the testing track, don't make eye contact. Lab boys tell me that'll wipe out time. Entirely. Forward and backward! So do both of yourselves a favor and just let that handsome devil go about his business."</li>
            <li>"If you've cut yourself at all in the course of these tests, you might have noticed that your blood is pure gasoline. That's normal. We've been shooting you with an invisible laser that's supposed to turn blood into gasoline, so all that means is, it's working."</li>
            <li>"Just a heads up: We're gonna have a superconductor turned up full blast and pointed at you for the duration of this next test. I'll be honest, we're throwing science at the wall here to see what sticks. No idea what it'll do. Probably nothing. Best-case scenario, you might get some superpowers. Worst case, some tumors, which we'll cut out."</li>
            <li>"If you're allergic to peanuts, you might want to tell somebody now, because this next test may turn your blood into peanut water for a few minutes. On the bright side, if we can make this happen, they're gonna have to invent a new type of Nobel Prize to give us, so hang in there."</li>
            <li>"The average human male is about sixty percent water. Far as we're concerned, that's a little extravagant. So if you feel a bit dehydrated in this next test, that's normal. We're gonna hit you with some jet engines, and see if we can't get you down to twenty or thirty percent."</li>
            <li>"All right. We're working on a little teleportation experiment. Now, this doesn't work with all skin types, so try to remember which skin is yours, and if it doesn't teleport along with you, we'll do what we can to sew you right back into it."</li>
            `,
        'WHY NOT??': `
            <li>"Science isn't about WHY. It's about WHY NOT. Why is so much of our science dangerous? Why not marry safe science if you love it so much. In fact, why not invent a special safety door that won't hit you on the butt on the way out, because you are fired."</li>
            <li>"Not you, test subject, you're doing fine."</li>
            <li>"Yes, you. Box. Your stuff. Out the front door. Parking lot. Car. Goodbye."</li>
            `,
        '$60': `
            <li>Cave Johnson: "Greetings, friend. I'm Cave Johnson, CEO of Aperture Science - you might know us as a vital participant in the 1968 Senate Hearings on missing astronauts. And you've most likely used one of the many products we invented. But that other people have somehow managed to steal from us. Black Mesa can eat my bankrupt--"</li>
            <li>Caroline: "Sir, the testing?"</li>
            <li>Cave Johnson: "Right. Now, you might be asking yourself, 'Cave, just how difficult are these tests? What was in that phone book of a contract I signed? Am I in danger?'"</li>
            <li>"Let me answer those questions with a question: Who wants to make sixty dollars? Cash."</li>
            <li>"The testing area's just up ahead. The quicker you get through, the quicker you'll get your sixty bucks."</li>
            <li>"If you're interested in an additional sixty dollars, flag down a test associate and let 'em know. You could walk out of here with a hundred and twenty weighing down your bindle if you let us take you apart, put some science stuff in you, then put you back together good as new."</li>
            <li>"In case you're interested, there's still some positions available for that bonus opportunity I mentioned earlier. Again: all you gotta do is let us disassemble you. We're not banging rocks together here. We know how to put a man back together."</li>
            <li>"So that's a complete reassembly. New vitals. Spit-shine on the old ones. Plus we're scooping out tumors. Frankly, you oughtta be paying us."</li>
            <li>"Thank you - I can't believe I'm thanking these people - for staggering your way through Aperture Science's propulsion gel testing. You've made some real contributions to society for a change, and for that, humanity is grateful."</li>
            <li>"If you had any belongings, please pick them up now. We don't want old newspapers and sticks cluttering up the building."</li>
            <li>"For many of you, I realize 60 dollars is an unprecedented windfall, so don't go spending it all on... I don't know. Caroline, what do these people buy? Tattered hats? Beard dirt?"</li>
            `
    },

    'Wheatley Labrotories': {
        'Paradox': `
            <li>GLaDOS: [chapter 7] "Wait! I've got an idea!"</li>
            <li>GLaDOS: "That poster! Go look at it for a second, would you?"</li>
            <li>GLaDOS: "Paradoxes."</li>
            <li>GLaDOS: "No A.I. can resist thinking about them."</li>
            <li>GLaDOS: "I know how we can BEAT him."</li>
            <li>GLaDOS: "If you can get me in front of him, I'll fry every circuit in that little idiot's head."</li>
            <li>GLaDOS: "As long as I don't listen to what I'm saying, I should be okay."</li>
            <li>GLaDOS: "Probably."</li>
            <li>GLaDOS: "Okay, so it's not the most watertight plan to go confront an omnipotent power-mad A.I. with."</li>
            <li>GLaDOS: "Still. It's a better plan than exploding. Marginally."</li>
            <li>Wheatley: [chapter 8, speaking to Frankenturrets] "For god's sake, you're BOXES with LEGS! It is literally your only purpose! Walking onto buttons! How can you not do the one thing you were designed for?"</li>
            <li>Wheatley: "Warmer. Warrrrmer. Boiling hot. Boiling--okay, colder. Ice cold. Arctic. Very very very cold LOOK JUST GET ON THE BUTTON!"</li>
            <li>Wheatley: "Oh, that's funny, is it? Because we've been at this twelve hours and you haven't solved it either, so I don't know why you're laughing."</li>
            <li>Wheatley: "You've got one hour! Solve it!" [Wheatley leaves]</li>
            <li>GLaDOS: "Solve his puzzle for him. When he comes back, I'll hit him with a paradox." [Chell solves test]</li>
            <li>Wheatley: "Ha ha, YES! I knew you'd solve it!"</li>
            <li>Wheatley: [notices Chell and GLaDOS] "Oh."</li>
            <li>Wheatley: "Hello."</li>
            <li>GLaDOS: "Alright. Paradox time."</li>
            <li>GLaDOS: "This. Sentence. Is. FALSE don't think about it don't think about it..."</li>
            <li>Wheatley: "Um. 'TRUE'. I'll go 'true'."</li>
            <li>Wheatley: "Huh. That was easy."</li>
            <li>Wheatley: "I'll be honest, I might have heard that one before, though. Sort of cheating."</li>
            <li>GLaDOS: "It's a paradox! There IS no answer."</li>
            <li>GLaDOS: "Look!"</li>
            <li>GLaDOS: "This place is going to blow up if I don't get back in my body!"</li>
            <li>Wheatley: "Ahhhhhh. 'FALSE'. I'll go 'false'."</li>
            <li>Announcer: "Explosion imminent. Evacuate the facility immediately."</li>
            <li>Wheatley: "Hold on! I thought I fixed that."</li>
            <li>Announcer: "Warning. Reactor core is at critical temperature." [shorts out]</li>
            <li>Wheatley: "There. Fixed."</li>
            <li>Wheatley: "Hey, it is GREAT seeing you guys again. Seriously. It turns out I'm a little short on test subjects right now. So this works out PERFECT."</li>
            <li>Wheatley: [opens door] "Annnnd off we go!"</li>
            <li>Wheatley: "So... you're gonna test. I'm gonna watch. And everything is gonna be JUST... FINE."</li>
            <li>Announcer: "Warning: Core overheating. Nuclear meltdown imminent."</li>
            <li>Wheatley: "SHUT UP!"</li>
            <li>GLaDOS: "I think we're in trouble."</li>
            <li>GLaDOS: "Alright. So my paradox idea didn't work."</li>
            <li>GLaDOS: "And it almost killed me."</li>
            <li>GLaDOS: "Luckily, by the looks of things he knows as much about test building as he does about logical contradictions."</li>
            `,
        'TEST': `
            <li>[chapter 8] Wheatley: "Designed this test myself. It's a little bit difficult."</li>
            <li>"Notice the moat area. Very deadly. Extremely dangerous. Eventually. Not at the moment. Still working on it, still working on it."</li>
            <div><li>If Chell stands around:</li></div>
            <li>    Wheatley: "Impossible as it is to imagine, there actually is a solution. Devilishly hidden."</li>
            <li>    "I'll give you a hint. Button. That's all I'm gonna say. One word. Button."</li>
            <li>    "Go on."</li>
            <li>    "Go on!"</li>
            <li>    "Come on, solve it!"</li>
            <li>    "Sollllve it..."</li>
            <li>    "SOLVE IT! Commanding voice..."</li>
            <li>[Chell presses button and solves test] "Ohhhhh, yes. Ohhhh. Well done."</li>
            <li>"Ohhhhhhh, that's tremendous."</li>
            <div><li>If Chell stands around again:</li></div>
            <li>    "Not done yet. You've still got to get through the door. Need to get through the door there."</li>
            <li>    "You've still got to get through the door. Please. Need to get through that door there."</li>
            <li>    "Door?"</li>
            <li>    "Finish it..."</li>
            <li>[Chell walks through door] "Oh, that felt really good."</li>
            <li>"Here's an idea, since making tests is difficult--why don't you just keep solving THIS test. Same one. And I can just... watch you solve it. Yes. That sounds much easier."</li>
            <li>"Here we go! Now do it again!"</li>
            <div><li>Chell stands around:</li></div>
            <li>    "Go on."</li>
            <li>    "Come on, you've already solved it."</li>
            <li>    "Come on, you've already solved it once. Less than a minute ago you solved this puzzle. Do it again, please."</li>
            <li>    "One minute ago. Less than one minute ago you solved this puzzle. Now you're having problems."</li>
            <li>    "You just beat this test. Literally twenty seconds ago."</li>
            <li>[Chell hits button again] "Annnnnnnnd... Nothing."</li>
            <li>"Alright, can't blame me for trying. Okay... New tests, new tests... there's gotta be some tests around here somewhere."</li>
            <li>"Oh! Here we go..."</li>
            `,
        'help?': `
            <li>[chapter 8] Wheatley: "Yeah... Made this test myself. Out of some smaller tests. That I found. Lying around."</li>
            <li>Wheatley: "Jammed 'em all together. Buttons. Got funnels. Bottomless pits are involved. It's got it all, it's absolute dynamite."</li>
            <li>GLaDOS: [after Chell enters test chamber] "I'd love to help you solve the tests. But I can't."</li>
            <li>GLaDOS: "Sorry."</li>
            <li>GLaDOS: "You're on your own."</li>
            <li>Wheatley: "Alright, this is taking too long. I'll just tell you how to solve the test."</li>
            <li>Wheatley: "You see that button over there? You just need to ARRRRRGH!" [electrocution]</li>
            <li>GLaDOS: "And that's why I can't help you solve these tests."</li>
            <li>Wheatley: "[tired breathing] Nevermind. Nevermind. Solve it yourself. You're on your own."</li>
            <li>Wheatley: [after Chell solves test] "Oh! Yes. Well done."</li>
            <li>GLaDOS: "Thanks!"</li>
            <li>GLaDOS: "All we had to do was pull that lever."</li>
            <li>Wheatley: "What? No, you pressed that bAGGGHHHHHH" [electrocuted again]</li>
            <li>GLaDOS: "Heh heh heh heh heh..."</li>
            <li>GLaDOS: "I know we're in a lot of trouble and probably about to die."</li>
            <li>GLaDOS: "But that was worth it."</li>
            `
    },

    'Announcer lines, Chapter 1': {
        'Relaxation Chamber': `
            <li>"Good morning. You have been in suspension for -FIFTY- days. In compliance with state and federal regulations, all testing candidates in the Aperture Science Extended Relaxation Center must be revived periodically for a mandatory physical and mental wellness exercise."</li>
            <li>"You will hear a buzzer. When you hear the buzzer, look up at the ceiling. [BUZZER]"</li>
            <li>"Good. You will hear a buzzer. When you hear the buzzer, look down at the floor. [BUZZER]"</li>
            <li>"Good. This completes the gymnastic portion of your mandatory physical and mental wellness exercise."</li>
            <li>"There is a framed painting on the wall. Please go stand in front of it."</li>
            <li>"This is art. You will hear a buzzer. When you hear the buzzer, stare at the art. [BUZZER]"</li>
            <li>"You should now feel mentally reinvigorated. If you suspect staring at art has not provided the required intellectual sustenance, reflect briefly on this classical music. [MUSIC INTERRUPTED BY BUZZER]"</li>
            <li>"Good. Now please return to your bed."</li>
            `,
        'The Courtesy Call': `
            <li>"Good morning. You have been in suspension for -nine nine nine nine nine... nine ni (continues repeating behind the following:)- This courtesy call is to inform you that all test subjects should vacate the Enrichment Center immediately. Any test subject not emerging from suspension at this time will be assumed to have exercised his or her right to remain in extended relaxation, for the duration of the destruction of this facility. If you have questions or concerns regarding this policy, or if you require a Spanish-language version of this message, feel free to take a complimentary piece of stationery from the desk drawer in front of you, and write us a letter. Good luck."</li>
            `,
        'Aperture Science Material Emancipation Grill': `
            <li>"You have just passed through an Aperture Science Material Emancipation Grill, which vaporizes most Aperture Science equipment that touches it."</li>
            <li>"If you feel liquid running down your neck, relax, lie on your back, and apply immediate pressure to your temples."</li>
            <li>"You are simply experiencing a rare reaction in which the Material Emancipation Grill may have emancipated the ear tubes inside your head."</li>
            `,
        'lethal military androids': `
            <li>"Some emergency testing may require prolonged interaction with lethal military androids. Rest assured that all lethal military androids have been taught to read and provided with one copy of the Laws of Robotics. To share."</li>
            <div><li>[test subject completes test]</li></div>
            <li>"Good. If you feel that a lethal military android has not respected your rights as detailed in the Laws of Robotics, please note it on your self-reporting form. A future Aperture Science Entitlement Associate will initiate the appropriate grievance-filing paperwork."</li>
            `,
        'misc lines (unordered)': `
            <li>"We are currently experiencing technical difficulties due to circumstances of potentially apocalyptic significance beyond our control."</li>
            <li>"If the Earth is currently governed by a manner of animal-king, sentient cloud, or other governing body that either refuses to or is incapable of listening to reason, th- [RECORDING SHORTS OUT]"</li>
            <li>"This next test is very dangerous. To help you remain tranquil in the face of almost certain death, smooth jazz will be deployed in three. Two. One. [SMOOTH JAZZ]"</li>
            <li>"If the Enrichment Center is currently being bombarded with fireballs, meteorites, or other objects from space, please avoid unsheltered testing areas wherever a lack of shelter from space-debris DOES NOT appear to be a deliberate part of the test."</li>
            <li>"Great work! Because this message is prerecorded, any observations related to your performance are speculation on our part. Please disregard any undeserved compliments."</li>
            <li>"This next test applies the principles of momentum to movement through portals. If the laws of physics no longer apply in the future, God help you."</li>
            <li>"If you are a non-employee who has discovered this facility amid the ruins of civilization, welcome! And remember: Testing is the future, and the future starts with you."</li>
            <li>"Good work getting this far, future-starter! That said, if you are simple-minded, old, or irradiated in such a way that the future should not start with you, please return to your primitive tribe and send back someone better-qualified for testing."</li>
            `,
    },
    'Cores': {
        'Curiosity Core': 
        "<li>\"Who are you?\"</li><li>\"What is that?\"</li><li>\"Oh, what's that?\"</li><li>\"What's that?\"</li><li>\"What is THAT?\"</li><li>\"Ooh, that thing has numbers on it.\"</li><li>\"Hey, look at THAT thing! No, that other thing.\"</li><li>\"Ewww, what's wrong with your legs?\"</li><li>\"Where are we going?\"</li><li>\"Are you coming back?\"</li><li>\"Oh hey, you're the lady from the test! Hi!\"</li><li>\"What's that noise?\"</li><li>\"Is that a gun?\"</li><li>\"Where are we going?\"</li><li>[next to incinerator] \"Ohh, what's in here?\"</li><li>\"Do you smell something burning?\"</li><li>\"[Scream]\"</li>",
        'Intelligence Core': 
        "<li>\"One 18.25 ounce package chocolate cake mix.\"</li><li>\"One can prepared coconut pecan frosting.\"</li><li>\"Three slash four cup vegetable oil.\"</li><li>\"Four large eggs. One cup semi-sweet chocolate chips.\"</li><li>\"Three slash four cup butter or margarine.\"</li><li>\"One and two third cups granulated sugar.\"</li><li>\"Two cups all-purpose flower.\"</li><li>\"Don't forget garnishes such as:\"</li><li>\"Fish-shaped crackers.\"</li><li>\"Fish-shaped candies.\"</li><li>\"Fish-shaped dirt.\"</li><li>\"Fish-shaped ethyl benzene.\"</li><li>\"Pull and peel licorice.\"</li><li>\"Fish-shaped volatile organic compounds and sediment-shaped sediment.\"</li><li>\"Candy coated peanut butter pieces. Shaped like fish.\"</li><li>\"One cup lemon juice.\"</li><li>\"Alpha resins.\"</li><li>\"Unsaturated polyester resin.\"</li><li>\"Fiberglass surface resins.\"</li><li>\"And volatile malted milk impoundments.\"</li><li>\"Nine large egg yolks.\"</li><li>\"Twelve medium geosynthetic membranes.\"</li><li>\"One cup granulated sugar.\"</li><li>\"An entry called 'How To Kill Someone With Your Bare Hands'.\"</li><li>\"Two cups rhubarb, sliced.\"</li><li>\"Two slash three cup granulated rhubarb.\"</li><li>\"One tablespoon all-purpose rhubarb.\"</li><li>\"One teaspoon grated orange rhubarb.\"</li><li>\"Three tablespoons rhubarb, on fire.\"</li><li>\"One large rhubarb.\"</li><li>\"One cross borehole electromagnetic imaging rhubarb.\"</li><li>\"Two tablespoons rhubarb juice.\"</li><li>\"Adjustable aluminum head positioner.\"</li><li>\"Slaughter electric needle injector.\"</li><li>\"Cordless electric needle injector.\"</li><li>\"Injector needle driver.\"</li><li>\"Injector needle gun.\"</li><li>\"Cranial caps.\"</li><li>\"And it contains proven preservatives, deep penetration agents, and gas and odor control chemicals.\"</li>",
        'Party Escort Bot': '<li>"Thank you for assuming the party escort submission position."</li>',
        'Space Core': 
        "<li>\"What's your favorite thing about space? Mine is space.\"</li><li>\"Space.\"</li><li>\"Gotta go to space. Lady. Lady.\"</li><li>\"Oo. Oo. Oo. Lady. Oo. Lady. Oo. Let's go to space.\"</li><li>\"Space going to space can't wait.\"</li><li>\"Space...\"</li><li>\"Space. Trial. Puttin' the system on trial. In space. Space system. On trial. Guilty. Of being in space! Going to space jail!\"</li><li>\"Dad! I'm in space! [low-pitched 'space' voice] I'm proud of you, son. [normal voice] Dad, are you space? [low-pitched 'space' voice] Yes. Now we are a family again.\"</li><li>\"Space space wanna go to space yes please space. Space space. Go to space.\"</li><li>\"Space space wanna go to space\"</li><li>\"Space space going to space oh boy\"</li><li>\"Ba! Ba! Ba ba ba! Space! Ba! Ba! Ba ba ba!\"</li><li>\"Oh. Play it cool. Play it cool. Here come the space cops.\"</li><li>\"Help me, space cops. Space cops, help.\"</li><li>\"Going to space going there can't wait gotta go. Space. Going.\"</li><li>\"Better buy a telescope. Wanna see me. Buy a telescope. Gonna be in space.\"</li><li>\"Space. Space.\"</li><li>\"I'm going to space.\"</li><li>\"Oh boy.\"</li><li>\"Yeah yeah yeah okay okay.\"</li><li>\"Space. Space. Gonna go to space.\"</li><li>\"Space. Space. Go to space.\"</li><li>\"Yes. Please. Space.\"</li><li>\"Ba! Ba! Ba ba ba! Space!\"</li><li>\"Ba! Ba! Ba ba ba! Space!\"</li><li>\"Gonna be in space.\"</li><li>\"Space.\"</li><li>\"Space.\"</li><li>\"Ohhhh, space.\"</li><li>\"Wanna go to space. Space.\"</li><li>\"[humming]\"</li><li>\"Let's go - let's go to space. Let's go to space.\"</li><li>\"I love space. Love space.\"</li><li>\"Atmosphere. Black holes. Astronauts. Nebulas. Jupiter. The Big Dipper.\"</li><li>\"Orbit. Space orbit. In my spacesuit.\"</li><li>\"Space...\"</li><li>\"Ohhh, the Sun. I'm gonna meet the Sun. Oh no! What'll I say? 'Hi! Hi, Sun!' Oh, boy!\"</li><li>\"Look, an eclipse! No. Don't look.\"</li><li>\"Come here, space. I have a secret for you. No, come closer.\"</li><li>\"Space space wanna go to space\"</li><li>\"Wanna go to -- wanna go to space\"</li><li>\"Space wanna go wanna go to space wanna go to space\"</li><li>\"I'm going to space.\"</li><li>\"Space!\"</li><li>\"Space!\"</li><li>\"Hey hey hey hey hey!\"</li><li>\"Hey.\"</li><li>\"Hey.\"</li><li>\"Hey.\"</li><li>\"Hey.\"</li><li>\"Hey.\"</li><li>\"Hey lady.\"</li><li>\"Lady.\"</li><li>\"Space!\"</li><li>\"Lady.\"</li><li>\"Oh I know! I know I know I know I know I know - let's go to space!\"</li><li>\"Oooh! Ooh! Hi hi hi hi hi. Where we going? Where we going? Hey. Lady. Where we going? Where we going? Let's go to space!\"</li><li>\"Lady. I love space. I know! Spell it! S P... AACE. Space. Space.\"</li><li>\"I love space.\"</li><li>\"Hey lady. Lady. I'm the best. I'm the best at space.\"</li><li>\"Oh oh oh oh. Wait wait. Wait I know. I know. I know wait. Space.\"</li><li>\"Wait wait wait wait. I know I know I know. Lady wait. Wait. I know. Wait. Space.\"</li><li>\"Gotta go to space.\"</li><li>\"Gonna be in space.\"</li><li>\"Oh oh oh ohohohoh oh. Gotta go to space.\"</li><li>\"Space. Space. Space. Space. Comets. Stars. Galaxies. Orion.\"</li><li>\"Are we in space yet? What's the hold-up? Gotta go to space. Gotta go to SPACE.\"</li><li>\"Going to space.\"</li><li>\"Yeah, yeah, yeah, I'm going. Going to space.\"</li><li>\"Love space. Need to go to space.\"</li><li>\"Space space space. Going. Going there. Okay. I love you, space.\"</li><li>\"Space.\"</li><li>\"So much space. Need to see it all.\"</li><li>\"You are the farthest ever in space. Why me, space? Because you are the best. I'm the best at space? Yes.\"</li><li>\"Space Court. For people in space. Judge space sun presiding. Bam. Guilty. Of being in space. I'm in space.\"</li><li>\"Please go to space.\"</li><li>\"Space.\"</li><li>\"Wanna go to space.\"</li><li>\"(excited gasps)\"</li><li>\"Gotta go to space. Yeah. Gotta go to space.\"</li><li>\"Hmmm. Hmmmmmm. Hmm. Hmmmmm. Space!\"</li><li>\"Hey lady.\"</li><li>\"Hey.\"</li><li>\"Lady.\"</li><li>\"Hey lady. Lady.\"</li><li>\"Hey.\"</li><li>\"Lady.\"</li><li>\"Ohmygodohmygodohmygod! I'm in space!\"</li><li>\"Space? SPACE!\"</li><li>\"I'm in space.\"</li><li>\"I'm in space.\"</li><li>\"Where am I? Guess. Guess guess guess. I'm in space.\"</li><li>\"There's a star. There's another one. Star. Star star star. Star.\"</li><li>\"Getting bored of space.\"</li><li>\"Bam! Bam bam bam! Take that, space.\"</li><li>\"Are we in space?\"</li><li>\"We are?\"</li><li>\"Oh oh oh. This is space! I'm in space!\"</li><li>\"We made it we made it we made it. Space!\"</li><li>\"Earth.\"</li><li>\"Wanna go to earth.\"</li><li>\"Wanna go to earth wanna go to earth wanna go to earth wanna go to earth. Wanna go to earth.\"</li><li>\"Wanna go home.\"</li><li>\"Wanna go home wanna go home wanna go home wanna go home.\"</li><li>\"Earth earth earth.\"</li><li>\"Don't like space. Don't like space.\"</li><li>\"It's too big. Too big. Wanna go home. Wanna go to earth.\"</li><li>\"SPAAACCCCCE!\"</li><li>\"SPAAACE!\"</li><li>\"YEEEHAAAAAW!\"</li><li>\"Ah!\"</li>",
        'Adventure Core': 
        "<li>\"QUICK: WHAT'S THE SITUATION? Oh, hey, hi pretty lady. My name's Rick. So, you out having a little adventure?\"</li><li>\"What, are you fighting that guy? You got that under control? You know, because, looks like there's a lot of stuff on fire...\"</li><li>\"Hey, a countdown clock! Man, that is trouble. Situation's looking pretty ugly. For such a beautiful woman. If you don't mind me saying.\"</li><li>\"I don't want to scare you, but, I'm an Adventure Sphere. Designed for danger. So, why don't you go ahead and have yourself a little lady break, and I'll just take it from here.\"</li><li>\"Here, stand behind me. Yeah, just like that. Just like you're doing. Things are about to get real messy.\"</li><li>\"Going for it yourself, huh? All right, angel. I'll do what I can to cover you.\"</li><li>\"Doesn't bother me. I gotta say, the view's mighty nice from right here.\"</li><li>\"Man, that clock is moving fast. And you are beautiful. Always time to compliment a pretty lady. All right, back to work. Let's do this.\"</li><li>\"I'll tell ya, it's times like this I wish I had a waist so I could wear all my black belts. Yeah, I'm a black belt. In pretty much everything. Karate. Larate. Jiu Jitsu. Kick punching. Belt making. Taekwondo... Bedroom.\"</li><li>\"I am a coiled spring right now. Tension and power. Just... I'm a muscle. Like a big arm muscle, punching through a brick wall, and it's hitting the wall so hard the arm is catching on fire. Oh yeah.\"</li><li>\"I probably wouldn't have let things get this far, but you go ahead and do things your way.\"</li><li>\"Tell ya what, why don't you put me down and I'll make a distraction.\"</li><li>\"All right. You create a distraction then, and I'll distract him from YOUR distraction.\"</li><li>\"Do you have a gun? Because I should really have a gun. What is that thing you're holding?\"</li><li>\"How about a knife, then? You keep the gun, I'll use a knife.\"</li><li>\"No knife? That's fine. I know all about pressure points.\"</li><li>\"So, when you kill that guy, do you have a cool line? You know, prepared? Tell you what: Lemme help you with that while you run around.\"</li><li>\"Okay, let's see. Cool line... He's... big. He's... just hangin' there. Okay. Yeah, all right, here we go: 'Hang around.' That might be too easy.\"</li><li>\"Hang ten?' That might work if there were ten of him. Do you think there might be nine more of this guy somewhere?\"</li><li>\"All right, you know what, it's gonna be best if you can get him to say something first. It's just better if I have a set-up.\"</li><li>\"Here's the plan: Get him to say, 'You two have been a thorn in my side long enough.' Then tell your pretty ears to stand back, because I am going to zing him into the stone age.\"</li><li>\"Did you hear that? I think something just exploded. Man, we are in a lot of danger. This is like Christmas. No, it's better than Christmas. This should be its own holiday. Explosion Day!\"</li><li>\"Happy Explosion Day, gorgeous.\"</li><li>\"Get dirty with this robot! This robot owes you money! This robot owes! You! Money!\"</li><li>\"Here, let me put on some adventure music.\"</li><li>\"Dun-dun-dun-dun-dun-dun-DUN! DUN DUN! Dunna-dunna-na-dunna-na-DUN! DUN DUN! nananaDUNDUNDUN dun-dun-dun-dun-dun-dun...\"</li><li>\"Dun-dun-dun-dun-dun-dun-action and adventure-dunna-dunna-na-dunna-na-playing by our own rules-nanana-hanging by our fingers from a mountain-dun-dun-dun-dun-dun-dun...\"</li><div><li>The following lines are not used in the game:</li></div><li>\"Don't forget! Thorn! Side!\"</li><li>\"Yeah? Well this thorn... is about to take you down.' Man, that sounded a whole lot better in my head.\"</li><li>\"QUICK: WHAT'S THE SITUATION? Oh, hello angel. I guess I must have died and gone to heaven. Name's Rick. So, you out having yourself a little adventure?\"</li><li>\"Here's the plan: Get him to say, 'You two have been a thorn in my side long enough.' Then tell your pretty ears to stand back, because I am going to zing him into space.\"</li><li>\"Yeah? Well this thorn... is about to take you down.' Oh yeah!\"</li><li>\"Okay, have it your way. What, are you fighting that guy? You got that under control there? Cuz it looks like there's a lot of stuff on fire...\"</li><li>\"Kick him! Or punch him. You're the boss, dimples.\"</li><li>\"Yeah! Nice!\"</li><li>\"You messed with the wrong woman!\"</li><li>\"Yeah! How'd you like that?\"</li><li>\"How's that taste, pal?\"</li><li>\"Keep it up, baby! You're creamin' him!\"</li><li>\"Duck and weave, duck and weave! Ohh, the sweet science.\"</li><li>\"You're doing great!\"</li><li>\"Come on, sweetie! He's got a glass jaw! He's got a glass everything! This guy's a china cabinet!\"</li><li>\"This ain't Marquis of Queensberry Rules, sweetie! Pour on the mustard!\"</li><li>\"Shake it off! Shake it off!\"</li><li>\"Pfff. I guess.\"</li><li>\"Pff. Whatever.\"</li><li>\"Oh, shut up!\"</li><li>\"Nobody cares, four eyes.\"</li><li>\"Tell it to the bad guy. Maybe you'll make him so bored his brain'll explode.\"</li><li>\"You know who found that interesting? Nobody. That didn't affect anybody's life in any way whatsoever. Life would be exactly the same if you hadn't said anything.\"</li><li>\"You ever notice how nobody stops what they're doing to listen? We don't care.\"</li><li>\"Say one useful thing. One. I dare you. I will give you a hundred dollars if you say one thing remotely applicable to anything at all.\"</li><li>\"Oh shut up!\"</li><li>\"There's nothing in space! That's why it's space!\"</li><li>\"Oh, really? Space? Really? You should have said something! We had no idea!\"</li><li>\"You know what I hope's in space? Fire. I hope you go to space and catch on fire.\"</li>",
        'Fact Core': 
        "<li>\"The situation you are in is very dangerous.\"</li><li>\"The likelihood of you dying within the next five minutes is eighty-seven point six one percent.\"</li><li>\"The likelihood of you dying violently within the next five minutes is eighty-seven point six one percent.\"</li><li>\"You are about to get me killed.\"</li><li>\"We will both die because of your negligence.\"</li><li>\"This is a bad plan. You will fail.\"</li><li>\"He will most likely kill you, violently.\"</li><li>\"He will most likely kill you.\"</li><li>\"You will be dead soon.\"</li><li>\"This situation is hopeless.\"</li><li>\"You are going to die in this room.\"</li><li>\"You could stand to lose a few pounds.\"</li><li>\"The Fact Sphere is the most intelligent sphere.\"</li><li>\"The Fact Sphere is the most handsome sphere.\"</li><li>\"The Fact Sphere is incredibly handsome.\"</li><li>\"The Fact Sphere is always right.\"</li><li>\"The Adventure Sphere is a blowhard and a coward.\"</li><li>\"The Space Sphere will never go to space.\"</li><li>\"You will never go into space.\"</li><li>\"Fact: Space does not exist.\"</li><li>\"Spheres that insist on going into space are inferior to spheres that don't.\"</li><li>\"The Fact Sphere is a good person, whose insights are relevant.\"</li><li>\"The Fact Sphere is a good sphere, with many friends.\"</li><li>\"Whoever wins this battle is clearly superior, and will earn the allegiance of the Fact Sphere.\"</li><li>\"The Fact Sphere is not defective. Its facts are wholly accurate and very interesting.\"</li><li>\"Twelve. Twelve. Twelve. Twelve. Twelve. Twelve. Twelve. Twelve. Twelve. Twelve.\"</li><li>\"Pens. Pens. Pens. Pens. Pens. Pens. Pens.\"</li><li>\"Apples. Oranges. Pears. Plums. Kumquats. Tangerines. Lemons. Limes. Avocado. Tomato. Banana. Papaya. Guava.\"</li><li>\"Error. Error. Error. File not found.\"</li><li>\"Error. Error. Error. Fact not found.\"</li><li>\"Fact not found.\"</li><li>\"Corruption at 25%\"</li><li>\"Corruption at 50%\"</li><li>\"Warning, sphere corruption at twenty-- rats cannot throw up.\"</li><li>\"Dental floss has superb tensile strength.\"</li><li>\"The square root of rope is string.\"</li><li>\"While the submarine is vastly superior to the boat in every way, over 97% of people still use boats for aquatic transportation.\"</li><li>\"Cellular phones will not give you cancer. Only hepatitis.\"</li><li>\"Pants were invented by sailors in the sixteenth century to avoid Poseidon's wrath. It was believed that the sight of naked sailors angered the sea god.\"</li><li>\"The atomic weight of Germanium is seven two point six four.\"</li><li>\"89% of magic tricks are not magic. Technically, they are sorcery.\"</li><li>\"An ostrich's eye is bigger than its brain.\"</li><li>\"In Greek myth, the craftsman Daedalus invented human flight so a group of Minotaurs would stop teasing him about it.\"</li><li>\"Humans can survive underwater. But not for very long.\"</li><li>\"Raseph, the Semitic god of war and plague, had a gazelle growing out of his forehead.\"</li><li>\"The plural of surgeon general is surgeons general. The past tense of surgeons general is surgeonsed general.\"</li><li>\"Polymerase I polypeptide A is a human gene.\"</li><li>\"Rats cannot throw up.\"</li><li>\"Iguanas can stay underwater for twenty-eight point seven minutes.\"</li><li>\"Human tapeworms can grow up to twenty-two point nine meters.\"</li><li>\"The Schrodinger's cat paradox outlines a situation in which a cat in a box must be considered, for all intents and purposes, simultaneously alive and dead. Schrodinger created this paradox as a justification for killing cats.\"</li><li>\"Every square inch of the human body has 32 million bacteria on it.\"</li><li>\"The Sun is 330,330 times larger than Earth.\"</li><li>\"The average life expectancy of a rhinoceros in captivity is 15 years.\"</li><li>\"Volcano-ologists are experts in the study of volcanoes.\"</li><li>\"Avocados have the highest fiber and calories of any fruit.\"</li><li>\"Avocados have the highest fiber and calories of any fruit. They are found in Australians.\"</li><li>\"The moon orbits the Earth every 27.32 days.\"</li><li>\"The billionth digit of Pi is 9.\"</li><li>\"If you have trouble with simple counting, use the following mnemonic device: one comes before two comes before 60 comes after 12 comes before six trillion comes after 504. This will make your earlier counting difficulties seem like no big deal.\"</li><li>\"A gallon of water weighs 8.34 pounds\"</li><li>\"Hot water freezes quicker than cold water.\"</li><li>\"Honey does not spoil.\"</li><li>\"The average adult body contains half a pound of salt.\"</li><li>\"A nanosecond lasts one billionth of a second.\"</li><li>\"According to Norse legend, thunder god Thor's chariot was pulled across the sky by two goats.\"</li><li>\"China produces the world's second largest crop of soybeans.\"</li><li>\"Tungsten has the highest melting point of any metal, at 3,410 degrees Celsius.\"</li><li>\"Gently cleaning the tongue twice a day is the most effective way to fight bad breath.\"</li><li>\"The Tariff Act of 1789, established to protect domestic manufacture, was the second statute ever enacted by the United States government.\"</li><li>\"The value of Pi is the ratio of any circle's circumference to its diameter in Euclidean space.\"</li><li>\"The Mexican-American War ended in 1848 with the signing of the Treaty of Guadalupe Hidalgo.\"</li><li>\"In 1879, Sandford Fleming first proposed the adoption of worldwide standardized time zones at the Royal Canadian Institute.\"</li><li>\"Marie Curie invented the theory of radioactivity, the treatment of radioactivity, and dying of radioactivity.\"</li><li>\"At the end of The Seagull by Anton Chekhov, Konstantin kills himself.\"</li><li>\"Contrary to popular belief, the Eskimo does not have one hundred different words for snow. They do, however, have two hundred and thirty-four words for fudge.\"</li><li>\"In Victorian England, a commoner was not allowed to look directly at the Queen, due to a belief at the time that the poor had the ability to steal thoughts. Science now believes that less than 4% of poor people are able to do this.\"</li><li>\"In 1862, Abraham Lincoln signed the Emancipation Proclamation, freeing the slaves. Like everything he did, Lincoln freed the slaves while sleepwalking, and later had no memory of the event.\"</li><li>\"In 1948, at the request of a dying boy, baseball legend Babe Ruth ate seventy-five hot dogs, then died of hot dog poisoning.\"</li><li>\"It is incorrectly noted that Thomas Edison invented 'push-ups' in 1878. Nikolai Tesla had in fact patented the activity three years earlier, under the name 'Tesla-cize.'\"</li><li>\"Whales are twice as intelligent, and three times as delicious, as humans.\"</li><li>\"The automobile brake was not invented until 1895. Before this, someone had to remain in the car at all times, driving in circles until passengers returned from their errands.\"</li><li>\"Edmund Hillary, the first person to climb Mount Everest, did so accidentally while chasing a bird.\"</li><li>\"Diamonds are made when coal is put under intense pressure. Diamonds put under intense pressure become foam pellets, commonly used today as packing material.\"</li><li>\"The most poisonous fish in the world is the orange ruffy. Everything but its eyes are made of a deadly poison. The ruffy's eyes are composed of a less harmful, deadly poison.\"</li><li>\"The occupation of court jester was invented accidentally, when a vassal's epilepsy was mistaken for capering.\"</li><li>\"Halley's Comet can be viewed orbiting Earth every seventy-six years. For the other seventy-five, it retreats to the heart of the sun, where it hibernates undisturbed.\"</li><li>\"The first commercial airline flight took to the air in 1914. Everyone involved screamed the entire way.\"</li><li>\"In Greek myth, Prometheus stole fire from the Gods and gave it to humankind. The jewelry he kept for himself.\"</li><li>\"The first person to prove that cow's milk is drinkable was very, very thirsty.\"</li><li>\"Before the Wright Brothers invented the airplane, anyone wanting to fly anywhere was required to eat 200 pounds of helium.\"</li><li>\"Before the invention of scrambled eggs in 1912, the typical breakfast was either whole eggs still in the shell or scrambled rocks.\"</li><li>\"During the Great Depression, the Tennessee Valley Authority outlawed pet rabbits, forcing many to hot glue-gun long ears onto their pet mice.\"</li><li>\"At some point in their lives 1 in 6 children will be abducted by the Dutch.\"</li><li>\"According to most advanced algorithms, the world's best name is Craig.\"</li><li>\"To make a photocopier, simply photocopy a mirror.\"</li>"
    }
};



const to_skip = {
    "GLaDOS reawakens": {
        "Oh, it's you.": []
    },
    "Announcer lines, Chapter 1": {
        "Relaxation Chamber": [],
        "The Courtesy Call": [],
        "Aperture Science Material Emancipation Grill": [],
        "lethal military androids": [1],
        "misc lines (unordered)": []
    },
    "Roast session": {
        "Garbage": [],
        "Train Horn": [],
        "Turrets—remember them?": [],
        "That jumpsuit you are wearing...": []
    },
    "More testing": {
        "...methodically knocking people's hats off...": [],
        "Aerial Faith Plate": []
    },
    "The Fall": {
        "I'm a POTATO": [],
        "Mantis men": [],
        "repulsion gel": [],
        "Cave's crazy experiments": [],
        "WHY NOT??": [],
        "$60": []
    },
    "Wheatley Labrotories": {
        "Paradox": [],
        "TEST": [2, 12, 20],
        "help?": []
    },
    "password?": {
        "A-A-A-A, um, A": [],
        "The Hacking monologue": [],
        "Should have looked into this earlier...": []
    },
    "Ha! Death trap!!": {
        "Test Chamber 75": [],
        "playing cards": [],
        "Holmes versus Moriarty...": [],
        "FOOL!!": [1]
    },
    "Cores": {
        "Curiosity Core": [],
        "Intelligence Core": [],
        "Party Escort Bot": [],
        "Space Core": [],
        "Adventure Core": [27],
        "Fact Core": []
    },
    "Goodbye!": {
        "goodbye": []
    }
};