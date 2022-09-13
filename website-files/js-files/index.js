var mobileNavbarState; // Open = true; Closed = false;
var footerState;

document.addEventListener('DOMContentLoaded', () => {
    mobileNavbarState = false; // Open = true; Closed = false;
    footerState = false;
});

function toggleMobileNavbar() {
    var elm1 = document.getElementsByClassName("mobilemenu-dropdown-body");
    var elm2 = document.getElementsByClassName("body-div-1");
    var footer = document.getElementsByClassName("footer-div-1");
    try {
        if (!mobileNavbarState) {
            // console.log("uh-oh2");
            // console.log(mobileNavbarState);
            try {
                elm1[0].style.setProperty('display', 'flex');
            } catch { console.log("elm1 error MNS false");}
            try {
                elm2[0].style.setProperty('display', 'none');
            } catch { console.log("elm1 error MNS false");}
            try {
            document.getElementById('span-1').classList.add("mobile-menu-bars-span-animation-1");
            document.getElementById('span-2').classList.add("mobile-menu-bars-span-animation-2");
            document.getElementById('span-3').classList.add("mobile-menu-bars-span-animation-3");
            } catch {
                console.log('error1');
            }
            try {
                document.getElementById('span-1').classList.remove("mobile-menu-bars-span-animation-1-not");
                document.getElementById('span-2').classList.remove("mobile-menu-bars-span-animation-2-not");
                document.getElementById('span-3').classList.remove("mobile-menu-bars-span-animation-3-not");
            } catch {
                console.log("error3");
            }
            try {
                footer[0].style.setProperty('display', 'none');
            } catch {console.log("Error With footer display (toggleMobileNavbar())");}
            mobileNavbarState = true;
            return;
        } 
        if (mobileNavbarState) {
            // console.log("uh-oh1");
            // console.log(mobileNavbarState);
            try {
                elm1[0].style.setProperty('display', 'none');
            } catch { console.log("elm1 error MNS true");}
            try {
                elm2[0].style.setProperty('display', 'flex');
            } catch { console.log("elm1 error MNS true");}
            try {
                document.getElementById('span-1').classList.add("mobile-menu-bars-span-animation-1-not");
                document.getElementById('span-2').classList.add("mobile-menu-bars-span-animation-2-not");
                document.getElementById('span-3').classList.add("mobile-menu-bars-span-animation-3-not");
            } catch {
                console.log("error3");
            }
            try {
                document.getElementById('span-1').classList.remove("mobile-menu-bars-span-animation-1");
                document.getElementById('span-2').classList.remove("mobile-menu-bars-span-animation-2");
                document.getElementById('span-3').classList.remove("mobile-menu-bars-span-animation-3");
            } catch {
                console.log("error3");
            }
            try {
                footer[0].style.setProperty('display', 'flex');
            } catch {console.log("Error With footer display (toggleMobileNavbar())");}
            mobileNavbarState = false;
            return;
        }
    } catch {
        console.log("error");
    }
}

function footerAction(){
    var background = document.getElementsByClassName("footer-div-1");
    var rightBar = document.getElementsByClassName("right-bar");
    var leftBar = document.getElementsByClassName("left-bar");
    var footerBody = document.getElementsByClassName("footer-popup");
    var body = document.getElementsByClassName("body-div-1");
    var headerButton = document.getElementsByClassName("mobilemenu-dropdown-btn");
    console.log("Hello");
    try {
        if(!footerState){
            console.log("here?");
            background[0].style.setProperty('background-color', 'white');
            rightBar[0].classList.add("open-right-bar");
            leftBar[0].classList.add("open-left-bar");
            body[0].style.setProperty('display','none');
            footerBody[0].style.setProperty('display', 'flex');
            headerButton[0].style.setProperty('display', 'none');
            footerState = true;
            return;
        }
        if(footerState){
            console.log("here??");
            background[0].style.setProperty('background-color', 'black');
            rightBar[0].classList.remove("open-right-bar");
            leftBar[0].classList.remove("open-left-bar");
            body[0].style.setProperty('display','flex');
            footerBody[0].style.setProperty('display', 'none');
            headerButton[0].style.setProperty('display', 'flex');
            footerState = false;
            return;
        }
        
    } catch {console.log ("Error in logic (footerAction())");}
}