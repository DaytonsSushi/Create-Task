//GlobalVaribles
var rolesList =[];
var numberOfRoles = 0;
var roleCounter = 0;

// Decreases the number of a role to be added
function decreaseNumber(){
    if(numberOfRoles > 0){
    numberOfRoles--;   
    numberBox.innerHTML = numberOfRoles;
    }
}

// Increases the number of a role to be added
function increaseNumber(){
    numberOfRoles++;
    numberBox.innerHTML = numberOfRoles;
}

//Adds role typed to list
function addRole(){
var tempRole = roleInput.value;
for (var i =0; i <numberOfRoles; i++){
rolesList.push(tempRole);
}
console.log(rolesList);
}

//Randomizes the Roles and Shows them
function randomizeRoles(){
var listLength = rolesList.length;
for(var i = 0; i < listLength * listLength; i++){
    var role1 = Math.floor(Math.random()*listLength);
    var role2 = Math.floor(Math.random()*listLength);
    var temp = rolesList[role1];
    rolesList[role1] = rolesList[role2];
    rolesList[role2] = temp;
    }
console.log(rolesList);
}

//Shows The Person Their Role
function showRole(){
alert("Your Role is " + rolesList[roleCounter]);
roleCounter++;
if(roleCounter == rolesList.length){
alert("Have Fun With Your Game!"); 
}
}

//U.I
var mainBox = document.createElement("div");
mainBox.style.border = "solid";
mainBox.style.borderColor = "black";
mainBox.style.width = "40%";
mainBox.style.height = "200px";
mainBox.style.borderRadius = "15px";
mainBox.style.padding = "5px";
document.body.append(mainBox);

var roleInput = document.createElement("input");
roleInput.placeholder = "Create a role";
mainBox.append(roleInput);

var addRoleButton = document.createElement("button");
addRoleButton.innerHTML = "Add Role";
addRoleButton.addEventListener("click", addRole);
mainBox.append(addRoleButton);

var randomizeButton = document.createElement("button");
randomizeButton.innerHTML = "Randomize Roles";
randomizeButton.addEventListener("click", randomizeRoles);
mainBox.append(randomizeButton);

var showButton = document.createElement("button");
showButton.innerHTML = "Show Role";
showButton.addEventListener("click", showRole);
mainBox.append(showButton);

var upButton = document.createElement("button");
upButton.innerHTML = "Increase";
upButton.style.position = "absolute";
upButton.style.left = "16px";
upButton.style.top = "45px";
upButton.addEventListener("click", increaseNumber);
mainBox.append(upButton);

var downButton = document.createElement("button");
downButton.innerHTML = "Decrease";
downButton.style.position = "absolute";
downButton.style.left = "16px";
downButton.style.top = "90px";
downButton.addEventListener("click", decreaseNumber);
mainBox.append(downButton);

var numberBox = document.createElement("div");
numberBox.style.position = "absolute";
numberBox.style.left = "42px";
numberBox.style.top = "70px";
numberBox.style.width = "20px";
numberBox.style.height = "5%";
numberBox.innerHTML = numberOfRoles;
mainBox.append(numberBox);

