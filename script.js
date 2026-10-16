/* =====================================================
   MPOWERTALK — 8 SECOND OPENING
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const loader =
        document.getElementById("loader");

    const exitLayer =
        document.getElementById("exitLayer");


    /* ==========================================
       TOTAL EXPERIENCE
    =========================================== */

    const totalDuration = 8000;


    /* ==========================================
       START EXIT ANIMATION
    =========================================== */

    setTimeout(() => {

        if (!exitLayer) return;

        exitLayer.style.transition =
            "transform 0.9s cubic-bezier(.76,0,.24,1)";

        exitLayer.style.transform =
            "scaleY(1)";

    }, 7350);


    /* ==========================================
       SHOW WEBSITE + NAVBAR
    =========================================== */

    setTimeout(() => {

        if (!loader) return;

        loader.style.transition =
            "opacity .45s ease";

        loader.style.opacity =
            "0";


        /* SHOW NAVBAR */

        document.body.classList.add(
            "site-ready"
        );


        setTimeout(() => {

            if (loader) {
                loader.remove();
            }

            document.body.style.overflow =
                "auto";

        }, 500);

    }, totalDuration);

});


/* =====================================================
   NAVBAR ELEMENTS
===================================================== */

const siteHeader =
    document.getElementById("siteHeader");

const menuTrigger =
    document.getElementById("menuTrigger");

const mobileMenu =
    document.getElementById("mobileMenu");

const mobileClose =
    document.getElementById("mobileClose");


/* =====================================================
   SCROLL EFFECT
===================================================== */

window.addEventListener("scroll", () => {

    if (!siteHeader) return;

    if (window.scrollY > 40) {

        siteHeader.classList.add(
            "scrolled"
        );

    } else {

        siteHeader.classList.remove(
            "scrolled"
        );

    }

});


/* =====================================================
   OPEN MOBILE MENU
===================================================== */

if (menuTrigger && mobileMenu) {

    menuTrigger.addEventListener(
        "click",
        () => {

            mobileMenu.classList.add(
                "open"
            );

            menuTrigger.classList.add(
                "active"
            );

            menuTrigger.setAttribute(
                "aria-expanded",
                "true"
            );

            document.body.style.overflow =
                "hidden";

        }
    );

}


/* =====================================================
   CLOSE MOBILE MENU
===================================================== */

function closeMobileMenu() {

    if (!mobileMenu) return;

    mobileMenu.classList.remove(
        "open"
    );


    if (menuTrigger) {

        menuTrigger.classList.remove(
            "active"
        );

        menuTrigger.setAttribute(
            "aria-expanded",
            "false"
        );

    }


    document.body.style.overflow =
        "auto";
}


/* =====================================================
   CLOSE BUTTON
===================================================== */

if (mobileClose) {

    mobileClose.addEventListener(
        "click",
        closeMobileMenu
    );

}


/* =====================================================
   CLOSE AFTER CLICKING LINK
===================================================== */

const mobileLinks =
    document.querySelectorAll(
        ".mobile-link"
    );


mobileLinks.forEach(link => {

    link.addEventListener(
        "click",
        closeMobileMenu
    );

});


/* =====================================================
   ESC KEY CLOSE
===================================================== */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            mobileMenu &&
            mobileMenu.classList.contains("open")
        ) {

            closeMobileMenu();

        }

    }
);


/* =========================================================
   MPOWERTALK — FOUNDER
   FADE IN WHEN SECTION ENTERS VIEW
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const founder = document.querySelector(".mp-founder-story");

    if (!founder) return;

    /* Fade in only when founder section enters the screen */
    const founderObserver = new IntersectionObserver(
        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    founder.classList.add("is-visible");

                    /* Run only once */
                    founderObserver.unobserve(founder);
                }

            });

        },
        {
            threshold: 0.15
        }
    );

    founderObserver.observe(founder);

    /* Preserve existing image hover effect */
    const image = founder.querySelector(".mp-founder-image img");

    if (image) {

        image.addEventListener("mouseenter", () => {
            image.style.transform = "scale(1.015)";
        });

        image.addEventListener("mouseleave", () => {
            image.style.transform = "scale(1)";
        });

    }

});

/* =====================================================
   SECTION 02 — RESPONSIVE MIC STORY
===================================================== */

document.addEventListener("DOMContentLoaded", () => {
    const section = document.querySelector("#voiceStory");
    if (!section) return;

    const belief = section.querySelector(".voice-belief");
    const micStage = section.querySelector(".voice-mic-stage");
    const mic = section.querySelector(".voice-mic-image");
    const cards = [...section.querySelectorAll(".voice-belief-card")];
    const about = section.querySelector(".voice-about");
    const aboutInner = section.querySelector(".voice-about-inner");
    const note = section.querySelector(".voice-scroll-note");

    if (!belief || !micStage || !mic || !about) return;

    const clamp = (v, min = 0, max = 1) =>
        Math.min(Math.max(v, min), max);

    const ease = v => {
        v = clamp(v);
        return v * v * (3 - 2 * v);
    };

    let ticking = false;

    function getProgress() {
        const rect = section.getBoundingClientRect();
        const distance = section.offsetHeight - window.innerHeight;
        return distance > 0 ? clamp(-rect.top / distance) : 0;
    }

    function update() {
        const p = getProgress();
        const mobile = window.innerWidth <= 700;

        if (!mobile) {
            const intro = ease(p / 0.15);

            belief.style.opacity = intro;
            belief.style.transform =
                `translateY(${20 * (1 - intro)}px)`;

            mic.style.opacity = ease(p / 0.12);
            mic.style.transform =
                `scale(${0.96 + 0.04 * ease(p / 0.15)})`;

            micStage.style.transform = "translateY(-50%)";

            cards.forEach((card, i) => {
                const show = ease((p - (0.12 + i * 0.10)) / 0.13);
                const fade = 1 - ease((p - 0.53) / 0.10);

                card.style.opacity = show * fade;
                card.style.transform =
                    `translateX(${25 * (1 - show)}px)`;
            });

            const aboutProgress = ease((p - 0.64) / 0.23);
            about.style.opacity = aboutProgress;
            about.style.pointerEvents =
                aboutProgress > 0.9 ? "auto" : "none";

            if (aboutInner) {
                aboutInner.style.transform =
                    `translateY(${25 * (1 - aboutProgress)}px)`;
            }

            if (note) note.style.opacity = 1 - ease(p / 0.25);
            return;
        }

        


ointerEvents = "none";
/* MOBILE — SLOW, SMOOTH MIC STORY SEQUENCE */

const introProgress = ease(p / 0.14);

/* STAGE 1 — HEADING */
const beliefFadeOut = 1 - ease((p - 0.32) / 0.14);

belief.style.opacity = introProgress * beliefFadeOut;

belief.style.transform =
    `translateY(${16 * (1 - introProgress)}px)`;


/* STAGE 2 — MIC TRAVELS SLOWLY LEFT-DOWN */
const micTravel = ease((p - 0.12) / 0.42);

mic.style.opacity = introProgress;
mic.style.transform = "none";

micStage.style.transform =
    `translate3d(${-52 * micTravel}vw, ${23 * micTravel}vh, 0) translateY(-50%)`;


/* STAGE 3 — FOUR CARDS REVEAL ONE BY ONE */
const cardsFadeOut = 1 - ease((p - 0.94) / 0.06);

cards.forEach((card, i) => {

    /* More breathing room between cards */
    const cardStart = 0.48 + i * 0.095;

    /* Slower fade-in for each card */
    const show = ease((p - cardStart) / 0.17);

    const cardOpacity = show * cardsFadeOut;

    card.style.opacity = cardOpacity;

    card.style.transform =
        `translateY(${14 * (1 - show) + 8 * (1 - cardsFadeOut)}px)`;

    card.style.pointerEvents = "none";
});


/* STAGE 4 — ABOUT FADES IN GRADUALLY */
const aboutProgress = ease((p - 0.91) / 0.16);

about.style.opacity = aboutProgress;

about.style.pointerEvents =
    aboutProgress > 0.9 ? "auto" : "none";

if (aboutInner) {
    aboutInner.style.transform =
        `translateY(${20 * (1 - aboutProgress)}px)`;
}


/* SCROLL HINT */
if (note) {
    note.style.opacity = 1 - ease(p / 0.3);
}
    }

    function requestUpdate() {
        if (ticking) return;
        ticking = true;

        requestAnimationFrame(() => {
            update();
            ticking = false;
        });
    }

    window.addEventListener("scroll", requestUpdate, {
        passive: true
    });

    window.addEventListener("resize", requestUpdate, {
        passive: true
    });

    update();
});

