let softSkills = {
    Trello: '49%',
    Git: '87%',
    GitHub : '50%',
    Discord: '15%',
}

//EXERCICE 1
//let elements = document.querySelectorAll(`div#liste-soft-skills > h2`)
console.log(elements);

//EXERCICE 2 
for (const property in softSkills) {
    elements.forEach(element => {
        if(property == element.innerText){
            element.innerHTML += ` ${softSkills[property]}`;

            if (Number(softSkills[property].slice(0, -1))<50) {
                element.style.backgroundColor = "red";

            } else if (Number(softSkills[property].slice(0, -1))>50  && Number(softSkills[property].slice(0, -1))!=100){
                element.style.backgroundColor = "green";
                element.style.color ="white";

            } else if (Number(softSkills[property].slice(0, -1))==100){
                element.style.backgroundColor = "gold";
            }
        }
        
    });
}

let elements = document.querySelectorAll('div#liste-soft-skills' > h2);

for (const key in softSkills) {
    elements.forEach(element => {
        if (key == element.innerText) {
            element.innerText += `${softSkills[key]}`;     
            if (Number(softSkills[key].slice(0, -1))<50) {
                element.style.background
                
            }
        }
    });
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        
    }
}