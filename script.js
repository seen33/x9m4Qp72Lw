const space =
document.querySelector(".space");


const planet =
document.querySelector(".planet");


const final =
document.querySelector(".final");



planet.onclick=()=>{


space.classList.add("active");



setTimeout(()=>{


final.classList.add("show");


},5000);



};





// ساخت ستاره های متحرک

for(let i=0;i<150;i++){


let star=document.createElement("div");


star.style.position="absolute";

star.style.width="2px";

star.style.height="2px";

star.style.background="white";

star.style.borderRadius="50%";


star.style.left=
Math.random()*100+"vw";


star.style.top=
Math.random()*100+"vh";


star.style.opacity=
Math.random();



document
.querySelector(".stars")
.appendChild(star);


}
