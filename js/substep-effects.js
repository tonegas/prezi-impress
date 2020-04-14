/**
 * Substep effects Plugin
 *
 * This plugin will do the following things:
 *
 *  - The plugin adds the effects for the substeps. When an object with class 
 *      substep uses one of the following attributes, the value of these attributes
 *      indicate the objects that are subjected to some effectes:
 *      - data-show-only = "CLASS" : The objects with class="CLASS" are shown only in the corresponding substep.
 *      - data-hide-only = "CLASS" : The objects with class="CLASS" are hidden only in the corresponding substep.
 *      - data-add-only = "CLASS" : The objects with class="CLASS" are displayed only in the corresponding substep.
 *      - data-remove-only = "CLASS" : The objects with class="CLASS" are not displayed (display:none) only in the corresponding substep.
 *
 *  - Introduce the following new data attributes:
 *
 *    - data-media-autoplay="true": Autostart media when entering its step.
 *    - data-media-autostop="true": Stop media (= pause and reset to start), when leaving its
 *      step.
 *    - data-media-autopause="true": Pause media but keep current time when leaving its step.
 *
 *    When these attributes are added to a step they are inherited by all media on this step.
 *    Of course this setting can be overwritten by adding different attributes to inidvidual
 *    media.
 *
 *    The same rule applies when this attributes is added to the root element. Settings can be
 *    overwritten for individual steps and media.
 *
 *    Examples:
 *    - data-media-autostart="true" data-media-autostop="true": start media on enter, stop on
 *      leave, restart from beginning when re-entering the step.
 *
 *    - data-media-autostart="true" data-media-autopause="true": start media on enter, pause on
 *      leave, resume on re-enter
 *
 *    - data-media-autostart="true" data-media-autostop="true" data-media-autopause="true": start
 *      media on enter, stop on leave (stop overwrites pause).
 *
 *    - data-media-autostart="true" data-media-autopause="false": let media start automatically
 *      when entering a step and let it play when leaving the step.
 *
 *    - <div id="impress" data-media-autostart="true"> ... <div class="step"
 *      data-media-autostart="false">
 *      All media is startet automatically on all steps except the one that has the
 *      data-media-autostart="false" attribute.
 *
 *  - Pro tip: Use <audio onended="impress().next()"> or <video onended="impress().next()"> to
 *    proceed to the next step automatically, when the end of the media is reached.
 *
 *
 * Copyright 2020 Gastone Pietro Rosati Papini (@tonegas)
 * Released under the MIT license.
 */

