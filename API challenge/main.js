//generate ID for the page (random number between 1 and 20)
const endpointID = Math.floor(Math.random() * 20) + 1;
const url = "https://reqres.in/api/color/"
const newUrl = url + endpointID;
console.log(newUrl);
const box = document.querySelector(".box_color");

//Fetch data. If the data does not exist; set box to grey
fetch(newUrl)
.then (response => {
    return response.json()
})
.then(data => {
    console.log(data.data.color)
    let boxColor = data.data.color;
    box.style.backgroundColor = boxColor;
})
.catch((error) => {
    console.log(error);
    box.style.backgroundColor = "grey";
})

//create new endpoint 
function myFunction() {
const endpointID2 = Math.floor(Math.random() * 20) + 1;
const newUrl2 = url + endpointID2;
// fetch new data
// create new div element 
// Append to body:
    fetch(newUrl2)
    .then (response => {
        return response.json()
    })
    .then(data => {
        console.log(data.data.color)
        let div = document.createElement("div");
                div.style.width = "5vh";
                div.style.height = "5vh";
                div.style.background = data.data.color;
                document.body.appendChild(div);
    })
    .catch((error) => {
        console.log(error);
        let div = document.createElement("div");
                div.style.width = "5vh";
                div.style.height = "5vh";
                div.style.background = "grey";
                document.body.appendChild(div);
    })
    
        }





   