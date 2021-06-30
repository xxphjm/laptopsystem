<?php
require_once 'mysql.inc.php';
function rankselect(){
$response = openDB();
$random=$_POST['random'];
if($response['status']==200) {
    $conn = $response['result'];
    if ($random=="up") {
      
         $sql = "SELECT  *  FROM  `stock` ORDER BY `price`";
         $stmt = $conn->prepare($sql);
         $result = $stmt->execute();
        
    } 
    elseif ($random=="down") {
        $sql = "SELECT  *  FROM  `stock` ORDER BY `price` DESC";
        $stmt = $conn->prepare($sql);
        $result = $stmt->execute();
    }
    elseif ($random=="hot") {
        $sql = "SELECT  *  FROM  `stock` ORDER BY `rank` DESC";
        $stmt = $conn->prepare($sql);
        $result = $stmt->execute();
    }

    else {
          $sql = "SELECT  *  FROM  `stock`";
          $stmt = $conn->prepare($sql);
          $result = $stmt->execute();
        }
    
     if($result) {
       $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
       $response['status'] = 200; 
       $response['message'] = '查詢成功';
       $response['result'] = $rows;
    }
    else {
       $response['status'] = 400; 
       $response['message'] = 'SQL錯誤';
    }
}
return ($response);
}

?>
  
       