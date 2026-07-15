const space =
document.querySelector(".space");


const planet =
document.querySelector(".planet");


const mission =
document.getElementById("mission");


const final =
document.querySelector(".final");





// ساخت ستاره های پس زمینه

for(let i=0;i<250;i++){


let star=document.createElement("div");


star.className="star";


let size=Math.random()*3+1;


star.style.width=size+"px";

star.style.height=size+"px";


star.style.left=Math.random()*100+"vw";

star.style.top=Math.random()*100+"vh";


star.style.animationDelay=
Math.random()*3+"s";



document
.querySelector(".stars")
.appendChild(star);


}





// سیستم صدا سینمایی


const audio =
new AudioContext();



function playTone(
freq,
duration,
volume=.05
){


let osc=
audio.createOscillator();


let gain=
audio.createGain();



osc.type="sine";

osc.frequency.value=freq;


gain.gain.value=volume;



osc.connect(gain);

gain.connect(audio.destination);



osc.start();



gain.gain.exponentialRampToValueAtTime(

0.001,

audio.currentTime+duration

);



osc.stop(
audio.currentTime+duration
);


}





function spaceSound(){


let notes=[
220,
277,
330,
440
];


notes.forEach((n,i)=>{


setTimeout(()=>{

playTone(n,3,.03);


},i*700);


});


}







let found=0;



planet.onclick=()=>{


audio.resume();


playTone(120,2,.2);


space.classList.add("travel");


spaceSound();



setTimeout(()=>{


createStars();


},4000);



};







function createStars(){


for(let i=0;i<3;i++){


let s=document.createElement("div");


s.className="hidden-star";



s.style.left=
20+Math.random()*60+"%";


s.style.top=
30+Math.random()*40+"%";



s.onclick=()=>{


playTone(
600+i*100,
.5,
.1
);



s.remove();



found++;



if(found===3){

finish();

}


};



space.appendChild(s);


}


}





function finish(){


mission.style.opacity=0;



let melody=[

440,523,659,523,440

];



melody.forEach((n,i)=>{


setTimeout(()=>{

playTone(n,1,.08);


},i*500);


});



setTimeout(()=>{


final.classList.add("show");


},3000);



}
