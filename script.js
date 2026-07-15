const universe =
document.querySelector(".universe");


const planet =
document.querySelector(".planet");


const letters =
document.getElementById("letters");


const final =
document.querySelector(".final");





// ستاره ها


for(let i=0;i<250;i++){


let s=document.createElement("div");

s.className="star";


let size=Math.random()*3+1;


s.style.width=size+"px";

s.style.height=size+"px";


s.style.left=Math.random()*100+"%";

s.style.top=Math.random()*100+"%";


document.querySelector(".stars")
.appendChild(s);


}






// موسیقی فضایی با کد


const ctx=
new AudioContext();



function tone(freq,time){


let o=ctx.createOscillator();

let g=ctx.createGain();


o.type="sine";

o.frequency.value=freq;


g.gain.value=.05;


o.connect(g);

g.connect(ctx.destination);


o.start();


o.stop(
ctx.currentTime+time
);

}



function spaceMusic(){


let notes=[220,277,330,440];


notes.forEach((n,i)=>{


setTimeout(()=>{

tone(n,3);

},i*700);


});


}







planet.onclick=()=>{


ctx.resume();


spaceMusic();


universe.classList.add("active");



setTimeout(()=>{


universe.classList.add("zoom");


showName();



},5000);



};







function showName(){


let word="ARSHIA";


letters.innerHTML="";


word.split("")
.forEach((c,i)=>{


setTimeout(()=>{


let span=document.createElement("span");

span.innerHTML=c+" ";

letters.appendChild(span);


tone(400+i*80,.5);



},i*500);



});



setTimeout(()=>{


letters.style.opacity=0;


final.classList.add("show");



},5000);



}