(function(document) {
    "use strict";
    var slide_from = null;
    // document.addEventListener("impress:init", function(event) {

    // });

    document.addEventListener("impress:stepenter", function(event) {
        /* It is used when I start from a slide (F5 - refesh) */
        event.target.querySelectorAll(".substep").forEach(sub_el => {
            /* Hide from the beginning all elements that are referred by "data-show-only" */
            document.querySelectorAll("." + sub_el.getAttribute("data-show-only")).forEach(to_show => {
                to_show.style.opacity = 0;
            });
            /* Show from the beginning all elements that are referred by "data-hide-only" */
            document.querySelectorAll("." + sub_el.getAttribute("data-hide-only")).forEach(to_show => {
                to_show.style.opacity = 1;
            });
            /* Remove from the beginning all elements that are referred by "data-add-only" */
            document.querySelectorAll("." + sub_el.getAttribute("data-add-only")).forEach(to_show => {
                to_show.style.opacity = 0;
                to_show.style.display = "none";
            });
            /* Add from the beginning all elements that are referred by "data-remove-only" */
            document.querySelectorAll("." + sub_el.getAttribute("data-remove-only")).forEach(to_show => {
                to_show.style.opacity = 0;
                to_show.style.display = "";
            });
        });
        /* Reset the of the objects that are modified to the default */
        /* It is useful when I show element of other slide */
        if (slide_from !== null) {
            slide_from.querySelectorAll(".substep").forEach(sub_el => {
                document.querySelectorAll(
                    "." + sub_el.getAttribute("data-show-only") + "," +
                    "." + sub_el.getAttribute("data-hide-only")
                ).forEach(to_show => {
                    to_show.style.opacity = "";
                });
            });
            slide_from.querySelectorAll(".substep").forEach(sub_el => {
                document.querySelectorAll(
                    "." + sub_el.getAttribute("data-add-only") + "," +
                    "." + sub_el.getAttribute("data-remove-only")
                ).forEach(to_show => {
                    to_show.style.opacity = "";
                    to_show.style.display = "";
                });
            });
        }
    }, false);


    function sub_effects(event) {
        /* Reset all condition at each substep */
        event.target.querySelectorAll(".substep:not(.substep-active)").forEach(sub_el => {
            /* Hide all elements are referred by "data-show-only" in all substeps */
            document.querySelectorAll("." + sub_el.getAttribute("data-show-only")).forEach(to_show => {
                to_show.style.opacity = 0;
                to_show.style.transition = "opacity 1s";
            });
            /* Show all elements are referred by "data-hide-only" in all substeps */
            document.querySelectorAll("." + sub_el.getAttribute("data-hide-only")).forEach(to_show => {
                to_show.style.transition = "opacity 1s";
                to_show.style.opacity = 1;
            });
            /* Remove all elements are referred by "data-add-only" in all substeps */
            document.querySelectorAll("." + sub_el.getAttribute("data-add-only")).forEach(to_show => {
                to_show.style.display = "none";
                to_show.style.transition = "opacity 1s";
                to_show.style.opacity = 0;
            });
            /* Add all elements are referred by "data-remove-only" in all substeps */
            document.querySelectorAll("." + sub_el.getAttribute("data-remove-only")).forEach(to_show => {
                to_show.style.display = "";
                to_show.style.transition = "opacity 1s";
                to_show.style.opacity = 1;
            });
        });
        /* Active the condition of the each active substep */
        event.target.querySelectorAll(".substep.substep-active").forEach(sub_el => {
            /* Show all elements that are referred by "data-show-only" in the active substep */
            document.querySelectorAll("." + sub_el.getAttribute("data-show-only")).forEach(to_show => {
                to_show.style.transition = "opacity 1s";
                to_show.style.opacity = 1;
            });
            /* Hide all elements that are referred by "data-hide-only" in the active substep */
            document.querySelectorAll("." + sub_el.getAttribute("data-hide-only")).forEach(to_show => {
                to_show.style.opacity = 0;
                to_show.style.transition = "opacity 1s";
            });
            /* Show all elements that are referred by "data-show-only" in the active substep */
            document.querySelectorAll("." + sub_el.getAttribute("data-add-only")).forEach(to_show => {
                to_show.style.display = "";
                setTimeout(() => {
                    to_show.style.transition = "opacity 1s";
                    to_show.style.opacity = 1;
                }, 1);
            });
            /* No display all elements that are referred by "data-none-only" in the active substep */
            document.querySelectorAll("." + sub_el.getAttribute("data-remove-only")).forEach(to_show => {
                to_show.style.opacity = 0;
                to_show.style.transition = "opacity 1s";
                to_show.addEventListener("transitionend", () => {
                    to_show.style.display = "none";
                }, {
                    once: true
                });
            });
        });
    }

    let elementsArray = document.querySelectorAll(".step");
    elementsArray.forEach(function(elem) {
        /* At each substep */
        elem.addEventListener("impress:substep:enter", sub_effects, false);
        elem.addEventListener("impress:substep:stepleaveaborted", sub_effects, false);
    });


    document.addEventListener("impress:stepleave", function(event) {
        /* Save the step has to be reset when I enter in the new step */
        slide_from = event.target;
        /* Effect to be set-up before entering in the step */
        event.detail.next.querySelectorAll(".substep").forEach(sub_el => {
            /* Hide all elements are referred by "data-show-only" in all substeps */
            document.querySelectorAll("." + sub_el.getAttribute("data-show-only")).forEach(to_show => {
                to_show.style.opacity = 0;
                to_show.style.transition = "";
            });
            /* Show all elements are referred by "data-hide-only" in all substeps */
            document.querySelectorAll("." + sub_el.getAttribute("data-hide-only")).forEach(to_show => {
                to_show.style.transition = "";
                to_show.style.opacity = 1;
            });
            /* Remove all elements are referred by "data-add-only" in all substeps */
            document.querySelectorAll("." + sub_el.getAttribute("data-add-only")).forEach(to_show => {
                to_show.style.display = "none";
                to_show.style.transition = "";
                to_show.style.opacity = 0;
            });
            /* Add all elements are referred by "data-remove-only" in all substeps */
            document.querySelectorAll("." + sub_el.getAttribute("data-remove-only")).forEach(to_show => {
                to_show.style.display = "";
                to_show.style.transition = "";
                to_show.style.opacity = 1;
            });
        });
    }, false);
})(document)