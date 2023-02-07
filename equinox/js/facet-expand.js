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

    // Click or press enter or down arrow to toggle open/close
    $('.dropdown-toggle').on('click keydown', function (event) {
        if (event.type == "keydown") {
            if (event.key == "Enter" || event.key == "ArrowDown") {
                kbd_dropdown_toggle(event);
            }
        } else {
            kbd_dropdown_toggle(event);
        }
    });

    // Close all dropdowns on Esc (anywhere in the document)
    $(document).on('keydown', function(event) {
        if (event.keyCode == 27) {
            $('.dropdown.open').slideToggle().toggleClass('open');
            $('li a', this).attr('tabindex', -1);
        }
    });

    function kbd_dropdown_toggle(event) {
        event.preventDefault();
        // Toggle open class and slide open
        $(this).next('.dropdown').slideToggle().toggleClass('open');
        
        // Toggle ARIA states and force false attribute to be present
        $(this).next('.dropdown').toggleAttribute('aria-expanded', true);
        
        // Remove from tabbing order any links in closed dropdowns
        $('.dropdown li a').attr('tabindex', -1);
        
        // When opening, links are added back to the tabbing order
        $('.dropdown.open li a').attr('tabindex', 0);
    }
});