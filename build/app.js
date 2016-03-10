(function(){

///Applications/MAMP/htdocs/WS-IntroAnimation/src/app/app.js

var timeOutLength = 1e3, functionsArray = [ function() {
    $(".text").addClass("together"), console.log(1);
}, function() {
    $(".logo").addClass("roll"), console.log(2);
}, function() {
    $(".text").addClass("hide"), $("#logo").addClass("show"), console.log(3);
}, function() {
    console.log(4);
}, function() {
    $(".logo").addClass("zoom"), $(".overlay").addClass("show"), console.log(5);
} ];

functionsArray.forEach(function(fn, index) {
    setTimeout(fn, timeOutLength * (index + 1));
});
})();