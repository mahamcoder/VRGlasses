gsap.from(".nav",{
    y:-30,
    opacity:0,
    duration:0.7,
    delay:0.2,
    stagger:0.2
})
gsap.from(".t1",{
    x:-50,
    opacity:0,
    duration:1,
    delay:0.6,
    stagger:0.2
})
gsap.from(".b1",{
    z:-50,
    opacity:0,
    duration:1,
    delay:1.5,
    stagger:0.2
})
gsap.from(".img1",{
    x:-80,
    opacity:0,
    duration:0.1,
    delay:0.3,
    scrollTrigger:{
        trigger:".img1",
        scroller:"body",
        start:"top 90%",
        end:"top 0%",
       
        scrub:0.2
    }
},"anim")
gsap.from(".t2",{
    x:80,
    opacity:0,
    duration:0.1,
    delay:0.3,
    scrollTrigger:{
        trigger:".t2",
        scroller:"body",
        start:"top 90%",
        end:"top 0%",
        
        scrub:0.2
    }
},"anim")
gsap.from(".t3",{
    x:-80,
    opacity:0,
    duration:0.1,
    delay:0.3,
    scrollTrigger:{
        trigger:".t3",
        scroller:"body",
        start:"top 90%",
        end:"top 0%",
       
        scrub:0.2
    }
},"ani")
gsap.from(".im2",{
    x:80,
    opacity:0,
    duration:0.1,
    delay:0.3,
    scrollTrigger:{
        trigger:".im2",
        scroller:"body",
        start:"top 90%",
        end:"top 0%",
       
        scrub:0.2
    }
},"ani")
