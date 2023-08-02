function changeData(){
    console.log()
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange=function(){
        let promise = new Promise((resolve,reject)=>{

        if(xhttp.readyState===4 && xhttp.status==200){
        var data = JSON.parse(this.responseText);
        var output =`<tr> 
        <th>UserId</th> 
        <th>Id</th>  
        <th>Checkbox</th>
         </tr>`;
        for(let i=0;i<data.length;i++)
        {
            var checkbox
            if(data[i].completed){
                checkbox = "checked"
            }else{
                checkbox = ''
            }
            console.log(checkbox);
                 output += `<tr>
                <td>${data[i].id}</td>
                <td>${data[i].title}</td>
                <td><input type="checkbox" onclick="count() ${checkbox}"/><td>
                
            </tr>`
        }
        resolve(output)
    }
        })
        promise.then((val)=>{

        
        document.getElementById('tbl').innerHTML = val
        })
        }
       
    xhttp.open('GET','https://jsonplaceholder.typicode.com/todos',true)
    xhttp.send()
    }

   let n=0;
   function count(){
    n++;
    let promise = new Promise((resolve,rejecrt)=>{
        if(n==5){
            resolve("congo,5 tasks have completed");
        }
    })
    promise.then(()=>alert('congo,5 tasks have completed'))
}
       