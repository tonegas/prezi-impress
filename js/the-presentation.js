$(document).ready(function() {
    $("#impress").css({
        "display": "block"
    });

    let first = true;
    var iii = 0;
    document.addEventListener("impress:stepleave", () => {
        $(".leader-line").remove();
    });

    $("#phd-polywec-opt").bind("impress:stepenter", function() {
        first = false;
        var movie = bonsai.run(document.getElementById('poly-owc'), {
            url: 'js/dottorato/video.js',
            width: 550,
            height: 120
        });
        var myTimer = function(event) {
            var jdata = datalist[iii];
            movie.sendMessage('update', {
                t: jdata.t,
                z: jdata.z,
                h: jdata.h,
                Te: jdata.Te,
                Hs: jdata.Hs,
                att: jdata.att,
                tick: jdata.tick
            });
            iii = (iii + 1) % datalist.length;
        };
        movie.on('load', function() {
            // receive event from the runner context
            movie.sendMessage('externalData', {
                de: DE,
                owc: OWC
            });
            var ws = setInterval(myTimer, 200);
        });

        $("#phd-polywec-opt5").bind("impress:stepleave", function() {
            clearInterval(ws);
        });
    });


    // $("#phd-polywec-opt").bind("impress:stepenter", function() {
    //     // $("#phd-polywec-opt5").bind("impress:stepenter", function() {
    //     if (first == true) {
    //         first = false;
    //         var ws = new WebSocket('ws://localhost:25000/');
    //         ws.onmessage = function(event) {
    //             var jdata = JSON.parse(event.data);
    //             movie.sendMessage('update', {
    //                 t: jdata.t,
    //                 z: jdata.z,
    //                 h: jdata.h,
    //                 Te: jdata.Te,
    //                 Hs: jdata.Hs,
    //                 att: jdata.att,
    //                 tick: jdata.tick
    //             });
    //         };
    //         var movie = bonsai.run(document.getElementById('poly-owc'), {
    //             url: 'js/dottorato/video.js',
    //             width: 550,
    //             height: 120
    //         });
    //         // "250 -20 100 100"
    //         var time = 0;
    //         var simInterval = 500;
    //         movie.on('load', function() {
    //             // receive event from the runner context
    //             movie.sendMessage('externalData', {
    //                 de: DE,
    //                 owc: OWC
    //             });
    //         });
    //     }
    // });

    $("#intro4").bind("impress:stepenter", function(event) {
        $(".leader-line").remove();
        let line1 = [0, 0];
        let endEl, staEl;
        endEl = document.getElementById('solution');
        staEl = document.getElementById('model-based');
        $(staEl).css({
            "border": "solid var(--c1) 2px",
            "border-radius": "15px",
            "margin": "calc(var(--b-mar) - 2px)"
        });
        line1[0] = new LeaderLine(staEl, LeaderLine.pointAnchor(endEl, { x: '45%', y: '0%' }), { color: 'var(--c1)', size: 8, hide: true });
        line1[0].setOptions({ startSocket: 'bottom', endSocket: 'top' });
        line1[0].show("draw");
        staEl = document.getElementById('model-free');
        $(staEl).css({
            "border": "solid var(--c5) 2px",
            "border-radius": "15px",
            "margin": "calc(var(--b-mar) - 2px)"
        });
        line1[1] = new LeaderLine(staEl, LeaderLine.pointAnchor(endEl, { x: '55%', y: '0%' }), { color: 'var(--c5)', size: 8, hide: true });
        line1[1].setOptions({ startSocket: 'bottom', endSocket: 'top' });
        line1[1].show("draw");
        $("#intro4").one("impress:stepleave", function(event) {
            line1[0].remove();
            line1[1].remove();
        });
    });
    $("#overview,#overview2,#overview3,#overview4,#finish").bind("impress:stepenter", function(event) {
        $(".leader-line").remove();
        let line2, line3, line4, line5, l1, l2, l3, s1, s2, s3, s4, s5;
        s1 = document.getElementById('circ-university');
        s2 = document.getElementById('circ-master-thesis');
        s21 = document.getElementById('circ-mt-controlsystem');
        s3 = document.getElementById('circ-phd');
        s31 = document.getElementById('circ-phd-veritas');
        s32 = document.getElementById('circ-phd-polywec');
        s4 = document.getElementById('circ-post-doc');
        s41 = document.getElementById('circ-pd-dreams4cars');
        s5 = document.getElementById('circ-future');
        line2 = new LeaderLine(LeaderLine.pointAnchor(s1, { x: '50%', y: '50%' }), LeaderLine.pointAnchor(s2, { x: '50%', y: '50%' }), { path: 'straight', size: 20, hide: true });
        line2.setOptions({ // element-3, element-4
            gradient: {
                startColor: 'var(--c1)',
                endColor: 'var(--s1)'
            },
            startPlug: 'disc',
            endPlug: 'behind',
            endPlugSize: 0.7,
            startPlugColor: 'var(--c1)',
            endPlugColor: 'var(--s1)'
        });
        line2.show("draw");
        line3 = new LeaderLine(LeaderLine.pointAnchor(s2, { x: '50%', y: '50%' }), LeaderLine.pointAnchor(s3, { x: '50%', y: '50%' }), { path: 'straight', size: 20, hide: true });
        line3.setOptions({ // element-3, element-4
            gradient: {
                startColor: 'var(--s1)',
                endColor: 'var(--s2)'
            },
            startPlug: 'disc',
            endPlug: 'behind',
            startPlugColor: 'var(--s1)',
            endPlugColor: 'var(--s2)'
        });
        line3.show("draw");
        line4 = new LeaderLine(LeaderLine.pointAnchor(s3, { x: '50%', y: '50%' }), LeaderLine.pointAnchor(s4, { x: '50%', y: '50%' }), { path: 'straight', size: 20, hide: true });
        line4.setOptions({ // element-3, element-4
            gradient: {
                startColor: 'var(--s2)',
                endColor: 'var(--s3)'
            },
            startPlug: 'disc',
            endPlug: 'behind',
            startPlugColor: 'var(--s2)',
            endPlugColor: 'var(--s3)'
        });
        line4.show("draw");
        line5 = new LeaderLine(LeaderLine.pointAnchor(s4, { x: '50%', y: '50%' }), LeaderLine.pointAnchor(s5, { x: '50%', y: '50%' }), { path: 'straight', size: 20, hide: true });
        line5.setOptions({ // element-3, element-4
            gradient: {
                startColor: 'var(--s3)',
                endColor: 'var(--s4)'
            },
            startPlug: 'disc',
            endPlug: 'behind',
            startPlugColor: 'var(--s3)',
            endPlugColor: 'var(--s4)'
        });
        line5.show("draw");
        l1 = new LeaderLine(LeaderLine.pointAnchor(s2, { x: '50%', y: '50%' }), LeaderLine.pointAnchor(s21, { x: '50%', y: '50%' }), { path: 'straight', size: 10, hide: true });
        l1.setOptions({ // element-3, element-4
            gradient: {
                startColor: 'var(--s1)',
                endColor: 'var(--s1)'
            },
            endPlug: 'behind'
        });
        l1.show("draw");
        l2 = new LeaderLine(LeaderLine.pointAnchor(s3, { x: '50%', y: '50%' }), LeaderLine.pointAnchor(s31, { x: '50%', y: '50%' }), { path: 'straight', size: 10, hide: true });
        l2.setOptions({ // element-3, element-4
            gradient: {
                startColor: 'var(--s2)',
                endColor: 'var(--s2)'
            },
            endPlug: 'behind'
        });
        l2.show("draw");
        l4 = new LeaderLine(LeaderLine.pointAnchor(s4, { x: '50%', y: '50%' }), LeaderLine.pointAnchor(s41, { x: '50%', y: '50%' }), { path: 'straight', size: 13, hide: true });
        l4.setOptions({ // element-3, element-4
            gradient: {
                startColor: 'var(--s3)',
                endColor: 'var(--s3)'
            },
            endPlug: 'behind'
        });
        l4.show("draw");
        l3 = new LeaderLine(LeaderLine.pointAnchor(s3, { x: '50%', y: '50%' }), LeaderLine.pointAnchor(s32, { x: '50%', y: '50%' }), { path: 'straight', size: 10, hide: true });
        l3.setOptions({ // element-3, element-4
            gradient: {
                startColor: 'var(--s2)',
                endColor: 'var(--s2)'
            },
            endPlug: 'behind'
        });
        l3.show("draw");
        $("#overview").one("impress:stepleave", () => {
            line2.remove();
            line3.remove();
            line4.remove();
            line5.remove();
            l1.remove();
            l2.remove();
            l3.remove();
            l4.remove();
        });
        $(".leader-line").css({
            "z-index": -1
        });
    });
    $("#university").bind("impress:stepenter", function(event) {
        $(".leader-line").remove();
        var one = 0;
        $(".app-mini").animate({
            opacity: 1,
        }, {
            duration: 1000,
            complete: function() {
                if (one == 0) {
                    one = 1;
                    let l1, l2, l3, s1, s2, s3, s4, s5;
                    s1 = document.getElementById('a-me-img');
                    s2 = document.getElementById('a-bachalor');
                    s3 = document.getElementById('a-master');
                    s4 = document.getElementById('circ-university');
                    s5 = document.getElementById('ritar-img');
                    s6 = document.getElementById('pid-img');
                    l1 = new LeaderLine(s1,
                        LeaderLine.pointAnchor(s2, { x: '70%', y: '0%' }), { color: 'var(--c5)', size: 5, hide: true });
                    l1.setOptions({ startSocket: 'left', endSocket: 'top' });
                    l1.show("draw");
                    $(s2).css({
                        "color": "var(--c5)"
                    });
                    l2 = new LeaderLine(s1,
                        LeaderLine.pointAnchor(s3, { x: '30%', y: '0%' }), { color: 'var(--c1)', size: 5, hide: true });
                    l2.setOptions({ startSocket: 'right', endSocket: 'top' });
                    l2.show("draw");
                    $(s3).css({
                        "color": "var(--c1)"
                    });
                    l3 = new LeaderLine(LeaderLine.pointAnchor(s4, { x: '50%', y: '50%' }),
                        LeaderLine.pointAnchor(s5, { x: '50%', y: '50%' }), { path: 'straight', color: 'var(--c11)', size: 70, hide: true });
                    l3.setOptions({
                        startPlug: 'behind',
                        endPlug: 'behind'
                    });
                    $(".leader-line:last-of-type").css({
                        "z-index": -1
                    });
                    l3.show("draw");
                    l4 = new LeaderLine(LeaderLine.pointAnchor(s4, { x: '50%', y: '50%' }),
                        LeaderLine.pointAnchor(s6, { x: '50%', y: '50%' }), { path: 'straight', color: 'var(--c11)', size: 80, hide: true });
                    l4.setOptions({
                        startPlug: 'behind',
                        endPlug: 'behind'
                    });
                    $(".leader-line:last-of-type").css({
                        "z-index": -1
                    });
                    l4.show("draw");
                    $("#university").one("impress:stepleave", () => {
                        $(".app-mini").animate({
                            opacity: 0,
                        });
                        l1.remove();
                        l2.remove();
                        l3.remove();
                        l4.remove();
                    });
                }
            }
        });
    });
    $("#mt-controlsystem").bind("impress:stepenter", () => {
        let l1, l2, l3, l4, s1, s2, s3, s4;
        s1 = document.getElementById('img-gdl');
        s2 = document.getElementById('img-legge');
        s3 = document.getElementById('img-control');
        l1 = new LeaderLine(s2, s1, { color: 'var(--c1)', size: 5, hide: true });
        l1.setOptions({ startSocket: 'bottom', endSocket: 'top' });
        l1.show("draw");
        l2 = new LeaderLine(s1, s3, { color: 'var(--c1)', size: 5, hide: true });
        l2.setOptions({ startSocket: 'right', endSocket: 'bottom' });
        l2.show("draw");
        $("#mt-controlsystem").one("impress:stepleave", () => {
            // l1.remove();
            l2.remove();
        });
    });
    $("#master-thesis").bind("impress:stepenter", () => {
        $("#circ-master-thesis").css({
            "background-image": "url(img/master/body.JPG)",
            "background-size": "705px",
            "background-position-x": "right",
            "background-position-y": "-70px"
        })
    });
    $("#master-thesis").bind("impress:stepleave", () => {
        $("#circ-master-thesis").css({
            "background-image": "none"
        })
    });
    $("#mt-controlsystem2").bind("impress:stepenter", function(event) {
        let l1, l2, l3, s1, s2, s3, s4, s5;
        s1 = document.getElementById('cont-feed');
        s2 = document.getElementById('cont-force');
        s3 = document.getElementById('stim');
        l1 = new LeaderLine(s3, s1, { color: 'var(--c1)', size: 5, hide: true });
        l1.setOptions({ startSocket: 'right', endSocket: 'left' });
        $(s3).css({
            "border": "solid var(--c1) 2px",
            "border-radius": "15px",
        });
        l1.show("draw");
        l2 = new LeaderLine(s3, s2, { color: 'var(--c1)', size: 5, hide: true });
        l2.setOptions({ startSocket: 'right', endSocket: 'left' });
        l2.show("draw");
        $("#mt-controlsystem2").one("impress:stepleave", () => {
            l1.remove();
            l2.remove();
        });
    });
    $("#phd-pre-veritas").bind("impress:stepenter", function(event) {
        $("#phd-veritas").attr("data-x", "2700");
        $("#phd-veritas").attr("data-y", "1500");
        $("#phd-veritas").animate({
            'borderSpacing': '1000'
        }, {
            step: function(now, fx) {
                $(this).css({ "transform": "translate(-50%, -50%) translate3d(" + (($("#phd-veritas").attr("data-x") - 3100) * (1 - now / 1000) + 3100) + "px, 1830px, -600px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(0.1)" });
            },
            duration: 1000,
            easing: 'linear',
            queue: false,
            complete: function() {
                $("#phd-veritas").attr("data-x", "3100");
                $("#phd-veritas").attr("data-y", "1830");
            }
        }, 'linear');
    });
    $("#phd-pre-polywec").bind("impress:stepenter", function(event) {
        $("#phd-polywec").attr("data-x", "3800");
        $("#phd-polywec").attr("data-y", "1500");
        $("#phd-polywec").animate({
            'borderSpacing': '1000'
        }, {
            step: function(now, fx) {
                $(this).css({ "transform": "translate(-50%, -50%) translate3d(" + (($("#phd-polywec").attr("data-x") - 3500) * (1 - now / 1000) + 3500) + "px, 1890px, -600px) rotateX(0deg) rotateY(0deg) rotateZ(0deg) scale(0.1)" });
            },
            duration: 500,
            easing: 'linear',
            queue: false,
            complete: function() {
                $("#phd-polywec").attr("data-x", "3500");
                $("#phd-polywec").attr("data-y", "1890");
            }
        }, 'linear');
    });
    $("#phd-veritas").bind("impress:stepenter", function(event) {
        let l1, l2, l3, s1, s2, s3, s4, s5;
        s1 = document.getElementById('img-hand');
        s2 = document.getElementById('ver-control-img-container');
        s3 = document.getElementById('video-pre-pilot');
        s4 = document.getElementById('img-model');
        l1 = new LeaderLine(s1, LeaderLine.pointAnchor(s2, {
            x: 0,
            y: 70
        }), { color: 'var(--c1)', size: 5, hide: true });
        l1.setOptions({ startSocket: 'right', endSocket: 'left' });
        // $(s3).css({
        //     "border": "solid var(--c1) 2px",
        //     "border-radius": "15px",
        // });
        l1.show("draw");
        l2 = new LeaderLine(s2, s3, { color: 'var(--c1)', size: 5, hide: true });
        l2.setOptions({ startSocket: 'right', endSocket: 'right' });
        l2.show("draw");
        l3 = new LeaderLine(s4, LeaderLine.pointAnchor(s2, {
            x: 0,
            y: 150
        }), { color: 'var(--c1)', size: 5, hide: true });
        l3.setOptions({ startSocket: 'right', endSocket: 'left' });
        l3.show("draw");
        $("#phd-veritas").one("impress:stepleave", () => {
            l1.remove();
            l2.remove();
            l3.remove();
        });
    });
    $("#ver-controlsystem").bind("impress:stepenter", function(event) {
        let l1, l2, l3, s1, s2, s3, s4, s5;
        s1 = document.getElementById('ver-contr-adapt');
        s2 = document.getElementById('ver-comp');
        s3 = document.getElementById('ver-estim');
        l1 = new LeaderLine(s1, s2, { color: 'var(--c1)', size: 5, hide: true });
        l1.setOptions({ startSocket: 'right', endSocket: 'left' });
        $(s2).css({
            "border": "solid var(--c1) 2px",
            "border-radius": "15px",
        });
        l1.show("draw");
        l2 = new LeaderLine(s1, s3, { color: 'var(--c1)', size: 5, hide: true });
        l2.setOptions({ startSocket: 'right', endSocket: 'left' });
        l2.show("draw");
        $(s3).css({
            "border": "solid var(--c1) 2px",
            "border-radius": "15px",
        });
        $("#mt-controlsystem2").one("impress:stepleave", () => {
            l1.remove();
            l2.remove();
        });
    });
    $("#phd-polywec-opt").bind("impress:stepenter", function(event) {
        let l1, l2, l3, l4, s1, s2, s3, s4, s5;
        s1 = document.getElementById('owcdyn');
        s2 = document.getElementById('icddeg');
        s3 = document.getElementById('etaFplane');
        s4 = document.getElementById('rect-phd-polywec-opt2');
        s5 = document.getElementById('rect-phd-polywec-opt3');
        l1 = new LeaderLine(s1,
            LeaderLine.pointAnchor(s4, {
                x: 0,
                y: 50
            }), { color: 'var(--c1)', size: 5, hide: true });
        l1.setOptions({ startSocket: 'right', endSocket: 'left' });
        l1.show("draw");
        l2 = new LeaderLine(s2, s3, { color: 'var(--c1)', size: 5, hide: true });
        l2.setOptions({ startSocket: 'right', endSocket: 'left' });
        l2.show("draw");
        l3 = new LeaderLine(s3, s4, { color: 'var(--c1)', size: 5, hide: true });
        l3.setOptions({ startSocket: 'top', endSocket: 'bottom' });
        l3.show("draw");
        l4 = new LeaderLine(s4, s5, { color: 'var(--c1)', size: 5, hide: true });
        l4.setOptions({ startSocket: 'right', endSocket: 'left' });
        l4.show("draw");
        $("#phd-polywec-opt").one("impress:stepleave", () => {
            l1.remove();
            l2.remove();
            l3.remove();
            l4.remove();
        });
    });
    $("#post-doc").bind("impress:stepenter", function(event) {
        $("#circ-pd-dreams4cars").css({
            opacity: 0
        });
    });
    $("#post-doc").bind("impress:stepleave", function(event) {
        $("#circ-pd-dreams4cars").css({
            opacity: ""
        });
    });
    $("#post-doc").bind("impress:substep:enter", function(event) {
        let l1, l2, l3, s1, s2, s3, s4;
        if ($('#post-doc .substep-active')[0].id == "post-doc-mixing") {
            s1 = document.getElementById('adaptive-controls');
            s2 = document.getElementById('data-driven');
            s3 = document.getElementById('model-data-driven');
            l1 = new LeaderLine(s1, LeaderLine.pointAnchor(s3, {
                x: 25,
                y: 150
            }), { color: 'var(--c1)', size: 5, hide: true });
            l1.setOptions({
                endSocketGravity: [-10, 10]
            });
            l1.show("draw");
            l2 = new LeaderLine(s2, LeaderLine.pointAnchor(s3, {
                x: 25,
                y: 30
            }), { color: 'var(--c5)', size: 5, hide: true });
            l2.setOptions({
                endSocketGravity: [-10, -10]
            });
            l2.show("draw");
            $("#post-doc").one("impress:stepleave", () => {
                l1.remove();
                l2.remove();
                $("#circ-pd-dreams4cars").css({
                    opacity: 0
                });
            });
        }
        if ($('#post-doc .substep-active')[0].id == "towards-d4c") {
            s3 = document.getElementById('model-data-driven');
            ss3 = LeaderLine.areaAnchor({
                element: s3,
                x: "10%",
                y: "10%",
                shape: 'circle',
                width: '80%',
                height: '80%'
            });
            s4 = document.getElementById('circ-pd-dreams4cars');
            l3 = new LeaderLine(ss3, s4, {
                color: 'var(--c2)',
                size: 5,
                hide: true,
                startLabel: LeaderLine.captionLabel('First results in', {
                    color: 'white',
                    offset: [50, -70],
                    lineOffset: 0,
                    outlineColor: "",
                    fontFamily: "MyFont",
                    fontSize: "2em"
                })
            });
            l3.show("draw");
            $("#post-doc").one("impress:stepleave impress:substep:stepleaveaborted", () => {
                l3.remove();
                $("#circ-pd-dreams4cars").css({
                    opacity: 0
                });
            });
        }
    });
    $("#pd-dreams4cars").bind("impress:stepenter", function(event) {
        $("#pd-dreams4cars-first-ref").css({
            opacity: 0,
            display: "none"
        });
        let all = "#path52, #path55, #path58, #path64, #path3570, #path61, #FilledBall_Marker, #FilledArrow_Marker, #FilledArrow_Marker_2, #FilledArrow_Marker_3, #path67, #FilledArrow_Marker_4, #path170, #FilledArrow_Marker_5, #path170-5, #FilledArrow_Marker_5-6";
        $(all).removeClass("blinking");
        $(".agent-architecture").css({
            top: "",
            left: "",
            width: "",
        });
    });
    $("#pd-dreams4cars").bind("impress:substep:enter impress:substep:stepleaveaborted", function(event) {
        let dorsal_stream = "#path52, #path55, #path3570,#FilledArrow_Marker, #FilledArrow_Marker_2";
        let action_selection = "#path58, #FilledBall_Marker";
        let motor_output = "#path61, #path64, #FilledArrow_Marker_3, #path67, #FilledArrow_Marker_4";
        let biases = "#path170, #FilledArrow_Marker_5, #path170-5, #FilledArrow_Marker_5-6";
        $(dorsal_stream).removeClass("blinking");
        $(action_selection).removeClass("blinking");
        $(motor_output).removeClass("blinking");
        $(biases).removeClass("blinking");
        if ($('#pd-dreams4cars .substep-active')[0].id == "pd-d4c-first") {
            $(".agent-architecture").animate({
                top: "159px",
                left: "770px",
                width: "580px",
            }, {
                duration: 1000,
                complete: function() {
                    $("#pd-dreams4cars .video1").css({
                        "display": "block",
                        "opacity": 1
                    });
                }
            });
        }
        if ($('#pd-dreams4cars .substep-active')[0].id == "pd-d4c-motor" ||
            $('#pd-dreams4cars .substep-active')[0].id == "pd-d4c-motor2") {
            $(dorsal_stream).addClass("blinking");
        }
        if ($('#pd-dreams4cars .substep-active')[0].id == "pd-d4c-bias") {
            $(biases).addClass("blinking");
        }
        if ($('#pd-dreams4cars .substep-active')[0].id == "pd-d4c-selection") {
            $(action_selection).addClass("blinking");
        }
        if ($('#pd-dreams4cars .substep-active')[0].id == "pd-d4c-control") {
            $(motor_output).addClass("blinking");
        }
    });
    $("#pd-dreams4cars-activities").bind("impress:stepenter", function(event) {
        $("#circ-pd-d4c-rl, #circ-pd-d4c-medelling-nn").css({
            opacity: 0
        });
        let all = "#path52, #path55, #path58, #path64, #path3570, #path61, #FilledBall_Marker, #FilledArrow_Marker, #FilledArrow_Marker_2, #FilledArrow_Marker_3, #path67, #FilledArrow_Marker_4, #path170, #FilledArrow_Marker_5, #path170-5, #FilledArrow_Marker_5-6";
        $(all).removeClass("blinking");
        $(".agent-architecture").css({
            top: "159px",
            left: "770px",
            width: "580px",
        });
    });
    $("#pd-dreams4cars-activities").bind("impress:substep:enter impress:substep:stepleaveaborted", function(event) {
        let dorsal_stream = "#path52, #path55, #path58, #path3570, #path61, #FilledBall_Marker, #FilledArrow_Marker, #FilledArrow_Marker_2, #FilledArrow_Marker_3";
        let action_selection = "#path58, #FilledBall_Marker";
        let motor_output = "#path61, #path64, #FilledArrow_Marker_3, #path67, #FilledArrow_Marker_4";
        let biases = "#path64, #path67, #FilledArrow_Marker_4, #path170, #FilledArrow_Marker_5, #path170-5, #FilledArrow_Marker_5-6";
        $(dorsal_stream).removeClass("blinking");
        $(action_selection).removeClass("blinking");
        $(motor_output).removeClass("blinking");
        $(biases).removeClass("blinking");
        if ($('#pd-dreams4cars-activities .substep-active')[0].id == "pd-d4c-second") {
            $(dorsal_stream).addClass("blinking");
        }
        if ($('#pd-dreams4cars-activities .substep-active')[0].id == "pd-d4c-third") {
            $(action_selection).addClass("blinking");
        }
        if ($('#pd-dreams4cars-activities .substep-active')[0].id == "pd-d4c-fourth") {
            $(motor_output).addClass("blinking");
        }
        if ($('#pd-dreams4cars-activities .substep-active')[0].id == "pd-d4c-fifth") {
            $(biases).addClass("blinking");
        }
    });
    $("#pd-d4c-medelling-nn").bind("impress:stepenter", function(event) {
        let l1, l2, l3, l4, s1, s2, s3, s4;
        s1 = document.getElementById('d4c-car-img');
        // s2 = document.getElementById('d4c-data');
        s3 = document.getElementById('rect-pd-d4c-mnn-network');
        s4 = document.getElementById('rect-pd-d4c-mnn-result');
        l1 = new LeaderLine(LeaderLine.pointAnchor(s1, {
            x: 450,
            y: 132
        }), s3, { color: 'var(--c1)', size: 5, hide: true });
        l1.setOptions({ startSocket: 'top', endSocket: 'left' });
        l1.show("draw");
        // l2 = new LeaderLine(s2, s4, { color: 'var(--c5)', size: 5, hide: true });
        // l2.setOptions({ startSocket: 'top', endSocket: 'bottom' });
        // l2.show("draw");
        l3 = new LeaderLine(s3, s4, { color: 'var(--c2)', size: 5, hide: true });
        l3.setOptions({ startSocket: 'right', endSocket: 'left' });
        l3.show("draw");
        $("#pd-d4c-medelling-nn").one("impress:stepleave", () => {
            l1.remove();
            // l2.remove();
            l3.remove();
        });
    });
    $("#pd-d4c-mnn-inverse").bind("impress:stepenter", function(event) {
        let l1, s1, s2;
        s1 = document.getElementById('pd-d4c-mnn-inverse-img');
        s2 = document.getElementById('pd-d4c-mnn-direct-inverse-img');
        l1 = new LeaderLine(LeaderLine.pointAnchor(s1, {
            x: "50%",
            y: "0%"
        }), LeaderLine.pointAnchor(s2, {
            x: "35%",
            y: "95%"
        }), { color: 'var(--c1)', size: 5, hide: true });
        l1.show("draw");
        $("#pd-d4c-mnn-inverse").one("impress:stepleave", () => {
            l1.remove();
        });
    });
    $("#pd-d4c-rl").bind("impress:stepenter", function(event) {
        let actionbiasing = "#path170-5, #FilledArrow_Marker_5-6, #path170, #FilledArrow_Marker_5, #path58, #FilledBall_Marker, #tspan177";
        $(actionbiasing).removeClass("hide-arrow blinking");
        let simulation = "#path64, #FilledArrow_Marker_4, #path52-5, #FilledArrow_Marker-5, #path52, #FilledArrow_Marker, #tspan88-6, #tspan88, #tspan125, #tspan132, #tspan107, #tspan109";
        $(simulation).removeClass("hide-arrow blinking");

        let loadnetwork = "#path52-8-4, #FilledArrow_Marker-8-4";
        $(loadnetwork).removeClass("hide-arrow blinking");
        let loadbufferreplay = "#path52-8-4-7, #FilledArrow_Marker-8-4-5";
        $(loadbufferreplay).removeClass("hide-arrow blinking");
        let storenetwork = "#path52-8-0, #FilledArrow_Marker-8-5";
        $(storenetwork).removeClass("hide-arrow blinking");
        let storebufferreplay = "#path52-8, #FilledArrow_Marker-8";
        $(storebufferreplay).removeClass("hide-arrow blinking");
    });
    $("#pd-d4c-rl-core").bind("impress:stepenter", function(event) {
        let actionbiasing = "#path170-5, #FilledArrow_Marker_5-6, #path170, #FilledArrow_Marker_5, #path58, #FilledBall_Marker, #tspan177";
        $(actionbiasing).addClass("hide-arrow");
        let simulation = "#path64, #FilledArrow_Marker_4, #path52-5, #FilledArrow_Marker-5, #path52, #FilledArrow_Marker, #tspan88-6, #tspan88, #tspan125, #tspan132, #tspan107, #tspan109";
        $(simulation).addClass("hide-arrow");

        let loadnetwork = "#path52-8-4, #FilledArrow_Marker-8-4";
        $(loadnetwork).addClass("hide-arrow");
        let loadbufferreplay = "#path52-8-4-7, #FilledArrow_Marker-8-4-5";
        $(loadbufferreplay).addClass("hide-arrow");
        let storenetwork = "#path52-8-0, #FilledArrow_Marker-8-5";
        $(storenetwork).addClass("hide-arrow");
        let storebufferreplay = "#path52-8, #FilledArrow_Marker-8";
        $(storebufferreplay).addClass("hide-arrow");
    });
    $("#pd-d4c-rl-step1").bind("impress:stepenter", function(event) {
        let actionbiasing = "#path170-5, #FilledArrow_Marker_5-6, #path170, #FilledArrow_Marker_5, #path58, #FilledBall_Marker, #tspan177";
        $(actionbiasing).addClass("hide-arrow");
        let simulation = "#path64, #FilledArrow_Marker_4, #path52-5, #FilledArrow_Marker-5, #path52, #FilledArrow_Marker, #tspan88-6, #tspan88, #tspan125, #tspan132, #tspan107, #tspan109";
        $(simulation).addClass("hide-arrow");

        let loadnetwork = "#path52-8-4, #FilledArrow_Marker-8-4";
        $(loadnetwork).addClass("hide-arrow");
        let loadbufferreplay = "#path52-8-4-7, #FilledArrow_Marker-8-4-5";
        $(loadbufferreplay).addClass("hide-arrow");
        let storenetwork = "#path52-8-0, #FilledArrow_Marker-8-5";
        $(storenetwork).removeClass("hide-arrow blinking");
        let storebufferreplay = "#path52-8, #FilledArrow_Marker-8";
        $(storebufferreplay).addClass("hide-arrow");
    });
    $("#pd-d4c-rl-loop, #pd-d4c-rl-loop2").bind("impress:stepenter", function(event) {
        let storenetwork = "#path52-8-0, #FilledArrow_Marker-8-5";
        $(storenetwork).removeClass("hide-arrow blinking");
        let storebufferreplay = "#path52-8, #FilledArrow_Marker-8";
        $(storebufferreplay).addClass("hide-arrow").removeClass("blinking");

        let actionbiasing = "#path170-5, #FilledArrow_Marker_5-6, #path170, #FilledArrow_Marker_5, #path58, #FilledBall_Marker, #tspan177";
        $(actionbiasing).addClass("hide-arrow").removeClass("blinking");
        let simulation = "#path64, #FilledArrow_Marker_4, #path52-5, #FilledArrow_Marker-5, #path52, #FilledArrow_Marker, #tspan88-6, #tspan88, #tspan125, #tspan132, #tspan107, #tspan109";
        $(simulation).addClass("hide-arrow").removeClass("blinking");

        let loadnetwork = "#path52-8-4, #FilledArrow_Marker-8-4";
        $(loadnetwork).addClass("hide-arrow").removeClass("blinking");
        let loadbufferreplay = "#path52-8-4-7, #FilledArrow_Marker-8-4-5";
        $(loadbufferreplay).addClass("hide-arrow").removeClass("blinking");
    });
    $("#pd-d4c-rl-loop2").bind("impress:substep:enter impress:substep:stepleaveaborted", function(event) {
        let actionbiasing_and = "#path170, #FilledArrow_Marker_5";
        $(actionbiasing_and).addClass("hide-arrow");
        let actionbiasing_rit = "#path170-5, #FilledArrow_Marker_5-6, #path58, #FilledBall_Marker, #tspan177, #tspan125, #tspan132";
        $(actionbiasing_rit).addClass("hide-arrow");
        let simulation_and = "#path52-5, #FilledArrow_Marker-5, #path52, #FilledArrow_Marker, #tspan107, #tspan109";
        $(simulation_and).addClass("hide-arrow");
        let simulation_rit = "#path64, #FilledArrow_Marker_4, #tspan88-6, #tspan88";
        $(simulation_rit).addClass("hide-arrow");
        let loadnetwork = "#path52-8-4, #FilledArrow_Marker-8-4";
        $(loadnetwork).addClass("hide-arrow");

        if ($('#pd-d4c-rl-loop2 .substep-active')[0].id == "send-scenario") {
            $(simulation_and).addClass("blinking");
        }
        if ($('#pd-d4c-rl-loop2 .substep-active')[0].id == "send-scenario-nn") {
            $(simulation_and).removeClass("blinking hide-arrow");
            $(actionbiasing_and).addClass("blinking");
        }
        // if ($('#pd-d4c-rl-loop2 .substep-active')[0].id == "action-biasing") {
        //     $(motor_output).addClass("blinking");
        // }
        // if ($('#pd-d4c-rl-loop2 .substep-active')[0].id == "receive-maneuver") {
        //     $(biases).addClass("blinking");
        // }
    });
    $("#pd-d4c-rl-loop3").bind("impress:stepenter", function(event) {
        let actionbiasing_and = "#path170, #FilledArrow_Marker_5";
        $(actionbiasing_and).removeClass("blinking hide-arrow");
        let actionbiasing_rit = "#path170-5, #FilledArrow_Marker_5-6, #path58, #FilledBall_Marker, #tspan177, #tspan125, #tspan132";
        $(actionbiasing_rit).addClass("hide-arrow");
        let simulation_and = "#path52-5, #FilledArrow_Marker-5, #path52, #FilledArrow_Marker, #tspan107, #tspan109";
        $(simulation_and).removeClass("blinking hide-arrow");
        let simulation_rit = "#path64, #FilledArrow_Marker_4, #tspan88-6, #tspan88";
        $(simulation_rit).addClass("hide-arrow");

        let storenetwork = "#path52-8-0, #FilledArrow_Marker-8-5";
        $(storenetwork).removeClass("hide-arrow");
        let storebufferreplay = "#path52-8, #FilledArrow_Marker-8";
        $(storebufferreplay).addClass("hide-arrow");

        let loadnetwork = "#path52-8-4, #FilledArrow_Marker-8-4";
        $(loadnetwork).addClass("hide-arrow");
        let loadbufferreplay = "#path52-8-4-7, #FilledArrow_Marker-8-4-5";
        $(loadbufferreplay).addClass("hide-arrow");
    });
    $("#pd-d4c-rl-loop3").bind("impress:substep:enter impress:substep:stepleaveaborted", function(event) {
        let actionbiasing_and = "#path170, #FilledArrow_Marker_5";
        $(actionbiasing_and).addClass("hide-arrow");
        let actionbiasing_rit = "#path170-5, #FilledArrow_Marker_5-6, #path58, #FilledBall_Marker, #tspan177, #tspan125, #tspan132";
        $(actionbiasing_rit).addClass("hide-arrow");
        let simulation_and = "#path52-5, #FilledArrow_Marker-5, #path52, #FilledArrow_Marker, #tspan107, #tspan109";
        $(simulation_and).addClass("hide-arrow");
        let simulation_rit = "#path64, #FilledArrow_Marker_4, #tspan88-6, #tspan88";
        $(simulation_rit).addClass("hide-arrow");
        let loadnetwork = "#path52-8-4, #FilledArrow_Marker-8-4";
        $(loadnetwork).addClass("hide-arrow");

        if ($('#pd-d4c-rl-loop3 .substep-active')[0].id == "action-biasing") {
            $(simulation_and).removeClass("blinking hide-arrow");
            $(actionbiasing_and).removeClass("blinking hide-arrow");
            $(actionbiasing_rit).addClass("blinking");
            $(loadnetwork).removeClass("hide-arrow");
        }
        if ($('#pd-d4c-rl-loop3 .substep-active')[0].id == "receive-maneuver") {
            $(simulation_and).removeClass("blinking hide-arrow");
            $(actionbiasing_and).removeClass("blinking hide-arrow");
            $(actionbiasing_rit).removeClass("blinking hide-arrow");
            $(loadnetwork).removeClass("hide-arrow");
            $(simulation_rit).addClass("blinking");
        }
    });
    $("#pd-d4c-rl-final").bind("impress:stepenter", function(event) {
        let actionbiasing_and = "#path170, #FilledArrow_Marker_5";
        $(actionbiasing_and).removeClass("blinking hide-arrow");
        let actionbiasing_rit = "#path170-5, #FilledArrow_Marker_5-6, #path58, #FilledBall_Marker, #tspan177, #tspan125, #tspan132";
        $(actionbiasing_rit).removeClass("blinking hide-arrow");
        let simulation_and = "#path52-5, #FilledArrow_Marker-5, #path52, #FilledArrow_Marker, #tspan107, #tspan109";
        $(simulation_and).removeClass("blinking hide-arrow");
        let simulation_rit = "#path64, #FilledArrow_Marker_4, #tspan88-6, #tspan88";
        $(simulation_rit).removeClass("blinking hide-arrow");

        let storenetwork = "#path52-8-0, #FilledArrow_Marker-8-5";
        $(storenetwork).removeClass("hide-arrow");
        let storebufferreplay = "#path52-8, #FilledArrow_Marker-8";
        $(storebufferreplay).addClass("hide-arrow");

        let loadnetwork = "#path52-8-4, #FilledArrow_Marker-8-4";
        $(loadnetwork).removeClass("hide-arrow");
        let loadbufferreplay = "#path52-8-4-7, #FilledArrow_Marker-8-4-5";
        $(loadbufferreplay).addClass("hide-arrow");
    });
    $("#pd-d4c-rl-final").bind("impress:substep:enter impress:substep:stepleaveaborted", function(event) {
        let actionbiasing_and = "#path170, #FilledArrow_Marker_5";
        $(actionbiasing_and).removeClass("blinking hide-arrow");
        let actionbiasing_rit = "#path170-5, #FilledArrow_Marker_5-6, #path58, #FilledBall_Marker, #tspan177, #tspan125, #tspan132";
        $(actionbiasing_rit).removeClass("blinking hide-arrow");
        let simulation_and = "#path52-5, #FilledArrow_Marker-5, #path52, #FilledArrow_Marker, #tspan107, #tspan109";
        $(simulation_and).removeClass("blinking hide-arrow");
        let simulation_rit = "#path64, #FilledArrow_Marker_4, #tspan88-6, #tspan88";
        $(simulation_rit).removeClass("blinking hide-arrow");

        let storenetwork = "#path52-8-0, #FilledArrow_Marker-8-5";
        $(storenetwork).removeClass("hide-arrow");
        let storebufferreplay = "#path52-8, #FilledArrow_Marker-8";
        $(storebufferreplay).addClass("hide-arrow");

        let loadnetwork = "#path52-8-4, #FilledArrow_Marker-8-4";
        $(loadnetwork).removeClass("hide-arrow");
        let loadbufferreplay = "#path52-8-4-7, #FilledArrow_Marker-8-4-5";
        $(loadbufferreplay).addClass("hide-arrow");

        if ($('#pd-d4c-rl-final .substep-active')[0].id == "store-buffer") {
            $(storebufferreplay).removeClass("hide-arrow");
        }
        if ($('#pd-d4c-rl-final .substep-active')[0].id == "load-buffer") {
            $(loadbufferreplay).removeClass("hide-arrow");
            $(storebufferreplay).removeClass("hide-arrow");
        }
    });
    $("#finish").bind("impress:stepenter", function(event) {
        $(".title-animation").css({
            "font-size": "1.05em"
        });
        $("#finish").bind("impress:stepleave", function(event) {
            $(".title-animation").css({
                "font-size": ""
            });
        });
    });
    // $("#pd-d4c-rl-step1").bind("impress:stepenter", function(event) {
    //     let loadbufferreplay = "#path52-8-4-7";
    //     let loadnetwork = "#path52-8-4";
    //     let storenetwork = "#path52-8-0";
    //     let storebufferreplay = "#path52-8";


    //     $(loadbufferreplay).removeClass("blinking");

    //     $(action_selection).removeClass("blinking");
    //     $(motor_output).removeClass("blinking");
    //     $(biases).removeClass("blinking");
    //     if ($('#pd-dreams4cars .substep-active')[0].id == "pd-d4c-first") {
    //         $(".agent-architecture").animate({
    //             top: "159px",
    //             left: "708px",
    //             width: "600px",
    //         }, {
    //             duration: 1000,
    //             complete: function() {
    //                 $("#pd-dreams4cars .video1").css({
    //                     "display": "block",
    //                     "opacity": 1
    //                 });
    //             }
    //         });
    //     }
    //     if ($('#pd-dreams4cars .substep-active')[0].id == "pd-d4c-second") {
    //         $(dorsal_stream).addClass("blinking");
    //     }
    //     if ($('#pd-dreams4cars .substep-active')[0].id == "pd-d4c-third") {
    //         $(action_selection).addClass("blinking");
    //     }
    //     if ($('#pd-dreams4cars .substep-active')[0].id == "pd-d4c-fourth") {
    //         $(motor_output).addClass("blinking");
    //     }
    //     if ($('#pd-dreams4cars .substep-active')[0].id == "pd-d4c-fifth") {
    //         $(biases).addClass("blinking");
    //     }
    // });

    // $("#university").bind("impress:stepleave", function(event) {
    //     if ($(event.detail.next).attr('id') == "master-thesis") {
    //         let l1, s1, s2, myInt;
    //         s1 = document.getElementById('circ-university');
    //         s2 = document.getElementById('circ-master-thesis');
    //         l1 = new LeaderLine(LeaderLine.pointAnchor(s1, { x: '80%', y: '20%' }), LeaderLine.pointAnchor(s2, { x: '50%', y: '50%' }), { path: 'straight', size: 200, hide: true });
    //         l1.setOptions({ // element-3, element-4
    //             gradient: {
    //                 startColor: 'var(--c1)',
    //                 endColor: 'var(--s1)'
    //             },
    //             startPlug: 'behind',
    //             endPlug: 'arrow3',
    //             endPlugSize: 0.7,
    //             startPlugColor: 'var(--c1)',
    //             endPlugColor: 'var(--s1)'
    //         });
    //         l1.show("draw");
    //         $("#master-thesis").one("impress:stepenter", () => {
    //             l1.remove();
    //             clearInterval(myInt);
    //         });
    //         myInt = setInterval(function() {
    //             l1.position();
    //         }, 10);
    //     }
    // });
});