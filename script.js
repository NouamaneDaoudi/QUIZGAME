 //function------------------------------------------------------------------

 function checkQuestion(questions,reponse,count){
     let correction = false
     if ((reponse[0].checked == true) && (questions[count].response1[1] == true)){
          correction = true
     }else if ((reponse[1].checked == true) && (questions[count].response2[1] == true)){
         correction = true
     } else if((reponse[2].checked == true) && (questions[count].response3[1] == true)){
         correction = true
     }
      else if((reponse[3].checked == true) && (questions[count].response4[1] == true)){
         correction = true
      }
     return correction
     }
     
  


let count = 0
let score = 0 //score ++ 
let reponse = document.querySelectorAll(".reponse")
let titre = document.getElementById("titre")
let button = document.getElementById("button")
let label = document.querySelectorAll(".labels")


let questions =[
    {
        question:"Type dentreprise :",
        
        response1:["Industrielles",false],
        response2:["Commerciales",false],
        response3:["Artisanales",false],
        response4:["Services",true],
    },
    
    {
        question:"marque de voiture",
        
        response1:["voslkwagen",false],
        response2:["renault",false],
        response3:["mercedes",false],
        response4:["audi",true],
    },
    
    {
        question:"type de moto",
        
        response1:["suzuki",false],
        response2:["honda",false],
        response3:["yamaha",false],
        response4:["kawazaki",true],
    },
    
    {
        question:"type de sport",
        
        response1:["tennis",false],
        response2:["footbaal",false],
        response3:["skateboard",false],
        response4:["surf",true],
    },
    
    {
        question:"type marque",
        
        response1:["nike",false],
        response2:["ripcurle",false],
        response3:["nofear",false],
        response4:["reebook",true],
    },
    
    {
        question:"marque mobile",
        
        response1:["samsung",false],
        response2:["apple",false],
        response3:["lenovo",false],
        response4:["xioami",true],
    },
]

titre.innerHTML = questions[0].question


label[0].innerHTML = questions[0].response1[0]
label[1].innerHTML = questions[0].response2[0]
label[2].innerHTML = questions[0].response3[0]
label[3].innerHTML = questions[0].response4[0]


//button--------------------------------------------------


button.addEventListener("click",function(){
    console.log("button")
    if ((reponse[0].checked)||(reponse[1].checked)||(reponse[2].checked)||(reponse[3].checked)){
    let correctionReponse = checkQuestion(questions, reponse, count)
    if(correctionReponse == true){
         score++
    }
           count++
    if(count < questions. length){
        titre.innerHTML = questions[count].question
        label[0].innerHTML = questions[count].response1[0]
        label[1].innerHTML = questions[count].response2[0]
        label[2].innerHTML = questions[count].response3[0]
        label[3].innerHTML = questions[count].response4[0]
        reponse[0].checked = false
         reponse[1].checked = false
         reponse[2].checked = false
         reponse[3].checked = false
    }else{
//       console.log("terminer")
        alert(score)
        count--
    }
    }

    })
 

