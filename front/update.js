export default function update(id,oldcount) {
    let data={
        "id":id,
        "oldcount":parseInt(oldcount),
        "counts":parseInt($('#counts').val()),
        "name":$('#name').val(),
        "lpname":$('#lpname').html(),
        "phone":$('#phone').val(),
        };
        console.log(data);
        axios.post("http://localhost:8888/laptopsystem/backward/index.php?action=update",Qs.stringify(data))
        .then(res => {
            let response = res['data'];
            console.log(response)
             alert(response['message'])
        
    
        })
        .catch(err => {
            console.error(err); 
        })
}