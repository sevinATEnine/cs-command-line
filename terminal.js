let names = {
  "c@d3N":"ThatGuyOverThere",
  "$|m0n":"TacoMan",
  "GUesT_1.0":"guest"
}//basic name definitions

var permitted = window.sessionStorage.getItem('permittedTerminalCST');
if (permitted != 'affirmed') {
  document.getElementById('body').style.display = 'none';
  alert("Sorry, but you do not have permission to use the cst terminal. Please use the sign-in on our home page to gain access.");
  // location.replace("./index.html");
}else {
  document.getElementById("prompt").textContent = "CST/"+names[sessionStorage.getItem("userTerminalCST")]+"-->";
}//Access granted? Time to find out!

var command = document.getElementById("command");
var prev = document.getElementById("previous");
var cmdSplit = null;
//Just some DOM nodes

function doCommand() {
  const output = document.createElement("li");
  cmdSplit = command.value.split(" ");
  switch (cmdSplit[0]) {
    case "help": {
      output.innerHTML = "<ul><li>help: Shows list of basic commands<li>docs: Shows all commands<li>credits: Shows credits<li>quit or exit: Logs out of CST<li>kill: Kills the terminal and forwards to an empty page</ul>";
      output.className = "output";
      break;
    }
    case "quit": {
      location.replace("./index.html");
      sessionStorage.setItem("permittedTerminalCST","loggedOut");
      break;
    }
    case "credits": {
      output.innerHTML = "<ul><li>Simon & Caden: Programming<li>Todd: Graphics</ul>";
      output.className = "output"
      break;
    }
    case "clear": {
      prev.innerHTML = "";
      output.innerHTML = "Command history cleared";
      output.className = "output";
      break;
    }
    case "exit": {
      location.replace("./index.html");
      break;
    }
    case "//": {
      break;
    }//comment in CST, returns no output

    case "kill": {
      location.replace('about:blank');
      break;
    }
    case "docs": {
      break;
    }
    default: {
      output.innerHTML = "Error 01: Invalid command";
      output.className = "error";
    }
  }
  prev.appendChild(output);
  command.value = "";
};

const node = document.getElementById("command");
node.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
      command = document.getElementById("command");
      const add = document.createElement("li");
      add.textContent = ("CST/"+names[sessionStorage.getItem("userTerminalCST")]+"-->"+command.value);
      add.className = "add";
      if(command.value.split(" ")[0]=="//") {
        add.className = "comment"
      }
      prev.appendChild(add);
      doCommand();
    }
});
