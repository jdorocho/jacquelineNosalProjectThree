$(document).ready(function(){
    $("#goToDemoIntro").click(function(){
        $("#intro").addClass("initiallyHidden");
        $("#demoIntro").removeClass("initiallyHidden");
    });

    $("#goToIntro").click(function(){
        $("#demoIntro").addClass("initiallyHidden");
        $("#intro").removeClass("initiallyHidden");
    });

    $("#goToDemoHide").click(function(){
        $("#demoIntro").addClass("initiallyHidden");
        $("#demoHide").removeClass("initiallyHidden");
    });

    $("#demoHideInput").click(function(){
        let hideAnswer = prompt(`Type $("#JQ").hide();`);
        if (hideAnswer === '$("#JQ").hide();') {
            $("#JQ").hide();
            $("#demoHide").addClass("initiallyHidden");
            $("#demoHideSuccess").removeClass("initiallyHidden");
            $("#textBox").addClass("textBoxExtraMargin");
        } else {
            alert("Hmm...let's try again!");
        }
    });

    $("#goToDemoShow").click(function(){
        $("#demoHideSuccess").addClass("initiallyHidden");
        $("#demoShow").removeClass("initiallyHidden");
    });

    $("#demoShowInput").click(function(){
        let showAnswer = prompt(`Type $("#JQ").show();`);
        if (showAnswer === '$("#JQ").show();') {
            $("#JQ").show();
            $("#demoShow").addClass("initiallyHidden");
            $("#demoShowSuccess").removeClass("initiallyHidden");
            $("#textBox").removeClass("textBoxExtraMargin");
        } else {
            alert("Hmm...let's try again!");
        }
    });
});