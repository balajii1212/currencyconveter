// const e = require("express");

const BASE_URL = "https://raw.githubusercontent.com/WoXy-Sensei/currency-api/main/api";



const fromcurr=document.querySelector(".from select");
const tocurr = document.querySelector(".to select");

const dropdown= document.querySelectorAll(".dropdown select");
const img = document.querySelector("img");
const btn= document.querySelector("button");

const msg = document.querySelector(".msg");

for(let select of dropdown){
for(currcode in countryList){
     let newOption = document.createElement("option");
     newOption.innerText= currcode;
     newOption.value= currcode;
     if(select.name==="from" && currcode==="USD"){
       newOption.selected="selected";
     }else if(select.name==="to" && currcode==="INR"){
        newOption.selected="selected";
     }
     select.append(newOption);
     select.addEventListener("change",(evt)=>{
        updateflag(evt.target);
});
}  
}

 const updateflag=(element)=>{
    let currcode=element.value;
    let countrycode=countryList[currcode];
    let newsrc=`https://flagsapi.com/${countrycode}/flat/64.png`;
    const img=element.parentElement.querySelector("img");
    img.src=newsrc;

  };

  btn.addEventListener("click", async (evt)=>{
   evt.preventDefault(); 
   
   let amount = document.querySelector(".amount input");
   let value = amount.value;
  
   const url=`${BASE_URL}/${tocurr.value}_${fromcurr.value}.json`;

   let respone = await fetch(url);
   let data = await respone.json();
    
   let ratee = data.rate;
   msg.innerText=`${value} ${fromcurr.value.toUpperCase()} = ${value*ratee} ${tocurr.value}`;

});

