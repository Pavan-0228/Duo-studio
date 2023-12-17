function loco(){
    gsap.registerPlugin(ScrollTrigger);

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});




ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
loco();



var cursor = document.querySelector("#cursor")
var main = document.querySelector("#main")
document.addEventListener("mousemove",function (dets){
  cursor.style.left = dets.x+ 3 +"px";
  cursor.style.top = dets.y+ 3 +"px";
})




var t = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1 h1",
        scroller:"#main",
        start:"top 30%",
        end:"top 0",
        scrub:2
    }
})

t.to("#page1 h1",{
    x: -100,
},"anime")

t.to("#page1 h2",{
    x: 100,
},"anime")

t.to("#page1>video",{
    width:"95%"
},"anime")


var t1 = gsap.timeline({
  scrollTrigger:{
     trigger:"#page1 h1",
     scroller:"#main",
      start:"top -115%",
      end:"top -120%",
      scrub:3
  }
})
t1.to("#main",{
  backgroundColor:"#fff"
})


var t2 = gsap.timeline({
  scrollTrigger:{
     trigger:"#page1 h1",
     scroller:"#main",
      start:"top -250%",
      end:"top -300%",
      scrub:2
  }
})
t2.to("#main",{
  backgroundColor:"#000"
})

var boxes = document.querySelectorAll(".box");
boxes.forEach(function(val){
  var att = val.getAttribute("data-image");
  val.addEventListener("mouseenter",function(){
    cursor.style.height = "370px";
    cursor.style.width = "470px";
    cursor.style.borderRadius = "10px";
    cursor.style.backgroundImage = `url(${att})`
  })
  val.addEventListener("mouseleave",function(){
    cursor.style.height = "20px";
    cursor.style.width = "20px";
    cursor.style.borderRadius = "50%";
    cursor.style.backgroundImage = `none`
  })
})




var h4 = document.querySelectorAll("#nav h4")
var purple = document.querySelector("#purple")
var loops = document.querySelectorAll("#loop h1");
h4.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        purple.style.display = "block"   
        purple.style.opacity = "1"
        var val = elem.innerHTML;
        for(let i=0 ; i<9; i++){
        loops[i].textContent = `${val}.`
        }
    })
    elem.addEventListener("mouseleave",function(){
        purple.style.display = "none"   
        purple.style.opacity = "0"
    })
})