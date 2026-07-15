const space =
document.querySelector(".space");


const planet =
document.querySelector(".planet");


const mission =
document.getElementById("mission");


const final =
document.querySelector(".final");





// ساخت ستاره ها


for(let i=0;i<200;i++){


let s=document.createElement("div");


s.className="star";


let size=
Math.random()*3+1;


s.style.width=size+"px";

s.style.height=size+"px";


s.style.left=
Math.random()*100+"vw";


s.style.top=
Math.random()*100+"vh";


s.style.animationDelay=
Math.random()*3+"s";



document
.querySelector(".stars")
.appendChild(s);


}





// صدا سازی


const audio =
new AudioContext();



function sound(freq,duration,type="sine"){


let osc=
audio.createOscillator();


let gain=
audio.createGain();


osc.type=type;

osc.frequency.value=freq;


gain.gain.value=.15;


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





let starsFound=0;





planet.onclick=()=>{


audio.resume();


sound(120,2,"sawtooth");


space.classList.add("travel");



setTimeout(()=>{


space.classList.add("play");


createHiddenStars();


},4000);



};







function createHiddenStars(){


for(let i=0;i<3;i++){


let s=document.createElement("div");


s.className="star";


s.style.width="15px";

s.style.height="15px";


s.style.left=
20+Math.random()*60+"%";


s.style.top=
30+Math.random()*40+"%";


s.style.boxShadow=
"0 0 30px cyan";


s.onclick=()=>{


sound(
600+i*100,
.5,
"triangle"
);



s.remove();


starsFound++;



if(starsFound==3){

finish();

}


};



space.appendChild(s);


}

}





function finish(){


sound(900,3,"sine");


mission.style.opacity=0;



setTimeout(()=>{


final.classList.add("show");


},2000);



}





// شهاب سنگ


setInterval(()=>{


let sh=document.createElement("div");


sh.className="shooting";


sh.style.top=
Math.random()*70+"%";


sh.style.left=
Math.random()*50+"%";


document
.querySelector(".shooting-stars")
.appendChild(sh);



setTimeout(()=>{

sh.remove();

},1000);


},3000);
