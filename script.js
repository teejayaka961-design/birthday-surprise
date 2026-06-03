const birthdayMessage =
`My Dearest Love ❤️,

Today is a very special day because it celebrates the most beautiful person in my life.

Thank you for your love, kindness, laughter and all the wonderful memories we share.

May your birthday be filled with happiness, blessings, success and endless smiles.

I promise to continue loving you, supporting you and creating beautiful memories together.

Happy Birthday My Queen 👑❤️

Forever Yours ❤️`;

function showWish(){

let i = 0;
const speed = 50;
const text = birthdayMessage;

document.getElementById("message").innerHTML = "";

function typing(){

if(i < text.length){
document.getElementById("message").innerHTML += text.charAt(i);
i++;
setTimeout(typing,speed);
}

}

typing();

createHearts();
}

function createHearts(){

setInterval(()=>{

const heart = document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="absolute";
heart.style.left=Math.random()*100+"vw";
heart.style.top="100vh";
heart.style.fontSize=(Math.random()*20+20)+"px";

document.body.appendChild(heart);

heart.animate([
{transform:"translateY(0)"},
{transform:"translateY(-110vh)"}
],
{
duration:5000
});

setTimeout(()=>{
heart.remove();
},5000);

},300);

}