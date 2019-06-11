let dest = {
    city : " ",
    country : " "
}


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
            
    req.open(type, "35.246.36.67:8080/hol-1.0/api" + ext);
    req.setRequestHeader("Content-Type","application/json");
    req.send(x);
        
    })
}

function update(){
    let y = new dest();
    y.city = document.getElementById("city");
    y.country = document.getElementById("country");
    y = JSON.stringify(y);
    var text = document.getElementById("user").value;
   fetchData("PUT","/destination/" + text, y).then((req)=>{
console.log(req.responseText);
})};

