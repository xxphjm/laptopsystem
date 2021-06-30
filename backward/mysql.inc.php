<?php
function openDB(){
    $host='localhost';
    $name='laptop';
    $user='root';
    $password='0805';
    $dsn="mysql:host=$host;dbname=$name;charset=utf8";
    try {
        $conn=new PDO($dsn,$user,$password);
            $response['status']=200;
            $response['result']=$conn;
    
    
    } catch (PDOException $e) {
          $response['status']=$e->getCode();
          $response['message']=$e->getMessage();
    
       
    }
    return ($response);
}

?>