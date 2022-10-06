jQuery(document).ready(function () {
  jQuery(".slider_area_in_home_page .owl-carousel").owlCarousel({
    autoplay: false,
    items: 6,
    loop: true,
    margin: 30,
    responsiveClass: true,
    autoHeight: true,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    center: false,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
        autoWidth: false,
        margin: 11,
        autoHeight: false,
      },
      480: {
        items: 2,
        autoWidth: false,
        margin: 11,
        autoHeight: false,
      },

      580: {
        items: 3,
        autoWidth: false,
        margin: 11,
        autoHeight: false,
      },

      992: {
        items: 4,
        margin: 15,
      },

      1100: {
        items: 5,
        margin: 15,
      },

      1440: {
        items: 6,
      },
    },
  });

  jQuery(".search-home-facets .home-facet").each(function () {
    var clickiable = jQuery(this).find("h2");
    var divcontainer = jQuery(this).find(".home-facet-container");
    var ulheight = jQuery(divcontainer).find("ul li");

    var get_submenuheight = getheights(ulheight);
    function getheights(id) {
      var i = 0;
      jQuery(id).each(function (index) {
        i += parseInt(jQuery(this).outerHeight(), 10);
      });

      return i;
    }

    jQuery(clickiable).click(function () {
      jQuery(this).toggleClass("active");
      jQuery(divcontainer).toggleClass("active");

      if (!$(divcontainer).hasClass("active")) {
        $(divcontainer).css("max-height", "0");
      } else {
        $(divcontainer).css("max-height", get_submenuheight);
      }
    });
  });

  jQuery(".search-home-facets .home-facet h2").click(function () {
    if (jQuery(".search-home-facets .home-facet h2").hasClass("active")) {
      $(".menu_opening_overlay").addClass("active");
      $(".home_page_content").css("min-height", "750px");
    } else {
      $(".menu_opening_overlay").removeClass("active");
      $(".home_page_content").css("min-height", "0px");
    }
  });

  jQuery(".menu_opening_overlay").click(function () {
    jQuery(".search-home-facets .home-facet h2").removeClass("active");
    jQuery(this).removeClass("active");
    $(".home_page_content").css("min-height", "0px");
    $(".home-facet-container").removeClass("active").css("max-height", "0");
  });

  //Search Page List only 2 item list show function
  jQuery(
    "#content .record-list .media .media-body .savedLists.loaded ul li"
  ).addClass("active");

  jQuery(".savedLists.loaded").hide();

  jQuery(
    "#content .record-list .media .media-body .savedLists.loaded ul li:gt(2)"
  ).hide();
});

// used another function js
// used another function js
// used another function js
// used another function js
// used another function js
// used another function js

