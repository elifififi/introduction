const myCheckbox = document.getElementById("myCheckbox");
const submitBtn = document.getElementById("submitBtn");
const submitRes = document.getElementById("submitRes");
const myCheckbox2 = document.getElementById("myCheckbox2");
const submitBtn2 = document.getElementById("submitBtn2");
const submitRes2 = document.getElementById("submitRes2");


submitBtn.onclick = function (){

    if(myCheckbox.checked){
        submitRes.textContent = "Thank you!! I spent a lot of time coding and designing it :)";
    }
    else {
        submitRes.textContent = "It's okay, you don't have to, I hope I will be able to create better websites in the future :(";
    }
}

submitBtn2.onclick = function (){

    if(myCheckbox2.checked){
        submitRes2.textContent = "Good for you, never lose hope! Believe in yourself, and sooner or later, you will succeed!";
    }
    else {
        submitRes2.textContent = "Don't worry, I believe in you and you should believe in yourself too! When you are hopeful, you will succeed! Just work hard and try understanding, then coding/programming will be easy for you. :D";
    }
}