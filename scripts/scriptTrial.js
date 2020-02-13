// Facial Expressions of JQ: Default
const defaultJQ = function() {
    $('#JQ__happyEyes').hide();
    $('#JQ__shockedMouth').hide();
    $('#JQ__defaultEyes').show();
    $('#JQ__defaultMouth').show();
}

// Facial Expressions of JQ: Happy
const happyJQ = function() {
    $('#JQ__defaultEyes').hide();
    $('#JQ__happyEyes').show();
    $('#JQ__shockedMouth').hide();
    $('#JQ__defaultMouth').show();
}

// Facial Expressions of JQ: Shocked 
const shockedJQ = function() {
    $('#JQ__happyEyes').hide();
    $('#JQ__defaultMouth').hide();
    $('#JQ__defaultEyes').show();
    $('#JQ__shockedMouth').show();
}

// (Page 0, #intro): On page load 
$('#JQ__eyes').append(`
<div id="JQ__happyEyes">
    <div class="JQ__happyLeftEye">
    (
    </div>
    <div class="JQ__happyRightEye">
    (
    </div>
</div>
`);
$('#JQ__mouth').append(`
<div id="JQ__shockedMouth" class="JQ__shockedMouth"></div>
`);
defaultJQ();

const JQpages = [
    //  0
    {
        name: 'intro',
        JQFace: defaultJQ,
        content: `
            <section id="intro">
                <p>Hi, I'm a blob named JQ!</p> 
                <p>Let's go on an adventure and learn more about jQuery together!</p>
                <button id="goToDemoIntro">Let's Go!</button id="go">
            </section>
        `
    },
    // 1
    {
        name: 'demoIntro',
        JQFace: defaultJQ,
        content: `
            <section id="demoIntro">
                <p>We're going to be using some jQuery Effect Methods to help us on our journey.</p>
                <button id="goToDemoHide">Next ></button>
            </section>
        `
    }, 
    // 2
    {
        name: 'demoHide',
        JQFace: defaultJQ,
        content: `
            <section id="demoHide">
                <p>Let's try one right now!</p> 
                <p>Type <span class="standOut">$("#JQ").hide();</span>, and press enter to submit.</p>
                <p>This is case-sensitive, and spacing matters!</p>
                <form id="demoHideForm">
                    <input type="text" id="demoHideInput">
                </form>
                <p id="validateMessage" class="validateMessage"></p>
            </section>
        `,
        correctAnswer: `$("#JQ").hide();`
    },
    // 3
    {
        name: 'demoHideSuccess',
        content: `
            <section id="demoHideSuccess">
                <p>You did it! But...where did I go?</p>
                <p>You successfully hid me using hide()!</p>
                <button id="goToDemoShow">Next ></button>
            </section>
        `,
        adventureAction: JQ.hide
    },
    // 4
    {
        name: 'demoShow',
        content: `
            <section id="demoShow">
                <p>Now you can bring me back using show().</p>
                <p>Type <span class="standOut">$("#JQ").show();</span>, and press enter to submit.</p>
                <p>Remember: This is case-sensitive, and spacing matters!</p>
                <form id="demoShowForm">
                    <input type="text" id="demoShowInput">
                </form>
                <p id="validateMessage" class="validateMessage"></p>
            </section>
        `,
        correctAnswer: `$("#JQ").show();`
    },
    // 5
    {
        name: 'demoShowSuccess',
        JQFace: happyJQ,
        content: `
            <section id="demoShowSuccess">
                <p>Way to go!</p>
                <button id="goToCookiesIntro">Next ></button>
            </section>
        `, 
        adventureAction: JQ.show
    },
    // 6
    {
        name: 'cookiesIntro',
        JQFace: shockedJQ,
        content: `
            <section id="cookiesIntro">
                <p>I have a very important question!</p>
                <p>What's the best way to start an adventure?</p>
                <button id="goToCookiesShow">Next ></button>
            </section>
        `
    },
    // 7
    {
        name: 'cookiesShow',
        JQFace: defaultJQ,
        content: `
            <section id="cookiesShow">
                <p>With snacks!</p>
                <p>Type <span class="standOut">$("#cookies").show();</span>, and press enter to show some cookies!</p>
                <form id="cookiesShowForm">
                    <input type="text" id="cookiesShowInput">
                </form>
                <p id="validateMessage" class="validateMessage"></p>
            </section>
        `,
        correctAnswer: `$("#cookies").show();`
    },
    // 8
    {
        name: 'cookiesSuccess',
        JQFace: happyJQ,
        content: `
            <section id="cookiesSuccess">
                <p>Yum! Delicious!</p>
                <button id="goToMouseIntro">Next ></button>
            </section>
        `,
        adventureItem: `
        <div id="cookieBin" class="cookieBin">
            <div class="cookie cookie1">
                <div class="cookie__chip cookie__chip1"></div>
                <div class="cookie__chip cookie__chip2"></div>
                <div class="cookie__chip cookie__chip3"></div>
                <div class="cookie__chip cookie__chip4"></div>
                <div class="cookie__chip cookie__chip5"></div>
                <div class="cookie__chip cookie__chip6"></div>
            </div>
        
            <div class="cookie cookie2">
                <div class="cookie__chip cookie__chip7"></div>
                <div class="cookie__chip cookie__chip8"></div>
                <div class="cookie__chip cookie__chip9"></div>
                <div class="cookie__chip cookie__chip10"></div>
                <div class="cookie__chip cookie__chip11"></div>
                <div class="cookie__chip cookie__chip12"></div>
            </div>
        </div>
    `
    },
    // 9
    {
        name: 'mouseIntro',
        JQFace: shockedJQ,
        content: `
            <section id="mouseIntro">
                <p>But...uh oh! The crumbs must have attracted a mouse.</p>
                <button id="goToMouseAnimate">Next ></button>
            </section>
        `,
        adventureItem: `
            <div id="mouse" class="mouse">
                <div class="mouse__body"></div>
                <div class="mouse__eye"></div>
                <div class="mouse__ear"></div>
                <div class="mouse__earInner"></div>
                <div class="mouse__nose"></div>
                <div class="mouse__tail"></div>
            </div>
        `
    },
    // 10
    {
        name: 'mouseAnimate',
        JQFace: defaultJQ,
        content: `
            <section id="mouseAnimate">
                <p>No problem. Type and submit <span class="standOut">$("#mouse").animate({"left": "+=150px"}, "fast").fadeOut();</span> to send the mouse on its merry way.</p>
                <form id="mouseAnimateForm">
                    <input type="text" id="mouseAnimateInput">
                </form>
                <p id="validateMessage" class="validateMessage"></p>
            </section>
        `,
        correctAnswer: `$("#mouse").animate({"left": "+=150px"}, "fast").fadeOut();`
    },
    // 11
    {
        name: 'mouseSuccess',
        JQFace: happyJQ,
        content: `
            <section id="mouseSuccess">
            <p>Yay!</p>
                <button id="goToBrickWallIntro">Next ></button>
            </section>
        `,
        adventureAction: mouse.animate.fadeOut 
    },
    // 12
    {
        name: 'brickWallIntro',
        JQFace: shockedJQ,
        content: `
            <section id="brickWallIntro">
                <p>Oh no! It looks like there is a wall blocking our way!</p>
                <button id="goToBrickWallSlideUp">Next ></button>
            </section>
        `,
        adventureItem: `
            <div id="brickWall" class="brickWall">
                <div class="brickWall__row">
                    <div class="brickWall__brick brickWall__edgeBrick"></div>
                    <div class="brickWall__brick brickWall__edgeBrick"></div>
                    <div class="brickWall__brick brickWall__edgeBrick"></div>
                </div>
                <div class="brickWall__row midRow">
                    <div class="brickWall__brick brickWall__midRowBrick"></div>
                    <div class="brickWall__brick brickWall__midRowBrick"></div>
                    <div class="brickWall__brick brickWall__midRowBrick"></div>
                    <div class="brickWall__brick brickWall__midRowBrick"></div>
                </div>
                <div class="brickWall__row">
                    <div class="brickWall__brick brickWall__edgeBrick"></div>
                    <div class="brickWall__brick brickWall__edgeBrick"></div>
                    <div class="brickWall__brick brickWall__edgeBrick"></div>
                </div>
            </div>
        `
    },
    // 13
    {
        name: 'brickWallSlideUp',
        JQFace: defaultJQ,
        content: `
            <section id="brickWallSlideUp">
                <p>Type and submit <span class="standOut">$("#brickWall").slideUp();</span> to slide the wall out of the way.</p>
                <form id="brickWallSlideUpForm">
                    <input type="text" id="brickWallSlideUpInput">
                </form>
                <p id="validateMessage" class="validateMessage"></p>
            </section>
        `,
        correctAnswer: `$("#brickWall").slideUp();`
    },
    // 14
    {
        name: 'brickWallSuccess',
        JQFace: happyJQ,
        content: `
            <section id="brickWallSuccess">
                <p>Nice!! You did it!</p>
                <button id="goToEvilRobotIntro">Next ></button>
            </section>
        `, 
        adventureAction: brickWall.slideUp
    },
    // 15
    {
        name: 'evilRobotIntro',
        JQFace: shockedJQ,
        content: `
            <section id="evilRobotIntro">
                <p>Ahhh! It's an evil robot!!!</p>
                <button id="goToEvilRobotFadeOut">Next ></button>
            </section>
        `,
        adventureItem: `
            <div id="evilRobot" class="evilRobot">
                <div class="evilRobot__head">
                    <div class="evilRobot__eye evilRobot__leftEye"></div>
                    <div class="evilRobot__eye evilRobot__rightEye"></div>
                    <div class="evilRobot__mouth"></div>
                </div>
                <div class="evilRobot__torso">
                    <div class="evilRobot__belt"></div>
                    <div class="evilRobot__leftArm"></div>
                    <div class="evilRobot__rightArm"></div>
                </div>
                <div class="evilRobot__wheel evilRobot__wheel1"></div>
                <div class="evilRobot__wheel evilRobot__wheel2"></div>
            </div>
        `
    },
    // 16
    {
        name: 'evilRobotFadeOut',
        JQFace: defaultJQ,
        content: `
            <section id="evilRobotFadeOut">
                <p>No need to fear.</p>
                <p>Type and submit <span class="standOut">$("#evilRobot").fadeOut();</span> to fade the robot away!</p>
                <form id="evilRobotFadeOutForm">
                    <input type="text" id="evilRobotFadeOutInput">
                </form>
                <p id="validateMessage" class="validateMessage"></p>
            </section>
        `, 
        correctAnswer: `$("#evilRobot").fadeOut();`
    },
    // 17
    {
        name: 'evilRobotSuccess',
        JQFace: happyJQ,
        content: `
            <section id="evilRobotSuccess">
                <p>Whew! That was close!</p>
                <button id="goToTreasureIntro">Next ></button>
            </section>
        `,
        adventureAction: evilRobot.fadeOut
    },
    // 18
    {
        name: 'treasureIntro',
        JQFace: shockedJQ,
        content: `
            <section id="treasureIntro">
                <p>We have arrived at the location of the treasure! But...where is it?</p>
                <button id="goToTreasureFadeIn">Next ></button>
            </section>
        `, 
        adventureItem: `
        <div id="treasure" class="treasure">
            <div class="treasure__lid">
                <div class="treasure__gold treasure__gold1"></div>
                <div class="treasure__gold treasure__gold2"></div>
                <div class="treasure__gold treasure__gold3"></div>
                <div class="treasure__gold treasure__gold4"></div>
                <div class="treasure__gold treasure__gold5"></div>
            </div>
            <div class="treasure__bottom">
                <div class="treasure__bottomBoard"></div>
                <div class="treasure__bottomBoard"></div>
                <div class="treasure__bottomBoard"></div>
                <div class="treasure__lock">
                    <div class="treasure__lockKeyHole1"></div>
                    <div class="treasure__lockKeyHole2"></div>
                </div>
            </div>
        </div>
    `
    },
    // 19 
    {
        name: 'treasureFadeIn',
        JQFace: defaultJQ,
        content: `
            <section id="treasureFadeIn">
                <p>Type and submit <span class="standOut">$("#treasure").fadeIn();</span> to reveal the treasure!</p>
                <form id="treasureFadeInForm">
                    <input type="text" id="treasureFadeInInput">
                </form>
                <p id="validateMessage" class="validateMessage"></p>
            </section>
        `,
        correctAnswer: `$("#treasure").fadeIn();`
    },
    // 20
    {
        name: 'treasureSuccess',
        JQFace: happyJQ,
        content: `
            <section id="treasureSuccess">
                <p>You did it! Hurray!!!</p>
                <p>CONGRATULATIONS!!!!! I'm so glad to have shared this journey with you!</p>
            </section>
        `,
        adventureAction: adventureItems.fadeIn
    }
];

