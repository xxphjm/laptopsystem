import showdeletepage from "./showdeletepage.js";
import showupdatepage from "./showupdatepage.js";
function showdelete(){
    showList("delete");
}
function showupdate(){
    showList("update");
}
function showList(type){
    axios.get("http://localhost:8888/laptopsystem/backward/index.php?action=listselect")
    .then(res => {
      $('#content').empty();
        let response=res["data"];
    
        response.result.forEach(e => {
          let content=`
          <div class="mb-2">  
           <input type="radio"id="id" name="lpname" value="${e.id}">
          <label for="" id="na" >${e.lpname}</label>
          
          <label for="" id="count" >${e.counts}</label>台
          ${e.name}
         
             ${e.phone}</div>
          `
          
        
          $("#content").append(content);
          
      });
        
 
        switch(response['status']){
            case 200:
                
              if (type=="delete") {
                let but="<button id='dodelete' onclick='function()' class='btn btn-warning'>刪除</button>";
      
                $("#message").html(but);
                $('#dodelete').click(function (e) { 
                   let count=$("input[name=lpname]:checked").siblings("#count").html()
                   let lpname=$("input[name=lpname]:checked").siblings("#na").html()

                    showdeletepage(count,lpname);
                    
                  });
              }
              else
              {
                let but="<button id='showupdate' class='btn btn-warning'>更新</button>";
                $("#message").html(but);
                $('#showupdate').click(function (e) { 
                 
                      showupdatepage();
                  });  
              }
                
            default:
                
                break;
        }
    })
    .catch(err => {
        console.error(err); 
    })  
}  

export { showupdate, showdelete };

