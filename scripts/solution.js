let regex = /\w{3,25}/g;

let sendButton = document.getElementById('bookHourBtn');

sendButton.addEventListener('click', ()=>{
    let lecturer = "";
    let month = "";
    let day = "";
    let time = "";
    // Make sure the lecturer selected is a valid lecturer
    let profValue = document.getElementById('lecturer');
    if(profValue.value == "Patrick"){
        lecturer = "Patrick";
    } else if (profValue.value == "Anar") {
        lecturer = "Anar";
    } else if (profValue.value == "Simeon") {
        lecturer = "Simeon";
    } else if (profValue.value == "Katoshki") {
        lecturer = "Katoshki";
    } else {
        return;
    }
    //Make sure the username meets requirements
    let userName = document.getElementById('username').value;
    if (regex.test(userName)){
        let apptTime = document.getElementById('dateTimeInput').value.split(" ");
        let dateString = apptTime[0].split("/");
        let apptCount = document.getElementById('consultCount').innerHTML;
        console.log(dateString);
        let month = dateString[1];
        let day = dateString[2];
        time = apptTime[1];
        apptCount = Number(apptCount)+1;
        document.getElementById('consultCount').innerHTML = apptCount;
        let consults = document.getElementById('consults');
        let newLi = document.createElement('li');
        consults.appendChild(newLi);
        let newAppt = document.createElement('span');
        newAppt.innerHTML = `${lecturer} - ${month}/${day} - ${time}`;
        let newChevron = document.createElement('i');
        newChevron.className = "fas fa-chevron-circle-right";
        newLi.appendChild(newAppt);
        newLi.appendChild(newChevron);
        $.notify("Access granted", "success", {position: "top-right"});
        userName = "";
    } else {
        document.getElementById('username').style.backgroundColor="red";
        document.getElementById('username').value = "Invalid username!";
        
    }    
});

