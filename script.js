const quizDB=[
    {
        quetion:"Q1: What is the full form of html?",
        a:"Hello To MY Land",
        b:"text Mark Uo Language",
        c:"Hypet Text Markup Language",
        d:"Heypertext Markup Langauge",
        ans:"ans4"
    },
    {
        quetion:"Q2: What is the full form of css?",
        a:"Hello To MY Land",
        b:"text Mark Uo Language",
        c:"Cascading Style Sheet",
        d:"Heypertext Markup Langauge",
        ans:"ans3"
    },
    {
        quetion:"Q!: What is the full form of HTTPS?",
        a:"Heyper Text Transfer protocol",
        b:"text Mark Uo Language",
        c:"Hypet Text Markup Language",
        d:"Heypertext Markup Langauge",
        ans:"ans1"
    },
    {
        quetion:"Q!: What is the full form of JS?",
        a:"JavaScript",
        b:"text Mark Uo Language",
        c:"Hypet Text Markup Language",
        d:"Heypertext Markup Langauge",
        ans:"ans1"
    }


];
const quetion=document.querySelector('.quetion');
const option1=document.querySelector("#option1");
const option2=document.querySelector("#option2");
const option3=document.querySelector("#option3");
const option4=document.querySelector("#option4");
const submit=document.querySelector('#submit');

const answers=document.querySelectorAll('.answer');

const showScore=document.querySelector('#showscore')

let quetionCount=0;
let score=0;

const loadQuestion = () => {
const quetionList = quizDB[quetionCount];

    quetion.innerText=  quetionList.quetion;

    option1.innerText=quetionList.a;
    option2.innerText=quetionList.b;
    option3.innerText=quetionList.c;
    option4.innerText=quetionList.d;



}
loadQuestion();
const getCheckedAnswer = () => {
    let answer;
    answers.forEach((curAnsElem) =>{
        if(curAnsElem.checked){
            answer=curAnsElem.id;
        }
    });
    return answer;

};
const deselectAll = () =>{
    answers.forEach((curAnsElem) => curAnsElem.checked=false);
}

submit.addEventListener('click',() =>{
    const checkedAnswer=getCheckedAnswer();
    console.log(checkedAnswer);

    if(checkedAnswer == quizDB[quetionCount].ans){
        score++;
    };
    quetionCount++;
    deselectAll();

    if(quetionCount<quizDB.length){
        loadQuestion();
    }else{
        showScore.innerHTML=`
        <h3>You scored ${score}/${quizDB.length} </h3><button class="btn" onClick="location.reload()"> Play Again</button></>`
        ;
        showScore.classList.remove('scoreArea');
    }

});
