$(document).ready(function () {

    $('.home-facet').each(function() {
        // we will have to set the width explicitly for absolute positioned dropdowns
        // since these facet boxes are flex items, width is variable
        var w = $(this).css("width");
        // tabindex is needed to allow focus via keyboard
        $('h2', this).addClass('dropdown-toggle').attr('tabindex', 0);
        $('.home-facet-container', this).addClass('dropdown').css('width', w);
    });

    $('.dropdown-toggle').click(function() { 
        $(this).next('.dropdown').slideToggle();
    });

    $('.dropdown-toggle').on('keydown', function(event) { 
        if (event.key === "Enter") {
            event.preventDefault();
            $(this).next('.dropdown').slideToggle();
        }
    }); 
});