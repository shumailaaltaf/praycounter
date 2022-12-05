let incrementButton = document.getElementById("increment");
let decrementButton = document.getElementById("decrement");
let counter = document.getElementById("counter");
let count = 0;

incrementButton.addEventListener("click",()=>{
    count++;
    counter.textContent = count;
    updatesyles(count);
})
decrementButton.addEventListener("click",() =>{
    count = 0;
    counter.textContent = count;
    updatesyles(count);
});
function updatesyles(count){
    if(count < 0){
        counter.classList.add("start");
    }
    else if(count > 0){
        counter.classList.add("reset");
    }
}


