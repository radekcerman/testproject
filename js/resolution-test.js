function adjustStyle(width) {
    width = parseInt(width);
    var deep = $("#deep").attr("class");
    
    var sdeep = "";
    if (deep == 1)
        sdeep = "../";
    else if (deep == 2)
        sdeep = "../../";
    else if (deep == 3)
        sdeep = "../../../";
    else if (deep == 4)
        sdeep = "../../../../";
    
    if ((width < 400)) {
        $("#size-stylesheet").attr("href", sdeep + "css/narrow.css");        
    } else if ((width >= 401) && (width < 800)) {
        $("#size-stylesheet").attr("href", sdeep + "css/middle.css");
    } else {
        $("#size-stylesheet").attr("href", sdeep + "css/wide.css");
    }
    //console.log($("#size-stylesheet").attr("href"));
}

$(function adjust() {
    
    adjustStyle($(this).width());
    $(window).resize(function() {
        adjustStyle($(this).width());
    });
    
});