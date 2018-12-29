let userscore=0;
let compscore=0;
const userscore_span=document.getElementById('user-score');
const compscore_span=document.getElementById('comp-score');
const scoreboard_div=document.querySelector(".score-board");
const result_p=document.querySelector(".result > p");
const rock_div=document.getElementById('r');
const paper_div=document.getElementById('p');
const scissors_div=document.getElementById('s');

function getcompchoice()
{
	const choices=['r','p','s'];
	const randomnum=Math.floor(Math.random()*3);
	return choices[randomnum];
}
function to_words(letter) {
	var words={'r':'rock','p':'paper','s':'scissors'}
	var wd=words[letter];
	return wd;
}

function win(a,b)
{
userscore++;
userscore_span.innerHTML=userscore;
compscore_span.innerHTML=compscore;
const x="(user)".fontsize(3).sub();
const y="(comp)".fontsize(3).sub();
const userchoice_div=document.getElementById(a);
result_p.innerHTML=`${to_words(a)}${x} beats ${to_words(b)}${y} .You won!🤘🤘`;
userchoice_div.classList.add('green-glow');
setTimeout(function(){document.getElementById(a).classList.remove('green-glow')},500
);//we can write this settimeout() in different way which is below in lose()&draw()

}

function lose(a,b)
{
compscore++;
userscore_span.innerHTML=userscore;
compscore_span.innerHTML=compscore;
const x="(user)".fontsize(3).sub();
const y="(comp)".fontsize(3).sub();
const userchoice_div=document.getElementById(a);
result_p.innerHTML=`${to_words(a)}${x} loses to ${to_words(b)}${y} .You lost!👎`;
userchoice_div.classList.add('red-glow');
setTimeout(() => document.getElementById(a).classList.remove('red-glow'),500);

}

function draw(a,b) {
const x="(user)".fontsize(3).sub();
const y="(comp)".fontsize(3).sub();
const userchoice_div=document.getElementById(a);
result_p.innerHTML=`${to_words(a)}${x} equals to ${to_words(b)}${y} .It's a draw`;
userchoice_div.getElementById(a).classList.add('grey-glow');
setTimeout(() => document.getElementById(a).classList.remove('grey-glow'),500);
}


function game(userchoice)
{
const compchoice=getcompchoice();
switch(userchoice+compchoice)
{
	case "rs":
	case "pr":
	case "sp":
	win(userchoice,compchoice);
	break;

	case "rp":
	case "ps":
	case "sr":
	lose(userchoice,compchoice);
	break;

	case "rr":
	case "pp":
	case "ss":
	draw(userchoice,compchoice);
	break;
}

}




function main() {
rock_div.addEventListener('click',function() {
	game("r");//we can write addEventListener() in different way which is below in scissors.addEventListener()
})
paper_div.addEventListener('click',function() {
	game("p");	
})
scissors_div.addEventListener('click',() => game("s"));	
}
main();