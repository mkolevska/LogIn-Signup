let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");
let logInBtn = document.querySelector(".bx-user-circle");
let homeBtn =  document.querySelector(" bx-home-circle");
let statisticBtn = document.querySelector("bx-line-chart");
// let simulatorBtn = doument.querySelector("bx-pie-chart-alt-2");
let infoBtn = document.querySelector("bx-help-circle");
let sidebarById = document.getElementById("#sidebars");

//Profile elements
let profileElement = document.getElementById("profile");
let welcomeElement = document.getElementById("welcome");
let nameElement = document.getElementById("nameOfUser");
let logOutBtn = document.getElementById('log_out');
logOutBtn.style.visibility = 'hidden';

//localStorage Data needed for creating profile
let name = localStorage.getItem('name');
console.log(name);
let email = localStorage.getItem('email');




closeBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();//calling the function
  
});

searchBtn.addEventListener("click", ()=>{ // Sidebar open when you click on the search iocn
  sidebar.classList.toggle("open");
  menuBtnChange(); //calling the function
});
logInBtn.addEventListener("click",()=>{
  sidebar.classList.toggle("open");
  menuBtnChange();
 

} )

//Profile Code
if(name != null && name != ''){
  welcomeElement.innerHTML = 'Welcome  : ';
  nameElement.innerHTML = name;
  logOutBtn.style.visibility = 'visible';

}


//LogOut of progile code
logOutBtn.addEventListener('click', function(){
  welcomeElement.innerHTML = '';
  nameElement.innerHTML = '';
  localStorage.removeItem('name');
  localStorage.removeItem('email');
  logOutBtn.style.visibility = 'hidden';
})





// following are the code to change sidebar button(optional)
function menuBtnChange() {
 if(sidebar.classList.contains("open")){
   closeBtn.classList.replace("bx-menu", "bx-menu-alt-right");//replacing the iocns class
 }else {
   closeBtn.classList.replace("bx-menu-alt-right","bx-menu");//replacing the iocns class
 }
}