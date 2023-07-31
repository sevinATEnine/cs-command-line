let names = {
  "c@d3N":"ThatGuyOverThere",
  "$|m0n":"TacoMan",
  "GUesT_1.0":"guest"
}//basic name definitions

var permitted = window.localStorage.getItem('permittedTerminalCST');
if (permitted != 'affirmed') {
  document.getElementById('body').style.display = 'none';
  alert("Sorry, but you do not have permission to use the cst terminal. Please use the sign-in on our home page to gain access.");
}else {
  document.getElementById("prompt").textContent = "CST/"+names[localStorage.getItem("userTerminalCST")]+"-->";
}//Access granted? Time to find out!

var command = document.getElementById("command");
var previous = document.getElementById("previous");
//Just some DOM nodes

function doCommand() {
  //switch statement goes here later, but I don't have time to work on it now.
  command.value = "";
}