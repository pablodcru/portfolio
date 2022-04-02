const button1 = document.querySelector('.but1');
const button2 = document.querySelector('.but2');
const button3 = document.querySelector('.but3');
const biotext = document.querySelector('.biotext');

const home = document.querySelector('.but-home');
const aboutme = document.querySelector('.but-aboutme');
const skills = document.querySelector('.but-skills');
const projects = document.querySelector('.but-projects');
const contact = document.querySelector('.but-contact');

const a = document.querySelector('.but-home');
const b = document.querySelector('.but-aboutme');
const c = document.querySelector('.but-skills');
const d = document.querySelector('.but-projects');
const e = document.querySelector('.but-contact');



// When the user scrolls down 20px from the top of the document, slide down the navbar
// When the user scrolls to the top of the page, slide up the navbar (50px out of the top view)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.querySelector('.navbar').style.top = "0";
  } 
}

//submit alert
function validate() {
    if(document.getElementById("firstName").value == ""){
        return false;
    }
    if(document.getElementById("msg").value == ""){
        return false;
    }
    alert("goo");
    return( true );
}


function process() {
    document.getElementById("myform").reset(); 
}


//ACTIVATING FORM
function sendMail(params) {
    var tempParams = {
        first_name: document.getElementById("firstName").value,
        last_name: document.getElementById("lastName").value,
        email: document.getElementById("email").value,
        message: document.getElementById("msg").value,
    };

    emailjs.send('contact_service1','contact_form',tempParams);

    if(document.getElementById("firstName").value != "" && document.getElementById("msg").value != ""){
        alert("Thanks for getting in touch :)");
    }
}





button1.addEventListener('click', () => {
    button2.classList.remove('selected');
    button3.classList.remove('selected');
    button1.classList.add('selected');
    biotext.innerHTML = 'I am Front End Developer and completely devoted to keep expanding my knowledge through hard work; consequently, hiring me will likely be a win-win situation.';

});
button2.addEventListener('click', () => {
    button1.classList.remove('selected');
    button3.classList.remove('selected');
    button2.classList.add('selected');
    biotext.innerHTML = 'Hi, I am a driven Front End Developer who enjoys developing robust websites and debugs patiently. I am passionate about learning new technologies and working on a team is a good way to find solutions that cannot be solved by oneself. I am a hard-worker and I can assure I will meet the expectations of your company.';

});
button3.addEventListener('click', () => {
    button1.classList.remove('selected');
    button2.classList.remove('selected');
    button3.classList.add('selected');
    biotext.innerHTML = 'Hi, my name is Pablo and I am a passionate Front End Developer. I consider myself responsive, as the websites that I develop, and a team-minded constructive person who will bring a proactive attitude to the team. Problems are there to be solved, independently or collaboratively, but always committed to find the best approach. I am determined to keep learning as much as I can, therefore, I can be a great asset to your company and I would be completely grateful to demonstrate my knowledge in a technical interview of the numerous skills listed below.';

});

home.addEventListener('click', () => {
    home.classList.add('underlined');
    aboutme.classList.remove('underlined');
    skills.classList.remove('underlined');
    projects.classList.remove('underlined');
    contact.classList.remove('underlined');
});
aboutme.addEventListener('click', () => {
    aboutme.classList.add('underlined');
    home.classList.remove('underlined');
    skills.classList.remove('underlined');
    projects.classList.remove('underlined');
    contact.classList.remove('underlined');
});
skills.addEventListener('click', () => {
    skills.classList.add('underlined');
    aboutme.classList.remove('underlined');
    home.classList.remove('underlined');
    projects.classList.remove('underlined');
    contact.classList.remove('underlined');
});
projects.addEventListener('click', () => {
    projects.classList.add('underlined');
    aboutme.classList.remove('underlined');
    skills.classList.remove('underlined');
    home.classList.remove('underlined');
    contact.classList.remove('underlined');
});
contact.addEventListener('click', () => {
    contact.classList.add('underlined');
    aboutme.classList.remove('underlined');
    skills.classList.remove('underlined');
    projects.classList.remove('underlined');
    home.classList.remove('underlined');
});



function changin (){
    if (window.scrollY < 500 && window.scrollY = 0) {
        a.classList.add('underlined');
        b.classList.remove('underlined');
    }else if (window.scrollY > 500 && window.scrollY < 1300) {
        a.classList.remove('underlined');
        c.classList.remove('underlined');
        b.classList.add('underlined');
    }else if (window.scrollY > 1300 && window.scrollY < 2000) {
        b.classList.remove('underlined');
        d.classList.remove('underlined');
        c.classList.add('underlined');
    }else if (window.scrollY > 2000 && window.scrollY < 2550) {
        c.classList.remove('underlined');
        e.classList.remove('underlined');
        d.classList.add('underlined');
    }else if (window.scrollY > 2550 ) {
        d.classList.remove('underlined');
        e.classList.add('underlined');
    }
}

window.addEventListener('scroll', changin);

//Solve problems independently and collaboratively
/* Hi , my name is Pablo and I am a passionate Front End Developer. I consider myself responsive, as the websites that I develop, and a team-minded constructive person who will bring a proactive attitude. Problems are there to be solved, independently or collaboratively, but always committed to find the best approach. I am determined to keep learning as much as I can, therefore, I can be a great asset for your company and I would be completely glad to demonstrate my knowledge in a technical interview of the numerous skills listed below.


Short: I am a driven Front End Developer and completely devoted to keep expanding my knowledge through hard work; consequently, hiring me could be a win-win situation.

Medium: Hi, I am a persistent Front End Developer who enjoys developing robust websites and patiently debugging. I  blablablabla  blablablabla blablablabla blablablabla blablablablablablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla blablablabla.

















/* https://alvarotrigo.com/blog/css-text-animations/



const elts = {
    text1: document.getElementById("text1"),
    text2: document.getElementById("text2")
};

const texts = [
    "I",
    "Hope",
    "You",
    "Have",
    "A",
    "Good",
    "Day",
    ":)",
];

const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
    morph -= cooldown;
    cooldown = 0;

    let fraction = morph / morphTime;

    if (fraction > 1) {
        cooldown = cooldownTime;
        fraction = 1;
    }

    setMorph(fraction);
}

function setMorph(fraction) {
    elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    fraction = 1 - fraction;
    elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
    elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;

    elts.text1.textContent = texts[textIndex % texts.length];
    elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
    morph = 0;

    elts.text2.style.filter = "";
    elts.text2.style.opacity = "100%";

    elts.text1.style.filter = "";
    elts.text1.style.opacity = "0%";
}

function animate() {
    requestAnimationFrame(animate);

    let newTime = new Date();
    let shouldIncrementIndex = cooldown > 0;
    let dt = (newTime - time) / 1000;
    time = newTime;

    cooldown -= dt;

    if (cooldown <= 0) {
        if (shouldIncrementIndex) {
            textIndex++;
        }

        doMorph();
    } else {
        doCooldown();
    }
}

animate();  */
