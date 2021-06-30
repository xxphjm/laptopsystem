export default function showinsertpage() {
    let data={
        "lpname":$('#lpname').val(),
        "counts":parseInt($("#counts").val()),
        "name":$('#name').val(),
        "phone":$('#phone').val(),
        };
        console.log(data)
        axios.post("http://localhost:8888/laptopsystem/backward/index.php?action=insert",Qs.stringify(data))
        .then(res => {
            let response = res['data'];
           
         
            alert(response['message'])
            
           
        })
        .catch(err => {
            console.log(err); 
        })
}