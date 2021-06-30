export default function showselect() {
   let data={
    'random':$('#random').val(),
   }
   
 
    axios.post('http://localhost:8888/laptopsystem/backward/index.php?action=rankselect',Qs.stringify(data))
      .then(res => {
        $('#content').empty();
        $('#message').empty();
        let response=res['data'];
        response.result.forEach(e => {
            let content=`
            <div class="row align-items-center mb-5">
            <div class="col-md-6 mb-3 mb-md-0" id="img">
            <img src="./img/${e.id}.jpg" alt="" width="60%" height="60%">
            </div>
            <div class="col-md-6">
            <div>${e.name}</div>
            <div>處理器：${e.cpu}</div>
            <div>記憶體：${e.ram}</div>
            <div>硬碟：${e.rom}</div>
            <div>價格：${e.price}元</div><br>
            </div>
        </div>
            
            `
            $("#content").append(content);
          
        });
  
      
      })
      .catch(err => {
          console.error(err); 
      })
}