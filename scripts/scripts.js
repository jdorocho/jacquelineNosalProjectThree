$(document).ready(function(){
    // (Page 1, #demoIntro): Page the User lands on after clicking "Let's Go!" in (Page 0, #intro)
    $('#mainContent').on('click', '#goToDemoIntro', function(){
        $('#intro').replaceWith(`
            <section id="demoIntro">
                <p>We're going to be using some jQuery Effect Methods to help us on our journey.</p>
                <button id="goToDemoHide">Next ></button>
            </section>
        `);
    });

    // (Page 2, #demoHide): Page the User lands on after clicking "Next" in (Page 1, #demoIntro)
    $('#mainContent').on('click', '#goToDemoHide', function(){
        $('#demoIntro').replaceWith(`
            <section id="demoHide">
                <p>Let's try one right now!</p> 
                <p>Type <span class="standOut">$("#JQ").hide();</span>, and press enter to submit.</p>
                <p>This is case-sensitive, and spacing matters!</p>
                <form id="demoHideForm">
                    <input type="text" id="demoHideInput">
                </form>
                <p id="validateMessage" class="validateMessage"></p>
            </section>
        `);
    });

    // (Page 3, #demoHideSuccess): Page the User lands on after successful submission in (Page 2, #demoHide)
    $('#mainContent').on('submit', '#demoHideForm', function(e){
        e.preventDefault();

        let demoHideAnswer = $('#demoHideInput').val();

        if (demoHideAnswer === '') {
            $('#validateMessage').text("Please input an answer!");
            $('input').addClass('validateHighlight');
        } else if (demoHideAnswer === '$("#JQ").hide();') {
            $('#JQ').hide();
            $('#textBox').addClass('textBoxExtraMargin');
            $('input').val('');
            $('#demoHide').replaceWith(`
                <section id="demoHideSuccess">
                    <p>You did it! But...where did I go?</p>
                    <p>You successfully hid me using hide()!</p>
                    <button id="goToDemoShow">Next ></button>
                </section>
            `);
        } else {
            $('#validateMessage').text("Hmm...let's try again!");
            $('input').addClass('validateHighlight');
        }
    });

    // (Page 4, #demoShow): Page the User lands on after clicking "Next" in (Page 3, #demoHideSuccess)
    $('#mainContent').on('click', '#goToDemoShow', function(){
        $('#demoHideSuccess').replaceWith(`
            <section id="demoShow">
                <p>Now you can bring me back using show().</p>
                <p>Type <span class="standOut">$("#JQ").show();</span>, and press enter to submit.</p>
                <p>Remember: This is case-sensitive, and spacing matters!</p>
                <form id="demoShowForm">
                    <input type="text" id="demoShowInput">
                </form>
                <p id="validateMessage" class="validateMessage"></p>
            </section>
        `);
    });

    // (Page 5, #demoShowSuccess): Page the User lands on after successful submission in (Page 4, #demoShow)
    $('#mainContent').on('submit', '#demoShowForm', function(e){
        e.preventDefault();

        let demoShowAnswer = $('#demoShowInput').val();

        if (demoShowAnswer === '') {
            $('#validateMessage').text("Please input an answer!");
            $('input').addClass('validateHighlight');
        } else if (demoShowAnswer === '$("#JQ").show();') {
            $('#JQ').show();
            $('#textBox').removeClass('textBoxExtraMargin');
            $('input').val('');
            $('#demoShow').replaceWith(`
                <section id="demoShowSuccess">
                    <p>Way to go!</p>
                    <button id="goToCookiesIntro">Next ></button>
                </section>
            `);
            $('#JQ__defaultEyes').hide();
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
        } else {
            $('#validateMessage').text("Hmm...let's try again!");
            $('input').addClass('validateHighlight');
        }
    });

    // (Page 6, #cookiesIntro): Page the User lands on after clicking "Next" in (Page 5, #demoShowSuccess)
    $('#mainContent').on('click', '#goToCookiesIntro', function(){
        $('#JQ__happyEyes').hide();
        $('#JQ__defaultEyes').show();
        $('#JQ__defaultMouth').hide();
        $('#JQ__mouth').append(`
            <div id="JQ__wonderUhOhMouth" class="JQ__wonderUhOhMouth"></div>
        `);
        $('#demoShowSuccess').replaceWith(`
            <section id="cookiesIntro">
                <p>I have a very important question!</p>
                <p>What's the best way to start an adventure?</p>
                <button id="goToCookiesShow">Next ></button>
            </section>
        `);
    });

    // (Page 7, #cookiesShow): Page the User lands on after clicking "Next" in (Page 6, #cookiesIntro)
    $('#mainContent').on('click', '#goToCookiesShow', function(){
        $('#JQ__wonderUhOhMouth').hide();
        $('#JQ__defaultMouth').show();
        $('#cookiesIntro').replaceWith(`
            <section id="cookiesShow">
                <p>With snacks!</p>
                <p>Type <span class="standOut">$("#cookies").show();</span>, and press enter to show some cookies!</p>
                <form id="cookiesShowForm">
                    <input type="text" id="cookiesShowInput">
                </form>
                <p id="validateMessage" class="validateMessage"></p>
            </section>
        `);
    });

    // (Page 8, #cookiesSuccess): Page the User lands on after successful submission in (Page 7, #cookiesShow)
    $('#mainContent').on('submit', '#cookiesShowForm', function(e){
        e.preventDefault();

        let cookiesShowAnswer = $('#cookiesShowInput').val();

        if (cookiesShowAnswer === '') {
            $('#validateMessage').text("Please input an answer!");
            $('input').addClass('validateHighlight');
        } else if (cookiesShowAnswer === '$("#cookies").show();') {
            $('#adventureItems').append(`
                <div id="cookieBin" class="cookieBin">
                    <div class="cookie cookie1">
                        <div class="chip chip1"></div>
                        <div class="chip chip2"></div>
                        <div class="chip chip3"></div>
                        <div class="chip chip4"></div>
                        <div class="chip chip5"></div>
                        <div class="chip chip6"></div>
                    </div>
                
                    <div class="cookie cookie2">
                        <div class="chip chip7"></div>
                        <div class="chip chip8"></div>
                        <div class="chip chip9"></div>
                        <div class="chip chip10"></div>
                        <div class="chip chip11"></div>
                        <div class="chip chip12"></div>
                    </div>
                </div>
            `);
            $('input').val('');
            $('#cookiesShow').replaceWith(`
                <section id="cookiesSuccess">
                    <p>Yum! Delicious!</p>
                    <button id="goToMouseIntro">Next ></button>
                </section>
            `);
            $('#JQ__defaultEyes').hide();
            $('#JQ__happyEyes').show();
        } else {
            $('#validateMessage').text("Hmm...let's try again!");
            $('input').addClass('validateHighlight');
        }
    });

    // (Page 9, #mouseIntro): Page the User lands on after clicking "Next" in (Page 8, #cookiesSuccess)
    $('#mainContent').on('click', '#goToMouseIntro', function(){
        $('#JQ__happyEyes').hide();
        $('#JQ__defaultEyes').show();
        $('#JQ__defaultMouth').hide();
        $('#JQ__wonderUhOhMouth').show();
        $('#cookieBin').hide();
        $('#adventureItems').append(`
            <div id="mouse" class="mouse">
                <div class="mouseBody"></div>
                <div class="mouseEye"></div>
                <div class="mouseEar"></div>
                <div class="mouseEarInner"></div>
                <div class="mouseNose"></div>
                <div class="mouseTail1"></div>
            </div>
        `);
        $('#cookiesSuccess').replaceWith(`
            <section id="mouseIntro">
                <p>But...uh oh! The crumbs must have attracted a mouse.</p>
                <button id="goToMouseAnimate">Next ></button>
            </section>
        `);
    });

    // (Page 10, #mouseAnimate): Page the User lands on after clicking "Next" in (Page 9, #mouseIntro)
    $('#mainContent').on('click', '#goToMouseAnimate', function(){
        $('#JQ__wonderUhOhMouth').hide();
        $('#JQ__defaultMouth').show();
        $('#adventureItems').addClass('adventureMarginMouse');
        $('#mouseIntro').replaceWith(`
            <section id="mouseAnimate">
                <p>No problem. Type and submit <span class="standOut">$("#mouse").animate({"left": "+=150px"}, "fast").fadeOut();</span> to send the mouse on its merry way.</p>
                <form id="mouseAnimateForm">
                    <input type="text" id="mouseAnimateInput">
                </form>
                <p id="validateMessage" class="validateMessage"></p>
            </section>
        `);
    });

    // (Page 11, #mouseSuccess): Page the User lands on after successful submission in (Page 10, #mouseAnimate)
    $('#mainContent').on('submit', '#mouseAnimateForm', function(e){
        e.preventDefault();

        let mouseAnimateAnswer = $('#mouseAnimateInput').val();

        if (mouseAnimateAnswer === '') {
            $('#validateMessage').text("Please input an answer!");
            $('input').addClass('validateHighlight');
        } else if (mouseAnimateAnswer === '$("#mouse").animate({"left": "+=150px"}, "fast").fadeOut();') {
            $('#mouse').animate({"left": "+=150px"}, "fast").fadeOut();
            $('input').val('');
            $('#adventureItems').removeClass('adventureMarginMouse');
            $('#mouseAnimate').replaceWith(`
                <section id="mouseSuccess">
                <p>Yay!</p>
                    <button id="goToBrickWallIntro">Next ></button>
                </section>
            `);
            $('#JQ__defaultEyes').hide();
            $('#JQ__happyEyes').show();
        } else {
            $('#validateMessage').text("Hmm...let's try again!");
            $('input').addClass('validateHighlight');
        }
    });

    // (Page 12, #brickWallIntro): Page the User lands on after clicking "Next" in (Page 11, #mouseSuccess)
    $('#mainContent').on('click', '#goToBrickWallIntro', function(){
        $('#JQ__happyEyes').hide();
        $('#JQ__defaultEyes').show();
        $('#JQ__defaultMouth').hide();
        $('#JQ__wonderUhOhMouth').show();
        $('#adventureItems').append(`
            <div id="brickWall" class="brickWall">
                <div class="row">
                <div class="brick edgeBrick"></div>
                <div class="brick edgeBrick"></div>
                <div class="brick edgeBrick"></div>
                </div>
                <div class="row midRow">
                <div class="brick midRowBrick"></div>
                <div class="brick midRowBrick"></div>
                <div class="brick midRowBrick"></div>
                <div class="brick midRowBrick"></div>
                </div>
                <div class="row">
                <div class="brick edgeBrick"></div>
                <div class="brick edgeBrick"></div>
                <div class="brick edgeBrick"></div>
                </div>
            </div>
        `);
        $('#mouseSuccess').replaceWith(`
            <section id="brickWallIntro">
                <p>Oh no! It looks like there is a wall blocking our way!</p>
                <button id="goToBrickWallSlideUp">Next ></button>
            </section>
        `);
    });

    // (Page 13, #brickWallSlideUp): Page the User lands on after clicking "Next" in (Page 12, #brickWallIntro)
    $('#mainContent').on('click', '#goToBrickWallSlideUp', function(){
        $('#JQ__wonderUhOhMouth').hide();
        $('#JQ__defaultMouth').show();
        $('#adventureItems').addClass('adventureMarginBrickWall');
        $('#brickWallIntro').replaceWith(`
            <section id="brickWallSlideUp">
                <p>Type and submit <span class="standOut">$("#brickWall").slideUp();</span> to slide the wall out of the way.</p>
                <form id="brickWallSlideUpForm">
                    <input type="text" id="brickWallSlideUpInput">
                </form>
                <p id="validateMessage" class="validateMessage"></p>
            </section>
        `);
    });

    // (Page 14, #brickWallSuccess): Page the User lands on after successful submission in (Page 13, #brickWallSlideUp)
    $('#mainContent').on('submit', '#brickWallSlideUpForm', function(e){
        e.preventDefault();

        let brickWallSlideUpAnswer = $('#brickWallSlideUpInput').val();

        if (brickWallSlideUpAnswer === '') {
            $('#validateMessage').text("Please input an answer!");
            $('input').addClass('validateHighlight');
        } else if (brickWallSlideUpAnswer === '$("#brickWall").slideUp();') {
            $('#brickWall').slideUp();
            $('input').val('');
            $('#adventureItems').removeClass('adventureMarginBrickWall');
            $('#brickWallSlideUp').replaceWith(`
                <section id="brickWallSuccess">
                    <p>Nice!! You did it!</p>
                    <button id="goToEvilRobotIntro">Next ></button>
                </section>
            `);
            $('#JQ__defaultEyes').hide();
            $('#JQ__happyEyes').show();
        } else {
            $('#validateMessage').text("Hmm...let's try again!");
            $('input').addClass('validateHighlight');
        }
    });

    // (Page 15, #evilRobotIntro): Page the User lands on after clicking "Next" in (Page 14, #brickWallSuccess)
    $('#mainContent').on('click', '#goToEvilRobotIntro', function(){
        $('#JQ__happyEyes').hide();
        $('#JQ__defaultEyes').show();
        $('#JQ__defaultMouth').hide();
        $('#JQ__wonderUhOhMouth').show();
        $('#adventureItems').append(`
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
        `);
        $('#brickWallSuccess').replaceWith(`
            <section id="evilRobotIntro">
                <p>Ahhh! It's an evil robot!!!</p>
                <button id="goToEvilRobotFadeOut">Next ></button>
            </section>
        `);
    });

    // (Page 16, #evilRobotFadeOut): Page the User lands on after clicking "Next" in (Page 15, #evilRobotIntro)
    $('#mainContent').on('click', '#goToEvilRobotFadeOut', function(){
        $('#JQ__wonderUhOhMouth').hide();
        $('#JQ__defaultMouth').show();
        $('#adventureItems').addClass('adventureMarginEvilRobot');
        $('#evilRobotIntro').replaceWith(`
            <section id="evilRobotFadeOut">
                <p>No need to fear.</p>
                <p>Type and submit <span class="standOut">$("#evilRobot").fadeOut();</span> to fade the robot away!</p>
                <form id="evilRobotFadeOutForm">
                    <input type="text" id="evilRobotFadeOutInput">
                </form>
                <p id="validateMessage" class="validateMessage"></p>
            </section>
        `);
    }); 

    // (Page 17, #evilRobotSuccess): Page the User lands on after successful submission in (Page 16, #evilRobotFadeOut)
    $('#mainContent').on('submit', '#evilRobotFadeOutForm', function(e){
        e.preventDefault();

        let evilRobotFadeOutAnswer = $('#evilRobotFadeOutInput').val();

        if (evilRobotFadeOutAnswer === '') {
            $('#validateMessage').text("Please input an answer!");
            $('input').addClass('validateHighlight');
        } else if (evilRobotFadeOutAnswer === '$("#evilRobot").fadeOut();') {
            $('#evilRobot').fadeOut();
            $('input').val('');
            $('#adventureItems').removeClass('adventureMarginEvilRobot');
            $('#evilRobotFadeOut').replaceWith(`
                <section id="evilRobotSuccess">
                    <p>Whew! That was close!</p>
                    <button id="goToTreasureIntro">Next ></button>
                </section>
            `);
            $('#JQ__defaultEyes').hide();
            $('#JQ__happyEyes').show();
        } else {
            $('#validateMessage').text("Hmm...let's try again!");
            $('input').addClass('validateHighlight');
        }
    });

    // (Page 18, #treasureIntro): Page the User lands on after clicking "Next" in (Page 17, #evilRobotSuccess)
    $('#mainContent').on('click', '#goToTreasureIntro', function(){
        $('#JQ__happyEyes').hide();
        $('#JQ__defaultEyes').show();
        $('#JQ__defaultMouth').hide();
        $('#JQ__wonderUhOhMouth').show();
        $('#evilRobotSuccess').replaceWith(`
            <section id="treasureIntro">
                <p>We have arrived at the location of the treasure! But...where is it?</p>
                <button id="goToTreasureFadeIn">Next ></button>
            </section>
        `);
        $('#adventureItems').append(`
            <div id="treasure" class="treasure">
                <div class="lid">
                    <div class="gold gold1"></div>
                    <div class="gold gold2"></div>
                    <div class="gold gold3"></div>
                    <div class="gold gold4"></div>
                    <div class="gold gold5"></div>
                </div>
                <div class="bottom">
                    <div class="bottomBoard board1"></div>
                    <div class="bottomBoard board2"></div>
                    <div class="bottomBoard board3"></div>
                    <div class="lock">
                        <div class="lockKeyHole1"></div>
                        <div class="lockKeyHole2"></div>
                    </div>
                </div>
            </div>
        `).hide();
    });

    // (Page 19, #treasureFadeIn): Page the User lands on after clicking "Next" in (Page 18, #treasureIntro)
    $('#mainContent').on('click', '#goToTreasureFadeIn', function(){
        $('#JQ__wonderUhOhMouth').hide();
        $('#JQ__defaultMouth').show(); 
        $('#treasureIntro').replaceWith(`
            <section id="treasureFadeIn">
                <p>Type and submit <span class="standOut">$("#treasure").fadeIn();</span> to reveal the treasure!</p>
                <form id="treasureFadeInForm">
                    <input type="text" id="treasureFadeInInput">
                </form>
                <p id="validateMessage" class="validateMessage"></p>
            </section>
        `);
    });

    // (Page 20, #treasureSuccess): Page the User lands on after successful submission in (Page 19, #treasureFadeIn)
    $('#mainContent').on('submit', '#treasureFadeInForm', function(e){
        e.preventDefault();

        let treasureFadeInAnswer = $('#treasureFadeInInput').val();

        if (treasureFadeInAnswer === '') {
            $('#validateMessage').text("Please input an answer!");
            $('input').addClass('validateHighlight');
        } else if (treasureFadeInAnswer === '$("#treasure").fadeIn();') {
            $('input').val('');
            $('#adventureItems').fadeIn();
            $('#treasureFadeIn').replaceWith(`
                <section id="treasureSuccess">
                    <p>You did it! Hurray!!!</p>
                    <p>CONGRATULATIONS!!!!! I'm so glad to have shared this journey with you!</p>
                </section>
            `);
            $('#JQ__defaultEyes').hide();
            $('#JQ__happyEyes').show();
            $('body').addClass('changeColour');
        } else {
            $('#validateMessage').text("Hmm...let's try again!");
            $('input').addClass('validateHighlight');
        }
    });
});