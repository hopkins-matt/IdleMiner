var storyStage=0;
var fade=0;
var fadeOut=0;
var stone= 0;
var copper=0;
var iron=0;
var coal=0;
var copperPlate=0;
var ironPlate=0;
var hardStone=0;
var cokeCoal=0;
var event1Completed=0;

function smelt(mode){
	if (mode==1){
		if(copper>=1&&coal>=1){
			copperPlate++;
			copper--;
			coal--;
		}
	}
	else if(mode==2){
		if (iron>=1&&coal>=1){
			ironPlate++;
			iron--;
			coal--;
		}
	}
	else if(mode==3){
		if (stone>=1&&coal>=1){
			hardStone++;
			coal--;
			stone--;
		}
	}
	else if(mode==4){
		if (coal>=2){
		cokeCoal++;
		coal=coal-2;
		}
	}
	else{
	document.getElementById("research").innerHTML="<p><b>ERROR!</b></p>"
	}
}
function printLetterByLetter(destination, message, speed){
    var i = 0;
    var interval = setInterval(function(){
        document.getElementById(destination).innerHTML += message.charAt(i);
        i++;
        if (i > message.length){
        clearInterval(interval)
        }
    }, speed);
}

function fadeIn(element, speed){
fade=0
var interval2 =setInterval(function(){
fade=fade+.01
document.getElementById(element).style.opacity=fade
if (fade > 1){
fade=0
clearInterval(interval2)
}
}, speed)
}

function story(){
	storyStage++
	document.getElementById("story").innerHTML=""
	if(storyStage==1){
		printLetterByLetter("story", "2 million ad", 1)
	}
	else if(storyStage==2){
		printLetterByLetter("story","planet JX-75-D9", 1)
	}
	else if(storyStage==3){
	printLetterByLetter("story", "Message incoming... Start transmission........................... Message Recieved.", 1)
	}
	else if(storyStage==4){
	printLetterByLetter("story","<<Begin Transmission [est time of departure 30-1002-2x10^6] >> SURFACE RESOURCE STATUS: PRESENT || SUB-SUFRACE RESOURECES: PRESENT || WATER: PRESENT || LIFE STATUS:PRESENT || RECOMMENED COURSE OF ACTION: DISENGAGE. || CREW MEMEBERS DISENGAGING AND SUSPENED UNTIL FURTHER ORDERS <<End Tranmission>>", 1)
	}
	else if(storyStage==5){
	printLetterByLetter("story","<<Begin Reply [est time of arrival: 23-5602-3x10^7 || Local Star Time 0:12] >>PROTOCOL OVERRIDE: ACTIVED || ORDERS: PREPARE PLANET FOR COLONY ARRIVAL<<End Reply>>", 1)
	}
	else if(storyStage==6){
	document.getElementById("resourceGrid").style.display="table"
	document.getElementById("miningBlock").style.display="table-row"
	fadeIn("miningBlock", 10)
	}
}
function researchSmelting(){
	if (stone==10&&copper==10&&iron==10){
		document.getElementById("smeltingBlock").style.display="table-row"
		fadeIn("smeltingBlock" , 10)
		stone=stone-10;
		copper=copper-10;
		iron=iron-10;
		document.getElementById("currentResearch").innerHTML="Research Mines (+Mines, -10 copper plates, -10 hard stone, -10 iron plates, -10 coke coal)"
	}
}
window.setInterval(function updateResources(){
document.getElementById("mineStone").innerHTML=stone+" stone";
document.getElementById("mineCopper").innerHTML=copper+" copper";
document.getElementById("mineIron").innerHTML=iron+" iron";
document.getElementById("mineCoal").innerHTML=coal+" coal";
document.getElementById("smeltStone").innerHTML= hardStone+" hard stone";
document.getElementById("smeltIron").innerHTML=ironPlate+" iron plates"
document.getElementById("smeltCopper").innerHTML=copperPlate+" copper plates";
document.getElementById("smeltCoal").innerHTML=cokeCoal+" coke coal";
}, 1)
window.setInterval(function(){
if(stone==10||copper==10||iron==10||coal==10){
	if(event1Completed==0){
		document.getElementById("story").innerHTML="";
		document.getElementById("story").innerHTML="Even the greatest of minds must continue to learn."
		fadeIn("story",1)
		document.getElementById("researchBlock").style.display="block"
		event1Completed=1;
	}
}
}, 1)
