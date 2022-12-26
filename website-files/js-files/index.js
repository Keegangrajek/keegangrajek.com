var mobileNavbarState = false;
var footerState;

document.addEventListener('DOMContentLoaded', function(){
    var l = document.getElementsByClassName("head-div-1");
    var bodyDiv = document.getElementsByClassName("body-div");
    var menuBody = document.getElementsByClassName("mobilemenu-dropdown-body");
    var footerBody = document.getElementsByClassName("foot-popup");
    // var menuBtn = document.getElementsByClassName('dropdown-btns');
    l[0].style.setProperty('display', 'flex');
    l[0].style.setProperty('height', '60px');
    menuBody[0].style.setProperty('min-height', '0%');
    menuBody[0].style.setProperty('max-height', '0%');
    bodyDiv[0].style.setProperty('height', 'calc(100% - 60px)');
    footerBody[0].style.setProperty('height', '0%');
    footerState = false;
    // setTimeout(function(){
    //     l[0].style.setProperty('height', '400px');
    // }, 0);
    // setTimeout(function(){
    //     l[0].style.setProperty('height', '60px');
    // }, initial);
    // setTimeout(function(){
    //     p[0].style.setProperty('display', 'flex');
    //     p[0].style.setProperty('height', '0px');
    // }, 0);
    // setTimeout(function(){
    //     p[0].style.setProperty('height', '400px');
    // }, initial);
    // setTimeout(function(){
    //     p[0].style.setProperty('height', '0px');
    // }, 1000+initial);
    // setTimeout(function(){
    //     p[0].style.setProperty('display', 'none');
    // }, 2000+initial);    
});

function toggleMobileNavbar() {
    var menuBody = document.getElementsByClassName("mobilemenu-dropdown-body");
    var bodyDiv = document.getElementsByClassName("body-div");
    // var footDiv = document.getElementsByClassName("foot-div-1");
    var menuBtn = document.getElementsByClassName('dropdown-btns');
    try {
        if (!mobileNavbarState) {
            try {
                document.getElementById('span-1').classList.add("mobile-menu-bars-span-animation-1");
                document.getElementById('span-2').classList.add("mobile-menu-bars-span-animation-2");
                document.getElementById('span-3').classList.add("mobile-menu-bars-span-animation-3");
                document.getElementById('span-1').classList.remove("mobile-menu-bars-span-animation-1-not");
                document.getElementById('span-2').classList.remove("mobile-menu-bars-span-animation-2-not");
                document.getElementById('span-3').classList.remove("mobile-menu-bars-span-animation-3-not");
                menuBody[0].style.setProperty('min-height', '100%');
                menuBody[0].style.setProperty('max-height', 'fit-content');
                // footDiv[0].style.setProperty('height', '0px');
                bodyDiv[0].style.setProperty('transform', 'translatey(-200px)');
                for (let index = 0; index < menuBtn.length; index++) {
                    menuBtn[index].style.setProperty('display', 'flex');
                }
                setTimeout(function(){
                    bodyDiv[0].style.setProperty('display', 'none');
                }, 300);
            } catch {
                console.log('error1');
            }
            mobileNavbarState = true;
            return;
        } 
        if (mobileNavbarState) {
            try {
                document.getElementById('span-1').classList.add("mobile-menu-bars-span-animation-1-not");
                document.getElementById('span-2').classList.add("mobile-menu-bars-span-animation-2-not");
                document.getElementById('span-3').classList.add("mobile-menu-bars-span-animation-3-not");
                document.getElementById('span-1').classList.remove("mobile-menu-bars-span-animation-1");
                document.getElementById('span-2').classList.remove("mobile-menu-bars-span-animation-2");
                document.getElementById('span-3').classList.remove("mobile-menu-bars-span-animation-3");
                // footDiv[0].style.setProperty('height', '20px');
                menuBody[0].style.setProperty('max-height', '0%');
                menuBody[0].style.setProperty('min-height', '0%');
                setTimeout(function(){
                    for (let index = 0; index < menuBtn.length; index++) {
                        menuBtn[index].style.setProperty('display', 'none');
                    }
                }, 150);
                setTimeout(function(){
                        bodyDiv[0].style.setProperty('display', 'flex');
                        bodyDiv[0].style.setProperty('transform', 'translatey(0px)');
                }, 150);
            } catch {
                console.log("error3");
            }
            mobileNavbarState = false;
            return;
        }
    } catch {
        console.log("error");
    }
}

