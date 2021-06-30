    <?php
   require_once './mysql.inc.php';
   function delete(){
   $id=$_POST['id'];
   $counts=$_POST['counts'];
   $lpname=$_POST['lpname'];
   $response=openDB();
   if ($response['status']==200) {
    $conn=$response['result'];
    $sql="DELETE FROM `orderform` WHERE `id`=?;UPDATE `stock` SET `rank`=`rank`-? WHERE `name` =?";
    $stmt=$conn->prepare($sql);
    $result=$stmt->execute(array($id,$counts,$lpname));
    if($result){
       $count=$stmt->rowCount();
       if ($count<1) {
        $response['status']=204;
        $response['message']="刪除失敗";
       }
       else {
        $response['status']=200;
        $response['message']="刪除成功";
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
    
   
