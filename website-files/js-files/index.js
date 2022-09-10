var mobileNavbarState; // Open = true; Closed = false;

document.addEventListener('DOMContentLoaded', () => {
    mobileNavbarState = false; // Open = true; Closed = false;
});

function toggleMobileNavbar() {
    var elm = document.getElementsByClassName("header-link-mobilemenu-dropdown");
    var box = document.getElementsByClassName('body-box-5');
    var box2 = document.getElementsByClassName('body-box-1');
    var box3 = document.getElementsByClassName('body-about-box-1');
    var box4 = document.getElementsByClassName('body-about-box-10');
    var notifyBar = document.getElementsByClassName('notify-bar');
    try {
        if (!mobileNavbarState) {
            console.log("uh-oh2");
            console.log(mobileNavbarState);
            elm[0].classList.toggle("header-link-mobilemenu-dropdown-display-not");
            elm[0].classList.toggle("header-link-mobilemen-dropdown-display-yes");
            document.getElementById('span-1').className = 'mobile-menu-bars-span-animation-1';
            document.getElementById('span-2').className = 'mobile-menu-bars-span-animation-2';
            document.getElementById('span-3').className = 'mobile-menu-bars-span-animation-3';
            mobileNavbarState = true;
            try {
                box[0].style.setProperty('display', 'none');
            } catch { console.log("box")}
            try {
                box2[0].style.setProperty('display', 'none');
            } catch { console.log("box2")}
            try {
                box3[0].style.setProperty('display', 'none');
            } catch { console.log("box3")}
            try {
                box4[0].style.setProperty('display', 'none');
            } catch { console.log("box4")}
            try {
                box4[1].style.setProperty('display', 'none');
            } catch { console.log("box4sub")}
            try {
                notifyBar[0].style.setProperty('display', 'none');
            } catch {
                console.log("notify-bar");
            }
            return;
        } 
        if (mobileNavbarState) {
            console.log("uh-oh1");
            console.log(mobileNavbarState);
            elm[0].classList.toggle("header-link-mobilemenu-dropdown-display-not");
            elm[0].classList.toggle("header-link-mobilemenu-dropdown-display-yes");
            document.getElementById('span-1').className = 'mobile-menu-bars-span-animation-1-not';
            document.getElementById('span-2').className = 'mobile-menu-bars-span-animation-2-not';
            document.getElementById('span-3').className = 'mobile-menu-bars-span-animation-3-not';
            mobileNavbarState = false;
            try {
                box[0].style.setProperty('display', 'flex');
            } catch { console.log("box")}
            try { 
                box2[0].style.setProperty('display', 'flex');
            } catch { console.log("box2")}
            try {
                box3[0].style.setProperty('display', 'flex');
            } catch { console.log("box3")}
            try {
                box4[0].style.setProperty('display', 'flex');
            } catch { console.log("box4")}
            try {
                box4[1].style.setProperty('display', 'flex');
            } catch { console.log("box4sub")}
            try {
                notifyBar[0].style.setProperty('display', 'flex');
            } catch {
                console.log("notify-bar");
            }
            return;
        }
    } catch {
        console.log("error");
    }
}