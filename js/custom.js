function dialogfun(){
  let x=  document.getElementById("dialog");
  x.setAttribute('open',true);
}
function closefun(){
    let x=  document.getElementById("dialog");
    x.removeAttribute('open',true)
}