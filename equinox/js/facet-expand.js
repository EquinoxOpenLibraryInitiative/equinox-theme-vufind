/*
 * Copyright (C) 2023 Equinox Open Library Initiative
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of version 2 of the GNU General Public
 * License as published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public
 * License along with this program; if not, write to the Free
 * Software Foundation, Inc., 51 Franklin Street, Fifth Floor,
 * Boston, MA 02110-1301 USA
 * 
 */
$(document).ready(function () {

    $('.home-facet').each(function() {
        // we will have to set the width explicitly for absolute positioned dropdowns
        // since these facet boxes are flex items, width is variable
        var w = $(this).css("width");
        $('.home-facet-container', this).addClass('dropdown').css('width', w);

        // tabindex is needed to allow focus via keyboard
        $('h2', this)
            .addClass('dropdown-toggle')
            .attr('tabindex', 0)
            .attr('aria-expanded', false)
            .attr('aria-haspopup', true);

        // the individual facet links should be removed from the tabbing order for now
        $('.home-facet-container li a', this).attr('tabindex', -1);
    });

    // When opening, links are added back to the tabbing order
    // When closing, links are removed from tabbing order
    $('.dropdown-toggle').click(function() { 
        $(this).next('.dropdown').slideToggle().toggleClass('open');
        
        $('.dropdown li a').attr('tabindex', -1);
        $('.dropdown.open li a').attr('tabindex', 0);

        // Toggle ARIA states
        if ( $(this).next('.dropdown').hasClass('open') ) {
            $(this).attr('aria-expanded', true);
        }
        else {
            $(this).attr('aria-expanded', false);
        }
    });

    // Pressing enter on a focused H2 should toggle open/close
    $('.dropdown-toggle').on('keydown', function(event) { 
        if (event.key === "Enter" || event.key === "ArrowDown") {
            event.preventDefault();
            $(this).next('.dropdown').slideToggle().toggleClass('open');
            
            $('.dropdown li a').attr('tabindex', -1);
            $('.dropdown.open li a').attr('tabindex', 0);
            
            // Toggle ARIA states
            if ( $(this).next('.dropdown').hasClass('open') ) {
                $(this).attr('aria-expanded', true);
            }
            else {
                $(this).attr('aria-expanded', false);
            }
        }
    });

    // Close the dropdown on Esc (anywhere in the document)
    $(document).on('keydown', function(event) {
        if (event.keyCode == 27) {
            event.preventDefault();
            $('.dropdown-toggle[aria-expanded=true]').each(function() {
                $(this).next('.dropdown').slideToggle().toggleClass('open');
                $('li a', $(this).next('.dropdown')).attr('tabindex', -1);
                // Toggle ARIA states
                $(this).attr('aria-expanded', false);
            });
        }
    });
});
