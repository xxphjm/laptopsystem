export default function showdelete(count,lpname) {
    let data={
        "id":$("input[name=lpname]:checked").val(),
        "counts":parseInt(count),
        "lpname":lpname,
        }
        console.log(data)
        axios.post('http://localhost:8888/laptopsystem/backward/index.php?action=delete',Qs.stringify(data))
        .then(res => {
            let response=res['data']
        
           alert(response['message'])
           $('input[name=lpname]:checked').parent().empty();
        })
        .catch(err => {
            console.error(err); 
        })
}