for (let page of JQpages) {
    if (page === 0 || page === 1 || page === 3 || page === 5 || page === 6 || page === 8 || page === 9 || page === 11 || page === 12 || page === 14 || page === 15 || page === 17 || page === 18) {
        $('#mainContent').on('click', 'button', function(){
            page++;
            $('#JQ').JQpages.JQFace();
            $('#mainContent').html(JQpages.content);
        });
    } else if (page === 4 || page === 5 || page === 8 || page === 14 || page === 17) {
        $('#mainContent').on('submit', function(e){
            e.preventDefault();
            let userAnswer = $('input').val();

            if (userAnswer === '') {
                $('#validateMessage').text("Please input an answer!");
                $('input').addClass('validateHighlight');
            } else if (userAnswer === JQpages[page].correctAnswer) {
                $('input').val('');
                page++;
                $('#JQ').JQpages.JQFace();
                $('#mainContent').html(JQpages.content);
            } else {
                $('#validateMessage').text("Hmm...let's try again!");
                $('input').addClass('validateHighlight');
            }
        });
    }
};








































if (page === 3) {
    $('#textBox').addClass('textBox__extraMargin');
}

if (page === 10) {
    $('#adventureItems').addClass('adventureMargin__mouse');
}

if (page === 11) {
    // and the submission is successful 
    $('#adventureItems').removeClass('adventureMargin__mouse');
}

if (page === 13) {
    $('#adventureItems').addClass('adventureMargin__brickWall');
}

if (page === 14) {
    // and the submission is successful
    $('#adventureItems').removeClass('adventureMargin__brickWall');
}

if (page === 16) {
    $('#adventureItems').addClass('adventureMargin__evilRobot');
}

if (page === 17) {
    // and the submission is successful
    $('#adventureItems').removeClass('adventureMargin__evilRobot');
}

if (page === 20) {
    // and the submission is successful
    $('body').addClass('changeColour');
    $('h1, p').addClass('changeTextColour');
}