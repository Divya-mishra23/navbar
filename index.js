const navBar = document.getElementById('nav-bar');
const menuBtn = document.getElementById('menuBtn');
const closeBtn = document.getElementById('close');
const navList = document.getElementById('nav-list');

menuBtn.onclick = function display(){
    navBar.style.display = 'block';
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'block';
    navBar.style.position = 'absolute';
    navBar.style.justifyContent = 'center';
    navBar.style.alignItems = 'center';
    navList.style.display = 'flex';
    navList.style.flexDirection = 'column';
};
closeBtn.onclick = function close(){
    navBar.style.display = 'none';
    menuBtn.style.display = 'block';
};
window.onclick = function exit(){
    if(event.target === navBar) {
        navBar.style.display = 'none';
    }
}