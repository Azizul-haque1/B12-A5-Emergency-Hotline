function getId(id){
   const foundId = document.getElementById(id);
   return foundId;

}

function getInnerText (id){
    const text = document.getElementById(id).innerText
    return text;
}
function getInnerTextToNumber (id){
    const text = document.getElementById(id).innerText
    const textToNumber = parseInt(text);
    return textToNumber;
}

function setInnerText (id , value){
    const element  = document.getElementById(id)
    element.innerText = value

}



const availableHeartCounter = getInnerTextToNumber('heart-counter')
const heartCounter  = getInnerText('heart-counter')

let count = 0;
const hearts = document.getElementsByClassName('btn-circle')

for(const heart of hearts){
    heart.addEventListener('click', function(){
       count = count + 1;
       document.getElementById('heart-counter').innerText = count;
       console.log('counter:', count);
})
}


// console.log('js connect');
