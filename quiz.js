const total_no = document.querySelector(".total_no");
const question_no_value=document.querySelector(".question-num-value")
const question=document.querySelector(".question")
const option=document.querySelector(".options").children;
const op1=document.querySelector(".option1");
const op2=document.querySelector(".option2");
const op3=document.querySelector(".option3");
const op4=document.querySelector(".option4");
const overobtain=document.querySelector(".over-obtained");
const overtotal=document.querySelector(".over-total");
const percentage=document.querySelector(".percentage");
var serialno=0;
var index=0;
var myarray=[];
var score=0;



const Questions=[
{
q:"How do we call a function name 'myfunction'?",
options:['myfunction','call myfunction', 'call function myfunction()','all of the above'],
answer:0
},
{
q:"How to write an if statement in javascript?",
options:['if i = 5 then','if i == 5 then', 'if(i==5)', 'none of the above'],
answer:2
}

]

function randomnumber()
{
	var random=Math.floor(Math.random()*Questions.length);
	var duplicate=0;
	if(serialno==Questions.length)
	{
		quizovers();
	}
	else
	{
		if(myarray.length>0)
		{
			for(var i=0;i<myarray.length;i++)
			{
				if(myarray[i]==random)
				{
					duplicate=1;
					break;
				}


			}
			if(duplicate==1)
			{
				randomnumber();
			}
			else
				{
					index=random;
				}
		}
		if(myarray.length==0)
		{
			index=random;
		}
		myarray.push(random);
	}
	
	
	
	
	
}






function number()
{
	
	total_no.innerHTML=Questions.length;
	question_no_value.innerHTML=serialno+1;
	
	//load();
}
function load()
{
	randomnumber();	
	number();
	question.innerHTML=Questions[index].q;
	options();
	
	
}
window.onload=function()
{
	load();
}
function options()
{
	op1.innerHTML=Questions[index].options[0];
	op2.innerHTML=Questions[index].options[1];
	op3.innerHTML=Questions[index].options[2];
	op4.innerHTML=Questions[index].options[3];
	serialno++;
}
function check(element)
{
	if(element.id==Questions[index].answer)
	{
		element.classList.add("correct");
		score++;
	}
	else{
		element.classList.add("wrong");
	}
	dissableoptions();
}
function dissableoptions()
{
	for(var i=0;i<option.length;i++)
	{
		option[i].classList.add("dissable");
		if(option[i].id==Questions[index].answer)
		{
			option[i].classList.add("correct");
		}
	}
}
function validation()
{		
	if(!option[0].classList.contains("dissable"))
		{
			alert("choose an option first")
		}
		else
		{
			enable();
			load();
		}
	}
function next()
{

	validation();

}
function enable()
{
	for(i=0;i<option.length;i++)
	{
		option[i].classList.remove("dissable","correct","wrong");
	}
}
function quizovers()
{

	document.querySelector(".quizover").classList.add("show");

	overobtain.innerHTML=score;
	overtotal.innerHTML=Questions.length;
	percentage.innerHTML=(score/Questions.length)*100 + "%";

}
function tryagain()
{
	window.location.reload();
}




