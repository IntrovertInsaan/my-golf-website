gsap.from("#nav img", {
    duration: 2,
    color: "red",
    backgroundColor: "black",
    borderRadius: "50%",
    repeat: -1,
    yoyo: true,
    scale: 0.5,
    rotation: 720,
    delay: 1,
    scrollTirgger: {
        scale: 2
    }
})