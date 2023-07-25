<?php 

$action = $_GET["action"];
$arg1 = $_GET["arg1"];
$arg2 = $_GET["arg2"];
echo "Performing action " . $action . " with arguments " . $arg1 . " and " . $arg2;

switch ($action) {
    case "help":
        break;
    case "read":
        break;
    case "append":
        break;
    case "write":
        break;
    case "erase":
        break;
    case "clear":
        break;
    case "make":
        break;
    case "remove":
        break;
    case "change":
        break;
    case "move":
        break;
    case "credits":
        break;
    case "logout":
        header("Location: ./index.html");
    case "upload":
        break;
}

?>