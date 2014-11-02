function adjustStyle(width) {
    width = parseInt(width);
    if ((width < 400)) {
        $("#size-stylesheet").attr("href", "../css/narrow.css");        
    } else if ((width >= 401) && (width < 800)) {
        $("#size-stylesheet").attr("href", "../css/middle.css");        
    } else {
        $("#size-stylesheet").attr("href", "../css/wide.css");        
    }
    
}

$(function () {
    
    adjustStyle($(this).width());
    $(window).resize(function() {
        adjustStyle($(this).width());
    });
    
});