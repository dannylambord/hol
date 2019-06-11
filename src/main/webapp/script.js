function fetchData(type,ext,sen) {
    let x = sen;

    return new Promise((resolve, reject)=>{

            const req = new XMLHttpRequest();
                    
        req.onreadystatechange = () =>{
            if (req.readyState === 4) {
                if (req.status === 200) {
                    resolve(req);
                    console.log("connected");
                } else {
                    reject("Failed");
                }
            }

        };
            
    req.open(type, "http://localhost:8080/holPlanner-1.0/api" + ext);
    req.setRequestHeader("Content-Type","application/json");
    req.send(x);
        
    })
}



    function getAll(){
       fetchData("GET", "/destination/",null).then((req)=>{
    console.log(req.responseText);
      
    })};

    function getOne(){
        var text = document.getElementById("user").value;
        fetchData("GET", "/destination/" + text,null).then((req)=>{
     console.log(req.responseText);
       
     })};


