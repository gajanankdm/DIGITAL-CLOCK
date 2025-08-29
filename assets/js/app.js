const cl = console.log;

const setZero = (num) =>{
    if(num<10){
        return "0" + num
    }else{
        return num
    }
}



const  digitclock = () =>{
    

let d = new Date();

let hr = d.getHours();

if(hr>12){
    hr=hr-12
}
let min = d.getHours();
let sec = d.getSeconds();
let session = "PM"

let result = `${setZero(hr)} : ${setZero(min)} : ${setZero(sec)} ${session}`;

 document.getElementById('digitalClock').innerHTML=result

  setTimeout(() => {
    digitclock()
  }, 1000);
}


digitclock()