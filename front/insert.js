import showinsertpage from "./showinsertpage.js";
export default function showinsert() {

    $('#message').empty();
    let data={
        "id":$("input[name=id]:checked").val(),
        }
    console.log(data)
    axios.post("http://localhost:8888/laptopsystem/backward/index.php?action=select",Qs.stringify(data))
    .then(res => {
     
        let response=res['data']
        let row=response['result'][0]
        let content=`
        <div class="col-6">
        <form action="">
        <div class="form-group mb-2">
            <label for="">電腦名稱</label>
            <input type="text" class="form-control border-0" value='${row.name}'id="lpname">
        </div>
        <div class="form-group mb-2">
            <label for="">數量</label>
            <input type="number" class="form-control border-0" id="counts" value="1">
        </div>
        <div class="form-group mb-2">
            <label for="">購買人</label>
            <input type="text" class="form-control border-0" id="name">
        </div>
        <div class="form-group mb-4">
            <label for="">電話</label>
            <input type="text" class="form-control border-0" id="phone">
        </div>
        </form>
        <button id="send" onclick="function()" class="btn btn-warning">送出</button>
    </div>
      
        `
        $('#content').html(content);
        $('#send').click(function (e) { 
            showinsertpage();
            
        });
    })
    .catch(err => {
        console.error(err); 
    })
    
    
}
export {showinsert};