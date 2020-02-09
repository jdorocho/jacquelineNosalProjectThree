$(document).ready(function(){
    $('#mainContent').on('click', '#goToDemoIntro', function(){
        $('#intro').replaceWith(`
            <section id="demoIntro">
                <p>We're going to be using some jQuery Effect Methods to help us on our journey.</p>
                <button id="goToIntro">< Back</button>
                <button id="goToDemoHide">Next ></button>
            </section>
        `);
    });

    $('#mainContent').on('click', "#goToIntro", function(){
        $('#demoIntro').replaceWith(`
            <section id="intro">
                <p>Hi, I'm a blob named JQ!</p> 
                <p>Let's go on an adventure and learn more about jQuery together!</p>
                <button id="goToDemoIntro">Let's Go!</button id="go">
            </section>
        `);
    });

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
                    <button id="goToDemoHide">< Back</button>
                    <button id="goToDemoShow">Next ></button>
                </section>
            `);
        } else {
            $('#validateMessage').text("Hmm...let's try again!");
            $('input').addClass('validateHighlight');
        }
    });

    $('#mainContent').on('click', '#goToDemoHide', function(){
        $('#JQ').show();
        $('#demoHideSuccess').replaceWith(`
            <section id="demoHide">
                <p>Let's try one right now!</p> 
                <p>Type <span class="standOut">$("#JQ").hide();</span>, and press enter to submit.</p>
                <p>This is case-sensitive, and spacing matters!</p>
                <form>
                    <input type="text" id="demoHideInput">
                </form>
                <p id="validateMessage" class="validateMessage"></p>
            </section>
        `);
    });

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
                    <button id="goToDemoShow">< Back</button>
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

    $('#mainContent').on('click', '#goToDemoShow', function(){
        $('#JQ__happyEyes').hide();
        $('#JQ__defaultEyes').show();
        $('#demoShowSuccess').replaceWith(`
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
                <button id="goToDemoShowSuccess">< Back</button>
                <button id="goToCookiesShow">Next ></button>
            </section>
        `);
    });

    $('#mainContent').on('click', '#goToDemoShowSuccess', function(){
        $('#JQ__defaultEyes').hide();
        $('#JQ__happyEyes').show();
        $('#cookiesIntro').replaceWith(`
            <section id="demoShowSuccess">
                <p>Way to go!</p>
                <button id="goToDemoShow">< Back</button>
                <button id="goToCookiesIntro">Next ></button>
            </section>
        `);
    });

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
                <section id="cookiesShowSuccess">
                    <p>Yum! Delicious!</p>
                    <button id="goToCookiesShow">< Back</button>
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

    $('#mainContent').on('click', '#goToCookiesShow', function(){
        $('#JQ__happyEyes').hide();
        $('#JQ__defaultEyes').show();
        $('#cookieBin').hide();
        $('#cookiesShowSuccess').replaceWith(`
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
        $('#cookiesShowSuccess').replaceWith(`
            <section id="mouseIntro">
                <p>But...uh oh! The crumbs must have attracted a mouse.</p>
                <button id="goToCookiesShowSuccess">< Back</button>
                <button id="goToMouseAnimate">Next ></button>
            </section>
        `);
    });

    $('#mainContent').on('click', '#goToCookiesShowSuccess', function(){
        $('#JQ__defaultEyes').hide();
        $('#JQ__happyEyes').show();
        $('#JQ__wonderUhOhMouth').hide();
        $('#JQ__defaultMouth').show();
        $('#cookieBin').show();
        $('#mouse').hide();
        $('#mouseIntro').replaceWith(`
            <section id="cookiesShowSuccess">
                <p>Yum! Delicious!</p>
                <button id="goToCookiesShow">< Back</button>
                <button id="goToMouseIntro">Next ></button>
            </section>
        `);
    })

    $('#mainContent').on('click', '#goToMouseAnimate', function(){
        $('#JQ__wonderUhOhMouth').hide();
        $('#JQ__defaultMouth').show();
        $('#adventureItems').addClass('adventureMargin');
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

    $('#mainContent').on('submit', '#mouseAnimateForm', function(e){
        e.preventDefault();

        let mouseAnimateAnswer = $('#mouseAnimateInput').val();

        if (mouseAnimateAnswer === '') {
            $('#validateMessage').text("Please input an answer!");
            $('input').addClass('validateHighlight');
        } else if (mouseAnimateAnswer === '$("#mouse").animate({"left": "+=150px"}, "fast").fadeOut();') {
            $('#mouse').animate({"left": "+=150px"}, "fast").fadeOut();
            $('input').val('');
            $('#adventureItems').removeClass('adventureMargin');
            $('#mouseAnimate').replaceWith(`
                <section id="mouseSuccess">
                <p>Yay!</p>
                    <button id="goToMouseAnimate">< Back</button>
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

    $('#mainContent').on('click', '#goToMouseAnimate', function(){
        $('#JQ__happyEyes').hide();
        $('#JQ__defaultEyes').show();
        $('#mouse').animate({"left": "50px"}, "fast");
        $('#mouse').show();
        $('#mouseSuccess').replaceWith(`
            <section id="mouseAnimate">
                <p>No problem. Type and submit <span class="standOut">$("#mouse").animate({"left": "+=150px"}, "fast").fadeOut();</span> to send the mouse on its merry way.</p>
                <form id="mouseAnimateForm">
                    <input type="text" id="mouseAnimateInput">
                </form>
                <p id="validateMessage" class="validateMessage"></p>
            </section>
        `);
    });

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
                <button id="goToMouseSuccess">< Back</button>
                <button id="goToBrickWallSlideUp">Next ></button>
            </section>
        `);
    });

    
});