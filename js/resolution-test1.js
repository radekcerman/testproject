function adjustStyle(width) {
    width = parseInt(width);
    if ((width < 400)) {
        $("#size-stylesheet").attr("href", "../css/wide1.css");

        $("#img1").attr("src", "../img/slide/wide/1.jpg");
        
    } else if ((width >= 401) && (width < 800)) {
        $("#size-stylesheet").attr("href", "../css/wide1.css");

        $("#img1").attr("src", "../img/slide/wide/2.jpg");
        
    } else {
        $("#size-stylesheet").attr("href", "../css/wide1.css");

        $("#img1").attr("src", "../img/slide/wide/3.jpg");
        
    }
    
}

$(function () {
    
    adjustStyle($(this).width());
    $(window).resize(function() {
        adjustStyle($(this).width());
    });
    
});