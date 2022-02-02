function handleDialog() {
    let x = document.getElementById("dialog");
    x.setAttribute('open', true);
}
function closefun() {
    let x = document.getElementById("dialog");
    x.removeAttribute('open', true);
}
function submit() {
    let apendsection = document.createElement("div");
    let title = document.createElement("p");
    let description = document.createElement("p");
    let date = document.createElement("p");
    let innerDiv = document.getElementById("apendDiv");
    // append div in mainSection
    innerDiv.appendChild(apendsection);
    apendsection.appendChild(title);
    apendsection.appendChild(description);
    apendsection.appendChild(date);
    // creating variable of required inputBox
    let intitle = document.getElementById("inptitle").value;
    let indescription = document.getElementById("description").value;
    let indate = document.getElementById("inpdate").value;
    let incolor = document.getElementById("colorpic").value;
    // inner html of inputBox
    title.innerHTML = intitle;
    description.innerHTML = indescription;
    date.innerHTML = indate;
    apendsection.style.backgroundColor = incolor;
    // styling on appendDiv
    apendsection.style.padding = "10px";
    apendsection.style.borderRadius = "8px";
    apendsection.style.fontSize = "18px";
    title.style.fontSize = "24px";
    title.style.fontWeight = "500";
    title.style.textTransform = "capitalize";
    description.style.textTransform = "capitalize";
    description.style.fontSize = "16px";
    // appending button
    let buttonDiv = document.createElement("div");
    let deletebtn = document.createElement("button");
    deletebtn.innerHTML = "delete";
    let editbtn = document.createElement("button");
    editbtn.innerHTML = "edit";
    buttonDiv.appendChild(deletebtn); 
    buttonDiv.appendChild(editbtn); 
    apendsection.appendChild(buttonDiv);
    // creating id for custom styling external
    deletebtn.className ="deletestyle";
    editbtn.className ="editstyle";
    // styling of edit & delete button
    buttonDiv.style.float="right";
    deletebtn.style.transition="0.5s ease";
    deletebtn.style.padding = "5px 12px";
    deletebtn.style.borderRadius = "8px";
    deletebtn.style.color = "#fff";
    deletebtn.style.textTransform = "capitalize";
    editbtn.style.float="right";
    editbtn.style.transition="0.5s ease";
    editbtn.style.padding = "5px 12px";
    editbtn.style.borderRadius = "8px";
    editbtn.style.color = "#fff";
    editbtn.style.textTransform = "capitalize";





    
}