/* =====================================================
   SECTION 03 — MPOWER TALK SERVICES
   CINEMATIC MIC + SERVICES JOURNEY

   FORWARD:

   SECTION 02 MIC
        ↓
   MIC TRAVELS TO RIGHT
        ↓
   INTRO WORDS LEFT
        ↓
   MIC RIGHT → CENTRE
        ↓
   SERVICES LEFT + RIGHT
        ↓
   SERVICES FADE
        ↓
   MIC STAYS CENTRE
        ↓
   OUR SERVICES

   REVERSE:

   EXACT SAME ANIMATION BACKWARDS
===================================================== */

(function () {

    /* =====================================================
       ELEMENTS
    ===================================================== */

    const section =
        document.querySelector("#programs");

    const voiceSection =
        document.querySelector("#voiceStory");

    const sourceStage =
        voiceSection?.querySelector(
            ".voice-mic-stage"
        );

    const sourceImage =
        sourceStage?.querySelector(
            ".voice-mic-image"
        );


    if (
        !section ||
        !voiceSection ||
        !sourceStage ||
        !sourceImage
    ) {
        return;
    }


    const intro =
        section.querySelector(
            ".mp3-services-intro"
        );


    const services = [
        ...section.querySelectorAll(
            ".mp3-service-item"
        )
    ];


    const final =
        section.querySelector(
            ".mp3-services-final"
        );


    if (
        !intro ||
        services.length !== 4 ||
        !final
    ) {
        return;
    }


    /* =====================================================
       HELPERS
    ===================================================== */

    const clamp = (
        value,
        min = 0,
        max = 1
    ) => {

        return Math.max(
            min,
            Math.min(max, value)
        );

    };


    const ease = value => {

        const x =
            clamp(value);

        return (
            x * x *
            (3 - 2 * x)
        );

    };


    const lerp = (
        start,
        end,
        progress
    ) => {

        return (
            start +
            (end - start) *
            progress
        );

    };


    /* =====================================================
       CREATE MOVING MIC

       CLONE OF SECTION 02 MIC
    ===================================================== */

    const movingMic =
        document.createElement(
            "div"
        );


    movingMic.className =
        "mp3-transition-mic";


    const movingImage =
        sourceImage.cloneNode(true);


    movingImage.removeAttribute(
        "style"
    );


    movingImage.removeAttribute(
        "id"
    );


    movingMic.appendChild(
        movingImage
    );


    document.body.appendChild(
        movingMic
    );


    let originRect = null;

    let ticking = false;


    /* =====================================================
       SECTION PROGRESS
    ===================================================== */

    function getSectionProgress() {

        const rect =
            section.getBoundingClientRect();


        const distance =
            section.offsetHeight -
            window.innerHeight;


        if (distance <= 0) {

            return 0;

        }


        return clamp(
            -rect.top / distance
        );

    }

    /* =====================================================
   MIC SIZE
===================================================== */

function getMicSize() {

    const mobile =
        window.innerWidth <= 700;


    /* ---------------------------------------------
       MOBILE
       
       BIGGER MIC
    --------------------------------------------- */

    if (mobile) {

        return {

            width:
                Math.min(
                    window.innerWidth * 0.43,
                    195
                ),

            height:
                Math.min(
                    window.innerHeight * 0.44,
                    290
                )

        };

    }


    /* ---------------------------------------------
       DESKTOP
    --------------------------------------------- */

    return {

        width:
            Math.min(
                window.innerWidth * 0.215,
                285
            ),

        height:
            Math.min(
                window.innerHeight * 0.46,
                370
            )

    };

}

/* =====================================================
   MIC LEFT POSITION

   INTRO TEXT = RIGHT
   MIC = LEFT
===================================================== */

function getIntroMicRect() {

    const size =
        getMicSize();

    const mobile =
        window.innerWidth <= 700;


    /* ---------------------------------------------
       MOBILE
       MIC = LEFT
       INTRO = RIGHT
    --------------------------------------------- */

    if (mobile) {

    return {

        /* MIC = RIGHT */

        left:
            window.innerWidth * 0.56,

        top:
            window.innerHeight * 0.17,

        width:
            size.width,

        height:
            size.height

    };

}


    /* ---------------------------------------------
       DESKTOP
       KEEP CURRENT DESKTOP POSITION
    --------------------------------------------- */

  return {

    left:
        window.innerWidth * 0.67,

    top:
        window.innerHeight * 0.30,

    width:
        size.width,

    height:
        size.height

};

}


    /* =====================================================
       MIC CENTRE POSITION
    ===================================================== */

    function getCenterMicRect() {

    const size = getMicSize();

    const mobile = window.innerWidth <= 700;

    return {
        left:
            (window.innerWidth - size.width) / 2,

        top:
            (window.innerHeight - size.height) / 2
            - (mobile ? 48 : 0),

        width: size.width,
        height: size.height
    };

}


    /* =====================================================
       APPLY MIC POSITION
    ===================================================== */

    function setMicPosition(
        rect
    ) {

        movingMic.style.left =
            `${rect.left}px`;

        movingMic.style.top =
            `${rect.top}px`;

        movingMic.style.width =
            `${rect.width}px`;

        movingMic.style.height =
            `${rect.height}px`;

    }


    /* =====================================================
       SECTION 02 → SECTION 03

       MIC TRAVELS TO RIGHT
    ===================================================== */

    function updateMicTransition(
        sectionRect
    ) {

        const vh =
            window.innerHeight;


        const entering =
            sectionRect.top < vh &&
            sectionRect.bottom > 0;


       if (!entering) {

    /*
       IMPORTANT

       Do NOT immediately show the original
       Section 02 mic.

       If Section 04 is currently active,
       the moving mic must continue from
       Section 03 → Section 04.

       This prevents duplicate microphones.
    */

    const whySection =
        document.querySelector(
            "#why-mpower"
        );

    const whyRect =
        whySection
            ? whySection.getBoundingClientRect()
            : null;


    const whyActive =
        whyRect &&
        whyRect.top < vh &&
        whyRect.bottom > 0;


    if (whyActive) {

        /*
           SECTION 04 OWNS THE MOVING MIC.

           Keep original Section 02 mic hidden.
        */

        sourceStage.style.visibility =
            "hidden";

        return;

    }


    /*
       Only when Section 03 AND Section 04
       are completely out of view:

       restore Section 02 mic.
    */

    movingMic.style.visibility =
        "hidden";

    movingMic.style.opacity =
        "0";

    sourceStage.style.visibility =
        "";

    originRect = null;

    return;

}


        /* ---------------------------------------------
           CAPTURE SECTION 02 MIC
        --------------------------------------------- */

        if (!originRect) {

            const sourceRect =
                sourceImage.getBoundingClientRect();


            if (
                sourceRect.width > 0 &&
                sourceRect.height > 0
            ) {

                originRect = {

                    left:
                        sourceRect.left,

                    top:
                        sourceRect.top,

                    width:
                        sourceRect.width,

                    height:
                        sourceRect.height

                };

            }

        }


        if (!originRect) {

            return;

        }


        /* ---------------------------------------------
           HIDE ORIGINAL
        --------------------------------------------- */

        sourceStage.style.visibility =
            "hidden";


        movingMic.style.visibility =
            "visible";

        movingMic.style.opacity =
            "1";


        /* ---------------------------------------------
           TRAVEL
        --------------------------------------------- */

        const travelProgress =
            clamp(
                (
                    vh -
                    sectionRect.top
                ) /
                (
                    vh * 0.82
                )
            );


        const travel =
            ease(
                travelProgress
            );


        const target =
            getIntroMicRect();


        setMicPosition({

            left:
                lerp(
                    originRect.left,
                    target.left,
                    travel
                ),

            top:
                lerp(
                    originRect.top,
                    target.top,
                    travel
                ),

            width:
                lerp(
                    originRect.width,
                    target.width,
                    travel
                ),

            height:
                lerp(
                    originRect.height,
                    target.height,
                    travel
                )

        });

    }


    /* =====================================================
       INTRO TEXT

       EARLY:

       MIC RIGHT
       TEXT LEFT

       THEN INTRO DISAPPEARS
       AS MIC STARTS MOVING TO CENTRE
    ===================================================== */

    function updateIntro(p) {

        const introIn =
            ease(
                p / 0.06
            );


        const introOut =
            ease(
                (p - 0.19) /
                0.09
            );


        const opacity =
            introIn *
            (1 - introOut);


        intro.style.opacity =
            String(opacity);


        intro.style.visibility =
            opacity > 0.005
                ? "visible"
                : "hidden";


        const mobile =
    window.innerWidth <= 700;

if (mobile) {

    /*
       MOBILE:

       Do NOT use -50% vertical transform.

       CSS controls the exact vertical
       position so the intro stays below
       the fixed navbar.
    */
    intro.style.transform =
        `translate3d(
            ${-35 * (1 - introIn)}px,
            0,
            0
        )`;

} else {

    /*
       DESKTOP:

       Keep the original vertical
       centering behaviour.
    */
    intro.style.transform =
        `translate3d(
            ${-35 * (1 - introIn)}px,
            -50%,
            0
        )`;

}

    }

    /* =====================================================
   MIC RIGHT → CENTRE

   IMPORTANT:

   BEFORE 0.20:
   DO NOTHING.

   SECTION 03 MIC TRAVEL FUNCTION
   CONTROLS:

   SECTION 02 LEFT
        ↕
   SECTION 03 RIGHT

   AFTER 0.20:
   MIC MOVES RIGHT → CENTRE
===================================================== */

function updateCenterMic(p) {

    const introRect =
        getIntroMicRect();


    const centerRect =
        getCenterMicRect();


    /* ---------------------------------------------
       IMPORTANT FIX

       When p < 0.20:

       DO NOT SET MIC TO RIGHT.

       updateMicTransition()
       is already controlling the
       Section 03 ↔ Section 02 travel.

       This allows:

       REVERSE:
       RIGHT → LEFT

       instead of:

       RIGHT → RIGHT
    --------------------------------------------- */

    if (p < 0.20) {

        return;

    }


    /* ---------------------------------------------
       RIGHT → CENTRE
    --------------------------------------------- */

    const centerMove =
        ease(
            (p - 0.20) /
            0.20
        );


    setMicPosition({

        left:
            lerp(
                introRect.left,
                centerRect.left,
                centerMove
            ),

        top:
            lerp(
                introRect.top,
                centerRect.top,
                centerMove
            ),

        width:
            lerp(
                introRect.width,
                centerRect.width,
                centerMove
            ),

        height:
            lerp(
                introRect.height,
                centerRect.height,
                centerMove
            )

    });

}


    /* =====================================================
       SERVICE TIMING

       SERVICE 01 = PUBLIC SPEAKING
       SERVICE 02 = WORKSHOPS
       SERVICE 03 = PANEL DISCUSSIONS
       SERVICE 04 = CORPORATE EVENTS

       THEY START ONLY AFTER MIC BEGINS
       MOVING TOWARDS CENTRE.

       THEY STAY VISIBLE FOR LONGER.
    ===================================================== */

    const serviceTimings = [

        {
            start: 0.30,
            fadeIn: 0.09
        },

        {
            start: 0.35,
            fadeIn: 0.09
        },

        {
            start: 0.40,
            fadeIn: 0.09
        },

        {
            start: 0.45,
            fadeIn: 0.09
        }

    ];


    /* =====================================================
       SERVICES AROUND CENTRE MIC
    ===================================================== */

    function updateServices(p) {

        services.forEach(
            (item, index) => {

                const timing =
                    serviceTimings[index];


                /* -----------------------------------------
                   EACH SERVICE ENTERS
                ----------------------------------------- */

                const inProgress =
                    ease(
                        (
                            p -
                            timing.start
                        ) /
                        timing.fadeIn
                    );


                /* -----------------------------------------
                   KEEP SERVICES VISIBLE
                   UNTIL FINAL SCENE
                ----------------------------------------- */

                const fadeOut =
                    ease(
                        (
                            p - 0.68
                        ) /
                        0.10
                    );


                const opacity =
                    inProgress *
                    (1 - fadeOut);


                item.style.opacity =
                    String(opacity);


                item.style.visibility =
                    opacity > 0.005
                        ? "visible"
                        : "hidden";


                /* -----------------------------------------
                   LEFT / RIGHT MOVEMENT
                ----------------------------------------- */

                const fromX =
                    item.classList.contains(
                        "is-left"
                    )
                        ? -45
                        : 45;


                /* -----------------------------------------
                   TOP / BOTTOM MOVEMENT
                ----------------------------------------- */

                const fromY =
                    index < 2
                        ? -25
                        : 25;


                const x =
                    fromX *
                    (1 - inProgress);


                const y =
                    fromY *
                    (1 - inProgress);


                item.style.transform =
                    `translate3d(
                        ${x}px,
                        calc(
                            -50% +
                            ${y}px
                        ),
                        0
                    )`;

            }
        );

    }


    /* =====================================================
       FINAL SCENE

       SERVICES DISAPPEAR
       ↓
       OUR SERVICES APPEARS

       MIC REMAINS CENTRE
    ===================================================== */

    function updateFinal(p) {

        const finalIn =
            ease(
                (p - 0.76) /
                0.12
            );


        final.style.opacity =
            String(finalIn);


        final.style.visibility =
            finalIn > 0.005
                ? "visible"
                : "hidden";


        final.style.transform =
            `translate3d(
                -50%,
                ${
                    24 *
                    (1 - finalIn)
                }px,
                0
            )`;

    }


    /* =====================================================
       MAIN CONTENT UPDATE
    ===================================================== */

    function updateContent() {

        const p =
            getSectionProgress();


        /* ---------------------------------------------
           1. INTRO
        --------------------------------------------- */

        updateIntro(p);


        /* ---------------------------------------------
           2. MIC RIGHT → CENTRE
        --------------------------------------------- */

        updateCenterMic(p);


        /* ---------------------------------------------
           3. LEFT + RIGHT SERVICES
        --------------------------------------------- */

        updateServices(p);


        /* ---------------------------------------------
           4. OUR SERVICES
        --------------------------------------------- */

        updateFinal(p);

    }


    /* =====================================================
       MAIN UPDATE
    ===================================================== */

    function update() {

        ticking = false;


        const sectionRect =
            section.getBoundingClientRect();


        /* ---------------------------------------------
           SECTION 02 → SECTION 03 MIC TRAVEL
        --------------------------------------------- */

        updateMicTransition(
            sectionRect
        );


        /* ---------------------------------------------
           SECTION 03 CONTENT
        --------------------------------------------- */

        updateContent();

    }


    /* =====================================================
       SCROLL
    ===================================================== */

    function requestUpdate() {

        if (ticking) {

            return;

        }


        ticking = true;


        requestAnimationFrame(
            update
        );

    }


    window.addEventListener(
        "scroll",
        requestUpdate,
        {
            passive: true
        }
    );


    window.addEventListener(
        "resize",
        requestUpdate,
        {
            passive: true
        }
    );


    /* =====================================================
       INITIAL
    ===================================================== */

    update();

})();


