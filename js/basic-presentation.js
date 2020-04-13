$(document).ready(function() {
    impress().init();
    var rootElement = document.getElementById("impress");
    var video = document.getElementById("video");
    var slide_from = null;
    rootElement.addEventListener("impress:stepenter", function(event) {
        if (slide_from) {
            slide_from.find(".substep").each(function(index, el) {
                $("." + $(el).attr("data-show-only")).css({
                    display: "",
                    opacity: "",
                    transition: "opacity 1s"
                });
                $("." + $(el).attr("data-hide-only")).css({
                    display: "",
                    opacity: "",
                    transition: "opacity 1s"
                });
                $("." + $(el).attr("data-hide-only-none")).css({
                    display: "",
                    opacity: "",
                    transition: "opacity 1s"
                });
                $("." + $(el).attr("data-show-from")).css({
                    display: "",
                    opacity: "",
                    transition: "opacity 1s"
                });
                for (var i = 0, atts = el.attributes, n = atts.length, names = []; i < n; i++) {
                    if ("data-css-to" === atts[i].nodeName.substring(0, 11)) {
                        $("." + atts[i].nodeName.substring(12)).attr("style", "");
                        if ($("." + atts[i].nodeName.substring(12)).attr("data-css-base")) {
                            $("." + atts[i].nodeName.substring(12)).attr("style", $("." + atts[i].nodeName.substring(12)).attr("data-css-base"));
                        }
                    }
                }
            });
        }
        $(".step.active .substep").each(function(index, el) {
            $("." + $(el).attr("data-show-only")).css({
                display: "none",
                opacity: 0
            });
            $("." + $(el).attr("data-hide-only")).css({
                display: "",
                opacity: 1,
                transition: "opacity 1s"
            });
            $("." + $(el).attr("data-hide-only-none")).css({
                display: "",
            }).stop(true).animate({
                opacity: 1,
            });
            $("." + $(el).attr("data-show-from")).css({
                opacity: 0,
                transition: "opacity 1s"
            });
            for (var i = 0, atts = el.attributes, n = atts.length, names = []; i < n; i++) {
                if ("data-css-to" === atts[i].nodeName.substring(0, 11)) {
                    $("." + atts[i].nodeName.substring(12)).attr("style", "");
                    if ($("." + atts[i].nodeName.substring(12)).attr("data-css-base")) {
                        $("." + atts[i].nodeName.substring(12)).attr("style", $("." + atts[i].nodeName.substring(12)).attr("data-css-base"));
                    }
                }
            }
        });


        let video = event.target.getElementsByClassName("video");
        for (let item of video) {
            item.play();
        }
        let data_slide = $(event.target).attr("id");
        $('.visible').removeClass("visible");
        $('*[data-visible-' + data_slide + '],*[data-vin-' + data_slide + ']').addClass("visible");
        // $('.visible-step').removeClass("visible-step");
        // $('*[data-visible-' + data_slide + '],*[data-vin-' + data_slide + ']').parents(".step").addClass(".visible-step");
    });
    $(".step").bind("impress:substep:enter impress:substep:stepleaveaborted", function(event) {
        /*
            To show objects when certain substep is active add to the substep the properties
                - data-show-block="CLASS" -> { display=block; opacity=1; }
                - data-show-flex="CLASS" -> { display=flex; opacity=1; }
                - data-show="CLASS" -> { opacity=1; }
            the CLASS indicates which class of object has to be shown 
            To hide objects when certain substep is active add to the substep the property
                - data-hide-none="CLASS" -> { display=none; opacity=0; }
                - data-hide="CLASS" -> { opacity=0; }
            the CLASS indicates which class of object has to be hidden 
        */
        $(".step.active .substep").each(function(index, el) {
            $("." + $(el).attr("data-show-only")).css({
                opacity: 0,
                transition: "opacity 1s",
                display: "none"
            });
            $("." + $(el).attr("data-hide-only")).css({
                display: "",
                opacity: 1,
                transition: "opacity 1s"
            });
            $("." + $(el).attr("data-hide-only-none")).css({
                display: "",
            }).stop(true).animate({
                opacity: 1,
            });
            $("." + $(el).attr("data-hide-from")).css({
                opacity: 1,
                transition: "opacity 1s"
            });
            $("." + $(el).attr("data-show-from")).css({
                opacity: 0,
                transition: "opacity 1s"
            });
            if (event.type === "impress:substep:stepleaveaborted") {
                for (var i = 0, atts = el.attributes, n = atts.length, names = []; i < n; i++) {
                    if ("data-css-to" === atts[i].nodeName.substring(0, 11)) {
                        $("." + atts[i].nodeName.substring(12)).attr("style", "");
                        if ($("." + atts[i].nodeName.substring(12)).attr("data-css-base")) {
                            $("." + atts[i].nodeName.substring(12)).attr("style", $("." + atts[i].nodeName.substring(12)).attr("data-css-base"));
                        }
                    }
                }
            }
        });
        $(".step.active .substep.substep-visible").each(function(index, el) {
            $("." + $(el).attr("data-show-only")).css({
                opacity: 0,
                transition: "opacity 1s",
                display: "none"
            });
            $("." + $(el).attr("data-hide-only")).css({
                display: "",
                opacity: 1,
                transition: "opacity 1s"
            });
            $("." + $(el).attr("data-hide-only-none")).css({
                display: "",
            }).stop(true).animate({
                opacity: 1,
            });
            $("." + $(el).attr("data-hide-from")).css({
                display: "",
                opacity: 0,
                transition: "opacity 1s"
            });
            $("." + $(el).attr("data-hide-to")).css({
                display: "",
                opacity: 1,
                transition: "opacity 1s"
            });
            $("." + $(el).attr("data-show-from")).css({
                display: "",
                opacity: 1,
                transition: "opacity 1s"
            });
            $("." + $(el).attr("data-show-to")).css({
                display: "",
                opacity: 0,
                transition: "opacity 1s"
            });
            if (event.type === "impress:substep:stepleaveaborted") {
                for (var i = 0, atts = el.attributes, n = atts.length, names = []; i < n; i++) {
                    if ("data-css-to" === atts[i].nodeName.substring(0, 11)) {
                        $("." + atts[i].nodeName.substring(12)).attr("style", "");
                        if ($("." + atts[i].nodeName.substring(12)).attr("data-css-base")) {
                            $("." + atts[i].nodeName.substring(12)).attr("style", $("." + atts[i].nodeName.substring(12)).attr("data-css-base"));
                        }
                    }
                }
            }
        });
        $(".step.active .substep.substep-active").each(function(index, el) {
            $("." + $(el).attr("data-show-only")).css({
                display: "",
            }).stop(true).animate({
                opacity: 1,
            });
            $("." + $(el).attr("data-hide-only")).css({
                opacity: 0,
                transition: "opacity 1s"
            });
            $("." + $(el).attr("data-hide-only-none")).stop(true).animate({
                opacity: 0,
            }, {
                complete: function() {
                    $("." + $(el).attr("data-hide-only-none")).css({
                        "display": "none"
                    });
                }
            });
            $("." + $(el).attr("data-hide-from")).css({
                display: "",
                opacity: 0,
                transition: "opacity 1s"
            });
            $("." + $(el).attr("data-hide-to")).css({
                display: "",
                opacity: 1,
                transition: "opacity 1s"
            });
            $("." + $(el).attr("data-show-from")).css({
                display: "",
                opacity: 1,
                transition: "opacity 1s"
            });
            $("." + $(el).attr("data-show-to")).css({
                display: "",
                opacity: 0,
                transition: "opacity 1s"
            });
            for (var i = 0, atts = el.attributes, n = atts.length, names = []; i < n; i++) {
                if ("data-css-to" === atts[i].nodeName.substring(0, 11)) {
                    $("." + atts[i].nodeName.substring(12)).attr("style", atts[i].value);
                }
            }
        });
    });
    rootElement.addEventListener("impress:stepleave", function(event) {
        $(".step.active .substep").each(function(index, el) {
            $("." + $(el).attr("data-show-only")).css({
                display: "none",
                opacity: 0
            });
            $("." + $(el).attr("data-hide-only")).css({
                display: "",
                opacity: 1,
                transition: "opacity 1s"
            });
            $("." + $(el).attr("data-hide-only-none")).css({
                display: "",
            }).stop(true).animate({
                opacity: 1,
            });
            $("." + $(el).attr("data-show-from")).css({
                opacity: 0,
                transition: "opacity 1s"
            });
            for (var i = 0, atts = el.attributes, n = atts.length, names = []; i < n; i++) {
                if ("data-css-to" === atts[i].nodeName.substring(0, 11)) {
                    $("." + atts[i].nodeName.substring(12)).attr("style", "");
                    if ($("." + atts[i].nodeName.substring(12)).attr("data-css-base")) {
                        $("." + atts[i].nodeName.substring(12)).attr("style", $("." + atts[i].nodeName.substring(12)).attr("data-css-base"));
                    }
                }
            }
        });
        slide_from = $(event.target);

        let video = event.target.getElementsByClassName("video");
        for (let item of video) {
            item.pause();
        }
        let data_slide = $(event.detail.next).attr('id');
        $('.visible').removeClass("visible");
        $('*[data-visible-' + data_slide + ']').addClass("visible");
        // Se l'hai gia visitato non sparisce se torni in dietro
        $('.past *[data-vin-' + data_slide + ']').addClass("visible");
    }, false);
    $("#overview").bind("impress:stepenter", function(event) {
        $("*[data-overview]").addClass('overview');
    });
    $("#overview").bind("impress:stepleave", function(event) {
        $("*[data-overview]").removeClass('overview');
    });
});