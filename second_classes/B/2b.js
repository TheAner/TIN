let date = new Date();
const interval = setInterval(function() {
    date = new Date();
    console.log(date)
    if(date.getSeconds()%2==0){
        console.log("This second is even!")
    }
}, 1000);