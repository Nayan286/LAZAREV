function locomotive() {
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector(".main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy(".main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
    });

    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();

}

locomotive()

function opening() {
    var icon1 = document.querySelector(".page3 .section2 .ui-ux .set1 .services i");
    var web1 = document.querySelector(".page3 .section2 .ui-ux .set1 .website");

    icon1.addEventListener("click", function () {
        if (web1.style.display === "inline-block") {
            web1.style.display = "none";
        } else {
            web1.style.display = "inline-block";
        }
    })

    icon1.addEventListener("click", function () {
        if (icon1.style.transform === "" || icon1.style.transform === "rotate(0deg)") {
            icon1.style.transform = "rotate(180deg)";
        } else {
            icon1.style.transform = "rotate(0deg)";
        }
    });


    var icon2 = document.querySelector(".page3 .section2 .ui-ux .set2 .services i");
    var web2 = document.querySelector(".page3 .section2 .ui-ux .set2 .website");

    icon2.addEventListener("click", function () {
        if (web2.style.display === "inline-block") {
            web2.style.display = "none";
        } else {
            web2.style.display = "inline-block";
        }
    })

    icon2.addEventListener("click", function () {
        if (icon2.style.transform === "" || icon2.style.transform === "rotate(0deg)") {
            icon2.style.transform = "rotate(180deg)";
        } else {
            icon2.style.transform = "rotate(0deg)";
        }
    });
}

opening()

function play() {
    var boxes = document.querySelectorAll(".page2 .section1 .box");

    boxes.forEach(box => {
        var black = box.querySelector(".page2 .section1 .box-content");
        var video = box.querySelector(".page2 .section1 video");

        box.addEventListener("mouseover", function () {
            black.style.backgroundColor = "#00000000";

            video.currentTime = 0;
            setTimeout(() => {
                video.play();
            }, 1000);
        });

        box.addEventListener("mouseleave", function () {
            black.style.backgroundColor = "#1f1f1f";

            video.pause();
            video.currentTime = 0;
        });
    });

}

play()

function display() {
    var white = document.querySelector(".page1 .nav .nav-content .first .white-box");
    var first = document.querySelector(".page1 .nav .nav-content .first");
    var rotate = document.querySelector(".page1 .nav .first i");

    first.addEventListener("mouseover", function () {
        white.style.display = "block"
        rotate.style.transform = "rotate(180deg)";
        console.log(rotate);
    })

    first.addEventListener("mouseleave", function () {
        white.style.display = "none";
        rotate.style.transform = "rotate(0deg)";
    })
}

display()

function timeline() {
    var tl = gsap.timeline()

    tl.from(".page1", {
        transform: "scaleY(0.2) scaleX(0.7) translateY(80vh)",
        duration: 1.2,
        delay: 0.2,
        ease: "expo.out",
        borderRadius: "100px"
    })

    tl.from(".page1 .nav", {
        opacity: 0,
        duration: 0.2
    })

    tl.from(".page1 .page1-content h2 , .page1 .page1-content h3", {
        opacity: 0,
        duration: 0.4
    })

    tl.from(".page1 .page1-content h1 span", {
        y: 200,
        opacity: 0,
        duration: 0.4,
        stagger: 0.1
    })

    tl.from(".page1 .page1-video", {
        opacity: 0,
        duration: 0.4
    })
}

timeline()

// function cursoranimation() {
//     var video = document.querySelector(".page1 .page1-video")
//     var circle = document.querySelector(".page1 .page1-video .circle")

//     video.addEventListener("mouseenter", function () {
//         gsap.to(circle, {
//             opacity: 1,
//             scale: 1,
//             duration: 0.4
//         })
//     })

//     video.addEventListener("mouseleave", function () {
//         gsap.to(circle, {
//             opacity: 0,
//             scale: 0,
//             duration: 0.4
//         })
//     })

//     video.addEventListener("mousemove", function (dets) {
//         gsap.to(circle, {
//             left: dets.x-80,
//             top: dets.y-80
//         })
//     })
// }

// cursoranimation()