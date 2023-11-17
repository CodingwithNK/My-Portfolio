
// click on light and dark mode button then changes.

let bgLight = document.getElementsByClassName('rightSlide')[0];

bgLight.addEventListener("click", function () {
  document.getElementsByClassName('rightSlide')[0].style.margin = "-16px 32px 0 0";

  removeClass();

})

function removeClass() {
  let addRemoveCls = document.getElementById("addRemoveCls");
  if (addRemoveCls.classList.contains("bi-brightness-low-fill")) {
    addRemoveCls.classList.remove("bi-brightness-low-fill");
    addRemoveCls.classList.add("bi-moon-fill");
    document.getElementsByClassName('rightSlide')[0].style.margin = "-16px 0 0 31px";

    // this code for light mode theme.
    document.documentElement.style.setProperty('--navbar-bg-color', '#c5c5c5') 
    document.documentElement.style.setProperty('--multi-text-color', 'white')
    document.documentElement.style.setProperty('--page-bg-color', '#c5c5c5')
    document.documentElement.style.setProperty('--box-bg-color', 'lightgrey')
    document.documentElement.style.setProperty('--paira-font-color', 'grey')
    document.documentElement.style.setProperty('--text-section-bg', '#c5c5c5')
    document.documentElement.style.setProperty('--contact-box-font-color', 'grey')
    document.documentElement.style.setProperty('--white-navbar-color', '#grey')
    document.documentElement.style.setProperty('--white-color', 'grey')
    document.documentElement.style.setProperty('--box-border-color', 'white')
    document.getElementsByClassName('bodyColor')[0].style.background = "#c5c5c5";  

  } else if (addRemoveCls.classList.contains("bi-moon-fill")) {
    addRemoveCls.classList.remove("bi-moon-fill");
    addRemoveCls.classList.add("bi-brightness-low-fill");

    // this code for dark mode theme.
    document.documentElement.style.setProperty('--navbar-bg-color', 'black')
    document.documentElement.style.setProperty('--multi-text-color', '#ffbd39');
    document.documentElement.style.setProperty('--page-bg-color', 'black')
    document.documentElement.style.setProperty('--box-bg-color', 'rgba(110, 103, 103, 0.299)')
    document.documentElement.style.setProperty('--paira-font-color', 'rgb(127, 127, 116)')
    document.documentElement.style.setProperty('--text-section-bg', 'black')
    document.documentElement.style.setProperty('--contact-box-font-color', 'grey')
    document.documentElement.style.setProperty('--white-navbar-color', 'white')
    document.documentElement.style.setProperty('--white-color', 'white')
    document.documentElement.style.setProperty('--box-border-color', 'grey')
    document.getElementsByClassName('bodyColor')[0].style.background = "black";
  };

}





// multi text typed in one line

const typed = new Typed('.multi-text', {
  strings: ['Front-End Developer', 'Back-End Developer', 'Web Desinger', 'YouTuber'],
  typeSpeed: 50,
  backSpeed: 100,
  backDelay: 200,
  loop: true
});


// scroll reveal start 

ScrollReveal({
  distance: '100px',
  duration: 2000,
  delay: 200
});

ScrollReveal().reveal('.ani1', { origin: 'left' });

ScrollReveal().reveal('.about-me, .resume, .service, .my-skills, .my-project, .contact-me', { origin: 'top' });

ScrollReveal().reveal('.resume-box1, .box1', { origin: 'top' });

ScrollReveal().reveal('.progress-bar', { origin: 'left' });

ScrollReveal().reveal('.number', { origin: 'top' });




// number counter code start here
function number(id) {
  idOne = document.getElementById(id);
  textValue = Number(document.getElementById(id).innerHTML);
  incrNum(0, textValue, idOne);
}

/*function increase the number.*/
function incrNum(i, textValue, idOne) {
  if (i <= textValue) {
    idOne.innerHTML = i;
    setTimeout(function () {//Delay a bit before calling the function again.
      incrNum(i + 1, textValue, idOne);
    }, 80);
  }
}

number("num1");
number("num2");
number("num3");
number("num4");




// click on project-image then open projects link.

let proImg1 = document.getElementById('proImgOne');
proImg1.addEventListener("click", function () {
  window.open("https://newuser123a.github.io/Sk_Burger")
})


let proImg2 = document.getElementById('proImgTwo');
proImg2.addEventListener("click", function () {
  window.open("https://codingwithnk.cf")
})


let proImg3 = document.getElementById('proImgThree');
proImg3.addEventListener("click", function () {
  window.open(" https://newuser123a.github.io/My-Portfolio")
})