function footerAction(){
    var background = document.getElementsByClassName("foot-div-1");
    var rightBar = document.getElementsByClassName("right-bar");
    var leftBar = document.getElementsByClassName("left-bar");
    var footerBody = document.getElementsByClassName("foot-popup");
    var body = document.getElementsByClassName("body-div");
    var headerButton = document.getElementsByClassName("mobilemenu-dropdown-btn");
    var headerTitle = document.getElementsByClassName("head-div-1");
    // let height = document.querySelector('.foot-popup');
    console.log("Hello");
    try {
        if(!footerState){
            console.log("ayooo");
            headerTitle[0].style.setProperty('justify-content', 'center');
            background[0].style.setProperty('background-color', 'white');
            rightBar[0].classList.add("open-right-bar");
            leftBar[0].classList.add("open-left-bar");
            footerBody[0].style.setProperty('display', 'flex');
            setTimeout(function(){
                footerBody[0].style.setProperty('height', 'calc(100% - 60px)');
            }, 0);
            headerButton[0].style.setProperty('display', 'none');
            body[0].style.setProperty('transform', 'translatey(200px)');
            setTimeout(function(){  
                body[0].style.setProperty('display', 'none');
                body[0].style.setProperty('transform', 'translatey(0px)');
            }, 300);
            footerState = true;
            console.log("helo");
            return;
        }
        if(footerState){
            headerTitle[0].style.setProperty('justify-content', 'space-between');
            background[0].style.setProperty('background-color', '#222120');
            rightBar[0].classList.remove("open-right-bar");
            leftBar[0].classList.remove("open-left-bar");
            body[0].style.setProperty('display','flex');
            footerBody[0].style.setProperty('height', '0%');
            setTimeout(function(){
                footerBody[0].style.setProperty('display', 'none');
            }, 300);
            headerButton[0].style.setProperty('display', 'flex');
            footerState = false;
            console.log("aye");
            return;
        }
    } catch {console.log("Error in logic footerAction()");}
}

// Code derrived from https://www.w3schools.com/howto/howto_js_copy_clipboard.asp

function copyDiscord() {
    // Get the text field
    var copyText = document.getElementById("discordTag");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
}

// These functions make the hover animation for the mobilemenu dropdown button
// This pretty much just changes the color of the spans upon hovering over the box that contains them

function hoverOnMobileMenuButton(){
    var l = document.getElementsByClassName("mobilemenu-dropdown-span");
    for (let p = 0; p < l.length; p++) {
        const element = l[p];
        element.classList.add("mobilemenu-dropdown-span-hover");
    }
    return;
}
function hoverOutMobileMenuButton(){
    var l = document.getElementsByClassName("mobilemenu-dropdown-span");
    for (let p = 0; p < l.length; p++) {
        const element = l[p];
        element.classList.remove("mobilemenu-dropdown-span-hover");
    }
    return;
}

// This code below is my discovery of cross-origin policy
// I can't change the code within another iframe that I don't have access to the origin (in this case google)
// it shoots out this error Uncaught 'DOMException: Blocked a frame with origin "null" from accessing a cross-origin frame.'

// function changeCalendar(){
//     console.log("hello");
//     setTimeout(function(){
//         var iframe = document.getElementById("calendar-embed");
//         var l = iframe.contentWindow.document.getElementById("calendarTitle");
//         l.style.setProperty('display','none');
//     }, 1000);
// }

// window.onload = function() {
//     let myiFrame = document.getElementById("calendar-embed");
//     let doc = myiFrame.contentDocument;
//     console.log(doc);
//     doc.body.innerHTML = doc.body.innerHTML + '<style>/******* Put your styles here *******</style>';
//  }
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}