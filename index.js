function page1() {

  let tl = gsap.timeline();
  tl.from(".front", {
    y: 1000,
    duration: 1,

  })
  tl.from("#coffee", {
    y: 800,
    duration: 1,
    scale: 2,


  }, "sync")


  tl.from(".front h1", {
    y: 1000,
    duration: 1,

  })

  tl.from("#coff1", {
    y: 800,
    duration: 1,
    scale: 2

  }, "sync")

  tl.from("#coff2", {
    y: 800,
    duration: 1,
    scale: 2

  })

  tl.from("#coff3", {
    y: 800,
    duration: 1,
    scale: 2

  })

  tl.from("#coff4", {
    y: 800,
    duration: 1,
    scale: 2

  })

  tl.from("#coff5", {
    y: 800,
    duration: 1,
    scale: 2

  })
}

page1();

function page2() {

  let tl2 = gsap.timeline({
    scrollTrigger: {
      trigger: "#about",
      scroller: "body",
      scrub: 2,
      start: "0% 90%",
      end: "100% 100%"
    }
  });

  tl2.to("#coffee", {
    y: 90,
    top: 753,
    left: 105,
    scale: 0.8,
    zIndex: 2,
    duration: 1

  }, "hi")     

  tl2.to("#coff1", {
    left: 200,
    top: 840,
    scale: 0.8,
    rotate: 142,
    zIndex: 1,
    duraiton: 1

  }, "hi")
}
page2();


function page3() {

  let tl3 = gsap.timeline({
    scrollTrigger: {
      trigger: "#menu",
      scroller: "body",
      scrub: 2,
      start: "0% 90%",
      end: "100% 100%"
    }
  });

  tl3.to("#coffee", {

    top: 1500,
    left: 647,
    scale: 0.9,
    zIndex: 2,
    duration: 1

  }, "hi")

  tl3.to("#coff1", {
    left: 800,
    top: 1590,
    scale: 0.8,
    rotate: 140,
    zIndex: 1,
    duration: 1

  }, "hi")

  tl3.from("#can1", {
    x: -300,
    duration: 1
  }, "hi")

  tl3.from("#can2", {
    x: 300,
    duration: 1
  }, "hi")


  tl3.from("#bean1", {
    x: -300,
    duration: 1,
    rotate: 200
  }, "hi")


  tl3.from("#bean2", {
    x: 300,
    duration: 1,
    rotate: 10
  }, "hi")

}
page3();

function page4() {

  let tl4 = gsap.timeline({
    scrollTrigger: {
      trigger: "#contact",
      scroller: "body",
      scrub: 2,
      start: "0% 90%",
      end: "90% 90%"
    }
  });

  tl4.to("#coffee", {
    top: 2380,
    left: 950,
    duration: 1,
  }, "hi")

  tl4.to("#coff1", {
    top: 2380,
    left: 500,
    rotate: 130,
    duration: 1,
  }, "hi")

  tl4.to("#can1", {
    top: 800,
    left: 501,
    duration: 1,
    rotate: -20
  }, "hi")

  tl4.to("#can2", {
    top: 800,
    left: -40,
    duration: 1,
    rotate: 20
  }, "hi")

}
page4();