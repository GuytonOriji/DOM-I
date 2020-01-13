const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])
 
let page = document.querySelector(".container ")
let main_con = document.querySelector(".container .main-content")

//header
let a_links = document.querySelectorAll("header nav a")
let header_ = document.querySelector("header  ")
      a_links[0].textContent = siteContent['nav']["nav-item-1"]
      a_links[1].textContent = siteContent['nav']["nav-item-2"]
      a_links[2].textContent = siteContent['nav']["nav-item-3"]
      a_links[3].textContent = siteContent['nav']["nav-item-4"]
      a_links[4].textContent = siteContent['nav']["nav-item-5"]
      a_links[5].textContent = siteContent['nav']["nav-item-6"]

      page.style=`
      border:double 3px firebrick;
      background-color:rgba(0,0,0,.4);
      -webkit-text-fill-color:azure;
      color:azure;
      `


      header_.style=`
      border:double 3px firebrick;
      background-color:rgba(0,0,0,.4);
      -webkit-text-fill-color:azure;
      color:azure;
      `

      
//header

//section with title, button, & header image
let introTitle = document.querySelector(".cta .cta-text h1")
let buttonTxt = document.querySelector(".cta .cta-text button")
let imgHeader = document.querySelector("#cta-img")
let cta = document.querySelectorAll(".main-content div div")

introTitle.innerHTML = `${siteContent['cta']['h1'].slice(0,3)}<br>
${siteContent['cta']['h1'].slice(3,6)}<br>${siteContent['cta']['h1'].slice(6,14)}`
buttonTxt.textContent = siteContent['cta']['button']
buttonTxt.style=`
border:double 3px firebrick;
background-color:rgba(0,0,0,.4);
-webkit-text-fill-color:azure;
color:azure;
`
cta[0].style=`
border:double 3px firebrick;
      background-color:rgba(0,0,0,.4);
      -webkit-text-fill-color:azure;
      color:azure;
      padding:50px 0px;
`

cta[1].style=`
      border:double 3px firebrick;
      background-color:rgba(0,0,0,.4);
      -webkit-text-fill-color:azure;
      color:azure;
      padding:50px 0px;
`
imgHeader.src=
siteContent['cta']['img-src']
//section with title, button, & header image

//section with services, product, vision
let featuresH1 = document.querySelector(".container .main-content .top-content .text-content:nth-child(1) h4")
let featuresP = document.querySelector(".container .main-content .top-content .text-content:nth-child(1) p")
let aboutH1 = document.querySelector(".container .main-content .top-content .text-content:nth-child(2) h4")
let aboutP = document.querySelector(".container .main-content .top-content .text-content:nth-child(2) p")
let middleImg = document.querySelector(".container .main-content .middle-img")
let allBtmTxtContent = document.querySelectorAll(".container .main-content .bottom-content .text-content")
let allBtmTxtParent = document.querySelector(".container .main-content .bottom-content ")


featuresH1.textContent = siteContent['main-content']['features-h4']
featuresP.textContent = siteContent['main-content']['features-content']
aboutH1.textContent = siteContent['main-content']['about-h4']
aboutP.textContent = siteContent['main-content']['about-content']
middleImg.parentNode= siteContent['main-content']['middle-img-src']
middleImg.style='font-weight:bolder;text-shadow:0 0 5px #000;'
allBtmTxtContent[0].children[0].textContent = siteContent['main-content']['services-h4']
allBtmTxtContent[0].children[1].textContent = siteContent['main-content']['services-content']

allBtmTxtParent.style=`
border:double 3px firebrick;
background-color:rgba(0,0,0,.4);
-webkit-text-fill-color:azure;
color:azure;
padding:50px 0px;
`


allBtmTxtContent[1].children[0].textContent = siteContent['main-content']['product-h4']
allBtmTxtContent[1].children[1].textContent = siteContent['main-content']['product-content']
allBtmTxtContent[2].children[0].textContent = siteContent['main-content']['vision-h4']
allBtmTxtContent[2].children[1].textContent = siteContent['main-content']['vision-content']
//section with services, product, vision

//contact section & footer
let contactSec = document.querySelector(".container .contact")
let footerSec = document.querySelector(".container footer")


contactSec.children[0].textContent = siteContent['contact']['contact-h4']
contactSec.children[1].innerHTML = `${siteContent['contact']['address'].slice(0,19)}<br>${siteContent['contact']['address'].slice(19,34)}`
contactSec.children[2].textContent = siteContent['contact']['phone']
contactSec.children[3].textContent = siteContent['contact']['email']
footerSec.children[0].textContent = siteContent['footer']['copyright']




contactSec.style=`
font-weight:bolder;
-webkit-transition:2s ease-in-out;
transition:2s ease-in-out;
text-shadow:0 0 5px #000;
-webkit-animation:slide 2s linear infinite;
animation:slide 2s linear infinite;
`
footerSec.style=`
border:double 3px firebrick;
background-color:rgba(0,0,0,.4);
-webkit-text-fill-color:azure;
color:azure;
padding:50px 0px;
`
//contact section & footer

//animation force

const body_ = document.querySelector("body")
let styler_ = document.createElement("style")
styler_.type = 'text/css'

    styler_.innerHTML=`
    @keyframes slide{
      from{
        padding-left:80%;
      }
      

      to{
        padding-left:0%;

      }
    }
    `
body_.appendChild(styler_)