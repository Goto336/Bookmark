//Shortcut 
var lS = localStorage;

//Click Function
document.querySelector(".button").addEventListener("click", function(){

  //Getting the value of the user's inputs and storing it
  var ipt1 = document.querySelector(".userName").value;
  console.log(ipt1);
 
  var ipt2 = document.querySelector(".userLink").value;
  console.log(ipt2);
   
  //Setting the user's values in Local Storage
  lS.setItem(ipt1, ipt2);
   
  //Storing the templates of each website to be added
  var temp1 = `<h3 class="new">${ipt1}</h3>`
   
  var temp2 = `<a href=${ipt2} class=${ipt1}> ${ipt1}<a/>`
 
  //Displaying/inserting websites 
  document.querySelector(".webName").insertAdjacentHTML("beforeend", temp1);
 
  document.querySelector(".webLink").insertAdjacentHTML("beforeend", temp2);     
});