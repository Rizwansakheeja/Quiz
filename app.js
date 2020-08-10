var questions = [
    {
        question: " 5+5*5+5 is equals to ?",
        answers: {
            a: 55,
            b: 35,
            c: 75,
            d: 85
        },
        answer: 55

    },
    {
        question: " 40+40*0+1 is equals to ?",
        answers: {
            a: 1,
            b: 41,
            c: 0,
            d: 40
        },
        answer: 1

    },
    {
        question: " if 1=2,3=18,4=32 then 6= ?",
        answers: {
            a: 52,
            b: 72,
            c: 60
        },
        answer: 72

    },
    {
        question: " Find the missing number: 5, 16, 51, 158,-- ?",
        answers: {
            a: 483,
            b: 280,
            c: 481,
            d: 358
        },
        answer: 481

    }
    
    
];
function makeQuiz() {
    var divbody = document.getElementById("Questions");

    for (let index = 0; index < questions.length; index++) {

        var dive = document.createElement('div');
        dive.setAttribute('class', 'alert-primary');

        var obj = questions[index];
        

        var h = document.createElement('h4');
        h.innerHTML = (index + 1) + " : " + obj.question;
        dive.appendChild(h);


        
        var answerobj = obj.answers;

        var optdive = document.createElement('div');
        optdive.setAttribute('class', 'alert alert-dark');

        Object.keys(answerobj).forEach(key => {

            var optdiv = document.createElement('div');
            optdiv.setAttribute('class', 'alert-light');

            var labeel = document.createElement('label');
            labeel.setAttribute('for', key);
            var labeel = document.createElement('label');
            labeel.innerText = answerobj[key];

            var labeeval = document.createElement("input");
            labeeval.setAttribute('type', 'radio');
            labeeval.setAttribute('class', 'btn-radio');
            labeeval.setAttribute('name', index);
            var setval = answerobj[key];
            labeeval.setAttribute('value', setval);

            optdiv.appendChild(labeeval);
            optdiv.appendChild(labeel);
            optdive.appendChild(optdiv);
            dive.appendChild(optdive);

        });
        divbody.appendChild(dive);

    }

}


makeQuiz();

function showResult() {
    var btn = document.getElementById("btnResult");

    var correctAnswer = [];
    var userAnswers = [];

    
    questions.forEach(element => {
        correctAnswer.push(element.answer);
    });

    
    var selectedAnswers = document.getElementsByClassName('btn-radio');

   
    for (let index = 0; index < selectedAnswers.length; index++) {
        if (selectedAnswers[index].checked) {
            userAnswers.push(selectedAnswers[index].value);
        }
    }

    if (userAnswers == "") {
        alert("Please select the answers it is required");
    } else {
        btn.hidden = true;


       
        var count = 0;
        for (let j = 0; j < correctAnswer.length; j++) {
            var corrValue = correctAnswer[j];
            corrValue = corrValue.toString();
            var userValue = userAnswers[j];
            if (corrValue === userValue) {
                count += 1;
            }
        }
       
        var divbody = document.getElementById("Questions");
        divbody.innerHTML = "";
        
        var optdiv = document.createElement('div');
        optdiv.setAttribute('class', 'alert-info');
        optdiv.setAttribute('id','score');
        var textnode = document.createTextNode("Your Result is : " + count);
        
        var i = document.createElement('i');
        i.setAttribute('class', 'fa fa-check-circle');
        i.style.fontSize = "font-size:48px;color:red";

        optdiv.appendChild(i);
        optdiv.appendChild(document.createElement("br"));
        optdiv.appendChild(textnode);
        divbody.appendChild(optdiv);


    }
}