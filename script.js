function skills(){
const overlay =document.querySelector(".overlay1");
const frontend1=document.querySelector(".frontend1");
overlay.addEventListener("mouseenter", ()=>{ 
  frontend1.style.transform="scaleY(100%)"
})
overlay.addEventListener("mouseleave", ()=>{ 
    frontend1.style.transform="scaleY(0%)"
  })
  const overlay1 =document.querySelector(".overlay2");
const backend1=document.querySelector(".backend1");
overlay1.addEventListener("mouseenter", ()=>{ 
  backend1.style.transform="scaleY(100%)"
})
overlay1.addEventListener("mouseleave", ()=>{ 
    backend1.style.transform="scaleY(0%)"
  })
  const overlay3 =document.querySelector(".overlay3");
const database1=document.querySelector(".database1");
overlay3.addEventListener("mouseenter", ()=>{ 
  database1.style.transform="scaleY(100%)"
})
overlay3.addEventListener("mouseleave", ()=>{ 
    database1.style.transform="scaleY(0%)"
  })
  const overlay4 =document.querySelector(".overlay4");
const dsa1=document.querySelector(".dsa1");
overlay4.addEventListener("mouseenter", ()=>{ 
  dsa1.style.transform="scaleY(100%)"
})
overlay4.addEventListener("mouseleave", ()=>{ 
    dsa1.style.transform="scaleY(0%)"
  })
}
function projects(){
  const overlaypor1=document.querySelector(".overlaypro1");
  const pro1=document.querySelector(".pro1");
 
    var rotate = 0;
    var diffrot = 0;

  pro1.addEventListener("mouseleave", function (dets) {
    gsap.to(overlaypor1, {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });

  pro1.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - pro1.getBoundingClientRect().top;
    diffrot = dets.clientX - rotate;
    rotate = dets.clientX;
    gsap.to(overlaypor1, {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot * 0.5),
    });
  });

  const pro12=document.querySelector(".pro2");
  const overlaypor2=document.querySelector(".overlaypro2");

  var rotate1 = 0;
  var diffrot1 = 0;
  
  pro12.addEventListener("mouseleave", function (dets) {
    gsap.to(overlaypor2, {
      opacity: 0,
      ease: Power3,
      duration: 0.5,
    });
  });
  console.log(pro12.getBoundingClientRect());

  pro12.addEventListener("mousemove", function (dets) {
    var diff = dets.clientY - pro12.getBoundingClientRect().top + pro1.getBoundingClientRect().top
    diffrot1 = dets.clientX - rotate1;
    rotate1 = dets.clientX;
 
    gsap.to(overlaypor2, {
      opacity: 1,
      ease: Power3,
      top: diff,
      left: dets.clientX,
      rotate: gsap.utils.clamp(-20, 20, diffrot1 * 0.5),
    });
  });
}
function achievement(){
    const codechef1=document.querySelector(".Codechef1"); 
    const overlaycc1=document.querySelector(".overlaycc1");
    overlaycc1.addEventListener("mouseenter", ()=>{ 
        codechef1.style.transform="scaleY(100%)"
    })
    overlaycc1.addEventListener("mouseleave", ()=>{ 
        codechef1.style.transform="scaleY(0%)"
    })
    const Event1=document.querySelector(".Event1"); 
    const overlaye1=document.querySelector(".overlaye1");
    overlaye1.addEventListener("mouseenter", ()=>{ 
        Event1.style.transform="scaleY(100%)"
    })
    overlaye1.addEventListener("mouseleave", ()=>{ 
        Event1.style.transform="scaleY(0%)"
    })
    
}
function aboutme(){
  const tl=gsap.timeline({scrollTrigger:{
    trigger:".aboutme",
    start: "top top",
    end: "bottom top", 
    scrub:3,
    pin:true,
  }})
  const text=document.querySelector(".aboutmecontent h1").innerHTML;
  const alltext=text.split("");
  var clutter="";
  alltext.forEach((char,i)=>{
   clutter+=`<span>${char}</span>`
  })
  document.querySelector(".aboutmecontent h1").innerHTML=clutter;
  const allspan=document.querySelectorAll(".aboutme h1 span");
  allspan.forEach((char)=>{
    tl.to(char,{
      color:"#d8d5d5"
    })
  })
  console.log(allspan,"#c8c8c8","")
 
}
aboutme()
skills()
projects()
achievement()

