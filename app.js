function loadingAnimation(){
    let tl = gsap.timeline();

tl.from(".line h1",{
    y: 150,
    stagger: 0.2,
    duration: 0.6,
    delay: 0.5,
});

tl.from("#line1-part1",{
    opacity: 0,
    onStart:function(){
        let h5Timer = document.querySelector("#line1-part1 h5");
    let grow = 0;
    let interval;

    interval = setInterval(function(){
        grow++;
        if(grow === 100){
            clearInterval(interval);
        }
        h5Timer.textContent = grow;
    },25);
    }
})

tl.to(".line h2",{
    opacity: 1,
    animationName: "anime",
});

tl.to("#loader",{
    opacity: 0,
    duration: 0.4,
    delay: 2,
});

tl.from("#page-1,#page-1-heading,#tagline,#details",{
    y: 1600,
    opacity: 0,
    delay: 0.2,
    duration: 0.8,
    stagger: 0.4,
});

// tl.from("#details",{
//     y: 1600,
//     opacity: 0,
//     duration: 0.1,
// });

tl.to("#loader",{
    display:"none",
});

tl.from("#nav",{
    opacity: 0,
    y: -100,
})

// tl.from("#page-1-heading",{
//     y:1600,
//     stagger: 0.2,
//     duration: 0.2,
// });

// tl.from(".tag-line",{
//     y:1600,
//     stagger: 0.2,
//     delay: 0.4,
//     duration: 0.4,
// });

tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1",{
    y: 200,
    duration: 1,
    stagger: 0.2,
});
}
 
function sheryAnimation() {
    Shery.imageEffect(".image-div", {
      style: 5,
      gooey: true,
      debug:true,
      config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7241195453907675},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.23,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.5,"range":[0,10]},"metaball":{"value":0.33,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
    });
  }

function cursor(){
    document.addEventListener("mousemove",function(dets){
        gsap.to("#cursor",{
            left: dets.x,
            top: dets.y,
        });
    });
    
    Shery.makeMagnet("#nav-part2 h3",{});
}

sheryAnimation();
loadingAnimation();
cursor();