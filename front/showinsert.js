import insert from "./insert.js";
export default function showinsert() {
    $('#content').empty();
    $('#message').empty();
    axios.get("http://localhost:8888/laptopsystem/backward/index.php?action=select")
    .then(res => {
      $('#content').empty();
        let response=res["data"];
    
        response.result.forEach(e => {
          let content=`
          <div class="mb-2">   <input type="radio"id="id" name="id" value="${e.id}">
          ${e.name}
             ${e.cpu}
              ${e.ram}
              ${e.rom}
             ${e.price}元</div>
          `
          $("#content").append(content);
      });
    let but="<button id='choose'  class='btn btn-warning'>選擇</button>";

    $("#message").html(but);
    $('#choose').click(function (e) { 
       
        insert();
    })
              
          
    })
    .catch(err => {
        console.error(err); 
    })  
    
}
export {showinsert};