/* =========================================================
   SECTION 04 — WHY MPOWER TALK

   IMPORTANT:

   SECTION 03 OWNS THE MIC UNTIL IT REACHES
   THE CENTRE.

   SECTION 04 ONLY TAKES THAT SAME MIC
   AND MOVES IT:

        CENTRE
           ↓
           ↓
        RIGHT
           ↓
         STOP

   CONTENT:

        LEFT
        WHY
        SHOULD CHOOSE
        mPOWER TALK

   WORDS = FLIP
========================================================= */

(function () {

    const section =
        document.querySelector(
            "#why-mpower"
        );


    if (!section) {
        return;
    }


    /* =====================================================
       SECTION 04 ELEMENTS
    ===================================================== */

    const content =
        section.querySelector(
            ".mp4-final-content"
        );


    const words =
        [
            ...section.querySelectorAll(
                ".mp4-flip-word"
            )
        ];


    const divider =
        section.querySelector(
            ".mp4-final-divider"
        );


    const description =
        section.querySelector(
            ".mp4-final-description"
        );


    const points =
        section.querySelector(
            ".mp4-final-points"
        );


    if (
        !content ||
        !words.length
    ) {
        return;
    }


    /* =====================================================
       FIND THE REAL MIC CREATED BY SECTION 03
       
       DO NOT CREATE ANOTHER MIC.
       
       THIS IS THE MOST IMPORTANT PART.
    ===================================================== */

    const mic =
        document.querySelector(
            ".mp3-transition-mic"
        );


    if (!mic) {

        console.warn(
            "Section 04: Section 03 mic not found."
        );

        return;
    }


    /* =====================================================
       HELPERS
    ===================================================== */

    const clamp =
        (
            value,
            min = 0,
            max = 1
        ) => {

            return Math.max(
                min,
                Math.min(
                    max,
                    value
                )
            );

        };


    const ease =
        value => {

            const x =
                clamp(value);

            return (
                x *
                x *
                (3 - 2 * x)
            );

        };


    const lerp =
        (
            start,
            end,
            progress
        ) => {

            return (
                start +
                (
                    end -
                    start
                ) *
                progress
            );

        };


    /* =====================================================
       SECTION 04 PROGRESS

       0 = SECTION 04 START
       1 = SECTION 04 END
    ===================================================== */

    function getProgress() {

        const rect =
            section.getBoundingClientRect();


        const distance =
            section.offsetHeight -
            window.innerHeight;


        if (distance <= 0) {
            return 0;
        }


        return clamp(
            -rect.top /
            distance
        );

    }


    /* =====================================================
       MIC SIZE

       MATCH SECTION 03 MIC SIZE
    ===================================================== */

    function getMicSize() {

        const mobile =
            window.innerWidth <= 700;


        if (mobile) {

            return {

                width:
                    Math.min(
                        window.innerWidth *
                        .43,
                        195
                    ),

                height:
                    Math.min(
                        window.innerHeight *
                        .44,
                        290
                    )

            };

        }


        return {

            width:
                Math.min(
                    window.innerWidth *
                    .215,
                    285
                ),

            height:
                Math.min(
                    window.innerHeight *
                    .46,
                    370
                )

        };

    }


    /* =====================================================
       MIC CENTRE

       SECTION 03 ENDS HERE.
    ===================================================== */

    function getCentreRect() {

        const size =
            getMicSize();


        return {

            left:
                (
                    window.innerWidth -
                    size.width
                ) / 2,

            top:
                (
                    window.innerHeight -
                    size.height
                ) / 2,

            width:
                size.width,

            height:
                size.height

        };

    }


    /* =====================================================
       MIC RIGHT

       FINAL POSITION.
       
       AFTER THIS:
       MIC MUST NOT MOVE.
    ===================================================== */

    function getRightRect() {

        const size =
            getMicSize();


        const mobile =
            window.innerWidth <= 700;


        if (mobile) {

            return {

                left:
                    window.innerWidth *
                    .74 -
                    size.width / 2,

                top:
                    window.innerHeight *
                    .50 -
                    size.height / 2,

                width:
                    size.width,

                height:
                    size.height

            };

        }


        return {

            left:
                window.innerWidth *
                .76 -
                size.width / 2,

            top:
                window.innerHeight *
                .50 -
                size.height / 2,

            width:
                size.width,

            height:
                size.height

        };

    }


    /* =====================================================
       APPLY MIC
    ===================================================== */

    function setMic(
        rect
    ) {

        mic.style.left =
            `${rect.left}px`;


        mic.style.top =
            `${rect.top}px`;


        mic.style.width =
            `${rect.width}px`;


        mic.style.height =
            `${rect.height}px`;


        mic.style.opacity =
            "1";


        mic.style.visibility =
            "visible";

    }


    /* =====================================================
       MIC CENTRE → RIGHT
       
       FIRST 35% OF SECTION 04:
       MIC TRAVELS.

       AFTER 35%:
       MIC IS LOCKED.
    ===================================================== */

    function updateMic(p) {

    const centre =
        getCentreRect();


    const right =
        getRightRect();


    /*
       FIRST 35%

       MIC:
       CENTRE → RIGHT
    */

    const travel =
        ease(
            p / 0.35
        );


    /*
       AFTER 35%

       travel = 1

       Therefore the mic stays
       EXACTLY at the right position.
    */

    setMic({

        left:
            lerp(
                centre.left,
                right.left,
                travel
            ),

        top:
            lerp(
                centre.top,
                right.top,
                travel
            ),

        width:
            lerp(
                centre.width,
                right.width,
                travel
            ),

        height:
            lerp(
                centre.height,
                right.height,
                travel
            )

    });

}


    /* =====================================================
       CONTENT

       CONTENT STARTS AFTER MIC HAS
       STARTED MOVING.

       SO:

       MIC MOVES
          ↓
       THEN WORDS FLIP
    ===================================================== */

    function updateContent(p) {

        const contentProgress =
            ease(
                (p - .18) /
                .28
            );


        content.style.opacity =
            contentProgress;


        content.style.visibility =
            contentProgress >
            .005
                ? "visible"
                : "hidden";


        content.style.transform =
            `translate3d(
                ${
                    -35 *
                    (
                        1 -
                        contentProgress
                    )
                }px,
                -50%,
                0
            )`;


        /* =================================================
           FLIP WORDS
        ================================================= */

        words.forEach(
            (
                word,
                index
            ) => {

                const start =
                    .20 +
                    index *
                    .08;


                const flip =
                    ease(
                        (
                            p -
                            start
                        ) /
                        .14
                    );


                word.style.opacity =
                    flip;


                word.style.transform =
                    `
                    rotateX(
                        ${
                            -90 +
                            (
                                90 *
                                flip
                            )
                        }deg
                    )
                    translateY(
                        ${
                            28 *
                            (
                                1 -
                                flip
                            )
                        }px
                    )
                    `;

            }
        );


        /* =================================================
           DIVIDER
        ================================================= */

        const dividerProgress =
            ease(
                (p - .46) /
                .12
            );


        divider.style.width =
            `${
                180 *
                dividerProgress
            }px`;


        divider.style.opacity =
            dividerProgress;


        /* =================================================
           DESCRIPTION
        ================================================= */

        const descriptionProgress =
            ease(
                (p - .53) /
                .15
            );


        description.style.opacity =
            descriptionProgress;


        description.style.transform =
            `translateY(
                ${
                    22 *
                    (
                        1 -
                        descriptionProgress
                    )
                }px
            )`;


        /* =================================================
           POINTS
        ================================================= */

        const pointsProgress =
            ease(
                (p - .64) /
                .18
            );


        points.style.opacity =
            pointsProgress;


        points.style.transform =
            `translateY(
                ${
                    22 *
                    (
                        1 -
                        pointsProgress
                    )
                }px
            )`;

    }


    /* =====================================================
       MAIN UPDATE
    ===================================================== */

    function update() {

    const p =
        getProgress();


    const sectionRect =
        section.getBoundingClientRect();


    const sectionActive =
        sectionRect.top <= 0 &&
        sectionRect.bottom >= window.innerHeight;


    if (!sectionActive) {

        /*
           SECTION 4 completely finished.

           Hide moving mic so it does NOT
           travel into Upcoming Events.
        */

        if (
            sectionRect.bottom <
            window.innerHeight
        ) {

            mic.style.visibility =
                "hidden";

            mic.style.opacity =
                "0";

        }


        return;
    }


    /*
       SECTION 4 ACTIVE
    */

    mic.style.visibility =
        "visible";

    mic.style.opacity =
        "1";


    updateMic(p);

    updateContent(p);

}


    /* =====================================================
       SCROLL
    ===================================================== */

    let ticking =
        false;


    function requestUpdate() {

        if (ticking) {
            return;
        }


        ticking = true;


        requestAnimationFrame(
            () => {

                update();

                ticking =
                    false;

            }
        );

    }


    window.addEventListener(
        "scroll",
        requestUpdate,
        {
            passive: true
        }
    );


    window.addEventListener(
        "resize",
        requestUpdate,
        {
            passive: true
        }
    );


    /* =====================================================
       INITIAL
    ===================================================== */

    update();

})();

