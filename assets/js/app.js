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
let session = "PM"
if(hr>12){
    hr=hr-12
    session="AM"
}
let min = d.getHours();
let sec = d.getSeconds();


let result = `${setZero(hr)} : ${setZero(min)} : ${setZero(sec)} ${session}`;

 document.getElementById('digitalClock').innerHTML=result

  setTimeout(() => {
    digitclock()
  }, 1000);
}


digitclock()


