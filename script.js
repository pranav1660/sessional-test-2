fetch("https://jsonplaceholder.typicode.com/users?utm_source=Mailerlite&utm_medium=E-mail&utm_campaign=Test%20Series&utm_term=2022-08-11")
.then((data)=>{
    //console.log(data);
    return data.json();
}).then((objectData)=>{
    console.log(objectData[0].id);
    let tableData="";
    objectData.map((values)=>{
        tableData+=`  <tr>
        
        <td>${values.id}</td>
        <td>${values.name}</td>
        <td>${values.username}</td>
        <td>${values.email}</td>
        <td>${values.phone}</td>
        <td>${values.website}</td>
        
      </tr>`;
    });
    document.getElementById("table_body").innerHTML=tableData;
})