/* =========================================================
   MPOWER TALK — UPCOMING EVENTS
   EXPANDING CARDS + STAGGERED EVENT INFO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const stage =
            document.getElementById(
                "mp5CardStage"
            );


        if (!stage) {
            return;
        }


        const cards =
            Array.from(
                stage.querySelectorAll(
                    ".mp5-event-card"
                )
            );


        if (!cards.length) {
            return;
        }


        let activeIndex = 0;


        /* =================================================
           RESET ANIMATIONS
        ================================================= */

        function resetCardAnimations(card) {

            const animated =
                card.querySelectorAll(
                    `
                    .mp5-event-label,
                    .mp5-event-status,
                    .mp5-event-main,
                    .mp5-event-kicker,
                    .mp5-event-details h3,
                    .mp5-event-meta,
                    .mp5-event-bottom
                    `
                );


            animated.forEach(
                element => {

                    element.style.animation =
                        "none";

                }
            );


            /*
             * Force browser to restart
             * the animation.
             */

            void card.offsetWidth;


            animated.forEach(
                element => {

                    element.style.animation =
                        "";

                }
            );

        }


        /* =================================================
           ACTIVATE CARD
        ================================================= */

        function activateCard(index) {

            if (
                index < 0 ||
                index >= cards.length
            ) {

                return;

            }


            if (
                index === activeIndex &&
                cards[index].classList.contains(
                    "is-active"
                )
            ) {

                return;

            }


            /*
             * Remove active state
             */

            cards.forEach(
                card => {

                    card.classList.remove(
                        "is-active"
                    );

                }
            );


            /*
             * New active card
             */

            const nextCard =
                cards[index];


            nextCard.classList.add(
                "is-active"
            );


            activeIndex =
                index;


            /*
             * Restart text animation
             * after card expansion starts.
             */

            setTimeout(
                () => {

                    resetCardAnimations(
                        nextCard
                    );

                },
                120
            );

        }


        /* =================================================
           CARD CLICK
        ================================================= */

        cards.forEach(
            (card, index) => {

                card.addEventListener(
                    "click",
                    () => {

                        activateCard(
                            index
                        );

                    }
                );


                /*
                 * Keyboard accessibility
                 */

                card.setAttribute(
                    "tabindex",
                    "0"
                );


                card.addEventListener(
                    "keydown",
                    event => {

                        if (
                            event.key ===
                            "Enter" ||
                            event.key ===
                            " "
                        ) {

                            event.preventDefault();


                            activateCard(
                                index
                            );

                        }

                    }
                );

            }
        );


        /* =================================================
           INITIAL CARD
        ================================================= */

        cards.forEach(
            card => {

                card.classList.remove(
                    "is-active"
                );

            }
        );


        cards[0].classList.add(
            "is-active"
        );


        activeIndex = 0;


        /*
         * Initial text reveal
         */

        setTimeout(
            () => {

                resetCardAnimations(
                    cards[0]
                );

            },
            180
        );


    }
);
/* =========================================================
   MPOWER TALK — PAST EVENTS
   SMOOTH COVER FLOW ENGINE
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const section =
            document.getElementById(
                "past-events"
            );

        const carousel =
            document.getElementById(
                "mp6PastCarousel"
            );


        if (
            !section ||
            !carousel
        ) {
            return;
        }


        const cards =
            Array.from(
                carousel.querySelectorAll(
                    ".mp6-past-card"
                )
            );


        const dots =
            Array.from(
                section.querySelectorAll(
                    ".mp6-past-dots button"
                )
            );


        if (!cards.length) {
            return;
        }


        let activeIndex = 0;

        let autoplay = null;

        let isAnimating = false;


        /* =====================================================
           POSITION
        ===================================================== */

        function getPosition(
            index
        ) {

            const total =
                cards.length;

            let position =
                index -
                activeIndex;


            if (
                position >
                total / 2
            ) {

                position -= total;

            }


            if (
                position <
                -total / 2
            ) {

                position += total;

            }


            return position;

        }


        /* =====================================================
           RENDER
        ===================================================== */

        function render() {

            cards.forEach(
                (
                    card,
                    index
                ) => {

                    const position =
                        getPosition(
                            index
                        );


                    card.classList.remove(
                        "is-active",
                        "is-prev",
                        "is-next",
                        "is-far-prev",
                        "is-far-next",
                        "is-hidden"
                    );


                    if (
                        position === 0
                    ) {

                        card.classList.add(
                            "is-active"
                        );

                    }

                    else if (
                        position === -1
                    ) {

                        card.classList.add(
                            "is-prev"
                        );

                    }

                    else if (
                        position === 1
                    ) {

                        card.classList.add(
                            "is-next"
                        );

                    }

                    else if (
                        position === -2
                    ) {

                        card.classList.add(
                            "is-far-prev"
                        );

                    }

                    else if (
                        position === 2
                    ) {

                        card.classList.add(
                            "is-far-next"
                        );

                    }

                    else {

                        card.classList.add(
                            "is-hidden"
                        );

                    }

                }
            );


            dots.forEach(
                (
                    dot,
                    index
                ) => {

                    dot.classList.toggle(
                        "is-active",
                        index === activeIndex
                    );

                }
            );

        }


        /* =====================================================
           MOVE
        ===================================================== */

        function goTo(
            newIndex
        ) {

            if (
                isAnimating
            ) {
                return;
            }


            const total =
                cards.length;


            activeIndex =
                (
                    newIndex +
                    total
                ) %
                total;


            isAnimating = true;


            render();


            /*
             * Keep lock only during
             * the visual transition.
             */

            setTimeout(
                () => {

                    isAnimating = false;

                },
                900
            );

        }


        /* =====================================================
           NEXT
        ===================================================== */

        function next() {

            goTo(
                activeIndex + 1
            );

        }


        /* =====================================================
           PREVIOUS
        ===================================================== */

        function previous() {

            goTo(
                activeIndex - 1
            );

        }


        /* =====================================================
           CARD CLICK
        ===================================================== */

        cards.forEach(
            (
                card,
                index
            ) => {

                card.addEventListener(
                    "click",
                    () => {

                        const position =
                            getPosition(
                                index
                            );


                        if (
                            position === 0
                        ) {

                            return;

                        }


                        goTo(
                            index
                        );


                        restartAutoplay();

                    }
                );

            }
        );


        /* =====================================================
           DOT CLICK
        ===================================================== */

        dots.forEach(
            (
                dot,
                index
            ) => {

                dot.addEventListener(
                    "click",
                    () => {

                        goTo(
                            index
                        );


                        restartAutoplay();

                    }
                );

            }
        );


        /* =====================================================
           TOUCH SWIPE
        ===================================================== */

        let touchStartX = 0;

        let touchStartY = 0;


        carousel.addEventListener(
            "touchstart",
            event => {

                const touch =
                    event.changedTouches[0];


                touchStartX =
                    touch.clientX;

                touchStartY =
                    touch.clientY;

            },
            {
                passive: true
            }
        );


        carousel.addEventListener(
            "touchend",
            event => {

                const touch =
                    event.changedTouches[0];


                const diffX =
                    touch.clientX -
                    touchStartX;


                const diffY =
                    touch.clientY -
                    touchStartY;


                /*
                 * Ignore vertical scrolling.
                 */

                if (
                    Math.abs(diffX) <
                    Math.abs(diffY)
                ) {

                    return;

                }


                if (
                    Math.abs(diffX) <
                    45
                ) {

                    return;

                }


                if (
                    diffX < 0
                ) {

                    next();

                }

                else {

                    previous();

                }


                restartAutoplay();

            },
            {
                passive: true
            }
        );


        /* =====================================================
           AUTOPLAY
        ===================================================== */

        function startAutoplay() {

            stopAutoplay();


            autoplay =
                setInterval(
                    () => {

                        next();

                    },
                    5000
                );

        }


        function stopAutoplay() {

            if (
                autoplay
            ) {

                clearInterval(
                    autoplay
                );

                autoplay = null;

            }

        }


        function restartAutoplay() {

            startAutoplay();

        }


        /* =====================================================
           PAUSE WHILE HOVERING
        ===================================================== */

        section.addEventListener(
            "mouseenter",
            stopAutoplay
        );


        section.addEventListener(
            "mouseleave",
            startAutoplay
        );


        /* =====================================================
           INITIAL
        ===================================================== */

        render();

        startAutoplay();

    }
);
/* =========================================================
   MPOWER TALK — PAST PODCAST INTERACTION
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        const section =
            document.getElementById(
                "past-podcast"
            );

        if (!section) {
            return;
        }


        const featuredImage =
            section.querySelector(
                "#mp8-featured-img"
            );

        const featuredImageBox =
            section.querySelector(
                ".mp8-featured-image"
            );

        const details =
            section.querySelector(
                ".mp8-featured-details"
            );

        const date =
            section.querySelector(
                "#mp8-featured-date"
            );

        const title =
            section.querySelector(
                "#mp8-featured-title"
            );

        const guest =
            section.querySelector(
                "#mp8-featured-guest"
            );

        const location =
            section.querySelector(
                "#mp8-featured-location"
            );

        const duration =
            section.querySelector(
                "#mp8-featured-duration"
            );

        const description =
            section.querySelector(
                "#mp8-featured-description"
            );

        const thumbnails =
            Array.from(
                section.querySelectorAll(
                    ".mp8-thumb"
                )
            );

        const thumbnailWrap =
            section.querySelector(
                ".mp8-thumbnails-wrap"
            );


        if (
            !featuredImage ||
            !featuredImageBox ||
            !details ||
            !thumbnails.length
        ) {
            return;
        }


        let activeIndex = 0;

        let changing = false;


        /* =================================================
           CHANGE FEATURED PODCAST
        ================================================= */

        function changePodcast(
            index
        ) {

            if (
                changing ||
                index === activeIndex
            ) {
                return;
            }


            const selected =
                thumbnails[index];

            if (!selected) {
                return;
            }


            changing = true;


            /* -----------------------------
               Start exit animation
            ----------------------------- */

            featuredImageBox
                .classList
                .add(
                    "is-changing"
                );

            details
                .classList
                .add(
                    "is-changing"
                );


            /* -----------------------------
               After small transition
            ----------------------------- */

            setTimeout(
                () => {

                    const newImage =
                        selected.dataset.image;

                    const newDate =
                        selected.dataset.date;

                    const newTitle =
                        selected.dataset.title;

                    const newGuest =
                        selected.dataset.guest;

                    const newLocation =
                        selected.dataset.location;

                    const newDuration =
                        selected.dataset.duration;

                    const newDescription =
                        selected.dataset.description;


                    /* image */

                    featuredImage.src =
                        newImage;


                    /* date */

                    date.textContent =
                        newDate;


                    /* title */

                    title.innerHTML =
                        newTitle
                            .split("|")
                            .join("<br>");


                    /* guest */

                    guest.textContent =
                        newGuest;


                    /* location */

                    location.textContent =
                        newLocation;


                    /* duration */

                    duration.textContent =
                        newDuration;


                    /* description */

                    description.textContent =
                        newDescription;


                    /* active thumb */

                    thumbnails.forEach(
                        thumb => {

                            thumb.classList
                                .remove(
                                    "is-active"
                                );

                        }
                    );


                    selected.classList
                        .add(
                            "is-active"
                        );


                    activeIndex =
                        index;


                    /* ---------------------
                       Enter animation
                    --------------------- */

                    requestAnimationFrame(
                        () => {

                            featuredImageBox
                                .classList
                                .remove(
                                    "is-changing"
                                );

                            details
                                .classList
                                .remove(
                                    "is-changing"
                                );

                        }
                    );


                    /* ---------------------
                       Mobile thumbnail
                       auto-scroll
                    --------------------- */

                    if (
                        window.innerWidth <=
                        700 &&
                        thumbnailWrap
                    ) {

                        const thumbLeft =
                            selected.offsetLeft;

                        const thumbWidth =
                            selected.offsetWidth;

                        const wrapWidth =
                            thumbnailWrap
                                .clientWidth;


                        thumbnailWrap.scrollTo(
                            {
                                left:
                                    thumbLeft -
                                    (
                                        wrapWidth -
                                        thumbWidth
                                    ) / 2,

                                behavior:
                                    "smooth"
                            }
                        );

                    }


                    setTimeout(
                        () => {

                            changing =
                                false;

                        },
                        450
                    );

                },
                300
            );

        }


        /* =================================================
           THUMBNAIL CLICK
        ================================================= */

        thumbnails.forEach(
            (
                thumb,
                index
            ) => {

                thumb.addEventListener(
                    "click",
                    () => {

                        changePodcast(
                            index
                        );

                    }
                );

            }
        );


        /* =================================================
           KEYBOARD SUPPORT
        ================================================= */

        section.addEventListener(
            "keydown",
            event => {

                if (
                    event.key ===
                    "ArrowRight"
                ) {

                    changePodcast(
                        (
                            activeIndex +
                            1
                        ) %
                        thumbnails.length
                    );

                }


                if (
                    event.key ===
                    "ArrowLeft"
                ) {

                    changePodcast(
                        (
                            activeIndex -
                            1 +
                            thumbnails.length
                        ) %
                        thumbnails.length
                    );

                }

            }
        );


        /* =================================================
           PRELOAD IMAGES
        ================================================= */

        thumbnails.forEach(
            thumb => {

                const image =
                    new Image();

                image.src =
                    thumb.dataset.image;

            }
        );

    }
);
/* =========================================================
   MP9 — TESTIMONIAL STACK
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const section = document.querySelector(".mp9-testimonials");

    if (!section) return;

    const pages = Array.from(
        section.querySelectorAll(".mp9-page")
    );

    const nextBtn = section.querySelector(".mp9-next");
    const prevBtn = section.querySelector(".mp9-prev");

    if (!pages.length) return;


    let currentIndex = 0;
    let isAnimating = false;


    function updateStack() {

        pages.forEach((page, index) => {

            page.classList.remove(
                "is-active",
                "is-behind-1",
                "is-behind-2",
                "is-behind-3"
            );

            let position =
                (index - currentIndex + pages.length)
                % pages.length;


            if (position === 0) {

                page.classList.add("is-active");

            } else if (position === 1) {

                page.classList.add("is-behind-1");

            } else if (position === 2) {

                page.classList.add("is-behind-2");

            } else if (position === 3) {

                page.classList.add("is-behind-3");

            }

        });

    }


    function goNext() {

        if (isAnimating) return;

        isAnimating = true;


        const activePage = pages[currentIndex];

        activePage.classList.add("is-exiting");


        setTimeout(() => {

            activePage.classList.remove("is-exiting");

            currentIndex =
                (currentIndex + 1) % pages.length;

            updateStack();

            setTimeout(() => {

                isAnimating = false;

            }, 80);

        }, 620);

    }


    function goPrevious() {

        if (isAnimating) return;

        isAnimating = true;


        currentIndex =
            (currentIndex - 1 + pages.length)
            % pages.length;


        const newActive = pages[currentIndex];

        newActive.style.transition = "none";

        newActive.style.transform =
            "translate(-120%, -25px) rotate(-9deg)";

        newActive.style.opacity = "0";

        newActive.classList.remove(
            "is-active",
            "is-behind-1",
            "is-behind-2",
            "is-behind-3"
        );

        newActive.classList.add("is-active");


        requestAnimationFrame(() => {

            requestAnimationFrame(() => {

                newActive.style.transition = "";

                newActive.style.transform = "";

                newActive.style.opacity = "";

                updateStack();

            });

        });


        setTimeout(() => {

            isAnimating = false;

        }, 650);

    }


    nextBtn?.addEventListener(
        "click",
        goNext
    );


    prevBtn?.addEventListener(
        "click",
        goPrevious
    );


    /* keyboard */

    document.addEventListener("keydown", (event) => {

        if (!section.matches(":hover")) return;

        if (event.key === "ArrowRight") {

            goNext();

        }

        if (event.key === "ArrowLeft") {

            goPrevious();

        }

    });


    /* initial stack */

    updateStack();

});
/* =========================================================
   MP11 — FINAL CTA REVEAL
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

  const mp11 = document.querySelector(".mp11-cta");

  if (!mp11) return;

  const revealMP11 = () => {
    const rect = mp11.getBoundingClientRect();

    if (
      rect.top < window.innerHeight * 0.85 &&
      rect.bottom > 0
    ) {
      mp11.classList.add("is-visible");
    }
  };

  window.addEventListener("scroll", revealMP11, {
    passive: true
  });

  revealMP11();


  /* Button arrow micro interaction */

  const buttons = mp11.querySelectorAll(".mp11-btn");

  buttons.forEach((button) => {

    button.addEventListener("mouseenter", () => {
      button.classList.add("is-hovered");
    });

    button.addEventListener("mouseleave", () => {
      button.classList.remove("is-hovered");
    });

  });

});
/* =====================================================
   MP12 — FOOTER REVEAL
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

  const footer = document.querySelector(".mp12-footer");

  if (!footer) return;

  const revealFooter = () => {

    const rect = footer.getBoundingClientRect();

    if (rect.top < window.innerHeight * 0.9) {

      footer.classList.add("is-visible");

      window.removeEventListener(
        "scroll",
        revealFooter
      );

    }

  };

  window.addEventListener(
    "scroll",
    revealFooter,
    { passive: true }
  );

  revealFooter();

});
/* =========================================================
   MPOWERTALK — INTERACTIVE VOICE HERO
   Click a card -> update left text + speaker background
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const hero = document.getElementById("voiceHero");

    if (!hero) return;

    const background = document.getElementById("mpVoiceHeroBackground");
    const eyebrow = document.getElementById("mpVoiceHeroEyebrow");
    const title = document.getElementById("mpVoiceHeroTitle");
    const description = document.getElementById("mpVoiceHeroDescription");

    const cards = [
        ...hero.querySelectorAll(".mp-voice-speaker-card")
    ];

    /*
       Card 1 -> speaker-01-bg.png
       Card 2 -> speaker-02-bg.png
       Card 3 -> speaker-03-bg.png
       Card 4 -> speaker-04-bg.png
    */

    const stories = [
        {
            eyebrow: "COURAGE TO SPEAK. FREEDOM TO GROW.",
            title: 'Find Your <em>Voice.</em> Share Your <strong>Ideas.</strong>',
            description:
                "One honest idea can open a new path, build confidence and bring people together.",
            background: "assets/images/mpowertalk-speaker-01-bg.png"
        },
        {
            eyebrow: "IDEAS THAT MOVE US FORWARD.",
            title: 'Make Every <em>Word</em> Count.',
            description:
                "Powerful conversations help people see possibilities and turn thoughts into action.",
            background: "assets/images/mpowertalk-speaker-02-bg.png"
        },
        {
            eyebrow: "WISDOM GROWS WHEN IT IS SHARED.",
            title: 'A New View.<br><span class="mp-voice-title-line">A <em>New</em></span><strong>Possibility.</strong>',
            description:
                "Listen with curiosity. Share what you know. Make room for another perspective.",
            background: "assets/images/mpowertalk-speaker-03-bg.png"
        },
        {
            eyebrow: "EVERY VOICE CAN INSPIRE CHANGE.",
            title: 'Your Story Can <em>Inspire</em> Someone.',
            description:
                "When people speak from experience, their stories can spark connection and meaningful change.",
            background: "assets/images/mpowertalk-speaker-04-bg.png"
        }
    ];

    
