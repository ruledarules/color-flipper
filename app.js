const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

// btn.addEventListener('click', function(){
//     // the goal is to generate a number between 0 - 3;
//     const randomNum = 2;
//     document.body.style.backgroundColor = colors[randomNum];
//     color.textContent = colors[randomNum];
// })

btn.addEventListener('click', function(){
    // the goal is to generate a number between 0 - 3;
    const randomNum = getRandom();
    document.body.style.backgroundColor = colors[randomNum];
    color.textContent = colors[randomNum];
})

function getRandom(){
    return Math.floor(Math.random()*colors.length);
}