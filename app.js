
const d1 = document.getElementById('from');
const d2=document.getElementById('to');
const i1=document.querySelector('.fromicon');
const i2=document.querySelector('.toicon');
const b=document.querySelector("button");
let mes=document.getElementById('display');
console.log(mes);

  
    for(x in countryList)
    {
       let newoption=document.createElement("option");
       newoption.innerText=x;
       newoption.value=x;
      d1.append(newoption);
    }
    for(x in countryList)
   {
           let newoption=document.createElement("option");
           newoption.innerText=x;
           newoption.value=x;
          d2.append(newoption);
    }

    d1.addEventListener('change', function() {
    
        const curr = d1.options[d1.selectedIndex].text;
        const country=countryList[curr];
       console.log(curr+"==="+country);
       let img=i1.querySelector("img");
       img.src=`https://flagsapi.com/${country}/flat/64.png`
       //console.log(img.src);
       
    
      

       

    });
    d2.addEventListener('change', function() {
        // Get the selected option's text
        const curr = d2.options[d2.selectedIndex].text;
        const country=countryList[curr];
       console.log(curr+"----"+country);
       let img=i2.querySelector("img");
       img.src=`https://flagsapi.com/${country}/flat/64.png`
       //console.log(img.src);
    });
    b.addEventListener("click",async(evt)=>{
           evt.preventDefault();
           const cur1 = d1.options[d1.selectedIndex].text;
           const cur2 = d2.options[d2.selectedIndex].text;
           let amount=document.querySelector("input");
           if(isNaN(amount.value))
            {
              alert("Amount cannot be String type")
            }
            else{
           if(amount.value=="")
            amount.value=1;
       
           var myHeaders = new Headers();
           myHeaders.append("apikey", "96M1PE4CnT41MmtlZhQpKjRnJLoWIZpf");
           
           var requestOptions = {
             method: 'GET',
             redirect: 'follow',
             headers: myHeaders
           };
           
           let response=await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${cur2}&from=${cur1}&amount=${amount.value}`, requestOptions)
             .then(response => response.json())
             .then(json => {
                let val=json.result;
              mes.innerText=`${amount.value}${cur1}=${val}${cur2}`;
                
                
            })
             .catch(error => console.log('error', error));
          }
    })

