<?php
if (isset($_GET['action'])) {
    $action=$_GET['action'];
}
else {
    $action='_no_action';
}
switch ($action) {
    case 'select':
        require_once "select.php";
        $response=select();
        break;
    case 'delete':
        require_once "delete.php";
        $response=delete();
        break;
    case 'update':
        require_once "update.php";
        $response=update();
        break;
    case 'listselect':
        require_once "listselect.php";
        $response=listselect();
        break;
    case 'rankselect':
        require_once "rankselect.php";
        $response=rankselect();
        break;
    case 'insert':
        require_once "insert.php";
        $response=insert();
        break;
    default:
        $response['status']=404;
        $response['message']="action not found";
        break;
}
echo json_encode($response);
?>