const  allData = [];

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



// Call button functionality 

const callBtns= document.getElementsByClassName('btn-call');

for(const callBtn of callBtns){
    callBtn.addEventListener('click', function(){

        const avaibleCoin = getInnerTextToNumber('coin-id')
        console.log(avaibleCoin);
        const seriveNumber = callBtn.parentNode.parentNode.children[3].innerText;
        console.log(seriveNumber);
        const subTtile = callBtn.parentNode.parentNode.children[2].innerText
        console.log(subTtile);

        if(avaibleCoin < 20){
            alert(`You don't have enough coins! You need at least 20 coins to make a call.`)
            return;
        }

        const remainingCoin = avaibleCoin -   20;
        console.log(remainingCoin);
        setInnerText('coin-id', remainingCoin)
        alert(`📞 Calling ${subTtile} ${seriveNumber}...`);

        // history add

        const now  = new Date().toLocaleTimeString('en-US', {
           timeZone: 'Asia/Dhaka',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true
            })

            // history functionality 
        const historyContainer = document.getElementById('history-conttainer')

        const div = document.createElement('div')
        
        div.innerHTML = `
            <div class="flex items-center justify-between p-3 bg-[#FAFAFA] rounded-lg">
                <div class=" ">
                    <h2 class="font-semibold ">${subTtile}</h2>
                        <p class="text-[#5C5C5C]">${seriveNumber}</p>
                    </div>
                        <span class="text-[#111111]">${now}</span>
                </div>

        `
        historyContainer.appendChild(div);

    })
}


// clear button functionality 

document.getElementById('btn-clear')
    .addEventListener('click',function(){
        const historyContainer = getId('history-conttainer');
        historyContainer.innerHTML = ''

    })







