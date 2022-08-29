const question1 = document.querySelector('.question1')
const showAnswer1 = document.querySelector('.info1')
const hideAnswer1 = document.getElementById('info1')
const question2 = document.querySelector('.question2')
const showAnswer2 = document.querySelector('.info2')
const question3 = document.querySelector('.question3')
const showAnswer3 = document.querySelector('.info3')
const question4 = document.querySelector('.question4')
const showAnswer4 = document.querySelector('.info4')
const question5 = document.querySelector('.question5')
const showAnswer5 = document.querySelector('.info5')


 function open1() {
    showAnswer1.style.display = 'block'
    showAnswer1.style.marginTop = '2rem'
    question1.style.fontWeight = 'bold'
}
   
question1.addEventListener('click', open1)


function open2(){
    showAnswer2.style.display = 'block'
    showAnswer2.style.marginTop = '2rem'
    question2.style.fontWeight = 'bold'
}
question2.addEventListener('click', open2)

function open3(){
    showAnswer3.style.display = 'block'
    showAnswer3.style.marginTop = '2rem'
    question3.style.fontWeight = 'bold'
}
question3.addEventListener('click', open3)

function open4(){
    showAnswer4.style.display = 'block'
    showAnswer4.style.marginTop = '2rem'
    question4.style.fontWeight = 'bold'
}
question4.addEventListener('click', open4)

function open5(){
    showAnswer5.style.display = 'block'
    showAnswer5.style.marginTop = '2rem'
    question5.style.fontWeight = 'bold'
}
question5.addEventListener('click', open5)


