$(document).ready(function(){
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

    //  Caching jQuery Selectors
    let $mainContent = $('#mainContent');
    let $adventureItems = $('#adventureItems');

    // (Page 1, #demoIntro): Page the User lands on after clicking "Let's Go!" in (Page 0, #intro)
    $mainContent.on('click', '#goToDemoIntro', function(){
        $('#intro').replaceWith(`
            <section id="demoIntro">
                <p>We're going to be using some jQuery Effect Methods to help us on our journey.</p>
                <button id="goToDemoHide">Next ></button>
            </section>
        `);
    });

    // (Page 2, #demoHide): Page the User lands on after clicking "Next" in (Page 1, #demoIntro)
    $mainContent.on('click', '#goToDemoHide', function(){
        $('#demoIntro').replaceWith(`
            <section id="demoHide">
                <p>Let's try one right now!</p> 
                <p>Type <span class="standOut">$("#JQ").hide();</span>, and press enter to submit.</p>
                <p>This is case-sensitive, and spacing matters!</p>
                <form id="demoHideForm">
                    <label for="demoHideInput" class="sr-only">Type your answer and press enter to submit</label>
                    <input type="text" id="demoHideInput">
                </form>
                <p id="validateMessage" class="validateMessage"></p>
            </section>
        `);
    });

    // (Page 3, #demoHideSuccess): Page the User lands on after successful submission in (Page 2, #demoHide)
    $mainContent.on('submit', '#demoHideForm', function(e){
        e.preventDefault();

        let demoHideAnswer = $('#demoHideInput').val();

        if (demoHideAnswer === '') {
            $('#validateMessage').text("Please input an answer!");
            $('input').addClass('validateHighlight');
        } else if (demoHideAnswer === '$("#JQ").hide();') {
            $('#JQ').hide();
            $('#textBox').addClass('textBox__extraMargin');
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
    $mainContent.on('click', '#goToDemoShow', function(){
        $('#demoHideSuccess').replaceWith(`
            <section id="demoShow">
                <p>Now you can bring me back using show().</p>
                <p>Type <span class="standOut">$("#JQ").show();</span>, and press enter to submit.</p>
                <p>Remember: This is case-sensitive, and spacing matters!</p>
                <form id="demoShowForm">
                    <label for="demoShowInput" class="sr-only">Type your answer and press enter to submit</label>
                    <input type="text" id="demoShowInput">
                </form>
                <p id="validateMessage" class="validateMessage"></p>
            </section>
        `);
    });

    // (Page 5, #demoShowSuccess): Page the User lands on after successful submission in (Page 4, #demoShow)
    $mainContent.on('submit', '#demoShowForm', function(e){
        e.preventDefault();

        let demoShowAnswer = $('#demoShowInput').val();

        if (demoShowAnswer === '') {
            $('#validateMessage').text("Please input an answer!");
            $('input').addClass('validateHighlight');
        } else if (demoShowAnswer === '$("#JQ").show();') {
            $('#JQ').show();
            happyJQ();
            $('#textBox').removeClass('textBox__extraMargin');
            $('input').val('');
            $('#demoShow').replaceWith(`
                <section id="demoShowSuccess">
                    <p>Way to go!</p>
                    <button id="goToCookiesIntro">Next ></button>
                </section>
            `);
        } else {
            $('#validateMessage').text("Hmm...let's try again!");
            $('input').addClass('validateHighlight');
        }
    });

    // (Page 6, #cookiesIntro): Page the User lands on after clicking "Next" in (Page 5, #demoShowSuccess)
    $mainContent.on('click', '#goToCookiesIntro', function(){
        shockedJQ();
        $('#demoShowSuccess').replaceWith(`
            <section id="cookiesIntro">
                <p>I have a very important question!</p>
                <p>What's the best way to start an adventure?</p>
                <button id="goToCookiesShow">Next ></button>
            </section>
        `);
    });

    // (Page 7, #cookiesShow): Page the User lands on after clicking "Next" in (Page 6, #cookiesIntro)
    $mainContent.on('click', '#goToCookiesShow', function(){
        defaultJQ();
        $('#cookiesIntro').replaceWith(`
            <section id="cookiesShow">
                <p>With snacks!</p>
                <p>Type <span class="standOut">$("#cookies").show();</span>, and press enter to show some cookies!</p>
                <form id="cookiesShowForm">
                    <label for="cookiesShowInput" class="sr-only">Type your answer and press enter to submit</label>
                    <input type="text" id="cookiesShowInput">
                </form>
                <p id="validateMessage" class="validateMessage"></p>
            </section>
        `);
    });

    // (Page 8, #cookiesSuccess): Page the User lands on after successful submission in (Page 7, #cookiesShow)
    $mainContent.on('submit', '#cookiesShowForm', function(e){
        e.preventDefault();

        let cookiesShowAnswer = $('#cookiesShowInput').val();

        if (cookiesShowAnswer === '') {
            $('#validateMessage').text("Please input an answer!");
            $('input').addClass('validateHighlight');
        } else if (cookiesShowAnswer === '$("#cookies").show();') {
            happyJQ();
            $adventureItems.removeClass('hidden').append(`
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
            `);
            $('input').val('');
            $('#cookiesShow').replaceWith(`
                <section id="cookiesSuccess">
                    <p>Yum! Delicious!</p>
                    <button id="goToMouseIntro">Next ></button>
                </section>
            `);
        } else {
            $('#validateMessage').text("Hmm...let's try again!");
            $('input').addClass('validateHighlight');
        }
    });

    // (Page 9, #mouseIntro): Page the User lands on after clicking "Next" in (Page 8, #cookiesSuccess)
    $mainContent.on('click', '#goToMouseIntro', function(){
        shockedJQ();
        $('#cookieBin').hide();
        $adventureItems.append(`
            <div id="mouse" class="mouse">
                <div class="mouse__body"></div>
                <div class="mouse__eye"></div>
                <div class="mouse__ear"></div>
                <div class="mouse__earInner"></div>
                <div class="mouse__nose"></div>
                <div class="mouse__tail"></div>
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
    $mainContent.on('click', '#goToMouseAnimate', function(){
        defaultJQ();
        $adventureItems.addClass('adventureMargin__mouse');
        $('#mouseIntro').replaceWith(`
            <section id="mouseAnimate">
                <p>No problem. Type and submit <span class="standOut miniMouse">$("#mouse").animate({"left": "+=150px"}, "fast").fadeOut();</span> to send the mouse on its merry way.</p>
                <form id="mouseAnimateForm">
                    <label for="mouseAnimateInput" class="sr-only">Type your answer and press enter to submit</label>
                    <input type="text" id="mouseAnimateInput">
                </form>
                <p id="validateMessage" class="validateMessage"></p>
            </section>
        `);
    });

    // (Page 11, #mouseSuccess): Page the User lands on after successful submission in (Page 10, #mouseAnimate)
    $mainContent.on('submit', '#mouseAnimateForm', function(e){
        e.preventDefault();

        let mouseAnimateAnswer = $('#mouseAnimateInput').val();

        if (mouseAnimateAnswer === '') {
            $('#validateMessage').text("Please input an answer!");
            $('input').addClass('validateHighlight');
        } else if (mouseAnimateAnswer === '$("#mouse").animate({"left": "+=150px"}, "fast").fadeOut();') {
            happyJQ();
            $('#mouse').animate({"left": "+=150px"}, "fast").fadeOut();
            $('input').val('');
            $adventureItems.removeClass('adventureMargin__mouse');
            $('#mouseAnimate').replaceWith(`
                <section id="mouseSuccess">
                <p>Yay!</p>
                    <button id="goToBrickWallIntro">Next ></button>
                </section>
            `);
        } else {
            $('#validateMessage').text("Hmm...let's try again!");
            $('input').addClass('validateHighlight');
        }
    });

    // (Page 12, #brickWallIntro): Page the User lands on after clicking "Next" in (Page 11, #mouseSuccess)
    $mainContent.on('click', '#goToBrickWallIntro', function(){
        shockedJQ();
        $adventureItems.append(`
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
        `);
        $('#mouseSuccess').replaceWith(`
            <section id="brickWallIntro">
                <p>Oh no! It looks like there is a wall blocking our way!</p>
                <button id="goToBrickWallSlideUp">Next ></button>
            </section>
        `);
    });

    // (Page 13, #brickWallSlideUp): Page the User lands on after clicking "Next" in (Page 12, #brickWallIntro)
    $mainContent.on('click', '#goToBrickWallSlideUp', function(){
        defaultJQ();
        $adventureItems.addClass('adventureMargin__brickWall');
        $('#brickWallIntro').replaceWith(`
            <section id="brickWallSlideUp">
                <p>Type and submit <span class="standOut">$("#brickWall").slideUp();</span> to slide the wall out of the way.</p>
                <form id="brickWallSlideUpForm">
                    <label for="brickWallSlideUpInput" class="sr-only">Type your answer and press enter to submit</label>
                    <input type="text" id="brickWallSlideUpInput">
                </form>
                <p id="validateMessage" class="validateMessage"></p>
            </section>
        `);
    });

    // (Page 14, #brickWallSuccess): Page the User lands on after successful submission in (Page 13, #brickWallSlideUp)
    $mainContent.on('submit', '#brickWallSlideUpForm', function(e){
        e.preventDefault();

        let brickWallSlideUpAnswer = $('#brickWallSlideUpInput').val();

        if (brickWallSlideUpAnswer === '') {
            $('#validateMessage').text("Please input an answer!");
            $('input').addClass('validateHighlight');
        } else if (brickWallSlideUpAnswer === '$("#brickWall").slideUp();') {
            happyJQ();
            $('#brickWall').slideUp();
            $('input').val('');
            $adventureItems.removeClass('adventureMargin__brickWall');
            $('#brickWallSlideUp').replaceWith(`
                <section id="brickWallSuccess">
                    <p>Nice!! You did it!</p>
                    <button id="goToEvilRobotIntro">Next ></button>
                </section>
            `);
        } else {
            $('#validateMessage').text("Hmm...let's try again!");
            $('input').addClass('validateHighlight');
        }
    });

    // (Page 15, #evilRobotIntro): Page the User lands on after clicking "Next" in (Page 14, #brickWallSuccess)
    $mainContent.on('click', '#goToEvilRobotIntro', function(){
        shockedJQ();
        $adventureItems.append(`
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
    $mainContent.on('click', '#goToEvilRobotFadeOut', function(){
        defaultJQ();
        $adventureItems.addClass('adventureMargin__evilRobot');
        $('#evilRobotIntro').replaceWith(`
            <section id="evilRobotFadeOut">
                <p>No need to fear.</p>
                <p>Type and submit <span class="standOut">$("#evilRobot").fadeOut();</span> to fade the robot away!</p>
                <form id="evilRobotFadeOutForm">
                    <label for="evilRobotFadeOutInput" class="sr-only">Type your answer and press enter to submit</label>
                    <input type="text" id="evilRobotFadeOutInput">
                </form>
                <p id="validateMessage" class="validateMessage"></p>
            </section>
        `);
    }); 

    // (Page 17, #evilRobotSuccess): Page the User lands on after successful submission in (Page 16, #evilRobotFadeOut)
    $mainContent.on('submit', '#evilRobotFadeOutForm', function(e){
        e.preventDefault();

        let evilRobotFadeOutAnswer = $('#evilRobotFadeOutInput').val();

        if (evilRobotFadeOutAnswer === '') {
            $('#validateMessage').text("Please input an answer!");
            $('input').addClass('validateHighlight');
        } else if (evilRobotFadeOutAnswer === '$("#evilRobot").fadeOut();') {
            happyJQ();
            $('#evilRobot').fadeOut();
            $('input').val('');
            $adventureItems.removeClass('adventureMargin__evilRobot');
            $('#evilRobotFadeOut').replaceWith(`
                <section id="evilRobotSuccess">
                    <p>Whew! That was close!</p>
                    <button id="goToTreasureIntro">Next ></button>
                </section>
            `);
        } else {
            $('#validateMessage').text("Hmm...let's try again!");
            $('input').addClass('validateHighlight');
        }
    });

    // (Page 18, #treasureIntro): Page the User lands on after clicking "Next" in (Page 17, #evilRobotSuccess)
    $mainContent.on('click', '#goToTreasureIntro', function(){
        shockedJQ();
        $('#evilRobotSuccess').replaceWith(`
            <section id="treasureIntro">
                <p>We have arrived at the location of the treasure! But...where is it?</p>
                <button id="goToTreasureFadeIn">Next ></button>
            </section>
        `);
        $adventureItems.append(`
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
        `).hide();
    });

    // (Page 19, #treasureFadeIn): Page the User lands on after clicking "Next" in (Page 18, #treasureIntro)
    $mainContent.on('click', '#goToTreasureFadeIn', function(){
        defaultJQ(); 
        $('#treasureIntro').replaceWith(`
            <section id="treasureFadeIn">
                <p>Type and submit <span class="standOut">$("#treasure").fadeIn();</span> to reveal the treasure!</p>
                <form id="treasureFadeInForm">
                    <label for="treasureFadeInInput" class="sr-only">Type your answer and press enter to submit</label>
                    <input type="text" id="treasureFadeInInput">
                </form>
                <p id="validateMessage" class="validateMessage"></p>
            </section>
        `);
    });

    // (Page 20, #treasureSuccess): Page the User lands on after successful submission in (Page 19, #treasureFadeIn)
    $mainContent.on('submit', '#treasureFadeInForm', function(e){
        e.preventDefault();

        let treasureFadeInAnswer = $('#treasureFadeInInput').val();

        if (treasureFadeInAnswer === '') {
            $('#validateMessage').text("Please input an answer!");
            $('input').addClass('validateHighlight');
        } else if (treasureFadeInAnswer === '$("#treasure").fadeIn();') {
            happyJQ();
            $('input').val('');
            $adventureItems.fadeIn();
            $('#treasureFadeIn').replaceWith(`
                <section id="treasureSuccess">
                    <p>You did it! Hurray!!!</p>
                    <p>CONGRATULATIONS!!!!! I'm so glad to have shared this journey with you!</p>
                </section>
            `);
            $('body').addClass('changeColour');
            $('h1, p').addClass('changeTextColour');
        } else {
            $('#validateMessage').text("Hmm...let's try again!");
            $('input').addClass('validateHighlight');
        }
    });
});