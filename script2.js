const loadAPIDataClick = async () =>{
    let countries = await urlToJsonObj('https://restcountries.com/v3.1/all');
}

let urlToJsonObj = async (url) => {
    fetch(url)
    .then(async (objResp)=>{
        if(objResp.status == 200){
            let objString = await objResp.text();
            let jsonObj = await JSON.parse(objString);
            toTable(jsonObj);
        }else{
            throw new Error('Failed to load data from API.!');
        }
    }).catch((error)=>{
        console.log(error);
    })
    
}

const toTable = (countries) =>{
    let countryArray = countries;
    let count=0;
    let tableElement = document.getElementById('table-p4');// Selecting relevent div

    let tBodyElement = document.getElementById('table-API-js');// Selecting table body <tbody> to remove existing data
            tBodyElement.innerHTML = null;
        
            let rowElement,tdElement ;
            console.log(countryArray);
        
            for(let i=0; i<countryArray.length; i++ ){
                rowElement = document.createElement('tr');//New row <tr>
                if(i%2==0){
                    rowElement.style='background-color : #ddeeff;';
                }

                tdElement = document.createElement('td');//each field <td>
                tdElement.innerText=i+1;//to show row number
                rowElement.append(tdElement);// add <td> to <tr>

                tdElement = document.createElement('td');
                tdElement.innerText=countryArray[i].name.common;
                rowElement.append(tdElement);

                newTdElement(countryArray,i,rowElement,'capital');


                tdElement = document.createElement('td');
                imgElement = document.createElement('img');
                imgElement.src=countryArray[i].flags.png;
                imgElement.alt=countryArray[i].flags.alt;
                imgElement.border=1;
                imgElement.style='width : 50px ; height : auto ;';
                rowElement.append(imgElement);

                if(countryArray[i].currencies){
                    let currencyArray=[];
                    currencyArray = (Object.keys(countryArray[i].currencies));
                    let currencyString='';
                    for(let i=0; i<currencyArray.length;i++){
                        currencyString+=currencyArray[i]+'\n';
                    }
                    tdElement = document.createElement('td');
                    tdElement.innerText=currencyString;
                    rowElement.append(tdElement);
                }else{
                    tdElement = document.createElement('td');
                    tdElement.innerText='N/A';
                    rowElement.append(tdElement);
                }

                newTdElement(countryArray,i,rowElement,'region');
                newTdElement(countryArray,i,rowElement,'subregion');
                newTdElement(countryArray,i,rowElement,'population');

                tdElement = document.createElement('td');
                let timeZoneArray = [];
                timeZoneArray = countryArray[i].timezones;
                let timeZoneString = timeZoneArray[0];
                timeZoneString=timeZoneArray.length>1?timeZoneString+ ' -\n'+timeZoneArray[timeZoneArray.length-1]:timeZoneString;
                tdElement.innerText=timeZoneString;
                rowElement.append(tdElement);

                if(countryArray[i].languages){
                    tdElement = document.createElement('td');
                    let langArray = [];
                    langArray = (Object.values(countryArray[i].languages));
                    let langString='';
                    for(let i=0; i<langArray.length;i++){
                        langString+=langArray[i]+'\n';
                    }
                    tdElement.innerText=langString;
                    rowElement.append(tdElement);
                }else{
                    tdElement = document.createElement('td');
                    tdElement.innerText='N/A';
                    rowElement.append(tdElement);
                }

                newTdElement(countryArray,i,rowElement,'area');

                tableElement.append(rowElement);// <tr> to <table>
                count++;
            }
    
            let tfootElement = document.getElementById('table-foot-js');
            tfootElement.innerText='Total Number of Records : '+ count;
}

const newTdElement = (countryArray,i,rowElement,propertyName)=>{
    tdElement = document.createElement('td');
    let propertyValue = countryArray[i][propertyName];
    propertyValue=(propertyValue===undefined||null)?'N/A':propertyValue;
    tdElement.innerText=propertyValue;
    rowElement.append(tdElement);
}




/////////////////////////////////////////////////////////////////////////



// let xdata = async (url) =>{
//     let myObject = await fetch(url);
//     console.log('objectResponce ; '+myObject);
//     let myText = await myObject.text();
//     console.log('objString ; '+myText);
//     let xy = await JSON.parse(myText);
//     console.log(xy);
// }

// let loadAPIDataFromServer = async() =>{
//     return new Promise((resolve,reject)=>{
//         const http = new XMLHttpRequest();
//         http.onload = ()=>{
//             if(http.status==200){
//                 resolve(JSON.parse(http.responseText));
//             }
//         }
//         http.onerror = () =>{
//             reject(new Error("Faild to Load Data from API"));
//         }
//         http.open("GET",'https://restcountries.com/v3.1/all',true);
//         http.send();

//     })
// }


//window.loadAPIData = loadAPIData; 