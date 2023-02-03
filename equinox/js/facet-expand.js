$(document).ready(function () {

    $('.home-facet').each(function() {
        // we will have to set the width explicitly for absolute positioned dropdowns
        // since these facet boxes are flex items, width is variable
        var w = $(this).css("width");
        $('.home-facet-container', this).addClass('dropdown').css('width', w);

        // tabindex is needed to allow focus via keyboard
        $('h2', this).addClass('dropdown-toggle').attr('tabindex', 0);
        // the individual facet links should be removed from the tabbing order for now
        $('.home-facet-container li a', this).attr('tabindex', -1);
    });

    // When opening, links are added back to the tabbing order
    // When closing, links are removed from tabbing order
    $('.dropdown-toggle').click(function() { 
        $(this).next('.dropdown').slideToggle().toggleClass('open');
        $('.dropdown li a').attr('tabindex', -1);
        $('.dropdown.open li a').attr('tabindex', 0);
    });

    // Pressing enter on a focused H2 should toggle open/close
    $('.dropdown-toggle').on('keydown', function(event) { 
        if (event.key === "Enter") {
            event.preventDefault();
            $(this).next('.dropdown').slideToggle().toggleClass('open');
            $('.dropdown li a').attr('tabindex', -1);
            $('.dropdown.open li a').attr('tabindex', 0);
        }
    });

    // Close the dropdown on Esc (anywhere in the document)
    $(document).on('keydown', function(event) {
        if (event.keyCode == 27) {
            $('.dropdown.open').slideToggle().toggleClass('open');
            $('li a', this).attr('tabindex', -1);
        }
    });
});