const header = document.getElementById('header-container');
header.style.backgroundColor = 'rgb(0, 176, 105)';


const emergencyTasks = document.getElementsByClassName('emergency-tasks')[0];
emergencyTasks.style.backgroundColor = 'rgb(200,20,100)';

const emergencyTasksBack = document.querySelectorAll('.emergency-tasks h3');

for (let index = 0; index < emergencyTasksBack.length; index +=1 ) {
    emergencyTasksBack[index].style.backgroundColor = 'rgb(20,40,50)';
}


const noEmergency = document.querySelectorAll('.no-emergency-tasks h3');

for (let index = 0; index < noEmergency.length; index +=1) {
    noEmergency[index].style.backgroundColor = 'rgb(20,40,50)';
}

const noEmergencyNo = document.querySelectorAll('.no-emergency-tasks');

for (let index = 0; index < noEmergencyNo.length; index +=1) {
    noEmergencyNo[index].style.backgroundColor = 'rgb(100,200,300)';
}

const trybeName = document.querySelectorAll('footer');

for (let index = 0; index < trybeName.length; index +=1) {
    trybeName[index].style.backgroundColor = 'rgb(0,50,0)';
}