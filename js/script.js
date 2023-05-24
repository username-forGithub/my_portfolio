let setClip = setTimeout(()=>{
  document.querySelector("#imgid").classList.add("active")
}, 3500)

const getAboutTitle = document.querySelector(".aboutMe h2")
const observer = new IntersectionObserver(entries =>{
  if (entries[0].isIntersecting) {
    entries[0].target.classList.add("show")
  } else {
    // entries[0].target.classList.remove("show")
  }
}, {threshold: 0, rootMargin: "-100px 0px -200px 0px"})
observer.observe(getAboutTitle)

const getProjectTitle = document.querySelector(".projects h2")
const observerProject = new IntersectionObserver(entries =>{
  if (entries[0].isIntersecting) {
    entries[0].target.classList.add("show")
  } else {
    // entries[0].target.classList.remove("show")
  }
}, {threshold: 0, rootMargin: "-100px 0px -200px 0px"})
observerProject.observe(getProjectTitle)

const getContact = document.querySelector(".contact h2")
const observerContact = new IntersectionObserver(entries =>{
  if (entries[0].isIntersecting) {
    entries[0].target.classList.add("show")
  } else {
    // entries[0].target.classList.remove("show")
  }
}, {threshold: 0, rootMargin: "-100px 0px -200px 0px"})
observerContact.observe(getContact)

let path = document.querySelector("path")
let pathLength = Math.ceil(path.getTotalLength()) + 300
path.style.strokeDasharray = pathLength + " " + pathLength
path.style.strokeDasharrayset = pathLength
path.style.strokeDashoffset = pathLength

const getpathWrapper = document.querySelector(".pathwrapper")
const observerPath = new IntersectionObserver(entries =>{
  if (entries[0].isIntersecting) {   
    elementHight = Math.ceil(entries[0].target.getBoundingClientRect().height)
    window.addEventListener("scroll", ()=> {
      let y = window.innerHeight + window.pageYOffset - entries[0].target.offsetTop -100
      console.log(y, "<-YY; ", elementHight," <-height");
      if( y > -50 && y < (elementHight + 50)){
        console.log("insideIF");
        let scrollPercentage = y / (elementHight)
        let drawLength = pathLength * scrollPercentage
        path.style.strokeDashoffset = drawLength - pathLength
        console.log(drawLength, " <-drawLength; ", pathLength, " <-pathLength;");
      }
      console.log(entries[0].target.getBoundingClientRect(), " <-->  getBoundingClientRect()");
      console.log((window.innerHeight + window.pageYOffset - entries[0].target.offsetTop), " <-->  offsetTop");
    },false)  
  }
}, {threshold: 0, rootMargin: "-100px 0px 0px 0px"})
observerPath.observe(getpathWrapper)

const getBoy = document.querySelector(".left3")
const observerBoy = new IntersectionObserver(entries =>{
  if (entries[0].isIntersecting) {
    entries[0].target.classList.add("show")
    getBoy.addEventListener("click", (e)=>{
      e.currentTarget.classList.add("active")  
      let aw = e.currentTarget.querySelector(".imgwrapper") 
    })
  } else {
    // entries[0].target.classList.remove("show")
    // getBoy.classList.remove("active")
  }
}, {threshold: 0, rootMargin: "-100px 0px -300px 0px"})
observerBoy.observe(getBoy)

// SKEW
var skewSetter = gsap.quickSetter(".item", "skewY", "deg")
var proxy = {skew:0}

ScrollTrigger.create({
  onUpdate: self => {
    var skew = self.getVelocity() / -300;
    if(Math.abs(skew) > Math.abs(proxy.skew)){
      proxy.skew = skew;
      gsap.to(proxy,{skew:0, duration:1, ease:"power3", overwrite:true, onUpdate: ()=>skewSetter(proxy.skew)})
    }
  }
});
gsap.set(".item", {transformOrigin:"right center", force3D:true});

const getEnvelope = document.querySelector("#envelope")
const envelopeObserver = new IntersectionObserver(entries =>{
  if (entries[0].isIntersecting) {
    entries[0].target.classList.remove("close")
    entries[0].target.classList.add("open")
    console.log(entries[0].target, "entries[0].target");
  } else {
    entries[0].target.classList.add("close")
    entries[0].target.classList.remove("open")
  }
}, {threshold: 0, rootMargin: "-100px 0px -100px 0px"})
envelopeObserver.observe(getEnvelope)



