document.getElementById("updatebtn").style.display = "none";
function func(event) {
    event.preventDefault();
}
function handleDialog() {
    let x = document.getElementById("dialog");
    x.setAttribute('open', true);
}
function closefun() {
    let x = document.getElementById("dialog");
    x.removeAttribute('open', true);
}
// globally local random ID variable declaration
let a;
let b;
let c;
let d;
// globally array

let array = [];
function submitFunc() {
    let apendsection = document.createElement("div");
    let title = document.createElement("p");
    let description = document.createElement("p");
    let date = document.createElement("p");
    let innerDiv = document.getElementById("apendDiv");
    let label1 = document.createElement("label");
    let label2 = document.createElement("label");
    let label3 = document.createElement("label");
    // append div in mainSection
    innerDiv.appendChild(apendsection);
    apendsection.appendChild(label1);
    apendsection.appendChild(title);
    apendsection.appendChild(label2);
    apendsection.appendChild(description);
    apendsection.appendChild(label3);
    apendsection.appendChild(date);
    // creating variable of required inputBox
    let intitle = document.getElementById("inptitle").value;
    let indescription = document.getElementById("description").value;
    let indate = document.getElementById("inpdate").value;
    let incolor = document.getElementById("colorpic").value;
    // inner html of inputBox
    label1.innerHTML = "Title: ";
    title.innerHTML = intitle;
    label2.innerHTML = "Description: ";
    description.innerHTML = indescription;
    label3.innerHTML = "Date:";
    date.innerHTML = indate;
    apendsection.style.backgroundColor = incolor;
    apendsection.style.backgroundImage = `linear-gradient(20deg,${incolor}, #00d4ff)`;
    // random ID generate
    let ranValue = Math.random() * 100;
    // assigning ID of different field
    title.id = "titleId" + ranValue;
    date.id = "dateId" + ranValue;
    description.id = "desId" + ranValue;
    // styling on appendDiv
    apendsection.style.padding = "20px 20px";
    apendsection.style.borderRadius = "8px";
    apendsection.style.fontSize = "18px";
    title.style.fontSize = "20px";
    description.style.fontSize = "20px";
    description.style.fontStyle = "italic";
    date.style.fontSize = "20px";
    title.style.textTransform = "capitalize";
    description.style.textTransform = "capitalize";
    label1.style.fontSize = "20px";
    label2.style.fontSize = "20px";
    label1.style.fontSize = "20px";
    label1.style.fontWeight = "600";
    label2.style.fontWeight = "600";
    label3.style.fontWeight = "600";
    // appending button
    let buttonDiv = document.createElement("div");
    let deletebtn = document.createElement("button");
    deletebtn.innerHTML = "delete";
    let editbtn = document.createElement("button");
    editbtn.innerHTML = "edit";
    buttonDiv.appendChild(deletebtn);
    buttonDiv.appendChild(editbtn);
    apendsection.appendChild(buttonDiv);
    // creating classes for custom styling external
    deletebtn.className = "deletestyle";
    editbtn.className = "editstyle";
    apendsection.className = "divstyle";
    // styling of edit & delete button
    buttonDiv.style.float = "right";
    deletebtn.style.transition = "0.5s ease";
    deletebtn.style.padding = "5px 12px";
    deletebtn.style.borderRadius = "8px";
    deletebtn.style.color = "#fff";
    deletebtn.style.textTransform = "capitalize";
    editbtn.style.float = "right";
    editbtn.style.transition = "0.5s ease";
    editbtn.style.padding = "5px 12px";
    editbtn.style.borderRadius = "8px";
    editbtn.style.color = "#fff";
    editbtn.style.textTransform = "capitalize";
    // delete item on click
    apendsection.id = "uniqueId" + ranValue;
    // calling delete function on click
    deletebtn.onclick = function () {
        deletes("uniqueId" + ranValue);
    };
    // edit functionality
    editbtn.onclick = function () {
        editvalue("titleId" + ranValue, "desId" + ranValue, "dateId" + ranValue, "uniqueId" + ranValue);
    };
    // empty dialogbox on load
    document.getElementById("inptitle").value = "";
    document.getElementById("description").value = "";
    document.getElementById("inpdate").value = "";
    // dialog box remove attribute
    let x = document.getElementById("dialog");
    x.removeAttribute('open', true);
    // pushing element in array as a object
    let obj = { title: intitle, dec: indescription,col: incolor,date:indate };
    array.push(obj);
    console.log(array);
}
// delete global function
function deletes(id) {
    var y = document.getElementById(id);
    y.remove();
}
// global edit function
function editvalue(id1, id2, id3, id4) {
    let x = document.getElementById("dialog");
    x.setAttribute('open', true);
    let oper1 = document.getElementById(id1);
    let oper2 = document.getElementById(id2);
    let oper3 = document.getElementById(id3);
    let oper4 = document.getElementById(id4).style.backgroundColor;
    document.getElementById("inptitle").value = oper1.innerHTML;
    document.getElementById("description").value = oper2.innerHTML;
    document.getElementById("inpdate").value = oper3.innerHTML;
    document.getElementById("colorpic").value = oper4;
    // assigning ID to other variable
    a = id1;
    b = id2;
    c = id3;
    d = id4;
    document.getElementById("updatebtn").style.display = "block";
    document.getElementById("submitbtn").style.display = "none";
}
// globally update function
function updateFunc() {
    let title = document.getElementById("inptitle").value;
    let description = document.getElementById("description").value;
    let date = document.getElementById("inpdate").value;
    let color = document.getElementById("colorpic").value;
    document.getElementById(a).innerHTML = title;
    document.getElementById(b).innerHTML = description;
    document.getElementById(c).innerHTML = date;
    document.getElementById(d).style.backgroundColor = color;
    document.getElementById("updatebtn").style.display = "none";
    document.getElementById("submitbtn").style.display = "inline-block";
}
// globally search function
function searchfunc() {
    let inputvalue = document.getElementById("inpsearch").value;
    let array2 = array.filter(function (value) {
        if (value.title.includes(inputvalue)) {
            return true;
        }
        else if (value.dec.includes(inputvalue)) {
            return true;
        }
        else {
            return false;
        }
    });
    console.log('test',array2);
    document.getElementById("apendDiv").innerHTML = "";
    for (let i = 0; i < array2.length; i++) {
        

        let apendsection = document.createElement("div");
        let title = document.createElement("p");
        let description = document.createElement("p");
        let date = document.createElement("p");
        let innerDiv = document.getElementById("apendDiv");
        let label1 = document.createElement("label");
        let label2 = document.createElement("label");
        let label3 = document.createElement("label");
        // append div in mainSection
        innerDiv.appendChild(apendsection);
        apendsection.appendChild(label1);
        apendsection.appendChild(title);
        apendsection.appendChild(label2);
        apendsection.appendChild(description);
        apendsection.appendChild(label3);
        apendsection.appendChild(date);
        // creating variable of required inputBox
        let intitle = document.getElementById("inptitle").value;
        let indescription = document.getElementById("description").value;
        let indate = document.getElementById("inpdate").value;
        let incolor = document.getElementById("colorpic").value;
        // inner html of inputBox
        label1.innerHTML = "Title: ";
        title.innerHTML = array2[i].title;
        label2.innerHTML = "Description: ";
        description.innerHTML = array2[i].dec;
        label3.innerHTML = "Date:";
        date.innerHTML = array2[i].date;
        apendsection.style.backgroundColor = array2[i].col;
        apendsection.style.backgroundImage = `linear-gradient(20deg,${incolor}, rgb(242,249,6))`;
        // random ID generate
        let ranValue = Math.random() * 100;
        // assigning ID of different field
        title.id = "titleId" + ranValue;
        date.id = "dateId" + ranValue;
        description.id = "desId" + ranValue;
        // styling on appendDiv
        apendsection.style.padding = "20px 20px";
        apendsection.style.borderRadius = "8px";
        apendsection.style.fontSize = "18px";
        title.style.fontSize = "20px";
        description.style.fontSize = "20px";
        description.style.fontStyle = "italic";
        date.style.fontSize = "20px";
        title.style.textTransform = "capitalize";
        description.style.textTransform = "capitalize";
        label1.style.fontSize = "20px";
        label2.style.fontSize = "20px";
        label1.style.fontSize = "20px";
        label1.style.fontWeight = "600";
        label2.style.fontWeight = "600";
        label3.style.fontWeight = "600";
        // appending button
        let buttonDiv = document.createElement("div");
        let deletebtn = document.createElement("button");
        deletebtn.innerHTML = "delete";
        let editbtn = document.createElement("button");
        editbtn.innerHTML = "edit";
        buttonDiv.appendChild(deletebtn);
        buttonDiv.appendChild(editbtn);
        apendsection.appendChild(buttonDiv);
        // creating classes for custom styling external
        deletebtn.className = "deletestyle";
        editbtn.className = "editstyle";
        apendsection.className = "divstyle";
        // styling of edit & delete button
        buttonDiv.style.float = "right";
        deletebtn.style.transition = "0.5s ease";
        deletebtn.style.padding = "5px 12px";
        deletebtn.style.borderRadius = "8px";
        deletebtn.style.color = "#fff";
        deletebtn.style.textTransform = "capitalize";
        editbtn.style.float = "right";
        editbtn.style.transition = "0.5s ease";
        editbtn.style.padding = "5px 12px";
        editbtn.style.borderRadius = "8px";
        editbtn.style.color = "#fff";
        editbtn.style.textTransform = "capitalize";
        // delete item on click
        apendsection.id = "uniqueId" + ranValue;
        // calling delete function on click
        deletebtn.onclick = function () {
            deletes("uniqueId" + ranValue);
        };
        // edit functionality
        editbtn.onclick = function () {
            editvalue("titleId" + ranValue, "desId" + ranValue, "dateId" + ranValue, "uniqueId" + ranValue);
        };
        // empty dialogbox on load
        document.getElementById("inptitle").value = "";
        document.getElementById("description").value = "";
        document.getElementById("inpdate").value = "";
        // dialog box remove attribute
        let x = document.getElementById("dialog");
        x.removeAttribute('open', true);

    }
}