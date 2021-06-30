<?php
   require_once './mysql.inc.php';
  function insert(){
   $lpname=$_POST['lpname'];
   $counts=$_POST['counts'];
   $name=$_POST['name'];
   $phone=$_POST['phone'];
   $response=openDB();
if ($response['status']==200) {
    $conn=$response['result'];
    $sql="INSERT INTO `orderform`(`lpname`, `counts`, `name`, `phone`) VALUES (?,?,?,?);UPDATE `stock` SET `rank`=`rank`+? WHERE `name` =?";
    $stmt=$conn->prepare($sql);
    $result=$stmt->execute(array($lpname,$counts,$name,$phone,$counts,$lpname));
    if($result){
       $count=$stmt->rowCount();
       if ($count<1) {
        $response['status']=204;
        $response['message']="新增失敗";
       }
       else {
        
        $response['status']=200;
        $response['message']="新增成功";
       
       }
    
    }
    else{
        $response['status']=400;
        $response['message']="SQL失敗";
    
    
    }
}
return ($response);
  }
?>
   
