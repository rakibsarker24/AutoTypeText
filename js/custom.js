


let count = document.querySelector(".count")
let start = -1
console.log(count)

function plus(){
    start++
    count.innerHTML += count.dataset.number.charAt(start)

   if(start == count.dataset.number.length){
        start = -1
        count.innerHTML = ""
   }
}

let stop = setInterval(function(){
    
    plus()
}, 200)