//  clear button for clear form data.

let clrBtn = document.getElementById('clrBtn');

clrBtn.addEventListener("click", function () {
  document.getElementsByClassName('inptText')[0].value = "";
  document.getElementsByClassName('inptText')[1].value = "";
  document.getElementsByClassName('inptText')[2].value = "";
  document.getElementsByClassName('inptText')[3].value = "";

})



// all social links click on then open this links.

let twiter = document.getElementById('twitter');
twiter.addEventListener("click", function () {
  window.open("https://twitter.com")
})


let facebook = document.getElementById('facebook');
facebook.addEventListener("click", function () {
  window.open("https://facebook.com");
})


let instagram = document.getElementById('instagram');
instagram.addEventListener("click", function () {
  window.open("https://instagram.com");
})


let linkedin = document.getElementById('linkedin');
linkedin.addEventListener("click", function () {
  window.open("https://linkedin.com");
})


let github = document.getElementById('github');
github.addEventListener("click", function () {
  window.open("https://github.com");
})


let whatsapp = document.getElementById('whatsapp');
whatsapp.addEventListener("click", function () {
  window.open("https://whatsapp.com");
})


let myAddress = document.getElementById('address');
myAddress.addEventListener("click", function () {
  window.open("https://www.google.com/maps/place/28%C2%B015'37.3%22N+76%C2%B009'05.4%22E/@28.2603688,76.1505147,371m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d28.260367!4d76.151511?entry=ttu");
})

let phone = document.getElementById('phone');
phone.addEventListener("click", function () {
  window.open('tel:7988078920');
})


let email = document.getElementById('email');
email.addEventListener("click", function () {
  window.open("https://gmail.com");
})


let nameLink = document.getElementById('nameLink');
nameLink.addEventListener("click", function () {
  location.href = "index.html";
})



// contact boxe links open after click on the icons.

let addrs = document.getElementById('addrs');
addrs.addEventListener("click", function () {
  window.open("https://www.google.com/maps/place/28%C2%B015'37.3%22N+76%C2%B009'05.4%22E/@28.2603688,76.1505147,371m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d28.260367!4d76.151511?entry=ttu");
})

let num = document.getElementById('num');
num.addEventListener("click", function () {
  window.open('tel:7988078920');
})

let mail = document.getElementById('mail');
mail.addEventListener("click", function () {
  window.open("https://gmail.com");
})

let site = document.getElementById('site');
site.addEventListener("click", function () {
  window.open("https://codingwithnk.cf")
})

let hireBtn = document.getElementById('hireBtn');
hireBtn.addEventListener("click", function () {
  location.href = "index.html#msgMe";
})


// click on resume box then open links.

let matric = document.getElementById('matric');
matric.addEventListener("click", function () {
  window.open("https://www.gmssssmahendergarh.com");
})
let senSec = document.getElementById('senSec');
senSec.addEventListener("click", function () {
  window.open("https://www.google.com/maps/place/Bhartiya+Sr.+Sec.+School/@28.2483611,76.1475523,17z/data=!3m1!4b1!4m6!3m5!1s0x3912becbcf87ce33:0xd2ddd61794ecc2b1!8m2!3d28.2483564!4d76.1501272!16s%2Fg%2F11b8cf4tnf?entry=ttu");
})

let pistolShooting = document.getElementById('pistolShooting');
pistolShooting.addEventListener("click", function () {
  window.open("https://www.google.com/maps/place/Mission+Olympic+Sports+Shooting+Academy/@28.2773392,76.1278839,17z/data=!3m1!4b1!4m6!3m5!1s0x3912bf8aa272817b:0x2129d28f5f59234a!8m2!3d28.2773345!4d76.1304588!16s%2Fg%2F11ghtc_tmh?entry=ttu");
})

let MMV = document.getElementById('MMV');
MMV.addEventListener("click", function () {
  window.open("https://www.govtitimahendergarh.org");
})

let DCA = document.getElementById('DCA');
DCA.addEventListener("click", function () {
  window.open("https://www.google.com/maps/place/Sci+computer+institute/@28.2664372,76.1434797,17z/data=!3m1!4b1!4m6!3m5!1s0x3912bf2669bf012b:0x8e1cc1c13e59967!8m2!3d28.2664325!4d76.1460546!16s%2Fg%2F11kd7q018y?entry=ttu");
})

let BCA = document.getElementById('BCA');
BCA.addEventListener("click", function () {
  window.open("https://kalingauniversity.ac.in");
})


