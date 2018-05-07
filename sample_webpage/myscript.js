$("a").attr("href", "http://www.codefactory.wien");
$("code").css("color", "red");
$("ol>li").css("background-color", "#2a7b90");
$("textarea").attr("placeholder", "Express your opinion");
$("img").attr("src", "https://upload.wikimedia.org/wikipedia/de/thumb/5/50/DFB-Logo_1945.svg/100px-DFB-Logo_1945.svg.png"
);
$("blockquote").css("background-color", "orange").css("font-style", "italic");
$("#logo").css("color", "black");
$(".gray").css("color", "white");
$(".date").remove();
$(".sidemenu:eq(0)").append("<li><a href='#'>New Templates</a></li>", "<li><a href='#'>Order Template</a></li>", "<li><a href='#'>Contact Us</a></li>" );
$("p:contains('Be not afraid of life. Believe that')").html("When someone says: 'I want a programming language in which I need only to say what I wish, and done', give him a lollipop.");