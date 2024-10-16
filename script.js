let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        },i * 80);
    });
       nextWord.style.opacity="1";
       Array.from(nextWord.children).forEach((letter, i)=>{ 
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        },340 + i * 80);
       }); 
       currentWordIndex = currentWordIndex ===maxWordIndex ? 0 : currentWordIndex + 1;
}
changeText();
setInterval(changeText, 6000)


const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.Floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;


    for(let i = 0 ; i < dots ; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;
})


var mixer = mixitup('.portifolo-gallery');


/* active menu */
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');

function activeMenu(){
let len = section.length;
while(--len && window.scrollY + 97 < section[len].offsetTop){}
menuLi.forEach(sec => sec.classList.remove("active"));
menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);


/*sticky navbar */

const header = document.querySelector("header")
window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 50)
})


/*  toggle*/
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = ()=>{
   menuIcon.classList.toggle("fa-x");
   navbar.classList.toggle("open");
}


window.onscroll = ()=>{
    menuIcon.classList.remove("fa-x");
    navbar.classList.remove("open");
}


// paralax //

const observer = new IntersectionObserver((enteries)=>{
    enteries.forEach((entry)=>{
    if(entry.isIntersecting){
        entry.target.classList.add("show-items");
    }else{
        entry.target.classList.remove("show-items");
    }
    })
})

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el) =>observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el) =>observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el) =>observer.observe(el));


// more//
const Info = document.getElementsByClassName(".btn-box");
const more = document.getElementsByClassName(".more");

Info.onclick =()=>{
  Info.classList.hide("more");  
  more.classList.hide("more");
}

window.scroll =()=>{
    Info.classList.open("more")
    more.classList.open("more")
}


// C3278291B9796546D3CB65B6873773F427E3  .....its for pleasantstephen44@gmail.com

function emailSend() {
    var UserName = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;

 var messageBody = "Name: " + UserName +
 "<br/> Email: " + email +
 "<br/> Address: " + address +
 "<br/> Phone: " + phone +
 "<br/> Message: " + message;

 console.log(messageBody)
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "stephenpleasant1@gmail.com",
        Password : "53E6694393172AFE60E9EDB0B8CC39F5A9C4",
        To : 'pleasantstephen44@gmail.com',
        From : "stephenpleasant1@gmail.com",
        Subject : "This is the subject",
        Body : messageBody
    }).then(
      message => {
        if (message =='OK') {
            swal("Successful!", "You clicked the button!", "success");
        }else{
            swal("Error", "You clicked the button!", "error");
        }
      }
    );
}