var ul = document.getElementById('ul')
var nextButton = document.getElementById('btnNext');
var quizbox = document.getElementById('questionBox')
var opt1 = document.getElementById('btn1')
var opt2 = document.getElementById('btn2')
var opt3 = document.getElementById('btn3')
var opt4 = document.getElementById('btn4')


/*
function traerDatos (){
    fetch (`https://opentdb.com/api.php?amount=4&category=17&difficulty=medium&type=multiple`)
    .then ((res)=> res.json())
    .then((data )=>{
createData(data)
    });
}
traerDatos();

function createData(data){
    document.querySelector("#questionBox").innerHTML=` Question: ${data.results [0].question}`
    document.querySelector("#btn1").innerHTML=data.results [0].correct_answer
    document.querySelector("#btn2").innerHTML=data.results [0].incorrect_answers[0]
    document.querySelector("#btn3").innerHTML=data.results [0].incorrect_answers[1]
    document.querySelector("#btn4").innerHTML=data.results [0].incorrect_answers[2]
}

useApiData(data).array.forEach(correct_answer => {
    console.log(correct_answer)
});

let correctButton = document.querySelector(`#btnNext`)
correctButton.addEventListener("click",()=> 
sendApiRequest())
*/

var app={
    questions:[
        {
            q:'Los fosfolípidos presentes en la membrana del citoplasma de las arqueobacterias son',
            options: ['fosfoglicéridos', 'poliisoprenoide, ', 'lípidos poliisoprenoides de cadena ramificada'],
            answer:2
        },
        {
            q:'	Los organismos eucariotas más antiguos se consideran',
            options: ['diplomonads como Giardia', 'arqueas', 'hongos', 'animales'],
            answer:2
        },  
        {
            q:'¿Cuál de las siguientes opciones no es cierta para las células eucariotas?',
            options: ['El núcleo está limitado por una membrana nuclear', 'Los cromosomas contienen histonas', 'Los cloroplastos y las mitocondrias contienen ribosomas 70S', 'Hay vacuolas de gas'],
            answer:2
        }, 
        {
            q:'¿Cuál de las siguientes estructuras está ausente en las células eucariotas?',
            options: ['Mitocondria', 'Cloroplastos', 'Estructura de Golgi', 'Mesosoma'],
            answer:3
        } 
    ],

    index:0,
    load:function(){
        if(this.index<=this.questions.length-1){
            quizbox.innerHTML=this.index+1 + ". " +this.questions[this.index].q;
            opt1.innerHTML=this.questions[this.index].options[0];
            opt2.innerHTML=this.questions[this.index].options[1];
            opt3.innerHTML=this.questions[this.index].options[2];
            opt4.innerHTML=this.questions[this.index].options[3];
        }
        else {
            quizbox.innerHTML="Quiz Completed!";
            ul.style.display="none";
            nextButton.style.display="none";
        }
    },
    next: function(){
        this.index++;
        this.load();
    },
    check: function(ele){
        var id=ele.id.split('');
        if(id[id.length-1]==this.questions[this.index].answer){
            this.score++;
            ele.className="correct";
            this.scoreCard();
        }
        else{
            ele.className="wrong";
        }
    },
    preventClick:function(){
        for(let i=0; i<ul.children.length; i++){
            ul.children[i].style.pointerEvents="none";
        }
    },
    allowClick:function(){
        for(let i=0; i<ul.children.length; i++){
            ul.children[i].style.pointerEvents="auto";
            ul.children[i].className=''
        }
    },
    score:0,
    scoreCard:function(){
        scoreCard.innerHTML=this.questions.length + "/" + this.score;
    }
}

window.load=app.load();

function button(ele){
app.check(ele);
app.preventClick();
}

function next(){
app.next();
app.allowClick();
}
