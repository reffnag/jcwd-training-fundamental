//condtiton 

let lokasi = "Bogor";

if(lokasi == "Batam"){
    console.log("Welcome to Batam");
}

else if(lokasi == "Jakarta"){
    console.log("Welcome to Jakarta");
}

else {
    console.log("Selamat datang di Purwadhika");
}

//loop
for (let i = 0 ; i < 3 ; i++){
    console.log(Hello);
}

let inputValue= 7;
let isprime=inputValue==1? false:true;

for(let i=2;i<inputValue;i++){
  inputValue%i==0? isprime*=false :isprime*=true;
};

console.log(`${inputValue} is ${isprime? 'prime':'not prime'} number`);