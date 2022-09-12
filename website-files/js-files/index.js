var mobileNavbarState; // Open = true; Closed = false;

document.addEventListener('DOMContentLoaded', () => {
    mobileNavbarState = false; // Open = true; Closed = false;
});

function toggleMobileNavbar() {
    var elm1 = document.getElementsByClassName("mobilemenu-dropdown-body");
    var elm2 = document.getElementsByClassName("body-div-1");
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
            mobileNavbarState = false;
            return;
        }
    } catch {
        console.log("error");
    }
}