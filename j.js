 //let btn = document.querySelector("button");
 
//btn.addEventListener( "click", function(event){
  //  console.log(event);
//console.log("button click");
 //});

 //btn.addEventListener( "dblclick", function(event){
//console.log(event);
//console.log("button click");
 //});

 //let btn = document.querySelector("input");

 //btn.addEventListener("keydown",function(event){
   // console.log("key =",event.key);
    //console.log("Code =",event.code);
    //console.log("keyboard press");

 //});

 let form = document.querySelector("form");

 form.addEventListener("submit",function(event){
  event.preventDefault();

  let usr = this.elements [0];
  let pass = this.elements[1];
  console.log(usr.value);
  console.log(pass.value);
alert(`Congratulations ! ${usr.value} your password is ${pass.value}`)

 });