import update from "./update.js";
export default function showupdatepage() {
    $('#message').empty();
    let data={
        "id":$("input[name=lpname]:checked").val(),
        }
        console.log(data)
        axios.post('http://localhost:8888/laptopsystem/backward/index.php?action=listselect',Qs.stringify(data))
        .then(res => {
            let response=res['data']
           let row=response['result'][0]
           console.log(row)
            let content=`
            <div class="form-group mb-2">
                <label for="">電腦名稱</label>
                <div><label for=" class="form-control border-0" value="${row.lpname}" id="lpname">${row.lpname}</label></div>
            </div>
            <div class="col-6">
            <form action="">
            
            <div class="form-group mb-2">
                <label for="">數量</label>
                <input type="number" class="form-control border-0" id="counts" value="${row.counts}">
            </div>
            <div class="form-group mb-2">
                <label for="">姓名</label>
                <input type="text" class="form-control border-0" id="name" value="${row.name}">
            </div>
            <div class="form-group mb-4">
                <label for="">電話</label>
                <input type="text" class="form-control border-0" id="phone" value="${row.phone}">
            </div>
            </form>
            
        </div>
        <button id="doupdate" onclick="function()"class="btn btn-warning">更新</button>
            `
            console.log(response)
            $('#content').html(content);
            $('#doupdate').click(function (e) { 
            let id=row['id']
            let oldcount=row['counts']
              update(id,oldcount);
                
            });
        })
        .catch(err => {
            console.error(err); 
        })
}