(function ($) {
  "use strict";

  $(document).ready(function () {
    var loginPageSvg =
      '<svg width="23" height="21" viewBox="0 0 23 21" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.47529 4.32609L0.220653 1.34803L1.69341 0L22.3005 18.8629L20.8278 20.21L17.3827 17.0567C15.5521 18.1194 13.4283 18.6822 11.2606 18.6791C5.64851 18.6791 0.979408 14.9827 0 10.105C0.447582 7.88596 1.667 5.85884 3.47633 4.32609H3.47529ZM14.1301 14.0796L12.6064 12.6848C12.0236 12.9401 11.3686 13.0235 10.7318 12.9238C10.095 12.824 9.50765 12.5458 9.0508 12.1276C8.59395 11.7095 8.29007 11.1719 8.18104 10.589C8.07201 10.0061 8.16321 9.40664 8.44206 8.87319L6.91831 7.47848C6.25605 8.39447 5.96 9.4918 6.08027 10.5847C6.20055 11.6775 6.72976 12.6988 7.57831 13.4754C8.42685 14.2521 9.54257 14.7365 10.7366 14.8466C11.9305 14.9567 13.1294 14.6857 14.1301 14.0796ZM7.07027 2.25498C8.36816 1.78817 9.78263 1.53094 11.2606 1.53094C16.8727 1.53094 21.5418 5.22732 22.5212 10.105C22.2023 11.6919 21.4854 13.1894 20.4271 14.4797L16.4095 10.8024C16.5289 10.0665 16.4582 9.31534 16.2034 8.60897C15.9485 7.90261 15.5164 7.26071 14.9417 6.7347C14.367 6.20868 13.6657 5.81318 12.894 5.57987C12.1223 5.34657 11.3016 5.28194 10.4977 5.39117L7.07027 2.25593V2.25498Z" fill="#CFCFCF"/></svg>';

    $('.update_login_wraper .form-group input[type="text"]').attr(
      "placeholder",
      "Enter your name"
    );
    $('.update_login_wraper .form-group input[type="password"]').attr(
      "placeholder",
      "Enter your password"
    );
    $('.update_login_wraper .form-group input[type="password"]')
      .parents(".form-group")
      .append(loginPageSvg);

    $(".update_login_wraper .form-group svg").on("click", function () {
      $(this).parents(".form-group").find("input").attr("type", "text");
    });

    /*
    var redclass = $(".flash-message").attr("class");
    $("body").addClass(redclass);
    */

    $(".flash-message.alert.alert-danger").attr("data-visible", "active_alert");
    var redclass = $(".flash-message.alert.alert-danger").attr("data-visible");
    $("body").addClass(redclass);

    /*
    $(".update_checkout_page_right_contents .search-header.hidden-print .search-controls .checkout_select_icon").on('click', function(){

        $(".update_checkout_page_right_contents #sort_options_1").toggleClass("active");
        console.log("sobuj");

    });

*/

    var get_contentheight = $(
      "body.template-dir-holds.template-name-list #content .mainbody.left"
    ).height();

    $("body.template-dir-holds.template-name-list #myresearch-sidebar").css(
      "height",
      get_contentheight
    );

    $(
      "#myresearch-sidebar .myresearch-menu a,body.template-dir-myresearch.template-name-mylist #content .mainbody.left form .record-list li .media .media-body .result-links.hidden-print a,body.template-dir-myresearch.template-name-mylist #content .mainbody.left nav.search-header.hidden-print .search-controls a"
    ).each(function () {
      var atagclassname = $(this).text();
      var atagclassnameh = atagclassname.replace(/ /g, "");
      $(this).addClass(atagclassnameh);
    });

    // $("select#sort_options_1").wrap('<div class="search_select_div"></div>');
    $("<span class='arrow_span'></span>").insertAfter(
      ".template-dir-search.template-name-results .sorting_search_controll_area select#sort_options_1, body.template-dir-myresearch.template-name-mylist #content .mainbody.left nav.search-header.hidden-print .search-controls form select, body.template-dir-author.template-name-results .search-controls .sorting_search_controll_area select#sort_options_1,body.template-dir-myresearch.template-name-profile .container .mainbody.left table.table.table-striped td select, body.template-name-advanced .adv-search .adv-term-type, body.template-dir-myresearch.template-name-checkedout form.search-sort #sort_options_1,body.template-name-advanced .adv-group-match select, body.template-name-advanced #groupJoin select,.update_checkout_page_right_contents .search-header.hidden-print select, #alphaBrowseForm_source,.template-dir-search.template-name-reserves .update_right_area .form-search-reserves select"
    );

    $(
      ".update_search_result_wraper .mainbody.left .facet.top-facet:gt(14)"
    ).hide();
    $(
      ".update_search_result_wraper .mainbody.left .more-less-btn-wrapper .btn.more-btn"
    ).click(function () {
      $(
        ".update_search_result_wraper .mainbody.left .facet.top-facet:gt(14)"
      ).show();
    });

    $(
      ".update_search_result_wraper .mainbody.left .more-less-btn-wrapper .btn.less-btn"
    ).click(function () {
      $(
        ".update_search_result_wraper .mainbody.left .facet.top-facet:gt(14)"
      ).hide();
    });

    var getdelete = $(".fa.fa-fw.fa-trash-o").detach();
    $("a.Delete").prepend(getdelete);
    $("a.Delete").each(function () {
      $(this).children("i:gt(0)").remove();
    });
    var getedit = $("i.fa.fa-fw.fa-edit").detach();
    $("a.Edit").prepend(getedit);
    $("a.Edit").each(function () {
      $(this).children("i:gt(0)").remove();
    });

    $(".searchtools.hidden-print a").each(function () {
      var get_text = $(this).text();
      var atagclassnamehv2 = get_text.replace(/ /g, "");
      $(this).addClass(atagclassnamehv2);
    });

    var today = new Date();
    var day = today.getDate();
    var month = today.getMonth() + 1;
    var year = today.getFullYear();

    var getPrivMonth = month - 1;

    //when month value single desit
    if (getPrivMonth < 10) {
      var getPrivMonth = "0" + getPrivMonth;
    }

    // //Calculate Prev Year
    if (month == 12) {
      var privUpdateYear = year - 1;
    } else {
      var privUpdateYear = year;
    }

    //when Day value single desit
    if (day < 10) {
      day = "0" + day;
    }
    if (month < 10) {
      month = "0" + month;
    }

    var maxDateRange = year + "-" + month + "-" + day;
    var minDateRange = privUpdateYear + "-" + getPrivMonth + "-" + day;

    $(
      ".update_checkout_page_right_contents .find_items_withDate #to_date"
    ).attr("value", maxDateRange);
    $(
      ".update_checkout_page_right_contents .find_items_withDate #to_date"
    ).attr("disabled", "disabled");
    $(
      ".update_checkout_page_right_contents .find_items_withDate #to_date"
    ).attr("max", maxDateRange);
    $(
      ".update_checkout_page_right_contents .find_items_withDate #form_date"
    ).attr("min", minDateRange);
    $(
      ".update_checkout_page_right_contents .find_items_withDate #form_date"
    ).attr("max", maxDateRange);

    //When Date Field on change Function
    $(
      ".update_checkout_page_right_contents .find_items_withDate #form_date"
    ).change(function () {
      var getSelectDate = $(this).val();

      if (getSelectDate.length > 0) {
        $(".form-group.olternative_select").addClass("active");
      } else {
        $(".form-group.olternative_select").removeClass("active");
      }

      var todayDates = new Date();
      var todayDates_day = todayDates.getDate();

      var selectDateToday = new Date(getSelectDate);
      var selectDateToday2 = selectDateToday.getDate();

      var canculateDateRatio = todayDates_day - selectDateToday2;
      console.log(canculateDateRatio);

      if (canculateDateRatio >= 2) {
        $(
          "form.form-search-newitem label.btn.btn-primary:nth-child(2)"
        ).click();
      }

      if (canculateDateRatio == 2) {
        $(
          "form.form-search-newitem label.btn.btn-primary:nth-child(1)"
        ).click();
      }

      if (canculateDateRatio >= 6) {
        $(
          "form.form-search-newitem label.btn.btn-primary:nth-child(3)"
        ).click();
      }
    });

    //When Select Option Select Then function
    $(
      ".update_checkout_page_right_contents .form-group.olternative_select"
    ).change(function () {
      var selectedValue = $(
        ".update_checkout_page_right_contents .form-group.olternative_select"
      )
        .find(":selected")
        .val();

      if (selectedValue.length > 0) {
        $(
          ".update_checkout_page_right_contents .find_items_withDate #form_date"
        ).attr("disabled", "disabled");
      } else {
        $(
          ".update_checkout_page_right_contents .find_items_withDate #form_date"
        ).removeAttr("disabled", " ");
      }
    });

    $("#find_forms .Choose_tiem_period select").change(function () {
      var vl = $(this).find("option:selected").attr("value");
      $(this).find("option:selected").attr("selected-value", vl);
      if (vl == 1) {
        $(
          "form.form-search-newitem label.btn.btn-primary:nth-child(1)"
        ).click();
      }

      if (vl == 2) {
        $(
          "form.form-search-newitem label.btn.btn-primary:nth-child(2)"
        ).click();
      }
      if (vl == 3) {
        $(
          "form.form-search-newitem label.btn.btn-primary:nth-child(3)"
        ).click();
      }
    });

    $("#find_forms .find_form_content button").click(function () {
      $('form.form-search-newitem input[type="submit"]')
        .addClass("clicked")
        .click();
    });

    var noresult = $(".search-stats h2").text();

    $("body").addClass(noresult);

    // jQuery("body.template-name-advanced .adv-search a.adv-term-remove.hidden")
    //   .prev("span")
    //   .addClass("removebtnnotfound");

    var newbodyclass = $(
      "body.template-dir-content.template-name-content .main_body h1"
    ).text();
    var atagclassnamehv545 = newbodyclass.replace(/ /g, "");

    $("body").addClass(atagclassnamehv545);

    $(".update_listing_content_wraper_box .browse-list").each(function (i) {
      $(this).attr("data-classname", "browse_list_item" + (i + 1));
    });

    var classnames = $(
      ".update_listing_content_wraper_box .browse-list[data-classname='browse_list_item1']"
    ).attr("data-classname");

    var classnames1 = $(
      ".update_listing_content_wraper_box .browse-list[data-classname='browse_list_item2']"
    ).attr("data-classname");
    var classnames2 = $(
      ".update_listing_content_wraper_box .browse-list[data-classname='browse_list_item3']"
    ).attr("data-classname");

    $("body").addClass(classnames).addClass(classnames1).addClass(classnames2);

    if ($("body").hasClass("browse_list_item2")) {
      $("html, body").animate({
        scrollTop: $(window).scrollTop() + 1,
      });
    }

    var chkReadyState = setInterval(function () {
      if (document.readyState == "complete") {
        // clear the interval
        clearInterval(chkReadyState);
        $("body.browse_list_item2 header").css("display", "block");
      }
    }, 500);

    $("body.template-dir-record.template-name-view .record-nav ul li").each(
      function () {
        var addclasspr = $(this).children("a").text();
        var atagclassnamehv5gfh45 = addclasspr.replace(/ /g, "");

        $(this).addClass(atagclassnamehv5gfh45);
      }
    );

    $(
      "body.template-dir-record.template-name-view .record-tabs .nav.nav-tabs li"
    ).click(function () {
      if ($(this).hasClass("active")) {
        var getactualtext = $(this).children("a").text();
        var atagclassnamehv5gfh564545 = getactualtext.replace(/ /g, "");

        $(".tab-content .tab-pane.details-tab").addClass(
          atagclassnamehv5gfh564545
        );
      } else {
        $(".tab-content .tab-pane.details-tab").removeClass(
          atagclassnamehv5gfh564545
        );
      }
    });

    setTimeout(function () {}, 1000);

    var get_contentheight = $(
      "body.template-dir-record.template-name-view .mainbody.left"
    ).height();
    $(
      "body.template-dir-record.template-name-view .side_bar_left.sidebar.right.hidden-print"
    ).css("height", get_contentheight);

    var getlicount = $(
      "body.template-dir-record.template-name-view nav.record-nav .action-toolbar li"
    ).length;
    if (getlicount > 1) {
      console.log("action toolbar li = " + getlicount);
    }

    $(".nav.searchbox.hidden-print .adv_search_links a").each(function () {
      var atagclassname = $(this).text();
      var atagclassnameh = atagclassname.replace(/ /g, "");
      $("body").addClass(atagclassnameh);
    });

    var gettexthere = $(".alert.alert-danger p:first-child").text();
    var ptagclassnameh = gettexthere.replace(/ /g, "");
    $("body").addClass(ptagclassnameh);

    $(
      "header .navbar-nav > li#loginOptions a, li.logoutOptions a, header .navbar-nav > li > a"
    ).each(function () {
      var getnavclass = $(this).text();
      var getnavclassv12 = getnavclass.replace(/ /g, "");
      $(this).addClass(getnavclassv12);
    });

    //View record page ankor link new tab function add
    $(".template-dir-record.template-name-view .media .record-cover-link").attr(
      "target",
      "_blank"
    );

    $(
      "div#side-panel-genre_facet div#side-collapse-genre_facet, div#side-panel-era_facet div#side-collapse-era_facet, div#side-panel-geographic_facet div#side-collapse-geographic_facet, div#side-panel-publishDate div#side-collapse-publishDate"
    )
      .removeClass("in")
      .addClass("neeed_to_collapse_off");

    //Mobile devise sidebar add
    var getWindowActualWidth = $(window).width();
    //If window width less than 768 function
    if (getWindowActualWidth < 851) {
      $("#myresearch-sidebar").addClass("active_mobile_sidebar");
      $("#myresearch-sidebar").append(
        "<div class='mobile_sidebar_overlay'></div><i class='mobile_sidebar_overlay fa fa-times'><i>"
      );

      $(".myresearch-menu").prev("h3").addClass("your_list_menu");
      $(".myresearch-menu.account-menu")
        .prev("h3")
        .removeClass("your_list_menu");
      $(".myresearch-menu.account-menu").prev("h3").addClass("account_menu");

      $(".your_list_menu").next(".myresearch-menu").addClass("your_menu_list");
    }

    //on mobile devies when account button click function
    $(".mobile_navbar_new a.mobile_login_button").on("click", function () {
      var mydiv = $("body .sidebar");
      if ($(mydiv).is("#myresearch-sidebar")) {
        $("#myresearch-sidebar").addClass("show_mobile_sidebar");
        function showOverlay() {
          $("#myresearch-sidebar").addClass("show_mobile_sidebar_overlay");
        }

        setTimeout(showOverlay, 700);
        return false;
      } else {
        return true;
      }
    });

    $(
      "body.logged-in.template-dir-content.template-name-content.FAQs a.mobile_login_button"
    ).on("click", function () {
      window.location = $(this).attr("href");
    });

    //same function for another button
    $(".banner .logoutOptions a.YourAccount").on("click", function () {
      var getWindowActualWidth2 = $(window).width();
      if (getWindowActualWidth2 > 767 && getWindowActualWidth2 < 851) {
        $("#myresearch-sidebar").addClass("show_mobile_sidebar");
        function showOverlay() {
          $("#myresearch-sidebar").addClass("show_mobile_sidebar_overlay");
        }
        setTimeout(showOverlay, 700);
        return false;
      } else {
        return true;
      }
    });
    // $(".template-name-results .banner .logoutOptions a.YourAccount").on(
    //   "click",
    //   function () {
    //     window.location = $(this).attr("href");
    //   }
    // );
    //window resize function for mobile sidebar function

    $(window).on("resize", function () {
      var getWindowActualWidthResize = $(window).width();
      if (getWindowActualWidthResize > 850) {
        $("#myresearch-sidebar").removeClass("active_mobile_sidebar");
        $("#myresearch-sidebar .mobile_sidebar_overlay").remove();
      } else if (getWindowActualWidthResize < 851) {
        $("#myresearch-sidebar").addClass("active_mobile_sidebar");

        var hasItemOverlay = $(
          "#myresearch-sidebar .mobile_sidebar_overlay"
        ).length;
        if (hasItemOverlay == 0) {
          $("#myresearch-sidebar").append(
            "<div class='mobile_sidebar_overlay'></div>"
          );
        }
      }
    });

    //On  mobile device when sidebar black overlay click function
    $("body .mobile_sidebar_overlay").click(function () {
      $("#myresearch-sidebar").removeClass("show_mobile_sidebar_overlay");

      function hideSidebar() {
        $("#myresearch-sidebar").removeClass("show_mobile_sidebar");
      }
      setTimeout(hideSidebar, 400);
    });
    $("h3.account_menu, .myresearch-menu.account-menu").addClass("active");
    //sidebar heading click function for 850px
    $("#myresearch-sidebar .your_list_menu").on("click", function () {
      $(this).toggleClass("active");
      $(this).next(".myresearch-menu.your_menu_list").toggleClass("active");
    });

    $("#myresearch-sidebar .account_menu").on("click", function () {
      $(this).toggleClass("active");
      $(this).next(".myresearch-menu.account-menu").toggleClass("active");
    });

    $("#myresearch-sidebar h3.your_list_menu").click(function () {
      if ($("h3.your_list_menu").hasClass("active")) {
        $("h3.account_menu").removeClass("active");
        $(".myresearch-menu.account-menu").removeClass("active");
      }
    });

    $("#myresearch-sidebar h3.account_menu").click(function () {
      if ($(this).hasClass("active")) {
        $("h3.your_list_menu").removeClass("active");
        $(".myresearch-menu.your_menu_list").removeClass("active");
      }
    });

    $(".searchtools.hidden-print").append(
      '<a href="#" style="display: none" class="filter_button_search_result">Filter</a>'
    );

    $(
      "<div class='mobile_sidebar_overlay'></div><i style='display: none' class='mobile_sidebar_overlay fa fa-times'><i>"
    ).insertAfter(
      ".template-name-results .update_search_result_wraper #search-sidebar"
    );

    $("a.filter_button_search_result").click(function (event) {
      event.preventDefault();
      $(
        ".template-name-results .update_search_result_wraper #search-sidebar, .mobile_sidebar_overlay"
      ).addClass("active");
    });

    $(".mobile_sidebar_overlay").click(function () {
      $(".mobile_sidebar_overlay").removeClass("active");
      $(
        ".template-name-results .update_search_result_wraper #search-sidebar"
      ).removeClass("active");
    });
    $(
      "body.template-dir-browse.template-name-home.browse_list_item1.browse_list_item2"
    ).removeClass("browse_list_item1");

    var main_wrapper = $(
      ".template-dir-browse.template-name-home.browse_list_item1 .update_listing_content_wraper_box"
    );

    $(main_wrapper).append(
      '<div class="getlist2 content_loader_browse_page" style="display: none"></div><div class="getlist3 content_loader_browse_page" style="display: none;margin-left:15px"></div><div class="getlist4 content_loader_browse_page" style="display: none;margin-left:15px"></div>'
    );

    $(
      ".template-dir-browse.template-name-home.browse_list_item1 .update_listing_content_wraper_box .browse-list:nth-child(1) a"
    ).each(function () {
      $(this).click(function (event) {
        event.preventDefault();

        if ($(window).width() < 550) {
          $("html, body").animate({
            scrollTop:
              $(
                ".template-dir-browse.template-name-home.browse_list_item1 .update_listing_content_wraper_box .getlist2"
              ).offset().top - 60,
          });
        }

        var thisa = $(this);
        $(
          ".template-dir-browse.template-name-home.browse_list_item1 .update_listing_content_wraper_box .browse-list:nth-child(1) a"
        ).removeClass("active");
        $(thisa).addClass("active");
        $(
          ".getlist3.content_loader_browse_page, .getlist4.content_loader_browse_page"
        ).html("");
        var getattr = $(thisa).attr("href");
        var url =
          "https://" +
          document.domain +
          getattr +
          " .update_listing_content_wraper_box .browse-list:nth-child(2)";
        $(
          ".template-dir-browse.template-name-home.browse_list_item1 .update_listing_content_wraper_box .getlist2"
        )
          .show()
          .html("Content loading...")
          .load(url, function () {
            $(
              ".template-dir-browse.template-name-home.browse_list_item1 .update_listing_content_wraper_box .getlist2.content_loader_browse_page a"
            ).each(function () {
              $(this).click(function (event) {
                event.preventDefault();

                if ($(window).width() < 850) {
                  $("html, body").animate({
                    scrollTop:
                      $(
                        ".template-dir-browse.template-name-home.browse_list_item1 .update_listing_content_wraper_box .getlist3"
                      ).offset().top - 60,
                  });
                }

                var thisa = $(this);
                $(
                  ".template-dir-browse.template-name-home.browse_list_item1 .update_listing_content_wraper_box .getlist2.content_loader_browse_page a"
                ).removeClass("active");
                $(thisa).addClass("active");
                $(".getlist4.content_loader_browse_page").hide();
                var getattr = $(thisa).attr("href");
                var url =
                  "https://" +
                  document.domain +
                  getattr +
                  " .update_listing_content_wraper_box .browse-list:nth-child(3)";

                $(
                  ".template-dir-browse.template-name-home.browse_list_item1 .update_listing_content_wraper_box .getlist3"
                )
                  .show()
                  .load(url, function () {
                    $(
                      ".template-dir-browse.template-name-home.browse_list_item1 .update_listing_content_wraper_box .getlist3.content_loader_browse_page a"
                    ).each(function () {
                      $(this).click(function (event) {
                        event.preventDefault();

                        if ($(window).width() < 550) {
                          $("html, body").animate({
                            scrollTop:
                              $(
                                ".template-dir-browse.template-name-home.browse_list_item1 .update_listing_content_wraper_box .getlist4"
                              ).offset().top - 60,
                          });
                        }

                        var thisa = $(this);
                        $(
                          ".template-dir-browse.template-name-home.browse_list_item1 .update_listing_content_wraper_box .getlist3.content_loader_browse_page a"
                        ).removeClass("active");
                        $(thisa).addClass("active");
                        var getattr = $(thisa).attr("href");
                        // /vufind/Tag/Home?lookfor=book
                        if (getattr.indexOf("?lookfor") >= 0) {
                          window.location = $(thisa).attr("href");
                        } else {
                          console.log("the url not found");
                        }

                        var url =
                          "https://" +
                          document.domain +
                          getattr +
                          " .update_listing_content_wraper_box .browse-list:nth-child(4)";
                        $(
                          ".template-dir-browse.template-name-home.browse_list_item1 .update_listing_content_wraper_box .getlist4"
                        )
                          .show()
                          .load(url);
                      });
                      $(
                        ".template-dir-browse.template-name-home.browse_list_item1 .update_listing_content_wraper_box .getlist3.content_loader_browse_page a.browse-item.view-record"
                      ).click(function () {
                        window.location = $(this).attr("href");
                      });
                    });
                  });
              });
            });
          });
      });
    });
  }); //Document Ready function end
})(jQuery);
