// const test = [
//     {
//         "question": "asdadasd",
//         "answers": ["a", "b", "c"],
//         "currectAnswer": 0
//     },
//     {
//         "question": "asdadasd",
//         "answers": ["a", "b", "c"],
//         "currectAnswer": 0
//     },
    
//     {
//         "question": "asdadasd",
//         "answers": ["a", "b", "c"],
//         "currectAnswer": 0
//     },
    
// ]


const questions= [
    { q: "کدام یک درست است؟",
        a:[{ text:"۲+۲ = ۴", iscorrect:true},
           {text:"۲+۲ = ۵" , iscorrect:false}]
    },
    {
        q:"محبوب ترین زبان در جهان کدام است؟",
        a:[{ text:"ترکی", iscorrect:false},
           {text:"انگلیسی", iscorrect:true}]
    }
]


// test = `<div>
//     <h2>${asdasd}</h2>
// </div>`;

let currquestion=0
let score=0
function loadq() {
    const opt = document.getElementById("opt")
    let question = document.getElementById("ques")
    
    // for(i=0; i<questions[currquestion].length; i++){
    // question.textContent = questions[currquestion].q}
     question.textContent = questions[currquestion].q;
    opt.innerHTML= ""
    for (let i=0; i< questions[currquestion].a.length; i++){
        const choicesdiv = document.createElement("div");
        const choice = document.createElement("input");
        const choicelabel = document.createElement("label");
        choice.type = "radio";
        choice.name = "answer";
        choice.value = i;
        choicelabel.textContent= questions[currquestion].a[i].text;
        choicesdiv.appendChild(choice);
        choicesdiv.appendChild(choicelabel);
        opt.appendChild(choicesdiv);
    }
}
loadq();
    function loadScore(){
        const totalScore = document.getElementById("score")
        totalScore.textContent =`شما ${score} امتیاز دارید`
    }
 function checkAns(){
 const selectedAns = parseInt(document.querySelector('input[name="answer"]:checked').value);
  if(questions[currquestion].a[selectedAns].iscorrect){
     score++
    nextquestion();
 }else{
     nextquestion();
 }
 } 

function nextquestion(){
    if(currquestion<questions.length - 1){
        currquestion++;
        loadq();
    }else{
        document.getElementById("opt").remove();
        document.getElementById("ques").remove();
        document.getElementById("btn").remove();
        loadScore();
    }

}