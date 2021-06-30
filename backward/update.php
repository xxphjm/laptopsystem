<?php
   require_once './mysql.inc.php';
   function update(){
   $id=$_POST['id'];
   $counts=$_POST['counts'];
   $name=$_POST['name'];
   $lpname=$_POST['lpname'];
   $phone=$_POST['phone'];
   $oldcount=$_POST['oldcount'];
   $response=openDB();
if ($response['status']==200) {
    $conn=$response['result'];
    $sql="UPDATE `orderform` SET `name`=?,`phone`=?,`counts`=? WHERE `id`=?";
    $stmt=$conn->prepare($sql);
    $result=$stmt->execute(array($name,$phone,$counts,$id));
    if($result){
       $count=$stmt->rowCount();
       if ($count<1) {
        $response['status']=204;
        $response['message']="更新失敗";
       }
       else {
         if ($count>=$oldcount) {
            $a=$counts-$oldcount;
            $sql="UPDATE `stock` SET `rank`=`rank`+? WHERE `name` =?";
            $stmt=$conn->prepare($sql);
            $result=$stmt->execute(array($a,$lpname));
         } else {
            $a=$oldcount-$counts;
            $sql="UPDATE `stock` SET `rank`=`rank`-? WHERE `name` =?";
            $stmt=$conn->prepare($sql);
            $result=$stmt->execute(array($a,$lpname));
         }
         
        $response['status']=200;
        $response['message']="更新成功";
       };
    }
    else{
        $response['status']=400;
        $response['message']="SQL失敗";
    }
   
}
return ($response);
   }
?>
   

