$(document).ready(function(){
// $("form").submit(function(e) {

// 	e.preventDefault();
// });
//$("form").remove();

$("article").prepend("<div>1</div>", "<div>2</div>", "<div>3</div>", "<div>4</div>", "<div>5</div>");

$("input").attr("value", "search for...");

$("div").addClass("box");

$("a[href^='http://www.codefactory.']").attr("href", "http://www.codefactory.wien");
});