let speakerTransitionRun = 0;

function activateSpeaker(index) {
    const story = stories[index];

    if (!story || !cards[index]) return;

    const run = ++speakerTransitionRun;

    // Keep the selected card active
    cards.forEach((card, cardIndex) => {
        const active = cardIndex === index;

        card.classList.toggle("is-active", active);
        card.setAttribute("aria-pressed", String(active));
    });

    // Start the text transition
    hero.classList.remove("is-changing");
    void hero.offsetWidth;
    hero.classList.add("is-changing");

    // Update the left-side content
    if (eyebrow) {
        eyebrow.textContent = story.eyebrow;
    }

    if (title) {
        title.innerHTML = story.title;
    }

    if (description) {
        description.textContent = story.description;
    }

    // Load the new speaker background first
    const nextImage = new Image();

    nextImage.onload = () => {
        // Ignore an older image if another card was clicked
        if (run !== speakerTransitionRun) return;

        if (!background) return;

        const layer = background.closest(
            ".mp-voice-hero-background"
        );

        if (!layer) {
            background.src = story.background;
            return;
        }

        // Remove any previous transition overlay
        layer.querySelectorAll(
            ".mp-voice-glitch-layer"
        ).forEach(item => item.remove());

        // Create the horizontal strip reveal
        const reveal = document.createElement("div");
        reveal.className = "mp-voice-glitch-layer";
        reveal.setAttribute("aria-hidden", "true");

        const stripCount = 12;

        for (let i = 0; i < stripCount; i++) {
            const strip = document.createElement("span");

            const top = (i / stripCount) * 100;
            const bottom = 100 - ((i + 1) / stripCount) * 100;

            strip.className = "mp-voice-glitch-strip";

            strip.style.backgroundImage =
                `url("${story.background}")`;

            strip.style.clipPath =
                `inset(${top}% 0 ${bottom}% 0)`;

            // Alternate strip movement directions
            strip.style.setProperty(
                "--strip-from",
                i % 2 === 0 ? "100%" : "-100%"
            );

            strip.style.setProperty(
                "--strip-delay",
                `${i * 35}ms`
            );

            reveal.appendChild(strip);
        }

        layer.appendChild(reveal);

        // Wait for the strips to reveal the new image
        window.setTimeout(() => {
            if (run !== speakerTransitionRun) return;

            background.src = story.background;
            reveal.remove();

            layer.classList.remove("is-changing");
        }, 1200);
    };

    nextImage.onerror = () => {
        if (run !== speakerTransitionRun) return;

        console.error(
            "Speaker background not found:",
            story.background
        );
    };

    nextImage.src = story.background;
}


    /* Mouse click and keyboard support */
    cards.forEach((card, index) => {

        card.addEventListener("click", () => {
            activateSpeaker(index);
        });

        card.addEventListener("keydown", event => {

            if (event.key === "Enter" || event.key === " ") {

                event.preventDefault();

                activateSpeaker(index);

            }

        });

    });

});