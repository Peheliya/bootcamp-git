// tbody        :    table-data-js
// Input fields :    fname lname age email phone
// Buttons      :    reset save
//foot          :   table-foot-js

let user = [];// initialize a user array
const userProperties=['firstName','lastName','age','email','phone'];// input fileds 

const btn_addUser = () => {

    if(document.getElementById('p3-form')[0].checkValidity()){//check if data is valid or not
        user.push({
            firstName:document.getElementById('fname').value,// pushes a new user to user array
            lastName:document.getElementById('lname').value,
            age:document.getElementById('age').value,
            email:document.getElementById('email').value,
            phone: document.getElementById('mobile').value
            });
        
            let tableElement = document.getElementById('table-p3');// Selecting relevent div
            
            let tBodyElement = document.getElementById('table-data-js');// Selecting table body <tbody> to remove existing data
            tBodyElement.innerHTML = null;
        
            let rowElement,tdElement ;
        
        
            for(let i=0; i<user.length;i++){
                rowElement = document.createElement('tr');//New row <tr>
        
                tdElement = document.createElement('td');//each field <td>
                tdElement.innerText=i+1;//to show row number
                rowElement.append(tdElement);// add <td> to <tr>

                for(let j=0; j<userProperties.length; j++){ // this adds each property and its values to <td>s 
                    tdElement = document.createElement('td');
                    tdElement.innerText=user[i][userProperties[j].toString()];
                    rowElement.append(tdElement);
                }
            }
        
            tableElement.append(rowElement);// <tr> to <table>

            //clearText();// Clears all text fields after clicking on button.
            
            let tfootElement = document.getElementById('table-foot-js');
            tfootElement.innerText='Total Number of Records : '+user.length;
            
            alert('New User \''+user[user.length-1].firstName+'\' Added Successfully.!');
    } else{
        alert('You haven\'t entered any data or Data is not in correct format.\n Please check data and try again.');
    }
}

const clearText = ()=>{

    document.getElementById('fname').value='';
    document.getElementById('lname').value='';
    document.getElementById('age').value='';
    document.getElementById('email').value='';
    document.getElementById('mobile').value='';
}

// const btn_Clear = () =>{
//     clearText();
// }