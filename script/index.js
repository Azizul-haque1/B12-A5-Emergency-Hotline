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

// heart counter functionality 

const availableHeartCounter = getInnerTextToNumber('heart-counter')
const heartCounter  = getInnerText('heart-counter')

let heartCount = 0;
const hearts = document.getElementsByClassName('btn-circle')

for(const heart of hearts){
    heart.addEventListener('click', function(){
       heartCount = heartCount + 1;
       document.getElementById('heart-counter').innerText = heartCount;
       console.log('counter:', heartCount);
})
}


// Copy button functionality 

const copyBtns  = document.getElementsByClassName('btn-copy')
let copyCount  = 0;

for(const copyBtn of copyBtns){
    copyBtn.addEventListener('click', function(){
        const number = copyBtn.parentNode.parentNode.children[3].innerText;
        console.log(number);
        copyCount += 1;
        setInnerText('copy-counter', copyCount);
        console.log(copyCount);
        navigator.clipboard.writeText(number).then(function(){
            alert(`Number copied: ${number}` )

        }, function(err){
            alert('Failed to copy ' + err)
        }
    );


        
    })
}



