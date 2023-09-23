//Take the data

let answerUsername = document.getElementById("answerUsername");
let answerFullName = document.getElementById("answerFullName");
let answerEmail = document.getElementById("answerEmail");
let answerPassword = document.getElementById("answerPassword");
let answerAddress = document.getElementById("answerAddress");
let answerNews = document.getElementById("answerNews");

function inputValidation(){
    var tanda = 1;
    if(answerUsername.value.length < 4){
        alert("Username is too short, put it some more");
        tanda = 0;
    }
    if(answerFullName.value.length < 1){
        alert("Full name is too short, put it some more");
        tanda = 0;
    }
    if(answerEmail.value.endsWith("@gmail.com") == false){
        alert("Email must be end with @gmail.com");
        tanda = 0;
    }
    if(answerPassword.value.length < 8){
        alert("Password must at least 8 characters");
        tanda = 0;
    }
    if(answerAddress.value.startsWith("jl") == false){
        alert("Address must be start with jl");
        tanda = 0;
    }
    if(tanda == 1){
        window.location.href = "regisComplete.html";
    }
}

function inputValidation2(){
    if(answerNews.value.endsWith("@gmail.com") == true){
        alert("Thank You! You will receive latest news")
    }
    else{
        alert("Email must be end with @gmail.com");
    }
}


let slideNews = 0;
showSlides();

function showSlides() {
  let i;
  let newsSlides = document.getElementsByClassName("newsSlides");
  for (i = 0; i < newsSlides.length; i++) {
    newsSlides[i].style.display = "none";  
  }
  slideNews++;
  if (slideNews > newsSlides.length) {
      slideNews = 1
  }    

  newsSlides[slideNews-1].style.display = "block";  
  setTimeout(showSlides, 3000);
}